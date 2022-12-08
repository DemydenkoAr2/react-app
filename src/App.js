import ToDoList from "./components/ToDoList/ToDoList";
import FastCompany from "./components/FastCompany/FastCompany";
import Clock from "./components/Clock/Clock";

const App = () => {

  return (
   <div>
      <h1>
        React
      </h1>
      <div className="ToDoList-container">
        <ToDoList/>
      </div>
      {/* <div className="Clock-container">
        <Clock/>
      </div> */}
      {/* <div className="FastCompany-container">
        <FastCompany/>
      </div> */}
   </div>
  );
};

export default App;
