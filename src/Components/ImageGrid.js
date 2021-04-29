import React from 'react';
import useFirestore from '../Hooks/useFirestore'

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => {
              setSelectedImg(doc.url);
            }}
          >
          <img src={doc.url} alt={doc.id} />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
