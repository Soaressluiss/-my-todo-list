import { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/header/Header";
import { Itask } from "./interfaces/Task";
import Modal from "./components/modal/Modal";
import "./App.scss";

function App() {
    const [taskList, setTaskList] = useState<Itask[]>([]);
    const [taskToUpdate, setTaskToUpdate] = useState<Itask | null>(null);

    const TaskDelete = (id: number): void => {
        setTaskList(
            taskList.filter((task) => {
                return task.id !== id;
            })
        );
    };

    const hideOrShowModal = (display: boolean): void => {
        const modal = document.querySelector("#modal");
        if (display) {
            modal?.classList.remove("hide");
        } else {
            modal?.classList.add("hide");
        }
    };
    const editTask = (task: Itask): void => {
        hideOrShowModal(true);
        setTaskToUpdate(task);
    };

    const updateTask = (
        id: number,
        title: string,
        difficulty: string
    ): void => {
        const updatedTask: Itask = { id, title, difficulty };
        const Updateditens = taskList.map((task) => {
            return task.id == updatedTask.id ? updatedTask : task;
        });
        if (title.length <= 3) {
            alert(`Você NÃO pode salvar uma tarefa tão pequena`);
        } else {
            setTaskList(Updateditens);
            hideOrShowModal(false);
        }
    };

    return (
        <>
            <Modal
                children={
                    <TaskForm
                        btnText="Salvar ✔"
                        taskList={taskList}
                        taskToUpdate={taskToUpdate}
                        handleUpdate={updateTask}
                    />
                }
            />
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
                    <TaskList
                        tasklist={taskList}
                        taskDelete={TaskDelete}
                        editTask={editTask}
                    />
                </div>
            </main>
        </>
    );
}

export default App;
