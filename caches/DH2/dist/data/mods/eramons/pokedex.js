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
  //Early Civilization
  copperajah: {
    inherit: true,
    baseStats: { hp: 122, atk: 130, def: 89, spa: 80, spd: 89, spe: 30 },
    abilities: { 0: "Sheer Force", H: "Heavy Metal" }
  },
  dachsbun: {
    inherit: true,
    baseStats: { hp: 77, atk: 100, def: 115, spa: 50, spd: 80, spe: 95 },
    abilities: { 0: "Well-Baked Body", 1: "Aroma Veil", H: "Regenerator" }
  },
  garganacl: {
    inherit: true,
    baseStats: { hp: 100, atk: 110, def: 130, spa: 45, spd: 100, spe: 35 }
  },
  golurk: {
    inherit: true,
    types: ["Ghost", "Ground"],
    baseStats: { hp: 99, atk: 124, def: 80, spa: 55, spd: 80, spe: 75 },
    abilities: { 0: "Klutz", 1: "No Guard", H: "Stamina" }
  },
  krookodile: {
    inherit: true,
    baseStats: { hp: 95, atk: 125, def: 98, spa: 65, spd: 90, spe: 92 },
    abilities: { 0: "Sand Rush", 1: "Moxie", H: "Intimidate" }
  },
  stonjourner: {
    inherit: true,
    baseStats: { hp: 100, atk: 125, def: 135, spa: 20, spd: 60, spe: 80 },
    abilities: { 0: "Magic Guard" }
  },
  claywheel: {
    num: -100,
    name: "Claywheel",
    types: ["Water", "Grass"],
    gender: "N",
    baseStats: { hp: 70, atk: 60, def: 105, spa: 90, spd: 120, spe: 55 },
    abilities: { 0: "Endless Rotation" },
    heightm: 1.5,
    weightkg: 108,
    color: "Black",
    prevo: "Baltoy",
    evoLevel: 36,
    eggGroups: ["Mineral"]
  },
  lapseus: {
    num: -101,
    name: "Lapseus",
    baseForme: "Fighting",
    types: ["Water", "Fighting"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    otherFormes: ["Lapseus-Bug", "Lapseus-Dark", "Lapseus-Dragon", "Lapseus-Electric", "Lapseus-Fairy", "Lapseus-Fire", "Lapseus-Flying", "Lapseus-Ghost", "Lapseus-Grass", "Lapseus-Ground", "Lapseus-Ice", "Lapseus-Normal", "Lapseus-Poison", "Lapseus-Psychic", "Lapseus-Rock", "Lapseus-Steel", "Lapseus-Water"],
    formeOrder: ["Lapseus", "Lapseus-Bug", "Lapseus-Dark", "Lapseus-Dragon", "Lapseus-Electric", "Lapseus-Fairy", "Lapseus-Fire", "Lapseus-Flying", "Lapseus-Ghost", "Lapseus-Grass", "Lapseus-Ground", "Lapseus-Ice", "Lapseus-Normal", "Lapseus-Poison", "Lapseus-Psychic", "Lapseus-Rock", "Lapseus-Steel", "Lapseus-Water"]
  },
  lapseusbug: {
    num: -101,
    name: "Lapseus-Bug",
    baseSpecies: "Lapseus",
    forme: "Bug",
    baseForme: "Fighting",
    types: ["Water", "Bug"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseusdark: {
    num: -101,
    name: "Lapseus-Dark",
    baseSpecies: "Lapseus",
    forme: "Dark",
    baseForme: "Fighting",
    types: ["Water", "Dark"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseusdragon: {
    num: -101,
    name: "Lapseus-Dragon",
    baseSpecies: "Lapseus",
    forme: "Dragon",
    baseForme: "Fighting",
    types: ["Water", "Dragon"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseuselectric: {
    num: -101,
    name: "Lapseus-Electric",
    baseSpecies: "Lapseus",
    forme: "Electric",
    baseForme: "Fighting",
    types: ["Water", "Electric"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseusfairy: {
    num: -101,
    name: "Lapseus-Fairy",
    baseSpecies: "Lapseus",
    forme: "Fairy",
    baseForme: "Fighting",
    types: ["Water", "Fairy"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseusfire: {
    num: -101,
    name: "Lapseus-Fire",
    baseSpecies: "Lapseus",
    forme: "Fire",
    baseForme: "Fighting",
    types: ["Water", "Fire"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseusflying: {
    num: -101,
    name: "Lapseus-Flying",
    baseSpecies: "Lapseus",
    forme: "Flying",
    baseForme: "Fighting",
    types: ["Water", "Flying"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseusghost: {
    num: -101,
    name: "Lapseus-Ghost",
    baseSpecies: "Lapseus",
    forme: "Ghost",
    baseForme: "Fighting",
    types: ["Water", "Ghost"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseusgrass: {
    num: -101,
    name: "Lapseus-Grass",
    baseSpecies: "Lapseus",
    forme: "Grass",
    baseForme: "Fighting",
    types: ["Water", "Grass"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseusground: {
    num: -101,
    name: "Lapseus-Ground",
    baseSpecies: "Lapseus",
    forme: "Ground",
    baseForme: "Fighting",
    types: ["Water", "Ground"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseusice: {
    num: -101,
    name: "Lapseus-Ice",
    baseSpecies: "Lapseus",
    forme: "Ice",
    baseForme: "Fighting",
    types: ["Water", "Ice"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseusnormal: {
    num: -101,
    name: "Lapseus-Normal",
    baseSpecies: "Lapseus",
    forme: "Normal",
    baseForme: "Fighting",
    types: ["Water", "Normal"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseuspoison: {
    num: -101,
    name: "Lapseus-Poison",
    baseSpecies: "Lapseus",
    forme: "Poison",
    baseForme: "Fighting",
    types: ["Water", "Poison"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseuspsychic: {
    num: -101,
    name: "Lapseus-Psychic",
    baseSpecies: "Lapseus",
    forme: "Psychic",
    baseForme: "Fighting",
    types: ["Water", "Psychic"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseusrock: {
    num: -101,
    name: "Lapseus-Rock",
    baseSpecies: "Lapseus",
    forme: "Rock",
    baseForme: "Fighting",
    types: ["Water", "Rock"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseussteel: {
    num: -101,
    name: "Lapseus-Steel",
    baseSpecies: "Lapseus",
    forme: "Steel",
    baseForme: "Fighting",
    types: ["Water", "Steel"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  lapseuswater: {
    num: -101,
    name: "Lapseus-Water",
    baseSpecies: "Lapseus",
    forme: "Water",
    baseForme: "Fighting",
    types: ["Water", "Water"],
    baseStats: { hp: 130, atk: 105, def: 100, spa: 75, spd: 65, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Battle Armor", H: "Regenerator" },
    heightm: 2.5,
    weightkg: 220,
    color: "Blue",
    eggGroups: ["Monster", "Water 1"],
    requiredMove: "Change Of Heart",
    battleOnly: "Lapseus"
  },
  mahogana: {
    num: -102,
    name: "Mahogana",
    types: ["Grass", "Fairy"],
    gender: "N",
    baseStats: { hp: 75, atk: 100, def: 120, spa: 110, spd: 120, spe: 75 },
    abilities: { 0: "Serene Grace" },
    heightm: 1,
    weightkg: 80.5,
    color: "Gray",
    eggGroups: ["Undiscovered"],
    tags: ["Mythical"]
  },
  rebabee: {
    num: -103,
    name: "Rebabee",
    types: ["Bug", "Ghost"],
    baseStats: { hp: 70, atk: 55, def: 60, spa: 99, spd: 70, spe: 110 },
    abilities: { 0: "Desolate Land" },
    heightm: 0.2,
    weightkg: 0.5,
    color: "Yellow",
    prevo: "Cutiefly",
    evoLevel: 25,
    eggGroups: ["Bug", "Fairy"]
  },
  thunderzeus: {
    num: -104,
    name: "Thunderzeus",
    types: ["Electric", "Flying"],
    gender: "M",
    baseStats: { hp: 79, atk: 101, def: 110, spa: 100, spd: 70, spe: 120 },
    abilities: { 0: "Lightning Rod", H: "Teravolt" },
    heightm: 1.5,
    weightkg: 61,
    color: "Blue",
    tags: ["Sub-Legendary"],
    eggGroups: ["Undiscovered"]
  },
  tropion: {
    num: -105,
    name: "Tropion",
    types: ["Grass", "Dragon"],
    baseStats: { hp: 120, atk: 60, def: 70, spa: 110, spd: 80, spe: 20 },
    abilities: { 0: "Thick Fat", 1: "Natural Cure", H: "Harvest" },
    heightm: 2,
    weightkg: 100,
    color: "Green",
    eggGroups: ["Monster", "Grass"]
  },
  //Medieval
  escavalier: {
    inherit: true,
    baseStats: { hp: 90, atk: 135, def: 105, spa: 60, spd: 105, spe: 20 },
    abilities: { 0: "Swarm", 1: "Shell Armor", H: "No Guard" }
  },
  gallade: {
    inherit: true,
    baseStats: { hp: 78, atk: 125, def: 75, spa: 65, spd: 115, spe: 100 }
  },
  hariyama: {
    inherit: true,
    baseStats: { hp: 144, atk: 120, def: 75, spa: 40, spd: 75, spe: 50 },
    abilities: { 0: "Thick Fat", 1: "Guts", H: "Sheer Force" }
  },
  kingambit: {
    inherit: true,
    baseStats: { hp: 100, atk: 135, def: 120, spa: 60, spd: 85, spe: 50 },
    abilities: { 0: "Defiant", 1: "Intimidate", H: "Pressure" }
  },
  rapidashgalar: {
    inherit: true,
    baseStats: { hp: 75, atk: 110, def: 70, spa: 80, spd: 80, spe: 115 },
    abilities: { 0: "Natural Cure", 1: "Pastel Veil", H: "Anticipation" }
  },
  tinkaton: {
    inherit: true,
    types: ["Steel", "Fairy"],
    baseStats: { hp: 96, atk: 88, def: 81, spa: 81, spd: 108, spe: 96 },
    abilities: { 0: "Mold Breaker", 1: "Sheer Force", H: "Pickpocket" }
  },
  aquaboliva: {
    num: -106,
    name: "Aquaboliva",
    types: ["Water", "Fairy"],
    baseStats: { hp: 95, atk: 61, def: 105, spa: 75, spd: 109, spe: 65 },
    abilities: { 0: "Cloud Nine", H: "Water Veil" },
    heightm: 1.4,
    weightkg: 48.2,
    color: "Green",
    prevo: "Dolliv",
    evoLevel: 35,
    eggGroups: ["Water 1"]
  },
  palosslime: {
    num: -107,
    name: "Palosslime",
    types: ["Ground", "Poison"],
    baseStats: { hp: 130, atk: 30, def: 80, spa: 115, spd: 85, spe: 40 },
    abilities: { 0: "Gooey", 1: "Water Compaction", H: "Liquid Ooze" },
    heightm: 1.3,
    weightkg: 250,
    color: "Brown",
    prevo: "Sandygast",
    evoLevel: 42,
    eggGroups: ["Amorphous"]
  },
  plaguinja: {
    num: -108,
    name: "Plaguinja",
    types: ["Ghost", "Poison"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 72, atk: 95, def: 67, spa: 103, spd: 71, spe: 122 },
    abilities: { 0: "Corrosion", H: "Perish Body" },
    heightm: 1.5,
    weightkg: 40,
    color: "Blue",
    prevo: "Frogadier",
    evoLevel: 36,
    eggGroups: ["Water 1"]
  },
  silkroak: {
    num: -109,
    name: "Silkroak",
    types: ["Ground", "Water"],
    baseStats: { hp: 78, atk: 66, def: 75, spa: 106, spd: 75, spe: 90 },
    abilities: { 0: "Gooey", H: "Shield Dust" },
    heightm: 1.3,
    weightkg: 44.4,
    color: "Blue",
    prevo: "Croagunk",
    evoLevel: 37,
    eggGroups: ["Human-Like"]
  },
  tarranite: {
    num: -110,
    name: "Tarranite",
    types: ["Dragon", "Normal"],
    baseStats: { hp: 80, atk: 110, def: 100, spa: 124, spd: 95, spe: 91 },
    abilities: { 0: "Sheer Force", H: "Multiscale" },
    heightm: 2.2,
    weightkg: 210,
    color: "Brown",
    prevo: "Dragonair",
    evoLevel: 55,
    eggGroups: ["Water 1", "Dragon"]
  },
  torkappa: {
    num: -111,
    name: "Torkappa",
    types: ["Water", "Grass"],
    baseStats: { hp: 80, atk: 85, def: 130, spa: 95, spd: 60, spe: 10 },
    abilities: { 0: "Hydration", 1: "Drizzle", H: "Grassy Surge" },
    heightm: 0.5,
    weightkg: 80.4,
    color: "Brown",
    eggGroups: ["Field"]
  },
  // Present Day
  cinderace: {
    inherit: true,
    baseStats: { hp: 80, atk: 106, def: 85, spa: 55, spd: 85, spe: 119 }
  },
  conkeldurr: {
    inherit: true,
    baseStats: { hp: 105, atk: 140, def: 95, spa: 55, spd: 85, spe: 55 },
    abilities: { 0: "Sheer Force", 1: "Guts", H: "Iron Fist" }
  },
  duraludon: {
    inherit: true,
    baseStats: { hp: 70, atk: 95, def: 115, spa: 120, spd: 80, spe: 95 },
    abilities: { 0: "Light Metal", 1: "Heavy Metal", H: "Filter" }
  },
  revavroom: {
    inherit: true,
    baseStats: { hp: 80, atk: 119, def: 115, spa: 54, spd: 77, spe: 95 },
    abilities: { 0: "Overcoat", H: "Rough Skin" }
  },
  rotomwash: {
    inherit: true,
    baseSpecies: void 0,
    forme: void 0,
    baseStats: { hp: 70, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
    changesFrom: void 0
  },
  unfezant: {
    inherit: true,
    types: ["Normal", "Flying"],
    baseStats: { hp: 80, atk: 115, def: 90, spa: 65, spd: 55, spe: 103 },
    abilities: { 0: "Big Pecks", 1: "Tinted Lens", H: "Rivalry" }
  },
  chandelight: {
    num: -112,
    name: "Chandelight",
    types: ["Electric", "Fairy"],
    baseStats: { hp: 70, atk: 45, def: 90, spa: 145, spd: 90, spe: 80 },
    abilities: { 0: "Cute Charm", 1: "Regenerator", H: "Galvanize" },
    heightm: 1,
    weightkg: 34.3,
    color: "Black",
    prevo: "Lampent",
    evoType: "useItem",
    evoItem: "Thunder Stone",
    eggGroups: ["Amorphous"]
  },
  clowndoom: {
    num: -113,
    name: "Clowndoom",
    types: ["Dark", "Fairy"],
    baseStats: { hp: 75, atk: 90, def: 60, spa: 110, spd: 80, spe: 85 },
    abilities: { 0: "Soundproof", 1: "Oblivious", H: "Paralyzed With Fear" },
    heightm: 1.4,
    weightkg: 35,
    color: "Black",
    prevo: "Houndour",
    evoLevel: 24,
    eggGroups: ["Field"]
  },
  falsiken: {
    num: -114,
    name: "Falsiken",
    baseForme: "Disguised",
    types: ["Grass", "Fairy"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 70, atk: 80, def: 70, spa: 80, spd: 120, spe: 110 },
    abilities: { 0: "Overgrow", H: "Beyond A Doubt" },
    heightm: 1.9,
    weightkg: 52,
    color: "Red",
    prevo: "Combusken",
    evoLevel: 36,
    eggGroups: ["Field"],
    otherFormes: ["Falsiken-Busted"],
    formeOrder: ["Falsiken", "Falsiken-Busted"]
  },
  falsikenbusted: {
    num: -114,
    name: "Falsiken-Busted",
    baseSpecies: "Falsiken",
    forme: "Busted",
    types: ["Grass", "Fairy"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 70, atk: 80, def: 70, spa: 80, spd: 120, spe: 110 },
    abilities: { 0: "Overgrow", H: "Beyond A Doubt" },
    heightm: 1.9,
    weightkg: 52,
    color: "Red",
    eggGroups: ["Field"],
    requiredAbility: "Beyond A Doubt",
    battleOnly: "Falsinken"
  },
  glispirin: {
    num: -115,
    name: "Glispirin",
    types: ["Ground", "Fire"],
    baseStats: { hp: 75, atk: 125, def: 95, spa: 45, spd: 100, spe: 70 },
    abilities: { 0: "Hyper Cutter", 1: "Flame Body", H: "Poison Heal" },
    heightm: 2,
    weightkg: 42.5,
    color: "Purple",
    prevo: "Gligar",
    evoType: "levelHold",
    evoItem: "Razor Fang",
    evoCondition: "at day",
    eggGroups: ["Bug"]
  },
  heradoze: {
    num: -116,
    name: "Heradoze",
    types: ["Ground", "Fighting"],
    baseStats: { hp: 100, atk: 125, def: 85, spa: 40, spd: 100, spe: 50 },
    abilities: { 0: "Mold Breaker", 1: "Heavy Metal", H: "Light Metal" },
    heightm: 1.5,
    weightkg: 54,
    color: "Blue",
    eggGroups: ["Bug"]
  },
  wiifey: {
    num: -117,
    name: "Wiifey",
    types: ["Electric"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 61, atk: 47, def: 90, spa: 87, spd: 100, spe: 100 },
    abilities: { 0: "Static", 1: "Triage", H: "Receiver" },
    heightm: 0.1,
    weightkg: 0.3,
    color: "Green",
    eggGroups: ["Grass"]
  },
  // Far Future
  beheeyem: {
    inherit: true,
    baseStats: { hp: 90, atk: 75, def: 80, spa: 140, spd: 100, spe: 40 },
    abilities: { 0: "Synchronize", 1: "Analytic", H: "Levitate" }
  },
  dracozolt: {
    inherit: true,
    baseStats: { hp: 90, atk: 120, def: 90, spa: 80, spd: 70, spe: 105 },
    abilities: { 0: "Volt Absorb", 1: "Sand Rush", H: "Pressure" }
  },
  genesect: {
    inherit: true,
    abilities: { 0: "Mega Launcher" }
  },
  genesectdouse: {
    inherit: true,
    abilities: { 0: "Mega Launcher" }
  },
  genesectshock: {
    inherit: true,
    abilities: { 0: "Mega Launcher" }
  },
  genesectburn: {
    inherit: true,
    abilities: { 0: "Mega Launcher" }
  },
  genesectchill: {
    inherit: true,
    abilities: { 0: "Mega Launcher" }
  },
  klinklang: {
    inherit: true,
    baseStats: { hp: 80, atk: 100, def: 115, spa: 70, spd: 85, spe: 90 },
    abilities: { 0: "Levitate", 1: "Clear Body", H: "Plus" }
  },
  porygonz: {
    inherit: true,
    baseStats: { hp: 85, atk: 80, def: 85, spa: 135, spd: 105, spe: 90 },
    abilities: { 0: "Adaptability", 1: "Download", H: "Protean" }
  },
  rotom: {
    inherit: true,
    baseStats: { hp: 60, atk: 50, def: 77, spa: 105, spd: 77, spe: 111 },
    abilities: { 0: "Shadow Shield" },
    otherFormes: void 0,
    formeOrder: void 0
  },
  autocalibur: {
    num: -118,
    name: "Autocalibur",
    types: ["Dragon", "Psychic"],
    baseStats: { hp: 90, atk: 110, def: 90, spa: 110, spd: 95, spe: 105 },
    abilities: { 0: "Bulletproof", 1: "Filter", H: "Rock Head" },
    heightm: 2.1,
    weightkg: 210,
    color: "Gray",
    prevo: "Arctibax",
    evoLevel: 54,
    eggGroups: ["Dragon", "Mineral"]
  },
  clefquifer: {
    num: -119,
    name: "Clefquifer",
    types: ["Fairy", "Ice"],
    baseStats: { hp: 80, atk: 50, def: 53, spa: 110, spd: 105, spe: 85 },
    abilities: { 0: "Levitate", 1: "Magic Guard", H: "Water Bubble" },
    heightm: 1.3,
    weightkg: 40,
    color: "Pink",
    prevo: "Clefairy",
    evoType: "useItem",
    evoItem: "Moon Stone",
    eggGroups: ["Fairy"]
  },
  mushacryo: {
    num: -120,
    name: "Mushacryo",
    types: ["Ice", "Dark"],
    baseStats: { hp: 75, atk: 100, def: 120, spa: 110, spd: 120, spe: 75 },
    abilities: { 0: "Serene Grace" },
    heightm: 1.1,
    weightkg: 60.5,
    color: "Pink",
    prevo: "Munna",
    evoType: "useItem",
    evoItem: "Ice Stone",
    eggGroups: ["Field"]
  },
  nanolinks: {
    num: -121,
    name: "Nanolinks",
    types: ["Bug", "Fighting"],
    gender: "N",
    baseStats: { hp: 60, atk: 100, def: 70, spa: 70, spd: 100, spe: 70 },
    abilities: { 0: "Healer", H: "Regenerator" },
    heightm: 3,
    weightkg: 62,
    color: "Yellow",
    eggGroups: ["Fairy", "Mineral"]
  },
  planeknight: {
    num: -122,
    name: "Planeknight",
    types: ["Water", "Flying"],
    baseStats: { hp: 89, atk: 40, def: 105, spa: 95, spd: 70, spe: 96 },
    abilities: { 0: "Cloud Nine", 1: "Lightning Rod", H: "Mirror Armor" },
    heightm: 2.2,
    weightkg: 75,
    color: "Purple",
    prevo: "Corvisquire",
    evoLevel: 38,
    eggGroups: ["Flying"]
  },
  probophis: {
    num: -123,
    name: "Probophis",
    types: ["Rock", "Fire"],
    baseStats: { hp: 65, atk: 115, def: 120, spa: 35, spd: 90, spe: 100 },
    abilities: { 0: "Rock Head", 1: "Flame Body", H: "Rocky Payload" },
    heightm: 1.4,
    weightkg: 340,
    color: "Gray",
    prevo: "Nosepass",
    evoType: "levelExtra",
    evoCondition: "near a special magnetic field",
    eggGroups: ["Mineral"]
  }
};
//# sourceMappingURL=pokedex.js.map
