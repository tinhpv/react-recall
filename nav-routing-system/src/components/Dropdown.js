import { useEffect, useRef, useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';
import Panel from './Panel';

const Dropdown = ({ options, value, onSelect }) => {
  const [opening, setOpening] = useState(false);
  const divElement = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divElement.current) {
        return;
      }

      if (!divElement.current.contains(event.target)) {
        setOpening(false);
      }
    };
    document.addEventListener('click', handler, true);

    const cleanUp = () => {
      document.removeEventListener('click', handler);
    };
    return cleanUp;
  }, []);

  const renderedOptions = options.map((option) => {
    const handleOptionClick = (option) => {
      setOpening(false);
      onSelect(option);
    };

    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  const handleClick = () => {
    if (opening) {
      setOpening(false);
    } else {
      setOpening(true);
    }
  };

  return (
    <div className="w-48 relative" ref={divElement}>
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        {value ? value.label : 'Select...'}
        <BiCaretDown />
      </Panel>

      {opening && (
        <Panel className="absolute top-full">{renderedOptions}</Panel>
      )}
    </div>
  );
};

export default Dropdown;
