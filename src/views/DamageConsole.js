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
import ElementalReaction from '../utils/ElementalReaction';
import SupportBuffCalc from '../utils/SupportBuffCalc';

/**
 * @description Calculates a character's damage for each talent on the enemy
 * @param {Object} characterBuild - The character build with talentScalings prop
 * @param {Object} enemyStats - The Enemy Stats
 * @param {Object} supportBuffs - A list of support buffs used
 */
function DamageConsole(props) {
  const { updatedCharacter, updatedEnemy } = SupportBuffCalc(
    props.characterBuild,
    props.enemyStats,
    props.supportBuffs
  );

  const talentInfo = get(
    CharacterTalentScalings,
    get(updatedCharacter, 'character_name')
  );

  const reductionFromDefense = DMGReductionByDefense(
    updatedCharacter,
    updatedEnemy
  );
  const reductionFromResistance = DMGReductionByResistance(updatedEnemy);

  /**
   * @description an Object that contains baseDamage Info for each talent
   * ex:
   * @prop {elemental_burst}: {element: 'Cryo', damage: 10259.126832}
   * @prop {elemental_skill}: {element: 'Cryo', damage: 12394.5237372}
   */

  const baseDamage = CharacterBaseDamage(updatedCharacter);
  return (
    <Box style={{ fontSize: '30px' }}>
      {map(keys(talentInfo), talent => {
        const talentName = get(get(talentInfo, talent), 'name');
        const talentProps = get(baseDamage, talentName);

        //evaluate vaporize/melt bonus
        const vapMeltBonus = ElementalReaction(
          updatedCharacter.elemental_mastery,
          talentProps.element,
          updatedEnemy.affected_element
        );

        //evaluate total damage
        const talentDamage =
          get(talentProps, 'damage') *
          reductionFromDefense *
          reductionFromResistance *
          vapMeltBonus;

        return (
          <Box key={talent}>
            {get(talentInfo, `${talent}.label`)} {talentProps.element}
            {talentDamage}
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
