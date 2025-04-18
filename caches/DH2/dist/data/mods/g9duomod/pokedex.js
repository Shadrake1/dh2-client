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
  baloon: {
    num: 1.5,
    species: "Baloon",
    types: ["Fairy"],
    baseStats: { hp: 137, atk: 124, def: 142, spa: 102, spd: 12, spe: 83 },
    abilities: { 0: "Queen of Roulette" },
    height: 5,
    weightkg: 0.1,
    eggGroups: ["Undiscovered"]
  },
  fluxtapestereo: {
    num: 2.5,
    species: "Fluxtape-Stereo",
    types: ["Fire", "Electric"],
    baseStats: { hp: 110, atk: 129, def: 100, spa: 95, spd: 80, spe: 86 },
    abilities: { 0: "Rock Head" },
    height: 5,
    weightkg: 3.5,
    eggGroups: ["Undiscovered"]
  },
  pokat: {
    num: 3.5,
    species: "Pokat",
    types: ["Grass", "Normal"],
    baseStats: { hp: 60, atk: 60, def: 140, spa: 90, spd: 160, spe: 20 },
    abilities: { 0: "Sticky Starch" },
    height: 5,
    weightkg: 2,
    eggGroups: ["Undiscovered"]
  },
  spirox: {
    num: 4.5,
    species: "Spirox",
    types: ["Steel", "Ghost"],
    baseStats: { hp: 70, atk: 70, def: 130, spa: 100, spd: 130, spe: 100 },
    abilities: { 0: "Draw Four" },
    height: 5,
    weightkg: 1,
    eggGroups: ["Undiscovered"]
  },
  badgearth: {
    num: 5.5,
    species: "Badgearth",
    types: ["Ground"],
    baseStats: { hp: 58, atk: 109, def: 112, spa: 48, spd: 48, spe: 109 },
    abilities: { 0: "Regenerator" },
    height: 5,
    weightkg: 4,
    eggGroups: ["Undiscovered"]
  },
  bittle: {
    num: 6.5,
    species: "Bittle",
    types: ["Bug", "Steel"],
    baseStats: { hp: 90, atk: 90, def: 90, spa: 90, spd: 90, spe: 90 },
    abilities: { 0: "Update" },
    height: 5,
    weightkg: 40,
    eggGroups: ["Undiscovered"]
  },
  fairydisc: {
    num: 7.5,
    species: "Fairydisc",
    types: ["Steel", "Fairy"],
    baseStats: { hp: 200, atk: 100, def: 125, spa: 100, spd: 125, spe: 50 },
    abilities: { 0: "Prankster" },
    height: 5,
    weightkg: 1,
    eggGroups: ["Undiscovered"]
  },
  shroominesce: {
    num: 8.5,
    species: "Shroominesce",
    types: ["Electric", "Grass"],
    baseStats: { hp: 60, atk: 60, def: 60, spa: 120, spd: 120, spe: 75 },
    abilities: { 0: "Electromorphosis" },
    height: 5,
    weightkg: 12,
    eggGroups: ["Undiscovered"]
  },
  abysseil: {
    num: 9.5,
    species: "Abysseil",
    types: ["Water", "Psychic"],
    baseStats: { hp: 80, atk: 44, def: 95, spa: 83, spd: 95, spe: 138 },
    abilities: { 0: "Good as Gold" },
    height: 5,
    weightkg: 2,
    eggGroups: ["Undiscovered"]
  },
  draxplosion: {
    num: 10.5,
    species: "Draxplosion",
    types: ["Fire", "Dragon"],
    baseStats: { hp: 79, atk: 111, def: 68, spa: 109, spd: 65, spe: 102 },
    abilities: { 0: "Dazzling" },
    height: 5,
    weightkg: 20,
    eggGroups: ["Undiscovered"]
  },
  fluidrake: {
    num: 31.5,
    species: "Fluidrake",
    types: ["Water", "Steel"],
    baseStats: { hp: 105, atk: 70, def: 100, spa: 75, spd: 95, spe: 80 },
    abilities: { 0: "Poison Touch" },
    height: 5,
    weightkg: 86,
    eggGroups: ["Undiscovered"]
  },
  jewelode: {
    num: 11.5,
    species: "Jewelode",
    types: ["Rock", "Fairy"],
    baseStats: { hp: 80, atk: 61, def: 80, spa: 126, spd: 70, spe: 106 },
    abilities: { 0: "Neutralizing Gas" },
    height: 5,
    weightkg: 21,
    eggGroups: ["Undiscovered"]
  },
  treemu: {
    num: 12.5,
    species: "Treemu",
    types: ["Grass", "Flying"],
    baseStats: { hp: 77, atk: 120, def: 77, spa: 54, spd: 136, spe: 34 },
    abilities: { 0: "Protean" },
    height: 5,
    weightkg: 39,
    eggGroups: ["Undiscovered"]
  },
  capsaken: {
    num: 13.5,
    species: "Capsaken",
    types: ["Dark", "Fire"],
    baseStats: { hp: 95, atk: 114, def: 95, spa: 77, spd: 77, spe: 64 },
    abilities: { 0: "Blazing Spirit" },
    height: 5,
    weightkg: 24,
    eggGroups: ["Undiscovered"]
  },
  cephalopire: {
    num: 14.5,
    species: "Cephalopire",
    types: ["Water"],
    baseStats: { hp: 125, atk: 86, def: 86, spa: 68, spd: 68, spe: 47 },
    abilities: { 0: "Host Absorb" },
    height: 5,
    weightkg: 22,
    eggGroups: ["Undiscovered"]
  },
  chemiclysm: {
    num: 15.5,
    species: "Chemiclysm",
    types: ["Steel", "Poison"],
    baseStats: { hp: 100, atk: 80, def: 80, spa: 80, spd: 120, spe: 30 },
    abilities: { 0: "Earth Eater" },
    height: 5,
    weightkg: 55,
    eggGroups: ["Undiscovered"]
  },
  commanto: {
    num: 16.5,
    species: "Commanto",
    types: ["Bug", "Fighting"],
    baseStats: { hp: 80, atk: 75, def: 80, spa: 145, spd: 75, spe: 80 },
    abilities: { 0: "Gorilla Tactics" },
    weightkg: 28
  },
  eneryth: {
    num: 17.5,
    species: "Eneryth",
    types: ["Electric"],
    baseStats: { hp: 73, atk: 51, def: 51, spa: 121, spd: 73, spe: 171 },
    abilities: { 0: "Power Outage" },
    weightkg: 63
  },
  falcola: {
    num: 18.5,
    species: "Falcola",
    types: ["Poison", "Flying"],
    baseStats: { hp: 80, atk: 70, def: 70, spa: 80, spd: 140, spe: 60 },
    abilities: { 0: "Well-Baked Body" },
    weightkg: 37
  },
  gelsius: {
    num: 19.5,
    species: "Gelsius",
    types: ["Water"],
    baseStats: { hp: 75, atk: 75, def: 75, spa: 105, spd: 105, spe: 105 },
    abilities: { 0: "Conduction" },
    otherFormes: ["Gelsius-Hundread", "Gelsius-Subzero"],
    weightkg: 15
  },
  hydread: {
    num: 20.5,
    species: "Hydread",
    types: ["Ghost", "Dragon"],
    baseStats: { hp: 75, atk: 57, def: 130, spa: 77, spd: 95, spe: 57 },
    abilities: { 0: "Obtrusive" },
    weightkg: 10
  },
  mountough: {
    num: 21.5,
    species: "Mountough",
    types: ["Ground", "Fighting"],
    baseStats: { hp: 90, atk: 120, def: 120, spa: 70, spd: 90, spe: 44 },
    abilities: { 0: "Heatproof" },
    weightkg: 523
  },
  sanbatter: {
    num: 22.5,
    species: "Sanbatter",
    types: ["Ghost", "Fighting"],
    baseStats: { hp: 95, atk: 95, def: 65, spa: 80, spd: 80, spe: 35 },
    abilities: { 0: "Respawn Punisher" },
    weightkg: 18
  },
  antestar: {
    num: 23.5,
    species: "Antestar",
    types: ["Steel", "Fairy"],
    baseStats: { hp: 18, atk: 120, def: 24, spa: 95, spd: 112, spe: 131 },
    abilities: { 0: "Innards Out" },
    weightkg: 66
  },
  escarglace: {
    num: 24.5,
    species: "Escarglace",
    types: ["Ice"],
    baseStats: { hp: 50, atk: 70, def: 110, spa: 160, spd: 70, spe: 40 },
    abilities: { 0: "Slush Rush" },
    weightkg: 55
  },
  fauxster: {
    num: 25.5,
    species: "Fauxster",
    types: ["Water", "Fighting"],
    baseStats: { hp: 120, atk: 120, def: 55, spa: 55, spd: 55, spe: 110 },
    abilities: { 0: "Anger Shell" },
    weightkg: 4
  },
  gargitect: {
    num: 26.5,
    species: "Gargitect",
    types: ["Rock", "Dragon"],
    baseStats: { hp: 75, atk: 125, def: 155, spa: 75, spd: 85, spe: 15 },
    abilities: { 0: "Supreme Overlord" },
    weightkg: 120
  },
  temporand: {
    num: 27.5,
    species: "Temporand",
    types: ["Ground", "Psychic"],
    baseStats: { hp: 95, atk: 75, def: 75, spa: 95, spd: 95, spe: 95 },
    abilities: { 0: "Purifying Salt" },
    weightkg: 21
  },
  kuribandit: {
    num: 28.5,
    species: "Kuribandit",
    types: ["Dark", "Flying"],
    baseStats: { hp: 60, atk: 60, def: 140, spa: 110, spd: 80, spe: 60 },
    abilities: { 0: "Magic Absorb" },
    weightkg: 14
  },
  mantelec: {
    num: 29.5,
    species: "Mantelec",
    types: ["Bug", "Electric"],
    baseStats: { hp: 130, atk: 120, def: 10, spa: 40, spd: 110, spe: 70 },
    abilities: { 0: "Sword of Ruin" },
    weightkg: 53
  },
  noxinobi: {
    num: 30.5,
    species: "Noxinobi",
    types: ["Poison"],
    baseStats: { hp: 65, atk: 125, def: 65, spa: 65, spd: 65, spe: 135 },
    abilities: { 0: "Unstable Claws" },
    weightkg: 13
  },
  ironvessel: {
    num: 32.5,
    species: "Iron Vessel",
    types: ["Psychic", "Dragon"],
    baseStats: { hp: 96, atk: 76, def: 76, spa: 96, spd: 108, spe: 118 },
    abilities: { 0: "Regenerator" },
    weightkg: 5,
    otherFormes: ["Modded Vessel"],
    formeOrder: ["Iron Vessel", "Modded Vessel"]
  },
  cadbunny: {
    num: 33.5,
    species: "Cadbunny",
    types: ["Normal"],
    baseStats: { hp: 104, atk: 60, def: 96, spa: 70, spd: 96, spe: 91 },
    abilities: { 0: "Opportunist" },
    weightkg: 5
  },
  feralynx: {
    num: 34.5,
    species: "Feralynx",
    types: ["Dark", "Ice"],
    baseStats: { hp: 54, atk: 122, def: 84, spa: 60, spd: 92, spe: 115 },
    abilities: { 0: "Moxie" },
    weightkg: 5
  },
  aquadamia: {
    num: 35.5,
    species: "Aquadamia",
    types: ["Grass", "Water"],
    baseStats: { hp: 80, atk: 120, def: 70, spa: 40, spd: 70, spe: 125 },
    abilities: { 0: "Dancer" },
    weightkg: 5
  },
  neuralurk: {
    num: 36.5,
    species: "Neuralurk",
    types: ["Dark", "Fairy"],
    baseStats: { hp: 181, atk: 101, def: 43, spa: 113, spd: 43, spe: 89 },
    abilities: { 0: "Beast Boost" },
    weightkg: 5
  },
  blockodile: {
    num: 37.5,
    species: "Blockodile",
    types: ["Ice", "Dragon"],
    baseStats: { hp: 105, atk: 125, def: 115, spa: 65, spd: 55, spe: 25 },
    abilities: { 0: "Dragons Maw" },
    weightkg: 5
  },
  moddedvessel: {
    num: 32.5,
    species: "Modded Vessel",
    baseSpecies: "Iron Vessel",
    forme: "Mega",
    types: ["Psychic", "Dragon"],
    baseStats: { hp: 96, atk: 76, def: 106, spa: 96, spd: 128, spe: 68 },
    abilities: { 0: "Shed Skin" },
    weightkg: 5,
    battleOnly: "Iron Vessel",
    requiredMove: "Core Enforcer"
  },
  gelsiussubzero: {
    num: 19.5,
    name: "Gelsius-Subzero",
    baseSpecies: "Gelsius",
    types: ["Water", "Ice"],
    baseStats: { hp: 75, atk: 55, def: 75, spa: 125, spd: 85, spe: 125 },
    abilities: { 0: "Conduction" },
    weightkg: 15,
    requiredAbility: "Conduction",
    battleOnly: "Gelsius"
  },
  gelsiushundred: {
    num: 19.5,
    name: "Gelsius-Hundred",
    baseSpecies: "Gelsius",
    types: ["Water", "Fire"],
    baseStats: { hp: 75, atk: 55, def: 95, spa: 105, spd: 125, spe: 85 },
    abilities: { 0: "Conduction" },
    weightkg: 15,
    requiredAbility: "Conduction",
    battleOnly: "Gelsius"
  },
  impsaustor: {
    num: 999.5,
    species: "Impsaustor",
    types: ["Poison", "Dark"],
    baseStats: { hp: 100, atk: 120, def: 80, spa: 80, spd: 120, spe: 100 },
    abilities: { 0: "Vent" },
    weightkg: 121
  }
};
//# sourceMappingURL=pokedex.js.map
