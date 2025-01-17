const { cmd, owner } = require('../lib');
let recordedText = "";
let recordedAudio = "";
let recordedVideo = "";

cmd({
  pattern: "save",
  desc: "Save text, audio, and video files",
  category: "utility",
}, async (Void, citel, text) => {
  if (citel.from === owner) {
    const chatId = citel.chatId;
    const textFile = `chat_${chatId}_text.txt`;
    const audioFile = `chat_${chatId}_audio.mp3`;
    const videoFile = `chat_${chatId}_video.mp4`;

    // Save text file
    fs.writeFileSync(textFile, recordedText);

    // Save audio file
    const audioBuf = await getAudioBuffer(recordedAudio);
    fs.writeFileSync(audioFile, audioBuf);

    // Save video file
    const videoBuf = await getVideoBuffer(recordedVideo);
    fs.writeFileSync(videoFile, videoBuf);

    await citel.reply(`Saved text, audio, and video files to chat ${chatId}`);
  } else {
    await citel.reply("Sorry, only the owner can save files.");
  }
});

async function getAudioBuffer(audio) {
  // Convert audio to buffer
  const audioBuf = await audio.toPromise();
  return audioBuf;
}

async function getVideoBuffer(video) {
  // Convert video to buffer
  const videoBuf = await video.toPromise();
  return videoBuf;
}
