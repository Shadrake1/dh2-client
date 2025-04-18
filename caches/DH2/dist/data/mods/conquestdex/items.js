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
  ballofrage: {
    name: "Ball of Rage",
    spritenum: 1e3,
    fling: {
      basePower: 60
    },
    onHit(target, source, move) {
      if (!target.hp)
        return;
      if (move?.effectType === "Move" && target.getMoveHitData(move).crit) {
        target.useItem();
      }
    },
    boosts: {
      atk: 3
    },
    num: 1001,
    shortDesc: "If user is hit by a critical hit, its attack is raised by 3 stages.",
    gen: 9,
    rating: 3
  },
  cheeringconch: {
    name: "Cheering Conch",
    spritenum: 1001,
    fling: {
      basePower: 30
    },
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (this.randomChance(4, 10)) {
        this.debug("Cheering Conch boost");
        this.add("-message", `${user.name}'s cheering itself on!`);
        return this.chainModify([4916, 4096]);
      }
    },
    num: 1002,
    shortDesc: "40% chance to boost power of attacks by 20%.",
    gen: 9
  },
  warfan: {
    name: "War Fan",
    spritenum: 1002,
    fling: {
      basePower: 30
    },
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (this.randomChance(2, 10)) {
        this.debug("War Fan boost");
        this.add("-message", `${user.name} fanned the flame of war!`);
        return this.chainModify([6144, 4096]);
      }
    },
    num: 1003,
    shortDesc: "20% chance to boost power of attacks by 50%.",
    gen: 9
  }
};
//# sourceMappingURL=items.js.map
