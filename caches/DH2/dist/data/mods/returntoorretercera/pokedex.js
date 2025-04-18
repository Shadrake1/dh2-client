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
  ledianpurified: {
    num: -1,
    name: "Ledian-Purified",
    types: ["Bug", "Fighting"],
    baseStats: { hp: 85, atk: 110, def: 80, spa: 60, spd: 115, spe: 85 },
    abilities: { 0: "Iron Fist", 1: "Swarm", H: "Defiant" }
  },
  flareonpurified: {
    num: -2,
    name: "Flareon-Purified",
    types: ["Fire", "Dragon"],
    baseStats: { hp: 65, atk: 130, def: 70, spa: 95, spd: 110, spe: 65 },
    abilities: { 0: "Flash Fire", 1: "Intimidate", H: "Mold Breaker" }
  },
  hypnoshadow: {
    num: -3,
    name: "Hypno-Shadow",
    types: ["Psychic", "Shadow"],
    baseStats: { hp: 85, atk: 83, def: 70, spa: 103, spd: 115, spe: 72 },
    abilities: { 0: "Shadow Nightmare" }
  },
  raticateshadow1: {
    num: -4,
    name: "Raticate-Shadow-1",
    types: ["Normal", "Shadow"],
    baseStats: { hp: 85, atk: 106, def: 85, spa: 50, spd: 70, spe: 97 },
    abilities: { 0: "Miasma" }
  },
  raticateshadow2: {
    num: -5,
    name: "Raticate-Shadow-2",
    types: ["Normal", "Shadow"],
    baseStats: { hp: 68, atk: 95, def: 57, spa: 95, spd: 66, spe: 105 },
    abilities: { 0: "Laws of Street" }
  },
  froslasspurified: {
    num: -6,
    name: "Froslass-Purified",
    types: ["Ice", "Fairy"],
    baseStats: { hp: 110, atk: 70, def: 95, spa: 70, spd: 95, spe: 70 },
    abilities: { 0: "Triage", H: "Natural Cure" }
  },
  pluslepurified: {
    num: -7,
    name: "Plusle-Purified",
    types: ["Electric", "Fairy"],
    baseStats: { hp: 70, atk: 60, def: 60, spa: 105, spd: 85, spe: 115 },
    abilities: { 0: "Lightning Rod", 1: "Plus", H: "Analytic" }
  },
  minunshadow: {
    num: -8,
    name: "Minun-Shadow",
    types: ["Electric", "Shadow"],
    baseStats: { hp: 90, atk: 30, def: 80, spa: 75, spd: 115, spe: 105 },
    abilities: { 0: "Lightning Rod", 1: "Minus", H: "Negative Charge" }
  },
  arcanineshadow: {
    num: -9,
    name: "Arcanine-Shadow",
    types: ["Fire", "Shadow"],
    baseStats: { hp: 81, atk: 125, def: 75, spa: 115, spd: 70, spe: 89 },
    abilities: { 0: "Fear the Dark" }
  },
  sunflorapurified: {
    num: -10,
    name: "Sunflora-Purified",
    types: ["Grass", "Fire"],
    baseStats: { hp: 85, atk: 100, def: 75, spa: 100, spd: 100, spe: 50 },
    abilities: { 0: "Chlorophyll", 1: "Solar Power", H: "Drought" }
  },
  hitmonchanshadow: {
    num: -11,
    name: "Hitmonchan-Shadow",
    types: ["Fighting", "Shadow"],
    baseStats: { hp: 70, atk: 105, def: 89, spa: 35, spd: 115, spe: 86 },
    abilities: { 0: "Shadow Boxer" }
  },
  smeargleshadow: {
    num: -12,
    name: "Smeargle-Shadow",
    types: ["Normal", "Shadow"],
    baseStats: { hp: 65, atk: 35, def: 45, spa: 35, spd: 45, spe: 70 },
    abilities: { 0: "Critic" }
  },
  feraligatrpurified: {
    num: -13,
    name: "Feraligatr-Purified",
    types: ["Water", "Steel"],
    baseStats: { hp: 95, atk: 105, def: 110, spa: 79, spd: 83, spe: 78 },
    abilities: { 0: "Torrent", H: "Stamina" }
  },
  persianshadow: {
    num: -14,
    name: "Persian-Shadow",
    types: ["Normal", "Shadow"],
    baseStats: { hp: 65, atk: 100, def: 60, spa: 65, spd: 65, spe: 115 },
    abilities: { 0: "Shadow Claws" }
  },
  walreinshadow: {
    num: -15,
    name: "Walrein-Shadow",
    types: ["Water", "Shadow"],
    baseStats: { hp: 115, atk: 80, def: 95, spa: 100, spd: 95, spe: 65 },
    abilities: { 0: "Cryogenian" }
  },
  furretpurified: {
    num: -16,
    name: "Furret-Purified",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 85, atk: 126, def: 64, spa: 45, spd: 85, spe: 110 },
    abilities: { 0: "Klutz", 1: "Frisk", H: "Fluffy" }
  },
  roseradeshadow: {
    num: -17,
    name: "Roserade-Shadow",
    types: ["Poison", "Shadow"],
    baseStats: { hp: 60, atk: 70, def: 65, spa: 125, spd: 105, spe: 99 },
    abilities: { 0: "Last Dance" }
  },
  heracrossshadow: {
    num: -18,
    name: "Heracross-Shadow",
    types: ["Fighting", "Shadow"],
    baseStats: { hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 95 },
    abilities: { 0: "Shadow Scourge" }
  },
  typhlosionpurified: {
    num: -19,
    name: "Typhlosion-Purified",
    types: ["Fire", "Ground"],
    baseStats: { hp: 88, atk: 84, def: 78, spa: 119, spd: 85, spe: 100 },
    abilities: { 0: "Blaze", 1: "Flash Fire", H: "Competitive" }
  },
  magcargoshadow: {
    num: -20,
    name: "Magcargo-Shadow",
    types: ["Fire", "Shadow"],
    baseStats: { hp: 60, atk: 75, def: 135, spa: 90, spd: 120, spe: 30 },
    abilities: { 0: "Combustion" }
  },
  rapidashpurified: {
    num: -21,
    name: "Rapidash-Purified",
    types: ["Fire", "Flying"],
    baseStats: { hp: 65, atk: 120, def: 70, spa: 100, spd: 80, spe: 120 },
    abilities: { 0: "Aerilate", 1: "Flash Fire", H: "Flame Body" }
  },
  altariashadow: {
    num: -22,
    name: "Altaria-Shadow",
    types: ["Shadow", "Flying"],
    baseStats: { hp: 75, atk: 80, def: 90, spa: 70, spd: 115, spe: 90 },
    abilities: { 0: "Shadow Dawn" }
  },
  mismagiusshadow: {
    num: -23,
    name: "Mismagius-Shadow",
    types: ["Ghost", "Shadow"],
    baseStats: { hp: 60, atk: 60, def: 60, spa: 115, spd: 115, spe: 115 },
    abilities: { 0: "Shadow Spell" }
  },
  hariyamapurified: {
    num: -24,
    name: "Hariyama-Purified",
    types: ["Fighting", "Water"],
    baseStats: { hp: 144, atk: 130, def: 70, spa: 60, spd: 70, spe: 50 },
    abilities: { 0: "Thick Fat", 1: "Guts", H: "Filter" }
  },
  meganiumpurified: {
    num: -25,
    name: "Meganium-Purified",
    types: ["Grass", "Ice"],
    baseStats: { hp: 80, atk: 82, def: 100, spa: 93, spd: 100, spe: 90 },
    abilities: { 0: "Overgrow", 1: "Sheer Force", H: "Leaf Guard" }
  },
  donphanpurified: {
    num: -26,
    name: "Donphan-Purified",
    types: ["Ground", "Electric"],
    baseStats: { hp: 90, atk: 110, def: 120, spa: 70, spd: 70, spe: 70 },
    abilities: { 0: "Sturdy", H: "Filter" }
  },
  primeapeshadow: {
    num: -27,
    name: "Primeape-Shadow",
    types: ["Fighting", "Shadow"],
    baseStats: { hp: 100, atk: 115, def: 80, spa: 50, spd: 80, spe: 90 },
    abilities: { 0: "Dark Mind" }
  },
  qwilfishpurified: {
    num: -28,
    name: "Qwilfish-Purified",
    types: ["Water", "Poison"],
    baseStats: { hp: 80, atk: 95, def: 100, spa: 70, spd: 95, spe: 85 },
    abilities: { 0: "Poison Touch", 1: "Intimidate", H: "Toxic Debris" }
  },
  probopasspurified: {
    num: -29,
    name: "Probopass-Purified",
    types: ["Steel", "Electric"],
    baseStats: { hp: 80, atk: 80, def: 130, spa: 95, spd: 130, spe: 30 },
    abilities: { 0: "Sturdy", 1: "Solid Rock", H: "Lightning Rod" }
  }
};
//# sourceMappingURL=pokedex.js.map
