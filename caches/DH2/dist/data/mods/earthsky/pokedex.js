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
  // New Pokemon
  caeleaf: {
    num: -501,
    name: "Caeleaf",
    types: ["Grass"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 30, atk: 60, def: 45, spa: 60, spd: 40, spe: 70 },
    abilities: { 0: "Overgrow", H: "Swarm" },
    heightm: 0.2,
    weightkg: 0.4,
    color: "Green",
    evos: ["Sprop"],
    eggGroups: ["Bug", "Grass"]
  },
  sprop: {
    num: -502,
    name: "Sprop",
    types: ["Grass", "Bug"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 40, atk: 80, def: 65, spa: 75, spd: 60, spe: 90 },
    abilities: { 0: "Overgrow", H: "Swarm" },
    heightm: 0.7,
    weightkg: 5.1,
    color: "Green",
    prevo: "Caeleaf",
    evoLevel: 16,
    evos: ["Graecust"],
    eggGroups: ["Bug", "Grass"]
  },
  graecust: {
    num: -503,
    name: "Graecust",
    types: ["Grass", "Bug"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 50, atk: 100, def: 100, spa: 90, spd: 90, spe: 105 },
    abilities: { 0: "Overgrow", H: "Swarm" },
    heightm: 1.2,
    weightkg: 31.8,
    color: "Brown",
    prevo: "Sprop",
    evoLevel: 34,
    eggGroups: ["Bug", "Grass"]
  },
  iguava: {
    num: -504,
    name: "Iguava",
    types: ["Fire"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 60, atk: 50, def: 40, spa: 60, spd: 35, spe: 60 },
    abilities: { 0: "Blaze", H: "Magma Armor" },
    heightm: 0.7,
    weightkg: 4.9,
    color: "Orange",
    evos: ["Chucklava"],
    eggGroups: ["Monster", "Dragon"]
  },
  chucklava: {
    num: -505,
    name: "Chucklava",
    types: ["Fire", "Rock"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 70, atk: 65, def: 90, spa: 80, spd: 45, spe: 60 },
    abilities: { 0: "Blaze", H: "Magma Armor" },
    heightm: 0.9,
    weightkg: 42.7,
    color: "Orange",
    prevo: "Iguava",
    evoLevel: 16,
    evos: ["Helmuana"],
    eggGroups: ["Monster", "Dragon"]
  },
  helmuana: {
    num: -506,
    name: "Helmuana",
    types: ["Fire", "Rock"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 90, atk: 90, def: 110, spa: 100, spd: 65, spe: 75 },
    abilities: { 0: "Blaze", H: "Magma Armor" },
    heightm: 1.4,
    weightkg: 95.5,
    color: "Orange",
    prevo: "Chucklava",
    evoLevel: 34,
    eggGroups: ["Monster", "Dragon"]
  },
  newtiny: {
    num: -507,
    name: "Newtiny",
    types: ["Water"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 90, atk: 30, def: 50, spa: 35, spd: 70, spe: 30 },
    abilities: { 0: "Torrent", H: "Filter" },
    heightm: 0.4,
    weightkg: 3.7,
    color: "Blue",
    evos: ["Ruggeft"],
    eggGroups: ["Water 1", "Amorphous"]
  },
  ruggeft: {
    num: -508,
    name: "Ruggeft",
    types: ["Water", "Ground"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 110, atk: 50, def: 70, spa: 55, spd: 80, spe: 45 },
    abilities: { 0: "Torrent", H: "Filter" },
    heightm: 0.6,
    weightkg: 10.4,
    color: "Brown",
    prevo: "Newtiny",
    evoLevel: 16,
    evos: ["Claymander"],
    eggGroups: ["Water 1", "Amorphous"]
  },
  claymander: {
    num: -509,
    name: "Claymander",
    types: ["Water", "Ground"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 125, atk: 65, def: 95, spa: 70, spd: 110, spe: 60 },
    abilities: { 0: "Torrent", H: "Filter" },
    heightm: 1.3,
    weightkg: 148,
    color: "Gray",
    prevo: "Ruggeft",
    evoLevel: 34,
    eggGroups: ["Water 1", "Amorphous"]
  },
  palrat: {
    num: -510,
    name: "Palrat",
    types: ["Normal"],
    baseStats: { hp: 15, atk: 70, def: 20, spa: 50, spd: 20, spe: 80 },
    abilities: { 0: "Run Away", 1: "Rattled", H: "Natural Cure" },
    heightm: 0.4,
    weightkg: 1.1,
    color: "Pink",
    evos: ["Spectrat"],
    eggGroups: ["Field"]
  },
  spectrat: {
    num: -511,
    name: "Spectrat",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 31, atk: 91, def: 41, spa: 91, spd: 41, spe: 121 },
    abilities: { 0: "Clear Body", 1: "Rattled", H: "Natural Cure" },
    heightm: 0.8,
    weightkg: 4.1,
    color: "White",
    prevo: "Palrat",
    evoLevel: 20,
    eggGroups: ["Field"]
  },
  fanfowl: {
    num: -512,
    name: "Fanfowl",
    types: ["Normal", "Flying"],
    baseStats: { hp: 50, atk: 35, def: 40, spa: 50, spd: 50, spe: 35 },
    abilities: { 0: "Big Pecks", 1: "Tangled Feet", H: "Own Tempo" },
    heightm: 0.7,
    weightkg: 17,
    color: "Gray",
    evos: ["Plumifowl"],
    eggGroups: ["Flying"]
  },
  plumifowl: {
    num: -513,
    name: "Plumifowl",
    types: ["Normal", "Flying"],
    baseStats: { hp: 70, atk: 40, def: 45, spa: 65, spd: 65, spe: 50 },
    abilities: { 0: "Big Pecks", 1: "Tangled Feet", H: "Clean House" },
    heightm: 1.4,
    weightkg: 27.5,
    color: "White",
    prevo: "Fanfowl",
    evoLevel: 18,
    evos: ["Pealated"],
    eggGroups: ["Flying"]
  },
  pealated: {
    num: -514,
    name: "Pealated",
    types: ["Normal", "Flying"],
    baseStats: { hp: 110, atk: 50, def: 55, spa: 95, spd: 95, spe: 80 },
    abilities: { 0: "Big Pecks", 1: "Tangled Feet", H: "Dazzling" },
    heightm: 1.7,
    weightkg: 46.7,
    color: "Blue",
    prevo: "Plumifowl",
    evoLevel: 32,
    eggGroups: ["Flying"]
  },
  toybot: {
    num: -515,
    name: "Toybot",
    types: ["Steel", "Electric"],
    gender: "N",
    baseStats: { hp: 30, atk: 20, def: 80, spa: 20, spd: 40, spe: 40 },
    abilities: { 0: "Motor Drive", H: "Download" },
    heightm: 0.6,
    weightkg: 2.4,
    color: "Gray",
    evos: ["Aibot"],
    eggGroups: ["Mineral"]
  },
  aibot: {
    num: -516,
    name: "Aibot",
    types: ["Steel", "Electric"],
    gender: "N",
    baseStats: { hp: 40, atk: 50, def: 100, spa: 30, spd: 60, spe: 40 },
    abilities: { 0: "Motor Drive", H: "Download" },
    heightm: 1.2,
    weightkg: 24,
    color: "Gray",
    prevo: "Toybot",
    evoLevel: 13,
    evos: ["Utilitron"],
    eggGroups: ["Mineral"]
  },
  utilitron: {
    num: -517,
    name: "Utilitron",
    types: ["Steel", "Electric"],
    baseForme: "Default",
    gender: "N",
    baseStats: { hp: 60, atk: 100, def: 120, spa: 60, spd: 80, spe: 40 },
    abilities: { 0: "Motor Drive", H: "Download" },
    heightm: 2.4,
    weightkg: 240,
    color: "Gray",
    prevo: "Aibot",
    evoLevel: 21,
    eggGroups: ["Mineral"],
    otherFormes: ["Utilitron-Boat", "Utilitron-Copter"],
    formeOrder: ["Utilitron", "Utilitron-Boat", "Utilitron-Copter"],
    exclusiveMoves: ["Bulldoze", "Drill Run", "Earth Power", "Earthquake", "Rock Slide", "Steamroller", "Stone Edge", "Trailhead"]
  },
  utilitronboat: {
    num: -517,
    name: "Utilitron-Boat",
    baseSpecies: "Utilitron",
    forme: "Boat",
    types: ["Steel", "Water"],
    baseStats: { hp: 60, atk: 80, def: 100, spa: 80, spd: 80, spe: 60 },
    abilities: { 0: "Motor Drive", H: "Download" },
    heightm: 2.4,
    weightkg: 240,
    color: "Gray",
    changesFrom: "Utilitron",
    eggGroups: ["Mineral"]
  },
  utilitroncopter: {
    num: -517,
    name: "Utilitron-Copter",
    baseSpecies: "Utilitron",
    forme: "Copter",
    types: ["Steel", "Flying"],
    baseStats: { hp: 60, atk: 100, def: 100, spa: 60, spd: 60, spe: 80 },
    abilities: { 0: "Motor Drive", H: "Download" },
    heightm: 2.4,
    weightkg: 240,
    color: "Gray",
    changesFrom: "Utilitron",
    eggGroups: ["Mineral"]
  },
  faerunee: {
    num: -518,
    name: "Faerunee",
    types: ["Fairy", "Ghost"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 40, atk: 70, def: 50, spa: 100, spd: 120, spe: 90 },
    abilities: { 0: "Rattled", 1: "Shield Dust", H: "Moody" },
    heightm: 0.6,
    weightkg: 1.2,
    color: "Purple",
    eggGroups: ["Fairy", "Amorphous"]
  },
  sothodil: {
    num: -519,
    name: "Sothodil",
    types: ["Grass"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 60, atk: 40, def: 40, spa: 59, spd: 70, spe: 50 },
    abilities: { 0: "Slumber Veil", H: "Flower Veil" },
    heightm: 0.7,
    weightkg: 2.4,
    color: "White",
    evos: ["Sosphodel"],
    eggGroups: ["Grass"]
  },
  sosphodel: {
    num: -520,
    name: "Sosphodel",
    types: ["Grass"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 90, atk: 50, def: 50, spa: 99, spd: 110, spe: 80 },
    abilities: { 0: "Slumber Veil", H: "Flower Veil" },
    heightm: 1.3,
    weightkg: 7.7,
    color: "Gray",
    prevo: "Sothodil",
    evoLevel: 30,
    eggGroups: ["Grass"]
  },
  montura: {
    num: -521,
    name: "Montura",
    types: ["Bug", "Poison"],
    baseStats: { hp: 28, atk: 55, def: 26, spa: 21, spd: 24, spe: 36 },
    abilities: { 0: "Poison Touch", H: "Infiltrator" },
    heightm: 0.1,
    weightkg: 0.7,
    color: "Green",
    evos: ["Twintura"],
    eggGroups: ["Bug"]
  },
  twintura: {
    num: -522,
    name: "Twintura",
    types: ["Bug", "Poison"],
    baseStats: { hp: 48, atk: 110, def: 61, spa: 41, spd: 59, spe: 95 },
    abilities: { 0: "Poison Touch", H: "Infiltrator" },
    heightm: 0.5,
    weightkg: 8.8,
    color: "Green",
    prevo: "Montura",
    evoType: "levelHold",
    evoItem: "Poison Barb",
    evos: ["Silvurah"],
    eggGroups: ["Bug"]
  },
  silvurah: {
    num: -523,
    name: "Silvurah",
    types: ["Bug", "Steel"],
    baseStats: { hp: 68, atk: 110, def: 72, spa: 83, spd: 68, spe: 116 },
    abilities: { 0: "Shield Dust", H: "Infiltrator" },
    heightm: 0.5,
    weightkg: 9.6,
    color: "Gray",
    prevo: "Twintura",
    evoType: "trade",
    evoItem: "Silver Powder",
    eggGroups: ["Bug"]
  },
  burrorm: {
    num: -524,
    name: "Burrorm",
    types: ["Bug", "Ground"],
    baseStats: { hp: 45, atk: 64, def: 22, spa: 36, spd: 28, spe: 55 },
    abilities: { 0: "Shed Skin", 1: "Limber", H: "Hydration" },
    heightm: 1.6,
    weightkg: 12.3,
    color: "Pink",
    evos: ["Burryrm"],
    eggGroups: ["Amorphous", "Dragon"]
  },
  burryrm: {
    num: -525,
    name: "Burryrm",
    types: ["Bug", "Dragon"],
    baseStats: { hp: 60, atk: 116, def: 88, spa: 84, spd: 62, spe: 90 },
    abilities: { 0: "Shed Skin", 1: "Limber", H: "Multiscale" },
    heightm: 3.1,
    weightkg: 64,
    color: "Blue",
    prevo: "Burrorm",
    evoType: "trade",
    evoItem: "Dragon Scale",
    eggGroups: ["Amorphous", "Dragon"]
  },
  scarabouch: {
    num: -526,
    name: "Scarabouch",
    types: ["Bug", "Ground"],
    baseStats: { hp: 72, atk: 84, def: 60, spa: 80, spd: 48, spe: 96 },
    abilities: { 0: "Technician", 1: "Skill Link", H: "Stench" },
    heightm: 1.2,
    weightkg: 31.5,
    color: "Purple",
    eggGroups: ["Bug", "Human-Like"]
  },
  ballooffalo: {
    num: -527,
    name: "Ballooffalo",
    types: ["Water", "Normal"],
    baseStats: { hp: 181, atk: 81, def: 38, spa: 101, spd: 69, spe: 61 },
    abilities: { 0: "Storm Drain", H: "Sap Sipper" },
    heightm: 1.6,
    weightkg: 380,
    color: "Blue",
    eggGroups: ["Field"]
  },
  tigrissle: {
    num: -528,
    name: "Tigrissle",
    types: ["Bug", "Water"],
    baseStats: { hp: 34, atk: 55, def: 45, spa: 45, spd: 30, spe: 60 },
    abilities: { 0: "Battle Armor", 1: "Compound Eyes", H: "Swift Swim" },
    heightm: 0.6,
    weightkg: 4.4,
    color: "Gray",
    evos: ["Beedive"],
    eggGroups: ["Bug", "Water 3"]
  },
  beedive: {
    num: -529,
    name: "Beedive",
    types: ["Bug", "Water"],
    baseStats: { hp: 54, atk: 85, def: 90, spa: 75, spd: 70, spe: 80 },
    abilities: { 0: "Battle Armor", 1: "Compound Eyes", H: "Swift Swim" },
    heightm: 1,
    weightkg: 20,
    color: "Green",
    prevo: "Tigrissle",
    evoLevel: 22,
    eggGroups: ["Bug", "Water 3"]
  },
  lithoshroom: {
    num: -530,
    name: "Lithoshroom",
    types: ["Rock"],
    baseStats: { hp: 71, atk: 22, def: 33, spa: 54, spd: 45, spe: 26 },
    abilities: { 0: "Effect Spore", 1: "Simple", H: "Dry Skin" },
    heightm: 0.2,
    weightkg: 1.6,
    color: "Brown",
    evos: ["Litholich"],
    eggGroups: ["Mineral", "Grass"]
  },
  litholich: {
    num: -531,
    name: "Litholich",
    types: ["Rock", "Grass"],
    baseStats: { hp: 124, atk: 45, def: 76, spa: 87, spd: 88, spe: 49 },
    abilities: { 0: "Effect Spore", 1: "Symbiosis", H: "Dry Skin" },
    heightm: 0.4,
    weightkg: 8.4,
    color: "Brown",
    prevo: "Lithoshroom",
    evoType: "levelExtra",
    evoCondition: "near a Moss Rock",
    eggGroups: ["Mineral", "Grass"]
  },
  rugblin: {
    num: -532,
    name: "Rugblin",
    types: ["Fighting", "Ground"],
    genderRatio: { M: 0.75, F: 0.25 },
    baseStats: { hp: 80, atk: 80, def: 80, spa: 20, spd: 40, spe: 60 },
    abilities: { 0: "Reckless", 1: "Bulletproof", H: "Receiver" },
    heightm: 1.1,
    weightkg: 31.7,
    color: "Yellow",
    evos: ["Runoger"],
    eggGroups: ["Field", "Human-Like"]
  },
  runogre: {
    num: -533,
    name: "Runogre",
    types: ["Fighting", "Ground"],
    genderRatio: { M: 0.75, F: 0.25 },
    baseStats: { hp: 110, atk: 110, def: 110, spa: 30, spd: 50, spe: 70 },
    abilities: { 0: "Reckless", 1: "Bulletproof", H: "Receiver" },
    heightm: 2,
    weightkg: 102.1,
    color: "Yellow",
    prevo: "Rugblin",
    evoLevel: 34,
    eggGroups: ["Field", "Human-Like"]
  },
  joroo: {
    num: -534,
    name: "Joroo",
    types: ["Ground"],
    baseStats: { hp: 15, atk: 60, def: 30, spa: 45, spd: 30, spe: 81 },
    abilities: { 0: "Quick Feet", 1: "Sand Rush", H: "Night Walker" },
    heightm: 0.5,
    weightkg: 5.9,
    color: "Brown",
    evos: ["Jaquol"],
    eggGroups: ["Undiscovered"],
    canHatch: true
  },
  jaquol: {
    num: -535,
    name: "Jaquol",
    types: ["Ground"],
    baseStats: { hp: 35, atk: 70, def: 55, spa: 55, spd: 55, spe: 101 },
    abilities: { 0: "Quick Feet", 1: "Sand Rush", H: "Night Walker" },
    heightm: 1,
    weightkg: 17.3,
    color: "Brown",
    prevo: "Joroo",
    evoType: "levelFriendship",
    evos: ["Thylone"],
    eggGroups: ["Field"]
  },
  thylone: {
    num: -536,
    name: "Thylone",
    types: ["Ground"],
    baseStats: { hp: 55, atk: 100, def: 75, spa: 65, spd: 75, spe: 131 },
    abilities: { 0: "Quick Feet", 1: "Sand Rush", H: "Night Walker" },
    heightm: 1.3,
    weightkg: 24.8,
    color: "Brown",
    prevo: "Jaquol",
    evoLevel: 37,
    eggGroups: ["Field"]
  },
  trigenee: {
    num: -537,
    name: "Trigenee",
    types: ["Fighting"],
    baseStats: { hp: 53, atk: 73, def: 23, spa: 43, spd: 43, spe: 33 },
    abilities: { 0: "Skill Link", H: "Long Reach" },
    heightm: 1.3,
    weightkg: 33.3,
    evos: ["Hexyon"],
    eggGroups: ["Human-Like"]
  },
  hexyon: {
    num: -538,
    name: "Hexyon",
    types: ["Fighting"],
    baseStats: { hp: 66, atk: 106, def: 46, spa: 76, spd: 66, spe: 46 },
    abilities: { 0: "Skill Link", H: "Long Reach" },
    heightm: 1.9,
    weightkg: 66.6,
    prevo: "Trigenee",
    evoLevel: 27,
    evos: ["Hektillion"],
    eggGroups: ["Human-Like"]
  },
  hektillion: {
    num: -539,
    name: "Hektillion",
    types: ["Fighting"],
    baseStats: { hp: 79, atk: 149, def: 69, spa: 99, spd: 79, spe: 69 },
    abilities: { 0: "Skill Link", H: "Long Reach" },
    heightm: 2.9,
    weightkg: 133.9,
    prevo: "Hexyon",
    evoLevel: 54,
    eggGroups: ["Human-Like"]
  },
  termill: {
    num: -540,
    name: "Termill",
    types: ["Bug"],
    baseStats: { hp: 45, atk: 75, def: 55, spa: 15, spd: 30, spe: 42 },
    abilities: { 0: "Hyper Cutter", 1: "Strong Jaw", H: "Sap Sipper" },
    heightm: 0.5,
    weightkg: 14.1,
    evos: ["Terrazor"],
    eggGroups: ["Bug"]
  },
  terrazor: {
    num: -541,
    name: "Terrazor",
    types: ["Bug"],
    baseStats: { hp: 85, atk: 130, def: 95, spa: 40, spd: 70, spe: 64 },
    abilities: { 0: "Hyper Cutter", 1: "Strong Jaw", H: "Sap Sipper" },
    heightm: 1.4,
    weightkg: 28.2,
    prevo: "Termill",
    evoLevel: 30,
    eggGroups: ["Bug"]
  },
  elpine: {
    num: -542,
    name: "Elpine",
    types: ["Normal", "Ice"],
    baseStats: { hp: 60, atk: 60, def: 50, spa: 60, spd: 50, spe: 50 },
    abilities: { 0: "Snow Plow", 1: "Ice Body", H: "Sap Sipper" },
    heightm: 0.7,
    weightkg: 16.2,
    color: "Brown",
    evos: ["Freezelk", "Moorfrost"],
    eggGroups: ["Field"]
  },
  freezelk: {
    num: -543,
    name: "Freezelk",
    types: ["Normal", "Ice"],
    baseStats: { hp: 90, atk: 80, def: 60, spa: 120, spd: 60, spe: 110 },
    abilities: { 0: "Snow Plow", 1: "Ice Body", H: "Sap Sipper" },
    heightm: 1.8,
    weightkg: 40.4,
    color: "White",
    prevo: "Elpine",
    evoLevel: 44,
    eggGroups: ["Field"]
  },
  moorfrost: {
    num: -544,
    name: "Moorfrost",
    types: ["Normal", "Ice"],
    baseStats: { hp: 120, atk: 110, def: 90, spa: 60, spd: 80, spe: 60 },
    abilities: { 0: "Ice Breaker", 1: "Ice Body", H: "Stamina" },
    heightm: 1.8,
    weightkg: 162,
    color: "White",
    prevo: "Elpine",
    evoType: "useItem",
    evoItem: "Ice Stone",
    eggGroups: ["Field"]
  },
  lemurod: {
    num: -545,
    name: "Lemurod",
    types: ["Electric", "Grass"],
    baseStats: { hp: 50, atk: 70, def: 40, spa: 90, spd: 60, spe: 100 },
    abilities: { 0: "Lightning Rod", 1: "Illuminate", H: "Harvest" },
    heightm: 0.5,
    weightkg: 10.6,
    color: "Yellow",
    eggGroups: ["Field", "Grass"]
  },
  gobellos: {
    num: -546,
    name: "Gobellos",
    types: ["Water"],
    baseStats: { hp: 45, atk: 80, def: 45, spa: 70, spd: 40, spe: 65 },
    abilities: { 0: "Rivalry", H: "Berserk" },
    heightm: 0.7,
    weightkg: 10.1,
    color: "Brown",
    evos: ["Dragobellos"],
    eggGroups: ["Water 2", "Dragon"]
  },
  dragobellos: {
    num: -547,
    name: "Dragobellos",
    types: ["Water", "Dragon"],
    baseStats: { hp: 70, atk: 125, def: 70, spa: 110, spd: 55, spe: 95 },
    abilities: { 0: "Rivalry", H: "Berserk" },
    heightm: 1.2,
    weightkg: 33.1,
    color: "Black",
    prevo: "Gobellos",
    evoType: "trade",
    evoItem: "Dragon Fang",
    eggGroups: ["Water 2", "Dragon"]
  },
  plecuum: {
    num: -548,
    name: "Plecuum",
    types: ["Water"],
    baseStats: { hp: 45, atk: 65, def: 40, spa: 70, spd: 80, spe: 45 },
    abilities: { 0: "Suction Cups", H: "Storm Drain" },
    heightm: 0.3,
    weightkg: 1.9,
    color: "Brown",
    evos: ["Vorplec"],
    eggGroups: ["Water 2"]
  },
  vorplec: {
    num: -549,
    name: "Vorplec",
    types: ["Water", "Steel"],
    baseStats: { hp: 70, atk: 70, def: 125, spa: 95, spd: 110, spe: 55 },
    abilities: { 0: "Suction Cups", H: "Storm Drain" },
    heightm: 1.3,
    weightkg: 67,
    color: "Gray",
    prevo: "Plecuum",
    evoType: "trade",
    evoItem: "Metal Coat",
    eggGroups: ["Water 2"]
  },
  lioxin: {
    num: -550,
    name: "Lioxin",
    types: ["Poison", "Water"],
    baseStats: { hp: 87, atk: 87, def: 77, spa: 87, spd: 77, spe: 77 },
    abilities: { 0: "Poison Point", 1: "Rough Skin", H: "Potency" },
    heightm: 1.7,
    weightkg: 24.7,
    color: "Purple",
    eggGroups: ["Water 2"]
  },
  scrunge: {
    num: -551,
    name: "Scrunge",
    types: ["Poison"],
    gender: "N",
    baseStats: { hp: 100, atk: 25, def: 50, spa: 75, spd: 175, spe: 25 },
    abilities: { 0: "Liquid Ooze", H: "Water Absorb" },
    heightm: 0.8,
    weightkg: 5.4,
    color: "Purple",
    eggGroups: ["Amorphous"]
  },
  cuttlelass: {
    num: -552,
    name: "Cuttlelass",
    types: ["Dark"],
    baseStats: { hp: 40, atk: 65, def: 60, spa: 50, spd: 40, spe: 45 },
    abilities: { 0: "Deep Terror", H: "Pressure" },
    heightm: 1,
    weightkg: 32.8,
    color: "Red",
    evos: ["Dreadnautilus"],
    eggGroups: ["Water 2", "Water 3"]
  },
  dreadnautilus: {
    num: -553,
    name: "Dreadnautilus",
    types: ["Dark", "Steel"],
    baseStats: { hp: 55, atk: 75, def: 105, spa: 60, spd: 80, spe: 45 },
    abilities: { 0: "Deep Terror", H: "Pressure" },
    heightm: 2,
    weightkg: 164,
    color: "Gray",
    prevo: "Cuttlelass",
    evoLevel: 35,
    evos: ["Kravokalypse"],
    eggGroups: ["Water 2", "Water 3"]
  },
  kravokalypse: {
    num: -554,
    name: "Kravokalypse",
    types: ["Dark", "Steel"],
    baseStats: { hp: 90, atk: 110, def: 130, spa: 90, spd: 120, spe: 60 },
    abilities: { 0: "Deep Terror", H: "Pressure" },
    heightm: 6,
    weightkg: 492,
    color: "White",
    prevo: "Dreadnautilus",
    evoLevel: 60,
    eggGroups: ["Water 2", "Water 3"]
  },
  stegrowth: {
    num: -555,
    name: "Stegrowth",
    types: ["Rock", "Grass"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 65, atk: 50, def: 60, spa: 60, spd: 75, spe: 40 },
    abilities: { 0: "Chlorophyll", H: "Leaf Guard" },
    heightm: 1,
    weightkg: 27.1,
    color: "Brown",
    evos: ["Stegrove"],
    eggGroups: ["Monster", "Grass"]
  },
  stegrove: {
    num: -556,
    name: "Stegrove",
    types: ["Rock", "Grass"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 100, atk: 70, def: 90, spa: 80, spd: 100, spe: 55 },
    abilities: { 0: "Chlorophyll", H: "Leaf Guard" },
    heightm: 1.7,
    weightkg: 72.5,
    color: "Brown",
    prevo: "Stegrowth",
    evoLevel: 35,
    eggGroups: ["Monster", "Grass"]
  },
  angkol: {
    num: -557,
    name: "Angkol",
    types: ["Rock", "Steel"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 50, atk: 100, def: 90, spa: 30, spd: 50, spe: 30 },
    abilities: { 0: "Bludgeon", H: "Heavy Metal" },
    heightm: 0.7,
    weightkg: 78,
    color: "Brown",
    evos: ["Macedon"],
    eggGroups: ["Monster"]
  },
  macedon: {
    num: -558,
    name: "Macedon",
    types: ["Rock", "Steel"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 80, atk: 135, def: 120, spa: 50, spd: 80, spe: 30 },
    abilities: { 0: "Bludgeon", H: "Heavy Metal" },
    heightm: 1.1,
    weightkg: 315,
    color: "Gray",
    prevo: "Angkol",
    evoLevel: 35,
    eggGroups: ["Monster"]
  },
  ascelyte: {
    num: -559,
    name: "Ascelyte",
    types: ["Dragon"],
    baseStats: { hp: 58, atk: 18, def: 38, spa: 98, spd: 58, spe: 68 },
    abilities: { 0: "Inner Focus", 1: "Serene Grace", H: "Pure Power" },
    heightm: 1.1,
    weightkg: 21.8,
    color: "Purple",
    evos: ["Paraiagon"],
    eggGroups: ["Human-Like"]
  },
  paraiagon: {
    num: -560,
    name: "Paraiagon",
    types: ["Dragon"],
    baseStats: { hp: 72, atk: 40, def: 48, spa: 128, spd: 88, spe: 96 },
    abilities: { 0: "Inner Focus", 1: "Serene Grace", H: "Pure Power" },
    heightm: 1.8,
    weightkg: 6.8,
    color: "Purple",
    prevo: "Ascelyte",
    evoType: "levelExtra",
    evoCondition: "with high Cleverness",
    eggGroups: ["Human-Like"]
  },
  obelith: {
    num: -561,
    name: "Obelith",
    types: ["Rock", "Psychic"],
    gender: "N",
    baseStats: { hp: 30, atk: 30, def: 100, spa: 70, spd: 100, spe: 5 },
    abilities: { 0: "Sand Veil", 1: "Telepathy", H: "Magic Guard" },
    heightm: 2.1,
    weightkg: 101.1,
    color: "Black",
    evos: ["Pyramyth"],
    eggGroups: ["Mineral"]
  },
  pyramyth: {
    num: -562,
    name: "Pyramyth",
    types: ["Rock", "Psychic"],
    gender: "N",
    baseStats: { hp: 55, atk: 30, def: 150, spa: 90, spd: 150, spe: 10 },
    abilities: { 0: "Sand Veil", 1: "Telepathy", H: "Magic Guard" },
    heightm: 3.4,
    weightkg: 458.6,
    color: "Black",
    prevo: "Obelith",
    evoLevel: 38,
    eggGroups: ["Mineral"]
  },
  moroth: {
    num: -563,
    name: "Moroth",
    types: ["Fairy", "Dark"],
    genderRatio: { M: 0.125, F: 0.875 },
    baseStats: { hp: 64, atk: 44, def: 44, spa: 84, spd: 44, spe: 74 },
    abilities: { 0: "Insomnia", H: "Disturbance" },
    heightm: 0.4,
    weightkg: 1.4,
    color: "White",
    evos: ["Keelmora"],
    eggGroups: ["Fairy"]
  },
  keelmora: {
    num: -564,
    name: "Keelmora",
    types: ["Fairy", "Dark"],
    genderRatio: { M: 0.125, F: 0.875 },
    baseStats: { hp: 96, atk: 66, def: 66, spa: 116, spd: 76, spe: 106 },
    abilities: { 0: "Insomnia", H: "Disturbance" },
    heightm: 1.6,
    weightkg: 36.6,
    color: "White",
    prevo: "Moroth",
    evoLevel: 40,
    eggGroups: ["Fairy"]
  },
  kendono: {
    num: -565,
    name: "Kendo\u2019no",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 72, atk: 120, def: 95, spa: 58, spd: 62, spe: 100 },
    abilities: { 0: "Keen Eye", 1: "Inner Focus", H: "Defiant" },
    heightm: 1.6,
    weightkg: 58.5,
    color: "Brown",
    prevo: "Farfetch\u2019d",
    evoType: "levelMove",
    evoMove: "Sacred Sword",
    eggGroups: ["Flying"]
  },
  antarctross: {
    num: -566,
    name: "Antarctross",
    types: ["Ice", "Flying"],
    baseStats: { hp: 100, atk: 50, def: 60, spa: 75, spd: 60, spe: 95 },
    abilities: { 0: "Keen Eye", H: "Snow Warning" },
    heightm: 1.2,
    weightkg: 19,
    color: "White",
    prevo: "Wingull",
    evoType: "levelExtra",
    evoCondition: "on a high mountain",
    eggGroups: ["Water 1", "Flying"]
  },
  pikeral: {
    num: -567,
    name: "Pikeral",
    baseForme: "Red-Striped",
    types: ["Water", "Fighting"],
    baseStats: { hp: 70, atk: 112, def: 75, spa: 100, spd: 65, spe: 108 },
    abilities: { 0: "Reckless", 1: "Adaptability", H: "Mold Breaker" },
    heightm: 1.5,
    weightkg: 38.5,
    color: "Green",
    prevo: "Basculin",
    evoType: "levelMove",
    evoMove: "Submission",
    eggGroups: ["Water 2"],
    otherFormes: ["Pikeral-Blue-Striped"],
    formeOrder: ["Pikeral", "Pikeral-Blue-Striped"]
  },
  pikeralbluestriped: {
    num: -567,
    name: "Pikeral-Blue-Striped",
    baseSpecies: "Pikeral",
    forme: "Blue-Striped",
    types: ["Water", "Steel"],
    baseStats: { hp: 70, atk: 112, def: 75, spa: 100, spd: 65, spe: 108 },
    abilities: { 0: "Rock Head", 1: "Adaptability", H: "Mold Breaker" },
    heightm: 1.5,
    weightkg: 38.5,
    color: "Green",
    prevo: "Basculin-Blue-Striped",
    evoType: "levelMove",
    evoMove: "Metal Edge",
    eggGroups: ["Water 2"]
  },
  prominoid: {
    num: -568,
    name: "Prominoid",
    baseForme: "Red",
    types: ["Rock", "Flying"],
    gender: "N",
    baseStats: { hp: 100, atk: 120, def: 60, spa: 120, spd: 60, spe: 140 },
    abilities: { 0: "Shields Down" },
    heightm: 1.9,
    weightkg: 1.8,
    color: "Red",
    eggGroups: ["Mineral"],
    otherFormes: ["Prominoid-Meteor"],
    cosmeticFormes: ["Prominoid-Orange", "Prominoid-Yellow", "Prominoid-Green", "Prominoid-Blue", "Prominoid-Indigo", "Prominoid-Violet"],
    formeOrder: [
      // All of the colored Prominoid Meteor formes (unsupported by PS) are numbers 0-6
      "Prominoid-Meteor",
      "Prominoid-Meteor",
      "Prominoid-Meteor",
      "Prominoid-Meteor",
      "Prominoid-Meteor",
      "Prominoid-Meteor",
      "Prominoid-Meteor",
      "Prominoid",
      "Prominoid-Orange",
      "Prominoid-Yellow",
      "Prominoid-Green",
      "Prominoid-Blue",
      "Prominoid-Indigo",
      "Prominoid-Violet"
    ]
  },
  prominoidmeteor: {
    num: -568,
    name: "Prominoid-Meteor",
    baseSpecies: "Prominoid",
    forme: "Meteor",
    types: ["Rock", "Flying"],
    baseStats: { hp: 100, atk: 60, def: 120, spa: 60, spd: 120, spe: 80 },
    abilities: { 0: "Shields Down" },
    heightm: 1.9,
    weightkg: 240,
    color: "Brown",
    prevo: "Minior",
    evoType: "useItem",
    evoItem: "Meteorite",
    evoLevel: 50,
    eggGroups: ["Mineral"],
    requiredAbility: "Shields Down",
    battleOnly: "Prominoid"
  },
  charvenant: {
    num: -582,
    name: "Charvenant",
    types: ["Ghost", "Fire"],
    baseStats: { hp: 85, atk: 82, def: 56, spa: 110, spd: 65, spe: 76 },
    abilities: { 0: "Weak Armor", 1: "Flame Body", H: "Thermal Exchange" },
    heightm: 1.5,
    weightkg: 30,
    color: "Orange",
    prevo: "Phantump-Sartori",
    evoType: "trade",
    eggGroups: ["Grass", "Amorphous"]
  },
  slurpin: {
    num: -583,
    name: "Slurpin",
    types: ["Water", "Grass"],
    baseStats: { hp: 70, atk: 43, def: 53, spa: 43, spd: 53, spe: 40 },
    abilities: { 0: "Sap Sipper", 1: "Solar Power", H: "Alchemy" },
    heightm: 0.1,
    weightkg: 3.1,
    color: "Green",
    evos: ["Suctlot"],
    eggGroups: ["Amorphous"]
  },
  suctlot: {
    num: -584,
    name: "Suctlot",
    types: ["Water", "Grass"],
    baseStats: { hp: 100, atk: 73, def: 83, spa: 73, spd: 83, spe: 55 },
    abilities: { 0: "Sap Sipper", 1: "Solar Power", H: "Alchemy" },
    heightm: 0.7,
    weightkg: 15.5,
    color: "Green",
    prevo: "Slurpin",
    evoLevel: 26,
    eggGroups: ["Amorphous"]
  },
  amplitune: {
    num: -585,
    name: "Amplitune",
    types: ["Dark", "Electric"],
    baseStats: { hp: 97, atk: 95, def: 71, spa: 105, spd: 71, spe: 75 },
    abilities: { 0: "Galvanize", H: "Technician" },
    heightm: 1.5,
    weightkg: 29.7,
    color: "Black",
    prevo: "Kricketune-Sartori",
    evoType: "levelExtra",
    evoCondition: "near a special magnetic field",
    eggGroups: ["Amorphous"]
  },
  squawkapo: {
    num: -586,
    name: "Squawkapo",
    baseForme: "Green",
    types: ["Normal", "Flying"],
    baseStats: { hp: 102, atk: 116, def: 91, spa: 45, spd: 81, spe: 92 },
    abilities: { 0: "Cacophony", 1: "Hustle", H: "Intimidate" },
    heightm: 1,
    weightkg: 13.8,
    color: "Green",
    prevo: "Squawkabilly",
    evoType: "levelExtra",
    evoCondition: "with high Coolness",
    otherFormes: ["Squawkapo-Blue", "Squawkapo-Yellow", "Squawkapo-White"],
    formeOrder: ["Squawkapo", "Squawkapo-Blue", "Squawkapo-Yellow", "Squawkapo-White"],
    eggGroups: ["Flying"]
  },
  squawkapoblue: {
    num: -586,
    name: "Squawkapo-Blue",
    baseSpecies: "Squawkapo",
    forme: "Blue",
    types: ["Normal", "Flying"],
    baseStats: { hp: 102, atk: 96, def: 71, spa: 95, spd: 71, spe: 92 },
    abilities: { 0: "Cacophony", 1: "Hustle", H: "Rivalry" },
    heightm: 1,
    weightkg: 13.8,
    color: "Blue",
    prevo: "Squawkabilly-Blue",
    evoType: "levelExtra",
    evoCondition: "with high Coolness",
    eggGroups: ["Flying"]
  },
  squawkapoyellow: {
    num: -586,
    name: "Squawkapo-Yellow",
    baseSpecies: "Squawkapo",
    forme: "Yellow",
    types: ["Normal", "Flying"],
    baseStats: { hp: 102, atk: 106, def: 71, spa: 65, spd: 71, spe: 112 },
    abilities: { 0: "Cacophony", 1: "Hustle", H: "Guts" },
    heightm: 1,
    weightkg: 13.8,
    color: "Yellow",
    prevo: "Squawkabilly-Yellow",
    evoType: "levelExtra",
    evoCondition: "with high Coolness",
    eggGroups: ["Flying"]
  },
  squawkapowhite: {
    num: -586,
    name: "Squawkapo-White",
    baseSpecies: "Squawkapo",
    forme: "White",
    types: ["Normal", "Flying"],
    baseStats: { hp: 102, atk: 96, def: 91, spa: 45, spd: 91, spe: 102 },
    abilities: { 0: "Cacophony", 1: "Hustle", H: "Defiant" },
    heightm: 1,
    weightkg: 13.8,
    color: "White",
    prevo: "Squawkabilly-White",
    evoType: "levelExtra",
    evoCondition: "with high Coolness",
    eggGroups: ["Flying"]
  },
  solrunt: {
    num: -587,
    name: "Solrunt",
    types: ["Fire"],
    baseStats: { hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50 },
    abilities: { 0: "Overcoat", 1: "Flame Body", H: "Heat Sink" },
    heightm: 0.7,
    weightkg: 16.8,
    color: "Red",
    evos: ["Ralie", "Pharoslass"],
    eggGroups: ["Fairy", "Mineral"]
  },
  ralie: {
    num: -588,
    name: "Ralie",
    types: ["Fire"],
    baseStats: { hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
    abilities: { 0: "Relentless", 1: "Flame Body", H: "Anger Point" },
    heightm: 1.3,
    weightkg: 26.6,
    color: "Orange",
    prevo: "Solrunt",
    evoLevel: 42,
    eggGroups: ["Fairy", "Mineral"],
    otherFormes: ["Ralie-Mega"],
    formeOrder: ["Ralie", "Ralie-Mega"]
  },
  raliemega: {
    num: -588,
    name: "Ralie-Mega",
    baseSpecies: "Ralie",
    forme: "Mega",
    types: ["Fire"],
    baseStats: { hp: 80, atk: 120, def: 80, spa: 120, spd: 80, spe: 100 },
    abilities: { 0: "Drought" },
    heightm: 1.4,
    weightkg: 36.8,
    color: "Orange",
    eggGroups: ["Fairy", "Mineral"],
    requiredItem: "Ralitite"
  },
  pharoslass: {
    num: -589,
    name: "Pharoslass",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 70, atk: 80, def: 70, spa: 80, spd: 70, spe: 110 },
    abilities: { 0: "Solar Power", H: "Misty Shroud" },
    heightm: 1.5,
    weightkg: 256.5,
    color: "Yellow",
    prevo: "Solrunt",
    evoType: "useItem",
    evoItem: "Dawn Stone",
    eggGroups: ["Fairy", "Mineral"],
    otherFormes: ["Pharoslass-Mega"],
    formeOrder: ["Pharoslass", "Pharoslass-Mega"]
  },
  pharoslassmega: {
    num: -589,
    name: "Pharoslass-Mega",
    baseSpecies: "Pharoslass",
    forme: "Mega",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 70, atk: 110, def: 90, spa: 110, spd: 90, spe: 110 },
    abilities: { 0: "Majesty" },
    heightm: 2.1,
    weightkg: 350.2,
    color: "Yellow",
    eggGroups: ["Fairy", "Mineral"],
    requiredItem: "Pharoslassite"
  },
  deceuceus: {
    num: -569,
    name: "Deceuceus",
    types: ["Flying"],
    gender: "M",
    baseStats: { hp: 70, atk: 110, def: 70, spa: 100, spd: 70, spe: 150 },
    abilities: { 0: "Tireless", H: "Gale Wings" },
    heightm: 4.4,
    weightkg: 144,
    color: "Green",
    tags: ["Sub-Legendary"],
    eggGroups: ["Undiscovered"]
  },
  fervintill: {
    num: -570,
    name: "Fervintill",
    types: ["Grass"],
    gender: "M",
    baseStats: { hp: 165, atk: 60, def: 70, spa: 95, spd: 110, spe: 70 },
    abilities: { 0: "Harvest", H: "Poison Heal" },
    heightm: 0.9,
    weightkg: 14.3,
    tags: ["Sub-Legendary"],
    color: "Green",
    eggGroups: ["Undiscovered"]
  },
  selervis: {
    num: -571,
    name: "Selervis",
    types: ["Ghost", "Fairy"],
    gender: "F",
    baseStats: { hp: 75, atk: 105, def: 75, spa: 125, spd: 75, spe: 115 },
    abilities: { 0: "Misty Shroud", H: "Night Walker" },
    heightm: 1.8,
    weightkg: 52.6,
    tags: ["Sub-Legendary"],
    color: "Purple",
    eggGroups: ["Undiscovered"]
  },
  helyrion: {
    num: -572,
    name: "Helyrion",
    types: ["Fire", "Flying"],
    gender: "M",
    baseStats: { hp: 115, atk: 75, def: 75, spa: 125, spd: 75, spe: 105 },
    abilities: { 0: "Solar Power", H: "Aerilate" },
    heightm: 1.5,
    weightkg: 52.6,
    tags: ["Sub-Legendary"],
    color: "Red",
    eggGroups: ["Undiscovered"]
  },
  daedestus: {
    num: -573,
    name: "Daedestus",
    types: ["Steel", "Fire"],
    gender: "N",
    baseStats: { hp: 90, atk: 110, def: 130, spa: 110, spd: 90, spe: 70 },
    abilities: { 0: "Steelworker", H: "Steam Engine" },
    heightm: 2.3,
    weightkg: 375,
    tags: ["Sub-Legendary"],
    color: "Orange",
    eggGroups: ["Undiscovered"]
  },
  apherove: {
    num: -574,
    name: "Apherove",
    types: ["Fairy"],
    gender: "F",
    baseStats: { hp: 120, atk: 90, def: 85, spa: 90, spd: 95, spe: 120 },
    abilities: { 0: "Irresistable", H: "Competitive" },
    heightm: 1.7,
    weightkg: 45.4,
    tags: ["Sub-Legendary"],
    color: "Pink",
    eggGroups: ["Undiscovered"]
  },
  poleboar: {
    num: -575,
    name: "Poleboar",
    types: ["Fighting"],
    gender: "M",
    baseStats: { hp: 95, atk: 140, def: 100, spa: 90, spd: 90, spe: 85 },
    abilities: { 0: "Warmonger", H: "Moxie" },
    heightm: 1.8,
    weightkg: 111.1,
    tags: ["Sub-Legendary"],
    color: "Brown",
    eggGroups: ["Undiscovered"]
  },
  pallatinel: {
    num: -576,
    name: "Pallatinel",
    types: ["Psychic"],
    gender: "F",
    baseStats: { hp: 95, atk: 90, def: 90, spa: 140, spd: 100, spe: 85 },
    abilities: { 0: "Tactician", H: "Telepathy" },
    heightm: 1.9,
    weightkg: 275,
    tags: ["Sub-Legendary"],
    color: "Gray",
    eggGroups: ["Undiscovered"]
  },
  jurotera: {
    num: -577,
    name: "Jurotera",
    types: ["Normal"],
    gender: "F",
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Majesty", H: "Serene Grace" },
    heightm: 2.4,
    weightkg: 50,
    tags: ["Sub-Legendary"],
    color: "White",
    eggGroups: ["Undiscovered"]
  },
  hatar: {
    num: -578,
    name: "Hatar",
    types: ["Fire", "Dark"],
    gender: "N",
    baseStats: { hp: 100, atk: 135, def: 115, spa: 125, spd: 100, spe: 105 },
    abilities: { 0: "Pressure", H: "Soul Drain" },
    heightm: 2.6,
    weightkg: 350,
    tags: ["Restricted Legendary"],
    color: "Black",
    eggGroups: ["Undiscovered"]
  },
  zuros: {
    num: -579,
    name: "Zuros",
    types: ["Electric", "Flying"],
    gender: "N",
    baseStats: { hp: 100, atk: 105, def: 100, spa: 135, spd: 125, spe: 115 },
    abilities: { 0: "Pressure", H: "Lightning Rod" },
    heightm: 2.9,
    weightkg: 320,
    tags: ["Restricted Legendary"],
    color: "Yellow",
    eggGroups: ["Undiscovered"]
  },
  oceides: {
    num: -580,
    name: "Oceides",
    types: ["Water", "Ground"],
    gender: "N",
    baseStats: { hp: 135, atk: 120, def: 105, spa: 120, spd: 105, spe: 95 },
    abilities: { 0: "Pressure", H: "Against Current" },
    heightm: 3.2,
    weightkg: 380,
    tags: ["Restricted Legendary"],
    color: "Blue",
    eggGroups: ["Undiscovered"]
  },
  norphaval: {
    num: -581,
    name: "Norphaval",
    types: ["Dragon", "Fairy"],
    gender: "N",
    baseStats: { hp: 100, atk: 40, def: 200, spa: 40, spd: 200, spe: 20 },
    abilities: { 0: "Magic Guard", H: "Shell Armor" },
    heightm: 1,
    weightkg: 500,
    color: "Purple",
    tags: ["Mythical"],
    eggGroups: ["Undiscovered"]
  },
  wandruss: {
    num: -590,
    name: "Wandruss",
    types: ["Poison", "Ice"],
    gender: "N",
    baseStats: { hp: 127, atk: 41, def: 67, spa: 97, spd: 179, spe: 59 },
    abilities: { 0: "Beast Boost", H: "Simple" },
    heightm: 0.3,
    weightkg: 2.2,
    color: "Pink",
    tags: ["Ultra Beast"],
    eggGroups: ["Undiscovered"]
  },
  mistyplumage: {
    num: -591,
    name: "Misty Plumage",
    types: ["Fire", "Ice"],
    gender: "N",
    baseStats: { hp: 81, atk: 83, def: 77, spa: 99, spd: 111, spe: 119 },
    abilities: { 0: "Protosynthesis", H: "Snow Cloak" },
    heightm: 1.7,
    weightkg: 29.9,
    color: "White",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  orbiterunit: {
    num: -592,
    name: "Orbiter Unit",
    types: ["Psychic", "Bug"],
    gender: "N",
    baseStats: { hp: 84, atk: 90, def: 102, spa: 100, spd: 102, spe: 92 },
    abilities: { 0: "Quark Drive", H: "Magic Guard" },
    heightm: 1.4,
    weightkg: 56,
    color: "Green",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  khatrophys: {
    num: -593,
    name: "Khatrophys",
    types: ["Ghost", "Dark"],
    gender: "N",
    baseStats: { hp: 100, atk: 200, def: 40, spa: 200, spd: 40, spe: 20 },
    abilities: { 0: "Soul Drain", H: "Mold Breaker" },
    heightm: 6,
    weightkg: 500,
    color: "Purple",
    tags: ["Mythical"],
    eggGroups: ["Undiscovered"]
  },
  // Regionals
  ponytaegelas: {
    num: 77,
    name: "Ponyta-Egelas",
    baseSpecies: "Ponyta",
    forme: "Egelas",
    types: ["Fairy"],
    baseStats: { hp: 50, atk: 85, def: 45, spa: 75, spd: 65, spe: 90 },
    abilities: { 0: "Serene Grace", 1: "Flash Fire", H: "Wonder Skin" },
    heightm: 1,
    weightkg: 30,
    color: "Gray",
    evos: ["Rapidash-Egelas"],
    eggGroups: ["Field"]
  },
  rapidashegelas: {
    num: 78,
    name: "Rapidash-Egelas",
    baseSpecies: "Rapidash",
    forme: "Egelas",
    types: ["Fairy", "Flying"],
    baseStats: { hp: 65, atk: 100, def: 60, spa: 90, spd: 80, spe: 105 },
    abilities: { 0: "Serene Grace", 1: "Flash Fire", H: "Wonder Skin" },
    heightm: 1.7,
    weightkg: 99,
    color: "Gray",
    prevo: "Ponyta-Egelas",
    evoLevel: 40,
    eggGroups: ["Field"]
  },
  cuboneegelas: {
    num: 104,
    name: "Cubone-Egelas",
    baseSpecies: "Cubone",
    forme: "Egelas",
    types: ["Fire", "Ghost"],
    baseStats: { hp: 50, atk: 50, def: 95, spa: 40, spd: 50, spe: 35 },
    abilities: { 0: "Cursed Body", 1: "Lightning Rod", H: "Rock Head" },
    heightm: 0.4,
    weightkg: 4.9,
    color: "Purple",
    evos: ["Marowak-Alola"],
    eggGroups: ["Monster"]
  },
  taurosegelas: {
    num: 128,
    name: "Tauros-Egelas",
    baseSpecies: "Tauros",
    forme: "Egelas",
    types: ["Normal", "Fire"],
    baseStats: { hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110 },
    abilities: { 0: "Flash Fire", 1: "Anger Point", H: "Sheer Force" },
    heightm: 1.4,
    weightkg: 88.8,
    gender: "M",
    color: "Red",
    eggGroups: ["Field"]
  },
  miltankegelas: {
    num: 241,
    name: "Miltank-Egelas",
    baseSpecies: "Miltank",
    forme: "Egelas",
    types: ["Normal", "Fire"],
    baseStats: { hp: 95, atk: 80, def: 105, spa: 40, spd: 70, spe: 100 },
    abilities: { 0: "Thick Fat", 1: "Flame Body", H: "Scrappy" },
    heightm: 1.2,
    weightkg: 77.7,
    gender: "F",
    color: "Red",
    eggGroups: ["Field"]
  },
  hoothootegelas: {
    num: 163,
    name: "Hoothoot-Egelas",
    baseSpecies: "Hoothoot",
    forme: "Egelas",
    types: ["Dark", "Flying"],
    baseStats: { hp: 60, atk: 30, def: 30, spa: 36, spd: 56, spe: 50 },
    abilities: { 0: "Insomnia", 1: "Forewarn", H: "Tinted Lens" },
    heightm: 0.7,
    weightkg: 21.4,
    color: "Black",
    evos: ["Noctowl-Egelas"],
    eggGroups: ["Flying"]
  },
  noctowlegelas: {
    num: 164,
    name: "Noctowl-Egelas",
    baseSpecies: "Noctowl",
    forme: "Egelas",
    types: ["Dark", "Flying"],
    baseStats: { hp: 100, atk: 50, def: 50, spa: 86, spd: 96, spe: 70 },
    abilities: { 0: "Insomnia", 1: "Forewarn", H: "Tinted Lens" },
    heightm: 1.6,
    weightkg: 41.4,
    color: "Black",
    prevo: "Hoothoot-Egelas",
    evoLevel: 20,
    eggGroups: ["Flying"]
  },
  delibirdegelas: {
    num: 225,
    name: "Delibird-Egelas",
    baseSpecies: "Delibird",
    forme: "Egelas",
    types: ["Flying"],
    baseStats: { hp: 45, atk: 55, def: 45, spa: 65, spd: 45, spe: 75 },
    abilities: { 0: "Vital Spirit", 1: "Hustle", H: "Trade Winds" },
    heightm: 1,
    weightkg: 10,
    color: "Blue",
    eggGroups: ["Water 1", "Field"]
  },
  tynamoschool: {
    num: 602,
    name: "Tynamo-School",
    baseSpecies: "Tynamo",
    forme: "School",
    types: ["Electric"],
    baseStats: { hp: 35, atk: 75, def: 60, spa: 65, spd: 60, spe: 80 },
    abilities: { 0: "Schooling" },
    heightm: 0.6,
    weightkg: 3,
    color: "White",
    evos: ["Eelektrik", "Eelektrik-Egelas"],
    eggGroups: ["Amorphous"],
    requiredAbility: "Schooling",
    battleOnly: "Tynamo"
  },
  eelektrikegelas: {
    num: 603,
    name: "Eelektrik-Egelas",
    baseSpecies: "Eelektrik",
    forme: "Egelas",
    types: ["Electric", "Poison"],
    baseStats: { hp: 65, atk: 85, def: 70, spa: 75, spd: 70, spe: 40 },
    abilities: { 0: "Levitate", H: "Gooey" },
    heightm: 1.2,
    weightkg: 23,
    color: "Pink",
    prevo: "Tynamo",
    evoLevel: 39,
    evoRegion: "Egelas",
    evos: ["Eelektross-Egelas"],
    eggGroups: ["Amorphous"]
  },
  eelektrossegelas: {
    num: 604,
    name: "Eelektross-Egelas",
    baseSpecies: "Eelektross",
    forme: "Egelas",
    types: ["Electric", "Poison"],
    baseStats: { hp: 85, atk: 115, def: 80, spa: 105, spd: 80, spe: 50 },
    abilities: { 0: "Levitate", H: "Gooey" },
    heightm: 2.1,
    weightkg: 82.5,
    color: "Pink",
    prevo: "Eelektrik-Egelas",
    evoType: "useItem",
    evoItem: "Thunder Stone",
    eggGroups: ["Amorphous"]
  },
  heatmoregelas: {
    num: 631,
    name: "Heatmor-Egelas",
    baseSpecies: "Heatmor",
    forme: "Egelas",
    types: ["Fire", "Ground"],
    baseStats: { hp: 95, atk: 77, def: 66, spa: 115, spd: 66, spe: 65 },
    abilities: { 0: "Symbiosis", 1: "Heat Sink", H: "White Smoke" },
    heightm: 1.5,
    weightkg: 49.5,
    color: "Brown",
    eggGroups: ["Field"]
  },
  durantegelas: {
    num: 632,
    name: "Durant-Egelas",
    baseSpecies: "Durant",
    forme: "Egelas",
    types: ["Bug", "Fire"],
    baseStats: { hp: 58, atk: 109, def: 72, spa: 88, spd: 48, spe: 109 },
    abilities: { 0: "Symbiosis", 1: "Hustle", H: "Swarm" },
    heightm: 0.3,
    weightkg: 16.5,
    color: "Black",
    eggGroups: ["Bug"]
  },
  kricketotsartori: {
    num: 401,
    name: "Kricketot-Sartori",
    baseSpecies: "Kricketot",
    forme: "Sartori",
    types: ["Bug", "Electric"],
    baseStats: { hp: 37, atk: 25, def: 41, spa: 25, spd: 41, spe: 25 },
    abilities: { 0: "Soundproof", H: "Run Away" },
    heightm: 0.3,
    weightkg: 2.2,
    color: "Yellow",
    evos: ["Kricketune-Sartori"],
    eggGroups: ["Bug"]
  },
  kricketunesartori: {
    num: 401,
    name: "Kricketune-Sartori",
    baseSpecies: "Kricketune",
    forme: "Sartori",
    types: ["Bug", "Electric"],
    baseStats: { hp: 77, atk: 55, def: 51, spa: 85, spd: 51, spe: 65 },
    abilities: { 0: "Frisk", H: "Technician" },
    heightm: 1,
    weightkg: 22.8,
    color: "Yellow",
    prevo: "Kricketot-Sartori",
    evoLevel: 10,
    evos: ["Amplitune"],
    eggGroups: ["Bug"]
  },
  glameowsartori: {
    num: 431,
    name: "Glameow-Sartori",
    baseSpecies: "Glameow",
    forme: "Sartori",
    genderRatio: { M: 0.25, F: 0.75 },
    types: ["Steel", "Normal"],
    baseStats: { hp: 49, atk: 55, def: 42, spa: 42, spd: 37, spe: 85 },
    abilities: { 0: "Limber", 1: "Long Reach", H: "Keen Eye" },
    heightm: 0.5,
    weightkg: 4.1,
    color: "Gray",
    evos: ["Purugly-Sartori"],
    eggGroups: ["Field"]
  },
  puruglysartori: {
    num: 432,
    name: "Purugly-Sartori",
    baseSpecies: "Purugly",
    forme: "Sartori",
    genderRatio: { M: 0.25, F: 0.75 },
    types: ["Steel", "Normal"],
    baseStats: { hp: 71, atk: 82, def: 64, spa: 64, spd: 59, spe: 112 },
    abilities: { 0: "Thick Fat", 1: "Iron Barbs", H: "Defiant" },
    heightm: 1,
    weightkg: 45.1,
    color: "Gray",
    prevo: "Glameow-Sartori",
    evoLevel: "38",
    eggGroups: ["Field"]
  },
  phantumpsartori: {
    num: 708,
    name: "Phantump-Sartori",
    baseSpecies: "Phantump",
    forme: "Sartori",
    types: ["Ghost", "Fire"],
    baseStats: { hp: 43, atk: 60, def: 38, spa: 70, spd: 50, spe: 48 },
    abilities: { 0: "Weak Armor", 1: "Flame Body", H: "Thermal Exchange" },
    heightm: 0.5,
    weightkg: 3,
    color: "Orange",
    evos: ["Charvenant"],
    eggGroups: ["Grass", "Amorphous"]
  },
  octilleryhassrim: {
    num: 224,
    name: "Octillery-Hassrim",
    baseSpecies: "Octillery",
    forme: "Hassrim",
    types: ["Water", "Fairy"],
    baseStats: { hp: 65, atk: 95, def: 65, spa: 95, spd: 65, spe: 95 },
    abilities: { 0: "Suction Cups", 1: "Color Change", H: "Moody" },
    heightm: 0.9,
    weightkg: 28.5,
    color: "Pink",
    prevo: "Remoraid",
    evoLevel: 25,
    evoRegion: "Hassrim",
    eggGroups: ["Water 1", "Water 2"]
  },
  indeedeehassrim: {
    num: 876,
    name: "Indeedee-Hassrim",
    baseSpecies: "Indeedee",
    forme: "Hassrim",
    types: ["Psychic", "Dark"],
    gender: "M",
    baseStats: { hp: 60, atk: 75, def: 55, spa: 105, spd: 85, spe: 95 },
    abilities: { 0: "Pickpocket", 1: "Synchronize", H: "Infiltrator" },
    heightm: 0.9,
    weightkg: 28,
    color: "Black",
    eggGroups: ["Fairy"]
  },
  indeedeehassrimf: {
    num: 876,
    name: "Indeedee-Hassrim-F",
    baseSpecies: "Indeedee",
    forme: "Hassrim-F",
    types: ["Psychic", "Dark"],
    gender: "F",
    baseStats: { hp: 70, atk: 65, def: 65, spa: 95, spd: 95, spe: 85 },
    abilities: { 0: "Cute Charm", 1: "Synchronize", H: "Infiltrator" },
    heightm: 0.9,
    weightkg: 28,
    color: "Black",
    eggGroups: ["Fairy"]
  },
  // New Megas and Revavroom's Star Mods
  butterfreemega: {
    num: 12,
    name: "Butterfree-Mega",
    baseSpecies: "Butterfree",
    forme: "Mega",
    types: ["Bug", "Psychic"],
    baseStats: { hp: 60, atk: 45, def: 50, spa: 140, spd: 90, spe: 110 },
    abilities: { 0: "Tinted Lens" },
    heightm: 1,
    weightkg: 35,
    color: "Blue",
    eggGroups: ["Bug"],
    requiredItem: "Butterfreenite"
  },
  slowkingmega: {
    num: 199,
    name: "Slowking-Mega",
    baseSpecies: "Slowking",
    forme: "Mega",
    types: ["Water", "Psychic"],
    baseStats: { hp: 95, atk: 75, def: 100, spa: 110, spd: 180, spe: 30 },
    abilities: { 0: "Unaware" },
    heightm: 1.9,
    weightkg: 125,
    color: "Gray",
    eggGroups: ["Water 1", "Monster"],
    requiredItem: "Slowkinginite"
  },
  torkoalmega: {
    num: 324,
    name: "Torkoal-Mega",
    baseSpecies: "Torkoal",
    forme: "Mega",
    types: ["Fire", "Steel"],
    baseStats: { hp: 70, atk: 100, def: 160, spa: 100, spd: 120, spe: 20 },
    abilities: { 0: "White Smoke" },
    heightm: 0.6,
    weightkg: 100.4,
    color: "Gray",
    eggGroups: ["Field", "Monster"],
    requiredItem: "Torkoalite"
  },
  miloticmega: {
    num: 350,
    name: "Milotic-Mega",
    baseSpecies: "Milotic",
    forme: "Mega",
    types: ["Water", "Fairy"],
    baseStats: { hp: 95, atk: 80, def: 99, spa: 120, spd: 165, spe: 81 },
    abilities: { 0: "Marvel Scale" },
    heightm: 6.3,
    weightkg: 160,
    color: "Pink",
    eggGroups: ["Water 1", "Dragon"],
    requiredItem: "Milotite"
  },
  electiviremega: {
    num: 466,
    name: "Electivire-Mega",
    baseSpecies: "Electivire",
    forme: "Mega",
    types: ["Electric"],
    baseStats: { hp: 75, atk: 143, def: 97, spa: 115, spd: 105, spe: 105 },
    abilities: { 0: "Electric Surge" },
    heightm: 2,
    weightkg: 140.1,
    color: "Yellow",
    eggGroups: ["Human-Like"],
    requiredItem: "Electivirite"
  },
  magmortarmega: {
    num: 467,
    name: "Magmortar-Mega",
    baseSpecies: "Magmortar",
    forme: "Mega",
    types: ["Fire"],
    baseStats: { hp: 75, atk: 115, def: 92, spa: 155, spd: 120, spe: 83 },
    abilities: { 0: "Mega Launcher" },
    heightm: 1.9,
    weightkg: 90.1,
    color: "Red",
    eggGroups: ["Human-Like"],
    requiredItem: "Magmortarite"
  },
  garbodormega: {
    num: 569,
    name: "Garbodor-Mega",
    baseSpecies: "Garbodor",
    forme: "Mega",
    types: ["Poison", "Steel"],
    baseStats: { hp: 80, atk: 125, def: 122, spa: 80, spd: 102, spe: 65 },
    abilities: { 0: "Neutralizing Gas" },
    heightm: 2.3,
    weightkg: 236.6,
    color: "Green",
    eggGroups: ["Mineral"],
    requiredItem: "Garbodorite"
  },
  beheeyemmega: {
    num: 606,
    name: "Beheeyem-Mega",
    baseSpecies: "Beheeyem",
    forme: "Mega",
    types: ["Psychic", "Electric"],
    baseStats: { hp: 75, atk: 75, def: 75, spa: 165, spd: 135, spe: 60 },
    abilities: { 0: "Levitate" },
    heightm: 1.6,
    weightkg: 74.5,
    color: "Brown",
    eggGroups: ["Human-Like"],
    requiredItem: "Beheeyemite"
  },
  sandacondamega: {
    num: 844,
    name: "Sandaconda-Mega",
    baseSpecies: "Sandaconda",
    forme: "Mega",
    types: ["Ground"],
    baseStats: { hp: 72, atk: 127, def: 125, spa: 105, spd: 90, spe: 91 },
    abilities: { 0: "Sand Rush" },
    heightm: 7.3,
    weightkg: 110.5,
    color: "Green",
    eggGroups: ["Field", "Dragon"],
    requiredItem: "Sandacondite"
  },
  alcremiemega: {
    num: 869,
    name: "Alcremie-Mega",
    baseSpecies: "Alcremie",
    forme: "Mega",
    types: ["Fairy"],
    baseStats: { hp: 65, atk: 90, def: 115, spa: 140, spd: 151, spe: 34 },
    abilities: { 0: "Filter" },
    heightm: 1.8,
    weightkg: 55.5,
    gender: "F",
    color: "White",
    eggGroups: ["Fairy", "Amorphous"],
    requiredItem: "Alcremite"
  },
  froslassmega: {
    num: 478,
    name: "Froslass-Mega",
    baseSpecies: "Froslass",
    forme: "Mega",
    types: ["Ice", "Ghost"],
    baseStats: { hp: 70, atk: 110, def: 90, spa: 110, spd: 90, spe: 110 },
    abilities: { 0: "Prankster" },
    heightm: 1.4,
    weightkg: 36.8,
    gender: "F",
    color: "White",
    eggGroups: ["Fairy", "Mineral"],
    requiredItem: "Froslassite"
  },
  druddigonmega: {
    num: 621,
    name: "Druddigon-Mega",
    baseSpecies: "Druddigon",
    forme: "Mega",
    types: ["Dragon", "Rock"],
    baseStats: { hp: 77, atk: 135, def: 140, spa: 75, spd: 110, spe: 48 },
    abilities: { 0: "Stoneskin" },
    heightm: 1.8,
    weightkg: 239,
    color: "Red",
    eggGroups: ["Dragon", "Monster"],
    requiredItem: "Druddigonite",
    otherFormes: ["Druddigon-Mega-Statue"],
    formeOrder: ["Druddigon-Mega", "Druddigon-Mega-Statue"]
  },
  druddigonmegastatue: {
    num: 621,
    name: "Druddigon-Mega-Statue",
    baseSpecies: "Druddigon",
    forme: "Mega-Statue",
    types: ["Dragon", "Rock"],
    baseStats: { hp: 77, atk: 135, def: 140, spa: 75, spd: 110, spe: 48 },
    abilities: { 0: "Stoneskin" },
    heightm: 1.8,
    weightkg: 239,
    color: "Red",
    eggGroups: ["Dragon", "Monster"],
    requiredItem: "Druddigonite",
    requiredAbility: "Stoneskin",
    battleOnly: "Druddigon-Mega"
  },
  revavroomsegin: {
    num: 966,
    name: "Revavroom-Segin",
    forme: "Segin",
    baseSpecies: "Revavroom",
    types: ["Steel", "Dark"],
    baseStats: { hp: 80, atk: 99, def: 70, spa: 74, spd: 67, spe: 110 },
    abilities: { 0: "Intimidate" },
    heightm: 2.6,
    weightkg: 280,
    color: "Black",
    changesFrom: "Revavroom",
    eggGroups: ["Mineral"]
  },
  revavroomschedar: {
    num: 966,
    name: "Revavroom-Schedar",
    forme: "Schedar",
    baseSpecies: "Revavroom",
    types: ["Steel", "Fire"],
    baseStats: { hp: 100, atk: 119, def: 90, spa: 34, spd: 47, spe: 110 },
    abilities: { 0: "Speed Boost" },
    heightm: 2.6,
    weightkg: 280,
    color: "Yellow",
    changesFrom: "Revavroom",
    eggGroups: ["Mineral"]
  },
  revavroomnavi: {
    num: 966,
    name: "Revavroom-Navi",
    forme: "Navi",
    baseSpecies: "Revavroom",
    types: ["Steel", "Poison"],
    baseStats: { hp: 60, atk: 139, def: 110, spa: 34, spd: 67, spe: 90 },
    abilities: { 0: "Toxic Debris" },
    heightm: 2.6,
    weightkg: 280,
    color: "Pink",
    changesFrom: "Revavroom",
    eggGroups: ["Mineral"]
  },
  revavroomruchbah: {
    num: 966,
    name: "Revavroom-Ruchbah",
    forme: "Ruchbah",
    baseSpecies: "Revavroom",
    types: ["Steel", "Fairy"],
    baseStats: { hp: 80, atk: 99, def: 110, spa: 54, spd: 87, spe: 70 },
    abilities: { 0: "Misty Surge" },
    heightm: 2.6,
    weightkg: 280,
    color: "Purple",
    changesFrom: "Revavroom",
    eggGroups: ["Mineral"]
  },
  revavroomcaph: {
    num: 966,
    name: "Revavroom-Caph",
    forme: "Caph",
    baseSpecies: "Revavroom",
    types: ["Steel", "Fighting"],
    baseStats: { hp: 100, atk: 139, def: 70, spa: 54, spd: 67, spe: 70 },
    abilities: { 0: "Stamina" },
    heightm: 2.6,
    weightkg: 280,
    color: "Orange",
    changesFrom: "Revavroom",
    eggGroups: ["Mineral"]
  },
  // Existing Mon Attribute Changes
  metapod: {
    inherit: true,
    abilities: { 0: "Shed Skin", H: "Rattled" },
    isNonstandard: null
  },
  kakuna: {
    inherit: true,
    abilities: { 0: "Shed Skin", H: "Battle Armor" },
    isNonstandard: null
  },
  beedrill: {
    inherit: true,
    abilities: { 0: "Swarm", H: "Anger Point" },
    isNonstandard: null
  },
  raichualola: {
    inherit: true,
    abilities: { 0: "Surge Surfer", H: "Static" }
  },
  nidoranm: {
    inherit: true,
    baseStats: { hp: 46, atk: 57, def: 42, spa: 40, spd: 40, spe: 50 },
    isNonstandard: null
  },
  meowth: {
    inherit: true,
    abilities: { 0: "Pickup", 1: "Technician", H: "Super Luck" }
  },
  persian: {
    inherit: true,
    abilities: { 0: "Limber", 1: "Technician", H: "Super Luck" }
  },
  arcaninehisui: {
    inherit: true,
    baseStats: { hp: 100, atk: 120, def: 80, spa: 90, spd: 80, spe: 85 },
    color: "Orange"
  },
  oddish: {
    inherit: true,
    abilities: { 0: "Night Walker", H: "Run Away" }
  },
  gloom: {
    inherit: true,
    abilities: { 0: "Night Walker", H: "Stench" }
  },
  vileplume: {
    inherit: true,
    abilities: { 0: "Night Walker", H: "Effect Spore" }
  },
  geodude: {
    inherit: true,
    abilities: { 0: "Sand Force", 1: "Sturdy", H: "Bulletproof" }
  },
  graveler: {
    inherit: true,
    abilities: { 0: "Sand Force", 1: "Sturdy", H: "Bulletproof" }
  },
  golem: {
    inherit: true,
    abilities: { 0: "Sand Force", 1: "Sturdy", H: "Bulletproof" }
  },
  ponytagalar: {
    inherit: true,
    abilities: { 0: "Run Away", 1: "Pastel Veil", H: "Friend Guard" },
    isNonstandard: null
  },
  rapidashgalar: {
    inherit: true,
    abilities: { 0: "Run Away", 1: "Pastel Veil", H: "Friend Guard" },
    isNonstandard: null
  },
  slowpokegalar: {
    inherit: true,
    abilities: { 0: "Immunity", 1: "Own Tempo", H: "Regenerator" }
  },
  slowbrogalar: {
    inherit: true,
    abilities: { 0: "Sniper", 1: "Own Tempo", H: "Regenerator" }
  },
  farfetchdgalar: {
    inherit: true,
    abilities: { 0: "Steadfast", 1: "Big Pecks", H: "Scrappy" }
  },
  gastly: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Cursed Body" }
  },
  haunter: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Cursed Body" }
  },
  gengar: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Cursed Body" }
  },
  gengarmega: {
    inherit: true,
    baseStats: { hp: 60, atk: 95, def: 60, spa: 160, spd: 95, spe: 130 },
    isNonstandard: null
  },
  krabby: {
    inherit: true,
    abilities: { 0: "Hyper Cutter", 1: "Shell Armor", H: "Bludgeon" },
    color: "Orange",
    isNonstandard: null
  },
  kingler: {
    inherit: true,
    abilities: { 0: "Hyper Cutter", 1: "Shell Armor", H: "Bludgeon" },
    color: "Orange",
    isNonstandard: null
  },
  onix: {
    inherit: true,
    baseStats: { hp: 35, atk: 75, def: 160, spa: 30, spd: 45, spe: 70 },
    isNonstandard: null
  },
  exeggutoralola: {
    inherit: true,
    abilities: { 0: "Bludgeon", H: "Harvest" }
  },
  hitmonlee: {
    inherit: true,
    baseStats: { hp: 50, atk: 125, def: 53, spa: 35, spd: 110, spe: 82 }
  },
  hitmonchan: {
    inherit: true,
    abilities: { 0: "Inner Focus", 1: "Iron Fist", H: "Relentless" }
  },
  koffing: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Stench" }
  },
  weezing: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Stench" }
  },
  weezinggalar: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Neutralizing Gas" }
  },
  tangela: {
    inherit: true,
    abilities: { 0: "Chlorophyll", 1: "Tangling", H: "Regenerator" },
    isNonstandard: null
  },
  kangaskhan: {
    inherit: true,
    abilities: { 0: "Early Bird", 1: "Scrappy", H: "Relentless" },
    isNonstandard: null
  },
  horsea: {
    inherit: true,
    abilities: { 0: "Swift Swim", 1: "Sniper", H: "Against Current" }
  },
  seadra: {
    inherit: true,
    abilities: { 0: "Poison Point", 1: "Sniper", H: "Against Current" }
  },
  mrmimegalar: {
    inherit: true,
    types: ["Psychic", "Ice"],
    abilities: { 0: "Vital Spirit", 1: "Clean House", H: "Ice Body" },
    isNonstandard: null
  },
  electabuzz: {
    inherit: true,
    baseStats: { hp: 65, atk: 83, def: 57, spa: 100, spd: 85, spe: 105 }
  },
  taurospaldeacombat: {
    inherit: true,
    abilities: { 0: "Intimidate", 1: "No Guard", H: "Relentless" }
  },
  taurospaldeablaze: {
    inherit: true,
    baseStats: { hp: 75, atk: 120, def: 95, spa: 30, spd: 70, spe: 100 },
    abilities: { 0: "Intimidate", 1: "No Guard", H: "Relentless" }
  },
  taurospaldeaaqua: {
    inherit: true,
    baseStats: { hp: 75, atk: 100, def: 115, spa: 30, spd: 70, spe: 100 },
    abilities: { 0: "Intimidate", 1: "No Guard", H: "Relentless" }
  },
  eevee: {
    inherit: true,
    abilities: { 0: "Run Away", 1: "Adaptability", H: "Fluffy" }
  },
  jolteon: {
    inherit: true,
    baseStats: { hp: 65, atk: 95, def: 60, spa: 110, spd: 65, spe: 130 }
  },
  articunogalar: {
    inherit: true,
    abilities: { 0: "Unnerve", H: "Competitive" }
  },
  zapdosgalar: {
    inherit: true,
    abilities: { 0: "Unnerve", H: "Defiant" }
  },
  moltresgalar: {
    inherit: true,
    abilities: { 0: "Unnerve", H: "Berserk" }
  },
  mew: {
    inherit: true,
    abilities: { 0: "Synchronize", H: "Wonder Skin" }
  },
  cyndaquil: {
    inherit: true,
    baseStats: { hp: 39, atk: 53, def: 38, spa: 70, spd: 45, spe: 65 }
  },
  quilava: {
    inherit: true,
    baseStats: { hp: 58, atk: 65, def: 53, spa: 90, spd: 60, spe: 80 }
  },
  typhlosion: {
    inherit: true,
    baseStats: { hp: 78, atk: 85, def: 68, spa: 129, spd: 75, spe: 100 }
  },
  typhlosionhisui: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Soul Drain" },
    baseStats: { hp: 78, atk: 75, def: 68, spa: 119, spd: 85, spe: 110 }
  },
  meganium: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Grassy Surge" }
  },
  ledian: {
    inherit: true,
    abilities: { 0: "Swarm", 1: "Early Bird", H: "Super Luck" },
    baseStats: { hp: 55, atk: 35, def: 50, spa: 65, spd: 110, spe: 85 },
    isNonstandard: null
  },
  politoed: {
    inherit: true,
    baseStats: { hp: 90, atk: 75, def: 75, spa: 90, spd: 110, spe: 70 }
  },
  wooperpaldea: {
    inherit: true,
    baseStats: { hp: 55, atk: 45, def: 25, spa: 25, spd: 45, spe: 15 }
  },
  bellossom: {
    inherit: true,
    abilities: { 0: "Chlorophyll", H: "Hospitality" }
  },
  umbreon: {
    inherit: true,
    abilities: { 0: "Synchronize", H: "Night Walker" }
  },
  slowkinggalar: {
    inherit: true,
    abilities: { 0: "Potency", 1: "Own Tempo", H: "Regenerator" }
  },
  misdreavus: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Cacophony" }
  },
  unown: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Glyphic Spell" },
    isNonstandard: null
  },
  girafarig: {
    inherit: true,
    baseStats: { hp: 80, atk: 80, def: 65, spa: 90, spd: 65, spe: 85 }
  },
  steelixmega: {
    inherit: true,
    abilities: { 0: "Supermassive" },
    isNonstandard: null
  },
  snubbull: {
    inherit: true,
    abilities: { 0: "Unnerve", 1: "Run Away", H: "Rattled" }
  },
  granbull: {
    inherit: true,
    abilities: { 0: "Unnerve", 1: "Quick Feet", H: "Rattled" }
  },
  qwilfish: {
    inherit: true,
    abilities: { 0: "Poison Point", 1: "Poison Touch", H: "Intimidate" }
  },
  qwilfishhisui: {
    inherit: true,
    abilities: { 0: "Poison Point", 1: "Poison Touch", H: "Disturbance" }
  },
  shuckle: {
    inherit: true,
    abilities: { 0: "Sturdy", 1: "Gluttony", H: "Solid Rock" },
    isNonstandard: null
  },
  sneasel: {
    inherit: true,
    abilities: { 0: "Relentless", 1: "Keen Eye", H: "Pickpocket" }
  },
  sneaselhisui: {
    inherit: true,
    abilities: { 0: "Relentless", 1: "Keen Eye", H: "Poison Touch" }
  },
  slugma: {
    inherit: true,
    abilities: { 0: "Magma Armor", 1: "Flame Body", H: "Drought" }
  },
  magcargo: {
    inherit: true,
    abilities: { 0: "Magma Armor", 1: "Flame Body", H: "Drought" }
  },
  corsola: {
    inherit: true,
    abilities: { 0: "Healer", 1: "Natural Cure", H: "Regenerator" },
    isNonstandard: null
  },
  corsolagalar: {
    inherit: true,
    types: ["Ghost", "Rock"],
    isNonstandard: null
  },
  delibird: {
    inherit: true,
    abilities: { 0: "Vital Spirit", 1: "Hustle", H: "Tireless" },
    otherFormes: ["Delibird-Egelas"],
    formeOrder: ["Delibird", "Delibird-Egelas"]
  },
  skarmory: {
    inherit: true,
    abilities: { 0: "Sharpness", 1: "Sturdy", H: "Light Metal" }
  },
  kingdra: {
    inherit: true,
    abilities: { 0: "Swift Swim", 1: "Sniper", H: "Against Current" }
  },
  stantler: {
    inherit: true,
    abilities: { 0: "Disturbance", 1: "Frisk", H: "Sap Sipper" }
  },
  elekid: {
    inherit: true,
    baseStats: { hp: 45, atk: 63, def: 37, spa: 70, spd: 55, spe: 95 }
  },
  raikou: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Lightning Rod" }
  },
  entei: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Heat Sink" }
  },
  suicune: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Storm Drain" }
  },
  pupitar: {
    inherit: true,
    abilities: { 0: "Shed Skin", H: "Solid Rock" }
  },
  celebi: {
    inherit: true,
    abilities: { 0: "Natural Cure", H: "Symbiosis" },
    isNonstandard: null
  },
  silcoon: {
    inherit: true,
    abilities: { 0: "Shed Skin", H: "Rain Dish" },
    isNonstandard: null
  },
  cascoon: {
    inherit: true,
    abilities: { 0: "Shed Skin", H: "Poison Point" },
    isNonstandard: null
  },
  dustox: {
    inherit: true,
    baseStats: { hp: 60, atk: 50, def: 70, spa: 50, spd: 100, spe: 65 },
    isNonstandard: null
  },
  swellow: {
    inherit: true,
    baseStats: { hp: 60, atk: 85, def: 60, spa: 50, spd: 50, spe: 125 },
    isNonstandard: null
  },
  seedot: {
    inherit: true,
    abilities: { 0: "Chlorophyll", 1: "Early Bird", H: "Battle Armor" }
  },
  shiftry: {
    inherit: true,
    abilities: { 0: "Chlorophyll", 1: "Early Bird", H: "Wind Rider" }
  },
  wingull: {
    inherit: true,
    abilities: { 0: "Keen Eye", H: "Drizzle" },
    evos: ["Pelipper", "Antarctross"]
  },
  pelipper: {
    inherit: true,
    abilities: { 0: "Keen Eye", H: "Drizzle" }
  },
  surskit: {
    inherit: true,
    abilities: { 0: "Swift Swim", 1: "Rain Dish", H: "Rattled" }
  },
  masquerain: {
    inherit: true,
    abilities: { 0: "Intimidate", 1: "Disturbance", H: "Unnerve" }
  },
  whismur: {
    inherit: true,
    abilities: { 0: "Soundproof", 1: "Cacophony", H: "Rattled" },
    isNonstandard: null
  },
  loudred: {
    inherit: true,
    abilities: { 0: "Soundproof", 1: "Cacophony", H: "Scrappy" },
    isNonstandard: null
  },
  exploud: {
    inherit: true,
    abilities: { 0: "Soundproof", 1: "Cacophony", H: "Scrappy" },
    baseStats: { hp: 104, atk: 91, def: 73, spa: 91, spd: 73, spe: 68 },
    isNonstandard: null
  },
  mawile: {
    inherit: true,
    abilities: { 0: "Hyper Cutter", 1: "Disturbance", H: "Strong Jaw" },
    eggGroups: ["Monster", "Fairy"],
    isNonstandard: null
  },
  plusle: {
    inherit: true,
    abilities: { 0: "Induction", H: "Battery" }
  },
  minun: {
    inherit: true,
    abilities: { 0: "Induction", H: "Battery" }
  },
  vibrava: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Sheer Force" }
  },
  flygon: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Sand Stream" }
  },
  seviper: {
    inherit: true,
    abilities: { 0: "Shed Skin", H: "Merciless" }
  },
  lunatone: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Night Walker" },
    isNonstandard: null
  },
  solrock: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Solar Power" },
    isNonstandard: null
  },
  baltoy: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Magic Guard" },
    isNonstandard: null
  },
  claydol: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Magic Guard" },
    isNonstandard: null
  },
  duskull: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Soul Drain" }
  },
  dusclops: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Soul Drain" }
  },
  tropius: {
    inherit: true,
    abilities: { 0: "Ripen", 1: "Solar Power", H: "Harvest" }
  },
  chimecho: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Clear Body" }
  },
  snorunt: {
    inherit: true,
    abilities: { 0: "Overcoat", 1: "Ice Body", H: "Moody" }
  },
  glalie: {
    inherit: true,
    abilities: { 0: "Relentless", 1: "Ice Body", H: "Moody" }
  },
  walrein: {
    inherit: true,
    abilities: { 0: "Thick Fat", 1: "Ice Breaker", H: "Oblivious" },
    baseStats: { hp: 110, atk: 90, def: 90, spa: 95, spd: 90, spe: 65 },
    isNonstandard: null
  },
  huntail: {
    inherit: true,
    abilities: { 0: "Against Current", H: "Water Veil" },
    isNonstandard: null
  },
  gorebyss: {
    inherit: true,
    abilities: { 0: "Against Current", H: "Hydration" },
    isNonstandard: null
  },
  relicanth: {
    inherit: true,
    abilities: { 0: "Against Current", 1: "Rock Head", H: "Sturdy" },
    isNonstandard: null
  },
  latias: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Telepathy" }
  },
  latios: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Telepathy" }
  },
  latiosmega: {
    inherit: true,
    baseStats: { hp: 80, atk: 120, def: 100, spa: 160, spd: 130, spe: 110 },
    isNonstandard: null
  },
  kyogre: {
    inherit: true,
    baseStats: { hp: 100, atk: 90, def: 90, spa: 140, spd: 120, spe: 60 }
  },
  kyogreprimal: {
    inherit: true,
    baseStats: { hp: 100, atk: 120, def: 90, spa: 160, spd: 140, spe: 90 },
    isNonstandard: null
  },
  groudon: {
    inherit: true,
    baseStats: { hp: 100, atk: 140, def: 120, spa: 90, spd: 90, spe: 60 }
  },
  groudonprimal: {
    inherit: true,
    baseStats: { hp: 100, atk: 160, def: 140, spa: 120, spd: 90, spe: 90 },
    isNonstandard: null
  },
  rayquaza: {
    inherit: true,
    baseStats: { hp: 100, atk: 140, def: 90, spa: 140, spd: 90, spe: 90 }
  },
  rayquazamega: {
    inherit: true,
    baseStats: { hp: 100, atk: 180, def: 90, spa: 180, spd: 90, spe: 110 },
    requiredItem: "Meteorite",
    isNonstandard: null
  },
  jirachi: {
    inherit: true,
    abilities: { 0: "Serene Grace", H: "Forewarn" }
  },
  deoxys: {
    inherit: true,
    baseStats: { hp: 50, atk: 125, def: 90, spa: 125, spd: 90, spe: 120 },
    abilities: { 0: "Pressure", H: "Adaptability" }
  },
  deoxysattack: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Relentless" }
  },
  deoxysdefense: {
    inherit: true,
    baseStats: { hp: 50, atk: 50, def: 180, spa: 50, spd: 180, spe: 90 },
    abilities: { 0: "Pressure", H: "Filter" }
  },
  deoxysspeed: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Limber" }
  },
  starly: {
    inherit: true,
    abilities: { 0: "Keen Eye", H: "Big Pecks" }
  },
  cranidos: {
    inherit: true,
    abilities: { 0: "Mold Breaker", 1: "Rock Head", H: "Sheer Force" }
  },
  rampardos: {
    inherit: true,
    abilities: { 0: "Mold Breaker", 1: "Rock Head", H: "Sheer Force" }
  },
  shieldon: {
    inherit: true,
    abilities: { 0: "Filter", 1: "Stalwart", H: "Soundproof" }
  },
  bastiodon: {
    inherit: true,
    abilities: { 0: "Filter", 1: "Stalwart", H: "Soundproof" }
  },
  wormadam: {
    inherit: true,
    abilities: { 0: "Anticipation", H: "Grass Pelt" },
    isNonstandard: null
  },
  wormadamsandy: {
    inherit: true,
    abilities: { 0: "Anticipation", H: "Sand Force" },
    isNonstandard: null
  },
  wormadamtrash: {
    inherit: true,
    abilities: { 0: "Anticipation", H: "Thick Fat" },
    isNonstandard: null
  },
  shellos: {
    inherit: true,
    abilities: { 0: "Sticky Hold", 1: "Storm Drain", H: "Liquid Ooze" }
  },
  gastrodon: {
    inherit: true,
    abilities: { 0: "Sticky Hold", 1: "Storm Drain", H: "Liquid Ooze" }
  },
  mismagius: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Cacophony" }
  },
  chingling: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Clear Body" }
  },
  stunky: {
    inherit: true,
    baseStats: { hp: 63, atk: 41, def: 47, spa: 63, spd: 41, spe: 74 }
  },
  skuntank: {
    inherit: true,
    baseStats: { hp: 103, atk: 71, def: 67, spa: 93, spd: 61, spe: 84 }
  },
  chatot: {
    inherit: true,
    abilities: { 0: "Cacophony", 1: "Tangled Feet", H: "Big Pecks" },
    isNonstandard: null
  },
  spiritomb: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Soul Drain" }
  },
  drapion: {
    inherit: true,
    baseStats: { hp: 70, atk: 100, def: 110, spa: 60, spd: 75, spe: 95 },
    isNonstandard: null
  },
  carnivine: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Strong Jaw" },
    isNonstandard: null
  },
  finneon: {
    inherit: true,
    abilities: { 0: "Water Veil", 1: "Storm Drain", H: "Dazzling" }
  },
  lumineon: {
    inherit: true,
    abilities: { 0: "Water Veil", 1: "Storm Drain", H: "Dazzling" }
  },
  magnezone: {
    inherit: true,
    evoType: "levelExtra",
    evoCondition: "near a special magnetic field"
  },
  tangrowth: {
    inherit: true,
    abilities: { 0: "Chlorophyll", 1: "Tangling", H: "Regenerator" },
    isNonstandard: null
  },
  leafeon: {
    inherit: true,
    evoType: "levelExtra",
    evoCondition: "near a Moss Rock"
  },
  glaceon: {
    inherit: true,
    evoType: "levelExtra",
    evoCondition: "near an Icy Rock"
  },
  mamoswine: {
    inherit: true,
    abilities: { 0: "Oblivious", 1: "Ice Breaker", H: "Thick Fat" }
  },
  gallade: {
    inherit: true,
    abilities: { 0: "Steadfast", H: "Justified" }
  },
  gallademega: {
    inherit: true,
    abilities: { 0: "Sharpness" },
    isNonstandard: null
  },
  probopass: {
    inherit: true,
    evoType: "levelExtra",
    evoCondition: "near a special magnetic field"
  },
  dusknoir: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Soul Drain" }
  },
  rotom: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Prankster" },
    exclusiveMoves: ["Astonish", "Confuse Ray", "Hex", "Ominous Wind"]
  },
  rotomwash: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Motor Drive" },
    exclusiveHidden: true
  },
  rotomheat: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Motor Drive" },
    exclusiveHidden: true
  },
  rotomfrost: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Motor Drive" },
    exclusiveHidden: true
  },
  rotomfan: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Motor Drive" },
    exclusiveHidden: true
  },
  rotommow: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Motor Drive" },
    exclusiveHidden: true
  },
  uxie: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Synchronize" }
  },
  mesprit: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Symbiosis" }
  },
  azelf: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Mold Breaker" }
  },
  heatran: {
    inherit: true,
    abilities: { 0: "Heat Sink", 1: "Magma Armor", H: "Flame Body" }
  },
  regigigas: {
    inherit: true,
    abilities: { 0: "Slow Start", H: "Stall" }
  },
  giratinaorigin: {
    num: 487,
    name: "Giratina-Origin",
    baseSpecies: "Giratina",
    forme: "Origin",
    types: ["Ghost", "Dragon"],
    gender: "N",
    baseStats: { hp: 150, atk: 120, def: 100, spa: 120, spd: 100, spe: 90 },
    abilities: { 0: "Levitate", H: "Telepathy" },
    heightm: 6.9,
    weightkg: 650,
    color: "Black",
    eggGroups: ["Undiscovered"],
    requiredItem: "Griseous Orb",
    changesFrom: "Giratina"
  },
  cresselia: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Fairy Aura" },
    baseStats: { hp: 120, atk: 70, def: 120, spa: 75, spd: 130, spe: 85 }
  },
  phione: {
    num: 489,
    name: "Phione",
    types: ["Water"],
    gender: "N",
    baseStats: { hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
    abilities: { 0: "Hydration", H: "Trace" },
    heightm: 0.4,
    weightkg: 3.1,
    color: "Blue",
    eggGroups: ["Water 1", "Fairy"]
  },
  manaphy: {
    inherit: true,
    abilities: { 0: "Hydration", H: "Trace" }
  },
  darkrai: {
    inherit: true,
    abilities: { 0: "Bad Dreams", H: "Dark Aura" }
  },
  shaymin: {
    inherit: true,
    abilities: { 0: "Natural Cure", H: "Grass Pelt" },
    exclusiveMoves: ["Aromatherapy", "Healing Wish", "Lucky Chant"]
  },
  shayminsky: {
    inherit: true,
    abilities: { 0: "Serene Grace", H: "Limber" },
    exclusiveHidden: true
  },
  victini: {
    inherit: true,
    abilities: { 0: "Victory Star", H: "Vital Spirit" },
    isNonstandard: null
  },
  oshawott: {
    inherit: true,
    abilities: { 0: "Torrent", H: "Relentless" }
  },
  dewott: {
    inherit: true,
    abilities: { 0: "Torrent", H: "Relentless" }
  },
  samurott: {
    inherit: true,
    abilities: { 0: "Torrent", H: "Relentless" }
  },
  herdier: {
    inherit: true,
    abilities: { 0: "Intimidate", 1: "Snow Plow", H: "Scrappy" },
    isNonstandard: null
  },
  stoutland: {
    inherit: true,
    abilities: { 0: "Intimidate", 1: "Snow Plow", H: "Scrappy" },
    isNonstandard: null
  },
  munna: {
    inherit: true,
    abilities: { 0: "Forewarn", 1: "Synchronize", H: "Wonder Skin" },
    isNonstandard: null
  },
  musharna: {
    inherit: true,
    abilities: { 0: "Forewarn", 1: "Synchronize", H: "Wonder Skin" },
    isNonstandard: null
  },
  roggenrola: {
    inherit: true,
    abilities: { 0: "Sturdy", H: "Sand Force" },
    isNonstandard: null
  },
  boldore: {
    inherit: true,
    abilities: { 0: "Sturdy", H: "Sand Force" },
    isNonstandard: null
  },
  gigalith: {
    inherit: true,
    abilities: { 0: "Sturdy", H: "Sand Force" },
    isNonstandard: null
  },
  swoobat: {
    inherit: true,
    baseStats: { hp: 87, atk: 67, def: 55, spa: 77, spd: 55, spe: 114 },
    isNonstandard: null
  },
  audinomega: {
    inherit: true,
    abilities: { 0: "Triage" },
    isNonstandard: null
  },
  tympole: {
    inherit: true,
    abilities: { 0: "Swift Swim", 1: "Hydration", H: "Liquid Voice" },
    isNonstandard: null
  },
  palpitoad: {
    inherit: true,
    abilities: { 0: "Swift Swim", 1: "Hydration", H: "Liquid Voice" },
    isNonstandard: null
  },
  seismitoad: {
    inherit: true,
    abilities: { 0: "Swift Swim", 1: "Poison Touch", H: "Liquid Voice" },
    isNonstandard: null
  },
  cottonee: {
    inherit: true,
    abilities: { 0: "Prankster", 1: "Infiltrator", H: "Cotton Down" }
  },
  whimsicott: {
    inherit: true,
    abilities: { 0: "Prankster", 1: "Infiltrator", H: "Cotton Down" }
  },
  petilil: {
    inherit: true,
    abilities: { 0: "Leaf Guard", 1: "Own Tempo", H: "Aroma Veil" }
  },
  lilligant: {
    inherit: true,
    abilities: { 0: "Leaf Guard", 1: "Own Tempo", H: "Aroma Veil" }
  },
  lilliganthisui: {
    inherit: true,
    abilities: { 0: "Leaf Guard", 1: "Hustle", H: "Limber" }
  },
  darumakagalar: {
    inherit: true,
    abilities: { 0: "Hustle", H: "Relentless" },
    isNonstandard: null
  },
  darmanitan: {
    inherit: true,
    otherFormes: ["Darmanitan-Zen", "Darmanitan-Galar", "Darmanitan-Rage"],
    formeOrder: ["Darmanitan", "Darmanitan-Zen", "Darmanitan-Galar", "Darmanitan-Rage"],
    isNonstandard: null
  },
  darmanitangalar: {
    inherit: true,
    abilities: { 0: "Sheer Force", H: "Rage Mode" },
    isNonstandard: null
  },
  darmanitanrage: {
    num: 555,
    name: "Darmanitan-Rage",
    baseSpecies: "Darmanitan",
    forme: "Rage",
    types: ["Ice", "Fire"],
    baseStats: { hp: 105, atk: 140, def: 35, spa: 130, spd: 35, spe: 95 },
    abilities: { 0: "Rage Mode" },
    heightm: 1.7,
    weightkg: 120,
    color: "White",
    eggGroups: ["Field"],
    requiredAbility: "Rage Mode",
    battleOnly: "Darmanitan-Galar"
  },
  maractus: {
    inherit: true,
    abilities: { 0: "Water Absorb", 1: "Chlorophyll", H: "Dancer" },
    isNonstandard: null
  },
  zoruahisui: {
    inherit: true,
    types: ["Ghost", "Normal"]
  },
  zoroarkhisui: {
    inherit: true,
    types: ["Ghost", "Normal"]
  },
  minccino: {
    inherit: true,
    abilities: { 0: "Cute Charm", 1: "Clean House", H: "Fur Coat" }
  },
  cinccino: {
    inherit: true,
    abilities: { 0: "Cute Charm", 1: "Clean House", H: "Fur Coat" }
  },
  gothita: {
    inherit: true,
    abilities: { 0: "Frisk", 1: "Forewarn", H: "Shadow Tag" }
  },
  gothorita: {
    inherit: true,
    abilities: { 0: "Frisk", 1: "Forewarn", H: "Shadow Tag" }
  },
  gothitelle: {
    inherit: true,
    abilities: { 0: "Frisk", 1: "Forewarn", H: "Shadow Tag" }
  },
  duosion: {
    inherit: true,
    baseStats: { hp: 75, atk: 40, def: 55, spa: 125, spd: 65, spe: 30 }
  },
  vanillite: {
    inherit: true,
    abilities: { 0: "Ice Body", H: "Weak Armor" },
    isNonstandard: null
  },
  vanillish: {
    inherit: true,
    abilities: { 0: "Ice Body", H: "Weak Armor" },
    isNonstandard: null
  },
  vanilluxe: {
    inherit: true,
    abilities: { 0: "Ice Body", H: "Weak Armor" },
    isNonstandard: null
  },
  karrablast: {
    inherit: true,
    abilities: { 0: "No Guard", 1: "Shed Skin", H: "Hustle" },
    isNonstandard: null
  },
  escavalier: {
    inherit: true,
    abilities: { 0: "No Guard", 1: "Shell Armor", H: "Overcoat" },
    exclusiveHidden: true,
    isNonstandard: null
  },
  joltik: {
    inherit: true,
    abilities: { 0: "Compound Eyes", 1: "Disturbance", H: "Swarm" }
  },
  galvantula: {
    inherit: true,
    abilities: { 0: "Compound Eyes", 1: "Disturbance", H: "Swarm" }
  },
  ferroseed: {
    inherit: true,
    abilities: { 0: "Iron Barbs", H: "Heavy Metal" },
    isNonstandard: null
  },
  ferrothorn: {
    inherit: true,
    abilities: { 0: "Iron Barbs", H: "Heavy Metal" },
    isNonstandard: null
  },
  stunfiskgalar: {
    inherit: true,
    abilities: { 0: "Mimicry", H: "Sand Veil" },
    isNonstandard: null
  },
  tynamo: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Schooling" },
    evos: ["Eelektrik", "Eelektrik-Egelas"],
    baseForme: "Solo",
    otherFormes: ["Tynamo-School"],
    formeOrder: ["Tynamo", "Tynamo-School"]
  },
  eelektrik: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Static" },
    otherFormes: ["Eelektrik-Egelas"],
    formeOrder: ["Eelektrik", "Eelektrik-Egelas"]
  },
  eelektross: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Static" },
    otherFormes: ["Eelektross-Egelas"],
    formeOrder: ["Eelektross", "Eelektross-Egelas"]
  },
  cryogonal: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Ice Body" }
  },
  pawniard: {
    inherit: true,
    abilities: { 0: "Defiant", 1: "Relentless", H: "Pressure" }
  },
  bisharp: {
    inherit: true,
    abilities: { 0: "Defiant", 1: "Relentless", H: "Pressure" }
  },
  braviaryhisui: {
    inherit: true,
    abilities: { 0: "Keen Eye", 1: "Sheer Force", H: "Frisk" }
  },
  heatmor: {
    inherit: true,
    abilities: { 0: "Gluttony", 1: "Heat Sink", H: "White Smoke" },
    otherFormes: ["Heatmor-Egelas"],
    formeOrder: ["Heatmor", "Heatmor-Egelas"],
    isNonstandard: null
  },
  deino: {
    inherit: true,
    abilities: { 0: "Hustle", H: "Competitive" }
  },
  zweilous: {
    inherit: true,
    abilities: { 0: "Hustle", H: "Competitive" }
  },
  hydreigon: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Competitive" }
  },
  cobalion: {
    inherit: true,
    abilities: { 0: "Justified", H: "Stalwart" }
  },
  terrakion: {
    inherit: true,
    abilities: { 0: "Justified", H: "Mold Breaker" }
  },
  virizion: {
    inherit: true,
    abilities: { 0: "Justified", H: "Quick Feet" }
  },
  keldeo: {
    inherit: true,
    abilities: { 0: "Justified", H: "Scrappy" }
  },
  keldeoresolute: {
    inherit: true,
    abilities: { 0: "Justified", H: "Scrappy" }
  },
  meloetta: {
    inherit: true,
    abilities: { 0: "Serene Grace", H: "Soundproof" },
    exclusiveMoves: ["Confusion", "Echoed Voice", "Hyper Voice", "Lucky Chant", "Perish Song", "Psybeam", "Psychic", "Round", "Sing"]
  },
  meloettapirouette: {
    num: 648,
    name: "Meloetta-Pirouette",
    baseSpecies: "Meloetta",
    forme: "Pirouette",
    types: ["Normal", "Fighting"],
    gender: "N",
    baseStats: { hp: 100, atk: 128, def: 90, spa: 77, spd: 77, spe: 128 },
    abilities: { 0: "Serene Grace", H: "Dancer" },
    heightm: 0.6,
    weightkg: 6.5,
    color: "White",
    eggGroups: ["Undiscovered"],
    exclusiveHidden: true
  },
  genesect: {
    inherit: true,
    abilities: { 0: "Download", H: "Battle Armor" },
    isNonstandard: null
  },
  genesectdouse: {
    inherit: true,
    abilities: { 0: "Download", H: "Battle Armor" },
    isNonstandard: null
  },
  genesectshock: {
    inherit: true,
    abilities: { 0: "Download", H: "Battle Armor" },
    isNonstandard: null
  },
  genesectburn: {
    inherit: true,
    abilities: { 0: "Download", H: "Battle Armor" },
    isNonstandard: null
  },
  genesectchill: {
    inherit: true,
    abilities: { 0: "Download", H: "Battle Armor" },
    isNonstandard: null
  },
  greninja: {
    inherit: true,
    abilities: { 0: "Torrent", H: "Protean" }
  },
  florges: {
    inherit: true,
    baseStats: { hp: 74, atk: 65, def: 68, spa: 112, spd: 154, spe: 72 }
  },
  furfrou: {
    inherit: true,
    abilities: { 0: "Fur Coat", H: "Majesty" },
    isNonstandard: null
  },
  espurr: {
    inherit: true,
    abilities: { 0: "Own Tempo", 1: "Infiltrator", H: "Keen Eye" }
  },
  meowsticf: {
    inherit: true,
    abilities: { 0: "Competitive", 1: "Infiltrator", H: "Opportunist" }
  },
  meowstic: {
    inherit: true,
    abilities: { 0: "Prankster", 1: "Infiltrator", H: "Opportunist" }
  },
  spritzee: {
    inherit: true,
    abilities: { 0: "Healer", 1: "Aroma Veil", H: "Misty Shroud" },
    isNonstandard: null
  },
  aromatisse: {
    inherit: true,
    abilities: { 0: "Healer", 1: "Aroma Veil", H: "Misty Shroud" },
    isNonstandard: null
  },
  doublade: {
    inherit: true,
    baseStats: { hp: 59, atk: 110, def: 140, spa: 45, spd: 49, spe: 35 },
    isNonstandard: null
  },
  skrelp: {
    inherit: true,
    abilities: { 0: "Corrosion", 1: "Poison Touch", H: "Potency" }
  },
  dragalge: {
    inherit: true,
    abilities: { 0: "Corrosion", 1: "Poison Touch", H: "Potency" }
  },
  tyrunt: {
    inherit: true,
    abilities: { 0: "Strong Jaw", H: "Anger Point" },
    isNonstandard: null
  },
  tyrantrum: {
    inherit: true,
    abilities: { 0: "Strong Jaw", H: "Majesty" },
    isNonstandard: null
  },
  goomy: {
    inherit: true,
    abilities: { 0: "Liquid Ooze", 1: "Hydration", H: "Gooey" }
  },
  sliggoo: {
    inherit: true,
    abilities: { 0: "Liquid Ooze", 1: "Hydration", H: "Gooey" }
  },
  sliggoohisui: {
    inherit: true,
    types: ["Dragon", "Steel"],
    abilities: { 0: "Liquid Ooze", 1: "Shell Armor", H: "Gooey" }
  },
  goodra: {
    inherit: true,
    abilities: { 0: "Liquid Ooze", 1: "Hydration", H: "Gooey" }
  },
  goodrahisui: {
    inherit: true,
    types: ["Dragon", "Steel"],
    abilities: { 0: "Liquid Ooze", 1: "Shell Armor", H: "Gooey" }
  },
  pumpkaboosmall: {
    inherit: true,
    abilities: { 0: "Pickup", 1: "Insomnia", H: "Flare Boost" },
    isNonstandard: null
  },
  pumpkaboo: {
    inherit: true,
    abilities: { 0: "Pickup", 1: "Insomnia", H: "Flare Boost" },
    isNonstandard: null
  },
  pumpkaboolarge: {
    inherit: true,
    abilities: { 0: "Pickup", 1: "Insomnia", H: "Flare Boost" },
    isNonstandard: null
  },
  pumpkaboosuper: {
    inherit: true,
    abilities: { 0: "Pickup", 1: "Insomnia", H: "Flare Boost" },
    isNonstandard: null
  },
  gourgeistsmall: {
    inherit: true,
    abilities: { 0: "Pickup", 1: "Insomnia", H: "Flare Boost" },
    isNonstandard: null
  },
  gourgeist: {
    inherit: true,
    abilities: { 0: "Pickup", 1: "Insomnia", H: "Flare Boost" },
    isNonstandard: null
  },
  gourgeistlarge: {
    inherit: true,
    abilities: { 0: "Pickup", 1: "Insomnia", H: "Flare Boost" },
    isNonstandard: null
  },
  gourgeistsuper: {
    inherit: true,
    abilities: { 0: "Pickup", 1: "Insomnia", H: "Flare Boost" },
    isNonstandard: null
  },
  bergmite: {
    inherit: true,
    abilities: { 0: "Weak Armor", 1: "Ice Body", H: "Sturdy" }
  },
  avalugg: {
    inherit: true,
    abilities: { 0: "Stalwart", 1: "Ice Body", H: "Sturdy" }
  },
  avalugghisui: {
    inherit: true,
    abilities: { 0: "Ice Breaker", 1: "Ice Body", H: "Sturdy" }
  },
  diancie: {
    inherit: true,
    abilities: { 0: "Clear Body", H: "Sturdy" }
  },
  hoopa: {
    inherit: true,
    abilities: { 0: "Magician", H: "Pickpocket" },
    exclusiveMoves: ["Hyperspace Hole"]
  },
  hoopaunbound: {
    inherit: true,
    abilities: { 0: "Magician", H: "Pickpocket" }
  },
  volcanion: {
    inherit: true,
    abilities: { 0: "Water Absorb", H: "Steam Engine" }
  },
  grubbin: {
    inherit: true,
    abilities: { 0: "Swarm", H: "Hyper Cutter" }
  },
  charjabug: {
    inherit: true,
    abilities: { 0: "Battery", H: "Volt Absorb" }
  },
  vikavolt: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Volt Absorb" }
  },
  oricoriopompom: {
    inherit: true,
    abilities: { 0: "Dancer", H: "Co-Star" },
    exclusiveHidden: true
  },
  oricoriopau: {
    inherit: true,
    abilities: { 0: "Dancer", H: "Co-Star" },
    exclusiveHidden: true
  },
  oricorio: {
    inherit: true,
    abilities: { 0: "Dancer", H: "Co-Star" }
  },
  oricoriosensu: {
    inherit: true,
    abilities: { 0: "Dancer", H: "Co-Star" },
    exclusiveHidden: true
  },
  rockruff: {
    num: 744,
    name: "Rockruff",
    types: ["Rock"],
    baseStats: { hp: 45, atk: 65, def: 40, spa: 30, spd: 40, spe: 60 },
    abilities: { 0: "Keen Eye", 1: "Vital Spirit", H: "Steadfast" },
    heightm: 0.5,
    weightkg: 9.2,
    color: "Brown",
    evos: ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Twilight"],
    eggGroups: ["Field"]
  },
  lycanroctwilight: {
    num: 745,
    name: "Lycanroc-Twilight",
    baseSpecies: "Lycanroc",
    forme: "Twilight",
    types: ["Rock"],
    baseStats: { hp: 80, atk: 115, def: 70, spa: 55, spd: 70, spe: 97 },
    abilities: { 0: "Keen Eye", 1: "Tough Claws", H: "Own Tempo" },
    heightm: 0.8,
    weightkg: 25,
    color: "Brown",
    prevo: "Rockruff",
    evoLevel: 25,
    evoCondition: "at dawn or dusk",
    eggGroups: ["Field"]
  },
  mareanie: {
    inherit: true,
    abilities: { 0: "Merciless", 1: "Poison Point", H: "Regenerator" }
  },
  toxapex: {
    inherit: true,
    abilities: { 0: "Merciless", 1: "Poison Point", H: "Regenerator" }
  },
  wimpod: {
    inherit: true,
    abilities: { 0: "Escape Plan", H: "Run Away" },
    isNonstandard: null
  },
  golisopod: {
    inherit: true,
    abilities: { 0: "Escape Plan", H: "Battle Armor" },
    isNonstandard: null
  },
  turtonator: {
    inherit: true,
    abilities: { 0: "Shell Armor", H: "Aftermath" },
    isNonstandard: null
  },
  dhelmise: {
    inherit: true,
    abilities: { 0: "Steelworker", H: "Tangling" },
    isNonstandard: null
  },
  cosmog: {
    inherit: true,
    abilities: { 0: "Unaware", H: "Moody" }
  },
  cosmoem: {
    inherit: true,
    abilities: { 0: "Sturdy", H: "Supermassive" }
  },
  solgaleo: {
    inherit: true,
    abilities: { 0: "Full Metal Body", H: "Unnerve" },
    evoCondition: "in Pokemon Earth"
  },
  lunala: {
    inherit: true,
    abilities: { 0: "Shadow Shield", H: "Infiltrator" },
    evoCondition: "in Pokemon Sky"
  },
  nihilego: {
    inherit: true,
    abilities: { 0: "Beast Boost", H: "Clear Body" },
    isNonstandard: null
  },
  buzzwole: {
    inherit: true,
    abilities: { 0: "Beast Boost", H: "No Guard" },
    isNonstandard: null
  },
  pheromosa: {
    inherit: true,
    abilities: { 0: "Beast Boost", H: "Battle Armor" },
    isNonstandard: null
  },
  xurkitree: {
    inherit: true,
    abilities: { 0: "Beast Boost", H: "Lightning Rod" },
    isNonstandard: null
  },
  celesteela: {
    inherit: true,
    abilities: { 0: "Beast Boost", H: "Sturdy" },
    isNonstandard: null
  },
  kartana: {
    inherit: true,
    abilities: { 0: "Beast Boost", H: "Limber" },
    isNonstandard: null
  },
  guzzlord: {
    inherit: true,
    baseStats: { hp: 223, atk: 109, def: 59, spa: 97, spd: 59, spe: 43 },
    abilities: { 0: "Beast Boost", H: "Gluttony" },
    isNonstandard: null
  },
  necrozmaduskmane: {
    inherit: true,
    baseStats: { hp: 97, atk: 157, def: 127, spa: 113, spd: 107, spe: 79 },
    exclusiveHidden: true
  },
  necrozmadawnwings: {
    inherit: true,
    baseStats: { hp: 97, atk: 113, def: 107, spa: 157, spd: 127, spe: 79 },
    exclusiveHidden: true
  },
  necrozmaultra: {
    inherit: true,
    baseStats: { hp: 97, atk: 167, def: 97, spa: 167, spd: 97, spe: 127 },
    isNonstandard: null
  },
  marshadow: {
    inherit: true,
    abilities: { 0: "Technician", H: "Shadow Tag" },
    isNonstandard: null
  },
  poipole: {
    inherit: true,
    abilities: { 0: "Beast Boost", H: "Corrosion" },
    isNonstandard: null
  },
  naganadel: {
    inherit: true,
    baseStats: { hp: 71, atk: 83, def: 73, spa: 127, spd: 73, spe: 113 },
    abilities: { 0: "Beast Boost", H: "Corrosion" },
    isNonstandard: null
  },
  stakataka: {
    inherit: true,
    abilities: { 0: "Beast Boost", H: "Stalwart" },
    isNonstandard: null
  },
  blacephalon: {
    inherit: true,
    abilities: { 0: "Beast Boost", H: "Own Tempo" },
    isNonstandard: null
  },
  zeraora: {
    inherit: true,
    abilities: { 0: "Volt Absorb", H: "Relentless" },
    isNonstandard: null
  },
  meltan: {
    inherit: true,
    abilities: { 0: "Magnet Pull", H: "Clear Body" },
    evos: ["Melmetal"],
    isNonstandard: null
  },
  melmetal: {
    inherit: true,
    abilities: { 0: "Iron Fist", H: "Clear Body" },
    prevo: "Meltan",
    evoType: "levelExtra",
    evoCondition: "400 Spare Parts in bag",
    isNonstandard: null
  },
  grookey: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Cacophony" }
  },
  thwackey: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Cacophony" }
  },
  rillaboom: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Cacophony" }
  },
  scorbunny: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Receiver" }
  },
  raboot: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Receiver" }
  },
  cinderace: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Receiver" }
  },
  sobble: {
    inherit: true,
    abilities: { 0: "Torrent", H: "Rattled" }
  },
  drizzile: {
    inherit: true,
    abilities: { 0: "Torrent", H: "Technician" }
  },
  inteleon: {
    inherit: true,
    abilities: { 0: "Torrent", H: "Technician" }
  },
  rookidee: {
    inherit: true,
    abilities: { 0: "Keen Eye", 1: "Disturbance", H: "Big Pecks" }
  },
  corvisquire: {
    inherit: true,
    abilities: { 0: "Keen Eye", 1: "Disturbance", H: "Big Pecks" }
  },
  corviknight: {
    inherit: true,
    abilities: { 0: "Pressure", 1: "Unnerve", H: "Clear Body" }
  },
  blipbug: {
    inherit: true,
    abilities: { 0: "Frisk", 1: "Compound Eyes", H: "Telepathy" },
    isNonstandard: null
  },
  dottler: {
    inherit: true,
    abilities: { 0: "Frisk", 1: "Compound Eyes", H: "Telepathy" },
    isNonstandard: null
  },
  orbeetle: {
    inherit: true,
    abilities: { 0: "Frisk", 1: "Compound Eyes", H: "Telepathy" },
    isNonstandard: null
  },
  nickit: {
    inherit: true,
    abilities: { 0: "Pickpocket", 1: "Unburden", H: "Stakeout" },
    isNonstandard: null
  },
  thievul: {
    inherit: true,
    abilities: { 0: "Pickpocket", 1: "Unburden", H: "Stakeout" },
    isNonstandard: null
  },
  chewtle: {
    inherit: true,
    abilities: { 0: "Strong Jaw", 1: "Shell Armor", H: "Stalwart" }
  },
  drednaw: {
    inherit: true,
    abilities: { 0: "Strong Jaw", 1: "Shell Armor", H: "Stalwart" }
  },
  boltund: {
    inherit: true,
    abilities: { 0: "Relentless", H: "Competitive" },
    isNonstandard: null
  },
  rolycoly: {
    inherit: true,
    abilities: { 0: "Steam Engine", 1: "Heatproof", H: "Heat Sink" }
  },
  carkol: {
    inherit: true,
    abilities: { 0: "Steam Engine", 1: "Flame Body", H: "Heat Sink" }
  },
  coalossal: {
    inherit: true,
    abilities: { 0: "Steam Engine", 1: "Flame Body", H: "Heat Sink" }
  },
  applin: {
    inherit: true,
    abilities: { 0: "Ripen", 1: "Gluttony", H: "Overcoat" }
  },
  appletun: {
    inherit: true,
    baseStats: { hp: 110, atk: 80, def: 80, spa: 105, spd: 80, spe: 30 }
  },
  arrokuda: {
    inherit: true,
    abilities: { 0: "Swift Swim", H: "Against Current" }
  },
  barraskewda: {
    inherit: true,
    abilities: { 0: "Swift Swim", H: "Against Current" }
  },
  toxtricity: {
    inherit: true,
    abilities: { 0: "Cacophony", 1: "Induction", H: "Technician" }
  },
  toxtricitylowkey: {
    inherit: true,
    abilities: { 0: "Cacophony", 1: "Induction", H: "Technician" }
  },
  sizzlipede: {
    inherit: true,
    abilities: { 0: "Heat Sink", 1: "White Smoke", H: "Flame Body" },
    isNonstandard: null
  },
  centiskorch: {
    inherit: true,
    abilities: { 0: "Heat Sink", 1: "White Smoke", H: "Flame Body" },
    isNonstandard: null
  },
  clobbopus: {
    inherit: true,
    abilities: { 0: "Limber", 1: "Suction Cups", H: "Technician" },
    isNonstandard: null
  },
  grapploct: {
    inherit: true,
    abilities: { 0: "Limber", 1: "Suction Cups", H: "Technician" },
    isNonstandard: null
  },
  hatenna: {
    inherit: true,
    abilities: { 0: "Healer", 1: "Forewarn", H: "Magic Bounce" }
  },
  hattrem: {
    inherit: true,
    abilities: { 0: "Healer", 1: "Forewarn", H: "Magic Bounce" }
  },
  hatterene: {
    inherit: true,
    abilities: { 0: "Healer", 1: "Forewarn", H: "Magic Bounce" }
  },
  perrserker: {
    inherit: true,
    abilities: { 0: "Battle Armor", 1: "Tough Claws", H: "Iron Barbs" },
    baseStats: { hp: 65, atk: 110, def: 100, spa: 50, spd: 65, spe: 50 }
  },
  cursola: {
    inherit: true,
    types: ["Ghost", "Rock"],
    abilities: { 0: "Weak Armor", H: "Cursed Body" },
    isNonstandard: null
  },
  sirfetchd: {
    inherit: true,
    abilities: { 0: "Steadfast", 1: "Justified", H: "Scrappy" },
    isNonstandard: null
  },
  mrrime: {
    inherit: true,
    types: ["Psychic", "Ice"],
    abilities: { 0: "Tangled Feet", 1: "Clean House", H: "Ice Body" },
    isNonstandard: null
  },
  milcery: {
    inherit: true,
    abilities: { 0: "Sweet Veil", H: "Alchemy" }
  },
  alcremie: {
    inherit: true,
    abilities: { 0: "Sweet Veil", H: "Alchemy" },
    otherFormes: ["Alcremie-Mega"],
    formeOrder: ["Alcremie", "Alcremie-Mega"],
    evoCondition: "use mixing machine while holding a Sweet",
    evoLevel: 20
  },
  pincurchin: {
    inherit: true,
    abilities: { 0: "Lightning Rod", H: "Static" }
  },
  indeedee: {
    inherit: true,
    abilities: { 0: "Inner Focus", 1: "Synchronize", H: "Clean House" },
    otherFormes: ["Indeedee-F", "Indeedee-Hassrim", "Indeedee-Hassrim-F"],
    formeOrder: ["Indeedee", "Indeedee-F", "Indeedee-Hassrim", "Indeedee-Hassrim-F"]
  },
  indeedeef: {
    inherit: true,
    abilities: { 0: "Own Tempo", 1: "Synchronize", H: "Clean House" }
  },
  duraludon: {
    inherit: true,
    baseStats: { hp: 70, atk: 95, def: 110, spa: 115, spd: 45, spe: 75 }
  },
  zacian: {
    inherit: true,
    baseStats: { hp: 92, atk: 110, def: 115, spa: 80, spd: 115, spe: 118 }
  },
  zaciancrowned: {
    inherit: true,
    baseStats: { hp: 92, atk: 150, def: 115, spa: 80, spd: 115, spe: 128 }
  },
  zamazenta: {
    inherit: true,
    baseStats: { hp: 92, atk: 110, def: 115, spa: 80, spd: 115, spe: 118 }
  },
  zamazentacrowned: {
    inherit: true,
    baseStats: { hp: 92, atk: 110, def: 145, spa: 80, spd: 145, spe: 108 }
  },
  eternatus: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Unnerve" },
    baseStats: { hp: 140, atk: 90, def: 100, spa: 145, spd: 100, spe: 115 }
  },
  kubfu: {
    inherit: true,
    abilities: { 0: "Relentless", H: "No Guard" }
  },
  urshifu: {
    inherit: true,
    abilities: { 0: "Iron Fist", H: "No Guard" },
    evoLevel: 50,
    evoType: "useItem",
    evoItem: "Scroll of Darkness"
  },
  urshifurapidstrike: {
    inherit: true,
    abilities: { 0: "Iron Fist", H: "No Guard" },
    evoLevel: 50,
    evoType: "useItem",
    evoItem: "Scroll of Waters"
  },
  zarude: {
    name: "Zarude",
    num: 893,
    types: ["Dark", "Grass"],
    gender: "N",
    baseStats: { hp: 105, atk: 120, def: 105, spa: 70, spd: 95, spe: 105 },
    abilities: { 0: "Leaf Guard", H: "Unburden" },
    heightm: 1.8,
    weightkg: 70,
    color: "Black",
    eggGroups: ["Undiscovered"]
  },
  regieleki: {
    inherit: true,
    abilities: { 0: "Clear Body", H: "Vital Spirit" }
  },
  regidrago: {
    inherit: true,
    abilities: { 0: "Clear Body", H: "Inner Focus" }
  },
  glastrier: {
    inherit: true,
    abilities: { 0: "Ice Body", H: "Ice Breaker" }
  },
  spectrier: {
    inherit: true,
    abilities: { 0: "Cursed Body", H: "Soul Drain" }
  },
  calyrex: {
    inherit: true,
    abilities: { 0: "Unnerve", H: "Majesty" }
  },
  calyrexice: {
    inherit: true,
    abilities: { 0: "As One S-S", 1: "As One S-H", H: "As One H-S", S: "As One H-H" }
  },
  calyrexshadow: {
    inherit: true,
    abilities: { 0: "As One S-S", 1: "As One S-H", H: "As One H-S", S: "As One H-H" }
  },
  wyrdeer: {
    inherit: true,
    baseStats: { hp: 93, atk: 105, def: 62, spa: 105, spd: 75, spe: 85 },
    abilities: { 0: "Fur Coat", 1: "Frisk", H: "Sap Sipper" },
    evoType: "levelMove",
    evoMove: "Barrier Bash",
    evoCondition: null
  },
  kleavor: {
    inherit: true,
    baseStats: { hp: 70, atk: 130, def: 100, spa: 55, spd: 60, spe: 85 },
    evoType: "trade",
    evoItem: "Black Augurite",
    evoCondition: null
  },
  ursaluna: {
    num: 901,
    name: "Ursaluna",
    types: ["Normal", "Ground"],
    baseStats: { hp: 125, atk: 140, def: 105, spa: 45, spd: 75, spe: 55 },
    abilities: { 0: "Guts", 1: "Overcoat", H: "Unnerve" },
    heightm: 2.4,
    weightkg: 290,
    color: "Brown",
    prevo: "Ursaring",
    evoType: "useItem",
    evoItem: "Peat Block",
    evoCondition: "Between 11 PM and 1 AM",
    eggGroups: ["Field"]
  },
  basculegionf: {
    inherit: true,
    abilities: { 0: "Tireless", 1: "Adaptability", H: "Mold Breaker" }
  },
  basculegion: {
    inherit: true,
    abilities: { 0: "Tireless", 1: "Adaptability", H: "Mold Breaker" }
  },
  sneasler: {
    inherit: true,
    abilities: { 0: "Unburden", H: "Poison Touch" }
  },
  overqwil: {
    inherit: true,
    abilities: { 0: "Poison Point", 1: "Poison Touch", H: "Disturbance" },
    evoType: "levelMove",
    evoMove: "Barb Barrage",
    evoCondition: null
  },
  enamorus: {
    inherit: true,
    baseStats: { hp: 69, atk: 105, def: 70, spa: 135, spd: 100, spe: 121 }
  },
  enamorustherian: {
    inherit: true,
    baseStats: { hp: 69, atk: 85, def: 100, spa: 115, spd: 130, spe: 101 }
  },
  sprigatito: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Magician" }
  },
  floragato: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Magician" }
  },
  meowscarada: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Magician" }
  },
  fuecoco: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Cloud Nine" }
  },
  crocalor: {
    inherit: true,
    baseStats: { hp: 81, atk: 55, def: 78, spa: 90, spd: 58, spe: 48 },
    abilities: { 0: "Blaze", H: "Cloud Nine" }
  },
  skeledirge: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Cloud Nine" }
  },
  oinkologne: {
    inherit: true,
    abilities: { 0: "Aroma Veil", 1: "Gluttony", H: "Thick Fat" }
  },
  tarountula: {
    inherit: true,
    abilities: { 0: "Insomnia", 1: "Overcoat", H: "Fluffy" }
  },
  spidops: {
    inherit: true,
    abilities: { 0: "Insomnia", 1: "Analytic", H: "Stakeout" }
  },
  dachsbun: {
    inherit: true,
    abilities: { 0: "Heatproof", H: "Aroma Veil" }
  },
  tandemaus: {
    inherit: true,
    abilities: { 0: "Friend Guard", 1: "Cheek Pouch", H: "Pickup" }
  },
  maushold: {
    inherit: true,
    abilities: { 0: "Friend Guard", 1: "Cheek Pouch", H: "Clean House" }
  },
  mausholdfour: {
    inherit: true,
    abilities: { 0: "Friend Guard", 1: "Cheek Pouch", H: "Clean House" }
  },
  squawkabilly: {
    inherit: true,
    abilities: { 0: "Cacophony", 1: "Hustle", H: "Intimidate" },
    evos: ["Squawkapo"]
  },
  squawkabillyblue: {
    inherit: true,
    abilities: { 0: "Cacophony", 1: "Hustle", H: "Rivalry" },
    evos: ["Squawkapo-Blue"]
  },
  squawkabillyyellow: {
    inherit: true,
    abilities: { 0: "Cacophony", 1: "Hustle", H: "Guts" },
    evos: ["Squawkapo-Yellow"]
  },
  squawkabillywhite: {
    inherit: true,
    abilities: { 0: "Cacophony", 1: "Hustle", H: "Defiant" },
    evos: ["Squawkapo-White"]
  },
  charcadet: {
    inherit: true,
    abilities: { 0: "Flash Fire", 1: "Flame Body", H: "Steadfast" }
  },
  armarouge: {
    inherit: true,
    abilities: { 0: "Flash Fire", 1: "Weak Armor", H: "Mega Launcher" },
    evoType: "trade"
  },
  ceruledge: {
    inherit: true,
    abilities: { 0: "Flash Fire", 1: "Weak Armor", H: "Sharpness" },
    evoType: "trade"
  },
  tadbulb: {
    inherit: true,
    abilities: { 0: "Illuminate", 1: "Static", H: "Damp" }
  },
  shroodle: {
    inherit: true,
    abilities: { 0: "Unburden", 1: "Poison Touch", H: "Prankster" }
  },
  toedscool: {
    inherit: true,
    abilities: { 0: "Mycelium Might", H: "Poison Heal" }
  },
  toedscruel: {
    inherit: true,
    abilities: { 0: "Mycelium Might", H: "Poison Heal" }
  },
  klawf: {
    inherit: true,
    abilities: { 0: "Berserk", 1: "Shell Armor", H: "Regenerator" }
  },
  rellor: {
    inherit: true,
    abilities: { 0: "Own Tempo", H: "Shed Skin" }
  },
  rabsca: {
    inherit: true,
    abilities: { 0: "Synchronize", H: "Telepathy" }
  },
  flittle: {
    inherit: true,
    abilities: { 0: "Wonder Skin", 1: "Frisk", H: "Speed Boost" }
  },
  tinkatuff: {
    inherit: true,
    abilities: { 0: "Mold Breaker", 1: "Bludgeon", H: "Pickpocket" }
  },
  tinkaton: {
    inherit: true,
    abilities: { 0: "Mold Breaker", 1: "Bludgeon", H: "Pickpocket" }
  },
  wiglett: {
    inherit: true,
    abilities: { 0: "Limber", 1: "Rattled", H: "Sand Veil" }
  },
  wugtrio: {
    inherit: true,
    abilities: { 0: "Limber", 1: "Rattled", H: "Sand Veil" }
  },
  palafinhero: {
    inherit: true,
    baseStats: { hp: 100, atk: 70, def: 72, spa: 53, spd: 62, spe: 100 }
  },
  varoom: {
    inherit: true,
    abilities: { 0: "Overcoat", H: "Stall" }
  },
  revavroom: {
    inherit: true,
    abilities: { 0: "Overcoat", H: "Stalwart" },
    exclusiveMoves: ["Gunk Shot", "Poison Gas", "Poison Jab", "Sludge Bomb", "Smog"],
    otherFormes: ["Revavroom-Segin", "Revavroom-Schedar", "Revavroom-Navi", "Revavroom-Ruchbah", "Revavroom-Caph"],
    formeOrder: ["Revavroom", "Revavroom-Segin", "Revavroom-Schedar", "Revavroom-Navi", "Revavroom-Ruchbah", "Revavroom-Caph"]
  },
  annihilape: {
    inherit: true,
    abilities: { 0: "Vital Spirit", 1: "Relentless", H: "Defiant" },
    evoType: "other",
    evoCondition: "have Attack raised 20 stages by other Pokemon"
  },
  clodsire: {
    inherit: true,
    baseStats: { hp: 95, atk: 85, def: 65, spa: 65, spd: 85, spe: 35 }
  },
  farigiraf: {
    inherit: true,
    baseStats: { hp: 120, atk: 90, def: 70, spa: 110, spd: 70, spe: 65 },
    abilities: { 0: "Inner Focus", 1: "Long Reach", H: "Sap Sipper" },
    evoMove: "Barrier Bash"
  },
  dudunsparce: {
    inherit: true,
    baseStats: { hp: 115, atk: 85, def: 75, spa: 75, spd: 70, spe: 50 },
    evoType: "levelMove",
    evoMove: "Escape Tunnel",
    eggGroups: ["Field", "Dragon"]
  },
  dudunsparcethreesegment: {
    inherit: true,
    baseStats: { hp: 130, atk: 100, def: 80, spa: 85, spd: 75, spe: 55 },
    evoType: "levelMove",
    evoMove: "Escape Tunnel",
    eggGroups: ["Field", "Dragon"]
  },
  kingambit: {
    inherit: true,
    baseStats: { hp: 100, atk: 135, def: 120, spa: 60, spd: 80, spe: 50 },
    abilities: { 0: "Defiant", 1: "Sharpness", H: "Pressure" },
    evoCondition: "Defeat 4 Bisharp holding Leader's Crests in one day and level-up"
  },
  greattusk: {
    inherit: true,
    abilities: { 0: "Protosynthesis", H: "Sand Veil" }
  },
  screamtail: {
    inherit: true,
    abilities: { 0: "Protosynthesis", H: "Frisk" }
  },
  brutebonnet: {
    inherit: true,
    abilities: { 0: "Protosynthesis", H: "Effect Spore" }
  },
  fluttermane: {
    inherit: true,
    abilities: { 0: "Protosynthesis", H: "Levitate" }
  },
  slitherwing: {
    inherit: true,
    abilities: { 0: "Protosynthesis", H: "Swarm" }
  },
  sandyshocks: {
    inherit: true,
    abilities: { 0: "Protosynthesis", H: "Magnet Pull" }
  },
  irontreads: {
    inherit: true,
    abilities: { 0: "Quark Drive", H: "Sturdy" }
  },
  robobundle: {
    num: 991,
    name: "Robo Bundle",
    types: ["Ice", "Water"],
    gender: "N",
    baseStats: { hp: 56, atk: 80, def: 114, spa: 124, spd: 60, spe: 136 },
    abilities: { 0: "Quark Drive", H: "Vital Spirit" },
    heightm: 0.6,
    weightkg: 11,
    color: "Red",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  presshands: {
    num: 992,
    name: "Press Hands",
    types: ["Fighting", "Electric"],
    gender: "N",
    baseStats: { hp: 154, atk: 140, def: 108, spa: 50, spd: 68, spe: 50 },
    abilities: { 0: "Quark Drive", H: "Sheer Force" },
    heightm: 1.8,
    weightkg: 380.7,
    color: "Gray",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  mechajugulis: {
    num: 993,
    name: "Mecha Jugulis",
    types: ["Dark", "Flying"],
    gender: "N",
    baseStats: { hp: 94, atk: 80, def: 86, spa: 122, spd: 80, spe: 108 },
    abilities: { 0: "Quark Drive", H: "Competitive" },
    heightm: 1.3,
    weightkg: 111,
    color: "Blue",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  astroglider: {
    num: 994,
    name: "Astro Glider",
    types: ["Fire", "Poison"],
    gender: "N",
    baseStats: { hp: 80, atk: 70, def: 60, spa: 140, spd: 110, spe: 110 },
    abilities: { 0: "Quark Drive", H: "Flame Body" },
    heightm: 1.2,
    weightkg: 36,
    color: "Orange",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  armorthorns: {
    num: 995,
    name: "Armor Thorns",
    types: ["Rock", "Electric"],
    gender: "N",
    baseStats: { hp: 100, atk: 134, def: 110, spa: 70, spd: 84, spe: 72 },
    abilities: { 0: "Quark Drive", H: "Unnerve" },
    heightm: 1.6,
    weightkg: 303,
    color: "Green",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  arctibax: {
    inherit: true,
    abilities: { 0: "Thermal Exchange", H: "Ice Breaker" }
  },
  baxcalibur: {
    inherit: true,
    abilities: { 0: "Thermal Exchange", H: "Ice Breaker" }
  },
  gholdengo: {
    inherit: true,
    types: ["Ghost", "Steel"],
    exclusiveHidden: true,
    evoType: "levelExtra",
    evoCondition: "999 Gimmighoul Coins in bag"
  },
  roaringmoon: {
    inherit: true,
    abilities: { 0: "Protosynthesis", H: "Intimidate" }
  },
  valiantdroid: {
    num: 1006,
    name: "Valiant Droid",
    types: ["Fairy", "Fighting"],
    gender: "N",
    baseStats: { hp: 74, atk: 130, def: 90, spa: 120, spd: 60, spe: 116 },
    abilities: { 0: "Quark Drive", H: "Sharpness" },
    heightm: 1.4,
    weightkg: 35,
    color: "White",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  koraidon: {
    inherit: true,
    abilities: { 0: "Orichalcum Pulse", H: "Protosynthesis" }
  },
  miraidon: {
    inherit: true,
    abilities: { 0: "Hadron Engine", H: "Quark Drive" }
  },
  walkingwake: {
    inherit: true,
    abilities: { 0: "Protosynthesis", H: "Storm Drain" }
  },
  saberleaves: {
    num: 1010,
    name: "Saber Leaves",
    types: ["Grass", "Psychic"],
    gender: "N",
    baseStats: { hp: 90, atk: 130, def: 88, spa: 70, spd: 108, spe: 104 },
    abilities: { 0: "Quark Drive", H: "Quick Feet" },
    heightm: 1.5,
    weightkg: 125,
    color: "Green",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  dipplin: {
    inherit: true,
    baseStats: { hp: 90, atk: 80, def: 110, spa: 85, spd: 90, spe: 30 },
    abilities: { 0: "Sweet Veil", 1: "Gluttony", H: "Sticky Hold" }
  },
  okidogi: {
    inherit: true,
    tags: ["Sub-Legendary"]
  },
  munkidori: {
    inherit: true,
    tags: ["Sub-Legendary"]
  },
  fezandipiti: {
    inherit: true,
    abilities: { 0: "Toxic Chain", H: "Levitate" },
    tags: ["Sub-Legendary"]
  },
  ogerpon: {
    num: 1017,
    name: "Ogerpon",
    baseForme: "Teal",
    types: ["Grass"],
    gender: "F",
    baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
    abilities: { 0: "Defiant", H: "Embody Aspect" },
    heightm: 1.2,
    weightkg: 39.8,
    color: "Green",
    eggGroups: ["Undiscovered"],
    tags: ["Sub-Legendary"],
    otherFormes: ["Ogerpon-Wellspring", "Ogerpon-Hearthflame", "Ogerpon-Cornerstone"],
    formeOrder: ["Ogerpon", "Ogerpon-Wellspring", "Ogerpon-Hearthflame", "Ogerpon-Cornerstone"]
  },
  ogerponwellspring: {
    num: 1017,
    name: "Ogerpon-Wellspring",
    baseSpecies: "Ogerpon",
    forme: "Wellspring",
    types: ["Grass", "Water"],
    gender: "F",
    baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
    abilities: { 0: "Water Absorb", H: "Embody Aspect" },
    heightm: 1.2,
    weightkg: 39.8,
    color: "Green",
    eggGroups: ["Undiscovered"],
    tags: ["Sub-Legendary"],
    requiredItem: "Wellspring Mask",
    changesFrom: "Ogerpon",
    exclusiveHidden: true
  },
  ogerponhearthflame: {
    num: 1017,
    name: "Ogerpon-Hearthflame",
    baseSpecies: "Ogerpon",
    forme: "Hearthflame",
    types: ["Grass", "Fire"],
    gender: "F",
    baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
    abilities: { 0: "Mold Breaker", H: "Embody Aspect" },
    heightm: 1.2,
    weightkg: 39.8,
    color: "Red",
    eggGroups: ["Undiscovered"],
    tags: ["Sub-Legendary"],
    requiredItem: "Hearthflame Mask",
    changesFrom: "Ogerpon",
    exclusiveHidden: true
  },
  ogerponcornerstone: {
    num: 1017,
    name: "Ogerpon-Cornerstone",
    baseSpecies: "Ogerpon",
    forme: "Cornerstone",
    types: ["Grass", "Rock"],
    gender: "F",
    baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
    abilities: { 0: "Rock Head", H: "Embody Aspect" },
    heightm: 1.2,
    weightkg: 39.8,
    color: "Gray",
    eggGroups: ["Undiscovered"],
    tags: ["Sub-Legendary"],
    requiredItem: "Cornerstone Mask",
    changesFrom: "Ogerpon",
    exclusiveHidden: true
  },
  hydrapple: {
    inherit: true,
    baseStats: { hp: 116, atk: 80, def: 110, spa: 120, spd: 80, spe: 34 },
    abilities: { 0: "Sweet Veil", 1: "Regenerator", H: "Sticky Hold" },
    evoMove: "Shelter"
  },
  gougingfire: {
    inherit: true,
    abilities: { 0: "Protosynthesis", H: "Heat Sink" },
    tags: ["Paradox"]
  },
  ragingbolt: {
    inherit: true,
    abilities: { 0: "Protosynthesis", H: "Lightning Rod" },
    tags: ["Paradox"]
  },
  powerchassis: {
    num: 1022,
    name: "Power Chassis",
    types: ["Rock", "Psychic"],
    gender: "N",
    baseStats: { hp: 90, atk: 120, def: 80, spa: 68, spd: 108, spe: 124 },
    abilities: { 0: "Quark Drive", H: "Mold Breaker" },
    heightm: 1.5,
    weightkg: 162.5,
    color: "Gray",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  lasercrown: {
    num: 1023,
    name: "Laser Crown",
    types: ["Steel", "Psychic"],
    gender: "N",
    baseStats: { hp: 90, atk: 72, def: 100, spa: 122, spd: 108, spe: 98 },
    abilities: { 0: "Quark Drive", H: "Stalwart" },
    heightm: 1.6,
    weightkg: 156,
    color: "Blue",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  pecharunt: {
    inherit: true,
    abilities: { 0: "Poison Puppeteer", H: "Toxic Chain" }
  },
  /* Evolution/Forme Exclusive Hidden Moves */
  jynx: {
    inherit: true,
    exclusiveHidden: true,
    isNonstandard: null
  },
  shedinja: {
    inherit: true,
    exclusiveHidden: true,
    isNonstandard: null
  },
  lucario: {
    inherit: true,
    exclusiveHidden: true
  },
  gurdurr: {
    inherit: true,
    exclusiveHidden: true
  },
  conkeldurr: {
    inherit: true,
    exclusiveHidden: true
  },
  accelgor: {
    inherit: true,
    exclusiveHidden: true,
    isNonstandard: null
  },
  tornadustherian: {
    inherit: true,
    exclusiveHidden: true
  },
  thundurustherian: {
    inherit: true,
    exclusiveHidden: true
  },
  landorustherian: {
    inherit: true,
    exclusiveHidden: true,
    color: "Orange"
  },
  gimmighoulroaming: {
    inherit: true,
    exclusiveHidden: true
  },
  /* Evo/Mega/Form Edits */
  butterfree: {
    inherit: true,
    otherFormes: ["Butterfree-Mega"],
    formeOrder: ["Butterfree", "Butterfree-Mega"],
    isNonstandard: null
  },
  ponyta: {
    inherit: true,
    otherFormes: ["Ponyta-Galar", "Ponyta-Egelas"],
    formeOrder: ["Ponyta", "Ponyta-Galar", "Ponyta-Egelas"],
    isNonstandard: null
  },
  rapidash: {
    inherit: true,
    otherFormes: ["Rapidash-Galar", "Rapidash-Egelas"],
    formeOrder: ["Rapidash", "Rapidash-Galar", "Rapidash-Egelas"],
    isNonstandard: null
  },
  farfetchd: {
    inherit: true,
    evos: ["Kendo\u2019no"],
    isNonstandard: null
  },
  cubone: {
    inherit: true,
    evos: ["Marowak"],
    otherFormes: ["Cubone-Egelas"],
    formeOrder: ["Cubone", "Cubone-Egelas"],
    isNonstandard: null
  },
  marowakalola: {
    inherit: true,
    prevo: "Cubone-Egelas",
    evoRegion: null,
    isNonstandard: null
  },
  tauros: {
    inherit: true,
    otherFormes: ["Tauros-Paldea-Combat", "Tauros-Paldea-Blaze", "Tauros-Paldea-Aqua", "Tauros-Egelas"],
    formeOrder: ["Tauros", "Tauros-Paldea-Combat", "Tauros-Paldea-Blaze", "Tauros-Paldea-Aqua", "Tauros-Egelas"]
  },
  hoothoot: {
    inherit: true,
    otherFormes: ["Hoothoot-Egelas"],
    formeOrder: ["Hoothoot", "Hoothoot-Egelas"]
  },
  noctowl: {
    inherit: true,
    otherFormes: ["Noctowl-Egelas"],
    formeOrder: ["Noctowl", "Noctowl-Egelas"]
  },
  slowking: {
    inherit: true,
    otherFormes: ["Slowking-Mega", "Slowking-Galar"],
    formeOrder: ["Slowking", "Slowking-Mega", "Slowking-Galar"]
  },
  octillery: {
    inherit: true,
    otherFormes: ["Octillery-Hassrim"],
    formeOrder: ["Octillery", "Octillery-Hassrim"],
    isNonstandard: null
  },
  miltank: {
    inherit: true,
    otherFormes: ["Miltank-Egelas"],
    formeOrder: ["Miltank", "Miltank-Egelas"],
    isNonstandard: null
  },
  torkoal: {
    inherit: true,
    abilities: { 0: "White Smoke", H: "Shell Armor" },
    eggGroups: ["Field", "Monster"],
    otherFormes: ["Torkoal-Mega"],
    formeOrder: ["Torkoal", "Torkoal-Mega"]
  },
  milotic: {
    inherit: true,
    otherFormes: ["Milotic-Mega"],
    formeOrder: ["Milotic", "Milotic-Mega"],
    evoType: "levelExtra",
    evoCondition: "with high Beauty"
  },
  kricketot: {
    inherit: true,
    otherFormes: ["Kricketot-Sartori"],
    formeOrder: ["Kricketot", "Kricketot-Sartori"]
  },
  kricketune: {
    inherit: true,
    otherFormes: ["Kricketune-Sartori"],
    formeOrder: ["Kricketune", "Kricketu-Sartori-Sartori"]
  },
  glameow: {
    inherit: true,
    otherFormes: ["Glameow-Sartori"],
    formeOrder: ["Glameow", "Glameow-Sartori"],
    isNonstandard: null
  },
  purugly: {
    inherit: true,
    otherFormes: ["Purugly-Sartori"],
    formeOrder: ["Purugly", "Purugly-Sartori"],
    isNonstandard: null
  },
  electivire: {
    inherit: true,
    otherFormes: ["Electivire-Mega"],
    formeOrder: ["Electivire", "Electivire-Mega"]
  },
  magmortar: {
    inherit: true,
    otherFormes: ["Magmortar-Mega"],
    formeOrder: ["Magmortar", "Magmortar-Mega"]
  },
  froslass: {
    inherit: true,
    otherFormes: ["Froslass-Mega"],
    formeOrder: ["Froslass", "Froslass-Mega"]
  },
  basculin: {
    inherit: true,
    evos: ["Pikeral"]
  },
  basculinbluestriped: {
    inherit: true,
    evos: ["Pikeral-Blue-Striped"]
  },
  garbodor: {
    inherit: true,
    otherFormes: ["Garbodor-Mega"],
    formeOrder: ["Garbodor", "Garbodor-Mega"],
    isNonstandard: null
  },
  beheeyem: {
    inherit: true,
    otherFormes: ["Beheeyem-Mega"],
    formeOrder: ["Beheeyem", "Beheeyem-Mega"],
    isNonstandard: null
  },
  druddigon: {
    inherit: true,
    otherFormes: ["Druddigon-Mega"],
    formeOrder: ["Druddigon", "Druddigon-Mega"],
    isNonstandard: null
  },
  durant: {
    inherit: true,
    otherFormes: ["Durant-Egelas"],
    formeOrder: ["Durant", "Durant-Egelas"],
    isNonstandard: null
  },
  phantump: {
    inherit: true,
    otherFormes: ["Phantump-Sartori"],
    formeOrder: ["Phantump", "Phantump-Sartori"]
  },
  minior: {
    inherit: true,
    evos: ["Prominoid"]
  },
  sandaconda: {
    inherit: true,
    otherFormes: ["Sandaconda-Mega"],
    formeOrder: ["Sandaconda", "Sandaconda-Mega"]
  },
  /* Ability renames because we can't do it in scripts anymore */
  sandshrewalola: {
    inherit: true,
    abilities: { 0: "Snow Cloak", H: "Snow Plow" }
  },
  sandslashalola: {
    inherit: true,
    abilities: { 0: "Snow Cloak", H: "Snow Plow" }
  },
  diglettalola: {
    inherit: true,
    abilities: { 0: "Sand Veil", 1: "Tangling", H: "Sand Force" }
  },
  dugtrioalola: {
    inherit: true,
    abilities: { 0: "Sand Veil", 1: "Tangling", H: "Sand Force" }
  },
  grimeralola: {
    inherit: true,
    abilities: { 0: "Poison Touch", 1: "Gluttony", H: "Alchemy" }
  },
  mukalola: {
    inherit: true,
    abilities: { 0: "Poison Touch", 1: "Gluttony", H: "Alchemy" }
  },
  mareep: {
    inherit: true,
    abilities: { 0: "Static", H: "Induction" }
  },
  flaaffy: {
    inherit: true,
    abilities: { 0: "Static", H: "Induction" }
  },
  ampharos: {
    inherit: true,
    abilities: { 0: "Static", H: "Induction" }
  },
  electrike: {
    inherit: true,
    abilities: { 0: "Static", 1: "Lightning Rod", H: "Induction" },
    isNonstandard: null
  },
  manectric: {
    inherit: true,
    abilities: { 0: "Static", 1: "Lightning Rod", H: "Induction" },
    isNonstandard: null
  },
  klink: {
    inherit: true,
    abilities: { 0: "Induction", H: "Clear Body" },
    isNonstandard: null
  },
  klang: {
    inherit: true,
    abilities: { 0: "Induction", H: "Clear Body" },
    isNonstandard: null
  },
  klinklang: {
    inherit: true,
    abilities: { 0: "Induction", H: "Clear Body" },
    isNonstandard: null
  },
  cubchoo: {
    inherit: true,
    abilities: { 0: "Snow Cloak", 1: "Snow Plow", H: "Rattled" }
  },
  beartic: {
    inherit: true,
    abilities: { 0: "Snow Cloak", 1: "Snow Plow", H: "Swift Swim" }
  },
  zygarde: {
    inherit: true,
    abilities: { 0: "Climate Break", H: "Power Construct" },
    exclusiveMoves: ["Bind", "Slam", "Glare", "Coil", "Thousand Waves", "Thousand Arrows", "Avalanche"],
    isNonstandard: null
  },
  zygarde10: {
    inherit: true,
    abilities: { 0: "Climate Break", H: "Power Construct" },
    isNonstandard: null
  },
  tsareena: {
    inherit: true,
    abilities: { 0: "Leaf Guard", 1: "Majesty", H: "Sweet Veil" }
  },
  stonjourner: {
    inherit: true,
    abilities: { 0: "Power Aura" }
  },
  arctozolt: {
    inherit: true,
    abilities: { 0: "Volt Absorb", 1: "Static", H: "Snow Plow" },
    isNonstandard: null
  },
  arctovish: {
    inherit: true,
    abilities: { 0: "Water Absorb", 1: "Ice Body", H: "Snow Plow" },
    isNonstandard: null
  },
  cetitan: {
    inherit: true,
    abilities: { 0: "Thick Fat", 1: "Snow Plow", H: "Sheer Force" }
  },
  /* Misc. */
  charmander: {
    inherit: true,
    color: "Orange"
  },
  charizard: {
    inherit: true,
    color: "Orange"
  },
  charizardmegay: {
    inherit: true,
    color: "Orange",
    isNonstandard: null
  },
  pikachu: {
    num: 25,
    name: "Pikachu",
    types: ["Electric"],
    baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
    abilities: { 0: "Static", H: "Lightning Rod" },
    heightm: 0.4,
    weightkg: 6,
    color: "Yellow",
    prevo: "Pichu",
    evoType: "levelFriendship",
    evos: ["Raichu", "Raichu-Alola"],
    eggGroups: ["Field", "Fairy"]
  },
  paras: {
    inherit: true,
    color: "Orange",
    isNonstandard: null
  },
  vulpix: {
    inherit: true,
    color: "Orange"
  },
  growlithe: {
    inherit: true,
    color: "Orange"
  },
  growlithehisui: {
    inherit: true,
    color: "Orange"
  },
  arcanine: {
    inherit: true,
    color: "Orange"
  },
  weepinbell: {
    inherit: true,
    evos: ["Victreebell"]
  },
  victreebell: {
    num: 71,
    name: "Victreebell",
    types: ["Grass", "Poison"],
    baseStats: { hp: 80, atk: 105, def: 65, spa: 100, spd: 70, spe: 70 },
    abilities: { 0: "Chlorophyll", H: "Gluttony" },
    heightm: 1.7,
    weightkg: 15.5,
    color: "Green",
    prevo: "Weepinbell",
    evoType: "useItem",
    evoItem: "Leaf Stone",
    eggGroups: ["Grass"]
  },
  moltres: {
    inherit: true,
    color: "Orange"
  },
  dragonite: {
    inherit: true,
    color: "Orange"
  },
  dunsparce: {
    inherit: true,
    eggGroups: ["Field", "Dragon"]
  },
  teddiursa: {
    inherit: true,
    color: "Orange"
  },
  torchic: {
    inherit: true,
    color: "Orange"
  },
  combusken: {
    inherit: true,
    color: "Orange"
  },
  trapinch: {
    inherit: true,
    color: "Orange"
  },
  chimchar: {
    inherit: true,
    color: "Orange"
  },
  monferno: {
    inherit: true,
    color: "Orange"
  },
  infernape: {
    inherit: true,
    color: "Orange"
  },
  buizel: {
    inherit: true,
    color: "Orange"
  },
  floatzel: {
    inherit: true,
    color: "Orange"
  },
  dialga: {
    num: 483,
    name: "Dialga",
    types: ["Steel", "Dragon"],
    gender: "N",
    baseStats: { hp: 100, atk: 120, def: 120, spa: 150, spd: 100, spe: 90 },
    abilities: { 0: "Pressure", H: "Telepathy" },
    heightm: 5.4,
    weightkg: 683,
    tags: ["Restricted Legendary"],
    color: "White",
    eggGroups: ["Undiscovered"]
  },
  palkia: {
    num: 484,
    name: "Palkia",
    types: ["Water", "Dragon"],
    gender: "N",
    baseStats: { hp: 90, atk: 120, def: 100, spa: 150, spd: 120, spe: 100 },
    abilities: { 0: "Pressure", H: "Telepathy" },
    heightm: 4.2,
    weightkg: 336,
    color: "Purple",
    tags: ["Restricted Legendary"],
    eggGroups: ["Undiscovered"]
  },
  tepig: {
    inherit: true,
    color: "Orange"
  },
  pignite: {
    inherit: true,
    color: "Orange"
  },
  emboar: {
    inherit: true,
    color: "Orange"
  },
  dwebble: {
    inherit: true,
    color: "Orange",
    isNonstandard: null
  },
  sandile: {
    inherit: true,
    eggGroups: ["Field", "Monster"]
  },
  krokorok: {
    inherit: true,
    eggGroups: ["Field", "Monster"]
  },
  krookodile: {
    inherit: true,
    eggGroups: ["Field", "Monster"]
  },
  scrafty: {
    inherit: true,
    color: "Orange"
  },
  landorus: {
    inherit: true,
    color: "Orange"
  },
  spewpa: {
    inherit: true,
    evos: ["Vivillon"]
  },
  vivillon: {
    num: 666,
    name: "Vivillon",
    baseForme: "Meadow",
    // TODO: actual base forme is Icy Snow, not Meadow
    types: ["Bug", "Flying"],
    baseStats: { hp: 80, atk: 52, def: 50, spa: 90, spd: 50, spe: 89 },
    abilities: { 0: "Shield Dust", 1: "Compound Eyes", H: "Friend Guard" },
    heightm: 1.2,
    weightkg: 17,
    color: "White",
    prevo: "Spewpa",
    evoLevel: 12,
    eggGroups: ["Bug"],
    cosmeticFormes: ["Vivillon-Archipelago", "Vivillon-Continental", "Vivillon-Elegant", "Vivillon-Garden", "Vivillon-High Plains", "Vivillon-Icy Snow", "Vivillon-Jungle", "Vivillon-Marine", "Vivillon-Modern", "Vivillon-Monsoon", "Vivillon-Ocean", "Vivillon-Polar", "Vivillon-River", "Vivillon-Sandstorm", "Vivillon-Savanna", "Vivillon-Sun", "Vivillon-Tundra", "Vivillon-Fancy", "Vivillon-Pokeball"],
    formeOrder: [
      "Vivillon-Icy Snow",
      "Vivillon-Polar",
      "Vivillon-Tundra",
      "Vivillon-Continental",
      "Vivillon-Garden",
      "Vivillon-Elegant",
      "Vivillon",
      // Meadow
      "Vivillon-Modern",
      "Vivillon-Marine",
      "Vivillon-Archipelago",
      "Vivillon-High Plains",
      "Vivillon-Sandstorm",
      "Vivillon-River",
      "Vivillon-Monsoon",
      "Vivillon-Savanna",
      "Vivillon-Sun",
      "Vivillon-Ocean",
      "Vivillon-Jungle",
      "Vivillon-Fancy",
      "Vivillon-Pokeball"
    ]
  },
  vivillonfancy: null,
  vivillonpokeball: null,
  sylveon: {
    inherit: true,
    evoType: "levelExtra",
    evoCondition: "with high Cuteness while knowing a Fairy-type move"
  },
  dedenne: {
    inherit: true,
    abilities: { 0: "Cheek Pouch", 1: "Pickup", H: "Induction" },
    //hardcoding because for some stupid reason it's not registering despite the algorithm literally changing it
    color: "Orange"
  },
  xerneas: {
    num: 716,
    name: "Xerneas",
    baseForme: "Active",
    // Neutral is technically the base, but it can't be used in battle
    types: ["Fairy"],
    gender: "N",
    baseStats: { hp: 126, atk: 131, def: 95, spa: 131, spd: 98, spe: 99 },
    abilities: { 0: "Fairy Aura" },
    heightm: 3,
    weightkg: 215,
    color: "Blue",
    eggGroups: ["Undiscovered"],
    //cosmeticFormes: ["Xerneas-Neutral"],
    //formeOrder: ["Xerneas-Neutral", "Xerneas"],
    isNonstandard: null
  },
  torracat: {
    inherit: true,
    color: "Orange"
  },
  runerigus: {
    inherit: true,
    evoLevel: 34,
    evoCondition: "interact with Serpent Mural while <= 49% HP.",
    isNonstandard: null
  },
  pawmi: {
    inherit: true,
    color: "Orange"
  },
  pawmot: {
    inherit: true,
    color: "Orange"
  },
  flamigo: {
    inherit: true,
    abilities: { 0: "Scrappy", 1: "Tangled Feet", H: "Co-Star" }
  },
  cyclizar: {
    inherit: true,
    eggGroups: ["Field", "Dragon"]
  },
  orthworm: {
    inherit: true,
    eggGroups: ["Field", "Amorphous"]
  },
  chiyu: {
    inherit: true,
    color: "Orange"
  },
  archaludon: {
    inherit: true,
    evoLevel: 50
  },
  /* Restorations */
  venusaurmega: {
    inherit: true,
    isNonstandard: null
  },
  charizardmegax: {
    inherit: true,
    isNonstandard: null
  },
  blastoisemega: {
    inherit: true,
    isNonstandard: null
  },
  caterpie: {
    inherit: true,
    isNonstandard: null
  },
  weedle: {
    inherit: true,
    isNonstandard: null
  },
  beedrillmega: {
    inherit: true,
    isNonstandard: null
  },
  pidgey: {
    inherit: true,
    isNonstandard: null
  },
  pidgeotto: {
    inherit: true,
    isNonstandard: null
  },
  pidgeot: {
    inherit: true,
    isNonstandard: null
  },
  pidgeotmega: {
    inherit: true,
    isNonstandard: null
  },
  rattata: {
    inherit: true,
    isNonstandard: null
  },
  rattataalola: {
    inherit: true,
    isNonstandard: null
  },
  raticate: {
    inherit: true,
    isNonstandard: null
  },
  raticatealola: {
    inherit: true,
    isNonstandard: null
  },
  spearow: {
    inherit: true,
    isNonstandard: null
  },
  fearow: {
    inherit: true,
    isNonstandard: null
  },
  nidoranf: {
    inherit: true,
    isNonstandard: null
  },
  nidorina: {
    inherit: true,
    isNonstandard: null
  },
  nidoqueen: {
    inherit: true,
    isNonstandard: null
  },
  nidorino: {
    inherit: true,
    isNonstandard: null
  },
  nidoking: {
    inherit: true,
    isNonstandard: null
  },
  zubat: {
    inherit: true,
    isNonstandard: null
  },
  golbat: {
    inherit: true,
    isNonstandard: null
  },
  parasect: {
    inherit: true,
    isNonstandard: null
  },
  abra: {
    inherit: true,
    isNonstandard: null
  },
  kadabra: {
    inherit: true,
    isNonstandard: null
  },
  alakazam: {
    inherit: true,
    isNonstandard: null
  },
  alakazammega: {
    inherit: true,
    isNonstandard: null
  },
  machop: {
    inherit: true,
    isNonstandard: null
  },
  machoke: {
    inherit: true,
    isNonstandard: null
  },
  machamp: {
    inherit: true,
    isNonstandard: null
  },
  slowbromega: {
    inherit: true,
    isNonstandard: null
  },
  marowak: {
    inherit: true,
    isNonstandard: null
  },
  lickitung: {
    inherit: true,
    isNonstandard: null
  },
  kangaskhanmega: {
    inherit: true,
    isNonstandard: null
  },
  goldeen: {
    inherit: true,
    isNonstandard: null
  },
  seaking: {
    inherit: true,
    isNonstandard: null
  },
  staryu: {
    inherit: true,
    isNonstandard: null
  },
  starmie: {
    inherit: true,
    isNonstandard: null
  },
  mrmime: {
    inherit: true,
    isNonstandard: null
  },
  pinsir: {
    inherit: true,
    isNonstandard: null
  },
  pinsirmega: {
    inherit: true,
    isNonstandard: null
  },
  gyaradosmega: {
    inherit: true,
    isNonstandard: null
  },
  omanyte: {
    inherit: true,
    isNonstandard: null
  },
  omastar: {
    inherit: true,
    isNonstandard: null
  },
  kabuto: {
    inherit: true,
    isNonstandard: null
  },
  kabutops: {
    inherit: true,
    isNonstandard: null
  },
  aerodactyl: {
    inherit: true,
    isNonstandard: null
  },
  aerodactylmega: {
    inherit: true,
    isNonstandard: null
  },
  mewtwomegax: {
    inherit: true,
    isNonstandard: null
  },
  mewtwomegay: {
    inherit: true,
    isNonstandard: null
  },
  ledyba: {
    inherit: true,
    isNonstandard: null
  },
  crobat: {
    inherit: true,
    isNonstandard: null
  },
  togepi: {
    inherit: true,
    isNonstandard: null
  },
  togetic: {
    inherit: true,
    isNonstandard: null
  },
  natu: {
    inherit: true,
    isNonstandard: null
  },
  xatu: {
    inherit: true,
    isNonstandard: null
  },
  ampharosmega: {
    inherit: true,
    isNonstandard: null
  },
  wobbuffet: {
    inherit: true,
    isNonstandard: null
  },
  steelix: {
    inherit: true,
    isNonstandard: null
  },
  scizormega: {
    inherit: true,
    isNonstandard: null
  },
  heracrossmega: {
    inherit: true,
    isNonstandard: null
  },
  remoraid: {
    inherit: true,
    isNonstandard: null
  },
  mantine: {
    inherit: true,
    isNonstandard: null
  },
  houndoommega: {
    inherit: true,
    isNonstandard: null
  },
  smoochum: {
    inherit: true,
    isNonstandard: null
  },
  tyranitarmega: {
    inherit: true,
    isNonstandard: null
  },
  sceptilemega: {
    inherit: true,
    isNonstandard: null
  },
  blazikenmega: {
    inherit: true,
    isNonstandard: null
  },
  swampertmega: {
    inherit: true,
    isNonstandard: null
  },
  zigzagoon: {
    inherit: true,
    isNonstandard: null
  },
  zigzagoongalar: {
    inherit: true,
    isNonstandard: null
  },
  linoone: {
    inherit: true,
    isNonstandard: null
  },
  linoonegalar: {
    inherit: true,
    isNonstandard: null
  },
  wurmple: {
    inherit: true,
    isNonstandard: null
  },
  beautifly: {
    inherit: true,
    isNonstandard: null
  },
  taillow: {
    inherit: true,
    isNonstandard: null
  },
  gardevoirmega: {
    inherit: true,
    isNonstandard: null
  },
  nincada: {
    inherit: true,
    isNonstandard: null
  },
  ninjask: {
    inherit: true,
    isNonstandard: null
  },
  skitty: {
    inherit: true,
    isNonstandard: null
  },
  delcatty: {
    inherit: true,
    isNonstandard: null
  },
  sableyemega: {
    inherit: true,
    isNonstandard: null
  },
  mawilemega: {
    inherit: true,
    isNonstandard: null
  },
  aron: {
    inherit: true,
    isNonstandard: null
  },
  lairon: {
    inherit: true,
    isNonstandard: null
  },
  aggron: {
    inherit: true,
    isNonstandard: null
  },
  aggronmega: {
    inherit: true,
    isNonstandard: null
  },
  medichammega: {
    inherit: true,
    isNonstandard: null
  },
  manectricmega: {
    inherit: true,
    isNonstandard: null
  },
  roselia: {
    inherit: true,
    isNonstandard: null
  },
  carvanha: {
    inherit: true,
    isNonstandard: null
  },
  sharpedo: {
    inherit: true,
    isNonstandard: null
  },
  sharpedomega: {
    inherit: true,
    isNonstandard: null
  },
  wailmer: {
    inherit: true,
    isNonstandard: null
  },
  wailord: {
    inherit: true,
    isNonstandard: null
  },
  cameruptmega: {
    inherit: true,
    isNonstandard: null
  },
  spinda: {
    inherit: true,
    isNonstandard: null
  },
  altariamega: {
    inherit: true,
    isNonstandard: null
  },
  lileep: {
    inherit: true,
    isNonstandard: null
  },
  cradily: {
    inherit: true,
    isNonstandard: null
  },
  anorith: {
    inherit: true,
    isNonstandard: null
  },
  armaldo: {
    inherit: true,
    isNonstandard: null
  },
  castform: {
    inherit: true,
    isNonstandard: null
  },
  castformsunny: {
    inherit: true,
    isNonstandard: null
  },
  castformrainy: {
    inherit: true,
    isNonstandard: null
  },
  castformsnowy: {
    inherit: true,
    isNonstandard: null
  },
  kecleon: {
    inherit: true,
    isNonstandard: null
  },
  banettemega: {
    inherit: true,
    isNonstandard: null
  },
  absol: {
    inherit: true,
    isNonstandard: null
  },
  absolmega: {
    inherit: true,
    isNonstandard: null
  },
  wynaut: {
    inherit: true,
    isNonstandard: null
  },
  glaliemega: {
    inherit: true,
    isNonstandard: null
  },
  spheal: {
    inherit: true,
    isNonstandard: null
  },
  sealeo: {
    inherit: true,
    isNonstandard: null
  },
  clamperl: {
    inherit: true,
    isNonstandard: null
  },
  salamencemega: {
    inherit: true,
    isNonstandard: null
  },
  metagrossmega: {
    inherit: true,
    isNonstandard: null
  },
  latiasmega: {
    inherit: true,
    isNonstandard: null
  },
  bidoof: {
    inherit: true,
    isNonstandard: null
  },
  bibarel: {
    inherit: true,
    isNonstandard: null
  },
  budew: {
    inherit: true,
    isNonstandard: null
  },
  roserade: {
    inherit: true,
    isNonstandard: null
  },
  burmy: {
    inherit: true,
    isNonstandard: null
  },
  mothim: {
    inherit: true,
    isNonstandard: null
  },
  cherubi: {
    inherit: true,
    isNonstandard: null
  },
  cherrim: {
    inherit: true,
    isNonstandard: null
  },
  cherrimsunshine: {
    inherit: true,
    isNonstandard: null
  },
  buneary: {
    inherit: true,
    isNonstandard: null
  },
  lopunny: {
    inherit: true,
    isNonstandard: null
  },
  lopunnymega: {
    inherit: true,
    isNonstandard: null
  },
  mimejr: {
    inherit: true,
    isNonstandard: null
  },
  garchompmega: {
    inherit: true,
    isNonstandard: null
  },
  lucariomega: {
    inherit: true,
    isNonstandard: null
  },
  skorupi: {
    inherit: true,
    isNonstandard: null
  },
  mantyke: {
    inherit: true,
    isNonstandard: null
  },
  abomasnowmega: {
    inherit: true,
    isNonstandard: null
  },
  lickilicky: {
    inherit: true,
    isNonstandard: null
  },
  togekiss: {
    inherit: true,
    isNonstandard: null
  },
  patrat: {
    inherit: true,
    isNonstandard: null
  },
  watchog: {
    inherit: true,
    isNonstandard: null
  },
  lillipup: {
    inherit: true,
    isNonstandard: null
  },
  purrloin: {
    inherit: true,
    isNonstandard: null
  },
  liepard: {
    inherit: true,
    isNonstandard: null
  },
  pansage: {
    inherit: true,
    isNonstandard: null
  },
  simisage: {
    inherit: true,
    isNonstandard: null
  },
  pansear: {
    inherit: true,
    isNonstandard: null
  },
  simisear: {
    inherit: true,
    isNonstandard: null
  },
  panpour: {
    inherit: true,
    isNonstandard: null
  },
  simipour: {
    inherit: true,
    isNonstandard: null
  },
  pidove: {
    inherit: true,
    isNonstandard: null
  },
  tranquill: {
    inherit: true,
    isNonstandard: null
  },
  unfezant: {
    inherit: true,
    isNonstandard: null
  },
  woobat: {
    inherit: true,
    isNonstandard: null
  },
  audino: {
    inherit: true,
    isNonstandard: null
  },
  throh: {
    inherit: true,
    isNonstandard: null
  },
  sawk: {
    inherit: true,
    isNonstandard: null
  },
  venipede: {
    inherit: true,
    isNonstandard: null
  },
  whirlipede: {
    inherit: true,
    isNonstandard: null
  },
  scolipede: {
    inherit: true,
    isNonstandard: null
  },
  darumaka: {
    inherit: true,
    isNonstandard: null
  },
  darmanitanzen: {
    inherit: true,
    isNonstandard: null
  },
  crustle: {
    inherit: true,
    isNonstandard: null
  },
  sigilyph: {
    inherit: true,
    isNonstandard: null
  },
  yamask: {
    inherit: true,
    isNonstandard: null
  },
  yamaskgalar: {
    inherit: true,
    isNonstandard: null
  },
  cofagrigus: {
    inherit: true,
    isNonstandard: null
  },
  tirtouga: {
    inherit: true,
    isNonstandard: null
  },
  carracosta: {
    inherit: true,
    isNonstandard: null
  },
  archen: {
    inherit: true,
    isNonstandard: null
  },
  archeops: {
    inherit: true,
    isNonstandard: null
  },
  trubbish: {
    inherit: true,
    isNonstandard: null
  },
  emolga: {
    inherit: true,
    isNonstandard: null
  },
  frillish: {
    inherit: true,
    isNonstandard: null
  },
  jellicent: {
    inherit: true,
    isNonstandard: null
  },
  elgyem: {
    inherit: true,
    isNonstandard: null
  },
  shelmet: {
    inherit: true,
    isNonstandard: null
  },
  stunfisk: {
    inherit: true,
    isNonstandard: null
  },
  bouffalant: {
    inherit: true,
    isNonstandard: null
  },
  bunnelby: {
    inherit: true,
    isNonstandard: null
  },
  diggersby: {
    inherit: true,
    isNonstandard: null
  },
  pancham: {
    inherit: true,
    isNonstandard: null
  },
  pangoro: {
    inherit: true,
    isNonstandard: null
  },
  honedge: {
    inherit: true,
    isNonstandard: null
  },
  aegislash: {
    inherit: true,
    isNonstandard: null
  },
  aegislashblade: {
    inherit: true,
    isNonstandard: null
  },
  swirlix: {
    inherit: true,
    isNonstandard: null
  },
  slurpuff: {
    inherit: true,
    isNonstandard: null
  },
  binacle: {
    inherit: true,
    isNonstandard: null
  },
  barbaracle: {
    inherit: true,
    isNonstandard: null
  },
  helioptile: {
    inherit: true,
    isNonstandard: null
  },
  heliolisk: {
    inherit: true,
    isNonstandard: null
  },
  amaura: {
    inherit: true,
    isNonstandard: null
  },
  aurorus: {
    inherit: true,
    isNonstandard: null
  },
  yveltal: {
    inherit: true,
    isNonstandard: null
  },
  zygardecomplete: {
    inherit: true,
    isNonstandard: null
  },
  dianciemega: {
    inherit: true,
    isNonstandard: null
  },
  wishiwashi: {
    inherit: true,
    isNonstandard: null
  },
  wishiwashischool: {
    inherit: true,
    isNonstandard: null
  },
  morelull: {
    inherit: true,
    isNonstandard: null
  },
  shiinotic: {
    inherit: true,
    isNonstandard: null
  },
  stufful: {
    inherit: true,
    isNonstandard: null
  },
  bewear: {
    inherit: true,
    isNonstandard: null
  },
  pyukumuku: {
    inherit: true,
    isNonstandard: null
  },
  typenull: {
    inherit: true,
    isNonstandard: null
  },
  silvally: {
    inherit: true,
    isNonstandard: null
  },
  silvallybug: {
    inherit: true,
    isNonstandard: null
  },
  silvallydark: {
    inherit: true,
    isNonstandard: null
  },
  silvallydragon: {
    inherit: true,
    isNonstandard: null
  },
  silvallyelectric: {
    inherit: true,
    isNonstandard: null
  },
  silvallyfairy: {
    inherit: true,
    isNonstandard: null
  },
  silvallyfighting: {
    inherit: true,
    isNonstandard: null
  },
  silvallyfire: {
    inherit: true,
    isNonstandard: null
  },
  silvallyflying: {
    inherit: true,
    isNonstandard: null
  },
  silvallyghost: {
    inherit: true,
    isNonstandard: null
  },
  silvallygrass: {
    inherit: true,
    isNonstandard: null
  },
  silvallyground: {
    inherit: true,
    isNonstandard: null
  },
  silvallyice: {
    inherit: true,
    isNonstandard: null
  },
  silvallypoison: {
    inherit: true,
    isNonstandard: null
  },
  silvallypsychic: {
    inherit: true,
    isNonstandard: null
  },
  silvallyrock: {
    inherit: true,
    isNonstandard: null
  },
  silvallysteel: {
    inherit: true,
    isNonstandard: null
  },
  silvallywater: {
    inherit: true,
    isNonstandard: null
  },
  togedemaru: {
    inherit: true,
    isNonstandard: null
  },
  drampa: {
    inherit: true,
    isNonstandard: null
  },
  tapukoko: {
    inherit: true,
    isNonstandard: null
  },
  tapulele: {
    inherit: true,
    isNonstandard: null
  },
  tapubulu: {
    inherit: true,
    isNonstandard: null
  },
  tapufini: {
    inherit: true,
    isNonstandard: null
  },
  gossifleur: {
    inherit: true,
    isNonstandard: null
  },
  eldegoss: {
    inherit: true,
    isNonstandard: null
  },
  wooloo: {
    inherit: true,
    isNonstandard: null
  },
  dubwool: {
    inherit: true,
    isNonstandard: null
  },
  yamper: {
    inherit: true,
    isNonstandard: null
  },
  obstagoon: {
    inherit: true,
    isNonstandard: null
  },
  dracozolt: {
    inherit: true,
    isNonstandard: null
  },
  dracovish: {
    inherit: true,
    isNonstandard: null
  },
  /* Junkyard */
  victreebel: null,
  darmanitangalarzen: null,
  lycanrocdusk: null,
  ironbundle: null,
  ironhands: null,
  ironjugulis: null,
  ironmoth: null,
  ironthorns: null,
  ironvaliant: null,
  ironleaves: null,
  ironboulder: null,
  ironcrown: null,
  venusaurgmax: null,
  charizardgmax: null,
  blastoisegmax: null,
  butterfreegmax: null,
  raticatealolatotem: null,
  pikachucosplay: null,
  pikachurockstar: null,
  pikachubelle: null,
  pikachupopstar: null,
  pikachuphd: null,
  pikachulibre: null,
  pikachustarter: null,
  pikachugmax: null,
  pikachupartner: null,
  pikachuoriginal: null,
  pikachuhoenn: null,
  pikachusinnoh: null,
  pikachuunova: null,
  pikachukalos: null,
  pikachualola: null,
  pikachuworld: null,
  meowthgmax: null,
  machampgmax: null,
  gengargmax: null,
  kinglergmax: null,
  marowakalolatotem: null,
  laprasgmax: null,
  eeveestarter: null,
  eeveegmax: null,
  snorlaxgmax: null,
  pichuspikyeared: null,
  dialgaorigin: null,
  palkiaorigin: null,
  garbodorgmax: null,
  greninjabond: null,
  greninjaash: null,
  floetteeternal: null,
  gumshoostotem: null,
  vikavolttotem: null,
  ribombeetotem: null,
  araquanidtotem: null,
  lurantistotem: null,
  salazzletotem: null,
  togedemarutotem: null,
  mimikyutotem: null,
  mimikyubustedtotem: null,
  kommoototem: null,
  melmetalgmax: null,
  rillaboomgmax: null,
  cinderacegmax: null,
  inteleongmax: null,
  corviknightgmax: null,
  orbeetlegmax: null,
  drednawgmax: null,
  coalossalgmax: null,
  flapplegmax: null,
  appletungmax: null,
  sandacondagmax: null,
  toxtricitygmax: null,
  toxtricitylowkeygmax: null,
  centiskorchgmax: null,
  hatterenegmax: null,
  grimmsnarlgmax: null,
  alcremiegmax: null,
  copperajahgmax: null,
  duraludongmax: null,
  eternatuseternamax: null,
  urshifugmax: null,
  urshifurapidstrikegmax: null,
  zarudedada: null,
  ursalunabloodmoon: null,
  ogerpontealtera: null,
  ogerponwellspringtera: null,
  ogerponhearthflametera: null,
  ogerponcornerstonetera: null,
  pokestarsmeargle: null,
  pokestarufo: null,
  pokestarufo2: null,
  pokestarbrycenman: null,
  pokestarmt: null,
  pokestarmt2: null,
  pokestartransport: null,
  pokestargiant: null,
  pokestarhumanoid: null,
  pokestarmonster: null,
  pokestarf00: null,
  pokestarf002: null,
  pokestarspirit: null,
  pokestarblackdoor: null,
  pokestarwhitedoor: null,
  pokestarblackbelt: null,
  pokestarufopropu2: null,
  //CAP
  syclant: {
    inherit: true,
    abilities: { 0: "Compound Eyes", 1: "Limber", H: "Ice Body" }
  },
  pyroak: {
    inherit: true,
    baseStats: { hp: 120, atk: 70, def: 105, spa: 95, spd: 90, spe: 60 },
    abilities: { 0: "Rock Head", 1: "Battle Armor", H: "White Smoke" }
  },
  revenankh: {
    inherit: true,
    abilities: { 0: "Shed Skin", 1: "Soul Drain", H: "Air Lock" }
  },
  colossoil: {
    inherit: true,
    //number: -20,
    abilities: { 0: "Emergence", 1: "Guts", H: "Unnerve" }
  },
  protowatt: {
    inherit: true,
    abilities: { 0: "Trace", 1: "Induction", H: "Magic Guard" }
    //number: -21,
  },
  krilowatt: {
    inherit: true,
    abilities: { 0: "Trace", 1: "Induction", H: "Magic Guard" }
    //number: -22,
  },
  necturine: {
    inherit: true,
    //number: -27,
    abilities: { 0: "Forewarn", H: "Telepathy" }
  },
  brattler: {
    inherit: true,
    //number: -33,
    abilities: { 0: "Rattled", 1: "Shed Skin", H: "Infiltrator" }
  },
  malaconda: {
    inherit: true,
    //number: -34,
    abilities: { 0: "Harvest", 1: "Shed Skin", H: "Infiltrator" }
  },
  volkritter: {
    inherit: true,
    //number: -37,
    abilities: { 0: "Analytic", 1: "Unnerve", H: "Infiltrator" }
  },
  venomicon: {
    inherit: true,
    abilities: { 0: "Stamina", H: "Alchemy" }
  },
  ababo: {
    inherit: true,
    abilities: { 0: "Own Tempo", 1: "Rattled", H: "Pixilate" }
  },
  scattervein: {
    inherit: true,
    abilities: { 0: "Own Tempo", 1: "Disturbance", H: "Pixilate" }
  },
  hemogoblin: {
    inherit: true,
    abilities: { 0: "Heat Sink", 1: "Disturbance", H: "Pixilate" }
  },
  cresceidon: {
    inherit: true,
    abilities: { 0: "Filter", 1: "Rough Skin", H: "Water Veil" }
  }
  /*chuggon: {
  	inherit: true,
  	abilities: {0: "Cacophony", 1: "White Smoke", H: "Stall"},
  },
  draggalong: {
  	inherit: true,
  	abilities: {0: "Cacophony", 1: "White Smoke", H: "Stall"},
  },
  chuggalong: {
  	inherit: true,
  	abilities: {0: "Cacophony", 1: "White Smoke", H: "Stall"},
  },*/
  /*nohface: { //CAPs should be renumbered this way, but it interferes with sprites at the moment
  	inherit: true,
  	number: -14,
  },
  monohm: {
  	inherit: true,
  	number: -16,
  },
  duohm: {
  	inherit: true,
  	number: -17,
  },
  cyclohm: {
  	inherit: true,
  	number: -18,
  },
  dorsoil: {
  	inherit: true,
  	number: -19,
  },
  voodoll: {
  	inherit: true,
  	number: -23,
  },
  voodoom: {
  	inherit: true,
  	number: -24,
  },
  scratchet: {
  	inherit: true,
  	number: -25,
  },
  tomohawk: {
  	inherit: true,
  	number: -26,
  },
  necturna: {
  	inherit: true,
  	number: -28,
  },
  mollux: {
  	inherit: true,
  	number: -29,
  },
  cupra: {
  	inherit: true,
  	number: -30,
  },
  argalis: {
  	inherit: true,
  	number: -31,
  },
  aurumoth: {
  	inherit: true,
  	number: -32,
  },
  brattler: {
  	inherit: true,
  	number: -33,
  },
  cawdet: {
  	inherit: true,
  	number: -35,
  },
  cawmodore: {
  	inherit: true,
  	number: -36,
  },
  volkraken: {
  	inherit: true,
  	number: -38,
  },
  snugglow: {
  	inherit: true,
  	number: -39,
  },
  plasmanta: {
  	inherit: true,
  	number: -40,
  },
  floatoy: {
  	inherit: true,
  	number: -41,
  },
  caimanoe: {
  	inherit: true,
  	number: -42,
  },
  naviathan: {
  	inherit: true,
  	number: -43,
  },
  crucibelle: {
  	inherit: true,
  	number: -44,
  },
  pluffle: {
  	inherit: true,
  	number: -45,
  },
  kerfluffle: {
  	inherit: true,
  	number: -46,
  },
  pajantom: {
  	inherit: true,
  	number: -47,
  },
  mumbao: {
  	inherit: true,
  	number: -48,
  },
  jumbao: {
  	inherit: true,
  	number: -49,
  },
  fawnifer: {
  	inherit: true,
  	number: -50,
  },
  electrelk: {
  	inherit: true,
  	number: -51,
  },
  caribolt: {
  	inherit: true,
  	number: -52,
  },
  smogecko: {
  	inherit: true,
  	number: -53,
  },
  smoguana: {
  	inherit: true,
  	number: -54,
  },
  smokomodo: {
  	inherit: true,
  	number: -55,
  },
  swirlpool: {
  	inherit: true,
  	number: -56,
  },
  coribalis: {
  	inherit: true,
  	number: -57,
  },
  snaelstrom: {
  	inherit: true,
  	number: -58,
  },
  justyke: {
  	inherit: true,
  	number: -59,
  },
  equilibra: {
  	inherit: true,
  	number: -60,
  },
  solotl: {
  	inherit: true,
  	number: -61,
  },
  astrolotl: {
  	inherit: true,
  	number: -62,
  },
  miasmite: {
  	inherit: true,
  	number: -63,
  },
  miasmaw: {
  	inherit: true,
  	number: -64,
  },
  chromera: {
  	inherit: true,
  	number: -65,
  },*/
};
//# sourceMappingURL=pokedex.js.map
