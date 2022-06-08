/**
 * Calculates the DEF multiplier
 * @param {Object} characterBuild The character whose damage is to be calculated
 * @param {Object} enemyBuild The enemy taking the damage of the character
 * @returns The DEF multiplier
 */
function EnemyDamageReduction(characterBuild, enemyBuild) {
  const def = 5 * enemyBuild.enemy_level + 500;
  const defDmgReduction =
    def / (def + 5 * characterBuild.character_level + 500);

  return defDmgReduction;
}

/**
 * Calculates the RES multiplier
 * @param {Object} enemyBuild The enemy taking the damage of the character
 * @returns The RES multiplier
 */
function EnemyResReduction(enemyBuild) {
  const resPercent = enemyBuild.resPercent / 100;
  if (resPercent < 0) {
    return 1 - resPercent / 2;
  }

  if (resPercent < 0.75) {
    return 1 - resPercent;
  } 

  return 1 / (4 * resPercent + 1);
}

export {EnemyDamageReduction, EnemyResReduction};
