export type ThemeType = "light" | "dark";

export type ThemeColor =
  | "orange"
  | "blue"
  | "green"
  | "yellow"
  | "grey"
  | "purple"
  | "red"
  | "lightblue";

export interface ThemeColors {
  orange: string;
  blue: string;
  green: string;
  yellow: string;
  grey: string;
  purple: string;
  red: string;
  lightblue: string;
}

export interface DockItem {
  icon: string;
  tooltip: string;
  action: () => void;
}
