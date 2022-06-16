import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get, keys, map } from 'lodash';
import { Box, FormControl, makeStyles, TextField } from '@material-ui/core';
import { STAT_FIELDS } from '../constants/EnemyStats';
import ELEMENTS from '../constants/Element';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const useStyles = makeStyles({
  field: {
    '&:hover .MuiInputLabel-root': {
      color: '#90caf9' //Change hover color of text
    },
    '& .Mui-focused': {
      color: '#90caf9' //Color of label when focused
    }
  },
  elementSelect: {
    display: 'flex',
    alignItems: 'center'
  },
  elementIcon: {
    height: '30px',
    width: 'auto',
    display: 'flex'
  }
});

function EnemyStatus(props) {
  const classes = useStyles();
  const [element, setElement] = useState('None');

  return (
    <Box>
      {map(STAT_FIELDS, (stat, idx) => {
        return (
          <Box key={idx} style={{ display: 'flex', alignItems: 'center' }}>
            <Box
              style={{
                justifyContent: 'flex-start',
                minWidth: '250px',
                textAlign: 'right'
              }}
              marginRight="20px"
            >
              {get(stat, 'label')}
            </Box>
            <Box style={{ justifyContent: 'flex-end', minWidth: '100px' }}>
              <TextField
                type={get(stat, 'type')}
                label={get(stat, 'label')}
                inputProps={{
                  style: {
                    color: 'white',
                    fontFamily: 'genshinFont'
                  }
                }}
                size="small"
                className={classes.field}
                onChange={e =>
                  props.update(stat.field, parseFloat(e.target.value))
                }
                value={get(props.enemyStats, stat.field)}
                disabled={!!get(stat, 'disabled')}
              ></TextField>
            </Box>
          </Box>
        );
      })}
      <FormControl className={classes.elementSelect}>
        <ToggleButtonGroup
          value={element}
          exclusive
          onChange={(event, element) => {
            setElement(element);
            props.update('affected_element', element ?? 'None');
          }}
          aria-label="text alignment"
        >
          {map(keys(ELEMENTS), element => {
            return (
              <ToggleButton key={element} value={element}>
                <img
                  className={classes.elementIcon}
                  src={ELEMENTS[element]}
                  alt={ELEMENTS[element]}
                />
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </FormControl>
    </Box>
  );
}

EnemyStatus.propTypes = {
  enemyStats: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired
};

export default EnemyStatus;
