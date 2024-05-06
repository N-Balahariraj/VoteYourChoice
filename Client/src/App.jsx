// Navbar component
import Navbar from "./Components/Navbar";

// Main components
import Header from "./Components/Header";
import Events from "./Components/Events";
import People from "./Components/People";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <article className="h-[90%] w-[100%] flex">
          <Events />
          <People />
        </article>
      </main>
    </>
  );
}

export default App;
