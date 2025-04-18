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
  folovo: {
    num: 1001,
    name: "Folovo",
    types: ["Grass"],
    baseStats: { hp: 40, atk: 67, def: 40, spa: 48, spd: 40, spe: 75 },
    abilities: { 0: "Overgrow", H: "Swift Swim" },
    weightkg: 5,
    evos: ["Sworchid"]
  },
  sworchid: {
    num: 1002,
    name: "Sworchid",
    types: ["Grass", "Fighting"],
    baseStats: { hp: 60, atk: 97, def: 49, spa: 70, spd: 49, spe: 95 },
    abilities: { 0: "Overgrow", H: "Swift Swim" },
    weightkg: 14,
    prevo: "Folovo",
    evoLevel: 16,
    evos: ["Esplada"]
  },
  esplada: {
    num: 1003,
    name: "Esplada",
    types: ["Grass", "Fighting"],
    baseStats: { hp: 80, atk: 112, def: 69, spa: 80, spd: 69, spe: 120 },
    abilities: { 0: "Overgrow", H: "Swift Swim" },
    weightkg: 26,
    prevo: "Sworchid",
    evoLevel: 34,
    otherFormes: ["Esplada-Mega"],
    formeOrder: ["Esplada", "Esplada-Mega"]
  },
  espladamega: {
    num: 1003,
    name: "Esplada-Mega",
    baseSpecies: "Esplada",
    forme: "Mega",
    types: ["Grass", "Fighting"],
    baseStats: { hp: 80, atk: 132, def: 79, spa: 130, spd: 79, spe: 130 },
    abilities: { 0: "Mold Breaker" },
    heightm: 1.4,
    weightkg: 33.3,
    requiredItem: "Espladite"
  },
  peepin: {
    num: 1004,
    name: "Peepin",
    types: ["Fire"],
    baseStats: { hp: 40, atk: 45, def: 60, spa: 70, spd: 45, spe: 50 },
    abilities: { 0: "Blaze", H: "Punk Rock" },
    weightkg: 1.7,
    evos: ["Scareech"]
  },
  scareech: {
    num: 1005,
    name: "Scareech",
    types: ["Fire", "Flying"],
    baseStats: { hp: 50, atk: 61, def: 80, spa: 94, spd: 70, spe: 65 },
    abilities: { 0: "Blaze", H: "Punk Rock" },
    weightkg: 10,
    prevo: "Peepin",
    evoLevel: 16,
    evos: ["Macawphony"]
  },
  macawphony: {
    num: 1006,
    name: "Macawphony",
    types: ["Fire", "Flying"],
    baseStats: { hp: 70, atk: 71, def: 100, spa: 124, spd: 80, spe: 85 },
    abilities: { 0: "Blaze", H: "Punk Rock" },
    weightkg: 30,
    prevo: "Scareech",
    evoLevel: 34,
    otherFormes: ["Macawphony-Mega"],
    formeOrder: ["Macawphony", "Macawphony-Mega"]
  },
  macawphonymega: {
    num: 1006,
    name: "Macawphony-Mega",
    baseSpecies: "Macawphony",
    forme: "Mega",
    types: ["Fire", "Flying"],
    baseStats: { hp: 70, atk: 127, def: 140, spa: 124, spd: 80, spe: 89 },
    abilities: { 0: "Moxie" },
    heightm: 1.6,
    weightkg: 55.5,
    requiredItem: "Macawphite"
  },
  pescafin: {
    num: 1007,
    name: "Pescafin",
    types: ["Water"],
    baseStats: { hp: 50, atk: 61, def: 72, spa: 41, spd: 40, spe: 46 },
    abilities: { 0: "Torrent", H: "Rock Head" },
    weightkg: 6,
    evos: ["Pedrowana"]
  },
  pedrowana: {
    num: 1008,
    name: "Pedrowana",
    types: ["Water", "Rock"],
    baseStats: { hp: 70, atk: 81, def: 92, spa: 61, spd: 50, spe: 66 },
    abilities: { 0: "Torrent", H: "Rock Head" },
    weightkg: 20,
    prevo: "Pescafin",
    evoLevel: 16,
    evos: ["Arapaitan"]
  },
  arapaitan: {
    num: 1009,
    name: "Arapaitan",
    types: ["Water", "Rock"],
    baseStats: { hp: 90, atk: 101, def: 122, spa: 81, spd: 60, spe: 76 },
    abilities: { 0: "Torrent", H: "Rock Head" },
    weightkg: 80,
    prevo: "Pedrowana",
    evoLevel: 34,
    otherFormes: ["Arapaitan-Mega"],
    formeOrder: ["Arapaitan", "Arapaitan-Mega"]
  },
  arapaitanmega: {
    num: 1009,
    name: "Arapaitan-Mega",
    baseSpecies: "Arapaitan",
    forme: "Mega",
    types: ["Water", "Rock"],
    baseStats: { hp: 90, atk: 149, def: 122, spa: 81, spd: 122, spe: 66 },
    abilities: { 0: "Sap Sipper" },
    heightm: 2.5,
    weightkg: 110,
    requiredItem: "Arapaitanite"
  },
  brazube: {
    num: 1010,
    name: "Brazube",
    types: ["Normal", "Poison"],
    baseStats: { hp: 55, atk: 50, def: 60, spa: 20, spd: 45, spe: 20 },
    abilities: { 0: "Poison Point", 1: "Rough Skin", H: "Poison Touch" },
    weightkg: 1,
    evos: ["Brazupine"]
  },
  brazupine: {
    num: 1011,
    name: "Brazupine",
    types: ["Normal", "Poison"],
    baseStats: { hp: 80, atk: 80, def: 100, spa: 40, spd: 70, spe: 80 },
    abilities: { 0: "Poison Point", 1: "Rough Skin", H: "Poison Touch" },
    weightkg: 20,
    prevo: "Brazube",
    evoLevel: 20
  },
  plumgall: {
    num: 1012,
    name: "Plumgall",
    types: ["Flying"],
    baseStats: { hp: 41, atk: 52, def: 44, spa: 32, spd: 37, spe: 39 },
    abilities: { 0: "Early Bird", 1: "Rattled", H: "Fluffy" },
    weightkg: 25,
    evos: ["Secrehen"]
  },
  secrehen: {
    num: 1013,
    name: "Secrehen",
    types: ["Flying"],
    baseStats: { hp: 51, atk: 77, def: 64, spa: 42, spd: 52, spe: 59 },
    abilities: { 0: "Early Bird", 1: "Rattled", H: "Fluffy" },
    weightkg: 25,
    prevo: "Plumgall",
    evoLevel: 17,
    evos: ["Mourhen"]
  },
  mourhen: {
    num: 1014,
    name: "Mourhen",
    types: ["Flying", "Ghost"],
    baseStats: { hp: 71, atk: 122, def: 94, spa: 52, spd: 72, spe: 89 },
    abilities: { 0: "Infiltrator", 1: "Unnerve", H: "Fluffy" },
    weightkg: 25,
    prevo: "Secrehen",
    evoLevel: 32
  },
  citruff: {
    num: 1015,
    name: "Citruff",
    types: ["Dark", "Grass"],
    baseStats: { hp: 30, atk: 40, def: 30, spa: 70, spd: 40, spe: 40 },
    abilities: { 0: "Cute Charm", 1: "Harvest", H: "Natural Cure" },
    weightkg: 25,
    evos: ["Citrark"]
  },
  citrark: {
    num: 1016,
    name: "Citrark",
    types: ["Dark", "Grass"],
    baseStats: { hp: 75, atk: 70, def: 60, spa: 125, spd: 70, spe: 80 },
    abilities: { 0: "Cute Charm", 1: "Harvest", H: "Natural Cure" },
    weightkg: 25,
    prevo: "Citruff",
    evoLevel: 23
  },
  civiliant: {
    num: 1017,
    name: "Civiliant",
    types: ["Bug"],
    baseStats: { hp: 35, atk: 20, def: 30, spa: 20, spd: 30, spe: 50 },
    abilities: { 0: "Swarm", H: "Run Away" },
    weightkg: 2.5,
    evos: ["Escudant"]
  },
  escudant: {
    num: 1018,
    name: "Escudant",
    types: ["Bug", "Fighting"],
    baseStats: { hp: 60, atk: 40, def: 75, spa: 40, spd: 75, spe: 55 },
    abilities: { 0: "Swarm", H: "Bulletproof" },
    weightkg: 9,
    prevo: "Civiliant",
    evoLevel: 12,
    evos: ["Formigavor", "Formigavel"]
  },
  formigavor: {
    num: 1019,
    name: "Formigavor",
    types: ["Bug", "Fighting"],
    gender: "F",
    baseStats: { hp: 75, atk: 60, def: 80, spa: 110, spd: 95, spe: 90 },
    abilities: { 0: "Swarm", H: "Compound Eyes" },
    weightkg: 55,
    prevo: "Escudant",
    evoLevel: 30
  },
  formigavel: {
    num: 1020,
    name: "Formigavel",
    types: ["Bug", "Fighting"],
    gender: "M",
    baseStats: { hp: 75, atk: 110, def: 95, spa: 60, spd: 80, spe: 90 },
    abilities: { 0: "Swarm", H: "Skill Link" },
    weightkg: 70,
    prevo: "Escudant",
    evoLevel: 30
  },
  souarente: {
    num: 1021,
    name: "Souarente",
    types: ["Grass"],
    baseStats: { hp: 35, atk: 40, def: 80, spa: 55, spd: 70, spe: 30 },
    abilities: { 0: "Volt Absorb", H: "Solar Power" },
    weightkg: 3,
    evos: ["Pequetal"]
  },
  pequetal: {
    num: 1022,
    name: "Pequetal",
    types: ["Grass", "Electric"],
    baseStats: { hp: 55, atk: 50, def: 85, spa: 90, spd: 90, spe: 40 },
    abilities: { 0: "Volt Absorb", H: "Solar Power" },
    weightkg: 7,
    prevo: "Souarente",
    evoLevel: 16,
    evos: ["Florapago"]
  },
  florapago: {
    num: 1023,
    name: "Florapago",
    types: ["Grass", "Electric"],
    baseStats: { hp: 85, atk: 60, def: 100, spa: 110, spd: 105, spe: 50 },
    abilities: { 0: "Volt Absorb", H: "Solar Power" },
    weightkg: 30,
    prevo: "Pequetal",
    evoType: "useItem",
    evoItem: "Thunder Stone"
  },
  alumane: {
    num: 1024,
    name: "Alumane",
    types: ["Steel"],
    baseStats: { hp: 35, atk: 55, def: 65, spa: 30, spd: 35, spe: 75 },
    abilities: { 0: "Technician", 1: "Volt Absorb", H: "Light Metal" },
    weightkg: 10,
    evos: ["Silicyon"]
  },
  silicyon: {
    num: 1025,
    name: "Silicyon",
    types: ["Steel"],
    baseStats: { hp: 55, atk: 100, def: 115, spa: 50, spd: 60, spe: 130 },
    abilities: { 0: "Technician", 1: "Volt Absorb", H: "Light Metal" },
    weightkg: 30,
    prevo: "Alumane",
    evoLevel: 25
  },
  oncuja: {
    num: 1026,
    name: "Oncuja",
    types: ["Grass", "Ghost"],
    baseStats: { hp: 65, atk: 103, def: 63, spa: 61, spd: 81, spe: 121 },
    abilities: { 0: "Infiltrator", 1: "Insomnia", H: "Grass Pelt" },
    weightkg: 30
  },
  oricorio: {
    inherit: true,
    otherFormes: ["Oricorio-Pom-Pom", "Oricorio-Pa'u", "Oricorio-Sensu", "Oricorio-Brazdo"],
    formeOrder: ["Oricorio", "Oricorio-Pom-Pom", "Oricorio-Pa'u", "Oricorio-Sensu", "Oricorio-Brazdo"]
  },
  oricoriobrazdo: {
    num: 741,
    name: "Oricorio-Brazdo",
    baseSpecies: "Oricorio",
    forme: "Brazdo",
    types: ["Fighting", "Flying"],
    genderRatio: { M: 0.25, F: 0.75 },
    baseStats: { hp: 65, atk: 98, def: 70, spa: 70, spd: 70, spe: 103 },
    abilities: { 0: "Dancer" },
    heightm: 0.6,
    weightkg: 3.4,
    color: "Brown",
    eggGroups: ["Flying"]
  },
  sapeetle: {
    num: 1027,
    name: "Sapeetle",
    types: ["Bug"],
    baseStats: { hp: 50, atk: 60, def: 100, spa: 35, spd: 55, spe: 40 },
    abilities: { 0: "Shell Armor", 1: "Sap Sipper", H: "Oblivious" },
    weightkg: 10,
    evos: ["Carapex"]
  },
  carapex: {
    num: 1028,
    name: "Carapex",
    types: ["Bug", "Flying"],
    baseStats: { hp: 70, atk: 90, def: 140, spa: 55, spd: 80, spe: 70 },
    abilities: { 0: "Shell Armor", 1: "Sap Sipper", H: "Wind Blaster" },
    weightkg: 30,
    prevo: "Sapeetle",
    evoLevel: 23
  },
  parasbrazdo: {
    num: 46,
    name: "Paras-Brazdo",
    baseSpecies: "Paras",
    forme: "Brazdo",
    types: ["Psychic", "Bug"],
    baseStats: { hp: 35, atk: 45, def: 55, spa: 70, spd: 55, spe: 25 },
    abilities: { 0: "Keen Eye", 1: "Insomnia", H: "Analytic" },
    heightm: 0.3,
    weightkg: 5.4,
    evos: ["Parasect-Brazdo"]
  },
  parasectbrazdo: {
    num: 47,
    name: "Parasect-Brazdo",
    baseSpecies: "Parasect",
    forme: "Brazdo",
    types: ["Psychic", "Poison"],
    baseStats: { hp: 60, atk: 60, def: 80, spa: 95, spd: 80, spe: 30 },
    abilities: { 0: "Compound Eyes", 1: "Piercing Vision", H: "Analytic" },
    heightm: 0.5,
    weightkg: 20.5,
    prevo: "Paras-Brazdo",
    evoLevel: 24,
    evos: ["Parascend"]
  },
  parascend: {
    num: 1029,
    name: "Parascend",
    types: ["Psychic", "Poison"],
    baseStats: { hp: 80, atk: 70, def: 80, spa: 140, spd: 110, spe: 40 },
    abilities: { 0: "Compound Eyes", 1: "Piercing Vision", H: "Analytic" },
    heightm: 1.4,
    weightkg: 35,
    prevo: "Parasect-Brazdo",
    evoLevel: 36
  },
  paras: {
    inherit: true,
    otherFormes: ["Paras-Brazdo"],
    formeOrder: ["Paras", "Paras-Brazdo"]
  },
  parasect: {
    inherit: true,
    otherFormes: ["Parasect-Brazdo"],
    formeOrder: ["Parasect", "Parasect-Brazdo"]
  },
  rikomoco: {
    num: 1030,
    name: "Rikomoco",
    types: ["Electric", "Rock"],
    baseStats: { hp: 57, atk: 41, def: 87, spa: 93, spd: 56, spe: 97 },
    abilities: { 0: "Pickup", 1: "Stone House", H: "Motor Drive" },
    weightkg: 29.5
  },
  jujitzu: {
    num: 1031,
    name: "Jujitzu",
    types: ["Fighting"],
    baseStats: { hp: 80, atk: 110, def: 70, spa: 50, spd: 70, spe: 95 },
    abilities: { 0: "Long Reach", H: "Patience" },
    weightkg: 29.5
  },
  humbat: {
    num: 1032,
    name: "Humbat",
    types: ["Normal", "Flying"],
    baseStats: { hp: 35, atk: 35, def: 45, spa: 60, spd: 45, spe: 60 },
    abilities: { 0: "Frisk", 1: "Oblivious", H: "Hustle" },
    weightkg: 29.5,
    evos: ["Sensat"]
  },
  sensat: {
    num: 1033,
    name: "Sensat",
    types: ["Psychic", "Flying"],
    baseStats: { hp: 50, atk: 45, def: 50, spa: 80, spd: 65, spe: 90 },
    abilities: { 0: "Frisk", 1: "Oblivious", H: "Tinted Lens" },
    weightkg: 29.5,
    prevo: "Humbat",
    evoLevel: 22,
    evos: ["Echologos"]
  },
  echologos: {
    num: 1034,
    name: "Echologos",
    types: ["Psychic", "Flying"],
    baseStats: { hp: 60, atk: 60, def: 70, spa: 100, spd: 90, spe: 110 },
    abilities: { 0: "Frisk", 1: "Oblivious", H: "Tinted Lens" },
    weightkg: 29.5,
    prevo: "Sensat",
    evoLevel: 32
  },
  topaca: {
    num: 1035,
    name: "Topaca",
    types: ["Ground", "Rock"],
    baseStats: { hp: 55, atk: 76, def: 51, spa: 43, spd: 45, spe: 70 },
    abilities: { 0: "Sand Veil", 1: "Solid Rock", H: "Clear Body" },
    hieghtm: 0.3,
    weightkg: 12,
    evos: ["Pacavarice"],
    eggGroups: ["Field"]
  },
  pacavarice: {
    num: 1036,
    name: "Pacavarice",
    types: ["Ground", "Rock"],
    baseStats: { hp: 75, atk: 116, def: 71, spa: 63, spd: 65, spe: 110 },
    abilities: { 0: "Sand Force", 1: "Solid Rock", H: "Clear Body" },
    heightm: 0.7,
    weightkg: 30,
    prevo: "Topaca",
    evoLevel: 29,
    eggGroups: ["Field"]
  },
  gelobite: {
    num: 1037,
    name: "Gelobite",
    types: ["Ice", "Ground"],
    baseStats: { hp: 35, atk: 30, def: 30, spa: 55, spd: 40, spe: 60 },
    abilities: { 0: "Storm Drain", 1: "Ice Body", H: "Hydration" },
    weightkg: 1.5,
    evos: ["Lagelto"]
  },
  lagelto: {
    num: 1038,
    name: "Lagelto",
    types: ["Ice", "Ground"],
    baseStats: { hp: 60, atk: 50, def: 45, spa: 90, spd: 60, spe: 95 },
    abilities: { 0: "Storm Drain", 1: "Ice Body", H: "Hydration" },
    weightkg: 22,
    prevo: "Gelobite",
    evoLevel: 20,
    evoCondition: "in a cave",
    evos: ["Gelomandra"]
  },
  gelomandra: {
    num: 1039,
    name: "Gelomandra",
    types: ["Ice", "Ground"],
    baseStats: { hp: 80, atk: 65, def: 60, spa: 120, spd: 75, spe: 110 },
    abilities: { 0: "Storm Drain", 1: "Ice Body", H: "Hydration" },
    weightkg: 50,
    prevo: "Lagelto",
    evoLevel: 40,
    evoCondition: "under rain"
  },
  miniatorch: {
    num: 1040,
    name: "Miniatorch",
    types: ["Fire", "Steel"],
    baseStats: { hp: 50, atk: 50, def: 70, spa: 70, spd: 50, spe: 30 },
    abilities: { 0: "Sturdy", 1: "Flash Fire", H: "Light Metal" },
    weightkg: 25,
    evos: ["Blastorch"]
  },
  blastorch: {
    num: 1041,
    name: "Blastorch",
    types: ["Fire", "Steel"],
    baseStats: { hp: 80, atk: 70, def: 110, spa: 110, spd: 70, spe: 40 },
    abilities: { 0: "Sturdy", 1: "Flash Fire", H: "Light Metal" },
    weightkg: 25,
    prevo: "Miniatorch",
    evoLevel: 30
  },
  wakitty: {
    num: 1042,
    name: "Wakitty",
    types: ["Ice"],
    baseStats: { hp: 42, atk: 60, def: 40, spa: 60, spd: 40, spe: 73 },
    abilities: { 0: "Snow Cloak", 1: "Slush Rush", H: "Cute Charm" },
    weightkg: 4,
    evos: ["Cougaquil", "Jagaska"]
  },
  cougaquil: {
    num: 1043,
    name: "Cougaquil",
    types: ["Ice", "Electric"],
    baseStats: { hp: 70, atk: 112, def: 70, spa: 90, spd: 60, spe: 113 },
    abilities: { 0: "Snow Cloak", 1: "Slush Rush", H: "Moxie" },
    weightkg: 60,
    prevo: "Wakitty",
    evoType: "levelFriendship",
    evoCondition: "during the day"
  },
  jagaska: {
    num: 1044,
    name: "Jagaska",
    types: ["Ice", "Dark"],
    baseStats: { hp: 70, atk: 90, def: 60, spa: 112, spd: 70, spe: 113 },
    abilities: { 0: "Snow Cloak", 1: "Slush Rush", H: "Prowess" },
    weightkg: 75,
    prevo: "Wakitty",
    evoType: "levelFriendship",
    evoCondition: "at night"
  },
  cruchick: {
    num: 1045,
    name: "Cruchick",
    types: ["Ice", "Poison"],
    baseStats: { hp: 80, atk: 33, def: 65, spa: 43, spd: 70, spe: 34 },
    abilities: { 0: "Corrosion", 1: "Refrigerate", H: "Merciless" },
    weightkg: 25,
    evos: ["Pengroleum"]
  },
  pengroleum: {
    num: 1046,
    name: "Pengroleum",
    types: ["Ice", "Poison"],
    baseStats: { hp: 115, atk: 63, def: 100, spa: 78, spd: 105, spe: 64 },
    abilities: { 0: "Corrosion", 1: "Refrigerate", H: "Merciless" },
    weightkg: 25,
    prevo: "Cruchick",
    evoLevel: 34
  },
  gifsterious: {
    num: 1047,
    name: "Gifsterious",
    types: ["Normal"],
    baseStats: { hp: 90, atk: 90, def: 90, spa: 90, spd: 90, spe: 90 },
    abilities: { 0: "Thoughtful" },
    weightkg: 25
  },
  carvanhabrazdo: {
    num: 318,
    name: "Carvanha-Brazdo",
    baseSpecies: "Carvanha",
    forme: "Brazdo",
    types: ["Water", "Fire"],
    baseStats: { hp: 45, atk: 85, def: 20, spa: 55, spd: 20, spe: 80 },
    abilities: { 0: "Strong Jaw", 1: "Swift Swim", H: "Flame Body" },
    weightkg: 15,
    evos: ["Vampayrha"]
  },
  vampayrha: {
    num: 1048,
    name: "Vampayrha",
    types: ["Water", "Fire"],
    baseStats: { hp: 70, atk: 115, def: 40, spa: 85, spd: 40, spe: 110 },
    abilities: { 0: "Strong Jaw", 1: "Swift Swim", H: "Flame Body" },
    weightkg: 50,
    prevo: "Carvanha-Brazdo",
    evoLevel: 30
  },
  carvanha: {
    inherit: true,
    otherFormes: ["Carvanha-Brazdo"],
    formeOrder: ["Carvanha", "Carvanha-Brazdo"]
  },
  toazin: {
    num: 1049,
    name: "Toazin",
    types: ["Poison", "Flying"],
    baseStats: { hp: 40, atk: 71, def: 47, spa: 30, spd: 45, spe: 52 },
    abilities: { 0: "Stench", 1: "Tough Claws", H: "Swift Swim" },
    heightm: 0.4,
    weightkg: 0.8,
    evos: ["Opisthoclaw"],
    eggGroups: ["Flying"]
  },
  opisthoclaw: {
    num: 1050,
    name: "Opisthoclaw",
    types: ["Poison", "Flying"],
    baseStats: { hp: 70, atk: 111, def: 77, spa: 60, spd: 75, spe: 82 },
    abilities: { 0: "Stench", 1: "Tough Claws", H: "Swift Swim" },
    heightm: 1.3,
    weightkg: 20,
    prevo: "Toazin",
    evoLevel: 27,
    eggGroups: ["Flying"]
  },
  hippopotasbrazdo: {
    num: 449,
    name: "Hippopotas-Brazdo",
    baseSpecies: "Hippopotas",
    forme: "Brazdo",
    types: ["Water"],
    baseStats: { hp: 68, atk: 72, def: 68, spa: 38, spd: 42, spe: 42 },
    abilities: { 0: "Gluttony", H: "Hydration" },
    weightkg: 50,
    evos: ["Hippowdon-Brazdo"]
  },
  hippowdonbrazdo: {
    num: 450,
    name: "Hippowdon-Brazdo",
    baseSpecies: "Hippowdon",
    forme: "Brazdo",
    types: ["Water", "Fighting"],
    baseStats: { hp: 108, atk: 122, def: 98, spa: 68, spd: 62, spe: 67 },
    abilities: { 0: "Strong Jaw", H: "Hydration" },
    weightkg: 300,
    prevo: "Hippopotas-Brazdo",
    evoLevel: 34
  },
  hippopotas: {
    inherit: true,
    otherFormes: ["Hippopotas-Brazdo"],
    formeOrder: ["Hippopotas", "Hippopotas-Brazdo"]
  },
  hippowdon: {
    inherit: true,
    otherFormes: ["Hippowdon-Brazdo"],
    formeOrder: ["Hippowdon", "Hippowdon-Brazdo"]
  },
  finneonbrazdo: {
    num: 456,
    name: "Finneon-Brazdo",
    baseSpecies: "Finneon",
    forme: "Brazdo",
    types: ["Fairy", "Fighting"],
    baseStats: { hp: 39, atk: 69, def: 46, spa: 39, spd: 51, spe: 86 },
    abilities: { 0: "Dazzling", 1: "Swift Swim", H: "Water Veil" },
    weightkg: 7,
    evos: ["Lumineon-Brazdo"]
  },
  lumineonbrazdo: {
    num: 457,
    name: "Lumineon-Brazdo",
    baseSpecies: "Lumineon",
    forme: "Brazdo",
    types: ["Fairy", "Fighting"],
    baseStats: { hp: 59, atk: 89, def: 66, spa: 59, spd: 76, spe: 111 },
    abilities: { 0: "Dazzling", 1: "Swift Swim", H: "Water Veil" },
    weightkg: 24,
    prevo: "Finneon-Brazdo",
    evoLevel: 31,
    evos: ["Bettalesense"]
  },
  bettalesense: {
    num: 1051,
    name: "Bettalesense",
    types: ["Fairy", "Fighting"],
    baseStats: { hp: 69, atk: 104, def: 76, spa: 69, spd: 81, spe: 121 },
    abilities: { 0: "Dazzling", 1: "Swift Swim", H: "Water Veil" },
    weightkg: 48,
    prevo: "Lumineon-Brazdo",
    evoLevel: 41
  },
  finneon: {
    inherit: true,
    otherFormes: ["Finneon-Brazdo"],
    formeOrder: ["Finneon", "Finneon-Brazdo"]
  },
  lumineon: {
    inherit: true,
    otherFormes: ["Lumineon-Brazdo"],
    formeOrder: ["Lumineon", "Lumineon-Brazdo"]
  },
  deerlingbrazdo: {
    num: 585,
    name: "Deerling-Brazdo",
    baseSpecies: "Deerling",
    forme: "Brazdo",
    types: ["Normal", "Water"],
    baseStats: { hp: 55, atk: 65, def: 45, spa: 30, spd: 55, spe: 85 },
    abilities: { 0: "Swift Swim", 1: "Sap Sipper", H: "Serene Grace" },
    weightkg: 17,
    evos: ["Sawsbuck-Brazdo"]
  },
  sawsbuckbrazdo: {
    num: 586,
    name: "Sawsbuck-Brazdo",
    baseSpecies: "Sawsbuck",
    forme: "Brazdo",
    types: ["Normal", "Water"],
    baseStats: { hp: 70, atk: 110, def: 65, spa: 50, spd: 75, spe: 105 },
    abilities: { 0: "Swift Swim", 1: "Sap Sipper", H: "Serene Grace" },
    weightkg: 82,
    prevo: "Deerling-Brazdo",
    evoLevel: 34
  },
  deerling: {
    inherit: true,
    otherFormes: ["Deerling-Brazdo"],
    formeOrder: ["Deerling", "Deerling-Summer", "Deerling-Autumn", "Deerling-Winter", "Deerling-Brazdo"]
  },
  sawsbuck: {
    inherit: true,
    otherFormes: ["Sawsbuck-Brazdo"],
    formeOrder: ["Sawsbuck", "Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter", "Sawsbuck-Brazdo"]
  },
  peccarious: {
    num: 1052,
    name: "Peccarious",
    types: ["Ground", "Grass"],
    baseStats: { hp: 80, atk: 135, def: 94, spa: 50, spd: 86, spe: 40 },
    abilities: { 0: "Reckless", 1: "Vigilante", H: "Grass Pelt" },
    weightkg: 25
  },
  stickler: {
    num: 1053,
    name: "Stickler",
    types: ["Grass", "Bug"],
    baseStats: { hp: 35, atk: 50, def: 70, spa: 30, spd: 30, spe: 60 },
    abilities: { 0: "Tinted Lens", 1: "Grassy Cloak", H: "Swarm" },
    heightm: 0.3,
    weightkg: 0.3,
    evos: ["Woodensect"],
    eggGroups: ["Grass", "Bug"]
  },
  woodensect: {
    num: 1054,
    name: "Woodensect",
    types: ["Grass", "Bug"],
    baseStats: { hp: 75, atk: 90, def: 110, spa: 65, spd: 65, spe: 100 },
    abilities: { 0: "Tinted Lens", 1: "Grassy Cloak", H: "Chlorophyll" },
    heightm: 1.9,
    weightkg: 30,
    prevo: "Stickler",
    evoLevel: 25,
    eggGroups: ["Grass", "Bug"],
    otherFormes: ["Woodensect-Mega"],
    formeOrder: ["Woodensect", "Woodensect-Mega"]
  },
  woodensectmega: {
    num: 1054,
    name: "Woodensect-Mega",
    baseSpecies: "Woodensect",
    forme: "Mega",
    types: ["Grass", "Bug"],
    baseStats: { hp: 75, atk: 130, def: 125, spa: 65, spd: 80, spe: 130 },
    abilities: { 0: "Grassy Surge" },
    heightm: 2.5,
    weightkg: 80,
    requiredItem: "Woodensite"
  },
  luxray: {
    inherit: true,
    otherFormes: ["Luxray-Mega"],
    formeOrder: ["Luxray", "Luxray-Mega"]
  },
  luxraymega: {
    num: 405,
    name: "Luxray-Mega",
    baseSpecies: "Luxray",
    forme: "Mega",
    types: ["Electric", "Fighting"],
    baseStats: { hp: 80, atk: 145, def: 114, spa: 95, spd: 94, spe: 95 },
    abilities: { 0: "Electric Surge" },
    heightm: 1.5,
    weightkg: 62,
    requiredItem: "Luxrite"
  },
  amoonguss: {
    inherit: true,
    abilities: { 0: "Effect Spore", 1: "Grassy Cloak", H: "Regenerator" }
  },
  foongus: {
    inherit: true,
    abilities: { 0: "Effect Spore", 1: "Grassy Cloak", H: "Regenerator" }
  },
  dwebble: {
    inherit: true,
    abilities: { 0: "Sturdy", 1: "Shell Armor", H: "Stone House" }
  },
  crustle: {
    inherit: true,
    abilities: { 0: "Sturdy", 1: "Shell Armor", H: "Stone House" }
  },
  pupitar: {
    inherit: true,
    abilities: { 0: "Shed Skin", H: "Stone House" }
  },
  levipilosa: {
    num: 1055,
    name: "Levipilosa",
    types: ["Psychic"],
    baseStats: { hp: 120, atk: 55, def: 80, spa: 90, spd: 80, spe: 20 },
    abilities: { 0: "Tree-Topper", H: "Telepathy" },
    weightkg: 25
  },
  basilwisp: {
    num: 1056,
    name: "Basilwisp",
    types: ["Dragon", "Ghost"],
    baseStats: { hp: 50, atk: 30, def: 35, spa: 60, spd: 45, spe: 70 },
    abilities: { 0: "Run Away", H: "Quick Feet" },
    weightkg: 5,
    evos: ["Plasmilisk"]
  },
  plasmilisk: {
    num: 1057,
    name: "Plasmilisk",
    types: ["Dragon", "Ghost"],
    baseStats: { hp: 80, atk: 60, def: 55, spa: 105, spd: 75, spe: 125 },
    abilities: { 0: "Soul Strider", H: "Quick Feet" },
    weightkg: 10,
    prevo: "Basilwisp",
    evoLevel: 33
  },
  burlimp: {
    num: 1058,
    name: "Burlimp",
    types: ["Ghost"],
    baseStats: { hp: 35, atk: 55, def: 35, spa: 55, spd: 35, spe: 40 },
    abilities: { 0: "Pickup", 1: "Pickpocket", H: "Frisk" },
    weightkg: 25,
    evos: ["Goblysack"]
  },
  goblysack: {
    num: 1059,
    name: "Goblysack",
    types: ["Ghost"],
    baseStats: { hp: 65, atk: 80, def: 55, spa: 80, spd: 55, spe: 55 },
    abilities: { 0: "Pickup", 1: "Pickpocket", H: "Frisk" },
    weightkg: 25,
    prevo: "Burlimp",
    evoLevel: 24,
    evos: ["Storgre"]
  },
  storgre: {
    num: 1060,
    name: "Storgre",
    types: ["Ghost", "Dark"],
    baseStats: { hp: 85, atk: 110, def: 70, spa: 110, spd: 70, spe: 60 },
    abilities: { 0: "Unburden", 1: "Pickpocket", H: "Frisk" },
    weightkg: 25,
    prevo: "Goblysack",
    evoType: "useItem",
    evoItem: "Moon Stone"
  },
  cucaling: {
    num: 1061,
    name: "Cucaling",
    types: ["Psychic", "Ghost"],
    baseStats: { hp: 40, atk: 30, def: 40, spa: 70, spd: 50, spe: 50 },
    abilities: { 0: "Cursed Body", 1: "Unnerve", H: "Magic Guard" },
    weightkg: 7,
    evos: ["Cucaxa"]
  },
  cucaxa: {
    num: 1062,
    name: "Cucaxa",
    types: ["Psychic", "Ghost"],
    baseStats: { hp: 55, atk: 45, def: 55, spa: 95, spd: 80, spe: 70 },
    abilities: { 0: "Cursed Body", 1: "Unnerve", H: "Magic Guard" },
    weightkg: 20,
    prevo: "Cucaling",
    evoLevel: 25,
    evos: ["Cucarator"]
  },
  cucarator: {
    num: 1063,
    name: "Cucarator",
    types: ["Psychic", "Ghost"],
    baseStats: { hp: 80, atk: 60, def: 75, spa: 120, spd: 100, spe: 85 },
    abilities: { 0: "Cursed Body", 1: "Unnerve", H: "Magic Guard" },
    weightkg: 48,
    prevo: "Cucaxa",
    evoType: "useItem",
    evoItem: "Dusk Stone"
  },
  sacianca: {
    num: 1064,
    name: "Sacianca",
    types: ["Fairy", "Ghost"],
    baseStats: { hp: 40, atk: 55, def: 35, spa: 45, spd: 35, spe: 70 },
    abilities: { 0: "Prankster", 1: "Pickpocket", H: "Unburden" },
    weightkg: 6,
    evos: ["Saciada"]
  },
  saciada: {
    num: 1065,
    name: "Saciada",
    types: ["Fairy", "Ghost"],
    baseStats: { hp: 50, atk: 80, def: 50, spa: 70, spd: 50, spe: 100 },
    abilities: { 0: "Prankster", 1: "Pickpocket", H: "Unburden" },
    weightkg: 18,
    prevo: "Sacianca",
    evoLevel: 25,
    evos: ["Saciceiro"]
  },
  saciceiro: {
    num: 1066,
    name: "Saciceiro",
    types: ["Fairy", "Ghost"],
    baseStats: { hp: 65, atk: 100, def: 70, spa: 90, spd: 70, spe: 125 },
    abilities: { 0: "Prankster", 1: "Pickpocket", H: "Unburden" },
    weightkg: 40,
    prevo: "Saciada",
    evoType: "useItem",
    evoItem: "Shiny Stone"
  },
  warruppy: {
    num: 1067,
    name: "Warruppy",
    types: ["Fighting"],
    baseStats: { hp: 45, atk: 75, def: 30, spa: 30, spd: 30, spe: 70 },
    abilities: { 0: "Guts", H: "Justified" },
    weightkg: 25,
    evos: ["Mastaunch"]
  },
  mastaunch: {
    num: 1068,
    name: "Mastaunch",
    types: ["Fighting"],
    baseStats: { hp: 65, atk: 115, def: 80, spa: 60, spd: 80, spe: 100 },
    abilities: { 0: "Guts", H: "Justified" },
    weightkg: 25,
    prevo: "Warruppy",
    evoLevel: 26
  },
  pleckish: {
    num: 1069,
    name: "Pleckish",
    types: ["Water", "Flying"],
    baseStats: { hp: 62, atk: 38, def: 51, spa: 45, spd: 51, spe: 68 },
    abilities: { 0: "Suction Cups", 1: "Swift Swim", H: "Screen Cleaner" },
    weightkg: 15,
    evos: ["Alapleco"]
  },
  alapleco: {
    num: 1070,
    name: "Alapleco",
    types: ["Water", "Flying"],
    baseStats: { hp: 101, atk: 58, def: 72, spa: 81, spd: 72, spe: 96 },
    abilities: { 0: "Suction Cups", 1: "Swift Swim", H: "Screen Cleaner" },
    weightkg: 45,
    prevo: "Pleckish",
    evoLevel: 28
  },
  insanitary: {
    num: 1071,
    name: "Insanitary",
    types: ["Poison", "Steel"],
    baseStats: { hp: 80, atk: 30, def: 70, spa: 66, spd: 44, spe: 30 },
    abilities: { 0: "Stench", 1: "Regenerator", H: "Corrosion" },
    weightkg: 15,
    evos: ["Katrashtrofy"]
  },
  katrashtrofy: {
    num: 1072,
    name: "Katrashtrofy",
    types: ["Poison", "Steel"],
    baseStats: { hp: 120, atk: 50, def: 100, spa: 91, spd: 89, spe: 35 },
    abilities: { 0: "Stench", 1: "Regenerator", H: "Corrosion" },
    weightkg: 15,
    prevo: "Insanitary",
    evoLevel: 27
  },
  irrigator: {
    num: 1073,
    name: "Irrigator",
    types: ["Fire", "Rock"],
    baseStats: { hp: 70, atk: 90, def: 90, spa: 50, spd: 50, spe: 110 },
    abilities: { 0: "Solid Rock", H: "Anger Point" },
    weightkg: 50,
    otherFormes: ["Irrigator-Completed"],
    formeOrder: ["Irrigator", "Irrigator-Completed"]
  },
  irrigatorcompleted: {
    num: 1073,
    name: "Irrigator-Completed",
    baseSpecies: "Irrigator",
    forme: "Completed",
    types: ["Fire", "Psychic"],
    baseStats: { hp: 70, atk: 50, def: 90, spa: 135, spd: 95, spe: 70 },
    abilities: { 0: "Hot-Headed" },
    weightkg: 50,
    requiredItem: "Missing Bone I",
    changesFrom: "Irrigator"
  },
  galapagunk: {
    num: 1074,
    name: "Galapagunk",
    types: ["Poison", "Rock"],
    baseStats: { hp: 70, atk: 50, def: 110, spa: 90, spd: 90, spe: 50 },
    abilities: { 0: "Solid Rock", H: "Poison Point" },
    weightkg: 50,
    otherFormes: ["Galapagunk-Completed"],
    formeOrder: ["Galapagunk", "Galapagunk-Completed"]
  },
  galapagunkcompleted: {
    num: 1074,
    name: "Galapagunk-Completed",
    baseSpecies: "Galapagunk",
    forme: "Completed",
    types: ["Poison", "Fighting"],
    baseStats: { hp: 70, atk: 95, def: 70, spa: 50, spd: 90, spe: 135 },
    abilities: { 0: "Venom Vision" },
    weightkg: 50,
    requiredItem: "Missing Bone G",
    changesFrom: "Galapagunk"
  },
  galliwatt: {
    num: 1075,
    name: "Galliwatt",
    types: ["Electric", "Steel"],
    baseStats: { hp: 50, atk: 40, def: 40, spa: 60, spd: 70, spe: 40 },
    abilities: { 0: "Long Reach", 1: "Static", H: "Galvanize" },
    weightkg: 10,
    evos: ["Coirele"],
    eggGroups: ["Dragon", "Field"]
  },
  coirele: {
    num: 1076,
    name: "Coirele",
    types: ["Electric", "Steel"],
    baseStats: { hp: 80, atk: 60, def: 60, spa: 70, spd: 90, spe: 60 },
    abilities: { 0: "Long Reach", 1: "Static", H: "Galvanize" },
    weightkg: 60,
    prevo: "Galliwatt",
    evoLevel: 24,
    evos: ["Ampalango"],
    eggGroups: ["Dragon", "Field"]
  },
  ampalango: {
    num: 1077,
    name: "Ampalango",
    types: ["Electric", "Steel"],
    baseStats: { hp: 100, atk: 90, def: 95, spa: 100, spd: 125, spe: 90 },
    abilities: { 0: "Long Reach", 1: "Static", H: "Galvanize" },
    weightkg: 300,
    prevo: "Coirele",
    evoLevel: 48,
    eggGroups: ["Dragon", "Field"]
  },
  regiterra: {
    num: 1078,
    name: "Regiterra",
    types: ["Ground"],
    baseStats: { hp: 80, atk: 200, def: 100, spa: 50, spd: 50, spe: 100 },
    abilities: { 0: "Terraformer" },
    weightkg: 190,
    eggGroups: ["Undiscovered"]
  },
  regimental: {
    num: 1079,
    name: "Regimental",
    types: ["Psychic"],
    baseStats: { hp: 80, atk: 50, def: 50, spa: 200, spd: 100, spe: 100 },
    abilities: { 0: "Mind Probe" },
    weightkg: 190,
    eggGroups: ["Undiscovered"]
  },
  regitoxic: {
    num: 1080,
    name: "Regitoxic",
    types: ["Poison"],
    baseStats: { hp: 50, atk: 150, def: 75, spa: 150, spd: 75, spe: 80 },
    abilities: { 0: "Gunk Consumer" },
    weightkg: 190,
    eggGroups: ["Undiscovered"]
  },
  pythos: {
    num: 1081,
    name: "Pythos",
    types: ["Dark"],
    baseStats: { hp: 90, atk: 110, def: 130, spa: 90, spd: 85, spe: 75 },
    abilities: { 0: "Long Reach" },
    weightkg: 176,
    eggGroups: ["Undiscovered"]
  },
  salaos: {
    num: 1082,
    name: "Salaos",
    types: ["Dark"],
    baseStats: { hp: 75, atk: 85, def: 90, spa: 110, spd: 130, spe: 90 },
    abilities: { 0: "Heatproof" },
    weightkg: 59,
    eggGroups: ["Undiscovered"]
  },
  morndos: {
    num: 1083,
    name: "Morndos",
    types: ["Dark", "Flying"],
    baseStats: { hp: 85, atk: 75, def: 90, spa: 90, spd: 110, spe: 130 },
    abilities: { 0: "Synchronize" },
    weightkg: 78,
    eggGroups: ["Undiscovered"]
  },
  amzodulan: {
    num: 1084,
    name: "Amzodulan",
    types: ["Grass", "Dragon"],
    baseStats: { hp: 110, atk: 155, def: 120, spa: 80, spd: 90, spe: 125 },
    abilities: { 0: "Deep Forest" },
    weightkg: 300,
    eggGroups: ["Undiscovered"],
    otherFormes: ["Amzodulan-Ancient"],
    formeOrder: ["Amzodulan", "Amzodulan-Ancient"]
  },
  amzodulanancient: {
    num: 1084,
    name: "Amzodulan-Ancient",
    baseSpecies: "Amzodulan",
    forme: "Ancient",
    types: ["Grass"],
    baseStats: { hp: 110, atk: 125, def: 70, spa: 80, spd: 90, spe: 105 },
    abilities: { 0: "Natural Cure" },
    weightkg: 200,
    eggGroups: ["Undiscovered"]
  },
  flowiai: {
    num: 1085,
    name: "Flowiai",
    types: ["Water", "Dragon"],
    baseStats: { hp: 110, atk: 80, def: 90, spa: 155, spd: 120, spe: 125 },
    abilities: { 0: "Deep Sea" },
    weightkg: 300,
    eggGroups: ["Undiscovered"],
    otherFormes: ["Amzodulan-Ancient"],
    formeOrder: ["Amzodulan", "Amzodulan-Ancient"]
  },
  flowiaiancient: {
    num: 1085,
    name: "Flowiai-Ancient",
    baseSpecies: "Flowiai",
    forme: "Ancient",
    types: ["Water"],
    baseStats: { hp: 110, atk: 80, def: 90, spa: 125, spd: 70, spe: 105 },
    abilities: { 0: "Regenerator" },
    weightkg: 200,
    eggGroups: ["Undiscovered"]
  },
  hyakada: {
    num: 1151,
    name: "Hyakada",
    types: ["Rock", "Ice"],
    baseStats: { hp: 85, atk: 115, def: 95, spa: 115, spd: 75, spe: 115 },
    abilities: { 0: "Solar Flare" },
    weightkg: 100,
    eggGroups: ["Undiscovered"],
    otherFormes: ["Hyakada-Flare"],
    formeOrder: ["Hyakada", "Hyakada-Flare"]
  },
  hyakadaflare: {
    num: 1151,
    name: "Hyakada-Flare",
    baseSpecies: "Hyakada",
    forme: "Flare",
    types: ["Rock", "Ice"],
    baseStats: { hp: 85, atk: 135, def: 55, spa: 135, spd: 105, spe: 135 },
    abilities: { 0: "Solar Flare" },
    weightkg: 100,
    eggGroups: ["Undiscovered"],
    requiredAbility: "Solar Flare",
    battleOnly: "Hyakada"
  },
  chibardo: {
    num: 1152,
    name: "Chibardo",
    types: ["Electric", "Ground"],
    baseStats: { hp: 85, atk: 120, def: 100, spa: 110, spd: 135, spe: 50 },
    abilities: { 0: "Earth Shaker" },
    weightkg: 958,
    eggGroups: ["Undiscovered"]
  },
  // Loria Region
  calaguaca: {
    num: 1324,
    name: "Calaguaca",
    types: ["Rock", "Water"],
    baseStats: { hp: 110, atk: 95, def: 90, spa: 130, spd: 70, spe: 85 },
    abilities: { 0: "Storm Drain" },
    weightkg: 359,
    eggGroups: ["Undiscovered"],
    otherFormes: ["Calagiaca-Revered"],
    formeOrder: ["Calaguaca", "Calaguaca-Revered"]
  },
  calaguacarevered: {
    num: 1324,
    name: "Calaguaca-Revered",
    baseSpecies: "Calaguaca",
    forme: "Revered",
    types: ["Rock", "Water"],
    baseStats: { hp: 130, atk: 100, def: 100, spa: 160, spd: 90, spe: 100 },
    abilities: { 0: "Storm Drain" },
    weightkg: 359,
    eggGroups: ["Undiscovered"],
    otherFormes: ["Calagiaca"],
    formeOrder: ["Calaguaca", "Calaguaca-Revered"]
  },
  poruvia: {
    num: 1325,
    name: "Poruvia",
    types: ["Flying"],
    baseStats: { hp: 95, atk: 130, def: 110, spa: 85, spd: 90, spe: 70 },
    abilities: { 0: "Clear Body" },
    weightkg: 68,
    eggGroups: ["Undiscovered"],
    otherFormes: ["Poruvia-Revered"],
    formeOrder: ["Poruvia", "Poruvia-Revered"]
  },
  poruviarevered: {
    num: 1325,
    name: "Poruvia-Revered",
    baseSpecies: "Poruvia",
    forme: "Revered",
    types: ["Flying"],
    baseStats: { hp: 100, atk: 160, def: 130, spa: 100, spd: 100, spe: 90 },
    abilities: { 0: "Clear Body" },
    weightkg: 68,
    eggGroups: ["Undiscovered"],
    otherFormes: ["Poruvia"],
    formeOrder: ["Poruvia", "Poruvia-Revered"]
  },
  mudaracan: {
    num: 1326,
    name: "Mudaracan",
    types: ["Ghost", "Dark"],
    baseStats: { hp: 71, atk: 107, def: 101, spa: 107, spd: 107, spe: 107 },
    abilities: { 0: "Ravenous" },
    weightkg: 999,
    eggGroups: ["Undiscovered"],
    otherFormes: ["Mudaracan-Engorged"],
    formeOrder: ["Mudaracan", "Mudaracan-Engorged"]
  },
  mudaracanengorged: {
    num: 1326,
    name: "Mudaracan-Engorged",
    baseSpecies: "Mudaracan",
    forme: "Engorged",
    types: ["Ghost", "Dark"],
    baseStats: { hp: 97, atk: 127, def: 109, spa: 127, spd: 107, spe: 113 },
    abilities: { 0: "Ravenous" },
    weightkg: 999,
    eggGroups: ["Undiscovered"],
    otherFormes: ["Mudaracan"],
    formeOrder: ["Mudaracan", "Mudaracan-Engorged"]
  },
  cocolipso: {
    num: 1201,
    name: "Cocolipso",
    types: ["Grass"],
    baseStats: { hp: 52, atk: 66, def: 60, spa: 41, spd: 51, spe: 40 },
    abilities: { 0: "Overgrow", H: "Shell Armor" },
    heightm: 0.4,
    weightkg: 9.3,
    evos: ["Tropiclaw"]
  },
  tropiclaw: {
    num: 1202,
    name: "Tropiclaw",
    types: ["Grass"],
    baseStats: { hp: 62, atk: 101, def: 75, spa: 51, spd: 61, spe: 60 },
    abilities: { 0: "Overgrow", H: "Shell Armor" },
    heightm: 0.9,
    weightkg: 37.5,
    prevo: "Cocolipso",
    evos: ["Jaibastion"]
  },
  jaibastion: {
    num: 1203,
    name: "Jaibastion",
    types: ["Grass", "Rock"],
    baseStats: { hp: 82, atk: 125, def: 121, spa: 61, spd: 81, spe: 60 },
    abilities: { 0: "Overgrow", H: "Shell Armor" },
    heightm: 1.5,
    weightkg: 245,
    prevo: "Tropiclaw",
    otherFormes: ["Jaibastion-Mega"],
    formeOrder: ["Jaibastion", "Jaibastion-Mega"]
  },
  jaibastionmega: {
    num: 1203,
    name: "Jaibastion-Mega",
    baseSpecies: "Jaibastion",
    forme: "Mega",
    types: ["Grass", "Rock"],
    baseStats: { hp: 82, atk: 150, def: 101, spa: 116, spd: 81, spe: 100 },
    abilities: { 0: "Skill Link" },
    heightm: 1.5,
    weightkg: 245,
    requiredItem: "Jaibastionite"
  },
  embaa: {
    num: 1204,
    name: "Embaa",
    types: ["Fire"],
    baseStats: { hp: 55, atk: 50, def: 45, spa: 59, spd: 53, spe: 48 },
    abilities: { 0: "Blaze", H: "Fluffy" },
    heightm: 0.6,
    weightkg: 7.4,
    evos: ["Cinemere"]
  },
  cinemere: {
    num: 1205,
    name: "Cinemere",
    types: ["Fire", "Dark"],
    baseStats: { hp: 85, atk: 70, def: 55, spa: 79, spd: 63, spe: 58 },
    abilities: { 0: "Blaze", H: "Fluffy" },
    heightm: 0.8,
    weightkg: 12.9,
    prevo: "Embaa",
    evos: ["Sulfuram"]
  },
  sulfuram: {
    num: 1206,
    name: "Sulfuram",
    types: ["Fire", "Dark"],
    baseStats: { hp: 115, atk: 90, def: 65, spa: 109, spd: 83, spe: 68 },
    abilities: { 0: "Blaze", H: "Fluffy" },
    heightm: 1.6,
    weightkg: 74,
    prevo: "Cinemere",
    otherFormes: ["Sulfuram-Mega"],
    formeOrder: ["Sulfuram", "Sulfuram-Mega"]
  },
  sulfurammega: {
    num: 1206,
    name: "Sulfuram-Mega",
    baseSpecies: "Sulfuram",
    forme: "Mega",
    types: ["Fire", "Dark"],
    baseStats: { hp: 115, atk: 115, def: 85, spa: 144, spd: 103, spe: 68 },
    abilities: { 0: "Neutralizing Gas" },
    heightm: 1.6,
    weightkg: 74,
    requiredItem: "Sulfuramite"
  },
  flowtter: {
    num: 1207,
    name: "Flowtter",
    types: ["Water"],
    baseStats: { hp: 44, atk: 41, def: 50, spa: 56, spd: 60, spe: 59 },
    abilities: { 0: "Torrent", H: "Frisk" },
    heightm: 0.7,
    weightkg: 10.2,
    evos: ["Ottorrent"]
  },
  ottorrent: {
    num: 1208,
    name: "Ottorrent",
    types: ["Water"],
    baseStats: { hp: 74, atk: 51, def: 60, spa: 76, spd: 70, spe: 89 },
    abilities: { 0: "Torrent", H: "Frisk" },
    heightm: 4,
    weightkg: 38.5,
    prevo: "Flowtter",
    evos: ["Minkfinit"]
  },
  minkfinit: {
    num: 1209,
    name: "Minkfinit",
    types: ["Water"],
    baseStats: { hp: 94, atk: 71, def: 70, spa: 96, spd: 80, spe: 119 },
    abilities: { 0: "Torrent", H: "Frisk" },
    heightm: 10.5,
    weightkg: 186,
    prevo: "Ottorrent",
    otherFormes: ["Minkfinit-Mega"],
    formeOrder: ["Minkfinit", "Minkfinit-Mega"]
  },
  minkfinitmega: {
    num: 1209,
    name: "Minkfinit-Mega",
    baseSpecies: "Minkfinit",
    forme: "Mega",
    types: ["Water", "Electric"],
    baseStats: { hp: 94, atk: 121, def: 80, spa: 111, spd: 105, spe: 119 },
    abilities: { 0: "Drizzle" },
    heightm: 10.5,
    weightkg: 186,
    requiredItem: "Minkfinitite"
  },
  perocotton: {
    num: 1210,
    name: "Perocotton",
    types: ["Normal"],
    baseStats: { hp: 45, atk: 35, def: 50, spa: 30, spd: 30, spe: 60 },
    abilities: { 0: "Pickup", 1: "Cotton Down", H: "Unburden" },
    heightm: 0.2,
    weightkg: 0.2,
    evos: ["Largotton"]
  },
  largotton: {
    num: 1211,
    name: "Largotton",
    types: ["Normal", "Grass"],
    baseStats: { hp: 60, atk: 85, def: 90, spa: 60, spd: 60, spe: 105 },
    abilities: { 0: "Pickup", 1: "Cotton Down", H: "Unburden" },
    heightm: 2.8,
    weightkg: 0.4,
    prevo: "Perocotton",
    otherFormes: ["Largotton-Mega"],
    formeOrder: ["Largotton", "Largotton-Mega"]
  },
  largottonmega: {
    num: 1211,
    name: "Largotton-Mega",
    baseSpecies: "Largotton",
    forme: "Mega",
    types: ["Normal", "Grass"],
    baseStats: { hp: 60, atk: 95, def: 130, spa: 60, spd: 100, spe: 115 },
    abilities: { 0: "Thick Fat" },
    heightm: 4.8,
    weightkg: 0.6,
    requiredItem: "Largotite"
  },
  zippyr: {
    num: 1212,
    name: "Zippyr",
    types: ["Normal", "Flying"],
    baseStats: { hp: 30, atk: 44, def: 34, spa: 40, spd: 34, spe: 68 },
    abilities: { 0: "Keen Eye", 1: "Sap Sipper", H: "Static" },
    heightm: 0.3,
    weightkg: 1,
    evos: ["Zoomraj"]
  },
  zoomraj: {
    num: 1213,
    name: "Zoomraj",
    types: ["Normal", "Flying"],
    baseStats: { hp: 54, atk: 54, def: 52, spa: 50, spd: 42, spe: 98 },
    abilities: { 0: "Keen Eye", 1: "Sap Sipper", H: "Static" },
    heightm: 0.6,
    weightkg: 11.3,
    prevo: "Zippyr",
    evos: ["Zetztream"]
  },
  zetztream: {
    num: 1214,
    name: "Zetztream",
    types: ["Electric", "Flying"],
    baseStats: { hp: 76, atk: 79, def: 72, spa: 65, spd: 65, spe: 138 },
    abilities: { 0: "Keen Eye", 1: "Sap Sipper", H: "Galvanize" },
    heightm: 1.4,
    weightkg: 16.4,
    prevo: "Zoomraj",
    otherFormes: ["Zetztream-Mega"],
    formeOrder: ["Zetztream", "Zetztream-Mega"]
  },
  zetztreammega: {
    num: 1214,
    name: "Zetztream-Mega",
    baseSpecies: "Zetztream",
    forme: "Mega",
    types: ["Electric", "Flying"],
    baseStats: { hp: 76, atk: 89, def: 85, spa: 102, spd: 85, spe: 158 },
    abilities: { 0: "Galvanize" },
    heightm: 1.8,
    weightkg: 44.4,
    requiredItem: "Zetztreamite"
  },
  antyke: {
    num: 1215,
    name: "Antyke",
    types: ["Bug"],
    baseStats: { hp: 45, atk: 50, def: 55, spa: 49, spd: 63, spe: 38 },
    abilities: { 0: "Swarm", 1: "Own Tempo", H: "Honey Gather" },
    heightm: 0.1,
    weightkg: 0.1,
    evos: ["Pupant"]
  },
  pupant: {
    num: 1216,
    name: "Pupant",
    types: ["Bug"],
    baseStats: { hp: 67, atk: 62, def: 98, spa: 53, spd: 89, spe: 41 },
    abilities: { 0: "Shed Skin" },
    heightm: 0.1,
    weightkg: 1.9,
    prevo: "Antyke",
    evos: ["Dronaught", "Combattant", "Antunnel", "Formiquen"]
  },
  dronaught: {
    num: 1217,
    name: "Dronaught",
    types: ["Bug", "Psychic"],
    baseStats: { hp: 79, atk: 71, def: 76, spa: 118, spd: 72, spe: 89 },
    abilities: { 0: "Swarm", 1: "Levitate", H: "Trace" },
    heightm: 0.1,
    weightkg: 0.4,
    prevo: "Pupant"
  },
  combattant: {
    num: 1218,
    name: "Combattant",
    types: ["Bug", "Fighting"],
    baseStats: { hp: 79, atk: 121, def: 88, spa: 56, spd: 84, spe: 77 },
    abilities: { 0: "Swarm", 1: "Poison Touch", H: "Strong Jaw" },
    heightm: 0.1,
    weightkg: 0.8,
    prevo: "Pupant"
  },
  antunnel: {
    num: 1219,
    name: "Antunnel",
    types: ["Bug", "Ground"],
    baseStats: { hp: 79, atk: 108, def: 127, spa: 64, spd: 79, spe: 48 },
    abilities: { 0: "Swarm", 1: "Sand Force", H: "Mold Breaker" },
    heightm: 0.7,
    weightkg: 1,
    prevo: "Pupant"
  },
  formiquen: {
    num: 1220,
    name: "Formiquen",
    types: ["Bug", "Fairy"],
    baseStats: { hp: 129, atk: 79, def: 85, spa: 99, spd: 76, spe: 37 },
    abilities: { 0: "Swarm", 1: "Stamina", H: "Queenly Majesty" },
    heightm: 1.3,
    weightkg: 1.4,
    prevo: "Pupant"
  },
  kithra: {
    num: 1221,
    name: "Kithra",
    types: ["Psychic"],
    baseStats: { hp: 51, atk: 37, def: 37, spa: 74, spd: 47, spe: 69 },
    abilities: { 0: "Synchronize", 1: "Run Away", H: "Psychic Surge" },
    weightkg: 20,
    evos: ["Zorboreal"]
  },
  zorboreal: {
    num: 1222,
    name: "Zorboreal",
    types: ["Psychic", "Grass"],
    baseStats: { hp: 84, atk: 56, def: 56, spa: 118, spd: 82, spe: 109 },
    abilities: { 0: "Synchronize", 1: "Grass Pelt", H: "Psychic Surge" },
    weightkg: 20,
    prevo: "Kithra"
  },
  srinbow: {
    num: 1223,
    name: "Srinbow",
    types: ["Dragon"],
    baseStats: { hp: 40, atk: 55, def: 40, spa: 43, spd: 40, spe: 70 },
    abilities: { 0: "Shed Skin", H: "Long Reach" },
    heightm: 0.3,
    weightkg: 0.4,
    evos: ["Whipintow"]
  },
  whipintow: {
    num: 1224,
    name: "Whipintow",
    types: ["Dragon"],
    baseStats: { hp: 60, atk: 102, def: 55, spa: 73, spd: 55, spe: 100 },
    abilities: { 0: "Shed Skin", H: "Long Reach" },
    heightm: 2,
    weightkg: 39.3,
    prevo: "Srinbow"
  },
  glucatty: {
    num: 1225,
    name: "Glucatty",
    types: ["Fairy", "Ice"],
    baseStats: { hp: 80, atk: 95, def: 95, spa: 70, spd: 70, spe: 110 },
    abilities: { 0: "Ice Body", 1: "Refrigerate", H: "Wonder Skin" },
    heightm: 1.5,
    weightkg: 67.7,
    prevo: "Delcatty-Loria"
  },
  tropitano: {
    num: 1226,
    name: "Tropitano",
    types: ["Grass", "Flying"],
    baseStats: { hp: 69, atk: 48, def: 53, spa: 52, spd: 57, spe: 31 },
    abilities: { 0: "Chlorophyll", 1: "Solar Power", H: "Harvest" },
    heightm: 0.5,
    weightkg: 25,
    evos: ["Tropius"]
  },
  tropiconti: {
    num: 1227,
    name: "Tropiconti",
    types: ["Grass", "Dragon"],
    baseStats: { hp: 114, atk: 78, def: 93, spa: 92, spd: 92, spe: 76 },
    abilities: { 0: "Chlorophyll", 1: "Solar Power", H: "Thick Fat" },
    heightm: 2,
    weightkg: 200,
    prevo: "Tropius"
  },
  hoglet: {
    num: 1228,
    name: "Hoglet",
    types: ["Normal"],
    baseStats: { hp: 60, atk: 60, def: 60, spa: 60, spd: 60, spe: 60 },
    abilities: { 0: "Thick Fat", H: "Adaptability" },
    heightm: 0.7,
    weightkg: 38,
    evos: ["Hogtide", "Hogcules", "Hogyron", "Hoggnid", "Hogoblin", "Hogust", "Hogven"]
  },
  hogtide: {
    num: 1229,
    name: "Hogtide",
    types: ["Water"],
    baseStats: { hp: 115, atk: 60, def: 95, spa: 105, spd: 70, spe: 65 },
    abilities: { 0: "Poison Point", H: "Water Absorb" },
    heightm: 0.7,
    weightkg: 49.5,
    prevo: "Hoglet"
  },
  hogcules: {
    num: 1230,
    name: "Hogcules",
    types: ["Fighting"],
    baseStats: { hp: 95, atk: 115, def: 70, spa: 60, spd: 65, spe: 105 },
    abilities: { 0: "Moxie", H: "Defiant" },
    heightm: 1.3,
    weightkg: 99.5,
    prevo: "Hoglet"
  },
  hogyron: {
    num: 1231,
    name: "Hogyron",
    types: ["Steel"],
    baseStats: { hp: 95, atk: 105, def: 115, spa: 65, spd: 70, spe: 60 },
    abilities: { 0: "Heavy Metal", H: "Pressure" },
    heightm: 1.3,
    weightkg: 480,
    prevo: "Hoglet"
  },
  hoggnid: {
    num: 1232,
    name: "Hoggnid",
    types: ["Dragon"],
    baseStats: { hp: 70, atk: 105, def: 65, spa: 115, spd: 60, spe: 95 },
    abilities: { 0: "Sap Sipper", H: "Berserk" },
    heightm: 0.8,
    weightkg: 77.1,
    prevo: "Hoglet"
  },
  hogoblin: {
    num: 1233,
    name: "Hogoblin",
    types: ["Fairy"],
    baseStats: { hp: 70, atk: 105, def: 65, spa: 60, spd: 115, spe: 95 },
    abilities: { 0: "Prankster", H: "Pixilate" },
    heightm: 0.8,
    weightkg: 77.1,
    prevo: "Hoglet"
  },
  hogust: {
    num: 1234,
    name: "Hogust",
    types: ["Flying"],
    baseStats: { hp: 60, atk: 65, def: 95, spa: 105, spd: 70, spe: 115 },
    abilities: { 0: "Steadfast", H: "Speed Boost" },
    heightm: 0.7,
    weightkg: 38.6,
    prevo: "Hoglet"
  },
  hogven: {
    num: 1235,
    name: "Hogven",
    types: ["Normal"],
    baseStats: { hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85 },
    abilities: { 0: "Thick Fat", H: "Adaptability" },
    heightm: 1.4,
    weightkg: 76,
    prevo: "Hoglet"
  },
  rascoon: {
    num: 1236,
    name: "Rascoon",
    types: ["Dark"],
    baseStats: { hp: 41, atk: 59, def: 46, spa: 42, spd: 32, spe: 62 },
    abilities: { 0: "Pickpocket", 1: "Limber", H: "Infiltrator" },
    heightm: 0.3,
    weightkg: 16.8,
    evos: ["Maskoon"]
  },
  maskoon: {
    num: 1237,
    name: "Maskoon",
    types: ["Dark"],
    baseStats: { hp: 80, atk: 94, def: 75, spa: 74, spd: 66, spe: 105 },
    abilities: { 0: "Pickpocket", 1: "Limber", H: "Infiltrator" },
    heightm: 1.4,
    weightkg: 41,
    prevo: "Rascoon"
  },
  nandare: {
    num: 1238,
    name: "Nandare",
    types: ["Poison", "Grass"],
    baseStats: { hp: 62, atk: 90, def: 62, spa: 63, spd: 62, spe: 116 },
    abilities: { 0: "Precision", 1: "Cute Charm", H: "Poison Touch" },
    heightm: 0.1,
    weightkg: 0.1
  },
  marbowl: {
    num: 1239,
    name: "Marbowl",
    types: ["Rock"],
    baseStats: { hp: 40, atk: 40, def: 65, spa: 60, spd: 35, spe: 40 },
    abilities: { 0: "Sturdy", 1: "Dazzling", H: "Energize" },
    heightm: 0.3,
    weightkg: 10,
    evos: ["Selustre"]
  },
  selustre: {
    num: 1240,
    name: "Selustre",
    types: ["Rock", "Fairy"],
    baseStats: { hp: 60, atk: 50, def: 75, spa: 85, spd: 40, spe: 50 },
    abilities: { 0: "Sturdy", 1: "Dazzling", H: "Energize" },
    heightm: 0.8,
    weightkg: 98,
    prevo: "Marbowl",
    evos: ["Monolux"]
  },
  monolux: {
    num: 1241,
    name: "Monolux",
    types: ["Rock", "Fairy"],
    baseStats: { hp: 80, atk: 70, def: 110, spa: 125, spd: 60, spe: 70 },
    abilities: { 0: "Sturdy", 1: "Dazzling", H: "Energize" },
    heightm: 1.2,
    weightkg: 220,
    prevo: "Selustre"
  },
  canvis: {
    num: 1242,
    name: "Canvis",
    types: ["Poison", "Ghost"],
    baseStats: { hp: 50, atk: 80, def: 30, spa: 40, spd: 30, spe: 50 },
    abilities: { 0: "Liquid Ooze", 1: "Damp", H: "Dry Skin" },
    heightm: 0.4,
    weightkg: 2.3,
    evos: ["Carnivoross"]
  },
  carnivoross: {
    num: 1243,
    name: "Carnivoross",
    types: ["Poison", "Ghost"],
    baseStats: { hp: 87, atk: 120, def: 60, spa: 70, spd: 60, spe: 90 },
    abilities: { 0: "Liquid Ooze", 1: "Damp", H: "Dry Skin" },
    heightm: 0.8,
    weightkg: 6.3,
    prevo: "Canvis"
  },
  grizzline: {
    num: 1244,
    name: "Grizzline",
    types: ["Normal", "Steel"],
    baseStats: { hp: 109, atk: 97, def: 97, spa: 70, spd: 79, spe: 37 },
    abilities: { 0: "Tough Claws", H: "Solid Rock" },
    heightm: 2,
    weightkg: 175
  },
  myoce: {
    num: 1245,
    name: "Myoce",
    types: ["Ice", "Flying"],
    baseStats: { hp: 45, atk: 35, def: 60, spa: 65, spd: 40, spe: 60 },
    abilities: { 0: "Slush Rush", H: "Infiltrator" },
    heightm: 1,
    weightkg: 30,
    evos: ["Viverodon"]
  },
  viverodon: {
    num: 1246,
    name: "Viverodon",
    types: ["Ice", "Flying"],
    baseStats: { hp: 65, atk: 70, def: 105, spa: 110, spd: 60, spe: 105 },
    abilities: { 0: "Slush Rush", H: "Infiltrator" },
    heightm: 1,
    weightkg: 30,
    prevo: "Myoce"
  },
  usawald: {
    num: 1247,
    name: "Usawald",
    types: ["Electric", "Ghost"],
    baseStats: { hp: 60, atk: 90, def: 60, spa: 40, spd: 60, spe: 125 },
    abilities: { 0: "Super Luck", H: "Long Reach" },
    heightm: 0.8,
    weightkg: 30
  },
  thermonewt: {
    num: 1248,
    name: "Thermonewt",
    types: ["Ice"],
    baseStats: { hp: 65, atk: 95, def: 60, spa: 103, spd: 70, spe: 100 },
    abilities: { 0: "Phase Shift" },
    heightm: 1.2,
    weightkg: 30
  },
  frozuna: {
    num: 1249,
    name: "Frozuna",
    types: ["Water"],
    baseStats: { hp: 70, atk: 95, def: 100, spa: 40, spd: 75, spe: 100 },
    abilities: { 0: "Ice Body", H: "Refrigerate" },
    heightm: 0.8,
    weightkg: 33,
    otherFormes: ["Frozuna-Mega"],
    formeOrder: ["Frozuna", "Frozuna-Mega"]
  },
  frozunamega: {
    num: 1249,
    name: "Frozuna-Mega",
    baseSpecies: "Frozuna",
    forme: "Mega",
    types: ["Water", "Ice"],
    baseStats: { hp: 70, atk: 115, def: 100, spa: 100, spd: 95, spe: 100 },
    abilities: { 0: "Adaptability" },
    heightm: 1,
    weightkg: 53,
    requiredItem: "Frozunite"
  },
  firack: {
    num: 1250,
    name: "Firack",
    types: ["Fire", "Grass"],
    baseStats: { hp: 53, atk: 78, def: 53, spa: 53, spd: 78, spe: 68 },
    abilities: { 0: "Flash Fire", H: "Water Absorb" },
    heightm: 0.4,
    weightkg: 5.5,
    evos: ["Fiarsho"]
  },
  fiarsho: {
    num: 1251,
    name: "Fiarsho",
    types: ["Fire", "Grass"],
    baseStats: { hp: 73, atk: 118, def: 63, spa: 63, spd: 118, spe: 98 },
    abilities: { 0: "Flash Fire", H: "Water Absorb" },
    heightm: 0.9,
    weightkg: 18.9,
    prevo: "Firack"
  },
  nymphire: {
    num: 1252,
    name: "Nymphire",
    types: ["Fire", "Bug"],
    baseStats: { hp: 53, atk: 53, def: 78, spa: 78, spd: 53, spe: 68 },
    abilities: { 0: "Gluttony", H: "Magic Guard" },
    heightm: 0.3,
    weightkg: 7.5,
    evos: ["Nymphork"]
  },
  nymphork: {
    num: 1253,
    name: "Nymphork",
    types: ["Fire", "Bug"],
    baseStats: { hp: 73, atk: 63, def: 118, spa: 118, spd: 63, spe: 98 },
    abilities: { 0: "Gluttony", H: "Magic Guard" },
    heightm: 0.7,
    weightkg: 29.3,
    prevo: "Nymphire"
  },
  ribbolt: {
    num: 1254,
    name: "Ribbolt",
    types: ["Electric", "Ground"],
    baseStats: { hp: 56, atk: 59, def: 35, spa: 65, spd: 35, spe: 55 },
    abilities: { 0: "Static", 1: "Dry Skin", H: "Swift Swim" },
    heightm: 0.5,
    weightkg: 5.7,
    evos: ["Dendrobolt"]
  },
  dendrobolt: {
    num: 1255,
    name: "Dendrobolt",
    types: ["Electric", "Ground"],
    baseStats: { hp: 76, atk: 69, def: 55, spa: 75, spd: 55, spe: 55 },
    abilities: { 0: "Static", 1: "Dry Skin", H: "Swift Swim" },
    heightm: 0.9,
    weightkg: 19,
    prevo: "Ribbolt",
    evos: ["Thundart"]
  },
  thundart: {
    num: 1256,
    name: "Thundart",
    types: ["Electric", "Ground"],
    baseStats: { hp: 96, atk: 89, def: 75, spa: 115, spd: 75, spe: 55 },
    abilities: { 0: "Static", 1: "Dry Skin", H: "Swift Swim" },
    heightm: 1.4,
    weightkg: 60,
    prevo: "Dendrobolt"
  },
  croakorrode: {
    num: 1257,
    name: "Croakorrode",
    types: ["Poison", "Fighting"],
    baseStats: { hp: 93, atk: 116, def: 75, spa: 86, spd: 75, spe: 95 },
    abilities: { 0: "Dry Skin", 1: "Solid Rock", H: "Tough Claws" },
    heightm: 2,
    weightkg: 65,
    prevo: "Toxicroak"
  },
  candlen: {
    num: 1258,
    name: "Candlen",
    types: ["Fire", "Psychic"],
    baseStats: { hp: 80, atk: 75, def: 65, spa: 50, spd: 50, spe: 60 },
    abilities: { 0: "Flash Fire", 1: "Magic Bounce", H: "Stalwart" },
    heightm: 0.7,
    weightkg: 45.1,
    evos: ["Bombastor"]
  },
  bombastor: {
    num: 1259,
    name: "Bombastor",
    types: ["Fire", "Psychic"],
    baseStats: { hp: 100, atk: 120, def: 85, spa: 70, spd: 70, spe: 80 },
    abilities: { 0: "Flash Fire", 1: "Magic Bounce", H: "Stalwart" },
    heightm: 1.7,
    weightkg: 212,
    prevo: "Candlen"
  },
  coatick: {
    num: 1260,
    name: "Coatick",
    types: ["Fire", "Fighting"],
    baseStats: { hp: 42, atk: 55, def: 49, spa: 55, spd: 49, spe: 55 },
    abilities: { 0: "Bombadier", H: "Aftermath" },
    heightm: 0.3,
    weightkg: 15.5,
    evos: ["Coatorch"]
  },
  coatorch: {
    num: 1261,
    name: "Coatorch",
    types: ["Fire", "Fighting"],
    baseStats: { hp: 52, atk: 75, def: 59, spa: 75, spd: 59, spe: 85 },
    abilities: { 0: "Bombadier", H: "Aftermath" },
    heightm: 0.6,
    weightkg: 25.5,
    prevo: "Coatick",
    evos: ["Coatrin"]
  },
  coatrin: {
    num: 1262,
    name: "Coatrin",
    types: ["Fire", "Fighting"],
    baseStats: { hp: 67, atk: 95, def: 79, spa: 95, spd: 79, spe: 115 },
    abilities: { 0: "Bombadier", H: "Aftermath" },
    heightm: 0.9,
    weightkg: 80.4,
    prevo: "Coatorch"
  },
  escargnome: {
    num: 1263,
    name: "Escargnome",
    types: ["Fairy", "Poison"],
    baseStats: { hp: 40, atk: 30, def: 77, spa: 60, spd: 30, spe: 20 },
    abilities: { 0: "Shell Armor", 1: "Sticky Hold", H: "Magic Guard" },
    heightm: 0.3,
    weightkg: 10.8,
    evos: ["Fairysnale"]
  },
  fairysnale: {
    num: 1264,
    name: "Fairysnale",
    types: ["Fairy", "Poison"],
    baseStats: { hp: 70, atk: 40, def: 117, spa: 95, spd: 95, spe: 25 },
    abilities: { 0: "Shell Armor", 1: "Sticky Hold", H: "Magic Guard" },
    heightm: 0.8,
    weightkg: 46,
    prevo: "Escargnome",
    otherFormes: ["Fairysnale-Mega"],
    formeOrder: ["Fairysnale", "Fairysnale-Mega"]
  },
  fairysnalemega: {
    num: 1264,
    name: "Fairysnale-Mega",
    baseSpecies: "Fairysnale",
    forme: "Mega",
    types: ["Fairy", "Poison"],
    baseStats: { hp: 70, atk: 60, def: 132, spa: 160, spd: 95, spe: 25 },
    abilities: { 0: "Triage" },
    heightm: 2.8,
    weightkg: 126,
    requiredItem: "Fairysnalite"
  },
  jungelion: {
    num: 1265,
    name: "Jungelion",
    types: ["Grass", "Dark"],
    baseStats: { hp: 88, atk: 125, def: 82, spa: 69, spd: 71, spe: 110 },
    abilities: { 0: "Intimidate", 1: "Tough Claws", H: "Moxie" },
    heightm: 2.1,
    weightkg: 98.6,
    prevo: "Pyroar-Loria"
  },
  feer: {
    num: 1266,
    name: "Feer",
    types: ["Ghost"],
    baseStats: { hp: 43, atk: 72, def: 41, spa: 32, spd: 86, spe: 56 },
    abilities: { 0: "Run Away", 1: "Clear Body", H: "Unaware" },
    heightm: 0.6,
    weightkg: 12.3,
    evos: ["Phantelope"]
  },
  phantelope: {
    num: 1267,
    name: "Phantelope",
    types: ["Ghost"],
    baseStats: { hp: 83, atk: 104, def: 61, spa: 62, spd: 128, spe: 87 },
    abilities: { 0: "Run Away", 1: "Clear Body", H: "Unaware" },
    heightm: 1.8,
    weightkg: 30.8,
    prevo: "Feer"
  },
  corruptomb: {
    num: 1268,
    name: "Corruptomb",
    types: ["Ghost", "Dark"],
    baseStats: { hp: 70, atk: 132, def: 108, spa: 92, spd: 108, spe: 35 },
    abilities: { 0: "Sudden Guard", H: "Infiltrator" },
    heightm: 3.3,
    weightkg: 666,
    prevo: "Spiritomb"
  },
  sinistect: {
    num: 1269,
    name: "Sinistect",
    types: ["Bug", "Dark"],
    baseStats: { hp: 50, atk: 85, def: 55, spa: 73, spd: 50, spe: 40 },
    abilities: { 0: "Swarm", H: "Intimidate" },
    heightm: 0.3,
    weightkg: 10.2,
    evos: ["Grimoth"]
  },
  grimoth: {
    num: 1270,
    name: "Grimoth",
    types: ["Bug", "Dark"],
    baseStats: { hp: 75, atk: 130, def: 85, spa: 118, spd: 75, spe: 55 },
    abilities: { 0: "Bewitch", H: "Intimidate" },
    heightm: 2.1,
    weightkg: 62.5,
    prevo: "Sinistect"
  },
  knightmare: {
    num: 1271,
    name: "Knightmare",
    types: ["Dark", "Steel"],
    baseStats: { hp: 65, atk: 100, def: 70, spa: 60, spd: 70, spe: 125 },
    abilities: { 0: "Ambitious", 1: "Inner Focus", H: "Pressure" },
    heightm: 1.5,
    weightkg: 139.7,
    prevo: "Pawniard"
  },
  yanmazure: {
    num: 1272,
    name: "Yanmazure",
    types: ["Bug", "Water"],
    baseStats: { hp: 86, atk: 66, def: 76, spa: 116, spd: 76, spe: 95 },
    abilities: { 0: "Levitate", 1: "Compound Eyes", H: "Heatproof" },
    heightm: 1.5,
    weightkg: 32.2,
    prevo: "Yanma-Loria"
  },
  searie: {
    num: 1273,
    name: "Searie",
    types: ["Water", "Ghost"],
    baseStats: { hp: 100, atk: 70, def: 90, spa: 95, spd: 70, spe: 60 },
    abilities: { 0: "Unnerve", 1: "Cursed Body", H: "Stakeout" },
    heightm: 1.2,
    weightkg: 100.6
  },
  steemevent: {
    num: 1274,
    name: "Steemevent",
    types: ["Fire", "Water"],
    baseStats: { hp: 105, atk: 60, def: 105, spa: 120, spd: 110, spe: 45 },
    abilities: { 0: "Steam Engine" },
    heightm: 1.7,
    weightkg: 81.6
  },
  flambengo: {
    num: 1275,
    name: "Flambe\u0301ngo",
    types: ["Fire", "Flying"],
    baseStats: { hp: 50, atk: 50, def: 40, spa: 50, spd: 50, spe: 60 },
    abilities: { 0: "Keen Eye", 1: "Flame Body", H: "Water Absorb" },
    heightm: 0.7,
    weightkg: 14.7,
    evos: ["Flamilion"]
  },
  flamilion: {
    num: 1276,
    name: "Flamilion",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 90, atk: 80, def: 60, spa: 110, spd: 130, spe: 70 },
    abilities: { 0: "Keen Eye", 1: "Flame Body", H: "Water Absorb" },
    heightm: 1.8,
    weightkg: 75.2,
    prevo: "Flambe\u0301ngo"
  },
  belubble: {
    num: 1277,
    name: "Belubble",
    types: ["Water", "Ice"],
    baseStats: { hp: 40, atk: 40, def: 40, spa: 50, spd: 50, spe: 80 },
    abilities: { 0: "Thick Fat", 1: "Frisk", H: "Liquid Voice" },
    heightm: 0.9,
    weightkg: 80,
    evos: ["Drakumuy"]
  },
  drakumuy: {
    num: 1278,
    name: "Drakumuy",
    types: ["Dragon", "Ice"],
    baseStats: { hp: 80, atk: 80, def: 60, spa: 130, spd: 110, spe: 80 },
    abilities: { 0: "Thick Fat", 1: "Frisk", H: "Liquid Voice" },
    heightm: 4.9,
    weightkg: 220,
    prevo: "Belubble"
  },
  krokoasis: {
    num: 1279,
    name: "Krokoasis",
    types: ["Ground", "Water"],
    baseStats: { hp: 100, atk: 113, def: 83, spa: 60, spd: 73, spe: 90 },
    abilities: { 0: "Water Veil", 1: "Moxie", H: "Battle Tide" },
    heightm: 1.9,
    weightkg: 82.6,
    prevo: "Krokorok-Loria"
  },
  tsunamey: {
    num: 1280,
    name: "Tsunamey",
    types: ["Dragon"],
    baseStats: { hp: 60, atk: 115, def: 95, spa: 50, spd: 95, spe: 50 },
    abilities: { 0: "Surf's Up" },
    heightm: 0.9,
    weightkg: 40.5,
    otherFormes: ["Tsunamey-Surfing"],
    formeOrder: ["Tsunamey", "Tsunamey-Surfing"]
  },
  tsunameysurfing: {
    num: 1280,
    name: "Tsunamey-Surfing",
    baseSpecies: "Tsunamey",
    forme: "Surfing",
    types: ["Dragon"],
    baseStats: { hp: 60, atk: 115, def: 60, spa: 50, spd: 80, spe: 100 },
    abilities: { 0: "Surf's Up" },
    heightm: 0.9,
    weightkg: 40.5,
    requiredAbility: "Surfs Up",
    battleOnly: "Tsunamey"
  },
  erythrope: {
    num: 1281,
    name: "Erythrope",
    types: ["Water", "Normal"],
    baseStats: { hp: 59, atk: 98, def: 69, spa: 54, spd: 69, spe: 116 },
    abilities: { 0: "Long Reach", 1: "Strong Jaw", H: "Illuminate" },
    heightm: 4,
    weightkg: 9.6
  },
  jahvolen: {
    num: 1282,
    name: "Jahvolen",
    types: ["Rock", "Ground"],
    baseStats: { hp: 130, atk: 120, def: 80, spa: 40, spd: 100, spe: 45 },
    abilities: { 0: "Dry Skin", 1: "Long Reach", H: "Technician" },
    heightm: 1.8,
    weightkg: 132.6,
    prevo: "Throh-Prehistoric"
  },
  kluhbur: {
    num: 1283,
    name: "Kluhbur",
    types: ["Rock", "Dark"],
    baseStats: { hp: 80, atk: 135, def: 90, spa: 40, spd: 70, spe: 100 },
    abilities: { 0: "Pressure", 1: "Long Reach", H: "Defiant" },
    heightm: 2,
    weightkg: 112.6,
    prevo: "Sawk-Prehistoric"
  },
  restrictorch: {
    num: 1284,
    name: "Restrictorch",
    types: ["Fire", "Electric"],
    baseStats: { hp: 60, atk: 85, def: 65, spa: 65, spd: 65, spe: 80 },
    abilities: { 0: "Flash Fire", 1: "Drought", H: "Solar Charge" },
    heightm: 2.1,
    weightkg: 15,
    evos: ["Conductorch"]
  },
  conductorch: {
    num: 1285,
    name: "Conductorch",
    types: ["Fire", "Electric"],
    baseStats: { hp: 75, atk: 120, def: 80, spa: 65, spd: 80, spe: 115 },
    abilities: { 0: "Flash Fire", 1: "Drought", H: "Solar Charge" },
    heightm: 2.7,
    weightkg: 69,
    prevo: "Restrictorch"
  },
  hearow: {
    num: 1286,
    name: "Hearow",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 85, atk: 110, def: 75, spa: 71, spd: 71, spe: 110 },
    abilities: { 0: "Justified", H: "Sniper" },
    heightm: 1.5,
    weightkg: 20.5,
    prevo: "Fearow"
  },
  keisberg: {
    num: 1287,
    name: "Keisberg",
    types: ["Ice", "Steel"],
    baseStats: { hp: 95, atk: 110, def: 110, spa: 75, spd: 120, spe: 35 },
    abilities: { 0: "Eternal Ice" },
    heightm: 2.5,
    weightkg: 525.2,
    prevo: "Eiscue"
  },
  stontravank: {
    num: 1288,
    name: "Stontravank",
    types: ["Rock", "Grass"],
    baseStats: { hp: 110, atk: 140, def: 140, spa: 60, spd: 60, spe: 35 },
    abilities: { 0: "Traveler" },
    heightm: 4,
    weightkg: 720,
    prevo: "Stonjourner"
  },
  manatike: {
    num: 1289,
    name: "Manatike",
    types: ["Fire"],
    baseStats: { hp: 80, atk: 35, def: 65, spa: 60, spd: 65, spe: 25 },
    abilities: { 0: "Thick Fat", 1: "Flame Body", H: "Flash Fire" },
    heightm: 1.2,
    weightkg: 38,
    evos: ["Managma"]
  },
  managma: {
    num: 1290,
    name: "Managma",
    types: ["Fire"],
    baseStats: { hp: 120, atk: 55, def: 115, spa: 70, spd: 115, spe: 45 },
    abilities: { 0: "Thick Fat", 1: "Flame Body", H: "Magma Absorb" },
    heightm: 3.2,
    weightkg: 861,
    prevo: "Manatike"
  },
  kidmodo: {
    num: 1291,
    name: "Kidmodo",
    types: ["Water"],
    baseStats: { hp: 50, atk: 60, def: 45, spa: 70, spd: 45, spe: 60 },
    abilities: { 0: "Thick Fat", 1: "Rough Skin", H: "Water Absorb" },
    heightm: 0.8,
    weightkg: 44.4,
    evos: ["Komotide"]
  },
  komotide: {
    num: 1292,
    name: "Komotide",
    types: ["Water"],
    baseStats: { hp: 70, atk: 55, def: 85, spa: 115, spd: 85, spe: 110 },
    abilities: { 0: "Thick Fat", 1: "Rough Skin", H: "Storm Drain" },
    heightm: 2.8,
    weightkg: 129.2,
    prevo: "Kidmodo"
  },
  kittuff: {
    num: 1293,
    name: "Kittuff",
    types: ["Normal"],
    baseStats: { hp: 52, atk: 52, def: 42, spa: 36, spd: 36, spe: 52 },
    abilities: { 0: "Run Away", 1: "Cute Charm", H: "Steadfast" },
    heightm: 0.6,
    weightkg: 13.5,
    evos: ["Catamacho"]
  },
  catamacho: {
    num: 1294,
    name: "Catamacho",
    types: ["Normal", "Fighting"],
    baseStats: { hp: 96, atk: 126, def: 106, spa: 62, spd: 62, spe: 72 },
    abilities: { 0: "Stamina", 1: "Unnerve", H: "Steadfast" },
    heightm: 1.6,
    weightkg: 73,
    prevo: "Kittuff"
  },
  punkey: {
    num: 1295,
    name: "Punkey",
    types: ["Dark"],
    baseStats: { hp: 42, atk: 62, def: 47, spa: 42, spd: 47, spe: 65 },
    abilities: { 0: "Prankster", 1: "Own Tempo", H: "Dancer" },
    heightm: 0.3,
    weightkg: 6.8,
    evos: ["Funkey", "Clunkey", "Junkey"]
  },
  funkey: {
    num: 1296,
    name: "Funkey",
    types: ["Dark", "Fairy"],
    baseStats: { hp: 82, atk: 102, def: 67, spa: 79, spd: 97, spe: 103 },
    abilities: { 0: "Prankster", 1: "Unaware", H: "Dancer" },
    heightm: 1,
    weightkg: 36.3,
    prevo: "Punkey"
  },
  clunkey: {
    num: 1297,
    name: "Clunkey",
    types: ["Dark", "Steel"],
    baseStats: { hp: 92, atk: 112, def: 107, spa: 69, spd: 67, spe: 83 },
    abilities: { 0: "Prankster", 1: "Clear Body", H: "Dancer" },
    heightm: 0.9,
    weightkg: 49.9,
    prevo: "Punkey"
  },
  junkey: {
    num: 1298,
    name: "Junkey",
    types: ["Dark", "Poison"],
    baseStats: { hp: 87, atk: 92, def: 77, spa: 99, spd: 102, spe: 73 },
    abilities: { 0: "Prankster", 1: "Mold Breaker", H: "Dancer" },
    heightm: 1,
    weightkg: 31.3,
    prevo: "Punkey"
  },
  simisand: {
    num: 1299,
    name: "Simisand",
    types: ["Rock"],
    baseStats: { hp: 75, atk: 93, def: 63, spa: 93, spd: 63, spe: 111 },
    abilities: { 0: "Oblivious", H: "Sand Stream" },
    heightm: 1.1,
    weightkg: 30.5,
    prevo: "Pansage-Loria"
  },
  simismash: {
    num: 1300,
    name: "Simismash",
    types: ["Fighting"],
    baseStats: { hp: 75, atk: 108, def: 63, spa: 88, spd: 63, spe: 101 },
    abilities: { 0: "Oblivious", H: "Scrappy" },
    heightm: 1,
    weightkg: 28,
    prevo: "Pansear-Loria"
  },
  simisoar: {
    num: 1301,
    name: "Simisoar",
    types: ["Flying"],
    baseStats: { hp: 75, atk: 88, def: 63, spa: 108, spd: 63, spe: 101 },
    abilities: { 0: "Oblivious", H: "Aerilate" },
    heightm: 1,
    weightkg: 29,
    prevo: "Panpour-Loria"
  },
  foifish: {
    num: 1302,
    name: "Foifish",
    types: ["Water", "Steel"],
    baseStats: { hp: 35, atk: 70, def: 50, spa: 40, spd: 50, spe: 90 },
    abilities: { 0: "Steadfast", 1: "Super Luck", H: "Swift Swim" },
    heightm: 1.2,
    weightkg: 15.3,
    evos: ["Sailre"]
  },
  sailre: {
    num: 1303,
    name: "Sailre",
    types: ["Water", "Steel"],
    baseStats: { hp: 55, atk: 105, def: 90, spa: 60, spd: 70, spe: 125 },
    abilities: { 0: "Steadfast", 1: "Super Luck", H: "Swift Swim" },
    heightm: 3.8,
    weightkg: 58.2,
    prevo: "Foifish"
  },
  visiguana: {
    num: 1304,
    name: "Visiguana",
    types: ["Dragon"],
    baseStats: { hp: 50, atk: 65, def: 55, spa: 20, spd: 45, spe: 55 },
    abilities: { 0: "Infiltrator", 1: "Keen Eye", H: "Pickpocket" },
    heightm: 1.2,
    weightkg: 12.5,
    evos: ["Conquiguana"]
  },
  conquiguana: {
    num: 1305,
    name: "Conquiguana",
    types: ["Dragon", "Steel"],
    baseStats: { hp: 65, atk: 85, def: 70, spa: 60, spd: 65, spe: 75 },
    abilities: { 0: "Infiltrator", 1: "Intimidate", H: "Pickpocket" },
    heightm: 1.6,
    weightkg: 85,
    prevo: "Visiguana",
    evos: ["Imperiguana"]
  },
  imperiguana: {
    num: 1306,
    name: "Imperiguana",
    types: ["Dragon", "Steel"],
    baseStats: { hp: 80, atk: 105, def: 95, spa: 70, spd: 85, spe: 105 },
    abilities: { 0: "Infiltrator", 1: "Intimidate", H: "Pickpocket" },
    heightm: 2,
    weightkg: 119,
    prevo: "Conquiguana"
  },
  whiscraft: {
    num: 1307,
    name: "Whiscraft",
    types: ["Psychic"],
    baseStats: { hp: 67, atk: 70, def: 50, spa: 109, spd: 90, spe: 75 },
    abilities: { 0: "Insomnia", 1: "Potion Brewer", H: "Super Luck" },
    heightm: 0.7,
    weightkg: 12.5
  },
  crambicoff: {
    num: 1308,
    name: "Crambicoff",
    types: ["Bug", "Normal"],
    baseStats: { hp: 55, atk: 45, def: 45, spa: 45, spd: 50, spe: 60 },
    abilities: { 0: "Compound Eyes", 1: "Pickup", H: "Rattled" },
    heightm: 0.1,
    weightkg: 0.1,
    evos: ["Tyraloth"]
  },
  tyraloth: {
    num: 1309,
    name: "Tyraloth",
    types: ["Bug", "Flying"],
    baseStats: { hp: 65, atk: 65, def: 60, spa: 88, spd: 72, spe: 80 },
    abilities: { 0: "Compound Eyes", 1: "Tinted Lens", H: "Rattled" },
    heightm: 0.4,
    weightkg: 7.7,
    prevo: "Crambicoff",
    evos: ["Pyraustragon"]
  },
  pyraustragon: {
    num: 1310,
    name: "Pyraustragon",
    types: ["Bug", "Dragon"],
    baseStats: { hp: 70, atk: 70, def: 70, spa: 122, spd: 83, spe: 120 },
    abilities: { 0: "Flash Fire", 1: "Tinted Lens", H: "Aerilate" },
    heightm: 0.6,
    weightkg: 17.7,
    prevo: "Tyraloth"
  },
  narabel: {
    num: 1311,
    name: "Narabel",
    types: ["Grass", "Electric"],
    baseStats: { hp: 80, atk: 65, def: 105, spa: 90, spd: 80, spe: 70 },
    abilities: { 0: "Chlorophyll", H: "Static" },
    heightm: 1.5,
    weightkg: 20.5,
    prevo: "Weepinbell"
  },
  torklear: {
    num: 1312,
    name: "Torklear",
    types: ["Normal"],
    baseStats: { hp: 45, atk: 65, def: 75, spa: 65, spd: 45, spe: 10 },
    abilities: { 0: "White Smoke", 1: "Cloud Nine", H: "Shell Armor" },
    heightm: 0.3,
    weightkg: 39.9,
    evos: ["Torkoal", "Torkool"]
  },
  torkoal: {
    inherit: true,
    prevo: "Torklear",
    otherFormes: ["Torkoal-Mega"],
    formeOrder: ["Torkoal", "Torkoal-Mega"]
  },
  torkoalmega: {
    num: 324,
    name: "Torkoal-Mega",
    baseSpecies: "Torkoal",
    forme: "Mega",
    types: ["Fire", "Ground"],
    baseStats: { hp: 70, atk: 85, def: 150, spa: 140, spd: 105, spe: 20 },
    abilities: { 0: "Solar Power" },
    heightm: 0.5,
    weightkg: 120.4,
    requiredItem: "Torkoalite"
  },
  arbok: {
    inherit: true,
    otherFormes: ["Arbok-Mega"],
    formeOrder: ["Arbok", "Arbok-Mega"]
  },
  arbokmega: {
    num: 24,
    name: "Arbok-Mega",
    baseSpecies: "Arbok",
    forme: "Mega",
    types: ["Poison", "Dragon"],
    baseStats: { hp: 60, atk: 123, def: 100, spa: 65, spd: 100, spe: 100 },
    abilities: { 0: "Intimidate" },
    heightm: 4.5,
    weightkg: 85,
    requiredItem: "Arbokite"
  },
  torkool: {
    num: 1313,
    name: "Torkool",
    types: ["Ice"],
    baseStats: { hp: 70, atk: 85, def: 120, spa: 85, spd: 90, spe: 20 },
    abilities: { 0: "White Smoke", 1: "Snow Warning", H: "Shell Armor" },
    heightm: 0.5,
    weightkg: 80.3,
    prevo: "Torklear",
    otherFormes: ["Torkool-Mega"],
    formeOrder: ["Torkool", "Torkool-Mega"]
  },
  torkoolmega: {
    num: 1313,
    name: "Torkool-Mega",
    baseSpecies: "Torkool",
    forme: "Mega",
    types: ["Ice", "Ground"],
    baseStats: { hp: 70, atk: 85, def: 130, spa: 140, spd: 90, spe: 55 },
    abilities: { 0: "Slush Rush" },
    heightm: 0.5,
    weightkg: 120.4,
    requiredItem: "Torkoolite"
  },
  aretle: {
    num: 1314,
    name: "Aretle",
    types: ["Steel", "Bug"],
    baseStats: { hp: 45, atk: 40, def: 70, spa: 60, spd: 50, spe: 35 },
    abilities: { 0: "Heatproof", H: "Mirror Armor" },
    heightm: 0.2,
    weightkg: 45,
    evos: ["Beetleton"]
  },
  beetleton: {
    num: 1315,
    name: "Beetleton",
    types: ["Steel", "Bug"],
    baseStats: { hp: 60, atk: 55, def: 100, spa: 80, spd: 80, spe: 45 },
    abilities: { 0: "Heatproof", H: "Mirror Armor" },
    heightm: 0.6,
    weightkg: 90,
    prevo: "Aretle",
    evos: ["Ironmor"]
  },
  ironmor: {
    num: 1316,
    name: "Ironmor",
    types: ["Steel", "Bug"],
    baseStats: { hp: 70, atk: 95, def: 130, spa: 120, spd: 120, spe: 65 },
    abilities: { 0: "Heatproof", H: "Mirror Armor" },
    heightm: 1.7,
    weightkg: 440.4,
    prevo: "Beetleton"
  },
  beesquitto: {
    num: 1317,
    name: "Beesquitto",
    types: ["Bug", "Psychic"],
    baseStats: { hp: 80, atk: 123, def: 77, spa: 77, spd: 123, spe: 100 },
    abilities: { 0: "Disastrous", H: "Gluttony" },
    heightm: 1.9,
    weightkg: 210
  },
  masaque: {
    num: 1318,
    name: "Masaque",
    types: ["Electric", "Fighting"],
    baseStats: { hp: 80, atk: 123, def: 100, spa: 123, spd: 77, spe: 77 },
    abilities: { 0: "Disastrous", H: "No Guard" },
    heightm: 2.2,
    weightkg: 132.6
  },
  hauntoll: {
    num: 1319,
    name: "Hauntoll",
    types: ["Ghost", "Fairy"],
    baseStats: { hp: 123, atk: 80, def: 77, spa: 123, spd: 100, spe: 77 },
    abilities: { 0: "Disastrous", H: "Cursed Body" },
    heightm: 1.2,
    weightkg: 10
  },
  amadire: {
    num: 1320,
    name: "Amadire",
    types: ["Ground", "Fire"],
    baseStats: { hp: 80, atk: 77, def: 123, spa: 100, spd: 123, spe: 77 },
    abilities: { 0: "Disastrous", H: "Dry Skin" },
    heightm: 3,
    weightkg: 300.3
  },
  pratrame: {
    num: 1321,
    name: "Pratrame",
    types: ["Electric", "Fairy"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 120, spd: 100, spe: 60 },
    abilities: { 0: "Plus", H: "Static" },
    heightm: 1.5,
    weightkg: 64
  },
  vishneute: {
    num: 1322,
    name: "Vishneute",
    types: ["Electric", "Psychic"],
    baseStats: { hp: 100, atk: 110, def: 70, spa: 130, spd: 70, spe: 100 },
    abilities: { 0: "Levitate", H: "Static" },
    heightm: 1.5,
    weightkg: 64
  },
  negashive: {
    num: 1323,
    name: "Negashive",
    types: ["Electric", "Poison"],
    baseStats: { hp: 100, atk: 140, def: 60, spa: 160, spd: 60, spe: 60 },
    abilities: { 0: "Minus", H: "Static" },
    heightm: 1.5,
    weightkg: 64
  },
  fortuigon: {
    num: 1327,
    name: "Fortuigon",
    types: ["Dragon"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Super Luck" },
    heightm: 11,
    weightkg: 200
  },
  skitty: {
    inherit: true,
    otherFormes: ["Skitty-Loria"],
    formeOrder: ["Skitty", "Skitty-Loria"]
  },
  delcatty: {
    inherit: true,
    otherFormes: ["Delcatty-Loria"],
    formeOrder: ["Delcatty", "Delcatty-Loria"]
  },
  spoink: {
    inherit: true,
    otherFormes: ["Spoink-Loria"],
    formeOrder: ["Spoink", "Spoink-Loria"]
  },
  grumpig: {
    inherit: true,
    otherFormes: ["Grumpig-Mega", "Grumpig-Loria", "Grumpig-Loria-Mega"],
    formeOrder: ["Grumpig", "Grumpig-Mega", "Grumpig-Loria", "Grumpig-Loria-Mega"]
  },
  grumpigmega: {
    num: 326,
    name: "Grumpig-Mega",
    baseSpecies: "Grumpig",
    forme: "Mega",
    types: ["Psychic", "Rock"],
    baseStats: { hp: 80, atk: 45, def: 105, spa: 120, spd: 160, spe: 60 },
    abilities: { 0: "Dazzling" },
    heightm: 1.7,
    weightkg: 112.2,
    requiredItem: "Grumpigite"
  },
  grumpigloriamega: {
    num: 326,
    name: "Grumpig-Loria-Mega",
    baseSpecies: "Grumpig",
    forme: "Loria-Mega",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 80, atk: 45, def: 150, spa: 130, spd: 115, spe: 50 },
    abilities: { 0: "Dazzling" },
    heightm: 1.7,
    weightkg: 132.2,
    requiredItem: "Grumpigite"
  },
  beheeyem: {
    inherit: true,
    otherFormes: ["Beheeyem-Loria"],
    formeOrder: ["Beheeyem", "Beheeyem-Loria"]
  },
  elgyem: {
    inherit: true,
    otherFormes: ["Elgyem-Loria"],
    formeOrder: ["Elgyem", "Elgyem-Loria"]
  },
  litleo: {
    inherit: true,
    otherFormes: ["Litleo-Loria"],
    formeOrder: ["Litleo", "Litleo-Loria"]
  },
  pyroar: {
    inherit: true,
    otherFormes: ["Pyroar-Loria"],
    formeOrder: ["Pyroar", "Pyroar-Loria"]
  },
  bagon: {
    inherit: true,
    otherFormes: ["Bagon-Loria"],
    formeOrder: ["Bagon", "Bagon-Loria"]
  },
  shelgon: {
    inherit: true,
    otherFormes: ["Shelgon-Loria"],
    formeOrder: ["Shelgon", "Shelgon-Loria"]
  },
  salamence: {
    inherit: true,
    otherFormes: ["Salamence-Mega", "Salamence-Loria"],
    formeOrder: ["Salamence", "Salamence-Mega", "Salamence-Loria"]
  },
  yanma: {
    inherit: true,
    otherFormes: ["Yanma-Loria"],
    formeOrder: ["Yanma", "Yanma-Loria"]
  },
  sandile: {
    inherit: true,
    otherFormes: ["Sandile-Loria"],
    formeOrder: ["Sandile", "Sandile-Loria"]
  },
  krokorok: {
    inherit: true,
    otherFormes: ["Krokorok-Loria"],
    formeOrder: ["Krokorok", "Krokorok-Loria"]
  },
  throh: {
    inherit: true,
    otherFormes: ["Throh-Prehistoric"],
    formeOrder: ["Throh", "Throh-Prehistoric"]
  },
  sawk: {
    inherit: true,
    otherFormes: ["Sawk-Prehistoric"],
    formeOrder: ["Sawk", "Sawk-Prehistoric"]
  },
  panpour: {
    inherit: true,
    otherFormes: ["Panpour-Loria"],
    formeOrder: ["Panpour", "Panpour-Loria"]
  },
  pansear: {
    inherit: true,
    otherFormes: ["Pansear-Loria"],
    formeOrder: ["Pansear", "Pansear-Loria"]
  },
  pansage: {
    inherit: true,
    otherFormes: ["Pansage-Loria"],
    formeOrder: ["Pansage", "Pansage-Loria"]
  },
  skittyloria: {
    num: 300,
    name: "Skitty-Loria",
    baseSpecies: "Skitty",
    forme: "Loria",
    types: ["Fairy", "Ice"],
    baseStats: { hp: 50, atk: 45, def: 45, spa: 35, spd: 35, spe: 50 },
    abilities: { 0: "Ice Body", 1: "Refrigerate", H: "Wonder Skin" },
    heightm: 0.4,
    weightkg: 12,
    evos: ["Delcatty-Loria"]
  },
  delcattyloria: {
    num: 301,
    name: "Delcatty-Loria",
    baseSpecies: "Delcatty",
    forme: "Loria",
    types: ["Fairy", "Ice"],
    baseStats: { hp: 70, atk: 65, def: 65, spa: 55, spd: 55, spe: 90 },
    abilities: { 0: "Ice Body", 1: "Refrigerate", H: "Wonder Skin" },
    heightm: 1,
    weightkg: 36.6,
    prevo: "Skitty-Loria",
    evos: ["Glucatty"]
  },
  spoinkloria: {
    num: 325,
    name: "Spoink-Loria",
    baseSpecies: "Spoink",
    forme: "Loria",
    types: ["Rock"],
    baseStats: { hp: 60, atk: 25, def: 80, spa: 70, spd: 35, spe: 60 },
    abilities: { 0: "Dazzling", 1: "Own Tempo", H: "Gluttony" },
    heightm: 0.7,
    weightkg: 30.6,
    evos: ["Grumpig-Loria"]
  },
  grumpigloria: {
    num: 326,
    name: "Grumpig-Loria",
    baseSpecies: "Grumpig",
    forme: "Loria",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 80, atk: 45, def: 110, spa: 100, spd: 65, spe: 70 },
    abilities: { 0: "Dazzling", 1: "Own Tempo", H: "Gluttony" },
    heightm: 0.9,
    weightkg: 71.5,
    prevo: "Spoink-Loria"
  },
  elgyemloria: {
    num: 605,
    name: "Elgyem-Loria",
    baseSpecies: "Elgyem",
    forme: "Loria",
    types: ["Psychic", "Ice"],
    baseStats: { hp: 55, atk: 55, def: 75, spa: 55, spd: 75, spe: 20 },
    abilities: { 0: "Technician", 1: "Synchronize", H: "Compound Eyes" },
    heightm: 0.6,
    weightkg: 13,
    evos: ["Beheeyem-Loria"]
  },
  beheeyemloria: {
    num: 606,
    name: "Beheeyem-Loria",
    baseSpecies: "Beheeyem",
    forme: "Loria",
    types: ["Psychic", "Ice"],
    baseStats: { hp: 65, atk: 95, def: 75, spa: 95, spd: 75, spe: 80 },
    abilities: { 0: "Technician", 1: "Synchronize", H: "Compound Eyes" },
    heightm: 1.4,
    weightkg: 55.5,
    prevo: "Elgyem-Loria"
  },
  litleoloria: {
    num: 667,
    name: "Litleo-Loria",
    baseSpecies: "Litleo",
    forme: "Loria",
    types: ["Grass", "Dark"],
    baseStats: { hp: 62, atk: 73, def: 58, spa: 50, spd: 54, spe: 72 },
    abilities: { 0: "Intimidate", 1: "Unnerve", H: "Moxie" },
    heightm: 0.6,
    weightkg: 13.5,
    evos: ["Pyroar-Loria"]
  },
  pyroarloria: {
    num: 668,
    name: "Pyroar-Loria",
    baseSpecies: "Pyroar",
    forme: "Loria",
    types: ["Grass", "Dark"],
    baseStats: { hp: 86, atk: 109, def: 72, spa: 68, spd: 66, spe: 106 },
    abilities: { 0: "Intimidate", 1: "Tough Claws", H: "Moxie" },
    heightm: 1.5,
    weightkg: 81.5,
    prevo: "Litleo-Loria",
    evos: ["Jungelion"]
  },
  bagonloria: {
    num: 371,
    name: "Bagon-Loria",
    baseSpecies: "Bagon",
    forme: "Loria",
    types: ["Ghost", "Rock"],
    baseStats: { hp: 45, atk: 75, def: 60, spa: 40, spd: 30, spe: 50 },
    abilities: { 0: "Rock Head", H: "Clear Body" },
    heightm: 0.3,
    weightkg: 2.1,
    evos: ["Shelgon-Loria"]
  },
  shelgonloria: {
    num: 372,
    name: "Shelgon-Loria",
    baseSpecies: "Shelgon",
    forme: "Loria",
    types: ["Ghost", "Rock"],
    baseStats: { hp: 65, atk: 95, def: 100, spa: 60, spd: 50, spe: 50 },
    abilities: { 0: "Rock Head", H: "Clear Body" },
    heightm: 1.1,
    weightkg: 65.1,
    prevo: "Bagon-Loria",
    evos: ["Salamence-Loria"]
  },
  salamenceloria: {
    num: 373,
    name: "Salamence-Loria",
    baseSpecies: "Salamence",
    forme: "Loria",
    types: ["Ghost", "Rock"],
    baseStats: { hp: 95, atk: 135, def: 110, spa: 90, spd: 95, spe: 75 },
    abilities: { 0: "Soaring Spirit" },
    heightm: 1.5,
    weightkg: 36.7,
    prevo: "Shelgon-Loria"
  },
  yanmaloria: {
    num: 193,
    name: "Yanma-Loria",
    baseSpecies: "Yanma",
    forme: "Loria",
    types: ["Bug", "Water"],
    baseStats: { hp: 65, atk: 55, def: 45, spa: 75, spd: 55, spe: 95 },
    abilities: { 0: "Levitate", 1: "Compound Eyes", H: "Heatproof" },
    heightm: 1.2,
    weightkg: 38,
    evos: ["Yanmazure"]
  },
  sandileloria: {
    num: 551,
    name: "Sandile-Loria",
    baseSpecies: "Sandile",
    forme: "Loria",
    types: ["Ground", "Water"],
    baseStats: { hp: 50, atk: 72, def: 35, spa: 35, spd: 35, spe: 65 },
    abilities: { 0: "Water Veil", 1: "Moxie", H: "Battle Tide" },
    heightm: 0.4,
    weightkg: 15.2,
    evos: ["Krokorok-Loria"]
  },
  krokorokloria: {
    num: 552,
    name: "Krokorok-Loria",
    baseSpecies: "Krokorok",
    forme: "Loria",
    types: ["Ground", "Water"],
    baseStats: { hp: 60, atk: 82, def: 45, spa: 45, spd: 45, spe: 74 },
    abilities: { 0: "Water Veil", 1: "Moxie", H: "Battle Tide" },
    heightm: 1,
    weightkg: 33.4,
    prevo: "Sandile-Loria",
    evos: ["Krokoasis"]
  },
  throhprehistoric: {
    num: 538,
    name: "Throh-Prehistoric",
    baseSpecies: "Throh",
    forme: "Prehistoric",
    types: ["Rock", "Ground"],
    baseStats: { hp: 120, atk: 100, def: 75, spa: 30, spd: 95, spe: 45 },
    abilities: { 0: "Dry Skin", 1: "Long Reach", H: "Technician" },
    heightm: 1.3,
    weightkg: 65.6,
    evos: ["Jahvolen"]
  },
  sawkprehistoric: {
    num: 539,
    name: "Sawk-Prehistoric",
    baseSpecies: "Sawk",
    forme: "Prehistoric",
    types: ["Rock", "Dark"],
    baseStats: { hp: 75, atk: 125, def: 80, spa: 30, spd: 65, spe: 90 },
    abilities: { 0: "Pressure", 1: "Long Reach", H: "Defiant" },
    heightm: 1.4,
    weightkg: 53.2,
    evos: ["Kluhbur"]
  },
  pansageloria: {
    num: 511,
    name: "Pansage-Loria",
    baseSpecies: "Pansage",
    forme: "Loria",
    types: ["Rock"],
    baseStats: { hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64 },
    abilities: { 0: "Oblivious", H: "Sand Stream" },
    heightm: 0.6,
    weightkg: 10.5,
    evos: ["Simisand"]
  },
  pansearloria: {
    num: 513,
    name: "Pansear-Loria",
    baseSpecies: "Pansear",
    forme: "Loria",
    types: ["Fighting"],
    baseStats: { hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64 },
    abilities: { 0: "Oblivious", H: "Scrappy" },
    heightm: 0.6,
    weightkg: 11,
    evos: ["Simismash"]
  },
  panpourloria: {
    num: 515,
    name: "Panpour-Loria",
    baseSpecies: "Panpour",
    forme: "Loria",
    types: ["Flying"],
    baseStats: { hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64 },
    abilities: { 0: "Oblivious", H: "Aerilate" },
    heightm: 0.6,
    weightkg: 13.5,
    evos: ["Simisoar"]
  },
  tropius: {
    inherit: true,
    name: "Tropius",
    prevo: "Tropitano",
    evos: ["Tropiconti"]
  },
  toxicroak: {
    inherit: true,
    name: "Toxicroak",
    evos: ["Croakorrode"]
  },
  spiritomb: {
    inherit: true,
    name: "Spiritomb",
    evos: ["Corruptomb"]
  },
  pawniard: {
    inherit: true,
    name: "Pawniard",
    evos: ["Bisharp", "Knightmare"]
  },
  fearow: {
    inherit: true,
    name: "Fearow",
    evos: ["Hearow"]
  },
  eiscue: {
    inherit: true,
    name: "Eiscue",
    evos: ["Keisberg"]
  },
  stonjourner: {
    inherit: true,
    name: "Stonjourner",
    evos: ["Stontravank"]
  },
  weepinbell: {
    inherit: true,
    name: "Weepinbell",
    evos: ["Victreebel", "Narabel"]
  },
  magby: {
    inherit: true,
    abilities: { 0: "Flame Body", 1: "Precision", H: "Vital Spirit" }
  },
  magmar: {
    inherit: true,
    abilities: { 0: "Flame Body", 1: "Precision", H: "Vital Spirit" }
  },
  magmortar: {
    inherit: true,
    abilities: { 0: "Flame Body", 1: "Precision", H: "Vital Spirit" }
  },
  elekid: {
    inherit: true,
    abilities: { 0: "Static", 1: "Ambitious", H: "Vital Spirit" }
  },
  electabuzz: {
    inherit: true,
    abilities: { 0: "Static", 1: "Ambitious", H: "Vital Spirit" }
  },
  electivire: {
    inherit: true,
    abilities: { 0: "Motor Drive", 1: "Ambitious", H: "Vital Spirit" }
  },
  oranguru: {
    inherit: true,
    abilities: { 0: "Precision", 1: "Telepathy", H: "Symbiosis" }
  },
  passimian: {
    inherit: true,
    abilities: { 0: "Receiver", 1: "Bombadier", H: "Defiant" }
  },
  rotom: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Precision" }
  },
  rotomheat: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Precision" }
  },
  rotomwash: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Precision" }
  },
  rotomfrost: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Precision" }
  },
  rotomfan: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Precision" }
  },
  rotommow: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Precision" }
  },
  regice: {
    inherit: true,
    abilities: { 0: "Clear Body", H: "Eternal Ice" }
  },
  sudowoodo: {
    inherit: true,
    abilities: { 0: "Sturdy", 1: "Rock Head", H: "Traveler" }
  },
  serperior: {
    inherit: true,
    otherFormes: ["Serperior-Mega"],
    formeOrder: ["Serperior", "Serperior-Mega"]
  },
  serperiormega: {
    num: 497,
    name: "Serperior-Mega",
    baseSpecies: "Serperior",
    forme: "Mega",
    types: ["Grass", "Dragon"],
    baseStats: { hp: 75, atk: 130, def: 110, spa: 75, spd: 110, spe: 128 },
    abilities: { 0: "Dazzling" },
    heightm: 4.3,
    weightkg: 73,
    requiredItem: "Serperite"
  },
  emboar: {
    inherit: true,
    otherFormes: ["Emboar-Mega"],
    formeOrder: ["Emboar", "Emboar-Mega"]
  },
  emboarmega: {
    num: 500,
    name: "Emboar-Mega",
    baseSpecies: "Emboar",
    forme: "Mega",
    types: ["Fire", "Fighting"],
    baseStats: { hp: 110, atk: 128, def: 85, spa: 125, spd: 125, spe: 55 },
    abilities: { 0: "Sheer Force" },
    heightm: 2.2,
    weightkg: 250.5,
    requiredItem: "Emboarite"
  },
  samurott: {
    inherit: true,
    otherFormes: ["Samurott-Mega", "Samurott-Hisui"],
    formeOrder: ["Samurott", "Samurott-Mega", "Samurott-Hisui"]
  },
  samurottmega: {
    num: 503,
    name: "Samurott-Mega",
    baseSpecies: "Samurott",
    forme: "Mega",
    types: ["Water", "Ghost"],
    baseStats: { hp: 95, atk: 125, def: 125, spa: 128, spd: 85, spe: 70 },
    abilities: { 0: "Ancestor Call" },
    heightm: 1.5,
    weightkg: 114.3,
    requiredItem: "Samurite"
  }
};
//# sourceMappingURL=pokedex.js.map
