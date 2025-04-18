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
  outburst: {
    num: 1001,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Outburst",
    shortDesc: "No additional effect.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  cheekpinch: {
    num: 1002,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Cheek Pinch",
    shortDesc: "No additional effect.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  condition: {
    num: 1003,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Condition",
    shortDesc: "No additional effect.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  lift: {
    num: 1004,
    accuracy: 95,
    basePower: 55,
    category: "Physical",
    name: "Lift",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  furball: {
    num: 1005,
    accuracy: 95,
    basePower: 55,
    category: "Physical",
    name: "Fur Ball",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  crimp: {
    num: 1006,
    accuracy: 95,
    basePower: 58,
    category: "Physical",
    name: "Crimp",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  deadstare: {
    num: 1007,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Dead Stare",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  encrust: {
    num: 1008,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Encrust",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  cough: {
    num: 1009,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Cough",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  neutralise: {
    num: 1010,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Neutralise",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  machinewash: {
    num: 1011,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Machine Wash",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  dig: {
    num: 1012,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Dig",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  flail: {
    num: 1013,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Flail",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  curl: {
    num: 1014,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Curl",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  plasmaburst: {
    num: 1015,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Plasma Burst",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  suitandboot: {
    num: 1016,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Suit And Boot",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  flair: {
    num: 1017,
    accuracy: 90,
    basePower: 75,
    category: "Physical",
    name: "Flair",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  blindswing: {
    num: 1018,
    accuracy: 90,
    basePower: 75,
    category: "Physical",
    name: "Blind Swing",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  gooeydischarge: {
    num: 1019,
    accuracy: 95,
    basePower: 78,
    category: "Physical",
    name: "Gooey Discharge",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  mope: {
    num: 1020,
    accuracy: 95,
    basePower: 78,
    category: "Physical",
    name: "Mope",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  torch: {
    num: 1021,
    accuracy: 95,
    basePower: 78,
    category: "Physical",
    name: "Torch",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  vaporize: {
    num: 1022,
    accuracy: 95,
    basePower: 78,
    category: "Physical",
    name: "Vaporize",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  drowse: {
    num: 1023,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Drowse",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  caress: {
    num: 1024,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Caress",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  ouija: {
    num: 1025,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Ouija",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  jab: {
    num: 1026,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Jab",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  swing: {
    num: 1027,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Swing",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  nodoff: {
    num: 1028,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "Nod Off",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  engulf: {
    num: 1029,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "Engulf",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  newwave: {
    num: 1030,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "New Wave",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  thaw: {
    num: 1031,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "Thaw",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  bunt: {
    num: 1032,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "Bunt",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  punked: {
    num: 1033,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "Punked",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  shadowpuppet: {
    num: 1034,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "Shadow Puppet",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  wedgie: {
    num: 1035,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Wedgie",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  flutter: {
    num: 1036,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Flutter",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  selfie: {
    num: 1037,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Selfie",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  rush: {
    num: 1038,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Rush",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  beam: {
    num: 1039,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Beam",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  suck: {
    num: 1040,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Suck",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  mutate: {
    num: 1041,
    accuracy: 95,
    basePower: 105,
    category: "Physical",
    name: "Mutate",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  legsweep: {
    num: 1042,
    accuracy: 95,
    basePower: 108,
    category: "Physical",
    name: "Leg Sweep",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  delouse: {
    num: 1043,
    accuracy: 95,
    basePower: 110,
    category: "Physical",
    name: "Delouse",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  vapefume: {
    num: 1044,
    accuracy: 95,
    basePower: 110,
    category: "Physical",
    name: "Vape Fume",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  fiercelunge: {
    num: 1045,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Fierce Lunge",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  fireball: {
    num: 1046,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Fire Ball",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  brainfreeze: {
    num: 1047,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Brain Freeze",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  dinnertime: {
    num: 1048,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Dinner Time",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  outpour: {
    num: 1049,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Outpour",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  ascend: {
    num: 1050,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Ascend",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  immunization: {
    num: 1051,
    accuracy: 95,
    basePower: 122,
    category: "Physical",
    name: "Immunization",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  biokinesis: {
    num: 1052,
    accuracy: 95,
    basePower: 122,
    category: "Physical",
    name: "Biokinesis",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  mangle: {
    num: 1053,
    accuracy: 95,
    basePower: 130,
    category: "Physical",
    name: "Mangle",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  unleash: {
    num: 1054,
    accuracy: 95,
    basePower: 140,
    category: "Physical",
    name: "Unleash",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  slumber: {
    num: 1055,
    accuracy: 95,
    basePower: 45,
    category: "Physical",
    name: "Slumber",
    shortDesc: "No additional effect.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  sneeze: {
    num: 1056,
    accuracy: 95,
    basePower: 45,
    category: "Physical",
    name: "Sneeze",
    shortDesc: "No additional effect.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  poke: {
    num: 1057,
    accuracy: 95,
    basePower: 45,
    category: "Physical",
    name: "Poke",
    shortDesc: "No additional effect.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  slam: {
    num: 1058,
    accuracy: 95,
    basePower: 45,
    category: "Physical",
    name: "Slam",
    shortDesc: "No additional effect.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  solidify: {
    num: 1059,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Solidify",
    shortDesc: "No additional effect.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  spar: {
    num: 1060,
    accuracy: 95,
    basePower: 55,
    category: "Physical",
    name: "Spar",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  kick: {
    num: 1061,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Kick",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  vomit: {
    num: 1062,
    accuracy: 95,
    basePower: 62,
    category: "Physical",
    name: "Vomit",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  dropout: {
    num: 1063,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Drop Out",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  stonegaze: {
    num: 1064,
    accuracy: 95,
    basePower: 70,
    category: "Physical",
    name: "Stone Gaze",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  guillotine: {
    num: 1065,
    accuracy: 95,
    basePower: 70,
    category: "Physical",
    name: "Guillotine",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  party: {
    num: 1066,
    accuracy: 95,
    basePower: 70,
    category: "Physical",
    name: "Party",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  nail: {
    num: 1067,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Nail",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  crewcut: {
    num: 1068,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Crew Cut",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  crush: {
    num: 1069,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Crush",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  servingup: {
    num: 1070,
    accuracy: 90,
    basePower: 95,
    category: "Physical",
    name: "Serving Up",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  snooze: {
    num: 1071,
    accuracy: 90,
    basePower: 98,
    category: "Physical",
    name: "Snooze",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  shrinkinggas: {
    num: 1072,
    accuracy: 90,
    basePower: 98,
    category: "Physical",
    name: "Shrinking Gas",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  claw: {
    num: 1073,
    accuracy: 90,
    basePower: 106,
    category: "Physical",
    name: "Claw",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  darkvoid: {
    num: 1074,
    accuracy: 90,
    basePower: 108,
    category: "Physical",
    name: "Dark Void",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock",
    viable: true
  },
  nickelanddime: {
    num: 1075,
    accuracy: 90,
    basePower: 110,
    category: "Physical",
    name: "Nickel And Dime",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  vaccinate: {
    num: 1076,
    accuracy: 90,
    basePower: 110,
    category: "Physical",
    name: "Vaccinate",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  rollingstone: {
    num: 1077,
    accuracy: 90,
    basePower: 112,
    category: "Physical",
    name: "Rolling Stone",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  hydroblast: {
    num: 1078,
    accuracy: 95,
    basePower: 115,
    category: "Physical",
    name: "Hydro Blast",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  antbite: {
    num: 1079,
    accuracy: 95,
    basePower: 115,
    category: "Physical",
    name: "Ant Bite",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  straightedge: {
    num: 1080,
    accuracy: 95,
    basePower: 115,
    category: "Physical",
    name: "Straight Edge",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  goldentouch: {
    num: 1081,
    accuracy: 90,
    basePower: 130,
    category: "Physical",
    name: "Golden Touch",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  suplex: {
    num: 1082,
    accuracy: 95,
    basePower: 135,
    category: "Physical",
    name: "Suplex",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  brand: {
    num: 1083,
    accuracy: 95,
    basePower: 55,
    category: "Physical",
    name: "Brand",
    shortDesc: "No additional effect.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  hug: {
    num: 1084,
    accuracy: 95,
    basePower: 55,
    category: "Physical",
    name: "Hug",
    shortDesc: "No additional effect.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  cellsplitter: {
    num: 1085,
    accuracy: 95,
    basePower: 55,
    category: "Physical",
    name: "Cell Splitter",
    shortDesc: "No additional effect.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  soggykiss: {
    num: 1086,
    accuracy: 90,
    basePower: 65,
    category: "Physical",
    name: "Soggy Kiss",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  scrunch: {
    num: 1087,
    accuracy: 90,
    basePower: 65,
    category: "Physical",
    name: "Scrunch",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  crease: {
    num: 1088,
    accuracy: 90,
    basePower: 65,
    category: "Physical",
    name: "Crease",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  burn: {
    num: 1089,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Burn",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  reminisce: {
    num: 1090,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Reminisce",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  icytouch: {
    num: 1091,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Icy Touch",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  bluespray: {
    num: 1092,
    accuracy: 95,
    basePower: 70,
    category: "Physical",
    name: "Blue Spray",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  erase: {
    num: 1093,
    accuracy: 95,
    basePower: 70,
    category: "Physical",
    name: "Erase",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  redmist: {
    num: 1094,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Red Mist",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  shatter: {
    num: 1095,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Shatter",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  smooch: {
    num: 1096,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Smooch",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  lasso: {
    num: 1097,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Lasso",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  orangeshower: {
    num: 1098,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Orange Shower",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  fangrage: {
    num: 1099,
    accuracy: 95,
    basePower: 91,
    category: "Physical",
    name: "Fang Rage",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  deathstare: {
    num: 1100,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "Death Stare",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  greenblur: {
    num: 1101,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Green Blur",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  descale: {
    num: 1102,
    accuracy: 95,
    basePower: 105,
    category: "Physical",
    name: "Descale",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  boilsqueeze: {
    num: 1103,
    accuracy: 95,
    basePower: 105,
    category: "Physical",
    name: "Boil Squeeze",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  piercingstare: {
    num: 1104,
    accuracy: 95,
    basePower: 108,
    category: "Physical",
    name: "Piercing Stare",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  monetize: {
    num: 1105,
    accuracy: 95,
    basePower: 108,
    category: "Physical",
    name: "Monetize",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  stockcrash: {
    num: 1106,
    accuracy: 90,
    basePower: 110,
    category: "Physical",
    name: "Stock Crash",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  quickdraw: {
    num: 1107,
    accuracy: 95,
    basePower: 110,
    category: "Physical",
    name: "Quick Draw",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  purplesquirt: {
    num: 1108,
    accuracy: 95,
    basePower: 110,
    category: "Physical",
    name: "Purple Squirt",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  moodkill: {
    num: 1109,
    accuracy: 95,
    basePower: 113,
    category: "Physical",
    name: "Mood Kill",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  rootdown: {
    num: 1110,
    accuracy: 95,
    basePower: 113,
    category: "Physical",
    name: "Root Down",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  slobber: {
    num: 1111,
    accuracy: 95,
    basePower: 115,
    category: "Physical",
    name: "Slobber",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  letitgo: {
    num: 1112,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Let It Go",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  supernova: {
    num: 1113,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Super Nova",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  rainbow: {
    num: 1114,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Rain Bow",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  exofragment: {
    num: 1115,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Exo Fragment",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  signautograph: {
    num: 1116,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Sign Autograph",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  ironout: {
    num: 1117,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Iron Out",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  nibble: {
    num: 1118,
    accuracy: 95,
    basePower: 45,
    category: "Physical",
    name: "Nibble",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  cut: {
    num: 1119,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Cut",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  melt: {
    num: 1120,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Melt",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  comb: {
    num: 1121,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Comb",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  probe: {
    num: 1122,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Probe",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  clarity: {
    num: 1123,
    accuracy: 95,
    basePower: 70,
    category: "Physical",
    name: "Clarity",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  blowdry: {
    num: 1124,
    accuracy: 95,
    basePower: 75,
    category: "Physical",
    name: "Blow Dry",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  snippet: {
    num: 1125,
    accuracy: 95,
    basePower: 75,
    category: "Physical",
    name: "Snippet",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  cuttinggaze: {
    num: 1126,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Cutting Gaze",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  shave: {
    num: 1127,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Shave",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  mindrage: {
    num: 1128,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Mind Rage",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  stitch: {
    num: 1129,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Stitch",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  scratchingpost: {
    num: 1130,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Scratching Post",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  transplant: {
    num: 1131,
    accuracy: 95,
    basePower: 92,
    category: "Physical",
    name: "Transplant",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  defragment: {
    num: 1132,
    accuracy: 95,
    basePower: 92,
    category: "Physical",
    name: "Defragment",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  made100cotton: {
    num: 1133,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Made 100% Cotton",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  invasion: {
    num: 1134,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Invasion",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  clawsout: {
    num: 1135,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Claws Out",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  boneextract: {
    num: 1136,
    accuracy: 95,
    basePower: 106,
    category: "Physical",
    name: "Bone Extract",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  legislate: {
    num: 1137,
    accuracy: 95,
    basePower: 107,
    category: "Physical",
    name: "Legislate",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  wingblast: {
    num: 1138,
    accuracy: 95,
    basePower: 107,
    category: "Physical",
    name: "Wing Blast",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  reboot: {
    num: 1139,
    accuracy: 95,
    basePower: 108,
    category: "Physical",
    name: "Reboot",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  effetecharm: {
    num: 1140,
    accuracy: 95,
    basePower: 110,
    category: "Physical",
    name: "Effete Charm",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  mindmeld: {
    num: 1141,
    accuracy: 95,
    basePower: 115,
    category: "Physical",
    name: "Mind Meld",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  repress: {
    num: 1142,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Repress",
    desc: "Raises the user's Attack by 1 stage.",
    shortDesc: "Raises the user's Attack by 1.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  preach: {
    num: 1143,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Preach",
    desc: "Raises the user's Attack by 1 stage.",
    shortDesc: "Raises the user's Attack by 1.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  fixerupper: {
    num: 1144,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Fixer-Upper",
    desc: "Raises the user's Attack by 1 stage.",
    shortDesc: "Raises the user's Attack by 1.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  puffytail: {
    num: 1145,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Puffy Tail",
    desc: "Raises the user's Attack by 2 stages.",
    shortDesc: "Raises the user's Attack by 2.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  salivate: {
    num: 1146,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Salivate",
    desc: "Raises the user's Attack by 2 stages.",
    shortDesc: "Raises the user's Attack by 2.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  flowerchild: {
    num: 1147,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Flower Child",
    desc: "Raises the user's Attack by 2 stages.",
    shortDesc: "Raises the user's Attack by 2.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  mortify: {
    num: 1148,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Mortify",
    desc: "Raises the user's Attack by 2 stages.",
    shortDesc: "Raises the user's Attack by 2.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  pray: {
    num: 1149,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Pray",
    desc: "Raises the user's Attack by 3 stages.",
    shortDesc: "Raises the user's Attack by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  prey: {
    num: 1150,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Prey",
    desc: "Raises the user's Attack by 3 stages.",
    shortDesc: "Raises the user's Attack by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  bloodpressure: {
    num: 1151,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Blood Pressure",
    desc: "Raises the user's Attack by 3 stages.",
    shortDesc: "Raises the user's Attack by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  sing: {
    num: 1152,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Sing",
    desc: "Raises the user's Attack by 3 stages.",
    shortDesc: "Raises the user's Attack by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  retainstrength: {
    num: 1153,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Retain Strength",
    desc: "Raises the user's Attack by 3 stages.",
    shortDesc: "Raises the user's Attack by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  aura: {
    num: 1154,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Aura",
    desc: "Raises the user's Attack by 3 stages.",
    shortDesc: "Raises the user's Attack by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  absorb: {
    num: 1155,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Absorb",
    desc: "Raises the user's Defense by 1 stage.",
    shortDesc: "Raises the user's Defense by 1.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  drool: {
    num: 1156,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Drool",
    desc: "Raises the user's Defense by 1 stage.",
    shortDesc: "Raises the user's Defense by 1.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  harden: {
    num: 1157,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Harden",
    desc: "Raises the user's Defense by 2 stages.",
    shortDesc: "Raises the user's Defense by 2.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  protect: {
    num: 1158,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Protect",
    desc: "Raises the user's Defense by 2 stages.",
    shortDesc: "Raises the user's Defense by 2.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  extort: {
    num: 1159,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Extort",
    desc: "Raises the user's Defense by 3 stages.",
    shortDesc: "Raises the user's Defense by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  defend: {
    num: 1160,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Defend",
    desc: "Raises the user's Defense by 3 stages.",
    shortDesc: "Raises the user's Defense by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  selfpromote: {
    num: 1161,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Self-Promote",
    desc: "Raises the user's Defense by 3 stages.",
    shortDesc: "Raises the user's Defense by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  denial: {
    num: 1162,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Denial",
    desc: "Raises the user's Defense by 3 stages.",
    shortDesc: "Raises the user's Defense by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  hibernate: {
    num: 1163,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Hibernate",
    desc: "Raises the user's Defense by 3 stages.",
    shortDesc: "Raises the user's Defense by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  relax: {
    num: 1164,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Relax",
    desc: "Raises the user's Speed by 1 stage.",
    shortDesc: "Raises the user's Speed by 1.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  compute: {
    num: 1165,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Compute",
    desc: "Raises the user's Speed by 2 stages.",
    shortDesc: "Raises the user's Speed by 2.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  mindread: {
    num: 1166,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Mind Read",
    desc: "Raises the user's Speed by 2 stages.",
    shortDesc: "Raises the user's Speed by 2.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  pout: {
    num: 1167,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Mind Read",
    desc: "Raises the user's Speed by 3 stages.",
    shortDesc: "Raises the user's Speed by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  belch: {
    num: 1168,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Belch",
    desc: "Raises the user's accuracy by 1 stage.",
    shortDesc: "Raises the user's accuracy by 1.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  examine: {
    num: 1169,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Examine",
    desc: "Raises the user's accuracy by 1 stage.",
    shortDesc: "Raises the user's accuracy by 1.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  distract: {
    num: 1170,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Distract",
    desc: "Raises the user's accuracy by 1 stage.",
    shortDesc: "Raises the user's accuracy by 1.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  blink: {
    num: 1171,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Blink",
    desc: "Raises the user's accuracy by 1 stage.",
    shortDesc: "Raises the user's accuracy by 1.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  sparkle: {
    num: 1172,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Sparkle",
    desc: "Raises the user's accuracy by 3 stages.",
    shortDesc: "Raises the user's accuracy by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  sneer: {
    num: 1173,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Sneer",
    desc: "Lowers the target's Attack by 1 stage.",
    shortDesc: "Lowers the target's Attack by 1.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  negativeenergy: {
    num: 1174,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Negative Energy",
    desc: "Lowers the target's Attack by 2 stages.",
    shortDesc: "Lowers the target's Attack by 2.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  humiliate: {
    num: 1175,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Humiliate",
    desc: "Lowers the target's Attack by 3 stages.",
    shortDesc: "Lowers the target's Attack by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  cry: {
    num: 1176,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Cry",
    desc: "Lowers the target's Attack by 3 stages.",
    shortDesc: "Lowers the target's Attack by 3.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  breakin: {
    num: 1177,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Break In",
    desc: "Lowers the target's Defense by 1 stage.",
    shortDesc: "Lowers the target's Defense by 1.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  weardown: {
    num: 1178,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Wear Down",
    desc: "Lowers the target's Defense by 2 stages.",
    shortDesc: "Lowers the target's Defense by 2.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  medicate: {
    num: 1179,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Medicate",
    desc: "Lowers the target's Defense by 2 stages.",
    shortDesc: "Lowers the target's Defense by 2.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  criticize: {
    num: 1180,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Criticize",
    desc: "Lowers the target's Defense by 2 stages.",
    shortDesc: "Lowers the target's Defense by 2.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  splash: {
    num: 1181,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Splash",
    desc: "Lowers the target's Defense by 3 stages.",
    shortDesc: "Lowers the target's Defense by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    viable: true
  },
  heavedown: {
    num: 1182,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Heave Down",
    desc: "Lowers the target's Defense by 3 stages.",
    shortDesc: "Lowers the target's Defense by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  wrangle: {
    num: 1183,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Wrangle",
    desc: "Lowers the target's Defense by 3 stages.",
    shortDesc: "Lowers the target's Defense by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  entertain: {
    num: 1184,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Entertain",
    desc: "Lowers the target's Defense by 3 stages.",
    shortDesc: "Lowers the target's Defense by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  dribble: {
    num: 1185,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Dribble",
    desc: "Lowers the target's Speed by 1 stage.",
    shortDesc: "Lowers the target's Speed by 1.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  lick: {
    num: 1186,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Lick",
    desc: "Lowers the target's Speed by 1 stage.",
    shortDesc: "Lowers the target's Speed by 1.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  moisten: {
    num: 1187,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Moisten",
    desc: "Lowers the target's Speed by 1 stage.",
    shortDesc: "Lowers the target's Speed by 1.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  stargaze: {
    num: 1188,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Star Gaze",
    desc: "Lowers the target's Speed by 2 stages.",
    shortDesc: "Lowers the target's Speed by 2.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  snub: {
    num: 1189,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Snub",
    desc: "Lowers the target's Speed by 2 stages.",
    shortDesc: "Lowers the target's Speed by 2.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  grossout: {
    num: 1190,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Gross Out",
    desc: "Lowers the target's Speed by 3 stages.",
    shortDesc: "Lowers the target's Speed by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  hornswoggle: {
    num: 1191,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Hornswoggle",
    desc: "Lowers the target's Speed by 3 stages.",
    shortDesc: "Lowers the target's Speed by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  provoke: {
    num: 1192,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Provoke",
    desc: "Lowers the target's accuracy by 1 stage.",
    shortDesc: "Lowers the target's accuracy by 1.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  haunt: {
    num: 1193,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Haunt",
    desc: "Lowers the target's accuracy by 1 stage.",
    shortDesc: "Lowers the target's accuracy by 1.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  lovebug: {
    num: 1194,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Love Bug",
    desc: "Lowers the target's accuracy by 2 stages.",
    shortDesc: "Lowers the target's accuracy by 2.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  staredown: {
    num: 1195,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Stare Down",
    desc: "Lowers the target's accuracy by 2 stages.",
    shortDesc: "Lowers the target's accuracy by 2.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  hypnotize: {
    num: 1196,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Hypnotize",
    desc: "Lowers the target's accuracy by 3 stages.",
    shortDesc: "Lowers the target's accuracy by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  mouthoff: {
    num: 1197,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Mouth Off",
    desc: "Lowers the target's accuracy by 3 stages.",
    shortDesc: "Lowers the target's accuracy by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  doze: {
    num: 1198,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Doze",
    desc: "Lowers the target's accuracy by 3 stages.",
    shortDesc: "Lowers the target's accuracy by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  poisonspit: {
    num: 1199,
    accuracy: 95,
    basePower: 30,
    category: "Physical",
    name: "Poison Spit",
    desc: "Hits two to five times. Each hit has 15% chance to poison the target. The user recovers all the HP lost by the target, rounded half up.",
    shortDesc: "Hits 2-5 times. Hits have 15% chance to poison.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [2, 5],
    secondary: {
      chance: 15,
      status: "psn"
    },
    target: "normal",
    type: "Normal"
  },
  vilespew: {
    num: 1200,
    accuracy: 95,
    basePower: 85,
    category: "Physical",
    name: "Vile Spew",
    desc: "Has a 50% chance to poison the user and its target.",
    shortDesc: "50% chance to poison the user and target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onHit() {
      if (this.randomChance(1, 2)) {
        for (const pokemon of this.getAllActive()) {
          pokemon.trySetStatus("psn");
        }
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  energydrain: {
    num: 1201,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Energy Drain",
    desc: "The user recovers 1/3 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 33% of the damage dealt.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 3],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  pillage: {
    num: 1202,
    accuracy: 90,
    basePower: 40,
    category: "Physical",
    name: "Pillage",
    desc: "The user recovers 1/5 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 20% of the damage dealt.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 5],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  bloodsuck: {
    num: 1203,
    accuracy: 95,
    basePower: 25,
    category: "Physical",
    name: "Blood Suck",
    desc: "Hits one to three times. Each hit has 10% chance to poison the user. The user recovers all the HP lost by the target, rounded half up.",
    shortDesc: "Hits 1-3x, each 10% self-psn, heals 100% dmg.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 3],
    drain: [1, 1],
    secondary: {
      chance: 10,
      self: {
        status: "psn"
      }
    },
    target: "normal",
    type: "Normal"
  },
  sliceanddice: {
    num: 1204,
    accuracy: 95,
    basePower: 25,
    category: "Physical",
    name: "Slice And Dice",
    desc: "Hits two to five times. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 2-5 times in one turn.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [2, 5],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  gooeycheese: {
    num: 1205,
    accuracy: 90,
    basePower: 80,
    category: "Physical",
    name: "Gooey Cheese",
    desc: "Has a 50% chance to paralyze the target.",
    shortDesc: "50% chance to paralyze the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Steel"
  },
  fossilise: {
    num: 1206,
    accuracy: 90,
    basePower: 75,
    category: "Physical",
    name: "Fossilise",
    desc: "Hits two to five times. Lowers the target's evasion by 1 stage.",
    shortDesc: "Hits 2-5 times. Lowers target's evasion by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onAfterMove(source, target, move) {
      this.boost({ evasion: -1 }, target, source);
    },
    multihit: [2, 5],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  scratchandsniff: {
    num: 1207,
    accuracy: 95,
    basePower: 40,
    basePowerCallback(pokemon, target, move) {
      if (move.hit === 3)
        return move.basePower - 10;
      return move.basePower;
    },
    category: "Physical",
    name: "Scratch And Sniff",
    desc: "Hits two to three times. The third hit deals less damage. Has a 100% chance to lower the target's Defense by 1 stage.",
    shortDesc: "Hits 2-3 times. Lowers target's Defense by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onAfterMove(source, target, move) {
      this.boost({ def: -1 }, target, source);
    },
    multihit: [2, 3],
    target: "normal",
    type: "Normal"
  },
  attention: {
    num: 1208,
    accuracy: 33,
    basePower: 0,
    category: "Status",
    name: "Attention",
    desc: "Raises the user Attack, Defense, Speed, accuracy and evasion by 1 stage.",
    shortDesc: "Raises all the user's stats by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 1,
      def: 1,
      spe: 1,
      accuracy: 1,
      evasion: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  blitz: {
    num: 1209,
    accuracy: 95,
    basePower: 140,
    category: "Physical",
    name: "Blitz",
    desc: "Raises the user's accuracy by 1 stage.",
    shortDesc: "Raises the user's accuracy by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      self: {
        boosts: {
          accuracy: 1
        }
      }
    },
    target: "normal",
    type: "Normal"
  },
  stonefists: {
    num: 1210,
    accuracy: 95,
    basePower: 45,
    basePowerCallback(pokemon, target, move) {
      if (move.hit === 2)
        return move.basePower - 15;
      return move.basePower;
    },
    category: "Physical",
    name: "Stone Fists",
    desc: "Hits one to two times. The second hit deals less damage. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-2 times. Each hit, its power decreases.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 2],
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  tombstone: {
    num: 1211,
    accuracy: 90,
    basePower: 110,
    category: "Physical",
    name: "Tombstone",
    desc: "Has a 50% chance to paralyze the target.",
    shortDesc: "50% chance to paralyze the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Normal"
  },
  bunchup: {
    num: 1212,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Bunch Up",
    desc: "Lowers the target's Attack by 2 stages and Speed by 1 stage. Raises the target's Defense by 1 stage.",
    shortDesc: "Lowers target Atk by 2, Spe by 1 but raises Def by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -2,
      spe: -1,
      def: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  sprout: {
    num: 1213,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Sprout",
    desc: "Lowers the target's Defense by 2 stages and accuracy by 1 stage. Raises the target's Attack by 1 stage.",
    shortDesc: "Lowers target Def by 2, acc by 1 but raises Atk by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -2,
      accuracy: -1,
      atk: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  implode: {
    num: 1214,
    accuracy: 100,
    basePower: 400,
    category: "Physical",
    name: "Implode",
    desc: "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
    shortDesc: "Hits adjacent Pokemon. The user faints.",
    pp: 1,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Normal"
  },
  gforce: {
    num: 1215,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "G-Force",
    desc: "Lowers the target's Speed by 1 stage. Has a 50% chance to paralyze the target.",
    shortDesc: "Lowers target's Spe by 1. 50% chance to paralyze.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -1
    },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Normal"
  },
  snotblast: {
    num: 1216,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Snot Blast",
    desc: "Has a 50% chance to poison the target.",
    shortDesc: "50% chance to poison the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "psn"
    },
    target: "normal",
    type: "Steel"
  },
  staticshock: {
    num: 1217,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Static Shock",
    desc: "Raises the user's Defense by 2 stages. Has a 50% chance to paralyze both the user and the target.",
    shortDesc: "Raises user's Def by 2. 50% chance to paralyze all.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    onHit() {
      if (this.randomChance(1, 2)) {
        for (const pokemon of this.getAllActive()) {
          pokemon.trySetStatus("par");
        }
      }
    },
    self: {
      boosts: {
        def: 2
      }
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  glitterblast: {
    num: 1218,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Glitter Blast",
    desc: "Lowers the target's accuracy and evasion by 1 stage.",
    shortDesc: "Lowers the target's accuracy and evasion by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -1,
      evasion: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  scuttle: {
    num: 1219,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Scuttle",
    desc: "Lowers the target's accuracy and evasion by 1 stage.",
    shortDesc: "Lowers the target's accuracy and evasion by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -1,
      evasion: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  spear: {
    num: 1220,
    accuracy: 70,
    basePower: 100,
    category: "Physical",
    name: "Spear",
    desc: "Has a 50% chance to paralyze the target.",
    shortDesc: "50% chance to paralyze the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Normal"
  },
  wettongue: {
    num: 1221,
    accuracy: 95,
    basePower: 15,
    basePowerCallback(pokemon, target, move) {
      const bps = [15, 20, 30, 35];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Wet Tongue",
    desc: "Hits two to four times. Power increases by 5 for each hit, up to 35. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 2-4 times. Each hit, its power rises.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [2, 4],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  regenerate: {
    num: 1222,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Regenerate",
    desc: "The user recovers 1/2 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 50% of the damage dealt.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 2],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  loveyourself: {
    num: 1223,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Love Yourself",
    desc: "Raises the user's Attack, Defense, Speed and accuracy by 1 stage. Has a 50% chance to paralyze the user.",
    shortDesc: "Raises stats (not eva) by 1. 50% chance to self-par.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      atk: 1,
      def: 1,
      spe: 1,
      accuracy: 1
    },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "self",
    type: "Normal"
  },
  fanart: {
    num: 1224,
    accuracy: 95,
    basePower: 75,
    category: "Physical",
    name: "Fan Art",
    desc: "Has a 50% chance to poison the target.",
    shortDesc: "50% chance to poison the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 70,
      status: "psn"
    },
    target: "normal",
    type: "Grass"
  },
  rickytikkitavi: {
    num: 1225,
    accuracy: 100,
    basePower: 35,
    basePowerCallback(pokemon, target, move) {
      const bps = [35, 50, 75];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Ricky Tikki Tavi",
    desc: "Hits one to three times. Power increases to 50 on the second hit and 70 to the last hit. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-3 times. Each hit, its power rises.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 3],
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  grieve: {
    num: 1226,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Grieve",
    desc: "The user recovers 1/3 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 33% of the damage dealt.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 3],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  soulsearch: {
    num: 1227,
    accuracy: 90,
    basePower: 100,
    category: "Physical",
    name: "Soul Search",
    desc: "Has a 50% chance to paralyze the target.",
    shortDesc: "50% chance to paralyze the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Normal"
  },
  certitude: {
    num: 1228,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Certitude",
    desc: "The user recovers 1/3 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 33% of the damage dealt.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 3],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  recitation: {
    num: 1229,
    accuracy: 95,
    basePower: 110,
    category: "Physical",
    name: "Recitation",
    desc: "Lowers the user's Attack by 1 stage.",
    shortDesc: "Lowers the user's Attack by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        atk: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  juice: {
    num: 1230,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Juice",
    desc: "The user recovers 1/3 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 33% of the damage dealt.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 3],
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  exfoliate: {
    num: 1231,
    accuracy: 60,
    basePower: 0,
    category: "Status",
    name: "Exfoliate",
    desc: "Raises the user's Attack, Defense and Speed by 1 stage.",
    shortDesc: "Raises the user's Atk, Def and Spe by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 1,
      def: 1,
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  chastise: {
    num: 1232,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Chastise",
    desc: "Lowers the target's accuracy and evasion by 1 stage.",
    shortDesc: "Lowers the target's accuracy and evasion by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -1,
      evasion: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  fortify: {
    num: 1233,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Fortify",
    desc: "Raises the user's Defense and accuracy by 1 stage.",
    shortDesc: "Raises the user's Defense and accuracy by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 1,
      accuracy: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  strengthen: {
    num: 1234,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Strengthen",
    desc: "Raises the user's Attack and evasion by 1 stage.",
    shortDesc: "Raises the user's Attack and evasion by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 1,
      accuracy: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  grab: {
    num: 1235,
    accuracy: 60,
    basePower: 0,
    category: "Status",
    name: "Grab",
    desc: "The user paralyzes the target and lowers its Attack by 1 stage.",
    shortDesc: "Paralyzes the target and lowers its Atk by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    status: "par",
    boosts: {
      atk: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  sixsixsix: {
    num: 1236,
    accuracy: 90,
    basePower: 80,
    category: "Physical",
    name: "Six Six Six",
    desc: "Has a 33% chance to poison the target.",
    shortDesc: "33% chance to poison the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 33,
      status: "psn"
    },
    target: "normal",
    type: "Normal"
  },
  inferno: {
    num: 1237,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Inferno",
    desc: "Hits one to three times. The attack ends if the target avoids a hit. Lowers the target's Speed by 1 stage.",
    shortDesc: "Hits 1-3 times. Lowers the target's Speed by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onAfterMove(source, target, move) {
      this.boost({ spe: -1 }, target, source);
    },
    multihit: [1, 3],
    target: "normal",
    type: "Normal"
  },
  piracy: {
    num: 1238,
    accuracy: 95,
    basePower: 70,
    category: "Physical",
    name: "Piracy",
    desc: "The user recovers 1/3 the HP lost by the target, rounded half up. The user's evasion is lowered by 1 stage.",
    shortDesc: "Recovers 33% HP from damage dealt. User's eva -1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 3],
    self: {
      boosts: {
        evasion: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  aerokinesis: {
    num: 1239,
    accuracy: 70,
    basePower: 120,
    category: "Physical",
    name: "Aerokinesis",
    desc: "Has a 50% chance to paralyze the target.",
    shortDesc: "50% chance to paralyze the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Normal"
  },
  stonewash: {
    num: 1240,
    accuracy: 95,
    basePower: 15,
    basePowerCallback(pokemon, target, move) {
      const bps = [15, 20, 30, 30];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Stone Wash",
    desc: "Hits two to four times. Power increases by 5 for each hit, up to 35. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 2-4 times. Each hit, its power rises.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [2, 4],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  tateochi: {
    num: 1241,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Tate-Ochi",
    desc: "Lowers the target's Defense and Attack by 1 stage.",
    shortDesc: "Lowers the target's Defense and Attack by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -1,
      atk: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  stalk: {
    num: 1242,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Stalk",
    desc: "Lowers the target's Defense by 1 stage.",
    shortDesc: "Lowers the target's Defense by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  traumatize: {
    num: 1243,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Traumatize",
    desc: "Lowers the target's accuracy by 3 stages.",
    shortDesc: "Lowers the target's accuracy by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  creep: {
    num: 1244,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Creep",
    desc: "Lowers the target's Attack by 2 stages.",
    shortDesc: "Lowers the target's Attack by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  sicken: {
    num: 1245,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Sicken",
    desc: "Lowers the target's Speed by 2 stages.",
    shortDesc: "Lowers the target's Speed by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  abduct: {
    num: 1246,
    accuracy: 95,
    basePower: 130,
    category: "Physical",
    name: "Abduct",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  headbutt: {
    num: 1247,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Headbutt",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  headache: {
    num: 1248,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Headache",
    desc: "Lowers the target's Defense by 3 stages.",
    shortDesc: "Lowers the target's Defense by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  skullcrash: {
    num: 1249,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Skull Crash",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  pnakoticchant: {
    num: 1250,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Pnakotic Chant",
    desc: "Raises the user's Attack by 1 stage.",
    shortDesc: "Raises the user's Attack by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  eldercurse: {
    num: 1251,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Elder Curse",
    desc: "Lowers the target's Defense by 2 stages.",
    shortDesc: "Lowers the target's Defense by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  necrosis: {
    num: 1252,
    accuracy: 95,
    basePower: 30,
    category: "Physical",
    name: "Necrosis",
    desc: "Hits two to five times. Each hit has 15% chance to poison the target. The user recovers all the HP lost by the target, rounded half up.",
    shortDesc: "Hits 2-5 times. Hits have 15% chance to poison.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onHit(target, source, move) {
      if (this.randomChance(3, 20)) {
        target.trySetStatus("psn", source, move);
      }
    },
    multihit: [2, 5],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  arcanecast: {
    num: 1253,
    accuracy: 70,
    basePower: 120,
    category: "Physical",
    name: "Arcane Cast",
    desc: "Has a 50% chance to paralyze the target.",
    shortDesc: "50% chance to paralyze the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Normal"
  },
  arkhamtrap: {
    num: 1254,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Arkham Trap",
    desc: "Lowers the target's accuracy by 3 stages.",
    shortDesc: "Lowers the target's accuracy by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -3
    },
    target: "normal",
    type: "Normal"
  },
  fourarmsmash: {
    num: 1255,
    accuracy: 95,
    basePower: 50,
    basePowerCallback(pokemon, target, move) {
      const bps = [50, 40, 25, 25];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Four-arm Smash",
    desc: "Hits one to four times. Power decreases each hit, down to 25. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-4 times. Each hit, its power drops.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 4],
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  spewfire: {
    num: 1256,
    accuracy: 95,
    basePower: 30,
    category: "Physical",
    name: "Spew Fire",
    desc: "Has a 95% chance to lower the target's Defense by 1 stage.",
    shortDesc: "95% chance to lower the target's Def by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 95,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Normal"
  },
  existentialdread: {
    num: 1257,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Existential Dread",
    desc: "Lowers the target's Defense and Speed by 2 stages and its Attack by 1 stage. Has 65% chance to paralyze the user.",
    shortDesc: "Lowers target's Def/Spe: -2; Atk: -1. 65% self-para.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    secondary: {
      chance: 65,
      self: {
        status: "par"
      }
    },
    target: "normal",
    type: "Normal"
  },
  negativespace: {
    num: 1258,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Negative Space",
    desc: "Lowers the target's accuracy by 1 stage. Raises the user's evasion by 1 stage.",
    shortDesc: "Lowers target's acc by 1. Raises user's eva by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        evasion: 1
      }
    },
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  laserstare: {
    num: 1259,
    accuracy: 80,
    basePower: 0,
    category: "Status",
    name: "Laser Stare",
    desc: "Raises the user's accuracy and Attack by 2 stages.",
    shortDesc: "Raises the user's accuracy and Attack by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: 2,
      atk: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  henpeck: {
    num: 1260,
    accuracy: 95,
    basePower: 15,
    category: "Physical",
    name: "Hen Peck",
    desc: "Hits one to eight times. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-8 times in one turn.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 8],
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  wedgieproof: {
    num: 1261,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Wedgie-Proof",
    desc: "Raises the user's Defense and evasion by 1 stage.",
    shortDesc: "Raises user's Defense and evasion by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 1,
      evasion: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  mintcondition: {
    num: 1262,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Mint Condition",
    desc: "The user recovers 3/4 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 75% of the damage dealt.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [2, 3],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  dethharmonic: {
    num: 1263,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Dethharmonic",
    desc: "Has a 25% chance to paralyze or poison the target.",
    shortDesc: "25% chance to paralyze or poison the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 25,
      onHit(target, source) {
        const result = this.random(2);
        if (result === 0) {
          target.trySetStatus("par", source);
        } else {
          target.trySetStatus("psn", source);
        }
      }
    },
    target: "normal",
    type: "Normal"
  },
  rehab: {
    num: 1264,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Rehab",
    desc: "The user recovers 1/3 the HP lost by the target, rounded half up. Has a 80% chance to raise the user's Defense by 1 stage.",
    shortDesc: "Recovers 33% HP from damage dealt. 80% +1 Def.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 3],
    secondary: {
      chance: 80,
      self: {
        boosts: {
          def: 1
        }
      }
    },
    target: "normal",
    type: "Normal"
  },
  facefisted: {
    num: 1265,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Face-Fisted",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  headbang: {
    num: 1266,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Head Bang",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  metalhorns: {
    num: 1267,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Metal Horns",
    desc: "Raises the user's Attack and Defense by 1 stage.",
    shortDesc: "Raises the user's Attack and Defense by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 1,
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  sting: {
    num: 1268,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Sting",
    desc: "Has a 90% chance to poison the target.",
    shortDesc: "90% chance to poison the target.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 90,
      status: "psn"
    },
    target: "normal",
    type: "Normal"
  },
  enrage: {
    num: 1269,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Enrage",
    desc: "Raises the user's Attack, accuracy and Speed by 1 stage.",
    shortDesc: "Raises the user's Attack, accuracy and Speed by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 1,
      accuracy: 1,
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  extremereaction: {
    num: 1270,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Extreme Reaction",
    desc: "Has a 90% chance to poison or 80% chance to paralyze the target.",
    shortDesc: "90% chance to poison or 80% chance to para target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondaries: [
      {
        chance: 90,
        status: "psn"
      },
      {
        chance: 80,
        status: "par"
      }
    ],
    target: "normal",
    type: "Normal"
  },
  tempura: {
    num: 1271,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Tempura",
    desc: "Lowers the user's Defense by 1 stage. Chance of raising the user's Attack by 1 stage up to 3 stages. 95% for the first boost then 85% for the second boost then 50% for the last boost. If one boost fails, the others won't occur.",
    shortDesc: "Lowers user's Def by 1. Chance of Atk +1, up to 3.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    onHit(target, source, move) {
      if (this.randomChance(19, 20)) {
        this.boost({ atk: 1 }, target, target);
        if (this.randomChance(17, 20)) {
          this.boost({ atk: 1 }, target, target);
          if (this.randomChance(1, 2)) {
            this.boost({ atk: 1 }, target, target);
          }
        }
      }
    },
    boosts: {
      def: -1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  delegate: {
    num: 1272,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Delegate",
    desc: "Lowers the user's Speed by 1 stage.",
    shortDesc: "Lowers the user's Speed by 1.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        spe: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  prioritize: {
    num: 1273,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Prioritize",
    desc: "Raises the user's Speed by 1 stage. Lowers the target's Defense by 1 stage.",
    shortDesc: "Raises user's Spe by 1. Lowers target's Def by 1.",
    pp: 20,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        def: 1
      }
    },
    boosts: {
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  slurp: {
    num: 1274,
    accuracy: 95,
    basePower: 75,
    category: "Physical",
    name: "Slurp",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  swat: {
    num: 1275,
    accuracy: 75,
    basePower: 105,
    category: "Physical",
    name: "Swat",
    desc: "Has a 65% chance to lower the target's Defense by 1 stage.",
    shortDesc: "65% chance to lower the target's Def by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 65,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Rock"
  },
  fireplay: {
    num: 1276,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Fire Play",
    desc: "If the target lost HP, the user takes recoil damage equal to 44% the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 44% recoil.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    recoil: [11, 25],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  combustion: {
    num: 1277,
    accuracy: 95,
    basePower: 35,
    category: "Physical",
    name: "Combustion",
    desc: "Raises the user's Attack and Speed by 1 stage.",
    shortDesc: "Raises the user's Attack and Speed by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        atk: 1,
        spe: 1
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  mock: {
    num: 1278,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Mock",
    desc: "Lowers the target's Attack, Defense and Speed by 2.",
    shortDesc: "Lowers the target's Atk, Def and Spe by 2.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -2,
      def: -2,
      spe: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  volley: {
    num: 1279,
    accuracy: 95,
    basePower: 30,
    basePowerCallback(pokemon, target, move) {
      const bps = [30, 35, 40, 45, 50];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Volley",
    desc: "Hits one to five times. Power increases by 5 for each hit, up to 50. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-5 times. Each hit, its power rises.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 5],
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  pseudopodsmash: {
    num: 1280,
    accuracy: 85,
    basePower: 100,
    category: "Physical",
    name: "Pseudopod Smash",
    desc: "Lowers the target's Speed by 1 stage.",
    shortDesc: "Lowers the target's Speed by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  osmosis: {
    num: 1281,
    accuracy: 80,
    basePower: 80,
    category: "Physical",
    name: "Osmosis",
    desc: "The user recovers 1/3 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 33% of the damage dealt.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [3, 4],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  dragoncall: {
    num: 1282,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Dragon Call",
    desc: "Raises the user's Attack by 2 stages. Lowers the target's Defense by 2 stages.",
    shortDesc: "Raises user's Atk by 2. Lowers target's Def by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        atk: 2
      }
    },
    boosts: {
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  divingshot: {
    num: 1283,
    accuracy: 90,
    basePower: 50,
    category: "Physical",
    name: "Diving Shot",
    desc: "Lowers the target's accuracy by 1 stage.",
    shortDesc: "Lowers the target's accuracy by 1.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  lightningbolt: {
    num: 1284,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Lightning Bolt",
    desc: "Has a 50% chance to paralyze the target.",
    shortDesc: "50% chance to paralyze the target.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Steel"
  },
  frostbolt: {
    num: 1285,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Frost Bolt",
    desc: "Lowers the target's Speed and Defense by 1 stage.",
    shortDesc: "Lowers the target's Speed and Defense by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      spe: -2,
      def: -1
    },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  venomousbite: {
    num: 1286,
    accuracy: 90,
    basePower: 50,
    category: "Physical",
    name: "Venomous Bite",
    desc: "Has a 33% to paralyze or poison the target.",
    shortDesc: "33% to paralyze or poison the target.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 33,
      onHit(target, source) {
        const result = this.random(2);
        if (result === 0) {
          target.trySetStatus("par", source);
        } else {
          target.trySetStatus("psn", source);
        }
      }
    },
    target: "normal",
    type: "Steel"
  },
  constrict: {
    num: 1287,
    accuracy: 75,
    basePower: 90,
    category: "Physical",
    name: "Constrict",
    desc: "Lowers the target's Speed by 1. Has a 60% chance to paralyze the target.",
    shortDesc: "Lowers target's Spe by 1. 66% chance to paralyze.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      spe: -1
    },
    secondary: {
      chance: 66,
      status: "par"
    },
    target: "normal",
    type: "Steel"
  },
  hermeticallysealed: {
    num: 1288,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Hermetically Sealed",
    desc: "Raises the user's Defense by 3 stages. Lowers the user's Speed by 1 stage.",
    shortDesc: "Raises user's Def by 3. Lowers user's Spe by 1.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 3,
      spe: -1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  eventhorizon: {
    num: 1289,
    accuracy: 30,
    basePower: 170,
    category: "Physical",
    name: "Event Horizon",
    desc: "Raises the user's Speed by 1 stage.",
    shortDesc: "Raises the user's Speed by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        spe: 1
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  holidayspirit: {
    num: 1290,
    accuracy: 50,
    basePower: 0,
    category: "Status",
    name: "Holiday Spirit",
    desc: "Raises the user's Attack, Defense and Speed by 3 stages.",
    shortDesc: "Raises the user's Atk, Def and Spe by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3,
      def: 3,
      spe: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  naughtyornice: {
    num: 1291,
    accuracy: 75,
    basePower: 65,
    category: "Physical",
    name: "Naughty or Nice",
    desc: "Hits 3 times in one turn. If the target lost HP, the user takes recoil damage equal to 19% of the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Hits 3 times in one turn. Has 19% recoil.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: 3,
    recoil: [19, 100],
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  waft: {
    num: 1292,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Waft",
    desc: "Has a 18% chance to lower the target's Speed by 1 stage.",
    shortDesc: "75% chance to lower the target's Speed by 1.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 75,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Grass"
  },
  powerpose: {
    num: 1293,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Power Pose",
    desc: "Raises the user's Attack by 2 stages.",
    shortDesc: "Raises the user's Attack by 2.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  gnaw: {
    num: 1294,
    accuracy: 95,
    basePower: 30,
    category: "Physical",
    name: "Gnaw",
    desc: "Hits three times in one turn. The user recovers 1/4 the HP lost by the target from each hit, rounded half up. Lowers the user's evasion by 1 stage per hit.",
    shortDesc: "Hits 3 times. User recovers 25% and -1 eva per hit.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onHit(target, source) {
      this.boost({ evasion: -1 }, source, source);
    },
    drain: [1, 4],
    multihit: 3,
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  squeak: {
    num: 1295,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Squeak",
    desc: "Raises the user's accuracy by 1 stage. Lowers the target's accuracy by 1 stage.",
    shortDesc: "Raises user's acc by 1. Lowers target's acc by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        accuracy: 1
      }
    },
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  upbeat: {
    num: 1296,
    accuracy: 75,
    basePower: 90,
    category: "Physical",
    name: "Upbeat",
    desc: "Raises the user's Speed and Attack by 1 stage.",
    shortDesc: "Raises the user's Speed and Attack by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        spe: 1,
        atk: 1
      }
    },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  downbeat: {
    num: 1297,
    accuracy: 90,
    basePower: 50,
    category: "Physical",
    name: "Downbeat",
    desc: "Lowers the target's Defense by 1 stage.",
    shortDesc: "Lowers the target's Defense by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      def: -1
    },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  thunderousbarrage: {
    num: 1298,
    accuracy: 95,
    basePower: 20,
    basePowerCallback(pokemon, target, move) {
      const bps = [20, 35, 50, 65];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Thunderous Barrage",
    desc: "Hits one to four times. Power increases up to 65. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-4 times. Each hit, its power rises.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 4],
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  cower: {
    num: 1299,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Cower",
    desc: "Lowers the target's Defense and evasion by 1 stage.",
    shortDesc: "Lowers the target's Defense and evasion by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -1,
      evasion: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  piteouswretch: {
    num: 1300,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Piteous Wretch",
    desc: "Lowers the target's Speed and Attack by 1 stage.",
    shortDesc: "Lowers the target's Speed and Attack by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -1,
      atk: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  attraction: {
    num: 1301,
    accuracy: 80,
    basePower: 100,
    category: "Physical",
    name: "Attraction",
    desc: "Lowers the target's Attack by 1 stage. Has a 50% chance to paralyze the target.",
    shortDesc: "Lowers target's Atk by 1. 50% chance to paralyze.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      atk: -1
    },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Normal"
  },
  lovestruck: {
    num: 1302,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Love Struck",
    desc: "Has a 75% to lower the target's stats (not accuracy) by 1 stage. Has a 50% chance to paralyze the target.",
    shortDesc: "75% target's stats (not acc) -1. 50% chance para.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondaries: [
      {
        chance: 75,
        boosts: {
          def: -1,
          atk: -1,
          evasion: -1,
          spe: -1
        }
      },
      {
        chance: 50,
        status: "par"
      }
    ],
    target: "normal",
    type: "Steel"
  },
  brokenheart: {
    num: 1303,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Broken Heart",
    desc: "Lowers the target's Attack and Defense by 2 stages",
    shortDesc: "Lowers the target's Attack and Defense by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -2,
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  heartattack: {
    num: 1304,
    accuracy: 95,
    basePower: 180,
    category: "Physical",
    name: "Heart Attack",
    desc: "If the target lost HP, the user takes recoil damage equal to 11% the HP lost by the target, rounded half up, but not less than 1 HP. Has a 80% chance to paralyze the user.",
    shortDesc: "Has 11% recoil. 80% chance to paralyze the user.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    recoil: [11, 100],
    secondary: {
      chance: 80,
      self: {
        status: "par"
      }
    },
    target: "normal",
    type: "Normal"
  },
  romanticgesture: {
    num: 1305,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Romantic Gesture",
    desc: "Lowers the target's Defense and evasion by 1 stage",
    shortDesc: "Lowers the target's Defense and evasion by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -1,
      evasion: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  prominvite: {
    num: 1306,
    accuracy: 90,
    basePower: 40,
    category: "Physical",
    name: "Prom Invite",
    desc: "The user hurts itself for a 80% chance to paralyze the opposite Pokemon.",
    shortDesc: "Hurts itself for 80% chance to paralyze the foe.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onHit(target) {
      const pokemon = target.adjacentFoes()[0];
      if (this.randomChance(4, 5)) {
        pokemon.trySetStatus("par", target);
      }
    },
    secondary: null,
    target: "self",
    type: "Grass"
  },
  fetch: {
    num: 1307,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Fetch",
    desc: "Raises the user's Attack and Speed by 1 stage.",
    shortDesc: "Raises the user's Attack and Speed by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 1,
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  markterritory: {
    num: 1308,
    accuracy: 90,
    basePower: 10,
    category: "Physical",
    name: "Mark Territory",
    desc: "Lowers the target's Defense by 2 and its Speed by 1. Has a 50% chance to poison the target.",
    shortDesc: "Lowers target's Def by 2, Spe by 1. 50% chance psn.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      def: -2,
      spe: -1
    },
    secondary: {
      chance: 50,
      status: "psn"
    },
    target: "normal",
    type: "Normal"
  },
  bite: {
    num: 1309,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "Bite",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  puppyeyes: {
    num: 1310,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Puppy Eyes",
    desc: "Lowers the target's Attack by 1 stage. Raises the user's Defense by 1 stage.",
    shortDesc: "Lowers target's Atk by 1. Raises user's Def by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        def: 1
      }
    },
    boosts: {
      atk: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  universalhealthcare: {
    num: 1311,
    accuracy: 95,
    basePower: 30,
    category: "Physical",
    name: "Universal Healthcare",
    desc: "The user recovers 4/5 the HP lost by the target, rounded half up. Raises the user's Defense by 1 stage.",
    shortDesc: "User recovers 80% from the damage. Raises Def +1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [4, 5],
    self: {
      boosts: {
        def: 1
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  aboot: {
    num: 1312,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "A Boot",
    desc: "Has a 50% to paralyze or poison the target.",
    shortDesc: "50% to paralyze or poison the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      onHit(target, source) {
        const result = this.random(2);
        if (result === 0) {
          target.trySetStatus("par", source);
        } else {
          target.trySetStatus("psn", source);
        }
      }
    },
    target: "normal",
    type: "Normal"
  },
  sorry: {
    num: 1313,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Sorry!",
    desc: "Lowers the target's Attack and Speed by 1 stage.",
    shortDesc: "Lowers the target's Attack and Speed by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -1,
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  bodycheck: {
    num: 1314,
    accuracy: 90,
    basePower: 110,
    category: "Physical",
    name: "Body Check",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  charging: {
    num: 1315,
    accuracy: 90,
    basePower: 100,
    category: "Physical",
    name: "Charging",
    desc: "Raises the user's Speed and Attack by 1 stage before attacking the target.",
    shortDesc: "Raises the user's Spe and Atk by 1 before attacking.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onTryHit(target, source) {
      this.boost({ spe: 1, atk: 1 }, source, source);
    },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  trip: {
    num: 1316,
    accuracy: 90,
    basePower: 30,
    category: "Physical",
    name: "Trip",
    desc: "Paralyzes the target.",
    shortDesc: "Paralyzes the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    status: "par",
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  slash: {
    num: 1317,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "Slash",
    desc: "Has a 80% chance to lower the target's Defense by 1 stage.",
    shortDesc: "80% chance to lower the target's Defense by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 80,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Steel"
  },
  hook: {
    num: 1318,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Hook",
    desc: "Lowers the target's evasion by 2 stages and Speed by 1 stage.",
    shortDesc: "Lowers the target's eva by 2. Lowers its Spe by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      evasion: -2,
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  photosynthesize: {
    num: 1319,
    accuracy: 90,
    basePower: 2,
    category: "Physical",
    name: "Photosynthesize",
    desc: "If the target lost HP, the user takes recoil damage equal to the HP lost by the target, rounded half up, but not less than 1 HP. The user recovers 12% of the HP lost by the target, rounded half up.",
    shortDesc: "100% recoil. 95% chance to recover 12% from dmg.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onModifyMove(move, pokemon, target) {
      if (this.randomChance(95, 100)) {
        move.drain = [3, 25];
      }
    },
    recoil: [1, 1],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  anthocyanin: {
    num: 1320,
    accuracy: 50,
    basePower: 0,
    category: "Status",
    name: "Anthocyanin",
    desc: "Raises the user's Speed, Attack, Defense and evasion by 1 stage.",
    shortDesc: "Raises the user's Spe, Atk, Def and eva by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 1,
      atk: 1,
      def: 1,
      evasion: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  crystalize: {
    num: 1321,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Crystalize",
    desc: "Raises the user's Defense by 3 stages.",
    shortDesc: "Raises the user's Defense by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  gradea: {
    num: 1322,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Grade A",
    desc: "Lowers the user's Defense by 1 stage. Raises its Speed and evasion by 1 stage.",
    shortDesc: "Lowers Def by 1; Raises Spe and eva by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -1,
      spe: 1,
      evasion: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  buuurn: {
    num: 1323,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "#BUUURN!",
    desc: "Has a 75% chance to raise the user's Attack by 1 stage.",
    shortDesc: "75% chance to raise the user's Attack by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 75,
      self: {
        boosts: {
          atk: 1
        }
      }
    },
    target: "normal",
    type: "Steel"
  },
  baconated: {
    num: 1324,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    name: "Baconated",
    desc: "Hits three times. The attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. First hit has a 50% chance to lower the target's Speed, second its Evasion and last its Defense by 1 stage.",
    shortDesc: "Hits 3 times. 50% to lower Spe, eva or Def per hit.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onHit(target, source, move) {
      if (move.hit === 1 && this.randomChance(1, 2)) {
        this.boost({ spe: -1 }, target, source);
      }
      if (move.hit === 2 && this.randomChance(1, 2)) {
        this.boost({ evasion: -1 }, target, source);
      }
      if (move.hit === 3 && this.randomChance(1, 2)) {
        this.boost({ def: -1 }, target, source);
      }
    },
    multihit: 3,
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  breakfastrush: {
    num: 1325,
    accuracy: 95,
    basePower: 80,
    basePowerCallback(pokemon, target, move) {
      if (move.hit === 2)
        return move.basePower - 40;
      return move.basePower;
    },
    category: "Physical",
    name: "Breakfast Rush",
    desc: "Has a 75% chance to raises the user's Speed by 1 stage. Hits one to two times. Power decreases down to 40. The attack ends if the target avoids a hit.",
    shortDesc: "75% user's Spe +1; Hits 1-2 times, power shrinks.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onTryHit(target, source) {
      if (this.randomChance(3, 4)) {
        this.boost({ spe: 1 }, source, source);
      }
    },
    multihit: [1, 2],
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  alwaysfresh: {
    num: 1326,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Always Fresh",
    desc: "RRaises the user's Speed, Attack and evasion by 1 stage.",
    shortDesc: "Raises the user's Speed, Attack and evasion by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 1,
      atk: 1,
      evasion: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  presentportal: {
    num: 1327,
    accuracy: 50,
    basePower: 0,
    category: "Status",
    name: "Present Portal",
    desc: "Raises the user Attack, Defense, Speed, accuracy and evasion by 1 stage.",
    shortDesc: "Raises all the user's stats by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 1,
      def: 1,
      spe: 1,
      accuracy: 1,
      evasion: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  clingy: {
    num: 1328,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Clingy",
    desc: "Lowers the target's evasion by 3 stages.",
    shortDesc: "Lowers the target's evasion by 3.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      evasion: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  ticketpunch: {
    num: 1329,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Ticket Punch",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  surprisinglybuff: {
    num: 1330,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Surprisingly Buff",
    desc: "Raises the user's Attack by 2 stages. Lowers the target's evasion by 2 stages.",
    shortDesc: "Raises user's Atk by 2. Lowers target's eva by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        atk: 2
      }
    },
    boosts: {
      evasion: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  powersword: {
    num: 1331,
    accuracy: 90,
    basePower: 80,
    category: "Physical",
    name: "Power Sword",
    desc: "Lowers the target's evasion by 1 stage. has a 50% chance to paralyze the target.",
    shortDesc: "Lowers target's eva by 1. 50% chance to paralyze.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      evasion: -1
    },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Normal"
  },
  scanweakness: {
    num: 1332,
    accuracy: 80,
    basePower: 0,
    category: "Status",
    name: "Scan Weakness",
    desc: "Raises the user's accuracy and Attack by 1 stage. Has a 50% chance to raise the user's accuracy and Attack by 2 stages instead.",
    shortDesc: "Raises user's acc and Atk by 1, 50% chance by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: 1,
      atk: 1
    },
    secondary: {
      chance: 50,
      boosts: {
        accuracy: 1,
        atk: 1
      }
    },
    target: "self",
    type: "Normal"
  },
  infiltrate: {
    num: 1333,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Infiltrate",
    desc: "Raises the user's evasion by 3 stages.",
    shortDesc: "Raises the user's evasion by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      evasion: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  impersonate: {
    num: 1334,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Impersonate",
    desc: "Lowers the target's Attack, Defense, Speed and evasion by 1 stage. Has a 50% chance to raise the user's Attack, Defense, Speed and evasion by 1 stage.",
    shortDesc: "Lowers most stats by 1. 50% chance to gain them.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -1,
      def: -1,
      spe: -1,
      evasion: -1
    },
    secondary: {
      chance: 50,
      self: {
        boosts: {
          atk: 1,
          def: 1,
          spe: 1,
          evasion: 1
        }
      }
    },
    target: "normal",
    type: "Normal"
  },
  frostbite: {
    num: 1335,
    accuracy: 95,
    basePower: 75,
    category: "Physical",
    name: "Frostbite",
    desc: "Lowers the target's Speed by 2 stages.",
    shortDesc: "Lowers the target's Speed by 2.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      spe: -2
    },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  shiver: {
    num: 1336,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Shiver",
    desc: "Raises the user's evasion by 2 stages.",
    shortDesc: "Raises the user's evasion by 2.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      evasion: -2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  stickup: {
    num: 1337,
    accuracy: 90,
    basePower: 80,
    category: "Physical",
    name: "Stickup",
    desc: "Lowers the target's Attack by 1 stage. Raises the user's Attack by 1.",
    shortDesc: "Lowers target's Atk by 1. Raises user's Atk by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        atk: 1
      }
    },
    boosts: {
      atk: -1
    },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  intimidate: {
    num: 1338,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Intimidate",
    desc: "Lowers the target's Defense by 2 stages. Has a 50% chance to paralyze.",
    shortDesc: "Lowers target's Def by 2. 50% chance to paralyze.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -2
    },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Normal"
  },
  dogfight: {
    num: 1339,
    accuracy: 90,
    basePower: 30,
    basePowerCallback(pokemon, target, move) {
      if (move.hit === 5 || move.hit == 6)
        return move.basePower - 10;
      return move.basePower;
    },
    category: "Physical",
    name: "Dogfight",
    desc: "Hits one to six times. Power decreased on the two last hits, down to 20. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-6 times. 5/6th hit: its power decreases.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 6],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  focus: {
    num: 1340,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Focus",
    desc: "Raises the user's accuracy and Attack by 2 stages.",
    shortDesc: "Raises the user's accuracy and Attack by 2.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: 2,
      atk: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  weldingtorch: {
    num: 1341,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Welding Torch",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  wall: {
    num: 1342,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Wall",
    desc: "Raises the user's Defense by 3 stages.",
    shortDesc: "Raises the user's Defense by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  soulbondage: {
    num: 1343,
    accuracy: 95,
    basePower: 75,
    category: "Physical",
    name: "Soul Bondage",
    desc: "The user recovers 4/5 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 80% of the damage dealt.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [4, 5],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  soulsteal: {
    num: 1344,
    accuracy: 95,
    basePower: 30,
    category: "Physical",
    name: "Soul Steal",
    desc: "The user recovers 1/2 the HP lost by the target, rounded half up. Lowers the target's Attack, Defense and Speed by 1 stage. Has a 50% chance to raise those stats by 1 stage.",
    shortDesc: "Drains 50%. Lowers some stats. 85% to raise them.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 2],
    boosts: {
      atk: -1,
      def: -1,
      spe: -1
    },
    secondary: {
      chance: 85,
      self: {
        boosts: {
          atk: 1,
          def: 1,
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Normal"
  },
  twinflame: {
    num: 1345,
    accuracy: 95,
    basePower: 40,
    basePowerCallback(pokemon, target, move) {
      if (move.hit === 2)
        return move.basePower + 20;
      return move.basePower;
    },
    category: "Physical",
    name: "Twin Flame",
    desc: "Hits one to two times. Power increases by 20 for the last hit. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-2 times. Each hit, its power rises.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 2],
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  fury: {
    num: 1346,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Fury",
    desc: "Raises the user's Attack by 3 stages. Lowers the user's accuracy by 1 stage.",
    shortDesc: "Raises user's Atk by 3. Lowers user's acc by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3,
      accuracy: -1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  mirrorimage: {
    num: 1347,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Mirror Image",
    desc: "Raises the user's evasion by 3 stages.",
    shortDesc: "Raises the user's evasion by 3.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      evasion: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  thunderclap: {
    num: 1348,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Thunderclap",
    desc: "Lowers the target's Speed by 2 stages.",
    shortDesc: "Lowers the target's Speed by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      spe: -2
    },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  flavorpunch: {
    num: 1349,
    accuracy: 100,
    basePower: 20,
    basePowerCallback(pokemon, target, move) {
      if (move.hit >= 4 && move.hit <= 8)
        return move.basePower - 5;
      if (move.hit > 8)
        return move.basePower - 10;
      return move.basePower;
    },
    category: "Physical",
    name: "Flavor Punch",
    desc: "Hits one to ten times. Power decreases each hit, down to 15 after the 4th hit then 10 after the 8th hit. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-10 times. Each hit, its power decreases.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 10],
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  flavorcombo: {
    num: 1350,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Flavor Combo",
    desc: "Raises the user Speed, Attack, Defense, evasion and accuracy by 1 stage.",
    shortDesc: "Raises all the user's stats by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 1,
      atk: 1,
      def: 1,
      evasion: 1,
      accuracy: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  burgervolley: {
    num: 1351,
    accuracy: 100,
    basePower: 30,
    category: "Physical",
    name: "Burger Volley",
    desc: "Hits three times. The attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. First hit has a 50% chance to lower the target's Speed, second its Attack and last its Defense by 1 stage.",
    shortDesc: "Hits 3 times, each 50% chance -1 Spe, Atk or Def.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onHit(target, source, move) {
      if (move.hit === 1 && this.randomChance(1, 2)) {
        this.boost({ spe: -1 }, target, source);
      } else if (move.hit === 2 && this.randomChance(17, 20)) {
        this.boost({ atk: -1 }, target, source);
      } else if (move.hit === 3 && this.randomChance(1, 2)) {
        this.boost({ def: -1 }, target, source);
      }
    },
    multihit: 3,
    secondary: null,
    target: "normal",
    type: "Steel",
    viable: true
  },
  grillseason: {
    num: 1352,
    accuracy: 50,
    basePower: 0,
    category: "Status",
    name: "Grill Season",
    desc: "Raises the user's Attack, Defense and evasion by 2 stages. Lowers the user's Speed by 1 stage.",
    shortDesc: "Raises user's Atk/Def/eva by 2. Lowers Spe by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 2,
      def: 2,
      evasion: 2,
      spe: -1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  ideclare: {
    num: 1353,
    accuracy: 95,
    basePower: 30,
    category: "Physical",
    name: "I Declare",
    desc: "The user recovers 1/3 the HP lost by the target, rounded half up. Raises the user's Attack, Defense, Speed and Accuracy by 1 stage.",
    shortDesc: "Drains 33%. Raises user's Atk/Def/Spe/acc by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 3],
    self: {
      boosts: {
        atk: 1,
        def: 1,
        spe: 1,
        accuracy: 1
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  righteousretribution: {
    num: 1354,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Righteous Retribution",
    desc: "Lowers the target's Attack by 2 stages. Has a 50% chance to paralyze the target.",
    shortDesc: "Lowers target's Atk by 2. 50% chance to paralyze.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -2
    },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Normal"
  },
  lighttheway: {
    num: 1355,
    accuracy: 95,
    basePower: 60,
    basePowerCallback(pokemon, target, move) {
      const bps = [60, 30, 20];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Light the Way",
    desc: "Hits three times. Power decreases each hit, down to 20. The attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
    shortDesc: "Hits 3 times. Each hit, its power decreases.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: 3,
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  oxidize: {
    num: 1356,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Oxidize",
    desc: "Paralyzes the target. Lowers the target's Defense, Attack and Speed by 1 stage.",
    shortDesc: "Paralyzes target. Lowers its Def, Atk and Spe by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    status: "par",
    boosts: {
      def: -1,
      atk: -1,
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  lackofabandonment: {
    num: 1357,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Lack of Abandonment",
    desc: "Raises the user's Defense by 2 stages. Has a 95% chance to lower the target's evasion by 2 stages.",
    shortDesc: "Raises user's Def by 2. 95% chance target's eva -2.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        def: 2
      }
    },
    secondary: {
      chance: 95,
      boosts: {
        evasion: -2
      }
    },
    target: "normal",
    type: "Normal"
  },
  productivepunches: {
    num: 1358,
    accuracy: 100,
    basePower: 60,
    basePowerCallback(pokemon, target, move) {
      const bps = [60, 50, 30, 15, 10];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Productive Punches",
    desc: "Hits one to ten times. Power decreases each hit, down to 10. The attack ends if the target avoids a hit. Lowers the user's Speed by 1 stage.",
    shortDesc: "Hits 1-5 times; Power shrinks. User's Spe -1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 5],
    selfBoost: {
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Rock"
  },
  usethelight: {
    num: 1359,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Use The Light",
    desc: "Raises the user's evasion by 2 stages.",
    shortDesc: "Raises the user's evasion by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      evasion: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  jumpgood: {
    num: 1360,
    accuracy: 90,
    basePower: 115,
    category: "Physical",
    name: "Jump Good",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  stellarexplosion: {
    num: 1361,
    accuracy: 95,
    basePower: 55,
    basePowerCallback(pokemon, target, move) {
      if (move.hit === 2)
        return move.basePower - 20;
      return move.basePower;
    },
    category: "Physical",
    name: "Stellar Explosion",
    desc: "Hits one to two times. Power decreases down to 35. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-2 times. Each hit, its power decreases.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 2],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  unspokenbond: {
    num: 1362,
    accuracy: 50,
    basePower: 0,
    category: "Status",
    name: "Unspoken Bond",
    desc: "Raises the user's Speed, Attack, Defense and evasion by 2 stages.",
    shortDesc: "Raises the user's Spe, Atk, Def and eva by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 2,
      atk: 2,
      def: 2,
      evasion: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  sonicsquawk: {
    num: 1363,
    accuracy: 90,
    basePower: 110,
    category: "Physical",
    name: "Sonic Squawk",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  perchandpoop: {
    num: 1364,
    accuracy: 90,
    basePower: 50,
    category: "Physical",
    name: "Perch And Poop",
    shortDesc: "Hits twice. 95% chance to lower target's Def by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 95,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Normal"
  },
  stone: {
    num: 1365,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Stone",
    shortDesc: "No additional effect.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  gatherbythefire: {
    num: 1366,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Gather By The Fire",
    desc: "Raises the user's Attack by 2 stages and Defense by 1 stage.",
    shortDesc: "Raises the user's Atk by 2 and Def by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 2,
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  essedumhitandrun: {
    num: 1367,
    accuracy: 90,
    basePower: 105,
    category: "Physical",
    name: "Essedum Hit-And-Run",
    desc: "Raises the user's Speed by 1 stage.",
    shortDesc: "Raises the user's Speed by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        spe: 1
      }
    },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  shieldwall: {
    num: 1368,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Shield Wall",
    desc: "Raises the user's Defense by 3 stages.",
    shortDesc: "Raises the user's Defense by 3.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  stockup: {
    num: 1369,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Stock Up",
    desc: "Raises the user's Defense by 1 stage.",
    shortDesc: "Raises the user's Defense by 1.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  pricegouge: {
    num: 1370,
    accuracy: 85,
    basePower: 70,
    category: "Physical",
    name: "Price Gouge",
    desc: "Lowers the target's accuracy by 1 stage.",
    shortDesc: "Lowers the target's accuracy by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  arbitrage: {
    num: 1371,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Arbit-RAGE",
    desc: "Raises the user's Attack by 3 stages.",
    shortDesc: "Raises the user's Attack by 3.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  astronomicaldeal: {
    num: 1372,
    accuracy: 95,
    basePower: 27,
    category: "Physical",
    name: "Astronomical Deal",
    desc: "Hits one to five times. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-5 times in one turn.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 5],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  lifestory: {
    num: 1373,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Life Story",
    desc: "Lowers the target's Speed by 1 stage.",
    shortDesc: "Lowers the target's Speed by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  listicle: {
    num: 1374,
    accuracy: 100,
    basePower: 25,
    basePowerCallback(pokemon, target, move) {
      if (move.hit === 4)
        return move.basePower - 10;
      return move.basePower;
    },
    category: "Physical",
    name: "Listicle",
    desc: "Hits one to four times. Last hit has 15 base power. The attack ends if the target avoids a hit. Has a 80% chance to paralyze the target.",
    shortDesc: "Hits 1-4 times. 80% chance to paralyze the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onAfterMove(source, target, move) {
      if (this.randomChance(4, 5)) {
        target.trySetStatus("par");
      }
    },
    multihit: [1, 4],
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  collaborate: {
    num: 1375,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Collaborate",
    desc: "Hits one to two times. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-2 times in one turn.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 2],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  apologyvideo: {
    num: 1376,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Apology Video",
    desc: "Lowers the user's Defense by 1 stage. Raises the user's evasion by 1 stage.",
    shortDesc: "Lowers user's Def by 1. Raises user's eva by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -1,
      evasion: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  nap: {
    num: 1377,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Nap",
    desc: "The user recovers 4/5 the HP lost by the target, rounded half up. Lowers the user's evasion by 1 stage.",
    shortDesc: "Recovers 80% of the dmg. Lowers user's eva by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [4, 5],
    self: {
      boosts: {
        evasion: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  noxiousfumes: {
    num: 1378,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Noxious Fumes",
    shortDesc: "Poisons the target.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    status: "psn",
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  kegstand: {
    num: 1379,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Kegstand",
    desc: "Lowers the user's accuracy by 1 stage. Raises the user's Attack by 3. Poisons the user.",
    shortDesc: "Lowers user's acc by 1. Raises Atk by 3. Psn user.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      accuracy: -1,
      atk: 3
    },
    status: "psn",
    secondary: null,
    target: "self",
    type: "Normal"
  },
  funandgames: {
    num: 1380,
    accuracy: 90,
    basePower: 110,
    category: "Physical",
    name: "Fun and Games",
    desc: "Lowers the user's and target's accuracy by 1 stage.",
    shortDesc: "Lowers the user's and target's accuracy by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        accuracy: -1
      }
    },
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  getdownmrpresident: {
    num: 1381,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Get Down Mr President",
    desc: "Lowers the user's evasion by 1 stage. Raises the user's Defense by 3.",
    shortDesc: "Lowers user's eva by 1. Raises user's Def by 3.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      evasion: -1,
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  bodytackle: {
    num: 1382,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Body Tackle",
    desc: "Lowers the target's Speed by 1 stage.",
    shortDesc: "Lowers the target's Speed by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  espionage: {
    num: 1383,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Espionage",
    desc: "Raises the user's evasion and Speed by 1 stage.",
    shortDesc: "Raises the user's evasion and Speed by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      evasion: 1,
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  covertoperation: {
    num: 1384,
    accuracy: 95,
    basePower: 130,
    category: "Physical",
    name: "Covert Operation",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  electroshock: {
    num: 1385,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Electro Shock",
    desc: "Lowers the target's Defense by 2 stages.",
    shortDesc: "Lowers the target's Defense by 2.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  zap: {
    num: 1386,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Zap",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  fastcharging: {
    num: 1387,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Fast Charging",
    desc: "Raises the user's evasion, Defense and Attack by 3 stages.",
    shortDesc: "Raises the user's eva, Def and Atk by 3.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      evasion: 3,
      def: 3,
      atk: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  electricslide: {
    num: 1388,
    accuracy: 95,
    basePower: 20,
    category: "Physical",
    name: "Electric Slide",
    desc: "Hits one to eight times. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-8 times in one turn.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 8],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  seethetruth: {
    num: 1389,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "See The Truth",
    desc: "Has a 80% chance to paralyze or 90% chance to poison the target.",
    shortDesc: "80% chance to para or 90% chance to poison target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondaries: [
      {
        chance: 80,
        status: "par"
      },
      {
        chance: 90,
        status: "psn"
      }
    ],
    target: "normal",
    type: "Steel"
  },
  deathcrystal: {
    num: 1390,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Death Crystal",
    desc: "Raises the user's evasion and Defense by 3 stages.",
    shortDesc: "Raises the user's evasion and Defense by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      evasion: 3,
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  salesstrike: {
    num: 1391,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Sales Strike",
    desc: "Raises the user's Attack and Defense by 1 stage.",
    shortDesc: "Raises the user's Attack and Defense by 1.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 1,
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  workforcewallop: {
    num: 1392,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Workforce Wallop",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  leadershiplariat: {
    num: 1393,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Leadership Lariat",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  capitalismcrush: {
    num: 1394,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Capitalism Crush",
    desc: "Lowers the target's Defense by 2 stages.",
    shortDesc: "Lowers the target's Defense by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  familytree: {
    num: 1395,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Family Tree",
    shortDesc: "Paralyzes the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    status: "par",
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  cameraflash: {
    num: 1396,
    accuracy: 95,
    basePower: 5,
    category: "Physical",
    name: "Camera Flash",
    desc: "Lowers the target's accuracy by 2 stages.",
    shortDesc: "Lowers the target's accuracy by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  gigaphone: {
    num: 1397,
    accuracy: 95,
    basePower: 130,
    category: "Physical",
    name: "Gigaphone",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  altitudesickness: {
    num: 1398,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Altitude Sickness",
    desc: "Poisons the target. Lowers the target Defense and Speed by 1 stage.",
    shortDesc: "Poisons the target. Lowers its Def and Spe by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    status: "psn",
    boosts: {
      def: 1,
      spe: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  entitlement: {
    num: 1399,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Entitlement",
    desc: "Lowers the target's Speed and evasion by 1 stage. Raises the user's Speed and evasion by 1 stage.",
    shortDesc: "Lowers target's Spe and eva by 1. +1 to said stats.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        spe: 1,
        evasion: 1
      }
    },
    boosts: {
      spe: -1,
      evasion: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  royalprerogative: {
    num: 1400,
    accuracy: 95,
    basePower: 15,
    category: "Physical",
    name: "Royal Prerogative",
    desc: "Hits one to two times. The attack ends if the target avoids a hit. The user recovers 4/5 the HP lost by the target, rounded half up. Lowers the target's Attack and Defense by 1 stage. Raises the user's Attack and Defense by 1 stage.",
    shortDesc: "Hits 1-2x. Drains 80% and Atk/Def -1; User's +1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onAfterMove(source, target, move) {
      this.boost({ atk: -1, def: -1 }, target, source);
    },
    multihit: [1, 2],
    selfBoost: {
      boosts: {
        atk: 1,
        def: 1
      }
    },
    drain: [4, 5],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  wickedfruit: {
    num: 1401,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Wicked Fruit",
    desc: "has a 50% chance to paralyze the target.",
    shortDesc: "50% chance to paralyze the target.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Grass"
  },
  sceptresmash: {
    num: 1402,
    accuracy: 90,
    basePower: 120,
    category: "Physical",
    name: "Sceptre Smash",
    desc: "Lowers the target's accuracy by 1 stage.",
    shortDesc: "Lowers the target's accuracy by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  timedilation: {
    num: 1403,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Time Dilation",
    desc: "Raises the user's evasion by 1 stage. Lowers the target's accuracy by 1 stage.",
    shortDesc: "Raises user's eva by 1. Lowers target's acc by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        evasion: 1
      }
    },
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  timehealsall: {
    num: 1404,
    accuracy: 95,
    basePower: 15,
    category: "Physical",
    name: "Time Heals All",
    desc: "The user recovers 4/5 the HP lost by the target, rounded half up. Raises the user's Speed by 1 stage.",
    shortDesc: "Recovers 80% of dmg. Raises user's Speed by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        spe: 1
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  bighandlittlehand: {
    num: 1405,
    accuracy: 80,
    basePower: 120,
    basePowerCallback(pokemon, target, move) {
      if (move.hit === 2)
        return move.basePower - 90;
      return move.basePower;
    },
    category: "Physical",
    name: "Big Hand, Little Hand",
    desc: "Hits one to two times. The second hit deals way less damage. The attack ends if the target avoids a hit.",
    shortDesc: "Hits twice. Each hit, its power decreases.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  timewaitsfornoone: {
    num: 1406,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Time Waits For No One",
    desc: "Paralyzes the target.",
    shortDesc: "Paralyzes the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    status: "par",
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  toxicmetalparticles: {
    num: 1407,
    accuracy: 90,
    basePower: 50,
    category: "Physical",
    name: "Toxic Metal Particles",
    desc: "Hits twice. If the target lost HP, the user takes recoil damage equal to 20% the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Hits twice. Has 20% recoil.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: 2,
    recoil: [1, 5],
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  toxicchromiumspit: {
    num: 1408,
    accuracy: 95,
    basePower: 70,
    category: "Physical",
    name: "Toxic Chromium Spit",
    desc: "Has a 95% chance to poison the target. Has a 90% chance to poison the user.",
    shortDesc: "95% chance to psn target. 90% chance to psn user.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondaries: [
      {
        chance: 95,
        status: "psn"
      },
      {
        chance: 90,
        self: {
          status: "psn"
        }
      }
    ],
    target: "normal",
    type: "Rock"
  },
  magicdoor: {
    num: 1409,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Magic Door",
    desc: "Raises the user's Speed and evasion by 3 stages.",
    shortDesc: "Raises the user's Speed and evasion by 3.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 3,
      evasion: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  sugarhoof: {
    num: 1410,
    accuracy: 90,
    basePower: 110,
    category: "Physical",
    name: "Sugar Hoof",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  theend: {
    num: 1411,
    accuracy: 90,
    basePower: 125,
    category: "Physical",
    name: "The End",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  stripdance: {
    num: 1412,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Strip Dance",
    desc: "Raises the user's evasion, Defense and Speed by 3 stages.",
    shortDesc: "Raises the user's eva, Def and Spe by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      evasion: 3,
      def: 3,
      spe: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  decoyline: {
    num: 1413,
    accuracy: 100,
    basePower: 20,
    basePowerCallback(pokemon, target, move) {
      const bps = [20, 20, 20, 20, 20, 25, 30, 30];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Decoy Line",
    desc: "Hits four to eight times. Power increases up to 30. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 4-8 times. Each hit, its power increases.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [4, 8],
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  squidcostume: {
    num: 1414,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Squid Costume",
    desc: "Raises the user's Speed and evasion by 3 stages.",
    shortDesc: "Raises the user's Speed and evasion by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 3,
      evasion: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  canofvarnish: {
    num: 1415,
    accuracy: 95,
    basePower: 3,
    category: "Physical",
    name: "Can of Varnish",
    desc: "Raises the user's Defense by 3 stages.",
    shortDesc: "Raises the user's Defense by 3.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  gloryofdeath: {
    num: 1416,
    accuracy: 90,
    basePower: 120,
    category: "Physical",
    name: "Glory of Death",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  crueltyfreedonuts: {
    num: 1417,
    accuracy: 95,
    basePower: 40,
    category: "Physical",
    name: "Cruelty Free Donuts",
    desc: "Hits one to four times. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-4 times in one turn.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 4],
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  wildfire: {
    num: 1418,
    accuracy: 90,
    basePower: 110,
    category: "Physical",
    name: "Wildfire",
    desc: "75% chance to lower the target's Attack by 2 stages.",
    shortDesc: "75% chance to lower the target's Attack by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 75,
      boosts: {
        atk: -2
      }
    },
    target: "normal",
    type: "Rock"
  },
  elementalstrike: {
    num: 1419,
    accuracy: 100,
    basePower: 30,
    basePowerCallback(pokemon, target, move) {
      if (move.hit > 1)
        return move.basePower - 5;
      return move.basePower;
    },
    category: "Physical",
    name: "Elemental Strike",
    desc: "Hits two to four times. Power decreases down to 25. The attack ends if the target avoids a hit. Raises the user's Defense by 2 stages.",
    shortDesc: "Hits 2-4 times. Each hit, power shrinks, +2 Def.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [2, 4],
    selfBoost: {
      boosts: {
        def: 2
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  airs: {
    num: 1420,
    accuracy: 75,
    basePower: 120,
    category: "Physical",
    name: "Airs",
    desc: "Has a 90% chance to lower the target's Defense by 2 stages.",
    shortDesc: "90% chance to lower target's Defense by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 90,
      boosts: {
        def: -2
      }
    },
    target: "normal",
    type: "Steel"
  },
  horseray: {
    num: 1421,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Horse Ray",
    desc: "Has a 95% chance to paralyze the target.",
    shortDesc: "95% chance to paralyze the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 95,
      status: "par"
    },
    target: "normal",
    type: "Steel"
  },
  afternoondelight: {
    num: 1422,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Afternoon Delight",
    desc: "Raises the user's Attack and Defense by 3 stages.",
    shortDesc: "Raises the user's Attack and Defense by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3,
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  specimensecured: {
    num: 1423,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Specimen Secured",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  geneticcode: {
    num: 1424,
    accuracy: 90,
    basePower: 100,
    category: "Physical",
    name: "Genetic Code",
    desc: "95% chance to lower the target's Defense by 2 stages.",
    shortDesc: "95% chance to lower target's Defense by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 95,
      boosts: {
        def: -2
      }
    },
    target: "normal",
    type: "Grass"
  },
  cutthechut: {
    num: 1425,
    accuracy: 90,
    basePower: 85,
    category: "Physical",
    name: "Cut the Chut",
    desc: "Has a 80% chance to raise the user's evasion by 3 stages.",
    shortDesc: "80% chance to raise the user's evasion by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 80,
      self: {
        boosts: {
          evasion: 3
        }
      }
    },
    target: "normal",
    type: "Normal"
  },
  changeform: {
    num: 1426,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Change Form",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  essenceofhell: {
    num: 1427,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Essence of Hell",
    desc: "Raises the user's Attack and Defense by 3 stages.",
    shortDesc: "Raises the user's Attack and Defense by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3,
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  greatdayforsuffering: {
    num: 1428,
    accuracy: 95,
    basePower: 30,
    basePowerCallback(pokemon, target, move) {
      const bps = [30, 30, 30, 25, 25];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Great Day for Suffering",
    desc: "Hits one to five times. Power decreases down to 25. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-5 times. Each hit, its power decreases",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 5],
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  mindnumbinghello: {
    num: 1429,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Mind-Numbing Hello",
    desc: "Lowers the target's Defense and accuracy by 2 stages.",
    shortDesc: "Lowers the target's Defense and accuracy by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -2,
      accuracy: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  explodingsun: {
    num: 1430,
    accuracy: 85,
    basePower: 110,
    category: "Physical",
    name: "Exploding Sun",
    desc: "Has a 50% chance to paralyze the target.",
    shortDesc: "50% chance to paralyze the target.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Rock"
  },
  holdmybaby: {
    num: 1431,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Hold My Baby",
    desc: "Hits one to three times. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-3 times in one turn.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 3],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  lockandload: {
    num: 1432,
    accuracy: 85,
    basePower: 100,
    category: "Physical",
    name: "Lock and Load",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  truckfullofturkeys: {
    num: 1433,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    name: "Truck Full of Turkeys",
    desc: "Hits one to four times. The attack ends if the target avoids a hit. Has a 70% chance to paralyze the target.",
    shortDesc: "Hits 1-4 times. 70% chance to paralyze the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 4],
    secondary: {
      chance: 70,
      status: "par"
    },
    target: "normal",
    type: "Steel"
  },
  gobbletango: {
    num: 1434,
    accuracy: 80,
    basePower: 100,
    category: "Physical",
    name: "Gobble Tango",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  voiceover: {
    num: 1435,
    accuracy: 70,
    basePower: 130,
    category: "Physical",
    name: "Voice Over",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  obsessed: {
    num: 1436,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Obsessed",
    desc: "Raises the user's Attack and Speed by 2 stages.",
    shortDesc: "Raises the user's Attack and Speed by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 2,
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  goteamgotron: {
    num: 1437,
    accuracy: 100,
    basePower: 60,
    basePowerCallback(pokemon, target, move) {
      const bps = [60, 50, 30, 25, 15];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Go Team Gotron",
    desc: "Hits one to five times. Power decreases down to 15. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-5 times. Each hit, its power decreases",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 5],
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  gotronregroup: {
    num: 1438,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Gotron Regroup",
    desc: "Raises the user's attack by 3 stages. Lowers the  target's Defense by 3 stages.",
    shortDesc: "Raises user's Atk by 3. Lowers target's Def by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        atk: 3
      }
    },
    boosts: {
      def: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  artsyfartsy: {
    num: 1439,
    accuracy: 95,
    basePower: 85,
    category: "Physical",
    name: "Artsy Fartsy",
    desc: "Poisons the target.",
    shortDesc: "Poisons the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    status: "psn",
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  psychedelicsmash: {
    num: 1440,
    accuracy: 90,
    basePower: 100,
    category: "Physical",
    name: "Psychedelic Smash",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  squanchysquanch: {
    num: 1441,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Squanchy Squanch",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  birdlover: {
    num: 1442,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    name: "Bird Lover",
    desc: "Hits one to three times. The attack ends if the target avoids a hit. Raises the user's evasion by 2 stages.",
    shortDesc: "Hits 1-3 times. Raises the user's evasion by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    selfBoost: {
      boosts: {
        evasion: 2
      }
    },
    multihit: [1, 3],
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  buckshot: {
    num: 1443,
    accuracy: 95,
    basePower: 110,
    category: "Physical",
    name: "Buck Shot",
    shortDesc: "No additional effect.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  turnupthebroiler: {
    num: 1444,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Turn Up the Broiler",
    desc: "Raises the user's Attack and Defense by 3 stages.",
    shortDesc: "Raises the user's Attack and Defense by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3,
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  apexgenius: {
    num: 1445,
    accuracy: 90,
    basePower: 95,
    category: "Physical",
    name: "Apex Genius",
    desc: "Raises the user's evasion by 2 stages.",
    shortDesc: "Raises the user's evasion by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        evasion: 2
      }
    },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  trainingcomplete: {
    num: 1446,
    accuracy: 80,
    basePower: 0,
    category: "Status",
    name: "Training Complete",
    desc: "Raises the user's Attack, Defense and evasion by 2 stages.",
    shortDesc: "Raises the user's Atk, Def and eva by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 2,
      def: 2,
      evasion: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  portalspillage: {
    num: 1447,
    accuracy: 80,
    basePower: 125,
    category: "Physical",
    name: "Portal Spillage",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  lickthis: {
    num: 1448,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Lick This",
    desc: "Lowers the target's Attack, Defense and evasion by 2 stages.",
    shortDesc: "Lowers the target's Atk, Def and eva by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -2,
      def: -2,
      evasion: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  timegoby: {
    num: 1449,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Time Go By",
    desc: "Lowers the target's Attack, Defense and evasion by 3 stages.",
    shortDesc: "Lowers the target's Atk, Def and eva by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -3,
      def: -3,
      evasion: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  bonebreaker: {
    num: 1450,
    accuracy: 85,
    basePower: 120,
    category: "Physical",
    name: "Bone Breaker",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  huntdown: {
    num: 1451,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Hunt Down",
    desc: "Has a 75% chance to lower the target's Defense by 2 stages.",
    shortDesc: "75% chance to lower the target's Defense by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 75,
      boosts: {
        def: -2
      }
    },
    target: "normal",
    type: "Grass"
  },
  finitecurve: {
    num: 1452,
    accuracy: 95,
    basePower: 110,
    category: "Physical",
    name: "Finite Curve",
    desc: "Has a 80% chance to paralyze the target.",
    shortDesc: "80% chance to paralyze the target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 80,
      status: "par"
    },
    target: "normal",
    type: "Grass"
  },
  motherofmercy: {
    num: 1453,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Mother of Mercy",
    desc: "Raises the user's Defense and Attack by 2 stages.",
    shortDesc: "Raises the user's Defense and Attack by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 2,
      atk: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  animestrike: {
    num: 1454,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Anime Strike",
    desc: "Has a 95% chance to lower the target's Defense by 2 stages.",
    shortDesc: "95% chance to lower the target's Defense by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 95,
      boosts: {
        def: -2
      }
    },
    target: "normal",
    type: "Steel"
  },
  butisitart: {
    num: 1455,
    accuracy: 80,
    basePower: 0,
    category: "Status",
    name: "But Is It Art?",
    desc: "Lowers the target's Attack, Defense, evasion and Speed by 2 stages.",
    shortDesc: "Lowers the target's Atk, Def, eva and Spe by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -2,
      def: -2,
      evasion: -2,
      spe: -2
    },
    target: "normal",
    type: "Normal"
  },
  abstractedform: {
    num: 1456,
    accuracy: 80,
    basePower: 0,
    category: "Status",
    name: "Abstracted Form",
    desc: "Raises the user's Attack, Defense and evasion by 2 stages. Has a 50% chance to paralyze the target.",
    shortDesc: "Raises user's Atk/Def/eva +2. 50% paralyze target.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        atk: 2,
        def: 2,
        evasion: 2
      }
    },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Normal"
  },
  tallyho: {
    num: 1457,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Tally-Ho",
    desc: "Raises the user's Attack by 3 stages.",
    shortDesc: "Raises the user's Attack by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  theoldbostonwallop: {
    num: 1458,
    accuracy: 90,
    basePower: 39,
    category: "Physical",
    name: "The Old Boston Wallop",
    desc: "Hits one to two times in one turn. This move checks accuracy for each hit.",
    shortDesc: "Hits 1-2 times. Each hit can miss.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 2],
    multiaccuracy: true,
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  hitthebooks: {
    num: 1459,
    accuracy: 100,
    basePower: 50,
    basePowerCallback(pokemon, target, move) {
      const bps = [50, 30, 25];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Hit the Books",
    desc: "Hits one to three times. Power decreases down to 25. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-3 times. Each hit, its power decreases.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 3],
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  highereducation: {
    num: 1460,
    accuracy: 33,
    basePower: 0,
    category: "Status",
    name: "Higher Education",
    desc: "Raises the user's Attack, Defense, Speed, evasion by 2 stages.",
    shortDesc: "Raises the user's Atk/Def/Spe/eva by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 2,
      def: 2,
      spe: 2,
      evasion: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  takethat: {
    num: 1461,
    accuracy: 85,
    basePower: 120,
    category: "Physical",
    name: "Take That",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  danceoff: {
    num: 1462,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Dance Off",
    desc: "The user recovers 1/3 the HP lost by the target, rounded half up. Lowers the target's Speed by 2",
    shortDesc: "Drains 33%. Lowers the target's Speed by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 3],
    boosts: {
      spe: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    viable: true
  },
  extremepressure: {
    num: 1463,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Extreme Pressure",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  psychicprotection: {
    num: 1464,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Psychic Protection",
    desc: "Raises the user's Defense by 1 stage.",
    shortDesc: "Raises the user's Defense by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  diamonddazzler: {
    num: 1465,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Diamond Dazzler",
    desc: "Lowers the target's Speed, Attack and evasion by 2 stages.",
    shortDesc: "Lowers the target's Spe/Atk/eva by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -2,
      atk: -2,
      evasion: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  energybalance: {
    num: 1466,
    accuracy: 95,
    basePower: 110,
    category: "Physical",
    name: "Energy Balance",
    desc: "The user recovers 3/4 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 75% of the damage dealt.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [3, 4],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  meltedwax: {
    num: 1467,
    accuracy: 95,
    basePower: 75,
    category: "Physical",
    name: "Melted Wax",
    desc: "Has a 50% chance to paralyze the target.",
    shortDesc: "50% chance to paralyze the target.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Normal"
  },
  boldanddaring: {
    num: 1468,
    accuracy: 33,
    basePower: 0,
    category: "Status",
    name: "Bold And Daring",
    desc: "Raises the user Speed, Attack, Defense, evasion and accuracy by 3 stages.",
    shortDesc: "Raises all the user's stats by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 3,
      atk: 3,
      def: 3,
      evasion: 3,
      accuracy: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  burningoil: {
    num: 1469,
    accuracy: 80,
    basePower: 125,
    category: "Physical",
    name: "Burning Oil",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  spittinghotcoals: {
    num: 1470,
    accuracy: 95,
    basePower: 25,
    basePowerCallback(pokemon, target, move) {
      const bps = [25, 30, 40, 50];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Spitting Hot Coals",
    desc: "Hits one to four times. Power increases up to 50. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-4 times. Each hit, its power increases.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 4],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  stayalive: {
    num: 1471,
    accuracy: 100,
    basePower: 18,
    basePowerCallback(pokemon, target, move) {
      const bps = [18, 20, 24, 28, 30, 35];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Stay Alive",
    desc: "Hits two to six times. Power increases up to 35. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 2-6 times. Each hit, its power increases.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [2, 6],
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  multiversalrupture: {
    num: 1472,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Multiversal Rupture",
    desc: "If the target lost HP, the user takes recoil damage equal to 50% the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 50% recoil.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    recoil: [1, 2],
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  season2vibes: {
    num: 1473,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Season 2 Vibes",
    desc: "Raises the user's Speed by 2 stages and its Defense by 1 stage.",
    shortDesc: "Raises the user's Speed by 2 and Defense by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 2,
      atk: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  bigexplosion: {
    num: 1474,
    accuracy: 95,
    basePower: 132,
    category: "Physical",
    name: "Big Explosion",
    shortDesc: "No additional effect.",
    pp: 6,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  celldivision: {
    num: 1475,
    accuracy: 50,
    basePower: 0,
    category: "Status",
    name: "Cell Division",
    desc: "Raises the user's Attack, Defense, Speed and evasion by 2 stages and its accuracy by 1 stage.",
    shortDesc: "Raises the user's Atk/Def/Spe/eva by 2; acc by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 2,
      def: 2,
      spe: 2,
      evasion: 2,
      accuracy: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  infection: {
    num: 1476,
    accuracy: 80,
    basePower: 20,
    category: "Physical",
    name: "Infection",
    desc: "Poisons the target and reduces its Speed by 2 stages.",
    shortDesc: "Poisons the target and reduces its Speed by 2.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    status: "psn",
    boosts: {
      spe: 2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  deepbreath: {
    num: 1477,
    accuracy: 80,
    basePower: 0,
    category: "Status",
    name: "Deep Breath",
    desc: "Raises the user's Attack by 2 stages and Defense by 3 stages.",
    shortDesc: "Raises the user's Attack by 2 and Defense by 3.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 2,
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  flingmuck: {
    num: 1478,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Fling Muck",
    desc: "Has a 70% chance to poison the target. Reduces its Speed by 2 stages.",
    shortDesc: "70% chance psn target. Reduces its Speed by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      spe: 2
    },
    secondary: {
      chance: 70,
      status: "psn"
    },
    target: "normal",
    type: "Normal"
  },
  bugrepellent: {
    num: 1479,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Bug Repellent",
    desc: "Has a 50% chance to poison the target.",
    shortDesc: "50% chance to poison the target.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "psn"
    },
    target: "normal",
    type: "Normal"
  },
  spawncamp: {
    num: 1480,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Spawn Camp",
    desc: "Raises the user's accuracy by 1 stage.",
    shortDesc: "Raises the user's accuracy by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        accuracy: 1
      }
    },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  setuptent: {
    num: 1481,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Set Up Tent",
    desc: "Raises the user's Defense by 3 stages. Two times, has a 33% chance to raises its Attack by 1 stage.",
    shortDesc: "User's Def +3. 33% chance to raise Atk, twice.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    onHit(target, source) {
      if (this.randomChance(1, 3)) {
        this.boost({ atk: 1 }, source, source);
      }
      if (this.randomChance(1, 3)) {
        this.boost({ atk: 1 }, source, source);
      }
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  naturalremedy: {
    num: 1482,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Natural Remedy",
    desc: "The user recovers 3/4 the HP lost by the target, rounded half up. Raises the user's Attack by 1 stage.",
    shortDesc: "Drains 75%. Raises the user's Attack by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [3, 4],
    self: {
      boosts: {
        atk: 1
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  timedilation2: {
    num: 1483,
    accuracy: 80,
    basePower: 0,
    category: "Status",
    name: "Time Dilation 2",
    desc: "Raises the user's Speed and Attack by 3 stages.",
    shortDesc: "Raises the user's Speed and Attack by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: 3,
      atk: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  arcade: {
    num: 1484,
    accuracy: 85,
    basePower: 111,
    category: "Physical",
    name: "Arcade",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  imyourfather: {
    num: 1485,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "I'm Your Father",
    desc: "Lowers the target's Attack and Defense by 3 stages.",
    shortDesc: "Lowers the target's Attack and Defense by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -3,
      def: -3
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  virtualcurrency: {
    num: 1486,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Virtual Currency",
    desc: "Lowers the target's Attack by 2 stages.",
    shortDesc: "Lowers the target's Attack by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    boosts: {
      atk: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  despair: {
    num: 1487,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Despair",
    desc: "The user recovers 1/2 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 50% of the damage dealt.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 2],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  rejection: {
    num: 1488,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Rejection",
    desc: "Lowers the target's Attack and Defense by 2 stages.",
    shortDesc: "Lowers the target's Attack and Defense by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -2,
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  openup: {
    num: 1489,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Open Up",
    desc: "Has a 50% chance to poison the target.",
    shortDesc: "50% chance to poison the target.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      status: "psn"
    },
    target: "normal",
    type: "Normal"
  },
  rollout: {
    num: 1490,
    accuracy: 100,
    basePower: 110,
    category: "Physical",
    name: "Rollout",
    desc: "Lowers the user's Attack by 1 stage.",
    shortDesc: "Lowers the user's Attack by 1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        atk: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  levelup: {
    num: 1491,
    accuracy: 70,
    basePower: 0,
    category: "Status",
    name: "Level Up",
    desc: "Raises the user's Attack, Defense and Speed by 3.",
    shortDesc: "Raises the user's Atk, Def and Spe by 3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3,
      def: 3,
      spe: 3
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  streetfight: {
    num: 1492,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    name: "Street Fight",
    desc: "Hits two to five times. The attack ends if the target avoids a hit. Raises the user's Attack by 2 stages.",
    shortDesc: "Hits 2-5 times. Raises the user's Attack by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [2, 5],
    selfBoost: {
      boosts: {
        atk: 2
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  ripped: {
    num: 1493,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Ripped",
    desc: "Raises the user's Attack by 2 stages. Lowers the target's Defense by 2 stages.",
    shortDesc: "Raises user's Atk by 2. Lowers target's Def by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    self: {
      boosts: {
        atk: 2
      }
    },
    boosts: {
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  checkoutthispodcast: {
    num: 1494,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Check Out This Podcast",
    desc: "Will always result in a critical hit.",
    shortDesc: "This move always crits.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    willCrit: true,
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  notincharge: {
    num: 1495,
    accuracy: 100,
    basePower: 20,
    category: "Physical",
    name: "Not in Charge",
    desc: "Hits two to six times. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 2-6 times in one turn.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [2, 6],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  sleepparalysis: {
    num: 1496,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Sleep Paralysis",
    desc: "Paralyzes the target and lowers its Speed by 1 stage.",
    shortDesc: "Paralyzes the target and lowers its Speed by 1.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    status: "par",
    boosts: {
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  headshot: {
    num: 1497,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Headshot",
    desc: "Will always result in a critical hit.",
    shortDesc: "This move always crits.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    willCrit: true,
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  heymom: {
    num: 1498,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Hey Mom",
    shortDesc: "Raises the user's Defense by 2.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  orderup: {
    num: 1499,
    accuracy: 85,
    basePower: 120,
    category: "Physical",
    name: "Order Up",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  controldestiny: {
    num: 1500,
    accuracy: 85,
    basePower: 100,
    category: "Physical",
    name: "Control Destiny",
    desc: "Has a 80% chance to raise the user's crit ratio by 1 stage.",
    shortDesc: "80% chance to raise the user's crit ratio by 1.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 80,
      self: {
        volatileStatus: "focusenergy"
      }
    },
    target: "normal",
    type: "Normal"
  },
  dimensionjump: {
    num: 1501,
    accuracy: 100,
    basePower: 115,
    category: "Physical",
    name: "Dimension Jump",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  threehorns: {
    num: 1502,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Three Horns",
    desc: "Hits one to three times, The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-3 times in one turn.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 3],
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  newreligion: {
    num: 1503,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "New Religion",
    desc: "Lowers the target's Attack and Defense by 2 stages.",
    shortDesc: "Lowers the target's Attack and Defense by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -2,
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  asteroidimpact: {
    num: 1504,
    accuracy: 95,
    basePower: 130,
    category: "Physical",
    name: "Asteroid Impact",
    desc: "If the target lost HP, the user takes recoil damage equal to 69% the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 69% recoil.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    recoil: [69, 100],
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  meta: {
    num: 1505,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Meta",
    desc: "Has a 70% chance to lower the target's Attack by 2 stages.",
    shortDesc: "70% chance to lower the target's Attack by 2.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 70,
      boosts: {
        atk: -2
      }
    },
    target: "normal",
    type: "Normal"
  },
  thetwist: {
    num: 1506,
    accuracy: 90,
    basePower: 100,
    category: "Physical",
    name: "The Twist",
    desc: "Has a 50% chance to raise the user's crit ratio by 1.",
    shortDesc: "50% chance to raise the user's crit ratio by 1.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      self: {
        volatileStatus: "focusenergy"
      }
    },
    target: "normal",
    type: "Normal"
  },
  thecreator: {
    num: 1507,
    accuracy: 80,
    basePower: 90,
    category: "Physical",
    name: "The Creator",
    desc: "The user recovers 1/2 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 50% of the damage dealt.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 2],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  killedwithcoffee: {
    num: 1508,
    accuracy: 80,
    basePower: 0,
    category: "Status",
    name: "Killed with Coffee",
    desc: "Raises the user's Speed by 2 stages. Lowers target's Attack and Defense by 2 stages.",
    shortDesc: "Raises user's Spe by 2. Lowers target's Atk/Def by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        spe: 2
      }
    },
    boosts: {
      atk: -2,
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  goldenshower: {
    num: 1509,
    accuracy: 85,
    basePower: 90,
    category: "Physical",
    name: "Golden Shower",
    desc: "Has a 95% chance to lower the target's evasion by 2 stages.",
    shortDesc: "95% chance to lower the target's evasion by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 95,
      boosts: {
        evasion: -2
      }
    },
    target: "normal",
    type: "Normal"
  },
  thirstforjustice: {
    num: 1510,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Thirst For Justice",
    desc: "The user's next attack will have its power increased by 1.5x; the effect ends when the user is no longer active, or after the user attempts to use any move besides Thirst For Justice, even if it is not successful.",
    shortDesc: "The user's next move have 1.5x power.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    volatileStatus: "thirstforjustice",
    condition: {
      onStart(pokemon, source, effect) {
        this.add("-start", pokemon, "Thirst For Justice");
      },
      onRestart(pokemon, source, effect) {
        this.add("-start", pokemon, "Thirst For Justice");
      },
      onBasePowerPriority: 9,
      onBasePower(basePower, attacker, defender, move) {
        return this.chainModify(1.5);
      },
      onMoveAborted(pokemon, target, move) {
        if (move.id !== "thirstforjustice") {
          pokemon.removeVolatile("thirstforjustice");
        }
      },
      onAfterMove(pokemon, target, move) {
        if (move.id !== "thirstforjustice") {
          pokemon.removeVolatile("thirstforjustice");
        }
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Thirst For Justice", "[silent]");
      }
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  cookiecontrol: {
    num: 1511,
    accuracy: 80,
    basePower: 0,
    category: "Status",
    name: "Cookie Control",
    desc: "Lowers the target's Attack, Defense and Speed by 2 stages.",
    shortDesc: "Lowers the target's Atk, Def and Spe by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -2,
      def: -2,
      spe: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  troll: {
    num: 1512,
    accuracy: 100,
    basePower: 20,
    category: "Physical",
    name: "Troll",
    desc: "Hits two to four times. The attack ends if the target avoids a hit. Lowers the target's Attack, Defense, and Speed by 4 stages... Get trolled! Has a 70% chance to paralyze the target.",
    shortDesc: "Hits 2-4 times. Target's Atk/Def/Spe -4... unless?",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onAfterMove(source, target, move) {
      if (this.randomChance(7, 10)) {
        target.trySetStatus("par");
      }
    },
    multihit: [2, 4],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  brotherhood: {
    num: 1513,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Brotherhood",
    desc: "The user's next attack will have its power increased by 1.5x; the effect ends when the user is no longer active, or after the user attempts to use any move besides Brotherhood, even if it is not successful.",
    shortDesc: "The user's next move have 1.5x power.",
    pp: 15,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    volatileStatus: "brotherhood",
    condition: {
      onStart(pokemon, source, effect) {
        this.add("-start", pokemon, "Brother Hood");
      },
      onRestart(pokemon, source, effect) {
        this.add("-start", pokemon, "Brother Hood");
      },
      onBasePowerPriority: 9,
      onBasePower(basePower, attacker, defender, move) {
        return this.chainModify(1.5);
      },
      onMoveAborted(pokemon, target, move) {
        if (move.id !== "brotherhood") {
          pokemon.removeVolatile("brotherhood");
        }
      },
      onAfterMove(pokemon, target, move) {
        if (move.id !== "brotherhood") {
          pokemon.removeVolatile("brotherhood");
        }
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Brother Hood", "[silent]");
      }
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  stupidsun: {
    num: 1514,
    accuracy: 80,
    basePower: 130,
    category: "Physical",
    name: "Stupid Sun",
    shortDesc: "No additional effect.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  blackholesun: {
    num: 1515,
    accuracy: 90,
    basePower: 100,
    category: "Physical",
    name: "Black Hole Sun",
    desc: "Has 50% chance to lower the target's Speed by 2 stages.",
    shortDesc: "50% chance to lower the target's Speed by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 50,
      boosts: {
        spe: -2
      }
    },
    target: "normal",
    type: "Normal"
  },
  knightofthesun: {
    num: 1516,
    accuracy: 100,
    basePower: 40,
    basePowerCallback(pokemon, target, move) {
      const bps = [40, 30, 25, 25, 20];
      return bps[move.hit - 1];
    },
    category: "Physical",
    name: "Knight of the Sun",
    desc: "Hits two to five times. Power decreases down to 20. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 2-5 times. Each hit, its power decreases.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [2, 5],
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  forcepush: {
    num: 1517,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Force Push",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  perfectlyvertical: {
    num: 1518,
    accuracy: 95,
    basePower: 110,
    category: "Physical",
    name: "Perfectly Vertical",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  darkness: {
    num: 1519,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Darkness",
    desc: "Lowers the target's Defense and Attack by 2 stages.",
    shortDesc: "Lowers the target's Defense and Attack by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: -2,
      atk: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  progressreport: {
    num: 1520,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Progress Report",
    desc: "The user recovers 1/3 the HP lost by the target, rounded half up.",
    shortDesc: "User recovers 33% of the damage dealt.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 3],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  weirdspacerift: {
    num: 1521,
    accuracy: 80,
    basePower: 110,
    category: "Physical",
    name: "Weird Space Rift",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  movietime: {
    num: 1522,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Movie Time",
    desc: "Raises the user's Defense by 2 stages.",
    shortDesc: "Raises the user's Defense by 2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      def: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  butterflyonacorncob: {
    num: 1523,
    accuracy: 95,
    basePower: 130,
    category: "Physical",
    name: "Butterfly on a Corncob",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  fortune500: {
    num: 1524,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Fortune 500",
    desc: "Raises the user's Attack by 2 stages and crit ratio by 1 stage. Lowers the target's Defense by 2 stages.",
    shortDesc: "Raise user's Atk by 2; Crit ratio +1. Target's Def -2.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        atk: 2
      },
      volatileStatus: "focusenergy"
    },
    boosts: {
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  suckmysquash: {
    num: 1525,
    accuracy: 95,
    basePower: 20,
    basePowerCallback(pokemon, target, move) {
      if (move.hit === 3)
        return move.basePower - 5;
      if (move.hit === 4)
        return move.basePower + 50;
      return move.basePower;
    },
    category: "Physical",
    name: "Suck My Squash",
    desc: "Hits 5 times. Power decreases on the third hit, down to 15, then rises, up to 70. Has a 33% chance to raise crit ratio by 1 stage.",
    shortDesc: "Hits 5x. Each hit can miss. Power varies. 300% +1 crit.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 5],
    multiaccuracy: true,
    secondary: {
      chance: 33,
      self: {
        volatileStatus: "focusenergy"
      }
    },
    target: "normal",
    type: "Normal"
  },
  itssquanchingtime: {
    num: 1526,
    accuracy: 99,
    basePower: 40,
    category: "Physical",
    name: "It's Squanching Time",
    desc: "Has a 33% chance to raise the user's crit ratio by 1.",
    shortDesc: "33% chance to raise the user's crit ratio by 1.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: {
      chance: 33,
      self: {
        volatileStatus: "focusenergy"
      }
    },
    target: "normal",
    type: "Rock"
  },
  grassclipper: {
    num: 1527,
    accuracy: 100,
    basePower: 10,
    basePowerCallback(pokemon, target, move) {
      if (move.hit < 12) {
        return move.basePower + (move.hit - 1);
      } else {
        return move.basePower + 40;
      }
    },
    category: "Physical",
    name: "Grass Clipper",
    desc: "Hits one to twelve times. Power increases each hit, up to 50. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-12 times. Each hit, its power increases.",
    pp: 4,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 12],
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  lighttease: {
    num: 1528,
    accuracy: 95,
    basePower: 0,
    category: "Physical",
    name: "Light Tease",
    desc: "Has a 90% chance to raises the user's Attack by 1 stage. Has a 50% chance to lower the target's Speed by 1 stage.",
    shortDesc: "90% chance user Atk +1. 50% chance target Spe -1.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondaries: [
      {
        chance: 90,
        self: {
          boosts: {
            atk: 1
          }
        }
      },
      {
        chance: 50,
        boosts: {
          spe: -1
        }
      }
    ],
    target: "normal",
    type: "Normal"
  },
  newfriend: {
    num: 1529,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "New Friend",
    desc: "The user recovers 1/3 the HP lost by the target, rounded half up. Raises the user's Speed by 2 stages and has a 95% to raise its Defense by 3 stages.",
    shortDesc: "Drains 33%. Raises user's Spe by 2; 95% Def +3.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    drain: [1, 3],
    self: {
      boosts: {
        spe: 2
      }
    },
    secondary: {
      chance: 95,
      self: {
        boosts: {
          def: 3
        }
      }
    },
    target: "normal",
    type: "Normal"
  },
  rakesituation: {
    num: 1530,
    accuracy: 100,
    basePower: 5,
    category: "Physical",
    name: "Rake Situation",
    desc: "Hits ten times. Will always result in critical hits. Has a 85% chance the user's next attack will have its power increased by 1.5x; the effect ends when the user is no longer active, or after the user attempts to use any move, even if it is not successful.",
    shortDesc: "Hits 10x. Crits. 85% chance raise next dmg 1.5x.",
    pp: 20,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onAfterHit(source, target, move) {
      if (this.randomChance(17, 20)) {
        source.addVolatile("rakesituation");
      }
    },
    multihit: 10,
    willCrit: true,
    condition: {
      onStart(pokemon, source, effect) {
        this.add("-start", pokemon, "Rake Situation");
      },
      onRestart(pokemon, source, effect) {
        this.add("-start", pokemon, "Rake Situation");
      },
      onBasePowerPriority: 9,
      onBasePower(basePower, attacker, defender, move) {
        return this.chainModify(1.5);
      },
      onMoveAborted(pokemon, target, move) {
        pokemon.removeVolatile("rakesituation");
      },
      onAfterMove(pokemon, target, move) {
        pokemon.removeVolatile("rakesituation");
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Rake Situation", "[silent]");
      }
    },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  laserblaster: {
    num: 1531,
    accuracy: 95,
    basePower: 40,
    category: "Physical",
    name: "Laster Blaster",
    desc: "Hits one to three times. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-3 times in one turn.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 3],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  fullvoicemail: {
    num: 1532,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Full Voicemail",
    desc: "Raises the user's Attack by 3 stages. Lowers the user's Defense and Speed by 1 stage.",
    shortDesc: "Raises user's Atk by 3. Lowers its Def and Spe by 1.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3,
      def: -1,
      spe: -1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  fameobsessed: {
    num: 1533,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Fame Obsessed",
    desc: "Raises the user's Attack by 2 stages and Defense by 2 stages.",
    shortDesc: "Raises the user's Attack by 3 and Defense by 2.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 3,
      def: 2
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  welcomeback: {
    num: 1534,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Welcome Back",
    desc: "Lowers the target's Attack and Defense by 2 stages.",
    shortDesc: "Lowers the target's Attack and Defense by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -2,
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  fullapproval: {
    num: 1535,
    accuracy: 50,
    basePower: 0,
    category: "Status",
    name: "Full Approval",
    desc: "Poisons the target. Has a 95% chance to raise the user's Defense and Attack by 3 stages.",
    shortDesc: "Poisons the target. 95% chance user's Def/Atk +3.",
    pp: 4,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    status: "psn",
    boosts: {
      atk: -2,
      def: -2
    },
    secondary: {
      chance: 95,
      self: {
        boosts: {
          atk: 3,
          def: 3
        }
      }
    },
    target: "normal",
    type: "Normal"
  },
  bigdome: {
    num: 1536,
    accuracy: 95,
    basePower: 81,
    category: "Physical",
    name: "Big Dome",
    desc: "Raises the user's Speed by 2 stages.",
    shortDesc: "Raises the user's Speed by 2.",
    pp: 10,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      boosts: {
        spe: 2
      }
    },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  spicymeatball: {
    num: 1537,
    accuracy: 90,
    basePower: 20,
    category: "Physical",
    name: "Spicy Meatball",
    desc: "Has a 50% chance to paralyze or 95% chance to paralyze the target. Has a 75% chance to raise the target's Speed by 2.",
    shortDesc: "50%: par; 95%: psn; 75%: target's Speed +2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondaries: [
      {
        chance: 50,
        status: "par"
      },
      {
        chance: 95,
        status: "psn"
      },
      {
        chance: 75,
        boosts: {
          spe: 2
        }
      }
    ],
    target: "normal",
    type: "Steel"
  },
  skullemoji: {
    num: 1538,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Skull Emoji",
    desc: "Lowers the target's Attack and Defense by 1 stage.",
    shortDesc: "Lowers the target's Attack and Defense by 1.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: -1,
      def: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  hopeyouredelicious: {
    num: 1539,
    accuracy: 65,
    basePower: 0,
    category: "Status",
    name: "Hope You're Delicious",
    desc: "Raises the user's Attack by 4 stages. Has a  95% chance to raise its Defense by 2 stages.",
    shortDesc: "Raises user's Atk by 4. 95% chance to raise Def by 2.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 4
    },
    secondary: {
      chance: 95,
      boosts: {
        def: 2
      }
    },
    target: "self",
    type: "Normal"
  },
  torsosrights: {
    num: 1540,
    accuracy: 90,
    basePower: 25,
    category: "Physical",
    name: "Torso's Rights",
    desc: "Hits one to six times. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-6 times in one turn.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 6],
    secondary: null,
    target: "normal",
    type: "Rock"
  },
  hundredyearsforever: {
    num: 1541,
    accuracy: 90,
    basePower: 15,
    basePowerCallback(pokemon, target, move) {
      if (move.hit === 3)
        return move.basePower + 5;
      return move.basePower;
    },
    category: "Physical",
    name: "Hundred Years Forever",
    desc: "Hits one to three times. Increases the last hit power up to 20. The attack ends if the target avoids a hit.",
    shortDesc: "Hits 1-3 times. Last hit, power increases.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    multihit: [1, 3],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  goldenportal: {
    num: 1542,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Golden Portal",
    desc: "Lowers the target's Speed by 1 stage, its Defense by 2 stages and its crit ratio down to 0.",
    shortDesc: "Target Spe -1; 90% Def -2; 85% crit ratio to 0.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -1
    },
    secondaries: [
      {
        chance: 90,
        boosts: {
          def: -2
        }
      },
      {
        chance: 85,
        volatileStatus: "goldenportal"
      }
    ],
    condition: {
      onStart(target, source, effect) {
        if (effect && ["costar", "imposter", "psychup", "transform"].includes(effect.id)) {
          this.add("-start", target, "move: Golden Portal", "[silent]");
        } else {
          this.add("-start", target, "move: Golden Portal");
        }
      },
      onModifyCritRatio(critRatio) {
        if (critRatio > 0) {
          return 0;
        }
        return critRatio;
      }
    },
    target: "normal",
    type: "Normal"
  },
  slowmobious: {
    num: 1543,
    accuracy: 90,
    basePower: 10,
    category: "Physical",
    name: "Slow Mobious",
    shortDesc: "85% chance Hi crit ratio and crit boost.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onModifyMove(move, pokemon, target) {
      if (this.randomChance(17, 20)) {
        move.critRatio = 2;
      }
    },
    onAfterMove(source, target, move) {
      if (source.getMoveHitData(move).crit) {
        source.addVolatile("focusenergy");
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  familykillingtime: {
    num: 1544,
    accuracy: 80,
    basePower: 145,
    category: "Physical",
    name: "Family Killing Time",
    shortDesc: "No additional effect.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  bigbarf: {
    num: 1545,
    accuracy: 100,
    basePower: 20,
    category: "Physical",
    name: "Big Barf",
    desc: "Paralyzes the target. The user recovers 4/5 the HP lost by the target, rounded half up.",
    shortDesc: "Paralyzes the target. Recovers 80% of the dmg dealt.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    status: "par",
    drain: [4, 5],
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  sweetrelease: {
    num: 1546,
    accuracy: 95,
    basePower: 20,
    category: "Physical",
    name: "Sweet Release",
    desc: "Hits two to three times. The attack ends if the target avoids a hit. The third hit has 75% chance to recover 50% of the user's base health, rounded half up. Has a 85% chance to poison the target.",
    shortDesc: "Hits 2-3x. 3rd hit 75%: drains 50%; 85%: psn.",
    pp: 2,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    onAfterHit(source, target, move) {
      if (move.hit === 3 && this.randomChance(3, 4)) {
        let damage = this.actions.getDamage(source, target, move);
        if (damage) {
          this.heal(Math.ceil(damage / 2), source, source);
        }
      }
    },
    multihit: [2, 3],
    secondary: {
      chance: 85,
      status: "psn"
    },
    target: "normal",
    type: "Normal"
  },
  knucklepie: {
    num: 1547,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Knuckle Pie",
    shortDesc: "No additional effect.",
    pp: 12,
    noPPBoosts: true,
    priority: 0,
    flags: { contact: 1 },
    secondary: null,
    target: "normal",
    type: "Normal"
  },
  sos: {
    num: 1548,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "SOS",
    desc: "Lowers the user's Speed by 1 stage. Has a 60% chance to raises its Defense by 4 stages.",
    shortDesc: "Lowers user's Speed by 1. 60% chance Def +4.",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      spe: -1
    },
    secondary: {
      chance: 60,
      boosts: {
        def: 4
      }
    },
    target: "self",
    type: "Normal"
  },
  herocharge: {
    num: 1549,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Hero Charge",
    desc: "Raises the user's Attack by 1 stage.",
    shortDesc: "Raises the user's Attack by 1.",
    pp: 18,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    boosts: {
      atk: 1
    },
    secondary: null,
    target: "self",
    type: "Normal"
  },
  westernbacon: {
    num: 1550,
    accuracy: 95,
    basePower: 130,
    category: "Physical",
    name: "Western Bacon",
    desc: "The user's next attack will have its power increased by 1.5x; the effect ends when the user is no longer active, or after the user attempts to use any move, even if it is not successful.",
    shortDesc: "The user's next move have 1.5x power.",
    pp: 8,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    self: {
      volatileStatus: "westernbacon"
    },
    secondary: null,
    condition: {
      onStart(pokemon, source, effect) {
        this.add("-start", pokemon, "Western Bacon");
      },
      onRestart(pokemon, source, effect) {
        this.add("-start", pokemon, "Western Bacon");
      },
      onBasePowerPriority: 9,
      onBasePower(basePower, attacker, defender, move) {
        return this.chainModify(1.5);
      },
      onMoveAborted(pokemon, target, move) {
        pokemon.removeVolatile("westernbacon");
      },
      onAfterMove(pokemon, target, move) {
        pokemon.removeVolatile("westernbacon");
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Western Bacon", "[silent]");
      }
    },
    target: "normal",
    type: "Normal"
  },
  // Old move
  focusenergy: {
    inherit: true,
    condition: {
      onStart(target, source, effect) {
        if (effect?.id === "zpower") {
          this.add("-start", target, "move: Focus Energy", "[zeffect]");
        } else if (effect && ["costar", "imposter", "psychup", "transform"].includes(effect.id)) {
          this.add("-start", target, "move: Focus Energy", "[silent]");
        } else {
          this.add("-start", target, "move: Focus Energy");
        }
      },
      onModifyCritRatio(critRatio) {
        return critRatio + 1;
      }
    }
  }
};
//# sourceMappingURL=moves.js.map
