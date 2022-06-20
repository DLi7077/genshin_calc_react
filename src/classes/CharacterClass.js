import _ from 'lodash';
import { STAT_FIELDS } from '../constants/CharacterStats';

/**
 * @description A class that represents a character build
 * @param {Object} build - an object of stats
 */
class CharacterBuild {
  constructor(build) {
    _.map(STAT_FIELDS, stat => {
      const statType = _.get(stat, 'field');
      const defaultValue = _.get(stat, 'defaultValue');

      this[statType] = _.get(build, statType) ?? defaultValue;
    });
  }

  // displays character stats
  display() {
    console.log(this);
  }
}

export default CharacterBuild;
