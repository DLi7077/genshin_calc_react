import React from "react";
import { get, map, keys, omit } from "lodash";
import { Box, TextField, makeStyles } from "@material-ui/core";
import CharacterClass from "../classes/CharacterClass";
import CharacterBaseDamage from "../utils/CharacterBaseDamage";

const useStyles = makeStyles({
  field: {
    "&:hover .MuiInputLabel-root": {
      color: "#90caf9", //Change hover color of text
    },
    "& .Mui-focused": {
      color: "#90caf9", //Color of label when focused
    }
  }
});

export default function CharacterBuild() {
  const classes = useStyles();
  // a character build that a user will give us
  const build = {
    character_name: "Chongyun",
    attack_base: 733,
    attack_total: 1675,
    DMG_Bonus_Cryo: 46,
    crit_damage: 194.6,
  };

  //cleans up inputted build (above)
  const charBuild = new CharacterClass(build);
  const baseDamage = CharacterBaseDamage(charBuild);

  return (
    <>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Box
          style={{
            justifyContent: "flex-start",
            minWidth: "250px",
            textAlign: "right"
          }}
          marginRight="20px"
        >
          character_name
        </Box>
        <Box style={{ justifyContent: "flex-end", minWidth: "100px" }}>
          {get(charBuild, "character_name")}
        </Box>
      </Box>
      {map(keys(omit(charBuild, "character_name")), (stats, idx) => {
        return (
          <Box key={idx} style={{ display: "flex", alignItems: "center" }}>
            <Box
              style={{
                justifyContent: "flex-start",
                minWidth: "250px",
                textAlign: "right"
              }}
              marginRight="20px"
            >
              {stats}
            </Box>
            <Box style={{ justifyContent: "flex-end", minWidth: "100px" }}>
              <TextField
                type="number"
                label={stats}
                inputProps={{
                  style: {
                    color: "white",
                    fontFamily: "genshinFont"
                  }
                }}
                size="small"
                className={classes.field}
                onChange={e => (charBuild[stats] = parseFloat(e.target.value))}
                defaultValue={get(charBuild, stats)}
              ></TextField>
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
