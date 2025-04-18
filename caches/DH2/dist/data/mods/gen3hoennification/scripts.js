"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var scripts_exports = {};
__export(scripts_exports, {
  Scripts: () => Scripts
});
module.exports = __toCommonJS(scripts_exports);
const Scripts = {
  inherit: "gen4",
  gen: 3,
  init() {
    const specialTypes = ["Fire", "Water", "Grass", "Ice", "Electric", "Dark", "Psychic", "Dragon"];
    let newCategory = "";
    for (const i in this.data.Movedex) {
      if (!this.data.Movedex[i])
        console.log(i);
      if (this.data.Movedex[i].category === "Status")
        continue;
      newCategory = specialTypes.includes(this.data.Movedex[i].type) ? "Special" : "Physical";
      if (newCategory !== this.data.Movedex[i].category) {
        this.modData("Movedex", i).category = newCategory;
      }
    }
  },
  useMoveInner(moveOrMoveName, pokemon, target, sourceEffect, zMove) {
    if (!sourceEffect && this.effect.id)
      sourceEffect = this.effect;
    if (sourceEffect && sourceEffect.id === "instruct")
      sourceEffect = null;
    let move = this.dex.getActiveMove(moveOrMoveName);
    if (this.activeMove) {
      move.priority = this.activeMove.priority;
    }
    const baseTarget = move.target;
    if (target === void 0)
      target = this.getRandomTarget(pokemon, move);
    if (move.target === "self" || move.target === "allies") {
      target = pokemon;
    }
    if (sourceEffect) {
      move.sourceEffect = sourceEffect.id;
      move.ignoreAbility = false;
    }
    let moveResult = false;
    this.setActiveMove(move, pokemon, target);
    this.singleEvent("ModifyMove", move, null, pokemon, target, move, move);
    if (baseTarget !== move.target) {
      target = this.getRandomTarget(pokemon, move);
    }
    move = this.runEvent("ModifyMove", pokemon, target, move, move);
    if (baseTarget !== move.target) {
      target = this.getRandomTarget(pokemon, move);
    }
    if (!move || pokemon.fainted) {
      return false;
    }
    let attrs = "";
    let movename = move.name;
    if (move.id === "hiddenpower")
      movename = "Hidden Power";
    if (sourceEffect)
      attrs += `|[from]${this.dex.getEffect(sourceEffect)}`;
    this.addMove("move", pokemon, movename, target + attrs);
    if (!target) {
      this.attrLastMove("[notarget]");
      this.add("-notarget", pokemon);
      return false;
    }
    const { targets, pressureTargets } = pokemon.getMoveTargets(move, target);
    if (!sourceEffect || sourceEffect.id === "pursuit") {
      let extraPP = 0;
      for (const source of pressureTargets) {
        const ppDrop = this.runEvent("DeductPP", source, pokemon, move);
        if (ppDrop !== true) {
          extraPP += ppDrop || 0;
        }
      }
      if (extraPP > 0) {
        pokemon.deductPP(move, extraPP);
      }
    }
    if (!this.singleEvent("TryMove", move, null, pokemon, target, move) || !this.runEvent("TryMove", pokemon, target, move)) {
      move.mindBlownRecoil = false;
      return false;
    }
    this.singleEvent("UseMoveMessage", move, null, pokemon, target, move);
    if (move.ignoreImmunity === void 0) {
      move.ignoreImmunity = move.category === "Status";
    }
    if (move.selfdestruct === "always") {
      this.faint(pokemon, pokemon, move);
    }
    let damage = false;
    if (move.target === "all" || move.target === "foeSide" || move.target === "allySide" || move.target === "allyTeam") {
      damage = this.tryMoveHit(target, pokemon, move);
      if (damage === this.NOT_FAIL)
        pokemon.moveThisTurnResult = null;
      if (damage || damage === 0 || damage === void 0)
        moveResult = true;
    } else if (move.target === "allAdjacent" || move.target === "allAdjacentFoes") {
      if (!targets.length) {
        this.attrLastMove("[notarget]");
        this.add("-notarget", pokemon);
        return false;
      }
      if (targets.length > 1)
        move.spreadHit = true;
      const hitSlots = [];
      for (const source of targets) {
        const hitResult = this.tryMoveHit(source, pokemon, move);
        if (hitResult || hitResult === 0 || hitResult === void 0) {
          moveResult = true;
          hitSlots.push(source.getSlot());
        }
        if (damage) {
          damage += hitResult || 0;
        } else {
          if (damage !== false || hitResult !== this.NOT_FAIL)
            damage = hitResult;
        }
        if (damage === this.NOT_FAIL)
          pokemon.moveThisTurnResult = null;
      }
      if (move.spreadHit)
        this.attrLastMove("[spread] " + hitSlots.join(","));
    } else {
      target = targets[0];
      let lacksTarget = !target || target.fainted;
      if (!lacksTarget) {
        if (["adjacentFoe", "adjacentAlly", "normal", "randomNormal"].includes(move.target)) {
          lacksTarget = !this.isAdjacent(target, pokemon);
        }
      }
      if (lacksTarget && !move.isFutureMove) {
        this.attrLastMove("[notarget]");
        this.add("-notarget", pokemon);
        return false;
      }
      damage = this.tryMoveHit(target, pokemon, move);
      if (damage === this.NOT_FAIL)
        pokemon.moveThisTurnResult = null;
      if (damage || damage === 0 || damage === void 0)
        moveResult = true;
    }
    if (move.selfBoost && moveResult)
      this.moveHit(pokemon, pokemon, move, move.selfBoost, false, true);
    if (!pokemon.hp) {
      this.faint(pokemon, pokemon, move);
    }
    if (!moveResult) {
      this.singleEvent("MoveFail", move, null, target, pokemon, move);
      return false;
    }
    if (!move.negateSecondary && !(move.hasSheerForce && pokemon.hasAbility("sheerforce"))) {
      this.singleEvent("AfterMoveSecondarySelf", move, null, pokemon, target, move);
      this.runEvent("AfterMoveSecondarySelf", pokemon, target, move);
    }
    return true;
  },
  tryMoveHit(target, pokemon, move) {
    this.setActiveMove(move, pokemon, target);
    let naturalImmunity = false;
    let accPass = true;
    let hitResult = this.singleEvent("PrepareHit", move, {}, target, pokemon, move);
    if (!hitResult) {
      if (hitResult === false) {
        this.add("-fail", pokemon);
        this.attrLastMove("[still]");
      }
      return false;
    }
    this.runEvent("PrepareHit", pokemon, target, move);
    if (!this.singleEvent("Try", move, null, pokemon, target, move)) {
      return false;
    }
    if (move.target === "all" || move.target === "foeSide" || move.target === "allySide" || move.target === "allyTeam") {
      if (move.target === "all") {
        hitResult = this.runEvent("TryHitField", target, pokemon, move);
      } else {
        hitResult = this.runEvent("TryHitSide", target, pokemon, move);
      }
      if (!hitResult) {
        if (hitResult === false) {
          this.add("-fail", pokemon);
          this.attrLastMove("[still]");
        }
        return false;
      }
      return this.moveHit(target, pokemon, move);
    }
    hitResult = this.runEvent("Invulnerability", target, pokemon, move);
    if (hitResult === false) {
      if (!move.spreadHit)
        this.attrLastMove("[miss]");
      this.add("-miss", pokemon, target);
      return false;
    }
    if (move.ignoreImmunity === void 0) {
      move.ignoreImmunity = move.category === "Status";
    }
    if ((!move.ignoreImmunity || move.ignoreImmunity !== true && !move.ignoreImmunity[move.type]) && !target.runImmunity(move.type)) {
      naturalImmunity = true;
    } else {
      hitResult = this.singleEvent("TryImmunity", move, {}, target, pokemon, move);
      if (hitResult === false) {
        naturalImmunity = true;
      }
    }
    const boostTable = [1, 4 / 3, 5 / 3, 2, 7 / 3, 8 / 3, 3];
    let accuracy = move.accuracy;
    let boosts = {};
    let boost;
    if (accuracy !== true) {
      if (!move.ignoreAccuracy) {
        boosts = this.runEvent("ModifyBoost", pokemon, null, null, Object.assign({}, pokemon.boosts));
        boost = this.clampIntRange(boosts["accuracy"], -6, 6);
        if (boost > 0) {
          accuracy *= boostTable[boost];
        } else {
          accuracy /= boostTable[-boost];
        }
      }
      if (!move.ignoreEvasion) {
        boosts = this.runEvent("ModifyBoost", target, null, null, Object.assign({}, target.boosts));
        boost = this.clampIntRange(boosts["evasion"], -6, 6);
        if (boost > 0) {
          accuracy /= boostTable[boost];
        } else if (boost < 0) {
          accuracy *= boostTable[-boost];
        }
      }
    }
    if (move.ohko) {
      if (!target.isSemiInvulnerable()) {
        accuracy = 30;
        if (pokemon.level >= target.level && (move.ohko === true || !target.hasType(move.ohko))) {
          accuracy += pokemon.level - target.level;
        } else {
          this.add("-immune", target, "[ohko]");
          return false;
        }
      }
    } else {
      accuracy = this.runEvent("ModifyAccuracy", target, pokemon, move, accuracy);
    }
    if (move.alwaysHit) {
      accuracy = true;
    } else {
      accuracy = this.runEvent("Accuracy", target, pokemon, move, accuracy);
    }
    if (accuracy !== true && !this.randomChance(accuracy, 100)) {
      accPass = false;
    }
    if (accPass) {
      hitResult = this.runEvent("TryHit", target, pokemon, move);
      if (!hitResult) {
        if (hitResult === false) {
          this.add("-fail", pokemon);
          this.attrLastMove("[still]");
        }
        return false;
      } else if (naturalImmunity) {
        this.add("-immune", target);
        return false;
      }
    } else {
      if (naturalImmunity) {
        this.add("-immune", target);
      } else {
        if (!move.spreadHit)
          this.attrLastMove("[miss]");
        this.add("-miss", pokemon, target);
      }
      return false;
    }
    move.totalDamage = 0;
    let damage = 0;
    pokemon.lastDamage = 0;
    if (move.multihit) {
      let hits = move.multihit;
      if (Array.isArray(hits)) {
        if (hits[0] === 2 && hits[1] === 5) {
          hits = this.sample([2, 2, 2, 3, 3, 3, 4, 5]);
        } else {
          hits = this.random(hits[0], hits[1] + 1);
        }
      }
      hits = Math.floor(hits);
      let nullDamage = true;
      let moveDamage;
      const isSleepUsable = move.sleepUsable || this.dex.getMove(move.sourceEffect).sleepUsable;
      let i;
      for (i = 0; i < hits && target.hp && pokemon.hp; i++) {
        if (pokemon.status === "slp" && !isSleepUsable)
          break;
        move.hit = i + 1;
        if (move.multiaccuracy && i > 0) {
          accuracy = move.accuracy;
          if (accuracy !== true) {
            if (!move.ignoreAccuracy) {
              boosts = this.runEvent("ModifyBoost", pokemon, null, null, Object.assign({}, pokemon.boosts));
              boost = this.clampIntRange(boosts["accuracy"], -6, 6);
              if (boost > 0) {
                accuracy *= boostTable[boost];
              } else {
                accuracy /= boostTable[-boost];
              }
            }
            if (!move.ignoreEvasion) {
              boosts = this.runEvent("ModifyBoost", target, null, null, Object.assign({}, target.boosts));
              boost = this.clampIntRange(boosts["evasion"], -6, 6);
              if (boost > 0) {
                accuracy /= boostTable[boost];
              } else if (boost < 0) {
                accuracy *= boostTable[-boost];
              }
            }
          }
          accuracy = this.runEvent("ModifyAccuracy", target, pokemon, move, accuracy);
          if (!move.alwaysHit) {
            accuracy = this.runEvent("Accuracy", target, pokemon, move, accuracy);
            if (accuracy !== true && !this.randomChance(accuracy, 100))
              break;
          }
        }
        moveDamage = this.moveHit(target, pokemon, move);
        if (moveDamage === false)
          break;
        if (nullDamage && (moveDamage || moveDamage === 0 || moveDamage === void 0))
          nullDamage = false;
        damage = moveDamage || 0;
        move.totalDamage += damage;
        this.eachEvent("Update");
      }
      if (i === 0)
        return false;
      if (nullDamage)
        damage = false;
      this.add("-hitcount", target, i);
    } else {
      damage = this.moveHit(target, pokemon, move);
      move.totalDamage = damage;
    }
    if (move.recoil && move.totalDamage) {
      this.damage(this.calcRecoilDamage(move.totalDamage, move), pokemon, target, "recoil");
    }
    if (target && pokemon !== target)
      target.gotAttacked(move, damage, pokemon);
    if (move.ohko)
      this.add("-ohko");
    if (!damage && damage !== 0)
      return damage;
    this.eachEvent("Update");
    if (target && !move.negateSecondary) {
      this.singleEvent("AfterMoveSecondary", move, null, target, pokemon, move);
      this.runEvent("AfterMoveSecondary", target, pokemon, move);
    }
    return damage;
  },
  calcRecoilDamage(damageDealt, move) {
    return this.clampIntRange(Math.floor(damageDealt * move.recoil[0] / move.recoil[1]), 1);
  }
};
//# sourceMappingURL=scripts.js.map
