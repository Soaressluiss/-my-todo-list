interface ISelectTypes {
    options: string[];
}

const Select = ({ options }: ISelectTypes): JSX.Element => {
    return (
        <>
            <label>
                <select>
                    Difficulty
                    <option disabled value="">
                        Dificuldade
                    </option>
                    {options.map((item, id) => (
                        <option key={id} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </label>
        </>
    );
};

export default Select;
