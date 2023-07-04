import Table from '../components/Table';

const TablePage = () => {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 10 },
    { name: 'Banana', color: 'bg-yellow-500', score: 20 },
    { name: 'Lime', color: 'bg-green-500', score: 6 },
  ];

  const config = [
    { label: 'Fruit', render: (item) => item.name },
    {
      label: 'Color',
      render: (item) => {
        return <div className={`p-3 m-2 ${item.color}`}></div>;
      },
    },
    { label: 'Score', render: (item) => item.score },
  ];

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
};

export default TablePage;
