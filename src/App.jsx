import { useEffect, useMemo, useState } from "react";

export default function App() {
  const photos = [
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic4.jpg",
  ];

  const reasons = [
    "You make every ordinary day feel magical.",
    "Your smile instantly makes me happy.",
    "You stayed with me through everything.",
    "You are my comfort and peace.",
    "Life became brighter because of you.",
    "I can be my real self around you.",
  ];

  const timeline = [
    {
      title: "The Day We Met 💖",
      text: "The moment everything started becoming special.",
    },
    {
      title: "Our First Date 🌹",
      text: "Nervous smiles, laughs, and unforgettable memories.",
    },
    {
      title: "Becoming Official 💍",
      text: "The best decision I ever made.",
    },
    {
      title: "17th Monthsary ❤️",
      text: "Still deeply in love with you every single day.",
    },
  ];

  const [typedText, setTypedText] = useState("");
  const [showSecret, setShowSecret] = useState(false);

  const fullText = "17 months with my favorite person forever ❤️";

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const hearts = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 100,
      size: 10 + Math.random() * 30,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
    }));
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden relative">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rose-500/20 blur-[140px]" />
      </div>

      {/* FLOATING HEARTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {hearts.map((h, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${h.left}%`,
              bottom: "-50px",
              fontSize: `${h.size}px`,
              animationDelay: `${h.delay}s`,
              animationDuration: `${h.duration}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="text-center max-w-5xl">

          <div className="mb-8 inline-block px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl animate-pulse">
            <p className="tracking-[7px] uppercase text-pink-200 text-xs">
              Happy 17th Monthsary ✨
            </p>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight bg-gradient-to-r from-pink-200 via-rose-300 to-red-200 text-transparent bg-clip-text animate-glow">
            Miralovekoo ❤️
          </h1>

          <p className="mt-8 text-xl md:text-3xl text-rose-100 h-[40px]">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-rose-100 leading-relaxed animate-fadeUp">
            Thank you for loving me through every moment,
            every struggle, every laugh, and every memory.
            These 17 months became the happiest part of my life.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a
              href="#letter"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-black font-bold hover:scale-110 transition duration-300 shadow-[0_0_40px_rgba(255,105,180,0.7)] animate-heartbeat"
            >
              Open My Letter 💌
            </a>

            <a
              href="#gallery"
              className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 hover:scale-105 transition"
            >
              Our Memories 📸
            </a>
          </div>
        </div>
      </section>

      {/* LOVE COUNTER */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl text-center hover:scale-[1.02] transition duration-500">

            <h2 className="text-5xl font-black text-pink-200 mb-8">
              17 Months With You ❤️
            </h2>

            <p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto">
              17 months of love, laughter, memories, comfort,
              loyalty, and choosing each other every single day.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              <div className="bg-white/10 rounded-3xl p-6 hover:scale-105 transition shadow-xl">
                <h3 className="text-5xl font-black text-pink-200 animate-glow">
                  17
                </h3>

                <p className="mt-2 text-rose-100">
                  Months Together ❤️
                </p>
              </div>

              <div className="bg-white/10 rounded-3xl p-6 hover:scale-105 transition shadow-xl">
                <h3 className="text-5xl font-black text-pink-200 animate-glow">
                  517+
                </h3>

                <p className="mt-2 text-rose-100">
                  Beautiful Days ✨
                </p>
              </div>

              <div className="bg-white/10 rounded-3xl p-6 hover:scale-105 transition shadow-xl">
                <h3 className="text-5xl font-black text-pink-200 animate-glow">
                  12,000+
                </h3>

                <p className="mt-2 text-rose-100">
                  Hours Loving You 💖
                </p>
              </div>

              <div className="bg-white/10 rounded-3xl p-6 hover:scale-105 transition shadow-xl">
                <h3 className="text-5xl font-black text-pink-200 animate-glow">
                  ∞
                </h3>

                <p className="mt-2 text-rose-100">
                  Forever To Go 💍
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* LETTER */}
      <section
        id="letter"
        className="py-28 px-6 flex justify-center relative z-10"
      >
        <div className="max-w-4xl bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 md:p-14 shadow-2xl hover:scale-[1.02] transition duration-500">

          <h2 className="text-5xl font-black text-center text-pink-200 mb-10">
            A Letter For You 💌
          </h2>

          <div className="space-y-6 text-lg text-rose-100 leading-relaxed">
            <p>
              Hi bebiiikowww, thank you for being the best part of my life.
            </p>

            <p>
              Every day with you feels warm, peaceful, and special.
            </p>

            <p>
              I appreciate every laugh, every conversation,
              every little thing you do for me.
            </p>

            <p>
              No matter what happens,
              I will always choose you over and over again.
            </p>

            <p className="text-pink-200 font-bold text-2xl animate-pulse">
              Happy 17th Monthsary ❤️
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-28 px-6 relative z-10">
        <h2 className="text-center text-5xl font-black text-pink-200 mb-20">
          Our Story ✨
        </h2>

        <div className="max-w-5xl mx-auto relative border-l border-pink-300/20 space-y-12">
          {timeline.map((item, i) => (
            <div key={i} className="ml-10 relative group">
              <div className="absolute -left-[54px] top-3 w-7 h-7 rounded-full bg-pink-300 animate-pulse shadow-[0_0_20px_rgba(255,192,203,1)]" />

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:translate-x-3 hover:scale-[1.03] transition duration-500">
                <h3 className="text-3xl font-bold text-pink-200">
                  {item.title}
                </h3>

                <p className="mt-3 text-rose-100 text-lg">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REASONS */}
      <section className="py-28 px-6 relative z-10">
        <h2 className="text-center text-5xl font-black text-pink-200 mb-16">
          Reasons Why I Love You ❤️
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group bg-white/10 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 hover:-translate-y-4 hover:rotate-1 transition duration-500 shadow-xl"
            >
              <div className="text-5xl mb-5 group-hover:scale-125 transition animate-sparkle">
                💖
              </div>

              <p className="text-lg text-rose-100">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="py-28 px-6 relative z-10"
      >
        <h2 className="text-center text-5xl font-black text-pink-200 mb-16">
          Our Memories 📸
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-[35px] border border-white/10 relative"
            >
              <img
                src={photo}
                alt=""
                className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-xl font-bold text-white">
                  Favorite Memory ❤️
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROMISES */}
      <section className="relative z-10 py-28 px-6">

        <h2 className="text-center text-5xl font-black text-pink-200 mb-16">
          My Promises To You 💍
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {[
            "I promise to stay beside you through everything.",
            "I promise to protect your heart always.",
            "I promise to make more beautiful memories with you.",
            "I promise to love you even on difficult days.",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 hover:-translate-y-3 transition duration-500 shadow-xl"
            >
              <div className="text-5xl mb-5 animate-pulse">
                💖
              </div>

              <p className="text-xl text-rose-100 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MUSIC */}
      <section className="py-28 px-6 flex justify-center relative z-10">
        <div className="max-w-4xl w-full bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl text-center">

          <h2 className="text-5xl font-black text-pink-200 mb-10">
            Our Song 🎵
          </h2>

          <iframe
            style={{ borderRadius: "18px" }}
            src="https://open.spotify.com/embed/track/2cIxxsxXNvOXNFVvDJpF3x"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      {/* SECRET MESSAGE */}
      <section className="relative z-10 py-28 px-6 flex justify-center">

        <div className="max-w-4xl w-full text-center">

          {!showSecret ? (
            <button
              onClick={() => setShowSecret(true)}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-black text-xl font-bold hover:scale-110 transition duration-300 shadow-[0_0_40px_rgba(255,105,180,0.7)] animate-heartbeat"
            >
              Open Secret Message 💌
            </button>
          ) : (
            <div className="animate-fadeUp bg-gradient-to-br from-pink-500/20 to-rose-500/10 border border-pink-300/20 backdrop-blur-2xl rounded-[40px] p-12 shadow-[0_0_80px_rgba(255,105,180,0.3)]">

              <div className="text-7xl mb-6 animate-bounce">
                💌
              </div>

              <h2 className="text-5xl font-black text-pink-200 mb-8">
                Secret Message
              </h2>

              <p className="text-2xl leading-relaxed text-rose-100">
                If I could choose someone in every lifetime,
                every universe,
                every world...
              </p>

              <p className="mt-6 text-4xl font-black bg-gradient-to-r from-pink-200 to-rose-300 text-transparent bg-clip-text animate-glow">
                I would still choose you ❤️
              </p>

            </div>
          )}

        </div>
      </section>

      {/* FINAL */}
      <section className="min-h-[70vh] flex items-center justify-center text-center px-6 relative z-10">
        <div>

          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-200 via-rose-300 to-red-200 text-transparent bg-clip-text animate-glow">
            I Love You ❤️
          </h2>

          <p className="mt-8 text-xl text-rose-100 max-w-2xl mx-auto">
            Thank you for being part of my life.
            More memories, more laughs, more love forever.
          </p>

          <div className="mt-10 text-5xl animate-bounce">
            💖
          </div>
        </div>
      </section>

      {/* ANIMATIONS */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }

          10% {
            opacity: 0.5;
          }

          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        @keyframes glow {
          0%,100% {
            text-shadow:
              0 0 20px rgba(255,192,203,0.7),
              0 0 40px rgba(255,105,180,0.5);
          }

          50% {
            text-shadow:
              0 0 40px rgba(255,192,203,1),
              0 0 80px rgba(255,105,180,0.9);
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1.2s ease;
        }

        @keyframes sparkle {
          0%,100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.7;
          }

          50% {
            transform: scale(1.4) rotate(20deg);
            opacity: 1;
          }
        }

        .animate-sparkle {
          animation: sparkle 2s infinite;
        }

        @keyframes heartbeat {
          0%,100% {
            transform: scale(1);
          }

          25% {
            transform: scale(1.08);
          }

          50% {
            transform: scale(0.95);
          }

          75% {
            transform: scale(1.1);
          }
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s infinite;
        }
      `}</style>
    </div>
  );
}