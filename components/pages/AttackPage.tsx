import { Monster, Page } from "@/lib/gameTypes";
import MonsterPanel from "../MonsterPanel";

export default function AttackPage({
	monster,
	setPage,
}: {
	monster?: Monster;
	setPage: (page: Page) => void;
}) {
	return (
		<div className="flex flex-grow flex-row justify-center gap-6 p-12 bg-center bg-cover bg-[url('https://fkntwkyhospseypicffr.supabase.co/storage/v1/object/public/game-assets/City_Backdrop.jpg')]">
			<MonsterPanel
				monster={monster}
				attack={true}
				onAttackDone={() => {
					setPage("results");
				}}
			/>
		</div>
	);
}
