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
var typechart_exports = {};
__export(typechart_exports, {
  TypeChart: () => TypeChart
});
module.exports = __toCommonJS(typechart_exports);
const TypeChart = {
  bug: {
    damageTaken: {
      Bug: 0,
      Dragon: 0,
      Electric: 0,
      Fighting: 2,
      Fire: 1,
      Flying: 1,
      Ghost: 0,
      Grass: 2,
      Ground: 2,
      Ice: 0,
      Normal: 0,
      Poison: 1,
      Psychic: 0,
      Rock: 1,
      Water: 0,
      Steel: 0,
      Dark: 0,
      Fairy: 0
    }
  },
  dragon: {
    damageTaken: {
      Bug: 0,
      Dark: 0,
      Dragon: 1,
      Electric: 2,
      Fairy: 1,
      Fighting: 0,
      Fire: 2,
      Flying: 0,
      Ghost: 0,
      Grass: 2,
      Ground: 0,
      Ice: 1,
      Normal: 0,
      Poison: 0,
      Psychic: 0,
      Rock: 0,
      Steel: 0,
      Water: 2
    }
  },
  electric: {
    damageTaken: {
      Bug: 0,
      Dark: 0,
      Dragon: 0,
      Electric: 2,
      Fairy: 0,
      Fighting: 0,
      Fire: 0,
      Flying: 2,
      Ghost: 0,
      Grass: 0,
      Ground: 1,
      Ice: 0,
      Normal: 0,
      Poison: 0,
      Psychic: 0,
      Rock: 0,
      Steel: 2,
      Water: 0
    }
  },
  fighting: {
    damageTaken: {
      Bug: 2,
      Dark: 2,
      Dragon: 0,
      Electric: 0,
      Fairy: 1,
      Fighting: 0,
      Fire: 0,
      Flying: 1,
      Ghost: 0,
      Grass: 0,
      Ground: 0,
      Ice: 0,
      Normal: 0,
      Poison: 0,
      Psychic: 1,
      Rock: 2,
      Steel: 0,
      Water: 0
    }
  },
  fire: {
    damageTaken: {
      Bug: 2,
      Dragon: 0,
      Electric: 0,
      Fighting: 0,
      Fire: 2,
      Flying: 0,
      Ghost: 0,
      Grass: 2,
      Ground: 1,
      Ice: 0,
      Normal: 0,
      Poison: 0,
      Psychic: 0,
      Rock: 1,
      Water: 1,
      Steel: 0,
      Dark: 0,
      Fairy: 2
    }
  },
  flying: {
    damageTaken: {
      Bug: 2,
      Dark: 0,
      Dragon: 0,
      Electric: 1,
      Fairy: 0,
      Fighting: 2,
      Fire: 0,
      Flying: 0,
      Ghost: 0,
      Grass: 2,
      Ground: 3,
      Ice: 1,
      Normal: 0,
      Poison: 0,
      Psychic: 0,
      Rock: 1,
      Steel: 0,
      Water: 0
    }
  },
  ghost: {
    damageTaken: {
      Bug: 2,
      Dragon: 0,
      Electric: 0,
      Fighting: 3,
      Fire: 0,
      Flying: 0,
      Ghost: 1,
      Grass: 0,
      Ground: 0,
      Ice: 0,
      Normal: 3,
      Poison: 2,
      Psychic: 0,
      Rock: 0,
      Water: 0,
      Steel: 0,
      Dark: 1,
      Fairy: 0
    }
  },
  grass: {
    damageTaken: {
      Bug: 1,
      Dark: 0,
      Dragon: 0,
      Electric: 2,
      Fairy: 0,
      Fighting: 0,
      Fire: 1,
      Flying: 1,
      Ghost: 0,
      Grass: 2,
      Ground: 2,
      Ice: 1,
      Normal: 0,
      Poison: 1,
      Psychic: 0,
      Rock: 0,
      Steel: 0,
      Water: 2
    }
  },
  ground: {
    damageTaken: {
      Bug: 0,
      Dark: 0,
      Dragon: 0,
      Electric: 3,
      Fairy: 0,
      Fighting: 0,
      Fire: 0,
      Flying: 0,
      Ghost: 0,
      Grass: 1,
      Ground: 0,
      Ice: 1,
      Normal: 0,
      Poison: 2,
      Psychic: 0,
      Rock: 2,
      Steel: 0,
      Water: 1
    }
  },
  ice: {
    damageTaken: {
      Bug: 0,
      Dark: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 1,
      Fire: 1,
      Flying: 0,
      Ghost: 0,
      Grass: 0,
      Ground: 0,
      Ice: 2,
      Normal: 0,
      Poison: 0,
      Psychic: 0,
      Rock: 1,
      Steel: 1,
      Water: 0
    }
  },
  normal: {
    damageTaken: {
      Bug: 0,
      Dark: 2,
      // why
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 1,
      Fire: 0,
      Flying: 0,
      Ghost: 3,
      Grass: 0,
      Ground: 0,
      Ice: 0,
      Normal: 0,
      Poison: 0,
      Psychic: 0,
      Rock: 0,
      Steel: 0,
      Water: 0
    }
  },
  poison: {
    damageTaken: {
      psn: 3,
      tox: 3,
      Bug: 1,
      Dragon: 0,
      Electric: 0,
      Fighting: 2,
      Fire: 0,
      Flying: 0,
      Ghost: 0,
      Grass: 2,
      Ground: 1,
      Ice: 0,
      Normal: 0,
      Poison: 2,
      Psychic: 1,
      Rock: 0,
      Water: 0,
      Steel: 0,
      Dark: 0,
      Fairy: 2
    }
  },
  psychic: {
    damageTaken: {
      Bug: 1,
      Dragon: 0,
      Electric: 0,
      Fighting: 2,
      Fire: 0,
      Flying: 0,
      Ghost: 3,
      Grass: 0,
      Ground: 0,
      Ice: 0,
      Normal: 0,
      Poison: 0,
      Psychic: 2,
      Rock: 0,
      Water: 0,
      Steel: 0,
      Dark: 1,
      Fairy: 0
    }
  },
  rock: {
    damageTaken: {
      Bug: 0,
      Dark: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 1,
      Fire: 2,
      Flying: 2,
      Ghost: 0,
      Grass: 1,
      Ground: 1,
      Ice: 0,
      Normal: 2,
      Poison: 2,
      Psychic: 0,
      Rock: 0,
      Steel: 1,
      Water: 1
    }
  },
  water: {
    damageTaken: {
      Bug: 0,
      Dark: 0,
      Dragon: 0,
      Electric: 1,
      Fairy: 0,
      Fighting: 0,
      Fire: 2,
      Flying: 0,
      Ghost: 0,
      Grass: 1,
      Ground: 0,
      Ice: 2,
      Normal: 0,
      Poison: 0,
      Psychic: 0,
      Rock: 0,
      Steel: 2,
      Water: 2
    }
  },
  dark: {
    isNonstandard: null,
    damageTaken: {
      Bug: 0,
      Dragon: 0,
      Electric: 0,
      Fighting: 0,
      Fire: 0,
      Flying: 0,
      Ghost: 2,
      Grass: 0,
      Ground: 0,
      Ice: 0,
      Normal: 1,
      Poison: 0,
      Psychic: 2,
      Rock: 0,
      Water: 0,
      Steel: 0,
      Dark: 1,
      Fairy: 1
    }
  },
  steel: {
    isNonstandard: null,
    damageTaken: {
      Bug: 0,
      Dragon: 0,
      Electric: 1,
      Fighting: 2,
      Fire: 1,
      Flying: 0,
      Ghost: 0,
      Grass: 0,
      Ground: 0,
      Ice: 0,
      Normal: 0,
      Poison: 2,
      Psychic: 0,
      Rock: 2,
      Water: 1,
      Steel: 3,
      Dark: 0,
      Fairy: 2
    }
  },
  fairy: {
    isNonstandard: null,
    damageTaken: {
      Bug: 2,
      Dark: 2,
      Dragon: 3,
      Electric: 0,
      Fairy: 0,
      Fighting: 2,
      Fire: 0,
      Flying: 0,
      Ghost: 0,
      Grass: 0,
      Ground: 0,
      Ice: 0,
      Normal: 0,
      Poison: 1,
      Psychic: 0,
      Rock: 0,
      Steel: 1,
      Water: 0
    }
  }
};
//# sourceMappingURL=typechart.js.map
