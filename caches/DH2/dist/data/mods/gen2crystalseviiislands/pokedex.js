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
  horatekku: {
    num: 252,
    name: "Horatekku",
    types: ["Steel", "Ghost"],
    baseStats: { hp: 80, atk: 100, def: 120, spa: 60, spd: 70, spe: 50 },
    abilities: { 0: "No Ability" },
    heightm: 0.2,
    weightkg: 0.5
  },
  aroofaondo: {
    num: 253,
    name: "Aroofaondo",
    types: ["Fire", "Ice"],
    baseStats: { hp: 60, atk: 70, def: 70, spa: 100, spd: 80, spe: 100 },
    abilities: { 0: "No Ability" },
    heightm: 0.5,
    weightkg: 12.1
  },
  exoltol: {
    num: 254,
    name: "Exoltol",
    types: ["Water", "Ground"],
    baseStats: { hp: 100, atk: 105, def: 95, spa: 70, spd: 70, spe: 45 },
    abilities: { 0: "No Ability" },
    heightm: 1,
    weightkg: 131,
    prevo: "Quagsire"
  },
  animon: {
    num: 255,
    name: "Animon",
    types: ["Steel"],
    gender: "N",
    baseStats: { hp: 72, atk: 72, def: 48, spa: 72, spd: 48, spe: 72 },
    abilities: { 0: "No Ability" },
    heightm: 0.5,
    weightkg: 6,
    prevo: "Ditto"
  },
  esscargoo: {
    num: 256,
    name: "Esscargoo",
    types: ["Fire", "Rock"],
    baseStats: { hp: 70, atk: 85, def: 140, spa: 95, spd: 95, spe: 40 },
    abilities: { 0: "No Ability" },
    heightm: 1.4,
    weightkg: 151.1,
    prevo: "Magcargo"
  },
  tunguru: {
    num: 257,
    name: "Tunguru",
    types: ["Normal", "Psychic"],
    baseStats: { hp: 100, atk: 65, def: 85, spa: 120, spd: 85, spe: 30 },
    abilities: { 0: "No Ability" },
    heightm: 1.3,
    weightkg: 90.5,
    prevo: "Lickitung"
  },
  terricks: {
    num: 258,
    name: "Terricks",
    types: ["Rock", "Flying"],
    gender: "N",
    baseStats: { hp: 90, atk: 125, def: 160, spa: 90, spd: 50, spe: 65 },
    abilities: { 0: "No Ability" },
    heightm: 3.8,
    weightkg: 140.4
  },
  skunkle: {
    num: 259,
    name: "Skunkle",
    types: ["Poison", "Dark"],
    baseStats: { hp: 50, atk: 60, def: 50, spa: 65, spd: 70, spe: 55 },
    abilities: { 0: "No Ability" },
    heightm: 0.4,
    weightkg: 19.2,
    evos: ["Skunking"]
  },
  skunking: {
    num: 260,
    name: "Skunking",
    types: ["Poison", "Dark"],
    baseStats: { hp: 97, atk: 80, def: 81, spa: 83, spd: 70, spe: 62 },
    abilities: { 0: "No Ability" },
    heightm: 1.2,
    weightkg: 50,
    prevo: "Skunkle"
  },
  kipuro: {
    num: 261,
    name: "Kipuro",
    types: ["Rock", "Grass"],
    baseStats: { hp: 90, atk: 90, def: 100, spa: 90, spd: 80, spe: 50 },
    abilities: { 0: "No Ability" },
    heightm: 2.1,
    weightkg: 360
  },
  kamebi: {
    num: 262,
    name: "Kamebi",
    types: ["Psychic", "Ground"],
    baseStats: { hp: 75, atk: 110, def: 100, spa: 100, spd: 65, spe: 50 },
    abilities: { 0: "No Ability" },
    heightm: 2.1,
    weightkg: 195.3
  },
  pyronoir: {
    num: 263,
    name: "Pyronoir",
    types: ["Ghost", "Fire"],
    baseStats: { hp: 85, atk: 125, def: 60, spa: 65, spd: 140, spe: 65 },
    abilities: { 0: "No Ability" },
    heightm: 2.2,
    weightkg: 106.6
  },
  kazappelin: {
    num: 264,
    name: "Kazappelin",
    types: ["Poison"],
    baseStats: { hp: 85, atk: 95, def: 95, spa: 85, spd: 75, spe: 75 },
    abilities: { 0: "No Ability" },
    heightm: 1.7,
    weightkg: 62.3
  },
  pierzer: {
    num: 265,
    name: "Pierzer",
    types: ["Bug", "Flying"],
    baseStats: { hp: 65, atk: 125, def: 120, spa: 75, spd: 70, spe: 45 },
    abilities: { 0: "No Ability" },
    heightm: 2.1,
    weightkg: 175.8
  },
  oatu: {
    num: 266,
    name: "Oatu",
    types: ["Psychic", "Cosmic"],
    baseStats: { hp: 85, atk: 85, def: 70, spa: 115, spd: 120, spe: 55 },
    abilities: { 0: "No Ability" },
    heightm: 3.1,
    weightkg: 136.1,
    prevo: "Xatu"
  },
  lunaraknid: {
    num: 267,
    name: "Lunaraknid",
    types: ["Bug", "Cosmic"],
    baseStats: { hp: 80, atk: 90, def: 70, spa: 120, spd: 80, spe: 90 },
    abilities: { 0: "No Ability" },
    heightm: 1.4,
    weightkg: 41.9,
    prevo: "Ariados"
  },
  cumulos: {
    num: 268,
    name: "Cumulos",
    types: ["Dragon"],
    baseStats: { hp: 65, atk: 55, def: 60, spa: 90, spd: 65, spe: 110 },
    abilities: { 0: "No Ability" },
    heightm: 1.4,
    weightkg: 55,
    evos: ["Altocumulos"]
  },
  altocumulos: {
    num: 269,
    name: "Altocumulos",
    types: ["Dragon", "Cosmic"],
    baseStats: { hp: 80, atk: 80, def: 75, spa: 100, spd: 110, spe: 55 },
    abilities: { 0: "No Ability" },
    heightm: 3,
    weightkg: 130,
    prevo: "Cumulos"
  },
  celesteon: {
    num: 270,
    name: "Celesteon",
    types: ["Cosmic"],
    baseStats: { hp: 65, atk: 130, def: 110, spa: 95, spd: 60, spe: 65 },
    abilities: { 0: "No Ability" },
    heightm: 0.9,
    weightkg: 26,
    prevo: "Eevee"
  },
  // Vanilla Edits
  quagsire: {
    inherit: true,
    evos: ["Exoltol"]
  },
  ditto: {
    inherit: true,
    evos: ["Animon"]
  },
  magcargo: {
    inherit: true,
    evos: ["Esscargoo"]
  },
  lickitung: {
    inherit: true,
    evos: ["Tunguru"]
  },
  xatu: {
    inherit: true,
    evos: ["Oatu"]
  },
  ariados: {
    inherit: true,
    evos: ["lunaraknid"]
  },
  stantler: {
    inherit: true,
    types: ["Normal", "Cosmic"]
  },
  ampharos: {
    inherit: true,
    types: ["Electric", "Cosmic"]
  },
  clefable: {
    inherit: true,
    types: ["Cosmic"]
  },
  clefairy: {
    inherit: true,
    types: ["Cosmic"]
  },
  cleffa: {
    inherit: true,
    types: ["Cosmic"]
  },
  tangela: {
    inherit: true,
    types: ["Grass", "Cosmic"]
  },
  eevee: {
    inherit: true,
    evos: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Celesteon"]
  }
};
//# sourceMappingURL=pokedex.js.map
