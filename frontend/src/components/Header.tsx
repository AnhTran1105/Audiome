import { Bell, Cast, Search, Settings } from "lucide-react";
import avatar from "@/assets/avatar.jpeg";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 ml-56 px-6 py-4 flex justify-between items-center">
      <div>
        <form action="" className="relative">
          <label
            htmlFor="search"
            className="absolute top-1/2 left-4 -translate-y-1/2"
          >
            <Search size={20} className="text-secondary" />
          </label>
          <input
            type="text"
            id="search"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            placeholder="Search by artists, songs or albums"
            className="bg-placeholder w-[480px] py-[10px] pl-12 pr-4 rounded-xl text-sm placeholder:text-secondary"
          />
        </form>
      </div>
      <div className="flex items-center gap-6">
        <button className="hover:text-primary transition">
          <Cast size={22} />
        </button>
        <button className="hover:text-primary transition">
          <Settings size={22} />
        </button>
        <button className="hover:text-primary transition">
          <Bell size={22} />
        </button>
        <button className="p-[2px] border border-primary rounded-full border-solid">
          <img src={avatar} className="w-8 h-8 rounded-full" />
        </button>
      </div>
    </header>
  );
}
