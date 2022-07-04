import { get, keys, map, pickBy } from 'lodash';
import SUPPORT_BUFFS from '../constants/SupportBuffs';

/**
 * @description Provides the resulting info for damage console after applying support buffs
 * @param {Object} characterBuild - The current character dealing damamge
 * @param {Object} enemyStats - The current enemy that's being attacked
 * @param {String[]} supportBuffs - The list of support buffs in the form of a path in supportBuffs Object
 *
 * @returns {Object} The resuling Character Build and Enemy Stats after support buffs
 */
function SupportBuffCalc(characterBuild, enemyStats, supportBuffs) {
  // testing rn
  const supportBuilds = {
    Bennett: {
      attack_base: 865
    },
    Sucrose: {
      elemental_mastery: 900
    },
    'Kaedehara Kazuha': {
      elemental_mastery: 900
    }
  };

  const updatedStats = {
    updatedCharacter: { ...characterBuild },
    updatedEnemy: { ...enemyStats },
    supportBuilds: { ...supportBuilds }
  };

  const usedSupportBuffs = keys(
    pickBy(supportBuffs, status => {
      return status === true;
    })
  );

  // evaluate support buffs:
  map(usedSupportBuffs, buff => {
    const buffInfo = get(SUPPORT_BUFFS, buff);
    const {
      buff_source,
      buff_amount,
      buff_multiplier,
      buff_type,
      buff_location,
      buff_category
    } = buffInfo;

    const buffBaseAmount = get(updatedStats, buff_source) ?? buff_amount;
    const buffQuantity = buffBaseAmount * buff_multiplier;

    switch (buff_type) {
      case 'flat':
        updatedStats[buff_location][buff_category] += buffQuantity;
        break;
      case 'percent':
        updatedStats[buff_location][buff_category] *= buffQuantity;
        break;
      default:
        console.error('unknown type', buff_type);
    }

  });

  const { updatedCharacter, updatedEnemy } = updatedStats;
  return { updatedCharacter, updatedEnemy };
}

export default SupportBuffCalc;
