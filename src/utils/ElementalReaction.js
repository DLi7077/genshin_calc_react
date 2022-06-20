/**
 * @description Calculates the melt/vaporize multiplier for a character
 * @param {string} damageElement - damage element to be applied on enemy
 * @param {string} statusElement - element currently on enemy
 * @returns The elemental reaction multiplierFF
 */
export default function ElementalReactionMultiplier(
  elementalMastery,
  damageElement,
  statusElement
) {
  const elementInteract = damageElement + '->' + statusElement;
  const reactionMap = {
    'Pyro->Cryo': 2,
    'Cyro->Pyro': 1.5,
    'Hydro->Pyro': 2,
    'Pyro->Hydro': 1.5
  };
  const reactionMultiplier = reactionMap[elementInteract];
  if (!reactionMultiplier) return 1;

  const meltVapMultiplier =
    1 + 0.01 * (278 * (elementalMastery / (elementalMastery + 1400)));

  return meltVapMultiplier * reactionMultiplier;
}
