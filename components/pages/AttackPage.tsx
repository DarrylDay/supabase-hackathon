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
		<div className="flex flex-grow flex-row justify-center gap-6 p-12 bg-center bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/651d/c2c6/3352c562538ce5c88b4115cbcd6a85e9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHSU-qSoHWpMaH8xFPuyt5jE60owo45vWGNS5YD41Tls~suYcMbEAsv1ZJs6otpfYLt9JrkN~8Fpm-p3Ku9mctm3B0cJ4vrC0rbu4iTG3leXGWgHaE5mbSYmBAMET-mq4ktQ-6G7SRzfXIrJY10b5LfPYanJ8QIjTGV2oVV3RtuUpFXZoUmnUPELmwcFACrbUnKBMMXv8XSzfTZZ696YKm~HLBcwxY40emRd7I6ZwR2Sfz7O03iiDlmg1IJsZou98-5pQaXiv8LGCpw~qY2MGSrXc3j94~7nZyXxWPjLNtCCpT0qdNx2ELPAQCUqQ2ocyJv07tQyfAsTlFE6MZcxHw__')]">
			<MonsterPanel
				monster={monster}
				attack={true}
				onAttackDone={() => {
					console.log("done");
					setPage("results");
				}}
			/>
		</div>
	);
}
