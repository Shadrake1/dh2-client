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
var conditions_exports = {};
__export(conditions_exports, {
  Conditions: () => Conditions
});
module.exports = __toCommonJS(conditions_exports);
const Conditions = {
  slp: {
    name: "slp",
    effectType: "Status",
    onStart(target, source, sourceEffect) {
      if (sourceEffect && sourceEffect.effectType === "Move") {
        this.add("-status", target, "slp", "[from] move: " + sourceEffect.name);
      } else {
        this.add("-status", target, "slp");
      }
      this.effectData.time = this.random(2, 6);
      this.effectData.skippedTime = 0;
    },
    onSwitchIn(target) {
      this.effectData.time += this.effectData.skippedTime;
      this.effectData.skippedTime = 0;
    },
    onBeforeMovePriority: 10,
    onBeforeMove(pokemon, target, move) {
      if (pokemon.hasAbility("earlybird")) {
        pokemon.statusData.time--;
      }
      pokemon.statusData.time--;
      if (pokemon.statusData.time <= 0) {
        pokemon.cureStatus();
        return;
      }
      this.add("cant", pokemon, "slp");
      if (move.sleepUsable) {
        this.effectData.skippedTime++;
        return;
      }
      this.effectData.skippedTime = 0;
      return false;
    }
  },
  frz: {
    inherit: true,
    onHit(target, source, move) {
      if (move.thawsTarget || this.dex.getMove(move.id).type === "Fire" && move.category !== "Status") {
        target.cureStatus();
      }
    }
  },
  sandstorm: {
    inherit: true,
    onModifySpD() {
    }
  }
};
//# sourceMappingURL=conditions.js.map
