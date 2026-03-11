import { getAphorisms } from "@/lib/supabase/queries/aphorisms";

const FALLBACK_APHORISMS = [
  {
    author: "TIMOTHY LEARY",
    subtitle: null,
    quote:
      '"YOU\'RE ONLY AS YOUNG AS THE LAST TIME YOU CHANGED YOUR MIND"',
  },
  {
    author: "SWAMI VIVEKANANDA (HINDU TEACHER)",
    subtitle: null,
    quote: '"THERE IS ONE GOD, MANIFEST IN COUNTLESS FORMS."',
  },
  {
    author: "OUR MISSION STATEMENT",
    subtitle: null,
    quote:
      '"OUR MISSION IS TO AWAKEN MINDS, HEAL SOULS, AND ELEVATE THE VIBRATION OF OUR PLANET."',
  },
  {
    author: "MICRO REALM SOCIETY",
    subtitle: null,
    quote:
      '"FOR THOSE SEEKING HEALING, CLARITY, AND EXPANSION—DIVINE SCIENCE SOCIETY IS YOUR SANCTUARY."',
  },
];

export async function AphorismSection() {
  const aphorisms = await getAphorisms();
  const list = aphorisms.length > 0 ? aphorisms : FALLBACK_APHORISMS;

  return (
    <section className="border-b border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-semibold uppercase tracking-wider text-mrs-gold">
          APHORISM
        </h2>
        <p className="mb-12 text-center text-sm text-gray-500">
          Wisdom of conscious living.
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((item, i) => (
            <blockquote
              key={i}
              className="rounded-lg border border-white/10 bg-white/5 p-6 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-mrs-gold">
                {(item as { author: string }).author}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {(item as { quote: string }).quote}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
