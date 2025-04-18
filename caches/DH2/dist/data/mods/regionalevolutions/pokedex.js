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
  // Kanto Dex
  beldum: {
    inherit: true,
    otherFormes: ["Beldum-Kanto"],
    formeOrder: ["Beldum", "Beldum-Kanto"]
  },
  beldumkanto: {
    num: 374,
    name: "Beldum-Kanto",
    baseSpecies: "Beldum",
    forme: "Kanto",
    types: ["Steel", "Fire"],
    gender: "N",
    baseStats: { hp: 40, atk: 35, def: 55, spa: 30, spd: 60, spe: 80 },
    abilities: { 0: "Speed Boost", H: "Light Metal" },
    heightm: 0.6,
    weightkg: 95.2,
    color: "Blue",
    evos: ["Metang-Kanto"],
    eggGroups: ["Mineral"]
  },
  metang: {
    inherit: true,
    otherFormes: ["Metang-Kanto"],
    formeOrder: ["Metang", "Metang-Kanto"]
  },
  metangkanto: {
    num: 375,
    name: "Metang-Kanto",
    baseSpecies: "Metang",
    forme: "Kanto",
    types: ["Steel", "Fire"],
    gender: "N",
    baseStats: { hp: 60, atk: 55, def: 75, spa: 50, spd: 80, spe: 100 },
    abilities: { 0: "Speed Boost", H: "Light Metal" },
    heightm: 1.2,
    weightkg: 202.5,
    color: "Blue",
    prevo: "Beldum-Kanto",
    evoLevel: 20,
    evos: ["Yamatang"],
    eggGroups: ["Mineral"]
  },
  yamatang: {
    num: -11,
    name: "Yamatang",
    types: ["Steel", "Fire"],
    gender: "N",
    baseStats: { hp: 100, atk: 115, def: 95, spa: 70, spd: 100, spe: 120 },
    abilities: { 0: "Speed Boost", H: "Light Metal" },
    heightm: 1.6,
    weightkg: 264.09,
    color: "Blue",
    prevo: "Metang-Kanto",
    evoLevel: 45,
    eggGroups: ["Mineral"]
  },
  aipom: {
    inherit: true,
    otherFormes: ["Aipom-Kanto"],
    formeOrder: ["Aipom", "Aipom-Kanto"]
  },
  aipomkanto: {
    num: 190,
    name: "Aipom-Kanto",
    baseSpecies: "Aipom",
    forme: "Kanto",
    types: ["Ice"],
    baseStats: { hp: 55, atk: 45, def: 55, spa: 70, spd: 60, spe: 75 },
    abilities: { 0: "Run Away", 1: "Frisk", H: "Snow Warning" },
    heightm: 0.8,
    weightkg: 11.5,
    color: "Purple",
    evos: ["Kortori"],
    eggGroups: ["Field"]
  },
  kortori: {
    num: -12,
    name: "Kortori",
    types: ["Ice", "Psychic"],
    baseStats: { hp: 70, atk: 60, def: 66, spa: 105, spd: 85, spe: 96 },
    abilities: { 0: "Forewarn", 1: "Frisk", H: "Snow Warning" },
    heightm: 1.4,
    weightkg: 30,
    color: "Purple",
    prevo: "Aipom-Kanto",
    evoType: "levelMove",
    evoMove: "Extrasensory",
    eggGroups: ["Field"]
  },
  // Johto Dex
  dratini: {
    inherit: true,
    otherFormes: ["Dratini-Johto"],
    formeOrder: ["Dratini", "Dratini-Johto"]
  },
  dratinijohto: {
    num: 147,
    name: "Dratini-Johto",
    baseSpecies: "Dratini",
    forme: "Johto",
    types: ["Poison", "Psychic"],
    baseStats: { hp: 41, atk: 54, def: 65, spa: 60, spd: 50, spe: 30 },
    abilities: { 0: "Ionization", H: "Perish Body" },
    heightm: 1.8,
    weightkg: 3.3,
    color: "Blue",
    evos: ["Dragonair-Johto"],
    eggGroups: ["Water 1", "Dragon"]
  },
  dragonair: {
    inherit: true,
    otherFormes: ["Dragonair-Johto"],
    formeOrder: ["Dragonair", "Dragonair-Johto"]
  },
  dragonairjohto: {
    num: 148,
    name: "Dragonair-Johto",
    baseSpecies: "Dragonair",
    forme: "Johto",
    types: ["Poison", "Psychic"],
    baseStats: { hp: 61, atk: 74, def: 75, spa: 90, spd: 70, spe: 50 },
    abilities: { 0: "Ionization", H: "Perish Body" },
    heightm: 4,
    weightkg: 16.5,
    color: "Blue",
    prevo: "Dratini-Johto",
    evoLevel: 30,
    evos: ["Dratomic"],
    eggGroups: ["Water 1", "Dragon"]
  },
  dratomic: {
    num: -1,
    name: "Dratomic",
    types: ["Poison", "Psychic"],
    baseStats: { hp: 91, atk: 94, def: 115, spa: 120, spd: 100, spe: 70 },
    abilities: { 0: "Ionization", H: "Perish Body" },
    heightm: 2.2,
    weightkg: 210,
    color: "Brown",
    prevo: "Dragonair-Johto",
    evoLevel: 55,
    eggGroups: ["Water 1", "Dragon"]
  },
  drifloon: {
    inherit: true,
    otherFormes: ["Drifloon-Johto", "Drifloon-Alola"],
    formeOrder: ["Drifloon", "Drifloon-Johto", "Drifloon-Alola"]
  },
  drifloonjohto: {
    num: 425,
    name: "Drifloon-Johto",
    baseSpecies: "Drifloon",
    forme: "Johto",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 70, atk: 50, def: 34, spa: 60, spd: 90, spe: 44 },
    abilities: { 0: "Aftermath", 1: "Own Tempo", H: "Clear Body" },
    heightm: 0.4,
    weightkg: 1.2,
    color: "Purple",
    evos: ["Drifblim-Johto"],
    eggGroups: ["Amorphous"]
  },
  drifblim: {
    inherit: true,
    otherFormes: ["Drifblim-Johto", "Drifblim-Alola"],
    formeOrder: ["Drifblim", "Drifblim-Johto", "Drifblim-Alola"]
  },
  drifblimjohto: {
    num: 426,
    name: "Drifblim-Johto",
    baseSpecies: "Drifblim",
    forme: "Johto",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 80, atk: 80, def: 44, spa: 90, spd: 150, spe: 54 },
    abilities: { 0: "Aftermath", 1: "Own Tempo", H: "Clear Body" },
    heightm: 1.2,
    weightkg: 15,
    color: "Purple",
    prevo: "Drifloon-Johto",
    evoLevel: 28,
    evos: ["Melklim"],
    eggGroups: ["Amorphous"]
  },
  melklim: {
    num: -18,
    name: "Melklim",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 120, atk: 90, def: 70, spa: 90, spd: 150, spe: 34 },
    abilities: { 0: "Aftermath", 1: "Own Tempo", H: "Clear Body" },
    heightm: 1.2,
    weightkg: 581.6,
    color: "Purple",
    prevo: "Drifblim-Johto",
    eggGroups: ["Amorphous"]
  },
  turtonator: {
    inherit: true,
    otherFormes: ["Turtonator-Johto"],
    formeOrder: ["Turtonator", "Turtonator-Johto"]
  },
  turtonatorjohto: {
    num: 776,
    name: "Turtonator-Johto",
    baseSpecies: "Turtonator",
    forme: "Johto",
    types: ["Water", "Dragon"],
    baseStats: { hp: 60, atk: 78, def: 135, spa: 91, spd: 85, spe: 36 },
    abilities: { 0: "Soft Shell" },
    heightm: 2,
    weightkg: 220,
    color: "Red",
    eggGroups: ["Monster", "Dragon"],
    evos: ["Coramata"]
  },
  coramata: {
    num: -24,
    name: "Coramata",
    types: ["Water", "Dragon"],
    baseStats: { hp: 70, atk: 98, def: 135, spa: 121, spd: 85, spe: 31 },
    abilities: { 0: "Regenerator" },
    heightm: 2,
    weightkg: 352,
    color: "Red",
    eggGroups: ["Monster", "Dragon"]
  },
  // Hoenn Dex
  diodactyl: {
    num: -13,
    name: "Diodactyl",
    types: ["Electric", "Flying"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 60, atk: 85, def: 70, spa: 105, spd: 65, spe: 130 },
    abilities: { 0: "Soundproof", 1: "Volt Absorb", H: "Galvanize" },
    heightm: 1.8,
    weightkg: 59,
    color: "Purple",
    eggGroups: ["Flying"],
    evos: ["Meissnactyl"]
  },
  meissnactyl: {
    num: -14,
    name: "Meissnactyl",
    types: ["Electric", "Flying"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 85, atk: 95, def: 115, spa: 125, spd: 90, spe: 45 },
    abilities: { 0: "Soundproof", 1: "Volt Absorb", H: "Galvanize" },
    heightm: 2.1,
    weightkg: 79,
    color: "Purple",
    eggGroups: ["Flying"],
    prevo: "Diodactyl"
  },
  minior: {
    inherit: true,
    otherFormes: ["Minior-Meteor", "Minior-Hoenn", "Minior-Hoenn-Meteor"],
    formeOrder: [
      // All of the colored Minior Meteor formes (unsupported by PS) are numbers 0-6
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior",
      "Minior-Orange",
      "Minior-Yellow",
      "Minior-Green",
      "Minior-Blue",
      "Minior-Indigo",
      "Minior-Violet",
      "Minior-Hoenn-Meteor",
      "Minior-Hoenn-Meteor",
      "Minior-Hoenn-Meteor",
      "Minior-Hoenn-Meteor",
      "Minior-Hoenn-Meteor",
      "Minior-Hoenn-Meteor",
      "Minior-Hoenn-Meteor",
      "Minior-Hoenn",
      "Minior-Hoenn-Orange",
      "Minior-Hoenn-Yellow",
      "Minior-Hoenn-Green",
      "Minior-Hoenn-Blue",
      "Minior-Hoenn-Indigo",
      "Minior-Hoenn-Violet"
    ]
  },
  miniorhoenn: {
    num: 774,
    name: "Minior-Hoenn",
    baseSpecies: "Turtonator",
    forme: "Hoenn",
    baseForme: "Red",
    types: ["Fire", "Ice"],
    gender: "N",
    baseStats: { hp: 60, atk: 100, def: 50, spa: 100, spd: 50, spe: 140 },
    abilities: { 0: "Shields Down" },
    heightm: 0.7,
    weightkg: 1,
    color: "Red",
    eggGroups: ["Mineral"],
    cosmeticFormes: ["Minior-Hoenn-Orange", "Minior-Hoenn-Yellow", "Minior-Hoenn-Green", "Minior-Hoenn-Blue", "Minior-Hoenn-Indigo", "Minior-Hoenn-Violet"],
    evos: ["Astrollite"]
  },
  miniorhoennmeteor: {
    num: 774,
    name: "Minior-Hoenn-Meteor",
    baseSpecies: "Minior",
    forme: "Hoenn-Meteor",
    types: ["Fire", "Ice"],
    gender: "N",
    baseStats: { hp: 60, atk: 60, def: 90, spa: 60, spd: 90, spe: 80 },
    abilities: { 0: "Shields Down" },
    heightm: 0.7,
    weightkg: 40,
    color: "Brown",
    eggGroups: ["Mineral"],
    requiredAbility: "Shields Down",
    battleOnly: "Minior-Hoenn"
  },
  awaitstrollite: {
    num: -31,
    name: "Astrollite",
    types: ["Fire", "Ice"],
    gender: "N",
    baseStats: { hp: 60, atk: 100, def: 60, spa: 100, spd: 60, spe: 140 },
    abilities: { 0: "Tinted Lens" },
    heightm: 1.4,
    weightkg: 999.9,
    color: "Brown",
    eggGroups: ["Mineral"]
  },
  // Sinnoh Dex
  salandit: {
    inherit: true,
    otherFormes: ["Salandit-Sinnoh"],
    formeOrder: ["Salandit", "Salandit-Sinnoh"]
  },
  salanditsinnoh: {
    num: 757,
    name: "Salandit-Sinnoh",
    baseSpecies: "Salandit",
    forme: "Sinnoh",
    types: ["Dragon", "Fairy"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 48, atk: 44, def: 40, spa: 71, spd: 77, spe: 40 },
    abilities: { 0: "Suller", H: "Oblivious" },
    heightm: 0.6,
    weightkg: 4.8,
    color: "Black",
    evos: ["Salazzle"],
    eggGroups: ["Monster", "Dragon"]
  },
  salazzle: {
    inherit: true,
    otherFormes: ["Salazzle-Sinnoh"],
    formeOrder: ["Salazzle", "Salazzle-Sinnoh"]
  },
  salazzlesinnoh: {
    num: 758,
    name: "Salazzle-Sinnoh",
    baseSpecies: "Salazzle",
    forme: "Sinnoh",
    types: ["Dragon", "Fairy"],
    gender: "F",
    baseStats: { hp: 68, atk: 64, def: 60, spa: 111, spd: 117, spe: 60 },
    abilities: { 0: "Suller", H: "Oblivious" },
    heightm: 1.2,
    weightkg: 22.2,
    color: "Black",
    prevo: "Salandit-Sinnoh",
    evoLevel: 33,
    eggGroups: ["Monster", "Dragon"],
    evos: ["Altilazzle"]
  },
  altilazzle: {
    num: -25,
    name: "Altilazzle",
    types: ["Dragon", "Fairy"],
    gender: "F",
    baseStats: { hp: 78, atk: 69, def: 65, spa: 131, spd: 137, spe: 80 },
    abilities: { 0: "Suller", H: "Dazzling" },
    heightm: 2.1,
    weightkg: 81,
    color: "Black",
    eggGroups: ["Monster", "Dragon"],
    prevo: "Salazzle-Sinnoh"
  },
  pikipek: {
    inherit: true,
    evos: ["Trumbeak", "Trumbeak-Sinnoh"]
  },
  trumbeak: {
    inherit: true,
    otherFormes: ["Trumbeak-Sinnoh"],
    formeOrder: ["Trumbeak", "Trumbeak-Sinnoh"]
  },
  trumbeaksinnoh: {
    num: 732,
    name: "Trumbeak-Sinnoh",
    baseSpecies: "Trumbeak",
    forme: "Sinnoh",
    types: ["Fairy", "Flying"],
    baseStats: { hp: 50, atk: 65, def: 45, spa: 75, spd: 60, spe: 60 },
    abilities: { 0: "Keen Eye", 1: "Scrappy", H: "Sweet Veil" },
    heightm: 0.6,
    weightkg: 9.5,
    color: "Black",
    prevo: "Pikipek",
    evoLevel: 14,
    evos: ["Crimsoyal"],
    eggGroups: ["Flying"]
  },
  crimsoyal: {
    num: -27,
    name: "Crimsoyal",
    types: ["Fairy", "Flying"],
    baseStats: { hp: 65, atk: 70, def: 60, spa: 105, spd: 95, spe: 90 },
    abilities: { 0: "Keen Eye", 1: "Scrappy", H: "Serene Grace" },
    heightm: 1.6,
    weightkg: 15.9,
    color: "Black",
    prevo: "Trumbeak-Sinnoh",
    evoLevel: 28,
    eggGroups: ["Flying"]
  },
  // Hisui Dex
  shroomish: {
    inherit: true,
    otherFormes: ["Shroomish-Hisui"],
    formeOrder: ["Shroomish", "Shroomish-Hisui"]
  },
  shroomishhisui: {
    num: 285,
    name: "Shroomish-Hisui",
    baseSpecies: "Shroomish",
    forme: "Hisui",
    types: ["Ice", "Grass"],
    baseStats: { hp: 60, atk: 40, def: 60, spa: 40, spd: 60, spe: 35 },
    abilities: { 0: "Natural Cure", 1: "Effect Spore", H: "Ice Body" },
    heightm: 0.4,
    weightkg: 4.5,
    color: "Brown",
    evos: ["Breloom-Hisui"],
    eggGroups: ["Fairy", "Grass"]
  },
  breloom: {
    inherit: true,
    otherFormes: ["Breloom-Hisui"],
    formeOrder: ["Breloom", "Breloom-Hisui"]
  },
  breloomhisui: {
    num: 286,
    name: "Breloom-Hisui",
    baseSpecies: "Breloom",
    forme: "Hisui",
    types: ["Ice", "Fighting"],
    baseStats: { hp: 60, atk: 130, def: 80, spa: 60, spd: 60, spe: 70 },
    abilities: { 0: "Natural Cure", 1: "Effect Spore", H: "Ice Body" },
    heightm: 1.5,
    weightkg: 30,
    color: "Green",
    prevo: "Shroomish-Hisui",
    evoLevel: 23,
    eggGroups: ["Fairy", "Grass"],
    evos: ["Sageloom"]
  },
  sageloom: {
    num: -15,
    name: "Sageloom",
    types: ["Ice", "Fighting"],
    baseStats: { hp: 70, atk: 130, def: 80, spa: 60, spd: 60, spe: 120 },
    abilities: { 0: "Natural Cure", 1: "Effect Spore", H: "Grassy Surge" },
    heightm: 2,
    weightkg: 35,
    color: "Green",
    prevo: "Breloom-Hisui",
    evoType: "levelHold",
    evoItem: "Forest Staff",
    eggGroups: ["Fairy", "Grass"]
  },
  sizzlipede: {
    inherit: true,
    otherFormes: ["Sizzlipede-Hisui"],
    formeOrder: ["Sizzlipede", "Sizzlipede-Hisui"]
  },
  sizzlipedehisui: {
    num: 850,
    name: "Sizzlipede-Hisui",
    baseSpecies: "Sizzlipede",
    forme: "Hisui",
    types: ["Dragon", "Bug"],
    baseStats: { hp: 50, atk: 65, def: 45, spa: 50, spd: 30, spe: 65 },
    abilities: { 0: "Berserk", 1: "Defiant", H: "Unnerve" },
    heightm: 0.7,
    weightkg: 1,
    color: "Red",
    evos: ["Centiskorch-Hisui"],
    eggGroups: ["Bug"]
  },
  centiskorch: {
    inherit: true,
    otherFormes: ["Centiskorch-Hisui"],
    formeOrder: ["Centiskorch", "Centiskorch-Hisui"]
  },
  centiskorchhisui: {
    num: 851,
    name: "Centiskorch-Hisui",
    baseSpecies: "Centiskorch",
    forme: "Hisui",
    types: ["Dragon", "Bug"],
    baseStats: { hp: 100, atk: 115, def: 65, spa: 90, spd: 60, spe: 95 },
    abilities: { 0: "Berserk", 1: "Defiant", H: "Unnerve" },
    heightm: 3,
    weightkg: 120,
    color: "Red",
    prevo: "Sizzlipede-Hisui",
    evoLevel: 28,
    eggGroups: ["Bug"],
    evos: ["Stupendra"]
  },
  stupendra: {
    num: -28,
    name: "Stupendra",
    types: ["Dragon", "Bug"],
    baseStats: { hp: 135, atk: 115, def: 75, spa: 115, spd: 75, spe: 95 },
    abilities: { 0: "Berserk", 1: "Defiant", H: "Unnerve" },
    heightm: 7,
    weightkg: 240,
    color: "Red",
    eggGroups: ["Bug"],
    prevo: "Centiskorch-Hisui"
  },
  // Unova Dex
  pachirisu: {
    inherit: true,
    otherFormes: ["Pachirisu-Unova"],
    formeOrder: ["Pachirisu", "Pachirisu-Unova"]
  },
  pachirisuunova: {
    num: 417,
    name: "Pachirisu-Unova",
    baseSpecies: "Pachirisu",
    forme: "Unova",
    types: ["Electric", "Fighting"],
    baseStats: { hp: 60, atk: 90, def: 45, spa: 70, spd: 45, spe: 95 },
    abilities: { 0: "Justified", 1: "Iron Fist", H: "Volt Absorb" },
    heightm: 0.4,
    weightkg: 3.9,
    color: "White",
    eggGroups: ["Field", "Fairy"],
    evos: ["Pachiro"]
  },
  pachiro: {
    num: -19,
    name: "Pachiro",
    types: ["Electric", "Fighting"],
    baseStats: { hp: 70, atk: 110, def: 55, spa: 90, spd: 55, spe: 125 },
    abilities: { 0: "Justified", 1: "Iron Fist", H: "Volt Absorb" },
    heightm: 0.81,
    weightkg: 31.75,
    color: "White",
    eggGroups: ["Field", "Fairy"],
    prevo: "Pachirisu-Unova"
  },
  glameow: {
    inherit: true,
    otherFormes: ["Glameow-Unova"],
    formeOrder: ["Glameow", "Glameow-Unova"]
  },
  glameowunova: {
    num: 431,
    name: "Glameow-Unova",
    baseSpecies: "Glameow",
    forme: "Unova",
    types: ["Normal", "Fairy"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 49, atk: 55, def: 42, spa: 42, spd: 37, spe: 85 },
    abilities: { 0: "Limber", 1: "Own Tempo", H: "Magic Guard" },
    heightm: 0.5,
    weightkg: 3.9,
    color: "Gray",
    evos: ["Purugly"],
    eggGroups: ["Field"]
  },
  purugly: {
    inherit: true,
    otherFormes: ["Purugly-Unova"],
    formeOrder: ["Purugly", "Purugly-Unova"]
  },
  puruglyunova: {
    num: 432,
    name: "Purugly-Unova",
    baseSpecies: "Purugly",
    forme: "Unova",
    types: ["Normal", "Fairy"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 71, atk: 92, def: 64, spa: 54, spd: 59, spe: 112 },
    abilities: { 0: "Thick Fat", 1: "Tinted Lens", H: "Magic Guard" },
    heightm: 1.05,
    weightkg: 54.4,
    color: "Gray",
    prevo: "Glameow-Unova",
    evoLevel: 38,
    eggGroups: ["Field"],
    evos: ["Purrfect"]
  },
  purrfect: {
    num: -20,
    name: "Purrfect",
    types: ["Normal", "Fairy"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 101, atk: 122, def: 74, spa: 60, spd: 101, spe: 72 },
    abilities: { 0: "Thick Fat", 1: "Tinted Lens", H: "Magic Guard" },
    heightm: 3,
    weightkg: 89.41,
    color: "Gray",
    prevo: "Purugly-Unova",
    eggGroups: ["Field"]
  },
  // Kalos Dex
  // Alola Dex
  drifloonalola: {
    num: 425,
    name: "Drifloon-Alola",
    baseSpecies: "Drifloon",
    forme: "Alola",
    types: ["Water", "Ghost"],
    baseStats: { hp: 100, atk: 75, def: 44, spa: 40, spd: 34, spe: 65 },
    abilities: { 0: "Cursed Body", 1: "Water Veil", H: "Immunity" },
    heightm: 0.4,
    weightkg: 1.2,
    color: "Purple",
    evos: ["Drifblim-Alola"],
    eggGroups: ["Amorphous"]
  },
  drifblimalola: {
    num: 426,
    name: "Drifblim-Alola",
    baseSpecies: "Drifblim",
    forme: "Alola",
    types: ["Water", "Ghost"],
    baseStats: { hp: 140, atk: 100, def: 64, spa: 65, spd: 64, spe: 75 },
    abilities: { 0: "Cursed Body", 1: "Water Veil", H: "Immunity" },
    heightm: 1.2,
    weightkg: 15,
    color: "Purple",
    prevo: "Drifloon-Alola",
    evoLevel: 28,
    evos: ["Yachtergeist"],
    eggGroups: ["Amorphous"]
  },
  yachtergeist: {
    num: -21,
    name: "Yachtergeist",
    types: ["Water", "Ghost"],
    baseStats: { hp: 165, atk: 107, def: 84, spa: 60, spd: 64, spe: 65 },
    abilities: { 0: "Swift Swim", 1: "Water Veil", H: "Steam Engine" },
    heightm: 1.2,
    weightkg: 581.6,
    color: "Purple",
    prevo: "Drifblim-Alola",
    eggGroups: ["Amorphous"]
  },
  blipbug: {
    inherit: true,
    evos: ["Dottler", "Dottler-Alola"]
  },
  dottler: {
    inherit: true,
    otherFormes: ["Dottler-Alola"],
    formeOrder: ["Dottler", "Dottler-Alola"]
  },
  dottleralola: {
    num: 825,
    name: "Dottler-Alola",
    baseSpecies: "Drifblim",
    forme: "Alola",
    types: ["Bug", "Steel"],
    baseStats: { hp: 50, atk: 35, def: 90, spa: 50, spd: 80, spe: 30 },
    abilities: { 0: "Swarm", 1: "Compound Eyes", H: "Regenerator" },
    heightm: 0.5,
    weightkg: 56.7,
    color: "Yellow",
    prevo: "Blipbug",
    evoLevel: 10,
    evos: ["Orebeetle"],
    eggGroups: ["Bug"]
  },
  orebeetle: {
    num: -34,
    name: "Orebeetle",
    types: ["Bug", "Steel"],
    baseStats: { hp: 75, atk: 35, def: 120, spa: 85, spd: 110, spe: 80 },
    abilities: { 0: "Swarm", 1: "Volt Absorb", H: "Regenerator" },
    heightm: 15,
    weightkg: 350,
    color: "Red",
    prevo: "Dottler-Alola",
    evoLevel: 30,
    eggGroups: ["Bug"]
  },
  // Galar Dex
  rotom: {
    inherit: true,
    otherFormes: ["Rotom-Galar"],
    formeOrder: ["Rotom", "Rotom-Galar"]
  },
  rotomgalar: {
    num: 479,
    name: "Rotom-Galar",
    baseSpecies: "Rotom",
    forme: "Galar",
    types: ["Ghost"],
    gender: "N",
    baseStats: { hp: 50, atk: 50, def: 77, spa: 95, spd: 77, spe: 91 },
    abilities: { 0: "Levitate" },
    heightm: 0.25,
    weightkg: 0.3,
    color: "Red",
    eggGroups: ["Amorphous"],
    evos: ["Rotomoire"]
  },
  rotomoire: {
    num: -2,
    name: "Rotomoire",
    types: ["Ghost", "Psychic"],
    gender: "N",
    baseStats: { hp: 65, atk: 60, def: 84, spa: 107, spd: 100, spe: 104 },
    abilities: { 0: "Protean" },
    heightm: 0.5,
    weightkg: 5,
    color: "Red",
    prevo: "Rotom-Galar",
    evoType: "levelHold",
    evoItem: "Grimoire",
    eggGroups: ["Amorphous"]
  },
  buneary: {
    inherit: true,
    otherFormes: ["Buneary-Galar"],
    formeOrder: ["Buneary", "Buneary-Galar"]
  },
  bunearygalar: {
    num: 427,
    name: "Buneary-Galar",
    baseSpecies: "Buneary",
    forme: "Galar",
    types: ["Fairy"],
    baseStats: { hp: 55, atk: 66, def: 44, spa: 44, spd: 56, spe: 85 },
    abilities: { 0: "Klutz", 1: "Cute Charm", H: "Dazzling" },
    heightm: 0.5,
    weightkg: 4,
    color: "Brown",
    evos: ["Lopunny-Galar"],
    eggGroups: ["Field", "Human-Like"]
  },
  lopunny: {
    inherit: true,
    otherFormes: ["Lopunny-Galar"],
    formeOrder: ["Lopunny", "Lopunny-Galar"]
  },
  lopunnygalar: {
    num: 428,
    name: "Lopunny-Galar",
    baseSpecies: "Lopunny",
    forme: "Galar",
    types: ["Fairy"],
    baseStats: { hp: 65, atk: 86, def: 84, spa: 54, spd: 86, spe: 105 },
    abilities: { 0: "Sweet Veil", 1: "Cute Charm", H: "Dazzling" },
    heightm: 1.5,
    weightkg: 25,
    color: "Brown",
    prevo: "Buneary-Galar",
    evoType: "levelFriendship",
    eggGroups: ["Field", "Human-Like"],
    evos: ["Chroncony"]
  },
  chroncony: {
    num: -3,
    name: "Chroncony",
    types: ["Fairy", "Electric"],
    baseStats: { hp: 75, atk: 106, def: 84, spa: 54, spd: 86, spe: 115 },
    abilities: { 0: "Galvanize", 1: "Cute Charm", H: "Dazzling" },
    heightm: 1.3,
    weightkg: 28.3,
    color: "Brown",
    eggGroups: ["Field", "Human-Like"],
    prevo: "Lopunny-Galar",
    evoType: "useItem",
    evoItem: "Thunder Stone"
  },
  // Paldea Dex
  skiddo: {
    inherit: true,
    otherFormes: ["Skiddo-Paldea"],
    formeOrder: ["Skiddo", "Skiddo-Paldea"]
  },
  skiddopaldea: {
    num: 672,
    name: "Skiddo-Paldea",
    baseSpecies: "Skiddo",
    forme: "Paldea",
    types: ["Grass", "Water"],
    baseStats: { hp: 66, atk: 60, def: 55, spa: 67, spd: 57, spe: 45 },
    abilities: { 0: "Swift Swim", H: "Grass Pelt" },
    heightm: 0.9,
    weightkg: 34,
    color: "Brown",
    evos: ["Machara"],
    eggGroups: ["Field"]
  },
  machara: {
    num: -4,
    name: "Machara",
    types: ["Grass", "Water"],
    baseStats: { hp: 123, atk: 95, def: 69, spa: 102, spd: 81, spe: 61 },
    abilities: { 0: "Swift Swim", H: "Grass Pelt" },
    heightm: 1.7,
    weightkg: 107,
    color: "Brown",
    prevo: "Skiddo-Paldea",
    evoLevel: 32,
    eggGroups: ["Field"]
  },
  numel: {
    inherit: true,
    otherFormes: ["Numel-Paldea"],
    formeOrder: ["Numel", "Numel-Paldea"]
  },
  numelpaldea: {
    num: 322,
    name: "Numel-Paldea",
    baseSpecies: "Numel",
    forme: "Paldea",
    types: ["Rock"],
    baseStats: { hp: 65, atk: 30, def: 50, spa: 65, spd: 45, spe: 60 },
    abilities: { 0: "Oblivious", 1: "Simple", H: "Own Tempo" },
    heightm: 0.7,
    weightkg: 24,
    color: "Yellow",
    evos: ["Camerupt"],
    eggGroups: ["Field"]
  },
  camystic: {
    num: -35,
    name: "Camystic",
    types: ["Rock", "Psychic"],
    baseStats: { hp: 80, atk: 30, def: 85, spa: 110, spd: 50, spe: 105 },
    abilities: { 0: "Unburden", 1: "Solid Rock", H: "Wandering Spirit" },
    heightm: 1.9,
    weightkg: 145,
    color: "Red",
    prevo: "Numel-Paldea",
    evoType: "other",
    evoCondition: "Walk 1000 steps in Let's Go",
    eggGroups: ["Field"]
  },
  // Kitakami Dex
  wimpod: {
    inherit: true,
    otherFormes: ["Wimpod-Kitakami"],
    formeOrder: ["Wimpod", "Wimpod-Kitakami"]
  },
  wimpodkitakami: {
    num: 767,
    name: "Wimpod-Kitakami",
    baseSpecies: "Wimpod",
    forme: "Kitakami",
    types: ["Bug", "Ground"],
    baseStats: { hp: 40, atk: 35, def: 30, spa: 20, spd: 80, spe: 30 },
    abilities: { 0: "Dry Skin", H: "Tough Claws" },
    heightm: 2.1,
    weightkg: 79.5,
    color: "Gray",
    evos: ["Golisargil"],
    eggGroups: ["Bug", "Water 3"]
  },
  golisargil: {
    num: -5,
    name: "Golisargil",
    types: ["Bug", "Ground"],
    baseStats: { hp: 75, atk: 125, def: 65, spa: 45, spd: 140, spe: 90 },
    abilities: { 0: "Dry Skin", H: "Rattled" },
    heightm: 0.6,
    weightkg: 280,
    color: "Gray",
    prevo: "Wimpod-Kitakami",
    evoLevel: 30,
    eggGroups: ["Bug", "Water 3"]
  },
  vanillite: {
    inherit: true,
    otherFormes: ["Vanillite-Kitakami"],
    formeOrder: ["Vanillite", "Vanillite-Kitakami"]
  },
  vanillitekitakami: {
    num: 582,
    name: "Vanillite-Kitakami",
    baseSpecies: "Vanillite",
    forme: "Kitakami",
    types: ["Ice", "Rock"],
    baseStats: { hp: 30, atk: 50, def: 50, spa: 65, spd: 60, spe: 50 },
    abilities: { 0: "Well-Baked Body", 1: "Solid Rock", H: "Weak Armor" },
    heightm: 0.4,
    weightkg: 7.5,
    color: "White",
    evos: ["Vanillish-Kitakami"],
    eggGroups: ["Mineral"]
  },
  vanillish: {
    inherit: true,
    otherFormes: ["Vanillish-Kitakami"],
    formeOrder: ["Vanillish", "Vanillish-Kitakami"]
  },
  vanillishkitakami: {
    num: 583,
    name: "Vanillish-Kitakami",
    baseSpecies: "Vanillish",
    forme: "Kitakami",
    types: ["Ice", "Rock"],
    baseStats: { hp: 51, atk: 65, def: 65, spa: 80, spd: 75, spe: 59 },
    abilities: { 0: "Well-Baked Body", 1: "Solid Rock", H: "Weak Armor" },
    heightm: 1.3,
    weightkg: 41,
    color: "White",
    prevo: "Vanillite-Kitakami",
    evoLevel: 35,
    evos: ["Sundilluxe"],
    eggGroups: ["Mineral"]
  },
  sundilluxe: {
    num: -29,
    name: "Sundilluxe",
    types: ["Ice", "Rock"],
    baseStats: { hp: 70, atk: 80, def: 95, spa: 110, spd: 95, spe: 85 },
    abilities: { 0: "Well-Baked Body", 1: "Sand Stream", H: "Weak Armor" },
    heightm: 1.5,
    weightkg: 60.5,
    color: "White",
    prevo: "Vanillish-Kitakami",
    evoLevel: 47,
    eggGroups: ["Mineral"]
  },
  // Orre Dex
  gossifleur: {
    inherit: true,
    otherFormes: ["Gossifleur-Orre"],
    formeOrder: ["Gossifleur", "Gossifleur-Orre"]
  },
  gossifleurorre: {
    num: 829,
    name: "Gossifleur-Orre",
    baseSpecies: "Gossifleur",
    forme: "Orre",
    types: ["Fairy"],
    baseStats: { hp: 40, atk: 60, def: 40, spa: 60, spd: 40, spe: 10 },
    abilities: { 0: "Contrary", 1: "Regenerator", H: "Intimidate" },
    heightm: 0.4,
    weightkg: 2.2,
    color: "Green",
    evos: ["Eldegoss-Orre"],
    eggGroups: ["Grass"]
  },
  eldegoss: {
    inherit: true,
    otherFormes: ["Eldegoss-Orre"],
    formeOrder: ["Eldegoss", "Wimpod-Orre"]
  },
  eldegossorre: {
    num: 830,
    name: "Eldegoss-Orre",
    baseSpecies: "Eldegoss",
    forme: "Orre",
    types: ["Fairy", "Dark"],
    baseStats: { hp: 60, atk: 120, def: 50, spa: 90, spd: 80, spe: 60 },
    abilities: { 0: "Contrary", 1: "Regenerator", H: "Intimidate" },
    heightm: 0.5,
    weightkg: 2.5,
    color: "Green",
    prevo: "Gossifleur-Orre",
    evoLevel: 20,
    eggGroups: ["Grass"],
    evos: ["Eldegoth"]
  },
  eldegoth: {
    num: -6,
    name: "Eldegoth",
    types: ["Fairy", "Dark"],
    baseStats: { hp: 85, atk: 120, def: 55, spa: 130, spd: 70, spe: 70 },
    abilities: { 0: "Contrary", 1: "Regenerator", H: "Intimidate" },
    heightm: 0.5,
    weightkg: 17.5,
    color: "Green",
    prevo: "Eldegoss-Orre",
    evoLevel: 36,
    eggGroups: ["Grass"]
  },
  skarmory: {
    inherit: true,
    otherFormes: ["Skarmory-Orre"],
    formeOrder: ["Skarmory", "Skarmory-Orre"]
  },
  skarmoryorre: {
    num: 227,
    name: "Skarmory-Orre",
    baseSpecies: "Skarmory",
    forme: "Orre",
    types: ["Steel", "Fighting"],
    baseStats: { hp: 65, atk: 100, def: 100, spa: 40, spd: 70, spe: 90 },
    abilities: { 0: "Battle Armor", 1: "Sturdy", H: "Aerodynamic" },
    heightm: 1.07,
    weightkg: 50.5,
    color: "Gray",
    eggGroups: ["Flying"],
    evos: ["Skarocious"]
  },
  skarocious: {
    num: -7,
    name: "Skarocious",
    types: ["Steel", "Fighting"],
    baseStats: { hp: 65, atk: 120, def: 140, spa: 40, spd: 70, spe: 90 },
    abilities: { 0: "Battle Armor", 1: "Sturdy", H: "Aerodynamic" },
    heightm: 2.5,
    weightkg: 270,
    color: "Gray",
    eggGroups: ["Flying"],
    prevo: "Skarmory-Orre",
    evoType: "levelHold",
    evoItem: "Fossile"
  },
  feebas: {
    inherit: true,
    otherFormes: ["Feebas-Orre"],
    formeOrder: ["Feebas", "Feebas-Orre"]
  },
  feebasorre: {
    num: 349,
    name: "Feebas-Orre",
    baseSpecies: "Feebas",
    forme: "Orre",
    types: ["Dragon"],
    baseStats: { hp: 20, atk: 15, def: 40, spa: 10, spd: 75, spe: 40 },
    abilities: { 0: "Water Veil", 1: "Heatproof", H: "Adaptability" },
    heightm: 0.4,
    weightkg: 4,
    color: "Brown",
    evos: ["Quetzalucid"],
    eggGroups: ["Water 1", "Dragon"]
  },
  quetzalucid: {
    num: -8,
    name: "Quetzalucid",
    types: ["Dragon", "Flying"],
    baseStats: { hp: 95, atk: 100, def: 60, spa: 100, spd: 60, spe: 125 },
    abilities: { 0: "Dazzling", 1: "Flash Fire", H: "Magic Guard" },
    heightm: 5.5,
    weightkg: 132,
    color: "Pink",
    prevo: "Feebas-Orre",
    evoType: "useItem",
    evoItem: "Dawn Stone",
    eggGroups: ["Water 1", "Dragon"]
  },
  hoothoot: {
    inherit: true,
    otherFormes: ["Hoothoot-Orre"],
    formeOrder: ["Hoothoot", "Hoothoot-Orre"]
  },
  hoothootorre: {
    num: 163,
    name: "Hoothoot-Orre",
    baseSpecies: "Hoothoot",
    forme: "Orre",
    types: ["Ground", "Flying"],
    baseStats: { hp: 60, atk: 33, def: 50, spa: 33, spd: 56, spe: 30 },
    abilities: { 0: "Harvest", 1: "Keen Eye", H: "Tinted Lens" },
    heightm: 1.1,
    weightkg: 80,
    color: "Brown",
    evos: ["Noctowl-Orre"],
    eggGroups: ["Flying"]
  },
  noctowl: {
    inherit: true,
    otherFormes: ["Noctowl-Orre"],
    formeOrder: ["Noctowl", "Noctowl-Orre"]
  },
  noctowlorre: {
    num: 164,
    name: "Noctowl-Orre",
    baseSpecies: "Noctowl",
    forme: "Orre",
    types: ["Ground", "Flying"],
    baseStats: { hp: 100, atk: 55, def: 96, spa: 55, spd: 96, spe: 50 },
    abilities: { 0: "Harvest", 1: "Keen Eye", H: "Tinted Lens" },
    heightm: 1.6,
    weightkg: 40.8,
    color: "Brown",
    prevo: "Hoothoot-Orre",
    evoLevel: 20,
    eggGroups: ["Flying"],
    evos: ["Archathene"]
  },
  archathene: {
    num: -16,
    name: "Archathene",
    types: ["Ground", "Fairy"],
    baseStats: { hp: 100, atk: 85, def: 96, spa: 85, spd: 96, spe: 60 },
    abilities: { 0: "Harvest", 1: "Keen Eye", H: "Tinted Lens" },
    heightm: 1.78,
    weightkg: 113.4,
    color: "Brown",
    prevo: "Noctowl-Orre",
    eggGroups: ["Flying"]
  },
  poliwag: {
    inherit: true,
    evos: ["Poliwhirl", "Poliwhirl-Orre"]
  },
  poliwhirl: {
    inherit: true,
    otherFormes: ["Poliwhirl-Orre"],
    formeOrder: ["Poliwhirl", "Poliwhirl-Orre"]
  },
  poliwhirlorre: {
    num: 61,
    name: "Poliwhirl-Orre",
    baseSpecies: "Poliwhirl",
    forme: "Orre",
    types: ["Water", "Rock"],
    baseStats: { hp: 75, atk: 75, def: 65, spa: 40, spd: 40, spe: 90 },
    abilities: { 0: "Earth Eater", 1: "Damp", H: "Sand Stream" },
    heightm: 1.1,
    weightkg: 32,
    color: "Blue",
    prevo: "Poliwag",
    evoLevel: 25,
    evos: ["Poliorre"],
    eggGroups: ["Water 1"]
  },
  poliorre: {
    num: -17,
    name: "Poliorre",
    types: ["Water", "Rock"],
    baseStats: { hp: 100, atk: 105, def: 95, spa: 60, spd: 80, spe: 70 },
    abilities: { 0: "Earth Eater", 1: "Damp", H: "Sand Stream" },
    heightm: 1.3,
    weightkg: 68.9,
    color: "Blue",
    prevo: "Poliwhirl-Orre",
    evoType: "useItem",
    evoItem: "Water Stone",
    eggGroups: ["Water 1"]
  },
  bounsweet: {
    inherit: true,
    otherFormes: ["Bounsweet-Orre"],
    formeOrder: ["Bounsweet", "Bounsweet-Orre"]
  },
  bounsweetorre: {
    num: 761,
    name: "Bounsweet-Orre",
    baseSpecies: "Bounsweet",
    forme: "Orre",
    types: ["Grass", "Dragon"],
    gender: "F",
    baseStats: { hp: 42, atk: 32, def: 34, spa: 30, spd: 34, spe: 38 },
    abilities: { 0: "Leaf Guard", 1: "Own Tempo", H: "Draconate" },
    heightm: 0.3,
    weightkg: 3.5,
    color: "Purple",
    evos: ["Steenee-Orre"],
    eggGroups: ["Grass"]
  },
  steenee: {
    inherit: true,
    otherFormes: ["Bounsweet-Orre"],
    formeOrder: ["Bounsweet", "Bounsweet-Orre"]
  },
  steeneeorre: {
    num: 762,
    name: "Steenee-Orre",
    baseSpecies: "Steenee",
    forme: "Orre",
    types: ["Grass", "Dragon"],
    gender: "F",
    baseStats: { hp: 52, atk: 42, def: 44, spa: 40, spd: 44, spe: 62 },
    abilities: { 0: "Leaf Guard", 1: "Own Tempo", H: "Draconate" },
    heightm: 0.7,
    weightkg: 8.1,
    color: "Purple",
    prevo: "Bounsweet-Orre",
    evoLevel: 18,
    evos: ["Tsarvyrn"],
    eggGroups: ["Grass"]
  },
  tsarvyrn: {
    num: -26,
    name: "Tsarvyrn",
    types: ["Grass", "Dragon"],
    gender: "F",
    baseStats: { hp: 72, atk: 122, def: 82, spa: 48, spd: 82, spe: 102 },
    abilities: { 0: "Leaf Guard", 1: "Own Tempo", H: "Draconate" },
    heightm: 2,
    weightkg: 24.5,
    color: "Purple",
    prevo: "Steenee-Orre",
    evoType: "levelMove",
    evoMove: "Stomp",
    eggGroups: ["Grass"]
  },
  yanma: {
    inherit: true,
    otherFormes: ["Yanma-Orre"],
    formeOrder: ["Yanma", "Yanma-Orre"]
  },
  yanmaorre: {
    num: 193,
    name: "Yanma-Orre",
    baseSpecies: "Yanma",
    forme: "Orre",
    types: ["Bug", "Fire"],
    baseStats: { hp: 65, atk: 65, def: 45, spa: 75, spd: 45, spe: 95 },
    abilities: { 0: "Flash Fire", 1: "Compound Eyes", H: "Wind Rider" },
    heightm: 1.2,
    weightkg: 38,
    color: "Red",
    evos: ["Yanfuego"],
    eggGroups: ["Bug"]
  },
  yanfuego: {
    num: -32,
    name: "Yanfuego",
    types: ["Bug", "Fire"],
    baseStats: { hp: 78, atk: 71, def: 86, spa: 110, spd: 70, spe: 100 },
    abilities: { 0: "Flash Fire", 1: "Tinted Lens", H: "Wind Rider" },
    heightm: 1.9,
    weightkg: 45.4,
    color: "Red",
    prevo: "Yanma-Orre",
    eggGroups: ["Bug"]
  },
  // Distortion World Dex
  tadbulb: {
    inherit: true,
    otherFormes: ["Tadbulb-Distorted"],
    formeOrder: ["Tadbulb", "Tadbulb-Distorted"]
  },
  tadbulbdistorted: {
    num: 938,
    name: "Tadbulb-Distorted",
    baseSpecies: "Tadbulb",
    forme: "Distorted",
    types: ["Poison", "Ground"],
    baseStats: { hp: 61, atk: 31, def: 41, spa: 59, spd: 35, spe: 45 },
    abilities: { 0: "Own Tempo", 1: "Unaware", H: "Damp" },
    heightm: 0.3,
    weightkg: 0.4,
    color: "Yellow",
    evos: ["Bellitoxin"],
    eggGroups: ["Water 1"]
  },
  bellitoxin: {
    num: -25,
    name: "Bellitoxin",
    types: ["Poison", "Ground"],
    baseStats: { hp: 109, atk: 100, def: 98, spa: 60, spd: 83, spe: 45 },
    abilities: { 0: "Poison Point", 1: "Unaware", H: "Damp" },
    heightm: 1.2,
    weightkg: 60,
    color: "Green",
    prevo: "Tadbulb-Distorted",
    evoType: "useItem",
    evoItem: "Thunder Stone",
    eggGroups: ["Water 1"]
  },
  staryu: {
    inherit: true,
    otherFormes: ["Staryu-Distorted"],
    formeOrder: ["Staryu", "Staryu-Distorted"]
  },
  staryudistorted: {
    num: 120,
    name: "Staryu-Distorted",
    baseSpecies: "Staryu",
    forme: "Distorted",
    types: ["Rock"],
    gender: "N",
    baseStats: { hp: 30, atk: 70, def: 55, spa: 85, spd: 55, spe: 45 },
    abilities: { 0: "Intimidate", 1: "Natural Cure", H: "Serene Grace" },
    heightm: 0.8,
    weightkg: 34.5,
    color: "Brown",
    evos: ["Starmie-Distorted"],
    eggGroups: ["Water 3"]
  },
  starmie: {
    inherit: true,
    otherFormes: ["Starmie-Distorted"],
    formeOrder: ["Starmie", "Starmie-Distorted"]
  },
  starmiedistorted: {
    num: 121,
    name: "Starmie-Distorted",
    baseSpecies: "Tadbulb",
    forme: "Distorted",
    types: ["Rock", "Ghost"],
    gender: "N",
    baseStats: { hp: 60, atk: 75, def: 85, spa: 115, spd: 100, spe: 85 },
    abilities: { 0: "Intimidate", 1: "Natural Cure", H: "Serene Grace" },
    heightm: 1.1,
    weightkg: 80,
    color: "Purple",
    prevo: "Staryu-Distorted",
    evoType: "useItem",
    evoItem: "Water Stone",
    eggGroups: ["Water 3"],
    evos: ["Stargoneion"]
  },
  stargoneion: {
    num: -30,
    name: "Stargoneion",
    types: ["Rock", "Ghost"],
    gender: "N",
    baseStats: { hp: 80, atk: 90, def: 100, spa: 140, spd: 125, spe: 65 },
    abilities: { 0: "Intimidate", 1: "Natural Cure", H: "Serene Grace" },
    heightm: 1.5,
    weightkg: 158.76,
    color: "Purple",
    prevo: "Starmie-Distorted",
    evoType: "useItem",
    evoItem: "Water Stone",
    eggGroups: ["Water 3"]
  },
  wooloo: {
    inherit: true,
    otherFormes: ["Wooloo-Distorted"],
    formeOrder: ["Wooloo", "Wooloo-Distorted"]
  },
  wooloodistorted: {
    num: 831,
    name: "Wooloo-Distorted",
    baseSpecies: "Wooloo",
    forme: "Distorted",
    types: ["Psychic", "Grass"],
    baseStats: { hp: 48, atk: 40, def: 45, spa: 40, spd: 55, spe: 42 },
    abilities: { 0: "Grass Pelt", 1: "Filter", H: "Bulletproof" },
    heightm: 0.6,
    weightkg: 6,
    color: "White",
    evos: ["Dubwool-Distorted"],
    eggGroups: ["Field"]
  },
  dubwool: {
    inherit: true,
    otherFormes: ["Dubwool-Distorted"],
    formeOrder: ["Dubwool", "Dubwool-Distorted"]
  },
  dubwooldistorted: {
    num: 832,
    name: "Dubwool-Distorted",
    baseSpecies: "Dubwool",
    forme: "Distorted",
    types: ["Psychic", "Grass"],
    baseStats: { hp: 88, atk: 72, def: 90, spa: 80, spd: 100, spe: 60 },
    abilities: { 0: "Grass Pelt", 1: "Filter", H: "Bulletproof" },
    heightm: 1.3,
    weightkg: 43,
    color: "White",
    prevo: "Wooloo-Distorted",
    evoLevel: 24,
    eggGroups: ["Field"],
    evos: ["Dushugura"]
  },
  dushugura: {
    num: -36,
    name: "Dushugura",
    types: ["Psychic", "Grass"],
    baseStats: { hp: 108, atk: 70, def: 103, spa: 100, spd: 120, spe: 40 },
    abilities: { 0: "Grassy Surge", 1: "Filter", H: "Bulletproof" },
    heightm: 1.3,
    weightkg: 43,
    color: "White",
    prevo: "Dubwool-Distorted",
    evoLevel: 48,
    eggGroups: ["Field"]
  },
  // Ultra Space Dex
  snubbull: {
    inherit: true,
    otherFormes: ["Snubbull-Ultra"],
    formeOrder: ["Snubbull", "Snubbull-Ultra"]
  },
  snubbullultra: {
    num: 209,
    name: "Snubbull-Ultra",
    baseSpecies: "Snubbull",
    forme: "Ultra",
    types: ["Dark", "Normal"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 60, atk: 80, def: 50, spa: 40, spd: 40, spe: 30 },
    abilities: { 0: "Beast Boost" },
    heightm: 0.6,
    weightkg: 7.8,
    color: "Pink",
    evos: ["Granbull"],
    eggGroups: ["Field", "Fairy"]
  },
  granbull: {
    inherit: true,
    otherFormes: ["Granbull-Ultra"],
    formeOrder: ["Granbull", "Granbull-Ultra"]
  },
  granbullultra: {
    num: 210,
    name: "Granbull-Ultra",
    baseSpecies: "Granbull",
    forme: "Ultra",
    types: ["Dark", "Normal"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 90, atk: 60, def: 60, spa: 120, spd: 75, spe: 45 },
    abilities: { 0: "Beast Boost" },
    heightm: 1.4,
    weightkg: 48.7,
    color: "Purple",
    prevo: "Snubbull-Ultra",
    evoLevel: 23,
    eggGroups: ["Field", "Fairy"],
    evos: ["Blancbull"]
  },
  blancbull: {
    num: -9,
    name: "Blancbull",
    types: ["Dark", "Poison"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 90, atk: 60, def: 73, spa: 120, spd: 113, spe: 101 },
    abilities: { 0: "Beast Boost" },
    heightm: 1.4,
    weightkg: 48.7,
    color: "Purple",
    prevo: "Granbull-Ultra",
    evoType: "levelMove",
    evoMove: "Toxic",
    eggGroups: ["Field", "Fairy"]
  },
  emolga: {
    inherit: true,
    otherFormes: ["Emolga-Ultra"],
    formeOrder: ["Emolga", "Emolga-Ultra"]
  },
  emolgaultra: {
    num: 587,
    name: "Emolga-Ultra",
    baseSpecies: "Emolga",
    forme: "Ultra",
    types: ["Electric", "Poison"],
    baseStats: { hp: 55, atk: 95, def: 60, spa: 55, spd: 60, spe: 103 },
    abilities: { 0: "Frenzy Virus", H: "Regenerator" },
    heightm: 0.4,
    weightkg: 5,
    color: "White",
    eggGroups: ["Field"],
    evos: ["Jinrolga"]
  },
  jinrolga: {
    num: -22,
    name: "Jinrolga",
    types: ["Electric", "Poison"],
    baseStats: { hp: 75, atk: 115, def: 70, spa: 75, spd: 70, spe: 103 },
    abilities: { 0: "Frenzy Virus", H: "Regenerator" },
    heightm: 0.91,
    weightkg: 26.39,
    color: "White",
    eggGroups: ["Field"],
    prevo: "Emolga-Ultra"
  },
  applin: {
    inherit: true,
    otherFormes: ["Applin-Ultra"],
    formeOrder: ["Applin", "Applin-Ultra"]
  },
  applinultra: {
    num: 840,
    name: "Applin-Ultra",
    baseSpecies: "Applin",
    forme: "Ultra",
    types: ["Grass", "Rock"],
    baseStats: { hp: 40, atk: 20, def: 60, spa: 60, spd: 50, spe: 30 },
    abilities: { 0: "Ripen", 1: "Shell Armor", H: "Bulletproof" },
    heightm: 0.2,
    weightkg: 2.3,
    color: "Green",
    evos: ["Calcismith"],
    eggGroups: ["Grass", "Dragon"]
  },
  calcismith: {
    num: -33,
    name: "Calcismith",
    types: ["Grass", "Rock"],
    baseStats: { hp: 80, atk: 44, def: 100, spa: 110, spd: 90, spe: 61 },
    abilities: { 0: "Ripen", 1: "Shell Armor", H: "Unburden" },
    heightm: 0.8,
    weightkg: 13.7,
    color: "Green",
    prevo: "Applin-Ultra",
    evoType: "useItem",
    evoItem: "Calcium Apple",
    eggGroups: ["Grass", "Dragon"]
  },
  // Paradox Dex
  stufful: {
    inherit: true,
    otherFormes: ["Stufful-Ancient"],
    formeOrder: ["Stufful", "Stufful-Ancient"]
  },
  stuffulancient: {
    num: 759,
    name: "Stufful-Ancient",
    baseSpecies: "Stufful",
    forme: "Ancient",
    types: ["Dark"],
    baseStats: { hp: 70, atk: 75, def: 65, spa: 35, spd: 50, spe: 45 },
    abilities: { 0: "Fluffy", 1: "Strong Jaw", H: "Intimidate" },
    heightm: 0.6,
    weightkg: 9.1,
    color: "Pink",
    evos: ["Inciscyon"],
    eggGroups: ["Field"]
  },
  inciscyon: {
    num: -10,
    name: "Inciscyon",
    types: ["Dark"],
    baseStats: { hp: 120, atk: 125, def: 95, spa: 45, spd: 60, spe: 55 },
    abilities: { 0: "Fluffy", 1: "Strong Jaw", H: "Intimidate" },
    heightm: 2.05,
    weightkg: 59,
    color: "Pink",
    prevo: "Stufful-Ancient",
    evoLevel: 27,
    eggGroups: ["Field"]
  },
  // Lental Dex
  lickitung: {
    inherit: true,
    evos: ["Lickilicky", "Lickilicky-Lental"]
  },
  lickilicky: {
    inherit: true,
    otherFormes: ["Lickilicky-Lental"],
    formeOrder: ["Lickilicky", "Lickilicky-Lental"]
  },
  lickilickylental: {
    num: 463,
    name: "Lickilicky-Lental",
    baseSpecies: "Lickilicky",
    forme: "Lental",
    types: ["Normal", "Dragon"],
    baseStats: { hp: 110, atk: 95, def: 85, spa: 50, spd: 95, spe: 80 },
    abilities: { 0: "Own Tempo", 1: "Sand Rush", H: "Cloud Nine" },
    heightm: 1.7,
    weightkg: 140,
    color: "Pink",
    prevo: "Lickitung",
    evoType: "levelMove",
    evoMove: "Rollout",
    eggGroups: ["Monster"],
    evos: ["Anolicky"]
  },
  anolicky: {
    num: -23,
    name: "Anolicky",
    types: ["Normal", "Dragon"],
    baseStats: { hp: 110, atk: 110, def: 75, spa: 50, spd: 100, spe: 103 },
    abilities: { 0: "Unburden", 1: "Sand Rush", H: "Cloud Nine" },
    heightm: 1.7,
    weightkg: 64.6,
    color: "Pink",
    prevo: "Lickilicky-Lental",
    evoType: "levelMove",
    evoMove: "Rollout",
    eggGroups: ["Monster"]
  },
  ekans: {
    inherit: true,
    otherFormes: ["Ekans-Lental"],
    formeOrder: ["Ekans", "Ekans-Lental"]
  },
  ekanslental: {
    num: 23,
    name: "Ekans-Lental",
    baseSpecies: "Ekans",
    forme: "Lental",
    types: ["Fire", "Psychic"],
    baseStats: { hp: 55, atk: 60, def: 44, spa: 40, spd: 35, spe: 54 },
    abilities: { 0: "Intimidate", 1: "Forewarn", H: "Unnerve" },
    heightm: 2,
    weightkg: 6.9,
    color: "Purple",
    evos: ["Arbok-Lental"],
    eggGroups: ["Field", "Dragon"]
  },
  arbok: {
    inherit: true,
    otherFormes: ["Arbok-Lental"],
    formeOrder: ["Arbok", "Arbok-Lental"]
  },
  arboklental: {
    num: 24,
    name: "Arbok-Lental",
    baseSpecies: "Arbok",
    forme: "Lental",
    types: ["Fire", "Psychic"],
    baseStats: { hp: 80, atk: 95, def: 69, spa: 60, spd: 65, spe: 79 },
    abilities: { 0: "Intimidate", 1: "Forewarn", H: "Unnerve" },
    heightm: 3.5,
    weightkg: 65,
    color: "Purple",
    prevo: "Ekans-Lental",
    evoLevel: 22,
    eggGroups: ["Field", "Dragon"],
    evos: ["Kobralleh"]
  },
  kobralleh: {
    num: -37,
    name: "Kobralleh",
    types: ["Fire", "Psychic"],
    baseStats: { hp: 100, atk: 115, def: 90, spa: 71, spd: 83, spe: 89 },
    abilities: { 0: "Intimidate", 1: "Forewarn", H: "Unnerve" },
    heightm: 3.5,
    weightkg: 65,
    color: "Purple",
    prevo: "Arbok-Lental",
    evoLevel: 45,
    eggGroups: ["Field", "Dragon"]
  }
};
//# sourceMappingURL=pokedex.js.map
