import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">Rubén Patiño</p>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Gracias por recorrer mi historia. Cada foto, cada meta y cada pasión hacen parte de quien soy.
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            Hecho con <Heart className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" /> y mucha gasolina
          </p>
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Rubén Patiño. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
