import { FaHeart, FaShieldHalved, FaPeopleGroup, FaHouse } from 'react-icons/fa6'
import {
  eyebrow,
  sectionPadY,
  sectionShell,
  sectionTitle,
} from '../lib/styles'

const items = [
  {
    icon: FaHeart,
    title: 'Atendimento humanizado',
    description:
      'Cada família é única. Escutamos suas necessidades e indicamos o melhor caminho, sem pressão.',
  },
  {
    icon: FaShieldHalved,
    title: 'Suporte do início ao fim',
    description:
      'Da simulação à entrega das chaves, acompanhamos cada etapa com clareza e responsabilidade.',
  },
  {
    icon: FaPeopleGroup,
    title: 'Equipe treinada',
    description:
      'Profissionais preparados em documentação, financiamento e subsídios habitacionais.',
  },
  {
    icon: FaHouse,
    title: 'Especialistas no MCMV',
    description:
      'Foco total no Minha Casa Minha Vida para viabilizar o primeiro imóvel com segurança.',
  },
] as const

export function Diferenciais() {
  return (
    <section
      className={`${sectionPadY} bg-bg-light text-dark`}
      aria-labelledby="diferenciais-title"
    >
      <div className={sectionShell}>
        <header className="mb-10 max-w-2xl">
          <p className={eyebrow}>Diferenciais</p>
          <h2 className={sectionTitle} id="diferenciais-title">
            Por que as famílias escolhem a New Palace
          </h2>
        </header>

        <ul className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {items.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex flex-col gap-3 rounded-card bg-white px-5 py-6 shadow-card transition duration-300 hover:-translate-y-1"
            >
              <span
                className="mb-1 inline-flex items-center justify-start text-[1.4rem] text-gold"
                aria-hidden="true"
              >
                <Icon />
              </span>
              <h3 className="m-0 font-display text-[1.05rem] font-bold leading-snug text-navy-text">
                {title}
              </h3>
              <p className="m-0 text-[0.92rem] leading-relaxed text-body">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
