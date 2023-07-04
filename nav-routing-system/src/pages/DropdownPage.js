import { useState } from 'react';
import Dropdown from '../components/Dropdown';

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onSelect={handleSelect} />
    </div>
  );
};

export default DropdownPage;
