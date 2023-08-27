import React, { useState, useRef } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black h-96 w-96">
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x=" + x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let: {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            setY(y + 1);
            console.log("Rendering...");
          }}
        >
          Increase y
        </button>
        <span className="font-bold text-xl">State: {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("Ref=" + ref.current);
          }}
        >
          Increase ref
        </button>
        <span className="font-bold text-xl">Ref: {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
