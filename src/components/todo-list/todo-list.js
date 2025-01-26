import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleCompleted, onEdit }) => {
	const elements = todos.map(item => {
		const { id, ...itemProps } = item;

		return (
			<TodoListItem
				key={id}
				{...itemProps}
				onDeleted={() => onDeleted(id)}
				onToggleCompleted={() => onToggleCompleted(id)}
				onEdit={onEdit}
			/>
		);
	});

	return <ul className='todo-list'>{elements}</ul>;
};

export default TodoList;
