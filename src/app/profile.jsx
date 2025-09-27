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

const LinkedInIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const UserIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const DocumentTextIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5-3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0-1.125.504-1.125 1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const WrenchScrewdriverIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
);

const TrophyIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25s4.544.16 6.75.471v1.515M18.75 4.236c.982.143 1.954.317 2.916.52a6.003 6.003 0 01-4.395 5.972M18.75 4.236V4.5a9.042 9.042 0 01-2.48 5.228m2.48-5.228V2.721a47.505 47.505 0 00-6.75-.471C8.544.16 6.29.321 4.044.632v1.515M18.75 4.236a9.014 9.014 0 00-2.48 5.228" />
  </svg>
);

const ChatBubbleLeftRightIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.740.194V21l4.155-4.155" />
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
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-50"
          style={{ backgroundImage: 'url(images/background.jpg)' }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/70 via-sky-50/70 to-violet-50/70" />
        <div className="mx-auto max-w-6xl px-6 py-9 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-center gap-8">
            <img
              src="images/profile.jpeg"
              alt="Profile headshot placeholder"
              className="h-28 w-28 md:h-36 md:w-36 rounded-full object-cover ring-4 ring-white shadow-lg"
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-700">
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
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-2 text-white font-medium shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-1 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <CalendarIcon />
                  Schedule Appointment
                </a>
                <a
                  href="mailto:yshraddha92@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-3 py-2 text-white font-medium shadow-lg hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl hover:-translate-y-1 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <EmailIcon />
                  yshraddha92@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/shraddhayamyar/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-2 text-white font-medium shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:-translate-y-1 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
                <a
                  href="https://shraddhayamyar.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-2 text-white font-medium shadow-lg hover:from-violet-600 hover:to-purple-700 hover:shadow-xl hover:-translate-y-1 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <GlobeIcon />
                  shraddhayamyar.com
                </a>
                <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 px-3 py-2 text-white font-medium shadow-lg hover:from-orange-500 hover:to-amber-600 hover:shadow-xl hover:-translate-y-1 transform hover:scale-105 transition-all duration-300 ease-in-out">
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
      <section id="about" className="mx-auto max-w-6xl px-6 pt-6 pb-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold">
            <UserIcon />
            About
          </h2>
          <hr className="h-px my-4 bg-gray-200 border-0" />
          <p className="mt-3 text-neutral-700 leading-7">
            Embedded Hardware Design Engineer with 3+ years of experience in automotive safety systems. Skilled in
            circuit design, PCB development, hardware validation, and microcontroller interfacing (CAN, LIN, SPI, I²C).
            Interested in functional safety, embedded system reliability, and design optimization, with a solid grasp of
            requirement analysis, HW/SW integration, design calculations, simulation, PCB layout, and test methodologies.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 pt-6 pb-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold">
                <BriefcaseIcon />
                Experience
              </h2>
              <hr className="h-px my-4 bg-gray-200 border-0" />
              <div className="mt-6 grid gap-6">
                  {EXPERIENCE.map((exp) => (
                      <article key={exp.company} className=" bg-white  ring-black/5">
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
                                  <div key={sp.name} className="rounded-xl bg-neutral-50 p-4 ring-1 ring-black/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-in-out">
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
          </div>
      </section>

        {/* Education & Certifications */}
      <section id="education" className="mx-auto max-w-6xl px-6 pt-6 pb-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold">
              <AcademicCapIcon />
              Education
            </h2>
            <hr className="h-px my-4 bg-gray-200 border-0" />
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

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold">
              <DocumentTextIcon />
              Certifications
            </h2>
            <hr className="h-px my-4 bg-gray-200 border-0" />
            <ul className="mt-4 list-disc pl-6 space-y-2 text-neutral-800">
              {CERTS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills & Awards */}
      <section id="skills" className="mx-auto max-w-6xl px-6 pt-3 pb-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold">
              <WrenchScrewdriverIcon />
              Skills
            </h2>
            <hr className="h-px my-4 bg-gray-200 border-0" />
            <div className="mt-4 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className="rounded-lg bg-neutral-100 px-3 py-1 text-sm ring-1 ring-black/5">{t}</span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold">
              <TrophyIcon />
              Awards & Extras
            </h2>
            <hr className="h-px my-4 bg-gray-200 border-0" />
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
      <section id="contact" className="mx-auto max-w-6xl px-6 pt-3 pb-12">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold">
            <ChatBubbleLeftRightIcon />
            Get in touch
          </h2>
          <hr className="h-px my-4 bg-gray-200 border-0" />
          <p className="mt-3 text-neutral-700">Open to opportunities in embedded hardware, validation, and functional safety.</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-white font-medium shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-1 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                  <CalendarIcon />
                  Schedule Appointment
              </a>
              <a
                  href="mailto:yshraddha92@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-3 py-2 text-white font-medium shadow-lg hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl hover:-translate-y-1 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                  <EmailIcon />
                  yshraddha92@gmail.com
              </a>
              <a
                  href="https://shraddhayamyar.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-2 text-white font-medium shadow-lg hover:from-violet-600 hover:to-purple-700 hover:shadow-xl hover:-translate-y-1 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                  <GlobeIcon />
                  shraddhayamyar.com
              </a>
            <a 
              href="./images/ShraddhaYamyarResume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-2 text-white font-medium shadow-lg hover:from-rose-600 hover:to-pink-700 hover:shadow-xl hover:-translate-y-1 transform hover:scale-105 transition-all duration-300 ease-in-out"
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
