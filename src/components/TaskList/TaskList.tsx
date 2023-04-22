import { Itask } from "../../interfaces/Task";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import "./TaskListStyle.scss";
interface TaskListTypes {
    tasklist: Itask[];
    taskDelete(id: number): void;
}
const TaskList = ({ tasklist, taskDelete }: TaskListTypes): JSX.Element => {
    if (tasklist.length > 0) {
        return (
            <>
                {tasklist.map((task) => (
                    <section key={task.id}>
                        <div className="infoTasks">
                            <h4 className="titleTasks">{task.title}</h4>
                            <p className="difficultyTasks">{task.difficulty}</p>
                        </div>
                        <div className="taskIcons">
                            <FaPencilAlt />
                            <FaTrashAlt onClick={()=> taskDelete(task.id)} />
                        </div>
                    </section>
                ))}
            </>
        );
    } else {
        return <p className="withoutTasks">Não tem tarefas cadastradas!</p>;
    }
};

export default TaskList;
