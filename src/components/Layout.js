import React from "react";
import { questionNanswers } from "../questions";
import SingleQuestion from "./SingleQuestion";

const Layout = () => {
  return (
    <>
      <div className="bg-gray-50 max-w-[55%] items-center m-auto py-5 rounded-md drop-shadow-lg">
        <div className="py-5 text-2xl font-semibold text-gray-700">
          <h1>Questions about Cybersecurity</h1>
        </div>
        <div>
          {questionNanswers.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Layout;
