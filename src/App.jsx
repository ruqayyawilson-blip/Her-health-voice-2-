import { useState } from "react";

const pages = ["Home", "The Issue", "Know Your Rights", "Self-Advocacy", "Resources"];

const conditions = [
  {
    name: "Endometriosis",
    avg: "7–10 years",
    desc: "Tissue similar to the uterine lining grows outside the uterus, causing severe pain. Average diagnosis delay: 7–10 years.",
    color: "#8B2252"
  },
  {
    name: "PCOS",
    avg: "2–3 years",
    desc: "A hormonal disorder causing irregular periods, cysts, and metabolic issues. Often dismissed as 'irregular cycles.'",
    color: "#C2547A"
  },
  {
    name: "Uterine Fibroids",
    avg: "3–5 years",
    desc: "Non-cancerous growths in the uterus causing heavy bleeding and pain. Disproportionately affects Black women.",
    color: "#6B3FA0"
  }
];

const rights = [
  {
    framework: "CEDAW",
    full: "Convention on the Elimination of All Forms of Discrimination Against Women",
    right: "States are legally obligated to eliminate discrimination in healthcare. Medical dismissal is a form of institutional gender bias — and a treaty violation.",
    icon: "⚖️"
  },
  {
    framework: "SDG 3",
    full: "Good Health & Well-Being",
    right: "The UN Sustainable Development Goals commit all member states to ensuring healthy lives and universal health coverage — including reproductive health.",
    icon: "🌍"
  },
  {
    framework: "SDG 5",
    full: "Gender Equality",
    right: "Gender equality is a global commitment. Systemic medical dismissal of women's pain is a direct violation of this international obligation.",
    icon: "✊"
  },
  {
    framework: "WHO",
    full: "World Health Organization",
    right: "WHO guidelines mandate gender-responsive healthcare. The persistent gap between these guidelines and clinical reality is a governance failure.",
    icon: "🏥"
  }
];

const tips = [
  {
    step: "01",
    title: "Document Everything",
    body: "Keep a symptom diary with dates, severity (1–10), and how symptoms affect your daily life. Written records are harder to dismiss than verbal descriptions."
  },
  {
    step: "02",
    title: "Name Your Rights",
    body: "Tell your doctor: \"Under CEDAW and WHO guidelines, I have the right to appropriate investigation of my symptoms, not just symptom management.\" You are allowed to say this."
  },
  {
    step: "03",
    title: "Reject Band-Aid Solutions",
    body: "Birth control can be valid — but not as a substitute for diagnosis. Say: \"I want to understand the cause of my symptoms, not just manage them.\""
  },
  {
    step: "04",
    title: "Request Referrals",
    body: "You have the right to ask for a specialist referral. If your GP dismisses you, ask: \"Can you refer me to a gynaecologist for further investigation?\""
  },
  {
    step: "05",
    title: "Bring a Witness",
    body: "Take a trusted person to appointments. Patients with a companion are statistically taken more seriously and less likely to be dismissed."
  },
  {
    step: "06",
    title: "Seek a Second Opinion",
    body: "If you are dismissed, you are entitled to see another doctor. It took one woman 12 doctors across 3 continents before diagnosis. You are not overreacting."
  }
];

const resources = [
  { country: "🇬🇧 UK", org: "Endometriosis UK", url: "endometriosis-uk.org", desc: "Support, helpline, and specialist finder" },
  { country: "🇺🇸 USA", org: "RESOLVE: The National Infertility Association", url: "resolve.org", desc: "Reproductive health advocacy and support" },
  { country: "🇵🇱 Poland", org: "Fundacja Endometrioza Polska", url: "endometrioza.pl", desc: "Polish endometriosis foundation and community" },
  { country: "🇿🇦 South Africa", org: "Endo Warriors SA", url: "endowarriorssa.co.za", desc: "Patient community and awareness campaigns" },
  { country: "🇿🇼 Zimbabwe", org: "Women's Action Group", url: "wag.org.zw", desc: "Women's health rights and advocacy" },
  { country: "🌍 Global", org: "UN Women", url: "unwomen.org", desc: "International gender equality & health frameworks" }
];

export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const [expandedRight, setExpandedRight] = useState(null);

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#FDF8F5",
      minHeight: "100vh",
      color: "#1a0a0f"
    }}>
      {/* Nav */}
      <nav style={{
        background: "#1a0a0f",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: "2px solid #8B2252"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "1rem 0" }}>
          <span style={{ color: "#C2547A", fontSize: "1.4rem" }}>◈</span>
          <span style={{ color: "#FDF8F5", fontWeight: "bold", fontSize: "1.1rem", letterSpacing: "0.05em" }}>HER VOICE</span>
        </div>
        <div style={{ display: "flex", gap: "0.25rem" }}>
          {pages.map(p => (
            <button
              key={p}
              onClick={() => setActivePage(p)}
              style={{
                background: activePage === p ? "#8B2252" : "transparent",
                color: activePage === p ? "#FDF8F5" : "#C2547A",
                border: "none",
                padding: "0.5rem 0.85rem",
                cursor: "pointer",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "inherit",
                borderRadius: "2px",
                transition: "all 0.2s"
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </nav>

      {/* Pages */}
      {activePage === "Home" && (
        <div>
          {/* Hero */}
          <div style={{
            background: "linear-gradient(135deg, #1a0a0f 0%, #3d1028 60%, #6B3FA0 100%)",
            padding: "5rem 3rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(194,84,122,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(107,63,160,0.2) 0%, transparent 40%)",
            }} />
            <p style={{ color: "#C2547A", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              A Global Health Governance Project
            </p>
            <h1 style={{
              color: "#FDF8F5",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: "normal",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
              maxWidth: "750px",
              margin: "0 auto 1.5rem"
            }}>
              Your pain is real.<br />
              <em style={{ color: "#C2547A" }}>Your diagnosis cannot wait.</em>
            </h1>
            <p style={{
              color: "rgba(253,248,245,0.7)",
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              fontStyle: "italic"
            }}>
              Women across the world are dismissed, delayed, and denied diagnosis for reproductive health conditions. This is not a personal failure — it is a systemic one.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => setActivePage("Know Your Rights")} style={{
                background: "#8B2252", color: "#FDF8F5", border: "none",
                padding: "0.85rem 2rem", cursor: "pointer", fontSize: "0.9rem",
                letterSpacing: "0.05em", fontFamily: "inherit", borderRadius: "2px"
              }}>Know Your Rights</button>
              <button onClick={() => setActivePage("Self-Advocacy")} style={{
                background: "transparent", color: "#FDF8F5",
                border: "1px solid rgba(253,248,245,0.4)",
                padding: "0.85rem 2rem", cursor: "pointer", fontSize: "0.9rem",
                letterSpacing: "0.05em", fontFamily: "inherit", borderRadius: "2px"
              }}>Self-Advocacy Guide</button>
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            background: "#8B2252", padding: "2.5rem 3rem", gap: "2rem",
            textAlign: "center"
          }}>
            {[
              { num: "7–10", label: "Average years to endometriosis diagnosis" },
              { num: "<2.5%", label: "Of medical research funding goes to reproductive health" },
              { num: "5", label: "Countries examined in this research" }
            ].map((s, i) => (
              <div key={i}>
                <div style={{ color: "#FDF8F5", fontSize: "2.2rem", fontWeight: "bold", marginBottom: "0.4rem" }}>{s.num}</div>
                <div style={{ color: "rgba(253,248,245,0.7)", fontSize: "0.85rem", lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* About */}
          <div style={{ padding: "4rem 3rem", maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: "#8B2252", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "1rem" }}>About this project</p>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "normal", marginBottom: "1.5rem", lineHeight: 1.3 }}>
              Medical dismissal is not just a healthcare problem. It is an international human rights failure.
            </h2>
            <p style={{ lineHeight: 1.8, color: "#3d1028", fontSize: "1rem", marginBottom: "1rem" }}>
              This platform was created as part of a social impact project at Vizja University, Faculty of International Relations. It connects the lived experiences of women facing delayed diagnosis to the international legal frameworks — CEDAW, SDG 3, SDG 5, and WHO guidelines — that states are already obligated to uphold.
            </p>
            <p style={{ lineHeight: 1.8, color: "#3d1028", fontSize: "1rem" }}>
              The goal is simple: give women the language, knowledge, and tools to advocate for themselves in medical settings — and to understand that when they are dismissed, it is a systemic failure, not a personal one.
            </p>
          </div>
        </div>
      )}

      {activePage === "The Issue" && (
        <div style={{ padding: "4rem 3rem", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#8B2252", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "1rem" }}>The Problem</p>
          <h2 style={{ fontSize: "2rem", fontWeight: "normal", marginBottom: "0.5rem" }}>The Normalization of Female Pain</h2>
          <p style={{ color: "#6b3040", marginBottom: "3rem", fontSize: "1rem", lineHeight: 1.7 }}>
            Reproductive health conditions affect millions of women worldwide. Yet diagnosis is routinely delayed by years — not because the conditions are rare or hard to detect, but because women's pain is systematically dismissed.
          </p>

          {/* Real stories */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "3rem" }}>
            {[
              {
                age: "54",
                condition: "Uterine Fibroids",
                story: "Complained of unbearable pain and heavy bleeding for years. Was repeatedly told to wait it out or try birth control. It took years before a doctor took her pain seriously enough to investigate."
              },
              {
                age: "26",
                condition: "Endometriosis",
                story: "Experienced severe, debilitating periods from age 16. Saw 12 doctors across 3 continents over 10 years. At 18, was told to go on birth control instead of receiving a diagnosis. Finally diagnosed at 26."
              }
            ].map((s, i) => (
              <div key={i} style={{
                background: "#1a0a0f", padding: "2rem", borderRadius: "4px",
                borderLeft: "3px solid #C2547A"
              }}>
                <div style={{ color: "#C2547A", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {s.age} years old · {s.condition}
                </div>
                <p style={{ color: "rgba(253,248,245,0.85)", lineHeight: 1.7, fontSize: "0.95rem", fontStyle: "italic" }}>
                  "{s.story}"
                </p>
              </div>
            ))}
          </div>

          {/* Conditions */}
          <h3 style={{ fontSize: "1.3rem", fontWeight: "normal", marginBottom: "1.5rem" }}>Commonly Dismissed Conditions</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {conditions.map((c, i) => (
              <div key={i} style={{
                borderTop: `3px solid ${c.color}`,
                background: "#fff",
                padding: "1.5rem",
                borderRadius: "2px"
              }}>
                <div style={{ color: c.color, fontWeight: "bold", marginBottom: "0.3rem" }}>{c.name}</div>
                <div style={{ fontSize: "0.75rem", color: "#8B2252", marginBottom: "0.75rem" }}>Avg. delay: {c.avg}</div>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#3d1028" }}>{c.desc}</p>
              </div>
            ))}
          </div>

          {/* What dismissal looks like */}
          <div style={{ background: "#3d1028", padding: "2.5rem", borderRadius: "4px", marginTop: "2.5rem" }}>
            <h3 style={{ color: "#FDF8F5", fontWeight: "normal", marginBottom: "1.5rem" }}>What dismissal sounds like</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {[
                '"It\'s just normal period pain."',
                '"Try birth control and see if it helps."',
                '"You\'re too young to have something like that."',
                '"Take some painkillers and come back if it gets worse."',
                '"A lot of women feel this way."',
                '"There\'s nothing showing on your scan."'
              ].map((q, i) => (
                <div key={i} style={{
                  background: "rgba(253,248,245,0.07)", padding: "0.85rem 1rem",
                  borderRadius: "2px", color: "rgba(253,248,245,0.8)",
                  fontStyle: "italic", fontSize: "0.9rem"
                }}>{q}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activePage === "Know Your Rights" && (
        <div style={{ padding: "4rem 3rem", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#8B2252", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "1rem" }}>International Legal Frameworks</p>
          <h2 style={{ fontSize: "2rem", fontWeight: "normal", marginBottom: "0.5rem" }}>Women's Rights Are Human Rights</h2>
          <p style={{ color: "#6b3040", marginBottom: "3rem", fontSize: "1rem", lineHeight: 1.7 }}>
            The right to health is not aspirational — it is a legal obligation that states have already agreed to. When you are dismissed by a doctor, international law is on your side.
          </p>

          <div style={{ display: "grid", gap: "1rem" }}>
            {rights.map((r, i) => (
              <div
                key={i}
                onClick={() => setExpandedRight(expandedRight === i ? null : i)}
                style={{
                  background: expandedRight === i ? "#1a0a0f" : "#fff",
                  border: "1px solid",
                  borderColor: expandedRight === i ? "#8B2252" : "#e8d5db",
                  padding: "1.5rem",
                  borderRadius: "3px",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{r.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontWeight: "bold",
                      color: expandedRight === i ? "#C2547A" : "#8B2252",
                      fontSize: "1rem"
                    }}>{r.framework}</div>
                    <div style={{
                      fontSize: "0.82rem",
                      color: expandedRight === i ? "rgba(253,248,245,0.6)" : "#6b3040"
                    }}>{r.full}</div>
                  </div>
                  <span style={{ color: expandedRight === i ? "#C2547A" : "#8B2252", fontSize: "1.2rem" }}>
                    {expandedRight === i ? "−" : "+"}
                  </span>
                </div>
                {expandedRight === i && (
                  <p style={{
                    color: "rgba(253,248,245,0.85)", marginTop: "1rem",
                    lineHeight: 1.7, fontSize: "0.95rem", paddingLeft: "2.5rem"
                  }}>{r.right}</p>
                )}
              </div>
            ))}
          </div>

          <div style={{
            background: "linear-gradient(135deg, #8B2252, #6B3FA0)",
            padding: "2.5rem", borderRadius: "4px", marginTop: "2.5rem",
            textAlign: "center"
          }}>
            <h3 style={{ color: "#FDF8F5", fontWeight: "normal", fontSize: "1.3rem", marginBottom: "1rem" }}>
              The Implementation Gap
            </h3>
            <p style={{ color: "rgba(253,248,245,0.85)", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
              These frameworks exist. States have signed them. Yet across the UK, USA, Poland, Zimbabwe, and South Africa — the same patterns of dismissal appear. The problem is not the absence of law. It is the absence of enforcement.
            </p>
          </div>
        </div>
      )}

      {activePage === "Self-Advocacy" && (
        <div style={{ padding: "4rem 3rem", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#8B2252", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "1rem" }}>Tools for Your Appointment</p>
          <h2 style={{ fontSize: "2rem", fontWeight: "normal", marginBottom: "0.5rem" }}>How to Advocate for Yourself</h2>
          <p style={{ color: "#6b3040", marginBottom: "3rem", fontSize: "1rem", lineHeight: 1.7 }}>
            You should not have to fight for a diagnosis. But until systems change, here is how to navigate them.
          </p>

          <div style={{ display: "grid", gap: "1rem" }}>
            {tips.map((t, i) => (
              <div key={i} style={{
                display: "flex", gap: "1.5rem", alignItems: "flex-start",
                background: "#fff", padding: "1.5rem", borderRadius: "3px",
                border: "1px solid #e8d5db"
              }}>
                <div style={{
                  background: "#8B2252", color: "#FDF8F5",
                  width: "40px", height: "40px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.75rem", fontWeight: "bold", flexShrink: 0,
                  letterSpacing: "0.05em"
                }}>{t.step}</div>
                <div>
                  <div style={{ fontWeight: "bold", marginBottom: "0.4rem", color: "#1a0a0f" }}>{t.title}</div>
                  <p style={{ color: "#3d1028", lineHeight: 1.7, fontSize: "0.93rem", margin: 0 }}>{t.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: "#1a0a0f", padding: "2rem", borderRadius: "4px",
            marginTop: "2.5rem", textAlign: "center"
          }}>
            <p style={{ color: "#C2547A", fontStyle: "italic", fontSize: "1.1rem", margin: 0, lineHeight: 1.6 }}>
              "It took one woman 12 doctors across 3 continents before she received a diagnosis.<br />
              <span style={{ color: "rgba(253,248,245,0.7)", fontSize: "0.95rem" }}>You are not overreacting. You are under-diagnosed.</span>"
            </p>
          </div>
        </div>
      )}

      {activePage === "Resources" && (
        <div style={{ padding: "4rem 3rem", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#8B2252", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "1rem" }}>Find Help</p>
          <h2 style={{ fontSize: "2rem", fontWeight: "normal", marginBottom: "0.5rem" }}>Resources by Country</h2>
          <p style={{ color: "#6b3040", marginBottom: "3rem", fontSize: "1rem", lineHeight: 1.7 }}>
            Organizations specializing in reproductive health rights across the five countries examined in this research.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {resources.map((r, i) => (
              <div key={i} style={{
                background: "#fff", padding: "1.5rem", borderRadius: "3px",
                border: "1px solid #e8d5db", borderTop: "3px solid #8B2252"
              }}>
                <div style={{ fontSize: "0.8rem", color: "#8B2252", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>{r.country}</div>
                <div style={{ fontWeight: "bold", marginBottom: "0.3rem", color: "#1a0a0f" }}>{r.org}</div>
                <div style={{ fontSize: "0.8rem", color: "#6b3040", marginBottom: "0.5rem" }}>{r.url}</div>
                <p style={{ fontSize: "0.85rem", color: "#3d1028", margin: 0, lineHeight: 1.5 }}>{r.desc}</p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "2.5rem", padding: "2rem",
            background: "#3d1028", borderRadius: "4px"
          }}>
            <h3 style={{ color: "#FDF8F5", fontWeight: "normal", marginBottom: "1rem" }}>International Bodies</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
              {[
                { name: "UN Women", url: "unwomen.org" },
                { name: "WHO — Reproductive Health", url: "who.int/reproductivehealth" },
                { name: "CEDAW Committee", url: "ohchr.org/en/treaty-bodies/cedaw" }
              ].map((r, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ color: "#C2547A", fontWeight: "bold", marginBottom: "0.25rem", fontSize: "0.9rem" }}>{r.name}</div>
                  <div style={{ color: "rgba(253,248,245,0.5)", fontSize: "0.75rem" }}>{r.url}</div>
                </div>
              ))}
            </div>
          </div>

          <p style={{
            marginTop: "2.5rem", textAlign: "center",
            color: "#6b3040", fontSize: "0.85rem", fontStyle: "italic", lineHeight: 1.7
          }}>
            This platform was created as part of a community social project at Vizja University, Faculty of International Relations, by Ruqayya Wilson (Student No. 57817). Research conducted across the UK, Zimbabwe, South Africa, USA, and Poland.
          </p>
        </div>
      )}

      {/* Footer */}
      <footer style={{
        background: "#1a0a0f", padding: "2rem 3rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        borderTop: "1px solid #3d1028", marginTop: "3rem"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ color: "#C2547A" }}>◈</span>
          <span style={{ color: "#FDF8F5", fontSize: "0.9rem" }}>HER VOICE</span>
        </div>
        <div style={{ color: "rgba(253,248,245,0.4)", fontSize: "0.78rem" }}>
          Vizja University · Faculty of International Relations · 2026
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {pages.map(p => (
            <button key={p} onClick={() => setActivePage(p)} style={{
              background: "none", border: "none", color: "rgba(253,248,245,0.4)",
              cursor: "pointer", fontSize: "0.75rem", fontFamily: "inherit",
              padding: 0
            }}>{p}</button>
          ))}
        </div>
      </footer>
    </div>
  );
}
