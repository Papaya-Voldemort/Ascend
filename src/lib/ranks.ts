// src/lib/ranks.ts
export const RANK_LEVELS = [
  { level: 1, name: 'Bronze I', icon: new URL('../assets/ranks/bronze1.webp', import.meta.url).href },
  { level: 2, name: 'Bronze II', icon: new URL('../assets/ranks/bronze.2.jpeg', import.meta.url).href },
  { level: 3, name: 'Bronze III', icon: new URL('../assets/ranks/bronze.3.jpeg', import.meta.url).href },
];

export function getRankByLevel(level: number) {
  return RANK_LEVELS.find(r => r.level === level) || RANK_LEVELS[0];
}