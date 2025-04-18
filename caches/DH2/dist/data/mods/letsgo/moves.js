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
  absorb: {
    inherit: true,
    basePower: 40,
    pp: 15
  },
  baddybad: {
    inherit: true,
    isNonstandard: null
  },
  bouncybubble: {
    inherit: true,
    isNonstandard: null
  },
  buzzybuzz: {
    inherit: true,
    isNonstandard: null
  },
  doubleironbash: {
    inherit: true,
    isNonstandard: null
  },
  floatyfall: {
    inherit: true,
    isNonstandard: null
  },
  freezyfrost: {
    inherit: true,
    isNonstandard: null
  },
  glitzyglow: {
    inherit: true,
    isNonstandard: null
  },
  megadrain: {
    inherit: true,
    basePower: 75,
    pp: 10
  },
  metronome: {
    inherit: true,
    onHit(target, source, effect) {
      const moves = [];
      for (const id in exports.BattleMovedex) {
        const move = this.dex.moves.get(id);
        if (move.realMove)
          continue;
        if (move.gen !== 1)
          continue;
        if (effect.noMetronome.includes(move.name))
          continue;
        moves.push(move);
      }
      let randomMove = "";
      if (moves.length) {
        moves.sort((a, b) => a.num - b.num);
        randomMove = this.sample(moves).id;
      }
      if (!randomMove)
        return false;
      this.useMove(randomMove, target);
    }
  },
  sappyseed: {
    inherit: true,
    isNonstandard: null
  },
  sizzlyslide: {
    inherit: true,
    isNonstandard: null
  },
  solarbeam: {
    inherit: true,
    basePower: 200
  },
  sparklyswirl: {
    inherit: true,
    isNonstandard: null
  },
  splishysplash: {
    inherit: true,
    isNonstandard: null
  },
  skyattack: {
    inherit: true,
    basePower: 200
  },
  teleport: {
    inherit: true,
    desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
    shortDesc: "User switches out.",
    priority: -6,
    selfSwitch: true,
    onTryHit: true
  },
  zippyzap: {
    inherit: true,
    isNonstandard: null
  }
};
//# sourceMappingURL=moves.js.map
