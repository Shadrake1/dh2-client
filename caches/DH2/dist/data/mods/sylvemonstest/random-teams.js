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
var random_teams_exports = {};
__export(random_teams_exports, {
  RandomTeams: () => RandomTeams,
  default: () => random_teams_default
});
module.exports = __toCommonJS(random_teams_exports);
var import_dex = require("../../../sim/dex");
var import_prng = require("../../../sim/prng");
class RandomTeams {
  constructor(format, prng) {
    format = import_dex.Dex.formats.get(format);
    this.dex = import_dex.Dex.forFormat(format);
    this.gen = this.dex.gen;
    this.factoryTier = "";
    this.format = format;
    this.prng = prng && !Array.isArray(prng) ? prng : new import_prng.PRNG(prng);
  }
  setSeed(prng) {
    this.prng = prng && !Array.isArray(prng) ? prng : new import_prng.PRNG(prng);
  }
  getTeam(options) {
    const generatorName = typeof this.format.team === "string" && this.format.team.startsWith("random") ? this.format.team + "Team" : "";
    return this[generatorName || "randomTeam"](options);
  }
  randomChance(numerator, denominator) {
    return this.prng.randomChance(numerator, denominator);
  }
  sample(items) {
    return this.prng.sample(items);
  }
  random(m, n) {
    return this.prng.next(m, n);
  }
  /**
   * Remove an element from an unsorted array significantly faster
   * than .splice
   */
  fastPop(list, index) {
    const length = list.length;
    const element = list[index];
    list[index] = list[length - 1];
    list.pop();
    return element;
  }
  /**
   * Remove a random element from an unsorted array and return it.
   * Uses the battle's RNG if in a battle.
   */
  sampleNoReplace(list) {
    const length = list.length;
    const index = this.random(length);
    return this.fastPop(list, index);
  }
  // checkAbilities(selectedAbilities, defaultAbilities) {
  // 	if (!selectedAbilities.length) return true;
  // 	const selectedAbility = selectedAbilities.pop();
  // 	const isValid = false;
  // 	for (const i = 0; i < defaultAbilities.length; i++) {
  // 		const defaultAbility = defaultAbilities[i];
  // 		if (!defaultAbility) break;
  // 		if (defaultAbility.includes(selectedAbility)) {
  // 			defaultAbilities.splice(i, 1);
  // 			isValid = this.checkAbilities(selectedAbilities, defaultAbilities);
  // 			if (isValid) break;
  // 			defaultAbilities.splice(i, 0, defaultAbility);
  // 		}
  // 	}
  // 	if (!isValid) selectedAbilities.push(selectedAbility);
  // 	return isValid;
  // }
  // hasMegaEvo(species) {
  // 	if (!species.otherFormes) return false;
  // 	const firstForme = this.dex.species.get(species.otherFormes[0]);
  // 	return !!firstForme.isMega;
  // }
  randomCCTeam() {
    const dex = this.dex;
    const team = [];
    const natures = Object.keys(this.dex.data.Natures);
    const items = Object.keys(this.dex.data.Items);
    const random6 = this.random6Pokemon();
    for (let i = 0; i < 6; i++) {
      let forme = random6[i];
      let species = dex.species.get(forme);
      if (species.isNonstandard)
        species = dex.species.get(species.baseSpecies);
      let item = "";
      if (this.gen >= 2) {
        do {
          item = this.sample(items);
        } while (this.dex.items.get(item).gen > this.gen || this.dex.data.Items[item].isNonstandard);
      }
      if (species.battleOnly) {
        if (typeof species.battleOnly === "string") {
          species = dex.species.get(species.battleOnly);
        } else {
          species = dex.species.get(this.sample(species.battleOnly));
        }
        forme = species.name;
      } else if (species.requiredItems && !species.requiredItems.some((req) => (0, import_dex.toID)(req) === item)) {
        if (!species.changesFrom)
          throw new Error(`${species.name} needs a changesFrom value`);
        species = dex.species.get(species.changesFrom);
        forme = species.name;
      }
      let itemData = this.dex.items.get(item);
      if (itemData.forcedForme && forme === this.dex.species.get(itemData.forcedForme).baseSpecies) {
        do {
          item = this.sample(items);
          itemData = this.dex.items.get(item);
        } while (itemData.gen > this.gen || itemData.isNonstandard || itemData.forcedForme && forme === this.dex.species.get(itemData.forcedForme).baseSpecies);
      }
      const abilities = Object.values(species.abilities).filter((a) => this.dex.abilities.get(a).gen <= this.gen);
      const ability = this.gen <= 2 ? "None" : this.sample(abilities);
      let moves;
      let pool = ["struggle"];
      if (forme === "Smeargle") {
        pool = Object.keys(this.dex.data.Moves).filter((moveid) => {
          const move = this.dex.data.Moves[moveid];
          return !(move.isNonstandard || move.isZ || move.isMax || move.realMove);
        });
      } else {
        let learnset = this.dex.data.Learnsets[species.id] && this.dex.data.Learnsets[species.id].learnset && !["gastrodoneast", "pumpkaboosuper", "zygarde10"].includes(species.id) ? this.dex.data.Learnsets[species.id].learnset : this.dex.data.Learnsets[this.dex.species.get(species.baseSpecies).id].learnset;
        if (learnset) {
          pool = Object.keys(learnset).filter(
            (moveid) => learnset[moveid].find((learned) => learned.startsWith(String(this.gen)))
          );
        }
        if (species.changesFrom) {
          learnset = this.dex.data.Learnsets[(0, import_dex.toID)(species.changesFrom)].learnset;
          const basePool = Object.keys(learnset).filter(
            (moveid) => learnset[moveid].find((learned) => learned.startsWith(String(this.gen)))
          );
          pool = [...new Set(pool.concat(basePool))];
        }
      }
      if (pool.length <= 4) {
        moves = pool;
      } else {
        moves = [this.sampleNoReplace(pool), this.sampleNoReplace(pool), this.sampleNoReplace(pool), this.sampleNoReplace(pool)];
      }
      const evs = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
      const s = ["hp", "atk", "def", "spa", "spd", "spe"];
      let evpool = 510;
      do {
        const x = this.sample(s);
        const y = this.random(Math.min(256 - evs[x], evpool + 1));
        evs[x] += y;
        evpool -= y;
      } while (evpool > 0);
      const ivs = { hp: this.random(32), atk: this.random(32), def: this.random(32), spa: this.random(32), spd: this.random(32), spe: this.random(32) };
      const nature = this.sample(natures);
      const mbstmin = 1307;
      let stats = species.baseStats;
      if (species.baseSpecies === "Wishiwashi")
        stats = import_dex.Dex.species.get("wishiwashischool").baseStats;
      let mbst = stats["hp"] * 2 + 31 + 21 + 100 + 10;
      mbst += stats["atk"] * 2 + 31 + 21 + 100 + 5;
      mbst += stats["def"] * 2 + 31 + 21 + 100 + 5;
      mbst += stats["spa"] * 2 + 31 + 21 + 100 + 5;
      mbst += stats["spd"] * 2 + 31 + 21 + 100 + 5;
      mbst += stats["spe"] * 2 + 31 + 21 + 100 + 5;
      let level = Math.floor(100 * mbstmin / mbst);
      while (level < 100) {
        mbst = Math.floor((stats["hp"] * 2 + 31 + 21 + 100) * level / 100 + 10);
        mbst += Math.floor(((stats["atk"] * 2 + 31 + 21 + 100) * level / 100 + 5) * level / 100);
        mbst += Math.floor((stats["def"] * 2 + 31 + 21 + 100) * level / 100 + 5);
        mbst += Math.floor(((stats["spa"] * 2 + 31 + 21 + 100) * level / 100 + 5) * level / 100);
        mbst += Math.floor((stats["spd"] * 2 + 31 + 21 + 100) * level / 100 + 5);
        mbst += Math.floor((stats["spe"] * 2 + 31 + 21 + 100) * level / 100 + 5);
        if (mbst >= mbstmin)
          break;
        level++;
      }
      const happiness = this.random(256);
      const shiny = this.randomChance(1, 1024);
      team.push({
        name: species.baseSpecies,
        species: species.name,
        gender: species.gender,
        item,
        ability,
        moves,
        evs,
        ivs,
        nature,
        level,
        happiness,
        shiny
      });
    }
    return team;
  }
  random6Pokemon() {
    const last = [0, 151, 251, 386, 493, 649, 721, 807, 890][this.gen];
    const pool = [];
    for (const id in this.dex.data.FormatsData) {
      if (!this.dex.data.Pokedex[id] || this.dex.data.FormatsData[id].isNonstandard && this.dex.data.FormatsData[id].isNonstandard !== "Unobtainable")
        continue;
      const num = this.dex.data.Pokedex[id].num;
      if (num <= 0 || pool.includes(num))
        continue;
      if (num > last)
        break;
      pool.push(num);
    }
    const hasDexNumber = {};
    for (let i = 0; i < 6; i++) {
      const num = this.sampleNoReplace(pool);
      hasDexNumber[num] = i;
    }
    const formes = [[], [], [], [], [], []];
    for (const id in this.dex.data.Pokedex) {
      if (!(this.dex.data.Pokedex[id].num in hasDexNumber))
        continue;
      const species = this.dex.species.get(id);
      if (species.gen <= this.gen && (!species.isNonstandard || species.isNonstandard === "Unobtainable")) {
        formes[hasDexNumber[species.num]].push(species.name);
      }
    }
    const sixPokemon = [];
    for (let i = 0; i < 6; i++) {
      if (!formes[i].length) {
        throw new Error("Invalid pokemon gen " + this.gen + ": " + JSON.stringify(formes) + " numbers " + JSON.stringify(hasDexNumber));
      }
      sixPokemon.push(this.sample(formes[i]));
    }
    return sixPokemon;
  }
  randomHCTeam() {
    const team = [];
    const itemPool = Object.keys(this.dex.data.Items);
    const abilityPool = Object.keys(this.dex.data.Abilities);
    const movePool = Object.keys(this.dex.data.Moves);
    const naturePool = Object.keys(this.dex.data.Natures);
    const random6 = this.random6Pokemon();
    for (let i = 0; i < 6; i++) {
      const species = this.dex.species.get(random6[i]);
      let item = "";
      if (this.gen >= 2) {
        do {
          item = this.sampleNoReplace(itemPool);
        } while (this.dex.items.get(item).gen > this.gen || this.dex.data.Items[item].isNonstandard);
      }
      let ability = "None";
      if (this.gen >= 3) {
        do {
          ability = this.sampleNoReplace(abilityPool);
        } while (this.dex.abilities.get(ability).gen > this.gen || this.dex.data.Abilities[ability].isNonstandard);
      }
      const m = [];
      do {
        const moveid = this.sampleNoReplace(movePool);
        const move = this.dex.moves.get(moveid);
        if (move.gen <= this.gen && !move.isNonstandard && !move.name.startsWith("Hidden Power ")) {
          m.push(moveid);
        }
      } while (m.length < 4);
      const evs = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
      const s = ["hp", "atk", "def", "spa", "spd", "spe"];
      if (this.gen === 6) {
        let evpool = 510;
        do {
          const x = this.sample(s);
          const y = this.random(Math.min(256 - evs[x], evpool + 1));
          evs[x] += y;
          evpool -= y;
        } while (evpool > 0);
      } else {
        for (const x of s) {
          evs[x] = this.random(256);
        }
      }
      const ivs = {
        hp: this.random(32),
        atk: this.random(32),
        def: this.random(32),
        spa: this.random(32),
        spd: this.random(32),
        spe: this.random(32)
      };
      const nature = this.sample(naturePool);
      const mbstmin = 1307;
      const stats = species.baseStats;
      let mbst = stats["hp"] * 2 + 31 + 21 + 100 + 10;
      mbst += stats["atk"] * 2 + 31 + 21 + 100 + 5;
      mbst += stats["def"] * 2 + 31 + 21 + 100 + 5;
      mbst += stats["spa"] * 2 + 31 + 21 + 100 + 5;
      mbst += stats["spd"] * 2 + 31 + 21 + 100 + 5;
      mbst += stats["spe"] * 2 + 31 + 21 + 100 + 5;
      let level = Math.floor(100 * mbstmin / mbst);
      while (level < 100) {
        mbst = Math.floor((stats["hp"] * 2 + 31 + 21 + 100) * level / 100 + 10);
        mbst += Math.floor(((stats["atk"] * 2 + 31 + 21 + 100) * level / 100 + 5) * level / 100);
        mbst += Math.floor((stats["def"] * 2 + 31 + 21 + 100) * level / 100 + 5);
        mbst += Math.floor(((stats["spa"] * 2 + 31 + 21 + 100) * level / 100 + 5) * level / 100);
        mbst += Math.floor((stats["spd"] * 2 + 31 + 21 + 100) * level / 100 + 5);
        mbst += Math.floor((stats["spe"] * 2 + 31 + 21 + 100) * level / 100 + 5);
        if (mbst >= mbstmin)
          break;
        level++;
      }
      const happiness = this.random(256);
      const shiny = this.randomChance(1, 1024);
      team.push({
        name: species.baseSpecies,
        species: species.name,
        gender: species.gender,
        item,
        ability,
        moves: m,
        evs,
        ivs,
        nature,
        level,
        happiness,
        shiny
      });
    }
    return team;
  }
  queryMoves(moves, hasType = {}, hasAbility = {}, movePool = []) {
    const counter = {
      Physical: 0,
      Special: 0,
      Status: 0,
      damage: 0,
      recovery: 0,
      stab: 0,
      inaccurate: 0,
      priority: 0,
      recoil: 0,
      drain: 0,
      sound: 0,
      adaptability: 0,
      contrary: 0,
      ironfist: 0,
      serenegrace: 0,
      sheerforce: 0,
      skilllink: 0,
      strongjaw: 0,
      technician: 0,
      physicalsetup: 0,
      specialsetup: 0,
      mixedsetup: 0,
      speedsetup: 0,
      physicalpool: 0,
      specialpool: 0,
      hazards: 0,
      damagingMoves: [],
      damagingMoveIndex: {},
      setupType: "",
      Bug: 0,
      Dark: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 0,
      Fire: 0,
      Flying: 0,
      Ghost: 0,
      Grass: 0,
      Ground: 0,
      Ice: 0,
      Normal: 0,
      Poison: 0,
      Psychic: 0,
      Rock: 0,
      Steel: 0,
      Water: 0
    };
    let typeDef;
    for (typeDef in this.dex.data.TypeChart) {
      counter[typeDef] = 0;
    }
    if (!moves || !moves.length)
      return counter;
    const RecoveryMove = [
      "healorder",
      "milkdrink",
      "moonlight",
      "morningsun",
      "recover",
      "roost",
      "shoreup",
      "slackoff",
      "softboiled",
      "strengthsap",
      "synthesis"
    ];
    const ContraryMove = [
      "closecombat",
      "leafstorm",
      "overheat",
      "superpower",
      "vcreate"
    ];
    const PhysicalSetup = [
      "bellydrum",
      "bulkup",
      "coil",
      "curse",
      "dragondance",
      "honeclaws",
      "howl",
      "poweruppunch",
      "swordsdance"
    ];
    const SpecialSetup = [
      "calmmind",
      "chargebeam",
      "geomancy",
      "nastyplot",
      "quiverdance",
      "tailglow"
    ];
    const MixedSetup = [
      "clangoroussoul",
      "growth",
      "happyhour",
      "holdhands",
      "noretreat",
      "shellsmash",
      "workup"
    ];
    const SpeedSetup = [
      "agility",
      "autotomize",
      "flamecharge",
      "rockpolish",
      "shiftgear"
    ];
    const NoStab = [
      "accelerock",
      "aquajet",
      "bounce",
      "breakingswipe",
      "explosion",
      "fakeout",
      "firstimpression",
      "flamecharge",
      "flipturn",
      "iceshard",
      "machpunch",
      "pluck",
      "pursuit",
      "quickattack",
      "selfdestruct",
      "skydrop",
      "suckerpunch",
      "watershuriken",
      "clearsmog",
      "eruption",
      "icywind",
      "incinerate",
      "meteorbeam",
      "snarl",
      "vacuumwave",
      "voltswitch",
      "waterspout"
    ];
    for (const [k, moveId] of moves.entries()) {
      const move = this.dex.moves.get(moveId);
      const moveid = move.id;
      let movetype = move.type;
      if (["judgment", "multiattack", "revelationdance"].includes(moveid))
        movetype = Object.keys(hasType)[0];
      if (move.damage || move.damageCallback) {
        counter["damage"]++;
        counter.damagingMoves.push(move);
        counter.damagingMoveIndex[moveid] = k;
      } else {
        counter[move.category]++;
      }
      if (moveid === "lowkick" || move.basePower && move.basePower <= 60 && moveid !== "rapidspin")
        counter["technician"]++;
      if (move.multihit && Array.isArray(move.multihit) && move.multihit[1] === 5)
        counter["skilllink"]++;
      if (move.recoil || move.hasCrashDamage)
        counter["recoil"]++;
      if (move.drain)
        counter["drain"]++;
      if (move.basePower > 30 || move.multihit || move.basePowerCallback || moveid === "infestation" || moveid === "naturepower") {
        counter[movetype]++;
        if (hasType[movetype]) {
          counter["adaptability"]++;
          if (!NoStab.includes(moveid) && (moveid !== "hiddenpower" || Object.keys(hasType).length === 1)) {
            counter["stab"]++;
            counter[move.category] += 0.1;
          }
        } else if (movetype === "Normal" && (hasAbility["Aerilate"] || hasAbility["Galvanize"] || hasAbility["Pixilate"] || hasAbility["Refrigerate"])) {
          counter["stab"]++;
        } else if (move.priority === 0 && (hasAbility["Libero"] || hasAbility["Protean"]) && !NoStab.includes(moveid)) {
          counter["stab"]++;
        } else if (movetype === "Steel" && hasAbility["Steelworker"]) {
          counter["stab"]++;
        }
        if (move.flags["bite"])
          counter["strongjaw"]++;
        if (move.flags["punch"])
          counter["ironfist"]++;
        if (move.flags["sound"])
          counter["sound"]++;
        counter.damagingMoves.push(move);
        counter.damagingMoveIndex[moveid] = k;
      }
      if (move.secondary) {
        counter["sheerforce"]++;
        if (move.secondary.chance && move.secondary.chance >= 20 && move.secondary.chance < 100) {
          counter["serenegrace"]++;
        }
      }
      if (move.accuracy && move.accuracy !== true && move.accuracy < 90)
        counter["inaccurate"]++;
      if (move.category !== "Status" && (move.priority !== 0 || moveid === "grassyglide" && hasAbility["Grassy Surge"])) {
        counter["priority"]++;
      }
      if (RecoveryMove.includes(moveid))
        counter["recovery"]++;
      if (ContraryMove.includes(moveid))
        counter["contrary"]++;
      if (PhysicalSetup.includes(moveid)) {
        counter["physicalsetup"]++;
        counter.setupType = "Physical";
      } else if (SpecialSetup.includes(moveid)) {
        counter["specialsetup"]++;
        counter.setupType = "Special";
      }
      if (MixedSetup.includes(moveid))
        counter["mixedsetup"]++;
      if (SpeedSetup.includes(moveid))
        counter["speedsetup"]++;
      if (["spikes", "stealthrock", "stickyweb", "toxicspikes"].includes(moveid))
        counter["hazards"]++;
    }
    for (const moveid of movePool) {
      const move = this.dex.moves.get(moveid);
      if (move.damageCallback)
        continue;
      if (move.category === "Physical")
        counter["physicalpool"]++;
      if (move.category === "Special")
        counter["specialpool"]++;
    }
    if (counter["mixedsetup"]) {
      counter.setupType = "Mixed";
    } else if (counter["physicalsetup"] && counter["specialsetup"]) {
      const pool = {
        Physical: counter.Physical + counter["physicalpool"],
        Special: counter.Special + counter["specialpool"]
      };
      if (pool.Physical === pool.Special) {
        if (counter.Physical > counter.Special)
          counter.setupType = "Physical";
        if (counter.Special > counter.Physical)
          counter.setupType = "Special";
      } else {
        counter.setupType = pool.Physical > pool.Special ? "Physical" : "Special";
      }
    } else if (counter.setupType === "Physical") {
      if (counter.Physical < 2 && (!counter.stab || !counter["physicalpool"]) && (!moves.includes("rest") || !moves.includes("sleeptalk"))) {
        counter.setupType = "";
      }
    } else if (counter.setupType === "Special") {
      if (counter.Special < 2 && (!counter.stab || !counter["specialpool"]) && (!moves.includes("rest") || !moves.includes("sleeptalk")) && (!moves.includes("wish") || !moves.includes("protect"))) {
        counter.setupType = "";
      }
    }
    counter["Physical"] = Math.floor(counter["Physical"]);
    counter["Special"] = Math.floor(counter["Special"]);
    return counter;
  }
  randomSet(species, teamDetails = {}, isLead = false, isDoubles = false) {
    species = this.dex.species.get(species);
    let forme = species.name;
    let gmax = false;
    let mega = false;
    if (typeof species.battleOnly === "string") {
      forme = species.battleOnly;
    }
    if (species.cosmeticFormes) {
      forme = this.sample([species.name].concat(species.cosmeticFormes));
    }
    if (species.name.endsWith("-Gmax")) {
      forme = species.name.slice(0, -5);
      gmax = true;
    }
    if (species.name.endsWith("-Mega")) {
      forme = species.name.slice(0, -5);
      mega = true;
    } else if (species.name.endsWith("-Mega-X") || species.name.endsWith("-Mega-Y")) {
      forme = species.name.slice(0, -7);
      mega = true;
    }
    const randMoves = !isDoubles ? species.randomBattleMoves : species.randomDoubleBattleMoves || species.randomBattleMoves;
    const movePool = (randMoves || Object.keys(this.dex.data.Learnsets[species.id].learnset)).slice();
    const rejectedPool = [];
    const moves = [];
    let ability = "";
    let item = "";
    const evs = {
      hp: 85,
      atk: 85,
      def: 85,
      spa: 85,
      spd: 85,
      spe: 85
    };
    const ivs = {
      hp: 31,
      atk: 31,
      def: 31,
      spa: 31,
      spd: 31,
      spe: 31
    };
    const hasType = {};
    hasType[species.types[0]] = true;
    if (species.types[1]) {
      hasType[species.types[1]] = true;
    }
    const hasAbility = {};
    hasAbility[species.abilities[0]] = true;
    if (species.abilities[1]) {
      hasAbility[species.abilities[1]] = true;
    }
    if (species.abilities["H"]) {
      hasAbility[species.abilities["H"]] = true;
    }
    let hasMove = {};
    let counter;
    do {
      hasMove = {};
      for (const moveid of moves) {
        hasMove[moveid] = true;
      }
      const pool = movePool.length ? movePool : rejectedPool;
      while (moves.length < 4 && pool.length) {
        const moveid = this.sampleNoReplace(pool);
        hasMove[moveid] = true;
        moves.push(moveid);
      }
      counter = this.queryMoves(moves, hasType, hasAbility, movePool);
      for (const [k, moveId] of moves.entries()) {
        const move = this.dex.moves.get(moveId);
        const moveid = move.id;
        let rejected = false;
        let isSetup = false;
        switch (moveid) {
          case "acrobatics":
          case "junglehealing":
            if (!counter.setupType && !isDoubles)
              rejected = true;
            break;
          case "destinybond":
          case "healbell":
            if (movePool.includes("protect") || movePool.includes("wish"))
              rejected = true;
            break;
          case "fireblast":
            if (hasAbility["Serene Grace"] && (!hasMove["trick"] || counter.Status > 1))
              rejected = true;
            break;
          case "firepunch":
            if (movePool.includes("bellydrum") || hasMove["earthquake"] && movePool.includes("substitute"))
              rejected = true;
            break;
          case "flamecharge":
          case "sacredsword":
            if (counter.damagingMoves.length < 3 && !counter.setupType)
              rejected = true;
            if (!hasType["Grass"] && movePool.includes("swordsdance"))
              rejected = true;
            break;
          case "fly":
          case "storedpower":
            if (!counter.setupType)
              rejected = true;
            break;
          case "futuresight":
            if (!counter.Status || !hasMove["teleport"])
              rejected = true;
            break;
          case "payback":
          case "psychocut":
            if (!counter.Status || hasMove["rest"] && hasMove["sleeptalk"])
              rejected = true;
            break;
          case "rest":
            if (movePool.includes("sleeptalk"))
              rejected = true;
            if (!hasMove["sleeptalk"] && (movePool.includes("bulkup") || movePool.includes("calmmind") || movePool.includes("coil") || movePool.includes("curse")))
              rejected = true;
            break;
          case "sleeptalk":
            if (!hasMove["rest"])
              rejected = true;
            if (movePool.length > 1 && !hasAbility["Contrary"]) {
              const rest = movePool.indexOf("rest");
              if (rest >= 0)
                this.fastPop(movePool, rest);
            }
            break;
          case "switcheroo":
          case "trick":
            if (counter.Physical + counter.Special < 3 || hasMove["futuresight"] || hasMove["rapidspin"])
              rejected = true;
            break;
          case "trickroom":
            if (counter.damagingMoves.length < 2 || movePool.includes("nastyplot") || isLead || teamDetails.stickyWeb)
              rejected = true;
            break;
          case "zenheadbutt":
            if (movePool.includes("boltstrike"))
              rejected = true;
            break;
          case "bellydrum":
          case "bulkup":
          case "coil":
          case "curse":
          case "dragondance":
          case "honeclaws":
          case "swordsdance":
            if (counter.setupType !== "Physical")
              rejected = true;
            if (counter.Physical + counter["physicalpool"] < 2 && (!hasMove["rest"] || !hasMove["sleeptalk"]))
              rejected = true;
            if (moveid === "swordsdance" && hasMove["dragondance"])
              rejected = true;
            isSetup = true;
            break;
          case "calmmind":
          case "nastyplot":
            if (counter.setupType !== "Special")
              rejected = true;
            if (counter.Special + counter["specialpool"] < 2 && (!hasMove["rest"] || !hasMove["sleeptalk"]) && (!hasMove["wish"] || !hasMove["protect"]))
              rejected = true;
            if (hasMove["healpulse"] || moveid === "calmmind" && hasMove["trickroom"])
              rejected = true;
            isSetup = true;
            break;
          case "quiverdance":
            isSetup = true;
            break;
          case "clangoroussoul":
          case "shellsmash":
          case "workup":
            if (counter.setupType !== "Mixed")
              rejected = true;
            if (counter.damagingMoves.length + counter["physicalpool"] + counter["specialpool"] < 2)
              rejected = true;
            isSetup = true;
            break;
          case "agility":
          case "autotomize":
          case "rockpolish":
          case "shiftgear":
            if (counter.damagingMoves.length < 2 || hasMove["rest"])
              rejected = true;
            if (movePool.includes("calmmind") || movePool.includes("nastyplot"))
              rejected = true;
            if (!counter.setupType)
              isSetup = true;
            break;
          case "counter":
          case "reversal":
            if (counter.setupType)
              rejected = true;
            break;
          case "firstimpression":
          case "glare":
          case "icywind":
          case "tailwind":
          case "waterspout":
            if (counter.setupType && !isDoubles || !!counter["speedsetup"] || hasMove["rest"])
              rejected = true;
            break;
          case "bulletpunch":
          case "rockblast":
            if (!!counter["speedsetup"] || counter.damagingMoves.length < 2)
              rejected = true;
            break;
          case "closecombat":
          case "flashcannon":
          case "pollenpuff":
            if (hasMove["substitute"] && !hasType["Fighting"] || hasMove["toxic"] && movePool.includes("substitute"))
              rejected = true;
            if (moveid === "closecombat" && (hasMove["highjumpkick"] || movePool.includes("highjumpkick")) && !counter.setupType)
              rejected = true;
            break;
          case "defog":
            if (counter.setupType || hasMove["healbell"] || hasMove["stealthrock"] || hasMove["toxicspikes"] || teamDetails.defog)
              rejected = true;
            break;
          case "fakeout":
            if (counter.setupType || hasMove["protect"] || hasMove["rapidspin"] || hasMove["substitute"] || hasMove["uturn"])
              rejected = true;
            break;
          case "healingwish":
          case "memento":
            if (counter.setupType || !!counter["recovery"] || hasMove["substitute"] || hasMove["uturn"])
              rejected = true;
            break;
          case "highjumpkick":
          case "machpunch":
            if (hasMove["curse"])
              rejected = true;
            break;
          case "leechseed":
          case "teleport":
            if (counter.setupType || !!counter["speedsetup"])
              rejected = true;
            break;
          case "partingshot":
            if (!!counter["speedsetup"] || hasMove["bulkup"] || hasMove["uturn"])
              rejected = true;
            break;
          case "protect":
            if (counter.setupType && !hasMove["wish"] && !isDoubles || hasMove["rest"] && hasMove["sleeptalk"])
              rejected = true;
            if (counter.Status < 2 && !hasAbility["Hunger Switch"] && !hasAbility["Speed Boost"] && !isDoubles)
              rejected = true;
            if (movePool.includes("leechseed") || movePool.includes("toxic") && !hasMove["wish"])
              rejected = true;
            if (isDoubles && (movePool.includes("fakeout") || movePool.includes("shellsmash") || movePool.includes("spore") || hasMove["tailwind"] || hasMove["waterspout"]))
              rejected = true;
            break;
          case "rapidspin":
            if (hasMove["curse"] || hasMove["nastyplot"] || hasMove["shellsmash"] || teamDetails.rapidSpin)
              rejected = true;
            if (counter.setupType && counter["Fighting"] >= 2)
              rejected = true;
            break;
          case "shadowsneak":
            if (hasMove["substitute"] || hasMove["trickroom"])
              rejected = true;
            if (hasMove["dualwingbeat"] || hasMove["toxic"] || hasMove["rest"] && hasMove["sleeptalk"])
              rejected = true;
            break;
          case "spikes":
            if (counter.setupType || teamDetails.spikes && teamDetails.spikes > 1)
              rejected = true;
            break;
          case "stealthrock":
            if (counter.setupType || !!counter["speedsetup"] || hasMove["rest"] || hasMove["substitute"] || hasMove["trickroom"] || teamDetails.stealthRock)
              rejected = true;
            break;
          case "stickyweb":
            if (counter.setupType === "Special" || teamDetails.stickyWeb)
              rejected = true;
            break;
          case "taunt":
            if (hasMove["nastyplot"] || hasMove["swordsdance"])
              rejected = true;
            break;
          case "thunderwave":
          case "voltswitch":
            if (counter.setupType || !!counter["speedsetup"] || hasMove["raindance"])
              rejected = true;
            if (isDoubles && (hasMove["electroweb"] || hasMove["nuzzle"]))
              rejected = true;
            break;
          case "toxic":
            if (counter.setupType || hasMove["sludgewave"] || hasMove["thunderwave"] || hasMove["willowisp"])
              rejected = true;
            break;
          case "toxicspikes":
            if (counter.setupType || teamDetails.toxicSpikes)
              rejected = true;
            break;
          case "uturn":
            if (!!counter["speedsetup"] || counter.setupType && (!hasType["Bug"] || !counter.recovery))
              rejected = true;
            if (isDoubles && hasMove["leechlife"])
              rejected = true;
            break;
          case "explosion":
            if (!!counter["recovery"] || hasMove["painsplit"] || hasMove["wish"])
              rejected = true;
            if (!!counter["speedsetup"] || hasMove["curse"] || hasMove["drainpunch"] || hasMove["rockblast"])
              rejected = true;
            break;
          case "facade":
            if (!!counter["recovery"] || movePool.includes("doubleedge"))
              rejected = true;
            break;
          case "quickattack":
            if (!!counter["speedsetup"] || hasType["Rock"] && !!counter.Status)
              rejected = true;
            if (counter.Physical > 3 && movePool.includes("uturn"))
              rejected = true;
            break;
          case "blazekick":
            if (counter.Special >= 1)
              rejected = true;
            break;
          case "firefang":
          case "flamethrower":
            if (hasMove["heatwave"] || hasMove["overheat"] || hasMove["fireblast"] && counter.setupType !== "Physical")
              rejected = true;
            break;
          case "overheat":
            if (hasMove["flareblitz"] || isDoubles && hasMove["calmmind"])
              rejected = true;
            break;
          case "aquajet":
          case "psychicfangs":
            if (hasMove["rapidspin"] || hasMove["taunt"])
              rejected = true;
            break;
          case "aquatail":
          case "flipturn":
          case "retaliate":
            if (hasMove["aquajet"] || !!counter.Status)
              rejected = true;
            break;
          case "hydropump":
            if (hasMove["scald"] && (counter.Special < 4 && !hasMove["uturn"] || species.types.length > 1 && counter.stab < 3))
              rejected = true;
            break;
          case "scald":
            if (hasMove["waterpulse"])
              rejected = true;
            break;
          case "thunderbolt":
            if (hasMove["powerwhip"])
              rejected = true;
            break;
          case "gigadrain":
            if (hasMove["uturn"] || hasType["Poison"] && !counter["Poison"])
              rejected = true;
            break;
          case "leafblade":
            if ((hasMove["leafstorm"] || movePool.includes("leafstorm")) && counter.setupType !== "Physical")
              rejected = true;
            break;
          case "leafstorm":
            if (hasMove["gigadrain"] && !!counter.Status)
              rejected = true;
            if (isDoubles && hasMove["energyball"])
              rejected = true;
            break;
          case "powerwhip":
            if (hasMove["leechlife"] || !hasType["Grass"] && counter.Physical > 3 && movePool.includes("uturn"))
              rejected = true;
            break;
          case "woodhammer":
            if (hasMove["hornleech"] && counter.Physical < 4)
              rejected = true;
            break;
          case "freezedry":
            if (hasMove["blizzard"] && counter.setupType || hasMove["icebeam"] && counter.Special < 4)
              rejected = true;
            if (movePool.includes("bodyslam") || movePool.includes("thunderwave") && hasType["Electric"])
              rejected = true;
            break;
          case "bodypress":
            if (hasMove["mirrorcoat"] || hasMove["whirlwind"])
              rejected = true;
            if (hasMove["shellsmash"] || hasMove["earthquake"] && movePool.includes("shellsmash"))
              rejected = true;
            break;
          case "circlethrow":
            if (hasMove["stormthrow"] && !hasMove["rest"])
              rejected = true;
            break;
          case "drainpunch":
            if (hasMove["closecombat"] || !hasType["Fighting"] && movePool.includes("swordsdance"))
              rejected = true;
            break;
          case "dynamicpunch":
          case "thunderouskick":
            if (hasMove["closecombat"] || hasMove["facade"])
              rejected = true;
            break;
          case "focusblast":
            if (movePool.includes("shellsmash") || hasMove["rest"] && hasMove["sleeptalk"])
              rejected = true;
            break;
          case "hammerarm":
            if (hasMove["fakeout"])
              rejected = true;
            break;
          case "seismictoss":
            if (hasMove["protect"] && hasType["Water"])
              rejected = true;
            break;
          case "stormthrow":
            if (hasMove["rest"] && hasMove["sleeptalk"])
              rejected = true;
            break;
          case "superpower":
            if (hasMove["hydropump"] || counter.Physical >= 4 && movePool.includes("uturn"))
              rejected = true;
            if (hasMove["substitute"] && !hasAbility["Contrary"])
              rejected = true;
            if (hasAbility["Contrary"])
              isSetup = true;
            break;
          case "poisonjab":
            if (!hasType["Poison"] && counter.Status >= 2)
              rejected = true;
            break;
          case "earthquake":
            if (hasMove["bonemerang"] || hasMove["substitute"] && movePool.includes("toxic"))
              rejected = true;
            if (movePool.includes("bodypress") && movePool.includes("shellsmash"))
              rejected = true;
            if (isDoubles && (hasMove["earthpower"] || hasMove["highhorsepower"]))
              rejected = true;
            break;
          case "scorchingsands":
            if (hasMove["earthpower"] || hasMove["toxic"] && movePool.includes("earthpower"))
              rejected = true;
            if (hasMove["willowisp"])
              rejected = true;
            break;
          case "airslash":
            if (hasMove["hurricane"] && !counter.setupType || hasMove["rest"] && hasMove["sleeptalk"])
              rejected = true;
            if (movePool.includes("flamethrower") || hasAbility["Simple"] && !!counter["recovery"])
              rejected = true;
            break;
          case "bravebird":
            if (hasMove["dragondance"])
              rejected = true;
            break;
          case "hurricane":
            if (hasAbility["Tinted Lens"] && counter.setupType && !isDoubles)
              rejected = true;
            break;
          case "photongeyser":
            if (hasMove["morningsun"])
              rejected = true;
            break;
          case "psychic":
            if (hasMove["psyshock"] && (counter.setupType || isDoubles))
              rejected = true;
            break;
          case "psyshock":
            if ((hasMove["psychic"] || hasAbility["Pixilate"]) && counter.Special < 4 && !counter.setupType)
              rejected = true;
            if (hasAbility["Multiscale"] && !counter.setupType)
              rejected = true;
            if (isDoubles && hasMove["psychic"])
              rejected = true;
            break;
          case "bugbuzz":
            if (hasMove["uturn"] && !counter.setupType)
              rejected = true;
            break;
          case "leechlife":
            if (isDoubles && hasMove["lunge"])
              rejected = true;
            if (movePool.includes("firstimpression") || movePool.includes("spikes"))
              rejected = true;
            break;
          case "stoneedge":
            if (hasMove["rockblast"] || hasMove["rockslide"] || !!counter.Status && movePool.includes("rockslide"))
              rejected = true;
            if (hasAbility["Guts"] && (!hasMove["dynamicpunch"] || hasMove["spikes"]))
              rejected = true;
            break;
          case "poltergeist":
            if (hasMove["knockoff"])
              rejected = true;
            break;
          case "shadowball":
            if (hasAbility["Pixilate"] && (counter.setupType || counter.Status > 1))
              rejected = true;
            if (isDoubles && hasMove["phantomforce"])
              rejected = true;
            break;
          case "shadowclaw":
            if (hasType["Steel"] && hasMove["shadowsneak"] && counter.Physical < 4)
              rejected = true;
            break;
          case "dragonpulse":
          case "spacialrend":
            if (hasMove["dracometeor"] && counter.Special < 4)
              rejected = true;
            break;
          case "darkpulse":
            if ((hasMove["foulplay"] || hasMove["knockoff"] || hasMove["suckerpunch"] || hasMove["defog"]) && counter.setupType !== "Special")
              rejected = true;
            break;
          case "knockoff":
            if (hasMove["darkestlariat"])
              rejected = true;
            break;
          case "suckerpunch":
            if (counter.damagingMoves.length < 2 || counter["Dark"] > 1 && !hasType["Dark"])
              rejected = true;
            if (hasMove["rest"])
              rejected = true;
            break;
          case "meteormash":
            if (movePool.includes("extremespeed"))
              rejected = true;
            break;
          case "dazzlinggleam":
            if (hasMove["fleurcannon"] || hasMove["moonblast"] || hasMove["petaldance"])
              rejected = true;
            break;
          case "bodyslam":
          case "clearsmog":
            if (hasMove["sludgebomb"] || hasMove["toxic"] && !hasType["Normal"])
              rejected = true;
            if (hasMove["trick"] || movePool.includes("recover"))
              rejected = true;
            break;
          case "haze":
            if ((hasMove["stealthrock"] || movePool.includes("stealthrock")) && !teamDetails.stealthRock)
              rejected = true;
            break;
          case "hypnosis":
            if (hasMove["voltswitch"])
              rejected = true;
            break;
          case "willowisp":
          case "yawn":
            if (hasMove["thunderwave"] || hasMove["toxic"])
              rejected = true;
            break;
          case "painsplit":
          case "recover":
          case "synthesis":
            if (hasMove["rest"] || hasMove["wish"])
              rejected = true;
            if (moveid === "synthesis" && hasMove["gigadrain"])
              rejected = true;
            break;
          case "roost":
            if (hasMove["throatchop"] || hasMove["stoneedge"] && !hasType["Rock"])
              rejected = true;
            break;
          case "reflect":
          case "lightscreen":
            if (teamDetails.screens)
              rejected = true;
            break;
          case "substitute":
            if (hasMove["facade"] || hasMove["rest"] || hasMove["uturn"])
              rejected = true;
            if (movePool.includes("bulkup") || movePool.includes("painsplit") || movePool.includes("roost") || movePool.includes("calmmind") && !counter["recovery"])
              rejected = true;
            if (isDoubles && movePool.includes("powerwhip"))
              rejected = true;
            break;
          case "helpinghand":
            if (hasMove["acupressure"])
              rejected = true;
            break;
          case "wideguard":
            if (hasMove["protect"])
              rejected = true;
            break;
        }
        if ((move.category === "Physical" && counter.setupType === "Special" || move.category === "Special" && counter.setupType === "Physical") && moveid !== "photongeyser") {
          const stabs = counter[species.types[0]] + (counter[species.types[1]] || 0);
          if (!hasType[move.type] || stabs > 1 || counter[move.category] < 2)
            rejected = true;
        }
        if (!rejected && !move.damage && !isSetup && !move.weather && !move.stallingMove && (isDoubles || !["facade", "lightscreen", "reflect", "sleeptalk", "spore", "substitute", "toxic", "whirlpool"].includes(moveid) && (move.category !== "Status" || !move.flags.heal)) && (!counter.setupType || counter.setupType === "Mixed" || move.category !== counter.setupType && move.category !== "Status" || counter[counter.setupType] + counter.Status > 3 && !counter.hazards) && (!counter.stab && counter["physicalpool"] + counter["specialpool"] > 0 || hasType["Bug"] && movePool.includes("megahorn") || hasType["Dark"] && (!counter["Dark"] || hasMove["suckerpunch"] && (movePool.includes("knockoff") || movePool.includes("wickedblow"))) || hasType["Dragon"] && !counter["Dragon"] && !hasMove["dragonascent"] && !hasMove["substitute"] && !(hasMove["rest"] && hasMove["sleeptalk"]) || hasType["Electric"] && (!counter["Electric"] || movePool.includes("thunder")) || hasType["Fairy"] && !counter["Fairy"] && (movePool.includes("dazzlinggleam") || movePool.includes("fleurcannon") || movePool.includes("moonblast") || movePool.includes("playrough")) || hasType["Fighting"] && (!counter["Fighting"] || !counter.stab) || hasType["Fire"] && (!counter["Fire"] || movePool.includes("flareblitz")) && !hasMove["bellydrum"] || (hasType["Flying"] || hasMove["swordsdance"]) && !counter["Flying"] && (movePool.includes("airslash") || movePool.includes("bravebird") || movePool.includes("dualwingbeat") || movePool.includes("oblivionwing")) || hasType["Ghost"] && (!counter["Ghost"] || movePool.includes("poltergeist") || movePool.includes("spectralthief")) && !counter["Dark"] || hasType["Grass"] && !counter["Grass"] && (species.baseStats.atk >= 100 || movePool.includes("leafstorm")) || hasType["Ground"] && !counter["Ground"] || hasType["Ice"] && (!counter["Ice"] || movePool.includes("iciclecrash") || hasAbility["Snow Warning"] && movePool.includes("blizzard")) || (hasType["Normal"] && hasAbility["Guts"] && movePool.includes("facade") || hasAbility["Pixilate"] && !counter["Normal"]) || hasType["Poison"] && !counter["Poison"] && (counter.setupType || hasAbility["Sheer Force"] || movePool.includes("gunkshot")) || hasType["Psychic"] && !counter["Psychic"] && !hasType["Ghost"] && !hasType["Steel"] && (counter.setupType || hasAbility["Psychic Surge"] || movePool.includes("psychicfangs")) || hasType["Rock"] && !counter["Rock"] && species.baseStats.atk >= 80 || (hasType["Steel"] || hasAbility["Steelworker"]) && (!counter["Steel"] || hasMove["bulletpunch"] && counter.stab < 2) && species.baseStats.atk >= 95 || hasType["Water"] && (!counter["Water"] && !hasMove["hypervoice"] || movePool.includes("hypervoice")) || (hasAbility["Moody"] || hasMove["wish"]) && movePool.includes("protect") || (hasMove["lightscreen"] && movePool.includes("reflect") || hasMove["reflect"] && movePool.includes("lightscreen")) && !teamDetails.screens || (movePool.includes("morningsun") || movePool.includes("recover") || movePool.includes("roost") || movePool.includes("slackoff") || movePool.includes("softboiled")) && !!counter.Status && !counter.setupType && !hasMove["healingwish"] && !hasMove["switcheroo"] && !hasMove["trick"] && !hasMove["trickroom"] && !isDoubles || (movePool.includes("milkdrink") || movePool.includes("quiverdance") || movePool.includes("stickyweb") && !counter.setupType && !teamDetails.stickyWeb) || isLead && movePool.includes("stealthrock") && !!counter.Status && !counter.setupType && !counter["speedsetup"] && !hasMove["substitute"] || isDoubles && species.baseStats.def >= 140 && movePool.includes("bodypress"))) {
          if (move.category === "Status" || !hasType[move.type] || move.basePower && move.basePower < 50 && !move.multihit && !hasAbility["Technician"]) {
            rejected = true;
          }
        }
        if (moveid === "rest" && rejected) {
          const sleeptalk = movePool.indexOf("sleeptalk");
          if (sleeptalk >= 0) {
            if (movePool.length < 2) {
              rejected = false;
            } else {
              this.fastPop(movePool, sleeptalk);
            }
          }
        }
        if (rejected && movePool.length) {
          if (move.category !== "Status" && !move.damage)
            rejectedPool.push(moves[k]);
          moves.splice(k, 1);
          break;
        }
        if (rejected && rejectedPool.length) {
          moves.splice(k, 1);
          break;
        }
      }
    } while (moves.length < 4 && (movePool.length || rejectedPool.length));
    const baseSpecies = species.battleOnly && !species.requiredAbility ? this.dex.species.get(species.battleOnly) : species;
    const abilities = Object.values(baseSpecies.abilities);
    abilities.sort((a, b) => this.dex.abilities.get(b).rating - this.dex.abilities.get(a).rating);
    let ability0 = this.dex.abilities.get(abilities[0]);
    let ability1 = this.dex.abilities.get(abilities[1]);
    let ability2 = this.dex.abilities.get(abilities[2]);
    if (abilities[1]) {
      if (abilities[2] && ability1.rating <= ability2.rating && this.randomChance(1, 2)) {
        [ability1, ability2] = [ability2, ability1];
      }
      if (ability0.rating <= ability1.rating && this.randomChance(1, 2)) {
        [ability0, ability1] = [ability1, ability0];
      } else if (ability0.rating - 0.6 <= ability1.rating && this.randomChance(2, 3)) {
        [ability0, ability1] = [ability1, ability0];
      }
      ability = ability0.name;
      let rejectAbility;
      do {
        rejectAbility = false;
        if (["Cloud Nine", "Flare Boost", "Hydration", "Ice Body", "Innards Out", "Insomnia", "Misty Surge", "Quick Feet", "Rain Dish", "Snow Cloak", "Steadfast", "Steam Engine", "Weak Armor"].includes(ability)) {
          rejectAbility = true;
        } else if (["Adaptability", "Contrary", "Serene Grace", "Skill Link", "Strong Jaw"].includes(ability)) {
          rejectAbility = !counter[(0, import_dex.toID)(ability)];
        } else if (ability === "Analytic") {
          rejectAbility = hasMove["rapidspin"] || species.nfe || isDoubles;
        } else if (ability === "Blaze") {
          rejectAbility = isDoubles && hasAbility["Solar Power"];
        } else if (ability === "Bulletproof" || ability === "Overcoat") {
          rejectAbility = counter.setupType && hasAbility["Soundproof"];
        } else if (ability === "Chlorophyll") {
          rejectAbility = species.baseStats.spe > 100 || !counter["Fire"] && !hasMove["sunnyday"] && !teamDetails["sun"];
        } else if (ability === "Competitive") {
          rejectAbility = counter["Special"] < 2 || hasMove["rest"] && hasMove["sleeptalk"];
        } else if (ability === "Compound Eyes" || ability === "No Guard") {
          rejectAbility = !counter["inaccurate"];
        } else if (ability === "Cursed Body") {
          rejectAbility = hasAbility["Infiltrator"];
        } else if (ability === "Defiant") {
          rejectAbility = !counter["Physical"];
        } else if (ability === "Download") {
          rejectAbility = counter.damagingMoves.length < 3;
        } else if (ability === "Early Bird") {
          rejectAbility = hasType["Grass"] && isDoubles;
        } else if (ability === "Flash Fire") {
          rejectAbility = this.dex.getEffectiveness("Fire", species) < -1 || hasAbility["Drought"];
        } else if (ability === "Gluttony") {
          rejectAbility = !hasMove["bellydrum"];
        } else if (ability === "Guts") {
          rejectAbility = !hasMove["facade"] && !hasMove["sleeptalk"] && !species.nfe;
        } else if (ability === "Harvest") {
          rejectAbility = hasAbility["Frisk"] && !isDoubles;
        } else if (ability === "Hustle" || ability === "Inner Focus") {
          rejectAbility = counter.Physical < 2 || hasAbility["Iron Fist"];
        } else if (ability === "Infiltrator") {
          rejectAbility = hasMove["rest"] && hasMove["sleeptalk"] || isDoubles && hasAbility["Clear Body"];
        } else if (ability === "Intimidate") {
          rejectAbility = hasMove["bodyslam"] || hasMove["bounce"] || hasMove["tripleaxel"];
        } else if (ability === "Iron Fist") {
          rejectAbility = counter["ironfist"] < 2 || hasMove["dynamicpunch"];
        } else if (ability === "Justified") {
          rejectAbility = isDoubles && hasAbility["Inner Focus"];
        } else if (ability === "Lightning Rod") {
          rejectAbility = species.types.includes("Ground") || counter.setupType === "Physical";
        } else if (ability === "Limber") {
          rejectAbility = species.types.includes("Electric");
        } else if (ability === "Liquid Voice") {
          rejectAbility = !hasMove["hypervoice"];
        } else if (ability === "Magic Guard") {
          rejectAbility = hasAbility["Tinted Lens"] && !counter.Status && !isDoubles;
        } else if (ability === "Mold Breaker") {
          rejectAbility = hasAbility["Adaptability"] || hasAbility["Scrappy"] || hasAbility["Sheer Force"] && !!counter["sheerforce"] || hasAbility["Unburden"] && counter.setupType;
        } else if (ability === "Moxie") {
          rejectAbility = counter.Physical < 2 || hasMove["stealthrock"];
        } else if (ability === "Neutralizing Gas") {
          rejectAbility = !hasMove["toxicspikes"];
        } else if (ability === "Overgrow") {
          rejectAbility = !counter["Grass"];
        } else if (ability === "Own Tempo") {
          rejectAbility = !hasMove["petaldance"];
        } else if (ability === "Power Construct") {
          rejectAbility = species.forme === "10%" && !isDoubles;
        } else if (ability === "Prankster") {
          rejectAbility = !counter["Status"];
        } else if (ability === "Pressure") {
          rejectAbility = counter.setupType || counter.Status < 2 || isDoubles;
        } else if (ability === "Refrigerate") {
          rejectAbility = !counter["Normal"];
        } else if (ability === "Regenerator") {
          rejectAbility = hasAbility["Magic Guard"];
        } else if (ability === "Reckless" || ability === "Rock Head") {
          rejectAbility = !counter["recoil"];
        } else if (ability === "Sand Force" || ability === "Sand Veil") {
          rejectAbility = !teamDetails["sand"];
        } else if (ability === "Sand Rush") {
          rejectAbility = !teamDetails["sand"] && (!counter.setupType || !counter["Rock"] || hasMove["rapidspin"]);
        } else if (ability === "Sap Sipper") {
          rejectAbility = hasMove["roost"];
        } else if (ability === "Scrappy") {
          rejectAbility = hasMove["earthquake"] && hasMove["milkdrink"];
        } else if (ability === "Screen Cleaner") {
          rejectAbility = !!teamDetails["screens"];
        } else if (ability === "Shadow Tag") {
          rejectAbility = species.name === "Gothitelle" && !isDoubles;
        } else if (ability === "Shed Skin") {
          rejectAbility = hasMove["dragondance"];
        } else if (ability === "Sheer Force") {
          rejectAbility = !counter["sheerforce"] || hasAbility["Guts"];
        } else if (ability === "Slush Rush") {
          rejectAbility = !teamDetails["hail"] && !hasAbility["Swift Swim"];
        } else if (ability === "Sniper") {
          rejectAbility = counter["Water"] > 1 && !hasMove["focusenergy"];
        } else if (ability === "Steely Spirit") {
          rejectAbility = hasMove["fakeout"] && !isDoubles;
        } else if (ability === "Sturdy") {
          rejectAbility = hasMove["bulkup"] || !!counter["recoil"] || hasAbility["Solid Rock"];
        } else if (ability === "Swarm") {
          rejectAbility = !counter["Bug"] || !!counter["recovery"];
        } else if (ability === "Sweet Veil") {
          rejectAbility = hasType["Grass"];
        } else if (ability === "Swift Swim") {
          rejectAbility = !hasMove["raindance"] && (hasAbility["Intimidate"] || hasAbility["Lightning Rod"] && !counter.setupType || hasAbility["Rock Head"] || hasAbility["Slush Rush"] || hasAbility["Water Absorb"]);
        } else if (ability === "Synchronize") {
          rejectAbility = counter.setupType || counter.Status < 2;
        } else if (ability === "Technician") {
          rejectAbility = !counter["technician"] || hasMove["tailslap"] || hasAbility["Punk Rock"] || movePool.includes("snarl");
        } else if (ability === "Tinted Lens") {
          rejectAbility = hasMove["defog"] || hasMove["hurricane"] || counter.Status > 2 && !counter.setupType;
        } else if (ability === "Torrent") {
          rejectAbility = hasMove["focusenergy"] || hasMove["hypervoice"];
        } else if (ability === "Tough Claws") {
          rejectAbility = hasType["Steel"] && !hasMove["fakeout"];
        } else if (ability === "Triage") {
          rejectAbility = !counter["drain"];
        } else if (ability === "Unaware") {
          rejectAbility = counter.setupType || hasMove["stealthrock"];
        } else if (ability === "Unburden") {
          rejectAbility = hasAbility["Prankster"] || !counter.setupType && !isDoubles;
        } else if (ability === "Volt Absorb") {
          rejectAbility = this.dex.getEffectiveness("Electric", species) < -1;
        } else if (ability === "Water Absorb") {
          rejectAbility = hasMove["raindance"] || hasAbility["Drizzle"] || hasAbility["Strong Jaw"] || hasAbility["Unaware"] || hasAbility["Volt Absorb"];
        }
        if (rejectAbility) {
          if (ability === ability0.name && ability1.rating >= 1) {
            ability = ability1.name;
          } else if (ability === ability1.name && abilities[2] && ability2.rating >= 1) {
            ability = ability2.name;
          } else {
            ability = abilities[0];
            rejectAbility = false;
          }
        }
      } while (rejectAbility);
      if (species.name === "Azumarill" && !isDoubles) {
        ability = "Sap Sipper";
      } else if (forme === "Copperajah" && gmax) {
        ability = "Heavy Metal";
      } else if (hasAbility["Guts"] && (hasMove["facade"] || hasMove["rest"] && hasMove["sleeptalk"])) {
        ability = "Guts";
      } else if (hasAbility["Moxie"] && (counter.Physical > 3 || hasMove["bounce"]) && !isDoubles) {
        ability = "Moxie";
      } else if (isDoubles) {
        if (hasAbility["Competitive"] && ability !== "Shadow Tag" && ability !== "Strong Jaw")
          ability = "Competitive";
        if (hasAbility["Curious Medicine"] && this.randomChance(1, 2))
          ability = "Curious Medicine";
        if (hasAbility["Friend Guard"])
          ability = "Friend Guard";
        if (hasAbility["Gluttony"] && hasMove["recycle"])
          ability = "Gluttony";
        if (hasAbility["Guts"])
          ability = "Guts";
        if (hasAbility["Harvest"])
          ability = "Harvest";
        if (hasAbility["Intimidate"])
          ability = "Intimidate";
        if (hasAbility["Klutz"] && ability === "Limber")
          ability = "Klutz";
        if (hasAbility["Magic Guard"] && ability !== "Friend Guard" && ability !== "Unaware")
          ability = "Magic Guard";
        if (hasAbility["Ripen"])
          ability = "Ripen";
        if (hasAbility["Stalwart"])
          ability = "Stalwart";
        if (hasAbility["Storm Drain"])
          ability = "Storm Drain";
        if (hasAbility["Telepathy"] && (ability === "Pressure" || hasAbility["Analytic"]))
          ability = "Telepathy";
        if (hasAbility["Triage"])
          ability = "Triage";
      }
    } else if (forme === "Lopunny" && mega) {
      ability = "Sole Caliber";
    } else if ((forme === "Gallade" || forme === "Gardevoir") && mega) {
      ability = "Guard Up";
    } else if (forme === "Salamence" && mega) {
      ability = "Intimidate";
    } else {
      ability = ability0.name;
    }
    item = !isDoubles ? "Leftovers" : "Sitrus Berry";
    if (species.requiredItems) {
      item = this.sample(species.requiredItems);
    } else if (species.name === "Decidueye" && hasMove["spiritshackle"] && counter.setupType && !teamDetails.zMove) {
      item = "Decidium Z";
    } else if (species.name === "Kommo-o" && !teamDetails.zMove) {
      item = hasMove["clangingscales"] ? "Kommonium Z" : "Dragonium Z";
    } else if (species.name === "Lycanroc" && hasMove["stoneedge"] && counter.setupType && !teamDetails.zMove) {
      item = "Lycanium Z";
    } else if ((species.name === "Necrozma-Dusk-Mane" || species.name === "Necrozma-Dawn-Wings") && !teamDetails.zMove) {
      if (hasMove["autotomize"] && hasMove["sunsteelstrike"]) {
        item = "Solganium Z";
      } else if (hasMove["trickroom"] && hasMove["moongeistbeam"]) {
        item = "Lunalium Z";
      } else {
        item = "Ultranecrozium Z";
        if (!hasMove["photongeyser"]) {
          for (const moveid of moves) {
            const move = this.dex.moves.get(moveid);
            if (move.category === "Status" || hasType[move.type])
              continue;
            moves[moves.indexOf(moveid)] = "photongeyser";
            break;
          }
        }
      }
    } else if (species.name === "Porygon-Z" && hasMove["nastyplot"] && !hasMove["trick"] && !["nastyplot", "icebeam", "triattack"].includes(moves[0]) && !teamDetails.zMove && !isDoubles) {
      moves[moves.indexOf("nastyplot")] = "conversion";
      moves[moves.indexOf("triattack")] = "recover";
      item = "Normalium Z";
    } else if (species.name === "Raichu-Alola" && hasMove["thunderbolt"] && counter.setupType && !teamDetails.zMove) {
      item = "Aloraichium Z";
    } else if (species.name === "Eternatus" && counter.Status < 2) {
      item = "Metronome";
    } else if (species.baseSpecies === "Wishiwashi") {
      item = "Graduation Scale";
    } else if (species.baseSpecies === "Meloetta") {
      item = "Relic Charm";
    } else if (species.name === "Farfetch\u2019d") {
      item = "Leek";
    } else if (ability === "Poison Heal" || ability === "Toxic Boost") {
      item = "Toxic Orb";
    } else if (species.name === "Froslass" && !isDoubles) {
      item = "Wide Lens";
    } else if (species.name === "Latios" && counter.Special === 2 && !isDoubles) {
      item = "Soul Dew";
    } else if (species.name === "Lopunny") {
      item = isDoubles ? "Iron Ball" : "Toxic Orb";
    } else if (species.baseSpecies === "Marowak") {
      item = "Thick Club";
    } else if (species.baseSpecies === "Pikachu") {
      if (species.name !== "Pikachi-Starter") {
        forme = "Pikachu" + this.sample(["", "-Original", "-Hoenn", "-Sinnoh", "-Unova", "-Kalos", "-Alola", "-Partner", "-World"]);
      }
      item = "Light Ball";
    } else if (["Raichu", "Plusle", "Minun", "Pachirisu", "Emolga", "Dedenne", "Togedemaru", "Morpeko"].includes(species.baseSpecies)) {
      item = "Light Ball";
    } else if (species.name === "Regieleki" && !isDoubles) {
      item = "Normal Gem";
    } else if (species.name === "Shedinja") {
      item = !teamDetails.defog && !teamDetails.rapidSpin && !isDoubles ? "Heavy-Duty Boots" : "Focus Sash";
    } else if (species.name === "Shuckle" && hasMove["stickyweb"]) {
      item = "Mental Herb";
    } else if (["Corsola", "Tangrowth"].includes(species.name) && !!counter.Status && !isDoubles) {
      item = "Rocky Helmet";
    } else if (species.name === "Unfezant" || hasMove["focusenergy"]) {
      item = "Scope Lens";
    } else if (species.name === "Wobbuffet" || ["Cheek Pouch", "Harvest", "Ripen"].includes(ability)) {
      item = "Sitrus Berry";
    } else if (ability === "Gluttony") {
      item = this.sample(["Aguav", "Figy", "Iapapa", "Mago", "Wiki"]) + " Berry";
    } else if (ability === "Gorilla Tactics" || ability === "Imposter" || ability === "Magnet Pull" && hasMove["bodypress"] && !isDoubles) {
      item = "Choice Scarf";
    } else if (hasMove["trick"] || hasMove["switcheroo"] && !isDoubles) {
      if (species.baseStats.spe >= 60 && species.baseStats.spe <= 108 && !counter["priority"]) {
        item = "Choice Scarf";
      } else {
        item = counter.Physical > counter.Special ? "Choice Band" : "Choice Specs";
      }
    } else if (species.name === "Unown") {
      item = "Choice Specs";
    } else if (species.evos.length && !hasMove["uturn"] && !hasMove["partingshot"]) {
      item = "Eviolite";
    } else if (hasMove["bellydrum"]) {
      item = !!counter["priority"] || !hasMove["substitute"] ? "Sitrus Berry" : "Salac Berry";
    } else if (hasMove["geomancy"] || hasMove["meteorbeam"]) {
      item = "Power Herb";
    } else if (hasMove["shellsmash"]) {
      item = ability === "Sturdy" && !isLead && !isDoubles ? "Heavy-Duty Boots" : "White Herb";
    } else if (ability === "Guts" && counter.Physical >= 1 && hasMove["burnup"]) {
      item = "Flame Orb";
    } else if (ability === "Guts" && (counter.Physical > 2 || isDoubles)) {
      item = hasType["Fire"] ? "Toxic Orb" : "Flame Orb";
    } else if (ability === "Magic Guard" && counter.damagingMoves.length > 1) {
      item = hasMove["counter"] ? "Focus Sash" : "Life Orb";
    } else if (ability === "Sheer Force" && !!counter["sheerforce"]) {
      item = "Life Orb";
    } else if (ability === "Unburden") {
      item = hasMove["closecombat"] || hasMove["curse"] ? "White Herb" : "Sitrus Berry";
    } else if (hasMove["acrobatics"]) {
      item = ability === "Grassy Surge" ? "Grassy Seed" : "";
    } else if (hasMove["auroraveil"] || hasMove["lightscreen"] && hasMove["reflect"]) {
      item = "Light Clay";
    } else if (hasMove["rest"] && !hasMove["sleeptalk"] && ability !== "Shed Skin") {
      item = "Chesto Berry";
    } else if (hasMove["hypnosis"] && ability === "Beast Boost") {
      item = "Blunder Policy";
    } else if (hasMove["bellydrum"]) {
      if (ability === "Gluttony") {
        item = this.sample(["Aguav", "Figy", "Iapapa", "Mago", "Wiki"]) + " Berry";
      } else if (species.baseStats.spe <= 50 && !teamDetails.zMove && this.randomChance(1, 2)) {
        item = "Normalium Z";
      } else {
        item = "Sitrus Berry";
      }
    } else if ((hasMove["darkpulse"] && ability === "Fur Coat" && counter.setupType || hasMove["suckerpunch"] && ability === "Moxie" && counter["Dark"] < 2) && !teamDetails.zMove) {
      item = "Darkinium Z";
    } else if (hasMove["outrage"] && counter.setupType && !hasMove["fly"] && !teamDetails.zMove) {
      item = "Dragonium Z";
    } else if (hasMove["electricterrain"] || ability === "Electric Surge" && hasMove["thunderbolt"]) {
      item = "Electrium Z";
    } else if (hasMove["fleurcannon"] && !!counter["speedsetup"] && !teamDetails.zMove) {
      item = "Fairium Z";
    } else if ((hasMove["focusblast"] && hasMove["nastyplot"] && hasType["Fighting"] || hasMove["reversal"] && hasMove["substitute"]) && !teamDetails.zMove) {
      item = "Fightinium Z";
    } else if ((hasMove["magmastorm"] || hasMove["mindblown"] && !!counter["Status"]) && !teamDetails.zMove) {
      item = "Firium Z";
    } else if (!teamDetails.zMove && (hasMove["fly"] || hasMove["hurricane"] && species.baseStats.spa >= 125 && (!!counter.Status || hasMove["superpower"]) || (hasMove["bounce"] || hasMove["bravebird"]) && counter.setupType)) {
      item = "Flyinium Z";
    } else if (hasMove["sleeppowder"] && hasType["Grass"] && counter.setupType && species.baseStats.spe <= 70 && !teamDetails.zMove) {
      item = "Grassium Z";
    } else if (hasMove["dig"] && !teamDetails.zMove) {
      item = "Groundium Z";
    } else if (hasMove["happyhour"] || hasMove["holdhands"] || hasMove["encore"] && ability === "Contrary") {
      item = "Normalium Z";
    } else if (hasMove["photongeyser"] && counter.setupType && !teamDetails.zMove) {
      item = "Psychium Z";
    } else if (hasMove["hydropump"] && ability === "Battle Bond" && hasMove["uturn"] && !teamDetails.zMove) {
      item = "Waterium Z";
    } else if (hasMove["solarbeam"] && ability !== "Drought" && !hasMove["sunnyday"] && !teamDetails["sun"]) {
      item = !teamDetails.zMove ? "Grassium Z" : "Power Herb";
    } else if ((hasMove["hail"] || hasMove["blizzard"] && ability !== "Snow Warning") && !teamDetails.zMove) {
      item = "Icium Z";
    } else if (hasMove["raindance"]) {
      if (species.baseSpecies === "Castform" && !teamDetails.zMove) {
        item = "Waterium Z";
      } else {
        item = ability === "Forecast" ? "Damp Rock" : "Life Orb";
      }
    } else if (hasMove["sunnyday"]) {
      if ((species.baseSpecies === "Castform" || species.baseSpecies === "Cherrim") && !teamDetails.zMove) {
        item = "Firium Z";
      } else {
        item = ability === "Forecast" ? "Heat Rock" : "Life Orb";
      }
    } else if ((hasMove["partingshot"] || hasMove["memento"]) && !teamDetails.zMove) {
      item = "Darkinium Z";
    } else if (this.dex.getEffectiveness("Rock", species) >= 2 && !isDoubles) {
      item = "Heavy-Duty Boots";
    } else if (isDoubles && (hasMove["dragonenergy"] || hasMove["eruption"] || hasMove["waterspout"]) && counter.damagingMoves.length >= 4) {
      item = "Choice Scarf";
    } else if (isDoubles && hasMove["blizzard"] && ability !== "Snow Warning" && !teamDetails["hail"]) {
      item = "Blunder Policy";
    } else if (isDoubles && this.dex.getEffectiveness("Rock", species) >= 2 && !hasType["Flying"]) {
      item = "Heavy-Duty Boots";
    } else if (isDoubles && counter.Physical >= 4 && (hasType["Dragon"] || hasType["Fighting"] || hasType["Rock"] || hasMove["flipturn"] || hasMove["uturn"]) && !hasMove["fakeout"] && !hasMove["feint"] && !hasMove["rapidspin"] && !hasMove["suckerpunch"]) {
      item = !counter["priority"] && !hasAbility["Speed Boost"] && !hasMove["aerialace"] && species.baseStats.spe >= 60 && species.baseStats.spe <= 100 && this.randomChance(1, 2) ? "Choice Scarf" : "Choice Band";
    } else if (isDoubles && (counter.Special >= 4 && (hasType["Dragon"] || hasType["Fighting"] || hasType["Rock"] || hasMove["voltswitch"]) || counter.Special >= 3 && (hasMove["flipturn"] || hasMove["uturn"]) && !hasMove["acidspray"] && !hasMove["electroweb"])) {
      item = species.baseStats.spe >= 60 && species.baseStats.spe <= 100 && this.randomChance(1, 2) ? "Choice Scarf" : "Choice Specs";
    } else if (isDoubles && counter.damagingMoves.length >= 4 && species.baseStats.hp + species.baseStats.def + species.baseStats.spd >= 280) {
      item = "Assault Vest";
    } else if (isDoubles && counter.damagingMoves.length >= 3 && species.baseStats.spe >= 60 && ability !== "Multiscale" && ability !== "Sturdy" && !hasMove["acidspray"] && !hasMove["clearsmog"] && !hasMove["electroweb"] && !hasMove["fakeout"] && !hasMove["feint"] && !hasMove["icywind"] && !hasMove["incinerate"] && !hasMove["naturesmadness"] && !hasMove["rapidspin"] && !hasMove["snarl"] && !hasMove["uturn"]) {
      item = ability === "Defeatist" || species.baseStats.hp + species.baseStats.def + species.baseStats.spd >= 275 ? "Sitrus Berry" : "Life Orb";
    } else if (counter.Physical >= 4 && ability !== "Serene Grace" && !hasMove["fakeout"] && !hasMove["flamecharge"] && !hasMove["rapidspin"] && (!hasMove["tailslap"] || hasMove["uturn"]) && !isDoubles) {
      const scarfReqs = (species.baseStats.atk >= 100 || ability === "Huge Power") && species.baseStats.spe >= 60 && species.baseStats.spe <= 108 && ability !== "Speed Boost" && !counter["priority"] && !hasMove["aerialace"] && !hasMove["bounce"] && !hasMove["dualwingbeat"];
      item = scarfReqs && this.randomChance(2, 3) ? "Choice Scarf" : "Choice Band";
    } else if (counter.Physical >= 3 && (hasMove["copycat"] || hasMove["memento"] || hasMove["partingshot"]) && !hasMove["rapidspin"] && !isDoubles) {
      item = "Choice Band";
    } else if ((counter.Special >= 4 || counter.Special >= 3 && (hasMove["flipturn"] || hasMove["partingshot"] || hasMove["uturn"])) && !isDoubles) {
      const scarfReqs = species.baseStats.spa >= 100 && species.baseStats.spe >= 60 && species.baseStats.spe <= 108 && ability !== "Tinted Lens" && !counter.Physical;
      item = scarfReqs && this.randomChance(2, 3) ? "Choice Scarf" : "Choice Specs";
    } else if ((counter.Physical >= 3 && hasMove["defog"] || counter.Special >= 3 && hasMove["healingwish"]) && !counter["priority"] && !hasMove["uturn"] && !isDoubles) {
      item = "Choice Scarf";
    } else if (hasMove["raindance"] || hasMove["sunnyday"] || ability === "Speed Boost" && !counter["hazards"] || ability === "Stance Change" && counter.damagingMoves.length >= 3) {
      item = "Life Orb";
    } else if (this.dex.getEffectiveness("Rock", species) >= 1 && (["Defeatist", "Emergency Exit", "Multiscale"].includes(ability) || hasMove["courtchange"] || hasMove["defog"] || hasMove["rapidspin"]) && !isDoubles) {
      item = "Heavy-Duty Boots";
    } else if (species.name === "Necrozma-Dusk-Mane" || this.dex.getEffectiveness("Ground", species) < 2 && !!counter["speedsetup"] && counter.damagingMoves.length >= 3 && species.baseStats.hp + species.baseStats.def + species.baseStats.spd >= 300) {
      item = "Weakness Policy";
    } else if (counter.damagingMoves.length >= 4 && species.baseStats.hp + species.baseStats.def + species.baseStats.spd >= 235) {
      item = "Assault Vest";
    } else if ((hasMove["clearsmog"] || hasMove["curse"] || hasMove["haze"] || hasMove["healbell"] || hasMove["protect"] || hasMove["sleeptalk"] || hasMove["strangesteam"]) && (ability === "Moody" || !isDoubles)) {
      item = "Leftovers";
    } else if (isLead && !["Disguise", "Sturdy"].includes(ability) && !hasMove["substitute"] && !counter["recoil"] && !counter["recovery"] && species.baseStats.hp + species.baseStats.def + species.baseStats.spd < 255 && !isDoubles) {
      item = "Focus Sash";
    } else if (ability === "Water Bubble" && !isDoubles) {
      item = "Mystic Water";
    } else if (hasMove["clangoroussoul"] || hasMove["boomburst"] && !!counter["speedsetup"]) {
      item = "Throat Spray";
    } else if ((this.dex.getEffectiveness("Rock", species) >= 1 && (!teamDetails.defog || ability === "Intimidate" || hasMove["uturn"] || hasMove["voltswitch"]) || hasMove["rapidspin"] && (ability === "Regenerator" || !!counter["recovery"])) && !isDoubles) {
      item = "Heavy-Duty Boots";
    } else if (this.dex.getEffectiveness("Ground", species) >= 2 && !hasType["Poison"] && ability !== "Levitate" && !hasAbility["Iron Barbs"] && !isDoubles) {
      item = "Air Balloon";
    } else if (counter.damagingMoves.length >= 3 && !counter["damage"] && ability !== "Sturdy" && !hasMove["clearsmog"] && !hasMove["foulplay"] && !hasMove["rapidspin"] && !hasMove["substitute"] && !hasMove["uturn"] && !isDoubles && (!!counter["speedsetup"] || hasMove["trickroom"] || !!counter["drain"] || hasMove["psystrike"] || species.baseStats.spe > 40 && species.baseStats.hp + species.baseStats.def + species.baseStats.spd < 275)) {
      item = "Life Orb";
    } else if (counter.damagingMoves.length >= 4 && !counter["Dragon"] && !counter["Normal"] && !isDoubles) {
      item = "Expert Belt";
    } else if ((hasMove["dragondance"] || hasMove["swordsdance"]) && !isDoubles && (hasMove["outrage"] || !hasType["Bug"] && !hasType["Fire"] && !hasType["Ground"] && !hasType["Normal"] && !hasType["Poison"] && !["Pastel Veil", "Storm Drain"].includes(ability))) {
      item = "Lum Berry";
    }
    if (item === "Leftovers" && hasType["Poison"]) {
      item = "Black Sludge";
    }
    let z = false;
    if (item.zMove) {
      z = true;
    }
    let level;
    if (!isDoubles) {
      const levelScale = {
        uber: 78,
        ou: 80,
        uu: 82,
        ru: 84,
        nu: 86,
        pu: 88
      };
      const customScale = {
        // Banned Ability
        Dugtrio: 82,
        Gothitelle: 82,
        Pelipper: 84,
        Politoed: 84,
        Wobbuffet: 82,
        // Holistic judgement
        Castform: 100,
        Delibird: 100,
        Spinda: 100,
        Unown: 100
      };
      const tier = (0, import_dex.toID)(species.tier).replace("bl", "");
      level = levelScale[tier] || (species.nfe ? 90 : 80);
      if (customScale[forme])
        level = customScale[forme];
      if (species.name === "Zygarde-10%" && ability === "Power Construct")
        level = 80;
    } else {
      let baseStats = species.baseStats;
      if (species.baseSpecies === "Wishiwashi")
        baseStats = this.dex.species.get("wishiwashischool").baseStats;
      let bst = baseStats.hp + baseStats.atk + baseStats.def + baseStats.spa + baseStats.spd + baseStats.spe;
      const speciesAbility = baseSpecies === species ? ability : species.abilities[0];
      if (speciesAbility === "Huge Power" || speciesAbility === "Pure Power") {
        bst += baseStats.atk;
      } else if (speciesAbility === "Parental Bond") {
        bst += 0.25 * (counter.Physical > counter.Special ? baseStats.atk : baseStats.spa);
      } else if (speciesAbility === "Protean") {
        bst += 0.3 * (counter.Physical > counter.Special ? baseStats.atk : baseStats.spa);
      } else if (speciesAbility === "Fur Coat") {
        bst += baseStats.def;
      } else if (speciesAbility === "Slow Start") {
        bst -= baseStats.atk / 2 + baseStats.spe / 2;
      } else if (speciesAbility === "Truant") {
        bst *= 2 / 3;
      }
      if (item === "Eviolite") {
        bst += 0.5 * (baseStats.def + baseStats.spd);
      } else if (item === "Light Ball") {
        bst += baseStats.atk + baseStats.spa;
      }
      level = 70 + Math.floor((600 - Utils.clampIntRange(bst, 300, 600)) / 10.34);
    }
    const srWeakness = ability === "Magic Guard" || item === "Heavy-Duty Boots" ? 0 : this.dex.getEffectiveness("Rock", species);
    while (evs.hp > 1) {
      const hp = Math.floor(Math.floor(2 * species.baseStats.hp + ivs.hp + Math.floor(evs.hp / 4) + 100) * level / 100 + 10);
      if (hasMove["substitute"] && (item === "Sitrus Berry" || ability === "Power Construct" || hasMove["bellydrum"] && item === "Salac Berry")) {
        if (hp % 4 === 0)
          break;
      } else if (hasMove["bellydrum"] && (item === "Sitrus Berry" || ability === "Gluttony")) {
        if (hp % 2 === 0)
          break;
      } else if (hasMove["substitute"] && hasMove["reversal"]) {
        if (hp % 4 > 0)
          break;
      } else {
        if (srWeakness <= 0 || hp % (4 / srWeakness) > 0)
          break;
      }
      evs.hp -= 4;
    }
    if (hasMove["shellsidearm"] && item === "Choice Specs")
      evs.atk -= 4;
    if (!counter["Physical"] && !hasMove["transform"] && (!hasMove["shellsidearm"] || !counter.Status)) {
      evs.atk = 0;
      ivs.atk = 0;
    }
    if (hasMove["gyroball"] || hasMove["trickroom"] || hasAbility["counterclockwisespiral"]) {
      evs.spe = 0;
      ivs.spe = 0;
    }
    return {
      name: species.baseSpecies,
      species: forme,
      gender: species.gender,
      moves,
      ability,
      evs,
      ivs,
      item,
      level,
      shiny: this.randomChance(1, 1024),
      gigantamax: gmax,
      isMega: mega,
      isZ: z
    };
  }
  getPokemonPool(type, pokemon = [], isMonotype = false) {
    const exclude = pokemon.map((p) => (0, import_dex.toID)(p.species));
    const pokemonPool = [];
    for (const id in this.dex.data.FormatsData) {
      let species = this.dex.species.get(id);
      if (species.gen > this.gen || exclude.includes(species.id))
        continue;
      if (isMonotype) {
        if (!species.types.includes(type))
          continue;
        if (typeof species.battleOnly === "string") {
          species = this.dex.species.get(species.battleOnly);
          if (!species.types.includes(type))
            continue;
        }
      }
      pokemonPool.push(id);
    }
    return pokemonPool;
  }
  randomTeam() {
    const seed = this.prng.seed;
    const ruleTable = this.dex.formats.getRuleTable(this.format);
    const pokemon = [];
    const isMonotype = ruleTable.has("sametypeclause");
    const typePool = Object.keys(this.dex.data.TypeChart);
    const type = this.sample(typePool);
    let potd = false;
    if (global.Config && Config.potd && ruleTable.has("potd")) {
      potd = this.dex.species.get(Config.potd);
    }
    const baseFormes = {};
    const tierCount = {};
    const typeCount = {};
    const typeComboCount = {};
    const teamDetails = {};
    let megaCount = 0;
    for (const restrict of [true, false]) {
      if (pokemon.length >= 6)
        break;
      const pokemonPool = this.getPokemonPool(type, pokemon, isMonotype);
      while (pokemonPool.length && pokemon.length < 6) {
        let species = this.dex.species.get(this.sampleNoReplace(pokemonPool));
        if (!species.exists)
          continue;
        if (this.format.gameType === "singles") {
          if (!species.randomBattleMoves)
            continue;
        } else {
          if (!species.randomDoubleBattleMoves)
            continue;
        }
        if (baseFormes[species.baseSpecies])
          continue;
        switch (species.baseSpecies) {
          case "Arceus":
          case "Silvally":
            if (this.randomChance(8, 9))
              continue;
            break;
          case "Aegislash":
          case "Basculin":
          case "Gourgeist":
          case "Meloetta":
            if (this.randomChance(1, 2))
              continue;
            break;
          case "Greninja":
            if (this.gen >= 7 && this.randomChance(1, 2))
              continue;
            break;
          case "Darmanitan":
            if (species.gen === 8 && this.randomChance(1, 2))
              continue;
            break;
          case "Magearna":
          case "Toxtricity":
          case "Zacian":
          case "Zamazenta":
          case "Appletun":
          case "Blastoise":
          case "Butterfree":
          case "Copperajah":
          case "Grimmsnarl":
          case "Inteleon":
          case "Rillaboom":
          case "Snorlax":
          case "Urshifu":
            if (this.gen >= 8 && this.randomChance(1, 2))
              continue;
            break;
        }
        if (species.name === "Zoroark" && pokemon.length > 4)
          continue;
        const tier = species.tier;
        const types = species.types;
        const typeCombo = types.slice().sort().join();
        const isMega = species.name.endsWith("-Mega") || species.name.endsWith("-Mega-Y") || species.name.endsWith("-Mega-X");
        if (restrict) {
          if (tierCount[tier] >= (isMonotype ? 2 : 1) && !this.randomChance(1, Math.pow(5, tierCount[tier]))) {
            continue;
          }
          if (!isMonotype) {
            let skip = false;
            for (const typeName of types) {
              if (typeCount[typeName] > 1) {
                skip = true;
                break;
              }
            }
            if (skip)
              continue;
          }
          if (typeComboCount[typeCombo] >= (isMonotype ? 2 : 1))
            continue;
          if (isMega) {
            if (megaCount >= 1)
              continue;
            else
              megaCount++;
          }
        }
        if (!!potd && potd.exists && pokemon.length < 1)
          species = potd;
        const set = this.randomSet(species, teamDetails, pokemon.length === 0, this.format.gameType !== "singles");
        pokemon.push(set);
        if (pokemon.length === 6) {
          const illusion = teamDetails["illusion"];
          if (illusion)
            pokemon[illusion - 1].level = pokemon[5].level;
          break;
        }
        baseFormes[species.baseSpecies] = 1;
        if (tierCount[tier]) {
          tierCount[tier]++;
        } else {
          tierCount[tier] = 1;
        }
        for (const typeName of types) {
          if (typeName in typeCount) {
            typeCount[typeName]++;
          } else {
            typeCount[typeName] = 1;
          }
        }
        if (typeCombo in typeComboCount) {
          typeComboCount[typeCombo]++;
        } else {
          typeComboCount[typeCombo] = 1;
        }
        if (set.ability === "Drizzle" || set.moves.includes("raindance"))
          teamDetails["rain"] = 1;
        if (set.ability === "Drought" || set.moves.includes("sunnyday"))
          teamDetails["sun"] = 1;
        if (set.ability === "Sand Stream" || set.ability === "Sand Spit")
          teamDetails["sand"] = 1;
        if (set.ability === "Snow Warning")
          teamDetails["hail"] = 1;
        if (set.moves.includes("spikes"))
          teamDetails["spikes"] = (teamDetails["spikes"] || 0) + 1;
        if (set.moves.includes("stealthrock"))
          teamDetails["stealthRock"] = 1;
        if (set.moves.includes("stickyweb"))
          teamDetails["stickyWeb"] = 1;
        if (set.moves.includes("toxicspikes"))
          teamDetails["toxicSpikes"] = 1;
        if (set.moves.includes("defog"))
          teamDetails["defog"] = 1;
        if (set.moves.includes("rapidspin"))
          teamDetails["rapidSpin"] = 1;
        if (set.moves.includes("auroraveil") || set.moves.includes("reflect") && set.moves.includes("lightscreen"))
          teamDetails["screens"] = 1;
        if (set.ability === "Illusion")
          teamDetails["illusion"] = pokemon.length;
      }
    }
    if (pokemon.length < 6)
      throw new Error(`Could not build a random team for ${this.format} (seed=${seed})`);
    return pokemon;
  }
  /*
  	randomCAP1v1Sets: AnyObject = require('./cap-1v1-sets.json');
  
  	randomCAP1v1Team() {
  		const pokemon = [];
  		const pokemonPool = Object.keys(this.randomCAP1v1Sets);
  
  		while (pokemonPool.length && pokemon.length < 3) {
  			const species = this.dex.species.get(this.sampleNoReplace(pokemonPool));
  			if (!species.exists) throw new Error(`Invalid Pokemon "${species}" in ${this.format}`);
  
  			const setData: AnyObject = this.sample(this.randomCAP1v1Sets[species.name]);
  			const set = {
  				name: species.baseSpecies,
  				species: species.name,
  				gender: species.gender,
  				item: (Array.isArray(setData.item) ? this.sample(setData.item) : setData.item) || '',
  				ability: (Array.isArray(setData.ability) ? this.sample(setData.ability) : setData.ability),
  				shiny: this.randomChance(1, 1024),
  				evs: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0, ...setData.evs},
  				nature: setData.nature,
  				ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31, ...setData.ivs || {}},
  				moves: setData.moves.map((move: any) => Array.isArray(move) ? this.sample(move) : move),
  			};
  			pokemon.push(set);
  		}
  		return pokemon;
  	}
  	*/
}
var random_teams_default = RandomTeams;
//# sourceMappingURL=random-teams.js.map
