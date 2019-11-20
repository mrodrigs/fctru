import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Text } from 'native-base';

import Colors from '../constants/Colors';

const cards = [
	{
		day: 'Segunda-feira',
		base: 'Arroz e Feijão',
		main: 'Frango Xadrez',
		garrison: 'Espaguete ao Alho',
		salad: 'Repolho',
		dessert: 'Goiaba',
		vegetarian: 'Lentilha com legumes',
	},
	{
		day: 'Terça-Feira',
		base: 'Arroz e Feijão',
		main: 'Frango Xadrez',
		garrison: 'Espaguete ao Alho',
		salad: 'Repolho',
		dessert: 'Goiaba',
		vegetarian: 'Lentilha com legumes',
	},
	{
		day: 'Quarta-Feira',
		base: 'Arroz e Feijão',
		main: 'Frango Xadrez',
		garrison: 'Espaguete ao Alho',
		salad: 'Repolho',
		dessert: 'Goiaba',
		vegetarian: 'Lentilha com legumes',
	},
	{
		day: 'Quinta-Feira',
		base: 'Arroz e Feijão',
		main: 'Frango Xadrez',
		garrison: 'Espaguete ao Alho',
		salad: 'Repolho',
		dessert: 'Goiaba',
		vegetarian: 'Lentilha com legumes',
	},
	{
		day: 'Sexta-Feira',
		base: 'Arroz e Feijão',
		main: 'Frango Xadrez',
		garrison: 'Espaguete ao Alho',
		salad: 'Repolho',
		dessert: 'Goiaba',
		vegetarian: 'Lentilha com legumes',
	},
];

export default function MenuCard() {
	return (
		<View style={{ height: 400 }}>
			<DeckSwiper
				dataSource={cards}
				renderItem={meal =>
					<Card style={{ elevation: 3 }}>

						<CardItem header style={styles.day}>
							<Text style={styles.dayText}>{meal.day}</Text>
						</CardItem>

						<CardItem>
							<Text style={styles.mealTitle}>Prato Base: </Text>
							<Text style={styles.mealName}>{meal.base}</Text>
						</CardItem>

						<CardItem>
							<Text style={styles.mealTitle}>Prato Principal: </Text>
							<Text>{meal.main}</Text>
						</CardItem>

						<CardItem>
							<Text style={styles.mealTitle}>Guarnição: </Text>
							<Text>{meal.garrison}</Text>
						</CardItem>

						<CardItem>
							<Text style={styles.mealTitle}>Salada: </Text>
							<Text>{meal.salad}</Text>
						</CardItem>

						<CardItem>
							<Text style={styles.mealTitle}>Sobremesa: </Text>
							<Text>{meal.dessert}</Text>
						</CardItem>

						<CardItem>
							<Text style={styles.mealTitle}>Prato Vegetariano: </Text>
							<Text>{meal.vegetarian}</Text>
						</CardItem>

					</Card>
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	day: {
		justifyContent: 'center',
		backgroundColor: Colors.tintColor,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	dayText: {
		fontSize: 20,
		color: '#fff',
	},
	mealTitle: {
		fontWeight: 'bold',
	},
});

