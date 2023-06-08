import { useState, useRef } from "react";
import TrainingList from "./components/TrainingList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [TrainingLists, setTrainingLists] = useState([]);

  const trainingNameRef = useRef();

  const handleAddTraining = () => {
    const name = trainingNameRef.current.value;
    if (name === "") return;
    setTrainingLists((prevTrainings) => {
      return [...prevTrainings, { id: uuidv4(), name: name, completed: false }];
    });
    trainingNameRef.current.value = null;
  };

  const toggleTraining = (id) => {
    const newTraining = TrainingLists.map((training) => {
      if (training.id === id) {
        return { ...training, completed: !training.completed };
      }
      return training;
    });
    setTrainingLists(newTraining);
  };

  const deleteTraining = (id) => {
    const newTraining = TrainingLists.filter((training) => training.id !== id);
    setTrainingLists(newTraining);
  };

  const handleClear = () => {
    const newTraining = TrainingLists.filter((training) => !training.completed);
    setTrainingLists(newTraining);
  };

  const remainingTodos = TrainingLists.filter(
    (training) => !training.completed
  ).length;

  return (
    <div className="container">
      <h1>筋肉育てる君</h1>
      <div>
        <input type="text" ref={trainingNameRef} className="todo-input" />
        <button onClick={handleAddTraining} className="todo-button">
          トレーニング💪
        </button>
      </div>
      <TrainingList
        TrainingLists={TrainingLists}
        toggleTraining={toggleTraining}
        deleteTraining={deleteTraining}
      />
      <button onClick={handleClear} className="todo-button">
        保存💪
      </button>
      <div className="remaining-todos">
        残りのトレーニング: {remainingTodos}
      </div>
    </div>
  );
}
export default App;

// //import logo from "./logo.svg";
// import { useState, useRef } from "react";
// import TrainingList from "./components/TrainingList";
// import "./App.css";
// import Training from "./components/Training";
// import { v4 as uuidv4 } from "uuid";
// // import Login from "./components/Login";

// function App() {
//   const [TrainingLists, setTrainingLists] = useState([]);

//   const trainingNameRef = useRef();

//   const handleAddTraining = () => {
//     //console.log(trainingNameRef.current.value);
//     const name = trainingNameRef.current.value;
//     if (name === "") return;
//     setTrainingLists((prevTrainings) => {
//       return [...prevTrainings, { id: uuidv4(), name: name, completed: false }];
//     });
//     trainingNameRef.current.value = null;
//   };

//   const toggleTraining = (id) => {
//     const newTraining = [...TrainingLists];
//     const training = newTraining.find((training) => training.id === id);
//     training.completed = !training.completed;
//     setTrainingLists(newTraining);
//   };

//   const handleClear = () => {
//     const newTraining = TrainingLists.filter((training) => !training.completed);
//     setTrainingLists(newTraining);
//   };

//   return (
//     <>
//       <TrainingList
//         TrainingLists={TrainingLists}
//         toggleTraining={toggleTraining}
//       />
//       <input type="text" ref={trainingNameRef} />
//       <button onClick={handleAddTraining}>トレーニングの追加</button>
//       <button onClick={handleClear}>完了したトレーニングの削除</button>
//       <div>
//         残りのトレーニング:
//         {TrainingLists.filter((training) => !training.completed).length}
//       </div>
//     </>
//   );
// }

// export default App;

// // <header className="App-header">
// // <img src={logo} className="App-logo" alt="logo" />
// // <p>
// //   Edit <code>src/App.js</code> and save to reload.
// // </p>
// // <a
// //   className="App-link"
// //   href="https://reactjs.org"
// //   target="_blank"
// //   rel="noopener noreferrer"
// // >
// //   Learn React
// // </a>
// // </header>