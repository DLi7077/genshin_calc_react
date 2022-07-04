const SUPPORT_BUFFS = {
  Bennett: {
    elemental_burst: {
      buff_source: 'supportBuilds.Bennett.attack_base',
      buff_amount: 0,
      buff_multiplier: 1.39,
      buff_type: 'flat',
      buff_location: 'updatedCharacter',
      buff_category: 'attack_total'
    }
  },
  Sucrose: {
    a4_talent: {
      buff_source: 'supportBuilds.Sucrose.elemental_mastery',
      buff_amount: 0,
      buff_multiplier: 0.2,
      buff_type: 'flat',
      buff_location: 'updatedCharacter',
      buff_category: 'elemental_mastery'
    }
  },
  Mona: {
    elemental_burst: {
      buff_source: null,
      buff_amount: 60,
      buff_multiplier: 1,
      buff_type: 'flat',
      buff_location: 'updatedCharacter',
      buff_category: 'DMG_Bonus_All'
    }
  },
  'Kaedehara Kazuha': {
    a4_talent: {
      buff_source: 'supportBuilds.Kaedehara Kazuha.elemental_mastery',
      buff_amount: 0,
      buff_multiplier: 0.04,
      buff_type: 'flat',
      buff_location: 'updatedCharacter',
      buff_category: 'DMG_Bonus_Elemental'
    },
    c2: {
      buff_source: null,
      buff_amount: 200,
      buff_multiplier: 1,
      buff_type: 'flat',
      buff_location: 'updatedCharacter',
      buff_category: 'elemental_mastery'
    }
  }
};

export default SUPPORT_BUFFS;
