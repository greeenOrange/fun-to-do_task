import { HiMiniEllipsisVertical, HiOutlineTrash } from "react-icons/hi2";
import TaskModal from '../TaskModal/TaskModal';
import toast from 'react-hot-toast';

import { useDrag, useDrop } from 'react-dnd';
const TaskDND = ({ task, tasks, setTasks, index }) => {
  console.log(task);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { id: task?._id },
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
    })
}))

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    })
      .then((res) => res.json())
      .then(data => {
        if(data){
          alert('successfully added');
        }
      }).catch((err) => {
        console.error("Error while deleting:", err);
      });
    }

  return (
        <div ref={drag} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <h2 className="card-title">{task?.title || "No Title"}</h2>
              <div className="flex gap-4">
                <HiMiniEllipsisVertical onClick={() => document.getElementById(task?._id).showModal()} />
                <HiOutlineTrash onClick={() => handleDelete(task?._id)} />
              </div>
              <TaskModal task={task} tasks={tasks} setTasks={setTasks} />
            </div>

            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

)}

export default TaskDND