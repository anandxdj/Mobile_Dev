import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import { Note } from '../types';

interface NoteListProps {
  notes: Note[];
  onOpenNote: (note: Note) => void;
  onAddNote: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const NoteList: React.FC<NoteListProps> = ({
  notes,
  onOpenNote,
  onAddNote,
  isDarkMode,
  onToggleTheme,
}) => {

  const textColor = isDarkMode ? '#ffffff' : '#1a1a1a';
  const btnBg = isDarkMode ? '#333333' : '#e5e5ea';
  const btnText = isDarkMode ? '#ffffff' : '#1a1a1a';

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
      
        <Text style={[styles.headerTitle, { color: textColor }]}>Notes</Text>
      </View>
      <View style={styles.headerRight}>
        <Pressable style={[styles.iconButton, { backgroundColor: btnBg }]} onPress={onToggleTheme}>
          <Text style={[styles.iconTextEmoji, { color: btnText }]}>{isDarkMode ? '☀️' : '🌙'}</Text>
        </Pressable>
        <Pressable style={[styles.iconButton, { backgroundColor: btnBg }]} onPress={onAddNote}>
          <Text style={[styles.iconText, { color: btnText }]}>+</Text>
        </Pressable>
      </View>
    </View>
  );

  const renderCard = (note: Note) => {
    // Determine card height based on size
    let minHeight = 160;
    if (note.size === 'tall') minHeight = 220;
    if (note.size === 'full') minHeight = 140;

    const cardBgColor = isDarkMode ? '#2c2c2e' : note.color;
    const cardTextColor = isDarkMode ? '#ffffff' : '#1a1a1a';
    const dateColor = isDarkMode ? '#cccccc' : '#1a1a1a';

    return (
      <Pressable
        key={note.id}
        style={[styles.card, { backgroundColor: cardBgColor, minHeight }]}
        onPress={() => onOpenNote(note)}
      >
        <Text style={[styles.cardTitle, { color: cardTextColor }]}>{note.title}</Text>
        <View style={styles.cardBottom}>
          <Text style={[styles.dateText, { color: dateColor }]}>{note.date}</Text>
        </View>
      </Pressable>
    );
  };

  const renderMasonry = () => {
    const sections: React.ReactNode[] = [];
    let leftCol: Note[] = [];
    let rightCol: Note[] = [];

    const flushCols = (keySuffix: string) => {
      if (leftCol.length > 0 || rightCol.length > 0) {
        sections.push(
          <View key={`cols-${keySuffix}`} style={styles.columnsContainer}>
            <View style={styles.column}>
              {leftCol.map(renderCard)}
            </View>
            <View style={styles.column}>
              {rightCol.map(renderCard)}
            </View>
          </View>
        );
        leftCol = [];
        rightCol = [];
      }
    };

    notes.forEach((note, index) => {
      if (note.size === 'full') {
        flushCols(`pre-full-${index}`);
        sections.push(
          <View key={`full-${note.id}`} style={styles.fullWidthContainer}>
            {renderCard(note)}
          </View>
        );
      } else {
        // Alternate columns
        if (leftCol.length <= rightCol.length) {
          leftCol.push(note);
        } else {
          rightCol.push(note);
        }
      }
    });
    flushCols('end');

    return sections;
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      {renderHeader()}
      {renderMasonry()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 8,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chevron: {
    fontSize: 28,
    fontWeight: '300',
    marginTop: -4,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
    fontWeight: '300',
    marginTop: -2,
  },
  iconTextEmoji: {
    fontSize: 18,
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12,
  },
  column: {
    flex: 1,
    gap: 12,
  },
  fullWidthContainer: {
    marginBottom: 12,
  },
  card: {
    borderRadius: 24,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1a1a1a',
    lineHeight: 26,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  dateText: {
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: '500',
    opacity: 0.8,
  },
});

export default NoteList;
