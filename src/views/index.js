import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import CharacterBuild from './CharacterBuild';
import CharacterClass from '../classes/CharacterClass';
import EnemyClass from '../classes/EnemyClass';
import EnemyStatus from './EnemyStatus';
import DamageConsole from './DamageConsole';

export default function DamageCalculator() {
  const [characterBuild, setCharcterBuild] = useState(
    new CharacterClass({
      character_name: 'Chongyun',
      attack_base: 733,
      attack_total: 1675,
      DMG_Bonus_Cryo: 46,
      crit_damage: 194.6
    })
  );

  const [enemyStats, setEnemyStats] = useState(new EnemyClass({}));

  useEffect(() => {}, [characterBuild, enemyStats]);

  function updateCharacterField(field, value) {
    const updatedCharacter = characterBuild;
    updatedCharacter[field] = value ?? 0;
    setCharcterBuild(new CharacterClass(updatedCharacter));
  }

  function updateEnemyField(field, value) {
    const updatedEnemyStat = enemyStats;
    updatedEnemyStat[field] = value ?? 0;
    setEnemyStats(new EnemyClass(updatedEnemyStat));
  }

  return (
    <Box
      style={{
        display: 'flex'
      }}
    >
      <CharacterBuild
        characterBuild={characterBuild}
        update={updateCharacterField}
      />
      <EnemyStatus enemyStats={enemyStats} update={updateEnemyField} />
      <DamageConsole characterBuild={characterBuild} enemyStats={enemyStats} />
    </Box>
  );
}
