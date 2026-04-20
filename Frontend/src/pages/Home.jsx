export default function Home() {
  return (
    <section className="relative w-full bg-white overflow-hidden" style={{ minHeight: '520px' }}>

      {/* ── TOP CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center pt-14 pb-6 px-4">

        {/* Sun + left cloud */}
        <div className="absolute left-16 top-8 w-28 h-20 pointer-events-none select-none">
          <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sun */}
            <circle cx="52" cy="52" r="22" fill="#F9C74F" />
            <circle cx="52" cy="52" r="17" fill="#F9C74F" />
            {/* Cloud over sun */}
            <ellipse cx="55" cy="38" rx="28" ry="16" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
            <ellipse cx="38" cy="42" rx="18" ry="12" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
            <ellipse cx="72" cy="43" rx="16" ry="11" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Birds top-left */}
        <div className="absolute left-8 top-6 pointer-events-none select-none opacity-50">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
            <path d="M2 10 Q6 5 10 10" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M14 7 Q18 2 22 7" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M26 4 Q30 0 34 4" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        {/* Right cloud */}
        <div className="absolute right-14 top-6 w-28 h-20 pointer-events-none select-none">
          <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60" cy="38" rx="32" ry="18" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="1.5" />
            <ellipse cx="40" cy="44" rx="20" ry="13" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="1.5" />
            <ellipse cx="80" cy="45" rx="18" ry="12" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="1.5" />
            {/* Building peek */}
            <rect x="52" y="44" width="16" height="22" rx="1" fill="#BAE6FD" stroke="#7DD3FC" strokeWidth="1" />
            <rect x="56" y="48" width="4" height="5" rx="0.5" fill="#7DD3FC" />
            <rect x="62" y="48" width="4" height="5" rx="0.5" fill="#7DD3FC" />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e2d5a] text-center mt-2 mb-2 leading-tight">
          Find it, love it, live there.
        </h1>
        <p className="text-gray-400 text-base md:text-lg text-center mb-8">
          Discover luxury residential &amp; commercial projects in Nagpur
        </p>

        {/* ── SEARCH BAR ── */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row items-stretch w-full max-w-2xl overflow-hidden">
          {/* Property */}
          <div className="flex-1 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-100">
            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Property</label>
            <div className="flex items-center gap-1">
              <select className="flex-1 text-sm font-semibold text-[#1e2d5a] bg-transparent focus:outline-none cursor-pointer appearance-none">
                <option>Apartment</option>
                <option>2BHK</option>
                <option>3BHK</option>
                <option>Commercial</option>
              </select>
              <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
          {/* Location */}
          <div className="flex-1 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-100">
            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Neighbourhood</label>
            <div className="flex items-center gap-1">
              <select className="flex-1 text-sm font-semibold text-[#1e2d5a] bg-transparent focus:outline-none cursor-pointer appearance-none">
                <option>MIHAN</option>
                <option>Wardha Road</option>
                <option>Beltarodi</option>
                <option>Manish Nagar</option>
              </select>
              <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
          {/* Budget */}
          <div className="flex-1 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-100">
            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Budget</label>
            <div className="flex items-center gap-1">
              <select className="flex-1 text-sm font-semibold text-[#1e2d5a] bg-transparent focus:outline-none cursor-pointer appearance-none">
                <option>₹45L – ₹70L</option>
                <option>₹70L – ₹1Cr</option>
                <option>₹1Cr – ₹2Cr</option>
                <option>₹2Cr+</option>
              </select>
              <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
          {/* Button */}
          <div className="flex items-center px-4 py-3 md:py-0">
            <button className="w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm tracking-widest uppercase">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ── CITY SKYLINE SVG ── */}
      <div className="relative z-0 w-full" style={{ marginTop: '-10px' }}>
        <svg
          viewBox="0 0 1200 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="xMidYMax meet"
        >
          {/* Ground line */}
          <line x1="0" y1="295" x2="1200" y2="295" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* ══ LEFT SKYLINE ══ */}

          {/* Far-left tall skyscraper */}
          <rect x="10" y="80" width="38" height="215" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          {[100,120,140,160,180,200,220,240,260].map(y => (
            <g key={y}>
              <rect x="15" y={y} width="8" height="10" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="27" y={y} width="8" height="10" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="39" y={y} width="7" height="10" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
            </g>
          ))}
          {/* Antenna */}
          <line x1="29" y1="80" x2="29" y2="55" stroke="#94A3B8" strokeWidth="1.5"/>
          <circle cx="29" cy="53" r="3" fill="#94A3B8"/>

          {/* Water tower */}
          <rect x="58" y="170" width="28" height="125" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          <ellipse cx="72" cy="155" rx="18" ry="10" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5"/>
          <rect x="66" y="145" width="12" height="25" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5"/>
          <line x1="58" y1="175" x2="72" y2="165" stroke="#94A3B8" strokeWidth="1"/>
          <line x1="86" y1="175" x2="72" y2="165" stroke="#94A3B8" strokeWidth="1"/>
          {[185,205,225,250,270].map(y => (
            <rect key={y} x="63" y={y} width="7" height="9" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
          ))}

          {/* Mid-left building with amber accent */}
          <rect x="95" y="130" width="55" height="165" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          <rect x="95" y="130" width="8" height="165" rx="1" fill="#FCD34D" opacity="0.6"/>
          {[145,165,185,205,225,245,265].map(y => (
            <g key={y}>
              <rect x="108" y={y} width="9" height="12" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="121" y={y} width="9" height="12" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="134" y={y} width="9" height="12" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
            </g>
          ))}
          {/* Roof detail */}
          <rect x="110" y="118" width="30" height="14" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>

          {/* Small house left */}
          <rect x="158" y="210" width="42" height="85" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          <polygon points="158,210 179,188 200,210" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          <rect x="168" y="240" width="10" height="14" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
          <rect x="182" y="240" width="10" height="14" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
          <rect x="168" y="260" width="10" height="14" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
          <rect x="182" y="260" width="10" height="14" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
          {/* Door */}
          <rect x="174" y="272" width="10" height="23" rx="1" fill="#14B8A6" opacity="0.5" stroke="#14B8A6" strokeWidth="1"/>

          {/* Brownstone left */}
          <rect x="208" y="185" width="50" height="110" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          <rect x="208" y="185" width="50" height="6" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
          {[198,210,225].map(y => (
            <g key={y}>
              <rect x="215" y={y} width="10" height="13" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="230" y={y} width="10" height="13" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="245" y={y} width="10" height="13" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
            </g>
          ))}
          <rect x="224" y="260" width="10" height="35" rx="1" fill="#14B8A6" opacity="0.4" stroke="#14B8A6" strokeWidth="1"/>

          {/* ══ LEFT TREES ══ */}
          {/* Tree 1 */}
          <rect x="268" y="255" width="5" height="40" rx="1" fill="#94A3B8"/>
          <ellipse cx="270" cy="245" rx="14" ry="18" fill="#14B8A6" opacity="0.85"/>
          <ellipse cx="270" cy="238" rx="10" ry="13" fill="#0D9488"/>

          {/* Tree 2 */}
          <rect x="292" y="265" width="4" height="30" rx="1" fill="#94A3B8"/>
          <ellipse cx="294" cy="255" rx="11" ry="15" fill="#14B8A6" opacity="0.85"/>
          <ellipse cx="294" cy="249" rx="8" ry="10" fill="#0D9488"/>

          {/* ══ CENTER-LEFT BUILDING ══ */}
          <rect x="310" y="160" width="60" height="135" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          {[175,195,215,235,255,270].map(y => (
            <g key={y}>
              <rect x="318" y={y} width="10" height="13" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="333" y={y} width="10" height="13" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="348" y={y} width="10" height="13" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
            </g>
          ))}
          <rect x="325" y="148" width="20" height="14" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>

          {/* ══ CENTER TREES ══ */}
          <rect x="378" y="258" width="5" height="37" rx="1" fill="#94A3B8"/>
          <ellipse cx="380" cy="247" rx="15" ry="19" fill="#14B8A6" opacity="0.85"/>
          <ellipse cx="380" cy="240" rx="11" ry="13" fill="#0D9488"/>

          <rect x="402" y="265" width="4" height="30" rx="1" fill="#94A3B8"/>
          <ellipse cx="404" cy="254" rx="12" ry="16" fill="#14B8A6" opacity="0.85"/>
          <ellipse cx="404" cy="247" rx="9" ry="11" fill="#0D9488"/>

          {/* ══ CENTER BUILDING ══ */}
          <rect x="420" y="175" width="65" height="120" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          {[190,210,230,250,268].map(y => (
            <g key={y}>
              <rect x="428" y={y} width="11" height="13" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="444" y={y} width="11" height="13" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="460" y={y} width="11" height="13" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
            </g>
          ))}

          {/* ══ CENTER-RIGHT TREES ══ */}
          <rect x="492" y="260" width="5" height="35" rx="1" fill="#94A3B8"/>
          <ellipse cx="494" cy="249" rx="14" ry="18" fill="#14B8A6" opacity="0.85"/>
          <ellipse cx="494" cy="242" rx="10" ry="12" fill="#0D9488"/>

          <rect x="515" y="268" width="4" height="27" rx="1" fill="#94A3B8"/>
          <ellipse cx="517" cy="258" rx="11" ry="15" fill="#14B8A6" opacity="0.85"/>
          <ellipse cx="517" cy="252" rx="8" ry="10" fill="#0D9488"/>

          {/* ══ RIGHT SKYLINE ══ */}

          {/* Right brownstone row */}
          <rect x="535" y="195" width="48" height="100" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          <rect x="535" y="195" width="48" height="6" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
          {[208,225,245,265].map(y => (
            <g key={y}>
              <rect x="542" y={y} width="9" height="12" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="556" y={y} width="9" height="12" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="570" y={y} width="9" height="12" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
            </g>
          ))}
          <rect x="553" y="268" width="10" height="27" rx="1" fill="#14B8A6" opacity="0.4" stroke="#14B8A6" strokeWidth="1"/>

          {/* Right mid building amber */}
          <rect x="592" y="155" width="58" height="140" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          <rect x="592" y="155" width="8" height="140" rx="1" fill="#FCD34D" opacity="0.5"/>
          {[170,190,210,230,250,268].map(y => (
            <g key={y}>
              <rect x="605" y={y} width="10" height="13" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="620" y={y} width="10" height="13" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="635" y={y} width="10" height="13" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
            </g>
          ))}
          <rect x="608" y="143" width="28" height="14" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>

          {/* Right water tower */}
          <rect x="660" y="175" width="26" height="120" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          <ellipse cx="673" cy="162" rx="17" ry="9" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5"/>
          <rect x="667" y="153" width="12" height="22" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5"/>
          <line x1="660" y1="178" x2="673" y2="168" stroke="#94A3B8" strokeWidth="1"/>
          <line x1="686" y1="178" x2="673" y2="168" stroke="#94A3B8" strokeWidth="1"/>
          {[190,210,230,255,272].map(y => (
            <rect key={y} x="664" y={y} width="7" height="9" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
          ))}

          {/* Right tall building */}
          <rect x="695" y="110" width="52" height="185" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          {[125,145,165,185,205,225,245,265].map(y => (
            <g key={y}>
              <rect x="702" y={y} width="9" height="12" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="716" y={y} width="9" height="12" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="730" y={y} width="9" height="12" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
            </g>
          ))}
          <line x1="721" y1="110" x2="721" y2="85" stroke="#94A3B8" strokeWidth="1.5"/>
          <circle cx="721" cy="83" r="3" fill="#94A3B8"/>

          {/* Right arch bridge tower */}
          <rect x="756" y="140" width="30" height="155" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          <rect x="800" y="140" width="30" height="155" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          {/* Bridge cables */}
          <path d="M771 140 Q793 100 815 140" stroke="#94A3B8" strokeWidth="1.5" fill="none"/>
          <line x1="771" y1="140" x2="771" y2="90" stroke="#94A3B8" strokeWidth="1.5"/>
          <line x1="815" y1="140" x2="815" y2="90" stroke="#94A3B8" strokeWidth="1.5"/>
          {[155,175,195,215,235,255,272].map(y => (
            <g key={y}>
              <rect x="760" y={y} width="8" height="10" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="804" y={y} width="8" height="10" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
            </g>
          ))}

          {/* Far right buildings */}
          <rect x="840" y="165" width="45" height="130" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          {[180,200,220,240,260,275].map(y => (
            <g key={y}>
              <rect x="847" y={y} width="9" height="12" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="861" y={y} width="9" height="12" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="875" y={y} width="7" height="12" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
            </g>
          ))}

          <rect x="893" y="185" width="40" height="110" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          {[200,218,236,255,272].map(y => (
            <g key={y}>
              <rect x="899" y={y} width="8" height="11" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="912" y={y} width="8" height="11" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="925" y={y} width="7" height="11" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
            </g>
          ))}

          <rect x="940" y="200" width="35" height="95" rx="2" fill="white" stroke="#94A3B8" strokeWidth="1.5"/>
          {[215,232,250,268].map(y => (
            <g key={y}>
              <rect x="946" y={y} width="7" height="10" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="958" y={y} width="7" height="10" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
              <rect x="970" y={y} width="7" height="10" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
            </g>
          ))}

          {/* Far right fading buildings */}
          <rect x="982" y="175" width="42" height="120" rx="2" fill="white" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.7"/>
          {[190,210,230,250,268].map(y => (
            <g key={y}>
              <rect x="988" y={y} width="8" height="11" rx="1" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" opacity="0.7"/>
              <rect x="1001" y={y} width="8" height="11" rx="1" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" opacity="0.7"/>
              <rect x="1014" y={y} width="8" height="11" rx="1" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" opacity="0.7"/>
            </g>
          ))}

          <rect x="1030" y="195" width="38" height="100" rx="2" fill="white" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.5"/>
          <rect x="1075" y="210" width="35" height="85" rx="2" fill="white" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.35"/>
          <rect x="1116" y="220" width="84" height="75" rx="2" fill="white" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.2"/>

        </svg>
      </div>
    </section>
  )
}
