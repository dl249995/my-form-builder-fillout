// types/index.ts

export interface Tab {
  id: string;
  name: string;
  icon: string;
  content: string;
  state: 'focused' | 'default' | 'hover';
}

export interface Position {
  x: number;
  y: number;
}