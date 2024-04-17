import React from 'react';
import { FixedSizeList as List } from 'react-window';

const Table = ({ data, columnCount, rowCount, columnWidth, rowHeight }) => {
  const renderItem = ({ index, style }) => (
    <div style={style}>
      {data[index].map((cell, colIndex) => (
        <div key={colIndex} style={{ width: columnWidth }}>
          {cell}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Render header */}
        {Array.from({ length: columnCount }, (_, index) => (
          <div key={index} style={{ width: columnWidth }}>
            Header {index}
          </div>
        ))}
      </div>
      <List
        height={400} // Height of the visible portion
        itemCount={rowCount} // Total number of rows
        itemSize={rowHeight} // Height of each row
        width="100%" // Width of the list
      >
        {renderItem}
      </List>
    </div>
  );
};

export default Table;

