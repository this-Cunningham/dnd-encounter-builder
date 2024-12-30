import { DnDData } from './dnd-types';

export const dndData: DnDData = {
  "encounterDifficultyAndXPThresholds": {
    "1": { "easyXp": 25, "mediumXp": 50, "hardXp": 75, "deadlyXp": 100 },
    "2": { "easyXp": 50, "mediumXp": 100, "hardXp": 150, "deadlyXp": 200 },
    "3": { "easyXp": 75, "mediumXp": 150, "hardXp": 225, "deadlyXp": 400 },
    "4": { "easyXp": 125, "mediumXp": 250, "hardXp": 375, "deadlyXp": 500 },
    "5": { "easyXp": 250, "mediumXp": 500, "hardXp": 750, "deadlyXp": 1100 },
    "6": { "easyXp": 300, "mediumXp": 600, "hardXp": 900, "deadlyXp": 1400 },
    "7": { "easyXp": 350, "mediumXp": 750, "hardXp": 1100, "deadlyXp": 1700 },
    "8": { "easyXp": 450, "mediumXp": 900, "hardXp": 1400, "deadlyXp": 2100 },
    "9": { "easyXp": 550, "mediumXp": 1100, "hardXp": 1600, "deadlyXp": 2400 },
    "10": { "easyXp": 600, "mediumXp": 1200, "hardXp": 1900, "deadlyXp": 2800 },
    "11": { "easyXp": 800, "mediumXp": 1600, "hardXp": 2400, "deadlyXp": 3600 },
    "12": { "easyXp": 1000, "mediumXp": 2000, "hardXp": 3000, "deadlyXp": 4500 },
    "13": { "easyXp": 1100, "mediumXp": 2200, "hardXp": 3400, "deadlyXp": 5100 },
    "14": { "easyXp": 1250, "mediumXp": 2500, "hardXp": 3800, "deadlyXp": 5700 },
    "15": { "easyXp": 1400, "mediumXp": 2800, "hardXp": 4300, "deadlyXp": 6400 },
    "16": { "easyXp": 1600, "mediumXp": 3200, "hardXp": 4800, "deadlyXp": 7200 },
    "17": { "easyXp": 2000, "mediumXp": 3900, "hardXp": 5900, "deadlyXp": 8800 },
    "18": { "easyXp": 2100, "mediumXp": 4200, "hardXp": 6300, "deadlyXp": 9500 },
    "19": { "easyXp": 2400, "mediumXp": 4900, "hardXp": 7300, "deadlyXp": 10900 },
    "20": { "easyXp": 2800, "mediumXp": 5700, "hardXp": 8500, "deadlyXp": 12700 }
  },
  "encounterMultipliersTable": {
    "1": 1,
    "2": 1.5,
    "3": 2,
    "4": 2,
    "5": 2,
    "6": 2,
    "7": 2.5,
    "8": 2.5,
    "9": 2.5,
    "10": 2.5,
    "11": 3,
    "12": 3,
    "13": 3,
    "14": 3,
    "15": 4
  },
  "monsterStatisticsByCr": {
    "0": {
      "proficiencyBonus": "+2",
      "hpRange": "1–6",
      "expectedAc": 13,
      "expectedAttackBonus": "+3",
      "expectedDpr": "0–1",
      "expectedSaveDc": 13
    },
    "1/8": {
      "proficiencyBonus": "+2",
      "hpRange": "7–35",
      "expectedAc": 13,
      "expectedAttackBonus": "+3",
      "expectedDpr": "2–3",
      "expectedSaveDc": 13
    },
    "1/4": {
      "proficiencyBonus": "+2",
      "hpRange": "36–49",
      "expectedAc": 13,
      "expectedAttackBonus": "+3",
      "expectedDpr": "4–5",
      "expectedSaveDc": 13
    },
    "1/2": {
      "proficiencyBonus": "+2",
      "hpRange": "50–70",
      "expectedAc": 13,
      "expectedAttackBonus": "+3",
      "expectedDpr": "6–8",
      "expectedSaveDc": 13
    },
    "1": {
      "proficiencyBonus": "+2",
      "hpRange": "71–85",
      "expectedAc": 13,
      "expectedAttackBonus": "+3",
      "expectedDpr": "9–14",
      "expectedSaveDc": 13
    },
    "2": {
      "proficiencyBonus": "+2",
      "hpRange": "86–100",
      "expectedAc": 13,
      "expectedAttackBonus": "+3",
      "expectedDpr": "15–20",
      "expectedSaveDc": 13
    },
    "3": {
      "proficiencyBonus": "+2",
      "hpRange": "101–115",
      "expectedAc": 13,
      "expectedAttackBonus": "+4",
      "expectedDpr": "21–26",
      "expectedSaveDc": 13
    },
    "4": {
      "proficiencyBonus": "+2",
      "hpRange": "116–130",
      "expectedAc": 14,
      "expectedAttackBonus": "+5",
      "expectedDpr": "27–32",
      "expectedSaveDc": 14
    },
    "5": {
      "proficiencyBonus": "+3",
      "hpRange": "131–145",
      "expectedAc": 15,
      "expectedAttackBonus": "+6",
      "expectedDpr": "33–38",
      "expectedSaveDc": 15
    },
    "6": {
      "proficiencyBonus": "+3",
      "hpRange": "146–160",
      "expectedAc": 15,
      "expectedAttackBonus": "+6",
      "expectedDpr": "39–44",
      "expectedSaveDc": 15
    },
    "7": {
      "proficiencyBonus": "+3",
      "hpRange": "161–175",
      "expectedAc": 15,
      "expectedAttackBonus": "+6",
      "expectedDpr": "45–50",
      "expectedSaveDc": 15
    },
    "8": {
      "proficiencyBonus": "+3",
      "hpRange": "176–190",
      "expectedAc": 16,
      "expectedAttackBonus": "+7",
      "expectedDpr": "51–56",
      "expectedSaveDc": 16
    },
    "9": {
      "proficiencyBonus": "+4",
      "hpRange": "191–205",
      "expectedAc": 16,
      "expectedAttackBonus": "+7",
      "expectedDpr": "57–62",
      "expectedSaveDc": 16
    },
    "10": {
      "proficiencyBonus": "+4",
      "hpRange": "206–220",
      "expectedAc": 17,
      "expectedAttackBonus": "+7",
      "expectedDpr": "63–68",
      "expectedSaveDc": 16
    },
    "11": {
      "proficiencyBonus": "+4",
      "hpRange": "221–235",
      "expectedAc": 17,
      "expectedAttackBonus": "+8",
      "expectedDpr": "69–74",
      "expectedSaveDc": 17
    },
    "12": {
      "proficiencyBonus": "+4",
      "hpRange": "236–250",
      "expectedAc": 18,
      "expectedAttackBonus": "+8",
      "expectedDpr": "75–80",
      "expectedSaveDc": 18
    },
    "13": {
      "proficiencyBonus": "+5",
      "hpRange": "251–265",
      "expectedAc": 18,
      "expectedAttackBonus": "+8",
      "expectedDpr": "81–86",
      "expectedSaveDc": 18
    },
    "14": {
      "proficiencyBonus": "+5",
      "hpRange": "266–280",
      "expectedAc": 18,
      "expectedAttackBonus": "+8",
      "expectedDpr": "87–92",
      "expectedSaveDc": 18
    },
    "15": {
      "proficiencyBonus": "+5",
      "hpRange": "281–295",
      "expectedAc": 18,
      "expectedAttackBonus": "+8",
      "expectedDpr": "93–98",
      "expectedSaveDc": 18
    },
    "16": {
      "proficiencyBonus": "+5",
      "hpRange": "296–310",
      "expectedAc": 18,
      "expectedAttackBonus": "+8",
      "expectedDpr": "99–104",
      "expectedSaveDc": 18
    },
    "17": {
      "proficiencyBonus": "+6",
      "hpRange": "311–325",
      "expectedAc": 19,
      "expectedAttackBonus": "+9",
      "expectedDpr": "105–110",
      "expectedSaveDc": 19
    },
    "18": {
      "proficiencyBonus": "+6",
      "hpRange": "326–340",
      "expectedAc": 19,
      "expectedAttackBonus": "+9",
      "expectedDpr": "111–116",
      "expectedSaveDc": 19
    },
    "19": {
      "proficiencyBonus": "+6",
      "hpRange": "341–355",
      "expectedAc": 19,
      "expectedAttackBonus": "+9",
      "expectedDpr": "117–122",
      "expectedSaveDc": 19
    },
    "20": {
      "proficiencyBonus": "+6",
      "hpRange": "356–400",
      "expectedAc": 19,
      "expectedAttackBonus": "+10",
      "expectedDpr": "123–140",
      "expectedSaveDc": 19
    },
    "21": {
      "proficiencyBonus": "+7",
      "hpRange": "401–445",
      "expectedAc": 19,
      "expectedAttackBonus": "+10",
      "expectedDpr": "141–158",
      "expectedSaveDc": 20
    },
    "22": {
      "proficiencyBonus": "+7",
      "hpRange": "446–490",
      "expectedAc": 19,
      "expectedAttackBonus": "+10",
      "expectedDpr": "159–176",
      "expectedSaveDc": 20
    },
    "23": {
      "proficiencyBonus": "+7",
      "hpRange": "491–535",
      "expectedAc": 19,
      "expectedAttackBonus": "+10",
      "expectedDpr": "177–194",
      "expectedSaveDc": 20
    },
    "24": {
      "proficiencyBonus": "+7",
      "hpRange": "536–580",
      "expectedAc": 19,
      "expectedAttackBonus": "+10",
      "expectedDpr": "195–212",
      "expectedSaveDc": 20
    },
    "25": {
      "proficiencyBonus": "+8",
      "hpRange": "581–625",
      "expectedAc": 19,
      "expectedAttackBonus": "+11",
      "expectedDpr": "213–230",
      "expectedSaveDc": 21
    },
    "26": {
      "proficiencyBonus": "+8",
      "hpRange": "626–670",
      "expectedAc": 19,
      "expectedAttackBonus": "+11",
      "expectedDpr": "231–248",
      "expectedSaveDc": 21
    },
    "27": {
      "proficiencyBonus": "+8",
      "hpRange": "671–715",
      "expectedAc": 19,
      "expectedAttackBonus": "+11",
      "expectedDpr": "249–266",
      "expectedSaveDc": 21
    },
    "28": {
      "proficiencyBonus": "+8",
      "hpRange": "716–760",
      "expectedAc": 19,
      "expectedAttackBonus": "+11",
      "expectedDpr": "267–284",
      "expectedSaveDc": 21
    },
    "29": {
      "proficiencyBonus": "+9",
      "hpRange": "761–805",
      "expectedAc": 19,
      "expectedAttackBonus": "+12",
      "expectedDpr": "285–302",
      "expectedSaveDc": 21
    },
    "30": {
      "proficiencyBonus": "+9",
      "hpRange": "806–850",
      "expectedAc": 19,
      "expectedAttackBonus": "+12",
      "expectedDpr": "303–320",
      "expectedSaveDc": 21
    }
  },
  "defensiveCrTable": [
    { "hpRange": "1–6", "defensiveCr": 0, "baseAc": 13 },
    { "hpRange": "7–35", "defensiveCr": "1/8", "baseAc": 13 },
    { "hpRange": "36–49", "defensiveCr": "1/4", "baseAc": 13 },
    { "hpRange": "50–70", "defensiveCr": "1/2", "baseAc": 13 },
    { "hpRange": "71–85", "defensiveCr": 1, "baseAc": 13 },
    { "hpRange": "86–100", "defensiveCr": 2, "baseAc": 13 },
    { "hpRange": "101–115", "defensiveCr": 3, "baseAc": 13 },
    { "hpRange": "116–130", "defensiveCr": 4, "baseAc": 14 },
    { "hpRange": "131–145", "defensiveCr": 5, "baseAc": 15 },
    { "hpRange": "146–160", "defensiveCr": 6, "baseAc": 15 },
    { "hpRange": "161–175", "defensiveCr": 7, "baseAc": 15 },
    { "hpRange": "176–190", "defensiveCr": 8, "baseAc": 16 },
    { "hpRange": "191–205", "defensiveCr": 9, "baseAc": 16 },
    { "hpRange": "206–220", "defensiveCr": 10, "baseAc": 17 },
    { "hpRange": "221–235", "defensiveCr": 11, "baseAc": 17 },
    { "hpRange": "236–250", "defensiveCr": 12, "baseAc": 18 },
    { "hpRange": "251–265", "defensiveCr": 13, "baseAc": 18 },
    { "hpRange": "266–280", "defensiveCr": 14, "baseAc": 18 },
    { "hpRange": "281–295", "defensiveCr": 15, "baseAc": 18 }
  ],
  "offensiveCrTable": [
    { "dprRange": "0–1", "offensiveCr": 0, "baseAttackBonus": "+3", "baseSaveDc": 13 },
    { "dprRange": "2–3", "offensiveCr": "1/8", "baseAttackBonus": "+3", "baseSaveDc": 13 },
    { "dprRange": "4–5", "offensiveCr": "1/4", "baseAttackBonus": "+3", "baseSaveDc": 13 },
    { "dprRange": "6–8", "offensiveCr": "1/2", "baseAttackBonus": "+3", "baseSaveDc": 13 },
    { "dprRange": "9–14", "offensiveCr": 1, "baseAttackBonus": "+3", "baseSaveDc": 13 },
    { "dprRange": "15–20", "offensiveCr": 2, "baseAttackBonus": "+3", "baseSaveDc": 13 },
    { "dprRange": "21–26", "offensiveCr": 3, "baseAttackBonus": "+4", "baseSaveDc": 13 },
    { "dprRange": "27–32", "offensiveCr": 4, "baseAttackBonus": "+5", "baseSaveDc": 14 },
    { "dprRange": "33–38", "offensiveCr": 5, "baseAttackBonus": "+6", "baseSaveDc": 15 },
    { "dprRange": "39–44", "offensiveCr": 6, "baseAttackBonus": "+6", "baseSaveDc": 15 },
    { "dprRange": "45–50", "offensiveCr": 7, "baseAttackBonus": "+6", "baseSaveDc": 15 },
    { "dprRange": "51–56", "offensiveCr": 8, "baseAttackBonus": "+7", "baseSaveDc": 16 },
    { "dprRange": "57–62", "offensiveCr": 9, "baseAttackBonus": "+7", "baseSaveDc": 16 },
    { "dprRange": "63–68", "offensiveCr": 10, "baseAttackBonus": "+7", "baseSaveDc": 16 }
  ],
  "xpValuesByCr": {
    "0": 10,
    "1/8": 25,
    "1/4": 50,
    "1/2": 100,
    "1": 200,
    "2": 450,
    "3": 700,
    "4": 1100,
    "5": 1800,
    "6": 2300,
    "7": 2900,
    "8": 3900,
    "9": 5000,
    "10": 5900,
    "11": 7200,
    "12": 8400,
    "13": 10000,
    "14": 11500,
    "15": 13000,
    "16": 15000,
    "17": 18000,
    "18": 20000,
    "19": 22000,
    "20": 25000,
    "21": 33000,
    "22": 41000,
    "23": 50000,
    "24": 62000,
    "25": 75000,
    "26": 90000,
    "27": 105000,
    "28": 120000,
    "29": 135000,
    "30": 155000
  },
  "monsterFeatureAdjustments": {
    "resistance": "Double effective HP for common resistances (e.g., slashing, piercing, and bludgeoning).",
    "immunity": "Further increase effective HP for critical damage immunities.",
    "legendaryActions": "Add +1 CR for monsters with Legendary Actions.",
    "lairActions": "Add up to +1 CR based on the strength and frequency of lair actions.",
    "areaOfEffect": "Multiply DPR by the number of targets consistently affected."
  },
  "treasureTables": {
    "treasureHoardByEncounterCr": {
      "0": { "coinHoard": "2d6 x 100 copper pieces", "magicItems": "1d6 common items" },
      "1": { "coinHoard": "2d6 x 100 copper pieces", "magicItems": "1d6 common items" },
      "2": { "coinHoard": "2d6 x 100 copper pieces", "magicItems": "1d6 common items" },
      "3": { "coinHoard": "2d6 x 100 copper pieces", "magicItems": "1d6 common items" },
      "4": { "coinHoard": "2d6 x 100 copper pieces", "magicItems": "1d6 common items" },
      "5": { "coinHoard": "3d6 x 1,000 gold pieces", "magicItems": "2d4 uncommon items" },
      "6": { "coinHoard": "3d6 x 1,000 gold pieces", "magicItems": "2d4 uncommon items" },
      "7": { "coinHoard": "3d6 x 1,000 gold pieces", "magicItems": "2d4 uncommon items" },
      "8": { "coinHoard": "3d6 x 1,000 gold pieces", "magicItems": "2d4 uncommon items" },
      "9": { "coinHoard": "3d6 x 1,000 gold pieces", "magicItems": "2d4 uncommon items" },
      "10": { "coinHoard": "3d6 x 1,000 gold pieces", "magicItems": "2d4 uncommon items" },
      "11": { "coinHoard": "4d6 x 10,000 platinum", "magicItems": "1 rare and 1 very rare item" },
      "12": { "coinHoard": "4d6 x 10,000 platinum", "magicItems": "1 rare and 1 very rare item" },
      "13": { "coinHoard": "4d6 x 10,000 platinum", "magicItems": "1 rare and 1 very rare item" },
      "14": { "coinHoard": "4d6 x 10,000 platinum", "magicItems": "1 rare and 1 very rare item" },
      "15": { "coinHoard": "4d6 x 10,000 platinum", "magicItems": "1 rare and 1 very rare item" },
      "16": { "coinHoard": "4d6 x 10,000 platinum", "magicItems": "1 rare and 1 very rare item" }
    }
  },
  "magicItemRarityByencounterLevel": [
    { "encounterLevel": "1–4", "magicItemRarity": "Common" },
    { "encounterLevel": "5–10", "magicItemRarity": "Uncommon" },
    { "encounterLevel": "11–16", "magicItemRarity": "Rare" },
    { "encounterLevel": "17+", "magicItemRarity": "Very Rare" }
  ],
  "encounterCompositionByRoleGuidelines": {
    "leader": "Directs the battle, typically the highest CR in the group.",
    "brute": "High HP, melee-focused monsters.",
    "support": "Provides buffs or healing to allies.",
    "minion": "Low HP, high numbers, supports other monsters."
  },
  "sizeCategories": {
    "tiny": { "space": "2 1/2 by 2 1/2 ft.", "examples": ["Imp", "Sprite"] },
    "small": { "space": "5 by 5 ft.", "examples": ["Giant rat", "Goblin"] },
    "medium": { "space": "5 by 5 ft.", "examples": ["Orc", "Werewolf"] },
    "large": { "space": "10 by 10 ft.", "examples": ["Hippogriff", "Ogre"] },
    "huge": { "space": "15 by 15 ft.", "examples": ["Fire giant", "Treant"] },
    "gargantuan": { "space": "20 by 20 ft. or larger", "examples": ["Kraken", "Purple worm"] }
  },
  "hitDiceBySize": {
    "tiny": { "hitDie": "d4", "avgHpPerDie": 2.5 },
    "small": { "hitDie": "d6", "avgHpPerDie": 3.5 },
    "medium": { "hitDie": "d8", "avgHpPerDie": 4.5 },
    "large": { "hitDie": "d10", "avgHpPerDie": 5.5 },
    "huge": { "hitDie": "d12", "avgHpPerDie": 6.5 },
    "gargantuan": { "hitDie": "d20", "avgHpPerDie": 10.5 }
  },
  "proficiencyBonusByChallengeRating": {
    "0": "+2",
    "1/8": "+2",
    "1/4": "+2",
    "1/2": "+2",
    "1": "+2",
    "2": "+2",
    "3": "+2",
    "4": "+2",
    "5": "+3",
    "6": "+3",
    "7": "+3",
    "8": "+3",
    "9": "+4",
    "10": "+4",
    "11": "+4",
    "12": "+4",
    "13": "+5",
    "14": "+5",
    "15": "+5",
    "16": "+5",
    "17": "+6",
    "18": "+6",
    "19": "+6",
    "20": "+6",
    "21": "+7",
    "22": "+7",
    "23": "+7",
    "24": "+7",
    "25": "+8",
    "26": "+8",
    "27": "+8",
    "28": "+8",
    "29": "+9",
    "30": "+9"
  },
  "bossByCrTable": {
    "1": {
      "bosses": {
        "Goblin boss": {
          "environments": ["Caves", "Mountains"],
          "minions": ["Goblins", "Worgs"]
        }
      }
    },
    "2": {
      "bosses": {
        "Bandit captain": {
          "environments": ["Cities", "Sewers", "Ruins"],
          "minions": ["Bandits", "Spies", "Thugs", "Berserkers", "Gladiators"]
        },
        "Cult fanatic": {
          "environments": ["Cities", "Ruins"],
          "minions": ["Cultists", "Bandits", "Thugs", "Dretches"]
        },
        "Ettercap": {
          "environments": ["Caves", "Ruins"],
          "minions": ["Giant spiders"]
        },
        "Ghast": {
          "environments": ["Ruins", "Crypts", "Cities", "Sewers"],
          "minions": ["Ghouls", "Zombies"]
        },
        "Gnoll pack lord": {
          "environments": ["Plains", "Caves", "Ruins"],
          "minions": ["Gnolls", "Hyenas"]
        },
        "Ogre": {
          "environments": ["Ruins", "Caves"],
          "minions": ["Orcs", "Goblins"]
        },
        "Sea hag": {
          "environments": ["Coves", "Swamps", "Grottos"],
          "minions": ["Giant constrictor snakes", "Crocodiles"]
        }
      }
    },
    "3": {
      "bosses": {
        "Bugbear chief": {
          "environments": ["Keeps", "Fortresses", "Ruins", "Caves"],
          "minions": ["Bugbears", "Goblins", "Worgs"]
        },
        "Green hag": {
          "environments": ["Forests", "Swamps"],
          "minions": ["Bullywugs", "Giant toads", "Giant constrictor snakes", "Imps", "Quasits"]
        },
        "Winter wolf": {
          "environments": ["Frozen mountains", "Frozen ruins"],
          "minions": ["Dire wolves", "Ice mephits"]
        }
      }
    },
    "4": {
      "bosses": {
        "Banshee": {
          "environments": ["Ruins", "Crypts"],
          "minions": ["Specters", "Skeletons"]
        },
        "Bone naga": {
          "environments": ["Ruins", "Crypts"],
          "minions": ["Skeletons", "Specters", "Wights"]
        },
        "Ettin": {
          "environments": ["Mountains", "Ruins", "Caves"],
          "minions": ["Ogres", "Orcs"]
        },
        "Lamia": {
          "environments": ["Ruins", "Towers", "Caves"],
          "minions": ["Jackalweres"]
        },
        "Lizard king/queen": {
          "environments": ["Swamps", "Sunken grottos"],
          "minions": ["Lizardfolk shamans", "Lizardfolk", "Monitor lizards"]
        }
      }
    },
    "5": {
      "bosses": {
        "Hill giant": {
          "environments": ["Mountains", "Ruins", "Caves"],
          "minions": ["Ogres", "Orcs", "Bugbears", "Goblins", "Cave bears"]
        },
        "Night hag": {
          "environments": ["Ruins", "Crypts", "Lower Planes"],
          "minions": ["Hell hounds", "Quasits", "Manes", "Shadow demons"]
        },
        "Sahuagin baron": {
          "environments": ["Coves", "Grottos", "Underwater ruins"],
          "minions": ["Sahuagin priestesses", "Sahuagin", "Reef sharks", "Giant octopuses", "Krakens"]
        },
        "Wraith": {
          "environments": ["Ruins", "Crypts"],
          "minions": ["Flameskulls", "Specters", "Wights"]
        }
      }
    },
    "6": {
      "bosses": {
        "Hobgoblin warlord": {
          "environments": ["Ruins", "Keeps", "Fortresses"],
          "minions": ["Hobgoblin captains", "Hobgoblins", "Bugbears", "Goblins", "Worgs"]
        },
        "Mage": {
          "environments": ["Towers", "Cities"],
          "minions": ["Animated armor", "Imps", "Acolytes", "Flesh golems", "Veterans"]
        },
        "Medusa": {
          "environments": ["Ruins", "Caves"],
          "minions": ["Basilisks", "Giant constrictor snakes", "Death dogs"]
        }
      }
    },
    "7": {
      "bosses": {
        "Oni": {
          "environments": ["Ruins", "Caves", "Cities"],
          "minions": ["Hobgoblins", "Orcs"]
        }
      }
    },
    "8": {
      "bosses": {
        "Frost giant": {
          "environments": ["Frozen mountains", "Frozen ruins"],
          "minions": ["Yetis", "Young white dragons", "Polar bears", "Winter wolves"]
        }
      }
    },
    "9": {
      "bosses": {
        "Fire giant": {
          "environments": ["Volcanoes", "Caverns"],
          "minions": ["Hell hounds", "Young red dragons", "Salamanders", "Azers", "Fire mephits"]
        },
        "Glabrezu": {
          "environments": ["Lower Planes", "Ruins", "Towers"],
          "minions": ["Barlguras", "Chasmes"]
        }
      }
    },
    "10": {
      "bosses": {
        "Aboleth": {
          "environments": ["Caverns", "Coves", "Lakes"],
          "minions": ["Chuuls", "Cult fanatics", "Hydras", "NPCs (enthralled)", "Sea hags"]
        }
      }
    },
    "11": {
      "bosses": {
        "Efreeti": {
          "environments": ["Ruins", "Volcanoes", "Cities", "Deserts"],
          "minions": ["Fire elementals", "Salamanders", "Fire snakes"]
        },
        "Horned devil": {
          "environments": ["Lower Planes", "Ruins", "Towers"],
          "minions": ["Barbed devils", "Bearded devils", "Spined devils"]
        }
      }
    },
    "12": {
      "bosses": {
        "Archmage": {
          "environments": ["Towers", "Cities"],
          "minions": ["Animated armor", "Imps", "Cambions", "Demons (any)", "Elementals", "Golems"]
        }
      }
    },
    "13": {
      "bosses": {
        "Adult white dragon": {
          "environments": ["Frozen mountains", "Frozen ruins"],
          "minions": ["Yetis"]
        },
        "Vampire": {
          "environments": ["Ruins", "Crypts"],
          "minions": ["Vampire spawn", "Giant bats", "Dire wolves", "Specters", "Wights"]
        }
      }
    },
    "14": {
      "bosses": {
        "Adult black dragon": {
          "environments": ["Swamps", "Sunken grottos"],
          "minions": ["Giant crocodiles", "Trolls", "Bullywugs", "Lizardfolk", "Kuo-toa"]
        }
      }
    },
    "15": {
      "bosses": {
        "Adult green dragon": {
          "environments": ["Forests", "Ruins", "Caverns"],
          "minions": ["Treants", "Elves"]
        },
        "Mummy lord": {
          "environments": ["Ruins", "Crypts"],
          "minions": ["Mummies", "Skeletons", "Wights", "Cult fanatics"]
        }
      }
    },
    "16": {
      "bosses": {
        "Adult blue dragon": {
          "environments": ["Deserts", "Ruins", "Towers"],
          "minions": ["Air elementals", "Mages"]
        },
        "Marilith": {
          "environments": ["Lower Planes", "Ruins", "Towers"],
          "minions": ["Hezrous", "Vrocks"]
        }
      }
    },
    "17": {
      "bosses": {
        "Adult red dragon": {
          "environments": ["Mountains", "Volcanoes", "Ruins", "Caverns"],
          "minions": ["Fire elementals", "Kobolds"]
        },
        "Death knight": {
          "environments": ["Crypts", "Ruins", "Lower Planes"],
          "minions": ["Wights", "Wraiths", "Liches", "Flameskulls", "Nightmares", "Revenants"]
        }
      }
    },
    "19": {
      "bosses": {
        "Balor": {
          "environments": ["Lower Planes", "Ruins"],
          "minions": ["Mariliths", "Glabrezus", "Goristros", "Cambions", "Cult fanatics"]
        }
      }
    },
    "20": {
      "bosses": {
        "Ancient white dragon": {
          "environments": ["Frozen mountains", "Frozen ruins"],
          "minions": ["Abominable yetis"]
        },
        "Pit fiend": {
          "environments": ["Lower Planes", "Ruins", "Towers"],
          "minions": ["Horned devils", "Bone devils", "Erinyes"]
        }
      }
    },
    "21": {
      "bosses": {
        "Ancient black dragon": {
          "environments": ["Swamps", "Sunken grottos"],
          "minions": ["Giant crocodiles", "Trolls", "Bullywugs", "Lizardfolk"]
        },
        "Lich": {
          "environments": ["Ruins", "Towers", "Crypts", "Caves"],
          "minions": ["Death knights", "Iron golems", "Wraiths", "Mages"]
        }
      }
    },
    "22": {
      "bosses": {
        "Ancient green dragon": {
          "environments": ["Forests", "Ruins", "Caverns"],
          "minions": ["Treants", "Elves"]
        }
      }
    },
    "23": {
      "bosses": {
        "Ancient blue dragon": {
          "environments": ["Deserts", "Ruins", "Towers"],
          "minions": ["Air elementals", "Mages"]
        }
      }
    },
    "24": {
      "bosses": {
        "Ancient red dragon": {
          "environments": ["Mountains", "Volcanoes", "Ruins", "Caverns"],
          "minions": ["Fire giants", "Fire elementals", "Kobolds"]
        }
      }
    }
  },
  "adventuringDayXPByLevel": {
    "1": 300,
    "2": 600,
    "3": 1200,
    "4": 1700,
    "5": 3500,
    "6": 4000,
    "7": 5000,
    "8": 6000,
    "9": 7500,
    "10": 9000,
    "11": 10500,
    "12": 11500,
    "13": 13500,
    "14": 15000,
    "15": 18000,
    "16": 20000,
    "17": 25000,
    "18": 27000,
    "19": 30000,
    "20": 40000
  }
}
