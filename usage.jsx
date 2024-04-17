import React from 'react';
import Table from './Table';

const data = [
  // Your data here
];

const columnCount = 5; 
const rowCount = 1000; 
const columnWidth = 150; 
const rowHeight = 30; 

const App = () => {
  return <Table data={data} columnCount={columnCount} rowCount={rowCount} columnWidth={columnWidth} rowHeight={rowHeight} />;
};

export default App;
