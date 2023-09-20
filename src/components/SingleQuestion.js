import React, { useState } from "react";

const SingleQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div className="border border-x-0 border-slate-500 min-h-[50px] my-2 rounded-lg mx-1 drop-shadow-md">
        <div className="flex flex-row justify-between mx-5 my-3">
          <h1 className="text-xl font-medium text-slate-800 pt-1">
            {question}
          </h1>
          <button
            type="button"
            className="bg-green-500 p-1 px-3 rounded-full text-xl"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {showAnswer ? "-" : "+"}
          </button>
        </div>
        <div>
          {showAnswer && <p className="text-gray-600 text-sm"> {answer}</p>}
        </div>
      </div>
    </>
  );
};

export default SingleQuestion;
