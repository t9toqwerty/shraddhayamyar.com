import React from "react";

// Icon components (using Heroicons style)
const CalendarIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25m3 6.75H3m18 0v8.25a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V9.75zM12 12.75h.007v.008H12v-.008z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.003 9.003 0 008.716-11.337A9.003 9.003 0 0012 3c-4.97 0-9 4.03-9 9s4.03 9 9 9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.354a4 4 0 11-6 0M15 9.354c-.756.05-1.45.725-1.45 1.646 0 .921.694 1.596 1.45 1.646M9 9.354c.756.05 1.45.725 1.45 1.646 0 .921-.694 1.596-1.45 1.646" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

// --- Shraddha Portfolio One-Pager ---
// Tech: React + TailwindCSS
// Notes:
// 1) Replace placeholder headshot URL if you have a photo.
// 2) Update links if needed. All content populated from the provided resume.
// 3) This is a single-file site. You can export as static HTML via frameworks like Next.js or Vite.

const TAGS = [
  "Embedded HW design & development",
  "PCB design & layout",
  "Circuit simulation & calculation",
  "Testing & validation",
  "CAN / LIN / SPI / I²C",
  "EMC/EMI",
  "ASIL-B",
  "Altium Designer",
  "Requirement traceability",
];

const EXPERIENCE = [
  {
    company: "ZF - LIFETEC",
    role: "Senior Hardware Developer",
    period: "Apr 2022 – Present",
    location: "Hyderabad, India",
    bullets: [
      "Authored Hardware Qualification Test Specifications at ECU level with Requirement-Based Specifications (RBS).",
      "Developed Hardware Integration Test Specifications including ECU electrical tests and thermal verification.",
      "Designed step-by-step procedures for electrical & environmental stress testing aligned to automotive safety standards.",
      "Collaborated cross-functionally to align validation with system requirements, improving coverage & traceability.",
    ],
    subprojects: [
      {
        name: "Core JLR EMA (Electrified Modular Architecture)",
        bullets: [
          "Primary HW developer for Active Seatbelt Retractor ECU (NXP S32K).",
          "Delivered complete schematics & PCB layouts in Altium Designer; optimized for EMC/EMI & signal integrity.",
          "Developed & validated CAN communication circuit meeting JLR requirements.",
          "Implemented design calculations, derating, current analysis, and automated documentation.",
          "Completed JLR Grade Review & ASPICE reviews; achieved ASIL‑B compliance.",
          "Designed & validated oscillator circuits; performed capacitance monitoring & value optimization.",
        ],
      },
      {
        name: "Core Electronic – Locking",
        bullets: [
          "BOM analysis for Audi PPC projects; second-source component identification.",
          "Generated electronic part numbers & managed PLM Windchill data; shared annotated BOMs with EMS suppliers.",
        ],
      },
      {
        name: "Component Engineering",
        bullets: [
          "Executed hardware integration testing to validate design performance & compliance.",
          "Analyzed real-time ECU behavior; provided design feedback & recommendations.",
          "Supported prototype → production readiness with comprehensive test coverage & traceability.",
        ],
      },
      {
        name: "VW GenX & Scania Hero (Application Projects for HOD Gen2)",
        bullets: [
          "Contributed to application-based development for HOD Gen2 ECUs.",
          "Executed complete test build process, validation reports, and ALM Windchill test sessions.",
        ],
      },
      {
        name: "Core Modular ECU",
        bullets: [
          "(Summary placeholder) Additional modular ECU responsibilities; details available on request.",
        ],
      },
      {
        name: "Other Projects",
        bullets: [
          "(Summary placeholder) Miscellaneous embedded HW tasks across safety & reliability.",
        ],
      },
    ],
  },
];

const EDUCATION = [
  { school: "Savitribai Phule Pune University", degree: "MBA in Finance (Pursuing)", period: "—" },
  { school: "Savitribai Phule Pune University", degree: "B.Tech (Electronics & Telecommunication)", period: "2021" },
];

const CERTS = [
  "Programming for Everybody (Python) – University of Michigan (Coursera)",
  "Master Embedded Driver Development – Udemy",
  "Embedded C Programming – Udemy",
  "Simulink for Mechanical & Electrical Engineers – Skill-Lync",
  "Garnishing Talent Program – Eaton (2018–19)",
  "Altium Tool Training & Analog Design – In-house",
];

const AWARDS = ["2× ZF Shakti Award Winner", "Multiple Spot Awards – ZF Group"];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header / Hero */}
      <header className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-sky-50 to-violet-50" />
        <div className="mx-auto max-w-6xl px-6 py-9 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-center gap-8">
            <img
              src="images/profile.jpg"
              alt="Profile headshot placeholder"
              className="h-28 w-28 md:h-36 md:w-36 rounded-full object-cover ring-4 ring-white shadow-lg"
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Shraddha Yamyar
              </h1>
              <p className="mt-2 text-lg md:text-xl text-neutral-700">
                Embedded Hardware Design Engineer • Automotive Safety Systems
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-2 text-white font-medium shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <CalendarIcon />
                  Schedule Appointment
                </a>
                <a
                  href="mailto:yshraddha92@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-3 py-2 text-white font-medium shadow-lg hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <EmailIcon />
                  yshraddha92@gmail.com
                </a>
                <a
                  href="https://shraddhayamyar.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-2 text-white font-medium shadow-lg hover:from-violet-600 hover:to-purple-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <GlobeIcon />
                  shraddhayamyar.com
                </a>
                <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 px-3 py-2 text-white font-medium shadow-lg">
                  <MapPinIcon />
                  Hyderabad, India (IST)
                </div>
              </div>
            </div>
          </div>

          {/* Value prop chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span key={t} className="rounded-full bg-white/80 px-3 py-1 text-xs shadow ring-1 ring-black/5">
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-xl md:text-2xl font-bold">About</h2>
        <p className="mt-3 text-neutral-700 leading-7">
          Embedded Hardware Design Engineer with 3+ years of experience in automotive safety systems. Skilled in
          circuit design, PCB development, hardware validation, and microcontroller interfacing (CAN, LIN, SPI, I²C).
          Interested in functional safety, embedded system reliability, and design optimization, with a solid grasp of
          requirement analysis, HW/SW integration, design calculations, simulation, PCB layout, and test methodologies.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-3">
        <h2 className="text-xl md:text-2xl font-bold">Experience</h2>
        <div className="mt-6 grid gap-6">
          {EXPERIENCE.map((exp) => (
            <article key={exp.company} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">{exp.role} · {exp.company}</h3>
                  <p className="text-sm text-neutral-600">{exp.location}</p>
                </div>
                <p className="text-sm font-medium text-neutral-700">{exp.period}</p>
              </div>
              <ul className="mt-4 list-disc pl-6 text-neutral-800 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {/* Subprojects */}
              <div className="mt-6 grid gap-4">
                {exp.subprojects.map((sp) => (
                  <div key={sp.name} className="rounded-xl bg-neutral-50 p-4 ring-1 ring-black/5">
                    <h4 className="font-semibold">{sp.name}</h4>
                    <ul className="mt-2 list-disc pl-6 space-y-1 text-neutral-800">
                      {sp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-xl md:text-2xl font-bold">Education</h2>
            <ul className="mt-4 space-y-3">
              {EDUCATION.map((e, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-neutral-800" />
                  <div>
                    <p className="font-medium">{e.degree}</p>
                    <p className="text-sm text-neutral-600">{e.school} {e.period !== "—" ? `· ${e.period}` : ""}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-xl md:text-2xl font-bold">Certifications</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-neutral-800">
              {CERTS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills & Awards */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-xl md:text-2xl font-bold">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className="rounded-lg bg-neutral-100 px-3 py-1 text-sm ring-1 ring-black/5">{t}</span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-xl md:text-2xl font-bold">Awards & Extras</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-neutral-800">
              {AWARDS.map((a) => (
                <li key={a}>{a}</li>
              ))}
              <li>Content Creator for ZF‑LIFETEC Global (“ZOOM Stories”) – India location.</li>
              <li>Speaker for technical knowledge sessions; organizer for team events & inaugurations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-xl md:text-2xl font-bold">Get in touch</h2>
          <p className="mt-3 text-neutral-700">Open to opportunities in embedded hardware, validation, and functional safety.</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a 
              href="mailto:yshraddha92@gmail.com" 
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-white font-medium shadow-lg hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <EmailIcon />
              Email
            </a>
            <a 
              href="https://calendly.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-white font-medium shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <CalendarIcon />
              Schedule Appointment
            </a>
            <a 
              href="https://shraddhayamyar.com" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-2 text-white font-medium shadow-lg hover:from-violet-600 hover:to-purple-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <GlobeIcon />
              Website
            </a>
            <a 
              href="./images/ShraddhaYamyarResume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-2 text-white font-medium shadow-lg hover:from-rose-600 hover:to-pink-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <DownloadIcon />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-600">
          © {new Date().getFullYear()} Shraddha Yamyar
        </div>
      </footer>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Shraddha Yamyar",
            jobTitle: "Embedded Hardware Design Engineer",
            email: "hello@shraddhayamyar.com",
            telephone: "+91-9309962042",
            url: "https://shraddhayamyar.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressCountry: "IN",
            },
            sameAs: [],
          }),
        }}
      />
    </main>
  );
}
