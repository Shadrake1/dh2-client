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
  stench: {
    shortDesc: "Grants immunity to Fairy-type moves.",
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Fairy") {
        this.add("-immune", target, "[from] ability: Stench");
        return null;
      }
    },
    id: "stench",
    name: "Stench",
    rating: 0.5,
    num: 1
  },
  anticipation: {
    desc: "On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves. Being alerted will cause the user's speed to be raised by one stage.",
    shortDesc: "On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move. Shuddering raises Speed by one stage.",
    onStart(pokemon) {
      for (const target of pokemon.side.foe.active) {
        if (!target || target.fainted)
          continue;
        for (const moveSlot of target.moveSlots) {
          const move = this.dex.moves.get(moveSlot.move);
          const moveType = move.id === "hiddenpower" ? target.hpType : move.type;
          if (move.category !== "Status" && (this.dex.getImmunity(moveType, pokemon) && this.dex.getEffectiveness(moveType, pokemon) > 0 || move.ohko)) {
            this.add("-ability", pokemon, "Anticipation");
            if (!this.boost({ spe: 1 })) {
              this.add("-immune", target, "[from] ability: Anticipation");
            }
            return;
          }
        }
      }
    },
    id: "anticipation",
    name: "Anticipation",
    rating: 0.5,
    num: 107
  },
  battery: {
    shortDesc: "Upon switching in, the user will automatically use Charge.",
    onStart(pokemon) {
      pokemon.addVolatile("charge");
      this.add("-activate", pokemon, "ability: Battery");
    },
    id: "battery",
    name: "Battery",
    rating: 0,
    num: 217
  },
  klutz: {
    desc: "The user's\xA0contact moves will remove the opponent's items, but it will\xA0lose its own item upon being hit\xA0by any attack.",
    shortDesc: "Removes Item when making contact, loses Item when receiving contact.",
    onAfterMoveSecondary(target, source, move) {
      if (target !== source && move.flags["contact"] && source.hp) {
        const item = target.takeItem();
        if (item) {
          this.add("-enditem", target, item.name, "[from] move: Knock Off", "[of] " + source);
        }
      }
    },
    onDamagingHit(damage, target, source, move) {
      if (target !== source && move.flags["contact"] && source.hp) {
        const item = target.takeItem();
        if (item) {
          this.add("-enditem", target, item.name, "[from] move: Knock Off", "[of] " + source);
        }
      }
    },
    id: "klutz",
    name: "Klutz",
    rating: -1,
    num: 103
  },
  receiver: {
    desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.",
    shortDesc: "This Pokemon copies the Ability of an ally that faints.",
    onStart(pokemon) {
      let target, switchingOut, id;
      if (pokemon.side.faintedLastTurn) {
        switchingOut = battle.log[battle.lastMoveLine].splice("|");
        id = switchingOut.indexOf("faint") + 1;
        for (const ally of side.pokemon) {
          if (ally.id === switchingOut[id])
            target = ally;
        }
        if (!this.effectState.target.hp)
          return;
        const ability = target.getAbility();
        const bannedAbilities = ["battlebond", "comatose", "disguise", "download", "flowergift", "forecast", "gorillatactics", "gulpmissile", "hugepower", "hungerswitch", "hustle", "iceface", "illusion", "intrepidsword", "imposter", "multitype", "powerconstruct", "powerofalchemy", "purepower", "receiver", "rkssystem", "schooling", "shieldsdown", "stancechange", "trace", "wonderguard", "zenmode"];
        if (bannedAbilities.includes(target.ability))
          return;
        this.add("-ability", this.effectState.target, ability, "[from] ability: Receiver", "[of] " + target);
        this.effectState.target.setAbility(ability);
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1 },
    id: "receiver",
    name: "Receiver",
    rating: 0,
    num: 222
  },
  damp: {
    shortDesc: "On switch-in, this Pokemon summons Mud Sport and Water Sport.",
    onStart(source) {
      this.field.addPseudoWeather("mudsport");
      this.field.addPseudoWeather("watersport");
    },
    id: "damp",
    name: "Damp"
  },
  "healer": {
    id: "healer",
    name: "Healer",
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
    desc: "At the end of every turn, this Pokemon and its allies restore 1/16 of their max HP.",
    num: 131
  },
  illuminate: {
    desc: "If a Pokemon uses a Ghost- or Dark-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon.",
    shortDesc: "Ghost/Dark-type moves against this Pokemon deal damage with a halved attacking stat.",
    onSourceModifyAtkPriority: 6,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Ghost" || move.type === "Dark") {
        this.debug("Thick Fat weaken");
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Ghost" || move.type === "Dark") {
        this.debug("Thick Fat weaken");
        return this.chainModify(0.5);
      }
    },
    name: "Illuminate",
    id: "illuminate",
    rating: 3.5,
    num: 35
  },
  "telepathy": {
    desc: "This Pokemon's Normal-type moves become Psychic-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
    shortDesc: "This Pokemon's Normal-type moves become Psychic type and have 1.2x power.",
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      if (move.type === "Normal" && !["judgment", "multiattack", "naturalgift", "revelationdance", "technoblast", "weatherball"].includes(move.id) && !(move.isZ && move.category !== "Status")) {
        move.type = "Psychic";
        move.telepathyBoosted = true;
      }
    },
    onBasePowerPriority: 8,
    onBasePower(basePower, pokemon, target, move) {
      if (move.telepathyBoosted)
        return this.chainModify([4915, 4096]);
    },
    id: "telepathy",
    name: "Telepathy",
    rating: 4,
    num: 140
  },
  "sweetveil": {
    shortDesc: "For five turns after switch-in: Heal active team members by 6.25% of Max HP.",
    onStart(pokemon) {
      pokemon.side.addSideCondition("sweetveil");
    },
    condition: {
      duration: 5,
      durationCallBack(target, source, effect) {
        if (source?.hasItem("lightclay")) {
          return 8;
        }
      },
      onStart(side2, source) {
        this.add("-sidestart", "Sweet Veil", "[from] ability: Sweet Veil", "[of] " + source);
      },
      onResidualOrder: 5,
      onResidualSubOrder: 5,
      onResidual(side2) {
        for (const pokemon of side2.active) {
          this.heal(pokemon.baseMaxhp / 16);
        }
      },
      onEnd(side2) {
        this.add("-sideend", side2, "Sweet Veil");
      }
    },
    id: "sweetveil",
    name: "Sweet Veil"
  },
  runaway: {
    desc: "On any Pokemon's switch-in, this Pokemon switches out if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.",
    shortDesc: "On any Pokemon's switch-in, this Pokemon switches out if any foe has a supereffective or OHKO move.",
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
            this.add("-ability", pokemon, "Run Away");
            pokemon.useMove("teleport");
            return;
          }
        }
      }
    },
    onFoeSwitchIn(target) {
      for (const moveSlot of target.moveSlots) {
        const move = this.dex.moves.get(moveSlot.move);
        if (move.category === "Status")
          continue;
        const moveType = move.id === "hiddenpower" ? target.hpType : move.type;
        if (this.dex.getImmunity(moveType, this.effectState.source) && this.dex.getEffectiveness(moveType, this.effectState.source) > 0 || move.ohko) {
          this.add("-ability", this.effectState.source, "Run Away");
          this.effectState.source.useMove("teleport");
          return;
        }
      }
    },
    name: "Run Away",
    id: "runaway"
  },
  "mummy": {
    shortDesc: "On switch-in, all Pokemon, including this one, suffer Heal Block.",
    onStart(pokemon) {
      for (const side2 of this.sides) {
        for (const target of side2) {
          target.addVolatile("healblock", pokemon);
        }
      }
    },
    id: "mummy",
    name: "Mummy"
  },
  "ironfist": {
    shortDesc: "This Pokemon's punch-based attacks are SE against Fairy-types.",
    onSourceEffectiveness(move, typeMod, type, pokemon) {
      if (type == "Fairy" && move.flags["punch"]) {
        return typeMod > 0 ? typeMod + 1 : 1;
      } else if (typeMod < 0 && pokemon.hasType("Fairy")) {
        return 0;
      }
    },
    name: "Iron Fist",
    rating: 3,
    num: 89
  },
  "shellarmor": {
    shortDesc: "When this Pokemon doesn't have a status, all incoming attacks target its Defense, regardless of category.",
    onSourceModifyMove(move, attacker, defender) {
      if (!defender.status) {
        move.defensiveCategory = "Physical";
      }
    },
    onAfterMove(pokemon, target, move) {
      if (move.id === "shellsmash") {
        pokemon.setAbility("weakarmor");
      }
    },
    name: "Shell Armor"
  }
};
//# sourceMappingURL=abilities.js.map
