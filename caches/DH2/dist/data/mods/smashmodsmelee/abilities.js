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
  thunderhead: {
    desc: "This Pok\xE9mon ignores other Pok\xE9mon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pok\xE9mon's Defense, Special Defense, and evasiveness stat stages when dealing damage. When this Pok\xE9mon is hit by an attack, Electric Terrain begins.",
    shortDesc: "Ignores stat changes. Sets Electric Terrain when attacked.",
    name: "Thunderhead",
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
      if (!this.field.isTerrain("electricterrain")) {
        this.field.setTerrain("electricterrain");
      }
    },
    rating: 4,
    num: -1001
  },
  coldsweat: {
    desc: "On switch-in, this Pok\xE9mon summons hail. It changes the current weather to rain whenever any opposing Pok\xE9mon has an attack that is super effective on this Pok\xE9mon or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.",
    shortDesc: "Summons hail on switch-in. Changes weather to rain if the foe has a supereffective or OHKO move.",
    onStart(source) {
      this.field.setWeather("hail");
      for (const target of source.side.foe.active) {
        if (!target || target.fainted)
          continue;
        for (const moveSlot of target.moveSlots) {
          const move = this.dex.moves.get(moveSlot.move);
          if (move.category === "Status")
            continue;
          const moveType = move.id === "hiddenpower" ? target.hpType : move.type;
          if (this.dex.getImmunity(moveType, source) && this.dex.getEffectiveness(moveType, source) > 0 || move.ohko) {
            this.field.setWeather("raindance");
            return;
          }
        }
      }
    },
    onAnySwitchIn(pokemon) {
      const source = this.effectState.target;
      if (pokemon === source)
        return;
      for (const target of source.side.foe.active) {
        if (!target || target.fainted)
          continue;
        for (const moveSlot of target.moveSlots) {
          const move = this.dex.moves.get(moveSlot.move);
          if (move.category === "Status")
            continue;
          const moveType = move.id === "hiddenpower" ? target.hpType : move.type;
          if (this.dex.getImmunity(moveType, source) && this.dex.getEffectiveness(moveType, source) > 0 || move.ohko) {
            this.field.setWeather("raindance", source);
            return;
          }
        }
      }
    },
    name: "Cold Sweat",
    rating: 4,
    num: -1002
  },
  trashcompactor: {
    desc: "This Pok\xE9mon is immune to all entry hazards. If it lands on any type of entry hazard, it clears the hazard and Stockpiles 1.",
    shortDesc: "Hazard immunity. Clears hazards, Stockpiles 1 if switched in on them.",
    onAfterMega(pokemon) {
      let activated = false;
      for (const sideCondition of ["gmaxsteelsurge", "spikes", "stealthrock", "stickyweb", "toxicspikes"]) {
        if (pokemon.side.getSideCondition(sideCondition) && !this.field.pseudoWeather.stickyresidues) {
          if (!activated) {
            this.add("-activate", pokemon, "ability: Trash Compactor");
            activated = true;
            this.useMove("stockpile", pokemon);
          }
          pokemon.side.removeSideCondition(sideCondition);
          this.add("-sideend", pokemon.side, this.dex.conditions.get(sideCondition).name, "[from] Ability: Trash Compactor", "[of] " + pokemon);
        }
      }
    },
    name: "Trash Compactor",
    rating: 5,
    num: -1003
  },
  timewarp: {
    desc: "On switch-in, the field becomes Trick Room. This room remains in effect until this Ability is no longer active for any Pok\xE9mon.",
    shortDesc: "On switch-in, Trick Room begins until this Ability is not active in battle.",
    onStart(source) {
      this.field.removePseudoWeather("trickroom");
      this.field.addPseudoWeather("trickroom");
    },
    onAnyTryMove(target, source, effect) {
      if (["trickroom"].includes(effect.id)) {
        this.attrLastMove("[still]");
        this.add("cant", this.effectState.target, "ability: Time Warp", effect, "[of] " + target);
        return false;
      }
    },
    onEnd(pokemon) {
      for (const target of this.getAllActive()) {
        if (target === pokemon)
          continue;
        if (target.hasAbility("timewarp")) {
          return;
        }
      }
      this.field.removePseudoWeather("trickroom");
    },
    name: "Time Warp",
    rating: 4.5,
    num: -1004
  },
  filter: {
    shortDesc: "Reduces damage from supereffective attacks by 1/4 if one stage, 1/2 if two stages.",
    onSourceModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).typeMod > 1) {
        this.debug("Filter neutralize");
        return this.chainModify(0.5);
      } else if (target.getMoveHitData(move).typeMod > 0) {
        this.debug("Filter neutralize");
        return this.chainModify(0.75);
      }
    },
    name: "Filter",
    rating: 3,
    num: 111
  },
  chlorovolt: {
    desc: "If Sunny Day is active and this Pok\xE9mon is not holding Utility Umbrella, as well as if Electic Terrain is active, this Pok\xE9mon's Speed is doubled for each one that applies.",
    shortDesc: "If Sunny Day or Electric Terrain is active, this Pok\xE9mon's Speed is doubled for each one.",
    onModifySpe(spe, pokemon) {
      if (this.field.isTerrain("electricterrain") && ["sunnyday", "desolateland"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(4);
      } else if (["sunnyday", "desolateland"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(2);
      } else if (this.field.isTerrain("electricterrain")) {
        return this.chainModify(2);
      }
    },
    name: "ChloroVolt",
    rating: 3,
    num: -1005
  },
  flametouch: {
    shortDesc: "This Pok\xE9mon's contact moves have a 30% chance of burning.",
    onModifyMove(move) {
      if (!move || !move.flags["contact"] || move.target === "self")
        return;
      if (!move.secondaries) {
        move.secondaries = [];
      }
      move.secondaries.push({
        chance: 30,
        status: "brn",
        ability: this.dex.abilities.get("flametouch")
      });
    },
    name: "Flame Touch",
    rating: 2,
    num: -1006
  },
  parasomnia: {
    desc: "This Pok\xE9mon's highest stat is raised by 1 stage if it attacks and knocks out another Pok\xE9mon and when it falls asleep.",
    shortDesc: "This Pok\xE9mon's highest stat is boosted on KOing another Pok\xE9mon and when falling asleep.",
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
    onSetStatus(status, target, source, effect) {
      if (status.id !== "slp")
        return;
      let statName = "atk";
      let bestStat = 0;
      let s;
      for (s in source.storedStats) {
        if (source.storedStats[s] > bestStat) {
          statName = s;
          bestStat = source.storedStats[s];
        }
      }
      this.boost({ [statName]: 1 }, target);
    },
    name: "Parasomnia",
    rating: 3.5,
    num: -1007
  },
  guardup: {
    desc: "On switch-in, this Pok\xE9mon's Defense or Special Defense is raised by 1 stage based on the weaker combined attacking stat of all opposing Pok\xE9mon. Special Defense is raised if their Special Attack is higher, and Defense is raised if their Attack is the same or higher.",
    shortDesc: "On switch-in, Defense or Sp. Def is raised 1 stage based on the foes' weaker Attack.",
    onStart(pokemon) {
      let totalatk = 0;
      let totalspa = 0;
      for (const target of pokemon.side.foe.active) {
        if (!target || target.fainted)
          continue;
        totalatk += target.getStat("atk", false, true);
        totalspa += target.getStat("spa", false, true);
      }
      if (totalatk && totalatk >= totalspa) {
        this.boost({ def: 1 });
      } else if (totalspa) {
        this.boost({ spd: 1 });
      }
    },
    name: "Guard Up",
    rating: 4,
    num: -1008
  },
  knightsblade: {
    desc: "This Pok\xE9mon's blade moves have their power multiplied by 1.5.",
    shortDesc: "This Pok\xE9mon's blade moves have 1.5x power.",
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      const bladeMoves = [
        "aircutter",
        "airslash",
        "crosspoison",
        "cut",
        "furycutter",
        "guillotine",
        "leafblade",
        "nightslash",
        "psychocut",
        "razorshell",
        "sacredsword",
        "secretsword",
        "slash",
        "solarblade",
        "xscissor"
      ];
      if (bladeMoves.includes(move.id)) {
        return this.chainModify(1.5);
      }
    },
    name: "Knight's Blade",
    rating: 3,
    num: -1009
  },
  swarm: {
    desc: "When this Pok\xE9mon has 1/2 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.",
    shortDesc: "At 1/2 or less of its max HP, this Pok\xE9mon's attacking stat is 1.5x with Bug attacks.",
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Bug" && attacker.hp <= attacker.maxhp / 2) {
        this.debug("Swarm boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Bug" && attacker.hp <= attacker.maxhp / 2) {
        this.debug("Swarm boost");
        return this.chainModify(1.5);
      }
    },
    name: "Swarm",
    rating: 2,
    num: 68
  },
  damp: {
    shortDesc: "On switch-in, Fire- and Electric-type attacks have 1/3 power for 5 turns.",
    onStart(source) {
      this.field.addPseudoWeather("watersport");
      this.field.addPseudoWeather("mudsport");
    },
    name: "Damp",
    rating: 3.5,
    num: 6
  },
  psychozone: {
    desc: "This Pok\xE9mon's Normal-type moves become Psychic-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
    shortDesc: "This Pok\xE9mon's Normal-type moves become Psychic-type and have 1.2x power.",
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
        move.type = "Psychic";
        move.aerilateBoosted = true;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.aerilateBoosted)
        return this.chainModify([4915, 4096]);
    },
    name: "Psycho Zone",
    rating: 4,
    num: -1010
  },
  thunderstorm: {
    shortDesc: "Summons Rain Dance on switch-in. If the target of a foe's move, the move loses one additional PP.",
    onStart(source) {
      this.field.setWeather("raindance");
      this.add("-message", `${source.name} is exerting its pressure!`);
    },
    onDeductPP(target, source) {
      if (target.side === source.side)
        return;
      return 1;
    },
    name: "Thunderstorm",
    rating: 4.5,
    num: -1011
  },
  runaway: {
    desc: "This Pok\xE9mon immediately switches out to a chosen ally whenever any opposing Pok\xE9mon has an attack that is super effective on this Pok\xE9mon or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.",
    shortDesc: "This Pok\xE9mon switches out if the foe has a supereffective or OHKO move.",
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
            this.add("-ability", this.effectState.target, "Run Away");
            this.effectState.target.switchFlag = true;
            return;
          }
        }
      }
    },
    onAnySwitchIn(pokemon) {
      const source = this.effectState.target;
      if (pokemon === source)
        return;
      for (const target of source.side.foe.active) {
        if (!target || target.fainted)
          continue;
        for (const moveSlot of target.moveSlots) {
          const move = this.dex.moves.get(moveSlot.move);
          if (move.category === "Status")
            continue;
          const moveType = move.id === "hiddenpower" ? target.hpType : move.type;
          if (this.dex.getImmunity(moveType, source) && this.dex.getEffectiveness(moveType, source) > 0 || move.ohko) {
            this.add("-ability", this.effectState.target, "Run Away");
            this.effectState.target.switchFlag = true;
            return;
          }
        }
      }
    },
    name: "Run Away",
    rating: 5,
    num: 50
  },
  anticipation: {
    shortDesc: "On switch-in, this Pok\xE9mon's Speed is raised by 1 stage if any foe has a supereffective or OHKO move.",
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
            this.boost({ spe: 1 }, pokemon);
            return;
          }
        }
      }
    },
    name: "Anticipation",
    rating: 3,
    num: 107
  }
};
//# sourceMappingURL=abilities.js.map
