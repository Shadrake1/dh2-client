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
  meowsdrahisui: {
    num: 2e3,
    name: "Meowsdra-Hisui",
    gender: "M",
    types: ["Psychic", "Steel"],
    baseStats: { hp: 80, atk: 74, def: 88, spa: 96, spd: 115, spe: 82 },
    abilities: { 0: "Sly Slime", 1: "Sappy Jest", H: "Knights Eye" },
    weightkg: 171.3
  },
  meowsdraf: {
    num: 2e3,
    name: "Meowsdra-F",
    gender: "F",
    types: ["Psychic", "Dragon"],
    baseStats: { hp: 82, atk: 74, def: 73, spa: 99, spd: 115, spe: 92 },
    abilities: { 0: "Root Snap", 1: "Hydrovision", H: "Goo-Getter" },
    weightkg: 79.5
  },
  honchkario: {
    num: 2002,
    name: "Honchkario",
    types: ["Steel", "Dark"],
    baseStats: { hp: 85, atk: 123, def: 61, spa: 110, spd: 61, spe: 90 },
    abilities: { 0: "Restless Speed", 1: "Hyperfocus", H: "Hero Ego" },
    weightkg: 40.7
  },
  indeechufalola: {
    num: 2003,
    name: "Indeechu-F-Alola",
    gender: "F",
    types: ["Electric", "Psychic"],
    baseStats: { hp: 70, atk: 70, def: 60, spa: 95, spd: 100, spe: 100 },
    abilities: { 0: "Electric Surge" },
    weightkg: 24.5
  },
  empozinggalar: {
    num: 2004,
    name: "Empozing-Galar",
    types: ["Water", "Fairy"],
    baseStats: { hp: 74, atk: 88, def: 104, spa: 98, spd: 85, spe: 60 },
    abilities: { 0: "Magic Surge", H: "Neutral Match" },
    weightkg: 50.3
  },
  samureedee: {
    num: 2005,
    name: "Samureedee",
    gender: "M",
    types: ["Psychic", "Water"],
    baseStats: { hp: 78, atk: 82, def: 70, spa: 106, spd: 82, spe: 82 },
    abilities: { 0: "Focus Falls", H: "Armor Surge" },
    weightkg: 61.3
  },
  exeggolivaalola: {
    num: 2006,
    name: "Exeggoliva-Alola",
    types: ["Grass", "Dragon"],
    baseStats: { hp: 86, atk: 107, def: 87, spa: 125, spd: 92, spe: 42 },
    abilities: { 0: "Grassy Surge", H: "Harvest" },
    weightkg: 231.9
  },
  noctoed: {
    num: 2007,
    name: "Noctoed",
    types: ["Water", "Flying"],
    baseStats: { hp: 95, atk: 62, def: 62, spa: 88, spd: 98, spe: 90 },
    abilities: { 0: "Dive Goggles", 1: "High Energy", H: "Stormy Sight" },
    weightkg: 37.4
  },
  torklod: {
    num: 2008,
    name: "Torklod",
    types: ["Fire", "Poison"],
    baseStats: { hp: 100, atk: 80, def: 100, spa: 85, spd: 85, spe: 20 },
    abilities: { 0: "Smoke Absorb", 1: "Solar Radiation", H: "Daft Shield" },
    weightkg: 151.7
  },
  tyranaught: {
    num: 2009,
    name: "Tyranaught",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 94, atk: 130, def: 123, spa: 84, spd: 87, spe: 62 },
    abilities: { 0: "Forbidden Garden", H: "Sandproof" },
    weightkg: 146
  },
  glacetalesalola: {
    num: 2010,
    name: "Glacetales-Alola",
    types: ["Ice", "Fairy"],
    baseStats: { hp: 69, atk: 63, def: 92, spa: 105, spd: 97, spe: 107 },
    abilities: { 0: "Snow Cloak", H: "Cryowarning" },
    weightkg: 22.9
  },
  sandslash: {
    inherit: true,
    otherFormes: ["Sandslash-Alola", "Sandslash-Crossbreed"],
    formeOrder: ["Sandslash", "Sandslash-Alola", "Sandslash-Crossbreed"]
  },
  sandslashcrossbreed: {
    num: 2011,
    name: "Sandslash-Crossbreed",
    baseSpecies: "Sandslash",
    forme: "Crossbreed",
    types: ["Ground", "Ice"],
    baseStats: { hp: 75, atk: 120, def: 115, spa: 35, spd: 60, spe: 65 },
    abilities: { 0: "Tundra Veil", H: "Tundra Rush" },
    weightkg: 34.8
  },
  porynoirz: {
    num: 2012,
    name: "Porynoir-Z",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 65, atk: 90, def: 102, spa: 116, spd: 105, spe: 67 },
    abilities: { 0: "Night Vision", H: "Malware" },
    weightkg: 70.3
  },
  victreevile: {
    num: 2013,
    name: "Victreevile",
    types: ["Grass", "Poison"],
    baseStats: { hp: 77, atk: 92, def: 75, spa: 105, spd: 80, spe: 80 },
    abilities: { 0: "Quick Delivery", H: "Fast Venom" },
    weightkg: 17.1
  },
  megaflor: {
    num: 2014,
    name: "Megaflor",
    baseForme: "Red",
    gender: "F",
    types: ["Fairy", "Grass"],
    baseStats: { hp: 89, atk: 73, def: 84, spa: 105, spd: 127, spe: 77 },
    abilities: { 0: "Overbloom", H: "Teamwork" },
    cosmeticFormes: ["Megaflor-Blue", "Megaflor-Orange", "Megaflor-White", "Megaflor-Yellow"],
    formeOrder: ["Megaflor", "Megaflor-Blue", "Megaflor-Orange", "Megaflor-White", "Megaflor-Yellow"],
    weightkg: 55.3
  },
  armarizor: {
    num: 2015,
    name: "Armarizor",
    types: ["Fire", "Steel"],
    baseStats: { hp: 77, atk: 95, def: 100, spa: 109, spd: 80, spe: 70 },
    abilities: { 0: "Pyrotechnic", H: "Light Armor" },
    weightkg: 101.5
  },
  ceruleavor: {
    num: 2016,
    name: "Ceruleavor",
    types: ["Fire", "Rock"],
    baseStats: { hp: 81, atk: 130, def: 87, spa: 63, spd: 85, spe: 85 },
    abilities: { 0: "Heatblade", H: "Strong Armor" },
    weightkg: 75.5
  },
  luxraptor: {
    num: 2017,
    name: "Luxraptor",
    types: ["Electric", "Flying"],
    baseStats: { hp: 92, atk: 120, def: 82, spa: 72, spd: 69, spe: 85 },
    abilities: { 0: "Underestimate", H: "Migrate" },
    weightkg: 33.5
  },
  jumpathra: {
    num: 2018,
    name: "Jumpathra",
    types: ["Psychic", "Flying"],
    baseStats: { hp: 85, atk: 57, def: 65, spa: 98, spd: 77, spe: 107 },
    abilities: { 0: "Seize the Moment", 1: "Safe Entry", H: "Speed Demon" },
    weightkg: 46.5
  },
  haxocross: {
    num: 2019,
    name: "Haxocross",
    types: ["Dragon", "Bug"],
    baseStats: { hp: 78, atk: 136, def: 82, spa: 51, spd: 82, spe: 91 },
    abilities: { 0: "Pestilence", 1: "Breaking Character", H: "Unsettling" },
    weightkg: 79.8
  },
  quaquadueyehisui: {
    num: 2020,
    name: "Quaquadueye-Hisui",
    types: ["Water", "Fighting"],
    baseStats: { hp: 86, atk: 116, def: 80, spa: 90, spd: 85, spe: 83 },
    abilities: { 0: "Kelp Power", H: "Prideful" },
    weightkg: 49.5
  },
  gholdentales: {
    num: 2021,
    name: "Gholdentales",
    types: ["Steel", "Fire"],
    baseStats: { hp: 81, atk: 75, def: 85, spa: 111, spd: 95, spe: 93 },
    abilities: { 0: "Smelting" },
    weightkg: 25
  },
  miensphlosionhisui: {
    num: 2022,
    name: "Miensphlosion-Hisui",
    types: ["Fire", "Fighting"],
    baseStats: { hp: 79, atk: 106, def: 72, spa: 107, spd: 72, spe: 104 },
    abilities: { 0: "Down In Flames", H: "From Ashes" },
    weightkg: 52.7
  },
  araquaton: {
    num: 2023,
    name: "Araquaton",
    gender: "F",
    types: ["Water", "Steel"],
    baseStats: { hp: 76, atk: 72, def: 90, spa: 60, spd: 132, spe: 68 },
    abilities: { 0: "Bubble Burster", H: "Own Tides" },
    weightkg: 97.4
  },
  garganacoal: {
    num: 2024,
    name: "Garganacoal",
    types: ["Rock"],
    baseStats: { hp: 105, atk: 100, def: 125, spa: 63, spd: 90, spe: 32 },
    abilities: { 0: "Saltwater Sauna", 1: "Obsidian Body", H: "Sturdy Fire" },
    weightkg: 275.3
  },
  salazzern: {
    num: 2025,
    name: "Salazzern",
    gender: "F",
    types: ["Flying", "Poison"],
    baseStats: { hp: 86, atk: 67, def: 75, spa: 104, spd: 75, spe: 120 },
    abilities: { 0: "Deep Toxin", H: "Clueless" },
    weightkg: 53.6
  },
  hattelure: {
    num: 2026,
    name: "Hattelure",
    gender: "F",
    types: ["Ghost", "Fairy"],
    baseStats: { hp: 58, atk: 72, def: 92, spa: 145, spd: 96, spe: 62 },
    abilities: { 0: "Eerie Flames", 1: "Guards Up", H: "Healing Burns" },
    weightkg: 19.7
  },
  oinksler: {
    num: 2027,
    name: "Oinksler",
    gender: "M",
    types: ["Normal", "Fighting"],
    baseStats: { hp: 95, atk: 125, def: 67, spa: 49, spd: 80, spe: 102 },
    abilities: { 0: "Smelly Touch", 1: "Berry Feast", H: "Thick Pressure" },
    weightkg: 81.5
  },
  wyrdguru: {
    num: 2028,
    name: "Wyrdguru",
    types: ["Normal", "Psychic"],
    baseStats: { hp: 105, atk: 82, def: 80, spa: 101, spd: 95, spe: 62 },
    abilities: { 0: "Incorporate", 1: "Item Meddler", H: "Mind Align" },
    weightkg: 85.6
  },
  scrafdent: {
    num: 2029,
    name: "Scrafdent",
    types: ["Normal", "Fighting"],
    baseStats: { hp: 112, atk: 92, def: 105, spa: 50, spd: 95, spe: 39 },
    abilities: { 0: "Scavenge", H: "Hunger Fate" },
    weightkg: 18
  },
  toxtricorio: {
    num: 2030,
    name: "Toxtricorio",
    baseForme: "Amped-Pom-Pom",
    types: ["Flying", "Electric"],
    baseStats: { hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104 },
    abilities: { 0: "Parroting" },
    otherFormes: ["Toxtricorio-Amped-Baile", "Toxtricorio-Amped-Pau", "Toxtricorio-Amped-Sensu", "Toxtricorio-Low-Key-Pom-Pom", "Toxtricorio-Low-Key-Baile", "Toxtricorio-Low-Key-Pau", "Toxtricorio-Low-Key-Sensu"],
    formeOrder: ["Toxtricorio", "Toxtricorio-Amped-Baile", "Toxtricorio-Amped-Pau", "Toxtricorio-Amped-Sensu", "Toxtricorio-Low-Key-Pom-Pom", "Toxtricorio-Low-Key-Baile", "Toxtricorio-Low-Key-Pau", "Toxtricorio-Low-Key-Sensu"],
    weightkg: 21.7
  },
  toxtricorioampedbaile: {
    num: 2030,
    name: "Toxtricorio-Amped-Baile",
    baseSpecies: "Toxtricorio",
    forme: "Amped-Baile",
    types: ["Fire", "Electric"],
    baseStats: { hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104 },
    abilities: { 0: "Parroting" },
    weightkg: 21.7
  },
  toxtricorioampedpau: {
    num: 2030,
    name: "Toxtricorio-Amped-Pau",
    types: ["Psychic", "Electric"],
    baseSpecies: "Toxtricorio",
    forme: "Amped-Pau",
    baseStats: { hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104 },
    abilities: { 0: "Parroting" },
    weightkg: 21.7
  },
  toxtricorioampedsensu: {
    num: 2030,
    name: "Toxtricorio-Amped-Sensu",
    types: ["Ghost", "Electric"],
    baseSpecies: "Toxtricorio",
    forme: "Amped-Sensu",
    baseStats: { hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104 },
    abilities: { 0: "Parroting" },
    weightkg: 21.7
  },
  toxtricoriolowkeypompom: {
    num: 2030,
    name: "Toxtricorio-Low-Key-Pom-Pom",
    types: ["Electric", "Poison"],
    baseSpecies: "Toxtricorio",
    forme: "Low-Key-Pom-Pom",
    baseStats: { hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104 },
    abilities: { 0: "Parroting" },
    weightkg: 21.7
  },
  toxtricoriolowkeybaile: {
    num: 2030,
    name: "Toxtricorio-Low-Key-Baile",
    types: ["Fire", "Poison"],
    baseSpecies: "Toxtricorio",
    forme: "Low-Key-Baile",
    baseStats: { hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104 },
    abilities: { 0: "Parroting" },
    weightkg: 21.7
  },
  toxtricoriolowkeypau: {
    num: 2030,
    name: "Toxtricorio-Low-Key-Pau",
    types: ["Psychic", "Poison"],
    baseSpecies: "Toxtricorio",
    forme: "Low-Key-Pau",
    baseStats: { hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104 },
    abilities: { 0: "Parroting" },
    weightkg: 21.7
  },
  toxtricoriolowkeysensu: {
    num: 2030,
    name: "Toxtricorio-Low-Key-Sensu",
    types: ["Ghost", "Poison"],
    baseSpecies: "Toxtricorio",
    forme: "Low-Key-Sensu",
    baseStats: { hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104 },
    abilities: { 0: "Parroting" },
    weightkg: 21.7
  },
  sabliados: {
    num: 2038,
    name: "Sabliados",
    types: ["Ghost", "Poison"],
    baseStats: { hp: 60, atk: 85, def: 75, spa: 65, spd: 70, spe: 45 },
    abilities: { 0: "Telescopic Sight", 1: "Slow Bugs", H: "Nightly Jokes" },
    weightkg: 22.3
  },
  fablapple: {
    num: 2039,
    name: "Fablapple",
    types: ["Fairy", "Dragon"],
    baseStats: { hp: 100, atk: 75, def: 91, spa: 107, spd: 85, spe: 52 },
    abilities: { 0: "Supercharming Syrup", 1: "Magic Sticks", H: "Recollect" },
    weightkg: 66.5
  },
  slowzonegalar: {
    num: 2040,
    name: "Slowzone-Galar",
    types: ["Poison", "Electric"],
    baseStats: { hp: 90, atk: 67, def: 97, spa: 121, spd: 110, spe: 45 },
    abilities: { 0: "Surgeon Eye", 1: "Neutral Polarity", H: "Tough Brains" },
    weightkg: 129.8
  },
  wigglylurk: {
    num: 2041,
    name: "Wigglylurk",
    types: ["Fairy", "Ghost"],
    baseStats: { hp: 114, atk: 114, def: 62, spa: 70, spd: 65, spe: 50 },
    abilities: { 0: "All-Seeing", 1: "Tuff Claws", H: "Malfunction" },
    weightkg: 171
  },
  bravitry: {
    num: 2042,
    name: "Bravitry",
    gender: "M",
    types: ["Normal", "Dark"],
    baseStats: { hp: 95, atk: 118, def: 67, spa: 73, spd: 67, spe: 90 },
    abilities: { 0: "Sirocco", 1: "Sun Bathe", H: "Combative" },
    weightkg: 50.3
  },
  cryomagius: {
    num: 2043,
    name: "Cryomagius",
    types: ["Ice", "Ghost"],
    baseStats: { hp: 70, atk: 55, def: 55, spa: 120, spd: 120, spe: 105 },
    abilities: { 0: "Levitate" },
    weightkg: 76.2
  },
  lycanrosmiddaypaldeaaqua: {
    num: 2044,
    name: "Lycanros-Midday-Paldea-Aqua",
    gender: "M",
    types: ["Rock", "Water"],
    baseStats: { hp: 85, atk: 117, def: 85, spa: 42, spd: 67, spe: 109 },
    abilities: { 0: "Eliminate", 1: "Oasis Lunch", H: "Fighting Fury" },
    weightkg: 56.7
  },
  lycanrosmidnightpaldeablaze: {
    num: 2044,
    name: "Lycanros-Midnight-Paldea-Blaze",
    gender: "M",
    types: ["Rock", "Fire"],
    baseStats: { hp: 95, atk: 115, def: 90, spa: 42, spd: 72, spe: 91 },
    abilities: { 0: "Dominate", 1: "Night Snack", H: "Rustle Rage" },
    weightkg: 56.7
  },
  lycanrosduskpaldeacombat: {
    num: 2044,
    name: "Lycanros-Dusk-Paldea-Combat",
    gender: "M",
    types: ["Rock", "Fighting"],
    baseStats: { hp: 90, atk: 113, def: 85, spa: 42, spd: 70, spe: 105 },
    abilities: { 0: "Obliterate" },
    weightkg: 56.7
  },
  revarantis: {
    num: 2047,
    name: "Revarantis",
    types: ["Poison", "Grass"],
    baseStats: { hp: 75, atk: 112, def: 90, spa: 87, spd: 78, spe: 67 },
    abilities: { 0: "Leaf Coat", H: "Unfiltered" },
    weightkg: 69.3
  },
  laprossand: {
    num: 2048,
    name: "Laprossand",
    types: ["Water", "Ground"],
    baseStats: { hp: 110, atk: 80, def: 95, spa: 105, spd: 85, spe: 50 },
    abilities: { 0: "Clumping Up", H: "Dissolution" },
    weightkg: 235
  },
  spiritzer: {
    num: 2049,
    name: "Spiritzer",
    types: ["Dark", "Water"],
    baseStats: { hp: 70, atk: 82, def: 98, spa: 115, spd: 98, spe: 47 },
    abilities: { 0: "Hydrostatic Pressure" },
    weightkg: 71.7
  },
  serpeblim: {
    num: 2050,
    name: "Serpeblim",
    types: ["Grass", "Ghost"],
    baseStats: { hp: 115, atk: 80, def: 70, spa: 85, spd: 75, spe: 105 },
    abilities: { 0: "Germinate", H: "Sacrifice" },
    weightkg: 39
  },
  venuvolt: {
    num: 2051,
    name: "Venuvolt",
    types: ["Poison", "Bug"],
    baseStats: { hp: 78, atk: 76, def: 86, spa: 142, spd: 87, spe: 61 },
    abilities: { 0: "Sunlit Flight" },
    weightkg: 72.5
  },
  frosmivire: {
    num: 2052,
    name: "Frosmivire",
    types: ["Bug", "Electric"],
    baseStats: { hp: 80, atk: 95, def: 70, spa: 110, spd: 90, spe: 80 },
    abilities: { 0: "Electric Dust", H: "Vital Scales" },
    weightkg: 90.3
  },
  rhyperluna: {
    num: 2053,
    name: "Rhyperluna",
    types: ["Ground", "Normal"],
    baseStats: { hp: 122, atk: 140, def: 117, spa: 50, spd: 71, spe: 50 },
    abilities: { 0: "Careless", 1: "Lithoproof", H: "Shock Horror" },
    weightkg: 286.4
  },
  yanroar: {
    num: 2054,
    name: "Yanroar",
    types: ["Bug", "Fire"],
    baseStats: { hp: 86, atk: 72, def: 79, spa: 112, spd: 61, spe: 100 },
    abilities: { 0: "Move Mastery", 1: "Item Lockdown", H: "Speedy" },
    weightkg: 66.5
  },
  krookorotthisui: {
    num: 2055,
    name: "Krookorott-Hisui",
    types: ["Dark", "Water"],
    baseStats: { hp: 100, atk: 115, def: 80, spa: 85, spd: 70, spe: 90 },
    abilities: { 0: "Sea Monster", H: "Blade Edge" },
    weightkg: 77.3
  },
  pincunguss: {
    num: 2056,
    name: "Pincunguss",
    types: ["Electric", "Grass"],
    baseStats: { hp: 81, atk: 93, def: 82, spa: 90, spd: 82, spe: 22 },
    abilities: { 0: "Jolt Spores", H: "Respark" },
    weightkg: 5.8
  },
  mausaiai: {
    num: 2057,
    name: "Mausaiai",
    types: ["Normal", "Poison"],
    baseStats: { hp: 68, atk: 85, def: 67, spa: 72, spd: 73, spe: 110 },
    abilities: { 0: "Friendly Prank", 1: "Berry Diet", H: "Toxicologist" },
    otherFormes: ["Mausaiai-Four"],
    formeOrder: ["Mausaiai", "Mausaiai-Four"],
    weightkg: 14.8
  },
  mausaiaifour: {
    num: 2057,
    name: "Mausaiai-Four",
    baseSpecies: "Mausaiai",
    forme: "Four",
    types: ["Normal", "Poison"],
    baseStats: { hp: 68, atk: 85, def: 67, spa: 72, spd: 73, spe: 110 },
    abilities: { 0: "Friendly Prank", 1: "Berry Diet", H: "Toxicologist" },
    weightkg: 15
  },
  incineboar: {
    num: 2058,
    name: "Incineboar",
    types: ["Fire", "Dark"],
    baseStats: { hp: 102, atk: 119, def: 85, spa: 92, spd: 85, spe: 62 },
    abilities: { 0: "Inflame", H: "Blazing Passion" },
    weightkg: 116.5
  },
  genglizar: {
    num: 2059,
    name: "Genglizar",
    types: ["Ghost", "Dragon"],
    baseStats: { hp: 70, atk: 80, def: 62, spa: 107, spd: 70, spe: 126 },
    abilities: { 0: "Revitalize" },
    weightkg: 51.8
  },
  tropisdale: {
    num: 2060,
    name: "Tropisdale",
    types: ["Flying", "Ground"],
    baseStats: { hp: 100, atk: 100, def: 95, spa: 63, spd: 97, spe: 43 },
    abilities: { 0: "Growing Grass", 1: "Healthy Lunch", H: "Inner Power" },
    weightkg: 510
  },
  galvillon: {
    num: 2061,
    name: "Galvillon",
    types: ["Electric", "Flying"],
    baseStats: { hp: 75, atk: 65, def: 55, spa: 100, spd: 55, spe: 100 },
    abilities: { 0: "Friendly Looks", 1: "Freaky Eyes", H: "Dusty Bugs" },
    weightkg: 15.7
  },
  kingturne: {
    num: 2062,
    name: "Kingturne",
    types: ["Dark", "Dragon"],
    baseStats: { hp: 77, atk: 105, def: 77, spa: 105, spd: 77, spe: 85 },
    abilities: { 0: "Hydrophilic", H: "Desert Shot" },
    weightkg: 114.7
  },
  sceptimora: {
    num: 2115,
    name: "Sceptimora",
    types: ["Grass", "Rock"],
    baseStats: { hp: 80, atk: 70, def: 77, spa: 130, spd: 85, spe: 103 },
    abilities: { 0: "Poison Ivy", H: "Off-Scale" },
    weightkg: 48.6
  },
  skelenine: {
    num: 2116,
    name: "Skelenine",
    types: ["Fire"],
    baseStats: { hp: 99, atk: 99, def: 100, spa: 105, spd: 77, spe: 80 },
    abilities: { 0: "Inflame", H: "Litnitwit" },
    weightkg: 240.8
  },
  inteledoom: {
    num: 2117,
    name: "Inteledoom",
    types: ["Water", "Fire"],
    baseStats: { hp: 72, atk: 87, def: 57, spa: 127, spd: 72, spe: 117 },
    abilities: { 0: "Boiling Spot", H: "Juicy Aim" },
    weightkg: 40.1
  },
  kilowachu: {
    num: 2118,
    name: "Kilowachu",
    types: ["Electric", "Flying"],
    baseStats: { hp: 70, atk: 80, def: 60, spa: 105, spd: 70, spe: 120 },
    abilities: { 0: "Wind Energy", H: "Polarity" },
    weightkg: 34.3
  },
  bellotcha: {
    num: 2119,
    name: "Bellotcha",
    baseForme: "Unremarkable",
    types: ["Grass", "Ghost"],
    gender: "N",
    baseStats: { hp: 73, atk: 70, def: 101, spa: 121, spd: 90, spe: 60 },
    abilities: { 0: "Tea Party Host", H: "Summer Heat" },
    weightkg: 4,
    otherFormes: ["Bellotcha-Masterpiece"],
    formeOrder: ["Bellotcha", "Bellotcha-Masterpiece"]
  },
  bellotchamasterpiece: {
    num: 2119,
    name: "Bellotcha-Masterpiece",
    baseSpecies: "Bellotcha",
    forme: "Masterpiece",
    types: ["Grass", "Ghost"],
    gender: "N",
    baseStats: { hp: 73, atk: 70, def: 101, spa: 121, spd: 90, spe: 60 },
    abilities: { 0: "Tea Party Host", H: "Summer Heat" },
    weightkg: 4
  },
  bellicram: {
    num: 2120,
    name: "Bellicram",
    types: ["Water", "Electric"],
    baseStats: { hp: 100, atk: 74, def: 73, spa: 102, spd: 90, spe: 65 },
    abilities: { 0: "Phalacrocoracimorphosis" },
    weightkg: 65.5,
    otherFormes: ["Bellicram-Gulping", "Bellicram-Gorging"],
    formeOrder: ["Bellicram", "Bellicram-Gulping", "Bellicram-Gorging"]
  },
  bellicramgulping: {
    num: 2120,
    name: "Bellicram-Gulping",
    baseSpecies: "Bellicram",
    forme: "Gulping",
    types: ["Water", "Electric"],
    baseStats: { hp: 100, atk: 74, def: 73, spa: 102, spd: 90, spe: 65 },
    abilities: { 0: "Phalacrocoracimorphosis" },
    weightkg: 65.5,
    requiredAbility: "Phalacrocoracimorphosis",
    battleOnly: "Bellicram"
  },
  bellicramgorging: {
    num: 2120,
    name: "Bellicram-Gorging",
    baseSpecies: "Bellicram",
    forme: "Gorging",
    types: ["Water", "Electric"],
    baseStats: { hp: 100, atk: 74, def: 73, spa: 102, spd: 90, spe: 65 },
    abilities: { 0: "Phalacrocoracimorphosis" },
    weightkg: 65.5,
    requiredAbility: "Phalacrocoracimorphosis",
    battleOnly: "Bellicram"
  },
  greatdozo: {
    num: 2121,
    name: "Great Dozo",
    types: ["Fighting", "Water"],
    gender: "N",
    baseStats: { hp: 133, atk: 115, def: 123, spa: 69, spd: 59, spe: 61 },
    abilities: { 0: "Protodyschronometria" },
    weightkg: 270,
    tags: ["Paradox"]
  },
  sandyapes: {
    num: 2122,
    name: "Sandy Apes",
    types: ["Ground", "Fighting"],
    gender: "N",
    baseStats: { hp: 81, atk: 93, def: 85, spa: 117, spd: 79, spe: 115 },
    abilities: { 0: "Protopyre" },
    weightkg: 57.5,
    tags: ["Paradox"]
  },
  fluttervoir: {
    num: 2123,
    name: "Flutter Voir",
    types: ["Fairy", "Psychic"],
    gender: "N",
    baseStats: { hp: 61, atk: 61, def: 61, spa: 131, spd: 125, spe: 121 },
    abilities: { 0: "Protoneuron" },
    weightkg: 26.2,
    tags: ["Paradox"]
  },
  gliderwing: {
    num: 2124,
    name: "Glider Wing",
    types: ["Bug", "Ground"],
    gender: "N",
    baseStats: { hp: 95, atk: 117, def: 103, spa: 65, spd: 91, spe: 89 },
    abilities: { 0: "Prototoxin" },
    weightkg: 67.3,
    tags: ["Paradox"]
  },
  brutebink: {
    num: 2125,
    name: "Brute Bink",
    types: ["Dark", "Fairy"],
    gender: "N",
    baseStats: { hp: 81, atk: 101, def: 125, spa: 65, spd: 125, spe: 53 },
    abilities: { 0: "Protolithos" },
    weightkg: 13.4,
    tags: ["Paradox"]
  },
  screambuzz: {
    num: 2126,
    name: "Scream Buzz",
    types: ["Fairy", "Dark"],
    gender: "N",
    baseStats: { hp: 115, atk: 65, def: 105, spa: 60, spd: 105, spe: 105 },
    abilities: { 0: "Protoavian" },
    weightkg: 23.8,
    tags: ["Paradox"]
  },
  moonknight: {
    num: 2127,
    name: "Moon Knight",
    types: ["Dragon", "Steel"],
    gender: "N",
    baseStats: { hp: 101, atk: 119, def: 89, spa: 55, spd: 93, spe: 103 },
    abilities: { 0: "Protorefraction" },
    weightkg: 227.5,
    tags: ["Paradox"]
  },
  irononigiri: {
    num: 2128,
    name: "Iron Onigiri",
    baseForme: "Curly",
    types: ["Dark", "Water"],
    gender: "N",
    baseStats: { hp: 82, atk: 66, def: 74, spa: 122, spd: 88, spe: 108 },
    abilities: { 0: "Jelly-Filled Drive" },
    weightkg: 59.5,
    otherFormes: ["Iron Onigiri-Droopy", "Iron Onigiri-Stretchy"],
    formeOrder: ["Iron Onigiri", "Iron Onigiri-Droopy", "Iron Onigiri-Stretchy"],
    tags: ["Paradox"]
  },
  irononigiridroopy: {
    num: 2128,
    name: "Iron Onigiri-Droopy",
    baseSpecies: "Iron Onigiri",
    forme: "Droopy",
    types: ["Dark", "Water"],
    gender: "N",
    baseStats: { hp: 82, atk: 66, def: 74, spa: 122, spd: 88, spe: 108 },
    abilities: { 0: "Jelly-Filled Drive" },
    weightkg: 59.5,
    tags: ["Paradox"]
  },
  irononigiristretchy: {
    num: 2128,
    name: "Iron Onigiri-Stretchy",
    baseSpecies: "Iron Onigiri",
    forme: "Stretchy",
    types: ["Dark", "Water"],
    gender: "N",
    baseStats: { hp: 82, atk: 66, def: 74, spa: 122, spd: 88, spe: 108 },
    abilities: { 0: "Jelly-Filled Drive" },
    weightkg: 59.5,
    tags: ["Paradox"]
  },
  ironbramble: {
    num: 2129,
    name: "Iron Bramble",
    types: ["Ground", "Ghost"],
    gender: "N",
    baseStats: { hp: 80, atk: 114, def: 98, spa: 76, spd: 70, spe: 100 },
    abilities: { 0: "Wind Drive" },
    weightkg: 123,
    tags: ["Paradox"]
  },
  ironfly: {
    num: 2130,
    name: "Iron Fly",
    types: ["Rock", "Ground"],
    gender: "N",
    baseStats: { hp: 90, atk: 118, def: 96, spa: 76, spd: 82, spe: 102 },
    abilities: { 0: "Air Drive" },
    weightkg: 192.5,
    tags: ["Paradox"]
  },
  ironcopper: {
    num: 2131,
    name: "Iron Copper",
    types: ["Fighting", "Steel"],
    gender: "N",
    baseStats: { hp: 148, atk: 140, def: 88, spa: 66, spd: 68, spe: 40 },
    abilities: { 0: "Heavy Drive" },
    weightkg: 515.4,
    tags: ["Paradox"]
  },
  ironavianhisui: {
    num: 2132,
    name: "Iron Avian-Hisui",
    types: ["Fire", "Psychic"],
    gender: "N",
    baseStats: { hp: 96, atk: 76, def: 66, spa: 126, spd: 90, spe: 104 },
    abilities: { 0: "Jade Drive" },
    weightkg: 39.7,
    tags: ["Paradox"]
  },
  ironfox: {
    num: 2133,
    name: "Iron Fox",
    types: ["Ice", "Fire"],
    gender: "N",
    baseStats: { hp: 66, atk: 74, def: 100, spa: 120, spd: 80, spe: 120 },
    abilities: { 0: "Magic Drive" },
    weightkg: 25,
    tags: ["Paradox"]
  },
  irondeciduous: {
    num: 2134,
    name: "Iron Deciduous",
    types: ["Fighting", "Ghost"],
    gender: "N",
    baseStats: { hp: 76, atk: 118, def: 82, spa: 118, spd: 82, spe: 102 },
    abilities: { 0: "Phantom Drive" },
    weightkg: 25,
    tags: ["Paradox"]
  },
  volbeasle: {
    num: 2140,
    name: "Volbeasle",
    types: ["Bug", "Electric"],
    baseStats: { hp: 62, atk: 61, def: 57, spa: 86, spd: 80, spe: 90 },
    abilities: { 0: "Comedy Central", H: "Brilliant Bugs" },
    weightkg: 11
  },
  illuminun: {
    num: 2141,
    name: "Illuminun",
    types: ["Bug", "Electric"],
    baseStats: { hp: 62, atk: 43, def: 67, spa: 74, spd: 85, spe: 105 },
    abilities: { 0: "Slapstick", H: "Negative Awareness" },
    weightkg: 11
  },
  oinkeonf: {
    num: 2142,
    name: "Oinkeon-F",
    gender: "F",
    types: ["Normal", "Fire"],
    baseStats: { hp: 100, atk: 120, def: 65, spa: 77, spd: 100, spe: 65 },
    abilities: { 0: "Smell The Courage", H: "Feeding Frenzy" },
    weightkg: 11
  },
  sylveodon: {
    num: 2143,
    name: "Sylveodon",
    types: ["Fairy", "Ground"],
    baseStats: { hp: 103, atk: 74, def: 68, spa: 110, spd: 106, spe: 49 },
    abilities: { 0: "Skincare", H: "Excavate" },
    weightkg: 26.7
  },
  umbrelotic: {
    num: 2144,
    name: "Umbrelotic",
    types: ["Dark", "Water"],
    baseStats: { hp: 95, atk: 62, def: 95, spa: 95, spd: 130, spe: 73 },
    abilities: { 0: "Synchscale", H: "Metagaming" },
    weightkg: 94.5
  },
  goleaf: {
    num: 2145,
    name: "Goleaf",
    types: ["Grass", "Ground"],
    baseStats: { hp: 72, atk: 120, def: 130, spa: 57, spd: 65, spe: 85 },
    abilities: { 0: "Pea Brain", H: "Sand Rush" },
    weightkg: 162.8
  },
  excaluza: {
    num: 2146,
    name: "Excaluza",
    types: ["Water", "Steel"],
    baseStats: { hp: 110, atk: 118, def: 66, spa: 64, spd: 65, spe: 89 },
    abilities: { 0: "Sharpshooter", H: "Tectonic Power" },
    weightkg: 65.2
  },
  ramptrio: {
    num: 2147,
    name: "Ramptrio",
    types: ["Rock", "Ground"],
    baseStats: { hp: 66, atk: 136, def: 55, spa: 57, spd: 60, spe: 101 },
    abilities: { 0: "Tectonic Power", H: "Dino Might" },
    weightkg: 67.9
  },
  bombirdstone: {
    num: 2148,
    name: "Bombirdstone",
    types: ["Ghost", "Flying"],
    baseStats: { hp: 71, atk: 105, def: 100, spa: 55, spd: 100, spe: 75 },
    abilities: { 0: "Soulstone", H: "Grim Plumage" },
    weightkg: 29
  },
  floakix: {
    num: 2149,
    name: "Floakix",
    types: ["Water", "Bug"],
    baseStats: { hp: 79, atk: 110, def: 66, spa: 68, spd: 52, spe: 115 },
    abilities: { 0: "Wet Bugs", H: "Tinted Veil" },
    weightkg: 25.5
  },
  bearligatr: {
    num: 2150,
    name: "Bearligatr",
    types: ["Ice", "Water"],
    baseStats: { hp: 90, atk: 120, def: 90, spa: 74, spd: 81, spe: 80 },
    abilities: { 0: "Polar Power", H: "Marine Menace" },
    weightkg: 174.4
  },
  avatitanhisui: {
    num: 2151,
    name: "Avatitan-Hisui",
    types: ["Rock", "Ice"],
    baseStats: { hp: 132, atk: 125, def: 124, spa: 39, spd: 45, spe: 70 },
    abilities: { 0: "Glacier", 1: "Frostbite", H: "Abominable" },
    weightkg: 481.2
  },
  abomascott: {
    num: 2152,
    name: "Abomascott",
    types: ["Grass", "Fairy"],
    baseStats: { hp: 75, atk: 79, def: 80, spa: 86, spd: 80, spe: 106 },
    abilities: { 0: "Drought", H: "Humourless" },
    weightkg: 71.1
  },
  klefikyu: {
    num: 2153,
    name: "Klefikyu",
    types: ["Ghost", "Fairy"],
    baseStats: { hp: 56, atk: 90, def: 85, spa: 65, spd: 99, spe: 85 },
    abilities: { 0: "Torsion" },
    weightkg: 1.9,
    otherFormes: ["Klefikyu-Unlocked"],
    formeOrder: ["Klefikyu", "Klefikyu-Unlocked"]
  },
  klefikyuunlocked: {
    num: 2154,
    name: "Klefikyu-Unlocked",
    baseSpecies: "Klefikyu",
    forme: "Unlocked",
    types: ["Ghost", "Fairy"],
    baseStats: { hp: 56, atk: 90, def: 85, spa: 65, spd: 99, spe: 85 },
    abilities: { 0: "Torsion" },
    weightkg: 1.9
  },
  spidozong: {
    num: 2155,
    name: "Spidozong",
    types: ["Steel", "Bug"],
    baseStats: { hp: 63, atk: 84, def: 114, spa: 65, spd: 111, spe: 34 },
    abilities: { 0: "Aerial Force", H: "Somnoproof" },
    weightkg: 101.8
  },
  miniklaw: {
    num: 2156,
    name: "Miniklaw",
    baseForme: "Orange",
    types: ["Rock", "Flying"],
    gender: "N",
    baseStats: { hp: 65, atk: 117, def: 80, spa: 80, spd: 48, spe: 130 },
    abilities: { 0: "Anger Shield" },
    weightkg: 39.7,
    otherFormes: ["Miniklaw-Meteor"],
    cosmeticFormes: ["Miniklaw-Red", "Miniklaw-Yellow", "Miniklaw-Green", "Miniklaw-Blue", "Miniklaw-Indigo", "Miniklaw-Violet"],
    formeOrder: [
      // All of the colored Miniklaw Meteor formes (unsupported by PS) are numbers 0-6
      "Miniklaw-Meteor",
      "Miniklaw-Meteor",
      "Miniklaw-Meteor",
      "Miniklaw-Meteor",
      "Miniklaw-Meteor",
      "Miniklaw-Meteor",
      "Miniklaw-Meteor",
      "Miniklaw",
      "Miniklaw-Red",
      "Miniklaw-Yellow",
      "Miniklaw-Green",
      "Miniklaw-Blue",
      "Miniklaw-Indigo",
      "Miniklaw-Violet"
    ]
  },
  miniklawmeteor: {
    num: 2156,
    name: "Miniklaw-Meteor",
    baseSpecies: "Miniklaw",
    forme: "Meteor",
    types: ["Rock", "Flying"],
    gender: "N",
    baseStats: { hp: 65, atk: 80, def: 117, spa: 48, spd: 80, spe: 70 },
    abilities: { 0: "Anger Shield" },
    weightkg: 59.5
  },
  uxelia: {
    num: 2158,
    name: "Uxelia",
    types: ["Psychic"],
    gender: "N",
    baseStats: { hp: 110, atk: 75, def: 120, spa: 75, spd: 125, spe: 90 },
    abilities: { 0: "Levitate" },
    weightkg: 43,
    tags: ["Sub-Legendary"]
  },
  annihisprit: {
    num: 2159,
    name: "Annihisprit",
    types: ["Psychic", "Ghost"],
    gender: "N",
    baseStats: { hp: 95, atk: 110, def: 92, spa: 97, spd: 97, spe: 85 },
    abilities: { 0: "Fight and Flight" },
    weightkg: 28.2,
    tags: ["Sub-Legendary"]
  },
  azurustherian: {
    num: 2160,
    name: "Azurus-Therian",
    types: ["Psychic", "Electric"],
    gender: "N",
    baseStats: { hp: 77, atk: 115, def: 70, spa: 135, spd: 75, spe: 108 },
    abilities: { 0: "Earth Eater" },
    weightkg: 30.7,
    tags: ["Sub-Legendary"]
  },
  cruelustherian: {
    num: 2161,
    name: "Cruelus-Therian",
    types: ["Flying", "Poison"],
    gender: "N",
    baseStats: { hp: 80, atk: 85, def: 75, spa: 110, spd: 105, spe: 110 },
    abilities: { 0: "Healthy Drink" },
    weightkg: 59,
    tags: ["Sub-Legendary"]
  },
  squawkorustherian: {
    num: 2162,
    name: "Squawkorus-Therian",
    types: ["Flying", "Ground"],
    gender: "N",
    baseStats: { hp: 89, atk: 120, def: 90, spa: 75, spd: 80, spe: 91 },
    abilities: { 0: "Intimidate" },
    weightkg: 35.2,
    tags: ["Sub-Legendary"]
  },
  wonamorustherian: {
    num: 2163,
    name: "Wo-Namorus-Therian",
    types: ["Flying", "Dark"],
    gender: "N",
    baseStats: { hp: 79, atk: 100, def: 105, spa: 115, spd: 117, spe: 58 },
    abilities: { 0: "Love of Ruin" },
    weightkg: 61.1,
    tags: ["Sub-Legendary"]
  },
  mabospao: {
    num: 2164,
    name: "Mabos-Pao",
    types: ["Dark", "Ice"],
    gender: "N",
    baseStats: { hp: 80, atk: 120, def: 85, spa: 75, spd: 67, spe: 110 },
    abilities: { 0: "Dog of Ruin" },
    weightkg: 106.6,
    tags: ["Sub-Legendary"]
  },
  metalu: {
    num: 2165,
    name: "Meta-Lu",
    types: ["Ground", "Steel"],
    gender: "N",
    baseStats: { hp: 134, atk: 122, def: 127, spa: 75, spd: 85, spe: 57 },
    abilities: { 0: "Automaton of Ruin" },
    weightkg: 624.9,
    tags: ["Sub-Legendary"]
  },
  chiken: {
    num: 2166,
    name: "Chi-Ken",
    types: ["Dark", "Fire"],
    gender: "N",
    baseStats: { hp: 70, atk: 100, def: 75, spa: 125, spd: 95, spe: 100 },
    abilities: { 0: "Poultry of Ruin" },
    weightkg: 28.5,
    tags: ["Sub-Legendary"]
  },
  ogereena: {
    num: 2167,
    name: "Ogereena",
    types: ["Grass"],
    gender: "F",
    baseStats: { hp: 77, atk: 120, def: 91, spa: 55, spd: 97, spe: 110 },
    abilities: { 0: "Royal Guard" },
    weightkg: 30.6,
    tags: ["Sub-Legendary"],
    otherFormes: ["Ogereena-Wellspring", "Ogereena-Hearthflame", "Ogereena-Cornerstone", "Ogereena-Teal-Tera", "Ogereena-Wellspring-Tera", "Ogereena-Hearthflame-Tera", "Ogereena-Cornerstone-Tera"],
    formeOrder: ["Ogereena", "Ogereena-Wellspring", "Ogereena-Hearthflame", "Ogereena-Cornerstone", "Ogereena-Teal-Tera", "Ogereena-Wellspring-Tera", "Ogereena-Hearthflame-Tera", "Ogereena-Cornerstone-Tera"],
    forceTeraType: "Grass"
  },
  ogereenatealtera: {
    num: 2167,
    name: "Ogereena-Teal-Tera",
    forme: "Teal-Tera",
    types: ["Grass"],
    gender: "F",
    baseStats: { hp: 77, atk: 120, def: 91, spa: 55, spd: 97, spe: 110 },
    abilities: { 0: "Embody Aspect (Teal)" },
    weightkg: 30.6,
    battleOnly: "Ogereena",
    forceTeraType: "Grass"
  },
  ogereenawellspring: {
    num: 2167,
    name: "Ogereena-Wellspring",
    baseSpecies: "Ogereena",
    forme: "Wellspring",
    types: ["Grass", "Water"],
    gender: "F",
    baseStats: { hp: 77, atk: 120, def: 91, spa: 55, spd: 97, spe: 110 },
    abilities: { 0: "Water Absorb" },
    weightkg: 30.6,
    requiredItem: "Wellspring Mask",
    changesFrom: "Ogereena",
    forceTeraType: "Water"
  },
  ogereenawellspringtera: {
    num: 2167,
    name: "Ogereena-Wellspring-Tera",
    baseSpecies: "Ogereena",
    forme: "Wellspring-Tera",
    types: ["Grass", "Water"],
    gender: "F",
    baseStats: { hp: 77, atk: 120, def: 91, spa: 55, spd: 97, spe: 110 },
    abilities: { 0: "Embody Aspect (Wellspring)" },
    weightkg: 30.6,
    requiredItem: "Wellspring Mask",
    battleOnly: "Ogereena-Wellspring",
    forceTeraType: "Water"
  },
  ogereenahearthflame: {
    num: 2167,
    name: "Ogereena-Hearthflame",
    baseSpecies: "Ogereena",
    forme: "Hearthflame",
    types: ["Grass", "Fire"],
    gender: "F",
    baseStats: { hp: 77, atk: 120, def: 91, spa: 55, spd: 97, spe: 110 },
    abilities: { 0: "Mold Breaker" },
    weightkg: 30.6,
    requiredItem: "Hearthflame Mask",
    changesFrom: "Ogereena",
    forceTeraType: "Fire"
  },
  ogereenahearthflametera: {
    num: 2167,
    name: "Ogereena-Hearthflame-Tera",
    baseSpecies: "Ogereena",
    forme: "Hearthflame-Tera",
    types: ["Grass", "Fire"],
    gender: "F",
    baseStats: { hp: 77, atk: 120, def: 91, spa: 55, spd: 97, spe: 110 },
    abilities: { 0: "Embody Aspect (Hearthflame)" },
    weightkg: 30.6,
    requiredItem: "Hearthflame Mask",
    battleOnly: "Ogereena-Hearthflame",
    forceTeraType: "Fire"
  },
  ogereenacornerstone: {
    num: 2167,
    name: "Ogereena-Cornerstone",
    baseSpecies: "Ogereena",
    forme: "Cornerstone",
    types: ["Grass", "Rock"],
    gender: "F",
    baseStats: { hp: 77, atk: 120, def: 91, spa: 55, spd: 97, spe: 110 },
    abilities: { 0: "Sturdy" },
    weightkg: 30.6,
    requiredItem: "Cornerstone Mask",
    changesFrom: "Ogereena",
    forceTeraType: "Rock"
  },
  ogereenacornerstonetera: {
    num: 2167,
    name: "Ogereena-Cornerstone-Tera",
    baseSpecies: "Ogereena",
    forme: "Cornerstone-Tera",
    types: ["Grass", "Rock"],
    gender: "F",
    baseStats: { hp: 77, atk: 120, def: 91, spa: 55, spd: 97, spe: 110 },
    abilities: { 0: "Embody Aspect (Cornerstone)" },
    weightkg: 30.6,
    requiredItem: "Cornerstone Mask",
    battleOnly: "Ogereena-Cornerstone",
    forceTeraType: "Rock"
  },
  dogicannon: {
    num: 2175,
    name: "Dogicannon",
    types: ["Flying", "Fighting"],
    gender: "M",
    baseStats: { hp: 84, atk: 124, def: 105, spa: 66, spd: 90, spe: 70 },
    abilities: { 0: "Toxic Links", H: "Brute Bird" },
    weightkg: 59,
    tags: ["Sub-Legendary"]
  },
  overfez: {
    num: 2176,
    name: "Overfez",
    types: ["Poison", "Dark"],
    gender: "M",
    baseStats: { hp: 90, atk: 115, def: 90, spa: 67, spd: 95, spe: 93 },
    abilities: { 0: "Hydrotechnic", H: "Venom Glare" },
    weightkg: 17,
    tags: ["Sub-Legendary"]
  },
  ironmonkey: {
    num: 2177,
    name: "Iron Monkey",
    gender: "N",
    types: ["Steel", "Psychic"],
    baseStats: { hp: 90, atk: 74, def: 84, spa: 126, spd: 100, spe: 102 },
    abilities: { 0: "Toxic Drive" },
    weightkg: 84.1,
    tags: ["Paradox"]
  },
  duncefire: {
    num: 2178,
    name: "Dunce Fire",
    gender: "N",
    types: ["Normal", "Fire"],
    baseStats: { hp: 115, atk: 107, def: 101, spa: 81, spd: 91, spe: 75 },
    abilities: { 0: "Protosynthesis" },
    weightkg: 314.6,
    tags: ["Paradox"]
  },
  // NFEs
  goopurr: {
    num: 2063,
    name: "Goopurr",
    types: ["Psychic", "Dragon"],
    baseStats: { hp: 57, atk: 49, def: 44, spa: 59, spd: 67, spe: 54 },
    abilities: { 0: "Root Snap", 1: "Hydrovision", H: "Goo With The Flow" },
    weightkg: 3.2,
    evos: ["Meowdra-Hisui", "Meowdra-F"]
  },
  riokrow: {
    num: 2064,
    name: "Riokrow",
    types: ["Fighting", "Dark"],
    baseStats: { hp: 60, atk: 80, def: 41, spa: 70, spd: 41, spe: 88 },
    abilities: { 0: "Restless Speed", 1: "Hyperfocus", H: "Prankster" },
    weightkg: 11.2,
    evos: ["Honchkario"]
  },
  pipoffing: {
    num: 2065,
    name: "Pipoffing",
    types: ["Water", "Poison"],
    baseStats: { hp: 46, atk: 58, def: 74, spa: 60, spd: 50, spe: 37 },
    abilities: { 0: "Murky Water", H: "Neutral Match" },
    weightkg: 3.1,
    evos: ["Empozing-Galar"]
  },
  smolicute: {
    num: 2066,
    name: "Smolicute",
    types: ["Grass"],
    baseStats: { hp: 50, atk: 37, def: 62, spa: 59, spd: 57, spe: 35 },
    abilities: { 0: "Dawn Riser", H: "Harvest" },
    weightkg: 4.5,
    evos: ["Exeggoliva-Alola"]
  },
  polihoot: {
    num: 2067,
    name: "Polihoot",
    types: ["Water", "Flying"],
    baseStats: { hp: 50, atk: 40, def: 35, spa: 40, spd: 50, spe: 70 },
    abilities: { 0: "Dive Goggles", 1: "High Energy", H: "Keen Swim" },
    weightkg: 16.8,
    evos: ["Noctoed"]
  },
  larvipin: {
    num: 2068,
    name: "Larvipin",
    types: ["Rock", "Grass"],
    baseStats: { hp: 53, atk: 62, def: 57, spa: 46, spd: 47, spe: 39 },
    abilities: { 0: "Overguts", H: "Bullet Veil" },
    weightkg: 40.5,
    evos: ["Pupadin"]
  },
  pupadin: {
    num: 2069,
    name: "Pupadin",
    types: ["Rock", "Grass"],
    baseStats: { hp: 65, atk: 81, def: 82, spa: 64, spd: 64, spe: 54 },
    abilities: { 0: "Green Thumbs" },
    weightkg: 90.5,
    evos: ["Tyranaught"]
  },
  eevulpalola: {
    num: 2070,
    name: "Eevulp-Alola",
    types: ["Normal", "Ice"],
    baseStats: { hp: 46, atk: 48, def: 45, spa: 47, spd: 65, spe: 60 },
    abilities: { 0: "Weather Preview", H: "Snow Layers" },
    weightkg: 8.2,
    evos: ["Glacetales-Alola"]
  },
  sandshrew: {
    inherit: true,
    otherFormes: ["Sandshrew-Alola", "Sandshrew-Crossbreed"],
    formeOrder: ["Sandshrew", "Sandshrew-Alola", "Sandshrew-Crossbreed"]
  },
  sandshrewcrossbreed: {
    num: 2071,
    name: "Sandshrew-Crossbreed",
    baseSpecies: "Sandshrew",
    forme: "Crossbreed",
    types: ["Ground", "Ice"],
    baseStats: { hp: 50, atk: 75, def: 90, spa: 15, spd: 40, spe: 40 },
    abilities: { 0: "Tundra Veil", H: "Tundra Rush" },
    weightkg: 26,
    evos: ["Sandslash-Crossbreed"]
  },
  poryskull: {
    num: 2072,
    name: "Poryskull",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 42, atk: 50, def: 82, spa: 57, spd: 82, spe: 32 },
    abilities: { 0: "Visual Learner", H: "Malware" },
    weightkg: 25.8,
    evos: ["Poryclops2"]
  },
  poryclops2: {
    num: 2073,
    name: "Poryclops2",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 62, atk: 75, def: 112, spa: 82, spd: 112, spe: 42 },
    abilities: { 0: "Visual Learner", H: "Malware" },
    weightkg: 31.6,
    evos: ["Porynoir-Z"]
  },
  oddbell: {
    num: 2074,
    name: "Oddbell",
    types: ["Grass", "Poison"],
    baseStats: { hp: 47, atk: 62, def: 45, spa: 74, spd: 47, spe: 35 },
    abilities: { 0: "Quick Delivery", H: "Sun Away" },
    weightkg: 4.7,
    evos: ["Gloopinbell"]
  },
  gloopinbell: {
    num: 2075,
    name: "Gloopinbell",
    types: ["Grass", "Poison"],
    baseStats: { hp: 62, atk: 85, def: 60, spa: 85, spd: 60, spe: 47 },
    abilities: { 0: "Quick Delivery", H: "Durian Breath" },
    weightkg: 7.5,
    evos: ["Victreevile"]
  },
  chikobebe: {
    num: 2076,
    name: "Chikobe\u0301be\u0301",
    baseForme: "Red",
    gender: "F",
    types: ["Fairy", "Grass"],
    baseStats: { hp: 44, atk: 43, def: 52, spa: 55, spd: 72, spe: 43 },
    abilities: { 0: "Overbloom", H: "Teamwork" },
    cosmeticFormes: ["Chikobe\u0301be\u0301-Blue", "Chikobe\u0301be\u0301-Orange", "Chikobe\u0301be\u0301-White", "Chikobe\u0301be\u0301-Yellow"],
    formeOrder: ["Chikobe\u0301be\u0301", "Chikobe\u0301be\u0301-Blue", "Chikobe\u0301be\u0301-Orange", "Chikobe\u0301be\u0301-White", "Chikobe\u0301be\u0301-Yellow"],
    weightkg: 3.3,
    evos: ["Floeleef"]
  },
  floeleef: {
    num: 2077,
    name: "Floeleef",
    baseForme: "Red",
    gender: "F",
    types: ["Fairy", "Grass"],
    baseStats: { hp: 57, atk: 53, def: 63, spa: 69, spd: 92, spe: 56 },
    abilities: { 0: "Overbloom", H: "Teamwork" },
    cosmeticFormes: ["Floeleef-Blue", "Floeleef-Orange", "Floeleef-White", "Floeleef-Yellow"],
    formeOrder: ["Floeleef", "Floeleef-Blue", "Floeleef-Orange", "Floeleef-White", "Floeleef-Yellow"],
    weightkg: 8.4,
    evos: ["Megaflor"]
  },
  scythadet: {
    num: 2078,
    name: "Scythadet",
    types: ["Fire", "Flying"],
    baseStats: { hp: 55, atk: 100, def: 60, spa: 52, spd: 60, spe: 70 },
    abilities: { 0: "Blaze", H: "Fast Flame" },
    weightkg: 33.3,
    evos: ["Armarizor", "Ceruleavor"]
  },
  shinly: {
    num: 2079,
    name: "Shinly",
    types: ["Electric", "Flying"],
    baseStats: { hp: 42, atk: 62, def: 32, spa: 35, spd: 32, spe: 52 },
    abilities: { 0: "Underestimate", H: "Brave Look" },
    weightkg: 5.8,
    evos: ["Luxravia"]
  },
  luxravia: {
    num: 2080,
    name: "Luxravia",
    types: ["Electric", "Flying"],
    baseStats: { hp: 57, atk: 80, def: 49, spa: 50, spd: 44, spe: 70 },
    abilities: { 0: "Underestimate", H: "Migrate" },
    weightkg: 23,
    evos: ["Luxraptor"]
  },
  floppip: {
    num: 2081,
    name: "Floppip",
    types: ["Psychic", "Flying"],
    baseStats: { hp: 32, atk: 35, def: 35, spa: 45, spd: 42, spe: 62 },
    abilities: { 0: "Guards Up", 1: "Safe Entry", H: "Speed Demon" },
    weightkg: 1,
    evos: ["Jumpathra"]
  },
  quaxlet: {
    num: 2082,
    name: "Quaxlet",
    types: ["Water", "Flying"],
    baseStats: { hp: 61, atk: 61, def: 50, spa: 50, spd: 47, spe: 46 },
    abilities: { 0: "Kelp Power", H: "Long Moxie" },
    weightkg: 3.8,
    evos: ["Quaxtrix"]
  },
  quaxtrix: {
    num: 2083,
    name: "Quaxtrix",
    types: ["Water", "Flying"],
    baseStats: { hp: 74, atk: 80, def: 71, spa: 67, spd: 65, spe: 58 },
    abilities: { 0: "Kelp Power", H: "Long Moxie" },
    weightkg: 18.8,
    evos: ["Quaquadueye-Hisui"]
  },
  gimmipixroaming: {
    num: 2084,
    name: "Gimmipix-Roaming",
    baseSpecies: "Gimmipix",
    forme: "Roaming",
    types: ["Ghost", "Fire"],
    baseStats: { hp: 41, atk: 35, def: 32, spa: 62, spd: 55, spe: 75 },
    abilities: { 0: "Speedy Fire" },
    weightkg: 5,
    evos: ["Gholdentales"]
  },
  gimmipix: {
    num: 2084,
    name: "Gimmipix",
    baseForme: "Chest",
    types: ["Ghost", "Fire"],
    baseStats: { hp: 44, atk: 35, def: 55, spa: 62, spd: 67, spe: 37 },
    abilities: { 0: "Ghoul Fire" },
    weightkg: 7.5,
    evos: ["Gholdentales"]
  },
  cyndafoo: {
    num: 2086,
    name: "Cyndafoo",
    types: ["Fire", "Fighting"],
    baseStats: { hp: 42, atk: 70, def: 46, spa: 57, spd: 50, spe: 65 },
    abilities: { 0: "Down In Flames", H: "Rekindle" },
    weightkg: 14,
    evos: ["Miensphlosion-Hisui"]
  },
  dewpidink: {
    num: 2087,
    name: "Dewpidink",
    types: ["Water", "Steel"],
    baseStats: { hp: 44, atk: 51, def: 48, spa: 37, spd: 68, spe: 42 },
    abilities: { 0: "Bubble Burster", H: "Own Tides" },
    weightkg: 6.5,
    evos: ["Araquaton"]
  },
  nacoly: {
    num: 2088,
    name: "Nacoly",
    types: ["Rock"],
    baseStats: { hp: 42, atk: 47, def: 75, spa: 37, spd: 42, spe: 27 },
    abilities: { 0: "Saltwater Sauna", 1: "Rough Body", H: "Sturdy Fire" },
    weightkg: 14,
    evos: ["Kolstack"]
  },
  kolstack: {
    num: 2089,
    name: "Kolstack",
    types: ["Rock"],
    baseStats: { hp: 72, atk: 62, def: 95, spa: 47, spd: 67, spe: 42 },
    abilities: { 0: "Saltwater Sauna", 1: "Obsidian Body", H: "Sturdy Fire" },
    weightkg: 91.5,
    evos: ["Garganacoal"]
  },
  salanbat: {
    num: 2090,
    name: "Salanbat",
    types: ["Flying", "Poison"],
    baseStats: { hp: 44, atk: 37, def: 37, spa: 58, spd: 40, spe: 66 },
    abilities: { 0: "Deep Toxin", H: "Clueless" },
    weightkg: 6.4,
    evos: ["Salazzern"]
  },
  litenna: {
    num: 2091,
    name: "Litenna",
    types: ["Ghost", "Psychic"],
    baseStats: { hp: 46, atk: 30, def: 50, spa: 61, spd: 54, spe: 29 },
    abilities: { 0: "Eerie Flames", 1: "Guards Up", H: "Healing Burns" },
    weightkg: 3.3,
    evos: ["Hattlamp"]
  },
  hattlamp: {
    num: 2092,
    name: "Hattlamp",
    types: ["Ghost", "Psychic"],
    baseStats: { hp: 51, atk: 35, def: 52, spa: 79, spd: 56, spe: 47 },
    abilities: { 0: "Eerie Flames", 1: "Guards Up", H: "Healing Burns" },
    weightkg: 8.9,
    evos: ["Hattelure"]
  },
  snonkhisui: {
    num: 2093,
    name: "Snonk-Hisui",
    types: ["Normal", "Fighting"],
    baseStats: { hp: 54, atk: 70, def: 47, spa: 35, spd: 60, spe: 75 },
    abilities: { 0: "Aroma Tricks", 1: "Hungry Eyes", H: "Inner Fat" },
    weightkg: 18.6,
    evos: ["Oinksler"]
  },
  skwoggy: {
    num: 2094,
    name: "Skwoggy",
    types: ["Normal", "Fighting"],
    baseStats: { hp: 60, atk: 65, def: 62, spa: 35, spd: 52, spe: 36 },
    abilities: { 0: "Scavenge", H: "Hunger Fate" },
    weightkg: 7.2,
    evos: ["Scrafdent"]
  },
  clefflin: {
    num: 2095,
    name: "Clefflin",
    types: ["Fairy", "Dragon"],
    baseStats: { hp: 45, atk: 32, def: 54, spa: 42, spd: 47, spe: 17 },
    abilities: { 0: "Cute Fruit", 1: "Magicproof", H: "Lunch With Friends" },
    weightkg: 1.8,
    evos: ["Clepplin"]
  },
  clepplin: {
    num: 2096,
    name: "Clepplin",
    types: ["Fairy", "Dragon"],
    baseStats: { hp: 75, atk: 62, def: 79, spa: 77, spd: 72, spe: 37 },
    abilities: { 0: "Supercharming Syrup", 1: "Magic Sticks", H: "Lunch With Friends" },
    weightkg: 6,
    evos: ["Fablapple"]
  },
  slowmitegalar: {
    num: 2097,
    name: "Slowmite-Galar",
    types: ["Psychic", "Electric"],
    baseStats: { hp: 57, atk: 51, def: 67, spa: 67, spd: 47, spe: 31 },
    abilities: { 0: "Surgeon Eye", 1: "Iron Diet", H: "Tough Brains" },
    weightkg: 21,
    evos: ["Slowzone-Galar"]
  },
  igglylett: {
    num: 2098,
    name: "Igglylett",
    types: ["Fairy", "Ghost"],
    baseStats: { hp: 74, atk: 52, def: 32, spa: 37, spd: 35, spe: 25 },
    abilities: { 0: "Unfriend Guard", 1: "Tuff Claws", H: "Malfunction" },
    weightkg: 46.5,
    evos: ["Wigglylurk"]
  },
  ruffdot: {
    num: 2099,
    name: "Ruffdot",
    gender: "M",
    types: ["Grass", "Normal"],
    baseStats: { hp: 55, atk: 77, def: 50, spa: 33, spd: 40, spe: 45 },
    abilities: { 0: "Sheer Bird", 1: "Sun Bathe", H: "Robin" },
    weightkg: 7.3,
    evos: ["Bravitry"]
  },
  varantis: {
    num: 2100,
    name: "Varantis",
    types: ["Steel", "Grass"],
    baseStats: { hp: 45, atk: 82, def: 49, spa: 40, spd: 40, spe: 41 },
    abilities: { 0: "Leaf Coat", H: "Quickstart" },
    weightkg: 18.3,
    evos: ["Revarantis"]
  },
  sniloon: {
    num: 2101,
    name: "Sniloon",
    types: ["Grass", "Ghost"],
    baseStats: { hp: 87, atk: 47, def: 44, spa: 52, spd: 49, spe: 66 },
    abilities: { 0: "Germinate", H: "Sacrifice" },
    weightkg: 4.7,
    evos: ["Serpeblim"]
  },
  grubbasaur: {
    num: 2102,
    name: "Grubbasaur",
    types: ["Poison", "Bug"],
    baseStats: { hp: 46, atk: 72, def: 47, spa: 60, spd: 55, spe: 45 },
    abilities: { 0: "Summer Bugs" },
    weightkg: 5.7,
    evos: ["Charjasaur"]
  },
  charjasaur: {
    num: 2103,
    name: "Charjasaur",
    types: ["Poison", "Bug"],
    baseStats: { hp: 60, atk: 72, def: 91, spa: 67, spd: 77, spe: 48 },
    abilities: { 0: "Solar Panel" },
    weightkg: 11.8,
    evos: ["Venuvolt"]
  },
  snid: {
    num: 2104,
    name: "Snid",
    types: ["Bug", "Electric"],
    baseStats: { hp: 37, atk: 44, def: 36, spa: 55, spd: 42, spe: 57 },
    abilities: { 0: "Static Dust", H: "Vital Scales" },
    weightkg: 13.7,
    evos: ["Frosmivire"]
  },
  rhyhursa: {
    num: 2105,
    name: "Rhyhursa",
    types: ["Ground", "Normal"],
    baseStats: { hp: 70, atk: 82, def: 72, spa: 40, spd: 40, spe: 32 },
    abilities: { 0: "Gangly", 1: "Rock Feet", H: "Zappy Sap" },
    weightkg: 61.9,
    evos: ["Rhyring"]
  },
  rhyring: {
    num: 2106,
    name: "Rhyring",
    types: ["Ground", "Normal"],
    baseStats: { hp: 97, atk: 130, def: 97, spa: 60, spd: 60, spe: 47 },
    abilities: { 0: "Careless", 1: "Rock Feet", H: "Shock Horror" },
    weightkg: 122.9,
    evos: ["Rhyperluna"]
  },
  yanleo: {
    num: 2107,
    name: "Yanleo",
    types: ["Bug", "Fire"],
    baseStats: { hp: 63, atk: 57, def: 51, spa: 74, spd: 49, spe: 83 },
    abilities: { 0: "Rival Group", 1: "Item Lockdown", H: "Speedy" },
    weightkg: 25.8,
    evos: ["Yanroar"]
  },
  sandwott: {
    num: 2108,
    name: "Sandwott",
    types: ["Dark", "Water"],
    baseStats: { hp: 52, atk: 63, def: 40, spa: 50, spd: 40, spe: 55 },
    abilities: { 0: "Sea Monster", H: "Armor Confidence" },
    weightkg: 10.6,
    evos: ["Krokowott"]
  },
  krokowott: {
    num: 2109,
    name: "Krokowott",
    types: ["Dark", "Water"],
    baseStats: { hp: 67, atk: 78, def: 52, spa: 64, spd: 52, spe: 67 },
    abilities: { 0: "Sea Monster", H: "Armor Confidence" },
    weightkg: 29,
    evos: ["Krookorott-Hisui"]
  },
  tandoodle: {
    num: 2110,
    name: "Tandoodle",
    types: ["Normal", "Poison"],
    baseStats: { hp: 45, atk: 60, def: 40, spa: 40, spd: 40, spe: 75 },
    abilities: { 0: "Hit and Run", 1: "Pick Tempo", H: "More Burdens" },
    weightkg: 1.3,
    evos: ["Mausaiai", "Mausaiai-Four"]
  },
  litpig: {
    num: 2111,
    name: "Litpig",
    types: ["Fire"],
    baseStats: { hp: 55, atk: 64, def: 43, spa: 53, spd: 43, spe: 57 },
    abilities: { 0: "Inflame", H: "Fat Cat" },
    weightkg: 7.1,
    evos: ["Torrapig"]
  },
  torrapig: {
    num: 2112,
    name: "Torrapig",
    types: ["Fire"],
    baseStats: { hp: 80, atk: 89, def: 52, spa: 75, spd: 62, spe: 72 },
    abilities: { 0: "Inflame", H: "Fat Cat" },
    weightkg: 40.3,
    evos: ["Incineboar"]
  },
  jolterbug: {
    num: 2113,
    name: "Jolterbug",
    types: ["Electric", "Bug"],
    baseStats: { hp: 44, atk: 41, def: 45, spa: 42, spd: 37, spe: 51 },
    abilities: { 0: "Friendly Looks", 1: "Freaky Eyes", H: "Dusty Bugs" },
    weightkg: 1.6,
    evos: ["Galvillon"]
  },
  cacsea: {
    num: 2114,
    name: "Cacsea",
    types: ["Grass", "Water"],
    baseStats: { hp: 44, atk: 66, def: 55, spa: 77, spd: 33, spe: 55 },
    abilities: { 0: "Hydrophilic", H: "Desert Shot" },
    weightkg: 29.7,
    evos: ["Kingturne"]
  },
  poltchaddish: {
    num: 2135,
    name: "Poltchaddish",
    baseForme: "Counterfeit",
    types: ["Grass", "Ghost"],
    gender: "N",
    baseStats: { hp: 45, atk: 47, def: 50, spa: 74, spd: 59, spe: 40 },
    abilities: { 0: "Tea Party Host", H: "Summer Heat" },
    weightkg: 3.3,
    evos: ["Bellotcha"],
    otherFormes: ["Poltchaddish-Artisan"],
    formeOrder: ["Poltchaddish", "Poltchaddish-Artisan"]
  },
  poltchaddishartisan: {
    num: 2135,
    name: "Poltchaddish-Artisan",
    baseSpecies: "Poltchaddish",
    forme: "Artisan",
    types: ["Grass", "Ghost"],
    gender: "N",
    baseStats: { hp: 45, atk: 47, def: 50, spa: 74, spd: 59, spe: 40 },
    abilities: { 0: "Tea Party Host", H: "Summer Heat" },
    weightkg: 3.3,
    evos: ["Bellotcha-Masterpiece"]
  },
  fuecolithe: {
    num: 2136,
    name: "Fuecolithe",
    types: ["Fire"],
    baseStats: { hp: 61, atk: 57, def: 52, spa: 67, spd: 45, spe: 48 },
    abilities: { 0: "Inflame", H: "Litnitwit" },
    weightkg: 14.4,
    evos: ["Skelenine"]
  },
  treemmet: {
    num: 2139,
    name: "Treemmet",
    types: ["Grass", "Rock"],
    baseStats: { hp: 45, atk: 40, def: 38, spa: 85, spd: 57, spe: 65 },
    abilities: { 0: "Poison Ivy", H: "Off-Scale" },
    weightkg: 6.5,
    evos: ["Sceptimora"]
  },
  sobbhound: {
    num: 2137,
    name: "Sobbhound",
    types: ["Water", "Fire"],
    baseStats: { hp: 47, atk: 50, def: 35, spa: 95, spd: 45, spe: 67 },
    abilities: { 0: "Boiling Spot", H: "Juicy Aim" },
    weightkg: 7.4,
    evos: ["Inteledoom"]
  },
  wachu: {
    num: 2138,
    name: "Wachu",
    types: ["Electric", "Flying"],
    baseStats: { hp: 35, atk: 40, def: 25, spa: 53, spd: 37, spe: 68 },
    abilities: { 0: "Wind Energy", H: "Polarity" },
    weightkg: 2.8,
    evos: ["Kilowachu"]
  },
  chonkee: {
    num: 2179,
    name: "Chonkee",
    types: ["Normal"],
    baseStats: { hp: 55, atk: 50, def: 45, spa: 40, spd: 55, spe: 45 },
    abilities: { 0: "Aroma Veil", 1: "Stress Eating", H: "Afatpability" },
    weightkg: 8.4,
    evos: ["Oinkeon-F"]
  },
  shellee: {
    num: 2180,
    name: "Shellee",
    types: ["Normal", "Water"],
    baseStats: { hp: 65, atk: 55, def: 50, spa: 55, spd: 65, spe: 45 },
    abilities: { 0: "Sticky Hold", 1: "Nudibranch", H: "Sand Scatter" },
    weightkg: 6.4,
    evos: ["Sylveodon"]
  },
  eebas: {
    num: 2181,
    name: "Eebas",
    types: ["Normal", "Water"],
    baseStats: { hp: 37, atk: 35, def: 35, spa: 27, spd: 60, spe: 67 },
    abilities: { 0: "Swift Swim", 1: "Goldfish Brain", H: "Overprepared" },
    weightkg: 7,
    evos: ["Umbrelotic"]
  },
  eedudee: {
    num: 2182,
    name: "Eedudee",
    types: ["Normal", "Ground"],
    baseStats: { hp: 47, atk: 67, def: 75, spa: 37, spd: 47, spe: 37 },
    abilities: { 0: "Rockability", 1: "Sturdy", H: "Pocket Sand" },
    weightkg: 13.3,
    evos: ["Goleaf"]
  },
  cranidlett: {
    num: 2183,
    name: "Cranidlett",
    types: ["Rock", "Ground"],
    baseStats: { hp: 38, atk: 90, def: 32, spa: 32, spd: 37, spe: 76 },
    abilities: { 0: "Tectonic Power", H: "Dino Might" },
    weightkg: 16.2,
    evos: ["Ramptrio"]
  },
  nymbuizel: {
    num: 2184,
    name: "Nymbuizel",
    types: ["Water", "Bug"],
    baseStats: { hp: 44, atk: 55, def: 37, spa: 40, spd: 27, spe: 65 },
    abilities: { 0: "Wet Bugs", H: "Tinted Veil" },
    weightkg: 15.3,
    evos: ["Floakix"]
  },
  cubodile: {
    num: 2185,
    name: "Cubodile",
    types: ["Ice", "Water"],
    baseStats: { hp: 52, atk: 69, def: 52, spa: 52, spd: 44, spe: 41 },
    abilities: { 0: "Polar Power", H: "Frightened Cub" },
    weightkg: 9,
    evos: ["Bearligatr"]
  },
  bergtoddle: {
    num: 2186,
    name: "Bergtoddle",
    types: ["Ice"],
    baseStats: { hp: 101, atk: 68, def: 65, spa: 31, spd: 37, spe: 35 },
    abilities: { 0: "Glacier", 1: "Ice Age", H: "Snow Problem" },
    weightkg: 72.3,
    evos: ["Avatitan-Hisui"]
  },
  cottover: {
    num: 2187,
    name: "Cottover",
    types: ["Grass", "Fairy"],
    baseStats: { hp: 55, atk: 45, def: 55, spa: 55, spd: 55, spe: 55 },
    abilities: { 0: "Drought", H: "Humorless" },
    weightkg: 25.6,
    evos: ["Abomascott"]
  },
  tarounzor: {
    num: 2188,
    name: "Tarounzor",
    types: ["Steel", "Bug"],
    baseStats: { hp: 46, atk: 32, def: 65, spa: 26, spd: 63, spe: 21 },
    abilities: { 0: "Aerial Force", H: "Somnoproof" },
    weightkg: 32.3,
    evos: ["Spidozong"]
  }
};
//# sourceMappingURL=pokedex.js.map
