// src/components/HeroPromo.tsx
"use client";

import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

export function HeroPromo() {
  const { i18n, t } = useTranslation();
  const heroCopy = (key: "heading" | "subheading" | "ctaText") =>
    t(`hero.${key}`);

  const isRTL = i18n.language === "ar";

  return (
    <>
      {/* Fixed Full-Screen Video Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          className="md:block absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-fallback.jpg"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>

        <div
          className="md:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-fallback.jpg')" }}
        />
      </div>

      {/* Hero Content */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center px-6 pt-20 md:pt-24"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Floating Logo — centered above glass card */}
          <div className="relative -mb-12 z-20">
            <div className="inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-xl border-2 border-white/30 p-5 shadow-2xl">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-16 w-16 md:h-20 md:w-20"
              />
            </div>
          </div>

          {/* Glassmorphism Card — perfectly responsive */}
          <div className="relative rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 shadow-2xl overflow-hidden">
            {/* Optional subtle gradient glow */}

            <div className="relative z-10 p-8 md:p-12 lg:p-16 pt-16 md:pt-20">
              {/* Heading */}
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black tracking-tight text-white drop-shadow-2xl leading-tight">
                {heroCopy("heading")}
              </h1>

              {/* Subheading */}
              <p
                className="mt-6 text-lg xs:text-xl sm:text-2xl md:text-3xl font-medium text-white/90 drop-shadow-lg leading-relaxed max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: heroCopy("subheading") }}
              />

              {/* CTA Button */}
              <div className="mt-10 md:mt-12">
                <Button
                  size="lg"
                  variant="default"
                  className="px-10 py-6 md:px-14 md:py-8 text-base md:text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl"
                >
                  <a href="/services">{heroCopy("ctaText")}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
