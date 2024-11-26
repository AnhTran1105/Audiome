import { Outlet } from "react-router-dom";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function AdminLayout() {
  return (
    <div className="flex flex-col h-screen font-nunito font-medium text-white bg-background antialiased">
      <Header />
      <Sidebar />
      <main className="pt-24 pb-[104px] pr-6 pl-[248px]">
        <Outlet />
      </main>
    </div>
  );
}
