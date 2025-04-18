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
  flamester: {
    num: 1.1,
    name: "Flamester",
    types: ["Fire"],
    baseStats: { hp: 105, atk: 139, def: 74, spa: 38, spd: 118, spe: 126 },
    abilities: { 0: "Surge Surfer", H: "Shield Dust" },
    height: 5,
    weightkg: 5
  },
  allinyte: {
    num: 2.1,
    name: "Allinyte",
    types: ["Ghost", "Rock"],
    baseStats: { hp: 135, atk: 30, def: 146, spa: 92, spd: 141, spe: 56 },
    abilities: { 0: "Mummy", 1: "Air Lock", H: "Flower Veil" },
    height: 5,
    weightkg: 5
  },
  komodung: {
    num: 3.1,
    name: "Komodung",
    types: ["Water", "Dragon"],
    baseStats: { hp: 41, atk: 163, def: 114, spa: 124, spd: 73, spe: 85 },
    abilities: { 0: "Prankster", H: "Natural Cure" },
    height: 17,
    weightkg: 17
  },
  elemadillo: {
    num: 4.1,
    name: "Elemadillo",
    types: ["Electric", "Ghost"],
    baseStats: { hp: 59, atk: 99, def: 140, spa: 54, spd: 91, spe: 157 },
    abilities: { 0: "Overgrow", 1: "Parental Bond", H: "Thermal Exchange" },
    height: 17,
    weightkg: 17
  },
  cateloon: {
    num: 5.1,
    name: "Cateloon",
    types: ["Bug", "Grass"],
    baseStats: { hp: 139, atk: 114, def: 153, spa: 62, spd: 41, spe: 91 },
    abilities: { 0: "Mimicry", 1: "Rocky Payload", H: "Healer" },
    height: 150,
    weightkg: 150
  },
  bonedos: {
    num: 6.1,
    name: "Bonedos",
    types: ["Bug", "Ground"],
    baseStats: { hp: 93, atk: 139, def: 84, spa: 98, spd: 76, spe: 110 },
    abilities: { 0: "Regenerator", 1: "Triage", H: "Keen Eye" },
    height: 5,
    weightkg: 5
  },
  marshsaur: {
    num: 7.1,
    name: "Marshsaur",
    types: ["Grass"],
    baseStats: { hp: 83, atk: 94, def: 135, spa: 136, spd: 107, spe: 45 },
    abilities: { 0: "Psychic Surge", 1: "Electromorphosis", H: "Sheer Force" },
    height: 75,
    weightkg: 75
  },
  lumimorph: {
    num: 8.1,
    name: "Lumimorph",
    types: ["Psychic"],
    baseStats: { hp: 38, atk: 118, def: 143, spa: 140, spd: 127, spe: 34 },
    abilities: { 0: "Drizzle", 1: "Motor Drive", H: "Liquid Voice" },
    height: 5,
    weightkg: 5
  },
  koalpuff: {
    num: 9.1,
    name: "Koalpuff",
    types: ["Normal"],
    baseStats: { hp: 161, atk: 88, def: 26, spa: 59, spd: 100, spe: 166 },
    abilities: { 0: "Healer", 1: "Neutralizing Gas", H: "Cursed Body" },
    height: 300,
    weightkg: 300
  },
  spidmaton: {
    num: 10.1,
    name: "Spidmaton",
    types: ["Steel", "Poison"],
    baseStats: { hp: 111, atk: 160, def: 31, spa: 110, spd: 38, spe: 150 },
    abilities: { 0: "Rain Dish", 1: "Wandering Spirit", H: "Berserk" },
    height: 75,
    weightkg: 75
  },
  eleitan: {
    num: 11.1,
    name: "Eleitan",
    types: ["Fighting", "Electric"],
    baseStats: { hp: 111, atk: 90, def: 61, spa: 132, spd: 127, spe: 79 },
    abilities: { 0: "Slow Start", 1: "Soundproof", H: "Clear Body" },
    height: 17,
    weightkg: 17
  },
  crolegion: {
    num: 12.1,
    name: "Crolegion",
    types: ["Dark"],
    baseStats: { hp: 103, atk: 141, def: 103, spa: 88, spd: 71, spe: 94 },
    abilities: { 0: "Prankster", 1: "Justified", H: "Sand Force" },
    height: 5,
    weightkg: 5
  },
  hunttar: {
    num: 13.1,
    name: "Hunttar",
    types: ["Dragon"],
    baseStats: { hp: 49, atk: 83, def: 118, spa: 81, spd: 182, spe: 87 },
    abilities: { 0: "Orichalcum Pulse", 1: "Liquid Ooze", H: "Flower Veil" },
    height: 300,
    weightkg: 300
  },
  vibraash: {
    num: 14.1,
    name: "Vibraash",
    types: ["Fire", "Ground"],
    baseStats: { hp: 79, atk: 87, def: 33, spa: 116, spd: 131, spe: 154 },
    abilities: { 0: "Tablets of Ruin", 1: "Magma Armor", H: "Mimicry" },
    height: 5,
    weightkg: 5
  },
  spritpit: {
    num: 15.1,
    name: "Spritpit",
    types: ["Flying", "Fairy"],
    baseStats: { hp: 168, atk: 128, def: 56, spa: 130, spd: 53, spe: 65 },
    abilities: { 0: "Suction Cups", H: "Justified" },
    height: 300,
    weightkg: 300
  },
  vaporwave: {
    num: 16.1,
    name: "Vaporwave",
    types: ["Water"],
    baseStats: { hp: 161, atk: 86, def: 30, spa: 113, spd: 81, spe: 129 },
    abilities: { 0: "Screen Cleaner", H: "Harvest" },
    height: 5,
    weightkg: 5
  },
  radimite: {
    num: 17.1,
    name: "Radimite",
    types: ["Poison", "Steel"],
    baseStats: { hp: 116, atk: 73, def: 135, spa: 100, spd: 74, spe: 102 },
    abilities: { 0: "Dark Aura", H: "Water Bubble" },
    height: 17,
    weightkg: 17
  },
  slowghast: {
    num: 18.1,
    name: "Slowghast",
    types: ["Dark", "Ghost"],
    baseStats: { hp: 90, atk: 93, def: 143, spa: 100, spd: 75, spe: 99 },
    abilities: { 0: "Opportunist", H: "Aerilate" },
    height: 75,
    weightkg: 75
  },
  coyotail: {
    num: 19.1,
    name: "Coyotail",
    types: ["Dark"],
    baseStats: { hp: 61, atk: 115, def: 77, spa: 55, spd: 135, spe: 157 },
    abilities: { 0: "Corrosion", H: "Magnet Pull" },
    height: 17,
    weightkg: 17
  },
  radiore: {
    num: 20.1,
    name: "Radiore",
    types: ["Rock", "Bug"],
    baseStats: { hp: 176, atk: 39, def: 51, spa: 97, spd: 64, spe: 173 },
    abilities: { 0: "Stall", 1: "Weak Armor", H: "Wonder Skin" },
    height: 5,
    weightkg: 5
  },
  flazam: {
    num: 21.1,
    name: "Flazam",
    types: ["Fire", "Rock"],
    baseStats: { hp: 66, atk: 121, def: 117, spa: 116, spd: 78, spe: 102 },
    abilities: { 0: "Damp", 1: "Wonder Skin", H: "Super Luck" },
    height: 75,
    weightkg: 75
  },
  giranium: {
    num: 22.1,
    name: "Giranium",
    types: ["Steel", "Rock"],
    baseStats: { hp: 66, atk: 40, def: 146, spa: 161, spd: 148, spe: 39 },
    abilities: { 0: "Minus", H: "Filter" },
    height: 75,
    weightkg: 75
  },
  bellena: {
    num: 23.1,
    name: "Bellena",
    types: ["Fairy", "Dragon"],
    baseStats: { hp: 96, atk: 147, def: 101, spa: 90, spd: 112, spe: 54 },
    abilities: { 0: "Dark Aura", 1: "Weak Armor", H: "Overcoat" },
    height: 5,
    weightkg: 5
  },
  fierutor: {
    num: 24.1,
    name: "Fierutor",
    types: ["Fire", "Flying"],
    baseStats: { hp: 119, atk: 139, def: 142, spa: 113, spd: 49, spe: 38 },
    abilities: { 0: "Liquid Voice", 1: "Poison Heal", H: "Protean" },
    height: 5,
    weightkg: 5
  },
  pengite: {
    num: 25.1,
    name: "Pengite",
    types: ["Ice"],
    baseStats: { hp: 112, atk: 139, def: 80, spa: 63, spd: 144, spe: 62 },
    abilities: { 0: "Telepathy", 1: "Snow Warning", H: "Tinted Lens" },
    height: 300,
    weightkg: 300
  },
  stunecko: {
    num: 26.1,
    name: "Stunecko",
    types: ["Electric", "Poison"],
    baseStats: { hp: 105, atk: 70, def: 116, spa: 119, spd: 109, spe: 81 },
    abilities: { 0: "Flash Fire", H: "Turboblaze" },
    height: 300,
    weightkg: 300
  },
  dinoolotl: {
    num: 27.1,
    name: "Dinoolotl",
    types: ["Dragon", "Electric"],
    baseStats: { hp: 43, atk: 91, def: 123, spa: 105, spd: 168, spe: 70 },
    abilities: { 0: "Soundproof", 1: "Soul-Heart", H: "Mold Breaker" },
    height: 75,
    weightkg: 75
  },
  teleyle: {
    num: 28.1,
    name: "Teleyle",
    types: ["Steel"],
    baseStats: { hp: 104, atk: 116, def: 78, spa: 112, spd: 97, spe: 93 },
    abilities: { 0: "Stench", H: "Parental Bond" },
    height: 5,
    weightkg: 5
  },
  gastroal: {
    num: 29.1,
    name: "Gastroal",
    types: ["Fighting", "Bug"],
    baseStats: { hp: 144, atk: 73, def: 116, spa: 66, spd: 93, spe: 108 },
    abilities: { 0: "Rocky Payload", 1: "Soundproof", H: "Lingering Aroma" },
    height: 75,
    weightkg: 75
  },
  rhinoshroom: {
    num: 30.1,
    name: "Rhinoshroom",
    types: ["Grass", "Poison"],
    baseStats: { hp: 52, atk: 125, def: 85, spa: 104, spd: 138, spe: 96 },
    abilities: { 0: "Teravolt", 1: "Earth Eater", H: "Emergency Exit" },
    height: 17,
    weightkg: 17
  },
  chillsphere: {
    num: 31.1,
    name: "Chillsphere",
    types: ["Ice", "Electric"],
    baseStats: { hp: 183, atk: 44, def: 54, spa: 127, spd: 106, spe: 86 },
    abilities: { 0: "Unburden", 1: "Trace", H: "Hydration" },
    height: 75,
    weightkg: 75
  },
  jagly: {
    num: 32.1,
    name: "Jagly",
    types: ["Steel"],
    baseStats: { hp: 74, atk: 24, def: 159, spa: 129, spd: 98, spe: 116 },
    abilities: { 0: "Defiant", H: "Stalwart" },
    height: 300,
    weightkg: 300
  },
  dinostone: {
    num: 33.1,
    name: "Dinostone",
    types: ["Rock", "Ghost"],
    baseStats: { hp: 120, atk: 107, def: 77, spa: 158, spd: 66, spe: 72 },
    abilities: { 0: "Plus", H: "Early Bird" },
    height: 5,
    weightkg: 5
  },
  goosceon: {
    num: 34.1,
    name: "Goosceon",
    types: ["Flying", "Ghost"],
    baseStats: { hp: 85, atk: 87, def: 72, spa: 52, spd: 140, spe: 164 },
    abilities: { 0: "Solid Rock", 1: "Soundproof", H: "As One G" },
    height: 17,
    weightkg: 17
  },
  baeye: {
    num: 35.1,
    name: "Baeye",
    types: ["Rock", "Psychic"],
    baseStats: { hp: 71, atk: 35, def: 136, spa: 165, spd: 111, spe: 82 },
    abilities: { 0: "Misty Surge", H: "As One S" },
    height: 75,
    weightkg: 75
  },
  protola: {
    num: 36.1,
    name: "Protola",
    types: ["Rock"],
    baseStats: { hp: 99, atk: 26, def: 117, spa: 107, spd: 108, spe: 143 },
    abilities: { 0: "Multiscale", 1: "Wind Power", H: "Magnet Pull" },
    height: 150,
    weightkg: 150
  },
  meowivet: {
    num: 37.1,
    name: "Meowivet",
    types: ["Psychic", "Steel"],
    baseStats: { hp: 52, atk: 143, def: 117, spa: 101, spd: 118, spe: 69 },
    abilities: { 0: "Lingering Aroma", 1: "Cursed Body", H: "Guard Dog" },
    height: 75,
    weightkg: 75
  },
  zephyrelp: {
    num: 38.1,
    name: "Zephyrelp",
    types: ["Fairy", "Flying"],
    baseStats: { hp: 116, atk: 56, def: 98, spa: 63, spd: 99, spe: 168 },
    abilities: { 0: "Stakeout", 1: "Libero", H: "Filter" },
    height: 150,
    weightkg: 150
  },
  rosemire: {
    num: 39.1,
    name: "Rosemire",
    types: ["Grass", "Electric"],
    baseStats: { hp: 126, atk: 96, def: 73, spa: 80, spd: 86, spe: 139 },
    abilities: { 0: "Opportunist", H: "Early Bird" },
    height: 75,
    weightkg: 75
  },
  lumionite: {
    num: 40.1,
    name: "Lumionite",
    types: ["Normal", "Fighting"],
    baseStats: { hp: 102, atk: 107, def: 88, spa: 91, spd: 84, spe: 128 },
    abilities: { 0: "Sniper", H: "Toxic Debris" },
    height: 150,
    weightkg: 150
  },
  cloudsite: {
    num: 41.1,
    name: "Cloudsite",
    types: ["Flying"],
    baseStats: { hp: 99, atk: 120, def: 113, spa: 57, spd: 91, spe: 120 },
    abilities: { 0: "Sturdy", 1: "Drought", H: "Well-Baked Body" },
    height: 5,
    weightkg: 5
  },
  barraerpillar: {
    num: 42.1,
    name: "Barraerpillar",
    types: ["Ghost", "Bug"],
    baseStats: { hp: 122, atk: 135, def: 106, spa: 140, spd: 75, spe: 22 },
    abilities: { 0: "Electromorphosis", H: "Berserk" },
    height: 17,
    weightkg: 17
  },
  termitan: {
    num: 43.1,
    name: "Termitan",
    types: ["Ground", "Electric"],
    baseStats: { hp: 99, atk: 120, def: 118, spa: 120, spd: 88, spe: 55 },
    abilities: { 0: "Surge Surfer", 1: "Cotton Down", H: "Tinted Lens" },
    height: 5,
    weightkg: 5
  },
  dragophy: {
    num: 44.1,
    name: "Dragophy",
    types: ["Dragon", "Fighting"],
    baseStats: { hp: 62, atk: 90, def: 157, spa: 95, spd: 61, spe: 135 },
    abilities: { 0: "Suction Cups", 1: "Desolate Land", H: "Sap Sipper" },
    height: 150,
    weightkg: 150
  },
  venoapi: {
    num: 45.1,
    name: "Venoapi",
    types: ["Poison", "Fairy"],
    baseStats: { hp: 31, atk: 28, def: 121, spa: 129, spd: 149, spe: 142 },
    abilities: { 0: "Battery", 1: "Cloud Nine", H: "Anger Point" },
    height: 75,
    weightkg: 75
  },
  anteigo: {
    num: 46.1,
    name: "Anteigo",
    types: ["Bug"],
    baseStats: { hp: 95, atk: 63, def: 75, spa: 148, spd: 150, spe: 69 },
    abilities: { 0: "Misty Surge", H: "Soul-Heart" },
    height: 17,
    weightkg: 17
  },
  melthog: {
    num: 47.1,
    name: "Melthog",
    types: ["Ground", "Fire"],
    baseStats: { hp: 82, atk: 126, def: 115, spa: 98, spd: 152, spe: 27 },
    abilities: { 0: "Sand Force", 1: "Aroma Veil", H: "Queenly Majesty" },
    height: 300,
    weightkg: 300
  },
  celenium: {
    num: 48.1,
    name: "Celenium",
    types: ["Psychic"],
    baseStats: { hp: 93, atk: 131, def: 50, spa: 124, spd: 104, spe: 98 },
    abilities: { 0: "Illuminate", 1: "Shed Skin", H: "Oblivious" },
    height: 17,
    weightkg: 17
  },
  gladossal: {
    num: 49.1,
    name: "Gladossal",
    types: ["Rock", "Dark"],
    baseStats: { hp: 148, atk: 128, def: 145, spa: 59, spd: 19, spe: 101 },
    abilities: { 0: "Lingering Aroma", H: "Hydration" },
    height: 17,
    weightkg: 17
  },
  solakin: {
    num: 50.1,
    name: "Solakin",
    types: ["Normal"],
    baseStats: { hp: 74, atk: 120, def: 135, spa: 67, spd: 120, spe: 84 },
    abilities: { 0: "Hydration", 1: "Swift Swim", H: "Steely Spirit" },
    height: 75,
    weightkg: 75
  },
  barracoth: {
    num: 51.1,
    name: "Barracoth",
    types: ["Water", "Ice"],
    baseStats: { hp: 75, atk: 85, def: 146, spa: 70, spd: 139, spe: 85 },
    abilities: { 0: "Shadow Shield", H: "Thick Fat" },
    height: 300,
    weightkg: 300
  },
  herbigator: {
    num: 52.1,
    name: "Herbigator",
    types: ["Grass", "Water"],
    baseStats: { hp: 42, atk: 159, def: 131, spa: 92, spd: 101, spe: 75 },
    abilities: { 0: "Suction Cups", 1: "Shell Armor", H: "Harvest" },
    height: 75,
    weightkg: 75
  },
  falcola: {
    num: 53.1,
    name: "Falcola",
    types: ["Water"],
    baseStats: { hp: 116, atk: 52, def: 92, spa: 114, spd: 119, spe: 107 },
    abilities: { 0: "Propeller Tail", 1: "Flower Veil", H: "Overgrow" },
    height: 150,
    weightkg: 150
  },
  demabura: {
    num: 54.1,
    name: "Demabura",
    types: ["Dark"],
    baseStats: { hp: 132, atk: 119, def: 36, spa: 137, spd: 113, spe: 63 },
    abilities: { 0: "Delta Stream", H: "Desolate Land" },
    height: 17,
    weightkg: 17
  },
  albatrygon: {
    num: 55.1,
    name: "Albatrygon",
    types: ["Flying"],
    baseStats: { hp: 61, atk: 121, def: 57, spa: 100, spd: 110, spe: 151 },
    abilities: { 0: "Chlorophyll", H: "Iron Barbs" },
    height: 300,
    weightkg: 300
  },
  darkarrot: {
    num: 56.1,
    name: "Darkarrot",
    types: ["Grass", "Normal"],
    baseStats: { hp: 88, atk: 90, def: 167, spa: 121, spd: 48, spe: 86 },
    abilities: { 0: "Beast Boost", 1: "Compound Eyes", H: "Slush Rush" },
    height: 75,
    weightkg: 75
  },
  irotile: {
    num: 57.1,
    name: "Irotile",
    types: ["Psychic", "Steel"],
    baseStats: { hp: 87, atk: 65, def: 154, spa: 127, spd: 137, spe: 30 },
    abilities: { 0: "Magma Armor", H: "Tablets of Ruin" },
    height: 300,
    weightkg: 300
  },
  drageon: {
    num: 58.1,
    name: "Drageon",
    types: ["Dragon"],
    baseStats: { hp: 105, atk: 75, def: 116, spa: 66, spd: 135, spe: 103 },
    abilities: { 0: "Rivalry", 1: "Damp", H: "Truant" },
    height: 5,
    weightkg: 5
  },
  earthibou: {
    num: 59.1,
    name: "Earthibou",
    types: ["Ground"],
    baseStats: { hp: 49, atk: 144, def: 69, spa: 110, spd: 109, spe: 119 },
    abilities: { 0: "Flare Boost", 1: "Bad Dreams", H: "Innards Out" },
    height: 5,
    weightkg: 5
  },
  goldoth: {
    num: 60.1,
    name: "Goldoth",
    types: ["Rock", "Psychic"],
    baseStats: { hp: 38, atk: 92, def: 125, spa: 88, spd: 134, spe: 123 },
    abilities: { 0: "Inner Focus", 1: "Tangling Hair", H: "Skill Link" },
    height: 5,
    weightkg: 5
  },
  charrilla: {
    num: 61.1,
    name: "Charrilla",
    types: ["Flying", "Fire"],
    baseStats: { hp: 118, atk: 70, def: 149, spa: 68, spd: 84, spe: 111 },
    abilities: { 0: "Dazzling", 1: "Tablets of Ruin", H: "Parental Bond" },
    height: 17,
    weightkg: 17
  },
  volcaninja: {
    num: 62.1,
    name: "Volcaninja",
    types: ["Dark", "Fire"],
    baseStats: { hp: 31, atk: 83, def: 125, spa: 139, spd: 139, spe: 83 },
    abilities: { 0: "Guts", 1: "Gorilla Tactics", H: "Comatose" },
    height: 300,
    weightkg: 300
  },
  flamiswift: {
    num: 63.1,
    name: "Flamiswift",
    types: ["Ice", "Flying"],
    baseStats: { hp: 151, atk: 60, def: 103, spa: 148, spd: 76, spe: 62 },
    abilities: { 0: "Sand Spit", 1: "Cute Charm", H: "Tough Claws" },
    height: 17,
    weightkg: 17
  },
  chilltile: {
    num: 64.1,
    name: "Chilltile",
    types: ["Poison", "Ice"],
    baseStats: { hp: 127, atk: 152, def: 16, spa: 120, spd: 158, spe: 27 },
    abilities: { 0: "Sand Veil", H: "Gorilla Tactics" },
    height: 75,
    weightkg: 75
  },
  metathorn: {
    num: 65.1,
    name: "Metathorn",
    types: ["Ghost", "Grass"],
    baseStats: { hp: 147, atk: 13, def: 117, spa: 54, spd: 127, spe: 142 },
    abilities: { 0: "Stalwart", H: "Thick Fat" },
    height: 5,
    weightkg: 5
  },
  wizpole: {
    num: 66.1,
    name: "Wizpole",
    types: ["Psychic", "Ground"],
    baseStats: { hp: 40, atk: 181, def: 48, spa: 66, spd: 101, spe: 164 },
    abilities: { 0: "Guts", H: "Illusion" },
    height: 5,
    weightkg: 5
  },
  termtera: {
    num: 67.1,
    name: "Termtera",
    types: ["Ground"],
    baseStats: { hp: 69, atk: 139, def: 69, spa: 153, spd: 130, spe: 40 },
    abilities: { 0: "Anticipation", H: "Beads of Ruin" },
    height: 5,
    weightkg: 5
  },
  goldkin: {
    num: 68.1,
    name: "Goldkin",
    types: ["Steel"],
    baseStats: { hp: 132, atk: 112, def: 63, spa: 114, spd: 124, spe: 55 },
    abilities: { 0: "Pastel Veil", 1: "Quark Drive", H: "Thermal Exchange" },
    height: 75,
    weightkg: 75
  },
  mantaruff: {
    num: 69.1,
    name: "Mantaruff",
    types: ["Water", "Normal"],
    baseStats: { hp: 63, atk: 49, def: 122, spa: 115, spd: 98, spe: 153 },
    abilities: { 0: "Immunity", 1: "Fluffy", H: "Pickup" },
    height: 75,
    weightkg: 75
  },
  gastrotail: {
    num: 70.1,
    name: "Gastrotail",
    types: ["Bug"],
    baseStats: { hp: 97, atk: 176, def: 77, spa: 123, spd: 54, spe: 73 },
    abilities: { 0: "Tough Claws", 1: "Friend Guard", H: "Thick Fat" },
    height: 300,
    weightkg: 300
  },
  gnomey: {
    num: 71.1,
    name: "Gnomey",
    types: ["Normal", "Fairy"],
    baseStats: { hp: 53, atk: 97, def: 138, spa: 74, spd: 77, spe: 161 },
    abilities: { 0: "Torrent", H: "White Smoke" },
    height: 150,
    weightkg: 150
  },
  polleoss: {
    num: 72.1,
    name: "Polleoss",
    types: ["Grass"],
    baseStats: { hp: 96, atk: 79, def: 71, spa: 178, spd: 131, spe: 45 },
    abilities: { 0: "Poison Heal", 1: "Unaware", H: "Merciless" },
    height: 150,
    weightkg: 150
  },
  blastoda: {
    num: 73.1,
    name: "Blastoda",
    types: ["Ice", "Fire"],
    baseStats: { hp: 61, atk: 107, def: 99, spa: 115, spd: 115, spe: 103 },
    abilities: { 0: "Rivalry", 1: "White Smoke", H: "Mimicry" },
    height: 75,
    weightkg: 75
  },
  shasect: {
    num: 74.1,
    name: "Shasect",
    types: ["Ghost", "Bug"],
    baseStats: { hp: 111, atk: 3, def: 129, spa: 131, spd: 93, spe: 133 },
    abilities: { 0: "Natural Cure", 1: "Propeller Tail", H: "Sand Stream" },
    height: 150,
    weightkg: 150
  },
  mudelf: {
    num: 75.1,
    name: "Mudelf",
    types: ["Ground", "Dark"],
    baseStats: { hp: 91, atk: 30, def: 128, spa: 147, spd: 64, spe: 140 },
    abilities: { 0: "Honey Gather", 1: "Friend Guard", H: "Gooey" },
    height: 75,
    weightkg: 75
  },
  swapuff: {
    num: 76.1,
    name: "Swapuff",
    types: ["Flying"],
    baseStats: { hp: 141, atk: 143, def: 150, spa: 84, spd: 50, spe: 32 },
    abilities: { 0: "Limber", 1: "Orichalcum Pulse", H: "Cursed Body" },
    height: 300,
    weightkg: 300
  },
  bigong: {
    num: 77.1,
    name: "Bigong",
    types: ["Ice"],
    baseStats: { hp: 121, atk: 71, def: 154, spa: 84, spd: 112, spe: 58 },
    abilities: { 0: "Rivalry", H: "Illusion" },
    height: 75,
    weightkg: 75
  },
  landnub: {
    num: 78.1,
    name: "Landnub",
    types: ["Ground"],
    baseStats: { hp: 124, atk: 129, def: 98, spa: 77, spd: 110, spe: 62 },
    abilities: { 0: "Lingering Aroma", 1: "Good as Gold", H: "Hustle" },
    height: 75,
    weightkg: 75
  },
  geneking: {
    num: 79.1,
    name: "Geneking",
    types: ["Psychic", "Fairy"],
    baseStats: { hp: 195, atk: 93, def: 70, spa: 68, spd: 79, spe: 95 },
    abilities: { 0: "Stakeout", 1: "Triage", H: "Oblivious" },
    height: 75,
    weightkg: 75
  },
  draunker: {
    num: 80.1,
    name: "Draunker",
    types: ["Dragon", "Poison"],
    baseStats: { hp: 95, atk: 137, def: 79, spa: 70, spd: 98, spe: 121 },
    abilities: { 0: "Water Absorb", H: "Sweet Veil" },
    height: 300,
    weightkg: 300
  },
  solaroo: {
    num: 81.1,
    name: "Solaroo",
    types: ["Fairy", "Fire"],
    baseStats: { hp: 143, atk: 114, def: 40, spa: 43, spd: 169, spe: 91 },
    abilities: { 0: "Gooey", 1: "Multiscale", H: "As One Glastrier" },
    height: 300,
    weightkg: 300
  },
  chimeseed: {
    num: 82.1,
    name: "Chimeseed",
    types: ["Grass", "Dark"],
    baseStats: { hp: 101, atk: 53, def: 119, spa: 109, spd: 84, spe: 134 },
    abilities: { 0: "Sand Force", H: "Surge Surfer" },
    height: 150,
    weightkg: 150
  },
  venompir: {
    num: 83.1,
    name: "Venompir",
    types: ["Poison", "Dark"],
    baseStats: { hp: 157, atk: 50, def: 139, spa: 64, spd: 73, spe: 117 },
    abilities: { 0: "Wonder Skin", 1: "Hustle", H: "Aroma Veil" },
    height: 300,
    weightkg: 300
  },
  quickigator: {
    num: 84.1,
    name: "Quickigator",
    types: ["Ghost", "Water"],
    baseStats: { hp: 86, atk: 15, def: 116, spa: 70, spd: 156, spe: 157 },
    abilities: { 0: "Grim Neigh", 1: "Orichalcum Pulse", H: "Innards Out" },
    height: 300,
    weightkg: 300
  },
  rosedox: {
    num: 85.1,
    name: "Rosedox",
    types: ["Grass"],
    baseStats: { hp: 75, atk: 133, def: 163, spa: 58, spd: 63, spe: 108 },
    abilities: { 0: "Trace", H: "Pickup" },
    height: 300,
    weightkg: 300
  },
  vigilcanth: {
    num: 86.1,
    name: "Vigilcanth",
    types: ["Fighting", "Steel"],
    baseStats: { hp: 57, atk: 90, def: 108, spa: 136, spd: 106, spe: 103 },
    abilities: { 0: "Fairy Aura", 1: "Frisk", H: "Mimicry" },
    height: 150,
    weightkg: 150
  },
  virtutric: {
    num: 87.1,
    name: "Virtutric",
    types: ["Steel", "Electric"],
    baseStats: { hp: 165, atk: 167, def: 62, spa: 42, spd: 101, spe: 63 },
    abilities: { 0: "Ice Body", 1: "Steelworker", H: "Simple" },
    height: 75,
    weightkg: 75
  },
  gnomleaf: {
    num: 88.1,
    name: "Gnomleaf",
    types: ["Normal", "Grass"],
    baseStats: { hp: 80, atk: 89, def: 96, spa: 72, spd: 110, spe: 153 },
    abilities: { 0: "Refrigerate", H: "Hydration" },
    height: 75,
    weightkg: 75
  },
  flamianha: {
    num: 89.1,
    name: "Flamianha",
    types: ["Water", "Flying"],
    baseStats: { hp: 150, atk: 51, def: 53, spa: 42, spd: 156, spe: 148 },
    abilities: { 0: "Iron Barbs", 1: "Tangling Hair", H: "Damp" },
    height: 5,
    weightkg: 5
  },
  eleluster: {
    num: 90.1,
    name: "Eleluster",
    types: ["Electric", "Flying"],
    baseStats: { hp: 79, atk: 103, def: 83, spa: 79, spd: 122, spe: 134 },
    abilities: { 0: "Cheek Pouch", 1: "Sharpness", H: "Clear Body" },
    height: 150,
    weightkg: 150
  },
  jellyale: {
    num: 91.1,
    name: "Jellyale",
    types: ["Water", "Dark"],
    baseStats: { hp: 21, atk: 76, def: 105, spa: 131, spd: 125, spe: 142 },
    abilities: { 0: "Flash Fire", 1: "Flame Body", H: "Innards Out" },
    height: 5,
    weightkg: 5
  },
  shaingo: {
    num: 92.1,
    name: "Shaingo",
    types: ["Dark"],
    baseStats: { hp: 167, atk: 96, def: 130, spa: 81, spd: 82, spe: 44 },
    abilities: { 0: "Earth Eater", 1: "Rain Dish", H: "Ice Scales" },
    height: 5,
    weightkg: 5
  },
  spritsoul: {
    num: 93.1,
    name: "Spritsoul",
    types: ["Ghost", "Dark"],
    baseStats: { hp: 42, atk: 187, def: 49, spa: 59, spd: 156, spe: 107 },
    abilities: { 0: "Psychic Surge", 1: "Rivalry", H: "Rough Skin" },
    height: 5,
    weightkg: 5
  },
  kynknight: {
    num: 94.1,
    name: "Kynknight",
    types: ["Steel"],
    baseStats: { hp: 125, atk: 65, def: 48, spa: 82, spd: 113, spe: 167 },
    abilities: { 0: "Hydration", 1: "Galvanize", H: "Protosynthesis" },
    height: 17,
    weightkg: 17
  },
  scorpioxic: {
    num: 95.1,
    name: "Scorpioxic",
    types: ["Poison"],
    baseStats: { hp: 61, atk: 137, def: 144, spa: 16, spd: 94, spe: 148 },
    abilities: { 0: "Swarm", 1: "Synchronize", H: "Punk Rock" },
    height: 300,
    weightkg: 300
  },
  groodo: {
    num: 96.1,
    name: "Groodo",
    types: ["Grass"],
    baseStats: { hp: 114, atk: 76, def: 130, spa: 141, spd: 118, spe: 21 },
    abilities: { 0: "Moxie", H: "Sharpness" },
    height: 5,
    weightkg: 5
  },
  swagear: {
    num: 97.1,
    name: "Swagear",
    types: ["Psychic", "Steel"],
    baseStats: { hp: 108, atk: 141, def: 119, spa: 73, spd: 41, spe: 118 },
    abilities: { 0: "Thermal Exchange", H: "Justified" },
    height: 5,
    weightkg: 5
  },
  demoorb: {
    num: 98.1,
    name: "Demoorb",
    types: ["Electric"],
    baseStats: { hp: 50, atk: 135, def: 138, spa: 101, spd: 18, spe: 158 },
    abilities: { 0: "Lightning Rod", 1: "Surge Surfer", H: "White Smoke" },
    height: 17,
    weightkg: 17
  },
  seismialo: {
    num: 99.1,
    name: "Seismialo",
    types: ["Dark", "Ground"],
    baseStats: { hp: 123, atk: 142, def: 53, spa: 62, spd: 126, spe: 94 },
    abilities: { 0: "Blaze", H: "Prankster" },
    height: 150,
    weightkg: 150
  },
  gladlord: {
    num: 100.1,
    name: "Gladlord",
    types: ["Steel", "Fire"],
    baseStats: { hp: 137, atk: 90, def: 116, spa: 139, spd: 110, spe: 8 },
    abilities: { 0: "Sniper", 1: "Plus", H: "Vessel of Ruin" },
    height: 5,
    weightkg: 5
  },
  eleray: {
    num: 101.1,
    name: "Eleray",
    types: ["Electric"],
    baseStats: { hp: 140, atk: 83, def: 129, spa: 93, spd: 81, spe: 74 },
    abilities: { 0: "Skill Link", 1: "Ice Scales", H: "Beast Boost" },
    height: 150,
    weightkg: 150
  },
  atmosaring: {
    num: 102.1,
    name: "Atmosaring",
    types: ["Normal", "Dragon"],
    baseStats: { hp: 90, atk: 119, def: 101, spa: 60, spd: 80, spe: 150 },
    abilities: { 0: "Orichalcum Pulse", 1: "Protosynthesis", H: "Comatose" },
    height: 5,
    weightkg: 5
  },
  aquatbyss: {
    num: 103.1,
    name: "Aquatbyss",
    types: ["Water"],
    baseStats: { hp: 135, atk: 40, def: 111, spa: 56, spd: 79, spe: 179 },
    abilities: { 0: "Synchronize", H: "Damp" },
    height: 150,
    weightkg: 150
  },
  crabtle: {
    num: 104.1,
    name: "Crabtle",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 185, atk: 52, def: 183, spa: 65, spd: 49, spe: 66 },
    abilities: { 0: "Wonder Skin", H: "Oblivious" },
    height: 150,
    weightkg: 150
  },
  parrshell: {
    num: 105.1,
    name: "Parrshell",
    types: ["Rock", "\u2014"],
    baseStats: { hp: 69, atk: 132, def: 109, spa: 45, spd: 122, spe: 123 },
    abilities: { 0: "Comatose", 1: "Skill Link", H: "Normalize" },
    height: 17,
    weightkg: 17
  },
  polletone: {
    num: 106.1,
    name: "Polletone",
    types: ["Bug", "Water"],
    baseStats: { hp: 114, atk: 50, def: 58, spa: 135, spd: 192, spe: 51 },
    abilities: { 0: "Neuroforce", H: "Mirror Armor" },
    height: 150,
    weightkg: 150
  },
  stunking: {
    num: 107.1,
    name: "Stunking",
    types: ["Poison", "Dark"],
    baseStats: { hp: 46, atk: 121, def: 104, spa: 120, spd: 138, spe: 71 },
    abilities: { 0: "Shed Skin", 1: "Sturdy", H: "Compound Eyes" },
    height: 5,
    weightkg: 5
  },
  aurokin: {
    num: 108.1,
    name: "Aurokin",
    types: ["Fairy"],
    baseStats: { hp: 127, atk: 68, def: 90, spa: 146, spd: 48, spe: 121 },
    abilities: { 0: "Galvanize", H: "Prism Armor" },
    height: 300,
    weightkg: 300
  },
  crocooni: {
    num: 109.1,
    name: "Crocooni",
    types: ["Fire", "Water"],
    baseStats: { hp: 109, atk: 152, def: 92, spa: 50, spd: 132, spe: 65 },
    abilities: { 0: "Flash Fire", 1: "No Guard", H: "Hustle" },
    height: 300,
    weightkg: 300
  },
  omniwhale: {
    num: 110.1,
    name: "Omniwhale",
    types: ["Water", "Psychic"],
    baseStats: { hp: 150, atk: 78, def: 149, spa: 111, spd: 111, spe: 1 },
    abilities: { 0: "Contrary", 1: "Stamina", H: "Guts" },
    height: 150,
    weightkg: 150
  },
  fearwhale: {
    num: 111.1,
    name: "Fearwhale",
    types: ["Dark"],
    baseStats: { hp: 125, atk: 145, def: 140, spa: 62, spd: 48, spe: 80 },
    abilities: { 0: "Solid Rock", 1: "Bulletproof", H: "Poison Touch" },
    height: 150,
    weightkg: 150
  },
  geistqueen: {
    num: 112.1,
    name: "Geistqueen",
    types: ["Ghost", "Ground"],
    baseStats: { hp: 70, atk: 38, def: 160, spa: 91, spd: 176, spe: 65 },
    abilities: { 0: "Seed Sower", 1: "Heatproof", H: "Refrigerate" },
    height: 75,
    weightkg: 75
  },
  bellchomp: {
    num: 113.1,
    name: "Bellchomp",
    types: ["Steel"],
    baseStats: { hp: 136, atk: 154, def: 58, spa: 163, spd: 33, spe: 56 },
    abilities: { 0: "Wind Power", 1: "Guard Dog", H: "Steelworker" },
    height: 75,
    weightkg: 75
  },
  dinoleon: {
    num: 114.1,
    name: "Dinoleon",
    types: ["Dragon"],
    baseStats: { hp: 125, atk: 99, def: 129, spa: 54, spd: 153, spe: 40 },
    abilities: { 0: "Transistor", 1: "Tinted Lens", H: "Parental Bond" },
    height: 300,
    weightkg: 300
  },
  eggfin: {
    num: 115.1,
    name: "Eggfin",
    types: ["Poison", "Water"],
    baseStats: { hp: 92, atk: 125, def: 70, spa: 130, spd: 32, spe: 151 },
    abilities: { 0: "Intrepid Sword", 1: "Magic Guard", H: "Light Metal" },
    height: 17,
    weightkg: 17
  },
  specifist: {
    num: 116.1,
    name: "Specifist",
    types: ["Electric", "Fighting"],
    baseStats: { hp: 117, atk: 38, def: 33, spa: 150, spd: 137, spe: 125 },
    abilities: { 0: "Anger Point", H: "Sheer Force" },
    height: 5,
    weightkg: 5
  },
  wallashore: {
    num: 117.1,
    name: "Wallashore",
    types: ["Water", "Fighting"],
    baseStats: { hp: 87, atk: 97, def: 140, spa: 110, spd: 85, spe: 81 },
    abilities: { 0: "Merciless", 1: "Fluffy", H: "Electromorphosis" },
    height: 300,
    weightkg: 300
  },
  radiblade: {
    num: 118.1,
    name: "Radiblade",
    types: ["Fire"],
    baseStats: { hp: 118, atk: 74, def: 127, spa: 122, spd: 32, spe: 127 },
    abilities: { 0: "Frisk", 1: "Fairy Aura", H: "Moxie" },
    height: 300,
    weightkg: 300
  },
  bonron: {
    num: 119.1,
    name: "Bonron",
    types: ["Ground", "Steel"],
    baseStats: { hp: 72, atk: 50, def: 107, spa: 123, spd: 145, spe: 103 },
    abilities: { 0: "Quick Draw", H: "Turboblaze" },
    height: 150,
    weightkg: 150
  },
  monstrokick: {
    num: 120.1,
    name: "Monstrokick",
    types: ["Fighting"],
    baseStats: { hp: 71, atk: 99, def: 53, spa: 108, spd: 146, spe: 123 },
    abilities: { 0: "Battle Bond", 1: "Triage", H: "Contrary" },
    height: 75,
    weightkg: 75
  },
  searamel: {
    num: 121.1,
    name: "Searamel",
    types: ["Fire", "Fighting"],
    baseStats: { hp: 141, atk: 116, def: 35, spa: 139, spd: 128, spe: 41 },
    abilities: { 0: "Effect Spore", H: "Gooey" },
    height: 300,
    weightkg: 300
  },
  mudow: {
    num: 122.1,
    name: "Mudow",
    types: ["Bug", "Ground"],
    baseStats: { hp: 76, atk: 108, def: 42, spa: 187, spd: 93, spe: 94 },
    abilities: { 0: "Pixilate", 1: "Telepathy", H: "Grassy Surge" },
    height: 75,
    weightkg: 75
  },
  doomderm: {
    num: 123.1,
    name: "Doomderm",
    types: ["Ghost"],
    baseStats: { hp: 81, atk: 194, def: 107, spa: 76, spd: 48, spe: 94 },
    abilities: { 0: "Inner Focus", 1: "Vital Spirit", H: "Harvest" },
    height: 300,
    weightkg: 300
  },
  spookpet: {
    num: 124.1,
    name: "Spookpet",
    types: ["Fairy", "Ghost"],
    baseStats: { hp: 65, atk: 163, def: 45, spa: 133, spd: 92, spe: 102 },
    abilities: { 0: "Mummy", 1: "As One G", H: "Water Veil" },
    height: 75,
    weightkg: 75
  },
  dinomite: {
    num: 125.1,
    name: "Dinomite",
    types: ["Ice", "Fire"],
    baseStats: { hp: 105, atk: 134, def: 78, spa: 89, spd: 160, spe: 34 },
    abilities: { 0: "Fur Coat", 1: "Battle Armor", H: "Queenly Majesty" },
    height: 75,
    weightkg: 75
  },
  armshao: {
    num: 126.1,
    name: "Armshao",
    types: ["Fighting", "Steel"],
    baseStats: { hp: 114, atk: 58, def: 150, spa: 68, spd: 156, spe: 54 },
    abilities: { 0: "Wandering Spirit", 1: "Immunity", H: "Limber" },
    height: 5,
    weightkg: 5
  },
  shapire: {
    num: 127.1,
    name: "Shapire",
    types: ["Ground", "Rock"],
    baseStats: { hp: 150, atk: 121, def: 25, spa: 113, spd: 94, spe: 97 },
    abilities: { 0: "Tangled Feet", H: "Flare Boost" },
    height: 5,
    weightkg: 5
  },
  seareaf: {
    num: 128.1,
    name: "Seareaf",
    types: ["Fire", "Dark"],
    baseStats: { hp: 135, atk: 35, def: 140, spa: 88, spd: 68, spe: 134 },
    abilities: { 0: "Dazzling", 1: "Reckless", H: "Forewarn" },
    height: 300,
    weightkg: 300
  },
  imploach: {
    num: 129.1,
    name: "Imploach",
    types: ["Bug"],
    baseStats: { hp: 139, atk: 80, def: 71, spa: 56, spd: 150, spe: 104 },
    abilities: { 0: "Turboblaze", H: "Early Bird" },
    height: 75,
    weightkg: 75
  },
  terroweed: {
    num: 130.1,
    name: "Terroweed",
    types: ["Ground", "Psychic"],
    baseStats: { hp: 98, atk: 129, def: 68, spa: 135, spd: 121, spe: 49 },
    abilities: { 0: "Psychic Surge", H: "Illusion" },
    height: 5,
    weightkg: 5
  },
  steelshee: {
    num: 131.1,
    name: "Steelshee",
    types: ["Steel"],
    baseStats: { hp: 65, atk: 110, def: 155, spa: 135, spd: 49, spe: 86 },
    abilities: { 0: "Receiver", 1: "Hadron Engine", H: "Unseen Fist" },
    height: 150,
    weightkg: 150
  },
  gnomita: {
    num: 132.1,
    name: "Gnomita",
    types: ["Rock", "Normal"],
    baseStats: { hp: 160, atk: 107, def: 65, spa: 84, spd: 128, spe: 56 },
    abilities: { 0: "Pastel Veil", 1: "Dry Skin", H: "Armor Tail" },
    height: 17,
    weightkg: 17
  },
  rampecker: {
    num: 133.1,
    name: "Rampecker",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 41, atk: 139, def: 105, spa: 134, spd: 55, spe: 126 },
    abilities: { 0: "Compound Eyes", 1: "Parental Bond" },
    height: 300,
    weightkg: 300
  },
  porcunite: {
    num: 134.1,
    name: "Porcunite",
    types: ["Steel"],
    baseStats: { hp: 54, atk: 118, def: 31, spa: 84, spd: 158, spe: 155 },
    abilities: { 0: "Illuminate", H: "Fairy Aura" },
    height: 75,
    weightkg: 75
  },
  barracton: {
    num: 135.1,
    name: "Barracton",
    types: ["Water"],
    baseStats: { hp: 147, atk: 139, def: 124, spa: 99, spd: 35, spe: 56 },
    abilities: { 0: "Swift Swim", H: "Sand Force" },
    height: 17,
    weightkg: 17
  },
  horroala: {
    num: 136.1,
    name: "Horroala",
    types: ["Poison", "Ghost"],
    baseStats: { hp: 67, atk: 59, def: 112, spa: 91, spd: 88, spe: 183 },
    abilities: { 0: "Seed Sower", 1: "Sand Spit", H: "Wandering Spirit" },
    height: 150,
    weightkg: 150
  },
  dinopet: {
    num: 137.1,
    name: "Dinopet",
    types: ["Dragon", "Fairy"],
    baseStats: { hp: 71, atk: 142, def: 126, spa: 101, spd: 54, spe: 106 },
    abilities: { 0: "Frisk", H: "Wimp Out" },
    height: 5,
    weightkg: 5
  },
  oystoni: {
    num: 138.1,
    name: "Oystoni",
    types: ["Flying", "Water"],
    baseStats: { hp: 124, atk: 109, def: 140, spa: 26, spd: 113, spe: 88 },
    abilities: { 0: "Sniper", 1: "Water Compaction", H: "Rain Dish" },
    height: 300,
    weightkg: 300
  },
  bonking: {
    num: 139.1,
    name: "Bonking",
    types: ["Fairy", "Ghost"],
    baseStats: { hp: 152, atk: 41, def: 71, spa: 65, spd: 91, spe: 180 },
    abilities: { 0: "Rough Skin", H: "Forewarn" },
    height: 150,
    weightkg: 150
  },
  searshrew: {
    num: 140.1,
    name: "Searshrew",
    types: ["Fire", "Ice"],
    baseStats: { hp: 148, atk: 48, def: 117, spa: 74, spd: 150, spe: 63 },
    abilities: { 0: "Pixilate", 1: "Misty Surge", H: "Ice Body" },
    height: 17,
    weightkg: 17
  },
  flajinn: {
    num: 141.1,
    name: "Flajinn",
    types: ["Steel", "Fairy"],
    baseStats: { hp: 165, atk: 87, def: 80, spa: 157, spd: 47, spe: 64 },
    abilities: { 0: "Overcoat", 1: "Moxie", H: "Corrosion" },
    height: 75,
    weightkg: 75
  },
  swanball: {
    num: 142.1,
    name: "Swanball",
    types: ["Flying"],
    baseStats: { hp: 147, atk: 135, def: 13, spa: 57, spd: 142, spe: 106 },
    abilities: { 0: "Mimicry", 1: "Cud Chew", H: "Tough Claws" },
    height: 5,
    weightkg: 5
  },
  scaleform: {
    num: 143.1,
    name: "Scaleform",
    types: ["Fighting"],
    baseStats: { hp: 53, atk: 169, def: 54, spa: 157, spd: 99, spe: 68 },
    abilities: { 0: "Moxie", H: "Receiver" },
    height: 5,
    weightkg: 5
  },
  renemush: {
    num: 144.1,
    name: "Renemush",
    types: ["Poison"],
    baseStats: { hp: 61, atk: 66, def: 109, spa: 94, spd: 121, spe: 149 },
    abilities: { 0: "Light Metal", 1: "Receiver", H: "Insomnia" },
    height: 5,
    weightkg: 5
  },
  goriander: {
    num: 145.1,
    name: "Goriander",
    types: ["Fairy"],
    baseStats: { hp: 157, atk: 141, def: 101, spa: 62, spd: 116, spe: 23 },
    abilities: { 0: "Levitate", 1: "Unburden", H: "Propeller Tail" },
    height: 75,
    weightkg: 75
  },
  buffly: {
    num: 146.1,
    name: "Buffly",
    types: ["Fighting", "Dark"],
    baseStats: { hp: 109, atk: 56, def: 95, spa: 74, spd: 111, spe: 155 },
    abilities: { 0: "Long Reach", 1: "Quick Feet", H: "Stakeout" },
    height: 150,
    weightkg: 150
  },
  skelloach: {
    num: 147.1,
    name: "Skelloach",
    types: ["Ground"],
    baseStats: { hp: 57, atk: 101, def: 114, spa: 60, spd: 176, spe: 92 },
    abilities: { 0: "Ice Scales", 1: "Telepathy", H: "Swarm" },
    height: 5,
    weightkg: 5
  },
  blastweed: {
    num: 148.1,
    name: "Blastweed",
    types: ["Grass", "Rock"],
    baseStats: { hp: 39, atk: 82, def: 114, spa: 116, spd: 138, spe: 111 },
    abilities: { 0: "Wind Rider", 1: "Soul-Heart", H: "Technician" },
    height: 17,
    weightkg: 17
  },
  spirislash: {
    num: 149.1,
    name: "Spirislash",
    types: ["Ghost"],
    baseStats: { hp: 93, atk: 124, def: 74, spa: 170, spd: 63, spe: 76 },
    abilities: { 0: "Huge Power", H: "Prism Armor" },
    height: 300,
    weightkg: 300
  }
};
//# sourceMappingURL=pokedex.js.map
