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
  // Slate 1
  regirock: {
    inherit: true,
    otherFormes: ["Regirock-Kalos"],
    formeOrder: ["Regirock", "Regirock-Kalos"]
  },
  regirockkalos: {
    num: 377,
    name: "Regirock-Kalos",
    baseSpecies: "Regirock",
    forme: "Kalos",
    types: ["Rock", "Grass"],
    gender: "N",
    baseStats: { hp: 80, atk: 100, def: 200, spa: 50, spd: 100, spe: 50 },
    abilities: { 0: "Clear Body", H: "Water Absorb" },
    heightm: 1.7,
    weightkg: 230,
    color: "Brown",
    tags: ["Sub-Legendary"],
    eggGroups: ["Undiscovered"]
  },
  regice: {
    inherit: true,
    otherFormes: ["Regice-Kalos"],
    formeOrder: ["Regice", "Regice-Kalos"]
  },
  regicekalos: {
    num: 378,
    name: "Regice-Kalos",
    baseSpecies: "Regice",
    forme: "Kalos",
    types: ["Ice", "Ghost"],
    gender: "N",
    baseStats: { hp: 80, atk: 50, def: 100, spa: 100, spd: 200, spe: 50 },
    abilities: { 0: "Clear Body", H: "Cursed Body" },
    heightm: 1.8,
    weightkg: 175,
    color: "Blue",
    tags: ["Sub-Legendary"],
    eggGroups: ["Undiscovered"]
  },
  registeel: {
    inherit: true,
    otherFormes: ["Registeel-Kalos"],
    formeOrder: ["Registeel", "Registeel-Kalos"]
  },
  registeelkalos: {
    num: 379,
    name: "Registeel-Kalos",
    baseSpecies: "Registeel",
    forme: "Kalos",
    types: ["Steel", "Psychic"],
    gender: "N",
    baseStats: { hp: 80, atk: 75, def: 150, spa: 75, spd: 150, spe: 50 },
    abilities: { 0: "Clear Body", H: "Magic Bounce" },
    heightm: 1.9,
    weightkg: 205,
    color: "Gray",
    tags: ["Sub-Legendary"],
    eggGroups: ["Undiscovered"]
  },
  spearow: {
    inherit: true,
    otherFormes: ["Spearow-Kalos"],
    formeOrder: ["Spearow", "Spearow-Kalos"]
  },
  spearowkalos: {
    num: 21,
    name: "Spearow-Kalos",
    baseSpecies: "Spearow",
    forme: "Kalos",
    types: ["Dark", "Flying"],
    baseStats: { hp: 60, atk: 50, def: 20, spa: 21, spd: 21, spe: 90 },
    abilities: { 0: "Keen Eye", H: "Gluttony" },
    heightm: 0.3,
    weightkg: 2,
    color: "Brown",
    evos: ["Fearow-Kalos"],
    eggGroups: ["Flying"]
  },
  fearow: {
    inherit: true,
    otherFormes: ["Fearow-Kalos"],
    formeOrder: ["Fearow", "Fearow-Kalos"]
  },
  fearowkalos: {
    num: 22,
    name: "Fearow-Kalos",
    baseSpecies: "Fearow",
    forme: "Kalos",
    types: ["Dark", "Flying"],
    baseStats: { hp: 75, atk: 80, def: 55, spa: 51, spd: 51, spe: 120 },
    abilities: { 0: "Keen Eye", H: "Gluttony" },
    heightm: 1.2,
    weightkg: 38,
    color: "Brown",
    prevo: "Spearow-Kalos",
    evoLevel: 20,
    eggGroups: ["Flying"],
    evos: ["Monrow"]
  },
  monrow: {
    num: -1,
    name: "Monrow",
    types: ["Dark", "Flying"],
    baseStats: { hp: 106, atk: 110, def: 60, spa: 53, spd: 77, spe: 130 },
    abilities: { 0: "Keen Eye", H: "Swift Retreat" },
    heightm: 1.5,
    weightkg: 40.8,
    color: "Brown",
    prevo: "Fearow-Kalos",
    evoLevel: 35,
    eggGroups: ["Flying"]
  },
  skitty: {
    inherit: true,
    evos: ["Delcatty", "Delcatty-Kalos"]
  },
  delcatty: {
    inherit: true,
    otherFormes: ["Delcatty-Kalos"],
    formeOrder: ["Delcatty", "Delcatty-Kalos"]
  },
  delcattykalos: {
    num: 301,
    name: "Delcatty-Kalos",
    baseSpecies: "Delcatty",
    forme: "Kalos",
    types: ["Fairy", "Fire"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 90, atk: 45, def: 80, spa: 45, spd: 80, spe: 45 },
    abilities: { 0: "Cute Charm", 1: "Illuminate", H: "Light Power" },
    heightm: 1.1,
    weightkg: 32.6,
    color: "Purple",
    prevo: "Skitty",
    evoType: "useItem",
    evoItem: "Moon Stone",
    evoRegion: "Kalos",
    eggGroups: ["Field", "Fairy"]
  },
  vanillite: {
    inherit: true,
    otherFormes: ["Vanillite-Kalos"],
    formeOrder: ["Vanillite", "Vanillite-Kalos"]
  },
  vanillitekalos: {
    num: 582,
    name: "Vanillite-Kalos",
    baseSpecies: "Vanillite",
    forme: "Kalos",
    types: ["Fairy"],
    baseStats: { hp: 36, atk: 50, def: 55, spa: 65, spd: 65, spe: 34 },
    abilities: { 0: "Levitate", 1: "Gluttony", H: "Heatproof" },
    heightm: 0.4,
    weightkg: 5.7,
    color: "White",
    evos: ["Vanillish-Kalos"],
    eggGroups: ["Mineral"]
  },
  vanillish: {
    inherit: true,
    otherFormes: ["Vanillish-Kalos"],
    formeOrder: ["Vanillish", "Vanillish-Kalos"]
  },
  vanillishkalos: {
    num: 583,
    name: "Vanillish-Kalos",
    baseSpecies: "Vanillish",
    forme: "Kalos",
    types: ["Fairy", "Ground"],
    baseStats: { hp: 51, atk: 65, def: 75, spa: 80, spd: 80, spe: 44 },
    abilities: { 0: "Levitate", 1: "Gluttony", H: "Heatproof" },
    heightm: 1.1,
    weightkg: 41,
    color: "White",
    prevo: "Vanillite-Kalos",
    evoLevel: 35,
    evos: ["Vanilluxe-Kalos"],
    eggGroups: ["Mineral"]
  },
  vanilluxe: {
    inherit: true,
    otherFormes: ["Vanilluxe-Kalos"],
    formeOrder: ["Vanilluxe", "Vanilluxe-Kalos"]
  },
  vanilluxekalos: {
    num: 584,
    name: "Vanilluxe-Kalos",
    baseSpecies: "Vanilluxe",
    forme: "Kalos",
    types: ["Fairy", "Ground"],
    baseStats: { hp: 71, atk: 95, def: 110, spa: 110, spd: 115, spe: 54 },
    abilities: { 0: "Levitate", 1: "Gluttony", H: "Flash Fire" },
    heightm: 1.3,
    weightkg: 57.5,
    color: "White",
    prevo: "Vanillish-Kalos",
    evoLevel: 47,
    eggGroups: ["Mineral"]
  },
  glimmet: {
    inherit: true,
    otherFormes: ["Vanilluxe-Kalos"],
    formeOrder: ["Vanilluxe", "Vanilluxe-Kalos"]
  },
  glimmetkalos: {
    num: 969,
    name: "Glimmet-Kalos",
    baseSpecies: "Glimmet",
    forme: "Kalos",
    types: ["Rock", "Grass"],
    baseStats: { hp: 48, atk: 35, def: 42, spa: 105, spd: 60, spe: 60 },
    abilities: { 0: "Seed Sower", H: "Leaf Guard" },
    heightm: 0.7,
    weightkg: 8,
    color: "Blue",
    evos: ["Glimmora-Kalos"],
    eggGroups: ["Mineral"]
  },
  glimmora: {
    inherit: true,
    otherFormes: ["Vanilluxe-Kalos"],
    formeOrder: ["Vanilluxe", "Vanilluxe-Kalos"]
  },
  glimmorakalos: {
    num: 970,
    name: "Glimmora-Kalos",
    baseSpecies: "Glimmora",
    forme: "Kalos",
    types: ["Rock", "Grass"],
    baseStats: { hp: 83, atk: 55, def: 90, spa: 130, spd: 81, spe: 86 },
    abilities: { 0: "Seed Sower", H: "Leaf Guard" },
    heightm: 1.5,
    weightkg: 45,
    color: "Blue",
    prevo: "Glimmet-Kalos",
    evoLevel: 35,
    eggGroups: ["Mineral"],
    evos: ["Glimmaltis"]
  },
  glimmaltis: {
    num: -2,
    name: "Glimmaltis",
    types: ["Rock", "Grass"],
    baseStats: { hp: 103, atk: 65, def: 115, spa: 135, spd: 96, spe: 86 },
    abilities: { 0: "Seed Sower", H: "Flower Gift" },
    heightm: 3,
    weightkg: 178.9,
    color: "Blue",
    prevo: "Glimmora-Kalos",
    evoLevel: 35,
    eggGroups: ["Mineral"],
    otherFormes: ["Glimmaltis-Sunshine"],
    formeOrder: ["Glimmaltis", "Glimmaltis-Sunshine"]
  },
  glimmaltissunshine: {
    num: -2,
    name: "Glimmaltis-Sunshine",
    baseSpecies: "Glimmaltis",
    forme: "Sunshine",
    types: ["Rock", "Grass"],
    baseStats: { hp: 103, atk: 135, def: 115, spa: 65, spd: 96, spe: 86 },
    abilities: { 0: "Flower Gift" },
    heightm: 3,
    weightkg: 178.9,
    color: "Blue",
    prevo: "Glimmora-Kalos",
    evoLevel: 35,
    eggGroups: ["Mineral"],
    requiredAbility: "Flower Gift",
    battleOnly: "Glimmaltis"
  }
};
//# sourceMappingURL=pokedex.js.map
