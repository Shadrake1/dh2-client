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
  accelgor: {
    name: "Accelgor",
    inherit: true,
    baseStats: { hp: 80, atk: 70, def: 40, spa: 100, spd: 60, spe: 145 },
    abilities: { 0: "Hydration", 1: "Sticky Hold", H: "Unburden", S: "Shell Armor" }
  },
  alcremie: {
    name: "Alcremie",
    inherit: true,
    baseStats: { hp: 79, atk: 45, def: 79, spa: 119, spd: 136, spe: 62 },
    abilities: { 0: "Sweet Veil", H: "Aroma Veil" }
  },
  aromatisse: {
    name: "Aromatisse",
    inherit: true,
    baseStats: { hp: 111, atk: 62, def: 82, spa: 99, spd: 89, spe: 41 },
    abilities: { 0: "Healer", H: "Aroma Veil" }
  },
  barbaracle: {
    name: "Barbaracle",
    inherit: true,
    baseStats: { hp: 82, atk: 105, def: 120, spa: 54, spd: 90, spe: 73 },
    abilities: { 0: "Tough Claws", 1: "Sniper", H: "Pickpocket", S: "Klutz" }
  },
  beheeyem: {
    name: "Beheeyem",
    inherit: true,
    baseStats: { hp: 90, atk: 60, def: 90, spa: 125, spd: 95, spe: 50 },
    abilities: { 0: "Telepathy", 1: "Synchronize", H: "Analytic", S: "Illuminate" }
  },
  bellossom: {
    name: "Bellossom",
    inherit: true,
    baseStats: { hp: 75, atk: 80, def: 95, spa: 90, spd: 100, spe: 50 },
    abilities: { 0: "Chlorophyll", 1: "Stench", H: "Healer", S: "Run Away" }
  },
  bewear: {
    name: "Bewear",
    inherit: true,
    baseStats: { hp: 108, atk: 135, def: 95, spa: 40, spd: 75, spe: 72 },
    abilities: { 0: "Fluffy", 1: "Klutz", H: "Unnerve" }
  },
  boltund: {
    name: "Boltund",
    inherit: true,
    baseStats: { hp: 69, atk: 90, def: 60, spa: 105, spd: 60, spe: 121 },
    abilities: { 0: "Strong Jaw", 1: "Receiver", H: "Competitive" }
  },
  butterfree: {
    name: "Butterfree",
    inherit: true,
    baseStats: { hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70 },
    abilities: { 0: "Compound Eyes", 1: "Run Away", H: "Tinted Lens" }
  },
  cofagrigus: {
    name: "Cofagrigus",
    inherit: true,
    baseStats: { hp: 58, atk: 45, def: 160, spa: 110, spd: 110, spe: 30 },
    abilities: { 0: "Mummy", 1: "NA" }
  },
  crustle: {
    name: "Crustle",
    inherit: true,
    baseStats: { hp: 85, atk: 105, def: 135, spa: 65, spd: 75, spe: 45 },
    abilities: { 0: "Sturdy", 1: "Shell Armor", H: "Weak Armor" }
  },
  dubwool: {
    name: "Dubwool",
    inherit: true,
    baseStats: { hp: 72, atk: 80, def: 100, spa: 60, spd: 90, spe: 88 },
    abilities: { 0: "Fluffy", 1: "Steadfast", H: "Bulletproof", S: "Run Away" }
  },
  dunsparce: {
    name: "Dunsparce",
    inherit: true,
    baseStats: { hp: 100, atk: 80, def: 85, spa: 50, spd: 80, spe: 45 },
    abilities: { 0: "Serene Grace", 1: "Run Away", H: "Rattled" }
  },
  espeon: {
    name: "Espeon",
    inherit: true,
    baseStats: { hp: 65, atk: 65, def: 60, spa: 130, spd: 95, spe: 110 },
    abilities: { 0: "Synchronize", 1: "Run Away", H: "Magic Bounce", S: "Anticipation" }
  },
  falinks: {
    name: "Falinks",
    inherit: true,
    baseStats: { hp: 74, atk: 111, def: 100, spa: 70, spd: 60, spe: 80 },
    abilities: { 0: "Battle Armor", 1: "Tangled Feet", H: "Defiant" }
  },
  flareon: {
    name: "Flareon",
    inherit: true,
    baseStats: { hp: 75, atk: 130, def: 60, spa: 95, spd: 110, spe: 80 },
    abilities: { 0: "Flash Fire", 1: "Run Away", H: "Guts", S: "Anticipation" }
  },
  gallade: {
    name: "Gallade",
    inherit: true,
    baseStats: { hp: 68, atk: 125, def: 65, spa: 65, spd: 115, spe: 80 },
    abilities: { 0: "Steadfast", 1: "Telepathy", H: "Justified" }
  },
  garbodor: {
    name: "Garbodor",
    inherit: true,
    baseStats: { hp: 105, atk: 100, def: 87, spa: 45, spd: 92, spe: 75 },
    abilities: { 0: "Stench", 1: "Weak Armor", H: "Aftermath" }
  },
  gardevoir: {
    name: "Gardevoir",
    inherit: true,
    baseStats: { hp: 68, atk: 65, def: 65, spa: 130, spd: 120, spe: 95 },
    abilities: { 0: "Synchronize", 1: "Trace", H: "Telepathy" }
  },
  glaceon: {
    name: "Glaceon",
    inherit: true,
    baseStats: { hp: 65, atk: 60, def: 110, spa: 130, spd: 95, spe: 65 },
    abilities: { 0: "Snow Cloak", 1: "Run Away", H: "Ice Body", S: "Anticipation" }
  },
  golurk: {
    name: "Golurk",
    inherit: true,
    baseStats: { hp: 89, atk: 139, def: 80, spa: 50, spd: 80, spe: 70 },
    abilities: { 0: "Iron Fist", 1: "Klutz", H: "No Guard" }
  },
  goodra: {
    name: "Goodra",
    inherit: true,
    baseStats: { hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80 },
    abilities: { 0: "Sap Sipper", 1: "Hydration", H: "Gooey", S: "Stench" }
  },
  gourgeist: {
    name: "Gourgeist",
    inherit: true,
    baseStats: { hp: 70, atk: 100, def: 122, spa: 53, spd: 80, spe: 94 },
    abilities: { 0: "Pickup", 1: "Frisk", H: "Insomnia", S: "Illuminate" }
  },
  gourgeistlarge: {
    name: "Gourgeist-Large",
    inherit: true,
    baseStats: { hp: 85, atk: 100, def: 122, spa: 53, spd: 85, spe: 74 },
    abilities: { 0: "Pickup", 1: "Frisk", H: "Insomnia", S: "Illuminate" }
  },
  gourgeistsmall: {
    name: "Gourgeist-Small",
    inherit: true,
    baseStats: { hp: 55, atk: 100, def: 122, spa: 53, spd: 75, spe: 114 },
    abilities: { 0: "Pickup", 1: "Frisk", H: "Insomnia", S: "Illuminate" }
  },
  gourgeistsuper: {
    name: "Gourgeist-Super",
    inherit: true,
    baseStats: { hp: 100, atk: 100, def: 122, spa: 53, spd: 90, spe: 54 },
    abilities: { 0: "Pickup", 1: "Frisk", H: "Insomnia", S: "Illuminate" }
  },
  grapploct: {
    name: "Grapploct",
    inherit: true,
    baseStats: { hp: 95, atk: 118, def: 90, spa: 55, spd: 90, spe: 58 },
    abilities: { 0: "Limber", 1: "Tangled Feet", H: "Technician" }
  },
  greedent: {
    name: "Greedent",
    inherit: true,
    baseStats: { hp: 125, atk: 100, def: 100, spa: 55, spd: 85, spe: 20 },
    abilities: { 0: "Cheek Pouch", 1: "Tangled Feet", H: "Gluttony" }
  },
  hatterene: {
    name: "Hatterene",
    inherit: true,
    baseStats: { hp: 72, atk: 90, def: 100, spa: 136, spd: 108, spe: 29 },
    abilities: { 0: "Healer", 1: "Anticipation", H: "Magic Bounce" }
  },
  hitmonchan: {
    name: "Hitmonchan",
    inherit: true,
    baseStats: { hp: 60, atk: 112, def: 85, spa: 20, spd: 112, spe: 91 },
    abilities: { 0: "Keen Eye", 1: "Iron Fist", H: "Inner Focus" }
  },
  jolteon: {
    name: "Jolteon",
    inherit: true,
    baseStats: { hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130 },
    abilities: { 0: "Volt Absorb", 1: "Battery", H: "Quick Feet", S: "Run Away" }
  },
  kingler: {
    name: "Kingler",
    inherit: true,
    baseStats: { hp: 70, atk: 130, def: 115, spa: 50, spd: 50, spe: 85 },
    abilities: { 0: "Hyper Cutter", 1: "Shell Armor", H: "Sheer Force" }
  },
  lanturn: {
    name: "Lanturn",
    inherit: true,
    baseStats: { hp: 125, atk: 43, def: 68, spa: 91, spd: 91, spe: 67 },
    abilities: { 0: "Volt Absorb", 1: "Illuminate", H: "Water Absorb" }
  },
  lapras: {
    name: "Lapras",
    inherit: true,
    baseStats: { hp: 130, atk: 75, def: 95, spa: 100, spd: 95, spe: 65 },
    abilities: { 0: "Water Absorb", 1: "Shell Armor", H: "Hydration" }
  },
  leafeon: {
    name: "Leafeon",
    inherit: true,
    baseStats: { hp: 65, atk: 110, def: 130, spa: 60, spd: 65, spe: 95 },
    abilities: { 0: "Leaf Guard", 1: "Run Away", H: "Chlorophyll", S: "Anticipation" }
  },
  ludicolo: {
    name: "Ludicolo",
    inherit: true,
    baseStats: { hp: 95, atk: 55, def: 85, spa: 90, spd: 110, spe: 70 },
    abilities: { 0: "Swift Swim", 1: "Rain Dish", H: "Own Tempo", S: "Damp" }
  },
  musharna: {
    name: "Musharna",
    inherit: true,
    baseStats: { hp: 131, atk: 45, def: 100, spa: 112, spd: 110, spe: 14 },
    abilities: { 0: "Forewarn", 1: "Synchronize", H: "Telepathy" }
  },
  ninjask: {
    name: "Ninjask",
    inherit: true,
    baseStats: { hp: 61, atk: 90, def: 45, spa: 50, spd: 50, spe: 160 },
    abilities: { 0: "Speed Boost", 1: "Run Away", H: "Infiltrator" }
  },
  orbeetle: {
    name: "Orbeetle",
    inherit: true,
    baseStats: { hp: 75, atk: 40, def: 110, spa: 92, spd: 120, spe: 93 },
    abilities: { 0: "Swarm", 1: "Frisk", H: "Telepathy" }
  },
  passimian: {
    name: "Passimian",
    inherit: true,
    baseStats: { hp: 105, atk: 125, def: 90, spa: 40, spd: 60, spe: 95 },
    abilities: { 0: "Receiver", 1: "NA", H: "Defiant" }
  },
  pincurchin: {
    name: "Pincurchin",
    inherit: true,
    baseStats: { hp: 63, atk: 110, def: 95, spa: 106, spd: 80, spe: 5 },
    abilities: { 0: "Lightning Rod", 1: "Battery", H: "Electric Surge" }
  },
  rapidash: {
    name: "Rapidash",
    inherit: true,
    baseStats: { hp: 65, atk: 115, def: 70, spa: 80, spd: 80, spe: 115 },
    abilities: { 0: "Run Away", 1: "Flash Fire", H: "Flame Body" }
  },
  rapidashgalar: {
    name: "Rapidash-Galar",
    inherit: true,
    baseStats: { hp: 75, atk: 110, def: 75, spa: 75, spd: 80, spe: 110 },
    abilities: { 0: "Run Away", 1: "Pastel Veil", H: "Anticipation" }
  },
  shedinja: {
    name: "Shedinja",
    inherit: true,
    baseStats: { hp: 1, atk: 90, def: 45, spa: 30, spd: 30, spe: 40 },
    abilities: { 0: "Wonder Guard", 1: "Run Away", H: "NA" }
  },
  skuntank: {
    name: "Skuntank",
    inherit: true,
    baseStats: { hp: 113, atk: 93, def: 67, spa: 86, spd: 76, spe: 69 },
    abilities: { 0: "Stench", 1: "Aftermath", H: "Keen Eye" }
  },
  stoutland: {
    name: "Stoutland",
    inherit: true,
    baseStats: { hp: 85, atk: 110, def: 90, spa: 45, spd: 90, spe: 80 },
    abilities: { 0: "Intimidate", 1: "Sand Rush", H: "Scrappy", S: "Run Away" }
  },
  sylveon: {
    name: "Sylveon",
    inherit: true,
    baseStats: { hp: 95, atk: 65, def: 65, spa: 110, spd: 130, spe: 60 },
    abilities: { 0: "Cute Charm", 1: "Run Away", H: "Pixilate", S: "Anticipation" }
  },
  toxicroak: {
    name: "Toxicroak",
    inherit: true,
    baseStats: { hp: 83, atk: 116, def: 65, spa: 86, spd: 65, spe: 95 },
    abilities: { 0: "Anticipation", 1: "Dry Skin", H: "Poison Touch" }
  },
  toxtricity: {
    name: "Toxtricity",
    inherit: true,
    baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
    abilities: { 0: "Punk Rock", 1: "Plus", H: "Technician", S: "Klutz" }
  },
  toxtricitylowkey: {
    name: "Toxtricity-Low-Key",
    inherit: true,
    baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
    abilities: { 0: "Punk Rock", 1: "Minus", H: "Technician", S: "Klutz" }
  },
  umbreon: {
    name: "Umbreon",
    inherit: true,
    baseStats: { hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65 },
    abilities: { 0: "Synchronize", 1: "Run Away", H: "Inner Focus", S: "Anticipation" }
  },
  vaporeon: {
    name: "Vaporeon",
    inherit: true,
    baseStats: { hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65 },
    abilities: { 0: "Water Absorb", 1: "Run Away", H: "Hydration", S: "Anticipation" }
  },
  vespiquen: {
    name: "Vespiquen",
    inherit: true,
    baseStats: { hp: 85, atk: 80, def: 117, spa: 75, spd: 117, spe: 25 },
    abilities: { 0: "Pressure", 1: "Damp", H: "Unnerve" }
  },
  vikavolt: {
    name: "Vikavolt",
    inherit: true,
    baseStats: { hp: 77, atk: 70, def: 95, spa: 145, spd: 80, spe: 58 },
    abilities: { 0: "Levitate", 1: "Battery", H: "NA" }
  },
  vileplume: {
    name: "Vileplume",
    inherit: true,
    baseStats: { hp: 75, atk: 80, def: 85, spa: 110, spd: 90, spe: 50 },
    abilities: { 0: "Chlorophyll", 1: "Stench", H: "Effect Spore", S: "Run Away" }
  },
  weezinggalar: {
    name: "Weezing-Galar",
    inherit: true,
    baseStats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60 },
    abilities: { 0: "Levitate", 1: "Neutralizing Gas", H: "Misty Surge", S: "Stench" }
  }
};
//# sourceMappingURL=pokedex.js.map
