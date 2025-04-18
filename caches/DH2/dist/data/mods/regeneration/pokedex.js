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
  // Additions
  alakazam: {
    inherit: true,
    baseStats: { hp: 80, atk: 50, def: 50, spa: 110, spd: 110, spe: 110 },
    abilities: { 0: "Galaxy Brain", 1: "Inner Focus", H: "Trace" }
  },
  gengar: {
    inherit: true,
    types: ["Ghost", "Ice"],
    baseStats: { hp: 65, atk: 65, def: 65, spa: 100, spd: 90, spe: 115 },
    abilities: { 0: "Blackout" }
  },
  dragonite: {
    inherit: true,
    baseStats: { hp: 91, atk: 134, def: 95, spa: 95, spd: 84, spe: 101 },
    abilities: { 0: "Lifeguard", H: "Marvel Scale" }
  },
  venusaur: {
    inherit: true,
    types: ["Grass", "Fairy"],
    baseStats: { hp: 80, atk: 66, def: 98, spa: 111, spd: 100, spe: 70 },
    abilities: { 0: "Overgrow", H: "Misty Surge" }
  },
  charizard: {
    inherit: true,
    types: ["Fire", "Dark"],
    baseStats: { hp: 68, atk: 120, def: 89, spa: 60, spd: 87, spe: 109 },
    abilities: { 0: "Blaze", H: "Levitate" }
  },
  blastoise: {
    inherit: true,
    types: ["Water", "Electric"],
    baseStats: { hp: 79, atk: 53, def: 100, spa: 105, spd: 105, spe: 88 },
    abilities: { 0: "Torrent", H: "Motor Drive" }
  },
  beedrill: {
    inherit: true,
    baseStats: { hp: 65, atk: 100, def: 40, spa: 35, spd: 94, spe: 116 },
    abilities: { 0: "Poison Touch", H: "Speed Boost" }
  },
  pidgeot: {
    inherit: true,
    types: ["Flying"],
    baseStats: { hp: 83, atk: 100, def: 75, spa: 50, spd: 70, spe: 112 },
    abilities: { 0: "Keen Eye", 1: "Tangled Feet", H: "Wings of Victory" }
  },
  onix: {
    inherit: true,
    evos: [],
    baseStats: { hp: 75, atk: 135, def: 140, spa: 30, spd: 75, spe: 70 },
    abilities: { 0: "Sturdy", 1: "Solid Rock", H: "Excavate" }
  },
  wigglytuff: {
    inherit: true,
    types: ["Fairy", "Dark"],
    baseStats: { hp: 140, atk: 75, def: 50, spa: 65, spd: 45, spe: 121 },
    abilities: { 0: "Cute Charm", 1: "Aftermath", H: "Ballooning" }
  },
  dodrio: {
    inherit: true,
    types: ["Ground", "Fighting"],
    baseStats: { hp: 85, atk: 115, def: 60, spa: 55, spd: 55, spe: 115 },
    abilities: { 0: "Sand Rush", 1: "Early Bird", H: "Of A Feather" }
  },
  seadra: {
    inherit: true,
    evos: [],
    types: ["Poison", "Dragon"],
    baseStats: { hp: 80, atk: 100, def: 95, spa: 100, spd: 70, spe: 85 },
    abilities: { 0: "Poison Point", 1: "Rain Dish", H: "Merciless" }
  },
  vaporeon: {
    inherit: true,
    abilities: { 0: "Run Away", 1: "Trace", H: "Protean" }
  },
  flareon: {
    inherit: true,
    baseStats: { hp: 110, atk: 130, def: 60, spa: 65, spd: 65, spe: 95 },
    abilities: { 0: "Run Away", 1: "Trace", H: "Protean" }
  },
  jolteon: {
    inherit: true,
    baseStats: { hp: 65, atk: 65, def: 60, spa: 95, spd: 110, spe: 130 },
    abilities: { 0: "Run Away", 1: "Trace", H: "Protean" }
  },
  nidoking: {
    inherit: true,
    baseStats: { hp: 81, atk: 102, def: 82, spa: 95, spd: 70, spe: 95 },
    abilities: { 0: "Poison Point", 1: "Patriach", H: "Sheer Force" }
  },
  nidoqueen: {
    inherit: true,
    baseStats: { hp: 100, atk: 82, def: 87, spa: 95, spd: 85, spe: 76 },
    abilities: { 0: "Poison Point", 1: "Natural Cure", H: "Sheer Force" }
  },
  butterfree: {
    inherit: true,
    baseStats: { hp: 80, atk: 45, def: 52, spa: 92, spd: 79, spe: 106 },
    abilities: { 0: "Compound Eyes", 1: "Tinted Lens", H: "Multiscale" }
  },
  cloyster: {
    inherit: true,
    types: ["Water", "Steel"],
    baseStats: { hp: 80, atk: 90, def: 165, spa: 80, spd: 70, spe: 50 },
    abilities: { 0: "Shell Armor", 1: "Water Veil", H: "Regenerator" }
  },
  gyarados: {
    inherit: true,
    baseStats: { hp: 100, atk: 100, def: 107, spa: 70, spd: 92, spe: 71 },
    abilities: { 0: "Violent Abandon" }
  },
  gyaradosmega: {
    inherit: true,
    baseStats: { hp: 100, atk: 125, def: 107, spa: 105, spd: 122, spe: 81 },
    abilities: { 0: "Violent Abandon" },
    requiredItem: ""
  },
  tentacruel: {
    inherit: true,
    types: ["Dark", "Poison"],
    baseStats: { hp: 80, atk: 50, def: 65, spa: 100, spd: 120, spe: 100 },
    abilities: { 0: "Tropical Current" }
  },
  // Minor Changes (mostly to prevent unevolved Pokemons in gen 1 to hold Eviolite)
  golbat: {
    inherit: true,
    evos: []
  },
  magneton: {
    inherit: true,
    evos: []
  },
  lickitung: {
    inherit: true,
    evos: []
  },
  rhydon: {
    inherit: true,
    evos: []
  },
  chansey: {
    inherit: true,
    evos: []
  },
  tangela: {
    inherit: true,
    evos: []
  },
  electabuzz: {
    inherit: true,
    evos: []
  },
  magmar: {
    inherit: true,
    evos: []
  },
  porygon: {
    inherit: true,
    evos: []
  }
};
//# sourceMappingURL=pokedex.js.map
