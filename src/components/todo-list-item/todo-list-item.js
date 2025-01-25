import React, { Component } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';

import './todo-list-item.css';

export default class TodoListItem extends Component {
	state = {
		completed: false,
		editing: false,
		editValue: this.props.label,
	};

	onCheckBoxClick = () => {
		this.setState(state => {
			return { completed: !state.completed };
		});
	};

	onEditClick = () => {
		this.setState({
			editing: true,
		});
	};

	saveAfterEdit = e => {
		if (e.key === 'Enter') {
			this.setState({ editValue: e.target.value });
		}
	};

	editChange = e => {
		this.setState({ editValue: e.target.value });
	};

	render() {
		const { label, id, editValue, onDeleted } = this.props;
		const { completed, editing } = this.state;

		let classNames = [''];
		if (completed) classNames.push('completed');
		if (editing) classNames.push('editing');

		return (
			<li key={id} className={classNames.join(' ')}>
				<div className='view'>
					<input
						className='toggle'
						type='checkbox'
						onClick={this.onCheckBoxClick}
						checked={completed}
					/>
					<label>
						<span className='description'>{label}</span>
						<span className='created'>
							{formatDistanceToNowStrict(new Date(), { includeSeconds: true })}
						</span>
					</label>
					<button
						className='icon icon-edit'
						onClick={this.onEditClick}
					></button>
					<button className='icon icon-destroy' onClick={onDeleted}></button>
				</div>
				{editing ? (
					<input
						type='text'
						className='edit'
						value={editValue}
						onKeyDown={this.saveAfterEdit}
						onChange={this.editChange}
					/>
				) : null}
			</li>
		);
	}
}
