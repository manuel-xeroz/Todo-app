import { useRef } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = (props) => {
  let taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    let enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }

    taskInputRef.current.value = '';

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' ref={taskInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;