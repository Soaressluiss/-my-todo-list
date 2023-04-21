import "./InputStyle.scss";
interface IInputTypes {
    value: string;
    handleTitle(e: React.ChangeEvent<HTMLInputElement>): void;
}
const Input = ({ value, handleTitle }: IInputTypes): JSX.Element => {
    return (
        <div className="inputContainer">
            <label className="inputLabel" htmlFor="title">
                Tarefa
            </label>
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Digite sua tarefa"
                value={value}
                onChange={handleTitle}
            />
        </div>
    );
};

export default Input;
