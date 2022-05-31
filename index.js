function shout(content) {
  return content.toUpperCase();
}

// console.log(shout("speaker"));

function whisper(content) {
  return content.toLowerCase();
}

// console.log(whisper("speaker"));

function logShout(content) {
  console.log(content.toUpperCase());
}

function logWhisper(content) {
  console.log(content.toLowerCase());
}

function sayHiToHeadphonedRoommate(content) {
  return content === content.toLowerCase()
    ? "I can't hear you!"
    : content === content.toUpperCase()
    ? "YES INDEED!"
    : content === "Let's have dinner together!"
    ? "I would love to!"
    : "No answer!";
}
