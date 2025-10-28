import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-product.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full"
            style={{
              backgroundImage: "var(--gradient-neon)",
              backgroundSize: "200% 200%",
            }}
          />
        </div>

        {/* Floating Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.img
            src={heroImage}
            alt="NXTWEAR Hero Product"
            className="w-full max-w-4xl h-auto object-contain opacity-40"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Limited Edition Drop</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-gradient">NXTWEAR</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Next-generation streetwear that blends cutting-edge design with premium quality
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-gradient-neon hover:opacity-90 border-0 text-primary-foreground font-semibold px-8 py-6 text-lg group"
                >
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/custom">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg glass hover:border-primary/50"
                >
                  Design Custom
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 bg-gradient-neon rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Where <span className="text-gradient">Style</span> Meets Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover premium streetwear designed for those who dare to stand out
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Premium Quality", desc: "Crafted with the finest materials" },
              { title: "Limited Editions", desc: "Exclusive drops you won't find anywhere else" },
              { title: "Custom Designs", desc: "Make it yours with personalized options" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="glass p-8 rounded-lg hover:border-primary/50 transition-all group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
