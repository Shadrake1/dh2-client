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
  // alt ex
  urshifu: {
    num: 892,
    name: "Urshifu",
    types: ["Dark", "Ground"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 85, atk: 115, def: 130, spa: 63, spd: 90, spe: 72 },
    abilities: { 0: "Sand Force", 1: "Unseen Fist", H: "Rough Skin" },
    heightm: 1.9,
    weightkg: 105,
    otherFormes: null,
    formeOrder: null,
    prevo: null
  },
  calyrexmidnight: {
    num: 898,
    name: "Calyrex-Midnight",
    types: ["Dark", "Fairy"],
    gender: "N",
    baseStats: { hp: 80, atk: 80, def: 85, spa: 95, spd: 95, spe: 105 },
    abilities: { 0: "Grim Neigh" },
    heightm: 2.4,
    weightkg: 53.6
  },
  salazzle: {
    num: 758,
    name: "Salazzle",
    types: ["Fire", "Dragon"],
    gender: "F",
    baseStats: { hp: 106, atk: 110, def: 65, spa: 75, spd: 70, spe: 94 },
    abilities: { 0: "Multiscale" },
    heightm: 1.2,
    weightkg: 22.2,
    otherFormes: null,
    formeOrder: null
  },
  mrmimeprance: {
    num: 122,
    name: "Mr. Mime-Prance",
    types: ["Ice", "Fairy"],
    baseStats: { hp: 75, atk: 95, def: 80, spa: 85, spd: 75, spe: 110 },
    abilities: { 0: "Technician", 1: "Dancer", H: "Screen Cleaner" },
    heightm: 1.4,
    weightkg: 56.8
  },
  stunfisktrap: {
    num: 618,
    name: "Stunfisk-Trap",
    types: ["Ground", "Steel"],
    baseStats: { hp: 109, atk: 108, def: 97, spa: 66, spd: 85, spe: 44 },
    abilities: { 0: "Strong Jaw", 1: "Poison Point", H: "Gluttony" },
    heightm: 0.7,
    weightkg: 20.5
  },
  necrozmalionheart: {
    num: 800,
    name: "Necrozma-Lionheart",
    types: ["Steel", "Fire"],
    gender: "N",
    baseStats: { hp: 97, atk: 109, def: 79, spa: 79, spd: 103, spe: 67 },
    abilities: { 0: "Prism Armor" },
    heightm: 3.8,
    weightkg: 460
  },
  necrozmabatwing: {
    num: 800,
    name: "Necrozma-Batwing",
    types: ["Fairy", "Ghost"],
    gender: "N",
    baseStats: { hp: 97, atk: 67, def: 83, spa: 113, spd: 73, spe: 101 },
    abilities: { 0: "Prism Armor" },
    heightm: 4.2,
    weightkg: 350
  },
  meowstictwotales: {
    num: 678,
    name: "Meowstic-TwoTales",
    types: ["Psychic", "Fighting"],
    gender: "F",
    baseStats: { hp: 74, atk: 53, def: 86, spa: 113, spd: 91, spe: 104 },
    abilities: { 0: "Keen Eye", 1: "Infiltrator", H: "Competitive" },
    heightm: 0.6,
    weightkg: 8.5,
    prevo: "Espurr"
  },
  zapdos: {
    num: 145,
    name: "Zapdos",
    types: ["Water", "Fighting"],
    baseStats: { hp: 80, atk: 95, def: 120, spa: 90, spd: 75, spe: 70 },
    abilities: { 0: "Scrappy", 1: "Static", H: "Shockproof" },
    heightm: 1.6,
    weightkg: 52.6
  },
  moltres: {
    num: 146,
    name: "Moltres",
    types: ["Flying"],
    baseStats: { hp: 75, atk: 90, def: 80, spa: 95, spd: 70, spe: 130 },
    abilities: { 0: "Guts", H: "Flash Fire" },
    heightm: 2,
    weightkg: 60
  },
  basculinhotheaded: {
    num: 550,
    name: "Basculin-Hot-Headed",
    types: ["Water", "Fire"],
    baseStats: { hp: 70, atk: 117, def: 85, spa: 65, spd: 70, spe: 108 },
    abilities: { 0: "Reckless", 1: "Flash Fire", H: "Mold Breaker" },
    heightm: 1,
    weightkg: 18
  },
  basculinskyship: {
    num: 550,
    name: "Basculin-Skyship",
    types: ["Flying", "Steel"],
    baseStats: { hp: 70, atk: 92, def: 65, spa: 80, spd: 55, spe: 118 },
    abilities: { 0: "Gale Wings", 1: "Light Metal", H: "Sky Breach" },
    heightm: 1,
    weightkg: 18
  },
  basculegion: {
    num: 902,
    name: "Basculegion",
    types: ["Dark", "Ghost"],
    gender: "M",
    baseStats: { hp: 120, atk: 115, def: 60, spa: 85, spd: 90, spe: 60 },
    abilities: { 0: "Mold Breaker", 1: "Perish Body", H: "Rattled" },
    heightm: 3,
    weightkg: 110
  },
  basculagoon: {
    num: 902,
    name: "Basculagoon",
    types: ["Water", "Dragon"],
    gender: "F",
    baseStats: { hp: 120, atk: 95, def: 90, spa: 100, spd: 80, spe: 45 },
    abilities: { 0: "Adaptability", 1: "Marvel Scale", H: "Water Compaction" },
    heightm: 3,
    weightkg: 110
  },
  mausholdextended: {
    num: 925,
    name: "Maushold-Extended",
    types: ["Normal"],
    baseStats: { hp: 85, atk: 75, def: 85, spa: 80, spd: 85, spe: 110 },
    abilities: { 0: "Technician", 1: "Cute Charm", H: "Tangled Feet" },
    heightm: 0.3,
    weightkg: 2.3
  },
  dudunsparce: {
    num: 982,
    name: "Dudunsparce",
    types: ["Poison", "Psychic"],
    baseStats: { hp: 95, atk: 75, def: 60, spa: 110, spd: 120, spe: 95 },
    abilities: { 0: "Wonder Skin", 1: "Toxic Debris", H: "Serene Grace" },
    heightm: 3.6,
    weightkg: 39.2
  },
  // blindsided
  ferroluna: {
    num: 936,
    species: "Ferroluna",
    types: ["Fairy", "Dark"],
    baseStats: { hp: 90, atk: 135, def: 90, spa: 89, spd: 80, spe: 117 },
    abilities: { 0: "Protosynthesis", H: "Quark Drive" },
    height: 100,
    weightkg: 100
  },
  croakast: {
    num: 1014,
    name: "Croakast",
    types: ["Poison"],
    baseStats: { hp: 99, atk: 110, def: 75, spa: 88, spd: 80, spe: 77 },
    abilities: { 0: "Levitate" },
    weightkg: 5
  },
  // boe
  aureatefin: {
    num: -7,
    name: "Aureate Fin",
    types: ["Fighting", "Water"],
    gender: "N",
    baseStats: { hp: 61, atk: 111, def: 141, spa: 63, spd: 53, spe: 141 },
    abilities: { 0: "Cleansing Fire" },
    heightm: 0.9,
    weightkg: 10,
    color: "Red",
    eggGroups: ["Water 2", "Dragon"]
  },
  tripoddrill: {
    num: -9,
    name: "Tripod Drill",
    types: ["Normal", "Ground"],
    gender: "N",
    baseStats: { hp: 65, atk: 107, def: 95, spa: 61, spd: 109, spe: 133 },
    abilities: { 0: "Cleansing Fire" },
    heightm: 1.8,
    weightkg: 85.2,
    color: "Brown",
    eggGroups: ["Flying"]
  },
  // csm2
  virizion: {
    inherit: true,
    name: "Virizion",
    types: ["Steel", "Grass"],
    baseStats: { hp: 61, atk: 90, def: 86, spa: 70, spd: 99, spe: 88 },
    abilities: { 0: "Justified", 1: "Sap Sipper", H: "Steely Spirit" }
  },
  talonflame: {
    inherit: true,
    name: "Talonflame",
    types: ["Fire", "Flying"],
    baseStats: { hp: 126, atk: 81, def: 59, spa: 76, spd: 71, spe: 73 },
    abilities: { 0: "Flame Body", H: "Gale Wings" }
  },
  // ff
  scorpixie: {
    num: -1,
    name: "Scorpixie",
    types: ["Bug", "Fairy"],
    baseStats: { hp: 67, atk: 83, def: 146, spa: 104, spd: 77, spe: 81 },
    abilities: { 0: "Tablets of Ruin", H: "Swarm" },
    weightkg: 65
  },
  // fesv
  rotoghold: {
    // fusion: ['Gholdengo', 'Rotom'],
    num: 2,
    name: "Rotoghold",
    gender: "N",
    types: ["Ghost", "Steel"],
    baseStats: { hp: 70, atk: 55, def: 87, spa: 115, spd: 85, spe: 93 },
    abilities: { 0: "Holy Grail" },
    weightkg: 15.2
  },
  ironmimic: {
    // fusion: ['Iron Thorns', 'Mimikyu'],
    num: 24,
    name: "Iron Mimic",
    types: ["Rock", "Fairy"],
    baseStats: { hp: 78, atk: 114, def: 96, spa: 60, spd: 102, spe: 90 },
    abilities: { 0: "Faulty Photon" },
    weightkg: 151.9,
    otherFormes: ["Iron Mimic-Busted"],
    formeOrder: ["Iron Mimic", "Iron Mimic-Busted"],
    tags: ["Paradox"]
  },
  ironmimicbusted: {
    // fusion: ['Iron Thorns', 'Mimikyu'],
    num: 24,
    name: "Iron Mimic-Busted",
    baseSpecies: "Iron Mimic",
    forme: "Busted",
    types: ["Rock", "Fairy"],
    baseStats: { hp: 78, atk: 114, def: 96, spa: 60, spd: 102, spe: 90 },
    abilities: { 0: "Faulty Photon" },
    weightkg: 151.9,
    requiredAbility: "Faulty Photon",
    battleOnly: "Iron Mimic",
    tags: ["Paradox"]
  },
  tinkovish: {
    // fusion: ['Tinkaton', 'Arctovish'],
    num: 41,
    name: "Tinkovish",
    types: ["Water", "Steel"],
    baseStats: { hp: 90, atk: 85, def: 90, spa: 80, spd: 100, spe: 75 },
    abilities: { 0: "Slushie" },
    weightkg: 143.9
  },
  zoinkazenta: {
    // fusion: ['Oinkologne', 'Zamazenta'],
    num: 46,
    name: "Zoinkazenta",
    types: ["Fighting", "Normal"],
    baseStats: { hp: 101, atk: 120, def: 95, spa: 69, spd: 97, spe: 108 },
    abilities: { 0: "Pillage" },
    weightkg: 165
  },
  // gen x
  gophragar: {
    num: 2001,
    name: "Gophragar",
    types: ["Normal", "Grass"],
    baseStats: { hp: 100, atk: 50, def: 80, spa: 90, spd: 65, spe: 55 },
    abilities: { 0: "Cheek Pouch", 1: "Ripen", H: "Harvest" },
    height: 1.4,
    weightkg: 89
  },
  gopharm: {
    num: 2e3,
    name: "Gopharm",
    types: ["Normal", "Grass"],
    baseStats: { hp: 60, atk: 35, def: 50, spa: 50, spd: 40, spe: 35 },
    abilities: { 0: "Cheek Pouch", 1: "Run Away", H: "Harvest" },
    height: 0.77,
    weightkg: 22,
    evos: ["Gophragar"]
  },
  // megas revisited
  audinomega: {
    inherit: true,
    types: ["Normal", "Electric"],
    baseStats: { hp: 103, atk: 60, def: 130, spa: 100, spd: 97, spe: 55 },
    abilities: { 0: "Regenerator" }
  },
  houndoommega: {
    inherit: true,
    types: ["Dark", "Fire"],
    baseStats: { hp: 75, atk: 90, def: 90, spa: 140, spd: 90, spe: 115 },
    abilities: { 0: "Merciless" }
  },
  pinsirmega: {
    inherit: true,
    types: ["Bug", "Ice"],
    baseStats: { hp: 65, atk: 150, def: 110, spa: 80, spd: 85, spe: 110 },
    abilities: { 0: "Mountaineer" }
  },
  sceptilemega: {
    inherit: true,
    types: ["Grass", "Dragon"],
    baseStats: { hp: 75, atk: 95, def: 79, spa: 145, spd: 99, spe: 142 },
    abilities: { 0: "Armor Tail" }
  },
  swampertmega: {
    inherit: true,
    types: ["Water", "Poison"],
    baseStats: { hp: 100, atk: 145, def: 120, spa: 85, spd: 115, spe: 70 },
    abilities: { 0: "Poison Touch" }
  },
  gallademega: {
    inherit: true,
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 68, atk: 150, def: 100, spa: 65, spd: 127, spe: 108 },
    abilities: { 0: "Sharpness" }
  },
  aggronmega: {
    inherit: true,
    types: ["Steel"],
    baseStats: { hp: 70, atk: 145, def: 185, spa: 85, spd: 85, spe: 60 },
    abilities: { 0: "Dauntless Shield" }
  },
  blazikenmega: {
    inherit: true,
    baseStats: { hp: 80, atk: 150, def: 80, spa: 120, spd: 90, spe: 110 },
    abilities: { 0: "Regenerator" }
  },
  mewtwomegay: {
    inherit: true,
    types: ["Psychic", "Water"],
    baseStats: { hp: 106, atk: 120, def: 110, spa: 194, spd: 130, spe: 120 },
    abilities: { 0: "Levitate" }
  },
  // metamons
  camerupt: {
    num: 323,
    name: "Camerupt",
    types: ["Fire", "Ground"],
    baseStats: { hp: 80, atk: 100, def: 100, spa: 105, spd: 95, spe: 40 },
    abilities: { 0: "Earth Eater", 1: "Solid Rock", H: "Solar Power" },
    heightm: 1.9,
    weightkg: 220,
    color: "Red",
    prevo: "Numel",
    evoLevel: 33,
    eggGroups: ["Field"]
  },
  mesprit: {
    num: 481,
    name: "Mesprit",
    types: ["Psychic", "Fighting"],
    gender: "N",
    baseStats: { hp: 80, atk: 120, def: 105, spa: 90, spd: 95, spe: 90 },
    abilities: { 0: "Levitate" },
    heightm: 0.3,
    weightkg: 0.3,
    color: "Pink",
    tags: ["Sub-Legendary"],
    eggGroups: ["Undiscovered"]
  },
  // poketypos
  arcamine: {
    num: 9,
    name: "Arcamine",
    types: ["Ground", "Rock"],
    baseStats: { hp: 90, atk: 125, def: 80, spa: 75, spd: 80, spe: 105 },
    abilities: { 0: "Guard Dog", 1: "Solid Rock", H: "Sand Rush" },
    weightkg: 159
  },
  eelix: {
    num: 11,
    name: "Eelix",
    types: ["Water", "Electric"],
    baseStats: { hp: 75, atk: 75, def: 105, spa: 75, spd: 150, spe: 30 },
    abilities: { 0: "Water Veil", 1: "Volt Absorb", H: "Static" },
    weightkg: 179
  },
  crowhat: {
    num: 13,
    name: "Crowhat",
    types: ["Grass", "Dark"],
    baseStats: { hp: 95, atk: 105, def: 80, spa: 60, spd: 80, spe: 115 },
    abilities: { 0: "Wind Rider", 1: "Unnerve", H: "Intimidate" },
    weightkg: 28
  },
  kazuumarill: {
    num: 19,
    name: "Kazuumarill",
    types: ["Fire", "Steel"],
    baseStats: { hp: 100, atk: 20, def: 70, spa: 100, spd: 80, spe: 50 },
    abilities: { 0: "Punk Rock", 1: "Soundproof", H: "Klutz" },
    weightkg: 28.5
  },
  toedscruel: {
    num: 26,
    name: "Toedscruel",
    types: ["Ground", "Grass"],
    baseStats: { hp: 80, atk: 70, def: 75, spa: 90, spd: 120, spe: 80 },
    abilities: { 0: "Mycelium Might", H: "Dancer" },
    weightkg: 58
  },
  wugtrio: {
    num: 27,
    name: "Wugtrio",
    types: ["Water", "Poison"],
    baseStats: { hp: 40, atk: 110, def: 50, spa: 20, spd: 82, spe: 123 },
    abilities: { 0: "Technician", 1: "Rattled", H: "Swift Swim" },
    weightkg: 5.4
  },
  // prevos
  snipsquire: {
    num: -126,
    name: "Snipsquire",
    types: ["Bug"],
    baseStats: { hp: 40, atk: 100, def: 65, spa: 25, spd: 45, spe: 60 },
    abilities: { 0: "Klutz", 1: "Mold Breaker", H: "Moxie" },
    weightkg: 55,
    evos: ["Pinsir"]
  },
  // tt
  dondozo: {
    inherit: true,
    types: ["Dragon", "Water", "Ground"],
    baseStats: { hp: 130, atk: 100, def: 115, spa: 65, spd: 70, spe: 55 },
    abilities: { 0: "Oblivious", 1: "Early Bird", H: "Marvel Scale" }
  },
  grafaiai: {
    inherit: true,
    types: ["Poison", "Dark", "Flying"],
    baseStats: { hp: 83, atk: 93, def: 75, spa: 85, spd: 92, spe: 119 }
  },
  ironjugulis: {
    inherit: true,
    types: ["Flying", "Dragon", "Dark"],
    baseStats: { hp: 104, atk: 80, def: 86, spa: 112, spd: 80, spe: 108 },
    abilities: { 0: "Quark Drive", H: "Multiscale" }
  },
  // vape
  crabominable: {
    inherit: true,
    types: ["Fighting", "Water"],
    abilities: { 0: "Fur Coat", 1: "Iron Fist", H: "Anger Point" }
  }
};
//# sourceMappingURL=pokedex.js.map
