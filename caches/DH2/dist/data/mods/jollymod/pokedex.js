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
  abomasnow: {
    inherit: true,
    num: -1e3,
    name: "Abomasnow",
    types: ["Ice", "Dragon"],
    baseStats: { hp: 90, atk: 52, def: 115, spa: 112, spd: 115, spe: 56 },
    abilities: { 0: "Permafrost", H: "Ice Scales" }
  },
  abomasnowmega: {
    inherit: true,
    num: -999,
    name: "Abomasnow-Mega",
    types: ["Ice", "Dragon"],
    baseStats: { hp: 90, atk: 92, def: 135, spa: 132, spd: 135, spe: 56 },
    abilities: { 0: "Snow Cloak" }
  },
  beartic: {
    inherit: true,
    num: -998,
    name: "Beartic",
    types: ["Ice", "Fighting"],
    baseStats: { hp: 110, atk: 130, def: 90, spa: 70, spd: 90, spe: 40 },
    abilities: { 0: "Slush Rush", H: "Poison Heal" }
  },
  cirno: {
    num: -997,
    name: "Cirno",
    types: ["Ice", "Fairy", "Water"],
    baseStats: { hp: 95, atk: 105, def: 80, spa: 109, spd: 60, spe: 111 },
    abilities: { 0: "Heatproof", 1: "Pixilate", H: "Permafrost" }
  },
  delibird: {
    inherit: true,
    num: -996,
    name: "Delibird",
    types: ["Ice", "Flying", "Fairy"],
    baseStats: { hp: 105, atk: 75, def: 105, spa: 85, spd: 85, spe: 75 },
    abilities: { 0: "Jolly Spirit", 1: "Mountaineer", H: "Spirit of Giving" }
  },
  eiscue: {
    inherit: true,
    num: -995,
    name: "Eiscue",
    types: ["Ice", "Rock"],
    baseStats: { hp: 85, atk: 60, def: 120, spa: 60, spd: 120, spe: 55 },
    abilities: { 0: "Ice Body", 1: "Permafrost", H: "Ice Face" }
  },
  eiscuenoice: {
    inherit: true,
    num: -994,
    name: "Eiscue-Noice",
    types: ["Ice", "Rock"],
    baseStats: { hp: 85, atk: 100, def: 45, spa: 100, spd: 45, spe: 125 },
    abilities: { 0: "Ice Face" }
  },
  frozenflashback: {
    num: -993,
    name: "Frozen Flashback",
    types: ["Ice", "Ghost", "Water"],
    baseStats: { hp: 155, atk: 95, def: 65, spa: 135, spd: 65, spe: 55 },
    abilities: { 0: "Protosynthesis", H: "Ghost of Christmas Past" }
  },
  froslass: {
    inherit: true,
    num: -992,
    name: "Froslass",
    types: ["Ice", "Ghost", "Normal"],
    baseStats: { hp: 125, atk: 100, def: 85, spa: 100, spd: 85, spe: 75 },
    abilities: { 0: "Jolly Spirit", H: "Ghost of Christmas Present" }
  },
  ferricphantom: {
    num: -991,
    name: "Ferric Phantom",
    types: ["Ice", "Ghost", "Dark"],
    baseStats: { hp: 90, atk: 110, def: 90, spa: 80, spd: 90, spe: 110 },
    abilities: { 0: "Quark Drive", H: "Ghost of Christmas Yet to Come" }
  },
  grimmsnarl: {
    inherit: true,
    num: -990,
    name: "Grimmsnarl",
    types: ["Ice", "Dark", "Fairy"],
    baseStats: { hp: 95, atk: 95, def: 120, spa: 65, spd: 75, spe: 60 },
    abilities: { 0: "Prankster", 1: "Fluffy", H: "Pickpocket" }
  },
  grimmsnarlmega: {
    num: -989,
    name: "Grimmsnarl-Mega",
    baseSpecies: "Grimmsnarl",
    forme: "Mega",
    types: ["Ice", "Dark", "Fairy"],
    baseStats: { hp: 95, atk: 135, def: 140, spa: 85, spd: 105, spe: 50 },
    abilities: { 0: "Grinch's Apprentice" },
    requiredItem: "Grimmsnarlite"
  },
  hisuiansneasel: {
    num: -988,
    name: "Hisuian Sneasel",
    types: ["Ice", "Fighting", "Poison"],
    baseStats: { hp: 65, atk: 95, def: 75, spa: 35, spd: 65, spe: 115 },
    abilities: { 0: "Fur Coat", 1: "Inner Focus", H: "Snow Cloak" }
  },
  ironbundle: {
    inherit: true,
    num: -987,
    name: "Iron Bundle",
    types: ["Ice", "Water", "Electric"],
    baseStats: { hp: 84, atk: 80, def: 100, spa: 80, spd: 100, spe: 126 },
    abilities: { 0: "Quark Drive", H: "Fightning Rod" }
  },
  jolliv: {
    num: -986,
    name: "Jolliv",
    types: ["Ice", "Grass"],
    baseStats: { hp: 83, atk: 53, def: 75, spa: 108, spd: 78, spe: 33 },
    abilities: { 0: "Jolly Spirit", 1: "Evergreen", H: "Melting Snow" }
  },
  krampus: {
    num: -985,
    name: "Krampus",
    types: ["Ice", "Dark", "Fire", "Fairy"],
    baseStats: { hp: 150, atk: 120, def: 100, spa: 100, spd: 80, spe: 50 },
    abilities: { 0: "Grinch's Apprentice" }
  },
  lavalugg: {
    num: -984,
    name: "Lavalugg",
    types: ["Ice", "Fire", "Ground"],
    baseStats: { hp: 95, atk: 117, def: 184, spa: 44, spd: 62, spe: 28 },
    abilities: { 0: "Ice Body", 1: "Flame Body", H: "Mountaineer" }
  },
  mariahcarey: {
    num: -983,
    name: "Mariah Carey",
    types: ["Ice", "Normal"],
    baseStats: { hp: 78, atk: 98, def: 70, spa: 114, spd: 70, spe: 95 },
    abilities: { 0: "Christmas Carol", H: "Merciless" }
  },
  ninetalesalola: {
    inherit: true,
    num: -982,
    name: "Ninetales-Alola",
    types: ["Ice", "Fairy"],
    baseStats: { hp: 98, atk: 67, def: 75, spa: 81, spd: 100, spe: 109 },
    abilities: { 0: "Snow Cloak", H: "Magic Guard" }
  },
  onzong: {
    num: -981,
    name: "Onzong",
    types: ["Ice", "Steel", "Psychic"],
    baseStats: { hp: 87, atk: 89, def: 126, spa: 89, spd: 106, spe: 33 },
    abilities: { 0: "Levitate", 1: "Heatproof", H: "Jingle Bells" }
  },
  pikachuholiday: {
    num: -980,
    name: "Pikachu-Holiday",
    types: ["Ice", "Electric"],
    baseStats: { hp: 50, atk: 55, def: 50, spa: 55, spd: 50, spe: 90 },
    abilities: { 0: "Jolly Spirit", H: "Fightning Rod" }
  },
  quagsirefrozen: {
    num: -979,
    name: "Quagsire-Frozen",
    types: ["Ice", "Water", "Ground"],
    baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 35 },
    abilities: { 0: "Ice Body", 1: "Permafrost", H: "Unaware" }
  },
  regiceiceiceice: {
    num: -978,
    name: "Regiceiceiceice",
    types: ["Ice", "Ice", "Ice", "Ice"],
    baseStats: { hp: 80, atk: 50, def: 100, spa: 100, spd: 200, spe: 50 },
    abilities: { 0: "Ice Body", H: "Permafrost" }
  },
  sceptile: {
    inherit: true,
    num: -977,
    name: "Sceptile",
    types: ["Ice", "Grass"],
    baseStats: { hp: 70, atk: 120, def: 85, spa: 65, spd: 85, spe: 105 },
    abilities: { 0: "Overgrow", H: "Evergreen" }
  },
  sceptilemega: {
    inherit: true,
    num: -976,
    name: "Sceptile-Mega",
    types: ["Ice", "Grass", "Dragon"],
    baseStats: { hp: 70, atk: 145, def: 95, spa: 80, spd: 95, spe: 145 },
    abilities: { 0: "Fightning Rod" }
  },
  tarmie: {
    num: -975,
    name: "Tarmie",
    types: ["Ice", "Water", "Psychic"],
    baseStats: { hp: 115, atk: 60, def: 85, spa: 100, spd: 85, spe: 75 },
    abilities: { 0: "Illuminate", 1: "Victory Star", H: "Regenerator" }
  },
  uzelf: {
    num: -974,
    name: "Uzelf",
    types: ["Ice", "Psychic", "Poison"],
    baseStats: { hp: 75, atk: 110, def: 85, spa: 110, spd: 85, spe: 115 },
    abilities: { 0: "Liquid Ooze", H: "Moody" }
  },
  vastformsnowy: {
    num: -973,
    name: "Vastform-Snowy",
    types: ["Ice", "Bug"],
    baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
    abilities: { 0: "Filter", 1: "Tinted Lens", H: "Mountaineer" }
  },
  wyrdeer: {
    inherit: true,
    num: -972,
    name: "Wyrdeer",
    types: ["Ice", "Psychic", "Flying"],
    baseStats: { hp: 103, atk: 105, def: 105, spa: 72, spd: 75, spe: 65 },
    abilities: { 0: "Fluffy", 1: "Aerilate", H: "Sap Sipper" }
  },
  xurkitree: {
    inherit: true,
    num: -971,
    name: "Xurkitree",
    types: ["Ice", "Grass", "Electric"],
    baseStats: { hp: 83, atk: 79, def: 163, spa: 101, spd: 71, spe: 73 },
    abilities: { 0: "Beast Boost", H: "Regenerator" }
  },
  yogonal: {
    num: -970,
    name: "Yogonal",
    types: ["Ice", "Steel"],
    baseStats: { hp: 80, atk: 50, def: 95, spa: 105, spd: 135, spe: 50 },
    abilities: { 0: "Permafrost", H: "Levitate" }
  },
  zengalariandarmanitan: {
    num: -969,
    name: "Zen Galarian Darmanitan",
    types: ["Ice", "Fire"],
    baseStats: { hp: 105, atk: 95, def: 65, spa: 95, spd: 65, spe: 115 },
    abilities: { 0: "Flash Fire", H: "Zen Mode" }
  },
  zengalariandarmanitanzen: {
    num: -968,
    name: "Zen Galarian Darmanitan-Zen",
    baseSpecies: "Zen Galarian Darmanitan",
    forme: "Zen",
    types: ["Ice", "Fire", "Psychic"],
    baseStats: { hp: 105, atk: 95, def: 105, spa: 95, spd: 105, spe: 35 },
    abilities: { 0: "Zen Mode" }
  }
};
//# sourceMappingURL=pokedex.js.map
