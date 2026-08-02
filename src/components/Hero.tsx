import { FaWhatsapp } from 'react-icons/fa'
import heroImage from '../assets/fotoHeroAlex.jpeg'
import { WHATSAPP_URL } from '../constants/contact'
import { btnGhost, btnPrimary } from '../lib/styles'

const stats = [
  { value: '400+', label: 'Sonhos realizados' },
  { value: '6 anos', label: 'De mercado imobiliário' },
  { value: '2023', label: 'New Palace no mercado' },
  { value: '100%', label: 'Acompanhamento no processo' },
] as const

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-144 flex-col justify-between overflow-hidden bg-bg max-md:min-h-128"
      aria-label="Apresentação"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <img
          className="motion-safe-hero h-full w-full object-cover object-[68%_top] opacity-0 animate-hero-image-in max-md:object-[72%_top]"
          src={heroImage}
          alt=""
          width={1600}
          height={2000}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,var(--color-bg)_0%,rgb(10_18_36/0.96)_30%,rgb(10_18_36/0.7)_50%,rgb(10_18_36/0.3)_72%,rgb(10_18_36/0.4)_100%),linear-gradient(180deg,rgb(10_18_36/0.2)_0%,transparent_40%,rgb(10_18_36/0.55)_82%,var(--color-bg)_100%)] max-md:bg-[linear-gradient(180deg,rgb(10_18_36/0.5)_0%,rgb(10_18_36/0.8)_42%,rgb(10_18_36/0.96)_70%,var(--color-bg)_100%),linear-gradient(90deg,var(--color-bg)_0%,rgb(10_18_36/0.65)_45%,rgb(10_18_36/0.35)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-1 mx-auto flex w-full max-w-content flex-col gap-6 px-[clamp(1.25rem,5vw,4.5rem)] pt-[clamp(3rem,6vw,4.5rem)] pb-5 max-md:pt-[clamp(2.5rem,6vw,3.5rem)]">
        <div className="flex max-w-xl flex-col items-start">
          <p className="motion-safe-hero mb-3.5 font-display text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase opacity-0 animate-hero-fade-up [animation-delay:0.2s]">
            New Palace Imobiliária
          </p>
          <h1 className="motion-safe-hero m-0 font-display text-[clamp(2.6rem,6.5vw,4.35rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white opacity-0 animate-hero-fade-up [animation-delay:0.32s]">
            Alexssander França
          </h1>
          <p className="motion-safe-hero mt-3.5 font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] font-medium italic leading-tight text-gold opacity-0 animate-hero-fade-up [animation-delay:0.42s]">
            Realizando o sonho da casa própria
          </p>
          <p className="motion-safe-hero mt-5 max-w-md text-[clamp(0.95rem,1.5vw,1.05rem)] leading-relaxed text-muted opacity-0 animate-hero-fade-up [animation-delay:0.52s]">
            CEO da New Palace Imobiliária, há 6 anos no mercado imobiliário e
            com mais de 400 sonhos realizados através do programa Minha Casa
            Minha Vida.
          </p>

          <div className="motion-safe-hero mt-7 flex w-full flex-wrap gap-3.5 opacity-0 animate-hero-fade-up max-sm:flex-col [animation-delay:0.64s]">
            <a
              className={`${btnPrimary} max-sm:w-full`}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="shrink-0 text-[1.05rem]" aria-hidden="true" />
              Falar no WhatsApp
            </a>
            <a className={`${btnGhost} max-sm:w-full`} href="#trajetoria">
              Conhecer a trajetória
            </a>
          </div>
        </div>
      </div>

      <ul className="motion-safe-hero relative z-1 mx-auto grid w-full max-w-content grid-cols-4 gap-x-6 gap-y-5 px-[clamp(1.25rem,5vw,4.5rem)] pt-6 pb-[clamp(2rem,5vh,3rem)] opacity-0 animate-hero-stats-in max-md:grid-cols-2 max-md:gap-x-4 max-md:gap-y-6">
        {stats.map((stat) => (
          <li key={stat.label} className="flex flex-col gap-1.5 text-center">
            <span className="font-display text-[clamp(1.55rem,3.2vw,2.15rem)] font-bold leading-none text-gold">
              {stat.value}
            </span>
            <span className="font-display text-[0.68rem] font-medium leading-snug tracking-[0.12em] text-white uppercase">
              {stat.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
