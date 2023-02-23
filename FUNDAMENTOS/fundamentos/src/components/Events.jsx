import React from "react";

const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e.target);
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isto!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={(e) => console.log(e.target)}>
          Clique aqui também
        </button>
      </div>
      {renderSomething(true)}
    </div>
  );
};

export default Events;
