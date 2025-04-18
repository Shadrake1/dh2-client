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
  reimuhakurei: {
    num: 1001,
    name: "Reimu Hakurei",
    types: ["Flying", "Fairy"],
    baseStats: { hp: 90, atk: 92, def: 82, spa: 106, spd: 130, spe: 60 },
    abilities: { 0: "Inner Focus", H: "Purifying Salt" }
  },
  marisakirisame: {
    num: 1002,
    name: "Marisa Kirisame",
    types: ["Normal", "Fire"],
    baseStats: { hp: 55, atk: 106, def: 60, spa: 120, spd: 84, spe: 125 },
    abilities: { 0: "Magician", H: "Reckless" }
  },
  rumia: {
    num: 1003,
    name: "Rumia",
    types: ["Dark"],
    baseStats: { hp: 95, atk: 110, def: 85, spa: 45, spd: 80, spe: 85 },
    abilities: { 0: "Levitate", 1: "Moxie", H: "Shadow Shroud" }
  },
  cirno: {
    num: 1004,
    name: "Cirno",
    types: ["Ice", "Fairy"],
    baseStats: { hp: 60, atk: 99, def: 59, spa: 119, spd: 59, spe: 109 },
    abilities: { 0: "Hustle", H: "Ice Body" },
    otherFormes: ["Cirno-Tanned"],
    formeOrder: ["Cirno", "Cirno-Tanned"]
  },
  cirnotanned: {
    num: 1005,
    name: "Cirno-Tanned",
    baseSpecies: "Cirno",
    forme: "Tanned",
    types: ["Ice", "Grass"],
    baseStats: { hp: 60, atk: 139, def: 59, spa: 139, spd: 59, spe: 109 },
    abilities: { 0: "Drought" },
    requiredItem: "Summer Backdoor",
    battleOnly: "Cirno"
  },
  hongmeiling: {
    num: 1006,
    name: "Hong Meiling",
    types: ["Fighting", "Dragon"],
    baseStats: { hp: 78, atk: 130, def: 100, spa: 72, spd: 60, spe: 100 },
    abilities: { 0: "Steadfast", 1: "Sand Rush", H: "Comatose" }
  },
  sakuyaizayoi: {
    num: 1007,
    name: "Sakuya Izayoi",
    types: ["Steel"],
    baseStats: { hp: 95, atk: 80, def: 105, spa: 85, spd: 120, spe: 80 },
    abilities: { 0: "Own Tempo", H: "Chrono Blade" }
  },
  remiliascarlet: {
    num: 1008,
    name: "Remilia Scarlet",
    types: ["Dark", "Flying"],
    baseStats: { hp: 68, atk: 115, def: 91, spa: 125, spd: 91, spe: 102 },
    abilities: { 0: "Vampirism" }
  },
  flandrescarlet: {
    num: 1009,
    name: "Flandre Scarlet",
    types: ["Dark", "Fire"],
    baseStats: { hp: 60, atk: 150, def: 90, spa: 120, spd: 70, spe: 90 },
    abilities: { 0: "Turboblaze" }
  },
  lettywhiterock: {
    num: 1010,
    name: "Letty Whiterock",
    types: ["Ice"],
    baseStats: { hp: 132, atk: 60, def: 84, spa: 95, spd: 75, spe: 54 },
    abilities: { 0: "Snow Warning", H: "Frozen World" }
  },
  chen: {
    num: 1011,
    name: "Chen",
    types: ["Normal"],
    baseStats: { hp: 70, atk: 100, def: 62, spa: 58, spd: 70, spe: 120 },
    abilities: { 0: "Prankster", 1: "Technician", H: "Shikigami" }
  },
  lilywhite: {
    num: 1012,
    name: "Lily White",
    types: ["Grass", "Fairy"],
    baseStats: { hp: 90, atk: 35, def: 80, spa: 90, spd: 80, spe: 105 },
    abilities: { 0: "Cloud Nine", 1: "Chlorophyll", H: "Regenerator" }
  },
  youmukonpaku: {
    num: 1013,
    name: "Youmu Konpaku",
    types: ["Ghost", "Fighting"],
    baseStats: { hp: 41, atk: 97, def: 120, spa: 87, spd: 70, spe: 145 },
    abilities: { 0: "Rattled", 1: "Hyper Cutter", H: "Bulletproof" }
  },
  yuyukosaigyouji: {
    num: 1014,
    name: "Yuyuko Saigyouji",
    types: ["Ghost", "Grass"],
    baseStats: { hp: 110, atk: 92, def: 80, spa: 100, spd: 128, spe: 60 },
    abilities: { 0: "Perish Body", 1: "Unaware", H: "Gluttony" }
  },
  ranyakumo: {
    num: 1015,
    name: "Ran Yakumo",
    types: ["Psychic"],
    baseStats: { hp: 85, atk: 115, def: 65, spa: 115, spd: 65, spe: 115 },
    abilities: { 0: "Shikigami Master", H: "Download" }
  },
  yukariyakumo: {
    num: 1016,
    name: "Yukari Yakumo",
    types: ["Psychic", "Dark"],
    baseStats: { hp: 100, atk: 80, def: 100, spa: 140, spd: 100, spe: 80 },
    abilities: { 0: "Intimidate", H: "Shikigami Grandmaster" }
  },
  suikaibuki: {
    num: 1017,
    name: "Suika Ibuki",
    types: ["Fighting", "Ground"],
    baseStats: { hp: 67, atk: 120, def: 112, spa: 113, spd: 90, spe: 78 },
    abilities: { 0: "Misty Surge", H: "Demon Parade" }
  },
  wrigglenightbug: {
    num: 1018,
    name: "Wriggle Nightbug",
    types: ["Bug"],
    baseStats: { hp: 80, atk: 107, def: 53, spa: 85, spd: 56, spe: 109 },
    abilities: { 0: "Swarm", 1: "Illuminate", H: "Tinted Lens" }
  },
  mystialorelei: {
    num: 1019,
    name: "Mystia Lorelei",
    types: ["Dark", "Flying"],
    baseStats: { hp: 85, atk: 70, def: 52, spa: 85, spd: 98, spe: 115 },
    abilities: { 0: "Blinding Song", H: "Punk Rock" }
  },
  tewiinaba: {
    num: 1020,
    name: "Tewi Inaba",
    types: ["Normal", "Fairy"],
    baseStats: { hp: 70, atk: 95, def: 60, spa: 80, spd: 95, spe: 105 },
    abilities: { 0: "Prankster", H: "Super Luck" }
  },
  reisenudongeininaba: {
    num: 1021,
    name: "Reisen Udongein Inaba",
    types: ["Psychic", "Electric"],
    baseStats: { hp: 76, atk: 94, def: 70, spa: 120, spd: 80, spe: 120 },
    abilities: { 0: "Unnerve", H: "Psychic Surge" }
  },
  eirinyagokoro: {
    num: 1022,
    name: "Eirin Yagokoro",
    types: ["Poison"],
    baseStats: { hp: 220, atk: 70, def: 15, spa: 70, spd: 120, spe: 55 },
    abilities: { 0: "Natural Cure", 1: "Curious Medicine", H: "Filter" }
  },
  kaguyahouraisan: {
    num: 1023,
    name: "Kaguya Houraisan",
    types: ["Fairy", "Psychic"],
    baseStats: { hp: 120, atk: 75, def: 64, spa: 106, spd: 80, spe: 100 },
    abilities: { 0: "Magic Guard" }
  },
  fujiwaranomokou: {
    num: 1024,
    name: "Fujiwara no Mokou",
    types: ["Fire", "Fighting"],
    baseStats: { hp: 120, atk: 125, def: 55, spa: 80, spd: 55, spe: 110 },
    abilities: { 0: "Regenerator" }
  },
  medecinemelancholy: {
    num: 1025,
    name: "Medecine Melancholy",
    types: ["Poison"],
    baseStats: { hp: 74, atk: 75, def: 135, spa: 100, spd: 83, spe: 58 },
    abilities: { 0: "Liquid Ooze", H: "Soul Heart" }
  },
  yuukakazami: {
    num: 1026,
    name: "Yuuka Kazami",
    types: ["Grass"],
    baseStats: { hp: 130, atk: 175, def: 130, spa: 95, spd: 120, spe: 20 },
    abilities: { 0: "Flower Veil" }
  },
  ayashamiemaru: {
    num: 1027,
    name: "Aya Shamiemaru",
    types: ["Flying"],
    baseStats: { hp: 66, atk: 92, def: 80, spa: 92, spd: 80, spe: 170 },
    abilities: { 0: "Infiltrator", 1: "Wind Rider", H: "Clearing Storm" }
  },
  komachionozuka: {
    num: 1028,
    name: "Komachi Onozuka",
    types: ["Water", "Ghost"],
    baseStats: { hp: 97, atk: 118, def: 100, spa: 88, spd: 77, spe: 30 },
    abilities: { 0: "Sharpness", H: "Unaware" }
  },
  shizuhaaki: {
    num: 1029,
    name: "Shizuha Aki",
    types: ["Grass"],
    baseStats: { hp: 53, atk: 50, def: 71, spa: 106, spd: 60, spe: 110 },
    abilities: { 0: "Autumn Decay" }
  },
  minorikoaki: {
    num: 1030,
    name: "Minoriko Aki",
    types: ["Grass", "Ground"],
    baseStats: { hp: 110, atk: 55, def: 110, spa: 90, spd: 85, spe: 45 },
    abilities: { 0: "Harvest", H: "Sap Sipper" }
  },
  hinakagiyama: {
    num: 1031,
    name: "Hina Kagiyama",
    types: ["Poison", "Dark"],
    baseStats: { hp: 100, atk: 40, def: 100, spa: 80, spd: 100, spe: 95 },
    abilities: { 0: "Magic Bounce" }
  },
  nitorikawashiro: {
    num: 1032,
    name: "Nitori Kawashiro",
    types: ["Water", "Steel"],
    baseStats: { hp: 81, atk: 91, def: 92, spa: 115, spd: 61, spe: 70 },
    abilities: { 0: "Swift Swim", 1: "Technician", H: "Transistor" }
  },
  sanaekochiya: {
    num: 1033,
    name: "Sanae Kochiya",
    types: ["Water", "Flying"],
    baseStats: { hp: 80, atk: 70, def: 80, spa: 100, spd: 90, spe: 80 },
    abilities: { 0: "Competitive", H: "Drizzle" }
  },
  kanakoyasaka: {
    num: 1034,
    name: "Kanako Yasaka",
    types: ["Ground", "Flying"],
    baseStats: { hp: 100, atk: 115, def: 120, spa: 88, spd: 77, spe: 70 },
    abilities: { 0: "Storm Drain", H: "Defiant" }
  },
  suwakomoriya: {
    num: 1035,
    name: "Suwako Moriya",
    types: ["Water", "Ground"],
    baseStats: { hp: 100, atk: 70, def: 77, spa: 115, spd: 120, spe: 88 },
    abilities: { 0: "Hydration", H: "Earth Eater" }
  },
  ikunagae: {
    num: 1036,
    name: "Iku Nagae",
    types: ["Dragon", "Electric"],
    baseStats: { hp: 75, atk: 100, def: 70, spa: 110, spd: 90, spe: 95 },
    abilities: { 0: "Swift Swim", 1: "Levitate", H: "Air Lock" }
  },
  tenshihinanawi: {
    num: 1037,
    name: "Tenshi Hinanawi",
    types: ["Ground", "Rock"],
    baseStats: { hp: 105, atk: 105, def: 120, spa: 65, spd: 65, spe: 80 },
    abilities: { 0: "Levitate", H: "Sword of Ruin" }
  },
  yamamekurodani: {
    num: 1038,
    name: "Yamame Kurodani",
    types: ["Rock", "Poison"],
    baseStats: { hp: 90, atk: 105, def: 78, spa: 60, spd: 83, spe: 74 },
    abilities: { 0: "Poison Point", H: "Stakeout" }
  },
  parseemizuhashi: {
    num: 1039,
    name: "Parsee Mizuhashi",
    types: ["Dark"],
    baseStats: { hp: 92, atk: 100, def: 75, spa: 52, spd: 105, spe: 56 },
    abilities: { 0: "Jealousy" }
  },
  yuugihoshiguma: {
    num: 1040,
    name: "Yuugi Hoshiguma",
    types: ["Fighting", "Rock"],
    baseStats: { hp: 83, atk: 132, def: 97, spa: 96, spd: 72, spe: 85 },
    abilities: { 0: "Pressure", 1: "Sand Stream", H: "Mold Breaker" }
  },
  satorikomeiji: {
    num: 1041,
    name: "Satori Komeiji",
    types: ["Psychic"],
    baseStats: { hp: 100, atk: 90, def: 70, spa: 90, spd: 70, spe: 80 },
    abilities: { 0: "Insomnia", H: "Neuroforce" }
  },
  rinkaenbyou: {
    num: 1042,
    name: "Rin Kaenbyou",
    types: ["Fire", "Ghost"],
    baseStats: { hp: 58, atk: 81, def: 53, spa: 111, spd: 67, spe: 125 },
    abilities: { 0: "Infiltrator", H: "Flash Fire" }
  },
  utsuhoreiuji: {
    num: 1043,
    name: "Utsuho Reiuji",
    types: ["Fire", "Electric"],
    baseStats: { hp: 70, atk: 145, def: 50, spa: 145, spd: 50, spe: 80 },
    abilities: { 0: "Solar Power", H: "Quark Drive" }
  },
  koishikomeiji: {
    num: 1044,
    name: "Koishi Komeiji",
    types: ["Normal", "Psychic"],
    baseStats: { hp: 42, atk: 50, def: 118, spa: 93, spd: 167, spe: 110 },
    abilities: { 0: "Oblivious", H: "Delusion" }
  },
  nazrin: {
    num: 1045,
    name: "Nazrin",
    types: ["Ground", "Steel"],
    baseStats: { hp: 80, atk: 85, def: 80, spa: 95, spd: 80, spe: 120 },
    abilities: { 0: "Lightning Rod", 1: "Soundproof", H: "Infiltrator" }
  },
  kogasatatara: {
    num: 1046,
    name: "Kogasa Tatara",
    types: ["Water", "Fairy"],
    baseStats: { hp: 72, atk: 54, def: 78, spa: 93, spd: 81, spe: 112 },
    abilities: { 0: "Surprise", H: "Steelworker" }
  },
  minamitsumurasa: {
    num: 1047,
    name: "Minamitsu Murasa",
    types: ["Ghost", "Water"],
    baseStats: { hp: 104, atk: 128, def: 50, spa: 81, spd: 43, spe: 109 },
    abilities: { 0: "Steelworker", H: "Watery Grave" }
  },
  shoutoramaru: {
    num: 1048,
    name: "Shou Toramaru",
    types: ["Fairy", "Electric"],
    baseStats: { hp: 100, atk: 100, def: 66, spa: 120, spd: 84, spe: 95 },
    abilities: { 0: "Dazzling" }
  },
  byakurenhijiri: {
    num: 1049,
    name: "Byakuren Hijiri",
    types: ["Fighting"],
    baseStats: { hp: 70, atk: 100, def: 80, spa: 110, spd: 50, spe: 100 },
    abilities: { 0: "Magic Overdrive", H: "Inner Focus" }
  },
  nuehoujuu: {
    num: 1050,
    name: "Nue Houjuu",
    types: ["Ghost"],
    baseStats: { hp: 65, atk: 86, def: 60, spa: 140, spd: 94, spe: 65 },
    abilities: { 0: "Illusion" }
  },
  hatatehimekaidou: {
    num: 1051,
    name: "Hatate Himekaidou",
    types: ["Psychic", "Flying"],
    baseStats: { hp: 70, atk: 81, def: 78, spa: 106, spd: 60, spe: 155 },
    abilities: { 0: "Trace", 1: "Infiltrator", H: "Technician" }
  },
  kyoukokasodani: {
    num: 1052,
    name: "Kyouko Kasodani",
    types: ["Normal"],
    baseStats: { hp: 74, atk: 73, def: 75, spa: 93, spd: 65, spe: 100 },
    abilities: { 0: "Echo", H: "Punk Rock" }
  },
  yoshikamiyako: {
    num: 1053,
    name: "Yoshika Miyako",
    types: ["Poison", "Ghost"],
    baseStats: { hp: 153, atk: 88, def: 75, spa: 60, spd: 46, spe: 88 },
    abilities: { 0: "Regenerator", 1: "Steadfast", H: "Heal by Desire" }
  },
  seigakaku: {
    num: 1054,
    name: "Seiga Kaku",
    types: ["Dark"],
    baseStats: { hp: 66, atk: 74, def: 70, spa: 130, spd: 80, spe: 120 },
    abilities: { 0: "Escape Artist" }
  },
  mononobenofuto: {
    num: 1055,
    name: "Mononobe no Futo",
    types: ["Water", "Fire"],
    baseStats: { hp: 90, atk: 106, def: 80, spa: 100, spd: 80, spe: 84 },
    abilities: { 0: "Serene Grace", 1: "Natural Cure", H: "Quick Feet" }
  },
  toyosatomiminomiko: {
    num: 1056,
    name: "Toyosatomimi no Miko",
    types: ["Fairy", "Fighting"],
    baseStats: { hp: 75, atk: 125, def: 75, spa: 105, spd: 85, spe: 115 },
    abilities: { 0: "Telepathy", 1: "Inner Focus", H: "Illuminate" }
  },
  mamizoufutatsuiwa: {
    num: 1057,
    name: "Mamizou Futatsuiwa",
    types: ["Normal", "Grass"],
    baseStats: { hp: 100, atk: 120, def: 83, spa: 95, spd: 78, spe: 74 },
    abilities: { 0: "Infiltrator", H: "Scrappy" }
  },
  wakasagihime: {
    num: 1058,
    name: "Wakasagihime",
    types: ["Water"],
    baseStats: { hp: 90, atk: 63, def: 68, spa: 96, spd: 63, spe: 90 },
    abilities: { 0: "Storm Drain", 1: "Hydration", H: "Swift Swim" }
  },
  seijakijin: {
    num: 1059,
    name: "Seija Kijin",
    types: ["Dark"],
    baseStats: { hp: 71, atk: 105, def: 80, spa: 84, spd: 80, spe: 100 },
    abilities: { 0: "Contrary", H: "Prankster" }
  },
  shinmyoumarusukuna: {
    num: 1060,
    name: "Shinmyoumaru Sukuna",
    types: ["Steel", "Fairy"],
    baseStats: { hp: 30, atk: 100, def: 135, spa: 50, spd: 70, spe: 90 },
    abilities: { 0: "Miracle Mallet" }
  },
  raikohorikawa: {
    num: 1061,
    name: "Raiko Horikawa",
    types: ["Electric"],
    baseStats: { hp: 105, atk: 130, def: 85, spa: 130, spd: 70, spe: 40 },
    abilities: { 0: "Soundproof", 1: "Lightning Rod", H: "Pristine Rhythm" }
  },
  sumirekousami: {
    num: 1062,
    name: "Sumireko Usami",
    types: ["Psychic"],
    baseStats: { hp: 90, atk: 61, def: 52, spa: 130, spd: 90, spe: 107 },
    abilities: { 0: "Levitate", 1: "Comatose", H: "Unburden" }
  },
  doremysweet: {
    num: 1063,
    name: "Doremy Sweet",
    types: ["Psychic"],
    baseStats: { hp: 81, atk: 75, def: 122, spa: 94, spd: 73, spe: 80 },
    abilities: { 0: "World of Nightmares" }
  },
  clownpiece: {
    num: 1064,
    name: "Clownpiece",
    types: ["Fairy", "Fire"],
    baseStats: { hp: 130, atk: 64, def: 86, spa: 100, spd: 75, spe: 50 },
    abilities: { 0: "Flame Body", H: "Lunatic Torch" }
  },
  junko: {
    num: 1065,
    name: "Junko",
    types: ["Normal"],
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: { 0: "Mold Breaker" }
  },
  hecatialapislazuli: {
    num: 1066,
    name: "Hecatia Lapislazuli",
    types: ["Dark", "Ghost"],
    baseStats: { hp: 80, atk: 60, def: 120, spa: 90, spd: 120, spe: 100 },
    abilities: { 0: "Pressure" }
  },
  hecatiaearth: {
    num: 1067,
    name: "Hecatia-Earth",
    baseSpecies: "Hecatia Lapislazuli",
    forme: "Earth",
    types: ["Water", "Grass"],
    baseStats: { hp: 80, atk: 60, def: 105, spa: 110, spd: 105, spe: 110 },
    abilities: { 0: "Natural Cure" }
  },
  hecatiamoon: {
    num: 1068,
    name: "Hecatia-Moon",
    baseSpecies: "Hecatia Lapislazuli",
    forme: "Moon",
    types: ["Fairy", "Dragon"],
    baseStats: { hp: 80, atk: 60, def: 90, spa: 130, spd: 90, spe: 120 },
    abilities: { 0: "Dazzling" }
  },
  eternitylarva: {
    num: 1069,
    name: "Eternity Larva",
    types: ["Bug", "Flying"],
    baseStats: { hp: 51, atk: 34, def: 76, spa: 133, spd: 49, spe: 112 },
    abilities: { 0: "Chlorophyll", 1: "Flash Fire", H: "Regenerator" }
  },
  nemunosakata: {
    num: 1070,
    name: "Nemuno Sakata",
    types: ["Steel", "Grass"],
    baseStats: { hp: 85, atk: 112, def: 65, spa: 40, spd: 92, spe: 81 },
    abilities: { 0: "Sharpness", H: "Intimidate" }
  },
  aunnkomano: {
    num: 1071,
    name: "Aunn Komano",
    types: ["Rock"],
    baseStats: { hp: 93, atk: 115, def: 92, spa: 70, spd: 70, spe: 75 },
    abilities: { 0: "Rock Head", H: "Guard Dog" }
  },
  narumiyatadera: {
    num: 1072,
    name: "Narumi Yatadera",
    types: ["Ice", "Fire"],
    baseStats: { hp: 70, atk: 56, def: 70, spa: 125, spd: 70, spe: 114 },
    abilities: { 0: "Sturdy", H: "Winter Chill" }
  },
  okinamatara: {
    num: 1073,
    name: "Okina Matara",
    types: ["Dark", "Normal"],
    baseStats: { hp: 85, atk: 110, def: 80, spa: 120, spd: 80, spe: 85 },
    abilities: { 0: "Four Seasons" }
  },
  yachiekicchou: {
    num: 1074,
    name: "Yachie Kicchou",
    types: ["Dragon", "Dark"],
    baseStats: { hp: 77, atk: 103, def: 140, spa: 90, spd: 65, spe: 75 },
    abilities: { 0: "Shell Armor", H: "Synchronise" }
  },
  keikihaniyasushin: {
    num: 1075,
    name: "Keiki Haniyasushin",
    types: ["Ground", "Electric"],
    baseStats: { hp: 70, atk: 96, def: 84, spa: 110, spd: 100, spe: 95 },
    abilities: { 0: "Haniwa Forces" }
  },
  sakikurokuma: {
    num: 1076,
    name: "Saki Kurokuma",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 75, atk: 140, def: 69, spa: 65, spd: 74, spe: 87 },
    abilities: { 0: "Limber", H: "Stampede" }
  },
  yuumatoutetsu: {
    num: 1077,
    name: "Yuuma Toutetsu",
    types: ["Water", "Dark"],
    baseStats: { hp: 135, atk: 110, def: 75, spa: 80, spd: 95, spe: 85 },
    abilities: { 0: "Pressure", H: "Gluttony" }
  },
  sannyokomakusa: {
    num: 1078,
    name: "Sannyo Komakusa",
    types: ["Fire"],
    baseStats: { hp: 90, atk: 60, def: 65, spa: 105, spd: 119, spe: 76 },
    abilities: { 0: "White Smoke", H: "Black Smoke" }
  },
  misumarutamatsukuri: {
    num: 1079,
    name: "Misumaru Tamatsukuri",
    types: ["Rock"],
    baseStats: { hp: 67, atk: 71, def: 74, spa: 120, spd: 83, spe: 100 },
    abilities: { 0: "Beads of Ruin" }
  },
  chimatatenkyuu: {
    num: 1080,
    name: "Chimata Tenkyuu",
    types: ["Steel", "Flying"],
    baseStats: { hp: 95, atk: 70, def: 95, spa: 110, spd: 85, spe: 70 },
    abilities: { 0: "Ownership", H: "Competitive" }
  },
  momoyohimemushi: {
    num: 1081,
    name: "Momoyo Himemushi",
    types: ["Bug", "Rock"],
    baseStats: { hp: 57, atk: 134, def: 80, spa: 45, spd: 62, spe: 102 },
    abilities: { 0: "Dragon Eater", 1: "Swarm", H: "Sand Force" }
  },
  vivit: {
    num: 1082,
    name: "VIVIT",
    types: ["Steel", "Electric"],
    baseStats: { hp: 80, atk: 100, def: 70, spa: 100, spd: 80, spe: 97 },
    abilities: { 0: "Sap Sipper", 1: "Skill Link", H: "Pixilate" }
  }
};
//# sourceMappingURL=pokedex.js.map
