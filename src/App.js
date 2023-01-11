import TopBar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
// import Single from "./pages/single/Single";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <TopBar></TopBar>
        <Home></Home>
        {/* <Single></Single> */}
        </>
      </header>
    </div>
  );
}

export default App;
