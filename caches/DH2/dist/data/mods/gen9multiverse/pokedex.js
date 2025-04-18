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
  venusaur: {
    inherit: true,
    baseStats: { hp: 80, atk: 91, def: 103, spa: 111, spd: 110, spe: 80 },
    abilities: { 0: "Thick Fat" }
  },
  machamp: {
    inherit: true,
    baseStats: { hp: 100, atk: 130, def: 70, spa: 65, spd: 120, spe: 45 },
    abilities: { 0: "Inner Focus", H: "Brazen Brawn" }
  },
  gengar: {
    inherit: true,
    baseStats: { hp: 85, atk: 65, def: 60, spa: 130, spd: 130, spe: 110 },
    abilities: { 0: "Neutralizing Gas" },
    prevo: null
  },
  starmie: {
    inherit: true,
    baseStats: { hp: 60, atk: 75, def: 95, spa: 110, spd: 95, spe: 125 },
    abilities: { 0: "Natural Cure", 1: "Analytic", H: "Chromatophore" }
  },
  dragonite: {
    inherit: true,
    types: ["Dragon", "Normal"],
    baseStats: { hp: 91, atk: 104, def: 95, spa: 120, spd: 100, spe: 90 },
    abilities: { 0: "Inner Focus" }
  },
  magneton: {
    inherit: true,
    baseStats: { hp: 75, atk: 60, def: 85, spa: 105, spd: 85, spe: 120 },
    abilities: { 0: "Analytic" },
    evos: null
  },
  hypno: {
    inherit: true,
    types: ["Psychic", "Poison"],
    baseStats: { hp: 100, atk: 73, def: 70, spa: 93, spd: 125, spe: 67 },
    abilities: { 0: "Toxic Chain", 1: "Earth Eater", H: "Immunity" }
  },
  gastly: {
    inherit: true,
    types: ["Ghost", "Dark"],
    baseStats: { hp: 80, atk: 65, def: 60, spa: 120, spd: 90, spe: 110 },
    evos: null
  },
  rapidash: {
    inherit: true,
    baseStats: { hp: 90, atk: 110, def: 90, spa: 120, spd: 85, spe: 105 },
    abilities: { 0: "Drought", H: "Flash Fire" }
  },
  mewtwo: {
    inherit: true,
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 86, atk: 115, def: 100, spa: 64, spd: 95, spe: 100 },
    abilities: { 0: "Steadfast" }
  },
  lanturn: {
    inherit: true,
    baseStats: { hp: 125, atk: 58, def: 70, spa: 96, spd: 92, spe: 67 },
    abilities: { 0: "Compound Eyes", 1: "Volt Absorb", H: "Water Absorb" },
    prevo: null
  },
  quagsire: {
    inherit: true,
    baseStats: { hp: 105, atk: 105, def: 95, spa: 65, spd: 85, spe: 35 },
    abilities: { 0: "Water Absorb" },
    prevo: null
  },
  ursaring: {
    inherit: true,
    types: ["Normal", "Fairy"],
    baseStats: { hp: 90, atk: 120, def: 105, spa: 70, spd: 90, spe: 55 },
    abilities: { 0: "Guts" }
    //evos: null,
  },
  donphan: {
    inherit: true,
    abilities: { 0: "Sturdy", H: "Regenerator" }
  },
  hitmontop: {
    inherit: true,
    types: ["Fighting", "Steel"],
    baseStats: { hp: 80, atk: 115, def: 100, spa: 40, spd: 110, spe: 60 },
    abilities: { 0: "Intimidate", H: "Technician" }
  },
  raikou: {
    inherit: true,
    baseStats: { hp: 80, atk: 85, def: 80, spa: 115, spd: 100, spe: 110 },
    abilities: { 0: "Legendary Beast" }
  },
  hooh: {
    inherit: true,
    baseStats: { hp: 96, atk: 100, def: 95, spa: 80, spd: 104, spe: 75 },
    abilities: { 0: "Regenerator" }
  },
  gardevoir: {
    inherit: true,
    baseStats: { hp: 88, atk: 65, def: 85, spa: 125, spd: 115, spe: 100 },
    abilities: { 0: "Pixelgreat", H: "Trace" },
    prevo: null
  },
  cacturne: {
    inherit: true,
    baseStats: { hp: 75, atk: 130, def: 85, spa: 125, spd: 80, spe: 100 },
    abilities: { 0: "Water Absorb", H: "Rough Skin" }
  },
  solrock: {
    inherit: true,
    types: ["Rock", "Fairy"],
    baseStats: { hp: 90, atk: 135, def: 125, spa: 55, spd: 75, spe: 70 },
    abilities: { 0: "Levitate" }
  },
  absol: {
    inherit: true,
    types: ["Dark"],
    baseStats: { hp: 70, atk: 130, def: 60, spa: 115, spd: 60, spe: 115 },
    abilities: { 0: "Justified", H: "Magic Bounce" }
  },
  glalie: {
    inherit: true,
    baseStats: { hp: 80, atk: 130, def: 80, spa: 80, spd: 80, spe: 100 },
    abilities: { 0: "Refrigerate", H: "Moody" }
  },
  regirock: {
    inherit: true,
    types: ["Rock", "Flying"],
    baseStats: { hp: 80, atk: 105, def: 200, spa: 50, spd: 100, spe: 45 },
    abilities: { 0: "Accretion", H: "Rock Head" }
  },
  latias: {
    inherit: true,
    types: ["Dragon"]
  },
  luxray: {
    inherit: true,
    types: ["Electric", "Ground"],
    baseStats: { hp: 80, atk: 120, def: 70, spa: 105, spd: 70, spe: 116 },
    abilities: { 0: "Intimidate", 1: "Volt Absorb", H: "Lion's Pride" },
    prevo: null
  },
  floatzel: {
    inherit: true,
    baseStats: { hp: 85, atk: 125, def: 65, spa: 85, spd: 60, spe: 120 }
  },
  garchomp: {
    inherit: true,
    baseStats: { hp: 98, atk: 110, def: 105, spa: 88, spd: 85, spe: 114 },
    abilities: { 0: "Rough Skin", H: "Sand Force" },
    prevo: null
  },
  drapion: {
    inherit: true,
    baseStats: { hp: 85, atk: 125, def: 110, spa: 60, spd: 75, spe: 95 },
    abilities: { 0: "Battle Armor", 1: "Sniper", H: "Vessel of Ruin" }
  },
  electivire: {
    inherit: true,
    types: ["Electric", "Fighting"],
    baseStats: { hp: 85, atk: 130, def: 70, spa: 85, spd: 70, spe: 110 },
    abilities: { 0: "Motor Drive", 1: "Iron Fist", H: "Neuroforce" }
  },
  yanmega: {
    inherit: true,
    baseStats: { hp: 96, atk: 76, def: 96, spa: 126, spd: 66, spe: 95 },
    abilities: { 0: "Speed Boost", H: "Tinted Lens" }
  },
  heatran: {
    inherit: true,
    baseStats: { hp: 86, atk: 110, def: 101, spa: 125, spd: 101, spe: 77 },
    abilities: { 0: "Divine Idol", 1: "Flash Fire", H: "Flame Body" }
  },
  serperior: {
    inherit: true,
    baseStats: { hp: 85, atk: 75, def: 95, spa: 75, spd: 95, spe: 113 },
    prevo: null
  },
  whimsicott: {
    inherit: true,
    baseStats: { hp: 70, atk: 67, def: 85, spa: 110, spd: 75, spe: 136 },
    abilities: { 0: "Chlorophyll", H: "Prankster" },
    prevo: null
  },
  sigilyph: {
    inherit: true,
    baseStats: { hp: 87, atk: 58, def: 90, spa: 103, spd: 90, spe: 97 },
    abilities: { 0: "Wonder Skin", H: "Magic Guard" }
  },
  cofagrigus: {
    inherit: true,
    baseStats: { hp: 58, atk: 50, def: 155, spa: 105, spd: 105, spe: 30 },
    abilities: { 0: "Mummy", H: "Sticky Hold" }
  },
  vanilluxe: {
    inherit: true,
    baseStats: { hp: 71, atk: 70, def: 85, spa: 125, spd: 95, spe: 109 },
    abilities: { 0: "Cold Sweat" }
  },
  escavalier: {
    inherit: true,
    baseStats: { hp: 90, atk: 135, def: 105, spa: 60, spd: 105, spe: 40 }
  },
  volcarona: {
    inherit: true,
    prevo: null
  },
  diggersby: {
    inherit: true,
    baseStats: { hp: 87, atk: 56, def: 97, spa: 50, spd: 87, spe: 78 },
    abilities: { 0: "Pickup", H: "Huge Power" }
  },
  pancham: {
    inherit: true,
    types: ["Fighting", "Dark"],
    baseStats: { hp: 90, atk: 130, def: 70, spa: 55, spd: 70, spe: 92 }
  },
  aegislash: {
    inherit: true,
    baseStats: { hp: 60, atk: 40, def: 140, spa: 40, spd: 140, spe: 60 },
    prevo: null
  },
  aegislashblade: {
    inherit: true,
    baseStats: { hp: 60, atk: 130, def: 50, spa: 130, spd: 50, spe: 60 },
    prevo: null
  },
  dragalge: {
    inherit: true,
    baseStats: { hp: 90, atk: 75, def: 90, spa: 104, spd: 123, spe: 44 }
  },
  sylveon: {
    inherit: true,
    baseStats: { hp: 95, atk: 65, def: 80, spa: 110, spd: 130, spe: 60 },
    abilities: { 0: "Cute Charm", H: "Pixelgreat" }
  },
  goodra: {
    inherit: true,
    baseStats: { hp: 90, atk: 105, def: 70, spa: 115, spd: 140, spe: 80 },
    abilities: { 0: "Sap Sipper", 1: "Gooey", H: "Neuroforce" }
  },
  stakataka: {
    inherit: true,
    types: ["Steel"],
    baseStats: { hp: 71, atk: 131, def: 211, spa: 53, spd: 109, spe: 5 },
    abilities: { 0: "Beast Boost", H: "Rocky Payload" }
  },
  lycanrocdusk: {
    inherit: true,
    types: ["Rock"],
    baseStats: { hp: 75, atk: 127, def: 65, spa: 55, spd: 65, spe: 111 },
    abilities: { 0: "Tough Claws" }
  },
  nihilego: {
    inherit: true,
    types: ["Rock", "Poison"],
    baseStats: { hp: 109, atk: 53, def: 47, spa: 127, spd: 131, spe: 103 },
    abilities: { 0: "Beast Boost", H: "Ultra Recharge" }
  },
  silvallywater: {
    inherit: true,
    types: ["Water"],
    baseStats: { hp: 125, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
    abilities: { 0: "Filter" },
    requiredItem: null
  },
  meowthalola: {
    inherit: true,
    types: ["Dark"],
    baseStats: { hp: 75, atk: 75, def: 104, spa: 110, spd: 80, spe: 111 },
    abilities: { 0: "Pickup", 1: "Technician", H: "Natural Cure" },
    evos: null
  },
  turtonator: {
    inherit: true,
    types: ["Fire", "Dragon"],
    baseStats: { hp: 75, atk: 78, def: 135, spa: 106, spd: 75, spe: 66 },
    abilities: { 0: "Shell Armor", H: "Shell Breaker" }
  },
  decidueye: {
    inherit: true,
    types: ["Grass", "Ghost"],
    baseStats: { hp: 88, atk: 120, def: 75, spa: 100, spd: 110, spe: 77 },
    abilities: { 0: "Overgrow", H: "Long Reach" }
  },
  calyrexice: {
    inherit: true,
    types: ["Ice", "Psychic"],
    baseStats: { hp: 90, atk: 145, def: 130, spa: 75, spd: 100, spe: 50 },
    abilities: { 0: "As One (Glastrier)" }
  },
  samurotthisui: {
    inherit: true,
    types: ["Water", "Dark"],
    baseStats: { hp: 90, atk: 113, def: 80, spa: 100, spd: 65, spe: 85 },
    abilities: { 0: "Torrent", 1: "Sharpness", H: "Dark Aura" },
    prevo: null
  },
  kleavor: {
    inherit: true,
    types: ["Bug", "Rock"],
    baseStats: { hp: 90, atk: 135, def: 100, spa: 45, spd: 70, spe: 95 },
    abilities: { 0: "Swarm", 1: "Sheer Force", H: "Sharpness" }
  },
  orbeetle: {
    inherit: true,
    types: ["Bug", "Psychic"],
    baseStats: { hp: 60, atk: 45, def: 100, spa: 95, spd: 110, spe: 120 },
    abilities: { 0: "Swarm", 1: "Frisk", H: "Flying Saucer" }
  },
  weezinggalar: {
    inherit: true,
    types: ["Poison", "Fairy"],
    baseStats: { hp: 75, atk: 100, def: 120, spa: 95, spd: 70, spe: 60 },
    abilities: { 0: "Levitate", 1: "White Smoke", H: "Misty Surge" }
  },
  slowbrogalar: {
    inherit: true,
    types: ["Poison", "Water"],
    baseStats: { hp: 95, atk: 100, def: 95, spa: 100, spd: 70, spe: 30 },
    abilities: { 0: "Quick Draw", 1: "Own Tempo", H: "Regenerator" }
  },
  enamorus: {
    inherit: true,
    types: ["Fairy", "Flying"],
    baseStats: { hp: 79, atk: 115, def: 70, spa: 130, spd: 80, spe: 106 },
    abilities: { 0: "Contrary", H: "Cute Charm" }
  },
  gholdengo: {
    inherit: true,
    types: ["Ghost", "Fighting"],
    baseStats: { hp: 87, atk: 60, def: 105, spa: 113, spd: 81, spe: 84 },
    abilities: { 0: "Insurance" }
  },
  sinistcha: {
    inherit: true,
    types: ["Grass", "Ghost"],
    baseStats: { hp: 76, atk: 60, def: 116, spa: 126, spd: 80, spe: 80 },
    abilities: { 0: "Hospitality", H: "Heatproof" }
  },
  sinistchamasterpiece: {
    inherit: true,
    types: ["Grass", "Ghost"],
    baseStats: { hp: 76, atk: 60, def: 116, spa: 126, spd: 80, spe: 80 },
    abilities: { 0: "Hospitality", H: "Heatproof" }
  },
  ursalunabloodmoon: {
    inherit: true,
    types: ["Ground", "Normal"],
    baseStats: { hp: 113, atk: 70, def: 100, spa: 125, spd: 65, spe: 52 },
    abilities: { 0: "Mind's Eye", H: "Lunar Gift" }
  },
  toedscool: {
    inherit: true,
    types: ["Ground", "Dark"],
    baseStats: { hp: 80, atk: 70, def: 80, spa: 85, spd: 120, spe: 105 },
    abilities: { 0: "Water Absorb" },
    evos: null
  },
  ogerponhearthflame: {
    inherit: true,
    types: ["Grass", "Fire"],
    baseStats: { hp: 95, atk: 105, def: 84, spa: 70, spd: 96, spe: 100 },
    abilities: { 0: "Mold Breaker", H: "Embody Aspect (Hearthflame)" }
  },
  squawkabilly: {
    inherit: true,
    types: ["Flying"],
    baseStats: { hp: 92, atk: 123, def: 86, spa: 45, spd: 86, spe: 93 },
    abilities: { 0: "Intimidate" }
  },
  irontreads: {
    inherit: true,
    types: ["Ground", "Steel"],
    baseStats: { hp: 90, atk: 112, def: 120, spa: 72, spd: 70, spe: 106 },
    abilities: { 0: "Quark Drive" }
  }
};
//# sourceMappingURL=pokedex.js.map
