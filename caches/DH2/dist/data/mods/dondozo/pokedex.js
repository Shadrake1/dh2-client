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
  /*
  	name: {
  		fusion: ['P1', 'P2'],
  		num: x.5,
  		name: "Name",
  		types: [""],
  		baseStats: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0},
  		abilities: {0: ""},
  		weightkg: ,
  	},
  
  	*/
  dudungiri: {
    fusion: ["Dudunsparce", "Tatsugiri"],
    num: 1,
    name: "Dudungiri",
    types: ["Dragon", "Normal"],
    baseStats: { hp: 96, atk: 75, def: 90, spa: 102, spd: 85, spe: 68 },
    abilities: { 0: "I'm terrified of Dondozo" },
    weightkg: 23.6
  },
  eisugiri: {
    fusion: ["Eiscue", "Tatsugiri"],
    num: 2,
    name: "Eisugiri",
    types: ["Dragon", "Ice"],
    baseStats: { hp: 88, atk: 65, def: 85, spa: 92, spd: 92, spe: 69 },
    abilities: { 0: "Cold Commander" },
    weightkg: 48.5,
    otherFormes: ["Eisugiri-Dondozo"],
    formeOrder: ["Eisugiri", "Eisugiri-Dondozo"]
  },
  eisugiridondozo: {
    dondozo: true,
    num: 2,
    name: "Eisugiri-Dondozo",
    baseSpecies: "Eisugiri",
    forme: "Dondozo",
    types: ["Water"],
    baseStats: { hp: 150, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 },
    abilities: { 0: "Cold Commander" },
    weightkg: 220,
    requiredAbility: "Cold Commander",
    battleOnly: "Eisugiri"
  },
  cramogiri: {
    fusion: ["Cramorant", "Tatsugiri"],
    num: 3,
    name: "Cramogiri",
    types: ["Water", "Flying"],
    baseStats: { hp: 75, atk: 70, def: 65, spa: 105, spd: 95, spe: 90 },
    abilities: { 0: "Nautical Nuke" },
    weightkg: 13,
    otherFormes: ["Cramogiri-Gorging"],
    formeOrder: ["Cramogiri", "Cramogiri-Gorging"]
  },
  cramogirigorging: {
    fusion: ["Cramorant", "Tatsugiri"],
    num: 3,
    name: "Cramogiri-Gorging",
    types: ["Water", "Flying"],
    baseStats: { hp: 75, atk: 70, def: 65, spa: 105, spd: 95, spe: 90 },
    abilities: { 0: "Nautical Nuke" },
    weightkg: 13,
    requiredAbility: "Nautical Nuke",
    battleOnly: "Cramogiri"
  },
  cycligiri: {
    fusion: ["Cyclizar", "Tatsugiri"],
    num: 4,
    name: "Cycligiri",
    types: ["Dragon", "Water"],
    baseStats: { hp: 89, atk: 72, def: 62, spa: 102, spd: 80, spe: 101 },
    abilities: { 0: "Paramedic" },
    weightkg: 35.5
  },
  shedigiri: {
    fusion: ["Shedinja", "Tatsugiri"],
    num: 5,
    name: "Shedigiri",
    types: ["Water", "Ghost"],
    baseStats: { hp: 1, atk: 90, def: 52, spa: 75, spd: 62, spe: 61 },
    maxHP: 1,
    abilities: { 0: "Commander Guard" },
    weightkg: 4.6
  },
  rampagiri: {
    fusion: ["Rampardos", "Tatsugiri"],
    num: 6,
    name: "Rampagiri",
    types: ["Dragon", "Rock"],
    baseStats: { hp: 82, atk: 107, def: 60, spa: 101, spd: 72, spe: 81 },
    abilities: { 0: "not paying attention to dondozo at all, sorry" },
    weightkg: 55.25
  },
  goligiri: {
    fusion: ["Golisopod", "Tatsugiri"],
    num: 7,
    name: "Goligiri",
    types: ["Water", "Bug"],
    baseStats: { hp: 85, atk: 90, def: 100, spa: 90, spd: 95, spe: 61 },
    abilities: { 0: "Imperial Retreat" },
    weightkg: 58
  },
  mukugiri: {
    fusion: ["Muk-Alola", "Tatsugiri"],
    num: 8,
    name: "Mukugiri",
    types: ["Water", "Poison"],
    baseStats: { hp: 106, atk: 77, def: 67, spa: 92, spd: 97, spe: 66 },
    abilities: { 0: "Power of Dondozo" },
    weightkg: 30
  },
  gyaragiri: {
    fusion: ["Gyarados", "Tatsugiri"],
    num: 9,
    name: "Gyaragiri",
    types: ["Dragon"],
    baseStats: { hp: 81, atk: 87, def: 69, spa: 90, spd: 97, spe: 81 },
    abilities: { 0: "Sacrifice" },
    weightkg: 121.5
  },
  weezigiri: {
    fusion: ["Weezing-Galar", "Tatsugiri"],
    num: 10,
    name: "Weezigiri",
    types: ["Water", "Fairy"],
    baseStats: { hp: 86, atk: 70, def: 90, spa: 102, spd: 82, spe: 71 },
    abilities: { 0: "Fishing Season" },
    weightkg: 12
  },
  wogiri: {
    fusion: ["Wo-Chien", "Tatsugiri"],
    num: 11,
    name: "Wo-giri",
    types: ["Dragon", "Grass"],
    baseStats: { hp: 80, atk: 70, def: 80, spa: 115, spd: 115, spe: 80 },
    abilities: { 0: "Fishes of Ruin" },
    weightkg: 41.1
  },
  pyukugiri: {
    fusion: ["Pyukumuku", "Tatsugiri"],
    num: 12,
    name: "Pyukugiri",
    types: ["Water"],
    baseStats: { hp: 61, atk: 55, def: 95, spa: 95, spd: 112, spe: 43 },
    abilities: { 0: "Fish Out" },
    weightkg: 4.6
  },
  grenigiri: {
    fusion: ["Greninja", "Tatsugiri"],
    num: 13,
    name: "Grenigiri",
    types: ["Dragon", "Dark"],
    baseStats: { hp: 70, atk: 92, def: 63, spa: 111, spd: 83, spe: 102 },
    abilities: { 0: "Fish Bond" },
    weightkg: 24,
    otherFormes: ["Grenigiri-Dondozo"],
    formeOrder: ["Grenigiri", "Grenigiri-Dondozo"]
  },
  grenigiridondozo: {
    dondozo: true,
    num: 13,
    name: "Grenigiri-Dondozo",
    forme: "Dondozo",
    types: ["Water"],
    baseStats: { hp: 150, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 },
    abilities: { 0: "Unaware", 1: "Oblivious", H: "Water Veil" },
    weightkg: 220,
    battleOnly: "Grenigiri"
  },
  drifugiri: {
    fusion: ["Drifblim", "Tatsugiri"],
    num: 14,
    name: "Drifugiri",
    types: ["Water", "Ghost"],
    baseStats: { hp: 109, atk: 65, def: 72, spa: 105, spd: 74, spe: 81 },
    abilities: { 0: "Zombie Fish" },
    weightkg: 11.5,
    otherFormes: ["Drifugiri-Dondozo"],
    formeOrder: ["Drifugiri", "Drifugiri-Dondozo"]
  },
  drifugiridondozo: {
    dondozo: true,
    num: 14,
    name: "Drifugiri-Dondozo",
    forme: "Dondozo",
    types: ["Water"],
    baseStats: { hp: 150, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 },
    abilities: { 0: "Unaware", 1: "Oblivious", H: "Water Veil" },
    weightkg: 220,
    battleOnly: "Drifugiri"
  },
  kinggiri: {
    fusion: ["Kingambit", "Tatsugiri"],
    num: 15,
    name: "Kinggiri",
    types: ["Water", "Steel"],
    baseStats: { hp: 85, atk: 95, def: 90, spa: 90, spd: 90, spe: 70 },
    abilities: { 0: "yeah" },
    weightkg: 64
  },
  mimigiri: {
    fusion: ["Mimikyu", "Tatsugiri"],
    num: 16,
    name: "Mimigiri",
    types: ["Dragon", "Fairy"],
    baseStats: { hp: 61, atk: 90, def: 70, spa: 85, spd: 100, spe: 89 },
    abilities: { 0: "Call for Help" },
    weightkg: 4.35,
    otherFormes: ["Mimigiri-Dondozo"],
    formeOrder: ["Mimigiri", "Mimigiri-Dondozo"]
  },
  mimigiridondozo: {
    dondozo: true,
    num: 16,
    name: "Mimigiri-Dondozo",
    forme: "Dondozo",
    types: ["Water"],
    baseStats: { hp: 150, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 },
    abilities: { 0: "Unaware", 1: "Oblivious", H: "Water Veil" },
    weightkg: 220,
    battleOnly: "Mimigiri"
  },
  dondogiri: {
    dondozo: true,
    fusion: ["Dondozo", "Tatsugiri"],
    num: 17,
    name: "Dondogiri",
    types: ["Dragon", "Water"],
    baseStats: { hp: 109, atk: 75, def: 87, spa: 92, spd: 80, spe: 58 },
    abilities: { 0: "Ouroboros" },
    weightkg: 114
  },
  palagiri: {
    fusion: ["Palafin", "Tatsugiri"],
    num: 18,
    name: "Palagiri",
    types: ["Water"],
    baseStats: { hp: 95, atk: 60, def: 66, spa: 86, spd: 78, spe: 100 },
    abilities: { 0: "Bozo to Dozo" },
    weightkg: 34.1,
    otherFormes: ["Palagiri-Dondozo"],
    formeOrder: ["Palagiri", "Palagiri-Dondozo"]
  },
  palagiridondozo: {
    dondozo: true,
    num: 18,
    name: "Palagiri-Dondozo",
    forme: "Dondozo",
    types: ["Water"],
    baseStats: { hp: 150, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 },
    abilities: { 0: "Unaware", 1: "Oblivious", H: "Water Veil" },
    weightkg: 220,
    battleOnly: "Palagiri"
  },
  toxagiri: {
    fusion: ["Toxapex", "Tatsugiri"],
    num: 19,
    name: "Toxagiri",
    types: ["Dragon", "Poison"],
    baseStats: { hp: 59, atk: 56, def: 106, spa: 106, spd: 118, spe: 58 },
    abilities: { 0: "Donzoless" },
    weightkg: 11.25
  },
  zorogiri: {
    fusion: ["Zoroark-Hisui", "Tatsugiri"],
    num: 20,
    name: "Zorogiri",
    types: ["Dragon", "Ghost"],
    baseStats: { hp: 65, atk: 80, def: 60, spa: 120, spd: 80, spe: 105 },
    abilities: { 0: "False Dragon" },
    weightkg: 44.55
  },
  minigiri: {
    fusion: ["Minior", "Tatsugiri"],
    num: 21,
    name: "Minigiri",
    types: ["Dragon", "Flying"],
    baseStats: { hp: 84, atk: 75, def: 60, spa: 110, spd: 77, spe: 101 },
    abilities: { 0: "Dondozo Shield" },
    weightkg: 4.15,
    otherFormes: ["Minigiri-Dondozo"],
    formeOrder: ["Minigiri", "Minigiri-Dondozo"]
  },
  minigiridondozo: {
    dondozo: true,
    num: 21,
    name: "Minigiri-Dondozo",
    forme: "Dondozo",
    types: ["Water"],
    baseStats: { hp: 150, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 },
    abilities: { 0: "Dondozo Shield" },
    weightkg: 220,
    requiredAbility: "Dondozo Shield",
    battleOnly: "Minigiri"
  },
  swampugiri: {
    fusion: ["Swampert", "Tatsugiri"],
    num: 22,
    name: "Swampugiri",
    types: ["Water", "Ground"],
    baseStats: { hp: 85, atk: 80, def: 80, spa: 105, spd: 95, spe: 75 },
    abilities: { 0: "Dondon'tzo" },
    weightkg: 44.95
  },
  dittugiri: {
    fusion: ["Ditto", "Tatsugiri"],
    num: 23,
    name: "Dittugiri",
    types: ["Water", "Normal"],
    baseStats: { hp: 78, atk: 49, def: 54, spa: 84, spd: 71, spe: 65 },
    abilities: { 0: "Emergency Meeting" },
    weightkg: 6
  },
  jelligiri: {
    fusion: ["Jellicent", "Tatsugiri"],
    num: 24,
    name: "Jelligiri",
    types: ["Dragon", "Ghost"],
    baseStats: { hp: 100, atk: 55, def: 65, spa: 102, spd: 100, spe: 73 },
    abilities: { 0: "Dondo-No" },
    weightkg: 71.5
  },
  malagiri: {
    fusion: ["Malamar", "Tatsugiri"],
    num: 25,
    name: "Malagiri",
    types: ["Water", "Psychic"],
    baseStats: { hp: 80, atk: 75, def: 80, spa: 95, spd: 85, spe: 80 },
    abilities: { 0: "gyeah" },
    weightkg: 27.5
  },
  magnegiri: {
    fusion: ["Magnezone", "Tatsugiri"],
    num: 26,
    name: "Magnegiri",
    types: ["Water", "Electric"],
    baseStats: { hp: 70, atk: 60, def: 95, spa: 125, spd: 95, spe: 75 },
    abilities: { 0: "Fishnet" },
    weightkg: 94
  },
  komagiri: {
    dondozo: true,
    fusion: ["Komala", "Tatsugiri"],
    num: 27,
    name: "Komagiri",
    types: ["Dragon", "Normal"],
    baseStats: { hp: 86, atk: 85, def: 62, spa: 97, spd: 95, spe: 73 },
    abilities: { 0: "Commatose" },
    weightkg: 13.95
  },
  aegigiri: {
    fusion: ["Aegislash", "Tatsugiri"],
    num: 28,
    name: "Aegigiri",
    types: ["Dragon", "Steel"],
    baseStats: { hp: 75, atk: 50, def: 100, spa: 85, spd: 120, spe: 75 },
    abilities: { 0: "byeah" },
    weightkg: 30.5,
    otherFormes: ["Aegigiri-Dondozo"],
    formeOrder: ["Aegigiri", "Aegigiri-Dondozo"]
  },
  aegigiridondozo: {
    dondozo: true,
    num: 28,
    name: "Aegigiri-Dondozo",
    forme: "Dondozo",
    types: ["Water"],
    baseStats: { hp: 150, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 },
    abilities: { 0: "byeah" },
    weightkg: 220,
    requiredAbility: "byeah",
    battleOnly: "Aegigiri"
  },
  croakigiri: {
    fusion: ["Toxicroak", "Tatsugiri"],
    num: 29,
    name: "Croakigiri",
    types: ["Dragon", "Fighting"],
    baseStats: { hp: 75, atk: 80, def: 65, spa: 105, spd: 80, spe: 85 },
    abilities: { 0: "Dondophobic" },
    weightkg: 26.2
  },
  dondozo: {
    inherit: true,
    dondozo: true
  }
};
//# sourceMappingURL=pokedex.js.map
