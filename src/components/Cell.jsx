const Cell = ({ name, hasShip, isShot }) => {
  let sh = hasShip && name !== "cpu" ? "cell has-ship" : "cell"
  return <div className={sh}></div>;
};

export default Cell;
