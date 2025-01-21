import React, { Component } from 'react';

import AppHeader from '../app-header';
import NewTodo from '../new-todo';
import TodoList from '../todo-list';
import Footer from '../footer';
import './todo-app.css';

const TodoApp = () => {
	const todoData = [
		{ label: 'eat', id: 1, completed: false },
		{ label: 'drink', id: 2, completed: false },
		{ label: 'study', id: 3, completed: false },
	];

	return (
		<section className='todoapp'>
			<AppHeader />
			<NewTodo />
			<section className='main'>
				<TodoList todos={todoData} />
				<Footer />
			</section>
		</section>
	);
};

export default TodoApp;
