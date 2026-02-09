'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import { fastTransition } from '@/lib/animations';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahmed-a-issa-933798201/',
    icon: Linkedin,
    color: 'hover:text-[#0077B5]',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/enki-somer',
    icon: Github,
    color: 'hover:text-[#333] dark:hover:text-[#f5f5f5]',
  },
  {
    name: 'Email',
    href: 'mailto:xahmedammar@gmail.com',
    icon: Mail,
    color: 'hover:text-accent',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-accent-muted/20 bg-base-light dark:bg-base-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="flex flex-col items-center space-y-6"
        >
          <div className="flex items-center justify-center space-x-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ...fastTransition,
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    relative group
                    p-4 rounded-xl
                    bg-base-light dark:bg-base-dark
                    border border-accent-muted/20
                    shadow-sm hover:shadow-lg
                    transition-all duration-300 ease-out
                    ${link.color}
                    text-text-light/70 dark:text-text-dark/70
                    hover:border-accent/50
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
                  `}
                  aria-label={link.name}
                >
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
                  <span className="sr-only">{link.name}</span>
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-accent blur-xl"
                    initial={false}
                    transition={fastTransition}
                  />
                </motion.a>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...fastTransition, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-small text-text-light/60 dark:text-text-dark/60">
              Connect with me
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
