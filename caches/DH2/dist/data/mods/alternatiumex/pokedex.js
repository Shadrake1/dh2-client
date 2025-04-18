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
  decidueyehermit: {
    num: 724,
    name: "Decidueye-Hermit",
    types: ["Grass", "Ghost"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 78, atk: 107, def: 100, spa: 70, spd: 100, spe: 80 },
    abilities: { 0: "Overgrow", 1: "Flower Veil", H: "Soul Reap" },
    heightm: 1.6,
    weightkg: 36.6
  },
  decidueyeautumn: {
    num: 724,
    name: "Decidueye-Autumn",
    types: ["Fire", "Fighting"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 80, atk: 110, def: 70, spa: 110, spd: 70, spe: 105 },
    abilities: { 0: "Moxie", H: "Victory Star" },
    heightm: 1.6,
    weightkg: 36.6
  },
  typhlosionexplosive: {
    num: 157,
    name: "Typhlosion-Explosive",
    types: ["Fire", "Ground"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 73, atk: 104, def: 82, spa: 90, spd: 85, spe: 120 },
    abilities: { 0: "Flash Fire", 1: "Flame Body", H: "Regenerator" },
    heightm: 1.7,
    weightkg: 79.5
  },
  typhlosionwarlock: {
    num: 157,
    name: "Typhlosion-Warlock",
    types: ["Fire", "Ghost"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 83, atk: 69, def: 88, spa: 100, spd: 80, spe: 115 },
    abilities: { 0: "Blaze", 1: "Flame Body", H: "Immolation" },
    heightm: 1.7,
    weightkg: 79.5
  },
  samurottfoamy: {
    num: 503,
    name: "Samurott-Foamy",
    types: ["Water", "Psychic"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 108, atk: 65, def: 90, spa: 100, spd: 105, spe: 75 },
    abilities: { 0: "Torrent", H: "Poison Heal" },
    heightm: 1.5,
    weightkg: 94.6
  },
  samurottrogue: {
    num: 503,
    name: "Samurott-Rogue",
    types: ["Water", "Dark"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 90, atk: 118, def: 80, spa: 95, spd: 77, spe: 80 },
    abilities: { 0: "Torrent", 1: "Water Veil", H: "Defiant" },
    heightm: 1.5,
    weightkg: 94.6
  },
  oricorio: {
    num: 741,
    name: "Oricorio",
    types: ["Flying", "Fire"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 85, atk: 110, def: 75, spa: 85, spd: 100, spe: 95 },
    abilities: { 0: "Dancer", H: "Victory Star" },
    heightm: 0.6,
    weightkg: 3.4,
    otherFormes: null,
    formeOrder: null
  },
  oricoriocheerleader: {
    num: 741,
    name: "Oricorio-Cheerleader",
    types: ["Electric", "Flying"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 85, atk: 118, def: 105, spa: 70, spd: 80, spe: 93 },
    abilities: { 0: "Dancer", H: "Staccato" },
    heightm: 0.6,
    weightkg: 3.4
  },
  oricoriopau: {
    num: 741,
    name: "Oricorio-Pa'u",
    types: ["Grass", "Fairy"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 100, atk: 75, def: 90, spa: 110, spd: 90, spe: 75 },
    abilities: { 0: "Dancer", H: "Grassy Surge" },
    heightm: 0.6,
    weightkg: 3.4,
    otherFormes: null,
    formeOrder: null,
    baseSpecies: null,
    changesFrom: null
  },
  horrorcorio: {
    num: 741,
    name: "Horrorcorio",
    types: ["Ghost", "Flying"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 95, atk: 70, def: 70, spa: 118, spd: 100, spe: 83 },
    abilities: { 0: "Necro Dancer" },
    heightm: 0.6,
    weightkg: 3.4
  },
  pikachukanto: {
    num: 25,
    name: "Pikachu-Kanto",
    types: ["Electric"],
    gender: "M",
    baseStats: { hp: 80, atk: 100, def: 80, spa: 90, spd: 90, spe: 100 },
    abilities: { 0: "Electric Fusion" },
    heightm: 0.4,
    weightkg: 6
  },
  pikachuhoenn: {
    num: 25,
    name: "Pikachu-Hoenn",
    types: ["Dark", "Steel"],
    gender: "M",
    baseStats: { hp: 74, atk: 105, def: 75, spa: 60, spd: 70, spe: 116 },
    abilities: { 0: "Intimidate", H: "Water Absorb" },
    heightm: 0.4,
    weightkg: 6
  },
  pikachusinnoh: {
    num: 25,
    name: "Pikachu-Sinnoh",
    types: ["Normal", "Fairy"],
    gender: "M",
    baseStats: { hp: 70, atk: 110, def: 60, spa: 80, spd: 60, spe: 140 },
    abilities: { 0: "Dazzling" },
    heightm: 0.4,
    weightkg: 6
  },
  pikachuunova: {
    num: 25,
    name: "Pikachu-Unova",
    types: ["Water", "Poison"],
    gender: "M",
    baseStats: { hp: 85, atk: 55, def: 95, spa: 50, spd: 80, spe: 75 },
    abilities: { 0: "Infiltrator", H: "Regenerator" },
    heightm: 0.4,
    weightkg: 6
  },
  pikachutactic: {
    num: 25,
    name: "Pikachu-Tactic",
    types: ["Steel"],
    gender: "M",
    baseStats: { hp: 90, atk: 100, def: 120, spa: 100, spd: 90, spe: 20 },
    abilities: { 0: "Comatose", H: "Analytic" },
    heightm: 0.4,
    weightkg: 6
  },
  pikachualola: {
    num: 25,
    name: "Pikachu-Alola",
    types: ["Dragon", "Ghost"],
    gender: "M",
    baseStats: { hp: 80, atk: 95, def: 75, spa: 95, spd: 90, spe: 80 },
    abilities: { 0: "Steelworker", H: "Surge Surfer" },
    heightm: 0.4,
    weightkg: 6
  },
  pikachuworld: {
    num: 25,
    name: "Pikachu-World",
    types: ["Electric"],
    gender: "M",
    baseStats: { hp: 80, atk: 100, def: 70, spa: 100, spd: 70, spe: 117 },
    abilities: { 0: "Pastel Veil", H: "Libero" },
    heightm: 0.4,
    weightkg: 6
  },
  ribombee: {
    inherit: true,
    num: 743,
    name: "Ribombee",
    types: ["Bug", "Psychic"],
    baseStats: { hp: 80, atk: 85, def: 75, spa: 105, spd: 75, spe: 125 },
    abilities: { 0: "Swarm", 1: "Aroma Veil", H: "Filter" },
    heightm: 0.2,
    weightkg: 0.5,
    otherFormes: null,
    formeOrder: null
  },
  ribombeetotem: {
    inherit: true,
    num: 743,
    name: "Ribombee-Totem",
    types: ["Grass", "Poison"],
    baseStats: { hp: 70, atk: 65, def: 115, spa: 110, spd: 90, spe: 64 },
    abilities: { 0: "Honey Gather", 1: "Swarm", H: "Poison Point" },
    heightm: 0.4,
    weightkg: 2,
    otherFormes: null,
    formeOrder: null,
    baseSpecies: null
  },
  araquanid: {
    inherit: true,
    num: 752,
    name: "Araquanid",
    types: ["Bug", "Water"],
    baseStats: { hp: 75, atk: 75, def: 80, spa: 75, spd: 110, spe: 105 },
    abilities: { 0: "Water Bubble", H: "Water Absorb" },
    heightm: 1.8,
    weightkg: 82,
    otherFormes: null,
    formeOrder: null
  },
  araquanidtotem: {
    inherit: true,
    num: 752,
    name: "Araquanid-Totem",
    types: ["Poison", "Flying"],
    baseStats: { hp: 84, atk: 65, def: 122, spa: 110, spd: 87, spe: 57 },
    abilities: { 0: "Water Bubble", H: "Water Absorb" },
    heightm: 3.1,
    weightkg: 217.5,
    otherFormes: null,
    formeOrder: null,
    baseSpecies: null
  },
  vikavolt: {
    inherit: true,
    num: 738,
    name: "Vikavolt",
    types: ["Steel", "Electric"],
    baseStats: { hp: 85, atk: 110, def: 90, spa: 70, spd: 90, spe: 100 },
    abilities: { 0: "Levitate", H: "Rough Skin" },
    heightm: 1.5,
    weightkg: 45,
    otherFormes: null,
    formeOrder: null
  },
  vikavolttotem: {
    inherit: true,
    num: 738,
    name: "Vikavolt-Totem",
    types: ["Bug", "Electric"],
    baseStats: { hp: 70, atk: 125, def: 85, spa: 45, spd: 95, spe: 80 },
    abilities: { 0: "Magic Guard" },
    heightm: 2.6,
    weightkg: 147.5,
    otherFormes: null,
    formeOrder: null,
    baseSpecies: null
  },
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
  urshifuerosion: {
    num: 892,
    name: "Urshifu-Erosion",
    types: ["Water"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 105, atk: 95, def: 80, spa: 90, spd: 85, spe: 70 },
    abilities: { 0: "Magic Guard" },
    heightm: 1.9,
    weightkg: 105
  },
  calyrexmythic: {
    num: 898,
    name: "Calyrex-Mythic",
    types: ["Dragon", "Fairy"],
    gender: "N",
    baseStats: { hp: 100, atk: 90, def: 90, spa: 90, spd: 90, spe: 80 },
    abilities: { 0: "Dazzling", 1: "Aroma Veil", H: "Rubber Armor" },
    heightm: 1.1,
    weightkg: 7.7
  },
  calyrexglacier: {
    num: 898,
    name: "Calyrex-Glacier",
    types: ["Ice", "Ground"],
    gender: "N",
    baseStats: { hp: 75, atk: 120, def: 110, spa: 75, spd: 110, spe: 50 },
    abilities: { 0: "As One (Glastrier)" },
    heightm: 2.4,
    weightkg: 809.1
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
  kommoo: {
    num: 784,
    name: "Kommo-o",
    types: ["Dragon", "Rock"],
    baseStats: { hp: 75, atk: 110, def: 85, spa: 80, spd: 85, spe: 90 },
    abilities: { 0: "Iron Fist", 1: "Tactician", H: "Excavate" },
    heightm: 1.6,
    weightkg: 78.2,
    otherFormes: null,
    formeOrder: null
  },
  rockmoo: {
    num: 784,
    name: "Rockmo-o",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 95, atk: 100, def: 95, spa: 100, spd: 70, spe: 65 },
    abilities: { 0: "Dauntless Shield", H: "Punk Rock" },
    heightm: 2.4,
    weightkg: 207.5
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
  salazzleruler: {
    num: 758,
    name: "Salazzle-Ruler",
    types: ["Poison", "Rock"],
    gender: "F",
    baseStats: { hp: 75, atk: 110, def: 60, spa: 104, spd: 61, spe: 110 },
    abilities: { 0: "Corrosion", 1: "Queenly Majesty", H: "Tough Claws" },
    heightm: 2.1,
    weightkg: 81
  },
  lurantis: {
    num: 754,
    name: "Lurantis",
    types: ["Fighting"],
    baseStats: { hp: 90, atk: 125, def: 90, spa: 40, spd: 90, spe: 90 },
    abilities: { 0: "Exoskelett" },
    heightm: 0.9,
    weightkg: 18.5,
    otherFormes: null,
    formeOrder: null
  },
  lurantio: {
    num: 754,
    name: "Lurantio",
    types: ["Fairy", "Steel"],
    baseStats: { hp: 100, atk: 75, def: 95, spa: 85, spd: 95, spe: 60 },
    abilities: { 0: "Intrepid Sword", H: "Magic Guard" },
    heightm: 1.5,
    weightkg: 58
  },
  mrmime: {
    num: 122,
    name: "Mr. Mime",
    types: ["Normal", "Fairy"],
    baseStats: { hp: 65, atk: 65, def: 80, spa: 80, spd: 130, spe: 80 },
    abilities: { 0: "Filter", 1: "Prankster", H: "Tinted Lens" },
    heightm: 1.3,
    weightkg: 54.5
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
  stunfisk: {
    num: 618,
    name: "Stunfisk",
    types: ["Ground"],
    baseStats: { hp: 109, atk: 76, def: 99, spa: 100, spd: 84, spe: 32 },
    abilities: { 0: "Static", H: "Transistor" },
    heightm: 0.7,
    weightkg: 11
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
  necrozma: {
    num: 800,
    name: "Necrozma",
    types: ["Psychic"],
    gender: "N",
    baseStats: { hp: 113, atk: 101, def: 73, spa: 101, spd: 73, spe: 89 },
    abilities: { 0: "Light Armor" },
    heightm: 2.4,
    weightkg: 230,
    otherFormes: null,
    formeOrder: null
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
  necrozmadragon: {
    num: 800,
    name: "Necrozma-Dragon",
    types: ["Dragon"],
    gender: "N",
    baseStats: { hp: 83, atk: 127, def: 83, spa: 97, spd: 89, spe: 101 },
    abilities: { 0: "Neuroforce" },
    heightm: 7.5,
    weightkg: 230
  },
  braviarypatriot: {
    num: 628,
    name: "Braviary-Patriot",
    types: ["Normal", "Flying"],
    gender: "M",
    baseStats: { hp: 105, atk: 120, def: 75, spa: 87, spd: 75, spe: 75 },
    abilities: { 0: "Defiant", 1: "Sheer Force", H: "Battle-Scarred" },
    heightm: 1.5,
    weightkg: 41
  },
  braviaryhisui: {
    num: 628,
    name: "Braviary-Hisui",
    types: ["Psychic", "Fire"],
    gender: "M",
    baseStats: { hp: 100, atk: 83, def: 80, spa: 112, spd: 100, spe: 55 },
    abilities: { 0: "Levitate", H: "Psychic Surge" },
    heightm: 1.7,
    weightkg: 43.4,
    baseSpecies: null,
    forme: null
  },
  lilligantbard: {
    num: 549,
    name: "Lilligant-Bard",
    types: ["Grass"],
    gender: "F",
    baseStats: { hp: 70, atk: 80, def: 75, spa: 110, spd: 75, spe: 90 },
    abilities: { 0: "Dancer", 1: "Aroma Veil", H: "Queenly Majesty" },
    heightm: 1.1,
    weightkg: 16.3
  },
  mistlegant: {
    num: 549,
    name: "Mistlegant",
    types: ["Grass", "Ice"],
    gender: "F",
    baseStats: { hp: 70, atk: 75, def: 75, spa: 115, spd: 75, spe: 130 },
    abilities: { 0: "Victory Star", 1: "Mountaineer", H: "Competitive" },
    heightm: 1.2,
    weightkg: 19.2
  },
  electrodescrewball: {
    num: 101,
    name: "Electrode-Screwball",
    types: ["Electric", "Dark"],
    gender: "N",
    baseStats: { hp: 75, atk: 90, def: 95, spa: 90, spd: 105, spe: 85 },
    abilities: { 0: "Bulletproof", 1: "Infiltrator", H: "Aftermath" },
    heightm: 1.2,
    weightkg: 66.6
  },
  electroderingo: {
    num: 101,
    name: "Electrode-Ringo",
    types: ["Electric", "Grass"],
    gender: "N",
    baseStats: { hp: 80, atk: 105, def: 75, spa: 95, spd: 70, spe: 125 },
    abilities: { 0: "Harvest", 1: "Regenerator", H: "Aftermath" },
    heightm: 1.2,
    weightkg: 71
  },
  persianbandit: {
    num: 53,
    name: "Persian-Bandit",
    types: ["Normal", "Fighting"],
    baseStats: { hp: 84, atk: 101, def: 64, spa: 106, spd: 64, spe: 111 },
    abilities: { 0: "Limber", 1: "Technician", H: "No Guard" },
    heightm: 1,
    weightkg: 32
  },
  persianomen: {
    num: 53,
    name: "Persian-Omen",
    types: ["Dark", "Bug"],
    baseStats: { hp: 95, atk: 90, def: 70, spa: 65, spd: 65, spe: 115 },
    abilities: { 0: "Fur Coat", 1: "Technician", H: "Rattled" },
    heightm: 1.1,
    weightkg: 33,
    prevo: "Meowth-Alola"
  },
  meowsticuntethered: {
    num: 678,
    name: "Meowstic-Untethered",
    types: ["Psychic", "Ground"],
    gender: "M",
    baseStats: { hp: 84, atk: 78, def: 91, spa: 118, spd: 81, spe: 99 },
    abilities: { 0: "Grounding" },
    heightm: 0.6,
    weightkg: 8.5,
    prevo: "Espurr"
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
  indeedeedevil: {
    num: 876,
    name: "Indeedee-Devil",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 85, atk: 120, def: 95, spa: 80, spd: 75, spe: 45 },
    abilities: { 0: "Cursed Body", 1: "Synchronize", H: "Technician" },
    heightm: 0.9,
    weightkg: 28
  },
  indeedeeangel: {
    num: 876,
    name: "Indeedee-Angel",
    types: ["Normal", "Fairy"],
    baseStats: { hp: 80, atk: 45, def: 120, spa: 95, spd: 75, spe: 85 },
    abilities: { 0: "Natural Cure", 1: "Synchronize", H: "Unaware" },
    heightm: 0.9,
    weightkg: 28
  },
  polteageist: {
    num: 855,
    name: "Polteageist",
    types: ["Ghost", "Poison"],
    baseStats: { hp: 60, atk: 85, def: 65, spa: 114, spd: 124, spe: 60 },
    abilities: { 0: "Levitate", H: "Unburden" },
    heightm: 0.2,
    weightkg: 0.4,
    otherFormes: null,
    formeOrder: null
  },
  polteageistantique: {
    num: 855,
    name: "Polteageist-Antique",
    types: ["Rock", "Ice"],
    baseStats: { hp: 71, atk: 89, def: 85, spa: 89, spd: 85, spe: 91 },
    abilities: { 0: "Solid Rock", 1: "Slush Rush", H: "Snow Cloak" },
    heightm: 0.2,
    weightkg: 0.4,
    otherFormes: null,
    formeOrder: null,
    baseSpecies: null,
    changesFrom: null
  },
  toxtricityrockstar: {
    num: 849,
    name: "Toxtricity-Rock-Star",
    types: ["Electric", "Fighting"],
    baseStats: { hp: 100, atk: 113, def: 80, spa: 88, spd: 80, spe: 75 },
    abilities: { 0: "Iron Fist", 1: "Plus", H: "Volt Absorb" },
    heightm: 1.6,
    weightkg: 40
  },
  toxtricitylowkey: {
    num: 849,
    name: "Toxtricity-Low-Key",
    types: ["Electric", "Dragon"],
    baseStats: { hp: 102, atk: 92, def: 70, spa: 102, spd: 70, spe: 106 },
    abilities: { 0: "Infiltrator", 1: "Lightning Rod", H: "Energy Loop" },
    heightm: 1.6,
    weightkg: 40
  },
  articunomistral: {
    num: 144,
    name: "Articuno-Mistral",
    types: ["Ice", "Ghost"],
    baseStats: { hp: 90, atk: 70, def: 70, spa: 100, spd: 110, spe: 100 },
    abilities: { 0: "Pressure", H: "Regenerator" },
    heightm: 1.7,
    weightkg: 55.4
  },
  articunotsunami: {
    num: 144,
    name: "Articuno-Tsunami",
    types: ["Water", "Flying"],
    baseStats: { hp: 90, atk: 70, def: 100, spa: 90, spd: 70, spe: 110 },
    abilities: { 0: "Competitive", H: "Natural Cure" },
    heightm: 1.7,
    weightkg: 50.4
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
  charpados: {
    num: 145,
    name: "Charpados",
    types: ["Fighting", "Steel"],
    baseStats: { hp: 90, atk: 120, def: 90, spa: 70, spd: 80, spe: 95 },
    abilities: { 0: "Motor Drive" },
    heightm: 1.6,
    weightkg: 58.2
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
  bennutres: {
    num: 146,
    name: "Bennutres",
    types: ["Dark", "Grass"],
    baseStats: { hp: 85, atk: 120, def: 80, spa: 75, spd: 95, spe: 90 },
    abilities: { 0: "Flash Fire" },
    heightm: 2,
    weightkg: 66
  },
  marowak: {
    num: 105,
    name: "Marowak",
    types: ["Ground", "Dragon"],
    baseStats: { hp: 80, atk: 100, def: 90, spa: 60, spd: 90, spe: 75 },
    abilities: { 0: "Shed Skin", 1: "Moxie", H: "Battle Armor" },
    heightm: 1,
    weightkg: 45
  },
  alolawak: {
    num: 105,
    name: "Alolawak",
    types: ["Fire", "Dark"],
    baseStats: { hp: 80, atk: 110, def: 90, spa: 60, spd: 90, spe: 95 },
    abilities: { 0: "Magic Bounce" },
    heightm: 1,
    weightkg: 34
  },
  marowakalolatotem: {
    num: 105,
    name: "Marowak-Alola-Totem",
    types: ["Ghost", "Rock"],
    baseStats: { hp: 120, atk: 80, def: 80, spa: 80, spd: 80, spe: 60 },
    abilities: { 0: "Rock Head", 1: "Soundproof", H: "Dry Skin" },
    heightm: 1.7,
    weightkg: 98
  },
  enamorus: {
    num: 905,
    name: "Enamorus",
    types: ["Psychic", "Flying"],
    gender: "F",
    baseStats: { hp: 80, atk: 107, def: 80, spa: 75, spd: 82, spe: 110 },
    abilities: { 0: "Contrary", H: "Magic Bounce" },
    heightm: 1.6,
    weightkg: 48
  },
  violentine: {
    num: 905,
    name: "Violentine",
    types: ["Fairy", "Poison"],
    gender: "F",
    baseStats: { hp: 74, atk: 105, def: 70, spa: 85, spd: 120, spe: 86 },
    abilities: { 0: "Fluffy", H: "Cold-Blooded" },
    heightm: 1.6,
    weightkg: 48
  },
  dialga: {
    num: 483,
    name: "Dialga",
    types: ["Steel", "Dragon"],
    gender: "N",
    baseStats: { hp: 90, atk: 90, def: 100, spa: 100, spd: 80, spe: 70 },
    abilities: { 0: "Clear Body", H: "Transience" },
    heightm: 5.4,
    weightkg: 683
  },
  archronos: {
    num: 483,
    name: "Archronos",
    types: ["Dark", "Dragon"],
    gender: "N",
    baseStats: { hp: 80, atk: 120, def: 60, spa: 100, spd: 80, spe: 90 },
    abilities: { 0: "Pressure", H: "Rewind" },
    heightm: 7,
    weightkg: 850
  },
  palkia: {
    num: 484,
    name: "Palkia",
    types: ["Psychic", "Dragon"],
    gender: "N",
    baseStats: { hp: 88, atk: 87, def: 95, spa: 82, spd: 95, spe: 103 },
    abilities: { 0: "No Guard", H: "Space Divide" },
    heightm: 4.2,
    weightkg: 336,
    otherFormes: null,
    formeOrder: null
  },
  palkiaorigin: {
    num: 484,
    name: "Palkia-Origin",
    types: ["Ground", "Poison"],
    gender: "N",
    baseStats: { hp: 80, atk: 110, def: 70, spa: 90, spd: 70, spe: 110 },
    abilities: { 0: "Unburden", H: "Origin Orb" },
    heightm: 6.3,
    weightkg: 660,
    otherFormes: null,
    formeOrder: null,
    baseSpecies: null,
    changesFrom: null
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
  basculectric: {
    num: 550,
    name: "Basculectric",
    types: ["Water", "Electric"],
    baseStats: { hp: 80, atk: 90, def: 80, spa: 110, spd: 80, spe: 70 },
    abilities: { 0: "Volt Absorb", 1: "Speed Boost", H: "Mold Breaker" },
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
  magearna: {
    num: 801,
    name: "Magearna",
    types: ["Steel", "Water"],
    gender: "F",
    baseStats: { hp: 80, atk: 100, def: 80, spa: 105, spd: 105, spe: 45 },
    abilities: { 0: "Water Veil", H: "Moxie" },
    heightm: 1,
    weightkg: 80.5
  },
  magearnaprototype: {
    num: 801,
    name: "Magearna-Prototype",
    types: ["Fire", "Fairy"],
    gender: "F",
    baseStats: { hp: 80, atk: 65, def: 95, spa: 105, spd: 70, spe: 100 },
    abilities: { 0: "Steam Engine", H: "Wind-up Key" },
    heightm: 1,
    weightkg: 80.5
  },
  zarude: {
    num: 893,
    name: "Zarude",
    types: ["Fighting", "Poison"],
    baseStats: { hp: 105, atk: 115, def: 85, spa: 70, spd: 85, spe: 70 },
    abilities: { 0: "Natural Cure", H: "Triage" },
    heightm: 1.8,
    weightkg: 70
  },
  zarudehero: {
    num: 893,
    name: "Zarude-Hero",
    types: ["Grass", "Flying"],
    baseStats: { hp: 95, atk: 110, def: 95, spa: 60, spd: 75, spe: 101 },
    abilities: { 0: "Tough Claws" },
    heightm: 1.8,
    weightkg: 70
  },
  qwilfish: {
    num: 211,
    name: "Qwilfish",
    types: ["Water", "Ground"],
    baseStats: { hp: 85, atk: 105, def: 75, spa: 65, spd: 95, spe: 90 },
    abilities: { 0: "Sticky Hold", 1: "Iron Barbs", H: "Intimidate" },
    heightm: 0.5,
    weightkg: 3.9
  },
  aquattack: {
    num: 211,
    name: "Aquattack",
    types: ["Dragon", "Poison"],
    baseStats: { hp: 80, atk: 105, def: 90, spa: 80, spd: 60, spe: 100 },
    abilities: { 0: "Skill Link", 1: "Poison Point", H: "Merciless" },
    heightm: 0.5,
    weightkg: 3.9
  },
  zoroarkjorogumo: {
    num: 571,
    name: "Zoroark-Jorogumo",
    types: ["Bug", "Ghost"],
    baseStats: { hp: 70, atk: 110, def: 80, spa: 100, spd: 80, spe: 110 },
    abilities: { 0: "Illusion" },
    heightm: 1.6,
    weightkg: 81.1
  },
  zoroarkhoarfrost: {
    num: 571,
    name: "Zoroark-Hoarfrost",
    types: ["Ice"],
    baseStats: { hp: 70, atk: 60, def: 80, spa: 115, spd: 80, spe: 110 },
    abilities: { 0: "Snow Warning", H: "Magic Guard" },
    heightm: 1.6,
    weightkg: 81.1
  },
  goodratsunade: {
    num: 706,
    name: "Goodra-Tsunade",
    types: ["Dragon", "Poison"],
    baseStats: { hp: 100, atk: 90, def: 60, spa: 110, spd: 110, spe: 80 },
    abilities: { 0: "Thick Fat", 1: "Hydration", H: "Gooey" },
    heightm: 2,
    weightkg: 150.5
  },
  goodrasymbiotic: {
    num: 706,
    name: "Goodra-Symbiotic",
    types: ["Bug", "Ground"],
    baseStats: { hp: 80, atk: 100, def: 120, spa: 90, spd: 80, spe: 45 },
    abilities: { 0: "Gooey", 1: "Hydration", H: "Water Absorb" },
    heightm: 2,
    weightkg: 150.5
  },
  mausholdraider: {
    num: 925,
    name: "Maushold-Raider",
    types: ["Bug", "Poison"],
    baseStats: { hp: 74, atk: 105, def: 75, spa: 65, spd: 75, spe: 121 },
    abilities: { 0: "Swarm", 1: "Poison Touch", H: "Zerg Rush" },
    heightm: 0.3,
    weightkg: 2.3
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
  oinkologne: {
    num: 916,
    name: "Oinkologne",
    types: ["Normal", "Ground"],
    gender: "M",
    baseStats: { hp: 110, atk: 60, def: 90, spa: 119, spd: 75, spe: 60 },
    abilities: { 0: "Lingering Aroma", 1: "Gluttony", H: "Thick Fat" },
    heightm: 1,
    weightkg: 120
  },
  oinkolognef: {
    num: 916,
    name: "Oinkologne-F",
    types: ["Fairy"],
    gender: "F",
    baseStats: { hp: 110, atk: 65, def: 70, spa: 110, spd: 85, spe: 60 },
    abilities: { 0: "Aroma Veil", 1: "Gluttony", H: "Natural Cure" },
    heightm: 1,
    weightkg: 120
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
  dududunsparce: {
    num: 982,
    name: "Dududunsparce",
    types: ["Rock", "Flying"],
    baseStats: { hp: 135, atk: 60, def: 75, spa: 105, spd: 75, spe: 75 },
    abilities: { 0: "Adaptability", 1: "Shed Skin", H: "Regenerator" },
    heightm: 3.6,
    weightkg: 39.2
  },
  greninja: {
    num: 658,
    name: "Greninja",
    types: ["Dark", "Fighting"],
    baseStats: { hp: 82, atk: 103, def: 72, spa: 95, spd: 71, spe: 102 },
    abilities: { 0: "Torrent", H: "Protean" },
    heightm: 1.5,
    weightkg: 40
  },
  greninjaronin: {
    num: 658,
    name: "Greninja-Ronin",
    types: ["Water", "Ghost"],
    baseStats: { hp: 92, atk: 102, def: 72, spa: 105, spd: 71, spe: 103 },
    abilities: { 0: "Sharpness", 1: "Moxie", H: "Soul-Heart" },
    heightm: 1.5,
    weightkg: 40
  },
  imperil: {
    num: 720,
    name: "Imperil",
    types: ["Psychic", "Ghost"],
    baseStats: { hp: 160, atk: 70, def: 110, spa: 100, spd: 20, spe: 70 },
    abilities: { 0: "Perish Body" },
    heightm: 0.5,
    weightkg: 9
  },
  hoopaifrit: {
    num: 720,
    name: "Hoopa-Ifrit",
    types: ["Poison", "Dark"],
    baseStats: { hp: 90, atk: 120, def: 60, spa: 120, spd: 120, spe: 70 },
    abilities: { 0: "Iron Fist", H: "Berserk" },
    heightm: 6.5,
    weightkg: 490
  },
  kyurem: {
    num: 646,
    name: "Kyurem",
    types: ["Dragon", "Fighting"],
    baseStats: { hp: 125, atk: 110, def: 70, spa: 90, spd: 70, spe: 95 },
    abilities: { 0: "Unaware" },
    heightm: 3,
    weightkg: 325,
    otherFormes: null,
    formeOrder: null
  },
  kyuremblack: {
    num: 646,
    name: "Kyurem-Black",
    types: ["Ice", "Electric"],
    baseStats: { hp: 125, atk: 110, def: 95, spa: 80, spd: 65, spe: 75 },
    abilities: { 0: "Teravolt", H: "Hadron Engine" },
    heightm: 3.3,
    weightkg: 325,
    baseSpecies: null,
    forme: null,
    changesFrom: null
  },
  kyuremwhite: {
    num: 646,
    name: "Kyurem-White",
    types: ["Ice", "Fire"],
    baseStats: { hp: 110, atk: 90, def: 60, spa: 105, spd: 80, spe: 115 },
    abilities: { 0: "Turboblaze" },
    heightm: 3.3,
    weightkg: 325,
    baseSpecies: null,
    forme: null,
    changesFrom: null
  },
  xerneasdormant: {
    num: 716,
    name: "Xerneas-Dormant",
    types: ["Grass", "Fighting"],
    baseStats: { hp: 111, atk: 131, def: 80, spa: 41, spd: 73, spe: 94 },
    abilities: { 0: "Misty Surge" },
    heightm: 3,
    weightkg: 215
  },
  xerneasjustice: {
    num: 716,
    name: "Xerneas-Justice",
    types: ["Fairy", "Fighting"],
    baseStats: { hp: 73, atk: 127, def: 93, spa: 56, spd: 82, spe: 109 },
    abilities: { 0: "Justified" },
    heightm: 3,
    weightkg: 215
  },
  arcaninewaterballoon: {
    num: 59,
    name: "Arcanine-Water Balloon",
    types: ["Water", "Grass"],
    baseStats: { hp: 110, atk: 75, def: 92, spa: 105, spd: 70, spe: 88 },
    abilities: { 0: "Bubble Mane" },
    heightm: 1.9,
    weightkg: 155
  },
  arcaninenoble: {
    num: 59,
    name: "Arcanine-Noble",
    types: ["Fire", "Rock"],
    baseStats: { hp: 100, atk: 110, def: 115, spa: 60, spd: 65, spe: 90 },
    abilities: { 0: "Intimidate", 1: "Weak Armor", H: "Frenzied Might" },
    heightm: 2,
    weightkg: 168
  },
  avaluggprism: {
    num: 713,
    name: "Avalugg-Prism",
    types: ["Ice", "Steel"],
    baseStats: { hp: 95, atk: 100, def: 100, spa: 105, spd: 80, spe: 45 },
    abilities: { 0: "Reflective Surface" },
    heightm: 2,
    weightkg: 505
  },
  avaluggplated: {
    num: 713,
    name: "Avalugg-Plated",
    types: ["Rock", "Ground"],
    baseStats: { hp: 85, atk: 137, def: 134, spa: 54, spd: 76, spe: 29 },
    abilities: { 0: "Sturdy", 1: "Purifying Salt", H: "Ice Age" },
    heightm: 1.4,
    weightkg: 262.4
  },
  squawkabilly: {
    num: 931,
    name: "Squawkabilly",
    types: ["Dark", "Flying"],
    baseStats: { hp: 82, atk: 106, def: 91, spa: 45, spd: 71, spe: 122 },
    abilities: { 0: "Intimidate", 1: "Flock", H: "Hustle" },
    heightm: 0.6,
    weightkg: 2.4
  },
  squawkabiluck: {
    num: 931,
    name: "Squawkabiluck",
    types: ["Water", "Rock"],
    baseStats: { hp: 80, atk: 110, def: 60, spa: 120, spd: 55, spe: 105 },
    abilities: { 0: "Super Luck", H: "No Guard" },
    heightm: 0.6,
    weightkg: 2.4
  },
  squawkalone: {
    num: 931,
    name: "Squawkalone",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 92, atk: 55, def: 81, spa: 96, spd: 81, spe: 102 },
    abilities: { 0: "Big Pecks", 1: "No Guard", H: "Oblivious" },
    heightm: 0.6,
    weightkg: 2.4
  },
  squawkabillyyellow: {
    num: 931,
    name: "Squawkabilly-Yellow",
    types: ["Normal", "Electric"],
    baseStats: { hp: 65, atk: 52, def: 84, spa: 116, spd: 92, spe: 101 },
    abilities: { 0: "Wind Power", 1: "Costar", H: "Punk Rock" },
    heightm: 0.6,
    weightkg: 2.4
  },
  wishiwashilonesome: {
    num: 746,
    name: "Wishiwashi-Lonesome",
    types: ["Steel", "Ghost"],
    baseStats: { hp: 85, atk: 70, def: 70, spa: 95, spd: 72, spe: 123 },
    abilities: { 0: "Run Away", 1: "Rattled", H: "Supreme Overlord" },
    heightm: 0.2,
    weightkg: 0.3
  },
  winardin: {
    num: 746,
    name: "Winardin",
    types: ["Water"],
    baseStats: { hp: 135, atk: 130, def: 120, spa: 130, spd: 120, spe: 30 },
    abilities: { 0: "Over the Head" },
    heightm: 8.2,
    weightkg: 78.6
  },
  palafin: {
    num: 964,
    name: "Palafin",
    types: ["Psychic", "Fairy"],
    baseStats: { hp: 90, atk: 76, def: 112, spa: 100, spd: 85, spe: 70 },
    abilities: { 0: "Zero to Hero" },
    heightm: 1.3,
    weightkg: 60.2
  },
  hercuphin: {
    num: 964,
    name: "Hercuphin",
    types: ["Water", "Fighting"],
    baseStats: { hp: 80, atk: 110, def: 72, spa: 91, spd: 92, spe: 80 },
    abilities: { 0: "Iron Fist", 1: "Water Veil", H: "Swift Swim" },
    heightm: 1.8,
    weightkg: 97.4
  },
  gumshoos: {
    inherit: true,
    types: ["Normal", "Poison"],
    baseStats: { hp: 90, atk: 110, def: 70, spa: 55, spd: 100, spe: 90 },
    abilities: { 0: "Stakeout", 1: "Strong Jaw", H: "Corrosion" },
    otherFormes: null,
    formeOrder: null
  },
  gumshoostotem: {
    inherit: true,
    types: ["Dark", "Rock"],
    baseStats: { hp: 130, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
    abilities: { 0: "Battle-Scarred", 1: "Opportunist", H: "Moody" },
    baseSpecies: null,
    forme: null
  },
  togedemaru: {
    inherit: true,
    types: ["Grass", "Steel"],
    baseStats: { hp: 70, atk: 90, def: 126, spa: 44, spd: 100, spe: 100 },
    abilities: { 0: "Spiky and Round" },
    otherFormes: null,
    formeOrder: null
  },
  totemaru: {
    num: 777,
    name: "Totemaru",
    types: ["Fire", "Poison"],
    baseStats: { hp: 90, atk: 127, def: 70, spa: 65, spd: 73, spe: 90 },
    abilities: { 0: "Roll Romp", H: "Blaze" },
    heightm: 0.6,
    weightkg: 13
  },
  tauros: {
    inherit: true,
    types: ["Normal", "Rock"],
    baseStats: { hp: 95, atk: 110, def: 85, spa: 80, spd: 70, spe: 90 },
    abilities: { 0: "Rock Head", 1: "Cud Chew", H: "Sheer Force" },
    otherFormes: null,
    formeOrder: null
  },
  bravatoro: {
    num: 128,
    name: "Bravatoro",
    types: ["Fighting", "Ground"],
    gender: "M",
    baseStats: { hp: 75, atk: 100, def: 115, spa: 60, spd: 90, spe: 90 },
    abilities: { 0: "No Guard", 1: "Reckless", H: "Anger Point" },
    heightm: 1.4,
    weightkg: 88.4
  },
  taurossteam: {
    num: 128,
    name: "Tauros-Steam",
    types: ["Fire", "Water"],
    gender: "M",
    baseStats: { hp: 105, atk: 75, def: 95, spa: 125, spd: 95, spe: 50 },
    abilities: { 0: "Water Absorb", 1: "Flash Fire", H: "Steam Engine" },
    heightm: 1.4,
    weightkg: 88.4
  },
  taurosazul: {
    num: 128,
    name: "Tauros-Azul",
    types: ["Fighting", "Ice"],
    gender: "M",
    baseStats: { hp: 106, atk: 90, def: 80, spa: 85, spd: 70, spe: 99 },
    abilities: { 0: "Ice Body", 1: "Cud Chew", H: "Sheer Force" },
    heightm: 1.4,
    weightkg: 88.4
  },
  raichu: {
    inherit: true,
    types: ["Electric", "Fairy"],
    baseStats: { hp: 110, atk: 100, def: 90, spa: 80, spd: 80, spe: 50 },
    abilities: { 0: "Cheek Pouch", 1: "Electromorphosis", H: "Quark Drive" },
    otherFormes: null,
    formeOrder: null
  },
  raichusoft: {
    num: 26,
    name: "Raichu-Soft",
    types: ["Electric", "Normal"],
    baseStats: { hp: 60, atk: 95, def: 80, spa: 85, spd: 55, spe: 110 },
    abilities: { 0: "Lightning Rod", 1: "Cute Charm", H: "Adaptability" },
    heightm: 0.7,
    weightkg: 21
  },
  rapidash: {
    inherit: true,
    types: ["Fire", "Electric"],
    baseStats: { hp: 65, atk: 100, def: 80, spa: 70, spd: 80, spe: 135 },
    abilities: { 0: "Reckless", 1: "Flame Body", H: "Tactician" },
    otherFormes: null,
    formeOrder: null
  },
  rapidashgalar: {
    inherit: true,
    types: ["Ground", "Fairy"],
    baseStats: { hp: 95, atk: 90, def: 100, spa: 90, spd: 75, spe: 75 },
    abilities: { 0: "Anticipation", 1: "Poison Heal", H: "Pastel Veil" },
    baseSpecies: null,
    forme: null
  },
  golemberserker: {
    num: 76,
    name: "Golem-Berserker",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 80, atk: 120, def: 90, spa: 60, spd: 90, spe: 110 },
    abilities: { 0: "Sturdy", H: "Thermo Fist" },
    heightm: 1.4,
    weightkg: 300
  },
  golemalola: {
    inherit: true,
    baseStats: { hp: 85, atk: 85, def: 115, spa: 130, spd: 45, spe: 55 },
    abilities: { 0: "Magnet Pull", 1: "Lightning Rod", H: "Galvanize" },
    baseSpecies: null,
    forme: null
  },
  cherrim: {
    inherit: true,
    types: ["Grass", "Ground"],
    baseStats: { hp: 90, atk: 110, def: 100, spa: 75, spd: 75, spe: 80 },
    abilities: { 0: "Regenerator", H: "Flower Gift" },
    baseForme: null,
    otherFormes: null,
    formeOrder: null
  },
  cherrine: {
    num: 421,
    name: "Cherrine",
    types: ["Grass", "Fire"],
    baseStats: { hp: 80, atk: 110, def: 70, spa: 107, spd: 78, spe: 85 },
    abilities: { 0: "Protosynthesis" },
    heightm: 0.5,
    weightkg: 9.3
  },
  minior: {
    inherit: true,
    types: ["Dragon", "Rock"],
    baseStats: { hp: 80, atk: 90, def: 60, spa: 120, spd: 60, spe: 120 },
    abilities: { 0: "Gem Power" },
    baseForme: null,
    otherFormes: null,
    cosmeticFormes: null,
    formeOrder: null
  },
  miniormeteor: {
    inherit: true,
    types: ["Rock", "Psychic"],
    baseStats: { hp: 100, atk: 85, def: 100, spa: 85, spd: 100, spe: 60 },
    abilities: { 0: "Solid Rock", H: "Anger Shell" },
    baseSpecies: null,
    forme: null,
    requiredAbility: null,
    battleOnly: null
  },
  eevee: {
    inherit: true,
    baseStats: { hp: 80, atk: 78, def: 82, spa: 101, spd: 102, spe: 82 },
    abilities: { 0: "Adaptability", H: "Generalist" },
    evos: null,
    otherFormes: null,
    formeOrder: null
  },
  eeveestarter: {
    inherit: true,
    baseStats: { hp: 95, atk: 75, def: 95, spa: 95, spd: 95, spe: 95 },
    abilities: { 0: "Adaptability", H: "Protean" },
    baseSpecies: null,
    forme: null
  }
};
//# sourceMappingURL=pokedex.js.map
