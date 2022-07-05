const ArtifactModifiers = {
  viridescent: {
    '2pc': {
      label: '2pc Viridescent',
      field: '2pc',
      bonuses: [
        {
          source_object: 'characterBuild',
          bonus_field: 'DMG_Bonus_Anemo',
          type: 'flat',
          source_field: 'DMG_Bonus_Anemo',
          destination_field: 'DMG_Bonus_Anemo',
          value: 15
        }
      ]
    },
    '4pc': {
      label: '4pc Viridescent',
      field: '4pc',
      bonuses: [
        {
          source_object: 'enemyBuild',
          bonus_field: 'resPercent',
          type: 'flat',
          source_field: 'resPercent',
          destination_field: 'resPercent',
          value: -40
        }
      ]
    }
  },
  noblesse: {
    '2pc': {
      label: '2pc Noblesse',
      field: '2pc',
      bonuses: [
        {
          source_object: 'characterBuild',
          bonus_field: 'DMG_Bonus_elemental_burst',
          type: 'flat',
          source_field: 'DMG_Bonus_elemental_burst',
          destination_field: 'DMG_Bonus_elemental_burst',
          value: 20
        }
      ]
    },
    '4pc': {
      label: '4pc Noblesse',
      field: '4pc',
      bonuses: [
        {
          source_object: 'characterBuild',
          bonus_field: 'attack_base',
          type: 'percent',
          source_field: 'attack_base',
          destination_field: 'attack_total',
          value: 0.2
        }
      ]
    }
  },
  'Blizzard Strayer': {
    '2pc': {
      label: '2pc Blizzard Strayer',
      field: '2pc',
      bonuses: [
        {
          source_object: 'characterBuild',
          bonus_field: 'DMG_Bonus_Cryo',
          type: 'flat',
          source_field: 'DMG_Bonus_Cryo',
          destination_field: 'DMG_Bonus_Cryo',
          value: 15
        }
      ]
    },
    '4pc': {
      label: '4pc Blizzard Strayer',
      field: '4pc',
      bonuses: [
        {
          source_object: 'characterBuild',
          bonus_field: 'crit_rate',
          type: 'flat',
          source_field: 'crit_rate',
          destination_field: 'crit_rate',
          value: 20,

          conditional: true,
          condition_source: 'enemyBuild',
          condition_field: 'affected_element',
          condition_expected: 'Cryo'
        },
        //Assuming frozen is 'Cryo' right now
        {
          source_object: 'characterBuild',
          bonus_field: 'crit_rate',
          type: 'flat',
          source_field: 'crit_rate',
          destination_field: 'crit_rate',
          value: 20,

          conditional: true,
          condition_source: 'enemyBuild',
          condition_field: 'affected_element',
          condition_expected: 'Cryo'
        }
      ]
    }
  }
};

export default ArtifactModifiers;
