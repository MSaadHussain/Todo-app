import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({ item, onDelete }) {
  return (
    <TouchableOpacity onPress={() => onDelete(item.id)}>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{item.text}</Text>
        <Text style={styles.deleteText}>🗑️</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskText: { fontSize: 16 },
  deleteText: { color: 'red', fontSize: 18 },
});
