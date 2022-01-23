import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          delTask={onDelete}
          onToggleReminder={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
