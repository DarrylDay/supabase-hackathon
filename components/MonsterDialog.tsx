import { Monster } from "lib/databaseTypes";

export default function MonsterDialog({ monster }: { monster?: Monster }) {
	return (
		<dialog id="monster_dialog" className="modal">
			<div className="modal-box w-11/12 max-w-7xl p-12 bg-center bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/651d/c2c6/3352c562538ce5c88b4115cbcd6a85e9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHSU-qSoHWpMaH8xFPuyt5jE60owo45vWGNS5YD41Tls~suYcMbEAsv1ZJs6otpfYLt9JrkN~8Fpm-p3Ku9mctm3B0cJ4vrC0rbu4iTG3leXGWgHaE5mbSYmBAMET-mq4ktQ-6G7SRzfXIrJY10b5LfPYanJ8QIjTGV2oVV3RtuUpFXZoUmnUPELmwcFACrbUnKBMMXv8XSzfTZZ696YKm~HLBcwxY40emRd7I6ZwR2Sfz7O03iiDlmg1IJsZou98-5pQaXiv8LGCpw~qY2MGSrXc3j94~7nZyXxWPjLNtCCpT0qdNx2ELPAQCUqQ2ocyJv07tQyfAsTlFE6MZcxHw__')]">
				{/* <div className="modal-action">
					<form method="dialog">
						<button className="btn">X</button>
					</form>
				</div> */}
				<div className="flex w-full h-full items-center justify-center">
					<div className="flex flex-grow flex-row justify-center gap-6">
						<div className="flex-1 flex flex-col justify-center text-center items-center gap-6">
							<p className="font-game font-black text-8xl text-blue-200 text-stroke-2 text-stroke-blue-800">
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
							<img
								className="max-w-xs w-10/12"
								src="https://s3-alpha-sig.figma.com/img/39b7/a5f8/84c703216f44f9e41f3dbac333305f0c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMbyXiwVzO5dNdZ1Z0en1jttXaFipI58LALUlleqgLWNwEUa6s0xRUfDlkUavBHkVOIJRaK8tQcj5-AZNLH1nmZ8-3c0KekJSEDUEeyT8cNFrPz1LOS3HHzIHP945kmBdYm~KvkYf81gO-QmO6Ln9DKBFC9iEygQXd9Y70UYWRR7BG2O6Miu2G9g32AF0owuq9gTuxSXwlFwiZ8BjjlNrzDvVdUB5vxeQH8W6XwLHLAnBtqGMaEZHjcnhUwibhWOqtb8yS5qYQuVRX8Wimq2baVwn9hQEutbdteBeC23te~E7A~y7M77MCy4YrLbM7jKt39reQpMichn8nFSPKmH~Q__"
							/>
						</div>
						<div className="flex-1 flex flex-col justify-center items-center gap-6">
							<div className="card w-11/12 bg-blue-200 border-blue-600 border-4">
								<div className="card-body flex flex-col gap-6 p-8">
									<div className="flex flex-row items-center">
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
									</div>
									<p>
										Pleaser has the ability to morph into
										any form. The more it morphs, the darker
										it grows and the more resentment it
										grows, because it grows farther from its
										original shape.
									</p>
									<p>
										Neutralize Pleaser and discover its
										secrets before Pleaser goes out of
										control
									</p>
									<button className="btn btn-primary">
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

				{/* <div className="flex flex-col items-center">
					<div>01</div>
					<div>02</div>
					<div>03</div>
				</div> */}
				{/* <h3 className="font-bold text-lg">{monster?.name}</h3> */}
			</div>
		</dialog>
	);
}
