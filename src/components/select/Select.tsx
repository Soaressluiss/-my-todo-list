import "./SelectStyle.scss";

interface ISelectTypes {
    options: string[];
}

const Select = ({ options }: ISelectTypes): JSX.Element => {
    return (
        <div className="selectContainer">
            <label className="SelectLabel">
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
        </div>
    );
};

export default Select;
