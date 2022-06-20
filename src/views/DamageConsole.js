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

  const reductionFromDefense = DMGReductionByDefense(
    props.characterBuild,
    props.enemyStats
  );
  const reductionFromResistance = DMGReductionByResistance(props.enemyStats);

  /**
   * @description an Object that contains baseDamage Info for each talent
   * ex:
   * @prop {elemental_burst}: {element: 'Cryo', damage: 10259.126832}
   * @prop {elemental_skill}: {element: 'Cryo', damage: 12394.5237372}
   */

  const baseDamage = CharacterBaseDamage(props.characterBuild);
  return (
    <Box>
      {map(keys(talentInfo), talent => {
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
