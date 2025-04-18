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
var moves_exports = {};
__export(moves_exports, {
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
const Moves = {
  worryseed: {
    inherit: true,
    basePower: 90,
    category: "Special",
    pp: 15,
    flags: { protect: 1, mirror: 1, allyanim: 1, metronome: 1 },
    onTryImmunity(target2) {
      return;
    },
    onTryHit(target2) {
      return;
    },
    onHit(pokemon) {
      const oldAbility = pokemon.setAbility("insomnia");
      if (oldAbility && !pokemon.getAbility().flags["cantsuppress"] && pokemon.ability !== "truant") {
        this.add("-ability", pokemon, "Insomnia", "[from] move: Worry Seed");
        if (pokemon.status === "slp") {
          pokemon.cureStatus();
        }
        return;
      }
      return oldAbility;
    }
  },
  milkdrink: {
    inherit: true,
    pp: 10
  },
  recover: {
    inherit: true,
    pp: 10
  },
  roost: {
    inherit: true,
    pp: 10
  },
  shoreup: {
    inherit: true,
    pp: 10
  },
  slackoff: {
    inherit: true,
    pp: 10
  },
  softboiled: {
    inherit: true,
    pp: 10
  },
  lunarblessing: {
    inherit: true,
    pp: 10
  },
  pebblestorm: {
    num: -1,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Pebble Storm",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Power Gem", target2);
      this.add("-anim", source, "Hurricane", target2);
    },
    onModifyPriority(priority, source, target2, move) {
      if (this.field.isWeather("sandstorm")) {
        return priority + 1;
      }
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    contestType: "Cool",
    desc: "If the current weather is Sandstorm, this move has its priority increased by 1.",
    shortDesc: "User on Sandstorm: +1 priority."
  },
  salvestrike: {
    num: -2,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Salve Strike",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Aromatherapy", source);
      this.add("-anim", source, "Double-Edge", target2);
    },
    basePowerCallback(pokemon, target2, move) {
      if (pokemon.status && pokemon.status !== "slp", "frz") {
        this.debug("BP boosted from status condition");
        return move.basePower * 1.5;
      }
      return move.basePower;
    },
    onAfterMoveSecondarySelf(pokemon, target2, move) {
      if (["", "slp", "frz"].includes(pokemon.status))
        return false;
      pokemon.cureStatus();
    },
    secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Cute",
    desc: "1.5x power if user is statused; heals status.",
    shortDesc: "1.5x power if user is statused; heals status."
  },
  twister: {
    inherit: true,
    basePower: 60,
    viable: true,
    pp: 30,
    priority: 1,
    secondary: null,
    desc: "No additional effect.",
    shortDesc: "Usually goes first."
  },
  flameburst: {
    inherit: true,
    viable: true,
    basePower: 40,
    isNonstandard: null,
    pp: 30,
    priority: 1,
    desc: "No additional effect.",
    shortDesc: "Usually goes first."
  },
  overvoltrail: {
    num: -3,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Overvolt Rail",
    pp: 10,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    recoil: [33, 100],
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Zap Cannon", source);
      this.add("-anim", source, "Zap Cannon", target2);
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    contestType: "Cool",
    desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 33% recoil. Usually goes first."
  },
  mentalgymnastics: {
    num: -4,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Mental Gymnastics",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Revelation Dance", source);
      this.add("-anim", source, "Psychic Noise", target2);
    },
    overrideOffensiveStat: "spd",
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "Damage is calculated using the user's Sp. Defense stat as its Sp. Attack, including stat stage changes. Other effects that modify the Sp. Attack stat are used as normal.",
    shortDesc: "Uses user's SpD stat as SpA in damage calculation."
  },
  railgun: {
    num: -5,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Railgun",
    pp: 15,
    priority: -3,
    flags: { protect: 1, failmefirst: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1, bullet: 1 },
    priorityChargeCallback(pokemon) {
      pokemon.addVolatile("railgun");
    },
    condition: {
      duration: 1,
      onStart(pokemon) {
        this.add("-singleturn", pokemon, "move: Railgun");
      },
      onHit(target2, source, move) {
        if (this.checkMoveMakesContact(move, source, target2)) {
          source.trySetStatus("par", target2);
        }
      }
    },
    // FIXME: onMoveAborted(pokemon) {pokemon.removeVolatile('beakblast')},
    onAfterMove(pokemon) {
      pokemon.removeVolatile("railgun");
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    contestType: "Tough",
    desc: "If the user is hit by a contact move this turn before it can execute this move, the attacker is paralyzed.",
    shortDesc: "Paralyzes on contact with the user before it moves.",
    start: "  [POKEMON] started charging up its railgun!"
  },
  // Run It Back
  encore: {
    inherit: true,
    condition: {
      duration: 3,
      durationCallback(target2, source, effect) {
        if (effect?.name === "Run It Back") {
          return 1;
        }
        return 3;
      },
      noCopy: true,
      // doesn't get copied by Z-Baton Pass
      onStart(target2) {
        let move = target2.lastMove;
        if (!move || target2.volatiles["dynamax"])
          return false;
        if (move.isMax && move.baseMove)
          move = this.dex.moves.get(move.baseMove);
        const moveIndex = target2.moves.indexOf(move.id);
        if (move.isZ || move.flags["failencore"] || !target2.moveSlots[moveIndex] || target2.moveSlots[moveIndex].pp <= 0) {
          return false;
        }
        this.effectState.move = move.id;
        this.add("-start", target2, "Encore");
        if (!this.queue.willMove(target2)) {
          this.effectState.duration++;
        }
      },
      onOverrideAction(pokemon, target2, move) {
        if (move.id !== this.effectState.move)
          return this.effectState.move;
      },
      onResidualOrder: 16,
      onResidual(target2) {
        if (!target2.moves.includes(this.effectState.move) || target2.moveSlots[target2.moves.indexOf(this.effectState.move)].pp <= 0) {
          target2.removeVolatile("encore");
        }
      },
      onEnd(target2) {
        this.add("-end", target2, "Encore");
      },
      onDisableMove(pokemon) {
        if (!this.effectState.move || !pokemon.hasMove(this.effectState.move)) {
          return;
        }
        for (const moveSlot of pokemon.moveSlots) {
          if (moveSlot.id !== this.effectState.move) {
            pokemon.disableMove(moveSlot.id);
          }
        }
      }
    }
  },
  // Solar Power section
  morningsun: {
    inherit: true,
    onHit(pokemon) {
      let factor = 0.5;
      if (pokemon.hasAbility("solarpower"))
        factor = 0.667;
      else {
        switch (pokemon.effectiveWeather()) {
          case "sunnyday":
          case "desolateland":
            factor = 0.667;
            break;
          case "raindance":
          case "primordialsea":
          case "sandstorm":
          case "hail":
          case "snow":
            factor = 0.25;
            break;
        }
      }
      const success = !!this.heal(this.modify(pokemon.maxhp, factor));
      if (!success) {
        this.add("-fail", pokemon, "heal");
        return this.NOT_FAIL;
      }
      return success;
    }
  },
  moonlight: {
    inherit: true,
    onHit(pokemon) {
      let factor = 0.5;
      if (pokemon.hasAbility("solarpower"))
        factor = 0.667;
      else {
        switch (pokemon.effectiveWeather()) {
          case "sunnyday":
          case "desolateland":
            factor = 0.667;
            break;
          case "raindance":
          case "primordialsea":
          case "sandstorm":
          case "hail":
          case "snow":
            factor = 0.25;
            break;
        }
      }
      const success = !!this.heal(this.modify(pokemon.maxhp, factor));
      if (!success) {
        this.add("-fail", pokemon, "heal");
        return this.NOT_FAIL;
      }
      return success;
    }
  },
  synthesis: {
    inherit: true,
    onHit(pokemon) {
      let factor = 0.5;
      if (pokemon.hasAbility("solarpower"))
        factor = 0.667;
      else {
        switch (pokemon.effectiveWeather()) {
          case "sunnyday":
          case "desolateland":
            factor = 0.667;
            break;
          case "raindance":
          case "primordialsea":
          case "sandstorm":
          case "hail":
          case "snow":
            factor = 0.25;
            break;
        }
      }
      const success = !!this.heal(this.modify(pokemon.maxhp, factor));
      if (!success) {
        this.add("-fail", pokemon, "heal");
        return this.NOT_FAIL;
      }
      return success;
    }
  },
  growth: {
    inherit: true,
    onModifyMove(move, pokemon) {
      if (["sunnyday", "desolateland"].includes(pokemon.effectiveWeather()) || pokemon.hasAbility("solarpower"))
        move.boosts = { atk: 2, spa: 2 };
    }
  },
  weatherball: {
    inherit: true,
    onModifyType(move, pokemon) {
      if (pokemon.hasAbility("solarpower"))
        move.type = "Fire";
      else {
        switch (pokemon.effectiveWeather()) {
          case "sunnyday":
          case "desolateland":
            move.type = "Fire";
            break;
          case "raindance":
          case "primordialsea":
            move.type = "Water";
            break;
          case "sandstorm":
            move.type = "Rock";
            break;
          case "hail":
          case "snow":
            move.type = "Ice";
            break;
        }
      }
    },
    onModifyMove(move, pokemon) {
      if (pokemon.hasAbility("solarpower"))
        move.basePower *= 2;
      else {
        switch (pokemon.effectiveWeather()) {
          case "sunnyday":
          case "desolateland":
            move.basePower *= 2;
            break;
          case "raindance":
          case "primordialsea":
            move.basePower *= 2;
            break;
          case "sandstorm":
            move.basePower *= 2;
            break;
          case "hail":
          case "snow":
            move.basePower *= 2;
            break;
        }
      }
      this.debug("BP: " + move.basePower);
    }
  },
  solarbeam: {
    inherit: true,
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      if (["sunnyday", "desolateland"].includes(attacker.effectiveWeather()) || attacker.hasAbility("solarpower")) {
        this.attrLastMove("[still]");
        this.addMove("-anim", attacker, move.name, defender);
        return;
      }
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    },
    onBasePower(basePower, pokemon, target2) {
      const weakWeathers = ["raindance", "primordialsea", "sandstorm", "hail", "snow"];
      if (weakWeathers.includes(pokemon.effectiveWeather()) && !pokemon.hasAbility("solarpower")) {
        this.debug("weakened by weather");
        return this.chainModify(0.5);
      }
    }
  },
  solarblade: {
    inherit: true,
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      if (["sunnyday", "desolateland"].includes(attacker.effectiveWeather()) || attacker.hasAbility("solarpower")) {
        this.attrLastMove("[still]");
        this.addMove("-anim", attacker, move.name, defender);
        return;
      }
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    },
    onBasePower(basePower, pokemon, target2) {
      const weakWeathers = ["raindance", "primordialsea", "sandstorm", "hail", "snow"];
      if (weakWeathers.includes(pokemon.effectiveWeather()) && !pokemon.hasAbility("solarpower")) {
        this.debug("weakened by weather");
        return this.chainModify(0.5);
      }
    }
  },
  nightslash: {
    inherit: true,
    onAfterMove(target2, source, move) {
      if (target2 !== source && move.category !== "Status" && move.totalDamage) {
        this.damage(source.baseMaxhp / 16, source, target2);
      }
    },
    desc: "Deals an additional 1/16th of the opponents health on a successful hit. Has a higher chance for a critical hit.",
    shortDesc: "1st hit: High critical hit ratio. 2nd hit: 1/16 max HP."
  },
  psychocut: {
    inherit: true,
    onAfterMove(target2, source, move) {
      if (target2 !== source && move.category !== "Status" && move.totalDamage) {
        this.damage(source.baseMaxhp / 16, source, target2);
      }
    },
    desc: "Deals an additional 1/16th of the opponents health on a successful hit. Has a higher chance for a critical hit.",
    shortDesc: "1st hit: High critical hit ratio. 2nd hit: 1/16 max HP."
  },
  selfrepairing: {
    num: -6,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Self-Repairing",
    pp: 10,
    priority: 0,
    flags: { snatch: 1, heal: 1, bypasssub: 1 },
    heal: [1, 3],
    self: {
      volatileStatus: "selfrepairing"
    },
    condition: {
      onStart(pokemon) {
        this.add("-singlemove", pokemon, "Self-Repairing");
      },
      onAfterMoveSecondarySelfPriority: -1,
      onAfterMoveSecondarySelf(pokemon, target2, move) {
        if (move.category === "Status" && move.id !== "selfrepairing") {
          this.heal(pokemon.baseMaxhp / 4);
        }
      }
    },
    onBeforeMovePriority: 100,
    onBeforeMove(pokemon) {
      this.debug("removing Self Repairing before attack");
      pokemon.removeVolatile("selfrepairing");
    },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Shift Gear", source);
      this.add("-anim", source, "Recover", source);
    },
    rating: 3,
    desc: "Heals 33% of HP. When this Pokemon uses a status move, this Pokemon heals 25% of its max HP.",
    shortDesc: "Heals 1/3 max HP; 1/4 extra after status move.",
    secondary: null,
    target: "allies",
    type: "Steel"
  },
  spectralthief: {
    inherit: true,
    basePower: 60,
    flags: { contact: 1, protect: 1, mirror: 1 },
    onHit(target2) {
      target2.clearBoosts();
      this.add("-clearboost", target2);
    },
    isViable: true
  },
  gravelgrater: {
    num: -7,
    accuracy: 90,
    basePower: 30,
    category: "Physical",
    shortDesc: "Hits twice. Lowers the target's Def after each hit.",
    isViable: true,
    name: "Gravel Grater",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    multihit: 2,
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Ancient Power", target2);
      this.add("-anim", source, "Gear Grind", target2);
    },
    secondary: {
      chance: 100,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Rock",
    maxMove: { basePower: 100 },
    contestType: "Cool"
  },
  flexoff: {
    num: -8,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Flex Off",
    pp: 15,
    priority: 0,
    flags: { cantusetwice: 1, snatch: 1, metronome: 1 },
    onTryHit(target2, source, move) {
      const targetAtk = target2.storedStats.atk;
      const sourceAtk = source.storedStats.atk;
      if (sourceAtk >= targetAtk) {
        this.boost({ atk: 1, def: 2 }, source);
      } else if (sourceAtk < targetAtk) {
        this.boost({ atk: 1, def: 2 }, target2);
      }
    },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Bulk Up", source);
      this.add("-anim", target2, "Bulk Up", target2);
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    zMove: { boost: { atk: 1 } },
    contestType: "Cool",
    desc: "The Pok\xE9mon with the highest Attack stat on the field gets a +1 stat boost to their Attack and +2 stat boost to their Defense. Stat boosts, items and abilities are not taken into account, fails if move was previously used in the same turn.",
    shortDesc: "Pok\xE9mon with highest Attack stat: +1 Atk & +2 Def."
  },
  ionsaw: {
    num: -9,
    accuracy: 100,
    basePower: 30,
    category: "Physical",
    shortDesc: "Hits three times. 10% to paralyze the target.",
    isViable: true,
    name: "Ion Saw",
    pp: 10,
    priority: 0,
    flags: { slicing: 1, protect: 1, mirror: 1 },
    multihit: 3,
    secondary: {
      chance: 10,
      status: "par"
    },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Ion Deluge", source);
      this.add("-anim", source, "Ion Deluge", source);
      this.add("-anim", source, "Ion Deluge", source);
      this.add("-anim", source, "Slash", target2);
      this.add("-anim", source, "Slash", target2);
      this.add("-anim", source, "Slash", target2);
    },
    target: "normal",
    type: "Electric",
    maxMove: { basePower: 100 },
    contestType: "Cool"
  },
  landswrath: {
    inherit: true,
    basePower: 70,
    onAfterHit(target2, pokemon, move) {
      let success = false;
      if (pokemon.hp && pokemon.removeVolatile("leechseed")) {
        this.add("-end", pokemon, "Leech Seed", "[from] move: Rapid Spin", "[of] " + pokemon);
      }
      const removeTarget = [
        "stealthrock",
        "spikes",
        "gmaxsteelsurge"
      ];
      const removeAll = [
        "stealthrock",
        "spikes",
        "gmaxsteelsurge"
      ];
      for (const targetCondition of removeTarget) {
        if (target2.side.removeSideCondition(targetCondition)) {
          if (!removeAll.includes(targetCondition))
            continue;
          this.add("-sideend", target2.side, this.dex.conditions.get(targetCondition).name, "[from] move: Land's Wrath", "[of] " + pokemon);
          success = true;
        }
      }
      for (const sideCondition of removeAll) {
        if (pokemon.side.removeSideCondition(sideCondition)) {
          this.add("-sideend", pokemon.side, this.dex.conditions.get(sideCondition).name, "[from] move: Land's Wrath", "[of] " + pokemon);
          success = true;
        }
      }
      this.field.clearTerrain();
      return success;
    },
    onAfterSubDamage(damage, target2, pokemon, move) {
      let success = false;
      if (pokemon.hp && pokemon.removeVolatile("leechseed")) {
        this.add("-end", pokemon, "Leech Seed", "[from] move: Rapid Spin", "[of] " + pokemon);
      }
      const removeTarget = [
        "stealthrock",
        "spikes",
        "gmaxsteelsurge"
      ];
      const removeAll = [
        "stealthrock",
        "spikes",
        "gmaxsteelsurge"
      ];
      for (const targetCondition of removeTarget) {
        if (target2.side.removeSideCondition(targetCondition)) {
          if (!removeAll.includes(targetCondition))
            continue;
          this.add("-sideend", target2.side, this.dex.conditions.get(targetCondition).name, "[from] move: Land's Wrath", "[of] " + pokemon);
          success = true;
        }
      }
      for (const sideCondition of removeAll) {
        if (pokemon.side.removeSideCondition(sideCondition)) {
          this.add("-sideend", pokemon.side, this.dex.conditions.get(sideCondition).name, "[from] move: Land's Wrath", "[of] " + pokemon);
          success = true;
        }
      }
      this.field.clearTerrain();
      return success;
    },
    shortDesc: "Free user from hazards/terrain/bind/Leech Seed."
  },
  // Slate 4
  triattack: {
    inherit: true,
    basePower: 30,
    pp: 10,
    multihit: 3,
    onEffectiveness(typeMod, target2, type, move) {
      if (move.hit > 3)
        return;
      var hitEffectiveness;
      var immunity = 0;
      switch (move.hit) {
        case 1:
          hitEffectiveness = this.dex.getEffectiveness("Ice", type);
          if (!this.dex.getImmunity("Ice", target2))
            immunity = -0.5;
          break;
        case 2:
          hitEffectiveness = this.dex.getEffectiveness("Fire", type);
          if (!this.dex.getImmunity("Fire", target2))
            immunity = -0.5;
          break;
        case 3:
          hitEffectiveness = this.dex.getEffectiveness("Electric", type);
          if (!this.dex.getImmunity("Electric", target2))
            immunity = -0.5;
          break;
      }
      return hitEffectiveness + immunity;
    },
    onAfterHit(target2, source, move) {
      switch (move.hit) {
        case 1:
          this.add("-anim", target2, "Flamethrower", target2);
          break;
        case 2:
          this.add("-anim", target2, "Electro Ball", target2);
          break;
      }
    },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Tri Attack", target2);
      this.add("-anim", target2, "Ice Beam", target2);
    },
    secondary: {
      chance: 10,
      onHit(target2, source, move) {
        switch (move.hit) {
          case 1:
            target2.trySetStatus("frz", source);
            break;
          case 2:
            target2.trySetStatus("brn", source);
            break;
          case 3:
            target2.trySetStatus("par", source);
            break;
        }
      }
    },
    shortDesc: "Hits as Ice, Electric, Fire. 10% for freeze/para/burn."
  },
  squall: {
    num: -11,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Squall",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, wind: 1 },
    onBasePower(basePower, pokemon, target2) {
      const boostWeathers = ["sandstorm", "hail", "snow"];
      if (boostWeathers.includes(pokemon.effectiveWeather())) {
        this.debug("boostfrom weather");
        return this.chainModify(1.5);
      }
    },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Hurricane", target2);
    },
    secondary: null,
    target: "normal",
    type: "Flying",
    contestType: "Tough",
    shortDesc: "1.5x power if used under Snow or Sandstorm."
  },
  petroleumblast: {
    num: -12,
    accuracy: 90,
    basePower: 95,
    category: "Special",
    name: "Petroleum Blast",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
    volatileStatus: "tarshot",
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Tar Shot", source);
      this.add("-anim", source, "Dragon Pulse", target2);
      this.add("-anim", source, "Tar Shot", target2);
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Rock",
    contestType: "Beautiful",
    shortDesc: "Applies Tar Shot to the target. Hits both foes."
  },
  firefang: {
    inherit: true,
    pp: 20,
    basePowerCallback(pokemon, target2, move) {
      if (target2.newlySwitched || this.queue.willMove(target2)) {
        this.debug("Fire Fang damage boost");
        return move.basePower * 1.5;
      }
      this.debug("Fire Fang NOT boosted");
      return move.basePower;
    },
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    desc: "Power is 1.5x if user moves before the target. Has a 10% chance to burn the target.",
    shortDesc: "1.5x power if user moves before target. 10% burn."
  },
  thunderfang: {
    inherit: true,
    pp: 20,
    basePowerCallback(pokemon, target2, move) {
      if (target2.newlySwitched || this.queue.willMove(target2)) {
        this.debug("Thunder Fang damage boost");
        return move.basePower * 1.5;
      }
      this.debug("Thunder Fang NOT boosted");
      return move.basePower;
    },
    secondaries: [
      {
        chance: 10,
        status: "par"
      }
    ],
    desc: "Power is 1.5x if user moves before the target. Has a 10% chance to paralyze the target.",
    shortDesc: "1.5x power if user moves before target. 10% para."
  },
  icefang: {
    inherit: true,
    pp: 20,
    basePowerCallback(pokemon, target2, move) {
      if (target2.newlySwitched || this.queue.willMove(target2)) {
        this.debug("Ice Fang damage boost");
        return move.basePower * 1.5;
      }
      this.debug("Ice Fang NOT boosted");
      return move.basePower;
    },
    secondaries: [
      {
        chance: 10,
        status: "frz"
      }
    ],
    desc: "Power is 1.5x if user moves before the target. Has a 10% chance to freeze the target.",
    shortDesc: "1.5x power if user moves before target. 10% freeze."
  },
  poisonfang: {
    inherit: true,
    accuracy: 95,
    basePower: 65,
    pp: 20,
    basePowerCallback(pokemon, target2, move) {
      if (target2.newlySwitched || this.queue.willMove(target2)) {
        this.debug("Poison Fang damage boost");
        return move.basePower * 1.5;
      }
      this.debug("Poison Fang NOT boosted");
      return move.basePower;
    },
    secondaries: [
      {
        chance: 10,
        status: "psn"
      }
    ],
    desc: "Power is 1.5x if user moves before the target. Has a 10% chance to poison the target.",
    shortDesc: "1.5x power if user moves before target. 10% poison."
  },
  fishiousrend: {
    inherit: true,
    accuracy: 95,
    basePower: 65,
    basePowerCallback(pokemon, target2, move) {
      if (target2.newlySwitched || this.queue.willMove(target2)) {
        this.debug("Fishious Rend damage boost");
        return move.basePower * 1.5;
      }
      this.debug("Fishious Rend NOT boosted");
      return move.basePower;
    },
    secondary: {
      chance: 30,
      boosts: {
        spe: -1
      }
    },
    pp: 20,
    desc: "Power is 1.5x if user moves before the target. Has a 30% chance to lower the target's Speed by 1 stage.",
    shortDesc: "1.5x power if user moves before target. 30% -1 Spe."
  },
  hyperfang: {
    inherit: true,
    type: "Fighting",
    accuracy: 95,
    basePower: 65,
    basePowerCallback(pokemon, target2, move) {
      if (target2.newlySwitched || this.queue.willMove(target2)) {
        this.debug("Hyper Fang damage boost");
        return move.basePower * 1.5;
      }
      this.debug("Hyper Fang NOT boosted");
      return move.basePower;
    },
    secondary: {
      chance: 30,
      boosts: {
        atk: -1
      }
    },
    pp: 20,
    desc: "Power is 1.5x if user moves before the target. Has a 30% chance to lower the target's Atk by 1 stage.",
    shortDesc: "1.5x power if user moves before target. 30% -1 Atk."
  },
  // Handling Cursed Branch
  fling: {
    num: 374,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Fling",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, allyanim: 1, metronome: 1, noparentalbond: 1 },
    onPrepareHit(target2, source, move) {
      if (source.ignoringItem())
        return false;
      const item = source.getItem();
      if (!this.singleEvent("TakeItem", item, source.itemState, source, source, move, item))
        return false;
      if (!item.fling)
        return false;
      move.basePower = item.fling.basePower;
      this.debug("BP: " + move.basePower);
      if (item.isBerry) {
        move.onHit = function(foe) {
          if (this.singleEvent("Eat", item, null, foe, null, null)) {
            this.runEvent("EatItem", foe, null, null, item);
            if (item.id === "leppaberry")
              foe.staleness = "external";
          }
          if (item.onEat)
            foe.ateBerry = true;
        };
      } else if (item.fling.effect) {
        move.onHit = item.fling.effect;
      } else {
        if (!move.secondaries)
          move.secondaries = [];
        if (item.fling.status) {
          move.secondaries.push({ status: item.fling.status });
        } else if (item.fling.volatileStatus) {
          move.secondaries.push({ volatileStatus: item.fling.volatileStatus });
        }
      }
      source.addVolatile("fling");
    },
    condition: {
      onUpdate(pokemon) {
        const item = pokemon.getItem();
        pokemon.setItem("");
        pokemon.lastItem = item.id;
        pokemon.usedItemThisTurn = true;
        this.add("-enditem", pokemon, item.name, "[from] move: Fling");
        this.runEvent("AfterUseItem", pokemon, null, null, item);
        pokemon.removeVolatile("fling");
      }
    },
    onHit(target2, source) {
      const item = source.getItem();
      if (item.id === "cursedbranch" && target2.addType("Grass"))
        this.add("-start", target2, "typeadd", "Grass", "[from] item: Cursed Branch");
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Cute"
  },
  //Slate 5 starts here
  sandsearstorm: {
    inherit: true,
    basePower: 110,
    onModifyMove(move, pokemon, target2) {
      if (target2 && ["sunnyday", "desolateland", "sandstorm"].includes(target2.effectiveWeather())) {
        move.accuracy = true;
      }
    }
  },
  wildboltstorm: {
    inherit: true,
    basePower: 110,
    category: "Physical",
    onModifyMove(move, pokemon, target2) {
      if (target2 && ["raindance", "primordialsea", "snowscape", "hail"].includes(target2.effectiveWeather())) {
        move.accuracy = true;
      }
    }
  },
  bleakwindstorm: {
    inherit: true,
    basePower: 110,
    onModifyMove(move, pokemon, target2) {
      if (target2 && ["raindance", "primordialsea", "sandstorm"].includes(target2.effectiveWeather())) {
        move.accuracy = true;
      }
    }
  },
  springtidestorm: {
    inherit: true,
    basePower: 110,
    category: "Physical",
    pp: 10,
    onModifyMove(move, pokemon, target2) {
      if (target2 && ["sunnyday", "desolateland", "snowscape", "hail"].includes(target2.effectiveWeather())) {
        move.accuracy = true;
      }
    },
    secondary: {
      chance: 30,
      self: {
        boosts: {
          atk: -1
        }
      }
    }
  },
  quicksanddrain: {
    num: -13,
    accuracy: 95,
    basePower: 85,
    category: "Physical",
    name: "Quicksand Drain",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, heal: 1, metronome: 1 },
    drain: [1, 3],
    onModifyMove(move, pokemon, target2) {
      switch (target2?.effectiveWeather()) {
        case "sandstorm":
          move.drain = [2, 3];
          break;
      }
    },
    //		if (this.field.isWeather('sandstorm')) {
    //			drain: [2,3]
    //		},
    //no clue if this is needed, so imma comment it out for now
    //			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
    //			if (!success) {
    //				this.add('-fail', pokemon, 'heal');
    //				return this.NOT_FAIL;
    //			}
    //			return success;
    secondary: {
      chance: 10,
      boosts: {
        spe: -1
      }
    },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Scorching Sands", target2);
    },
    shortDesc: "Heals 1/3 damage; 2/3 in Sand. 10% chance -1 Spe.",
    target: "normal",
    type: "Ground",
    contestType: "Tough"
  },
  scythelimbs: {
    num: -14,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Scythe Limbs",
    pp: 5,
    priority: 0,
    multihit: 2,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onModifyMove(move, pokemon, defender) {
      if (!defender.activeTurns) {
        move.boosts = { atk: 0 };
      }
    },
    self: {
      boosts: {
        atk: -1
      }
    },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "X-Scissor", target2);
    },
    shortDesc: "Hits twice; -1 Atk per hit. Ignored if target switches.",
    secondary: null,
    target: "normal",
    type: "Bug",
    contestType: "Cool"
  },
  chickendance: {
    num: -15,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Chicken Dance",
    pp: 20,
    priority: 0,
    flags: { snatch: 1, dance: 1, metronome: 1 },
    boosts: {
      spa: 1,
      spe: 1
    },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Revelation Dance", source);
      this.add("-anim", source, "Roost", source);
    },
    secondary: null,
    target: "self",
    type: "Flying",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Cool",
    desc: "Raises the user's Sp. Attack and Speed by 1 stage.",
    shortDesc: "Raises the user's Sp. Atk and Speed by 1."
  },
  chakrabullets: {
    num: -16,
    accuracy: 100,
    basePower: 20,
    category: "Special",
    name: "Chakra Bullets",
    pp: 10,
    priority: 0,
    flags: { bullet: 1, protect: 1, mirror: 1, metronome: 1 },
    multihit: [2, 5],
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Aura Sphere", target2);
    },
    onModifyMove(move, pokemon, target2) {
      if (pokemon.boosts.spa > 0) {
        move.multihit = [4, 5];
      }
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    contestType: "Tough",
    shortDesc: "Hits 2-5 times. If user has >= +1 SpA, hits 4-5 times."
  },
  // Slate 6
  burningjealousy: {
    inherit: true,
    basePower: 75,
    pp: 15,
    secondary: {
      chance: 100,
      onHit(target2, source, move) {
        let hasBoost = false;
        let i;
        if (!target2)
          return;
        for (i in target2.boosts) {
          if (target2.boosts[i] !== 0)
            hasBoost = true;
        }
        if (hasBoost) {
          target2.trySetStatus("brn", source, move);
          this.boost({ spa: 2 }, source, source);
        }
      }
    },
    desc: "Has a 100% chance to burn the target and raise user's Sp. Attack by 2 stages if it had a stat stage raised this turn.",
    shortDesc: "If target has stat raise: 100% burn; user: +2 Sp. Atk."
  },
  barbbarrage: {
    inherit: true,
    basePower: 25,
    pp: 20,
    multihit: [2, 5],
    onBasePower(basePower, pokemon, target2) {
      return basePower;
    },
    secondary: {
      chance: 10,
      status: "psn"
    },
    flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
    desc: "Hits two to five times, and has a 10% to poison the target.",
    shortDesc: "Hits 2-5 times. 10% chance to poison per hit."
  },
  infernalparade: {
    inherit: true,
    basePower: 25,
    pp: 20,
    multihit: [2, 5],
    basePowerCallback(pokemon, target2, move) {
      return move.basePower;
    },
    secondary: {
      chance: 10,
      status: "brn"
    },
    flags: { protect: 1, mirror: 1, metronome: 1, wind: 1, defrost: 1 },
    thawsTarget: true,
    desc: "Hits two to five times, and has a 10% to burn the target.",
    shortDesc: "Hits 2-5 times. 10% chance to burn per hit."
  },
  eeriespell: {
    inherit: true,
    basePower: 25,
    pp: 20,
    flags: { protect: 1, mirror: 1, metronome: 1, sound: 1 },
    multihit: [2, 5],
    secondary: {
      chance: 10,
      status: "par"
    },
    desc: "Hits two to five times, and has a 10% to paralyze the target.",
    shortDesc: "Hits 2-5 times. 10% chance to paralyze per hit."
  },
  sleeptalk: {
    inherit: true,
    onHit(pokemon) {
      const moves = [];
      for (const moveSlot of pokemon.moveSlots) {
        const moveid = moveSlot.id;
        const move = this.dex.moves.get(moveid);
        if (moveid && !move.flags["nosleeptalk"] && !move.flags["charge"]) {
          moves.push(moveid);
        }
      }
      let randomMove = "";
      if (moves.length)
        randomMove = this.sample(moves);
      if (!randomMove)
        return false;
      this.actions.useMove(randomMove, pokemon);
    },
    desc: "(Can now select Rest) One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Beak Blast, Belch, Bide, Blazing Torque, Celebrate, Chatter, Combat Torque, Copycat, Dynamax Cannon, Focus Punch, Hold Hands, Magical Torque, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Shell Trap, Sketch, Sleep Talk, Struggle, Uproar, Wicked Torque, or any two-turn move.",
    shortDesc: "User must be asleep. Uses another known move."
  },
  rest: {
    inherit: true,
    pp: 10,
    onTry(pokemon) {
      if (pokemon.hp < pokemon.maxhp)
        return;
      this.add("-fail", pokemon);
      return null;
    },
    onHit(target2, source, move) {
      if (target2.status !== "slp") {
        if (!target2.setStatus("slp", source, move))
          return;
      } else {
        this.add("-status", target2, "slp", "[from] move: Rest");
      }
      target2.statusState.time = 3;
      target2.statusState.startTime = 3;
      target2.statusState.source = target2;
      this.heal(target2.maxhp);
    },
    secondary: null
  },
  zephyrblade: {
    num: -17,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Zephyr Blade",
    pp: 15,
    priority: 0,
    flags: { slicing: 1, contact: 1, protect: 1, mirror: 1 },
    critRatio: 2,
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Air Slash", target2);
      this.add("-anim", source, "Slash", target2);
    },
    secondary: null,
    target: "normal",
    type: "Flying",
    contestType: "Cool",
    desc: "High critical ratio.",
    shortDesc: "High critical ratio."
  },
  frostnip: {
    num: -18,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Frostnip",
    pp: 15,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1, snatch: 1 },
    status: "frz",
    secondary: null,
    target: "normal",
    type: "Ice",
    zMove: { boost: { spa: 1 } },
    contestType: "Beautiful",
    desc: "Inflicts Frostbite to the target.",
    shortDesc: "Inflicts Frostbite to the target."
  },
  millstone: {
    num: -19,
    accuracy: 100,
    basePower: 65,
    category: "Physical",
    name: "Millstone",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Stone Axe", target2);
    },
    onBasePower(basePower, source, target2, move) {
      if (target2.volatiles["disable"]) {
        return this.chainModify(1.5);
      }
    },
    secondary: {
      chance: 100,
      volatileStatus: "disable"
    },
    target: "normal",
    type: "Rock",
    contestType: "Tough",
    desc: "If the target has a disabled move, this move's BP is x1.5. After damage, disables the last move used by the target for 2 turns.",
    shortDesc: "Afflicts Disable for 2 turns; 1.5x BP vs. disabled foe."
  },
  disable: {
    inherit: true,
    condition: {
      duration: 5,
      durationCallback(target2, source, effect) {
        if (effect?.name === "Millstone") {
          return 2;
        }
        return 5;
      },
      noCopy: true,
      // doesn't get copied by Baton Pass
      onStart(pokemon, source, effect) {
        if (this.queue.willMove(pokemon) || pokemon === this.activePokemon && this.activeMove && !this.activeMove.isExternal) {
          this.effectState.duration--;
        }
        if (!pokemon.lastMove) {
          this.debug(`Pokemon hasn't moved yet`);
          return false;
        }
        for (const moveSlot of pokemon.moveSlots) {
          if (moveSlot.id === pokemon.lastMove.id) {
            if (!moveSlot.pp) {
              this.debug("Move out of PP");
              return false;
            }
          }
        }
        if (effect.effectType === "Ability") {
          this.add("-start", pokemon, "Disable", pokemon.lastMove.name, "[from] ability: " + effect.name, "[of] " + source);
        } else {
          this.add("-start", pokemon, "Disable", pokemon.lastMove.name);
        }
        this.effectState.move = pokemon.lastMove.id;
      },
      onResidualOrder: 17,
      onEnd(pokemon) {
        this.add("-end", pokemon, "Disable");
      },
      onBeforeMovePriority: 7,
      onBeforeMove(attacker, defender, move) {
        if (!move.isZ && move.id === this.effectState.move) {
          this.add("cant", attacker, "Disable", move);
          return false;
        }
      },
      onDisableMove(pokemon) {
        for (const moveSlot of pokemon.moveSlots) {
          if (moveSlot.id === this.effectState.move) {
            pokemon.disableMove(moveSlot.id);
          }
        }
      }
    }
  },
  terablast: {
    inherit: true,
    onPrepareHit(target2, source, move) {
      if (source.terastallized || source.hasItem("legendplate")) {
        this.attrLastMove("[anim] Tera Blast " + source.teraType);
      }
    },
    onModifyType(move, pokemon, target2) {
      if (pokemon.terastallized || pokemon.hasItem("legendplate")) {
        move.type = pokemon.teraType;
      }
    },
    onModifyMove(move, pokemon) {
      if ((pokemon.terastallized || pokemon.hasItem("legendplate")) && pokemon.getStat("atk", false, true) > pokemon.getStat("spa", false, true)) {
        move.category = "Physical";
      }
      if ((pokemon.terastallized || pokemon.hasItem("legendplate")) && pokemon.teraType === "Stellar") {
        move.self = { boosts: { atk: -1, spa: -1 } };
      }
    }
  },
  bondslicingshuriken: {
    num: -20,
    accuracy: true,
    basePower: 60,
    category: "Special",
    name: "Bond Slicing Shuriken",
    pp: 1,
    priority: 0,
    flags: { slicing: 1 },
    isZ: "greniniumz",
    critRatio: 2,
    multihit: 3,
    secondary: null,
    target: "normal",
    type: "Water",
    contestType: "Cool",
    desc: "High critical ratio. Hits 3 times.",
    shortDesc: "High critical ratio. Hits 3 times."
  },
  // Slate 7
  triplekick: {
    inherit: true,
    basePower: 20,
    basePowerCallback(pokemon, target2, move) {
      return 20 * move.hit;
    },
    secondaries: [
      {
        chance: 20,
        boosts: {
          def: -1
        }
      }
    ],
    desc: "20% chance to lower Defense by 1 stage. Hits three times. Power increases to 40 for the second hit and 60 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
    shortDesc: "3 hits; can miss, but power rises. 20% chance -1 Def."
  },
  tripleaxel: {
    inherit: true,
    onModifyMove(move) {
      if (this.field.isWeather(["hail", "snow"]))
        move.accuracy = true;
    },
    desc: "Can't miss in Snow. Hits three times. Power increases to 40 for the second hit and 60 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
    shortDesc: "3 hits; can miss, but power rises. Snow = no miss."
  },
  triplearrows: {
    inherit: true,
    accuracy: 90,
    basePower: 20,
    basePowerCallback(pokemon, target2, move) {
      return 20 * move.hit;
    },
    onModifyMove(move) {
      move.infiltrates = true;
    },
    flags: { protect: 1, mirror: 1, bypasssub: 1, metronome: 1 },
    critRatio: 1,
    multihit: 3,
    secondaries: null,
    type: "Grass",
    desc: "Ignores Screens, Substitutes and Burn. Hits three times. Power increases to 40 for the second hit and 60 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
    shortDesc: "3 hits; can miss, but power rises. Ignores sub/screens."
  },
  tripledive: {
    inherit: true,
    accuracy: 90,
    basePower: 20,
    basePowerCallback(pokemon, target2, move) {
      return 20 * move.hit;
    },
    desc: "Ignores Burn and power loss in Sun. Can't miss in Sun. Hits three times. Power increases to 40 for the second hit and 60 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
    shortDesc: "3 hits; can miss, but power rises. Ignores Sun drop."
  },
  brainbuster: {
    num: -21,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Brain Buster",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Zen Headbutt", target2);
    },
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    contestType: "Tough",
    desc: "Lowers the user's Defense and Special Defense by 1 stage.",
    shortDesc: "Lowers the user's Defense and Sp. Def by 1."
  },
  dragonhammer: {
    inherit: true,
    accuracy: 90,
    basePower: 100,
    pp: 10,
    self: {
      boosts: {
        atk: -1
      }
    },
    desc: "Lowers the user's Attack by 1 stage.",
    shortDesc: "Lowers the user's Atk by 1."
  },
  hammerarm: {
    inherit: true,
    self: {
      boosts: {
        atk: -1
      }
    },
    desc: "Lowers the user's Attack by 1 stage.",
    shortDesc: "Lowers the user's Atk by 1."
  },
  icehammer: {
    inherit: true,
    accuracy: 90,
    basePower: 100,
    self: {
      boosts: {
        atk: -1
      }
    },
    desc: "Lowers the user's Attack by 1 stage.",
    shortDesc: "Lowers the user's Atk by 1."
  },
  chillingwater: {
    inherit: true,
    basePower: 80,
    pp: 15,
    secondary: {
      chance: 30,
      status: "frz"
    },
    desc: "Has a 30% chance to inflict Frostbite to the target.",
    shortDesc: "30% chance to inflict Frostbite to the target."
  },
  breezeburn: {
    num: -22,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Breeze Burn",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Ice Burn", target2);
    },
    secondary: {
      chance: 30,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
    contestType: "Beautiful",
    desc: "Has a 30% chance to inflict Frostbite to the target.",
    shortDesc: "30% chance to inflict Frostbite to the target."
  },
  breezeshock: {
    num: -23,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Breeze Shock",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Freeze Shock", target2);
    },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Ice",
    contestType: "Beautiful",
    desc: "Has a 30% chance to paralyze the target.",
    shortDesc: "30% chance to paralyze the target."
  },
  synchronoise: {
    inherit: true,
    pp: 5,
    onTryImmunity(target2, source) {
    },
    onHit(target2, source) {
      const types = target2.getTypes();
      var type1 = types[0];
      var type2;
      if (types.length == 2)
        type2 = types[1];
      if (source.hasType(type1) || !source.setType(type1))
        return false;
      this.add("-start", source, "typechange", type1);
      if (type2) {
        this.add("-start", source, "typeadd", type2);
      }
    },
    shortDesc: "Changes user's type to that of the target after hit."
  },
  caltrops: {
    num: -24,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Caltrops",
    pp: 20,
    priority: 0,
    flags: { reflectable: 1, mirror: 1, metronome: 1 },
    sideCondition: "gmaxsteelsurge",
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "G-Max Steelsurge", target2);
    },
    secondary: null,
    target: "foeSide",
    type: "Steel",
    contestType: "Clever",
    desc: "Sets up sharp steel on the opposing side.",
    shortDesc: "Sets up sharp steel on the opposing side."
  },
  virulentblast: {
    num: -25,
    accuracy: 90,
    basePower: 110,
    category: "Special",
    name: "Virulent Blast",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Sludge Wave", target2);
    },
    secondary: {
      chance: 20,
      status: "tox"
    },
    target: "normal",
    type: "Poison",
    contestType: "Beautiful",
    desc: "Has a 20% chance to badly poison the target.",
    shortDesc: "20% chance to badly poison the target."
  },
  sonicboom: {
    inherit: true,
    damage: null,
    basePower: 40,
    accuracy: 100,
    category: "Special",
    desc: "Priority +1, Sound move.",
    shortDesc: "Usually goes first. Sound Move.",
    name: "Sonic Boom",
    priority: 1,
    isNonstandard: null,
    flags: { sound: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  swarming: {
    num: -26,
    accuracy: 100,
    basePower: 110,
    category: "Special",
    name: "Swarming",
    shortDesc: "Lowers the user's and the target's SpD by one stage.",
    desc: "Lowers the user's and the target's SpD by 1 stage.",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    self: {
      boosts: {
        spd: -1
      }
    },
    secondary: {
      chance: 100,
      boosts: {
        spd: -1
      }
    },
    onPrepareHit: function(target2, source) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Bug Buzz", target2);
    },
    target: "normal",
    type: "Bug",
    contestType: "Smart"
  },
  octazooka: {
    inherit: true,
    accuracy: 100,
    basePower: 70,
    pp: 20,
    flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1, pulse: 1 },
    secondary: {
      chance: 100,
      boosts: {
        spd: -1
      }
    },
    desc: "Has a 100% chance to lower the target's Sp. Defense by 1 stage.",
    shortDesc: "100% chance to lower the target's Sp. Def by 1."
  },
  paraboliccharge: {
    inherit: true,
    basePower: 75,
    pp: 10
  },
  // Rulebook Embargo
  embargo: {
    inherit: true,
    condition: {
      duration: 5,
      durationCallback(target2, source, effect) {
        if (effect?.name === "Rulebook") {
          return 2;
        }
        return 5;
      },
      onStart(pokemon) {
        this.add("-start", pokemon, "Embargo");
        this.singleEvent("End", pokemon.getItem(), pokemon.itemState, pokemon);
      },
      // Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
      onResidualOrder: 21,
      onEnd(pokemon) {
        this.add("-end", pokemon, "Embargo");
      }
    }
  },
  // Slate 9
  dragonrend: {
    num: -27,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Dragon Rend",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1 },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Crunch", target2);
    },
    target: "normal",
    type: "Dragon",
    contestType: "Cool",
    shortDesc: "30% chance to flinch the target."
  },
  imprison: {
    // WIP
    inherit: true,
    condition: {
      noCopy: true,
      onStart(target2) {
        this.add("-start", target2, "move: Imprison");
      },
      onFoeDisableMove(pokemon) {
        for (const moveSlot of this.effectState.source.moveSlots) {
          if (moveSlot.id === "struggle")
            continue;
          pokemon.disableMove(moveSlot.id, "hidden");
        }
        pokemon.maybeDisabled = true;
      },
      onFoeBeforeMovePriority: 4,
      onFoeBeforeMove(attacker, defender, move) {
        if (move.id !== "struggle" && this.effectState.source.hasMove(move.id) && !move.isZ && !move.isMax) {
          this.damage(Math.round(target.maxhp / 4), attacker, defender);
          this.add("cant", attacker, "move: Imprison", move);
          return false;
        }
      }
    },
    shortDesc: "WIP",
    desc: "WIP"
  },
  powderbomb: {
    num: -28,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Powder Bomb",
    pp: 10,
    priority: 2,
    flags: { noassist: 1, failcopycat: 1, powder: 1, bullet: 1 },
    volatileStatus: "powderbomb",
    condition: {
      onTryHit(target2, source, move) {
        if (target2 !== source && move.type === "Fire") {
          move.accuracy = true;
          this.damage(Math.round(target2.maxhp / 4), source, target2);
          return null;
        }
      }
    },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Rage Powder", target2);
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Clever",
    desc: "Covers the target in powder in addition to the damage dealt when it is used. If the Pok\xE9mon affected by Powder attempts to use a Fire-type move, they take damage equal to 25% of their maximum HP and cannot execute the move (PP is still consumed). If the target Pok\xE9mon is part Fire-type, inflicts 1/8 of the target's maximum HP as damage per turn. The Powder effect is removed when the affected Pok\xE9mon switches out.",
    shortDesc: "Covers the target in powder. If the Pokemon attempts to use a Fire move, they take 25% of their max HP."
  },
  milfleur: {
    num: -29,
    accuracy: 90,
    basePower: 0,
    category: "Physical",
    name: "Mil Fleur",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, contact: 1, punch: 1 },
    onModifyMove(move, pokemon) {
      if (pokemon.hp > pokemon.maxhp * 2 / 3) {
        move.basePower = 20;
        move.multihit = [4, 5];
      } else if (pokemon.hp > pokemon.maxhp / 3) {
        move.basePower = 50;
        move.multihit = 2;
      } else {
        move.basePower = 120;
        move.multihit = 1;
      }
    },
    onPrepareHit(target2, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Fleur Cannon", target2);
      this.add("-anim", source, "Mega Punch", target2);
    },
    secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Beautiful",
    shortDesc: "Amount of hits and power is determined by how much HP the user has left."
  },
  // Slate 10
  skyuppercut: {
    inherit: true,
    basePower: 95,
    accuracy: 100,
    onAfterMove(target2, source, move) {
      const sideConditions = ["spikes", "toxicspikes", "stealthrock", "stickyweb", "gmaxsteelsurge"];
      for (const condition of sideConditions) {
        if (target2.side.getSideCondition(condition)) {
          this.damage(source.baseMaxhp / 8, source, target2);
          return;
        }
      }
    },
    desc: "Inflicts 1/8 max HP if hazards are up.",
    shortDesc: "Inflicts 1/8 max HP if hazards are up."
  },
  blackout: {
    num: -30,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Blackout",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    self: {
      boosts: {
        spa: -1,
        spd: -1
      }
    },
    onPrepareHit(target2, source) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Night Daze", target2);
    },
    secondary: null,
    target: "normal",
    shortDesc: "Lowers the user's SpA and SpD by one afterward.",
    type: "Dark",
    contestType: "Tough"
  },
  hypnotichorror: {
    num: -31,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Hypnotic Horror",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    self: {
      boosts: {
        spa: -1,
        spd: -1
      }
    },
    onPrepareHit(target2, source) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Hypnosis", target2);
      this.add("-anim", source, "Psycho Boost", target2);
    },
    secondary: null,
    target: "normal",
    shortDesc: "Lowers the user's SpA and SpD by one afterward.",
    type: "Psychic",
    contestType: "Tough"
  },
  syrupbomb: {
    num: -32,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Syrup Bomb",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    sideCondition: "grasspledge",
    onPrepareHit(target2, source) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Sludge Bomb", target2);
    },
    secondary: null,
    target: "normal",
    shortDesc: "Creates a Swamp on the opponent's side of the field.",
    type: "Grass",
    contestType: "Tough"
  },
  foulfuture: {
    num: -34,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Foul Future",
    pp: 10,
    priority: 0,
    flags: { allyanim: 1, metronome: 1, futuremove: 1 },
    ignoreImmunity: true,
    onTry(source, target2) {
      if (!target2.side.addSlotCondition(target2, "futuremove"))
        return false;
      Object.assign(target2.side.slotConditions[target2.position]["futuremove"], {
        duration: 3,
        move: "foulfuture",
        source,
        moveData: {
          id: "foulfuture",
          name: "Foul Future",
          accuracy: 100,
          basePower: 120,
          category: "Physical",
          priority: 0,
          flags: { allyanim: 1, metronome: 1, futuremove: 1 },
          ignoreImmunity: false,
          effectType: "Move",
          type: "Poison"
        }
      });
      this.add("-start", source, "move: Foul Future");
      return this.NOT_FAIL;
    },
    onPrepareHit(target2, source) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Poison Jab", target2);
    },
    secondary: null,
    target: "normal",
    type: "Poison",
    contestType: "Clever",
    desc: "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Fails if this move or Doom Desire is already in effect for the target's position.",
    shortDesc: "Hits two turns after being used."
  },
  rainbowblast: {
    num: -35,
    accuracy: 90,
    basePower: 130,
    category: "Special",
    name: "Rainbow Blast",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onPrepareHit(target2, source) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Dazzling Gleam", target2);
    },
    secondary: {
      chance: 30,
      boosts: {
        spa: -1
      }
    },
    target: "normal",
    shortDesc: "30% chance to lower target's SpA by 1.",
    type: "Fairy",
    contestType: "Cute"
  },
  rockclimb: {
    inherit: true,
    basePower: 120,
    pp: 5,
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
    type: "Rock",
    desc: "Has a 10% chance to confuse the target.",
    shortDesc: "10% chance to confuse the target."
  },
  bonfire: {
    num: -36,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Bonfire",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onModifyMove(move, pokemon) {
      if (pokemon.getStat("atk", false, true) > pokemon.getStat("spa", false, true)) {
        move.category = "Physical";
      }
    },
    onModifyBasePowerPriority: 22,
    onModifyBasePower(basePower, attacker, defender, move) {
      let bonfireBP = 0;
      for (const ally of attacker.side.pokemon) {
        for (const moveSlot of attacker.moveSlots) {
          if (moveSlot.name === "Bonfire") {
            bonfireBP += 20;
          }
        }
      }
      move.basePower += bonfireBP;
    },
    onPrepareHit(target2, source) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Flame Wheel", target2);
    },
    secondary: null,
    target: "normal",
    type: "Fire"
  },
  kiblast: {
    num: -37,
    accuracy: 100,
    basePower: 140,
    category: "Special",
    name: "Ki Blast",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
    secondary: null,
    target: "normal",
    onAfterHit(target2, pokemon, sourceEffect) {
      if (target2 !== "normal")
        return;
      this.useMove("Ki Blast", pokemon, "self", sourceEffect);
    },
    type: "Fighting",
    contestType: "Cool"
  }
};
//# sourceMappingURL=moves.js.map
