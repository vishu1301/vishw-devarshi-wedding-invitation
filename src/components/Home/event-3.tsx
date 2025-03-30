import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  FlowerBloom,
  FlowerCorner,
  FlowerOrnament,
} from "../decorative-element/decorative-element";
import { Calendar, Clock, MapPin, Music } from "lucide-react";
import { useRef } from "react";

function EventSection3({
  id,
  title,
  date,
  time,
  location,
  mapUrl,
  bgColor,
  accentColor,
  description,
  imageUrl,
}: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen py-20 relative overflow-hidden bg-gradient-to-br ${bgColor}`}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-10 opacity-20 hidden lg:block">
          <FlowerBloom className="w-32 h-32 text-emerald-400" />
        </div>
        <div className="absolute bottom-1/3 right-10 opacity-20 hidden lg:block">
          <FlowerBloom className="w-32 h-32 text-emerald-400" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <FlowerOrnament className="w-32 h-16 mx-auto text-emerald-500 mb-4" />
            </motion.div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 text-${accentColor}`}
            >
              {title}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 order-2 md:order-1"
            >
              <div className="relative overflow-hidden rounded-full shadow-xl aspect-square border-4 border-white/50">
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt={title}
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />

                {/* Circular border */}
                <div className="absolute inset-0 border-8 border-white/20 rounded-full"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full md:w-1/2 order-1 md:order-2"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 border border-white/50 relative">
                <div className="absolute -top-6 -right-6 transform opacity-70">
                  <FlowerCorner className="w-16 h-16 text-emerald-400" />
                </div>

                <p className="text-gray-700 mb-6">{description}</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                    <div className={`p-2 rounded-full bg-${accentColor}/20`}>
                      <Calendar size={20} className={`text-${accentColor}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Date</h4>
                      <p className="text-gray-600">{date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                    <div className={`p-2 rounded-full bg-${accentColor}/20`}>
                      <Clock size={20} className={`text-${accentColor}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Time</h4>
                      <p className="text-gray-600">{time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                    <div className={`p-2 rounded-full bg-${accentColor}/20`}>
                      <Music size={20} className={`text-${accentColor}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Venue</h4>
                      <p className="text-gray-600">{location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Link
                    to={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-${accentColor} hover:bg-${accentColor}/90 text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    <MapPin size={18} />
                    <span>View on Map</span>
                  </Link>
                </div>

                <div className="absolute -bottom-6 -left-6 opacity-70">
                  <FlowerCorner className="w-16 h-16 text-emerald-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default EventSection3
