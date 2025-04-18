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
  megadatamod: {
    effectType: "Rule",
    name: "Mega Data Mod",
    desc: "Gives data on stats, Ability and types when a Pok\xE9mon Mega Evolves or undergoes Ultra Burst.",
    onBegin() {
      this.add(`raw|<img src="https://raw.githubusercontent.com/scoopapa/DH/master/data/mods/m4av6/sprites/m4a_banner.png" height="65" width="381">`);
      this.add("-message", `Welcome to Megas for All!`);
      this.add("-message", `Right now, we're working on giving new Mega Evolutions to a variety of Pok\xE9mon in a Paldea Pok\xE9dex-based format. The only Mega Evolutions allowed are our new ones!`);
      this.add("-message", `You can find our thread and metagame resources here:`);
      this.add("-message", `https://www.smogon.com/forums/threads/3671140/`);
    },
    onSwitchIn(pokemon) {
      if (pokemon.illusion) {
        if (pokemon.illusion.species.forme.startsWith("Mega") || pokemon.illusion.species.forme.startsWith("Ultra")) {
          this.add("-start", pokemon, "typechange", pokemon.illusion.getTypes(true).join("/"), "[silent]");
        }
      } else {
        if (pokemon.species.forme.startsWith("Mega") || pokemon.species.forme.startsWith("Ultra")) {
          this.add("-start", pokemon, "typechange", pokemon.getTypes(true).join("/"), "[silent]");
        }
      }
    },
    onDamagingHit(damage, target, source, move) {
      if (target.hasAbility("illusion")) {
        if (target.species.forme.startsWith("Mega") || target.species.forme.startsWith("Ultra")) {
          this.add("-start", target, "typechange", target.getTypes(true).join("/"), "[silent]");
        } else {
          const types = target.baseSpecies.types;
          if (target.getTypes().join() === types.join()) {
            this.add("-end", target, "typechange", "[silent]");
          }
        }
      }
    },
    onAfterMega(pokemon) {
      this.add("-start", pokemon, "typechange", pokemon.getTypes(true).join("/"), "[silent]");
      const species = this.dex.species.get(pokemon.species);
      const abilities = this.dex.abilities.get(species.abilities[0]).name;
      const baseStats = species.baseStats;
      const type = species.types[0];
      if (species.types[1]) {
        const type2 = species.types[1];
        this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="http://play.pokemonshowdown.com/sprites/types/${type}.png" alt="${type}" height="14" width="32"><img src="http://play.pokemonshowdown.com/sprites/types/${type2}.png" alt="${type2}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities + `</span><span class="col abilitycol"></span></span></li><li style="clear: both"></li></ul>`);
      } else {
        this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="http://play.pokemonshowdown.com/sprites/types/${type}.png" alt="${type}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities + `</span><span class="col abilitycol"></span></span></li><li style="clear: both"></li></ul>`);
      }
      this.add(`raw|<ul class="utilichart"><li class="result"><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
      if (species.creator)
        this.hint(`${species.name} was submitted by ${species.creator}!`);
    }
  }
};
//# sourceMappingURL=rulesets.js.map
