const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto text-center text-muted-foreground">
        <p className="mb-2">
          © {new Date().getFullYear()} Ethan Hartwell. Built with React, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-sm">
          Founder • Developer • Trader
        </p>
      </div>
    </footer>
  );
};

export default Footer;
