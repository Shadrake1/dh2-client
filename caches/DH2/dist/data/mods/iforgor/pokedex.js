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
  waterground: {
    num: 32,
    name: "waterground",
    types: ["Water", "Ground"],
    baseStats: { hp: 90, atk: 100, def: 85, spa: 95, spd: 75, spe: 55 },
    abilities: { 0: "Pressure", 1: "Water Absorb", H: "Unaware" },
    otherFormes: ["waterground-Mega"],
    formeOrder: ["waterground", "waterground-Mega"]
  },
  watergroundmega: {
    num: 32,
    name: "waterground-Mega",
    baseSpecies: "waterground",
    types: ["Water", "Ground"],
    baseStats: { hp: 90, atk: 130, def: 125, spa: 95, spd: 85, spe: 75 },
    abilities: { 0: "Strong Jaw" },
    requiredItem: ["watergroundite"],
    battleOnly: "waterground"
  },
  normalpoison: {
    num: 11,
    name: "normalpoison",
    types: ["Normal", "Poison"],
    baseStats: { hp: 90, atk: 66, def: 70, spa: 110, spd: 110, spe: 49 },
    abilities: { 0: "Run Away", 1: "Poison Point", H: "Analytic" },
    otherFormes: ["normalpoison-Mega"],
    formeOrder: ["normalpoison", "normalpoison-Mega"]
  },
  normalpoisonmega: {
    num: 11,
    name: "normalpoison-Mega",
    baseSpecies: "normalpoison",
    types: ["Normal", "Poison"],
    baseStats: { hp: 90, atk: 96, def: 100, spa: 130, spd: 130, spe: 49 },
    abilities: { 0: "Sheer Force" },
    requiredItem: ["normalpoisonite"],
    battleOnly: "normalpoison"
  },
  groundfairy: {
    num: 12,
    name: "groundfairy",
    types: ["Ground", "Fairy"],
    baseStats: { hp: 90, atk: 119, def: 80, spa: 50, spd: 70, spe: 86 },
    abilities: { 0: "Immunity", 1: "Sand Rush", H: "Light Power" },
    otherFormes: ["groundfairy-Mega"],
    formeOrder: ["groundfairy", "groundfairy-Mega"]
  },
  groundfairymega: {
    num: 12,
    name: "groundfairy-Mega",
    baseSpecies: "groundfairy",
    types: ["Ground", "Fairy"],
    baseStats: { hp: 90, atk: 149, def: 140, spa: 50, spd: 110, spe: 56 },
    abilities: { 0: "Thick Fat" },
    requiredItem: ["groundfairyite"],
    battleOnly: "groundfairy"
  },
  ghostground: {
    num: 53,
    name: "ghostground",
    types: ["Ghost", "Ground"],
    baseStats: { hp: 80, atk: 128, def: 100, spa: 45, spd: 80, spe: 42 },
    abilities: { 0: "Solid Rock", H: "Earth Eater" },
    otherFormes: ["ghostground-Mega"],
    formeOrder: ["ghostground", "ghostground-Mega"]
  },
  ghostgroundmega: {
    num: 53,
    name: "ghostground-Mega",
    baseSpecies: "ghostground",
    types: ["Ghost", "Rock"],
    baseStats: { hp: 80, atk: 168, def: 130, spa: 55, spd: 130, spe: 12 },
    abilities: { 0: "Rock Head" },
    requiredItem: ["ghostgroundite"],
    battleOnly: "ghostground"
  },
  normal: {
    num: 28,
    name: "normal",
    types: ["Normal"],
    baseStats: { hp: 84, atk: 118, def: 80, spa: 52, spd: 84, spe: 102 },
    abilities: { 0: "Pickup", 1: "Early Bird", H: "Poison Heal" },
    otherFormes: ["normal-Mega"],
    formeOrder: ["normal", "normal-Mega"]
  },
  normalmega: {
    num: 28,
    name: "normal-Mega",
    baseSpecies: "normal",
    types: ["Normal"],
    baseStats: { hp: 84, atk: 118, def: 120, spa: 82, spd: 124, spe: 52 },
    abilities: { 0: "Regenerator" },
    requiredItem: ["normalite"],
    battleOnly: "normal"
  },
  normalfairy: {
    num: 29,
    name: "normalfairy",
    types: ["Normal", "Fairy"],
    baseStats: { hp: 124, atk: 68, def: 50, spa: 102, spd: 84, spe: 92 },
    abilities: { 0: "Pickup", 1: "Competitive", H: "Tinted Lens" },
    otherFormes: ["normalfairy-Mega"],
    formeOrder: ["normalfairy", "normalfairy-Mega"]
  },
  normalfairymega: {
    num: 29,
    name: "normalfairy-Mega",
    baseSpecies: "normalfairy",
    types: ["Normal", "Fairy"],
    baseStats: { hp: 124, atk: 108, def: 100, spa: 122, spd: 104, spe: 62 },
    abilities: { 0: "Immunity" },
    requiredItem: ["normalfairyite"],
    battleOnly: "normalfairy"
  },
  electricpoison: {
    num: 19,
    name: "electricpoison",
    types: ["Electric", "Poison"],
    baseStats: { hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 35 },
    abilities: { 0: "Sticky Hold", 1: "Liquid Ooze", H: "Electric Surge" },
    otherFormes: ["electricpoison-Mega"],
    formeOrder: ["electricpoison", "electricpoison-Mega"]
  },
  electricpoisonmega: {
    num: 19,
    name: "electricpoison-Mega",
    baseSpecies: "electricpoison",
    types: ["Electric", "Poison"],
    baseStats: { hp: 75, atk: 120, def: 120, spa: 120, spd: 120, spe: 35 },
    abilities: { 0: "Hadron Engine" },
    requiredItem: ["electricpoisonite"],
    battleOnly: "electricpoison"
  },
  poisonpsychic: {
    num: 40,
    name: "poisonpsychic",
    types: ["Poison", "Psychic"],
    baseStats: { hp: 89, atk: 89, def: 99, spa: 115, spd: 109, spe: 29 },
    abilities: { 0: "Poison Touch", 1: "Rain Dish", H: "Lightning Rod" },
    otherFormes: ["poisonpsychic-Mega"],
    formeOrder: ["poisonpsychic", "poisonpsychic-Mega"]
  },
  poisonpsychicmega: {
    num: 40,
    name: "poisonpsychic-Mega",
    baseSpecies: "poisonpsychic",
    types: ["Poison", "Fairy"],
    baseStats: { hp: 89, atk: 109, def: 119, spa: 135, spd: 129, spe: 49 },
    abilities: { 0: "Toxic Debris" },
    requiredItem: ["poisonpsychicite"],
    battleOnly: "poisonpsychic"
  },
  darkfairy: {
    num: 39,
    name: "darkfairy",
    types: ["Dark", "Fairy"],
    baseStats: { hp: 151, atk: 83, def: 71, spa: 83, spd: 61, spe: 41 },
    abilities: { 0: "Stench", 1: "Misty Surge", H: "Neutralizing Gas" },
    otherFormes: ["darkfairy-Mega"],
    formeOrder: ["darkfairy", "darkfairy-Mega"]
  },
  darkfairymega: {
    num: 39,
    name: "darkfairy-Mega",
    baseSpecies: "darkfairy",
    types: ["Steel", "Fairy"],
    baseStats: { hp: 151, atk: 123, def: 71, spa: 83, spd: 61, spe: 101 },
    abilities: { 0: "Industrialize" },
    requiredItem: ["darkfairyite"],
    battleOnly: "darkfairy"
  },
  fairydragon: {
    num: 1010,
    name: "fairydragon",
    types: ["Fairy", "Dragon"],
    baseStats: { hp: 75, atk: 75, def: 75, spa: 110, spd: 100, spe: 60 },
    abilities: { 0: "Cute Charm", 1: "Aroma Veil", H: "Fur Coat" }
  },
  firenormal: {
    num: 1011,
    name: "firenormal",
    types: ["Fire", "Normal"],
    baseStats: { hp: 144, atk: 100, def: 64, spa: 64, spd: 64, spe: 64 },
    abilities: { 0: "Iron Fist", H: "Flash Fire" }
  },
  ground: {
    num: 1012,
    name: "ground",
    types: ["Ground"],
    baseStats: { hp: 95, atk: 116, def: 116, spa: 94, spd: 74, spe: 30 },
    abilities: { 0: "Sand Veil", 1: "Guts", H: "Contrary" }
  },
  bugice: {
    num: 7,
    name: "bugice",
    types: ["Bug", "Ice"],
    baseStats: { hp: 60, atk: 108, def: 80, spa: 80, spd: 60, spe: 112 },
    abilities: { 0: "Swarm", 1: "Hyper Cutter", H: "Tinted Lens" },
    otherFormes: ["bugice-Mega"],
    formeOrder: ["bugice", "bugice-Mega"]
  },
  bugicemega: {
    num: 7,
    name: "bugice-Mega",
    baseSpecies: "bugice",
    types: ["Bug", "Ice"],
    baseStats: { hp: 60, atk: 148, def: 90, spa: 80, spd: 80, spe: 142 },
    abilities: { 0: "Magic Guard" },
    requiredItem: ["bugiceite"],
    battleOnly: "bugice"
  },
  bugfire: {
    num: 1014,
    name: "bugfire",
    types: ["Bug", "Fire"],
    baseStats: { hp: 73, atk: 50, def: 89, spa: 112, spd: 122, spe: 74 },
    abilities: { 0: "Solar Power", H: "Regenerator" }
  },
  grassfire: {
    num: 1015,
    name: "grassfire",
    types: ["Grass", "Fire"],
    baseStats: { hp: 100, atk: 80, def: 100, spa: 100, spd: 75, spe: 45 },
    abilities: { 0: "Leaf Guard", H: "Drought" }
  },
  icerock: {
    num: 1016,
    name: "icerock",
    types: ["Ice", "Rock"],
    baseStats: { hp: 78, atk: 117, def: 96, spa: 59, spd: 71, spe: 109 },
    abilities: { 0: "Slush Rush", 1: "Thermal Exchange", H: "No Guard" }
  },
  bugwater: {
    num: 1017,
    name: "bugwater",
    types: ["Bug", "Water"],
    baseStats: { hp: 74, atk: 112, def: 122, spa: 50, spd: 89, spe: 73 },
    abilities: { 0: "Swift Swim", H: "Magic Bounce" }
  },
  icepoison: {
    num: 1018,
    name: "icepoison",
    types: ["Ice", "Poison"],
    baseStats: { hp: 78, atk: 86, def: 61, spa: 109, spd: 99, spe: 97 },
    abilities: { 0: "Ice Body", 1: "Toxic Debris", H: "Technician" }
  },
  bugelectric: {
    num: 1019,
    name: "bugelectric",
    types: ["Bug", "Electric"],
    baseStats: { hp: 70, atk: 100, def: 98, spa: 95, spd: 85, spe: 82 },
    abilities: { 0: "Intimidate", H: "Drizzle" }
  },
  bugpsychic: {
    num: 8,
    name: "bugpsychic",
    types: ["Bug", "Psychic"],
    baseStats: { hp: 82, atk: 60, def: 80, spa: 115, spd: 85, spe: 78 },
    abilities: { 0: "Swarm", 1: "Insomnia", H: "Prism Armor" },
    otherFormes: ["bugpsychic-Mega"],
    formeOrder: ["bugpsychic", "bugpsychic-Mega"]
  },
  bugpsychicmega: {
    num: 8,
    name: "bugpsychic-Mega",
    baseSpecies: "bugpsychic",
    types: ["Bug", "Psychic"],
    baseStats: { hp: 82, atk: 90, def: 100, spa: 125, spd: 100, spe: 103 },
    abilities: { 0: "Pixilate" },
    requiredItem: ["bugpsychicite"],
    battleOnly: "bugpsychic"
  },
  normalghost: {
    num: 1021,
    name: "normalghost",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 91, atk: 86, def: 89, spa: 106, spd: 89, spe: 69 },
    abilities: { 0: "Cursed Body", 1: "Perish Body", H: "Pillage" }
  },
  grassfairy: {
    num: 1022,
    name: "grassfairy",
    types: ["Grass", "Fairy"],
    baseStats: { hp: 85, atk: 45, def: 95, spa: 115, spd: 95, spe: 65 },
    abilities: { 0: "Chlorophyll", H: "Thick Fat" }
  },
  normalpsychic: {
    num: 1023,
    name: "normalpsychic",
    types: ["Normal", "Psychic"],
    baseStats: { hp: 100, atk: 50, def: 100, spa: 100, spd: 100, spe: 50 },
    abilities: { 0: "Immunity", 1: "Water Absorb", H: "All-Seeing Eye" }
  },
  darkpoison: {
    num: 1024,
    name: "darkpoison",
    types: ["Dark", "Poison"],
    baseStats: { hp: 200, atk: 100, def: 50, spa: 75, spd: 50, spe: 25 },
    abilities: { 0: "Rough Skin", 1: "Opportunist", H: "Stakeout" }
  },
  bugfighting: {
    num: 1025,
    name: "bugfighting",
    types: ["Bug", "Fighting"],
    baseStats: { hp: 65, atk: 105, def: 60, spa: 55, spd: 80, spe: 135 },
    abilities: { 0: "Swarm", 1: "Corrosion", H: "Tough Claws" }
  },
  fightingflying: {
    num: 1026,
    name: "fightingflying",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 74, atk: 101, def: 84, spa: 101, spd: 84, spe: 96 },
    abilities: { 0: "Keen Eye", 1: "Vital Spirit", H: "Gale Wings" }
  },
  ghostdragon: {
    num: 1027,
    name: "ghostdragon",
    types: ["Ghost", "Dragon"],
    baseStats: { hp: 100, atk: 80, def: 90, spa: 80, spd: 90, spe: 60 },
    abilities: { 0: "Cursed Body", H: "Magic Bounce" }
  },
  psychicfighting: {
    num: 1028,
    name: "psychicfighting",
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 80, atk: 106, def: 60, spa: 106, spd: 60, spe: 88 },
    abilities: { 0: "Iron Fist", H: "Psychic Surge" }
  },
  steelflying: {
    num: 1029,
    name: "steelflying",
    types: ["Steel", "Flying"],
    baseStats: { hp: 97, atk: 71, def: 101, spa: 107, spd: 83, spe: 61 },
    abilities: { 0: "Heavy Metal", 1: "Clear Body", H: "Industrialize" }
  },
  poisonground: {
    num: 42,
    name: "poisonground",
    types: ["Poison", "Ground"],
    baseStats: { hp: 77, atk: 100, def: 65, spa: 100, spd: 65, spe: 103 },
    abilities: { 0: "Shed Skin", H: "Merciless" },
    otherFormes: ["poisonground-Mega"],
    formeOrder: ["poisonground", "poisonground-Mega"]
  },
  poisongroundmega: {
    num: 42,
    name: "poisonground-Mega",
    baseSpecies: "poisonground",
    types: ["Poison", "Ground"],
    baseStats: { hp: 77, atk: 120, def: 95, spa: 120, spd: 95, spe: 103 },
    abilities: { 0: "Gravitas" },
    requiredItem: ["poisongroundite"],
    battleOnly: "poisonground"
  },
  dragon: {
    num: 1031,
    name: "dragon",
    types: ["Dragon"],
    baseStats: { hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85 },
    abilities: { 0: "Mold Breaker", 1: "Sheer Force", H: "Regenerator" }
  },
  fireground: {
    num: 1032,
    name: "fireground",
    types: ["Fire", "Ground"],
    baseStats: { hp: 93, atk: 117, def: 93, spa: 67, spd: 93, spe: 77 },
    abilities: { 0: "Flame Body", 1: "Debilitate", H: "Evaporate" }
  },
  waterice: {
    num: 57,
    name: "waterice",
    types: ["Water", "Ice"],
    baseStats: { hp: 85, atk: 75, def: 80, spa: 109, spd: 60, spe: 111 },
    abilities: { 0: "Water Veil", 1: "Pixilate", H: "Absolute Zero" },
    otherFormes: ["waterice-Mega"],
    formeOrder: ["waterice", "waterice-Mega"]
  },
  watericemega: {
    num: 57,
    name: "waterice-Mega",
    baseSpecies: "waterice",
    types: ["Water", "Ice"],
    baseStats: { hp: 85, atk: 120, def: 90, spa: 119, spd: 90, spe: 116 },
    abilities: { 0: "Refrigerate" },
    requiredItem: ["watericeite"],
    battleOnly: "waterice"
  },
  bugdark: {
    num: 1034,
    name: "bugdark",
    types: ["Bug", "Dark"],
    baseStats: { hp: 95, atk: 112, def: 95, spa: 50, spd: 50, spe: 118 },
    abilities: { 0: "Hyper Cutter", H: "Adaptability" }
  },
  grassnormal: {
    num: 1035,
    name: "grassnormal",
    types: ["Grass", "Normal"],
    baseStats: { hp: 90, atk: 107, def: 70, spa: 107, spd: 70, spe: 106 },
    abilities: { 0: "Sap Sipper", H: "Grassy Surge" }
  },
  dragonground: {
    num: 64,
    name: "dragonground",
    types: ["Dragon", "Ground"],
    baseStats: { hp: 120, atk: 80, def: 101, spa: 101, spd: 60, spe: 68 },
    abilities: { 0: "Simple", 1: "Speed Boost", H: "Unburden" },
    otherFormes: ["dragonground-Mega"],
    formeOrder: ["dragonground", "dragonground-Mega"]
  },
  dragongroundmega: {
    num: 64,
    name: "dragonground-Mega",
    baseSpecies: "dragonground",
    types: ["Dragon", "Ground"],
    baseStats: { hp: 120, atk: 115, def: 121, spa: 121, spd: 105, spe: 48 },
    abilities: { 0: "Magic Bounce" },
    requiredItem: ["dragongroundite"],
    battleOnly: "dragonground"
  },
  fightingsteel: {
    num: 1037,
    name: "fightingsteel",
    types: ["Fighting", "Steel"],
    baseStats: { hp: 87, atk: 102, def: 118, spa: 60, spd: 70, spe: 83 },
    abilities: { 0: "Rocky Payload" }
  },
  dragonpoison: {
    num: 1038,
    name: "dragonpoison",
    types: ["Dragon", "Poison"],
    baseStats: { hp: 99, atk: 54, def: 89, spa: 91, spd: 89, spe: 108 },
    abilities: { 0: "Shed Skin", H: "Adaptability" }
  },
  fightingice: {
    num: 1039,
    name: "fightingice",
    types: ["Fighting", "Ice"],
    baseStats: { hp: 83, atk: 87, def: 60, spa: 118, spd: 70, spe: 102 },
    abilities: { 0: "No Guard" }
  },
  darkrock: {
    num: 41,
    name: "darkrock",
    types: ["Dark", "Rock"],
    baseStats: { hp: 77, atk: 115, def: 75, spa: 75, spd: 75, spe: 93 },
    abilities: { 0: "Immunity", H: "Toxic Boost" },
    otherFormes: ["darkrock-Mega"],
    formeOrder: ["darkrock", "darkrock-Mega"]
  },
  darkrockmega: {
    num: 41,
    name: "darkrock-Mega",
    baseSpecies: "darkrock",
    types: ["Dark", "Fighting"],
    baseStats: { hp: 77, atk: 135, def: 125, spa: 85, spd: 85, spe: 103 },
    abilities: { 0: "Technician" },
    requiredItem: ["darkrockite"],
    battleOnly: "darkrock"
  },
  electric: {
    num: 1041,
    name: "electric",
    types: ["Electric"],
    baseStats: { hp: 81, atk: 62, def: 73, spa: 116, spd: 84, spe: 114 },
    abilities: { 0: "Static", 1: "Lightning Rod", H: "Levitate" }
  },
  bugsteel: {
    num: 1042,
    name: "bugsteel",
    types: ["Bug", "Steel"],
    baseStats: { hp: 109, atk: 109, def: 89, spa: 73, spd: 89, spe: 61 },
    abilities: { 0: "Compound Eyes", H: "Filter" }
  },
  watersteel: {
    num: 1043,
    name: "watersteel",
    types: ["Water", "Steel"],
    baseStats: { hp: 101, atk: 100, def: 95, spa: 60, spd: 65, spe: 99 },
    abilities: { 0: "Anger Shell", H: "Lightning Rod" }
  },
  electricsteel: {
    num: 1044,
    name: "electricsteel",
    types: ["Electric", "Steel"],
    baseStats: { hp: 70, atk: 108, def: 70, spa: 108, spd: 70, spe: 94 },
    abilities: { 0: "Sturdy", H: "Up to Speed" }
  },
  grasspoison: {
    num: 1045,
    name: "grasspoison",
    types: ["Grass", "Poison"],
    baseStats: { hp: 113, atk: 109, def: 67, spa: 113, spd: 71, spe: 47 },
    abilities: { 0: "Effect Spore", H: "Well-Baked Body" }
  },
  darkflying: {
    num: 1046,
    name: "darkflying",
    types: ["Dark", "Flying"],
    baseStats: { hp: 110, atk: 104, def: 70, spa: 74, spd: 70, spe: 92 },
    abilities: { 0: "Early Bird", H: "Insectivore" }
  },
  ghostflying: {
    num: 1047,
    name: "ghostflying",
    types: ["Ghost", "Flying"],
    baseStats: { hp: 68, atk: 98, def: 70, spa: 98, spd: 70, spe: 116 },
    abilities: { 0: "Long Reach", H: "Magic Guard" }
  },
  waterelectric: {
    num: 1048,
    name: "waterelectric",
    types: ["Water", "Electric"],
    baseStats: { hp: 61, atk: 50, def: 104, spa: 110, spd: 104, spe: 91 },
    abilities: { 0: "Volt Absorb", H: "Regenerator" }
  },
  firerock: {
    num: 1049,
    name: "firerock",
    types: ["Fire", "Rock"],
    baseStats: { hp: 70, atk: 85, def: 80, spa: 85, spd: 80, spe: 125 },
    abilities: { 0: "Blaze", H: "Magic Guard" }
  },
  grasselectric: {
    num: 1050,
    name: "grasselectric",
    types: ["Grass", "Electric"],
    baseStats: { hp: 80, atk: 80, def: 90, spa: 105, spd: 90, spe: 80 },
    abilities: { 0: "Overgrow", H: "Poison Heal" }
  },
  waterghost: {
    num: 1051,
    name: "waterghost",
    types: ["Water", "Ghost"],
    baseStats: { hp: 90, atk: 85, def: 70, spa: 105, spd: 105, spe: 70 },
    abilities: { 0: "Torrent", H: "Prankster" }
  },
  water: {
    num: 1052,
    name: "water",
    types: ["Water"],
    baseStats: { hp: 69, atk: 120, def: 90, spa: 60, spd: 90, spe: 101 },
    abilities: { 0: "Protean", H: "Annihilate" }
  },
  rockgrass: {
    num: 1053,
    name: "rockgrass",
    types: ["Rock", "Grass"],
    baseStats: { hp: 73, atk: 94, def: 83, spa: 112, spd: 89, spe: 89 },
    abilities: { 0: "Solid Rock", 1: "Storm Drain", H: "Unburden" }
  },
  iceground: {
    num: 1054,
    name: "iceground",
    types: ["Ice", "Ground"],
    baseStats: { hp: 100, atk: 121, def: 85, spa: 85, spd: 60, spe: 79 },
    abilities: { 0: "Rough Skin", H: "Strong Jaw" }
  },
  electricflying: {
    num: 1055,
    name: "electricflying",
    types: ["Electric", "Flying"],
    baseStats: { hp: 80, atk: 95, def: 75, spa: 95, spd: 75, spe: 130 },
    abilities: { 0: "Motor Drive", H: "Reckless" }
  },
  darksteel: {
    num: 1056,
    name: "darksteel",
    types: ["Dark", "Steel"],
    baseStats: { hp: 84, atk: 70, def: 88, spa: 126, spd: 90, spe: 72 },
    abilities: { 0: "Bulletproof", H: "Supreme Overlord" }
  },
  fairyflying: {
    num: 1057,
    name: "fairyflying",
    types: ["Fairy", "Flying"],
    baseStats: { hp: 90, atk: 95, def: 70, spa: 100, spd: 95, spe: 90 },
    abilities: { 0: "Natural Cure", H: "Technician" }
  },
  dragonsteel: {
    num: 1058,
    name: "dragonsteel",
    types: ["Dragon", "Steel"],
    baseStats: { hp: 91, atk: 105, def: 84, spa: 105, spd: 84, spe: 81 },
    abilities: { 0: "Clear Body", 1: "Light Metal", H: "Levitate" }
  },
  rockfighting: {
    num: 1059,
    name: "rockfighting",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 77, atk: 115, def: 97, spa: 77, spd: 77, spe: 117 },
    abilities: { 0: "Levitate", H: "Sniper" }
  },
  rockpsychic: {
    num: 1060,
    name: "rockpsychic",
    types: ["Rock", "Psychic"],
    baseStats: { hp: 77, atk: 77, def: 77, spa: 115, spd: 107, spe: 107 },
    abilities: { 0: "Railgunner", H: "Magician" }
  },
  rockghost: {
    num: 1061,
    name: "rockghost",
    types: ["Rock", "Ghost"],
    baseStats: { hp: 85, atk: 85, def: 95, spa: 95, spd: 95, spe: 105 },
    abilities: { 0: "Purifying Salt", 1: "Prankster", H: "Sand Stream" }
  },
  grassice: {
    num: 1062,
    name: "grassice",
    types: ["Grass", "Ice"],
    baseStats: { hp: 80, atk: 84, def: 98, spa: 112, spd: 76, spe: 120 },
    abilities: { 0: "Snow Warning", 1: "Quark Drive", H: "Ice Scales" }
  },
  psychicdragon: {
    num: 1063,
    name: "psychicdragon",
    types: ["Psychic", "Dragon"],
    baseStats: { hp: 99, atk: 117, def: 75, spa: 81, spd: 75, spe: 113 },
    abilities: { 0: "Strong Jaw" }
  },
  dragonfighting: {
    num: 1064,
    name: "dragonfighting",
    types: ["Dragon", "Fighting"],
    baseStats: { hp: 87, atk: 103, def: 127, spa: 103, spd: 87, spe: 63 },
    abilities: { 0: "Soundproof", 1: "Protosynthesis", H: "Natural Cure" }
  },
  waterflying: {
    num: 1065,
    name: "waterflying",
    types: ["Water", "Flying"],
    baseStats: { hp: 85, atk: 110, def: 72, spa: 95, spd: 90, spe: 128 },
    abilities: { 0: "Storming Surge" }
  },
  darkghost: {
    num: 1066,
    name: "darkghost",
    types: ["Dark", "Ghost"],
    baseStats: { hp: 90, atk: 72, def: 85, spa: 128, spd: 95, spe: 110 },
    abilities: { 0: "Mythic Swordsman" }
  },
  firepsychic: {
    num: 1067,
    name: "firepsychic",
    types: ["Fire", "Psychic"],
    baseStats: { hp: 110, atk: 128, def: 95, spa: 90, spd: 72, spe: 85 },
    abilities: { 0: "Rising Sun" }
  },
  steel: {
    num: 1068,
    name: "steel",
    types: ["Steel"],
    baseStats: { hp: 80, atk: 120, def: 150, spa: 100, spd: 75, spe: 75 },
    abilities: { 0: "Akashi Arts" }
  },
  rock: {
    num: 1069,
    name: "rock",
    types: ["Rock"],
    baseStats: { hp: 130, atk: 130, def: 200, spa: 50, spd: 70, spe: 20 },
    abilities: { 0: "Ice Age" }
  },
  firefairy: {
    num: 1070,
    name: "firefairy",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Divine Grace" }
  },
  grassflying: {
    num: 1071,
    name: "grassflying",
    types: ["Grass", "Flying"],
    baseStats: { hp: 80, atk: 100, def: 130, spa: 100, spd: 75, spe: 115 },
    abilities: { 0: "Obliterate", 1: "Wind Rider", H: "Aerilate" }
  },
  fighting: {
    num: 1072,
    name: "fighting",
    types: ["Fighting"],
    baseStats: { hp: 113, atk: 127, def: 113, spa: 67, spd: 113, spe: 67 },
    abilities: { 0: "Primal Force" }
  },
  psychicfairy: {
    num: 1073,
    name: "psychicfairy",
    types: ["Psychic", "Fairy"],
    baseStats: { hp: 92, atk: 114, def: 94, spa: 116, spd: 108, spe: 76 },
    abilities: { 0: "Immunity", 1: "Aroma Veil", H: "Poison Heal" }
  },
  electricnormal: {
    num: 1074,
    name: "electricnormal",
    types: ["Electric", "Normal"],
    baseStats: { hp: 98, atk: 138, def: 104, spa: 98, spd: 104, spe: 138 },
    abilities: { 0: "Animus" }
  },
  firedark: {
    num: 1075,
    name: "firedark",
    types: ["Fire", "Dark"],
    baseStats: { hp: 104, atk: 98, def: 138, spa: 98, spd: 138, spe: 104 },
    abilities: { 0: "Ragnarok" }
  },
  iceghost: {
    num: 1076,
    name: "iceghost",
    types: ["Ice", "Ghost"],
    baseStats: { hp: 138, atk: 98, def: 104, spa: 138, spd: 104, spe: 98 },
    abilities: { 0: "Mortem" }
  },
  steelfairy: {
    num: 1077,
    name: "steelfairy",
    types: ["Steel", "Fairy"],
    baseStats: { hp: 60, atk: 116, def: 116, spa: 116, spd: 116, spe: 56 },
    abilities: { 0: "Serene Grace", H: "Steam Engine" }
  },
  waterpoison: {
    num: 1078,
    name: "waterpoison",
    types: ["Water", "Poison"],
    baseStats: { hp: 95, atk: 70, def: 110, spa: 105, spd: 79, spe: 31 },
    abilities: { 0: "Iron Barbs", H: "Magnet Pull" },
    otherFormes: ["waterpoison-Mega"],
    formeOrder: ["waterpoison", "waterpoison-Mega"]
  },
  waterpoisonmega: {
    num: 1078,
    name: "waterpoison-Mega",
    baseSpecies: "waterpoison",
    types: ["Water", "Poison"],
    baseStats: { hp: 95, atk: 115, def: 85, spa: 115, spd: 79, spe: 101 },
    abilities: { 0: "Decelerate" },
    requiredItem: ["waterpoisonite"],
    battleOnly: "waterpoison"
  },
  firepoison: {
    num: 1079,
    name: "firepoison",
    types: ["Fire", "Poison"],
    baseStats: { hp: 90, atk: 80, def: 93, spa: 105, spd: 105, spe: 57 },
    abilities: { 0: "Corrosion", H: "Dry Skin" }
  },
  bug: {
    num: 1080,
    name: "bug",
    types: ["Bug"],
    baseStats: { hp: 101, atk: 120, def: 101, spa: 55, spd: 101, spe: 62 },
    abilities: { 0: "Heatproof", H: "Speed Boost" }
  },
  buggrass: {
    num: 1081,
    name: "buggrass",
    types: ["Bug", "Grass"],
    baseStats: { hp: 79, atk: 90, def: 100, spa: 90, spd: 100, spe: 51 },
    abilities: { 0: "Anticipation", H: "Overripe" }
  },
  waterfairy: {
    num: 1082,
    name: "waterfairy",
    types: ["Water", "Fairy"],
    baseStats: { hp: 80, atk: 79, def: 79, spa: 99, spd: 99, spe: 119 },
    abilities: { 0: "Marvel Scale", H: "Competitive" }
  },
  firesteel: {
    num: 1083,
    name: "firesteel",
    types: ["Fire", "Steel"],
    baseStats: { hp: 90, atk: 110, def: 100, spa: 90, spd: 100, spe: 10 },
    abilities: { 0: "Flash Fire", H: "Sharpness" },
    otherFormes: ["firesteel-Mega"],
    formeOrder: ["firesteel", "firesteel-Mega"]
  },
  firesteelmega: {
    num: 1083,
    name: "firesteel-Mega",
    baseSpecies: "firesteel",
    types: ["Fire", "Steel"],
    baseStats: { hp: 90, atk: 110, def: 115, spa: 110, spd: 115, spe: 60 },
    abilities: { 0: "Orichalcum Pulse" },
    requiredItem: ["firesteelite"],
    battleOnly: "firesteel"
  },
  iceelectric: {
    num: 1084,
    name: "iceelectric",
    types: ["Ice", "Electric"],
    baseStats: { hp: 79, atk: 105, def: 94, spa: 105, spd: 94, spe: 123 },
    abilities: { 0: "Color Change" }
  },
  groundflying: {
    num: 1085,
    name: "groundflying",
    types: ["Ground", "Flying"],
    baseStats: { hp: 116, atk: 100, def: 80, spa: 100, spd: 80, spe: 54 },
    abilities: { 0: "Synchronize", H: "Infiltrator" },
    otherFormes: ["groundflying-Mega"],
    formeOrder: ["groundflying", "groundflying-Mega"]
  },
  groundflyingmega: {
    num: 1085,
    name: "groundflying-Mega",
    baseSpecies: "groundflying",
    types: ["Ground", "Flying"],
    baseStats: { hp: 116, atk: 125, def: 80, spa: 125, spd: 80, spe: 104 },
    abilities: { 0: "Locate" },
    requiredItem: ["groundflyingite"],
    battleOnly: "groundflying"
  },
  rockflying: {
    num: 1086,
    name: "rockflying",
    types: ["Rock", "Flying"],
    baseStats: { hp: 100, atk: 110, def: 72, spa: 50, spd: 72, spe: 131 },
    abilities: { 0: "Pressure", H: "Aerilate" }
  },
  rockground: {
    num: 1087,
    name: "rockground",
    types: ["Rock", "Ground"],
    baseStats: { hp: 80, atk: 140, def: 130, spa: 51, spd: 60, spe: 59 },
    abilities: { 0: "Sap Sipper", 1: "Water Absorb", H: "Thick Fat" }
  },
  grassfighting: {
    num: 1088,
    name: "grassfighting",
    types: ["Grass", "Fighting"],
    baseStats: { hp: 90, atk: 110, def: 120, spa: 72, spd: 72, spe: 66 },
    abilities: { 0: "Rough Skin", H: "Triage" }
  },
  electricdark: {
    num: 1089,
    name: "electricdark",
    types: ["Electric", "Dark"],
    baseStats: { hp: 85, atk: 101, def: 85, spa: 85, spd: 90, spe: 84 },
    abilities: { 0: "Electromorphosis", H: "Analytic" }
  },
  normaldark: {
    num: 1090,
    name: "normaldark",
    types: ["Normal", "Dark"],
    baseStats: { hp: 90, atk: 95, def: 100, spa: 95, spd: 83, spe: 87 },
    abilities: { 0: "Comatose" }
  },
  ghostfighting: {
    num: 1091,
    name: "ghostfighting",
    types: ["Ghost", "Fighting"],
    baseStats: { hp: 85, atk: 90, def: 130, spa: 90, spd: 74, spe: 31 },
    abilities: { 0: "Sturdy", 1: "Cursed Body", H: "Natural Cure" }
  },
  dragonice: {
    num: 1092,
    name: "dragonice",
    types: ["Dragon", "Ice"],
    baseStats: { hp: 129, atk: 85, def: 85, spa: 85, spd: 85, spe: 51 },
    abilities: { 0: "Thick Fat" }
  },
  dragonnormal: {
    num: 1093,
    name: "dragonnormal",
    types: ["Dragon", "Normal"],
    baseStats: { hp: 81, atk: 100, def: 81, spa: 80, spd: 81, spe: 122 },
    abilities: { 0: "Scrappy", H: "Dragon's Maw" }
  },
  ghostpsychic: {
    num: 1094,
    name: "ghostpsychic",
    types: ["Ghost", "Psychic"],
    baseStats: { hp: 110, atk: 82, def: 65, spa: 100, spd: 65, spe: 58 },
    abilities: { 0: "Weak Armor", H: "Dazzling" }
  },
  psychic: {
    num: 1095,
    name: "psychic",
    types: ["Psychic"],
    baseStats: { hp: 99, atk: 66, def: 77, spa: 110, spd: 77, spe: 121 },
    abilities: { 0: "Pressure", H: "Regenerator" }
  },
  baseball: {
    num: 6969,
    name: "Baseball",
    types: ["Normal"],
    baseStats: { hp: 50, atk: 100, def: 80, spa: 100, spd: 50, spe: 200 },
    abilities: { 0: "Reckless", 1: "Shadow Tag", H: "Magic Guard" }
  }
};
//# sourceMappingURL=pokedex.js.map
