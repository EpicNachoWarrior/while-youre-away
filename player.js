const albums = {
  blackparade: [
    { file: "theend.mp3", title: "The End." },
    { file: "dead.mp3", title: "Dead!" },
    { file: "thisishowidisappear.mp3", title: "This Is How I Disappear" },
    { file: "thesharpestlives.mp3", title: "The Sharpest Lives" },
    { file: "wttbp.mp3", title: "Welcome to the Black Parade" },
    { file: "idontloveyou.mp3", title: "I Don't Love You" },
    { file: "houseofwolves.mp3", title: "House Of Wolves" },
    { file: "cancer.mp3", title: "Cancer" },
    { file: "mama.mp3", title: "Mama" },
    { file: "sleep.mp3", title: "Sleep" },
    { file: "teenagers.mp3", title: "Teenagers" },
    { file: "disenchanted.mp3", title: "Disenchanted" },
    // add more tracks
  ],
  threecheers: [
    { file: "helena.mp3", title: "Helena" },
    { file: "giveemhellkid.mp3", title: "Cemetery Drive" },
    { file: "totheend.mp3", title: "To The End" },
    { file: "youknowwhattheydotoguys.mp3", title: "You Know What They..." },
    { file: "imnotokay.mp3", title: "I'm Not Okay (I promise)" },
    { file: "theghostofyou.mp3", title: "The Ghost of You" },

    // ...
  ],
  deepcuts: [
    { file: "youknowwhattheydotoguys.mp3", title: "You Know What They..." },
    { file: "kingforaday.mp3", title: "King For a Day" },

    // ...
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".albums-grid");
  const trackList = document.getElementById("track-list");
  const controls = document.getElementById("controls");
  const player = document.getElementById("player");
  const playpause = document.getElementById("playpause");
  const vol = document.getElementById("vol");
  const speed = document.getElementById("speed");

  grid.addEventListener("click", e => {
    const alb = e.target.closest(".album");
    if (!alb) return;
    const key = alb.getAttribute("data-album");
    trackList.innerHTML = "";
    albums[key].forEach(({file,title}) => {
      const btn = document.createElement("button");
      btn.textContent = title;
      btn.onclick = () => {
        player.src = `assets/music/${file}`;
        player.play();
        document.getElementById("track-title").innerText = title;
        controls.style.display = "block";
      };
      trackList.appendChild(btn);
    });
  });

  playpause.addEventListener("click", () => {
    if (player.paused) player.play(); else player.pause();
  });

  vol.addEventListener("input", () => { player.volume = vol.value; });
  speed.addEventListener("input", () => { player.playbackRate = speed.value; });
});
