import {
  ListVideo,
  Repeat,
  Shuffle,
  VolumeX,
  Volume2,
  SkipBack,
  SkipForward,
  Pause,
  Play,
  Heart,
} from "lucide-react";
import thumb from "@/assets/thumb.jpg";
import { useState } from "react";

export default function Player() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="fixed z-20 bottom-0 left-0 right-0 px-6 py-3 flex justify-between items-center gap-6 bg-block">
      <div className="flex gap-3 items-center w-1/5">
        <img src={thumb} className="w-14 h-14 rounded-md" />
        <div className="min-w-0">
          <p className="text-sm mb-1 font-semibold truncate">Power</p>
          <p className="text-xs text-secondary font-medium">G-Dragon</p>
        </div>
      </div>
      <div className="flex grow justify-start items-center gap-6 mr-4">
        <div className="flex justify-center items-center gap-6">
          <button className="">
            <SkipBack fill="#fff" size={20} />
          </button>
          <button onClick={() => setIsPlaying(!isPlaying)} className="">
            {isPlaying ? <Pause fill="#fff" /> : <Play fill="#fff" />}
          </button>
          <button className="">
            <SkipForward fill="#fff" size={20} />
          </button>
        </div>
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="ml-2 mr-4"
        >
          <Heart
            fill={isFavorited ? "#FF204E" : ""}
            stroke={isFavorited ? "false" : "#fff"}
            size={20}
          />
        </button>
        <div className="relative grow flex items-center gap-4">
          <div className="w-full h-[3px] rounded-sm bg-secondary/40"></div>
          <div className="absolute top-1/2 -translate-y-1/2 w-1/2 h-[3px] rounded-sm bg-primary"></div>
          <button className="absolute top-1/2 -translate-y-1/2 left-1/2 rounded-full w-3 h-3 bg-white"></button>
          <div className="text-xs text-secondary text-nowrap">1:55 / 3:47</div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-6">
        <div className="flex items-center gap-4 mr-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="hover:text-primary transition"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <div className="relative">
            <div className="w-24 h-[3px] rounded-sm bg-secondary/40"></div>
            <div className="absolute top-1/2 -translate-y-1/2 w-12 h-[3px] rounded-sm bg-primary"></div>
            <button className="absolute top-1/2 -translate-y-1/2 left-12 rounded-full w-3 h-3 bg-white"></button>
          </div>
        </div>
        <button className="hover:text-primary transition">
          <Shuffle size={20} />
        </button>
        <button className="hover:text-primary transition">
          <Repeat size={20} />
        </button>
        <button className="hover:text-primary transition">
          <ListVideo size={24} />
        </button>
      </div>
    </div>
  );
}
