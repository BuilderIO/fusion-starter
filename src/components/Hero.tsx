import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const featureItems = [
    "Intuitive user experience",
    "Real-time data analytics",
    "Customizable dashboard",
    "Advanced reporting tools",
  ];

  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0.1, scale: 0.9 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.1, scale: 0.9 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-400 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Text Content */}
          <div className="w-full md:w-1/2 text-white">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              Transform Your Workflow With Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Smart Application
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-blue-100 mb-8"
              variants={itemVariants}
            >
              Streamline your tasks, analyze your data, and boost productivity
              with our comprehensive solution tailored for modern teams.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                initial="idle"
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 font-medium"
                  asChild
                >
                  <Link to="/get-started">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                initial="idle"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/20"
                  asChild
                >
                  <Link to="/demo">Watch Demo</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Feature list */}
            <motion.div variants={itemVariants}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 mr-2 text-yellow-300" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Hero Image/Graphic */}
          <motion.div className="w-full md:w-1/2" variants={itemVariants}>
            <motion.div
              className="relative bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl opacity-40 blur-sm"></div>
              <div className="relative bg-white/90 backdrop-blur rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Dashboard Preview
                  </h3>
                  <p className="text-gray-600">Interactive demo coming soon</p>
                </motion.div>
              </div>

              {/* Decorative elements on the card */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-40 blur-md"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
