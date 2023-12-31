let xP = 0;
let healtH = 100;
let manA = 100;
let golD = 50;
let charLevel = 0;
let currentWeapon = 0;
let currentEquipment = 0;
let fighting;
let monsterHealth;
let inventoryWeapon = ["stick"];
let inventoryEquipment = ["adventurer gear"];
let CharSkills = ["normal atk"];
let blessingTEXT = "";
let skillCardsTEXT = "";
let skillNumStart = 0;
let characterName = "";
let towndistance = 0;
let heroesParty = [];
let CharStatus = [
{ name: "poison", turn: 999  },
{ name: "stun", turn: 1 },
];
let raffleSkill = [];
let CharacterSkillList = [];
let CharacterBlessings = [];
let characterClass = "";
let hoverImage = "";
let AvatarImage = "";

//profilePanel
const backgDescrip = document.querySelector("#descript");
const avatarCard = document.querySelector("#characterDisplay");
const namebutton = document.querySelector("#nameButton");
const skillsSetText = document.querySelector("#skillsSetsText");
const blessingDisplay = document.querySelector("#blessingDisplay");
const blessingText = document.querySelector("#blessingText");
//buttons
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#characterProfileIcon");
const button9 = document.querySelector("#button9");
const button10 = document.querySelector("#button10");
const button11 = document.querySelector("#button11");
const button12 = document.querySelector("#button12");

//statusText
const text = document.querySelector("#text");
const manaText = document.querySelector("#manaText");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText =document.querySelector("#monsterHealth");
const monitor = document.querySelector("#game-monitor");
const log = document.querySelector("#logs");
//topbuttons
const inGameIconsLeft = document.querySelector('.inGameIconsLeft');
//modal1CharacterName
const modal1 = document.querySelector("#enterCharacterName");




//fight
const fightGame = document.querySelector("#fightGame");
const containersForTheeMonsters = document.querySelector(".containersForTheeMonsters");
let distancefromTown = 0;
const characterFaceAvatar = document.querySelector("#characterFaceAvatar");
const nameTextAvatar = document.querySelector("#nameTextAvatar");
const healthTextAvatar = document.querySelector("#healthTextAvatar");
const manaTextAvatar = document.querySelector("#manaTextAvatar");
let fightAvatarImageGlobal = "";
const FightText = document.querySelector("#FightText");

/* attribute */
let charName = document.querySelector('#nameInput');
const nameText = document.querySelector("#nameText");
const classText = document.querySelector("#classText");
const baseStrText = document.querySelector("#baseStatTextStr");
const baseMgkText = document.querySelector("#baseStatTextMgk");
const baseSpdText = document.querySelector("#baseStatTextSpd");
const baseAgiText = document.querySelector("#baseStatTextAgi");
const baseDefText = document.querySelector("#baseStatTextDef");
const baseResText = document.querySelector("#baseStatTextRes");
const baseHpText = document.querySelector("#baseStatTextHp");
const addedStrText = document.querySelector("#inventoryStatStr");
const addedMgkText = document.querySelector("#inventoryStatMgk");
const addedSpdText = document.querySelector("#inventoryStatSpd");
const addedAgiText = document.querySelector("#inventoryStatAgi");
const addedDefText = document.querySelector("#inventoryStatDef");
const addedResText = document.querySelector("#inventoryStatRes");
const addedHpText = document.querySelector("#inventoryStatHp");

const playerbaseStat = 
  {
    str: 10,
    mgk: 10,
    spd: 10,
    agi: 10,
    def: 10,
    res: 10,
    hp: 100
  }


const maxhealtH = Math.floor(playerbaseStat.hp + ((playerbaseStat.res *5 + playerbaseStat.def*5 / 2))); 
const  maxManA = Math.floor(100 + (playerbaseStat.mgk * 5) + playerbaseStat.str);

const playerskill = [];
const playerBag = [];



//futureshopITems
const equipments = [
  { name: 'adventurer gear', hp: 50, spd: 10, cost:100},
  { name: 'shinobi gear', str: 10, spd: 10, def: 20, cost:100}
];
const weapons = [
 
    { name: 'stick', str: 5, mgk: 5, agi: 20, cost: 0}, 
  
    { name: 'hammer', str: 50, spd: -10, cost:10},
    { name: 'heavy hammer', str: 75, spd: -20, cost:10},
  
 
    { name: 'sword', str: 30,  cost:10},
    { name: 'holy sword', str: 60, agi: 20,  cost:10},
 
  
    { name: 'enchanted stick', mgk: 30, cost:10},
    { name: 'black enchanted stick', mgk: 60, cost:10},
    { name: 'holy enchanted stick', str: 60, agi: 20, cost:10 },

];

const monsters = [
  { //0
    name: "slime",
    level: 2,
    health: 100,
    mana: 100,
    str: 4,
    mgk: 4,
    spd: 4,
    agi: 4,
    def: 10,
    res: 5,
    monsterImage: "monsImages/slime.jpg"
  },
  { //1
    name: "goblin",
    level: 10,
    health: 200,
    mana: 100,
    str: 25,
    mgk: 0,
    spd: 15,
    agi: 20,
    def: 20,
    res: 20,
    monsterImage: "monsImages/goblin.jpg"
  },
  { //2
    name: "goblin shaman",
    level: 15,
    health: 150,
    mana: 200,
    str: 5,
    mgk: 35,
    spd: 25,
    agi: 0,
    def: 20,
    res: 20,
    monsterImage: "monsImages/goblinShaman.jpg"
  },
  { //2
    name: "goblin Hob",
    level: 25,
    health: 450,
    mana: 200,
    str: 45,
    mgk: 0,
    spd: 25,
    agi: 0,
    def: 60,
    res: 60,
    monsterImage: "monsImages/hobGoblin.png"
  },
  {
    name: "fanged beast",
    level: 20,
    health: 400,
    mana: 200,
    str: 30,
    mgk: 20,
    spd: 30,
    agi: 30,
    def: 40,
    res: 20,
    monsterImage: "monsImages/goblin.jpg"
  },
  {
    name: "evolve fanged beast",
    level: 30,
    health: 500,
    mana: 400,
    str: 20,
    mgk: 20,
    spd: 50,
    agi: 30,
    def: 40,
    res: 20,
    monsterImage: "monsImages/slime.jpg"
  },
  {
    name: "dragon",
    level: 50,
    health: 1000,
    mana: 1000,
    str: 50,
    mgk: 100,
    spd: 30,
    agi: 10,
    def: 200,
    res: 200,
    monsterImage: "monsImages/smug.jpg"
  }
]
const locations = [
    {
        name: "town square", //0
        "button text": ["Go to store", "Go to dungeon", "Go to guild", "Go to Inn"],
        "button functions": [goStore, goDungeon, goGuild, goInn],
        text: "You are in the town square. You see a sign that says \"Store\".",
        bgimage: "bgimages/town.jpg"
    },
    {
        name: "store", //1
        "button text": ["Buy equipment", "Buy weapon", "Buy Equipment", "Go to town square"],
        "button functions": [buyItem, buyWeapon, buyEquipment, goTown],
        text: "You enter the store.",
        bgimage: "bgimages/town_store.jpg"
    },
    {
        name: "Intro", //2
        "button text": ["How to play", "Ourbackstory", "Records", "Start the game"],
        "button functions": [tutorials, tutorials/*backstory*/, tutorials/*record*/, phase1],
        text: "Welcome to Dragon Quest. You must defeat the dragon that eat humans.\n Should we start the game? Use the buttons above.",
        bgimage: "bgimages/cover.jpg"
    },
    {
      name: "phase1", //3
      "button text": ["Shield", "Ninja", "Wizard", "Priest"],
      "button functions": [phase1A, phase1B, phase1C, phase1D],
      text: "four gods has gazed upon ur travelling soul while in passing..\nchoose one of the gods gift\n",
      bgimage: "bgimages/afterlife.jpg"
    },
    {
      name: "phase2", //4
      "button text": ["recieve", "a", "random", "blessing"],
      "button functions": [ phase2E, phase2E, phase2E, phase2E ],
      text: "one of the gods is pleased with your choice \n ...they want to give you a blessing choose a god",
      bgimage: "bgimages/afterlife.jpg"
    },
    {
      name: "phase3", //5
      "button text": ["recieve", "a", "random", "skill"],
      "button functions": [phase3I, phase3I, phase3I, phase3I], /*[phase3A, phase3B, phase3C, phase3D], */
      text: "You're almost by the end of the river.. Choose one last time.. ",
      bgimage: "bgimages/afterlife.jpg"
    },
    {
      name: "NameInput", //6
      "button text": ["name", "your", "character", "to continue"],
      "button functions": [ tutorials2, tutorials2, tutorials2, tutorials2],/*[getQuest, adventurerHall, gotoReceptionist, contributeToGuild],*/
      text: "last thing.. what is your name",
      bgimage: "bgimages/afterlife.jpg"
    },
    {
      name: "goDungeon", //7
      "button text": ["goblin cave", "unsleeping forest", "far far away", "back to town"],
      "button functions": [ goGoblin, tutorials, tutorials, goTown],/*[getQuest, adventurerHall, gotoReceptionist, contributeToGuild],*/
      text: "You enter the goblin cave",
      bgimage: "bgimages/cave.jpg"
    },
    {
    name: "goGoblin", //8
    "button text": ["forward", "forward", "forward", "back"],
    "button functions": [ caveEvent, caveEvent,, caveEvent, goTown],/*[getQuest, adventurerHall, gotoReceptionist, contributeToGuild],*/
    text: "you explore the goblin cave",
    bgimage: "bgimages/cave.jpg"
    },
    {
        name: "goInn", //8
        "button text": ["Buy Foods", "Check-in", "Ask for info", "Gamble"],
        "button functions": [ tutorials, tutorials, tutorials, goTown],/*[attack, dodge, goTown, gambleInn],*/
        text: "You are fighting a monster.",
        bgimage: "bgimages/cave2.jpg"
    },
    {
      name: "Buy Equipment",
      "button text": ["Buy equipment", "Buy weapon", "Buy Equipment", "Go to town square"],
      "button functions": [buyItem, buyWeapon, buyEquipment, goTown],
      text: "You enter the store.",
      bgimage: "bgimages/town_store.jpg"
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, goTown],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
        bgimage: "bgimages/slime.jpg"
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. ☠️",
        bgimage: "bgimages/slime.jpg"
    },
    { 
        name: "win", 
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
        "button functions": [restart, restart, restart], 
        text: "You defeat the dragon! YOU WIN THE GAME! 🎉" ,
        bgimage: "bgimages/slime.jpg"
    },
    {
        name: "easter egg",
        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
];

// initialize buttons
button1.onclick = tutorials;
button2.onclick = tutorials;
button3.onclick = tutorials;/*records;*/
button4.onclick = phase1;/*Start;*/
nameButton.onclick = declareCharName;
button5.addEventListener('click', function() {
  const expanded  = this.getAttribute('aria-expanded') === 'true' || false;
  
  if (expanded) {
    this.setAttribute('aria-expanded', 'false');
    backgDescrip.classList.add('animate-scale')
    backgDescrip.style.display = 'none'; // Hide the div
    backgDescrip.setAttribute('aria-hidden', 'true');
    ; 
  } else {
    this.setAttribute('aria-expanded', 'true');
    backgDescrip.classList.remove('animate-scale'); 
    backgDescrip.style.display = 'grid'; // Show the div
    backgDescrip.setAttribute('aria-hidden', 'false');
  }
});




//updates
function update(location) {
  console.log("hello");
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button4.innerText = location["button text"][3];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  button4.onclick = location["button functions"][3];
  text.innerText = location.text;
  monitor.style.backgroundImage = `url(${location.bgimage})`;
  console.log(location.bgimage);
}
//functioning locations
function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goDungeon() {
  distancefromTown = 0;
  update(locations[7]);
}
function goGoblin() {
  console.log(characterName);
  update(locations[8]);
}


//non-Functioninglocations
function goGuild() {
  update(locations[1]);
}
function goInn() {
  update(locations[1]);
}


function buyItem() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = golD;
    healthText.innerText = healtH;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = golD;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventoryWeapon.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}
function buyEquipment() {
  if (currentEquipment < equipment.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentEquipment++;
      goldText.innerText = golD;
      let newEquipment = equipments[currentEquipment].name;
      text.innerText = "You now have a " + newEquipment + ".";
      inventoryEquipment.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a equipment.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellEquipment;
  }
}

function sellWeapon() {
  if (inventoryEquipment.length > 1) {
    golD += 15;
    goldText.innerText = golD;
    let currentEquipment = inventoryEquipment.shift();
    text.innerText = "You sold a " + currentEquipment + ".";
    text.innerText += " In your inventory you have: " + inventoryEquipment;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}
function sellWeapon() {
  if (inventoryWeapon.length > 1) {
    golD += 15;
    goldText.innerText = golD;
    let currentWeapon = inventoryWeapon.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventoryWeapon;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    fighting === 2 ? winGame() : defeatMonster();
  }
  if (Math.random() <= .1 && inventoryWeapon.length !== 1) {
    text.innerText += " Your " + inventoryWeapon.pop() + " breaks.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = golD;
  xpText.innerText = xp;
  update(locations[4]);
}




function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = golD;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}


/*temporary function */
function tutorials() {
  update(locations[2])
  text.innerText = "click buttons above so something might happen, goodluck!!";
  log.innerText += "The game isnt final yet but i plan to put a tutorial here\n";
}
function tutorials2() {
  update(locations[6])
  text.innerText = "click buttons above so something might happen, goodluck!!";
  log.innerText += "Name ur character\n";
}
function start() {
  update(locations[99])
}

function pick(guess) {
  let numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.indexOf(guess) !== -1) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = golD;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}

function changeBackgroundImage(bgimage) {
      
      monitor.style.backgroundImage = `url('${bgimage}')`;
      console.log(bgimage);
}

function declareCharName() {
 
  characterName = charName.value;
  nameButton.style.display = 'none';
  charName.style.display = 'none';
  modal1.style.display = 'none';
  nameText.innerText = characterName;
  console.log(characterName);

  log.innerText += "\nSTART YOUR JOURNEY TO KILL THE DRAGON!";
  log.innerText += "\n press charater button on top to hide character panel";
  InitializeCharStatus();
  update(locations[0]);
}



function phase1() {
  log.innerText += "You are being reborn to another world.. \n"
  log.innerText += "Your physical form  depends on your choices while in passing \n"
  log.innerText += "Choose your destiny \n"
  update(locations[3]);
}
function phase1A() {
  const charClass = {
    name: "ShieldHero",
    str: 20,
    mgk: 0,
    spd: 5,
    agi: 0,
    def: 20,
    res: 20,
    hp: 150,
    classImage: "newimages/Shield.png",
    classHoverImage: "newimages/hoverShield.png",
    BgCard: "newimages/descrip1.jpg",
    classFightAvatar: "avatarChar/ShieldAvatar.png"
  }
  characterClass = charClass.name;
  bgDescripAvatar(charClass.BgCard, charClass.classImage);
  characterClass = charClass.name;
  playerbaseStat.str += charClass.str;
  playerbaseStat.mgk += charClass.mgk;
  playerbaseStat.spd += charClass.spd;
  playerbaseStat.agi += charClass.agi;
  playerbaseStat.def += charClass.def;
  playerbaseStat.res += charClass.res;
  playerbaseStat.hp += charClass.hp;
  console.log(playerbaseStat);
  log.innerText += "You are the ShieldHero, a male edgy MC you have no bitches\n that turned furry";
  AvatarImage = charClass.classImage;
  hoverImage = charClass.classHoverImage;
  fightAvatarImageGlobal = charClass.classFightAvatar;
  console.log(fightAvatarImageGlobal);
  updateAttributes();
    setTimeout(function() {
      backgDescrip.style.display = 'grid';
      backgDescrip.style.opacity = '1';     
}, 1000)

  update(locations[4]); 

}
function phase1B() {
  const charClass = {
    name: "ShinobiWoman",
    str: 25,
    mgk: 0,
    spd: 25,
    agi: 15,
    def: 0,
    res: 0,
    hp: 110,
    classImage: "newimages/Ninja.png",
    classHoverImage: "newimages/hoverNinja.png",
    classBgCard: "newimages/descrip2.jpg",
    classFightAvatar: "avatarChar/NinjaAvatar.png"
  }
  
  characterClass = charClass.name;
  bgDescripAvatar(charClass.classBgCard, charClass.classImage);
  characterClass = charClass.name;
  playerbaseStat.str += charClass.str;
  playerbaseStat.mgk += charClass.mgk;
  playerbaseStat.spd += charClass.spd;
  playerbaseStat.agi += charClass.agi;
  playerbaseStat.def += charClass.def;
  playerbaseStat.res += charClass.res;
  playerbaseStat.hp += charClass.hp;
  console.log(playerbaseStat);
  log.innerText += "Big booby ninja, high speed and killer dmg";
  AvatarImage = charClass.classImage;
  hoverImage = charClass.classHoverImage;
  fightAvatarImageGlobal = charClass.classFightAvatar;

  updateAttributes();
  setTimeout(function() {
    backgDescrip.style.display = 'grid';
    backgDescrip.style.opacity = '1';     
}, 1000)
  setTimeout(function() {
    update(locations[4]); 
}, 2000)
}
function phase1C() {
  const charClass = {
    name: "MagicalWoman",
    str: 0,
    mgk: 40,
    spd: 5,
    agi: 15,
    def: 0,
    res: 5,
    hp: 110,
    classImage: "newimages/Wizard.png",
    classHoverImage: "newimages/hoverWizard.png",
    classBgCard: "newimages/descrip3.jpg",
    classFightAvatar: "avatarChar/WizardAvatar.png"
  }
  
  characterClass = charClass.name;
  bgDescripAvatar(charClass.classBgCard, charClass.classImage);
  characterClass = charClass.name;
  playerbaseStat.str += charClass.str;
  playerbaseStat.mgk += charClass.mgk;
  playerbaseStat.spd += charClass.spd;
  playerbaseStat.agi += charClass.agi;
  playerbaseStat.def += charClass.def;
  playerbaseStat.res += charClass.res;
  playerbaseStat.hp += charClass.hp;
  console.log(playerbaseStat);
  log.innerText += "small boing boing, EXPLOSIOON";
  AvatarImage = charClass.classImage;
  hoverImage = charClass.classHoverImage;
  fightAvatarImageGlobal = charClass.classFightAvatar;
  updateAttributes();
  setTimeout(function() {
    backgDescrip.style.display = 'grid';
    backgDescrip.style.opacity = '1';     
}, 1000)
    update(locations[4]); 

}
function phase1D() {
  const charClass = {
    name: "CorruptPriest",
    str: 0,
    mgk: 20,
    spd: 10,
    agi: 0,
    def: 15,
    res: 15,
    hp: 120,
    classImage: "newimages/Priest.png",
    classHoverImage: "newimages/hoverPriest.png",
    classBgCard: "newimages/descrip4.jpg",
    classFightAvatar: "avatarChar/PriestAvatar.png"

  }
  
  characterClass = charClass.name;
  bgDescripAvatar(charClass.classBgCard, charClass.classImage);
  characterClass = charClass.name;
  playerbaseStat.str += charClass.str;
  playerbaseStat.mgk += charClass.mgk;
  playerbaseStat.spd += charClass.spd;
  playerbaseStat.agi += charClass.agi;
  playerbaseStat.def += charClass.def;
  playerbaseStat.res += charClass.res;
  playerbaseStat.hp += charClass.hp;
  HoverImage = charClass.classHoverImage;
  console.log(playerbaseStat);
  log.innerText += " You have become a Priest\nNobody dying in this party. We do it with style by dying slowly with cigarrette and alcohol";
  AvatarImage = charClass.classImage;
  hoverImage = charClass.classHoverImage;
  fightAvatarImageGlobal = charClass.classFightAvatar;

  updateAttributes();
  setTimeout(function() {
    backgDescrip.style.display = 'grid';
    backgDescrip.style.opacity = '1';
    avatarCard.style.opacity = "1";     
}, 500);
    update(locations[4]); 

}



function updateAttributes() {

classText.innerText = `${characterClass}`;  
baseStrText.innerText = `${playerbaseStat.str}`;
baseMgkText.innerText = `${playerbaseStat.mgk}`;
baseSpdText.innerText = `${playerbaseStat.spd}`;
baseAgiText.innerText = `${playerbaseStat.agi}`;
baseDefText.innerText = `${playerbaseStat.def}`;
baseResText.innerText = `${playerbaseStat.res}`;
baseHpText.innerText = `${playerbaseStat.hp}`;
}

/*phase2 blessings */

function phase2E() {
  let diceRoll = Math.round(Math.random()*100);
  let blessingsNum = 0;
  console.log(diceRoll);
  if (diceRoll >= 91 ){ 
    blessingsNum = 4;
  } else if (diceRoll < 90 && diceRoll > 61) {
    blessingsNum = 3;
  } else if (diceRoll < 60 && diceRoll > 21) {
    blessingsNum = 2;
  } else {
    blessingsNum = 1;
  }
  console.log(blessingsNum);
  
  blessingRaffle(blessingsNum);
  
}

function blessingRaffle(blessingsNum) {

  const blessings = [
    {name: "FastHands",
    rarity: "common",
    buff: "playerbaseStat.agi += 20;"
    },
    {name: "FastHands",
    rarity: "common",
    buff: "playerbaseStat.agi += 20;"
    },
    {name: "QuickSteps",
    rarity: "common",
    buff: "playerbaseStat.spd += 20;"
    },
    {name: "QuickSteps+",
    rarity: "intermediate",
    buff: "playerbaseStat.spd += 40; playerbaseStat.agi += 10;"
    },
    {name: "LightWeight",
    rarity: "common",
    buff: "playerbaseStat.spd += 30; playerbaseStat.str -= 10;"
    },
    {name: "LightWeight",
    rarity: "common",
    buff: "playerbaseStat.spd += 30; playerbaseStat.str -= 10;"
    },
    {name: "Ironheart",
    rarity: "common",
    buff: "playerbaseStat.hp += 40;"
    },
    {name: "ThickFat",
    rarity: "common",
    buff: "playerbaseStat.res += 20;"
    },
    {name: "ThickSkin",
    rarity: "common",
    buff: "playerbaseStat.def += 20;"
    },
    {name: "ThickFat",
    rarity: "common",
    buff: "playerbaseStat.res += 20;"
    },
    {name: "ThickSkin",
    rarity: "common",
    buff: "playerbaseStat.def += 20;"
    },
    {name: "SparklingMana",
    rarity: "common",
    buff: "playerbaseStat.mgk += 10; playerbaseStat.res += 10"
    },
    {name: "SparklingMana",
    rarity: "common",
    buff: "playerbaseStat.mgk += 10; playerbaseStat.res += 10"
    },
    {name: "SparklingMana",
    rarity: "common",
    buff: "playerbaseStat.mgk += 10; playerbaseStat.res += 10"
    },
    {name: "SpideyPower",
    rarity: "intermediate",
    buff: "playerbaseStat.str += 50;"
    },
    {name: "SpideySense",
    rarity: "intermediate",
    buff: "playerbaseStat.agi += 50;"
    },
    {name: "GiantMagic",
    rarity: "intermediate",
    buff: "playerbaseStat.mgk += 50;"
    },
    {name: "SpideyPower",
    rarity: "intermediate",
    buff: "playerbaseStat.str += 50;"
    },
    {name: "SpideySense",
    rarity: "intermediate",
    buff: "playerbaseStat.agi += 50;"
    },
    {name: "GiantMagic",
    rarity: "intermediate",
    buff: "playerbaseStat.mgk += 50;"
    },
    {name: "FlyingRaijin",
    rarity: "intermediate",
    buff: "playerbaseStat.spd += 50;"
    },
  ]
  
  for(let i = 0; i < blessingsNum; i++) {
   
    let blessingsIndex = Math.floor(Math.random() * blessings.length);
    CharacterBlessings.push(blessings[blessingsIndex].name);
    let blessingTextHtml = `<span class="blessingDisplay ${blessings[blessingsIndex].rarity}"> [${blessings[blessingsIndex].name}] </span>`;
    blessingTEXT += blessingTextHtml;
    log.innerText += "\n You recieved the blessing named " + blessings[blessingsIndex].name + "\n with a [" + blessings[blessingsIndex].rarity + "] rarity and effect of [" + blessings[blessingsIndex].buff + "] .\n";
    eval(blessings[blessingsIndex].buff);
    updateAttributes();
  }
  blessingText.innerHTML = blessingTEXT;
  console.log(CharacterBlessings);
  let diceRoll2 = Math.floor(Math.random()*100);
  if (diceRoll2 > 80) {
    log.innerText += "\n the gods would like to give you more";
    update(locations[4]);
  } else {
    update(locations[5]);
  }
}
function bgDescripAvatar(bgCardImage, Avatar) {
  backgDescrip.style.backgroundImage = `url('${bgCardImage}')`;
  avatarCard.style.backgroundImage = `url('${Avatar}')`;
 
}



// Skills available in the market
const skillDex = [
  //0
  {name: "normal atk", type: "damage", rarity: "common", target: "enemy", baseDamage: 0, additionalDamage: "str + mgk", baseHeal: 0, additionalHeal: 0, special: "none", manaCost: 10, cost: 50},
  {name: "manaball", type: "damage", rarity: "common", target: "enemy", baseDamage: 20, additionalDamage: "mgk * 1.5", baseHeal: 0, additionalHeal: 0, special: "none", manaCost: 20, cost: 50},
  {name: "manablasth", type: "damage", rarity: "common", target: "enemy", baseDamage: 20, additionalDamage: "mgk * 2.2", baseHeal: 0, additionalHeal: 0, special: "none", manaCost: 20, cost: 50},
  {name: "manabarrier", type: "shield", rarity: "common", target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 0, additionalHeal: 0, special: "shield += 4 * (res * mgk);", manaCost: 20, cost: 50},
  //4
  {name: "shieldbash", type: "damage", rarity: "common", target:"enemy", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "def + res", special: "none", manaCost: 0, cost: 50},
  //5
  {name: "bullcharghe", type: "damage", rarity: "common", target:"enemy", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "(def + res)* 1.2", special: "none", manaCost: 0, cost: 50},

  {name: "slash", type: "damage", rarity: "common", target: "enemy", baseDamage: 10, additionalDamage: "str * 1.2", baseHeal: 0, additionalHeal: 0, special: "none", manaCost: 0,  cost: 50},
  {name: "heavyslash", type: "damage", rarity: "common", target: "enemy", baseDamage: 10, additionalDamage: "str * 2", baseHeal: 0, additionalHeal: 0, special: "none", manaCost: 0, cost: 50},

  {name: "heal", type: "heal", rarity: "common", target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "mgk * 2", special: "none", manaCost: 20, cost: 50},
  {name: "hugeheal", type: "heal", rarity: "common", target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "mgk * 2", special: "none", manaCost: 20, cost: 50},
  //10
  {name: "lizardskin",type: "buff", rarity: "common",target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal:  0, special: "res += res + (mgk * 1.2); turn = 2;", manaCost: 20, cost: 50},
  {name: "windaura",type: "buff", rarity: "common",target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal:  0, special: "spd += 30; turn = 3;", manaCost: 20, cost: 50},

  //12
  {name: "Wrath", type: "damage", rarity: "unique", target: "ally", baseDamage: playerbaseStat.def, additionalDamage: "(str*2) + res + def", baseHeal: 0, additionalHeal:  0, special: "health -= (res + def) / 2", manaCost: 20, cost: 50},
  {name: "Swallow Reversal",type: "damage", rarity: "unique",target: "ally", baseDamage: playerbaseStat.spd, additionalDamage: "(spd + agi) * 1.5", baseHeal: 20, additionalHeal:  0, special: "spd += 10; turn = 3;", manaCost: 20, cost: 50},
  {name: "Explosion",type: "damage", rarity: "unique",target: "ally", baseDamage: playerbaseStat.mgk, additionalDamage: "manA * 2", baseHeal: 20, additionalHeal:  0, special: "manA = 0", manaCost: 20, cost: 50},
  {name: "purification",type: "damage", rarity: "unique",target: "ally", baseDamage: playerbaseStat.res, additionalDamage: 0, baseHeal: 20, additionalHeal:  0, special: "spd += 30; turn = 3;", manaCost: 20, cost: 50}

]

function phase3I() {
  let skillDexLibrary = [ "normal atk", "manaball", "manablast", "manabarrier", "shieldbash", "bullcharge", "slash", "heavyslash", "heal", "hugeheal", "lizardskin", "windaura"];
  let uniqueSkill = ["Wrath", "Swallow Reversal", "Explosion", "purification"];
  let diceRoll3 = Math.round(Math.random()*100);
  console.log(diceRoll3);
  if (characterClass == "ShieldHero") {
    CharSkills.push(uniqueSkill[0]);
  } else if (characterClass == "ShinobiWoman") {
    CharSkills.push(uniqueSkill[1]);
  } else if (characterClass == "MagicalWoman") {
    CharSkills.push(uniqueSkill[2]);
  } else if (characterClass == "CorruptPriest") {
    CharSkills.push(uniqueSkill[3]);
  } 

  if (diceRoll3 >= 91 ){ 
    skillNumStart = 5;
  } else if (diceRoll3 < 90 && diceRoll3 > 81) {
    skillNumStart = 4;
  } else if (diceRoll3 < 80 && diceRoll3 > 41) {
    skillNumStart = 3;
  } else {
    skillNumStart = 2;
  }
  let skillBunos = [];
  skillBunos.push(skillDexLibrary[0]);

  for (let i = 0 ; i < skillDexLibrary.length; i++){
  if (playerbaseStat.str > 15 && i >= 6 && i <= 7) {
    skillBunos.push(skillDexLibrary[i]);
  }
  if ((playerbaseStat.def >= 15 || playerbaseStat.res >= 15) && i >= 3 && i <= 5) {
    skillBunos.push(skillDexLibrary[i]);
  }
  if (playerbaseStat.mgk > 15 && i >= 2 && i <= 3) {
    skillBunos.push(skillDexLibrary[i]);
  }
  if (playerbaseStat.hp > 150 && i >= 9 && i <= 12) {
    skillBunos.push(skillDexLibrary[i]);
  }
 
}
  
  
for (let i = 0; i < skillNumStart; i++) {
    
    let skillBunosIndex = Math.floor(Math.random() * skillBunos.length);
    if (CharSkills.includes(skillBunos[skillBunosIndex])) {
      let diceRoll4 = Math.round(Math.random()*100);
      if (diceRoll4 >= 81 ){ 
        playerbaseStat.str += 10;
        playerbaseStat.mgk += 10;
        console.log("str and mgk");
      } else if (diceRoll4 < 80 && diceRoll4 > 61) {
        playerbaseStat.def += 10;
        playerbaseStat.res += 10;
        console.log("def res");
      } else if (diceRoll4 < 60 && diceRoll4 > 41) {
        playerbaseStat.spd += 20;
        console.log("speed");
      } else {
        playerbaseStat.hp += 20;
        playerbaseStat.agi += 10;
        console.log("hp and agi");
      }
      updateAttributes();
      console.log(`${skillBunos[skillBunosIndex].name} is in the skillList already!`);
    } else {
      CharSkills.push(skillBunos[skillBunosIndex]);
    let skillCardsTT = `<span class="skillDisplay ${skillDex[skillBunosIndex].rarity}"> [${skillDex[skillBunosIndex].name}] </span>`;
    skillCardsTEXT += skillCardsTT;
    log.innerText += "\n You recieved the skill named " + skillDex[skillBunosIndex].name + "\n with a [" + skillDex[skillBunosIndex].rarity + "] rarity.\n";
    }
   
  }
  let skillCardsTEXTUNique = `<span class="skillDisplay unique"> [ ${CharSkills[1]} ] </span>`;
  skillCardsTEXT += skillCardsTEXTUNique;
  console.log(skillCardsTEXT);
  console.log(CharSkills);
  skillsSetText.innerHTML = skillCardsTEXT;

  
  let diceRoll2 = Math.floor(Math.random()*100);
  if (diceRoll2 > 90) {
    log.innerText += "\n the gods would like to give you more";
    update(locations[5]);
  } else {
    modal1.style.display = 'flex';
    charName.style.display = 'block';
    nameButton.style.display = 'block';
    update(locations[6]);
  }
 
}

function caveEvent() {
  let diceRoll6 = Math.floor(Math.random()*100);
  console.log(diceRoll6);
  if (diceRoll6 > 90) {
    treasureRoom();
  }
  if (diceRoll6 > 70 && diceRoll6 < 89) {
    campRoom();
  } else {
    goblinFight();
  }
} 
function treasureRoom() {
  console.log("yey tressure");
  golD += 100;
  goldText.innerText = golD;
  towndistance++;
  goGoblin();
}
function campRoom() {
  healtH += 30;
  if (healtH >= maxhealtH) {
    InitializeCharStatus();
  }
  
  healthText.innerText = healtH;
  manaText.innerText = manA;
  console.log("refreshing");
  goGoblin();
}

function goblinFight() {
  let diceRoll6 = Math.floor(Math.random()*100);
  let enemyNum = 0;
  diceRoll6 += distancefromTown;
  if (diceRoll6 < 40) {
    enemyNum = 1;
  } else if (diceRoll6 < 70 && diceRoll6 > 41) {
    enemyNum = 2;
  } else {
    enemyNum = 3;
  }
  console.log(enemyNum + "enemy");
  fightingGoblin(enemyNum);
  
}



function fightingGoblin(number) {
  fightGame.style.display = 'flex';
  
/* stats inside the fight */
let monstersFight = [];
let monsterID = [];
let monsterImageinFight = [];
let healthFight = [];
let manaFight = [];
let strFight = [];
let mgkFight = [];
let spdFight = [];
let agiFight = [];
let defFight = [];
let resFight = [];
let EveryoneOnFightSpeed = [];
let indexSpeed = [];
let turnFight = [];
let SpeedSum = 0;
let CurrentTurn = 0;
let WhosTurn = [];

  /* character join the Fight */
  healthFight.push(healtH);
  manaFight.push(manA);
  strFight.push(playerbaseStat.str);
  mgkFight.push(playerbaseStat.mgk);
  spdFight.push(playerbaseStat.spd);
  agiFight.push(playerbaseStat.agi);
  defFight.push(playerbaseStat.def);
  resFight.push(playerbaseStat.res);

  //initiaize2ndbuttons
  button9.onclick = tutorials3;
  button10.onclick = tutorials3;
  button11.onclick = tutorials3;
  button12.onclick = tutorials3;

  /*i tried using constructor but im too beginner and makes me work slower
  since i have to apply everything as i learned it.
  */
  initializeGoFight();
  let EnemyCardsTextAll = " ";
  let ID = "";
  for(let i = 0; i < number; i++) {
    let diceRoll = Math.floor(Math.random()*100);
    diceRoll += distancefromTown * 30;
    if (i == 0) {
      ID = "A";
    } else if (i == 1) {
      ID = "B";
    } else if (i == 2) {
      ID = "C";
    }
    if (diceRoll >= 101 && diceRoll < 120) {
      monstersFight.push(monsters[2].name);
      monsterID.push(ID);
    }
    else if (diceRoll >= 70 && diceRoll < 100) {
      monstersFight.push(monsters[2].name);
      monsterID.push(ID);
    } else if (diceRoll < 70){
      monstersFight.push(monsters[1].name);
      monsterID.push(ID);
    }
  
  }
    /* INITIALIZE MONSTER CARDS need another function to update monstercards*/
    console.log(monstersFight);
    console.log("monserID");
    console.log(monsterID);
  for(let i = 0; i < monstersFight.length; i++) {
    for (let j = 0; j < monsters.length; j++) {
      if( monsters[j].name == monstersFight[i]){
        
        monsterImageinFight.push(monsters[j].monsterImage);
        healthFight.push(monsters[j].health);
        manaFight.push(monsters[j].mana);
        strFight.push(monsters[j].str);
        mgkFight.push(monsters[j].mgk);
        spdFight.push(monsters[j].spd);
        agiFight.push(monsters[j].agi);
        defFight.push(monsters[j].def);
        resFight.push(monsters[j].res);
        
        

        const EnemyCardsText = `  
        <div class="monsterContainer">
        <div class="monsterImg">
        <img src="${monsters[j].monsterImage}">
        </div>
        <div class="descriptEnemyFight">
        <p> ${monsters[j].name} ${monsterID[i]} <p>
        <p> Health: ${monsters[j].health} </p>
        <p> Mana: ${monsters[j].mana} </p>
        </div>
        </div>
        `;

        console.log(monstersFight);
        console.log(healthFight);
        console.log(manaFight);
        console.log(strFight);
        console.log(mgkFight);
        console.log(spdFight);
        console.log(agiFight);
        console.log(defFight);
        console.log(resFight);
        
        EnemyCardsTextAll += EnemyCardsText;
      }
      containersForTheeMonsters.innerHTML = `<div class="monsterContainerRow">${EnemyCardsTextAll}</div>`;
    }
  }
  /* to get speed of every character involve in the fight */
  EveryoneOnFightSpeed.push(playerbaseStat.spd);
  /* initial speedSum number used for index in turns later */ 
  SpeedSum = playerbaseStat.spd;
  for (let k = 1; k < spdFight.length; k++) {
    EveryoneOnFightSpeed.push(spdFight[k]);
    SpeedSum += spdFight[k];
    
    console.log("SpeedSum"+ SpeedSum);
  }
  for(let m = 0; m < EveryoneOnFightSpeed.length; m++){
  let speedCalcOnFight = Math.floor((SpeedSum / (EveryoneOnFightSpeed[m])));
  console.log(speedCalcOnFight + "spdcaclonFight");
  
  indexSpeed.push(Number(speedCalcOnFight));
  
  }
  console.log("indexSpeed");
  console.log(EveryoneOnFightSpeed);
  console.log(indexSpeed);
  
  let turn = 0;
  
  for (let l = 0; l < SpeedSum; l++) {
    while(turn < 80) {
    turnFight.push(turn);
    turn++;
  }}
  console.log(turnFight);
  let z = 0;

  for (let s = 0 ; s < turnFight.length ; s++) {
      while(z < 20) {
      if ((turnFight[s] % indexSpeed[0]) == 0) {
        WhosTurn.push(characterName);
      }
      if ((turnFight[s] % indexSpeed[1]) == 0){
        WhosTurn.push(monsterID[0]);
      }
      
      if ((turnFight[s] % indexSpeed[2]) == 0){
        WhosTurn.push(monsterID[1]);
      }
      
      if ((turnFight[s] % indexSpeed[3]) == 0){
        WhosTurn.push(monsterID[2]);
      }
      z++;
    }
}
  console.log(WhosTurn);


  const battlePhase = [
    {
      name: "yourTurn",
      "button text": ["Normal Atk", "Skills", "wait", "wait"],
      "button functions": [normalAtk, tutorials3, tutorials3, tutorials3],
      text: "Your turn",
    },
    {
      name: "endYourTurn",
      "button text": ["continue", "---", "---", "---"],
      "button functions": [endMyTurn, tutorials3, tutorials3, tutorials3],
      text: "End turn",
    },
    {
      name: "enemyTurn",
      "button text": ["continue", "continue", "continue", "continue"],
      "button functions": [continueBattle, continueBattle, continueBattle, continueBattle],
      text: "Enemy Turn",
    },
    {
      name: "End",
      "button text": ["End", "continue", "continue", "continue"],
      "button functions": [endBattle, tutorials3, tutorials3, tutorials3],
      text: "You have Won the battle!",
    }
  ];
  

  TurnChecker(CurrentTurn);

  function updatephase(Phases) {
    
    updateMonsterHealth();

    monsterStats.style.display = "none";
    button9.innerText = Phases["button text"][0];
    button10.innerText = Phases["button text"][1];
    button11.innerText = Phases["button text"][2];
    button12.innerText = Phases["button text"][3];
    button9.onclick = Phases["button functions"][0];
    button10.onclick = Phases["button functions"][1];
    button11.onclick = Phases["button functions"][2];
    button12.onclick = Phases["button functions"][3];
    text.innerText = Phases.text;
 
    

  }

  function TurnChecker(TurnCheckerTurn) {
    console.log(WhosTurn[TurnCheckerTurn]);
    if(monstersFight.length <= 0){
      button9.classList.remove('inactivebutton');
      updatephase(battlePhase[3]);
    } else {
    if(WhosTurn[TurnCheckerTurn] == characterName) {
       button9.classList.remove('inactivebutton');
       button10.classList.remove('inactivebutton');
       button11.classList.remove('inactivebutton');
       button12.classList.remove('inactivebutton');
      FightText.innerText += "\nYour TURN..";
      FightText.scrollTop = FightText.scrollHeight;
      updatephase(battlePhase[0]);
    } else if ((
    (WhosTurn[CurrentTurn]  ==  monsterID[0]) ||
    (WhosTurn[CurrentTurn]  ==  monsterID[1]) ||
    (WhosTurn[CurrentTurn]  ==  monsterID[2]) )
    && healthFight[1] > 0 )
    {
       
      FightText.innerText += "\nEnemy turn ..";
        button9.classList.remove('inactivebutton');
       button10.classList.remove('inactivebutton');
       button11.classList.remove('inactivebutton');
       button12.classList.remove('inactivebutton');
      updatephase(battlePhase[2]);
    } else {
      CurrentTurn++;
      FightText.innerText += `\n current turn: ${CurrentTurn}`;
      FightText.scrollTop = FightText.scrollHeight;
      TurnChecker(CurrentTurn);
    }
  }
  }







  function normalAtk() {
    //initialize
    button9.classList.add('inactivebutton');
    button10.classList.add('inactivebutton');
    button11.classList.add('inactivebutton');
   

    button9.onclick = tutorials3;
    button10.onclick = tutorials3;
    button11.onclick = tutorials3;
    button12.onclick = tutorials3;
    button10.innerText = " --- ";
    button11.innerText = " --- ";
      if(monstersFight.length >= 1 ){
        button9.innerText = `${monstersFight[0]} ${monsterID[0]}`;
        button9.onclick = normalAtking1;
        button9.classList.remove('inactivebutton');
      }
      if (monstersFight.length >= 2 ){
        
        button10.onclick = normalAtking2;
       
        button10.innerText = `${monstersFight[1]} ${monsterID[1]}`;
        button11.innerText = " --- ";
        button10.classList.remove('inactivebutton');
      }
      if(monstersFight.length >= 3 ){
       
        button11.onclick = normalAtking3;
        button11.innerText = `${monstersFight[2]} ${monsterID[2]}`;
        button11.classList.remove('inactivebutton');
      }
  
      button12.onclick = InitializeMyTurn();
      button12.innerText = "go back";
      button12.classList.remove('inactivebutton');
  
  }



  //functions
  function normalAtking1() {
    
    let str = strFight[0];
    let mgk = mgkFight[0];
    let agi = agiFight[0];
    let power = 0;
    power = skillDex[0].baseDamage + eval(skillDex[0].additionalDamage);
    Math.floor(Math.random()*(agiFight[1]+agi)) < agi ? (power *= 2) : (power *= 1);
    power -= (defFight[1] + (resFight[1] / 2));
    healthFight [1] -= power;
    console.log(eval(skillDex[0].additionalDamage));
    console.log(str);
    console.log(mgk);
    FightText.innerText += `\n You use ${skillDex[0].name} it deals ${power} damage`;
    manaFight[0] += skillDex[0].manaCost;
    button9.classList.add('inactivebutton');
    button10.classList.add('inactivebutton');
    button11.classList.add('inactivebutton');
    button12.classList.add('inactivebutton');
    setTimeout(endMyTurn, 1000);
  }
  function normalAtking2() {
    let str = strFight[0];
    let mgk = mgkFight[0]; 
    let agi = agiFight[0];
     
    let power = skillDex[0].baseDamage + eval(skillDex[0].additionalDamage);
    Math.floor(Math.random()*(agiFight[2]+agi)) < agi ? (power *= 2) : (power *= 1);
    power -= (defFight[2] + (resFight[2] / 2));
    healthFight [2] -= power;
    console.log(eval(skillDex[0].additionalDamage));
    console.log(str);
    console.log(mgk);
    FightText.innerText += `\n You use ${skillDex[0].name} \n it deals ${power} damage`;
    manaFight[0] += skillDex[0].manaCost;
    button9.classList.add('inactivebutton');
    button10.classList.add('inactivebutton');
    button11.classList.add('inactivebutton');
    button12.classList.add('inactivebutton');
    setTimeout(endMyTurn, 1000);
  }
  function normalAtking3() {
    let str = strFight[0];
    let mgk = mgkFight[0]; 
    let agi = agiFight[0];
     
    let power = skillDex[0].baseDamage + eval(skillDex[0].additionalDamage);
    Math.floor(Math.random()*(agiFight[3]+agi)) < agi ? (power *= 2) : (power *= 1);
    power -= (defFight[3] + (resFight[3] / 2));
    healthFight [3] -= power;
    console.log(eval(skillDex[0].additionalDamage));
    console.log(str);
    console.log(mgk);
    FightText.innerText += `\n You use ${skillDex[0].name} \n it deals ${power} damage`;
    manaFight[0] += skillDex[0].manaCost;
    button9.classList.add('inactivebutton');
    button10.classList.add('inactivebutton');
    button11.classList.add('inactivebutton');
    button12.classList.add('inactivebutton');
    setTimeout(endMyTurn, 1000);
  }

  function endMyTurn() {
    
  
    CheckMonsterHealth();
    console.log(CurrentTurn);
    CurrentTurn++;
    TurnChecker(CurrentTurn);
  }


  function continueBattle() {
       button9.classList.add('inactivebutton');
       button10.classList.add('inactivebutton');
       button11.classList.add('inactivebutton');
       button12.classList.add('inactivebutton');
    if((WhosTurn[CurrentTurn]  ==  monsterID[0]) && healthFight[1] > 0){
       
      //EnemyTurn();
      FightText.innerText += `${monstersFight[0]} A attacks\n`;
      goblinsTurn(1);
      
    } else if ((WhosTurn[CurrentTurn] == monsterID[1]) && healthFight[2] > 0){
      //EnemyTurn(); 
      FightText.innerText += `${monstersFight[1]} A attacks\n`;
      goblinsTurn(2);
      
      
    } else if ((WhosTurn[CurrentTurn] == monsterID[2]) && healthFight[3] > 0){       
    //EnemyTurn();
    FightText.innerText += `${monstersFight[2]} A attacks\n`;
    goblinsTurn(3);
    } else {
      CurrentTurn++;
      setTimeout(TurnChecker(CurrentTurn), 1200);
    }
    
}
function goblinsTurn(N) {
  console.log("enemy use normal attack");
  let str = strFight[N];
  let mgk = mgkFight[N];
  healthFight[0] -= skillDex[0].baseDamage + eval(skillDex[0].additionalDamage);
  manaFight[N] += skillDex[0].manaCost;
  console.log(str + " + " + mgk);
  console.log("ends" + `${monstersFight[N - 1]}`+ "turn")
  FightText.innerText += "\nIt use normal Attack\n";
  FightText.scrollTop = FightText.scrollHeight;
  updateCharacterFightHealth();
  updateMonsterHealth();
  button9.classList.add('inactivebutton');
  button10.classList.add('inactivebutton');
  button11.classList.add('inactivebutton');
  button12.classList.add('inactivebutton');
  CurrentTurn++;
  setTimeout(TurnChecker(CurrentTurn), 1200);
}


function updateCharacterFightHealth() {
  characterFaceAvatar.style.backgroundImage = `url('${fightAvatarImageGlobal}')`;
  nameTextAvatar.innerText = characterName;
  CheckMonsterHealth();
  updateMonsterHealth();
  healthTextAvatar.innerText = healthFight[0];
  manaTextAvatar.innerText = manaFight[0];
  console.log(fightAvatarImageGlobal);
  console.log(manaFight);
  console.log(WhosTurn);
}
function updateMonsterHealth() {
  containersForTheeMonsters.innerHTML = "";
  let EnemyCardsText = "";
  EnemyCardsTextAll = "";


  for(let i = 0; i < monstersFight.length; i++) {
  
        let k = i + 1;
        EnemyCardsText = `  
        <div class="monsterContainer">
        <div class="monsterImg">
        <img src="${monsterImageinFight[i]}" alt="monster">
        </div>
        <div class="descriptEnemyFight">
        <p> ${monstersFight[i]} <p>
        <p> Health: ${healthFight[k]} </p>
        <p> Mana: ${manaFight[k]} </p>
        </div>
        </div>
        `;

        console.log(monstersFight);
        console.log(healthFight);
        console.log(manaFight);
        console.log(strFight);
        console.log(mgkFight);
        console.log(spdFight);
        console.log(agiFight);
        console.log(defFight);
        console.log(resFight);
        
        EnemyCardsTextAll += EnemyCardsText;
    }
      containersForTheeMonsters.innerHTML = `<div class="monsterContainerRow">${EnemyCardsTextAll}</div>`;
    
   
  
  console.log("endTurn");
  console.log(CurrentTurn);
  
}
  function CheckMonsterHealth() {

    console.log(healthFight);
    console.log(defFight)
    for(let i = 1 ; i <= healthFight.length; i++) {
      if(healthFight[i] <= 0) {
        let j = i - 1;
        monstersFight.splice(j,1);
        monsterImageinFight.splice(j,1);
        healthFight.splice(i,1);
        manaFight.splice(i,1);
        strFight.splice(i,1);
        mgkFight.splice(i,1);
        spdFight.splice(i,1);
        agiFight.splice(i,1);
        defFight.splice(i,1);
        resFight.splice(i,1);
        monsterID.splice(j,1);
        
      }
    }
    
} 
  function InitializeMyTurn(){
    button9.classList.remove('inactivebutton');
    button10.classList.remove('inactivebutton');
    button11.classList.remove('inactivebutton');
    button12.classList.remove('inactivebutton');
  }
  

  function endBattle() {
    button9.classList.remove('inactivebutton');
    fightGame.style.display = 'none';
    healtH = healthFight[0];
    FightText.innerText = `\n Distance from town: ${distancefromTown} \n`;
    healthText.innerText = healtH;
    manA = manaFight[0];
    golD += (30 * number);
    goldText.innerText = golD;
    xP += (20 * number);
    xpText.innerText = xP;
    distancefromTown++;
    
    goGoblin();
    }
  
  function tutorials3(){
    FightText.innerText = "\nWait...\n";
  }
  console.log(characterName);

}


function initializeGoFight() {
characterFaceAvatar.style.backgroundImage = `url('${fightAvatarImageGlobal}')`;
nameTextAvatar.innerText = characterName;
healthTextAvatar.innerText = healtH;
manaTextAvatar.innerText = manA;
console.log(fightAvatarImageGlobal);
}




function InitializeCharStatus() {
  const maxhealtH = Math.floor(playerbaseStat.hp + ((playerbaseStat.res *5 + playerbaseStat.def*5 / 2))); 
  healtH = maxhealtH;
  healthText.innerText = healtH;
  const maxManA = Math.floor(100 + (playerbaseStat.mgk * 5) + playerbaseStat.str);
  manA = maxManA;
  manaText.innerText = manA;
}



//event listeners

avatarCard.addEventListener('mouseover', () => {
  setTimeout(function() {
    avatarCard.style.backgroundImage = `url('${hoverImage}')`;
    avatarCard.style.transform = 'scaleY(1.15)';
   
    console.log(hoverImage); 
}, 500);
  
});

avatarCard.addEventListener('mouseout', () => {
  setTimeout(function() {
  avatarCard.style.backgroundImage = `url('${AvatarImage}')`;
  avatarCard.style.transform = 'scaleY(1)';
  console.log(AvatarImage);
}, 200);
});



initializeGoFight();
