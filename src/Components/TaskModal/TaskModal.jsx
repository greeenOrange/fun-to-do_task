import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const TaskModal = ({ task, tasks, setTasks }) => {
    const isEditing = task !== null;

    const [editedTaskTitle, setEditedTaskTitle] = useState(task?.title || '');
    const [description, setDescription] = useState(task?.description || '');
    const [priority, setPriority] = useState('medium');
    const initialDays = [];
    const [days, setDays] = useState();

    const footer = days && days.length > 0 ? (
        <p>You selected {days.length} day(s).</p>
    ) : (
        <p>Please pick one or more days.</p>
    );

    const handleSave = (e) => {
        e.preventDefault();

        const updatedTask = {
            title: editedTaskTitle,
            description,
            priority,
            days,
        };

        if (isEditing) {
            // If editing an existing task, update it
            updatedTask._id = task._id; // Include the task ID for update

            fetch(`http://localhost:5000/tasks/${task._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTask),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.message === 'Task updated successfully') {
                        setTasks((prevTasks) => {
                            const updatedTasks = prevTasks.map((t) =>
                                t._id === task._id ? { ...t, ...updatedTask } : t
                            );
                            return updatedTasks;
                        });
                    } else {
                        alert('Error updating task');
                    }
                });
        } else {
            // If not editing, create a new task
            fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTask),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.message === 'Task added successfully') {
                        setTasks((prevTasks) => [...prevTasks, data.task]);
                    } else {
                        alert('Error adding task');
                    }
                });
        }
    };

    return (
        <>
            <dialog id={task?._id} className="modal">
                <div className="modal-box flex flex-col items-center gap-5">
                    <form action="" onSubmit={handleSave}>

                        <input type="title" placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            value={editedTaskTitle}
                            onChange={(e) => setEditedTaskTitle(e.target.value)}
                        />
                        <DayPicker
                            mode="multiple"
                            min={1}
                            selected={days}
                            onSelect={setDays}
                            footer={footer}
                        />
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>select task priority?</option>
                            <option>Now !</option>
                            <option>Hight</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                        <textarea className="textarea textarea-bordered w-full max-w-xs"
                            placeholder="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <button className="btn btn-primary">{isEditing ? 'Update' : 'Submit'}</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>

            </dialog>
        </>
    )
}

export default TaskModal