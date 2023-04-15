import { useState } from "react";
import Select from "react-select";

const options = [
  {
    value: '',
    label: 'Choose country...'
  },
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
  }
]

export const SingleSelect = () => {

    const [current, setCurrent] = useState('');

    const getValue = () => {
        return current ? options.find(c => c.value === current) : ''
    }

    const onChange = (newValue) => {
        setCurrent(newValue.value)
    }

    return <Select 
            onChange={onChange} 
            value={getValue()} 
            options={options} 
            className="w-1/5 mx-auto mt-6 text-xl text-stone-800"
            placeholder='Choose country...'
            />
}