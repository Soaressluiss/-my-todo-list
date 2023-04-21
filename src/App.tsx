import { useState } from "react";
import "./App.scss";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/header/Header";

import { Itask } from "./interfaces/Task";
function App() {
    const [taskList, setTaskList] = useState<Itask[]>([]);
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
                    <TaskList tasklist={taskList}/>
                </div>
            </main>
        </>
    );
}

export default App;
