export const STAT_FIELDS = [
  {
    label: 'Name',
    field: 'enemy_name',
    defaultValue: 'Hilichurl',
    type: 'text'
  },
  {
    label: 'Enemy Level',
    field: 'enemy_level',
    defaultValue: 90,
    type: 'number'
  },
  {
    label: 'Enemy Resistance %',
    field: 'resPercent',
    defaultValue: 10,
    type: 'number'
  },
  {
    label: 'Affected Element',
    field: 'affected_element',
    defaultValue: 'None',
    type: 'option',
    disabled: true
  }
];
