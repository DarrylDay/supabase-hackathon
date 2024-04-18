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
							src="https://s3-alpha-sig.figma.com/img/39b7/a5f8/84c703216f44f9e41f3dbac333305f0c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMbyXiwVzO5dNdZ1Z0en1jttXaFipI58LALUlleqgLWNwEUa6s0xRUfDlkUavBHkVOIJRaK8tQcj5-AZNLH1nmZ8-3c0KekJSEDUEeyT8cNFrPz1LOS3HHzIHP945kmBdYm~KvkYf81gO-QmO6Ln9DKBFC9iEygQXd9Y70UYWRR7BG2O6Miu2G9g32AF0owuq9gTuxSXwlFwiZ8BjjlNrzDvVdUB5vxeQH8W6XwLHLAnBtqGMaEZHjcnhUwibhWOqtb8yS5qYQuVRX8Wimq2baVwn9hQEutbdteBeC23te~E7A~y7M77MCy4YrLbM7jKt39reQpMichn8nFSPKmH~Q__"
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
				To combat [Monster], you must create more love in [city] in
				order to defeat the negative energy.
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
