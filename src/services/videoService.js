import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://hbngmeoaeglqsiovczrr.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhibmdtZW9hZWdscXNpb3ZjenJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM5MTU2NjAsImV4cCI6MTk4OTQ5MTY2MH0.YIj5PVZic1KXMk7eneL70HQE1DHBK_R1v-9ktdbc6EU"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*")
        },

        getAllFavorites() {
            return supabase.from("aluratubes")
                .select("*")
        }
    }
}