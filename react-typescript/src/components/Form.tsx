import useNewSubForm from '../hooks/useNewSubForm';
import { Sub } from '../types';



interface FormProps {
    onNewSub: (newSub: Sub) => void
}


const Form = ({ onNewSub }: FormProps) => {

    //const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE);

    const [inputValues, dispatch] = useNewSubForm()
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onNewSub(inputValues);
        handleClear();
        console.log(inputValues);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       
        const { name, value } = event.target;

        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
        // setInputValues({
        //     ...inputValues,
        //     [event.target.name]: event.target.value
        // });
    }

    const handleClear = () => {

        dispatch({
            type: "clear"
        })
        //setInputValues(INITIAL_STATE);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder="Nick" />
        <input onChange={handleChange} value={inputValues.subsMonths} type="number" name='subsMonths' placeholder="Subs Months" />
        <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder="Avatar" />
        <textarea onChange={handleChange} value={inputValues.description}  name='description' placeholder="Description" />
        <button onClick={handleClear} type="button">Clear Form</button>
        <button type="submit">Save new sub!</button>
    </form>
  );
}

export default Form