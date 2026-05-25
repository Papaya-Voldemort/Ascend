import { writable, derived } from 'svelte/store';

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinDate: Date;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface DailyStats {
  date: Date;
  focusMinutes: number;
  tasksCompleted: number;
  streak: number;
}

export interface Analytics {
  totalFocusTime: number;
  currentStreak: number;
  longestStreak: number;
  missionsCompleted: number;
  averageFocusSession: number;
}

// User Store
export const user = writable<User | null>(null);

// Missions Store
export const missions = writable<Mission[]>([]);

// Daily Stats Store
export const dailyStats = writable<DailyStats[]>([]);

// Analytics Store
export const analytics = writable<Analytics>({
  totalFocusTime: 0,
  currentStreak: 0,
  longestStreak: 0,
  missionsCompleted: 0,
  averageFocusSession: 0,
});

// UI State
export const theme = writable<'light' | 'dark'>('light');

// Derived Stores (automatically update when dependencies change)
export const activeMissions = derived(missions, ($missions) =>
  $missions.filter((m) => !m.completed)
);

export const completedMissions = derived(missions, ($missions) =>
  $missions.filter((m) => m.completed)
);

export const todayStats = derived(dailyStats, ($stats) => {
  const today = new Date().toDateString();
  return $stats.find((s) => new Date(s.date).toDateString() === today);
});