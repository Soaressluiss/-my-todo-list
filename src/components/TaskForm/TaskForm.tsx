import Input from "../input/Input";
import Select from "../select/Select";
interface ITaskFormTypes {
    btnText: string;
}
const TaskForm = ({ btnText }: ITaskFormTypes): JSX.Element => {
    return (
        <form>
            <div>
                <Input />
            </div>
            <div>
                <Select options={["Fácil", "Medio", "Difícil"]} />
            </div>
            <input type="submit" value={btnText} />
        </form>
    );
};
export default TaskForm;
