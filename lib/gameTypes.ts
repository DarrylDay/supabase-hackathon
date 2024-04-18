import { Database } from "@/lib/schema";
export type Monster = Database["public"]["Tables"]["monsters"]["Row"];
export type Page = "main" | "combat-start";