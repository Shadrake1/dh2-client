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
  breroot: {
    num: 1001,
    species: "Breroot",
    types: ["Grass", "Ground"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 60, spe: 60 },
    abilities: { 0: "Storm Drain", 1: "Regenerator", H: "Ripen" },
    heightm: 1.8,
    weightkg: 900,
    eggGroups: ["Undiscovered"]
  },
  furnostrich: {
    num: 1002,
    species: "Furnostrich",
    types: ["Fire", "Steel"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 80, atk: 104, def: 86, spa: 90, spd: 60, spe: 100 },
    abilities: { 0: "Steam Engine", 1: "Tangled Feet", H: "Flame Body" },
    heightm: 2.1,
    weightkg: 145,
    eggGroups: ["Undiscovered"]
  },
  sholossus: {
    num: 1003,
    species: "Sholossus",
    types: ["Water", "Fighting"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 100, atk: 123, def: 93, spa: 67, spd: 67, spe: 70 },
    abilities: { 0: "Static", 1: "Poison Touch", H: "Dry Skin" },
    heightm: 1.8,
    weightkg: 155,
    eggGroups: ["Undiscovered"]
  },
  espopod: {
    num: 1004,
    species: "Espopod",
    types: ["Bug", "Psychic"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 55, atk: 50, def: 50, spa: 95, spd: 125, spe: 85 },
    abilities: { 0: "Forcefield", 1: "Tinted Lens", H: "Trace" },
    heightm: 0.3,
    weightkg: 6.3,
    eggGroups: ["Undiscovered"]
  },
  croissansect: {
    num: 1005,
    species: "Croissansect",
    types: ["Bug"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 150, atk: 80, def: 120, spa: 50, spd: 50, spe: 30 },
    abilities: { 0: "Shell Armor", 1: "Rattled", H: "Oblivious" },
    heightm: 2.6,
    weightkg: 999,
    eggGroups: ["Undiscovered"]
  },
  piedraderm: {
    num: 1006,
    species: "Piedraderm",
    types: ["Normal", "Rock"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 75, atk: 88, def: 78, spa: 65, spd: 70, spe: 105 },
    abilities: { 0: "Telepathy", 1: "Sand Rush", H: "Skill Link" },
    heightm: 1.4,
    weightkg: 77,
    eggGroups: ["Undiscovered"]
  },
  kakavo: {
    num: 1007,
    species: "Kakavo",
    types: ["Normal", "Psychic"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 50, atk: 50, def: 80, spa: 110, spd: 120, spe: 50 },
    abilities: { 0: "Wandering Spirit", 1: "Enlightened Soul", H: "Simple" },
    heightm: 0.9,
    weightkg: 4.5,
    eggGroups: ["Undiscovered"]
  },
  pelli: {
    num: 1008,
    species: "Pelli",
    types: ["Water"],
    gender: "N",
    baseStats: { hp: 70, atk: 70, def: 60, spa: 92, spd: 90, spe: 88 },
    abilities: { 0: "Prankster", 1: "Healer", H: "Liquid Voice" },
    heightm: 1.3,
    weightkg: 27,
    eggGroups: ["Undiscovered"]
  },
  dripig: {
    num: 1009,
    species: "Dripig",
    types: ["Water"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 70, atk: 70, def: 100, spa: 70, spd: 110, spe: 70 },
    abilities: { 0: "Water Absorb", 1: "Misty Surge", H: "Water Bubble" },
    heightm: 0.5,
    weightkg: 23,
    eggGroups: ["Undiscovered"]
  },
  harmoth: {
    num: 1010,
    species: "Harmoth",
    types: ["Fairy"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 50, atk: 99, def: 80, spa: 62, spd: 80, spe: 109 },
    abilities: { 0: "Flattery" },
    // ability 1 is flattery
    heightm: 0.2,
    weightkg: 6,
    eggGroups: ["Undiscovered"]
  },
  formagia: {
    num: 1011,
    species: "Formagia",
    types: ["Psychic", "Poison"],
    gender: "N",
    baseStats: { hp: 70, atk: 60, def: 110, spa: 90, spd: 130, spe: 40 },
    abilities: { 0: "Liquid Ooze", 1: "Protean", H: "Corrosion" },
    heightm: 1.6,
    weightkg: 64,
    eggGroups: ["Undiscovered"]
  },
  sodia: {
    num: 1012,
    species: "Sodia",
    types: ["Rock"],
    gender: "N",
    baseStats: { hp: 50, atk: 100, def: 110, spa: 60, spd: 60, spe: 98 },
    abilities: { 0: "Defrost", 1: "Defiant", H: "Sturdy" },
    heightm: 0.6,
    weightkg: 45,
    eggGroups: ["Undiscovered"]
  },
  woosher: {
    num: 1014,
    species: "Woosher",
    types: ["Ice"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 100, atk: 70, def: 115, spa: 85, spd: 101, spe: 29 },
    abilities: { 0: "Sturdy", 1: "Filter", H: "Snow Warning" },
    heightm: 1,
    weightkg: 77,
    eggGroups: ["Undiscovered"]
  },
  gurso: {
    num: 1015,
    species: "Gurso",
    types: ["Normal"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 18, atk: 15, def: 25, spa: 75, spd: 207, spe: 20 },
    abilities: { 0: "Wonder Skin", 1: "Regenerator", H: "Magic Guard" },
    heightm: 0.1,
    weightkg: 7,
    eggGroups: ["Undiscovered"]
  },
  phelpinch: {
    num: 1016,
    species: "Phelpinch",
    types: ["Water"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 70, atk: 110, def: 80, spa: 50, spd: 55, spe: 95 },
    abilities: { 0: "Weak Armor", 1: "Adaptability", H: "Swift Swim" },
    heightm: 0.8,
    weightkg: 36,
    eggGroups: ["Undiscovered"]
  },
  shiah: {
    num: 1017,
    species: "Shiah",
    types: ["Ghost", "Fairy"],
    gender: "N",
    baseStats: { hp: 62, atk: 50, def: 83, spa: 115, spd: 117, spe: 55 },
    abilities: { 0: "Illusion", 1: "Grassy Surge", H: "Psychic Surge" },
    heightm: 0.6,
    weightkg: 14,
    eggGroups: ["Undiscovered"]
  },
  gillomen: {
    num: 1018,
    species: "Gillomen",
    types: ["Water", "Ghost"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 160, atk: 20, def: 100, spa: 40, spd: 100, spe: 40 },
    abilities: { 0: "Damp", 1: "Perish Body", H: "Huge Power" },
    heightm: 5.6,
    weightkg: 999,
    eggGroups: ["Undiscovered"]
  },
  furiotl: {
    num: 1020,
    species: "Furiotl",
    types: ["Water", "Dragon"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 70, atk: 100, def: 80, spa: 130, spd: 65, spe: 95 },
    abilities: { 0: "Guts", 1: "Levitate", H: "Berserk" },
    heightm: 3.3,
    weightkg: 91,
    eggGroups: ["Undiscovered"]
  },
  cuzima: {
    num: 1021,
    species: "Cuzima",
    types: ["Steel"],
    gender: "N",
    baseStats: { hp: 70, atk: 75, def: 75, spa: 100, spd: 75, spe: 51 },
    abilities: { 0: "Magnet Pull", 1: "Battery", H: "Plus" },
    heightm: 1,
    weightkg: 54,
    eggGroups: ["Undiscovered"]
  },
  themon: {
    num: 1022,
    species: "Themon",
    types: ["Dark"],
    gender: "N",
    baseStats: { hp: 55, atk: 70, def: 50, spa: 83, spd: 105, spe: 50 },
    abilities: { 0: "Preservation", 1: "Magic Bounce", H: "Stakeout" },
    heightm: 1.8,
    weightkg: 32,
    eggGroups: ["Undiscovered"]
  },
  shocbrute: {
    num: 1023,
    species: "Shocbrute",
    types: ["Electric", "Flying"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 80, atk: 125, def: 80, spa: 75, spd: 70, spe: 80 },
    abilities: { 0: "Pressure", 1: "Sheer Force", H: "Galvanize" },
    heightm: 1.6,
    weightkg: 86,
    eggGroups: ["Undiscovered"]
  },
  lightnimbus: {
    num: 1024,
    species: "Lightnimbus",
    types: ["Electric", "Flying"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 63, atk: 75, def: 62, spa: 110, spd: 75, spe: 125 },
    abilities: { 0: "Pressure", 1: "Drizzle", H: "Minus" },
    heightm: 1.7,
    weightkg: 59,
    eggGroups: ["Undiscovered"]
  },
  cephalethal: {
    num: 1025,
    species: "Cephalethal",
    types: ["Dragon"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 80, atk: 135, def: 95, spa: 63, spd: 55, spe: 77 },
    abilities: { 0: "Force Of Nature", 1: "Rock Head", H: "Quick Feet" },
    heightm: 1.8,
    weightkg: 907,
    eggGroups: ["Undiscovered"]
  },
  malizor: {
    num: 1026,
    species: "Malizor",
    types: ["Dark"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 105, atk: 125, def: 75, spa: 60, spd: 70, spe: 75 },
    abilities: { 0: "Avian", 1: "Infiltrator", H: "Merciless" },
    heightm: 2.3,
    weightkg: 159,
    eggGroups: ["Undiscovered"]
  },
  lunheron: {
    num: 1027,
    species: "Lunheron",
    types: ["Flying"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 118, atk: 60, def: 75, spa: 92, spd: 100, spe: 70 },
    abilities: { 0: "Healer", 1: "Pastel Veil", H: "Delta Stream" },
    heightm: 6.1,
    weightkg: 227,
    eggGroups: ["Undiscovered"]
  },
  infekshi: {
    num: 1028,
    species: "Infekshi",
    types: ["Poison"],
    gender: "N",
    baseStats: { hp: 50, atk: 137, def: 55, spa: 100, spd: 80, spe: 103 },
    abilities: { 0: "Trail of Malady", 1: "Contagious Wound", H: "Hustle" },
    heightm: 1.7,
    weightkg: 45,
    eggGroups: ["Undiscovered"]
  },
  erverena: {
    num: 1029,
    species: "Erverena",
    //dormant
    baseForme: "Dormant",
    types: ["Fire", "Water"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 105, atk: 50, def: 140, spa: 50, spd: 70, spe: 50 },
    abilities: { 0: "Dry Skin", 1: "Drizzle", H: "Perennial Awakening" },
    heightm: 1.4,
    weightkg: 771,
    eggGroups: ["Undiscovered"]
  },
  erverenaawakened: {
    num: 681,
    name: "Erverena-Awakened",
    baseSpecies: "Erverena",
    forme: "Awakened",
    types: ["Fire", "Water"],
    gender: "F",
    baseStats: { hp: 105, atk: 50, def: 80, spa: 115, spd: 85, spe: 55 },
    abilities: { 0: "Perennial Awakening" },
    heightm: 1.7,
    weightkg: 53,
    color: "Brown",
    eggGroups: ["Mineral"],
    requiredAbility: "Perennial Awakening",
    battleOnly: "Erverena"
  },
  siltmanya: {
    num: 1030,
    species: "Siltmanya",
    types: ["Ground", "Fairy"],
    gender: "N",
    baseStats: { hp: 55, atk: 70, def: 105, spa: 100, spd: 100, spe: 60 },
    abilities: { 0: "Prankster", 1: "Power Spot", H: "Weak Armor" },
    heightm: 0.5,
    weightkg: 9,
    eggGroups: ["Undiscovered"]
  },
  tudek: {
    num: 1031,
    species: "Tudek",
    types: ["Dark"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 50, atk: 100, def: 50, spa: 50, spd: 50, spe: 143 },
    abilities: { 0: "Unseen Fist", 1: "Scrappy", H: "Infiltrator" },
    heightm: 1.5,
    weightkg: 2,
    eggGroups: ["Undiscovered"]
  },
  glypdorsa: {
    num: 1032,
    species: "Glypdorsa",
    types: ["Normal"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 88, atk: 70, def: 160, spa: 50, spd: 70, spe: 50 },
    abilities: { 0: "Bulletproof", 1: "Anger Point", H: "Sturdy" },
    heightm: 1.4,
    weightkg: 996,
    eggGroups: ["Undiscovered"]
  },
  voraciousect: {
    num: 1033,
    species: "Voraciousect",
    types: ["Bug"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 95, atk: 130, def: 125, spa: 90, spd: 70, spe: 95 },
    abilities: { 0: "Swarm", 1: "Heatproof", H: "Hyper Cutter" },
    heightm: 2.7,
    weightkg: 249,
    eggGroups: ["Undiscovered"]
  },
  pichiri: {
    num: 1034,
    species: "Pichiri",
    types: ["Grass"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 75, atk: 60, def: 90, spa: 85, spd: 110, spe: 30 },
    abilities: { 0: "Guano Boost", 1: "Symbiosis", H: "Solar Power" },
    heightm: 1.1,
    weightkg: 14,
    eggGroups: ["Undiscovered"]
  },
  wooliba: {
    num: 1035,
    species: "Wooliba",
    types: ["Normal", "Flying"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 60, atk: 74, def: 57, spa: 100, spd: 58, spe: 101 },
    abilities: { 0: "Pitcher Armor", 1: "Symbiosis", H: "Fluffy" },
    heightm: 0.5,
    weightkg: 11,
    eggGroups: ["Undiscovered"]
  },
  olfacrid: {
    num: 1036,
    species: "Olfacrid",
    types: ["Dark"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 65, atk: 70, def: 90, spa: 90, spd: 105, spe: 90 },
    abilities: { 0: "Natural Cure", 1: "Toxic Boost", H: "Curious Medicine" },
    heightm: 1.6,
    weightkg: 45,
    eggGroups: ["Undiscovered"]
  },
  rodiche: {
    num: 1037,
    species: "Rodiche",
    //bay form is counted as base here
    types: ["Normal", "Water"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 64, atk: 70, def: 65, spa: 75, spd: 65, spe: 101 },
    abilities: { 0: "Adaptability", 1: "Speed Boost", H: "Competitive" },
    heightm: 1.2,
    weightkg: 24,
    eggGroups: ["Undiscovered"],
    otherFormes: ["Rodiche-Wildwood", "Rodiche-Hinterlands", "Rodiche-Hive"],
    formeOrder: ["Rodiche", "Rodiche-Wildwood", "Rodiche-Hinterlands", "Rodiche-Hive"]
  },
  rodichewildwood: {
    num: 1037,
    species: "Rodiche-Wildwood",
    types: ["Normal", "Grass"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 64, atk: 50, def: 95, spa: 81, spd: 140, spe: 10 },
    abilities: { 0: "Adaptability", 1: "Effect Spore", H: "Warped" },
    heightm: 1,
    weightkg: 27,
    eggGroups: ["Undiscovered"]
  },
  rodichehinterlands: {
    num: 1037,
    species: "Rodiche-Hinterlands",
    types: ["Normal", "Ice"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 64, atk: 50, def: 65, spa: 95, spd: 60, spe: 106 },
    abilities: { 0: "Adaptability", 1: "Slush Rush", H: "Comatose" },
    heightm: 0.7,
    weightkg: 20,
    eggGroups: ["Undiscovered"]
  },
  rodichehive: {
    num: 1037,
    species: "Rodiche-Hive",
    types: ["Normal", "Bug"],
    genderRatio: { M: 0, F: 1 },
    baseStats: { hp: 125, atk: 125, def: 50, spa: 50, spd: 50, spe: 40 },
    abilities: { 0: "Adaptability", 1: "Guts", H: "Merciless" },
    heightm: 2.1,
    weightkg: 272,
    eggGroups: ["Undiscovered"]
  },
  mowisp: {
    num: 1038,
    species: "Mowisp",
    types: ["Ghost", "Flying"],
    gender: "N",
    baseStats: { hp: 60, atk: 61, def: 60, spa: 100, spd: 125, spe: 104 },
    abilities: { 0: "Perish Body", 1: "Synchronize", H: "Regenerator" },
    heightm: 2,
    weightkg: 0.5,
    eggGroups: ["Undiscovered"]
  },
  cephalopath: {
    num: 1039,
    species: "Cephalopath",
    types: ["Psychic"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 100, atk: 70, def: 65, spa: 120, spd: 125, spe: 70 },
    abilities: { 0: "Warped", 1: "Dazzling", H: "Serene Grace" },
    heightm: 2,
    weightkg: 113,
    eggGroups: ["Undiscovered"]
  },
  vambyss: {
    num: 1040,
    species: "Vambyss",
    types: ["Dark"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 70, atk: 116, def: 84, spa: 100, spd: 84, spe: 46 },
    abilities: { 0: "Contrary", 1: "Overcoat", H: "Shed Skin" },
    heightm: 1,
    weightkg: 27,
    eggGroups: ["Undiscovered"]
  },
  mammicky: {
    num: 1041,
    species: "Mammicky",
    types: ["Bug", "Normal"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 83, atk: 84, def: 84, spa: 84, spd: 84, spe: 71 },
    abilities: { 0: "Compound Eyes", 1: "Fur Coat", H: "Technician" },
    heightm: 1.3,
    weightkg: 45,
    eggGroups: ["Undiscovered"]
  },
  sklea: {
    num: 1042,
    species: "Sklea",
    types: ["Fighting"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 70, atk: 125, def: 80, spa: 75, spd: 50, spe: 100 },
    abilities: { 0: "Battle Armor", 1: "Unburden", H: "Bulletproof" },
    heightm: 1.7,
    weightkg: 64,
    eggGroups: ["Undiscovered"]
  },
  corazone: {
    num: 1043,
    species: "Corazone",
    types: ["Fighting"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 135, atk: 80, def: 80, spa: 80, spd: 80, spe: 45 },
    abilities: { 0: "Stamina", 1: "Intimidate", H: "Pressure" },
    heightm: 3,
    weightkg: 454,
    eggGroups: ["Undiscovered"]
  },
  folivora: {
    num: 1044,
    species: "Folivora",
    types: ["Bug", "Grass"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 55, atk: 70, def: 75, spa: 70, spd: 75, spe: 55 },
    abilities: { 0: "Grassy Surge", 1: "Mimicry", H: "Triage" },
    heightm: 0.7,
    weightkg: 6,
    eggGroups: ["Undiscovered"]
  },
  galena: {
    num: 1045,
    species: "Galena",
    types: ["Steel"],
    gender: "N",
    baseStats: { hp: 60, atk: 105, def: 110, spa: 105, spd: 100, spe: 39 },
    abilities: { 0: "Heavy Metal", 1: "Analytic", H: "Full Metal Body" },
    heightm: 1.2,
    weightkg: 999,
    eggGroups: ["Undiscovered"]
  },
  grumplet: {
    num: 1046,
    species: "Grumplet",
    types: ["Fire"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 60, atk: 45, def: 61, spa: 111, spd: 61, spe: 82 },
    abilities: { 0: "Flame Body", 1: "Pure Power", H: "Drought" },
    heightm: 0.6,
    weightkg: 18,
    eggGroups: ["Undiscovered"]
  },
  marlion: {
    num: 1047,
    species: "Marlion",
    types: ["Electric"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 50, atk: 115, def: 60, spa: 100, spd: 50, spe: 120 },
    abilities: { 0: "Lightning Rod", 1: "Electric Surge", H: "Swift Swim" },
    heightm: 1.8,
    weightkg: 43,
    eggGroups: ["Undiscovered"]
  },
  androsmos: {
    num: 1048,
    species: "Androsmos",
    types: ["Electric", "Fairy"],
    gender: ["M", "F"],
    baseStats: { hp: 70, atk: 70, def: 90, spa: 110, spd: 110, spe: 50 },
    abilities: { 0: "Plus", 1: "Mold Breaker", H: "Universal Charm" },
    heightm: 1.6,
    weightkg: 45,
    eggGroups: ["Undiscovered"]
  },
  dustoph: {
    num: 1049,
    species: "Dustoph",
    types: ["Rock", "Dark"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 70, atk: 95, def: 60, spa: 115, spd: 115, spe: 75 },
    abilities: { 0: "Sand Stream", 1: "Trace", H: "Solid Rock" },
    heightm: 1.1,
    weightkg: 64,
    eggGroups: ["Undiscovered"]
  },
  aeromo: {
    num: 1050,
    species: "Aeromo",
    types: ["Fighting", "Flying"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 50, atk: 50, def: 50, spa: 110, spd: 90, spe: 137 },
    abilities: { 0: "Limber", 1: "Receiver", H: "Dancer" },
    heightm: 0.6,
    weightkg: 2,
    eggGroups: ["Undiscovered"]
  },
  peekoceros: {
    num: 1051,
    species: "Peekoceros",
    types: ["Psychic"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 115, atk: 120, def: 130, spa: 80, spd: 50, spe: 25 },
    abilities: { 0: "No Guard", 1: "Keen Eye", H: "Intimidate" },
    heightm: 2,
    weightkg: 1361,
    eggGroups: ["Undiscovered"]
  },
  aquimanna: {
    num: 1052,
    species: "Aquimanna",
    types: ["Water", "Fairy"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 90, atk: 50, def: 70, spa: 79, spd: 100, spe: 121 },
    abilities: { 0: "Multiscale", 1: "Levitate", H: "Unaware" },
    heightm: 1.6,
    weightkg: 68,
    eggGroups: ["Undiscovered"]
  },
  apparicious: {
    num: 1053,
    species: "Apparicious",
    types: ["Ghost"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 50, atk: 85, def: 50, spa: 135, spd: 80, spe: 100 },
    abilities: { 0: "Cursed Body", 1: "Strong Jaw", H: "Neutralizing Gas" },
    heightm: 0.9,
    weightkg: 0.1,
    eggGroups: ["Undiscovered"]
  },
  quetzadrakon: {
    num: 1054,
    species: "Quetzadrakon",
    types: ["Dragon", "Flying"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 90, atk: 81, def: 80, spa: 81, spd: 80, spe: 88 },
    abilities: { 0: "Cloud Nine", 1: "Aerilate", H: "Long Reach" },
    heightm: 9.1,
    weightkg: 227,
    eggGroups: ["Undiscovered"]
  },
  trybas: {
    num: 1055,
    species: "Trybas",
    types: ["Fire", "Flying"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 80, atk: 75, def: 70, spa: 120, spd: 75, spe: 110 },
    abilities: { 0: "Flash Fire", 1: "Marvel Scale", H: "Drought" },
    heightm: 5.5,
    weightkg: 159,
    eggGroups: ["Undiscovered"]
  },
  raiga: {
    num: 1056,
    species: "Raiga",
    types: ["Ice"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 75, atk: 107, def: 70, spa: 140, spd: 108, spe: 100 },
    abilities: { 0: "Cursed Body", 1: "Forewarn", H: "Mummy" },
    heightm: 1.7,
    weightkg: 45,
    eggGroups: ["Undiscovered"]
  },
  frogaloft: {
    num: 1057,
    species: "Frog Aloft",
    types: ["Poison", "Flying"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 100, atk: 75, def: 100, spa: 75, spd: 85, spe: 65 },
    abilities: { 0: "Frisk", 1: "Aftermath", H: "Stench" },
    heightm: 0.9,
    weightkg: 27,
    eggGroups: ["Undiscovered"]
  },
  teranim: {
    num: 1058,
    species: "Teranim",
    types: ["Ground"],
    genderRatio: "N",
    baseStats: { hp: 115, atk: 130, def: 130, spa: 50, spd: 60, spe: 54 },
    abilities: { 0: "Power Link" },
    heightm: 1.7,
    weightkg: 1361,
    eggGroups: ["Undiscovered"]
  },
  osho: {
    num: 1057,
    species: "Osho",
    types: ["Water"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 67, atk: 80, def: 67, spa: 80, spd: 90, spe: 106 },
    abilities: { 0: "Color Change", 1: "Magician", H: "Suction Cups" },
    heightm: 0.6,
    weightkg: 8,
    eggGroups: ["Undiscovered"]
  }
};
//# sourceMappingURL=pokedex.js.map
