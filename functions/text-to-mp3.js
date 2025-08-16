let allVoices = [];

    // 🌐 Indian Languages
    const languageList = {
      "hi-IN": "Hindi (भारत)",
      "bn-IN": "Bengali (বাংলা)",
      "gu-IN": "Gujarati (ગુજરાતી)",
      "kn-IN": "Kannada (ಕನ್ನಡ)",
      "ml-IN": "Malayalam (മലയാളം)",
      "mr-IN": "Marathi (मराठी)",
      "pa-IN": "Punjabi (ਪੰਜਾਬੀ)",
      "ta-IN": "Tamil (தமிழ்)",
      "te-IN": "Telugu (తెలుగు)",
      "ur-IN": "Urdu (اردو)"
    };

    function loadVoices() {
      allVoices = speechSynthesis.getVoices();

      // Populate language dropdown
      const langSelect = document.getElementById("languages");
      langSelect.innerHTML = "";
      Object.entries(languageList).forEach(([code, name]) => {
        const opt = document.createElement("option");
        opt.value = code;
        opt.textContent = name;
        langSelect.appendChild(opt);
      });

      langSelect.value = "hi-IN"; // Default Hindi
      filterVoices();
    }

    function filterVoices() {
      const selectedLang = document.getElementById("languages").value;
      const voiceSelect = document.getElementById("voices");
      voiceSelect.innerHTML = "";

      const filtered = allVoices.filter(v => v.lang === selectedLang);
      if (filtered.length === 0) {
        const opt = document.createElement("option");
        opt.textContent = "⚠️ No voices found for this language";
        voiceSelect.appendChild(opt);
        return;
      }

      filtered.forEach((v) => {
        const opt = document.createElement("option");
        opt.value = v.name;
        opt.textContent = v.name;
        voiceSelect.appendChild(opt);
      });
    }

    function speak() {
      const text = document.getElementById("text").value;
      const utter = new SpeechSynthesisUtterance(text);

      const voiceName = document.getElementById("voices").value;
      utter.voice = allVoices.find(v => v.name === voiceName);

      speechSynthesis.cancel(); // पहले का voice cancel
      speechSynthesis.speak(utter);
    }

    function stop() {
      speechSynthesis.cancel();
    }

    function download() {
      const text = document.getElementById("text").value;
      const lang = document.getElementById("languages").value.split("-")[0]; // hi, bn, etc.

      // 🔥 Google Translate TTS trick
      const url =
        "https://translate.google.com/translate_tts?ie=UTF-8&q=" +
        encodeURIComponent(text) +
        "&client=tw-ob&tl=" +
        lang;

      // 🎵 Audio player में set करो
      const player = document.getElementById("player");
      player.src = url;
      player.play();

      // ⬇ Auto download भी trigger करो
      const a = document.createElement("a");
      a.href = url;
      a.download = "tts.mp3";
      a.click();
    }

    window.speechSynthesis.onvoiceschanged = loadVoices;