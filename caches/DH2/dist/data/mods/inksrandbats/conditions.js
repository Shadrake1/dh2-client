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
  hail: {
    name: "Hail",
    effectType: "Weather",
    duration: 0,
    onStart(battle) {
      this.add("-weather", "Hail");
      if (!battle.activeTurns) {
        this.effectState.layers = 1;
      }
      this.effectState.stage = 0;
    },
    onResidualOrder: 1,
    onResidual() {
      if (this.effectState.layers < 1) {
        this.hint("The snow is falling gently.");
      } else {
        this.add("-weather", "Hail", "[upkeep]");
      }
      if (this.field.isWeather("hail"))
        this.eachEvent("Weather");
      this.effectState.stage++;
      if (this.effectState.stage > 2) {
        if (this.randomChance(1, 4)) {
          this.effectState.layers = 0;
          this.hint("The snow falls gently.");
        } else if (this.randomChance(1, 4)) {
          this.effectState.layers = 1;
          this.hint("Hail is falling on the battlefield.");
        } else if (this.randomChance(1, 4)) {
          this.effectState.layers = 2;
          this.hint("The hail is getting treacherous.");
        } else {
          this.effectState.layers = 3;
          this.hint("The hailstorm is blowing wildly!");
        }
        this.effectState.stage = 0;
      }
    },
    onWeather(target) {
      if (this.effectState.layers > 0) {
        this.damage(target.baseMaxhp * (this.effectState.layers / 16));
      }
    },
    onEnd() {
      this.add("-weather", "none");
    }
  },
  sandstorm: {
    name: "Sandstorm",
    effectType: "Weather",
    duration: 0,
    // This should be applied directly to the stat before any of the other modifiers are chained
    // So we give it increased priority.
    onModifySpDPriority: 10,
    onModifySpD(spd, pokemon) {
      if (pokemon.hasType("Rock") && this.field.isWeather("sandstorm")) {
        return this.modify(spd, 1.5);
      }
    },
    onStart(battle) {
      this.add("-weather", "Sandstorm");
    },
    onResidualOrder: 1,
    onResidual() {
      this.add("-weather", "Sandstorm", "[upkeep]");
      if (this.field.isWeather("sandstorm"))
        this.eachEvent("Weather");
    },
    onWeather(target) {
      this.damage(target.baseMaxhp / 16);
    },
    onEnd() {
      this.add("-weather", "none");
    }
  },
  sunnyday: {
    name: "SunnyDay",
    effectType: "Weather",
    duration: 0,
    onWeatherModifyDamage(damage, attacker, defender, move) {
      if (defender.hasItem("utilityumbrella"))
        return;
      if (move.type === "Fire") {
        this.debug("Sunny Day fire boost");
        return this.chainModify(1.5);
      }
      if (move.type === "Water") {
        this.debug("Sunny Day water suppress");
        return this.chainModify(0.5);
      }
    },
    onStart(battle) {
      this.add("-weather", "SunnyDay");
    },
    onImmunity(type, pokemon) {
      if (pokemon.hasItem("utilityumbrella"))
        return;
      if (type === "frz")
        return false;
    },
    onResidualOrder: 1,
    onResidual() {
      this.add("-weather", "SunnyDay", "[upkeep]");
      this.eachEvent("Weather");
    },
    onEnd() {
      this.add("-weather", "none");
    }
  },
  raindance: {
    name: "RainDance",
    effectType: "Weather",
    duration: 0,
    onWeatherModifyDamage(damage, attacker, defender, move) {
      if (defender.hasItem("utilityumbrella"))
        return;
      if (move.type === "Water") {
        this.debug("rain water boost");
        return this.chainModify(1.5);
      }
      if (move.type === "Fire") {
        this.debug("rain fire suppress");
        return this.chainModify(0.5);
      }
    },
    onStart(battle) {
      this.add("-weather", "RainDance");
    },
    onResidualOrder: 1,
    onResidual() {
      this.add("-weather", "RainDance", "[upkeep]");
      this.eachEvent("Weather");
    },
    onEnd() {
      this.add("-weather", "none");
    }
  },
  frz: {
    name: "frz",
    effectType: "Status",
    onStart(target, source, sourceEffect) {
      if (sourceEffect && sourceEffect.effectType === "Ability") {
        this.add("-status", target, "frz", "[from] ability: " + sourceEffect.name, "[of] " + source);
      } else {
        this.add("-status", target, "frz");
      }
      if (target.species.name === "Shaymin-Sky" && target.baseSpecies.baseSpecies === "Shaymin") {
        target.formeChange("Shaymin", this.effect, true);
      }
      this.effectState.startTime = 2;
      this.effectState.time = this.effectState.startTime;
    },
    onBeforeMovePriority: 10,
    onBeforeMove(pokemon, target, move) {
      if (move.flags["defrost"])
        return;
      if (this.effectState.time === 0) {
        pokemon.cureStatus();
        return;
      }
      this.effectState.time--;
      this.add("cant", pokemon, "frz");
      return false;
    },
    onModifyMove(move, pokemon) {
      if (move.flags["defrost"]) {
        this.add("-curestatus", pokemon, "frz", "[from] move: " + move);
        pokemon.setStatus("");
      }
    },
    onSourceModifyCritRatio(target, source, move) {
      if (!target)
        return;
      return 5;
    },
    onCriticalHit(target, source, move) {
      if (move.category !== "Status") {
        this.hint("The attack shattered the ice!");
        this.effectState.target.setStatus("");
      }
    },
    onHit(target, source, move) {
      if (move.thawsTarget || move.type === "Fire" && move.category !== "Status") {
        target.cureStatus();
      }
    }
  }
};
//# sourceMappingURL=conditions.js.map
