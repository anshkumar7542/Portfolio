const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-black/60">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
          <div>
            <p className="font-display text-2xl text-primary tracking-[0.2em]">AK</p>
            <p className="mt-3 max-w-sm">
              Streaming bold product ideas, full-stack builds, and cloud-ready deployments.
            </p>
          </div>
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-3">Explore</p>
            <div className="grid gap-2">
              <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
              <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
              <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-3">Status</p>
            <p>Open to internships and full-time roles.</p>
            <p className="mt-3">Jalandhar, Punjab</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-10">
          © {new Date().getFullYear()} Ansh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
