import { SetStateAction, useEffect, useState } from "react";
import Input from "../input/Input";
import Select from "../select/Select";
import { Itask } from "../../interfaces/Task";

import "./TaskFormStyle.scss";
import "../input/InputStyle.scss";

interface ITaskFormTypes {
    btnText: string;
    titleAux: string;
    taskList: Itask[];
    setTaskList?: React.Dispatch<SetStateAction<Itask[]>>;
    taskToUpdate?: Itask | null;
    handleUpdate?(id: number, title: string, difficulty: string): void;
}
const TaskForm = ({
    btnText,
    titleAux,
    taskList,
    setTaskList,
    taskToUpdate,
    handleUpdate,
}: ITaskFormTypes): JSX.Element => {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");

    useEffect(() => {
        if (taskToUpdate) {
            setId(taskToUpdate.id);
            setTitle(taskToUpdate.title);
            setDifficulty(taskToUpdate.difficulty);
        }
    }, [taskToUpdate]);

    const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (handleUpdate) {
            handleUpdate(id, title, difficulty);
        } else if (title.length <= 3) {
            alert(` Sua possivel tarefa NÃO tem um tamanho adequado`);
        } else {
            const idGeneration = Math.floor(Math.random() * 1000);

            const newTask: Itask = { id, title, difficulty };
            setId(idGeneration);

            setTaskList?.([...taskList, newTask]);
            setTitle("");
            setDifficulty("");
        }
    };

    const handleTitle = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(target.value);
    };
    const handleDifficulty = ({
        target,
    }: React.ChangeEvent<HTMLSelectElement>) => {
        setDifficulty(target.value);
    };
    return (
        <form onSubmit={addTaskHandler}>
            <Input handleTitle={handleTitle} value={title} />

            <Select
                options={["Fácil", "Media", "Difícil"]}
                handleDifficulty={handleDifficulty}
                value={difficulty}
            />

            <input type="submit" value={btnText} title={titleAux} />
        </form>
    );
};
export default TaskForm;
