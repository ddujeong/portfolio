import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";
import "./App.css";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <MainContent />
    </div>
  );
}