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
  solrock: {
    inherit: true,
    name: "Solrock",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 117, atk: 87, def: 87, spa: 57, spd: 67, spe: 89 },
    abilities: { 0: "Levitate", H: "Dauntless Shield" }
  },
  aegislash: {
    inherit: true,
    name: "Aegislash",
    types: ["Steel", "Ghost"],
    baseStats: { hp: 40, atk: 50, def: 100, spa: 95, spd: 160, spe: 51 },
    abilities: { 0: "Wandering Spirit", H: "Trace" }
  },
  solgaleo: {
    inherit: true,
    name: "Solgaleo",
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 65, atk: 85, def: 80, spa: 100, spd: 65, spe: 105 },
    abilities: { 0: "Intimidate", 1: "Victory Star", H: "Full Metal Body" }
  },
  komala: {
    inherit: true,
    name: "Komala",
    types: ["Fairy"],
    baseStats: { hp: 70, atk: 100, def: 70, spa: 65, spd: 100, spe: 45 },
    abilities: { 0: "Comatose" }
  },
  zangoose: {
    inherit: true,
    name: "Zangoose",
    types: ["Normal", "Fire"],
    baseStats: { hp: 80, atk: 115, def: 60, spa: 95, spd: 60, spe: 100 },
    abilities: { 0: "Immunity", H: "Poison Heal" }
  },
  chandelure: {
    inherit: true,
    name: "Chandelure",
    types: ["Fire"],
    baseStats: { hp: 51, atk: 60, def: 91, spa: 120, spd: 91, spe: 77 },
    abilities: { 0: "Flash Fire", 1: "Compound Eyes", H: "Regenerator" }
  },
  carracosta: {
    inherit: true,
    name: "Carracosta",
    types: ["Water", "Dark"],
    baseStats: { hp: 74, atk: 108, def: 114, spa: 83, spd: 65, spe: 46 },
    abilities: { 0: "Shell Armor", 1: "Oblivious", H: "Dry Skin" }
  },
  overqwil: {
    name: "Overqwil",
    types: ["Dark", "Poison"],
    baseStats: { hp: 96, atk: 55, def: 85, spa: 70, spd: 96, spe: 85 },
    abilities: { 0: "Water Bubble", 1: "Intimidate", H: "Rough Skin" }
  },
  omastar: {
    inherit: true,
    name: "Omastar",
    types: ["Water", "Ground"],
    baseStats: { hp: 70, atk: 98, def: 85, spa: 67, spd: 70, spe: 95 },
    abilities: { 0: "Iron Barbs", H: "Mold Breaker" }
  },
  pichu: {
    inherit: true,
    name: "Pichu",
    types: ["Electric"],
    baseStats: { hp: 55, atk: 95, def: 55, spa: 75, spd: 55, spe: 70 },
    abilities: { 0: "Galvanize", 1: "Static", H: "Fur Coat" }
  },
  virizion: {
    inherit: true,
    name: "Virizion",
    types: ["Steel", "Grass"],
    baseStats: { hp: 61, atk: 90, def: 86, spa: 70, spd: 99, spe: 88 },
    abilities: { 0: "Justified", 1: "Sap Sipper", H: "Steely Spirit" }
  },
  eiscue: {
    inherit: true,
    name: "Eiscue",
    types: ["Ice", "Steel"],
    baseStats: { hp: 75, atk: 50, def: 90, spa: 95, spd: 110, spe: 55 },
    abilities: { 0: "Ice Face" }
  },
  eiscuenoice: {
    inherit: true,
    name: "Eiscue-Noice",
    types: ["Ice", "Steel"],
    baseStats: { hp: 75, atk: 50, def: 50, spa: 95, spd: 70, spe: 135 },
    abilities: { 0: "Ice Face" }
  },
  sandyshocks: {
    inherit: true,
    name: "Sandy Shocks",
    types: ["Electric", "Ground"],
    baseStats: { hp: 90, atk: 75, def: 100, spa: 80, spd: 50, spe: 50 },
    abilities: { 0: "Magnet Pull", 1: "Sap Sipper", H: "Electric Surge" },
    evos: ["Arceus"]
  },
  lumineon: {
    inherit: true,
    name: "Lumineon",
    types: ["Water", "Bug"],
    baseStats: { hp: 90, atk: 80, def: 90, spa: 80, spd: 120, spe: 80 },
    abilities: { 0: "Thick Fat" }
  },
  talonflame: {
    inherit: true,
    name: "Talonflame",
    types: ["Fire", "Flying"],
    baseStats: { hp: 126, atk: 81, def: 59, spa: 76, spd: 71, spe: 73 },
    abilities: { 0: "Flame Body", H: "Gale Wings" }
  },
  onix: {
    inherit: true,
    name: "Onix",
    types: ["Rock", "Dragon"],
    baseStats: { hp: 70, atk: 75, def: 140, spa: 85, spd: 70, spe: 120 },
    abilities: { 0: "Sturdy", 1: "Weak Armor", H: "Adaptability" }
  },
  chiyu: {
    inherit: true,
    name: "Chi-Yu",
    types: ["Dark"],
    baseStats: { hp: 60, atk: 80, def: 80, spa: 90, spd: 80, spe: 90 },
    abilities: { 0: "Flash Fire", H: "Poison Heal" }
  },
  dondozo: {
    inherit: true,
    name: "Dondozo",
    types: ["Dragon"],
    baseStats: { hp: 150, atk: 80, def: 65, spa: 60, spd: 65, spe: 80 },
    abilities: { 0: "Earth Eater", 1: "Water Veil", H: "Protosynthesis" }
  }
};
//# sourceMappingURL=pokedex.js.map
