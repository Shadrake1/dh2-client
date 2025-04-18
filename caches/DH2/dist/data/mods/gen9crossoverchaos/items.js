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
  dededesmask: {
    name: "Dedede's Mask",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 2 || pokemon.baseSpecies.num === 2) {
        return false;
      }
      return true;
    },
    onTryAddVolatile(status, pokemon) {
      if (status.id === "flinch")
        return null;
    },
    forcedForme: "Masked Dedede",
    itemUser: ["Masked Dedede"],
    num: -1,
    gen: 9,
    desc: "If held by King Dedede, this item changes its forme to Masked Dedede. Holder is immune to flinching."
  },
  dracocentauriumz: {
    name: "Dracocentaurium Z",
    desc: "If held by Draco Centauros with Draco Burning, it can use Great Fire.",
    spritenum: 632,
    onTakeItem: false,
    zMove: "Great Fire",
    zMoveFrom: "Draco Burning",
    itemUser: ["Draco Centauros"],
    num: -2,
    gen: 9
  },
  wriggliumz: {
    name: "Wrigglium Z",
    desc: "If held by Wriggle Nightbug with Centipede Assault, it can use Luciola Cruciata.",
    spritenum: 642,
    onTakeItem: false,
    zMove: "Luciola Cruciata",
    zMoveFrom: "Centipede Assault",
    itemUser: ["Wriggle Nightbug-Altered"],
    num: -3,
    gen: 9
  },
  maannaniumz: {
    name: "Maannanium Z",
    desc: "If held by Ishtar with Meteor Beam, it can use Mountain Range-Shaking Firewood of Venus.",
    spritenum: 643,
    onTakeItem: false,
    zMove: "Mountain Range-Shaking Firewood of Venus",
    zMoveFrom: "Meteor Beam",
    itemUser: ["Ishtar"],
    num: -4,
    gen: 9
  },
  hecatiumz: {
    name: "Hecatium Z",
    desc: "If held by Hecatia-Tropical with Life Soup, it can use Water Planet.",
    spritenum: 633,
    onTakeItem: false,
    zMove: "Water Planet",
    zMoveFrom: "Life Soup",
    itemUser: ["Hecatia-Tropical"],
    num: -4,
    gen: 9
  },
  kaguyiumz: {
    name: "Kaguyium Z",
    desc: "If held by a Kaguya Houraisan with Giga Drain, it can use Tree-Ocean of Hourai.",
    spritenum: 635,
    onTakeItem: false,
    zMove: "Tree-Ocean of Hourai",
    zMoveFrom: "Giga Drain",
    itemUser: ["Kaguya Houraisan"],
    num: -5,
    gen: 9
  },
  // unresolved issues with Negative Zone, not implementing
  threesacredtreasures: {
    name: "Three Sacred Treasures",
    desc: "If held by Pit, this item allows him to Mega Evolve in battle.",
    megaStone: "Pit-Mega",
    megaEvolves: "Pit",
    itemUser: ["Pit"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: -6,
    gen: 9
  },
  nahidiumz: {
    name: "Nahidium Z",
    desc: "If held by Nahida with Scheme of Acuity, it can use Illusory Heartburst.",
    spritenum: 635,
    onTakeItem: false,
    zMove: "Illusory Heartburst",
    zMoveFrom: "Scheme of Acuity",
    itemUser: ["Nahida"],
    num: -7,
    gen: 9
  },
  geniumz: {
    name: "Genium Z",
    desc: "If held by Geno with Moonblast, it can use Star Riders.",
    spritenum: 648,
    onTakeItem: false,
    zMove: "Star Riders",
    zMoveFrom: "Moonblast",
    itemUser: ["Geno"],
    num: -8,
    gen: 9
  },
  spyniumz: {
    name: "Spynium Z",
    desc: "If held by Spy with Backstab, it can use Right Behind You.",
    spritenum: 646,
    onTakeItem: false,
    zMove: "Right Behind You",
    zMoveFrom: "Backstab",
    itemUser: ["Spy"],
    num: -9,
    gen: 9
  }
};
//# sourceMappingURL=items.js.map
