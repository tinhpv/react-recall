import { useState } from 'react';
import { BiCaretRight, BiCaretDown } from 'react-icons/bi';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const handleTap = () => {
      if (expandedIndex >= 0) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(index);
      }
    };

    return (
      <div key={item.id}>
        <div
          className="flex justify-between items-center p-3 bg-gray-200 border-b border-white cursor-pointer"
          onClick={handleTap}
        >
          {item.label}
          <span className="text-2xl">
            {isExpanded ? <BiCaretDown /> : <BiCaretRight />}
          </span>
        </div>
        <span>
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </span>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
