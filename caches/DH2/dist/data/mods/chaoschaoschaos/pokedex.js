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
    name: "Aegislash",
    types: ["Steel"],
    baseStats: { hp: 90, atk: 99, def: 130, spa: 99, spd: 55, spe: 82 },
    abilities: { 0: "Ice Scales", H: "Rough Skin" },
    weightkg: 53
  },
  aerodactyl: {
    name: "Aerodactyl",
    types: ["Rock", "Flying"],
    baseStats: { hp: 95, atk: 90, def: 90, spa: 90, spd: 90, spe: 100 },
    abilities: { 0: "Sheer Force" },
    weightkg: 59
  },
  axew: {
    name: "Axew",
    types: ["Dragon", "Steel"],
    baseStats: { hp: 95, atk: 140, def: 95, spa: 55, spd: 95, spe: 75 },
    abilities: { 0: "Serene Grace", 1: "Mold Breaker", H: "Unnerve" },
    weightkg: 18
  },
  blastoise: {
    name: "Blastoise",
    types: ["Water", "Ground"],
    baseStats: { hp: 75, atk: 75, def: 65, spa: 75, spd: 65, spe: 200 },
    abilities: { 0: "Arena Trap", 1: "Shadow Tag", H: "Magnet Pull" },
    weightkg: 188.5
  },
  butterfree: {
    name: "Butterfree",
    types: ["Bug", "Grass"],
    baseStats: { hp: 75, atk: 90, def: 90, spa: 90, spd: 110, spe: 100 },
    abilities: { 0: "Compound Eyes", H: "Triage" },
    weightkg: 32
  },
  cameruptmega: {
    name: "Camerupt-Mega",
    types: ["Ghost"],
    baseStats: { hp: 64, atk: 165, def: 75, spa: 93, spd: 83, spe: 75 },
    abilities: { 0: "Defiant" },
    weightkg: 320.5
  },
  carbink: {
    name: "Carbink",
    types: ["Rock", "Ground"],
    baseStats: { hp: 92, atk: 75, def: 96, spa: 125, spd: 95, spe: 72 },
    abilities: { 0: "Parental Bond", 1: "Clear Body", H: "Sturdy" },
    weightkg: 5.7
  },
  cleffa: {
    name: "Cleffa",
    types: ["Poison", "Dark"],
    baseStats: { hp: 95, atk: 90, def: 105, spa: 80, spd: 105, spe: 80 },
    abilities: { 0: "Poison Point", 1: "Unnerve", H: "Intimidate" },
    weightkg: 3
  },
  corsolagalar: {
    name: "Corsola-Galar",
    types: ["Ghost", "Fairy"],
    baseStats: { hp: 110, atk: 110, def: 110, spa: 75, spd: 85, spe: 65 },
    abilities: { 0: "Cursed Body", H: "Justified" },
    weightkg: 0.5
  },
  cramorantgorging: {
    name: "Cramorant-Gorging",
    types: ["Bug", "Steel"],
    baseStats: { hp: 100, atk: 200, def: 100, spa: 25, spd: 100, spe: 30 },
    abilities: { 0: "Pure Power" },
    weightkg: 18
  },
  crobat: {
    name: "Crobat",
    types: ["Fighting", "Dragon"],
    baseStats: { hp: 100, atk: 80, def: 90, spa: 100, spd: 95, spe: 90 },
    abilities: { 0: "Justified", 1: "Inner Focus", H: "Natural Cure" },
    weightkg: 75
  },
  dhelmise: {
    name: "Dhelmise",
    types: ["Ghost", "Grass"],
    baseStats: { hp: 80, atk: 130, def: 100, spa: 90, spd: 100, spe: 55 },
    abilities: { 0: "Steelworker" },
    weightkg: 210
  },
  emboar: {
    name: "Emboar",
    types: ["Fire"],
    baseStats: { hp: 120, atk: 15, def: 120, spa: 75, spd: 120, spe: 105 },
    abilities: { 0: "Simple", 1: "Rock Head", H: "Reckless" },
    weightkg: 150
  },
  glalie: {
    name: "Glalie",
    types: ["Fairy"],
    baseStats: { hp: 80, atk: 108, def: 80, spa: 107, spd: 80, spe: 100 },
    abilities: { 0: "Inner Focus", 1: "Ice Body", H: "Pixilate" },
    weightkg: 256.5
  },
  greedent: {
    name: "Greedent",
    types: ["Dragon"],
    baseStats: { hp: 155, atk: 5, def: 160, spa: 5, spd: 160, spe: 70 },
    abilities: { 0: "Pressure", H: "Defeatist" },
    weightkg: 6
  },
  gumshoostotem: {
    name: "Gumshoos-Totem",
    types: ["Normal", "Dark"],
    baseStats: { hp: 90, atk: 65, def: 95, spa: 125, spd: 100, spe: 80 },
    abilities: { 0: "Strong Jaw", H: "Adaptability" },
    weightkg: 14.2
  },
  happiny: {
    name: "Happiny",
    types: ["Normal"],
    baseStats: { hp: 250, atk: 10, def: 10, spa: 80, spd: 115, spe: 90 },
    abilities: { 0: "Sheer Force", 1: "Anticipation", H: "Natural Cure" },
    weightkg: 24.4
  },
  indeedeef: {
    name: "Indeedee-F",
    types: ["Grass", "Psychic"],
    baseStats: { hp: 100, atk: 150, def: 90, spa: 90, spd: 95, spe: 30 },
    abilities: { 0: "Grass Pelt", H: "Own Tempo" },
    weightkg: 28
  },
  inkay: {
    name: "Inkay",
    types: ["Flying", "Dark"],
    baseStats: { hp: 100, atk: 80, def: 95, spa: 90, spd: 100, spe: 90 },
    abilities: { 0: "Unaware", 1: "Suction Cups", H: "Sturdy" },
    weightkg: 3.5
  },
  lairon: {
    name: "Lairon",
    types: ["Ghost", "Dragon"],
    baseStats: { hp: 60, atk: 30, def: 130, spa: 25, spd: 130, spe: 180 },
    abilities: { 0: "Sturdy", H: "Aroma Veil" },
    weightkg: 120
  },
  lickilicky: {
    name: "Lickilicky",
    types: ["Poison"],
    baseStats: { hp: 110, atk: 95, def: 85, spa: 90, spd: 105, spe: 70 },
    abilities: { 0: "Own Tempo", 1: "Fur Coat", H: "Cloud Nine" },
    weightkg: 140
  },
  manectric: {
    name: "Manectric",
    types: ["Electric", "Fire"],
    baseStats: { hp: 75, atk: 130, def: 69, spa: 110, spd: 72, spe: 99 },
    abilities: { 0: "Static", 1: "Lightning Rod", H: "Flash Fire" },
    weightkg: 40.2
  },
  mawilemega: {
    name: "Mawile-Mega",
    types: ["Fire", "Ice"],
    baseStats: { hp: 90, atk: 105, def: 115, spa: 75, spd: 115, spe: 55 },
    abilities: { 0: "Huge Power", 1: "Intimidate", H: "Strong Jaw" },
    weightkg: 23.5
  },
  palpitoad: {
    name: "Palpitoad",
    types: ["Water", "Ground"],
    baseStats: { hp: 84, atk: 125, def: 90, spa: 95, spd: 80, spe: 81 },
    abilities: { 0: "Magic Guard", 1: "Intimidate", H: "Sap Sipper" },
    weightkg: 17
  },
  panpour: {
    name: "Panpour",
    types: ["Bug", "Normal"],
    baseStats: { hp: 65, atk: 140, def: 85, spa: 55, spd: 95, spe: 115 },
    abilities: { 0: "Queenly Majesty", 1: "Normalize", H: "Gluttony" },
    weightkg: 13.5
  },
  prinplup: {
    name: "Prinplup",
    types: ["Water", "Poison"],
    baseStats: { hp: 90, atk: 90, def: 115, spa: 90, spd: 115, spe: 55 },
    abilities: { 0: "Natural Cure", H: "Poison Touch" },
    weightkg: 23
  },
  quilladin: {
    name: "Quilladin",
    types: ["Grass", "Ground"],
    baseStats: { hp: 80, atk: 135, def: 65, spa: 85, spd: 95, spe: 95 },
    abilities: { 0: "Rough Skin", 1: "Iron Barbs", H: "Chlorophyll" },
    weightkg: 29
  },
  rampardos: {
    name: "Rampardos",
    types: ["Rock", "Fire"],
    baseStats: { hp: 97, atk: 165, def: 60, spa: 125, spd: 50, spe: 58 },
    abilities: { 0: "Mold Breaker", H: "Sheer Force" },
    weightkg: 102.5
  },
  regieleki: {
    name: "Regieleki",
    types: ["Electric", "Psychic"],
    baseStats: { hp: 110, atk: 110, def: 110, spa: 110, spd: 110, spe: 5 },
    abilities: { 0: "Wimp Out", 1: "Filter", H: "Levitate" },
    weightkg: 145
  },
  seel: {
    name: "Seel",
    types: ["Ice", "Dark"],
    baseStats: { hp: 70, atk: 110, def: 80, spa: 100, spd: 80, spe: 115 },
    abilities: { 0: "Weak Armor", H: "Truant" },
    weightkg: 90
  },
  sigilyph: {
    name: "Sigilyph",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 125, atk: 133, def: 133, spa: 70, spd: 70, spe: 24 },
    abilities: { 0: "Iron Fist" },
    weightkg: 14
  },
  sinistea: {
    name: "Sinistea",
    types: ["Ghost", "Water"],
    baseStats: { hp: 85, atk: 130, def: 75, spa: 95, spd: 70, spe: 100 },
    abilities: { 0: "Weak Armor", H: "Scrappy" },
    weightkg: 0.2
  },
  skrelp: {
    name: "Skrelp",
    types: ["Electric"],
    baseStats: { hp: 70, atk: 95, def: 95, spa: 115, spd: 95, spe: 85 },
    abilities: { 0: "Clear Body", H: "Tough Claws" },
    weightkg: 7.3
  },
  slakoth: {
    name: "Slakoth",
    types: ["Bug", "Fighting"],
    baseStats: { hp: 105, atk: 90, def: 90, spa: 90, spd: 90, spe: 90 },
    abilities: { 0: "Prankster", H: "Truant" },
    weightkg: 24
  },
  slurpuff: {
    name: "Slurpuff",
    types: ["Fairy", "Dark"],
    baseStats: { hp: 92, atk: 113, def: 92, spa: 72, spd: 93, spe: 93 },
    abilities: { 0: "Sweet Veil", H: "Prankster" },
    weightkg: 5
  },
  sobble: {
    name: "Sobble",
    types: ["Poison", "Dark"],
    baseStats: { hp: 100, atk: 80, def: 90, spa: 100, spd: 95, spe: 90 },
    abilities: { 0: "Mold Breaker", H: "Poison Point" },
    weightkg: 4
  },
  steenee: {
    name: "Steenee",
    types: ["Grass", "Electric"],
    baseStats: { hp: 72, atk: 120, def: 98, spa: 50, spd: 98, spe: 117 },
    abilities: { 0: "Leaf Guard", 1: "Volt Absorb", H: "Queenly Majesty" },
    weightkg: 8.2
  },
  stunfiskgalar: {
    name: "Stunfisk-Galar",
    types: ["Fire"],
    baseStats: { hp: 91, atk: 129, def: 90, spa: 72, spd: 90, spe: 83 },
    abilities: { 0: "Mimicry", H: "Poison Heal" },
    weightkg: 20.5
  },
  suicune: {
    name: "Suicune",
    types: ["Ghost", "Ice"],
    baseStats: { hp: 100, atk: 75, def: 100, spa: 90, spd: 105, spe: 85 },
    abilities: { 0: "Pressure", H: "Grim Neigh" },
    weightkg: 187
  },
  trubbish: {
    name: "Trubbish",
    types: ["Poison", "Psychic"],
    baseStats: { hp: 100, atk: 80, def: 120, spa: 90, spd: 110, spe: 55 },
    abilities: { 0: "Aftermath", 1: "Sand Spit", H: "Levitate" },
    weightkg: 31
  },
  turtonator: {
    name: "Turtonator",
    types: ["Fire", "Dragon"],
    baseStats: { hp: 90, atk: 90, def: 135, spa: 90, spd: 100, spe: 50 },
    abilities: { 0: "Shell Armor", H: "Regenerator" },
    weightkg: 212
  },
  uxie: {
    name: "Uxie",
    types: ["Psychic", "Fire"],
    baseStats: { hp: 100, atk: 55, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Drought", H: "Telepathy" },
    weightkg: 0.3
  },
  weedle: {
    name: "Weedle",
    types: ["Grass"],
    baseStats: { hp: 100, atk: 5, def: 135, spa: 90, spd: 135, spe: 90 },
    abilities: { 0: "Shield Dust", 1: "Huge Power", H: "Grassy Surge" },
    weightkg: 3.2
  },
  wooper: {
    name: "Wooper",
    types: ["Fairy"],
    baseStats: { hp: 115, atk: 10, def: 100, spa: 10, spd: 100, spe: 220 },
    abilities: { 0: "Damp", 1: "Pressure", H: "Speed Boost" },
    weightkg: 8.5
  },
  wormadamtrash: {
    name: "Wormadam-Trash",
    types: ["Fighting", "Bug"],
    baseStats: { hp: 93, atk: 92, def: 93, spa: 92, spd: 93, spe: 92 },
    abilities: { 0: "Simple", H: "Contrary" },
    weightkg: 6.5
  }
};
//# sourceMappingURL=pokedex.js.map
