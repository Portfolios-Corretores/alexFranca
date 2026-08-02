import { FaWhatsapp, FaInstagram, FaGlobe } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import {
  ADDRESS,
  ADDRESS_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WEBSITE_LABEL,
  WEBSITE_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../constants/contact'
import { btnPrimary, sectionPadY, sectionShell } from '../lib/styles'

export function Footer() {
  return (
    <footer className="bg-bg text-white" id="contato">
      <div
        className={`${sectionShell} ${sectionPadY} grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start gap-12 max-md:grid-cols-1 max-md:gap-10`}
      >
        <div>
          <h2 className="m-0 max-w-[16ch] font-display text-[clamp(1.9rem,4vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
            Vamos conquistar o seu imóvel?
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            Fale diretamente com Alexssander e descubra hoje se você se
            enquadra no Minha Casa Minha Vida. Atendimento sem compromisso.
          </p>
          <a
            className={`${btnPrimary} mt-7`}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            {WHATSAPP_DISPLAY}
          </a>
        </div>

        <ul className="flex flex-col gap-5 pt-1">
          <li>
            <a
              className="flex items-start gap-3.5 text-[0.98rem] leading-snug text-muted transition hover:text-white"
              href={ADDRESS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLocationDot
                className="mt-0.5 shrink-0 text-[1.1rem] text-gold"
                aria-hidden="true"
              />
              <span>{ADDRESS}</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-start gap-3.5 text-[0.98rem] leading-snug text-muted transition hover:text-white"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="mt-0.5 shrink-0 text-[1.1rem] text-gold"
                aria-hidden="true"
              />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-start gap-3.5 text-[0.98rem] leading-snug text-muted transition hover:text-white"
              href={WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe
                className="mt-0.5 shrink-0 text-[1.1rem] text-gold"
                aria-hidden="true"
              />
              <span>{WEBSITE_LABEL}</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t border-white/10 bg-[#070d18] px-[clamp(1.25rem,5vw,4.5rem)] py-4">
        <p className="m-0 text-center text-[0.78rem] tracking-[0.02em] text-white/45">
          © 2026 Alexssander França.
        </p>
      </div>
    </footer>
  )
}
