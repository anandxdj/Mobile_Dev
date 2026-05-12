export type NoteSize = 'small' | 'tall' | 'full';

export interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  color: string;
  size: NoteSize;
}
