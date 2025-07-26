import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400">
        21 Stack’em
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 text-center max-w-2xl mb-8">
        A modern puzzle and strategy game. Stack cards to hit 21, collect chips,
        and climb the leaderboard.
      </p>
      <div className="space-x-4">
        <Link
          to="/game-overview"
          className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
        >
          Learn More
        </Link>
        <Link
          to="/store"
          className="bg-transparent border border-yellow-400 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition"
        >
          Visit Store
        </Link>
      </div>
    </div>
  );
}
