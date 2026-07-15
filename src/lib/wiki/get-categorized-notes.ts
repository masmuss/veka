import { getCollection } from "astro:content";

export interface CategorizedNote {
  name: string;
  notes: Array<{
    id: string;
    title: string;
    description: string;
    growthStage: string;
    updatedAt: Date;
  }>;
}

export async function getCategorizedNotes(): Promise<CategorizedNote[]> {
  const allNotes = await getCollection("wiki");

  const grouped = allNotes.reduce(
    (acc, note) => {
      const category = note.id === "index" ? "overview" : note.id.split("/")[0];
      if (!acc[category]) acc[category] = [];
      acc[category].push({
        id: note.id,
        title: note.data.title,
        description: note.data.description || "",
        growthStage: note.data.growthStage || "",
        updatedAt: note.data.updatedAt,
      });
      return acc;
    },
    {} as Record<string, CategorizedNote["notes"]>,
  );

  return Object.entries(grouped)
    .map(([name, notes]) => ({
      name,
      notes: notes.sort(
        (a, b) => b.updatedAt.valueOf() - a.updatedAt.valueOf(),
      ),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
