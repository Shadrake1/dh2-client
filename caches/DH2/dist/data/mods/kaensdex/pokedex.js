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
  woodite: {
    num: 1,
    name: "Woodite",
    types: ["Grass", "Bug"],
    baseStats: { hp: 64, atk: 53, def: 65, spa: 44, spd: 55, spe: 37 },
    abilities: { 0: "Overgrow", H: "Tinted Lens" },
    weightkg: 4,
    evos: ["manteaf"]
  },
  manteaf: {
    num: 2,
    name: "Manteaf",
    types: ["Grass", "Bug"],
    baseStats: { hp: 68, atk: 85, def: 70, spa: 50, spd: 57, spe: 75 },
    abilities: { 0: "Overgrow", H: "Tinted Lens" },
    weightkg: 26.4,
    prevo: "Woodite",
    evos: ["fasmiwood"]
  },
  fasmiwood: {
    num: 3,
    name: "Fasmiwood",
    types: ["Grass", "Bug"],
    baseStats: { hp: 84, atk: 102, def: 85, spa: 65, spd: 80, spe: 119 },
    abilities: { 0: "Overgrow", H: "Tinted Lens" },
    weightkg: 36.6,
    prevo: "manteaf"
  },
  smice: {
    num: 4,
    name: "Smice",
    types: ["Fire", "Dark"],
    baseStats: { hp: 38, atk: 65, def: 34, spa: 65, spd: 46, spe: 60 },
    abilities: { 0: "Blaze", H: "White Smoke" },
    weightkg: 3.5,
    evos: ["ratevil"]
  },
  ratevil: {
    num: 5,
    name: "Ratevil",
    types: ["Fire", "Dark"],
    baseStats: { hp: 55, atk: 75, def: 53, spa: 70, spd: 57, spe: 95 },
    abilities: { 0: "Blaze", H: "Run Away" },
    weightkg: 18.5,
    prevo: "smice",
    evos: ["burstrat"]
  },
  burstrat: {
    num: 6,
    name: "Burstrat",
    types: ["Fire", "Dark"],
    baseStats: { hp: 68, atk: 115, def: 72, spa: 99, spd: 78, spe: 103 },
    abilities: { 0: "Blaze", H: "Hot Knife" },
    weightkg: 79.5,
    prevo: "ratevil"
  },
  doplash: {
    num: 7,
    name: "Doplash",
    types: ["Water"],
    baseStats: { hp: 62, atk: 52, def: 49, spa: 55, spd: 52, spe: 45 },
    abilities: { 0: "Torrent", H: "Swift Swim" },
    weightkg: 9,
    evos: ["makid"]
  },
  makid: {
    num: 8,
    name: "Makid",
    types: ["Water"],
    baseStats: { hp: 70, atk: 60, def: 55, spa: 80, spd: 85, spe: 55 },
    abilities: { 0: "Torrent", H: "Swift Swim" },
    weightkg: 28.2,
    prevo: "doplash",
    evos: ["merdolph"]
  },
  merdolph: {
    num: 9,
    name: "Merdolph",
    types: ["Water", "Psychic"],
    baseStats: { hp: 89, atk: 80, def: 78, spa: 100, spd: 105, spe: 83 },
    abilities: { 0: "Torrent", H: "Swift Swim" },
    weightkg: 44.9,
    prevo: "makid"
  },
  princeguin: {
    num: 10,
    name: "Princeguin",
    types: ["Ice", "Flying"],
    baseStats: { hp: 48, atk: 35, def: 38, spa: 55, spd: 34, spe: 45 },
    abilities: { 0: "Tangled Feet", 1: "Unaware", H: "Simple" },
    weightkg: 5.2,
    evos: ["kinguin"]
  },
  kinguin: {
    num: 11,
    name: "Kinguin",
    types: ["Ice", "Flying"],
    baseStats: { hp: 76, atk: 45, def: 80, spa: 90, spd: 90, spe: 101 },
    abilities: { 0: "Tangled Feet", 1: "Unaware", H: "Simple" },
    weightkg: 23,
    prevo: "princeguin"
  },
  ekidna: {
    num: 12,
    name: "Ekidna",
    types: ["Normal"],
    baseStats: { hp: 52, atk: 31, def: 65, spa: 23, spd: 31, spe: 60 },
    abilities: { 0: "Run Away", 1: "Rattled", H: "Weak Armor" },
    weightkg: 9.4,
    evos: ["porcusquill"]
  },
  porcusquill: {
    num: 13,
    name: "Porcusquill",
    types: ["Normal", "Steel"],
    baseStats: { hp: 82, atk: 83, def: 97, spa: 42, spd: 72, spe: 75 },
    abilities: { 0: "Iron Barbs", 1: "Protective Pelt", H: "Weak Armor" },
    weightkg: 110.5,
    prevo: "ekidna",
    otherFormes: ["Porcusquill-Mega"],
    formeOrder: ["Porcusquill", "Porcusquill-Mega"]
  },
  porcusquillmega: {
    num: 13,
    name: "Porcusquill-Mega",
    baseSpecies: "Porcusquill",
    forme: "Mega",
    types: ["Normal", "Steel"],
    baseStats: { hp: 82, atk: 143, def: 97, spa: 42, spd: 82, spe: 105 },
    abilities: { 0: "Sharpness" },
    weightkg: 150.5,
    requiredItem: "Porcusrite"
  },
  mop: {
    num: 14,
    name: "Mop",
    types: ["Normal"],
    baseStats: { hp: 60, atk: 48, def: 35, spa: 25, spd: 50, spe: 35 },
    abilities: { 0: "Water Absorb", 1: "Cute Charm", H: "Fluffy" },
    weightkg: 4.5,
    evos: ["mopper"]
  },
  mopper: {
    num: 15,
    name: "Mopper",
    types: ["Normal", "Water"],
    baseStats: { hp: 100, atk: 70, def: 80, spa: 70, spd: 95, spe: 52 },
    abilities: { 0: "Water Absorb", 1: "Cute Charm", H: "Fur Coat" },
    weightkg: 60.4,
    prevo: "mop"
  },
  puppessum: {
    num: 16,
    name: "Puppessum",
    types: ["Dark"],
    baseStats: { hp: 51, atk: 32, def: 38, spa: 58, spd: 38, spe: 62 },
    abilities: { 0: "Stench", 1: "Run Away", H: "Stakeout" },
    weightkg: 2.3,
    evos: ["grimssum"]
  },
  grimssum: {
    num: 17,
    name: "Grimssum",
    types: ["Dark", "Ghost"],
    baseStats: { hp: 65, atk: 84, def: 58, spa: 114, spd: 58, spe: 91 },
    abilities: { 0: "Stench", 1: "Run Away", H: "Stakeout" },
    weightkg: 1.8,
    prevo: "puppessum"
  },
  spiball: {
    num: 18,
    name: "Spiball",
    types: ["Bug", "Dark"],
    baseStats: { hp: 55, atk: 45, def: 34, spa: 26, spd: 42, spe: 48 },
    abilities: { 0: "Compound Eyes", 1: "Super Luck", H: "Mold Breaker" },
    weightkg: 8.5,
    evos: ["scopiball"]
  },
  scopiball: {
    num: 19,
    name: "Scopiball",
    types: ["Bug", "Dark"],
    baseStats: { hp: 82, atk: 128, def: 75, spa: 43, spd: 95, spe: 76 },
    abilities: { 0: "Compound Eyes", 1: "Super Luck", H: "Mold Breaker" },
    weightkg: 39.2,
    prevo: "spiball"
  },
  navird: {
    num: 20,
    name: "Navird",
    types: ["Flying", "Water"],
    baseStats: { hp: 32, atk: 48, def: 28, spa: 48, spd: 28, spe: 85 },
    abilities: { 0: "Hustle", 1: "Early Bird", H: "Big Pecks" },
    weightkg: 2.5,
    evos: ["peckbeard"]
  },
  peckbeard: {
    num: 21,
    name: "Peckbeard",
    types: ["Flying", "Dark"],
    baseStats: { hp: 82, atk: 105, def: 70, spa: 55, spd: 75, spe: 119 },
    abilities: { 0: "Hustle", 1: "Boast", H: "Defiant" },
    weightkg: 15.6,
    prevo: "navird"
  },
  bask: {
    num: 22,
    name: "Bask",
    types: ["Dark", "Flying"],
    baseStats: { hp: 32, atk: 45, def: 35, spa: 66, spd: 35, spe: 67 },
    abilities: { 0: "Intimidate", 1: "No Guard", H: "Bad Dreams" },
    weightkg: 2,
    evos: ["peayes"]
  },
  peayes: {
    num: 23,
    name: "Peayes",
    types: ["Dark", "Flying"],
    baseStats: { hp: 75, atk: 80, def: 75, spa: 110, spd: 70, spe: 96 },
    abilities: { 0: "Intimidate", 1: "No Guard", H: "Bad Dreams" },
    weightkg: 22.3,
    prevo: "bask"
  },
  weaworm: {
    num: 24,
    name: "Weaworm",
    types: ["Bug"],
    baseStats: { hp: 45, atk: 40, def: 35, spa: 50, spd: 45, spe: 45 },
    abilities: { 0: "Swarm", 1: "Shield Dust", H: "Tinted Lens" },
    weightkg: 2.9,
    evos: ["lilfly"]
  },
  lilfly: {
    num: 25,
    name: "Lilfly",
    types: ["Bug", "Flying"],
    baseStats: { hp: 50, atk: 50, def: 60, spa: 80, spd: 65, spe: 70 },
    abilities: { 0: "Swarm", 1: "Shield Dust", H: "Tinted Lens" },
    weightkg: 3.4,
    prevo: "weaworm",
    evos: ["koafly"]
  },
  koafly: {
    num: 26,
    name: "Koafly",
    types: ["Bug", "Fighting"],
    baseStats: { hp: 65, atk: 111, def: 80, spa: 60, spd: 75, spe: 109 },
    abilities: { 0: "Justified", 1: "Shield Dust", H: "Iron Fist" },
    weightkg: 118.3,
    prevo: "lilfly"
  },
  puptwin: {
    num: 27,
    name: "Puptwin",
    types: ["Normal"],
    baseStats: { hp: 47, atk: 65, def: 34, spa: 30, spd: 36, spe: 60 },
    abilities: { 0: "Strong Jaw", 1: "Guard Dog", H: "Moxie" },
    weightkg: 19.1,
    evos: ["duog"]
  },
  duog: {
    num: 28,
    name: "Duog",
    types: ["Normal"],
    baseStats: { hp: 67, atk: 105, def: 74, spa: 55, spd: 76, spe: 107 },
    abilities: { 0: "Strong Jaw", 1: "Guard Dog", H: "Moxie" },
    weightkg: 115,
    prevo: "puptwin"
  },
  bureep: {
    num: 29,
    name: "Bureep",
    types: ["Fairy", "Fire"],
    baseStats: { hp: 67, atk: 33, def: 62, spa: 33, spd: 78, spe: 42 },
    abilities: { 0: "Flame Body", 1: "Cute Charm", H: "Fur Coat" },
    weightkg: 18.2,
    evos: ["parllama"]
  },
  parllama: {
    num: 30,
    name: "Parllama",
    types: ["Fairy", "Fire"],
    baseStats: { hp: 85, atk: 74, def: 82, spa: 74, spd: 95, spe: 71 },
    abilities: { 0: "Flame Body", 1: "Cute Charm", H: "Fur Coat" },
    weightkg: 200.5,
    prevo: "bureep"
  },
  debi: {
    num: 31,
    name: "Debi",
    types: ["Water"],
    baseStats: { hp: 20, atk: 10, def: 45, spa: 30, spd: 15, spe: 80 },
    abilities: { 0: "Wimp out", H: "Run Away" },
    weightkg: 11.5,
    evos: ["deecrust"]
  },
  deecrust: {
    num: 32,
    name: "Deecrust",
    types: ["Water", "Dragon"],
    baseStats: { hp: 98, atk: 111, def: 88, spa: 90, spd: 84, spe: 69 },
    abilities: { 0: "Shell Armor", 1: "Rain Dish", H: "Deep Sea" },
    weightkg: 235,
    prevo: "debi"
  },
  pickynest: {
    num: 33,
    name: "Pickynest",
    types: ["Normal"],
    baseStats: { hp: 38, atk: 45, def: 50, spa: 35, spd: 60, spe: 35 },
    abilities: { 0: "Keen Eye", 1: "Overcoat", H: "Early Bird" },
    weightkg: 2.4,
    evos: ["vulcdor"]
  },
  vulcdor: {
    num: 34,
    name: "Vulcdor",
    types: ["Normal", "Fire"],
    baseStats: { hp: 78, atk: 110, def: 80, spa: 65, spd: 65, spe: 99 },
    abilities: { 0: "Keen Eye", 1: "Reckless", H: "Rock Head" },
    weightkg: 198.4,
    prevo: "pickynest"
  },
  buroach: {
    num: 35,
    name: "Buroach",
    types: ["Bug", "Psychic"],
    baseStats: { hp: 46, atk: 42, def: 45, spa: 63, spd: 52, spe: 47 },
    abilities: { 0: "Synchronize", 1: "Unburden", H: "Vital Spirit" },
    weightkg: 9.4,
    evos: ["bugler", "roamai"]
  },
  bugler: {
    num: 36,
    name: "Bugler",
    types: ["Bug", "Psychic"],
    gender: "M",
    baseStats: { hp: 70, atk: 80, def: 70, spa: 100, spd: 90, spe: 90 },
    abilities: { 0: "Technician", 1: "Unburden", H: "Competitive" },
    weightkg: 54.2,
    prevo: "buroach"
  },
  roamai: {
    num: 37,
    name: "Roamai",
    types: ["Bug", "Psychic"],
    gender: "F",
    baseStats: { hp: 70, atk: 100, def: 90, spa: 80, spd: 70, spe: 90 },
    abilities: { 0: "Technician", 1: "Unburden", H: "Magic Bounce" },
    weightkg: 54.2,
    prevo: "buroach"
  },
  rack: {
    num: 38,
    name: "Rack",
    types: ["Rock", "Ground"],
    baseStats: { hp: 60, atk: 45, def: 90, spa: 15, spd: 25, spe: 65 },
    abilities: { 0: "Sand Rush", 1: "Mice Adaptation", H: "Rough Skin" },
    weightkg: 20.5,
    evos: ["mountse"]
  },
  mountse: {
    num: 39,
    name: "Mountse",
    types: ["Rock", "Ground"],
    baseStats: { hp: 90, atk: 100, def: 115, spa: 35, spd: 65, spe: 90 },
    abilities: { 0: "Sand Rush", 1: "Mice Adaptation", H: "Rough Skin" },
    weightkg: 324,
    prevo: "rack"
  },
  lacorn: {
    num: 40,
    name: "Lacorn",
    types: ["Bug", "Fairy"],
    baseStats: { hp: 70, atk: 31, def: 80, spa: 70, spd: 65, spe: 60 },
    abilities: { 0: "Unaware", 1: "Prankster", H: "Sweet Veil" },
    weightkg: 9.9,
    evos: ["antney"]
  },
  antney: {
    num: 41,
    name: "Antney",
    types: ["Bug", "Fairy"],
    baseStats: { hp: 85, atk: 31, def: 105, spa: 90, spd: 85, spe: 80 },
    abilities: { 0: "Unaware", 1: "Prankster", H: "Royal Honey" },
    weightkg: 38.5,
    prevo: "lacorn"
  },
  hairpu: {
    num: 42,
    name: "Hairpu",
    types: ["Bug", "Poison"],
    baseStats: { hp: 55, atk: 65, def: 50, spa: 40, spd: 70, spe: 65 },
    abilities: { 0: "Intimidate", 1: "Shed Skin", H: "Infiltrator" },
    weightkg: 2.2,
    evos: ["sockorm"]
  },
  sockorm: {
    num: 43,
    name: "Sockorm",
    types: ["Bug", "Poison"],
    baseStats: { hp: 90, atk: 98, def: 90, spa: 42, spd: 100, spe: 78 },
    abilities: { 0: "Intimidate", 1: "Shed Skin", H: "Earth Eater" },
    weightkg: 65.2,
    prevo: "hairpu"
  },
  kibaion: {
    num: 44,
    name: "Kibaion",
    types: ["Grass"],
    baseStats: { hp: 45, atk: 25, def: 30, spa: 60, spd: 50, spe: 70 },
    abilities: { 0: "Chlorophyll", 1: "Water Absorb", H: "Solar Power" },
    weightkg: 2,
    evos: ["kibasol"]
  },
  kibasol: {
    num: 45,
    name: "Kibasol",
    types: ["Grass", "Fire"],
    baseStats: { hp: 65, atk: 75, def: 82, spa: 95, spd: 95, spe: 72 },
    abilities: { 0: "Chlorophyll", 1: "Water Absorb", H: "Solar Power" },
    weightkg: 20.5,
    prevo: "kibaion"
  },
  gnodog: {
    num: 46,
    name: "Gnodog",
    types: ["Ground", "Fairy"],
    baseStats: { hp: 60, atk: 31, def: 65, spa: 70, spd: 80, spe: 70 },
    abilities: { 0: "Prankster", 1: "Unaware", H: "Magician" },
    weightkg: 4.3,
    evos: ["dressog"]
  },
  dressog: {
    num: 47,
    name: "Dressog",
    types: ["Ground", "Fairy"],
    baseStats: { hp: 80, atk: 31, def: 85, spa: 90, spd: 105, spe: 85 },
    abilities: { 0: "Prankster", 1: "Unaware", H: "Magician" },
    weightkg: 29.8,
    prevo: "gnodog"
  },
  tigle: {
    num: 48,
    name: "Tigle",
    types: ["Bug"],
    baseStats: { hp: 55, atk: 25, def: 45, spa: 25, spd: 35, spe: 15 },
    abilities: { 0: "Shield Dust", 1: "Strong Jaw", H: "Speed Boost" },
    weightkg: 4.5,
    evos: ["biitora"]
  },
  biitora: {
    num: 49,
    name: "Biitora",
    types: ["Bug", "Normal"],
    baseStats: { hp: 80, atk: 105, def: 85, spa: 60, spd: 85, spe: 125 },
    abilities: { 0: "Insect Movement", 1: "Quick Feet", H: "Speed Boost" },
    weightkg: 172,
    prevo: "tigle"
  },
  psyguana: {
    num: 50,
    name: "Psyguana",
    types: ["Psychic", "Dragon"],
    baseStats: { hp: 35, atk: 35, def: 62, spa: 80, spd: 90, spe: 52 },
    abilities: { 0: "Forewarn", 1: "Anticipation", H: "Magic Guard" },
    weightkg: 5.2,
    evos: ["forguana"]
  },
  forguana: {
    num: 51,
    name: "Forguana",
    types: ["Psychic", "Dragon"],
    baseStats: { hp: 80, atk: 65, def: 85, spa: 100, spd: 120, spe: 64 },
    abilities: { 0: "Forewarn", 1: "Anticipation", H: "Magic Guard" },
    weightkg: 80.5,
    prevo: "psyguana"
  },
  timk: {
    num: 52,
    name: "Timk",
    types: ["Bug", "Fire"],
    baseStats: { hp: 65, atk: 35, def: 45, spa: 35, spd: 50, spe: 30 },
    abilities: { 0: "Flame Body", 1: "Aftermath", H: "Flash Fire" },
    weightkg: 5.5,
    evos: ["dynabite"]
  },
  dynabite: {
    num: 53,
    name: "Dynabite",
    types: ["Bug", "Fire"],
    baseStats: { hp: 105, atk: 95, def: 82, spa: 60, spd: 120, spe: 48 },
    abilities: { 0: "Flame Body", 1: "Aftermath", H: "Flash Fire" },
    weightkg: 85.4,
    prevo: "timk"
  },
  positt: {
    num: 54,
    name: "Positt",
    types: ["Poison", "Dark"],
    baseStats: { hp: 25, atk: 45, def: 20, spa: 95, spd: 20, spe: 80 },
    abilities: { 0: "Poison Point", 1: "Sniper", H: "Moxie" },
    weightkg: 2.3,
    evos: ["frogassin"]
  },
  frogassin: {
    num: 55,
    name: "Frogassin",
    types: ["Poison", "Dark"],
    baseStats: { hp: 75, atk: 102, def: 60, spa: 100, spd: 60, spe: 102 },
    abilities: { 0: "Poison Touch", 1: "Sharpness", H: "Moxie" },
    weightkg: 21.8,
    prevo: "positt"
  },
  jaklove: {
    num: 56,
    name: "Jaklove",
    types: ["Normal", "Fairy"],
    baseStats: { hp: 62, atk: 73, def: 60, spa: 80, spd: 60, spe: 121 },
    abilities: { 0: "Serene Grace", 1: "Friend Guard", H: "Magic Guard" },
    weightkg: 26.2
  },
  wospark: {
    num: 57,
    name: "Wospark",
    types: ["Bug", "Electric"],
    baseStats: { hp: 60, atk: 55, def: 50, spa: 65, spd: 50, spe: 45 },
    abilities: { 0: "Download", 1: "Lightning Rod", H: "Air Ionizer" },
    weightkg: 3.1,
    evos: ["ravesp"]
  },
  ravesp: {
    num: 58,
    name: "Ravesp",
    types: ["Bug", "Electric"],
    baseStats: { hp: 74, atk: 60, def: 65, spa: 110, spd: 80, spe: 104 },
    abilities: { 0: "Download", 1: "Lightning Rod", H: "Air Ionizer" },
    weightkg: 29.5,
    prevo: "wospark"
  },
  cabbitt: {
    num: 59,
    name: "Cabbitt",
    types: ["Grass", "Ground"],
    baseStats: { hp: 60, atk: 45, def: 52, spa: 52, spd: 55, spe: 78 },
    abilities: { 0: "Water Absorb", 1: "Harvest", H: "Grass Pelt" },
    weightkg: 5.1,
    evos: ["haresprout"]
  },
  haresprout: {
    num: 60,
    name: "Haresprout",
    types: ["Grass", "Ground"],
    baseStats: { hp: 102, atk: 65, def: 80, spa: 65, spd: 80, spe: 124 },
    abilities: { 0: "Water Absorb", 1: "Harvest", H: "Grassy Surge" },
    weightkg: 38.4,
    prevo: "cabbitt"
  },
  seerd: {
    num: 61,
    name: "Seerd",
    types: ["Grass"],
    baseStats: { hp: 44, atk: 51, def: 45, spa: 55, spd: 50, spe: 65 },
    abilities: { 0: "Harvest", 1: "Intimidate", H: "Defiant" },
    weightkg: 2.1,
    evos: ["evialden"]
  },
  evialden: {
    num: 62,
    name: "Evialden",
    types: ["Grass", "Dark"],
    baseStats: { hp: 68, atk: 63, def: 53, spa: 67, spd: 63, spe: 91 },
    abilities: { 0: "Harvest", 1: "Intimidate", H: "Defiant" },
    weightkg: 25.2,
    prevo: "seerd",
    evos: ["ostranch"]
  },
  ostranch: {
    num: 63,
    name: "Ostranch",
    types: ["Grass", "Dark"],
    baseStats: { hp: 95, atk: 91, def: 82, spa: 70, spd: 85, spe: 113 },
    abilities: { 0: "Harvest", 1: "Intimidate", H: "Defiant" },
    weightkg: 60.5,
    prevo: "evialden"
  },
  pasuragu: {
    num: 64,
    name: "Pasuragu",
    types: ["Water", "Grass"],
    baseStats: { hp: 62, atk: 25, def: 56, spa: 60, spd: 70, spe: 20 },
    abilities: { 0: "Regenerator", 1: "Sticky Hold", H: "Drizzle" },
    weightkg: 7.3,
    evos: ["grussgu"]
  },
  grussgu: {
    num: 65,
    name: "Grussgu",
    types: ["Water", "Grass"],
    baseStats: { hp: 96, atk: 55, def: 78, spa: 85, spd: 100, spe: 36 },
    abilities: { 0: "Regenerator", 1: "Sticky Hold", H: "Drizzle" },
    weightkg: 30.9,
    prevo: "pasuragu",
    otherFormes: ["Grussgu-Mega"],
    formeOrder: ["Grussgu", "Grussgu-Mega"]
  },
  grussgumega: {
    num: 65,
    name: "Grussgu-Mega",
    baseSpecies: "Grussgu",
    forme: "Mega",
    types: ["Water", "Grass"],
    baseStats: { hp: 96, atk: 75, def: 138, spa: 85, spd: 130, spe: 26 },
    abilities: { 0: "Revitalizing Rain" },
    weightkg: 130.9,
    requiredItem: "Grussgurite"
  },
  orvenom: {
    num: 66,
    name: "Orvenom",
    types: ["Poison", "Dark"],
    baseStats: { hp: 83, atk: 95, def: 67, spa: 50, spd: 75, spe: 118 },
    abilities: { 0: "Pickpocket", 1: "Poison Touch", H: "Unburden" },
    weightkg: 15.1
  },
  nerdium: {
    num: 67,
    name: "Nerdium",
    types: ["Water"],
    baseStats: { hp: 35, atk: 25, def: 30, spa: 85, spd: 40, spe: 60 },
    abilities: { 0: "Swift Swim", 1: "Analytic", H: "Telepathy" },
    weightkg: 2.5,
    evos: ["smartish"]
  },
  smartish: {
    num: 68,
    name: "Smartish",
    types: ["Water", "Psychic"],
    baseStats: { hp: 95, atk: 55, def: 65, spa: 130, spd: 75, spe: 70 },
    abilities: { 0: "Open Mind", 1: "Analytic", H: "Telepathy" },
    weightkg: 80.9,
    prevo: "nerdium"
  },
  higarden: {
    num: 69,
    name: "Higarden",
    types: ["Grass"],
    baseStats: { hp: 95, atk: 65, def: 60, spa: 45, spd: 60, spe: 50 },
    abilities: { 0: "Thick Fat", 1: "Rain Dish", H: "Huge Power" },
    weightkg: 49.5,
    evos: ["unimount"]
  },
  unimount: {
    num: 70,
    name: "Unimount",
    types: ["Grass", "Ice"],
    baseStats: { hp: 145, atk: 70, def: 80, spa: 85, spd: 80, spe: 25 },
    abilities: { 0: "Thick Fat", 1: "Snow Warning", H: "Huge Power" },
    weightkg: 650,
    prevo: "higarden"
  },
  birnal: {
    num: 71,
    name: "Birnal",
    types: ["Normal", "Flying"],
    baseStats: { hp: 45, atk: 55, def: 50, spa: 75, spd: 60, spe: 80 },
    abilities: { 0: "Frisk", 1: "Pressure", H: "Early Bird" },
    weightkg: 10.2,
    evos: ["yeagle"]
  },
  yeagle: {
    num: 72,
    name: "Yeagle",
    types: ["Normal", "Flying"],
    baseStats: { hp: 83, atk: 65, def: 70, spa: 85, spd: 75, spe: 98 },
    abilities: { 0: "Frisk", 1: "Pressure", H: "Adaptability" },
    weightkg: 55.4,
    prevo: "birnal"
  },
  flysh: {
    num: 73,
    name: "Flysh",
    types: ["Water", "Flying"],
    baseStats: { hp: 40, atk: 45, def: 35, spa: 63, spd: 55, spe: 70 },
    abilities: { 0: "Water Veil", H: "Swift Swim" },
    weightkg: 1.5,
    evos: ["seaplane"]
  },
  seaplane: {
    num: 74,
    name: "Seaplane",
    types: ["Water", "Flying"],
    baseStats: { hp: 60, atk: 70, def: 55, spa: 80, spd: 55, spe: 85 },
    abilities: { 0: "Water Veil", H: "Swift Swim" },
    weightkg: 15.8,
    prevo: "flysh",
    evos: ["airpier"]
  },
  airpier: {
    num: 75,
    name: "Airpier",
    types: ["Water", "Flying"],
    baseStats: { hp: 80, atk: 106, def: 80, spa: 83, spd: 80, spe: 105 },
    abilities: { 0: "Water Veil", 1: "Justified", H: "Sharpness" },
    weightkg: 72.4,
    prevo: "seaplane"
  },
  likaba: {
    num: 76,
    name: "Likaba",
    types: ["Psychic"],
    baseStats: { hp: 60, atk: 50, def: 45, spa: 70, spd: 55, spe: 55 },
    abilities: { 0: "Berserk", 1: "Infiltrator", H: "Leecher" },
    weightkg: 15.7,
    evos: ["sucabra"]
  },
  sucabra: {
    num: 77,
    name: "Sucabra",
    types: ["Psychic", "Flying"],
    baseStats: { hp: 72, atk: 85, def: 75, spa: 105, spd: 75, spe: 94 },
    abilities: { 0: "Berserk", 1: "Infiltrator", H: "Leecher" },
    weightkg: 90.2,
    prevo: "likaba"
  },
  mousse: {
    num: 78,
    name: "Mousse",
    types: ["Fairy"],
    baseStats: { hp: 72, atk: 54, def: 60, spa: 50, spd: 70, spe: 42 },
    abilities: { 0: "Thick Fat", 1: "Sweet Veil", H: "Gluttony" },
    weightkg: 10,
    evos: ["donter"]
  },
  donter: {
    num: 79,
    name: "Donter",
    types: ["Fairy"],
    baseStats: { hp: 100, atk: 84, def: 85, spa: 70, spd: 92, spe: 53 },
    abilities: { 0: "Thick Fat", 1: "Well-Baked Body", H: "Gluttony" },
    weightkg: 80.5,
    prevo: "mousse"
  },
  melops: {
    num: 80,
    name: "Melops",
    types: ["Grass"],
    baseStats: { hp: 65, atk: 60, def: 50, spa: 40, spd: 50, spe: 45 },
    abilities: { 0: "Battle Armor", 1: "Harvest", H: "Natural Cure" },
    weightkg: 10.2,
    evos: ["harvetops"]
  },
  harvetops: {
    num: 81,
    name: "Harvetops",
    types: ["Grass"],
    baseStats: { hp: 90, atk: 75, def: 75, spa: 50, spd: 60, spe: 55 },
    abilities: { 0: "Battle Armor", 1: "Harvest", H: "Natural Cure" },
    weightkg: 97.4,
    prevo: "melops",
    evos: ["pentamelop"]
  },
  pentamelop: {
    num: 82,
    name: "Pentamelop",
    types: ["Grass", "Steel"],
    baseStats: { hp: 118, atk: 105, def: 105, spa: 63, spd: 75, spe: 68 },
    abilities: { 0: "Great Shield", 1: "Harvest", H: "Natural Cure" },
    weightkg: 340.7,
    prevo: "harvetops"
  },
  scarferret: {
    num: 83,
    name: "Scarferret",
    types: ["Fairy"],
    baseStats: { hp: 45, atk: 60, def: 50, spa: 80, spd: 60, spe: 73 },
    abilities: { 0: "Cute Charm", 1: "Limber", H: "Misty Surge" },
    weightkg: 1.5,
    evos: ["lovefume"]
  },
  lovefume: {
    num: 84,
    name: "Lovefume",
    types: ["Fairy", "Poison"],
    baseStats: { hp: 74, atk: 70, def: 80, spa: 105, spd: 95, spe: 100 },
    abilities: { 0: "Aroma Veil", 1: "Magic Bounce", H: "Misty Surge" },
    weightkg: 25.8,
    prevo: "scarferret"
  },
  smolle: {
    num: 85,
    name: "Smolle",
    types: ["Ground", "Ice"],
    baseStats: { hp: 76, atk: 72, def: 65, spa: 45, spd: 65, spe: 60 },
    abilities: { 0: "Slush Rush", 1: "Sand Veil", H: "Snow Cloak" },
    weightkg: 8.8,
    evos: ["molvel"]
  },
  molvel: {
    num: 86,
    name: "Molvel",
    types: ["Ground", "Ice"],
    baseStats: { hp: 120, atk: 105, def: 74, spa: 60, spd: 74, spe: 75 },
    abilities: { 0: "Slush Rush", 1: "Sand Veil", H: "Snow Warning" },
    weightkg: 290.5,
    prevo: "smolle"
  },
  toxtaur: {
    num: 87,
    name: "Toxtaur",
    types: ["Poison", "Fighting"],
    gender: "M",
    baseStats: { hp: 75, atk: 85, def: 54, spa: 45, spd: 54, spe: 61 },
    abilities: { 0: "Rivalry", 1: "Poison Touch", H: "Hyper Cutter" },
    weightkg: 15.7,
    evos: ["venotauro"]
  },
  venotauro: {
    num: 88,
    name: "Venotauro",
    types: ["Poison", "Fighting"],
    gender: "M",
    baseStats: { hp: 105, atk: 120, def: 90, spa: 50, spd: 85, spe: 54 },
    abilities: { 0: "Toxic Reaction", 1: "Poison Touch", H: "Defiant" },
    weightkg: 134.5,
    prevo: "toxtaur"
  },
  helmdillo: {
    num: 89,
    name: "Helmdillo",
    types: ["Ground", "Electric"],
    baseStats: { hp: 67, atk: 54, def: 72, spa: 50, spd: 80, spe: 35 },
    abilities: { 0: "Battle Armor", 1: "Rock Head", H: "Bulletproof" },
    weightkg: 12.5,
    evos: ["rescurer"]
  },
  rescurer: {
    num: 90,
    name: "Rescurer",
    types: ["Ground", "Electric"],
    baseStats: { hp: 92, atk: 74, def: 95, spa: 70, spd: 115, spe: 40 },
    abilities: { 0: "Life Jacket", 1: "Rock Head", H: "Bulletproof" },
    weightkg: 30.9,
    prevo: "helmdillo"
  },
  crimske: {
    num: 91,
    name: "Crimske",
    types: ["Fire"],
    baseStats: { hp: 34, atk: 51, def: 45, spa: 65, spd: 50, spe: 60 },
    abilities: { 0: "Poison Point", 1: "Shed Skin", H: "White Smoke" },
    weightkg: 6.4,
    evos: ["snagant"]
  },
  snagant: {
    num: 92,
    name: "Snagant",
    types: ["Fire"],
    baseStats: { hp: 60, atk: 65, def: 65, spa: 80, spd: 70, spe: 65 },
    abilities: { 0: "Poison Point", 1: "Shed Skin", H: "Marvel Scale" },
    weightkg: 16.8,
    prevo: "crimske",
    evos: ["zhulong"]
  },
  zhulong: {
    num: 93,
    name: "Zhulong",
    types: ["Fire", "Dragon"],
    baseStats: { hp: 80, atk: 85, def: 76, spa: 105, spd: 100, spe: 88 },
    abilities: { 0: "Poison Heal", 1: "Shed Skin", H: "Levitate" },
    weightkg: 180.5,
    prevo: "snagant"
  },
  yufo: {
    num: 94,
    name: "Yufo",
    types: ["Psychic", "Steel"],
    gender: "N",
    baseStats: { hp: 55, atk: 34, def: 85, spa: 76, spd: 15, spe: 51 },
    abilities: { 0: "Filter", 1: "Telepathy", H: "Levitate" },
    weightkg: 60.8,
    evos: ["spavader"]
  },
  spavader: {
    num: 95,
    name: "Spavader",
    types: ["Psychic", "Steel"],
    gender: "N",
    baseStats: { hp: 70, atk: 68, def: 145, spa: 102, spd: 65, spe: 51 },
    abilities: { 0: "Filter", 1: "Telepathy", H: "Levitate" },
    weightkg: 580.9,
    prevo: "yufo"
  },
  grichick: {
    num: 96,
    name: "Grichick",
    types: ["Fire", "Electric"],
    baseStats: { hp: 54, atk: 76, def: 46, spa: 60, spd: 46, spe: 65 },
    abilities: { 0: "Reckless", 1: "Keen Eye", H: "Sniper" },
    weightkg: 15.2,
    evos: ["grileo"]
  },
  grileo: {
    num: 97,
    name: "Grileo",
    types: ["Fire", "Electric"],
    baseStats: { hp: 75, atk: 115, def: 65, spa: 92, spd: 70, spe: 92 },
    abilities: { 0: "Success", 1: "Keen Eye", H: "Sniper" },
    weightkg: 79.8,
    prevo: "grichick"
  },
  sbusho: {
    num: 98,
    name: "Sbusho",
    types: ["Rock", "Grass"],
    baseStats: { hp: 80, atk: 55, def: 65, spa: 55, spd: 65, spe: 35 },
    abilities: { 0: "Leaf Guard", 1: "Chlorophyll", H: "Multiscale" },
    weightkg: 25.4,
    evos: ["pangearth"]
  },
  pangearth: {
    num: 99,
    name: "Pangearth",
    types: ["Rock", "Grass"],
    baseStats: { hp: 130, atk: 85, def: 100, spa: 65, spd: 70, spe: 45 },
    abilities: { 0: "Leaf Plates", 1: "Chlorophyll", H: "Multiscale" },
    weightkg: 189.7,
    prevo: "sbusho"
  },
  ankylonite: {
    num: 100,
    name: "Ankylonite",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 70, atk: 95, def: 70, spa: 35, spd: 35, spe: 50 },
    abilities: { 0: "Guts", 1: "Battle Armor", H: "Intimidate" },
    weightkg: 40.8,
    evos: ["champkylo"]
  },
  champkylo: {
    num: 101,
    name: "Champkylo",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 90, atk: 125, def: 90, spa: 64, spd: 65, spe: 61 },
    abilities: { 0: "Guts", 1: "Battle Armor", H: "Intimidate" },
    weightkg: 206.9,
    prevo: "ankylonite"
  },
  slomoss: {
    num: 102,
    name: "Slomoss",
    types: ["Rock", "Grass"],
    baseStats: { hp: 95, atk: 85, def: 60, spa: 55, spd: 25, spe: 35 },
    abilities: { 0: "Truant", H: "Immunity" },
    weightkg: 34.2,
    evos: ["milomoss"]
  },
  milomoss: {
    num: 103,
    name: "Milomoss",
    types: ["Rock", "Grass"],
    baseStats: { hp: 140, atk: 132, def: 74, spa: 62, spd: 52, spe: 35 },
    abilities: { 0: "Tough Claws", 1: "Gluttony", H: "Immunity" },
    weightkg: 485,
    prevo: "slomoss"
  },
  rampeck: {
    num: 104,
    name: "Rampeck",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 45, atk: 61, def: 48, spa: 61, spd: 45, spe: 95 },
    abilities: { 0: "Early Bird", 1: "Intimidate", H: "Quick Feet" },
    weightkg: 15.2,
    evos: ["terroccer"]
  },
  terroccer: {
    num: 105,
    name: "Terroccer",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 70, atk: 100, def: 75, spa: 70, spd: 60, spe: 120 },
    abilities: { 0: "Skill Link", 1: "Intimidate", H: "Quick Feet" },
    weightkg: 98.2,
    prevo: "rampeck"
  },
  tifrost: {
    num: 106,
    name: "Tifrost",
    types: ["Rock", "Ice"],
    baseStats: { hp: 52, atk: 90, def: 54, spa: 25, spd: 54, spe: 80 },
    abilities: { 0: "Strong Jaw", 1: "Snow Cloak", H: "Refrigerate" },
    weightkg: 12.9,
    evos: ["smilofrost"]
  },
  smilofrost: {
    num: 107,
    name: "Smilofrost",
    types: ["Rock", "Ice"],
    baseStats: { hp: 78, atk: 113, def: 74, spa: 46, spd: 76, spe: 108 },
    abilities: { 0: "Strong Jaw", 1: "Snow Cloak", H: "Refrigerate" },
    weightkg: 84,
    prevo: "tifrost"
  },
  vizcachu: {
    num: 108,
    name: "Vizcachu",
    types: ["Electric", "Normal"],
    baseStats: { hp: 59, atk: 54, def: 55, spa: 90, spd: 55, spe: 123 },
    abilities: { 0: "Run Away", 1: "Scrappy", H: "Magnet Pull" },
    weightkg: 8,
    otherFormes: ["Vizcachu-Mega"],
    formeOrder: ["Vizcachu", "Vizcachu-Mega"]
  },
  vizcachumega: {
    num: 108,
    name: "Vizcachu-Mega",
    baseSpecies: "Vizcachu",
    forme: "Mega",
    types: ["Electric", "Normal"],
    baseStats: { hp: 59, atk: 64, def: 95, spa: 120, spd: 95, spe: 103 },
    abilities: { 0: "Punk Rock" },
    weightkg: 18,
    requiredItem: "Vizcarite"
  },
  paramer: {
    num: 109,
    name: "Paramer",
    types: ["Steel", "Dragon"],
    baseStats: { hp: 50, atk: 75, def: 75, spa: 35, spd: 45, spe: 60 },
    abilities: { 0: "Clear Body", 1: "Rock Head", H: "Battle Armor" },
    weightkg: 45.5,
    evos: ["toolsaur"]
  },
  toolsaur: {
    num: 110,
    name: "Toolsaur",
    types: ["Steel", "Dragon"],
    baseStats: { hp: 84, atk: 85, def: 110, spa: 60, spd: 85, spe: 70 },
    abilities: { 0: "Mirror Armor", 1: "Sheer Force", H: "Indestructible" },
    weightkg: 204.4,
    prevo: "paramer"
  },
  neuro: {
    num: 111,
    name: "Neuro",
    types: ["Psychic", "Electric"],
    baseStats: { hp: 60, atk: 35, def: 45, spa: 70, spd: 75, spe: 55 },
    abilities: { 0: "Levitate", 1: "Telepathy", H: "Psychic Surge" },
    weightkg: 1.3,
    evos: ["brancell"]
  },
  brancell: {
    num: 112,
    name: "Brancell",
    types: ["Psychic", "Electric"],
    baseStats: { hp: 85, atk: 45, def: 78, spa: 110, spd: 125, spe: 62 },
    abilities: { 0: "Levitate", 1: "Telepathy", H: "Psychic Surge" },
    weightkg: 74.2,
    prevo: "neuro"
  },
  freezegon: {
    num: 113,
    name: "Freezegon",
    types: ["Dragon", "Ice"],
    baseStats: { hp: 50, atk: 60, def: 50, spa: 55, spd: 50, spe: 35 },
    abilities: { 0: "Run Away", 1: "Snow Cloak", H: "Slush Rush" },
    weightkg: 38.1,
    evos: ["snoak"]
  },
  snoak: {
    num: 114,
    name: "Snoak",
    types: ["Dragon", "Ice"],
    baseStats: { hp: 80, atk: 70, def: 80, spa: 80, spd: 85, spe: 25 },
    abilities: { 0: "Fur Coat", 1: "Snow Cloak", H: "Insomnia" },
    weightkg: 100.4,
    prevo: "freezegon",
    evos: ["coldrake"]
  },
  coldrake: {
    num: 115,
    name: "Coldrake",
    types: ["Dragon", "Ice"],
    baseStats: { hp: 83, atk: 110, def: 90, spa: 90, spd: 95, spe: 82 },
    abilities: { 0: "Storm", 1: "Snow Cloak", H: "Slush Rush" },
    weightkg: 120.2,
    prevo: "snoak"
  },
  capowt: {
    num: 116,
    name: "Capowt",
    types: ["Fighting", "Fire"],
    baseStats: { hp: 34, atk: 70, def: 40, spa: 65, spd: 45, spe: 85 },
    abilities: { 0: "Quick Feet", 1: "Dancer", H: "Hustle" },
    weightkg: 2.4,
    evos: ["capoedar"]
  },
  capoedar: {
    num: 117,
    name: "Capoedar",
    types: ["Fighting", "Fire"],
    baseStats: { hp: 64, atk: 90, def: 60, spa: 95, spd: 70, spe: 116 },
    abilities: { 0: "Quick Feet", 1: "Dancer", H: "Hustle" },
    weightkg: 52.1,
    prevo: "capowt"
  },
  warcon: {
    num: 118,
    name: "Warcon",
    types: ["Normal", "Flying"],
    baseStats: { hp: 60, atk: 80, def: 60, spa: 45, spd: 55, spe: 70 },
    abilities: { 0: "Scrappy", 1: "Inner Focus", H: "Wind Rider" },
    weightkg: 3.7,
    evos: ["istrebitel"]
  },
  istrebitel: {
    num: 119,
    name: "Istrebitel",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 75, atk: 110, def: 75, spa: 55, spd: 70, spe: 97 },
    abilities: { 0: "Scrappy", 1: "Inner Focus", H: "Wind Rider" },
    weightkg: 44.6,
    prevo: "warcon"
  },
  voltcro: {
    num: 120,
    name: "Voltcro",
    types: ["Electric", "Dragon"],
    baseStats: { hp: 62, atk: 70, def: 55, spa: 48, spd: 62, spe: 50 },
    abilities: { 0: "Motor Drive", 1: "Solar Power", H: "Minus" },
    weightkg: 12.3,
    evos: ["wirechomp"]
  },
  wirechomp: {
    num: 121,
    name: "Wirechomp",
    types: ["Electric", "Dragon"],
    baseStats: { hp: 72, atk: 105, def: 75, spa: 64, spd: 62, spe: 65 },
    abilities: { 0: "Motor Drive", 1: "Solar Power", H: "Plus" },
    weightkg: 26.7,
    prevo: "voltcro",
    evos: ["thungator"]
  },
  thungator: {
    num: 122,
    name: "Thungator",
    types: ["Electric", "Dragon"],
    baseStats: { hp: 82, atk: 124, def: 80, spa: 100, spd: 82, spe: 67 },
    abilities: { 0: "Motor Drive", 1: "Solar Power", H: "Electric Surge" },
    weightkg: 94.8,
    prevo: "wirechomp"
  },
  scalpick: {
    num: 123,
    name: "Scalpick",
    types: ["Flying", "Dragon"],
    baseStats: { hp: 55, atk: 50, def: 40, spa: 60, spd: 35, spe: 80 },
    abilities: { 0: "Hustle", 1: "Early Bird", H: "Marvel Scale" },
    weightkg: 4.5,
    evos: ["roostlax"]
  },
  roostlax: {
    num: 124,
    name: "Roostlax",
    types: ["Flying", "Dragon"],
    baseStats: { hp: 72, atk: 80, def: 70, spa: 68, spd: 60, spe: 60 },
    abilities: { 0: "Truant", 1: "Early Bird", H: "Marvel Scale" },
    weightkg: 80.2,
    prevo: "scalpick",
    evos: ["eagatrice"]
  },
  eagatrice: {
    num: 125,
    name: "Eagatrice",
    types: ["Flying", "Dragon"],
    baseStats: { hp: 101, atk: 116, def: 81, spa: 81, spd: 74, spe: 87 },
    abilities: { 0: "Intimidate", 1: "Cockatrice Dominance", H: "Marvel Scale" },
    weightkg: 90.5,
    prevo: "roostlax"
  },
  theri: {
    num: 126,
    name: "Theri",
    types: ["Dark", "Steel"],
    baseStats: { hp: 70, atk: 95, def: 65, spa: 35, spd: 46, spe: 46 },
    abilities: { 0: "Tough Claws", 1: "Hyper Cutter", H: "Rattled" },
    weightkg: 11.1,
    evos: ["theriscyno"]
  },
  theriscyno: {
    num: 127,
    name: "Theriscyno",
    types: ["Dark", "Steel"],
    baseStats: { hp: 102, atk: 112, def: 84, spa: 63, spd: 88, spe: 66 },
    abilities: { 0: "Tough Claws", 1: "Contrary", H: "Frightening" },
    weightkg: 102.4,
    prevo: "theri"
  },
  ghoca: {
    num: 128,
    name: "Ghoca",
    types: ["Ghost", "Psychic"],
    baseStats: { hp: 44, atk: 65, def: 35, spa: 105, spd: 96, spe: 124 },
    abilities: { 0: "Levitate", 1: "Infiltrator", H: "Dazzling" },
    weightkg: 4.5
  },
  moclaw: {
    num: 129,
    name: "Moclaw",
    types: ["Water"],
    baseStats: { hp: 65, atk: 72, def: 64, spa: 52, spd: 64, spe: 28 },
    abilities: { 0: "Shell Armor", 1: "Tough Claws", H: "Regenerator" },
    weightkg: 9.1,
    evos: ["jawlusk"]
  },
  jawlusk: {
    num: 130,
    name: "Jawlusk",
    types: ["Water", "Dark"],
    baseStats: { hp: 98, atk: 110, def: 100, spa: 58, spd: 85, spe: 41 },
    abilities: { 0: "Shell Armor", 1: "Tough Claws", H: "Regenerator" },
    weightkg: 110.4,
    prevo: "moclaw"
  },
  tumbna: {
    num: 131,
    name: "Tumbna",
    types: ["Water", "Ghost"],
    baseStats: { hp: 24, atk: 63, def: 47, spa: 63, spd: 34, spe: 54 },
    abilities: { 0: "Perish Body", 1: "Cursed Body", H: "Wandering Spirit" },
    weightkg: 1.4,
    evos: ["plesioskul"]
  },
  plesioskul: {
    num: 132,
    name: "Plesioskul",
    types: ["Water", "Ghost"],
    baseStats: { hp: 94, atk: 90, def: 88, spa: 120, spd: 78, spe: 58 },
    abilities: { 0: "Perish Body", 1: "Cursed Body", H: "Wandering Spirit" },
    weightkg: 72.1,
    prevo: "tumbna"
  },
  laveel: {
    num: 133,
    name: "Laveel",
    types: ["Water", "Fire"],
    baseStats: { hp: 115, atk: 45, def: 73, spa: 95, spd: 110, spe: 63 },
    abilities: { 0: "Flame Body", 1: "Wonder Skin", H: "Storm Drain" },
    weightkg: 118.6
  },
  thermaque: {
    num: 134,
    name: "Thermaque",
    types: ["Ice", "Fire"],
    baseStats: { hp: 70, atk: 67, def: 55, spa: 86, spd: 64, spe: 72 },
    abilities: { 0: "Dry Skin", 1: "Anger Point", H: "Berserk" },
    weightkg: 34.2,
    evos: ["thermandril"]
  },
  thermandril: {
    num: 135,
    name: "Thermandril",
    types: ["Ice", "Fire"],
    baseStats: { hp: 75, atk: 90, def: 65, spa: 125, spd: 70, spe: 93 },
    abilities: { 0: "Thermal Frenzy", 1: "Anger Point", H: "Berserk" },
    weightkg: 112.8,
    prevo: "thermaque"
  },
  tamantula: {
    num: 136,
    name: "Tamantula",
    types: ["Bug", "Poison"],
    baseStats: { hp: 45, atk: 65, def: 35, spa: 60, spd: 45, spe: 82 },
    abilities: { 0: "Corrosion", 1: "Compound Eyes", H: "Merciless" },
    weightkg: 2.4,
    evos: ["spideth"]
  },
  spideth: {
    num: 137,
    name: "Spideth",
    types: ["Bug", "Poison"],
    baseStats: { hp: 75, atk: 113, def: 70, spa: 72, spd: 81, spe: 114 },
    abilities: { 0: "Corrosion", 1: "Compound Eyes", H: "Merciless" },
    weightkg: 65.7,
    prevo: "tamantula"
  },
  abomigo: {
    num: 138,
    name: "Abomigo",
    types: ["Dark", "Ice"],
    baseStats: { hp: 95, atk: 118, def: 74, spa: 65, spd: 74, spe: 74 },
    abilities: { 0: "Slush Rush", 1: "Insomnia", H: "Sheer Force" },
    weightkg: 82.4,
    otherFormes: ["Abomigo-Mega"],
    formeOrder: ["Abomigo, Abomigo-Mega"]
  },
  abomigomega: {
    num: 138,
    name: "Abomigo-Mega",
    baseSpecies: "Abomigo",
    forme: "Mega",
    types: ["Dark", "Ice"],
    baseStats: { hp: 95, atk: 153, def: 89, spa: 100, spd: 89, spe: 74 },
    abilities: { 0: "Slush Rush" },
    weightkg: 182.4,
    requiredItem: "Abomigorite"
  },
  chillma: {
    num: 139,
    name: "Chillma",
    types: ["Water", "Ice"],
    baseStats: { hp: 74, atk: 70, def: 42, spa: 60, spd: 40, spe: 24 },
    abilities: { 0: "Ice Body", 1: "Slush Rush", H: "Cute Charm" },
    weightkg: 10.2,
    evos: ["wintber"]
  },
  wintber: {
    num: 140,
    name: "Wintber",
    types: ["Water", "Ice"],
    baseStats: { hp: 84, atk: 75, def: 60, spa: 65, spd: 61, spe: 60 },
    abilities: { 0: "Ice Body", 1: "Slush Rush", H: "Cute Charm" },
    weightkg: 64.2,
    prevo: "chillma",
    evos: ["evergrowl"]
  },
  evergrowl: {
    num: 141,
    name: "Evergrowl",
    types: ["Water", "Ice"],
    baseStats: { hp: 94, atk: 122, def: 82, spa: 75, spd: 82, spe: 81 },
    abilities: { 0: "Ice Body", 1: "Slush Rush", H: "Eternal Ice" },
    weightkg: 125.8,
    prevo: "wintber"
  },
  stontler: {
    num: 142,
    name: "Stontler",
    types: ["Rock"],
    baseStats: { hp: 80, atk: 62, def: 110, spa: 33, spd: 23, spe: 15 },
    abilities: { 0: "Solid Rock", 1: "Sturdy", H: "Sand Stream" },
    weightkg: 20.8,
    evos: ["balatone"]
  },
  balatone: {
    num: 143,
    name: "Balatone",
    types: ["Rock"],
    baseStats: { hp: 100, atk: 82, def: 150, spa: 64, spd: 64, spe: 15 },
    abilities: { 0: "Solid Rock", 1: "Sturdy", H: "Sand Stream" },
    weightkg: 280.4,
    prevo: "stontler"
  },
  coayena: {
    num: 144,
    name: "Coayena",
    types: ["Fire", "Poison"],
    baseStats: { hp: 35, atk: 70, def: 35, spa: 55, spd: 35, spe: 55 },
    abilities: { 0: "White Smoke", 1: "Cute Charm", H: "Moxie" },
    weightkg: 12.5,
    evos: ["pherosmoke"]
  },
  pherosmoke: {
    num: 145,
    name: "Pherosmoke",
    types: ["Fire", "Poison"],
    gender: "F",
    baseStats: { hp: 63, atk: 111, def: 60, spa: 85, spd: 60, spe: 100 },
    abilities: { 0: "Neutralizing Gas", 1: "Lingering Aroma", H: "Moxie" },
    weightkg: 64.3,
    prevo: "coayena"
  },
  octovase: {
    num: 146,
    name: "Octovase",
    types: ["Water", "Ground"],
    baseStats: { hp: 55, atk: 38, def: 80, spa: 52, spd: 52, spe: 48 },
    abilities: { 0: "Weak Armor", 1: "Shell Armor", H: "Regenerator" },
    weightkg: 25.7,
    evos: ["cthulhurn"]
  },
  cthulhurn: {
    num: 147,
    name: "Cthulhurn",
    types: ["Water", "Ground"],
    baseStats: { hp: 75, atk: 45, def: 110, spa: 86, spd: 80, spe: 59 },
    abilities: { 0: "Anger Shell", 1: "Shell Armor", H: "Regenerator" },
    weightkg: 95.7,
    prevo: "octovase"
  },
  shahood: {
    num: 148,
    name: "Shahood",
    types: ["Ghost", "Dark"],
    baseStats: { hp: 56, atk: 85, def: 56, spa: 65, spd: 65, spe: 70 },
    abilities: { 0: "Overcoat", 1: "Prankster", H: "Void Body" },
    weightkg: 1.2,
    evos: ["karakasa"]
  },
  karakasa: {
    num: 149,
    name: "Karakasa",
    types: ["Ghost", "Dark"],
    baseStats: { hp: 87, atk: 110, def: 85, spa: 70, spd: 90, spe: 73 },
    abilities: { 0: "Overcoat", 1: "Prankster", H: "Void Body" },
    weightkg: 1.8,
    prevo: "shahood"
  },
  grag: {
    num: 150,
    name: "Grag",
    types: ["Poison", "Ghost"],
    gender: "F",
    baseStats: { hp: 38, atk: 15, def: 35, spa: 75, spd: 45, spe: 60 },
    abilities: { 0: "Serene Grace", 1: "Water Absorb", H: "Levitate" },
    weightkg: 1.6,
    evos: ["kimokus"]
  },
  kimokus: {
    num: 151,
    name: "Kimokus",
    types: ["Poison", "Ghost"],
    gender: "F",
    baseStats: { hp: 65, atk: 52, def: 62, spa: 110, spd: 72, spe: 115 },
    abilities: { 0: "Serene Grace", 1: "Water Absorb", H: "Levitate" },
    weightkg: 12.4,
    prevo: "grag"
  },
  toknight: {
    num: 152,
    name: "Toknight",
    types: ["Ghost", "Steel"],
    gender: "N",
    baseStats: { hp: 62, atk: 45, def: 130, spa: 85, spd: 70, spe: 77 },
    abilities: { 0: "Prankster", 1: "Battle Armor", H: "Cursed Body" },
    weightkg: 4.7
  },
  cowpy: {
    num: 153,
    name: "Cowpy",
    types: ["Fire"],
    baseStats: { hp: 70, atk: 60, def: 40, spa: 50, spd: 40, spe: 50 },
    abilities: { 0: "Reckless", 1: "Stamina", H: "Thick Fat" },
    weightkg: 14.8,
    evos: ["cowork"]
  },
  cowork: {
    num: 154,
    name: "Cowork",
    types: ["Fire"],
    baseStats: { hp: 75, atk: 95, def: 50, spa: 55, spd: 50, spe: 80 },
    abilities: { 0: "Reckless", 1: "Stamina", H: "Drought" },
    weightkg: 29.7,
    prevo: "cowpy",
    evos: ["barbecow"]
  },
  barbecow: {
    num: 155,
    name: "Barbecow",
    types: ["Fire", "Ground"],
    baseStats: { hp: 90, atk: 95, def: 95, spa: 90, spd: 80, spe: 86 },
    abilities: { 0: "Cud Chew", 1: "Stamina", H: "Drought" },
    weightkg: 115.7,
    prevo: "cowork"
  },
  hoorel: {
    num: 156,
    name: "Hoorel",
    types: ["Water", "Steel"],
    baseStats: { hp: 60, atk: 95, def: 75, spa: 25, spd: 45, spe: 85 },
    abilities: { 0: "Battle Armor", 1: "Rough Skin", H: "Lightning Rod" },
    weightkg: 12.4,
    evos: ["baishark"]
  },
  baishark: {
    num: 157,
    name: "Baishark",
    types: ["Water", "Steel"],
    baseStats: { hp: 86, atk: 110, def: 95, spa: 45, spd: 65, spe: 89 },
    abilities: { 0: "Strong Jaw", 1: "Rough Skin", H: "Lightning Rod" },
    weightkg: 93.9,
    prevo: "hoorel"
  },
  magshroom: {
    num: 158,
    name: "Magshroom",
    types: ["Grass", "Electric"],
    baseStats: { hp: 125, atk: 35, def: 75, spa: 90, spd: 90, spe: 38 },
    abilities: { 0: "Effect Spore", 1: "Poison Heal", H: "Thick Fat" },
    weightkg: 200.9
  },
  luvdisc: {
    inherit: true,
    num: 159,
    evos: ["Luviu"]
  },
  luviu: {
    num: 160,
    name: "Luviu",
    types: ["Water", "Fairy"],
    baseStats: { hp: 83, atk: 50, def: 85, spa: 95, spd: 95, spe: 117 },
    abilities: { 0: "Swift Swim", 1: "Triage", H: "Pixilate" },
    weightkg: 98.2,
    prevo: "luvdisc"
  },
  shuckle: {
    inherit: true,
    evos: ["Shucklony"],
    num: 161
  },
  shucklony: {
    num: 162,
    name: "Shucklony",
    types: ["Bug", "Rock"],
    baseStats: { hp: 70, atk: 20, def: 200, spa: 50, spd: 200, spe: 5 },
    abilities: { 0: "Sticky Hold", 1: "Sap Sipper", H: "Contrary" },
    weightkg: 60.5,
    prevo: "shuckle"
  },
  drowzee: {
    inherit: true,
    num: 163
  },
  hypno: {
    inherit: true,
    num: 164,
    evos: ["Dreamer"]
  },
  dreamer: {
    num: 165,
    name: "Dreamer",
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 85, atk: 113, def: 80, spa: 73, spd: 120, spe: 78 },
    abilities: { 0: "Comatose" },
    weightkg: 85.6,
    prevo: "hypno"
  },
  ekans: {
    inherit: true,
    num: 166
  },
  arbok: {
    inherit: true,
    num: 167,
    evos: ["Nohtyp"]
  },
  nohtyp: {
    num: 168,
    name: "Nohtyp",
    types: ["Poison", "Ground"],
    baseStats: { hp: 100, atk: 105, def: 99, spa: 65, spd: 89, spe: 84 },
    abilities: { 0: "Intimidate", 1: "Shed Skin", H: "Mold Breaker" },
    weightkg: 70.5,
    prevo: "arbok"
  },
  jumpfurr: {
    num: 169,
    name: "Jumpfurr",
    types: ["Grass", "Fairy"],
    baseStats: { hp: 75, atk: 25, def: 70, spa: 95, spd: 85, spe: 110 },
    abilities: { 0: "Chlorophyll", 1: "Sticky Seeds", H: "Unburden" },
    weightkg: 3
  },
  meowthder: {
    num: 170,
    name: "Meowthder",
    types: ["Electric", "Fairy"],
    baseStats: { hp: 65, atk: 80, def: 60, spa: 70, spd: 65, spe: 100 },
    abilities: { 0: "Ball Fetch", 1: "Static", H: "Galvanize" },
    weightkg: 32
  },
  surivexe: {
    num: 171,
    name: "SurivExe",
    types: ["Ghost", "Electric"],
    gender: "N",
    baseStats: { hp: 65, atk: 55, def: 85, spa: 65, spd: 124, spe: 106 },
    abilities: { 0: "Malware" },
    weightkg: 0.5,
    otherFormes: ["SurivExe-Virus"],
    formeOrder: ["SurivExe", "SurivExe-Virus"]
  },
  surivexevirus: {
    num: 171,
    name: "SurivExe-Virus",
    baseSpecies: "SurivExe",
    forme: "Virus",
    types: ["Ghost", "Electric"],
    baseStats: { hp: 65, atk: 105, def: 85, spa: 124, spd: 104, spe: 106 },
    abilities: { 0: "Malware" },
    weightkg: 0.5,
    requiredAbility: "Malware",
    battleOnly: "SurivExe"
  },
  eeveecile: {
    num: 172,
    name: "Eevee-Cile",
    baseSpecies: "Eevee",
    forme: "Cile",
    types: ["Normal"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55 },
    abilities: { 0: "Run Away", 1: "Adaptability", H: "Anticipation" },
    heightm: 0.3,
    weightkg: 6.5,
    color: "Brown",
    evos: ["Vaporeon-Cile", "Jolteon-Cile", "Flareon-Cile", "Espeon-Cile", "Umbreon-Cile", "Leafeon-Cile", "Glaceon-Cile", "Sylveon-Cile", "Qilineon", "Fossileon"],
    eggGroups: ["Field"]
  },
  vaporeoncile: {
    num: 173,
    name: "Vaporeon-Cile",
    baseSpecies: "Vaporeon",
    forme: "Cile",
    types: ["Flying"],
    baseStats: { hp: 130, atk: 60, def: 65, spa: 95, spd: 110, spe: 65 },
    abilities: { 0: "Water Absorb", 1: "Air Lock", H: "Flare Boost" },
    heightm: 1.2,
    weightkg: 19,
    color: "Blue",
    prevo: "Eevee-Cile",
    evoType: "useItem",
    evoItem: "Water Stone",
    eggGroups: ["Field"]
  },
  jolteoncile: {
    num: 174,
    name: "Jolteon-Cile",
    baseSpecies: "Jolteon",
    forme: "Cile",
    types: ["Bug"],
    baseStats: { hp: 65, atk: 95, def: 110, spa: 65, spd: 60, spe: 130 },
    abilities: { 0: "Volt Absorb", 1: "Iron Barbs", H: "Technician" },
    heightm: 0.8,
    weightkg: 26.5,
    color: "Yellow",
    prevo: "Eevee-Cile",
    evoType: "useItem",
    evoItem: "Thunder Stone",
    eggGroups: ["Field"]
  },
  flareoncile: {
    num: 175,
    name: "Flareon-Cile",
    baseSpecies: "Flareon",
    forme: "Cile",
    types: ["Ghost"],
    baseStats: { hp: 65, atk: 130, def: 60, spa: 65, spd: 110, spe: 95 },
    abilities: { 0: "Flash Fire", 1: "Mold Breaker", H: "Magic Guard" },
    heightm: 0.9,
    weightkg: 15,
    color: "White",
    prevo: "Eevee-Cile",
    evoType: "useItem",
    evoItem: "Fire Stone",
    eggGroups: ["Field"]
  },
  espeoncile: {
    num: 176,
    name: "Espeon-Cile",
    baseSpecies: "Espeon",
    forme: "Cile",
    types: ["Rock"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 65, atk: 60, def: 110, spa: 130, spd: 65, spe: 95 },
    abilities: { 0: "Magic Bounce", 1: "Competitive", H: "Sand Force" },
    heightm: 0.9,
    weightkg: 46.5,
    color: "Brown",
    prevo: "Eevee-Cile",
    evoType: "levelFriendship",
    evoCondition: "during the day",
    eggGroups: ["Field"]
  },
  umbreoncile: {
    num: 177,
    name: "Umbreon-Cile",
    baseSpecies: "Umbreon",
    forme: "Cile",
    types: ["Poison"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 110, atk: 65, def: 95, spa: 65, spd: 130, spe: 60 },
    abilities: { 0: "Inner Focus", 1: "Perish Body", H: "Corrosion" },
    heightm: 1.8,
    weightkg: 45,
    color: "Black",
    prevo: "Eevee-Cile",
    evoType: "levelFriendship",
    evoCondition: "at night",
    eggGroups: ["Field"]
  },
  leafeoncile: {
    num: 178,
    name: "Leafeon-Cile",
    baseSpecies: "Leafeon",
    forme: "Cile",
    types: ["Fighting"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 110, atk: 95, def: 130, spa: 60, spd: 65, spe: 65 },
    abilities: { 0: "Chlorophyll", 1: "Defiant", H: "Regenerator" },
    heightm: 1,
    weightkg: 30.5,
    color: "Yellow",
    prevo: "Eevee-Cile",
    evoType: "useItem",
    evoItem: "Leaf Stone",
    eggGroups: ["Field"]
  },
  glaceoncile: {
    num: 179,
    name: "Glaceon-Cile",
    baseSpecies: "Glaceon",
    forme: "Cile",
    types: ["Steel"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 95, atk: 65, def: 110, spa: 130, spd: 65, spe: 60 },
    abilities: { 0: "Snow Cloak", 1: "Lightning Rod", H: "Analytic" },
    heightm: 1.1,
    weightkg: 65.9,
    color: "Blue",
    prevo: "Eevee-Cile",
    evoType: "useItem",
    evoItem: "Ice Stone",
    eggGroups: ["Field"]
  },
  sylveoncile: {
    num: 180,
    name: "Sylveon-Cile",
    baseSpecies: "Sylveon",
    forme: "Cile",
    types: ["Normal"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 95, atk: 60, def: 65, spa: 65, spd: 130, spe: 110 },
    abilities: { 0: "Pixilate", 1: "Normalize", H: "Huge Power" },
    heightm: 0.8,
    weightkg: 20.5,
    color: "Pink",
    prevo: "Eevee-Cile",
    evoType: "levelExtra",
    evoCondition: "with a Fairy-type move and two levels of Affection",
    eggGroups: ["Field"]
  },
  qilineon: {
    num: 181,
    name: "Qilineon",
    types: ["Dragon"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 95, atk: 65, def: 130, spa: 110, spd: 60, spe: 65 },
    abilities: { 0: "Berserk", 1: "Wonder Skin", H: "Levitate" },
    heightm: 2,
    weightkg: 60.5,
    color: "Blue",
    prevo: "Eevee-Cile",
    evoType: "useItem",
    evoItem: "Sun Stone",
    eggGroups: ["Field"]
  },
  fossileon: {
    num: 182,
    name: "Fossileon",
    types: ["Ground"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 60, atk: 110, def: 65, spa: 95, spd: 65, spe: 130 },
    abilities: { 0: "Sand Veil", 1: "Intimidate", H: "Unnerve" },
    heightm: 1.6,
    weightkg: 35.5,
    color: "Brown",
    prevo: "Eevee-Cile",
    evoType: "useItem",
    evoItem: "Dusk Stone",
    eggGroups: ["Field"]
  },
  zubat: {
    inherit: true,
    num: 183
  },
  golbat: {
    inherit: true,
    num: 184
  },
  crobat: {
    inherit: true,
    num: 185,
    otherFormes: ["Crobat-Mega"],
    formeOrder: ["Crobat", "Crobat-Mega"]
  },
  crobatmega: {
    num: 185,
    name: "Crobat-Mega",
    baseSpecies: "Crobat",
    forme: "Mega",
    types: ["Poison", "Dark"],
    baseStats: { hp: 85, atk: 100, def: 90, spa: 120, spd: 90, spe: 150 },
    abilities: { 0: "Airborne" },
    weightkg: 80,
    requiredItem: "Crobatite"
  },
  poochyena: {
    inherit: true,
    num: 186
  },
  mightyena: {
    inherit: true,
    num: 187,
    otherFormes: ["Mightyena-Mega"],
    formeOrder: ["Mightyena", "Mightyena-Mega"]
  },
  mightyenamega: {
    num: 187,
    name: "Mightyena-Mega",
    baseSpecies: "Mightyena",
    forme: "Mega",
    types: ["Dark", "Fairy"],
    baseStats: { hp: 70, atk: 111, def: 100, spa: 70, spd: 80, spe: 89 },
    abilities: { 0: "Scary" },
    weightkg: 77,
    requiredItem: "Mightite"
  },
  natu: {
    inherit: true,
    num: 188,
    evos: ["Xatu", "Naztu"]
  },
  naztu: {
    num: 189,
    name: "Naztu",
    types: ["Psychic", "Ground"],
    baseStats: { hp: 75, atk: 55, def: 70, spa: 95, spd: 80, spe: 115 },
    abilities: { 0: "Synchronize", 1: "Levitate", H: "Magic Bounce" },
    heightm: 2.5,
    weightkg: 15,
    color: "Green",
    prevo: "Natu",
    eggGroups: ["Flying"]
  },
  xatu: {
    inherit: true,
    num: 190,
    baseStats: { hp: 75, atk: 75, def: 80, spa: 95, spd: 70, spe: 95 }
  },
  granatija: {
    num: 191,
    name: "Granatija",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 65, atk: 75, def: 60, spa: 80, spd: 80, spe: 80 },
    abilities: { 0: "Gluttony", 1: "Limber", H: "Pixilate" },
    weightkg: 65.5
  },
  huemul: {
    num: 192,
    name: "Huemul",
    types: ["Normal"],
    baseStats: { hp: 25, atk: 35, def: 35, spa: 70, spd: 45, spe: 85 },
    abilities: { 0: "Rattled", 1: "Frisk", H: "Run Away" },
    weightkg: 40,
    evos: ["Undeer"]
  },
  undeer: {
    num: 193,
    name: "Undeer",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 143, atk: 85, def: 95, spa: 80, spd: 85, spe: 30 },
    abilities: { 0: "Cursed Body", 1: "Frisk", H: "Dark Eater" },
    weightkg: 521.3,
    prevo: "Huemul"
  },
  dothdo: {
    num: 194,
    name: "Dothdo",
    types: ["Ghost", "Flying"],
    baseStats: { hp: 70, atk: 85, def: 75, spa: 45, spd: 100, spe: 112 },
    abilities: { 0: "Cold Heart", 1: "Big Pecks", H: "Cloud Nine" },
    weightkg: 4.2
  },
  coldtong: {
    num: 195,
    name: "Coldtong",
    types: ["Poison", "Water"],
    baseStats: { hp: 27, atk: 25, def: 45, spa: 75, spd: 50, spe: 70 },
    abilities: { 0: "Limber", 1: "Water Absorb", H: "Quick Feet" },
    weightkg: 4,
    evos: ["sickmander"]
  },
  sickmander: {
    num: 196,
    name: "Sickmander",
    types: ["Poison", "Ice"],
    baseStats: { hp: 67, atk: 50, def: 95, spa: 115, spd: 60, spe: 90 },
    abilities: { 0: "Contagious", 1: "Water Absorb", H: "Quick Feet" },
    weightkg: 54.2,
    prevo: "coldtong"
  },
  piechivo: {
    num: 197,
    name: "Piechivo",
    types: ["Normal"],
    baseStats: { hp: 85, atk: 65, def: 70, spa: 30, spd: 60, spe: 70 },
    abilities: { 0: "Rock Head", 1: "Sap Sipper", H: "Inner Focus" },
    weightkg: 12,
    evos: ["rocabra"]
  },
  rocabra: {
    num: 198,
    name: "Rocabra",
    types: ["Normal", "Rock"],
    baseStats: { hp: 123, atk: 95, def: 100, spa: 40, spd: 73, spe: 100 },
    abilities: { 0: "Rock Head", 1: "Sap Sipper", H: "Climber" },
    weightkg: 88,
    prevo: "piechivo"
  },
  hielorizo: {
    num: 199,
    name: "Hielorizo",
    types: ["Normal", "Ice"],
    baseStats: { hp: 65, atk: 70, def: 140, spa: 35, spd: 35, spe: 102 },
    abilities: { 0: "Frozen Debris", 1: "Rough Skin", H: "Ice Body" },
    weightkg: 38.5
  },
  guerrevo: {
    num: 200,
    name: "Guerrevo",
    baseForme: "Huevo",
    types: ["Rock", "Ghost"],
    baseStats: { hp: 70, atk: 50, def: 160, spa: 60, spd: 90, spe: 20 },
    abilities: { 0: "Weak Armor", 1: "Iron Fist", H: "Bulletproof" },
    weightkg: 800,
    otherFormes: ["Guerrevo-Nacer"],
    formeOrder: ["Guerrevo", "Guerrevo-Nacer"]
  },
  guerrevonacer: {
    num: 200,
    name: "Guerrevo-Nacer",
    types: ["Rock", "Ghost"],
    baseStats: { hp: 70, atk: 115, def: 75, spa: 80, spd: 80, spe: 75 },
    abilities: { 0: "Weak Armor", 1: "Iron Fist", H: "Bulletproof" },
    weightkg: 800,
    requiredMove: "Shell Burst",
    battleOnly: "Guerrevo"
  },
  drapede: {
    num: 201,
    name: "Drapede",
    types: ["Bug", "Dragon"],
    baseStats: { hp: 140, atk: 120, def: 100, spa: 60, spd: 100, spe: 50 },
    abilities: { 0: "Guardian of the Swamp" },
    weightkg: 353.9,
    otherFormes: ["Drapede-Solemne"],
    formeOrder: ["Drapede", "Drapede-Solemne"]
  },
  drapedesolemne: {
    num: 201,
    name: "Drapede-Solemne",
    baseSpecies: "Drapede",
    forme: "Solemne",
    types: ["Fighting", "Dragon"],
    baseStats: { hp: 140, atk: 150, def: 80, spa: 100, spd: 80, spe: 20 },
    abilities: { 0: "Spirit of the Swamp" },
    weightkg: 153.9,
    requiredItem: "Golden Bracelet",
    battleOnly: "Drapede"
  },
  quetzal: {
    num: 202,
    name: "Quetzal",
    types: ["Flying", "Grass"],
    baseStats: { hp: 75, atk: 95, def: 74, spa: 110, spd: 105, spe: 111 },
    abilities: { 0: "Guardian of the Woods" },
    weightkg: 131.6,
    otherFormes: ["Quetzal-Solemne"],
    formeOrder: ["Quetzal", "Quetzal-Solemne"]
  },
  quetzalsolemne: {
    num: 202,
    name: "Quetzal-Solemne",
    baseSpecies: "Quetzal",
    forme: "Solemne",
    types: ["Dragon", "Grass"],
    baseStats: { hp: 75, atk: 65, def: 105, spa: 141, spd: 105, spe: 79 },
    abilities: { 0: "Spirit of the Woods" },
    weightkg: 331.6,
    requiredItem: "Golden Pendant",
    battleOnly: "Quetzal"
  },
  granjaguar: {
    num: 203,
    name: "Granjaguar",
    types: ["Ground", "Dark"],
    baseStats: { hp: 85, atk: 115, def: 110, spa: 100, spd: 105, spe: 55 },
    abilities: { 0: "Guardian of the Ruins" },
    weightkg: 247.9,
    otherFormes: ["Granjaguar-Solemne"],
    formeOrder: ["Granjaguar", "Granjaguar-Solemne"]
  },
  granjaguarsolemne: {
    num: 203,
    name: "Granjaguar-Solemne",
    baseSpecies: "Granjaguar",
    forme: "Solemne",
    types: ["Psychic", "Dark"],
    baseStats: { hp: 85, atk: 115, def: 55, spa: 100, spd: 75, spe: 140 },
    abilities: { 0: "Spirit of the Ruins" },
    weightkg: 47.9,
    requiredItem: "Golden Key",
    battleOnly: "Granjaguar"
  },
  ironsun: {
    num: 204,
    name: "Iron Sun",
    types: ["Rock", "Fire"],
    gender: "N",
    baseStats: { hp: 100, atk: 114, def: 110, spa: 70, spd: 80, spe: 96 },
    abilities: { 0: "Meteor Power" },
    weightkg: 308
  },
  crazymoon: {
    num: 205,
    name: "Crazy Moon",
    types: ["Rock", "Fairy"],
    gender: "N",
    baseStats: { hp: 99, atk: 71, def: 81, spa: 113, spd: 111, spe: 95 },
    abilities: { 0: "Primal Mind" },
    weightkg: 336
  },
  lronfist: {
    num: 206,
    name: "lron Fist",
    types: ["Fighting", "Steel"],
    gender: "N",
    baseStats: { hp: 90, atk: 116, def: 90, spa: 68, spd: 110, spe: 96 },
    abilities: { 0: "Charged" },
    weightkg: 160.2
  },
  frozenbeak: {
    num: 207,
    name: "Frozen Beak",
    types: ["Ice", "Water"],
    gender: "N",
    baseStats: { hp: 75, atk: 109, def: 131, spa: 65, spd: 91, spe: 99 },
    abilities: { 0: "Permafrost" },
    heightm: 2.4,
    weightkg: 178
  },
  purgapilla: {
    num: 208,
    name: "Purgapilla",
    types: ["Bug"],
    baseStats: { hp: 55, atk: 60, def: 45, spa: 10, spd: 25, spe: 20 },
    abilities: { 0: "Shield Dust", 1: "Cursed Body", H: "Earth Eater" },
    weightkg: 2,
    evos: ["pumpkoon"]
  },
  pumpkoon: {
    num: 209,
    name: "Pumpkoon",
    types: ["Bug"],
    baseStats: { hp: 60, atk: 40, def: 90, spa: 40, spd: 55, spe: 20 },
    abilities: { 0: "Shield Dust", 1: "Cursed Body", H: "Earth Eater" },
    weightkg: 30.3,
    prevo: "purgapilla",
    evos: ["lepisalma"]
  },
  lepisalma: {
    num: 210,
    name: "Lepisalma",
    types: ["Bug", "Ghost"],
    baseStats: { hp: 80, atk: 95, def: 60, spa: 120, spd: 160, spe: 85 },
    abilities: { 0: "Shield Dust", 1: "Effect Spore", H: "Levitate" },
    weightkg: 45,
    prevo: "pumpkoon",
    evoLevel: 50
  },
  skyradise: {
    num: 211,
    name: "Skyradise",
    types: ["Flying"],
    gender: "N",
    baseStats: { hp: 200, atk: 105, def: 90, spa: 145, spd: 90, spe: 50 },
    abilities: { 0: "Magic Guard", H: "Magic Bounce" },
    weightkg: 999.9
  },
  cupida: {
    num: 212,
    name: "Cupida",
    types: ["Fairy", "Ghost"],
    gender: "F",
    baseStats: { hp: 104, atk: 110, def: 70, spa: 110, spd: 130, spe: 76 },
    abilities: { 0: "Cute Charm", 1: "Serene Grace", H: "Archery" },
    weightkg: 0.5
  }
};
//# sourceMappingURL=pokedex.js.map
