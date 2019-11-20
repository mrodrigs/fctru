import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Icon } from 'native-base';

import Colors from '../constants/Colors';

export default function AboutRUScreen() {
  return (
    <Container style={styles.container}>
      <Content padder>

        <Card style={styles.card} noShadow>
          <CardItem header style={styles.cardItem}>
            <Icon ios="ios-help" android="md-help" style={{ fontSize: 26, color: Colors.tintColor }} />
            <Text style={styles.title}>O que é</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{ textAlign: 'justify' }}>O Restaurante Universitário da FCT-Unesp foi implantado com o objetivo de fornecer alimentação balanceada a baixo custo à comunidade acadêmica (discentes, servidores docentes e servidores técnico administrativos).</Text>
            </Body>
          </CardItem>
        </Card>

        <Card style={styles.card} noShadow>
          <CardItem header style={styles.cardItem}>
            <Icon ios="ios-restaurant" android="md-restaurant" style={{ fontSize: 26, color: Colors.tintColor }} />
            <Text style={styles.title}>Como funciona</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>O Restaurante Universitário funciona de segunda a sexta-feira, das 7:30 às 16:30hrs. O horário de distribuição das refeições é das 11:30 às 13:20.</Text>
              <Text>Não será permitida a entrada no refeitório após as 13:20. A permanência nas dependências do RU será permitida somente até as 14hrs.</Text>
            </Body>
          </CardItem>
          <CardItem header style={styles.cardItem}>
            <Text>
              Venda de Tickets
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>A venda dos tickets de refeição é feita, exclusivamente, em dinheiro, no guichê da Seção de Finanças, no horário das 8:00 às 11:00 e das 14:00 às 16:00 horas, de segunda a sexta-feira.</Text>
              <Text>A venda de tickets ocorre sempre de forma antecipada, sendo divulgado previamente o cardápio das refeições a serem vendidas.</Text>
              <Text>Os usuários poderão adquirir na semana anterior os tickets de refeição de qualquer dia da semana seguinte.</Text>
            </Body>
          </CardItem>
          <CardItem header style={styles.cardItem}>
            <Text>
              Distribuição de senhas
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Com o intuito de melhorar o esquema de venda de tickets para refeições no RU e diminuir a fila que vinha ocorrendo às segundas-feiras, no período matutino, e que estava atrapalhando as aulas; às segundas-feiras, no saguão da Diretoria, no horário das 7:00 às 7:15hrs, serão distribuidas 222 senhas, para que os detentores possam, em qualquer momento da segunda ou terça feira, adquirir os tickets no horário de funcionamento do Caixa da FCT.</Text>
              <Text>As 128enhas referentes à Permancência Estudantil serão entregues às sextas-feiras, no horário das 7:00 no saguão da Diretoria.</Text>
              <Text>Às quartas-feiras estarão disponíveis para venda os tickets não vendidos nos dois primeiros dias. </Text>
            </Body>
          </CardItem>
        </Card>

        <Card style={styles.card} noShadow>
          <CardItem header style={styles.cardItem}>
            <Icon ios="ios-cash" android="md-cash" style={{ fontSize: 26, color: Colors.tintColor }} />
            <Text style={styles.title}>Valores</Text>
          </CardItem>
          <CardItem style={{ paddingBottom: 17 }}>
            <Body>
              <Text>
                Alunos da Permanência Estudatil: R$2,50(128 refeições/dia).
              </Text>
              <Text>
                Alunos de Graduação: R$ 3,50
              </Text>
              <Text>
                Alunos de Pós-graduação: R$ 5,00
              </Text>
              <Text>
                Servidores Técnico-administrativos: R$ 7,00
              </Text>
              <Text>
                Docentes: R$ 10,00
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

AboutRUScreen.navigationOptions = {
  title: 'Sobre o Restarante Universitário',
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
});
