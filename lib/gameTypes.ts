import { Database, Tables } from "@/lib/schema";
export type Monster = Tables<'monsters'> & {
    creature_data: Tables<'creature_data'>
};
export type Page = "main" | "combat-start" | "attack" | "results";