import _ from "lodash";
import { STAT_FIELDS } from "../constants/EnemyStats";

/**
 * @description A class that represents enemy stats
 * @param {Object} stats - enemy information
 */
class EnemyStats {
  constructor(stats) {
    _.map(STAT_FIELDS, (stat) => {
      const statType = _.get(stat, "field");
      const defaultValue = _.get(stat, "defaultValue");

      this[statType] = _.get(stats, statType) ?? defaultValue;
    });
  }

  // displays enemy stats
  display() {
    console.log(this);
    return this;
  }
}

export default EnemyStats;
