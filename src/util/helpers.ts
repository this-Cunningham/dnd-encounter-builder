import { dndData } from '../app/assets/dnd-data';
import { CharacterLevel, Difficulty, DifficultyXpRange } from '../app/assets/dnd-types';

type Adventurer = {
  level: CharacterLevel;
};

const { encounterDifficultyAndXPThresholds } = dndData;

export const getAdventurerXpThreshold = (adventurer: Adventurer) => {
  const level = adventurer.level;

  const easy = encounterDifficultyAndXPThresholds[level].easyXp;
  const medium = encounterDifficultyAndXPThresholds[level].mediumXp;
  const hard = encounterDifficultyAndXPThresholds[level].hardXp;
  const deadly = encounterDifficultyAndXPThresholds[level].deadlyXp;

  return {
    easy,
    medium,
    hard,
    deadly,
  };
};

export const getDifficultyXpRanges = (adventurers: Adventurer[]) => {
  const encounterXpThresholds = adventurers.map(adventurer => (
    getAdventurerXpThreshold(adventurer)
  ));

  const difficultyXpRanges = encounterXpThresholds.reduce<{
    easy: DifficultyXpRange;
    medium: DifficultyXpRange;
    hard: DifficultyXpRange;
    deadly: DifficultyXpRange;
  }>((prev, curr) => {
    const [easyMin, easyMax] = prev.easy;
    const [mediumMin, mediumMax] = prev.medium;
    const [hardMin, hardMax] = prev.hard;
    const [deadlyMin, deadlyMax] = prev.deadly;

    return ({
      easy: [easyMin + curr.easy, easyMax + curr.medium],
      medium: [mediumMin + curr.medium, mediumMax + curr.hard],
      hard: [hardMin + curr.hard, hardMax + curr.deadly],
      deadly: [deadlyMin + curr.deadly, deadlyMax + (curr.deadly * 1.5)],
    });
  }, {
    easy: [0,-1], // tuple for target range of xp on easy -- [min, max]
    medium: [0,-1],
    hard: [0,-1],
    deadly: [0,-1]
  });

  return difficultyXpRanges;
};

// console.log(getDifficultyXpRanges([{level: 1},{level: 1},{level: 1}]));

export const getTargetDifficultyXpRange = ({
  adventurers,
  targetDifficulty
}: {
  adventurers: Adventurer[];
  targetDifficulty: Difficulty;
}) => {
  const xpRangesByDifficulty = getDifficultyXpRanges(adventurers);

  return xpRangesByDifficulty[targetDifficulty];
};

// console.log(getTargetDifficultyXpRange({
//   adventurers: [{level: 1},{level: 1},{level: 1}],
//   targetDifficulty: Difficulty.EASY
// }));
