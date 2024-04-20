import { Database } from '@/lib/schema';
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { monsterId } = req.query

    const supabase = createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '', process.env.SUPABASE_SERVICE_KEY ?? '')

    const read = await supabase
    .from("monsters")
    .select("current_hp")
    .eq("id", monsterId)
    .single()

    if (read.error) {
        res.status(500)
        return;
    }

    const newHP = read.data.current_hp-20;

    const update = await supabase
    .from('monsters')
    .update({ current_hp: newHP })
    .eq('id', monsterId)
    .select();

    if (update.error) {
        res.status(500)
        return;
    }

    if (newHP <= 0) {
        const update2 = await supabase
        .from('monsters')
        .update({ active: false })
        .eq('id', monsterId)
        .select();

        if (update2.error) {
            res.status(500)
            return;
        }
    }

    res.status(200)
}
