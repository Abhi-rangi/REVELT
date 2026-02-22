export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#" className="text-lg font-bold tracking-tight text-foreground">
            Revelt
          </a>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Instant replies. Smart follow-ups. More booked patients. Less stress.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <a href="#demo" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {year} Revelt. All rights reserved. AI-powered booking
            automation for medical spas.
          </p>
        </div>
      </div>
    </footer>
  )
}
