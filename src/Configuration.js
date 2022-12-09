const ui = {
  radio: null,
  playAgain: null,
  pause: null,
  post: null,
  textInput: null,

  button: {
    zapper: null,
    timewarp: null,
    shield: null,
    health: null,
  },
  count: {
    zapper: null,
    timewarp: null,
    shield: null,
    health: null,
  },
};

const shop = {
  zapper: {
    0: 10,
    1: 200,
    2: 600,
    3: 1200,
    4: 2400,
  },
  timewarp: {
    0: 5,
    1: 100,
    2: 300,
    3: 600,
    4: 1200,
  },
  shield: {
    0: 30,
    1: 300,
    2: 900,
    3: 1800,
    4: 3600,
  },
  health: {
    0: 1,
    1: 15,
    2: 100,
    3: 300,
    4: 900,
  },
};

const userInput = {
  name: null,
};

const target = {
  words: [],
  numbers: "1 2 3 4 5 6 7 8 9 0".split(" "),
  chars: "a b c d e f g h i j k l m n o p q r s t u v x y z".split(" "),
};

const field = {
  hostile: [],
  neutral: [],
  item: [],
  environment: [],
};

const game = {
  mode: null,
  paused: false,
  over: false,
};

const player = {
  animation: null,
  position: 0,
  health: 0,
  level: 1,
  experience: 0,
  depth: 0,
  totalScore: 0,
  invulnerable: false,

  catched: {
    fishes: 0,
    letters: 0,
  },

  missed: {
    fishes: 0,
    letters: {
      total: 0,
      consecutive: 0,
    },
  },
  items: {
    zapper: false,
    timewarp: false,
    shield: false,
    cash: 0,
    levels: {
      zapper: 0,
      timewarp: 0,
      shield: 0,
      health: 0,
    },
  },
};

const config = {
  kids: {
    name: "kids",
    experience: 100,
    bosses: [
      { value: "lulu", spawnDepth: 50 },
      { value: "chk", spawnDepth: 200 },
      { value: "abe", spawnDepth: 500 },
      { value: "jor", spawnDepth: 750 },
      { value: "swo", spawnDepth: 1000 },
      { value: "hui", spawnDepth: 1250 },
      { value: "bez", spawnDepth: 1500 },
    ],
    spawn: {
      progression: Spawn.Progression,
      events: [],
      boss: Spawn.Boss,
      indexDenominator: 1,
      progressionValue: 0,
    },
    api: {
      get: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/7872d5c0-aac9-4ace-9624-96215c65d527",
      put: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/7872d5c0-aac9-4ace-9624-96215c65d527?apiKey=74595edf-2138-43c5-aee8-0b94a8c76fac",
      data: {},
    },
  },
  easy: {
    name: "easy",
    experience: 200,
    bosses: [
      { value: "chtulu", spawnDepth: 50 },
      { value: "chkrac", spawnDepth: 200 },
      { value: "abezeth", spawnDepth: 500 },
      { value: "jormun", spawnDepth: 750 },
      { value: "sworde", spawnDepth: 1000 },
      { value: "huitzi", spawnDepth: 1250 },
      { value: "bezelle", spawnDepth: 1500 },
    ],
    spawn: {
      progression: Spawn.Progression,
      events: [],
      boss: Spawn.Boss,
      indexDenominator: 2,
      progressionValue: 0.5,
    },
    api: {
      get: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/2bf39cf4-8b8c-40da-b4b6-328ce40363ca",
      put: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/2bf39cf4-8b8c-40da-b4b6-328ce40363ca?apiKey=74595edf-2138-43c5-aee8-0b94a8c76fac",
      data: {},
    },
  },
  hard: {
    name: "hard",
    experience: 330,
    bosses: [
      { value: "chtululu", spawnDepth: 50 },
      { value: "chkracken", spawnDepth: 200 },
      { value: "abezethibou", spawnDepth: 500 },
      { value: "jormungandr", spawnDepth: 750 },
      { value: "swordeath", spawnDepth: 1000 },
      { value: "huitzilopochtli", spawnDepth: 1250 },
      { value: "bezzellebobba", spawnDepth: 1500 },
    ],
    spawn: {
      progression: Spawn.Progression,
      events: [Spawn.Double, Spawn.Triple, Spawn.Brute, Spawn.Random],
      boss: Spawn.Boss,
      indexDenominator: 3,
      progressionValue: 1,
    },
    api: {
      get: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/0d51decd-56ba-45d1-ace6-eec4ddb43bec",
      put: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/0d51decd-56ba-45d1-ace6-eec4ddb43bec?apiKey=74595edf-2138-43c5-aee8-0b94a8c76fac",
      data: {},
    },
  },
};
