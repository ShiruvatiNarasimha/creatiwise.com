"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-background border-t"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Creatiwise</h3>
            <p className="text-muted-foreground">
              Transforming brands through innovative design solutions. Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Services", "Portfolio", "Blog", "Careers"].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <a href="#" className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {[
                "Brand Design",
                "UI/UX Design",
                "Web Development",
                "Mobile Apps",
                "Marketing Design"
              ].map((service) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 5 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <a href="#" className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                123 Design Street, Creative City
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                hello@creatiwise.com
              </li>
            </ul>
            <Button className="w-full mt-4">Get in Touch</Button>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          variants={itemVariants}
          className="border-t border-b py-12 my-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h4 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-muted-foreground">
              Stay updated with our latest design trends and insights
            </p>
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
            />
            <Button>Subscribe</Button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="text-center text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Creatiwise. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}