"use client";

const providers = [
  { name: "Pedido recebido", color: "#bfdbfe", opacity: 0.6, rotateX: 16, origin: "bottom" as const },
  { name: "E-mail enviado", color: "#93c5fd", opacity: 0.8, rotateX: 8, origin: "bottom" as const },
  { name: "Confirmação legal", color: "#60a5fa", opacity: 1, rotateX: 4, origin: "bottom" as const },
  { name: "Cliente notificado", color: "#3b82f6", opacity: 1, rotateX: 0, origin: "bottom" as const },
  { name: "Prazo registado", color: "#60a5fa", opacity: 1, rotateX: -4, origin: "top" as const },
  { name: "Loja conforme", color: "#93c5fd", opacity: 0.8, rotateX: -8, origin: "top" as const },
  { name: "Concluído", color: "#bfdbfe", opacity: 0.6, rotateX: -16, origin: "top" as const },
];

export function SeamlessIntegrationsVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex w-full items-center justify-center overflow-hidden py-3"
      style={{
        maskImage:
          "linear-gradient(to right, black, black 75%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, black, black 75%, transparent 100%)",
      }}
    >
      <div className="relative w-full max-w-[240px]">
        <div
          className="flex flex-col items-center gap-3"
          style={{ perspective: "100px" }}
        >
          {providers.map((provider, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5"
              style={{
                opacity: provider.opacity,
                transform: `rotateX(${provider.rotateX}deg)`,
                transformOrigin: provider.origin,
              }}
            >
              <div
                className="h-4 w-4 rounded shadow-md"
                style={{
                  backgroundColor: provider.color,
                  boxShadow: `0 2px 8px ${provider.color}40`,
                }}
              />
              <span className="text-base">{provider.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
