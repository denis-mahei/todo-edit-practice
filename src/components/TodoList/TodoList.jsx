import Grid from '../Grid/Grid.jsx';
import Todo from '../Todo/Todo.jsx';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos.items);

  return (
    <Grid>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </Grid>
  );
};

export default TodoList;
