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
var rulesets_exports = {};
__export(rulesets_exports, {
  Rulesets: () => Rulesets
});
module.exports = __toCommonJS(rulesets_exports);
const Rulesets = {
  bigbuttonrule: {
    name: "Big Button Rule",
    effectType: "Rule",
    desc: `Pok&eacute;mon who have turned Big will remain Big when switched out.`,
    onSwitchIn(pokemon) {
      if (pokemon.big) {
        pokemon.addVolatile("bigbutton");
      }
    }
  },
  milfrule: {
    name: "MILF Rule",
    effectType: "Rule",
    desc: `Pok&eacute;mon with the ability MILF will add 2 Fishing Tokens at the beginning of the battle.`,
    onBegin() {
      for (const side of this.sides) {
        for (const pokemon of side.pokemon) {
          if (pokemon.set.ability === "M I L F")
            side.addFishingTokens(2);
        }
      }
    }
  },
  ohmyrodrule: {
    name: "Ohmyrod Rule",
    effectType: "Rule",
    desc: `Ohmyrod gets a special message when switching in.`,
    onSwitchIn(pokemon) {
      if (pokemon.baseSpecies.baseSpecies === "Ohmyrod") {
        this.add("-message", "it is ohmyrod time :D");
      }
    }
  },
  seriousrule: {
    name: "Serious Rule",
    effectType: "Rule",
    desc: `Pok&eacute;mon with the nature Serious will gain the Serious type on switchin.`,
    onSwitchIn(pokemon) {
      if (pokemon.set.nature === "Serious") {
        if (pokemon.addType("Serious"))
          this.add("-start", pokemon, "typeadd", "Serious");
      }
    }
  }
};
//# sourceMappingURL=rulesets.js.map
