

export default function Hero() {



    return (
      <section className="min-h-screen flex items-center px-7 py-20">
        <div className="w-full flex gap-16 items-center">
          {/* left side */}

          <div className="flex-1">

            <p className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
              <span className="w-3 h-[1px] bg-accent"></span>
              New Delhi, IN // Build 2.0.4
            </p>


            <h1 className="font-bold text-[72px] leading-[0.95] tracking-tighter text-text-primary mb-6">
              Mohammad Taaha <br />
              Ashraf <span className="text-accent animate-pulse">_</span>
            </h1>

            {/* 3. Role & Specialization */}
            <div className="mb-10">
              <p className="font-mono text-[13px] text-text-primary tracking-[0.2em] uppercase mb-4">
                Full-stack Engineer // Systems
              </p>

              <p className="text-[16px] text-text-secondary leading-relaxed max-w-lg">
                Specialized in building high-performance collaborative tools and
                real-time distributed systems. Currently scaling applications
                with
                <span className="text-text-primary">
                  {" "}
                  MERN, Next.js, and WebRTC
                </span>
                , while optimizing backends using{" "}
                <span className="text-text-primary"> FastAPI and C++</span>.
              </p>
            </div>


            {/* 4. Live Status Grid */}
            <div className="grid grid-cols-2 gap-8 max-w-sm mb-12 border-l border-border-subtle pl-6">
              <div>
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2">
                  Current Focus
                </p>
                <p className="text-[12px] text-text-secondary font-medium">
                  DSA Mastery // System Design
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2">
                  Main Stack
                </p>
                <p className="text-[12px] text-text-secondary font-medium">
                  TS / Node / PostgreSQL
                </p>
              </div>
            </div>

            {/* 5. CTA Buttons */}
            <div className="flex items-center gap-4">
              <button
                className="
        font-mono text-[11px] px-7 py-3.5 
        rounded-lg bg-accent text-white 
        hover:bg-opacity-90 hover:-translate-y-0.5 
        transition-all duration-200 cursor-pointer 
        shadow-lg shadow-accent/20
      "
              >
                Explore Projects //
              </button>

              <button
                className="
        font-mono text-[11px] px-7 py-3.5 
        rounded-lg border border-border-default 
        text-text-secondary hover:border-text-primary 
        hover:text-text-primary transition-all duration-200 
        cursor-pointer
      "
              >
                Get Resume.pdf
              </button>
            </div>
          </div>

          {/* right side */}
          <div></div>
        </div>
      </section>
    );
}