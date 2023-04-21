const Input = (): JSX.Element => {
    return (
        <>
            <label htmlFor="title"> Tarefa</label>
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Digite sua tarefa"
            />
        </>
    );
};

export default Input;
