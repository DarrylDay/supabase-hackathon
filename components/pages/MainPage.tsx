import { Monster, Page } from "@/lib/gameTypes";
import MonsterPanel from "../MonsterPanel";

export default function MainPage({
	monster,
	setPage,
}: {
	monster?: Monster;
	setPage: (page: Page) => void;
}) {
	return (
		<div className="flex flex-grow flex-row justify-center gap-6 p-12 bg-center bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/651d/c2c6/3352c562538ce5c88b4115cbcd6a85e9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHSU-qSoHWpMaH8xFPuyt5jE60owo45vWGNS5YD41Tls~suYcMbEAsv1ZJs6otpfYLt9JrkN~8Fpm-p3Ku9mctm3B0cJ4vrC0rbu4iTG3leXGWgHaE5mbSYmBAMET-mq4ktQ-6G7SRzfXIrJY10b5LfPYanJ8QIjTGV2oVV3RtuUpFXZoUmnUPELmwcFACrbUnKBMMXv8XSzfTZZ696YKm~HLBcwxY40emRd7I6ZwR2Sfz7O03iiDlmg1IJsZou98-5pQaXiv8LGCpw~qY2MGSrXc3j94~7nZyXxWPjLNtCCpT0qdNx2ELPAQCUqQ2ocyJv07tQyfAsTlFE6MZcxHw__')]">
			<MonsterPanel />
			<div className="flex-1 flex flex-col justify-center items-center gap-6">
				<div className="indicator w-full max-w-xl mt-8">
					<span className="indicator-item indicator-start badge badge-secondary border-4 bg-blue-200 border-blue-600 p-4 -translate-x-4">
						<i className="fa-solid fa-scroll pr-2"></i> 0 / 5
						SECRETS DISCOVERED
					</span>
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
								Pleaser has the ability to morph into any form.
								The more it morphs, the darker it grows and the
								more resentment it grows, because it grows
								farther from its original shape.
							</p>
							<p>
								Neutralize Pleaser and discover its secrets
								before Pleaser goes out of control
							</p>
							<button
								className="btn btn-primary"
								onClick={() => setPage("combat-start")}
							>
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
	);
}
