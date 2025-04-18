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
  poisonpuppeteer: {
    onAnyAfterSetStatus(status, target, source, effect) {
      if (source.baseSpecies.name !== "Chameleos")
        return;
      if (source !== this.effectState.target || target === source || effect.effectType !== "Move")
        return;
      if (status.id === "psn" || status.id === "tox") {
        target.addVolatile("confusion");
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1 },
    name: "Poison Puppeteer",
    shortDesc: "Chameleos: If this Pokemon poisons a target, the target also becomes confused.",
    rating: 3,
    num: 310
  },
  icearmor: {
    onDamagingHit(damage, target, source, move) {
      if (move.category === "Physical" && target.species.id === "zamtrios") {
        this.add("-ability", target, "Ice-Armor");
        this.add("-message", `Zamtrios is transforming!`);
        target.formeChange("zamtriosiced", this.effect, true);
      }
    },
    onStart(pokemon) {
      if (this.field.isWeather(["hail", "snow"]) && pokemon.species.id === "zamtrios") {
        this.add("-ability", pokemon, "Ice-Armor");
        this.add("-message", `Zamtrios is transforming!`);
        pokemon.formeChange("zamtriosiced", this.effect, true);
      }
    },
    flags: {
      failroleplay: 1,
      noreceiver: 1,
      noentrain: 1,
      notrace: 1,
      failskillswap: 1,
      cantsuppress: 1,
      notransform: 1
    },
    name: "Ice-Armor",
    shortDesc: "This pokemon will react to a physical attack by encasing it's body in ice.",
    rating: 3,
    num: 1e3
  },
  puffup: {
    onDamagingHit(damage, target, source, move) {
      if (move.category === "Special" && target.species.id === "zamtrios") {
        this.add("-ability", target, "Puff-Up");
        this.add("-message", `Zamtrios is transforming!`);
        target.formeChange("zamtriospuffed", this.effect, true);
      }
    },
    flags: {
      failroleplay: 1,
      noreceiver: 1,
      noentrain: 1,
      notrace: 1,
      failskillswap: 1,
      cantsuppress: 1,
      notransform: 1
    },
    name: "Puff-Up",
    shortDesc: "This pokemon will react to a special attack by puffing up it's body.",
    rating: 3,
    num: 1001
  }
};
//# sourceMappingURL=abilities.js.map
