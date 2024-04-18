// @ts-nocheck
import { useEffect, useState } from "react";

export default function CountdownTimer() {
	const [timeToMidnight, setTimeToMidnight] = useState(
		calculateTimeToMidnight()
	);

	// Function to calculate time remaining until midnight
	function calculateTimeToMidnight() {
		const now = new Date();
		const midnight = new Date(now); // Clone current date
		midnight.setHours(24, 0, 0, 0); // Set to midnight (24:00:00:000)

		return midnight.getTime() - now.getTime(); // Time difference in milliseconds
	}

	// Update timeToMidnight every second using useEffect
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeToMidnight(calculateTimeToMidnight());
		}, 1000);

		// Clean up timer on component unmount
		return () => clearInterval(timer);
	}, []);

	function getHours(milliseconds: number) {
		const totalSeconds = Math.floor(milliseconds / 1000);
		return Math.floor(totalSeconds / 3600);
	}

	function getMins(milliseconds: number) {
		const totalSeconds = Math.floor(milliseconds / 1000);
		return Math.floor((totalSeconds % 3600) / 60);
	}

	return (
		<div className="fixed left-8 top-8 card bg-gray-800 border-white border-4 shadow-xl text-white">
			<div className="card-body p-6">
				<p className="text-center mb-2 font-game">
					TIME TO SAVE SAN FRANCISCO
				</p>
				<div className="flex gap-5 justify-center font-game">
					<div>
						<span className="countdown font-mono text-4xl">
							<span
								style={{ "--value": getHours(timeToMidnight) }}
								xw
							></span>
						</span>
						hours
					</div>
					<div>
						<span className="countdown font-mono text-4xl">
							<span
								style={{ "--value": getMins(timeToMidnight) }}
							></span>
						</span>
						min
					</div>
				</div>
			</div>
		</div>
	);
}
