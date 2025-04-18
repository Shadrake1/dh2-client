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
  audinomega: {
    inherit: true,
    types: ["Normal", "Electric"],
    baseStats: { hp: 103, atk: 60, def: 120, spa: 110, spd: 97, spe: 55 },
    abilities: { 0: "Regenerator" }
  },
  houndoommega: {
    inherit: true,
    types: ["Dark", "Fire"],
    baseStats: { hp: 75, atk: 90, def: 90, spa: 140, spd: 90, spe: 115 },
    abilities: { 0: "Merciless" }
  },
  lucariomega: {
    inherit: true,
    types: ["Fighting", "Steel"],
    baseStats: { hp: 70, atk: 125, def: 70, spa: 140, spd: 94, spe: 126 },
    abilities: { 0: "Lightning Rod" }
  },
  banettemega: {
    inherit: true,
    types: ["Ghost", "Steel"],
    baseStats: { hp: 64, atk: 149, def: 75, spa: 83, spd: 83, spe: 101 },
    abilities: { 0: "Pocket Dimension" }
  },
  glaliemega: {
    inherit: true,
    types: ["Ice", "Steel"],
    baseStats: { hp: 80, atk: 160, def: 70, spa: 95, spd: 70, spe: 105 },
    abilities: { 0: "Refrigerate" }
  },
  venusaurmega: {
    inherit: true,
    types: ["Grass", "Poison"],
    baseStats: { hp: 80, atk: 82, def: 123, spa: 120, spd: 120, spe: 100 },
    abilities: { 0: "Grassy Surge" }
  },
  blastoisemega: {
    inherit: true,
    types: ["Water", "Fairy"],
    baseStats: { hp: 79, atk: 83, def: 130, spa: 135, spd: 105, spe: 98 },
    abilities: { 0: "Misty Surge" }
  },
  charizardmegay: {
    inherit: true,
    types: ["Fire", "Flying"],
    baseStats: { hp: 78, atk: 94, def: 93, spa: 159, spd: 110, spe: 100 },
    abilities: { 0: "Dragon's Gale" }
  },
  alakazammega: {
    inherit: true,
    types: ["Psychic", "Ice"],
    baseStats: { hp: 55, atk: 50, def: 75, spa: 155, spd: 125, spe: 140 },
    abilities: { 0: "Magic Guard" }
  },
  pinsirmega: {
    inherit: true,
    types: ["Bug", "Ice"],
    baseStats: { hp: 65, atk: 150, def: 110, spa: 80, spd: 85, spe: 110 },
    abilities: { 0: "Mountaineer" }
  },
  gengarmega: {
    inherit: true,
    types: ["Ghost", "Poison"],
    baseStats: { hp: 65, atk: 60, def: 105, spa: 155, spd: 105, spe: 110 },
    abilities: { 0: "Neutralizing Gas" }
  },
  aerodactylmega: {
    inherit: true,
    types: ["Rock", "Flying"],
    baseStats: { hp: 80, atk: 140, def: 65, spa: 85, spd: 100, spe: 145 },
    abilities: { 0: "Nostalgia Trip" }
  },
  steelixmega: {
    inherit: true,
    types: ["Steel", "Ground"],
    baseStats: { hp: 75, atk: 135, def: 210, spa: 55, spd: 105, spe: 30 },
    abilities: { 0: "Flash Fire" },
    weightkg: 999.9
  },
  altariamega: {
    inherit: true,
    types: ["Dragon", "Fairy"],
    baseStats: { hp: 75, atk: 90, def: 90, spa: 140, spd: 115, spe: 80 },
    abilities: { 0: "Weather Report" }
  },
  sceptilemega: {
    inherit: true,
    types: ["Grass", "Dragon"],
    baseStats: { hp: 70, atk: 95, def: 79, spa: 145, spd: 99, spe: 142 },
    abilities: { 0: "Armor Tail" }
  },
  swampertmega: {
    inherit: true,
    types: ["Water", "Poison"],
    baseStats: { hp: 100, atk: 145, def: 110, spa: 85, spd: 110, spe: 85 },
    abilities: { 0: "Toxic Chain" }
  },
  manectricmega: {
    inherit: true,
    types: ["Electric"],
    baseStats: { hp: 70, atk: 75, def: 80, spa: 135, spd: 85, spe: 130 },
    abilities: { 0: "Bug Zapper" }
  },
  absolmega: {
    inherit: true,
    types: ["Dark", "Fairy"],
    baseStats: { hp: 65, atk: 130, def: 60, spa: 135, spd: 60, spe: 115 },
    abilities: { 0: "Neuroforce" }
  },
  medichammega: {
    inherit: true,
    types: ["Fighting", "Psychic"],
    baseStats: { hp: 60, atk: 60, def: 100, spa: 90, spd: 100, spe: 100 },
    abilities: { 0: "Brain Power" }
  },
  sableyemega: {
    inherit: true,
    types: ["Dark", "Ghost"],
    baseStats: { hp: 50, atk: 95, def: 115, spa: 85, spd: 115, spe: 20 }
  },
  beedrillmega: {
    inherit: true,
    types: ["Bug", "Rock"],
    baseStats: { hp: 65, atk: 140, def: 85, spa: 45, spd: 85, spe: 75 },
    abilities: { 0: "Exoskeleton" }
  },
  mawilemega: {
    inherit: true,
    types: ["Steel", "Fairy"],
    baseStats: { hp: 50, atk: 90, def: 125, spa: 70, spd: 95, spe: 50 },
    abilities: { 0: "Huge Power" }
  },
  abomasnowmega: {
    inherit: true,
    types: ["Grass"],
    abilities: { 0: "Ice Scales" }
  },
  cameruptmega: {
    inherit: true,
    types: ["Fire", "Ground"],
    baseStats: { hp: 70, atk: 80, def: 140, spa: 135, spd: 115, spe: 20 },
    abilities: { 0: "Earth Eater" }
  },
  slowbromega: {
    inherit: true,
    types: ["Water", "Psychic"],
    baseStats: { hp: 95, atk: 75, def: 150, spa: 120, spd: 120, spe: 30 },
    abilities: { 0: "Shell Ejection" }
  },
  gallademega: {
    inherit: true,
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 68, atk: 150, def: 100, spa: 65, spd: 127, spe: 108 },
    abilities: { 0: "Sharpness" }
  },
  ampharosmega: {
    inherit: true,
    types: ["Electric", "Dragon"],
    baseStats: { hp: 90, atk: 95, def: 95, spa: 165, spd: 110, spe: 55 },
    abilities: { 0: "Mega Launcher" }
  },
  gyaradosmega: {
    inherit: true,
    types: ["Water", "Flying"],
    baseStats: { hp: 95, atk: 130, def: 109, spa: 85, spd: 130, spe: 91 },
    abilities: { 0: "Aerilate" }
  },
  heracrossmega: {
    inherit: true,
    types: ["Bug", "Fighting"],
    baseStats: { hp: 80, atk: 150, def: 150, spa: 40, spd: 110, spe: 70 },
    abilities: { 0: "Iron Barbs" }
  },
  sharpedomega: {
    inherit: true,
    types: ["Water", "Electric"],
    baseStats: { hp: 70, atk: 130, def: 55, spa: 145, spd: 55, spe: 105 },
    abilities: { 0: "No Guard" }
  },
  gardevoirmega: {
    inherit: true,
    types: ["Psychic", "Fairy"],
    baseStats: { hp: 68, atk: 65, def: 100, spa: 150, spd: 127, spe: 108 }
  },
  aggronmega: {
    inherit: true,
    types: ["Steel"],
    baseStats: { hp: 70, atk: 145, def: 185, spa: 85, spd: 85, spe: 60 },
    abilities: { 0: "Dauntless Shield" }
  },
  kangaskhanmega: {
    inherit: true,
    types: ["Normal", "Ground"],
    baseStats: { hp: 105, atk: 125, def: 105, spa: 50, spd: 105, spe: 100 }
  },
  salamencemega: {
    inherit: true,
    types: ["Dragon", "Flying"],
    baseStats: { hp: 95, atk: 135, def: 105, spa: 155, spd: 105, spe: 105 },
    abilities: { 0: "Confidence" }
  },
  garchompmega: {
    inherit: true,
    types: ["Dragon", "Ground"],
    baseStats: { hp: 108, atk: 150, def: 115, spa: 140, spd: 85, spe: 102 },
    abilities: { 0: "Water Absorb" }
  },
  tyranitarmega: {
    inherit: true,
    types: ["Rock", "Electric"],
    baseStats: { hp: 100, atk: 144, def: 120, spa: 110, spd: 144, spe: 82 },
    abilities: { 0: "Electric Surge" }
  },
  latiasmega: {
    inherit: true,
    abilities: { 0: "Trace" }
  },
  latiosmega: {
    inherit: true,
    baseStats: { hp: 80, atk: 140, def: 100, spa: 150, spd: 120, spe: 110 },
    abilities: { 0: "Opportunist" }
  },
  dianciemega: {
    inherit: true,
    abilities: { 0: "Good As Gold" }
  },
  blazikenmega: {
    inherit: true,
    baseStats: { hp: 80, atk: 150, def: 80, spa: 120, spd: 90, spe: 110 },
    abilities: { 0: "Regenerator" }
  },
  mewtwomegax: {
    inherit: true,
    types: ["Psychic", "Poison"],
    baseStats: { hp: 106, atk: 140, def: 130, spa: 154, spd: 120, spe: 130 },
    abilities: { 0: "Intoxicate" }
  },
  mewtwomegay: {
    inherit: true,
    types: ["Psychic", "Water"],
    baseStats: { hp: 106, atk: 120, def: 110, spa: 194, spd: 130, spe: 120 },
    abilities: { 0: "Levitate" }
  },
  rayquazamega: {
    inherit: true,
    requiredItem: "Meteorite",
    requiredMove: null
  }
};
//# sourceMappingURL=pokedex.js.map
