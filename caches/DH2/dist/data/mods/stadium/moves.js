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
var moves_exports = {};
__export(moves_exports, {
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
const Moves = {
  bind: {
    inherit: true
    // FIXME: onBeforeMove() {},
  },
  clamp: {
    inherit: true
    // FIXME: onBeforeMove() {},
  },
  firespin: {
    inherit: true
    // FIXME: onBeforeMove() {},
  },
  highjumpkick: {
    inherit: true,
    desc: "If this attack misses the target, the user takes 1 HP of damage.",
    shortDesc: "User takes 1 HP damage it would have dealt if miss.",
    onMoveFail(target, source, move) {
      if (!target.types.includes("Ghost")) {
        this.directDamage(1, source);
      }
    }
  },
  hyperbeam: {
    inherit: true,
    onMoveFail(target, source, move) {
      source.addVolatile("mustrecharge");
    }
  },
  jumpkick: {
    inherit: true,
    desc: "If this attack misses the target, the user 1HP of damage.",
    shortDesc: "User takes 1 HP damage if miss.",
    onMoveFail(target, source, move) {
      this.damage(1, source);
    }
  },
  leechseed: {
    inherit: true,
    onHit() {
    },
    effect: {
      onStart(target) {
        this.add("-start", target, "move: Leech Seed");
      },
      onAfterMoveSelfPriority: 1,
      onAfterMoveSelf(pokemon) {
        const leecher = pokemon.side.foe.active[pokemon.volatiles["leechseed"].sourcePosition];
        if (!leecher || leecher.fainted || leecher.hp <= 0) {
          this.debug("Nothing to leech into");
          return;
        }
        const toLeech = this.clampIntRange(Math.floor(pokemon.maxhp / 16), 1);
        const damage = this.damage(toLeech, pokemon, leecher);
        if (damage)
          this.heal(damage, leecher, pokemon);
      }
    }
  },
  rage: {
    inherit: true,
    self: {
      volatileStatus: "rage"
    },
    effect: {
      // Rage lock
      duration: 255,
      onStart(target, source, effect) {
        this.effectState.move = "rage";
      },
      onLockMove: "rage",
      onTryHit(target, source, move) {
        if (target.boosts.atk < 6 && move.id === "disable") {
          this.boost({ atk: 1 });
        }
      },
      onHit(target, source, move) {
        if (target.boosts.atk < 6 && move.category !== "Status") {
          this.boost({ atk: 1 });
        }
      }
    }
  },
  recover: {
    inherit: true,
    heal: null,
    onHit(target) {
      if (target.hp === target.maxhp) {
        return false;
      }
      this.heal(Math.floor(target.maxhp / 2), target, target);
    }
  },
  rest: {
    inherit: true,
    onHit(target, source, move) {
      if (target.hp >= target.maxhp)
        return false;
      if (!target.setStatus("slp", source, move))
        return false;
      target.statusData.time = 2;
      target.statusData.startTime = 2;
      this.heal(target.maxhp);
    }
  },
  softboiled: {
    inherit: true,
    heal: null,
    onHit(target) {
      if (target.hp === target.maxhp) {
        return false;
      }
      this.heal(Math.floor(target.maxhp / 2), target, target);
    }
  },
  substitute: {
    inherit: true,
    effect: {
      onStart(target) {
        this.add("-start", target, "Substitute");
        this.effectState.hp = Math.floor(target.maxhp / 4);
        delete target.volatiles["partiallytrapped"];
      },
      onTryHitPriority: -1,
      onTryHit(target, source, move) {
        if (target === source) {
          this.debug("sub bypass: self hit");
          return;
        }
        if (move.drain) {
          this.add("-miss", source);
          return null;
        }
        if (move.category === "Status") {
          const SubBlocked = ["leechseed", "lockon", "mindreader", "nightmare"];
          if (move.status || move.boosts || move.volatileStatus === "confusion" || SubBlocked.includes(move.id)) {
            this.add("-activate", target, "Substitute", "[block] " + move.name);
            return null;
          }
          return;
        }
        if (move.volatileStatus && target === source)
          return;
        let damage = this.getDamage(source, target, move);
        if (!damage)
          return null;
        damage = this.runEvent("SubDamage", target, source, move, damage);
        if (!damage)
          return damage;
        target.volatiles["substitute"].hp -= damage;
        source.lastDamage = damage;
        if (target.volatiles["substitute"].hp <= 0) {
          this.debug("Substitute broke");
          target.removeVolatile("substitute");
          target.subFainted = true;
        } else {
          this.add("-activate", target, "Substitute", "[damage]");
        }
        if (target.volatiles["substitute"]) {
          if (move.recoil) {
            this.damage(Math.round(damage * move.recoil[0] / move.recoil[1]), source, target, "recoil");
          }
        }
        this.runEvent("AfterSubDamage", target, source, move, damage);
        const lastAttackedBy = target.getLastAttackedBy();
        if (!lastAttackedBy) {
          target.attackedBy.push({ source, move: move.id, damage, thisTurn: true });
        } else {
          lastAttackedBy.move = move.id;
          lastAttackedBy.damage = damage;
        }
        return 0;
      },
      onEnd(target) {
        this.add("-end", target, "Substitute");
      }
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  wrap: {
    inherit: true
    // FIXME: onBeforeMove() {},
  }
};
//# sourceMappingURL=moves.js.map
