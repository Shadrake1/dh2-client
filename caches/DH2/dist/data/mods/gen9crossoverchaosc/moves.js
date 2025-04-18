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
  luigilogic: {
    num: -1,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Luigi Logic",
    shortDesc: "Disables target's ability and previous move choice.",
    pp: 5,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1 },
    volatileStatus: "luigilogic",
    onTryHit(target) {
      if ((target.getAbility().flags["cantsuppress"] || target.volatiles["gastroacid"] || target.hasItem("Ability Shield")) && (!target.lastMove || target.lastMove.isZ || target.lastMove.isMax || target.lastMove.id === "struggle" || target.volatiles["disable"])) {
        if (target.hasItem("Ability Shield")) {
          this.add("-block", target, "item: Ability Shield");
        }
        this.hint("Luigi Logic will fail if it is both impossible to suppress ability & disable the last used move.");
        return false;
      }
    },
    onHit(target) {
      if (!target.getAbility().flags["cantsuppress"] && !target.volatiles["gastroacid"] && !target.hasItem("Ability Shield")) {
        target.addVolatile("gastroacid");
      } else if (target.hasItem("Ability Shield")) {
        this.add("-block", target, "item: Ability Shield");
      }
      if (target.lastMove && !target.lastMove.isZ && !target.lastMove.isMax && target.lastMove.id !== "struggle" && !target.volatiles["disable"]) {
        target.addVolatile("disable");
      }
    },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Nasty Plot", source);
      this.add("-anim", source, "Flash", target);
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Clever"
  },
  linkinglighthouselaunch: {
    num: -2,
    accuracy: true,
    basePower: 175,
    category: "Special",
    name: "Linking Lighthouse Launch",
    shortDesc: "50% chance to burn, paralyze, or freeze.",
    pp: 1,
    priority: 0,
    flags: {},
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Mountain Gale", target);
      this.add("-anim", source, "Fusion Flare", target);
      this.add("-anim", source, "Stoked Sparksurfer", target);
    },
    isZ: "bondiumz",
    secondary: {
      chance: 50,
      onHit(target, source) {
        const result = this.random(3);
        if (result === 0) {
          target.trySetStatus("brn", source);
        } else if (result === 1) {
          target.trySetStatus("par", source);
        } else {
          target.trySetStatus("frz", source);
        }
      }
    },
    target: "normal",
    type: "Normal",
    contestType: "Cool"
  },
  froggybravesthewindandrain: {
    num: -3,
    accuracy: true,
    basePower: 180,
    category: "Special",
    name: "Froggy Braves the Wind and Rain",
    shortDesc: "Sets rain.",
    pp: 1,
    priority: 0,
    flags: {},
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Hurricane", target);
      this.add("-anim", source, "Whirlpool", target);
    },
    isZ: "suwakiumz",
    self: {
      onHit(source) {
        this.field.setWeather("raindance");
      }
    },
    target: "normal",
    type: "Normal",
    contestType: "Cute"
  },
  bindingblade: {
    num: -4,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Binding Blade",
    shortDesc: "User recovers 50% of the damage dealt.",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, heal: 1, metronome: 1, slicing: 1 },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Fire Spin", source);
      this.add("-anim", source, "Sacred Sword", target);
    },
    drain: [1, 2],
    secondary: null,
    target: "normal",
    type: "Fire",
    contestType: "Tough"
  },
  halbird: {
    num: -5,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    overrideDefensiveStat: "def",
    name: "Halbird",
    shortDesc: "Damages target based on Defense, not Sp. Def.",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, slicing: 1 },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Charge", source);
      this.add("-anim", source, "Air Cutter", target);
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    contestType: "Cool"
  },
  stormcallersong: {
    num: -6,
    accuracy: 100,
    basePower: 25,
    category: "Special",
    name: "Stormcaller Song",
    shortDesc: "Hits 3-5 times.",
    pp: 30,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, sound: 1, bypasssub: 1 },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Sparkling Aria", target);
    },
    multihit: [3, 5],
    secondary: null,
    target: "normal",
    type: "Water",
    zMove: { basePower: 140 },
    maxMove: { basePower: 130 },
    contestType: "Beautiful"
  },
  bioticgrenade: {
    num: -7,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Biotic Grenade",
    shortDesc: "If foe: blocks healing for 2 turns. If ally: heals 50%.",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, bullet: 1, metronome: 1, allyanim: 1 },
    onTryHit(target, source, move) {
      if (source.isAlly(target)) {
        move.basePower = 0;
        move.infiltrates = true;
        delete move.secondaries;
      }
    },
    onTryMove(source, target, move) {
      if (source.isAlly(target) && source.volatiles["healblock"]) {
        this.attrLastMove("[still]");
        this.add("cant", source, "move: Heal Block", move);
        return false;
      }
    },
    onHit(target, source, move) {
      if (source.isAlly(target)) {
        if (!this.heal(Math.floor(target.baseMaxhp * 0.5))) {
          if (target.volatiles["healblock"] && target.hp !== target.maxhp) {
            this.attrLastMove("[still]");
            this.add("cant", source, "move: Heal Block", move);
          } else {
            this.add("-immune", target);
          }
          return this.NOT_FAIL;
        }
      }
    },
    secondary: {
      chance: 100,
      volatileStatus: "healblock"
    },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Sludge Bomb", target);
    },
    target: "normal",
    type: "Poison",
    contestType: "Clever"
  },
  nanoboost: {
    num: -8,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Nano Boost",
    shortDesc: "Switches and boosts incoming ally's atk, spa by 1 stage, def, spd by 2 stages. Lasts 2 turns after applying boost. If no allies remaining, boosts self.",
    pp: 1,
    priority: 0,
    flags: {},
    onTryHit(source) {
      if (!this.canSwitch(source.side)) {
        source.addVolatile("nanoboosted");
        return this.NOT_FAIL;
      }
    },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Acupressure", source);
    },
    slotCondition: "nanoboost",
    condition: {
      onSwap(target) {
        if (!target.fainted) {
          target.addVolatile("nanoboosted");
          target.side.removeSlotCondition(target, "nanoboost");
        }
      }
    },
    selfSwitch: true,
    isZ: "ananiumz",
    secondary: null,
    target: "self",
    type: "Poison",
    contestType: "Beautiful"
  },
  shademend: {
    num: -9,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Shade Mend",
    shortDesc: "User heals 33% and cures status.",
    pp: 10,
    priority: 0,
    flags: { snatch: 1, heal: 1, metronome: 1 },
    onHit(pokemon) {
      const success = !!this.heal(this.modify(pokemon.maxhp, 0.33));
      return pokemon.cureStatus() || success;
    },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Poltergeist", target);
    },
    secondary: null,
    target: "self",
    type: "Ghost",
    contestType: "Clever"
  },
  rudebuster: {
    num: -10,
    accuracy: 90,
    basePower: 0,
    damageCallback(pokemon, target) {
      return this.clampIntRange(target.getUndynamaxedHP() / 2, 1);
    },
    category: "Special",
    name: "Rude Buster",
    shortDesc: "Does damage equal to 1/2 target's current HP.",
    pp: 5,
    priority: 0,
    flags: { slicing: 1, protect: 1, mirror: 1, metronome: 1 },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Dark Pulse", target);
      this.add("-anim", source, "Air Slash", target);
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Tough"
  },
  ultimateheal: {
    num: -11,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Ultimate Heal",
    shortDesc: "Susie trained very hard for this.",
    pp: 1,
    priority: 0,
    flags: { heal: 1, bypasssub: 1, allyanim: 1 },
    onHit(pokemon) {
      return this.heal(1, pokemon);
    },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Scale Shot", source);
      this.add("-anim", source, "Jungle Healing", target);
    },
    secondary: null,
    target: "allies",
    type: "Dragon",
    contestType: "Beautiful"
  },
  // Altering Pre-Existing Moves
  healblock: {
    num: 377,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Heal Block",
    pp: 15,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
    volatileStatus: "healblock",
    condition: {
      duration: 5,
      durationCallback(target, source, effect) {
        if (effect?.name === "Psychic Noise" || effect?.name === "Biotic Grenade") {
          return 2;
        }
        if (source?.hasAbility("persistent")) {
          this.add("-activate", source, "ability: Persistent", "[move] Heal Block");
          return 7;
        }
        return 5;
      },
      onStart(pokemon, source) {
        this.add("-start", pokemon, "move: Heal Block");
        source.moveThisTurnResult = true;
      },
      onDisableMove(pokemon) {
        for (const moveSlot of pokemon.moveSlots) {
          if (this.dex.moves.get(moveSlot.id).flags["heal"]) {
            pokemon.disableMove(moveSlot.id);
          }
        }
      },
      onBeforeMovePriority: 6,
      onBeforeMove(pokemon, target, move) {
        if (move.flags["heal"] && !move.isZ && !move.isMax) {
          this.add("cant", pokemon, "move: Heal Block", move);
          return false;
        }
      },
      onModifyMove(move, pokemon, target) {
        if (move.flags["heal"] && !move.isZ && !move.isMax) {
          this.add("cant", pokemon, "move: Heal Block", move);
          return false;
        }
      },
      onResidualOrder: 20,
      onEnd(pokemon) {
        this.add("-end", pokemon, "move: Heal Block");
      },
      onTryHeal(damage, target, source, effect) {
        if (effect?.id === "zpower" || this.effectState.isZ)
          return damage;
        return false;
      },
      onRestart(target, source, effect) {
        if (effect?.name === "Psychic Noise" || effect?.name === "Biotic Grenade")
          return;
        this.add("-fail", target, "move: Heal Block");
        if (!source.moveThisTurnResult) {
          source.moveThisTurnResult = false;
        }
      }
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Psychic",
    zMove: { boost: { spa: 2 } },
    contestType: "Clever"
  }
};
//# sourceMappingURL=moves.js.map
