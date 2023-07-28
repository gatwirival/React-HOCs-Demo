import React from 'react';

const TodoItem = ({ todo, onComplete }) => {
  return (
    <li>
      {todo}
      <button onClick={onComplete}>Complete</button>
    </li>
  );
};

export default TodoItem;
