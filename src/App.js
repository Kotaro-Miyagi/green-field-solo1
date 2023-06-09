import { useState, useRef, useEffect } from "react";
import TrainingList from "./components/TrainingList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function App() {
  // const knex = require("./db/index");
  const [TrainingLists, setTrainingLists] = useState([]);
  const [Trainingcount, setTrainingcount] = useState(0);
  useEffect(() => {
    const getlist = async () => {
      const response = await fetch("http://localhost:3333/record");
      const data = await response.json();
      setTrainingcount(data.length);
    };

    getlist();
  });

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

  const submit = async () => {
    try {
      const Trained = TrainingLists.filter(
        (training) => training.completed
      ).map((e) => {
        console.log(e.name);
        return e.name;
      });
      console.log(Trained);
      // const name = trainingNameRef.current.value;
      // if (name === "") return;
      // console.log(name);

      Trained.forEach(async (element) => {
        const body = {
          "date-id": new Date(),
          id: 1,
          training: element,
        };
        // console.log(body);
        await fetch("http://localhost:3333/record", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        console.log("Success:", TrainingLists);
      });
    } catch (error) {
      console.error(error);
    }
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
        <input
          type="text"
          ref={trainingNameRef}
          className="todo-input"
          placeholder="Let's training!"
        />
        <button onClick={handleAddTraining} className="todo-button">
          トレーニング🔥
        </button>
      </div>
      <TrainingList
        TrainingLists={TrainingLists}
        toggleTraining={toggleTraining}
        deleteTraining={deleteTraining}
      />
      <button
        onClick={() => {
          submit();
          handleClear();
        }}
        className="todo-button"
      >
        保存💪
      </button>
      <div className="remaining-todos">
        残りのトレーニング: {remainingTodos}
      </div>
      <div className="remaining-todos">
        今までのトレーニング: {Trainingcount}
      </div>
    </div>
  );
}

export default App;
