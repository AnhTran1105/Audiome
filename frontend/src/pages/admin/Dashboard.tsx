import SongList from "@/components/user/SongList";

export default function AdminDashboard() {
  return (
    <div className="flex gap-6">
      <div className="grow"></div>
      <div className="w-80">
        <div className="flex justify-between items-center mb-3">
          <span className="uppercase text-secondary text-xs">New Releases</span>
          <button className="text-primary text-sm">See all</button>
        </div>
        <ul role="list" className="space-y-4">
          {/* <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard /> */}
          <SongList />
        </ul>
      </div>
    </div>
  );
}
