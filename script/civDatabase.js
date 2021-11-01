const civilizations = [
  
  //AZTECS
  {
    "id": 1,

    "name": "Aztecs",
    
    "expansion": "Conquerors",

    "continent": "America",

    "culture": "NativeAmerican",
    
    "army_type": "Infantry and Monk",
    
    "unique_unit": ["jaguar_warrior"],
    
    "unique_tech": ["atlatl", "garland_wars"],
    
    "team_bonus": "Relics generate +33% gold",
    
    "civilization_bonus": [
      "Villagers carry +5",
      "Military units created 15% faster",
      "+5 Monk hit points for each Monastery technology",
      "Loom free"
    ]
  },
  
  //BERBERS
  {
    "id": 2,

    "name": "Berbers",

    "expansion": "African Kingdoms",

    "continent": "Africa",
    
    "culture": "MiddleEastern",

    "army_type": "Calvary and Naval",

    "unique_unit": ["Camel Archer", "Genitour"],

    "unique_tech": ["Kasbah", "Maghrebi camels"],

    "team_bonus": "Genitour availible at Archery Range",

    "civilization_bonus": [
      "Villagers move +10% faster",
      " Stable units cost -20% (starting in Castle Age)",
      " Ships move +10% faster"
    ]
  },
  
  //BOHEMIANS
  {
    "id": 3,

    "name": "Bohemians",

    "expansion": "Dawn of the Dukes",

    "continent": "Europe",

    "culture": "EasternEuropean",

    "army_type": "Monks and Gunpowder",

    "unique_unit": ["Hussite Wagon", "Houfnice"],

    "unique_tech": ["Wagenburg Tactics", "Hussite Reforms"],

    "team_bonus": "Markets work 80% faster",

    "civilization_bonus": [
      "Blacksmiths, Monasteries, and Universities cost -100 wood",
      "Chemistry and Hand Cannoneer available in the Castle Age",
      "The Spearman line deals +25% bonus damage",
      "Fervor and Sanctity affect Villagers",
      "Mining Camp technologies free"
    ]
  },
  
  //BRITONS
  {
    "id": 4,

    "name": "Britons",

    "expansion": "Age of Kings",

    "continent": "Europe",

    "culture": "WesternEuropean",

    "army_type": "Foot Archer",

    "unique_unit": ["Longbowman"],

    "unique_tech": ["Yeomen", "Warwolf"],

    "team_bonus": "Archery Ranges work 20% faster",

    "civilization_bonus": [
      "Town Centers cost -50% wood upon reaching the Castle Age",
      "Foot archers (excluding Skirmishers) have +1 range in Castle Age and +1 in Imperial Age (for +2 total)",
      "Shepherds work 25% faster"
    ]
  },
  
  //BULGARIANS
  {
    "id": 5,

    "name": "Bulgarians",

    "expansion": "Last Khans",

    "continent": "Europe",

    "culture": "EasternEuropean",

    "army_type": "Infantry and Cavalry",

    "unique_unit": ["Konnik"],

    "unique_tech": ["Stirrups","Bagains"],

    "team_bonus": "Blacksmiths work 80% faster",

    "civilization_bonus": [
      "Militia line units are upgraded for free",
      "Town Centers cost -50% stone",
      "Blacksmith and Siege Workshop technologies cost -50% food",
      "Can build Krepost"
    ]
  },
  
  //BURGUNDIANS
  {
    "id": 6,

    "name": "Burgundians",

    "expansion": "Lords of the West",

    "continent": "Europe",

    "culture": "WesternEuropean",

    "army_type": "Cavalry",

    "unique_unit": ["Coustillier", "Flemish Militia"],

    "unique_tech": ["Burgundian Vineyards", "Flemish Revolution"],

    "team_bonus": "Relics generate food in addition to gold",

    "civilization_bonus": [
      "Economic upgrades cost -50% food and are available one Age earlier than other civilizations",
      "Stable technologies are 50% cheaper",
      "Gunpowder units gain +25% attack",
      "Cavalier upgrade available in the Castle Age"
    ]
  },
  
  //BURMESE
  {
    "id": 7,

    "name": "Burmese",
    
    "expansion": "Rise of Rajas",

    "continent": "Asia",

    "culture": "SouthEastAsian",
    
    "army_type": "Monk and Elephant",
    
    "unique_unit": ["Arambai"],
    
    "unique_tech": ["Howdah", "Manipur Cavalry"],
    
    "team_bonus": "Relics are visible on the min map",
    
    "civilization_bonus": [
      "Free lumber camp upgrades",
      "Infantry +1 Attacks per Age (starting in Feudal Age)",
      " Monastery techs 50% cheaper"
    ]
  },

  //BYZANTINES
  {
    "id": 8,

    "name": "Byzantines",

    "expansion": "Age of Kings",

    "continent": "Europe",

    "culture": "Mediterranean",

    "army_type": "Defense",

    "unique_unit": ["Cataphract"],

    "unique_tech": ["Greek Fire", "Logistica"],

    "team_bonus": "Monks heal 50% faster",

    "civilization_bonus": [
      "Buildings have +10%/+20%/+30%/+40% HP in the Dark/Feudal/Castle/Imperial Age",
      "Camel Riders, Skirmishers, and the Spearman lines are 25% cheaper",
      "Fire Ships fire 25% faster",
      "Advancing to the Imperial Age is 33% cheaper",
      "Town Watch and Town Patrol are free"
    ]
  },

  //CELTS
  {
    "id": 9,

    "name": "Celts",

    "expansion": "Age of Kings",

    "continent": "Europe",

    "culture": "WesternEuropean",

    "army_type": "Infantry and Siege Weapons",

    "unique_unit": ["Woad Raider"],

    "unique_tech": ["Stronghold", "Furor Celtica"],

    "team_bonus": "Siege Workshops work 20% faster",

    "civilization_bonus": [
      "Infantry units move 15% faster starting from the Feudal Age",
      "Lumberjacks work 15% faster",
      "Siege weapons fire 25% faster",
      "Enemy herdables can be converted regardless of enemy units next to them"
    ]
  },

  //CHINESE
  {
    "id": 10,

    "name": "Chinese",

    "expansion": "Age of Kings",

    "continent": "Asia",

    "culture": "EastAsian",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //CUMANS
  {
    "id": 11,

    "name": "Cumans",

    "expansion": "Last Khans",

    "continent": "Asia",

    "culture": "CentralAsian",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //ETHIOPIANS
  {
    "id": 12,

    "name": "Ethiopians",

    "expansion": "African Kingdoms",

    "continent": "Africa",

    "culture": "African",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //FRANKS
  {
    "id": 13,

    "name": "Franks",

    "expansion": "Age of Kings",

    "continent": "Europe",

    "culture": "WesternEuropean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //GOTHS
  {
    "id": 14,

    "name": "Goths",

    "expansion": "Age of Kings",

    "continent": "Europe",

    "culture": "CentralEuropean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //HUNS
  {
    "id": 15,

    "name": "Huns",

    "expansion": "Conquerors",

    "continent": "Europe",

    "culture": "CentralEuropean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //INCAS
  {
    "id": 16,

    "name": "Incas",

    "expansion": "Forgotten",

    "continent": "America",

    "culture": "NativeAmerican",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //INDIANS
  {
    "id": 17,

    "name": "Indians",

    "expansion": "Forgotten",

    "continent": "Asia",

    "culture": "SouthAsian",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //ITALIANS
  {
    "id": 18,

    "name": "Italians",

    "expansion": "Forgotten",

    "continent": "Europe",

    "culture": "Mediterranean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //JAPANESE
  {
    "id": 19,

    "name": "Japanese",

    "expansion": "Age of Kings",

    "continent": "Asia",

    "culture": "EastAsian",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //KHMER
  {
    "id": 20,

    "name": "Khmer",

    "expansion": "Rise of the Rajas",

    "continent": "Asia",

    "culture": "SouthEastAsian",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //KOREANS
  {
    "id": 21,

    "name": "Koreans",

    "expansion": "Conquerors",

    "continent": "Asia",

    "culture": "EastAsian",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //LITHUANIANS
  {
    "id": 22,

    "name": "Lithuanians",

    "expansion": "Last Khans",

    "continent": "Europe",

    "culture": "EasternEuropean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //MAGYARS
  {
    "id": 23,

    "name": "Magyars",

    "expansion": "Forgotten",

    "continent": "Europe",

    "culture": "EasternEuropean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //MALAY
  {
    "id": 24,

    "name": "Malay",

    "expansion": "Rise of the Rajas",

    "continent": "Asia",

    "culture": "SouthEastAsian",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //MALIANS
  {
    "id": 25,

    "name": "Malians",

    "expansion": "African Kingdoms",

    "continent": "Africa",
    
    "culture": "African",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //MAYANS
  {
    "id": 26,

    "name": "Mayans",

    "expansion": "Conquerors",

    "continent": "America",

    "culture": "NativeAmerican",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //MONGOLS
  {
    "id": 27,

    "name": "Mongols",

    "expansion": "Age of Kings",

    "continent": "Asia",

    "culture": "EastAsian",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //PERSIANS
  {
    "id": 28,

    "name": "Persians",

    "expansion": "Age of Kings",

    "continent": "Asia",

    "culture": "MiddleEastern",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //POLES
  {
    "id": 29,

    "name": "Poles",

    "expansion": "Dawn of the Dukes",

    "continent": "Europe",

    "culture": "EasternEuropean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //PORTUGUESE
  {
    "id": 30,

    "name": "Portuguese",

    "expansion": "African Kingdoms",

    "continent": "Europe",

    "culture": "Mediterranean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //SARRACENS
  {
    "id": 31,

    "name": "Saracens",

    "expansion": "Age of Kings",

    "continent": "Asia",

    "culture": "MiddleEastern",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //SICILIANS
  {
    "id": 32,

    "name": "Sicilians",

    "expansion": "Lords of the West",

    "continent": "Europe",

    "culture": "Mediterranean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //SLAVS
  {
    "id": 33,

    "name": "Slavs",

    "expansion": "Forgotten",

    "continent": "Europe",

    "culture": "EasternEuropean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //SPANISH
  {
    "id": 34,

    "name": "Spanish",

    "expansion": "Conquerors",

    "continent": "Europe",

    "culture": "Mediterranean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //TATARS
  {
    "id": 35,

    "name": "Tatars",

    "expansion": "Last Khans",

    "continent": "Asia",

    "culture": "CentralAsian",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //TEUTONS
  {
    "id": 36,

    "name": "Teutons",

    "expansion": "Age of Kings",

    "continent": "Europe",

    "culture": "CentralEuropean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //TURKS
  {
    "id": 37,

    "name": "Turks",

    "expansion": "Age of Kings",

    "continent": "Asia",

    "culture": "MiddleEastern",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //VIETNAMESE
  {
    "id": 38,

    "name": "Vietnamese",

    "expansion": "Rise of the Rajas",

    "continent": "Asia",

    "culture": "EastAsian",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

  //VIKINGS
  {
    "id": 39,

    "name": "Vikings",

    "expansion": "Age of Kings",

    "continent": "Europe",

    "culture": "CentralEuropean",

    "army_type": "",

    "unique_unit": [],

    "unique_tech": [],

    "team_bonus": "",

    "civilization_bonus": []
  },

]