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
  abysseil: {
    num: 1.5,
    species: "Abysseil",
    types: ["Water", "Fairy"],
    gender: "N",
    baseStats: { hp: 80, atk: 54, def: 85, spa: 73, spd: 85, spe: 148 },
    abilities: { 0: "Drizzle" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  annelait: {
    num: 2.5,
    species: "Annelait",
    types: ["Ground"],
    gender: "N",
    baseStats: { hp: 87, atk: 71, def: 117, spa: 75, spd: 67, spe: 73 },
    abilities: { 0: "Angler" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  azurolt: {
    num: 3.5,
    species: "Azurolt",
    types: ["Ground", "Electric"],
    gender: "N",
    baseStats: { hp: 90, atk: 115, def: 110, spa: 115, spd: 100, spe: 70 },
    abilities: { 0: "Electric Surge" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  baloon: {
    num: 4.5,
    species: "Baloon",
    types: ["Fairy"],
    gender: "N",
    baseStats: { hp: 137, atk: 124, def: 142, spa: 102, spd: 12, spe: 83 },
    abilities: { 0: "Queen of Roulette" },
    heightm: 1,
    weightkg: 5,
    otherFormes: ["Baloon-Water", "Baloon-Popped"],
    eggGroups: ["Undiscovered"]
  },
  baloonpopped: {
    num: 4.5,
    species: "Baloon-Popped",
    types: ["Fairy", "Dark"],
    gender: "N",
    baseStats: { hp: 77, atk: 124, def: 122, spa: 122, spd: 12, spe: 143 },
    abilities: { 0: "Steadfast" },
    heightm: 1,
    weightkg: 5,
    otherFormes: ["Baloon", "Baloon-Water"],
    eggGroups: ["Undiscovered"]
  },
  baloonwater: {
    num: 4.5,
    species: "Baloon-Water",
    types: ["Fairy", "Water"],
    gender: "N",
    baseStats: { hp: 137, atk: 102, def: 12, spa: 124, spd: 142, spe: 83 },
    abilities: { 0: "Contrary" },
    heightm: 1,
    weightkg: 5,
    otherFormes: ["Baloon", "Baloon-Popped"],
    eggGroups: ["Undiscovered"]
  },
  catelax: {
    num: 7.5,
    species: "Catelax",
    types: ["Bug"],
    gender: "N",
    baseStats: { hp: 84, atk: 76, def: 106, spa: 21, spd: 79, spe: 119 },
    abilities: { 0: "Tranquilizing Gas" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  crypterid: {
    num: 8.5,
    species: "Crypterid",
    types: ["Ground", "Poison"],
    gender: "N",
    baseStats: { hp: 81, atk: 100, def: 93, spa: 75, spd: 101, spe: 60 },
    abilities: { 0: "Fortification" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  deliriophage: {
    num: 9.5,
    species: "Deliriophage",
    types: ["Steel", "Poison"],
    gender: "N",
    baseStats: { hp: 80, atk: 65, def: 70, spa: 100, spd: 120, spe: 60 },
    abilities: { 0: "Unaware" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  detonuke: {
    num: 10.5,
    species: "Detonuke",
    types: ["Fire", "Poison"],
    gender: "N",
    baseStats: { hp: 89, atk: 115, def: 65, spa: 61, spd: 102, spe: 106 },
    abilities: { 0: "Swagnet Pull" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  draglow: {
    num: 11.5,
    species: "Draglow",
    types: ["Dragon", "Flying"],
    gender: "N",
    baseStats: { hp: 72, atk: 104, def: 72, spa: 86, spd: 72, spe: 134 },
    abilities: { 0: "No Guard" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  draxplosion: {
    num: 12.5,
    species: "Draxplosion",
    types: ["Fire", "Dragon"],
    gender: "N",
    baseStats: { hp: 79, atk: 105, def: 68, spa: 109, spd: 65, spe: 108 },
    abilities: { 0: "Blaze" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  fluidrake: {
    num: 13.5,
    species: "Fluidrake",
    types: ["Water", "Steel"],
    gender: "N",
    baseStats: { hp: 90, atk: 70, def: 85, spa: 145, spd: 80, spe: 70 },
    abilities: { 0: "Swift Swim" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  fluxtape: {
    num: 14.5,
    species: "Fluxtape",
    types: ["Fire"],
    gender: "N",
    baseStats: { hp: 90, atk: 109, def: 70, spa: 115, spd: 90, spe: 126 },
    abilities: { 0: "Mix it Up" },
    heightm: 1,
    weightkg: 5,
    otherFormes: ["Fluxtape-Radio", "Fluxtape-Stereo"],
    eggGroups: ["Undiscovered"]
  },
  fluxtaperadio: {
    num: 14.5,
    species: "Fluxtape-Radio",
    types: ["Fire", "Poison"],
    gender: "N",
    baseStats: { hp: 80, atk: 99, def: 130, spa: 95, spd: 80, spe: 116 },
    abilities: { 0: "Trash Beat" },
    heightm: 1,
    weightkg: 5,
    otherFormes: ["Fluxtape", "Fluxtape-Stereo"],
    eggGroups: ["Undiscovered"]
  },
  fluxtapestereo: {
    num: 14.5,
    species: "Fluxtape-Stereo",
    types: ["Fire", "Electric"],
    gender: "N",
    baseStats: { hp: 110, atk: 119, def: 100, spa: 105, spd: 80, spe: 86 },
    abilities: { 0: "Drop Heat" },
    heightm: 1,
    weightkg: 5,
    otherFormes: ["Fluxtape-Radio", "Fluxtape"],
    eggGroups: ["Undiscovered"]
  },
  gorilax: {
    num: 17.5,
    species: "Gorilax",
    types: ["Dark", "Fairy"],
    gender: "N",
    baseStats: { hp: 116, atk: 61, def: 91, spa: 93, spd: 117, spe: 122 },
    abilities: { 0: "Mental Note" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  grievenge: {
    num: 18.5,
    species: "Grievenge",
    types: ["Dark"],
    gender: "N",
    baseStats: { hp: 57, atk: 93, def: 57, spa: 57, spd: 57, spe: 136 },
    abilities: { 0: "Deaths Call" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  hyperoach: {
    num: 19.5,
    species: "Hyperoach",
    types: ["Bug", "Dark"],
    gender: "N",
    baseStats: { hp: 68, atk: 119, def: 41, spa: 107, spd: 89, spe: 111 },
    abilities: { 0: "Hype Overload" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  impsaustor: {
    num: 999.5,
    species: "Impsaustor",
    types: ["Dark", "Poison"],
    gender: "N",
    baseStats: { hp: 100, atk: 120, def: 80, spa: 80, spd: 120, spe: 100 },
    // i'm so freaking tired i did this to be funny lmao
    abilities: { 0: "Vent" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  lemotic: {
    num: 20.5,
    species: "Lemotic",
    types: ["Grass", "Ground"],
    gender: "N",
    baseStats: { hp: 100, atk: 127, def: 68, spa: 96, spd: 82, spe: 71 },
    abilities: { 0: "Bootleg Regen" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  lumineel: {
    num: 21.5,
    species: "Lumineel",
    types: ["Water", "Electric"],
    gender: "N",
    baseStats: { hp: 90, atk: 115, def: 100, spa: 90, spd: 70, spe: 55 },
    abilities: { 0: "Intimidate" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  modolith: {
    num: 22.5,
    species: "Modolith",
    types: ["Steel", "Dragon"],
    gender: "N",
    baseStats: { hp: 62, atk: 118, def: 89, spa: 109, spd: 91, spe: 61 },
    abilities: { 0: "Raging Beast" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  monstratus: {
    num: 23.5,
    species: "Monstratus",
    types: ["Electric", "Flying"],
    gender: "N",
    baseStats: { hp: 76, atk: 57, def: 52, spa: 95, spd: 81, spe: 99 },
    abilities: { 0: "Drizzle" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  mortemoth: {
    num: 24.5,
    species: "Mortemoth",
    types: ["Bug", "Flying"],
    gender: "N",
    baseStats: { hp: 70, atk: 43, def: 43, spa: 130, spd: 120, spe: 123 },
    abilities: { 0: "Deteriorate" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  pokat: {
    num: 25.5,
    species: "Pokat",
    types: ["Grass"],
    gender: "N",
    baseStats: { hp: 80, atk: 55, def: 75, spa: 85, spd: 120, spe: 87 },
    abilities: { 0: "Flash Fire" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  spirox: {
    num: 26.5,
    species: "Spirox",
    types: ["Dark", "Steel"],
    gender: "N",
    baseStats: { hp: 60, atk: 90, def: 130, spa: 90, spd: 130, spe: 100 },
    abilities: { 0: "Power of Two" },
    heightm: 1,
    weightkg: 5,
    otherFormes: ["Spirox-Ancient", "Spirox-Ripped"],
    eggGroups: ["Undiscovered"]
  },
  spiroxancient: {
    num: 26.5,
    species: "Spirox-Ancient",
    types: ["Dark", "Grass"],
    gender: "N",
    baseStats: { hp: 60, atk: 100, def: 110, spa: 100, spd: 110, spe: 120 },
    abilities: { 0: "Lost Memory" },
    heightm: 1,
    weightkg: 5,
    otherFormes: ["Spirox", "Spirox-Ripped"],
    eggGroups: ["Undiscovered"]
  },
  spiroxripped: {
    num: 26.5,
    species: "Spirox-Ripped",
    types: ["Dark"],
    gender: "N",
    baseStats: { hp: 60, atk: 120, def: 100, spa: 130, spd: 100, spe: 90 },
    abilities: { 0: "Tough Out" },
    heightm: 1,
    weightkg: 5,
    otherFormes: ["Spirox-Ancient", "Spirox"],
    eggGroups: ["Undiscovered"]
  },
  treemu: {
    num: 29.5,
    species: "Treemu",
    types: ["Grass", "Flying"],
    gender: "N",
    baseStats: { hp: 77, atk: 110, def: 77, spa: 54, spd: 136, spe: 34 },
    abilities: { 0: "Bird Up" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  valianch: {
    num: 30.5,
    species: "Valianch",
    types: ["Grass"],
    gender: "N",
    baseStats: { hp: 110, atk: 130, def: 70, spa: 60, spd: 70, spe: 80 },
    abilities: { 0: "Patience" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  spisces: {
    num: 31.5,
    species: "Spisces",
    types: ["Water", "Fire"],
    gender: "N",
    baseStats: { hp: 74, atk: 74, def: 74, spa: 121, spd: 74, spe: 117 },
    abilities: { 0: "Shed Skin" },
    weightkg: 5
  },
  crazefly: {
    num: 32.5,
    species: "Crazefly",
    types: ["Bug"],
    gender: "N",
    baseStats: { hp: 99, atk: 79, def: 85, spa: 86, spd: 101, spe: 54 },
    abilities: { 0: "Gooey" },
    weightkg: 5
  },
  pterrost: {
    num: 33.5,
    species: "Pterrost",
    types: ["Dragon"],
    gender: "N",
    baseStats: { hp: 70, atk: 60, def: 95, spa: 120, spd: 60, spe: 110 },
    abilities: { 0: "Adaptation" },
    weightkg: 5
  },
  jewelode: {
    num: 34.5,
    species: "Jewelode",
    types: ["Ground", "Fairy"],
    gender: "N",
    baseStats: { hp: 80, atk: 61, def: 80, spa: 101, spd: 80, spe: 101 },
    abilities: { 0: "Neutralizing Gas" },
    weightkg: 5
  },
  jellyolk: {
    num: 35.5,
    species: "Jellyolk",
    types: ["Poison"],
    gender: "N",
    baseStats: { hp: 71, atk: 67, def: 67, spa: 105, spd: 71, spe: 61 },
    abilities: { 0: "Magic Guard" },
    weightkg: 5
  },
  fairydisc: {
    num: 36.5,
    species: "Fairydisc",
    types: ["Fairy", "Steel"],
    gender: "N",
    baseStats: { hp: 200, atk: 100, def: 125, spa: 100, spd: 125, spe: 50 },
    abilities: { 0: "Prankster" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  badgearth: {
    num: 101.5,
    species: "Badgearth",
    types: ["Steel", "Ground"],
    gender: "N",
    baseStats: { hp: 58, atk: 109, def: 112, spa: 48, spd: 48, spe: 109 },
    abilities: { 0: "Regenerator" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  shroominesce: {
    num: 102.5,
    species: "Shroominesce",
    types: ["Electric", "Grass"],
    gender: "N",
    baseStats: { hp: 60, atk: 60, def: 60, spa: 110, spd: 110, spe: 95 },
    abilities: { 0: "Analytic" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  fleetle: {
    num: 103.5,
    species: "Fleetle",
    types: ["Steel", "Flying"],
    gender: "N",
    baseStats: { hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85 },
    abilities: { 0: "Queen of Roulette" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  sharmpedo: {
    num: 104.5,
    species: "Sharmpedo",
    types: ["Water", "Dragon"],
    gender: "N",
    baseStats: { hp: 70, atk: 110, def: 70, spa: 90, spd: 65, spe: 105 },
    abilities: { 0: "Stakeout" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  },
  steroach: {
    num: 105.5,
    species: "Steroach",
    types: ["Bug", "Poison"],
    gender: "N",
    baseStats: { hp: 98, atk: 119, def: 111, spa: 47, spd: 89, spe: 71 },
    abilities: { 0: "Guts" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  }
};
//# sourceMappingURL=pokedex.js.map
