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
var moves_exports = {};
__export(moves_exports, {
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
const Moves = {
  // SANDBOX CONTENT STARTS HERE
  // MnM4A Meloetta
  relicsong: {
    inherit: true,
    onAfterMoveSecondarySelf(pokemon, target, move) {
      if (move.willChangeForme) {
        const meloettaForme = pokemon.species.id === "meloettapirouette" ? "" : "-Pirouette";
        if (pokemon.species.isMega) {
          const species = this.doGetMixedSpecies("Meloetta" + meloettaForme, pokemon.species.deltas);
          if (pokemon.getItem().name === "RKS Megamemory") {
            const silvallyType = pokemon.hpType || "Dark";
            if (species.types[1] === silvallyType) {
              species.types = [silvallyType];
            } else if (!species.types[1] && species.types[0] !== silvallyType) {
              species.types = [species.types[0], silvallyType];
            } else {
              species.types = [silvallyType, species.types[1]];
            }
          }
          pokemon.formeChange(species, this.effect, false, "[msg]");
          this.add("-start", pokemon, "typechange", pokemon.getTypes(true).join("/"), "[silent]");
          const abilities = species.abilities;
          const baseStats = species.baseStats;
          const type = species.types[0];
          if (species.types[1]) {
            const type2 = species.types[1];
            this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="http://play.pokemonshowdown.com/sprites/types/${type}.png" alt="${type}" height="14" width="32"><img src="http://play.pokemonshowdown.com/sprites/types/${type2}.png" alt="${type2}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities[0] + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
          } else {
            this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="http://play.pokemonshowdown.com/sprites/types/${type}.png" alt="${type}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities[0] + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
          }
        } else {
          pokemon.formeChange("Meloetta" + meloettaForme, this.effect, false, "[msg]");
        }
      }
    }
  }
};
//# sourceMappingURL=moves.js.map
