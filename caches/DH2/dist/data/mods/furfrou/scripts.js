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
var scripts_exports = {};
__export(scripts_exports, {
  Scripts: () => Scripts
});
module.exports = __toCommonJS(scripts_exports);
const Scripts = {
  gen: 9,
  teambuilderConfig: {
    excludeStandardTiers: true,
    customTiers: ["FROU", "FROU Ubers", "FROU (NFE)"]
  },
  actions: {
    switchIn(pokemon, pos, sourceEffect = null, isDrag) {
      if (!pokemon || pokemon.isActive) {
        this.battle.hint("A switch failed because the Pok\xE9mon trying to switch in is already in.");
        return false;
      }
      const side = pokemon.side;
      if (pos >= side.active.length) {
        throw new Error(`Invalid switch position ${pos} / ${side.active.length}`);
      }
      const oldActive = side.active[pos];
      const unfaintedActive = oldActive?.hp ? oldActive : null;
      if (unfaintedActive) {
        oldActive.beingCalledBack = true;
        let switchCopyFlag = false;
        if (sourceEffect && typeof sourceEffect.selfSwitch === "string") {
          switchCopyFlag = sourceEffect.selfSwitch;
        }
        if (!oldActive.skipBeforeSwitchOutEventFlag && !isDrag) {
          this.battle.runEvent("BeforeSwitchOut", oldActive);
          if (this.battle.gen >= 5) {
            this.battle.eachEvent("Update");
          }
        }
        oldActive.skipBeforeSwitchOutEventFlag = false;
        if (!this.battle.runEvent("SwitchOut", oldActive)) {
          return false;
        }
        if (!oldActive.hp) {
          return "pursuitfaint";
        }
        oldActive.illusion = null;
        this.battle.singleEvent("End", oldActive.getAbility(), oldActive.abilityState, oldActive);
        this.battle.queue.cancelAction(oldActive);
        let newMove = null;
        if (this.battle.gen === 4 && sourceEffect) {
          newMove = oldActive.lastMove;
        }
        if (switchCopyFlag) {
          pokemon.copyVolatileFrom(oldActive, switchCopyFlag);
        }
        if (newMove)
          pokemon.lastMove = newMove;
        oldActive.clearVolatile();
      }
      if (oldActive) {
        oldActive.isActive = false;
        oldActive.isStarted = false;
        oldActive.usedItemThisTurn = false;
        oldActive.statsRaisedThisTurn = false;
        oldActive.statsLoweredThisTurn = false;
        oldActive.position = pokemon.position;
        pokemon.position = pos;
        side.pokemon[pokemon.position] = pokemon;
        side.pokemon[oldActive.position] = oldActive;
      }
      pokemon.isActive = true;
      side.active[pos] = pokemon;
      pokemon.activeTurns = 0;
      pokemon.activeMoveActions = 0;
      for (const moveSlot of pokemon.moveSlots) {
        moveSlot.used = false;
      }
      this.battle.runEvent("BeforeSwitchIn", pokemon);
      if (sourceEffect) {
        this.battle.add(isDrag ? "drag" : "switch", pokemon, pokemon.getDetails, "[from] " + sourceEffect);
      } else {
        this.battle.add(isDrag ? "drag" : "switch", pokemon, pokemon.getDetails);
      }
      pokemon.abilityOrder = this.battle.abilityOrder++;
      if (isDrag && this.battle.gen === 2)
        pokemon.draggedIn = this.battle.turn;
      pokemon.previouslySwitchedIn++;
      pokemon.m.previousPartner = oldActive;
      if (isDrag && this.battle.gen >= 5) {
        this.battle.singleEvent("PreStart", pokemon.getAbility(), pokemon.abilityState, pokemon);
        this.runSwitch(pokemon);
      } else {
        this.battle.queue.insertChoice({ choice: "runUnnerve", pokemon });
        this.battle.queue.insertChoice({ choice: "runSwitch", pokemon });
      }
      return true;
    }
  },
  pokemon: {
    takeItem(source) {
      if (!this.item || this.itemState.knockedOff)
        return false;
      if (!source)
        source = this;
      if (this.battle.gen === 4) {
        if (toID(this.ability) === "multitype")
          return false;
        if (toID(source.ability) === "multitype")
          return false;
      }
      const item = this.getItem();
      if (this.battle.runEvent("TakeItem", this, source, null, item)) {
        this.item = "";
        const oldItemState = this.itemState;
        this.itemState = { id: "", target: this };
        this.pendingStaleness = void 0;
        this.battle.singleEvent("End", item, oldItemState, this);
        this.battle.runEvent("AfterTakeItem", this, null, null, item);
        return item;
      }
      return false;
    }
  }
};
//# sourceMappingURL=scripts.js.map
