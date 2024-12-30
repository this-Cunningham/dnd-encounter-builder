export type ChallengeRating =
  | "0"
  | "1/8"
  | "1/4"
  | "1/2"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30";

/**
 * **CharacterLevel Type**
 *
 * Enumerates all possible character levels from "1" to "20" as string literals.
 */
export type CharacterLevel =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

/**
 * **MagicItemRarity Type**
 *
 * Enumerates the rarity levels of magic items.
 */
export type MagicItemRarity =
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Very Rare";

/**
 * **Environment Type**
 *
 * Enumerates various environments where bosses can be found.
 * Extend this list based on your application's requirements.
 */
export type Environment =
  | "Caves"
  | "Mountains"
  | "Cities"
  | "Sewers"
  | "Ruins"
  | "Crypts"
  | "Swamps"
  | "Forests"
  | "Towers"
  | "Volcanoes"
  | "Caverns"
  | "Lower Planes"
  | "Deserts"
  | "Coves"
  | "Grottos"
  | "Lakes"
  | "Frozen mountains"
  | "Frozen ruins"
  | "Sunken grottos"
  | "Plains"
  | string;

/**
 * **SizeCategoryName Enum**
 *
 * Enumerates the different size categories of creatures.
 */
export enum SizeCategoryName {
  Tiny = "tiny",
  Small = "small",
  Medium = "medium",
  Large = "large",
  Huge = "huge",
  Gargantuan = "gargantuan"
}

/**
 * **Root Interface: DnDData**
 *
 * Encapsulates all the data structures related to D&D encounters.
 */
export interface DnDData {
  encounterDifficultyAndXPThresholds: EncounterDifficultyAndXPThresholds;
  encounterMultipliersTable: EncounterMultipliersTable;
  monsterStatisticsByCr: MonsterStatisticsByCr;
  defensiveCrTable: DefensiveCrTableEntry[];
  offensiveCrTable: OffensiveCrTableEntry[];
  xpValuesByCr: XPValuesByCR;
  monsterFeatureAdjustments: MonsterFeatureAdjustments;
  treasureTables: TreasureTables;
  magicItemRarityByencounterLevel: MagicItemRarityEntry[];
  encounterCompositionByRoleGuidelines: EncounterCompositionByRoleGuidelines;
  sizeCategories: SizeCategories;
  hitDiceBySize: HitDiceBySize;
  proficiencyBonusByChallengeRating: ProficiencyBonusByCR;
  bossByCrTable: BossByCrTable;
  adventuringDayXPByLevel: AdventuringDayXPByLevel;
}

/**
 * **EncounterDifficultyAndXPThresholds Interface**
 *
 * Defines XP thresholds for different encounter difficulties based on character levels.
 */
export type EncounterDifficultyAndXPThresholds = {
  [level in CharacterLevel]: XPThresholds;
}

/**
 * **XPThresholds Interface**
 *
 * Represents XP thresholds for various encounter difficulties.
 */
export interface XPThresholds {
  easyXp: number;
  mediumXp: number;
  hardXp: number;
  deadlyXp: number;
}

/**
 * **EncounterMultipliersTable Type**
 *
 * Maps each Challenge Rating (CR) to its corresponding encounter multiplier.
 */
export type EncounterMultipliersTable = {
  [cr in ChallengeRating]?: number;
};

/**
 * **MonsterStatisticsByCr Type**
 *
 * Maps each Challenge Rating (CR) to its corresponding monster statistics.
 */
export type MonsterStatisticsByCr = {
  [cr in ChallengeRating]?: MonsterStatistics;
};

/**
 * **MonsterStatistics Interface**
 *
 * Defines various statistics for monsters based on their Challenge Rating (CR).
 */
export interface MonsterStatistics {
  proficiencyBonus: string;
  hpRange: string;
  expectedAc: number;
  expectedAttackBonus: string;
  expectedDpr: string;
  expectedSaveDc: number;
}

/**
 * **DefensiveCrTableEntry Interface**
 *
 * Represents each entry in the Defensive CR Table.
 */
export interface DefensiveCrTableEntry {
  hpRange: string;
  defensiveCr: ChallengeRating | number;
  baseAc: number;
}

/**
 * **OffensiveCrTableEntry Interface**
 *
 * Represents each entry in the Offensive CR Table.
 */
export interface OffensiveCrTableEntry {
  dprRange: string;
  offensiveCr: ChallengeRating | number;
  baseAttackBonus: string;
  baseSaveDc: number;
}

/**
 * **XPValuesByCR Type**
 *
 * Maps each Challenge Rating (CR) to its corresponding XP value.
 */
export type XPValuesByCR = {
  [cr in ChallengeRating]?: number;
};

/**
 * **MonsterFeatureAdjustments Interface**
 *
 * Defines adjustments based on various monster features.
 */
export interface MonsterFeatureAdjustments {
  resistance: string;
  immunity: string;
  legendaryActions: string;
  lairActions: string;
  areaOfEffect: string;
}

/**
 * **TreasureTables Interface**
 *
 * Contains all treasure-related tables.
 */
export interface TreasureTables {
  treasureHoardByEncounterCr: TreasureHoardByEncounterCr;
}

/**
 * **TreasureHoardByEncounterCr Type**
 *
 * Maps each Challenge Rating (CR) to its corresponding treasure hoard details.
 */
export type TreasureHoardByEncounterCr = {
  [cr in ChallengeRating]?: TreasureHoard;
};

/**
 * **TreasureHoard Interface**
 *
 * Defines the structure of a treasure hoard.
 */
export interface TreasureHoard {
  coinHoard: string;
  magicItems: string;
}

/**
 * **MagicItemRarityEntry Interface**
 *
 * Defines magic item rarity based on encounter levels.
 */
export interface MagicItemRarityEntry {
  encounterLevel: string; // Example: "1–4", "5–10", etc.
  magicItemRarity: MagicItemRarity;
}

/**
 * **EncounterCompositionByRoleGuidelines Interface**
 *
 * Provides guidelines for different roles within an encounter.
 */
export interface EncounterCompositionByRoleGuidelines {
  leader: string;
  brute: string;
  support: string;
  minion: string;
}

/**
 * **SizeCategories Type**
 *
 * Maps each size category to its corresponding details.
 */
export type SizeCategories = {
  [key in SizeCategoryName]: SizeCategory;
};

/**
 * **SizeCategory Interface**
 *
 * Defines the space occupied and examples of creatures for a size category.
 */
export interface SizeCategory {
  space: string;
  examples: string[];
}

/**
 * **HitDiceBySize Interface**
 *
 * Associates size categories with their corresponding hit dice and average HP per die.
 */
export interface HitDiceBySize {
  tiny: HitDice;
  small: HitDice;
  medium: HitDice;
  large: HitDice;
  huge: HitDice;
  gargantuan: HitDice;
}

/**
 * **HitDice Interface**
 *
 * Defines the type of hit die and average HP per die for a size category.
 */
export interface HitDice {
  hitDie: string;
  avgHpPerDie: number;
}

/**
 * **ProficiencyBonusByCR Type**
 *
 * Maps each Challenge Rating (CR) to its corresponding proficiency bonus.
 */
export type ProficiencyBonusByCR = {
  [cr in ChallengeRating]?: string;
};

/**
 * **BossByCrTable Type**
 *
 * Maps each Challenge Rating (CR) to its corresponding boss entries.
 */
export type BossByCrTable = {
  [cr in ChallengeRating]?: BossEntry;
};

/**
 * **BossEntry Interface**
 *
 * Defines the structure of a boss entry, including its environments and minions.
 */
export interface BossEntry {
  bosses: {
    [bossName: string]: BossDetails;
  };
}

/**
 * **BossDetails Interface**
 *
 * Details about a specific boss, including environments and minions.
 */
export interface BossDetails {
  environments: Environment[];
  minions: string[];
}

/**
 * **AdventuringDayXPByLevel Type**
 *
 * Maps each character level to the XP budget for an adventuring day.
 */
export type AdventuringDayXPByLevel = {
  [level in CharacterLevel]: number;
};