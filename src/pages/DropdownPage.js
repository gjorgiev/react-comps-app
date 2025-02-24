import { useState } from 'react';
import Dropdown from "../components/DropDown";

export default function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  }

  const options = [
    {
      label: 'The Color Red',
      value: 'red'
    },
    {
      label: 'The Color Green',
      value: 'green'
    },
    {
      label: 'A Shade of Blue',
      value: 'blue'
    }
  ];

  return (
    <div className='flex'>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}