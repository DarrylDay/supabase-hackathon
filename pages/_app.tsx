import { supabase } from "@/lib/initSupabase";
import "@/styles/app.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<SessionContextProvider supabaseClient={supabase}>
			<Component {...pageProps} />
			<SpeedInsights route={router.pathname} />
			<Analytics />
		</SessionContextProvider>
	);
}
