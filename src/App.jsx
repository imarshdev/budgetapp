import Dashboard from "./components/blocks/1.dashboard";
import Income from "./components/blocks/2.income";
import Expenses from "./components/blocks/3.expenses";

export default function App() {
  return (
    <div className="container">
      <div className="content">
        <Dashboard />
        <Income />
      </div>
    </div>
  );
}
