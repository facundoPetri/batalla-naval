const GameFinished = ({ winner }) => {
  return (
    <div>
      <p className="winner-text">
        El ganador es: <span>{winner}</span>
      </p>
      <button onClick={() => window.location.reload()}>Volver a jugar</button>
    </div>
  );
};

export default GameFinished;
