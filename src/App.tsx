import "./App.css";
import AuthPage from "./pages/AuthPage";
import First from "./Components/Clock/First";
import Second from "./Components/Clock/Second";
import Third from "./Components/Clock/Third";
import { ClockProvider } from "./Context/clock/ClockProvider";

function App() {
  return (
    <div>
      <AuthPage />
      <ClockProvider>
        <First />
        <Second />
        <Third />
      </ClockProvider>
    </div>
  );
}

export default App;
