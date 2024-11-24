import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Player from "@/components/Player";

export default function UserLayout() {
  return (
    <div className="flex flex-col h-screen font-nunito font-medium text-white bg-background antialiased">
      <Header />
      <Sidebar />
      <main className="pt-24 pb-[104px] pr-6 pl-[248px]">
        <Outlet />
      </main>
      <Player />
    </div>
  );
}
