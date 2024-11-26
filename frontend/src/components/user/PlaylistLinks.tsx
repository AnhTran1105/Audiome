import { NavLink } from "react-router-dom";
import { Disc } from "lucide-react";

const links = [
  {
    name: "playlist 1",
    href: "/playlist1",
  },
  {
    name: "playlist 2",
    href: "/playlist2",
  },
  {
    name: "playlist 3",
    href: "/playlist3",
  },
  {
    name: "playlist 4",
    href: "/playlist4",
  },
  {
    name: "playlist 5",
    href: "/playlist5",
  },
];

export default function PlaylistLinks() {
  return (
    <nav className="space-y-1">
      {links.map((link, index) => {
        if (index === 0) {
          return (
            <div key={link.name}>
              <div className="text-secondary text-xs gap-4 flex items-center font-semibold uppercase mb-3 px-6">
                YOUR PLAYLISTS
              </div>
              <NavLink
                to={link.href}
                end
                className={({ isActive }) =>
                  `flex items-center gap-2 py-2 px-6 text-[15px] rounded-md ${
                    isActive
                      ? "border-l-2 border-primary bg-gradient-to-r from-primary/50 to-10% text-primary"
                      : "hover:text-primary transition"
                  }`
                }
              >
                <Disc size={20} />
                <div className="capitalize">{link.name}</div>
              </NavLink>
            </div>
          );
        }
        return (
          <NavLink
            key={link.name}
            to={link.href}
            end
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 px-6 text-[15px] rounded-md ${
                isActive
                  ? "border-l-2 border-primary bg-gradient-to-r from-primary/50 to-10% text-primary"
                  : "hover:text-primary transition"
              }`
            }
          >
            <Disc size={20} />
            <div className="capitalize">{link.name}</div>
          </NavLink>
        );
      })}
    </nav>
  );
}
