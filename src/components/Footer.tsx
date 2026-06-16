'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-inter text-sm text-text-muted">
          © {currentYear} Chashman · Mechatronics & Control Engineer · Lahore, Pakistan
        </p>
      </div>
    </footer>
  );
}
