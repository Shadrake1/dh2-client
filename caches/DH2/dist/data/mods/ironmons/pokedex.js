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
  burningsage: {
    num: -1,
    name: "Burning Sage",
    types: ["Fire", "Fairy"],
    gender: "N",
    baseStats: { hp: 101, atk: 77, def: 81, spa: 111, spd: 97, spe: 103 },
    abilities: { 0: "Protosynthesis" },
    heightm: 1.5,
    weightkg: 39,
    color: "Red",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  slicingtide: {
    num: -2,
    name: "Slicing Tide",
    types: ["Water", "Flying"],
    gender: "N",
    baseStats: { hp: 79, atk: 145, def: 79, spa: 89, spd: 139, spe: 39 },
    abilities: { 0: "Protosynthesis" },
    heightm: 2,
    weightkg: 108,
    color: "Gray",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  ironglider: {
    num: -3,
    name: "Iron Glider",
    types: ["Normal", "Flying"],
    gender: "N",
    baseStats: { hp: 80, atk: 96, def: 90, spa: 74, spd: 80, spe: 150 },
    abilities: { 0: "Quark Drive" },
    heightm: 0.8,
    weightkg: 6,
    color: "Brown",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  irontower: {
    num: -4,
    name: "Iron Tower",
    types: ["Grass", "Electric"],
    gender: "N",
    baseStats: { hp: 82, atk: 96, def: 94, spa: 98, spd: 94, spe: 126 },
    abilities: { 0: "Quark Drive" },
    heightm: 1.9,
    weightkg: 55.2,
    color: "Green",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  junglespike: {
    num: -5,
    name: "Jungle Spike",
    types: ["Grass", "Fighting"],
    gender: "N",
    baseStats: { hp: 71, atk: 123, def: 141, spa: 75, spd: 105, spe: 75 },
    abilities: { 0: "Protosynthesis" },
    heightm: 1.9,
    weightkg: 45.5,
    color: "Red",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  sinisterdoll: {
    num: -6,
    name: "Sinister Doll",
    types: ["Ghost", "Ground"],
    gender: "N",
    baseStats: { hp: 87, atk: 81, def: 71, spa: 143, spd: 123, spe: 85 },
    abilities: { 0: "Protosynthesis" },
    heightm: 0.5,
    weightkg: 9,
    color: "Purple",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  chillinggale: {
    num: -7,
    name: "Chilling Gale",
    types: ["Ice", "Fighting"],
    gender: "N",
    baseStats: { hp: 91, atk: 71, def: 71, spa: 111, spd: 121, spe: 125 },
    abilities: { 0: "Protosynthesis" },
    heightm: 1.7,
    weightkg: 55.4,
    color: "Blue",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  ironguardian: {
    num: -8,
    name: "Iron Guardian",
    types: ["Dragon", "Steel"],
    gender: "N",
    baseStats: { hp: 116, atk: 74, def: 120, spa: 124, spd: 86, spe: 70 },
    abilities: { 0: "Quark Drive" },
    heightm: 4.5,
    weightkg: 610,
    color: "Black",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  ironiron: {
    num: -9,
    name: "Iron Iron",
    types: ["Steel", "Electric"],
    gender: "N",
    baseStats: { hp: 80, atk: 90, def: 160, spa: 50, spd: 160, spe: 50 },
    abilities: { 0: "Quark Drive" },
    heightm: 1.9,
    weightkg: 999.9,
    color: "Gray",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  rigidbunker: {
    num: -10,
    name: "Rigid Bunker",
    types: ["Poison", "Dragon"],
    gender: "N",
    baseStats: { hp: 69, atk: 101, def: 161, spa: 73, spd: 111, spe: 55 },
    abilities: { 0: "Protosynthesis" },
    heightm: 0.7,
    weightkg: 14.5,
    color: "Blue",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  bigshot: {
    num: -11,
    name: "Big Shot",
    types: ["Normal", "Electric"],
    gender: "N",
    baseStats: { hp: 95, atk: 65, def: 85, spa: 135, spd: 95, spe: 95 },
    abilities: { 0: "Protosynthesis" },
    heightm: 0.9,
    weightkg: 34,
    color: "Red",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  irontiara: {
    num: -12,
    name: "Iron Tiara",
    types: ["Rock", "Flying"],
    gender: "N",
    baseStats: { hp: 80, atk: 140, def: 120, spa: 60, spd: 80, spe: 110 },
    abilities: { 0: "Quark Drive" },
    heightm: 1.1,
    weightkg: 27.8,
    color: "Pink",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  ironman: {
    num: -13,
    name: "Iron Man",
    types: ["Fighting", "Steel"],
    gender: "N",
    baseStats: { hp: 92, atk: 64, def: 92, spa: 130, spd: 92, spe: 100 },
    abilities: { 0: "Quark Drive" },
    heightm: 1.6,
    weightkg: 130,
    color: "Gray",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  terracottatitan: {
    num: -14,
    name: "Terracotta Titan",
    types: ["Psychic", "Ground"],
    gender: "N",
    baseStats: { hp: 103, atk: 57, def: 123, spa: 129, spd: 81, spe: 97 },
    abilities: { 0: "Protosynthesis" },
    heightm: 2.5,
    weightkg: 942.9,
    color: "Blue",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  duskendeputy: {
    num: -15,
    name: "Dusken Deputy",
    types: ["Dark", "Fighting"],
    gender: "N",
    baseStats: { hp: 127, atk: 127, def: 89, spa: 65, spd: 73, spe: 89 },
    abilities: { 0: "Protosynthesis" },
    heightm: 1.3,
    weightkg: 77.4,
    color: "Green",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  ironsavage: {
    num: -16,
    name: "Iron Savage",
    types: ["Dark", "Steel"],
    gender: "N",
    baseStats: { hp: 108, atk: 106, def: 92, spa: 52, spd: 124, spe: 88 },
    abilities: { 0: "Quark Drive" },
    heightm: 1.2,
    weightkg: 92.4,
    color: "Brown",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  ironbeetle: {
    num: -17,
    name: "Iron Beetle",
    types: ["Bug", "Ground"],
    gender: "N",
    baseStats: { hp: 80, atk: 130, def: 110, spa: 62, spd: 110, spe: 98 },
    abilities: { 0: "Quark Drive" },
    heightm: 1.7,
    weightkg: 62.5,
    color: "Blue",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  spinningrat: {
    num: -18,
    name: "Spinning Rat",
    types: ["Dark", "Flying"],
    gender: "N",
    baseStats: { hp: 97, atk: 123, def: 91, spa: 51, spd: 97, spe: 111 },
    abilities: { 0: "Protosynthesis" },
    heightm: 0.7,
    weightkg: 25.5,
    color: "Black",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  }
};
//# sourceMappingURL=pokedex.js.map
