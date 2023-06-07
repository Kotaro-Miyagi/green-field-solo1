import React from "react";

const training = ({ training, toggleTraining }) => {
  const handleTrainingClick = () => {
    toggleTraining(training.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={training.completed}
          readOnly
          onChange={handleTrainingClick}
        />
      </label>
      {training.name}
    </div>
  );
};

export default training;
