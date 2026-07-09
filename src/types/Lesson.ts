export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  minutes: number;
  xp: number;
  completed: boolean;
  content: string[];
}
