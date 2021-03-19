export interface Heroes {
  heroes: HeroInterface[];
}
export interface HeroInterface {
  name: string;
  id: string;
  start_date: string;
  starting_power: number;
  current_power: number;
  ability: string;
  suit_colors: SuitColor[];
  coach: string;
}

export type SuitColor = string;
