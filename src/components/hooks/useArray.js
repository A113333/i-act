const useArray = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  const push = (element) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  const isEmpty = () => value.length === 0;

  return { value, setValue, push, remove, isEmpty };
};

/*
  const TodoList = () => {
    const tasks = useArray([]);
    const [newTask, setNewTask] = useState("");
  
    // "Add" button clicked
    const handleSubmit = e => {
      e.preventDefault();
      tasks.push(newTask);
      setNewTask("");
    };
  
    const handleInputChange = e => setNewTask(e.target.value);
  
    return (
      <>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newTask} onChange={handleInputChange} />
          <button>Add</button>
        </form>
        {tasks.isEmpty() ? (
          <p>No tasks to display</p>
        ) : (
          <ul>
            {tasks.value.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => tasks.remove(index)}
                  checked={false}
                />
                {task}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }; */
