
import MovieCarousel from "@/components/MovieCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

async function GenrePage({
  params: { id },
  searchParams: { genre },
}: {
  params: { id: string };
  searchParams: {
    genre: string;
  };
}) {
  console.log(id);
  const movies = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto z-10">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>

        {/* <AISuggestion term={genre} /> */}
        <MovieCarousel title={`Genre`} movies={movies} isVertical />
      </div>
    </div>
  );
}

export default GenrePage;