import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../app-header';
import NewTodo from '../new-todo';
import TodoList from '../todo-list';
import Footer from '../footer';
import './todo-app.css';

export default class TodoApp extends Component {
  state = {
    todoData: [this.createTodoItem('study')],
    filter: 'all',
  };

  static defaultProps = {
    createTodoItem: () => {},
    deleteItem: () => {},
    addItem: () => {},
    onToggleCompleted: () => {},
    onEdit: () => {},
    filter: () => {},
    onFilterChange: () => {},
  };

  static propTypes = {
    createTodoItem: PropTypes.func,
    deleteItem: PropTypes.func,
    addItem: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    onEdit: PropTypes.func,
    filter: PropTypes.func,
    onFilterChange: PropTypes.func,
    onCompleteClear: PropTypes.func.isRequired,
    todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  createTodoItem(label) {
    return {
      label,
      id: crypto.randomUUID(),
      completed: false,
      date: new Date(),
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newTodo = todoData.toSpliced(idx, 1);
      return { todoData: newTodo };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newTodo = [...todoData, newItem];
      return { todoData: newTodo };
    });
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];

      const newItem = { ...oldItem, completed: !oldItem.completed };

      const newTodo = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return { todoData: newTodo };
    });
  };

  onEdit = (id, newLabel) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((item) => (item.id === id ? { ...item, label: newLabel } : item)),
    }));
  };

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.completed);
      case 'completed':
        return items.filter((item) => item.completed);
      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  onCompleteClear = () => {
    this.setState(({ todoData }) => {
      return { todoData: todoData.filter((el) => !el.completed) };
    });
  };

  render() {
    const { todoData, filter } = this.state;

    const visibleItems = this.filter(todoData, filter);

    return (
      <section className="todoapp">
        <AppHeader />
        <NewTodo onItemAdded={this.addItem} />
        <section className="main">
          <TodoList
            todos={visibleItems}
            onDeleted={(id) => this.deleteItem(id)}
            onToggleCompleted={this.onToggleCompleted}
            onEdit={this.onEdit}
          />
          <Footer
            todoData={this.state.todoData}
            filter={filter}
            onFilterChange={this.onFilterChange}
            onCompleteClear={this.onCompleteClear}
          />
        </section>
      </section>
    );
  }
}
