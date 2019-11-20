import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { getDay, format } from 'date-fns'

import MenuCard from '../components/MenuCard';

import Colors from '../constants/Colors';

export default function HomeScreen() {
  return (
    <Container style={styles.container}>
      <Content padder>
        <MenuCard />
      </Content>
    </Container>
  );
}

const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const dayNumber = getDay(new Date());
const date = format(new Date(), 'dd/MM');

HomeScreen.navigationOptions = {
  title: `Hoje é ${days[dayNumber]}, ${date}`,
  headerStyle: {
    backgroundColor: Colors.tintColor,
  },
  headerTintColor: '#fff'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
