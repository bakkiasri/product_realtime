import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { SiTodoist } from "react-icons/si";
import { ImCancelCircle } from "react-icons/im";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos); 
      })
      .catch((error) => console.error("Error fetching todos:", error));
        }, []);
      useEffect(()=>{fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      todo: 'newTodo',
      completed: false,
      userId: 5,
  })
})
.then(res => res.json())
.then(console.log);}
)
  

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="bg-white flex justify-center  items-center shadow  bg-gradient-to-r from-purple-500 via-indigo-500 via-blue-500 to-blue-900">
     
     <div>
        <div className=" shadow-lg p-5 px-10 mt-30 rounded-xl border-gray-300 bg-white">
        <div className="text-2xl flex justify-center items-center mb-10 font-medium text-[#100B39]">
          TO-DO LIST{" "}
          <SiTodoist className="text-[#F2573E] ps-3 w-[30px] h-[30px]" />
        </div>

        {/* Add new todo form */}
        <form
          className="p-3 gap-3 ps-30 flex"
          onSubmit={(e) => {
            e.preventDefault();
            if (newTodo.trim()) {
              setTodos([
                ...todos,
                { id: Date.now(), todo: newTodo, completed: false },
              ]);
              setNewTodo("");
            }
          }}
        >
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="bg-[#EBEDEE] p-2 shadow border border-transparent hover:border-gray-100 focus:border-gray-200 outline-none rounded-3xl"
            placeholder="Add a new task"
          />
          <button
            type="submit"
            className="bg-[#F2573E] p-2 font-md shadow-sm text-white rounded-4xl"
          >
            <div className="flex p-1">
              <p className="text-lg">Add</p>
              <IoMdAdd className="w-[30px] ps-2 pb-1 h-[30px]" />
            </div>
          </button>
        </form>
          </div>
        {/* Display todos-5 */}
        <div className=" flex-row  space-y-5 gap-5 mt-5">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex flex-row rounded-lg  shadow-2xl bg-white justify-between gap-5 p-3 border-b"
            >
              <div className="flex gap-2  items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCheckboxChange(todo.id)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  className={`text-gray-700 ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.todo}
                </label>
              </div>
              <ImCancelCircle
                className="text-[#F2573E] cursor-pointer"
                onClick={() =>
                  setTodos((prev) => prev.filter((t) => t.id !== todo.id))
                }
              />
            </div>
          ))}
        </div>
     </div>
      
      </div>
   
    
  );
}

export default Todo;
