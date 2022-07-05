import { map, get } from 'lodash';
import ArtifactModifiers from '../constants/ArtifactModifiers';

/**
 * Updates the corresponding characterBuild or enemyBuild depending on the artifactBuff
 * being applied.
 * @param {Object} characterBuild The character whose damage is to be calculated
 * @param {Object} enemyBuild The enemy taking the damage of the character
 * @param {Object} artifactBuff The current string of the buff applying to the character
 * Ex: viridescent.2pc
 */
function ArtifactBuffCharBuild(characterBuild, enemyBuild, artifactBuff) {
  const buildSources = {
    characterBuild: characterBuild,
    enemyBuild: enemyBuild
  };
  const artifactBuffObj = get(ArtifactModifiers, artifactBuff);
  map(artifactBuffObj.bonuses, bonus => {
    //Conditional buff
    if (get(bonus, 'conditional')) {
      const conditionSource = buildSources[get(bonus, 'condition_source')];
      if (
        get(conditionSource, get(bonus, 'condition_field')) !==
        get(bonus, 'condition_expected')
      ) {
        return; //If does not meet conditional, do not apply buff
      }
    }
    const modifyValue = get(bonus, 'value');
    const objectSource = buildSources[get(bonus, 'source_object')];
    objectSource[get(bonus, 'destination_field')] +=
      get(bonus, 'type') === 'flat'
        ? modifyValue
        : characterBuild[get(bonus, 'source_field')] * modifyValue;
  });
  return { newCharacter: characterBuild, newEnemy: enemyBuild };
}

export default ArtifactBuffCharBuild;
