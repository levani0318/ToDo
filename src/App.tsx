import bgright from "./assets/bg-right.svg";

function App() {
  return (
    <div className="h-screen flex justify-center items-center gap-[306px]">
      <h1 className="font-bold text-8xl text-[#007FDB]">ToDo</h1>
      <div className="rounded-[10px]">
        <div className="">
          <img src={bgright} alt="bgright" />
        </div>
      </div>
    </div>
  );
}

export default App;
