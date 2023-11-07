import { useState } from "react";
import TaskList from "../TaskList/TaskList";
import toast, { Toaster } from 'react-hot-toast';

const TaskManger = () => {
    const [tasks, setTasks] = useState(
        {
            id: "",
            title: "",
            status: "todo"
        }
    );
    const handleChange = (e) => {
        ({ title: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            ...tasks,
            title: e.target.value,
        };
        console.log(taskData);
        fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(taskData),
        })
            .then((res) => res.json())
            .then(data => {
                if (data) {
                    toast.success('title added');
                }
            })
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
                            value={tasks?.title}
                            onChange={handleChange}
                        />
                        <button className="btn btn-primary">ADD</button>
                    </form>
                </div>

                <TaskList tasks={tasks} setTasks={setTasks} handleSubmit={handleSubmit} />
            </div>
        </>
    )
}

export default TaskManger