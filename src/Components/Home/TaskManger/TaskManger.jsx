import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TaskList from "../../TaskList/TaskList";
import toast, { Toaster } from 'react-hot-toast';

const TaskManger = ({ tasks, setTasks }) => {

    const [task, setTask] = useState(
        {
            id: "",
            title: "",
            status: "todo"
        }
    );

    const handleChange = (e) => {
        setTask({ ...task, id: uuidv4(), title: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            ...task,
            id: uuidv4(),
        };
        console.log(taskData);

        setTasks((prev) => {
            const updatedTasks = [...prev, taskData];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
        toast.success('Successfully assigned task.');

        setTask({
            id: '',
            title: '',
            status: 'todo',
        });
    }
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="flex flex-col p-4">

                <div className="flex justify-center space-x-4 my-5">
                    <form
                        onSubmit={handleSubmit}
                    >
                        <input
                            name="task"
                            type="text"
                            className="w-[20rem] border border-gray-300 p-3 rounded-lg"
                            placeholder="Type Task..."
                            value={task?.title}
                            onChange={handleChange}
                        />
                        <button className="btn btn-primary">ADD</button>
                    </form>
                </div>

                <TaskList tasks={tasks} setTasks={setTasks} />
            </div>
        </>
    )
}

export default TaskManger