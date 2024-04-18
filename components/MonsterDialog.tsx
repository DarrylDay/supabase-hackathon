import { Monster, Page } from "@/lib/gameTypes";
import MainPage from "./pages/MainPage";
import { useState } from "react";
import CombatStartPage from "./pages/CombatStartPage";
import AttackPage from "./pages/AttackPage";
import ResultsPage from "./pages/ResultsPage";

export default function MonsterDialog({ monster }: { monster?: Monster }) {
	const [page, setPage] = useState<Page>("main");

	return (
		<dialog id="monster_dialog" className="modal">
			<div className="modal-box w-11/12 max-w-7xl p-0">
				<div className="flex w-full h-full items-center justify-center">
					{page == "combat-start" ? (
						<CombatStartPage monster={monster} setPage={setPage} />
					) : page == "attack" ? (
						<AttackPage monster={monster} setPage={setPage} />
					) : page == "results" ? (
						<ResultsPage monster={monster} setPage={setPage} />
					) : (
						<MainPage monster={monster} setPage={setPage} />
					)}
				</div>
			</div>
			<form
				method="dialog"
				className="modal-backdrop"
				onClick={() => {
					setPage("main");
				}}
			>
				<button>close</button>
			</form>
		</dialog>
	);
}
