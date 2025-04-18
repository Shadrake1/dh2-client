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
  raichunite: {
    name: "Raichunite",
    spritenum: 628,
    megaStone: "Raichu-Mega",
    megaEvolves: "Raichu",
    itemUser: ["Raichu"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: -1001,
    gen: 8,
    desc: "If held by a Raichu, this item allows it to Mega Evolve in battle."
  },
  garbodorite: {
    name: "Garbodorite",
    spritenum: 578,
    megaStone: "Garbodor-Mega",
    megaEvolves: "Garbodor",
    itemUser: ["Garbodor"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: -1002,
    gen: 8,
    desc: "If held by a Garbodor, this item allows it to Mega Evolve in battle."
  },
  vanillite: {
    name: "Vanillite",
    spritenum: 578,
    megaStone: "Vanilluxe-Mega",
    megaEvolves: "Vanilluxe",
    itemUser: ["Vanilluxe"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: -1003,
    gen: 8,
    desc: "If held by a Vanilluxe, this item allows it to Mega Evolve in battle."
  },
  machobrace: {
    name: "Macho Brace",
    spritenum: 269,
    fling: {
      basePower: 60
    },
    onModifyDamage(damage, source, target, move) {
      return this.chainModify([5324, 4096]);
    },
    onModifySpe(spe) {
      return this.chainModify(0.5);
    },
    num: 215,
    gen: 3,
    desc: "Holder's attacks do 1.3x damage, but its Speed is halved."
  },
  serenitybrace: {
    name: "Serenity Brace",
    spritenum: 269,
    fling: {
      basePower: 60
    },
    onModifySecondaries(secondaries) {
      this.debug("Serenity Brace prevents secondary effects");
      return secondaries.filter((effect) => !!(effect.self || effect.dustproof));
    },
    num: -1004,
    gen: 8,
    desc: "The holder is protected from the secondary effects of moves."
  },
  "weatherwarriorscrystal": {
    shortDesc: "When a weather is active, increases the holder's Atk and Sp Atk stats by 1 stage each.",
    onUpdate(pokemon) {
      if (this.field.isWeather(["sunnyday", "desolateland", "hail", "raindance", "primordialsea", "sandstorm"]) && pokemon.useItem()) {
        this.boost({
          atk: 1,
          spa: 1
        });
      }
    },
    fling: {
      basePower: 60
    },
    gen: 7,
    id: "weatherwarriorscrystal",
    name: "Weather Warriors Crystal"
  },
  marshadiumz: {
    name: "Marshadium Z",
    spritenum: 654,
    onTakeItem: false,
    zMove: "Scum-Stealing 7-Scrap Strike",
    zMoveFrom: "Spectral Residue",
    itemUser: ["Trubbish-Marshadow"],
    num: 802,
    gen: 7,
    desc: "If held by Trubbish-Marshadow with Spectral Residue, it can use Scum-Stealing 7-Scrap Strike."
  },
  silkscarf: {
    name: "Silk Scarf",
    spritenum: 444,
    fling: {
      basePower: 10
    },
    onModifyMove(move) {
      move.stab = 1.8;
    },
    num: 251,
    gen: 3,
    desc: "Holder's STAB attacks have 1.2x power."
  },
  reliccharm: {
    name: "Relic Charm",
    spritenum: 390,
    onSwitchIn(pokemon) {
      if (pokemon.isActive && pokemon.baseSpecies.name === "Meloetta") {
        pokemon.formeChange("Meloetta-Pirouette");
      }
    },
    onBasePower(basePower, user, target, move) {
      if (move && move.type === "Fighting") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, source) {
      if (source.baseSpecies.baseSpecies === "Meloetta")
        return false;
      return true;
    },
    itemUser: ["Meloetta"],
    num: -1006,
    gen: 8,
    desc: "If held by Meloetta: Pirouette Forme on entry, 1.2x power Fighting-type attacks."
  },
  redriotite: {
    name: "Redriotite",
    spritenum: 578,
    megaStone: "Red Riot-Mega",
    megaEvolves: "Red Riot",
    itemUser: ["Red Riot"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: -1007,
    gen: 8,
    desc: "If held by Red Riot, this item allows him to Mega Evolve in battle."
  },
  gengaritex: {
    name: "Gengarite X",
    spritenum: 578,
    megaStone: "Gengar-Mega-X",
    megaEvolves: "Gengar",
    itemUser: ["Gengar"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: -1008,
    gen: 8,
    desc: "If held by a Gengar, this item allows it to Mega Evolve in battle."
  },
  augmentedlens: {
    name: "Augmented Lens",
    spritenum: 537,
    fling: {
      basePower: 10
    },
    onSwitchIn(pokemon) {
      if (pokemon.isActive) {
        this.add("-message", `${pokemon.name} has an Augmented Lens!`);
      }
    },
    onSourceModifyAccuracyPriority: 3,
    onSourceModifyAccuracy(accuracy, target, source, move) {
      if (!move.ohko && move.category !== "Status") {
        return true;
      }
    },
    onSourceHit(target, source) {
      let move = source.lastMove;
      if (!move || move.isZ || move.ohko || move.category === "Status")
        return;
      if (move.isMax && move.baseMove)
        move = this.dex.moves.get(move.baseMove);
      source.deductPP(move.id, 1);
    },
    num: -1009,
    gen: 8,
    desc: "Every move used by the holder will always hit; moves cost 1 PP more per use."
  }
};
//# sourceMappingURL=items.js.map
