import { useState } from "react";
import "./App.scss";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/header/Header";

import { Itask } from "./interfaces/Task";
function App() {
    const [taskList, setTaskList] = useState<Itask[]>([]);

    const TaskDelete = (id: number) => {
        setTaskList(
            taskList.filter((task) => {
                return task.id !== id;
            })
        );
    };

    return (
        <>
            <Header />
            <main>
                <div>
                    <TaskForm
                        btnText="Criar 🧾"
                        taskList={taskList}
                        setTaskList={setTaskList}
                    />
                </div>
                <div>
                    <h2>Suas tarefas:</h2>
                    <TaskList tasklist={taskList} taskDelete={TaskDelete} />
                </div>
            </main>
        </>
    );
}

export default App;
