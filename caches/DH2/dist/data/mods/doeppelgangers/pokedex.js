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
  clefable: {
    inherit: true,
    otherFormes: ["Clefable-Anti"],
    formeOrder: ["Clefable", "Clefable-Anti"]
  },
  clefableanti: {
    num: 36,
    name: "Clefable-Anti",
    baseSpecies: "Clefable",
    forme: "Anti",
    types: ["Steel"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 87, atk: 90, def: 61, spa: 90, spd: 90, spe: 65 },
    abilities: { 0: "Magic Guard", 1: "Limber", H: "Justified" },
    heightm: 1.3,
    weightkg: 40
  },
  ninetales: {
    inherit: true,
    otherFormes: ["Ninetales-Alola", "Ninetales-Alola-Anti"],
    formeOrder: ["Ninetales", "Ninetales-Alola", "Ninetales-Alola-Anti"]
  },
  ninetalesalolaanti: {
    num: 38,
    name: "Ninetales-Alola-Anti",
    baseSpecies: "Ninetales-Alola",
    forme: "Anti",
    types: ["Ice", "Poison"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 100, atk: 55, def: 85, spa: 90, spd: 115, spe: 60 },
    abilities: { 0: "Limber", H: "Regenerator" },
    heightm: 1.1,
    weightkg: 19.9
  },
  dragonite: {
    inherit: true,
    otherFormes: ["Dragonite-Anti"],
    formeOrder: ["Dragonite", "Dragonite-Anti"]
  },
  dragoniteanti: {
    num: 149,
    name: "Dragonite-Anti",
    baseSpecies: "Dragonite",
    forme: "Anti",
    types: ["Ghost", "Electric"],
    baseStats: { hp: 90, atk: 129, def: 125, spa: 101, spd: 85, spe: 70 },
    abilities: { 0: "Levitate" },
    heightm: 2.2,
    weightkg: 210
  },
  slowking: {
    inherit: true,
    otherFormes: ["Slowking-Anti", "Slowking-Galar"],
    formeOrder: ["Slowking", "Slowking-Anti", "Slowking-Galar"]
  },
  slowkinganti: {
    num: 199,
    name: "Slowking-Anti",
    baseSpecies: "Slowking",
    forme: "Anti",
    types: ["Psychic", "Dark"],
    baseStats: { hp: 95, atk: 75, def: 80, spa: 100, spd: 110, spe: 30 },
    abilities: { 0: "Prankster", 1: "Own Tempo", H: "Psychic Surge" },
    heightm: 2,
    weightkg: 79.5
  },
  blissey: {
    inherit: true,
    otherFormes: ["Blissey-Anti"],
    formeOrder: ["Blissey", "Blissey-Anti"]
  },
  blisseyanti: {
    num: 242,
    name: "Blissey-Anti",
    baseSpecies: "Blissey",
    forme: "Anti",
    types: ["Ghost", "Electric"],
    gender: "F",
    baseStats: { hp: 70, atk: 60, def: 80, spa: 90, spd: 130, spe: 90 },
    abilities: { 0: "Poison Heal", H: "Motor Drive" },
    heightm: 1.5,
    weightkg: 46.8
  },
  swampert: {
    inherit: true,
    otherFormes: ["Swampert-Anti"],
    formeOrder: ["Swampert", "Swampert-Anti"]
  },
  swampertanti: {
    num: 260,
    name: "Swampert-Anti",
    baseSpecies: "Swampert",
    forme: "Anti",
    types: ["Grass", "Fairy"],
    genderRatio: { M: 0.875, F: 0.125 },
    baseStats: { hp: 100, atk: 105, def: 95, spa: 80, spd: 85, spe: 65 },
    abilities: { 0: "Aroma Veil" },
    heightm: 1.5,
    weightkg: 81.9
  },
  garchomp: {
    inherit: true,
    otherFormes: ["Garchomp-Anti"],
    formeOrder: ["Garchomp", "Garchomp-Anti"]
  },
  garchompanti: {
    num: 445,
    name: "Garchomp-Anti",
    baseSpecies: "Garchomp",
    forme: "Anti",
    types: ["Fairy", "Fighting"],
    baseStats: { hp: 108, atk: 80, def: 102, spa: 122, spd: 85, spe: 103 },
    abilities: { 0: "Pastel Veil", H: "Intimidate" },
    heightm: 1.9,
    weightkg: 95
  },
  weavile: {
    inherit: true,
    otherFormes: ["Weavile-Anti"],
    formeOrder: ["Weavile", "Weavile-Anti"]
  },
  weavileanti: {
    num: 461,
    name: "Weavile-Anti",
    baseSpecies: "Weavile",
    forme: "Anti",
    types: ["Fairy", "Fire"],
    baseStats: { hp: 100, atk: 120, def: 100, spa: 45, spd: 100, spe: 45 },
    abilities: { 0: "Weak Armor", H: "Magician" },
    heightm: 1.1,
    weightkg: 34
  },
  heatran: {
    inherit: true,
    otherFormes: ["Heatran-Anti"],
    formeOrder: ["Heatran", "Heatran-Anti"]
  },
  heatrananti: {
    num: 485,
    name: "Heatran-Anti",
    baseSpecies: "Heatran",
    forme: "Anti",
    types: ["Ground"],
    baseStats: { hp: 69, atk: 140, def: 80, spa: 76, spd: 135, spe: 100 },
    abilities: { 0: "Flash Fire" },
    heightm: 1.7,
    weightkg: 430
  },
  ferrothorn: {
    inherit: true,
    otherFormes: ["Ferrothorn-Anti"],
    formeOrder: ["Ferrothorn", "Ferrothorn-Anti"]
  },
  ferrothornanti: {
    num: 598,
    name: "Ferrothorn-Anti",
    baseSpecies: "Ferrothorn",
    forme: "Anti",
    types: ["Grass", "Fire"],
    baseStats: { hp: 74, atk: 20, def: 131, spa: 94, spd: 54, spe: 116 },
    abilities: { 0: "Anticipation", H: "Magic Bounce" },
    heightm: 1,
    weightkg: 110
  },
  landorus: {
    inherit: true,
    baseForme: "Incarnate",
    otherFormes: ["Landorus-Therian", "Landorus-Therian-Anti"],
    formeOrder: ["Landorus", "Landorus-Therian", "Landorus-Therian-Anti"]
  },
  landorustheriananti: {
    num: 645,
    name: "Landorus-Therian-Anti",
    baseSpecies: "Landorus-Therian",
    forme: "Anti",
    types: ["Steel", "Flying"],
    gender: "M",
    baseStats: { hp: 110, atk: 85, def: 145, spa: 130, spd: 75, spe: 55 },
    abilities: { 0: "Trace" },
    heightm: 1.3,
    weightkg: 68
  },
  kyurem: {
    inherit: true,
    otherFormes: ["Kyurem-Anti", "Kyurem-Black", "Kyurem-White"],
    formeOrder: ["Kyurem", "Kyurem-Anti", "Kyurem-White", "Kyurem-Black"]
  },
  kyuremanti: {
    num: 646,
    name: "Kyurem-Anti",
    baseSpecies: "Kyurem",
    forme: "Anti",
    types: ["Bug", "Steel"],
    gender: "N",
    baseStats: { hp: 125, atk: 115, def: 100, spa: 110, spd: 100, spe: 110 },
    abilities: { 0: "Dancer" },
    heightm: 3,
    weightkg: 325
  },
  toxapex: {
    inherit: true,
    otherFormes: ["Toxapex-Anti"],
    formeOrder: ["Toxapex", "Toxapex-Anti"]
  },
  toxapexanti: {
    num: 748,
    name: "Toxapex-Anti",
    baseSpecies: "Toxapex",
    forme: "Anti",
    types: ["Poison", "Ground"],
    baseStats: { hp: 50, atk: 35, def: 112, spa: 133, spd: 102, spe: 63 },
    abilities: { 0: "Merciless", 1: "Limber", H: "Storm Drain" },
    heightm: 0.7,
    weightkg: 14.5
  },
  tapukoko: {
    inherit: true,
    otherFormes: ["Tapu Koko-Anti"],
    formeOrder: ["Tapu Koko", "Tapu Koko-Anti"]
  },
  tapukokoanti: {
    num: 785,
    name: "Tapu Koko-Anti",
    baseSpecies: "Tapu Koko",
    forme: "Anti",
    types: ["Ground", "Fire"],
    gender: "N",
    baseStats: { hp: 80, atk: 115, def: 110, spa: 85, spd: 110, spe: 70 },
    abilities: { 0: "Magic Bounce", H: "Color Change" },
    heightm: 1.8,
    weightkg: 20.5
  },
  tapufini: {
    inherit: true,
    otherFormes: ["Tapu Fini-Anti"],
    formeOrder: ["Tapu Fini", "Tapu Fini-Anti"]
  },
  tapufinianti: {
    num: 788,
    name: "Tapu Fini-Anti",
    baseSpecies: "Tapu Fini",
    forme: "Anti",
    types: ["Flying", "Poison"],
    gender: "N",
    baseStats: { hp: 80, atk: 70, def: 85, spa: 100, spd: 115, spe: 110 },
    abilities: { 0: "Competitive", H: "Liquid Ooze" },
    heightm: 1.3,
    weightkg: 21.2
  },
  kartana: {
    inherit: true,
    otherFormes: ["Kartana-Anti"],
    formeOrder: ["Kartana", "Kartana-Anti"]
  },
  kartanaanti: {
    num: 798,
    name: "Kartana-Anti",
    baseSpecies: "Kartana",
    forme: "Anti",
    types: ["Grass", "Fighting"],
    gender: "N",
    baseStats: { hp: 59, atk: 83, def: 131, spa: 97, spd: 139, spe: 61 },
    abilities: { 0: "Fluffy" },
    heightm: 0.3,
    weightkg: 0.1
  },
  arctozolt: {
    inherit: true,
    otherFormes: ["Arctozolt-Anti"],
    formeOrder: ["Arctozolt", "Arctozolt-Anti"]
  },
  arctozoltanti: {
    num: 881,
    name: "Arctozolt-Anti",
    baseSpecies: "Arctozolt",
    forme: "Anti",
    types: ["Ground", "Steel"],
    gender: "N",
    baseStats: { hp: 90, atk: 55, def: 120, spa: 90, spd: 95, spe: 55 },
    abilities: { 0: "Thick Fat", 1: "Aftermath", H: "Clear Body" },
    heightm: 2.3,
    weightkg: 150
  }
};
//# sourceMappingURL=pokedex.js.map
