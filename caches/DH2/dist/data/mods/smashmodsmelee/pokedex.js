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
  raichu: {
    inherit: true,
    otherFormes: ["Raichu-Mega"],
    formeOrder: ["Raichu", "Raichu-Mega"]
  },
  raichumega: {
    num: 26,
    name: "Raichu-Mega",
    baseSpecies: "Raichu",
    forme: "Mega",
    types: ["Electric", "Fighting"],
    baseStats: { hp: 60, atk: 125, def: 55, spa: 110, spd: 100, spe: 125 },
    abilities: { 0: "Reckless" },
    heightm: 0.8,
    weightkg: 30,
    color: "Yellow",
    eggGroups: ["Field", "Fairy"],
    requiredItem: "Raichunite"
  },
  garbodor: {
    inherit: true,
    otherFormes: ["Garbodor-Mega"],
    formeOrder: ["Garbodor", "Garbodor-Mega"]
  },
  garbodormega: {
    num: 569,
    name: "Garbodor-Mega",
    baseSpecies: "Garbodor",
    forme: "Mega",
    types: ["Poison"],
    baseStats: { hp: 80, atk: 95, def: 132, spa: 95, spd: 132, spe: 40 },
    abilities: { 0: "Trash Compactor" },
    heightm: 1.9,
    weightkg: 107.3,
    color: "Green",
    eggGroups: ["Mineral"],
    requiredItem: "Garbodorite"
  },
  vanilluxe: {
    inherit: true,
    otherFormes: ["Vanilluxe-Mega"],
    formeOrder: ["Vanilluxe", "Vanilluxe-Mega"]
  },
  vanilluxemega: {
    num: 584,
    name: "Vanilluxe-Mega",
    baseSpecies: "Vanilluxe",
    forme: "Mega",
    types: ["Ice"],
    baseStats: { hp: 71, atk: 95, def: 85, spa: 160, spd: 115, spe: 109 },
    abilities: { 0: "Cold Sweat" },
    heightm: 1.3,
    weightkg: 57.5,
    color: "White",
    eggGroups: ["Mineral"],
    requiredItem: "Vanillite"
  },
  trubbish: {
    inherit: true,
    otherFormes: ["Trubbish-Marshadow"],
    formeOrder: ["Trubbish", "Trubbish-Marshadow"]
  },
  trubbishmarshadow: {
    num: 802,
    name: "Trubbish-Marshadow",
    baseSpecies: "Marshadow",
    forme: "Marshadow",
    types: ["Poison"],
    gender: "N",
    baseStats: { hp: 91, atk: 91, def: 114, spa: 72, spd: 114, spe: 118 },
    abilities: { 0: "Technician" },
    heightm: 0.6,
    weightkg: 31,
    color: "Green",
    eggGroups: ["Mineral"]
  },
  beheeyem: {
    inherit: true,
    abilities: { 0: "Time Warp", 1: "Synchronize", H: "Analytic" }
  },
  pyukchin: {
    num: -1001,
    name: "Pyukchin",
    types: ["Water", "Electric"],
    baseStats: { hp: 61, atk: 90, def: 122, spa: 70, spd: 117, spe: 20 },
    abilities: { 0: "Thunderhead" },
    heightm: 0.3,
    weightkg: 1.1,
    color: "Black",
    eggGroups: ["Water 1"]
  },
  thundahi: {
    num: -1002,
    name: "Thundahi",
    types: ["Electric", "Dragon"],
    gender: "N",
    baseStats: { hp: 70, atk: 60, def: 90, spa: 80, spd: 130, spe: 80 },
    abilities: { 0: "Aftermath", 1: "Storm Drain", H: "Drought" },
    heightm: 3.5,
    weightkg: 211.7,
    color: "Yellow",
    eggGroups: ["Dragon"]
  },
  miltank: {
    num: 241,
    name: "Miltank",
    types: ["Ground", "Fairy"],
    gender: "F",
    baseStats: { hp: 95, atk: 80, def: 105, spa: 40, spd: 70, spe: 100 },
    abilities: { 0: "Thick Fat", 1: "Scrappy", H: "Sap Sipper" },
    heightm: 1.2,
    weightkg: 75.5,
    color: "Pink",
    eggGroups: ["Field"]
  },
  kecleon: {
    inherit: true,
    evos: ["Camomander"]
  },
  camomander: {
    num: -1003,
    name: "Camomander",
    types: ["Normal", "Dragon"],
    baseStats: { hp: 90, atk: 120, def: 90, spa: 40, spd: 110, spe: 70 },
    abilities: { 0: "Adaptability", H: "Protean" },
    heightm: 1,
    weightkg: 22,
    color: "Green",
    prevo: "Kecleon",
    evoType: "trade",
    eggGroups: ["Field"]
  },
  moltres: {
    inherit: true,
    otherFormes: ["Moltres-Galar"],
    formeOrder: ["Moltres", "Moltres-Galar"]
  },
  moltresgalar: {
    num: 146,
    name: "Moltres-Galar",
    baseSpecies: "Moltres",
    forme: "Galar",
    types: ["Dark", "Flying"],
    gender: "N",
    baseStats: { hp: 90, atk: 85, def: 90, spa: 100, spd: 125, spe: 90 },
    abilities: { 0: "Berserk" },
    heightm: 2,
    weightkg: 66,
    color: "Red",
    eggGroups: ["Undiscovered"]
  },
  copperajah: {
    inherit: true,
    otherFormes: ["Copperajah-Forge"],
    formeOrder: ["Copperajah", "Copperajah-Forge"]
  },
  copperajahforge: {
    num: 879,
    name: "Copperajah-Forge",
    types: ["Steel", "Fire"],
    baseStats: { hp: 122, atk: 130, def: 95, spa: 80, spd: 69, spe: 30 },
    abilities: { 0: "Sheer Force", H: "Flash Fire" },
    heightm: 3,
    weightkg: 650,
    color: "Green",
    prevo: "Cufant",
    evoLevel: 34,
    eggGroups: ["Field", "Mineral"]
  },
  claydol: {
    num: 344,
    name: "Claydol",
    types: ["Ground", "Psychic"],
    gender: "N",
    baseStats: { hp: 80, atk: 70, def: 105, spa: 70, spd: 120, spe: 75 },
    abilities: { 0: "Sand Force", 1: "Sand Veil", H: "Filter" },
    heightm: 1.5,
    weightkg: 108,
    color: "Black",
    prevo: "Baltoy",
    evoLevel: 36,
    eggGroups: ["Mineral"]
  },
  unown: {
    inherit: true,
    name: "Unown",
    types: ["Bug", "Dark"],
    baseStats: { hp: 70, atk: 115, def: 140, spa: 70, spd: 115, spe: 70 },
    abilities: { 0: "Magic Guard" },
    weightkg: 5,
    otherFormes: ["unownm"],
    cosmeticFormes: null
  },
  unownm: {
    num: 201,
    name: "Unown-M",
    baseForme: "M",
    types: ["Bug", "Dark"],
    baseStats: { hp: 70, atk: 115, def: 140, spa: 70, spd: 115, spe: 70 },
    abilities: { 0: "Magic Guard" },
    cosmeticFormes: null,
    heightm: 0.5,
    weightkg: 5,
    gender: "N"
  },
  watervellumental: {
    num: -1004,
    name: "Water Vellumental",
    types: ["Water", "Dragon"],
    gender: "N",
    baseStats: { hp: 108, atk: 95, def: 82, spa: 110, spd: 100, spe: 85 },
    abilities: { 0: "Storm Drain" },
    heightm: 0.3,
    weightkg: 0.1,
    color: "Blue",
    eggGroups: ["Undiscovered"]
  },
  escavalier: {
    num: 589,
    name: "Escavalier",
    types: ["Bug", "Steel"],
    baseStats: { hp: 70, atk: 135, def: 105, spa: 60, spd: 105, spe: 20 },
    abilities: { 0: "Swarm", 1: "Guard Up", H: "Knight's Blade" },
    heightm: 1,
    weightkg: 33,
    color: "Gray",
    prevo: "Karrablast",
    evoType: "trade",
    evoCondition: "with a Shelmet",
    eggGroups: ["Bug"]
  },
  lemotic: {
    num: -1005,
    name: "Lemotic",
    types: ["Grass", "Ground"],
    baseStats: { hp: 139, atk: 146, def: 57, spa: 115, spd: 71, spe: 72 },
    abilities: { 0: "Minus", 1: "Mega Launcher", H: "Perish Body" },
    heightm: 1,
    weightkg: 6.4,
    color: "Yellow",
    eggGroups: ["Grass"]
  },
  joltry: {
    num: -1006,
    name: "Joltry",
    types: ["Grass", "Electric"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 87, atk: 92, def: 70, spa: 110, spd: 87, spe: 115 },
    abilities: { 0: "ChloroVolt" },
    heightm: 1.1,
    weightkg: 42.1,
    color: "Green",
    prevo: "Eevee",
    evoType: "useItem",
    evoItem: "Thunder Stone",
    eggGroups: ["Field"]
  },
  magmacroak: {
    num: -1007,
    name: "Magmacroak",
    types: ["Fire", "Fighting"],
    genderRatio: { M: 0.75, F: 0.25 },
    baseStats: { hp: 89, atk: 110, def: 76, spa: 115, spd: 90, spe: 94 },
    abilities: { 0: "Flame Touch" },
    heightm: 1.5,
    weightkg: 56.2,
    color: "Red",
    prevo: "Magmar",
    evoType: "trade",
    evoItem: "Magmarizer",
    eggGroups: ["Human-Like"]
  },
  floraflare: {
    num: -1008,
    name: "Floraflare",
    types: ["Grass", "Fire"],
    baseStats: { hp: 85, atk: 135, def: 75, spa: 90, spd: 90, spe: 60 },
    abilities: { 0: "Chlorophyll", 1: "Leaf Guard", H: "Water Absorb" },
    heightm: 0.8,
    weightkg: 8.5,
    color: "Yellow",
    prevo: "Sunflora",
    evoType: "trade",
    eggGroups: ["Grass"]
  },
  torgeist: {
    num: -1009,
    name: "Torgeist",
    types: ["Ghost", "Flying"],
    baseStats: { hp: 55, atk: 75, def: 90, spa: 115, spd: 100, spe: 105 },
    abilities: { 0: "Clear Body", 1: "Cursed Body", H: "Merciless" },
    heightm: 1.2,
    weightkg: 15,
    color: "Orange",
    eggGroups: ["Amorphous"]
  },
  budew: {
    inherit: true,
    restrictedLearnset: true
  },
  roselia: {
    inherit: true,
    restrictedLearnset: true
  },
  roserade: {
    inherit: true,
    otherFormes: ["Roserade-Scarfed"],
    formeOrder: ["Roserade", "Roserade-Scarfed"],
    restrictedLearnset: true
  },
  roseradescarfed: {
    num: 407,
    name: "Roserade-Scarfed",
    baseSpecies: "Roserade",
    forme: "Scarfed",
    types: ["Poison", "Fairy"],
    baseStats: { hp: 60, atk: 70, def: 65, spa: 125, spd: 105, spe: 107 },
    abilities: { 0: "Natural Cure", 1: "Shield Dust", H: "Technician" },
    heightm: 0.9,
    weightkg: 14.3,
    color: "Green",
    prevo: "Roselia",
    evoType: "useItem",
    evoItem: "Shiny Stone",
    eggGroups: ["Fairy", "Grass"],
    restrictedLearnset: true
  },
  gladiaster: {
    num: -1010,
    name: "Gladiaster",
    types: ["Ice", "Steel"],
    baseStats: { hp: 118, atk: 110, def: 79, spa: 119, spd: 69, spe: 105 },
    abilities: { 0: "Rock Head", 1: "Drought", H: "Unaware" },
    heightm: 1.1,
    weightkg: 148,
    color: "Pink",
    eggGroups: ["Mineral", "Human-Like"]
  },
  hypnihil: {
    num: -1011,
    name: "Hypnihil",
    types: ["Rock", "Psychic"],
    baseStats: { hp: 101, atk: 67, def: 61, spa: 113, spd: 127, spe: 97 },
    abilities: { 0: "Parasomnia" },
    heightm: 1.4,
    weightkg: 65.6,
    color: "White",
    prevo: "Drowzee",
    evoLevel: 26,
    eggGroups: ["Undiscovered"],
    restrictedLearnset: true
  },
  plubia: {
    num: -1012,
    name: "Plubia",
    types: ["Normal", "Ghost"],
    gender: "N",
    baseStats: { hp: 103, atk: 113, def: 41, spa: 127, spd: 97, spe: 89 },
    abilities: { 0: "Beast Boost" },
    heightm: 0.4,
    weightkg: 32,
    color: "Brown",
    eggGroups: ["Undiscovered"]
  },
  phione: {
    num: 489,
    name: "Phione",
    types: ["Water", "Fairy"],
    gender: "N",
    baseStats: { hp: 75, atk: 65, def: 105, spa: 120, spd: 105, spe: 60 },
    abilities: { 0: "Magician", H: "Unburden" },
    heightm: 0.4,
    weightkg: 3.1,
    color: "Blue",
    eggGroups: ["Water 1", "Fairy"],
    restrictedLearnset: true
  },
  cradon: {
    num: -1013,
    name: "Cradon",
    types: ["Steel", "Grass"],
    gender: "N",
    baseStats: { hp: 90, atk: 75, def: 105, spa: 70, spd: 105, spe: 60 },
    abilities: { 0: "Sturdy", 1: "Suction Cups", H: "Storm Drain" },
    heightm: 1.4,
    weightkg: 105,
    color: "Green",
    eggGroups: ["Undiscovered"]
  },
  ares: {
    num: -1014,
    name: "Ares",
    types: ["Flying", "Electric"],
    gender: "N",
    baseStats: { hp: 95, atk: 70, def: 92, spa: 110, spd: 90, spe: 92 },
    abilities: { 0: "Thunderstorm" },
    heightm: 1.4,
    weightkg: 40.3,
    color: "White",
    eggGroups: ["Undiscovered"],
    restrictedLearnset: true
  },
  slowbro: {
    num: 80,
    name: "Slowbro",
    types: ["Fire", "Normal"],
    baseStats: { hp: 95, atk: 60, def: 100, spa: 110, spd: 90, spe: 35 },
    abilities: { 0: "Storm Drain", H: "Regenerator" },
    heightm: 1.6,
    weightkg: 78.5,
    color: "Pink",
    prevo: "Slowpoke",
    evoLevel: 37,
    eggGroups: ["Monster", "Water 1"]
  },
  appletun: {
    num: 842,
    name: "Appletun",
    types: ["Grass", "Dragon"],
    baseStats: { hp: 120, atk: 85, def: 90, spa: 110, spd: 85, spe: 45 },
    abilities: { 0: "Ripen", 1: "Gluttony", H: "Thick Fat" },
    heightm: 0.4,
    weightkg: 13,
    color: "Green",
    prevo: "Applin",
    evoType: "useItem",
    evoItem: "Sweet Apple",
    eggGroups: ["Grass", "Dragon"],
    canGigantamax: "G-Max Sweetness"
  },
  appletungmax: {
    num: 842,
    name: "Appletun-Gmax",
    baseSpecies: "Appletun",
    forme: "Gmax",
    types: ["Grass", "Dragon"],
    baseStats: { hp: 120, atk: 85, def: 90, spa: 110, spd: 85, spe: 45 },
    abilities: { 0: "Ripen", 1: "Gluttony", H: "Thick Fat" },
    heightm: 24,
    weightkg: 0,
    color: "Green",
    eggGroups: ["Grass", "Dragon"],
    changesFrom: "Appletun"
  },
  swablu: {
    num: 333,
    name: "Swablu",
    types: ["Normal", "Flying"],
    baseStats: { hp: 45, atk: 40, def: 60, spa: 40, spd: 75, spe: 50 },
    abilities: { 0: "Natural Cure", H: "Cloud Nine" },
    heightm: 0.4,
    weightkg: 1.2,
    color: "Blue",
    evos: ["Altaria"],
    eggGroups: ["Flying", "Dragon"],
    otherFormes: ["Swablu-Unova"],
    formeOrder: ["Swablu", "Swablu-Unova"]
  },
  swabluunova: {
    num: 333,
    name: "Swablu-Unova",
    baseSpecies: "Swablu",
    types: ["Poison", "Flying"],
    baseStats: { hp: 55, atk: 30, def: 70, spa: 30, spd: 75, spe: 50 },
    abilities: { 0: "Poison Point", H: "Cloud Nine" },
    heightm: 0.4,
    weightkg: 1.2,
    color: "Purple",
    evos: ["Altaria"],
    eggGroups: ["Flying", "Dragon"]
  },
  altaria: {
    num: 334,
    name: "Altaria",
    types: ["Dragon", "Flying"],
    baseStats: { hp: 75, atk: 70, def: 90, spa: 70, spd: 105, spe: 80 },
    abilities: { 0: "Natural Cure", H: "Cloud Nine" },
    heightm: 1.1,
    weightkg: 20.6,
    color: "Blue",
    prevo: "Swablu",
    evoLevel: 35,
    eggGroups: ["Flying", "Dragon"],
    otherFormes: ["Altaria-Mega", "Altaria-Unova", "Altaria-Unova-Mega"],
    formeOrder: ["Altaria", "Altaria-Mega", "Altaria-Unova", "Altaria-Unova-Mega"]
  },
  altariaunova: {
    num: 334,
    name: "Altaria-Unova",
    baseSpecies: "Altaria",
    types: ["Poison", "Dragon"],
    baseStats: { hp: 105, atk: 40, def: 105, spa: 85, spd: 105, spe: 50 },
    abilities: { 0: "Poison Point", H: "Levitate" },
    heightm: 1.1,
    weightkg: 20.6,
    color: "Black",
    prevo: "Swablu-Unova",
    evoLevel: 35,
    eggGroups: ["Flying", "Dragon"],
    otherFormes: ["Altaria-Mega"],
    formeOrder: ["Altaria", "Altaria-Mega"]
  },
  altariaunovamega: {
    num: 334,
    name: "Altaria-Unova-Mega",
    baseSpecies: "Altaria",
    forme: "Mega-Unova",
    types: ["Poison", "Fairy"],
    baseStats: { hp: 105, atk: 40, def: 140, spa: 115, spd: 140, spe: 50 },
    abilities: { 0: "Levitate" },
    heightm: 1.5,
    weightkg: 20.6,
    color: "Black",
    eggGroups: ["Flying", "Dragon"],
    requiredItem: "Altarianite",
    battleOnly: "Altaria-Unova"
  },
  redriot: {
    num: -1015,
    name: "Red Riot",
    types: ["Fighting", "Rock"],
    gender: "M",
    baseStats: { hp: 109, atk: 95, def: 135, spa: 30, spd: 100, spe: 81 },
    abilities: { 0: "Sturdy", 1: "Rough Skin", H: "Guts" },
    heightm: 1.7,
    weightkg: 74,
    color: "Red",
    eggGroups: ["Human-Like"]
  },
  redriotmega: {
    num: -1015,
    name: "Red Riot-Mega",
    baseSpecies: "Red Riot",
    forme: "Mega",
    types: ["Fighting", "Rock"],
    gender: "M",
    baseStats: { hp: 109, atk: 115, def: 165, spa: 60, spd: 140, spe: 61 },
    abilities: { 0: "Rock Head" },
    heightm: 1.8,
    weightkg: 148,
    color: "Red",
    eggGroups: ["Human-Like"],
    requiredItem: "Redriotite"
  },
  swinub: {
    inherit: true,
    restrictedLearnset: true
  },
  piloswine: {
    inherit: true,
    restrictedLearnset: true
  },
  mamoswine: {
    num: 473,
    name: "Mamoswine",
    types: ["Ice", "Ground"],
    baseStats: { hp: 70, atk: 110, def: 60, spa: 100, spd: 60, spe: 70 },
    abilities: { 0: "Oblivious", 1: "Snow Cloak", H: "Sheer Force" },
    heightm: 2.5,
    weightkg: 291,
    color: "Brown",
    prevo: "Piloswine",
    evoType: "levelMove",
    evoMove: "Ancient Power",
    eggGroups: ["Field"],
    restrictedLearnset: true
  },
  gastly: {
    inherit: true,
    restrictedLearnset: true
  },
  haunter: {
    inherit: true,
    restrictedLearnset: true
  },
  gengar: {
    num: 94,
    name: "Gengar",
    types: ["Ghost", "Poison"],
    baseStats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
    abilities: { 0: "Cursed Body" },
    heightm: 1.5,
    weightkg: 40.5,
    color: "Purple",
    prevo: "Haunter",
    evoType: "trade",
    eggGroups: ["Amorphous"],
    otherFormes: ["Gengar-Mega-X", "Gengar-Mega"],
    formeOrder: ["Gengar", "Gengar-Mega-X", "Gengar-Mega"],
    canGigantamax: "G-Max Terror",
    restrictedLearnset: true
  },
  gengarmegax: {
    num: 94,
    name: "Gengar-Mega-X",
    baseSpecies: "Gengar",
    forme: "Mega-X",
    types: ["Ghost", "Psychic"],
    baseStats: { hp: 60, atk: 145, def: 90, spa: 100, spd: 90, spe: 115 },
    abilities: { 0: "Psycho Zone" },
    heightm: 1.4,
    weightkg: 40.5,
    color: "Purple",
    eggGroups: ["Amorphous"],
    requiredItem: "Gengarite X"
  },
  gengargmax: {
    num: 94,
    name: "Gengar-Gmax",
    baseSpecies: "Gengar",
    forme: "Gmax",
    types: ["Ghost", "Poison"],
    baseStats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
    abilities: { 0: "Cursed Body" },
    heightm: 20,
    weightkg: 0,
    color: "Purple",
    eggGroups: ["Amorphous"],
    changesFrom: "Gengar"
  },
  skorupi: {
    inherit: true,
    restrictedLearnset: true
  },
  drapion: {
    num: 452,
    name: "Drapion",
    types: ["Poison", "Dark"],
    baseStats: { hp: 70, atk: 105, def: 115, spa: 65, spd: 90, spe: 95 },
    abilities: { 0: "Battle Armor", 1: "Sniper", H: "Tough Claws" },
    heightm: 1.3,
    weightkg: 61.5,
    color: "Purple",
    prevo: "Skorupi",
    evoLevel: 40,
    eggGroups: ["Bug", "Water 3"],
    restrictedLearnset: true
  },
  alcremie: {
    num: 869,
    name: "Alcremie",
    baseForme: "Vanilla Cream",
    types: ["Fairy"],
    gender: "F",
    baseStats: { hp: 70, atk: 60, def: 90, spa: 125, spd: 120, spe: 40 },
    abilities: { 0: "Sweet Veil", 1: "Natural Cure", H: "Aroma Veil" },
    heightm: 0.3,
    weightkg: 0.5,
    color: "White",
    prevo: "Milcery",
    evoType: "other",
    evoCondition: "spin while holding a Sweet",
    eggGroups: ["Fairy", "Amorphous"],
    cosmeticFormes: ["Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"],
    formeOrder: ["Alcremie", "Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"],
    canGigantamax: "G-Max Finale"
  },
  alcremiegmax: {
    num: 869,
    name: "Alcremie-Gmax",
    baseSpecies: "Alcremie",
    forme: "Gmax",
    types: ["Fairy"],
    gender: "F",
    baseStats: { hp: 70, atk: 60, def: 90, spa: 125, spd: 120, spe: 40 },
    abilities: { 0: "Sweet Veil", 1: "Natural Cure", H: "Aroma Veil" },
    heightm: 30,
    weightkg: 0,
    color: "White",
    eggGroups: ["Fairy", "Amorphous"],
    changesFrom: "Alcremie"
  },
  falinks: {
    num: 870,
    name: "Falinks",
    types: ["Fighting", "Ground"],
    gender: "N",
    baseStats: { hp: 95, atk: 110, def: 110, spa: 70, spd: 60, spe: 95 },
    abilities: { 0: "Skill Link", 1: "Technician", H: "Defiant" },
    heightm: 3,
    weightkg: 62,
    color: "Yellow",
    eggGroups: ["Fairy", "Mineral"]
  },
  rapidashgalar: {
    num: 78,
    name: "Rapidash-Galar",
    baseSpecies: "Rapidash",
    forme: "Galar",
    types: ["Psychic", "Fairy"],
    baseStats: { hp: 75, atk: 110, def: 75, spa: 75, spd: 80, spe: 110 },
    abilities: { 0: "Run Away", 1: "Pastel Veil", H: "Anticipation" },
    heightm: 1.7,
    weightkg: 80,
    color: "White",
    prevo: "Ponyta-Galar",
    evoLevel: 40,
    eggGroups: ["Field"]
  },
  rockruff: {
    inherit: true,
    restrictedLearnset: true
  },
  lycanrocdusk: {
    inherit: true,
    restrictedLearnset: true
  },
  vespiquen: {
    inherit: true,
    baseStats: { hp: 85, atk: 80, def: 117, spa: 75, spd: 117, spe: 25 },
    abilities: { 0: "Pressure", 1: "Damp", H: "Unnerve" }
  },
  meloettapirouette: {
    inherit: true,
    requiredMove: null,
    requiredItem: "Relic Charm"
  }
};
//# sourceMappingURL=pokedex.js.map
