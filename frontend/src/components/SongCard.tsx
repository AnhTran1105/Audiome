import thumb from "@/assets/thumb.jpg";
import { EllipsisVertical, Heart, Play } from "lucide-react";
import { useState } from "react";

export default function SongCard() {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <li className="flex justify-between items-center gap-6">
      <div className="flex justify-start items-center gap-3">
        <button className="relative group">
          <img
            src={thumb}
            alt="song-thumb"
            className="w-14 h-14 rounded-md group-hover:opacity-30 transition-opacity duration-200"
          />
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-200">
            <Play size={16} fill="#fff" />
          </div>
        </button>
        <div className="grow">
          <p className="text-sm font-bold mb-[2px] truncate">Power</p>
          <p className="text-xs text-secondary">G-Dragon</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="ml-2 mr-4"
        >
          <Heart
            fill={isFavorited ? "#FF204E" : ""}
            stroke={isFavorited ? "false" : "#fff"}
            size={18}
          />
        </button>
        <button>
          <EllipsisVertical size={18} />
        </button>
      </div>
    </li>
  );
}
