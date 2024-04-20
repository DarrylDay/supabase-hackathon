import { Monster, Page } from "@/lib/gameTypes";
import MonsterPanel from "../MonsterPanel";

export default function ResultsPage({
	monster,
	setPage,
}: {
	monster?: Monster;
	setPage: (page: Page) => void;
}) {
	return (
		<div className="flex flex-grow flex-row justify-center gap-6 p-12 bg-center bg-cover bg-[url('https://fkntwkyhospseypicffr.supabase.co/storage/v1/object/public/game-assets/City_Backdrop.jpg')]">
			<MonsterPanel monster={monster} />
			<div className="flex-1 flex flex-col justify-center items-center gap-6">
				<div className="indicator w-full max-w-xl mt-8">
					{/* <span className="indicator-item indicator-start badge badge-secondary border-4 bg-blue-200 border-blue-600 p-4 -translate-x-4">
						<i className="fa-solid fa-scroll pr-2"></i> 0 / 5
						SECRETS DISCOVERED
					</span> */}
					<div className="card w-11/12 bg-blue-200 border-blue-600 border-4">
						<div className="card-body flex flex-col gap-6 p-8">
							<p className="font-game font-black text-center text-2xl text-red-800">
								-20 HP
							</p>
							<p className="font-game font-black text-center text-2xl text-blue-800">
								YOU WEAKNEND THE{" "}
								{monster?.creature?.toUpperCase()}
							</p>
							<button
								className="btn btn-primary"
								onClick={() => setPage("combat-start")}
							>
								COMBAT AGAIN
							</button>
							<button
								className="btn"
								onClick={() => {
									const el =
										document.getElementById(
											"monster_dialog"
										);
									if (el) {
										(el as any).close();
									}
								}}
							>
								DOUBLE THE COMBAT
							</button>
							<p>
								Get a friend to help fight and save your city!
								Combating will help unlock secrets
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
