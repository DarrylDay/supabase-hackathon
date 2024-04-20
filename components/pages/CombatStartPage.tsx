import { Monster, Page } from "@/lib/gameTypes";

export default function CombatStartPage({
	monster,
	setPage,
}: {
	monster?: Monster;
	setPage: (page: Page) => void;
}) {
	return (
		<div className="flex flex-grow flex-col items-center justify-center gap-6 p-12 text-center bg-blue-100">
			<p className="font-game font-black text-8xl text-blue-800">
				COMBAT START
			</p>
			<div className="flex flex-row items-center gap-4">
				<div className="avatar">
					<div className="w-24 rounded-full bg-blue-500">
						<img
							className=""
							src={monster?.creature_data.img_url}
						/>
					</div>
				</div>
				<p className="font-game font-black text-4xl text-blue-800">
					VS
				</p>
				<div className="avatar">
					<div className="w-24 rounded-full">
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
			</div>
			<p className="font-game">
				To combat {monster?.creature}, you must create more love in San
				Francisco in order to defeat the negative energy.
			</p>
			<div className="indicator w-full max-w-xl mt-8">
				<span className="indicator-item indicator-start badge badge-secondary bg-blue-400 border-blue-400 p-4 -translate-x-4">
					What 3 things are you grateful for today?
				</span>
				<textarea
					placeholder="I am grateful for my cat Polar."
					className="textarea textarea-info textarea-bordered textarea-lg w-full h-44 max-w-xl pt-8 leading-tight"
				></textarea>
			</div>

			<button
				className="btn btn-primary btn-wide"
				onClick={() => setPage("attack")}
			>
				COMBAT
			</button>
		</div>
	);
}
