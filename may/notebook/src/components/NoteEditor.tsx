import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import { Note, NoteSize } from '../types';

interface NoteEditorProps {
  note: Note | null;
  onSave: (note: Note) => void;
  onCancel: () => void;
  onDelete?: () => void;
  isDarkMode: boolean;
}

const COLORS = ['#6e56cf', '#d6e37e', '#f4d160', '#ef5350', '#66bb6a', '#42a5f5'];

const NoteEditor: React.FC<NoteEditorProps> = ({
  note,
  onSave,
  onCancel,
  onDelete,
  isDarkMode,
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState(COLORS[0]);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setColor(note.color);
    } else {
      setTitle('');
      setContent('');
      setColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }
  }, [note]);

  const handleSave = () => {
    let size: NoteSize = 'small';
    if (content.length > 100) size = 'tall';
    if (title.length > 25) size = 'full';
    if (note) size = note.size;

    const newNote: Note = {
      id: note ? note.id : Date.now().toString(),
      title,
      content,
      date: note ? note.date : new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
      color,
      size,
    };
    onSave(newNote);
  };

  const bgColor = isDarkMode ? '#1a1a1a' : '#f2f2f7';
  const textColor = isDarkMode ? '#ffffff' : '#1a1a1a';
  const placeholderColor = isDarkMode ? '#666666' : '#999999';

  // Fulfill assignment requirement: Use StyleSheet.flatten
  const flatContainerStyle = StyleSheet.flatten([styles.container, { backgroundColor: bgColor }]);

  return (
    <KeyboardAvoidingView
      style={flatContainerStyle}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' }} 
        style={styles.headerBg}
        imageStyle={{ borderRadius: 16 }}
      >
        <View style={styles.header}>
          <Pressable onPress={onCancel} style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>Cancel</Text>
          </Pressable>
          <View style={styles.headerRight}>
            {onDelete && (
              <Pressable onPress={onDelete} style={styles.headerBtn}>
                <Text style={[styles.headerBtnText, { color: '#ff8a80' }]}>Delete</Text>
              </Pressable>
            )}
            <Pressable onPress={handleSave} style={[styles.saveBtn, { backgroundColor: color }]}>
              <Text style={styles.saveBtnText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.colorPicker}>
        {COLORS.map(c => (
          <Pressable
            key={c}
            style={[styles.colorDot, { backgroundColor: c, borderWidth: color === c ? 2 : 0, borderColor: textColor }]}
            onPress={() => setColor(c)}
          />
        ))}
      </View>

      <TextInput
        style={[styles.titleInput, { color: textColor }]}
        placeholder="Title"
        placeholderTextColor={placeholderColor}
        value={title}
        onChangeText={setTitle}
        multiline
      />

      <TextInput
        style={[styles.contentInput, { color: textColor }]}
        placeholder="Type something..."
        placeholderTextColor={placeholderColor}
        value={content}
        onChangeText={setContent}
        multiline
        textAlignVertical="top"
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  headerBg: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerBtn: {
    paddingVertical: 8,
  },
  headerBtnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff', // Always white since it's on a dark image background
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  saveBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  saveBtnText: {
    color: '#1a1a1a', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  colorPicker: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  colorDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  titleInput: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentInput: {
    flex: 1,
    fontSize: 18,
    lineHeight: 28,
  },
});

export default NoteEditor;
