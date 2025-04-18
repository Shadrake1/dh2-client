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
  bloodfueled: {
    shortDesc: "Restores 1/8 of own max HP, rounded down, upon hitting another Pokemon with a contact move.",
    onAfterMoveSecondarySelfPriority: -1,
    onAfterMoveSecondarySelf(pokemon, target, move) {
      if (this.checkMoveMakesContact(move, target, pokemon)) {
        this.heal(pokemon.baseMaxhp / 8);
      }
    },
    flags: {},
    name: "Blood-Fueled",
    rating: 4,
    num: -1
  },
  younglion: {
    shortDesc: "If this Pokemon moves before the opponent, this Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage halved.",
    onPrepareHit(source, target, move) {
      if (move.category === "Status" || move.multihit || move.flags["noparentalbond"] || move.flags["charge"] || move.flags["futuremove"] || move.spreadHit || move.isZ || move.isMax || !(target.newlySwitched || this.queue.willMove(target)))
        return;
      move.multihit = 2;
      move.multihitType = "younglion";
    },
    // Damage modifier implemented in BattleActions#modifyDamage()
    onSourceModifySecondaries(secondaries, target, source, move) {
      if (move.multihitType === "younglion" && move.id === "secretpower" && move.hit < 2) {
        return secondaries.filter((effect) => effect.volatileStatus === "flinch");
      }
    },
    flags: {},
    name: "Young Lion",
    rating: 4,
    num: -2
  },
  pandemonicfeast: {
    shortDesc: "Multi-hit moves hit the maximum number of times, and use the higher attacking stat when calculating damage.",
    onModifyMove(move, pokemon) {
      if (move.multihit && Array.isArray(move.multihit) && move.multihit.length) {
        move.multihit = move.multihit[1];
        if (pokemon.getStat("atk", false, true) > pokemon.getStat("spa", false, true)) {
          move.overrideOffensiveStat = "atk";
        } else {
          move.overrideOffensiveStat = "spa";
        }
      }
      if (move.multiaccuracy) {
        delete move.multiaccuracy;
        if (pokemon.getStat("atk", false, true) > pokemon.getStat("spa", false, true)) {
          move.overrideOffensiveStat = "atk";
        } else {
          move.overrideOffensiveStat = "spa";
        }
      }
    },
    flags: {},
    name: "Pandemonic Feast",
    rating: 3.5,
    num: -3
  },
  shadowpounce: {
    shortDesc: "This Pokemon retaliates with Shadow Sneak whenever it is damaged by an attack.",
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (!move.flags["noreaction"] && target.hp) {
        this.actions.useMove({
          id: "shadowsneak",
          name: "Shadow Sneak",
          accuracy: 100,
          basePower: 40,
          category: "Physical",
          priority: 1,
          flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, noreaction: 1 },
          effectType: "Move",
          type: "Ghost"
        }, target, source);
      }
    },
    flags: {},
    name: "Shadow Pounce",
    rating: 3.5,
    num: -4
  }
};
//# sourceMappingURL=abilities.js.map
