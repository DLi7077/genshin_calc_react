export const STAT_FIELDS = [
  {
    label: "Name",
    field: "character_name",
    defaultValue: "Chongyun",
    disabled: true,
  },
  {
    label: "Character Level",
    field: "character_level",
    defaultValue: 90,
  },
  {
    label: "Base HP",
    field: "hp_base",
    defaultValue: 10984,
  },
  {
    label: "MAX HP",
    field: "hp_total",
    defaultValue: 10984,
  },
  {
    label: "Base Attack",
    field: "attack_base",
    defaultValue: 223,
  },
  {
    label: "Total Attack",
    field: "attack_total",
    defaultValue: 223,
  },
  {
    label: "Base DEF",
    field: "def_base",
    defaultValue: 648,
  },
  {
    label: "Total DEF",
    field: "def_total",
    defaultValue: 648,
  },
  {
    label: "Elemental Mastery",
    field: "elemental_mastery",
    defaultValue: 0,
  },
  {
    label: "Crit Rate",
    field: "crit_rate",
    defaultValue: 5,
  },
  {
    label: "Crit Damage",
    field: "crit_damage",
    defaultValue: 15,
  },
  {
    label: "Healing Bonus",
    field: "healing_bonus",
    defaultValue: 0,
  },
  {
    label: "Energy Recharge",
    field: "energy_recharge",
    defaultValue: 100,
  },
  {
    element: "Anemo",
    field: "DMG_Bonus_Anemo",
    label: "Anemo DMG Bonus",
    defaultValue: 0,
  },
  {
    element: "Cryo",
    field: "DMG_Bonus_Cryo",
    label: "Cryo DMG Bonus",
    defaultValue: 0,
  },
  {
    element: "Dendro",
    field: "DMG_Bonus_Dendro",
    label: "Dendro DMG Bonus",
    defaultValue: 0,
  },
  {
    element: "Electro",
    field: "DMG_Bonus_Electro",
    label: "Electro DMG Bonus",
    defaultValue: 0,
  },
  {
    element: "Geo",
    field: "DMG_Bonus_Geo",
    label: "Geo DMG Bonus",
    defaultValue: 0,
  },
  {
    element: "Hydro",
    field: "DMG_Bonus_Hydro",
    label: "Hydro DMG Bonus",
    defaultValue: 0,
  },
  {
    element: "Pyro",
    field: "DMG_Bonus_Pyro",
    label: "Pyro DMG Bonus",
    defaultValue: 0,
  },
  {
    element: "Physical",
    field: "DMG_Bonus_Physical",
    label: "Physical DMG Bonus",
    defaultValue: 0,
  },
  {
    element: "Other",
    field: "DMG_Bonus_All",
    label: "Other DMG Bonus",
    defaultValue: 0,
  },
  {
    label: "Attack Talent",
    field: "talent_level_attack",
    defaultValue: 1,
  },
  {
    label: "Skill Talent",
    field: "elemental_skill_talent",
    defaultValue: 1,
  },
  {
    label: "Burst Talent",
    field: "elemental_burst_talent",
    defaultValue: 1,
  },
];

export const DAMAGE_ELEMENTS = {
  Anemo: "DMG_Bonus_Anemo",
  Cryo: "DMG_Bonus_Cryo",
  Dendro: "DMG_Bonus_Dendro",
  Electro: "DMG_Bonus_Electro",
  Geo: "DMG_Bonus_Geo",
  Hydro: "DMG_Bonus_Hydro",
  Pyro: "DMG_Bonus_Pyro",
  Physical: "DMG_Bonus_Physical",
  All: "DMG_Bonus_All",
};
