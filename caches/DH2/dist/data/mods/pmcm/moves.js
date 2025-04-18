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
var moves_exports = {};
__export(moves_exports, {
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
const Moves = {
  ancientpower: {
    inherit: true,
    category: "Physical",
    secondary: null,
    onAfterMoveSecondarySelf(pokemon, target, move) {
      if (!target || target.fainted || target.hp <= 0)
        this.boost({ atk: 1, def: 1, spa: 1, spd: 1, spe: 1 }, pokemon, pokemon, move);
    },
    shortDesc: "If this move causes the opponent to faint, raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage."
  },
  sandsearstorm: {
    //Now always hits in Sand instead of Rain
    inherit: true,
    onModifyMove(move, pokemon, target) {
      if (target && ["sandstorm"].includes(target.effectiveWeather())) {
        move.accuracy = true;
      }
    }
  },
  mountainmaw: {
    //Copied from Psychic Fangs, just changed to be Rock type
    num: -101,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Mountain Maw",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1 },
    onTryHit(pokemon) {
      pokemon.side.removeSideCondition("reflect");
      pokemon.side.removeSideCondition("lightscreen");
      pokemon.side.removeSideCondition("auroraveil");
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    contestType: "Clever"
  },
  steelwing: {
    //Buffed secondary chance to 50%
    inherit: true,
    secondary: {
      chance: 50,
      self: {
        boosts: {
          def: 1
        }
      }
    }
  },
  scavenge: {
    num: -102,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Scavenge",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    secondary: null,
    target: "normal",
    type: "Poison",
    contestType: "Tough",
    onHit(target, source) {
      if (source.item && !source.lastItem) {
        source.lastItem = source.item;
        source.setItem("");
        this.add("-item", source, "", "[from] move: Scavenge");
      }
      return null;
    },
    onAfterMove(source) {
      if (source.lastItem) {
        const item = source.lastItem;
        source.lastItem = "";
        source.setItem(item);
        this.add("-item", source, this.dex.items.get(item), "[from] move: Scavenge");
      }
    }
  },
  aquaring: {
    inherit: true,
    condition: {
      onStart(pokemon) {
        this.add("-start", pokemon, "Aqua Ring");
      },
      onResidualOrder: 6,
      onResidual(pokemon) {
        this.heal(pokemon.baseMaxhp / 16);
      },
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
      }
    },
    shortDesc: "User recovers 1/16 max HP per turn. While this is active, this Pokemon's Water power is 2x and Fire power against it is halved. "
  },
  ragingbull: {
    num: 9999,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    priority: 0,
    pp: 10,
    name: "Raging Bull",
    type: "Normal",
    effectType: "Move",
    shortDesc: "Changes type to the most effective against the target (Water, Fighting, Fire, or Normal).",
    desc: "Changes the move's and user's forme to the most effective against the target (Water, Fighting, Fire, or Normal).",
    beforeMoveCallback(source, target, move) {
      const typeEffectiveness = {
        Water: this.dex.getEffectiveness("Water", target),
        Fighting: this.dex.getEffectiveness("Fighting", target),
        Fire: this.dex.getEffectiveness("Fire", target),
        Normal: this.dex.getEffectiveness("Normal", target)
      };
      let bestType = "Normal";
      let maxEffectiveness = -Infinity;
      for (const type in typeEffectiveness) {
        if (typeEffectiveness[type] > maxEffectiveness) {
          maxEffectiveness = typeEffectiveness[type];
          bestType = type;
        }
      }
      if (bestType === "Water") {
        source.formeChange("Tauros-Paldea-Aqua");
        source.setAbility("Adaptability");
        this.add("-ability", source, "Adaptability");
      } else if (bestType === "Fighting") {
        source.formeChange("Tauros-Paldea-Combat");
        source.setAbility("Adaptability");
        this.add("-ability", source, "Adaptability");
      } else if (bestType === "Fire") {
        source.formeChange("Tauros-Paldea-Blaze");
        source.setAbility("Adaptability");
        this.add("-ability", source, "Adaptability");
      } else {
        source.formeChange("Tauros");
        source.setAbility("Adaptability");
        this.add("-ability", source, "Adaptability");
      }
      source.m.ragingBullMoveType = bestType;
    },
    onPrepareHit(target, source, move) {
      this.add("-anim", source, "Techno Blast", target);
    },
    onModifyType(move, pokemon, target) {
      if (pokemon.m.ragingBullMoveType) {
        move.type = pokemon.m.ragingBullMoveType;
      }
    },
    target: "normal"
  },
  metalclaw: {
    inherit: true,
    secondary: {
      chance: 50,
      self: {
        boosts: {
          atk: 1
        }
      }
    }
  }
};
//# sourceMappingURL=moves.js.map
