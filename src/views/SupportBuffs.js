import React from 'react';
import { get, keys, flatten, map } from 'lodash';
import { Box, Button, Typography, makeStyles } from '@material-ui/core/';
import { FormControlLabel, Checkbox } from '@mui/material';
import SUPPORT_BUFFS from '../constants/SupportBuffs';

const useStyles = makeStyles(theme => ({
  buffButton: {
    color: 'white',
    '&.Mui-checked': {
      color: 'white'
    }
  }
}));

function SupportBuffs(props) {
  const classes = useStyles();

  const buffGenerator = flatten(
    map(keys(SUPPORT_BUFFS), character => {
      //get all buffs for current character
      const characterBuffNames = map(
        keys(get(SUPPORT_BUFFS, character)),
        buff => {
          return `${character}.${buff}`;
        }
      );

      // sets or clears all buffs of a support
      function SetCharacterBuffs(characterBuffNames, status) {
        map(characterBuffNames, buff_name => {
          props.update(buff_name, status);
        });
      }

      // create checkboxes for each buff
      const characterBuffCheckbox = map(characterBuffNames, buff => {
        const props_has_buff = get(props.supportBuffs, buff) ?? false;

        return (
          <FormControlLabel
            key={buff}
            label={buff}
            labelPlacement="end"
            control={
              <Checkbox
                key={buff}
                sx={{ color: 'white' }}
                checked={props_has_buff}
                onChange={e => {
                  props.update(buff, e.target.checked);
                }}
              />
            }
          />
        );
      });

      return (
        <Box key={character} sx={{ border: '1px solid white' }}>
          {characterBuffCheckbox}
        </Box>
      );
    })
  );

  return <Box>{buffGenerator}</Box>;
}

export default SupportBuffs;
