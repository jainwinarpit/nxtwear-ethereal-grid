import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { totalItems } = useCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Custom", path: "/custom" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <h1 className="text-2xl font-bold text-gradient tracking-wider">
              NXTWEAR
            </h1>
            <div className="absolute -inset-1 bg-gradient-neon opacity-20 blur-xl -z-10" />
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative group"
            >
              <span
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </span>
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-neon"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Cart Icon */}
        <Link
          to="/cart"
          className="relative group"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-lg bg-card/50 hover:bg-card transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-neon rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground glow-mixed"
              >
                {totalItems}
              </motion.span>
            )}
          </motion.div>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
