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
  basalisk: {
    num: 1001,
    name: "Basalisk",
    types: ["Dark", "Rock"],
    baseStats: { hp: 89, atk: 111, def: 71, spa: 67, spd: 91, spe: 121 },
    abilities: { 0: "Rough Skin", 1: "Rattled", H: "Swift Swim" }
  },
  beryl: {
    num: 1002,
    name: "Beryl",
    types: ["Grass", "Fairy"],
    baseStats: { hp: 80, atk: 85, def: 113, spa: 97, spd: 60, spe: 90 },
    abilities: { 0: "Ripen", 1: "Chlorophyll", H: "Gluttony" }
  },
  bexipine: {
    num: 1003,
    name: "Bexipine",
    types: ["Ice", "Steel"],
    baseStats: { hp: 70, atk: 65, def: 120, spa: 110, spd: 80, spe: 85 },
    abilities: { 0: "Ice Body", 1: "Iron Barbs", H: "Ice Scales" }
  },
  bidenblaster: {
    num: 1004,
    name: "Biden Blaster",
    types: ["Steel", "Bug"],
    baseStats: { hp: 50, atk: 88, def: 70, spa: 122, spd: 79, spe: 111 },
    abilities: { 0: "Electrivore", 1: "Analytic", H: "Competitive" }
  },
  blunderbass: {
    num: 1005,
    name: "Blunderbass",
    types: ["Water", "Steel"],
    baseStats: { hp: 87, atk: 118, def: 69, spa: 90, spd: 111, spe: 75 },
    abilities: { 0: "Water Veil", 1: "Sharpshooter", H: "Swift Swim" }
  },
  combaudit: {
    num: 1006,
    name: "Combaudit",
    types: ["Bug", "Steel"],
    baseStats: { hp: 95, atk: 120, def: 60, spa: 50, spd: 95, spe: 130 },
    abilities: { 0: "Swarm", 1: "Levitate", H: "Rocket Propulsion" }
  },
  dolsin: {
    num: 1007,
    name: "Dolsin",
    types: ["Water", "Poison"],
    baseStats: { hp: 100, atk: 105, def: 75, spa: 75, spd: 65, spe: 110 },
    abilities: { 0: "Swift Swim", H: "Merciless" }
  },
  extremeribbit: {
    num: 1008,
    name: "Extreme Ribbit",
    types: ["Normal", "Steel"],
    baseStats: { hp: 85, atk: 105, def: 80, spa: 115, spd: 70, spe: 145 },
    abilities: { 0: "Soundproof", 1: "Punk Rock", H: "Boombox" }
  },
  fanctacee: {
    num: 1009,
    name: "Fanctacee",
    types: ["Ghost", "Dragon"],
    baseStats: { hp: 71, atk: 117, def: 75, spa: 103, spd: 81, spe: 99 },
    abilities: { 0: "Opportunist", 1: "Phantom Thief", H: "Trace" }
  },
  gasket: {
    num: 1010,
    name: "Gasket",
    types: ["Fire", "Rock"],
    baseStats: { hp: 95, atk: 49, def: 70, spa: 105, spd: 110, spe: 116 },
    abilities: { 0: "Levitate", 1: "Desolate Land", H: "Molten Fury" }
  },
  glassupreme: {
    num: 1011,
    name: "Glassupreme",
    types: ["Ice", "Fire"],
    baseStats: { hp: 75, atk: 110, def: 65, spa: 120, spd: 70, spe: 130 },
    abilities: { 0: "Ice Body", 1: "Thermal Exchange", H: "Immolate" }
  },
  handeyebert: {
    num: 1012,
    name: "Handeyebert",
    types: ["Water", "Dark"],
    baseStats: { hp: 105, atk: 100, def: 70, spa: 60, spd: 70, spe: 115 },
    abilities: { 0: "Water Veil", 1: "Aftermath", H: "Disguise" }
  },
  hourcuuda: {
    num: 1013,
    name: "Hourcuuda",
    types: ["Ghost", "Fairy"],
    baseStats: { hp: 60, atk: 121, def: 131, spa: 45, spd: 123, spe: 95 },
    abilities: { 0: "Regenerator", 1: "Power of Alchemy", H: "Adaptability" }
  },
  icybeeyem: {
    num: 1014,
    name: "Icybeeyem",
    types: ["Steel", "Dark"],
    baseStats: { hp: 87, atk: 105, def: 109, spa: 76, spd: 93, spe: 50 },
    abilities: { 0: "Soundproof", 1: "Heavy Metal", H: "Intimidate" }
  },
  jubaturbo: {
    num: 1015,
    name: "Jubaturbo",
    types: ["Normal", "Steel"],
    baseStats: { hp: 82, atk: 111, def: 62, spa: 82, spd: 80, spe: 113 },
    abilities: { 0: "Speed Boost", 1: "Run Away", H: "Iron Barbs" }
  },
  maraiste: {
    num: 1016,
    name: "Maraiste",
    types: ["Electric", "Bug"],
    baseStats: { hp: 75, atk: 115, def: 120, spa: 105, spd: 75, spe: 85 },
    abilities: { 0: "Motor Drive", 1: "Volt Absorb", H: "Rattled" }
  },
  medusear: {
    num: 1017,
    name: "Medusear",
    types: ["Poison", "Ground"],
    baseStats: { hp: 120, atk: 110, def: 80, spa: 100, spd: 75, spe: 65 },
    abilities: { 0: "Poison Touch", 1: "Minds Eye", H: "Iron Fist" }
  },
  octazure: {
    num: 1018,
    name: "Octazure",
    types: ["Water", "Poison"],
    baseStats: { hp: 93, atk: 98, def: 102, spa: 69, spd: 67, spe: 71 },
    abilities: { 0: "Poison Touch", 1: "Mimicry", H: "Corrosion" }
  },
  ohmyrod: {
    num: 1019,
    name: "Ohmyrod",
    types: ["Water", "Grass"],
    baseStats: { hp: 75, atk: 130, def: 134, spa: 95, spd: 86, spe: 45 },
    abilities: { 0: "Water Absorb", H: "Innards Out" }
  },
  osbait: {
    num: 1020,
    name: "Osbait",
    types: ["Flying", "Dark"],
    baseStats: { hp: 87, atk: 63, def: 70, spa: 108, spd: 102, spe: 105 },
    abilities: { 0: "Cursed Body", H: "Pressure" }
  },
  ostretch: {
    num: 1021,
    name: "Ostretch",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 77, atk: 98, def: 115, spa: 98, spd: 103, spe: 57 },
    abilities: { 0: "Hustle", 1: "Two Left Feet", H: "Klutz" }
  },
  parkyon: {
    num: 1022,
    name: "Parkyon",
    types: ["Dark", "Psychic"],
    baseStats: { hp: 70, atk: 110, def: 70, spa: 110, spd: 110, spe: 70 },
    abilities: { 0: "Illuminate", 1: "Cosmic Body", H: "Pressure" }
  },
  quackologist: {
    num: 1023,
    name: "Quackologist",
    types: ["Water", "Psychic"],
    baseStats: { hp: 81, atk: 49, def: 78, spa: 113, spd: 134, spe: 75 },
    abilities: { 0: "Water Veil", 1: "Natural Cure", H: "Quackery" }
  },
  retrucable: {
    num: 1024,
    name: "Retrucable",
    types: ["Poison", "Steel"],
    baseStats: { hp: 125, atk: 126, def: 94, spa: 103, spd: 81, spe: 71 },
    abilities: { 0: "Neutralizing Gas", H: "Filter" }
  },
  shadelisk: {
    num: 1025,
    name: "Shadelisk",
    types: ["Ice", "Poison"],
    baseStats: { hp: 82, atk: 118, def: 105, spa: 75, spd: 64, spe: 86 },
    abilities: { 0: "Long Reach", 1: "Moxie", H: "Regenerator" }
  },
  slugchuck: {
    num: 1026,
    name: "Slugchuck",
    types: ["Bug", "Fighting"],
    baseStats: { hp: 89, atk: 118, def: 75, spa: 100, spd: 71, spe: 82 },
    abilities: { 0: "Rocky Payload", H: "Big Swinger" }
  },
  soupirate: {
    num: 1027,
    name: "Soupirate",
    types: ["Water", "Dark"],
    baseStats: { hp: 122, atk: 90, def: 72, spa: 42, spd: 95, spe: 119 },
    abilities: { 0: "Intimidate", 1: "Heat Proof", H: "Drought" }
  },
  strawmmoth: {
    num: 1028,
    name: "Strawmmoth",
    types: ["Grass", "Water"],
    baseStats: { hp: 80, atk: 110, def: 70, spa: 90, spd: 110, spe: 90 },
    abilities: { 0: "Ripen", 1: "Natural Cure", H: "Water Absorb" }
  },
  unpatroll: {
    num: 1029,
    name: "Unpatroll",
    types: ["Fairy", "Ice"],
    baseStats: { hp: 20, atk: 100, def: 150, spa: 100, spd: 250, spe: 130 },
    abilities: { 0: "Snow Cloak", H: "Fluffy" }
  },
  wolversnare: {
    num: 1030,
    name: "Wolversnare",
    types: ["Dark", "Ground"],
    baseStats: { hp: 120, atk: 144, def: 60, spa: 96, spd: 132, spe: 48 },
    abilities: { 0: "Iron Barbs", 1: "Keen Eye", H: "Steely Spirit" }
  },
  arclinnox: {
    num: 1031,
    name: "Arclinnox",
    types: ["Dragon"],
    baseStats: { hp: 105, atk: 110, def: 90, spa: 107, spd: 80, spe: 91 },
    abilities: { 0: "Rock Head", 1: "Unaware", H: "Flash Fire" }
  },
  barbonara: {
    num: 1032,
    name: "Barbonara",
    types: ["Grass", "Steel"],
    baseStats: { hp: 60, atk: 80, def: 105, spa: 135, spd: 115, spe: 60 },
    abilities: { 0: "Tangling Hair", 1: "Steam Engine", H: "Rolling Boil" }
  },
  bob: {
    num: 1033,
    name: "bob",
    types: ["Flying", "Fighting"],
    baseStats: { hp: 70, atk: 102, def: 79, spa: 60, spd: 98, spe: 121 },
    abilities: { 0: "Early Bird", 1: "Scrappy", H: "Reckless" }
  },
  boreasel: {
    num: 1034,
    name: "Boreasel",
    types: ["Ice", "Flying"],
    baseStats: { hp: 101, atk: 121, def: 97, spa: 72, spd: 94, spe: 61 },
    abilities: { 0: "Snow Warning", H: "Aerilate" }
  },
  castanov: {
    num: 1035,
    name: "Castanov",
    types: ["Bug", "Electric"],
    baseStats: { hp: 76, atk: 90, def: 71, spa: 100, spd: 100, spe: 103 },
    abilities: { 0: "Swarm", 1: "Illuminate", H: "Flashbang" }
  },
  cerebrawl: {
    num: 1036,
    name: "Cerebrawl",
    types: ["Psychic", "Dark"],
    baseStats: { hp: 84, atk: 108, def: 101, spa: 67, spd: 144, spe: 96 },
    abilities: { 0: "Mind Over Matter", H: "Intimidate" }
  },
  dothog: {
    num: 1037,
    name: "Dothog",
    types: ["Dragon", "Dark"],
    baseStats: { hp: 85, atk: 120, def: 70, spa: 105, spd: 70, spe: 105 },
    abilities: { 0: "Guard Dog", 1: "Earth Eater", H: "Dragon's Maw" }
  },
  empunch: {
    num: 1038,
    name: "E.M.Punch",
    types: ["Fighting", "Steel"],
    baseStats: { hp: 180, atk: 122, def: 60, spa: 80, spd: 60, spe: 48 },
    abilities: { 0: "Long Reach", 1: "Battle Armor", H: "Iron Fist" }
  },
  faradaisy: {
    num: 1039,
    name: "Faradaisy",
    types: ["Grass", "Dark"],
    baseStats: { hp: 90, atk: 120, def: 90, spa: 90, spd: 75, spe: 110 },
    abilities: { 0: "Triage", 1: "Chlorophyll", H: "Strong Jaw" }
  },
  fizzkrieg: {
    num: 1040,
    name: "Fizzkrieg",
    types: ["Bug", "Poison"],
    baseStats: { hp: 63, atk: 117, def: 72, spa: 90, spd: 85, spe: 111 },
    abilities: { 0: "Water Bubble", H: "Toxic Debris" }
  },
  heirfriar: {
    num: 1041,
    name: "Heirfriar",
    types: ["Flying", "Psychic"],
    baseStats: { hp: 86, atk: 80, def: 74, spa: 125, spd: 81, spe: 80 },
    abilities: { 0: "Be Not Afraid" },
    otherFormes: ["Heirfriar-Holy"]
  },
  heirfriarholy: {
    num: 1041,
    name: "Heirfriar-Holy",
    types: ["Flying", "Psychic"],
    baseStats: { hp: 86, atk: 80, def: 74, spa: 125, spd: 81, spe: 80 },
    abilities: { 0: "Be Not Afraid" }
  },
  jeffrey: {
    num: 1042,
    name: "Jeffrey",
    types: ["Bug", "Normal"],
    baseStats: { hp: 31, atk: 108, def: 145, spa: 88, spd: 145, spe: 88 },
    abilities: { 0: "Insomnia", 1: "Hustle", H: "Scrappy" }
  },
  lazerazer: {
    num: 1043,
    name: "Lazerazer",
    types: ["Electric", "Steel"],
    baseStats: { hp: 70, atk: 55, def: 125, spa: 130, spd: 85, spe: 85 },
    abilities: { 0: "Megaton", H: "Electric Surge" }
  },
  luwaxane: {
    num: 1044,
    name: "luwaxane",
    types: ["Normal"],
    baseStats: { hp: 99, atk: 109, def: 99, spa: 59, spd: 69, spe: 89 },
    abilities: { 0: "Ball Fetch", 1: "Strong Jaw", H: "Scrappy" }
  },
  mawbreaker: {
    num: 1045,
    name: "Mawbreaker",
    types: ["Fairy", "Rock"],
    baseStats: { hp: 118, atk: 99, def: 132, spa: 119, spd: 102, spe: 30 },
    abilities: { 0: "Filter", 1: "No Guard", H: "Purifying Salt" }
  },
  microwave: {
    num: 1046,
    name: "Microwave",
    types: ["Fire", "Steel"],
    baseStats: { hp: 41, atk: 79, def: 177, spa: 123, spd: 111, spe: 69 },
    abilities: { 0: "Motor Drive", H: "Transistor" }
  },
  mightokondria: {
    num: 1047,
    name: "Mightokondria",
    types: ["Psychic", "Fighting"],
    baseStats: { hp: 66, atk: 115, def: 110, spa: 100, spd: 75, spe: 79 },
    abilities: { 0: "Battle Armor", 1: "Perish Body", H: "Bean There Done That" }
  },
  mikyu: {
    num: 1048,
    name: "Mikyu",
    types: ["Steel", "Fairy"],
    baseStats: { hp: 90, atk: 120, def: 80, spa: 65, spd: 70, spe: 105 },
    abilities: { 0: "Law Breaker" }
  },
  naenaeray: {
    num: 1049,
    name: "Naenaeray",
    types: ["Water", "Fairy"],
    baseStats: { hp: 81, atk: 72, def: 56, spa: 105, spd: 101, spe: 90 },
    abilities: { 0: "Swift Swim", H: "Dancer" }
  },
  oratcha: {
    num: 1050,
    name: "Oratcha",
    types: ["Water", "Psychic"],
    baseStats: { hp: 63, atk: 117, def: 72, spa: 90, spd: 85, spe: 111 },
    abilities: { 0: "Steadfast", 1: "Rain Dish", H: "Trace" }
  },
  qjtc: {
    num: 1051,
    name: "QJTC",
    types: ["Normal", "Electric"],
    baseStats: { hp: 140, atk: 130, def: 80, spa: 50, spd: 70, spe: 40 },
    abilities: { 0: "Run Away", 1: "Rock Dodger", H: "Galvanize" }
  },
  rustration: {
    num: 1052,
    name: "Rustration",
    types: ["Dark", "Ghost"],
    baseStats: { hp: 90, atk: 65, def: 65, spa: 110, spd: 110, spe: 90 },
    abilities: { 0: "Cursed Body", 1: "Steely Spirit", H: "Weak Armor" }
  },
  sagittremor: {
    num: 1053,
    name: "Sagittremor",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 55, atk: 110, def: 110, spa: 95, spd: 60, spe: 120 },
    abilities: { 0: "Technician", 1: "Long Reach", H: "Bullseye" }
  },
  scalaea: {
    num: 1054,
    name: "Scalaea",
    types: ["Fire", "Rock"],
    baseStats: { hp: 100, atk: 130, def: 120, spa: 45, spd: 95, spe: 80 },
    abilities: { 0: "Rough Skin", 1: "Strong Jaw", H: "No Guard" }
  },
  scormadio: {
    num: 1055,
    name: "Scormadio",
    types: ["Psychic", "Poison"],
    baseStats: { hp: 100, atk: 95, def: 104, spa: 120, spd: 75, spe: 96 },
    abilities: { 0: "Color Change", 1: "Compound Eyes", H: "Psychic Surge" }
  },
  serplatano: {
    num: 1056,
    name: "Serplatano",
    types: ["Grass", "Dragon"],
    baseStats: { hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 75 },
    abilities: { 0: "Comedic Slip", 1: "Ripen", H: "Grassy Surge" }
  },
  slapybara: {
    num: 1057,
    name: "slapybara",
    types: ["Normal", "Fighting"],
    baseStats: { hp: 144, atk: 120, def: 60, spa: 40, spd: 60, spe: 85 },
    abilities: { 0: "Iron Fist", 1: "Technician", H: "Sand Force" }
  },
  smod: {
    num: 1058,
    name: "Smod",
    types: ["Steel", "Psychic"],
    baseStats: { hp: 135, atk: 143, def: 143, spa: 80, spd: 65, spe: 34 },
    abilities: { 0: "Hospitality", 1: "Trace", H: "Protean" }
  },
  sopranodon: {
    num: 1059,
    name: "Sopranodon",
    types: ["Dark", "Normal"],
    baseStats: { hp: 70, atk: 150, def: 80, spa: 50, spd: 60, spe: 85 },
    abilities: { 0: "Thick Fat", 1: "Stakeout", H: "Mob Mentality" }
  },
  spectroll: {
    num: 1060,
    name: "Spectroll",
    types: ["Grass", "Ghost"],
    baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
    abilities: { 0: "Cursed Body", 1: "Shadow Shield", H: "Dark Aura" }
  },
  sphinxtify: {
    num: 1061,
    name: "Sphinxtify",
    types: ["Steel", "Flying"],
    baseStats: { hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67 },
    abilities: { 0: "Unnerve", 1: "Pressure", H: "Intimidate" }
  },
  starrium: {
    num: 1062,
    name: "Starrium",
    types: ["Electric", "Psychic"],
    baseStats: { hp: 85, atk: 55, def: 95, spa: 118, spd: 85, spe: 102 },
    abilities: { 0: "Power Spot", 1: "Galvanize", H: "Levitate" }
  },
  staxenhammer: {
    num: 1063,
    name: "Staxenhammer",
    types: ["Grass", "Steel"],
    baseStats: { hp: 82, atk: 109, def: 120, spa: 54, spd: 74, spe: 83 },
    abilities: { 0: "Hyper Cutter", 1: "Cash Out", H: "Sharpness" }
  },
  steghoulros: {
    num: 1064,
    name: "Steghoulros",
    types: ["Steel", "Psychic"],
    baseStats: { hp: 90, atk: 110, def: 110, spa: 120, spd: 80, spe: 45 },
    abilities: { 0: "Levitate", H: "Iron Barbs" }
  },
  styxia: {
    num: 1065,
    name: "Styxia",
    types: ["Ghost", "Poison"],
    baseStats: { hp: 91, atk: 100, def: 85, spa: 105, spd: 100, spe: 94 },
    abilities: { 0: "Guiding Light", H: "Soul-Heart" }
  },
  woollocks: {
    num: 1066,
    name: "Woollocks",
    types: ["Fairy", "Ghost"],
    baseStats: { hp: 75, atk: 100, def: 110, spa: 110, spd: 110, spe: 60 },
    abilities: { 0: "Static", 1: "Infiltrator", H: "Overcoat" }
  },
  xxinarthra: {
    num: 1067,
    name: "Xxinarthra",
    types: ["Dark", "Electric"],
    baseStats: { hp: 81, atk: 107, def: 81, spa: 117, spd: 94, spe: 100 },
    abilities: { 0: "Recharge", 1: "Battery", H: "Infiltrator" }
  },
  yourmom: {
    num: 1068,
    name: "Yourmom",
    types: ["Poison", "Fairy"],
    baseStats: { hp: 86, atk: 99, def: 41, spa: 63, spd: 125, spe: 136 },
    abilities: { 0: "Sticky Hold", 1: "Cute Charm", H: "Strong Jaw" }
  }
};
//# sourceMappingURL=pokedex.js.map
