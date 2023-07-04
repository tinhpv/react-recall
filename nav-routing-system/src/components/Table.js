const Table = ({ data, config }) => {
  const renderedHeader = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedBody = data.map((item) => {
    const renderRows = config.map((column) => {
      return <td className="p-3">{column.render(item)}</td>;
    });

    return (
      <tr key={item.name} className="border-b">
        {renderRows}
      </tr>
    );
  });

  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{renderedHeader}</tr>
        </thead>
        <tbody>{renderedBody}</tbody>
      </table>
    </div>
  );
};

export default Table;
