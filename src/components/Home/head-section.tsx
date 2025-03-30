import { motion } from "framer-motion";
import vd from "../../assets/images/vd-banner.jpg";
import {
  FlowerBloom,
  FlowerCorner,
  HeartDecoration,
  RingsSvg,
} from "../decorative-element/decorative-element";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function HeadSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 to-purple-300/40" />
        {/* <img
          src={vd}
          alt="Wedding background"
          className="object-cover min-h-screen"
        /> */}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 opacity-60 hidden md:block">
        <FlowerCorner className="text-pink-300" />
      </div>
      <div className="absolute bottom-10 right-10 w-40 h-40 opacity-60 hidden md:block rotate-180">
        <FlowerCorner className="text-pink-300" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="z-10 bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl border border-pink-200 relative"
      >
        {/* Top decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2"
        >
          <FlowerBloom className="w-24 h-24 text-pink-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <HeartDecoration className="w-16 h-16 text-pink-400" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-xl text-pink-600 font-medium mb-2"
        >
          We are getting married
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
        >
          Vishw <span className="text-pink-500">&</span> Devarshi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 mb-8"
        >
          Request the pleasure of your company as we celebrate our wedding
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <RingsSvg className="w-16 h-16 text-pink-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#mandap-muhrat"
            className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <Heart size={18} className="animate-pulse" />
            <span>View Events</span>
          </Link>
          <p className="text-gray-600">April 19-22, 2025 • Mumbai, India</p>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <FlowerBloom className="w-24 h-24 text-pink-400" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <Link
            href="#mandap-muhrat"
            className="text-pink-600 flex flex-col items-center"
          >
            <span className="mb-2">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default HeadSection