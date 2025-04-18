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
  /*cacturnite: {
  	name: "Cacturnite",
  	spritenum: 613,
  	megaStone: "Cacturne-Mega",
  	megaEvolves: "Cacturne",
  	itemUser: ["Cacturne"],
  	onTakeItem(item, source) {
  		if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
  		return true;
  	},
  	num: -1008,
  	gen: 9,
  	desc: "If held by a Cacturne, this item allows it to Mega Evolve in battle.",
  },
  // end*/
  // Changes to items
  // start
  honey: {
    name: "Honey",
    spritenum: 22,
    // Replace with the correct sprite number
    fling: {
      basePower: 30
    },
    onResidualOrder: 26,
    // Executes at the end of the turn
    onResidualSubOrder: 1,
    onResidual(pokemon) {
      if (pokemon.hasType("Bug") || pokemon.hasAbility("honeygather")) {
        if (pokemon.useItem()) {
          const bestStat = pokemon.getBestStat(true);
          this.boost({ [bestStat]: 1 }, pokemon);
        }
      }
    },
    num: -1e3,
    // It doesn't seem like Honey item is on DH.. So, it's technically considered a new item here, I guess...
    gen: 9
  },
  //
  ancientarmor: {
    name: "Ancient Armor",
    spritenum: 581,
    fling: {
      basePower: 80
    },
    onSourceModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).typeMod > 0) {
        this.debug("Ancient Armor neutralize");
        return this.chainModify(0.75);
      }
    },
    num: -1001,
    desc: "User receives 25% less damage from a super effective move."
  },
  // end
  miracleberry: {
    name: "Miracle Berry",
    spritenum: 262,
    isBerry: true,
    naturalGift: {
      basePower: 80,
      type: "Flying"
    },
    onUpdate(pokemon) {
      if (pokemon.hp <= pokemon.maxhp / 4 || pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility("gluttony") && pokemon.abilityState.gluttony) {
        pokemon.eatItem();
      }
    },
    onTryEatItem(item, pokemon) {
      if (!this.runEvent("TryHeal", pokemon, null, this.effect, pokemon.baseMaxhp / 2))
        return false;
    },
    onEat(pokemon) {
      this.heal(pokemon.baseMaxhp / 2);
    },
    /*onUpdate(pokemon) {
    	if (pokemon.status || pokemon.volatiles['confusion']) {
    		pokemon.eatItem();
    	}
    },
    onEat(pokemon) {
    	pokemon.cureStatus();
    	pokemon.removeVolatile('confusion');
    },*/
    num: 157,
    gen: 2,
    isNonstandard: null
  },
  //
  zoomlens: {
    name: "Zoom Lens",
    spritenum: 574,
    fling: {
      basePower: 10
    },
    onSourceModifyAccuracyPriority: -2,
    onSourceModifyAccuracy(accuracy, target) {
      if (typeof accuracy === "number" && !this.queue.willMove(target)) {
        this.debug("Zoom Lens boosting accuracy");
        return this.chainModify([4915, 4096]);
      }
    },
    onModifyDamage(damage, source, target, move) {
      if (!this.queue.willMove(target)) {
        this.debug("Zoom Lens boosting damage");
        return this.chainModify([4915, 4096]);
      }
    },
    num: 276,
    gen: 4
  }
  // end
};
//# sourceMappingURL=items.js.map
