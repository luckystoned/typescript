import { useState } from "react";
import { Sub } from '../types';

interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {

    const [inputValues, setInputValues] = useState<FormState['inputValues']>({
        nick: "",
        subsMonths: 0,
        avatar: "",
        description: ""
    });
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onNewSub(inputValues);
        console.log(inputValues);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        });
    }

  return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder="Nick" />
        <input onChange={handleChange} value={inputValues.subsMonths} type="number" name='subsMonths' placeholder="Subs Months" />
        <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder="Avatar" />
        <textarea onChange={handleChange} value={inputValues.description}  name='description' placeholder="Description" />
        <button type="submit">Save new sub!</button>
    </form>
  );
}

export default Form