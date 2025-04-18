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
  lightball: {
    name: "Light Ball",
    spritenum: 251,
    fling: {
      basePower: 30,
      status: "par"
    },
    onModifyAtkPriority: 1,
    onModifyAtk(atk, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === "Pikachu-Unova") {
        return this.chainModify(2);
      }
    },
    onModifySpAPriority: 1,
    onModifySpA(spa, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === "Pikachu-Unova") {
        return this.chainModify(2);
      }
    },
    itemUser: ["Pikachu-Unova"],
    shortDesc: "If held by a Pikachu-Unova, its Attack and Sp. Atk are doubled.",
    num: 236,
    gen: 2
  },
  draconicclub: {
    name: "Draconic Club",
    spritenum: 491,
    fling: {
      basePower: 90
    },
    onSourceAfterFaint(length, target, source, effect) {
      if (source.baseSpecies.baseSpecies === "Marowak") {
        if (effect && effect.effectType === "Move") {
          this.add("-activate", source, "item: Draconic Club");
          this.heal(source.baseMaxhp / 3, source, source, effect);
        }
      }
    },
    itemUser: ["Marowak"],
    shortDesc: "If held by Marowak, restores 1/3 of its max HP upon KOing a Pokemon.",
    num: -1,
    gen: 2
  },
  earthenclub: {
    name: "Earthen Club",
    spritenum: 491,
    fling: {
      basePower: 90
    },
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move && user.baseSpecies.name === "Alolawak" && move.type === "Ground") {
        return this.chainModify(2);
      }
    },
    itemUser: ["Alolawak"],
    shortDesc: "If held by Alolawak, the power of Ground moves are doubled.",
    num: -2,
    gen: 2
  },
  thickclub: {
    name: "Thick Club",
    spritenum: 491,
    fling: {
      basePower: 90
    },
    onSetStatus(status, target, source, effect) {
      if (target.baseSpecies.baseSpecies === "Marowak-Alola-Totem") {
        if (status.id !== "psn" && status.id !== "tox" && status.id !== "brn")
          return;
        if (effect?.status) {
          this.add("-immune", target, "[from] item: Thick Club");
        }
        return false;
      }
    },
    itemUser: ["Marowak-Alola-Totem"],
    shortDesc: "If held by Marowak-Totem, it is immune to burn and poison.",
    num: 258,
    gen: 2
  },
  adamantorb: {
    name: "Adamant Orb",
    spritenum: 4,
    fling: {
      basePower: 60
    },
    itemUser: ["Dialga"],
    num: 135,
    gen: 4,
    shortDesc: "When this Pokemon sets Trick Room, it lasts for 8 turns instead of 5."
  },
  tempusorb: {
    name: "Tempus Orb",
    spritenum: 4,
    fling: {
      basePower: 60
    },
    onModifyAtkPriority: 1,
    onModifyAtk(atk, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === "Archronos") {
        return this.chainModify(1.2);
      }
    },
    onModifyDefPriority: 1,
    onModifyDef(def, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === "Archronos") {
        return this.chainModify(0.8);
      }
    },
    onModifySpAPriority: 1,
    onModifySpA(spa, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === "Archronos") {
        return this.chainModify(1.2);
      }
    },
    onModifySpDPriority: 1,
    onModifySpD(spd, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === "Archronos") {
        return this.chainModify(0.8);
      }
    },
    itemUser: ["Archronos"],
    num: -3,
    gen: 4,
    shortDesc: "If held by Archronos: 1.2x in its offenses & 0.8x in its defenses."
  },
  lustrousorb: {
    name: "Lustrous Orb",
    spritenum: 265,
    fling: {
      basePower: 60
    },
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move && user.baseSpecies.name === "Palkia" && (move.type === "Psychic" || move.type === "Dragon")) {
        return this.chainModify([4915, 4096]);
      }
    },
    itemUser: ["Palkia"],
    num: 136,
    gen: 4,
    shortDesc: "Boost the power of Palkia's STAB moves by 1.2x."
  },
  spacialorb: {
    name: "Spacial Orb",
    spritenum: 265,
    fling: {
      basePower: 60
    },
    onStart(pokemon) {
      if (!pokemon.ignoringItem() && !this.field.isTerrain("")) {
        pokemon.useItem();
      }
    },
    onAnyTerrainStart() {
      const pokemon = this.effectState.target;
      if (!this.field.isTerrain("")) {
        pokemon.useItem();
      }
    },
    boosts: {
      atk: 1
    },
    itemUser: ["Palkia-Origin"],
    num: -4,
    gen: 4,
    shortDesc: "If a Terrain is active, raises holder's Attack by 1 stage. Single use."
  },
  eviolite: {
    name: "Eviolite",
    spritenum: 130,
    fling: {
      basePower: 40
    },
    onModifyDefPriority: 2,
    onModifyDef(def, pokemon) {
      if (pokemon.baseSpecies.nfe || pokemon.species.id === "basculinskyship") {
        return this.chainModify(1.5);
      }
    },
    onModifySpDPriority: 2,
    onModifySpD(spd, pokemon) {
      if (pokemon.baseSpecies.nfe || pokemon.species.id === "basculinskyship") {
        return this.chainModify(1.5);
      }
    },
    itemUser: ["Basculin-Skyship"],
    shortDesc: "If Basculin-Skyship, its Defense and Sp. Def are 1.5x.",
    num: 538,
    gen: 5
  }
};
//# sourceMappingURL=items.js.map
