"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target2, all) => {
  for (var name in all)
    __defProp(target2, name, { get: all[name], enumerable: true });
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
const Abilities = {
  /* FEG9 abils */
  unfiltered: {
    shortDesc: "Filter + Contrary + This Pokemon's NvE Moves deal 4/3x damage.",
    onSourceModifyDamage(damage, source2, target2, move) {
      if (target2.getMoveHitData(move).typeMod > 0) {
        this.debug("Unfiltered neutralize");
        return this.chainModify(0.75);
      }
    },
    onChangeBoost(boost, target2, source2, effect) {
      if (effect?.id === "zpower")
        return;
      let i;
      for (i in boost) {
        boost[i] *= -1;
      }
    },
    onModifyDamage(damage, source2, target2, move) {
      if (target2.getMoveHitData(move).typeMod < 0) {
        this.debug("Unfiltered boost");
        return this.chainModify([5461, 4096]);
      }
    },
    flags: { breakable: 1 },
    name: "Unfiltered"
  },
  quickstart: {
    shortDesc: "On switch-in, this Pokemon's Attack and Speed are doubled for 5 turns.",
    onStart(pokemon) {
      pokemon.addVolatile("quickstart");
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["quickstart"];
      this.add("-end", pokemon, "Quickstart", "[silent]");
    },
    condition: {
      duration: 5,
      onStart(target2) {
        this.add("-start", target2, "ability: Quickstart");
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, pokemon) {
        return this.chainModify(2);
      },
      onModifySpe(spe, pokemon) {
        return this.chainModify(2);
      },
      onEnd(target2) {
        this.add("-end", target2, "Quickstart");
      }
    },
    flags: {},
    name: "Quickstart"
  },
  holygrail: {
    shortDesc: "Good As Gold + Levitate",
    onTryHit(target2, source2, move) {
      if (move.category === "Status" && target2 !== source2) {
        this.add("-immune", target2, "[from] ability: Holy Grail");
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Holy Grail"
  },
  alldevouring: {
    shortDesc: "Beast Boost + Run Away",
    onSourceAfterFaint(length, target2, source2, effect) {
      if (effect?.effectType === "Move") {
        const bestStat = source2.getBestStat(true, true);
        this.boost({ [bestStat]: length }, source2);
      }
    },
    name: "All-Devouring"
  },
  galvanicrelay: {
    shortDesc: "Mycelium Might + Transistor; Electric attacks also ignore abilities.",
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Electric") {
        this.debug("Galvanic Relay boost");
        return this.chainModify([5325, 4096]);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Electric") {
        this.debug("Galvanic Relay boost");
        return this.chainModify([5325, 4096]);
      }
    },
    onFractionalPriorityPriority: -1,
    onFractionalPriority(priority, pokemon, target2, move) {
      if (move.category === "Status") {
        return -0.1;
      }
    },
    onModifyMove(move) {
      if (move.category === "Status" || move.type === "Electric") {
        move.ignoreAbility = true;
      }
    },
    name: "Galvanic Relay"
  },
  forestfury: {
    shortDesc: "Intimidate + Hyper Cutter + Cannot be statused by opponents.",
    onStart(pokemon) {
      let activated = false;
      for (const target2 of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Forest Fury", "boost");
          activated = true;
        }
        if (target2.volatiles["substitute"]) {
          this.add("-immune", target2);
        } else {
          this.boost({ atk: -1 }, target2, pokemon, null, true);
        }
      }
    },
    onTryBoost(boost, target2, source2, effect) {
      if (source2 && target2 === source2)
        return;
      if (boost.atk && boost.atk < 0) {
        delete boost.atk;
        if (!effect.secondaries) {
          this.add("-fail", target2, "unboost", "Attack", "[from] ability: Forest Fury", "[of] " + target2);
        }
      }
    },
    onSetStatus(status, target2, source2, effect) {
      if (effect?.status) {
        this.add("-immune", target2, "[from] ability: Forest Fury");
      }
      return false;
    },
    onTryAddVolatile(status, target2) {
      if (status.id === "yawn") {
        this.add("-immune", target2, "[from] ability: Forest Fury");
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Forest Fury"
  },
  growthspurt: {
    shortDesc: "Effects of Harvest; Berry is restored at 1/3 or less of its max HP.",
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    onResidual(pokemon) {
      if (pokemon.hp && !pokemon.item && this.dex.items.get(pokemon.lastItem).isBerry && (this.field.isWeather(["sunnyday", "desolateland"]) || this.randomChance(1, 2))) {
        pokemon.setItem(pokemon.lastItem);
        pokemon.lastItem = "";
        this.add("-item", pokemon, pokemon.getItem(), "[from] ability: Growth Spurt");
      }
    },
    onAfterMoveSecondary(target2, source2, move) {
      if (!source2 || source2 === target2 || !target2.hp || !move.totalDamage)
        return;
      const lastAttackedBy = target2.getLastAttackedBy();
      if (!lastAttackedBy)
        return;
      const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
      const threshold = target2.maxhp / 3;
      if (target2.hp <= threshold && target2.hp + damage > threshold && !target2.item && this.dex.items.get(target2.lastItem).isBerry) {
        target2.setItem(target2.lastItem);
        target2.lastItem = "";
        this.add("-item", target2, target2.getItem(), "[from] ability: Growth Spurt");
      }
    },
    flags: {},
    name: "Growth Spurt"
  },
  lightdrive: {
    shortDesc: "Light Metal + Quark Drive. Quark Drive activates if the user is lighter.",
    onModifyWeight(weighthg) {
      return this.trunc(weighthg / 2);
    },
    onStart(pokemon) {
      this.singleEvent("TerrainChange", this.effect, this.effectState, pokemon);
    },
    onTerrainChange(pokemon) {
      if (pokemon.transformed)
        return;
      if (this.field.isTerrain("electricterrain")) {
        pokemon.addVolatile("lightdrive");
      } else if (!pokemon.volatiles["lightdrive"]?.fromBooster) {
        pokemon.removeVolatile("lightdrive");
      }
    },
    onUpdate(pokemon) {
      if (!(pokemon.volatiles["lightdrive"]?.fromBooster || pokemon.volatiles["lightdrive"]?.fromWeightDiff) && !this.field.isTerrain("electricterrain")) {
        pokemon.removeVolatile("lightdrive");
      }
    },
    onAnyPrepareHit(source2, target2, move) {
      if (move.hasBounced || source2 === target2)
        return;
      const user = this.effectState.target;
      if (user.volatiles["lightdrive"] && !user.volatiles["lightdrive"].fromWeightDiff)
        return;
      var yourweight;
      if (source2 === user) {
        yourweight = target2.getWeight();
      } else if (target2 === user) {
        yourweight = source2.getWeight();
      } else
        return;
      if (user.getWeight() < yourweight) {
        if (user.volatiles["lightdrive"])
          return;
        user.addVolatile("lightdrive");
        user.volatiles["lightdrive"].fromWeightDiff = true;
      } else if (user.volatiles["lightdrive"]) {
        if (this.field.isTerrain("electricterrain")) {
          user.volatiles["lightdrive"].fromWeightDiff = false;
        } else {
          user.removeVolatile("lightdrive");
        }
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["lightdrive"];
      this.add("-end", pokemon, "Light Drive", "[silent]");
    },
    condition: {
      noCopy: true,
      onStart(pokemon, source2, effect) {
        if (effect?.name === "Booster Energy") {
          this.effectState.fromBooster = true;
          this.add("-activate", pokemon, "ability: Light Drive", "[fromitem]");
        } else {
          this.add("-activate", pokemon, "ability: Light Drive");
        }
        this.effectState.bestStat = pokemon.getBestStat(false, true);
        this.add("-start", pokemon, "quarkdrive" + this.effectState.bestStat);
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, pokemon) {
        if (this.effectState.bestStat !== "atk" || pokemon.ignoringAbility())
          return;
        this.debug("Light Drive atk boost");
        return this.chainModify([5325, 4096]);
      },
      onModifyDefPriority: 6,
      onModifyDef(def, pokemon) {
        if (this.effectState.bestStat !== "def" || pokemon.ignoringAbility())
          return;
        this.debug("Light Drive def boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpAPriority: 5,
      onModifySpA(spa, pokemon) {
        if (this.effectState.bestStat !== "spa" || pokemon.ignoringAbility())
          return;
        this.debug("Light Drive spa boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpDPriority: 6,
      onModifySpD(spd, pokemon) {
        if (this.effectState.bestStat !== "spd" || pokemon.ignoringAbility())
          return;
        this.debug("Light Drive spd boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpe(spe, pokemon) {
        if (this.effectState.bestStat !== "spe" || pokemon.ignoringAbility())
          return;
        for (const target2 of pokemon.foes()) {
          if (target2.hasAbility("dyschronometria")) {
            this.debug("Dyschronometria negating spe boost");
            return;
          }
        }
        this.debug("Light Drive spe boost");
        return this.chainModify(1.5);
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Quark Drive");
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Light Drive"
  },
  scraprock: {
    shortDesc: "Scrappy + Solid Rock",
    onSourceModifyDamage(damage, source2, target2, move) {
      if (target2.getMoveHitData(move).typeMod > 0) {
        this.debug("Scrap Rock neutralize");
        return this.chainModify(0.75);
      }
    },
    onModifyMovePriority: -5,
    onModifyMove(move) {
      if ((move.ignoreImmunity || (move.ignoreImmunity = {})) !== true) {
        move.ignoreImmunity["Fighting"] = true;
        move.ignoreImmunity["Normal"] = true;
      }
    },
    onTryBoost(boost, target2, source2, effect) {
      if (["Intimidate", "Mad Cow", "Forest Fury", "Shock Factor", "Daunting Storm", "Toxic Attitude"].includes(effect.name) && boost.atk) {
        delete boost.atk;
        this.add("-fail", target2, "unboost", "Attack", "[from] ability: Scrap Rock", "[of] " + target2);
      } else if (effect.name === "Fishy Threat" && boost.spe) {
        delete boost.spe;
        this.add("-fail", target2, "unboost", "Speed", "[from] ability: Scrap Rock", "[of] " + target2);
      }
    },
    flags: { breakable: 1 },
    name: "Scrap Rock",
    rating: 3
  },
  reachless: {
    shortDesc: "Effects of Rock Head and Reckless.",
    onBasePowerPriority: 23,
    onBasePower(basePower, attacker, defender, move) {
      if (move.recoil || move.hasCrashDamage) {
        this.debug("Reachless boost");
        return this.chainModify([4915, 4096]);
      }
    },
    onDamage(damage, target2, source2, effect) {
      if (effect.id === "recoil") {
        if (!this.activeMove)
          throw new Error("Battle.activeMove is null");
        if (this.activeMove.id !== "struggle")
          return null;
      }
    },
    flags: {},
    name: "Reachless",
    rating: 3
  },
  openingact: {
    shortDesc: "Protosynthesis + Prankster. Protosynthesis also activates when using a priority move.",
    onPrepareHit(source2, target2, move) {
      const isItSunny = this.field.isWeather("sunnyday");
      if (move.priority > 0) {
        if (isItSunny || source2.volatiles["openingact"])
          return;
        source2.addVolatile("openingact");
        source2.volatiles["openingact"].fromPriority = true;
      } else if (source2.volatiles["openingact"]?.fromPriority) {
        if (isItSunny) {
          source2.volatiles["openingact"].fromPriority = false;
        } else {
          source2.removeVolatile("openingact");
        }
      }
    },
    onModifyPriority(priority, pokemon, target2, move) {
      if (move?.category === "Status") {
        move.pranksterBoosted = true;
        return priority + 1;
      }
    },
    onStart(pokemon) {
      this.singleEvent("WeatherChange", this.effect, this.effectState, pokemon);
    },
    onWeatherChange(pokemon) {
      if (pokemon.transformed)
        return;
      if (this.field.isWeather("sunnyday")) {
        pokemon.addVolatile("openingact");
      } else if (!(pokemon.volatiles["openingact"]?.fromBooster || pokemon.volatiles["openingact"]?.fromPriority)) {
        pokemon.removeVolatile("openingact");
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["openingact"];
      this.add("-end", pokemon, "Protosynthesis", "[silent]");
    },
    condition: {
      noCopy: true,
      onStart(pokemon, source2, effect) {
        if (effect?.name === "Booster Energy") {
          this.effectState.fromBooster = true;
          this.add("-activate", pokemon, "ability: Opening Act", "[fromitem]");
        } else {
          this.add("-activate", pokemon, "ability: Opening Act");
        }
        this.effectState.bestStat = pokemon.getBestStat(false, true);
        this.add("-start", pokemon, "protosynthesis" + this.effectState.bestStat);
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, pokemon) {
        if (this.effectState.bestStat !== "atk" || pokemon.ignoringAbility())
          return;
        this.debug("Opening Act atk boost");
        return this.chainModify([5325, 4096]);
      },
      onModifyDefPriority: 6,
      onModifyDef(def, pokemon) {
        if (this.effectState.bestStat !== "def" || pokemon.ignoringAbility())
          return;
        this.debug("Opening Act def boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpAPriority: 5,
      onModifySpA(spa, pokemon) {
        if (this.effectState.bestStat !== "spa" || pokemon.ignoringAbility())
          return;
        this.debug("Opening Act spa boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpDPriority: 6,
      onModifySpD(spd, pokemon) {
        if (this.effectState.bestStat !== "spd" || pokemon.ignoringAbility())
          return;
        this.debug("Opening Act spd boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpe(spe, pokemon) {
        if (this.effectState.bestStat !== "spe" || pokemon.ignoringAbility())
          return;
        for (const target2 of pokemon.foes()) {
          if (target2.hasAbility("dyschronometria")) {
            this.debug("Dyschronometria negating spe boost");
            return;
          }
        }
        this.debug("Opening Act spe boost");
        return this.chainModify(1.5);
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Protosynthesis");
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Opening Act",
    rating: 3
  },
  necromancer: {
    shortDesc: "This Pokemon's offensive stat is multiplied by 1.5 while using a Ghost-type attack and takes 50% damage from Ghost and Steel attacks; can't be statused.",
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Ghost") {
        this.debug("Necromancer boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Ghost") {
        this.debug("Necromancer boost");
        return this.chainModify(1.5);
      }
    },
    onSourceModifyAtkPriority: 6,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Ghost" || move.type === "Steel") {
        this.debug("Necromancer weaken");
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Ghost" || move.type === "Steel") {
        this.debug("Necromancer weaken");
        return this.chainModify(0.5);
      }
    },
    onSetStatus(status, target2, source2, effect) {
      if (effect?.status) {
        this.add("-immune", target2, "[from] ability: Necromancer");
      }
      return false;
    },
    onTryAddVolatile(status, target2) {
      if (status.id === "yawn") {
        this.add("-immune", target2, "[from] ability: Necromancer");
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Necromancer",
    rating: 3
  },
  regainpatience: {
    shortDesc: "Berserk + Regenerator",
    onDamage(damage, target2, source2, effect) {
      this.effectState.checkedBerserk = !!(effect.effectType !== "Move" || effect.multihit || effect.negateSecondary || effect.hasSheerForce && source2.hasAbility(["overwhelming", "sheerforce", "forceofnature", "sandwrath"]));
    },
    onTryEatItem(item) {
      const healingItems = [
        "aguavberry",
        "enigmaberry",
        "figyberry",
        "iapapaberry",
        "magoberry",
        "sitrusberry",
        "wikiberry",
        "oranberry",
        "berryjuice"
      ];
      return !healingItems.includes(item.id) || this.effectState.checkedBerserk;
    },
    onAfterMoveSecondary(target2, source2, move) {
      this.effectState.checkedBerserk = true;
      if (!source2 || source2 === target2 || !target2.hp || !move.totalDamage)
        return;
      const lastAttackedBy = target2.getLastAttackedBy();
      if (!lastAttackedBy)
        return;
      const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
      const threshold = target2.maxhp * 0.5;
      if (target2.hp <= threshold && target2.hp + damage > threshold) {
        this.boost({ spa: 1 }, target2, target2);
      }
    },
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    },
    flags: {},
    name: "Regain Patience",
    rating: 3
  },
  quarksurge: {
    shortDesc: "Quark Drive + Electric Surge",
    onStart(pokemon) {
      this.singleEvent("TerrainChange", this.effect, this.effectState, pokemon);
      this.field.setTerrain("electricterrain");
    },
    onTerrainChange(pokemon) {
      if (pokemon.transformed)
        return;
      if (this.field.isTerrain("electricterrain")) {
        pokemon.addVolatile("quarkdrive");
      } else if (!pokemon.volatiles["quarkdrive"]?.fromBooster) {
        pokemon.removeVolatile("quarkdrive");
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["quarkdrive"];
      this.add("-end", pokemon, "Quark Drive", "[silent]");
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Quark Surge",
    rating: 3
  },
  onceuponatime: {
    shortDesc: "Protosynthesis + Infiltrator",
    onStart(pokemon) {
      this.singleEvent("WeatherChange", this.effect, this.effectState, pokemon);
    },
    onWeatherChange(pokemon) {
      if (pokemon.transformed)
        return;
      if (this.field.isWeather("sunnyday")) {
        pokemon.addVolatile("protosynthesis");
      } else if (!pokemon.volatiles["protosynthesis"]?.fromBooster) {
        pokemon.removeVolatile("protosynthesis");
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["protosynthesis"];
      this.add("-end", pokemon, "Protosynthesis", "[silent]");
    },
    onModifyMove(move) {
      move.infiltrates = true;
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Once Upon a Time",
    rating: 3
  },
  primitive: {
    shortDesc: "Protosynthesis + Oblivious",
    onStart(pokemon) {
      this.singleEvent("WeatherChange", this.effect, this.effectState, pokemon);
    },
    onImmunity(type, pokemon) {
      if (type === "attract")
        return false;
    },
    onTryHit(pokemon, target2, move) {
      if (["attract", "captivate", "taunt"].includes(move.id)) {
        this.add("-immune", pokemon, "[from] ability: Primitive");
        return null;
      }
    },
    onTryBoost(boost, target2, source2, effect) {
      if (["Intimidate", "Mad Cow", "Forest Fury", "Shock Factor", "Daunting Storm", "Toxic Attitude"].includes(effect.name) && boost.atk) {
        delete boost.atk;
        this.add("-fail", target2, "unboost", "Attack", "[from] ability: Primitive", "[of] " + target2);
      } else if (effect.name === "Fishy Threat" && boost.spe) {
        delete boost.spe;
        this.add("-fail", target2, "unboost", "Speed", "[from] ability: Primitive", "[of] " + target2);
      }
    },
    onWeatherChange(pokemon) {
      if (pokemon.transformed)
        return;
      if (this.field.isWeather("sunnyday")) {
        pokemon.addVolatile("protosynthesis");
      } else if (!pokemon.volatiles["protosynthesis"]?.fromBooster) {
        pokemon.removeVolatile("protosynthesis");
      }
    },
    onUpdate(pokemon) {
      if (pokemon.volatiles["attract"]) {
        this.add("-activate", pokemon, "ability: Primitive");
        pokemon.removeVolatile("attract");
        this.add("-end", pokemon, "move: Attract", "[from] ability: Primitive");
      }
      if (pokemon.volatiles["taunt"]) {
        this.add("-activate", pokemon, "ability: Primitive");
        pokemon.removeVolatile("taunt");
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["protosynthesis"];
      this.add("-end", pokemon, "Protosynthesis", "[silent]");
    },
    flags: { breakable: 1, failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Primitive",
    rating: 3
  },
  /*systempurge: {
  	shortDesc: "Hit by a Dark move or Booster Energy used: highest stat is 1.3x, or 1.5x if Speed.",
  	onDamagingHit(damage, target, source, move) {
  		if (move.type === 'Dark') {
  			target.addVolatile('systempurge');
  		}
  	},
  	/ *onTerrainChange(pokemon) {
  		if (pokemon.transformed) return;
  		if (this.field.isTerrain('electricterrain')) {
  			pokemon.addVolatile('systempurge');
  		} else if (!pokemon.volatiles['systempurge']?.fromBooster) {
  			pokemon.removeVolatile('systempurge');
  		}
  	},* /
  	onEnd(pokemon) {
  		delete pokemon.volatiles['systempurge'];
  		this.add('-end', pokemon, 'Quark Drive', '[silent]');
  	},
  	condition: {
  		noCopy: true,
  		onStart(pokemon, source, effect) {
  			if (effect?.name === 'Booster Energy') {
  				this.effectState.fromBooster = true;
  				this.add('-activate', pokemon, 'ability: System Purge', '[fromitem]');
  				this.add('-message', `${pokemon.name} used its booster energy to activate a System Purge!`);
  			} else {
  				this.add('-activate', pokemon, 'ability: System Purge');
  				this.add('-message', `${pokemon.name} activated a System Purge in response to the attack!`);
  			}
  			this.effectState.bestStat = pokemon.getBestStat(false, true);
  			this.add('-start', pokemon, 'quarkdrive' + this.effectState.bestStat);
  		},
  		onModifyAtkPriority: 5,
  		onModifyAtk(atk, pokemon) {
  			if (this.effectState.bestStat !== 'atk' || pokemon.ignoringAbility()) return;
  			this.debug('System Purge atk boost');
  			return this.chainModify([5325, 4096]);
  		},
  		onModifyDefPriority: 6,
  		onModifyDef(def, pokemon) {
  			if (this.effectState.bestStat !== 'def' || pokemon.ignoringAbility()) return;
  			this.debug('System Purge def boost');
  			return this.chainModify([5325, 4096]);
  		},
  		onModifySpAPriority: 5,
  		onModifySpA(spa, pokemon) {
  			if (this.effectState.bestStat !== 'spa' || pokemon.ignoringAbility()) return;
  			this.debug('System Purge spa boost');
  			return this.chainModify([5325, 4096]);
  		},
  		onModifySpDPriority: 6,
  		onModifySpD(spd, pokemon) {
  			if (this.effectState.bestStat !== 'spd' || pokemon.ignoringAbility()) return;
  			this.debug('System Purge spd boost');
  			return this.chainModify([5325, 4096]);
  		},
  		onModifySpe(spe, pokemon) {
  			if (this.effectState.bestStat !== 'spe' || pokemon.ignoringAbility()) return;
  			for (const target of pokemon.foes()) {
  				if (target.hasAbility('dyschronometria')) {
  					this.debug('Dyschronometria negating spe boost');
  					return;
  				}
  			}
  			this.debug('System Purge spe boost');
  			return this.chainModify(1.5);
  		},
  		onEnd(pokemon) {
  			this.add('-end', pokemon, 'Quark Drive');
  		},
  	},
  	flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1},
  	name: "System Purge",
  	rating: 3,
  },*/
  baryonblade: {
    onStart(pokemon) {
      this.singleEvent("TerrainChange", this.effect, this.effectState, pokemon);
    },
    onTerrainChange(pokemon) {
      if (this.field.isTerrain("electricterrain")) {
        pokemon.addVolatile("baryonblade");
      } else if (!pokemon.volatiles["baryonblade"]?.fromBooster) {
        pokemon.removeVolatile("baryonblade");
      }
    },
    onModifyCritRatio(critRatio) {
      return critRatio + 1;
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["baryonblade"];
      this.add("-end", pokemon, "Baryon Blade", "[silent]");
    },
    condition: {
      noCopy: true,
      onStart(pokemon, source2, effect) {
        if (effect?.name === "Booster Energy") {
          this.effectState.fromBooster = true;
          this.add("-activate", pokemon, "ability: Baryon Blade", "[fromitem]");
        } else {
          this.add("-activate", pokemon, "ability: Baryon Blade");
        }
        this.effectState.bestStat = pokemon.getBestStat(false, true);
        this.add("-start", pokemon, "quarkdrive" + this.effectState.bestStat);
      },
      onModifyCritRatio(critRatio) {
        return critRatio + 1;
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, pokemon) {
        if (this.effectState.bestStat !== "atk" || pokemon.ignoringAbility())
          return;
        this.debug("Quark Drive atk boost");
        return this.chainModify([5325, 4096]);
      },
      onModifyDefPriority: 6,
      onModifyDef(def, pokemon) {
        if (this.effectState.bestStat !== "def" || pokemon.ignoringAbility())
          return;
        this.debug("Quark Drive def boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpAPriority: 5,
      onModifySpA(spa, pokemon) {
        if (this.effectState.bestStat !== "spa" || pokemon.ignoringAbility())
          return;
        this.debug("Quark Drive spa boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpDPriority: 6,
      onModifySpD(spd, pokemon) {
        if (this.effectState.bestStat !== "spd" || pokemon.ignoringAbility())
          return;
        this.debug("Quark Drive spd boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpe(spe, pokemon) {
        if (this.effectState.bestStat !== "spe" || pokemon.ignoringAbility())
          return;
        this.debug("Quark Drive spe boost");
        return this.chainModify(1.5);
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Baryon Blade", "[silent]");
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Baryon Blade",
    shortDesc: "Quark Drive effects. +1 Critrate; +2 instead under Quark Drive."
  },
  /*delayedreaction: {
  	shortDesc: "This Pokemon switches out at the end of the next turn after being lowered to 50% of its max HP.",
  	onAfterMoveSecondary(target, source, move) {
  		if (!source || source === target || !target.hp || !move.totalDamage) return;
  		const lastAttackedBy = target.getLastAttackedBy();
  		if (!lastAttackedBy) return;
  		const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
  		if (target.hp <= target.maxhp*.5 && target.hp + damage > target.maxhp*.5) {
  			target.addVolatile('delayedreaction');
  			this.add('-ability', target, 'Delayed Reaction');
  			this.add('-message', `${target.name} is getting ready to leave the battlefield!`);
  		}
  	},
  	condition: {
  		duration: 1,
  		onEnd(pokemon) {
  			this.add('-ability', pokemon, 'Delayed Reaction');
  			this.add('-message', `${pokemon.name} ejected itself from the battle!`);
  			pokemon.switchFlag = true;				
  		},
  	},
  	flags: {},
  	name: "Delayed Reaction",
  	rating: 1,
  },*/
  madcow: {
    shortDesc: "On switch-in, or when this Pokemon is lowered to 50% max HP, the foe's Attack is lowered by 1 stage.",
    onStart(pokemon) {
      let activated = false;
      for (const target2 of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Mad Cow", "boost");
          activated = true;
        }
        if (target2.volatiles["substitute"]) {
          this.add("-immune", target2);
        } else {
          this.boost({ atk: -1 }, target2, pokemon, null, true);
        }
      }
    },
    onEmergencyExit(target2) {
      if (!this.canSwitch(target2.side) || target2.forceSwitchFlag || target2.switchFlag)
        return;
      for (const side of this.sides) {
        for (const active of side.active) {
          active.switchFlag = false;
        }
      }
      this.add("-activate", target2, "ability: Mad Cow");
      for (const pokemon of target2.adjacentFoes()) {
        if (pokemon.volatiles["substitute"]) {
          this.add("-immune", pokemon);
        } else {
          this.boost({ atk: -1 }, pokemon, target2, null, true);
        }
      }
      target2.switchFlag = false;
    },
    flags: {},
    name: "Mad Cow",
    rating: 3.5
  },
  choreography: {
    shortDesc: "Protean + Dancer; Dancer is once per switch-in instead of Protean.",
    onPrepareHit(source2, target2, move) {
      if (move.hasBounced || move.isFutureMove || move.sourceEffect === "snatch")
        return;
      const type = move.type;
      if (type && type !== "???" && source2.getTypes().join() !== type && source2.setType(type)) {
        this.add("-start", source2, "typechange", type, "[from] ability: Choreography");
      }
    },
    onSwitchIn(pokemon) {
      delete this.effectState.choreography;
    },
    flags: {},
    name: "Choreography",
    rating: 4
  },
  squall: {
    shortDesc: "+1 Atk if hit by a Fire or Ice move or Tailwind begins; Fire & Ice immunity.",
    onTryHitPriority: 1,
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && (move.type === "Ice" || move.type === "Fire")) {
        if (!this.boost({ atk: 1 })) {
          this.add("-immune", target2, "[from] ability: Squall");
        }
        return null;
      }
    },
    onAllyTryHitSide(target2, source2, move) {
      if (target2 === this.effectState.target || target2.side !== source2.side)
        return;
      if (move.type === "Ice" || move.type === "Fire") {
        this.boost({ atk: 1 }, this.effectState.target);
      }
    },
    onAllySideConditionStart(target2, source2, sideCondition) {
      const pokemon = this.effectState.target;
      if (sideCondition.id === "tailwind") {
        this.boost({ atk: 1 }, pokemon, pokemon);
      }
    },
    flags: { breakable: 1 },
    name: "Squall",
    rating: 4
  },
  stoneage: {
    shortDesc: "Sturdy + Technician",
    onBeforeMovePriority: 9,
    onBeforeMove(pokemon) {
      if (pokemon.species.name !== "Relishadow" || pokemon.transformed)
        return;
      pokemon.formeChange("Relishadow-Zenith");
      this.add("-start", pokemon, "typechange", pokemon.getTypes(true).join("/"), "[silent]");
    },
    onTryHit(pokemon, target2, move) {
      if (move.ohko) {
        this.add("-immune", pokemon, "[from] ability: Stone Age");
        return null;
      }
    },
    onDamagePriority: -100,
    onDamage(damage, target2, source2, effect) {
      if (target2.hp === target2.maxhp && damage >= target2.hp && effect && effect.effectType === "Move") {
        this.add("-ability", target2, "Stone Age");
        return target2.hp - 1;
      }
    },
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
      const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
      this.debug("Base Power: " + basePowerAfterMultiplier);
      if (basePowerAfterMultiplier <= 60) {
        this.debug("Stone Age boost");
        return this.chainModify(1.5);
      }
    },
    flags: { breakable: 1 },
    name: "Stone Age",
    rating: 3
  },
  stonewheel: {
    shortDesc: "Rock Head + Technician",
    onBeforeMovePriority: 9,
    onBeforeMove(pokemon) {
      if (pokemon.species.name !== "Relishadow" || pokemon.transformed)
        return;
      pokemon.formeChange("Relishadow-Zenith");
      this.add("-start", pokemon, "typechange", pokemon.getTypes(true).join("/"), "[silent]");
    },
    onDamage(damage, target2, source2, effect) {
      if (effect.id === "recoil") {
        if (!this.activeMove)
          throw new Error("Battle.activeMove is null");
        if (this.activeMove.id !== "struggle")
          return null;
      }
    },
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
      const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
      this.debug("Base Power: " + basePowerAfterMultiplier);
      if (basePowerAfterMultiplier <= 60) {
        this.debug("Stone Age boost");
        return this.chainModify(1.5);
      }
    },
    flags: {},
    name: "Stone Wheel",
    rating: 3
  },
  moltencore: {
    shortDesc: "Turboblaze + Rock Head",
    onDamage(damage, target2, source2, effect) {
      if (effect.id === "recoil") {
        if (!this.activeMove)
          throw new Error("Battle.activeMove is null");
        if (this.activeMove.id !== "struggle")
          return null;
      }
    },
    onStart(pokemon) {
      this.add("-ability", pokemon, "Molten Core");
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    },
    flags: {},
    name: "Molten Core",
    rating: 3
  },
  eczema: {
    shortDesc: "Unaware + Rough Skin",
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target2, source2, move) {
      if (this.checkMoveMakesContact(move, source2, target2, true)) {
        this.damage(source2.baseMaxhp / 8, source2, target2);
      }
    },
    //Okay so Mold Breaker hits through Rough Skin but not Unaware
    //While Rough Skin announces itself through its effects, UNAWARE DOESN'T
    onStart(pokemon) {
      pokemon.addVolatile("ability:unaware");
    },
    onSourcePrepareHit(source2, target2, move) {
      if (target2.volatiles["ability:unaware"]) {
        if (move.ignoreAbility)
          target2.removeVolatile("ability:unaware");
      } else if (!move.ignoreAbility)
        target2.addVolatile("ability:unaware");
    },
    onEnd(pokemon) {
      pokemon.removeVolatile("ability:unaware");
    },
    /*onAnyModifyBoost(boosts, pokemon) {
    	const unawareUser = this.effectState.target;
    	if (unawareUser === pokemon) return;
    	if (unawareUser === this.activePokemon) {
    		if (pokemon !== this.activeTarget) return;
    		boosts['def'] = 0;
    		boosts['spd'] = 0;
    		boosts['evasion'] = 0;
    	}
    	else if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
    		boosts['atk'] = 0;
    		boosts['def'] = 0;
    		boosts['spa'] = 0;
    		boosts['accuracy'] = 0;
    	}
    },*/
    flags: {},
    name: "Eczema",
    rating: 3
  },
  aurashield: {
    shortDesc: "Shield Dust + While this Pokemon is active, moves with secondary effects used by any Pokemon have 1.33x power.",
    onModifySecondaries(secondaries) {
      this.debug("Aura Shield prevent secondary");
      return secondaries.filter((effect) => !!(effect.self || effect.dustproof));
    },
    onStart(pokemon) {
      this.add("-ability", pokemon, "Aura Shield");
    },
    onAnyBasePowerPriority: 20,
    onAnyBasePower(basePower, source2, target2, move) {
      if (target2 === source2 || move.category === "Status" || !move.secondaries)
        return;
      if (!move.auraBooster)
        move.auraBooster = this.effectState.target;
      else if (move.auraBooster !== this.effectState.target)
        return;
      return this.chainModify([move.hasAuraBreak ? 3072 : 5447, 4096]);
    },
    flags: {},
    name: "Aura Shield",
    rating: 3
  },
  faultyphoton: {
    shortDesc: "Disguise + Quark Drive",
    onStart(pokemon) {
      this.singleEvent("TerrainChange", this.effect, this.effectState, pokemon);
    },
    onDamagePriority: 1,
    onDamage(damage, target2, source2, effect) {
      if (effect?.effectType === "Move" && target2.species.id === "ironmimic" && !target2.transformed) {
        this.add("-activate", target2, "ability: Faulty Photon");
        this.effectState.busted = true;
        return 0;
      }
    },
    onCriticalHit(target2, source2, move) {
      if (!target2 || target2.species.id !== "ironmimic" || target2.transformed || !target2.runImmunity(move.type))
        return;
      const hitSub = target2.volatiles["substitute"] && !move.flags["authentic"] && !move.infiltrates;
      if (hitSub)
        return;
      return false;
    },
    onEffectiveness(typeMod, target2, type, move) {
      if (!target2 || target2.species.id !== "ironmimic" || target2.transformed || !target2.runImmunity(move.type))
        return;
      const hitSub = target2.volatiles["substitute"] && !move.flags["authentic"] && !move.infiltrates;
      if (hitSub)
        return;
      return 0;
    },
    onUpdate(pokemon) {
      if (pokemon.species.id === "ironmimic" && this.effectState.busted) {
        pokemon.formeChange("Iron Mimic-Busted", this.effect, true);
        this.add("-start", pokemon, "typechange", pokemon.getTypes(true).join("/"), "[silent]");
        this.damage(pokemon.baseMaxhp / 8, pokemon, pokemon, this.dex.species.get("Iron Mimic-Busted"));
      }
    },
    onTerrainChange(pokemon) {
      if (this.field.isTerrain("electricterrain")) {
        pokemon.addVolatile("quarkdrive");
      } else if (!pokemon.volatiles["quarkdrive"]?.fromBooster) {
        pokemon.removeVolatile("quarkdrive");
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["quarkdrive"];
      this.add("-end", pokemon, "Quark Drive", "[silent]");
    },
    flags: {
      failroleplay: 1,
      noreceiver: 1,
      noentrain: 1,
      notrace: 1,
      failskillswap: 1,
      cantsuppress: 1,
      breakable: 1,
      notransform: 1
    },
    name: "Faulty Photon",
    rating: 3
  },
  dyschronometria: {
    shortDesc: "While this Pokemon is active, all Paradox boosts are suppressed.",
    onAnyModifyAtkPriority: 4,
    onAnyModifyAtk(atk, attacker, defender, move) {
      const abilityHolder = this.effectState.target;
      if (attacker.isAlly(abilityHolder) || attacker.ignoringAbility() || !this.effectState.unnerved)
        return;
      if (!move.suppressedParadox)
        move.suppressedParadox = abilityHolder;
      else if (move.suppressedParadox !== abilityHolder)
        return;
      for (const paradox of [
        "faultyphoton",
        /*'systempurge'*/
        "baryonblade",
        "onceuponatime",
        "primitive",
        "quarksurge",
        "lightdrive",
        "openingact",
        "protosynthesis",
        "quarkdrive",
        "nanorepairs",
        "firewall",
        "weightoflife",
        "circuitbreaker",
        "ancientmarble",
        "prehistorichunter",
        "heatproofdrive"
      ]) {
        if (attacker.hasAbility(paradox)) {
          if ((attacker?.volatiles["quarkdrive"] || attacker?.volatiles["protosynthesis"] || attacker?.volatiles[paradox])?.bestStat !== "atk")
            return;
          this.debug("Dyschronometria nullify");
          return this.chainModify([3151, 4096]);
        }
      }
    },
    onAnyModifyDefPriority: 5,
    onAnyModifyDef(atk, attacker, defender, move) {
      const abilityHolder = this.effectState.target;
      if (defender.isAlly(abilityHolder) || defender.ignoringAbility() || !this.effectState.unnerved)
        return;
      if (!move.suppressedParadox)
        move.suppressedParadox = abilityHolder;
      else if (move.suppressedParadox !== abilityHolder)
        return;
      for (const paradox of [
        "faultyphoton",
        /*'systempurge'*/
        "baryonblade",
        "onceuponatime",
        "primitive",
        "quarksurge",
        "lightdrive",
        "openingact",
        "protosynthesis",
        "quarkdrive",
        "nanorepairs",
        "firewall",
        "weightoflife",
        "circuitbreaker",
        "ancientmarble",
        "prehistorichunter",
        "heatproofdrive"
      ]) {
        if (defender.hasAbility(paradox)) {
          if ((defender?.volatiles["quarkdrive"] || defender?.volatiles["protosynthesis"] || defender?.volatiles[paradox])?.bestStat !== "def")
            return;
          this.debug("Dyschronometria nullify");
          return this.chainModify([3151, 4096]);
        }
      }
    },
    onAnyModifySpAPriority: 4,
    onAnyModifySpA(atk, attacker, defender, move) {
      const abilityHolder = this.effectState.target;
      if (attacker.isAlly(abilityHolder) || attacker.ignoringAbility() || !this.effectState.unnerved)
        return;
      if (!move.suppressedParadox)
        move.suppressedParadox = abilityHolder;
      else if (move.suppressedParadox !== abilityHolder)
        return;
      for (const paradox of [
        "faultyphoton",
        /*'systempurge'*/
        "baryonblade",
        "onceuponatime",
        "primitive",
        "quarksurge",
        "lightdrive",
        "openingact",
        "protosynthesis",
        "quarkdrive",
        "nanorepairs",
        "firewall",
        "weightoflife",
        "circuitbreaker",
        "ancientmarble",
        "prehistorichunter",
        "heatproofdrive"
      ]) {
        if (attacker.hasAbility(paradox)) {
          if ((attacker?.volatiles["quarkdrive"] || attacker?.volatiles["protosynthesis"] || attacker?.volatiles[paradox]).bestStat !== "spa")
            return;
          this.debug("Dyschronometria nullify");
          return this.chainModify([3151, 4096]);
        }
      }
    },
    onAnyModifySpDPriority: 5,
    onAnyModifySpD(atk, attacker, defender, move) {
      const abilityHolder = this.effectState.target;
      if (defender.isAlly(abilityHolder) || defender.ignoringAbility() || !this.effectState.unnerved)
        return;
      if (!move.suppressedParadox)
        move.suppressedParadox = abilityHolder;
      else if (move.suppressedParadox !== abilityHolder)
        return;
      for (const paradox of [
        "faultyphoton",
        /*'systempurge'*/
        "baryonblade",
        "onceuponatime",
        "primitive",
        "quarksurge",
        "lightdrive",
        "openingact",
        "protosynthesis",
        "quarkdrive",
        "nanorepairs",
        "firewall",
        "weightoflife",
        "circuitbreaker",
        "ancientmarble",
        "prehistorichunter",
        "heatproofdrive"
      ]) {
        if (defender.hasAbility(paradox)) {
          if ((defender?.volatiles["quarkdrive"] || defender?.volatiles["protosynthesis"] || defender?.volatiles[paradox])?.bestStat !== "def")
            return;
          this.debug("Dyschronometria nullify");
          return this.chainModify([3151, 4096]);
        }
      }
    },
    //Speed suppression in the other Paradox abilities
    onPreStart(pokemon) {
      this.add("-ability", pokemon, "Dyschronometria");
      this.effectState.unnerved = true;
    },
    onStart(pokemon) {
      if (this.effectState.unnerved)
        return;
      this.add("-ability", pokemon, "Dyschronometria");
      this.effectState.unnerved = true;
    },
    onEnd() {
      this.effectState.unnerved = false;
    },
    flags: { breakable: 1, failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Dyschronometria",
    rating: 3
  },
  firewall: {
    shortDesc: "Quark Drive + x1.5 power to Fire-type moves when active",
    onStart(pokemon) {
      this.singleEvent("TerrainChange", this.effect, this.effectState, pokemon);
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Fire" && attacker.volatiles["quarkdrive"]) {
        this.debug("Firewall Fire boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Fire" && attacker.volatiles["quarkdrive"]) {
        this.debug("Firewall Fire boost");
        return this.chainModify(1.5);
      }
    },
    onTerrainChange(pokemon) {
      if (pokemon.transformed)
        return;
      if (this.field.isTerrain("electricterrain")) {
        pokemon.addVolatile("quarkdrive");
      } else if (!pokemon.volatiles["quarkdrive"]?.fromBooster) {
        pokemon.removeVolatile("quarkdrive");
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["quarkdrive"];
      this.add("-end", pokemon, "Quark Drive", "[silent]");
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Firewall",
    rating: 3
  },
  nanorepairs: {
    shortDesc: "Quark Drive + Regenerator",
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    },
    onStart(pokemon) {
      this.singleEvent("TerrainChange", this.effect, this.effectState, pokemon);
    },
    onTerrainChange(pokemon) {
      if (pokemon.transformed)
        return;
      if (this.field.isTerrain("electricterrain")) {
        pokemon.addVolatile("quarkdrive");
      } else if (!pokemon.volatiles["quarkdrive"]?.fromBooster) {
        pokemon.removeVolatile("quarkdrive");
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["quarkdrive"];
      this.add("-end", pokemon, "Quark Drive", "[silent]");
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Nanorepairs",
    rating: 3
  },
  ironsights: {
    shortDesc: "x1.33 Atk/SpA/Acc.",
    onModifyAtkPriority: 5,
    onModifyAtk(atk) {
      return this.chainModify([5461, 4096]);
    },
    onModifySpAPriority: 5,
    onModifySpA(spa) {
      return this.chainModify([5461, 4096]);
    },
    onSourceModifyAccuracyPriority: -1,
    onSourceModifyAccuracy(accuracy) {
      if (typeof accuracy !== "number")
        return;
      this.debug("ironsights - enhancing accuracy");
      return this.chainModify([5461, 4096]);
    },
    flags: {},
    name: "Iron Sights",
    rating: 3
  },
  rejuvenate: {
    shortDesc: "On switch-out: If no status then heal 1/3 Max HP, else heal status",
    onCheckShow(pokemon) {
      if (pokemon.side.active.length === 1 || pokemon.showCure === true || pokemon.showCure === false)
        return;
      const cureList = [];
      let noCureCount = 0;
      for (const curPoke of pokemon.side.active) {
        if (!curPoke || !curPoke.status) {
          continue;
        }
        if (curPoke.showCure) {
          continue;
        }
        const species = curPoke.species;
        if (!Object.values(species.abilities).includes("Natural Cure") && !Object.values(species.abilities).includes("Natural Pressures") && !Object.values(species.abilities).includes("Rejuvenate")) {
          continue;
        }
        if (!species.abilities["1"] && !species.abilities["H"]) {
          continue;
        }
        if (curPoke !== pokemon && !this.queue.willSwitch(curPoke)) {
          continue;
        }
        if (curPoke.hasAbility(["naturalcure", "rejuvenate", "naturalpressures"])) {
          cureList.push(curPoke);
        } else {
          noCureCount++;
        }
      }
      if (!cureList.length || !noCureCount) {
        for (const pkmn of cureList) {
          pkmn.showCure = true;
        }
      } else {
        this.add("-message", "(" + cureList.length + " of " + pokemon.side.name + "'s pokemon " + (cureList.length === 1 ? "was" : "were") + " cured by Natural Cure.)");
        for (const pkmn of cureList) {
          pkmn.showCure = false;
        }
      }
    },
    onSwitchOut(pokemon) {
      if (!pokemon.status) {
        pokemon.heal(pokemon.baseMaxhp / 3);
        return;
      }
      if (pokemon.showCure === void 0)
        pokemon.showCure = true;
      if (pokemon.showCure)
        this.add("-curestatus", pokemon, pokemon.status, "[from] ability: Rejuvenate");
      pokemon.setStatus("");
      pokemon.showCure || (pokemon.showCure = void 0);
    },
    flags: {},
    name: "Rejuvenate",
    rating: 3
  },
  electromagneticveil: {
    shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Electric moves or burned; Electric & Burn immunity.",
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && move.type === "Electric") {
        if (!this.heal(target2.baseMaxhp / 4)) {
          this.add("-immune", target2, "[from] ability: Electromagnetic Veil");
        }
        return null;
      }
    },
    onSetStatus(status, target2, source2, effect) {
      if (status.id !== "brn")
        return;
      if (effect?.status && !this.heal(target2.baseMaxhp / 4)) {
        this.add("-immune", target2, "[from] ability: Electromagnetic Veil");
      }
      return false;
    },
    onUpdate(pokemon) {
      if (pokemon.status === "brn") {
        this.add("-activate", pokemon, "ability: Electromagnetic Veil");
        this.heal(target.baseMaxhp / 4);
        pokemon.cureStatus();
      }
    },
    flags: { breakable: 1 },
    name: "Electromagnetic Veil",
    rating: 3
  },
  risingtension: {
    shortDesc: "Levitate + Cursed Body",
    onDamagingHit(damage, target2, source2, move) {
      if (!source2.volatiles["disable"] && !move.isFutureMove && this.randomChance(3, 10)) {
        source2.addVolatile("disable", this.effectState.target);
      }
    },
    flags: { breakable: 1 },
    name: "Rising Tension",
    rating: 3
  },
  grindset: {
    shortDesc: "While active, own Attack is 1.5x, other Pokemon's Attack is 0.5.",
    onStart(pokemon) {
      if (this.suppressingAbility(pokemon))
        return;
      this.add("-ability", pokemon, "Grindset");
      this.add("-message", `The grind never stops for ${pokemon.name}, lowering the foe's Attack and raising its own!`);
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk) {
      return this.chainModify(1.5);
    },
    onAnyModifyAtk(atk, source2, target2, move) {
      if (source2.hasAbility("Grindset"))
        return;
      const abilityHolder = this.effectState.target;
      if (!move.ruinedAtk)
        move.ruinedAtk = abilityHolder;
      else if (move.ruinedAtk !== abilityHolder)
        return;
      this.debug("Grindset Atk drop");
      return this.chainModify(0.5);
    },
    flags: {},
    name: "Grindset",
    rating: 3
  },
  shockfactor: {
    shortDesc: "Static + Intimidate",
    onStart(pokemon) {
      let activated = false;
      for (const target2 of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Shock Factor", "boost");
          activated = true;
        }
        if (target2.volatiles["substitute"]) {
          this.add("-immune", target2);
        } else {
          this.boost({ atk: -1 }, target2, pokemon, null, true);
        }
      }
    },
    onDamagingHit(damage, target2, source2, move) {
      if (move.flags["contact"] && this.randomChance(3, 10)) {
        source2.trySetStatus("par", target2);
      }
    },
    flags: {},
    name: "Shock Factor",
    rating: 3
  },
  shellshock: {
    shortDesc: "Effects of Rock Head. Moves with Recoil have a 30% chance of inflicting paralysis.",
    onDamage(damage, target2, source2, effect) {
      if (effect.id === "recoil") {
        if (!this.activeMove)
          throw new Error("Battle.activeMove is null");
        if (this.activeMove.id !== "struggle")
          return null;
      }
    },
    onModifyMove(move) {
      if (!move || !(move.recoil || move.hasCrashDamage) || move.target === "self")
        return;
      (move.secondaries || (move.secondaries = [])).push({
        chance: 30,
        status: "par",
        ability: this.dex.abilities.get("shellshock")
      });
    },
    flags: {},
    name: "Shell Shock",
    rating: 3
  },
  circuitbreaker: {
    shortDesc: "Quark Drive + Mold Breaker",
    onStart(pokemon) {
      this.singleEvent("TerrainChange", this.effect, this.effectState, pokemon);
      if (!this.field.isTerrain("electricterrain")) {
        this.add("-ability", pokemon, "Circuit Breaker");
        this.add("-message", `${pokemon.name} breaks the circuit!`);
      }
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    },
    onTerrainChange(pokemon) {
      if (pokemon.transformed)
        return;
      if (this.field.isTerrain("electricterrain")) {
        pokemon.addVolatile("circuitbreaker");
      } else if (!pokemon.volatiles["circuitbreaker"]?.fromBooster) {
        pokemon.removeVolatile("circuitbreaker");
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["circuitbreaker"];
      this.add("-end", pokemon, "Quark Drive", "[silent]");
    },
    condition: {
      noCopy: true,
      onStart(pokemon, source2, effect) {
        if (effect?.name === "Booster Energy") {
          this.effectState.fromBooster = true;
          this.add("-activate", pokemon, "ability: Circuit Breaker", "[fromitem]");
          this.add("-message", `${pokemon.name} used its Booster Energy to overclock its Circuit Breaker!`);
        } else {
          this.add("-activate", pokemon, "ability: Circuit Breaker");
          this.add("-message", `The Electric Terrain lets ${pokemon.name} overclock its Circuit Breaker!`);
        }
        this.effectState.bestStat = pokemon.getBestStat(false, true);
        this.add("-start", pokemon, "quarkdrive" + this.effectState.bestStat);
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, pokemon) {
        if (this.effectState.bestStat !== "atk" || pokemon.ignoringAbility())
          return;
        this.debug("Circuit Breaker atk boost");
        return this.chainModify([5325, 4096]);
      },
      onModifyDefPriority: 6,
      onModifyDef(def, pokemon) {
        if (this.effectState.bestStat !== "def" || pokemon.ignoringAbility())
          return;
        this.debug("Circuit Breaker def boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpAPriority: 5,
      onModifySpA(spa, pokemon) {
        if (this.effectState.bestStat !== "spa" || pokemon.ignoringAbility())
          return;
        this.debug("Circuit Breaker spa boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpDPriority: 6,
      onModifySpD(spd, pokemon) {
        if (this.effectState.bestStat !== "spd" || pokemon.ignoringAbility())
          return;
        this.debug("Circuit Breaker spd boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpe(spe, pokemon) {
        if (this.effectState.bestStat !== "spe" || pokemon.ignoringAbility())
          return;
        for (const target2 of pokemon.foes()) {
          if (target2.hasAbility("dyschronometria")) {
            this.debug("Dyschronometria negating spe boost");
            return;
          }
        }
        this.debug("Circuit Breaker spe boost");
        return this.chainModify(1.5);
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Quark Drive");
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Circuit Breaker",
    rating: 3
  },
  weightoflife: {
    shortDesc: "Heavy Metal + Protosynthesis. Protosynthesis activates if the user is heavier.",
    onModifyWeightPriority: 1,
    onModifyWeight(weighthg) {
      return weighthg * 2;
    },
    onStart(pokemon) {
      this.singleEvent("WeatherChange", this.effect, this.effectState, pokemon);
    },
    onWeatherChange(pokemon) {
      if (pokemon.transformed)
        return;
      if (this.field.isWeather("sunnyday")) {
        pokemon.addVolatile("weightoflife");
      } else if (!pokemon.volatiles["weightoflife"]?.fromBooster) {
        pokemon.removeVolatile("weightoflife");
      }
    },
    onUpdate(pokemon) {
      if (!(pokemon.volatiles["weightoflife"]?.fromBooster || pokemon.volatiles["weightoflife"]?.fromWeightDiff) && !this.field.isWeather("sunnyday")) {
        pokemon.removeVolatile("weightoflife");
      }
    },
    onAnyPrepareHit(source2, target2, move) {
      if (move.hasBounced || source2 === target2)
        return;
      const user = this.effectState.target;
      if (user.volatiles["weightoflife"] && !user.volatiles["weightoflife"].fromWeightDiff)
        return;
      var yourweight;
      if (source2 === user) {
        yourweight = target2.getWeight();
      } else if (target2 === user) {
        yourweight = source2.getWeight();
      } else
        return;
      if (user.getWeight() > yourweight) {
        if (user.volatiles["weightoflife"])
          return;
        user.addVolatile("weightoflife");
        user.volatiles["weightoflife"].fromWeightDiff = true;
      } else if (user.volatiles["weightoflife"]) {
        if (this.field.isWeather("sunnyday")) {
          user.volatiles["weightoflife"].fromWeightDiff = false;
        } else {
          user.removeVolatile("weightoflife");
        }
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["weightoflife"];
      this.add("-end", pokemon, "Protosynthesis", "[silent]");
    },
    condition: {
      noCopy: true,
      onStart(pokemon, source2, effect) {
        if (effect?.name === "Booster Energy") {
          this.effectState.fromBooster = true;
          this.add("-activate", pokemon, "ability: Weight of Life", "[fromitem]");
        } else {
          this.add("-activate", pokemon, "ability: Weight of Life");
        }
        this.effectState.bestStat = pokemon.getBestStat(false, true);
        this.add("-start", pokemon, "protosynthesis" + this.effectState.bestStat);
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, pokemon) {
        if (this.effectState.bestStat !== "atk" || pokemon.ignoringAbility())
          return;
        this.debug("Weight of Life atk boost");
        return this.chainModify([5325, 4096]);
      },
      onModifyDefPriority: 6,
      onModifyDef(def, pokemon) {
        if (this.effectState.bestStat !== "def" || pokemon.ignoringAbility())
          return;
        this.debug("Weight of Life def boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpAPriority: 5,
      onModifySpA(spa, pokemon) {
        if (this.effectState.bestStat !== "spa" || pokemon.ignoringAbility())
          return;
        this.debug("Weight of Life spa boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpDPriority: 6,
      onModifySpD(spd, pokemon) {
        if (this.effectState.bestStat !== "spd" || pokemon.ignoringAbility())
          return;
        this.debug("Weight of Life spd boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpe(spe, pokemon) {
        if (this.effectState.bestStat !== "spe" || pokemon.ignoringAbility())
          return;
        for (const target2 of pokemon.foes()) {
          if (target2.hasAbility("dyschronometria")) {
            this.debug("Dyschronometria negating spe boost");
            return;
          }
        }
        this.debug("Weight of Life spe boost");
        return this.chainModify(1.5);
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Protosynthesis");
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Weight of Life",
    rating: 1,
    num: 135
  },
  rebelsblade: {
    shortDesc: "This Pokemon's slicing moves have x1.5 power and a 30% chance to inflict poisoning.",
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["slicing"]) {
        this.debug("Rebels Blade boost");
        return this.chainModify(1.5);
      }
    },
    onModifyMove(move) {
      if (!move || !move.flags["slicing"] || move.target === "self")
        return;
      (move.secondaries || (move.secondaries = [])).push({
        chance: 30,
        status: "psn",
        ability: this.dex.abilities.get("rebelsblade")
      });
    },
    flags: {},
    name: "Rebel's Blade",
    rating: 3
  },
  naturalpressures: {
    shortDesc: "Natural Cure + Pressure",
    onCheckShow(pokemon) {
      if (pokemon.side.active.length === 1 || pokemon.showCure === true || pokemon.showCure === false)
        return;
      const cureList = [];
      let noCureCount = 0;
      for (const curPoke of pokemon.side.active) {
        if (!curPoke || !curPoke.status) {
          continue;
        }
        if (curPoke.showCure) {
          continue;
        }
        const species = curPoke.species;
        if (!Object.values(species.abilities).includes("Natural Cure") && !Object.values(species.abilities).includes("Natural Pressures") && !Object.values(species.abilities).includes("Rejuvenate")) {
          continue;
        }
        if (!species.abilities["1"] && !species.abilities["H"]) {
          continue;
        }
        if (curPoke !== pokemon && !this.queue.willSwitch(curPoke)) {
          continue;
        }
        if (curPoke.hasAbility(["naturalpressures", "naturalcure", "rejuvenate"])) {
          cureList.push(curPoke);
        } else {
          noCureCount++;
        }
      }
      if (!cureList.length || !noCureCount) {
        for (const pkmn of cureList) {
          pkmn.showCure = true;
        }
      } else {
        this.add("-message", "(" + cureList.length + " of " + pokemon.side.name + "'s pokemon " + (cureList.length === 1 ? "was" : "were") + " cured by Natural Cure.)");
        for (const pkmn of cureList) {
          pkmn.showCure = false;
        }
      }
    },
    onSwitchOut(pokemon) {
      if (!pokemon.status)
        return;
      if (pokemon.showCure === void 0)
        pokemon.showCure = true;
      if (pokemon.showCure)
        this.add("-curestatus", pokemon, pokemon.status, "[from] ability: Natural Pressures");
      pokemon.setStatus("");
      pokemon.showCure || (pokemon.showCure = void 0);
    },
    onStart(pokemon) {
      this.add("-ability", pokemon, "Natural Pressures");
    },
    onDeductPP(target2, source2) {
      if (target2.side === source2.side)
        return;
      return 1;
    },
    flags: {},
    name: "Natural Pressures",
    rating: 3
  },
  vitalmetalbody: {
    shortDesc: "Vital Spirit + Full Metal Body",
    onUpdate(pokemon) {
      if (pokemon.status === "slp") {
        this.add("-activate", pokemon, "ability: Vital Metal Body");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target2, source2, effect) {
      if (status.id !== "slp")
        return;
      if (effect?.status) {
        this.add("-immune", target2, "[from] ability: Vital Metal Body");
      }
      return false;
    },
    onTryBoost(boost, target2, source2, effect) {
      if (source2 && target2 === source2)
        return;
      let showMsg = false;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          delete boost[i];
          showMsg = true;
        }
      }
      if (showMsg && !effect.secondaries && effect.id !== "octolock") {
        this.add("-fail", target2, "unboost", "[from] ability: Vital Metal Body", "[of] " + target2);
      }
    },
    onTryAddVolatile(status, target2) {
      if (status.id === "yawn") {
        this.add("-immune", target2, "[from] ability: Vital Metal Body");
        return null;
      }
    },
    flags: {},
    name: "Vital Metal Body",
    rating: 3
  },
  fortunomorphosis: {
    shortDesc: "This Pokemon gains the Laser Focus effect when it takes a hit from an attack.",
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target2, source2, move) {
      target2.addVolatile("laserfocus");
    },
    flags: {},
    name: "Fortunomorphosis",
    rating: 3
  },
  burningpetals: {
    shortDesc: "Allied Fire-types status/stat drop/Fire immune; Gains x1.5 to Fire on activation.",
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && move.type === "Fire" && target2.hasType("Fire")) {
        move.accuracy = true;
        if (!target2.addVolatile("burningpetals")) {
          this.add("-block", target2, "ability: Burning Petals", "[of] " + target2);
          this.add("-message", `${target2.name} is surrounded by burning petals!`);
        }
        return null;
      }
    },
    onAllyTryHitSide(target2, source2, move) {
      if (!target2.isAlly(source2) && move.type === "Fire" && target2.hasType("Fire")) {
        move.accuracy = true;
        const effectHolder = this.effectState.target;
        if (!effectHolder.addVolatile("burningpetals")) {
          this.add("-block", target2, "ability: Burning Petals", "[of] " + effectHolder);
          this.add("-message", `${target2.name} is surrounded by burning petals!`);
        }
        return null;
      }
    },
    onAllyTryBoost(boost, target2, source2, effect) {
      if (source2 && target2 === source2 || !target2.hasType("Fire"))
        return;
      let showMsg = false;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          delete boost[i];
          showMsg = true;
        }
      }
      if (showMsg && !effect.secondaries) {
        const effectHolder = this.effectState.target;
        if (!effectHolder.addVolatile("burningpetals")) {
          this.add("-block", target2, "ability: Burning Petals", "[of] " + effectHolder);
          this.add("-message", `${target2.name} is surrounded by burning petals!`);
        }
      }
    },
    onAllySetStatus(status, target2, source2, effect) {
      if (source2 && target2 !== source2 && effect && effect.id !== "yawn" && target2.hasType("Fire")) {
        this.debug("interrupting setStatus with Burning Petals");
        if (effect.name === "Synchronize" || effect.effectType === "Move" && !effect.secondaries) {
          const effectHolder = this.effectState.target;
          if (!effectHolder.addVolatile("burningpetals")) {
            this.add("-block", target2, "ability: Burning Petals", "[of] " + effectHolder);
            this.add("-message", `${target2.name} is surrounded by burning petals!`);
          }
        }
        return null;
      }
    },
    onAllyTryAddVolatile(status, target2) {
      if (status.id === "yawn" && target2.hasType("Fire")) {
        this.debug("Burning Petals blocking yawn");
        const effectHolder = this.effectState.target;
        if (!effectHolder.addVolatile("burningpetals"))
          this.add("-block", target2, "ability: Burning Petals", "[of] " + effectHolder);
        return null;
      }
    },
    onEnd(pokemon) {
      pokemon.removeVolatile("burningpetals");
    },
    condition: {
      noCopy: true,
      onStart(target2) {
        this.add("-ability", target2, target2.getAbility().name);
        this.add("-start", target2, "Flash Fire", "[silent]");
        this.add("-message", `The power of ${target2.name}'s Fire-type moves rose!`);
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, attacker, defender, move) {
        if (move.type === "Fire" && attacker.hasAbility(["burningpetals", "suppressivefire"])) {
          this.debug("Burning Petals boost");
          return this.chainModify(1.5);
        }
      },
      onModifySpAPriority: 5,
      onModifySpA(atk, attacker, defender, move) {
        if (move.type === "Fire" && attacker.hasAbility(["burningpetals", "suppressivefire"])) {
          this.debug("Burning Petals boost");
          return this.chainModify(1.5);
        }
      },
      onEnd(target2) {
        this.add("-end", target2, "Flash Fire", "[silent]");
      }
    },
    flags: { breakable: 1 },
    name: "Burning Petals",
    rating: 3
  },
  snowblind: {
    shortDesc: "Snow Warning + Unseen Fist",
    onStart(source2) {
      this.field.setWeather("snow");
    },
    onModifyMove(move) {
      if (move.flags["contact"])
        delete move.flags["protect"];
    },
    flags: {},
    name: "Snowblind",
    rating: 3
  },
  unvital: {
    shortDesc: "Unaware + Vital Spirit",
    onAnyModifyBoost(boosts, pokemon) {
      const unawareUser = this.effectState.target;
      if (unawareUser === pokemon)
        return;
      if (unawareUser === this.activePokemon) {
        if (pokemon !== this.activeTarget)
          return;
        boosts["def"] = 0;
        boosts["spd"] = 0;
        boosts["evasion"] = 0;
      } else if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
        boosts["atk"] = 0;
        boosts["def"] = 0;
        boosts["spa"] = 0;
        boosts["accuracy"] = 0;
      }
    },
    onUpdate(pokemon) {
      if (pokemon.status === "slp") {
        this.add("-activate", pokemon, "ability: Unvital");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target2, source2, effect) {
      if (status.id !== "slp")
        return;
      if (effect?.status) {
        this.add("-immune", target2, "[from] ability: Unvital");
      }
      return false;
    },
    onTryAddVolatile(status, target2) {
      if (status.id === "yawn") {
        this.add("-immune", target2, "[from] ability: Unvital");
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Unvital",
    rating: 3
  },
  ownluck: {
    shortDesc: "This Pokemon has +1 crit ratio and is immune to Intimidate and derivatives thereof.",
    onModifyCritRatio(critRatio) {
      return critRatio + 1;
    },
    onTryBoost(boost, target2, source2, effect) {
      if (["Intimidate", "Mad Cow", "Forest Fury", "Shock Factor", "Daunting Storm", "Toxic Attitude"].includes(effect.name) && boost.atk) {
        delete boost.atk;
        this.add("-fail", target2, "unboost", "Attack", "[from] ability: Own Luck", "[of] " + target2);
      } else if (effect.name === "Fishy Threat" && boost.spe) {
        delete boost.spe;
        this.add("-fail", target2, "unboost", "Speed", "[from] ability: Own Luck", "[of] " + target2);
      }
    },
    flags: {},
    name: "Own Luck",
    rating: 3
  },
  armourlock: {
    shortDesc: "This Pokemon can neither be critted nor have its item removed.",
    onTakeItem(item, pokemon, source2) {
      if (!this.activeMove)
        throw new Error("Battle.activeMove is null");
      if (!pokemon.hp || pokemon.item === "stickybarb")
        return;
      if (source2 && source2 !== pokemon || this.activeMove.id === "knockoff") {
        this.add("-activate", pokemon, "ability: Armour Lock");
        return false;
      }
    },
    onCriticalHit: false,
    flags: { breakable: 1 },
    name: "Armour Lock",
    rating: 3
  },
  glacialfocus: {
    shortDesc: "This Pokemon can't be flinched or have its Evasion lowered.",
    onTryBoost(boost, target2, source2, effect) {
      if (source2 && target2 === source2)
        return;
      if (boost.evasion && boost.evasion < 0) {
        delete boost.evasion;
        if (!effect.secondaries) {
          this.add("-fail", target2, "unboost", "accuracy", "[from] ability: Glacial Focus", "[of] " + target2);
        }
      }
    },
    onTryAddVolatile(status, pokemon) {
      if (status.id === "flinch")
        return null;
    },
    flags: { breakable: 1 },
    name: "Glacial Focus",
    rating: 3
  },
  slushie: {
    shortDesc: "Mold Breaker + Slush Rush",
    onStart(pokemon) {
      this.add("-ability", pokemon, "Slushie");
      this.add("-message", `${pokemon.name} is drinking a slushie!`);
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    },
    onModifySpe(spe, pokemon) {
      if (["hail", "snow"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(2);
      }
    },
    flags: {},
    name: "Slushie",
    rating: 3
  },
  sandwrath: {
    shortDesc: "Sand Stream + Sheer Force",
    onStart(source2) {
      this.field.setWeather("sandstorm");
    },
    onModifyMove(move, pokemon) {
      if (move.secondaries) {
        delete move.secondaries;
        delete move.self;
        if (move.id === "clangoroussoulblaze")
          delete move.selfBoost;
        move.hasSheerForce = true;
      }
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, pokemon, target2, move) {
      if (move.hasSheerForce)
        return this.chainModify([5325, 4096]);
    },
    flags: {},
    name: "Sand Wrath",
    rating: 3
  },
  pondweed: {
    shortDesc: "Grass/Water immunity, +1 Attack if hit by either",
    onTryHitPriority: 1,
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && ["Grass", "Water"].includes(move.type)) {
        if (!this.boost({ atk: 1 })) {
          this.add("-immune", target2, "[from] ability: Pondweed");
        }
        return null;
      }
    },
    onAllyTryHitSide(target2, source2, move) {
      if (source2 === this.effectState.target || !target2.isAlly(source2))
        return;
      if (move.type === "Grass" || move.type === "Water") {
        this.boost({ atk: 1 }, this.effectState.target);
      }
    },
    flags: { breakable: 1 },
    name: "Pondweed",
    rating: 3
  },
  wetskin: {
    shortDesc: "Hydration + Torrent",
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Water" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Wet Skin boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Water" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Wet Skin boost");
        return this.chainModify(1.5);
      }
    },
    onResidualOrder: 5,
    onResidualSubOrder: 4,
    onResidual(pokemon) {
      if (pokemon.status && ["raindance", "primordialsea"].includes(pokemon.effectiveWeather())) {
        this.debug("wetskin");
        this.add("-activate", pokemon, "ability: Wet Skin");
        pokemon.cureStatus();
      }
    },
    flags: {},
    name: "Wet Skin",
    rating: 3
  },
  friskexchange: {
    shortDesc: "Frisk + Thermal Exchange",
    onStart(pokemon) {
      for (const target2 of pokemon.side.foe.active) {
        if (!target2 || target2.fainted || !target2.item)
          continue;
        this.add("-item", target2, target2.getItem().name, "[from] ability: Frisk Exchange", "[of] " + pokemon, "[identify]");
      }
    },
    onDamagingHit(damage, target2, source2, move) {
      if (move.type === "Fire") {
        this.boost({ atk: 1 });
      }
    },
    onUpdate(pokemon) {
      if (pokemon.status === "brn") {
        this.add("-activate", pokemon, "ability: Frisk Exchange");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target2, source2, effect) {
      if (status.id !== "brn")
        return;
      if (effect?.status) {
        this.add("-immune", target2, "[from] ability: Frisk Exchange");
      }
      return false;
    },
    flags: { breakable: 1 },
    name: "Frisk Exchange",
    rating: 3
  },
  freeflight: {
    shortDesc: "Libero + Levitate",
    onPrepareHit(source2, target2, move) {
      if (this.effectState.libero || move.hasBounced || move.isFutureMove || move.sourceEffect === "snatch")
        return;
      const type = move.type;
      if (type && type !== "???" && source2.getTypes().join() !== type && source2.setType(type)) {
        this.effectState.libero = true;
        this.add("-start", source2, "typechange", type, "[from] ability: Free Flight");
      }
    },
    onSwitchIn() {
      delete this.effectState.libero;
    },
    flags: { breakable: 1 },
    name: "Free Flight",
    rating: 3
  },
  pillage: {
    name: "Pillage",
    shortDesc: "On switch-in, swaps ability with the opponent.",
    onSwitchIn(pokemon) {
      this.effectState.switchingIn = true;
    },
    onStart(pokemon) {
      if (pokemon.foes().some(
        (foeActive) => foeActive && foeActive.isAdjacent(pokemon) && foeActive.ability === "noability"
      ) || pokemon.species.id !== "zoinkazenta") {
        this.effectState.gaveUp = true;
      }
    },
    onUpdate(pokemon) {
      if (!pokemon.isStarted || this.effectState.gaveUp || !this.effectState.switchingIn)
        return;
      const possibleTargets = pokemon.foes().filter((foeActive) => foeActive && !foeActive.getAbility().flags["notrace"] && !foeActive.getAbility().flags["failskillswap"] && foeActive.isAdjacent(pokemon));
      if (!possibleTargets.length)
        return;
      const rand = possibleTargets.length > 1 ? this.random(possibleTargets.length) : 0;
      const target2 = possibleTargets[rand];
      const pillageAbil = pokemon.getAbility();
      const ability = target2.getAbility();
      if (!this.runEvent("SetAbility", target2, pokemon, this.effect, pillageAbil) || !this.runEvent("SetAbility", pokemon, pokemon, this.effect, ability))
        return;
      this.add("-ability", pokemon, "Pillage");
      this.add("-activate", pokemon, "move: Skill Swap", ability, pillageAbil, "[of] " + target2);
      this.singleEvent("End", pillageAbil, pillageAbil.abilityState, pokemon);
      this.singleEvent("End", ability, ability.abilityState, target2);
      pokemon.ability = ability.id;
      pokemon.abilityState = { id: this.toID(pokemon.ability), target: pokemon };
      target2.ability = pillageAbil.id;
      target2.abilityState = { id: this.toID(pillageAbil.id), target: target2 };
      this.singleEvent("Start", ability, pokemon.abilityState, pokemon);
      this.singleEvent("Start", pillageAbil, target2.abilityState, target2);
    },
    flags: { failroleplay: 1, noentrain: 1, notrace: 1 },
    rating: 5
  },
  fatfingers: {
    shortDesc: "Long Reach + Thick Fat",
    onModifyMove(move) {
      delete move.flags["contact"];
    },
    onSourceModifyAtkPriority: 6,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Ice" || move.type === "Fire") {
        this.debug("Fat Fingers weaken");
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Ice" || move.type === "Fire") {
        this.debug("Fat Fingers weaken");
        return this.chainModify(0.5);
      }
    },
    flags: { breakable: 1 },
    name: "Fat Fingers",
    rating: 3
  },
  hourglass: {
    shortDesc: "Mirror Armor + Sand Rush",
    onModifySpe(spe, pokemon) {
      if (this.field.isWeather("sandstorm")) {
        return this.chainModify(2);
      }
    },
    onImmunity(type, pokemon) {
      if (type === "sandstorm")
        return false;
    },
    onTryBoost(boost, target2, source2, effect) {
      if (!source2 || target2 === source2 || !boost || effect.name === "Hourglass")
        return;
      let b;
      for (b in boost) {
        if (boost[b] < 0 && target2.boosts[b] > -6) {
          const negativeBoost = {};
          negativeBoost[b] = boost[b];
          delete boost[b];
          if (source2.hp) {
            this.add("-ability", target2, "Hourglass");
            this.boost(negativeBoost, source2, target2, null, true);
          }
        }
      }
    },
    flags: { breakable: 1 },
    name: "Hourglass",
    rating: 3
  },
  piezoelectric: {
    shortDesc: "Volt Absorb + Pressure",
    onDeductPP(target2, source2) {
      if (!target2.isAlly(source2))
        return 1;
    },
    onStart(pokemon) {
      this.add("-ability", pokemon, "Piezoelectric");
    },
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && move.type === "Electric" && !move.ignoreAbility) {
        if (!this.heal(target2.baseMaxhp / 4)) {
          this.add("-immune", target2, "[from] ability: Piezoelectric");
        }
        return null;
      }
    },
    flags: {},
    name: "Piezoelectric",
    rating: 3
  },
  fieldday: {
    shortDesc: "If Grassy Terrain is active, this Pokemon's Speed is doubled.",
    onModifySpe(spe) {
      if (this.field.isTerrain("grassyterrain")) {
        return this.chainModify(2);
      }
    },
    flags: {},
    name: "Field Day",
    rating: 3
  },
  forceofnature: {
    shortDesc: "Grassy Surge + Sheer Force.",
    onStart(source2) {
      this.field.setTerrain("grassyterrain");
    },
    onModifyMove(move, pokemon) {
      if (move.secondaries) {
        delete move.secondaries;
        delete move.self;
        if (move.id === "clangoroussoulblaze")
          delete move.selfBoost;
        move.hasSheerForce = true;
      }
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, pokemon, target2, move) {
      if (move.hasSheerForce)
        return this.chainModify([5325, 4096]);
    },
    flags: {},
    name: "Force of Nature"
  },
  airbornearmor: {
    shortDesc: "Prism Armor + Levitate",
    onSourceModifyDamage(damage, source2, target2, move) {
      if (target2.getMoveHitData(move).typeMod > 0) {
        this.debug("Airborne Armor neutralize");
        return this.chainModify(0.75);
      }
    },
    flags: {},
    name: "Airborne Armor",
    rating: 3
  },
  bleedingedge: {
    shortDesc: "Mold Breaker + Technician",
    onStart(pokemon) {
      this.add("-ability", pokemon, "Bleeding Edge");
      this.add("-message", `${pokemon.name} breaks the mold!`);
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    },
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
      const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
      this.debug("Base Power: " + basePowerAfterMultiplier);
      if (basePowerAfterMultiplier <= 60) {
        this.debug("Bleeding Edge boost");
        return this.chainModify(1.5);
      }
    },
    flags: {},
    name: "Bleeding Edge",
    rating: 3
  },
  ancientmarble: {
    shortDesc: "Protosynthesis + Sharpness",
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["slicing"]) {
        this.debug("Ancient Marble boost");
        return this.chainModify(1.5);
      }
    },
    onStart(pokemon) {
      this.singleEvent("WeatherChange", this.effect, this.effectState, pokemon);
    },
    onWeatherChange(pokemon) {
      if (pokemon.transformed)
        return;
      if (this.field.isWeather("sunnyday")) {
        pokemon.addVolatile("protosynthesis");
      } else if (!pokemon.volatiles["protosynthesis"]?.fromBooster) {
        pokemon.removeVolatile("protosynthesis");
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["protosynthesis"];
      this.add("-end", pokemon, "Protosynthesis", "[silent]");
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Ancient Marble",
    rating: 3
  },
  spongeofruin: {
    shortDesc: "Beads of Ruin + Water Absorb",
    onStart(pokemon) {
      if (this.suppressingAbility(pokemon))
        return;
      this.add("-ability", pokemon, "Sponge of Ruin");
      this.add("-message", `${pokemon.name}'s Sponge of Ruin weakened the Sp. Def of all surrounding Pok\xE9mon!`);
    },
    onAnyModifySpD(spd, target2, source2, move) {
      if (target2.hasAbility(["Sponge of Ruin", "Beads of Ruin"]))
        return;
      const abilityHolder = this.effectState.target;
      if (!move.ruinedSpD?.hasAbility(["Sponge of Ruin", "Beads of Ruin"]))
        move.ruinedSpD = abilityHolder;
      else if (move.ruinedSpD !== abilityHolder)
        return;
      this.debug("Sponge of Ruin SpD drop");
      return this.chainModify(0.75);
    },
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && move.type === "Water") {
        if (!this.heal(target2.baseMaxhp / 4)) {
          this.add("-immune", target2, "[from] ability: Sponge of Ruin");
        }
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Sponge of Ruin",
    rating: 3
  },
  overwhelming: {
    shortDesc: "Magic Guard + Sheer Force",
    onDamage(damage, target2, source2, effect) {
      if (effect.effectType !== "Move") {
        if (effect.effectType === "Ability")
          this.add("-activate", source2, "ability: " + effect.name);
        return false;
      }
    },
    onModifyMove(move, pokemon) {
      if (move.secondaries) {
        delete move.secondaries;
        delete move.self;
        if (move.id === "clangoroussoulblaze")
          delete move.selfBoost;
        move.hasSheerForce = true;
      }
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, pokemon, target2, move) {
      if (move.hasSheerForce)
        return this.chainModify([5325, 4096]);
    },
    flags: {},
    name: "Overwhelming",
    rating: 3
  },
  prehistorichunter: {
    shortDesc: "Protosynthesis + Gulp Missile; Activating one also activates the other",
    onStart(pokemon) {
      this.singleEvent("WeatherChange", this.effect, this.effectState, pokemon);
    },
    onDamagingHit(damage, target2, source2, move) {
      if (!source2.hp || !source2.isActive || target2.transformed || target2.isSemiInvulnerable())
        return;
      if (["screamcormorantgulping", "screamcormorantgorging"].includes(target2.species.id)) {
        this.damage(source2.baseMaxhp / 4, source2, target2);
        if (target2.species.id === "screamcormorantgulping") {
          this.boost({ def: -1 }, source2, target2, null, true);
        } else {
          source2.trySetStatus("par", target2, move);
        }
        target2.formeChange("screamcormorant", move);
        delete target2.volatiles["prehistorichunter"];
      }
    },
    // The Dive part of this mechanic is implemented in Dive's `onTryMove` in moves.ts
    onSourceTryPrimaryHit(target2, source2, effect) {
      if (effect?.id === "surf" && source2.hasAbility("prehistorichunter") && source2.species.name === "Scream Cormorant" && !source2.transformed) {
        const forme = source2.hp <= source2.maxhp / 2 ? "screamcormorantgorging" : "screamcormorantgulping";
        source2.formeChange(forme, effect);
        source2.addVolatile("prehistorichunter");
      }
    },
    onWeatherChange(pokemon) {
      const forme = pokemon.hp <= pokemon.maxhp / 2 ? "screamcormorantgorging" : "screamcormorantgulping";
      if (this.field.isWeather("sunnyday")) {
        pokemon.addVolatile("prehistorichunter");
        pokemon.formeChange(forme, this.effect, false, "[msg]");
      } else if (!pokemon.volatiles["prehistorichunter"]?.fromBooster) {
        pokemon.removeVolatile("prehistorichunter");
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["prehistorichunter"];
      this.add("-end", pokemon, "Protosynthesis", "[silent]");
    },
    condition: {
      noCopy: true,
      onStart(pokemon, source2, effect) {
        const forme = pokemon.hp <= pokemon.maxhp / 2 ? "screamcormorantgorging" : "screamcormorantgulping";
        if (effect?.name === "Booster Energy") {
          this.effectState.fromBooster = true;
          this.add("-activate", pokemon, "ability: Prehistoric Hunter", "[fromitem]");
          if (pokemon.species.id === "screamcormorant") {
            this.add("-message", `${pokemon.name} used its Booster Energy to locate nearby prey!`);
            pokemon.formeChange(forme, this.effect, false, "[msg]");
          }
        } else {
          this.add("-activate", pokemon, "ability: Prehistoric Hunter");
        }
        this.effectState.bestStat = pokemon.getBestStat(false, true);
        this.add("-start", pokemon, "protosynthesis" + this.effectState.bestStat);
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, pokemon) {
        if (this.effectState.bestStat !== "atk" || pokemon.ignoringAbility())
          return;
        this.debug("Prehistoric Hunter atk boost");
        return this.chainModify([5325, 4096]);
      },
      onModifyDefPriority: 6,
      onModifyDef(def, pokemon) {
        if (this.effectState.bestStat !== "def" || pokemon.ignoringAbility())
          return;
        this.debug("Prehistoric Hunter def boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpAPriority: 5,
      onModifySpA(spa, pokemon) {
        if (this.effectState.bestStat !== "spa" || pokemon.ignoringAbility())
          return;
        this.debug("Prehistoric Hunter spa boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpDPriority: 6,
      onModifySpD(spd, pokemon) {
        if (this.effectState.bestStat !== "spd" || pokemon.ignoringAbility())
          return;
        this.debug("Prehistoric Hunter spd boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpe(spe, pokemon) {
        if (this.effectState.bestStat !== "spe" || pokemon.ignoringAbility())
          return;
        for (const target2 of pokemon.foes()) {
          if (target2.hasAbility("dyschronometria")) {
            this.debug("Dyschronometria negating spe boost");
            return;
          }
        }
        this.debug("Prehistoric Hunter spe boost");
        return this.chainModify(1.5);
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Protosynthesis");
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1, notransform: 1 },
    name: "Prehistoric Hunter",
    rating: 3
  },
  lawnmowerofruin: {
    shortDesc: "Sap Sipper + Vessel of Ruin",
    onStart(pokemon) {
      if (this.suppressingAbility(pokemon))
        return;
      this.add("-ability", pokemon, "Lawnmower of Ruin");
      this.add("-message", `${pokemon.name}'s Lawnmower of Ruin weakened the Sp. Atk of all surrounding Pok\xE9mon!`);
    },
    onAnyModifySpA(spa, source2, target2, move) {
      if (source2.hasAbility(["Lawnmower of Ruin", "Vessel of Ruin"]))
        return;
      const abilityHolder = this.effectState.target;
      if (!move.ruinedSpA)
        move.ruinedSpA = abilityHolder;
      else if (move.ruinedSpA !== abilityHolder)
        return;
      this.debug("Lawnmower of Ruin SpA drop");
      return this.chainModify(0.75);
    },
    onTryHitPriority: 1,
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && move.type === "Grass") {
        if (!this.boost({ atk: 1 })) {
          this.add("-immune", target2, "[from] ability: Lawnmower of Ruin");
        }
        return null;
      }
    },
    onAllyTryHitSide(target2, source2, move) {
      if (source2 === this.effectState.target || !target2.isAlly(source2) || move.type !== "Grass")
        return;
      this.boost({ atk: 1 }, this.effectState.target);
    },
    flags: { breakable: 1 },
    name: "Lawnmower of Ruin"
  },
  barbedchain: {
    shortDesc: "This Pokemon\u2019s contact moves do an additional 1/8 of the target\u2019s max HP in damage.",
    onSourceDamagingHit(damage, target2, source2, move) {
      if (target2.hasAbility("shielddust") || target2.hasItem("covertcloak") || !target2.hp || !this.checkMoveMakesContact(move, target2, source2))
        return;
      this.damage(target2.baseMaxhp / 8, target2, source2);
    },
    name: "Barbed Chain"
  },
  steamyscales: {
    shortDesc: "Multiscale effects. Damage from Water and Fire is halved.",
    onSourceBasePowerPriority: 17,
    onSourceBasePower(basePower, attacker, defender, move) {
      if (move.type === "Fire" || move.type === "Water") {
        return this.chainModify(0.5);
      }
    },
    onSourceModifyDamage(damage, source2, target2, move) {
      if (target2.hp >= target2.maxhp) {
        this.debug("Steamy Scales weaken");
        return this.chainModify(0.5);
      }
    },
    flags: { breakable: 1 },
    name: "Steamy Scales"
  },
  marvelsteam: {
    shortDesc: "When hit by a damaging Water or Fire-type move, +6 to Def and Spe.",
    onDamagingHit(damage, target2, source2, move) {
      if (["Water", "Fire"].includes(move.type)) {
        this.boost({ def: 6, spe: 6 });
      }
    },
    flags: {},
    name: "Marvel Steam"
  },
  hellkite: {
    shortDesc: "Levitate effects + 1.5x power to Dragon and Ground moves.",
    //floatation under scripts.ts
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (["Dragon", "Ground"].includes(move.type)) {
        this.debug("Hellkite boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (["Dragon", "Ground"].includes(move.type)) {
        this.debug("Hellkite boost");
        return this.chainModify(1.5);
      }
    },
    flags: { breakable: 1 },
    name: "Hellkite"
  },
  feistytempo: {
    shortDesc: "Guts + Own Tempo",
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (attacker.status) {
        return this.chainModify(1.5);
      }
    },
    onUpdate(pokemon) {
      if (pokemon.volatiles["confusion"]) {
        this.add("-activate", pokemon, "ability: Feisty Tempo");
        pokemon.removeVolatile("confusion");
      }
    },
    onTryAddVolatile(status, pokemon) {
      if (status.id === "confusion")
        return null;
    },
    onHit(target2, source2, move) {
      if (move?.volatileStatus === "confusion") {
        this.add("-immune", target2, "confusion", "[from] ability: Feisty Tempo");
      }
    },
    onTryBoost(boost, target2, source2, effect) {
      if (["Intimidate", "Mad Cow", "Forest Fury", "Shock Factor", "Daunting Storm", "Toxic Attitude"].includes(effect.name) && boost.atk) {
        delete boost.atk;
        this.add("-fail", target2, "unboost", "Attack", "[from] ability: Feisty Tempo", "[of] " + target2);
      } else if (effect.name === "Fishy Threat" && boost.spe) {
        delete boost.spe;
        this.add("-fail", target2, "unboost", "Speed", "[from] ability: Feisty Tempo", "[of] " + target2);
      }
    },
    flags: { breakable: 1 },
    name: "Feisty Tempo"
  },
  wellbakedflameorb: {
    shortDesc: "Guts + Well-Baked Body",
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (attacker.status) {
        return this.chainModify(1.5);
      }
    },
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && move.type === "Fire") {
        if (!this.boost({ def: 2 })) {
          this.add("-immune", target2, "[from] ability: Well-Baked Flame Orb");
        }
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Well-Baked Flame Orb"
  },
  adrenalinearoma: {
    shortDesc: "Guts + Aroma Veil",
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (attacker.status) {
        return this.chainModify(1.5);
      }
    },
    onAllyTryAddVolatile(status, target2, source2, effect) {
      if (["attract", "disable", "encore", "healblock", "taunt", "torment"].includes(status.id)) {
        if (effect.effectType === "Move") {
          const effectHolder = this.effectState.target;
          this.add("-block", target2, "ability: Adrenaline Aroma", "[of] " + effectHolder);
        }
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Adrenaline Aroma"
  },
  powerbuns: {
    shortDesc: "Sheer Force + Well-Baked Body",
    onModifyMove(move, pokemon) {
      if (move.secondaries) {
        delete move.secondaries;
        delete move.self;
        if (move.id === "clangoroussoulblaze")
          delete move.selfBoost;
        move.hasSheerForce = true;
      }
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, pokemon, target2, move) {
      if (move.hasSheerForce)
        return this.chainModify([5325, 4096]);
    },
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && move.type === "Fire") {
        if (!this.boost({ def: 2 })) {
          this.add("-immune", target2, "[from] ability: Power Buns");
        }
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Power Buns"
  },
  honeymoon: {
    shortDesc: "Levitate + Honey Gather",
    // airborneness implemented in scripts.ts
    flags: { breakable: 1 },
    name: "Honey Moon"
  },
  aircontrol: {
    shortDesc: "Levitate + Mind's Eye",
    // airborneness implemented in scripts.ts
    onTryBoost(boost, target2, source2, effect) {
      if (source2 && target2 === source2)
        return;
      if (boost.accuracy && boost.accuracy < 0) {
        delete boost.accuracy;
        if (!effect.secondaries) {
          this.add("-fail", target2, "unboost", "accuracy", "[from] ability: Air Control", "[of] " + target2);
        }
      }
    },
    onModifyMovePriority: -5,
    onModifyMove(move) {
      move.ignoreEvasion = true;
      if ((move.ignoreImmunity || (move.ignoreImmunity = {})) !== true) {
        move.ignoreImmunity["Fighting"] = true;
        move.ignoreImmunity["Normal"] = true;
      }
    },
    flags: { breakable: 1 },
    name: "Air Control"
  },
  livelylocks: {
    shortDesc: "Copies opponent's stat changes to Speed on switch-in",
    onStart(pokemon) {
      for (const target2 of pokemon.adjacentFoes()) {
        if (!target2.boosts.spe)
          continue;
        this.boost({ spe: target2.boosts.spe }, pokemon);
        return;
      }
    },
    flags: {},
    name: "Lively Locks"
  },
  angrybird: {
    shortDesc: "Defiant + Competitive",
    onAfterEachBoost(boost, target2, source2, effect) {
      if (!source2 || target2.isAlly(source2))
        return;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          this.boost({ atk: 2, spa: 2 }, target2, target2, null, false, true);
          return;
        }
      }
    },
    flags: {},
    name: "Angry Bird"
  },
  sharpgoggles: {
    shortDesc: "Tinted Lens + Competitive",
    onModifyDamage(damage, source2, target2, move) {
      if (target2.getMoveHitData(move).typeMod < 0) {
        this.debug("Tinted Lens boost");
        return this.chainModify(2);
      }
    },
    onAfterEachBoost(boost, target2, source2, effect) {
      if (!source2 || target2.isAlly(source2))
        return;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          this.boost({ spa: 2 }, target2, target2, null, false, true);
          return;
        }
      }
    },
    flags: {},
    name: "Sharp Goggles"
  },
  winterstorm: {
    shortDesc: "Under snow, heal 6.25% of own max HP and damage opponents for 12.5% of their max HP at end of turn.",
    onWeather(target2, source2, effect) {
      if (effect.id === "snow" || effect.id === "hail") {
        this.heal(target2.baseMaxhp / 16);
        for (const pokemon of target2.foes()) {
          this.damage(pokemon.baseMaxhp / 8, pokemon, target2);
        }
      }
    },
    onImmunity(type, pokemon) {
      if (type === "hail")
        return false;
    },
    flags: {},
    name: "Winter Storm"
  },
  fishythreat: {
    shortDesc: "On switch-in, inflict -2 Speed to opponents.",
    onStart(pokemon) {
      let activated = false;
      for (const target2 of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Fishy Threat", "boost");
          activated = true;
        }
        if (target2.volatiles["substitute"]) {
          this.add("-immune", target2);
        } else {
          this.boost({ spe: -2 }, target2, pokemon, null, true);
        }
      }
    },
    flags: {},
    name: "Fishy Threat",
    rating: 3.5
  },
  heatproofdrive: {
    shortDesc: "Heatproof + Quark Drive",
    onSourceModifyAtkPriority: 6,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Fire") {
        this.debug("Heatproof Drive Atk weaken");
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Fire") {
        this.debug("Heatproof Drive SpA weaken");
        return this.chainModify(0.5);
      }
    },
    onDamage(damage, target2, source2, effect) {
      if (effect && effect.id === "brn") {
        return damage / 2;
      }
    },
    onStart(pokemon) {
      this.singleEvent("TerrainChange", this.effect, this.effectState, pokemon);
    },
    onTerrainChange(pokemon) {
      if (pokemon.transformed)
        return;
      if (this.field.isTerrain("electricterrain")) {
        pokemon.addVolatile("quarkdrive");
      } else if (!pokemon.volatiles["quarkdrive"]?.fromBooster) {
        pokemon.removeVolatile("quarkdrive");
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["quarkdrive"];
      this.add("-end", pokemon, "Quark Drive", "[silent]");
    },
    flags: { breakable: 1, failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Heatproof Drive",
    rating: 4
  },
  /*armorfist: {
  		shortDesc: "x1.2 power to punch and priority moves (stacking); Own side is protected from the sort",
  		onFoeTryMove(target, source, move) {
  			const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
  			if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
  				return;
  			}
  
  			const armorTailHolder = this.effectState.target;
  			if ((source.isAlly(armorTailHolder) || move.target === 'all') && (move.priority > 0.1 || move.flags['punch'])) {
  				this.attrLastMove('[still]');
  				this.add('cant', armorTailHolder, 'ability: Armor Fist', move, '[of] ' + target);
  				return false;
  			}
  		},
  		onBasePowerPriority: 23,
  		onBasePower(basePower, attacker, defender, move) {
  			if (move.flags['punch'] || move.priority > 0.1) {
  				this.debug('Armor Fist boost');
  				return this.chainModify([(move.priority > 0.1 && move.flags['punch']) ? 5898 : 4915, 4096]);
  			}
  		},
  		flags: {breakable: 1},
  		name: "Armor Fist",
  	},
  	mercurypulse: {
  		shortDesc: "On switch-in, summons Rain Dance. During Rain Dance, Attack is 1.3333x.",
  		onStart(pokemon) {
  			if (this.field.setWeather('raindance')) {
  				this.add('-activate', pokemon, 'Mercury Pulse', '[source]');
  			} else if (this.field.isWeather('raindance')) {
  				this.add('-activate', pokemon, 'ability: Mercury Pulse');
  			}
  		},
  		onModifyAtkPriority: 5,
  		onModifyAtk(atk, pokemon) {
  			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
  				this.debug('Mercury boost');
  				return this.chainModify([5461, 4096]);
  			}
  		},
  		flags: {},
  		name: "Mercury Pulse",
  		rating: 4.5,
  	},*/
  firedup: {
    shortDesc: "Side protected from Fire and Priority moves; x1.5 power on priority.",
    onFoeTryMove(target2, source2, move) {
      const targetAllExceptions = ["perishsong", "flowershield", "rototiller"];
      if (move.target === "foeSide" || move.target === "all" && !targetAllExceptions.includes(move.id)) {
        return;
      }
      const armorTailHolder = this.effectState.target;
      if ((source2.isAlly(armorTailHolder) || move.target === "all") && (move.priority > 0.1 || move.type === "Fire")) {
        this.attrLastMove("[still]");
        this.add("cant", armorTailHolder, "ability: Fired Up", move, "[of] " + target2);
        return false;
      }
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.priority > 0.1) {
        this.debug("Fired Up boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.priority > 0.1) {
        this.debug("Fired Up boost");
        return this.chainModify(1.5);
      }
    },
    flags: { breakable: 1 },
    name: "Fired Up"
  },
  firedrinker: {
    shortDesc: "Sap Sipper + Blaze. Sap Sipper also activates against Fire-type moves.",
    onTryHitPriority: 1,
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && ["Fire", "Grass"].includes(move.type)) {
        if (!this.boost({ atk: 1 })) {
          this.add("-immune", target2, "[from] ability: Fire Drinker");
        }
        return null;
      }
    },
    onAllyTryHitSide(target2, source2, move) {
      if (source2 === this.effectState.target || !target2.isAlly(source2))
        return;
      if (["Fire", "Grass"].includes(move.type)) {
        this.boost({ atk: 1 }, this.effectState.target);
      }
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Fire" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Fire Drinker boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Fire" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Fire Drinker boost");
        return this.chainModify(1.5);
      }
    },
    flags: { breakable: 1 },
    name: "Fire Drinker"
  },
  minddomain: {
    shortDesc: "When stats are lowered, +2 SpA and sets up Psychic Terrain.",
    onAfterEachBoost(boost, target2, source2, effect) {
      if (!source2 || target2.isAlly(source2))
        return;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          this.boost({ spa: 2 }, target2, target2, null, false, true);
          this.field.setTerrain("psychicterrain");
          return;
        }
      }
    },
    flags: {},
    name: "Mind Domain",
    rating: 4
  },
  forcedfencer: {
    shortDesc: "Pressure + Stance Change",
    onStart(pokemon) {
      this.add("-ability", pokemon, "Forced Fencer");
    },
    onDeductPP(target2, source2) {
      if (target2.isAlly(source2))
        return;
      return 1;
    },
    onModifyMovePriority: 1,
    onModifyMove(move, attacker, defender) {
      if (attacker.species.baseSpecies !== "Deoxyslash-Speed" || attacker.transformed)
        return;
      let targetForme;
      if (move.id === "kingsshield") {
        targetForme = "Deoxyslash-Speed";
      } else if (move.category !== "Status") {
        targetForme = "Deoxyslash-Speed-Blade";
      } else {
        return;
      }
      if (attacker.species.name !== targetForme)
        attacker.formeChange(targetForme);
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
    name: "Forced Fencer",
    rating: 4
  },
  //Introduced with FEUU
  stormclinic: {
    shortDesc: "Regenerator + Wind Rider",
    onStart(pokemon) {
      if (pokemon.side.sideConditions["tailwind"]) {
        this.boost({ atk: 1 }, pokemon, pokemon);
      }
    },
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && move.flags["wind"]) {
        if (!this.boost({ atk: 1 }, target2, target2)) {
          this.add("-immune", target2, "[from] ability: Wind Rider");
        }
        return null;
      }
    },
    onAllySideConditionStart(target2, source2, sideCondition) {
      const pokemon = this.effectState.target;
      if (sideCondition.id === "tailwind") {
        this.boost({ atk: 1 }, pokemon, pokemon);
      }
    },
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    },
    flags: { breakable: 1 },
    name: "Storm Clinic"
  },
  ultraface: {
    shortDesc: "Eisephalon: Change to No Face form on KO and gain +1 to highest stat; Reverts in Snow",
    onSourceAfterFaint(length, target2, source2, effect) {
      var _a;
      if (effect && effect.effectType === "Move" && source2.species.id === "eisephalon") {
        this.boost({ [(_a = this.effectState).bestStat || (_a.bestStat = source2.getBestStat(true, true))]: length }, source2);
        source2.formeChange("Eisephalon-No-Face", this.effect, true);
      }
    },
    onWeatherChange(pokemon, source2, sourceEffect) {
      if (sourceEffect?.suppressWeather || !pokemon.hp)
        return;
      if (this.field.isWeather(["hail", "snow"]) && pokemon.species.id === "eisephalonnoface") {
        this.add("-activate", pokemon, "ability: Ultra Face");
        pokemon.formeChange("Eisephalon", this.effect, true);
      }
    },
    flags: {
      failroleplay: 1,
      noreceiver: 1,
      noentrain: 1,
      notrace: 1,
      failskillswap: 1,
      cantsuppress: 1,
      notransform: 1
    },
    name: "Ultra Face",
    rating: 3.5,
    num: 224
  },
  emperorsclothes: {
    shortDesc: "Deal 10% bonus damage for each hit taken (up to 50%)",
    onStart(pokemon) {
      if (!pokemon.hp)
        return;
      let attacked = pokemon.timesAttacked;
      if (attacked > 0) {
        this.effectState.fallen = attacked > 5 ? 5 : attacked;
        this.add("-start", pokemon, `fallen${this.effectState.fallen}`, "[silent]");
      } else {
        this.effectState.fallen = 0;
      }
    },
    onDamagingHit(damage, target2, source2, move) {
      if (!target2.hp || this.effectState.fallen >= 5)
        return;
      if (!move.isMax && !move.flags["futuremove"] && move.id !== "struggle") {
        if (this.effectState.fallen) {
          this.add("-end", target2, `fallen${this.effectState.fallen}`, "[silent]");
        }
        this.effectState.fallen++;
        this.add("-activate", target2, "ability: Emperor's Clothes");
        this.add("-start", target2, `fallen${this.effectState.fallen}`, "[silent]");
      }
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, attacker, defender, move) {
      if (this.effectState.fallen) {
        const powMod = [4096, 4506, 4915, 5325, 5734, 6144];
        this.debug(`Supreme Overlord boost: ${powMod[this.effectState.fallen]}/4096`);
        return this.chainModify([powMod[this.effectState.fallen], 4096]);
      }
    },
    flags: {},
    name: "Emperor's Clothes"
  },
  /*innermood: {
  		shortDesc: "Inner Focus + Moody",
  		onTryAddVolatile(status, pokemon) {
  			if (status.id === 'flinch') return null;
  		},
  		onResidualOrder: 28,
  		onResidualSubOrder: 2,
  		onResidual(pokemon) {
  			let stats: BoostID[] = [];
  			const boost: SparseBoostsTable = {};
  			let statPlus: BoostID;
  			for (statPlus in pokemon.boosts) {
  				if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
  				if (pokemon.boosts[statPlus] < 6) {
  					stats.push(statPlus);
  				}
  			}
  			let randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
  			if (randomStat) boost[randomStat] = 2;
  
  			stats = [];
  			let statMinus: BoostID;
  			for (statMinus in pokemon.boosts) {
  				if (statMinus === 'accuracy' || statMinus === 'evasion') continue;
  				if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
  					stats.push(statMinus);
  				}
  			}
  			randomStat = stats.length ? this.sample(stats) : undefined;
  			if (randomStat) boost[randomStat] = -1;
  
  			this.boost(boost, pokemon, pokemon);
  		},
  		onTryBoost(boost, target, source, effect) {
  			if (['Intimidate','Mad Cow','Forest Fury','Shock Factor','Daunting Storm','Toxic Attitude'].includes(effect.name)) {
  				if (boost.atk) {
  					delete boost.atk;
  					this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Inner Mood', '[of] ' + target);
  				}
  			} else if (effect.name === 'Fishy Threat' && boost.spe) {
  				delete boost.spe;
  				this.add('-fail', target, 'unboost', 'Speed', '[from] ability: Inner Mood', '[of] ' + target);
  			}
  		},
  		flags: {breakable: 1},
  		name: "Inner Mood",
  	},*/
  erratic: {
    shortDesc: "+2 to a random stat (not Acc./Eva.) when any stat is lowered by a foe.",
    onAfterEachBoost(boost, target2, source2, effect) {
      if (!source2 || target2.isAlly(source2))
        return;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          let stats = [];
          let statPlus;
          for (statPlus in target2.boosts) {
            if (!["accuracy", "evasion"].includes(statPlus) && target2.boosts[statPlus] < 6) {
              stats.push(statPlus);
            }
          }
          if (stats.length)
            this.boost({ [this.sample(stats)]: 2 }, target2, target2, null, false, true);
          return;
        }
      }
    },
    flags: {},
    name: "Erratic"
  },
  nononsense: {
    shortDesc: "Battle Armor + Clear Body",
    onTryBoost(boost, target2, source2, effect) {
      if (source2 && target2 === source2)
        return;
      let showMsg = false;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          delete boost[i];
          showMsg = true;
        }
      }
      if (showMsg && !effect.secondaries && effect.id !== "octolock") {
        this.add("-fail", target2, "unboost", "[from] ability: No Nonsense", "[of] " + target2);
      }
    },
    onCriticalHit: false,
    flags: { breakable: 1 },
    name: "No Nonsense"
  },
  /*magneticstorm: {
  	shortDesc: "Magnet Pull + Storm Drain",
  	onFoeTrapPokemon(pokemon) {
  		if (pokemon.hasType('Steel') && pokemon.isAdjacent(this.effectState.target)) {
  			pokemon.tryTrap(true);
  		}
  	},
  	onFoeMaybeTrapPokemon(pokemon, source) {
  		if (!(source ||= this.effectState.target) || !pokemon.isAdjacent(source)) return;
  		if (!pokemon.knownType || pokemon.hasType('Steel')) {
  			pokemon.maybeTrapped = true;
  		}
  	},
  	onTryHit(target, source, move) {
  		if (target !== source && move.type === 'Water') {
  			if (!this.boost({spa: 1})) {
  				this.add('-immune', target, '[from] ability: Magnetic Storm');
  			}
  			return null;
  		}
  	},
  	onAnyRedirectTarget(target, source, source2, move) {
  		if (move.type !== 'Water' || move.flags['pledgecombo']) return;
  		const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
  		if (this.validTarget(this.effectState.target, source, redirectTarget)) {
  			if (move.smartTarget) move.smartTarget = false;
  			if (this.effectState.target !== target) {
  				this.add('-activate', this.effectState.target, 'ability: Magnetic Storm');
  			}
  			return this.effectState.target;
  		}
  	},
  	flags: {breakable: 1},
  	name: "Magnetic Storm",
  },*/
  sushistorm: {
    shortDesc: "Sturdy + Storm Drain",
    onTryHit(pokemon, target2, move) {
      if (target2 !== source && move.type === "Water") {
        if (!this.boost({ spa: 1 })) {
          this.add("-immune", target2, "[from] ability: Sushi Storm");
        }
        return null;
      }
      if (move.ohko) {
        this.add("-immune", pokemon, "[from] ability: Sushi Storm");
        return null;
      }
    },
    onDamagePriority: -30,
    onDamage(damage, target2, source2, effect) {
      if (target2.hp === target2.maxhp && damage >= target2.hp && effect && effect.effectType === "Move") {
        this.add("-ability", target2, "Sushi Storm");
        return target2.hp - 1;
      }
    },
    onAnyRedirectTarget(target2, source2, source22, move) {
      if (move.type !== "Water" || move.flags["pledgecombo"])
        return;
      const redirectTarget = ["randomNormal", "adjacentFoe"].includes(move.target) ? "normal" : move.target;
      if (this.validTarget(this.effectState.target, source2, redirectTarget)) {
        if (move.smartTarget)
          move.smartTarget = false;
        if (this.effectState.target !== target2) {
          this.add("-activate", this.effectState.target, "ability: Sushi Storm");
        }
        return this.effectState.target;
      }
    },
    flags: { breakable: 1 },
    name: "Sushi Storm"
  },
  commandingpull: {
    shortDesc: "Opposing Steels and boosted are trapped",
    onFoeTrapPokemon(pokemon) {
      if ((pokemon.positiveBoosts() || pokemon.hasType("Steel")) && pokemon.isAdjacent(this.effectState.target)) {
        pokemon.tryTrap(true);
      }
    },
    onFoeMaybeTrapPokemon(pokemon, source2) {
      if (!(source2 || (source2 = this.effectState.target)) || !pokemon.isAdjacent(source2))
        return;
      if (!pokemon.knownType || pokemon.positiveBoosts() || pokemon.hasType("Steel")) {
        pokemon.maybeTrapped = true;
      }
    },
    flags: {},
    name: "Commanding Pull"
  },
  /*ultraimpulse: {
  	shortDesc: "x1.5 to highest stat when burned; +1 upon landing a KO",
  	onStart(pokemon) {
  		this.effectState.bestStat = pokemon.getBestStat(true, true);
  	},
  	onBasePowerPriority: 19,
  	onBasePower(basePower, attacker, defender, move) {
  		const bestStat = this.effectState.bestStat;
  		if (['atk','spa'].includes(bestStat) && attacker.status === 'brn'
  			&& move.category === (bestStat === 'spa' ? 'Special' : 'Physical')) {
  			return this.chainModify(1.5);
  		}
  	},
  	onModifyDefPriority: 6,
  	onModifyDef(def, pokemon) {
  		if (this.effectState.bestStat === 'def' && pokemon.status === 'brn') {
  			return this.chainModify(1.5);
  		}
  	},
  	onModifySpDPriority: 6,
  	onModifySpD(spd, pokemon) {
  		if (this.effectState.bestStat === 'spd' && pokemon.status === 'brn') {
  			return this.chainModify(1.5);
  		}
  	},
  	onModifySpe(spe, pokemon) {
  		if (this.effectState.bestStat === 'spe' && pokemon.status === 'brn') {
  			return this.chainModify(1.5);
  		}
  	},
  	onSourceAfterFaint(length, target, source, effect) {
  		if (effect && effect.effectType === 'Move') {
  			this.boost({[this.effectState.bestStat]: length}, source);
  		}
  	},
  	flags: {},
  	name: "Ultra Impulse",
  },*/
  ultrashackles: {
    shortDesc: "Unburden effects. +1 Speed when landing a KO.",
    onAfterUseItem(item, pokemon) {
      if (pokemon === this.effectState.target)
        pokemon.addVolatile("unburden");
    },
    onTakeItem(item, pokemon) {
      pokemon.addVolatile("unburden");
    },
    onEnd(pokemon) {
      pokemon.removeVolatile("unburden");
    },
    onSourceAfterFaint(length, target2, source2, effect) {
      if (effect && effect.effectType === "Move") {
        this.boost({ spe: length }, source2);
      }
    },
    flags: {},
    name: "Ultra Shackles"
  },
  dauntingstorm: {
    shortDesc: "Water Absorb + Intimidate",
    onStart(pokemon) {
      let activated = false;
      for (const target2 of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Daunting Storm", "boost");
          activated = true;
        }
        if (target2.volatiles["substitute"]) {
          this.add("-immune", target2);
        } else {
          this.boost({ atk: -1 }, target2, pokemon, null, true);
        }
      }
    },
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && move.type === "Water") {
        if (!this.heal(target2.baseMaxhp / 4)) {
          this.add("-immune", target2, "[from] ability: Daunting Storm");
        }
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Daunting Storm"
  },
  magnetize: {
    shortDesc: "Galvanize + Levitate + x1.2 power to Ground.",
    //levitate's airborneness in scripts.ts/pokemon#IsGrounded()
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      const noModifyType = [
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      if (move.type === "Normal" && !(noModifyType.includes(move.id) || move.isZ && move.category !== "Status" || move.name === "Tera Blast" && pokemon.terastallized)) {
        move.type = "Electric";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target2, move) {
      if (move.typeChangerBoosted === this.effect || move.type === "Ground")
        return this.chainModify([4915, 4096]);
    },
    flags: { breakable: 1 },
    name: "Magnetize"
  },
  magneticforce: {
    shortDesc: "Galvanize effects + Traps Electric-types.",
    //levitate's airborneness in scripts.ts/pokemon#IsGrounded()
    onFoeTrapPokemon(pokemon) {
      if (pokemon.hasType("Electric") && pokemon.isAdjacent(this.effectState.target)) {
        pokemon.tryTrap(true);
      }
    },
    onFoeMaybeTrapPokemon(pokemon, source2) {
      if (!(source2 || (source2 = this.effectState.target)) || !pokemon.isAdjacent(source2))
        return;
      if (!pokemon.knownType || pokemon.hasType("Electric")) {
        pokemon.maybeTrapped = true;
      }
    },
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      const noModifyType = [
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      if (move.type === "Normal" && !(noModifyType.includes(move.id) || move.isZ && move.category !== "Status" || move.name === "Tera Blast" && pokemon.terastallized)) {
        move.type = "Electric";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target2, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    flags: { breakable: 1 },
    name: "Magnetic Force"
  },
  hydrotechnic: {
    shortDesc: "Moves with <=60BP have x1.5 power and restore 6.25% of Max HP after use.",
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
      const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
      this.debug("Base Power: " + basePowerAfterMultiplier);
      if (basePowerAfterMultiplier <= 60) {
        this.debug("Technician boost");
        move.typeChangerBoosted = this.effect;
        return this.chainModify(1.5);
      }
    },
    onSourceDamagingHit(damage, target2, source2, move) {
      if (source2 && move.typeChangerBoosted === this.effect)
        this.heal(source2.baseMaxhp / 16, source2, source2);
    },
    flags: {},
    name: "Hydrotechnic"
  },
  shearstrength: {
    shortDesc: "Takes x0.75 damage from SE moves and moves with secondaries.",
    onSourceModifyDamage(damage, source2, target2, move) {
      if (move.secondaries || target2.getMoveHitData(move).typeMod > 0) {
        this.debug("Shear Strength neutralize");
        return this.chainModify(0.75);
      }
    },
    flags: {},
    name: "Shear Strength"
  },
  suppressivefire: {
    shortDesc: "Filter + Flash Fire",
    onSourceModifyDamage(damage, source2, target2, move) {
      if (target2.getMoveHitData(move).typeMod > 0) {
        this.debug("Filter neutralize");
        return this.chainModify(0.75);
      }
    },
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && move.type === "Fire") {
        move.accuracy = true;
        if (!target2.addVolatile("burningpetals")) {
          this.add("-immune", target2, "[from] ability: Suppressive Fire");
        }
        return null;
      }
    },
    onEnd(pokemon) {
      pokemon.removeVolatile("burningpetals");
    },
    flags: { breakable: 1 },
    name: "Suppressive Fire"
  },
  innovate: {
    shortDesc: "Scrappy + Quark Drive.",
    onModifyMovePriority: -5,
    onModifyMove(move) {
      if ((move.ignoreImmunity || (move.ignoreImmunity = {})) !== true) {
        move.ignoreImmunity["Fighting"] = true;
        move.ignoreImmunity["Normal"] = true;
      }
    },
    onTryBoost(boost, target2, source2, effect) {
      if (["Intimidate", "Mad Cow", "Forest Fury", "Shock Factor", "Daunting Storm", "Toxic Attitude"].includes(effect.name)) {
        if (boost.atk) {
          delete boost.atk;
          this.add("-fail", target2, "unboost", "Attack", "[from] ability: Innovate", "[of] " + target2);
        }
      } else if (effect.name === "Fishy Threat" && boost.spe) {
        delete boost.spe;
        this.add("-fail", target2, "unboost", "Speed", "[from] ability: Innovate", "[of] " + target2);
      }
    },
    onStart(pokemon) {
      this.singleEvent("TerrainChange", this.effect, this.effectState, pokemon);
    },
    onTerrainChange(pokemon) {
      if (pokemon.transformed)
        return;
      if (this.field.isTerrain("electricterrain")) {
        pokemon.addVolatile("quarkdrive");
      } else if (!pokemon.volatiles["quarkdrive"]?.fromBooster) {
        pokemon.removeVolatile("quarkdrive");
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["quarkdrive"];
      this.add("-end", pokemon, "Quark Drive", "[silent]");
    },
    flags: { breakable: 1, failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    name: "Innovate",
    rating: 4
  },
  /*numbskull: {
  	shortDesc: "Unaware + Rock Head",
  	onDamage(damage, target, source, effect) {
  		if (effect.id === 'recoil') {
  			if (!this.activeMove) throw new Error("Battle.activeMove is null");
  			if (this.activeMove.id !== 'struggle') return null;
  		}
  	},
  	onAnyModifyBoost(boosts, pokemon) {
  		const unawareUser = this.effectState.target;
  		if (unawareUser === pokemon) return;
  		if (unawareUser === this.activePokemon) {
  			if (pokemon !== this.activeTarget) return;
  			boosts['def'] = 0;
  			boosts['spd'] = 0;
  			boosts['evasion'] = 0;
  		}
  		else if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
  			boosts['atk'] = 0;
  			boosts['def'] = 0;
  			boosts['spa'] = 0;
  			boosts['accuracy'] = 0;
  		}
  	},
  	flags: {breakable: 1},
  	name: "Numbskull",
  	rating: 3,
  },*/
  prehistoricpresence: {
    shortDesc: "Unaware + Pressure",
    onDeductPP(target2, source2) {
      if (!target2.isAlly(source2))
        return 1;
    },
    //Mold Breaker doesn't hit through Pressure but it hits through Unaware
    onStart(pokemon) {
      this.add("-ability", pokemon, "Prehistoric Presence");
      pokemon.addVolatile("ability:unaware");
    },
    onSourcePrepareHit(source2, target2, move) {
      if (target2.volatiles["ability:unaware"]) {
        if (move.ignoreAbility)
          target2.removeVolatile("ability:unaware");
      } else if (!move.ignoreAbility)
        target2.addVolatile("ability:unaware");
    },
    onEnd(pokemon) {
      pokemon.removeVolatile("ability:unaware");
    },
    flags: {},
    name: "Prehistoric Presence",
    rating: 3
  },
  hotheaded: {
    shortDesc: "Recoil immunity; x1.5 power to Recoil, Fire when below 1/3 HP",
    onDamage(damage, target2, source2, effect) {
      if (effect.id === "recoil") {
        if (!this.activeMove)
          throw new Error("Battle.activeMove is null");
        if (this.activeMove.id !== "struggle")
          return null;
      }
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (attacker.hp <= attacker.maxhp / 3 && (move.type === "Fire" || move.recoil)) {
        this.debug("Hotheaded boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (attacker.hp <= attacker.maxhp / 3 && (move.type === "Fire" || move.recoil)) {
        this.debug("Hotheaded boost");
        return this.chainModify(1.5);
      }
    },
    flags: { breakable: 1 },
    name: "Hotheaded",
    rating: 3
  },
  /*appleofruin: {
  	shortDesc: "Pokemon without this ability have their evasion multiplied by 0.75x.",
  	onStart(pokemon) {
  		if (this.suppressingAbility(pokemon)) return;
  		this.add('-ability', pokemon, 'Apple of Ruin');
  		this.add('-message', `${pokemon.name}'s Apple of Ruin weakened the Evasion of all surrounding Pokémon!`);
  	},
  	onAnyModifyAccuracyPriority: -1,
  	onAnyModifyAccuracy(accuracy, target, source, move) {
  		if (target.hasAbility('Apple of Ruin')) return;
  		const abilityHolder = this.effectState.target;
  		if (!move.ruinedEva) move.ruinedEva = abilityHolder;
  		else if (move.ruinedEva !== abilityHolder) return;
  		this.debug('Apple of Ruin Evasion drop');
  		return this.chainModify([5448, 4096]);
  	},
  	flags: {},
  	name: "Apple of Ruin",
  	rating: 4,
  },*/
  swordofrejuvenation: {
    shortDesc: "Sword of Ruin + Regenerator.",
    onStart(pokemon) {
      if (this.suppressingAbility(pokemon))
        return;
      this.add("-ability", pokemon, "Sword of Rejuvenation");
      this.add("-message", `${pokemon.name}'s Apple of Ruin weakened the Defense of all surrounding Pok\xE9mon!`);
    },
    onAnyModifyDef(def, target2, source2, move) {
      const abilityHolder = this.effectState.target;
      if (target2.hasAbility(["Sword of Ruin", "Sword of Rejuvenation"]))
        return;
      if (!move.ruinedDef?.hasAbility(["Sword of Ruin", "Sword of Rejuvenation"]))
        move.ruinedDef = abilityHolder;
      if (move.ruinedDef !== abilityHolder)
        return;
      this.debug("Sword of Ruin Def drop");
      return this.chainModify(0.75);
    },
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    },
    flags: {},
    name: "Sword of Rejuvenation"
  },
  bestboost: {
    shortDesc: "This Pokemon's highest stat can't be lowered.",
    //and raises 1 stage after KOing a foe.",
    onStart(pokemon) {
      this.effectState.bestStat = pokemon.getBestStat(true, true);
    },
    /*onSourceAfterFaint(length, target, source, effect) {
    	if (effect && effect.effectType === 'Move') {
    		this.boost({[this.effectState.bestStat]: length}, source);
    	}
    },*/
    onTryBoost(boost, target2, source2, effect) {
      var _a;
      if (source2 && target2 === source2)
        return;
      const bestStat = (_a = this.effectState).bestStat || (_a.bestStat = target2.getBestStat(true, true));
      if (boost[bestStat] && boost[bestStat] < 0) {
        delete boost[bestStat];
        if (!effect.secondaries) {
          this.add("-fail", target2, "unboost", bestStat, "[from] ability: Best Boost", "[of] " + target2);
        }
      }
    },
    flags: { breakable: 1 },
    name: "Best Boost",
    rating: 3.5
  },
  rogue: {
    shortDesc: "Competitive + Overcoat",
    onAfterEachBoost(boost, target2, source2, effect) {
      if (!source2 || target2.isAlly(source2))
        return;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          this.boost({ spa: 2 }, target2, target2, null, false, true);
          return;
        }
      }
    },
    onImmunity(type, pokemon) {
      if ([
        "sandstorm",
        /*'hail',*/
        "powder"
      ].includes(type))
        return false;
    },
    onTryHitPriority: 1,
    onTryHit(target2, source2, move) {
      if (move.flags["powder"] && target2 !== source2 && this.dex.getImmunity("powder", target2)) {
        this.add("-immune", target2, "[from] ability: Rogue");
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Rogue"
  },
  unidentifiedflyingobject: {
    //airborneness in scripts.ts#pokemon
    shortDesc: "Levitate effects. If this Pokemon would be hit by a Ground move, the attacker becomes confused.",
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && move.type === "Ground" && !source2.volatiles["confusion"] && !(move.ignoreImmunity && (move.ignoreImmunity === true || move.ignoreImmunity["Ground"])) && target2.isGrounded() === null) {
        source2.addVolatile("confusion", target2);
        this.add("-immune", target2);
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Unidentified Flying Object"
  },
  /*roughimage: {
  	shortDesc: "Illusion effects. When the illusion is broken, deals 1/8 max HP to the attacker.",
  	onBeforeSwitchIn(pokemon) {
  		pokemon.illusion = null;
  		// yes, you can Illusion an active pokemon but only if it's to your right
  		for (let i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
  			const possibleTarget = pokemon.side.pokemon[i];
  			if (!possibleTarget.fainted) {
  				// If Ogerpon is in the last slot while the Illusion Pokemon is Terastallized
  				// Illusion will not disguise as anything
  				if (!pokemon.terastallized || possibleTarget.species.baseSpecies !== 'Hattepon') {
  					pokemon.illusion = possibleTarget;
  				}
  				break;
  			}
  		}
  	},
  	onDamagingHit(damage, target, source, move) {
  		if (target.illusion) {
  			this.singleEvent('End', this.dex.abilities.get('Rough Image'), target.abilityState, target, source, move);
  			this.damage(source.baseMaxhp / 8, source, target);
  		}
  	},
  	onEnd(pokemon) {
  		if (pokemon.illusion) {
  			this.debug('illusion cleared');
  			pokemon.illusion = null;
  			const details = pokemon.species.name + (pokemon.level === 100 ? '' : ', L' + pokemon.level) +
  				(pokemon.gender && (', ' + pokemon.gender)) + (pokemon.set.shiny ? ', shiny' : '');
  			this.add('replace', pokemon, details);
  			this.add('-message', `${pokemon.name}'s illusion wore off!`);
  			if (this.ruleTable.has('illusionlevelmod')) {
  				this.hint("Illusion Level Mod is active, so this Pok\u00e9mon's true level was hidden.", true);
  			}
  		}
  	},
  	onFaint(pokemon) {
  		pokemon.illusion = null;
  	},
  	flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1},
  	name: "Rough Image",
  },*/
  afterimage: {
    shortDesc: "Illusion effects. When the illusion is broken, +1 Speed.",
    onBeforeSwitchIn(pokemon) {
      pokemon.illusion = null;
      for (let i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
        const possibleTarget = pokemon.side.pokemon[i];
        if (!possibleTarget.fainted) {
          if (!pokemon.terastallized || possibleTarget.species.baseSpecies !== "Hattepon") {
            pokemon.illusion = possibleTarget;
          }
          break;
        }
      }
    },
    onDamagingHit(damage, target2, source2, move) {
      if (target2.illusion) {
        this.singleEvent("End", this.dex.abilities.get("Afterimage"), target2.abilityState, target2, source2, move);
        this.boost({ spe: 1 });
      }
    },
    onEnd(pokemon) {
      if (pokemon.illusion) {
        this.debug("illusion cleared");
        pokemon.illusion = null;
        const details = pokemon.species.name + (pokemon.level === 100 ? "" : ", L" + pokemon.level) + (pokemon.gender && ", " + pokemon.gender) + (pokemon.set.shiny ? ", shiny" : "");
        this.add("replace", pokemon, details);
        this.add("-message", `${pokemon.name}'s illusion wore off!`);
        if (this.ruleTable.has("illusionlevelmod")) {
          this.hint("Illusion Level Mod is active, so this Pok\xE9mon's true level was hidden.", true);
        }
      }
    },
    onFaint(pokemon) {
      pokemon.illusion = null;
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1 },
    name: "Afterimage"
  },
  /*riotpayload: {
  	shortDesc: "Rocky Payload + Defiant",
  	onAfterEachBoost(boost, target, source, effect) {
  		if (!source || target.isAlly(source)) return;
  		let i: BoostID;
  		for (i in boost) {
  			if (boost[i]! < 0) {
  				this.boost({atk: 2}, target, target, null, false, true);
  				return;
  			}
  		}
  	},
  	onModifyAtkPriority: 5,
  	onModifyAtk(atk, attacker, defender, move) {
  		if (move.type === 'Rock') {
  			this.debug('Riot Payload boost');
  			return this.chainModify(1.5);
  		}
  	},
  	onModifySpAPriority: 5,
  	onModifySpA(atk, attacker, defender, move) {
  		if (move.type === 'Rock') {
  			this.debug('Riot Payload boost');
  			return this.chainModify(1.5);
  		}
  	},
  	flags: {},
  	name: "Riot Payload",
  },*/
  prankrock: {
    shortDesc: "Rocky Payload + Prankster",
    onModifyPriority(priority, pokemon, target2, move) {
      if (move?.category === "Status") {
        move.pranksterBoosted = true;
        return priority + 1;
      }
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Rock") {
        this.debug("Riot Payload boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Rock") {
        this.debug("Riot Payload boost");
        return this.chainModify(1.5);
      }
    },
    flags: {},
    name: "Prank Rock"
  },
  toxicattitude: {
    shortDesc: "Intimidate + Poison Point",
    onStart(pokemon) {
      let activated = false;
      for (const target2 of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Toxic Attitude", "boost");
          activated = true;
        }
        if (target2.volatiles["substitute"]) {
          this.add("-immune", target2);
        } else {
          this.boost({ atk: -1 }, target2, pokemon, null, true);
        }
      }
    },
    onDamagingHit(damage, target2, source2, move) {
      if (this.checkMoveMakesContact(move, source2, target2) && this.randomChance(3, 10)) {
        source2.trySetStatus("psn", target2);
      }
    },
    flags: {},
    name: "Toxic Attitude"
  },
  carelessbugs: {
    shortDesc: "Reckless effects; x1.5 instead at 1/3 HP or less",
    onBasePowerPriority: 23,
    onBasePower(basePower, attacker, defender, move) {
      if (move.recoil || move.hasCrashDamage) {
        this.debug("Reckless boost");
        return this.chainModify([attacker.hp <= attacker.maxhp / 3 ? 6144 : 4915, 4096]);
      }
    },
    flags: {},
    name: "Careless Bugs"
  },
  quickwit: {
    shortDesc: "Speed Boost + Keen Eye",
    onResidualOrder: 28,
    onResidualSubOrder: 2,
    onResidual(pokemon) {
      if (pokemon.activeTurns) {
        this.boost({ spe: 1 });
      }
    },
    onTryBoost(boost, target2, source2, effect) {
      if (source2 && target2 === source2)
        return;
      if (boost.accuracy && boost.accuracy < 0) {
        delete boost.accuracy;
        if (!effect.secondaries) {
          this.add("-fail", target2, "unboost", "accuracy", "[from] ability: Quick Wit", "[of] " + target2);
        }
      }
    },
    onModifyMove(move) {
      move.ignoreEvasion = true;
    },
    flags: { breakable: 1 },
    name: "Quick Wit"
  },
  stonesofruin: {
    shortDesc: "Pokemon without this ability have x0.75 Attack and deal x0.75 with super-effective hits.",
    onStart(pokemon) {
      if (this.suppressingAbility(pokemon))
        return;
      this.add("-ability", pokemon, "Stones of Ruin");
      this.add("-message", `${pokemon.name}'s Stones of Ruin weakened the Attack of all surrounding Pok\xE9mon and the power of their super-effective moves!`);
    },
    onAnyModifyAtk(atk, source2, target2, move) {
      const abilityHolder = this.effectState.target;
      if (source2.hasAbility(["Tablets of Ruin", "Stones of Ruin"]))
        return;
      if (!move.ruinedAtk)
        move.ruinedAtk = abilityHolder;
      else if (move.ruinedAtk !== abilityHolder)
        return;
      this.debug("Tablets of Ruin Atk drop");
      return this.chainModify(0.75);
    },
    onAnyModifyDamage(damage, source2, target2, move) {
      const abilityHolder = this.effectState.target;
      if (source2.hasAbility("Stones of Ruin") || target2.getMoveHitData(move).typeMod <= 0)
        return;
      if (!move.ruinedAtk)
        move.ruinedAtk = abilityHolder;
      else if (move.ruinedAtk !== abilityHolder)
        return;
      this.debug("Stones of Ruin neutralize");
      return this.chainModify(0.75);
    },
    flags: {},
    name: "Stones of Ruin"
  },
  unstoppable: {
    shortDesc: "Adaptability + Aroma Veil",
    onModifySTAB(stab, source2, target2, move) {
      if (move.forceSTAB || source2.hasType(move.type)) {
        return stab === 2 ? 2.25 : 2;
      }
    },
    onAllyTryAddVolatile(status, target2, source2, effect) {
      if (["attract", "disable", "encore", "healblock", "taunt", "torment"].includes(status.id)) {
        if (effect.effectType === "Move") {
          const effectHolder = this.effectState.target;
          this.add("-block", target2, "ability: Unstoppable", "[of] " + effectHolder);
          this.add("-message", `${target2.name} is unstoppable!`);
        }
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Unstoppable"
  },
  saltedlobster: {
    shortDesc: "Adaptability + x0.5 damage from STAB; Status immunity",
    onModifySTAB(stab, source2, target2, move) {
      if (move.forceSTAB || source2.hasType(move.type)) {
        return stab === 2 ? 2.25 : 2;
      }
    },
    onSetStatus(status, target2, source2, effect) {
      if (effect?.status) {
        this.add("-immune", target2, "[from] ability: Salted Lobster");
      }
      return false;
    },
    onTryAddVolatile(status, target2) {
      if (status.id === "yawn") {
        this.add("-immune", target2, "[from] ability: Salted Lobster");
        return null;
      }
    },
    onSourceModifyAtkPriority: 6,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (attacker.hasType(move.type)) {
        this.debug("Purifying Salt weaken");
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(spa, attacker, defender, move) {
      if (attacker.hasType(move.type)) {
        this.debug("Purifying Salt weaken");
        return this.chainModify(0.5);
      }
    },
    flags: { breakable: 1 },
    name: "Salted Lobster"
  },
  miasma: {
    shortDesc: "Misty Surge + Can poison others even in Misty Terrain",
    onStart(source2) {
      this.field.setTerrain("mistyterrain");
    },
    //Poison bypassing this is implemented under Misty Terrain in moves.ts
    flags: {},
    name: "Miasma"
  },
  serenesync: {
    shortDesc: "Secondaries against this Pokemon also proc against the attacker",
    onModifySecondaries(secondaries) {
      for (const secondary of secondaries) {
        secondary.self || (secondary.self = {});
        for (const i in secondary) {
          if (!["self", "chance"].includes(i))
            secondary.self[i] = secondary[i];
        }
      }
    },
    flags: { breakable: 1 },
    name: "Serene Sync"
  },
  weatheredwaves: {
    shortDesc: "Torrent + Sturdy",
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Water" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Weathered Waves boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Water" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Weathered Waves boost");
        return this.chainModify(1.5);
      }
    },
    onTryHit(pokemon, target2, move) {
      if (move.ohko) {
        this.add("-immune", pokemon, "[from] ability: Weathered Waves");
        return null;
      }
    },
    onDamagePriority: -30,
    onDamage(damage, target2, source2, effect) {
      if (target2.hp === target2.maxhp && damage >= target2.hp && effect && effect.effectType === "Move") {
        this.add("-ability", target2, "Weathered Waves");
        return target2.hp - 1;
      }
    },
    flags: { breakable: 1 },
    name: "Weathered Waves"
  },
  sandsword: {
    shortDesc: "x1.25 power to Slicing moves; x1.5 instead in Sand",
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["slicing"]) {
        this.debug("Sharpness boost");
        return this.chainModify(this.field.isWeather("sandstorm") ? 1.5 : 1.25);
      }
    },
    onImmunity(type, pokemon) {
      if (type === "sandstorm")
        return false;
    },
    flags: { breakable: 1 },
    name: "Sand Sword"
  },
  shellfishing: {
    shortDesc: "Torrent + Pickup",
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Water" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Shell Fishing boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Water" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Shell Fishing boost");
        return this.chainModify(1.5);
      }
    },
    onResidualOrder: 28,
    onResidualSubOrder: 2,
    onResidual(pokemon) {
      if (pokemon.item)
        return;
      const pickupTargets = this.getAllActive().filter((target2) => target2.lastItem && target2.usedItemThisTurn && pokemon.isAdjacent(target2));
      if (!pickupTargets.length)
        return;
      const randomTarget = this.sample(pickupTargets);
      const item = randomTarget.lastItem;
      randomTarget.lastItem = "";
      this.add("-item", pokemon, this.dex.items.get(item), "[from] ability: Shell Fishing");
      pokemon.setItem(item);
    },
    flags: {},
    name: "Shell Fishing"
  },
  electricfence: {
    shortDesc: "Attackers using contact or Electric attacks lose 1/8 max HP.",
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target2, source2, move) {
      if (move && (move.type === "Electric" || this.checkMoveMakesContact(move, source2, target2, true))) {
        this.damage(source2.baseMaxhp / 8, source2, target2);
      }
    },
    flags: {},
    name: "Electric Fence"
  },
  sturdyshock: {
    shortDesc: "Volt Absorb + Sturdy",
    onTryHit(pokemon, target2, move) {
      if (move.ohko) {
        this.add("-immune", pokemon, "[from] ability: Sturdy Shock");
        return null;
      }
    },
    onDamagePriority: -30,
    onDamage(damage, target2, source2, effect) {
      if (target2.hp === target2.maxhp && damage >= target2.hp && effect && effect.effectType === "Move") {
        this.add("-ability", target2, "Sturdy Shock");
        return target2.hp - 1;
      }
    },
    flags: { breakable: 1 },
    name: "Sturdy Shock"
  },
  moltenglue: {
    shortDesc: "Sticky Hold + Flame Body",
    onTakeItem(item, pokemon, source2) {
      if (!this.activeMove)
        throw new Error("Battle.activeMove is null");
      if (!pokemon.hp || pokemon.item === "stickybarb" || this.activeMove.ignoreAbility)
        return;
      if (source2 && source2 !== pokemon || this.activeMove.id === "knockoff") {
        this.add("-activate", pokemon, "ability: Molten Glue");
        return false;
      }
    },
    onDamagingHit(damage, target2, source2, move) {
      if (this.checkMoveMakesContact(move, source2, target2) && this.randomChance(3, 10)) {
        source2.trySetStatus("brn", target2);
      }
    },
    flags: {},
    name: "Molten Glue"
  },
  bullettime: {
    name: "Bullet Time",
    shortDesc: "Own Tempo + Bulletproof",
    onUpdate(pokemon) {
      if (pokemon.volatiles["confusion"]) {
        this.add("-activate", pokemon, "ability: Bullet Time");
        pokemon.removeVolatile("confusion");
      }
    },
    onTryAddVolatile(status, pokemon) {
      if (status.id === "confusion")
        return null;
    },
    onHit(target2, source2, move) {
      if (move?.volatileStatus === "confusion") {
        this.add("-immune", target2, "confusion", "[from] ability: Bullet Time");
      }
    },
    onTryHit(pokemon, target2, move) {
      if (move.flags["bullet"]) {
        this.add("-immune", pokemon, "[from] ability: Bullet Time");
        return null;
      }
    },
    onTryBoost(boost, target2, source2, effect) {
      if (["Intimidate", "Mad Cow", "Forest Fury", "Shock Factor", "Daunting Storm", "Toxic Attitude"].includes(effect.name)) {
        if (boost.atk) {
          delete boost.atk;
          this.add("-fail", target2, "unboost", "Attack", "[from] ability: Bullet Time", "[of] " + target2);
        }
      } else if (effect.name === "Fishy Threat" && boost.spe) {
        delete boost.spe;
        this.add("-fail", target2, "unboost", "Speed", "[from] ability: Bullet Time", "[of] " + target2);
      }
    },
    flags: { breakable: 1 }
  },
  badapple: {
    name: "Bad Apple",
    shortDesc: "Own Tempo + Thick Fat",
    onUpdate(pokemon) {
      if (pokemon.volatiles["confusion"]) {
        this.add("-activate", pokemon, "ability: Bad Apple");
        pokemon.removeVolatile("confusion");
      }
    },
    onTryAddVolatile(status, pokemon) {
      if (status.id === "confusion")
        return null;
    },
    onHit(target2, source2, move) {
      if (move?.volatileStatus === "confusion") {
        this.add("-immune", target2, "confusion", "[from] ability: Bad Apple");
      }
    },
    onSourceModifyAtkPriority: 6,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Ice" || move.type === "Fire") {
        this.debug("Thick Fat weaken");
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Ice" || move.type === "Fire") {
        this.debug("Thick Fat weaken");
        return this.chainModify(0.5);
      }
    },
    onTryBoost(boost, target2, source2, effect) {
      if (["Intimidate", "Mad Cow", "Forest Fury", "Shock Factor", "Daunting Storm", "Toxic Attitude"].includes(effect.name)) {
        if (boost.atk) {
          delete boost.atk;
          this.add("-fail", target2, "unboost", "Attack", "[from] ability: Bad Apple", "[of] " + target2);
        }
      } else if (effect.name === "Fishy Threat" && boost.spe) {
        delete boost.spe;
        this.add("-fail", target2, "unboost", "Speed", "[from] ability: Bad Apple", "[of] " + target2);
      }
    },
    flags: { breakable: 1 }
  },
  healthydiet: {
    name: "Healthy Diet",
    shortDesc: "Heals by 33.3% of Max HP on switch-out or when eating a berry.",
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    },
    onEatItem(item, pokemon) {
      this.heal(pokemon.baseMaxhp / 3);
    },
    flags: {}
  },
  sandworm: {
    name: "Sandworm",
    shortDesc: "33% chance to cure status at end of turn, 100% instead in Sandstorm",
    onResidualOrder: 5,
    onResidualSubOrder: 3,
    onResidual(pokemon) {
      if (pokemon.hp && pokemon.status && (this.field.isWeather("sandstorm") || this.randomChance(33, 100))) {
        this.debug("shed skin");
        this.add("-activate", pokemon, "ability: Sandworm");
        pokemon.cureStatus();
      }
    },
    flags: {}
  },
  anointed: {
    name: "Anointed",
    shortDesc: "Telepathy + Levitate",
    onTryHit(target2, source2, move) {
      if (target2 !== source2 && target2.isAlly(source2) && move.category !== "Status") {
        this.add("-activate", target2, "ability: Anointed");
        return null;
      }
    },
    flags: { breakable: 1 }
  },
  hopestar: {
    name: "Hope Star",
    shortDesc: "Regenerator + Victory Star",
    onAnyModifyAccuracyPriority: -1,
    onAnyModifyAccuracy(accuracy, target2, source2) {
      if (source2.isAlly(this.effectState.target) && typeof accuracy === "number") {
        return this.chainModify([4506, 4096]);
      }
    },
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    },
    flags: {}
  },
  frisktaker: {
    name: "Frisk Taker",
    shortDesc: "Frisk + Mold Breaker",
    onStart(pokemon) {
      this.add("-ability", pokemon, "Frisk Taker");
      for (const target2 of pokemon.foes()) {
        if (target2.item) {
          this.add("-item", target2, target2.getItem().name, "[from] ability: Frisk Taker", "[of] " + pokemon);
        }
      }
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    },
    flags: {}
  },
  hotpockets: {
    name: "Hot Pockets",
    shortDesc: "Blaze + Pickpocket. Incoming Fire moves activate Pickpocket.",
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Fire" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Blaze boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Fire" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Blaze boost");
        return this.chainModify(1.5);
      }
    },
    onAfterMoveSecondary(target2, source2, move) {
      if (source2 && source2 !== target2 && move && (move.flags["contact"] || move.type === "Fire")) {
        if (target2.item || target2.switchFlag || target2.forceSwitchFlag || source2.switchFlag === true) {
          return;
        }
        const yourItem = source2.takeItem(target2);
        if (!yourItem) {
          return;
        }
        if (!target2.setItem(yourItem)) {
          source2.item = yourItem.id;
          return;
        }
        this.add("-enditem", source2, yourItem, "[silent]", "[from] ability: Hot Pockets", "[of] " + source2);
        this.add("-item", target2, yourItem, "[from] ability: Hot Pockets", "[of] " + source2);
      }
    },
    flags: {}
  },
  myceliumwaste: {
    name: "Mycelium Waste",
    shortDesc: "Physical and Status moves go last in their priority bracket.",
    onFractionalPriorityPriority: -1,
    onFractionalPriority(priority, pokemon, target2, move) {
      if (move.category !== "Special") {
        return -0.1;
      }
    },
    flags: {}
  },
  delayedreaction: {
    name: "Delayed Reaction",
    shortDesc: "Status moves go last, but ignore types and abilities.",
    onFractionalPriorityPriority: -1,
    onFractionalPriority(priority, pokemon, target2, move) {
      if (move.category === "Status") {
        return -0.1;
      }
    },
    onModifyMove(move) {
      if (move.category === "Status") {
        move.ignoreAbility = true;
        move.ignoreImmunity = true;
      }
    },
    flags: {}
  },
  aquackintime: {
    shortDesc: "Defiant + Pressure",
    onStart(pokemon) {
      this.add("-ability", pokemon, "A Quack in Time");
    },
    onDeductPP(target2, source2) {
      if (!target2.isAlly(source2))
        return 1;
    },
    onAfterEachBoost(boost, target2, source2, effect) {
      if (!source2 || target2.isAlly(source2))
        return;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          this.boost({ atk: 2 }, target2, target2, null, false, true);
          return;
        }
      }
    },
    flags: {},
    name: "A Quack in Time"
  },
  magicmirror: {
    shortDesc: "Effects of Mirror Armor and Magic Bounce.",
    onTryHitPriority: 1,
    onTryHit(target2, source2, move) {
      if (target2 === source2 || move.hasBounced || !move.flags["reflectable"]) {
        return;
      }
      const newMove = this.dex.getActiveMove(move.id);
      newMove.hasBounced = true;
      newMove.pranksterBoosted = false;
      this.actions.useMove(newMove, target2, source2);
      return null;
    },
    onAllyTryHitSide(target2, source2, move) {
      if (target2.isAlly(source2) || move.hasBounced || !move.flags["reflectable"]) {
        return;
      }
      const newMove = this.dex.getActiveMove(move.id);
      newMove.hasBounced = true;
      newMove.pranksterBoosted = false;
      this.actions.useMove(newMove, this.effectState.target, source2);
      return null;
    },
    onTryBoost(boost, target2, source2, effect) {
      if (!source2 || target2 === source2 || !boost || ["Mirror Armor", "Magic Mirror"].includes(effect.name))
        return;
      let b;
      for (b in boost) {
        if (boost[b] < 0 && target2.boosts[b] > -6) {
          const negativeBoost = {};
          negativeBoost[b] = boost[b];
          delete boost[b];
          if (source2.hp) {
            this.add("-ability", target2, "Magic Mirror");
            this.boost(negativeBoost, source2, target2, null, true);
          }
        }
      }
    },
    flags: { breakable: 1 },
    name: "Magic Mirror"
  },
  //Vanilla abilities
  //Extending Inner Focus's Intimidate immunity to derivatives
  innerfocus: {
    inherit: true,
    onTryBoost(boost, target2, source2, effect) {
      if (["Intimidate", "Mad Cow", "Forest Fury", "Shock Factor", "Daunting Storm", "Toxic Attitude"].includes(effect.name)) {
        if (boost.atk) {
          delete boost.atk;
          this.add("-fail", target2, "unboost", "Attack", "[from] ability: Inner Focus", "[of] " + target2);
        }
      } else if (effect.name === "Fishy Threat" && boost.spe) {
        delete boost.spe;
        this.add("-fail", target2, "unboost", "Speed", "[from] ability: Inner Focus", "[of] " + target2);
      }
    }
  },
  embodyaspectcornerstone: {
    inherit: true,
    onStart(pokemon) {
      if (pokemon.baseSpecies.name === "Hattepon-Cornerstone-Tera" && !this.effectState.embodied) {
        this.effectState.embodied = true;
        this.boost({ def: 1 }, pokemon);
      }
    }
  },
  embodyaspecthearthflame: {
    inherit: true,
    onStart(pokemon) {
      if (pokemon.baseSpecies.name === "Hattepon-Hearthflame-Tera" && !this.effectState.embodied) {
        this.effectState.embodied = true;
        this.boost({ atk: 1 }, pokemon);
      }
    }
  },
  embodyaspectteal: {
    inherit: true,
    onStart(pokemon) {
      if (pokemon.baseSpecies.name === "Hattepon-Teal-Tera" && !this.effectState.embodied) {
        this.effectState.embodied = true;
        this.boost({ spe: 1 }, pokemon);
      }
    }
  },
  embodyaspectwellspring: {
    inherit: true,
    onStart(pokemon) {
      if (pokemon.baseSpecies.name === "Hattepon-Wellspring-Tera" && !this.effectState.embodied) {
        this.effectState.embodied = true;
        this.boost({ spd: 1 }, pokemon);
      }
    }
  },
  naturalcure: {
    onCheckShow(pokemon) {
      if (pokemon.side.active.length === 1 || pokemon.showCure === true || pokemon.showCure === false)
        return;
      const cureList = [];
      let noCureCount = 0;
      for (const curPoke of pokemon.side.active) {
        if (!curPoke || !curPoke.status) {
          continue;
        }
        if (curPoke.showCure) {
          continue;
        }
        const species = curPoke.species;
        if (!Object.values(species.abilities).includes("Natural Cure") && !Object.values(species.abilities).includes("Natural Pressures") && !Object.values(species.abilities).includes("Rejuvenate")) {
          continue;
        }
        if (!species.abilities["1"] && !species.abilities["H"]) {
          continue;
        }
        if (curPoke !== pokemon && !this.queue.willSwitch(curPoke)) {
          continue;
        }
        if (curPoke.hasAbility(["naturalcure", "rejuvenate", "naturalpressures"])) {
          cureList.push(curPoke);
        } else {
          noCureCount++;
        }
      }
      if (!cureList.length || !noCureCount) {
        for (const pkmn of cureList) {
          pkmn.showCure = true;
        }
      } else {
        this.add("-message", "(" + cureList.length + " of " + pokemon.side.name + "'s pokemon " + (cureList.length === 1 ? "was" : "were") + " cured by Natural Cure.)");
        for (const pkmn of cureList) {
          pkmn.showCure = false;
        }
      }
    },
    inherit: true
  },
  neutralizinggas: {
    inherit: true,
    // Ability suppression implemented in sim/pokemon.ts:Pokemon#ignoringAbility
    onPreStart(pokemon) {
      this.add("-ability", pokemon, "Neutralizing Gas");
      pokemon.abilityState.ending = false;
      const strongWeathers = ["desolateland", "primordialsea", "deltastream"];
      for (const target2 of this.getAllActive()) {
        if (target2.hasItem("Ability Shield")) {
          this.add("-block", target2, "item: Ability Shield");
          continue;
        }
        if (target2.volatiles["commanding"]) {
          continue;
        }
        if (target2.illusion) {
          this.singleEvent("End", this.dex.abilities.get("Rough Image"), target2.abilityState, target2, pokemon, "neutralizinggas");
        }
        if (target2.volatiles["slowstart"]) {
          delete target2.volatiles["slowstart"];
          this.add("-end", target2, "Slow Start", "[silent]");
        }
        const targetAbilID = target2.getAbility().id;
        if (["eczema", "prehistoricpresence"].includes(targetAbilID)) {
          target2.removeVolatile("ability:unaware");
        } else if (strongWeathers.includes(targetAbilID)) {
          this.singleEvent("End", this.dex.abilities.get(target2.getAbility().id), target2.abilityState, target2, pokemon, "neutralizinggas");
        }
      }
    }
  },
  //Mainly did this so we could try to see if Quark Drive would work
  protosynthesis: {
    inherit: true,
    condition: {
      noCopy: true,
      onStart(pokemon, source2, effect) {
        if (effect?.name === "Booster Energy") {
          this.effectState.fromBooster = true;
          this.add("-activate", pokemon, "ability: " + pokemon.getAbility().name, "[fromitem]");
        } else {
          this.add("-activate", pokemon, "ability: " + pokemon.getAbility().name);
        }
        this.effectState.bestStat = pokemon.getBestStat(false, true);
        this.add("-start", pokemon, "protosynthesis" + this.effectState.bestStat);
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, pokemon) {
        if (this.effectState.bestStat !== "atk" || pokemon.ignoringAbility())
          return;
        this.debug("Protosynthesis atk boost");
        return this.chainModify([5325, 4096]);
      },
      onModifyDefPriority: 6,
      onModifyDef(def, pokemon) {
        if (this.effectState.bestStat !== "def" || pokemon.ignoringAbility())
          return;
        this.debug("Protosynthesis def boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpAPriority: 5,
      onModifySpA(spa, pokemon) {
        if (this.effectState.bestStat !== "spa" || pokemon.ignoringAbility())
          return;
        this.debug("Protosynthesis spa boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpDPriority: 6,
      onModifySpD(spd, pokemon) {
        if (this.effectState.bestStat !== "spd" || pokemon.ignoringAbility())
          return;
        this.debug("Protosynthesis spd boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpe(spe, pokemon) {
        if (this.effectState.bestStat !== "spe" || pokemon.ignoringAbility())
          return;
        for (const target2 of pokemon.foes()) {
          if (target2.hasAbility("dyschronometria")) {
            this.debug("Dyschronometria negating spe boost");
            return;
          }
        }
        this.debug("Protosynthesis spe boost");
        return this.chainModify(1.5);
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Protosynthesis");
      }
    },
    name: "Protosynthesis"
  },
  quarkdrive: {
    inherit: true,
    condition: {
      noCopy: true,
      onStart(pokemon, source2, effect) {
        if (effect?.name === "Booster Energy") {
          this.effectState.fromBooster = true;
          this.add("-activate", pokemon, "ability: " + pokemon.getAbility().name, "[fromitem]");
        } else {
          this.add("-activate", pokemon, "ability: " + pokemon.getAbility().name);
        }
        this.effectState.bestStat = pokemon.getBestStat(false, true);
        this.add("-start", pokemon, "quarkdrive" + this.effectState.bestStat);
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, pokemon) {
        if (this.effectState.bestStat !== "atk" || pokemon.ignoringAbility())
          return;
        this.debug("Quark Drive atk boost");
        return this.chainModify([5325, 4096]);
      },
      onModifyDefPriority: 6,
      onModifyDef(def, pokemon) {
        if (this.effectState.bestStat !== "def" || pokemon.ignoringAbility())
          return;
        this.debug("Quark Drive def boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpAPriority: 5,
      onModifySpA(spa, pokemon) {
        if (this.effectState.bestStat !== "spa" || pokemon.ignoringAbility())
          return;
        this.debug("Quark Drive spa boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpDPriority: 6,
      onModifySpD(spd, pokemon) {
        if (this.effectState.bestStat !== "spd" || pokemon.ignoringAbility())
          return;
        this.debug("Quark Drive spd boost");
        return this.chainModify([5325, 4096]);
      },
      onModifySpe(spe, pokemon) {
        if (this.effectState.bestStat !== "spe" || pokemon.ignoringAbility())
          return;
        for (const target2 of pokemon.foes()) {
          if (target2.hasAbility("dyschronometria")) {
            this.debug("Dyschronometria negating spe boost");
            return;
          }
        }
        this.debug("Quark Drive spe boost");
        return this.chainModify(1.5);
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Quark Drive");
      }
    }
  }
};
//# sourceMappingURL=abilities.js.map
