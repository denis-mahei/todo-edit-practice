import Grid from '../Grid/Grid.jsx';
import Todo from '../Todo/Todo.jsx';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todoSlice.js';

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <Grid>
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          index={index}
        />
      ))}
    </Grid>
  );
};

export default TodoList;
