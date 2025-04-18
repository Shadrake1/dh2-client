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
  aegislash: {
    inherit: true,
    num: 1,
    name: "Aegislash",
    types: ["Ghost", "Steel"],
    baseStats: { hp: 120, atk: 60, def: 100, spa: 60, spd: 100, spe: 60 },
    abilities: { 0: "Stance Change", H: "Bulletproof" }
  },
  aegislashblade: {
    inherit: true,
    num: 1,
    name: "Aegislash-Blade",
    types: ["Ghost", "Steel"],
    baseStats: { hp: 120, atk: 100, def: 60, spa: 100, spd: 60, spe: 60 },
    abilities: { 0: "Stance Change", H: "Bulletproof" }
  },
  banettemega: {
    inherit: true,
    num: 2,
    name: "Banette-Mega",
    baseSpecies: null,
    forme: null,
    types: ["Ghost"],
    baseStats: { hp: 64, atk: 165, def: 63, spa: 110, spd: 63, spe: 35 },
    abilities: { 0: "Tough Claws" },
    requiredItem: null
  },
  ceruledge: {
    num: 3,
    name: "Ceruledge",
    types: ["Ghost", "Fire"],
    baseStats: { hp: 85, atk: 115, def: 80, spa: 60, spd: 110, spe: 75 },
    abilities: { 0: "Sharpness", H: "Triage" }
  },
  dofagrigus: {
    num: 4,
    name: "Dofagrigus",
    types: ["Ghost"],
    baseStats: { hp: 70, atk: 55, def: 145, spa: 95, spd: 105, spe: 30 },
    abilities: { 0: "Dummy" }
  },
  eddyazbear: {
    num: 5,
    name: "Eddy Azbear",
    types: ["Ghost", "Fighting"],
    baseStats: { hp: 183, atk: 117, def: 40, spa: 100, spd: 40, spe: 90 },
    abilities: { 0: "Jumpscare", H: "Strong Jaw" }
  },
  fluttermane: {
    num: 6,
    name: "Flutter Mane",
    types: ["Ghost", "Dark", "Fairy"],
    baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
    abilities: { 0: "Protosynthesis", H: "Levitate" }
  },
  fluttermane2: {
    num: 7,
    name: "Flutter Mane 2",
    types: ["Ghost", "Dark", "Fairy"],
    baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
    abilities: { 0: "Protosynthesis", H: "Levitate" }
  },
  gourgeisttiny: {
    num: 8,
    name: "Gourgeist-Tiny",
    baseSpecies: "Gourgeist",
    forme: "Tiny",
    types: ["Ghost", "Grass", "Fire", "Fairy"],
    baseStats: { hp: 5, atk: 81, def: 129, spa: 81, spd: 75, spe: 169 },
    abilities: { 0: "Dazzling" }
  },
  gourgeist: {
    inherit: true,
    num: 9,
    name: "Gourgeist",
    types: ["Ghost", "Grass", "Fire", "Fairy"],
    baseStats: { hp: 55, atk: 91, def: 109, spa: 91, spd: 75, spe: 119 },
    abilities: { 0: "Desolate Land" }
  },
  gourgeistlarge: {
    inherit: true,
    num: 10,
    name: "Gourgeist-Large",
    types: ["Ghost", "Grass", "Fire", "Fairy"],
    baseStats: { hp: 105, atk: 101, def: 89, spa: 101, spd: 75, spe: 69 },
    abilities: { 0: "Spoky" }
  },
  gourgeistgigantic: {
    num: 11,
    name: "Gourgeist-Gigantic",
    baseSpecies: "Gourgeist",
    forme: "Gigantic",
    types: ["Ghost", "Grass", "Fire", "Fairy"],
    baseStats: { hp: 155, atk: 111, def: 69, spa: 111, spd: 75, spe: 19 },
    abilities: { 0: "Pulp Up" }
  },
  houndstone: {
    num: 12,
    name: "Houndstone",
    types: ["Ghost", "Fighting", "Normal"],
    baseStats: { hp: 82, atk: 91, def: 140, spa: 50, spd: 97, spe: 70 },
    abilities: { 0: "Jumpscare", 1: "Undead", H: "Fluffy" }
  },
  indeedee: {
    inherit: true,
    num: 13,
    name: "Indeedee",
    types: ["Ghost", "Normal", "Psychic"],
    baseStats: { hp: 70, atk: 85, def: 75, spa: 105, spd: 95, spe: 95 },
    abilities: { 0: "Inner Focus", 1: "Scrappy", H: "Psychic Surge" }
  },
  jableye: {
    num: 14,
    name: "Jableye",
    types: ["Ghost", "Dark", "Poison"],
    baseStats: { hp: 75, atk: 75, def: 100, spa: 75, spd: 100, spe: 50 },
    abilities: { 0: "Justified", H: "Jankster" }
  },
  jobapplication: {
    num: 15,
    name: "JOB APPLICATION",
    types: ["Ghost", "Normal"],
    baseStats: { hp: 130, atk: 130, def: 70, spa: 50, spd: 70, spe: 80 },
    abilities: { 0: "Jumpscare" }
  },
  lanturnevil: {
    num: 16,
    name: "Lanturn-Evil",
    baseSpecies: "Lanturn",
    forme: "Evil",
    types: ["Ghost", "Retaw", "Critcele"],
    baseStats: { hp: 67, atk: 96, def: 96, spa: 58, spd: 58, spe: 125 },
    abilities: { 0: "Abyssal Light" }
  },
  merasmus: {
    num: 17,
    name: "MERASMUS",
    types: ["Ghost", "Psychic", "Fairy", "Dark"],
    baseStats: { hp: 111, atk: 111, def: 111, spa: 111, spd: 111, spe: 111 },
    abilities: { 0: "Magician" }
  },
  necturna: {
    inherit: true,
    num: 18,
    types: ["Ghost", "Grass", "Rock"],
    baseStats: { hp: 64, atk: 110, def: 110, spa: 105, spd: 120, spe: 38 },
    abilities: { 0: "Forewarn", 1: "Solid Rock", H: "Telepathy" }
  },
  okestarspirit: {
    num: 19,
    name: "Okestar Spirit",
    types: ["Ghost", "ark"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Onder Guard" }
  },
  ppiritomb: {
    num: 20,
    name: "PPiritomb",
    types: ["Ghost", "PDark", "PRock"],
    baseStats: { hp: 50, atk: 92, def: 108, spa: 92, spd: 108, spe: 50 },
    abilities: { 0: "PPressure", H: "Pinfiltrator" }
  },
  quagsiredead: {
    num: 21,
    name: "Quagsire-Dead",
    baseSpecies: "Quagsire",
    forme: "Dead",
    types: ["Ghost", "Water", "Ground"],
    baseStats: { hp: 115, atk: 95, def: 95, spa: 75, spd: 75, spe: 45 },
    abilities: { 0: "Cursed Body", H: "Unaware" }
  },
  rotom: {
    inherit: true,
    num: 22,
    name: "Rotom",
    types: ["Ghost", "Electric"],
    baseStats: { hp: 80, atk: 50, def: 97, spa: 115, spd: 97, spe: 91 },
    abilities: { 0: "Levitate", H: "Shapeshift" }
  },
  rotomheat: {
    inherit: true,
    num: 22,
    types: ["Ghost", "Electric", "Fire"],
    baseStats: { hp: 80, atk: 50, def: 97, spa: 115, spd: 97, spe: 91 },
    abilities: { 0: "Levitate", H: "Shapeshift" }
  },
  rotomwash: {
    inherit: true,
    num: 22,
    types: ["Ghost", "Electric", "Water"],
    baseStats: { hp: 80, atk: 50, def: 97, spa: 115, spd: 97, spe: 91 },
    abilities: { 0: "Levitate", H: "Shapeshift" }
  },
  rotomfrost: {
    inherit: true,
    num: 22,
    types: ["Ghost", "Electric", "Ice"],
    baseStats: { hp: 80, atk: 50, def: 97, spa: 115, spd: 97, spe: 91 },
    abilities: { 0: "Levitate", H: "Shapeshift" }
  },
  rotomfan: {
    inherit: true,
    num: 22,
    types: ["Ghost", "Electric", "Flying"],
    baseStats: { hp: 80, atk: 50, def: 97, spa: 115, spd: 97, spe: 91 },
    abilities: { 0: "Levitate", H: "Shapeshift" }
  },
  rotommow: {
    inherit: true,
    num: 22,
    types: ["Ghost", "Electric", "Grass"],
    baseStats: { hp: 80, atk: 50, def: 97, spa: 115, spd: 97, spe: 91 },
    abilities: { 0: "Levitate", H: "Shapeshift" }
  },
  shedinja: {
    inherit: true,
    num: 23,
    name: "Shedinja",
    types: ["Ghost", "Bug"],
    baseStats: { hp: 1, atk: 90, def: 1, spa: 90, spd: 1, spe: 42 },
    abilities: { 0: "Wonder Guard" }
  },
  trevenant: {
    inherit: true,
    num: 24,
    name: "Trevenant",
    types: ["Ghost", "Grass", "Fighting"],
    baseStats: { hp: 85, atk: 110, def: 106, spa: 65, spd: 102, spe: 57 },
    abilities: { 0: "Natural Cure", 1: "Triage", H: "Revive" }
  },
  trevenantrevenant: {
    num: 24,
    name: "Trevenant-Revenant",
    baseSpecies: "Trevenant",
    forme: "Revenant",
    types: ["Ghost", "Rock", "Fighting"],
    baseStats: { hp: 85, atk: 110, def: 76, spa: 65, spd: 72, spe: 117 },
    abilities: { 0: "Reckless" }
  },
  ursalunabloodmoon: {
    num: 25,
    name: "Ursaluna-Bloodmoon",
    baseSpecies: "Ursaluna",
    forme: "Bloodmoon",
    types: ["Ghost", "Normal", "Ground"],
    baseStats: { hp: 113, atk: 100, def: 90, spa: 135, spd: 65, spe: 52 },
    abilities: { 0: "Mind's Eye", H: "Undead" }
  },
  venomicon: {
    num: 26,
    name: "Venomicon",
    types: ["Ghost", "Poison", "Flying"],
    baseStats: { hp: 85, atk: 50, def: 123, spa: 118, spd: 90, spe: 64 },
    abilities: { 0: "Poison Point", 1: "Cursed Body", H: "Power of Alchemy" }
  },
  venomiconepilogue: {
    num: 27,
    name: "Venomicon-Epilogue",
    baseSpecies: "Venomicon",
    forme: "Epilogue",
    types: ["Ghost", "Poison", "Flying"],
    baseStats: { hp: 85, atk: 112, def: 85, spa: 62, spd: 85, spe: 101 },
    abilities: { 0: "Tinted Lens" }
  },
  wunala: {
    num: 28,
    name: "Wunala",
    types: ["Ghost", "Psychic", "Dark"],
    baseStats: { hp: 67, atk: 113, def: 109, spa: 67, spd: 107, spe: 67 },
    abilities: { 0: "Wandering Spirit", 1: "Wonder Skin", H: "Wand Rush" }
  },
  xorygonz: {
    num: 29,
    name: "XORygon-Z",
    types: ["Ghost", "Steel", "Ice", "Poison"],
    baseStats: { hp: 85, atk: 90, def: 70, spa: 125, spd: 75, spe: 90 },
    abilities: { 0: "Mutual Exclusion", H: "Ahexual" }
  },
  yveltal: {
    inherit: true,
    num: 30,
    name: "Yveltal",
    types: ["Ghost", "Dragon", "Flying"],
    baseStats: { hp: 116, atk: 91, def: 95, spa: 91, spd: 98, spe: 79 },
    abilities: { 0: "Dark Aura", H: "Intimidate" }
  },
  zoroarkhisui: {
    inherit: true,
    num: 31,
    name: "Zoroark-Hisui",
    baseSpecies: "Zoroark",
    forme: "Hisui",
    types: ["Ghost", "Normal", "Ice"],
    baseStats: { hp: 65, atk: 110, def: 70, spa: 105, spd: 70, spe: 110 },
    abilities: { 0: "Cursed Body", 1: "Snow Warning", H: "Illusion" }
  },
  aegislashshrunken: {
    num: 1,
    name: "Aegislash-Shrunken",
    baseSpecies: "Aegislash",
    forme: "Shrunken",
    types: ["Ghost", "Steel"],
    baseStats: { hp: 120, atk: 30, def: 50, spa: 30, spd: 50, spe: 30 },
    abilities: { 0: "Stance Change", H: "Bulletproof" },
    battleOnly: "Aegislash"
  },
  banettemegashrunken: {
    num: 2,
    name: "Banette-Mega-Shrunken",
    baseSpecies: "Banette",
    forme: "Mega-Shrunken",
    types: ["Ghost"],
    baseStats: { hp: 64, atk: 82, def: 32, spa: 55, spd: 32, spe: 17 },
    abilities: { 0: "Tough Claws" },
    battleOnly: "Banette-Mega"
  },
  ceruledgeshrunken: {
    num: 3,
    name: "Ceruledge-Shrunken",
    baseSpecies: "Ceruledge",
    forme: "Shrunken",
    types: ["Ghost", "Fire"],
    baseStats: { hp: 85, atk: 57, def: 40, spa: 30, spd: 55, spe: 37 },
    abilities: { 0: "Sharpness", H: "Triage" },
    battleOnly: "Ceruledge"
  },
  dofagrigusshrunken: {
    num: 4,
    name: "Dofagrigus-Shrunken",
    baseSpecies: "Dofagrigus",
    forme: "Shrunken",
    types: ["Ghost"],
    baseStats: { hp: 70, atk: 27, def: 73, spa: 47, spd: 53, spe: 15 },
    abilities: { 0: "Dummy", H: "Bulletproof" },
    battleOnly: "Dofagrigus"
  },
  eddyazbearshrunken: {
    num: 5,
    name: "Eddy Azbear-Shrunken",
    baseSpecies: "Eddy Azbear",
    forme: "Shrunken",
    types: ["Ghost", "Fighting"],
    baseStats: { hp: 183, atk: 58, def: 20, spa: 50, spd: 20, spe: 45 },
    abilities: { 0: "Jumpscare", H: "Strong Jaw" },
    battleOnly: "Eddy Azbear"
  },
  fluttermaneshrunken: {
    num: 6,
    name: "Flutter Mane-Shrunken",
    baseSpecies: "Flutter Mane",
    forme: "Shrunken",
    types: ["Ghost", "Dark", "Fairy"],
    baseStats: { hp: 95, atk: 47, def: 48, spa: 47, spd: 48, spe: 47 },
    abilities: { 0: "Protosynthesis", H: "Levitate" },
    battleOnly: "Flutter Mane"
  },
  fluttermane2shrunken: {
    num: 7,
    name: "Flutter Mane 2-Shrunken",
    baseSpecies: "Flutter Mane 2",
    forme: "Shrunken",
    types: ["Ghost", "Dark", "Fairy"],
    baseStats: { hp: 95, atk: 47, def: 48, spa: 47, spd: 48, spe: 47 },
    abilities: { 0: "Protosynthesis", H: "Levitate" },
    battleOnly: "Flutter Mane 2"
  },
  gourgeisttinyshrunken: {
    num: 8,
    name: "Gourgeist-Tiny-Shrunken",
    baseSpecies: "Gourgeist",
    forme: "Tiny-Shrunken",
    types: ["Ghost", "Grass", "Fire", "Fairy"],
    baseStats: { hp: 5, atk: 40, def: 65, spa: 40, spd: 38, spe: 84 },
    abilities: { 0: "Grassy Surge" },
    battleOnly: "Gourgeist-Tiny"
  },
  gourgeistshrunken: {
    num: 9,
    name: "Gourgeist-Shrunken",
    baseSpecies: "Gourgeist",
    forme: "Shrunken",
    types: ["Ghost", "Grass", "Fire", "Fairy"],
    baseStats: { hp: 55, atk: 45, def: 55, spa: 45, spd: 38, spe: 59 },
    abilities: { 0: "Poison Heal" },
    battleOnly: "Gourgeist"
  },
  gourgeistlargeshrunken: {
    num: 10,
    name: "Gourgeist-Large-Shrunken",
    baseSpecies: "Gourgeist",
    forme: "Large-Shrunken",
    types: ["Ghost", "Grass", "Fire", "Fairy"],
    baseStats: { hp: 105, atk: 50, def: 45, spa: 50, spd: 38, spe: 34 },
    abilities: { 0: "Spoky" },
    battleOnly: "Gourgeist-Large"
  },
  gourgeistgiganticshrunken: {
    num: 11,
    name: "Gourgeist-Gigantic-Shrunken",
    baseSpecies: "Gourgeist",
    forme: "Gigantic-Shrunken",
    types: ["Ghost", "Grass", "Fire", "Fairy"],
    baseStats: { hp: 155, atk: 55, def: 35, spa: 55, spd: 38, spe: 9 },
    abilities: { 0: "Pulp Up" },
    battleOnly: "Gourgeist-Gigantic"
  },
  houndstoneshrunken: {
    num: 12,
    name: "Houndstone-Shrunken",
    baseSpecies: "Houndstone",
    forme: "Shrunken",
    types: ["Ghost", "Fighting"],
    baseStats: { hp: 82, atk: 46, def: 70, spa: 25, spd: 49, spe: 35 },
    abilities: { 0: "Jumpscare", 1: "Scrappy", H: "Fluffy" },
    battleOnly: "Houndstone"
  },
  indeedeeshrunken: {
    num: 13,
    name: "Indeedee-Shrunken",
    baseSpecies: "Indeedee",
    forme: "Shrunken",
    types: ["Ghost", "Normal", "Psychic"],
    baseStats: { hp: 70, atk: 42, def: 38, spa: 52, spd: 48, spe: 47 },
    abilities: { 0: "Inner Focus", 1: "Scrappy", H: "Psychic Surge" },
    battleOnly: "Indeedee"
  },
  jableyeshrunken: {
    num: 14,
    name: "Jableye-Shrunken",
    baseSpecies: "Jableye",
    forme: "Shrunken",
    types: ["Ghost", "Dark"],
    baseStats: { hp: 75, atk: 25, def: 38, spa: 25, spd: 38, spe: 25 },
    abilities: { 0: "Justified", H: "Jankster" },
    battleOnly: "Jableye"
  },
  jobapplicationshrunken: {
    num: 15,
    name: "JOB APPLICATION-Shrunken",
    baseSpecies: "JOB APPLICATION",
    forme: "Shrunken",
    types: ["Ghost", "Normal"],
    baseStats: { hp: 130, atk: 65, def: 35, spa: 25, spd: 35, spe: 40 },
    abilities: { 0: "Jumpscare" },
    battleOnly: "JOB APPLICATION"
  },
  lanturnevilshrunken: {
    num: 16,
    name: "Lanturn-Evil-Shrunken",
    baseSpecies: "Lanturn",
    forme: "Evil-Shrunken",
    types: ["Ghost", "Retaw", "Critcele"],
    baseStats: { hp: 97, atk: 48, def: 48, spa: 29, spd: 29, spe: 62 },
    abilities: { 0: "Volt Absorb", 1: "Illuminate", H: "Abyssal Light" },
    battleOnly: "Lanturn-Evil"
  },
  merasmusshrunken: {
    num: 17,
    name: "MERASMUS-Shrunken",
    baseSpecies: "MERASMUS",
    forme: "Shrunken",
    types: ["Ghost", "Psychic", "Fairy", "Dark"],
    baseStats: { hp: 111, atk: 55, def: 56, spa: 55, spd: 56, spe: 55 },
    abilities: { 0: "Magician" },
    battleOnly: "MERASMUS"
  },
  necturnashrunken: {
    num: 18,
    name: "Necturna-Shrunken",
    baseSpecies: "Necturna",
    forme: "Shrunken",
    types: ["Ghost", "Grass", "Rock"],
    baseStats: { hp: 64, atk: 55, def: 55, spa: 52, spd: 60, spe: 19 },
    abilities: { 0: "Forewarn", 1: "Solid Rock", H: "Telepathy" },
    battleOnly: "Necturna"
  },
  okestarspiritshrunken: {
    num: 19,
    name: "Okestar Spirit-Shrunken",
    baseSpecies: "Okestar Spirit",
    forme: "Shrunken",
    types: ["Ghost", "ark"],
    baseStats: { hp: 100, atk: 50, def: 50, spa: 50, spd: 50, spe: 50 },
    abilities: { 0: "Onder Guard" },
    battleOnly: "Okestar Spirit"
  },
  ppiritombshrunken: {
    num: 20,
    name: "PPiritomb-Shrunken",
    baseSpecies: "PPiritomb",
    forme: "Shrunken",
    types: ["Ghost", "PDark", "PRock"],
    baseStats: { hp: 50, atk: 46, def: 54, spa: 46, spd: 54, spe: 25 },
    abilities: { 0: "PPressure", H: "Pinfiltrator" },
    battleOnly: "PPiritomb"
  },
  quagsiredeadshrunken: {
    num: 21,
    name: "Quagsire-Dead-Shrunken",
    baseSpecies: "Quagsire",
    forme: "Dead-Shrunken",
    types: ["Ghost", "Water", "Ground"],
    baseStats: { hp: 115, atk: 47, def: 48, spa: 37, spd: 38, spe: 22 },
    abilities: { 0: "Cursed Body", H: "Unaware" },
    battleOnly: "Quagsire-Dead"
  },
  rotomshrunken: {
    num: 22,
    name: "Rotom-Shrunken",
    baseSpecies: "Rotom",
    forme: "Shrunken",
    types: ["Ghost", "Electric"],
    baseStats: { hp: 80, atk: 25, def: 49, spa: 57, spd: 49, spe: 45 },
    abilities: { 0: "Levitate", H: "Shapeshift" },
    battleOnly: "Rotom"
  },
  shedinjashrunken: {
    num: 23,
    name: "Shedinja-Shrunken",
    baseSpecies: "Shedinja",
    forme: "Shrunken",
    types: ["Ghost", "Bug"],
    baseStats: { hp: 1, atk: 45, def: 1, spa: 45, spd: 1, spe: 21 },
    abilities: { 0: "Wonder Guard" },
    battleOnly: "Shedinja"
  },
  trevenantshrunken: {
    num: 24,
    name: "Trevenant-Shrunken",
    baseSpecies: "Trevenant",
    forme: "Shrunken",
    types: ["Ghost", "Grass", "Fighting"],
    baseStats: { hp: 85, atk: 55, def: 53, spa: 32, spd: 51, spe: 28 },
    abilities: { 0: "Natural Cure", 1: "Triage", H: "Revive" },
    battleOnly: "Trevenant"
  },
  ursalunabloodmoonshrunken: {
    num: 25,
    name: "Ursaluna-Bloodmoon-Shrunken",
    baseSpecies: "Ursaluna",
    forme: "Bloodmoon-Shrunken",
    types: ["Ghost", "Normal", "Ground"],
    baseStats: { hp: 113, atk: 50, def: 45, spa: 67, spd: 33, spe: 26 },
    abilities: { 0: "Mind's Eye", H: "Undead" },
    battleOnly: "Ursaluna"
  },
  venomiconshrunken: {
    num: 26,
    name: "Venomicon-Shrunken",
    baseSpecies: "Venomicon",
    forme: "Shrunken",
    types: ["Ghost", "Poison", "Flying"],
    baseStats: { hp: 85, atk: 25, def: 62, spa: 59, spd: 45, spe: 32 },
    abilities: { 0: "Poison Point", 1: "Cursed Body", H: "Power of Alchemy" },
    battleOnly: "Venomicon"
  },
  venomiconepilogueshrunken: {
    num: 27,
    name: "Venomicon-Epilogue-Shrunken",
    baseSpecies: "Venomicon",
    forme: "Epilogue-Shrunken",
    types: ["Ghost", "Poison", "Flying"],
    baseStats: { hp: 85, atk: 56, def: 43, spa: 31, spd: 43, spe: 50 },
    abilities: { 0: "Tinted Lens" },
    battleOnly: "Venomicon-Epilogue"
  },
  wunalashrunken: {
    num: 28,
    name: "Wunala-Shrunken",
    baseSpecies: "Wunala",
    forme: "Shrunken",
    types: ["Ghost", "Psychic", "Dark"],
    baseStats: { hp: 67, atk: 56, def: 55, spa: 33, spd: 54, spe: 33 },
    abilities: { 0: "Wandering Spirit", 1: "Wonder Skin", H: "Wand Rush" },
    battleOnly: "Wunala"
  },
  xorygonzshrunken: {
    num: 29,
    name: "XORygon-Z-Shrunken",
    baseSpecies: "XORygon-Z",
    forme: "Z-Shrunken",
    types: ["Ghost", "Steel", "Ice", "Poison"],
    baseStats: { hp: 85, atk: 45, def: 35, spa: 62, spd: 38, spe: 45 },
    abilities: { 0: "Mutual Exclusion", H: "Ahexual" },
    battleOnly: "XORygon-Z"
  },
  yveltalshrunken: {
    num: 30,
    name: "Yveltal-Shrunken",
    baseSpecies: "Yveltal",
    forme: "Shrunken",
    types: ["Ghost", "Dragon", "Flying"],
    baseStats: { hp: 116, atk: 46, def: 48, spa: 46, spd: 49, spe: 39 },
    abilities: { 0: "Dark Aura", H: "Intimidate" },
    battleOnly: "Yveltal"
  },
  zoroarkhisuishrunken: {
    num: 31,
    name: "Zoroark-Hisui-Shrunken",
    baseSpecies: "Zoroark",
    forme: "Hisui-Shrunken",
    types: ["Ghost", "Normal", "Ice"],
    baseStats: { hp: 65, atk: 55, def: 35, spa: 52, spd: 35, spe: 55 },
    abilities: { 0: "Cursed Body", 1: "Snow Warning", H: "Illusion" },
    battleOnly: "Zoroark-Hisui"
  }
};
//# sourceMappingURL=pokedex.js.map
