import React, { useState } from 'react';
import ReactFlow, { addEdge, Controls, Background } from 'react-flow-renderer';

function Content() {
  const [elements, setElements] = useState([
    {
      id: '1',
      data: { label: 'Node 1' },
      position: { x: 250, y: 5 },
    }
  ]);

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const addNode = () => {
    setElements(e => e.concat({
      id: (elements.length + 1).toString(),
      data: { label: `Node ${elements.length + 1}` },
      position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
    }));
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <button onClick={addNode}>Add Node</button>
      <ReactFlow
        elements={elements}
        onConnect={onConnect}
        style={{ height: '90vh', width: '100%' }}
      >
        <Background color="#aaa" gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Content;
