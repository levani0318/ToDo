import bgright from "./assets/bg-right.svg";

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
  return (
    <div className="h-screen flex justify-center items-center gap-[306px]">
      <h1 className="font-bold text-8xl text-[#007FDB]">ToDo</h1>
      <div className="rounded-[10px]">
        <div className="relative">
          <img src={bgright} alt="bgright" />
          <div className="absolute right-[28px] bottom-[16px]">
            <h2 className="font-normal text-[18px] text-white ml-[140px]">
              {currentDate}
            </h2>
            <h1 className="font-normal text-5xl text-white">{currentTime}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
