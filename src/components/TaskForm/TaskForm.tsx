import { SetStateAction, useEffect, useState } from "react";
import Input from "../input/Input";
import Select from "../select/Select";
import { Itask } from "../../interfaces/Task";

import "./TaskFormStyle.scss";
import "../input/InputStyle.scss";

interface ITaskFormTypes {
    btnText: string;
    taskList: Itask[];
    setTaskList?: React.Dispatch<SetStateAction<Itask[]>>;
    taskToUpdate?: Itask | null;
    handleUpdate?(id: number, title: string, difficulty: string): void;
}
const TaskForm = ({
    btnText,
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
                options={["Fácil", "Medio", "Difícil"]}
                handleDifficulty={handleDifficulty}
                value={difficulty}
            />

            <input type="submit" value={btnText} />
        </form>
    );
};
export default TaskForm;
