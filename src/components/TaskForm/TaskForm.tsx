import Input from "../input/Input";
import Select from "../select/Select";

import "./TaskFormStyle.scss";
import "../input/InputStyle.scss";
interface ITaskFormTypes {
    btnText: string;
}
const TaskForm = ({ btnText }: ITaskFormTypes): JSX.Element => {
    return (
        <form>
            <Input />

            <Select options={["Fácil", "Medio", "Difícil"]} />

            <input type="submit" value={btnText} />
        </form>
    );
};
export default TaskForm;
