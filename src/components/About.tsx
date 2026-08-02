import { FaCheck } from 'react-icons/fa6'
import aboutImage from '../assets/fotoAlex.jpg'
import { eyebrow, sectionPadY, sectionShell, sectionTitle } from '../lib/styles'

const highlights = [
  'Especialista em Minha Casa Minha Vida',
  'Foco no primeiro imóvel',
  'Ética e transparência',
  'Atendimento próximo às famílias',
] as const

export function About() {
  return (
    <section
      className={`${sectionPadY} bg-white text-dark`}
      id="trajetoria"
      aria-labelledby="about-title"
    >
      <div
        className={`${sectionShell} grid items-center gap-10 max-lg:grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14`}
      >
        <div className="relative max-w-md overflow-hidden rounded-lg shadow-card max-lg:mx-auto lg:max-w-none">
          <img
            className="aspect-3/4 w-full object-cover object-top"
            src={aboutImage}
            alt="Alexssander França, CEO da New Palace Imobiliária"
            width={720}
            height={960}
          />
        </div>

        <div className="max-w-xl max-lg:max-w-none">
          <p className={eyebrow}>Sobre o CEO</p>
          <h2 className={sectionTitle} id="about-title">
            Uma trajetória construída sobre confiança
          </h2>

          <p className="mt-5 text-base leading-[1.75] text-body">
            Alexssander França construiu sua trajetória no mercado imobiliário
            com um propósito claro: ajudar famílias a realizarem o sonho da
            casa própria com segurança e transparência.
          </p>

          <p className="mt-4 text-base leading-[1.75] text-body">
            Como CEO da New Palace Imobiliária, ele une ética, compromisso e
            proximidade em cada atendimento. Cristão, marido e pai, leva para o
            trabalho os mesmos valores que cultiva em casa.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4 max-sm:grid-cols-1">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 font-display text-[0.92rem] font-semibold leading-snug text-navy-text"
              >
                <span
                  className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-[0.68rem] text-gold"
                  aria-hidden="true"
                >
                  <FaCheck />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
