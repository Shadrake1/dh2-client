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
  obzilla: {
    num: 900,
    name: "Obzilla",
    types: ["Rock", "Ground"],
    baseStats: { hp: 105, atk: 125, def: 85, spa: 50, spd: 50, spe: 125 },
    abilities: { 0: "Clear Body", H: "No Guard" },
    height: 100,
    weightkg: 100
  },
  cartogopher: {
    num: 901,
    name: "Cartogopher",
    types: ["Ground"],
    baseStats: { hp: 85, atk: 89, def: 79, spa: 89, spd: 87, spe: 45 },
    abilities: { 0: "Trace", H: "Run Away" },
    height: 100,
    weightkg: 100
  },
  tiramitzu: {
    num: 902,
    name: "Tiramitzu",
    types: ["Normal", "Fairy"],
    baseStats: { hp: 90, atk: 97, def: 73, spa: 95, spd: 81, spe: 99 },
    abilities: { 0: "Vital Spirit", 1: "Aroma Veil", H: "Fluffy" },
    height: 100,
    weightkg: 100
  },
  marteleo: {
    num: 903,
    name: "Marteleo",
    types: ["Fire", "Steel"],
    baseStats: { hp: 122, atk: 94, def: 117, spa: 68, spd: 63, spe: 91 },
    abilities: { 0: "Intimidate" },
    height: 100,
    weightkg: 100
  },
  roseaphot: {
    num: 904,
    name: "Roseaphot",
    types: ["Water", "Steel"],
    baseStats: { hp: 110, atk: 90, def: 90, spa: 85, spd: 95, spe: 60 },
    abilities: { 0: "Magnet Pull", H: "Water Absorb" },
    height: 100,
    weightkg: 100
  },
  zenoise: {
    num: 905,
    name: "Zenoise",
    types: ["Fighting"],
    baseStats: { hp: 98, atk: 70, def: 118, spa: 104, spd: 92, spe: 48 },
    abilities: { 0: "Shell Armor", 1: "Trace", H: "Synchronize" },
    height: 100,
    weightkg: 100
  },
  frozalisk: {
    num: 906,
    name: "Frozalisk",
    types: ["Ice", "Grass"],
    baseStats: { hp: 90, atk: 80, def: 72, spa: 80, spd: 72, spe: 110 },
    abilities: { 0: "Gluttony", 1: "Rivalry", H: "Ice Body" },
    height: 100,
    weightkg: 100
  },
  sapparine: {
    num: 907,
    name: "Sapparine",
    types: ["Grass", "Fairy"],
    baseStats: { hp: 100, atk: 95, def: 130, spa: 70, spd: 75, spe: 30 },
    abilities: { 0: "Gooey", H: "Sweet Veil" },
    height: 100,
    weightkg: 100
  },
  glixie: {
    num: 908,
    name: "Glixie",
    types: ["Dark", "Fairy"],
    baseStats: { hp: 88, atk: 110, def: 85, spa: 110, spd: 85, spe: 122 },
    abilities: { 0: "Cursed Body", 1: "Static", H: "Transistor" },
    height: 100,
    weightkg: 100
  },
  ferticotta: {
    num: 909,
    name: "Ferticotta",
    types: ["Ground", "Fighting"],
    baseStats: { hp: 121, atk: 115, def: 72, spa: 98, spd: 58, spe: 86 },
    abilities: { 0: "Well-Baked Body", H: "Electric Surge" },
    height: 100,
    weightkg: 100
  },
  sundon: {
    num: 910,
    name: "Sundon",
    types: ["Grass", "Fire"],
    baseStats: { hp: 100, atk: 65, def: 100, spa: 100, spd: 95, spe: 50 },
    abilities: { 0: "Desolate Land" },
    height: 100,
    weightkg: 100
  },
  funera: {
    num: 911,
    name: "Funera",
    types: ["Dark", "Ghost"],
    baseStats: { hp: 90, atk: 80, def: 90, spa: 90, spd: 90, spe: 50 },
    abilities: { 0: "Unaware", H: "Klutz" },
    height: 100,
    weightkg: 100
  },
  snowpea: {
    num: 912,
    name: "Snowpea",
    types: ["Ice", "Grass"],
    baseStats: { hp: 90, atk: 110, def: 75, spa: 100, spd: 75, spe: 105 },
    abilities: { 0: "Skill Link", H: "Natural Cure" },
    height: 100,
    weightkg: 100
  },
  fendeerie: {
    num: 913,
    name: "Fendeerie",
    types: ["Ghost", "Electric"],
    baseStats: { hp: 83, atk: 120, def: 70, spa: 101, spd: 46, spe: 93 },
    abilities: { 0: "Static", 1: "Intimidate", H: "Speed Boost" },
    height: 100,
    weightkg: 100
  },
  chubee: {
    num: 914,
    name: "Chubee",
    types: ["Bug", "Ground"],
    baseStats: { hp: 105, atk: 125, def: 125, spa: 35, spd: 65, spe: 45 },
    abilities: { 0: "Swarm", 1: "Compound Eyes", H: "Thick Fat" },
    height: 100,
    weightkg: 100
  },
  dualifer: {
    num: 915,
    name: "Dualifer",
    types: ["Dark", "Fairy"],
    baseStats: { hp: 70, atk: 125, def: 105, spa: 90, spd: 125, spe: 85 },
    abilities: { 0: "Regenerator" },
    height: 100,
    weightkg: 100
  },
  spirem: {
    num: 916,
    name: "Spirem",
    types: ["Ghost", "Normal"],
    baseStats: { hp: 84, atk: 75, def: 61, spa: 111, spd: 114, spe: 45 },
    abilities: { 0: "Comatose" },
    height: 100,
    weightkg: 100
  },
  wormga: {
    num: 917,
    name: "Wormga",
    types: ["Fire", "Ground"],
    baseStats: { hp: 100, atk: 100, def: 80, spa: 105, spd: 85, spe: 105 },
    abilities: { 0: "Heavy Metal", 1: "Rock Head", H: "Sand Force" },
    height: 100,
    weightkg: 100
  },
  koydatosh: {
    num: 918,
    name: "Koydatosh",
    types: ["Poison", "Ground"],
    baseStats: { hp: 120, atk: 90, def: 110, spa: 80, spd: 100, spe: 40 },
    abilities: { 0: "Rattled", 1: "Shield Dust", H: "Unaware" },
    height: 100,
    weightkg: 100
  },
  draugrall: {
    num: 919,
    name: "Draugrall",
    types: ["Ice", "Ghost"],
    baseStats: { hp: 78, atk: 35, def: 158, spa: 115, spd: 65, spe: 99 },
    abilities: { 0: "Snow Warning", 1: "Earth Eater", H: "Intimidate" },
    height: 100,
    weightkg: 100
  },
  craftenir: {
    num: 920,
    name: "Craftenir",
    types: ["Fairy", "Dragon"],
    baseStats: { hp: 84, atk: 138, def: 91, spa: 90, spd: 101, spe: 96 },
    abilities: { 0: "Sticky Hold", 1: "Steelworker", H: "Weak Armor" },
    height: 100,
    weightkg: 100
  },
  agonette: {
    num: 921,
    name: "Agonette",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 80, atk: 130, def: 93, spa: 81, spd: 83, spe: 103 },
    abilities: { 0: "Flame Body", 1: "Quick Feet", H: "Dancer" },
    height: 100,
    weightkg: 100
  },
  teraqua: {
    num: 922,
    name: "Teraqua",
    types: ["Water", "Fighting"],
    baseStats: { hp: 85, atk: 90, def: 105, spa: 80, spd: 75, spe: 85 },
    abilities: { 0: "Technician", 1: "Intimidate", H: "Moxie" },
    height: 100,
    weightkg: 100
  },
  ralirulero: {
    num: 923,
    name: "Ralirulero",
    types: ["Fairy", "Normal"],
    baseStats: { hp: 60, atk: 96, def: 66, spa: 106, spd: 166, spe: 86 },
    abilities: { 0: "Light Metal", 1: "Receiver", H: "Shield Dust" },
    height: 100,
    weightkg: 100
  },
  salmurai: {
    num: 924,
    name: "Salmurai",
    types: ["Water", "Fighting"],
    baseStats: { hp: 78, atk: 119, def: 90, spa: 58, spd: 60, spe: 105 },
    abilities: { 0: "Mold Breaker", 1: "Sharpness", H: "Justified" },
    height: 100,
    weightkg: 100
  },
  roquack: {
    num: 925,
    name: "Roquack",
    types: ["Rock", "Ground"],
    baseStats: { hp: 75, atk: 135, def: 105, spa: 40, spd: 70, spe: 75 },
    abilities: { 0: "Sand Stream", H: "Early Bird" },
    height: 100,
    weightkg: 100
  },
  freezbyte: {
    num: 926,
    name: "Freezbyte",
    types: ["Ice", "Electric"],
    baseStats: { hp: 80, atk: 98, def: 128, spa: 53, spd: 128, spe: 48 },
    abilities: { 0: "Levitate", 1: "Flash Fire", H: "Magic Guard" },
    height: 100,
    weightkg: 100
  },
  thorbarage: {
    num: 927,
    name: "Thorbarage",
    types: ["Poison", "Steel"],
    baseStats: { hp: 60, atk: 100, def: 130, spa: 55, spd: 95, spe: 85 },
    abilities: { 0: "Emergency Exit", H: "Merciless" },
    height: 100,
    weightkg: 100
  },
  flumflare: {
    num: 928,
    name: "Flumflare",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 78, atk: 50, def: 60, spa: 73, spd: 70, spe: 110 },
    abilities: { 0: "Flame Body", 1: "Fluffy", H: "Contrary" },
    height: 100,
    weightkg: 100
  },
  dragnis: {
    num: 929,
    name: "Dragnis",
    types: ["Dragon", "Fire"],
    baseStats: { hp: 95, atk: 110, def: 105, spa: 120, spd: 105, spe: 65 },
    abilities: { 0: "Flame Body", 1: "Dry Skin", H: "Rough Skin" },
    height: 100,
    weightkg: 100
  },
  terrapollo: {
    num: 930,
    name: "Terrapollo",
    types: ["Ground", "Ghost"],
    baseStats: { hp: 89, atk: 113, def: 101, spa: 67, spd: 73, spe: 127 },
    abilities: { 0: "Beast Boost" },
    height: 100,
    weightkg: 100
  },
  arsekai: {
    num: 931,
    name: "Arsekai",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 95, atk: 120, def: 80, spa: 110, spd: 100, spe: 95 },
    abilities: { 0: "Prankster" },
    height: 100,
    weightkg: 100
  },
  origyrant: {
    num: 932,
    name: "Origyrant",
    types: ["Grass", "Fighting"],
    baseStats: { hp: 130, atk: 95, def: 50, spa: 110, spd: 50, spe: 120 },
    abilities: { 0: "Run Away", H: "Emergency Exit" },
    height: 100,
    weightkg: 100
  },
  brasshopper: {
    num: 933,
    name: "Brasshopper",
    types: ["Bug", "Steel"],
    baseStats: { hp: 68, atk: 131, def: 120, spa: 61, spd: 70, spe: 90 },
    abilities: { 0: "Overcoat", 1: "Justified", H: "Sharpness" },
    height: 100,
    weightkg: 100
  },
  scorpdyceps: {
    num: 934,
    name: "Scorpdyceps",
    types: ["Bug", "Grass"],
    baseStats: { hp: 90, atk: 40, def: 85, spa: 110, spd: 95, spe: 75 },
    abilities: { 0: "Magic Guard", 1: "Tinted Lens", H: "Pure Power" },
    height: 100,
    weightkg: 100
  },
  covloris: {
    num: 935,
    name: "Covloris",
    types: ["Poison", "Dark"],
    baseStats: { hp: 78, atk: 92, def: 95, spa: 80, spd: 70, spe: 113 },
    abilities: { 0: "Poison Point", 1: "Infiltrator", H: "Merciless" },
    height: 100,
    weightkg: 100
  },
  ferroluna: {
    num: 936,
    name: "Ferroluna",
    types: ["Fairy", "Dark"],
    baseStats: { hp: 90, atk: 135, def: 90, spa: 89, spd: 80, spe: 117 },
    abilities: { 0: "Protosynthesis", H: "Quark Drive" },
    height: 100,
    weightkg: 100
  },
  haratrail: {
    num: 937,
    name: "Haratrail",
    types: ["Ground", "Fairy"],
    baseStats: { hp: 79, atk: 112, def: 128, spa: 61, spd: 87, spe: 63 },
    abilities: { 0: "Sand Rush", 1: "Shed Skin", H: "Misty Surge" },
    height: 100,
    weightkg: 100
  },
  tyrannyan: {
    num: 938,
    name: "Tyrannyan",
    types: ["Fairy", "Dark"],
    baseStats: { hp: 105, atk: 124, def: 110, spa: 65, spd: 66, spe: 80 },
    abilities: { 0: "Pressure", 1: "Sniper", H: "Opportunist" },
    height: 100,
    weightkg: 100
  },
  psydrive: {
    num: 939,
    name: "Psydrive",
    types: ["Electric", "Psychic"],
    baseStats: { hp: 60, atk: 125, def: 55, spa: 75, spd: 100, spe: 145 },
    abilities: { 0: "Levitate", 1: "Telepathy", H: "Electric Surge" },
    height: 100,
    weightkg: 100
  },
  harmadillo: {
    num: 940,
    name: "Harmadillo",
    types: ["Steel", "Fighting"],
    baseStats: { hp: 120, atk: 103, def: 49, spa: 127, spd: 71, spe: 30 },
    abilities: { 0: "Emergency Exit", 1: "Sturdy", H: "Anger Shell" },
    height: 100,
    weightkg: 100
  },
  zarkanon: {
    num: 941,
    name: "Zarkanon",
    types: ["Steel"],
    baseStats: { hp: 70, atk: 90, def: 110, spa: 130, spd: 80, spe: 75 },
    abilities: { 0: "Battle Armor", 1: "Regenerator", H: "Protean" },
    height: 100,
    weightkg: 100
  },
  kaledzi: {
    num: 942,
    name: "Kaledzi",
    types: ["Fairy", "Fighting"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Defiant" },
    height: 100,
    weightkg: 100
  },
  madad: {
    num: 943,
    name: "Madad",
    types: ["Dark", "Fairy"],
    baseStats: { hp: 110, atk: 100, def: 110, spa: 80, spd: 85, spe: 70 },
    abilities: { 0: "Parental Bond", H: "Friend Guard" },
    height: 100,
    weightkg: 100
  },
  pompadork: {
    num: 944,
    name: "Pompadork",
    types: ["Normal"],
    baseStats: { hp: 80, atk: 40, def: 64, spa: 130, spd: 75, spe: 96 },
    abilities: { 0: "Technician", 1: "Analytic", H: "Competitive" },
    height: 100,
    weightkg: 100
  },
  velvittle: {
    num: 945,
    name: "Velvittle",
    types: ["Bug", "Fairy"],
    baseStats: { hp: 76, atk: 45, def: 93, spa: 118, spd: 140, spe: 68 },
    abilities: { 0: "Wonder Skin", 1: "Magic Guard", H: "Misty Surge" },
    height: 100,
    weightkg: 100
  },
  phoenoptic: {
    num: 946,
    name: "Phoenoptic",
    types: ["Flying", "Fire"],
    baseStats: { hp: 80, atk: 110, def: 90, spa: 110, spd: 85, spe: 125 },
    abilities: { 0: "Regenerator", 1: "Tinted Lens", H: "Analytic" },
    height: 100,
    weightkg: 100
  },
  forenseelie: {
    num: 947,
    name: "Forenseelie",
    types: ["Poison", "Fairy"],
    baseStats: { hp: 95, atk: 79, def: 108, spa: 103, spd: 84, spe: 63 },
    abilities: { 0: "Pixilate", 1: "Poison Point", H: "Corrosion" },
    height: 100,
    weightkg: 100
  },
  atomoth: {
    num: 948,
    name: "Atomoth",
    types: ["Steel", "Poison"],
    baseStats: { hp: 80, atk: 59, def: 95, spa: 109, spd: 112, spe: 70 },
    abilities: { 0: "Corrosion", 1: "Volt Absorb", H: "Levitate" },
    height: 100,
    weightkg: 100
  },
  squwhirrl: {
    num: 949,
    name: "Squwhirrl",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 85, atk: 90, def: 65, spa: 110, spd: 100, spe: 101 },
    abilities: { 0: "Flame Body", H: "Dancer" },
    height: 100,
    weightkg: 100
  },
  kurayami: {
    num: 950,
    name: "Kurayami",
    types: ["Dark"],
    baseStats: { hp: 90, atk: 95, def: 95, spa: 100, spd: 95, spe: 90 },
    abilities: { 0: "Magic Guard", H: "Dark Aura" },
    height: 100,
    weightkg: 100
  },
  idk2: {
    num: 951,
    name: "idk 2",
    types: ["Water", "Ice"],
    baseStats: { hp: 95, atk: 105, def: 80, spa: 109, spd: 60, spe: 111 },
    abilities: { 0: "Water Veil", 1: "Pixilate", H: "Refrigerate" },
    height: 100,
    weightkg: 100
  },
  zauryo: {
    num: 952,
    name: "Zauryo",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 71, atk: 67, def: 95, spa: 102, spd: 65, spe: 100 },
    abilities: { 0: "Flash Fire", 1: "Dazzling", H: "Aroma Veil" },
    height: 100,
    weightkg: 100
  },
  cavvage: {
    num: 953,
    name: "Cavvage",
    types: ["Grass"],
    baseStats: { hp: 90, atk: 100, def: 115, spa: 70, spd: 80, spe: 60 },
    abilities: { 0: "Leaf Guard", 1: "Intimidate", H: "Skill Link" },
    height: 100,
    weightkg: 100
  },
  tusquokaagent: {
    num: 954,
    name: "Tusquoka-Agent",
    types: ["Normal", "Steel"],
    baseStats: { hp: 80, atk: 110, def: 70, spa: 40, spd: 60, spe: 120 },
    abilities: { 0: "Tinted Lens", H: "Normalize" },
    height: 100,
    weightkg: 100
  },
  kepaying: {
    num: 955,
    name: "Kepa-ying",
    types: ["Dark", "Bug"],
    baseStats: { hp: 52, atk: 92, def: 73, spa: 110, spd: 105, spe: 118 },
    abilities: { 0: "Compound Eyes", 1: "Limber", H: "Lingering Aroma" },
    height: 100,
    weightkg: 100
  },
  dasydillo: {
    num: 956,
    name: "Dasydillo",
    types: ["Ground", "Fairy"],
    baseStats: { hp: 88, atk: 102, def: 120, spa: 66, spd: 55, spe: 79 },
    abilities: { 0: "Bulletproof", 1: "Fluffy", H: "Pixilate" },
    height: 100,
    weightkg: 100
  },
  possabomb: {
    num: 957,
    name: "Possabomb",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 95, atk: 90, def: 75, spa: 35, spd: 75, spe: 50 },
    abilities: { 0: "Aftermath", H: "Parental Bond" },
    height: 100,
    weightkg: 100
  },
  neuranium: {
    num: 958,
    name: "Neuranium",
    types: ["Psychic", "Poison"],
    baseStats: { hp: 70, atk: 65, def: 70, spa: 114, spd: 90, spe: 101 },
    abilities: { 0: "Merciless", 1: "Poison Point", H: "Psychic Surge" },
    height: 100,
    weightkg: 100
  },
  vesquadron: {
    num: 959,
    name: "Vesquadron",
    types: ["Bug", "Poison"],
    baseStats: { hp: 64, atk: 75, def: 136, spa: 82, spd: 108, spe: 75 },
    abilities: { 0: "Parental Bond", H: "Technician" },
    height: 100,
    weightkg: 100
  },
  fridgeate: {
    num: 960,
    name: "Fridgeate",
    types: ["Flying", "Ice"],
    baseStats: { hp: 124, atk: 121, def: 66, spa: 55, spd: 65, spe: 109 },
    abilities: { 0: "Big Pecks", H: "Ice Scales" },
    height: 100,
    weightkg: 100
  },
  gastrel: {
    num: 961,
    name: "Gastrel",
    types: ["Flying", "Water"],
    baseStats: { hp: 79, atk: 104, def: 107, spa: 64, spd: 97, spe: 96 },
    abilities: { 0: "Corrosion", H: "Unnerve" },
    height: 100,
    weightkg: 100
  },
  locustab: {
    num: 962,
    name: "Locustab",
    types: ["Bug", "Dark"],
    baseStats: { hp: 65, atk: 128, def: 72, spa: 69, spd: 62, spe: 104 },
    abilities: { 0: "Tough Claws", 1: "Sand Veil", H: "Sand Rush" },
    height: 100,
    weightkg: 100
  },
  melethyst: {
    num: 963,
    name: "Melethyst",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 95, atk: 135, def: 60, spa: 55, spd: 85, spe: 90 },
    abilities: { 0: "Scrappy", 1: "Illuminate", H: "Purifying Salt" },
    height: 100,
    weightkg: 100
  },
  caddismith: {
    num: 964,
    name: "Caddismith",
    types: ["Dark", "Bug"],
    baseStats: { hp: 95, atk: 88, def: 70, spa: 53, spd: 72, spe: 122 },
    abilities: { 0: "Stakeout", 1: "Inner Focus", H: "Solid Rock" },
    height: 100,
    weightkg: 100
  },
  vulchar: {
    num: 965,
    name: "Vulchar",
    types: ["Flying", "Fire"],
    baseStats: { hp: 107, atk: 99, def: 81, spa: 103, spd: 98, spe: 102 },
    abilities: { 0: "Moxie", 1: "Flame Body", H: "Dragon's Maw" },
    height: 100,
    weightkg: 100
  },
  klimausion: {
    num: 966,
    name: "Klimausion",
    types: ["Rock", "Flying"],
    baseStats: { hp: 72, atk: 117, def: 99, spa: 46, spd: 68, spe: 108 },
    abilities: { 0: "Pickup", H: "Illusion" },
    height: 100,
    weightkg: 100
  },
  gilamenza: {
    num: 967,
    name: "Gilamenza",
    types: ["Poison", "Fighting"],
    baseStats: { hp: 105, atk: 120, def: 110, spa: 90, spd: 80, spe: 95 },
    abilities: { 0: "Poison Touch", 1: "Rough Skin", H: "Sand Veil" },
    height: 100,
    weightkg: 100
  },
  crevicera: {
    num: 968,
    name: "Crevicera",
    types: ["Bug", "Ground"],
    baseStats: { hp: 82, atk: 127, def: 127, spa: 44, spd: 82, spe: 88 },
    abilities: { 0: "Compound Eyes", 1: "Technician", H: "Poison Heal" },
    height: 100,
    weightkg: 100
  },
  chelperela: {
    num: 969,
    name: "Chelperela",
    types: ["Water", "Grass"],
    baseStats: { hp: 130, atk: 65, def: 70, spa: 110, spd: 90, spe: 115 },
    abilities: { 0: "Swift Swim", 1: "Chlorophyll", H: "Regenerator" },
    height: 100,
    weightkg: 100
  },
  zunowy: {
    num: 970,
    name: "Zunowy",
    types: ["Bug", "Ice"],
    baseStats: { hp: 107, atk: 51, def: 85, spa: 92, spd: 74, spe: 121 },
    abilities: { 0: "Tinted Lens", 1: "Trace", H: "Snow Warning" },
    height: 100,
    weightkg: 100
  },
  gachacha: {
    num: 971,
    name: "Gachacha",
    types: ["Fairy", "Normal"],
    baseStats: { hp: 110, atk: 66, def: 55, spa: 99, spd: 88, spe: 99 },
    abilities: { 0: "Unburden", 1: "Oblivious", H: "Protean" },
    height: 100,
    weightkg: 100
  },
  suganger: {
    num: 972,
    name: "Suganger",
    types: ["Dragon", "Fairy"],
    baseStats: { hp: 80, atk: 110, def: 80, spa: 110, spd: 70, spe: 130 },
    abilities: { 0: "Anger Point", H: "Competitive" },
    height: 100,
    weightkg: 100
  },
  libuble: {
    num: 973,
    name: "Libuble",
    types: ["Bug", "Dragon"],
    baseStats: { hp: 85, atk: 98, def: 80, spa: 116, spd: 79, spe: 97 },
    abilities: { 0: "Water Veil", 1: "Intimidate", H: "Swift Swim" },
    height: 100,
    weightkg: 100
  },
  scorjester: {
    num: 974,
    name: "Scorjester",
    types: ["Fire", "Dark"],
    baseStats: { hp: 63, atk: 42, def: 63, spa: 42, spd: 113, spe: 83 },
    abilities: { 0: "Huge Power", 1: "Klutz", H: "Tangled Feet" },
    height: 100,
    weightkg: 100
  },
  cryosaurite: {
    num: 975,
    name: "Cryosaurite",
    types: ["Ice", "Rock"],
    baseStats: { hp: 118, atk: 122, def: 107, spa: 80, spd: 100, spe: 73 },
    abilities: { 0: "Snow Warning", 1: "Sand Stream", H: "Shed Skin" },
    height: 100,
    weightkg: 100
  },
  phenominix: {
    num: 976,
    name: "Phenominix",
    types: ["Fire", "Flying"],
    baseStats: { hp: 131, atk: 131, def: 63, spa: 101, spd: 63, spe: 111 },
    abilities: { 0: "Prankster", 1: "Regenerator", H: "Reckless" },
    height: 100,
    weightkg: 100
  },
  diabol: {
    num: 977,
    name: "Diabol",
    types: ["Psychic"],
    baseStats: { hp: 150, atk: 150, def: 150, spa: 150, spd: 150, spe: 20 },
    abilities: { 0: "Simple", 1: "Color Change", H: "Prism Armor" },
    height: 100,
    weightkg: 100
  },
  pyrove: {
    num: 978,
    name: "Pyrove",
    types: ["Fire", "Grass"],
    baseStats: { hp: 70, atk: 85, def: 60, spa: 125, spd: 75, spe: 110 },
    abilities: { 0: "White Smoke", 1: "Harvest", H: "Purifying Salt" },
    height: 100,
    weightkg: 100
  },
  bruined: {
    num: 979,
    name: "Bruined",
    types: ["Fighting"],
    baseStats: { hp: 70, atk: 125, def: 100, spa: 40, spd: 80, spe: 105 },
    abilities: { 0: "Iron Fist" },
    height: 100,
    weightkg: 100
  },
  // slate 2
  alchevul: {
    num: 1001,
    name: "Alchevul",
    types: ["Poison", "Flying"],
    baseStats: { hp: 100, atk: 50, def: 80, spa: 115, spd: 90, spe: 106 },
    abilities: { 0: "Power Of Alchemy", 1: "Curious Medicine", H: "Anger Shell" },
    weightkg: 5
  },
  androimatide: {
    num: 1002,
    name: "Androimatide",
    types: ["Water", "Steel"],
    baseStats: { hp: 70, atk: 105, def: 90, spa: 105, spd: 90, spe: 97 },
    abilities: { 0: "Download" },
    weightkg: 5
  },
  armaruin: {
    num: 1003,
    name: "Armaruin",
    types: ["Fire", "Water"],
    baseStats: { hp: 137, atk: 100, def: 88, spa: 50, spd: 67, spe: 88 },
    abilities: { 0: "Guts", 1: "Reckless", H: "Wind Rider" },
    weightkg: 5
  },
  awesdruk: {
    num: 1004,
    name: "Awesdruk",
    types: ["Dragon", "Electric"],
    baseStats: { hp: 70, atk: 115, def: 90, spa: 95, spd: 125, spe: 50 },
    abilities: { 0: "Pressure", H: "Sheer Force" },
    weightkg: 5
  },
  baashful: {
    num: 1005,
    name: "Baashful",
    types: ["Normal"],
    baseStats: { hp: 90, atk: 45, def: 80, spa: 45, spd: 95, spe: 130 },
    abilities: { 0: "Run Away", 1: "Wimp Out", H: "Rattled" },
    weightkg: 5
  },
  basilud: {
    num: 1006,
    name: "Basilud",
    types: ["Ground", "Water"],
    baseStats: { hp: 83, atk: 99, def: 74, spa: 52, spd: 68, spe: 154 },
    abilities: { 0: "Hydration", 1: "Quick Feet", H: "Water Veil" },
    weightkg: 5
  },
  caeruleto: {
    num: 1007,
    name: "Caeruleto",
    types: ["Water", "Ghost"],
    baseStats: { hp: 90, atk: 85, def: 70, spa: 105, spd: 105, spe: 70 },
    abilities: { 0: "Torrent", H: "Prankster" },
    weightkg: 5
  },
  capanopy: {
    num: 1008,
    name: "Capanopy",
    types: ["Grass", "Electric"],
    baseStats: { hp: 111, atk: 69, def: 66, spa: 109, spd: 66, spe: 114 },
    abilities: { 0: "Mold Breaker", 1: "Natural Cure", H: "Volt Absorb" },
    weightkg: 5
  },
  cardborg: {
    num: 1009,
    name: "Cardborg",
    types: ["Steel", "Normal"],
    baseStats: { hp: 88, atk: 50, def: 110, spa: 120, spd: 110, spe: 50 },
    abilities: { 0: "Weak Armor", 1: "Volt Absorb", H: "Clear Body" },
    weightkg: 5
  },
  carecrow: {
    num: 1010,
    name: "Carecrow",
    types: ["Flying", "Fairy"],
    baseStats: { hp: 95, atk: 71, def: 89, spa: 76, spd: 120, spe: 80 },
    abilities: { 0: "Flower Veil", 1: "Natural Cure", H: "Lightning Rod" },
    weightkg: 5
  },
  chitana: {
    num: 1011,
    name: "Chitana",
    types: ["Water", "Ghost"],
    baseStats: { hp: 89, atk: 94, def: 107, spa: 73, spd: 73, spe: 51 },
    abilities: { 0: "Analytic", 1: "Toxic Debris", H: "Prankster" },
    weightkg: 5
  },
  chloravage: {
    num: 1012,
    name: "Chloravage",
    types: ["Poison", "Dark"],
    baseStats: { hp: 89, atk: 118, def: 121, spa: 50, spd: 81, spe: 81 },
    abilities: { 0: "Leaf Guard", 1: "Grassy Surge", H: "Unnerve" },
    weightkg: 5
  },
  cloconstruct: {
    num: 1013,
    name: "Cloconstruct",
    types: ["Steel", "Bug"],
    baseStats: { hp: 95, atk: 130, def: 80, spa: 90, spd: 90, spe: 25 },
    abilities: { 0: "Psychic Surge" },
    weightkg: 5
  },
  croakast: {
    num: 1014,
    name: "Croakast",
    types: ["Poison"],
    baseStats: { hp: 99, atk: 110, def: 75, spa: 88, spd: 80, spe: 77 },
    abilities: { 0: "Levitate" },
    weightkg: 5
  },
  draatle: {
    num: 1015,
    name: "Draatle",
    types: ["Bug", "Dragon"],
    baseStats: { hp: 82, atk: 127, def: 88, spa: 91, spd: 87, spe: 95 },
    abilities: { 0: "Swarm", 1: "Technician", H: "Illusion" },
    weightkg: 5
  },
  dreampunk: {
    num: 1016,
    name: "Dreampunk",
    types: ["Steel", "Psychic"],
    baseStats: { hp: 81, atk: 82, def: 83, spa: 117, spd: 99, spe: 113 },
    abilities: { 0: "Competitive", 1: "Steam Engine", H: "Bad Dreams" },
    weightkg: 5
  },
  esporesce: {
    num: 1017,
    name: "Esporesce",
    types: ["Grass", "Psychic"],
    baseStats: { hp: 120, atk: 52, def: 91, spa: 101, spd: 72, spe: 52 },
    abilities: { 0: "Effect Spore", 1: "Aroma Veil", H: "Triage" },
    weightkg: 5
  },
  faeraith: {
    num: 1018,
    name: "Faeraith",
    types: ["Fairy", "Ghost"],
    baseStats: { hp: 95, atk: 86, def: 83, spa: 125, spd: 90, spe: 104 },
    abilities: { 0: "Klutz", H: "Truant" },
    weightkg: 5
  },
  falstiletto: {
    num: 1019,
    name: "Falstiletto",
    types: ["Psychic"],
    baseStats: { hp: 75, atk: 101, def: 94, spa: 103, spd: 72, spe: 85 },
    abilities: { 0: "Electric Surge", 1: "Dragon\u2019s Maw", H: "Primordial Sea" },
    weightkg: 5
  },
  fulmineus: {
    num: 1020,
    name: "Fulmineus",
    types: ["Electric"],
    baseStats: { hp: 50, atk: 100, def: 100, spa: 100, spd: 100, spe: 150 },
    abilities: { 0: "Electromorphosis", 1: "Infiltrator", H: "Regenerator" },
    weightkg: 5
  },
  gnomeush: {
    num: 1021,
    name: "Gnomeush",
    types: ["Grass", "Psychic"],
    baseStats: { hp: 75, atk: 60, def: 80, spa: 120, spd: 95, spe: 105 },
    abilities: { 0: "Mycelium Might" },
    weightkg: 5
  },
  gorilax: {
    num: 1022,
    name: "Gorilax",
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 117, atk: 51, def: 91, spa: 103, spd: 97, spe: 111 },
    abilities: { 0: "Forewarn" },
    weightkg: 5
  },
  hydrongea: {
    num: 1023,
    name: "Hydrongea",
    types: ["Grass", "Water"],
    baseStats: { hp: 91, atk: 72, def: 84, spa: 112, spd: 103, spe: 65 },
    abilities: { 0: "Storm Drain", 1: "Immunity", H: "Protean" },
    weightkg: 5
  },
  ironrailgun: {
    num: 1024,
    name: "Iron Railgun",
    types: ["Water", "Fire"],
    baseStats: { hp: 44, atk: 112, def: 60, spa: 108, spd: 120, spe: 126 },
    abilities: { 0: "Quark Drive" },
    weightkg: 5
  },
  jabbark: {
    num: 1025,
    name: "Jab-bark",
    types: ["Fighting", "Water"],
    baseStats: { hp: 99, atk: 99, def: 99, spa: 99, spd: 99, spe: 99 },
    abilities: { 0: "Mega Launcher", 1: "Long Reach", H: "Grassy Surge" },
    weightkg: 5
  },
  jamborai: {
    num: 1026,
    name: "Jamborai",
    types: ["Water", "Psychic"],
    baseStats: { hp: 75, atk: 65, def: 125, spa: 120, spd: 85, spe: 65 },
    abilities: { 0: "Liquid Ooze", 1: "Water Absorb", H: "Poison Heal" },
    weightkg: 5
  },
  lepwozectur: {
    num: 1027,
    name: "Lepwozectur",
    types: ["Fairy", "Normal"],
    baseStats: { hp: 50, atk: 85, def: 145, spa: 85, spd: 170, spe: 45 },
    abilities: { 0: "Scrappy", 1: "No Guard", H: "Harvest" },
    weightkg: 5
  },
  lizhaman: {
    num: 1028,
    name: "Lizhaman",
    types: ["Water", "Electric"],
    baseStats: { hp: 80, atk: 85, def: 75, spa: 75, spd: 102, spe: 118 },
    abilities: { 0: "Volt Absorb", 1: "Sharpness", H: "Galvanize" },
    weightkg: 5
  },
  marshwift: {
    num: 1029,
    name: "Marshwift",
    types: ["Ground", "Water"],
    baseStats: { hp: 85, atk: 105, def: 85, spa: 105, spd: 70, spe: 115 },
    abilities: { 0: "Water Absorb", 1: "Swift Swim", H: "Grassy Surge" },
    weightkg: 5
  },
  matitrick: {
    num: 1030,
    name: "Matitrick",
    types: ["Ground", "Fairy"],
    baseStats: { hp: 83, atk: 90, def: 82, spa: 102, spd: 92, spe: 116 },
    abilities: { 0: "Wind Rider", 1: "Grassy Surge", H: "Prankster" },
    weightkg: 5
  },
  mochiknight: {
    num: 1031,
    name: "Mochiknight",
    types: ["Fairy", "Steel"],
    baseStats: { hp: 72, atk: 105, def: 110, spa: 60, spd: 74, spe: 81 },
    abilities: { 0: "Defiant", 1: "Keen Eye", H: "Merciless" },
    weightkg: 5
  },
  monchi: {
    num: 1032,
    name: "Mon-Chi",
    types: ["Fighting", "Dragon"],
    baseStats: { hp: 75, atk: 137, def: 63, spa: 55, spd: 80, spe: 70 },
    abilities: { 0: "Technician", 1: "Steadfast", H: "Poison Heal" },
    weightkg: 5
  },
  mustank: {
    num: 1033,
    name: "Mustank",
    types: ["Bug", "Poison"],
    baseStats: { hp: 80, atk: 60, def: 115, spa: 65, spd: 80, spe: 70 },
    abilities: { 0: "Stench", 1: "Neutralizing Gas", H: "Compound Eyes" },
    weightkg: 5
  },
  ohlmagoon: {
    num: 1034,
    name: "Ohlmagoon",
    types: ["Electric", "Dragon"],
    baseStats: { hp: 120, atk: 65, def: 80, spa: 101, spd: 90, spe: 99 },
    abilities: { 0: "Levitate", 1: "Drizzle", H: "Lightning Rod" },
    weightkg: 5
  },
  orbitgami: {
    num: 1035,
    name: "Orbitgami",
    types: ["Fairy", "Fire"],
    baseStats: { hp: 102, atk: 68, def: 55, spa: 104, spd: 110, spe: 81 },
    abilities: { 0: "Levitate" },
    weightkg: 5
  },
  pandamonium: {
    num: 1036,
    name: "Pandamonium",
    types: ["Grass", "Ground"],
    baseStats: { hp: 70, atk: 125, def: 100, spa: 40, spd: 80, spe: 105 },
    abilities: { 0: "Skill Link", H: "Technician" },
    weightkg: 5
  },
  phantasail: {
    num: 1037,
    name: "Phantasail",
    types: ["Ghost", "Water"],
    baseStats: { hp: 55, atk: 63, def: 105, spa: 101, spd: 78, spe: 133 },
    abilities: { 0: "Perish Body", 1: "Unnerve", H: "Cursed Body" },
    weightkg: 5
  },
  phanthazem: {
    num: 1038,
    name: "Phanthazem",
    types: ["Ghost"],
    baseStats: { hp: 85, atk: 73, def: 81, spa: 114, spd: 73, spe: 84 },
    abilities: { 0: "White Smoke", 1: "Unnerve", H: "Neutralizing Gas" },
    weightkg: 5
  },
  plasmacaw: {
    num: 1039,
    name: "Plasmacaw",
    types: ["Electric", "Fire"],
    baseStats: { hp: 90, atk: 50, def: 100, spa: 100, spd: 110, spe: 85 },
    abilities: { 0: "Color Change" },
    weightkg: 5
  },
  pyrelic: {
    num: 1040,
    name: "Pyrelic",
    types: ["Fire", "Ground"],
    baseStats: { hp: 100, atk: 90, def: 100, spa: 90, spd: 100, spe: 60 },
    abilities: { 0: "Reckless", 1: "Guts", H: "Rock Head" },
    weightkg: 5
  },
  pyroccult: {
    num: 1041,
    name: "Pyroccult",
    types: ["Ghost", "Fire"],
    baseStats: { hp: 95, atk: 66, def: 79, spa: 90, spd: 84, spe: 112 },
    abilities: { 0: "Cursed Body", 1: "Synchronize", H: "Magic Guard" },
    weightkg: 5
  },
  rexxon: {
    num: 1042,
    name: "Rexxon",
    types: ["Poison", "Rock"],
    baseStats: { hp: 119, atk: 117, def: 62, spa: 57, spd: 89, spe: 76 },
    abilities: { 0: "Thermal Exchange", 1: "Sticky Hold", H: "Aftermath" },
    weightkg: 5
  },
  sailgoshi: {
    num: 1043,
    name: "Sail-Goshi",
    types: ["Water", "Fairy"],
    baseStats: { hp: 130, atk: 60, def: 32, spa: 45, spd: 56, spe: 85 },
    abilities: { 0: "Simple" },
    weightkg: 5
  },
  searberus: {
    num: 1044,
    name: "Searberus",
    types: ["Fire", "Ghost"],
    baseStats: { hp: 105, atk: 110, def: 100, spa: 75, spd: 75, spe: 70 },
    abilities: { 0: "Intimidate", 1: "Guard Dog", H: "Strong Jaw" },
    weightkg: 5
  },
  shockatrice: {
    num: 1045,
    name: "Shockatrice",
    types: ["Electric"],
    baseStats: { hp: 80, atk: 110, def: 70, spa: 90, spd: 70, spe: 90 },
    abilities: { 0: "Defiant", H: "Lightning Rod" },
    weightkg: 5
  },
  spectache: {
    num: 1046,
    name: "Spectache",
    types: ["Water", "Grass"],
    baseStats: { hp: 81, atk: 96, def: 97, spa: 45, spd: 85, spe: 106 },
    abilities: { 0: "Defiant", 1: "Strong Jaw", H: "Marvel Scale" },
    weightkg: 5
  },
  spongimney: {
    num: 1047,
    name: "Spongimney",
    types: ["Water"],
    baseStats: { hp: 125, atk: 65, def: 80, spa: 90, spd: 70, spe: 25 },
    abilities: { 0: "Thermal Exchange", 1: "White Smoke", H: "Neutralizing Gas" },
    weightkg: 5
  },
  surchin: {
    num: 1048,
    name: "Surchin",
    types: ["Water", "Poison"],
    baseStats: { hp: 69, atk: 72, def: 60, spa: 73, spd: 100, spe: 141 },
    abilities: { 0: "Surge Surfer", 1: "Galvanize", H: "Download" },
    weightkg: 5
  },
  tometex: {
    num: 1049,
    name: "Tometex",
    types: ["Rock", "Ghost"],
    baseStats: { hp: 127, atk: 35, def: 92, spa: 35, spd: 92, spe: 88 },
    abilities: { 0: "Magic Bounce" },
    weightkg: 5
  },
  vamperilico: {
    num: 1050,
    name: "Vamperilico",
    types: ["Ghost", "Poison"],
    baseStats: { hp: 80, atk: 115, def: 75, spa: 100, spd: 90, spe: 73 },
    abilities: { 0: "Rattled", 1: "Technician", H: "Merciless" },
    weightkg: 5
  },
  wiifii: {
    num: 1051,
    name: "Wiifii",
    types: ["Electric"],
    baseStats: { hp: 61, atk: 52, def: 95, spa: 87, spd: 110, spe: 100 },
    abilities: { 0: "Static", 1: "Triage", H: "Wind Power" },
    weightkg: 5
  },
  wildemyst: {
    num: 1052,
    name: "Wildemyst",
    types: ["Dark", "Fighting"],
    baseStats: { hp: 95, atk: 125, def: 50, spa: 65, spd: 75, spe: 112 },
    abilities: { 0: "Misty Surge", H: "Neuroforce" },
    weightkg: 5
  },
  zassansa: {
    num: 1053,
    name: "Zassansa",
    types: ["Grass", "Rock"],
    baseStats: { hp: 72, atk: 50, def: 85, spa: 80, spd: 140, spe: 25 },
    abilities: { 0: "Synchronize", 1: "Cursed Body", H: "Bad Dreams" },
    weightkg: 5
  },
  expl0r3rex3: {
    num: 1.5,
    name: "ExPl0r3R.Ex3",
    types: ["Electric", "Ghost"],
    baseStats: { hp: 71, atk: 107, def: 60, spa: 93, spd: 94, spe: 100 },
    abilities: { 0: "Hadron Engine", 1: "Download", H: "Static" },
    height: 8,
    weightkg: 5
  },
  aparism: {
    num: 2.5,
    name: "Aparism",
    types: ["Normal", "Rock"],
    baseStats: { hp: 80, atk: 85, def: 120, spa: 50, spd: 70, spe: 80 },
    abilities: { 0: "Huge Power" },
    height: 23,
    weightkg: 5
  },
  averse: {
    num: 3.5,
    name: "Averse",
    types: ["Water", "Poison"],
    baseStats: { hp: 77, atk: 65, def: 116, spa: 117, spd: 80, spe: 95 },
    abilities: { 0: "Water Bubble", H: "Corrosion" },
    height: 5.7,
    weightkg: 5
  },
  bardisco: {
    num: 4.5,
    name: "Bardisco",
    types: ["Steel", "Fairy"],
    baseStats: { hp: 85, atk: 106, def: 90, spa: 93, spd: 98, spe: 98 },
    abilities: { 0: "Magician", H: "Pixilate" },
    height: 4.5,
    weightkg: 5
  },
  bonnetform: {
    num: 5.5,
    name: "Bonnetform",
    types: ["Ice", "Ghost"],
    baseStats: { hp: 43, atk: 99, def: 70, spa: 103, spd: 90, spe: 120 },
    abilities: { 0: "Cud Chew", H: "Water Bubble" },
    height: 12.7,
    weightkg: 5
  },
  chalquine: {
    num: 6.5,
    name: "Chalquine",
    types: ["Rock", "Normal"],
    baseStats: { hp: 100, atk: 105, def: 66, spa: 56, spd: 88, spe: 115 },
    abilities: { 0: "Rock Head", 1: "Water Absorb", H: "Weak Armor" },
    height: 60,
    weightkg: 5
  },
  champimimus: {
    num: 7.5,
    name: "Champimimus",
    types: ["Water", "Fighting"],
    baseStats: { hp: 100, atk: 112, def: 76, spa: 60, spd: 105, spe: 90 },
    abilities: { 0: "Natural Cure", 1: "Pressure", H: "Marvel Scale" },
    height: 250,
    weightkg: 5
  },
  chinchimra: {
    num: 8.5,
    name: "Chinchimra",
    types: ["Ground", "Psychic"],
    baseStats: { hp: 100, atk: 72, def: 52, spa: 64, spd: 50, spe: 112 },
    abilities: { 0: "Battle Armor", 1: "Regenerator", H: "Protean" },
    height: 473.4,
    weightkg: 5
  },
  crushave: {
    num: 9.5,
    name: "Crushave",
    types: ["Ground", "Ice"],
    baseStats: { hp: 102, atk: 101, def: 52, spa: 64, spd: 53, spe: 113 },
    abilities: { 0: "Supersweet Syrup", H: "Hustle" },
    height: 77,
    weightkg: 5
  },
  driveel: {
    num: 10.5,
    name: "Driveel",
    types: ["Electric", "Dragon"],
    baseStats: { hp: 80, atk: 90, def: 80, spa: 100, spd: 80, spe: 70 },
    abilities: { 0: "Soundproof", 1: "Punk Rock", H: "Liquid Voice" },
    height: 4.2,
    weightkg: 5
  },
  drukrackoon: {
    num: 11.5,
    name: "Drukrackoon",
    types: ["Dragon", "Electric"],
    baseStats: { hp: 80, atk: 55, def: 85, spa: 98, spd: 85, spe: 109 },
    abilities: { 0: "Pressure", 1: "Regenerator", H: "Multiscale" },
    height: 48,
    weightkg: 5
  },
  dynamantis: {
    num: 12.5,
    name: "Dynamantis",
    types: ["Electric", "Fighting"],
    baseStats: { hp: 75, atk: 125, def: 120, spa: 105, spd: 70, spe: 60 },
    abilities: { 0: "Iron Fist", H: "Flare Boost" },
    height: 48,
    weightkg: 5
  },
  electhog: {
    num: 13.5,
    name: "Electhog",
    types: ["Normal", "Electric"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Iron Barbs", H: "Lightning Rod" },
    height: 999,
    weightkg: 5
  },
  elyctron: {
    num: 14.5,
    name: "Elyctron",
    types: ["Bug", "Rock"],
    baseStats: { hp: 60, atk: 55, def: 100, spa: 85, spd: 130, spe: 40 },
    abilities: { 0: "Swarm", 1: "Healer", H: "Static" },
    height: 6,
    weightkg: 5
  },
  grrilla: {
    num: 15.5,
    name: "Grrilla",
    types: ["Dragon", "Rock"],
    baseStats: { hp: 100, atk: 90, def: 75, spa: 105, spd: 60, spe: 90 },
    abilities: { 0: "Gorilla Tactics" },
    height: 309,
    weightkg: 5
  },
  heacluster: {
    num: 16.5,
    name: "Heacluster",
    types: ["Dark", "Rock"],
    baseStats: { hp: 90, atk: 100, def: 60, spa: 110, spd: 90, spe: 120 },
    abilities: { 0: "Magician", 1: "Weak Armor", H: "Pixilate" },
    height: 65,
    weightkg: 5
  },
  helmekh: {
    num: 17.5,
    name: "Helmekh",
    types: ["Ground", "Steel"],
    baseStats: { hp: 89, atk: 59, def: 74, spa: 94, spd: 95, spe: 79 },
    abilities: { 0: "Sticky Hold", H: "Serene Grace" },
    height: 10,
    weightkg: 5
  },
  ironaspis: {
    num: 18.5,
    name: "Iron Aspis",
    types: ["Steel", "Fighting"],
    baseStats: { hp: 88, atk: 86, def: 152, spa: 92, spd: 70, spe: 82 },
    abilities: { 0: "Quark Drive" },
    height: 20,
    weightkg: 5
  },
  ironrebel: {
    num: 19.5,
    name: "Iron Rebel",
    types: ["Electric", "Poison"],
    baseStats: { hp: 86, atk: 102, def: 94, spa: 112, spd: 102, spe: 94 },
    abilities: { 0: "Quark Drive" },
    height: 380,
    weightkg: 5
  },
  jerboulda: {
    num: 20.5,
    name: "Jerboulda",
    types: ["Rock", "Normal"],
    baseStats: { hp: 64, atk: 95, def: 104, spa: 62, spd: 63, spe: 132 },
    abilities: { 0: "Sturdy", 1: "Battle Armor", H: "Hustle" },
    height: 6.8,
    weightkg: 5
  },
  luxsectus: {
    num: 21.5,
    name: "Luxsectus",
    types: ["Bug", "Psychic"],
    baseStats: { hp: 81, atk: 63, def: 55, spa: 107, spd: 99, spe: 101 },
    abilities: { 0: "Swarm", 1: "Psychic Surge", H: "Magic Bounce" },
    height: 36.2,
    weightkg: 5
  },
  majestapis: {
    num: 22.5,
    name: "Majestapis",
    types: ["Bug", "Grass"],
    baseStats: { hp: 115, atk: 140, def: 110, spa: 130, spd: 95, spe: 95 },
    abilities: { 0: "Grassy Surge", H: "Chlorophyll" },
    height: 34.2,
    weightkg: 5
  },
  matryocha: {
    num: 23.5,
    name: "Matryocha",
    types: ["Fairy", "Normal"],
    baseStats: { hp: 111, atk: 77, def: 88, spa: 111, spd: 99, spe: 69 },
    abilities: { 0: "Magic Bounce", 1: "Oblivious", H: "Protean" },
    height: 7.8,
    weightkg: 5
  },
  molarbear: {
    num: 24.5,
    name: "Molar Bear",
    types: ["Ice", "Normal"],
    baseStats: { hp: 100, atk: 120, def: 100, spa: 50, spd: 50, spe: 110 },
    abilities: { 0: "Strong Jaw" },
    height: 30,
    weightkg: 5
  },
  moriwarty: {
    num: 25.5,
    name: "Moriwarty",
    types: ["Dark", "Ice"],
    baseStats: { hp: 109, atk: 54, def: 82, spa: 81, spd: 89, spe: 40 },
    abilities: { 0: "Sniper", 1: "No Guard", H: "Contrary" },
    height: 120,
    weightkg: 5
  },
  notfly: {
    num: 26.5,
    name: "Notfly",
    types: ["Bug", "Normal"],
    baseStats: { hp: 60, atk: 115, def: 115, spa: 60, spd: 60, spe: 115 },
    abilities: { 0: "Swarm", 1: "Quick Feet", H: "Tinted Lens" },
    height: 5,
    weightkg: 5
  },
  obbyplex: {
    num: 27.5,
    name: "Obbyplex",
    types: ["Steel", "Psychic"],
    baseStats: { hp: 108, atk: 95, def: 90, spa: 95, spd: 90, spe: 43 },
    abilities: { 0: "Levitate", 1: "Mirror Armor", H: "Stamina" },
    height: 7,
    weightkg: 5
  },
  offendage: {
    num: 28.5,
    name: "Offendage",
    types: ["Poison", "Ice"],
    baseStats: { hp: 52, atk: 101, def: 43, spa: 111, spd: 94, spe: 111 },
    abilities: { 0: "Poison Point", 1: "Anger Point", H: "Water Bubble" },
    weightkg: 5
  },
  onionwings: {
    num: 29.5,
    name: "Onion Wings",
    types: ["Poison", "Flying"],
    baseStats: { hp: 103, atk: 97, def: 99, spa: 75, spd: 85, spe: 111 },
    abilities: { 0: "Protosynthesis" },
    weightkg: 5
  },
  pestispine: {
    num: 30.5,
    name: "Pestispine",
    types: ["Normal", "Poison"],
    baseStats: { hp: 135, atk: 110, def: 75, spa: 45, spd: 60, spe: 55 },
    abilities: { 0: "Poison Point", 1: "Gluttony", H: "Serene Grace" },
    weightkg: 5
  },
  plasmelion: {
    num: 31.5,
    name: "Plasmelion",
    types: ["Grass", "Electric"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Levitate" },
    weightkg: 5
  },
  polarpants: {
    num: 32.5,
    name: "Polarpants",
    types: ["Ice", "Normal"],
    baseStats: { hp: 95, atk: 95, def: 130, spa: 75, spd: 110, spe: 95 },
    abilities: { 0: "Snow Warning", H: "Serene Grace" },
    weightkg: 5
  },
  potatron: {
    num: 33.5,
    name: "Potatron",
    types: ["Ground", "Electric"],
    baseStats: { hp: 81, atk: 123, def: 121, spa: 89, spd: 79, spe: 37 },
    abilities: { 0: "Lightning Rod", 1: "Battery", H: "Water Absorb" },
    weightkg: 5
  },
  rockick: {
    num: 34.5,
    name: "Rockick",
    types: ["Fire", "Fighting"],
    baseStats: { hp: 111, atk: 99, def: 77, spa: 88, spd: 55, spe: 66 },
    abilities: { 0: "Reckless", 1: "Technician", H: "Long Reach" },
    weightkg: 5
  },
  rodendrain: {
    num: 35.5,
    name: "Rodendrain",
    types: ["Normal", "Water"],
    baseStats: { hp: 72, atk: 103, def: 71, spa: 60, spd: 75, spe: 123 },
    abilities: { 0: "Overcoat", 1: "Strong Jaw", H: "Storm Drain" },
    weightkg: 5
  },
  serprizius: {
    num: 36.5,
    name: "Serprizius",
    types: ["Poison", "Fighting"],
    baseStats: { hp: 100, atk: 115, def: 80, spa: 50, spd: 95, spe: 70 },
    abilities: { 0: "Swift Swim", 1: "No Guard", H: "Mold Breaker" },
    weightkg: 5
  },
  shadellisk: {
    num: 37.5,
    name: "Shadellisk",
    types: ["Ice", "Dark"],
    baseStats: { hp: 90, atk: 95, def: 70, spa: 95, spd: 130, spe: 100 },
    abilities: { 0: "Desolate Land" },
    weightkg: 5
  },
  skullpion: {
    num: 38.5,
    name: "Skullpion",
    types: ["Ground", "Ghost"],
    baseStats: { hp: 75, atk: 110, def: 115, spa: 60, spd: 65, spe: 85 },
    abilities: { 0: "Merciless", 1: "Mummy", H: "Contrary" },
    weightkg: 5
  },
  stringle: {
    num: 39.5,
    name: "Stringle",
    types: ["Normal", "Bug"],
    baseStats: { hp: 60, atk: 110, def: 65, spa: 80, spd: 90, spe: 110 },
    abilities: { 0: "Swarm", 1: "Cotton Down", H: "Fur Coat" },
    weightkg: 5
  },
  terralauri: {
    num: 40.5,
    name: "Terralauri",
    types: ["Bug", "Ground"],
    baseStats: { hp: 86, atk: 125, def: 104, spa: 51, spd: 97, spe: 77 },
    abilities: { 0: "Compound Eyes", 1: "Stamina", H: "Natural Cure" },
    weightkg: 5
  },
  twirlava: {
    num: 41.5,
    name: "Twirlava",
    types: ["Water", "Fire"],
    baseStats: { hp: 103, atk: 82, def: 100, spa: 92, spd: 70, spe: 102 },
    abilities: { 0: "Magma Armor", 1: "Dancer", H: "Regenerator" },
    weightkg: 5
  },
  velocipastor: {
    num: 42.5,
    name: "Velocipastor",
    types: ["Dragon", "Steel"],
    baseStats: { hp: 75, atk: 120, def: 50, spa: 40, spd: 90, spe: 125 },
    abilities: { 0: "Dazzling", 1: "Bulletproof", H: "Purifying Salt" },
    weightkg: 5
  },
  wellowish: {
    num: 43.5,
    name: "Wellowish",
    types: ["Water", "Rock"],
    baseStats: { hp: 110, atk: 44, def: 80, spa: 95, spd: 80, spe: 116 },
    abilities: { 0: "Clear Body", 1: "Misty Surge", H: "Unaware" },
    weightkg: 5
  },
  wyvking: {
    num: 44.5,
    name: "Wyvking",
    types: ["Dragon", "Normal"],
    baseStats: { hp: 136, atk: 118, def: 67, spa: 100, spd: 67, spe: 35 },
    abilities: { 0: "Thick Fat", 1: "Sheer Force", H: "Unaware" },
    weightkg: 5
  },
  cucurbella: {
    num: 45.5,
    name: "Cucurbella",
    types: ["Ice", "Grass"],
    baseStats: { hp: 115, atk: 66, def: 75, spa: 113, spd: 75, spe: 66 },
    abilities: { 0: "Unburden", 1: "Natural Cure", H: "Trace" },
    weightkg: 5
  }
};
//# sourceMappingURL=pokedex.js.map
