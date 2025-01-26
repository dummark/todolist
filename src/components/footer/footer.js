import React, { Component } from 'react';
import TaskFilter from '../task-filter';
import './footer.css';

export default class Footer extends Component {
	render() {
		const { filter, onFilterChange, onCompleteClear } = this.props;
		const activeCount = this.props.todoData.filter(el => !el.completed).length;
		return (
			<footer className='footer'>
				<span className='todo-count'>{activeCount} items left</span>
				<TaskFilter filter={filter} onFilterChange={onFilterChange} />
				<button className='clear-completed' onClick={onCompleteClear}>
					Clear completed
				</button>
			</footer>
		);
	}
}
