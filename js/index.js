function main() {
  // Array 1: Characters
  const characters = [
    'a curious scientist',
    'a wandering knight',
    'a mischievous elf',
    'a brave adventurer',
    'a retired pirate',
    'a mysterious wizard',
  ];

  // Array 2: Setting
  const settings = [
    'in a hidden forest',
    'on a distant mountain peak',
    'deep inside a forgotten temple',
    'underneath the city streets',
    'in an abandoned castle',
    'on the edge of a magical desert',
  ];

  // Array 3: Conflict
  const conflicts = [
    'seeking a long-lost artifact',
    'fighting off an ancient curse',
    'racing against time to save the kingdom',
    'trying to escape a dangerous enemy',
    'hunting down a rogue sorcerer',
    'searching for a way to break an enchantment',
  ];

  // Array 4: Action
  const actions = [
    'uncovering an ancient secret',
    'battling fierce monsters',
    'deciphering cryptic runes',
    'finding unexpected allies',
    'defeating a powerful foe',
    'making an impossible escape',
  ];

  // Array 5: Outcome
  const outcomes = [
    'discovering the true meaning of courage',
    'unlocking a new realm of magic',
    'finding a path back home',
    'securing peace for the land',
    'gaining a newfound power',
    "earning a hero's place in legend",
  ];

  // Index Counters: for use of maintaining state of the current index of each respective array.
  let characterIndex = 0;
  let settingIndex = 0;
  let conflictIndex = 0;
  let actionIndex = 0;
  let outcomeIndex = 0;

  // Counter functions that increment, reset if applicable, and update the current story string's values
  function charButtonCounter() {
    if (characterIndex < characters.length - 1) {
      characterIndex++;
    } else {
      characterIndex = 0;
    }
    updateStoryString();
  }

  function settingButtonCounter() {
    if (settingIndex < settings.length - 1) {
      settingIndex++;
    } else {
      settingIndex = 0;
    }
    updateStoryString();
  }

  function conflictButtonCounter() {
    if (conflictIndex < conflicts.length - 1) {
      conflictIndex++;
    } else {
      conflictIndex = 0;
    }
    updateStoryString();
  }

  function actionButtonCounter() {
    if (actionIndex < actions.length - 1) {
      actionIndex++;
    } else {
      actionIndex = 0;
    }
    updateStoryString();
  }

  function outcomeButtonCounter() {
    if (outcomeIndex < outcomes.length - 1) {
      outcomeIndex++;
    } else {
      outcomeIndex = 0;
    }
    updateStoryString();
  }

  // Function that uses the current index of each respective array to provide a custom story
  function updateStoryString() {
    const story = `${characters[characterIndex]} ${settings[settingIndex]}, ${conflicts[conflictIndex]}, ${actions[actionIndex]}, and ${outcomes[outcomeIndex]}.`;
    document.getElementById('story').innerText = story;
  }

  // Function to generate a random story
  function randomStory() {
    const character = characters[Math.floor(Math.random() * characters.length)];
    const setting = settings[Math.floor(Math.random() * settings.length)];
    const conflict = conflicts[Math.floor(Math.random() * conflicts.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

    const story = `${character} ${setting}, ${conflict}, ${action}, and ${outcome}.`;
    document.getElementById('story').innerText = story;
  }

  // Event listeners utilizing element IDs to attach event listeners for functions
  document
    .getElementById('nextCharacter')
    .addEventListener('click', charButtonCounter);
  document
    .getElementById('nextSetting')
    .addEventListener('click', settingButtonCounter);
  document
    .getElementById('nextConflict')
    .addEventListener('click', conflictButtonCounter);
  document
    .getElementById('nextAction')
    .addEventListener('click', actionButtonCounter);
  document
    .getElementById('nextOutcome')
    .addEventListener('click', outcomeButtonCounter);
  document.getElementById('randomStory').addEventListener('click', randomStory);

  // An initializing function call of the story string to populate the page with default information
  updateStoryString();
}
