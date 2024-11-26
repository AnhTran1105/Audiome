import { NavLink } from "react-router-dom";
import {
  ListMusic,
  LayoutDashboard,
  AudioLines,
  DiscAlbum,
  UsersRound,
  Podcast,
  MicVocal,
} from "lucide-react";

const links = [
  {
    name: "dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "songs",
    href: "/admin/songs",
    icon: AudioLines,
  },
  {
    name: "artists",
    href: "/admin/artists",
    icon: MicVocal,
  },
  {
    name: "playlists",
    href: "/admin/playlists",
    icon: ListMusic,
  },
  {
    name: "albums",
    href: "/admin/albums",
    icon: DiscAlbum,
  },
  {
    name: "users",
    href: "/admin/users",
    icon: UsersRound,
  },
  {
    name: "podcasts",
    href: "/admin/podcasts",
    icon: Podcast,
  },
];

export default function NavLinks() {
  return (
    <nav className="space-y-1">
      {links.map((link) => {
        const LinkIcon = link.icon;

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
