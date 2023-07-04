import { View, StyleSheet, TextInput, Button, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

export interface Todo {
	done: boolean;
	id: string;
	title: string;
}

const List = () => {
	const [todos, setTodos] = useState<any[]>([]);
	const [todo, setTodo] = useState('');

	const addTodo = async () => {
		// TODO
		alert(todo);
	};

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Add new todo"
					onChangeText={(text: string) => setTodo(text)}
					value={todo}
				/>
				<Button onPress={addTodo} title="Add Todo" disabled={todo === ''} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20
	},
	form: {
		marginVertical: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	input: {
		flex: 1,
		height: 40,
		borderWidth: 1,
		borderRadius: 4,
		padding: 10,
		backgroundColor: '#fff'
	}
});

export default List;