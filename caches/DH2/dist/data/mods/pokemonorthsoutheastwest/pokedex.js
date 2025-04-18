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
  vikarlarzhu: {
    num: 1,
    name: "Vikarlarzhu",
    types: ["Grass", "Ground"],
    baseStats: { hp: 151, atk: 52, def: 78, spa: 121, spd: 95, spe: 43 },
    abilities: { 0: "Overgrow", H: "Regenerator" },
    weightkg: 21.3
  },
  indakuzou: {
    num: 2,
    name: "Indakuzou",
    types: ["Fire", "Electric"],
    baseStats: { hp: 80, atk: 51, def: 74, spa: 126, spd: 59, spe: 150 },
    abilities: { 0: "Blaze", H: "Infiltrator" },
    weightkg: 8.3
  },
  wukura: {
    num: 3,
    name: "Wukura",
    types: ["Water", "Psychic"],
    baseStats: { hp: 72, atk: 102, def: 78, spa: 101, spd: 67, spe: 120 },
    abilities: { 0: "Torrent", H: "Magic Guard" },
    weightkg: 4.5
  },
  mogoda: {
    num: 4,
    name: "Mogoda",
    types: ["Normal", "Grass"],
    baseStats: { hp: 147, atk: 114, def: 132, spa: 34, spd: 86, spe: 32 },
    abilities: { 0: "Thick Fat", 1: "Gluttony", H: "Regenerator" },
    weightkg: 19.2
  },
  clilscara: {
    num: 5,
    name: "Clilscara",
    types: ["Bug", "Electric"],
    baseStats: { hp: 100, atk: 113, def: 97, spa: 102, spd: 92, spe: 45 },
    abilities: { 0: "Transistor", 1: "Competitive", H: "Sheer Force" },
    weightkg: 6.6
  },
  mizeeque: {
    num: 6,
    name: "Mizeeque",
    types: ["Water", "Fire"],
    baseStats: { hp: 88, atk: 78, def: 68, spa: 108, spd: 58, spe: 108 },
    abilities: { 0: "Swift Swim", 1: "Solar Power", H: "Aroma Veil" },
    weightkg: 2.2
  },
  iwaspealily: {
    num: 7,
    name: "Iwaspealily",
    types: ["Grass", "Water"],
    baseStats: { hp: 78, atk: 58, def: 108, spa: 88, spd: 108, spe: 68 },
    abilities: { 0: "Chlorophyll", 1: "Swift Swim", H: "Aroma Veil" },
    weightkg: 8.5
  },
  kikheargutan: {
    num: 8,
    name: "Kikheargutan",
    types: ["Fire", "Grass"],
    baseStats: { hp: 108, atk: 108, def: 78, spa: 68, spd: 88, spe: 58 },
    abilities: { 0: "Solar Power", 1: "Chlorophyll", H: "Aroma Veil" },
    weightkg: 12.3
  },
  scrobunaga: {
    num: 9,
    name: "Scrobunaga",
    types: ["Ghost", "Poison"],
    baseStats: { hp: 100, atk: 70, def: 95, spa: 120, spd: 100, spe: 70 },
    abilities: { 0: "Cursed Body", 1: "Levitate", H: "Intimidate" },
    weightkg: 1.2
  },
  yinghuci: {
    num: 10,
    name: "Yinghuci",
    types: ["Dragon"],
    baseStats: { hp: 114, atk: 105, def: 85, spa: 106, spd: 74, spe: 70 },
    abilities: { 0: "Dragon's Maw", 1: "Multiscale", H: "Intimidate" },
    weightkg: 13.4
  },
  takizuka: {
    num: 11,
    name: "Takizuka",
    types: ["Water", "Poison"],
    baseStats: { hp: 132, atk: 98, def: 125, spa: 70, spd: 74, spe: 46 },
    abilities: { 0: "Poison Point", 1: "Unnerve", H: "Defiant" },
    weightkg: 9.4
  },
  jizgoku: {
    num: 12,
    name: "Jizgoku",
    types: ["Dark", "Poison"],
    baseStats: { hp: 102, atk: 121, def: 64, spa: 46, spd: 65, spe: 154 },
    abilities: { 0: "Infiltrator", 1: "Defiant", H: "Color Change" },
    weightkg: 7.3
  },
  shoraraguardor: {
    num: 13,
    name: "Shoraraguardor",
    types: ["Ghost", "Dragon"],
    baseStats: { hp: 121, atk: 112, def: 90, spa: 99, spd: 88, spe: 45 },
    abilities: { 0: "Intimidate", 1: "Multiscale", H: "Anger Point" },
    weightkg: 24.5
  },
  strixkuro: {
    num: 14,
    name: "Strixkuro",
    types: ["Ice", "Flying"],
    baseStats: { hp: 72, atk: 73, def: 70, spa: 117, spd: 120, spe: 98 },
    abilities: { 0: "Snow Cloak", 1: "Unnerve", H: "Compoundeyes" },
    weightkg: 13.3
  },
  huokunloz: {
    num: 15,
    name: "Huokunloz",
    types: ["Fire", "Ground"],
    baseStats: { hp: 98, atk: 131, def: 71, spa: 80, spd: 72, spe: 100 },
    abilities: { 0: "Flame Body", 1: "Intimidate", H: "Pickup" },
    weightkg: 8.8
  },
  yuyankura: {
    num: 16,
    name: "Yuyankura",
    types: ["Grass", "Fairy"],
    baseStats: { hp: 105, atk: 65, def: 85, spa: 125, spd: 95, spe: 75 },
    abilities: { 0: "Cute Charm", 1: "Flower Veil", H: "Natural Cure" },
    weightkg: 9.9
  },
  jinjkami: {
    num: 17,
    name: "Jinjkami",
    types: ["Dark", "Fairy"],
    baseStats: { hp: 102, atk: 74, def: 100, spa: 70, spd: 133, spe: 75 },
    abilities: { 0: "Receiver", 1: "Shield Dust", H: "Pickup" },
    weightkg: 4.4
  },
  yexueruu: {
    num: 18,
    name: "Yexueruu",
    types: ["Ice", "Fighting"],
    baseStats: { hp: 141, atk: 127, def: 89, spa: 50, spd: 80, spe: 57 },
    abilities: { 0: "Anger Point", 1: "Intimidate", H: "Ice Body" },
    weightkg: 18.4
  },
  liamui: {
    num: 19,
    name: "Lia-Mui",
    basename: "Lia",
    forme: "Mui",
    types: ["Fighting", "Psychic"],
    baseStats: { hp: 80, atk: 100, def: 75, spa: 100, spd: 75, spe: 100 },
    abilities: { 0: "Synchronize", 1: "Fur Coat", H: "Technician" },
    weightkg: 3.4
  },
  goodbight: {
    num: 20,
    name: "Goodbight",
    types: ["Psychic", "Fairy"],
    baseStats: { hp: 119, atk: 34, def: 89, spa: 121, spd: 130, spe: 57 },
    abilities: { 0: "Sweet Veil", 1: "Lullabody", H: "Aroma Veil" },
    weightkg: 5.5
  },
  fujitong: {
    num: 21,
    name: "Fujitong",
    types: ["Rock", "Psychic"],
    baseStats: { hp: 108, atk: 110, def: 111, spa: 102, spd: 102, spe: 17 },
    abilities: { 0: "Sturdy", 1: "Solid Rock", H: "Prediction" },
    weightkg: 33.7
  },
  phynosca: {
    num: 22,
    name: "Phynosca",
    types: ["Steel", "Bug"],
    baseStats: { hp: 130, atk: 150, def: 70, spa: 20, spd: 70, spe: 110 },
    abilities: { 0: "Sturdy", 1: "Sharpness", H: "Dry Skin" },
    weightkg: 21
  },
  guanrong: {
    num: 23,
    name: "Guanrong",
    types: ["Fire", "Steel"],
    baseStats: { hp: 117, atk: 140, def: 88, spa: 90, spd: 85, spe: 32 },
    abilities: { 0: "Sturdy", 1: "Steam Engine", H: "Sheer Force" },
    weightkg: 28.4
  },
  chromium: {
    num: 24,
    name: "Chromium",
    types: ["Steel", "Dragon"],
    baseStats: { hp: 95, atk: 55, def: 100, spa: 120, spd: 95, spe: 75 },
    abilities: { 0: "Steely Spirit", 1: "Dragon's Maw", H: "Clear Body" },
    weightkg: 17.4
  },
  hantage: {
    num: 25,
    name: "Hantage",
    types: ["Dragon", "Rock"],
    baseStats: { hp: 70, atk: 90, def: 102, spa: 100, spd: 103, spe: 88 },
    abilities: { 0: "Sand Force", 1: "Symbiosis", H: "Stakeout" },
    weightkg: 12.4
  },
  wakadigz: {
    num: 26,
    name: "Wakadigz",
    types: ["Ground", "Rock"],
    baseStats: { hp: 53, atk: 134, def: 81, spa: 30, spd: 89, spe: 134 },
    abilities: { 0: "Guts", 1: "Sand Rush", H: "Overcoat" },
    weightkg: 8.6
  },
  sharkoyudo: {
    num: 27,
    name: "Sharkoyudo",
    types: ["Water", "Dark"],
    baseStats: { hp: 98, atk: 121, def: 75, spa: 70, spd: 74, spe: 111 },
    abilities: { 0: "Strong Jaw", 1: "Intimidate", H: "Hydration" },
    weightkg: 7.5
  },
  chujikon: {
    num: 28,
    name: "Chujikon",
    types: ["Grass", "Fighting"],
    baseStats: { hp: 102, atk: 130, def: 81, spa: 45, spd: 77, spe: 75 },
    abilities: { 0: "Steadfast", 1: "Regenerator", H: "Rivalry" },
    weightkg: 6.6
  },
  verdcao: {
    num: 29,
    name: "Verdcao",
    types: ["Grass"],
    baseStats: { hp: 80, atk: 120, def: 80, spa: 80, spd: 80, spe: 80 },
    abilities: { 0: "Poison Point", 1: "Adaptability", H: "Overgrow" },
    weightkg: 8.6
  },
  crimshuo: {
    num: 30,
    name: "Crimshuo",
    types: ["Fire"],
    baseStats: { hp: 80, atk: 80, def: 80, spa: 120, spd: 80, spe: 80 },
    abilities: { 0: "Flame Body", 1: "Adaptability", H: "Blaze" },
    weightkg: 8.6
  },
  azhui: {
    num: 31,
    name: "Azhui",
    types: ["Water"],
    baseStats: { hp: 80, atk: 80, def: 80, spa: 100, spd: 100, spe: 80 },
    abilities: { 0: "Gooey", 1: "Adaptability", H: "Torrent" },
    weightkg: 8.6
  },
  vermilldian: {
    num: 32,
    name: "Vermilldian",
    types: ["Electric"],
    baseStats: { hp: 80, atk: 80, def: 80, spa: 90, spd: 80, spe: 110 },
    abilities: { 0: "Static", 1: "Adaptability", H: "Transistor" },
    weightkg: 8.6
  },
  chalkongqi: {
    num: 33,
    name: "Chalkongqi",
    types: ["Flying"],
    baseStats: { hp: 80, atk: 80, def: 95, spa: 90, spd: 95, spe: 80 },
    abilities: { 0: "Fluffy", 1: "Adaptability", H: "Aerliate" },
    weightkg: 8.6
  },
  violnao: {
    num: 34,
    name: "Violnao",
    types: ["Psychic"],
    baseStats: { hp: 80, atk: 20, def: 80, spa: 150, spd: 110, spe: 80 },
    abilities: { 0: "Lullabody", 1: "Adaptability", H: "Prediction" },
    weightkg: 8.6
  },
  cyabing: {
    num: 35,
    name: "Cyabing",
    types: ["Ice"],
    baseStats: { hp: 90, atk: 90, def: 90, spa: 90, spd: 80, spe: 80 },
    abilities: { 0: "Frigid Touch", 1: "Adaptability", H: "Snow Cloak" },
    weightkg: 8.6
  },
  limchong: {
    num: 36,
    name: "Limchong",
    types: ["Bug"],
    baseStats: { hp: 80, atk: 150, def: 80, spa: 20, spd: 80, spe: 110 },
    abilities: { 0: "Hyper Cutter", 1: "Honey Gather", H: "Swarm" },
    weightkg: 8.6
  },
  silvgang: {
    num: 37,
    name: "Silvgang",
    types: ["Steel"],
    baseStats: { hp: 80, atk: 100, def: 90, spa: 80, spd: 90, spe: 80 },
    abilities: { 0: "Bravery", 1: "Adaptability", H: "Steelworker" },
    weightkg: 8.6
  },
  joikarazo: {
    num: 38,
    name: "Joikarazo",
    types: ["Fighting"],
    baseStats: { hp: 85, atk: 145, def: 75, spa: 35, spd: 95, spe: 100 },
    abilities: { 0: "Guts", 1: "Vital Spirit", H: "Steadfast" },
    weightkg: 9.4
  },
  sandibai: {
    num: 39,
    name: "Sandibai",
    types: ["Water", "Rock"],
    baseStats: { hp: 101, atk: 102, def: 80, spa: 80, spd: 80, spe: 97 },
    abilities: { 0: "Torrent", H: "Sturdy" },
    weightkg: 7.6
  },
  elapguarr: {
    num: 40,
    name: "Elapguarr",
    types: ["Poison", "Dragon"],
    baseStats: { hp: 100, atk: 140, def: 75, spa: 65, spd: 70, spe: 75 },
    abilities: { 0: "Merciless", 1: "Corrosion", H: "Multiscale" },
    weightkg: 6.4
  },
  phangphang: {
    num: 41,
    name: "Phangphang",
    types: ["Poison", "Ice"],
    baseStats: { hp: 112, atk: 103, def: 89, spa: 80, spd: 123, spe: 44 },
    abilities: { 0: "Frigid Touch", 1: "Poison Touch", H: "Intimidate" },
    weightkg: 7.1
  },
  marthlattle: {
    num: 42,
    name: "Marthlattle",
    types: ["Fighting", "Poison"],
    baseStats: { hp: 91, atk: 114, def: 85, spa: 64, spd: 78, spe: 80 },
    abilities: { 0: "Magic Bounce", 1: "Prankster", H: "Regenerator" },
    weightkg: 8.5
  },
  yuwiani: {
    num: 43,
    name: "Yuwiani",
    types: ["Sound", "Water"],
    baseStats: { hp: 100, atk: 45, def: 105, spa: 120, spd: 110, spe: 70 },
    abilities: { 0: "Drizzle", 1: "Rain Dish", H: "Swift Swim" },
    weightkg: 6.4
  },
  volcaterasu: {
    num: 44,
    name: "Volcaterasu",
    types: ["Fire", "Rock"],
    baseStats: { hp: 70, atk: 35, def: 130, spa: 150, spd: 140, spe: 25 },
    abilities: { 0: "Drought", 1: "Solar Power", H: "Sturdy" },
    weightkg: 14.7
  },
  wujiustra: {
    num: 45,
    name: "Wujiustra",
    types: ["Ground", "Ghost"],
    baseStats: { hp: 45, atk: 130, def: 110, spa: 75, spd: 100, spe: 90 },
    abilities: { 0: "Sand Stream", 1: "Sand Rush", H: "Sand Force" },
    weightkg: 2.2
  },
  yukatsura: {
    num: 46,
    name: "Yukatsura",
    types: ["Ice", "Fairy"],
    baseStats: { hp: 80, atk: 50, def: 110, spa: 150, spd: 120, spe: 40 },
    abilities: { 0: "Snow Warning", 1: "Snow Cloak", H: "Slush Rush" },
    weightkg: 6.7
  },
  bsukuyomi: {
    num: 47,
    name: "Bsukuyomi",
    types: ["Dark", "Electric"],
    baseStats: { hp: 115, atk: 120, def: 95, spa: 90, spd: 95, spe: 35 },
    abilities: { 0: "Blackout", 1: "Symbiosis", H: "Sheer Force" },
    weightkg: 11.3
  },
  pajiranda: {
    num: 48,
    name: "Pajiranda",
    types: ["Grass", "Ghost"],
    baseStats: { hp: 89, atk: 110, def: 104, spa: 51, spd: 88, spe: 98 },
    abilities: { 0: "Overgrow", H: "Perish Body" },
    weightkg: 7.4
  },
  vajiroxx: {
    num: 49,
    name: "Vajiroxx",
    types: ["Fire", "Fighting"],
    baseStats: { hp: 109, atk: 134, def: 87, spa: 70, spd: 88, spe: 52 },
    abilities: { 0: "Blaze", H: "Anger Point" },
    weightkg: 21.2
  },
  guzapzither: {
    num: 50,
    name: "Guzapzither",
    types: ["Sound"],
    baseStats: { hp: 103, atk: 76, def: 89, spa: 110, spd: 100, spe: 71 },
    abilities: { 0: "Frisk", 1: "Lullabody", H: "Power Spot" },
    weightkg: 8.2
  },
  hayumi: {
    num: 51,
    name: "Hayumi",
    types: ["Sound", "Fairy"],
    baseStats: { hp: 104, atk: 67, def: 91, spa: 120, spd: 95, spe: 75 },
    abilities: { 0: "Competitive", 1: "Cute Charm", H: "Lullabody" },
    weightkg: 2.2
  },
  gokemboo: {
    num: 52,
    name: "Gokemboo",
    types: ["Grass", "Sound"],
    baseStats: { hp: 102, atk: 110, def: 90, spa: 70, spd: 84, spe: 98 },
    abilities: { 0: "Leaf Guard", 1: "Receiver", H: "Moxie" },
    weightkg: 6.5
  },
  gamelong: {
    num: 53,
    name: "Gamelong",
    types: ["Steel", "Sound"],
    baseStats: { hp: 100, atk: 98, def: 95, spa: 99, spd: 91, spe: 70 },
    abilities: { 0: "Moxie", 1: "Ancient Spirit", H: "Receiver" },
    weightkg: 12.4
  },
  langsplendor: {
    num: 54,
    name: "Langsplendor",
    types: ["Sound", "Dragon"],
    baseStats: { hp: 112, atk: 77, def: 81, spa: 115, spd: 80, spe: 75 },
    abilities: { 0: "Limber", 1: "Dancer", H: "Ancient Spirit" },
    weightkg: 10.2
  },
  jollipthi: {
    num: 55,
    name: "Jollipthi",
    types: ["Sound", "Ground"],
    baseStats: { hp: 90, atk: 98, def: 93, spa: 90, spd: 89, spe: 77 },
    abilities: { 0: "Intimidate", 1: "Unnerve", H: "Steadfast" },
    weightkg: 9.9
  },
  yangeralkryie: {
    num: 56,
    name: "Yangeralkryie",
    types: ["Sound", "Fighting"],
    baseStats: { hp: 54, atk: 120, def: 83, spa: 64, spd: 90, spe: 117 },
    abilities: { 0: "Dancer", 1: "Super Luck", H: "Defendant" },
    weightkg: 5.6
  },
  lushagoba: {
    num: 57,
    name: "Lushagoba",
    types: ["Psychic", "Sound"],
    baseStats: { hp: 101, atk: 93, def: 95, spa: 80, spd: 90, spe: 75 },
    abilities: { 0: "Rough Skin", 1: "Natural Cure", H: "Regenerator" },
    weightkg: 7.1
  },
  xiyquorii: {
    num: 58,
    name: "Xiyquorii",
    types: ["Normal", "Fighting"],
    baseStats: { hp: 120, atk: 118, def: 57, spa: 34, spd: 120, spe: 87 },
    abilities: { 0: "Moxie", 1: "Vital Spirit", H: "Quick Feet" },
    weightkg: 8.4
  },
  same: {
    num: 59,
    name: "Same",
    types: ["Normal"],
    baseStats: { hp: 84, atk: 84, def: 84, spa: 84, spd: 84, spe: 84 },
    abilities: { 0: "Imposter", H: "Sticky Hold" },
    weightkg: 3.4
  },
  bruhperial: {
    num: 60,
    name: "Bruhperial",
    types: ["Poison", "Normal"],
    baseStats: { hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
    abilities: { 0: "Defiant", 1: "Competitive", H: "Technician" },
    weightkg: 6.3
  }
};
//# sourceMappingURL=pokedex.js.map
