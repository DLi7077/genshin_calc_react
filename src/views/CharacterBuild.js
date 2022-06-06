import React from "react";
import { get, map, keys, values } from "lodash";
import { Box } from "@material-ui/core";
import CharacterClass from "../classes/CharacterClass";
import CharacterBaseDamage from "../utils/CharacterBaseDamage";

export default function CharacterBuild() {
  // a character build that a user will give us
  const build = {
    character_name: "Chongyun",
    attack_base: 733,
    attack_total: 1675,
    DMG_Bonus_Cryo: 46,
    crit_damage : 194.6
  };

  //cleans up inputted build (above)
  const charBuild = new CharacterClass(build);
  const baseDamage = CharacterBaseDamage(charBuild);

  return (
    <>
      {map(keys(charBuild), (stats, idx) => {
        return (
          <Box key={idx} style={{ display: "flex" }}>
            <Box style={{ justifyContent: "flex-start", minWidth: "250px" }}>
              {stats}
            </Box>

            <Box style={{ justifyContent: "flex-end", minWidth: "100px" }}>
              {get(charBuild, stats)}
            </Box>
          </Box>
        );
      })}
      {map(keys(baseDamage), (talent, idx) => {
        return (
          <Box key={idx} style={{ display: "flex" }}>
            <Box style={{ justifyContent: "flex-start", minWidth: "250px" }}>
              {talent}
            </Box>

            <Box style={{ justifyContent: "flex-end", minWidth: "100px" }}>
              {get(get(baseDamage, talent), "damage")}
            </Box>
          </Box>
        );
      })}
    </>
  );
}
