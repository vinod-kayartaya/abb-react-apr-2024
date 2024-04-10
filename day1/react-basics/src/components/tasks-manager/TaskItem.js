const TaskItem = ({ task, deleteTask }) => {
  // handles the delete button click
  const deleteButtonHandler = () => {
    deleteTask(task.id);
  };

  return (
    <>
      <div className='list-group-item'>
        <span
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
          }}
        >
          {task.text}
        </span>

        <button
          className='btn btn-link bi bi-trash'
          onClick={deleteButtonHandler}
        ></button>
      </div>
    </>
  );
};

export default TaskItem;
