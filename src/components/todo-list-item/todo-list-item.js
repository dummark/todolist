import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';

export default class TodoListItem extends Component {
  state = {
    editing: false,
    editValue: this.props.label,
  };

  static defaultProps = {
    onSaveClick: () => {},
    onInputChange: () => {},
  };

  onEditClick = () => {
    this.setState({
      editing: true,
    });
  };

  onSaveClick = (e) => {
    if (e.key === 'Enter') {
      this.props.onEdit(this.props.id, this.state.editValue);
      this.setState({ editing: false });
    }
  };

  onInputChange = (e) => {
    this.setState({ editValue: e.target.value });
  };

  static propTypes = {
    onSaveClick: PropTypes.func,
    onInputChange: PropTypes.func,
    onEditClick: PropTypes.func.isRequired,
  };

  render() {
    const { id, date, onDeleted, onToggleCompleted, completed } = this.props;
    const { editing, editValue } = this.state;

    const timeOfCreate = formatDistanceToNowStrict(date, {
      includeSeconds: true,
    });

    let classNames = [''];
    if (completed) classNames.push('completed');
    if (editing) classNames.push('editing');

    return (
      <li key={id} className={classNames.join(' ')}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleCompleted} checked={completed} />
          <label>
            <span className="description">{editValue}</span>
            <span className="created">created {timeOfCreate} ago</span>
          </label>
          <button className="icon icon-edit" onClick={this.onEditClick}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {editing ? (
          <input
            type="text"
            className="edit"
            value={editValue}
            onChange={this.onInputChange}
            onKeyDown={this.onSaveClick}
          />
        ) : null}
      </li>
    );
  }
}
