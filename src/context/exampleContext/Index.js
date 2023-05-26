import { createContext , useState} from "react";

export const ExampleContext = createContext("");

export const ExampleProvider = ({children}) =>{
    const [value, setValue] = useState("This is context!");
    const values= {
        value: value,
        setValue: setValue
    }

    return (
        <ExampleContext.Provider value={values}>{ children }</ExampleContext.Provider>
    )
}