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
    customTiers: ["VGC", "VGC NFE"],
    customDoublesTiers: ["VGC", "VGC NFE"]
  },
  init() {
    this.modData("Learnsets", "tangela").learnset.stringshot = ["9M"];
    this.modData("Learnsets", "tangela").learnset.weatherball = ["9M"];
    this.modData("Learnsets", "tangela").learnset.swarmingstrike = ["9M"];
    this.modData("Learnsets", "volbeat").learnset.paranoia = ["9M"];
    this.modData("Learnsets", "volbeat").learnset.swarmingstrike = ["9M"];
    this.modData("Learnsets", "illumise").learnset.paranoia = ["9M"];
    this.modData("Learnsets", "illumise").learnset.swarmingstrike = ["9M"];
    this.modData("Learnsets", "vespiquen").learnset.swarmingstrike = ["9M"];
    this.modData("Learnsets", "vespiquen").learnset.poisonjab = ["9M"];
    this.modData("Learnsets", "vespiquen").learnset.healorder = ["9M"];
    this.modData("Learnsets", "accelgor").learnset.swarmingstrike = ["9M"];
    this.modData("Learnsets", "escavalier").learnset.swarmingstrike = ["9M"];
    this.modData("Learnsets", "golisopod").learnset.paranoia = ["9M"];
    this.modData("Learnsets", "golisopod").learnset.wavecrash = ["9M"];
    this.modData("Learnsets", "dottler").learnset.paranoia = ["9M"];
    this.modData("Learnsets", "gyarados").learnset.aircannon = ["9M"];
    this.modData("Learnsets", "milotic").learnset.calmmind = ["9M"];
    this.modData("Learnsets", "beartic").learnset.iceshard = ["9M"];
    this.modData("Learnsets", "rotom").learnset.recalibration = ["9M"];
    this.modData("Learnsets", "golurk").learnset.storedpower = ["9M"];
    this.modData("Learnsets", "golurk").learnset.recalibration = ["9M"];
    this.modData("Learnsets", "flygon").learnset.aircannon = ["9M"];
    this.modData("Learnsets", "flygon").learnset.swarmingstrike = ["9M"];
    this.modData("Learnsets", "flygon").learnset.paranoia = ["9M"];
    this.modData("Learnsets", "arbok").learnset.taunt = ["9M"];
    this.modData("Learnsets", "arbok").learnset.partingshot = ["9M"];
    this.modData("Learnsets", "arbok").learnset.helpinghand = ["9M"];
    this.modData("Learnsets", "flamigo").learnset.aircannon = ["9M"];
    this.modData("Learnsets", "flamigo").learnset.drillpeck = ["9M"];
    this.modData("Learnsets", "snorlax").learnset.slackoff = ["9M"];
    this.modData("Learnsets", "snorlax").learnset.mightyblow = ["9M"];
    this.modData("Learnsets", "delcatty").learnset.passiveaggressive = ["9M"];
    this.modData("Learnsets", "stoutland").learnset.doubleedge = ["9M"];
    this.modData("Learnsets", "stoutland").learnset.uturn = ["9M"];
    this.modData("Learnsets", "tinkatink").learnset.mightyblow = ["9M"];
    this.modData("Learnsets", "tinkatink").learnset.dazzlinggleam = ["9M"];
    this.modData("Learnsets", "tinkatink").learnset.batonpass = ["9M"];
    this.modData("Learnsets", "perrserker").learnset.bulletpunch = ["9M"];
    for (const id in this.dataCache.Pokedex) {
      const newMon = this.dataCache.Pokedex[id];
      if (!newMon || !newMon.copyData)
        continue;
      const copyData = this.dataCache.Pokedex[this.toID(newMon.copyData)];
      if (!newMon.types && copyData.types)
        newMon.types = copyData.types;
      if (!newMon.baseStats && copyData.baseStats)
        newMon.baseStats = copyData.baseStats;
      if (!newMon.abilities && copyData.abilities)
        newMon.abilities = copyData.abilities;
      if (!newMon.num && copyData.num)
        newMon.num = copyData.num * -1;
      if (!newMon.genderRatio && copyData.genderRatio)
        newMon.genderRatio = copyData.genderRatio;
      if (!newMon.heightm && copyData.heightm)
        newMon.heightm = copyData.heightm;
      if (!newMon.weightkg && copyData.weightkg)
        newMon.weightkg = copyData.weightkg;
      if (!newMon.color && copyData.color)
        newMon.color = copyData.color;
      if (!newMon.eggGroups && copyData.eggGroups)
        newMon.eggGroups = copyData.eggGroups;
      let copyMoves = newMon.copyData;
      if (newMon.copyMoves)
        copyMoves = newMon.copyMoves;
      if (copyMoves) {
        if (!this.dataCache.Learnsets[id])
          this.dataCache.Learnsets[id] = { learnset: {} };
        const learnset = this.dataCache.Learnsets[this.toID(copyMoves)].learnset;
        for (const moveid in learnset) {
          this.modData("Learnsets", id).learnset[moveid] = learnset[moveid].filter(
            (method) => !method.includes("S")
          );
        }
        if (newMon.movepoolAdditions) {
          for (const move of newMon.movepoolAdditions) {
            this.modData("Learnsets", this.toID(id)).learnset[this.toID(move)] = ["9M"];
          }
        }
        if (newMon.movepoolDeletions) {
          for (const move of newMon.movepoolDeletions) {
            delete this.modData("Learnsets", this.toID(id)).learnset[this.toID(move)];
          }
        }
        if (newMon.name === "Eclipseroid") {
          for (const moveid in this.dataCache.Learnsets[this.toID("Lunatone")].learnset) {
            this.modData("Learnsets", id).learnset[moveid] = this.dataCache.Learnsets[this.toID("Lunatone")].learnset[moveid].filter(
              (method) => !method.includes("S")
            );
          }
        }
      }
    }
  }
};
//# sourceMappingURL=scripts.js.map
