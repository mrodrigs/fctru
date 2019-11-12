import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Content } from 'native-base';

import MenuCard from '../components/MenuCard';

import Colors from '../constants/Colors';

const header = {
  day: '16/10',
  dayName: 'Quarta-feira',
}

export default function HomeScreen() {
  return (
    <Container style={styles.container}>

      <MenuCard />

    </Container>
  );
}

HomeScreen.navigationOptions = {
  title: `${header.day} - ${header.dayName}`,
  headerStyle: {
    backgroundColor: Colors.tintColor,
  },
  headerTintColor: '#fff'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  content: {
    marginHorizontal: 20,
    marginTop: 10,
  }
});
