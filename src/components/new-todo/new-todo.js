import React, { Component } from 'react';

import './new-todo.css';

export default class NewTodo extends Component {
	state = {
		label: '',
	};

	static defaultProps = {
		onLabelChange: () => {},
		onKeyDown: () => {},
	};

	onLabelChange = e => {
		this.setState({ label: e.target.value });
	};

	onKeyDown = e => {
		if (e.key === 'Enter') {
			this.props.onItemAdded(this.state.label);
			this.setState({ label: '' });
		}
	};

	render() {
		return (
			<input
				className='new-todo'
				placeholder='What needs to be done?'
				autoFocus=''
				onChange={this.onLabelChange}
				onKeyDown={this.onKeyDown}
				value={this.state.label}
			/>
		);
	}
}
