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
  unicorn: {
    num: -2022,
    name: "Unicorn",
    types: ["Fairy", "Fire"],
    baseStats: { hp: 95, atk: 145, def: 91, spa: 110, spd: 121, spe: 98 },
    abilities: { 0: "Reckless", H: "Sap Sipper" }
  },
  platypus: {
    num: -2023,
    name: "Platypus",
    types: ["Poison", "Fighting"],
    baseStats: { hp: 95, atk: 98, def: 121, spa: 145, spd: 91, spe: 110 },
    abilities: { 0: "Infiltrator", H: "Storm Drain" }
  },
  powerplant: {
    num: -2024,
    name: "Power Plant",
    types: ["Grass", "Electric"],
    baseStats: { hp: 40, atk: 160, def: 70, spa: 160, spd: 85, spe: 110 },
    abilities: { 0: "Heavy Metal", H: "Long Reach" }
  },
  druddigod: {
    num: -2025,
    name: "Druddigod",
    types: ["Dragon"],
    baseStats: { hp: 140, atk: 105, def: 130, spa: 80, spd: 125, spe: 80 },
    abilities: { 0: "Sheer Force", H: "Mold Breaker" }
  },
  snek: {
    num: -2026,
    name: "Snek",
    types: ["Ice"],
    baseStats: { hp: 125, atk: 90, def: 95, spa: 100, spd: 95, spe: 155 },
    abilities: { 0: "Regenerator" }
  },
  ghostcar: {
    num: -2027,
    name: "Ghost Car",
    types: ["Steel", "Ghost"],
    baseStats: { hp: 120, atk: 133, def: 103, spa: 133, spd: 103, spe: 68 },
    abilities: { 0: "Mirror Armor", H: "Steadfast" }
  },
  trapjawfireant: {
    num: -2028,
    name: "Trapjaw Fireant",
    types: ["Bug", "Ground"],
    baseStats: { hp: 100, atk: 150, def: 150, spa: 75, spd: 100, spe: 50 },
    abilities: { 0: "Flash Fire" }
  },
  duck: {
    num: -2029,
    name: "Duck",
    types: ["Grass", "Water"],
    baseStats: { hp: 100, atk: 90, def: 89, spa: 135, spd: 89, spe: 122 },
    abilities: { 0: "Flower Veil", H: "Intimidate" }
  },
  groundpoison: {
    num: -2030,
    name: "groundpoison",
    types: ["Ground", "Poison"],
    baseStats: { hp: 105, atk: 135, def: 115, spa: 90, spd: 115, spe: 85 },
    abilities: { 0: "Poison Point", H: "Crystalize" }
  },
  groundpoisoncrystallized: {
    num: -2031,
    name: "groundpoison-Crystallized",
    baseSpecies: "groundpoison",
    forme: "Crystallized",
    types: ["Ground", "Rock"],
    baseStats: { hp: 105, atk: 125, def: 80, spa: 120, spd: 80, spe: 135 },
    abilities: { 0: "Crystalize" }
  },
  metalsnek: {
    num: -2032,
    name: "Metal Snek",
    types: ["Dark", "Steel"],
    baseStats: { hp: 95, atk: 135, def: 80, spa: 120, spd: 135, spe: 95 },
    abilities: { 0: "Oblivious", H: "Sticky Hold" }
  },
  rocwithramhorns: {
    num: -2033,
    name: "Roc With Ram Horns",
    types: ["Flying"],
    baseStats: { hp: 120, atk: 140, def: 115, spa: 110, spd: 75, spe: 65 },
    abilities: { 0: "Downdraft", H: "Gale Wings" }
  },
  ghostnormal: {
    num: -2034,
    name: "ghostnormal",
    types: ["Ghost", "Normal"],
    baseStats: { hp: 85, atk: 160, def: 110, spa: 145, spd: 140, spe: 20 },
    abilities: { 0: "Steelworker", H: "Harvest" }
  },
  cartesianplanedragon: {
    num: -2035,
    name: "Cartesian Plane Dragon",
    types: ["Psychic", "Dragon"],
    baseStats: { hp: 96, atk: 105, def: 95, spa: 129, spd: 80, spe: 140 },
    abilities: { 0: "Eidetic Memory" }
  },
  betterthancinderaceassoccer: {
    num: -2036,
    name: "better than cinderace as soccer",
    types: ["Water"],
    baseStats: { hp: 115, atk: 135, def: 85, spa: 85, spd: 110, spe: 95 },
    abilities: { 0: "Serene Grace" }
  },
  statue: {
    num: -2037,
    name: "Statue",
    types: ["Rock"],
    baseStats: { hp: 110, atk: 110, def: 110, spa: 110, spd: 110, spe: 110 },
    abilities: { 0: "Trace" }
  }
};
//# sourceMappingURL=pokedex.js.map
