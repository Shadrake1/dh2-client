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
  absol: {
    inherit: true,
    baseStats: { hp: 85, atk: 130, def: 60, spa: 75, spd: 60, spe: 90 },
    abilities: { 0: "Magic Bounce", 1: "Super Luck", H: "Justified" }
  },
  accelgor: {
    inherit: true,
    baseStats: { hp: 90, atk: 70, def: 50, spa: 100, spd: 60, spe: 145 }
  },
  clawitzer: {
    inherit: true,
    baseStats: { hp: 71, atk: 73, def: 88, spa: 120, spd: 89, spe: 80 }
  },
  falinks: {
    inherit: true,
    baseForme: "Column",
    types: ["Fighting"],
    baseStats: { hp: 65, atk: 60, def: 110, spa: 60, spd: 110, spe: 105 },
    abilities: { 0: "Stance Change" },
    otherFormes: ["Falinks-Hammer"],
    formeOrder: ["Falinks", "Falinks-Hammer"]
  },
  glaceon: {
    inherit: true,
    abilities: { 0: "Ice Body", H: "Pale Winds" }
  },
  claydol: {
    inherit: true,
    abilities: { 0: "Psychovalence" }
  },
  falinkshammer: {
    name: "Falinks-Hammer",
    baseSpecies: "Falinks",
    forme: "Hammer",
    types: ["Fighting"],
    baseStats: { hp: 65, atk: 140, def: 60, spa: 140, spd: 60, spe: 45 },
    abilities: { 0: "Stance Change" },
    requiredAbility: "Stance Change",
    battleOnly: "Falinks"
  },
  avaluggalpine: {
    name: "Avalugg-Alpine",
    baseSpecies: "Avalugg",
    forme: "Alpine",
    copyData: "Avalugg",
    types: ["Ice"],
    baseStats: { hp: 95, atk: 107, def: 144, spa: 94, spd: 46, spe: 28 },
    abilities: { 0: "Pressure", 1: "Ice Body", H: "Sturdy" },
    movepoolAdditions: ["dragonbreath", "dragonpulse", "withdraw", "iceball", "dragontail", "aircutter"],
    movepoolDeletions: ["wideguard"],
    prevo: "Bergmite",
    evos: ["Avalange"],
    evoType: "other",
    evoCondition: "A newly-discovered evolution",
    creator: "ausma"
  },
  avalange: {
    name: "Avalange",
    copyData: "Avalugg",
    types: ["Ice", "Dragon"],
    baseStats: { hp: 105, atk: 122, def: 114, spa: 129, spd: 46, spe: 84 },
    abilities: { 0: "Pressure", 1: "Ice Body", H: "Pale Winds" },
    movepoolAdditions: ["dragonbreath", "dragonpulse", "withdraw", "iceball", "dragontail", "aircutter", "dragonhammer", "dracometeor", "dragonclaw", "roar", "hurricane", "earthpower", "airslash", "thunderwave"],
    movepoolDeletions: ["wideguard"],
    color: "White",
    heightm: 2.5,
    weightkg: 700.7,
    prevo: "Avalugg-Alpine"
  },
  bellossom: {
    inherit: true,
    abilities: { 0: "Chlorophyll", H: "Regenerator" },
    baseStats: { hp: 75, atk: 65, def: 105, spa: 95, spd: 100, spe: 50 }
  },
  bellibrr: {
    name: "Bellibrr",
    copyData: "Bellibolt",
    types: ["Ice"],
    baseStats: { hp: 119, atk: 74, def: 91, spa: 103, spd: 83, spe: 25 },
    abilities: { 0: "Condensed Snow", 1: "Electromorphosis", H: "Comatose" },
    movepoolAdditions: ["icebeam", "blizzard", "iceball", "icywind", "hail"],
    prevo: "Tadbulb",
    evoType: "other",
    evoCondition: "A newly-discovered evolution",
    creator: "quagsi"
  },
  primeape: {
    inherit: true,
    baseStats: { hp: 90, atk: 105, def: 60, spa: 60, spd: 75, spe: 95 }
  },
  porygreen: {
    name: "Porygreen",
    copyData: "Porygon",
    gender: "N",
    types: ["Normal", "Steel"],
    baseStats: { hp: 65, atk: 70, def: 55, spa: 75, spd: 60, spe: 70 },
    abilities: { 0: "Seed Sower", 1: "Wind Power", H: "Air Lock" },
    movepoolAdditions: ["autotomize", "calmmind", "cultivate", "flashcannon", "grassyterrain", "ingrain", "leechseed", "metalburst", "mirrorshot", "petalblizzard", "rototiller", "steelbeam", "terrainpulse", "voltswitch", "weatherball"],
    movepoolDeletions: ["barrier", "curse", "darkpulse", "dreameater", "embargo", "foulplay", "hiddenpower", "nightmare", "teleport", "thief", "toxic", "recover"],
    evos: ["Porygreen2", "Porygreen-Z"]
  },
  porygreen2: {
    name: "Porygreen2",
    copyData: "Porygon2",
    gender: "N",
    types: ["Normal", "Steel"],
    baseStats: { hp: 85, atk: 90, def: 75, spa: 95, spd: 80, spe: 90 },
    abilities: { 0: "Seed Sower", 1: "Wind Power", H: "Air Lock" },
    movepoolDeletions: ["barrier", "curse", "darkpulse", "dreameater", "embargo", "foulplay", "hiddenpower", "nightmare", "teleport", "thief", "toxic", "recover"],
    prevo: "Porygreen",
    evos: ["Porygreen-Z"]
  },
  porygreenz: {
    name: "Porygreen-Z",
    copyData: "Porygon-Z",
    gender: "N",
    types: ["Normal", "Steel"],
    baseStats: { hp: 85, atk: 60, def: 90, spa: 115, spd: 95, spe: 90 },
    abilities: { 0: "Seed Sower", 1: "Wind Power", H: "Air Lock" },
    movepoolAdditions: ["calmmind", "voltswitch", "recover"],
    movepoolDeletions: ["barrier", "curse", "darkpulse", "dreameater", "embargo", "foulplay", "hiddenpower", "nightmare", "teleport", "thief", "toxic", "nastyplot"],
    prevo: "Porygreen2"
  },
  krickoncerto: {
    name: "Krickoncerto",
    copyData: "Kricketune",
    types: ["Bug", "Normal"],
    baseStats: { hp: 101, atk: 85, def: 91, spa: 111, spd: 91, spe: 65 },
    abilities: { 0: "Swarm", H: "Technician" },
    movepoolAdditions: ["compost", "roost", "darkpulse", "rapidspin", "metronome"],
    heightm: 1.1,
    weightkg: 26,
    prevo: "Kricketune"
  },
  petaledpyre: {
    name: "Petaled Pyre",
    types: ["Grass", "Fire"],
    baseStats: { hp: 95, atk: 101, def: 125, spa: 105, spd: 79, spe: 65 },
    abilities: { 0: "Protosynthesis", H: "Rewind" },
    heightm: 1.1,
    weightkg: 8.5
  },
  sneezibia: {
    name: "Sneezibia",
    types: ["Fire", "Ice"],
    baseStats: { hp: 93, atk: 116, def: 119, spa: 63, spd: 76, spe: 63 },
    abilities: { 0: "Blaze", H: "Thermal Expansion" },
    heightm: 1.6,
    weightkg: 117.6
  },
  cryogonal: {
    inherit: true,
    evos: ["Pollugonal"]
  },
  pollugonal: {
    name: "Pollugonal",
    copyData: "Cryogonal",
    types: ["Ice", "Poison"],
    baseStats: { hp: 90, atk: 50, def: 50, spa: 95, spd: 140, spe: 105 },
    movepoolAdditions: ["sludgebomb", "spikes", "toxicspikes"],
    prevo: "Cryogonal",
    evoType: "other",
    evoCondition: "A newly-discovered evolution",
    creator: "Magmajudis"
  },
  inkay: {
    inherit: true,
    otherFormes: ["Inkay-Alola"],
    formeOrder: ["Inkay", "Inkay-Alola"]
  },
  inkayalola: {
    name: "Inkay-Alola",
    baseSpecies: "Inkay",
    forme: "Alola",
    copyData: "Inkay",
    types: ["Dark", "Water"],
    baseStats: { hp: 53, atk: 59, def: 53, spa: 27, spd: 56, spe: 40 },
    abilities: { 0: "Keen Eye", 1: "Prankster", H: "Mimicry" },
    movepoolAdditions: ["brine", "dive", "firstimpression", "terrainpulse", "scald", "surf", "watergun", "waterpulse"],
    movepoolDeletions: ["brutalswing", "calmmind", "futuresight", "guardswap", "powersplit", "psybeam", "psyshock", "storedpower"],
    evos: ["Malamar-Alola"],
    creator: "Violet"
  },
  malamar: {
    inherit: true,
    otherFormes: ["Malamar-Alola"],
    formeOrder: ["Malamar", "Malamar-Alola"]
  },
  malamaralola: {
    name: "Malamar-Alola",
    baseSpecies: "Malamar",
    forme: "Alola",
    copyData: "Malamar",
    types: ["Dark", "Water"],
    baseStats: { hp: 86, atk: 102, def: 88, spa: 48, spd: 95, spe: 63 },
    abilities: { 0: "Keen Eye", 1: "Prankster", H: "Mimicry" },
    movepoolAdditions: ["brine", "dive", "firstimpression", "terrainpulse", "scald", "surf", "watergun", "waterpulse"],
    movepoolDeletions: ["brutalswing", "calmmind", "futuresight", "guardswap", "powersplit", "psybeam", "psyshock", "storedpower"],
    prevo: "Inkay-Alola",
    evoLevel: 30,
    evoCondition: "with the console turned upside-down",
    creator: "Violet"
  },
  decidueyehisui: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Natural Cure" }
  },
  escavalier: {
    inherit: true,
    baseStats: { hp: 90, atk: 135, def: 105, spa: 60, spd: 105, spe: 20 }
  },
  froslass: {
    num: 478,
    name: "Froslass",
    types: ["Ice", "Ghost"],
    baseStats: { hp: 70, atk: 80, def: 70, spa: 80, spd: 70, spe: 110 },
    abilities: { 0: "Snow Cloak", H: "Cursed Body" },
    heightm: 1.3,
    weightkg: 26.6,
    color: "White",
    prevo: "Snorunt",
    evoType: "useItem",
    evoItem: "Dawn Stone",
    eggGroups: ["Fairy", "Mineral"]
  },
  ironcrown: {
    inherit: true,
    abilities: { 0: "Quark Drive", H: "Rewind" }
  },
  goomy: {
    num: 704,
    name: "Goomy",
    types: ["Dragon"],
    baseStats: { hp: 45, atk: 50, def: 35, spa: 55, spd: 75, spe: 40 },
    abilities: { 0: "Sap Sipper", 1: "Hydration", H: "Gooey" },
    heightm: 0.3,
    weightkg: 2.8,
    color: "Purple",
    evos: ["Sliggoo", "Sliggoo-Hisui"],
    eggGroups: ["Dragon"]
  },
  sliggoo: {
    num: 705,
    name: "Sliggoo",
    types: ["Dragon"],
    baseStats: { hp: 68, atk: 75, def: 53, spa: 83, spd: 113, spe: 60 },
    abilities: { 0: "Sap Sipper", 1: "Hydration", H: "Gooey" },
    heightm: 0.8,
    weightkg: 17.5,
    color: "Purple",
    prevo: "Goomy",
    evoLevel: 40,
    evos: ["Goodra"],
    eggGroups: ["Dragon"],
    otherFormes: ["Sliggoo-Hisui"],
    formeOrder: ["Sliggoo", "Sliggoo-Hisui"]
  },
  sliggoohisui: {
    num: 705,
    name: "Sliggoo-Hisui",
    baseSpecies: "Sliggoo",
    forme: "Hisui",
    types: ["Steel", "Dragon"],
    baseStats: { hp: 58, atk: 75, def: 83, spa: 83, spd: 113, spe: 40 },
    abilities: { 0: "Sap Sipper", 1: "Shell Armor", H: "Gooey" },
    heightm: 0.7,
    weightkg: 68.5,
    color: "Purple",
    prevo: "Goomy",
    evoLevel: 40,
    evos: ["Goodra-Hisui"],
    eggGroups: ["Dragon"]
  },
  sudowoodo: {
    inherit: true,
    abilities: { 0: "Sturdy", 1: "Rock Head", H: "Fauxliage" }
  },
  shiftry: {
    inherit: true,
    baseStats: { hp: 80, atk: 100, def: 70, spa: 70, spd: 70, spe: 90 }
  },
  goodra: {
    num: 706,
    name: "Goodra",
    types: ["Dragon"],
    baseStats: { hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80 },
    abilities: { 0: "Sap Sipper", 1: "Hydration", H: "Gooey" },
    heightm: 2,
    weightkg: 150.5,
    color: "Purple",
    prevo: "Sliggoo",
    evoLevel: 50,
    eggGroups: ["Dragon"],
    otherFormes: ["Goodra-Hisui"],
    formeOrder: ["Goodra", "Goodra-Hisui"]
  },
  goodrahisui: {
    num: 706,
    name: "Goodra-Hisui",
    baseSpecies: "Goodra",
    forme: "Hisui",
    types: ["Steel", "Dragon"],
    baseStats: { hp: 80, atk: 100, def: 100, spa: 110, spd: 150, spe: 60 },
    abilities: { 0: "Sap Sipper", 1: "Shell Armor", H: "Gooey" },
    heightm: 1.7,
    weightkg: 334.1,
    color: "Purple",
    prevo: "Sliggoo-Hisui",
    evoLevel: 50,
    eggGroups: ["Dragon"]
  },
  torterraunidentified: {
    name: "Torterra-Unidentified",
    baseSpecies: "Torterra",
    forme: "Unidentified",
    copyData: "Torterra",
    types: ["Psychic", "Rock"],
    baseStats: { hp: 105, atk: 99, def: 85, spa: 85, spd: 105, spe: 46 },
    abilities: { 0: "Levitate", 1: "Pressure", H: "Shell Armor" },
    movepoolAdditions: ["psyshieldbash", "psychic", "psyshock", "telekinesis", "gravitonwave", "calmmind", "teleport", "cosmicpower", "trick", "trickroom", "meteorbeam", "ancientpower", "chargebeam", "moonblast", "surf", "blackhole", "climatecrash"],
    movepoolDeletions: ["shellsmash"],
    creator: "quagsi"
  },
  gothitelleallira: {
    num: 9002,
    name: "Gothitelle-Allira",
    types: ["Psychic", "Dark"],
    baseStats: { hp: 70, atk: 50, def: 110, spa: 105, spd: 100, spe: 55 },
    abilities: { 0: "Competitive", 1: "Withering Gaze", H: "Rocky Payload" },
    heightm: 1.7,
    weightkg: 50,
    color: "Green",
    eggGroups: ["Human-Like"],
    creator: "Jumpheart"
  },
  oinkologne: {
    inherit: true,
    types: ["Normal", "Fairy"],
    movepoolAdditions: ["slackoff", "toxic", "aromatherapy"]
  },
  oinkolognef: {
    inherit: true,
    types: ["Normal", "Fairy"],
    movepoolAdditions: ["slackoff", "toxic", "aromatherapy"]
  },
  cyclonimbus: {
    num: 9004,
    name: "Cyclonimbus",
    types: ["Flying"],
    baseStats: { hp: 80, atk: 95, def: 80, spa: 85, spd: 80, spe: 105 },
    abilities: { 0: "Prankster", 1: "Clear Body", H: "Forecast" },
    heightm: 0.4,
    weightkg: 1,
    otherFormes: ["Cyclonimbus-Sunny", "Cyclonimbus-Rainy", "Cyclonimbus-Snowy"],
    formeOrder: ["Cyclonimbus", "Cyclonimbus-Sunny", "Cyclonimbus-Rainy", "Cyclonimbus-Snowy"],
    creator: "inkbug"
  },
  cyclonimbussunny: {
    num: 9004,
    name: "Cyclonimbus-Sunny",
    baseSpecies: "Cyclonimbus",
    forme: "Sunny",
    types: ["Flying", "Fire"],
    baseStats: { hp: 80, atk: 95, def: 80, spa: 85, spd: 80, spe: 105 },
    abilities: { 0: "Prankster", 1: "Clear Body", H: "Forecast" },
    heightm: 0.4,
    weightkg: 1,
    creator: "inkbug",
    requiredAbility: "Forecast",
    battleOnly: "Cyclonimbus"
  },
  cyclonimbusrainy: {
    num: 9004,
    name: "Cyclonimbus-Rainy",
    baseSpecies: "Cyclonimbus",
    forme: "Rainy",
    types: ["Flying", "Water"],
    baseStats: { hp: 80, atk: 95, def: 80, spa: 85, spd: 80, spe: 105 },
    abilities: { 0: "Prankster", 1: "Clear Body", H: "Forecast" },
    heightm: 0.4,
    weightkg: 1,
    creator: "inkbug",
    requiredAbility: "Forecast",
    battleOnly: "Cyclonimbus"
  },
  cyclonimbussnowy: {
    num: 9004,
    name: "Cyclonimbus-Snowy",
    baseSpecies: "Cyclonimbus",
    forme: "Snowy",
    types: ["Flying", "Ice"],
    baseStats: { hp: 80, atk: 95, def: 80, spa: 85, spd: 80, spe: 105 },
    abilities: { 0: "Prankster", 1: "Clear Body", H: "Forecast" },
    heightm: 0.4,
    weightkg: 1,
    creator: "inkbug",
    requiredAbility: "Forecast",
    battleOnly: "Cyclonimbus"
  },
  sandslash: {
    inherit: true,
    types: ["Ground", "Rock"]
  },
  stormulex: {
    num: 9003,
    name: "Stormulex",
    types: ["Electric", "Rock"],
    baseStats: { hp: 91, atk: 119, def: 96, spa: 40, spd: 84, spe: 60 },
    abilities: { 0: "Volt Absorb", 1: "Natural Cure", H: "Triage" },
    heightm: 1.7,
    weightkg: 125,
    creator: "BlueRay"
  },
  ironconvector: {
    name: "Iron Convector",
    types: ["Bug", "Ice"],
    baseStats: { hp: 88, atk: 116, def: 48, spa: 130, spd: 106, spe: 82 },
    abilities: { 0: "Quark Drive", H: "Rewind" },
    heightm: 1.5,
    weightkg: 55,
    creator: "ausma"
  },
  sandyshocks: {
    inherit: true,
    abilities: { 0: "Protosynthesis", H: "Rewind" }
  },
  brutebonnet: {
    inherit: true,
    abilities: { 0: "Protosynthesis", H: "Rewind" }
  },
  wugtrio: {
    inherit: true,
    abilities: { 0: "Gooey", 1: "Stakeout", H: "Sand Veil" },
    movepoolAdditions: ["wavecrash", "rushingtide"]
  },
  celebi: {
    inherit: true,
    abilities: { 0: "Natural Cure", S: "Rewind" }
  },
  noivern: {
    inherit: true,
    abilities: { 0: "Frisk", 1: "Infiltrator", H: "Rewind" }
  },
  spidops: {
    inherit: true,
    baseStats: { hp: 65, atk: 79, def: 92, spa: 52, spd: 86, spe: 80 }
  },
  dodriocyarian: {
    name: "Dodrio-Cyarian",
    baseSpecies: "Dodrio",
    forme: "Cyarian",
    copyData: "Dodrio",
    types: ["Rock", "Ghost"],
    baseStats: { hp: 60, atk: 100, def: 90, spa: 40, spd: 80, spe: 100 },
    abilities: { 0: "Rock Beak", 1: "Cursed Body", H: "Solid Rock" },
    movepoolAdditions: ["shadowclaw", "shadowsneak", "phantomforce", "rockslide", "stoneedge", "grudge", "spite", "rocktomb", "stealthrock"],
    movepoolDeletions: ["drillrun", "knockoff", "pursuit"],
    prevo: "Doduo",
    evoType: "other",
    evoCondition: "A newly-discovered evolution",
    creator: "Colossi Productions"
  },
  golduck: {
    inherit: true,
    baseStats: { hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 120 }
  },
  bombirdier: {
    inherit: true,
    abilities: { 0: "Territorial", 1: "Keen Eye", H: "Rocky Payload" },
    movepoolAdditions: ["rockwrecker"]
  },
  rotom: {
    inherit: true,
    baseStats: { hp: 50, atk: 65, def: 87, spa: 105, spd: 87, spe: 126 }
  },
  eevee: {
    inherit: true,
    evos: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon", "Aleon"]
  },
  aleon: {
    name: "Aleon",
    copyData: "Eevee",
    baseStats: { hp: 103, atk: 79, def: 53, spa: 89, spd: 67, spe: 134 },
    abilities: { 0: "Adaptability", H: "Normalize", S: "Beast Boost" },
    movepoolAdditions: [
      "blizzard",
      "chargebeam",
      "discharge",
      "expandingforce",
      "futuresight",
      "gigaimpact",
      "haze",
      "hyperbeam",
      "icebeam",
      "icywind",
      "magiccoat",
      "naturepower",
      "psychic",
      "psyshock",
      "reflect",
      "reflecttype",
      "risingvoltage",
      "scald",
      "shockwave",
      "signalbeam",
      "skillswap",
      "snarl",
      "solarbeam",
      "suckerpunch",
      "surf",
      "terrainpulse",
      "thunder",
      "thunderbolt",
      "thunderwave",
      "trick",
      "voltswitch",
      "waterpulse",
      "wonderroom",
      "zapcannon"
    ],
    prevo: "Eevee",
    evoType: "levelExtra",
    evoCondition: "in Ultra Space",
    creator: "inkbug"
  },
  poliwrath: {
    inherit: true,
    abilities: { 0: "Water Absorb", 1: "Water Compaction", H: "Swift Swim" }
  },
  lapras: {
    inherit: true,
    baseStats: { hp: 130, atk: 85, def: 80, spa: 125, spd: 105, spe: 75 },
    abilities: { 0: "Lightning Rod", 1: "Shell Armor", H: "Hydration" }
  },
  snover: {
    inherit: true,
    evos: ["Abomasnow", "Skiversnow"]
  },
  abomasnow: {
    inherit: true,
    baseStats: { hp: 90, atk: 92, def: 95, spa: 92, spd: 105, spe: 20 }
  },
  abomasnowmega: {
    inherit: true,
    baseStats: { hp: 90, atk: 132, def: 105, spa: 132, spd: 115, spe: 20 }
  },
  skiversnow: {
    name: "Skiversnow",
    copyData: "Abomasnow",
    baseStats: { hp: 90, atk: 92, def: 55, spa: 92, spd: 65, spe: 100 },
    abilities: { 0: "Snow Warning", H: "Pressure" },
    copyMoves: "Snover",
    // although its data is based on Abomasnow, it doesn't have all of Abomasnow's moves
    movepoolAdditions: [
      "brickbreak",
      "bulldoze",
      "earthpower",
      "focuspunch",
      "gigaimpact",
      "hyperbeam",
      "leafstorm",
      "outrage",
      "rapidspin",
      "rockclimb",
      "rockslide",
      "rocktomb",
      "uturn"
    ],
    prevo: "Snover",
    evoType: "levelExtra",
    evoCondition: "on steep cliffs",
    creator: "ausma"
  },
  leavanny: {
    inherit: true,
    baseStats: { hp: 75, atk: 113, def: 80, spa: 70, spd: 80, spe: 112 },
    abilities: { 0: "Swarm", 1: "Chlorophyll", H: "Technician" }
  },
  noibat: {
    inherit: true,
    evos: ["Noivern", "Noivern-Variant"]
  },
  noivernvariant: {
    name: "Noivern-Variant",
    baseSpecies: "Noivern",
    forme: "Variant",
    copyData: "Noivern",
    types: ["Fighting", "Dragon"],
    baseStats: { hp: 95, atk: 70, def: 80, spa: 97, spd: 80, spe: 113 },
    abilities: { 0: "Levitate" },
    movepoolAdditions: ["aurasphere", "bulldoze", "rocktomb", "vacuumwave"],
    movepoolDeletions: ["boomburst", "dragondance"],
    prevo: "Noibat",
    evoType: "other",
    evoCondition: "A newly-discovered evolution",
    creator: "Hematite"
  },
  solosisneural: {
    name: "Solosis-Neural",
    baseSpecies: "Solosis",
    forme: "Neural",
    copyData: "Solosis",
    types: ["Fighting"],
    baseStats: { hp: 45, atk: 105, def: 30, spa: 30, spd: 50, spe: 30 },
    abilities: { 0: "Overcoat", 1: "Electric Surge", H: "Regenerator" },
    movepoolAdditions: ["axonrush", "bulkup", "earthquake", "fakeout"],
    movepoolDeletions: ["calmmind", "lightscreen", "magiccoat", "psychic", "psyshock", "storedpower"],
    evos: ["Duosion-Neural"],
    creator: "ausma"
  },
  duosionneural: {
    name: "Duosion-Neural",
    baseSpecies: "Duosion",
    forme: "Neural",
    copyData: "Duosion",
    types: ["Fighting"],
    baseStats: { hp: 65, atk: 125, def: 40, spa: 40, spd: 60, spe: 40 },
    abilities: { 0: "Overcoat", 1: "Electric Surge", H: "Regenerator" },
    movepoolAdditions: ["axonrush", "bulkup", "earthquake", "fakeout"],
    movepoolDeletions: ["calmmind", "lightscreen", "magiccoat", "psychic", "psyshock", "storedpower"],
    evos: ["Reuniclus-Neural"],
    prevo: "Solosis-Neural",
    evoLevel: 32,
    creator: "ausma"
  },
  reuniclusneural: {
    name: "Reuniclus-Neural",
    baseSpecies: "Reuniclus",
    forme: "Neural",
    copyData: "Reuniclus",
    types: ["Fighting"],
    baseStats: { hp: 110, atk: 125, def: 65, spa: 65, spd: 85, spe: 40 },
    abilities: { 0: "Overcoat", 1: "Electric Surge", H: "Regenerator" },
    movepoolAdditions: ["axonrush", "bulkup", "earthquake", "fakeout"],
    movepoolDeletions: ["calmmind", "lightscreen", "magiccoat", "psychic", "psyshock", "storedpower"],
    prevo: "Duosion-Neural",
    evoLevel: 41,
    creator: "ausma"
  },
  ogerpon: {
    inherit: true,
    otherFormes: ["Ogerpon-Wellspring", "Ogerpon-Hearthflame", "Ogerpon-Cornerstone", "Ogerpon-Costar", "Ogerpon-Teal-Tera", "Ogerpon-Wellspring-Tera", "Ogerpon-Hearthflame-Tera", "Ogerpon-Cornerstone-Tera"],
    formeOrder: ["Ogerpon", "Ogerpon-Wellspring", "Ogerpon-Hearthflame", "Ogerpon-Cornerstone", "Ogerpon-Costar", "Ogerpon-Teal-Tera", "Ogerpon-Wellspring-Tera", "Ogerpon-Hearthflame-Tera", "Ogerpon-Cornerstone-Tera"]
    // will be unused, but here for costar form
  },
  ogerponcostar: {
    num: 1017,
    name: "Ogerpon-Costar",
    baseSpecies: "Ogerpon",
    forme: "Costar",
    types: ["Grass", "Electric"],
    gender: "F",
    baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
    abilities: { 0: "Motor Drive" },
    heightm: 0.9,
    weightkg: 23.8,
    color: "Yellow",
    eggGroups: ["Undiscovered"],
    requiredItem: "Costar Mask"
  }
};
//# sourceMappingURL=pokedex.js.map
