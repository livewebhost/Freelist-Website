function getTTSUrl() {
  const text = document.getElementById('text').value.trim();
  const lang = document.getElementById('lang').value;
  if (!text) {
    alert("Enter some text!");
    return null;
  }
  return `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${lang}&q=${encodeURIComponent(text)}`;
}

function playTTS() {
  const url = getTTSUrl();
  if (!url) return;
  const player = document.getElementById('player');
  player.src = url;
  player.play();
}

function downloadTTS() {
  const url = getTTSUrl();
  if (!url) return;
  const a = document.createElement('a');
  a.href = url;
  a.download = "tts.mp3";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}