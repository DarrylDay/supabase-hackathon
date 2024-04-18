import { Monster } from "@/lib/gameTypes";
import Lottie, { LottieRef, LottieRefCurrentProps } from "lottie-react";
import fireHeartAnimation from "../public/lotties/strings_of_hearts_win_combat.json";
import { useEffect, useRef } from "react";

export default function MonsterPanel({
	monster,
	attack,
	onAttackDone,
}: {
	monster?: Monster;
	attack?: boolean;
	onAttackDone?: () => void;
}) {
	const lottieRef = useRef<LottieRefCurrentProps | null>(null);

	useEffect(() => {
		if (attack) {
			lottieRef.current?.play();
		}

		return () => {
			lottieRef.current?.destroy();
		};
	});

	return (
		<div className="flex-1 flex flex-col justify-center text-center items-center gap-6">
			{/* <p className="animate-fadeInOut">-20 HP</p> */}
			<p className="font-game font-black text-8xl text-blue-800">
				{/* {monster?.name} */}
				PLEASER
			</p>
			<p className="font-game font-black text-4xl text-blue-200 text-stroke-1 text-stroke-blue-800">
				400 / 500
			</p>
			<progress
				className="progress progress-info w-56"
				value={80}
				max="100"
			></progress>
			<div className="relative flex flex-row items-center justify-center">
				<img
					className="max-w-xs w-10/12"
					src="https://s3-alpha-sig.figma.com/img/39b7/a5f8/84c703216f44f9e41f3dbac333305f0c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMbyXiwVzO5dNdZ1Z0en1jttXaFipI58LALUlleqgLWNwEUa6s0xRUfDlkUavBHkVOIJRaK8tQcj5-AZNLH1nmZ8-3c0KekJSEDUEeyT8cNFrPz1LOS3HHzIHP945kmBdYm~KvkYf81gO-QmO6Ln9DKBFC9iEygQXd9Y70UYWRR7BG2O6Miu2G9g32AF0owuq9gTuxSXwlFwiZ8BjjlNrzDvVdUB5vxeQH8W6XwLHLAnBtqGMaEZHjcnhUwibhWOqtb8yS5qYQuVRX8Wimq2baVwn9hQEutbdteBeC23te~E7A~y7M77MCy4YrLbM7jKt39reQpMichn8nFSPKmH~Q__"
				/>
				<Lottie
					className="absolute inset-0"
					animationData={fireHeartAnimation}
					loop={false}
					autoplay={false}
					lottieRef={lottieRef}
					onComplete={onAttackDone}
				/>
			</div>
		</div>
	);
}
