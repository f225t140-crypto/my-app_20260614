const STATE_KEY = "potsupotsu-diary-state-v2";
const LEGACY_PIXELS_KEY = "hitomasu-diary-pixels";
const EXCHANGE_RESET_ONCE_KEY = "potsupotsu-exchange-reset-2026-06-14-v1";
const EMPTY_COLOR = "#f4eddf";

const PALETTE = [
  "#343832", "#6c665d", "#f4eddf", "#fffaf0",
  "#f0c6b4", "#ce6b55", "#df9252", "#e2b65e",
  "#8ea071", "#728b78", "#5f8b88", "#6f8e9b",
  "#6f7eaa", "#89719a", "#ad7891", "#b98d69"
];

const TAG_GROUPS = [
  { label: "気分", tags: ["うれしい", "たのしい", "ねむい", "つかれた", "のんびり", "そわそわ", "かなしい", "なんでもない日"] },
  { label: "空・天気", tags: ["そら", "晴れ", "くもり", "雨", "雪", "風", "夕焼け", "夜"] },
  { label: "できごと", tags: ["さんぽ", "学校", "仕事", "買いもの", "映画", "音楽", "読書", "おでかけ"] },
  { label: "食べもの", tags: ["ごはん", "パン", "おやつ", "コーヒー", "お弁当", "果物", "あまいもの", "おいしかった"] },
  { label: "もの・風景", tags: ["花", "植物", "動物", "街", "部屋", "かわいい", "きれい", "変なもの"] }
];

const SAMPLE_USERS = [
  {
    id: "tamago",
    name: "たまご",
    profileTags: ["映画", "夜型", "食べ物"],
    diaryTags: ["ごはん", "うれしい"],
    avatar: "#e2b65e",
    palette: { b: "#8f6950", w: "#fffaf0", y: "#e2b65e" },
    art: [
      "bbbbbbbbb", "b.......b", "b..www..b", "b.wwwww.b", "b.wwyww.b",
      "b.wwwww.b", "b..www..b", "b.......b", "bbbbbbbbb"
    ]
  },
  {
    id: "yugata",
    name: "夕方",
    profileTags: ["散歩", "空", "のんびり"],
    diaryTags: ["そら", "さんぽ"],
    avatar: "#ce6b55",
    palette: { s: "#e8b97c", o: "#df9252", r: "#ce6b55", n: "#6a5b65", d: "#343832" },
    art: [
      "sssssssss", "ssssossss", "sssooooss", "ssoooooos", "rrrrrrrrr",
      "nnnnnnnnn", "nnndnnndn", "ddddddddd", "ddddddddd"
    ]
  },
  {
    id: "nemui",
    name: "ねむい人",
    profileTags: ["音楽", "雨", "ひとり時間"],
    diaryTags: ["雨", "ねむい"],
    avatar: "#6f7eaa",
    palette: { f: "#4e566d", b: "#86a6b4", w: "#dce8e8", r: "#6f7eaa" },
    art: [
      "fffffffff", "fbbwbbwbf", "fbwbbwbbf", "fbbwbbwbf", "fffffffff",
      "fbwbbwbbf", "fbbwbbwbf", "fbwbbwbbf", "fffffffff"
    ]
  },
  {
    id: "karasu",
    name: "からす",
    profileTags: ["朝", "学校", "そら"],
    diaryTags: ["学校", "そら"],
    avatar: "#5f8b88",
    palette: { s: "#b8d0cf", n: "#343832", y: "#e2b65e" },
    art: [
      "sssssssss", "sssssssss", "ssnnsssss", "snnnnssys", "nnnnnnsss",
      "ssnnnssss", "ssnnsssss", "snnssssss", "sssssssss"
    ]
  },
  {
    id: "mochi",
    name: "もち",
    profileTags: ["ごはん", "かわいい", "なんでもない日"],
    diaryTags: ["ごはん", "かわいい"],
    avatar: "#8ea071",
    palette: { w: "#fffaf0", n: "#343832", g: "#728b78", p: "#f0c6b4" },
    art: [
      ".........", "....w....", "...www...", "..wwwww..", ".wwwwwww.",
      ".wwwwwww.", ".wgggggw.", "..ggggg..", "...ggg..."
    ]
  }
];

const SAMPLE_WORK_VARIANTS = {
  tamago: [
    {
      tags: ["映画", "おやつ"],
      palette: { y: "#e2b65e", w: "#fffaf0", r: "#ce6b55" },
      art: [
        ".........", "..yyyyy..", ".ywywywy.", ".yyyyyyy.", "..rrrrr..",
        "..rwrwr..", "..rrrrr..", "...rrr...", "........."
      ]
    },
    {
      tags: ["夜", "映画"],
      palette: { n: "#343832", y: "#e2b65e" },
      art: [
        "nnnnnnnnn", "n.......n", "n..yyyy.n", "n.yyyyy.n", "n..yyyy.n",
        "n.......n", "nnnnnnnnn", "...n.n...", "..nnnnn.."
      ]
    }
  ],
  yugata: [
    {
      tags: ["さんぽ", "おでかけ"],
      palette: { r: "#ce6b55", n: "#343832" },
      art: [
        ".........", ".........", "..rr.....", "..rrrr...", "..r..rr..",
        "..r...rr.", "..rrrrrr.", "...nn.nn.", "........."
      ]
    },
    {
      tags: ["花", "夕焼け"],
      palette: { y: "#e2b65e", g: "#728b78", t: "#b98d69" },
      art: [
        "..y...y..", ".yyy.yyy.", "..y...y..", "..g...g..", "...ggg...",
        "...ttt...", "..ttttt..", ".ttttttt.", "ttttttttt"
      ]
    }
  ],
  nemui: [
    {
      tags: ["音楽", "ひとり時間"],
      palette: { n: "#4e566d" },
      art: [
        ".........", "..nnnnn..", ".n.....n.", "n.......n", "n.......n",
        "nn.....nn", "nn.....nn", ".n.....n.", "........."
      ]
    },
    {
      tags: ["夜", "ねむい"],
      palette: { y: "#e2b65e", n: "#4e566d", w: "#dce8e8" },
      art: [
        "......yyy", "......yyy", ".......y.", ".........", "nnnnnnnnn",
        "nwwwwwwwn", "nwwwwwwwn", "nnnnnnnnn", "........."
      ]
    }
  ],
  karasu: [
    {
      tags: ["学校", "変なもの"],
      palette: { y: "#e2b65e", t: "#b98d69", n: "#343832" },
      art: [
        ".........", "....y....", "...yyy...", "...ttt...", "...ttt...",
        "...ttt...", "...nnn...", "....n....", "........."
      ]
    },
    {
      tags: ["学校", "そら"],
      palette: { b: "#6f8e9b", y: "#e2b65e" },
      art: [
        "bbbbbbbbb", "b...b...b", "b.y.b.y.b", "b...b...b", "bbbbbbbbb",
        "b...b...b", "b...b...b", "b...b...b", "bbbbbbbbb"
      ]
    }
  ],
  mochi: [
    {
      tags: ["コーヒー", "のんびり"],
      palette: { w: "#fffaf0", t: "#b98d69" },
      art: [
        ".........", ".........", "..wwwww..", ".wtttttw.", ".wtttttww",
        ".wtttttw.", "..wwwww..", "...www...", "........."
      ]
    },
    {
      tags: ["果物", "かわいい"],
      palette: { g: "#728b78", r: "#ce6b55", w: "#fffaf0" },
      art: [
        "....g....", "...ggg...", "..rrrrr..", ".rrrrrrr.", "rrwrrrwrr",
        "rrrrrrrrr", ".rrrrrrr.", "..rrrrr..", "...rrr..."
      ]
    }
  ]
};

const LOGO_ROWS = [
  ".........", "...cc....", "..cccc...", "..cyyc...", "..cyyc...",
  "...cc....", "...ss....", "..ssss...", "...ss...."
];

const LOGO_PALETTE = {
  c: "#ce6b55",
  y: "#e2b65e",
  s: "#728b78"
};

const screens = [...document.querySelectorAll(".screen")];
const navItems = [...document.querySelectorAll(".nav-item")];
const editorGrid = document.querySelector("#editor-grid");
const undoButton = document.querySelector("#undo-button");
const redoButton = document.querySelector("#redo-button");
const eraserButton = document.querySelector("#eraser-button");
const eyedropperButton = document.querySelector("#eyedropper-button");
const toast = document.querySelector("#toast");

let state = loadState();
resetExchangeCountOnce();
let pixels = state.todayPixels.slice();
let selectedTags = state.todayTags.slice();
let selectedColor = PALETTE[5];
let isErasing = false;
let isEyedropper = false;
let isDrawing = false;
let strokeBefore = null;
let strokeChanged = false;
let lastPaintedIndex = -1;
let undoStack = [];
let redoStack = [];
let currentSample = SAMPLE_USERS[0];
let currentScreen = "today";
let detailReturnScreen = "records";
let recordFilterDate = "";
let recordFilterTag = "";
let waitingTimers = [];
let toastTimer;

function rowsToPixels(rows, palette) {
  return rows.join("").split("").map((key) => palette[key] || EMPTY_COLOR);
}

function artToPixels(sample) {
  return rowsToPixels(sample.art, sample.palette);
}

function getSampleWorks(sample) {
  const variants = SAMPLE_WORK_VARIANTS[sample.id] || [];
  return [
    {
      id: `${sample.id}-latest`,
      date: offsetDateKey(0),
      pixels: artToPixels(sample),
      tags: sample.diaryTags
    },
    ...variants.map((work, index) => ({
      id: `${sample.id}-variant-${index}`,
      date: offsetDateKey(index === 0 ? -3 : -7),
      pixels: rowsToPixels(work.art, work.palette),
      tags: work.tags
    }))
  ];
}

function blankPixels() {
  return Array(81).fill(EMPTY_COLOR);
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function offsetDateKey(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return localDateKey(date);
}

function createDemoRecords() {
  return [
    { date: offsetDateKey(-1), pixels: artToPixels(SAMPLE_USERS[1]), tags: ["そら", "さんぽ"] },
    { date: offsetDateKey(-3), pixels: artToPixels(SAMPLE_USERS[0]), tags: ["ごはん", "うれしい"] },
    { date: offsetDateKey(-6), pixels: artToPixels(SAMPLE_USERS[2]), tags: ["雨", "ねむい"] }
  ];
}

function createInitialState() {
  const today = localDateKey();
  let legacyPixels = null;

  try {
    const parsed = JSON.parse(localStorage.getItem(LEGACY_PIXELS_KEY));
    if (Array.isArray(parsed) && parsed.length === 81) legacyPixels = parsed;
  } catch {
    legacyPixels = null;
  }

  const initial = {
    version: 2,
    dateKey: today,
    todayPixels: legacyPixels || blankPixels(),
    todayTags: [],
    todaySaved: Boolean(legacyPixels),
    records: createDemoRecords(),
    exchangeDate: today,
    exchangeLeft: 3,
    partnerIds: ["yugata", "mochi"]
  };

  if (legacyPixels) {
    initial.records.unshift({ date: today, pixels: legacyPixels, tags: [] });
  }

  return initial;
}

function normalizeState(saved) {
  const initial = createInitialState();
  const normalized = {
    version: 2,
    dateKey: typeof saved.dateKey === "string" ? saved.dateKey : initial.dateKey,
    todayPixels: Array.isArray(saved.todayPixels) && saved.todayPixels.length === 81
      ? saved.todayPixels
      : initial.todayPixels,
    todayTags: Array.isArray(saved.todayTags) ? saved.todayTags.slice(0, 3) : [],
    todaySaved: Boolean(saved.todaySaved),
    records: Array.isArray(saved.records) ? saved.records.filter(isValidRecord) : initial.records,
    exchangeDate: typeof saved.exchangeDate === "string" ? saved.exchangeDate : initial.exchangeDate,
    exchangeLeft: Number.isInteger(saved.exchangeLeft) ? Math.max(0, Math.min(3, saved.exchangeLeft)) : 3,
    partnerIds: Array.isArray(saved.partnerIds) ? [...new Set(saved.partnerIds)] : initial.partnerIds
  };

  return applyDailyRollover(normalized);
}

function isValidRecord(record) {
  return record && typeof record.date === "string" && Array.isArray(record.pixels) && record.pixels.length === 81;
}

function applyDailyRollover(saved) {
  const today = localDateKey();

  if (saved.dateKey !== today) {
    if (saved.todaySaved && Array.isArray(saved.todayPixels)) {
      upsertRecord(saved.records, {
        date: saved.dateKey,
        pixels: saved.todayPixels,
        tags: saved.todayTags || []
      });
    }

    saved.dateKey = today;
    saved.todayPixels = blankPixels();
    saved.todayTags = [];
    saved.todaySaved = false;
  }

  if (saved.exchangeDate !== today) {
    saved.exchangeDate = today;
    saved.exchangeLeft = 3;
  }

  return saved;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STATE_KEY));
    if (saved && saved.version === 2) return normalizeState(saved);
  } catch {
    // A fresh state is created below when stored data is unavailable.
  }

  const initial = createInitialState();
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(initial));
  } catch {
    // The prototype remains usable in memory when storage is blocked.
  }
  return initial;
}

function resetExchangeCountOnce() {
  try {
    if (localStorage.getItem(EXCHANGE_RESET_ONCE_KEY) === "done") return;
    state.exchangeDate = localDateKey();
    state.exchangeLeft = 3;
    localStorage.setItem(EXCHANGE_RESET_ONCE_KEY, "done");
    saveState();
  } catch {
    state.exchangeDate = localDateKey();
    state.exchangeLeft = 3;
  }
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch {
    showToast("この環境では保存を続けられませんでした");
  }
}

function ensureCurrentDay() {
  const previousDate = state.dateKey;
  const previousExchangeDate = state.exchangeDate;
  state = applyDailyRollover(state);

  if (state.dateKey !== previousDate || state.exchangeDate !== previousExchangeDate) {
    pixels = state.todayPixels.slice();
    selectedTags = state.todayTags.slice();
    undoStack = [];
    redoStack = [];
    saveState();
  }
}

function upsertRecord(records, record) {
  const index = records.findIndex((item) => item.date === record.date);
  const safeRecord = {
    date: record.date,
    pixels: record.pixels.slice(),
    tags: (record.tags || []).slice(0, 3)
  };

  if (index >= 0) records[index] = safeRecord;
  else records.push(safeRecord);
}

function makeGrid(element, colors, interactive = false) {
  element.innerHTML = "";
  colors.forEach((color, index) => {
    const cell = document.createElement(interactive ? "button" : "span");
    cell.className = "pixel-cell";
    cell.style.backgroundColor = color;
    cell.dataset.index = index;

    if (interactive) {
      cell.type = "button";
      cell.setAttribute("role", "gridcell");
      cell.setAttribute("aria-label", `${Math.floor(index / 9) + 1}行 ${index % 9 + 1}列`);
    }

    element.appendChild(cell);
  });
}

function renderLogo() {
  const logo = document.querySelector("#logo-grid");
  logo.innerHTML = "";
  LOGO_ROWS.join("").split("").forEach((key) => {
    const cell = document.createElement("i");
    cell.style.backgroundColor = LOGO_PALETTE[key] || "transparent";
    logo.appendChild(cell);
  });
}

function makeTagChip(label, className = "tag-chip") {
  const chip = document.createElement("span");
  chip.className = className;
  chip.textContent = label;
  return chip;
}

function renderTagRow(element, tags, className = "tag-chip") {
  element.innerHTML = "";
  tags.slice(0, 3).forEach((tag) => element.appendChild(makeTagChip(tag, className)));
}

function renderCounter(element, left) {
  element.innerHTML = "";
  for (let index = 0; index < 3; index += 1) {
    const pip = document.createElement("i");
    pip.classList.toggle("is-used", index >= left);
    element.appendChild(pip);
  }
}

function formatToday(date = new Date()) {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(date);
}

function formatRecordDate(dateKey) {
  const date = new Date(`${dateKey}T12:00:00`);
  if (Number.isNaN(date.getTime())) return dateKey;
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(date);
}

function hasDrawing(colors = pixels) {
  return colors.some((color) => color.toLowerCase() !== EMPTY_COLOR);
}

function renderToday() {
  document.querySelector("#today-date").textContent = formatToday();
  makeGrid(document.querySelector("#today-preview"), pixels);

  const status = document.querySelector("#today-save-status");
  const emptyCopy = document.querySelector("#today-empty-copy");
  const drawButton = document.querySelector("#today-draw-button");
  const exchangeButton = document.querySelector("#today-exchange-button");

  status.textContent = state.todaySaved ? "今日の日記・保存済み" : hasDrawing() ? "描きかけ" : "まだ描いていません";
  status.classList.toggle("is-saved", state.todaySaved);
  drawButton.lastChild.textContent = state.todaySaved ? " 絵日記を描き直す" : " 絵日記を描く";
  exchangeButton.disabled = state.exchangeLeft === 0;

  renderTagRow(document.querySelector("#today-tags"), state.todaySaved ? state.todayTags : []);
  emptyCopy.hidden = state.todaySaved && state.todayTags.length > 0;
  emptyCopy.textContent = state.todaySaved
    ? state.todayTags.length ? "" : "今日は、ことばを付けない一枚。"
    : "小さな今日を、81マスに残してみましょう。";

  document.querySelector("#today-exchange-left").textContent = state.exchangeLeft;
  renderCounter(document.querySelector("#today-counter-pips"), state.exchangeLeft);
}

function renderEditor() {
  makeGrid(editorGrid, pixels, true);
  updateHistoryButtons();
}

function renderPalette() {
  const palette = document.querySelector("#palette");
  palette.innerHTML = "";

  PALETTE.forEach((color) => {
    const button = document.createElement("button");
    button.className = "color-swatch";
    button.type = "button";
    button.style.setProperty("--swatch", color);
    button.dataset.color = color;
    button.setAttribute("aria-label", `色 ${color}`);
    button.classList.toggle("is-selected", color === selectedColor && !isErasing);
    button.addEventListener("click", () => selectColor(color));
    palette.appendChild(button);
  });
}

function selectColor(color) {
  selectedColor = color;
  isErasing = false;
  isEyedropper = false;
  eraserButton.classList.remove("is-active");
  eraserButton.setAttribute("aria-pressed", "false");
  eyedropperButton.classList.remove("is-active");
  eyedropperButton.setAttribute("aria-pressed", "false");
  document.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.classList.toggle("is-selected", swatch.dataset.color === color);
  });
}

function useEyedropper(index) {
  const sampledColor = pixels[index];
  selectColor(sampledColor);
  document.querySelector("#custom-color").value = sampledColor;
  showToast(sampledColor === EMPTY_COLOR ? "背景色を選びました" : "キャンバスから色を取りました");
}

function paintIndex(index) {
  if (!Number.isInteger(index) || index < 0 || index >= 81 || lastPaintedIndex === index) return false;
  lastPaintedIndex = index;
  const nextColor = isErasing ? EMPTY_COLOR : selectedColor;
  if (pixels[index] === nextColor) return false;

  pixels[index] = nextColor;
  const cell = editorGrid.children[index];
  if (cell) {
    cell.style.backgroundColor = nextColor;
    cell.classList.remove("is-painted");
    void cell.offsetWidth;
    cell.classList.add("is-painted");
  }
  return true;
}

function finishStroke() {
  if (!isDrawing) return;
  isDrawing = false;
  lastPaintedIndex = -1;

  if (strokeChanged && strokeBefore) {
    undoStack.push(strokeBefore);
    if (undoStack.length > 60) undoStack.shift();
    redoStack = [];
    updateHistoryButtons();
  }

  strokeBefore = null;
  strokeChanged = false;
}

function pushAction(previousPixels) {
  undoStack.push(previousPixels);
  if (undoStack.length > 60) undoStack.shift();
  redoStack = [];
  updateHistoryButtons();
}

function updateHistoryButtons() {
  undoButton.disabled = undoStack.length === 0;
  redoButton.disabled = redoStack.length === 0;
}

function undo() {
  if (!undoStack.length) return;
  redoStack.push(pixels.slice());
  pixels = undoStack.pop();
  renderEditor();
}

function redo() {
  if (!redoStack.length) return;
  undoStack.push(pixels.slice());
  pixels = redoStack.pop();
  renderEditor();
}

function renderTagPicker() {
  const picker = document.querySelector("#tag-picker");
  picker.innerHTML = "";
  document.querySelector("#selected-tag-count").textContent = selectedTags.length;

  TAG_GROUPS.forEach((group) => {
    const section = document.createElement("section");
    section.className = "tag-group";
    const heading = document.createElement("h3");
    heading.textContent = group.label;
    const options = document.createElement("div");
    options.className = "tag-group-options";

    group.tags.forEach((tag) => {
      const button = document.createElement("button");
      button.className = "tag-choice";
      button.type = "button";
      button.textContent = tag;
      button.setAttribute("aria-pressed", String(selectedTags.includes(tag)));
      button.addEventListener("click", () => toggleTag(tag, button));
      options.appendChild(button);
    });

    section.append(heading, options);
    picker.appendChild(section);
  });
}

function toggleTag(tag, button) {
  if (selectedTags.includes(tag)) {
    selectedTags = selectedTags.filter((item) => item !== tag);
  } else if (selectedTags.length < 3) {
    selectedTags.push(tag);
  } else {
    button.classList.remove("is-blocked");
    void button.offsetWidth;
    button.classList.add("is-blocked");
    document.querySelector("#tag-hint").textContent = "タグは3つまでです。ひとつ外して選び直してください。";
    return;
  }

  document.querySelector("#tag-hint").textContent = selectedTags.length
    ? "今の一日に近いものを、3つまで。"
    : "選ばなくても保存できます。";
  renderTagPicker();
}

function renderTagScreen() {
  makeGrid(document.querySelector("#tag-preview"), pixels);
  renderTagPicker();
}

function saveTodayDiary() {
  state.todayPixels = pixels.slice();
  state.todayTags = selectedTags.slice(0, 3);
  state.todaySaved = true;
  upsertRecord(state.records, {
    date: state.dateKey,
    pixels: state.todayPixels,
    tags: state.todayTags
  });
  saveState();
  renderRecords();
  showScreen("today");
  showToast("今日の81マスを日記帳に保存しました");
}

function renderExchange() {
  const preview = state.todaySaved ? state.todayPixels : blankPixels();
  makeGrid(document.querySelector("#exchange-preview"), preview);

  const title = document.querySelector("#exchange-ready-title");
  const copy = document.querySelector("#exchange-ready-copy");
  const button = document.querySelector("#exchange-main-button");

  if (!state.todaySaved) {
    title.textContent = "まず今日の絵日記を描いてください";
    copy.textContent = "描いた一枚だけが、今日の交換券です。";
    button.textContent = "絵日記を描く";
    button.disabled = false;
  } else if (state.exchangeLeft === 0) {
    title.textContent = "今日の交換は、ここまで";
    copy.textContent = "また明日、3つの封筒が用意されます。";
    button.textContent = "今日は3回交換しました";
    button.disabled = true;
  } else {
    title.textContent = "今日の一枚を、封筒へ";
    copy.textContent = "誰かの一枚と、静かに入れ替わります。";
    button.textContent = "今日を交換する";
    button.disabled = false;
  }

  document.querySelector("#exchange-left").textContent = state.exchangeLeft;
  renderCounter(document.querySelector("#exchange-meter"), state.exchangeLeft);
}

function chooseSample() {
  const candidates = SAMPLE_USERS.filter((sample) => sample.id !== currentSample.id);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function clearWaitingTimers() {
  waitingTimers.forEach((timer) => clearTimeout(timer));
  waitingTimers = [];
}

function startExchange() {
  if (!state.todaySaved) {
    showScreen("draw");
    showToast("まず今日の絵日記を描きましょう");
    return;
  }

  if (state.exchangeLeft <= 0) {
    showToast("今日の交換は3回までです");
    return;
  }

  state.exchangeLeft -= 1;
  saveState();
  currentSample = chooseSample();
  makeGrid(document.querySelector("#waiting-outgoing-preview"), state.todayPixels);
  makeGrid(document.querySelector("#waiting-incoming-preview"), artToPixels(currentSample));
  document.querySelector("#waiting-message").textContent = "あなたの絵日記を封筒へ入れています";
  showScreen("waiting");
  const swapScene = document.querySelector("#swap-scene");
  swapScene.classList.remove("is-swapping");
  void swapScene.offsetWidth;
  swapScene.classList.add("is-swapping");

  waitingTimers.push(setTimeout(() => {
    document.querySelector("#waiting-message").textContent = "誰かの絵日記がこちらへ届いています";
  }, 1200));

  waitingTimers.push(setTimeout(() => {
    renderResult();
    showScreen("result");
  }, 2600));
}

function renderResult() {
  makeGrid(document.querySelector("#result-preview"), artToPixels(currentSample));
  renderTagRow(document.querySelector("#result-diary-tags"), currentSample.diaryTags);
  renderTagRow(document.querySelector("#result-profile-tags"), currentSample.profileTags, "profile-chip");
  document.querySelector("#result-name").textContent = currentSample.name;
  document.querySelector("#result-avatar").style.setProperty("--avatar", currentSample.avatar);

  const keepButton = document.querySelector("#keep-partner-button");
  const alreadySaved = state.partnerIds.includes(currentSample.id);
  keepButton.disabled = alreadySaved;
  keepButton.textContent = alreadySaved ? "相手にいます" : "また交換したい";
}

function keepCurrentPartner() {
  if (state.partnerIds.includes(currentSample.id)) return;
  state.partnerIds.push(currentSample.id);
  saveState();
  renderResult();
  renderFriends();
  showToast(`${currentSample.name}さんを相手に残しました`);
}

function renderRecords() {
  const list = document.querySelector("#record-list");
  const empty = document.querySelector("#record-empty");
  const allRecords = [...state.records].sort((a, b) => b.date.localeCompare(a.date));
  const records = allRecords.filter((record) => {
    const matchesDate = !recordFilterDate || record.date === recordFilterDate;
    const matchesTag = !recordFilterTag || (record.tags || []).includes(recordFilterTag);
    return matchesDate && matchesTag;
  });
  const dateInput = document.querySelector("#record-date-filter");
  const filterStatus = document.querySelector("#record-filter-status");
  list.innerHTML = "";
  document.querySelector("#record-count").textContent = allRecords.length;
  dateInput.value = recordFilterDate;
  if (allRecords.length) {
    const dates = allRecords.map((record) => record.date).sort();
    dateInput.min = dates[0];
    dateInput.max = dates[dates.length - 1];
  }
  const filters = [];
  if (recordFilterDate) filters.push(formatRecordDate(recordFilterDate));
  if (recordFilterTag) filters.push(`#${recordFilterTag}`);
  filterStatus.textContent = filters.length
    ? `${filters.join(" / ")}：${records.length}件`
    : `すべての記録：${allRecords.length}件`;
  empty.hidden = records.length > 0;
  empty.querySelector("p").innerHTML = recordFilterDate || recordFilterTag
    ? "この条件の記録はありません。"
    : "まだ記録はありません。<br>今日の81マスから始めましょう。";

  records.forEach((record) => {
    const card = document.createElement("article");
    card.className = "record-card";

    const openButton = document.createElement("button");
    openButton.className = "record-open-button";
    openButton.type = "button";
    openButton.setAttribute("aria-label", `${formatRecordDate(record.date)}の絵日記を開く`);
    openButton.addEventListener("click", () => openRecordDetail(record));

    const frame = document.createElement("div");
    frame.className = "record-preview-frame";
    const grid = document.createElement("div");
    grid.className = "pixel-grid record-preview";
    grid.setAttribute("aria-label", `${formatRecordDate(record.date)}の9×9絵日記`);
    makeGrid(grid, record.pixels);
    frame.appendChild(grid);

    const meta = document.createElement("div");
    meta.className = "record-meta";
    const time = document.createElement("time");
    time.dateTime = record.date;
    time.textContent = formatRecordDate(record.date);
    meta.append(time);
    openButton.append(frame, meta);

    const tags = document.createElement("div");
    tags.className = "record-tag-actions";
    if (record.tags?.length) {
      record.tags.forEach((tag) => {
        const tagButton = document.createElement("button");
        tagButton.className = "record-tag-button";
        tagButton.classList.toggle("is-active", recordFilterTag === tag);
        tagButton.type = "button";
        tagButton.textContent = `#${tag}`;
        tagButton.setAttribute("aria-label", `タグ ${tag} で記録をしぼる`);
        tagButton.addEventListener("click", () => {
          recordFilterTag = recordFilterTag === tag ? "" : tag;
          renderRecords();
        });
        tags.appendChild(tagButton);
      });
    } else {
      tags.appendChild(makeTagChip("ことばなし", "profile-chip"));
    }

    card.append(openButton, tags);
    list.appendChild(card);
  });
}

function renderFriends() {
  const list = document.querySelector("#friend-list");
  const empty = document.querySelector("#friend-empty");
  const friends = state.partnerIds
    .map((id) => SAMPLE_USERS.find((sample) => sample.id === id))
    .filter(Boolean);

  list.innerHTML = "";
  empty.hidden = friends.length > 0;
  document.querySelector("#friend-count").textContent = friends.length;

  friends.forEach((sample) => {
    const card = document.createElement("article");
    card.className = "friend-card";

    const top = document.createElement("div");
    top.className = "friend-top";
    const avatar = document.createElement("span");
    avatar.className = "pixel-avatar";
    avatar.style.setProperty("--avatar", sample.avatar);
    avatar.setAttribute("aria-hidden", "true");
    const identity = document.createElement("div");
    const name = document.createElement("h2");
    name.textContent = sample.name;
    const profileTags = document.createElement("div");
    profileTags.className = "profile-tags";
    renderTagRow(profileTags, sample.profileTags, "profile-chip");
    identity.append(name, profileTags);
    top.append(avatar, identity);

    const worksHeading = document.createElement("p");
    worksHeading.className = "friend-works-heading";
    worksHeading.textContent = "届いた作品";
    const strip = document.createElement("div");
    strip.className = "friend-work-strip";

    getSampleWorks(sample).forEach((work) => {
      const workButton = document.createElement("button");
      workButton.className = "friend-work-button";
      workButton.type = "button";
      workButton.setAttribute("aria-label", `${sample.name}さんの${formatRecordDate(work.date)}の絵日記を開く`);
      workButton.addEventListener("click", () => openFriendDetail(sample, work));

      const frame = document.createElement("div");
      frame.className = "partner-preview-frame";
      const grid = document.createElement("div");
      grid.className = "pixel-grid partner-preview";
      grid.setAttribute("aria-label", `${sample.name}さんの${formatRecordDate(work.date)}の9×9絵日記`);
      makeGrid(grid, work.pixels);
      frame.appendChild(grid);

      const label = document.createElement("strong");
      label.textContent = formatRecordDate(work.date);
      const diaryTags = document.createElement("div");
      diaryTags.className = "tag-row";
      renderTagRow(diaryTags, work.tags);
      workButton.append(frame, label, diaryTags);
      strip.appendChild(workButton);
    });

    card.append(top, worksHeading, strip);
    list.appendChild(card);
  });
}

function openRecordDetail(record) {
  detailReturnScreen = "records";
  document.querySelector("#detail-kicker").textContent = "MY DIARY";
  document.querySelector("#detail-title").textContent = "今日の記録";
  document.querySelector("#detail-subtitle").textContent = formatRecordDate(record.date);
  makeGrid(document.querySelector("#detail-preview"), record.pixels);
  renderTagRow(document.querySelector("#detail-tags"), record.tags || []);
  document.querySelector("#detail-friend").hidden = true;
  showScreen("detail");
}

function openFriendDetail(sample, work = getSampleWorks(sample)[0]) {
  detailReturnScreen = "friends";
  document.querySelector("#detail-kicker").textContent = "FROM A PARTNER";
  document.querySelector("#detail-title").textContent = `${sample.name}さんの作品`;
  document.querySelector("#detail-subtitle").textContent = `${formatRecordDate(work.date)}に届いた9×9絵日記`;
  makeGrid(document.querySelector("#detail-preview"), work.pixels);
  renderTagRow(document.querySelector("#detail-tags"), work.tags);
  document.querySelector("#detail-avatar").style.setProperty("--avatar", sample.avatar);
  document.querySelector("#detail-friend-name").textContent = sample.name;
  renderTagRow(document.querySelector("#detail-profile-tags"), sample.profileTags, "profile-chip");
  document.querySelector("#detail-friend").hidden = false;
  showScreen("detail");
}

function activeNavTarget(screenName) {
  if (screenName === "tags") return "draw";
  if (screenName === "waiting" || screenName === "result") return "exchange";
  if (screenName === "detail") return detailReturnScreen;
  return screenName;
}

function showScreen(name, updateHash = true) {
  ensureCurrentDay();
  const validNames = screens.map((screen) => screen.dataset.screen);
  const nextName = validNames.includes(name) ? name : "today";

  if (currentScreen === "waiting" && nextName !== "waiting" && nextName !== "result") {
    clearWaitingTimers();
  }

  currentScreen = nextName;
  screens.forEach((screen) => {
    const active = screen.dataset.screen === nextName;
    screen.hidden = !active;
    screen.classList.toggle("is-active", active);
  });

  const navTarget = activeNavTarget(nextName);
  navItems.forEach((item) => {
    const active = item.dataset.target === navTarget;
    item.classList.toggle("is-active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });

  if (nextName === "today") renderToday();
  if (nextName === "draw") renderEditor();
  if (nextName === "tags") renderTagScreen();
  if (nextName === "exchange") renderExchange();
  if (nextName === "result") renderResult();
  if (nextName === "records") renderRecords();
  if (nextName === "friends") renderFriends();

  if (updateHash && location.hash !== `#${nextName}`) {
    history.pushState({ screen: nextName }, "", `#${nextName}`);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

editorGrid.addEventListener("pointerdown", (event) => {
  const cell = event.target.closest(".pixel-cell");
  if (!cell || !editorGrid.contains(cell)) return;
  event.preventDefault();
  if (isEyedropper) {
    useEyedropper(Number(cell.dataset.index));
    return;
  }
  isDrawing = true;
  strokeBefore = pixels.slice();
  strokeChanged = false;
  lastPaintedIndex = -1;
  strokeChanged = paintIndex(Number(cell.dataset.index)) || strokeChanged;
  editorGrid.setPointerCapture?.(event.pointerId);
});

editorGrid.addEventListener("pointermove", (event) => {
  if (!isDrawing) return;
  const element = document.elementFromPoint(event.clientX, event.clientY);
  const cell = element?.closest(".pixel-cell");
  if (!cell || !editorGrid.contains(cell)) return;
  strokeChanged = paintIndex(Number(cell.dataset.index)) || strokeChanged;
});

editorGrid.addEventListener("pointerup", finishStroke);
editorGrid.addEventListener("pointercancel", finishStroke);

editorGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const cell = event.target.closest(".pixel-cell");
  if (!cell) return;
  event.preventDefault();
  if (isEyedropper) {
    useEyedropper(Number(cell.dataset.index));
    return;
  }
  const before = pixels.slice();
  lastPaintedIndex = -1;
  if (paintIndex(Number(cell.dataset.index))) pushAction(before);
  lastPaintedIndex = -1;
});

document.addEventListener("pointerup", finishStroke);
document.addEventListener("pointercancel", finishStroke);

undoButton.addEventListener("click", undo);
redoButton.addEventListener("click", redo);

eraserButton.addEventListener("click", () => {
  isErasing = !isErasing;
  isEyedropper = false;
  eraserButton.classList.toggle("is-active", isErasing);
  eraserButton.setAttribute("aria-pressed", String(isErasing));
  eyedropperButton.classList.remove("is-active");
  eyedropperButton.setAttribute("aria-pressed", "false");
  document.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.classList.toggle("is-selected", !isErasing && swatch.dataset.color === selectedColor);
  });
});

eyedropperButton.addEventListener("click", () => {
  isEyedropper = !isEyedropper;
  isErasing = false;
  eyedropperButton.classList.toggle("is-active", isEyedropper);
  eyedropperButton.setAttribute("aria-pressed", String(isEyedropper));
  eraserButton.classList.remove("is-active");
  eraserButton.setAttribute("aria-pressed", "false");
  document.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.classList.toggle("is-selected", !isEyedropper && swatch.dataset.color === selectedColor);
  });
  if (isEyedropper) showToast("取りたい色のマスをタップしてください");
});

document.querySelector("#clear-button").addEventListener("click", () => {
  if (!hasDrawing()) {
    showToast("キャンバスはすでに空です");
    return;
  }
  const before = pixels.slice();
  pixels = blankPixels();
  pushAction(before);
  renderEditor();
  showToast("81マスを空にしました");
});

document.querySelector("#custom-color").addEventListener("input", (event) => {
  selectColor(event.target.value);
});

document.querySelector("#go-tags-button").addEventListener("click", () => {
  selectedTags = state.todaySaved ? state.todayTags.slice() : selectedTags;
  showScreen("tags");
});

document.querySelector("#tags-back-button").addEventListener("click", () => showScreen("draw"));
document.querySelector("#final-save-button").addEventListener("click", saveTodayDiary);
document.querySelector("#today-draw-button").addEventListener("click", () => showScreen("draw"));
document.querySelector("#today-exchange-button").addEventListener("click", () => showScreen("exchange"));

document.querySelector("#exchange-main-button").addEventListener("click", () => {
  if (state.todaySaved) startExchange();
  else showScreen("draw");
});

document.querySelector("#keep-partner-button").addEventListener("click", keepCurrentPartner);
document.querySelector("#finish-button").addEventListener("click", () => showScreen("today"));
document.querySelector("#detail-back-button").addEventListener("click", () => showScreen(detailReturnScreen));
document.querySelector("#record-date-filter").addEventListener("change", (event) => {
  recordFilterDate = event.target.value;
  renderRecords();
});
document.querySelector("#record-filter-clear").addEventListener("click", () => {
  recordFilterDate = "";
  recordFilterTag = "";
  renderRecords();
});
document.querySelector("#brand-button").addEventListener("click", () => showScreen("today"));
document.querySelector("#settings-button").addEventListener("click", () => showToast("設定画面は、このプロトタイプでは準備中です"));

navItems.forEach((item) => {
  item.addEventListener("click", () => showScreen(item.dataset.target));
});

window.addEventListener("popstate", (event) => {
  const hashName = location.hash.replace("#", "");
  showScreen(event.state?.screen || hashName || "today", false);
});

renderLogo();
renderPalette();
renderRecords();
renderFriends();

const requestedScreen = location.hash.replace("#", "");
const initialScreen = requestedScreen === "home"
  ? "today"
  : requestedScreen === "partners"
    ? "friends"
    : requestedScreen === "detail"
      ? "records"
      : requestedScreen || "today";
history.replaceState({ screen: initialScreen }, "", `#${initialScreen}`);
showScreen(initialScreen, false);
