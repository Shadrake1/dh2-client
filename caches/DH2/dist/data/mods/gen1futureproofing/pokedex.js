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
  larvitar: {
    num: 246,
    name: "Larvitar",
    types: ["Rock", "Ground"],
    baseStats: { hp: 50, atk: 64, def: 50, spa: 45, spd: 45, spe: 41 },
    abilities: {},
    heightm: 0.6,
    weightkg: 72,
    color: "Green",
    evos: ["Pupitar"],
    eggGroups: ["Monster"],
    gen: 1
  },
  pupitar: {
    num: 247,
    name: "Pupitar",
    types: ["Rock", "Ground"],
    baseStats: { hp: 70, atk: 84, def: 70, spa: 65, spd: 65, spe: 51 },
    abilities: {},
    heightm: 1.2,
    weightkg: 152,
    color: "Gray",
    prevo: "Larvitar",
    gen: 1
  },
  tyranitar: {
    num: 248,
    name: "Tyranitar",
    types: ["Rock"],
    baseStats: { hp: 100, atk: 134, def: 110, spa: 95, spd: 95, spe: 61 },
    abilities: {},
    heightm: 2,
    weightkg: 202,
    color: "Green",
    prevo: "Pupitar",
    evoLevel: 55,
    gen: 1
  },
  karrablast: {
    num: 588,
    name: "Karrablast",
    types: ["Bug"],
    baseStats: { hp: 50, atk: 75, def: 45, spa: 40, spd: 40, spe: 60 },
    abilities: {},
    heightm: 0.5,
    weightkg: 5.9,
    color: "Blue",
    evos: ["Escavalier"],
    gen: 1
  },
  escavalier: {
    num: 589,
    name: "Escavalier",
    types: ["Bug", "Rock"],
    baseStats: { hp: 70, atk: 135, def: 105, spa: 60, spd: 60, spe: 60 },
    abilities: {},
    heightm: 1,
    weightkg: 33,
    color: "Gray",
    prevo: "Karrablast",
    evoType: "trade",
    gen: 1
  },
  ralts: {
    num: 280,
    name: "Ralts",
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 18, atk: 45, def: 25, spa: 45, spd: 45, spe: 40 },
    abilities: {},
    heightm: 0.4,
    weightkg: 6.6,
    color: "White",
    evos: ["Kirlia"],
    eggGroups: ["Human-Like", "Amorphous"],
    gen: 1
  },
  kirlia: {
    num: 281,
    name: "Kirlia",
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 28, atk: 55, def: 35, spa: 65, spd: 65, spe: 50 },
    abilities: {},
    heightm: 0.8,
    weightkg: 20.2,
    color: "White",
    prevo: "Ralts",
    evoLevel: 20,
    evos: ["Gardevoir"],
    gen: 1
  },
  gardevoir: {
    num: 282,
    name: "Gardevoir",
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 48, atk: 85, def: 65, spa: 125, spd: 125, spe: 80 },
    abilities: {},
    heightm: 1.6,
    weightkg: 48.4,
    color: "White",
    prevo: "Kirlia",
    evoLevel: 30,
    gen: 1
  },
  deino: {
    num: 633,
    name: "Deino",
    types: ["Dragon", "Poison"],
    baseStats: { hp: 52, atk: 65, def: 50, spa: 45, spd: 45, spe: 38 },
    abilities: {},
    heightm: 0.8,
    weightkg: 17.3,
    color: "Blue",
    evos: ["Zweilous"],
    gen: 1
  },
  zweilous: {
    num: 634,
    name: "Zweilous",
    types: ["Dragon", "Poison"],
    baseStats: { hp: 72, atk: 85, def: 70, spa: 65, spd: 65, spe: 58 },
    abilities: {},
    heightm: 1.4,
    weightkg: 50,
    color: "Blue",
    prevo: "Deino",
    evoLevel: 50,
    evos: ["Hydreigon"],
    gen: 1
  },
  hydreigon: {
    num: 635,
    name: "Hydreigon",
    types: ["Dragon", "Poison"],
    baseStats: { hp: 82, atk: 105, def: 90, spa: 125, spd: 125, spe: 98 },
    abilities: {},
    heightm: 1.8,
    weightkg: 160,
    color: "Blue",
    prevo: "Zweilous",
    evoLevel: 64,
    gen: 1
  },
  scizor: {
    num: 212,
    name: "Scizor",
    types: ["Bug", "Fighting"],
    baseStats: { hp: 70, atk: 130, def: 110, spa: 55, spd: 55, spe: 65 },
    abilities: {},
    heightm: 1.8,
    weightkg: 118,
    color: "Red",
    prevo: "Scyther",
    evoType: "trade"
  },
  cottonee: {
    num: 546,
    name: "Cottonee",
    types: ["Grass", "Fire"],
    baseStats: { hp: 47, atk: 27, def: 60, spa: 60, spd: 60, spe: 66 },
    abilities: {},
    heightm: 0.3,
    weightkg: 0.6,
    color: "Green",
    evos: ["Whimsicott"],
    gen: 1
  },
  whimsicott: {
    num: 547,
    name: "Whimsicott",
    types: ["Grass", "Fire"],
    baseStats: { hp: 67, atk: 67, def: 85, spa: 85, spd: 85, spe: 116 },
    abilities: {},
    heightm: 0.7,
    weightkg: 6.6,
    color: "Green",
    prevo: "Cottonee",
    evoType: "useItem",
    evoItem: "Leaf Stone",
    gen: 1
  },
  spiritomb: {
    num: 442,
    name: "Spiritomb",
    types: ["Ghost", "Fire"],
    baseStats: { hp: 50, atk: 108, def: 108, spa: 108, spd: 108, spe: 35 },
    abilities: {},
    heightm: 1,
    weightkg: 108,
    color: "Purple",
    gen: 1
  },
  steelix: {
    num: 208,
    name: "Steelix",
    types: ["Ground"],
    baseStats: { hp: 65, atk: 95, def: 180, spa: 75, spd: 75, spe: 30 },
    abilities: {},
    heightm: 9.2,
    weightkg: 400,
    color: "Gray",
    prevo: "Onix",
    evoType: "trade",
    gen: 1
  },
  swablu: {
    num: 333,
    name: "Swablu",
    types: ["Normal", "Flying"],
    baseStats: { hp: 45, atk: 40, def: 60, spa: 75, spd: 75, spe: 50 },
    abilities: {},
    heightm: 0.4,
    weightkg: 1.2,
    color: "Blue",
    evos: ["Altaria"],
    gen: 1
  },
  altaria: {
    num: 334,
    name: "Altaria",
    types: ["Normal", "Flying"],
    baseStats: { hp: 75, atk: 70, def: 90, spa: 105, spd: 105, spe: 80 },
    abilities: {},
    heightm: 1.1,
    weightkg: 20.6,
    color: "Blue",
    prevo: "Swablu",
    evoLevel: 35,
    gen: 1
  },
  yveltal: {
    num: 717,
    name: "Yveltal",
    types: ["Poison", "Flying"],
    gender: "N",
    baseStats: { hp: 126, atk: 131, def: 99, spa: 98, spd: 98, spe: 99 },
    abilities: {},
    heightm: 5.8,
    weightkg: 203,
    color: "Red",
    gen: 1
  },
  skarmory: {
    num: 227,
    name: "Skarmory",
    types: ["Rock", "Flying"],
    baseStats: { hp: 65, atk: 80, def: 140, spa: 70, spd: 70, spe: 70 },
    abilities: {},
    heightm: 1.7,
    weightkg: 50.5,
    color: "Gray",
    gen: 1
  },
  tapukoko: {
    num: 785,
    name: "Tapu Koko",
    types: ["Fighting"],
    gender: "N",
    baseStats: { hp: 80, atk: 95, def: 80, spa: 95, spd: 95, spe: 125 },
    abilities: {},
    heightm: 1.8,
    weightkg: 20.5,
    color: "Yellow",
    gen: 1
  },
  cacnea: {
    num: 331,
    name: "Cacnea",
    types: ["Grass"],
    baseStats: { hp: 50, atk: 35, def: 70, spa: 55, spd: 55, spe: 60 },
    abilities: {},
    heightm: 0.4,
    weightkg: 51.3,
    color: "Green",
    evos: ["Cacturne"],
    gen: 1
  },
  cacturne: {
    num: 332,
    name: "Cacturne",
    types: ["Grass"],
    baseStats: { hp: 70, atk: 70, def: 90, spa: 80, spd: 80, spe: 80 },
    abilities: {},
    heightm: 1.3,
    weightkg: 77.4,
    color: "Green",
    prevo: "Cacnea",
    evoLevel: 32,
    gen: 1
  },
  duraludon: {
    num: 884,
    name: "Duraludon",
    types: ["Rock", "Dragon"],
    baseStats: { hp: 70, atk: 95, def: 95, spa: 110, spd: 110, spe: 85 },
    abilities: {},
    heightm: 1.8,
    weightkg: 40,
    color: "White",
    gen: 1
  },
  milcery: {
    num: 868,
    name: "Milcery",
    types: ["Normal", "Ice"],
    gender: "F",
    baseStats: { hp: 55, atk: 40, def: 40, spa: 61, spd: 61, spe: 34 },
    abilities: {},
    heightm: 0.2,
    weightkg: 0.3,
    color: "White",
    evos: ["Alcremie"],
    gen: 1
  },
  alcremie: {
    num: 869,
    name: "Alcremie",
    baseForme: "Vanilla Cream",
    types: ["Normal", "Ice"],
    gender: "F",
    baseStats: { hp: 75, atk: 60, def: 75, spa: 121, spd: 121, spe: 64 },
    abilities: {},
    heightm: 0.3,
    weightkg: 0.5,
    color: "White",
    prevo: "Milcery",
    evoType: "other",
    evoCondition: "spin while holding a Sweet",
    cosmeticFormes: ["Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"],
    formeOrder: ["Alcremie", "Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"],
    gen: 1
  },
  mimikyu: {
    num: 778,
    name: "Mimikyu",
    baseForme: "Disguised",
    types: ["Ghost", "Electric"],
    baseStats: { hp: 55, atk: 54, def: 80, spa: 80, spd: 80, spe: 106 },
    abilities: {},
    heightm: 0.2,
    weightkg: 0.7,
    color: "Yellow",
    otherFormes: ["Mimikyu-Busted"],
    formeOrder: ["Mimikyu", "Mimikyu-Busted"],
    gen: 1
  },
  mimikyubusted: {
    num: 778,
    name: "Mimikyu-Busted",
    baseSpecies: "Mimikyu",
    forme: "Busted",
    types: ["Ghost", "Electric"],
    baseStats: { hp: 55, atk: 54, def: 80, spa: 80, spd: 80, spe: 106 },
    abilities: {},
    heightm: 0.2,
    weightkg: 0.7,
    color: "Yellow",
    eggGroups: ["Amorphous"],
    gen: 1
  },
  stunfiskgalar: {
    num: 618,
    name: "Stunfisk-Galar",
    baseSpecies: "Stunfisk",
    forme: "Galar",
    types: ["Ground", "Electric"],
    baseStats: { hp: 99, atk: 101, def: 99, spa: 75, spd: 75, spe: 52 },
    abilities: {},
    heightm: 0.7,
    weightkg: 20.5,
    color: "Green",
    gen: 1
  },
  zigzagoongalar: {
    num: 263,
    name: "Zigzagoon-Galar",
    baseSpecies: "Zigzagoon",
    forme: "Galar",
    types: ["Ground", "Normal"],
    baseStats: { hp: 41, atk: 30, def: 28, spa: 30, spd: 30, spe: 60 },
    abilities: {},
    heightm: 0.4,
    weightkg: 17.5,
    color: "White",
    evos: ["Linoone-Galar"],
    gen: 1
  },
  linoonegalar: {
    num: 264,
    name: "Linoone-Galar",
    baseSpecies: "Linoone",
    forme: "Galar",
    types: ["Ground", "Normal"],
    baseStats: { hp: 61, atk: 70, def: 68, spa: 50, spd: 50, spe: 100 },
    abilities: {},
    heightm: 0.5,
    weightkg: 32.5,
    color: "White",
    prevo: "Zigzagoon-Galar",
    evoLevel: 20,
    evos: ["Obstagoon"],
    gen: 1
  },
  obstagoon: {
    num: 862,
    name: "Obstagoon",
    types: ["Ground", "Normal"],
    baseStats: { hp: 101, atk: 90, def: 83, spa: 60, spd: 60, spe: 95 },
    abilities: {},
    heightm: 1.6,
    weightkg: 46,
    color: "Gray",
    prevo: "Linoone-Galar",
    evoLevel: 35,
    evoCondition: "at night",
    gen: 1
  },
  oshawott: {
    num: 501,
    name: "Oshawott",
    types: ["Water"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 45, atk: 55, def: 45, spa: 38, spd: 38, spe: 45 },
    abilities: {},
    heightm: 0.5,
    weightkg: 5.9,
    color: "Blue",
    evos: ["Dewott"],
    gen: 1
  },
  dewott: {
    num: 502,
    name: "Dewott",
    types: ["Water"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 65, atk: 75, def: 60, spa: 53, spd: 53, spe: 60 },
    abilities: {},
    heightm: 0.8,
    weightkg: 24.5,
    color: "Blue",
    prevo: "Oshawott",
    evoLevel: 17,
    evos: ["Samurott", "Samurott-Hisui"],
    gen: 1
  },
  samurotthisui: {
    num: 503,
    name: "Samurott-Hisui",
    baseSpecies: "Samurott",
    forme: "Hisui",
    types: ["Water", "Fighting"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 80, atk: 108, def: 80, spa: 72, spd: 72, spe: 85 },
    abilities: {},
    heightm: 1.5,
    weightkg: 58.2,
    color: "Blue",
    prevo: "Dewott",
    evoLevel: 36,
    gen: 1
  },
  riolu: {
    num: 447,
    name: "Riolu",
    types: ["Fighting"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 30, atk: 70, def: 30, spa: 35, spd: 35, spe: 60 },
    abilities: {},
    heightm: 0.7,
    weightkg: 20.2,
    color: "Blue",
    evos: ["Lucario"],
    gen: 1
  },
  lucario: {
    num: 448,
    name: "Lucario",
    types: ["Dragon", "Fighting"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 60, atk: 110, def: 60, spa: 115, spd: 115, spe: 90 },
    abilities: {},
    heightm: 1.2,
    weightkg: 54,
    color: "Blue",
    prevo: "Riolu",
    evoLevel: 25,
    gen: 1
  },
  popplio: {
    num: 728,
    name: "Popplio",
    types: ["Water"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 56, atk: 64, def: 64, spa: 66, spd: 66, spe: 25 },
    abilities: {},
    heightm: 0.4,
    weightkg: 7.5,
    color: "Blue",
    evos: ["Brionne"],
    gen: 1
  },
  brionne: {
    num: 729,
    name: "Brionne",
    types: ["Water"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 66, atk: 79, def: 79, spa: 91, spd: 91, spe: 35 },
    abilities: {},
    heightm: 0.6,
    weightkg: 17.5,
    color: "Blue",
    prevo: "Popplio",
    evoLevel: 17,
    evos: ["Primarina"],
    gen: 1
  },
  primarina: {
    num: 730,
    name: "Primarina",
    types: ["Water", "Ice"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 86, atk: 84, def: 84, spa: 126, spd: 126, spe: 45 },
    abilities: {},
    heightm: 1.8,
    weightkg: 44,
    color: "Blue",
    prevo: "Brionne",
    evoLevel: 34,
    gen: 1
  },
  impidimp: {
    num: 859,
    name: "Impidimp",
    types: ["Poison", "Psychic"],
    gender: "M",
    baseStats: { hp: 45, atk: 55, def: 30, spa: 70, spd: 70, spe: 50 },
    abilities: {},
    heightm: 0.4,
    weightkg: 5.5,
    color: "Pink",
    evos: ["Morgrem"],
    gen: 1
  },
  morgrem: {
    num: 860,
    name: "Morgrem",
    types: ["Poison", "Psychic"],
    gender: "M",
    baseStats: { hp: 65, atk: 70, def: 45, spa: 90, spd: 90, spe: 70 },
    abilities: {},
    heightm: 0.8,
    weightkg: 12.5,
    color: "Pink",
    prevo: "Impidimp",
    evoLevel: 32,
    gen: 1
  },
  grimmsnarl: {
    num: 861,
    name: "Grimmsnarl",
    types: ["Poison", "Psychic"],
    gender: "M",
    baseStats: { hp: 95, atk: 130, def: 65, spa: 110, spd: 110, spe: 60 },
    abilities: {},
    heightm: 1.5,
    weightkg: 61,
    color: "Purple",
    prevo: "Morgrem",
    evoLevel: 42,
    gen: 1
  },
  diglettalola: {
    num: 50,
    name: "Diglett-Alola",
    baseSpecies: "Diglett",
    forme: "Alola",
    types: ["Ground", "Fire"],
    baseStats: { hp: 10, atk: 55, def: 20, spa: 50, spd: 50, spe: 95 },
    abilities: {},
    heightm: 0.2,
    weightkg: 1,
    color: "Brown",
    evos: ["Dugtrio-Alola"],
    gen: 1
  },
  dugtrioalola: {
    num: 51,
    name: "Dugtrio-Alola",
    baseSpecies: "Dugtrio",
    forme: "Alola",
    types: ["Ground", "Fire"],
    baseStats: { hp: 35, atk: 100, def: 50, spa: 75, spd: 75, spe: 115 },
    abilities: {},
    heightm: 0.7,
    weightkg: 66.6,
    color: "Brown",
    prevo: "Diglett-Alola",
    evoLevel: 26,
    gen: 1
  },
  sylveon: {
    num: 700,
    name: "Sylveon",
    types: ["Bug"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 110, atk: 65, def: 65, spa: 130, spd: 130, spe: 60 },
    abilities: {},
    heightm: 1,
    weightkg: 23.5,
    color: "Pink",
    prevo: "Eevee",
    evoType: "levelExtra",
    evoCondition: "with a Bug-type move",
    gen: 1
  },
  houndour: {
    num: 228,
    name: "Houndour",
    types: ["Fire"],
    baseStats: { hp: 45, atk: 60, def: 30, spa: 95, spd: 95, spe: 85 },
    abilities: {},
    heightm: 0.6,
    weightkg: 10.8,
    color: "Black",
    evos: ["Houndoom"],
    gen: 1
  },
  houndoom: {
    num: 229,
    name: "Houndoom",
    types: ["Fire"],
    baseStats: { hp: 75, atk: 90, def: 50, spa: 125, spd: 125, spe: 115 },
    abilities: {},
    heightm: 1.4,
    weightkg: 35,
    color: "Black",
    prevo: "Houndour",
    evoLevel: 24,
    gen: 1
  },
  magnezone: {
    num: 462,
    name: "Magnezone",
    types: ["Electric"],
    gender: "N",
    baseStats: { hp: 70, atk: 70, def: 105, spa: 130, spd: 130, spe: 60 },
    abilities: {},
    heightm: 1.2,
    weightkg: 180,
    color: "Gray",
    prevo: "Magneton",
    evoType: "useItem",
    evoItem: "Thunder Stone",
    gen: 1
  },
  cutiefly: {
    num: 742,
    name: "Cutiefly",
    types: ["Bug", "Psychic"],
    baseStats: { hp: 40, atk: 48, def: 40, spa: 55, spd: 55, spe: 81 },
    abilities: {},
    heightm: 0.1,
    weightkg: 0.2,
    color: "Yellow",
    evos: ["Ribombee"],
    gen: 1
  },
  ribombee: {
    num: 743,
    name: "Ribombee",
    types: ["Bug", "Psychic"],
    baseStats: { hp: 60, atk: 58, def: 60, spa: 95, spd: 95, spe: 121 },
    abilities: {},
    heightm: 0.2,
    weightkg: 0.5,
    color: "Yellow",
    prevo: "Cutiefly",
    evoLevel: 25,
    gen: 1
  },
  zarude: {
    num: 893,
    name: "Zarude",
    types: ["Ground", "Grass"],
    gender: "N",
    baseStats: { hp: 105, atk: 120, def: 105, spa: 70, spd: 70, spe: 105 },
    abilities: {},
    heightm: 1.8,
    weightkg: 70,
    color: "Black",
    gen: 1,
    tags: ["Mythical"],
    otherFormes: ["Zarude-Dada"],
    formeOrder: ["Zarude", "Zarude-Dada"]
  },
  zarudedada: {
    num: 893,
    name: "Zarude-Dada",
    baseSpecies: "Zarude",
    forme: "Dada",
    types: ["Ground", "Grass"],
    gender: "N",
    baseStats: { hp: 105, atk: 120, def: 105, spa: 70, spd: 70, spe: 105 },
    abilities: {},
    heightm: 1.8,
    weightkg: 70,
    color: "Black",
    gen: 1
  },
  piplup: {
    num: 393,
    name: "Piplup",
    types: ["Water"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 53, atk: 51, def: 53, spa: 56, spd: 56, spe: 46 },
    abilities: {},
    heightm: 0.4,
    weightkg: 5.2,
    color: "Blue",
    evos: ["Prinplup"],
    gen: 1
  },
  prinplup: {
    num: 394,
    name: "Prinplup",
    types: ["Water"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 64, atk: 66, def: 68, spa: 76, spd: 76, spe: 56 },
    abilities: {},
    heightm: 0.8,
    weightkg: 23,
    color: "Blue",
    prevo: "Piplup",
    evoLevel: 16,
    evos: ["Empoleon"],
    gen: 1
  },
  empoleon: {
    num: 395,
    name: "Empoleon",
    types: ["Water", "Ground"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 84, atk: 86, def: 88, spa: 101, spd: 101, spe: 66 },
    abilities: {},
    heightm: 1.7,
    weightkg: 84.5,
    color: "Blue",
    prevo: "Prinplup",
    evoLevel: 36,
    gen: 1
  },
  vulpixalola: {
    num: 37,
    name: "Vulpix-Alola",
    baseSpecies: "Vulpix",
    forme: "Alola",
    types: ["Ice"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 38, atk: 41, def: 40, spa: 65, spd: 65, spe: 65 },
    abilities: {},
    heightm: 0.6,
    weightkg: 9.9,
    color: "White",
    evos: ["Ninetales-Alola"],
    gen: 1
  },
  ninetalesalola: {
    num: 38,
    name: "Ninetales-Alola",
    baseSpecies: "Ninetales",
    forme: "Alola",
    types: ["Ice", "Ghost"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 73, atk: 67, def: 75, spa: 100, spd: 100, spe: 109 },
    abilities: {},
    heightm: 1.1,
    weightkg: 19.9,
    color: "Blue",
    prevo: "Vulpix-Alola",
    evoType: "useItem",
    evoItem: "Water Stone",
    gen: 1
  },
  // don't touch
  missingno: {
    inherit: true,
    baseStats: { hp: 33, atk: 136, def: 0, spa: 6, spd: 6, spe: 29 }
  },
  bulbasaur: {
    inherit: true,
    baseStats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 }
  },
  ivysaur: {
    inherit: true,
    baseStats: { hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60 }
  },
  venusaur: {
    inherit: true,
    baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 }
  },
  charmander: {
    inherit: true,
    baseStats: { hp: 39, atk: 52, def: 43, spa: 50, spd: 50, spe: 65 }
  },
  charmeleon: {
    inherit: true,
    baseStats: { hp: 58, atk: 64, def: 58, spa: 65, spd: 65, spe: 80 }
  },
  charizard: {
    inherit: true,
    baseStats: { hp: 78, atk: 84, def: 78, spa: 85, spd: 85, spe: 100 }
  },
  squirtle: {
    inherit: true,
    baseStats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 50, spe: 43 }
  },
  wartortle: {
    inherit: true,
    baseStats: { hp: 59, atk: 63, def: 80, spa: 65, spd: 65, spe: 58 }
  },
  blastoise: {
    inherit: true,
    baseStats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 85, spe: 78 }
  },
  caterpie: {
    inherit: true,
    baseStats: { hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45 }
  },
  metapod: {
    inherit: true,
    baseStats: { hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30 }
  },
  butterfree: {
    inherit: true,
    baseStats: { hp: 60, atk: 45, def: 50, spa: 80, spd: 80, spe: 70 }
  },
  weedle: {
    inherit: true,
    baseStats: { hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50 }
  },
  kakuna: {
    inherit: true,
    baseStats: { hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35 }
  },
  beedrill: {
    inherit: true,
    baseStats: { hp: 65, atk: 80, def: 40, spa: 45, spd: 45, spe: 75 }
  },
  pidgey: {
    inherit: true,
    baseStats: { hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56 }
  },
  pidgeotto: {
    inherit: true,
    baseStats: { hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71 }
  },
  pidgeot: {
    inherit: true,
    baseStats: { hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 91 }
  },
  rattata: {
    inherit: true,
    baseStats: { hp: 30, atk: 56, def: 35, spa: 25, spd: 25, spe: 72 }
  },
  raticate: {
    inherit: true,
    baseStats: { hp: 55, atk: 81, def: 60, spa: 50, spd: 50, spe: 97 }
  },
  spearow: {
    inherit: true,
    baseStats: { hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70 }
  },
  fearow: {
    inherit: true,
    baseStats: { hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100 }
  },
  ekans: {
    inherit: true,
    baseStats: { hp: 35, atk: 60, def: 44, spa: 40, spd: 40, spe: 55 }
  },
  arbok: {
    inherit: true,
    baseStats: { hp: 60, atk: 85, def: 69, spa: 65, spd: 65, spe: 80 }
  },
  pikachu: {
    inherit: true,
    baseStats: { hp: 35, atk: 55, def: 30, spa: 50, spd: 50, spe: 90 }
  },
  raichu: {
    inherit: true,
    baseStats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 90, spe: 100 }
  },
  sandshrew: {
    inherit: true,
    baseStats: { hp: 50, atk: 75, def: 85, spa: 30, spd: 30, spe: 40 }
  },
  sandslash: {
    inherit: true,
    baseStats: { hp: 75, atk: 100, def: 110, spa: 55, spd: 55, spe: 65 }
  },
  nidoranf: {
    inherit: true,
    baseStats: { hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41 }
  },
  nidorina: {
    inherit: true,
    baseStats: { hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56 }
  },
  nidoqueen: {
    inherit: true,
    baseStats: { hp: 90, atk: 82, def: 87, spa: 75, spd: 75, spe: 76 }
  },
  nidoranm: {
    inherit: true,
    baseStats: { hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50 }
  },
  nidorino: {
    inherit: true,
    baseStats: { hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65 }
  },
  nidoking: {
    inherit: true,
    baseStats: { hp: 81, atk: 92, def: 77, spa: 75, spd: 75, spe: 85 }
  },
  clefairy: {
    inherit: true,
    baseStats: { hp: 70, atk: 45, def: 48, spa: 60, spd: 60, spe: 35 }
  },
  clefable: {
    inherit: true,
    baseStats: { hp: 95, atk: 70, def: 73, spa: 85, spd: 85, spe: 60 }
  },
  vulpix: {
    inherit: true,
    baseStats: { hp: 38, atk: 41, def: 40, spa: 65, spd: 65, spe: 65 }
  },
  ninetales: {
    inherit: true,
    baseStats: { hp: 73, atk: 76, def: 75, spa: 100, spd: 100, spe: 100 }
  },
  jigglypuff: {
    inherit: true,
    baseStats: { hp: 115, atk: 45, def: 20, spa: 25, spd: 25, spe: 20 }
  },
  wigglytuff: {
    inherit: true,
    baseStats: { hp: 140, atk: 70, def: 45, spa: 50, spd: 50, spe: 45 }
  },
  zubat: {
    inherit: true,
    baseStats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 55 }
  },
  golbat: {
    inherit: true,
    baseStats: { hp: 75, atk: 80, def: 70, spa: 75, spd: 75, spe: 90 }
  },
  oddish: {
    inherit: true,
    baseStats: { hp: 45, atk: 50, def: 55, spa: 75, spd: 75, spe: 30 }
  },
  gloom: {
    inherit: true,
    baseStats: { hp: 60, atk: 65, def: 70, spa: 85, spd: 85, spe: 40 }
  },
  vileplume: {
    inherit: true,
    baseStats: { hp: 75, atk: 80, def: 85, spa: 100, spd: 100, spe: 50 }
  },
  paras: {
    inherit: true,
    baseStats: { hp: 35, atk: 70, def: 55, spa: 55, spd: 55, spe: 25 }
  },
  parasect: {
    inherit: true,
    baseStats: { hp: 60, atk: 95, def: 80, spa: 80, spd: 80, spe: 30 }
  },
  venonat: {
    inherit: true,
    baseStats: { hp: 60, atk: 55, def: 50, spa: 40, spd: 40, spe: 45 }
  },
  venomoth: {
    inherit: true,
    baseStats: { hp: 70, atk: 65, def: 60, spa: 90, spd: 90, spe: 90 }
  },
  diglett: {
    inherit: true,
    baseStats: { hp: 10, atk: 55, def: 25, spa: 45, spd: 45, spe: 95 }
  },
  dugtrio: {
    inherit: true,
    baseStats: { hp: 35, atk: 80, def: 50, spa: 70, spd: 70, spe: 120 }
  },
  meowth: {
    inherit: true,
    baseStats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90 }
  },
  persian: {
    inherit: true,
    baseStats: { hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115 }
  },
  psyduck: {
    inherit: true,
    baseStats: { hp: 50, atk: 52, def: 48, spa: 50, spd: 50, spe: 55 }
  },
  golduck: {
    inherit: true,
    baseStats: { hp: 80, atk: 82, def: 78, spa: 80, spd: 80, spe: 85 }
  },
  mankey: {
    inherit: true,
    baseStats: { hp: 40, atk: 80, def: 35, spa: 35, spd: 35, spe: 70 }
  },
  primeape: {
    inherit: true,
    baseStats: { hp: 65, atk: 105, def: 60, spa: 60, spd: 60, spe: 95 }
  },
  growlithe: {
    inherit: true,
    baseStats: { hp: 55, atk: 70, def: 45, spa: 50, spd: 50, spe: 60 }
  },
  arcanine: {
    inherit: true,
    baseStats: { hp: 90, atk: 110, def: 80, spa: 80, spd: 80, spe: 95 }
  },
  poliwag: {
    inherit: true,
    baseStats: { hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90 }
  },
  poliwhirl: {
    inherit: true,
    baseStats: { hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90 }
  },
  poliwrath: {
    inherit: true,
    baseStats: { hp: 90, atk: 85, def: 95, spa: 70, spd: 70, spe: 70 }
  },
  abra: {
    inherit: true,
    baseStats: { hp: 25, atk: 20, def: 15, spa: 105, spd: 105, spe: 90 }
  },
  kadabra: {
    inherit: true,
    baseStats: { hp: 40, atk: 35, def: 30, spa: 120, spd: 120, spe: 105 }
  },
  alakazam: {
    inherit: true,
    baseStats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 135, spe: 120 }
  },
  machop: {
    inherit: true,
    baseStats: { hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35 }
  },
  machoke: {
    inherit: true,
    baseStats: { hp: 80, atk: 100, def: 70, spa: 50, spd: 50, spe: 45 }
  },
  machamp: {
    inherit: true,
    baseStats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 65, spe: 55 }
  },
  bellsprout: {
    inherit: true,
    baseStats: { hp: 50, atk: 75, def: 35, spa: 70, spd: 70, spe: 40 }
  },
  weepinbell: {
    inherit: true,
    baseStats: { hp: 65, atk: 90, def: 50, spa: 85, spd: 85, spe: 55 }
  },
  victreebel: {
    inherit: true,
    baseStats: { hp: 80, atk: 105, def: 65, spa: 100, spd: 100, spe: 70 }
  },
  tentacool: {
    inherit: true,
    baseStats: { hp: 40, atk: 40, def: 35, spa: 100, spd: 100, spe: 70 }
  },
  tentacruel: {
    inherit: true,
    baseStats: { hp: 80, atk: 70, def: 65, spa: 120, spd: 120, spe: 100 }
  },
  geodude: {
    inherit: true,
    baseStats: { hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 }
  },
  graveler: {
    inherit: true,
    baseStats: { hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 }
  },
  golem: {
    inherit: true,
    baseStats: { hp: 80, atk: 110, def: 130, spa: 55, spd: 55, spe: 45 }
  },
  ponyta: {
    inherit: true,
    baseStats: { hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90 }
  },
  rapidash: {
    inherit: true,
    baseStats: { hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105 }
  },
  slowpoke: {
    inherit: true,
    baseStats: { hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15 }
  },
  slowbro: {
    inherit: true,
    baseStats: { hp: 95, atk: 75, def: 110, spa: 80, spd: 80, spe: 30 }
  },
  magnemite: {
    inherit: true,
    types: ["Electric"],
    baseStats: { hp: 25, atk: 35, def: 70, spa: 95, spd: 95, spe: 45 }
  },
  magneton: {
    inherit: true,
    types: ["Electric"],
    baseStats: { hp: 50, atk: 60, def: 95, spa: 120, spd: 120, spe: 70 },
    evos: ["Magnezone"]
  },
  farfetchd: {
    inherit: true,
    baseStats: { hp: 52, atk: 65, def: 55, spa: 58, spd: 58, spe: 60 }
  },
  doduo: {
    inherit: true,
    baseStats: { hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75 }
  },
  dodrio: {
    inherit: true,
    baseStats: { hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 100 }
  },
  seel: {
    inherit: true,
    baseStats: { hp: 65, atk: 45, def: 55, spa: 70, spd: 70, spe: 45 }
  },
  dewgong: {
    inherit: true,
    baseStats: { hp: 90, atk: 70, def: 80, spa: 95, spd: 95, spe: 70 }
  },
  grimer: {
    inherit: true,
    baseStats: { hp: 80, atk: 80, def: 50, spa: 40, spd: 40, spe: 25 }
  },
  muk: {
    inherit: true,
    baseStats: { hp: 105, atk: 105, def: 75, spa: 65, spd: 65, spe: 50 }
  },
  shellder: {
    inherit: true,
    baseStats: { hp: 30, atk: 65, def: 100, spa: 45, spd: 45, spe: 40 }
  },
  cloyster: {
    inherit: true,
    baseStats: { hp: 50, atk: 95, def: 180, spa: 85, spd: 85, spe: 70 }
  },
  gastly: {
    inherit: true,
    baseStats: { hp: 30, atk: 35, def: 30, spa: 100, spd: 100, spe: 80 }
  },
  haunter: {
    inherit: true,
    baseStats: { hp: 45, atk: 50, def: 45, spa: 115, spd: 115, spe: 95 }
  },
  gengar: {
    inherit: true,
    baseStats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 130, spe: 110 }
  },
  onix: {
    inherit: true,
    baseStats: { hp: 35, atk: 45, def: 160, spa: 30, spd: 30, spe: 70 },
    evos: ["Steelix"]
  },
  drowzee: {
    inherit: true,
    baseStats: { hp: 60, atk: 48, def: 45, spa: 90, spd: 90, spe: 42 }
  },
  hypno: {
    inherit: true,
    baseStats: { hp: 85, atk: 73, def: 70, spa: 115, spd: 115, spe: 67 }
  },
  krabby: {
    inherit: true,
    baseStats: { hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50 }
  },
  kingler: {
    inherit: true,
    baseStats: { hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 }
  },
  voltorb: {
    inherit: true,
    baseStats: { hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100 }
  },
  electrode: {
    inherit: true,
    baseStats: { hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 140 }
  },
  exeggcute: {
    inherit: true,
    baseStats: { hp: 60, atk: 40, def: 80, spa: 60, spd: 60, spe: 40 }
  },
  exeggutor: {
    inherit: true,
    baseStats: { hp: 95, atk: 95, def: 85, spa: 125, spd: 125, spe: 55 }
  },
  cubone: {
    inherit: true,
    baseStats: { hp: 50, atk: 50, def: 95, spa: 40, spd: 40, spe: 35 }
  },
  marowak: {
    inherit: true,
    baseStats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 50, spe: 45 }
  },
  hitmonlee: {
    inherit: true,
    baseStats: { hp: 50, atk: 120, def: 53, spa: 35, spd: 35, spe: 87 }
  },
  hitmonchan: {
    inherit: true,
    baseStats: { hp: 50, atk: 105, def: 79, spa: 35, spd: 35, spe: 76 }
  },
  lickitung: {
    inherit: true,
    baseStats: { hp: 90, atk: 55, def: 75, spa: 60, spd: 60, spe: 30 }
  },
  koffing: {
    inherit: true,
    baseStats: { hp: 40, atk: 65, def: 95, spa: 60, spd: 60, spe: 35 }
  },
  weezing: {
    inherit: true,
    baseStats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 85, spe: 60 }
  },
  rhyhorn: {
    inherit: true,
    baseStats: { hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25 }
  },
  rhydon: {
    inherit: true,
    baseStats: { hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40 }
  },
  chansey: {
    inherit: true,
    baseStats: { hp: 250, atk: 5, def: 5, spa: 105, spd: 105, spe: 50 }
  },
  tangela: {
    inherit: true,
    baseStats: { hp: 65, atk: 55, def: 115, spa: 100, spd: 100, spe: 60 }
  },
  kangaskhan: {
    inherit: true,
    baseStats: { hp: 105, atk: 95, def: 80, spa: 40, spd: 40, spe: 90 }
  },
  horsea: {
    inherit: true,
    baseStats: { hp: 30, atk: 40, def: 70, spa: 70, spd: 70, spe: 60 }
  },
  seadra: {
    inherit: true,
    baseStats: { hp: 55, atk: 65, def: 95, spa: 95, spd: 95, spe: 85 }
  },
  goldeen: {
    inherit: true,
    baseStats: { hp: 45, atk: 67, def: 60, spa: 50, spd: 50, spe: 63 }
  },
  seaking: {
    inherit: true,
    baseStats: { hp: 80, atk: 92, def: 65, spa: 80, spd: 80, spe: 68 }
  },
  staryu: {
    inherit: true,
    baseStats: { hp: 30, atk: 45, def: 55, spa: 70, spd: 70, spe: 85 }
  },
  starmie: {
    inherit: true,
    baseStats: { hp: 60, atk: 75, def: 85, spa: 100, spd: 100, spe: 115 }
  },
  mrmime: {
    inherit: true,
    baseStats: { hp: 40, atk: 45, def: 65, spa: 100, spd: 100, spe: 90 }
  },
  scyther: {
    inherit: true,
    baseStats: { hp: 70, atk: 110, def: 80, spa: 55, spd: 55, spe: 105 },
    evos: ["Scizor"]
  },
  jynx: {
    inherit: true,
    baseStats: { hp: 65, atk: 50, def: 35, spa: 95, spd: 95, spe: 95 }
  },
  electabuzz: {
    inherit: true,
    baseStats: { hp: 65, atk: 83, def: 57, spa: 85, spd: 85, spe: 105 }
  },
  magmar: {
    inherit: true,
    baseStats: { hp: 65, atk: 95, def: 57, spa: 85, spd: 85, spe: 93 }
  },
  pinsir: {
    inherit: true,
    baseStats: { hp: 65, atk: 125, def: 100, spa: 55, spd: 55, spe: 85 }
  },
  tauros: {
    inherit: true,
    baseStats: { hp: 75, atk: 100, def: 95, spa: 70, spd: 70, spe: 110 }
  },
  magikarp: {
    inherit: true,
    baseStats: { hp: 20, atk: 10, def: 55, spa: 20, spd: 20, spe: 80 }
  },
  gyarados: {
    inherit: true,
    baseStats: { hp: 95, atk: 125, def: 79, spa: 100, spd: 100, spe: 81 }
  },
  lapras: {
    inherit: true,
    baseStats: { hp: 130, atk: 85, def: 80, spa: 95, spd: 95, spe: 60 }
  },
  ditto: {
    inherit: true,
    baseStats: { hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48 }
  },
  eevee: {
    inherit: true,
    baseStats: { hp: 55, atk: 55, def: 50, spa: 65, spd: 65, spe: 55 },
    evos: ["Vaporeon", "Jolteon", "Flareon", "Sylveon"]
  },
  vaporeon: {
    inherit: true,
    baseStats: { hp: 130, atk: 65, def: 60, spa: 110, spd: 110, spe: 65 }
  },
  jolteon: {
    inherit: true,
    baseStats: { hp: 65, atk: 65, def: 60, spa: 110, spd: 110, spe: 130 }
  },
  flareon: {
    inherit: true,
    baseStats: { hp: 65, atk: 130, def: 60, spa: 110, spd: 110, spe: 65 }
  },
  porygon: {
    inherit: true,
    baseStats: { hp: 65, atk: 60, def: 70, spa: 75, spd: 75, spe: 40 }
  },
  omanyte: {
    inherit: true,
    baseStats: { hp: 35, atk: 40, def: 100, spa: 90, spd: 90, spe: 35 }
  },
  omastar: {
    inherit: true,
    baseStats: { hp: 70, atk: 60, def: 125, spa: 115, spd: 115, spe: 55 }
  },
  kabuto: {
    inherit: true,
    baseStats: { hp: 30, atk: 80, def: 90, spa: 45, spd: 45, spe: 55 }
  },
  kabutops: {
    inherit: true,
    baseStats: { hp: 60, atk: 115, def: 105, spa: 70, spd: 70, spe: 80 }
  },
  aerodactyl: {
    inherit: true,
    baseStats: { hp: 80, atk: 105, def: 65, spa: 60, spd: 60, spe: 130 }
  },
  snorlax: {
    inherit: true,
    baseStats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 65, spe: 30 }
  },
  articuno: {
    inherit: true,
    baseStats: { hp: 90, atk: 85, def: 100, spa: 125, spd: 125, spe: 85 }
  },
  zapdos: {
    inherit: true,
    baseStats: { hp: 90, atk: 90, def: 85, spa: 125, spd: 125, spe: 100 }
  },
  moltres: {
    inherit: true,
    baseStats: { hp: 90, atk: 100, def: 90, spa: 125, spd: 125, spe: 90 }
  },
  dratini: {
    inherit: true,
    baseStats: { hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50 }
  },
  dragonair: {
    inherit: true,
    baseStats: { hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70 }
  },
  dragonite: {
    inherit: true,
    baseStats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 }
  },
  mewtwo: {
    inherit: true,
    baseStats: { hp: 106, atk: 110, def: 90, spa: 154, spd: 154, spe: 130 }
  },
  mew: {
    inherit: true,
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 }
  }
};
//# sourceMappingURL=pokedex.js.map
