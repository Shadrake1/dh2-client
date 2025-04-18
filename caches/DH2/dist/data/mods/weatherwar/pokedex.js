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
  groudon: {
    inherit: true,
    num: 1,
    name: "Groudon",
    types: ["Ground"],
    baseStats: { hp: 100, atk: 120, def: 120, spa: 70, spd: 70, spe: 70 },
    abilities: { 0: "Sand Stream", 1: "Solar Power", H: "Earth Eater" }
  },
  groudonprimal: {
    inherit: true,
    num: 2,
    name: "Groudon-Primal",
    types: ["Ground", "Fire"],
    baseStats: { hp: 100, atk: 150, def: 140, spa: 120, spd: 90, spe: 50 },
    abilities: { 0: "Solar Flare" }
  },
  kyogre: {
    inherit: true,
    num: 3,
    name: "Kyogre",
    types: ["Water"],
    baseStats: { hp: 100, atk: 70, def: 70, spa: 120, spd: 120, spe: 70 },
    abilities: { 0: "Monsoon", 1: "Snow Cloak", H: "Volt Absorb" }
  },
  kyogreprimal: {
    inherit: true,
    num: 4,
    name: "Kyogre-Primal",
    types: ["Water", "Ice"],
    baseStats: { hp: 100, atk: 120, def: 90, spa: 150, spd: 140, spe: 50 },
    abilities: { 0: "Snow Warning" }
  },
  rayquaza: {
    inherit: true,
    num: 5,
    name: "Rayquaza",
    types: ["Dragon"],
    baseStats: { hp: 95, atk: 90, def: 110, spa: 90, spd: 110, spe: 55 },
    abilities: { 0: "Zerg Rush", 1: "Draco Jet", H: "Air Lock" }
  },
  rayquazamega: {
    inherit: true,
    num: 6,
    name: "Rayquaza-Mega",
    types: ["Dragon", "Flying"],
    baseStats: { hp: 95, atk: 105, def: 110, spa: 125, spd: 110, spe: 105 },
    abilities: { 0: "Delta Stream" }
  },
  castform: {
    inherit: true,
    num: 7,
    name: "Castform",
    types: ["Normal"],
    baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
    abilities: { 0: "Forecast", 1: "Air Lock", H: "Weather Setter" }
  },
  doublade: {
    inherit: true,
    num: 8,
    name: "Doublade",
    types: ["Steel", "Ghost"],
    baseStats: { hp: 69, atk: 100, def: 150, spa: 55, spd: 89, spe: 37 },
    abilities: { 0: "Delusion", 1: "Dark Fantasy", H: "Second Impact" },
    evos: null
  },
  lugia: {
    inherit: true,
    num: 9,
    name: "Lugia",
    types: ["Psychic", "Flying"],
    baseStats: { hp: 106, atk: 50, def: 90, spa: 110, spd: 114, spe: 80 },
    abilities: { 0: "Delta Stream", 1: "Slipstream", H: "Magic Guard" }
  },
  zapdos: {
    inherit: true,
    num: 10,
    name: "Zapdos",
    types: ["Electric", "Flying"],
    baseStats: { hp: 90, atk: 60, def: 85, spa: 125, spd: 90, spe: 100 },
    abilities: { 0: "Squall", 1: "Slipstream", H: "Wind Power" }
  },
  articuno: {
    inherit: true,
    num: 11,
    name: "Articuno",
    types: ["Ice", "Flying"],
    baseStats: { hp: 90, atk: 55, def: 100, spa: 95, spd: 125, spe: 85 },
    abilities: { 0: "Snow Cloak", 1: "Slipstream", H: "Magic Guard" }
  },
  archaludon: {
    inherit: true,
    num: 12,
    name: "Archaludon",
    types: ["Steel", "Electric"],
    baseStats: { hp: 90, atk: 75, def: 110, spa: 125, spd: 65, spe: 85 },
    abilities: { 0: "Second Impact", 1: "Flare Boost", H: "Short Circuit" }
  },
  dialga: {
    inherit: true,
    num: 13,
    name: "Dialga",
    types: ["Steel", "Dragon"],
    baseStats: { hp: 80, atk: 100, def: 80, spa: 120, spd: 100, spe: 70 },
    abilities: { 0: "Time Machine", 1: "Second Impact", H: "Stamina" }
  },
  dragonair: {
    inherit: true,
    num: 14,
    name: "Dragonair",
    types: ["Water", "Fire"],
    baseStats: { hp: 91, atk: 60, def: 115, spa: 114, spd: 110, spe: 60 },
    abilities: { 0: "Climate Change" },
    evos: null
  },
  flygon: {
    inherit: true,
    num: 15,
    name: "Flygon",
    types: ["Dragon", "Ground"],
    baseStats: { hp: 80, atk: 80, def: 80, spa: 110, spd: 80, spe: 100 },
    abilities: { 0: "Sand Stream", 1: "Draco Jet", H: "Levitate" }
  },
  torkoal: {
    inherit: true,
    num: 16,
    name: "Torkoal",
    types: ["Fire", "Poison"],
    baseStats: { hp: 70, atk: 85, def: 140, spa: 85, spd: 100, spe: 20 },
    abilities: { 0: "Solar Flare", 1: "Solar Power", H: "Water Absorb" }
  },
  ninetales: {
    inherit: true,
    num: 17,
    name: "Ninetales",
    types: ["Fire", "Ghost"],
    baseStats: { hp: 73, atk: 76, def: 100, spa: 81, spd: 100, spe: 100 },
    abilities: { 0: "Solar Flare", 1: "Banshee", H: "Delusion" }
  },
  charizard: {
    inherit: true,
    num: 18,
    name: "Charizard",
    types: ["Fire", "Dragon"],
    baseStats: { hp: 78, atk: 114, def: 78, spa: 85, spd: 85, spe: 90 },
    abilities: { 0: "Blaze", 1: "Solar Power", H: "Draco Jet" }
  },
  charizardmegay: {
    inherit: true,
    num: 19,
    name: "Charizard-Mega-Y",
    types: ["Fire", "Flying"],
    baseStats: { hp: 78, atk: 94, def: 88, spa: 145, spd: 115, spe: 110 },
    abilities: { 0: "Slipstream" }
  },
  pelipper: {
    inherit: true,
    num: 20,
    name: "Pelipper",
    types: ["Water", "Flying"],
    baseStats: { hp: 80, atk: 60, def: 130, spa: 95, spd: 70, spe: 65 },
    abilities: { 0: "Delta Stream", 1: "Monsoon", H: "Sticky Hold" }
  },
  politoed: {
    inherit: true,
    num: 21,
    name: "Politoed",
    types: ["Water", "Normal"],
    baseStats: { hp: 90, atk: 105, def: 75, spa: 80, spd: 130, spe: 50 },
    abilities: { 0: "Monsoon", 1: "Duomod Reference??", H: "Finger Waggler" }
  },
  tyranitar: {
    inherit: true,
    num: 22,
    name: "Tyranitar",
    types: ["Rock", "Dark"],
    baseStats: { hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61 },
    abilities: { 0: "Blackout", 1: "Sand Force", H: "Ambush" }
  },
  tyranitarmega: {
    inherit: true,
    num: 23,
    name: "Tyranitar-Mega",
    types: ["Rock", "Ground"],
    baseStats: { hp: 100, atk: 164, def: 150, spa: 115, spd: 120, spe: 51 },
    abilities: { 0: "Landslide" }
  },
  hippowdon: {
    inherit: true,
    num: 24,
    name: "Hippowdon",
    types: ["Ground", "Fighting"],
    baseStats: { hp: 108, atk: 112, def: 118, spa: 68, spd: 72, spe: 47 },
    abilities: { 0: "Sand Stream", 1: "Sand Force", H: "Contrary" }
  },
  abomasnow: {
    inherit: true,
    num: 25,
    name: "Abomasnow",
    types: ["Ice", "Grass"],
    baseStats: { hp: 90, atk: 52, def: 115, spa: 112, spd: 115, spe: 56 },
    abilities: { 0: "Ruin", 1: "Snow Warning", H: "Ice Scales" }
  },
  abomasnowmega: {
    inherit: true,
    num: 26,
    name: "Abomasnow-Mega",
    types: ["Ice", "Fighting"],
    baseStats: { hp: 90, atk: 52, def: 145, spa: 142, spd: 145, spe: 66 },
    abilities: { 0: "Snow Cloak" }
  },
  ninetalesalola: {
    inherit: true,
    num: 27,
    name: "Ninetales-Alola",
    types: ["Ice", "Fairy"],
    baseStats: { hp: 73, atk: 76, def: 75, spa: 106, spd: 100, spe: 100 },
    abilities: { 0: "Snow Warning", 1: "Fairytale", H: "Quick Feet" }
  },
  dragapult: {
    inherit: true,
    num: 28,
    name: "Dragapult",
    types: ["Ghost", "Dragon"],
    baseStats: { hp: 88, atk: 100, def: 85, spa: 100, spd: 85, spe: 142 },
    abilities: { 0: "Zerg Rush", 1: "Ambush", H: "Clear Body" }
  },
  electrode: {
    inherit: true,
    num: 29,
    name: "Electrode",
    types: ["Electric", "Normal"],
    baseStats: { hp: 80, atk: 50, def: 80, spa: 90, spd: 80, spe: 150 },
    abilities: { 0: "Squall", 1: "Short Circuit", H: "Lightning Rod" }
  },
  clefable: {
    inherit: true,
    num: 30,
    name: "Clefable",
    types: ["Normal", "Fairy"],
    baseStats: { hp: 95, atk: 90, def: 90, spa: 105, spd: 90, spe: 60 },
    abilities: { 0: "Finger Waggler", 1: "Fairytale", H: "Duomod Reference??" }
  },
  heliolisk: {
    inherit: true,
    num: 31,
    name: "Heliolisk",
    types: ["Electric", "Fire"],
    baseStats: { hp: 72, atk: 55, def: 92, spa: 109, spd: 92, spe: 110 },
    abilities: { 0: "Wet Skin", 1: "Solar Power", H: "Sand Force" }
  },
  altaria: {
    inherit: true,
    num: 32,
    name: "Altaria",
    types: ["Dragon", "Flying"],
    baseStats: { hp: 85, atk: 80, def: 100, spa: 80, spd: 105, spe: 80 },
    abilities: { 0: "Air Lock", 1: "Draco Jet", H: "Unaware" }
  },
  altariamega: {
    inherit: true,
    num: 33,
    name: "Altaria-Mega",
    types: ["Dragon", "Fairy"],
    baseStats: { hp: 85, atk: 110, def: 120, spa: 110, spd: 120, spe: 85 },
    abilities: { 0: "Fairytale" }
  },
  lickilicky: {
    inherit: true,
    num: 34,
    name: "Lickilicky",
    types: ["Normal"],
    baseStats: { hp: 120, atk: 85, def: 95, spa: 85, spd: 95, spe: 50 },
    abilities: { 0: "Finger Waggler", 1: "Cloud Nine", H: "Thick Fat" }
  },
  golduck: {
    inherit: true,
    num: 35,
    name: "Golduck",
    types: ["Water", "Psychic"],
    baseStats: { hp: 80, atk: 72, def: 78, spa: 115, spd: 80, spe: 105 },
    abilities: { 0: "Domain Expander", 1: "Duomod Reference??", H: "Cloud Nine" }
  },
  drampa: {
    inherit: true,
    num: 36,
    name: "Drampa",
    types: ["Normal", "Dragon"],
    baseStats: { hp: 108, atk: 60, def: 85, spa: 135, spd: 91, spe: 51 },
    abilities: { 0: "Zerg Rush", 1: "Cloud Nine", H: "Punk Rock" }
  },
  venusaur: {
    inherit: true,
    num: 37,
    name: "Venusaur",
    types: ["Grass", "Poison"],
    baseStats: { hp: 80, atk: 82, def: 83, spa: 105, spd: 100, spe: 80 },
    abilities: { 0: "Overgrow", 1: "Shart", H: "Chlorophyll" }
  },
  venusaurmega: {
    inherit: true,
    num: 38,
    name: "Venusaur-Mega",
    types: ["Grass", "Poison"],
    baseStats: { hp: 80, atk: 100, def: 123, spa: 127, spd: 120, spe: 80 },
    abilities: { 0: "Ruin" }
  },
  sawsbuck: {
    inherit: true,
    num: 39,
    name: "Sawsbuck",
    types: ["Normal", "Grass"],
    baseStats: { hp: 75, atk: 105, def: 75, spa: 85, spd: 75, spe: 115 },
    abilities: { 0: "Chlorophyll", 1: "Solar Power", H: "Serene Grace" },
    cosmeticFormes: null,
    formeOrder: null
  },
  beedrill: {
    inherit: true,
    num: 40,
    name: "Beedrill",
    types: ["Bug", "Poison"],
    baseStats: { hp: 85, atk: 110, def: 55, spa: 40, spd: 85, spe: 125 },
    abilities: { 0: "Swarm", 1: "Shart", H: "Protean" }
  },
  beedrillmega: {
    inherit: true,
    num: 41,
    name: "Beedrill-Mega",
    types: ["Bug", "Poison"],
    baseStats: { hp: 85, atk: 130, def: 100, spa: 40, spd: 100, spe: 145 },
    abilities: { 0: "Corrosion" }
  },
  scizor: {
    inherit: true,
    num: 42,
    name: "Scizor",
    types: ["Bug", "Steel"],
    baseStats: { hp: 70, atk: 130, def: 100, spa: 55, spd: 80, spe: 65 },
    abilities: { 0: "Swarm", 1: "Second Impact", H: "Regenerator" }
  },
  scizormega: {
    inherit: true,
    num: 43,
    name: "Scizor-Mega",
    types: ["Bug", "Steel"],
    baseStats: { hp: 70, atk: 150, def: 140, spa: 95, spd: 100, spe: 45 },
    abilities: { 0: "Technician" }
  },
  kleavor: {
    inherit: true,
    num: 44,
    name: "Kleavor",
    types: ["Bug", "Rock"],
    baseStats: { hp: 70, atk: 135, def: 85, spa: 45, spd: 70, spe: 95 },
    abilities: { 0: "Swarm", 1: "Landslide", H: "Tough Claws" }
  },
  heracross: {
    inherit: true,
    num: 45,
    name: "Heracross",
    types: ["Bug", "Fighting"],
    baseStats: { hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85 },
    abilities: { 0: "Swarm", 1: "Beatdown", H: "Guts" }
  },
  heracrossmega: {
    inherit: true,
    num: 46,
    name: "Heracross-Mega",
    types: ["Bug", "Fighting"],
    baseStats: { hp: 80, atk: 155, def: 135, spa: 50, spd: 135, spe: 45 },
    abilities: { 0: "Suplex" }
  },
  vespiquen: {
    inherit: true,
    num: 47,
    name: "Vespiquen",
    types: ["Bug", "Flying"],
    baseStats: { hp: 106, atk: 70, def: 102, spa: 110, spd: 102, spe: 40 },
    abilities: { 0: "Swarm", 1: "Hivemind", H: "Magic Bounce" }
  },
  volbeat: {
    inherit: true,
    num: 48,
    name: "Volbeat",
    types: ["Bug", "Electric"],
    baseStats: { hp: 95, atk: 62, def: 85, spa: 88, spd: 95, spe: 105 },
    abilities: { 0: "Swarm", 1: "Duomod Reference??", H: "Weather Setter" }
  },
  kingdra: {
    inherit: true,
    num: 49,
    name: "Kingdra",
    types: ["Water", "Dragon"],
    baseStats: { hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 85 },
    abilities: { 0: "Draco Jet", 1: "Wet Skin", H: "Sniper" }
  },
  excadrill: {
    inherit: true,
    num: 50,
    name: "Excadrill",
    types: ["Ground", "Steel"],
    baseStats: { hp: 110, atk: 115, def: 60, spa: 70, spd: 87, spe: 88 },
    abilities: { 0: "Sand Rush", 1: "Sand Force", H: "Mold Breaker" }
  },
  tornadustherian: {
    inherit: true,
    num: 51,
    name: "Tornadus-Therian",
    types: ["Flying"],
    baseStats: { hp: 79, atk: 100, def: 70, spa: 100, spd: 80, spe: 121 },
    abilities: { 0: "Slipstream", 1: "Duomod Reference??", H: "Regenerator" }
  },
  thundurustherian: {
    inherit: true,
    num: 52,
    name: "Thundurus-Therian",
    types: ["Electric", "Fighting"],
    baseStats: { hp: 79, atk: 115, def: 70, spa: 115, spd: 70, spe: 101 },
    abilities: { 0: "Beatdown", 1: "Short Circuit", H: "Motor Drive" }
  },
  tentacruel: {
    inherit: true,
    num: 53,
    name: "Tentacruel",
    types: ["Water", "Poison"],
    baseStats: { hp: 80, atk: 70, def: 75, spa: 95, spd: 120, spe: 90 },
    abilities: { 0: "Corrosion", 1: "Wet Skin", H: "Liquid Ooze" }
  },
  toedscruel: {
    inherit: true,
    num: 54,
    name: "Toedscruel",
    types: ["Ground", "Grass"],
    baseStats: { hp: 80, atk: 95, def: 120, spa: 70, spd: 75, spe: 90 },
    abilities: { 0: "Ruin", 1: "Sand Force", H: "Mycelium Might" }
  },
  toxicroak: {
    inherit: true,
    num: 55,
    name: "Toxicroak",
    types: ["Poison", "Fighting"],
    baseStats: { hp: 83, atk: 116, def: 85, spa: 66, spd: 85, spe: 95 },
    abilities: { 0: "Beatdown", 1: "Wet Skin", H: "Defiant" }
  },
  spiritomb: {
    inherit: true,
    num: 56,
    name: "Spiritomb",
    types: ["Ghost", "Dark"],
    baseStats: { hp: 73, atk: 108, def: 108, spa: 108, spd: 108, spe: 25 },
    abilities: { 0: "Delusion", 1: "Ambush", H: "Blackout" }
  },
  cherrim: {
    inherit: true,
    num: 57,
    name: "Cherrim",
    types: ["Grass"],
    baseStats: { hp: 80, atk: 60, def: 120, spa: 97, spd: 88, spe: 85 },
    abilities: { 0: "Chlorophyll", 1: "Flower Gift", H: "Regenerator" }
  },
  cherrimsunshine: {
    inherit: true,
    num: 58,
    name: "Cherrim-Sunshine",
    types: ["Grass", "Fire"],
    baseStats: { hp: 80, atk: 60, def: 80, spa: 117, spd: 88, spe: 105 },
    abilities: { 0: "Flower Gift" }
  },
  garganacl: {
    inherit: true,
    num: 59,
    name: "Garganacl",
    types: ["Rock"],
    baseStats: { hp: 100, atk: 100, def: 130, spa: 45, spd: 90, spe: 35 },
    abilities: { 0: "Landslide", 1: "Sand Force", H: "Purifying Salt" }
  },
  incineroar: {
    inherit: true,
    num: 60,
    name: "Incineroar",
    types: ["Fire", "Fighting"],
    baseStats: { hp: 95, atk: 115, def: 100, spa: 70, spd: 90, spe: 60 },
    abilities: { 0: "Blaze", 1: "Beatdown", H: "Suplex" }
  },
  hawlucha: {
    inherit: true,
    num: 61,
    name: "Hawlucha",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 88, atk: 112, def: 95, spa: 64, spd: 73, spe: 98 },
    abilities: { 0: "Suplex", 1: "Slipstream", H: "Wind Rider" }
  },
  hitmonchan: {
    inherit: true,
    num: 62,
    name: "Hitmonchan",
    types: ["Fighting", "Steel"],
    baseStats: { hp: 80, atk: 115, def: 79, spa: 35, spd: 110, spe: 106 },
    abilities: { 0: "Beatdown", 1: "Duomod Reference??", H: "Technician" }
  },
  chiyu: {
    inherit: true,
    num: 63,
    name: "Chi-Yu",
    types: ["Dark", "Fire"],
    baseStats: { hp: 55, atk: 80, def: 80, spa: 105, spd: 110, spe: 100 },
    abilities: { 0: "Solar Flare" }
  },
  mismagius: {
    inherit: true,
    num: 64,
    name: "Mismagius",
    types: ["Ghost", "Fairy"],
    baseStats: { hp: 65, atk: 65, def: 65, spa: 115, spd: 115, spe: 115 },
    abilities: { 0: "Banshee", 1: "Ambush", H: "Dark Fantasy" }
  },
  slowkinggalar: {
    inherit: true,
    num: 65,
    name: "Slowking-Galar",
    types: ["Poison", "Psychic"],
    baseStats: { hp: 95, atk: 75, def: 90, spa: 120, spd: 120, spe: 30 },
    abilities: { 0: "Shart", 1: "Dark Fantasy", H: "Domain Expander" }
  },
  wochien: {
    inherit: true,
    num: 66,
    name: "Wo-Chien",
    types: ["Dark", "Grass"],
    baseStats: { hp: 85, atk: 75, def: 90, spa: 85, spd: 125, spe: 70 },
    abilities: { 0: "Ruin" }
  },
  absol: {
    inherit: true,
    num: 67,
    name: "Absol",
    types: ["Dark"],
    baseStats: { hp: 80, atk: 120, def: 65, spa: 55, spd: 65, spe: 125 },
    abilities: { 0: "Blackout", 1: "Fairytale", H: "Ambush" }
  },
  absolmega: {
    inherit: true,
    num: 68,
    name: "Absol-Mega",
    types: ["Dark", "Fairy"],
    baseStats: { hp: 80, atk: 130, def: 75, spa: 125, spd: 75, spe: 125 },
    abilities: { 0: "Dark Fantasy" }
  },
  malamar: {
    inherit: true,
    num: 69,
    name: "Malamar",
    types: ["Dark", "Psychic"],
    baseStats: { hp: 86, atk: 110, def: 88, spa: 78, spd: 95, spe: 73 },
    abilities: { 0: "Freaky", 1: "Domain Expander", H: "Contrary" }
  },
  jirachi: {
    inherit: true,
    num: 70,
    name: "Jirachi",
    types: ["Steel", "Psychic"],
    baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
    abilities: { 0: "Time Machine", 1: "Duomod Reference??", H: "Freaky" }
  },
  celebi: {
    inherit: true,
    num: 71,
    name: "Celebi",
    types: ["Steel", "Grass"],
    baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
    abilities: { 0: "Time Machine", 1: "Ruin", H: "Tinted Lens" }
  },
  enamorus: {
    inherit: true,
    num: 72,
    name: "Enamorus",
    gender: "F",
    types: ["Fairy", "Psychic"],
    baseStats: { hp: 74, atk: 95, def: 80, spa: 115, spd: 80, spe: 106 },
    abilities: { 0: "Fairytale", 1: "Freaky", H: "Merciless" }
  },
  manaphy: {
    inherit: true,
    num: 73,
    name: "Manaphy",
    types: ["Water", "Fairy"],
    baseStats: { hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85 },
    abilities: { 0: "Wet Skin", 1: "Regenerator", H: "Suction Cups" }
  },
  alakazam: {
    inherit: true,
    num: 74,
    name: "Alakazam",
    types: ["Psychic"],
    baseStats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120 },
    abilities: { 0: "Freaky", 1: "Duomod Reference??", H: "Trace" }
  },
  alakazammega: {
    inherit: true,
    num: 75,
    name: "Alakazam-Mega",
    types: ["Psychic"],
    baseStats: { hp: 55, atk: 60, def: 75, spa: 155, spd: 105, spe: 150 },
    abilities: { 0: "Domain Expander" }
  },
  kabutops: {
    inherit: true,
    num: 76,
    name: "Kabutops",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 90, atk: 115, def: 115, spa: 65, spd: 65, spe: 80 },
    abilities: { 0: "Sand Rush", 1: "Sharpness", H: "Mold Breaker" }
  },
  nihilego: {
    inherit: true,
    num: 77,
    name: "Nihilego",
    types: ["Rock", "Poison"],
    baseStats: { hp: 109, atk: 53, def: 71, spa: 103, spd: 113, spe: 101 },
    abilities: { 0: "Beast Boost", 1: "Corrosion", H: "Levitate" }
  },
  diancie: {
    inherit: true,
    num: 78,
    name: "Diancie",
    types: ["Rock", "Fairy"],
    baseStats: { hp: 50, atk: 100, def: 150, spa: 100, spd: 100, spe: 50 },
    abilities: { 0: "Landslide", 1: "Duomod Reference??", H: "Fairytale" }
  },
  dianciemega: {
    inherit: true,
    num: 79,
    name: "Diancie-Mega",
    types: ["Rock", "Fairy"],
    baseStats: { hp: 50, atk: 130, def: 130, spa: 130, spd: 130, spe: 80 },
    abilities: { 0: "Sand Rush" }
  },
  arctozolt: {
    inherit: true,
    num: 80,
    name: "Arctozolt",
    types: ["Electric", "Ice"],
    baseStats: { hp: 90, atk: 100, def: 90, spa: 100, spd: 90, spe: 55 },
    abilities: { 0: "Snow Cloak", 1: "Short Circuit", H: "Motor Drive" }
  },
  mamoswine: {
    inherit: true,
    num: 81,
    name: "Mamoswine",
    types: ["Ice", "Ground"],
    baseStats: { hp: 110, atk: 130, def: 80, spa: 70, spd: 60, spe: 80 },
    abilities: { 0: "Snow Cloak", 1: "Sand Force", H: "Mold Breaker" }
  },
  froslass: {
    inherit: true,
    num: 82,
    name: "Froslass",
    types: ["Ice", "Ghost"],
    baseStats: { hp: 80, atk: 100, def: 80, spa: 80, spd: 80, spe: 110 },
    abilities: { 0: "Snow Warning", 1: "Snow Cloak", H: "Refrigerate" }
  },
  frosmoth: {
    inherit: true,
    num: 83,
    name: "Frosmoth",
    types: ["Bug", "Ice"],
    baseStats: { hp: 70, atk: 80, def: 60, spa: 125, spd: 90, spe: 75 },
    abilities: { 0: "Swarm", 1: "Hivemind", H: "Snow Cloak" }
  },
  chienpao: {
    inherit: true,
    num: 84,
    name: "Chien-Pao",
    types: ["Dark", "Ice"],
    baseStats: { hp: 80, atk: 110, def: 80, spa: 70, spd: 95, spe: 95 },
    abilities: { 0: "Snow Warning" }
  },
  tinglu: {
    inherit: true,
    num: 85,
    name: "Ting-Lu",
    types: ["Dark", "Ground"],
    baseStats: { hp: 155, atk: 90, def: 105, spa: 55, spd: 80, spe: 45 },
    abilities: { 0: "Sand Stream" }
  },
  armaldo: {
    inherit: true,
    num: 86,
    name: "Armaldo",
    types: ["Bug", "Ground"],
    baseStats: { hp: 95, atk: 105, def: 120, spa: 70, spd: 80, spe: 45 },
    abilities: { 0: "Swarm", 1: "Hivemind", H: "Mold Breaker" }
  },
  golemalola: {
    inherit: true,
    num: 87,
    name: "Golem-Alola",
    types: ["Rock", "Electric"],
    baseStats: { hp: 80, atk: 45, def: 130, spa: 130, spd: 65, spe: 75 },
    abilities: { 0: "Sand Rush", 1: "Duomod Reference??", H: "Magnet Pull" }
  },
  weezinggalar: {
    inherit: true,
    num: 89,
    name: "Weezing-Galar",
    types: ["Fire", "Fairy"],
    baseStats: { hp: 85, atk: 90, def: 120, spa: 85, spd: 80, spe: 60 },
    abilities: { 0: "Solar Flare", 1: "Levitate", H: "Neutralizing Gas" }
  },
  sableye: {
    inherit: true,
    num: 90,
    name: "Sableye",
    types: ["Ghost", "Rock"],
    baseStats: { hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 50 },
    abilities: { 0: "Delusion", 1: "Landslide", H: "Prankster" }
  },
  sableyemega: {
    inherit: true,
    num: 91,
    name: "Sableye-Mega",
    types: ["Ghost", "Rock"],
    baseStats: { hp: 85, atk: 110, def: 110, spa: 110, spd: 110, spe: 50 },
    abilities: { 0: "Magic Bounce" }
  },
  pecharunt: {
    inherit: true,
    num: 92,
    name: "Pecharunt",
    types: ["Ghost", "Poison"],
    baseStats: { hp: 88, atk: 88, def: 88, spa: 88, spd: 88, spe: 88 },
    abilities: { 0: "Poison Puppeteer", 1: "Banshee", H: "Merciless" }
  },
  wyrdeer: {
    inherit: true,
    num: 93,
    name: "Wyrdeer",
    types: ["Normal", "Psychic"],
    baseStats: { hp: 103, atk: 75, def: 72, spa: 105, spd: 105, spe: 65 },
    abilities: { 0: "Domain Expander", 1: "Fur Coat", H: "Unaware" }
  },
  lilywhite: {
    num: 94,
    name: "Lily White",
    types: ["Grass", "Fairy"],
    gender: "F",
    baseStats: { hp: 85, atk: 35, def: 75, spa: 100, spd: 85, spe: 90 },
    abilities: { 0: "It's Spring!" }
  },
  //duomod reference
  impsaustor: {
    num: 999.5,
    name: "Impsaustor",
    types: ["Dark", "Poison"],
    gender: "N",
    baseStats: { hp: 100, atk: 120, def: 80, spa: 80, spd: 120, spe: 100 },
    // i'm so freaking tired i did this to be funny lmao
    abilities: { 0: "Vent" },
    heightm: 1,
    weightkg: 5,
    eggGroups: ["Undiscovered"]
  }
};
//# sourceMappingURL=pokedex.js.map
