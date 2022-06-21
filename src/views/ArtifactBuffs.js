import React from 'react';
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  makeStyles
} from '@material-ui/core';
import { map } from 'lodash';
import ArtifactModifiers from '../constants/ArtifactModifiers';

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

function ArtifactBuffs(props) {
  const classes = useStyles();

  return (
    <Box>
      <FormGroup>
        {map(ArtifactModifiers, buff => {
          return (
            <FormControlLabel
              key={`${buff.label}_artifactBuff`}
              control={<Checkbox color="primary" />}
              label={buff.label}
              onChange={e => {
                props.update(buff.field);
              }}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
}

export default ArtifactBuffs;
