import { Link } from "react-router-dom";
import TicTacToeLogo from "../assets/tic-tac-toe/images/tic_tac_toe_logo.png";

function GameRouteCard({ title, to, icon, description }) {
    return (
        <Link
            to={to}
            className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
            <img src={icon} alt={title}
                className="h-40 w-full object-cover transition group-hover:scale-105" />

            <div className="p-4">
                <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
                <p className="mt-1 text-sm text-slate-600">{description}</p>
            </div>
        </Link>
    );
}

function Home() {
    const games = [
        {
            title: "Tic Tac Toe",
            to: "/tic-tac-toe",
            icon: TicTacToeLogo,
            description: "2-player classic game",
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10">
            <section className="mx-auto max-w-5xl">
                <h1 className="mb-2 text-3xl font-bold text-slate-900">Choose a Game</h1>
                <p className="mb-8 text-slate-600">
                    Click a card to open and play.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {games.map((game) => (
                        <GameRouteCard
                            key={game.to}
                            title={game.title}
                            to={game.to}
                            icon={game.icon}
                            description={game.description}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}



export default Home;