import React from 'react';
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  makeStyles
} from '@material-ui/core';
import { map, keys } from 'lodash';
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
        {map(keys(ArtifactModifiers), artifactSetName => {
          const currentArtifact = ArtifactModifiers[artifactSetName];
          return (
            <Box key={artifactSetName} style={{ display: 'flex' }}>
              {map(currentArtifact, buff => {
                return (
                  <FormControlLabel
                    key={`${artifactSetName}.${buff.field}`}
                    control={<Checkbox color="primary" />}
                    label={buff.label}
                    onChange={e => {
                      props.update(`${artifactSetName}.${buff.field}`);
                    }}
                  />
                );
              })}
            </Box>
          );
        })}
      </FormGroup>
    </Box>
  );
}

export default ArtifactBuffs;
