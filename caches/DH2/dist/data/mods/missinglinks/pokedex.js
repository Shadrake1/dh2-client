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
  weepinbell: {
    inherit: true,
    evos: ["Victreebel", "Canonbell"]
  },
  canonbell: {
    num: 1001,
    name: "Canonbell",
    types: ["Grass", "Dark"],
    baseStats: { hp: 70, atk: 90, def: 65, spa: 125, spd: 70, spe: 70 },
    abilities: { 0: "Chlorophyll", H: "Mega Launcher" },
    weightkg: 21,
    prevo: "Weepinbell",
    evoType: "useItem",
    evoItem: "Moon Stone",
    eggGroups: ["Grass"]
  },
  butterfree: {
    inherit: true,
    otherFormes: ["Butterfree-Mega"],
    formeOrder: ["Butterfree", "Butterfree-Mega"]
  },
  butterfreemega: {
    num: 12,
    name: "Butterfree-Mega",
    baseSpecies: "Butterfree",
    forme: "Mega",
    types: ["Bug", "Psychic"],
    baseStats: { hp: 65, atk: 50, def: 70, spa: 110, spd: 130, spe: 70 },
    abilities: { 0: "Magic Guard" },
    heightm: 1.5,
    weightkg: 52,
    eggGroups: ["Bug"],
    requiredItem: "Butterfrite"
  },
  growlithe: {
    inherit: true,
    otherFormes: ["Growlithe-Alola"],
    formeOrder: ["Growlithe", "Growlithe-Alola"]
  },
  arcanine: {
    inherit: true,
    otherFormes: ["Arcanine-Alola"],
    formeOrder: ["Arcanine", "Arcanine-Alola"]
  },
  growlithealola: {
    num: 58,
    name: "Growlithe-Alola",
    baseSpecies: "Growlithe",
    forme: "Alola",
    types: ["Water"],
    baseStats: { hp: 55, atk: 45, def: 70, spa: 50, spd: 70, spe: 60 },
    abilities: { 0: "Intimidate", 1: "Water Absorb", H: "Water Veil" },
    weightkg: 19,
    evos: ["Arcanine-Alola"],
    eggGroups: ["Field"]
  },
  arcaninealola: {
    num: 59,
    name: "Arcanine-Alola",
    baseSpecies: "Arcanine",
    forme: "Alola",
    types: ["Water", "Dragon"],
    baseStats: { hp: 90, atk: 85, def: 105, spa: 85, spd: 95, spe: 95 },
    abilities: { 0: "Intimidate", 1: "Water Absorb", H: "Water Veil" },
    weightkg: 155,
    prevo: "Growlithe-Alola",
    evoType: "useItem",
    evoItem: "Water Stone",
    eggGroups: ["Field"]
  },
  milotic: {
    inherit: true,
    otherFormes: ["Milotic-Mega"],
    formeOrder: ["Milotic", "Milotic-Mega"]
  },
  miloticmega: {
    num: 350,
    name: "Milotic-Mega",
    baseSpecies: "Milotic",
    forme: "Mega",
    types: ["Water", "Dragon"],
    baseStats: { hp: 95, atk: 100, def: 99, spa: 120, spd: 155, spe: 71 },
    abilities: { 0: "Oceanic Veil" },
    heightm: 6.2,
    weightkg: 192,
    eggGroups: ["Water 1", "Dragon"],
    requiredItem: "Milotite"
  },
  ekans: {
    inherit: true,
    otherFormes: ["Ekans-Alola"],
    formeOrder: ["Ekans", "Ekans-Alola"]
  },
  arbok: {
    inherit: true,
    otherFormes: ["Arbok-Alola"],
    formeOrder: ["Arbok", "Arbok-Alola"]
  },
  ekansalola: {
    num: 23,
    name: "Ekans-Alola",
    baseSpecies: "Ekans",
    forme: "Alola",
    types: ["Electric"],
    baseStats: { hp: 35, atk: 65, def: 44, spa: 40, spd: 44, spe: 60 },
    abilities: { 0: "Static", 1: "Shed Skin", H: "Surge Surfer" },
    weightkg: 6,
    evos: ["Arbok-Alola"],
    eggGroups: ["Field", "Dragon"]
  },
  arbokalola: {
    num: 24,
    name: "Arbok-Alola",
    baseSpecies: "Arbok",
    forme: "Alola",
    types: ["Electric", "Dragon"],
    baseStats: { hp: 60, atk: 105, def: 69, spa: 65, spd: 59, spe: 90 },
    abilities: { 0: "Static", 1: "Shed Skin", H: "Surge Surfer" },
    weightkg: 55,
    prevo: "Ekans-Alola",
    evoLevel: 22,
    eggGroups: ["Field", "Dragon"]
  },
  magneton: {
    num: 82,
    name: "Magneton",
    types: ["Electric", "Steel"],
    gender: "N",
    baseStats: { hp: 50, atk: 60, def: 95, spa: 120, spd: 70, spe: 80 },
    abilities: { 0: "Magnet Pull", 1: "Sturdy", H: "Analytic" },
    heightm: 1,
    weightkg: 60,
    color: "Gray",
    prevo: "Magnemite",
    evoLevel: 30,
    evos: ["Magnezone"],
    eggGroups: ["Mineral"]
  },
  electrode: {
    inherit: true,
    evos: ["Gluttohm"]
  },
  gluttohm: {
    num: 1002,
    name: "Gluttohm",
    types: ["Electric", "Normal"],
    baseStats: { hp: 100, atk: 50, def: 80, spa: 90, spd: 85, spe: 130 },
    abilities: { 0: "Soundproof", 1: "Static", H: "Aftermath" },
    weightkg: 235.2,
    prevo: "Electrode",
    evoType: "useItem",
    evoItem: "Thunder Stone",
    eggGroups: ["Mineral"]
  },
  froslass: {
    inherit: true,
    otherFormes: ["Froslass-Mega"],
    formeOrder: ["Froslass", "Froslass-Mega"]
  },
  froslassmega: {
    num: 478,
    name: "Froslass-Mega",
    baseSpecies: "Froslass",
    forme: "Mega",
    types: ["Ice", "Ghost"],
    baseStats: { hp: 70, atk: 80, def: 70, spa: 140, spd: 90, spe: 130 },
    abilities: { 0: "Snow Warning" },
    heightm: 1.3,
    weightkg: 30,
    eggGroups: ["Fairy", "Mineral"],
    requiredItem: "Froslassite"
  },
  poochyena: {
    inherit: true,
    otherFormes: ["Poochyena-Galar"],
    formeOrder: ["Poochyena", "Poochyena-Galar"]
  },
  mightyena: {
    inherit: true,
    otherFormes: ["Mightyena-Galar"],
    formeOrder: ["Mightyena", "Mightyena-Galar"]
  },
  poochyenagalar: {
    num: 261,
    name: "Poochyena-Galar",
    baseSpecies: "Poochyena",
    forme: "Galar",
    types: ["Dark", "Rock"],
    baseStats: { hp: 35, atk: 55, def: 35, spa: 30, spd: 30, spe: 35 },
    abilities: { 0: "Run Away", 1: "Quick Feet", H: "Rattled" },
    weightkg: 16.8,
    evos: ["Mightyena-Galar"],
    eggGroups: ["Field"]
  },
  mightyenagalar: {
    num: 262,
    name: "Mightyena-Galar",
    baseSpecies: "Mightyena",
    forme: "Galar",
    types: ["Dark", "Rock"],
    baseStats: { hp: 70, atk: 90, def: 70, spa: 60, spd: 60, spe: 70 },
    abilities: { 0: "Intimidate", 1: "Quick Feet", H: "Moxie" },
    weightkg: 42.5,
    prevo: "Poochyena-Galar",
    evoLevel: 18,
    evos: ["Paleolyena"],
    eggGroups: ["Field"]
  },
  paleolyena: {
    num: 1003,
    name: "Paleolyena",
    types: ["Dark", "Rock"],
    baseStats: { hp: 100, atk: 120, def: 90, spa: 60, spd: 70, spe: 80 },
    abilities: { 0: "Pressure", 1: "Analytic", H: "Stakeout" },
    weightkg: 76,
    prevo: "Mightyena-Galar",
    evoLevel: 35,
    evoCondition: "at night",
    eggGroups: ["Field"]
  },
  misdreavus: {
    inherit: true,
    abilities: { 0: "Levitate", 1: "Magician", H: "Prankster" }
  },
  mismagius: {
    inherit: true,
    abilities: { 0: "Levitate", 1: "Magician", H: "Magic Guard" }
  },
  skarmory: {
    inherit: true,
    baseStats: { hp: 85, atk: 80, def: 140, spa: 40, spd: 70, spe: 70 },
    prevo: "Alicuto",
    evoType: "levelExtra",
    evoCondition: "with a Steel-type in party"
  },
  alicuto: {
    num: 1005,
    name: "Alicuto",
    types: ["Steel", "Flying"],
    baseStats: { hp: 35, atk: 65, def: 65, spa: 30, spd: 50, spe: 100 },
    abilities: { 0: "Keen Eye", 1: "Sturdy", H: "Weak Armor" },
    heightm: 1,
    weightkg: 10.5,
    color: "Grasy",
    evos: ["Skarmory"],
    eggGroups: ["Undiscovered"],
    canHatch: true
  },
  jynx: {
    inherit: true,
    evos: ["Frostonna"]
  },
  frostonna: {
    num: 1004,
    name: "Frostonna",
    types: ["Ice", "Psychic"],
    baseStats: { hp: 75, atk: 60, def: 67, spa: 138, spd: 115, spe: 85 },
    abilities: { 0: "Oblivious", 1: "Dazzling", H: "Dry Skin" },
    weightkg: 126.6,
    prevo: "Jynx",
    evoType: "trade",
    evoItem: "Frosterizer",
    eggGroups: ["Human-Like"]
  },
  elekid: {
    inherit: true,
    abilities: { 0: "Static", 1: "Lightning Rod", H: "Vital Spirit" }
  },
  electabuzz: {
    inherit: true,
    abilities: { 0: "Static", 1: "Lightning Rod", H: "Vital Spirit" }
  },
  electivire: {
    inherit: true,
    abilities: { 0: "Motor Drive", 1: "Defiant", H: "Vital Spirit" }
  },
  magby: {
    inherit: true,
    abilities: { 0: "Flame Body", 1: "Immunity", H: "Vital Spirit" }
  },
  magmar: {
    inherit: true,
    abilities: { 0: "Flame Body", 1: "Immunity", H: "Vital Spirit" }
  },
  magmortar: {
    inherit: true,
    abilities: { 0: "Flame Body", 1: "Poison Heal", H: "Vital Spirit" }
  },
  slowking: {
    inherit: true,
    otherFormes: ["Slowking-Mega", "Slowking-Galar"],
    formeOrder: ["Slowbro", "Slowking-Mega", "Slowking-Galar"]
  },
  slowkingmega: {
    num: 199,
    name: "Slowking-Mega",
    baseSpecies: "Slowking",
    forme: "Mega",
    types: ["Water", "Psychic"],
    baseStats: { hp: 95, atk: 75, def: 100, spa: 150, spd: 140, spe: 30 },
    abilities: { 0: "Analytic" },
    heightm: 2.1,
    weightkg: 79.5,
    eggGroups: ["Monster", "Water 1"],
    requiredItem: "Slowkinite"
  },
  /*
  	mankey: {
  		inherit: true,
  		otherFormes: ["Mankey-Alola"],
  		formeOrder: ["Mankey", "Mankey-Alola"],
  	},
  */
  primeape: {
    inherit: true,
    otherFormes: ["Primeape-Alola"],
    formeOrder: ["Primeape", "Primeape-Alola"]
  },
  mankey: {
    inherit: true,
    otherFormes: ["Mankey-Alola", "Mankey-Galar"],
    formeOrder: ["Mankey", "Mankey-Alola", "Mankey-Galar"]
  },
  mankeyalola: {
    num: 56,
    name: "Mankey-Alola",
    baseSpecies: "Mankey",
    forme: "Alola",
    types: ["Psychic"],
    baseStats: { hp: 40, atk: 30, def: 35, spa: 85, spd: 45, spe: 70 },
    abilities: { 0: "Vital Spirit", 1: "Analytic", H: "Competitive" },
    weightkg: 26,
    evos: ["Primeape-Alola"],
    eggGroups: ["Field"]
  },
  primeapealola: {
    num: 57,
    name: "Primeape-Alola",
    baseSpecies: "Primeape",
    forme: "Alola",
    types: ["Psychic"],
    baseStats: { hp: 65, atk: 55, def: 60, spa: 110, spd: 70, spe: 95 },
    abilities: { 0: "Vital Spirit", 1: "Analytic", H: "Competitive" },
    weightkg: 30,
    prevo: "Mankey-Alola",
    evoType: "levelFriendship",
    eggGroups: ["Field"]
  },
  dustox: {
    inherit: true,
    baseStats: { hp: 70, atk: 50, def: 70, spa: 50, spd: 90, spe: 65 }
  },
  mankeygalar: {
    num: 56,
    name: "Mankey-Galar",
    baseSpecies: "Mankey",
    forme: "Galar",
    types: ["Fairy"],
    baseStats: { hp: 50, atk: 60, def: 45, spa: 35, spd: 70, spe: 45 },
    abilities: { 0: "Vital Spirit", 1: "Prankster", H: "Defiant" },
    weightkg: 56,
    evos: ["Primotunn"],
    eggGroups: ["Field"]
  },
  primotunn: {
    num: 1006,
    name: "Primotunn",
    types: ["Fairy"],
    baseStats: { hp: 80, atk: 90, def: 65, spa: 50, spd: 100, spe: 70 },
    abilities: { 0: "Wonder Skin", 1: "Prankster", H: "Bask" },
    heightm: 0.8,
    weightkg: 64,
    color: "Pink",
    prevo: "Mankey-Galar",
    evoLevel: 28,
    eggGroups: ["Field"]
  },
  machamp: {
    inherit: true,
    otherFormes: ["Machamp-Mega"],
    formeOrder: ["Machamp", "Machamp-Mega"]
  },
  machampmega: {
    num: 68,
    name: "Machamp-Mega",
    baseSpecies: "Machamp",
    forme: "Mega",
    types: ["Fighting"],
    baseStats: { hp: 90, atk: 160, def: 115, spa: 65, spd: 130, spe: 45 },
    abilities: { 0: "Technician" },
    heightm: 2,
    weightkg: 250,
    eggGroups: ["Human-Like"],
    requiredItem: "Machampite"
  },
  politoed: {
    inherit: true,
    baseStats: { hp: 100, atk: 75, def: 75, spa: 90, spd: 100, spe: 70 }
  },
  chesnaught: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Bulletproof", S: "Battle Bond" },
    otherFormes: ["Chesnaught-Steel"],
    formeOrder: ["Chesnaught", "Chesnaught", "Chesnaught-Steel"]
  },
  delphox: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Magician", S: "Battle Bond" },
    otherFormes: ["Delphox-Aria"],
    formeOrder: ["Delphox", "Delphox", "Delphox-Aria"]
  },
  chesnaughtsteel: {
    num: 652,
    name: "Chesnaught-Steel",
    baseSpecies: "Chesnaught",
    forme: "Steel",
    types: ["Grass", "Fighting"],
    gender: "M",
    baseStats: { hp: 88, atk: 137, def: 152, spa: 74, spd: 125, spe: 64 },
    abilities: { 0: "Battle Bond" },
    heightm: 1.6,
    weightkg: 210,
    color: "Green",
    eggGroups: ["Undiscovered"],
    requiredAbility: "Battle Bond",
    battleOnly: "Chesnaught"
  },
  delphoxaria: {
    num: 655,
    name: "Delphox-Aria",
    baseSpecies: "Delphox",
    forme: "Aria",
    types: ["Fire", "Psychic"],
    gender: "F",
    baseStats: { hp: 75, atk: 74, def: 84, spa: 143, spd: 124, spe: 144 },
    abilities: { 0: "Battle Bond" },
    heightm: 1.5,
    weightkg: 39,
    color: "Red",
    eggGroups: ["Undiscovered"],
    requiredAbility: "Battle Bond",
    battleOnly: "Delphox"
  },
  taillow: {
    inherit: true,
    abilities: { 0: "Guts", 1: "Big Pecks", H: "Scrappy" }
  },
  swellow: {
    inherit: true,
    abilities: { 0: "Guts", 1: "Aerilate", H: "Scrappy" }
  },
  venusaur: {
    inherit: true,
    otherFormes: ["Venusaur-Mega", "Venusaur-Mega-Y"],
    formeOrder: ["Venusaur", "Venusaur-Mega", "Venusaur-Mega-Y"]
  },
  venusaurmegay: {
    num: 3,
    name: "Venusaur-Mega-Y",
    baseSpecies: "Venusaur",
    forme: "Mega",
    types: ["Grass", "Ghost"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 80, atk: 77, def: 84, spa: 144, spd: 130, spe: 110 },
    abilities: { 0: "Bulletproof" },
    heightm: 2.4,
    weightkg: 87,
    color: "Green",
    eggGroups: ["Monster", "Grass"],
    requiredItem: "Venusaurite Y"
  },
  blastoise: {
    inherit: true,
    otherFormes: ["Blastoise-Mega", "Blastoise-Mega-X"],
    formeOrder: ["Blastoise", "Blastoise-Mega", "Blastoise-Mega-X"]
  },
  blastoisemegax: {
    num: 9,
    name: "Blastoise-Mega-X",
    baseSpecies: "Blastoise",
    forme: "Mega",
    types: ["Water", "Ice"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 79, atk: 130, def: 130, spa: 93, spd: 120, spe: 78 },
    abilities: { 0: "Long Reach" },
    heightm: 1.6,
    weightkg: 125.5,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredItem: "Blastoisinite X"
  },
  pelipper: {
    inherit: true,
    baseStats: { hp: 60, atk: 50, def: 125, spa: 85, spd: 70, spe: 65 }
  },
  roggenrola: {
    inherit: true,
    otherFormes: ["Roggenrola-Alola"],
    formeOrder: ["Roggenrola", "Roggenrola-Alola"]
  },
  boldore: {
    inherit: true,
    otherFormes: ["Boldore-Alola"],
    formeOrder: ["Boldore", "Boldore-Alola"]
  },
  gigalith: {
    inherit: true,
    otherFormes: ["Gigalith-Alola"],
    formeOrder: ["Gigalith", "Gigalith-Alola"]
  },
  dragonite: {
    inherit: true,
    otherFormes: ["Dragonite-Mega"],
    formeOrder: ["Dragonite", "Dragonite-Mega"]
  },
  ledian: {
    inherit: true,
    baseStats: { hp: 55, atk: 35, def: 50, spa: 55, spd: 110, spe: 95 }
  },
  roggenrolaalola: {
    num: 524,
    name: "Roggenrola-Alola",
    baseSpecies: "Roggenrola",
    forme: "Alola",
    types: ["Rock", "Poison"],
    baseStats: { hp: 55, atk: 70, def: 80, spa: 25, spd: 35, spe: 15 },
    abilities: { 0: "Sturdy", 1: "Levitate", H: "Water Absorb" },
    weightkg: 18,
    evos: ["Boldore-Alola"],
    eggGroups: ["Mineral"]
  },
  boldorealola: {
    num: 525,
    name: "Boldore-Alola",
    baseSpecies: "Boldore",
    forme: "Alola",
    types: ["Rock", "Poison"],
    baseStats: { hp: 70, atk: 100, def: 100, spa: 50, spd: 50, spe: 20 },
    abilities: { 0: "Sturdy", 1: "Levitate", H: "Water Absorb" },
    weightkg: 102,
    prevo: "Roggenrola-Alola",
    evoLevel: 25,
    evos: ["Gigalith-Alola"],
    eggGroups: ["Mineral"]
  },
  gigalithalola: {
    num: 526,
    name: "Gigalith-Alola",
    baseSpecies: "Gigalith",
    forme: "Alola",
    types: ["Rock", "Poison"],
    baseStats: { hp: 85, atk: 130, def: 125, spa: 60, spd: 90, spe: 25 },
    abilities: { 0: "Sturdy", 1: "Levitate", H: "Water Absorb" },
    weightkg: 260,
    prevo: "Boldore-Alola",
    evoType: "trade",
    eggGroups: ["Mineral"]
  },
  dragonitemega: {
    num: 149,
    name: "Dragonite-Mega",
    baseSpecies: "Dragonite",
    forme: "Mega",
    types: ["Dragon", "Fairy"],
    baseStats: { hp: 91, atk: 134, def: 115, spa: 144, spd: 115, spe: 101 },
    abilities: { 0: "Berserk" },
    heightm: 5.8,
    weightkg: 738.5,
    color: "Orange",
    eggGroups: ["Water 1", "Dragon"],
    requiredItem: "Dragonitite"
  },
  trubbish: {
    inherit: true,
    otherFormes: ["Trubbish-Alola"],
    formeOrder: ["Trubbish", "Trubbish-Alola"]
  },
  garbodor: {
    inherit: true,
    otherFormes: ["Garbodor-Alola"],
    formeOrder: ["Garbodor", "Garbodor-Alola"]
  },
  trubbishalola: {
    num: 568,
    name: "Trubbish-Alola",
    baseSpecies: "Trubbish",
    forme: "Alola",
    types: ["Poison", "Psychic"],
    baseStats: { hp: 50, atk: 50, def: 72, spa: 30, spd: 72, spe: 55 },
    abilities: { 0: "Alien Aura", 1: "Levitate", H: "Ice Body" },
    weightkg: 51,
    evos: ["Garbodor-Alola"],
    eggGroups: ["Mineral"]
  },
  garbodoralola: {
    num: 569,
    name: "Garbodor-Alola",
    baseSpecies: "Garbodor",
    forme: "Alola",
    types: ["Poison", "Psychic"],
    baseStats: { hp: 80, atk: 95, def: 92, spa: 50, spd: 92, spe: 65 },
    abilities: { 0: "Alien Aura", 1: "Levitate", H: "Ice Body" },
    weightkg: 602.2,
    prevo: "Trubbish-Alola",
    evoLevel: 36,
    eggGroups: ["Mineral"]
  },
  zoroark: {
    inherit: true,
    otherFormes: ["Zoroark-Mega"],
    formeOrder: ["Zoroark", "Zoroark-Mega"]
  },
  zoroarkmega: {
    num: 571,
    name: "Zoroark-Mega",
    baseSpecies: "Zoroark",
    forme: "Mega",
    types: ["Dark", "Ghost"],
    baseStats: { hp: 60, atk: 115, def: 70, spa: 140, spd: 100, spe: 125 },
    abilities: { 0: "Mimicry" },
    heightm: 1.8,
    weightkg: 85,
    color: "Black",
    eggGroups: ["Field"],
    requiredItem: "Zoroarkite"
  },
  sudowoodo: {
    inherit: true,
    otherFormes: ["Sudowoodo-Galar"],
    formeOrder: ["Sudowoodo", "Sudowoodo-Alola"]
  },
  sudowoodogalar: {
    num: 185,
    name: "Sudowoodo-Galar",
    baseSpecies: "Sudowoodo",
    forme: "Galar",
    types: ["Rock", "Steel"],
    baseStats: { hp: 60, atk: 90, def: 125, spa: 40, spd: 75, spe: 20 },
    abilities: { 0: "Sturdy", 1: "Rock Head", H: "Lightning Rod" },
    weightkg: 45,
    prevo: "Bonsly",
    evoType: "levelMove",
    evoMove: "Mimic",
    evos: ["Fauxrestree"],
    eggGroups: ["Mineral"],
    canHatch: true
  },
  bonsly: {
    inherit: true,
    evos: ["Sudowoodo", "Sudowoodo-Galar"]
  },
  fauxrestree: {
    num: 1007,
    name: "Fauxrestree",
    types: ["Psychic", "Steel"],
    baseStats: { hp: 80, atk: 110, def: 135, spa: 80, spd: 85, spe: 30 },
    abilities: { 0: "Sturdy", 1: "Analytic", H: "Lightning Rod" },
    heightm: 5,
    weightkg: 70,
    color: "Brown",
    prevo: "Sudowoodo-Galar",
    evoLevel: 42,
    eggGroups: ["Mineral"]
  },
  phanpy: {
    inherit: true,
    abilities: { 0: "Pickup", 1: "Dry Skin", H: "Sand Veil" }
  },
  donphan: {
    inherit: true,
    abilities: { 0: "Sturdy", 1: "Speed Boost", H: "Sand Veil" }
  },
  carvanha: {
    inherit: true,
    abilities: { 0: "Rough Skin", 1: "Blood Scent", H: "Speed Boost" }
  },
  sharpedo: {
    inherit: true,
    abilities: { 0: "Rough Skin", 1: "Blood Scent", H: "Speed Boost" }
  },
  magikarp: {
    inherit: true,
    abilities: { 0: "Swift Swim", 1: "Damp", H: "Rattled" }
  },
  gyarados: {
    inherit: true,
    abilities: { 0: "Intimidate", 1: "Defiant", H: "Moxie" }
  }
};
//# sourceMappingURL=pokedex.js.map
