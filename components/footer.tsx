import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center"
            aria-label="REVELT home"
          >
            <Image
              src="/logo_long.jpeg"
              alt="REVELT"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </a>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Instant replies. Smart follow-ups. More booked clients. Less stress.
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
            &copy; {year} REVELT. All rights reserved. AI-powered booking
            automation for medical spas.
          </p>
        </div>
      </div>
    </footer>
  );
}
