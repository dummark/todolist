import React, { Component } from 'react';

import AppHeader from '../app-header';
import NewTodo from '../new-todo';
import TodoList from '../todo-list';
import Footer from '../footer';
import './todo-app.css';

export default class TodoApp extends Component {
	state = {
		todoData: [
			{ label: 'eat', id: 1 },
			{ label: 'drink', id: 2 },
			{ label: 'study', id: 3 },
		],
	};

	deleteItem = id => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex(el => el.id === id);
			const newTodo = todoData.toSpliced(idx, 1);
			return { todoData: newTodo };
		});
	};

	render() {
		return (
			<section className='todoapp'>
				<AppHeader />
				<NewTodo />
				<section className='main'>
					<TodoList
						todos={this.state.todoData}
						onDeleted={id => this.deleteItem(id)}
					/>
					<Footer />
				</section>
			</section>
		);
	}
}
