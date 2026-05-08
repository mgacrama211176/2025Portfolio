export default function Footer() {
  return (
    <footer className="wrap py-12 border-t border-rule text-[13px] text-ink-3">
      <div className="flex flex-wrap justify-between gap-4">
        <div>marlon g. · vol.03 · 2026/27</div>
        <div className="flex gap-6">
          <a href="mailto:maruronu@gmail.com" className="transition-colors hover:text-ink">
            email
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener" className="transition-colors hover:text-ink">
            github
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener" className="transition-colors hover:text-ink">
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
