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
var abilities_exports = {};
__export(abilities_exports, {
  Abilities: () => Abilities
});
module.exports = __toCommonJS(abilities_exports);
const Abilities = {
  overflow: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Water") {
        this.debug("Overflow boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Water") {
        this.debug("Overflow boost");
        return this.chainModify(1.5);
      }
    },
    name: "Overflow",
    desc: "This Pok\xE9mon\u2019s Water moves deal 1.5x damage.",
    rating: 3.5,
    num: 300
  },
  abhorrent: {
    // upokecenter says this is implemented as an added secondary effect
    onModifyMove(move) {
      if (!move || !move.flags["contact"] || move.target === "self")
        return;
      if (!move.secondaries) {
        move.secondaries = [];
      }
      move.secondaries.push({
        chance: 100,
        boosts: {
          atk: -1
        },
        ability: this.dex.abilities.get("abhorrent")
      });
    },
    name: "Abhorrent",
    desc: "This Pokemon's contact moves lower the opponent's Attack by 1.",
    rating: 2,
    num: 301
  },
  hostabsorb: {
    // upokecenter says this is implemented as an added secondary effect
    onModifyMove(move) {
      if (!move || !move.flags["contact"] || move.target === "self")
        return;
      if (!move.secondaries) {
        move.secondaries = [];
      }
      move.secondaries.push({
        chance: 100,
        volatileStatus: "leechseed",
        ability: this.dex.abilities.get("hostabsorb")
      });
    },
    name: "Host Absorb",
    desc: "This Pok\xE9mon's contact moves apply Leech Seed to its target.",
    rating: 2,
    num: 302
  },
  worm: {
    onBasePowerPriority: 21,
    onBasePower(basePower, source, target, move) {
      let boosted = true;
      for (const target2 of this.getAllActive()) {
        if (target2 === source)
          continue;
        if (this.queue.willMove(target2)) {
          boosted = false;
          break;
        }
      }
      if (boosted && move.type === "Bug") {
        this.debug("Worm boost");
        return this.chainModify(1.5);
      }
    },
    name: "Worm",
    desc: "If this Pok\xE9mon moves last in a turn, it's Bug moves deal 1.5x damage.",
    rating: 2.5,
    num: 303
  },
  deathmetal: {
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      const noModifyType = [
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      if (move.type === "Ghost" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== "Status")) {
        move.type = "Steel";
        move.deathmetalBoosted = true;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.deathmetalBoosted)
        return this.chainModify([4915, 4096]);
    },
    name: "Death Metal",
    desc: "This Pokemon's Ghost moves become Steel moves and deal 1.2x damage.",
    rating: 4,
    num: 304
  },
  graze: {
    onAccuracyPriority: -2,
    onAccuracy(accuracy, target, source, move) {
      if (accuracy !== true && !this.randomChance(accuracy, 100)) {
        move.graze = true;
      }
      return true;
    },
    onAfterMoveSecondary(target, source, move) {
      if (!move.totalDamage || move.graze !== true)
        return;
      const damage = move.totalDamage;
      this.damage(move.totalDamage / 4, target);
    },
    onModifyMove(move, pokemon) {
      if (move.secondaries) {
        delete move.secondaries;
        delete move.self;
        if (move.id === "clangoroussoulblaze")
          delete move.selfBoost;
        move.hasSheerForce = true;
      }
    },
    name: "Graze",
    desc: "(Bugged)If this Pok\xE9mon misses a damaging move, the target takes damage equal to 1/4 of the damage they would've taken. Secondary effects don't activate.",
    rating: 4.5,
    num: 305
  },
  meaneye: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.side.foe.active) {
        if (!target || !target.isAdjacent(pokemon))
          continue;
        if (!activated) {
          this.add("-ability", pokemon, "Mean Eye", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ spa: -1 }, target, pokemon, null, true);
        }
      }
    },
    name: "Mean Eye",
    shortDesc: "On switch-in, this Pokemon lowers the Special attack of adjacent opponents by 1 stage.",
    rating: 1.5,
    num: 306
  },
  cleftbody: {
    onSwitchIn(pokemon) {
      this.add("-sideend", pokemon.side, "move: Stealth Rock", "[of] " + pokemon);
      pokemon.side.removeSideCondition("stealthrock");
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground") {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Cleft Body");
        }
        return null;
      }
    },
    name: "Cleft Body",
    shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Ground moves; Ground immunity. Absorbs Stealth Rock on switch in.",
    rating: 3.5,
    num: 11
  },
  simmerfocus: {
    onModifyPriority(priority, pokemon, target, move) {
      if (move?.category !== "Status") {
        move.simmerfocusBoosted = true;
        return priority - 3;
      }
    },
    onBasePowerPriority: 19,
    onBasePower(basePower, pokemon, target, move) {
      if (!pokemon.hurtThisTurn) {
        return this.chainModify(1.5);
      }
    },
    name: "Simmer Focus",
    rating: 4,
    shortDesc: "This Pokemon\u2019s damaging moves have -3 Priority, if it isnt hit by a damaging move before it attacks, its attack does 1.5x damage.",
    num: 158
  },
  feeler: {
    desc: "On switch-in, this Pok\xE9mon's Defense or Special Defense is raised by 1 stage based on the weaker combined attacking stat of all opposing Pok\xE9mon. Special Defense is raised if their Special Attack is higher, and Defense is raised if their Attack is the same or higher.",
    shortDesc: "On switch-in, Def or Sp. Def is raised 1 stage based on the foes' higher Attack.",
    onStart(pokemon) {
      let totalatk = 0;
      let totalspa = 0;
      for (const target of pokemon.side.foe.active) {
        if (!target || target.fainted)
          continue;
        totalatk += target.getStat("atk", false, true);
        totalspa += target.getStat("spa", false, true);
      }
      if (totalatk && totalatk >= totalspa) {
        this.boost({ def: 1 });
      } else if (totalspa) {
        this.boost({ spd: 1 });
      }
    },
    name: "Feeler",
    rating: 4,
    num: -35
  },
  jellyarmor: {
    onSourceModifyDamage(damage, source, target, move) {
      if (move.category === "Physical") {
        return this.chainModify(0.75);
      }
    },
    name: "Jelly Armor",
    rating: 3,
    shortDesc: "This Pokemon takes 3/4 damage from physical attacks.",
    num: 111
  },
  trickyrat: {
    onModifyMove(move) {
      if (move)
        delete move.flags["protect"];
      move.infiltrates = true;
    },
    name: "Tricky Rat",
    rating: 2.5,
    shortDesc: "This Pokemon's moves break protection and ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil.",
    num: 151
  }
};
//# sourceMappingURL=abilities.js.map
