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
  alliglacier: {
    num: 1006,
    name: "Alliglacier",
    types: ["Ice", "Water"],
    baseStats: { hp: 85, atk: 125, def: 100, spa: 65, spd: 85, spe: 85 },
    abilities: { 0: "Water Absorb", 1: "Mold Breaker", H: "Slush Rush" },
    weightkg: 98
  },
  batacomb: {
    num: 1.1,
    name: "Batacomb",
    types: ["Ground", "Flying"],
    baseStats: { hp: 100, atk: 75, def: 85, spa: 110, spd: 80, spe: 70 },
    abilities: { 0: "Regenerator" },
    height: 8,
    weightkg: 8
  },
  centufowl: {
    num: 2.1,
    name: "Centufowl",
    types: ["Normal", "Grass"],
    baseStats: { hp: 75, atk: 115, def: 115, spa: 55, spd: 75, spe: 75 },
    abilities: { 0: "Queenly Majesty", 1: "Merciless", H: "Grassy Surge" },
    height: 150,
    weightkg: 150
  },
  cetenor: {
    num: 3.1,
    name: "Cetenor",
    types: ["Fairy", "Water"],
    baseStats: { hp: 65, atk: 125, def: 60, spa: 95, spd: 60, spe: 105 },
    abilities: { 0: "Inner Focus", 1: "Regenerator", H: "Reckless" },
    height: 23,
    weightkg: 23
  },
  deciberd: {
    num: 1002,
    name: "Deciberd",
    types: ["Electric", "Flying"],
    baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
    abilities: { 0: "Punk Rock", 1: "Intimidate", H: "Competitive" },
    weightkg: 46.9
  },
  dizmuth: {
    num: 4.1,
    name: "Dizmuth",
    types: ["Rock", "Psychic"],
    baseStats: { hp: 90, atk: 104, def: 80, spa: 108, spd: 55, spe: 115 },
    abilities: { 0: "Clear Body", 1: "Own Tempo", H: "Competitive" },
    height: 5.7,
    weightkg: 5.7
  },
  embeluga: {
    num: 5.1,
    name: "Embeluga",
    types: ["Fire", "Water"],
    baseStats: { hp: 90, atk: 104, def: 70, spa: 108, spd: 100, spe: 48 },
    abilities: { 0: "Flash Fire", 1: "Rain Dish", H: "Unaware" },
    height: 420,
    weightkg: 420
  },
  flameedle: {
    num: 6.1,
    name: "Flameedle",
    types: ["Bug", "Fire"],
    baseStats: { hp: 65, atk: 90, def: 101, spa: 71, spd: 60, spe: 143 },
    abilities: { 0: "Swarm", 1: "Hyper Cutter", H: "Long Reach" },
    height: 4.5,
    weightkg: 4.5
  },
  gestower: {
    num: 7.1,
    name: "Gestower",
    types: ["Grass", "Steel"],
    baseStats: { hp: 89, atk: 83, def: 101, spa: 113, spd: 113, spe: 71 },
    abilities: { 0: "Beast Boost" },
    height: 999,
    weightkg: 999
  },
  gobblen: {
    num: 8.1,
    name: "Gobblen",
    types: ["Dark"],
    baseStats: { hp: 90, atk: 95, def: 80, spa: 70, spd: 80, spe: 125 },
    abilities: { 0: "Good as Gold" },
    height: 12.7,
    weightkg: 12.7
  },
  goddease: {
    num: 1003,
    name: "Goddease",
    types: ["Normal", "Flying"],
    baseStats: { hp: 80, atk: 120, def: 100, spa: 90, spd: 140, spe: 70 },
    abilities: { 0: "Pressure" },
    weightkg: 10.8
  },
  harletritus: {
    num: 9.1,
    name: "Harletritus",
    types: ["Fairy", "Rock"],
    baseStats: { hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61 },
    abilities: { 0: "Sand Stream", H: "Unnerve" },
    height: 60,
    weightkg: 60
  },
  hootsydazey: {
    num: 1005,
    name: "Hootsydazey",
    types: ["Dark", "Fairy"],
    baseStats: { hp: 108, atk: 55, def: 96, spa: 94, spd: 111, spe: 91 },
    abilities: { 0: "Toxic Chain", H: "Technician" },
    weightkg: 80
  },
  kaerust: {
    num: 10.1,
    name: "Kaerust",
    types: ["Water", "Steel"],
    baseStats: { hp: 105, atk: 55, def: 100, spa: 110, spd: 95, spe: 65 },
    abilities: { 0: "Filter" },
    height: 250,
    weightkg: 250
  },
  kartrake: {
    num: 11.1,
    name: "Kartrake",
    types: ["Steel", "Ground"],
    baseStats: { hp: 70, atk: 110, def: 70, spa: 60, spd: 100, spe: 120 },
    abilities: { 0: "Heatproof", 1: "Light Metal", H: "Stall" },
    height: 473.4,
    weightkg: 473.4
  },
  kunekrow: {
    num: 12.1,
    name: "Kunekrow",
    types: ["Grass", "Fighting"],
    baseStats: { hp: 51, atk: 123, def: 111, spa: 61, spd: 63, spe: 101 },
    abilities: { 0: "Keen Eye", 1: "Inner Focus", H: "Defiant" },
    height: 77,
    weightkg: 77
  },
  lanburn: {
    num: 13.1,
    name: "Lanburn",
    types: ["Ghost", "Fire"],
    baseStats: { hp: 66, atk: 55, def: 66, spa: 120, spd: 115, spe: 88 },
    abilities: { 0: "Illuminate", 1: "Flame Body", H: "Levitate" },
    height: 4.2,
    weightkg: 4.2
  },
  lunacorn: {
    num: 1004,
    name: "Lunacorn",
    types: ["Grass", "Fairy"],
    baseStats: { hp: 62, atk: 68, def: 138, spa: 105, spd: 65, spe: 72 },
    abilities: { 0: "Flower Veil", H: "Triage" },
    weightkg: 95
  },
  magiheel: {
    num: 14.1,
    name: "Magiheel",
    types: ["Fighting", "Fairy"],
    baseStats: { hp: 100, atk: 80, def: 65, spa: 65, spd: 80, spe: 100 },
    abilities: { 0: "Sheer Force", H: "Scrappy" },
    height: 48,
    weightkg: 48
  },
  manchini: {
    num: 15.1,
    name: "Manchini",
    types: ["Poison", "Grass"],
    baseStats: { hp: 115, atk: 95, def: 130, spa: 55, spd: 90, spe: 35 },
    abilities: { 0: "Stench", 1: "Wind Rider", H: "Seed Sower" },
    height: 48,
    weightkg: 48
  },
  nebularach: {
    num: 16.1,
    name: "Nebularach",
    types: ["Psychic", "Bug"],
    baseStats: { hp: 70, atk: 45, def: 110, spa: 100, spd: 120, spe: 85 },
    abilities: { 0: "Magic Guard" },
    height: 999,
    weightkg: 999
  },
  phantasohm: {
    num: 17.1,
    name: "Phantasohm",
    types: ["Ghost", "Electric"],
    baseStats: { hp: 88, atk: 110, def: 85, spa: 85, spd: 110, spe: 88 },
    abilities: { 0: "Shadow Shield" },
    height: 6,
    weightkg: 6
  },
  pirrote: {
    num: 1001,
    name: "Pirrote",
    types: ["Flying", "Steel"],
    baseStats: { hp: 98, atk: 121, def: 82, spa: 52, spd: 80, spe: 91 },
    abilities: { 0: "Trace", H: "Iron Barbs" },
    weightkg: 100.7
  },
  pollusk: {
    num: 18.1,
    name: "Pollusk",
    types: ["Poison", "Steel"],
    baseStats: { hp: 72, atk: 63, def: 148, spa: 117, spd: 110, spe: 20 },
    abilities: { 0: "Weak Armor", H: "Toxic Debris" },
    height: 136,
    weightkg: 136
  },
  puffrost: {
    num: 19.1,
    name: "Puffrost",
    types: ["Ice", "Steel"],
    baseStats: { hp: 90, atk: 70, def: 80, spa: 110, spd: 130, spe: 40 },
    abilities: { 0: "Levitate" },
    height: 309,
    weightkg: 309
  },
  punctgris: {
    num: 20.1,
    name: "Punctgris",
    types: ["Normal"],
    baseStats: { hp: 80, atk: 116, def: 75, spa: 65, spd: 75, spe: 119 },
    abilities: { 0: "Moxie", H: "Dazzling" },
    height: 97,
    weightkg: 97
  },
  scorpixie: {
    num: 21.1,
    name: "Scorpixie",
    types: ["Bug", "Fairy"],
    baseStats: { hp: 67, atk: 83, def: 146, spa: 104, spd: 77, spe: 81 },
    abilities: { 0: "Tablets of Ruin", H: "Swarm" },
    height: 65,
    weightkg: 65
  },
  shifteor: {
    num: 22.1,
    name: "Shifteor",
    types: ["Rock", "Psychic"],
    baseStats: { hp: 60, atk: 60, def: 130, spa: 80, spd: 85, spe: 90 },
    abilities: { 0: "Serene Grace" },
    height: 10,
    weightkg: 10
  },
  skeledune: {
    num: 23.1,
    name: "Skeledune",
    types: ["Ghost", "Ground"],
    baseStats: { hp: 71, atk: 99, def: 104, spa: 128, spd: 86, spe: 67 },
    abilities: { 0: "Sand Rush", 1: "Berserk", H: "Mummy" },
    height: 20,
    weightkg: 20
  },
  skoloboros: {
    num: 24.1,
    name: "Skoloboros",
    types: ["Dark", "Dragon"],
    baseStats: { hp: 85, atk: 85, def: 90, spa: 75, spd: 120, spe: 100 },
    abilities: { 0: "Levitate" },
    height: 380,
    weightkg: 380
  },
  spidocket: {
    num: 25.1,
    name: "Spidocket",
    types: ["Bug", "Electric"],
    baseStats: { hp: 75, atk: 60, def: 110, spa: 100, spd: 110, spe: 85 },
    abilities: { 0: "Prankster", 1: "Volt Absorb", H: "Regenerator" },
    height: 6.8,
    weightkg: 6.8
  },
  spirimint: {
    num: 26.1,
    name: "Spirimint",
    types: ["Grass", "Ghost"],
    baseStats: { hp: 84, atk: 60, def: 55, spa: 118, spd: 118, spe: 118 },
    abilities: { 0: "Natural Cure", 1: "Curious Medicine", H: "Neutralizing Gas" },
    height: 36.2,
    weightkg: 36.2
  },
  stavage: {
    num: 27.1,
    name: "Stavage",
    types: ["Water", "Dragon"],
    baseStats: { hp: 60, atk: 130, def: 80, spa: 60, spd: 60, spe: 70 },
    abilities: { 0: "Effect Spore", 1: "Poison Heal", H: "Technician" },
    height: 34.2,
    weightkg: 34.2
  },
  swampent: {
    num: 28.1,
    name: "Swampent",
    types: ["Dragon", "Ground"],
    baseStats: { hp: 95, atk: 105, def: 130, spa: 55, spd: 80, spe: 60 },
    abilities: { 0: "Water Absorb", 1: "Swift Swim", H: "Water Compaction" },
    height: 7.8,
    weightkg: 7.8
  },
  thermollusk: {
    num: 29.1,
    name: "Thermollusk",
    types: ["Ice", "Fire"],
    baseStats: { hp: 80, atk: 80, def: 80, spa: 110, spd: 80, spe: 120 },
    abilities: { 0: "Pressure", H: "Flash Fire" },
    height: 200,
    weightkg: 200
  },
  vamplin: {
    num: 30.1,
    name: "Vamplin",
    types: ["Poison", "Flying"],
    baseStats: { hp: 80, atk: 60, def: 100, spa: 100, spd: 100, spe: 110 },
    abilities: { 0: "Opportunist", H: "Thermal Exchange" },
    height: 30,
    weightkg: 30
  },
  wrathor: {
    num: 31.1,
    name: "Wrathor",
    types: ["Electric", "Dragon"],
    baseStats: { hp: 80, atk: 80, def: 80, spa: 110, spd: 80, spe: 95 },
    abilities: { 0: "Electromorphosis", 1: "Static", H: "Clear Body" },
    height: 120,
    weightkg: 120
  },
  wyverock: {
    num: 32.1,
    name: "Wyverock",
    types: ["Rock", "Dragon"],
    baseStats: { hp: 83, atk: 114, def: 86, spa: 66, spd: 86, spe: 94 },
    abilities: { 0: "Intimidate", 1: "Immunity", H: "Levitate" },
    height: 5,
    weightkg: 5
  },
  yolkrak: {
    num: 33.1,
    name: "Yolkrak",
    types: ["Poison", "Dark"],
    baseStats: { hp: 90, atk: 105, def: 73, spa: 63, spd: 90, spe: 117 },
    abilities: { 0: "Stench", H: "Protean" },
    height: 7,
    weightkg: 7
  },
  encrave: {
    num: 1007,
    name: "Encrave",
    types: ["Water", "Ghost"],
    baseStats: { hp: 146, atk: 115, def: 71, spa: 108, spd: 71, spe: 31 },
    abilities: { 0: "Wandering Spirit" },
    weightkg: 60
  },
  molypoly: {
    num: 1008,
    name: "Molypoly",
    types: ["Ground"],
    baseStats: { hp: 95, atk: 125, def: 110, spa: 60, spd: 80, spe: 75 },
    abilities: { 0: "Mold Breaker", H: "Immunity" },
    weightkg: 9.5
  },
  wizleet: {
    num: 1009,
    name: "Wizleet",
    types: ["Ice"],
    baseStats: { hp: 101, atk: 99, def: 99, spa: 101, spd: 101, spe: 99 },
    abilities: { 0: "Snow Warning" },
    weightkg: 164.7
  },
  ascenshine: {
    num: 1010,
    name: "Ascenshine",
    types: ["Flying", "Fairy"],
    baseStats: { hp: 102, atk: 82, def: 82, spa: 112, spd: 73, spe: 70 },
    abilities: { 0: "Soul-Heart", 1: "Screen Cleaner", H: "Justified" },
    weightkg: 77.7
  },
  bluffly: {
    num: 1011,
    name: "Bluffly",
    types: ["Dark", "Fighting"],
    baseStats: { hp: 150, atk: 80, def: 40, spa: 90, spd: 40, spe: 80 },
    abilities: { 0: "Aftermath", 1: "Unburden", H: "Flare Boost" },
    weightkg: 15
  },
  nitrophend: {
    num: 1012,
    name: "Nitrophend",
    types: ["Poison", "Fighting"],
    baseStats: { hp: 31, atk: 131, def: 131, spa: 68, spd: 81, spe: 98 },
    abilities: { 0: "Screen Cleaner", 1: "Liquid Voice", H: "Refrigerate" },
    weightkg: 0.3
  },
  djinnferno: {
    num: 1013,
    name: "Djinnferno",
    types: ["Fire", "Psychic"],
    baseStats: { hp: 110, atk: 119, def: 82, spa: 40, spd: 75, spe: 35 },
    abilities: { 0: "Flash Fire", 1: "Trace", H: "Magic Guard" },
    weightkg: 333.3
  },
  cerebrawl: {
    num: 1014,
    name: "Cerebrawl",
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 80, atk: 100, def: 75, spa: 90, spd: 75, spe: 110 },
    abilities: { 0: "Cute Charm", 1: "Magic Guard", H: "Unaware" },
    weightkg: 127
  },
  toxatrice: {
    num: 1015,
    name: "Toxatrice",
    types: ["Poison", "Dragon"],
    baseStats: { hp: 90, atk: 60, def: 100, spa: 100, spd: 100, spe: 20 },
    abilities: { 0: "Anticipation", 1: "Aftermath", H: "Analytic" },
    weightkg: 52
  },
  stalagtide: {
    num: 1016,
    name: "Stalagtide",
    types: ["Rock", "Water"],
    baseStats: { hp: 70, atk: 100, def: 100, spa: 70, spd: 70, spe: 130 },
    abilities: { 0: "Sharpness", H: "Sturdy" },
    weightkg: 80
  },
  phantoxin: {
    num: 1017,
    name: "Phantoxin",
    types: ["Ghost", "Poison"],
    baseStats: { hp: 120, atk: 55, def: 70, spa: 110, spd: 70, spe: 95 },
    abilities: { 0: "Water Absorb", 1: "Cursed Body", H: "Damp" },
    weightkg: 40.5
  },
  coraking: {
    num: 1018,
    name: "Coraking",
    types: ["Rock", "Water"],
    baseStats: { hp: 140, atk: 135, def: 125, spa: 65, spd: 55, spe: 45 },
    abilities: { 0: "Lightning Rod", 1: "No Guard", H: "Supreme Overlord" },
    weightkg: 523
  },
  dreadpool: {
    num: 1019,
    name: "Dreadpool",
    types: ["Dark", "Water"],
    baseStats: { hp: 65, atk: 41, def: 148, spa: 121, spd: 139, spe: 41 },
    abilities: { 0: "Liquid Voice" },
    weightkg: 162
  },
  pingray: {
    num: 1020,
    name: "Pingray",
    types: ["Electric", "Psychic"],
    baseStats: { hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115 },
    abilities: { 0: "Tinted Lens", H: "Truant" },
    weightkg: 3.6
  },
  caboa: {
    num: 1021,
    name: "Caboa",
    types: ["Electric", "Ground"],
    baseStats: { hp: 81, atk: 111, def: 131, spa: 58, spd: 88, spe: 63 },
    abilities: { 0: "Thick Fat", H: "Unaware" },
    weightkg: 70
  },
  serpolt: {
    num: 1022,
    name: "Serpolt",
    types: ["Ghost", "Fighting"],
    baseStats: { hp: 82, atk: 105, def: 91, spa: 50, spd: 104, spe: 93 },
    abilities: { 0: "Cursed Body", 1: "Inner Focus", H: "Scrappy" },
    weightkg: 52.5
  },
  ironsalvo: {
    num: 1023,
    name: "Iron Salvo",
    types: ["Water", "Poison"],
    baseStats: { hp: 90, atk: 72, def: 100, spa: 122, spd: 108, spe: 98 },
    abilities: { 0: "Quark Drive" },
    weightkg: 202.2
  },
  folia: {
    num: 1024,
    name: "Folia",
    types: ["Psychic"],
    baseStats: { hp: 75, atk: 55, def: 85, spa: 157, spd: 65, spe: 60 },
    abilities: { 0: "Synchronize", 1: "Mimicry", H: "Poison Heal" },
    weightkg: 40.8
  },
  snowdown: {
    num: 1025,
    name: "Snowdown",
    types: ["Ice", "Fighting"],
    baseStats: { hp: 65, atk: 97, def: 90, spa: 48, spd: 105, spe: 115 },
    abilities: { 0: "Iron Fist", 1: "Limber", H: "Water Veil" },
    weightkg: 58.2
  },
  flossilisk: {
    num: 1026,
    name: "Flossilisk",
    types: ["Fairy", "Dragon"],
    baseStats: { hp: 85, atk: 110, def: 103, spa: 82, spd: 78, spe: 82 },
    abilities: { 0: "Pixilate", 1: "Prankster", H: "Cotton Down" },
    weightkg: 303
  },
  maulsoleum: {
    num: 1027,
    name: "Maulsoleum",
    types: ["Rock", "Ghost"],
    baseStats: { hp: 75, atk: 120, def: 97, spa: 85, spd: 71, spe: 92 },
    abilities: { 0: "Bulletproof", 1: "Infiltrator", H: "Skill Link" },
    weightkg: 350
  }
};
//# sourceMappingURL=pokedex.js.map
