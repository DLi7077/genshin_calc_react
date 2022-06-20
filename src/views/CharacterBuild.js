import React from 'react';
import PropTypes from 'prop-types';
import { get, map } from 'lodash';
import { Box, TextField, makeStyles } from '@material-ui/core';
import { STAT_FIELDS } from '../constants/CharacterStats';

const useStyles = makeStyles({
  field: {
    '&:hover .MuiInputLabel-root': {
      color: '#90caf9' //Change hover color of text
    },
    '& .Mui-focused': {
      color: '#90caf9' //Color of label when focused
    }
  }
});

function CharacterBuild(props) {
  const classes = useStyles();

  return (
    <Box>
      {map(STAT_FIELDS, (stats, idx) => {
        return (
          <Box key={`${stats}${idx}`}>
            {!!get(stats, 'disabled') && (
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  style={{
                    justifyContent: 'flex-start',
                    minWidth: '250px',
                    textAlign: 'right'
                  }}
                  marginRight="20px"
                >
                  {stats.label}
                </Box>
                <Box style={{ justifyContent: 'flex-end', minWidth: '100px' }}>
                  {get(props.characterBuild, 'character_name')}
                </Box>
              </Box>
            )}
            {!get(stats, 'disabled') && (
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  style={{
                    justifyContent: 'flex-start',
                    minWidth: '250px',
                    textAlign: 'right'
                  }}
                  marginRight="20px"
                >
                  {stats.label}
                </Box>
                <Box style={{ justifyContent: 'flex-end', minWidth: '100px' }}>
                  <TextField
                    type="number"
                    label={stats.label}
                    inputProps={{
                      style: {
                        color: 'white',
                        fontFamily: 'genshinFont'
                      }
                    }}
                    size="small"
                    className={classes.field}
                    onChange={e => {
                      props.update(stats.field, parseFloat(e.target.value));
                    }}
                    defaultValue={get(props.characterBuild, stats.field)}
                  ></TextField>
                </Box>
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}

CharacterBuild.propTypes = {
  characterBuild: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired
};

export default CharacterBuild;
