// List.tsx
import React from "react";

interface ListProps {
  files: File[];
}

const List: React.FC<ListProps> = ({ files }) => {
  return (
    <div>
      <h1 className="text-white py-4">Uploaded Files</h1>
      {files.length > 0 && (
        <div>
          {files.map((file, index) => (
            <span key={index}>{file.name}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
