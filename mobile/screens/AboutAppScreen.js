import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Text, Icon } from 'native-base';

import Colors from '../constants/Colors';

export default function AboutAppScreen() {

  return (
    <Container style={styles.container}>
      <Content padder>
        <Card noShadow style={styles.card}>
          <CardItem header style={styles.cardItem}>
            <Icon ios="ios-code" android="md-code" style={{ fontSize: 26, color: Colors.tintColor }} />
            <Text style={styles.title}>Desenvolvedores</Text>
          </CardItem>
          <CardItem>
            <Text>
              Maurício Rodrigues
            </Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

AboutAppScreen.navigationOptions = {
  title: 'Sobre o Aplicativo FCT-RU',
  headerStyle: {
    backgroundColor: Colors.tintColor,
  },
  headerTintColor: '#fff'
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8'
  },
  title: {
    fontSize: 18,
  },
  card: {
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  cardItem: {
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 10,
    paddingBottom: 0,
  },
})