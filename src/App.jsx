import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">{children ?? <Outlet />}</div>
    </div>
  );
}

export default function App() {

  return (
    <div>
      <AppLayout />
    </div>
  );
}
