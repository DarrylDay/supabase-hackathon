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
				onAttackDone={async () => {
					//fetch("http://localhost:3000/api/heal/" + monster?.id);
					fetch(
						"https://supabase-hackathon-six.vercel.app/api/heal/" +
							monster?.id
					);
					setPage("results");
				}}
			/>
		</div>
	);
}
