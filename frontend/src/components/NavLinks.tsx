import { NavLink } from "react-router-dom";
import {
  TrendingUp,
  AudioLines,
  ListMusic,
  Heart,
  History,
  Podcast,
  ChartNoAxesColumn,
} from "lucide-react";

const links = [
  {
    name: "feed",
    href: "/",
    icon: AudioLines,
  },
  {
    name: "playlists",
    href: "/playlists",
    icon: ListMusic,
  },
  {
    name: "top hits",
    href: "/top-hits",
    icon: ChartNoAxesColumn,
  },
  {
    name: "trends",
    href: "/trends",
    icon: TrendingUp,
  },
  {
    name: "Favourites",
    href: "/favourites",
    icon: Heart,
  },
  {
    name: "history",
    href: "/history",
    icon: History,
  },
  {
    name: "podcasts",
    href: "/podcasts",
    icon: Podcast,
  },
];

export default function NavLinks() {
  return (
    <nav className="space-y-1">
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        if (index === 4) {
          return (
            <div key={link.name}>
              <div className="text-secondary text-xs gap-4 flex items-center font-semibold uppercase mt-5 mb-3 px-6">
                YOUR MUSIC
              </div>
              <NavLink
                to={link.href}
                end
                className={({ isActive }) =>
                  `flex items-center gap-2 py-2 px-6 text-[15px] ${
                    isActive
                      ? "border-l-2 border-primary bg-gradient-to-r from-primary/50 to-10% text-primary"
                      : "hover:text-primary transition"
                  }`
                }
              >
                <LinkIcon size={20} />
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
              `flex items-center gap-2 py-2 px-6 text-[15px] ${
                isActive
                  ? "border-l-2 border-primary bg-gradient-to-r from-primary/50 to-10% text-primary"
                  : "hover:text-primary transition"
              }`
            }
          >
            <LinkIcon size={20} />
            <div className="capitalize">{link.name}</div>
          </NavLink>
        );
      })}
    </nav>
  );
}
