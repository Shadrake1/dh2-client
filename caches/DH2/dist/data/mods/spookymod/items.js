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
var items_exports = {};
__export(items_exports, {
  Items: () => Items
});
module.exports = __toCommonJS(items_exports);
const Items = {
  spellbookmagazine: {
    name: "Spellbook Magazine",
    shortDesc: "Lets the user pick up and cast spells.",
    rating: 3,
    onTakeItem(item, pokemon, source, move) {
      return false;
    },
    onResidual(pokemon) {
      if (pokemon.volatiles["spellbookmagazine"])
        return;
      const rand = this.random(4);
      const shadowleap = {
        move: "Shadow Leap",
        id: "shadowleap",
        pp: 2,
        maxpp: 2,
        target: "normal",
        disabled: false,
        used: false
      };
      const firebail = {
        move: "FirebaIl",
        id: "firebail",
        pp: 2,
        maxpp: 2,
        target: "normal",
        disabled: false,
        used: false
      };
      const blastjump = {
        move: "Blast Jump",
        id: "blastjump",
        pp: 2,
        maxpp: 2,
        target: "normal",
        disabled: false,
        used: false
      };
      const overheal = {
        move: "Overheal",
        id: "overheal",
        pp: 1,
        maxpp: 1,
        target: "self",
        disabled: false,
        used: false
      };
      const batswarm = {
        move: "Bat Swarm",
        id: "batswarm",
        pp: 2,
        maxpp: 2,
        target: "normal",
        disabled: false,
        used: false
      };
      const pumpkinmirv = {
        move: "Pumpkin MIRV",
        id: "pumpkinmirv",
        pp: 1,
        maxpp: 1,
        target: "normal",
        disabled: false,
        used: false
      };
      const stealth = {
        move: "Stealth",
        id: "stealth",
        pp: 1,
        maxpp: 1,
        target: "self",
        disabled: false,
        used: false
      };
      const monoculus = {
        move: "MONOCULUS!",
        id: "monoculus",
        pp: 1,
        maxpp: 1,
        target: "normal",
        disabled: false,
        used: false
      };
      const skeletonhorde = {
        move: "Skeleton Horde",
        id: "skeletonhorde",
        pp: 1,
        maxpp: 1,
        target: "normal",
        disabled: false,
        used: false
      };
      const ballolightning = {
        move: "Ball O' Lightning",
        id: "ballolightning",
        pp: 1,
        maxpp: 1,
        target: "normal",
        disabled: false,
        used: false
      };
      const meteorshower = {
        move: "Meteor Shower",
        id: "meteorshower",
        pp: 1,
        maxpp: 1,
        target: "normal",
        disabled: false,
        used: false
      };
      const minify = {
        move: "Minify",
        id: "minify",
        pp: 1,
        maxpp: 1,
        target: "self",
        disabled: false,
        used: false
      };
      const spells = [shadowleap, firebail, blastjump, overheal, batswarm, pumpkinmirv, stealth, monoculus, skeletonhorde, ballolightning, meteorshower, minify];
      if (rand === 0) {
        const randSpell = this.sample(spells);
        pokemon.moveSlots.push(randSpell);
        pokemon.addVolatile("spellbookmagazine");
      }
    },
    condition: {
      onResidual(pokemon) {
        const spells = ["Shadow Leap", "FirebaIl", "Blast Jump", "Overheal", "Bat Swarm", "Pumpkin MIRV", "Stealth", "MONOCULUS!", "Skeleton Horde", "Ball O' Lightning", "Meteor Shower", "Minify"];
        if (!spells.includes(pokemon.lastMoveUsed.name) || pokemon.lastMoveUsed.pp != 0)
          return;
        pokemon.moveSlots.pop();
        pokemon.removeVolatile("spellbookmagazine");
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Spell", "[silent]");
      }
    }
  }
};
//# sourceMappingURL=items.js.map
