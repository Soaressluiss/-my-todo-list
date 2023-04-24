import "./SelectStyle.scss";

interface ISelectTypes {
    options: string[];
    value: string;
    handleDifficulty(e: React.ChangeEvent<HTMLSelectElement>): void;
}

const Select = ({
    options,
    value,
    handleDifficulty,
}: ISelectTypes): JSX.Element => {
    return (
        <div className="selectContainer">
            <label className="SelectLabel">
                <select value={value} onChange={handleDifficulty} required>
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
        </div>
    );
};

export default Select;
