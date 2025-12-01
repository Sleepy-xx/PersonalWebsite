import React from 'react';
// Import the icons you want to use. You can find more at https://lucide.dev/icons
import { Github, Twitter, Disc, Linkedin } from 'lucide-react'; 
import IconBox from './IconBox';

const socialLinks = [
  // Replace with your actual profile links
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'X (Twitter)' },
  { icon: Disc, href: 'https://discord.com/users/youruserid', label: 'Discord' },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label={link.label}
        >
          {/* The IconBox will inherit the group-hover styles from the anchor tag */}
          <IconBox 
            icon={link.icon} 
            className="transition-all duration-300 group-hover:-translate-y-1 group-hover:text-amber-400" 
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;