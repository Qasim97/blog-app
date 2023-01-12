import TopBar from "./components/topbar/Topbar";
// import Home from "./pages/home/Home"
// import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <TopBar></TopBar>
        <Write></Write>
        </>
      </header>
    </div>
  );
}

export default App;
