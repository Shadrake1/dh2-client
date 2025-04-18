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
  roserade: {
    inherit: true,
    types: ["Grass", "Dark", "Fairy"],
    baseStats: { hp: 70, atk: 70, def: 75, spa: 115, spd: 105, spe: 90 },
    abilities: { 0: "Natural Cure", 1: "Immunity", H: "Grassy Surge" }
  },
  darmanitanzen: {
    inherit: true,
    baseSpecies: null,
    forme: null,
    types: ["Fire", "Psychic", "Fighting"],
    baseStats: { hp: 105, atk: 55, def: 105, spa: 140, spd: 105, spe: 30 },
    abilities: { 0: "Inner Focus", H: "Solid Rock" }
  },
  hammerhelm: {
    num: -1,
    name: "Hammerhelm",
    types: ["Water", "Fighting", "Steel"],
    baseStats: { hp: 80, atk: 130, def: 120, spa: 65, spd: 60, spe: 50 },
    abilities: { 0: "Heavy Metal", 1: "Iron Fist", H: "Flash Fire" },
    weightkg: 200
  },
  dondozo: {
    inherit: true,
    types: ["Dragon", "Water", "Ground"],
    baseStats: { hp: 130, atk: 100, def: 115, spa: 65, spd: 70, spe: 55 },
    abilities: { 0: "Oblivious", 1: "Early Bird", H: "Marvel Scale" }
  },
  delphox: {
    inherit: true,
    types: ["Fairy", "Fire", "Psychic"],
    baseStats: { hp: 75, atk: 83, def: 69, spa: 114, spd: 90, spe: 105 },
    abilities: { 0: "Blaze", H: "Fur Coat" }
  },
  genesectshock: {
    inherit: true,
    baseSpecies: null,
    forme: null,
    types: ["Bug", "Steel", "Electric"],
    baseStats: { hp: 71, atk: 100, def: 90, spa: 100, spd: 90, spe: 99 },
    abilities: { 0: "Regenerator" },
    requiredItem: null,
    changesFrom: null
  },
  grafaiai: {
    inherit: true,
    types: ["Poison", "Dark", "Flying"],
    baseStats: { hp: 83, atk: 93, def: 75, spa: 85, spd: 92, spe: 119 }
  },
  dhelmise: {
    inherit: true,
    types: ["Ghost", "Grass", "Water"]
  },
  ironjugulis: {
    inherit: true,
    types: ["Flying", "Dragon", "Dark"],
    baseStats: { hp: 104, atk: 80, def: 86, spa: 112, spd: 80, spe: 108 },
    abilities: { 0: "Quark Drive", H: "Multiscale" }
  },
  omastar: {
    inherit: true,
    types: ["Rock", "Water", "Bug"]
  },
  cyclizar: {
    inherit: true,
    types: ["Ground", "Dragon", "Fire"],
    baseStats: { hp: 70, atk: 105, def: 80, spa: 85, spd: 80, spe: 120 },
    abilities: { 0: "Shed Skin", 1: "Armor Tail", H: "Regenerator" }
  },
  deliriophage: {
    num: -2,
    name: "Deliriophage",
    types: ["Steel", "Ghost", "Dark"],
    baseStats: { hp: 90, atk: 80, def: 80, spa: 110, spd: 110, spe: 50 },
    abilities: { 0: "Light Metal", 1: "Shield Dust", H: "Stall" },
    weightkg: 67
  },
  chilupo: {
    num: -3,
    name: "Chilupo",
    types: ["Ice", "Water", "Fairy"],
    baseStats: { hp: 80, atk: 100, def: 80, spa: 100, spd: 110, spe: 80 },
    abilities: { 0: "Slush Rush", 1: "Magic Guard", H: "Refrigerate" },
    weightkg: 20
  },
  zangoose: {
    inherit: true,
    types: ["Normal", "Fairy", "Poison"],
    baseStats: { hp: 110, atk: 95, def: 90, spa: 80, spd: 70, spe: 90 },
    abilities: { 0: "Intimidate", H: "Tough Claws" }
  },
  overqwil: {
    inherit: true,
    types: ["Dark", "Poison", "Steel"],
    baseStats: { hp: 85, atk: 105, def: 75, spa: 65, spd: 110, spe: 80 },
    abilities: { 0: "Levitate", H: "Regenerator" }
  },
  magcargo: {
    inherit: true,
    types: ["Fire", "Grass", "Rock"],
    baseStats: { hp: 95, atk: 50, def: 120, spa: 100, spd: 80, spe: 55 },
    abilities: { 0: "Flash Fire", 1: "Flame Body", H: "Weak Armor" }
  },
  ironthorns: {
    inherit: true,
    types: ["Rock", "Electric", "Fighting"],
    baseStats: { hp: 100, atk: 134, def: 104, spa: 50, spd: 110, spe: 72 },
    abilities: { 0: "Quark Drive", H: "Sand Stream" }
  },
  brrrwtick: {
    num: -4,
    name: "Brrrwtick",
    types: ["Ice", "Ground", "Bug"],
    baseStats: { hp: 79, atk: 127, def: 79, spa: 97, spd: 79, spe: 109 },
    abilities: { 0: "Beast Boost" }
  },
  regieleki: {
    inherit: true,
    types: ["Electric", "Steel", "Flying"],
    baseStats: { hp: 95, atk: 90, def: 80, spa: 90, spd: 85, spe: 130 },
    abilities: { 0: "Aerilate" }
  },
  hatterene: {
    inherit: true,
    name: "Hatterene",
    types: ["Psychic", "Dragon", "Fairy"],
    baseStats: { hp: 77, atk: 90, def: 95, spa: 116, spd: 103, spe: 29 }
  },
  furret: {
    inherit: true,
    name: "Furret",
    types: ["Normal", "Ground", "Flying"],
    baseStats: { hp: 85, atk: 96, def: 84, spa: 45, spd: 65, spe: 100 },
    abilities: { 0: "Fluffy", 1: "Keen Eye", H: "Frisk" }
  }
};
//# sourceMappingURL=pokedex.js.map
