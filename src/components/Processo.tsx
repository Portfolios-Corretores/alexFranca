import {
  eyebrow,
  sectionPadY,
  sectionShell,
  sectionTitle,
} from '../lib/styles'

const steps = [
  {
    number: '01',
    title: 'Conversa inicial',
    description:
      'Entendemos o sonho da família, a renda e as possibilidades reais de conquista.',
  },
  {
    number: '02',
    title: 'Simulação e aprovação',
    description:
      'Analisamos a elegibilidade no Minha Casa Minha Vida e organizamos a documentação.',
  },
  {
    number: '03',
    title: 'Escolha do imóvel',
    description:
      'Apresentamos opções que cabem no orçamento e fazem sentido para o dia a dia.',
  },
  {
    number: '04',
    title: 'Chaves na mão',
    description:
      'Cuidamos do contrato e do acompanhamento até a entrega das chaves.',
  },
] as const

export function Processo() {
  return (
    <section
      className={`${sectionPadY} bg-white text-dark`}
      aria-labelledby="processo-title"
    >
      <div className={sectionShell}>
        <header className="mb-12 max-w-2xl">
          <p className={eyebrow}>Como funciona</p>
          <h2 className={sectionTitle} id="processo-title">
            Do primeiro contato às chaves na mão
          </h2>
        </header>

        <ol className="grid grid-cols-4 gap-x-8 gap-y-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-2.5">
              <span
                className="font-display text-[clamp(2rem,3.5vw,2.5rem)] font-light leading-none tracking-[0.04em] text-gold"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="m-0 font-display text-[1.1rem] font-bold text-navy-text">
                {step.title}
              </h3>
              <p className="m-0 text-[0.92rem] leading-relaxed text-body">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
