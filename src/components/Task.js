import { FaTimes } from 'react-icons/fa';

const Task = ({ task, delTask, onToggleReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggleReminder(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{
            color: 'red',
            cursor: 'pointer',
            width: '2rem',
            height: '2rem',
          }}
          onClick={() => delTask(task.id)}
        />
      </h3>
      <h3>{task.day}</h3>
    </div>
  );
};

export default Task;
