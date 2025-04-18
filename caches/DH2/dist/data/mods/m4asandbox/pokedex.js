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
  // SANDBOX CONTENT STARTS HERE
  pichuspikyeared: {
    inherit: true,
    gender: "F"
  },
  pichuspikyearedmega: {
    num: 172,
    name: "Pichu-Spiky-eared-Mega",
    baseSpecies: "Pichu",
    forme: "Mega-Spiky-eared",
    types: ["Electric", "Normal"],
    gender: "F",
    baseStats: { hp: 20, atk: 120, def: 15, spa: 20, spd: 20, spe: 110 },
    abilities: { 0: "Gamble" },
    heightm: 0.3,
    weightkg: 2,
    color: "Yellow",
    eggGroups: ["Undiscovered"],
    requiredItem: "Pichunite",
    battleOnly: "Pichu-Spiky-eared"
  },
  porygodzmega: {
    num: 474,
    name: "Porygod-Z-Mega",
    baseSpecies: "Porygon-Z",
    forme: "Mega",
    types: ["Normal"],
    gender: "N",
    baseStats: { hp: 85, atk: 170, def: 100, spa: 80, spd: 100, spe: 100 },
    abilities: { 0: "Conversion-Z" },
    heightm: 0.9,
    weightkg: 34,
    color: "Red",
    eggGroups: ["Mineral"],
    requiredItem: "Porygonite-Z"
  },
  stoutlandmegau: {
    num: 508,
    name: "Stoutland-Mega-U",
    baseSpecies: "Stoutland",
    forme: "Mega-U",
    types: ["Normal", "Dark"],
    baseStats: { hp: 85, atk: 147, def: 115, spa: 45, spd: 115, spe: 93 },
    abilities: { 0: "Intimidate" },
    heightm: 1.2,
    weightkg: 61,
    color: "Gray",
    eggGroups: ["Field"],
    requiredItem: "Stoutlandite-U"
  },
  floetteeternalmega: {
    num: 670,
    name: "Floette-Eternal-Mega",
    baseSpecies: "Floette",
    forme: "Mega-Eternal",
    types: ["Fairy"],
    gender: "F",
    baseStats: { hp: 74, atk: 76, def: 128, spa: 143, spd: 128, spe: 102 },
    abilities: { 0: "Secret Weapon" },
    heightm: 0.2,
    weightkg: 0.9,
    color: "White",
    eggGroups: ["Undiscovered"],
    requiredItem: "Floettite",
    battleOnly: "Floette-Eternal"
  },
  meltanmega: {
    num: 808,
    name: "Meltan-Mega",
    baseSpecies: "Meltan",
    forme: "Mega",
    types: ["Steel"],
    gender: "N",
    baseStats: { hp: 46, atk: 55, def: 115, spa: 55, spd: 95, spe: 34 },
    abilities: { 0: "Amalgam" },
    heightm: 0.2,
    weightkg: 8,
    color: "Gray",
    eggGroups: ["Undiscovered"],
    requiredItem: "Meltanite"
  }
};
//# sourceMappingURL=pokedex.js.map
