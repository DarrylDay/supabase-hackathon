import { Monster } from "@/lib/gameTypes";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
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
				{monster?.creature}
			</p>
			{!attack ? (
				<>
					<p className="font-game font-black text-4xl text-blue-200 text-stroke-1 text-stroke-blue-800">
						{monster?.current_hp} / {monster?.max_hp}
					</p>
					<progress
						className="progress progress-info w-56"
						value={monster?.current_hp}
						max={monster?.max_hp}
					></progress>
				</>
			) : (
				<></>
			)}

			<div className="relative flex flex-row items-center justify-center">
				<img
					className="max-w-xs w-10/12"
					src={monster?.creature_data.img_url}
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
