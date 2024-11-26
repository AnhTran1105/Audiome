import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import NavLinks from "./NavLinks";

export default function Sidebar() {
  return (
    <aside className="flex flex-col h-screen w-56 space-y-6 pb-20 pt-6 fixed z-10 top-0 bottom-0 left-0">
      <Link to="/" className="px-6 pb-6">
        <img src={logo} className="" alt="audiome-logo" />
      </Link>
      <NavLinks />
    </aside>
  );
}
