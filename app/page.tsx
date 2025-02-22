"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import {
  Palette,
  Layers,
  Monitor,
  CheckCircle,
  Users,
  Trophy,
  Clock,
  Zap,
  Star,
  MessageSquare,
  Code,
  Smartphone,
  Globe,
  PenTool,
  BarChart,
  Target,
  Award,
  Coffee,
  Briefcase,
  Building,
  Rocket,
  ClockIcon,
  HeartHandshake,
  BadgeCheck,
  Lightbulb,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Testimonial } from "@/components/testimonial";
import { Footer } from "@/components/footer";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const features = [
    {
      icon: Rocket,
      title: "Fast Execution",
      description: "Rapid prototyping and agile development process",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric",
      description: "Dedicated account managers and 24/7 support",
    },
    {
      icon: BadgeCheck,
      title: "Certified Experts",
      description: "Industry-certified designers and developers",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Cutting-edge technology and creative approaches",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary/10 via-background to-primary/10 pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-4">
              Award Winning Agency
            </span>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 leading-tight">
            Strategy Design <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Technology
            </span>
          </motion.h1>

          <motion.p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Crafting brands and beautiful digital experiences We combine
            strategic thinking with cutting-edge design to create digital
            experiences that drive business growth
          </motion.p>

          <motion.div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="px-8 shadow-lg hover:shadow-primary/20"
            >
              LET'S TALK
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-2 border-primary/30 bg-transparent hover:bg-primary/5"
            >
              Explore Work
            </Button>
          </motion.div>

          {/* Feature Grid */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-4 bg-background rounded-xl border border-border hover:border-primary/20 transition-all"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Marquee Section */}
      <motion.section className="py-12 bg-primary/5 overflow-hidden">
        <div className="flex items-center space-x-12 animate-marquee">
          {[
            "TechCrunch",
            "Forbes",
            "Webby Awards",
            "Awwwards",
            "CSS Design Awards",
          ].map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-muted-foreground">
                {brand}
              </span>
              <div className="w-2 h-2 bg-primary rounded-full" />
            </div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-24 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image Column */}
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Our Team"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-background/20" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary/10 p-6 rounded-xl backdrop-blur-sm border border-border">
                <Trophy className="w-12 h-12 text-primary" />
                <p className="text-sm mt-2 font-medium">Award Winning Agency</p>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              variants={containerVariants}
              className="w-full md:w-1/2 space-y-6"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm mb-4">
                  About Us
                </span>
                <h2 className="text-4xl font-bold mb-6">
                  Crafting Digital Excellence Worldwide
                </h2>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground"
              >
                We are Creatiwise, a design and branding agency with partners
                worldwide. We design thoughtful digital experiences and
                beautiful brand aesthetics.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground"
              >
                At Creatiwise, we provide exceptional technology solutions and
                services. We leverage our large knowledge base to deliver
                solutions that meet customer needs, business objectives, and
                budget expectations.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                {[
                  { icon: Code, text: "Custom Website Development" },
                  { icon: Palette, text: "Branding & Design" },
                  { icon: Smartphone, text: "Mobile App Development" },
                  { icon: BarChart, text: "Digital Marketing Solutions" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className="w-6 h-6 text-primary" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8">
                <Button size="lg" className="px-8">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vertical Timeline Process Section */}
      <motion.section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure quality and efficiency
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary-foreground to-accent" />

            {[
              {
                title: "Discovery",
                content: "Requirement analysis & research",
              },
              { title: "Strategy", content: "Planning & architecture design" },
              { title: "Design", content: "UI/UX prototyping & iteration" },
              { title: "Development", content: "Agile implementation phase" },
              { title: "Testing", content: "Quality assurance & optimization" },
              { title: "Launch", content: "Deployment & maintenance" },
            ].map((step, index) => (
              <div key={index} className="mb-12 relative">
                <div
                  className={`flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-center`}
                >
                  <div className="w-1/2 p-6">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="bg-background border p-6 rounded-lg shadow-sm"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.content}</p>
                    </motion.div>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-background font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're good at these areas to work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "TRISTANCE BANCE",
                role: "UI/UX Design Frontend Design",
                image: "/Screenshot 2025-02-22 122208.png",
              },
              {
                name: "Mr Vase",
                role: "UI/UX Design Frontend Design",
                image: "/Screenshot 2025-02-22 122226.png",
              },
              {
                name: "Alpha Blossom",
                role: "UI/UX Design Frontend Design ",
                image: "/Screenshot 2025-02-22 122245.png",
              },
              {
                name: "Employee Link",
                role: "UI/UX Design Frontend Design ",
                image: "/Screenshot 2025-02-22 122302.png",
              },
              {
                name: "TRISTANCE BANCE",
                role: "UI/UX Design Frontend Design",
                image: "/Screenshot 2025-02-22 122208.png",
              },
              {
                name: "Carlos v Spencer",
                role: "UI/UX Design Frontend Design ",
                image: "/Screenshot 2025-02-22 122336.png",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-background rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interactive Service Tabs */}
      <motion.section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Full-Cycle Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions for digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  icon: PenTool,
                  title: "UI/UX Design",
                  description:
                    "User-centered interface design with prototyping",
                },
                {
                  icon: Code,
                  title: "Web Development",
                  description: "Modern web applications with latest tech stack",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Apps",
                  description: "iOS & Android native cross-platform solutions",
                },
                {
                  icon: BarChart,
                  title: "Digital Marketing",
                  description: "Data-driven campaigns & SEO optimization",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="p-6 bg-background rounded-lg border border-border hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <service.icon className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-background p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "10+ Years Industry Experience",
                  "150+ Successful Projects",
                  "98% Client Satisfaction Rate",
                  "Agile Development Process",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-background rounded-lg">
                <h4 className="text-lg font-semibold mb-3">
                  Let's Discuss Your Project
                </h4>
                <Button className="w-full">Schedule Free Consultation</Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gradient CTA Section */}
      <motion.section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-background">
              Ready to Elevate Your Digital Presence?
            </h2>
            <p className="text-xl text-background/90 mb-8">
              Let's create something extraordinary together. Schedule your free
              consultation today.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" size="lg">
                Start Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-background text-white border-background"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Experts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A team of passionate professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Turner",
                role: "Lead Designer",
                image:
                  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&auto=format&fit=crop&q=80",
              },
              {
                name: "Sarah Johnson",
                role: "UX Architect",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=80",
              },
              {
                name: "Michael Chen",
                role: "Tech Lead",
                image:
                  "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?w=400&h=400&auto=format&fit=crop&q=80",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-background rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
