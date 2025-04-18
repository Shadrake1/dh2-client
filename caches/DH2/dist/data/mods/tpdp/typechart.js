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
  void: {
    damageTaken: {
      Void: 0,
      Fires: 0,
      Waters: 0,
      Nature: 0,
      Earths: 0,
      Steels: 0,
      Wind: 0,
      Electrics: 0,
      Lights: 0,
      Darks: 1,
      Nether: 0,
      Poisons: 0,
      Fightings: 0,
      Illusion: 3,
      Sounds: 0,
      Warped: 0,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  fires: {
    damageTaken: {
      brn: 3,
      hvybrn: 3,
      Void: 0,
      Fires: 2,
      Waters: 1,
      Nature: 2,
      Earths: 1,
      Steels: 2,
      Wind: 0,
      Electrics: 0,
      Lights: 0,
      Darks: 0,
      Nether: 0,
      Poisons: 0,
      Fightings: 0,
      Illusion: 0,
      Sounds: 0,
      Warped: 0,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  waters: {
    damageTaken: {
      Void: 0,
      Fires: 2,
      Waters: 2,
      Nature: 1,
      Earths: 0,
      Steels: 2,
      Wind: 0,
      Electrics: 1,
      Lights: 2,
      Darks: 0,
      Nether: 0,
      Poisons: 1,
      Fightings: 0,
      Illusion: 0,
      Sounds: 0,
      Warped: 0,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  nature: {
    damageTaken: {
      Void: 0,
      Fires: 1,
      Waters: 2,
      Nature: 2,
      Earths: 2,
      Steels: 1,
      Wind: 0,
      Electrics: 2,
      Lights: 2,
      Darks: 0,
      Nether: 0,
      Poisons: 1,
      Fightings: 0,
      Illusion: 0,
      Sounds: 0,
      Warped: 0,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  earths: {
    damageTaken: {
      duststorm: 3,
      Void: 0,
      Fires: 2,
      Waters: 1,
      Nature: 1,
      Earths: 0,
      Steels: 0,
      Wind: 0,
      Electrics: 3,
      Lights: 0,
      Darks: 0,
      Nether: 0,
      Poisons: 2,
      Fightings: 1,
      Illusion: 0,
      Sounds: 0,
      Warped: 0,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  steels: {
    damageTaken: {
      duststorm: 3,
      psn: 3,
      tox: 3,
      Void: 0,
      Fires: 1,
      Waters: 0,
      Nature: 0,
      Earths: 1,
      Steels: 2,
      Wind: 2,
      Electrics: 0,
      Lights: 0,
      Darks: 0,
      Nether: 0,
      Poisons: 3,
      Fightings: 1,
      Illusion: 2,
      Sounds: 0,
      Warped: 1,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  wind: {
    damageTaken: {
      spikes: 3,
      Void: 0,
      Fires: 0,
      Waters: 0,
      Nature: 2,
      Earths: 3,
      Steels: 1,
      Wind: 0,
      Electrics: 1,
      Lights: 0,
      Darks: 0,
      Nether: 0,
      Poisons: 0,
      Fightings: 2,
      Illusion: 0,
      Sounds: 2,
      Warped: 1,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  electrics: {
    damageTaken: {
      par: 3,
      shk: 3,
      Void: 0,
      Fires: 0,
      Waters: 0,
      Nature: 0,
      Earths: 1,
      Steels: 0,
      Wind: 2,
      Electrics: 2,
      Lights: 0,
      Darks: 0,
      Nether: 0,
      Poisons: 0,
      Fightings: 0,
      Illusion: 0,
      Sounds: 0,
      Warped: 0,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  lights: {
    damageTaken: {
      Void: 2,
      Fires: 0,
      Waters: 0,
      Nature: 0,
      Earths: 0,
      Steels: 0,
      Wind: 0,
      Electrics: 2,
      Lights: 2,
      Darks: 1,
      Nether: 2,
      Poisons: 0,
      Fightings: 0,
      Illusion: 1,
      Sounds: 2,
      Warped: 0,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  darks: {
    damageTaken: {
      bindtrap: 3,
      Void: 2,
      Fires: 0,
      Waters: 0,
      Nature: 0,
      Earths: 0,
      Steels: 1,
      Wind: 0,
      Electrics: 0,
      Lights: 1,
      Darks: 2,
      Nether: 0,
      Poisons: 0,
      Fightings: 1,
      Illusion: 0,
      Sounds: 0,
      Warped: 2,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  nether: {
    damageTaken: {
      trapped: 3,
      Void: 0,
      Fires: 0,
      Waters: 0,
      Nature: 0,
      Earths: 0,
      Steels: 0,
      Wind: 0,
      Electrics: 0,
      Lights: 1,
      Darks: 1,
      Nether: 1,
      Poisons: 2,
      Fightings: 3,
      Illusion: 2,
      Sounds: 0,
      Warped: 0,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  poisons: {
    damageTaken: {
      psn: 3,
      tox: 3,
      Void: 0,
      Fires: 0,
      Waters: 0,
      Nature: 2,
      Earths: 1,
      Steels: 0,
      Wind: 1,
      Electrics: 0,
      Lights: 0,
      Darks: 0,
      Nether: 0,
      Poisons: 2,
      Fightings: 2,
      Illusion: 0,
      Sounds: 0,
      Warped: 2,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  fightings: {
    damageTaken: {
      Void: 0,
      Fires: 0,
      Waters: 0,
      Nature: 0,
      Earths: 2,
      Steels: 0,
      Wind: 1,
      Electrics: 0,
      Lights: 0,
      Darks: 2,
      Nether: 0,
      Poisons: 0,
      Fightings: 0,
      Illusion: 0,
      Sounds: 1,
      Warped: 2,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  illusion: {
    damageTaken: {
      Void: 3,
      Fires: 0,
      Waters: 0,
      Nature: 0,
      Earths: 0,
      Steels: 0,
      Wind: 0,
      Electrics: 0,
      Lights: 2,
      Darks: 2,
      Nether: 0,
      Poisons: 0,
      Fightings: 2,
      Illusion: 1,
      Sounds: 1,
      Warped: 1,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  sounds: {
    damageTaken: {
      Void: 0,
      Fires: 0,
      Waters: 2,
      Nature: 0,
      Earths: 0,
      Steels: 0,
      Wind: 1,
      Electrics: 1,
      Lights: 0,
      Darks: 0,
      Nether: 2,
      Poisons: 0,
      Fightings: 0,
      Illusion: 0,
      Sounds: 2,
      Warped: 0,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  warped: {
    damageTaken: {
      Void: 0,
      Fires: 0,
      Waters: 0,
      Nature: 0,
      Earths: 0,
      Steels: 2,
      Wind: 3,
      Electrics: 0,
      Lights: 0,
      Darks: 0,
      Nether: 0,
      Poisons: 1,
      Fightings: 1,
      Illusion: 0,
      Sounds: 1,
      Warped: 2,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  },
  dream: {
    damageTaken: {
      stp: 3,
      Void: 0,
      Fires: 0,
      Waters: 0,
      Nature: 0,
      Earths: 0,
      Steels: 0,
      Wind: 0,
      Electrics: 0,
      Lights: 0,
      Darks: 0,
      Nether: 0,
      Poisons: 0,
      Fightings: 0,
      Illusion: 0,
      Sounds: 0,
      Warped: 0,
      Dream: 0
    },
    HPivs: {},
    HPdvs: {}
  }
};
//# sourceMappingURL=typechart.js.map
