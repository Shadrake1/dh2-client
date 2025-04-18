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
  matchupmoth: {
    num: 1001,
    name: "Matchup Moth",
    types: ["Fighting", "Bug"],
    baseStats: { hp: 85, atk: 70, def: 105, spa: 115, spd: 80, spe: 90 },
    abilities: { 0: "Mold Breaker", 1: "Compound Eyes", H: "Dazzling" }
  },
  wobbadubba: {
    num: 1002,
    name: "Wobbadubba",
    types: ["Normal"],
    baseStats: { hp: 110, atk: 5, def: 5, spa: 5, spd: 5, spe: 100 },
    abilities: { 0: "Imposter", 1: "Prankster", H: "Innards Out" }
  },
  jumbojet: {
    num: 1003,
    name: "Jumbo Jet",
    types: ["Steel", "Flying"],
    baseStats: { hp: 125, atk: 120, def: 95, spa: 35, spd: 75, spe: 90 },
    abilities: { 0: "Light Metal", 1: "Defeatist", H: "Iron Barbs" }
  },
  thetombguy: {
    num: 1004,
    name: "the tomb guy",
    types: ["Dark", "Ghost"],
    baseStats: { hp: 50, atk: 100, def: 120, spa: 100, spd: 120, spe: 100 },
    abilities: { 0: "Unaware", 1: "Neutralizing Gas", H: "Battle Armor" }
  },
  palafinbutnotreallybutmaybe: {
    num: 1005,
    name: "Palafinbutnotreallybutmaybe",
    types: ["Water", "Poison"],
    baseStats: { hp: 100, atk: 115, def: 90, spa: 40, spd: 90, spe: 10 },
    abilities: { 0: "Technician", 1: "Grassy Surge", H: "Mold Breaker" }
  },
  bulkybean: {
    num: 1006,
    name: "bulky bean",
    types: ["Fairy", "Ground"],
    baseStats: { hp: 90, atk: 60, def: 97, spa: 95, spd: 115, spe: 104 },
    abilities: { 0: "Huge Power", 1: "Thick Fat", H: "Storm Drain" }
  },
  obstagooner: {
    num: 1007,
    name: "Obstagooner",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 93, atk: 100, def: 101, spa: 60, spd: 91, spe: 105 },
    abilities: { 0: "Defiant", 1: "Intimidate", H: "Poison Heal" }
  },
  evilwaterslide: {
    num: 1008,
    name: "Evilwaterslide",
    types: ["Water", "Fairy"],
    baseStats: { hp: 85, atk: 90, def: 105, spa: 130, spd: 80, spe: 75 },
    abilities: { 0: "Prankster", 1: "Serene Grace", H: "Lightning Rod" }
  },
  baronooze: {
    num: 1009,
    name: "Baronooze",
    types: ["Poison", "Dark"],
    baseStats: { hp: 120, atk: 120, def: 90, spa: 75, spd: 75, spe: 60 },
    abilities: { 0: "Long Reach", 1: "Regenerator", H: "Supreme Overlord" }
  },
  flamadillo: {
    num: 1010,
    name: "Flamadillo",
    types: ["Fire", "Ground"],
    baseStats: { hp: 109, atk: 121, def: 116, spa: 64, spd: 100, spe: 80 },
    abilities: { 0: "Mold Breaker", 1: "Toxic Debris", H: "Dry Skin" }
  },
  ampophis: {
    num: 1011,
    name: "Ampophis",
    types: ["Electric", "Dragon"],
    baseStats: { hp: 100, atk: 95, def: 90, spa: 120, spd: 75, spe: 120 },
    abilities: { 0: "Levitate", H: "Lightning Rod" }
  },
  idkman: {
    num: 1012,
    name: "Idkman",
    types: ["Steel", "Flying"],
    baseStats: { hp: 95, atk: 69, def: 69, spa: 110, spd: 115, spe: 69 },
    abilities: { 0: "Sharpness", 1: "Intimidate", H: "Magic Guard" }
  },
  regivillain: {
    num: 1001,
    name: "Regivillain",
    types: ["Dark"],
    baseStats: { hp: 80, atk: 100, def: 50, spa: 100, spd: 50, spe: 200 },
    abilities: { 0: "Dark Aura" }
  },
  noosegoose: {
    num: 1002,
    name: "noose goose",
    types: ["Flying", "Ghost"],
    baseStats: { hp: 88, atk: 140, def: 72, spa: 88, spd: 140, spe: 72 },
    abilities: { 0: "Cursed Body", 1: "Volt Absorb", H: "Water Bubble" }
  },
  jobapplication: {
    num: 1003,
    name: "JOB APPLICATION",
    types: ["Steel", "Fire"],
    baseStats: { hp: 80, atk: 120, def: 90, spa: 70, spd: 90, spe: 150 },
    abilities: { 0: "Anger Point", 1: "Defiant", H: "Pressure" }
  },
  mythicmayhem: {
    num: 1004,
    name: "Mythic Mayhem",
    types: ["Dragon", "Fairy"],
    baseStats: { hp: 110, atk: 90, def: 75, spa: 110, spd: 90, spe: 75 },
    abilities: { 0: "Pixilate", H: "Tinted Lens" }
  },
  maldew: {
    num: 1005,
    name: "Maldew",
    types: ["Poison", "Grass"],
    baseStats: { hp: 80, atk: 90, def: 112, spa: 102, spd: 116, spe: 80 },
    abilities: { 0: "Mold Breaker", 1: "Damp", H: "Thick Fat" }
  },
  salamire: {
    num: 1006,
    name: "Salamire",
    types: ["Water", "Ground"],
    baseStats: { hp: 110, atk: 98, def: 102, spa: 98, spd: 82, spe: 40 },
    abilities: { 0: "Water Absorb", 1: "Gooey", H: "Poison Touch" }
  },
  bettertusk: {
    num: 1007,
    name: "Better Tusk",
    types: ["Ground", "Fighting"],
    baseStats: { hp: 85, atk: 131, def: 131, spa: 53, spd: 83, spe: 57 },
    abilities: { 0: "Protosynthesis", 1: "Water Bubble", H: "Water Absorb" }
  },
  voltoxin: {
    num: 1008,
    name: "Voltoxin",
    types: ["Electric", "Poison"],
    baseStats: { hp: 70, atk: 80, def: 90, spa: 100, spd: 110, spe: 120 },
    abilities: { 0: "Levitate", 1: "Electromorphosis", H: "Static" }
  },
  oursikentwistedmind: {
    num: 1009,
    name: "Our Sikentwisted Mind",
    types: ["Fire", "Steel"],
    baseStats: { hp: 80, atk: 120, def: 80, spa: 120, spd: 80, spe: 80 },
    abilities: { 0: "Magic Guard", 1: "Earth Eater", H: "Tough Claws" }
  },
  rotomwashed: {
    num: 1010,
    name: "Rotom-Washed",
    types: ["Ghost", "Water"],
    baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
    abilities: { 0: "Regenerator", 1: "Perish Body", H: "Swift Swim" }
  },
  astrodactyl: {
    num: 1011,
    name: "Astrodactyl",
    types: ["Rock", "Flying"],
    baseStats: { hp: 90, atk: 115, def: 90, spa: 90, spd: 80, spe: 110 },
    abilities: { 0: "Rock Head", 1: "Psychic Surge", H: "Intimidate" }
  },
  joe: {
    num: 1012,
    name: "Joe",
    types: ["Fairy"],
    baseStats: { hp: 80, atk: 130, def: 120, spa: 80, spd: 80, spe: 80 },
    abilities: { 0: "Protean", 1: "Simple", H: "Drizzle" }
  }
};
//# sourceMappingURL=pokedex.js.map
