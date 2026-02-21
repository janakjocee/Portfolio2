import { motion } from "framer-motion";
import { Heart, Linkedin, Github, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/janakjocee/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/janakjocee", label: "GitHub" },
  { icon: Mail, href: "mailto:janakjoshiedu@gmail.com", label: "Email" },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/30">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-mono text-xl font-bold inline-block mb-1">
              <span className="text-primary">&lt;</span>
              <span className="gradient-text">Janak Raj Joshi</span>
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Data Scientist | Analytics Consultant
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            <span>&copy; {currentYear} Janak Raj Joshi. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> in London
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
