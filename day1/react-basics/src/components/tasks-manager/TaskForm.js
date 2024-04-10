import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault(); // prevents the default behavior of form submission

    if (!taskText.trim()) return; // empty-string, 0, null, undefined --> qualify as boolean false

    addTask(taskText);
    setTaskText('');
  };

  return (
    <>
      <h5>Add a new task</h5>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='enter new task text here...'
          className='form-control'
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        {/* onChange={({ target: { value } }) => setTaskText(value)} */}
      </form>
      <p className='lead'>{taskText}</p>
    </>
  );
};

export default TaskForm;
