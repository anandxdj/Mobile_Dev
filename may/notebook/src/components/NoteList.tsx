import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  TextInput,
  Switch,
  useWindowDimensions,
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
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState('');

  // Responsive columns: 2 for phones, 3 for tablets/desktop
  const numColumns = width > 768 ? 3 : 2;

  const textColor = isDarkMode ? '#ffffff' : '#1a1a1a';
  const btnBg = isDarkMode ? '#333333' : '#e5e5ea';
  const btnText = isDarkMode ? '#ffffff' : '#1a1a1a';

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderHeader = () => (
    <View style={styles.headerSection}>
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
      
      <TextInput
        style={[
          styles.searchInput,
          { 
            backgroundColor: isDarkMode ? '#2c2c2e' : '#e5e5ea',
            color: textColor 
          }
        ]}
        placeholder="Search notes..."
        placeholderTextColor={isDarkMode ? '#8e8e93' : '#8e8e93'}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );

  const renderCard = ({ item: note }: { item: Note }) => {
    // Fulfill assignment requirement: Use StyleSheet.compose
    const dynamicCardStyle = {
      backgroundColor: isDarkMode ? '#2c2c2e' : note.color,
      marginRight: 12,
      marginBottom: 12,
      flex: 1, // ensure it fills the column evenly
      maxWidth: `${100 / numColumns}%`, // prevent flex growing infinitely when final row is incomplete
    };
    
    const composedCardStyle = StyleSheet.compose(styles.cardBase, dynamicCardStyle);
    
    const cardTextColor = isDarkMode ? '#ffffff' : '#1a1a1a';
    const subTextColor = isDarkMode ? '#cccccc' : '#1a1a1a';

    return (
      <Pressable
        style={composedCardStyle}
        onPress={() => onOpenNote(note)}
      >
        <Text style={[styles.cardTitle, { color: cardTextColor }]} numberOfLines={2}>
          {note.title}
        </Text>
        <Text style={[styles.cardPreview, { color: subTextColor }]} numberOfLines={2}>
          {note.content}
        </Text>
        <View style={styles.cardBottom}>
          <Text style={[styles.dateText, { color: subTextColor }]}>{note.date}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredNotes}
        key={numColumns} // Force re-render if columns change
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        numColumns={numColumns}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },
  headerSection: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
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
  searchInput: {
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  cardBase: {
    borderRadius: 24,
    padding: 20,
    minHeight: 160,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 26,
    marginBottom: 8,
  },
  cardPreview: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 16,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.7,
  },
});

export default NoteList;
