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
  /*
  CUSTOM MOVES
  */
  magnalance: {
    num: 2e3,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Magna Lance",
    shortDesc: "Usually goes first. Fails if target is not attacking.",
    pp: 5,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onTry(source, target) {
      const action = this.queue.willMove(target);
      const move = action?.choice === "move" ? action.move : null;
      if (!move || move.category === "Status" && move.id !== "mefirst" || target.volatiles["mustrecharge"]) {
        return false;
      }
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    contestType: "Clever"
  },
  eggbarrage: {
    num: 2001,
    accuracy: 90,
    basePower: 20,
    basePowerCallback(pokemon, target, move) {
      return 20 * move.hit;
    },
    category: "Physical",
    name: "Egg Barrage",
    shortDesc: "Hits 3 times. Each hit can miss, but power rises.",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    multihit: 3,
    multiaccuracy: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: { basePower: 120 },
    maxMove: { basePower: 140 }
  },
  glidebomb: {
    num: 2002,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    name: "Glide Bomb",
    shortDesc: "Hits 2-5 times in one turn.",
    pp: 30,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    multihit: [2, 5],
    secondary: null,
    target: "normal",
    type: "Fire",
    zMove: { basePower: 140 },
    maxMove: { basePower: 130 },
    contestType: "Beautiful"
  },
  dragonator: {
    num: 2003,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Dragonator",
    shortDesc: "Super-effective on Dragon types. 10% chance to flinch.",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onEffectiveness(typeMod, target, type) {
      if (type === "Dragon")
        return 1;
    },
    secondary: {
      chance: 10,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Steel",
    contestType: "Beautiful"
  },
  devour: {
    num: 2004,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Devour",
    shortDesc: "The user recovers some health by devouring food.",
    pp: 5,
    priority: 0,
    flags: { snatch: 1, heal: 1, metronome: 1 },
    heal: [1],
    secondary: null,
    target: "self",
    type: "Normal",
    contestType: "Beautiful"
  },
  cutwingbarrage: {
    num: 731,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Cutwing Barrage",
    shortDesc: "May cause flinching.",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, gravity: 1, slicing: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Flying",
    contestType: "Cool"
  }
};
//# sourceMappingURL=moves.js.map
