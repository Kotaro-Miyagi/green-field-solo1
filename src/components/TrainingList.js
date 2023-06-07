import React from "react";
import Training from "./Training";

const TrainingList = ({ TrainingLists, toggleTraining }) => {
  return TrainingLists.map((training) => (
    <Training
      training={training}
      key={training.name}
      toggleTraining={toggleTraining}
    />
  ));
};

export default TrainingList;
