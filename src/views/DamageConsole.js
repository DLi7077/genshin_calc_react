import React from 'react';
import PropTypes from 'prop-types';
import { get, keys, map } from 'lodash';
import { Box } from '@material-ui/core';
import CharacterTalentScalings from '../constants/CharacterTalentScalings';
import CharacterBaseDamage from '../utils/CharacterBaseDamage';
import {
  DMGReductionByDefense,
  DMGReductionByResistance
} from '../utils/EnemyDefense';
import ArtifactBuffCharBuild from '../utils/CharacterArtifactUpdater';

/**
 * @description Calculates a character's damage for each talent on the enemy
 * @param {Object} characterBuild - The character build with talentScalings prop
 * @param {Object} enemyStats - The Enemy Stats
 */
function DamageConsole(props) {
  const talentInfo = get(
    CharacterTalentScalings,
    get(props.characterBuild, 'character_name')
  );

  /**
   * @description an Object that contains baseDamage Info for each talent
   * ex:
   * @prop {elemental_burst}: {element: 'Cryo', damage: 10259.126832}
   * @prop {elemental_skill}: {element: 'Cryo', damage: 12394.5237372}
   */

  return (
    <Box>
      {map(keys(talentInfo), talent => {
        //Now must apply artifact buffs
        let evolvingArtifactCharacter = JSON.parse(
          JSON.stringify(props.characterBuild)
        );
        let evolvingArtifactEnemy = JSON.parse(
          JSON.stringify(props.enemyStats)
        );
        map(keys(props.artifactActives), activeBuff => {
          //Check if buff is checked with props
          if (get(props.artifactActives, activeBuff)) {
            const updatedEntities = ArtifactBuffCharBuild(
              evolvingArtifactCharacter,
              evolvingArtifactEnemy,
              activeBuff
            );
            evolvingArtifactCharacter = get(updatedEntities, 'newCharacter');
            evolvingArtifactEnemy = get(updatedEntities, 'newEnemy');
          }
        });
        const reductionFromDefense = DMGReductionByDefense(
          evolvingArtifactCharacter,
          evolvingArtifactEnemy
        );
        const reductionFromResistance = DMGReductionByResistance(
          evolvingArtifactEnemy
        );

        const baseDamage = CharacterBaseDamage(evolvingArtifactCharacter);
        const talentName = get(get(talentInfo, talent), 'name');
        const talentProps = get(baseDamage, talentName);
        const talentDamage =
          get(talentProps, 'damage') *
          reductionFromDefense *
          reductionFromResistance;
        const damageElement = get(talentProps, 'element');
        return (
          <Box key={talent}>
            {get(talentInfo, `${talent}.label`)} {damageElement} {talentDamage}
          </Box>
        );
      })}
    </Box>
  );
}

DamageConsole.propTypes = {
  characterBuild: PropTypes.object.isRequired,
  enemyStats: PropTypes.object.isRequired
};

export default DamageConsole;
