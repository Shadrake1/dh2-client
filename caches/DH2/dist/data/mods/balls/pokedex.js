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
  "baseball": {
    num: 1,
    name: "Baseball",
    types: ["Normal"],
    baseStats: { hp: 70, atk: 100, def: 80, spa: 100, spd: 50, spe: 200 },
    abilities: { 0: "Reckless", 1: "Shadow Tag", H: "Magic Guard" },
    weightkg: 5
  },
  "basketball": {
    num: 2,
    name: "Basketball",
    types: ["Fire"],
    baseStats: { hp: 120, atk: 110, def: 100, spa: 110, spd: 80, spe: 80 },
    abilities: { 0: "Flame Body", 1: "Drought", H: "Magic Bounce" },
    weightkg: 15
  },
  "football": {
    num: 3,
    name: "Football",
    types: ["Ground"],
    baseStats: { hp: 90, atk: 120, def: 120, spa: 80, spd: 90, spe: 100 },
    abilities: { 0: "Rock Head", 1: "Stamina", H: "Hustle" },
    weightkg: 9
  },
  "soccerball": {
    num: 4,
    name: "Soccerball",
    types: ["Fighting"],
    baseStats: { hp: 100, atk: 110, def: 90, spa: 70, spd: 90, spe: 140 },
    abilities: { 0: "Stakeout", 1: "Trace", H: "Speed Boost" },
    weightkg: 12
  },
  "tennisball": {
    num: 5,
    name: "Tennisball",
    types: ["Flying"],
    baseStats: { hp: 50, atk: 100, def: 75, spa: 125, spd: 100, spe: 150 },
    abilities: { 0: "Unburden", 1: "Adaptability", H: "Aerilate" },
    weightkg: 3
  },
  "cricketball": {
    num: 6,
    name: "Cricketball",
    types: ["Bug"],
    baseStats: { hp: 50, atk: 80, def: 80, spa: 130, spd: 100, spe: 160 },
    abilities: { 0: "Rattled", 1: "Sniper", H: "Sheer Force" },
    weightkg: 4
  },
  "watermelon": {
    num: 7,
    name: "Watermelon",
    types: ["Water"],
    baseStats: { hp: 180, atk: 80, def: 80, spa: 120, spd: 80, spe: 60 },
    abilities: { 0: "Drizzle", 1: "Water Absorb", H: "Unaware" },
    weightkg: 25
  },
  "cabbage": {
    num: 8,
    name: "Cabbage",
    types: ["Grass"],
    baseStats: { hp: 120, atk: 60, def: 80, spa: 130, spd: 150, spe: 60 },
    abilities: { 0: "Grassy Surge", 1: "Ripen", H: "Natural Cure" },
    weightkg: 13
  },
  "plasmaball": {
    num: 9,
    name: "Plasmaball",
    types: ["Electric"],
    baseStats: { hp: 80, atk: 65, def: 140, spa: 130, spd: 130, spe: 55 },
    abilities: { 0: "Electric Surge", 1: "Static", H: "Electromorphosis" },
    weightkg: 34
  },
  "snowball": {
    num: 10,
    name: "Snowball",
    types: ["Ice"],
    baseStats: { hp: 50, atk: 150, def: 50, spa: 150, spd: 50, spe: 150 },
    abilities: { 0: "Snow Warning", 1: "Slush Rush", H: "Refrigerate" },
    weightkg: 2
  },
  "crystalball": {
    num: 11,
    name: "Crystalball",
    types: ["Psychic"],
    baseStats: { hp: 100, atk: 60, def: 100, spa: 155, spd: 135, spe: 50 },
    abilities: { 0: "Psychic Surge", 1: "Forewarn", H: "Analytic" },
    weightkg: 21
  },
  "8ball": {
    num: 12,
    name: "8ball",
    types: ["Dark"],
    baseStats: { hp: 60, atk: 80, def: 100, spa: 120, spd: 120, spe: 120 },
    abilities: { 0: "Simple", 1: "Sturdy", H: "Illusion" },
    weightkg: 3
  },
  "gumball": {
    num: 13,
    name: "Gumball",
    types: ["Fairy"],
    baseStats: { hp: 70, atk: 60, def: 50, spa: 170, spd: 150, spe: 100 },
    abilities: { 0: "Misty Surge", 1: "Aftermath", H: "Prankster" },
    weightkg: 3
  },
  "discoball": {
    num: 14,
    name: "Discoball",
    types: ["Steel"],
    baseStats: { hp: 105, atk: 65, def: 120, spa: 115, spd: 135, spe: 60 },
    abilities: { 0: "Mirror Armor", 1: "Soundproof", H: "Levitate" },
    weightkg: 42
  },
  "themoon": {
    num: 15,
    name: "TheMoon",
    types: ["Ghost"],
    baseStats: { hp: 150, atk: 160, def: 180, spa: 40, spd: 50, spe: 20 },
    abilities: { 0: "Rocky Payload", 1: "Unnerve", H: "Pressure" },
    weightkg: 1e3
  },
  "rock": {
    num: 16,
    name: "Rock",
    types: ["Rock"],
    baseStats: { hp: 120, atk: 140, def: 160, spa: 40, spd: 80, spe: 60 },
    abilities: { 0: "Solid Rock", 1: "Moxie", H: "Sand Stream" },
    weightkg: 88
  },
  "virus": {
    num: 17,
    name: "Virus",
    types: ["Poison"],
    baseStats: { hp: 95, atk: 120, def: 90, spa: 110, spd: 115, spe: 70 },
    abilities: { 0: "Merciless", 1: "Corrosion", H: "Regenerator" },
    weightkg: 1
  },
  "dragonball": {
    num: 18,
    name: "Dragonball",
    types: ["Dragon"],
    baseStats: { hp: 50, atk: 125, def: 125, spa: 125, spd: 125, spe: 50 },
    abilities: { 0: "Berserk", 1: "Intimidate", H: "Guts" },
    weightkg: 20
  }
};
//# sourceMappingURL=pokedex.js.map
