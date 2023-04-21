import "./App.scss";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Header />
            <main>
                <div>
                    <TaskForm btnText="Criar 🧾" />
                </div>
                <div>
                    <h2>Suas tarefas:</h2>
                    <TaskList />
                </div>
            </main>
        </>
    );
}

export default App;
