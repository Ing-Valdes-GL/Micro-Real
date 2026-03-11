import Link from "next/link";

export default function OurBeliefsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white">
        Our Beliefs About Consciousness And Mindfulness
      </h1>
      <p className="mt-6 leading-relaxed text-gray-400">
        Micro Realm Society exists for one purpose: to ignite a global
        renaissance of inner exploration, conscious evolution, and sovereign
        awakening.
      </p>
      <p className="mt-4 leading-relaxed text-gray-400">
        We stand at the threshold of a new era — a time when human beings are
        reclaiming the right to understand, expand, and transform the inner
        universe that lives within them. Our mission is to empower that journey
        by uniting two forces that were never meant to be separate: the depth
        of spiritual experience and the precision of scientific understanding.
      </p>
      <p className="mt-4 leading-relaxed text-gray-400">
        We are a movement for those who feel the quiet pull toward something
        greater — for the ones who sense that the true frontier is not out
        there, but within. We honor the ancient truth that consciousness is a
        living landscape, waiting to be explored, mapped, understood, and
        elevated. And we honor the modern truth that biology, neurochemistry,
        psychology, and human performance can illuminate this path with clarity,
        intelligence, and integrity.
      </p>
      <p className="mt-4 leading-relaxed text-gray-400">
        Our society exists at the intersection of the mystical and the
        measurable — cosmic intuition aligned with grounded insight. We reject
        the old divide between science and spirit. We choose synthesis, not
        separation. We choose evolution, not stagnation. We choose sovereignty,
        not subordination.
      </p>

      <h2 className="mt-12 text-xl font-semibold text-mrs-gold">
        Our Mission
      </h2>
      <ol className="mt-6 list-decimal space-y-6 pl-6 text-gray-400">
        <li>
          <strong className="text-gray-300">To Protect the Human Right to Inner Exploration</strong>
          <br />
          Every individual holds the innate, sovereign right to explore the
          terrain of their own consciousness. We uphold this as a fundamental
          human liberty — a right rooted in nature, history, and the very fabric
          of what it means to be alive.
        </li>
        <li>
          <strong className="text-gray-300">To Build a Framework That Honors Both Wisdom and Evidence</strong>
          <br />
          We blend spiritual insight with scientific rigor. Every practice,
          teaching, and modality we advance is shaped by both ancestral
          knowledge and contemporary research. We believe transformation is
          strongest where intuition and data align.
        </li>
        <li>
          <strong className="text-gray-300">To Support Consciousness Tools That Expand Human Potential</strong>
          <br />
          We believe in safe, intentional, guided forms of inner exploration —
          tools that awaken creativity, emotional clarity, presence, resilience,
          and connection.
        </li>
        <li>
          <strong className="text-gray-300">To Cultivate a Community of Awakened Individuals</strong>
          <br />
          This is more than an organization — it is a living ecosystem. We gather
          seekers, thinkers, healers, builders, creators, scientists, and
          mystics around a shared purpose.
        </li>
        <li>
          <strong className="text-gray-300">To Normalize the Inner Journey</strong>
          <br />
          The exploration of consciousness is not fringe. It is not taboo. It is
          the next natural step in human evolution.
        </li>
        <li>
          <strong className="text-gray-300">To Uplift Humanity Through Transformation, Not Escapism</strong>
          <br />
          Our mission is not to numb, distract, or detach from life — but to
          awaken deeper engagement with it.
        </li>
        <li>
          <strong className="text-gray-300">To Anchor Everything in Integrity and Sovereignty</strong>
          <br />
          We reject dogma, hierarchy, and blind authority. We believe in
          personal agency, conscious choice, and the sovereign ability of each
          individual to shape their own evolution.
        </li>
      </ol>

      <h2 className="mt-12 text-xl font-semibold text-mrs-gold">
        What We Stand For
      </h2>
      <ul className="mt-4 list-inside list-disc space-y-2 text-gray-400">
        <li>Awakening without limitation</li>
        <li>Sovereignty without isolation</li>
        <li>Community without conformity</li>
        <li>Transformation without shame</li>
        <li>Science without reductionism</li>
        <li>Spirituality without superstition</li>
        <li>Exploration without fear</li>
        <li>Inner freedom as a fundamental human principle</li>
        <li>Conscious evolution as a birthright</li>
      </ul>

      <h2 className="mt-12 text-xl font-semibold text-mrs-gold">
        The Movement
      </h2>
      <p className="mt-4 leading-relaxed text-gray-400">
        Divine Science Society is not a brand. Not a trend. Not a fleeting idea.
        It is a movement — a call to all who feel the spark of curiosity, the
        hunger for meaning, the desire to unlock the deeper architecture of their
        own mind. It is for those who know that humanity&apos;s next evolution
        will not come from machines, governments, or institutions — but from
        awakened individuals choosing to explore the inner dimension with
        clarity, intention, and responsibility. We are here to guide that
        evolution. To protect it. To expand it. To honor it. This is your
        invitation. Your initiation. Your reminder of what you already know: The
        frontier of the future is consciousness — and it begins within you.
      </p>

      <div className="mt-12">
        <Link
          href="/shop"
          className="inline-block rounded bg-mrs-gold px-8 py-3 font-semibold text-black hover:bg-amber-500"
        >
          Shop Our Sacred Offerings
        </Link>
      </div>
    </div>
  );
}
