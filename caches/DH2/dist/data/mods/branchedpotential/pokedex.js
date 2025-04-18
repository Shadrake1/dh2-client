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
  /*
  	name: {
  		inheritMoves: ['P1', 'P2'],
  		num: -x,
  		name: "Name",
  		types: [""],
  		baseStats: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0},
  		abilities: {0: ""},
  		weightkg: ,
  	},
  
  	In case someone who isn't me ends up coding this:
  	inheritMoves is a custom argument that's being used to construct learnsets in scripts.ts.
  	It basically tells the script "hey, this is a non-canon mon,
  	"and we want it to inherit all of the moves this other mon can learn."
  
  	You can also naturally inherit via the "prevo" argument, buuuut the issue there is that
  	we need to be able to *remove* things from learnsets. Which doesn't work when the move you wanna delete
  	was inherited from a prevo.
  	So we fake it using some Fusion Evolution learnset construction code, giving us a learnset
  	that is identical to the base mon's without having to copy it all out,
  	which we can then freely add to/delete from in scripts.ts in the usual manner.
  
  	The script automatically goes through and adds the learnsets of all the prevos of any mon you list in the "inheritMoves" array,
  	so no need to list ["Bulbasaur", "Ivysaur", "Venusaur"]; just ["Venusaur"] will do!
  
  
  	Megas and forme changes have their own variable, "megaOf", which is a liiiitle awkward,
  	but basically the order I want things to happen is:
  	> Construct the base Pokemon's learnsets
  	> Modify the base Pokemon's learnsets
  	> THEN construct the Mega's learnset, so we don't have to modify two things
  
  	If we used inheritMoves for the Megas,
  	I *think* we would have to add and delete every move change from both learnsets.
  	Therefore, two separate loops, hahahhh i dont know what I'm doing
  
  	*/
  pitchasaur: {
    inheritMoves: ["Venusaur"],
    num: -101,
    name: "Pitchasaur",
    types: ["Grass", "Water"],
    baseStats: { hp: 90, atk: 95, def: 105, spa: 95, spd: 105, spe: 35 },
    abilities: { 0: "Overgrow", H: "Storm Drain" },
    weightkg: 109.1,
    otherFormes: ["Pitchasaur-Mega"],
    formeOrder: ["Pitchasaur", "Pitchasaur-Mega"]
  },
  pitchasaurmega: {
    megaOf: "Pitchasaur",
    num: -101,
    name: "Pitchasaur-Mega",
    baseSpecies: "Pitchasaur",
    forme: "Mega",
    types: ["Grass", "Water"],
    baseStats: { hp: 90, atk: 105, def: 120, spa: 135, spd: 120, spe: 55 },
    abilities: { 0: "Drizzle" },
    weightkg: 131.86,
    // The battleOnly field isn't used in canon megas,
    // but sometimes not having it for non-canon megas allows the Mega to enter battle already Mega Evolved
    // Which we obviously would like to avoid!
    battleOnly: "Pitchasaur",
    requiredItem: "Pitchasaurite"
  },
  blastonoise: {
    inheritMoves: ["Blastoise"],
    num: -102,
    name: "Blastonoise",
    types: ["Water", "Fairy"],
    baseStats: { hp: 112, atk: 50, def: 105, spa: 75, spd: 110, spe: 78 },
    abilities: { 0: "Torrent", H: "Natural Cure" },
    weightkg: 112.5,
    otherformes: ["Blastonoise-Mega"],
    formeOrder: ["Blastonoise", "Blastonoise-Mega"]
  },
  blastonoisemega: {
    megaOf: "Blastonoise",
    num: -102,
    name: "Blastonoise-Mega",
    baseSpecies: "Blastonoise",
    forme: "Mega",
    types: ["Water", "Fairy"],
    baseStats: { hp: 112, atk: 130, def: 115, spa: 95, spd: 120, spe: 58 },
    abilities: { 0: "Liquid Voice" },
    weightkg: 130.5,
    battleOnly: "Blastonoise",
    requiredItem: "Blastonoisite"
  },
  charodile: {
    inheritMoves: ["Charizard"],
    num: -103,
    name: "Charodile",
    types: ["Fire", "Ground"],
    baseStats: { hp: 78, atk: 104, def: 88, spa: 99, spd: 75, spe: 90 },
    abilities: { 0: "Blaze", H: "Rough Skin" },
    weightkg: 101.2,
    otherformes: ["Charodile-Mega-X", "Charodile-Mega-Y"],
    formeOrder: ["Charodile", "Charodile-Mega-X", "Charodile-Mega-Y"]
  },
  charodilemegax: {
    megaOf: "Charodile",
    num: -103,
    name: "Charodile-Mega-X",
    baseSpecies: "Charodile",
    forme: "Mega",
    types: ["Fire", "Ground"],
    baseStats: { hp: 78, atk: 124, def: 138, spa: 119, spd: 105, spe: 70 },
    abilities: { 0: "Stakeout" },
    weightkg: 124.1,
    battleOnly: "Charodile",
    requiredItem: "Charodilite X"
  },
  charodilemegay: {
    megaOf: "Charodile",
    num: -103,
    name: "Charodile-Mega-Y",
    baseSpecies: "Charodile",
    forme: "Mega",
    types: ["Fire", "Rock"],
    baseStats: { hp: 78, atk: 164, def: 108, spa: 109, spd: 95, spe: 80 },
    abilities: { 0: "Sand Rush" },
    weightkg: 168,
    battleOnly: "Charodile",
    requiredItem: "Charodilite Y"
  },
  stacragus: {
    inheritMoves: ["Butterfree"],
    num: -104,
    name: "Stacragus",
    types: ["Rock", "Flying"],
    baseStats: { hp: 55, atk: 110, def: 50, spa: 60, spd: 50, spe: 70 },
    abilities: { 0: "Shields Down" },
    weightkg: 35,
    otherFormes: ["Stacragus-Chrysalis"],
    formeOrder: ["Stacragus", "Stacragus-Chrysalis"]
  },
  stacraguschrysalis: {
    megaOf: "Stacragus",
    num: -104,
    name: "Stacragus-Chrysalis",
    baseSpecies: "Stacragus",
    forme: "Chrysalis",
    types: ["Rock", "Bug"],
    baseStats: { hp: 55, atk: 60, def: 110, spa: 30, spd: 110, spe: 30 },
    abilities: { 0: "Shields Down" },
    weightkg: 60,
    battleOnly: "Stacragus",
    requiredAbility: "Shields Down"
  },
  hornetox: {
    inheritMoves: ["Beedrill"],
    num: -105,
    name: "Hornetox",
    types: ["Poison", "Ghost"],
    baseStats: { hp: 65, atk: 45, def: 60, spa: 90, spd: 60, spe: 75 },
    abilities: { 0: "Corrosion", H: "Sniper" },
    weightkg: 49.5,
    otherformes: ["Hornetox-Mega"],
    formeOrder: ["Hornetox", "Hornetox-Mega"]
  },
  hornetoxmega: {
    megaOf: "Hornetox",
    num: -105,
    name: "Hornetox-Mega",
    baseSpecies: "Hornetox",
    forme: "Mega",
    types: ["Poison", "Ghost"],
    baseStats: { hp: 65, atk: 46, def: 86, spa: 106, spd: 86, spe: 106 },
    abilities: { 0: "Merciless" },
    weightkg: 65,
    battleOnly: "Hornetox",
    requiredItem: "Hornetoxite"
  },
  banshigen: {
    inheritMoves: ["Pidgeot"],
    num: -106,
    name: "Banshigen",
    gender: "F",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 83, atk: 70, def: 80, spa: 80, spd: 75, spe: 91 },
    abilities: { 0: "Keen Eye", 1: "Tangled Feet", H: "Soundproof" },
    weightkg: 20,
    otherformes: ["Banshigen-Mega"],
    formeOrder: ["Banshigen", "Banshigen-Mega"]
  },
  banshigenmega: {
    megaOf: "Banshigen",
    num: -106,
    name: "Banshigen-Mega",
    baseSpecies: "Banshigen",
    forme: "Mega",
    gender: "F",
    types: ["Normal", "Ghost"],
    baseStats: { hp: 83, atk: 70, def: 110, spa: 100, spd: 105, spe: 111 },
    abilities: { 0: "Punk Rock" },
    weightkg: 30,
    battleOnly: "Banshigen",
    requiredItem: "Banshigenite"
  },
  raticate: {
    num: 20,
    name: "Raticate",
    types: ["Normal"],
    baseStats: { hp: 55, atk: 81, def: 60, spa: 50, spd: 70, spe: 97 },
    abilities: { 0: "Run Away", 1: "Guts", H: "Hustle" },
    heightm: 0.7,
    weightkg: 18.5,
    color: "Brown",
    prevo: "Rattata",
    evoLevel: 20,
    evos: ["Ratichef", "Ratidam"],
    eggGroups: ["Field"],
    otherFormes: ["Raticate-Alola", "Raticate-Alola-Totem"],
    formeOrder: ["Raticate", "Raticate-Alola", "Raticate-Alola-Totem"]
  },
  ratichef: {
    inheritMoves: ["Raticate"],
    num: -107,
    name: "Ratichef",
    types: ["Normal", "Fairy"],
    baseStats: { hp: 110, atk: 50, def: 85, spa: 81, spd: 105, spe: 97 },
    abilities: { 0: "Triage", 1: "Sweet Veil", H: "Ripen" },
    weightkg: 15
  },
  ratidam: {
    inheritMoves: ["Raticate"],
    num: -108,
    name: "Ratidam",
    types: ["Normal", "Water"],
    baseStats: { hp: 97, atk: 91, def: 77, spa: 52, spd: 112, spe: 99 },
    abilities: { 0: "Strong Jaw", 1: "Guts", H: "Hustle" },
    weightkg: 39
  },
  fearow: {
    num: 22,
    name: "Fearow",
    types: ["Normal", "Flying"],
    baseStats: { hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100 },
    abilities: { 0: "Keen Eye", H: "Sniper" },
    heightm: 1.2,
    weightkg: 38,
    color: "Brown",
    prevo: "Spearow",
    evoLevel: 20,
    evos: ["Frigarow", "Storrow"],
    eggGroups: ["Flying"]
  },
  frigarow: {
    inheritMoves: ["Fearow"],
    num: -109,
    name: "Frigarow",
    types: ["Fighting", "Flying"],
    baseStats: { hp: 105, atk: 90, def: 105, spa: 61, spd: 95, spe: 81 },
    abilities: { 0: "Keen Eye", H: "Justified" },
    weightkg: 55
  },
  storrow: {
    inheritMoves: ["Fearow"],
    num: -110,
    name: "Storrow",
    types: ["Fairy", "Flying"],
    baseStats: { hp: 90, atk: 110, def: 90, spa: 60, spd: 85, spe: 102 },
    abilities: { 0: "Keen Eye", H: "Magic Guard" },
    weightkg: 46
  },
  arbok: {
    num: 24,
    name: "Arbok",
    types: ["Poison"],
    baseStats: { hp: 60, atk: 95, def: 69, spa: 65, spd: 79, spe: 80 },
    abilities: { 0: "Intimidate", 1: "Shed Skin", H: "Unnerve" },
    heightm: 3.5,
    weightkg: 65,
    color: "Purple",
    prevo: "Ekans",
    evoLevel: 22,
    evos: ["Phankyr", "Soroboruo"],
    eggGroups: ["Field", "Dragon"]
  },
  phankyr: {
    inheritMoves: ["Arbok"],
    num: -111,
    name: "Phankyr",
    types: ["Poison", "Ghost"],
    baseStats: { hp: 80, atk: 120, def: 69, spa: 84, spd: 89, spe: 101 },
    abilities: { 0: "Esiugsid" },
    weightkg: 5,
    otherFormes: ["Phankyr-Revealed"],
    formeOrder: ["Phankyr", "Phankyr-Revealed"]
  },
  phankyrrevealed: {
    baseSpecies: "Phankyr",
    forme: "Revealed",
    num: -111,
    name: "Phankyr-Revealed",
    types: ["Poison", "Ghost"],
    baseStats: { hp: 80, atk: 120, def: 69, spa: 84, spd: 89, spe: 101 },
    abilities: { 0: "Esiugsid" },
    weightkg: 5,
    requiredAbility: "Esiugsid",
    battleOnly: "Phankyr"
  },
  soroboruo: {
    inheritMoves: ["Arbok"],
    num: -112,
    name: "Soroboruo",
    types: ["Poison"],
    baseStats: { hp: 100, atk: 65, def: 69, spa: 120, spd: 89, spe: 100 },
    abilities: { 0: "Intimidate", 1: "Shed Skin", H: "Berserk" },
    weightkg: 190
  },
  mountoswine: {
    inheritMoves: ["Mamoswine"],
    num: -113,
    name: "Mountoswine",
    types: ["Ice", "Ground"],
    baseStats: { hp: 130, atk: 70, def: 80, spa: 110, spd: 80, spe: 60 },
    abilities: { 0: "Stamina", 1: "Snow Warning", H: "Thick Fat" },
    weightkg: 357
  },
  lapidour: {
    inheritMoves: ["Houndoom"],
    num: -114,
    name: "Lapidour",
    types: ["Dark", "Rock"],
    baseStats: { hp: 75, atk: 100, def: 50, spa: 110, spd: 60, spe: 105 },
    abilities: { 0: "Early Bird", 1: "Prankster", H: "Unnerve" },
    weightkg: 34
  },
  lapidourmega: {
    megaOf: "Lapidour",
    num: -114,
    name: "Lapidour-Mega",
    baseSpecies: "Lapidour",
    forme: "Mega",
    types: ["Fairy", "Rock"],
    baseStats: { hp: 75, atk: 120, def: 60, spa: 150, spd: 60, spe: 135 },
    abilities: { 0: "Fairy Aura" },
    weightkg: 49.5,
    battleOnly: "Lapidour",
    requiredItem: "Lapidourite"
  },
  lamprecut: {
    inheritMoves: ["Eelektross"],
    num: -115,
    name: "Lamprecut",
    types: ["Electric", "Fighting"],
    baseStats: { hp: 80, atk: 115, def: 80, spa: 55, spd: 80, spe: 105 },
    abilities: { 0: "Iron Fist" },
    weightkg: 92.5
  },
  durant: {
    num: 632,
    name: "Durant",
    types: ["Bug", "Steel"],
    baseStats: { hp: 58, atk: 109, def: 112, spa: 48, spd: 48, spe: 109 },
    abilities: { 0: "Swarm", 1: "Hustle", H: "Truant" },
    heightm: 0.3,
    weightkg: 33,
    color: "Gray",
    evos: ["Dreadant", "Durandurant"],
    eggGroups: ["Bug"]
  },
  dreadant: {
    inheritMoves: ["Durant"],
    num: -116,
    name: "Dreadant",
    types: ["Bug", "Dark"],
    baseStats: { hp: 58, atk: 134, def: 102, spa: 48, spd: 68, spe: 119 },
    abilities: { 0: "Swarm", 1: "Anger Point", H: "Intimidate" },
    weightkg: 29
  },
  durandurant: {
    inheritMoves: ["Durant"],
    num: -117,
    name: "Durandurant",
    types: ["Bug", "Electric"],
    baseStats: { hp: 78, atk: 69, def: 62, spa: 113, spd: 98, spe: 109 },
    abilities: { 0: "Swarm", 1: "Soundproof", H: "Punk Rock" },
    weightkg: 150
  },
  dragalge: {
    num: 691,
    name: "Dragalge",
    types: ["Poison", "Dragon"],
    baseStats: { hp: 65, atk: 75, def: 90, spa: 97, spd: 123, spe: 44 },
    abilities: { 0: "Poison Point", 1: "Poison Touch", H: "Adaptability" },
    heightm: 1.8,
    weightkg: 81.5,
    color: "Brown",
    prevo: "Skrelp",
    evoLevel: 48,
    evos: ["Algalisk", "Thermalge"],
    eggGroups: ["Water 1", "Dragon"]
  },
  algalisk: {
    inheritMoves: ["Dragalge"],
    num: -118,
    name: "Algalisk",
    types: ["Poison", "Dragon"],
    baseStats: { hp: 85, atk: 75, def: 110, spa: 97, spd: 103, spe: 69 },
    abilities: { 0: "Poison Point", 1: "Poison Touch", H: "Adaptability" },
    weightkg: 130
  },
  thermalge: {
    inheritMoves: ["Dragalge"],
    num: -119,
    name: "Thermalge",
    types: ["Poison", "Fire"],
    baseStats: { hp: 90, atk: 65, def: 90, spa: 127, spd: 123, spe: 44 },
    abilities: { 0: "Poison Point", 1: "Poison Touch", H: "Neutralizing Gas" },
    weightkg: 146
  },
  dhelmise: {
    num: 781,
    name: "Dhelmise",
    types: ["Ghost", "Grass"],
    gender: "N",
    baseStats: { hp: 70, atk: 131, def: 100, spa: 86, spd: 90, spe: 40 },
    abilities: { 0: "Steelworker" },
    heightm: 3.9,
    weightkg: 210,
    color: "Green",
    eggGroups: ["Mineral"]
  },
  parelp: {
    inheritMoves: ["Dhelmise"],
    num: -120,
    name: "Parelp",
    types: ["Ghost", "Grass"],
    gender: "N",
    baseStats: { hp: 30, atk: 50, def: 20, spa: 45, spd: 20, spe: 30 },
    abilities: { 0: "Damp" },
    weightkg: 0.1,
    evos: ["Alomoguish", "Lusopass"]
  },
  alomoguish: {
    inheritMoves: ["Parelp"],
    num: -121,
    name: "Alomoguish",
    types: ["Water", "Grass"],
    gender: "N",
    evos: ["Annhailord"],
    baseStats: { hp: 87, atk: 40, def: 50, spa: 40, spd: 40, spe: 30 },
    abilities: { 0: "Hydration" },
    weightkg: 31.7
  },
  annhailord: {
    inheritMoves: ["Alomoguish"],
    num: -122,
    name: "Annhailord",
    types: ["Water", "Grass"],
    gender: "N",
    baseStats: { hp: 170, atk: 45, def: 85, spa: 45, spd: 85, spe: 87 },
    abilities: { 0: "Unaware" },
    weightkg: 398.1
  },
  lusopass: {
    inheritMoves: ["Parelp"],
    num: -123,
    name: "Lusopass",
    evos: ["Sunkennon"],
    types: ["Ghost", "Steel"],
    gender: "N",
    baseStats: { hp: 45, atk: 65, def: 50, spa: 65, spd: 45, spe: 17 },
    abilities: { 0: "Magnet Pull" },
    weightkg: 0.5
  },
  sunkennon: {
    inheritMoves: ["Dhelmise"],
    num: -124,
    name: "Sunkennon",
    types: ["Ghost", "Steel"],
    gender: "N",
    baseStats: { hp: 67, atk: 75, def: 85, spa: 130, spd: 100, spe: 60 },
    abilities: { 0: "Mega Launcher" },
    weightkg: 215
  },
  jorunny: {
    inheritMoves: ["Lopunny"],
    num: -125,
    name: "Jorunny",
    types: ["Normal", "Water"],
    baseStats: { hp: 105, atk: 76, def: 84, spa: 54, spd: 96, spe: 65 },
    abilities: { 0: "Cute Charm", 1: "Immunity", H: "Oblivious" },
    weightkg: 33.3,
    otherFormes: ["Jorunny-Mega"],
    formeOrder: ["Jorunny", "Jorunny-Mega"]
  },
  jorunnymega: {
    megaOf: "Jorunny",
    num: -125,
    name: "Jorunny-Mega",
    baseSpecies: "Jorunny",
    forme: "Mega",
    types: ["Water", "Poison"],
    baseStats: { hp: 105, atk: 146, def: 104, spa: 64, spd: 106, spe: 55 },
    abilities: { 0: "Iron Barbs" },
    weightkg: 28.3,
    battleOnly: "Jorunny",
    requiredItem: "Jorunnite"
  },
  exsunei: {
    inheritMoves: ["Delphox"],
    num: -126,
    name: "Exsunei",
    types: ["Fire", "Dark"],
    baseStats: { hp: 75, atk: 124, def: 72, spa: 69, spd: 70, spe: 124 },
    abilities: { 0: "Blaze", H: "Tough Claws" },
    weightkg: 47
  },
  auranubis: {
    inheritMoves: ["Lucario"],
    num: -127,
    name: "Auranubis",
    types: ["Fighting", "Ghost"],
    baseStats: { hp: 70, atk: 70, def: 110, spa: 70, spd: 110, spe: 95 },
    abilities: { 0: "Mummy", 1: "Trace", H: "Sand Force" },
    weightkg: 54,
    otherFormes: ["Auranubis-Mega"],
    formeOrder: ["Auranubis", "Auranubis-Mega"]
  },
  auranubismega: {
    megaOf: "auranubis",
    num: -127,
    name: "Auranubis-Mega",
    baseSpecies: "Auranubis",
    forme: "Mega",
    types: ["Fighting", "Ghost"],
    baseStats: { hp: 70, atk: 110, def: 110, spa: 110, spd: 110, spe: 115 },
    abilities: { 0: "Shadow Shield" },
    weightkg: 57.5,
    battleOnly: "Auranubis",
    requiredItem: "Auranubite"
  },
  deserdra: {
    inheritMoves: ["Goodra"],
    num: -128,
    name: "Deserdra",
    types: ["Dragon", "Fire"],
    baseStats: { hp: 95, atk: 110, def: 105, spa: 120, spd: 105, spe: 65 },
    abilities: { 0: "Flame Body", 1: "Dry Skin", H: "Drought" },
    weightkg: 130
  },
  magcargo: {
    num: 219,
    name: "Magcargo",
    types: ["Fire", "Rock"],
    baseStats: { hp: 60, atk: 50, def: 120, spa: 90, spd: 80, spe: 30 },
    abilities: { 0: "Magma Armor", 1: "Flame Body", H: "Weak Armor" },
    heightm: 0.8,
    weightkg: 55,
    color: "Red",
    prevo: "Slugma",
    evoLevel: 38,
    evos: ["Calibosa", "Escarghoul"],
    eggGroups: ["Amorphous"]
  },
  calibosa: {
    inheritMoves: ["Magcargo"],
    num: -129,
    name: "Calibosa",
    types: ["Fire", "Grass"],
    baseStats: { hp: 85, atk: 80, def: 90, spa: 135, spd: 100, spe: 45 },
    abilities: { 0: "Flash Fire", 1: "Flame Body", H: "Grassy Surge" },
    weightkg: 50
  },
  escarghoul: {
    inheritMoves: ["Magcargo"],
    num: -130,
    name: "Escarghoul",
    types: ["Fire", "Ghost"],
    baseStats: { hp: 105, atk: 120, def: 90, spa: 75, spd: 85, spe: 60 },
    abilities: { 0: "Shell Armor", 1: "Flame Body", H: "Cursed Body" },
    weightkg: 90
  },
  gastrodon: {
    num: 423,
    name: "Gastrodon",
    baseForme: "West",
    types: ["Water", "Ground"],
    baseStats: { hp: 111, atk: 83, def: 68, spa: 92, spd: 82, spe: 39 },
    abilities: { 0: "Sticky Hold", 1: "Storm Drain", H: "Sand Force" },
    heightm: 0.9,
    weightkg: 29.9,
    color: "Purple",
    prevo: "Shellos",
    evoLevel: 30,
    evos: ["Gastronaut", "Tsigastrox"],
    eggGroups: ["Water 1", "Amorphous"],
    cosmeticFormes: ["Gastrodon-East"],
    formeOrder: ["Gastrodon", "Gastrodon-East"]
  },
  gastronaut: {
    inheritMoves: ["Gastrodon"],
    num: -131,
    name: "Gastronaut",
    types: ["Water", "Psychic"],
    baseStats: { hp: 121, atk: 70, def: 79, spa: 122, spd: 102, spe: 41 },
    abilities: { 0: "Sticky Hold", 1: "Water Absorb", H: "Levitate" },
    weightkg: 25
  },
  tsigastrox: {
    inheritMoves: ["Gastrodon"],
    num: -132,
    name: "Tsigastrox",
    types: ["Water", "Poison"],
    baseStats: { hp: 131, atk: 136, def: 98, spa: 52, spd: 89, spe: 29 },
    abilities: { 0: "Sticky Hold", 1: "Corrosion", H: "Lethal Poison" },
    weightkg: 70
  },
  cicamega: {
    inheritMoves: ["Yanmega"],
    num: -133,
    name: "Cicamega",
    types: ["Bug", "Ghost"],
    baseStats: { hp: 96, atk: 66, def: 126, spa: 96, spd: 96, spe: 35 },
    abilities: { 0: "Mummy" },
    weightkg: 3.6
  },
  dragocaulus: {
    inheritMoves: ["Dragapult"],
    num: -134,
    name: "Dragocaulus",
    types: ["Dragon", "Water"],
    baseStats: { hp: 100, atk: 125, def: 90, spa: 100, spd: 85, spe: 100 },
    abilities: { 0: "Swift Swim", 1: "Infiltrator", H: "Technician" },
    weightkg: 50
  },
  magneboom: {
    inheritMoves: ["Magnezone"],
    num: -135,
    name: "Magneboom",
    types: ["Normal", "Steel"],
    gender: "N",
    baseStats: { hp: 130, atk: 60, def: 100, spa: 90, spd: 120, spe: 35 },
    abilities: { 0: "Levitate", 1: "Analytic", H: "Regenerator" },
    weightkg: 155
  },
  hasttral: {
    inheritMoves: ["Hattrem"],
    num: -136,
    name: "Hasttral",
    types: ["Psychic", "Ghost"],
    gender: "F",
    baseStats: { hp: 107, atk: 130, def: 105, spa: 46, spd: 73, spe: 49 },
    abilities: { 0: "Magician", 1: "Anticipation", H: "Magic Bounce" },
    weightkg: 4.9
  },
  dragabyss: {
    inheritMoves: ["Dragonite"],
    num: -137,
    name: "Dragabyss",
    types: ["Dragon", "Ice"],
    baseStats: { hp: 91, atk: 115, def: 85, spa: 125, spd: 80, spe: 104 },
    abilities: { 0: "Illuminate", H: "No Guard" },
    weightkg: 210
  },
  karriminal: {
    inheritMoves: ["Escavalier"],
    num: -138,
    name: "Karriminal",
    types: ["Steel", "Dark"],
    baseStats: { hp: 80, atk: 140, def: 100, spa: 95, spd: 85, spe: 30 },
    abilities: { 0: "Swarm", 1: "Shell Armor", H: "Heatproof" },
    weightkg: 210
  },
  karrineel: {
    inheritMoves: ["Escavalier"],
    num: -139,
    name: "Karrineel",
    types: ["Bug", "Dragon"],
    baseStats: { hp: 70, atk: 110, def: 85, spa: 69, spd: 90, spe: 106 },
    abilities: { 0: "Swarm", 1: "Weak Armor", H: "Steelworker" },
    weightkg: 100
  },
  chrienmor: {
    inheritMoves: ["Silvally"],
    num: -140,
    name: "Chrienmor",
    types: ["Normal"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    otherFormes: ["Chrienmor-Bug", "Chrienmor-Dark", "Chrienmor-Dragon", "Chrienmor-Electric", "Chrienmor-Fairy", "Chrienmor-Fighting", "Chrienmor-Fire", "Chrienmor-Flying", "Chrienmor-Ghost", "Chrienmor-Grass", "Chrienmor-Ground", "Chrienmor-Ice", "Chrienmor-Poison", "Chrienmor-Psychic", "Chrienmor-Rock", "Chrienmor-Steel", "Chrienmor-Water"],
    formeOrder: [
      "Chrienmor",
      "Chrienmor-Fighting",
      "Chrienmor-Flying",
      "Chrienmor-Poison",
      "Chrienmor-Ground",
      "Chrienmor-Rock",
      "Chrienmor-Bug",
      "Chrienmor-Ghost",
      "Chrienmor-Steel",
      "Chrienmor-Fire",
      "Chrienmor-Water",
      "Chrienmor-Grass",
      "Chrienmor-Electric",
      "Chrienmor-Psychic",
      "Chrienmor-Ice",
      "Chrienmor-Dragon",
      "Chrienmor-Dark",
      "Chrienmor-Fairy"
    ]
  },
  chrienmorbug: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Bug",
    baseSpecies: "Chrienmor",
    forme: "Bug",
    types: ["Bug"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Bug Memory",
    changesFrom: "Chrienmor"
  },
  chrienmordark: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Dark",
    baseSpecies: "Chrienmor",
    forme: "Dark",
    types: ["Dark"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Dark Memory",
    changesFrom: "Chrienmor"
  },
  chrienmordragon: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Dragon",
    baseSpecies: "Chrienmor",
    forme: "Dragon",
    types: ["Dragon"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Dragon Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorelectric: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Electric",
    baseSpecies: "Chrienmor",
    forme: "Electric",
    types: ["Electric"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Electric Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorfairy: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Fairy",
    baseSpecies: "Chrienmor",
    forme: "Fairy",
    types: ["Fairy"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Fairy Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorfighting: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Fighting",
    baseSpecies: "Chrienmor",
    forme: "Fighting",
    types: ["Fighting"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Fighting Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorfire: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Fire",
    baseSpecies: "Chrienmor",
    forme: "Fire",
    types: ["Fire"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Fire Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorflying: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Flying",
    baseSpecies: "Chrienmor",
    forme: "Flying",
    types: ["Flying"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Flying Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorghost: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Ghost",
    baseSpecies: "Chrienmor",
    forme: "Ghost",
    types: ["Ghost"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Ghost Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorgrass: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Grass",
    baseSpecies: "Chrienmor",
    forme: "Grass",
    types: ["Grass"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Grass Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorground: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Ground",
    baseSpecies: "Chrienmor",
    forme: "Ground",
    types: ["Ground"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Ground Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorice: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Ice",
    baseSpecies: "Chrienmor",
    forme: "Ice",
    types: ["Ice"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Ice Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorpoison: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Poison",
    baseSpecies: "Chrienmor",
    forme: "Poison",
    types: ["Poison"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Poison Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorpsychic: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Psychic",
    baseSpecies: "Chrienmor",
    forme: "Psychic",
    types: ["Psychic"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Psychic Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorrock: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Rock",
    baseSpecies: "Chrienmor",
    forme: "Rock",
    types: ["Rock"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Rock Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorsteel: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Steel",
    baseSpecies: "Chrienmor",
    forme: "Steel",
    types: ["Steel"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Steel Memory",
    changesFrom: "Chrienmor"
  },
  chrienmorwater: {
    inheritMoves: ["Chrienmor"],
    num: -140,
    name: "Chrienmor-Water",
    baseSpecies: "Chrienmor",
    forme: "Water",
    types: ["Water"],
    gender: "N",
    baseStats: { hp: 102, atk: 102, def: 102, spa: 102, spd: 102, spe: 60 },
    abilities: { 0: "Prism" },
    weightkg: 100.5,
    requiredItem: "Water Memory",
    changesFrom: "Chrienmor"
  },
  ledanagan: {
    inheritMoves: ["Naganadel"],
    num: -141,
    name: "Ledanagan",
    types: ["Poison", "Bug"],
    gender: "N",
    baseStats: { hp: 74, atk: 103, def: 83, spa: 89, spd: 71, spe: 121 },
    abilities: { 0: "Beast Boost" },
    weightkg: 150
  },
  melchor: {
    inheritMoves: ["Melmetal"],
    num: -142,
    name: "Melchor",
    types: ["Steel", "Water"],
    gender: "N",
    baseStats: { hp: 85, atk: 93, def: 108, spa: 132, spd: 108, spe: 74 },
    abilities: { 0: "Holy Conduit" },
    weightkg: 150
  },
  meltan: {
    num: 808,
    name: "Meltan",
    types: ["Steel"],
    gender: "N",
    baseStats: { hp: 46, atk: 65, def: 65, spa: 55, spd: 35, spe: 34 },
    abilities: { 0: "Magnet Pull" },
    heightm: 0.2,
    weightkg: 8,
    color: "Gray",
    evos: ["Melchor"],
    eggGroups: ["Undiscovered"]
  },
  wizmagis: {
    inheritMoves: ["Mismagius"],
    num: -143,
    name: "Wizmagis",
    types: ["Ghost", "Electric"],
    gender: "M",
    baseStats: { hp: 70, atk: 66, def: 70, spa: 110, spd: 105, spe: 109 },
    abilities: { 0: "Levitate", H: "Electric Surge" },
    weightkg: 5
  },
  miswitchus: {
    inheritMoves: ["Mismagius"],
    num: -144,
    name: "Miswitchus",
    types: ["Ghost", "Poison"],
    gender: "F",
    baseStats: { hp: 75, atk: 70, def: 80, spa: 105, spd: 115, spe: 85 },
    abilities: { 0: "Levitate", H: "Potion Master" },
    weightkg: 4.8
  },
  suidreem: {
    inheritMoves: ["Shiinotic"],
    num: -145,
    name: "Suidreem",
    types: ["Grass", "Fairy"],
    baseStats: { hp: 90, atk: 60, def: 80, spa: 110, spd: 115, spe: 45 },
    abilities: { 0: "Illuminate", 1: "Effect Spore", H: "Comatose" },
    weightkg: 60.5
  },
  perishroom: {
    inheritMoves: ["Shiinotic"],
    num: -146,
    name: "Perishroom",
    types: ["Grass", "Ghost"],
    baseStats: { hp: 80, atk: 45, def: 110, spa: 125, spd: 50, spe: 90 },
    abilities: { 0: "Weak Armor", 1: "Effect Spore", H: "Perish Body" },
    weightkg: 4.13
  },
  primorhythm: {
    inheritMoves: ["Primarina"],
    num: -147,
    name: "Primorhythm",
    types: ["Water", "Electric"],
    baseStats: { hp: 78, atk: 54, def: 80, spa: 106, spd: 86, spe: 126 },
    abilities: { 0: "Torrent", H: "Competitive" },
    weightkg: 30
  }
};
//# sourceMappingURL=pokedex.js.map
