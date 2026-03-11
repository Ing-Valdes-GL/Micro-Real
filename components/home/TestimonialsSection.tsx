import { getTestimonials } from "@/lib/supabase/queries/testimonials";

const FALLBACK_TESTIMONIALS = [
  {
    author: "Sam",
    role: "Verified Customer",
    product_name: "Breath of Brahma (Cartridge)",
    content:
      "Wonderful communication, prompt and professional service – far exceeded expectations :)",
  },
  {
    author: "Tiffany Van Dyke",
    role: "Verified Customer",
    product_name: "Serenity Daily Capsules",
    content:
      "If you've found this site – please know that spirit is about to do a new thing in your life. These capsules are perfect for a serene morning and connecting with intelligence that loves you…",
  },
  {
    author: "Ethan Maunupau",
    role: "Verified Customer",
    product_name: "Mushroom Capsules",
    content:
      "Wonderful communication, prompt and professional service – far exceeded expectations :)",
  },
  {
    author: "SC",
    role: "Verified Customer",
    product_name: "Mushrooms",
    content:
      "Wife and i have loved the common plane it puts us on and enables a deeper connection",
  },
  {
    author: "Jonathan Krech",
    role: "Verified Customer",
    product_name: "Love Chew Gummies PLUS (Green Apple)",
    content:
      "Love Chews Green Apple. What can I say. They are amazing. Being able to micro dose this has changed my wife's and I lives around. First, they taste amazing. 2nd, they are the real deal…",
  },
  {
    author: "Xavier Sanchez",
    role: "Verified Customer",
    product_name: "LSD & Ecstacy",
    content:
      "Amazing product, took longer than expected to kick in but was incredible when it did",
  },
];

export async function TestimonialsSection() {
  const testimonials = await getTestimonials();
  const list = testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS;

  return (
    <section className="border-b border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-white">
          TESTIMONIALS!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Love by Our Community.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t, i) => (
            <div
              key={i}
              className="rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <p className="text-gray-300">&ldquo;{t.content}&rdquo;</p>
              <p className="mt-3 text-sm font-semibold text-mrs-gold">
                {t.author}
              </p>
              <p className="text-xs text-gray-500">{t.role}</p>
              <p className="mt-1 text-xs text-gray-500">{t.product_name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
