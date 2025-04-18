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
  armaldo: {
    inherit: true,
    num: 1,
    name: "Armaldo",
    types: ["Rock", "Grass"],
    baseStats: { hp: 75, atk: 125, def: 100, spa: 50, spd: 100, spe: 65 },
    abilities: { 0: "Swift Swim", 1: "Sharpness", H: "Solid Rock" }
  },
  weezinggalar: {
    inherit: true,
    num: 2,
    name: "Weezing-Galar",
    types: ["Poison", "Fairy"],
    baseStats: { hp: 85, atk: 85, def: 120, spa: 90, spd: 70, spe: 60 },
    abilities: { 0: "Levitate", 1: "Neutralizing Gas", H: "Misty Surge" }
  },
  camerupt: {
    inherit: true,
    num: 3,
    name: "Camerupt",
    types: ["Ground", "Fire"],
    baseStats: { hp: 120, atk: 70, def: 85, spa: 105, spd: 75, spe: 40 },
    abilities: { 0: "Unaware", 1: "Magma Armor", H: "Flame Body" }
  },
  vikavolt: {
    inherit: true,
    num: 4,
    name: "Vikavolt",
    types: ["Bug", "Electric"],
    baseStats: { hp: 80, atk: 95, def: 80, spa: 85, spd: 75, spe: 110 },
    abilities: { 0: "Swarm", 1: "Mirror Armor", H: "Quark Drive" }
  },
  corsola: {
    inherit: true,
    num: 5,
    name: "Corsola",
    types: ["Water", "Steel"],
    baseStats: { hp: 95, atk: 70, def: 85, spa: 105, spd: 110, spe: 65 },
    abilities: { 0: "Regenerator", 1: "Sheer Force", H: "Competitive" }
  },
  zebstrika: {
    inherit: true,
    num: 6,
    name: "Zebstrika",
    types: ["Electric"],
    baseStats: { hp: 75, atk: 80, def: 80, spa: 100, spd: 80, spe: 115 },
    abilities: { 0: "Lightning Rod", 1: "Motor Drive", H: "Electric Surge" }
  },
  medicham: {
    inherit: true,
    num: 7,
    name: "Medicham",
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 90, atk: 120, def: 75, spa: 60, spd: 75, spe: 80 },
    abilities: { 0: "Magic Bounce", H: "Telepathy" }
  },
  delibird: {
    inherit: true,
    num: 8,
    name: "Delibird",
    types: ["Flying"],
    baseStats: { hp: 80, atk: 125, def: 105, spa: 90, spd: 80, spe: 100 },
    abilities: { 0: "Magic Guard" }
  },
  mamoswine: {
    inherit: true,
    num: 9,
    name: "Mamoswine",
    types: ["Ice", "Ground"],
    baseStats: { hp: 110, atk: 130, def: 80, spa: 70, spd: 60, spe: 90 },
    abilities: { 0: "Oblivious", 1: "Snow Cloak", H: "Thick Fat" }
  },
  moltres: {
    inherit: true,
    num: 10,
    name: "Moltres",
    types: ["Fire", "Flying"],
    baseStats: { hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90 },
    abilities: { 0: "Pressure", H: "Flame Body" }
  },
  poliwrath: {
    inherit: true,
    num: 11,
    name: "Poliwrath",
    types: ["Water", "Fighting"],
    baseStats: { hp: 90, atk: 70, def: 90, spa: 115, spd: 90, spe: 85 },
    abilities: { 0: "Water Absorb", 1: "Intimidate", H: "Swift Swim" }
  },
  granbull: {
    inherit: true,
    num: 12,
    name: "Granbull",
    types: ["Fairy", "Dark"],
    baseStats: { hp: 130, atk: 120, def: 85, spa: 60, spd: 80, spe: 45 },
    abilities: { 0: "Intimidate", 1: "Quick Feet", H: "Poison Heal" }
  },
  nidoqueen: {
    inherit: true,
    num: 13,
    name: "Nidoqueen",
    types: ["Poison", "Ground"],
    baseStats: { hp: 85, atk: 97, def: 102, spa: 80, spd: 100, spe: 81 },
    abilities: { 0: "Poison Point", 1: "Rivalry", H: "Sheer Force" }
  },
  cubchoo: {
    inherit: true,
    num: 14,
    name: "Cubchoo",
    types: ["Ice", "Steel"],
    baseStats: { hp: 90, atk: 95, def: 132, spa: 135, spd: 95, spe: 90 },
    abilities: { 0: "Slush Rush", 1: "Soundproof", H: "Justified" },
    evos: null
  },
  landorustherian: {
    inherit: true,
    num: 15,
    name: "Landorus-Therian",
    types: ["Steel", "Flying"],
    baseStats: { hp: 89, atk: 145, def: 90, spa: 105, spd: 80, spe: 91 },
    abilities: { 0: "Intimidate", H: "Rattled" }
  },
  dhelmise: {
    inherit: true,
    num: 16,
    name: "Dhelmise",
    types: ["Water", "Grass"],
    baseStats: { hp: 100, atk: 131, def: 100, spa: 86, spd: 90, spe: 40 },
    abilities: { 0: "Steelworker", H: "Drizzle" }
  },
  dedenne: {
    inherit: true,
    num: 17,
    name: "Dedenne",
    types: ["Electric", "Fairy"],
    baseStats: { hp: 100, atk: 55, def: 100, spa: 135, spd: 100, spe: 80 },
    abilities: { 0: "Dry Skin", H: "Solar Power" }
  },
  garbodor: {
    inherit: true,
    num: 18,
    name: "Garbodor",
    types: ["Poison", "Dragon"],
    baseStats: { hp: 85, atk: 95, def: 82, spa: 110, spd: 100, spe: 75 },
    abilities: { 0: "Iron Barbs", 1: "Weak Armor", H: "Gluttony" }
  },
  tsareena: {
    inherit: true,
    num: 19,
    name: "Tsareena",
    types: ["Grass", "Psychic"],
    baseStats: { hp: 72, atk: 120, def: 98, spa: 50, spd: 98, spe: 148 },
    abilities: { 0: "Grassy Surge", 1: "Psychic Surge", H: "Misty Surge" }
  },
  marowakalolatotem: {
    inherit: true,
    num: 20,
    name: "Marowak-Alola-Totem",
    types: ["Fire", "Ghost"],
    baseStats: { hp: 88, atk: 102, def: 90, spa: 50, spd: 120, spe: 70 },
    abilities: { 0: "Volt Absorb", 1: "Rock Head", H: "Rattled" }
  },
  hawlucha: {
    inherit: true,
    num: 21,
    name: "Hawlucha",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 78, atk: 92, def: 75, spa: 74, spd: 63, spe: 118 },
    abilities: { 0: "Mold Breaker", 1: "Unburden", H: "Limber" }
  },
  chandelure: {
    inherit: true,
    num: 22,
    name: "Chandelure",
    types: ["Ghost", "Steel"],
    baseStats: { hp: 100, atk: 55, def: 100, spa: 105, spd: 75, spe: 105 },
    abilities: { 0: "Wandering Spirit", 1: "Storm Drain", H: "Flame Body" }
  },
  naganadel: {
    inherit: true,
    num: 23,
    name: "Naganadel",
    types: ["Dark", "Dragon"],
    baseStats: { hp: 73, atk: 73, def: 73, spa: 97, spd: 73, spe: 171 },
    abilities: { 0: "Beast Boost", H: "Neuroforce" }
  },
  dodrio: {
    inherit: true,
    num: 24,
    name: "Dodrio",
    types: ["Normal", "Flying"],
    baseStats: { hp: 85, atk: 120, def: 75, spa: 90, spd: 75, spe: 132 },
    abilities: { 0: "Reckless", 1: "Tangled Feet", H: "Scrappy" }
  },
  starmie: {
    inherit: true,
    num: 25,
    name: "Starmie",
    types: ["Water", "Fairy"],
    baseStats: { hp: 90, atk: 75, def: 90, spa: 100, spd: 90, spe: 115 },
    abilities: { 0: "Illuminate", 1: "Natural Cure", H: "Analytic" }
  },
  regice: {
    inherit: true,
    num: 26,
    name: "Regice",
    types: ["Ice"],
    baseStats: { hp: 120, atk: 50, def: 100, spa: 100, spd: 200, spe: 50 },
    abilities: { 0: "Ice Body", H: "Clear Body" }
  },
  lokix: {
    inherit: true,
    num: 27,
    name: "Lokix",
    types: ["Bug", "Fighting"],
    baseStats: { hp: 81, atk: 112, def: 98, spa: 52, spd: 75, spe: 112 },
    abilities: { 0: "Swarm", H: "Protean" }
  },
  miraidon: {
    inherit: true,
    num: 28,
    name: "Miraidon",
    types: ["Electric", "Dragon"],
    baseStats: { hp: 70, atk: 68, def: 122, spa: 112, spd: 104, spe: 94 },
    abilities: { 0: "Surge Surfer", 1: "Sticky Hold", H: "Quark Drive" }
  },
  spheal: {
    inherit: true,
    num: 29,
    name: "Spheal",
    types: ["Ice", "Water"],
    baseStats: { hp: 20, atk: 60, def: 250, spa: 70, spd: 250, spe: 120 },
    abilities: { 0: "Supreme Overlord", 1: "Magic Bounce", H: "Snow Warning" },
    evos: null
  },
  drapion: {
    inherit: true,
    num: 30,
    name: "Drapion",
    types: ["Poison", "Dark"],
    baseStats: { hp: 75, atk: 105, def: 115, spa: 45, spd: 100, spe: 125 },
    abilities: { 0: "Super Luck", 1: "Poison Touch", H: "Moxie" }
  },
  duraludon: {
    inherit: true,
    num: 31,
    name: "Duraludon",
    types: ["Steel", "Dragon"],
    baseStats: { hp: 70, atk: 95, def: 120, spa: 120, spd: 45, spe: 230 },
    abilities: { 0: "Stall", 1: "Stalwart", H: "Static" }
  },
  sandaconda: {
    inherit: true,
    num: 32,
    name: "Sandaconda",
    types: ["Ground", "Ghost"],
    baseStats: { hp: 72, atk: 142, def: 115, spa: 55, spd: 90, spe: 76 },
    abilities: { 0: "Sand Stream", 1: "Shed Skin", H: "Mold Breaker" }
  }
};
//# sourceMappingURL=pokedex.js.map
