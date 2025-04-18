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
var lottery_exports = {};
__export(lottery_exports, {
  commands: () => commands,
  pages: () => pages
});
module.exports = __toCommonJS(lottery_exports);
var import_fs = require("../../lib/fs");
const LOTTERY_FILE = "config/chat-plugins/lottery.json";
const lotteriesContents = (0, import_fs.FS)(LOTTERY_FILE).readIfExistsSync();
const lotteries = lotteriesContents ? Object.assign(/* @__PURE__ */ Object.create(null), JSON.parse(lotteriesContents)) : /* @__PURE__ */ Object.create(null);
function createLottery(roomid, maxWinners, name, markup) {
  if (lotteries[roomid] && !lotteries[roomid].running) {
    delete lotteries[roomid];
  }
  const lottery = lotteries[roomid];
  lotteries[roomid] = {
    maxWinners,
    name,
    markup,
    participants: lottery && lottery.participants || /* @__PURE__ */ Object.create(null),
    winners: lottery && lottery.winners || [],
    running: true
  };
  writeLotteries();
}
function writeLotteries() {
  for (const roomid of Object.keys(lotteries)) {
    if (!Rooms.get(roomid)) {
      delete lotteries[roomid];
    }
  }
  (0, import_fs.FS)(LOTTERY_FILE).writeUpdate(() => JSON.stringify(lotteries));
}
function destroyLottery(roomid) {
  delete lotteries[roomid];
  writeLotteries();
}
function endLottery(roomid, winners) {
  const lottery = lotteries[roomid];
  if (!lottery)
    return;
  lottery.winners = winners;
  lottery.running = false;
  Object.freeze(lottery);
  writeLotteries();
}
function addUserToLottery(roomid, user) {
  const lottery = lotteries[roomid];
  if (!lottery)
    return;
  const participants = lottery.participants;
  const userSignedup = participants[user.latestIp] || Object.values(participants).map(toID).includes(user.id);
  if (!userSignedup) {
    participants[user.latestIp] = user.name;
    writeLotteries();
    return true;
  }
  return false;
}
function removeUserFromLottery(roomid, user) {
  const lottery = lotteries[roomid];
  if (!lottery)
    return;
  const participants = lottery.participants;
  for (const [ip, participant] of Object.entries(participants)) {
    if (toID(participant) === user.id || ip === user.latestIp) {
      delete participants[ip];
      writeLotteries();
      return true;
    }
  }
  return false;
}
function getWinnersInLottery(roomid) {
  const lottery = lotteries[roomid];
  if (!lottery)
    return;
  const winners = [];
  const participants = Object.values(lottery.participants);
  for (let i = 0; i < lottery.maxWinners; i++) {
    const randomIdx = participants.length * Math.random() << 0;
    const winner = participants[randomIdx];
    winners.push(winner);
    participants.splice(randomIdx, 1);
  }
  return winners;
}
const commands = {
  lottery: {
    ""(target, room) {
      const lottery = lotteries[room.roomid];
      if (!lottery) {
        return this.errorReply("This room doesn't have a lottery running.");
      }
      return this.parse(`/join view-lottery-${room.roomid}`);
    },
    edit: "create",
    create(target, room, user, connection, cmd) {
      if (!this.can("declare", null, room))
        return;
      if (room.battle || !room.chatRoomData) {
        return this.errorReply("This room does not support the creation of lotteries.");
      }
      const lottery = lotteries[room.roomid];
      const edited = lottery && lottery.running;
      if (cmd === "edit" && !target && lottery) {
        this.sendReply("Source:");
        const markup2 = Chat.html`${lottery.markup}`.replace(/\n/g, "<br />");
        return this.sendReplyBox(`<code style="white-space: pre-wrap">/lottery edit ${lottery.maxWinners}, ${lottery.name}, ${markup2}</code>`);
      }
      const [maxWinners, name, markup] = Chat.splitFirst(target, ",", 2).map((val) => val.trim());
      if (!(maxWinners && name && markup.length)) {
        return this.errorReply("You're missing a command parameter - see /help lottery for this command's syntax.");
      }
      const maxWinnersNum = parseInt(maxWinners);
      if (!this.canHTML(markup))
        return;
      if (isNaN(maxWinnersNum)) {
        return this.errorReply(`${maxWinners} is not a valid number.`);
      }
      if (maxWinnersNum < 1) {
        return this.errorReply("The maximum winners should be at least 1.");
      }
      if (maxWinnersNum > Number.MAX_SAFE_INTEGER) {
        return this.errorReply("The maximum winners number is too large, please pick a smaller number.");
      }
      if (name.length > 50) {
        return this.errorReply("Name needs to be under 50 characters.");
      }
      createLottery(room.roomid, maxWinnersNum, name, markup);
      this.sendReply(`The lottery was successfully ${edited ? "edited" : "created"}.`);
      if (!edited) {
        this.add(Chat.html`|raw|<div class="broadcast-blue"><b>${user.name} created the "<a href="/view-lottery-${room.roomid}">${name}</a>" lottery!</b></div>`);
      }
      this.modlog(`LOTTERY ${edited ? "EDIT" : "CREATE"} ${name}`, null, `${maxWinnersNum} max winners`);
    },
    delete(target, room, user) {
      if (!this.can("declare", null, room))
        return;
      const lottery = lotteries[room.roomid];
      if (!lottery) {
        return this.errorReply("This room does not have a lottery running.");
      }
      destroyLottery(room.roomid);
      this.addModAction(`${user.name} deleted the "${lottery.name}" lottery.`);
      this.modlog("LOTTERY DELETE");
      this.sendReply("The lottery was successfully deleted.");
    },
    end(target, room) {
      if (!this.can("declare", null, room))
        return;
      const lottery = lotteries[room.roomid];
      if (!lottery) {
        return this.errorReply("This room does not have a lottery running.");
      }
      if (!lottery.running) {
        return this.errorReply(`The "${lottery.name}" lottery already ended.`);
      }
      for (const [ip, participant] of Object.entries(lottery.participants)) {
        const userid = toID(participant);
        const pUser = Users.get(userid);
        if (Punishments.userids.get(userid) || Punishments.getRoomPunishments(pUser || userid, { publicOnly: true, checkIps: true }).length) {
          delete lottery.participants[ip];
        }
      }
      if (lottery.maxWinners >= Object.keys(lottery.participants).length) {
        return this.errorReply("There have been not enough participants for you to be able to end this. If you wish to end it anyway use /lottery delete.");
      }
      const winners = getWinnersInLottery(room.roomid);
      if (!winners)
        return this.errorReply(`An error occured while getting the winners.`);
      this.add(Chat.html`|raw|<div class="broadcast-blue"><b>${Chat.toListString(winners)} won the "<a href="/view-lottery-${room.roomid}">${lottery.name}</a>" lottery!</b></div>`);
      this.modlog(`LOTTERY END ${lottery.name}`);
      endLottery(room.roomid, winners);
    },
    "!join": true,
    join(target, room, user) {
      const roomid = target || room && room.roomid;
      if (!roomid) {
        return this.errorReply(`This is not a valid room.`);
      }
      const lottery = lotteries[roomid];
      if (!lottery) {
        return this.errorReply(`${roomid} does not have a lottery running.`);
      }
      if (!lottery.running) {
        return this.errorReply(`The "${lottery.name}" lottery already ended.`);
      }
      if (!user.named) {
        return this.popupReply("You must be logged into an account to participate.");
      }
      if (!user.autoconfirmed) {
        return this.popupReply("You must be autoconfirmed to join lotteries.");
      }
      if (user.locked || Punishments.getRoomPunishments(user, { publicOnly: true, checkIps: true }).length) {
        return this.popupReply("Punished users cannot join lotteries.");
      }
      const success = addUserToLottery(roomid, user);
      if (success) {
        this.popupReply("You have successfully joined the lottery.");
      } else {
        this.popupReply("You are already in the lottery.");
      }
    },
    "!leave": true,
    leave(target, room, user) {
      const roomid = target || room && room.roomid;
      if (!roomid) {
        return this.errorReply("This can only be used in rooms.");
      }
      const lottery = lotteries[roomid];
      if (!lottery) {
        return this.errorReply(`${roomid} does not have a lottery running.`);
      }
      if (!lottery.running) {
        return this.errorReply(`The "${lottery.name}" lottery already ended.`);
      }
      const success = removeUserFromLottery(roomid, user);
      if (success) {
        this.popupReply("You have successfully left the lottery.");
      } else {
        this.popupReply("You have not joined the lottery.");
      }
    },
    participants(target, room, user) {
      const lottery = lotteries[room.roomid];
      if (!lottery) {
        return this.errorReply("This room does not have a lottery running.");
      }
      const canSeeIps = user.can("ban");
      const participants = Object.entries(lottery.participants).map(([ip, participant]) => {
        return `${participant}${canSeeIps ? " (IP: " + ip + ")" : ""}`;
      });
      let buf = "";
      if (user.can("declare", null, room)) {
        buf += `<b>List of participants (${participants.length}):</b><p>${participants.join(", ")}</p>`;
      } else {
        buf += `${participants.length} participant(s) joined this lottery.`;
      }
      this.sendReplyBox(buf);
    },
    help() {
      return this.parse("/help lottery");
    }
  },
  lotteryhelp: [
    `/lottery - opens the current lottery, if it exists.`,
    `/lottery create max winners, name, html - creates a new lottery with [name] as the header and [html] as body. Max winners is the amount of people that will win the lottery. Requires # & ~`,
    `/lottery delete - deletes the current lottery without declaring a winner. Requires # & ~`,
    `/lottery end - ends the current lottery, declaring a random participant as the winner. Requires # & ~`,
    `/lottery editmarkup html - edits the lottery markup with the provided HTML. Requires # & ~`,
    `/lottery join - joins the current lottery, if it exists, you need to be not currently punished in any public room, not locked and be autoconfirmed.`,
    `/lottery leave - leaves the current lottery, if it exists.`,
    `/lottery participants - shows the current participants in the lottery.`
  ]
};
const pages = {
  lottery(query, user) {
    this.extractRoom();
    this.title = "Lottery";
    let buf = '<div class="pad">';
    const lottery = lotteries[this.room.roomid];
    if (!lottery) {
      buf += `<h2>There is no lottery running in ${this.room.title}</h2></div>`;
      return buf;
    }
    buf += `<h2 style="text-align: center">${lottery.name}</h2>${lottery.markup}<br />`;
    if (lottery.running) {
      const userSignedUp = lottery.participants[user.latestIp] || Object.values(lottery.participants).map(toID).includes(user.id);
      buf += `<button class="button" name="send" style=" display: block; margin: 0 auto" value="/lottery ${userSignedUp ? "leave" : "join"} ${this.room.roomid}">${userSignedUp ? "Leave the " : "Sign up for the"} lottery</button>`;
    } else {
      buf += '<p style="text-align: center"><b>This lottery has already ended. The winners are:</b></p>';
      buf += '<ul style="display: table; margin: 0px auto">';
      for (const winner of lottery.winners) {
        buf += `<li>${winner}</li>`;
      }
      buf += "</ul>";
    }
    return buf;
  }
};
//# sourceMappingURL=lottery.js.map
