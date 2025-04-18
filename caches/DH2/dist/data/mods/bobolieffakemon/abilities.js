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
  /*
  
  Ratings and how they work:
  
  -1: Detrimental
  	  An ability that severely harms the user.
  	ex. Defeatist, Slow Start
  
   0: Useless
  	  An ability with no overall benefit in a singles battle.
  	ex. Color Change, Plus
  
   1: Ineffective
  	  An ability that has minimal effect or is only useful in niche situations.
  	ex. Light Metal, Suction Cups
  
   2: Useful
  	  An ability that can be generally useful.
  	ex. Flame Body, Overcoat
  
   3: Effective
  	  An ability with a strong effect on the user or foe.
  	ex. Chlorophyll, Sturdy
  
   4: Very useful
  	  One of the more popular abilities. It requires minimal support to be effective.
  	ex. Adaptability, Magic Bounce
  
   5: Essential
  	  The sort of ability that defines metagames.
  	ex. Imposter, Shadow Tag
  
  */
  noability: {
    isNonstandard: "Past",
    name: "No Ability",
    rating: 0.1,
    num: 0
  },
  adaptability: {
    onModifyMove(move) {
      move.stab = 2;
    },
    name: "Adaptability",
    rating: 4,
    num: 91
  },
  aerilate: {
    onModifyTypePriority: -1,
    onModifyType(move, pokemon2) {
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
        move.type = "Flying";
        move.aerilateBoosted = true;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon2, target, move) {
      if (move.aerilateBoosted)
        return this.chainModify([4915, 4096]);
    },
    name: "Aerilate",
    rating: 4,
    num: 185
  },
  aftermath: {
    name: "Aftermath",
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"] && !target.hp) {
        this.damage(source.baseMaxhp / 4, source, target);
      }
    },
    rating: 2.5,
    num: 106
  },
  airlock: {
    onSwitchIn(pokemon2) {
      this.effectData.switchingIn = true;
    },
    onStart(pokemon2) {
      if (!this.effectData.switchingIn)
        return;
      this.add("-ability", pokemon2, "Air Lock");
      this.effectData.switchingIn = false;
    },
    suppressWeather: true,
    name: "Air Lock",
    rating: 2,
    num: 76
  },
  analytic: {
    onBasePowerPriority: 21,
    onBasePower(basePower, pokemon2) {
      let boosted = true;
      for (const target of this.getAllActive()) {
        if (target === pokemon2)
          continue;
        if (this.queue.willMove(target)) {
          boosted = false;
          break;
        }
      }
      if (boosted) {
        this.debug("Analytic boost");
        return this.chainModify([5325, 4096]);
      }
    },
    name: "Analytic",
    rating: 2.5,
    num: 148
  },
  angerpoint: {
    onHit(target, source, move) {
      if (!target.hp)
        return;
      if (move?.effectType === "Move" && target.getMoveHitData(move).crit) {
        target.setBoost({ atk: 6 });
        this.add("-setboost", target, "atk", 12, "[from] ability: Anger Point");
      }
    },
    name: "Anger Point",
    rating: 1.5,
    num: 83
  },
  anticipation: {
    onStart(pokemon2) {
      for (const target of pokemon2.side.foe.active) {
        if (!target || target.fainted)
          continue;
        for (const moveSlot of target.moveSlots) {
          const move = this.dex.getMove(moveSlot.move);
          if (move.category === "Status")
            continue;
          const moveType = move.id === "hiddenpower" ? target.hpType : move.type;
          if (this.dex.getImmunity(moveType, pokemon2) && this.dex.getEffectiveness(moveType, pokemon2) > 0 || move.ohko) {
            this.add("-ability", pokemon2, "Anticipation");
            return;
          }
        }
      }
    },
    name: "Anticipation",
    rating: 0.5,
    num: 107
  },
  arenatrap: {
    onFoeTrapPokemon(pokemon2) {
      if (!this.isAdjacent(pokemon2, this.effectData.target))
        return;
      if (pokemon2.isGrounded()) {
        pokemon2.tryTrap(true);
      }
    },
    onFoeMaybeTrapPokemon(pokemon2, source) {
      if (!source)
        source = this.effectData.target;
      if (!source || !this.isAdjacent(pokemon2, source))
        return;
      if (pokemon2.isGrounded(!pokemon2.knownType)) {
        pokemon2.maybeTrapped = true;
      }
    },
    name: "Arena Trap",
    rating: 5,
    num: 71
  },
  aromaveil: {
    onAllyTryAddVolatile(status, target, source, effect) {
      if (["attract", "disable", "encore", "healblock", "taunt", "torment"].includes(status.id)) {
        if (effect.effectType === "Move") {
          const effectHolder = this.effectData.target;
          this.add("-block", target, "ability: Aroma Veil", "[of] " + effectHolder);
        }
        return null;
      }
    },
    name: "Aroma Veil",
    rating: 2,
    num: 165
  },
  asoneglastrier: {
    onPreStart(pokemon2) {
      this.add("-ability", pokemon2, "As One");
      this.add("-ability", pokemon2, "Unnerve", pokemon2.side.foe);
    },
    onFoeTryEatItem: false,
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.boost({ atk: length }, source, source, this.dex.getAbility("chillingneigh"));
      }
    },
    isPermanent: true,
    name: "As One (Glastrier)",
    rating: 3.5,
    num: 266
  },
  asonespectrier: {
    onPreStart(pokemon2) {
      this.add("-ability", pokemon2, "As One");
      this.add("-ability", pokemon2, "Unnerve", pokemon2.side.foe);
    },
    onFoeTryEatItem: false,
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.boost({ spa: length }, source, source, this.dex.getAbility("grimneigh"));
      }
    },
    isPermanent: true,
    name: "As One (Spectrier)",
    rating: 3.5,
    num: 267
  },
  aurabreak: {
    onStart(pokemon2) {
      this.add("-ability", pokemon2, "Aura Break");
    },
    onAnyTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      move.hasAuraBreak = true;
    },
    name: "Aura Break",
    rating: 1,
    num: 188
  },
  avian: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Flying") {
        this.debug("Steelworker boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Flying") {
        this.debug("Steelworker boost");
        return this.chainModify(1.5);
      }
    },
    name: "Avian",
    rating: 3.5,
    num: 200
  },
  baddreams: {
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    onResidual(pokemon2) {
      if (!pokemon2.hp)
        return;
      for (const target of pokemon2.side.foe.active) {
        if (!target || !target.hp)
          continue;
        if (target.status === "slp" || target.hasAbility("comatose")) {
          this.damage(target.baseMaxhp / 8, target, pokemon2);
        }
      }
    },
    name: "Bad Dreams",
    rating: 1.5,
    num: 123
  },
  ballfetch: {
    name: "Ball Fetch",
    rating: 0,
    num: 237
  },
  battery: {
    onAllyBasePowerPriority: 22,
    onAllyBasePower(basePower, attacker, defender, move) {
      if (attacker !== this.effectData.target && move.category === "Special") {
        this.debug("Battery boost");
        return this.chainModify([5325, 4096]);
      }
    },
    name: "Battery",
    rating: 0,
    num: 217
  },
  battlearmor: {
    onCriticalHit: false,
    name: "Battle Armor",
    rating: 1,
    num: 4
  },
  battlebond: {
    onSourceAfterFaint(length, target, source, effect) {
      if (effect?.effectType !== "Move") {
        return;
      }
      if (source.species.id === "greninja" && source.hp && !source.transformed && source.side.foe.pokemonLeft) {
        this.add("-activate", source, "ability: Battle Bond");
        source.formeChange("Greninja-Ash", this.effect, true);
      }
    },
    onModifyMovePriority: -1,
    onModifyMove(move, attacker) {
      if (move.id === "watershuriken" && attacker.species.name === "Greninja-Ash") {
        move.multihit = 3;
      }
    },
    isPermanent: true,
    name: "Battle Bond",
    rating: 4,
    num: 210
  },
  beastboost: {
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
    name: "Beast Boost",
    rating: 3.5,
    num: 224
  },
  berserk: {
    onAfterMoveSecondary(target, source, move) {
      if (!source || source === target || !target.hp || !move.totalDamage)
        return;
      const lastAttackedBy = target.getLastAttackedBy();
      if (!lastAttackedBy)
        return;
      const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
      if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
        this.boost({ spa: 1 });
      }
    },
    name: "Berserk",
    rating: 2,
    num: 201
  },
  bigpecks: {
    onBoost(boost, target, source, effect) {
      if (source && target === source)
        return;
      if (boost.def && boost.def < 0) {
        delete boost.def;
        if (!effect.secondaries && effect.id !== "octolock") {
          this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Pecks", "[of] " + target);
        }
      }
    },
    name: "Big Pecks",
    rating: 0.5,
    num: 145
  },
  blaze: {
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
    name: "Blaze",
    rating: 2,
    num: 66
  },
  bulletproof: {
    onTryHit(pokemon2, target, move) {
      if (move.flags["bullet"]) {
        this.add("-immune", pokemon2, "[from] ability: Bulletproof");
        return null;
      }
    },
    name: "Bulletproof",
    rating: 3,
    num: 171
  },
  cheekpouch: {
    onEatItem(item, pokemon2) {
      this.heal(pokemon2.baseMaxhp / 3);
    },
    name: "Cheek Pouch",
    rating: 2,
    num: 167
  },
  chillingneigh: {
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.boost({ atk: length }, source);
      }
    },
    name: "Chilling Neigh",
    rating: 3,
    num: 264
  },
  chlorophyll: {
    onModifySpe(spe, pokemon2) {
      if (["sunnyday", "desolateland"].includes(pokemon2.effectiveWeather())) {
        return this.chainModify(2);
      }
    },
    name: "Chlorophyll",
    rating: 3,
    num: 34
  },
  clearbody: {
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
        this.add("-fail", target, "unboost", "[from] ability: Clear Body", "[of] " + target);
      }
    },
    name: "Clear Body",
    rating: 2,
    num: 29
  },
  cloudnine: {
    onSwitchIn(pokemon2) {
      this.effectData.switchingIn = true;
    },
    onStart(pokemon2) {
      if (!this.effectData.switchingIn)
        return;
      this.add("-ability", pokemon2, "Cloud Nine");
      this.effectData.switchingIn = false;
    },
    suppressWeather: true,
    name: "Cloud Nine",
    rating: 2,
    num: 13
  },
  colorchange: {
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
    name: "Color Change",
    rating: 0,
    num: 16
  },
  comatose: {
    onStart(pokemon2) {
      this.add("-ability", pokemon2, "Comatose");
    },
    onSetStatus(status, target, source, effect) {
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Comatose");
      }
      return false;
    },
    // Permanent sleep "status" implemented in the relevant sleep-checking effects
    isPermanent: true,
    isUnbreakable: true,
    name: "Comatose",
    rating: 4,
    num: 213
  },
  competitive: {
    onAfterEachBoost(boost, target, source, effect) {
      if (!source || target.side === source.side) {
        if (effect.id === "stickyweb") {
          this.hint("Court Change Sticky Web counts as lowering your own Speed, and Competitive only affects stats lowered by foes.", true, source.side);
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
        this.add("-ability", target, "Competitive");
        this.boost({ spa: 2 }, target, target, null, true);
      }
    },
    name: "Competitive",
    rating: 2.5,
    num: 172
  },
  compoundeyes: {
    onSourceModifyAccuracyPriority: 9,
    onSourceModifyAccuracy(accuracy) {
      if (typeof accuracy !== "number")
        return;
      this.debug("compoundeyes - enhancing accuracy");
      return accuracy * 1.3;
    },
    name: "Compound Eyes",
    rating: 3,
    num: 14
  },
  contagiouswound: {
    name: "Contagious Wound",
    onAnyFaintPriority: 1,
    onAnyFaint() {
      for (const allPokemon of this.getAllActive()) {
        if (!this.effectData.target.hp) {
          allPokemon.trySetStatus("psn", this.effectData.target);
        }
      }
    },
    rating: 2.5,
    num: 106
  },
  contrary: {
    onBoost(boost, target, source, effect) {
      if (effect && effect.id === "zpower")
        return;
      let i;
      for (i in boost) {
        boost[i] *= -1;
      }
    },
    name: "Contrary",
    rating: 4.5,
    num: 126
  },
  corrosion: {
    // Implemented in sim/pokemon.js:Pokemon#setStatus
    name: "Corrosion",
    rating: 2.5,
    num: 212
  },
  cottondown: {
    onDamagingHit(damage, target, source, move) {
      let activated = false;
      for (const pokemon2 of this.getAllActive()) {
        if (pokemon2 === target || pokemon2.fainted)
          continue;
        if (!activated) {
          this.add("-ability", target, "Cotton Down");
          activated = true;
        }
        this.boost({ spe: -1 }, pokemon2, target, null, true);
      }
    },
    name: "Cotton Down",
    rating: 2,
    num: 238
  },
  curiousmedicine: {
    onStart(pokemon2) {
      for (const ally of pokemon2.side.active) {
        if (ally !== pokemon2) {
          ally.clearBoosts();
          this.add("-clearboost", ally, "[from] ability: Curious Medicine", "[of] " + pokemon2);
        }
      }
    },
    name: "Curious Medicine",
    rating: 0,
    num: 261
  },
  cursedbody: {
    onDamagingHit(damage, target, source, move) {
      if (source.volatiles["disable"])
        return;
      if (!move.isFutureMove) {
        if (this.randomChance(3, 10)) {
          source.addVolatile("disable", this.effectData.target);
        }
      }
    },
    name: "Cursed Body",
    rating: 2,
    num: 130
  },
  cutecharm: {
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        if (this.randomChance(3, 10)) {
          source.addVolatile("attract", this.effectData.target);
        }
      }
    },
    name: "Cute Charm",
    rating: 0.5,
    num: 56
  },
  damp: {
    onAnyTryMove(target, source, effect) {
      if (["explosion", "mindblown", "mistyexplosion", "selfdestruct"].includes(effect.id)) {
        this.attrLastMove("[still]");
        this.add("cant", this.effectData.target, "ability: Damp", effect, "[of] " + target);
        return false;
      }
    },
    onAnyDamage(damage, target, source, effect) {
      if (effect && effect.id === "aftermath") {
        return false;
      }
    },
    name: "Damp",
    rating: 1,
    num: 6
  },
  dancer: {
    name: "Dancer",
    // implemented in runMove in scripts.js
    rating: 1.5,
    num: 216
  },
  darkaura: {
    onStart(pokemon2) {
      this.add("-ability", pokemon2, "Dark Aura");
    },
    onAnyBasePowerPriority: 20,
    onAnyBasePower(basePower, source, target, move) {
      if (target === source || move.category === "Status" || move.type !== "Dark")
        return;
      if (!move.auraBooster)
        move.auraBooster = this.effectData.target;
      if (move.auraBooster !== this.effectData.target)
        return;
      return this.chainModify([move.hasAuraBreak ? 3072 : 5447, 4096]);
    },
    isUnbreakable: true,
    name: "Dark Aura",
    rating: 3,
    num: 186
  },
  dauntlessshield: {
    onStart(pokemon2) {
      this.boost({ def: 1 }, pokemon2);
    },
    name: "Dauntless Shield",
    rating: 3.5,
    num: 235
  },
  dazzling: {
    onFoeTryMove(target, source, move) {
      const targetAllExceptions = ["perishsong", "flowershield", "rototiller"];
      if (move.target === "foeSide" || move.target === "all" && !targetAllExceptions.includes(move.id)) {
        return;
      }
      const dazzlingHolder = this.effectData.target;
      if ((source.side === dazzlingHolder.side || move.target === "all") && move.priority > 0.1) {
        this.attrLastMove("[still]");
        this.add("cant", dazzlingHolder, "ability: Dazzling", move, "[of] " + target);
        return false;
      }
    },
    name: "Dazzling",
    rating: 2.5,
    num: 219
  },
  defeatist: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon2) {
      if (pokemon2.hp <= pokemon2.maxhp / 2) {
        return this.chainModify(0.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, pokemon2) {
      if (pokemon2.hp <= pokemon2.maxhp / 2) {
        return this.chainModify(0.5);
      }
    },
    name: "Defeatist",
    rating: -1,
    num: 129
  },
  defiant: {
    onAfterEachBoost(boost, target, source, effect) {
      if (!source || target.side === source.side) {
        if (effect.id === "stickyweb") {
          this.hint("Court Change Sticky Web counts as lowering your own Speed, and Defiant only affects stats lowered by foes.", true, source.side);
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
        this.add("-ability", target, "Defiant");
        this.boost({ atk: 2 }, target, target, null, true);
      }
    },
    name: "Defiant",
    rating: 2.5,
    num: 128
  },
  defrost: {
    onUpdate(pokemon2) {
      if (pokemon2.status === "frz") {
        this.add("-activate", pokemon2, "ability: defrost");
        pokemon2.cureStatus();
      }
    },
    onImmunity(type, pokemon2) {
      if (type === "frz")
        return false;
    },
    name: "Defrost",
    rating: 1,
    num: 40
  },
  deltastream: {
    onStart(source) {
      this.field.setWeather("deltastream");
    },
    onAnySetWeather(target, source, weather) {
      const strongWeathers = ["desolateland", "primordialsea", "deltastream"];
      if (this.field.getWeather().id === "deltastream" && !strongWeathers.includes(weather.id))
        return false;
    },
    onEnd(pokemon2) {
      if (this.field.weatherData.source !== pokemon2)
        return;
      for (const target of this.getAllActive()) {
        if (target === pokemon2)
          continue;
        if (target.hasAbility("deltastream")) {
          this.field.weatherData.source = target;
          return;
        }
      }
      this.field.clearWeather();
    },
    name: "Delta Stream",
    rating: 4,
    num: 191
  },
  desolateland: {
    onStart(source) {
      this.field.setWeather("desolateland");
    },
    onAnySetWeather(target, source, weather) {
      const strongWeathers = ["desolateland", "primordialsea", "deltastream"];
      if (this.field.getWeather().id === "desolateland" && !strongWeathers.includes(weather.id))
        return false;
    },
    onEnd(pokemon2) {
      if (this.field.weatherData.source !== pokemon2)
        return;
      for (const target of this.getAllActive()) {
        if (target === pokemon2)
          continue;
        if (target.hasAbility("desolateland")) {
          this.field.weatherData.source = target;
          return;
        }
      }
      this.field.clearWeather();
    },
    name: "Desolate Land",
    rating: 4.5,
    num: 190
  },
  disguise: {
    onDamagePriority: 1,
    onDamage(damage, target, source, effect) {
      if (effect && effect.effectType === "Move" && ["mimikyu", "mimikyutotem"].includes(target.species.id) && !target.transformed) {
        this.add("-activate", target, "ability: Disguise");
        this.effectData.busted = true;
        return 0;
      }
    },
    onCriticalHit(target, source, move) {
      if (!target)
        return;
      if (!["mimikyu", "mimikyutotem"].includes(target.species.id) || target.transformed) {
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
      if (!["mimikyu", "mimikyutotem"].includes(target.species.id) || target.transformed) {
        return;
      }
      const hitSub = target.volatiles["substitute"] && !move.flags["authentic"] && !(move.infiltrates && this.gen >= 6);
      if (hitSub)
        return;
      if (!target.runImmunity(move.type))
        return;
      return 0;
    },
    onUpdate(pokemon2) {
      if (["mimikyu", "mimikyutotem"].includes(pokemon2.species.id) && this.effectData.busted) {
        const speciesid = pokemon2.species.id === "mimikyutotem" ? "Mimikyu-Busted-Totem" : "Mimikyu-Busted";
        pokemon2.formeChange(speciesid, this.effect, true);
        this.damage(pokemon2.baseMaxhp / 8, pokemon2, pokemon2, this.dex.getSpecies(speciesid));
      }
    },
    isPermanent: true,
    name: "Disguise",
    rating: 3.5,
    num: 209
  },
  download: {
    onStart(pokemon2) {
      let totaldef = 0;
      let totalspd = 0;
      for (const target of pokemon2.side.foe.active) {
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
    name: "Download",
    rating: 3.5,
    num: 88
  },
  dragonsmaw: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Dragon") {
        this.debug("Dragon's Maw boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Dragon") {
        this.debug("Dragon's Maw boost");
        return this.chainModify(1.5);
      }
    },
    name: "Dragon's Maw",
    rating: 3.5,
    num: 263
  },
  drizzle: {
    onStart(source) {
      for (const action of this.queue) {
        if (action.choice === "runPrimal" && action.pokemon === source && source.species.id === "kyogre")
          return;
        if (action.choice !== "runSwitch" && action.choice !== "runPrimal")
          break;
      }
      this.field.setWeather("raindance");
    },
    name: "Drizzle",
    rating: 4,
    num: 2
  },
  drought: {
    onStart(source) {
      for (const action of this.queue) {
        if (action.choice === "runPrimal" && action.pokemon === source && source.species.id === "groudon")
          return;
        if (action.choice !== "runSwitch" && action.choice !== "runPrimal")
          break;
      }
      this.field.setWeather("sunnyday");
    },
    name: "Drought",
    rating: 4,
    num: 70
  },
  dryskin: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Water") {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Dry Skin");
        }
        return null;
      }
    },
    onFoeBasePowerPriority: 17,
    onFoeBasePower(basePower, attacker, defender, move) {
      if (this.effectData.target !== defender)
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
    name: "Dry Skin",
    rating: 3,
    num: 87
  },
  earlybird: {
    name: "Early Bird",
    // Implemented in statuses.js
    rating: 1.5,
    num: 48
  },
  effectspore: {
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"] && !source.status && source.runStatusImmunity("powder")) {
        const r = this.random(100);
        if (r < 11) {
          source.setStatus("slp", target);
        } else if (r < 21) {
          source.setStatus("par", target);
        } else if (r < 30) {
          source.setStatus("psn", target);
        }
      }
    },
    name: "Effect Spore",
    rating: 2,
    num: 27
  },
  electricsurge: {
    onStart(source) {
      this.field.setTerrain("electricterrain");
    },
    name: "Electric Surge",
    rating: 4,
    num: 226
  },
  emergencyexit: {
    onEmergencyExit(target) {
      if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag)
        return;
      for (const side of this.sides) {
        for (const active of side.active) {
          active.switchFlag = false;
        }
      }
      target.switchFlag = true;
      this.add("-activate", target, "ability: Emergency Exit");
    },
    name: "Emergency Exit",
    rating: 1,
    num: 194
  },
  enlightenedsoul: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Ground") {
        this.add("-immune", target, "[from] ability: Enlightened Soul");
        return null;
      }
    },
    name: "Enlightened Soul",
    rating: 3.5,
    num: 10
  },
  fairyaura: {
    onStart(pokemon2) {
      this.add("-ability", pokemon2, "Fairy Aura");
    },
    onAnyBasePowerPriority: 20,
    onAnyBasePower(basePower, source, target, move) {
      if (target === source || move.category === "Status" || move.type !== "Fairy")
        return;
      if (!move.auraBooster)
        move.auraBooster = this.effectData.target;
      if (move.auraBooster !== this.effectData.target)
        return;
      return this.chainModify([move.hasAuraBreak ? 3072 : 5447, 4096]);
    },
    isUnbreakable: true,
    name: "Fairy Aura",
    rating: 3,
    num: 187
  },
  filter: {
    onSourceModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).typeMod > 0) {
        this.debug("Filter neutralize");
        return this.chainModify(0.75);
      }
    },
    name: "Filter",
    rating: 3,
    num: 111
  },
  flamebody: {
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        if (this.randomChance(3, 10)) {
          source.trySetStatus("brn", target);
        }
      }
    },
    name: "Flame Body",
    rating: 2,
    num: 49
  },
  flareboost: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (attacker.status === "brn" && move.category === "Special") {
        return this.chainModify(1.5);
      }
    },
    name: "Flare Boost",
    rating: 2,
    num: 138
  },
  flashfire: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Fire") {
        move.accuracy = true;
        if (!target.addVolatile("flashfire")) {
          this.add("-immune", target, "[from] ability: Flash Fire");
        }
        return null;
      }
    },
    onEnd(pokemon2) {
      pokemon2.removeVolatile("flashfire");
    },
    condition: {
      noCopy: true,
      // doesn't get copied by Baton Pass
      onStart(target) {
        this.add("-start", target, "ability: Flash Fire");
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, attacker, defender, move) {
        if (move.type === "Fire" && attacker.hasAbility("flashfire")) {
          this.debug("Flash Fire boost");
          return this.chainModify(1.5);
        }
      },
      onModifySpAPriority: 5,
      onModifySpA(atk, attacker, defender, move) {
        if (move.type === "Fire" && attacker.hasAbility("flashfire")) {
          this.debug("Flash Fire boost");
          return this.chainModify(1.5);
        }
      },
      onEnd(target) {
        this.add("-end", target, "ability: Flash Fire", "[silent]");
      }
    },
    name: "Flash Fire",
    rating: 3.5,
    num: 18
  },
  flattery: {
    onStart(pokemon2) {
      let activated = false;
      for (const target of pokemon2.side.foe.active) {
        if (!target || !this.isAdjacent(target, pokemon2))
          continue;
        if (!activated) {
          this.add("-ability", pokemon2, "Flattery", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ atk: 1 }, target, pokemon2, null, true);
        }
      }
    },
    name: "Flattery",
    rating: -1,
    num: 22
  },
  flowergift: {
    onStart(pokemon2) {
      delete this.effectData.forme;
    },
    onUpdate(pokemon2) {
      if (!pokemon2.isActive || pokemon2.baseSpecies.baseSpecies !== "Cherrim" || pokemon2.transformed)
        return;
      if (["sunnyday", "desolateland"].includes(pokemon2.effectiveWeather())) {
        if (pokemon2.species.id !== "cherrimsunshine") {
          pokemon2.formeChange("Cherrim-Sunshine", this.effect, false, "[msg]");
        }
      } else {
        if (pokemon2.species.id === "cherrimsunshine") {
          pokemon2.formeChange("Cherrim", this.effect, false, "[msg]");
        }
      }
    },
    onAllyModifyAtkPriority: 3,
    onAllyModifyAtk(atk, pokemon2) {
      if (this.effectData.target.baseSpecies.baseSpecies !== "Cherrim")
        return;
      if (["sunnyday", "desolateland"].includes(pokemon2.effectiveWeather())) {
        return this.chainModify(1.5);
      }
    },
    onAllyModifySpDPriority: 4,
    onAllyModifySpD(spd, pokemon2) {
      if (this.effectData.target.baseSpecies.baseSpecies !== "Cherrim")
        return;
      if (["sunnyday", "desolateland"].includes(pokemon2.effectiveWeather())) {
        return this.chainModify(1.5);
      }
    },
    name: "Flower Gift",
    rating: 1,
    num: 122
  },
  flowerveil: {
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
        const effectHolder = this.effectData.target;
        this.add("-block", target, "ability: Flower Veil", "[of] " + effectHolder);
      }
    },
    onAllySetStatus(status, target, source, effect) {
      if (target.hasType("Grass") && source && target !== source && effect && effect.id !== "yawn") {
        this.debug("interrupting setStatus with Flower Veil");
        if (effect.id === "synchronize" || effect.effectType === "Move" && !effect.secondaries) {
          const effectHolder = this.effectData.target;
          this.add("-block", target, "ability: Flower Veil", "[of] " + effectHolder);
        }
        return null;
      }
    },
    onAllyTryAddVolatile(status, target) {
      if (target.hasType("Grass") && status.id === "yawn") {
        this.debug("Flower Veil blocking yawn");
        const effectHolder = this.effectData.target;
        this.add("-block", target, "ability: Flower Veil", "[of] " + effectHolder);
        return null;
      }
    },
    name: "Flower Veil",
    rating: 0,
    num: 166
  },
  fluffy: {
    onSourceModifyDamage(damage, source, target, move) {
      let mod = 1;
      if (move.type === "Fire")
        mod *= 2;
      if (move.flags["contact"])
        mod /= 2;
      return this.chainModify(mod);
    },
    name: "Fluffy",
    rating: 3.5,
    num: 218
  },
  forceofnature: {
    onSwitchIn(pokemon2) {
      this.effectData.switchingIn = true;
    },
    onStart(pokemon2) {
      if (!this.effectData.switchingIn)
        return;
      this.add("-ability", pokemon2, "Force Of Nature");
      this.effectData.switchingIn = false;
    },
    suppressWeather: true,
    name: "Force Of Nature",
    rating: 2,
    num: 13
  },
  forcefield: {
    onModifyDefPriority: 6,
    onModifyDef(def) {
      return this.chainModify(2);
    },
    name: "Forcefield",
    rating: 4,
    num: 169
  },
  forecast: {
    onUpdate(pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies !== "Castform" || pokemon2.transformed)
        return;
      let forme = null;
      switch (pokemon2.effectiveWeather()) {
        case "sunnyday":
        case "desolateland":
          if (pokemon2.species.id !== "castformsunny")
            forme = "Castform-Sunny";
          break;
        case "raindance":
        case "primordialsea":
          if (pokemon2.species.id !== "castformrainy")
            forme = "Castform-Rainy";
          break;
        case "hail":
          if (pokemon2.species.id !== "castformsnowy")
            forme = "Castform-Snowy";
          break;
        default:
          if (pokemon2.species.id !== "castform")
            forme = "Castform";
          break;
      }
      if (pokemon2.isActive && forme) {
        pokemon2.formeChange(forme, this.effect, false, "[msg]");
      }
    },
    name: "Forecast",
    rating: 2,
    num: 59
  },
  forewarn: {
    onStart(pokemon2) {
      let warnMoves = [];
      let warnBp = 1;
      for (const target of pokemon2.side.foe.active) {
        if (target.fainted)
          continue;
        for (const moveSlot of target.moveSlots) {
          const move = this.dex.getMove(moveSlot.move);
          let bp = move.basePower;
          if (move.ohko)
            bp = 150;
          if (move.id === "counter" || move.id === "metalburst" || move.id === "mirrorcoat")
            bp = 120;
          if (bp === 1)
            bp = 80;
          if (!bp && move.category !== "Status")
            bp = 80;
          if (bp > warnBp) {
            warnMoves = [[move, target]];
            warnBp = bp;
          } else if (bp === warnBp) {
            warnMoves.push([move, target]);
          }
        }
      }
      if (!warnMoves.length)
        return;
      const [warnMoveName, warnTarget] = this.sample(warnMoves);
      this.add("-activate", pokemon2, "ability: Forewarn", warnMoveName, "[of] " + warnTarget);
    },
    name: "Forewarn",
    rating: 0.5,
    num: 108
  },
  friendguard: {
    name: "Friend Guard",
    onAnyModifyDamage(damage, source, target, move) {
      if (target !== this.effectData.target && target.side === this.effectData.target.side) {
        this.debug("Friend Guard weaken");
        return this.chainModify(0.75);
      }
    },
    rating: 0,
    num: 132
  },
  frisk: {
    onStart(pokemon2) {
      for (const target of pokemon2.side.foe.active) {
        if (!target || target.fainted)
          continue;
        if (target.item) {
          this.add("-item", target, target.getItem().name, "[from] ability: Frisk", "[of] " + pokemon2, "[identify]");
        }
      }
    },
    name: "Frisk",
    rating: 1.5,
    num: 119
  },
  fullmetalbody: {
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
        this.add("-fail", target, "unboost", "[from] ability: Full Metal Body", "[of] " + target);
      }
    },
    isUnbreakable: true,
    name: "Full Metal Body",
    rating: 2,
    num: 230
  },
  furcoat: {
    onModifyDefPriority: 6,
    onModifyDef(def) {
      return this.chainModify(2);
    },
    name: "Fur Coat",
    rating: 4,
    num: 169
  },
  galewings: {
    onModifyPriority(priority, pokemon2, target, move) {
      if (move?.type === "Flying" && pokemon2.hp === pokemon2.maxhp)
        return priority + 1;
    },
    name: "Gale Wings",
    rating: 3,
    num: 177
  },
  galvanize: {
    onModifyTypePriority: -1,
    onModifyType(move, pokemon2) {
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
    onBasePower(basePower, pokemon2, target, move) {
      if (move.galvanizeBoosted)
        return this.chainModify([4915, 4096]);
    },
    name: "Galvanize",
    rating: 4,
    num: 206
  },
  gluttony: {
    name: "Gluttony",
    rating: 1.5,
    num: 82
  },
  gooey: {
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        this.add("-ability", target, "Gooey");
        this.boost({ spe: -1 }, source, target, null, true);
      }
    },
    name: "Gooey",
    rating: 2,
    num: 183
  },
  gorillatactics: {
    onStart(pokemon2) {
      pokemon2.abilityData.choiceLock = "";
    },
    onBeforeMove(pokemon2, target, move) {
      if (move.isZOrMaxPowered || move.id === "struggle")
        return;
      if (pokemon2.abilityData.choiceLock && pokemon2.abilityData.choiceLock !== move.id) {
        this.addMove("move", pokemon2, move.name);
        this.attrLastMove("[still]");
        this.debug("Disabled by Gorilla Tactics");
        this.add("-fail", pokemon2);
        return false;
      }
    },
    onModifyMove(move, pokemon2) {
      if (pokemon2.abilityData.choiceLock || move.isZOrMaxPowered || move.id === "struggle")
        return;
      pokemon2.abilityData.choiceLock = move.id;
    },
    onModifyAtkPriority: 1,
    onModifyAtk(atk, pokemon2) {
      if (pokemon2.volatiles["dynamax"])
        return;
      this.debug("Gorilla Tactics Atk Boost");
      return this.chainModify(1.5);
    },
    onDisableMove(pokemon2) {
      if (!pokemon2.abilityData.choiceLock)
        return;
      if (pokemon2.volatiles["dynamax"])
        return;
      for (const moveSlot of pokemon2.moveSlots) {
        if (moveSlot.id !== pokemon2.abilityData.choiceLock) {
          pokemon2.disableMove(moveSlot.id, false, this.effectData.sourceEffect);
        }
      }
    },
    onEnd(pokemon2) {
      pokemon2.abilityData.choiceLock = "";
    },
    name: "Gorilla Tactics",
    rating: 4.5,
    num: 255
  },
  grasspelt: {
    onModifyDefPriority: 6,
    onModifyDef(pokemon2) {
      if (this.field.isTerrain("grassyterrain"))
        return this.chainModify(1.5);
    },
    name: "Grass Pelt",
    rating: 0.5,
    num: 179
  },
  grassysurge: {
    onStart(source) {
      this.field.setTerrain("grassyterrain");
    },
    name: "Grassy Surge",
    rating: 4,
    num: 229
  },
  grimneigh: {
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.boost({ spa: length }, source);
      }
    },
    name: "Grim Neigh",
    rating: 3,
    num: 265
  },
  guanoboost: {
    onDamagePriority: 1,
    onDamage(damage, target, source, effect) {
      if (pokemon.side.active.length === 1) {
        return;
      }
      for (const allyActive of pokemon.side.active) {
        if (allyActive && allyActive.position !== pokemon.position && !allyActive.fainted && allyActive.species.id === "wooliba") {
          this.heal(target.baseMaxhp / 4);
          return false;
        }
      }
    },
    name: "Guano Boost",
    rating: 0,
    num: 57
  },
  gulpmissile: {
    onDamagingHit(damage, target, source, move) {
      if (target.transformed || target.isSemiInvulnerable())
        return;
      if (["cramorantgulping", "cramorantgorging"].includes(target.species.id)) {
        this.damage(source.baseMaxhp / 4, source, target);
        if (target.species.id === "cramorantgulping") {
          this.boost({ def: -1 }, source, target, null, true);
        } else {
          source.trySetStatus("par", target, move);
        }
        target.formeChange("cramorant", move);
      }
    },
    // The Dive part of this mechanic is implemented in Dive's `onTryMove` in moves.ts
    onSourceTryPrimaryHit(target, source, effect) {
      if (effect && effect.id === "surf" && source.hasAbility("gulpmissile") && source.species.name === "Cramorant" && !source.transformed) {
        const forme = source.hp <= source.maxhp / 2 ? "cramorantgorging" : "cramorantgulping";
        source.formeChange(forme, effect);
      }
    },
    isPermanent: true,
    name: "Gulp Missile",
    rating: 2.5,
    num: 241
  },
  guts: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon2) {
      if (pokemon2.status) {
        return this.chainModify(1.5);
      }
    },
    name: "Guts",
    rating: 3,
    num: 62
  },
  harvest: {
    name: "Harvest",
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    onResidual(pokemon2) {
      if (this.field.isWeather(["sunnyday", "desolateland"]) || this.randomChance(1, 2)) {
        if (pokemon2.hp && !pokemon2.item && this.dex.getItem(pokemon2.lastItem).isBerry) {
          pokemon2.setItem(pokemon2.lastItem);
          pokemon2.lastItem = "";
          this.add("-item", pokemon2, pokemon2.getItem(), "[from] ability: Harvest");
        }
      }
    },
    rating: 2.5,
    num: 139
  },
  healer: {
    name: "Healer",
    onResidualOrder: 5,
    onResidualSubOrder: 4,
    onResidual(pokemon2) {
      if (pokemon2.side.active.length === 1) {
        return;
      }
      for (const allyActive of pokemon2.side.active) {
        if (allyActive && (allyActive.hp && this.isAdjacent(pokemon2, allyActive) && allyActive.status) && this.randomChance(3, 10)) {
          this.add("-activate", pokemon2, "ability: Healer");
          allyActive.cureStatus();
        }
      }
    },
    rating: 0,
    num: 131
  },
  heatproof: {
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
    name: "Heatproof",
    rating: 2,
    num: 85
  },
  heavymetal: {
    onModifyWeightPriority: 1,
    onModifyWeight(weighthg) {
      return weighthg * 2;
    },
    name: "Heavy Metal",
    rating: 0,
    num: 134
  },
  honeygather: {
    name: "Honey Gather",
    rating: 0,
    num: 118
  },
  hugepower: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk) {
      return this.chainModify(2);
    },
    name: "Huge Power",
    rating: 5,
    num: 37
  },
  hungerswitch: {
    onResidual(pokemon2) {
      if (pokemon2.species.baseSpecies !== "Morpeko" || pokemon2.transformed)
        return;
      const targetForme = pokemon2.species.name === "Morpeko" ? "Morpeko-Hangry" : "Morpeko";
      pokemon2.formeChange(targetForme);
    },
    name: "Hunger Switch",
    rating: 1,
    num: 258
  },
  hustle: {
    // This should be applied directly to the stat as opposed to chaining with the others
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
    name: "Hustle",
    rating: 3.5,
    num: 55
  },
  hydration: {
    onResidualOrder: 5,
    onResidualSubOrder: 4,
    onResidual(pokemon2) {
      if (pokemon2.status && ["raindance", "primordialsea"].includes(pokemon2.effectiveWeather())) {
        this.debug("hydration");
        this.add("-activate", pokemon2, "ability: Hydration");
        pokemon2.cureStatus();
      }
    },
    name: "Hydration",
    rating: 1.5,
    num: 93
  },
  hypercutter: {
    onBoost(boost, target, source, effect) {
      if (source && target === source)
        return;
      if (boost.atk && boost.atk < 0) {
        delete boost.atk;
        if (!effect.secondaries) {
          this.add("-fail", target, "unboost", "Attack", "[from] ability: Hyper Cutter", "[of] " + target);
        }
      }
    },
    name: "Hyper Cutter",
    rating: 1.5,
    num: 52
  },
  icebody: {
    onWeather(target, source, effect) {
      if (effect.id === "hail") {
        this.heal(target.baseMaxhp / 16);
      }
    },
    onImmunity(type, pokemon2) {
      if (type === "hail")
        return false;
    },
    name: "Ice Body",
    rating: 1,
    num: 115
  },
  iceface: {
    onStart(pokemon2) {
      if (this.field.isWeather("hail") && pokemon2.species.id === "eiscuenoice" && !pokemon2.transformed) {
        this.add("-activate", pokemon2, "ability: Ice Face");
        this.effectData.busted = false;
        pokemon2.formeChange("Eiscue", this.effect, true);
      }
    },
    onDamagePriority: 1,
    onDamage(damage, target, source, effect) {
      if (effect && effect.effectType === "Move" && effect.category === "Physical" && target.species.id === "eiscue" && !target.transformed) {
        this.add("-activate", target, "ability: Ice Face");
        this.effectData.busted = true;
        return 0;
      }
    },
    onCriticalHit(target, type, move) {
      if (!target)
        return;
      if (move.category !== "Physical" || target.species.id !== "eiscue" || target.transformed)
        return;
      if (target.volatiles["substitute"] && !(move.flags["authentic"] || move.infiltrates))
        return;
      if (!target.runImmunity(move.type))
        return;
      return false;
    },
    onEffectiveness(typeMod, target, type, move) {
      if (!target)
        return;
      if (move.category !== "Physical" || target.species.id !== "eiscue" || target.transformed)
        return;
      if (target.volatiles["substitute"] && !(move.flags["authentic"] || move.infiltrates))
        return;
      if (!target.runImmunity(move.type))
        return;
      return 0;
    },
    onUpdate(pokemon2) {
      if (pokemon2.species.id === "eiscue" && this.effectData.busted) {
        pokemon2.formeChange("Eiscue-Noice", this.effect, true);
      }
    },
    onAnyWeatherStart() {
      const pokemon2 = this.effectData.target;
      if (this.field.isWeather("hail") && pokemon2.species.id === "eiscuenoice" && !pokemon2.transformed) {
        this.add("-activate", pokemon2, "ability: Ice Face");
        this.effectData.busted = false;
        pokemon2.formeChange("Eiscue", this.effect, true);
      }
    },
    isPermanent: true,
    name: "Ice Face",
    rating: 3,
    num: 248
  },
  icescales: {
    onSourceModifyDamage(damage, source, target, move) {
      if (move.category === "Special") {
        return this.chainModify(0.5);
      }
    },
    name: "Ice Scales",
    rating: 4,
    num: 246
  },
  illuminate: {
    name: "Illuminate",
    rating: 0,
    num: 35
  },
  illusion: {
    onBeforeSwitchIn(pokemon2) {
      pokemon2.illusion = null;
      let i;
      for (i = pokemon2.side.pokemon.length - 1; i > pokemon2.position; i--) {
        if (!pokemon2.side.pokemon[i])
          continue;
        if (!pokemon2.side.pokemon[i].fainted)
          break;
      }
      if (!pokemon2.side.pokemon[i])
        return;
      if (pokemon2 === pokemon2.side.pokemon[i])
        return;
      pokemon2.illusion = pokemon2.side.pokemon[i];
    },
    onDamagingHit(damage, target, source, move) {
      if (target.illusion) {
        this.singleEvent("End", this.dex.getAbility("Illusion"), target.abilityData, target, source, move);
      }
    },
    onEnd(pokemon2) {
      if (pokemon2.illusion) {
        this.debug("illusion cleared");
        pokemon2.illusion = null;
        const details = pokemon2.species.name + (pokemon2.level === 100 ? "" : ", L" + pokemon2.level) + (pokemon2.gender === "" ? "" : ", " + pokemon2.gender) + (pokemon2.set.shiny ? ", shiny" : "");
        this.add("replace", pokemon2, details);
        this.add("-end", pokemon2, "Illusion");
      }
    },
    onFaint(pokemon2) {
      pokemon2.illusion = null;
    },
    isUnbreakable: true,
    name: "Illusion",
    rating: 4.5,
    num: 149
  },
  immunity: {
    onUpdate(pokemon2) {
      if (pokemon2.status === "psn" || pokemon2.status === "tox") {
        this.add("-activate", pokemon2, "ability: Immunity");
        pokemon2.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "psn" && status.id !== "tox")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Immunity");
      }
      return false;
    },
    name: "Immunity",
    rating: 2,
    num: 17
  },
  imposter: {
    onSwitchIn(pokemon2) {
      this.effectData.switchingIn = true;
    },
    onStart(pokemon2) {
      if (!this.effectData.switchingIn)
        return;
      const target = pokemon2.side.foe.active[pokemon2.side.foe.active.length - 1 - pokemon2.position];
      if (target) {
        pokemon2.transformInto(target, this.dex.getAbility("imposter"));
      }
      this.effectData.switchingIn = false;
    },
    name: "Imposter",
    rating: 5,
    num: 150
  },
  infiltrator: {
    onModifyMove(move) {
      move.infiltrates = true;
    },
    name: "Infiltrator",
    rating: 2.5,
    num: 151
  },
  innardsout: {
    name: "Innards Out",
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (!target.hp) {
        this.damage(target.getUndynamaxedHP(damage), source, target);
      }
    },
    rating: 4,
    num: 215
  },
  innerfocus: {
    onTryAddVolatile(status, pokemon2) {
      if (status.id === "flinch")
        return null;
    },
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Inner Focus");
      }
    },
    name: "Inner Focus",
    rating: 1.5,
    num: 39
  },
  insomnia: {
    onUpdate(pokemon2) {
      if (pokemon2.status === "slp") {
        this.add("-activate", pokemon2, "ability: Insomnia");
        pokemon2.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "slp")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Insomnia");
      }
      return false;
    },
    name: "Insomnia",
    rating: 2,
    num: 15
  },
  intimidate: {
    onStart(pokemon2) {
      let activated = false;
      for (const target of pokemon2.side.foe.active) {
        if (!target || !this.isAdjacent(target, pokemon2))
          continue;
        if (!activated) {
          this.add("-ability", pokemon2, "Intimidate", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ atk: -1 }, target, pokemon2, null, true);
        }
      }
    },
    name: "Intimidate",
    rating: 3.5,
    num: 22
  },
  intrepidsword: {
    onStart(pokemon2) {
      this.boost({ atk: 1 }, pokemon2);
    },
    name: "Intrepid Sword",
    rating: 4,
    num: 234
  },
  ironbarbs: {
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        this.damage(source.baseMaxhp / 8, source, target);
      }
    },
    name: "Iron Barbs",
    rating: 2.5,
    num: 160
  },
  ironfist: {
    onBasePowerPriority: 23,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["punch"]) {
        this.debug("Iron Fist boost");
        return this.chainModify([4915, 4096]);
      }
    },
    name: "Iron Fist",
    rating: 3,
    num: 89
  },
  justified: {
    onDamagingHit(damage, target, source, move) {
      if (move.type === "Dark") {
        this.boost({ atk: 1 });
      }
    },
    name: "Justified",
    rating: 2.5,
    num: 154
  },
  keeneye: {
    onBoost(boost, target, source, effect) {
      if (source && target === source)
        return;
      if (boost.accuracy && boost.accuracy < 0) {
        delete boost.accuracy;
        if (!effect.secondaries) {
          this.add("-fail", target, "unboost", "accuracy", "[from] ability: Keen Eye", "[of] " + target);
        }
      }
    },
    onModifyMove(move) {
      move.ignoreEvasion = true;
    },
    name: "Keen Eye",
    rating: 0.5,
    num: 51
  },
  klutz: {
    // Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
    name: "Klutz",
    rating: -1,
    num: 103
  },
  leafguard: {
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
    name: "Leaf Guard",
    rating: 0.5,
    num: 102
  },
  levitate: {
    // airborneness implemented in sim/pokemon.js:Pokemon#isGrounded
    name: "Levitate",
    rating: 3.5,
    num: 26
  },
  libero: {
    onPrepareHit(source, target, move) {
      if (move.hasBounced)
        return;
      const type = move.type;
      if (type && type !== "???" && source.getTypes().join() !== type) {
        if (!source.setType(type))
          return;
        this.add("-start", source, "typechange", type, "[from] ability: Libero");
      }
    },
    name: "Libero",
    rating: 4.5,
    num: 236
  },
  lightmetal: {
    onModifyWeight(weighthg) {
      return this.trunc(weighthg / 2);
    },
    name: "Light Metal",
    rating: 1,
    num: 135
  },
  lightningrod: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Electric") {
        if (!this.boost({ spa: 1 })) {
          this.add("-immune", target, "[from] ability: Lightning Rod");
        }
        return null;
      }
    },
    onAnyRedirectTarget(target, source, source2, move) {
      if (move.type !== "Electric" || ["firepledge", "grasspledge", "waterpledge"].includes(move.id))
        return;
      const redirectTarget = ["randomNormal", "adjacentFoe"].includes(move.target) ? "normal" : move.target;
      if (this.validTarget(this.effectData.target, source, redirectTarget)) {
        if (move.smartTarget)
          move.smartTarget = false;
        if (this.effectData.target !== target) {
          this.add("-activate", this.effectData.target, "ability: Lightning Rod");
        }
        return this.effectData.target;
      }
    },
    name: "Lightning Rod",
    rating: 3,
    num: 31
  },
  limber: {
    onUpdate(pokemon2) {
      if (pokemon2.status === "par") {
        this.add("-activate", pokemon2, "ability: Limber");
        pokemon2.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "par")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Limber");
      }
      return false;
    },
    name: "Limber",
    rating: 2,
    num: 7
  },
  liquidooze: {
    onSourceTryHeal(damage, target, source, effect) {
      this.debug("Heal is occurring: " + target + " <- " + source + " :: " + effect.id);
      const canOoze = ["drain", "leechseed", "strengthsap"];
      if (canOoze.includes(effect.id)) {
        this.damage(damage);
        return 0;
      }
    },
    name: "Liquid Ooze",
    rating: 1.5,
    num: 64
  },
  liquidvoice: {
    onModifyTypePriority: -1,
    onModifyType(move, pokemon2) {
      if (move.flags["sound"] && !pokemon2.volatiles["dynamax"]) {
        move.type = "Water";
      }
    },
    name: "Liquid Voice",
    rating: 1.5,
    num: 204
  },
  longreach: {
    onModifyMove(move) {
      delete move.flags["contact"];
    },
    name: "Long Reach",
    rating: 1,
    num: 203
  },
  magicbounce: {
    name: "Magic Bounce",
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
      this.useMove(newMove, this.effectData.target, source);
      return null;
    },
    condition: {
      duration: 1
    },
    rating: 4,
    num: 156
  },
  magicguard: {
    onDamage(damage, target, source, effect) {
      if (effect.effectType !== "Move") {
        if (effect.effectType === "Ability")
          this.add("-activate", source, "ability: " + effect.name);
        return false;
      }
    },
    name: "Magic Guard",
    rating: 4,
    num: 98
  },
  magician: {
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
        this.add("-item", source, yourItem, "[from] ability: Magician", "[of] " + target);
      }
    },
    name: "Magician",
    rating: 1.5,
    num: 170
  },
  magmaarmor: {
    onUpdate(pokemon2) {
      if (pokemon2.status === "frz") {
        this.add("-activate", pokemon2, "ability: Magma Armor");
        pokemon2.cureStatus();
      }
    },
    onImmunity(type, pokemon2) {
      if (type === "frz")
        return false;
    },
    name: "Magma Armor",
    rating: 1,
    num: 40
  },
  magnetpull: {
    onFoeTrapPokemon(pokemon2) {
      if (pokemon2.hasType("Steel") && this.isAdjacent(pokemon2, this.effectData.target)) {
        pokemon2.tryTrap(true);
      }
    },
    onFoeMaybeTrapPokemon(pokemon2, source) {
      if (!source)
        source = this.effectData.target;
      if (!source || !this.isAdjacent(pokemon2, source))
        return;
      if (!pokemon2.knownType || pokemon2.hasType("Steel")) {
        pokemon2.maybeTrapped = true;
      }
    },
    name: "Magnet Pull",
    rating: 4,
    num: 42
  },
  marvelscale: {
    onModifyDefPriority: 6,
    onModifyDef(def, pokemon2) {
      if (pokemon2.status) {
        return this.chainModify(1.5);
      }
    },
    name: "Marvel Scale",
    rating: 2.5,
    num: 63
  },
  megalauncher: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["pulse"]) {
        return this.chainModify(1.5);
      }
    },
    name: "Mega Launcher",
    rating: 3,
    num: 178
  },
  merciless: {
    onModifyCritRatio(critRatio, source, target) {
      if (target && ["psn", "tox"].includes(target.status))
        return 5;
    },
    name: "Merciless",
    rating: 1.5,
    num: 196
  },
  mimicry: {
    onStart(pokemon2) {
      if (this.field.terrain) {
        pokemon2.addVolatile("mimicry");
      } else {
        const types = pokemon2.baseSpecies.types;
        if (pokemon2.getTypes().join() === types.join() || !pokemon2.setType(types))
          return;
        this.add("-start", pokemon2, "typechange", types.join("/"), "[from] ability: Mimicry");
        this.hint("Transform Mimicry changes you to your original un-transformed types.");
      }
    },
    onAnyTerrainStart() {
      const pokemon2 = this.effectData.target;
      delete pokemon2.volatiles["mimicry"];
      pokemon2.addVolatile("mimicry");
    },
    onEnd(pokemon2) {
      delete pokemon2.volatiles["mimicry"];
    },
    condition: {
      onStart(pokemon2) {
        let newType;
        switch (this.field.terrain) {
          case "electricterrain":
            newType = "Electric";
            break;
          case "grassyterrain":
            newType = "Grass";
            break;
          case "mistyterrain":
            newType = "Fairy";
            break;
          case "psychicterrain":
            newType = "Psychic";
            break;
        }
        if (!newType || pokemon2.getTypes().join() === newType || !pokemon2.setType(newType))
          return;
        this.add("-start", pokemon2, "typechange", newType, "[from] ability: Mimicry");
      },
      onUpdate(pokemon2) {
        if (!this.field.terrain) {
          const types = pokemon2.species.types;
          if (pokemon2.getTypes().join() === types.join() || !pokemon2.setType(types))
            return;
          this.add("-activate", pokemon2, "ability: Mimicry");
          this.add("-end", pokemon2, "typechange", "[silent]");
          pokemon2.removeVolatile("mimicry");
        }
      }
    },
    name: "Mimicry",
    rating: 0.5,
    num: 250
  },
  minus: {
    onModifySpAPriority: 5,
    onModifySpA(spa, pokemon2) {
      if (pokemon2.side.active.length === 1) {
        return;
      }
      for (const allyActive of pokemon2.side.active) {
        if (allyActive && allyActive.position !== pokemon2.position && !allyActive.fainted && allyActive.hasAbility(["minus", "plus"])) {
          return this.chainModify(1.5);
        }
      }
    },
    name: "Minus",
    rating: 0,
    num: 58
  },
  mirrorarmor: {
    onBoost(boost, target, source, effect) {
      if (target === source || !boost || effect.id === "mirrorarmor")
        return;
      let b;
      for (b in boost) {
        if (boost[b] < 0) {
          if (target.boosts[b] === -6)
            continue;
          const negativeBoost = {};
          negativeBoost[b] = boost[b];
          delete boost[b];
          this.add("-ability", target, "Mirror Armor");
          this.boost(negativeBoost, source, target, null, true);
        }
      }
    },
    name: "Mirror Armor",
    rating: 2,
    num: 240
  },
  mistysurge: {
    onStart(source) {
      this.field.setTerrain("mistyterrain");
    },
    name: "Misty Surge",
    rating: 3.5,
    num: 228
  },
  moldbreaker: {
    onStart(pokemon2) {
      this.add("-ability", pokemon2, "Mold Breaker");
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    },
    name: "Mold Breaker",
    rating: 3.5,
    num: 104
  },
  moody: {
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    onResidual(pokemon2) {
      let stats = [];
      const boost = {};
      let statPlus;
      for (statPlus in pokemon2.boosts) {
        if (statPlus === "accuracy" || statPlus === "evasion")
          continue;
        if (pokemon2.boosts[statPlus] < 6) {
          stats.push(statPlus);
        }
      }
      let randomStat = stats.length ? this.sample(stats) : void 0;
      if (randomStat)
        boost[randomStat] = 2;
      stats = [];
      let statMinus;
      for (statMinus in pokemon2.boosts) {
        if (statMinus === "accuracy" || statMinus === "evasion")
          continue;
        if (pokemon2.boosts[statMinus] > -6 && statMinus !== randomStat) {
          stats.push(statMinus);
        }
      }
      randomStat = stats.length ? this.sample(stats) : void 0;
      if (randomStat)
        boost[randomStat] = -1;
      this.boost(boost);
    },
    name: "Moody",
    rating: 5,
    num: 141
  },
  motordrive: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Electric") {
        if (!this.boost({ spe: 1 })) {
          this.add("-immune", target, "[from] ability: Motor Drive");
        }
        return null;
      }
    },
    name: "Motor Drive",
    rating: 3,
    num: 78
  },
  moxie: {
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.boost({ atk: length }, source);
      }
    },
    name: "Moxie",
    rating: 3,
    num: 153
  },
  multiscale: {
    onSourceModifyDamage(damage, source, target, move) {
      if (target.hp >= target.maxhp) {
        this.debug("Multiscale weaken");
        return this.chainModify(0.5);
      }
    },
    name: "Multiscale",
    rating: 3.5,
    num: 136
  },
  multitype: {
    // Multitype's type-changing itself is implemented in statuses.js
    isPermanent: true,
    name: "Multitype",
    rating: 4,
    num: 121
  },
  mummy: {
    name: "Mummy",
    onDamagingHit(damage, target, source, move) {
      const sourceAbility = source.getAbility();
      if (sourceAbility.isPermanent || sourceAbility.id === "mummy") {
        return;
      }
      if (move.flags["contact"]) {
        const oldAbility = source.setAbility("mummy", target);
        if (oldAbility) {
          this.add("-activate", target, "ability: Mummy", this.dex.getAbility(oldAbility).name, "[of] " + source);
        }
      }
    },
    onBasePower(basePower, pokemon2, target, move) {
      if (move.multihitType === "parentalbond" && move.hit > 1)
        return this.chainModify(0.25);
    },
    rating: 2,
    num: 152
  },
  naturalcure: {
    onCheckShow(pokemon2) {
      if (pokemon2.side.active.length === 1)
        return;
      if (pokemon2.showCure === true || pokemon2.showCure === false)
        return;
      const cureList = [];
      let noCureCount = 0;
      for (const curPoke of pokemon2.side.active) {
        if (!curPoke || !curPoke.status) {
          continue;
        }
        if (curPoke.showCure) {
          continue;
        }
        const species = curPoke.species;
        if (!Object.values(species.abilities).includes("Natural Cure")) {
          continue;
        }
        if (!species.abilities["1"] && !species.abilities["H"]) {
          continue;
        }
        if (curPoke !== pokemon2 && !this.queue.willSwitch(curPoke)) {
          continue;
        }
        if (curPoke.hasAbility("naturalcure")) {
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
        this.add("-message", "(" + cureList.length + " of " + pokemon2.side.name + "'s pokemon " + (cureList.length === 1 ? "was" : "were") + " cured by Natural Cure.)");
        for (const pkmn of cureList) {
          pkmn.showCure = false;
        }
      }
    },
    onSwitchOut(pokemon2) {
      if (!pokemon2.status)
        return;
      if (pokemon2.showCure === void 0)
        pokemon2.showCure = true;
      if (pokemon2.showCure)
        this.add("-curestatus", pokemon2, pokemon2.status, "[from] ability: Natural Cure");
      pokemon2.setStatus("");
      if (!pokemon2.showCure)
        pokemon2.showCure = void 0;
    },
    name: "Natural Cure",
    rating: 2.5,
    num: 30
  },
  neuroforce: {
    onModifyDamage(damage, source, target, move) {
      if (move && target.getMoveHitData(move).typeMod > 0) {
        return this.chainModify([5120, 4096]);
      }
    },
    name: "Neuroforce",
    rating: 2.5,
    num: 233
  },
  neutralizinggas: {
    // Ability suppression implemented in sim/pokemon.ts:Pokemon#ignoringAbility
    // TODO Will abilities that already started start again? (Intimidate seems like a good test case)
    onPreStart(pokemon2) {
      this.add("-ability", pokemon2, "Neutralizing Gas");
      pokemon2.abilityData.ending = false;
      for (const target of this.getAllActive()) {
        if (target.illusion) {
          this.singleEvent("End", this.dex.getAbility("Illusion"), target.abilityData, target, pokemon2, "neutralizinggas");
        }
        if (target.volatiles["slowstart"]) {
          delete target.volatiles["slowstart"];
          this.add("-end", target, "Slow Start", "[silent]");
        }
      }
    },
    onEnd(source) {
      source.abilityData.ending = true;
      for (const pokemon2 of this.getAllActive()) {
        if (pokemon2 !== source) {
          this.singleEvent("Start", pokemon2.getAbility(), pokemon2.abilityData, pokemon2);
        }
      }
    },
    name: "Neutralizing Gas",
    rating: 5,
    num: 256
  },
  noguard: {
    onAnyInvulnerabilityPriority: 1,
    onAnyInvulnerability(target, source, move) {
      if (move && (source === this.effectData.target || target === this.effectData.target))
        return 0;
    },
    onAnyAccuracy(accuracy, target, source, move) {
      if (move && (source === this.effectData.target || target === this.effectData.target)) {
        return true;
      }
      return accuracy;
    },
    name: "No Guard",
    rating: 4,
    num: 99
  },
  normalize: {
    onModifyTypePriority: 1,
    onModifyType(move, pokemon2) {
      const noModifyType = [
        "hiddenpower",
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "struggle",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      if (!(move.isZ && move.category !== "Status") && !noModifyType.includes(move.id)) {
        move.type = "Normal";
        move.normalizeBoosted = true;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon2, target, move) {
      if (move.normalizeBoosted)
        return this.chainModify([4915, 4096]);
    },
    name: "Normalize",
    rating: 0,
    num: 96
  },
  oblivious: {
    onUpdate(pokemon2) {
      if (pokemon2.volatiles["attract"]) {
        this.add("-activate", pokemon2, "ability: Oblivious");
        pokemon2.removeVolatile("attract");
        this.add("-end", pokemon2, "move: Attract", "[from] ability: Oblivious");
      }
      if (pokemon2.volatiles["taunt"]) {
        this.add("-activate", pokemon2, "ability: Oblivious");
        pokemon2.removeVolatile("taunt");
      }
    },
    onImmunity(type, pokemon2) {
      if (type === "attract")
        return false;
    },
    onTryHit(pokemon2, target, move) {
      if (move.id === "attract" || move.id === "captivate" || move.id === "taunt") {
        this.add("-immune", pokemon2, "[from] ability: Oblivious");
        return null;
      }
    },
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Oblivious");
      }
    },
    name: "Oblivious",
    rating: 1.5,
    num: 12
  },
  overcoat: {
    onImmunity(type, pokemon2) {
      if (type === "sandstorm" || type === "hail" || type === "powder")
        return false;
    },
    onTryHitPriority: 1,
    onTryHit(target, source, move) {
      if (move.flags["powder"] && target !== source && this.dex.getImmunity("powder", target)) {
        this.add("-immune", target, "[from] ability: Overcoat");
        return null;
      }
    },
    name: "Overcoat",
    rating: 2,
    num: 142
  },
  overgrow: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Grass" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Overgrow boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Grass" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Overgrow boost");
        return this.chainModify(1.5);
      }
    },
    name: "Overgrow",
    rating: 2,
    num: 65
  },
  owntempo: {
    onUpdate(pokemon2) {
      if (pokemon2.volatiles["confusion"]) {
        this.add("-activate", pokemon2, "ability: Own Tempo");
        pokemon2.removeVolatile("confusion");
      }
    },
    onTryAddVolatile(status, pokemon2) {
      if (status.id === "confusion")
        return null;
    },
    onHit(target, source, move) {
      if (move?.volatileStatus === "confusion") {
        this.add("-immune", target, "confusion", "[from] ability: Own Tempo");
      }
    },
    onBoost(boost, target, source, effect) {
      if (effect.id === "intimidate") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Own Tempo");
      }
    },
    name: "Own Tempo",
    rating: 1.5,
    num: 20
  },
  parentalbond: {
    onPrepareHit(source, target, move) {
      if (move.category === "Status" || move.selfdestruct || move.multihit)
        return;
      if (["endeavor", "fling", "iceball", "rollout"].includes(move.id))
        return;
      if (!move.flags["charge"] && !move.spreadHit && !move.isZ && !move.isMax) {
        move.multihit = 2;
        move.multihitType = "parentalbond";
      }
    },
    onBasePowerPriority: 7,
    onBasePower(basePower, pokemon2, target, move) {
      if (move.multihitType === "parentalbond" && move.hit > 1)
        return this.chainModify(0.25);
    },
    onSourceModifySecondaries(secondaries, target, source, move) {
      if (move.multihitType === "parentalbond" && move.id === "secretpower" && move.hit < 2) {
        return secondaries.filter((effect) => effect.volatileStatus === "flinch");
      }
    },
    name: "Parental Bond",
    rating: 4.5,
    num: 184
  },
  pastelveil: {
    onStart(pokemon2) {
      for (const ally of pokemon2.allies()) {
        if (["psn", "tox"].includes(ally.status)) {
          this.add("-activate", pokemon2, "ability: Pastel Veil");
          ally.cureStatus();
        }
      }
    },
    onUpdate(pokemon2) {
      if (["psn", "tox"].includes(pokemon2.status)) {
        this.add("-activate", pokemon2, "ability: Pastel Veil");
        pokemon2.cureStatus();
      }
    },
    onAllySwitchIn(pokemon2) {
      if (["psn", "tox"].includes(pokemon2.status)) {
        this.add("-activate", this.effectData.target, "ability: Pastel Veil");
        pokemon2.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (!["psn", "tox"].includes(status.id))
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Pastel Veil");
      }
      return false;
    },
    onAllySetStatus(status, target, source, effect) {
      if (!["psn", "tox"].includes(status.id))
        return;
      if (effect?.status) {
        const effectHolder = this.effectData.target;
        this.add("-block", target, "ability: Pastel Veil", "[of] " + effectHolder);
      }
      return false;
    },
    name: "Pastel Veil",
    rating: 2,
    num: 257
  },
  perennialawakening: {
    onStart(pokemon2) {
      delete this.effectData.forme;
    },
    onUpdate(pokemon2) {
      if (!pokemon2.isActive || pokemon2.baseSpecies.baseSpecies !== "Erverena" || pokemon2.transformed)
        return;
      if (["raindance", "primordialsea"].includes(pokemon2.effectiveWeather())) {
        if (pokemon2.species.id !== "erverenaawakened") {
          pokemon2.formeChange("Erverena-Awakened", this.effect, false, "[msg]");
        }
      } else {
        if (pokemon2.species.id === "erverenaawakened") {
          pokemon2.formeChange("Erverena", this.effect, false, "[msg]");
        }
      }
    },
    name: "Perennial Awakening",
    rating: 1,
    num: 122
  },
  perishbody: {
    onDamagingHit(damage, target, source, move) {
      if (!move.flags["contact"])
        return;
      let announced = false;
      for (const pokemon2 of [target, source]) {
        if (pokemon2.volatiles["perishsong"])
          continue;
        if (!announced) {
          this.add("-ability", target, "Perish Body");
          announced = true;
        }
        pokemon2.addVolatile("perishsong");
      }
    },
    name: "Perish Body",
    rating: 1,
    num: 253
  },
  pickpocket: {
    onAfterMoveSecondary(target, source, move) {
      if (source && source !== target && move?.flags["contact"]) {
        if (target.item || target.switchFlag || target.forceSwitchFlag || source.switchFlag === true) {
          return;
        }
        const yourItem = source.takeItem(target);
        if (!yourItem) {
          return;
        }
        if (!target.setItem(yourItem)) {
          source.item = yourItem.id;
          return;
        }
        this.add("-enditem", source, yourItem, "[silent]", "[from] ability: Pickpocket", "[of] " + source);
        this.add("-item", target, yourItem, "[from] ability: Pickpocket", "[of] " + source);
      }
    },
    name: "Pickpocket",
    rating: 1,
    num: 124
  },
  pickup: {
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    onResidual(pokemon2) {
      if (pokemon2.item)
        return;
      const pickupTargets = [];
      for (const target of this.getAllActive()) {
        if (target.lastItem && target.usedItemThisTurn && this.isAdjacent(pokemon2, target)) {
          pickupTargets.push(target);
        }
      }
      if (!pickupTargets.length)
        return;
      const randomTarget = this.sample(pickupTargets);
      const item = randomTarget.lastItem;
      randomTarget.lastItem = "";
      this.add("-item", pokemon2, this.dex.getItem(item), "[from] ability: Pickup");
      pokemon2.setItem(item);
    },
    name: "Pickup",
    rating: 0.5,
    num: 53
  },
  pitcherarmor: {
    onModifyDefPriority: 6,
    onModifyDef(def) {
      for (const allyActive of pokemon.adjacentAllies()) {
        if (allyActive && allyActive.position !== pokemon.position && !allyActive.fainted && allyActive.species.id === "pichiri") {
          return this.chainModify(2);
        }
      }
    },
    onModifySpdPriority: 6,
    onModifySpd(spd) {
      for (const allyActive of pokemon.adjacentAllies()) {
        if (allyActive && allyActive.position !== pokemon.position && !allyActive.fainted && allyActive.species.id === "pichiri") {
          return this.chainModify(2);
        }
      }
    },
    name: "Pitcher Armor",
    rating: 0,
    num: 57
  },
  pixilate: {
    onModifyTypePriority: -1,
    onModifyType(move, pokemon2) {
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
    onBasePower(basePower, pokemon2, target, move) {
      if (move.pixilateBoosted)
        return this.chainModify([4915, 4096]);
    },
    name: "Pixilate",
    rating: 4,
    num: 182
  },
  plus: {
    onModifySpAPriority: 5,
    onModifySpA(spa, pokemon2) {
      if (pokemon2.side.active.length === 1) {
        return;
      }
      for (const allyActive of pokemon2.side.active) {
        if (allyActive && allyActive.position !== pokemon2.position && !allyActive.fainted && allyActive.hasAbility(["minus", "plus"])) {
          return this.chainModify(1.5);
        }
      }
    },
    name: "Plus",
    rating: 0,
    num: 57
  },
  poisonheal: {
    onDamagePriority: 1,
    onDamage(damage, target, source, effect) {
      if (effect.id === "psn" || effect.id === "tox") {
        this.heal(target.baseMaxhp / 8);
        return false;
      }
    },
    name: "Poison Heal",
    rating: 4,
    num: 90
  },
  poisonpoint: {
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        if (this.randomChance(3, 10)) {
          source.trySetStatus("psn", target);
        }
      }
    },
    name: "Poison Point",
    rating: 1.5,
    num: 38
  },
  poisontouch: {
    // upokecenter says this is implemented as an added secondary effect
    onModifyMove(move) {
      if (!move || !move.flags["contact"] || move.target === "self")
        return;
      if (!move.secondaries) {
        move.secondaries = [];
      }
      move.secondaries.push({
        chance: 30,
        status: "psn",
        ability: this.dex.getAbility("poisontouch")
      });
    },
    name: "Poison Touch",
    rating: 2,
    num: 143
  },
  powerconstruct: {
    onResidualOrder: 27,
    onResidual(pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies !== "Zygarde" || pokemon2.transformed || !pokemon2.hp)
        return;
      if (pokemon2.species.id === "zygardecomplete" || pokemon2.hp > pokemon2.maxhp / 2)
        return;
      this.add("-activate", pokemon2, "ability: Power Construct");
      pokemon2.formeChange("Zygarde-Complete", this.effect, true);
      pokemon2.baseMaxhp = Math.floor(Math.floor(
        2 * pokemon2.species.baseStats["hp"] + pokemon2.set.ivs["hp"] + Math.floor(pokemon2.set.evs["hp"] / 4) + 100
      ) * pokemon2.level / 100 + 10);
      const newMaxHP = pokemon2.volatiles["dynamax"] ? 2 * pokemon2.baseMaxhp : pokemon2.baseMaxhp;
      pokemon2.hp = newMaxHP - (pokemon2.maxhp - pokemon2.hp);
      pokemon2.maxhp = newMaxHP;
      this.add("-heal", pokemon2, pokemon2.getHealth, "[silent]");
    },
    isPermanent: true,
    name: "Power Construct",
    rating: 5,
    num: 211
  },
  powerlink: {
    onStart(pokemon2) {
      if (!pokemon2.item)
        pokemon2.trySetStatus("slp", pokemon2);
    },
    onAfterUseItem(item, pokemon2) {
      if (pokemon2 !== this.effectData.target)
        return;
      pokemon2.trySetStatus("slp", pokemon2);
    },
    onTakeItem(item, pokemon2) {
      pokemon2.trySetStatus("slp", pokemon2);
    },
    name: "Power Link",
    rating: 0.5,
    num: 107
  },
  powerofalchemy: {
    onAllyFaint(target) {
      if (!this.effectData.target.hp)
        return;
      const ability = target.getAbility();
      const additionalBannedAbilities = [
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
        "wonderguard"
      ];
      if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability))
        return;
      this.add("-ability", this.effectData.target, ability, "[from] ability: Power of Alchemy", "[of] " + target);
      this.effectData.target.setAbility(ability);
    },
    name: "Power of Alchemy",
    rating: 0,
    num: 223
  },
  powerspot: {
    onAllyBasePowerPriority: 22,
    onAllyBasePower(basePower, attacker, defender, move) {
      if (attacker !== this.effectData.target) {
        this.debug("Power Spot boost");
        return this.chainModify([5325, 4096]);
      }
    },
    name: "Power Spot",
    rating: 1,
    num: 249
  },
  prankster: {
    onModifyPriority(priority, pokemon2, target, move) {
      if (move?.category === "Status") {
        move.pranksterBoosted = true;
        return priority + 1;
      }
    },
    name: "Prankster",
    rating: 4,
    num: 158
  },
  preservation: {
    onModifyMove(move, pokemon2) {
      if (move?.flags["heal"])
        pokemon2.switchFlag = true;
    },
    name: "Preservation",
    rating: 3.5,
    num: 1e3
  },
  pressure: {
    onStart(pokemon2) {
      this.add("-ability", pokemon2, "Pressure");
    },
    onDeductPP(target, source) {
      if (target.side === source.side)
        return;
      return 1;
    },
    name: "Pressure",
    rating: 2.5,
    num: 46
  },
  primordialsea: {
    onStart(source) {
      this.field.setWeather("primordialsea");
    },
    onAnySetWeather(target, source, weather) {
      const strongWeathers = ["desolateland", "primordialsea", "deltastream"];
      if (this.field.getWeather().id === "primordialsea" && !strongWeathers.includes(weather.id))
        return false;
    },
    onEnd(pokemon2) {
      if (this.field.weatherData.source !== pokemon2)
        return;
      for (const target of this.getAllActive()) {
        if (target === pokemon2)
          continue;
        if (target.hasAbility("primordialsea")) {
          this.field.weatherData.source = target;
          return;
        }
      }
      this.field.clearWeather();
    },
    name: "Primordial Sea",
    rating: 4.5,
    num: 189
  },
  prismarmor: {
    onSourceModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).typeMod > 0) {
        this.debug("Prism Armor neutralize");
        return this.chainModify(0.75);
      }
    },
    isUnbreakable: true,
    name: "Prism Armor",
    rating: 3,
    num: 232
  },
  propellertail: {
    onModifyMove(move) {
      move.tracksTarget = true;
    },
    name: "Propeller Tail",
    rating: 0,
    num: 239
  },
  protean: {
    onPrepareHit(source, target, move) {
      if (move.hasBounced)
        return;
      const type = move.type;
      if (type && type !== "???" && source.getTypes().join() !== type) {
        if (!source.setType(type))
          return;
        this.add("-start", source, "typechange", type, "[from] ability: Protean");
      }
    },
    name: "Protean",
    rating: 4.5,
    num: 168
  },
  psychicsurge: {
    onStart(source) {
      this.field.setTerrain("psychicterrain");
    },
    name: "Psychic Surge",
    rating: 4,
    num: 227
  },
  punkrock: {
    onBasePowerPriority: 7,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["sound"]) {
        this.debug("Punk Rock boost");
        return this.chainModify([5325, 4096]);
      }
    },
    onSourceModifyDamage(damage, source, target, move) {
      if (move.flags["sound"]) {
        this.debug("Punk Rock weaken");
        return this.chainModify(0.5);
      }
    },
    name: "Punk Rock",
    rating: 3.5,
    num: 244
  },
  purepower: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk) {
      return this.chainModify(2);
    },
    name: "Pure Power",
    rating: 5,
    num: 74
  },
  queenlymajesty: {
    onFoeTryMove(target, source, move) {
      const targetAllExceptions = ["perishsong", "flowershield", "rototiller"];
      if (move.target === "foeSide" || move.target === "all" && !targetAllExceptions.includes(move.id)) {
        return;
      }
      const dazzlingHolder = this.effectData.target;
      if ((source.side === dazzlingHolder.side || move.target === "all") && move.priority > 0.1) {
        this.attrLastMove("[still]");
        this.add("cant", dazzlingHolder, "ability: Queenly Majesty", move, "[of] " + target);
        return false;
      }
    },
    name: "Queenly Majesty",
    rating: 2.5,
    num: 214
  },
  quickdraw: {
    onFractionalPriorityPriority: -1,
    onFractionalPriority(priority, pokemon2, target, move) {
      if (move.category !== "Status" && this.randomChance(3, 10)) {
        this.add("-activate", pokemon2, "ability: Quick Draw");
        return 0.1;
      }
    },
    name: "Quick Draw",
    rating: 2.5,
    num: 259
  },
  quickfeet: {
    onModifySpe(spe, pokemon2) {
      if (pokemon2.status) {
        return this.chainModify(1.5);
      }
    },
    name: "Quick Feet",
    rating: 2.5,
    num: 95
  },
  raindish: {
    onWeather(target, source, effect) {
      if (target.hasItem("utilityumbrella"))
        return;
      if (effect.id === "raindance" || effect.id === "primordialsea") {
        this.heal(target.baseMaxhp / 16);
      }
    },
    name: "Rain Dish",
    rating: 1.5,
    num: 44
  },
  rattled: {
    onDamagingHit(damage, target, source, move) {
      if (["Dark", "Bug", "Ghost"].includes(move.type)) {
        this.boost({ spe: 1 });
      }
    },
    onAfterBoost(boost, target, source, effect) {
      if (effect && effect.id === "intimidate") {
        this.boost({ spe: 1 });
      }
    },
    name: "Rattled",
    rating: 1.5,
    num: 155
  },
  receiver: {
    onAllyFaint(target) {
      if (!this.effectData.target.hp)
        return;
      const ability = target.getAbility();
      const additionalBannedAbilities = [
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
        "wonderguard"
      ];
      if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability))
        return;
      this.add("-ability", this.effectData.target, ability, "[from] ability: Receiver", "[of] " + target);
      this.effectData.target.setAbility(ability);
    },
    name: "Receiver",
    rating: 0,
    num: 222
  },
  reckless: {
    onBasePowerPriority: 23,
    onBasePower(basePower, attacker, defender, move) {
      if (move.recoil || move.hasCrashDamage) {
        this.debug("Reckless boost");
        return this.chainModify([4915, 4096]);
      }
    },
    name: "Reckless",
    rating: 3,
    num: 120
  },
  refrigerate: {
    onModifyTypePriority: -1,
    onModifyType(move, pokemon2) {
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
        move.type = "Ice";
        move.refrigerateBoosted = true;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon2, target, move) {
      if (move.refrigerateBoosted)
        return this.chainModify([4915, 4096]);
    },
    name: "Refrigerate",
    rating: 4,
    num: 174
  },
  regenerator: {
    onSwitchOut(pokemon2) {
      pokemon2.heal(pokemon2.baseMaxhp / 3);
    },
    name: "Regenerator",
    rating: 4.5,
    num: 144
  },
  ripen: {
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
    onTryEatItem(item, pokemon2) {
      this.add("-activate", pokemon2, "ability: Ripen");
    },
    onEatItem(item, pokemon2) {
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
      pokemon2.abilityData.berryWeaken = weakenBerries.includes(item.name);
    },
    name: "Ripen",
    rating: 2,
    num: 247
  },
  rivalry: {
    onBasePowerPriority: 24,
    onBasePower(basePower, attacker, defender, move) {
      if (attacker.gender && defender.gender) {
        if (attacker.gender === defender.gender) {
          this.debug("Rivalry boost");
          return this.chainModify(1.25);
        } else {
          this.debug("Rivalry weaken");
          return this.chainModify(0.75);
        }
      }
    },
    name: "Rivalry",
    rating: 0,
    num: 79
  },
  rkssystem: {
    // RKS System's type-changing itself is implemented in statuses.js
    isPermanent: true,
    name: "RKS System",
    rating: 4,
    num: 225
  },
  rockhead: {
    onDamage(damage, target, source, effect) {
      if (effect.id === "recoil") {
        if (!this.activeMove)
          throw new Error("Battle.activeMove is null");
        if (this.activeMove.id !== "struggle")
          return null;
      }
    },
    name: "Rock Head",
    rating: 3,
    num: 69
  },
  roughskin: {
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        this.damage(source.baseMaxhp / 8, source, target);
      }
    },
    name: "Rough Skin",
    rating: 2.5,
    num: 24
  },
  runaway: {
    name: "Run Away",
    rating: 0,
    num: 50
  },
  sandforce: {
    onBasePowerPriority: 21,
    onBasePower(basePower, attacker, defender, move) {
      if (this.field.isWeather("sandstorm")) {
        if (move.type === "Rock" || move.type === "Ground" || move.type === "Steel") {
          this.debug("Sand Force boost");
          return this.chainModify([5325, 4096]);
        }
      }
    },
    onImmunity(type, pokemon2) {
      if (type === "sandstorm")
        return false;
    },
    name: "Sand Force",
    rating: 2,
    num: 159
  },
  sandrush: {
    onModifySpe(spe, pokemon2) {
      if (this.field.isWeather("sandstorm")) {
        return this.chainModify(2);
      }
    },
    onImmunity(type, pokemon2) {
      if (type === "sandstorm")
        return false;
    },
    name: "Sand Rush",
    rating: 3,
    num: 146
  },
  sandspit: {
    onDamagingHit(damage, target, source, move) {
      if (this.field.getWeather().id !== "sandstorm") {
        this.field.setWeather("sandstorm");
      }
    },
    name: "Sand Spit",
    rating: 2,
    num: 245
  },
  sandstream: {
    onStart(source) {
      this.field.setWeather("sandstorm");
    },
    name: "Sand Stream",
    rating: 4,
    num: 45
  },
  sandveil: {
    onImmunity(type, pokemon2) {
      if (type === "sandstorm")
        return false;
    },
    onModifyAccuracyPriority: 8,
    onModifyAccuracy(accuracy) {
      if (typeof accuracy !== "number")
        return;
      if (this.field.isWeather("sandstorm")) {
        this.debug("Sand Veil - decreasing accuracy");
        return accuracy * 0.8;
      }
    },
    name: "Sand Veil",
    rating: 1.5,
    num: 8
  },
  sapsipper: {
    onTryHitPriority: 1,
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Grass") {
        if (!this.boost({ atk: 1 })) {
          this.add("-immune", target, "[from] ability: Sap Sipper");
        }
        return null;
      }
    },
    onAllyTryHitSide(target, source, move) {
      if (target === this.effectData.target || target.side !== source.side)
        return;
      if (move.type === "Grass") {
        this.boost({ atk: 1 }, this.effectData.target);
      }
    },
    name: "Sap Sipper",
    rating: 3,
    num: 157
  },
  schooling: {
    onStart(pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies !== "Wishiwashi" || pokemon2.level < 20 || pokemon2.transformed)
        return;
      if (pokemon2.hp > pokemon2.maxhp / 4) {
        if (pokemon2.species.id === "wishiwashi") {
          pokemon2.formeChange("Wishiwashi-School");
        }
      } else {
        if (pokemon2.species.id === "wishiwashischool") {
          pokemon2.formeChange("Wishiwashi");
        }
      }
    },
    onResidualOrder: 27,
    onResidual(pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies !== "Wishiwashi" || pokemon2.level < 20 || pokemon2.transformed || !pokemon2.hp)
        return;
      if (pokemon2.hp > pokemon2.maxhp / 4) {
        if (pokemon2.species.id === "wishiwashi") {
          pokemon2.formeChange("Wishiwashi-School");
        }
      } else {
        if (pokemon2.species.id === "wishiwashischool") {
          pokemon2.formeChange("Wishiwashi");
        }
      }
    },
    isPermanent: true,
    name: "Schooling",
    rating: 3,
    num: 208
  },
  scrappy: {
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
      if (effect.id === "intimidate") {
        delete boost.atk;
        this.add("-immune", target, "[from] ability: Scrappy");
      }
    },
    name: "Scrappy",
    rating: 3,
    num: 113
  },
  screencleaner: {
    onStart(pokemon2) {
      let activated = false;
      for (const sideCondition of ["reflect", "lightscreen", "auroraveil"]) {
        if (pokemon2.side.getSideCondition(sideCondition)) {
          if (!activated) {
            this.add("-activate", pokemon2, "ability: Screen Cleaner");
            activated = true;
          }
          pokemon2.side.removeSideCondition(sideCondition);
        }
        if (pokemon2.side.foe.getSideCondition(sideCondition)) {
          if (!activated) {
            this.add("-activate", pokemon2, "ability: Screen Cleaner");
            activated = true;
          }
          pokemon2.side.foe.removeSideCondition(sideCondition);
        }
      }
    },
    name: "Screen Cleaner",
    rating: 2,
    num: 251
  },
  serenegrace: {
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
    name: "Serene Grace",
    rating: 3.5,
    num: 32
  },
  shadowshield: {
    onSourceModifyDamage(damage, source, target, move) {
      if (target.hp >= target.maxhp) {
        this.debug("Shadow Shield weaken");
        return this.chainModify(0.5);
      }
    },
    isUnbreakable: true,
    name: "Shadow Shield",
    rating: 3.5,
    num: 231
  },
  shadowtag: {
    onFoeTrapPokemon(pokemon2) {
      if (!pokemon2.hasAbility("shadowtag") && this.isAdjacent(pokemon2, this.effectData.target)) {
        pokemon2.tryTrap(true);
      }
    },
    onFoeMaybeTrapPokemon(pokemon2, source) {
      if (!source)
        source = this.effectData.target;
      if (!source || !this.isAdjacent(pokemon2, source))
        return;
      if (!pokemon2.hasAbility("shadowtag")) {
        pokemon2.maybeTrapped = true;
      }
    },
    name: "Shadow Tag",
    rating: 5,
    num: 23
  },
  shedskin: {
    onResidualOrder: 5,
    onResidualSubOrder: 4,
    onResidual(pokemon2) {
      if (pokemon2.hp && pokemon2.status && this.randomChance(1, 3)) {
        this.debug("shed skin");
        this.add("-activate", pokemon2, "ability: Shed Skin");
        pokemon2.cureStatus();
      }
    },
    name: "Shed Skin",
    rating: 3,
    num: 61
  },
  sheerforce: {
    onModifyMove(move, pokemon2) {
      if (move.secondaries) {
        delete move.secondaries;
        delete move.self;
        if (move.id === "clangoroussoulblaze")
          delete move.selfBoost;
        move.hasSheerForce = true;
      }
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, pokemon2, target, move) {
      if (move.hasSheerForce)
        return this.chainModify([5325, 4096]);
    },
    name: "Sheer Force",
    rating: 3.5,
    num: 125
  },
  shellarmor: {
    onCriticalHit: false,
    name: "Shell Armor",
    rating: 1,
    num: 75
  },
  shielddust: {
    onModifySecondaries(secondaries) {
      this.debug("Shield Dust prevent secondary");
      return secondaries.filter((effect) => !!(effect.self || effect.dustproof));
    },
    name: "Shield Dust",
    rating: 2,
    num: 19
  },
  shieldsdown: {
    onStart(pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies !== "Minior" || pokemon2.transformed)
        return;
      if (pokemon2.hp > pokemon2.maxhp / 2) {
        if (pokemon2.species.forme !== "Meteor") {
          pokemon2.formeChange("Minior-Meteor");
        }
      } else {
        if (pokemon2.species.forme === "Meteor") {
          pokemon2.formeChange(pokemon2.set.species);
        }
      }
    },
    onResidualOrder: 27,
    onResidual(pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies !== "Minior" || pokemon2.transformed || !pokemon2.hp)
        return;
      if (pokemon2.hp > pokemon2.maxhp / 2) {
        if (pokemon2.species.forme !== "Meteor") {
          pokemon2.formeChange("Minior-Meteor");
        }
      } else {
        if (pokemon2.species.forme === "Meteor") {
          pokemon2.formeChange(pokemon2.set.species);
        }
      }
    },
    onSetStatus(status, target, source, effect) {
      if (target.species.id !== "miniormeteor" || target.transformed)
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Shields Down");
      }
      return false;
    },
    onTryAddVolatile(status, target) {
      if (target.species.id !== "miniormeteor" || target.transformed)
        return;
      if (status.id !== "yawn")
        return;
      this.add("-immune", target, "[from] ability: Shields Down");
      return null;
    },
    isPermanent: true,
    isUnbreakable: true,
    name: "Shields Down",
    rating: 3,
    num: 197
  },
  simple: {
    onBoost(boost, target, source, effect) {
      if (effect && effect.id === "zpower")
        return;
      let i;
      for (i in boost) {
        boost[i] *= 2;
      }
    },
    name: "Simple",
    rating: 4,
    num: 86
  },
  skilllink: {
    onModifyMove(move) {
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
  slowstart: {
    onStart(pokemon2) {
      pokemon2.addVolatile("slowstart");
    },
    onEnd(pokemon2) {
      delete pokemon2.volatiles["slowstart"];
      this.add("-end", pokemon2, "Slow Start", "[silent]");
    },
    condition: {
      duration: 5,
      onStart(target) {
        this.add("-start", target, "ability: Slow Start");
      },
      onModifyAtkPriority: 5,
      onModifyAtk(atk, pokemon2) {
        return this.chainModify(0.5);
      },
      onModifySpe(spe, pokemon2) {
        return this.chainModify(0.5);
      },
      onEnd(target) {
        this.add("-end", target, "Slow Start");
      }
    },
    name: "Slow Start",
    rating: -1,
    num: 112
  },
  slushrush: {
    onModifySpe(spe, pokemon2) {
      if (this.field.isWeather("hail")) {
        return this.chainModify(2);
      }
    },
    name: "Slush Rush",
    rating: 3,
    num: 202
  },
  sniper: {
    onModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).crit) {
        this.debug("Sniper boost");
        return this.chainModify(1.5);
      }
    },
    name: "Sniper",
    rating: 2,
    num: 97
  },
  snowcloak: {
    onImmunity(type, pokemon2) {
      if (type === "hail")
        return false;
    },
    onModifyAccuracyPriority: 8,
    onModifyAccuracy(accuracy) {
      if (typeof accuracy !== "number")
        return;
      if (this.field.isWeather("hail")) {
        this.debug("Snow Cloak - decreasing accuracy");
        return accuracy * 0.8;
      }
    },
    name: "Snow Cloak",
    rating: 1.5,
    num: 81
  },
  snowwarning: {
    onStart(source) {
      this.field.setWeather("hail");
    },
    name: "Snow Warning",
    rating: 4,
    num: 117
  },
  solarpower: {
    onModifySpAPriority: 5,
    onModifySpA(spa, pokemon2) {
      if (["sunnyday", "desolateland"].includes(pokemon2.effectiveWeather())) {
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
  solidrock: {
    onSourceModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).typeMod > 0) {
        this.debug("Solid Rock neutralize");
        return this.chainModify(0.75);
      }
    },
    name: "Solid Rock",
    rating: 3,
    num: 116
  },
  soulheart: {
    onAnyFaintPriority: 1,
    onAnyFaint() {
      this.boost({ spa: 1 }, this.effectData.target);
    },
    name: "Soul-Heart",
    rating: 3.5,
    num: 220
  },
  soundproof: {
    onTryHit(target, source, move) {
      if (move.target !== "self" && move.flags["sound"]) {
        this.add("-immune", target, "[from] ability: Soundproof");
        return null;
      }
    },
    onAllyTryHitSide(target, source, move) {
      if (move.flags["sound"]) {
        this.add("-immune", this.effectData.target, "[from] ability: Soundproof");
      }
    },
    name: "Soundproof",
    rating: 1.5,
    num: 43
  },
  speedboost: {
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    onResidual(pokemon2) {
      if (pokemon2.activeTurns) {
        this.boost({ spe: 1 });
      }
    },
    name: "Speed Boost",
    rating: 4.5,
    num: 3
  },
  stakeout: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender) {
      if (!defender.activeTurns) {
        this.debug("Stakeout boost");
        return this.chainModify(2);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender) {
      if (!defender.activeTurns) {
        this.debug("Stakeout boost");
        return this.chainModify(2);
      }
    },
    name: "Stakeout",
    rating: 4.5,
    num: 198
  },
  stall: {
    onFractionalPriority: -0.1,
    name: "Stall",
    rating: -1,
    num: 100
  },
  stalwart: {
    onModifyMove(move) {
      move.tracksTarget = true;
    },
    name: "Stalwart",
    rating: 0,
    num: 242
  },
  stamina: {
    onDamagingHit(damage, target, source, effect) {
      this.boost({ def: 1 });
    },
    name: "Stamina",
    rating: 3.5,
    num: 192
  },
  stancechange: {
    onBeforeMovePriority: 0.5,
    onBeforeMove(attacker, defender, move) {
      if (attacker.species.baseSpecies !== "Aegislash" || attacker.transformed)
        return;
      if (move.category === "Status" && move.id !== "kingsshield")
        return;
      const targetForme = move.id === "kingsshield" ? "Aegislash" : "Aegislash-Blade";
      if (attacker.species.name !== targetForme)
        attacker.formeChange(targetForme);
    },
    isPermanent: true,
    name: "Stance Change",
    rating: 4,
    num: 176
  },
  static: {
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        if (this.randomChance(3, 10)) {
          source.trySetStatus("par", target);
        }
      }
    },
    name: "Static",
    rating: 2,
    num: 9
  },
  steadfast: {
    onFlinch(pokemon2) {
      this.boost({ spe: 1 });
    },
    name: "Steadfast",
    rating: 1,
    num: 80
  },
  steamengine: {
    onDamagingHit(damage, target, source, move) {
      if (["Water", "Fire"].includes(move.type)) {
        this.boost({ spe: 6 });
      }
    },
    name: "Steam Engine",
    rating: 2,
    num: 243
  },
  steelworker: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Steel") {
        this.debug("Steelworker boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Steel") {
        this.debug("Steelworker boost");
        return this.chainModify(1.5);
      }
    },
    name: "Steelworker",
    rating: 3.5,
    num: 200
  },
  steelyspirit: {
    onAllyBasePowerPriority: 22,
    onAllyBasePower(basePower, attacker, defender, move) {
      if (move.type === "Steel") {
        this.debug("Steely Spirit boost");
        return this.chainModify(1.5);
      }
    },
    name: "Steely Spirit",
    rating: 3.5,
    num: 252
  },
  stench: {
    onModifyMovePriority: -1,
    onModifyMove(move) {
      if (move.category !== "Status") {
        this.debug("Adding Stench flinch");
        if (!move.secondaries)
          move.secondaries = [];
        for (const secondary of move.secondaries) {
          if (secondary.volatileStatus === "flinch")
            return;
        }
        move.secondaries.push({
          chance: 10,
          volatileStatus: "flinch"
        });
      }
    },
    name: "Stench",
    rating: 0.5,
    num: 1
  },
  stickyhold: {
    onTakeItem(item, pokemon2, source) {
      if (this.suppressingAttackEvents(pokemon2) || !pokemon2.hp || pokemon2.item === "stickybarb")
        return;
      if (!this.activeMove)
        throw new Error("Battle.activeMove is null");
      if (source && source !== pokemon2 || this.activeMove.id === "knockoff") {
        this.add("-activate", pokemon2, "ability: Sticky Hold");
        return false;
      }
    },
    name: "Sticky Hold",
    rating: 2,
    num: 60
  },
  stormdrain: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Water") {
        if (!this.boost({ spa: 1 })) {
          this.add("-immune", target, "[from] ability: Storm Drain");
        }
        return null;
      }
    },
    onAnyRedirectTarget(target, source, source2, move) {
      if (move.type !== "Water" || ["firepledge", "grasspledge", "waterpledge"].includes(move.id))
        return;
      const redirectTarget = ["randomNormal", "adjacentFoe"].includes(move.target) ? "normal" : move.target;
      if (this.validTarget(this.effectData.target, source, redirectTarget)) {
        if (move.smartTarget)
          move.smartTarget = false;
        if (this.effectData.target !== target) {
          this.add("-activate", this.effectData.target, "ability: Storm Drain");
        }
        return this.effectData.target;
      }
    },
    name: "Storm Drain",
    rating: 3,
    num: 114
  },
  strongjaw: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["bite"]) {
        return this.chainModify(1.5);
      }
    },
    name: "Strong Jaw",
    rating: 3,
    num: 173
  },
  sturdy: {
    onTryHit(pokemon2, target, move) {
      if (move.ohko) {
        this.add("-immune", pokemon2, "[from] ability: Sturdy");
        return null;
      }
    },
    onDamagePriority: -100,
    onDamage(damage, target, source, effect) {
      if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === "Move") {
        this.add("-ability", target, "Sturdy");
        return target.hp - 1;
      }
    },
    name: "Sturdy",
    rating: 3,
    num: 5
  },
  suctioncups: {
    onDragOutPriority: 1,
    onDragOut(pokemon2) {
      this.add("-activate", pokemon2, "ability: Suction Cups");
      return null;
    },
    name: "Suction Cups",
    rating: 1,
    num: 21
  },
  superluck: {
    onModifyCritRatio(critRatio) {
      return critRatio + 1;
    },
    name: "Super Luck",
    rating: 1.5,
    num: 105
  },
  surgesurfer: {
    onModifySpe(spe) {
      if (this.field.isTerrain("electricterrain")) {
        return this.chainModify(2);
      }
    },
    name: "Surge Surfer",
    rating: 3,
    num: 207
  },
  swarm: {
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
    name: "Swarm",
    rating: 2,
    num: 68
  },
  sweetveil: {
    name: "Sweet Veil",
    onAllySetStatus(status, target, source, effect) {
      if (status.id === "slp") {
        this.debug("Sweet Veil interrupts sleep");
        const effectHolder = this.effectData.target;
        this.add("-block", target, "ability: Sweet Veil", "[of] " + effectHolder);
        return null;
      }
    },
    onAllyTryAddVolatile(status, target) {
      if (status.id === "yawn") {
        this.debug("Sweet Veil blocking yawn");
        const effectHolder = this.effectData.target;
        this.add("-block", target, "ability: Sweet Veil", "[of] " + effectHolder);
        return null;
      }
    },
    rating: 2,
    num: 175
  },
  swiftswim: {
    onModifySpe(spe, pokemon2) {
      if (["raindance", "primordialsea"].includes(pokemon2.effectiveWeather())) {
        return this.chainModify(2);
      }
    },
    name: "Swift Swim",
    rating: 3,
    num: 33
  },
  symbiosis: {
    onAllyAfterUseItem(item, pokemon2) {
      if (pokemon2.switchFlag)
        return;
      const source = this.effectData.target;
      const myItem = source.takeItem();
      if (!myItem)
        return;
      if (!this.singleEvent("TakeItem", myItem, source.itemData, pokemon2, source, this.effect, myItem) || !pokemon2.setItem(myItem)) {
        source.item = myItem.id;
        return;
      }
      this.add("-activate", source, "ability: Symbiosis", myItem, "[of] " + pokemon2);
    },
    name: "Symbiosis",
    rating: 0,
    num: 180
  },
  synchronize: {
    onAfterSetStatus(status, target, source, effect) {
      if (!source || source === target)
        return;
      if (effect && effect.id === "toxicspikes")
        return;
      if (status.id === "slp" || status.id === "frz")
        return;
      this.add("-activate", target, "ability: Synchronize");
      source.trySetStatus(status, target, { status: status.id, id: "synchronize" });
    },
    name: "Synchronize",
    rating: 2,
    num: 28
  },
  tangledfeet: {
    onModifyAccuracyPriority: 6,
    onModifyAccuracy(accuracy, target) {
      if (typeof accuracy !== "number")
        return;
      if (target?.volatiles["confusion"]) {
        this.debug("Tangled Feet - decreasing accuracy");
        return accuracy * 0.5;
      }
    },
    name: "Tangled Feet",
    rating: 1,
    num: 77
  },
  tanglinghair: {
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        this.add("-ability", target, "Tangling Hair");
        this.boost({ spe: -1 }, source, target, null, true);
      }
    },
    name: "Tangling Hair",
    rating: 2,
    num: 221
  },
  technician: {
    onBasePowerPriority: 30,
    onBasePower(basePower, attacker, defender, move) {
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
  telepathy: {
    onTryHit(target, source, move) {
      if (target !== source && target.side === source.side && move.category !== "Status") {
        this.add("-activate", target, "ability: Telepathy");
        return null;
      }
    },
    name: "Telepathy",
    rating: 0,
    num: 140
  },
  teravolt: {
    onStart(pokemon2) {
      this.add("-ability", pokemon2, "Teravolt");
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    },
    name: "Teravolt",
    rating: 3.5,
    num: 164
  },
  thickfat: {
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
    name: "Thick Fat",
    rating: 3.5,
    num: 47
  },
  tintedlens: {
    onModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).typeMod < 0) {
        this.debug("Tinted Lens boost");
        return this.chainModify(2);
      }
    },
    name: "Tinted Lens",
    rating: 4,
    num: 110
  },
  torrent: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Water" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Torrent boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Water" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Torrent boost");
        return this.chainModify(1.5);
      }
    },
    name: "Torrent",
    rating: 2,
    num: 67
  },
  toughclaws: {
    onBasePowerPriority: 21,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["contact"]) {
        return this.chainModify([5325, 4096]);
      }
    },
    name: "Tough Claws",
    rating: 3.5,
    num: 181
  },
  toxicboost: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if ((attacker.status === "psn" || attacker.status === "tox") && move.category === "Physical") {
        return this.chainModify(1.5);
      }
    },
    name: "Toxic Boost",
    rating: 2.5,
    num: 137
  },
  trace: {
    onStart(pokemon2) {
      if (pokemon2.side.foe.active.some(
        (foeActive) => foeActive && this.isAdjacent(pokemon2, foeActive) && foeActive.ability === "noability"
      )) {
        this.effectData.gaveUp = true;
      }
    },
    onUpdate(pokemon2) {
      if (!pokemon2.isStarted || this.effectData.gaveUp)
        return;
      const possibleTargets = pokemon2.side.foe.active.filter((foeActive) => foeActive && this.isAdjacent(pokemon2, foeActive));
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
          "zenmode"
        ];
        if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) {
          possibleTargets.splice(rand, 1);
          continue;
        }
        this.add("-ability", pokemon2, ability, "[from] ability: Trace", "[of] " + target);
        pokemon2.setAbility(ability);
        return;
      }
    },
    name: "Trace",
    rating: 2.5,
    num: 36
  },
  trailofmalady: {
    onStart(side) {
      this.add("-sidestart", side, "Trail of Malady");
    },
    onEnd(side) {
      this.add("-sideend", side, "Trail of Malady");
    },
    sideCondition: "trailofmalady",
    condition: {
      onStart(pokemon2) {
        pokemon2.side.removeSideCondition("trailofmalady");
        if (!pokemon2.isGrounded())
          return;
        else if (pokemon2.hasType("Poison") || pokemon2.hasType("Steel") || pokemon2.hasItem("heavydutyboots"))
          return;
        else
          pokemon2.trySetStatus("psn", pokemon2.side.foe.active[0]);
      }
    },
    name: "Trail of Malady",
    rating: 4,
    num: 191
  },
  transistor: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Electric") {
        this.debug("Transistor boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Electric") {
        this.debug("Transistor boost");
        return this.chainModify(1.5);
      }
    },
    name: "Transistor",
    rating: 3.5,
    num: 262
  },
  triage: {
    onModifyPriority(priority, pokemon2, target, move) {
      if (move?.flags["heal"])
        return priority + 3;
    },
    name: "Triage",
    rating: 3.5,
    num: 205
  },
  truant: {
    onStart(pokemon2) {
      pokemon2.removeVolatile("truant");
      if (pokemon2.activeTurns && (pokemon2.moveThisTurnResult !== void 0 || !this.queue.willMove(pokemon2))) {
        pokemon2.addVolatile("truant");
      }
    },
    onBeforeMovePriority: 9,
    onBeforeMove(pokemon2) {
      if (pokemon2.removeVolatile("truant")) {
        this.add("cant", pokemon2, "ability: Truant");
        return false;
      }
      pokemon2.addVolatile("truant");
    },
    condition: {},
    name: "Truant",
    rating: -1,
    num: 54
  },
  turboblaze: {
    onStart(pokemon2) {
      this.add("-ability", pokemon2, "Turboblaze");
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    },
    name: "Turboblaze",
    rating: 3.5,
    num: 163
  },
  unaware: {
    name: "Unaware",
    onAnyModifyBoost(boosts, pokemon2) {
      const unawareUser = this.effectData.target;
      if (unawareUser === pokemon2)
        return;
      if (unawareUser === this.activePokemon && pokemon2 === this.activeTarget) {
        boosts["def"] = 0;
        boosts["spd"] = 0;
        boosts["evasion"] = 0;
      }
      if (pokemon2 === this.activePokemon && unawareUser === this.activeTarget) {
        boosts["atk"] = 0;
        boosts["def"] = 0;
        boosts["spa"] = 0;
        boosts["accuracy"] = 0;
      }
    },
    rating: 4,
    num: 109
  },
  unburden: {
    onAfterUseItem(item, pokemon2) {
      if (pokemon2 !== this.effectData.target)
        return;
      pokemon2.addVolatile("unburden");
    },
    onTakeItem(item, pokemon2) {
      pokemon2.addVolatile("unburden");
    },
    onEnd(pokemon2) {
      pokemon2.removeVolatile("unburden");
    },
    condition: {
      onModifySpe(spe, pokemon2) {
        if (!pokemon2.item) {
          return this.chainModify(2);
        }
      }
    },
    name: "Unburden",
    rating: 3.5,
    num: 84
  },
  universalcharm: {
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        if (this.randomChance(3, 10)) {
          source.addVolatile("attract", this.effectData.target);
        }
      }
    },
    name: "Universal Charm",
    rating: 0.5,
    num: 56
  },
  unnerve: {
    onPreStart(pokemon2) {
      this.add("-ability", pokemon2, "Unnerve", pokemon2.side.foe);
    },
    onFoeTryEatItem: false,
    name: "Unnerve",
    rating: 1.5,
    num: 127
  },
  unseenfist: {
    onModifyMove(move) {
      if (move.flags["contact"])
        delete move.flags["protect"];
    },
    name: "Unseen Fist",
    rating: 2,
    num: 260
  },
  victorystar: {
    onAllyModifyMove(move) {
      if (typeof move.accuracy === "number") {
        move.accuracy *= 1.1;
      }
    },
    name: "Victory Star",
    rating: 2,
    num: 162
  },
  vitalspirit: {
    onUpdate(pokemon2) {
      if (pokemon2.status === "slp") {
        this.add("-activate", pokemon2, "ability: Vital Spirit");
        pokemon2.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "slp")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Vital Spirit");
      }
      return false;
    },
    name: "Vital Spirit",
    rating: 2,
    num: 72
  },
  voltabsorb: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Electric") {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Volt Absorb");
        }
        return null;
      }
    },
    name: "Volt Absorb",
    rating: 3.5,
    num: 10
  },
  wanderingspirit: {
    onDamagingHit(damage, target, source, move) {
      const additionalBannedAbilities = ["hungerswitch", "illusion", "neutralizinggas", "wonderguard"];
      if (source.getAbility().isPermanent || additionalBannedAbilities.includes(source.ability) || target.volatiles["dynamax"]) {
        return;
      }
      if (move.flags["contact"]) {
        const sourceAbility = source.setAbility("wanderingspirit", target);
        if (!sourceAbility)
          return;
        if (target.side === source.side) {
          this.add("-activate", target, "Skill Swap", "", "", "[of] " + source);
        } else {
          this.add("-activate", target, "ability: Wandering Spirit", this.dex.getAbility(sourceAbility).name, "Wandering Spirit", "[of] " + source);
        }
        target.setAbility(sourceAbility);
      }
    },
    name: "Wandering Spirit",
    rating: 2.5,
    num: 254
  },
  warped: {
    onDamagingHit(damage, target, source, move) {
      if (move.flags["contact"]) {
        if (this.randomChance(3, 10)) {
          this.actions.useMove("Trick Room", source, source);
        }
      }
    },
    name: "Warped",
    rating: 2,
    num: 49
  },
  waterabsorb: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Water") {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Water Absorb");
        }
        return null;
      }
    },
    name: "Water Absorb",
    rating: 3.5,
    num: 11
  },
  waterbubble: {
    onSourceModifyAtkPriority: 5,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Fire") {
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Fire") {
        return this.chainModify(0.5);
      }
    },
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Water") {
        return this.chainModify(2);
      }
    },
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Water") {
        return this.chainModify(2);
      }
    },
    onUpdate(pokemon2) {
      if (pokemon2.status === "brn") {
        this.add("-activate", pokemon2, "ability: Water Bubble");
        pokemon2.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "brn")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Water Bubble");
      }
      return false;
    },
    name: "Water Bubble",
    rating: 4.5,
    num: 199
  },
  watercompaction: {
    onDamagingHit(damage, target, source, move) {
      if (move.type === "Water") {
        this.boost({ def: 2 });
      }
    },
    name: "Water Compaction",
    rating: 1.5,
    num: 195
  },
  waterveil: {
    onUpdate(pokemon2) {
      if (pokemon2.status === "brn") {
        this.add("-activate", pokemon2, "ability: Water Veil");
        pokemon2.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "brn")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Water Veil");
      }
      return false;
    },
    name: "Water Veil",
    rating: 2,
    num: 41
  },
  weakarmor: {
    onDamagingHit(damage, target, source, move) {
      if (move.category === "Physical") {
        this.boost({ def: -1, spe: 2 }, target, target);
      }
    },
    name: "Weak Armor",
    rating: 1,
    num: 133
  },
  whitesmoke: {
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
        this.add("-fail", target, "unboost", "[from] ability: White Smoke", "[of] " + target);
      }
    },
    name: "White Smoke",
    rating: 2,
    num: 73
  },
  wimpout: {
    onEmergencyExit(target) {
      if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag)
        return;
      for (const side of this.sides) {
        for (const active of side.active) {
          active.switchFlag = false;
        }
      }
      target.switchFlag = true;
      this.add("-activate", target, "ability: Wimp Out");
    },
    name: "Wimp Out",
    rating: 1,
    num: 193
  },
  wonderguard: {
    onTryHit(target, source, move) {
      if (target === source || move.category === "Status" || move.type === "???" || move.id === "struggle")
        return;
      if (move.id === "skydrop" && !source.volatiles["skydrop"])
        return;
      this.debug("Wonder Guard immunity: " + move.id);
      if (target.runEffectiveness(move) <= 0) {
        if (move.smartTarget) {
          move.smartTarget = false;
        } else {
          this.add("-immune", target, "[from] ability: Wonder Guard");
        }
        return null;
      }
    },
    name: "Wonder Guard",
    rating: 5,
    num: 25
  },
  wonderskin: {
    onModifyAccuracyPriority: 10,
    onModifyAccuracy(accuracy, target, source, move) {
      if (move.category === "Status" && typeof accuracy === "number") {
        this.debug("Wonder Skin - setting accuracy to 50");
        return 50;
      }
    },
    name: "Wonder Skin",
    rating: 2,
    num: 147
  },
  zenmode: {
    onResidualOrder: 27,
    onResidual(pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies !== "Darmanitan" || pokemon2.transformed) {
        return;
      }
      if (pokemon2.hp <= pokemon2.maxhp / 2 && !["Zen", "Galar-Zen"].includes(pokemon2.species.forme)) {
        pokemon2.addVolatile("zenmode");
      } else if (pokemon2.hp > pokemon2.maxhp / 2 && ["Zen", "Galar-Zen"].includes(pokemon2.species.forme)) {
        pokemon2.addVolatile("zenmode");
        pokemon2.removeVolatile("zenmode");
      }
    },
    onEnd(pokemon2) {
      if (!pokemon2.volatiles["zenmode"] || !pokemon2.hp)
        return;
      pokemon2.transformed = false;
      delete pokemon2.volatiles["zenmode"];
      if (pokemon2.species.baseSpecies === "Darmanitan" && pokemon2.species.battleOnly) {
        pokemon2.formeChange(pokemon2.species.battleOnly, this.effect, false, "[silent]");
      }
    },
    condition: {
      onStart(pokemon2) {
        if (!pokemon2.species.name.includes("Galar")) {
          if (pokemon2.species.id !== "darmanitanzen")
            pokemon2.formeChange("Darmanitan-Zen");
        } else {
          if (pokemon2.species.id !== "darmanitangalarzen")
            pokemon2.formeChange("Darmanitan-Galar-Zen");
        }
      },
      onEnd(pokemon2) {
        if (["Zen", "Galar-Zen"].includes(pokemon2.species.forme)) {
          pokemon2.formeChange(pokemon2.species.battleOnly);
        }
      }
    },
    isPermanent: true,
    name: "Zen Mode",
    rating: 0,
    num: 161
  },
  // CAP
  mountaineer: {
    onDamage(damage, target, source, effect) {
      if (effect && effect.id === "stealthrock") {
        return false;
      }
    },
    onTryHit(target, source, move) {
      if (move.type === "Rock" && !target.activeTurns) {
        this.add("-immune", target, "[from] ability: Mountaineer");
        return null;
      }
    },
    isNonstandard: "CAP",
    name: "Mountaineer",
    rating: 3,
    num: -2
  },
  rebound: {
    isNonstandard: "CAP",
    name: "Rebound",
    onTryHitPriority: 1,
    onTryHit(target, source, move) {
      if (this.effectData.target.activeTurns)
        return;
      if (target === source || move.hasBounced || !move.flags["reflectable"]) {
        return;
      }
      const newMove = this.dex.getActiveMove(move.id);
      newMove.hasBounced = true;
      this.useMove(newMove, target, source);
      return null;
    },
    onAllyTryHitSide(target, source, move) {
      if (this.effectData.target.activeTurns)
        return;
      if (target.side === source.side || move.hasBounced || !move.flags["reflectable"]) {
        return;
      }
      const newMove = this.dex.getActiveMove(move.id);
      newMove.hasBounced = true;
      this.useMove(newMove, this.effectData.target, source);
      return null;
    },
    condition: {
      duration: 1
    },
    rating: 3,
    num: -3
  },
  persistent: {
    isNonstandard: "CAP",
    name: "Persistent",
    // implemented in the corresponding move
    rating: 3,
    num: -4
  }
};
//# sourceMappingURL=abilities.js.map
