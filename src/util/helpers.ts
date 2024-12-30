import { dndData } from '../app/assets/dnd-data';
import { CharacterLevel } from '../app/assets/dnd-types';

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

  const difficultyXpRanges = encounterXpThresholds.reduce((prev, curr) => {
    const [easyMin, easyMax] = prev.easy;
    const [mediumMin, mediumMax] = prev.medium;
    const [hardMin, hardMax] = prev.hard;
    const [deadlyMin, deadlyMax] = prev.deadly;

    return ({
      ...prev,
      easy: [easyMin + curr.easy, easyMax + curr.medium],
      medium: [mediumMin + curr.medium, mediumMax + curr.hard],
      hard: [hardMin + curr.hard, hardMax + curr.deadly],
      deadly: [deadlyMin + curr.deadly, deadlyMax + (curr.deadly * 2)],

    });
  }, {
    easy: [0,-1], // tuple for target range of xp on easy -- [min, max]
    medium: [0,-1],
    hard: [0,-1],
    deadly: [0,-1]
  });

  return difficultyXpRanges;
};

console.log(getDifficultyXpRanges([{level: 4},{level: 4},{level: 6}]));

export const getTargetDifficultyXpRange = ({ }) => {

};
