const StartGame = ({ name, handleChange, handleClick }) => {
  return (
    <form>
      <label htmlFor="name">Ingresa tu nombre:</label>
      <input
        id="name"
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={handleChange}
      />
      <button onClick={(e) => handleClick(e)}>Comenzar</button>
    </form>
  );
};

export default StartGame;
