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
  baobloss: {
    num: 1003,
    name: "Baobloss",
    types: ["Spring", "Serenity"],
    baseStats: { hp: 85, atk: 90, def: 85, spa: 95, spd: 110, spe: 60 },
    abilities: { 0: "Blossom", H: "Petal Body" },
    weightkg: 300,
    eggGroups: ["Spook"]
  },
  tenquarrel: {
    num: 1006,
    name: "Tenquarrel",
    types: ["Summer", "Sky"],
    baseStats: { hp: 85, atk: 60, def: 85, spa: 110, spd: 95, spe: 90 },
    abilities: { 0: "Shine", H: "Blight Boost" },
    weightkg: 100,
    eggGroups: ["Spook"]
  },
  tradituki: {
    num: 1009,
    name: "Tradituki",
    types: ["Autumn", "Folklore"],
    baseStats: { hp: 85, atk: 95, def: 110, spa: 90, spd: 85, spe: 60 },
    abilities: { 0: "Decay", H: "Ignorance" },
    weightkg: 50,
    eggGroups: ["Spook"]
  },
  hibarrage: {
    num: 1012,
    name: "Hibarrage",
    types: ["Winter", "Storm"],
    baseStats: { hp: 85, atk: 110, def: 95, spa: 60, spd: 85, spe: 90 },
    abilities: { 0: "Linger", H: "Chill" },
    weightkg: 50,
    eggGroups: ["Spook"]
  },
  pumking: {
    num: 1013,
    name: "Pumking",
    types: ["Autumn", "Folklore"],
    baseStats: { hp: 40, atk: 70, def: 80, spa: 120, spd: 80, spe: 120 },
    abilities: { 0: "Jack-O'", H: "Reaper" },
    weightkg: 80,
    eggGroups: ["zathoxxx0"]
  },
  carboneichus: {
    num: 1014,
    name: "Carboneichus",
    types: ["Earth"],
    baseStats: { hp: 100, atk: 135, def: 65, spa: 80, spd: 100, spe: 40 },
    abilities: { 0: "Thick Skin", 1: "Thick Headed", H: "Climatic Change" },
    weightkg: 143.2,
    eggGroups: ["zathoxxx0"]
  },
  calmengo: {
    num: 1015,
    name: "Calmengo",
    types: ["Sky", "Serenity"],
    baseStats: { hp: 113, atk: 57, def: 70, spa: 130, spd: 90, spe: 50 },
    abilities: { 0: "Celestial", 1: "Glide", H: "Regenerator" },
    weightkg: 0.06,
    eggGroups: ["zathoxxx0"]
  },
  paciphal: {
    num: 1017,
    name: "Paciphal",
    types: ["Autumn", "Serenity"],
    baseStats: { hp: 80, atk: 115, def: 85, spa: 85, spd: 95, spe: 65 },
    abilities: { 0: "Scavenge", H: "Jack-O'" },
    weightkg: 34,
    eggGroups: ["Beaf Cultist"]
  },
  hullacane: {
    num: 1018,
    name: "Hullacane",
    types: ["Summer", "Storm"],
    baseStats: { hp: 75, atk: 110, def: 80, spa: 80, spd: 70, spe: 110 },
    abilities: { 0: "Counterswirl" },
    weightkg: 85,
    eggGroups: ["Beaf Cultist"]
  },
  cylindrake: {
    num: 1020,
    name: "Cylindrake",
    types: ["Manmade", "Storm"],
    baseStats: { hp: 70, atk: 85, def: 115, spa: 85, spd: 70, spe: 130 },
    abilities: { 0: "Metal Coat", 1: "Burnout", H: "Amplify" },
    weightkg: 318,
    eggGroups: ["Scoopapa"]
  },
  efflor: {
    num: 1021,
    name: "Efflor",
    types: ["Earth", "Spring"],
    baseStats: { hp: 95, atk: 100, def: 110, spa: 85, spd: 80, spe: 35 },
    abilities: { 0: "Stone Skin", H: "Big Bellied" },
    weightkg: 268,
    eggGroups: ["Scoopapa"]
  },
  rantler: {
    num: 1023,
    name: "Rantler",
    types: ["Winter"],
    baseStats: { hp: 79, atk: 118, def: 84, spa: 53, spd: 68, spe: 68 },
    abilities: { 0: "Tough Claws" },
    weightkg: 67,
    eggGroups: ["Scoopapa"]
  },
  zeploom: {
    num: 1025,
    name: "Zeploom",
    types: ["Autumn", "Earth"],
    baseStats: { hp: 55, atk: 55, def: 145, spa: 65, spd: 150, spe: 45 },
    abilities: { 0: "Acrid", 1: "Almsgiver", H: "Absorptive" },
    weightkg: 5,
    eggGroups: ["Scoopapa"]
  },
  terraphi: {
    num: 1027,
    name: "Terraphi",
    types: ["Earth"],
    baseStats: { hp: 85, atk: 105, def: 125, spa: 70, spd: 80, spe: 60 },
    abilities: { 0: "Nocturnal", H: "Thick Headed" },
    weightkg: 72,
    eggGroups: ["Scoopapa"]
  },
  stratophi: {
    num: 1028,
    name: "Stratophi",
    types: ["Sky"],
    baseStats: { hp: 60, atk: 85, def: 80, spa: 105, spd: 125, spe: 70 },
    abilities: { 0: "Counterswirl", H: "Glide" },
    weightkg: 45,
    eggGroups: ["Scoopapa"]
  },
  pelaphi: {
    num: 1029,
    name: "Pelaphi",
    types: ["Sea"],
    baseStats: { hp: 125, atk: 105, def: 70, spa: 85, spd: 60, spe: 80 },
    abilities: { 0: "Thick Skin", H: "Raging Sea" },
    weightkg: 102,
    eggGroups: ["Scoopapa"]
  },
  sunmola: {
    num: 1030,
    name: "Sunmola",
    types: ["Sea", "Summer"],
    baseStats: { hp: 72, atk: 65, def: 79, spa: 91, spd: 128, spe: 65 },
    abilities: { 0: "Tropical Spirit" },
    weightkg: 59,
    eggGroups: ["Scoopapa"]
  },
  phantahawk: {
    num: 1031,
    name: "Phantahawk",
    types: ["Sky", "Night"],
    baseStats: { hp: 80, atk: 125, def: 84, spa: 65, spd: 83, spe: 105 },
    abilities: { 0: "Tough Claws", H: "Checkmate" },
    weightkg: 60,
    eggGroups: ["r1dude"]
  },
  memilifyy: {
    num: 1032,
    name: "Memilifyy",
    types: ["Storm", "Manmade"],
    baseStats: { hp: 104, atk: 147, def: 69, spa: 72, spd: 100, spe: 51 },
    abilities: { 0: "Big Bellied", 1: "Blind Rage", H: "Thick Skin" },
    weightkg: 99,
    eggGroups: ["r1dude"]
  },
  plantadiomicrisa: {
    num: 1034,
    name: "Plantadiomicrisa",
    types: ["Serenity", "Folklore"],
    baseStats: { hp: 129, atk: 70, def: 80, spa: 113, spd: 107, spe: 65 },
    abilities: { 0: "Petal Body", H: "Regenerator" },
    weightkg: 67,
    eggGroups: ["r1dude"]
  },
  terrahephas: {
    num: 1035,
    name: "Terrahephas",
    types: ["Earth", "Folklore"],
    baseStats: { hp: 90, atk: 90, def: 120, spa: 90, spd: 120, spe: 40 },
    abilities: { 0: "Ataraxia", H: "Far Reach" },
    weightkg: 120,
    eggGroups: ["r1dude"]
  },
  parvualias: {
    num: 1037,
    name: "Parvualias",
    types: ["Sky", "Summer"],
    baseStats: { hp: 108, atk: 100, def: 80, spa: 50, spd: 65, spe: 135 },
    abilities: { 0: "Big Bellied", H: "Blossom" },
    weightkg: 83,
    eggGroups: ["r1dude"]
  },
  rancicoon: {
    num: 1039,
    name: "Rancicoon",
    types: ["Autumn", "Night"],
    baseStats: { hp: 105, atk: 95, def: 95, spa: 85, spd: 85, spe: 75 },
    abilities: { 0: "Nocturnal", 1: "Contrary", H: "Regenerator" },
    weightkg: 45,
    eggGroups: ["PalpitoadChamp"]
  },
  meditoid: {
    num: 1041,
    name: "Meditoid",
    types: ["Serenity", "Manmade"],
    baseStats: { hp: 105, atk: 95, def: 95, spa: 85, spd: 85, spe: 85 },
    abilities: { 0: "Metal Coat", H: "Conversion" },
    weightkg: 84.5,
    eggGroups: ["PalpitoadChamp"]
  },
  yukinooh: {
    num: 1043,
    name: "Yukinooh",
    types: ["Spring", "Winter"],
    baseStats: { hp: 90, atk: 132, def: 105, spa: 132, spd: 105, spe: 30 },
    abilities: { 0: "Snowbringer", H: "Chill" },
    weightkg: 185,
    eggGroups: ["PalpitoadChamp"]
  },
  misausmia: {
    num: 1044,
    name: "Misausmia",
    types: ["Folklore"],
    baseStats: { hp: 60, atk: 70, def: 100, spa: 145, spd: 115, spe: 105 },
    abilities: { 0: "Alchemy" },
    weightkg: 4.4,
    eggGroups: ["PalpitoadChamp"]
  },
  pavronin: {
    num: 1046,
    name: "Pavronin",
    types: ["Sky", "Serenity"],
    baseStats: { hp: 75, atk: 120, def: 85, spa: 55, spd: 110, spe: 60 },
    abilities: { 0: "Smite", H: "Courageous" },
    weightkg: 40.6,
    eggGroups: ["Rasdanation"]
  },
  kraklone: {
    num: 1048,
    name: "Kraklone",
    types: ["Sea", "Storm"],
    baseStats: { hp: 122, atk: 80, def: 62, spa: 110, spd: 58, spe: 55 },
    abilities: { 0: "Raging Sea", H: "Rainbringer" },
    weightkg: 126.5,
    eggGroups: ["Rasdanation"]
  },
  crustair: {
    num: 1050,
    name: "Crustair",
    types: ["Summer", "Sea"],
    baseStats: { hp: 67, atk: 102, def: 130, spa: 50, spd: 65, spe: 73 },
    abilities: { 0: "Tropical Spirit", H: "Storm Watch" },
    weightkg: 30.2,
    eggGroups: ["Rasdanation"]
  },
  yulisse: {
    num: 1051,
    name: "Yulisse",
    types: ["Winter", "Folklore"],
    baseStats: { hp: 75, atk: 45, def: 75, spa: 120, spd: 75, spe: 105 },
    abilities: { 0: "Almsgiver" },
    weightkg: 101.6,
    eggGroups: ["Rasdanation"]
  },
  totodem: {
    num: 1052,
    name: "Totodem",
    types: ["Folklore", "Earth"],
    baseStats: { hp: 90, atk: 82, def: 110, spa: 112, spd: 90, spe: 45 },
    abilities: { 0: "Blessed", 1: "Equivalent Exchange", H: "Modern Adaptation" },
    weightkg: 31.3,
    eggGroups: ["Rasdanation"]
  },
  persebloom: {
    num: 1055,
    name: "Persebloom",
    baseForme: "Base",
    types: ["Spring", "Earth"],
    baseStats: { hp: 70, atk: 65, def: 95, spa: 115, spd: 115, spe: 55 },
    abilities: { 0: "Petal Body", 1: "Ataraxia", H: "Blight Boost" },
    weightkg: 15,
    eggGroups: ["Rasdanation"]
  },
  persebloomfrost: {
    num: 1055,
    name: "Persebloom-Frost",
    baseSpecies: "Persebloom",
    forme: "Frost",
    types: ["Spring", "Winter"],
    baseStats: { hp: 70, atk: 115, def: 65, spa: 65, spd: 85, spe: 115 },
    abilities: { 0: "Bing Chilling" },
    weightkg: 15,
    eggGroups: ["Rasdanation"]
  },
  hawkmorph: {
    num: 1057,
    name: "Hawkmorph",
    types: ["Spring", "Sky"],
    baseStats: { hp: 74, atk: 55, def: 73, spa: 110, spd: 87, spe: 121 },
    abilities: { 0: "Life Cycle" },
    weightkg: 36.5,
    eggGroups: ["AquaticPanic"]
  },
  gallurise: {
    num: 1060,
    name: "Gallurise",
    types: ["Summer", "Serenity"],
    baseStats: { hp: 85, atk: 104, def: 73, spa: 81, spd: 67, spe: 100 },
    abilities: { 0: "Sunbringer", 1: "Glide", H: "Berserker" },
    weightkg: 40,
    eggGroups: ["AquaticPanic"]
  },
  hensomnia: {
    num: 1061,
    name: "Hensomnia",
    types: ["Night", "Storm"],
    baseStats: { hp: 96, atk: 120, def: 87, spa: 50, spd: 73, spe: 84 },
    abilities: { 0: "Nocturnal", 1: "Tough Claws", H: "Berserker" },
    weightkg: 57,
    eggGroups: ["AquaticPanic"]
  },
  protectonic: {
    num: 1062,
    name: "Protectonic",
    types: ["Earth", "Folklore"],
    baseStats: { hp: 87, atk: 120, def: 128, spa: 44, spd: 61, spe: 60 },
    abilities: { 0: "Shatter", H: "All-Seeing Eye" },
    weightkg: 756,
    eggGroups: ["AquaticPanic"]
  },
  crowbotic: {
    num: 1063,
    name: "Crowbotic",
    types: ["Sky", "Manmade"],
    baseStats: { hp: 75, atk: 105, def: 90, spa: 45, spd: 90, spe: 95 },
    abilities: { 0: "Data Upgrade", H: "Almsgiver" },
    weightkg: 244,
    eggGroups: ["AquaticPanic"]
  },
  sponjourner: {
    num: 1064,
    name: "Sponjourner",
    types: ["Sea", "Serenity"],
    baseStats: { hp: 70, atk: 20, def: 135, spa: 125, spd: 100, spe: 20 },
    abilities: { 0: "Absorptive", 1: "Tropical Spirit", H: "Regenerator" },
    weightkg: 0.1,
    eggGroups: ["AquaticPanic"]
  },
  emajanaja: {
    num: 1067,
    name: "Emajanaja",
    types: ["Serenity", "Storm"],
    baseStats: { hp: 110, atk: 115, def: 75, spa: 125, spd: 85, spe: 90 },
    abilities: { 0: "Bipolar", 1: "Equivalent Exchange", H: "Unstable" },
    weightkg: 130,
    eggGroups: ["AquaticPanic"]
  },
  zenphin: {
    num: 1069,
    name: "Zenphin",
    types: ["Sea", "Serenity"],
    baseStats: { hp: 80, atk: 65, def: 65, spa: 120, spd: 75, spe: 105 },
    abilities: { 0: "Thick Skin", 1: "All-Seeing Eye", H: "Raging Sea" },
    weightkg: 165,
    eggGroups: ["Endrism"]
  },
  technophin: {
    num: 1070,
    name: "Technophin",
    types: ["Sea", "Manmade"],
    baseStats: { hp: 90, atk: 120, def: 75, spa: 65, spd: 65, spe: 95 },
    abilities: { 0: "Thick Skin", 1: "Berserker", H: "Raging Sea" },
    weightkg: 210,
    eggGroups: ["Endrism"]
  },
  beavair: {
    num: 1071,
    name: "Beavair",
    types: ["Earth", "Sky"],
    baseStats: { hp: 89, atk: 145, def: 90, spa: 25, spd: 90, spe: 91 },
    abilities: { 0: "Fluffy Float", H: "Lesspell" },
    weightkg: 6.5,
    eggGroups: ["zxgzxg"]
  },
  gyozumo: {
    num: 1073,
    name: "Gyozumo",
    baseForme: "Spring",
    types: ["Storm", "Spring"],
    baseStats: { hp: 160, atk: 110, def: 85, spa: 65, spd: 70, spe: 35 },
    abilities: { 0: "Big Bellied", H: "Arbiter" },
    weightkg: 8,
    eggGroups: ["zxgzxg"]
  },
  gyozumosummer: {
    num: 1073,
    name: "Gyozumo-Summer",
    baseSpecies: "Gyozumo",
    forme: "Summer",
    types: ["Storm", "Summer"],
    baseStats: { hp: 160, atk: 110, def: 70, spa: 35, spd: 85, spe: 65 },
    abilities: { 0: "Big Bellied", H: "Petal Body" },
    weightkg: 8,
    eggGroups: ["zxgzxg"]
  },
  onlaxy: {
    num: 1075,
    name: "Onlaxy",
    types: ["Night", "Storm"],
    baseStats: { hp: 74, atk: 144, def: 94, spa: 64, spd: 94, spe: 75 },
    abilities: { 0: "Celestial", H: "Spectral Shifter" },
    weightkg: 741.4,
    eggGroups: ["Lapzaplerq"]
  },
  infinistar: {
    num: 1076,
    name: "Infinistar",
    types: ["Night", "Storm"],
    baseStats: { hp: 74, atk: 44, def: 74, spa: 144, spd: 114, spe: 95 },
    abilities: { 0: "Celestial", H: "Contrary" },
    weightkg: 474.1,
    eggGroups: ["Lapzaplerq"]
  },
  guareye: {
    num: 1078,
    name: "Guareye",
    types: ["Autumn", "Storm"],
    baseStats: { hp: 80, atk: 85, def: 75, spa: 95, spd: 75, spe: 120 },
    abilities: { 0: "All-Seeing Eye", 1: "Rigor Mortis", H: "Storm Watch" },
    weightkg: 14.9,
    eggGroups: ["Cookie Butter"]
  },
  curuprowl: {
    num: 1080,
    name: "Curuprowl",
    types: ["Summer", "Night"],
    baseStats: { hp: 100, atk: 85, def: 100, spa: 75, spd: 100, spe: 70 },
    abilities: { 0: "Contrary", 1: "Tropical Spirit", H: "Arbiter" },
    weightkg: 81.9,
    eggGroups: ["Cookie Butter"]
  },
  fertiri: {
    num: 1081,
    name: "Fertiri",
    types: ["Earth", "Spring"],
    baseStats: { hp: 70, atk: 100, def: 110, spa: 80, spd: 80, spe: 65 },
    abilities: { 0: "Fluffy Float", H: "Big Bellied" },
    weightkg: 199.9,
    eggGroups: ["Cookie Butter"]
  },
  ruinne: {
    num: 1082,
    name: "Ruinne",
    types: ["Night", "Spring"],
    baseStats: { hp: 70, atk: 80, def: 60, spa: 110, spd: 80, spe: 105 },
    abilities: { 0: "Fluffy Float", H: "Ignorance" },
    weightkg: 79.8,
    eggGroups: ["Cookie Butter"]
  },
  tantton: {
    num: 1083,
    name: "Tantton",
    types: ["Manmade", "Serenity"],
    baseStats: { hp: 80, atk: 70, def: 90, spa: 110, spd: 90, spe: 75 },
    abilities: { 0: "Fluffy Float", 1: "Unstable", H: "Bipolar" },
    weightkg: 3,
    eggGroups: ["Cookie Butter"]
  },
  crimsoil: {
    num: 1085,
    name: "Crimsoil",
    types: ["Earth", "Summer"],
    baseStats: { hp: 60, atk: 30, def: 100, spa: 40, spd: 200, spe: 20 },
    abilities: { 0: "Reality", 1: "Shatter", H: "Sunbringer" },
    weightkg: 88,
    eggGroups: ["Cookie Butter"]
  },
  stakstok: {
    num: 1086,
    name: "Stakstok",
    types: ["Earth", "Winter"],
    baseStats: { hp: 60, atk: 40, def: 200, spa: 30, spd: 100, spe: 20 },
    abilities: { 0: "Reality", 1: "Internet Rage", H: "Infinite Scaling" },
    weightkg: 88,
    eggGroups: ["Cookie Butter"]
  },
  lychy: {
    num: 1087,
    name: "Lychy",
    types: ["Folklore"],
    baseStats: { hp: 75, atk: 125, def: 60, spa: 60, spd: 95, spe: 75 },
    abilities: { 0: "Sacrificer", 1: "Necromancer", H: "Spectral Shifter" },
    weightkg: 3.3,
    eggGroups: ["Cookie Butter"]
  },
  onigashiba: {
    num: 1088,
    name: "Onigashiba",
    types: ["Autumn", "Summer"],
    baseStats: { hp: 85, atk: 75, def: 75, spa: 110, spd: 105, spe: 40 },
    abilities: { 0: "Prudent Plow", 1: "Strategic Retreat", H: "Wave Crasher" },
    weightkg: 14.7,
    eggGroups: ["Cookie Butter"]
  },
  lunsura: {
    num: 1089,
    name: "Lunsura",
    types: ["Sea", "Night"],
    baseStats: { hp: 75, atk: 115, def: 70, spa: 95, spd: 70, spe: 95 },
    abilities: { 0: "Far Reach", H: "Contrary" },
    weightkg: 8,
    eggGroups: ["Regic Boat"]
  },
  galactagon: {
    num: 1092,
    name: "Galactagon",
    types: ["Manmade", "Storm"],
    baseStats: { hp: 80, atk: 130, def: 70, spa: 95, spd: 125, spe: 100 },
    abilities: { 0: "Starlite", 1: "Data Upgrade", H: "Regenerator" },
    weightkg: 8,
    eggGroups: ["Regic Boat"]
  },
  axolacred: {
    num: 1093,
    name: "Axolacred",
    types: ["Serenity", "Sea"],
    baseStats: { hp: 65, atk: 75, def: 100, spa: 95, spd: 115, spe: 110 },
    abilities: { 0: "Regenerator", H: "Lesspell" },
    weightkg: 8,
    eggGroups: ["Regic Boat"]
  },
  dimetrogem: {
    num: 1094,
    name: "Dimetrogem",
    types: ["Earth"],
    baseStats: { hp: 100, atk: 110, def: 115, spa: 95, spd: 65, spe: 75 },
    abilities: { 0: "Blind Rage", H: "Acrid" },
    weightkg: 8,
    eggGroups: ["Regic Boat"]
  },
  anhaflara: {
    num: 1095,
    name: "Anhaflara",
    types: ["Summer", "Sky"],
    baseStats: { hp: 110, atk: 80, def: 70, spa: 105, spd: 70, spe: 115 },
    abilities: { 0: "Infinite Scaling", H: "Arbiter" },
    weightkg: 8,
    eggGroups: ["Regic Boat"]
  },
  stormanos: {
    num: 1096,
    name: "Stormanos",
    types: ["Night", "Storm"],
    baseStats: { hp: 80, atk: 110, def: 100, spa: 85, spd: 90, spe: 100 },
    abilities: { 0: "Sacrificer", H: "Checkmate" },
    weightkg: 8,
    eggGroups: ["Regic Boat"]
  },
  alchemeel: {
    num: 1097,
    name: "Alchemeel",
    baseForme: "Base",
    types: ["Folklore", "Winter"],
    baseStats: { hp: 75, atk: 60, def: 90, spa: 60, spd: 90, spe: 110 },
    abilities: { 0: "Alchemy", H: "Snowbringer" },
    weightkg: 8,
    eggGroups: ["Regic Boat"]
  },
  alchemeeloffense: {
    num: 1097,
    name: "Alchemeel-Offense",
    baseSpecies: "Alchemeel",
    forme: "Offense",
    types: ["Folklore", "Winter"],
    baseStats: { hp: 75, atk: 100, def: 60, spa: 110, spd: 60, spe: 90 },
    abilities: { 0: "Alchemy", H: "Snowbringer" },
    weightkg: 8,
    eggGroups: ["Regic Boat"]
  },
  rasteal: {
    num: 1098,
    name: "Rasteal",
    types: ["Night"],
    baseStats: { hp: 55, atk: 84, def: 70, spa: 60, spd: 65, spe: 100 },
    abilities: { 0: "Modern Adaptation", H: "Nocturnal" },
    weightkg: 8,
    eggGroups: ["Regic Boat"]
  },
  nailberg: {
    num: 1100,
    name: "Nailberg",
    types: ["Winter", "Night"],
    baseStats: { hp: 88, atk: 115, def: 89, spa: 110, spd: 89, spe: 95 },
    abilities: { 0: "Non-Believer", 1: "Unstable", H: "Reality" },
    weightkg: 560,
    eggGroups: ["Moretto"]
  },
  hoolican: {
    num: 1102,
    name: "Hoolican",
    types: ["Sky", "Storm"],
    baseStats: { hp: 70, atk: 80, def: 72, spa: 120, spd: 78, spe: 110 },
    abilities: { 0: "Glide", 1: "Scavenge", H: "Storm Watch" },
    weightkg: 13.5,
    eggGroups: ["Double Iron Bash"]
  },
  anchorage: {
    num: 1105,
    name: "Anchorage",
    types: ["Sea", "Manmade"],
    baseStats: { hp: 90, atk: 135, def: 100, spa: 70, spd: 100, spe: 45 },
    abilities: { 0: "Berserker", 1: "Shatter", H: "Raging Sea" },
    weightkg: 428.1,
    eggGroups: ["Double Iron Bash"]
  },
  nosferanguis: {
    num: 1108,
    name: "Nosferanguis",
    types: ["Earth", "Night"],
    baseStats: { hp: 130, atk: 90, def: 100, spa: 85, spd: 70, spe: 60 },
    abilities: { 0: "Nocturnal", 1: "Regenerator", H: "Rigor Mortis" },
    weightkg: 42.3,
    eggGroups: ["Double Iron Bash"]
  },
  pontiac: {
    num: 1109,
    name: "Pontiac",
    types: ["Folklore", "Summer"],
    baseStats: { hp: 60, atk: 75, def: 95, spa: 120, spd: 95, spe: 110 },
    abilities: { 0: "Rebirth" },
    weightkg: 16.4,
    eggGroups: ["Double Iron Bash"]
  },
  sclam: {
    num: 1111,
    name: "Sclam",
    types: ["Sea"],
    baseStats: { hp: 80, atk: 85, def: 120, spa: 75, spd: 100, spe: 40 },
    abilities: { 0: "Strategic Retreat", 1: "Ignorance", H: "Checkmate" },
    weightkg: 226.7,
    eggGroups: ["Double Iron Bash"]
  },
  cicaguren: {
    num: 1113,
    name: "Cicaguren",
    types: ["Summer"],
    baseStats: { hp: 95, atk: 123, def: 85, spa: 101, spd: 70, spe: 81 },
    abilities: { 0: "Courageous", H: "Steadfast" },
    weightkg: 96,
    eggGroups: ["Bloopyghost"]
  },
  // bozunami: {
  // num: 1115,
  // name: "Bozunami",
  // types: ["Sea", "Folklore"],
  // baseStats: {hp: 120, atk: 70, def: 70, spa: 110, spd: 100, spe: 35},
  // abilities: {0: "Raging Sea", H: "Winter Coat"},
  // weightkg: 300,
  // eggGroups: ["Bloopyghost"],
  // },
  // cryptice: {
  // num: 1116,
  // name: "Cryptice",
  // types: ["Winter", "Folklore"],
  // baseStats: {hp: 90, atk: 70, def: 70, spa: 100, spd: 90, spe: 85},
  // abilities: {0: "Raging Sea", H: "Winter Coat"},
  // weightkg: 150,
  // eggGroups: ["Bloopyghost"],
  // },
  mekangiras: {
    num: 1117,
    name: "Mekangiras",
    types: ["Manmade"],
    baseStats: { hp: 100, atk: 95, def: 120, spa: 135, spd: 60, spe: 40 },
    abilities: { 0: "Burnout" },
    weightkg: 500,
    eggGroups: ["Bloopyghost"]
  },
  mononokero: {
    num: 1118,
    name: "Mononokero",
    types: ["Folklore", "Autumn"],
    baseStats: { hp: 80, atk: 100, def: 60, spa: 110, spd: 120, spe: 70 },
    abilities: { 0: "Absorptive", H: "Jack-O'" },
    weightkg: 37.6,
    eggGroups: ["Bloopyghost"]
  },
  surfright: {
    num: 1119,
    name: "Surfright",
    types: ["Sea", "Night"],
    baseStats: { hp: 90, atk: 90, def: 100, spa: 90, spd: 65, spe: 95 },
    abilities: { 0: "Burning Rage", H: "Tropical Spirit" },
    weightkg: 24,
    eggGroups: ["Bloopyghost"]
  },
  potsworth: {
    num: 1120,
    name: "Potsworth",
    types: ["Earth"],
    baseStats: { hp: 84, atk: 84, def: 104, spa: 64, spd: 64, spe: 64 },
    abilities: { 0: "Contrary" },
    weightkg: 50,
    eggGroups: ["Bloopyghost"]
  },
  cloudim: {
    num: 1121,
    name: "Cloudim",
    types: ["Storm", "Sky"],
    baseStats: { hp: 110, atk: 55, def: 105, spa: 65, spd: 90, spe: 70 },
    abilities: { 0: "Ataraxia", 1: "Blind Rage", H: "Counterswirl" },
    weightkg: 777,
    eggGroups: ["Bloopyghost"]
  },
  salamoon: {
    num: 1122,
    name: "Salamoon",
    baseForme: "Base",
    types: ["Spring", "Night"],
    baseStats: { hp: 65, atk: 65, def: 90, spa: 85, spd: 115, spe: 80 },
    abilities: { 0: "Magi-Morph" },
    weightkg: 48.4,
    eggGroups: ["Bloopyghost"]
  },
  salamoonallegro: {
    num: 1122,
    name: "Salamoon-Allegro",
    baseSpecies: "Salamoon",
    forme: "Allegro",
    types: ["Spring", "Night"],
    baseStats: { hp: 65, atk: 65, def: 65, spa: 115, spd: 80, spe: 110 },
    abilities: { 0: "Magi-Morph" },
    weightkg: 50.4,
    eggGroups: ["Bloopyghost"]
  },
  gokaeru: {
    num: 1123,
    name: "Gokaeru",
    types: ["Folklore", "Night"],
    baseStats: { hp: 85, atk: 95, def: 85, spa: 115, spd: 70, spe: 130 },
    abilities: { 0: "Transcription" },
    weightkg: 80,
    eggGroups: ["Bloopyghost"]
  },
  himekuji: {
    num: 1124,
    name: "Himekuji",
    types: ["Folklore", "Serenity"],
    baseStats: { hp: 85, atk: 85, def: 115, spa: 95, spd: 130, spe: 70 },
    abilities: { 0: "Blessed" },
    weightkg: 50,
    eggGroups: ["Bloopyghost"]
  },
  guroteserp: {
    num: 1125,
    name: "Guroteserp",
    types: ["Folklore", "Storm"],
    baseStats: { hp: 95, atk: 130, def: 85, spa: 115, spd: 85, spe: 70 },
    abilities: { 0: "Blight Boost" },
    weightkg: 400,
    eggGroups: ["Bloopyghost"]
  },
  galaxea: {
    num: 1126,
    name: "Galaxea",
    baseForme: "Base",
    types: ["Sky", "Sea"],
    baseStats: { hp: 100, atk: 85, def: 95, spa: 90, spd: 95, spe: 105 },
    abilities: { 0: "Hot Feet", H: "Wave Crasher" },
    weightkg: 8,
    eggGroups: ["Cookie Butter"]
  },
  galaxeacomplete: {
    num: 1126,
    name: "Galaxea-Complete",
    baseSpecies: "Galaxea",
    forme: "Complete",
    types: ["Sky", "Sea"],
    baseStats: { hp: 110, atk: 95, def: 125, spa: 120, spd: 135, spe: 85 },
    abilities: { 0: "Thick Skin" },
    weightkg: 8,
    eggGroups: ["Cookie Butter"]
  },
  pegathemum: {
    num: 1127,
    name: "Pegathemum",
    baseForme: "Base",
    types: ["Sky", "Spring"],
    baseStats: { hp: 100, atk: 90, def: 105, spa: 85, spd: 95, spe: 95 },
    abilities: { 0: "Sub Rosa", H: "Tropical Spirit" },
    weightkg: 8,
    eggGroups: ["Cookie Butter"]
  },
  pegathemumcomplete: {
    num: 1127,
    name: "Pegathemum-Complete",
    baseSpecies: "Pegathemum",
    forme: "Complete",
    types: ["Sky", "Spring"],
    baseStats: { hp: 145, atk: 110, def: 115, spa: 90, spd: 105, spe: 105 },
    abilities: { 0: "Sub Rosa" },
    weightkg: 8,
    eggGroups: ["Cookie Butter"]
  },
  cyrome: {
    num: 1128,
    name: "Cyrome",
    baseForme: "Page",
    types: ["Manmade", "Folklore"],
    baseStats: { hp: 58, atk: 28, def: 68, spa: 92, spd: 78, spe: 18 },
    abilities: { 0: "Critique" },
    weightkg: 8,
    eggGroups: ["Scoopapa"]
  },
  cyromebook: {
    num: 1128,
    name: "Cyrome-Book",
    baseSpecies: "Cyrome",
    forme: "Book",
    types: ["Manmade", "Folklore"],
    baseStats: { hp: 78, atk: 34, def: 82, spa: 117, spd: 96, spe: 28 },
    abilities: { 0: "Critique" },
    weightkg: 8,
    eggGroups: ["Scoopapa"]
  },
  cyromescribe: {
    num: 1128,
    name: "Cyrome-Scribe",
    baseSpecies: "Cyrome",
    forme: "Scribe",
    types: ["Manmade", "Folklore"],
    baseStats: { hp: 78, atk: 79, def: 82, spa: 117, spd: 86, spe: 93 },
    abilities: { 0: "Critique" },
    weightkg: 8,
    eggGroups: ["Scoopapa"]
  },
  cyromeauthor: {
    num: 1128,
    name: "Cyrome-Author",
    baseSpecies: "Cyrome",
    forme: "Author",
    types: ["Manmade", "Folklore"],
    baseStats: { hp: 98, atk: 114, def: 91, spa: 142, spd: 114, spe: 121 },
    abilities: { 0: "Critique" },
    weightkg: 8,
    eggGroups: ["Scoopapa"]
  },
  darkira: {
    num: 1129,
    name: "Darkira",
    baseForme: "Base",
    types: ["Night", "Storm"],
    baseStats: { hp: 150, atk: 100, def: 70, spa: 100, spd: 70, spe: 75 },
    abilities: { 0: "Burning Rage" },
    weightkg: 8,
    eggGroups: ["Scoopapa"]
  },
  darkiraancient: {
    num: 1129,
    name: "Darkira-Ancient",
    baseSpecies: "Darkira",
    forme: "Ancient",
    types: ["Night", "Storm"],
    baseStats: { hp: 150, atk: 130, def: 90, spa: 130, spd: 90, spe: 90 },
    abilities: { 0: "Burning Rage" },
    weightkg: 8,
    eggGroups: ["Scoopapa"]
  },
  lakera: {
    num: 1130,
    name: "Lakera",
    baseForme: "Base",
    types: ["Serenity"],
    baseStats: { hp: 75, atk: 95, def: 80, spa: 75, spd: 125, spe: 115 },
    abilities: { 0: "Ataraxia" },
    weightkg: 8,
    eggGroups: ["Scoopapa"]
  },
  lakeraancient: {
    num: 1130,
    name: "Lakera-Ancient",
    baseSpecies: "Lakera",
    forme: "Ancient",
    types: ["Serenity"],
    baseStats: { hp: 75, atk: 105, def: 130, spa: 125, spd: 130, spe: 115 },
    abilities: { 0: "Ataraxia" },
    weightkg: 8,
    eggGroups: ["Scoopapa"]
  },
  mew30: {
    num: 1131,
    name: "Mew 3.0",
    types: ["Manmade"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Nanobarrier" },
    weightkg: 8,
    eggGroups: ["AquaticPanic"]
  },
  solamateru: {
    num: 1132,
    name: "Solamateru",
    types: ["Summer", "Winter"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Steadfast" },
    weightkg: 7.2,
    eggGroups: ["Bloopyghost"]
  },
  jirachiextreme: {
    num: 1133,
    name: "Jirachi-Extreme",
    baseSpecies: "Jirachi",
    forme: "Extreme",
    types: ["Serenity", "Night"],
    baseStats: { hp: 101, atk: 89, def: 101, spa: 89, spd: 101, spe: 89 },
    abilities: { 0: "Beast Boost" },
    weightkg: 8,
    eggGroups: ["Cookie Butter"]
  },
  extremeribbit: {
    num: 1134,
    name: "Extreme Ribbit",
    types: ["Spring"],
    gender: "N",
    baseStats: { hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50 },
    abilities: { 0: "Big Bellied" },
    heightm: 0.3,
    weightkg: 4.5,
    color: "Gray",
    eggGroups: ["Undiscovered"]
  }
};
//# sourceMappingURL=pokedex.js.map
