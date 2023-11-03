import { FaBeer } from 'react-icons/fa';
import { HiMiniEllipsisVertical, HiOutlineTrash } from "react-icons/hi2";
import TaskModal from '../TaskModal/TaskModal';
import toast from 'react-hot-toast';

const TaskDND = ({ task, tasks, setTasks }) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
      const shortTodo = tasks.filter(task => task?.id !== id);
      localStorage.setItem('tasks', JSON.stringify(shortTodo));
      setTasks(shortTodo);
      toast.success('Successfully Delete!')
  }

  //  const [{ isDragging }, drag] = useDrag(() => ({
  //      type: 'task',
  //      item: { id: task?.id },
  //      collect: (monitor) => ({
  //          isDragging: !!monitor.isDragging()
  //      })
  //  }))

  return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center justify-between">
          <h2 className="card-title">{task?.title || "No Title"}</h2>
          <div className="flex gap-4">
          <HiMiniEllipsisVertical onClick={()=>document.getElementById(task?.id).showModal()}/>
          <HiOutlineTrash onClick={() => handleDelete(task?.id)}/>
          </div>
          <TaskModal task={task} tasks={tasks} setTasks={setTasks} />
          </div>

          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
  )
}

export default TaskDND