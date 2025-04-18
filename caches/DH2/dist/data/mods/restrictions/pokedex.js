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
  vulcaraptor: {
    num: 1001,
    name: "Vulcaraptor",
    types: ["Rock", "Fire"],
    baseStats: { hp: 68, atk: 122, def: 115, spa: 76, spd: 63, spe: 111 },
    abilities: { 0: "Technician", H: "Quick Feet" },
    weightkg: 25.6
  },
  parakinesis: {
    num: 1002,
    name: "Parakinesis",
    types: ["Psychic", "Flying"],
    baseStats: { hp: 124, atk: 130, def: 66, spa: 79, spd: 72, spe: 109 },
    abilities: { 0: "Prankster", 1: "Big Pecks", H: "Iron Fist" },
    weightkg: 1.3
  },
  serpaint: {
    num: 1003,
    name: "Serpaint",
    types: ["Dragon", "Ghost"],
    baseStats: { hp: 86, atk: 94, def: 60, spa: 123, spd: 90, spe: 72 },
    abilities: { 0: "Infiltrator", H: "Shadow Shield" },
    weightkg: 4
  },
  torgeist: {
    num: 1004,
    name: "Torgeist",
    types: ["Ghost", "Flying"],
    baseStats: { hp: 55, atk: 75, def: 90, spa: 115, spd: 100, spe: 105 },
    abilities: { 0: "Clear Body", 1: "Cursed Body", H: "Merciless" },
    weightkg: 6
  },
  regolite: {
    num: 1005,
    name: "Regolite",
    types: ["Ground", "Psychic"],
    baseStats: { hp: 80, atk: 75, def: 70, spa: 120, spd: 100, spe: 80 },
    abilities: { 0: "Shield Dust", 1: "Sand Spit", H: "Unburden" },
    weightkg: 56
  },
  polbearab: {
    num: 1006,
    name: "Polbearab",
    types: ["Ice", "Fighting"],
    baseStats: { hp: 95, atk: 98, def: 130, spa: 55, spd: 101, spe: 101 },
    abilities: { 0: "Poison Heal" },
    weightkg: 135
  },
  centhorn: {
    num: 1007,
    name: "Centhorn",
    types: ["Grass", "Fighting"],
    baseStats: { hp: 80, atk: 97, def: 93, spa: 65, spd: 75, spe: 85 },
    abilities: { 0: "Triage", H: "Grassy Surge" },
    weightkg: 41
  },
  donzyxote: {
    num: 1008,
    name: "Donzyxote",
    types: ["Dragon", "Psychic"],
    baseStats: { hp: 93, atk: 90, def: 72, spa: 90, spd: 121, spe: 59 },
    abilities: { 0: "Marvel Scale", H: "Own Tempo" },
    weightkg: 8
  },
  scimicobra: {
    num: 1009,
    name: "Scimicobra",
    types: ["Poison", "Fighting"],
    baseStats: { hp: 79, atk: 135, def: 101, spa: 64, spd: 81, spe: 75 },
    abilities: { 0: "Shed Skin", 1: "Sniper", H: "Infiltrator" },
    weightkg: 27.4
  },
  folliclawe: {
    num: 1010,
    name: "Folliclawe",
    types: ["Dark", "Steel"],
    baseStats: { hp: 80, atk: 72, def: 86, spa: 60, spd: 75, spe: 119 },
    abilities: { 0: "Hustle", H: "Hyper Cutter" },
    weightkg: 60
  },
  afloof: {
    num: 1011,
    name: "Afloof",
    types: ["Normal", "Dark"],
    baseStats: { hp: 90, atk: 90, def: 56, spa: 129, spd: 70, spe: 80 },
    abilities: { 0: "Hyper Cutter", 1: "Fluffy", H: "Adaptability" },
    weightkg: 42
  },
  nimbusteed: {
    num: 1012,
    name: "Nimbusteed",
    types: ["Flying", "Electric"],
    baseStats: { hp: 80, atk: 155, def: 90, spa: 75, spd: 70, spe: 50 },
    abilities: { 0: "Aerilate", 1: "Lightning Rod", H: "Cloud Nine" },
    weightkg: 0.1
  },
  aerock: {
    num: 1013,
    name: "Aerock",
    types: ["Rock", "Flying"],
    baseStats: { hp: 80, atk: 105, def: 100, spa: 103, spd: 90, spe: 95 },
    abilities: { 0: "Poison Heal", H: "Volt Absorb" },
    weightkg: 35
  },
  borassa: {
    num: 1014,
    name: "Borassa",
    types: ["Dark", "Grass"],
    baseStats: { hp: 136, atk: 76, def: 118, spa: 88, spd: 95, spe: 87 },
    abilities: { 0: "Thick Fat", 1: "Chlorophyll", H: "Anger Point" },
    weightkg: 143
  },
  sharm: {
    num: 1015,
    name: "Sharm",
    types: ["Water", "Electric"],
    baseStats: { hp: 80, atk: 70, def: 95, spa: 85, spd: 130, spe: 45 },
    abilities: { 0: "Unaware", H: "No Guard" },
    weightkg: 90
  },
  nunopod: {
    num: 1016,
    name: "Nunopod",
    types: ["Normal", "Bug"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Slow Start", 1: "Emergency Exit", H: "Stall" },
    weightkg: 38
  },
  crypterid: {
    num: 1017,
    name: "Crypterid",
    types: ["Ground", "Poison"],
    baseStats: { hp: 81, atk: 100, def: 103, spa: 75, spd: 121, spe: 60 },
    abilities: { 0: "Poison Point", 1: "Swift Swim", H: "Unnerve" },
    weightkg: 64
  },
  abysseil: {
    num: 1018,
    name: "Abysseil",
    types: ["Water", "Psychic"],
    baseStats: { hp: 80, atk: 44, def: 95, spa: 83, spd: 95, spe: 138 },
    abilities: { 0: "Water Veil", 1: "Sap Sipper", H: "Rain Dish" },
    weightkg: 1
  },
  faerenheit: {
    num: 1019,
    name: "Faerenheit",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 73, atk: 79, def: 137, spa: 107, spd: 101, spe: 73 },
    abilities: { 0: "Beast Boost" },
    weightkg: 3.4,
    gender: "N"
  },
  spiriteal: {
    num: 1020,
    name: "Spiriteal",
    types: ["Ghost"],
    baseStats: { hp: 60, atk: 105, def: 60, spa: 120, spd: 60, spe: 105 },
    abilities: { 0: "Illusion" },
    weightkg: 40.5
  },
  zoltanka: {
    num: 1021,
    name: "Zoltanka",
    types: ["Steel", "Ghost"],
    baseStats: { hp: 112, atk: 77, def: 53, spa: 109, spd: 129, spe: 60 },
    abilities: { 0: "Filter", 1: "Minus", H: "Screen Cleaner" },
    weightkg: 126
  },
  flydra: {
    num: 1022,
    name: "Flydra",
    types: ["Bug", "Dragon"],
    baseStats: { hp: 60, atk: 95, def: 50, spa: 120, spd: 80, spe: 125 },
    abilities: { 0: "Compound Eyes", 1: "Levitate", H: "Swarm" },
    weightkg: 0.1
  },
  coracrab: {
    num: 1023,
    name: "Coracrab",
    types: ["Water", "Rock"],
    baseStats: { hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40 },
    abilities: { 0: "Lightning Rod", 1: "Rock Head", H: "Reckless" },
    weightkg: 47.3
  },
  quadringo: {
    num: 1024,
    name: "Quadringo",
    types: ["Fairy", "Dragon"],
    baseStats: { hp: 85, atk: 110, def: 103, spa: 82, spd: 78, spe: 82 },
    abilities: { 0: "Keen Eye", 1: "Big Pecks", H: "Mold Breaker" },
    weightkg: 101
  },
  teslaple: {
    num: 1025,
    name: "Teslaple",
    types: ["Electric", "Grass"],
    baseStats: { hp: 80, atk: 40, def: 120, spa: 120, spd: 40, spe: 120 },
    abilities: { 0: "Grass Pelt", 1: "Flower Veil", H: "Competitive" },
    weightkg: 0.1
  },
  kapagon: {
    num: 1026,
    name: "Kapagon",
    types: ["Water", "Dragon"],
    baseStats: { hp: 90, atk: 90, def: 100, spa: 70, spd: 80, spe: 75 },
    abilities: { 0: "Regenerator", 1: "Rain Dish", H: "Drizzle" },
    weightkg: 44.5
  },
  cyknight: {
    num: 1027,
    name: "Cyknight",
    types: ["Steel"],
    baseStats: { hp: 80, atk: 80, def: 100, spa: 50, spd: 100, spe: 90 },
    abilities: { 0: "Intrepid Sword" },
    weightkg: 100
  },
  dirtoad: {
    num: 1028,
    name: "Dirtoad",
    baseForme: "Clean",
    types: ["Water", "Ground"],
    baseStats: { hp: 95, atk: 110, def: 60, spa: 60, spd: 110, spe: 95 },
    abilities: { 0: "Dry Skin", 1: "Hydration", H: "Damp" },
    weightkg: 10.1,
    cosmeticFormes: ["Dirtoad-Dirty"],
    formeOrder: ["Dirtoad", "Dirtoad-Dirty"]
  },
  // dirtoaddirty: {
  // num: 1028,
  // name: "Dirtoad",
  // types: ["Water", "Ground"],
  // baseStats: {hp: 95, atk: 110, def: 60, spa: 60, spd: 110, spe: 95},
  // abilities: {0: "Dry Skin", 1: "Hydration", H: "Damp"},
  // weightkg: 10.1,
  // cosmeticFormes: ["Dirtoad"],
  // formeOrder: ["Dirtoad", "Dirtoad-Dirty"],
  // },
  crystelf: {
    num: 1029,
    name: "Crystelf",
    types: ["Rock", "Fairy"],
    baseStats: { hp: 50, atk: 95, def: 45, spa: 113, spd: 93, spe: 124 },
    abilities: { 0: "Trace", 1: "Sand Force", H: "Sand Rush" },
    weightkg: 2.5
  },
  rancourgar: {
    num: 1030,
    name: "Rancourgar",
    types: ["Normal", "Fire"],
    baseStats: { hp: 85, atk: 106, def: 64, spa: 98, spd: 118, spe: 100 },
    abilities: { 0: "Reckless", 1: "Soundproof", H: "Anger Point" },
    weightkg: 70
  },
  scalaron: {
    num: 1031,
    name: "Scalaron",
    types: ["Fire", "Flying"],
    baseStats: { hp: 90, atk: 70, def: 90, spa: 100, spd: 105, spe: 75 },
    abilities: { 0: "Blaze", H: "Rough Skin" },
    weightkg: 82
  },
  dragraceful: {
    num: 1032,
    name: "Dragraceful",
    gender: "M",
    types: ["Normal", "Fairy"],
    baseStats: { hp: 72, atk: 110, def: 72, spa: 50, spd: 88, spe: 118 },
    abilities: { 0: "Leaf Guard", 1: "Queenly Majesty", H: "Sweet Veil" },
    weightkg: 21.4
  },
  tantrary: {
    num: 1033,
    name: "Tantrary",
    types: ["Fairy", "Psychic"],
    baseStats: { hp: 80, atk: 50, def: 80, spa: 120, spd: 100, spe: 85 },
    abilities: { 0: "Soul-Heart" },
    weightkg: 8
  },
  modolith: {
    num: 1034,
    name: "Modolith",
    types: ["Steel", "Normal"],
    baseStats: { hp: 57, atk: 102, def: 152, spa: 61, spd: 91, spe: 87 },
    abilities: { 0: "Levitate", 1: "Light Metal", H: "Full Metal Body" },
    weightkg: 295
  },
  snailord: {
    num: 1035,
    name: "Snailord",
    types: ["Bug", "Rock"],
    baseStats: { hp: 170, atk: 90, def: 45, spa: 90, spd: 45, spe: 60 },
    abilities: { 0: "Water Veil", 1: "Oblivious", H: "Pressure" },
    weightkg: 398
  },
  arbrella: {
    num: 1036,
    name: "Arbrella",
    types: ["Grass", "Ground"],
    baseStats: { hp: 80, atk: 80, def: 90, spa: 115, spd: 110, spe: 55 },
    abilities: { 0: "Overgrow", H: "Shadow Shield" },
    weightkg: 56
  },
  draugelid: {
    num: 1037,
    name: "Draugelid",
    types: ["Ghost", "Ice"],
    baseStats: { hp: 75, atk: 90, def: 50, spa: 55, spd: 75, spe: 65 },
    abilities: { 0: "Adaptability", 1: "Slush Rush", H: "Technician" },
    weightkg: 68.1
  },
  cinnastar: {
    num: 1038,
    name: "Cinnastar",
    types: ["Rock", "Poison"],
    baseStats: { hp: 110, atk: 95, def: 80, spa: 95, spd: 80, spe: 80 },
    abilities: { 0: "Regenerator", 1: "Mold Breaker", H: "Liquid Ooze" },
    weightkg: 52
  },
  refluse: {
    num: 1039,
    name: "Refluse",
    types: ["Bug", "Poison"],
    baseStats: { hp: 51, atk: 139, def: 66, spa: 78, spd: 66, spe: 110 },
    abilities: { 0: "Compound Eyes", 1: "Insomnia", H: "Corrosion" },
    weightkg: 14.7
  },
  kelven: {
    num: 1040,
    name: "Kelven",
    types: ["Ice", "Fairy"],
    baseStats: { hp: 53, atk: 83, def: 107, spa: 131, spd: 83, spe: 113 },
    abilities: { 0: "Beast Boost" },
    weightkg: 14.2,
    gender: "N"
  },
  kodokai: {
    num: 1041,
    name: "Kodokai",
    types: ["Ghost", "Fire"],
    baseStats: { hp: 100, atk: 60, def: 110, spa: 130, spd: 110, spe: 40 },
    abilities: { 0: "White Smoke", H: "Aroma Veil" },
    weightkg: 1.1
  },
  cindarner: {
    num: 1042,
    name: "Cindarner",
    types: ["Bug", "Fire"],
    baseStats: { hp: 110, atk: 85, def: 65, spa: 126, spd: 80, spe: 50 },
    abilities: { 0: "Speed Boost", H: "Drought" },
    weightkg: 21.2
  },
  thucotuco: {
    num: 1043,
    name: "Thuco-Tuco",
    types: ["Ground"],
    baseStats: { hp: 120, atk: 95, def: 85, spa: 65, spd: 65, spe: 30 },
    abilities: { 0: "Intimidate", 1: "Sturdy", H: "Sand Spit" },
    weightkg: 45.8
  },
  sorree: {
    num: 1044,
    name: "Sorree",
    types: ["Dark"],
    baseStats: { hp: 100, atk: 128, def: 90, spa: 77, spd: 77, spe: 128 },
    abilities: { 0: "Unnerve" },
    weightkg: 8
  },
  gembezzle: {
    num: 1045,
    name: "Gembezzle",
    types: ["Rock", "Dark"],
    baseStats: { hp: 68, atk: 86, def: 111, spa: 90, spd: 111, spe: 104 },
    abilities: { 0: "Sturdy", 1: "Pickpocket", H: "Flare Boost" },
    weightkg: 18.5
  },
  winterloper: {
    num: 1046,
    name: "Winterloper",
    types: ["Ice", "Poison"],
    baseStats: { hp: 59, atk: 76, def: 59, spa: 127, spd: 127, spe: 76 },
    abilities: { 0: "Levitate" },
    weightkg: 8
  },
  agapest: {
    num: 1047,
    name: "Agapest",
    types: ["Bug", "Steel"],
    baseStats: { hp: 70, atk: 70, def: 70, spa: 111, spd: 90, spe: 123 },
    abilities: { 0: "Swarm", 1: "Technician", H: "Light Metal" },
    weightkg: 8
  },
  volvolpa: {
    num: 1048,
    name: "Volvolpa",
    types: ["Ice", "Electric"],
    baseStats: { hp: 76, atk: 97, def: 64, spa: 70, spd: 102, spe: 121 },
    abilities: { 0: "Strong Jaw", 1: "Slush Rush", H: "Infiltrator" },
    weightkg: 24
  },
  punduluum: {
    num: 1049,
    name: "Punduluum",
    types: ["Steel", "Flying"],
    baseStats: { hp: 78, atk: 48, def: 84, spa: 96, spd: 88, spe: 81 },
    abilities: { 0: "Berserk", 1: "Serene Grace", H: "Pure Power" },
    weightkg: 20
  },
  wraithful: {
    num: 1050,
    name: "Wraithful",
    types: ["Dark", "Ghost"],
    baseStats: { hp: 95, atk: 115, def: 90, spa: 80, spd: 90, spe: 60 },
    abilities: { 0: "Intimidate", 1: "Sand Force", H: "Defiant" },
    weightkg: 83
  },
  panzarma: {
    num: 1051,
    name: "Panzarma",
    types: ["Steel", "Fighting"],
    baseStats: { hp: 89, atk: 115, def: 95, spa: 110, spd: 75, spe: 36 },
    abilities: { 0: "Battle Armor", 1: "Heavy Metal", H: "Mega Launcher" },
    weightkg: 198
  },
  krachiten: {
    num: 1052,
    name: "Krachiten",
    types: ["Water", "Bug"],
    baseStats: { hp: 90, atk: 120, def: 70, spa: 80, spd: 60, spe: 110 },
    abilities: { 0: "Torrent", H: "Prankster" },
    weightkg: 128
  },
  cellsius: {
    num: 1053,
    name: "Cellsius",
    types: ["Water", "Fairy"],
    baseStats: { hp: 59, atk: 103, def: 83, spa: 127, spd: 97, spe: 101 },
    abilities: { 0: "Beast Boost" },
    weightkg: 18
  },
  borelem: {
    num: 1054,
    name: "Borelem",
    types: ["Rock", "Ice"],
    baseStats: { hp: 133, atk: 88, def: 74, spa: 95, spd: 80, spe: 100 },
    abilities: { 0: "Snow Warning", H: "No Guard" },
    weightkg: 430
  },
  electangle: {
    num: 1055,
    name: "Electangle",
    types: ["Electric"],
    baseStats: { hp: 100, atk: 75, def: 72, spa: 75, spd: 175, spe: 103 },
    abilities: { 0: "Pressure", 1: "Synchronize", H: "Mold Breaker" },
    weightkg: 238
  },
  orchile: {
    num: 1056,
    name: "Orchile",
    types: ["Grass", "Poison"],
    baseStats: { hp: 65, atk: 60, def: 75, spa: 110, spd: 121, spe: 64 },
    abilities: { 0: "Sweet Veil", H: "Aroma Veil" },
    weightkg: 12
  },
  shinodori: {
    num: 1057,
    name: "Shinodori",
    types: ["Flying", "Fighting"],
    baseStats: { hp: 92, atk: 95, def: 88, spa: 100, spd: 84, spe: 106 },
    abilities: { 0: "Limber", 1: "Natural Cure", H: "Solar Power" },
    weightkg: 8
  },
  fluidrake: {
    num: 1058,
    name: "Fluidrake",
    types: ["Water", "Steel"],
    baseStats: { hp: 105, atk: 70, def: 100, spa: 75, spd: 95, spe: 80 },
    abilities: { 0: "Poison Touch", H: "Sheer Force" },
    weightkg: 45
  },
  potossum: {
    num: 1059,
    name: "Potossum",
    types: ["Normal"],
    baseStats: { hp: 115, atk: 45, def: 65, spa: 85, spd: 110, spe: 55 },
    abilities: { 0: "Poison Touch", 1: "Huge Power", H: "Dancer" },
    weightkg: 42
  },
  twygdrasill: {
    num: 1060,
    name: "Twygdrasill",
    types: ["Grass", "Dragon"],
    baseStats: { hp: 81, atk: 112, def: 117, spa: 81, spd: 76, spe: 103 },
    abilities: { 0: "Prism Armor" },
    weightkg: 222
  }
};
//# sourceMappingURL=pokedex.js.map
