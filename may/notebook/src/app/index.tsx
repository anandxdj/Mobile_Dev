import React, { useState } from 'react';
import { StyleSheet, View, useColorScheme, Platform, UIManager, LayoutAnimation } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import NoteList from '../components/NoteList';
import NoteEditor from '../components/NoteEditor';
import { Note } from '../types';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type ViewState = 'list' | 'editor';

const initialNotes: Note[] = [];

const Index = () => {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(systemColorScheme === 'dark' || true); // Default to dark visually for now
  
  const [view, setView] = useState<ViewState>('list');
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const toggleTheme = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsDarkMode(prev => !prev);
  };

  const handleOpenNote = (note: Note) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedNote(note);
    setView('editor');
  };

  const handleAddNote = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedNote(null);
    setView('editor');
  };

  const handleSaveNote = (note: Note) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (selectedNote) {
      setNotes((prevNotes) =>
        prevNotes.map((n) => (n.id === note.id ? note : n))
      );
    } else {
      setNotes((prevNotes) => [note, ...prevNotes]); // Add new notes to top
    }
    setView('list');
    setSelectedNote(null);
  };

  const handleCancelEditor = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setView('list');
    setSelectedNote(null);
  };

  const handleDeleteNote = (noteId: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setNotes((prevNotes) => prevNotes.filter(n => n.id !== noteId));
    setView('list');
    setSelectedNote(null);
  };

  const backgroundColor = isDarkMode ? '#1a1a1a' : '#f2f2f7';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, { backgroundColor }]}>
        <View style={styles.content}>
          {view === 'list' ? (
            <NoteList
              notes={notes}
              onOpenNote={handleOpenNote}
              onAddNote={handleAddNote}
              isDarkMode={isDarkMode}
              onToggleTheme={toggleTheme}
            />
          ) : (
            <NoteEditor
              note={selectedNote}
              onSave={handleSaveNote}
              onCancel={handleCancelEditor}
              onDelete={selectedNote ? () => handleDeleteNote(selectedNote.id) : undefined}
              isDarkMode={isDarkMode}
            />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  }
});

export default Index;