import "./App.css";
import Header from "./components/Header";
import GameWindow from "./components/GameWindow";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <GameWindow />
      <Footer />
    </div>
  );
};

export default App;
