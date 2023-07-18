import React, { useState } from 'react';
import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';

function Content() {
  const [elements, setElements] = useState([]);
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const addNode = () => {
    setElements(e => e.concat({
      id: (e.length + 1).toString(),
      data: { label: `Node ${e.length + 1}` },
      position: { x: Math.random() * window.innerWidth / 2, y: Math.random() * window.innerHeight / 2 },
    }));
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <button onClick={addNode}>Add Node</button>
      <ReactFlow
        elements={elements}
        onConnect={onConnect}
      >
        <MiniMap
          nodeColor={(n) => {
            if (n.type === 'input') return 'blue';
            return '#FFCC00';
          }}
        />
        <Controls />
        <Background color="#aaa" gap={20} />
      </ReactFlow>
    </div>
  );
}

export default Content;
