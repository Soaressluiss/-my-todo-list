import { Itask } from "../../interfaces/Task";

interface TaskListTypes {
    tasklist: Itask[];
}
const TaskList = ({ tasklist }: TaskListTypes): JSX.Element => {
    if (tasklist.length > 0) {
        return (
            <>
                {tasklist.map((task) => (
                    <div key={task.id}>
                        <div>
                            <h4>{task.title}</h4>
                            <p>{task.difficulty}</p>
                        </div>
                        <div></div>
                    </div>
                ))}
            </>
        );
    } else {
        return <p>Não tem tarefas cadastradas!</p>;
    }
};

export default TaskList;
