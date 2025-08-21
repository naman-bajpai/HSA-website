import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Header */}
      <header className="w-full border-b border-neutral-200/70 dark:border-neutral-800/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm uppercase tracking-widest text-white">Florida State University</p>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight">Hindu Student Association</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link className="hover:underline underline-offset-4" href="#about">About</Link>
            <Link className="hover:underline underline-offset-4" href="#events">Events</Link>
            <Link className="hover:underline underline-offset-4" href="#community">Community</Link>
            <Link className="hover:underline underline-offset-4" href="#contact">Contact</Link>
            <Link
              href="#join"
              className="px-4 py-2 rounded-full bg-[#782F40] text-white hover:opacity-90"
            >
              Join HSA
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="row-start-2">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#782F40]">Seminole Spirit · Community · Culture</span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Celebrate culture. Build community. <span className="text-[#782F40]">Lead with Seva.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
                HSA at FSU creates a welcoming space for students to explore Hindu traditions, celebrate festivals, and serve Tallahassee through seva (service) and leadership.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="#join" className="px-5 py-3 rounded-full bg-[#782F40] text-white text-center font-medium hover:opacity-90">Become a member</Link>
                <Link href="#events" className="px-5 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-center font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900">See upcoming events</Link>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-neutral-200/70 dark:border-neutral-800/60">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold tracking-tight">About HSA @ FSU</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Our pillars</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Culture & Festivals",
                  desc: "From Diwali and Holi to Navratri and Ganesh Utsav, we host inclusive celebrations open to all Seminoles.",
                },
                {
                  title: "Seva (Service)",
                  desc: "Volunteer drives, campus cleanups, and partnerships with local orgs to give back to Tallahassee.",
                },
                {
                  title: "Learning & Dialogue",
                  desc: "Study circles, guest speakers, and interfaith conversations that invite curiosity and respect.",
                },
                {
                  title: "Community & Leadership",
                  desc: "Weekly socials, mentorship, and opportunities to lead events and initiatives.",
                },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl border border-neutral-200/70 dark:border-neutral-800/60 hover:shadow-sm transition-shadow">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="border-t border-neutral-200/70 dark:border-neutral-800/60 bg-neutral-50 dark:bg-neutral-900/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Upcoming Events</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300">Join us this semester!</p>
              </div>
              <Link href="#calendar" className="self-start px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900">Full calendar</Link>
            </div>
          </div>
        </section>

        {/* Community */}
        <section id="community" className="border-t border-neutral-200/70 dark:border-neutral-800/60">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold tracking-tight">Find your people</h3>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                Whether you grew up with Hindu traditions or you’re new and curious, there’s a place for you in HSA. We welcome students of all backgrounds.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300 list-disc list-inside">
                <li>GroupMe & Discord to stay connected</li>
                <li>Study sessions and wellness circles</li>
                <li>Dance, music, and aarti groups</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <Link href="#join" className="px-4 py-2 rounded-full bg-[#782F40] text-white text-sm font-medium hover:opacity-90">Join now</Link>
                <Link href="#officers" className="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900">Meet the officers</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Join */}
        <section id="contact" className="border-t border-neutral-200/70 dark:border-neutral-800/60 bg-neutral-50 dark:bg-neutral-900/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
            <div>
              <h3 id="join" className="text-2xl font-bold tracking-tight">Join or contact us</h3>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                Add yourself to our mailing list and socials to get updates about meetings, events, and volunteer opportunities.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <a
                  href="https://nolecentral.dsa.fsu.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 rounded-xl bg-[#782F40] text-white text-center font-medium hover:opacity-90"
                >
                  Join on Nole Central
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-center font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900"
                >
                  Instagram
                </a>
                <a
                  href="https://groupme.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-center font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900"
                >
                  GroupMe
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="row-start-3 border-t border-neutral-200/70 dark:border-neutral-800/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-sm">© {new Date().getFullYear()} Hindu Student Association · Florida State University</p>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <Link href="#events" className="hover:underline underline-offset-4">Events</Link>
            <Link href="#contact" className="hover:underline underline-offset-4">Contact</Link>
            <a
              href="https://studentaffairs.fsu.edu/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              Student Affairs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
