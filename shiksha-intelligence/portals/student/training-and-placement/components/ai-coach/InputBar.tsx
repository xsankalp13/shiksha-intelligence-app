import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Paperclip, Mic, Send } from 'lucide-react-native';

interface InputBarProps {
  onSend: (text: string) => void;
  onAttachPress?: () => void;
}

export default function InputBar({ onSend, onAttachPress }: InputBarProps) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim().length > 0) {
      onSend(text);
      setText('');
    }
  };

  const hasText = text.trim().length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TouchableOpacity style={styles.iconButton} onPress={onAttachPress}>
          <Paperclip size={20} color="#8a8a9a" />
        </TouchableOpacity>

        <TextInput
          style={styles.textInput}
          placeholder="Ask your coach anything…"
          placeholderTextColor="#8a8a9a"
          value={text}
          onChangeText={setText}
          multiline
          maxLength={500}
        />

        <View style={styles.rightIcons}>
          {!hasText && (
            <TouchableOpacity style={styles.iconButton}>
              <Mic size={20} color="#8a8a9a" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[styles.sendButton, hasText ? styles.sendButtonActive : styles.sendButtonDisabled]}
            onPress={handleSend}
            disabled={!hasText}
          >
            <Send size={16} color={hasText ? "#ffffff" : "#8a8a9a"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: 'transparent',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#1c1c1f',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  iconButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 13,
    minHeight: 36,
    maxHeight: 100, // Roughly 4 lines
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 8,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  sendButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  sendButtonActive: {
    backgroundColor: '#7c6ef7',
  },
  sendButtonDisabled: {
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
});
