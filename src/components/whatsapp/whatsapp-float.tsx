import { whatsappLink } from "@/lib/site";

const WHATSAPP_MESSAGE =
  "Olá! Gostaria de adequar a minha loja WooCommerce ao Botão de Arrependimento.";

export function WhatsAppFloat() {
  const href = whatsappLink(WHATSAPP_MESSAGE);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="relative flex size-7 items-center justify-center">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/40" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="relative size-7">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.33a9.92 9.96 0 004.93 1.302c5.507 0 9.99-4.478 9.995-9.985A9.99 9.99 0 0012.012 2zm5.718 13.972c-.25.703-1.455 1.285-2.006 1.37-.5.077-1.15.143-3.353-.772-2.818-1.17-4.633-4.04-4.774-4.227-.14-.188-1.137-1.513-1.137-2.887 0-1.373.72-2.046.975-2.316.254-.27.553-.337.738-.337.184 0 .368.002.53.01.17.008.399-.064.62.464.226.54.774 1.89.842 2.03.067.137.112.298.022.482-.09.183-.135.297-.27.457-.137.16-.287.357-.41.48-.135.137-.277.287-.12.557.157.27.7 1.153 1.5 1.867.799.715 1.47 1.135 1.772 1.286.3.15.474.128.65-.07.178-.2.774-.903.98-1.21.206-.308.41-.257.693-.15.282.1 1.796.848 2.104.998.308.15.513.222.59.347.075.125.075.72-.175 1.42z" />
        </svg>
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Falar connosco</span>
    </a>
  );
}
