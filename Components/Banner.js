"use client";
import React, { useState } from "react";

const Banner = () => {
  const [title, settitle] = useState(""); // react variable declaration
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const delteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };
  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex justify-between mb-5">
            <h5>{t.title}</h5>
            <h6>{t.desc}</h6>
            <button
              className="bg-red-400 text-white rounded-xl px-3 py-2"
              onClick={() => {
                delteHandler(i);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-xl"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-xl"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="m-5 px-3 py-2 bg-blue-400 text-1xl text-white rounded-xl block">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Banner;
