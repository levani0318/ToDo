import bgright from "./assets/bg-right.svg";
import circle from "./assets/circle.svg";
import plus from "./assets/akar-icons_plus.svg";
import { useState } from "react";
import deleteIcon from "./assets/akar-icons_trash-can.svg";

function App() {
  const currentTime = new Date().toLocaleString("us-en", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const currentDate = new Date().toLocaleString("en-us", {
    weekday: "short",
    day: "numeric",
  });
  console.log(currentDate.toLocaleString());

  interface TodoTypes {
    id: string;
    title: string;
  }

  const [todos, setTodos] = useState<TodoTypes[]>([]);

  const [value, setValue] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: value,
    };
    setTodos([...todos, newTodo]);
    setValue("");
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="h-screen flex justify-center items-center gap-[306px] bg-[#EEEEEE]">
      <h1 className="font-bold text-8xl text-[#007FDB]">ToDo</h1>
      <div className="rounded-[10px] bg-white">
        <div className="relative">
          <img src={bgright} alt="bgright" />
          <div className="absolute right-[28px] bottom-[16px] font-ruso">
            <h2 className="font-normal text-[18px] text-white ml-[145px]">
              {currentDate}
            </h2>
            <h1 className="font-normal text-5xl text-white">{currentTime}</h1>
          </div>
        </div>
        <div className="flex justify-around gap-[10px] pb-2">
          <div className="relative pl-[29px] pt-[23px] cursor-pointer">
            <img
              className="absolute left-[32px] top-[35px]"
              src={circle}
              alt="circle"
            />
            <input
              className="w-[275px] h-[49px] pl-[30px] rounded-[5px]  bg-[#ebeff2]"
              type="text"
              value={value}
              placeholder="Note"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <button
            onClick={addTodo}
            className="w-[88px] h-[49px] rounded-[5px] gap-2.5 bg-[#20EEB0] mt-[21.5px] cursor-pointer"
          >
            <img className="pl-[21px]" src={plus} alt="Plus" />
          </button>
        </div>
        <div className="px-[45px] mb-[78px]">
          {todos.map((todo) => {
            return (
              <div key={todo.id} className="flex justify-between gap-{10px}">
                <h1>{todo.title}</h1>
                <img
                  className=""
                  onClick={() => deleteTodo(todo.id)}
                  src={deleteIcon}
                  alt="delet"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
