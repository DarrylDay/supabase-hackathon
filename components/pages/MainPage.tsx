import { Monster, Page } from "@/lib/gameTypes";
import MonsterPanel from "../MonsterPanel";

export default function MainPage({
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
							{/* <div className="flex flex-row items-center">
								<p className="w-48">METAMORPHOSIS</p>
								<progress
									className="progress progress-info w-56"
									value={100}
									max="100"
								></progress>
							</div>
							<div className="flex flex-row items-center">
								<p className="w-48">ATTACK</p>
								<progress
									className="progress progress-info w-56"
									value={80}
									max="100"
								></progress>
							</div> */}
							<p className="whitespace-pre-line">
								{monster?.creature_data.description}
							</p>
							<button
								className="btn btn-primary"
								onClick={() => setPage("combat-start")}
							>
								BEGIN COMBAT
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
								LEAVE
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
