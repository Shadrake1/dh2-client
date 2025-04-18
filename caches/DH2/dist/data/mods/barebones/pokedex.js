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
var pokedex_exports = {};
__export(pokedex_exports, {
  Pokedex: () => Pokedex
});
module.exports = __toCommonJS(pokedex_exports);
const Pokedex = {
  basedon: {
    num: 1001,
    name: "Basedon",
    types: ["Stellar"],
    baseStats: { hp: 45, atk: 37, def: 42, spa: 37, spd: 42, spe: 32 },
    abilities: { 0: "Appraisal", 1: "Desperation", H: "Recycler" }
  },
  ophysive: {
    num: 1002,
    name: "Ophysive",
    types: ["Stellar"],
    baseStats: { hp: 35, atk: 44, def: 35, spa: 17, spd: 30, spe: 44 },
    abilities: { 0: "Desperation", 1: "Tinted Tactics", H: "Somewhat Reckless" }
  },
  ospecive: {
    num: 1003,
    name: "Ospecive",
    types: ["Stellar"],
    baseStats: { hp: 35, atk: 17, def: 30, spa: 44, spd: 35, spe: 44 },
    abilities: { 0: "Desperation", 1: "Tinted Tactics", H: "Somewhat Reckless" }
  },
  inphysid: {
    num: 1004,
    name: "Inphysid",
    types: ["Stellar"],
    baseStats: { hp: 57, atk: 32, def: 52, spa: 22, spd: 40, spe: 7 },
    abilities: { 0: "Last Stand", 1: "Rejuvenate", H: "Recycler" }
  },
  inspecid: {
    num: 1005,
    name: "Inspecid",
    types: ["Stellar"],
    baseStats: { hp: 57, atk: 22, def: 40, spa: 32, spd: 52, spe: 7 },
    abilities: { 0: "Last Stand", 1: "Rejuvenate", H: "Recycler" }
  },
  nimphys: {
    num: 1006,
    name: "Nimphys",
    types: ["Stellar"],
    baseStats: { hp: 29, atk: 27, def: 32, spa: 7, spd: 25, spe: 92 },
    abilities: { 0: "Appraisal", 1: "Desperation", H: "Rejuvenate" }
  },
  nimspec: {
    num: 1007,
    name: "Nimspec",
    types: ["Stellar"],
    baseStats: { hp: 29, atk: 7, def: 25, spa: 27, spd: 32, spe: 92 },
    abilities: { 0: "Appraisal", 1: "Desperation", H: "Rejuvenate" }
  },
  gamphyst: {
    num: 1008,
    name: "Gamphyst",
    types: ["Stellar"],
    baseStats: { hp: 50, atk: 53, def: 40, spa: 20, spd: 30, spe: 17 },
    abilities: { 0: "Last Stand", 1: "Intimidate", H: "Sceptic" }
  },
  gamspect: {
    num: 1009,
    name: "Gamspect",
    types: ["Stellar"],
    baseStats: { hp: 50, atk: 20, def: 30, spa: 53, spd: 40, spe: 17 },
    abilities: { 0: "Last Stand", 1: "Intimidate", H: "Sceptic" }
  },
  stitial: {
    num: 1010,
    name: "Stitial",
    types: ["Stellar"],
    baseStats: { hp: 42, atk: 32, def: 32, spa: 32, spd: 32, spe: 65 },
    abilities: { 0: "Desperation", 1: "Intimidate", H: "Rejuvenate" }
  }
};
//# sourceMappingURL=pokedex.js.map
