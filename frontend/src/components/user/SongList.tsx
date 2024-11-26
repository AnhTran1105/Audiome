import { useSongs } from "../../hooks/useSongs";

function SongList() {
  const { data: songs, isLoading, error } = useSongs();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading songs</div>;
  }

  return (
    <div>
      {songs.map((song: any) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
          <audio controls src={song.url}></audio>
        </div>
      ))}
    </div>
  );
}

export default SongList;
