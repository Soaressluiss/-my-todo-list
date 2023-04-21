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
                    <h2>O que você esta fazendo?</h2>
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
