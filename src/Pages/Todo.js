import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState({ value: "", complete: false, id: 0 });
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    setTask((task) => {
      return { ...task, value: e.target.value };
    });
  };

  const submitTask = () => {
    if (task.value !== "") {
      setTask((e) => {
        return { value: "", complete: false, id: task.id + 1 };
      });

      setTasks((tasks) => {
        return [...tasks, task];
      });
    } else {
      console.log("Enter  a task");
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((e) => e.id !== id));
  };

  const completeTask = (id) => {
    setTasks(tasks.map((e) => {
      return e.id===id?{...e,complete:true}:e   
  }))}

  return (
    <div className="bg-slate-700 flex items-center gap-2  overflow-y-auto h-screen  flex-col">
    <div className="bg-slate-900 m-2 rounded-2xl w-4/5 
     md:w-2/5  min-w-fit  overflow-y-auto h-screen flex items-center uppercase gap-2 flex-col ">
      <h1 className=" font-thin  text-sky-100 justify-center my-5 text-3xl">
        TODO-LIST
      </h1>
      <div className="flex  flex-wrap justify-center items-center">
        <input
          className="p-2 bg-blue-100 rounded-xl outline-none ring-2"
          type="text"
          onChange={addTask}
          value={task.value}
          placeholder="Add a task"
        />
        <button
          onClick={submitTask}
          type="button"
          className=" text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-md px-4 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 ml-3"
        >
          &#10009;
        </button>
      </div>
      <div className="bg-slate-500 m-5 w-full py-px font-thin justify-start items-start"></div>
      {tasks?.map((t, index) => {
        return (
          <div
            key={t.id}
            className="  text-sky-100  bg-slate-800 p-2 rounded-lg "
          >
            <span>{index + 1} &nbsp;</span>
            {t.complete?(<span className="line-through">{t.value} </span>):
            (<span >{t.value}</span>)}
            <button
              onClick={() => removeTask(t.id)}
              type="button"
              className=" text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-md px-4 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 ml-3"
            >
              &#10005;
            </button>
            <button
              onClick={() => completeTask(t.id)}
              type="button"
              className=" text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-md px-4 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 ml-3"
            >
              &#10003;
            </button>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Todo;
