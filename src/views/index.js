import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import CharacterBuild from './CharacterBuild';
import CharacterClass from '../classes/CharacterClass';
import EnemyClass from '../classes/EnemyClass';
import EnemyStatus from './EnemyStatus';
import DamageConsole from './DamageConsole';
import SupportBuffs from './SupportBuffs';

export default function DamageCalculator() {
  const [characterBuild, setCharcterBuild] = useState(
    new CharacterClass({
      character_name: 'Chongyun',
      attack_base: 733,
      attack_total: 1675,
      DMG_Bonus_Cryo: 46.6,
      crit_damage: 100,
      elemental_burst_talent: 13,
      elemental_skill_talent: 13
    })
  );
  const [enemyStats, setEnemyStats] = useState(new EnemyClass({}));
  const [supportBuffs, setSupportBuffs] = useState({});

  useEffect(() => {
    console.log(characterBuild);
  }, [characterBuild, enemyStats, supportBuffs]);

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

  function updateSupportBuffs(buffName, status) {
    const updatedSupportBuffs = { ...supportBuffs };
    updatedSupportBuffs[buffName] = status;

    setSupportBuffs(updatedSupportBuffs);
  }

  return (
    <Box
      style={{
        display: 'flex'
      }}
    >
      <Box>
        <CharacterBuild
          characterBuild={characterBuild}
          update={updateCharacterField}
        />
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <EnemyStatus enemyStats={enemyStats} update={updateEnemyField} />
        <SupportBuffs supportBuffs={supportBuffs} update={updateSupportBuffs} />
      </Box>
      <DamageConsole
        characterBuild={characterBuild}
        enemyStats={enemyStats}
        supportBuffs={supportBuffs}
      />
    </Box>
  );
}
