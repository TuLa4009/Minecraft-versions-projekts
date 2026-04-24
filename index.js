function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const path = el.getAttribute("data-i18n");
    if (!path) return;

    const keys = path.split(".");

    let value = keys.reduce((obj, key) => obj?.[key], translations?.[lang]);

    if (value === undefined) {
      value = keys.reduce((obj, key) => obj?.[key], translations_dop?.[lang]);
    }

    if (value !== undefined) {
      el.textContent = value;
    }
  });

  localStorage.setItem("lang", lang);

  if (typeof IeladetJaut === "function") {
    IeladetJaut();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "lv";
  setLanguage(savedLang);
});




/// Scroll darbība
const list = document.querySelector(".left_side_list");
const scroll = document.querySelector(".scroll_ind");

list.addEventListener("scroll", () => {
  const scrollTop = list.scrollTop;
  const scrollHeight = list.scrollHeight - list.clientHeight;
  const scrollPercent = scrollTop / scrollHeight;

  const scrollMove = list.clientHeight - scroll.clientHeight;
  scroll.style.top = `${scrollPercent * scrollMove}px`;
});


/// Pogas nospidens un atpazišana
const items = document.querySelectorAll(".left_side_item");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});


// Versiju dati
document.querySelector(".right_side_box").addEventListener("click", () => {
  alert(`Atvetr ${currentVersion} majaslapu.`);
});

function getTranslation(lang, path) {
  return path.split(".").reduce((obj, key) => obj?.[key], translations[lang]);
}
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".left_side_item");
  const titleBox = document.querySelector(".right_side_main_text h2");
  const textBox = document.querySelector(".right_side_main_text p");
  const imgBox = document.querySelector(".right_side_img");
  const currentLang = localStorage.getItem("lang") || "lv";

const versijasAP = {
  v1_0: {
    titleKey: "v1_0.title",
    textKey: "v1_0.text",
    img: "./img/1.0.png"
  },
  v1_2: {
    titleKey: "v1_2.title",
    textKey: "v1_2.text",
    img: "./img/1.2.png"
  },
  v1_3: {
    titleKey: "v1_3.title",
    textKey: "v1_3.text",
    img: "./img/1.3.jpg"
  },
  v1_4: {
    titleKey: "v1_4.title",
    textKey: "v1_4.text",
    img: "img/1.4.png"  
  },
  v1_5: {
    titleKey: "v1_5.title",
    textKey: "v1_5.text",
    img: "./img/1.5.jpg"  
  },  
  v1_6: {
    titleKey: "v1_6.title",
    textKey: "v1_6.text",
    img: "./img/1.6.png"
  },
  v1_7: {
    titleKey: "v1_7.title",
    textKey: "v1_7.text",
    img: "./img/1.7.png"
  },
  v1_8: {
    titleKey: "v1_8.title",
    textKey: "v1_8.text",
    img: "./img/1.8.jpg"
  },
  v1_9: {
    titleKey: "v1_9.title", 
    textKey: "v1_9.text",
    img: "./img/1.9.png"
  },
  v1_10: {
    titleKey: "v1_10.title",
    textKey: "v1_10.text",
    img: "./img/1.10.jpg"
  },
  v1_11: {
    titleKey: "v1_11.title",
    textKey: "v1_11.text",
    img: "./img/1.11.png"
  },
  v1_12: {
    titleKey: "v1_12.title",
    textKey: "v1_12.text",
    img: "./img/1.12.jpg"
  },
  v1_13: {
    titleKey: "v1_13.title",
    textKey: "v1_13.text",
    img: "./img/1.13.png"
  },
  v1_14: {
    titleKey: "v1_14.title",
    textKey: "v1_14.text",
    img: "./img/1.14.jpg"
  },
  v1_15: {
    titleKey: "v1_15.title",
    textKey: "v1_15.text",
    img: "./img/1.15.jpg"
  },
  v1_16: {
    titleKey: "v1_16.title",
    textKey: "v1_16.text",
    img: "./img/1.16.jpg"
  },
  v1_17: {
    titleKey: "v1_17.title",
    textKey: "v1_17.text",
    img: "./img/1.17.jpg"
  },
  v1_18: {
    titleKey: "v1_18.title",
    textKey: "v1_18.text",
    img: "./img/1.18.jpg"
  },
  v1_19: {
    titleKey: "v1_19.title",
    textKey: "v1_19.text",  
    img: "./img/1.19.png"
  },
  v1_20: {
    titleKey: "v1_20.title",
    textKey: "v1_20.text",
    img: "./img/1.20.png"
  },
  v1_21: {
    titleKey: "v1_21.title",
    textKey: "v1_21.text",
    img: "./img/1.21.png"
    }
  
  
};


  buttons.forEach(button => {
  button.addEventListener("click", () => {
    const key = button.dataset.versija;
    const data = versijasAP[key];

    if (!data) return;

    titleBox.setAttribute("data-i18n", data.titleKey);
    textBox.setAttribute("data-i18n", data.textKey);

    imgBox.src = data.img;

    const currentLang = localStorage.getItem("lang") || "lv";
    setLanguage(currentLang);

  });
  });
});




let currentVersion = null;


document.querySelectorAll(".left_side_item").forEach(button => {
  button.addEventListener("click", () => {
    currentVersion = button.dataset.versija;
  });
});


document.querySelector(".right_side_box").addEventListener("click", () => {
  if (!currentVersion) {
    alert("Sakuma izveleties versiju!!!");
    return;
  }

  window.location.href = `versions/${currentVersion}.html`;
});




///time
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementsByClassName("laiks")[0].innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}


/// home button
function mainPage() {
  window.location.href = "index.html";
}

//test button
function testPage() {
  window.location.href = "tests/test.html";
}

//game button

function spelePage() {
  window.location.href = "game/index.html";
}







//gif atkartošana
function nonGif() {
  let waitTime = 0;
  const timeLimit = 10;
  const repeatDelay = 20;
  const gifDuration = 4900;

  let isPlaying = false;
  let lastPlayTime = 0;

  const gif = document.querySelector(".gif");

  if (gif) gif.style.display = "none";

  function resetTimer() {
    waitTime = 0;
    lastPlayTime = 0;

    if (!isPlaying && gif) {
      gif.style.display = "none";
    }
  }

  function playGif() {
    if (!gif) return;

    gif.style.display = "block";


    const src = gif.src;
    gif.src = "";
    gif.src = src;

    isPlaying = true;
    lastPlayTime = 0;

    setTimeout(() => {
      isPlaying = false;
      gif.style.display = "none";
    }, gifDuration);
  }

  function checkIdle() {
    waitTime++;


    if (waitTime === timeLimit && !isPlaying) {
      playGif();
    }


    if (waitTime > timeLimit && !isPlaying) {
      lastPlayTime++;

      if (lastPlayTime >= repeatDelay) {
        playGif();
      }
    }
  }

  document.addEventListener("mousemove", resetTimer);
  document.addEventListener("keydown", resetTimer);
  document.addEventListener("click", resetTimer);
  document.addEventListener("scroll", resetTimer);

  setInterval(checkIdle, 1000);
}

window.addEventListener("load", nonGif);

function gamePage() {
  window.location.href = "tests/test.html";
}

// mekletais
let selectedVersion = null;


function normalizeVersion(input) {
    return input
        .toLowerCase()
        .trim()
        .replace(/^version\s*/i, "")
        .replace(/^ver\s*/i, "")
        .replace(/^v\s*/i, "")
        .replace(/[.\-\s]+/g, "_")
        .replace(/^/, "v");
}


function searchVersion() {
    const input = document.getElementById("searchInput").value;
    const formatted = normalizeVersion(input);

    if (!/^v\d+_\d+$/.test(formatted)) {
        alert("Ivadit versiju: 1.0, 1-0, v1_0");
        return;
    }

    selectedVersion = formatted;

    window.location.href = `versions/${selectedVersion}.html`;
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("searchInput")
        .addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                searchVersion();
            }
        });
});
