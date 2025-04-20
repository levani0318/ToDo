import bgright from "./assets/bg-right.svg";

function App() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const today = date.getDate();
  const options = {
    timeZone: "America/New_York",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <div className="h-screen flex justify-center items-center gap-[306px]">
      <h1 className="font-bold text-8xl text-[#007FDB]">ToDo</h1>
      <div className="rounded-[10px]">
        <div className="">
          <img src={bgright} alt="bgright" className="relative " />
          <div className="absolute right-[345px] bottom-[294px]">
            <h2>
              {month}/{date}
            </h2>
            <h1>{formattedDate}</h1>
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
