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
  flockenload: {
    num: 1001,
    name: "Flockenload",
    types: ["Flying", "Poison"],
    baseStats: { hp: 95, atk: 105, def: 97, spa: 85, spd: 87, spe: 86 },
    abilities: { 0: "Keen Eye", H: "Sticky Hold" },
    weightkg: 7.8
  },
  pugilox: {
    num: 1002,
    name: "Pugilox",
    types: ["Fighting", "Poison"],
    baseStats: { hp: 83, atk: 84, def: 114, spa: 68, spd: 81, spe: 75 },
    abilities: { 0: "Iron Fist", H: "Dry Skin" },
    weightkg: 81
  },
  retreamole: {
    num: 1003,
    name: "Retreamole",
    types: ["Ground"],
    baseStats: { hp: 90, atk: 100, def: 130, spa: 65, spd: 90, spe: 65 },
    abilities: { 0: "Emergency Exit" },
    weightkg: 100
  },
  alohwo: {
    num: 1004,
    name: "Alohwo",
    types: ["Fire", "Dragon"],
    baseStats: { hp: 111, atk: 112, def: 90, spa: 100, spd: 99, spe: 95 },
    abilities: { 0: "Blaze", H: "Strong Jaw" }
  },
  alcejudo: {
    num: 1005,
    name: "Alcejudo",
    types: ["Fighting"],
    baseStats: { hp: 110, atk: 135, def: 100, spa: 65, spd: 90, spe: 55 },
    abilities: { 0: "Stall" },
    weightkg: 65
  },
  spirachain: {
    num: 1006,
    name: "Spirachain",
    types: ["Steel", "Psychic"],
    baseStats: { hp: 67, atk: 127, def: 127, spa: 83, spd: 67, spe: 79 },
    abilities: { 0: "Liquid Ooze" },
    weightkg: 81
  },
  follygaster: {
    num: 1007,
    name: "Follygaster",
    types: ["Normal"],
    baseStats: { hp: 90, atk: 115, def: 100, spa: 90, spd: 70, spe: 55 },
    abilities: { 0: "Sheer Force", 1: "Stamina", H: "Stench" },
    weightkg: 126
  },
  sequoither: {
    num: 1008,
    name: "Sequoither",
    types: ["Ghost", "Grass"],
    baseStats: { hp: 130, atk: 70, def: 50, spa: 100, spd: 80, spe: 60 },
    abilities: { 0: "Ripen", 1: "Insomnia", H: "Triage" },
    weightkg: 361.2
  },
  souruffowz: {
    num: 1009,
    name: "Souruffowz",
    types: ["Grass", "Fighting"],
    baseStats: { hp: 70, atk: 60, def: 85, spa: 100, spd: 110, spe: 80 },
    abilities: { 0: "Static", H: "Transistor" },
    weightkg: 150
  },
  barnacrust: {
    num: 1010,
    name: "Barnacrust",
    types: ["Water", "Ground"],
    baseStats: { hp: 90, atk: 65, def: 85, spa: 100, spd: 80, spe: 90 },
    abilities: { 0: "Water Veil", 1: "Water Absorb", H: "Regenerator" },
    weightkg: 40
  },
  mercurice: {
    num: 1011,
    name: "Mercurice",
    types: ["Ice", "Poison"],
    baseStats: { hp: 115, atk: 50, def: 120, spa: 110, spd: 80, spe: 30 },
    abilities: { 0: "Filter", H: "Magic Guard" },
    weightkg: 90
  },
  valcondor: {
    num: 1012,
    name: "Valcondor",
    types: ["Flying", "Fighting"],
    baseStats: { hp: 75, atk: 110, def: 85, spa: 88, spd: 138, spe: 59 },
    abilities: { 0: "Big Pecks", H: "Sheer Force" },
    weightkg: 72.2
  },
  luminity: {
    num: 1013,
    name: "Luminity",
    types: ["Psychic", "Electric"],
    baseStats: { hp: 80, atk: 70, def: 65, spa: 120, spd: 120, spe: 100 },
    abilities: { 0: "Pressure" },
    weightkg: 30
  },
  lotusage: {
    num: 1014,
    name: "Lotusage",
    types: ["Water", "Grass"],
    baseStats: { hp: 85, atk: 45, def: 105, spa: 115, spd: 65, spe: 100 },
    abilities: { 0: "Water Veil", 1: "Flower Veil", H: "Trace" },
    weightkg: 60
  },
  revitty: {
    num: 1015,
    name: "Revitty",
    types: ["Ghost"],
    baseStats: { hp: 45, atk: 135, def: 80, spa: 40, spd: 80, spe: 120 },
    abilities: { 0: "Misty Surge" },
    weightkg: 1
  },
  silvorm: {
    num: 1016,
    name: "Silvorm",
    types: ["Bug", "Water"],
    baseStats: { hp: 60, atk: 60, def: 95, spa: 105, spd: 65, spe: 110 },
    abilities: { 0: "Unnerve", H: "Drizzle" },
    weightkg: 12
  },
  devialloy: {
    num: 1017,
    name: "Devialloy",
    types: ["Dark", "Steel"],
    baseStats: { hp: 90, atk: 110, def: 88, spa: 55, spd: 102, spe: 90 },
    abilities: { 0: "Merciless" },
    weightkg: 49
  },
  kuninyx: {
    num: 1018,
    name: "Kuninyx",
    types: ["Dragon", "Fairy"],
    baseStats: { hp: 169, atk: 81, def: 64, spa: 100, spd: 49, spe: 36 },
    abilities: { 0: "Filter", H: "Neutralizing Gas" },
    weightkg: 20
  }
};
//# sourceMappingURL=pokedex.js.map
