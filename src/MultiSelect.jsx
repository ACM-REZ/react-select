import { useState } from "react";
import Select from "react-select";

const options = [
  {
    value: 'russia',
    label: 'Russia'
  },
  {
    value: 'usa',
    label: 'USA'
  },
  {
    value: 'china',
    label: 'China'
  },
  {
    value: 'german',
    label: 'German'
  }
]

const isMulti = true;

export const MultiSelect = () => {

    const [currents, setCurrents] = useState(['russia']);

    const getValue = () => {
        if (currents) {
            return (
                isMulti 
                ? options.filter(c => currents.indexOf(c.value) >= 0) 
                : options.find(c => c.value === currents)
            )
        }else {
            return isMulti ? [] : ''
        }
    }

    const onChange = (newValue) => {
        setCurrents(
            isMulti 
            ? newValue.map(v => v.value)
            : newValue.value
        )
    }

    return <Select 
            classNamePrefix='custom-select'
            onChange={onChange} 
            value={getValue()} 
            options={options} 
            className="w-1/5 mx-auto mt-6 text-xl text-stone-800" 
            isMulti={isMulti}
            placeholder='Choose countries...'
            />
}