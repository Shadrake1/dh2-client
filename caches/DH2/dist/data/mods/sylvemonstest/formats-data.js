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
var formats_data_exports = {};
__export(formats_data_exports, {
  FormatsData: () => FormatsData
});
module.exports = __toCommonJS(formats_data_exports);
const FormatsData = {
  /* Commenting these out because they are not functional in the current version
  sawsbuckautumn: {
  	randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
  	randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
  	tier: "RU",
  	doublesTier: "DUU",
  },
  sawsbuckwinter: {
  	randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
  	randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
  	tier: "RU",
  	doublesTier: "DUU",
  },
  sawsbucksummer: {
  	randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
  	randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
  	tier: "RU",
  	doublesTier: "DUU",
  },
  sawsbuckspring: {
  	randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
  	randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
  	tier: "RU",
  	doublesTier: "DUU",
  },
  deerlingautumn: {
  	randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
  	randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
  	tier: "LC",
  	doublesTier: "DUU",
  },
  deerlingwinter: {
  	randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
  	randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
  	tier: "LC",
  	doublesTier: "DUU",
  },
  deerlingsummer: {
  	randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
  	randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
  	tier: "LC",
  	doublesTier: "DUU",
  },
  deerlingspring: {
  	randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
  	randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
  	tier: "LC",
  	doublesTier: "DUU",
  },
  */
  articuno: {
    randomBattleMoves: ["blizzard", "roost", "uturn", "freezedry", "hiddenpowerfire"],
    tier: "OU"
  },
  aegislash: {
    randomBattleMoves: ["kingsshield", "shadowclaw", "stalwartsword", "closecombat", "psychocut", "swordsdance", "shadowsneak"],
    tier: "OU"
  },
  aerodactylmega: {
    randomBattleMoves: ["dualwingbeat", "stoneedge", "icefang", "earthquake", "dragondance", "roost"],
    tier: "OU"
  },
  blacephalon: {
    randomBattleMoves: ["shadowball", "fireblast", "calmmind", "psychic", "hiddenpowerground", "substitute"],
    tier: "OU"
  },
  blissey: {
    randomBattleMoves: ["seismictoss", "teleport", "softboiled", "toxic", "incinerate", "thunderwave", "stealthrock"],
    tier: "OU"
  },
  chansey: {
    randomBattleMoves: ["seismictoss", "teleport", "softboiled", "aromatherapy", "toxic", "thunderwave", "incinerate"],
    tier: "OU"
  },
  charizardmegay: {
    randomBattleMoves: ["flamebullet", "fireblast", "scorchingsands", "airslash", "focusblast", "solarbeam", "roost"],
    tier: "OU"
  },
  cinderace: {
    randomBattleMoves: ["pyroball", "thunderpunch", "gunkshot", "suckerpunch", "hottag", "highjumpkick", "courtchange"],
    tier: "OU"
  },
  corviknight: {
    randomBattleMoves: ["shieldslam", "irondefense", "roost", "bodypress", "slipstream", "defog", "taunt"],
    tier: "OU"
  },
  deoxysdefense: {
    randomBattleMoves: ["sludgebomb", "knockoff", "spikes", "recover", "teleport", "toxicspikes", "taunt", "hiddenpowerfire"],
    tier: "UUBL"
  },
  dracozolt: {
    randomBattleMoves: ["boltbeak", "voltswitch", "firefang", "icepunch", "dragonfang", "earthquake", "dracometeor"],
    tier: "OU"
  },
  dragapult: {
    randomBattleMoves: ["dragondance", "dragondarts", "shadowcharge", "willowisp", "steelwing", "uturn", "fireblast"],
    tier: "OU"
  },
  emolga: {
    randomBattleMoves: ["wildcharge", "slipstream", "knockoff", "seedbomb", "dualwingbeat", "hiddenpowerice"],
    tier: "OU"
  },
  espeon: {
    randomBattleMoves: ["psychic", "psyshock", "trick", "dazzlinggleam", "aurasphere", "shadowball", "hiddenpowerfire"],
    tier: "OU"
  },
  excadrill: {
    randomBattleMoves: ["earthquake", "ironhead", "rockslide", "stealthrock", "rapidspin", "swordsdance", "mudslap"],
    tier: "OU"
  },
  ferrothorn: {
    randomBattleMoves: ["seedbomb", "gyroball", "bodypress", "stealthrock", "knockoff", "thunderwave", "spikes"],
    tier: "OU"
  },
  gallademega: {
    randomBattleMoves: ["psychocut", "closecombat", "nightslash", "stalwartsword", "swordsdance", "xscissor"],
    tier: "OU"
  },
  garchomp: {
    randomBattleMoves: ["swordsdance", "dualchop", "earthquake", "firefang", "stealthrock", "stoneedge"],
    tier: "OU"
  },
  garchompmega: {
    randomBattleMoves: ["swordsdance", "scaleshot", "earthquake", "firefang", "mudslap", "stoneedge"],
    tier: "OU"
  },
  gengar: {
    randomBattleMoves: ["hauntingscream", "sludgebomb", "focusblast", "dazzlinggleam", "nastyplot", "destinybond"],
    tier: "OU"
  },
  gliscor: {
    randomBattleMoves: ["swordsdance", "earthquake", "facade", "slipstream", "moonlight", "toxic", "taunt"],
    tier: "OU"
  },
  goodra: {
    randomBattleMoves: ["rinseoff", "sludgebomb", "incinerate", "icebeam", "dracometeor", "thunderbolt"],
    tier: "OU"
  },
  greninja: {
    randomBattleMoves: ["hydropump", "gunkshot", "icebeam", "spikes", "riverstream", "hiddenpowerfire", "grassknot"],
    tier: "OU"
  },
  heatran: {
    randomBattleMoves: ["magmastorm", "metalsound", "taunt", "toxic", "stealthrock", "earthpower"],
    tier: "OU"
  },
  hydreigon: {
    randomBattleMoves: ["nastyplot", "darkpulse", "dragonpulse", "fireblast", "roost", "flashcannon", "uturn"],
    tier: "OU"
  },
  infernape: {
    randomBattleMoves: ["nastyplot", "flamethrower", "focusblast", "grassknot", "hiddenpowerice", "uturn", "vacuumwave"],
    tier: "OU"
  },
  jirachi: {
    randomBattleMoves: ["moonblast", "uturn", "hiddenpowerfire", "wish", "protect", "doomdesire"],
    tier: "OU"
  },
  kartana: {
    randomBattleMoves: ["stalwartsword", "leafblade", "sacredsword", "swordsdance", "knockoff", "psychocut"],
    tier: "OU"
  },
  keldeo: {
    randomBattleMoves: ["hydropump", "secretsword", "icywind", "airslash", "hiddenpowerelectric", "flipturn", "taunt"],
    tier: "OU"
  },
  kommoo: {
    randomBattleMoves: ["bodypress", "irondefense", "earthquake", "stealthrock", "toxic", "dragonrage"],
    tier: "OU"
  },
  landorustherian: {
    randomBattleMoves: ["earthquake", "stoneedge", "uturn", "swordsdance", "stealthrock", "explosion"],
    tier: "OU"
  },
  lopunnymega: {
    randomBattleMoves: ["closecombat", "return", "hottag", "fakeout", "tripleaxel", "poweruppunch"],
    tier: "OU"
  },
  magearna: {
    randomBattleMoves: ["flashcannon", "fleurcannon", "icebeam", "thunderbolt", "dazzlinggleam", "aurasphere", "calmmind"],
    tier: "OU"
  },
  magnezone: {
    randomBattleMoves: ["thunderbolt", "metalsound", "hiddenpowerfire", "voltswitch", "magnetrise", "bodypress"],
    tier: "UUBL"
  },
  manaphy: {
    randomBattleMoves: ["tailglow", "surf", "moonblast", "icebeam", "psychic", "energyball"],
    tier: "OU"
  },
  mawilemega: {
    randomBattleMoves: ["suckerpunch", "swordsdance", "knockoff", "fairycharge", "firefang", "icefang"],
    tier: "OU"
  },
  melmetal: {
    randomBattleMoves: ["doubleironbash", "earthquake", "icepunch", "superpower", "thunderpunch", "acidarmor"],
    tier: "OU"
  },
  meloettapirouette: {
    randomBattleMoves: ["doublehit", "doublekick", "uturn", "knockoff", "thunderpunch", "quickattack"],
    tier: "OU"
  },
  palossand: {
    randomBattleMoves: ["shoreup", "scorchingsands", "toxic", "stealthrock", "souldrain", "irondefense"],
    tier: "OU"
  },
  parasect: {
    randomBattleMoves: ["spore", "bugbite", "shadowcharge", "synthesis", "leechseed", "shadowsneak", "swordsdance"],
    tier: "OU"
  },
  raichu: {
    randomBattleMoves: ["ionabsorb", "focusblast", "hiddenpowerice", "voltswitch", "knockoff", "surf"],
    tier: "OU"
  },
  scizormega: {
    randomBattleMoves: ["uturn", "bulletpunch", "swordsdance", "morningsun", "brickbreak", "defog"],
    tier: "OU"
  },
  serperior: {
    randomBattleMoves: ["leafstorm", "dracometeor", "hiddenpowerfire", "synthesis", "leechseed"],
    tier: "OU"
  },
  slowbro: {
    randomBattleMoves: ["scald", "slackoff", "teleport", "toxic", "incinerate", "futuresight"],
    tier: "OU"
  },
  slowbromega: {
    randomBattleMoves: ["hydropump", "teleport", "icebeam", "bodypress", "slackoff", "psyshock"],
    tier: "OU"
  },
  stakataka: {
    randomBattleMoves: ["trickroom", "stoneedge", "shadowsneak", "earthquake", "gyroball", "bodypress"],
    tier: "OU"
  },
  swampertmega: {
    randomBattleMoves: ["aquaticassault", "earthquake", "icepunch", "flipturn", "raindance", "bulkup"],
    tier: "OU"
  },
  tangrowth: {
    randomBattleMoves: ["gigadrain", "leaftornado", "hiddenpowerfire", "synthesis", "sleeppowder", "earthquake", "knockoff"],
    tier: "OU"
  },
  tapubulu: {
    randomBattleMoves: ["woodhammer", "hornleech", "fairycharge", "closecombat", "swordsdance", "stoneedge"],
    tier: "OU"
  },
  tapufini: {
    randomBattleMoves: ["rinseoff", "scald", "calmmind", "drainingkiss", "taunt", "naturesmadness"],
    tier: "OU"
  },
  tapukoko: {
    randomBattleMoves: ["thunderclap", "bravebird", "uturn", "roost", "toxic", "hiddenpowerice"],
    tier: "OU"
  },
  tapulele: {
    randomBattleMoves: ["psychic", "psyshock", "moonblast", "focusblast", "calmmind", "thunderbolt"],
    tier: "OU"
  },
  tornadustherian: {
    randomBattleMoves: ["hurricane", "sludgewave", "focusblast", "nastyplot", "uturn", "taunt"],
    tier: "OU"
  },
  toxapex: {
    randomBattleMoves: ["scald", "recover", "toxicspikes", "knockoff", "haze", "banefulbunker"],
    tier: "OU"
  },
  tyranitar: {
    randomBattleMoves: ["crunch", "pursuit", "stoneedge", "earthquake", "stealthrock", "incinerate"],
    tier: "OU"
  },
  tyranitarmega: {
    randomBattleMoves: ["dragondance", "crunch", "stormstrike", "earthquake", "firefang", "icefang", "pursuit"],
    tier: "OU"
  },
  victini: {
    randomBattleMoves: ["vcreate", "boltstrike", "playrough", "hottag", "brickbreak", "flamewheel"],
    tier: "OU"
  },
  volcanion: {
    randomBattleMoves: ["fireblast", "steameruption", "flamebullet", "sludgebomb", "rinseoff", "earthpower"],
    tier: "OU"
  },
  volcarona: {
    randomBattleMoves: ["quiverdance", "fireblast", "psychic", "gigadrain", "bugbuzz", "roost"],
    tier: "OU"
  },
  zapdos: {
    randomBattleMoves: ["voltswitch", "ionabsorb", "roost", "toxic", "hurricane", "defog"],
    tier: "OU"
  },
  zeraora: {
    randomBattleMoves: ["wildcharge", "closecombat", "icepunch", "voltswitch", "knockoff", "bulkup"],
    tier: "OU"
  },
  alakazam: {
    randomBattleMoves: ["nastyplot", "psychic", "teleport", "shadowball", "focusblast", "dazzlinggleam"],
    tier: "UUBL"
  },
  azumarill: {
    randomBattleMoves: ["aquajet", "fairycharge", "aquaticassault", "superpower", "knockoff", "bellydrum", "icepunch"],
    tier: "UUBL"
  },
  blazikenmega: {
    randomBattleMoves: ["flareblitz", "highjumpkick", "earthquake", "hottag", "bravebird", "swordsdance"],
    tier: "UUBL"
  },
  charizardmegax: {
    randomBattleMoves: ["dragondance", "flareblitz", "dualchop", "earthquake", "thunderpunch", "roost"],
    tier: "OU"
  },
  dragonite: {
    randomBattleMoves: ["riverstream", "roost", "dualwingbeat", "healbell", "defog", "haze", "extremespeed"],
    tier: "UUBL"
  },
  flygon: {
    randomBattleMoves: ["firstimpression", "stickyweb", "twineedle", "uturn", "earthquake", "thunderclap", "dragondance"],
    tier: "UU"
  },
  hawlucha: {
    randomBattleMoves: ["swordsdance", "closecombat", "taunt", "acrobatics", "roost", "icepunch"],
    tier: "UUBL"
  },
  hoopaunbound: {
    randomBattleMoves: ["darkpulse", "psychic", "focusblast", "gunkshot", "hyperspacefury", "firepunch"],
    tier: "UUBL"
  },
  klinklang: {
    randomBattleMoves: ["shiftgear", "geargrind", "facade", "magnetrise", "wildcharge", "substitute"],
    tier: "UUBL"
  },
  kyurem: {
    randomBattleMoves: ["sheercold", "freezedry", "roost", "dracometeor", "earthpower", "hiddenpowerfire"],
    tier: "UUBL"
  },
  latiasmega: {
    randomBattleMoves: ["storedpower", "calmmind", "roost", "aurasphere"],
    tier: "UUBL"
  },
  latios: {
    randomBattleMoves: ["psychic", "dracometeor", "mysticalfire", "aurasphere", "icebeam", "slipstream"],
    tier: "UUBL"
  },
  latiosmega: {
    randomBattleMoves: ["psyshock", "aurasphere", "roost", "calmmind", "mysticalfire", "agility", "icebeam"],
    tier: "UUBL"
  },
  lycanrocdusk: {
    randomBattleMoves: ["firelash", "stoneedge", "accelerock", "playrough", "closecombat", "swordsdance"],
    tier: "OU"
  },
  marowakalola: {
    randomBattleMoves: ["astonish", "poltergeist", "flareblitz", "bonemerang", "stealthrock", "flamewheel"],
    tier: "UUBL"
  },
  medichammega: {
    randomBattleMoves: ["highjumpkick", "fakeout", "bulletpunch", "psychocut", "icepunch", "thunderpunch"],
    tier: "UUBL"
  },
  metagross: {
    randomBattleMoves: ["bulletpunch", "meteormash", "psychocut", "stompingtantrum", "pragmastrike", "icepunch", "agility"],
    tier: "UUBL"
  },
  mew: {
    randomBattleMoves: ["bravebird", "closecombat", "dragondance", "flareblitz", "psychicfangs", "swordsdance"],
    tier: "UUBL"
  },
  nihilego: {
    randomBattleMoves: ["meteorshower", "acidmelt", "thunderbolt", "psychic", "stealthrock", "sludgebomb"],
    tier: "UUBL"
  },
  pinsirmega: {
    randomBattleMoves: ["quickattack", "closecombat", "swordsdance", "doublehit", "fellstinger", "earthquake"],
    tier: "RUBL"
  },
  scolipede: {
    randomBattleMoves: ["swordsdance", "poisonjab", "megahorn", "earthquake", "aquatail", "protect"],
    tier: "UUBL"
  },
  scyther: {
    randomBattleMoves: ["dualwingbeat", "uturn", "brickbreak", "knockoff", "roost", "swordsdance"],
    tier: "UUBL"
  },
  slaking: {
    randomBattleMoves: ["doubleedge", "earthquake", "suckerpunch", "slackoff", "bulkup", "firepunch"],
    tier: "UUBL"
  },
  staraptor: {
    randomBattleMoves: ["bravebird", "closecombat", "skyuppercut", "slipstream", "pursuit", "roost"],
    tier: "UUBL"
  },
  terrakion: {
    randomBattleMoves: ["stoneedge", "sacredsword", "swordsdance", "earthquake", "psychocut", "stalwartsword"],
    tier: "UUBL"
  },
  tornadus: {
    randomBattleMoves: ["hurricane", "weatherball", "uturn", "nastyplot", "focusblast", "taunt"],
    tier: "UUBL"
  },
  thundurus: {
    randomBattleMoves: ["wildcharge", "icepunch", "firepunch", "voltswitch", "superpower", "knockoff"],
    tier: "UUBL"
  },
  thundurustherian: {
    randomBattleMoves: ["ionabsorb", "voltswitch", "focusblast", "hiddenpowerice", "incinerate", "grassknot"],
    tier: "UU"
  },
  wishiwashi: {
    randomBattleMoves: ["scald", "earthquake", "icebeam", "uturn", "protect", "toxic"],
    tier: "UUBL"
  },
  absolmega: {
    randomBattleMoves: ["knockoff", "closecombat", "swordsdance", "playrough", "suckerpunch", "irontail"],
    tier: "RU"
  },
  ambipom: {
    randomBattleMoves: ["doublehit", "fakeout", "uturn", "knockoff", "poweruppunch", "dualchop"],
    tier: "RU"
  },
  altariamega: {
    randomBattleMoves: ["dragondance", "return", "earthquake", "roost", "fireblast", "cottonguard"],
    tier: "RUBL"
  },
  amoonguss: {
    randomBattleMoves: ["spore", "gigadrain", "toxic", "sludgebomb", "synthesis", "hiddenpowerfire"],
    tier: "UU"
  },
  archeops: {
    randomBattleMoves: ["bravebird", "headsmash", "dragondance", "earthquake", "uturn", "heatwave"],
    tier: "UU"
  },
  articunogalar: {
    randomBattleMoves: ["freezingglare", "hurricane", "shadowball", "teleport", "jetstream", "recover", "calmmind"],
    tier: "UU"
  },
  azelf: {
    randomBattleMoves: ["zenheadbutt", "knockoff", "stealthrock", "partingshot", "firepunch", "explosion", "taunt"],
    tier: "UU"
  },
  banettemega: {
    randomBattleMoves: ["shadowcharge", "return", "copycat", "swordsdance", "playrough", "drainpunch"],
    tier: "RU"
  },
  barraskewda: {
    randomBattleMoves: ["aquaticassault", "icefang", "closecombat", "riverstream", "psychicfangs"],
    tier: "UU"
  },
  beedrillmega: {
    randomBattleMoves: ["twineedle", "uturn", "poisonjab", "bugbite", "drillrun", "brickbreak"],
    tier: "UU"
  },
  beheeyem: {
    randomBattleMoves: ["psyshock", "darkpulse", "signalbeam", "teleport", "nastyplot", "thunderbolt", "meteorshower"],
    tier: "UU"
  },
  blastoise: {
    randomBattleMoves: ["scald", "rapidspin", "rinseoff", "icebeam", "toxic", "refresh", "bodypress"],
    tier: "RU"
  },
  boltund: {
    randomBattleMoves: ["thunderfang", "icefang", "firefang", "psychicfangs", "crunch", "voltswitch"],
    tier: "UU"
  },
  breloom: {
    randomBattleMoves: ["spore", "bulletseed", "skyuppercut", "machpunch", "rocktomb", "swordsdance"],
    tier: "RU"
  },
  buzzwole: {
    randomBattleMoves: ["leechlife", "drainpunch", "roost", "toxic", "vampirebite", "bulkup"],
    tier: "UU"
  },
  celebi: {
    randomBattleMoves: ["moonblast", "gigadrain", "psychic", "earthpower", "stealthrock", "uturn"],
    tier: "UU"
  },
  celesteela: {
    randomBattleMoves: ["heavyslam", "airslash", "protect", "leechseed", "flamethrower", "earthquake"],
    tier: "UU"
  },
  chandelure: {
    randomBattleMoves: ["souldrain", "overheat", "energyball", "willowisp", "psychic"],
    tier: "UU"
  },
  cinccino: {
    randomBattleMoves: ["tailslap", "heartbeat", "bonerush", "uturn", "knockoff", "bulletseed"],
    tier: "UU"
  },
  clefable: {
    randomBattleMoves: ["moonblast", "moonlight", "teleport", "incinerate", "stealthrock", "aromatherapy"],
    tier: "UU"
  },
  cobalion: {
    randomBattleMoves: ["stalwartsword", "sacredsword", "psychocut", "voltswitch", "stealthrock", "swordsdance"],
    tier: "UU"
  },
  cofagrigus: {
    randomBattleMoves: ["bodypress", "hex", "willowisp", "recrystalize", "toxicspikes", "irondefense"],
    tier: "UU"
  },
  crawdaunt: {
    randomBattleMoves: ["aquaticassault", "knockoff", "closecombat", "aquajet", "swordsdance"],
    tier: "RU"
  },
  cresselia: {
    randomBattleMoves: ["moonblast", "calmmind", "moonlight", "hiddenpowerfire", "psyshock", "toxic"],
    tier: "UU"
  },
  cryogonal: {
    randomBattleMoves: ["auroraveil", "blizzard", "freezedry", "recover", "defog", "hiddenpowerfire"],
    tier: "UU"
  },
  delphox: {
    randomBattleMoves: ["fireblast", "psychic", "grassknot", "calmmind", "dazzlinggleam"],
    tier: "RU"
  },
  dianciemega: {
    randomBattleMoves: ["powergem", "moonblast", "mysticalfire", "earthpower", "stealthrock", "moonlight"],
    tier: "UU"
  },
  diggersby: {
    randomBattleMoves: ["return", "earthquake", "mudslap", "uturn", "icepunch", "swordsdance"],
    tier: "RU"
  },
  donphan: {
    randomBattleMoves: ["earthquake", "knockoff", "iceshard", "rinseoff", "stealthrock", "rapidspin"],
    tier: "RU"
  },
  durant: {
    randomBattleMoves: ["firstimpression", "bugbite", "ironhead", "superpower", "thunderfang", "honeclaws"],
    tier: "UU"
  },
  empoleon: {
    randomBattleMoves: ["scald", "rinseoff", "icebeam", "defog", "stealthrock", "flashcannon"],
    tier: "UU"
  },
  escavalier: {
    randomBattleMoves: ["bugbite", "stalwartsword", "closecombat", "razorshell", "drillrun", "shieldslam"],
    tier: "UU"
  },
  floatzel: {
    randomBattleMoves: ["aquaticassault", "riverstream", "doublekick", "pragmastrike", "icefang", "skyuppercut"],
    tier: "UU"
  },
  floetteeternal: {
    randomBattleMoves: ["lightofruin", "fairywind", "hiddenpowerfire", "energyball", "calmmind", "synthesis"],
    tier: "RU"
  },
  gardevoirmega: {
    randomBattleMoves: ["psychic", "hypervoice", "mysticalfire", "calmmind", "shadowball", "thunderbolt"],
    tier: "UU"
  },
  gigalith: {
    randomBattleMoves: ["stoneedge", "recrystalize", "bodypress", "stealthrock", "earthquake", "irondefense"],
    tier: "UU"
  },
  glastrier: {
    randomBattleMoves: ["closecombat", "iciclecrash", "highhorsepower", "heavyslam", "megahorn", "swordsdance"],
    tier: "RU"
  },
  golisopod: {
    randomBattleMoves: ["firstimpression", "aquaticassault", "spikes", "swordsdance", "closecombat", "aquajet", "leechlife"],
    tier: "UU"
  },
  grimmsnarl: {
    randomBattleMoves: ["reflect", "lightscreen", "fairycharge", "taunt", "thunderwave", "vampirebite"],
    tier: "RU"
  },
  gyarados: {
    randomBattleMoves: ["dragondance", "aquaticassault", "icefang", "earthquake", "powerwhip", "crunch"],
    tier: "UU"
  },
  gyaradosmega: {
    randomBattleMoves: ["dragondance", "aquaticassault", "icefang", "earthquake", "powerwhip", "crunch"],
    tier: "UU"
  },
  hatterene: {
    randomBattleMoves: ["teleport", "trickroom", "dazzlinggleam", "mysticalfire", "moonlight", "psyshock"],
    tier: "UU"
  },
  haxorus: {
    randomBattleMoves: ["dragondance", "dualchop", "poisonjab", "earthquake", "firstimpression", "closecombat"],
    tier: "UU"
  },
  heracross: {
    randomBattleMoves: ["bugbite", "closecombat", "earthquake", "facade", "swordsdance", "pursuit"],
    tier: "UU"
  },
  heracrossmega: {
    randomBattleMoves: ["pinmissile", "armthrust", "swordsdance", "earthquake", "knockoff", "spikes"],
    tier: "UU"
  },
  hippowdon: {
    randomBattleMoves: ["earthquake", "slackoff", "firefang", "whirlwind", "stealthrock", "stoneedge"],
    tier: "UU"
  },
  houndoommega: {
    randomBattleMoves: ["nastyplot", "darkpulse", "suckerpunch", "fireblast", "sludgebomb", "hiddenpowergrass"],
    tier: "UU"
  },
  huntail: {
    randomBattleMoves: ["shellsmash", "aquaticassault", "icefang", "vampirebite", "suckerpunch"],
    tier: "UU"
  },
  jolteon: {
    randomBattleMoves: ["risingvoltage", "hiddenpowerice", "signalbeam", "voltswitch", "toxic"],
    tier: "UU"
  },
  kingdra: {
    randomBattleMoves: ["hydropump", "flipturn", "dracometeor", "hurricane", "scald", "flashcannon"],
    tier: "UU"
  },
  krookodile: {
    randomBattleMoves: ["earthquake", "knockoff", "closecombat", "taunt", "firefang", "stealthrock"],
    tier: "UU"
  },
  latias: {
    randomBattleMoves: ["dracometeor", "psychic", "mysticalfire", "roost", "slipstream", "defog", "icebeam"],
    tier: "UU"
  },
  leafeon: {
    randomBattleMoves: ["grassyglide", "leafblade", "doublekick", "knockoff", "swordsdance"],
    tier: "UU"
  },
  lycanroc: {
    randomBattleMoves: ["headsmash", "extremespeed", "icefang", "closecombat", "firefang", "swordsdance", "stealthrock"],
    tier: "UU"
  },
  mamoswine: {
    randomBattleMoves: ["icefang", "earthquake", "stealthrock", "iceshard", "knockoff", "freezedry"],
    tier: "UU"
  },
  mandibuzz: {
    randomBattleMoves: ["pluck", "roost", "defog", "uturn", "foulplay", "toxic"],
    tier: "UU"
  },
  manectricmega: {
    randomBattleMoves: ["ionabsorb", "flamethrower", "voltswitch", "thunderwave", "hiddenpowerice"],
    tier: "UU"
  },
  meloetta: {
    randomBattleMoves: ["hypervoice", "psychic", "focusblast", "uturn", "signalbeam", "shadowball"],
    tier: "UU"
  },
  mienshao: {
    randomBattleMoves: ["fakeout", "return", "closecombat", "hottag", "stoneedge", "knockoff"],
    tier: "UU"
  },
  milotic: {
    randomBattleMoves: ["scald", "recover", "toxic", "haze", "flipturn", "moonblast", "icebeam"],
    tier: "UU"
  },
  mismagius: {
    randomBattleMoves: ["nastyplot", "hauntingscream", "moonblast", "mysticalfire", "thunderbolt", "powergem"],
    tier: "UU"
  },
  moltres: {
    randomBattleMoves: ["incinerate", "roost", "scorchingsands", "uturn", "solarbeam", "willowisp"],
    tier: "UU"
  },
  morpeko: {
    randomBattleMoves: ["aurawheel", "wildcharge", "protect", "partingshot", "icefang", "rapidspin"],
    tier: "UU"
  },
  oricoriopompom: {
    randomBattleMoves: ["revelationdance", "quiverdance", "fierydance", "airslash"],
    tier: "UU"
  },
  pelipper: {
    randomBattleMoves: ["scald", "hurricane", "roost", "uturn", "knockoff", "jetstream", "defog"],
    tier: "UU"
  },
  pidgeotmega: {
    randomBattleMoves: ["hurricane", "aurasphere", "roost", "slipstream", "workup", "heatwave"],
    tier: "UU"
  },
  porygonz: {
    randomBattleMoves: ["nastyplot", "triattack", "shadowball", "thunderbolt", "icebeam", "recover"],
    tier: "UU"
  },
  registeel: {
    randomBattleMoves: ["shieldslam", "irondefense", "stealthrock", "toxic", "bodypress", "protect"],
    tier: "UU"
  },
  rhyperior: {
    randomBattleMoves: ["stoneedge", "earthquake", "icefang", "stealthrock", "mudslap", "swordsdance", "megahorn"],
    tier: "RU"
  },
  ribombee: {
    randomBattleMoves: ["stickyweb", "bugbuzz", "drainingkiss", "stunspore", "magiccoat", "uturn"],
    tier: "RU"
  },
  rillaboom: {
    randomBattleMoves: ["drumbeating", "thunderclap", "earthquake", "swordsdance", "leafage", "uturn"],
    tier: "RU"
  },
  roserade: {
    randomBattleMoves: ["gigadrain", "venoshock", "hiddenpowerfire", "toxicspikes", "extrasensory", "sleeppowder"],
    tier: "UU"
  },
  rotomfan: {
    randomBattleMoves: ["metalsound", "voltswitch", "willowisp", "defog", "painsplit", "ionabsorb"],
    tier: "UU"
  },
  rotomheat: {
    randomBattleMoves: ["nastyplot", "ionabsorb", "overheat", "toxic", "voltswitch", "painsplit"],
    tier: "UU"
  },
  rotomwash: {
    randomBattleMoves: ["nastyplot", "ionabsorb", "hydropump", "voltswitch", "willowisp", "defog", "painsplit"],
    tier: "UU"
  },
  sableyemega: {
    randomBattleMoves: ["knockoff", "recover", "willowisp", "taunt", "astonish"],
    tier: "UU"
  },
  salamence: {
    randomBattleMoves: ["dualwingbeat", "outrage", "firefang", "dragondance", "earthquake", "roost"],
    tier: "UU"
  },
  sandslashalola: {
    randomBattleMoves: ["swordsdance", "spikyshield", "tripleaxel", "earthquake", "ironhead"],
    tier: "UU"
  },
  sceptilemega: {
    randomBattleMoves: ["gigadrain", "dracometeor", "leafstorm", "focusblast", "hiddenpowerfire"],
    tier: "UU"
  },
  scizor: {
    randomBattleMoves: ["swordsdance", "bulletpunch", "uturn", "roost", "brickbreak", "knockoff"],
    tier: "UU"
  },
  sharpedomega: {
    randomBattleMoves: ["aquaticassault", "protect", "crunch", "poisonfang", "riverstream", "psychicfangs"],
    tier: "UU"
  },
  sirfetchd: {
    randomBattleMoves: ["meteorassault", "firstimpression", "skyattack", "knockoff", "swordsdance", "stalwartsword"],
    tier: "UU"
  },
  skarmory: {
    randomBattleMoves: ["bodypress", "bravebird", "roost", "stealthrock", "spikes", "whirlwind"],
    tier: "UU"
  },
  slowbrogalar: {
    randomBattleMoves: ["shellsidearm", "psychic", "flamebullet", "fireblast", "hydropump", "teleport"],
    tier: "RU"
  },
  slowking: {
    randomBattleMoves: ["scald", "futuresight", "slackoff", "icebeam", "teleport", "thunderwave"],
    tier: "RU"
  },
  slowkinggalar: {
    randomBattleMoves: ["acidmelt", "teleport", "futuresight", "earthquake", "psyshock", "scald"],
    tier: "UU"
  },
  starmie: {
    randomBattleMoves: ["hydropump", "psychic", "icebeam", "thunderbolt", "teleport", "rapidspin"],
    tier: "UU"
  },
  steelixmega: {
    randomBattleMoves: ["shieldslam", "bodypress", "earthquake", "recrystalize", "irondefense", "stealthrock"],
    tier: "UU"
  },
  suicune: {
    randomBattleMoves: ["scald", "icebeam", "calmmind", "rest", "sleeptalk", "airslash"],
    tier: "UU"
  },
  togekiss: {
    randomBattleMoves: ["nastyplot", "airslash", "morningsun", "incinerate", "thunderwave", "dazzlinggleam"],
    tier: "UU"
  },
  toxtricity: {
    randomBattleMoves: ["shiftgear", "gunkshot", "thunderclap", "drainpunch", "firepunch", "icepunch"],
    tier: "RU"
  },
  toxtricitylowkey: {
    randomBattleMoves: ["acidmelt", "overdrive", "metalsound", "boomburst", "voltswitch", "snarl"],
    tier: "RU"
  },
  typhlosion: {
    randomBattleMoves: ["eruption", "focusblast", "extrasensory", "fireblast", "hiddenpowergrass"],
    tier: "RU"
  },
  unfezant: {
    randomBattleMoves: ["pluck", "brickbreak", "slipstream", "quickattack", "facade", "nightslash"],
    tier: "UU"
  },
  urshifurapidstrike: {
    randomBattleMoves: ["bulkup", "drainpunch", "surgingstrikes", "substitute"],
    tier: "RU"
  },
  uxie: {
    randomBattleMoves: ["hex", "willowisp", "recover", "uturn", "stealthrock", "knockoff"],
    tier: "RU"
  },
  vaporeon: {
    randomBattleMoves: ["scald", "flipturn", "wish", "protect", "icebeam"],
    tier: "UU"
  },
  venusaurmega: {
    randomBattleMoves: ["gigadrain", "sleeppowder", "sludgebomb", "leechseed", "synthesis", "hiddenpowerfire"],
    tier: "UU"
  },
  weavile: {
    randomBattleMoves: ["knockoff", "tripleaxel", "iceshard", "pursuit", "swordsdance", "lowkick"],
    tier: "UU"
  },
  zapdosgalar: {
    randomBattleMoves: ["thunderouskick", "bravebird", "slipstream", "stompingtantrum", "throatchop", "swordsdance"],
    tier: "UU"
  },
  alomomola: {
    randomBattleMoves: ["riverstream", "toxic", "wish", "protect", "scald", "knockoff"],
    tier: "RU"
  },
  ampharosmega: {
    randomBattleMoves: ["ionabsorb", "dragonpulse", "focusblast", "cottonguard", "voltswitch"],
    tier: "RU"
  },
  arctozolt: {
    randomBattleMoves: ["boltbeak", "icefang", "iceshard", "voltswitch", "recrystalize", "pluck", "lowkick"],
    tier: "NU"
  },
  braviary: {
    randomBattleMoves: ["closecombat", "bravebird", "uturn", "shadowclaw", "ironhead", "honeclaws"],
    tier: "RUBL"
  },
  cloyster: {
    randomBattleMoves: ["shellsmash", "bubblebeam", "iciclespear", "rockblast", "hiddenpowerfire"],
    tier: "RU"
  },
  conkeldurr: {
    randomBattleMoves: ["knockoff", "closecombat", "icepunch", "machpunch", "poisonjab", "hottag"],
    tier: "RU"
  },
  electabuzz: {
    randomBattleMoves: ["wildcharge", "icepunch", "voltswitch", "psychic", "focusblast", "firepunch"],
    tier: "PUBL"
  },
  electivire: {
    randomBattleMoves: ["wildcharge", "icepunch", "earthquake", "teleport", "firepunch", "crosschop"],
    tier: "PU"
  },
  exeggutor: {
    randomBattleMoves: ["allterrainblast", "psyshock", "teleport", "hiddenpowerfire", "sleeppowder", "synthesis"],
    tier: "RU"
  },
  forretress: {
    randomBattleMoves: ["shieldslam", "bugbite", "voltswitch", "rapidspin", "spikes", "stealthrock"],
    tier: "UU"
  },
  gorebyss: {
    randomBattleMoves: ["shellsmash", "drainingkiss", "hydropump", "psychic", "hiddenpowergrass", "batonpass"],
    tier: "RU"
  },
  heliolisk: {
    randomBattleMoves: ["ionabsorb", "hypervoice", "surf", "voltswitch", "darkpulse", "grassknot"],
    tier: "NU"
  },
  lanturn: {
    randomBattleMoves: ["scald", "rinseoff", "ionabsorb", "voltswitch", "toxic", "protect"],
    tier: "RU"
  },
  maractus: {
    randomBattleMoves: ["weatherball", "spikes", "gigadrain", "spikyshield", "synthesis"],
    tier: "NUBL"
  },
  mimikyu: {
    randomBattleMoves: ["swordsdance", "shadowcharge", "shadowsneak", "fairylock", "drainpunch", "woodhammer"],
    tier: "RU"
  },
  moltresgalar: {
    randomBattleMoves: ["fierywrath", "hurricane", "jetstream", "nastyplot", "morningsun"],
    tier: "UU"
  },
  mrmimegalar: {
    randomBattleMoves: ["teleport", "freezedry", "iceshard", "hiddenpowerfire", "signalbeam", "nastyplot"],
    tier: "RU"
  },
  ninetalesalola: {
    randomBattleMoves: ["auroraveil", "blizzard", "freezedry", "moonblast", "nastyplot", "encore"],
    tier: "RUBL"
  },
  plusle: {
    randomBattleMoves: ["ionabsorb", "nastyplot", "hiddenpowerice", "grassknot", "hottag", "encore"],
    tier: "NUBL"
  },
  porygon2: {
    randomBattleMoves: ["foulplay", "triattack", "teleport", "recover", "thunderwave", "trickroom"],
    tier: "RU"
  },
  regidrago: {
    randomBattleMoves: ["dragonenergy", "psychicfangs", "dragonfang", "firefang", "dragondance", "icefang"],
    tier: "RU"
  },
  regirock: {
    randomBattleMoves: ["bodypress", "irondefense", "stoneedge", "firepunch", "stealthrock", "icepunch"],
    tier: "RU"
  },
  sceptile: {
    randomBattleMoves: ["leafstorm", "focusblast", "hiddenpowerice", "energyball", "dragonpulse"],
    tier: "RU"
  },
  shaymin: {
    randomBattleMoves: ["seedflare", "leechseed", "earthpower", "substitute", "psychic", "healingwish"],
    tier: "RU"
  },
  zebstrika: {
    randomBattleMoves: ["thunderclap", "doublekick", "flamecharge", "voltswitch"],
    tier: "NU"
  },
  beedrill: {
    randomBattleMoves: ["twineedle", "uturn", "toxicspikes", "poisonjab", "roost", "tailwind"],
    tier: "PU"
  },
  venomoth: {
    randomBattleMoves: ["quiverdance", "bugbuzz", "sludgebomb", "sleeppowder", "gigadrain"],
    tier: "NU"
  },
  ledian: {
    randomBattleMoves: ["closecombat", "bugbite", "uturn", "knockoff", "swordsdance", "machpunch"],
    tier: "PU"
  },
  ariados: {
    randomBattleMoves: ["stickyweb", "poisonjab", "suckerpunch", "bugbite", "swordsdance", "shadowsneak"],
    tier: "PU"
  },
  beautifly: {
    randomBattleMoves: ["quiverdance", "gigadrain", "bugbuzz", "drainingkiss", "aircutter"],
    tier: "PU"
  },
  dustox: {
    randomBattleMoves: ["poisonfang", "uturn", "toxic", "moonlight", "whirlwind", "bugbite"],
    tier: "PU"
  },
  masquerain: {
    randomBattleMoves: ["quiverdance", "stickyweb", "hydropump", "bugbuzz", "hurricane", "icebeam"],
    tier: "PU"
  },
  volbeat: {
    randomBattleMoves: ["uturn", "moonlight", "bugbite", "thunderwave", "encore", "tailwind"],
    tier: "PU"
  },
  wormadam: {
    randomBattleMoves: ["quiverdance", "bugbuzz", "gigadrain", "synthesis", "hiddenpowerfire", "earthpower"],
    tier: "PU"
  },
  wormadamsandy: {
    randomBattleMoves: ["bugbite", "spikes", "synthesis", "fissure", "mudslap", "encore"],
    tier: "PU"
  },
  wormadamtrash: {
    randomBattleMoves: ["bugbite", "stealthrock", "synthesis", "toxic", "metalsound", "mudslap"],
    tier: "PU"
  },
  mothim: {
    randomBattleMoves: ["uturn", "bugbuzz", "airslash", "hiddenpowerground", "quiverdance", "roost"],
    tier: "PU"
  },
  arceus: {
    randomBattleMoves: ["swordsdance", "extremespeed", "pragmastrike", "recover", "earthquake"],
    tier: "Uber"
  },
  yanmega: {
    randomBattleMoves: ["dracometeor", "bugbuzz", "gigadrain", "psychic", "protect", "uturn"],
    tier: "NU"
  },
  leavanny: {
    randomBattleMoves: ["stickyweb", "bugbite", "leafblade", "magiccoat", "leafage"],
    tier: "PU"
  },
  vivillon: {
    randomBattleMoves: ["sleeppowder", "bugbuzz", "hurricane", "gigadrain", "roost", "substitute"],
    tier: "PU"
  },
  togedemarutotem: {
    randomBattleMoves: ["zingzap", "ironhead", "uturn", "fellstinger", "poisonjab"],
    tier: "OU"
  },
  togedemaru: {
    randomBattleMoves: ["zingzap", "ironhead", "uturn", "fakeout", "fairylock", "encore"],
    tier: "OU"
  },
  blaziken: {
    randomBattleMoves: ["blazekick", "doublekick", "hottag", "earthquake", "swordsdance", "knockoff"],
    tier: "NU"
  },
  raticatealola: {
    randomBattleMoves: ["knockoff", "suckerpunch", "uturn", "doubleedge", "pluck", "irontail"],
    tier: "PU"
  },
  mukalola: {
    randomBattleMoves: ["poisonfang", "knockoff", "pursuit", "shadowsneak", "firepunch", "icepunch"],
    tier: "NU"
  },
  murkrow: {
    randomBattleMoves: ["roost", "pluck", "pragmastrike", "thunderwave", "heatwave", "haze"],
    tier: "PU"
  },
  honchkrow: {
    randomBattleMoves: ["pragmastrike", "suckerpunch", "bravebird", "superpower", "mudslap"],
    tier: "NU"
  },
  granbull: {
    randomBattleMoves: ["fairycharge", "crunch", "firefang", "suckerpunch", "bulkup", "taunt"],
    tier: "PU"
  },
  houndoom: {
    randomBattleMoves: ["nastyplot", "darkpulse", "fireblast", "sludgebomb", "hiddenpowergrass", "flamecharge"],
    tier: "PU"
  },
  mightyena: {
    randomBattleMoves: ["crunch", "firefang", "irontail", "suckerpunch", "playrough", "facade"],
    tier: "PU"
  },
  cacturne: {
    randomBattleMoves: ["suckerpunch", "seedbomb", "pragmastrike", "drainpunch", "swordsdance", "spikes"],
    tier: "PU"
  },
  darkrai: {
    randomBattleMoves: ["darkpulse", "hypnosis", "incinerate", "sludgebomb", "psychic", "thunderbolt"],
    tier: "Uber"
  },
  greninjash: {
    randomBattleMoves: ["hydropump", "riverstream", "darkpulse", "icebeam", "spikes", "scald"],
    tier: "Uber"
  },
  arbok: {
    randomBattleMoves: ["poisonfang", "dragonfang", "coil", "suckerpunch", "firefang", "icefang"],
    tier: "NU"
  },
  servine: {
    randomBattleMoves: ["leafstorm", "dracometeor", "flamethrower", "hiddenpowerground"],
    tier: "PU"
  },
  golemalola: {
    randomBattleMoves: ["wildcharge", "rockblast", "firepunch", "earthquake", "icepunch", "voltswitch"],
    tier: "PU"
  },
  electrode: {
    randomBattleMoves: ["thunderbolt", "lightscreen", "reflect", "teleport", "hiddenpowerice", "taunt"],
    tier: "NU"
  },
  ampharos: {
    randomBattleMoves: ["thunderbolt", "focusblast", "hiddenpowerice", "agility", "voltswitch"],
    tier: "PU"
  },
  minun: {
    randomBattleMoves: ["thunderbolt", "hiddenpowerice", "hottag", "grassknot", "nastyplot", "voltswitch"],
    tier: "NU"
  },
  pachirisu: {
    randomBattleMoves: ["uturn", "nuzzle", "firepunch", "ionabsorb", "superfang", "seedbomb"],
    tier: "PU"
  },
  eelektross: {
    randomBattleMoves: ["riverstream", "thunderclap", "drainpunch", "firepunch", "knockoff", "aquaticassault"],
    tier: "PU"
  },
  furret: {
    randomBattleMoves: ["doubleedge", "uturn", "knockoff", "firepunch", "coil", "quickattack"],
    tier: "PU"
  },
  misdreavus: {
    randomBattleMoves: ["hex", "willowisp", "taunt", "moonlight"],
    tier: "NU"
  },
  phione: {
    randomBattleMoves: ["aquaticassault", "fairylock", "knockoff", "uturn"],
    tier: "PU"
  },
  audino: {
    randomBattleMoves: ["knockoff", "return", "wish", "protect", "thunderwave", "healbell"],
    tier: "PU"
  },
  sawsbuck: {
    randomBattleMoves: ["fairycharge", "swordsdance", "leafblade", "earthquake", "wildcharge"],
    tier: "PU"
  },
  florges: {
    randomBattleMoves: ["moonblast", "synthesis", "defog", "psychic", "healbell", "calmmind"],
    tier: "NUBL"
  },
  primeape: {
    randomBattleMoves: ["closecombat", "gunkshot", "earthquake", "icepunch", "hottag", "throatchop"],
    tier: "PUBL"
  },
  hariyama: {
    randomBattleMoves: ["closecombat", "bulletpunch", "knockoff", "earthquake", "hottag", "thunderclap"],
    tier: "PU"
  },
  medicham: {
    randomBattleMoves: ["highjumpkick", "psychocut", "fakeout", "icepunch", "bulletpunch", "drainpunch"],
    tier: "PU"
  },
  monferno: {
    tier: "NFE"
  },
  samurott: {
    randomBattleMoves: ["razorshell", "sacredsword", "stalwartsword", "swordsdance", "aquajet", "xscissor"],
    tier: "NU"
  },
  chesnaught: {
    randomBattleMoves: ["seedbomb", "shieldslam", "synthesis", "hottag", "spikes", "drainpunch"],
    tier: "RU"
  },
  crabrawler: {
    tier: "LC"
  },
  crabominable: {
    randomBattleMoves: ["poweruppunch", "icehammer", "drainpunch", "ironhead", "earthquake", "crabhammer"],
    tier: "PU"
  },
  pidgeot: {
    randomBattleMoves: ["slipstream", "gigaimpact", "steelwing", "skyattack", "quickattack"],
    tier: "PU"
  },
  fearow: {
    randomBattleMoves: ["uturn", "doubleedge", "plumecannon", "drillrun", "quickattack"],
    tier: "PU"
  },
  dodrio: {
    randomBattleMoves: ["swordsdance", "facade", "bravebird", "jumpkick", "quickattack", "knockoff"],
    tier: "NU"
  },
  jumpluff: {
    randomBattleMoves: ["slipstream", "sleeppowder", "synthesis", "seedbomb", "swordsdance", "acrobatics"],
    tier: "PU"
  },
  gligar: {
    randomBattleMoves: ["slipstream", "earthquake", "defog", "bugbite", "moonlight", "stealthrock", "toxic"],
    tier: "NU"
  },
  swellow: {
    randomBattleMoves: ["slipstream", "boomburst", "hurricane", "heatwave"],
    tier: "NU"
  },
  tropius: {
    randomBattleMoves: ["leaftornado", "synthesis", "toxic", "whirlwind", "leechseed", "defog"],
    tier: "PU"
  },
  chatot: {
    randomBattleMoves: ["boomburst", "nastyplot", "chatter", "heatwave", "hauntingscream"],
    tier: "PU"
  },
  swanna: {
    randomBattleMoves: ["riverstream", "hurricane", "scald", "defog", "icebeam", "roost"],
    tier: "PU"
  },
  shayminsky: {
    randomBattleMoves: ["seedflare", "airslash", "earthpower", "psychic", "dazzlinggleam", "synthesis"],
    tier: "Uber"
  },
  toucannon: {
    randomBattleMoves: ["flamecharge", "plumecannon", "bulletseed", "rockblast", "swordsdance", "roost"],
    tier: "PU"
  },
  oricorio: {
    randomBattleMoves: ["fierydance", "airslash", "roost", "hiddenpowergrass", "quiverdance"],
    tier: "NU"
  },
  oricoriopau: {
    randomBattleMoves: ["revelationdance", "airslash", "roost", "fierydance", "quiverdance"],
    tier: "NU"
  },
  oricoriosensu: {
    randomBattleMoves: ["revelationdance", "airslash", "roost", "fierydance", "quiverdance", "substitute"],
    tier: "NUBL"
  },
  minior: {
    randomBattleMoves: ["shellsmash", "acrobatics", "stoneedge", "earthpower", "explosion", "ironhead"],
    tier: "PU"
  },
  banette: {
    randomBattleMoves: ["swordsdance", "shadowpunch", "doubleedge", "drainpunch", "willowisp", "shadowsneak"],
    tier: "PU"
  },
  hoopa: {
    randomBattleMoves: ["psychic", "thunderbolt", "shadowball", "energyball", "nastyplot", "astonish"],
    tier: "NU"
  },
  victreebel: {
    randomBattleMoves: ["gigadrain", "acidmelt", "strengthsap", "sleeppowder", "hiddenpowerice"],
    tier: "NU"
  },
  meganium: {
    randomBattleMoves: ["curse", "seedbomb", "earthquake", "synthesis"],
    tier: "NU"
  },
  sunflora: {
    randomBattleMoves: ["solarbeam", "earthpower", "hiddenpowerfire", "synthesis"],
    tier: "PU"
  },
  torterra: {
    randomBattleMoves: ["seedbomb", "stoneedge", "stealthrock", "synthesis", "earthquake", "roar"],
    tier: "PU"
  },
  carnivine: {
    randomBattleMoves: ["gigadrain", "acidmelt", "synthesis", "growth", "sleeppowder", "hiddenpowerice"],
    tier: "PU"
  },
  simisage: {
    randomBattleMoves: ["swordsdance", "seedbomb", "return", "earthquake", "stoneedge", "icepunch", "fakeout"],
    tier: "PU"
  },
  simisear: {
    randomBattleMoves: ["nastyplot", "fireblast", "hypervoice", "earthpower", "thunderbolt", "flamebullet"],
    tier: "PU"
  },
  simipour: {
    randomBattleMoves: ["riverstream", "hydropump", "thunderbolt", "icebeam", "firepledge", "glare"],
    tier: "PU"
  },
  gogoat: {
    randomBattleMoves: ["bulkup", "seedbomb", "synthesis", "leafage", "wildcharge", "rockslide"],
    tier: "PU"
  },
  komala: {
    randomBattleMoves: ["uturn", "woodhammer", "rapidspin", "knockoff", "slackoff", "yawn"],
    tier: "NU"
  },
  raichualola: {
    randomBattleMoves: ["ionabsorb", "psyshock", "focusblast", "voltswitch", "surf", "hiddenpowerice"],
    tier: "OU"
  },
  regice: {
    randomBattleMoves: ["auroraveil", "blizzard", "recrystalize", "thunderbolt", "freezedry", "hiddenpowerfire"],
    tier: "OU"
  },
  metagrossmega: {
    randomBattleMoves: ["bulletpunch", "meteormash", "psychocut", "earthquake", "icepunch", "thunderpunch"],
    tier: "Uber"
  },
  alakazammega: {
    randomBattleMoves: ["nastyplot", "psyshock", "recover", "focusblast", "shadowball", "teleport"],
    tier: "Uber"
  },
  blastoisemega: {
    randomBattleMoves: ["shellsmash", "hydropump", "focusblast", "flashcannon", "darkpulse", "icebeam"],
    tier: "Uber"
  },
  gengarmega: {
    randomBattleMoves: ["nastyplot", "hauntingscream", "sludgebomb", "focusblast", "destinybond", "dazzlinggleam"],
    tier: "Uber"
  },
  lucariomega: {
    randomBattleMoves: ["nastyplot", "vacuumwave", "aurasphere", "darkpulse", "metalsound", "hiddenpowerice"],
    tier: "Uber"
  },
  salamencemega: {
    randomBattleMoves: ["dragondance", "doubleedge", "roost", "earthquake", "firefang", "dragonfang"],
    tier: "Uber"
  },
  kangaskhanmega: {
    randomBattleMoves: ["fakeout", "rockslide", "return", "icepunch", "firepunch", "earthquake"],
    tier: "OU"
  },
  pikachustarter: {
    randomBattleMoves: ["pikapapow", "splishysplash", "floatyfall", "doublekick"],
    tier: "Uber"
  },
  eeveestarter: {
    randomBattleMoves: ["veeveevolley", "sizzlyslide", "buzzybuzz", "doublekick", "sparklyswirl", "sappyseed"],
    tier: "Uber"
  },
  golem: {
    randomBattleMoves: ["stoneedge", "earthquake", "suckerpunch", "icepunch", "thunderpunch", "stealthrock"],
    tier: "PU"
  },
  camerupt: {
    randomBattleMoves: ["incinerate", "stealthrock", "earthpower", "hiddenpowergrass", "willowisp", "roar"],
    tier: "PU"
  },
  glaliemega: {
    randomBattleMoves: ["doubleedge", "earthquake", "freezedry", "explosion", "spikes", "iceshard"],
    tier: "NU"
  },
  dewgong: {
    randomBattleMoves: ["riverstream", "waterfall", "iciclespear", "drillrun", "fakeout", "aquajet", "megahorn"],
    tier: "PU"
  },
  abomasnowmega: {
    randomBattleMoves: ["auroraveil", "stormstrike", "woodhammer", "synthesis", "iceshard", "earthquake"],
    tier: "NU"
  },
  raticate: {
    randomBattleMoves: ["facade", "uturn", "pluck", "wildcharge", "swordsdance", "stompingtantrum", "quickattack"],
    tier: "PU"
  },
  aipom: {
    randomBattleMoves: ["tailslap", "armthrust", "knockoff", "uturn", "fakeout"],
    tier: "PU"
  },
  girafarig: {
    randomBattleMoves: ["nastyplot", "hypervoice", "psychic", "thunderbolt", "shadowball", "hiddenpowerfire"],
    tier: "PU"
  },
  ursaring: {
    randomBattleMoves: ["facade", "closecombat", "riverstream", "earthquake", "firepunch", "swordsdance"],
    tier: "PU"
  },
  stantler: {
    randomBattleMoves: ["doubleedge", "earthquake", "doublekick", "suckerpunch", "thunderwave", "workup"],
    tier: "PU"
  },
  smeargle: {
    randomBattleMoves: ["spore", "stickyweb", "stealthrock", "taunt"],
    tier: "PU"
  },
  vigoroth: {
    randomBattleMoves: ["bulkup", "return", "shadowclaw", "slackoff"],
    tier: "PU"
  },
  swalot: {
    randomBattleMoves: ["acidmelt", "icebeam", "toxic", "stockpile", "swallow", "encore"],
    tier: "PU"
  },
  spinda: {
    randomBattleMoves: ["doubleedge", "superpower", "suckerpunch", "rapidspin", "psychocut"],
    tier: "PU"
  },
  zangoose: {
    randomBattleMoves: ["facade", "closecombat", "knockoff", "quickattack", "swordsdance", "firepunch"],
    tier: "PU"
  },
  castform: {
    randomBattleMoves: ["weatherball", "thunder", "hurricane", "icebeam"],
    tier: "PU"
  },
  kecleon: {
    randomBattleMoves: ["thunderpunch", "drainpunch", "knockoff", "shadowsneak"],
    tier: "PU"
  },
  bibarel: {
    randomBattleMoves: ["swordsdance", "aquajet", "return", "liquidation", "pluck"],
    tier: "PU"
  },
  purugly: {
    randomBattleMoves: ["fakeout", "return", "uturn", "knockoff", "playrough"],
    tier: "PU"
  },
  watchog: {
    randomBattleMoves: ["swordsdance", "knockoff", "return", "firepunch", "gunkshot"],
    tier: "PU"
  },
  pyroar: {
    randomBattleMoves: ["fireblast", "hypervoice", "incinerate", "overheat", "darkpulse", "hiddenpowergrass"],
    tier: "PU"
  },
  gumshoos: {
    randomBattleMoves: ["trickoom", "uturn", "hyperfang", "firefang", "crunch", "earthquake"],
    tier: "PU"
  },
  muk: {
    randomBattleMoves: ["curse", "poisonjab", "firepunch", "rest", "sleeptalk"],
    tier: "PU"
  },
  seviper: {
    randomBattleMoves: ["glare", "sludgewave", "flamethrower", "morningsun", "gigadrain", "darkpulse"],
    tier: "PU"
  },
  deoxysattack: {
    randomBattleMoves: ["sludgebomb", "focusblast", "teleport", "psychoboost", "extremespeed", "hiddenpowerfire"],
    tier: "Uber"
  },
  hypno: {
    randomBattleMoves: ["swagger", "thunderwave", "zenheadbutt", "drainpunch"],
    tier: "PU"
  },
  unown: {
    randomBattleMoves: ["hiddenpower", "inverseroom"],
    tier: "PU"
  },
  grumpig: {
    randomBattleMoves: ["thunderwave", "psychic", "calmmind", "shadowball", "focusblast", "energyball"],
    tier: "PU"
  },
  chimecho: {
    randomBattleMoves: ["moonlight", "defog", "knockoff", "psychic", "taunt", "thunderwave"],
    tier: "PU"
  },
  bruxish: {
    randomBattleMoves: ["aquaticassault", "icefangs", "psychicfangs", "riverstream", "swordsdance", "aquajet"],
    tier: "NUBL"
  },
  magcargo: {
    randomBattleMoves: ["fireblast", "earthpower", "recover", "willowisp", "stealthrock", "solarbeam"],
    tier: "PU"
  },
  probopass: {
    randomBattleMoves: ["voltswitch", "stealthrock", "metalsound", "toxic", "taunt", "earthpower"],
    tier: "PU"
  },
  rampardos: {
    randomBattleMoves: ["headsmash", "firepunch", "icepunch", "thunderpunch", "mudslap", "zenheadbutt", "stealthrock"],
    tier: "PU"
  },
  bastiodon: {
    randomBattleMoves: ["shieldslam", "stealthrock", "irondefense", "rest", "sleeptalk", "toxic"],
    tier: "PU"
  },
  emboar: {
    randomBattleMoves: ["accelerock", "flareblitz", "headsmash", "earthquake", "thunderpunch", "stealthrock", "hottag"],
    tier: "NU"
  },
  aggronmega: {
    randomBattleMoves: ["bodypress", "heavyslam", "curse", "stealthrock", "earthquake"],
    tier: "NU"
  },
  feraligatr: {
    randomBattleMoves: ["dragondance", "liquidation", "icefang", "earthquake", "aquajet", "riverstream"],
    tier: "NU"
  },
  frogadier: {
    randomBattleMoves: ["hydropump", "riverstream", "icebeam", "darkpulse", "grassknot", "hiddenpowerfire"],
    tier: "PU"
  },
  luvdisc: {
    randomBattleMoves: ["sweetkiss", "attract", "whirlpool", "toxic"],
    tier: "PU"
  },
  prinplup: {
    tier: "PU"
  },
  lumineon: {
    randomBattleMoves: ["defog", "riverstream", "scald", "rinseoff"],
    tier: "PU"
  },
  inteleon: {
    randomBattleMoves: ["hydropump", "riverstream", "frostbreath", "flamebullet", "snipeshot", "focusenergy"],
    tier: "RU"
  },
  spectrier: {
    randomBattleMoves: ["shadowball", "taunt", "willowisp", "nastyplot", "substitute", "darkpulse"],
    tier: "OU"
  },
  primarina: {
    randomBattleMoves: ["hydropump", "moonblast", "psychic", "flipturn", "energyball", "hiddenpowerfire"],
    tier: "UU"
  },
  urshifu: {
    randomBattleMoves: ["suckerpunch", "wickedblow", "closecombat", "uturn", "icepunch"],
    tier: "Uber"
  },
  audinomega: {
    randomBattleMoves: ["incinerate", "drainingkiss", "calmmind", "wish", "protect", "thunderwave"],
    tier: "RU"
  },
  cameruptmega: {
    randomBattleMoves: ["stealthrock", "fireblast", "earthpower", "rockslide", "naturepower", "hiddenpowergrass"],
    tier: "RU"
  },
  nidoking: {
    randomBattleMoves: ["poisonjab", "earthquake", "icepunch", "suckerpunch", "thunderpunch", "stealthrock", "firepunch"],
    tier: "RU"
  },
  nidoqueen: {
    randomBattleMoves: ["sludgewave", "earthpower", "icebeam", "moonlight", "flamethrower", "toxicspikes", "hottag"],
    tier: "NU"
  },
  pheromosa: {
    randomBattleMoves: ["highjumpkick", "tripleaxel", "uturn", "bugbite", "rapidspin", "drillrun"],
    tier: "Uber"
  },
  arctovish: {
    randomBattleMoves: ["fishiousrend", "icefang", "iceshard", "riverstream", "rinseoff", "psychicfangs"],
    tier: "PU"
  },
  bisharp: {
    randomBattleMoves: ["knockoff", "stalwartsword", "suckerpunch", "swordsdance", "stealthrock", "taunt"],
    tier: "RU"
  },
  dracovish: {
    randomBattleMoves: ["fishiousrend", "riverstream", "dragonfang", "earthquake", "crunch", "psychicfangs"],
    tier: "OU"
  },
  xurkitree: {
    randomBattleMoves: ["sleeppowder", "ionabsorb", "energyball", "tailglow", "dazzlinggleam"],
    tier: "UUBL"
  },
  regigigas: {
    randomBattleMoves: ["crushgrip", "icepunch", "thunderpunch", "stoneedge", "poweruppunch", "knockoff"],
    tier: "Uber"
  },
  delcatty: {
    randomBattleMoves: ["batonpass", "moonlight", "thunderwave", "bodyslam"],
    tier: "PU"
  },
  regieleki: {
    randomBattleMoves: ["wildcharge", "voltswitch", "rapidspin", "thunderbolt", "lightscreen", "reflect"],
    tier: "UUBL"
  },
  kricketune: {
    randomBattleMoves: ["stickyweb", "bugbite", "brickbreak", "knockoff", "fellstinger"],
    tier: "PU"
  },
  araquanidtotem: {
    randomBattleMoves: ["lunge", "liquidation", "rest", "sleeptalk"],
    tier: "NU"
  },
  gumshoostotem: {
    randomBattleMoves: ["return", "earthquake", "firepunch", "uturn", "crunch", "zenheadbutt"],
    tier: "NU"
  },
  kommoototem: {
    randomBattleMoves: ["dragondance", "dualchop", "closecombat", "poisonjab", "icepunch"],
    tier: "OU"
  },
  lurantistotem: {
    randomBattleMoves: ["swordsdance", "petalblizzard", "brickbreak", "knockoff", "morningsun", "leafage"],
    tier: "PU"
  },
  marowakalolatotem: {
    randomBattleMoves: ["stealthrock", "shadowbone", "flareblitz", "bonemerang", "swordsdance", "thunderpunch"],
    tier: "UUBL"
  },
  mimikyutotem: {
    randomBattleMoves: ["swordsdance", "shadowclaw", "playrough", "drainpunch", "woodhammer"],
    tier: "RU"
  },
  raticatealolatotem: {
    randomBattleMoves: ["swordsdance", "knockoff", "suckerpunch", "doubleedge", "pluck", "quickattack"],
    tier: "PU"
  },
  ribombeetotem: {
    randomBattleMoves: ["quiverdance", "drainingkiss", "psychic", "bugbuzz", "stunspore", "hiddenpowerfire"],
    tier: "RU"
  },
  salazzletotem: {
    randomBattleMoves: ["nastyplot", "fireblast", "sludgewave", "dragonpulse", "hiddenpowergrass"],
    tier: "NUBL"
  },
  vikavolttotem: {
    randomBattleMoves: ["bugbuzz", "thunderbolt", "roost", "voltswitch", "flashcannon", "hiddenpowerice"],
    tier: "NU"
  },
  absol: {
    randomBattleMoves: ["knockoff", "suckerpunch", "closecombat", "psychocut", "stoneedge", "swordsdance"],
    tier: "PU"
  },
  aggron: {
    randomBattleMoves: ["heavyslam", "bodypress", "headsmash", "earthquake", "icepunch", "aquatail"],
    tier: "PU"
  },
  aromatisse: {
    randomBattleMoves: ["moonblast", "sludgebomb", "wish", "protect"],
    tier: "NU"
  },
  aurorus: {
    randomBattleMoves: ["hypervoice", "thunderbolt", "recrystalize", "earthpower", "freezedry", "powdersnow"],
    tier: "PU"
  },
  centiskorch: {
    randomBattleMoves: ["flamewheel", "firelash", "bugbite", "powerwhip", "coil"],
    tier: "PU"
  },
  clawitzer: {
    randomBattleMoves: ["hydropump", "focusblast", "flamebullet", "riverstream", "sludgebomb", "shadowball"],
    tier: "PU"
  },
  claydol: {
    randomBattleMoves: ["stealthrock", "rapidspin", "teleport", "earthpower", "icebeam", "toxic"],
    tier: "NU"
  },
  coalossal: {
    randomBattleMoves: ["rapidspin", "incinerate", "willowisp", "stealthrock", "bodypress"],
    tier: "PU"
  },
  comfey: {
    randomBattleMoves: ["drainingkiss", "calmmind", "synthesis", "hiddenpowerground"],
    tier: "NU"
  },
  cradily: {
    randomBattleMoves: ["stealthrock", "synthesis", "seedbomb", "earthquake", "toxic"],
    tier: "PU"
  },
  cramorant: {
    randomBattleMoves: ["surf", "riverstream", "jetstream", "roost", "hurricane", "defog"],
    tier: "PU"
  },
  druddigon: {
    randomBattleMoves: ["stealthrock", "dragontail", "firepunch", "morningsun", "glare", "gunkshot"],
    tier: "NU"
  },
  duraludon: {
    randomBattleMoves: ["stealthrock", "metalsound", "dracometeor", "thunderbolt", "bodypress"],
    tier: "NU"
  },
  eldegoss: {
    randomBattleMoves: ["slipstream", "gigadrain", "synthesis", "rapidspin", "sleeppowder", "leechseed"],
    tier: "NU"
  },
  exeggutoralola: {
    randomBattleMoves: ["trickroom", "sleeppowder", "leafstorm", "dracometeor", "flamethrower"],
    tier: "NU"
  },
  froslass: {
    randomBattleMoves: ["spikes", "tripleaxel", "poltergeist", "willowisp", "taunt", "iceshard", "destinybond"],
    tier: "NU"
  },
  gallade: {
    randomBattleMoves: ["bulkup", "drainpunch", "psychocut", "knockoff", "tripleaxel", "willowisp"],
    tier: "NU"
  },
  gastrodon: {
    randomBattleMoves: ["recover", "scald", "earthpower", "toxic", "icebeam", "yawn"],
    tier: "NU"
  },
  gurdurr: {
    randomBattleMoves: ["bulkup", "drainpunch", "machpunch", "knockoff", "icepunch", "hottag"],
    tier: "NU"
  },
  haunter: {
    randomBattleMoves: ["hauntingscream", "sludgewave", "willowisp", "dazzlinggleam", "destinybond"],
    tier: "PU"
  },
  hitmontop: {
    randomBattleMoves: ["doublekick", "machpunch", "rapidspin", "tripleaxel", "suckerpunch"],
    tier: "NU"
  },
  jellicent: {
    randomBattleMoves: ["strengthsap", "scald", "willowisp", "hex"],
    tier: "NU"
  },
  magmortar: {
    randomBattleMoves: ["flamebullet", "fireblast", "focusblast", "thunderbolt"],
    tier: "NU"
  },
  magneton: {
    randomBattleMoves: ["metalsound", "thunderbolt", "voltswitch", "hiddenpowerfire"],
    tier: "NU"
  },
  malamar: {
    randomBattleMoves: ["superpower", "knockoff", "psychocut", "pluck"],
    tier: "PU"
  },
  mesprit: {
    randomBattleMoves: ["uturn", "icebeam", "psychic", "moonblast", "nastyplot", "hiddenpowerfire"],
    tier: "NU"
  },
  miltank: {
    randomBattleMoves: ["bodyslam", "bodypress", "thunderwave", "milkdrink", "firepunch"],
    tier: "NU"
  },
  mudsdale: {
    randomBattleMoves: ["highhorsepower", "stealthrock", "toxic", "bodypress", "thunderclap"],
    tier: "PU"
  },
  ninjask: {
    randomBattleMoves: ["swordsdance", "dualwingbeat", "leechlife", "batonpass"],
    tier: "PU"
  },
  piloswine: {
    randomBattleMoves: ["stealthrock", "earthquake", "icefang", "iceshard", "freezedry"],
    tier: "PU"
  },
  rotom: {
    randomBattleMoves: ["nastyplot", "ionabsorb", "hex", "willowisp"],
    tier: "PU"
  },
  salazzle: {
    randomBattleMoves: ["toxic", "substitute", "flamethrower", "protect", "sludgebomb"],
    tier: "NUBL"
  },
  silvally: {
    randomBattleMoves: ["swordsdance", "multiattack", "earthquake", "knockoff"],
    tier: "PU"
  },
  silvallybug: {
    randomBattleMoves: ["swordsdance", "multiattack", "earthquake", "thunderclap"],
    tier: "PU"
  },
  silvallydark: {
    randomBattleMoves: ["knockoff", "pursuit", "partingshot", "ironhead"],
    tier: "PU"
  },
  silvallydragon: {
    randomBattleMoves: ["swordsdance", "multiattack", "flamecharge", "ironhead"],
    tier: "NU"
  },
  silvallyelectric: {
    randomBattleMoves: ["nastyplot", "thunderbolt", "icebeam", "recover"],
    tier: "PU"
  },
  silvallyfairy: {
    randomBattleMoves: ["multiattack", "recover", "partingshot", "defog"],
    tier: "RU"
  },
  silvallyfighting: {
    randomBattleMoves: ["multiattack", "swordsdance", "ironhead", "knockoff"],
    tier: "PU"
  },
  silvallyfire: {
    randomBattleMoves: ["multiattack", "flamecharge", "earthquake", "thunderclap"],
    tier: "PU"
  },
  silvallyflying: {
    randomBattleMoves: ["multiattack", "swordsdance", "earthquake", "recover"],
    tier: "PU"
  },
  silvallyghost: {
    randomBattleMoves: ["multiattack", "earthquake", "recover", "uturn"],
    tier: "NUBL"
  },
  silvallygrass: {
    randomBattleMoves: ["multiattack", "flamecharge", "swordsdance", "earthquake"],
    tier: "PU"
  },
  silvallyground: {
    randomBattleMoves: ["multiattack", "swordsdance", "recover", "pluck"],
    tier: "NU"
  },
  silvallyice: {
    randomBattleMoves: ["nastyplot", "icebeam", "flamethrower", "thunderbolt"],
    tier: "PU"
  },
  silvallypoison: {
    randomBattleMoves: ["multiattack", "firefang", "partingshot", "recover"],
    tier: "PU"
  },
  silvallypsychic: {
    randomBattleMoves: ["swordsdance", "multiattack", "knockoff", "earthquake"],
    tier: "PU"
  },
  silvallyrock: {
    randomBattleMoves: ["multiattack", "earthquake", "icefang", "partingshot"],
    tier: "PU"
  },
  silvallysteel: {
    randomBattleMoves: ["multiattack", "defog", "recover", "uturn"],
    tier: "RU"
  },
  silvallywater: {
    randomBattleMoves: ["multiattack", "toxic", "recover", "uturn"],
    tier: "NU"
  },
  sneasel: {
    randomBattleMoves: ["knockoff", "tripleaxel", "iceshard", "pursuit"],
    tier: "NU"
  },
  stunfisk: {
    randomBattleMoves: ["discharge", "earthpower", "stealthrock", "toxic", "scald", "riverstream"],
    tier: "PU"
  },
  stunfiskgalar: {
    randomBattleMoves: ["earthquake", "icefang", "stealthrock", "yawn", "stoneedge", "protect"],
    tier: "PU"
  },
  tauros: {
    randomBattleMoves: ["bodyslam", "ironhead", "earthquake", "fireblast"],
    tier: "PUBL"
  },
  thwackey: {
    tier: "NFE"
  },
  torkoal: {
    randomBattleMoves: ["incinerate", "solarbeam", "rapidspin", "stealthrock", "bodypress", "willowisp"],
    tier: "NU"
  },
  toxicroak: {
    randomBattleMoves: ["swordsdance", "gunkshot", "drainpunch", "earthquake", "hottag", "icepunch"],
    tier: "PU"
  },
  turtonator: {
    randomBattleMoves: ["willowisp", "bodypress", "rapidspin", "incinerate", "dragonpulse"],
    tier: "PU"
  },
  weezing: {
    randomBattleMoves: ["willowisp", "sludgebomb", "painsplit", "haze", "incinerate", "taunt"],
    tier: "PU"
  },
  whimsicott: {
    randomBattleMoves: ["moonblast", "synthesis", "stunspore", "uturn", "taunt", "encore", "leechseed"],
    tier: "NU"
  },
  xatu: {
    randomBattleMoves: ["teleport", "heatwave", "roost", "thunderwave", "haze"],
    tier: "PU"
  },
  basculin: {
    randomBattleMoves: ["aquaticassault", "aquajet", "icefang", "riverstream", "psychicfangs", "superpower"],
    tier: "NU"
  },
  basculinbluestriped: {
    randomBattleMoves: ["hydropump", "surf", "icebeam", "riverstream", "finalgambit", "hiddenpowerfire"],
    tier: "NU"
  },
  butterfree: {
    randomBattleMoves: ["sleeppowder", "hurricane", "bugbuzz", "energyball"],
    tier: "PU"
  },
  flapple: {
    randomBattleMoves: ["dragondance", "gravapple", "dragonfang", "suckerpunch", "dualwingbeat"],
    tier: "NU"
  },
  galvantula: {
    randomBattleMoves: ["stickyweb", "thunder", "bugbuzz", "energyball", "disable", "voltswitch"],
    tier: "PU"
  },
  guzzlord: {
    randomBattleMoves: ["vampirebite", "dragonfang", "heavyslam", "heatcrash", "earthquake"],
    tier: "PU"
  },
  kingler: {
    randomBattleMoves: ["swordsdance", "agility", "liquidation", "highhorsepower", "rockslide", "knockoff"],
    tier: "PU"
  },
  noctowl: {
    randomBattleMoves: ["nastyplot", "jetstream", "hypnosis", "hurricane", "heatwave", "moonlight"],
    tier: "PU"
  },
  orbeetle: {
    randomBattleMoves: ["uturn", "stickyweb", "moonlight", "bodypress", "bugbite"],
    tier: "PU"
  },
  rotomfrost: {
    randomBattleMoves: ["nastyplot", "blizzard", "ionabsorb", "willowisp", "painsplit"],
    tier: "PU"
  },
  sawk: {
    randomBattleMoves: ["closecombat", "icepunch", "knockoff", "hottag", "earthquake", "poisonjab"],
    tier: "PU"
  },
  thievul: {
    randomBattleMoves: ["nastyplot", "partingshot", "darkpulse", "burningjealousy", "psychic", "grassknot"],
    tier: "PU"
  },
  accelgor: {
    randomBattleMoves: ["spikes", "finalgambit", "bugbuzz", "darkpulse", "hiddenpowerpoison", "uturn"],
    tier: "NU"
  },
  alcremie: {
    randomBattleMoves: ["fairywind", "dazzlinggleam", "mysticalfire", "psychic", "recover", "hyperbeam"],
    tier: "NU"
  },
  altaria: {
    randomBattleMoves: ["slipstream", "pluck", "roost", "fireblast", "toxic", "healbell"],
    tier: "NU"
  },
  appletun: {
    randomBattleMoves: ["appleacid", "bodypress", "synthesis", "irondefense", "leechseed", "dracometeor"],
    tier: "PU"
  },
  avalugg: {
    randomBattleMoves: ["icefang", "bodypress", "recover", "rapidspin", "irondefense", "toxic"],
    tier: "PU"
  },
  carbink: {
    randomBattleMoves: ["fairylock", "irondefense", "bodypress", "moonlight"],
    tier: "PU"
  },
  carracosta: {
    randomBattleMoves: ["shellsmash", "aquaticassault", "aquajet", "stoneedge", "earthquake", "knockoff"],
    tier: "PU"
  },
  clefairy: {
    randomBattleMoves: ["moonblast", "incinerate", "moonlight", "stealthrock", "teleport", "toxic"],
    tier: "NFE"
  },
  combusken: {
    randomBattleMoves: ["protect", "fireblast", "focusblast", "hiddenpowerelectric", "hottag"],
    tier: "PU"
  },
  corsolagalar: {
    randomBattleMoves: ["hauntingscream", "strengthsap", "willowisp", "stealthrock"],
    tier: "NU"
  },
  ditto: {
    randomBattleMoves: ["transform", "mimic"],
    tier: "PU"
  },
  drampa: {
    randomBattleMoves: ["dracometeor", "hypervoice", "roost", "fireblast", "thunderbolt", "surf"],
    tier: "PU"
  },
  drifblim: {
    randomBattleMoves: ["strengthsap", "souldrain", "willowisp", "thunderbolt", "calmmind", "psychic"],
    tier: "NU"
  },
  dugtrioalola: {
    randomBattleMoves: ["stealthrock", "earthquake", "ironhead", "suckerpunch", "memento", "stoneedge"],
    tier: "PU"
  },
  dusknoir: {
    randomBattleMoves: ["shadowpunch", "drainpunch", "shadowsneak", "icepunch", "earthquake", "poweruppunch"],
    tier: "NU"
  },
  ferroseed: {
    randomBattleMoves: ["seedbomb", "knockoff", "stealthrock", "thunderwave"],
    tier: "PU"
  },
  flareon: {
    randomBattleMoves: ["flareblitz", "quickattack", "doublekick", "thunderfang"],
    tier: "PU"
  },
  frosmoth: {
    randomBattleMoves: ["icebeam", "bugbuzz", "quiverdance", "moonlight"],
    tier: "PU"
  },
  garbodor: {
    randomBattleMoves: ["gunkshot", "bodypress", "recrystalize", "toxicspikes", "spikes", "ironhead"],
    tier: "NU"
  },
  golbat: {
    randomBattleMoves: ["bravebird", "poisonfang", "acidmelt", "uturn", "roost", "vampirebite"],
    tier: "PU"
  },
  gourgeistsmall: {
    randomBattleMoves: ["poltergeist", "powerwhip", "gigaimpact", "shadowsneak", "willowisp", "astonish"],
    tier: "NU"
  },
  gourgeist: {
    randomBattleMoves: ["poltergeist", "powerwhip", "gigaimpact", "astonish", "willowisp", "flamecharge"],
    tier: "PU"
  },
  gourgeistsuper: {
    randomBattleMoves: ["poltergeist", "seedbomb", "synthesis", "shadowsneak", "willowisp", "incinerate"],
    tier: "NU"
  },
  gourgeistlarge: {
    randomBattleMoves: ["poltergeist", "powerwhip", "synthesis", "shadowsneak", "willowisp", "leechseed"],
    tier: "PU"
  },
  hitmonchan: {
    randomBattleMoves: ["closecombat", "hottag", "shadowpunch", "rapidspin", "icepunch", "machpunch"],
    tier: "NU"
  },
  jynx: {
    randomBattleMoves: ["lovelykiss", "icebeam", "psychic", "focusblast", "nastyplot", "teleport"],
    tier: "PU"
  },
  kadabra: {
    randomBattleMoves: ["teleport", "psychic", "shadowball", "dazzlinggleam"],
    tier: "PUBL"
  },
  kangaskhan: {
    randomBattleMoves: ["fakeout", "doubleedge", "suckerpunch", "earthquake", "firepunch", "drainpunch"],
    tier: "PU"
  },
  lickilicky: {
    randomBattleMoves: ["bodyslam", "wish", "protect", "knockoff", "dragontail", "healbell", "bodypress"],
    tier: "NU"
  },
  liepard: {
    randomBattleMoves: ["knockoff", "seedbomb", "gunkshot", "uturn", "thunderwave", "encore"],
    tier: "PU"
  },
  ludicolo: {
    randomBattleMoves: ["scald", "rinseoff", "leechseed", "gigadrain", "icebeam", "toxic"],
    tier: "PU"
  },
  lurantis: {
    randomBattleMoves: ["guillotine", "leafstorm", "synthesis", "defog"],
    tier: "PU"
  },
  perrserker: {
    randomBattleMoves: ["ironhead", "icefang", "uturn", "closecombat", "seedbomb", "thunderfang"],
    tier: "PU"
  },
  ninetales: {
    randomBattleMoves: ["nastyplot", "fireblast", "scorchingsands", "solarbeam", "willowisp"],
    tier: "NU"
  },
  persianalola: {
    randomBattleMoves: ["knockoff", "partingshot", "toxic", "taunt", "foulplay"],
    tier: "PU"
  },
  persian: {
    randomBattleMoves: ["nastyplot", "round", "bubblebeam", "uturn", "shockwave", "icywind"],
    tier: "PU"
  },
  pinsir: {
    randomBattleMoves: ["bugbite", "earthquake", "closecombat", "quickattack", "swordsdance"],
    tier: "PU"
  },
  poliwrath: {
    randomBattleMoves: ["aquaticassault", "hottag", "icepunch", "closecombat", "poisonjab", "earthquake"],
    tier: "PU"
  },
  quagsire: {
    randomBattleMoves: ["riverstream", "earthquake", "scald", "recover", "toxic"],
    tier: "PU"
  },
  qwilfish: {
    randomBattleMoves: ["swordsdance", "aquaticassault", "poisonjab", "taunt", "aquajet", "fellstinger"],
    tier: "PU"
  },
  rapidash: {
    randomBattleMoves: ["swordsdance", "flareblitz", "fairycharge", "wildcharge", "highhorsepower", "morningsun"],
    tier: "NU"
  },
  rapidashgalar: {
    randomBattleMoves: ["swordsdance", "zenheadbutt", "fairycharge", "wildcharge", "highhorsepower", "morningsun", "teleport"],
    tier: "PU"
  },
  runerigus: {
    randomBattleMoves: ["astonish", "poltergeist", "earthquake", "bodypress", "stealthrock", "willowisp"],
    tier: "PU"
  },
  sableye: {
    randomBattleMoves: ["taunt", "moonlight", "willowisp", "knockoff", "encore"],
    tier: "PU"
  },
  sandaconda: {
    randomBattleMoves: ["morningsun", "glare", "stealthrock", "earthquake", "firefang", "bodypress"],
    tier: "NU"
  },
  sandslash: {
    randomBattleMoves: ["swordsdance", "earthqauke", "knockoff", "leechlife", "rapidspin", "spikes"],
    tier: "PU"
  },
  shuckle: {
    randomBattleMoves: ["shieldslam", "stickyweb", "stealthrock", "bugbite", "toxic", "encore"],
    tier: "RU"
  },
  skuntank: {
    randomBattleMoves: ["pursuit", "crunch", "poisonjab", "defog", "suckerpunch", "playrough"],
    tier: "PU"
  },
  spiritomb: {
    randomBattleMoves: ["phantomforce", "willowisp", "suckerpunch", "pursuit", "painsplit", "shadowsneak"],
    tier: "NU"
  },
  tangela: {
    randomBattleMoves: ["gigadrain", "morningsun", "sleeppowder", "knockoff", "leechseed"],
    tier: "PU"
  },
  throh: {
    randomBattleMoves: ["circlethrow", "toxic", "hottag", "knockoff"],
    tier: "PU"
  },
  armaldo: {
    randomBattleMoves: ["rapidspin", "bugbite", "stoneedge", "earthquake", "stealthrock"],
    tier: "PU"
  },
  beartic: {
    randomBattleMoves: ["swordsdance", "icefang", "closecombat", "aquajet", "playrough"],
    tier: "PUBL"
  },
  bellossom: {
    randomBattleMoves: ["sleeppowder", "strengthsap", "gigadrain", "quiverdance", "hiddenpowerfire"],
    tier: "PU"
  },
  bouffalant: {
    randomBattleMoves: ["swordsdance", "headcharge", "closecombat", "earthquake", "lashout", "wildcharge"],
    tier: "PU"
  },
  calyrex: {
    randomBattleMoves: ["seedbomb", "substitute", "encore", "protect"],
    tier: "PU"
  },
  cherrim: {
    randomBattleMoves: ["swordsdance", "stormstrike", "sunnyday", "solarblade"],
    tier: "PU"
  },
  corsola: {
    randomBattleMoves: ["recover", "stealthrock", "scald", "magiccoat", "toxic"],
    tier: "PU"
  },
  cursola: {
    randomBattleMoves: ["strengthsap", "hauntingscream", "riverstream", "earthpower", "icebeam", "hydropump"],
    tier: "PU"
  },
  crustle: {
    randomBattleMoves: ["spikes", "stealthrock", "shellsmash", "stoneedge", "earthquake", "bugbite"],
    tier: "NU"
  },
  dedenne: {
    randomBattleMoves: ["thunderbolt", "dazzlinggleam", "grassknot", "voltswitch", "hiddenpowerice", "superfang"],
    tier: "RU"
  },
  delibird: {
    randomBattleMoves: ["tripleaxel", "bravebird", "iceshard", "drillrun", "spikes", "thunderpunch"],
    tier: "PU"
  },
  drednaw: {
    randomBattleMoves: ["swordsdance", "stoneedge", "aquaticassault", "earthquake", "riverstream", "icefang"],
    tier: "PU"
  },
  dubwool: {
    randomBattleMoves: ["cottonguard", "bodypress", "bodyslam", "rest"],
    tier: "PU"
  },
  dugtrio: {
    randomBattleMoves: ["stealthrock", "earthquake", "stoneedge", "memento"],
    tier: "PU"
  },
  dunsparce: {
    randomBattleMoves: ["glare", "bodyslam", "coil", "roost", "earthquake", "rockslide"],
    tier: "PU"
  },
  eiscue: {
    randomBattleMoves: ["bellydrum", "icepunch", "aquaticassault", "thunderpunch"],
    tier: "PU"
  },
  falinks: {
    randomBattleMoves: ["noretreat", "closecombat", "stalwartsword", "fellstinger", "rockslide"],
    tier: "PU"
  },
  farfetchd: {
    randomBattleMoves: ["swordsdance", "skullbash", "skyattack", "knockoff", "quickattack"],
    tier: "PU"
  },
  glalie: {
    randomBattleMoves: ["icefang", "taunt", "spikes", "explosion"],
    tier: "PU"
  },
  golduck: {
    randomBattleMoves: ["hydropump", "riverstream", "icebeam", "psychic"],
    tier: "PU"
  },
  gothitelle: {
    randomBattleMoves: ["expandingforce", "nastyplot", "signalbeam", "trickroom"],
    tier: "NUBL"
  },
  grapploct: {
    randomBattleMoves: ["riverstream", "skyuppercut", "aquajet", "rinseoff", "suckerpunch", "stompingtantrum"],
    tier: "NU"
  },
  greedent: {
    randomBattleMoves: ["bodyslam", "seedbomb", "bodypress", "stuffcheeks"],
    tier: "PU"
  },
  heatmor: {
    randomBattleMoves: ["flamebullet", "fireblast", "gigadrain", "hiddenpowerice"],
    tier: "PU"
  },
  lapras: {
    randomBattleMoves: ["rinseoff", "freezedry", "surf", "riverstream"],
    tier: "PU"
  },
  lilligant: {
    randomBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerground", "quiverdance"],
    tier: "PU"
  },
  lopunny: {
    randomBattleMoves: ["megakick", "highjumpkick", "tripleaxel", "uturn"],
    tier: "PU"
  },
  lunatone: {
    randomBattleMoves: ["nastyplot", "weatherball", "earthpower", "moonblast", "psychic", "moonlight"],
    tier: "NU"
  },
  luxray: {
    randomBattleMoves: ["thunderfang", "crunch", "suckerpunch", "icefang", "superpower", "swordsdance"],
    tier: "NU"
  },
  lycanrocmidnight: {
    randomBattleMoves: ["swordsdance", "accelerock", "knockoff", "stoneedge", "closecombat", "icefang"],
    tier: "PUBL"
  },
  manectric: {
    randomBattleMoves: ["ionabsorb", "voltswitch", "overheat", "hiddenpowerice"],
    tier: "PU"
  },
  marowak: {
    randomBattleMoves: ["swordsdance", "mudslap", "bonemerang", "icepunch"],
    tier: "PU"
  },
  mawile: {
    randomBattleMoves: ["swordsdance", "knockoff", "fairycharge", "suckerpunch", "firepunch"],
    tier: "PU"
  },
  meltan: {
    tier: "NFE"
  },
  meowstic: {
    randomBattleMoves: ["lightscreen", "reflect", "yawn", "psychic"],
    tier: "PU"
  },
  meowsticf: {
    randomBattleMoves: ["nastyplot", "psychic", "thunderbolt", "shadowball", "energyball", "hiddenpowerfire"],
    tier: "PU"
  },
  mrmime: {
    randomBattleMoves: ["teleport", "dazzlinggleam", "focusblast", "shadowball", "nastyplot"],
    tier: "PU"
  },
  mrrime: {
    randomBattleMoves: ["teleport", "rapidspin", "freezedry", "focusblast", "toxic"],
    tier: "PU"
  },
  musharna: {
    randomBattleMoves: ["moonblast", "toxic", "moonlight", "teleport"],
    tier: "RU"
  },
  octillery: {
    randomBattleMoves: ["hydropump", "flamebullet", "flashcannon", "sludgebomb", "fireblast"],
    tier: "NU"
  },
  oranguru: {
    randomBattleMoves: ["nastyplot", "psyshock", "focusblast", "painsplit"],
    tier: "NU"
  },
  pikachu: {
    randomBattleMoves: ["volttackle", "extremespeed", "fakeout", "firepunch", "hottag", "knockoff"],
    tier: "PU"
  },
  pincurchin: {
    randomBattleMoves: ["risingvoltage", "rinseoff", "scald", "toxicspikes"],
    tier: "PU"
  },
  pyukumuku: {
    randomBattleMoves: ["block", "toxic", "soak", "rinseoff"],
    tier: "PU"
  },
  relicanth: {
    randomBattleMoves: ["headsmash", "aquaticassault", "earthquake", "bodypress", "zenheadbutt", "stealthrock"],
    tier: "PU"
  },
  seaking: {
    randomBattleMoves: ["swordsdance", "aquaticassault", "megahorn", "riverstream", "knockoff", "drillrun"],
    tier: "PU"
  },
  shedinja: {
    randomBattleMoves: ["swordsdance", "poltergeist", "willowisp", "bugbite"],
    tier: "PU"
  },
  shiinotic: {
    randomBattleMoves: ["spore", "strengthsap", "gigadrain", "moonblast"],
    tier: "PU"
  },
  solrock: {
    randomBattleMoves: ["stoneedge", "morningsun", "stealthrock", "willowisp", "stormstrike"],
    tier: "RU"
  },
  stonjourner: {
    randomBattleMoves: ["stoneedge", "highhorsepower", "stealthrock", "heatcrash"],
    tier: "NU"
  },
  stoutland: {
    randomBattleMoves: ["swordsdance", "return", "earthquake", "wildcharge", "icefang"],
    tier: "PU"
  },
  sudowoodo: {
    randomBattleMoves: ["headsmash", "woodhammer", "suckerpunch", "earthquake"],
    tier: "PU"
  },
  swoobat: {
    randomBattleMoves: ["calmmind", "storedpower", "heatwave", "roost"],
    tier: "PU"
  },
  trevenant: {
    randomBattleMoves: ["seedbomb", "poltergeist", "earthquake", "leafage", "poweruppunch", "drainpunch"],
    tier: "PU"
  },
  vespiquen: {
    randomBattleMoves: ["bugbite", "uturn", "healorder", "toxicspikes", "defog", "poisonjab"],
    tier: "NU"
  },
  wailord: {
    randomBattleMoves: ["aquaticassault", "earthquake", "waterspout", "icebeam"],
    tier: "PU"
  },
  walrein: {
    randomBattleMoves: ["curse", "icefang", "rest", "sleeptalk"],
    tier: "PU"
  },
  whiscash: {
    randomBattleMoves: ["dragondance", "aquaticassault", "earthquake", "riverstream", "stoneedge", "spark"],
    tier: "PU"
  },
  wigglytuff: {
    randomBattleMoves: ["seismictoss", "teleport", "moonlight", "stealthrock", "thunderwave", "incinerate"],
    tier: "NU"
  },
  wobbuffet: {
    randomBattleMoves: ["counter", "mirrorcoat", "encore", "destinybond"],
    tier: "PU"
  },
  drakloak: {
    randomBattleMoves: ["dragondance", "outrage", "shadowcharge", "steelwing"],
    tier: "PUBL"
  },
  kubfu: {
    randomBattleMoves: ["closecombat", "icepunch", "uturn", "ironhead"],
    tier: "PU"
  },
  togetic: {
    tier: "NFE"
  },
  typenull: {
    randomBattleMoves: ["swordsdance", "return", "sleeptalk", "rest"],
    tier: "PUBL"
  },
  zweillous: {
    randomBattleMoves: ["dragonfang", "crunch", "firefang", "zenheadbutt", "astonish"],
    tier: "PU"
  },
  poipole: {
    tier: "LC"
  },
  gothita: {
    tier: "LC"
  },
  luxio: {
    randomBattleMoves: ["risingvoltage", "hiddenpowerice", "signalbeam", "voltswitch"],
    tier: "PU"
  },
  sliggoo: {
    randomBattleMoves: ["rinseoff", "infestation", "dragonrage", "toxic"],
    tier: "PU"
  },
  illumise: {
    randomBattleMoves: ["uturn", "moonlight", "bugbuzz", "thunderwave", "encore", "aromatherapy"],
    tier: "PU"
  },
  deoxysspeed: {
    randomBattleMoves: ["gunkshot", "superpower", "firepunch", "teleport", "knockoff", "icepunch"],
    tier: "Uber"
  },
  diancie: {
    randomBattleMoves: ["diamondstorm", "bodypress", "toxic", "stealthrock", "moonlight"],
    tier: "RU"
  },
  crobat: {
    randomBattleMoves: ["pluck", "poisonfang", "defog", "uturn", "roost", "taunt"],
    tier: "NU"
  },
  tentacruel: {
    randomBattleMoves: ["scald", "sludgebomb", "haze", "toxicspikes", "rapidspin", "knockoff"],
    tier: "UU"
  },
  arcanine: {
    randomBattleMoves: ["extremespeed", "flareblitz", "closecombat", "wildcharge", "willowisp", "morningsun", "teleport"],
    tier: "NU"
  },
  darmanitan: {
    randomBattleMoves: ["thunderpunch", "flareblitz", "uturn", "earthquake", "superpower", "rockslide"],
    tier: "UU"
  },
  darmanitangalar: {
    randomBattleMoves: ["icepunch", "flareblitz", "uturn", "earthquake", "superpower", "ironhead"],
    tier: "Uber"
  },
  entei: {
    randomBattleMoves: ["extremespeed", "sacredfire", "stompingtantrum", "thunderfang", "flamewheel", "ironhead"],
    tier: "RU"
  },
  sylveon: {
    randomBattleMoves: ["moonblast", "fairywind", "mysticalfire", "psyshock"],
    tier: "RU"
  },
  glaceon: {
    randomBattleMoves: ["auroraveil", "blizzard", "hiddenpowerfighting", "signalbeam", "recrystalize", "freezedry"],
    tier: "NU"
  },
  swampert: {
    randomBattleMoves: ["earthquake", "flipturn", "stealthrock", "toxic", "scald", "roar"],
    tier: "UU"
  },
  abomasnow: {
    randomBattleMoves: ["auroraveil", "blizzard", "powdersnow", "gigadrain", "synthesis", "hiddenpowerfire"],
    tier: "PU"
  },
  aerodactyl: {
    randomBattleMoves: ["dualwingbeat", "dragondance", "stoneedge", "earthquake", "stealthrock", "taunt"],
    tier: "NU"
  },
  araquanid: {
    randomBattleMoves: ["aquaticassault", "stickyweb", "riverstream", "bugbite"],
    tier: "NU"
  },
  barbaracle: {
    randomBattleMoves: ["shellsmash", "aquaticassault", "crosschop", "grassknot", "poisonjab", "stoneedge"],
    tier: "NUBL"
  },
  bewear: {
    randomBattleMoves: ["swordsdance", "closecombat", "doubleedge", "icepunch", "earthquake", "darkestlariat"],
    tier: "NU"
  },
  incineroar: {
    randomBattleMoves: ["knockoff", "hottag", "willowisp", "flareblitz"],
    tier: "RU"
  },
  bronzong: {
    randomBattleMoves: ["gyroball", "stealthrock", "toxic", "bodypress"],
    tier: "NU"
  },
  copperajah: {
    randomBattleMoves: ["heavyslam", "heatcrash", "powerwhip", "earthquake", "stoneedge", "stealthrock"],
    tier: "PU"
  },
  decidueye: {
    randomBattleMoves: ["swordsdance", "leafblade", "astonish", "shadowsneak", "synthesis", "poltergeist"],
    tier: "NU"
  },
  dhelmise: {
    randomBattleMoves: ["poltergeist", "powerwhip", "synthesis", "anchorshot", "rapidspin", "earthquake"],
    tier: "NU"
  },
  doublade: {
    randomBattleMoves: ["swordsdance", "stalwartsword", "shadowsneak", "sacredsword"],
    tier: "NU"
  },
  dragalge: {
    randomBattleMoves: ["acidmelt", "flipturn", "dracometeor", "thunderbolt", "toxicspikes"],
    tier: "NU"
  },
  drapion: {
    randomBattleMoves: ["poisonfang", "swordsdance", "knockoff", "icefang", "earthquake", "taunt"],
    tier: "PU"
  },
  exploud: {
    randomBattleMoves: ["boomburst", "hauntingscream", "fireblast", "surf"],
    tier: "NU"
  },
  gardevoir: {
    randomBattleMoves: ["psychic", "moonblast", "mysticalfire", "willowisp", "healingwish", "taunt"],
    tier: "NU"
  },
  golurk: {
    randomBattleMoves: ["earthquake", "poltergeist", "closecombat", "stealthrock", "icepunch", "mudslap"],
    tier: "NU"
  },
  hitmonlee: {
    randomBattleMoves: ["highjumpkick", "rapidspin", "hottag", "earthquake", "knockoff", "stoneedge"],
    tier: "PUBL"
  },
  indeedee: {
    randomBattleMoves: ["expandingforce", "hypervoice", "mysticalfire", "dazzlinggleam", "trick", "energyball"],
    tier: "RU"
  },
  indeedeef: {
    randomBattleMoves: ["expandingforce", "hypervoice", "mysticalfire", "dazzlinggleam", "healingwish", "energyball"],
    tier: "NU"
  },
  kabutops: {
    randomBattleMoves: ["aquaticassault", "swordsdance", "aquajet", "stoneedge", "leechlife", "knockoff"],
    tier: "PU"
  },
  omastar: {
    randomBattleMoves: ["shellsmash", "meteorbeam", "earthpower", "hydropump"],
    tier: "PU"
  },
  klefki: {
    randomBattleMoves: ["lightscreen", "reflect", "metalsound", "thunderwave", "foulplay", "swagger"],
    tier: "NU"
  },
  linoone: {
    randomBattleMoves: ["extremespeed", "bellydrum", "throatchop", "seedbomb"],
    tier: "PU"
  },
  lucario: {
    randomBattleMoves: ["closecombat", "meteormash", "extremespeed", "swordsdance", "crunch", "icepunch"],
    tier: "RU"
  },
  machamp: {
    randomBattleMoves: ["dynamicpunch", "knockoff", "stoneedge", "earthquake", "hottag", "poisonjab"],
    tier: "NU"
  },
  mantine: {
    randomBattleMoves: ["scald", "defog", "toxic", "roost", "hurricane", "seedbomb"],
    tier: "RU"
  },
  necrozma: {
    randomBattleMoves: ["photongeyser", "dragondance", "knockoff", "earthquake", "crosschop", "moonlight"],
    tier: "NU"
  },
  necrozmaduskmane: {
    randomBattleMoves: ["sunsteelstrike", "dragondance", "morningsun", "earthquake"],
    tier: "Uber"
  },
  necrozmadawnwings: {
    randomBattleMoves: ["moongeistbeam", "moonlight", "nastyplot", "earthpower"],
    tier: "Uber"
  },
  solgaleo: {
    randomBattleMoves: ["sunsteelstrike", "teleport", "flareblitz", "earthquake", "knockoff", "wildcharge"],
    tier: "Uber"
  },
  lunala: {
    randomBattleMoves: ["moongeistbeam", "moonlight", "willowisp", "calmmind", "teleport", "moonblast"],
    tier: "Uber"
  },
  noivern: {
    randomBattleMoves: ["dracometeor", "boomburst", "flamethrower", "uturn", "taunt", "defog", "hurricane"],
    tier: "NU"
  },
  obstagoon: {
    randomBattleMoves: ["facade", "knockoff", "closecombat", "obstruct"],
    tier: "NU"
  },
  pangoro: {
    randomBattleMoves: ["closecombat", "knockoff", "bulletpunch", "partingshot", "swordsdance", "gunkshot"],
    tier: "NU"
  },
  politoed: {
    randomBattleMoves: ["scald", "riverstream", "toxic", "icebeam", "earthpower", "haze"],
    tier: "RU"
  },
  polteageist: {
    randomBattleMoves: ["souldrain", "storedpower", "shellsmash", "gigadrain"],
    tier: "NU"
  },
  raikou: {
    randomBattleMoves: ["thunderbolt", "aurasphere", "hiddenpowergrass", "scald", "voltswitch", "calmmind"],
    tier: "RU"
  },
  reuniclus: {
    randomBattleMoves: ["psyshock", "focusblast", "recover", "acidarmor", "calmmind", "trickroom"],
    tier: "NUBL"
  },
  rotommow: {
    randomBattleMoves: ["nastyplot", "ionabsorb", "leafstorm", "willowisp", "defog", "painsplit"],
    tier: "RU"
  },
  passimian: {
    randomBattleMoves: ["closecombat", "hottag", "seedbomb", "earthquake", "knockoff", "ironhead"],
    tier: "NU"
  },
  scrafty: {
    randomBattleMoves: ["knockoff", "bulkup", "drainpunch", "substitute", "icepunch", "poisonjab"],
    tier: "NU"
  },
  seismitoad: {
    randomBattleMoves: ["riverstream", "stealthrock", "scald", "earthquake", "rinseoff", "knockoff"],
    tier: "NU"
  },
  shiftry: {
    randomBattleMoves: ["nastyplot", "heatwave", "energyball", "darkpulse", "suckerpunch", "hurricane"],
    tier: "PU"
  },
  sharpedo: {
    randomBattleMoves: ["protect", "aquaticassault", "crunch", "closecombat"],
    tier: "PUBL"
  },
  sigilyph: {
    randomBattleMoves: ["jetstream", "psychic", "aurasphere", "airslash", "energyball", "defog", "dazzlinggleam"],
    tier: "NU"
  },
  slurpuff: {
    randomBattleMoves: ["bellydrum", "fairycharge", "drainpunch", "facade"],
    tier: "NU"
  },
  snorlax: {
    randomBattleMoves: ["return", "earthquake", "crunch", "heatcrash", "curse", "icepunch"],
    tier: "NU"
  },
  steelix: {
    randomBattleMoves: ["shieldslam", "bodypress", "earthquake", "recrystalize", "stealthrock", "irondefense"],
    tier: "NU"
  },
  talonflame: {
    randomBattleMoves: ["dualwingbeat", "slipstream", "swordsdance", "flareblitz", "willowisp", "taunt"],
    tier: "PU"
  },
  tsareena: {
    randomBattleMoves: ["tropkick", "highjumpkick", "knockoff", "uturn", "rapidspin", "synthesis", "tripleaxel"],
    tier: "NU"
  },
  tyrantrum: {
    randomBattleMoves: ["headsmash", "dragondance", "dragonfang", "icefang", "firefang", "poisonfang"],
    tier: "NU"
  },
  umbreon: {
    randomBattleMoves: ["foulplay", "toxic", "moonlight", "healbell"],
    tier: "NU"
  },
  vikavolt: {
    randomBattleMoves: ["ionabsorb", "roost", "bugbuzz", "energyball", "voltswitch", "stickyweb"],
    tier: "NU"
  },
  vanilluxe: {
    randomBattleMoves: ["auroraveil", "blizzard", "hiddenpowerfire", "freezedry", "powdersnow", "recrystalize"],
    tier: "RU"
  },
  naganadel: {
    randomBattleMoves: ["nastyplot", "sludgewave", "dracometeor", "flamethrower", "spikes", "uturn"],
    tier: "Uber"
  },
  vensaur: {
    randomBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "leechseed", "hiddenpowerfire", "synthesis"],
    tier: "NU"
  },
  vileplume: {
    randomBattleMoves: ["gigadrain", "sludgebomb", "strengthsap", "leechseed", "sleeppowder", "hiddenpowerfire"],
    tier: "NU"
  },
  zarude: {
    randomBattleMoves: ["seedbomb", "darkestlariat", "closecombat", "uturn", "leafage", "irontail"],
    tier: "RU"
  },
  weezinggalar: {
    randomBattleMoves: ["strangesteam", "defog", "willowisp", "incinerate", "toxicspikes", "taunt"],
    tier: "NU"
  },
  virizion: {
    randomBattleMoves: ["leafblade", "sacredsword", "stoneedge", "psychocut", "swordsdance", "taunt"],
    tier: "RU"
  },
  zoroark: {
    randomBattleMoves: ["nastyplot", "nightdaze", "sludgebomb", "incinerate", "suckerpunch", "extransensory"],
    tier: "NU"
  },
  zygarde10: {
    randomBattleMoves: ["dragondance", "extremespeed", "thousandarrows", "superpower", "dragonfang", "glare"],
    tier: "RU"
  },
  zygarde: {
    randomBattleMoves: ["coil", "extremespeed", "thousandarrows", "crunch", "dragonfang", "glare"],
    tier: "Uber"
  },
  rhydon: {
    randomBattleMoves: ["stoneedge", "earthquake", "icefang", "stealthrock", "mudslap", "swordsdance", "megahorn"],
    tier: "PUBL"
  },
  abra: {
    tier: "PU"
  },
  elgyem: {
    tier: "PUBL"
  },
  hattrem: {
    tier: "PUBL"
  },
  klang: {
    tier: "PUBL"
  }
  /* Leaving this commented out still allows the random team builder to roll a normal Zygarde with Power Construct
  zygardecomplete: {
  	randomBattleMoves: ["coil", "extremespeed", "thousandarrows", "crunch", "dragonfang", "glare"],
  	tier: "Uber",
  },
  */
};
//# sourceMappingURL=formats-data.js.map
