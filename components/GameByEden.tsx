import { useEffect, useState } from "react";

export default function GameByEden() {
	return (
		<div className="fixed right-8 top-8 card bg-green-600 shadow-xl text-yellow-200">
			<div className="card-body px-6 py-2 font-eden">
				<span className="flex text-center justify-center items-center align-middle gap-3">
					<span className="text-lg">A game by</span>
					<span className="text-3xl">Eden</span>
				</span>
			</div>
		</div>
	);
}
