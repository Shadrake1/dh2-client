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
  pollutron: {
    num: 1,
    name: "Pollutron",
    types: ["Poison", "Electric"],
    baseStats: { hp: 90, atk: 65, def: 120, spa: 85, spd: 70, spe: 60 },
    abilities: { 0: "Levitate", 1: "Poison Point", H: "Corrosion" }
  },
  paleocust: {
    num: 2,
    name: "Paleocust",
    types: ["Bug", "Rock"],
    baseStats: { hp: 75, atk: 130, def: 91, spa: 42, spd: 92, spe: 90 },
    abilities: { 0: "Prankster", 1: "Compound Eyes", H: "Swarm" }
  },
  cryolith: {
    num: 3,
    name: "Cryolith",
    types: ["Ice", "Rock"],
    baseStats: { hp: 70, atk: 110, def: 70, spa: 100, spd: 70, spe: 110 },
    abilities: { 0: "Purifying Salt", 1: "Levitate", H: "Flash Fire" }
  },
  voltergeist: {
    num: 4,
    name: "Voltergeist",
    types: ["Ghost", "Electric"],
    baseStats: { hp: 80, atk: 120, def: 65, spa: 65, spd: 120, spe: 80 },
    abilities: { 0: "Frisk", 1: "Poison Touch", H: "Comatose" }
  },
  calamander: {
    num: 5,
    name: "Calamander",
    types: ["Fire", "Water"],
    baseStats: { hp: 80, atk: 90, def: 110, spa: 90, spd: 110, spe: 110 },
    abilities: { 0: "Rising Sun", 1: "Rough Skin", H: "Own Tempo" }
  },
  lavahava: {
    num: 6,
    name: "Lavahava",
    types: ["Fire"],
    baseStats: { hp: 70, atk: 90, def: 94, spa: 113, spd: 90, spe: 123 },
    abilities: { 0: "Sturdy", 1: "Poison Heal", H: "Iron Fist" }
  },
  wrestlspur: {
    num: 7,
    name: "Wrestlspur",
    types: ["Normal", "Fighting"],
    baseStats: { hp: 85, atk: 110, def: 100, spa: 60, spd: 75, spe: 100 },
    abilities: { 0: "Iron Barbs", 1: "Iron Fist", H: "Technician" }
  },
  dirtle: {
    num: 8,
    name: "Dirtle",
    types: ["Water", "Ground"],
    baseStats: { hp: 79, atk: 83, def: 101, spa: 107, spd: 89, spe: 71 },
    abilities: { 0: "Compound Eyes", 1: "Rattled", H: "Justified" }
  },
  blunderbass: {
    num: 9,
    name: "Blunderbass",
    types: ["Water"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 80, spe: 50 },
    abilities: { 0: "Vessel of Ruin", H: "Good as Gold" }
  },
  skadraugr: {
    num: 10,
    name: "Skadraugr",
    types: ["Ice", "Ghost"],
    baseStats: { hp: 80, atk: 90, def: 110, spa: 90, spd: 110, spe: 80 },
    abilities: { 0: "Poison Heal", 1: "Water Veil", H: "Unaware" }
  },
  mystar: {
    num: 11,
    name: "Mystar",
    types: ["Normal", "Psychic"],
    baseStats: { hp: 80, atk: 95, def: 75, spa: 100, spd: 125, spe: 35 },
    abilities: { 0: "Scrappy", 1: "Regenerator", H: "Slow Start" }
  },
  bacgnomia: {
    num: 12,
    name: "Bacgnomia",
    types: ["Grass", "Fairy"],
    baseStats: { hp: 90, atk: 105, def: 75, spa: 100, spd: 75, spe: 75 },
    abilities: { 0: "Germinate", H: "Technician" }
  },
  smashicle: {
    num: 13,
    name: "Smashicle",
    types: ["Ice", "Fighting"],
    baseStats: { hp: 60, atk: 105, def: 80, spa: 115, spd: 95, spe: 90 },
    abilities: { 0: "Bullying", 1: "Snow Cloak", H: "Ice Skate" }
  },
  nervana: {
    num: 14,
    name: "Nervana",
    types: ["Psychic"],
    baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 75 },
    abilities: { 0: "Berserk", 1: "Loose Cannon", H: "Inner Focus" }
  },
  nerocable: {
    num: 15,
    name: "Nerocable",
    types: ["Water", "Electric"],
    baseStats: { hp: 73, atk: 100, def: 85, spa: 90, spd: 120, spe: 82 },
    abilities: { 0: "Inner Focus", H: "Parental Bond" }
  }
};
//# sourceMappingURL=pokedex.js.map
