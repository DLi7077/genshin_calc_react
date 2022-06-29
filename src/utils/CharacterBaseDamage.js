import { assign, get, keys, map } from 'lodash';
import CharacterTalentScalings from '../constants/CharacterTalentScalings';
import { DAMAGE_ELEMENTS, ELEMENTS } from '../constants/CharacterStats';

/**
 * @description calculates the damage output for a character's stats
 * @param {Object} characterBuild characterBuild  object
 * @returns damage output for each skill
 */
function CharacterBaseDamage(characterBuild) {
  /**
   * @descriptions computes the base ability damage for the character build
   * @param {Object} characterBuild the character build
   * @returns {Object} element and base damage for each ability
   */
  const GetBaseDamage = characterBuild => {
    const talentInfo = CharacterTalentScalings[characterBuild.character_name];
    let AbilityBaseDamage = {};

    map(keys(talentInfo), talent => {
      const talentDetails = get(talentInfo, talent);
      const talentLevel = get(characterBuild, talent);

      const talentScale = get(talentDetails, 'scaling')[talentLevel - 1] / 100;
      const scalingStat = get(talentDetails, 'scaling_stat');
      const baseValue = get(characterBuild, scalingStat);

      AbilityBaseDamage[get(talentDetails, 'name')] = {
        element: get(talentDetails, 'element_type'),
        damage: baseValue * talentScale
      };
    });

    return AbilityBaseDamage;
  };

  /**
   * @description computes the multipliers for the character build
   * @param {Object} characterBuild the character build
   * @returns {Object} number multipliers for each element type
   */
  const GetMultipliers = characterBuild => {
    const universalBonus = characterBuild.DMG_Bonus_All / 100 ?? 0;
    const elementalBonus = characterBuild.DMG_Bonus_Elemental / 100 ?? 0;

    const damageBonuses = {};
    map(keys(DAMAGE_ELEMENTS), element => {
      damageBonuses[element] =
        universalBonus + get(characterBuild, DAMAGE_ELEMENTS[element]) / 100;
      if (ELEMENTS.includes(element)) {
        damageBonuses[element] += elementalBonus;
      }
    });

    return damageBonuses;
  };

  /**
   * @description computes talent damage with multipliers for correct elements
   * @param {Object} multipliers an object of multipliers for each element
   * @param {Object} baseDamage an object of base damages for each talent
   * @returns {Object} an Object of talent Damages after multipliers
   */
  const GetDamageWithMultipliers = (multipliers, baseDamage) => {
    let damageWithMultipliers = baseDamage;
    map(keys(baseDamage), talentName => {
      const talentBaseDMG = get(baseDamage, talentName);
      const talentDMGBonus =
        get(characterBuild, `DMG_Bonus_${talentName}`) / 100;
      const damageElement = get(talentBaseDMG, 'element');
      const elementMultiplier = get(multipliers, damageElement) ?? 1;

      const totalBonus = 1 + talentDMGBonus + elementMultiplier;
      damageWithMultipliers[talentName]['damage'] *= totalBonus;
    });

    return damageWithMultipliers;
  };

  const damageMultipliers = GetMultipliers(characterBuild);
  const baseAbilityDamage = GetBaseDamage(characterBuild);

  //get damage after dmg bonuses
  const damageWithMultipliers = GetDamageWithMultipliers(
    damageMultipliers,
    baseAbilityDamage
  );

  //add on crit dmg multiplier
  const critMultiplier = 1 + characterBuild.crit_damage / 100 ?? 0;
  map(keys(damageWithMultipliers), talentDamage => {
    const currTalentDMG = get(damageWithMultipliers, `${talentDamage}.damage`);
    assign(damageWithMultipliers[talentDamage], {
      damage: currTalentDMG * critMultiplier
    });
  });

  return damageWithMultipliers;
}

export default CharacterBaseDamage;
