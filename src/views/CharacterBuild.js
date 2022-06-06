import React from "react";
import { get, map, keys, values } from "lodash";
import { Box } from "@material-ui/core";
import { STAT_FIELDS } from "../constants/CharacterStats";
import CharacterClass from "../classes/CharacterClass";
import CharacterBaseDamage from "../utils/CharacterBaseDamage";

export default function CharacterBuild() {
  const tableHeaders = map(STAT_FIELDS, stat => {
    return {
      label: stat.label,
      field: stat.field
    };
  });

  const build = {
    character_name: "Chongyun",
    attack_base: 733,
    attack_total: 1789
  };

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
