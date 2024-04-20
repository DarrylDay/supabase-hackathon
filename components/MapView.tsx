import { Database } from "@/lib/schema";
import { Session, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useCallback, useEffect, useState } from "react";
import Map, { Popup, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Monster } from "@/lib/gameTypes";
import MonsterDialog from "./MonsterDialog";

export default function MapView() {
	const [cursor, setCursor] = useState<string>("auto");
	const supabase = useSupabaseClient<Database>();
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [monster, setMonster] = useState<Monster | undefined>();

	const onMouseEnter = useCallback(() => setCursor("pointer"), []);
	const onMouseLeave = useCallback(() => setCursor("auto"), []);

	const markers = monsters.map((x) => {
		return (
			<Marker
				key={x.id}
				longitude={x.long}
				latitude={x.lat}
				onClick={() => onClickMonster(x)}
			>
				<img
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
					width={100}
					src={x.creature_data.img_url}
				/>
			</Marker>
		);
	});

	//const user = session.user;

	const onClickMonster = (monster: Monster) => {
		console.log(monster.name);
		setMonster(monster);
		const el = document.getElementById("monster_dialog");
		if (el) {
			(el as any).showModal();
		}
	};

	useEffect(() => {
		const fetchTodos = async () => {
			const { data: monsters, error } = await supabase
				.from("monsters")
				.select("*, creature_data:creature_data(*)")
				.eq("active", true)
				.returns<Monster[]>();

			console.log(monsters);

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
					longitude: -122.435,
					latitude: 37.77,
					zoom: 12.5,
				}}
				cursor={cursor}
				mapStyle="mapbox://styles/mapbox/streets-v9"
			>
				{markers}
			</Map>
			<MonsterDialog monster={monster} />
		</>
	);
}
