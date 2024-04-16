import { Database } from "@/lib/schema";
import { Session, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Map, { Popup, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

type Monster = Database["public"]["Tables"]["monsters"]["Row"];

export default function MapView() {
	const supabase = useSupabaseClient<Database>();
	const [monsters, setMonsters] = useState<Monster[]>([]);

	const markers = monsters.map((x) => {
		return (
			<Marker
				key={x.id}
				longitude={x.long}
				latitude={x.lat}
				offset={[-25, -25]}
			>
				<img width={50} src="./fat-round-monster.svg" />
			</Marker>
		);
	});

	//const user = session.user;

	useEffect(() => {
		const fetchTodos = async () => {
			const { data: monsters, error } = await supabase
				.from("monsters")
				.select("*")
				.order("id", { ascending: true });

			if (error) console.log("error", error);
			else setMonsters(monsters);
		};

		fetchTodos();
	}, [supabase]);

	return (
		<>
			<Map
				mapboxAccessToken="pk.eyJ1IjoiZGFycnlsZGF5MTYiLCJhIjoiY2w5b2lmMGN0MGZzbjN1bXp4eHdudzI0NyJ9.WFEHWCCf49Oh08LsWK-ePQ"
				initialViewState={{
					longitude: -122.4,
					latitude: 37.8,
					zoom: 14,
				}}
				mapStyle="mapbox://styles/mapbox/streets-v9"
			>
				{markers}
			</Map>
		</>
	);
}
