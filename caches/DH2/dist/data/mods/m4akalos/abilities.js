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
var abilities_exports = {};
__export(abilities_exports, {
  Abilities: () => Abilities
});
module.exports = __toCommonJS(abilities_exports);
const hyperspaceLookup = {
  mewtwo: { move: "Psystrike" },
  lugia: { move: "Aeroblast" },
  hooh: { move: "Sacred Fire" },
  groudon: { move: "Precipice Blades" },
  kyogre: { move: "Origin Pulse" },
  rayquaza: { move: "Dragon Ascent" },
  dialga: { move: "Roar of Time" },
  palkia: { move: "Spacial Rend" },
  giratinaorigin: { move: "Shadow Force" },
  reshiram: { move: "Blue Flare" },
  zekrom: { move: "Bolt Strike" },
  kyurem: { move: "Glaciate" },
  xerneas: { move: "Geomancy" },
  yveltal: { move: "Oblivion Wing" },
  zygardecomplete: { move: "Core Enforcer" },
  cosmog: { move: "Teleport" },
  solgaleo: { move: "Sunsteel Strike" },
  lunala: { move: "Moongeist Beam" },
  necrozmaultra: { move: "Light That Burns the Sky" },
  zaciancrowned: { move: "Behemoth Blade" },
  zamazentacrowned: { move: "Behemoth Bash" },
  eternatus: { move: "Eternabeam" },
  calyrexice: { move: "Glacial Lance" },
  calyrexshadow: { move: "Astral Barrage" }
};
const Abilities = {
  managate: {
    desc: "When using a Psychic-type move, this Pok\xE9mon moves last among Pok\xE9mon using the same or greater priority moves, then switches out to a chosen ally.",
    shortDesc: "Psychic moves: move last in priority bracket, pivot the user out.",
    onFractionalPriorityPriority: -1,
    onFractionalPriority(priority, pokemon, target, move) {
      if (move.category === "Status" && move.type === "Psychic")
        return -0.1;
    },
    onModifyMove(move) {
      if (move.category === "Status" && move.type === "Psychic" && !move.selfSwitch)
        move.selfSwitch = true;
    },
    onSourceHit(target, source, move) {
      if (move.category === "Status" && move.type === "Psychic" && move.selfSwitch && this.canSwitch(source.side)) {
        this.add("-ability", source, "Mana Gate");
        this.add("-message", `${source.name} switches out using Mana Gate!`);
      }
    },
    name: "Mana Gate",
    rating: 3,
    num: -1001
  },
  partialeclipse: {
    desc: "Causes all adjacent Pok\xE9mon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if this Pok\xE9mon has 1/2 or less of its maximum HP.",
    shortDesc: "When HP is 1/2 or less, adjacent Pok\xE9mon lose 1/8 of their max HP each turn.",
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    onResidual(pokemon) {
      if (!pokemon.hp || pokemon.hp > pokemon.maxhp / 2)
        return;
      for (const target of pokemon.side.foe.active) {
        if (target && target.hp)
          this.damage(target.baseMaxhp / 8, target, pokemon);
      }
    },
    name: "Partial Eclipse",
    rating: 3,
    num: -1002
  },
  marshlandlord: {
    shortDesc: "On switch-in, summons Water Sport and Mud Sport.",
    onStart(source) {
      this.add("-ability", source, "Marshland Lord");
      this.field.addPseudoWeather("watersport");
      this.field.addPseudoWeather("mudsport");
    },
    name: "Marshland Lord",
    rating: 3.5,
    num: -1003
  },
  badinfluence: {
    shortDesc: "If this Pok\xE9mon has a stat stage lowered, all Pok\xE9mon on the field have the same stat stage lowered.",
    onBoost(boost, target, source, effect) {
      if (!boost || effect.id === "mirrorarmor" || effect.id === "badinfluence")
        return;
      let b;
      const negativeBoost = {};
      for (b in boost) {
        if (boost[b] < 0) {
          if (target.boosts[b] === -6)
            continue;
          negativeBoost[b] = boost[b];
        }
      }
      let activated = false;
      for (const pokemon of this.getAllActive()) {
        if (pokemon === target || pokemon.fainted)
          continue;
        if (!activated) {
          this.add("-ability", target, "Bad Influence");
          activated = true;
        }
        this.boost(negativeBoost, pokemon, target, null, true);
      }
    },
    name: "Bad Influence",
    rating: 4,
    num: -1004
  },
  petrification: {
    shortDesc: "Ice immunity; adds Rock to this Pok\xE9mon when hit with an Ice move.",
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ice") {
        move.accuracy = true;
        if (target.hasType("Rock") || !target.addType("Rock")) {
          this.add("-immune", target, "[from] ability: Petrification");
        } else {
          this.add("-start", target, "typeadd", "Rock", "[from] ability: Petrification");
        }
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Petrification",
    rating: 3,
    num: -1005
  },
  repulsive: {
    shortDesc: "When lowering a target's stats, also lowers target's Defense by 1 stage.",
    onAnyAfterEachBoost(boost, target, source, effect) {
      if (!source || source !== this.effectState.target || effect.name === "Repulsive")
        return;
      let statsLowered = false;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          statsLowered = true;
        }
      }
      if (statsLowered && target.hp) {
        this.add("-ability", source, "Repulsive");
        this.boost({ def: -1 }, target, source, null, true);
      }
    },
    name: "Repulsive",
    rating: 3,
    num: -1006
  },
  hyperspacemayhem: {
    shortDesc: "Hyperspace Hole summons a random restricted Legendary Pok\xE9mon to attack instead.",
    name: "Hyperspace Mayhem",
    onModifyMove(move) {
      if (move && move.id === "hyperspacehole")
        move.target = "self";
    },
    onSourceTryHitPriority: 1,
    onSourceTryHit(target, source, move) {
      if (move && move.id === "hyperspacehole" && source.hasAbility("hyperspacemayhem")) {
        let summons = [];
        for (const id in hyperspaceLookup)
          summons.push(id);
        const summon = this.sample(summons);
        const userBackup = {
          name: source.name,
          fullname: source.fullname,
          status: source.status,
          gender: source.gender,
          species: source.species,
          nature: this.dex.natures.get(source.set.nature).name,
          evs: source.set.evs,
          ivs: source.set.ivs,
          shiny: source.set.shiny,
          //update with "were we shiny last turn"
          volatiles: source.volatiles,
          level: source.level
        };
        this.add("-ability", source, "Hyperspace Mayhem");
        let isShiny = userBackup.shiny;
        if (this.randomChance(1, 4096) || this.randomChance(1, 4096) || this.randomChance(1, 4096)) {
          isShiny = true;
          source.set.shiny = true;
          source.shiny = true;
        } else {
          isShiny = false;
          source.set.shiny = false;
          source.shiny = false;
        }
        let wasShiny = userBackup.shiny ? true : false;
        if (wasShiny != isShiny) {
          let details = source.species + (userBackup.level === 100 ? "" : ", L" + userBackup.level) + (userBackup.gender === "" ? "" : ", " + userBackup.gender) + (isShiny ? ", shiny" : "");
          this.add("replace", source, details);
        }
        const boostBackup = {};
        for (const stat in source.boosts) {
          boostBackup[stat] = source.boosts[stat];
        }
        source.volatiles = {};
        source.addVolatile("hyperspacemayhem", source, null);
        this.add("-message", `By using Hyperspace Hole, ${source.name} summons a Legendary Pok\xE9mon!`);
        for (const stat in boostBackup) {
          boostBackup[stat] *= -1;
        }
        source.volatiles["hyperspacemayhem"].midtransform = true;
        this.boost(boostBackup, source, source, null, true);
        source.name = this.dex.species.get(summon).baseSpecies ? this.dex.species.get(summon).baseSpecies : this.dex.species.get(summon).name;
        source.fullname = source.side.id + ": " + source.name;
        source.gender = "";
        source.set.evs = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
        source.set.ivs = { hp: this.random(32), atk: this.random(32), def: this.random(32), spa: this.random(32), spd: this.random(32), spe: this.random(32) };
        let ivs = [];
        let ivsB = [];
        let ivsC = [];
        let perfectIVs = [];
        for (const id in source.set.ivs)
          ivs.push(id);
        perfectIVs.push(this.sample(ivs));
        for (const id in source.set.ivs) {
          if (perfectIVs.includes(id))
            continue;
          ivsB.push(id);
        }
        perfectIVs.push(this.sample(ivsB));
        for (const id in source.set.ivs) {
          if (perfectIVs.includes(id))
            continue;
          ivsC.push(id);
        }
        perfectIVs.push(this.sample(ivsC));
        source.set.ivs[perfectIVs[0]] = 31;
        source.set.ivs[perfectIVs[1]] = 31;
        source.set.ivs[perfectIVs[2]] = 31;
        const natures = this.dex.natures.all();
        source.nature = this.sample(natures).name;
        this.add("-message", `It's ${source.name}!`);
        source.volatiles["hyperspacemayhem"].userBackup = userBackup;
        source.volatiles["hyperspacemayhem"].fakelegend = true;
        source.formeChange(this.dex.species.get(summon), move);
        if (hyperspaceLookup[summon].move === "Geomancy" || hyperspaceLookup[summon].move === "Shadow Force") {
          this.add("-prepare", source, hyperspaceLookup[summon].move);
          source.addVolatile(this.dex.moves.get(hyperspaceLookup[summon].move).id, target);
        }
        if (hyperspaceLookup[summon].move === "Geomancy")
          source.volatiles["hyperspacemayhem"].geomancy = true;
        this.actions.useMove(hyperspaceLookup[summon].move, source, this.getRandomTarget(source, hyperspaceLookup[summon].move), this.dex.moves.get("instruct"));
        if (hyperspaceLookup[summon].move === "Geomancy") {
          source.volatiles["hyperspacemayhem"].geomancy = null;
          source.name = this.dex.species.get(summon).baseSpecies ? this.dex.species.get(summon).baseSpecies : this.dex.species.get(summon).name;
          source.fullname = source.side.id + ": " + source.name;
        }
        if (hyperspaceLookup[summon].move === "Teleport")
          this.add("-message", `Oops! Looks like ${source.name} doesn't know how to battle!`);
        source.volatiles["hyperspacemayhem"].fakelegend = null;
        source.name = userBackup.name;
        source.fullname = userBackup.fullname;
        source.status = userBackup.status;
        source.gender = userBackup.gender;
        source.nature = userBackup.nature;
        source.set.evs = userBackup.evs;
        source.set.ivs = userBackup.ivs;
        source.shiny = userBackup.shiny;
        if (hyperspaceLookup[summon].move !== "Geomancy") {
          const resetStats = {};
          for (const stat in source.boosts) {
            resetStats[stat] = source.boosts[stat] * -1;
          }
          this.boost(resetStats, source, source, null, true);
        }
        for (const stat in boostBackup) {
          boostBackup[stat] *= -1;
        }
        this.boost(boostBackup, source, source, null, true);
        source.volatiles["hyperspacemayhem"].midtransform = null;
        delete source.volatiles["hyperspacemayhem"];
        source.volatiles = userBackup.volatiles;
        source.formeChange(userBackup.species, move);
        this.add("-message", `${this.dex.species.get(summon).baseSpecies ? this.dex.species.get(summon).baseSpecies : this.dex.species.get(summon).name} went back home!`);
        this.add("-message", `Bye, bye, ${this.dex.species.get(summon).baseSpecies ? this.dex.species.get(summon).baseSpecies : this.dex.species.get(summon).name}!`);
        return null;
      }
    },
    condition: {
      onModifyMove(move, pokemon) {
        if (move.selfSwitch)
          delete move.selfSwitch;
      },
      onDamage(damage, target, source, effect) {
        this.hint(`${target.name} is a different Pok\xE9mon, so the damage it takes doesn't affect ${this.effectState.userBackup.name}!`);
        return 0;
      },
      onSetStatus(status, target, source, effect) {
        return null;
      },
      onTryAddVolatile(status, pokemon) {
        if (status.id === "geomancy" || status.id === "shadowforce")
          return;
        return null;
      },
      onBasePower(basePower, user, target, move) {
        if (user.baseSpecies.num === 487 && (move.type === "Ghost" || move.type === "Dragon")) {
          return this.chainModify([4915, 4096]);
        }
      }
    },
    rating: 4,
    num: -1007
  },
  // crossover Megas
  alluring: {
    shortDesc: "This Pok\xE9mon removes the pivoting effect of opposing Pok\xE9mon's moves.",
    onStart(pokemon) {
      this.add("-ability", pokemon, "Alluring");
      this.add("-message", `Pok\xE9mon opposing ${pokemon.name} can't pivot out of battle!`);
    },
    onAnyModifyMove(move, pokemon) {
      if (pokemon.side === this.effectState.target.side)
        return;
      if (move.selfSwitch && !move.ignoreAbility)
        delete move.selfSwitch;
    },
    name: "Alluring",
    rating: 4,
    num: -73
  },
  redlicorice: {
    desc: "This Pok\xE9mon's Fairy-type attacks cause the target to become sticky and flammable. When a Fire-type attack is used against a target that is sticky and flammable, its power is multiplied by 1.5, and the target is burned but is no longer sticky and flammable. When a Fire-type attack is used by an attacker that is sticky and flammable, the user takes recoil damage equal to 50% the HP lost by the target (rounded half up, but not less than 1 HP), and the user is burned but is no longer sticky and flammable.",
    shortDesc: "Fairy attacks make target sticky; Fire attacks: burn, 50% more damage to sticky Pok\xE9mon.",
    onSourceHit(target, source, move) {
      if (move.category !== "Status" && move.type === "Fairy") {
        target.addVolatile("redlicorice");
      }
    },
    condition: {
      onStart(pokemon, source, effect) {
        this.add("-start", pokemon, "Sticky Gel", "[from] ability: Red Licorice", "[of] " + source);
      },
      onAnyDamage(damage, target, source, effect) {
        if (effect && effect.effectType === "Move" && effect.type === "Fire" && source === this.effectState.target) {
          if (this.effectState.damage) {
            if (target.hp <= damage) {
              this.effectState.damage += target.hp;
            } else {
              this.effectState.damage += damage;
            }
          } else {
            if (target.hp <= damage) {
              this.effectState.damage = target.hp;
            } else {
              this.effectState.damage = damage;
            }
          }
          this.effectState.lit = true;
        } else if (effect && effect.effectType === "Move" && effect.type === "Fire" && target === this.effectState.target) {
          this.effectState.lit = true;
          return damage * 1.5;
        }
      },
      onUpdate(pokemon) {
        if (this.effectState.lit) {
          pokemon.removeVolatile("redlicorice");
          this.add("-end", pokemon, "Sticky Gel", "[silent]");
          this.hint("The sticky gel ignited!");
          if (this.effectState.damage) {
            this.damage(this.effectState.damage / 2, this.effectState.target);
          }
          pokemon.trySetStatus("brn", this.effectState.source);
        }
      }
    },
    name: "Red Licorice",
    rating: 3,
    num: -56
  },
  diamonddust: {
    desc: "On switch-in, this Pok\xE9mon summons Diamond Dust for 5 turns. During the effect, Pok\xE9mon are immune to all Rock-type attacks and Stealth Rock; Weather Ball becomes an Ice-type move, and its base power is 100; and other weather-related moves and Abilities behave as they do in Hail.",
    shortDesc: "5 turns: all Pok\xE9mon are immune to Rock; counts as hail.",
    onStart(source) {
      this.field.setWeather("diamonddust");
    },
    name: "Diamond Dust",
    rating: 3,
    num: -27
  },
  // Diamond Dust modded into other Abilities
  forecast: {
    inherit: true,
    onWeatherChange(pokemon) {
      if (pokemon.baseSpecies.baseSpecies !== "Castform" || pokemon.transformed)
        return;
      let forme = null;
      switch (pokemon.effectiveWeather()) {
        case "sunnyday":
        case "desolateland":
          if (pokemon.species.id !== "castformsunny")
            forme = "Castform-Sunny";
          break;
        case "raindance":
        case "primordialsea":
          if (pokemon.species.id !== "castformrainy")
            forme = "Castform-Rainy";
          break;
        case "hail":
        case "diamonddust":
        case "snow":
          if (pokemon.species.id !== "castformsnowy")
            forme = "Castform-Snowy";
          break;
        default:
          if (pokemon.species.id !== "castform")
            forme = "Castform";
          break;
      }
      if (pokemon.isActive && forme) {
        pokemon.formeChange(forme, this.effect, false, "[msg]");
      }
    }
  },
  icebody: {
    shortDesc: "If Hail, Snow or Diamond Dust is active, heals 1/16 of its max HP each turn; immunity to Hail.",
    inherit: true,
    onWeather(target, source, effect) {
      if (effect.id === "hail" || effect.id === "diamonddust" || effect.id === "snow") {
        this.heal(target.baseMaxhp / 16);
      }
    }
  },
  iceface: {
    inherit: true,
    shortDesc: "If Eiscue, the first physical hit it takes deals 0 damage. Effect restored in Hail, Snow, Diamond Dust.",
    onStart(pokemon) {
      if (this.field.isWeather(["hail", "diamonddust", "snow"]) && pokemon.species.id === "eiscuenoice" && !pokemon.transformed) {
        this.add("-activate", pokemon, "ability: Ice Face");
        this.effectState.busted = false;
        pokemon.formeChange("Eiscue", this.effect, true);
      }
    },
    onWeatherChange(pokemon, source, sourceEffect) {
      if (sourceEffect?.suppressWeather)
        return;
      if (!pokemon.hp)
        return;
      if (this.field.isWeather(["hail", "diamonddust", "snow"]) && pokemon.species.id === "eiscuenoice" && !pokemon.transformed) {
        this.add("-activate", pokemon, "ability: Ice Face");
        this.effectState.busted = false;
        pokemon.formeChange("Eiscue", this.effect, true);
      }
    }
  },
  slushrush: {
    inherit: true,
    shortDesc: "If Hail, Snow or Diamond Dust is active, this Pok\xE9mon's Speed is doubled.",
    onModifySpe(spe, pokemon) {
      if (this.field.isWeather(["hail", "diamonddust", "snow"])) {
        return this.chainModify(2);
      }
    }
  },
  snowcloak: {
    inherit: true,
    shortDesc: "If Hail, Snow or Diamond Dust is active, evasiveness is 1.25x; immunity to Hail.",
    onModifyAccuracy(accuracy) {
      if (typeof accuracy !== "number")
        return;
      if (this.field.isWeather(["hail", "diamonddust", "snow"])) {
        this.debug("Snow Cloak - decreasing accuracy");
        return this.chainModify([3277, 4096]);
      }
    }
  }
};
//# sourceMappingURL=abilities.js.map
