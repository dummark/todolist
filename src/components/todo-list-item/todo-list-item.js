import React, { Component } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';

import './todo-list-item.css';

const TodoListItem = ({ label, completed = false }) => {
	return (
		<div className='view'>
			<input className='toggle' type='checkbox' />
			<label>
				<span className='description'>{label}</span>
				<span className='created'>
					{formatDistanceToNowStrict(new Date(), { includeSeconds: true })}
				</span>
			</label>
			<button className='icon icon-edit'></button>
			<button className='icon icon-destroy'></button>
		</div>
	);
};

export default TodoListItem;
