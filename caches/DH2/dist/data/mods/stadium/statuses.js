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
var statuses_exports = {};
__export(statuses_exports, {
  Statuses: () => Statuses
});
module.exports = __toCommonJS(statuses_exports);
const Statuses = {
  brn: {
    name: "brn",
    effectType: "Status",
    onStart(target) {
      this.add("-status", target, "brn");
    },
    onAfterMoveSelfPriority: 2,
    onAfterMoveSelf(pokemon) {
      this.damage(this.clampIntRange(Math.floor(pokemon.maxhp / 16), 1));
    },
    onAfterSwitchInSelf(pokemon) {
      this.damage(this.clampIntRange(Math.floor(pokemon.maxhp / 16), 1));
    }
  },
  par: {
    name: "par",
    effectType: "Status",
    onStart(target) {
      this.add("-status", target, "par");
    },
    onBeforeMovePriority: 2,
    onBeforeMove(pokemon) {
      if (this.randomChance(63, 256)) {
        this.add("cant", pokemon, "par");
        pokemon.removeVolatile("bide");
        pokemon.removeVolatile("lockedmovee");
        pokemon.removeVolatile("twoturnmove");
        pokemon.removeVolatile("fly");
        pokemon.removeVolatile("dig");
        pokemon.removeVolatile("solarbeam");
        pokemon.removeVolatile("skullbash");
        pokemon.removeVolatile("partialtrappinglock");
        return false;
      }
    }
  },
  slp: {
    name: "slp",
    effectType: "Status",
    onStart(target, source, sourceEffect) {
      if (sourceEffect && sourceEffect.effectType === "Move") {
        this.add("-status", target, "slp", "[from] move: " + sourceEffect.name);
      } else {
        this.add("-status", target, "slp");
      }
      this.effectState.startTime = this.random(1, 4);
      this.effectState.time = this.effectState.startTime;
    },
    onBeforeMovePriority: 2,
    onBeforeMove(pokemon, target, move) {
      pokemon.statusData.time--;
      this.add("cant", pokemon, "slp");
      pokemon.lastMove = null;
      return false;
    },
    onAfterMoveSelf(pokemon) {
      if (pokemon.statusData.time <= 0)
        pokemon.cureStatus();
    }
  },
  frz: {
    name: "frz",
    effectType: "Status",
    onStart(target) {
      this.add("-status", target, "frz");
    },
    onBeforeMovePriority: 2,
    onBeforeMove(pokemon, target, move) {
      this.add("cant", pokemon, "frz");
      pokemon.lastMove = null;
      return false;
    },
    onHit(target, source, move) {
      if (move.type === "Fire" && move.category !== "Status") {
        target.cureStatus();
      }
    }
  },
  psn: {
    name: "psn",
    effectType: "Status",
    onStart(target) {
      this.add("-status", target, "psn");
    },
    onAfterMoveSelfPriority: 2,
    onAfterMoveSelf(pokemon) {
      this.damage(this.clampIntRange(Math.floor(pokemon.maxhp / 16), 1));
    },
    onAfterSwitchInSelf(pokemon) {
      this.damage(this.clampIntRange(Math.floor(pokemon.maxhp / 16), 1));
    }
  },
  tox: {
    name: "tox",
    effectType: "Status",
    onStart(target) {
      this.add("-status", target, "tox");
    },
    onAfterMoveSelfPriority: 2,
    onAfterMoveSelf(pokemon) {
      this.damage(this.clampIntRange(Math.floor(pokemon.maxhp / 16), 1));
    },
    onAfterSwitchInSelf(pokemon) {
      pokemon.setStatus("psn");
      pokemon.addVolatile("residualdmg");
      pokemon.volatiles["residualdmg"].counter = 1;
      this.damage(this.clampIntRange(Math.floor(pokemon.maxhp / 16), 1));
    }
  },
  partiallytrapped: {
    name: "partiallytrapped",
    duration: 2,
    onBeforeMovePriority: 1,
    onStart(target, source, effect) {
      this.add("-activate", target, "move: " + effect, "[of] " + source);
    },
    onBeforeMove(pokemon) {
      if (this.effectState.source && (!this.effectState.source.isActive || this.effectState.source.hp <= 0)) {
        pokemon.removeVolatile("partiallytrapped");
        return;
      }
      this.add("cant", pokemon, "partiallytrapped");
      return false;
    },
    onEnd(pokemon) {
      this.add("-end", pokemon, this.effectState.sourceEffect, "[partiallytrapped]");
    }
  }
};
//# sourceMappingURL=statuses.js.map
