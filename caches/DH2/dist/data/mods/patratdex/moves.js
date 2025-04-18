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
  buckshot: {
    num: 9001,
    accuracy: 100,
    basePower: 20,
    category: "Physical",
    shortDesc: "Hits 3-6 times in one turn.",
    name: "Buckshot",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Bullet Seed", target);
    },
    multihit: [3, 6],
    secondary: null,
    target: "normal",
    type: "Normal",
    maxMove: { basePower: 100 },
    contestType: "Tough"
  },
  citrusblast: {
    num: 9002,
    accuracy: 90,
    basePower: 120,
    category: "Special",
    shortDesc: "Cannot be selected until the user eats a Berry.",
    name: "Citrus Blast",
    pp: 10,
    priority: 0,
    flags: { protect: 1 },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Apple Acid", target);
    },
    onTry(pokemon) {
      if (!pokemon.ateBerry) {
        this.add("-fail", pokemon, "move: Citrus Blast");
        return null;
      }
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    contestType: "Tough"
  },
  herosignal: {
    num: 9003,
    accuracy: true,
    basePower: 0,
    category: "Status",
    shortDesc: "Raises the user's Special Attack by 2 and Speed by 1.",
    name: "Hero Signal",
    pp: 10,
    priority: 0,
    flags: { snatch: 1 },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Extreme Evoboost", target);
    },
    boosts: {
      spa: 2,
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Electric",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Cool"
  },
  landsweep: {
    num: 9004,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    shortDesc: "Clears terrain and hazards on both sides.",
    name: "Land Sweep",
    pp: 5,
    priority: 0,
    flags: { protect: 1, contact: 1, mirror: 1 },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Bulldoze", target);
    },
    onHit(target, source, move) {
      let success = false;
      if (!target.volatiles["substitute"] || move.infiltrates)
        success = !!this.boost({ evasion: -1 });
      const removeTarget = [
        "reflect",
        "lightscreen",
        "auroraveil",
        "safeguard",
        "mist",
        "spikes",
        "toxicspikes",
        "stealthrock",
        "stickyweb",
        "gmaxsteelsurge"
      ];
      const removeAll = [
        "spikes",
        "toxicspikes",
        "stealthrock",
        "stickyweb",
        "gmaxsteelsurge"
      ];
      for (const targetCondition of removeTarget) {
        if (target.side.removeSideCondition(targetCondition)) {
          if (!removeAll.includes(targetCondition))
            continue;
          this.add("-sideend", target.side, this.dex.conditions.get(targetCondition).name, "[from] move: Defog", "[of] " + source);
          success = true;
        }
      }
      for (const sideCondition of removeAll) {
        if (source.side.removeSideCondition(sideCondition)) {
          this.add("-sideend", source.side, this.dex.conditions.get(sideCondition).name, "[from] move: Defog", "[of] " + source);
          success = true;
        }
      }
      this.field.clearTerrain();
      return success;
    },
    secondary: null,
    target: "normal",
    type: "Ground",
    zMove: { boost: { accuracy: 1 } },
    contestType: "Tough"
  },
  magmamash: {
    num: 9005,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    shortDesc: "100% chance to lower the target's Speed by 1.",
    name: "Magma Mash",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Fire Punch", target);
    },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Fire",
    contestType: "Tough"
  },
  naturesbounty: {
    num: 9006,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    shortDesc: "Sets Grassy Terrain.",
    name: "Nature's Bounty",
    pp: 5,
    priority: 0,
    flags: { nonsky: 1 },
    terrain: "grassyterrain",
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Bloom Doom", target);
    },
    condition: {
      duration: 5,
      durationCallback(source, effect) {
        if (source?.hasItem("terrainextender")) {
          return 8;
        }
        return 5;
      },
      onBasePowerPriority: 6,
      onBasePower(basePower, attacker, defender, move) {
        const weakenedMoves = ["earthquake", "bulldoze", "magnitude"];
        if (weakenedMoves.includes(move.id)) {
          this.debug("move weakened by grassy terrain");
          return this.chainModify(0.5);
        }
        if (move.type === "Grass" && attacker.isGrounded()) {
          this.debug("grassy terrain boost");
          return this.chainModify([5325, 4096]);
        }
      },
      onStart(battle, source, effect) {
        if (effect?.effectType === "Ability") {
          this.add("-fieldstart", "move: Grassy Terrain", "[from] ability: " + effect, "[of] " + source);
        } else {
          this.add("-fieldstart", "move: Grassy Terrain");
        }
      },
      onResidualOrder: 5,
      onResidualSubOrder: 3,
      onResidual() {
        this.eachEvent("Terrain");
      },
      onTerrain(pokemon) {
        if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
          this.debug("Pokemon is grounded, healing through Grassy Terrain.");
          this.heal(pokemon.baseMaxhp / 16, pokemon, pokemon);
        }
      },
      onEnd() {
        if (!this.effectState.duration)
          this.eachEvent("Terrain");
        this.add("-fieldend", "move: Grassy Terrain");
      }
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: { boost: { def: 1 } },
    contestType: "Beautiful"
  },
  triwavebeam: {
    num: 9007,
    accuracy: true,
    basePower: 20,
    category: "Special",
    shortDesc: "Hits 3 times. Does not check accuracy.",
    name: "Tri-Wave Beam",
    pp: 20,
    priority: 0,
    flags: { protect: 1, pulse: 1, mirror: 1, distance: 1 },
    multihit: 3,
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Tri Attack", target);
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    maxMove: { basePower: 130 },
    contestType: "Cool"
  },
  wheatshield: {
    num: 588,
    accuracy: true,
    basePower: 0,
    category: "Status",
    shortDesc: "Protects from damaging attacks. Contact: -1 Spe.",
    name: "Wheat Shield",
    pp: 10,
    priority: 4,
    flags: {},
    stallingMove: true,
    volatileStatus: "wheatshield",
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Protect", target);
    },
    onTryHit(pokemon) {
      return !!this.queue.willAct() && this.runEvent("StallMove", pokemon);
    },
    onHit(pokemon) {
      pokemon.addVolatile("stall");
    },
    condition: {
      duration: 1,
      onStart(target) {
        this.add("-singleturn", target, "Protect");
      },
      onTryHitPriority: 3,
      onTryHit(target, source, move) {
        if (!move.flags["protect"] || move.category === "Status") {
          if (move.isZ || move.isMax && !move.breaksProtect)
            target.getMoveHitData(move).zBrokeProtect = true;
          return;
        }
        if (move.smartTarget) {
          move.smartTarget = false;
        } else {
          this.add("-activate", target, "move: Protect");
        }
        const lockedmove = source.getVolatile("lockedmove");
        if (lockedmove) {
          if (source.volatiles["lockedmove"].duration === 2) {
            delete source.volatiles["lockedmove"];
          }
        }
        if (move.flags["contact"]) {
          this.boost({ spe: -1 }, source, target, this.dex.getActiveMove("Wheat Shield"));
        }
        return this.NOT_FAIL;
      },
      onHit(target, source, move) {
        if (move.isZOrMaxPowered && move.flags["contact"]) {
          this.boost({ spe: -1 }, source, target, this.dex.getActiveMove("Wheat Shield"));
        }
      }
    },
    secondary: null,
    target: "self",
    type: "Grass",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Clever"
  }
};
//# sourceMappingURL=moves.js.map
