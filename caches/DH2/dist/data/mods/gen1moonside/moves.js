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
  /**
  * NEW MOVES START HERE.
  * Oh, Lucas. What are you doing here. Are you lost? Oh, there's nothing wrong with being lost.
  */
  adrenaline: {
    // Cool to hand out!
    num: -1,
    basePower: 0,
    accuracy: true,
    pp: 30,
    category: "Status",
    type: "Poison",
    target: "self",
    flags: { snatch: 1 },
    boosts: {
      spe: 1
    },
    secondary: null,
    priority: 0,
    name: "Adrenaline",
    shortDesc: "User's blood rushes. Raises speed by 1."
  },
  brainwaves: {
    // Slightly weaker than Psychic. Pass to Electrode.
    num: -2,
    basePower: 50,
    accuracy: 100,
    pp: 10,
    category: "Special",
    type: "Psychic",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    multihit: 2,
    secondary: null,
    priority: 0,
    name: "Brain Waves",
    shortDesc: "Assault the target with two Psychic hits."
  },
  burrow: {
    // Anyone can have this one.
    num: -3,
    basePower: 0,
    accuracy: true,
    pp: 30,
    category: "Status",
    type: "Ground",
    target: "self",
    flags: { snatch: 1 },
    boosts: {
      def: 2
    },
    secondary: null,
    priority: 0,
    name: "Burrow",
    shortDesc: "Raises defense 2."
  },
  cheepshot: {
    // Only for fish.
    num: -4,
    basePower: 70,
    accuracy: 100,
    pp: 20,
    category: "Special",
    type: "Water",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 33,
      boosts: {
        spe: -1
      }
    },
    priority: 0,
    name: "Cheep Shot",
    shortDesc: "An aquatic cheap shot. -33% of lowering speed."
  },
  chillwave: {
    // Better Aurora Beam, but weaker Ice Beam.
    num: -5,
    basePower: 75,
    accuracy: 100,
    pp: 10,
    category: "Special",
    type: "Ice",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 33,
      boosts: {
        atk: -1
      }
    },
    priority: 0,
    name: "Chill Wave",
    shortDesc: "33% chance to lower the target's Attack by 1."
  },
  combustion: {
    // boom + wisp ~ 3 pokemon get this.
    num: -6,
    basePower: 100,
    accuracy: 100,
    pp: 5,
    category: "Special",
    type: "Fire",
    target: "allAdjacent",
    flags: { protect: 1, mirror: 1 },
    selfdestruct: "always",
    secondary: {
      chance: 100,
      status: "brn"
    },
    priority: 0,
    name: "Combustion",
    shortDesc: "User expends all energy to inflict a nasty burn."
  },
  crosscutter: {
    // Machamp doesn't get this. :)
    num: -7,
    basePower: 50,
    accuracy: 100,
    pp: 15,
    category: "Physical",
    type: "Bug",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    willCrit: true,
    priority: 0,
    name: "Cross Cutter",
    shortDesc: "High critical hit ratio."
  },
  deflect: {
    // NEED HELP FOR THIS ONE HOLY
    num: -8,
    basePower: 10,
    accuracy: 100,
    pp: 5,
    category: "Physical",
    type: "Fighting",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    priority: 0,
    name: "Deflect",
    shortDesc: "Something."
  },
  deforest: {
    // GRASS TYPE BOOM, WHY? ITS COOL!
    num: -9,
    basePower: 170,
    accuracy: 100,
    pp: 5,
    category: "Special",
    type: "Grass",
    target: "allAdjacent",
    flags: { protect: 1, mirror: 1 },
    selfdestruct: "always",
    secondary: null,
    priority: 0,
    name: "Deforest",
    shortDesc: "User releases all natural energy in a massive attack, K.O's self."
  },
  divebomb: {
    // Powerful move, downside is the PP, don't just give to all the legendaries.
    num: -10,
    basePower: 90,
    accuracy: 90,
    pp: 5,
    category: "Physical",
    type: "Flying",
    target: "normal",
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    onMoveFail(target, source, move) {
      this.directDamage(1, source, target);
    },
    priority: 0,
    name: "Dive-Bomb",
    shortDesc: "User takes 1 HP of damage if it misses."
  },
  energyspike: {
    // Electrode move from TCG.
    num: -12,
    basePower: 65,
    accuracy: 100,
    pp: 5,
    category: "Special",
    type: "Electric",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 33,
      boosts: {
        accuracy: -1
      }
    },
    priority: 0,
    name: "Energy Spike",
    shortDesc: "33% chance to lower the target's Accuracy by 1."
  },
  excavate: {
    // Could go to anyone!
    num: -13,
    basePower: 75,
    accuracy: 100,
    pp: 10,
    category: "Physical",
    type: "Ground",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    priority: 0,
    name: "Excavate",
    shortDesc: "User digs at and around the target."
  },
  feathershot: {
    // A new "standard" to give some flying types.
    num: -15,
    basePower: 70,
    accuracy: 90,
    pp: 20,
    category: "Physical",
    type: "Flying",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 33,
      boosts: {
        spa: -1,
        spd: -1
      }
    },
    priority: 0,
    name: "Feather Shot",
    shortDesc: "30% chance to lower the target's special."
  },
  icebreaker: {
    // 140 ice move but no frz chance and worse accuracy.
    num: -16,
    basePower: 70,
    accuracy: 80,
    pp: 10,
    category: "Special",
    type: "Ice",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    willCrit: true,
    priority: 0,
    name: "Icebreaker",
    shortDesc: "High critical hit ratio."
  },
  illomen: {
    // Give to two ghosts. Dangerous move.
    num: -17,
    basePower: 10,
    accuracy: 100,
    pp: 5,
    category: "Physical",
    type: "Ghost",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      status: "slp"
    },
    priority: 0,
    name: "Ill Omen",
    shortDesc: "User lulls the target into a deep sleep on hit."
  },
  moult: {
    // Bug types. Sandslash too.
    num: -18,
    basePower: 0,
    accuracy: true,
    pp: 5,
    category: "Status",
    type: "Bug",
    target: "self",
    flags: { snatch: 1 },
    boosts: {
      def: -1,
      atk: 1,
      spe: 1
    },
    secondary: null,
    priority: 0,
    name: "Moult",
    shortDesc: "Raises the user's Attack and Speed by 1. Lowers Defense by 1."
  },
  murmurations: {
    // Funky flying type move. Pidgeot and the legendary birds.
    num: -19,
    basePower: 0,
    accuracy: 100,
    pp: 5,
    category: "Status",
    type: "Flying",
    target: "allAdjacent",
    flags: { protect: 1, mirror: 1 },
    boosts: {
      spa: -2,
      spd: -2
    },
    secondary: null,
    priority: 0,
    name: "Murmurations",
    shortDesc: "Lowers the target's Special by 2."
  },
  rindoukanthrow: {
    // Neat fighting move.
    num: -20,
    basePower: 70,
    accuracy: 100,
    pp: 5,
    category: "Physical",
    type: "Fighting",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 33,
      boosts: {
        spe: -2
      }
    },
    priority: 0,
    name: "Rindoukan Throw",
    shortDesc: "33% chance to lower the target's Speed by 2."
  },
  risingspire: {
    // Rock hyperbeam, limited distribution.
    num: -21,
    basePower: 130,
    accuracy: 90,
    pp: 8,
    category: "Physical",
    type: "Rock",
    target: "normal",
    flags: { recharge: 1, protect: 1, mirror: 1 },
    self: null,
    onHit(target, source) {
      if (target.hp) {
        source.addVolatile("mustrecharge");
      }
    },
    secondary: null,
    priority: 0,
    name: "Rising Spire",
    shortDesc: "Can't move next turn if target or sub is not KOed."
  },
  rupture: {
    // Big strong poison move.
    num: -22,
    basePower: 110,
    accuracy: 80,
    pp: 5,
    category: "Physical",
    type: "Poison",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    priority: 0,
    name: "Rupture",
    shortDesc: "An attack that attacks from the inside out."
  },
  sauna: {
    // Scald but balanced.
    num: -23,
    basePower: 60,
    accuracy: 100,
    pp: 5,
    category: "Special",
    type: "Water",
    target: "allAdjacent",
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 33,
      status: "brn"
    },
    recoil: [1, 4],
    priority: 0,
    name: "Sauna",
    shortDesc: "33% chance to burn the target. Has 1/4 recoil."
  },
  scalelaunch: {
    // Snakes and stuff get this.
    num: -24,
    basePower: 75,
    accuracy: 100,
    pp: 10,
    category: "Special",
    type: "Dragon",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    priority: 0,
    name: "Scale Launch",
    shortDesc: "No additional effect."
  },
  scuttle: {
    // Shit move but funny.
    num: -25,
    basePower: 60,
    accuracy: 100,
    pp: 5,
    category: "Physical",
    type: "Bug",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      boosts: {
        spe: 2
      }
    },
    priority: 0,
    name: "Scuttle",
    shortDesc: "Raises the target's speed by 2."
  },
  starstorm: {
    // DO NOT GIVE TO A PSYCHIC TYPE
    num: -28,
    basePower: 120,
    accuracy: true,
    pp: 5,
    category: "Special",
    type: "Psychic",
    target: "allAdjacent",
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    priority: 0,
    name: "Star Storm",
    shortDesc: "One's true potential. 'Never' misses."
  },
  sumostance: {
    // Nothing with good special should get this.
    num: -29,
    basePower: 0,
    accuracy: true,
    pp: 20,
    category: "Status",
    type: "Fighting",
    target: "self",
    flags: { snatch: 1 },
    boosts: {
      def: 1,
      spd: 1,
      spa: 1
    },
    secondary: null,
    priority: 0,
    name: "Sumo Stance",
    shortDesc: "Raises the user's Defense and Special by 1."
  },
  thorns: {
    // New grass "default" move.
    num: -30,
    basePower: 85,
    accuracy: 100,
    pp: 10,
    category: "Special",
    type: "Grass",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 33,
      boosts: {
        spe: -1
      }
    },
    priority: 0,
    name: "Thorns",
    shortDesc: "33% chance to lower the target's Speed by 1."
  },
  tumble: {
    // Funky EQ move.
    num: -31,
    basePower: 100,
    accuracy: 100,
    pp: 10,
    category: "Physical",
    type: "Ground",
    target: "normal",
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    recoil: [1, 4],
    priority: 0,
    name: "Tumble",
    shortDesc: "Has 1/4 recoil."
  },
  venomwhirl: {
    // More tha poison types can get this.
    num: -32,
    basePower: 80,
    accuracy: 100,
    pp: 15,
    category: "Physical",
    type: "Poison",
    target: "allAdjacent",
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 40,
      status: "tox"
    },
    priority: 0,
    name: "Venom Whirl",
    shortDesc: "40% chance to badly poison the target."
  },
  wideslash: {
    // Upgraded swift!
    num: -22,
    basePower: 85,
    accuracy: true,
    pp: 15,
    category: "Physical",
    type: "Normal",
    target: "allAdjacentFoes",
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    priority: 0,
    name: "Wide Slash",
    shortDesc: "A wide sweeping attack that 'never' misses."
  },
  zap: {
    // Shitty move, don't give to Electrode.
    num: -33,
    basePower: 40,
    accuracy: 100,
    pp: 10,
    category: "Special",
    type: "Electric",
    target: "allAdjacent",
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    priority: 0,
    name: "Zap",
    shortDesc: "30% chance to make the target flinch."
  },
  blank: {
    // boom + wisp
    num: -34,
    basePower: 80,
    accuracy: 100,
    pp: 5,
    category: "Special",
    type: "Fire",
    target: "allAdjacent",
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    priority: 0,
    name: "blank",
    shortDesc: "Description goes here."
  }
};
//# sourceMappingURL=moves.js.map
