import { get, keys, map } from "lodash";
import CharacterTalentScalings from "../constants/CharacterTalentScalings";
import { DAMAGE_ELEMENTS } from "../constants/CharacterStats";

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

      const talentScale = get(talentDetails, "scaling")[talentLevel - 1] / 100;
      const scalingStat = get(talentDetails, "scaling_stat");
      const baseValue = get(characterBuild, scalingStat);

      AbilityBaseDamage[get(talentDetails, "name")] = {
        element: get(talentDetails, "element_type"),
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
    const critMultiplier = 1 + characterBuild.crit_damage / 100;
    let damageBonuses = {};

    map(keys(DAMAGE_ELEMENTS), element => {
      damageBonuses[element] =
        (1 + get(characterBuild, DAMAGE_ELEMENTS[element]) / 100) *
        critMultiplier;
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
    console.log(baseDamage, multipliers)
    let damageWithMultipliers = baseDamage;

    map(keys(baseDamage), talentName => {
      const talentDetails = get(baseDamage, talentName);
      const damageElement = get(talentDetails, "element");
      const elementMultiplier = get(multipliers, damageElement) ?? 1;
      damageWithMultipliers[talentName]["damage"] *= elementMultiplier;
    });

    return damageWithMultipliers;
  };

  const damageMultipliers = GetMultipliers(characterBuild);
  const baseAbilityDamage = GetBaseDamage(characterBuild);

  const damageWithMultipliers = GetDamageWithMultipliers(
    damageMultipliers,
    baseAbilityDamage
  );

  return damageWithMultipliers;
}

export default CharacterBaseDamage;
