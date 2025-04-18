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
  rookada: {
    num: 2983,
    name: "Rookada",
    types: ["Dark", "Bug"],
    baseStats: { hp: 70, atk: 98, def: 140, spa: 82, spd: 104, spe: 56 },
    abilities: { 0: "Pressure", 1: "Swarm", H: "Tinted Lens" },
    heightm: 2,
    weightkg: 120,
    color: "Black",
    eggGroups: ["Human-Like"]
  },
  ironblimp: {
    num: 2992,
    name: "Iron Blimp",
    types: ["Electric", "Flying"],
    gender: "N",
    baseStats: { hp: 104, atk: 100, def: 118, spa: 80, spd: 68, spe: 90 },
    abilities: { 0: "Quark Drive", H: "Motor Drive" },
    heightm: 1.8,
    weightkg: 380.7,
    color: "Gray",
    tags: ["Paradox"],
    eggGroups: ["Undiscovered"]
  },
  dragaplunge: {
    num: 2887,
    name: "Dragaplunge",
    types: ["Dragon", "Water"],
    baseStats: { hp: 98, atk: 110, def: 75, spa: 110, spd: 75, spe: 132 },
    abilities: { 0: "Clear Body", 1: "Infiltrator", H: "Levitate" },
    heightm: 3,
    weightkg: 50,
    color: "Green",
    eggGroups: ["Amorphous", "Dragon"]
  },
  puffache: {
    num: 2685,
    name: "Puffache",
    types: ["Fairy", "Dark"],
    baseStats: { hp: 87, atk: 80, def: 96, spa: 85, spd: 60, spe: 72 },
    abilities: { 0: "Sweet Veil", H: "Well-Baked Body" },
    heightm: 0.8,
    weightkg: 5,
    color: "White",
    eggGroups: ["Fairy"]
  },
  fushimmer: {
    num: 2937,
    name: "Fushimmer",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 80, atk: 80, def: 115, spa: 80, spd: 100, spe: 70 },
    abilities: { 0: "Flash Fire", H: "Drought" },
    heightm: 1.6,
    weightkg: 62,
    color: "Blue",
    eggGroups: ["Human-Like"]
  },
  eelektross: {
    inherit: true,
    types: ["Electric", "Ground"],
    baseStats: { hp: 100, atk: 115, def: 85, spa: 105, spd: 90, spe: 50 }
  },
  dugtrio: {
    inherit: true,
    types: ["Ground", "Rock"],
    baseStats: { hp: 75, atk: 100, def: 60, spa: 50, spd: 95, spe: 120 },
    abilities: { 0: "Sand Veil", 1: "Sand Stream", H: "Sand Force" }
  },
  bouffalant: {
    inherit: true,
    types: ["Normal", "Ground"],
    baseStats: { hp: 100, atk: 125, def: 105, spa: 40, spd: 95, spe: 55 }
  },
  crabominable: {
    inherit: true,
    baseStats: { hp: 112, atk: 132, def: 82, spa: 62, spd: 67, spe: 53 },
    abilities: { 0: "Technician", 1: "Iron Fist", H: "Anger Point" }
  },
  klawf: {
    inherit: true,
    types: ["Rock", "Dark"],
    baseStats: { hp: 90, atk: 105, def: 115, spa: 35, spd: 80, spe: 75 }
  }
};
//# sourceMappingURL=pokedex.js.map
