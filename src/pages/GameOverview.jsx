export default function GameOverview() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-yellow-600">
          Game Overview
        </h2>

        {/* Overview Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-4 text-lg">
          <p>
            <span className="font-semibold">Title:</span> 21 Stack’em
          </p>
          <p>
            <span className="font-semibold">Genre:</span> Puzzle / Number Strategy
          </p>
          <p>
            <span className="font-semibold">Platform:</span> Web and Mobile Browsers
          </p>
          <p>
            <span className="font-semibold">Target Audience:</span> Ages 13+, puzzle/strategy gamers
          </p>
          <p>
            <span className="font-semibold">Developer:</span> Big Slick Games
          </p>
          <p>
            <span className="font-semibold">Monetization:</span> In-game chip shop, premium gallery items
          </p>

          {/* Elevator Pitch */}
          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-md mt-6">
            <p className="font-bold text-yellow-800 mb-2">Elevator Pitch:</p>
            <p>
              Stack cards to build exact totals of 21 in rows and columns. Collect winnings
              based on how efficiently you stack your cards. With wild and swap cards,
              and a chip-based ante system, players must make strategic decisions to
              maximize their profits before the deck runs out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
