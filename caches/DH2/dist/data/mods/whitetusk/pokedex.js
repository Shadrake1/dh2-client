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
  dustbunnie: {
    num: 9001,
    name: "Dust Bunnie",
    types: ["Dark", "Ground"],
    baseStats: { hp: 88, atk: 90, def: 65, spa: 100, spd: 85, spe: 129 },
    abilities: { 0: "Adaptability" },
    weightkg: 0.1
  },
  rebirb: {
    num: 9002,
    name: "Rebirb",
    types: ["Psychic"],
    baseStats: { hp: 50, atk: 55, def: 65, spa: 71, spd: 65, spe: 59 },
    abilities: { 0: "Own Tempo", 1: "Synchronize", H: "Trace" },
    weightkg: 0.1
  },
  strummingbird: {
    num: 9003,
    name: "Strummingbird",
    baseForme: "Violin",
    types: ["Psychic", "Flying"],
    baseStats: { hp: 70, atk: 70, def: 76, spa: 81, spd: 76, spe: 137 },
    abilities: { 0: "Gale Wings", 1: "Synchronize", H: "Trace" },
    prevo: "Rebirb",
    otherFormes: [
      "Strummingbird-Viola",
      "Strummingbird-Cello",
      "Strummingbird-Contrabass",
      "Strummingbird-Acoustic",
      "Strummingbird-Electric",
      "Strummingbird-Bass"
    ],
    formeOrder: [
      "Strummingbird",
      "Strummingbird-Viola",
      "Strummingbird-Cello",
      "Strummingbird-Contrabass",
      "Strummingbird-Acoustic",
      "Strummingbird-Electric",
      "Strummingbird-Bass"
    ],
    weightkg: 0.4
  },
  strummingbirdviola: {
    num: 9003,
    name: "Strummingbird-Viola",
    baseSpecies: "Strummingbird",
    types: ["Psychic", "Flying"],
    baseStats: { hp: 70, atk: 60, def: 91, spa: 91, spd: 91, spe: 107 },
    abilities: { 0: "Libero", 1: "Synchronize", H: "Trace" },
    prevo: "Rebirb",
    weightkg: 0.6
  },
  strummingbirdcello: {
    num: 9003,
    name: "Strummingbird-Cello",
    baseSpecies: "Strummingbird",
    types: ["Psychic", "Flying"],
    baseStats: { hp: 70, atk: 65, def: 102, spa: 112, spd: 102, spe: 59 },
    abilities: { 0: "Analytic", 1: "Synchronize", H: "Trace" },
    prevo: "Rebirb",
    weightkg: 3.5
  },
  strummingbirdcontrabass: {
    num: 9003,
    name: "Strummingbird-Contrabass",
    baseSpecies: "Strummingbird",
    types: ["Psychic", "Flying"],
    baseStats: { hp: 70, atk: 65, def: 117, spa: 112, spd: 117, spe: 29 },
    abilities: { 0: "Inner Focus", 1: "Synchronize", H: "Trace" },
    prevo: "Rebirb",
    weightkg: 5
  },
  strummingbirdacoustic: {
    num: 9003,
    name: "Strummingbird-Acoustic",
    baseSpecies: "Strummingbird",
    types: ["Psychic", "Ground"],
    baseStats: { hp: 90, atk: 105, def: 70, spa: 86, spd: 70, spe: 89 },
    abilities: { 0: "Own Tempo", 1: "Rattled", H: "Punk Rock" },
    prevo: "Rebirb",
    weightkg: 2.2
  },
  strummingbirdelectric: {
    num: 9003,
    name: "Strummingbird-Electric",
    baseSpecies: "Strummingbird",
    types: ["Psychic", "Electric"],
    baseStats: { hp: 90, atk: 85, def: 70, spa: 106, spd: 70, spe: 89 },
    abilities: { 0: "Own Tempo", 1: "Heavy Metal", H: "Punk Rock" },
    prevo: "Rebirb",
    weightkg: 3.6
  },
  strummingbirdbass: {
    num: 9003,
    name: "Strummingbird-Bass",
    baseSpecies: "Strummingbird",
    types: ["Psychic", "Dark"],
    baseStats: { hp: 90, atk: 105, def: 84, spa: 106, spd: 84, spe: 41 },
    abilities: { 0: "Own Tempo", 1: "Filter", H: "Punk Rock" },
    prevo: "Rebirb",
    weightkg: 3.8
  },
  xylomist: {
    num: 9004,
    name: "Xylomist",
    types: ["Water", "Psychic"],
    baseStats: { hp: 80, atk: 65, def: 82, spa: 110, spd: 80, spe: 83 },
    abilities: { 0: "Soundproof" },
    weightkg: 30.5
  },
  yeomelt: {
    num: 9005,
    name: "Yeomelt",
    types: ["Fire", "Ground"],
    baseStats: { hp: 85, atk: 108, def: 97, spa: 50, spd: 75, spe: 85 },
    abilities: { 0: "Dry Skin" },
    weightkg: 87
  },
  zoplite: {
    num: 9006,
    name: "Zoplite",
    types: ["Electric"],
    baseStats: { hp: 110, atk: 100, def: 114, spa: 40, spd: 106, spe: 30 },
    abilities: { 0: "Filter" },
    weightkg: 105
  },
  yeoxylo: {
    num: 9007,
    name: "Yeoxylo",
    types: ["Fire", "Water"],
    baseStats: { hp: 80, atk: 91, def: 84, spa: 120, spd: 80, spe: 95 },
    abilities: { 0: "Levitate" },
    weightkg: 117.5
  },
  xylozop: {
    num: 9008,
    name: "Xylozop",
    types: ["Psychic", "Electric"],
    baseStats: { hp: 100, atk: 80, def: 90, spa: 116, spd: 100, spe: 64 },
    abilities: { 0: "Punk Rock" },
    weightkg: 135.5
  },
  zopyeo: {
    num: 9009,
    name: "Zopyeo",
    types: ["Electric", "Fire"],
    baseStats: { hp: 87, atk: 105, def: 87, spa: 93, spd: 75, spe: 103 },
    abilities: { 0: "Adaptability" },
    weightkg: 192
  },
  xylyeozop: {
    num: 9010,
    name: "Xylyeozop",
    types: ["Ground", "Electric"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Battle Armor" },
    weightkg: 222.5,
    requiredItem: "Core Module"
  },
  xylobone: {
    num: 9012,
    name: "Xylobone",
    types: ["Water", "Ghost"],
    baseStats: { hp: 120, atk: 130, def: 60, spa: 70, spd: 100, spe: 45 },
    abilities: { 0: "Soundproof", 1: "Technician", H: "Water Veil" },
    weightkg: 30
  },
  pufferfinch: {
    num: 9013,
    name: "Pufferfinch",
    types: ["Water", "Flying"],
    baseStats: { hp: 65, atk: 85, def: 100, spa: 85, spd: 85, spe: 60 },
    abilities: { 0: "Puffin Up" },
    weightkg: 13.6
  },
  dormirr: {
    num: 9014,
    name: "Dormirr",
    types: ["Steel", "Fairy"],
    baseStats: { hp: 100, atk: 60, def: 45, spa: 110, spd: 160, spe: 55 },
    abilities: { 0: "Fairest of Them All" },
    weightkg: 45,
    requiredItem: "Future Sphere"
  },
  gumbawl: {
    num: 9015,
    name: "Gumbawl",
    types: ["Fairy"],
    baseStats: { hp: 50, atk: 83, def: 83, spa: 43, spd: 43, spe: 111 },
    abilities: { 0: "Sticky Hold", 1: "Weak Armor", H: "Prankster" },
    weightkg: 1
  },
  gumbrawl: {
    num: 9016,
    name: "Gumbrawl",
    baseForme: "Empty",
    types: ["Fairy", "Fighting"],
    baseStats: { hp: 125, atk: 113, def: 48, spa: 83, spd: 77, spe: 107 },
    abilities: { 0: "Sticky Hold" },
    otherFormes: [
      "Gumbrawl-Bubble",
      "Gumbrawl-Fresh",
      "Gumbrawl-Gachamech"
    ],
    formeOrder: [
      "Gumbrawl",
      "Gumbrawl-Bubble",
      "Gumbrawl-Fresh",
      "Gumbrawl-Gachamech"
    ],
    prevo: "Gumbawl",
    weightkg: 158
  },
  gumbrawlbubble: {
    num: 9016,
    name: "Gumbrawl-Bubble",
    baseSpecies: "Gumbrawl",
    types: ["Fairy", "Water"],
    baseStats: { hp: 100, atk: 63, def: 113, spa: 63, spd: 103, spe: 101 },
    abilities: { 0: "Water Bubble", 1: "Unpoppable", H: "Regenerator" },
    prevo: "Gumbawl",
    weightkg: 158,
    requiredItem: "Luminous Bubble"
  },
  gumbrawlfresh: {
    num: 9016,
    name: "Gumbrawl-Fresh",
    baseSpecies: "Gumbrawl",
    types: ["Fairy", "Ice"],
    baseStats: { hp: 100, atk: 103, def: 73, spa: 83, spd: 73, spe: 111 },
    abilities: { 0: "Adaptability", 1: "Refreshing", H: "Intimidate" },
    prevo: "Gumbawl",
    weightkg: 158,
    requiredItem: "Fresh Stick"
  },
  gumbrawlgachamech: {
    num: 9016,
    name: "Gumbrawl-Gachamech",
    baseSpecies: "Gumbrawl",
    types: ["Fairy", "Steel"],
    baseStats: { hp: 225, atk: 233, def: 123, spa: 233, spd: 122, spe: 142 },
    abilities: { 0: "Gacha" },
    prevo: "Gumbawl",
    weightkg: 999.9
  },
  gnawingbark: {
    num: 9017,
    name: "Gnawing Bark",
    types: ["Grass", "Water"],
    baseStats: { hp: 61, atk: 49, def: 139, spa: 49, spd: 163, spe: 109 },
    abilities: { 0: "Protosynthesis" },
    weightkg: 158
  },
  ironmint: {
    num: 9018,
    name: "Iron Mint",
    types: ["Fire", "Ice"],
    baseStats: { hp: 106, atk: 128, def: 35, spa: 133, spd: 35, spe: 133 },
    abilities: { 0: "Quark Drive" },
    weightkg: 158
  },
  caramilitant: {
    num: 9019,
    name: "Caramilitant",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 70, atk: 112, def: 104, spa: 50, spd: 104, spe: 45 },
    abilities: { 0: "Magma Armor", 1: "Sticky Hold", H: "Liquid Ooze" },
    weightkg: 158
  },
  toughfee: {
    num: 9020,
    name: "Toughfee",
    types: ["Steel", "Fire"],
    baseStats: { hp: 70, atk: 50, def: 84, spa: 112, spd: 84, spe: 85 },
    abilities: { 0: "Well-Baked Body", 1: "Sticky Hold", H: "Sweet Veil" },
    prevo: "Caramilitant",
    weightkg: 158
  },
  gasharmoir: {
    num: 9021,
    name: "Gasharmoir",
    types: ["Steel", "Normal"],
    baseStats: { hp: 100, atk: 120, def: 75, spa: 120, spd: 75, spe: 35 },
    abilities: { 0: "Weak Armor", 1: "Sticky Hold", H: "Gacha" },
    weightkg: 158
  },
  tartridge: {
    num: 9022,
    name: "Tartridge",
    types: ["Fairy", "Poison"],
    baseStats: { hp: 120, atk: 50, def: 90, spa: 85, spd: 62, spe: 37 },
    abilities: { 0: "Sticky Hold", H: "Gooey" },
    weightkg: 3
  },
  opixsi: {
    num: 9023,
    name: "Opixsi",
    types: ["Psychic", "Electric"],
    baseStats: { hp: 90, atk: 90, def: 90, spa: 112, spd: 90, spe: 128 },
    abilities: { 0: "Electric Surge", 1: "Psychic Surge", H: "Anti-Gravity" },
    weightkg: 23
  },
  pinfrino: {
    num: 9024,
    name: "Pinfrino",
    types: ["Steel", "Poison"],
    baseStats: { hp: 105, atk: 90, def: 65, spa: 90, spd: 85, spe: 74 },
    abilities: { 0: "Intimidate", 1: "Stakeout", H: "Unburden" },
    weightkg: 123
  },
  leagle: {
    num: 9025,
    name: "Leagle",
    types: ["Dark"],
    baseStats: { hp: 95, atk: 83, def: 100, spa: 90, spd: 103, spe: 80 },
    abilities: { 0: "Contrary", 1: "Emergency Exit", H: "Prankster" },
    weightkg: 25
  },
  illeagle: {
    num: 9025,
    name: "Illeagle",
    types: ["Dark"],
    baseStats: { hp: 95, atk: 153, def: 150, spa: 90, spd: 153, spe: 80 },
    abilities: { 0: "Dark Aura" },
    weightkg: 125
  },
  kuadrosin: {
    num: 9026,
    name: "Kuadrosin",
    types: ["Ghost"],
    baseStats: { hp: 140, atk: 103, def: 85, spa: 80, spd: 105, spe: 42 },
    abilities: { 0: "Intimidate", 1: "Unnerve", H: "Mimicry" },
    weightkg: 214.9
  },
  blite: {
    num: 9027,
    name: "Blite",
    baseForme: "Lite",
    types: ["Normal"],
    baseStats: { hp: 70, atk: 20, def: 60, spa: 20, spd: 60, spe: 50 },
    abilities: { 0: "Unaware" },
    otherFormes: "Blite-Blight",
    formeOrder: ["Blite", "Blite-Blight"],
    weightkg: 21
  },
  bliteblight: {
    num: 9027,
    name: "Blite-Blight",
    baseSpecies: "Blite",
    types: ["Ghost"],
    baseStats: { hp: 70, atk: 200, def: 50, spa: 200, spd: 50, spe: 130 },
    abilities: { 0: "Regenerator" },
    otherFormes: "Blite-Blight",
    formeOrder: ["Blite", "Blite-Blight"],
    changesFrom: "Blite",
    weightkg: 21,
    requiredItem: "Cursed Seal"
  },
  doctoxin: {
    num: 9028,
    name: "Doctoxin",
    types: ["Poison", "Normal"],
    baseStats: { hp: 85, atk: 106, def: 74, spa: 49, spd: 110, spe: 121 },
    abilities: { 0: "Aroma Veil", 1: "Analytic", H: "Toxin Drain" },
    weightkg: 62.5
  },
  moosquito: {
    num: 9029,
    name: "Moosquito",
    types: ["Ice", "Bug"],
    baseStats: { hp: 80, atk: 120, def: 100, spa: 85, spd: 50, spe: 80 },
    abilities: { 0: "Slush Rush", 1: "Life Drain", H: "Compound Eyes" },
    weightkg: 14
  },
  parrox: {
    num: 9030,
    name: "Parrox",
    types: ["Poison", "Flying"],
    baseStats: { hp: 66, atk: 105, def: 74, spa: 44, spd: 70, spe: 136 },
    abilities: { 0: "Poison Touch", 1: "Technician", H: "Big Pecks" },
    weightkg: 12.4
  }
};
//# sourceMappingURL=pokedex.js.map
