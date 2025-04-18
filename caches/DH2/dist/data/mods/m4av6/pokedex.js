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
  butterfree: {
    inherit: true,
    mega: "butterfreemega",
    megaName: "Butterfree-Mega",
    megaStats: { hp: 60, atk: 15, def: 50, spa: 145, spd: 80, spe: 145 },
    megaAbility: { 0: "Dust Scatter" },
    megaStone: "Butterfrite",
    megaCreator: "Mateeus",
    movepoolAdditions: ["earthpower", "taunt"]
  },
  raichu: {
    inherit: true,
    mega: "raichumega",
    megaName: "Raichu-Mega",
    megaType: ["Electric", "Fighting"],
    megaStats: { hp: 60, atk: 125, def: 65, spa: 110, spd: 105, spe: 120 },
    megaAbility: { 0: "Reckless" },
    megaStone: "Raichunite",
    megaCreator: "DrPumpkinz",
    movepoolAdditions: ["highjumpkick"]
  },
  nidoqueen: {
    inherit: true,
    mega: "nidoqueenmega",
    megaName: "Nidoqueen-Mega",
    megaStats: { hp: 90, atk: 122, def: 127, spa: 75, spd: 115, spe: 76 },
    megaAbility: { 0: "Stamina" },
    megaStone: "Nidoqueenite",
    megaCreator: "MegaFlareon",
    movepoolAdditions: ["milkdrink"]
  },
  nidoking: {
    inherit: true,
    mega: "nidokingmega",
    megaName: "Nidoking-Mega",
    megaStats: { hp: 81, atk: 142, def: 107, spa: 85, spd: 75, spe: 115 },
    megaAbility: { 0: "Moxie" },
    megaStone: "Nidokinite",
    megaCreator: "MegaFlareon"
  },
  clefable: {
    inherit: true,
    mega: "clefablemega",
    megaName: "Clefable-Mega",
    megaType: ["Fairy", "Ghost"],
    megaStats: { hp: 95, atk: 86, def: 83, spa: 125, spd: 90, spe: 104 },
    megaAbility: { 0: "Prankster" },
    megaStone: "Clefabite",
    megaCreator: "zxgzxg",
    movepoolAdditions: ["hex", "nastyplot"]
  },
  ninetalesalola: {
    inherit: true,
    mega: "ninetalesalolamega",
    megaName: "Ninetales-Alola-Mega",
    megaStats: { hp: 73, atk: 67, def: 115, spa: 81, spd: 130, spe: 139 },
    megaAbility: { 0: "Everlasting Winter" },
    megaStone: "Ninetalesite",
    megaCreator: "DrPumpkinz"
  },
  parasect: {
    inherit: true,
    mega: "parasectmega",
    megaName: "Parasect-Mega",
    megaType: ["Bug", "Dark"],
    megaStats: { hp: 60, atk: 130, def: 80, spa: 54, spd: 80, spe: 101 },
    megaAbility: { 0: "Tinted Lens" },
    megaStone: "Parasite",
    megaCreator: "BitBitio"
  },
  dugtrio: {
    inherit: true,
    mega: "dugtriomega",
    megaName: "Dugtrio-Mega",
    megaStats: { hp: 35, atk: 112, def: 84, spa: 70, spd: 98, spe: 126 },
    megaAbility: { 0: "Mole-a-Whac" },
    megaStone: "Dugtrionite",
    megaCreator: "lydian"
  },
  rapidash: {
    inherit: true,
    mega: "rapidashmega",
    megaName: "Rapidash-Mega",
    megaType: ["Fire", "Flying"],
    megaStats: { hp: 65, atk: 103, def: 99, spa: 106, spd: 107, spe: 120 },
    megaAbility: { 0: "Magic Guard" },
    megaStone: "Rapidashinite",
    megaCreator: "ausma",
    movepoolAdditions: ["airslash", "uturn"]
  },
  dodrio: {
    inherit: true,
    mega: "dodriomega",
    megaName: "Dodrio-Mega",
    megaType: ["Ground", "Flying"],
    megaStats: { hp: 60, atk: 125, def: 125, spa: 70, spd: 70, spe: 120 },
    megaAbility: { 0: "Technician" },
    megaStone: "Dodrionite",
    megaCreator: "BlueRay",
    movepoolAdditions: ["beatup", "bonerush", "bulldoze", "tripleaxel"]
  },
  electrode: {
    inherit: true,
    mega: "electrodemega",
    megaName: "Electrode-Mega",
    megaStats: { hp: 60, atk: 150, def: 70, spa: 80, spd: 80, spe: 150 },
    megaAbility: { 0: "Implode" },
    megaStone: "Electrodite",
    megaCreator: "KeroseneZanchu",
    movepoolAdditions: ["camouflage", "mindblown"]
  },
  starmie: {
    inherit: true,
    mega: "starmiemega",
    megaName: "Starmie-Mega",
    megaStats: { hp: 60, atk: 95, def: 95, spa: 140, spd: 95, spe: 135 },
    megaAbility: { 0: "Rotation" },
    megaStone: "Starminite",
    megaCreator: "BlueRay",
    movepoolAdditions: ["futuresight", "followme", "moonblast", "storedpower"]
  },
  vaporeon: {
    inherit: true,
    mega: "vaporeonmega",
    megaName: "Vaporeon-Mega",
    megaStats: { hp: 130, atk: 95, def: 100, spa: 120, spd: 135, spe: 45 },
    megaAbility: { 0: "Perish Body" },
    megaStone: "Vaporeonite",
    megaCreator: "inkbug"
  },
  jolteon: {
    inherit: true,
    mega: "jolteonmega",
    megaName: "Jolteon-Mega",
    megaStats: { hp: 65, atk: 95, def: 60, spa: 139, spd: 125, spe: 141 },
    megaAbility: { 0: "Tempestuous" },
    megaStone: "Jolteonite",
    megaCreator: "Hematite",
    movepoolAdditions: ["calmmind"]
  },
  flareon: {
    inherit: true,
    mega: "flareonmega",
    megaName: "Flareon-Mega",
    megaStats: { hp: 65, atk: 130, def: 80, spa: 115, spd: 150, spe: 85 },
    megaAbility: { 0: "Soot Guard" },
    megaStone: "Flareonite",
    megaCreator: "inkbug",
    movepoolAdditions: ["burnup", "morningsun"]
  },
  snorlax: {
    inherit: true,
    mega: "snorlaxmega",
    megaName: "Snorlax-Mega",
    megaType: ["Normal", "Fighting"],
    megaStats: { hp: 160, atk: 120, def: 65, spa: 115, spd: 110, spe: 70 },
    megaAbility: { 0: "Quick Feet" },
    megaStone: "Snorlaxite",
    megaCreator: "ausma"
  },
  dragonite: {
    inherit: true,
    mega: "dragonitemega",
    megaName: "Dragonite-Mega",
    megaStats: { hp: 91, atk: 164, def: 120, spa: 130, spd: 115, spe: 80 },
    megaAbility: { 0: "Pressure" },
    megaStone: "Dragonitite",
    megaCreator: "lydian"
  },
  meganium: {
    inherit: true,
    mega: "meganiummega",
    megaName: "Meganium-Mega",
    megaStats: { hp: 80, atk: 122, def: 115, spa: 103, spd: 110, spe: 95 },
    megaAbility: { 0: "Flower Gift" },
    megaStone: "Meganiumite",
    megaCreator: "inkbug",
    movepoolAdditions: ["dragondance", "junglehealing", "solarblade", "stringshot", "weatherball"]
  },
  typhlosion: {
    inherit: true,
    mega: "typhlosionmega",
    megaName: "Typhlosion-Mega",
    megaStats: { hp: 78, atk: 150, def: 103, spa: 84, spd: 103, spe: 116 },
    megaAbility: { 0: "Ignite" },
    megaStone: "Typhlosionite",
    megaCreator: "BitBitio",
    movepoolAdditions: ["explosion", "headcharge", "honeclaws", "morningsun", "rapidspin"]
  },
  feraligatr: {
    inherit: true,
    mega: "feraligatrmega",
    megaName: "Feraligatr-Mega",
    megaType: ["Water", "Dark"],
    megaStats: { hp: 85, atk: 145, def: 80, spa: 134, spd: 103, spe: 83 },
    megaAbility: { 0: "Savage" },
    megaStone: "Feraligatrite",
    megaCreator: "ausma",
    movepoolAdditions: ["darkpulse", "firefang", "suckerpunch", "thunderfang"]
  },
  ariados: {
    inherit: true,
    mega: "ariadosmega",
    megaName: "Ariados-Mega",
    megaStats: { hp: 70, atk: 90, def: 110, spa: 50, spd: 70, spe: 110 },
    megaAbility: { 0: "Sticky Residues" },
    megaStone: "Ariadosite",
    megaCreator: "kakaks",
    movepoolAdditions: ["spikes", "strengthsap", "uturn"]
  },
  lanturn: {
    inherit: true,
    mega: "lanturnmega",
    megaName: "Lanturn-Mega",
    megaStats: { hp: 125, atk: 68, def: 73, spa: 111, spd: 116, spe: 67 },
    megaAbility: { 0: "Alluring" },
    megaStone: "Lanturnite",
    megaCreator: "okispokis",
    movepoolAdditions: ["recover"]
  },
  slowking: {
    inherit: true,
    mega: "slowkingmega",
    megaName: "Slowking-Mega",
    megaStats: { hp: 95, atk: 75, def: 80, spa: 110, spd: 110, spe: 120 },
    megaAbility: { 0: "Counter-Clockwise Spiral" },
    megaStone: "Slowkinite",
    megaCreator: "Hematite"
  },
  slowkinggalar: {
    inherit: true,
    mega: "slowkinggalarmega",
    megaName: "Slowking-Galar-Mega",
    megaStats: { hp: 95, atk: 65, def: 110, spa: 135, spd: 135, spe: 50 },
    megaAbility: { 0: "Pressure" },
    megaStone: "Slowkinite",
    megaCreator: "jazzmat",
    movepoolAdditions: ["spite", "toxic"]
  },
  magcargo: {
    inherit: true,
    mega: "magcargomega",
    megaName: "Magcargo-Mega",
    megaType: ["Fire"],
    megaStats: { hp: 60, atk: 135, def: 80, spa: 135, spd: 80, spe: 40 },
    megaAbility: { 0: "Volcanic Singe" },
    megaStone: "Magcargonite",
    megaCreator: "ausma",
    movepoolAdditions: ["energyball", "firelash"]
  },
  delibird: {
    inherit: true,
    mega: "delibirdmega",
    megaName: "Delibird-Mega",
    megaStats: { hp: 45, atk: 25, def: 120, spa: 85, spd: 120, spe: 35 },
    megaAbility: { 0: "Spirit of Giving" },
    megaStone: "Delibirdite",
    megaCreator: "Hematite",
    movepoolAdditions: ["celebrate", "healingwish", "roost", "uturn", "wish"]
  },
  mightyena: {
    inherit: true,
    mega: "mightyenamega",
    megaName: "Mightyena-Mega",
    megaType: ["Dark", "Fairy"],
    megaStats: { hp: 70, atk: 140, def: 85, spa: 60, spd: 60, spe: 105 },
    megaAbility: { 0: "Comedian" },
    megaStone: "Mightyenite",
    megaCreator: "jazzmat",
    movepoolAdditions: ["moonlight", "pursuit", "stompingtantrum"]
  },
  exploud: {
    inherit: true,
    mega: "exploudmega",
    megaName: "Exploud-Mega",
    megaType: ["Normal", "Dragon"],
    megaStats: { hp: 104, atk: 101, def: 73, spa: 101, spd: 113, spe: 98 },
    megaAbility: { 0: "Seismic Scream" },
    megaStone: "Exploudite",
    megaCreator: "ausma",
    movepoolAdditions: ["clangingscales", "dragonpulse", "snarl"]
  },
  swalot: {
    inherit: true,
    mega: "swalotmega",
    megaName: "Swalot-Mega",
    megaStats: { hp: 100, atk: 103, def: 103, spa: 103, spd: 103, spe: 55 },
    megaAbility: { 0: "Protean" },
    megaStone: "Swalonite",
    megaCreator: "Mossy Sandwich",
    movepoolAdditions: ["flamethrower", "thunderbolt", "vacuumwave"]
  },
  wailord: {
    inherit: true,
    mega: "wailordmega",
    megaName: "Wailord-Mega",
    megaStats: { hp: 170, atk: 105, def: 65, spa: 110, spd: 65, spe: 85 },
    megaAbility: { 0: "Uplifting" },
    megaStone: "Wailordite",
    megaCreator: "Paulluxx and KeroseneZanchu",
    movepoolAdditions: ["rapidspin", "shoreup"]
  },
  flygon: {
    inherit: true,
    mega: "flygonmega",
    megaName: "Flygon-Mega",
    megaStats: { hp: 80, atk: 130, def: 95, spa: 105, spd: 105, spe: 105 },
    megaAbility: { 0: "Desert Gales" },
    megaStone: "Flygonite",
    megaCreator: "ausma"
  },
  cacturne: {
    inherit: true,
    mega: "cacturnemega",
    megaName: "Cacturne-Mega",
    megaStats: { hp: 70, atk: 115, def: 115, spa: 115, spd: 105, spe: 55 },
    megaAbility: { 0: "Coup de Grass" },
    megaStone: "Cacturnite",
    megaCreator: "Hematite",
    movepoolAdditions: ["assurance", "brine", "knockoff", "strengthsap"]
  },
  walrein: {
    inherit: true,
    mega: "walreinmega",
    megaName: "Walrein-Mega",
    megaStats: { hp: 110, atk: 110, def: 90, spa: 145, spd: 90, spe: 85 },
    megaAbility: { 0: "Drizzle" },
    megaStone: "Walreinite",
    megaCreator: "kakaks",
    movepoolAdditions: ["flipturn", "slackoff"]
  },
  regirock: {
    inherit: true,
    mega: "regirockmega",
    megaName: "Regirock-Mega",
    megaStats: { hp: 80, atk: 145, def: 200, spa: 70, spd: 120, spe: 65 },
    megaAbility: { 0: "Stamina" },
    megaStone: "Reginite",
    megaCreator: "DrPumpkinz"
  },
  regice: {
    inherit: true,
    mega: "regicemega",
    megaName: "Regice-Mega",
    megaStats: { hp: 80, atk: 60, def: 110, spa: 150, spd: 220, spe: 60 },
    megaAbility: { 0: "Snow Warning" },
    megaStone: "Reginite",
    megaCreator: "Full_Korbe",
    movepoolAdditions: ["lifedew", "teleport"]
  },
  registeel: {
    inherit: true,
    mega: "registeelmega",
    megaName: "Registeel-Mega",
    megaStats: { hp: 80, atk: 115, def: 180, spa: 75, spd: 180, spe: 50 },
    megaAbility: { 0: "Heatproof" },
    megaStone: "Reginite",
    megaCreator: "DrPumpkinz"
  },
  torterra: {
    inherit: true,
    mega: "torterramega",
    megaName: "Torterra-Mega",
    megaStats: { hp: 95, atk: 138, def: 134, spa: 92, spd: 101, spe: 65 },
    megaAbility: { 0: "Gravitational Pull" },
    megaStone: "Torterranite",
    megaCreator: "abismal",
    movepoolAdditions: ["bodypress", "gravapple"]
  },
  infernape: {
    inherit: true,
    mega: "infernapemega",
    megaName: "Infernape-Mega",
    megaStats: { hp: 76, atk: 114, def: 113, spa: 114, spd: 97, spe: 120 },
    megaAbility: { 0: "Chakra Lock" },
    megaStone: "Infernite",
    megaCreator: "ausma"
  },
  empoleon: {
    inherit: true,
    mega: "empoleonmega",
    megaName: "Empoleon-Mega",
    megaStats: { hp: 84, atk: 86, def: 103, spa: 131, spd: 141, spe: 85 },
    megaAbility: { 0: "Lightning Rod" },
    megaStone: "Empoleonite",
    megaCreator: "BlueRay",
    movepoolAdditions: ["flipturn", "haze", "originpulse", "roost"]
  },
  staraptor: {
    inherit: true,
    mega: "staraptormega",
    megaName: "Staraptor-Mega",
    megaStats: { hp: 85, atk: 150, def: 85, spa: 50, spd: 80, spe: 135 },
    megaAbility: { 0: "Showdown" },
    megaStone: "Staraptorite",
    megaCreator: "IsoCon",
    movepoolAdditions: ["superfang"]
  },
  bibarel: {
    inherit: true,
    mega: "bibarelmega",
    megaName: "Bibarel-Mega",
    megaStats: { hp: 79, atk: 135, def: 60, spa: 68, spd: 60, spe: 108 },
    megaAbility: { 0: "Hard Worker" },
    megaStone: "Bibarelite",
    megaCreator: "\u304B\u305F\u308F\u308C\u6642",
    movepoolAdditions: ["fly"]
  },
  kricketune: {
    inherit: true,
    mega: "kricketunemega",
    megaName: "Kricketune-Mega",
    megaType: ["Bug", "Fighting"],
    megaStats: { hp: 77, atk: 124, def: 86, spa: 15, spd: 51, spe: 131 },
    megaAbility: { 0: "Dancer" },
    megaStone: "Kricketite",
    megaCreator: "inkbug",
    movepoolAdditions: ["closecombat", "firstimpression", "matblock", "powertrip", "quickguard", "tripleaxel", "uturn"]
  },
  luxray: {
    inherit: true,
    mega: "luxraymega",
    megaName: "Luxray-Mega",
    megaStats: { hp: 80, atk: 160, def: 89, spa: 125, spd: 89, spe: 80 },
    megaAbility: { 0: "Ambush" },
    megaStone: "Luxrite",
    megaCreator: "DrPumpkinz"
  },
  bastiodon: {
    inherit: true,
    mega: "bastiodonmega",
    megaName: "Bastiodon-Mega",
    megaType: ["Ground", "Steel"],
    megaStats: { hp: 60, atk: 102, def: 168, spa: 47, spd: 168, spe: 50 },
    megaAbility: { 0: "Settle" },
    megaStone: "Bastiodite",
    megaCreator: "woworiginal",
    movepoolAdditions: ["earthpower"]
  },
  floatzel: {
    inherit: true,
    mega: "floatzelmega",
    megaName: "Floatzel-Mega",
    megaStats: { hp: 85, atk: 105, def: 85, spa: 85, spd: 80, spe: 155 },
    megaAbility: { 0: "Pool Floaties" },
    megaStone: "Floatzelite",
    megaCreator: "inkbug",
    movepoolAdditions: ["coaching", "fakeout", "flipturn"]
  },
  mismagius: {
    inherit: true,
    mega: "mismagiusmega",
    megaName: "Mismagius-Mega",
    megaType: ["Ghost", "Poison"],
    megaStats: { hp: 60, atk: 70, def: 100, spa: 145, spd: 115, spe: 105 },
    megaAbility: { 0: "Alchemist" },
    megaStone: "Mismaginite",
    megaCreator: "ausma",
    movepoolAdditions: ["partingshot", "poisongas", "sludgebomb", "sludgewave", "toxicspikes"]
  },
  honchkrow: {
    inherit: true,
    mega: "honchkrowmega",
    megaName: "Honchkrow-Mega",
    megaStats: { hp: 100, atk: 145, def: 82, spa: 105, spd: 102, spe: 71 },
    megaAbility: { 0: "Blackmail" },
    megaStone: "Honchkronite",
    megaCreator: "ausma",
    movepoolAdditions: ["dualwingbeat", "partingshot"]
  },
  spiritomb: {
    inherit: true,
    mega: "spiritombmega",
    megaName: "Spiritomb-Mega",
    megaStats: { hp: 50, atk: 108, def: 142, spa: 108, spd: 142, spe: 35 },
    megaAbility: { 0: "Regenerator" },
    megaStone: "Odd Keystone",
    megaCreator: "inkbug",
    movepoolAdditions: ["partingshot"]
  },
  drapion: {
    inherit: true,
    mega: "drapionmega",
    megaName: "Drapion-Mega",
    megaStats: { hp: 70, atk: 130, def: 150, spa: 60, spd: 105, spe: 85 },
    megaAbility: { 0: "Steelbreaker" },
    megaStone: "Drapionite",
    megaCreator: "Hematite",
    movepoolAdditions: ["recover"]
  },
  lickilicky: {
    inherit: true,
    mega: "lickilickymega",
    megaName: "Lickilicky-Mega",
    megaType: ["Normal", "Fairy"],
    megaStats: { hp: 110, atk: 115, def: 100, spa: 115, spd: 100, spe: 75 },
    megaAbility: { 0: "Thick Fat" },
    megaStone: "Lickilickite",
    megaCreator: "ARandomPerson",
    movepoolAdditions: ["playrough"]
  },
  electivire: {
    inherit: true,
    mega: "electiviremega",
    megaName: "Electivire-Mega",
    megaType: ["Electric", "Fighting"],
    megaStats: { hp: 75, atk: 161, def: 90, spa: 115, spd: 100, spe: 99 },
    megaAbility: { 0: "Electroplating" },
    megaStone: "Electivirite",
    megaCreator: "shinxthe17!",
    movepoolAdditions: ["bulkup", "drainpunch"]
  },
  magmortar: {
    inherit: true,
    mega: "magmortarmega",
    megaName: "Magmortar-Mega",
    megaStats: { hp: 75, atk: 105, def: 87, spa: 170, spd: 110, spe: 93 },
    megaAbility: { 0: "Neutralizing Gas" },
    megaStone: "Magmortarite",
    megaCreator: "Paulluxx and abismal",
    movepoolAdditions: ["scald", "recover"]
  },
  porygonz: {
    inherit: true,
    mega: "porygonzmega",
    megaName: "Porygon-Z-Mega",
    megaStats: { hp: 85, atk: 80, def: 85, spa: 160, spd: 120, spe: 105 },
    megaAbility: { 0: "Erratic Code" },
    megaStone: "Porygonite-Z",
    megaCreator: "Violettes"
  },
  froslass: {
    inherit: true,
    mega: "froslassmega",
    megaName: "Froslass-Mega",
    megaStats: { hp: 70, atk: 130, def: 95, spa: 80, spd: 90, spe: 115 },
    megaAbility: { 0: "Magic Bounce" },
    megaStone: "Froslassite",
    megaCreator: "Hematite"
  },
  samurott: {
    inherit: true,
    mega: "samurottmega",
    megaName: "Samurott-Mega",
    megaStats: { hp: 95, atk: 153, def: 100, spa: 100, spd: 70, spe: 110 },
    megaAbility: { 0: "Heavenly Techniques" },
    megaStone: "Samurite",
    megaCreator: "BlueRay",
    movepoolAdditions: ["flipturn", "psychocut", "slackoff"]
  },
  stoutland: {
    inherit: true,
    mega: "stoutlandmega",
    megaName: "Stoutland-Mega",
    megaType: ["Normal", "Steel"],
    megaStats: { hp: 85, atk: 135, def: 125, spa: 45, spd: 100, spe: 110 },
    megaAbility: { 0: "Pacifying Pelt" },
    megaStone: "Stoutlandite",
    megaCreator: "okispokis",
    movepoolAdditions: ["bodyslam", "earthquake", "uturn", "wish"]
  },
  simisear: {
    inherit: true,
    mega: "simisearmega",
    megaName: "Simisear-Mega",
    megaType: ["Fire", "Fairy"],
    megaStats: { hp: 75, atk: 123, def: 68, spa: 123, spd: 88, spe: 121 },
    megaAbility: { 0: "Red Licorice" },
    megaStone: "Simisearite",
    megaCreator: "ausma",
    movepoolAdditions: ["calmmind", "dazzlinggleam", "drainingkiss", "mysticalfire", "playrough", "slackoff"]
  },
  zebstrika: {
    inherit: true,
    mega: "zebstrikamega",
    megaName: "Zebstrika-Mega",
    megaStats: { hp: 75, atk: 120, def: 78, spa: 80, spd: 108, spe: 136 },
    megaAbility: { 0: "Vajra" },
    megaStone: "Zebstrikanite",
    megaCreator: "BlueRay and JosJet",
    movepoolAdditions: ["assurance", "jawlock", "spikes", "suckerpunch", "taunt"]
  },
  gigalith: {
    inherit: true,
    mega: "gigalithmega",
    megaName: "Gigalith-Mega",
    megaStats: { hp: 85, atk: 135, def: 160, spa: 100, spd: 110, spe: 25 },
    megaAbility: { 0: "Solar Core" },
    megaStone: "Gigalite",
    megaCreator: "inkbug",
    movepoolAdditions: ["sunnyday", "synthesis", "trickroom"]
  },
  conkeldurr: {
    inherit: true,
    mega: "conkeldurrmega",
    megaName: "Conkeldurr-Mega",
    megaStats: { hp: 105, atk: 190, def: 125, spa: 55, spd: 85, spe: 45 },
    megaAbility: { 0: "Long Reach" },
    megaStone: "Conkeldite",
    megaCreator: "DrPumpkinz",
    movepoolAdditions: ["shoreup"]
  },
  leavanny: {
    inherit: true,
    mega: "leavannymega",
    megaName: "Leavanny-Mega",
    megaStats: { hp: 75, atk: 103, def: 100, spa: 110, spd: 100, spe: 112 },
    megaAbility: { 0: "Parental Bond" },
    megaStone: "Leavannite",
    megaCreator: "Hematite",
    movepoolAdditions: ["appleacid", "lowkick", "lunge", "quiverdance"]
  },
  krookodile: {
    inherit: true,
    mega: "krookodilemega",
    megaName: "Krookodile-Mega",
    megaStats: { hp: 95, atk: 150, def: 95, spa: 72, spd: 95, spe: 112 },
    megaAbility: { 0: "Stygian Shades" },
    megaStone: "Krookodilite",
    megaCreator: "BitBitio",
    movepoolAdditions: ["memento"]
  },
  archeops: {
    inherit: true,
    mega: "archeopsmega",
    megaName: "Archeops-Mega",
    megaStats: { hp: 75, atk: 190, def: 65, spa: 127, spd: 65, spe: 145 },
    megaAbility: { 0: "Second Wind" },
    megaStone: "Archeonite",
    megaCreator: "ausma",
    movepoolAdditions: ["bravebird", "dualwingbeat", "fireblast"]
  },
  garbodor: {
    inherit: true,
    mega: "garbodormega",
    megaName: "Garbodor-Mega",
    megaStats: { hp: 80, atk: 95, def: 132, spa: 95, spd: 132, spe: 40 },
    megaAbility: { 0: "Trash Compactor" },
    megaStone: "Garbodorite",
    megaCreator: "inkbug",
    movepoolAdditions: ["stealthrock"]
  },
  zoroark: {
    inherit: true,
    mega: "zoroarkmega",
    megaName: "Zoroark-Mega",
    megaStats: { hp: 60, atk: 125, def: 90, spa: 125, spd: 95, spe: 115 },
    megaAbility: { 0: "Forgery" },
    megaStone: "Zoroarkite",
    megaCreator: "Magmajudis",
    movepoolAdditions: ["focuspunch", "gunkshot", "superpower"]
  },
  cinccino: {
    inherit: true,
    mega: "cinccinomega",
    megaName: "Cinccino-Mega",
    megaType: ["Normal", "Fairy"],
    megaStats: { hp: 75, atk: 95, def: 80, spa: 65, spd: 140, spe: 115 },
    megaAbility: { 0: "Long Whip" },
    movepoolAdditions: ["slackoff"],
    megaStone: "Cinccinite",
    megaCreator: "KeroseneZanchu"
  },
  gothitelle: {
    inherit: true,
    mega: "gothitellemega",
    megaName: "Gothitelle-Mega",
    megaType: ["Psychic", "Steel"],
    megaStats: { hp: 70, atk: 55, def: 120, spa: 130, spd: 150, spe: 65 },
    megaAbility: { 0: "Magic Guard" },
    megaStone: "Gothitite",
    megaCreator: "inkbug",
    movepoolAdditions: ["doomdesire", "flashcannon", "teleport", "wish"]
  },
  reuniclus: {
    inherit: true,
    mega: "reuniclusmega",
    megaName: "Reuniclus-Mega",
    megaType: ["Psychic", "Fighting"],
    megaStats: { hp: 110, atk: 110, def: 115, spa: 140, spd: 85, spe: 30 },
    megaAbility: { 0: "Two-Minded" },
    megaStone: "Reunite",
    megaCreator: "Hematite",
    movepoolAdditions: ["psychoboost"]
  },
  vanilluxe: {
    inherit: true,
    mega: "vanilluxemega",
    megaName: "Vanilluxe-Mega",
    megaStats: { hp: 71, atk: 95, def: 85, spa: 160, spd: 115, spe: 109 },
    megaAbility: { 0: "Cold Sweat" },
    megaStone: "Vanillite",
    megaCreator: "Hematite"
  },
  // I super do not trust that editing Mega Sawsbuck could go well and I don't have this in me tonight, so I'm not reformatting it
  sawsbuck: {
    inherit: true,
    otherFormes: ["Sawsbuck-Mega", "Sawsbuck-Summer-Mega", "Sawsbuck-Autumn-Mega", "Sawsbuck-Winter-Mega"],
    formeOrder: ["Sawsbuck", "Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter", "Sawsbuck-Mega", "Sawsbuck-Summer-Mega", "Sawsbuck-Autumn-Mega", "Sawsbuck-Winter-Mega"],
    movepoolAdditions: ["growth", "heatwave", "highhorsepower", "iceshard", "shadowsneak", "playrough", "poltergeist", "tripleaxel"]
  },
  sawsbuckmega: {
    num: 586,
    name: "Sawsbuck-Mega",
    baseSpecies: "Sawsbuck",
    forme: "Mega",
    types: ["Fairy", "Grass"],
    baseStats: { hp: 80, atk: 120, def: 80, spa: 100, spd: 80, spe: 115 },
    abilities: { 0: "Spring Fever" },
    heightm: 1.9,
    weightkg: 92.5,
    color: "Brown",
    eggGroups: ["Field"],
    requiredItem: "Sawsbuckite",
    creator: "ViZar"
  },
  sawsbucksummermega: {
    num: 586,
    name: "Sawsbuck-Summer-Mega",
    baseSpecies: "Sawsbuck",
    forme: "Mega-Summer",
    types: ["Fire", "Grass"],
    baseStats: { hp: 80, atk: 100, def: 70, spa: 135, spd: 70, spe: 120 },
    abilities: { 0: "Summer Days" },
    heightm: 1.9,
    weightkg: 92.5,
    color: "Brown",
    eggGroups: ["Field"],
    requiredItem: "Sawsbuckite",
    battleOnly: "Sawsbuck-Summer",
    creator: "ViZar"
  },
  sawsbuckautumnmega: {
    num: 586,
    name: "Sawsbuck-Autumn-Mega",
    baseSpecies: "Sawsbuck",
    forme: "Mega-Autumn",
    types: ["Ghost", "Grass"],
    baseStats: { hp: 80, atk: 110, def: 115, spa: 60, spd: 115, spe: 95 },
    abilities: { 0: "Autumn Leaves" },
    heightm: 1.9,
    weightkg: 92.5,
    color: "Brown",
    eggGroups: ["Field"],
    requiredItem: "Sawsbuckite",
    battleOnly: "Sawsbuck-Autumn",
    creator: "ViZar"
  },
  sawsbuckwintermega: {
    num: 586,
    name: "Sawsbuck-Winter-Mega",
    baseSpecies: "Sawsbuck",
    forme: "Mega-Winter",
    types: ["Ice", "Grass"],
    baseStats: { hp: 80, atk: 130, def: 105, spa: 60, spd: 85, spe: 115 },
    abilities: { 0: "Winter's Tale" },
    heightm: 1.9,
    weightkg: 92.5,
    color: "Brown",
    eggGroups: ["Field"],
    requiredItem: "Sawsbuckite",
    battleOnly: "Sawsbuck-Winter",
    creator: "ViZar"
  },
  klinklang: {
    inherit: true,
    mega: "klinklangmega",
    megaName: "Klinklang-Mega",
    megaType: ["Steel", "Electric"],
    megaStats: { hp: 60, atk: 130, def: 115, spa: 100, spd: 85, spe: 130 },
    megaAbility: { 0: "Electric Surge" },
    megaStone: "Klinklite",
    megaCreator: "zxgzxg",
    movepoolAdditions: ["overheat", "rapidspin"]
  },
  eelektross: {
    inherit: true,
    mega: "eelektrossmega",
    megaName: "Eelektross-Mega",
    megaStats: { hp: 85, atk: 125, def: 100, spa: 125, spd: 100, spe: 80 },
    megaAbility: { 0: "Luster Swap" },
    megaStone: "Eelektrossite",
    megaCreator: "ausma",
    movepoolAdditions: ["gunkshot", "recover", "scald"]
  },
  chandelure: {
    inherit: true,
    mega: "chandeluremega",
    megaName: "Chandelure-Mega",
    megaStats: { hp: 60, atk: 57, def: 108, spa: 185, spd: 108, spe: 102 },
    megaAbility: { 0: "Nightmare Heart" },
    megaStone: "Chandelite",
    megaCreator: "inkbug and BotwNerd745",
    movepoolAdditions: ["mindblown"]
  },
  bisharp: {
    inherit: true,
    mega: "bisharpmega",
    megaName: "Bisharp-Mega",
    megaStats: { hp: 65, atk: 145, def: 110, spa: 90, spd: 90, spe: 90 },
    megaAbility: { 0: "Executioner" },
    megaStone: "Bisharpite",
    megaCreator: "DrPumpkinz"
  },
  hydreigon: {
    inherit: true,
    mega: "hydreigonmega",
    megaName: "Hydreigon-Mega",
    megaStats: { hp: 92, atk: 129, def: 110, spa: 165, spd: 90, spe: 114 },
    megaAbility: { 0: "Berserk" },
    megaStone: "Hydreigonite",
    megaCreator: "Demon Dragon"
  },
  delphox: {
    inherit: true,
    mega: "delphoxmega",
    megaName: "Delphox-Mega",
    megaStats: { hp: 75, atk: 69, def: 115, spa: 135, spd: 130, spe: 110 },
    megaAbility: { 0: "Clairvoyance" },
    megaStone: "Delphite",
    megaCreator: "Magmajudis",
    movepoolAdditions: ["recover", "speedswap", "teleport"]
  },
  talonflame: {
    inherit: true,
    mega: "talonflamemega",
    megaName: "Talonflame-Mega",
    megaStats: { hp: 78, atk: 118, def: 71, spa: 134, spd: 69, spe: 129 },
    megaAbility: { 0: "Bird of Prey" },
    megaStone: "Talonflite",
    megaCreator: "RottenInfernape",
    movepoolAdditions: ["scorchingsands"]
  },
  meowstic: {
    inherit: true,
    mega: "meowsticmega",
    megaName: "Meowstic-Mega",
    megaType: ["Psychic", "Dark"],
    megaStats: { hp: 74, atk: 133, def: 91, spa: 48, spd: 96, spe: 124 },
    megaAbility: { 0: "Dark Aura" },
    megaStone: "Meowsticite",
    megaCreator: "Mossy Sandwich",
    movepoolAdditions: ["foulplay", "knockoff", "partingshot", "psychicfangs", "pursuit"]
  },
  meowsticf: {
    inherit: true,
    mega: "meowsticfmega",
    megaName: "Meowstic-F-Mega",
    megaType: ["Psychic", "Fairy"],
    megaStats: { hp: 74, atk: 93, def: 96, spa: 133, spd: 96, spe: 74 },
    megaAbility: { 0: "Fairy Aura" },
    megaStone: "Meowsticite",
    megaCreator: "Mossy Sandwich",
    movepoolAdditions: ["drainingkiss", "moonblast"]
  },
  dragalge: {
    inherit: true,
    mega: "dragalgemega",
    megaName: "Dragalge-Mega",
    megaStats: { hp: 65, atk: 95, def: 90, spa: 147, spd: 153, spe: 44 },
    megaAbility: { 0: "Acidic Surge" },
    megaStone: "Dragalgite",
    megaCreator: "BlueRay",
    movepoolAdditions: ["acidspray", "gastroacid", "roost", "terrainpulse"]
  },
  tyrantrum: {
    inherit: true,
    mega: "tyrantrummega",
    megaName: "Tyrantrum-Mega",
    megaStats: { hp: 82, atk: 159, def: 139, spa: 69, spd: 89, spe: 83 },
    megaAbility: { 0: "Prehistoric Rage" },
    megaStone: "Tyranite",
    megaCreator: "Mossy Sandwich"
  },
  aurorus: {
    inherit: true,
    mega: "aurorusmega",
    megaName: "Aurorus-Mega",
    megaType: ["Electric", "Ice"],
    megaStats: { hp: 123, atk: 77, def: 102, spa: 131, spd: 122, spe: 66 },
    megaAbility: { 0: "Diamond Dust" },
    megaStone: "Aurorite",
    megaCreator: "Hematite",
    movepoolAdditions: ["paraboliccharge", "voltswitch"]
  },
  hawlucha: {
    inherit: true,
    mega: "hawluchamega",
    megaName: "Hawlucha-Mega",
    megaStats: { hp: 78, atk: 112, def: 110, spa: 84, spd: 88, spe: 128 },
    megaAbility: { 0: "Masquerade" },
    megaStone: "Hawluchanite",
    megaCreator: "BlueRay",
    movepoolAdditions: ["partingshot", "stormthrow"]
  },
  goodra: {
    inherit: true,
    mega: "goodramega",
    megaName: "Goodra-Mega",
    megaType: ["Dragon", "Water"],
    megaStats: { hp: 90, atk: 100, def: 110, spa: 145, spd: 150, spe: 105 },
    megaAbility: { 0: "Gooey" },
    megaStone: "Goodranite",
    megaCreator: "MegaFlareon"
  },
  trevenant: {
    inherit: true,
    mega: "trevenantmega",
    megaName: "Trevenant-Mega",
    megaStats: { hp: 85, atk: 110, def: 76, spa: 104, spd: 122, spe: 77 },
    megaAbility: { 0: "Triage" },
    megaStone: "Trevenite",
    megaCreator: "IsoCon"
  },
  gourgeist: {
    inherit: true,
    mega: "gourgeistmega",
    megaName: "Gourgeist-Mega",
    megaStats: { hp: 65, atk: 98, def: 137, spa: 115, spd: 95, spe: 84 },
    megaAbility: { 0: "Weak Armor" },
    megaStone: "Gourgeite",
    megaCreator: "inkbug",
    movepoolAdditions: ["bodypress", "flareblitz", "partingshot"]
  },
  gourgeistsmall: {
    inherit: true,
    mega: "gourgeistsmallmega",
    megaName: "Gourgeist-Small-Mega",
    megaStats: { hp: 55, atk: 85, def: 122, spa: 85, spd: 140, spe: 107 },
    megaAbility: { 0: "Prankster" },
    megaStone: "Gourgeite",
    megaCreator: "inkbug"
  },
  gourgeistlarge: {
    inherit: true,
    mega: "gourgeistlargemega",
    megaName: "Gourgeist-Large-Mega",
    megaStats: { hp: 75, atk: 100, def: 125, spa: 100, spd: 125, spe: 69 },
    megaAbility: { 0: "Flash Fire" },
    megaStone: "Gourgeite",
    megaCreator: "inkbug"
  },
  gourgeistsuper: {
    inherit: true,
    mega: "gourgeistsupermega",
    megaName: "Gourgeist-Super-Mega",
    megaType: ["Fire", "Grass"],
    megaStats: { hp: 85, atk: 145, def: 147, spa: 68, spd: 95, spe: 54 },
    megaAbility: { 0: "Stamina" },
    megaStone: "Gourgeite",
    megaCreator: "inkbug"
  },
  noivern: {
    inherit: true,
    mega: "noivernmega",
    megaName: "Noivern-Mega",
    megaType: ["Psychic", "Dragon"],
    megaStats: { hp: 85, atk: 70, def: 100, spa: 97, spd: 100, spe: 183 },
    megaAbility: { 0: "Trace" },
    megaStone: "Noivernite",
    megaCreator: "BitBitio",
    movepoolAdditions: ["psyshock"]
  },
  decidueye: {
    inherit: true,
    mega: "decidueyemega",
    megaName: "Decidueye-Mega",
    megaStats: { hp: 78, atk: 127, def: 95, spa: 120, spd: 120, spe: 90 },
    megaAbility: { 0: "Illusion" },
    megaStone: "Deciduite",
    megaCreator: "inkbug"
  },
  incineroar: {
    inherit: true,
    mega: "incineroarmega",
    megaName: "Incineroar-Mega",
    genderRatio: { M: 0.875, F: 0.125 },
    megaStats: { hp: 95, atk: 130, def: 125, spa: 110, spd: 105, spe: 65 },
    megaAbility: { 0: "Cheap Heat" },
    megaHeightm: 2.1,
    megaWeightkg: 166,
    requirdItem: "Incinerite",
    megaCreator: "Vipotis",
    movepoolAdditions: ["focusenergy", "nightslash", "stormthrow"]
  },
  primarina: {
    inherit: true,
    mega: "primarinamega",
    megaName: "Primarina-Mega",
    megaStats: { hp: 80, atk: 110, def: 96, spa: 126, spd: 133, spe: 85 },
    megaAbility: { 0: "Staccato" },
    megaStone: "Primarinite",
    megaCreator: "Rosiario",
    movepoolAdditions: ["purify"]
  },
  toucannon: {
    inherit: true,
    mega: "toucannonmega",
    megaName: "Toucannon-Mega",
    megaType: ["Grass", "Flying"],
    megaStats: { hp: 80, atk: 75, def: 86, spa: 125, spd: 106, spe: 118 },
    megaAbility: { 0: "Ignite" },
    megaStone: "Toucannonite",
    megaCreator: "Mateeus",
    movepoolAdditions: ["appleacid", "hurricane"]
  },
  gumshoos: {
    inherit: true,
    mega: "gumshoosmega",
    megaName: "Gumshoos-Mega",
    megaStats: { hp: 88, atk: 130, def: 70, spa: 55, spd: 70, spe: 105 },
    megaAbility: { 0: "Hustle" },
    megaStone: "Gumshoosite",
    megaCreator: "MegaFlareon",
    movepoolAdditions: ["coil", "drainpunch"]
  },
  vikavolt: {
    inherit: true,
    mega: "vikavoltmega",
    megaName: "Vikavolt-Mega",
    megaStats: { hp: 77, atk: 70, def: 110, spa: 145, spd: 110, spe: 88 },
    megaAbility: { 0: "Download" },
    megaStone: "Vikavoltite",
    megaCreator: "kakaks",
    movepoolAdditions: ["thundercage", "uturn"]
  },
  lycanroc: {
    inherit: true,
    mega: "lycanrocmega",
    megaName: "Lycanroc-Mega",
    megaType: ["Rock", "Normal"],
    megaStats: { hp: 75, atk: 130, def: 115, spa: 75, spd: 75, spe: 117 },
    megaAbility: { 0: "Down-to-Earth" },
    megaStone: "Lycanite",
    megaCreator: "Hematite",
    movepoolAdditions: ["extremespeed", "spikes"]
  },
  lycanrocmidnight: {
    inherit: true,
    mega: "lycanrocmidnightmega",
    megaName: "Lycanroc-Midnight-Mega",
    megaType: ["Rock", "Dark"],
    megaStats: { hp: 85, atk: 155, def: 115, spa: 65, spd: 75, spe: 92 },
    megaAbility: { 0: "Reckless" },
    megaStone: "Lycanite",
    megaCreator: "MegaFlareon",
    movepoolAdditions: ["headsmash"]
  },
  lycanrocdusk: {
    inherit: true,
    mega: "lycanrocduskmega",
    megaName: "Lycanroc-Dusk-Mega",
    megaType: ["Rock", "Fighting"],
    megaStats: { hp: 75, atk: 150, def: 83, spa: 75, spd: 83, spe: 121 },
    megaAbility: { 0: "Mold Breaker" },
    megaStone: "Lycanite",
    megaCreator: "Cheezy"
  },
  // not going to reformat Mega Wishiwashi because it effectively has more than one Mega to a single base form, which would cause problems
  wishiwashi: {
    inherit: true,
    otherFormes: [
      "Wishiwashi-School",
      "Wishiwashi-Mega",
      "Wishiwashi-Mega-1",
      "Wishiwashi-Mega-2",
      "Wishiwashi-Mega-3",
      "Wishiwashi-Mega-4",
      "Wishiwashi-Mega-School"
    ],
    formeOrder: [
      "Wishiwashi",
      "Wishiwashi-School",
      "Wishiwashi-Mega",
      "Wishiwashi-Mega-1",
      "Wishiwashi-Mega-2",
      "Wishiwashi-Mega-3",
      "Wishiwashi-Mega-4",
      "Wishiwashi-Mega-School"
    ],
    movepoolAdditions: ["wish"]
  },
  wishiwashimega: {
    num: 746,
    name: "Wishiwashi-Mega",
    baseSpecies: "Wishiwashi",
    forme: "Mega",
    types: ["Water"],
    baseStats: { hp: 45, atk: 40, def: 40, spa: 45, spd: 45, spe: 60 },
    abilities: { 0: "SOS" },
    heightm: 0.2,
    weightkg: 0.3,
    color: "Blue",
    eggGroups: ["Water 2"],
    requiredItem: "Wishiwashinite",
    battleOnly: "Wishiwashi",
    creator: "inkbug"
  },
  wishiwashimega1: {
    num: 746,
    name: "Wishiwashi-Mega-1",
    baseSpecies: "Wishiwashi",
    forme: "Mega-1",
    types: ["Water"],
    baseStats: { hp: 55, atk: 60, def: 65, spa: 65, spd: 70, spe: 49 },
    abilities: { 0: "SOS" },
    heightm: 1.8,
    weightkg: 16,
    color: "Blue",
    eggGroups: ["Water 2"],
    requiredItem: "Wishiwashinite",
    battleOnly: "Wishiwashi",
    creator: "inkbug"
  },
  wishiwashimega2: {
    num: 746,
    name: "Wishiwashi-Mega-2",
    baseSpecies: "Wishiwashi",
    forme: "Mega-2",
    types: ["Water"],
    baseStats: { hp: 65, atk: 80, def: 90, spa: 85, spd: 95, spe: 38 },
    abilities: { 0: "SOS" },
    heightm: 3.4,
    weightkg: 31.7,
    color: "Blue",
    eggGroups: ["Water 2"],
    requiredItem: "Wishiwashinite",
    battleOnly: "Wishiwashi",
    creator: "inkbug"
  },
  wishiwashimega3: {
    num: 746,
    name: "Wishiwashi-Mega-3",
    baseSpecies: "Wishiwashi",
    forme: "Mega-3",
    types: ["Water"],
    baseStats: { hp: 75, atk: 100, def: 115, spa: 105, spd: 120, spe: 27 },
    abilities: { 0: "SOS" },
    heightm: 5,
    weightkg: 47.4,
    color: "Blue",
    eggGroups: ["Water 2"],
    requiredItem: "Wishiwashinite",
    battleOnly: "Wishiwashi",
    creator: "inkbug"
  },
  wishiwashimega4: {
    num: 746,
    name: "Wishiwashi-Mega-4",
    baseSpecies: "Wishiwashi",
    forme: "Mega-4",
    types: ["Water"],
    baseStats: { hp: 85, atk: 120, def: 140, spa: 125, spd: 145, spe: 16 },
    abilities: { 0: "SOS" },
    heightm: 6.6,
    weightkg: 63.1,
    color: "Blue",
    eggGroups: ["Water 2"],
    requiredItem: "Wishiwashinite",
    battleOnly: "Wishiwashi",
    creator: "inkbug"
  },
  wishiwashimegaschool: {
    num: 746,
    name: "Wishiwashi-Mega-School",
    baseSpecies: "Wishiwashi",
    forme: "Mega-School",
    types: ["Water"],
    baseStats: { hp: 95, atk: 140, def: 165, spa: 145, spd: 170, spe: 5 },
    abilities: { 0: "SOS" },
    heightm: 8.2,
    weightkg: 78.6,
    color: "Blue",
    eggGroups: ["Water 2"],
    requiredItem: "Wishiwashinite",
    battleOnly: "Wishiwashi",
    creator: "inkbug"
  },
  mudsdale: {
    inherit: true,
    mega: "mudsdalemega",
    megaName: "Mudsdale-Mega",
    megaType: ["Ground", "Fighting"],
    megaStats: { hp: 100, atk: 150, def: 110, spa: 80, spd: 110, spe: 50 },
    megaAbility: { 0: "Inner Fortitude" },
    megaStone: "Mudsdalite",
    megaCreator: "BitBitio",
    movepoolAdditions: ["bulkup", "painsplit", "wideguard"]
  },
  araquanid: {
    inherit: true,
    mega: "araquanidmega",
    megaName: "Araquanid-Mega",
    megaStats: { hp: 68, atk: 70, def: 147, spa: 50, spd: 177, spe: 42 },
    megaAbility: { 0: "Body of Water" },
    megaStone: "Araquanite",
    megaCreator: "Hematite",
    movepoolAdditions: ["lifedew"]
  },
  lurantis: {
    inherit: true,
    mega: "lurantismega",
    megaName: "Lurantis-Mega",
    megaType: ["Grass", "Fairy"],
    megaStats: { hp: 70, atk: 125, def: 110, spa: 100, spd: 110, spe: 65 },
    megaAbility: { 0: "Elegance" },
    megaStone: "Lurantisite",
    megaCreator: "BitBitio",
    movepoolAdditions: ["moonblast", "moonlight", "playrough", "silverwind"]
  },
  tsareena: {
    inherit: true,
    mega: "tsareenamega",
    megaName: "Tsareena-Mega",
    megaType: ["Grass", "Fighting"],
    megaStats: { hp: 72, atk: 140, def: 120, spa: 60, spd: 120, spe: 98 },
    megaAbility: { 0: "Queen's Gambit" },
    megaStone: "Tsareenite",
    megaCreator: "Bloopyghost"
  },
  // also not reformatting this one because I think that would cause problems
  mimikyu: {
    inherit: true,
    otherFormes: ["Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem", "Mimikyu-Mega", "Mimikyu-Busted-Mega"],
    formeOrder: ["Mimikyu", "Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem", "Mimikyu-Mega", "Mimikyu-Busted-Mega"],
    movepoolAdditions: ["firstimpression", "strengthsap", "uturn"]
  },
  mimikyumega: {
    num: 778,
    name: "Mimikyu-Mega",
    baseSpecies: "Mimikyu",
    forme: "Mega",
    types: ["Ghost", "Fairy"],
    baseStats: { hp: 55, atk: 90, def: 145, spa: 70, spd: 150, spe: 66 },
    abilities: { 0: "Magic Guard" },
    heightm: 0.2,
    weightkg: 0.7,
    color: "Yellow",
    eggGroups: ["Amorphous"],
    requiredItem: "Mimikyunite",
    battleOnly: "Mimikyu",
    creator: "zxgzxg"
  },
  mimikyubustedmega: {
    num: 778,
    name: "Mimikyu-Busted-Mega",
    baseSpecies: "Mimikyu",
    forme: "Mega-Busted",
    types: ["Ghost", "Bug"],
    baseStats: { hp: 55, atk: 130, def: 80, spa: 80, spd: 105, spe: 126 },
    abilities: { 0: "Spectral Anger" },
    heightm: 0.2,
    weightkg: 0.7,
    color: "Yellow",
    eggGroups: ["Amorphous"],
    requiredItem: "Mimikyunite",
    battleOnly: "Mimikyu",
    creator: "zxgzxg"
  },
  dhelmise: {
    inherit: true,
    mega: "dhelmisemega",
    megaName: "Dhelmise-Mega",
    megaType: ["Ghost", "Steel"],
    megaStats: { hp: 70, atk: 151, def: 115, spa: 116, spd: 115, spe: 50 },
    megaAbility: { 0: "Primordial Sea" },
    megaStone: "Dhelmite",
    megaCreator: "Mossy Sandwich",
    movepoolAdditions: ["flipturn"]
  },
  kommoo: {
    inherit: true,
    mega: "kommoomega",
    megaName: "Kommo-o-Mega",
    megaStats: { hp: 75, atk: 130, def: 145, spa: 150, spd: 115, spe: 85 },
    megaAbility: { 0: "Weak Armor" },
    megaStone: "Kommonite",
    megaCreator: "MegaFlareon"
  },
  guzzlord: {
    inherit: true,
    mega: "guzzlordmega",
    megaName: "Guzzlord-Mega",
    megaStats: { hp: 223, atk: 149, def: 61, spa: 101, spd: 83, spe: 53 },
    megaAbility: { 0: "Guts" },
    megaStone: "Guzzlordite",
    megaCreator: "BlueRay",
    movepoolAdditions: ["gunkshot", "spikes"]
  },
  rillaboom: {
    inherit: true,
    mega: "rillaboommega",
    megaName: "Rillaboom-Mega",
    megaStats: { hp: 100, atk: 135, def: 100, spa: 100, spd: 100, spe: 95 },
    megaAbility: { 0: "Arena Rock" },
    megaStone: "Rillaboomite",
    megaCreator: "Hematite"
  },
  cinderace: {
    inherit: true,
    mega: "cinderacemega",
    megaName: "Cinderace-Mega",
    megaStats: { hp: 80, atk: 131, def: 85, spa: 125, spd: 110, spe: 99 },
    megaAbility: { 0: "Sharp Striker" },
    megaStone: "Cinderite",
    megaCreator: "Mateeus"
  },
  inteleon: {
    inherit: true,
    mega: "inteleonmega",
    megaName: "Inteleon-Mega",
    megaType: ["Water", "Bug"],
    megaStats: { hp: 70, atk: 145, def: 102, spa: 85, spd: 102, spe: 126 },
    megaAbility: { 0: "Illusion" },
    megaStone: "Inteleonite",
    megaCreator: "inkbug",
    movepoolAdditions: ["encore", "firstimpression", "pursuit"]
  },
  corviknight: {
    inherit: true,
    mega: "corviknightmega",
    megaName: "Corviknight-Mega",
    megaStats: { hp: 98, atk: 117, def: 120, spa: 78, spd: 105, spe: 77 },
    megaAbility: { 0: "Intimidate" },
    megaStone: "Corviknite",
    megaCreator: "IsoCon"
  },
  orbeetle: {
    inherit: true,
    mega: "orbeetlemega",
    megaName: "Orbeetle-Mega",
    megaType: ["Bug", "Psychic"],
    megaStats: { hp: 60, atk: 45, def: 130, spa: 140, spd: 140, spe: 90 },
    megaAbility: { 0: "Graviton" },
    megaStone: "Orbeetlite",
    megaCreator: "Scoopapa",
    movepoolAdditions: ["focusblast", "teleport"]
  },
  thievul: {
    inherit: true,
    mega: "thievulmega",
    megaName: "Thievul-Mega",
    megaStats: { hp: 70, atk: 58, def: 68, spa: 137, spd: 115, spe: 107 },
    megaAbility: { 0: "Sleight of Hand" },
    megaStone: "Thievulite",
    megaCreator: "MegaFlareon",
    movepoolAdditions: ["spiritbreak"]
  },
  boltund: {
    inherit: true,
    mega: "boltundmega",
    megaName: "Boltund-Mega",
    megaType: ["Electric", "Fairy"],
    megaStats: { hp: 69, atk: 140, def: 60, spa: 115, spd: 60, spe: 146 },
    megaAbility: { 0: "Adrenaline" },
    megaStone: "Boltundite",
    megaCreator: "kakaks",
    movepoolAdditions: ["dazzlinggleam", "hiddenpower"]
  },
  toxtricity: {
    inherit: true,
    mega: "toxtricitymega",
    megaName: "Toxtricity-Mega",
    megaStats: { hp: 75, atk: 128, def: 80, spa: 144, spd: 80, spe: 95 },
    megaAbility: { 0: "Acid Rock" },
    megaStone: "Toxtricitite",
    megaCreator: "DrPumpkinz",
    movepoolAdditions: ["hiddenpower"]
  },
  toxtricitylowkey: {
    inherit: true,
    mega: "toxtricitylowkeymega",
    megaName: "Toxtricity-Low-Key-Mega",
    megaStats: { hp: 75, atk: 98, def: 100, spa: 114, spd: 140, spe: 75 },
    megaAbility: { 0: "Acid Rock" },
    megaStone: "Toxtricitite",
    megaCreator: "DrPumpkinz",
    movepoolAdditions: ["hiddenpower"]
  },
  grapploct: {
    inherit: true,
    mega: "grapploctmega",
    megaName: "Grapploct-Mega",
    megaType: ["Fighting", "Water"],
    megaStats: { hp: 80, atk: 148, def: 100, spa: 70, spd: 130, spe: 52 },
    megaAbility: { 0: "Mimicry" },
    megaStone: "Grapplite",
    megaCreator: "Hematite and KeroseneZanchu",
    movepoolAdditions: ["flipturn", "gunkshot", "stormthrow"]
  },
  obstagoon: {
    inherit: true,
    mega: "obstagoonmega",
    megaName: "Obstagoon-Mega",
    megaStats: { hp: 93, atk: 131, def: 111, spa: 63, spd: 111, spe: 111 },
    megaAbility: { 0: "Rebel" },
    megaStone: "Obstagoonite",
    megaCreator: "Paulluxx",
    movepoolAdditions: ["foulplay", "frustration", "return", "stealthrock", "toxic", "wish"]
  },
  sirfetchd: {
    inherit: true,
    mega: "sirfetchdmega",
    megaName: "Sirfetch\u2019d-Mega",
    megaType: ["Fighting", "Fairy"],
    megaStats: { hp: 62, atk: 155, def: 125, spa: 68, spd: 102, spe: 95 },
    megaAbility: { 0: "Grassy Surge" },
    megaStone: "Sirfetch\u2019dite",
    megaCreator: "Paulluxx and BlueRay",
    movepoolAdditions: ["playrough", "roost", "toxic"]
  },
  // not going to reformat this one either
  falinks: {
    inherit: true,
    otherFormes: ["Falinks-Mega-Legion", "Falinks-Mega-Combat"],
    formeOrder: ["Falinks", "Falinks-Mega-Legion", "Falinks-Mega-Combat"],
    movepoolAdditions: ["aurasphere", "flashcannon", "kingsshield", "thunder"]
  },
  falinksmegalegion: {
    num: 870,
    name: "Falinks-Mega-Legion",
    baseSpecies: "Falinks",
    forme: "Mega-Legion",
    types: ["Fighting", "Steel"],
    gender: "N",
    baseStats: { hp: 65, atk: 66, def: 131, spa: 66, spd: 131, spe: 111 },
    abilities: { 0: "Stance Change" },
    heightm: 3,
    weightkg: 62,
    color: "Yellow",
    eggGroups: ["Fairy", "Mineral"],
    requiredItem: "Falinksite",
    battleOnly: "Falinks",
    creator: "ausma"
  },
  falinksmegacombat: {
    num: 870,
    name: "Falinks-Mega-Combat",
    baseSpecies: "Falinks",
    forme: "Mega-Combat",
    types: ["Fighting", "Steel"],
    gender: "N",
    baseStats: { hp: 65, atk: 160, def: 70, spa: 160, spd: 70, spe: 45 },
    abilities: { 0: "Stance Change" },
    heightm: 3,
    weightkg: 62,
    color: "Yellow",
    eggGroups: ["Fairy", "Mineral"],
    requiredItem: "Falinksite",
    battleOnly: "Falinks",
    creator: "ausma"
  },
  dragapult: {
    inherit: true,
    mega: "dragapultmega",
    megaName: "Dragapult-Mega",
    megaStats: { hp: 88, atk: 144, def: 93, spa: 130, spd: 93, spe: 152 },
    megaAbility: { 0: "Trace" },
    megaStone: "Dragapultite",
    megaCreator: "Mateeus"
  },
  // Kalos content
  // slate 1
  gogoat: {
    inherit: true,
    mega: "gogoatmega",
    megaName: "Gogoat-Mega",
    megaAbility: { 0: "Speed Boost" },
    megaStats: { hp: 123, atk: 135, def: 77, spa: 142, spd: 106, spe: 48 },
    megaStone: "Gogoatite",
    megaCreator: "ausma"
  },
  clawitzer: {
    inherit: true,
    mega: "clawitzermega",
    megaName: "Clawitzer-Mega",
    megaType: ["Water", "Poison"],
    megaAbility: { 0: "Download" },
    megaStats: { hp: 71, atk: 92, def: 110, spa: 127, spd: 111, spe: 89 },
    megaStone: "Clawitzerite",
    movepoolAdditions: ["dragondance", "shellsidearm", "stoneedge"],
    megaCreator: "NANI?!"
  },
  // slate 2
  wormadamsandy: {
    inherit: true,
    mega: "wormadamsandymega",
    megaName: "Wormadam-Sandy-Mega",
    megaAbility: { 0: "Poison Heal" },
    megaStats: { hp: 60, atk: 91, def: 155, spa: 74, spd: 105, spe: 39 },
    megaStone: "Wormadamite",
    megaCreator: "Paulluxx and IsoCon"
  },
  drifblim: {
    inherit: true,
    mega: "drifblimmega",
    megaName: "Drifblim-Mega",
    megaAbility: { 0: "Neutralizing Gas" },
    megaStats: { hp: 150, atk: 80, def: 44, spa: 145, spd: 89, spe: 90 },
    megaStone: "Drifblimite",
    megaCreator: "BlueRay"
  },
  heliolisk: {
    inherit: true,
    mega: "helioliskmega",
    megaName: "Heliolisk-Mega",
    megaType: ["Electric", "Dragon"],
    megaAbility: { 0: "Solar Power" },
    megaStats: { hp: 62, atk: 85, def: 62, spa: 129, spd: 114, spe: 129 },
    megaStone: "Heliolite",
    movepoolAdditions: ["dragontail"],
    megaCreator: "lydian"
  },
  // slate 3
  escavalier: {
    inherit: true,
    mega: "escavaliermega",
    megaName: "Escavalier-Mega",
    megaAbility: { 0: "Analytic" },
    megaStats: { hp: 70, atk: 155, def: 125, spa: 80, spd: 125, spe: 40 },
    megaStone: "Escavalite",
    movepoolAdditions: ["leechlife"],
    megaCreator: "Bloopyghost"
  },
  haxorus: {
    inherit: true,
    mega: "haxorusmega",
    megaName: "Haxorus-Mega",
    megaAbility: { 0: "Technician" },
    megaStats: { hp: 76, atk: 157, def: 130, spa: 90, spd: 90, spe: 97 },
    megaStone: "Haxorite",
    megaCreator: "BlueRay"
  },
  mienshao: {
    inherit: true,
    mega: "mienshaomega",
    megaName: "Mienshao-Mega",
    megaType: ["Fighting", "Water"],
    megaAbility: { 0: "Regenerator" },
    megaStats: { hp: 65, atk: 140, def: 105, spa: 100, spd: 85, spe: 115 },
    megaStone: "Mienshaonite",
    movepoolAdditions: ["flipturn", "scald", "whirlpool"],
    megaCreator: "Paulluxx and Sticky Fingaa"
  },
  // slate 4
  espeon: {
    inherit: true,
    mega: "espeonmega",
    megaName: "Espeon-Mega",
    megaAbility: { 0: "Mana Gate" },
    megaStats: { hp: 65, atk: 90, def: 85, spa: 160, spd: 105, spe: 120 },
    megaStone: "Espeonite",
    movepoolAdditions: ["speedswap"],
    megaCreator: "XtheGAMEmaster"
  },
  umbreon: {
    inherit: true,
    mega: "umbreonmega",
    megaName: "Umbreon-Mega",
    megaAbility: { 0: "Partial Eclipse" },
    megaStats: { hp: 95, atk: 115, def: 115, spa: 60, spd: 155, spe: 85 },
    megaStone: "Umbreonite",
    movepoolAdditions: ["mirrorcoat"],
    megaCreator: "Albatross and Paulluxx"
  },
  sylveon: {
    inherit: true,
    mega: "sylveonmega",
    megaName: "Sylveon-Mega",
    megaAbility: { 0: "Tough Claws" },
    megaStats: { hp: 95, atk: 145, def: 65, spa: 140, spd: 120, spe: 60 },
    megaStone: "Sylveonite",
    movepoolAdditions: ["grassknot", "stompingtantrum"],
    megaCreator: "Snowdrops and zxgzxg"
  },
  // slate 5
  zangoose: {
    inherit: true,
    mega: "zangoosemega",
    megaName: "Zangoose-Mega",
    megaAbility: { 0: "Magic Guard" },
    megaStats: { hp: 73, atk: 145, def: 90, spa: 60, spd: 90, spe: 100 },
    megaStone: "Zangoosite",
    movepoolAdditions: ["recover"],
    megaCreator: "Paulluxx and Sticky Fingaa"
  },
  seviper: {
    inherit: true,
    mega: "sevipermega",
    megaName: "Seviper-Mega",
    megaType: ["Poison", "Dark"],
    megaAbility: { 0: "Dry Skin" },
    megaStats: { hp: 73, atk: 131, def: 78, spa: 100, spd: 78, spe: 98 },
    megaStone: "Seviperite",
    movepoolAdditions: ["gunkshot", "powertrip"],
    megaCreator: "BlueRay"
  },
  solrock: {
    inherit: true,
    mega: "solrockmega",
    megaName: "Solrock-Mega",
    megaType: ["Rock", "Fire"],
    megaAbility: { 0: "Levitate" },
    megaStats: { hp: 90, atk: 125, def: 95, spa: 55, spd: 90, spe: 105 },
    megaStone: "Solrockite",
    movepoolAdditions: ["corrosivegas", "sacredfire", "uturn"],
    megaCreator: "Paulluxx and XtheGAMEmaster"
  },
  // slate 6
  quagsire: {
    inherit: true,
    mega: "quagsiremega",
    megaName: "Quagsire-Mega",
    megaAbility: { 0: "Marshland Lord" },
    megaStats: { hp: 95, atk: 110, def: 125, spa: 100, spd: 65, spe: 35 },
    megaStone: "Quagsite",
    movepoolAdditions: ["flipturn"],
    megaCreator: "Sticky Fingaaa and IsoCon"
  },
  heatmor: {
    inherit: true,
    mega: "heatmormega",
    megaName: "Heatmor-Mega",
    megaType: ["Fire", "Ground"],
    megaAbility: { 0: "Stakeout" },
    megaStats: { hp: 85, atk: 122, def: 76, spa: 105, spd: 106, spe: 90 },
    megaStone: "Heatmorite",
    movepoolAdditions: ["powerwhip", "yawn"],
    megaCreator: "War Incarnate and NANI?!"
  },
  pangoro: {
    inherit: true,
    mega: "pangoromega",
    megaName: "Pangoro-Mega",
    megaAbility: { 0: "Bad Influence" },
    megaStats: { hp: 95, atk: 134, def: 112, spa: 74, spd: 101, spe: 69 },
    megaStone: "Pangoronite",
    megaCreator: "jazzmat"
  },
  // slate 7
  jumpluff: {
    inherit: true,
    mega: "jumpluffmega",
    megaName: "Jumpluff-Mega",
    megaAbility: { 0: "Regenerator" },
    megaStats: { hp: 75, atk: 60, def: 100, spa: 70, spd: 125, spe: 135 },
    megaStone: "Jumpluffite",
    movepoolAdditions: ["wish"],
    megaCreator: "DrPumpkinz and Paulluxx"
  },
  rhyperior: {
    inherit: true,
    mega: "rhyperiormega",
    megaName: "Rhyperior-Mega",
    megaAbility: { 0: "Sap Sipper" },
    megaStats: { hp: 115, atk: 150, def: 160, spa: 65, spd: 85, spe: 60 },
    megaStone: "Rhyperiorite",
    megaCreator: "BlueRay"
  },
  florges: {
    inherit: true,
    mega: "florgesmega",
    megaName: "Florges-Mega",
    megaAbility: { 0: "Soul-Heart" },
    megaStats: { hp: 78, atk: 95, def: 78, spa: 132, spd: 184, spe: 85 },
    megaStone: "Florgesite",
    megaCreator: "DrPumpkinz"
  },
  // slate 8
  skarmory: {
    inherit: true,
    mega: "skarmorymega",
    megaName: "Skarmory-Mega",
    megaAbility: { 0: "Poison Point" },
    megaStats: { hp: 65, atk: 95, def: 158, spa: 40, spd: 105, spe: 102 },
    megaStone: "Skarmorite",
    megaCreator: "EeveeGirl1380"
  },
  druddigon: {
    inherit: true,
    mega: "druddigonmega",
    megaName: "Druddigon-Mega",
    megaAbility: { 0: "Petrification" },
    megaStats: { hp: 77, atk: 165, def: 120, spa: 60, spd: 115, spe: 48 },
    megaStone: "Druddigonite",
    megaCreator: "Sticky Fingaaa and Paulluxx",
    movepoolAdditions: ["morningsun", "rockblast", "spikes"]
  },
  chesnaught: {
    inherit: true,
    mega: "chesnaughtmega",
    megaName: "Chesnaught-Mega",
    megaAbility: { 0: "Flash Fire" },
    megaStats: { hp: 88, atk: 137, def: 142, spa: 74, spd: 95, spe: 94 },
    megaStone: "Chesnite",
    megaCreator: "BlueRay",
    movepoolAdditions: ["bodypress", "icehammer"]
  },
  // slate 9
  skuntank: {
    inherit: true,
    mega: "skuntankmega",
    megaName: "Skuntank-Mega",
    megaAbility: { 0: "Repulsive" },
    megaStats: { hp: 103, atk: 113, def: 107, spa: 86, spd: 86, spe: 84 },
    megaStone: "Skuntankite",
    megaCreator: "Hematite"
  },
  emolga: {
    inherit: true,
    mega: "emolgamega",
    megaName: "Emolga-Mega",
    megaAbility: { 0: "Technician" },
    megaStats: { hp: 55, atk: 120, def: 60, spa: 95, spd: 60, spe: 138 },
    megaStone: "Emolganite",
    megaCreator: "BlueRay",
    movepoolAdditions: ["lowkick"]
  },
  avalugg: {
    inherit: true,
    mega: "avaluggmega",
    megaName: "Avalugg-Mega",
    megaAbility: { 0: "Parental Bond" },
    megaStats: { hp: 95, atk: 137, def: 234, spa: 54, spd: 61, spe: 33 },
    megaStone: "Avaluggite",
    megaCreator: "okispokis",
    movepoolAdditions: ["iciclecrash"]
  },
  // slate 10
  lapras: {
    inherit: true,
    mega: "laprasmega",
    megaName: "Lapras-Mega",
    megaAbility: { 0: "Misty Surge" },
    megaStats: { hp: 130, atk: 95, def: 90, spa: 135, spd: 125, spe: 60 },
    megaStone: "Laprasite",
    megaCreator: "ItzaDelta and Vipotis",
    movepoolAdditions: ["wish"]
  },
  pyroar: {
    inherit: true,
    mega: "pyroarmega",
    megaName: "Pyroar-Mega",
    megaAbility: { 0: "Grassy Surge" },
    megaStats: { hp: 86, atk: 68, def: 92, spa: 149, spd: 86, spe: 126 },
    megaStone: "Pyroarite",
    megaCreator: "The Damned",
    movepoolAdditions: ["energyball", "grassyterrain", "morningsun", "scorchingsands"]
  },
  carbink: {
    inherit: true,
    mega: "carbinkmega",
    megaName: "Carbink-Mega",
    megaAbility: { 0: "Mirror Armor" },
    megaStats: { hp: 50, atk: 60, def: 155, spa: 120, spd: 155, spe: 60 },
    megaStone: "Carbinite",
    megaCreator: "okispokis"
  },
  hoopa: {
    inherit: true,
    mega: "hoopamega",
    megaName: "Hoopa-Mega",
    megaAbility: { 0: "Hyperspace Mayhem" },
    megaStats: { hp: 80, atk: 150, def: 70, spa: 160, spd: 160, spe: 80 },
    megaStone: "Hoopanite",
    megaCreator: "DrPumpkinz"
  }
};
//# sourceMappingURL=pokedex.js.map
