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
const Abilities = {
  // Set 1
  porous: {
    // Feel like this might be wrong
    id: "porous",
    name: "Porous",
    shortDesc: "Ignores foe's stat stages; restores 1/4 max HP if hit by Water; Water immunity.",
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Water") {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Porous");
        }
        return null;
      }
    },
    onAnyModifyBoost(boosts, pokemon) {
      const unawareUser = this.effectState.target;
      if (unawareUser === pokemon)
        return;
      if (unawareUser === this.activePokemon && pokemon === this.activeTarget) {
        boosts["def"] = 0;
        boosts["spd"] = 0;
        boosts["evasion"] = 0;
      }
      if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
        boosts["atk"] = 0;
        boosts["def"] = 0;
        boosts["spa"] = 0;
        boosts["accuracy"] = 0;
      }
    }
  },
  despicable: {
    id: "despicable",
    name: "Despicable",
    shortDesc: "This Pokemon's attacks are critical hits if the target is burned or poisoned.",
    onModifyCritRatio(critRatio, source, target) {
      let ignore = false;
      if (target.hasAbility("sturdymold")) {
        ignore = true;
        return;
      }
      if (ignore)
        return;
      if (target && ["psn", "tox", "brn"].includes(target.status))
        return 5;
    }
  },
  kingsguard: {
    id: "kingsguard",
    name: "King's Guard",
    shortDesc: "Protected from enemy priority moves and Attack reduction.",
    onBoost(boost, target, source, effect) {
      if (source && target === source)
        return;
      if (boost.atk && boost.atk < 0) {
        delete boost.atk;
        if (!effect.secondaries) {
          this.add("-fail", target, "unboost", "Attack", "[from] ability: King's Guard", "[of] " + target);
        }
      }
    },
    onFoeTryMove(target, source, move) {
      const targetAllExceptions = ["perishsong", "flowershield", "rototiller"];
      if (move.target === "foeSide" || move.target === "all" && !targetAllExceptions.includes(move.id)) {
        return;
      }
      const dazzlingHolder = this.effectState.target;
      if ((source.side === dazzlingHolder.side || move.target === "all") && move.priority > 0.1) {
        this.attrLastMove("[still]");
        this.add("cant", dazzlingHolder, "ability: King's Guard", move, "[of] " + target);
        return false;
      }
    }
  },
  growthveil: {
    // Too long
    id: "growthveil",
    name: "Growth Veil",
    shortDesc: "Restores 1/3 max HP on switch-out; ally Grass-types safe from enemy stat drops & status.",
    desc: "Restores 1/3 max HP on switch-out; ally Grass-types can't have stats lowered or status inflicted.",
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    },
    onAllyBoost(boost, target, source, effect) {
      if (source && target === source || !target.hasType("Grass"))
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
        this.add("-block", target, "ability: Growth Veil", "[of] " + effectHolder);
      }
    },
    onAllySetStatus(status, target, source, effect) {
      if (target.hasType("Grass") && source && target !== source && effect && effect.id !== "yawn") {
        this.debug("interrupting setStatus with Growth Veil");
        if (effect.id === "synchronize" || effect.effectType === "Move" && !effect.secondaries) {
          const effectHolder = this.effectState.target;
          this.add("-block", target, "ability: Growth Veil", "[of] " + effectHolder);
        }
        return null;
      }
    },
    onAllyTryAddVolatile(status, target) {
      if (target.hasType("Grass") && status.id === "yawn") {
        this.debug("Growth Veil blocking yawn");
        const effectHolder = this.effectState.target;
        this.add("-block", target, "ability: Growth Veil", "[of] " + effectHolder);
        return null;
      }
    }
  },
  surgeoneye: {
    id: "surgeoneye",
    name: "Surgeon Eye",
    shortDesc: "Restores 1/3 max HP on switch-out. Attack power 1.3x if it moves last in a turn.",
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, pokemon) {
      let boosted = true;
      for (const target of this.getAllActive()) {
        if (target === pokemon)
          continue;
        if (this.queue.willMove(target)) {
          boosted = false;
          break;
        }
      }
      if (boosted) {
        this.debug("Surgeon Eye boost");
        return this.chainModify([5325, 4096]);
      }
    }
  },
  // Set 2
  roughresult: {
    // Too long
    id: "roughresult",
    name: "Rough Result",
    shortDesc: "Foes making contact lose 1/8 max HP; if KOed by contact, attacker loses 1/4 max HP.",
    dsc: "Pokemon making contact lose 1/8 max HP; if KOed by a contact move, attacker loses 1/4 max HP.",
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        this.damage(source.baseMaxhp / 8, source, target);
      }
      if (move.flags["contact"] && !target.hp) {
        this.damage(source.baseMaxhp / 4, source, target);
      }
    }
  },
  eyeforaneye: {
    id: "eyeforaneye",
    name: "Eye for an Eye",
    shortDesc: "This Pokemon blocks Dark-type moves and bounces them back to the user.",
    onTryHitPriority: 1,
    onTryHit(target, source, move) {
      if (target === source || move.hasBounced || move.type !== "Dark") {
        return;
      }
      const newMove = this.dex.getActiveMove(move.id);
      newMove.hasBounced = true;
      newMove.pranksterBoosted = false;
      this.useMove(newMove, target, source);
      return null;
    },
    onAllyTryHitSide(target, source, move) {
      if (target.side === source.side || move.hasBounced || move.type !== "Dark") {
        return;
      }
      const newMove = this.dex.getActiveMove(move.id);
      newMove.hasBounced = true;
      newMove.pranksterBoosted = false;
      this.useMove(newMove, this.effectState.target, source);
      return null;
    },
    condition: {
      duration: 1
    }
  },
  naturalheal: {
    id: "naturalheal",
    name: "Natural Heal",
    shortDesc: "Restores 1/3 max HP and cures non-volatile status on switch-out.",
    onCheckShow(pokemon) {
      if (pokemon.side.active.length === 1)
        return;
      if (pokemon.showCure === true || pokemon.showCure === false)
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
        if (!Object.values(species.abilities).includes("Natural Cure") && !Object.values(species.abilities).includes("Natural Heal")) {
          continue;
        }
        if (!species.abilities["1"] && !species.abilities["H"]) {
          continue;
        }
        if (curPoke !== pokemon && !this.queue.willSwitch(curPoke)) {
          continue;
        }
        if (curPoke.hasAbility("naturalcure") || curPoke.hasAbility("naturalheal")) {
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
        this.add("-message", "(" + cureList.length + " of " + pokemon.side.name + "'s pokemon " + (cureList.length === 1 ? "was" : "were") + " cured by Natural Heal.)");
        for (const pkmn of cureList) {
          pkmn.showCure = false;
        }
      }
    },
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
      if (!pokemon.status)
        return;
      if (pokemon.showCure === void 0)
        pokemon.showCure = true;
      if (pokemon.showCure)
        this.add("-curestatus", pokemon, pokemon.status, "[from] ability: Natural Heal");
      pokemon.setStatus("");
      if (!pokemon.showCure)
        pokemon.showCure = void 0;
    }
  },
  overseeingmonarch: {
    name: "Overseeing Monarch",
    desc: "On switch-in, identifies foes' items; on switch-out, restores 1/3 max HP.",
    onStart(pokemon) {
      for (const target of pokemon.side.foe.active) {
        if (!target || target.fainted)
          continue;
        if (target.item) {
          this.add("-item", target, target.getItem().name, "[from] ability: Overseeing Monarch", "[of] " + pokemon, "[identify]");
        }
      }
    },
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    }
  },
  porousfat: {
    id: "porousfat",
    name: "Porous Fat",
    shortDesc: "Fire/Ice/Water moves against this Pokemon deal damage with a halved attacking stat.",
    onSourceModifyAtkPriority: 6,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Ice" || move.type === "Fire" || move.type === "Water") {
        this.debug("Porous Fat weaken");
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Ice" || move.type === "Fire" || move.type === "Water") {
        this.debug("Porous Fat weaken");
        return this.chainModify(0.5);
      }
    }
  },
  // set 3
  nullsystem: {
    id: "nullsystem",
    name: "Null System",
    shortDesc: "This Pokemon can be any type (selected in teambuilder)."
  },
  inthicktrator: {
    id: "inthicktrator",
    name: "Inthicktrator",
    shortDesc: "This Pokemon's moves ignore Screens/Substitutes/Abilities.",
    onModifyMove(move, pokemon) {
      let ignore = false;
      for (const target of pokemon.side.foe.active) {
        if (target.hasAbility("sturdymold")) {
          ignore = true;
          console.log("Target has Sturdy Mold");
          return;
        } else {
          console.log("Target does not have Sturdy Mold");
        }
      }
      if ((move.target === "allAdjacentFoes" || move.target === "allAdjacent") && ignore)
        return;
      move.infiltrates = true;
      move.ignoreAbility = true;
    }
  },
  magicsurge: {
    id: "magicsurge",
    name: "Magic Surge",
    shortDesc: "Summons Magic Room for 5 turns when switching in.",
    onStart(source) {
      this.add("-activate", source, "ability: Magic Surge");
      this.field.addPseudoWeather("magicroom");
    }
  },
  multiantlers: {
    id: "multiantlers",
    name: "Multi Antlers",
    shortDesc: "User takes half damage when switching in or at full HP.",
    onSourceModifyDamage(damage, source, target, move) {
      if (!target.activeTurns) {
        this.debug("Multi Antlers weaken");
        return this.chainModify(0.5);
      } else if (target.hp >= target.maxhp) {
        this.debug("Multi Antlers weaken");
        return this.chainModify(0.5);
      }
    }
  },
  concussion: {
    // test
    id: "concussion",
    name: "Concussion",
    shortDesc: "While this Pokemon is active, the opponents' held items have no effect.",
    onStart(source) {
      let activated = false;
      for (const pokemon of source.side.foe.active) {
        if (!activated) {
          this.add("-ability", source, "Concussion");
        }
        activated = true;
        if (!pokemon.volatiles["embargo"]) {
          pokemon.addVolatile("embargo");
        }
      }
    },
    onAnySwitchIn(pokemon) {
      const source = this.effectState.target;
      if (pokemon === source)
        return;
      for (const target of source.side.foe.active) {
        if (!target.volatiles["embargo"]) {
          target.addVolatile("embargo");
        }
      }
    },
    onEnd(pokemon) {
      const source = this.effectState.target;
      for (const target of source.side.foe.active) {
        target.removeVolatile("embargo");
      }
    },
    rating: 4,
    num: 109
  },
  notfunny: {
    id: "notfunny",
    name: "Not Funny",
    shortDesc: "No Guard + Prankster.",
    onModifyPriority(priority, pokemon, target, move) {
      if (move?.category === "Status") {
        if (target && target !== pokemon && target.hasAbility("sturdymold"))
          return;
        move.pranksterBoosted = true;
        return priority + 1;
      }
    },
    onAnyInvulnerabilityPriority: 1,
    onAnyInvulnerability(target, source, move) {
      if (move && (source === this.effectState.target || target === this.effectState.target))
        return 0;
    },
    onAnyAccuracy(accuracy, target, source, move) {
      if (move && (source === this.effectState.target || target === this.effectState.target)) {
        return true;
      }
      return accuracy;
    }
  },
  fowlbehavior: {
    id: "fowlbehavior",
    name: "Fowl Behavior",
    shortDesc: "This Pokemon's Sp. Atk is 1.5x, but it can only select the first move it executes.",
    onStart(pokemon) {
      pokemon.abilityData.choiceLock = "";
    },
    onBeforeMove(pokemon, target, move) {
      if (move.isZOrMaxPowered || move.id === "struggle")
        return;
      if (pokemon.abilityData.choiceLock && pokemon.abilityData.choiceLock !== move.id) {
        this.addMove("move", pokemon, move.name);
        this.attrLastMove("[still]");
        this.debug("Disabled by Fowl Behavior");
        this.add("-fail", pokemon);
        return false;
      }
    },
    onModifyMove(move, pokemon) {
      if (pokemon.abilityData.choiceLock || move.isZOrMaxPowered || move.id === "struggle")
        return;
      pokemon.abilityData.choiceLock = move.id;
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, pokemon, move) {
      if (pokemon.volatiles["dynamax"])
        return;
      let ignore = false;
      for (const target of pokemon.side.foe.active) {
        if (target.hasAbility("sturdymold")) {
          ignore = true;
          return;
        }
      }
      if ((move.target === "allAdjacentFoes" || move.target === "allAdjacent") && ignore)
        return;
      this.debug("Fowl Behavior Sp. Atk Boost");
      return this.chainModify(1.5);
    },
    onDisableMove(pokemon) {
      if (!pokemon.abilityData.choiceLock)
        return;
      if (pokemon.volatiles["dynamax"])
        return;
      for (const moveSlot of pokemon.moveSlots) {
        if (moveSlot.id !== pokemon.abilityData.choiceLock) {
          pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
        }
      }
    },
    onEnd(pokemon) {
      pokemon.abilityData.choiceLock = "";
    }
  },
  pillage: {
    id: "pillage",
    name: "Pillage",
    shortDesc: "On switch-in, swaps ability with the opponent.",
    onSwitchIn(pokemon) {
      this.effectState.switchingIn = true;
    },
    onStart(pokemon) {
      if (pokemon.side.foe.active.some(
        (foeActive) => foeActive && pokemon.isAdjacent(foeActive) && foeActive.ability === "noability"
      ) || pokemon.species.id !== "yaciancrowned" && pokemon.species.id !== "porygrigus" && pokemon.species.id !== "porymask" && pokemon.species.id !== "hatterune" && pokemon.species.id !== "hatamaskgalar") {
        this.effectState.gaveUp = true;
      }
    },
    onUpdate(pokemon) {
      if (!pokemon.isStarted || this.effectState.gaveUp)
        return;
      if (!this.effectState.switchingIn)
        return;
      const possibleTargets = pokemon.side.foe.active.filter((foeActive) => foeActive && pokemon.isAdjacent(foeActive));
      while (possibleTargets.length) {
        let rand = 0;
        if (possibleTargets.length > 1)
          rand = this.random(possibleTargets.length);
        const target = possibleTargets[rand];
        const ability = target.getAbility();
        const additionalBannedAbilities = [
          // Zen Mode included here for compatability with Gen 5-6
          "noability",
          "flowergift",
          "forecast",
          "hungerswitch",
          "illusion",
          "pillage",
          "imposter",
          "neutralizinggas",
          "powerofalchemy",
          "receiver",
          "trace",
          "zenmode",
          "magicmissile",
          "ecopy",
          "lemegeton",
          "modeshift",
          "rebootsystem",
          "concussion"
        ];
        if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) {
          possibleTargets.splice(rand, 1);
          continue;
        }
        target.setAbility("pillage", pokemon);
        pokemon.setAbility(ability);
        this.add("-activate", pokemon, "ability: Pillage");
        this.add("-activate", pokemon, "Skill Swap", "", "", "[of] " + target);
        this.add("-activate", pokemon, "ability: " + ability.name);
        this.add("-activate", target, "ability: Pillage");
        return;
      }
    }
  },
  /*
  	magneticwaves: {
  		id: "magneticwaves",
  		name: "Magnetic Waves",
  		shortDesc: "Normal moves: Electric type, 1.2x power. Immune to Ground moves.",
  		// airborneness implemented in sim/pokemon.js:Pokemon#isGrounded (via scripts.ts in this case)
  		onModifyTypePriority: -1,
  		onModifyType(move, pokemon) {
  			///////////PLACEHOLDER FOR STURDY MOLD
  			let ignore = false;
  			for (const target of pokemon.side.foe.active) {
  				if (target.hasAbility('sturdymold')) {
  					ignore = true;
  					return;
  				}
  			}
  			if ((move.target === 'allAdjacentFoes' || move.target === 'allAdjacent') && ignore) return;
  			///////////END PLACEHOLDER
  			const noModifyType = [
  				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
  			];
  			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
  				move.type = 'Electric';
  				move.galvanizeBoosted = true;
  			}
  		},
  		onBasePowerPriority: 23,
  		onBasePower(basePower, pokemon, target, move) {
  			if (move.galvanizeBoosted) return this.chainModify([0x1333, 0x1000]);
  		},
  		onTryHit(target, source, move) {
  			if (target !== source && move.type === 'Ground' && !source.hasAbility('aerialbreak') && !target.volatiles['smackdown'] ) {
  				this.add('-immune', target, '[from] ability: Magnetic Waves');
  				return null;
  			}
  		},
  	},
  */
  doggysmaw: {
    id: "doggysmaw",
    name: "Doggy's Maw",
    shortDesc: "This Pokemon's Normal, Fighting and Dragon moves ignore type-based immunities and this Pokemon's Normal-type moves deal 1.5x damage.",
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Normal") {
        this.debug("Doggy's Maw boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Normal") {
        this.debug("Doggy's Maw boost");
        return this.chainModify(1.5);
      }
    },
    onModifyMovePriority: -5,
    onModifyMove(move, pokemon) {
      let ignore = false;
      for (const target of pokemon.side.foe.active) {
        if (target.hasAbility("sturdymold")) {
          ignore = true;
          return;
        }
      }
      if ((move.target === "allAdjacentFoes" || move.target === "allAdjacent") && ignore)
        return;
      if (!move.ignoreImmunity)
        move.ignoreImmunity = {};
      if (move.ignoreImmunity !== true) {
        move.ignoreImmunity["Fighting"] = true;
        move.ignoreImmunity["Normal"] = true;
        move.ignoreImmunity["Dragon"] = true;
      }
    },
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate" || effect.id === "scarilyadorable" || effect.id === "metalhead" || effect.id === "creepy" || effect.id === "ragingrapids") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Doggy's Maw");
      }
      if (effect.id === "peckingorder") {
        delete boost.def;
        this.add("-immune", target, "[from] ability: Doggy's Maw");
      }
      if (effect.id === "debilitate") {
        delete boost.spa;
        this.add("-immune", target, "[from] ability: Doggy's Maw");
      }
      if (effect.id === "sinkorswim" || effect.id === "scarilyadorable") {
        delete boost.spe;
        this.add("-immune", target, "[from] ability: Doggy's Maw");
      }
    }
  },
  // slate 5
  sturdymold: {
    // this one's gonna be a fucking adventure
    id: "sturdymold",
    name: "Sturdy Mold",
    shortDesc: "Sturdy + Mold Breaker.",
    onTryHit(pokemon, target, move) {
      if (move.ohko) {
        this.add("-immune", pokemon, "[from] ability: Sturdy Mold");
        return null;
      }
    },
    onDamagePriority: -100,
    onDamage(damage, target, source, effect) {
      if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === "Move") {
        this.add("-ability", target, "Sturdy Mold");
        return target.hp - 1;
      }
    },
    onStart(pokemon) {
      this.add("-ability", pokemon, "Sturdy Mold");
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    }
    // I'm gonna figure out how to code this legit at some point, I swear,
    // but for now, since we have so few abilities,
    // I'm just gonna hard-code it into everything.
  },
  therapeutic: {
    id: "therapeutic",
    name: "Therapeutic",
    shortDesc: "Poison Heal effects. Upon losing its item, this Pokemon poisons itself.",
    onDamagePriority: 1,
    onDamage(damage, target, source, effect) {
      if (effect.id === "psn" || effect.id === "tox") {
        this.heal(target.baseMaxhp / 8);
        return false;
      }
    },
    onAfterUseItem(item, pokemon) {
      if (pokemon !== this.effectState.target)
        return;
      pokemon.trySetStatus("psn", pokemon);
    },
    onTakeItem(item, pokemon) {
      pokemon.trySetStatus("psn", pokemon);
    }
  },
  solarpanel: {
    id: "solarpanel",
    name: "Solar Panel",
    shortDesc: "If hit by Grass, Electric or Fire: +1 SpA. Grass/Electric/Fire immunity.",
    onTryHit(target, source, move) {
      if (target !== source && (move.type === "Electric" || move.type === "Fire")) {
        if (!this.boost({ spa: 1 })) {
          this.add("-immune", target, "[from] ability: Solar Panel");
        }
        return null;
      }
    }
  },
  // For purposes of cancelling this ability out for Sturdy Mold:
  toughclaws: {
    onBasePowerPriority: 21,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["contact"] && !defender.hasAbility("sturdymold")) {
        return this.chainModify([5325, 4096]);
      }
    },
    name: "Tough Claws",
    rating: 3.5,
    num: 181
  },
  hustle: {
    // This should be applied directly to the stat as opposed to chaining with the others
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon, move) {
      let ignore = false;
      for (const target of pokemon.side.foe.active) {
        if (target.hasAbility("sturdymold")) {
          ignore = true;
          return;
        }
      }
      if ((move.target === "allAdjacentFoes" || move.target === "allAdjacent") && ignore)
        return;
      return this.modify(atk, 1.5);
    },
    onSourceModifyAccuracyPriority: 7,
    onSourceModifyAccuracy(accuracy, target, source, move) {
      if (move.category === "Physical" && typeof accuracy === "number" && !target.hasAbility("sturdymold")) {
        return accuracy * 0.8;
      }
    },
    name: "Hustle",
    rating: 3.5,
    num: 55
  },
  scrappy: {
    onModifyMovePriority: -5,
    onModifyMove(move, pokemon) {
      let ignore = false;
      for (const target of pokemon.side.foe.active) {
        if (target.hasAbility("sturdymold")) {
          ignore = true;
          return;
        }
      }
      if ((move.target === "allAdjacentFoes" || move.target === "allAdjacent") && ignore)
        return;
      if (!move.ignoreImmunity)
        move.ignoreImmunity = {};
      if (move.ignoreImmunity !== true) {
        move.ignoreImmunity["Fighting"] = true;
        move.ignoreImmunity["Normal"] = true;
      }
    },
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Scrappy");
      } else if (effect.id === "debilitate") {
        delete boost.spa;
        this.add("-immune", target, "[from] ability: Scrappy");
      } else if (effect.id === "sinkorswim") {
        delete boost.spe;
        this.add("-immune", target, "[from] ability: Scrappy");
      }
    },
    name: "Scrappy",
    rating: 3,
    num: 113
  },
  sandforce: {
    onBasePowerPriority: 21,
    onBasePower(basePower, attacker, defender, move) {
      if (this.field.isWeather("sandstorm")) {
        if (defender && defender.hasAbility("sturdymold"))
          return;
        if (move.type === "Rock" || move.type === "Ground" || move.type === "Steel") {
          this.debug("Sand Force boost");
          return this.chainModify([5325, 4096]);
        }
      }
    },
    onImmunity(type, pokemon) {
      if (type === "sandstorm")
        return false;
    },
    name: "Sand Force",
    rating: 2,
    num: 159
  },
  // next
  noguard: {
    // Edited for Sturdy Mold
    onAnyInvulnerabilityPriority: 1,
    onAnyInvulnerability(target, source, move) {
      if (move && (source === this.effectState.target || target === this.effectState.target) && !target.hasAbility("sturdymold"))
        return 0;
    },
    onAnyAccuracy(accuracy, target, source, move) {
      if (move && (source === this.effectState.target || target === this.effectState.target) && !target.hasAbility("sturdymold")) {
        return true;
      }
      return accuracy;
    },
    name: "No Guard",
    rating: 4,
    num: 99
  },
  bigpressure: {
    name: "Big Pressure",
    shortDesc: "Moves targeting this Pokemon lose 1 additional PP; Foes cannot lower its Defense.",
    onStart(pokemon) {
      this.add("-ability", pokemon, "Big Pressure");
    },
    onDeductPP(target, source) {
      if (target.side === source.side)
        return;
      return 1;
    },
    onBoost(boost, target, source, effect) {
      if (source && target === source)
        return;
      if (boost.def && boost.def < 0) {
        delete boost.def;
        if (!effect.secondaries && effect.id !== "octolock") {
          this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Pecks", "[of] " + target);
        }
      }
    }
  },
  friendshield: {
    name: "Friend Shield",
    shortDesc: "Gets +1 Def and SpD on switch-in. Allies recieve 3/4 damage from foes' attacks.",
    onStart(pokemon) {
      this.boost({ def: 1, spd: 1 }, pokemon);
    },
    onAnyModifyDamage(damage, source, target, move) {
      if (target !== this.effectState.target && target.side === this.effectState.target.side) {
        this.debug("Friend Shield weaken");
        return this.chainModify(0.75);
      }
    }
  },
  debilitate: {
    name: "Debilitate",
    shortDesc: "On switch-in, this Pokemon lowers the Special Attack of adjacent opponents by 1 stage.",
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.side.foe.active) {
        if (!target || !target.isAdjacent(pokemon))
          continue;
        if (!activated) {
          this.add("-ability", pokemon, "Debilitate", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ spa: -1 }, target, pokemon, null, true);
        }
      }
    }
  },
  leafyarmor: {
    // unsure
    name: "Leafy Armor",
    shortDesc: "If a status condition is inflicted on this Pokemon: Cure status, -1 Defense, +2 Speed.",
    onUpdate(pokemon) {
      if (pokemon.status && !pokemon.m.orbItemStatus) {
        this.add("-activate", pokemon, "ability: Leafy Armor");
        pokemon.cureStatus();
        this.boost({ def: -1, spe: 2 }, pokemon, pokemon);
      }
    }
  },
  surroundsound: {
    // unsure
    name: "Surround Sound",
    shortDesc: "This Pokemon recieves 1/2 damage from multitarget moves. Its own have 1.3x power.",
    onBasePowerPriority: 7,
    onBasePower(basePower, attacker, defender, move) {
      if (["allAdjacent", "allAdjacentFoes", "all"].includes(move.target)) {
        if (defender.hasAbility("sturdymold"))
          return;
        this.debug("Surround Sound boost");
        return this.chainModify([5325, 4096]);
      }
    },
    onSourceModifyDamage(damage, source, target, move) {
      if (["allAdjacent", "allAdjacentFoes", "all"].includes(move.target)) {
        this.debug("Surround Sound weaken");
        return this.chainModify(0.5);
      }
    }
  },
  spikyhold: {
    name: "Spiky Hold",
    shortDesc: "Cannot lose held item due to others' attacks; others making contact lose 1/8 max HP.",
    onTakeItem(item, pokemon, source) {
      if (this.suppressingAttackEvents(pokemon) || !pokemon.hp || pokemon.item === "stickybarb")
        return;
      if (!this.activeMove)
        throw new Error("Battle.activeMove is null");
      if (source && source !== pokemon || this.activeMove.id === "knockoff") {
        this.add("-activate", pokemon, "ability: Spiky Hold");
        return false;
      }
    },
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        this.damage(source.baseMaxhp / 8, source, target);
      }
    }
  },
  // slate 7
  sinkorswim: {
    name: "Sink or Swim",
    shortDesc: "On switch-in, lowers adjacent opponents' Speed by 1 stage.",
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.side.foe.active) {
        if (!target || !target.isAdjacent(pokemon))
          continue;
        if (!activated) {
          this.add("-ability", pokemon, "Sink or Swim", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ spe: -1 }, target, pokemon, null, true);
        }
      }
    }
  },
  downpour: {
    name: "Downpour",
    shortDesc: "If targeted by a foe's move: move loses 1 extra PP, this Pokemon restores 1/16 max HP.",
    onStart(pokemon) {
      this.add("-ability", pokemon, "Downpour");
    },
    onDeductPP(target, source) {
      if (target.side === source.side)
        return;
      this.heal(target.baseMaxhp / 16);
      return 1;
    },
    rating: 2.5,
    num: 46
  },
  /* //No longer in use
  overclock: {
  	name: "Overclock",
  	shortDesc: "If stats are lowered by foe or if hit by Electric move: Atk +2.",
  	onAfterEachBoost(boost, target, source, effect) {
  		if (!source || target.side === source.side) {
  			if (effect.id === 'stickyweb') {
  				this.hint("Court Change Sticky Web counts as lowering your own Speed, and Defiant only affects stats lowered by foes.", true, source.side);
  			}
  			return;
  		}
  		let statsLowered = false;
  		let i: BoostName;
  		for (i in boost) {
  			if (boost[i]! < 0) {
  				statsLowered = true;
  			}
  		}
  		if (statsLowered) {
  			this.add('-ability', target, 'Overclock');
  			this.boost({atk: 2}, target, target, null, true);
  		}
  	},
  	onDamagingHit(damage, target, source, move) {
  		if (move.type === 'Electric') {
  			this.boost({atk: 2});
  		}
  	},
  },
  */
  magicmissile: {
    /*
    Need to test:
    - any Berry
    - Toxic Orb, Flame Orb or Light Ball (just one they're the same code)
    - White Herb
    - Mental Herb
    - um, I guess making sure Razor Claw or Razor Fang (just one they're the same code) doesn't immediately crash,
    but it would be basically impossible for them to cause a flinch in a singles context
    (how does this behave with Instruct? maybe you could test with that if you're doing the doubles format Aquatic mentioned)
    */
    name: "Magic Missile",
    shortDesc: "If hit by a contact move while holding an item: lose item, apply item Fling effects, attacker loses 1/4 max HP. If hitting a foe with a contact move while not holding an item: steals the foe's item.",
    onSourceHit(target, source, move) {
      if (!move || !target)
        return;
      if (target !== source && move.category !== "Status") {
        if (source.item || source.volatiles["gem"] || move.id === "fling")
          return;
        const yourItem = target.takeItem(source);
        if (!yourItem)
          return;
        if (!source.setItem(yourItem)) {
          target.item = yourItem.id;
          return;
        }
        this.add("-item", source, yourItem, "[from] ability: Magic Missile", "[of] " + target);
      }
    },
    onDamagingHit(damage, target, source, move) {
      if (target.isSemiInvulnerable())
        return;
      if (target.ignoringItem())
        return false;
      const item = target.getItem();
      if (!this.singleEvent("TakeItem", item, target.itemData, target, target, move, item))
        return false;
      if (item.id && !item.megaStone) {
        this.damage(source.baseMaxhp / 4, source, target);
        target.addVolatile("fling");
        if (item.isBerry) {
          if (this.singleEvent("Eat", item, null, source, null, null)) {
            this.runEvent("EatItem", source, null, null, item);
            if (item.id === "leppaberry")
              source.staleness = "external";
          }
          if (item.onEat)
            source.ateBerry = true;
        } else if (item.id === "mentalherb") {
          const conditions = ["attract", "taunt", "encore", "torment", "disable", "healblock"];
          for (const firstCondition of conditions) {
            if (source.volatiles[firstCondition]) {
              for (const secondCondition of conditions) {
                source.removeVolatile(secondCondition);
                if (firstCondition === "attract" && secondCondition === "attract") {
                  this.add("-end", source, "move: Attract", "[from] item: Mental Herb");
                }
              }
              return;
            }
          }
        } else if (item.id === "whiteherb") {
          let activate = false;
          const boosts = {};
          let i;
          for (i in source.boosts) {
            if (source.boosts[i] < 0) {
              activate = true;
              boosts[i] = 0;
            }
          }
          if (activate) {
            source.setBoost(boosts);
            this.add("-clearnegativeboost", source, "[silent]");
          }
        } else {
          if (item.fling && item.fling.status) {
            source.trySetStatus(item.fling.status, target);
          } else if (item.fling && item.fling.volatileStatus) {
            source.addVolatile(item.fling.volatileStatus, target);
          }
        }
      }
    }
  },
  // slate 8
  fatproof: {
    name: "Fat Proof",
    shortDesc: "Ice, Fire attacks against this Pokemon use a halved attack stat; Fire moves 1/2 BP.",
    onSourceBasePowerPriority: 18,
    onSourceBasePower(basePower, attacker, defender, move) {
      if (move.type === "Fire") {
        return this.chainModify(0.5);
      }
    },
    onSourceModifyAtkPriority: 6,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Ice" || move.type === "Fire") {
        this.debug("Fat Proof weaken");
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Ice" || move.type === "Fire") {
        this.debug("Fat Proof weaken");
        return this.chainModify(0.5);
      }
    },
    onDamage(damage, target, source, effect) {
      if (effect && effect.id === "brn") {
        return damage / 2;
      }
    }
  },
  leviflame: {
    name: "Leviflame",
    shortDesc: "30% chance a Pokemon making contact with this Pokemon will be burned. Immune to Ground.",
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        if (this.randomChance(3, 10)) {
          source.trySetStatus("brn", target);
        }
      }
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Leviflame");
        return null;
      }
    }
  },
  prophylaxis: {
    name: "Prophylaxis",
    shortDesc: "Regenerator + Anticipation.",
    onStart(pokemon) {
      for (const target of pokemon.side.foe.active) {
        if (!target || target.fainted)
          continue;
        for (const moveSlot of target.moveSlots) {
          const move = this.dex.moves.get(moveSlot.move);
          if (move.category === "Status")
            continue;
          const moveType = move.id === "hiddenpower" ? target.hpType : move.type;
          if (this.dex.getImmunity(moveType, pokemon) && this.dex.getEffectiveness(moveType, pokemon) > 0 || move.ohko) {
            this.add("-ability", pokemon, "Prophylaxis");
            return;
          }
        }
      }
    },
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    }
  },
  feelnopain: {
    name: "Feel No Pain",
    shortDesc: "Poison Heal + Levitate",
    onDamagePriority: 1,
    onDamage(damage, target, source, effect) {
      if (effect.id === "psn" || effect.id === "tox") {
        this.heal(target.baseMaxhp / 8);
        return false;
      }
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Feel No Pain");
        return null;
      }
    }
  },
  erosion: {
    name: "Erosion",
    shortDesc: "Draws Electric moves to itself to raise SpA by 1; Electric immunity; summons Sandstorm on entry.",
    onStart(source) {
      this.field.setWeather("sandstorm");
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Electric") {
        if (!this.boost({ spa: 1 })) {
          this.add("-immune", target, "[from] ability: Erosion");
        }
        return null;
      }
    },
    onAnyRedirectTarget(target, source, source2, move) {
      if (move.type !== "Electric" || ["firepledge", "grasspledge", "waterpledge"].includes(move.id))
        return;
      const redirectTarget = ["randomNormal", "adjacentFoe"].includes(move.target) ? "normal" : move.target;
      if (this.validTarget(this.effectState.target, source, redirectTarget)) {
        if (move.smartTarget)
          move.smartTarget = false;
        if (this.effectState.target !== target) {
          this.add("-activate", this.effectState.target, "ability: Erosion");
        }
        return this.effectState.target;
      }
    }
  },
  statusabsorbtion: {
    name: "Status Absorbtion",
    shortDesc: "This Pokemon is immune to being Poisoned or Burned.",
    onUpdate(pokemon) {
      if (pokemon.status === "psn" || pokemon.status === "tox" || pokemon.status === "brn") {
        this.add("-activate", pokemon, "ability: Status Absorbtion");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "psn" && status.id !== "tox" && status.id !== "brn")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Status Absorbtion");
      }
      return false;
    }
  },
  levitability: {
    name: "Levitability",
    shortDesc: "STAB moves are boosted an additional 1.5x; immune to Ground.",
    onModifyMove(move, pokemon) {
      let ignore = false;
      for (const target of pokemon.side.foe.active) {
        if (target.hasAbility("sturdymold")) {
          ignore = true;
          return;
        }
      }
      if ((move.target === "allAdjacentFoes" || move.target === "allAdjacent") && ignore)
        return;
      move.stab = 2;
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Levitability");
        return null;
      }
    }
  },
  oblivious: {
    inherit: true,
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Oblivious");
      } else if (effect.id === "debilitate") {
        delete boost.spa;
        this.add("-immune", target, "[from] ability: Oblivious");
      } else if (effect.id === "sinkorswim") {
        delete boost.spe;
        this.add("-immune", target, "[from] ability: Oblivious");
      }
    }
  },
  owntempo: {
    inherit: true,
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Own Tempo");
      } else if (effect.id === "debilitate") {
        delete boost.spa;
        this.add("-immune", target, "[from] ability: Own Tempo");
      } else if (effect.id === "sinkorswim") {
        delete boost.spe;
        this.add("-immune", target, "[from] ability: Own Tempo");
      }
    }
  },
  rattled: {
    inherit: true,
    onAfterBoost(boost, target, source, effect) {
      if (effect && ["intimidate", "debilitate", "sinkorswim", "scarilyadorable", "peckingorder"].includes(effect.id)) {
        this.boost({ spe: 1 });
      }
    }
  },
  // new slate
  chivalry: {
    shortDesc: "For each stat lowered by a foe: +2 Atk, +1 Spe.",
    onAfterEachBoost(boost, target, source, effect) {
      if (!source || target.side === source.side) {
        if (effect.id === "stickyweb") {
          this.hint("Court Change Sticky Web counts as lowering your own Speed, and Defiant only affects stats lowered by foes.", true, source.side);
        }
        return;
      }
      let statsLowered = false;
      for (const i in boost) {
        if (boost[i] < 0) {
          statsLowered = true;
        }
      }
      if (statsLowered) {
        this.add("-ability", target, "Chivalry");
        this.boost({ atk: 2, spe: 1 }, target, target, null, true);
      }
    },
    name: "Chivalry"
  },
  hauntedtech: {
    shortDesc: "Moves 60 power or less: 1.5x power. If hit by an attack, 30% chance to disable that move.",
    name: "Haunted Tech",
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
      if (defender.hasAbility("sturdymold"))
        return;
      const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
      this.debug("Base Power: " + basePowerAfterMultiplier);
      if (basePowerAfterMultiplier <= 60) {
        this.debug("Technician boost");
        return this.chainModify(1.5);
      }
    },
    onDamagingHit(damage, target, source, move) {
      if (source.volatiles["disable"])
        return;
      if (!move.isFutureMove) {
        if (this.randomChance(3, 10)) {
          source.addVolatile("disable", this.effectState.target);
        }
      }
    }
  },
  stickyfloat: {
    // Groundedness implemented in scripts.ts
    onTakeItem(item, pokemon, source) {
      if (this.suppressingAttackEvents(pokemon) || !pokemon.hp || pokemon.item === "stickybarb")
        return;
      if (!this.activeMove)
        throw new Error("Battle.activeMove is null");
      if (source && source !== pokemon || this.activeMove.id === "knockoff") {
        this.add("-activate", pokemon, "ability: Sticky Float");
        return false;
      }
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Sticky Float");
        return null;
      }
    },
    name: "Sticky Float",
    shortDesc: "Effects of Sticky Hold + Levitate"
  },
  terrorizer: {
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
    onBasePower(basePower, pokemon, target, move) {
      if (move.hasSheerForce)
        return this.chainModify([5325, 4096]);
    },
    onDamagingHit(damage, target, source, move) {
      if (source.volatiles["disable"])
        return;
      if (!move.isFutureMove) {
        if (this.randomChance(3, 10)) {
          source.addVolatile("disable", this.effectState.target);
        }
      }
    },
    name: "Terrorizer",
    shortDesc: "Sheer Force + Cursed Body"
  },
  darkhumour: {
    onModifyPriority(priority, pokemon, target, move) {
      if (move?.category === "Status") {
        move.pranksterBoosted = true;
        return priority + 1;
      }
    },
    onTryHit(target, source, move) {
      if (source && target === source || move.category !== "Status")
        return;
      this.add("-ability", target, "Dark Humour");
      this.boost({ atk: 1 }, target, target, null, true);
    },
    name: "Dark Humour",
    shortDesc: "Status moves +1 priority. If targeted by a status move, +1 Atk."
  },
  speedy: {
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.boost({ spe: length }, source);
      }
    },
    name: "Speedy",
    shortDesc: "Speed raises by 1 stage if it attacks and KO's another Pokemon."
  },
  ultrahealth: {
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.add("-activate", source, "ability: Ultra Health");
        this.heal(source.baseMaxhp / 3, source, source, effect);
      }
    },
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    },
    name: "Ultra Health",
    shortDesc: "On switching out or landing a KO, heal for 1/3 max HP."
  },
  dustdevil: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Fire") {
        move.accuracy = true;
        if (!target.addVolatile("dustdevil")) {
          this.add("-immune", target, "[from] ability: Dust Devil");
        }
        return null;
      }
    },
    onEnd(pokemon) {
      pokemon.removeVolatile("dustdevil");
    },
    condition: {
      noCopy: true,
      // doesn't get copied by Baton Pass
      onStart(target) {
        this.add("-start", target, "ability: Dust Devil");
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, attacker, defender, move) {
        if (move.type === "Fire" && attacker.hasAbility("dustdevil")) {
          this.debug("Dust Devil boost");
          return this.chainModify(1.5);
        }
      },
      onModifySpAPriority: 5,
      onModifySpA(atk, attacker, defender, move) {
        if (move.type === "Fire" && attacker.hasAbility("dustdevil")) {
          this.debug("Dust Devil boost");
          return this.chainModify(1.5);
        }
      },
      onEnd(target) {
        this.add("-end", target, "ability: Dust Devil", "[silent]");
      }
    },
    onModifySpe(spe, pokemon) {
      if (this.field.isWeather("sandstorm")) {
        return this.chainModify(2);
      }
    },
    onImmunity(type, pokemon) {
      if (type === "sandstorm")
        return false;
    },
    name: "Dust Devil",
    shortDesc: "Effects of Sand Rush and Flash Fire."
  },
  solidskill: {
    onSourceModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).typeMod > 0 || move.multihit) {
        this.debug("Solid Skill neutralize");
        return this.chainModify(0.75);
      }
    },
    name: "Solid Skill",
    shortDesc: "3/4 damage from super-effective and multihit moves."
  },
  modeshift: {
    onStart(pokemon) {
      if (pokemon.baseSpecies.baseSpecies !== "Sableior" || pokemon.transformed)
        return;
      if (pokemon.species.forme !== "Meteor") {
        pokemon.formeChange("Sableior-Meteor");
      } else {
        if (pokemon.species.forme === "Meteor") {
          pokemon.formeChange(pokemon.set.species);
        }
      }
    },
    onModifyPriority(priority, pokemon, target, move) {
      if (move?.category === "Status") {
        move.pranksterBoosted = true;
        return priority + 1;
      }
    },
    onBeforeMovePriority: 0.5,
    onBeforeMove(attacker, defender, move) {
      if (attacker.species.baseSpecies !== "Sableior" || attacker.transformed)
        return;
      const targetForme = move.category === "Status" ? "Sableior-Meteor" : "Sableior";
      if (attacker.species.name !== targetForme)
        attacker.formeChange(targetForme);
      if (attacker.canMegaEvo) {
        attacker.canMegaEvo = targetForme === "Sableior-Meteor" ? "sableiormeteormega" : "sableiormega";
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
    name: "Mode Shift",
    shortDesc: "Status moves +1 priority. Changes to Meteor Form before using a status move."
  },
  lemegeton: {
    // Ability suppression implemented in sim/pokemon.ts:Pokemon#ignoringAbility
    // TODO Will abilities that already started start again? (Intimidate seems like a good test case)
    onPreStart(pokemon) {
      this.add("-ability", pokemon, "Lemegeton");
      pokemon.abilityData.ending = false;
      for (const target of this.getAllActive()) {
        if (target.illusion) {
          this.singleEvent("End", this.dex.abilities.get("Illusion"), target.abilityData, target, pokemon, "lemegeton");
        }
        if (target.volatiles["slowstart"]) {
          delete target.volatiles["slowstart"];
          this.add("-end", target, "Slow Start", "[silent]");
        }
      }
    },
    onEnd(source) {
      source.abilityData.ending = true;
      for (const pokemon of this.getAllActive()) {
        if (pokemon !== source) {
          this.singleEvent("Start", pokemon.getAbility(), pokemon.abilityData, pokemon);
        }
      }
    },
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        let statName = "atk";
        let bestStat = 0;
        let s;
        for (s in source.storedStats) {
          if (source.storedStats[s] > bestStat) {
            statName = s;
            bestStat = source.storedStats[s];
          }
        }
        this.boost({ [statName]: length }, source);
      }
    },
    name: "Lemegeton",
    shortDesc: "Beast Boost + Neutralizing Gas"
  },
  // a
  magicbeast: {
    onTryHitPriority: 1,
    onTryHit(target, source, move) {
      if (target === source || move.hasBounced || !move.flags["reflectable"]) {
        return;
      }
      const newMove = this.dex.getActiveMove(move.id);
      newMove.hasBounced = true;
      newMove.pranksterBoosted = false;
      this.useMove(newMove, target, source);
      return null;
    },
    onAllyTryHitSide(target, source, move) {
      if (target.side === source.side || move.hasBounced || !move.flags["reflectable"]) {
        return;
      }
      const newMove = this.dex.getActiveMove(move.id);
      newMove.hasBounced = true;
      newMove.pranksterBoosted = false;
      this.useMove(newMove, this.effectState.target, source);
      return null;
    },
    condition: {
      duration: 1
    },
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        let statName = "atk";
        let bestStat = 0;
        let s;
        for (s in source.storedStats) {
          if (source.storedStats[s] > bestStat) {
            statName = s;
            bestStat = source.storedStats[s];
          }
        }
        this.boost({ [statName]: length }, source);
      }
    },
    name: "Magic Beast",
    shortDesc: "Magic Bounce + Beast Boost."
  },
  soundneigh: {
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.boost({ atk: length }, source);
      }
    },
    onTryHit(target, source, move) {
      if (move.target !== "self" && move.flags["sound"]) {
        this.add("-immune", target, "[from] ability: Sound Neigh");
        return null;
      }
    },
    onAllyTryHitSide(target, source, move) {
      if (move.flags["sound"]) {
        this.add("-immune", this.effectState.target, "[from] ability: Sound Neigh");
      }
    },
    name: "Sound Neigh",
    shortDesc: "Chilling Neigh + Soundproof."
  },
  ecopy: {
    onStart(pokemon) {
      this.field.setTerrain("electricterrain");
      if (pokemon.side.foe.active.some(
        (foeActive) => foeActive && pokemon.isAdjacent(foeActive) && foeActive.ability === "noability"
      )) {
        this.effectState.gaveUp = true;
      }
    },
    onUpdate(pokemon) {
      if (!pokemon.isStarted || this.effectState.gaveUp)
        return;
      const possibleTargets = pokemon.side.foe.active.filter((foeActive) => foeActive && pokemon.isAdjacent(foeActive));
      while (possibleTargets.length) {
        let rand = 0;
        if (possibleTargets.length > 1)
          rand = this.random(possibleTargets.length);
        const target = possibleTargets[rand];
        const ability = target.getAbility();
        const additionalBannedAbilities = [
          // Zen Mode included here for compatability with Gen 5-6
          "noability",
          "flowergift",
          "forecast",
          "hungerswitch",
          "illusion",
          "imposter",
          "neutralizinggas",
          "powerofalchemy",
          "receiver",
          "trace",
          "zenmode",
          "magicmissile",
          "pillage",
          "ecopy",
          "lemegeton",
          "modeshift"
        ];
        if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) {
          possibleTargets.splice(rand, 1);
          continue;
        }
        this.add("-ability", pokemon, ability, "[from] ability: E-Copy", "[of] " + target);
        pokemon.setAbility(ability);
        return;
      }
    },
    name: "E-Copy",
    shortDesc: "Sets Electric Terrain, and then copies the foe's Ability."
  },
  wetbugs: {
    onStart(source) {
      for (const action of this.queue) {
        if (action.choice === "runPrimal" && action.pokemon === source && source.species.id === "kyottler")
          return;
        if (action.choice !== "runSwitch" && action.choice !== "runPrimal")
          break;
      }
      this.field.setWeather("raindance");
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Bug" && attacker.hp <= attacker.maxhp / 3) {
        if (defender.hasAbility("sturdymold"))
          return;
        this.debug("Swarm boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Bug" && attacker.hp <= attacker.maxhp / 3) {
        if (defender.hasAbility("sturdymold"))
          return;
        this.debug("Swarm boost");
        return this.chainModify(1.5);
      }
    },
    name: "Wet Bugs",
    shortDesc: "Drizzle + Swarm."
  },
  hydrauliccannon: {
    onModifySpe(spe, pokemon) {
      if (["raindance", "primordialsea"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(2);
      }
    },
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (defender.hasAbility("sturdymold"))
        return;
      if (move.flags["pulse"]) {
        return this.chainModify(1.5);
      }
    },
    name: "Hydraulic Cannon",
    shortDesc: "Mega Launcher + Swift Swim."
  },
  // more fix
  solarpower: {
    onModifySpAPriority: 5,
    onModifySpA(spa, pokemon, move) {
      let ignore = false;
      for (const target of pokemon.side.foe.active) {
        if (target.hasAbility("sturdymold")) {
          ignore = true;
          return;
        }
      }
      if ((move.target === "allAdjacentFoes" || move.target === "allAdjacent") && ignore)
        return;
      if (["sunnyday", "desolateland"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(1.5);
      }
    },
    onWeather(target, source, effect) {
      if (target.hasItem("utilityumbrella"))
        return;
      if (effect.id === "sunnyday" || effect.id === "desolateland") {
        this.damage(target.baseMaxhp / 8, target, target);
      }
    },
    name: "Solar Power",
    rating: 2,
    num: 94
  },
  skilllink: {
    onModifyMove(move, pokemon) {
      let ignore = false;
      for (const target of pokemon.side.foe.active) {
        if (target.hasAbility("sturdymold")) {
          ignore = true;
          return;
        }
      }
      if ((move.target === "allAdjacentFoes" || move.target === "allAdjacent") && ignore)
        return;
      if (move.multihit && Array.isArray(move.multihit) && move.multihit.length) {
        move.multihit = move.multihit[1];
      }
      if (move.multiaccuracy) {
        delete move.multiaccuracy;
      }
    },
    name: "Skill Link",
    rating: 3,
    num: 92
  },
  technician: {
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
      if (defender.hasAbility("sturdymold"))
        return;
      const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
      this.debug("Base Power: " + basePowerAfterMultiplier);
      if (basePowerAfterMultiplier <= 60) {
        this.debug("Technician boost");
        return this.chainModify(1.5);
      }
    },
    name: "Technician",
    rating: 3.5,
    num: 101
  },
  battletheme: {
    onBeforeMovePriority: 0.5,
    onBeforeMove(attacker, defender, move) {
      if (attacker.species.baseSpecies !== "Meloslash" || attacker.transformed)
        return;
      if (move.category === "Status" && move.id !== "kingsshield")
        return;
      const targetForme = move.secondaries || move.id === "kingsshield" ? "Meloslash" : "Meloslash-Melee";
      if (attacker.species.name !== targetForme)
        attacker.formeChange(targetForme);
      if (move.id === "relicsong") {
        move.willChangeForme = true;
      }
    },
    onAfterMoveSecondarySelf(pokemon, target, move) {
      if (move.willChangeForme) {
        pokemon.formeChange("Meloslash-Melee");
      }
    },
    onModifyMovePriority: -2,
    onModifyMove(move) {
      if (move.secondaries) {
        this.debug("doubling secondary chance");
        for (const secondary of move.secondaries) {
          if (secondary.chance)
            secondary.chance *= 2;
        }
      }
      if (move.self?.chance)
        move.self.chance *= 2;
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
    name: "Battle Theme",
    shortDesc: "If Meloslash: change forme to Range before using move with secondary, change form to Melee otherwise. Secondary effect chances are doubled."
  },
  flashyjokes: {
    shortDesc: "Flash Fire + Prankster.",
    name: "Flashy Jokes",
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Fire") {
        move.accuracy = true;
        if (!target.addVolatile("flashfire")) {
          this.add("-immune", target, "[from] ability: Flashy Jokes");
        }
        return null;
      }
    },
    onEnd(pokemon) {
      pokemon.removeVolatile("flashfire");
    },
    onModifyPriority(priority, pokemon, target, move) {
      if (move?.category === "Status") {
        move.pranksterBoosted = true;
        return priority + 1;
      }
    }
  },
  teachingtech: {
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
      if (defender.hasAbility("sturdymold"))
        return;
      const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
      this.debug("Base Power: " + basePowerAfterMultiplier);
      if (basePowerAfterMultiplier <= 60) {
        this.debug("Technician boost");
        return this.chainModify(1.5);
      }
    },
    onSourceHit(target, source, move) {
      if (!move || !target || move.category === "Status")
        return;
      console.log("Teaching Tech: Move BP = " + move.basePower);
      const targetAbility = target.getAbility();
      if (targetAbility.isPermanent || targetAbility.id === "teachingtech")
        return;
      if (move.basePower <= 60) {
        const oldAbility = target.setAbility("teachingtech", source);
        if (oldAbility) {
          this.add("-activate", source, "ability: Teaching Tech");
          this.add("-activate", target, "ability: Teaching Tech");
        }
      }
    },
    name: "Teaching Tech",
    shortDesc: "Moves <=60 BP: 1.5x power. If hitting something with such a move: changes their ability to Teaching Tech."
  },
  scrappyarmor: {
    onModifyMovePriority: -5,
    onModifyMove(move) {
      if (!move.ignoreImmunity)
        move.ignoreImmunity = {};
      if (move.ignoreImmunity !== true) {
        move.ignoreImmunity["Fighting"] = true;
        move.ignoreImmunity["Normal"] = true;
      }
    },
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate" || effect.id === "scarilyadorable" || effect.id === "metalhead" || effect.id === "creepy" || effect.id === "ragingrapids") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Scrappy Armor");
      }
      if (effect.id === "peckingorder") {
        delete boost.def;
        this.add("-immune", target, "[from] ability: Scrappy Armor");
      }
      if (effect.id === "debilitate") {
        delete boost.spa;
        this.add("-immune", target, "[from] ability: Scrappy Armor");
      }
      if (effect.id === "sinkorswim" || effect.id === "scarilyadorable") {
        delete boost.spe;
        this.add("-immune", target, "[from] ability: Scrappy Armor");
      }
    },
    onDamagingHit(damage, target, source, move) {
      if (move.category === "Physical") {
        this.boost({ def: -1, spe: 2 }, target, target);
      }
    },
    name: "Scrappy Armor",
    shortDesc: "Scrappy + Weak Armor"
  },
  olfactoryarmor: {
    onFoeTrapPokemon(pokemon) {
      if (pokemon.hasType("Steel") && pokemon.isAdjacent(this.effectState.target)) {
        pokemon.tryTrap(true);
      }
    },
    onFoeMaybeTrapPokemon(pokemon, source) {
      if (!source)
        source = this.effectState.target;
      if (!source || !pokemon.isAdjacent(source))
        return;
      if (!pokemon.knownType || pokemon.hasType("Steel")) {
        pokemon.maybeTrapped = true;
      }
    },
    onSourceModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).typeMod > 0) {
        this.debug("Prism Armor neutralize");
        return this.chainModify(0.75);
      }
    },
    onSourceModifyAtkPriority: 5,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Steel") {
        return this.chainModify(0.75);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Steel") {
        return this.chainModify(0.75);
      }
    },
    name: "Olfactory Armor",
    shortDesc: "This Pokemon prevents adjacent Steel-type foes from choosing to switch and takes 3/4 damage from Super Effective and Steel-type attacks."
  },
  gutsyjaw: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
      if (pokemon.status) {
        return this.chainModify(1.5);
      }
    },
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["bite"]) {
        return this.chainModify(1.5);
      }
    },
    name: "Gutsy Jaw",
    shortDesc: "Guts + Strong Jaw"
  },
  finalargument: {
    onStart(source) {
      this.field.setTerrain("psychicterrain");
    },
    onSwitchOut(source) {
      this.field.setTerrain("psychicterrain");
    },
    name: "Final Argument",
    shortDesc: "Summons Psychic Terrain when switched in or out."
  },
  mosscoat: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Grass") {
        this.debug("Moss Coat boost");
        return this.chainModify(1.3);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Grass") {
        this.debug("Moss Coat boost");
        return this.chainModify(1.3);
      }
    },
    onSourceBasePowerPriority: 18,
    onSourceBasePower(basePower, attacker, defender, move) {
      if (move.id === "earthquake" || move.id === "magnitude" || move.id === "bulldoze") {
        return this.chainModify(0.5);
      }
    },
    onResidualOrder: 5,
    onResidualSubOrder: 2,
    onResidual(pokemon) {
      if (this.field.isTerrain("grassyterrain"))
        return;
      this.heal(pokemon.maxhp / 16);
    },
    onTerrain(pokemon) {
      if (!this.field.isTerrain("grassyterrain"))
        return;
      this.heal(pokemon.maxhp / 16);
    },
    name: "Moss Coat",
    shortDesc: "This Pokemon is considered to be under the effects of Grassy Terrain."
  },
  toxicplay: {
    onStart(pokemon) {
      this.add("-ability", pokemon, "Toxic Play");
      this.add("-message", `Hawlazzle breaks the mold!`);
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    },
    name: "Toxic Play",
    shortDesc: "Mold Breaker + Corrosion."
  },
  covertops: {
    onAfterEachBoost(boost, target, source, effect) {
      if (!source || target.side === source.side) {
        if (effect.id === "stickyweb") {
          this.hint("Court Change Sticky Web counts as lowering your own Speed, and Covert Ops only affects stats lowered by foes.", true, source.side);
        }
        return;
      }
      let statsLowered = false;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          statsLowered = true;
        }
      }
      if (statsLowered) {
        this.add("-ability", target, "Covert Ops");
        this.boost({ spa: 2 }, target, target, null, true);
      }
    },
    onModifyMove(move) {
      move.infiltrates = true;
    },
    name: "Covert Ops",
    shortDesc: "Infiltrator + Competitive."
  },
  deluge: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Water") {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Deluge");
        }
        return null;
      }
    },
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Water") {
        return this.chainModify(1.3);
      }
    },
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Water") {
        return this.chainModify(1.3);
      }
    },
    name: "Deluge",
    shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity. This Pokemon's Water moves have 1.3x power."
  },
  contraryboost: {
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        let success = false;
        let i;
        for (i in source.boosts) {
          if (source.boosts[i] === 0)
            continue;
          source.boosts[i] = -source.boosts[i];
          success = true;
        }
        if (!success)
          return false;
        this.add("-invertboost", source, "[from] ability: Contrary Boost");
      }
    },
    name: "Contrary Boost",
    shortDesc: "Reverses stat changes after attacking and KOing a Pokemon."
  },
  itemboost: {
    onAfterUseItem(item, pokemon) {
      if (pokemon !== this.effectState.target)
        return;
      pokemon.addVolatile("itemboost");
    },
    onTakeItem(item, pokemon) {
      pokemon.addVolatile("itemboost");
    },
    onEnd(pokemon) {
      pokemon.removeVolatile("itemboost");
    },
    condition: {
      onModifySpe(spe, pokemon) {
        if (!pokemon.item) {
          return this.chainModify(2);
        }
      }
    },
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        let statName = "atk";
        let bestStat = 0;
        let s;
        for (s in source.storedStats) {
          if (source.storedStats[s] > bestStat) {
            statName = s;
            bestStat = source.storedStats[s];
          }
        }
        this.boost({ [statName]: length }, source);
      }
    },
    name: "Item Boost",
    shortDesc: "Unburden + Beast Boost."
  },
  ultrascout: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.side.foe.active) {
        if (!target || target.fainted)
          continue;
        if (!activated)
          this.add("-ability", pokemon, "Ultra Scout");
        activated = true;
        let statName = "atk";
        let bestStat = 0;
        let s;
        for (s in target.storedStats) {
          if (target.storedStats[s] > bestStat) {
            statName = s;
            bestStat = target.storedStats[s];
          }
        }
        if (statName === "atk")
          this.add("-message", `${target.illusion ? target.illusion.name : target.name} is most proficient in Attack!`);
        if (statName === "def")
          this.add("-message", `${target.illusion ? target.illusion.name : target.name} is most proficient in Defense!`);
        if (statName === "spa")
          this.add("-message", `${target.illusion ? target.illusion.name : target.name} is most proficient in Special Attack!`);
        if (statName === "spd")
          this.add("-message", `${target.illusion ? target.illusion.name : target.name} is most proficient in Special Defense!`);
        if (statName === "spe")
          this.add("-message", `${target.illusion ? target.illusion.name : target.name} is most proficient in Speed!`);
      }
    },
    name: "Ultra Scout",
    rating: 1.5,
    shortDesc: "On switch-in, this Pokemon identifies the foe's highest non-HP stat"
  },
  scarilyadorable: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.side.foe.active) {
        if (!target || !target.isAdjacent(pokemon))
          continue;
        if (!activated) {
          this.add("-ability", pokemon, "Scarily Adorable", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ atk: -1, spe: -1 }, target, pokemon, null, true);
        }
      }
    },
    name: "Scarily Adorable",
    shortDesc: "On switch-in, this Pokemon lowers the Attack and Speed of adjacent opponents by 1 stage."
  },
  solarboiler: {
    onTryHit(target, source, move) {
      if (target !== source && (move.type === "Water" || move.type === "Fire")) {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Solar Boiler");
        }
        return null;
      }
    },
    onWeather(target, source, effect) {
      if (target.hasItem("utilityumbrella"))
        return;
      if (effect.id === "raindance" || effect.id === "primordialsea") {
        this.heal(target.baseMaxhp / 8);
      }
    },
    onModifySpe(spe, pokemon) {
      if (["sunnyday", "desolateland"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(4);
      }
    },
    name: "Solar Boiler",
    shortDesc: "immune to Water and Fire-type attacks, heals 25% when hit by one; Heals 12.5% per turn in Rain; Has 4x Spe in Sun."
  },
  voltophyll: {
    onTryHit(target, source, move) {
      if (target !== source && (move.type === "Electric" || move.type === "Fire")) {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Voltophyll");
        }
        return null;
      }
    },
    onModifySpe(spe, pokemon) {
      if (["sunnyday", "desolateland"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(2);
      }
    },
    name: "Voltophyll",
    shortDesc: "2x Speed in Sun; Heals 25% when hit by a Fire or Electric move; Fire/Electric immunity"
  },
  weatherpower: {
    onModifySpAPriority: 5,
    onModifySpA(spa, pokemon) {
      if (["sunnyday", "desolateland", "raindance", "primordialsea", "hail", "sandstorm", "deltastream"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(1.5);
      }
    },
    onWeather(target, source, effect) {
      if (target.hasItem("utilityumbrella"))
        return;
      if (effect.id === "sunnyday" || effect.id === "desolateland" || effect.id === "raindance" || effect.id === "primordialsea" || effect.id === "hail" || effect.id === "sandstorm" || effect.id === "deltastream") {
        this.damage(target.baseMaxhp / 8, target, target);
      }
    },
    name: "Weather Power",
    shortDesc: "1.5x SpA while under any weather. User loses 12.5% of its HP in any weather."
  },
  plotarmor: {
    onBasePowerPriority: 23,
    onBasePower(basePower, attacker, defender, move) {
      if (move.recoil || move.hasCrashDamage) {
        this.debug("Plot Armor boost");
        return this.chainModify([4915, 4096]);
      }
    },
    onDamagePriority: -100,
    onDamage(damage, target, source, effect) {
      if (damage >= target.hp && effect && (effect.id === "recoil" || (effect.id === "jumpkick" || effect.id === "highjumpkick") && source === target)) {
        this.add("-ability", target, "Plot Armor");
        return target.hp - 1;
      }
    },
    name: "Plot Armor",
    shortDesc: "Reckless + If this Pokemon would faint due to recoil or crash damage, it will instead survive with 1 HP."
  },
  reversegear: {
    name: "Reverse Gear",
    onBoost(boost) {
      boost.spe *= -1;
    },
    shortDesc: "Stat boosts to the Speed stat are inversed."
  },
  innerfocus: {
    onTryAddVolatile(status, pokemon) {
      if (status.id === "flinch")
        return null;
    },
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate" || effect.id === "scarilyadorable" || effect.id === "metalhead" || effect.id === "creepy" || effect.id === "ragingrapids") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Inner Focus");
      }
      if (effect.id === "peckingorder") {
        delete boost.def;
        this.add("-immune", target, "[from] ability: Inner Focus");
      }
      if (effect.id === "debilitate") {
        delete boost.spa;
        this.add("-immune", target, "[from] ability: Inner Focus");
      }
      if (effect.id === "sinkorswim" || effect.id === "scarilyadorable") {
        delete boost.spe;
        this.add("-immune", target, "[from] ability: Inner Focus");
      }
    },
    name: "Inner Focus",
    rating: 1.5,
    num: 39
  },
  fairygust: {
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
      if (move.type === "Normal" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== "Status")) {
        move.type = "Fairy";
        move.pixilateBoosted = true;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.pixilateBoosted)
        return this.chainModify([4915, 4096]);
    },
    onModifyPriority(priority, pokemon, target, move) {
      if (move?.type === "Flying" && pokemon.hp === pokemon.maxhp)
        return priority + 1;
    },
    name: "Fairy Gust",
    shortDesc: "Pixilate + Gale Wings."
  },
  leafstream: {
    onSetStatus(status, target, source, effect) {
      if (["sunnyday", "desolateland"].includes(target.effectiveWeather())) {
        if (effect?.status) {
          this.add("-immune", target, "[from] ability: Leaf Guard");
        }
        return false;
      }
    },
    onTryAddVolatile(status, target) {
      if (status.id === "yawn" && ["sunnyday", "desolateland"].includes(target.effectiveWeather())) {
        this.add("-immune", target, "[from] ability: Leaf Guard");
        return null;
      }
    },
    onStart(source) {
      for (const action of this.queue) {
        if (action.choice === "runPrimal" && action.pokemon === source && source.species.id === "groudon")
          return;
        if (action.choice !== "runSwitch" && action.choice !== "runPrimal")
          break;
      }
      this.field.setWeather("sunnyday");
    },
    name: "Leaf Stream",
    shortDesc: "Leaf Guard + Summons Sunny Day on switch-in."
  },
  jawofthelaw: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["bite"]) {
        return this.chainModify(1.5);
      }
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender) {
      if (!defender.activeTurns) {
        this.debug("Jaw of the Law boost");
        return this.chainModify(2);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender) {
      if (!defender.activeTurns) {
        this.debug("Jaw of the Law boost");
        return this.chainModify(2);
      }
    },
    name: "Jaw of the Law",
    shortDesc: "Strong Jaw + Stakeout."
  },
  mystic: {
    onStart(source) {
      this.field.setTerrain("mistyterrain");
    },
    // The rest is implemented in moves.ts
    name: "Mystic",
    shortDesc: "Misty Surge + This Pokemon's moves ignore the effects of Misty Terrain."
  },
  peckingorder: {
    name: "Pecking Order",
    shortDesc: "On switch-in, this Pokemon lowers the Defense of adjacent opponents by 1 stage.",
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.side.foe.active) {
        if (!target || !target.isAdjacent(pokemon))
          continue;
        if (!activated) {
          this.add("-ability", pokemon, "Pecking Order", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ def: -1 }, target, pokemon, null, true);
        }
      }
    }
  },
  marblegarden: {
    onDamage(damage, target, source, effect) {
      if (effect.id === "recoil") {
        if (!this.activeMove)
          throw new Error("Battle.activeMove is null");
        if (this.activeMove.id !== "struggle")
          return null;
      }
    },
    onAllyBoost(boost, target, source, effect) {
      if (source && target === source)
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
        this.add("-block", target, "ability: Marble Garden", "[of] " + effectHolder);
      }
    },
    onAllySetStatus(status, target, source, effect) {
      if (source && target !== source && effect && effect.id !== "yawn") {
        this.debug("interrupting setStatus with Marble Garden");
        if (effect.id === "synchronize" || effect.effectType === "Move" && !effect.secondaries) {
          const effectHolder = this.effectState.target;
          this.add("-block", target, "ability: Marble Garden", "[of] " + effectHolder);
        }
        return null;
      }
    },
    onAllyTryAddVolatile(status, target) {
      if (status.id === "yawn") {
        this.debug("Marble Garden blocking yawn");
        const effectHolder = this.effectState.target;
        this.add("-block", target, "ability: Marble Garden", "[of] " + effectHolder);
        return null;
      }
    },
    name: "Marble Garden",
    shortDesc: "Protects the user from Recoil, and status infliction and stat reduction from other Pok\xE9mon."
  },
  devilsadvocate: {
    onPreStart(pokemon) {
      this.add("-ability", pokemon, "Devil's Advocate", pokemon.side.foe);
    },
    onBoost(boost, target, source, effect) {
      if (effect && effect.id === "zpower")
        return;
      let i;
      for (i in boost) {
        boost[i] *= -1;
      }
    },
    onFoeTryEatItem: false,
    name: "Devil's Advocate",
    shortDesc: "Unnerve + Contrary"
  },
  snowglobe: {
    onStart(source) {
      this.field.setWeather("hail");
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, attacker, defender, move) {
      if (this.field.isWeather("hail")) {
        if (move.type === "Rock" || move.type === "Ground" || move.type === "Steel") {
          this.debug("Snow Globe boost");
          return this.chainModify([5325, 4096]);
        }
      }
    },
    onImmunity(type, pokemon) {
      if (type === "hail")
        return false;
    },
    name: "Snow Globe",
    shortDesc: "Summons Hail on switch-in. Steel, Ground, and Rock moves deal 1.3x damage in Hail; Hail immunity."
  },
  bugscicle: {
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
      if (move.type === "Bug" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== "Status")) {
        move.type = "Ice";
        move.refrigerateBoosted = true;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.refrigerateBoosted)
        return this.chainModify([4915, 4096]);
    },
    name: "Bugscicle",
    shortDesc: "This Pok\xE9mon's Bug-Type moves become Ice-Type and deal 1.2x damage."
  },
  magicfist: {
    onBasePowerPriority: 23,
    onBasePower(basePower, attacker, defender, move) {
      if (!attacker.item) {
        this.debug("Magic Fist boost");
        return this.chainModify([4915, 4096]);
      }
    },
    name: "Magic Fist",
    shortDesc: "If this Pokemon has no item, its attacks have 1.2x power."
  },
  sandbubbler: {
    onStart(source) {
      this.field.setWeather("sandstorm");
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["punch"]) {
        this.debug("Sand Bubbler boost");
        return this.chainModify([4915, 4096]);
      }
    },
    name: "Sand Bubbler",
    shortDesc: "Sand Stream + Iron Fist."
  },
  bombardier: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["bullet"]) {
        return this.chainModify(1.5);
      }
    },
    name: "Bombardier",
    shortDesc: "Bullet and Bomb moves have 1.5x power."
  },
  asonekecleon: {
    onPreStart(pokemon) {
      this.add("-ability", pokemon, "As One");
      this.add("-ability", pokemon, "Unnerve", pokemon.side.foe);
    },
    onFoeTryEatItem: false,
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.boost({ spa: length }, source, source, this.dex.abilities.get("grimneigh"));
      }
    },
    onAfterMoveSecondary(target, source, move) {
      if (!target.hp)
        return;
      const type = move.type;
      if (target.isActive && move.effectType === "Move" && move.category !== "Status" && type !== "???" && !target.hasType(type)) {
        if (!target.setType(type))
          return false;
        this.add("-start", target, "typechange", type, "[from] ability: Color Change");
        if (target.side.active.length === 2 && target.position === 1) {
          const action = this.queue.willMove(target);
          if (action && action.move.id === "curse") {
            action.targetLoc = -1;
          }
        }
      }
    },
    name: "As One (Kecleon)",
    shortDesc: "As One (Spectrier) + Color Change."
  },
  heavyarmor: {
    onBoost(boost, target, source, effect) {
      if (source && target === source)
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
        this.add("-fail", target, "unboost", "[from] ability: Heavy Armor", "[of] " + target);
      }
    },
    onCriticalHit: false,
    name: "Heavy Armor",
    shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages. This Pokemon cannot be struck by a critical hit."
  },
  magicwand: {
    onModifyMove(move) {
      delete move.flags["contact"];
    },
    onDamage(damage, target, source, effect) {
      if (effect.effectType !== "Move") {
        if (effect.effectType === "Ability")
          this.add("-activate", source, "ability: " + effect.name);
        return false;
      }
    },
    name: "Magic Wand",
    shortDesc: "Long Reach + Magic Guard"
  },
  sportsshowtime: {
    onPrepareHit(source, target, move) {
      if (move.hasBounced)
        return;
      const type = move.type;
      if (type && type !== "???" && source.getTypes().join() !== type) {
        if (!source.setType(type))
          return;
        this.add("-start", source, "typechange", type, "[from] ability: Sports Showtime");
        this.heal(source.baseMaxhp / 16);
      }
    },
    name: "Sports Showtime",
    shortDesc: "Changes to the type of its used move and heals 1/16 of its max HP before dealing damage"
  },
  firestarter: {
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        if (this.randomChance(3, 10)) {
          source.trySetStatus("brn", target);
        }
      }
    },
    onModifyMove(move) {
      if (!move || !move.flags["contact"] || move.target === "self")
        return;
      if (!move.secondaries) {
        move.secondaries = [];
      }
      move.secondaries.push({
        chance: 30,
        status: "brn",
        ability: this.dex.abilities.get("firestarter")
      });
    },
    name: "Fire Starter",
    shortDesc: "30% chance to burn opponent when using a contact move or when the opponent makes contact with this Pokemon"
  },
  "parasomnia": {
    shortDesc: "Upon a KO or falling asleep, highest non-HP stat is raised by 1 stage.",
    id: "parasomnia",
    name: "Parasomnia",
    onSourceFaint(target, source, effect) {
      if (effect && effect.effectType === "Move") {
        let statName = "atk";
        let bestStat = 0;
        let s;
        for (s in source.storedStats) {
          if (source.storedStats[s] > bestStat) {
            statName = s;
            bestStat = source.storedStats[s];
          }
        }
        this.boost({ [statName]: 1 }, source);
      }
    },
    onSetStatus(status, target, source, effect) {
      let statName = "atk";
      let bestStat = 0;
      let s;
      for (s in this.effectState.target.storedStats) {
        if (this.effectState.target.storedStats[s] > bestStat) {
          statName = s;
          bestStat = this.effectState.target.storedStats[s];
        }
      }
      if (status.id === "slp") {
        this.boost({ [statName]: 1 }, this.effectState.target);
      }
    }
  },
  willfulcharge: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Electric") {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Willful Charge");
        }
        return null;
      }
    },
    onModifyMove(move) {
      if (move.type === "Electric") {
        move.ignoreDefensive = true;
        move.ignoreEvasion = true;
      }
    },
    name: "Willful Charge",
    shortDesc: "Ignores opponent\u2019s stat changes when doing damage with Electric-type moves and recovers 1/4 max HP when hit by an electric type move; Electric immunity."
  },
  sheerheart: {
    onBasePowerPriority: 21,
    onBasePower(basePower, pokemon, target, move) {
      if (move.category === "Special")
        return this.chainModify([5325, 4096]);
    },
    onBoost(boost, target, source, effect) {
      if (boost.spa && boost.spa < 0 || boost.spa > 0) {
        delete boost.spa;
        if (!effect.secondaries) {
          this.add("-fail", target, "unboost", "Special Attack", "[from] ability: Sheer Heart", "[of] " + target);
        }
      }
    },
    name: "Sheer Heart",
    shortDesc: "Special attacks have 1.3x power; stat changes to the Special Attack stat have no effect."
  },
  berrynice: {
    onModifySpe(spe, pokemon) {
      if (["sunnyday", "desolateland"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(2);
      }
    },
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    onResidual(pokemon) {
      if (this.field.isWeather(["sunnyday", "desolateland"]) || this.randomChance(1, 2)) {
        if (pokemon.hp && !pokemon.item && this.dex.items.get(pokemon.lastItem).isBerry) {
          pokemon.setItem(pokemon.lastItem);
          pokemon.lastItem = "";
          this.add("-item", pokemon, pokemon.getItem(), "[from] ability: Berry Nice");
        }
      }
    },
    onTryHeal(damage, target, source, effect) {
      if (!effect)
        return;
      if (effect.id === "berryjuice" || effect.id === "leftovers") {
        this.add("-activate", target, "ability: Ripen");
      }
      if (effect.isBerry)
        return this.chainModify(2);
    },
    onBoost(boost, target, source, effect) {
      if (effect && effect.isBerry) {
        let b;
        for (b in boost) {
          boost[b] *= 2;
        }
      }
    },
    onSourceModifyDamagePriority: -1,
    onSourceModifyDamage(damage, source, target, move) {
      if (target.abilityData.berryWeaken) {
        return this.chainModify(0.5);
      }
    },
    onTryEatItemPriority: -1,
    onTryEatItem(item, pokemon) {
      this.add("-activate", pokemon, "ability: Berry Nice");
    },
    onEatItem(item, pokemon) {
      const weakenBerries = [
        "Babiri Berry",
        "Charti Berry",
        "Chilan Berry",
        "Chople Berry",
        "Coba Berry",
        "Colbur Berry",
        "Haban Berry",
        "Kasib Berry",
        "Kebia Berry",
        "Occa Berry",
        "Passho Berry",
        "Payapa Berry",
        "Rindo Berry",
        "Roseli Berry",
        "Shuca Berry",
        "Tanga Berry",
        "Wacan Berry",
        "Yache Berry"
      ];
      pokemon.abilityData.berryWeaken = weakenBerries.includes(item.name);
    },
    name: "Berry Nice",
    shortDesc: "Chlorophyll + Harvest + Berries eaten by this Pokemon have their effect doubled."
  },
  swiftretreat: {
    onEmergencyExit(target) {
      if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag)
        return;
      for (const side of this.sides) {
        for (const active of side.active) {
          active.switchFlag = false;
        }
      }
      target.switchFlag = true;
      this.add("-activate", target, "ability: Swift Retreat");
    },
    onModifySpe(spe, pokemon) {
      if (["raindance", "primordialsea"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(2);
      }
    },
    name: "Swift Retreat",
    shortDesc: "Emergency Exit + Swift Swim."
  },
  magneticwaves: {
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
      if (move.type === "Normal" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== "Status")) {
        move.type = "Electric";
        move.galvanizeBoosted = true;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.galvanizeBoosted)
        return this.chainModify([4915, 4096]);
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Magnetic Waves");
        return null;
      }
    },
    name: "Magnetic Waves",
    shortDesc: "Galvanize + Levitate."
  },
  fridge: {
    onTryHeal(damage, target, source, effect) {
      if (!effect)
        return;
      if (effect.id === "berryjuice" || effect.id === "leftovers") {
        this.add("-activate", target, "ability: Fridge");
      }
      if (effect.isBerry)
        return this.chainModify(2);
    },
    onBoost(boost, target, source, effect) {
      if (effect && effect.isBerry) {
        let b;
        for (b in boost) {
          boost[b] *= 2;
        }
      }
    },
    onSourceModifyDamagePriority: -1,
    onSourceModifyDamage(damage, source, target, move) {
      if (target.abilityData.berryWeaken) {
        return this.chainModify(0.5);
      }
    },
    onTryEatItemPriority: -1,
    onTryEatItem(item, pokemon) {
      this.add("-activate", pokemon, "ability: Fridge");
    },
    onEatItem(item, pokemon) {
      const weakenBerries = [
        "Babiri Berry",
        "Charti Berry",
        "Chilan Berry",
        "Chople Berry",
        "Coba Berry",
        "Colbur Berry",
        "Haban Berry",
        "Kasib Berry",
        "Kebia Berry",
        "Occa Berry",
        "Passho Berry",
        "Payapa Berry",
        "Rindo Berry",
        "Roseli Berry",
        "Shuca Berry",
        "Tanga Berry",
        "Wacan Berry",
        "Yache Berry"
      ];
      pokemon.abilityData.berryWeaken = weakenBerries.includes(item.name);
    },
    onSourceBasePowerPriority: 18,
    onSourceBasePower(basePower, attacker, defender, move) {
      if (move.type === "Fire") {
        return this.chainModify(0.5);
      }
    },
    onDamage(damage, target, source, effect) {
      if (effect && effect.id === "brn") {
        return damage / 2;
      }
    },
    name: "Fridge",
    shortDesc: "Ripen + Heatproof."
  },
  monarchyenforcement: {
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
    onBasePower(basePower, pokemon, target, move) {
      if (move.hasSheerForce)
        return this.chainModify([5325, 4096]);
    },
    onFoeTryMove(target, source, move) {
      const targetAllExceptions = ["perishsong", "flowershield", "rototiller"];
      if (move.target === "foeSide" || move.target === "all" && !targetAllExceptions.includes(move.id)) {
        return;
      }
      const dazzlingHolder = this.effectState.target;
      if ((source.side === dazzlingHolder.side || move.target === "all") && move.priority > 0.1) {
        this.attrLastMove("[still]");
        this.add("cant", dazzlingHolder, "ability: Monarchy Enforcement", move, "[of] " + target);
        return false;
      }
    },
    name: "Monarchy Enforcement",
    shortDesc: "Sheer Force + Queenly Majesty."
  },
  yakultian: {
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.boost({ atk: length }, source);
      }
    },
    onStart(source) {
      this.field.setWeather("hail");
    },
    name: "Yakultian",
    shortDesc: "Chilling Neigh + Snow Warning."
  },
  acceleration: {
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    onResidual(pokemon) {
      if (pokemon.activeTurns) {
        this.boost({ spe: 1 });
      }
    },
    onAfterEachBoost(boost, target, source, effect) {
      if (!source || target.side === source.side) {
        if (effect.id === "stickyweb") {
          this.hint("Court Change Sticky Web counts as lowering your own Speed, and Acceleration only affects stats lowered by foes.", true, source.side);
        }
        return;
      }
      let statsLowered = false;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          statsLowered = true;
        }
      }
      if (statsLowered) {
        this.add("-ability", target, "Acceleration");
        this.boost({ spe: 2 }, target, target, null, true);
      }
    },
    name: "Acceleration",
    shortDesc: "This Pokemon's Speed goes up by 1 stage at the end of every turn. +2 Speed when a stat is lowered."
  },
  extremophile: {
    onModifySpe(spe, pokemon) {
      if (["sunnyday", "desolateland", "hail"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(2);
      }
    },
    name: "Extremophile",
    shortDesc: "Slush Rush + Chlorophyll."
  },
  hivemind: {
    onBoost(boost, target, source, effect) {
      if (source && target === source)
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
        this.add("-fail", target, "unboost", "[from] ability: Hivemind", "[of] " + target);
      }
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Bug") {
        this.add("-immune", target, "[from] ability: Hivemind");
        return null;
      }
    },
    name: "Hivemind",
    shortDesc: "This Pokemon is immune to having its stats lowered and Bug-type moves."
  },
  anatidaephobia: {
    onModifyMovePriority: -5,
    onModifyMove(move) {
      if (!move.ignoreImmunity)
        move.ignoreImmunity = {};
      if (move.ignoreImmunity !== true) {
        move.ignoreImmunity["Fighting"] = true;
        move.ignoreImmunity["Normal"] = true;
      }
      if (!move || !move.type === "Normal" && !move.type === "Fighting" || move.target === "self")
        return;
      if (!move.secondaries) {
        move.secondaries = [];
      }
      move.secondaries.push({
        chance: 100,
        volatileStatus: "perishsong",
        ability: this.dex.abilities.get("anatidaephobia")
      });
    },
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate" || effect.id === "scarilyadorable" || effect.id === "metalhead" || effect.id === "creepy" || effect.id === "ragingrapids") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Anatidaephobia");
      }
      if (effect.id === "peckingorder") {
        delete boost.def;
        this.add("-immune", target, "[from] ability: Anatidaephobia");
      }
      if (effect.id === "debilitate") {
        delete boost.spa;
        this.add("-immune", target, "[from] ability: Anatidaephobia");
      }
      if (effect.id === "sinkorswim" || effect.id === "scarilyadorable") {
        delete boost.spe;
        this.add("-immune", target, "[from] ability: Anatidaephobia");
      }
    },
    name: "Anatidaephobia",
    shortDesc: "This Pokemon's Normal and Fighting-type moves can hit Ghost-types and inflict the target with the Perish Song effect."
  },
  permafrost: {
    onSourceModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).typeMod > 0) {
        this.debug("Permafrost neutralize");
        return this.chainModify(0.75);
      }
    },
    onDamagingHit(damage, target, source, move) {
      if (target.getMoveHitData(move).typeMod > 0) {
        target.heal(target.baseMaxhp / 16);
        this.add("-heal", target, target.getHealth, "[from] ability: Permafrost");
      }
    },
    name: "Permafrost",
    shortDesc: "When hit by a super effective move, that move deals 3/4 damage and this Pokemon gets healed by 1/16 of its max HP."
  },
  grassystream: {
    onStart(source) {
      this.field.setTerrain("grassyterrain");
    },
    onModifyDefPriority: 6,
    onModifyDef(pokemon) {
      if (this.field.isWeather("sandstorm"))
        return this.chainModify(1.5);
    },
    name: "Grassy Stream",
    shortDesc: "Sets Grassy Terrain upon switch-in. 1.5x Def under Sandstorm."
  },
  /*
  	electrolytes: {
  		onResidualOrder: 5,
  		onResidualSubOrder: 4,
  		onResidual(pokemon, length) {
  			if (pokemon.status) {
  				this.debug('electrolytes');
  				this.add('-activate', pokemon, 'ability: Electrolytes');
  				pokemon.cureStatus();
  				let statName = 'atk';
  				let bestStat = 0;
  				let s: StatNameExceptHP;
  				for (s in pokemon.storedStats) {
  					if (pokemon.storedStats[s] > bestStat) {
  						statName = s;
  						bestStat = pokemon.storedStats[s];
  					}
  				}
  				this.boost({[statName]: length}, pokemon);
  			}
  		},
  		name: "Electrolytes",
  		shortDesc: "When this Pokemon is statused by an opponent, the status is cured at the end of the turn and this Pokemon gains +1 to their highest non-HP stat.",
  	},
  */
  electrolytes: {
    onResidualOrder: 5,
    onResidualSubOrder: 4,
    onResidual(pokemon) {
      if (pokemon.hp && pokemon.status) {
        if (!pokemon.statusData.source || !pokemon.statusData.source.side || pokemon.statusData.source.side === pokemon.side)
          return;
        this.debug("Electrolytes");
        let statName = "atk";
        let bestStat = 0;
        let s;
        for (s in pokemon.storedStats) {
          if (pokemon.storedStats[s] > bestStat) {
            statName = s;
            bestStat = pokemon.storedStats[s];
          }
        }
        this.boost({ [statName]: 1 }, pokemon);
        pokemon.cureStatus();
      }
    },
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        let statName = "atk";
        let bestStat = 0;
        let s;
        for (s in source.storedStats) {
          if (source.storedStats[s] > bestStat) {
            statName = s;
            bestStat = source.storedStats[s];
          }
        }
        this.boost({ [statName]: length }, source);
      }
    },
    name: "Electrolytes",
    rating: 4,
    shortDesc: "When this Pokemon is statused by or KOes an opponent, the status is cured at the end of the turn and this Pokemon gains +1 to their highest non-HP stat."
  },
  workability: {
    onModifyMove(move) {
      move.stab = 2;
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Steel") {
        this.debug("Workability boost");
        return this.chainModify(2);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Steel") {
        this.debug("Workability boost");
        return this.chainModify(2);
      }
    },
    name: "Workability",
    shortDesc: "This Pokemon's STAB boost is 2x instead of 1.5x. Steel-type moves are considered STAB for this Pokemon"
  },
  deusexmachina: {
    onStart(pokemon) {
      if (pokemon.baseSpecies.baseSpecies !== "Wishirupti" || pokemon.level < 20 || pokemon.transformed)
        return;
      if (pokemon.hp > pokemon.maxhp / 4) {
        if (pokemon.species.id === "wishirupti") {
          pokemon.formeChange("Wishirupti-School");
        }
      } else {
        if (pokemon.species.id === "wishiruptischool") {
          pokemon.formeChange("Wishirupti");
          pokemon.setBoost({ atk: 6 });
          this.add("-setboost", pokemon, "atk", 12, "[from] ability: Deus Ex Machina");
        }
      }
    },
    onResidualOrder: 27,
    onResidual(pokemon) {
      if (pokemon.baseSpecies.baseSpecies !== "Wishirupti" || pokemon.level < 20 || pokemon.transformed || !pokemon.hp)
        return;
      if (pokemon.hp > pokemon.maxhp / 4) {
        if (pokemon.species.id === "wishirupti") {
          pokemon.formeChange("Wishirupti-School");
        }
      } else {
        if (pokemon.species.id === "wishiruptischool") {
          pokemon.formeChange("Wishirupti");
          pokemon.setBoost({ atk: 6 });
          this.add("-setboost", pokemon, "atk", 12, "[from] ability: Deus Ex Machina");
        }
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
    name: "Deus Ex Machina",
    shortDesc: "Schooling effects. When this Pokemon enters Solo form, it gains +12 Attack."
  },
  neutralizinggas: {
    // Ability suppression implemented in sim/pokemon.ts:Pokemon#ignoringAbility
    // TODO Will abilities that already started start again? (Intimidate seems like a good test case)
    onPreStart(pokemon) {
      this.add("-ability", pokemon, "Neutralizing Gas");
      pokemon.abilityData.ending = false;
      for (const target of this.getAllActive()) {
        if (target.illusion) {
          this.singleEvent("End", this.dex.abilities.get("Illusion"), target.abilityData, target, pokemon, "neutralizinggas");
        }
        if (target.volatiles["slowstart"]) {
          delete target.volatiles["slowstart"];
          this.add("-end", target, "Slow Start", "[silent]");
        }
      }
    },
    onSourceAfterFaint(length, target, source, effect) {
      if (source.species.baseSpecies !== "Weezlord-Galar")
        return;
      if (effect && effect.effectType === "Move") {
        let statName = "atk";
        let bestStat = 0;
        let s;
        for (s in source.storedStats) {
          if (source.storedStats[s] > bestStat) {
            statName = s;
            bestStat = source.storedStats[s];
          }
        }
        this.boost({ [statName]: length }, source);
      }
    },
    onEnd(source) {
      source.abilityData.ending = true;
      for (const pokemon of this.getAllActive()) {
        if (pokemon !== source) {
          this.singleEvent("Start", pokemon.getAbility(), pokemon.abilityData, pokemon);
        }
      }
    },
    name: "Neutralizing Gas",
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
    shortDesc: "While this Pokemon is active, Abilities have no effect. Weezlord: +1 to highest stat upon KO",
    rating: 5,
    num: 256
  },
  undercut: {
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
      this.chainModify(0.75);
      const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
      this.debug("Base Power: " + basePowerAfterMultiplier);
      if (basePowerAfterMultiplier <= 60) {
        this.debug("Technician boost");
        return this.chainModify(1.875);
      }
    },
    name: "Undercut",
    shortDesc: "This Pokemon's moves of 80 power or less have 1.40625x power, but its moves higher than 80 power have 0.75x power."
  },
  heatgenerator: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Fire" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Heat Generator");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Fire" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Heat Generator");
        return this.chainModify(1.5);
      }
    },
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    },
    name: "Heat Generator",
    shortDesc: "Regenerator + Blaze"
  },
  flamingskin: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Water") {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Flaming Skin");
        }
        return null;
      }
    },
    onFoeBasePowerPriority: 17,
    onFoeBasePower(basePower, attacker, defender, move) {
      if (this.effectState.target !== defender)
        return;
      if (move.type === "Fire") {
        return this.chainModify(1.25);
      }
    },
    onWeather(target, source, effect) {
      if (target.hasItem("utilityumbrella"))
        return;
      if (effect.id === "raindance" || effect.id === "primordialsea") {
        this.heal(target.baseMaxhp / 8);
      } else if (effect.id === "sunnyday" || effect.id === "desolateland") {
        this.damage(target.baseMaxhp / 8, target, target);
      }
    },
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        if (this.randomChance(3, 10)) {
          source.trySetStatus("brn", target);
        }
      }
    },
    name: "Flaming Skin",
    shortDesc: "Dry Skin + Flame Body"
  },
  etativel: {
    onBoost(boost, target, source, effect) {
      if (effect && effect.id === "zpower")
        return;
      let i;
      for (i in boost) {
        boost[i] *= -1;
      }
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Etativel");
        return null;
      }
    },
    name: "Etativel",
    shortDesc: "Contrary + Levitate"
  },
  clutchfactor: {
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.category === "Special" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Clutch Factor boost boost");
        return this.chainModify(1.5);
      }
    },
    name: "Clutch Factor",
    shortDesc: "Special Attacks are boosted by 1.5x at 1/3 HP or less."
  },
  stickysurge: {
    onTakeItem(item, pokemon, source) {
      if (this.suppressingAttackEvents(pokemon) || !pokemon.hp || pokemon.item === "stickybarb")
        return;
      if (!this.activeMove)
        throw new Error("Battle.activeMove is null");
      if (source && source !== pokemon || this.activeMove.id === "knockoff") {
        this.add("-activate", pokemon, "ability: Sticky Surge");
        return false;
      }
    },
    onStart(source) {
      this.field.setTerrain("electricterrain");
    },
    name: "Sticky Surge",
    shortDesc: "Sticky Hold + Electric Surge."
  },
  selfsacrifice: {
    onFaint(pokemon) {
      pokemon.side.addSlotCondition(pokemon, "selfsacrifice");
    },
    condition: {
      onStart(pokemon, source) {
        this.effectState.hp = source.maxhp / 4;
      },
      onSwap(target) {
        if (!target.fainted) {
          const damage = this.heal(this.effectState.hp, target, target);
          if (damage)
            this.add("-heal", target, target.getHealth, "[from] ability: Self Sacrifice", "[of] " + this.effectState.source);
          target.side.removeSlotCondition(target, "selfsacrifice");
        }
      }
    },
    name: "Self Sacrifice",
    shortDesc: "When this Pokemon faints, the replacement is healed by 1/4 of this Pokemon's max HP"
  },
  lighthearted: {
    onModifyPriority(priority, pokemon, target, move) {
      if (move?.category === "Status") {
        move.pranksterBoosted = true;
        return priority + 1;
      }
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Lighthearted");
        return null;
      }
    },
    name: "Lighthearted",
    shortDesc: "Prankster + Levitate"
  },
  tigerpit: {
    onFoeTrapPokemon(pokemon) {
      if (!pokemon.isAdjacent(this.effectState.target))
        return;
      if (pokemon.isGrounded() || !pokemon.hasAbility("feelnopain") || !pokemon.hasAbility("magneticwaves") || !pokemon.hasAbility("stickyfloat") || !pokemon.hasAbility("etativel") || !pokemon.hasAbility("lighthearted") || !pokemon.hasAbility("leviflame") || !pokemon.hasAbility("levitability") || !pokemon.hasAbility("feelsomepain") || !pokemon.hasAbility("aerialbreak") || !pokemon.hasAbility("floatguise") || !pokemon.hasAbility("clearlyfloating") || !pokemon.hasAbility("hoverboard") || !pokemon.hasAbility("levimetal") || !pokemon.hasAbility("levistatic")) {
        pokemon.tryTrap(true);
      }
    },
    onFoeMaybeTrapPokemon(pokemon, source) {
      if (!source)
        source = this.effectState.target;
      if (!source || !pokemon.isAdjacent(source))
        return;
      if (pokemon.isGrounded(!pokemon.knownType) || !pokemon.hasAbility("feelnopain") || !pokemon.hasAbility("magneticwaves") || !pokemon.hasAbility("stickyfloat") || !pokemon.hasAbility("etativel") || !pokemon.hasAbility("lighthearted") || !pokemon.hasAbility("leviflame") || !pokemon.hasAbility("levitability") || !pokemon.hasAbility("feelsomepain") || !pokemon.hasAbility("aerialbreak") || !pokemon.hasAbility("floatguise") || !pokemon.hasAbility("clearlyfloating") || !pokemon.hasAbility("hoverboard") || !pokemon.hasAbility("levimetal") || !pokemon.hasAbility("levistatic")) {
        pokemon.maybeTrapped = true;
      }
    },
    onSourceModifyAccuracyPriority: 7,
    onSourceModifyAccuracy(accuracy, target, source, move) {
      if (!target.isGrounded() || target.hasAbility("feelnopain") || target.hasAbility("magneticwaves") || target.hasAbility("stickyfloat") || target.hasAbility("etativel") || target.hasAbility("lighthearted") || target.hasAbility("leviflame") || target.hasAbility("levitability") || target.hasAbility("feelsomepain") || target.hasAbility("aerialbreak") || target.hasAbility("floatguise") || target.hasAbility("clearlyfloating") || target.hasAbility("hoverboard") || target.hasAbility("levimetal") || target.hasAbility("levistatic")) {
        return accuracy * 0.8;
      }
    },
    name: "Tiger Pit",
    shortDesc: "(Bugged) Prevents grounded foes from switching. 0.8x Accuracy against airborne foes."
  },
  vengefulshift: {
    onResidualOrder: 5,
    onResidualSubOrder: 4,
    onResidual(pokemon, source) {
      if (pokemon.status) {
        if (!source || source === pokemon)
          return;
        this.add("-activate", pokemon, "ability: Vengeful Shift");
        this.useMove("Psycho Shift", pokemon);
      }
    },
    name: "Vengeful Shift",
    shortDesc: "(Not coded) If statused by a foe, this Pokemon attempts to transfer its status to a foe at the end of each turn."
  },
  toughskin: {
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        this.damage(source.baseMaxhp / 8, source, target);
      }
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["contact"]) {
        return this.chainModify(1.2);
      }
    },
    name: "Tough Skin",
    shortDesc: "Foes making contact with this Pokemon lose 1/8 of their max HP. This Pokemon's contact moves have 1.2x power."
  },
  hydraulicpress: {
    onModifyWeight(weighthg) {
      return this.trunc(weighthg / 2);
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
    onBasePower(basePower, pokemon, target, move) {
      if (move.hasSheerForce)
        return this.chainModify([5325, 4096]);
    },
    name: "Hydraulic Press",
    shortDesc: "Sheer Force + Light Metal."
  },
  parroting: {
    // implemented in runMove in scripts.js
    name: "Parroting",
    shortDesc: "After another Pokemon uses a status move, this Pokemon uses the same move."
  },
  /*
  	lifedrain: {
  		onPrepareHit(source, target, move, basePower) {
  			const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
  			this.debug('Base Power: ' + basePowerAfterMultiplier);
  			if (basePowerAfterMultiplier <= 60) {
  				this.heal(source.baseMaxhp / 8);
  			}
  		},
  		onBasePowerPriority: 30,
  		onBasePower(basePower, attacker, defender, move) {
  			const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
  			this.debug('Base Power: ' + basePowerAfterMultiplier);
  			if (basePowerAfterMultiplier <= 60) {
  				this.debug('Life Drain boost');
  				return this.chainModify(1.5);
  			}
  		},
  		onDamagePriority: 1,
  		onDamage(damage, target, source, effect) {
  			if (effect.id === 'psn' || effect.id === 'tox') {
  				return false;
  			}
  		},
  		name: "Life Drain",
  		shortDesc: "Moves with ≤60 BP have 1.5x power and heal this Pokemon by 12.5%; Immune to poison damage.",
  	},
  */
  lifedrain: {
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
      const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
      this.debug("Base Power: " + basePowerAfterMultiplier);
      if (basePowerAfterMultiplier <= 60) {
        this.debug("Life Drain boost");
        move.lifeDrain = true;
        return this.chainModify(1.5);
      }
    },
    onDamagePriority: 1,
    onDamage(damage, target, source, effect) {
      if (effect.id === "psn" || effect.id === "tox") {
        return false;
      }
    },
    onAfterMove(target, source, move) {
      if (move.lifeDrain)
        this.heal(target.baseMaxhp / 8);
    },
    name: "Life Drain",
    shortDesc: "Moves with \u226460 BP have 1.5x power and heal this Pokemon by 12.5%; Immune to poison damage."
  },
  metalhead: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.side.foe.active) {
        if (!target || !target.isAdjacent(pokemon))
          continue;
        if (!activated) {
          this.add("-ability", pokemon, "Metalhead", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ atk: -1 }, target, pokemon, null, true);
        }
      }
    },
    onModifyWeightPriority: 1,
    onModifyWeight(weighthg) {
      return weighthg * 2;
    },
    name: "Metalhead",
    shortDesc: "Intimidate + Heavy Metal"
  },
  absorbant: {
    onTryHit(target, source, move) {
      if (target !== source && (move.type === "Water" || move.type === "Ground")) {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Absorbant");
        }
        return null;
      }
    },
    name: "Absorbant",
    shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Water or Ground moves; Water & Ground immunity."
  },
  waterpressure: {
    onStart(pokemon) {
      this.add("-ability", pokemon, "Water Pressure");
    },
    onDeductPP(target, source) {
      if (target.side === source.side)
        return;
      return 1;
    },
    onDamagingHit(damage, target, source, move) {
      if (move.type === "Water") {
        this.boost({ def: 2 });
      }
    },
    name: "Water Pressure",
    shortDesc: "Pressure + Water Compaction"
  },
  musclemass: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk) {
      return this.modify(atk, 1.5);
    },
    onModifySpe(spe, pokemon) {
      return this.chainModify(0.67);
    },
    name: "Muscle Mass",
    shortDesc: "This Pokemon has 1.5x Attack and 0.67x Speed"
  },
  idiotsavant: {
    onStart(pokemon) {
      let totaldef = 0;
      let totalspd = 0;
      for (const target of pokemon.side.foe.active) {
        if (!target || target.fainted)
          continue;
        totaldef += target.getStat("def", false, true);
        totalspd += target.getStat("spd", false, true);
      }
      if (totaldef && totaldef >= totalspd) {
        this.boost({ spa: 1 });
      } else if (totalspd) {
        this.boost({ atk: 1 });
      }
    },
    onUpdate(pokemon) {
      if (pokemon.volatiles["confusion"]) {
        this.add("-activate", pokemon, "ability: Idiot Savant");
        pokemon.removeVolatile("confusion");
      }
    },
    onTryAddVolatile(status, pokemon) {
      if (status.id === "confusion")
        return null;
    },
    onHit(target, source, move) {
      if (move?.volatileStatus === "confusion") {
        this.add("-immune", target, "confusion", "[from] ability: Idiot Savant");
      }
    },
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate" || effect.id === "scarilyadorable" || effect.id === "metalhead" || effect.id === "creepy" || effect.id === "ragingrapids") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Idiot Savant");
      }
      if (effect.id === "peckingorder") {
        delete boost.def;
        this.add("-immune", target, "[from] ability: Idiot Savant");
      }
      if (effect.id === "debilitate") {
        delete boost.spa;
        this.add("-immune", target, "[from] ability: Idiot Savant");
      }
      if (effect.id === "sinkorswim" || effect.id === "scarilyadorable") {
        delete boost.spe;
        this.add("-immune", target, "[from] ability: Idiot Savant");
      }
    },
    name: "Idiot Savant",
    shortDesc: "Own Tempo + Download"
  },
  rebootsystem: {
    onSwitchOut(pokemon) {
      pokemon.heal(pokemon.baseMaxhp / 3);
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
    name: "Reboot System",
    shortDesc: "RKS System + Regenerator"
  },
  gracefulhealing: {
    onAfterMove(target, source, move) {
      if (move.secondaries)
        this.heal(target.baseMaxhp / 8);
    },
    name: "Graceful Healing",
    shortDesc: "Restores 12.5% max HP when using a move with secondary effects."
  },
  herbivore: {
    onTryHitPriority: 1,
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Grass") {
        if (!this.boost({ atk: 2 })) {
          this.add("-immune", target, "[from] ability: Herbivore");
        }
        return null;
      }
    },
    onAllyTryHitSide(target, source, move) {
      if (target === this.effectState.target || target.side !== source.side)
        return;
      if (move.type === "Grass") {
        this.boost({ atk: 2 }, this.effectState.target);
      }
    },
    name: "Herbivore",
    shortDesc: "This Pokemon's Attack is raised 2 stage if hit by a Grass move; Grass immunity."
  },
  diamondcore: {
    onStart(pokemon) {
      this.add("-ability", pokemon, "Diamond Core");
    },
    onDeductPP(target, source) {
      if (target.side === source.side)
        return;
      return 1;
    },
    onTryHit(pokemon, target, move) {
      if (move.ohko) {
        this.add("-immune", pokemon, "[from] ability: Diamond Core");
        return null;
      }
    },
    onDamagePriority: -100,
    onDamage(damage, target, source, effect) {
      if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === "Move") {
        this.add("-ability", target, "Diamond Core");
        return target.hp - 1;
      }
    },
    name: "Diamond Core",
    shortDesc: "Pressure + Sturdy"
  },
  combustion: {
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    onResidual(pokemon) {
      let combustion = null;
      let statDrop;
      for (statDrop in pokemon.boosts) {
        if (pokemon.boosts[statDrop] < 0)
          combustion = true;
      }
      if (pokemon.activeTurns && !combustion) {
        this.boost({ spe: 1 });
      }
    },
    name: "Combustion",
    shortDesc: "If this Pokemon has no negative stat changes, +1 Speed at the end of the turn."
  },
  scouttyping: {
    onStart(pokemon) {
      for (const target of pokemon.side.foe.active) {
        if (!target || target.fainted)
          continue;
        if (target.item) {
          this.add("-item", target, target.getItem().name, "[from] ability: Scout Typing", "[of] " + pokemon, "[identify]");
        }
      }
    },
    onPrepareHit(source, target, move) {
      if (move.hasBounced)
        return;
      const type = move.type;
      if (type && type !== "???" && source.getTypes().join() !== type) {
        if (!source.setType(type))
          return;
        this.add("-start", source, "typechange", type, "[from] ability: Scout Typing");
      }
    },
    name: "Scout Typing",
    shortDesc: "Frisk + Protean"
  },
  gutsguard: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
      if (pokemon.status) {
        return this.chainModify(1.5);
      }
    },
    onModifyDefPriority: 6,
    onModifyDef(def, pokemon) {
      if (pokemon.status) {
        return this.chainModify(1.25);
      }
    },
    name: "Guts Guard",
    shortDesc: "When statused, this Pokemon Attack is boosted 1.5x and it takes 0.75x damage."
  },
  anesthesia: {
    onAnyModifyBoost(boosts, pokemon) {
      const unawareUser = this.effectState.target;
      if (unawareUser === pokemon)
        return;
      if (unawareUser === this.activePokemon && pokemon === this.activeTarget) {
        boosts["def"] = 0;
        boosts["spd"] = 0;
        boosts["evasion"] = 0;
      }
      if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
        boosts["atk"] = 0;
        boosts["def"] = 0;
        boosts["spa"] = 0;
        boosts["accuracy"] = 0;
      }
    },
    onAllyTryAddVolatile(status, target, source, effect) {
      if (["attract", "disable", "encore", "healblock", "taunt", "torment"].includes(status.id)) {
        if (effect.effectType === "Move") {
          const effectHolder = this.effectState.target;
          this.add("-block", target, "ability: Anesthesia", "[of] " + effectHolder);
        }
        return null;
      }
    },
    name: "Anesthesia",
    shortDesc: "Aroma Veil + Unaware"
  },
  stabilizer: {
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
      const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
      this.debug("Base Power: " + basePowerAfterMultiplier);
      if (basePowerAfterMultiplier <= 60) {
        this.debug("Stabilizer boost");
        return this.chainModify(1.5);
      }
    },
    onDamagingHit(damage, target, source, move, basePower) {
      if (move.basePower <= 60) {
        this.boost({ spe: 1 });
      }
    },
    name: "Stabilizer",
    shortDesc: "Moves with \u226460 BP have 1.5x power. +1 Speed when hit by a move with \u226460 BP."
  },
  headtohead: {
    onDamage(damage, target, source, effect) {
      if (effect.id === "recoil") {
        if (!this.activeMove)
          throw new Error("Battle.activeMove is null");
        if (this.activeMove.id !== "struggle")
          return null;
      }
    },
    onTryHit(target, source, move) {
      if (move.target !== "self" && (move.recoil || move.hasCrashDamage)) {
        this.add("-immune", target, "[from] ability: Head-To-Head");
        return null;
      }
    },
    name: "Head-To-Head",
    shortDesc: "This Pokemon is immune to recoil and recoil moves."
  },
  clearlyfloating: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Clearly Floating");
        return null;
      }
    },
    onBoost(boost, target, source, effect) {
      if (source && target === source)
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
        this.add("-fail", target, "unboost", "[from] ability: Clearly Floating", "[of] " + target);
      }
    },
    name: "Clearly Floating",
    shortDesc: "Clear Body + Levitate"
  },
  slowmage: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
      if (pokemon.item) {
        return this.chainModify(0.5);
      }
    },
    onModifySpe(spe, pokemon) {
      if (pokemon.item) {
        return this.chainModify(0.5);
      }
    },
    name: "Slow Mage",
    shortDesc: "If this Pokemon is holding an item, its Attack and Speed are halved."
  },
  unseenmagic: {
    onTryHitPriority: 1,
    onTryHit(target, source, move) {
      if (target === source || move.hasBounced || !move.flags["reflectable"]) {
        return;
      }
      const newMove = this.dex.getActiveMove(move.id);
      newMove.hasBounced = true;
      newMove.pranksterBoosted = false;
      this.useMove(newMove, target, source);
      return null;
    },
    onAllyTryHitSide(target, source, move) {
      if (target.side === source.side || move.hasBounced || !move.flags["reflectable"]) {
        return;
      }
      const newMove = this.dex.getActiveMove(move.id);
      newMove.hasBounced = true;
      newMove.pranksterBoosted = false;
      this.useMove(newMove, this.effectState.target, source);
      return null;
    },
    condition: {
      duration: 1
    },
    onModifyMove(move) {
      if (move.flags["contact"])
        delete move.flags["protect"];
    },
    name: "Unseen Magic",
    shortDesc: "Magic Bounce + Unseen Fist"
  },
  gulprock: {
    onDamagingHit(damage, target, source, move) {
      if (target.transformed || target.isSemiInvulnerable())
        return;
      if (["cramotricitygulping", "cramotricitygorging"].includes(target.species.id)) {
        this.damage(source.baseMaxhp / 4, source, target);
        if (target.species.id === "cramotricitygulping") {
          this.boost({ def: -1 }, source, target, null, true);
        } else {
          source.trySetStatus("par", target, move);
        }
        target.formeChange("cramotricity", move);
      }
    },
    // The Dive part of this mechanic is implemented in Dive's `onTryMove` in moves.ts
    onSourceTryPrimaryHit(target, source, effect) {
      if (effect && effect.id === "surf" && source.hasAbility("gulprock") && source.species.name === "Cramotricity" && !source.transformed) {
        const forme = source.hp <= source.maxhp / 2 ? "cramotricitygorging" : "cramotricitygulping";
        source.formeChange(forme, effect);
      }
    },
    onBasePowerPriority: 8,
    onBasePower(basePower, attacker, defender, move) {
      if (move.name === "Surf" || move.name === "Dive") {
        return this.chainModify(1.3);
      }
    },
    onSourceModifyDamage(damage, source, target, move) {
      if (move.name === "Surf" || move.name === "Dive") {
        this.debug("Gulp Rock weaken");
        return this.chainModify(0.5);
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
    name: "Gulp Rock",
    shortDesc: "Gulp Missile + Surf & Dive deal 1.3x and this Pokemon takes 50% damage from Surf and Dive."
  },
  flyingraijin: {
    onModifyMove(move) {
      move.infiltrates = true;
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Electric") {
        if (!this.boost({ spa: 1 })) {
          this.add("-immune", target, "[from] ability: Flying Raijin");
        }
        return null;
      }
    },
    onAnyRedirectTarget(target, source, source2, move) {
      if (move.type !== "Electric" || ["firepledge", "grasspledge", "waterpledge"].includes(move.id))
        return;
      const redirectTarget = ["randomNormal", "adjacentFoe"].includes(move.target) ? "normal" : move.target;
      if (this.validTarget(this.effectState.target, source, redirectTarget)) {
        if (move.smartTarget)
          move.smartTarget = false;
        if (this.effectState.target !== target) {
          this.add("-activate", this.effectState.target, "ability: Flying Raijin");
        }
        return this.effectState.target;
      }
    },
    name: "Flying Raijin",
    shortDesc: "Infiltrator + Lightning Rod"
  },
  zenmode: {
    onResidualOrder: 27,
    onResidual(pokemon) {
      if (pokemon.baseSpecies.baseSpecies !== "Darmanitan-Prime" || pokemon.transformed) {
        return;
      }
      if (pokemon.hp <= pokemon.maxhp / 2 && !["Zen"].includes(pokemon.species.forme)) {
        pokemon.addVolatile("zenmode");
      } else if (pokemon.hp > pokemon.maxhp / 2 && ["Zen"].includes(pokemon.species.forme)) {
        pokemon.addVolatile("zenmode");
        pokemon.removeVolatile("zenmode");
      }
    },
    onEnd(pokemon) {
      if (!pokemon.volatiles["zenmode"] || !pokemon.hp)
        return;
      pokemon.transformed = false;
      delete pokemon.volatiles["zenmode"];
      if (pokemon.species.baseSpecies === "Darmanitan-Prime" && pokemon.species.battleOnly) {
        pokemon.formeChange(pokemon.species.battleOnly, this.effect, false, "[silent]");
      }
    },
    condition: {
      onStart(pokemon) {
        if (!pokemon.species.name.includes("Galar")) {
          if (pokemon.species.id !== "darmanitanprimezen")
            pokemon.formeChange("Darmanitan-Prime-Zen");
        }
      },
      onEnd(pokemon) {
        if (["Zen"].includes(pokemon.species.forme)) {
          pokemon.formeChange(pokemon.species.battleOnly);
        }
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
    name: "Zen Mode",
    rating: 0,
    num: 161
  },
  exoskeleton: {
    onUpdate(pokemon) {
      if (pokemon.status === "psn" || pokemon.status === "tox") {
        this.add("-activate", pokemon, "ability: Exoskeleton");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "psn" && status.id !== "tox")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Exoskeleton");
      }
      return false;
    },
    onStart(pokemon) {
      this.add("-ability", pokemon, "Exoskeleton");
      this.add("-message", `Pingar breaks the mold!`);
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    },
    name: "Exoskeleton",
    shortDesc: "Mold Breaker + Immunity"
  },
  bulletpecks: {
    onTryHit(pokemon, target, move) {
      if (move.flags["bullet"] || move.name === "Crunch" || move.name === "Crush Claw" || move.name === "Fire Lash" || move.name === "Grav Apple" || move.name === "Iron Tail" || move.name === "Leer" || move.name === "Liquidation" || move.name === "Octolock" || move.name === "Razor Shell" || move.name === "Rock Smash" || move.name === "Screech" || move.name === "Secret Power" || move.name === "Shadow Bone" || move.name === "Tail Whip" || move.name === "Thunderous Kick" || move.name === "Tickle") {
        this.add("-immune", pokemon, "[from] ability: Bulletpecks");
        return null;
      }
    },
    name: "Bulletpecks",
    shortDesc: "This Pokemon is immune to ballistic moves and moves that lower Defense."
  },
  floatguise: {
    onDamagePriority: 1,
    onDamage(damage, target, source, effect) {
      if (effect && effect.effectType === "Move" && ["mimikyu", "mimikyutotem", "rotokyu"].includes(target.species.id) && !target.transformed) {
        this.add("-activate", target, "ability: Float Guise");
        this.effectState.busted = true;
        return 0;
      }
    },
    onCriticalHit(target, source, move) {
      if (!target)
        return;
      if (!["mimikyu", "rotokyu"].includes(target.species.id) || target.transformed) {
        return;
      }
      const hitSub = target.volatiles["substitute"] && !move.flags["authentic"] && !(move.infiltrates && this.gen >= 6);
      if (hitSub)
        return;
      if (!target.runImmunity(move.type))
        return;
      return false;
    },
    onEffectiveness(typeMod, target, type, move) {
      if (!target)
        return;
      if (!["mimikyu", "rotokyu"].includes(target.species.id) || target.transformed) {
        return;
      }
      const hitSub = target.volatiles["substitute"] && !move.flags["authentic"] && !(move.infiltrates && this.gen >= 6);
      if (hitSub)
        return;
      if (!target.runImmunity(move.type))
        return;
      return 0;
    },
    onUpdate(pokemon) {
      if (["mimikyu", "rotokyu"].includes(pokemon.species.id) && this.effectState.busted) {
        const speciesid = pokemon.species.id === "rotokyu" ? "Rotokyu-Busted" : "Mimikyu-Busted";
        pokemon.formeChange(speciesid, this.effect, true);
        this.damage(pokemon.baseMaxhp / 8, pokemon, pokemon, this.dex.species.get(speciesid));
      }
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Float Guise");
        return null;
      }
    },
    name: "Float Guise",
    shortDesc: "Disguise + Levitate"
  },
  ragingrapids: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.side.foe.active) {
        if (!target || !target.isAdjacent(pokemon))
          continue;
        if (!activated) {
          this.add("-ability", pokemon, "Raging Rapids", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ atk: -1 }, target, pokemon, null, true);
        }
      }
    },
    onAfterMoveSecondary(target, source, move) {
      if (!source || !target.hp || !move.totalDamage)
        return;
      const lastAttackedBy = target.getLastAttackedBy();
      if (!lastAttackedBy)
        return;
      const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
      if (target.hp <= target.maxhp / 3 && target.hp + damage > target.maxhp / 3) {
        this.boost({ atk: -1 }, source, target, null, true);
      }
    },
    name: "Raging Rapids",
    shortDesc: "Lowers the foe's Attack by 1 on switch-in and when this Pokemon falls under 1/3 max HP."
  },
  ultrapresto: {
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        let statName = "atk";
        let bestStat = 0;
        let s;
        for (s in source.storedStats) {
          if (source.storedStats[s] > bestStat) {
            statName = s;
            bestStat = source.storedStats[s];
          }
        }
        this.boost({ [statName]: length }, source);
      }
    },
    onSourceHit(target, source, move) {
      if (!move || !target)
        return;
      if (target !== source && move.category !== "Status") {
        if (source.item || source.volatiles["gem"] || move.id === "fling")
          return;
        const yourItem = target.takeItem(source);
        if (!yourItem)
          return;
        if (!source.setItem(yourItem)) {
          target.item = yourItem.id;
          return;
        }
        this.add("-item", source, yourItem, "[from] ability: Ultra Presto", "[of] " + target);
      }
    },
    name: "Ultra Presto",
    shortDesc: "Magician + Beast Boost"
  },
  undying: {
    onAfterMoveSecondary(target, source, move) {
      if (!source || source === target || !target.hp || !move.totalDamage)
        return;
      const lastAttackedBy = target.getLastAttackedBy();
      if (!lastAttackedBy)
        return;
      const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
      if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
        this.boost({ spa: 1 });
        this.heal(target.baseMaxhp / 3);
      }
    },
    name: "Undying",
    shortDesc: "When this Pokemon falls below 50% HP from an attack, it gains +1 SpA and heals 33% of its maximum HP."
  },
  aerialbreak: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Aerial Break");
        return null;
      }
    },
    onStart(pokemon) {
      this.add("-ability", pokemon, "Aerial Break");
      this.add("-message", `Vikadrill controls the skies!`);
    },
    name: "Aerial Break",
    shortDesc: "This Pokemon is immune to Ground-type moves and ignores ability-based Ground immunities"
  },
  charybdis: {
    onModifySpAPriority: 5,
    onModifySpA(spa) {
      return this.chainModify(1.5);
    },
    name: "Charybdis",
    shortDesc: "This Pokemon's Special Attack is 1.5x."
  },
  frozendish: {
    onPrepareHit(source, target, move) {
      if (source.hasType(move.type)) {
        this.heal(source.baseMaxhp / 16);
      }
    },
    onModifyMove(move) {
      move.stab = 2;
    },
    name: "Frozen Dish",
    shortDesc: "This Pokemon's STAB bonus is 2x instead of 1.5x. Heals 1/16 of its max HP when using a STAB move."
  },
  speedbreak: {
    name: "Speed Break",
    onStart(pokemon) {
      this.add("-ability", pokemon, "Speed Break");
      this.add("-message", `Changes to the Speed stat are inverted!`);
    },
    onAnyBoost(boost, target, source, effect) {
      if (boost.spe) {
        boost.spe *= -1;
      }
    },
    shortDesc: "While this Pokemon is active, Speed is lowered when boosted and vice versa for all Pokemon."
  },
  creepy: {
    onModifyPriority(priority, pokemon, target, move) {
      if (move?.category === "Status") {
        move.pranksterBoosted = true;
        return priority + 1;
      }
    },
    onAfterMove(target, source, move) {
      if (!move || !source)
        return;
      if (move.category === "Status") {
        let activated = false;
        for (const target2 of this.effectState.target.side.foe.active) {
          if (!target2 || !target2.isAdjacent(this.effectState.target))
            continue;
          if (!activated) {
            this.add("-ability", this.effectState.target, "Creepy", "boost");
            activated = true;
          }
          if (target2.volatiles["substitute"] || target2.hasType("Dark")) {
            this.add("-immune", target2);
          } else {
            this.boost({ atk: -1 }, target2, this.effectState.target, null, true);
          }
        }
      }
    },
    name: "Creepy",
    shortDesc: "This Pokemon's Status moves have priority raised by 1 and lower the foe's Attack by 1, but Dark types are immune."
  },
  toxiclook: {
    name: "Toxic Look",
    onModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).typeMod < 0) {
        this.debug("Toxic Look boost");
        return this.chainModify(2);
      }
    },
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        if (this.randomChance(3, 10)) {
          source.trySetStatus("psn", target);
        }
      }
    },
    shortDesc: "Tinted Lens + Poison Point"
  },
  ultraimpulse: {
    shortDesc: "If this Pokemon is statused, its highest stat is 1.5x; ignores burn halving physical damage.",
    name: "Ultra Impulse",
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
      let statName = "atk";
      let bestStat = 0;
      let s;
      for (s in this.effectState.target.storedStats) {
        if (this.effectState.target.storedStats[s] > bestStat) {
          statName = s;
          bestStat = this.effectState.target.storedStats[s];
        }
      }
      if (pokemon.status && statName === "atk") {
        return this.chainModify(1.5);
      }
    },
    onModifyDefPriority: 6,
    onModifyDef(def, pokemon) {
      let statName = "atk";
      let bestStat = 0;
      let s;
      for (s in this.effectState.target.storedStats) {
        if (this.effectState.target.storedStats[s] > bestStat) {
          statName = s;
          bestStat = this.effectState.target.storedStats[s];
        }
      }
      if (pokemon.status && statName === "def") {
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(spa, pokemon) {
      let statName = "atk";
      let bestStat = 0;
      let s;
      for (s in this.effectState.target.storedStats) {
        if (this.effectState.target.storedStats[s] > bestStat) {
          statName = s;
          bestStat = this.effectState.target.storedStats[s];
        }
      }
      if (pokemon.status && statName === "spa") {
        return this.chainModify(1.5);
      }
    },
    onModifySpDPriority: 6,
    onModifySpD(spd, pokemon) {
      let statName = "atk";
      let bestStat = 0;
      let s;
      for (s in this.effectState.target.storedStats) {
        if (this.effectState.target.storedStats[s] > bestStat) {
          statName = s;
          bestStat = this.effectState.target.storedStats[s];
        }
      }
      if (pokemon.status && statName === "spd") {
        return this.chainModify(1.5);
      }
    },
    onModifySpe(spe, pokemon) {
      let statName = "atk";
      let bestStat = 0;
      let s;
      for (s in this.effectState.target.storedStats) {
        if (this.effectState.target.storedStats[s] > bestStat) {
          statName = s;
          bestStat = this.effectState.target.storedStats[s];
        }
      }
      if (pokemon.status && statName === "spe") {
        return this.chainModify(1.5);
      }
    }
  },
  demagnetize: {
    name: "Demagnetize",
    onBeforeMove(attacker, defender, move) {
      if (defender.hasType("Steel")) {
        defender.addVolatile("demagnetize");
      }
    },
    onModifyMove(move) {
      move.infiltrates = true;
    },
    condition: {
      duration: 1,
      onStart(pokemon) {
        pokemon.setType(pokemon.getTypes(true).map((type) => type === "Steel" ? "???" : type));
        this.add("-start", pokemon, "typechange", pokemon.types.join("/"));
      },
      onSwitchOut(pokemon) {
        pokemon.removeVolatile("demagnetize");
      },
      onFaint(pokemon) {
        pokemon.removeVolatile("demagnetize");
      },
      onEnd(pokemon) {
        let types = pokemon.baseSpecies.types;
        types = pokemon.baseSpecies.types;
        if (pokemon.getTypes().join() === types.join() || !pokemon.setType(types))
          return;
        this.add("-start", pokemon, "typechange", pokemon.types.join("/"));
      }
    },
    shortDesc: "This Pokemon ignores the opponent's Steel-typing, Substitute, and screens when attacking"
  },
  everywitchway: {
    onDamage(damage, target, source, effect) {
      if (effect.effectType !== "Move") {
        if (effect.effectType === "Ability")
          this.add("-activate", source, "ability: " + effect.name);
        return false;
      }
    },
    onBoost(boost, target, source, effect) {
      if (source && target === source)
        return;
      if (boost.accuracy && boost.accuracy < 0) {
        delete boost.accuracy;
        if (!effect.secondaries) {
          this.add("-fail", target, "unboost", "accuracy", "[from] ability: Every Witch Way", "[of] " + target);
        }
      }
    },
    onModifyMove(move) {
      move.ignoreEvasion = true;
    },
    name: "Every Witch Way",
    shortDesc: "Magic Guard + Keen Eye"
  },
  sheerluck: {
    onModifyMove(move, pokemon) {
      if (move.secondaries) {
        delete move.secondaries;
        delete move.self;
        if (move.id === "clangoroussoulblaze")
          delete move.selfBoost;
        move.hasSheerForce = true;
      }
      if (move.critRatio > 1) {
        move.willCrit = false;
        move.hasSheerForce = true;
      }
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, pokemon, target, move) {
      if (move.hasSheerForce)
        return this.chainModify([5325, 4096]);
    },
    name: "Sheer Luck",
    shortDesc: "Sheer Force + Moves with an increased critical hit ratio deal 1.3x damage but can't critically hit."
  },
  bigpower: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk) {
      return this.chainModify(1.5);
    },
    name: "Big Power",
    shortDesc: "This Pokemon's Attack is boosted 1.5x."
  },
  levimetal: {
    onModifyWeight(weighthg) {
      return this.trunc(weighthg / 2);
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Levimetal");
        return null;
      }
    },
    name: "Levimetal",
    shortDesc: "Light Metal + Levitate"
  },
  waterbender: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Water") {
        this.debug("Waterbender boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Water") {
        this.debug("Waterbender boost");
        return this.chainModify(1.5);
      }
    },
    name: "Waterbender",
    shortDesc: "This Pokemon's Water-type moves deal 1.5x damage."
  },
  hoverboard: {
    onModifySpe(spe) {
      if (this.field.isTerrain("electricterrain")) {
        return this.chainModify(2);
      }
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Hoverboard");
        return null;
      }
    },
    name: "Hoverboard",
    shortDesc: "Levitate + Surge Surfer"
  },
  feverbreaker: {
    onStart(pokemon) {
      this.add("-ability", pokemon, "Fever Breaker");
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    },
    onUpdate(pokemon) {
      if (pokemon.status === "brn") {
        this.add("-activate", pokemon, "ability: Fever Breaker");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "brn")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Fever Breaker");
      }
      return false;
    },
    name: "Fever Breaker",
    shortDesc: "Mold Breaker + Water Veil"
  },
  spitefulwishcraft: {
    onAfterEachBoost(boost, target, source, effect) {
      if (!source || target.side === source.side) {
        if (effect.id === "stickyweb") {
          this.hint("Court Change Sticky Web counts as lowering your own Speed, and Spiteful Wishcraft only affects stats lowered by foes.", true, source.side);
        }
        return;
      }
      let statsLowered = false;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          statsLowered = true;
        }
      }
      if (statsLowered) {
        this.add("-ability", target, "Spiteful Wishcraft");
        this.boost({ atk: 2 }, target, target, null, true);
        source.addVolatile("disable", this.effectState.target);
      }
    },
    name: "Spiteful Wishcraft",
    shortDesc: "If this Pokemon has a stat lowered, it gains +2 Attack and disables the foe's last move"
  },
  gnawrly: {
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
      const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
      this.debug("Base Power: " + basePowerAfterMultiplier);
      if (basePowerAfterMultiplier <= 60) {
        this.debug("Technician boost");
        return this.chainModify(1.5);
      }
      if (move.flags["bite"]) {
        return this.chainModify(1.5);
      }
    },
    name: "Gnawrly",
    shortDesc: "Technician + Strong Jaw, in that order."
  },
  // LC Only Abilities
  "aurevoir": {
    // this one looks like EXACTLY the character limit
    shortDesc: "Switches out when it reaches 1/2 or less of its max HP and restores 1/3 of its max HP.",
    onEmergencyExit(target) {
      if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag)
        return;
      for (const side of this.sides) {
        for (const active of side.active) {
          active.switchFlag = false;
        }
      }
      this.effectState.exiting = true;
      target.switchFlag = true;
      this.add("-activate", target, "ability: Au Revoir");
    },
    onSwitchOut(pokemon) {
      if (this.effectState.exiting === true) {
        this.effectState.exiting = void 0;
      } else {
        pokemon.heal(pokemon.baseMaxhp / 3);
      }
    },
    id: "aurevoir",
    name: "Au Revoir"
  },
  "clearcleaner": {
    // Functional!
    shortDesc: "On switch-in, Screens end for both sides. Other Pokemon cannot lower its stat stages.",
    onStart(pokemon) {
      let activated = false;
      for (const sideCondition of ["reflect", "lightscreen", "auroraveil"]) {
        if (pokemon.side.getSideCondition(sideCondition)) {
          if (!activated) {
            this.add("-activate", pokemon, "ability: Clear Cleaner");
            activated = true;
          }
          pokemon.side.removeSideCondition(sideCondition);
        }
        if (pokemon.side.foe.getSideCondition(sideCondition)) {
          if (!activated) {
            this.add("-activate", pokemon, "ability: Clear Cleaner");
            activated = true;
          }
          pokemon.side.foe.removeSideCondition(sideCondition);
        }
      }
    },
    onBoost(boost, target, source, effect) {
      if (source && target === source)
        return;
      let showMsg = false;
      for (const i in boost) {
        if (boost[i] < 0) {
          delete boost[i];
          showMsg = true;
        }
      }
      if (showMsg && !/** @type {ActiveMove} */
      effect.secondaries && effect.id !== "octolock") {
        this.add("-fail", target, "unboost", "[from] ability: Clear Cleaner", "[of] " + target);
      }
    },
    id: "clearcleaner",
    name: "Clear Cleaner"
  },
  "unamused": {
    // Functional!
    shortDesc: "Ignores stat changes. Summons Sandstorm when taking or dealing damage.",
    id: "unamused",
    name: "Unamused",
    onAnyModifyBoost(boosts, pokemon) {
      const unawareUser = this.effectState.target;
      if (unawareUser === pokemon)
        return;
      if (unawareUser === this.activePokemon && pokemon === this.activeTarget) {
        boosts["def"] = 0;
        boosts["spd"] = 0;
        boosts["evasion"] = 0;
      }
      if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
        boosts["atk"] = 0;
        boosts["def"] = 0;
        boosts["spa"] = 0;
        boosts["accuracy"] = 0;
      }
    },
    onDamagingHit(damage, target, source, move) {
      if (this.field.getWeather().id !== "sandstorm") {
        this.field.setWeather("sandstorm", this.effectState.target);
      }
    },
    onSourceHit(target, source, move) {
      if (!move || !target)
        return;
      if (target !== source && move.category !== "Status") {
        if (this.field.getWeather().id !== "sandstorm") {
          this.field.setWeather("sandstorm", this.effectState.target);
        }
      }
    }
  },
  "unbullet": {
    // Functional!
    shortDesc: "Speed doubles if it uses an item; immunity to ballistic moves.",
    id: "unbullet",
    name: "Unbullet",
    onAfterUseItem(item, pokemon) {
      if (pokemon !== this.effectState.target)
        return;
      pokemon.addVolatile("unburden");
    },
    onTakeItem(item, pokemon) {
      pokemon.addVolatile("unburden");
    },
    onEnd(pokemon) {
      pokemon.removeVolatile("unburden");
    },
    effect: {
      onModifySpe(spe, pokemon) {
        if (!pokemon.item) {
          return this.chainModify(2);
        }
      }
    },
    onTryHit(pokemon, target, move) {
      if (move.flags["bullet"]) {
        this.add("-immune", pokemon, "[from] ability: Unbullet");
        return null;
      }
    }
  },
  "nocturnalflash": {
    shortDesc: "Attacks have 1.3x power and a 30% chance to Poison if it moves last.",
    id: "nocturnalflash",
    name: "Nocturnal Flash",
    onBasePower(basePower, pokemon) {
      let boosted = true;
      for (const target of this.getAllActive()) {
        if (target === pokemon)
          continue;
        if (this.queue.willMove(target)) {
          boosted = false;
          break;
        }
      }
      if (boosted) {
        this.debug("Nocturnal Flash boost");
        return this.chainModify([5325, 4096]);
      }
    },
    onModifyMove(move, pokemon) {
      let boosted = true;
      for (const target of this.getAllActive()) {
        if (target === pokemon)
          continue;
        if (this.queue.willMove(target)) {
          boosted = false;
          break;
        }
      }
      if (!move || move.target === "self")
        return;
      if (!boosted)
        return;
      if (!move.secondaries) {
        move.secondaries = [];
      }
      move.secondaries.push({
        chance: 30,
        status: "psn",
        ability: this.dex.abilities.get("nocturnalflash")
      });
    }
  },
  "fatalend": {
    shortDesc: "Punching moves 1.5x.",
    id: "fatalend",
    name: "Fatal End",
    onBasePowerPriority: 23,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["punch"]) {
        this.debug("Fatal End boost");
        return this.chainModify(1.5);
      }
    }
  },
  "faustianpact": {
    shortDesc: "Swaps abilities with target before landing a contact move.",
    id: "faustianpact",
    name: "Faustian Pact"
    // Effect coded directly in scripts.ts.
    // It's hitchhiking on Spectral Thief's "hitStepStealBoosts" effect,
    // since I don't think I can add new scripts *specifically to the battle step order*
    // and Spectral Thief has basically the same place in the hitstep, so it probably is fine there.
  },
  "abysmalsurge": {
    // Seems functional
    shortDesc: "Fire attacks have 45% brn chance; other attacks have 35% brn chance.",
    id: "abysmalsurge",
    name: "Abysmal Surge",
    onModifyMove(move) {
      if (!move || move.target === "self")
        return;
      if (!move.secondaries) {
        move.secondaries = [];
      }
      if (move.type === "Fire") {
        move.secondaries.push({
          chance: 45,
          status: "brn",
          ability: this.dex.abilities.get("abysmalsurge")
        });
      } else {
        move.secondaries.push({
          chance: 35,
          status: "brn",
          ability: this.dex.abilities.get("abysmalsurge")
        });
      }
    }
  },
  unusual: {
    onSourceModifyDamage(damage, source, target, move) {
      if (source.hasType(move.type)) {
        this.debug("Unusual weaken");
        return this.chainModify(0.67);
      }
      if (source.hasType(move.type) && (source.hasAbility("versatility") || source.hasAbility("levitability") || source.hasAbility("workability"))) {
        this.debug("Unusual weaken");
        return this.chainModify(0.5);
      }
      if (move.type === "Steel" && source.hasAbility("workability")) {
        this.debug("Unusual weaken");
        return this.chainModify(0.5);
      }
    },
    name: "Unusual",
    shortDesc: "The opponent's STAB bonus is ignored when targeting this Pokemon."
  },
  toxincoat: {
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        const r = this.random(100);
        if (r < 15) {
          source.setStatus("par", target);
        } else if (r < 30) {
          source.setStatus("psn", target);
        }
      }
    },
    name: "Toxin Coat",
    shortDesc: "30% chance of poison or paralysis on others making contact with this Pokemon."
  },
  wetfilling: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
      if (pokemon.status || ["raindance", "primordialsea"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(1.5);
      }
    },
    name: "Wet Filling",
    shortDesc: "1.5x when statused or in the rain; Ignores burn Attack drop."
  },
  noproprioception: {
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate" || effect.id === "scarilyadorable" || effect.id === "metalhead" || effect.id === "creepy") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: No Proprioception");
      }
      if (effect.id === "peckingorder") {
        delete boost.def;
        this.add("-immune", target, "[from] ability: No Proprioception");
      }
      if (effect.id === "debilitate") {
        delete boost.spa;
        this.add("-immune", target, "[from] ability: No Proprioception");
      }
      if (effect.id === "sinkorswim" || effect.id === "scarilyadorable") {
        delete boost.spe;
        this.add("-immune", target, "[from] ability: No Proprioception");
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
    onBasePower(basePower, pokemon, target, move) {
      if (move.hasSheerForce)
        return this.chainModify([5325, 4096]);
    },
    onUpdate(pokemon) {
      if (pokemon.volatiles["attract"]) {
        this.add("-activate", pokemon, "ability: No Proprioception");
        pokemon.removeVolatile("attract");
        this.add("-end", pokemon, "move: Attract", "[from] ability: No Proprioception");
      }
      if (pokemon.volatiles["taunt"]) {
        this.add("-activate", pokemon, "ability: No Proprioception");
        pokemon.removeVolatile("taunt");
      }
    },
    onImmunity(type, pokemon) {
      if (type === "attract")
        return false;
    },
    onTryHit(pokemon, target, move) {
      if (move.id === "attract" || move.id === "captivate" || move.id === "taunt") {
        this.add("-immune", pokemon, "[from] ability: No Proprioception");
        return null;
      }
    },
    name: "No Proprioception",
    shortDesc: "Sheer Force + Oblivious"
  },
  roughtime: {
    onUpdate(pokemon) {
      if (pokemon.volatiles["confusion"]) {
        this.add("-activate", pokemon, "ability: Rough Time");
        pokemon.removeVolatile("confusion");
      }
    },
    onTryAddVolatile(status, pokemon) {
      if (status.id === "confusion")
        return null;
    },
    onHit(target, source, move) {
      if (move?.volatileStatus === "confusion") {
        this.add("-immune", target, "confusion", "[from] ability: Rough Time");
      }
    },
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate" || effect.id === "scarilyadorable" || effect.id === "metalhead" || effect.id === "creepy") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Rough Time");
      }
      if (effect.id === "peckingorder") {
        delete boost.def;
        this.add("-immune", target, "[from] ability: Rough Time");
      }
      if (effect.id === "debilitate") {
        delete boost.spa;
        this.add("-immune", target, "[from] ability: Rough Time");
      }
      if (effect.id === "sinkorswim" || effect.id === "scarilyadorable") {
        delete boost.spe;
        this.add("-immune", target, "[from] ability: Rough Time");
      }
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["contact"]) {
        return this.chainModify([5325, 4096]);
      }
    },
    name: "Rough Time",
    shortDesc: "Tough Claws + Own Tempo"
  },
  bigeyes: {
    onBoost(boost, target, source, effect) {
      if (source && target === source)
        return;
      if (boost.def && boost.def < 0) {
        delete boost.def;
        if (!effect.secondaries && effect.id !== "octolock") {
          this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Eyes", "[of] " + target);
        }
      }
      if (boost.accuracy && boost.accuracy < 0) {
        delete boost.accuracy;
        if (!effect.secondaries) {
          this.add("-fail", target, "unboost", "accuracy", "[from] ability: Big Eyes", "[of] " + target);
        }
      }
    },
    onModifyMove(move) {
      move.ignoreEvasion = true;
    },
    name: "Big Eyes",
    shortDesc: "Keen Eye + Big Pecks"
  },
  soundsensitive: {
    onDamagingHit(damage, target, source, move) {
      if (["allAdjacent", "allAdjacentFoes", "all"].includes(move.target)) {
        this.boost({ spe: 1 });
      }
    },
    onAfterBoost(boost, target, source, effect) {
      if (effect && ["intimidate", "debilitate", "sinkorswim", "scarilyadorable", "peckingorder"].includes(effect.id)) {
        this.boost({ spe: 1 });
      }
    },
    name: "Sound Sensitive",
    shortDesc: "+1 Speed when hit by a spread move or Intimidated"
  },
  feelsomepain: {
    onUpdate(pokemon) {
      if (pokemon.status === "psn" || pokemon.status === "tox") {
        this.add("-activate", pokemon, "ability: Feel Some Pain");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "psn" && status.id !== "tox")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Feel Some Pain");
      }
      return false;
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Feel Some Pain");
        return null;
      }
    },
    name: "Feel Some Pain",
    shortDesc: "Immunity + Levitate"
  },
  versatility: {
    onModifyMove(move, pokemon) {
      move.stab = 2;
      if (move.secondaries) {
        delete move.secondaries;
        delete move.self;
        if (move.id === "clangoroussoulblaze")
          delete move.selfBoost;
        move.hasSheerForce = true;
      }
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, pokemon, target, move) {
      if (move.hasSheerForce)
        return this.chainModify([5325, 4096]);
    },
    name: "Versatility",
    shortDesc: "Sheer Force + Adaptability"
  },
  thickskull: {
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
    onBasePower(basePower, pokemon, target, move) {
      if (move.hasSheerForce)
        return this.chainModify([5325, 4096]);
    },
    onDamage(damage, target, source, effect) {
      if (effect.id === "recoil") {
        if (!this.activeMove)
          throw new Error("Battle.activeMove is null");
        if (this.activeMove.id !== "struggle")
          return null;
      }
    },
    name: "Thick Skull",
    shortDesc: "Sheer Force + Rock Head"
  },
  freehealthcare: {
    onResidualOrder: 5,
    onResidualSubOrder: 4,
    onResidual(pokemon) {
      if (pokemon.status) {
        this.debug("freehealthcare");
        this.add("-activate", pokemon, "ability: Free Healthcare");
        pokemon.cureStatus();
      }
    },
    name: "Free Healthcare",
    shortDesc: "This Pokemon's status is cured at the end of every turn."
  },
  airheaded: {
    onStart(pokemon) {
      for (const target of pokemon.side.foe.active) {
        if (!target || target.fainted)
          continue;
        for (const moveSlot of target.moveSlots) {
          const move = this.dex.moves.get(moveSlot.move);
          if (move.category === "Status")
            continue;
          const moveType = move.id === "hiddenpower" ? target.hpType : move.type;
          if (this.dex.getImmunity(moveType, pokemon) && this.dex.getEffectiveness(moveType, pokemon) > 0 || move.ohko) {
            this.add("-ability", pokemon, "Airheaded");
            return;
          }
        }
      }
    },
    onModifyPriority(priority, pokemon, target, move) {
      if (move?.type === "Flying" && pokemon.hp === pokemon.maxhp)
        return priority + 1;
    },
    name: "Airheaded",
    shortDesc: "Anticipation + Gale Wings"
  },
  insidejob: {
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate" || effect.id === "scarilyadorable" || effect.id === "metalhead" || effect.id === "creepy") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Inside Job");
      }
      if (effect.id === "peckingorder") {
        delete boost.def;
        this.add("-immune", target, "[from] ability: Inside Job");
      }
      if (effect.id === "debilitate") {
        delete boost.spa;
        this.add("-immune", target, "[from] ability: Inside Job");
      }
      if (effect.id === "sinkorswim" || effect.id === "scarilyadorable") {
        delete boost.spe;
        this.add("-immune", target, "[from] ability: Inside Job");
      }
    },
    onUpdate(pokemon) {
      if (pokemon.volatiles["attract"]) {
        this.add("-activate", pokemon, "ability: Inside Job");
        pokemon.removeVolatile("attract");
        this.add("-end", pokemon, "move: Attract", "[from] ability: Inside Job");
      }
      if (pokemon.volatiles["taunt"]) {
        this.add("-activate", pokemon, "ability: Inside Job");
        pokemon.removeVolatile("taunt");
      }
    },
    onImmunity(type, pokemon) {
      if (type === "attract")
        return false;
    },
    onTryHit(pokemon, target, move) {
      if (move.id === "attract" || move.id === "captivate" || move.id === "taunt") {
        this.add("-immune", pokemon, "[from] ability: Inside Job");
        return null;
      }
    },
    onModifyMove(move) {
      move.infiltrates = true;
    },
    name: "Inside Job",
    shortDesc: "Oblivious + Infiltrator"
  },
  sandcastles: {
    onStart(pokemon, source) {
      this.field.setWeather("sandstorm");
      for (const target of pokemon.side.foe.active) {
        if (!target || target.fainted)
          continue;
        for (const moveSlot of target.moveSlots) {
          const move = this.dex.moves.get(moveSlot.move);
          if (move.category === "Status")
            continue;
          const moveType = move.id === "hiddenpower" ? target.hpType : move.type;
          if (this.dex.getImmunity(moveType, pokemon) && this.dex.getEffectiveness(moveType, pokemon) > 0 || move.ohko) {
            this.add("-ability", pokemon, "Sandcastles");
            return;
          }
        }
      }
    },
    name: "Sandcastles",
    shortDesc: "Summons sand on switch-in and when shuddering."
  },
  resilientfat: {
    onSourceModifyAtkPriority: 6,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Ice" || move.type === "Fire") {
        this.debug("Resilient Fat weaken");
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Ice" || move.type === "Fire") {
        this.debug("Resilient Fat weaken");
        return this.chainModify(0.5);
      }
    },
    onTryHit(pokemon, target, move) {
      if (move.ohko) {
        this.add("-immune", pokemon, "[from] ability: Resilient Fat");
        return null;
      }
    },
    onDamagePriority: -100,
    onDamage(damage, target, source, effect) {
      if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === "Move") {
        this.add("-ability", target, "Resilient Fat");
        return target.hp - 1;
      }
    },
    name: "Resilient Fat",
    shortDesc: "Thick Fat + Sturdy"
  },
  numskull: {
    onBoost(boost, target, source, effect) {
      if (source && target === source)
        return;
      if (boost.def && boost.def < 0) {
        delete boost.def;
        if (!effect.secondaries && effect.id !== "octolock") {
          this.add("-fail", target, "unboost", "Defense", "[from] ability: Numskull", "[of] " + target);
        }
      }
    },
    onDamage(damage, target, source, effect) {
      if (effect.id === "recoil") {
        if (!this.activeMove)
          throw new Error("Battle.activeMove is null");
        if (this.activeMove.id !== "struggle")
          return null;
      }
    },
    name: "Numskull",
    shortDesc: "Big Pecks + Rock Head"
  },
  boulderfists: {
    onBasePowerPriority: 23,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["punch"]) {
        this.debug("Boulder Fists boost");
        return this.chainModify([4915, 4096]);
      }
    },
    onAfterMove(target, source, move) {
      if (move.flags["punch"]) {
        this.boost({ def: -1, spe: 2 });
      }
    },
    name: "Boulder Fists",
    shortDesc: "This Pokemon's punching moves have 1.2x and give it -1 Def & +2 Spe."
  },
  cherrybomb: {
    onTryHit(pokemon, target, move) {
      if (move.flags["bullet"]) {
        this.add("-immune", pokemon, "[from] ability: Cherry Bomb");
        return null;
      }
    },
    onSetStatus(status, target, source, effect) {
      if (["sunnyday", "desolateland"].includes(target.effectiveWeather())) {
        if (effect?.status) {
          this.add("-immune", target, "[from] ability: Cherry Bomb");
        }
        return false;
      }
    },
    onTryAddVolatile(status, target) {
      if (status.id === "yawn" && ["sunnyday", "desolateland"].includes(target.effectiveWeather())) {
        this.add("-immune", target, "[from] ability: Cherry Bomb");
        return null;
      }
    },
    name: "Cherry Bomb",
    shortDesc: "Bulletproof + Leaf Guard"
  },
  rumenramming: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
      if (pokemon.status) {
        return this.chainModify(1.5);
      }
    },
    onModifyDefPriority: 5,
    onModifyDef(pokemon) {
      if (pokemon.status) {
        return this.chainModify(1.5);
      }
    },
    name: "Rumen Ramming",
    shortDesc: "1.5x Attack and Defense when statused; Ignores Attack burn drop"
  },
  plaincool: {
    onBoost(boost, target, source, effect) {
      this.heal(target.baseMaxhp / 16);
      this.add("-heal", target, target.getHealth, "[from] ability: Plain Cool");
      if (effect && effect.id === "zpower")
        return;
      let i;
      for (i in boost) {
        boost[i] *= 2;
      }
    },
    name: "Plain Cool",
    shortDesc: "This Pokemon's stat changes are doubled. Heals 1/16 of its HP when a stat is changed."
  },
  cursedduck: {
    onDamagingHit(damage, target, source, move) {
      if (source.volatiles["disable"])
        return;
      if (!move.isFutureMove) {
        if (this.randomChance(3, 10)) {
          source.addVolatile("disable", this.effectState.target);
        }
      }
    },
    onModifyMovePriority: -5,
    onModifyMove(move) {
      if (!move.ignoreImmunity)
        move.ignoreImmunity = {};
      if (move.ignoreImmunity !== true) {
        move.ignoreImmunity["Fighting"] = true;
        move.ignoreImmunity["Normal"] = true;
      }
    },
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate" || effect.id === "scarilyadorable" || effect.id === "metalhead" || effect.id === "creepy") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Cursed Duck");
      }
      if (effect.id === "peckingorder") {
        delete boost.def;
        this.add("-immune", target, "[from] ability: Cursed Duck");
      }
      if (effect.id === "debilitate") {
        delete boost.spa;
        this.add("-immune", target, "[from] ability: Cursed Duck");
      }
      if (effect.id === "sinkorswim" || effect.id === "scarilyadorable") {
        delete boost.spe;
        this.add("-immune", target, "[from] ability: Cursed Duck");
      }
    },
    name: "Cursed Duck",
    shortDesc: "Scrappy + Cursed Body."
  },
  swiftmetal: {
    onModifySpe(spe, pokemon) {
      if (["raindance", "primordialsea"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(2);
      }
    },
    onModifyWeightPriority: 1,
    onModifyWeight(weighthg) {
      return weighthg * 2;
    },
    name: "Swift Metal",
    shortDesc: "Swift Swim + Heavy Metal"
  },
  poisoncontrol: {
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
      const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
      this.debug("Base Power: " + basePowerAfterMultiplier);
      if (basePowerAfterMultiplier <= 60) {
        this.debug("Poison Control boost");
        return this.chainModify(1.5);
      }
    },
    onUpdate(pokemon) {
      if (pokemon.status === "psn" || pokemon.status === "tox") {
        this.add("-activate", pokemon, "ability: Poison Control");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "psn" && status.id !== "tox")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Poison Control");
      }
      return false;
    },
    name: "Poison Control",
    shortDesc: "Technician + Immunity"
  },
  alluminiumbody: {
    onModifyWeight(weighthg) {
      return this.trunc(weighthg / 2);
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk) {
      return this.modify(atk, 1.5);
    },
    onSourceModifyAccuracyPriority: 7,
    onSourceModifyAccuracy(accuracy, target, source, move) {
      if (move.category === "Physical" && typeof accuracy === "number") {
        return accuracy * 0.8;
      }
    },
    name: "Alluminium Body",
    shortDesc: "Light Metal + Hustle"
  },
  swarmrush: {
    onModifySpe(spe, pokemon) {
      if (this.field.isWeather("sandstorm")) {
        return this.chainModify(2);
      }
    },
    onImmunity(type, pokemon) {
      if (type === "sandstorm")
        return false;
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Bug" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Swarm boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Bug" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Swarm boost");
        return this.chainModify(1.5);
      }
    },
    name: "Swarm Rush",
    shortDesc: "Swarm + Sand Rush"
  },
  courageous: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
      if (pokemon.status) {
        return this.chainModify(1.5);
      }
    },
    onBoost(boost, target, source, effect) {
      if (source && target === source)
        return;
      if (boost.def && boost.def < 0) {
        delete boost.def;
        if (!effect.secondaries && effect.id !== "octolock") {
          this.add("-fail", target, "unboost", "Defense", "[from] ability: Courageous", "[of] " + target);
        }
      }
    },
    name: "Courageous",
    shortDesc: "Big Pecks + Guts"
  },
  superhustle: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk) {
      return this.modify(atk, 1.5);
    },
    onSourceModifyAccuracyPriority: 7,
    onSourceModifyAccuracy(accuracy, target, source, move) {
      if (move.category === "Physical" && typeof accuracy === "number") {
        return accuracy * 0.8;
      }
    },
    onModifyCritRatio(critRatio) {
      return critRatio + 1;
    },
    name: "Super Hustle",
    shortDesc: "Hustle + Super Luck"
  },
  levistatic: {
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        if (this.randomChance(3, 10)) {
          source.trySetStatus("par", target);
        }
      }
    },
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground" && !source.hasAbility("aerialbreak") && !target.volatiles["smackdown"]) {
        this.add("-immune", target, "[from] ability: Levistatic");
        return null;
      }
    },
    name: "Levistatic",
    shortDesc: "Levitate + Static"
  },
  polarattraction: {
    onFoeTrapPokemon(pokemon) {
      if (pokemon.status === "par" && pokemon.isAdjacent(this.effectState.target)) {
        pokemon.tryTrap(true);
      }
    },
    onFoeMaybeTrapPokemon(pokemon, source) {
      if (!source)
        source = this.effectState.target;
      if (!source || !pokemon.isAdjacent(source))
        return;
      if (!pokemon.status === "par") {
        pokemon.maybeTrapped = true;
      }
    },
    name: "Polar Attraction",
    shortDesc: "Traps paralyzed opponents."
  },
  flawedjaw: {
    onTryMove(pokemon, target, move) {
      if (move.flags["bite"]) {
        this.attrLastMove("[still]");
        this.add("-fail", pokemon);
        return null;
      }
    },
    name: "Flawed Jaw",
    shortDesc: "This pok\xE9mon cannot use Biting moves."
  },
  subvergent: {
    onAfterEachBoost(boost, target, source, effect) {
      if (!source || target.side === source.side) {
        if (effect.id === "stickyweb") {
          this.hint("Court Change Sticky Web counts as lowering your own Speed, and Subvergent only affects stats lowered by foes.", true, source.side);
        }
        return;
      }
      let statsLowered = false;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          statsLowered = true;
        }
      }
      if (statsLowered) {
        this.add("-ability", target, "Subvergent");
        this.boost({ atk: 2 }, target, target, null, true);
        const stats = [];
        const boost2 = {};
        let statPlus;
        for (statPlus in target.boosts) {
          if (statPlus === "accuracy" || statPlus === "evasion")
            continue;
          if (target.boosts[statPlus] < 6) {
            stats.push(statPlus);
          }
        }
        const randomStat = stats.length ? this.sample(stats) : void 0;
        if (randomStat)
          boost2[randomStat] = 2;
        this.boost(boost2);
      }
    },
    name: "Subvergent",
    shortDesc: "Raises Atk and a random (non Acc/Eva) stat by 2 when its stats are lowered by an opponent."
  }
};
//# sourceMappingURL=abilities.js.map
