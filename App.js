import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Button, TextInput , Modal, ImageBackground} from 'react-native';

export default function App() {
  const sampleGoals = [
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ];
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const addGoalHandler = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const addTask = () => {
    if (newGoal === '') {
      alert('Veuillez entrer une tâche');
      return;
    }
    setGoals(currentGoals => [...currentGoals, newGoal]);
    setNewGoal('');
    setModalVisible(false);
  };

  const removeGoalHandler = goalIdx => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal, index) => index !== goalIdx);
    });
  };

  return (
      <View style={styles.container}>
        <Text>Ma Todo List</Text>
        <Button title="Ajouter une tâche" onPress={addGoalHandler} />
        
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <TextInput 
              placeholder="Ajouter une tâche" 
              value={newGoal} 
              onChangeText={setNewGoal}
            />
            <Button title="Ajouter" onPress={addTask} />
            <Button title="Annuler" onPress={closeModal}  />
          </View>
        </Modal>

        <StatusBar style="auto" />
        {goals.map((goal, index) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
            <Button title="X" onPress={removeGoalHandler.bind(this, index)} />
          </View>
        ))}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#rgbr',
    borderWidth: 1,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
});