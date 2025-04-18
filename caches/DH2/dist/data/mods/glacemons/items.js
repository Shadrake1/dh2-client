"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target2, all) => {
  for (var name in all)
    __defProp(target2, name, { get: all[name], enumerable: true });
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
  crystalcrown: {
    name: "Crystal Crown",
    num: -1,
    shortDesc: "0.67x damage from Z-Move/Mega/Dynamax/Tera. Attack = -1/8 HP.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.isZ || source.volatiles["dynamax"] && source.volatiles["dynamax"].isActive || source.volatiles["terastallized"] || source.forme && source.forme.startsWith("Mega")) {
        return this.chainModify(0.67);
      }
    },
    onDamagingHitOrder: 2,
    onDamagingHit(damage, target2, source, move) {
      if (move.isZ || source.volatiles["dynamax"] && source.volatiles["dynamax"].isActive || source.volatiles["terastallized"] || source.forme && source.forme.startsWith("Mega")) {
        this.damage(source.baseMaxhp / 8, source, target2);
      }
    }
  },
  aguavberry: {
    inherit: true,
    onEat(pokemon2) {
      this.heal(pokemon2.baseMaxhp / 2);
      if (pokemon2.getNature().minus === "spd") {
        pokemon2.addVolatile("confusion");
      }
    },
    shortDesc: "Restores 1/2 max HP at 1/4 max HP or less; confuses if -SpD Nature. Single use."
  },
  figyberry: {
    inherit: true,
    onEat(pokemon2) {
      this.heal(pokemon2.baseMaxhp / 2);
      if (pokemon2.getNature().minus === "atk") {
        pokemon2.addVolatile("confusion");
      }
    },
    shortDesc: "Restores 1/2 max HP at 1/4 max HP or less; confuses if -Atk Nature. Single use."
  },
  iapapaberry: {
    inherit: true,
    onEat(pokemon2) {
      this.heal(pokemon2.baseMaxhp / 2);
      if (pokemon2.getNature().minus === "def") {
        pokemon2.addVolatile("confusion");
      }
    },
    shortDesc: "Restores 1/2 max HP at 1/4 max HP or less; confuses if -Def Nature. Single use."
  },
  magoberry: {
    inherit: true,
    onEat(pokemon2) {
      this.heal(pokemon2.baseMaxhp / 2);
      if (pokemon2.getNature().minus === "spe") {
        pokemon2.addVolatile("confusion");
      }
    },
    shortDesc: "Restores 1/2 max HP at 1/4 max HP or less; confuses if -Spe Nature. Single use."
  },
  wikiberry: {
    inherit: true,
    isNonstandard: null,
    onEat(pokemon2) {
      this.heal(pokemon2.baseMaxhp / 2);
      if (pokemon2.getNature().minus === "spa") {
        pokemon2.addVolatile("confusion");
      }
    },
    shortDesc: "Restores 1/2 max HP at 1/4 max HP or less; confuses if -SpA Nature. Single use."
  },
  bugmemory: {
    inherit: true,
    shortDesc: "Bug-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Bug type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Bug")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Bug") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  dragonmemory: {
    inherit: true,
    shortDesc: "Dragon-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Dragon type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Dragon")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Dragon") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  electricmemory: {
    inherit: true,
    shortDesc: "Electric-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Electric type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Electric")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Electric") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  fightingmemory: {
    inherit: true,
    shortDesc: "Fighting-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Fighting type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Figthing")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Fighting") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  firememory: {
    inherit: true,
    shortDesc: "Fire-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Fire type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Fire")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Fire") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  flyingmemory: {
    inherit: true,
    shortDesc: "Flying-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Flying type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Flying")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Flying") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  ghostmemory: {
    inherit: true,
    shortDesc: "Ghost-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Ghost type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Ghost")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Ghost") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  grassmemory: {
    inherit: true,
    shortDesc: "Grass-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Grass type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Grass")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Grass") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  groundmemory: {
    inherit: true,
    shortDesc: "Ground-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Ground type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Ground")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Ground") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  icememory: {
    inherit: true,
    shortDesc: "Ice-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Ice type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Ice")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Ice") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  poisonmemory: {
    inherit: true,
    shortDesc: "Poison-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Poison type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Poison")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Poison") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  psychicmemory: {
    inherit: true,
    shortDesc: "Psychic-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Psychic type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Psychic")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Psychic") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  rockmemory: {
    inherit: true,
    shortDesc: "Rock-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Rock type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Rock")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Rock") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  steelmemory: {
    inherit: true,
    shortDesc: "Steel-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Steel type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Steel")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Steel") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  watermemory: {
    inherit: true,
    shortDesc: "Water-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Water type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Water")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Water") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  fairymemory: {
    inherit: true,
    shortDesc: "Fairy-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Fairy type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Fairy")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Fairy") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  darkmemory: {
    inherit: true,
    shortDesc: "Dark-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Dark type.",
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Dark")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Dark") {
        return this.chainModify([4505, 4096]);
      }
    }
  },
  normalmemory: {
    name: "Normal Memory",
    onMemory: "Normal",
    shortDesc: "Normal-type attacks: 1.1x power, 0.67x damage taken. Multi-Attack is Normal type.",
    onTakeItem(item, pokemon2, source) {
      if (source && source.baseSpecies.num === 773 || pokemon2.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Normal")
        return this.chainModify(0.67);
    },
    onBasePower(basePower, user, target2, move) {
      if (move.type === "Normal") {
        return this.chainModify([4505, 4096]);
      }
    },
    forcedForme: "Silvally",
    gen: 9,
    num: -2
  },
  strangecigar: {
    name: "Strange Cigar",
    shortDesc: "Disable the user's ability. Holder's contact moves disable the opponent's ability.",
    fling: {
      basePower: 30
    },
    onStart(pokemon2) {
      if (pokemon2.getAbility().flags["cantsuppress"])
        return;
      pokemon2.addVolatile("gastroacid");
    },
    onSourceDamagingHit(damage, target2, source, move) {
      if (target2.getAbility().flags["cantsuppress"])
        return;
      if (this.checkMoveMakesContact(move, target2, source)) {
        target2.addVolatile("gastroacid");
      }
    },
    onAfterSubDamage(damage, target2, source, move) {
      if (target2.getAbility().flags["cantsuppress"])
        return;
      if (this.checkMoveMakesContact(move, target2, source)) {
        target2.addVolatile("gastroacid");
      }
    },
    num: -3,
    gen: 9,
    rating: 3
  },
  iceaxe: {
    name: "Ice Axe",
    shortDesc: "The holder's Ice moves are guaranteed to critically hit while Snow is active.",
    onModifyMove(move) {
      if (this.field.isWeather("snow") && move.type === "Ice") {
        move.willCrit = true;
      }
    },
    num: -4,
    gen: 9,
    rating: 3
  },
  honey: {
    name: "Honey",
    fling: {
      basePower: 30
    },
    num: -5,
    gen: 9,
    rating: 3,
    shortDesc: "Restores 1/3 max HP when at 1/2 max HP or less once, -1 Spe vs. Knock Off.",
    onUpdate(pokemon2) {
      if (pokemon2.hp <= pokemon2.maxhp / 3) {
        if (this.runEvent("TryHeal", pokemon2, null, this.effect, pokemon2.baseMaxhp / 2) && pokemon2.useItem()) {
          this.heal(pokemon2.baseMaxhp / 3);
        }
      }
    },
    onTakeItem(item, pokemon2, source) {
      if (!this.activeMove)
        throw new Error("Battle.activeMove is null");
      if (!pokemon2.hp)
        return;
      if (source && source !== pokemon2 || this.activeMove.id === "knockoff" || this.activeMove.id === "thief" || this.activeMove.id === "switcheroo" || this.activeMove.id === "trick") {
        if (!this.boost({ spe: -1 }, source)) {
          this.add("-activate", pokemon2, "item: Honey");
        }
        return false;
      }
      if (source.hasAbility("honeygather")) {
        return false;
      }
    }
  },
  eviolite: {
    inherit: true,
    onModifySpAPriority: 2,
    onModifySpA(spa, pokemon2) {
      if (pokemon2.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    num: 538,
    gen: 5,
    rating: 3,
    shortDesc: "If holder's species can evolve, its Def, Sp. Atk and Sp. Def is 1.5x."
  },
  trainingwheels: {
    name: "Training Wheels",
    spritenum: 130,
    fling: {
      basePower: 40
    },
    onModifyAtkPriority: 2,
    onModifyAtk(atk, pokemon2) {
      if (pokemon2.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    onModifySpePriority: 2,
    onModifySpe(spe, pokemon2) {
      if (pokemon2.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    num: -6,
    gen: 9,
    rating: 3,
    shortDesc: "If holder's species can evolve, its Atk and Speed is 1.5x."
  },
  palettecleanser: {
    name: "Palette Cleanser",
    spritenum: 717,
    fling: {
      basePower: 10,
      effect(pokemon2) {
        let activate = false;
        const boosts = {};
        let i;
        for (i in pokemon2.boosts) {
          if (pokemon2.boosts[i] != 0) {
            activate = true;
            boosts[i] = 0;
          }
        }
        if (activate) {
          pokemon2.setBoost(boosts);
          this.add("-clearboost", pokemon2, "[silent]");
        }
      }
    },
    onUpdate(pokemon2) {
      let activate = false;
      const boosts = {};
      let i;
      for (i in pokemon2.boosts) {
        if (pokemon2.boosts[i] != 0) {
          activate = true;
          boosts[i] = 0;
        }
      }
      if (activate) {
        pokemon2.setBoost(boosts);
        this.add("-clearboost", pokemon2, "[silent]");
      }
    },
    num: -6,
    gen: 9,
    rating: 3,
    shortDesc: "If the user has a stat dropped or raised, remove all stat changes for itself."
  },
  mewniumz: {
    inherit: true,
    zMoveFrom: "Expanding Force",
    isNonstandard: null,
    onModifySpAPriority: 5,
    onModifySpA(spa, attacker, defender, move) {
      if (this.field.isTerrain("psychicterrain")) {
        this.debug("Mewnium Z boost");
        return this.chainModify([5325, 4096]);
      }
    },
    shortDesc: "If Mew: Expanding Force becomes Genesis Supernova. 1.3x boost in Psychic Terrain."
  },
  specialteraorb: {
    name: "Special Tera Orb",
    onStart(pokemon2) {
      if (pokemon2.isActive && (pokemon2.baseSpecies.name === "Terapagos" || pokemon2.baseSpecies.name === "Terapagos-Terastal")) {
        if (pokemon2.species.id !== "terapagosstellar") {
          pokemon2.formeChange("Terapagos-Stellar");
          pokemon2.baseMaxhp = Math.floor(Math.floor(
            2 * pokemon2.species.baseStats["hp"] + pokemon2.set.ivs["hp"] + Math.floor(pokemon2.set.evs["hp"] / 4) + 100
          ) * pokemon2.level / 100 + 10);
          const newMaxHP = pokemon2.volatiles["dynamax"] ? 2 * pokemon2.baseMaxhp : pokemon2.baseMaxhp;
          pokemon2.hp = newMaxHP - (pokemon2.maxhp - pokemon2.hp);
          pokemon2.maxhp = newMaxHP;
          this.add("-heal", pokemon2, pokemon2.getHealth, "[silent]");
        }
      }
    },
    onTakeItem(item, source) {
      if (source.baseSpecies.baseSpecies === "Terapagos" || source.baseSpecies.baseSpecies === "Terapagos-Terastal" || source.baseSpecies.baseSpecies === "Terapagos-Stellar")
        return false;
      return true;
    },
    gen: 9,
    itemUser: ["Terapagos"],
    desc: "If holder is a Terapagos, it becomes Stellar form. It is Stellar type.",
    num: -7
  },
  safetygoggles: {
    inherit: true,
    onTakeItem: false,
    onSourceModifyAccuracyPriority: -2,
    onSourceModifyAccuracy(accuracy) {
      if (typeof accuracy === "number") {
        return this.chainModify(1.2);
      }
    },
    rating: 3,
    shortDesc: "Powder and Sandstorm immunity. The accuracy of attacks by the holder is 1.2x."
  },
  speedingticket: {
    name: "Speeding Ticket",
    spritenum: 130,
    fling: {
      basePower: 40
    },
    onFoeTryMove(target2, source, move) {
      const targetAllExceptions = ["perishsong", "flowershield", "rototiller"];
      if (move.target === "foeSide" || move.target === "all" && !targetAllExceptions.includes(move.id)) {
        return;
      }
      const dazzlingHolder = this.effectState.target;
      if ((source.isAlly(dazzlingHolder) || move.target === "all") && move.priority > 0.1) {
        this.attrLastMove("[still]");
        this.add("cant", dazzlingHolder, "item: Speeding Ticket", move, "[of] " + source);
        target2.switchFlag = true;
        if (source.useItem()) {
          source.switchFlag = false;
        } else {
          target2.switchFlag = false;
        }
        return false;
      }
    },
    num: -8,
    gen: 9,
    rating: 3,
    shortDesc: "Priority immunity; attacker is forced to switch out if triggered. Single-use."
  },
  scoutingvisor: {
    name: "Scouting Visor",
    fling: {
      basePower: 10
    },
    onModifyDamage(damage, source, target2, move) {
      if (move && target2.getMoveHitData(move).typeMod > 0) {
        if (source.hasType("Psychic")) {
          return this.chainModify([5324, 4096]);
        } else {
          return this.chainModify([2731, 4096]);
        }
      }
    },
    num: -9,
    gen: 9,
    rating: 3,
    shortDesc: "If Psychic-type, super effective moves deal 1.3x damage. If not: 0.67x damage."
  },
  utilityumbrella: {
    inherit: true,
    desc: "The holder ignores rain- and sun-based effects. Damage and accuracy calculations from attacks used by the holder are affected by rain and sun, but not attacks used against the holder. The holder takes 3/4 damage and ignores secondary effects while in weathers or terrains.",
    shortDesc: "Ignores weather; 3/4 damage and ignore secondary effects under weather/terrain.",
    rating: 3,
    onSourceModifyDamage(damage, source, target2, move) {
      if (this.field.isWeather() || this.field.isTerrain()) {
        this.debug("Utility Umbrella neutralize");
        return this.chainModify(0.75);
      }
    },
    onModifySecondaries(secondaries) {
      if (this.field.isWeather() || this.field.isTerrain()) {
        this.debug("Utility Umbrella prevent secondary");
        return secondaries.filter((effect) => !!(effect.self || effect.dustproof));
      }
    }
  },
  airballoon: {
    inherit: true,
    onStart(target2) {
      if (!target2.ignoringItem() && !this.field.getPseudoWeather("gravity")) {
        this.add("-item", target2, "Air Balloon");
      }
    },
    // airborneness implemented in sim/pokemon.js:Pokemon#isGrounded
    onDamagingHit(damage, target2, source, move) {
      this.add("-enditem", target2, "Air Balloon");
      this.boost({ spa: 1 });
      target2.item = "";
      target2.itemState = { id: "", target: target2 };
      this.runEvent("AfterUseItem", target2, null, null, this.dex.items.get("airballoon"));
    },
    onAfterSubDamage(damage, target2, source, effect) {
      this.debug("effect: " + effect.id);
      if (effect.effectType === "Move") {
        this.add("-enditem", target2, "Air Balloon");
        this.boost({ spa: 1 });
        target2.item = "";
        target2.itemState = { id: "", target: target2 };
        this.runEvent("AfterUseItem", target2, null, null, this.dex.items.get("airballoon"));
      }
    },
    rating: 3,
    shortDesc: "Holder is immune to Ground-type attacks. Once popped: +1 SpA."
  },
  absorbbulb: {
    inherit: true,
    onStart(target2) {
      if (!target2.ignoringItem()) {
        this.add("-item", target2, "Absorb Bulb");
      }
    },
    onTryHit(target2, source, move) {
      if (move.type === "Water") {
        this.add("-immune", target2, "[from] item: Absorb Bulb");
        return null;
      }
    },
    onDamagingHit(damage, target2, source, move) {
      this.add("-enditem", target2, "Absorb Bulb");
      this.boost({ spa: 1 });
      target2.item = "";
      target2.itemState = { id: "", target: target2 };
      this.runEvent("AfterUseItem", target2, null, null, this.dex.items.get("absorbbulb"));
    },
    onAfterSubDamage(damage, target2, source, effect) {
      this.debug("effect: " + effect.id);
      if (effect.effectType === "Move") {
        this.add("-enditem", target2, "Absorb Bulb");
        this.boost({ atk: 1 });
        target2.item = "";
        target2.itemState = { id: "", target: target2 };
        this.runEvent("AfterUseItem", target2, null, null, this.dex.items.get("absorbbulb"));
      }
    },
    //		onTryHit(target, source, move) {
    //			if (move.type === 'Water') {
    //				target.useItem();
    //				return null;
    //			}
    //		},
    rating: 3,
    shortDesc: "Holder is immune to Water-type attacks. Once popped: +1 SpA."
  },
  cellbattery: {
    inherit: true,
    onStart(target2) {
      if (!target2.ignoringItem()) {
        this.add("-item", target2, "Cell Battery");
      }
    },
    onTryHit(target2, source, move) {
      if (move.type === "Electric") {
        this.add("-immune", target2, "[from] item: Cell Battery");
        return null;
      }
    },
    onDamagingHit(damage, target2, source, move) {
      this.add("-enditem", target2, "Cell Battery");
      this.boost({ atk: 1 });
      target2.item = "";
      target2.itemState = { id: "", target: target2 };
      this.runEvent("AfterUseItem", target2, null, null, this.dex.items.get("cellbattery"));
    },
    onAfterSubDamage(damage, target2, source, effect) {
      this.debug("effect: " + effect.id);
      if (effect.effectType === "Move") {
        this.add("-enditem", target2, "Cell Battery");
        this.boost({ atk: 1 });
        target2.item = "";
        target2.itemState = { id: "", target: target2 };
        this.runEvent("AfterUseItem", target2, null, null, this.dex.items.get("cellbattery"));
      }
    },
    //		onTryHit(target, source, move) {
    //			if (move.type === 'Electric') {
    //				target.useItem();
    //				return null;
    //			}
    //		},
    rating: 3,
    shortDesc: "Holder is immune to Electric-type attacks. Once broken: +1 Atk."
  },
  snowball: {
    inherit: true,
    onStart(target2) {
      if (!target2.ignoringItem()) {
        this.add("-item", target2, "Snowball");
      }
    },
    onTryHit(target2, source, move) {
      if (move.type === "Ice") {
        this.add("-immune", target2, "[from] item: Snowball");
        return null;
      }
    },
    onDamagingHit(damage, target2, source, move) {
      this.add("-enditem", target2, "Snowball");
      this.boost({ atk: 1 });
      target2.item = "";
      target2.itemState = { id: "", target: target2 };
      this.runEvent("AfterUseItem", target2, null, null, this.dex.items.get("snowball"));
    },
    onAfterSubDamage(damage, target2, source, effect) {
      this.debug("effect: " + effect.id);
      if (effect.effectType === "Move") {
        this.add("-enditem", target2, "Snowball");
        this.boost({ atk: 1 });
        target2.item = "";
        target2.itemState = { id: "", target: target2 };
        this.runEvent("AfterUseItem", target2, null, null, this.dex.items.get("snowball"));
      }
    },
    //		onTryHit(target, source, move) {
    //			if (move.type === 'Ice') {
    //				target.useItem();
    //				return null;
    //			}
    //		},
    rating: 3,
    shortDesc: "Holder is immune to Ice-type attacks. Once broken: +1 Atk."
  },
  indecisiveorb: {
    name: "Indecisive Orb",
    fling: {
      basePower: 30
    },
    onDisableMove: function(pokemon2) {
      if (pokemon2.lastMove && pokemon2.lastMove.id !== "struggle")
        pokemon2.disableMove(pokemon2.lastMove.id);
    },
    onModifyDamage(damage, source, target2, move) {
      return this.chainModify(1.3);
    },
    desc: "Holder's move have 1.3x BP, but it can't use the same move twice in a row.",
    num: -10,
    gen: 9,
    rating: 3
  },
  shedshell: {
    inherit: true,
    onTryHit(target2, source, move) {
      if (target2 !== source && this.activeMove.id === "pursuit") {
        this.add("-immune", target2, "[from] item: Shed Shell");
        return null;
      }
    },
    shortDesc: "Holder may switch out when trapped, even by Ingrain or Pursuit.",
    rating: 3
  },
  // Slate 4
  machobrace: {
    inherit: true,
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon2) {
      if (pokemon2.hasType("Fighting") || pokemon2.hasAbility("Klutz")) {
        return this.chainModify(1.2);
      }
    },
    onModifyDefPriority: 5,
    onModifyDef(def, pokemon2) {
      if (pokemon2.hasType("Fighting") || pokemon2.hasAbility("Klutz")) {
        return this.chainModify(1.2);
      }
    },
    onModifySpe(spe, pokemon2) {
      if (!pokemon2.hasType("Fighting") && !pokemon2.hasAbility("Klutz")) {
        return this.chainModify(0.5);
      }
    },
    onModifyMovePriority: -1,
    onModifyMove(move) {
      if (move.id === "fling") {
        move.basePower *= 1.5;
      }
    },
    shortDesc: "If Fighting-type or Klutz: 1.2x Atk/Def. If not: 1/2 Spe. 1.5x Fling BP.",
    rating: 3
  },
  cursedbranch: {
    num: -11,
    name: "Cursed Branch",
    fling: {
      basePower: 30
    },
    shortDesc: "On switch in, adds Grass type to holder. No effect if holder is Grass type.",
    onStart(pokemon2) {
      if (pokemon2.addType("Grass")) {
        this.add("-start", pokemon2, "typeadd", "Grass", "[from] item: Cursed Branch");
      }
    },
    rating: 3
  },
  knightsarmor: {
    num: -12,
    name: "Knight's Armor",
    fling: {
      basePower: 200,
      self: {
        volatileStatus: "mustrecharge"
      }
    },
    onTakeItem: false,
    // airborneness negation implemented in scripts.ts
    shortDesc: "Holder is grounded and takes 0.75x damage if hazards are up on holder's side.",
    rating: 3,
    onSourceModifyDamage(damage, source, target2, move) {
      if (target2.side.getSideCondition("stealthrock") || target2.side.getSideCondition("spikes") || target2.side.getSideCondition("toxicspikes") || target2.side.getSideCondition("stickyweb") || target2.side.getSideCondition("gmaxsteelsurge")) {
        return this.chainModify(0.75);
      }
    }
  },
  laggingtail: {
    inherit: true,
    shortDesc: "Moves last in priority bracket, but attacks have their power boosted by 30%.",
    rating: 3,
    onModifyDamage(damage, source, target2, move) {
      return this.chainModify([5324, 4096]);
    }
  },
  // Z-move section for Silvally
  buginiumz: {
    inherit: true,
    onMemory: "Bug"
  },
  darkiniumz: {
    inherit: true,
    onMemory: "Dark"
  },
  dragoniumz: {
    inherit: true,
    onMemory: "Dragon"
  },
  electriumz: {
    inherit: true,
    onMemory: "Electric"
  },
  fairiumz: {
    inherit: true,
    onMemory: "Fairy"
  },
  fightiniumz: {
    inherit: true,
    onMemory: "Fighting"
  },
  firiumz: {
    inherit: true,
    onMemory: "Fire"
  },
  ghostiumz: {
    inherit: true,
    onMemory: "Ghost"
  },
  grassiumz: {
    inherit: true,
    onMemory: "Grass"
  },
  groundiumz: {
    inherit: true,
    onMemory: "Ground"
  },
  iciumz: {
    inherit: true,
    onMemory: "Ice"
  },
  poisoniumz: {
    inherit: true,
    onMemory: "Poison"
  },
  psychiumz: {
    inherit: true,
    onMemory: "Psychic"
  },
  rockiumz: {
    inherit: true,
    onMemory: "Rock"
  },
  steeliumz: {
    inherit: true,
    onMemory: "Steel"
  },
  wateriumz: {
    inherit: true,
    onMemory: "Water"
  },
  //slate 5 
  puppetstrings: {
    fling: {
      basePower: 10
    },
    onPrepareHit(source, target2, move) {
      if (move.category === "Status" || move.multihit || move.flags["noparentalbond"] || move.flags["charge"] || move.flags["futuremove"] || move.spreadHit || move.isZ || move.isMax || !source.volatiles["substitute"])
        return;
      move.multihit = 2;
      move.multihitType = "parentalbond";
    },
    // Damage modifier implemented in BattleActions#modifyDamage()
    onSourceModifySecondaries(secondaries, target2, source, move) {
      if (move.multihitType === "parentalbond" && move.id === "secretpower" && move.hit < 2 && source.volatiles["substitute"]) {
        return secondaries.filter((effect) => effect.volatileStatus === "flinch");
      }
    },
    desc: "If this Pokemon has a Substitute, its damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect Doom Desire, Dragon Darts, Dynamax Cannon, Endeavor, Explosion, Final Gambit, Fling, Future Sight, Ice Ball, Rollout, Self-Destruct, any multi-hit move, any move that has multiple targets, or any two-turn move.",
    shortDesc: "Damaging moves hit twice if behind a Substitute. 2nd hit = 1/4 damage.",
    flags: {},
    name: "Puppet Strings",
    num: -14,
    rating: 3
  },
  pikaniumz: {
    inherit: true,
    shortDesc: "If Pikachu: 2x Atk, SpA, Def, SpD. Changes type and ability.",
    onStart(pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies !== "Pikachu")
        return;
      let newAbility;
      let newType;
      switch (pokemon2.baseSpecies.forme) {
        case "Original":
          newAbility = "Run It Back";
          newType = "Fairy";
          break;
        case "Hoenn":
          newAbility = "Technician";
          newType = "Water";
          break;
        case "Sinnoh":
          newAbility = "No Guard";
          newType = "Steel";
          break;
        case "Unova":
          newAbility = "Intimidate";
          newType = "Fighting";
          break;
        case "Kalos":
          newAbility = "Mold Breaker";
          newType = "Dark";
          break;
        case "Alola":
          newAbility = "Psychic Surge";
          newType = "Psychic";
          break;
        case "World":
          newAbility = "Aerilate";
          newType = "Flying";
          break;
        default:
          newAbility = "Tough Claws";
          newType = "Normal";
          break;
      }
      const oldAbility = pokemon2.setAbility(newAbility, pokemon2, newAbility, true);
      if (pokemon2.baseSpecies.baseSpecies === "Pikachu" && pokemon2.addType(newType)) {
        this.add("-start", pokemon2, "typeadd", newType, "[from] item: Pikanium Z");
      }
    },
    onModifyTypePriority: -1,
    onModifyType(move, pokemon2) {
      const noModifyType = [
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      if (pokemon2.baseSpecies.baseSpecies === "Pikachu" && pokemon2.baseSpecies.forme === "Alola" && move.type === "Normal" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== "Status") && !(move.name === "Tera Blast" && pokemon2.terastallized)) {
        move.type = "Psychic";
        move.typeChangerBoosted = this.effect;
      }
    },
    onModifyAtkPriority: 1,
    onModifyAtk(atk, pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies === "Pikachu") {
        return this.chainModify(2);
      }
    },
    onModifySpAPriority: 1,
    onModifySpA(spa, pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies === "Pikachu") {
        return this.chainModify(2);
      }
    },
    onModifyDefPriority: 1,
    onModifyDef(def, pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies === "Pikachu") {
        return this.chainModify(2);
      }
    },
    onModifySpDPriority: 1,
    onModifySpD(spd, pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies === "Pikachu") {
        return this.chainModify(2);
      }
    }
  },
  pikashuniumz: {
    inherit: true,
    shortDesc: "If Pikachu: 2x Atk, SpA, Def, SpD. Changes type and ability.",
    onStart(pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies !== "Pikachu")
        return;
      let newAbility;
      let newType;
      switch (pokemon2.baseSpecies.forme) {
        case "Original":
          newAbility = "Run It Back";
          newType = "Fairy";
          break;
        case "Hoenn":
          newAbility = "Technician";
          newType = "Water";
          break;
        case "Sinnoh":
          newAbility = "No Guard";
          newType = "Steel";
          break;
        case "Unova":
          newAbility = "Intimidate";
          newType = "Fighting";
          break;
        case "Kalos":
          newAbility = "Mold Breaker";
          newType = "Dark";
          break;
        case "Alola":
          newAbility = "Psychic Surge";
          newType = "Psychic";
          break;
        case "World":
          newAbility = "Aerilate";
          newType = "Flying";
          break;
        default:
          newAbility = "Tough Claws";
          newType = "Normal";
          break;
      }
      const oldAbility = pokemon2.setAbility(newAbility, pokemon2, newAbility, true);
      if (pokemon2.baseSpecies.baseSpecies === "Pikachu" && pokemon2.addType(newType)) {
        this.add("-start", pokemon2, "typeadd", newType, "[from] item: Pikanium Z");
      }
    },
    onModifyTypePriority: -1,
    onModifyType(move, pokemon2) {
      const noModifyType = [
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      if (pokemon2.baseSpecies.forme === "Pikachu-Alola" && move.type === "Normal" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== "Status") && !(move.name === "Tera Blast" && pokemon2.terastallized)) {
        move.type = "Psychic";
        move.typeChangerBoosted = this.effect;
      }
    },
    onModifyAtkPriority: 1,
    onModifyAtk(atk, pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies === "Pikachu") {
        return this.chainModify(2);
      }
    },
    onModifySpAPriority: 1,
    onModifySpA(spa, pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies === "Pikachu") {
        return this.chainModify(2);
      }
    },
    onModifyDefPriority: 1,
    onModifyDef(def, pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies === "Pikachu") {
        return this.chainModify(2);
      }
    },
    onModifySpDPriority: 1,
    onModifySpD(spd, pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies === "Pikachu") {
        return this.chainModify(2);
      }
    }
  },
  friedrice: {
    name: "Fried Rice",
    fling: {
      basePower: 30
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon2, target2, move) {
      if (move.id === "waterpulse")
        return this.chainModify([4915, 4096]);
    },
    basePowerCallback(pokemon2, target2, move) {
      if (move.id === "waterpulse" && pokemon2.baseSpecies.baseSpecies === "Clawitzer") {
        return 80;
      }
      return move.basePower;
    },
    onStart(pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies === "Clawitzer" && pokemon2.addType("Dragon")) {
        this.add("-start", pokemon2, "typeadd", "Dragon", "[from] item: Fried Rice");
      }
    },
    onModifySpePriority: 5,
    onModifySpe(spe, pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies === "Clawitzer")
        return this.chainModify(1.5);
    },
    shortDesc: "Pulse damage is x1.2. If Clawitzer: becomes Water/Dragon, Speed is 1.5x, and Water Pulse is 80 BP.",
    num: -14,
    onTakeItem(item, source) {
      if (source.baseSpecies.baseSpecies === "Clawitzer")
        return false;
      return true;
    },
    rating: 3
  },
  ringtarget: {
    inherit: true,
    fling: {
      basePower: 60,
      secondary: {
        chance: 100,
        evasion: -1
      }
    },
    onAnyAccuracy(accuracy, target2, source, move) {
      if (move && move.category !== "Status") {
        return true;
      }
      return accuracy;
    },
    onModifyMove(move, pokemon2) {
      if (move.secondaries) {
        delete move.secondaries;
        delete move.self;
        if (move.id === "clangoroussoulblaze")
          delete move.selfBoost;
        move.hasSheerForce = true;
      }
    },
    shortDesc: "User's physical and special moves can't miss, but their secondary effects are removed.",
    rating: 3
  },
  // Slate 6
  parallelmegaorb: {
    name: "Parallel Mega Orb",
    onTakeItem: false,
    onBeforeMega(pokemon2) {
      pokemon2.addVolatile("gastroacid");
    },
    onAfterMega(pokemon2) {
      let newAbility = pokemon2.set.ability;
      const oldAbility = pokemon2.setAbility(newAbility, pokemon2, newAbility, true);
      pokemon2.removeVolatile("gastroacid");
    },
    onPreStart(pokemon2) {
      pokemon2.addVolatile("gastroacid");
    },
    onStart(pokemon2) {
      let newAbility = pokemon2.set.ability;
      const oldAbility = pokemon2.setAbility(newAbility, pokemon2, newAbility, true);
      pokemon2.removeVolatile("gastroacid");
    },
    shortDesc: "Mega evolves the holder. The holder keeps the ability it had prior to Mega Evolving.",
    num: -15,
    gen: 9,
    rating: 3
  },
  legendplate: {
    name: "Legend Plate",
    spritenum: 658,
    onTakeItem: false,
    onStart(pokemon2) {
      const type = pokemon2.teraType;
      this.add("-item", pokemon2, "Legend Plate");
      this.add("-anim", pokemon2, "Cosmic Power", pokemon2);
      if (type && type !== "???") {
        if (!pokemon2.setType(type))
          return;
        this.add("-start", pokemon2, "typechange", type, "[from] item: Legend Plate");
      }
      this.add("-message", `${pokemon2.name}'s Legend Plate changed its type!`);
    },
    onTryHit(pokemon2, target2, move) {
      if (move.id === "soak" || move.id === "magicpowder") {
        this.add("-immune", pokemon2, "[from] item: Legend Plate");
        return null;
      }
    },
    onModifyBasePowerPriority: 22,
    onModifyBasePower(basePower, attacker, defender, move) {
      if (move.stab && attacker.teraType === "Stellar" || move.type === attacker.teraType) {
        return this.chainModify(1.2);
      }
    },
    num: -16,
    gen: 9,
    shortDesc: "Type changes to Tera Type on switch-in. New STAB are 1.2x, existing STAB if Stellar.",
    rating: 3
  },
  baseball: {
    name: "Baseball",
    fling: {
      basePower: 50,
      secondary: {
        chance: 100,
        volatileStatus: "flinch"
      }
    },
    onBasePower(basePower, source, target2, move) {
      if (move.flags["bullet"]) {
        return this.chainModify(1.3);
      }
    },
    onModifyMove(move) {
      if (move.flags["bullet"]) {
        move.category = "Physical";
      }
    },
    num: -17,
    shortDesc: "Holder's ball/bomb moves have 1.3x power, and are physical.",
    gen: 9,
    rating: 3
  },
  gooditem: {
    name: "Good Item",
    shortDesc: "Turns into a random item from the Popular Items section.",
    onStart(pokemon2) {
      const itemList = ["leftovers", "sitrusberry", "lumberry", "figyberry", "starfberry", "choiceband", "choicespecs", "choicescarf", "rockyhelmet", "heavydutyboots", "assaultvest", "cursedbranch", "lifeorb", "expertbelt"];
      const itemIndex = this.random(itemList.length);
      const itemMade = itemList[itemIndex];
      if (pokemon2.hp) {
        pokemon2.setItem(itemMade);
        this.add("-item", pokemon2, pokemon2.getItem(), "[from] item: Good Item");
      }
    },
    num: -18
  },
  neutralizer: {
    fling: {
      basePower: 20
    },
    onEffectiveness(typeMod, target2, type, move) {
      if (!target2)
        return;
      if (!target2.runImmunity(move.type))
        return;
      if (this.dex.getEffectiveness(move, target2) === -1)
        return;
      return 0;
    },
    // Implemented in scripts.js
    name: "Neutralizer",
    shortDesc: "User cannot be hit super effectively, and cannot hit for super effective damage.",
    num: -19,
    rating: 3
  },
  dreamcatcher: {
    // WIP, doesn't work currently
    name: "Dream Catcher",
    fling: {
      basePower: 60
    },
    onOverrideAction(pokemon2, target2, move) {
      if (pokemon2.status === "slp") {
        this.add("-activate", pokemon2, "item: Dream Catcher");
        return this.dex.getActiveMove("sleeptalk");
      }
    },
    num: -20,
    gen: 9,
    shortDesc: "(Not working) If the holder is asleep, Sleep Talk is used before an attack is selected by the holder. Does not work with Circle Throw, Dragon Tail, Roar, or Whirlwind."
  },
  greniniumz: {
    name: "Greninium Z",
    spritenum: 652,
    onTakeItem: false,
    zMove: "Bond Slicing Shuriken",
    zMoveFrom: "Water Shuriken",
    itemUser: ["Greninja-Bond"],
    onAfterMove(pokemon2, target2, move) {
      if (move.id === "bondslicingshuriken")
        pokemon2.formeChange("Greninja-Ash", "[from] item: Greninium Z", true);
    },
    num: -21,
    gen: 9,
    shortDesc: "Greninja with Water Shuriken; can use Bond Slicing Shuriken. Turns into Greninja-Ash."
  },
  // Slate 7
  yellowcard: {
    name: "Yellow Card",
    spritenum: 387,
    fling: {
      basePower: 88
    },
    onStart(pokemon2) {
      pokemon2.addVolatile("yellowcard");
    },
    onAfterMoveSecondary(target2, source, move) {
      if (source && source !== target2 && source.hp && target2.hp && target2.hp <= target2.maxhp / 2 && move && move.category !== "Status") {
        if (target2.volatiles["yellowcard"]) {
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("yellowcard");
          this.boost({ atk: -1, def: -1 }, source, target2);
        }
      }
    },
    num: -22,
    gen: 9,
    shortDesc: "If holder is below 1/2 max HP, opponent: -1 Atk and Def. Once per switch-in.",
    rating: 3
  },
  babiriberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("babiriberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Steel" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["babiriberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("babiriberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Steel-type attack. Once per switch-in."
  },
  chartiberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("chartiberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Rock" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["chartiberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("chartiberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Rock-type attack. Once per switch-in."
  },
  chilanberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("chilanberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Normal" && (!target2.volatiles["substitute"] || move.flags["bypasssub"] || move.infiltrates && this.gen >= 6)) {
        if (target2.volatiles["chilanberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("chilanberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a Normal-type attack. Once per switch-in."
  },
  chopleberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("chopleberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Fighting" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["chopleberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("chopleberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Fighting-type attack. Once per switch-in."
  },
  colburberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("colburberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Dark" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["colburberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("colburberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Dark-type attack. Once per switch-in."
  },
  habanberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("habanberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Dragon" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["habanberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("habanberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Dragon-type attack. Once per switch-in."
  },
  kasibberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("kasibberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Ghost" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["kasibberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("kasibberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Ghost-type attack. Once per switch-in."
  },
  kebiaberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("kebiaberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Poison" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["kebiaberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("kebiaberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Poison-type attack. Once per switch-in."
  },
  occaberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("occaberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Fire" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["occaberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("occaberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Fire-type attack. Once per switch-in."
  },
  passhoberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("passhoberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Water" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["passhoberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("passhoberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Water-type attack. Once per switch-in."
  },
  payapaberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("payapaberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Psychic" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["payapaberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("payapaberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Psychic-type attack. Once per switch-in."
  },
  rindoberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("rindoberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Grass" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["rindoberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("rindoberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Grass-type attack. Once per switch-in."
  },
  roseliberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("roseliberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Fairy" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["roseliberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("roseliberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Fairy-type attack. Once per switch-in."
  },
  shucaberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("shucaberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Ground" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["shucaberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("shucaberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Ground-type attack. Once per switch-in."
  },
  tangaberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("tangaberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Bug" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["tangaberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("tangaberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Bug-type attack. Once per switch-in."
  },
  wacanberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("wacanberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Electric" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["wacanberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("wacanberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Electric-type attack. Once per switch-in."
  },
  yacheberry: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("yacheberry");
    },
    onSourceModifyDamage(damage, source, target2, move) {
      if (move.type === "Ice" && target2.getMoveHitData(move).typeMod > 0) {
        const hitSub = target2.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target2.volatiles["yacheberry"]) {
          this.debug("-50% reduction");
          this.add("-enditem", target2, this.effect, "[weaken]");
          target2.removeVolatile("yacheberry");
          return this.chainModify(0.5);
        }
      }
    },
    shortDesc: "Halves damage taken from a supereffective Ice-type attack. Once per switch-in."
  },
  metronome: {
    inherit: true,
    onStart(pokemon2) {
      pokemon2.addVolatile("metronome");
    },
    condition: {
      onStart(pokemon2) {
        this.effectState.lastMove = "";
        this.effectState.numConsecutive = 0;
      },
      onTryMovePriority: -2,
      onTryMove(pokemon2, target2, move) {
        if (!pokemon2.hasItem("metronome")) {
          pokemon2.removeVolatile("metronome");
          return;
        }
        if (move.callsMove)
          return;
        if (this.effectState.lastMove === move.id) {
          this.effectState.numConsecutive++;
        } else if (pokemon2.volatiles["twoturnmove"]) {
          if (this.effectState.lastMove !== move.id) {
            this.effectState.numConsecutive = 1;
          } else {
            this.effectState.numConsecutive++;
          }
        } else {
          this.effectState.numConsecutive = 0;
        }
        this.effectState.lastMove = move.id;
      },
      onModifyDamage(damage, source, target2, move) {
        const dmgMod = [4096, 4915, 5734, 6553, 7372, 8192];
        const numConsecutive = this.effectState.numConsecutive > 5 ? 5 : this.effectState.numConsecutive;
        this.debug(`Current Metronome boost: ${dmgMod[numConsecutive]}/4096`);
        return this.chainModify([dmgMod[numConsecutive], 4096]);
      }
    },
    shortDesc: "Consecutive moves (even if fail) power increases. Max 2x after 5 turns.",
    rating: 3
  },
  enginebreaker: {
    name: "Engine Breaker",
    fling: {
      basePower: 20
    },
    onStart(pokemon2) {
      pokemon2.addVolatile("enginebreaker");
    },
    onModifyMovePriority: -1,
    onModifyMove(move, pokemon2) {
      if (pokemon2.volatiles["enginebreaker"]) {
        move.ignoreAbility = true;
        pokemon2.removeVolatile("enginebreaker");
      }
    },
    num: -23,
    gen: 9,
    shortDesc: "Holder's moves ignore abilities once. Once per switch-in.",
    rating: 3
  },
  redlicorice: {
    name: "Red Licorice",
    fling: {
      basePower: 30
    },
    onStart(pokemon2) {
      this.add("-item", pokemon2, "Red Licorice");
      this.add("-message", `${pokemon2.name} is chewing on some good licorice!`);
    },
    onBasePowerPriority: 21,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["contact"]) {
        return this.chainModify([4915, 4096]);
      }
    },
    onModifyMove(move, pokemon2) {
      if (move.flags["contact"] && pokemon2.useItem()) {
        move.secondaries.push({
          chance: 100,
          onHit(target2, source, move2) {
            if (source.isActive)
              target2.addVolatile("trapped", source, move2, "trapper");
          }
        });
      }
    },
    num: -24,
    gen: 9,
    shortDesc: "Holder's contact moves have x1.2 power and trap the target. Single use.",
    rating: 3
  },
  pokerusvaccine: {
    name: "Pokerus Vaccine",
    fling: {
      basePower: 386
    },
    onTakeItem: false,
    onStart(pokemon2) {
      this.add("-item", pokemon2, "Pokerus Vaccine");
      pokemon2.addVolatile("pokerusvaccine");
    },
    volatileStatus: "pokerusvaccine",
    condition: {
      onSourceModifyAtkPriority: 6,
      onSourceModifyAtk(atk, attacker, defender, move) {
        if (move.type === "Poison") {
          this.debug("Thick Fat weaken");
          return this.chainModify(0.5);
        }
      },
      onSourceModifySpAPriority: 5,
      onSourceModifySpA(spa, attacker, defender, move) {
        if (move.type === "Poison") {
          this.debug("Thick Fat weaken");
          return this.chainModify(0.5);
        }
      },
      onUpdate(pokemon2) {
        if (pokemon2.status === "psn" || pokemon2.status === "tox") {
          this.add("-activate", pokemon2, "ability: Immunity");
          pokemon2.cureStatus();
        }
      },
      onSetStatus(status, target2, source, effect) {
        if (status.id !== "psn" && status.id !== "tox")
          return;
        if (effect?.status) {
          this.add("-immune", target2, "[from] ability: Immunity");
        }
        return false;
      }
    },
    num: -25,
    gen: 9,
    shortDesc: "Gains a status; 1/2 Poison-type damage and poison immunity. Once per switch-in.",
    rating: 3
  },
  frozenorb: {
    name: "Frozen Orb",
    spritenum: 515,
    fling: {
      basePower: 30,
      status: "frz"
    },
    onResidualOrder: 26,
    onResidualSubOrder: 2,
    onResidual(pokemon2) {
      pokemon2.trySetStatus("frz", pokemon2);
    },
    desc: "At the end of each turn, tries to freeze the holder.",
    shortDesc: "At the end of each turn, tries to freeze the holder.",
    num: -26,
    gen: 4
  },
  fossilizeddino: {
    name: "Fossilized Dino",
    fling: {
      basePower: 10
    },
    onTakeItem(item, source) {
      if (source.baseSpecies.baseSpecies === "Arctozolt" || source.baseSpecies.baseSpecies === "Arctovish")
        return false;
      return true;
    },
    onModifySpePriority: 5,
    onModifySpe(spe, pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies === "Arctozolt" || pokemon2.baseSpecies.baseSpecies === "Arctovish")
        return this.chainModify(1.5);
    },
    basePowerCallback(pokemon2, target2, move) {
      if ((target2.newlySwitched || this.queue.willMove(target2)) && pokemon2.baseSpecies.baseSpecies === "Arctozolt" || pokemon2.baseSpecies.baseSpecies === "Arctovish") {
        this.debug("Fossilized Drake damage boost");
        return move.basePower * 1.2;
      }
      this.debug("NOT boosted");
      return move.basePower;
    },
    itemUser: ["Arctozolt", "Arctovish"],
    num: -27,
    shortDesc: "If Arctozolt or Arctovish: Speed is 1.5x, moves do 1.2x damage if holder is first."
  },
  fossilizeddrake: {
    name: "Fossilized Drake",
    fling: {
      basePower: 10
    },
    onTakeItem(item, source) {
      if (source.baseSpecies.baseSpecies === "Dracozolt" || source.baseSpecies.baseSpecies === "Dracovish")
        return false;
      return true;
    },
    onModifySpePriority: 5,
    onModifySpe(spe, pokemon2) {
      if (pokemon2.baseSpecies.baseSpecies === "Dracozolt" || pokemon2.baseSpecies.baseSpecies === "Dracovish")
        return this.chainModify(1.5);
    },
    basePowerCallback(pokemon2, target2, move) {
      if ((target2.newlySwitched || this.queue.willMove(target2)) && pokemon2.baseSpecies.baseSpecies === "Dracozolt" || pokemon2.baseSpecies.baseSpecies === "Dracovish") {
        this.debug("Fossilized Drake damage boost");
        return move.basePower * 1.2;
      }
      this.debug("NOT boosted");
      return move.basePower;
    },
    itemUser: ["Dracozolt", "Dracovish"],
    num: -28,
    shortDesc: "If Dracozolt or Dracovish: Speed is 1.5x, moves do 1.2x damage if holder is first."
  },
  rulebook: {
    name: "Rulebook",
    fling: {
      basePower: 10
    },
    onStart(pokemon2) {
      for (const target2 of pokemon2.foes()) {
        if (target2.item) {
          this.add("-item", target2, target2.getItem().name, "[from] item: Rulebook", "[of] " + pokemon2);
          target2.addVolatile("embargo");
        }
      }
    },
    flags: {},
    desc: "On switch-in, reveals the held items of all opposing Pokemon and negates their effect for two turns.",
    shortDesc: "On switch-in, reveals held items of all foes; negates the effects for two turns.",
    num: -29,
    rating: 3
  },
  silverpowder: {
    inherit: true,
    onBasePower(basePower, user, target2, move) {
    },
    onDamage(damage, target2, source, effect) {
      if ((effect.id === "stealthrock" || effect.id === "spikes" || effect.id === "toxicspikes" || effect.id === "stickyweb" || effect.id === "gmaxsteelsurge") && source?.hasType("Bug")) {
        return false;
      }
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon2) {
      if (pokemon2.hasType("Bug")) {
        return this.chainModify(1.2);
      }
    },
    onModifyDefPriority: 5,
    onModifyDef(def, pokemon2) {
      if (pokemon2.hasType("Bug")) {
        return this.chainModify(1.2);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(spa, pokemon2) {
      if (pokemon2.hasType("Bug")) {
        return this.chainModify(1.2);
      }
    },
    desc: "If holder is Bug type, negates entry hazards, and user's Atk, Def, and SpA by 1.2x."
  },
  protector: {
    inherit: true,
    onStart(pokemon2) {
      this.add("-item", pokemon2, "Protector");
      this.add("-message", `${pokemon2.name} is holding a Protector!`);
    },
    onDisableMove(pokemon2) {
      for (const moveSlot of pokemon2.moveSlots) {
        const move = this.dex.moves.get(moveSlot.id);
        if (move.type !== pokemon2.types[0] && move.type !== pokemon2.types[1]) {
          pokemon2.disableMove(moveSlot.id);
        }
      }
    },
    onModifySpDPriority: 5,
    onModifySpD(spd, pokemon2) {
      return this.chainModify(2);
    },
    desc: "User's SpD is doubled, but it can only use moves of the same type as itself."
  },
  expertbelt: {
    inherit: true,
    onModifyDamage(damage, source, target2, move) {
      if (move && (target2.getMoveHitData(move).typeMod > 0 || source.volatiles("expertbelt"))) {
        if (source.volatiles("expertbelt")) {
          pokemon.removeVolatile("expertbelt");
        } else {
          pokemon.addVolatile("expertbelt");
        }
        return this.chainModify([4915, 4096]);
      }
    },
    desc: "Holder's attacks that are super effective against the target do 1.2x damage. If your super effective attacks hits a target, then your next attack does 1.2x damage regardless."
  },
  // Slate 10
  polkadotbow: {
    name: "Polkadot Bow",
    fling: {
      basePower: 10
    },
    onStart(pokemon2) {
      this.add("-item", pokemon2, "Polkadot Bow");
      this.add("-message", `${pokemon2.name} is holding a Polkadot Bow!`);
    },
    onModifyTypePriority: -1,
    onModifyType(move, pokemon2) {
      const noModifyType = [
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      let type;
      if (move.type === "Normal" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== "Status") && !(move.name === "Tera Blast" && pokemon2.terastallized) && !(move.name === "Tera Blast" && pokemon2.hasItem("legendplate"))) {
        if (move.id === target.moveSlots[0].id)
          type = types[0];
        else if (move.id === target.moveSlots[1].id)
          type = types[1];
        move.type = type;
        move.typeChangerBoosted = this.effect;
      }
    },
    flags: {},
    desc: "Normal Moves transform into the primary type of the user if they are in the first moveslot, or the secondary type if they are in the second moveslot. Announces on switch in / Displayed.",
    shortDesc: "Normal Moves transform into the primary type of the user if they are in the first moveslot, or the secondary type if they are in the second moveslot. Announces on switch in / Displayed.",
    num: -31,
    rating: 3
  },
  cursedfeather: {
    name: "Cursed Feather",
    spritenum: 754,
    fling: {
      basePower: 80
    },
    onModifyDamage(damage, source, target2, move) {
      if (source.status || source.hasAbility("comatose")) {
        return this.chainModify([5324, 4096]);
      }
    },
    onResidualOrder: 5,
    onResidualSubOrder: 4,
    onResidual(pokemon2) {
      if (pokemon2.status || pokemon2.hasAbility("comatose")) {
        this.heal(pokemon2.baseMaxhp / 8);
      }
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon2) {
      if (pokemon2.status === "brn") {
        return this.chainModify(2);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(spa, pokemon2) {
      if (pokemon2.status === "frz") {
        return this.chainModify(2);
      }
    },
    onModifySpe(spe, pokemon2) {
      if (pokemon2.status === "par") {
        return this.chainModify(2);
      }
    },
    num: -32,
    gen: 9,
    rating: 3,
    desc: "If afflicted with status: the holder's attacks deal 1.3x damage, and it restores 1/8th of its max HP at the end of every turn. Ignores stat drops from burn/paralysis/frostbite.",
    shortDesc: "If afflicted with status: the holder's attacks deal 1.3x damage, and it restores 1/8th of its max HP at the end of every turn. Ignores stat drops from burn/paralysis/frostbite."
  }
};
//# sourceMappingURL=items.js.map
