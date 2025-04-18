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
  // Paradoxes here
  // https://www.smogon.com/forums/threads/book-of-enigmas-slate-3-same-but-different-maybe.3711490/post-9433439
  flyingspecter: {
    num: -1,
    name: "Flying Specter",
    types: ["Ghost", "Flying"],
    gender: "N",
    baseStats: { hp: 85, atk: 101, def: 123, spa: 101, spd: 83, spe: 97 },
    abilities: { 0: "Cleansing Fire" },
    heightm: 0.5,
    weightkg: 161,
    color: "Purple",
    eggGroups: ["Human-Like"]
  },
  gildedfleece: {
    num: -2,
    name: "Gilded Fleece",
    types: ["Electric", "Fairy"],
    gender: "N",
    baseStats: { hp: 109, atk: 135, def: 117, spa: 107, spd: 79, spe: 43 },
    abilities: { 0: "Cleansing Fire" },
    heightm: 1.4,
    weightkg: 61.5,
    color: "Yellow",
    eggGroups: ["Monster", "Field"]
  },
  weepingvine: {
    num: -3,
    name: "Weeping Vine",
    types: ["Dark", "Poison"],
    gender: "N",
    baseStats: { hp: 100, atk: 100, def: 100, spa: 80, spd: 110, spe: 80 },
    abilities: { 0: "Corrupting Storm" },
    heightm: 1.7,
    weightkg: 15.5,
    color: "Green",
    eggGroups: ["Grass"]
  },
  ragingtempest: {
    num: -4,
    name: "Raging Tempest",
    types: ["Electric", "Dark"],
    gender: "N",
    baseStats: { hp: 92, atk: 84, def: 80, spa: 120, spd: 118, spe: 96 },
    abilities: { 0: "Corrupting Storm" },
    heightm: 6.5,
    weightkg: 305,
    color: "Blue",
    eggGroups: ["Water 2", "Dragon"]
  },
  // https://www.smogon.com/forums/threads/book-of-enigmas-slate-3-same-but-different-maybe.3711490/post-9446927
  pistilwhip: {
    num: -5,
    name: "Pistil Whip",
    types: ["Grass", "Fighting"],
    gender: "N",
    baseStats: { hp: 73, atk: 123, def: 111, spa: 81, spd: 55, spe: 127 },
    abilities: { 0: "Cleansing Fire" },
    heightm: 1,
    weightkg: 13,
    color: "Green",
    eggGroups: ["Monster", "Grass"]
  },
  terracottaidol: {
    num: -6,
    name: "Terracotta Idol",
    types: ["Ground", "Fighting"],
    gender: "N",
    baseStats: { hp: 74, atk: 90, def: 126, spa: 108, spd: 72, spe: 100 },
    abilities: { 0: "Corrupting Storm" },
    heightm: 1.5,
    weightkg: 108,
    color: "Black",
    eggGroups: ["Mineral"]
  },
  aureatefin: {
    num: -7,
    name: "Aureate Fin",
    types: ["Fighting", "Water"],
    gender: "N",
    baseStats: { hp: 61, atk: 111, def: 141, spa: 63, spd: 53, spe: 141 },
    abilities: { 0: "Cleansing Fire" },
    heightm: 0.9,
    weightkg: 10,
    color: "Red",
    eggGroups: ["Water 2", "Dragon"]
  },
  spindleclaw: {
    num: -8,
    name: "Spindle Claw",
    types: ["Water", "Bug"],
    gender: "N",
    baseStats: { hp: 66, atk: 76, def: 138, spa: 124, spd: 96, spe: 70 },
    abilities: { 0: "Corrupting Storm" },
    heightm: 1.3,
    weightkg: 60,
    color: "Red",
    eggGroups: ["Water 3"]
  },
  // https://www.smogon.com/forums/threads/book-of-enigmas-slate-3-same-but-different-maybe.3711490/post-9485641
  tripoddrill: {
    num: -9,
    name: "Tripod Drill",
    types: ["Normal", "Ground"],
    gender: "N",
    baseStats: { hp: 65, atk: 107, def: 95, spa: 61, spd: 109, spe: 133 },
    abilities: { 0: "Cleansing Fire" },
    heightm: 1.8,
    weightkg: 85.2,
    color: "Brown",
    eggGroups: ["Flying"]
  },
  twintoxin: {
    num: -10,
    name: "Twin Toxin",
    types: ["Poison", "Fairy"],
    gender: "N",
    baseStats: { hp: 50, atk: 110, def: 130, spa: 90, spd: 130, spe: 80 },
    abilities: { 0: "Corrupting Storm" },
    heightm: 1,
    weightkg: 23.5,
    color: "Black",
    eggGroups: ["Field", "Fairy"]
  },
  // https://www.smogon.com/forums/threads/book-of-enigmas-slate-3-same-but-different-maybe.3711490/post-9508940
  oraclehelix: {
    num: -11,
    name: "Oracle Helix",
    types: ["Water", "Steel"],
    gender: "N",
    baseStats: { hp: 95, atk: 85, def: 85, spa: 115, spd: 115, spe: 55 },
    abilities: { 0: "Cleansing Fire" },
    heightm: 1,
    weightkg: 35,
    color: "Blue",
    eggGroups: ["Water 1", "Water 3"]
  },
  wittykitty: {
    num: -12,
    name: "Witty Kitty",
    types: ["Water", "Fairy"],
    gender: "N",
    baseStats: { hp: 124, atk: 106, def: 88, spa: 100, spd: 80, spe: 72 },
    abilities: { 0: "Corrupting Storm" },
    heightm: 0.9,
    weightkg: 23.6,
    color: "Blue",
    eggGroups: ["Water 2"]
  }
};
//# sourceMappingURL=pokedex.js.map
