import TopBar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <TopBar></TopBar>
        <Home></Home>
        </>
      </header>
    </div>
  );
}

export default App;
