import "./InputStyle.scss";

const Input = (): JSX.Element => {
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
            />
        </div>
    );
};

export default Input;
