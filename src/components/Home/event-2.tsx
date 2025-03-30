import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import vd from "../../assets/images/vd-banner.jpg";
import {
  FlowerBloom,
  FlowerCorner,
  FlowerOrnament,
  HeartDecoration,
  RingsSvg,
} from "../decorative-element/decorative-element";
import { Calendar, Clock, Heart, MapPin } from "lucide-react";
import { useRef } from "react";

function EventSection2({
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
        <div className="absolute top-1/4 left-10 opacity-20 hidden lg:block">
          <FlowerBloom className="w-32 h-32 text-amber-400" />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-20 hidden lg:block">
          <FlowerBloom className="w-32 h-32 text-amber-400" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
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
              <FlowerOrnament className="w-32 h-16 mx-auto text-amber-500 mb-4" />
            </motion.div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 text-${accentColor}`}
            >
              {title}
            </h2>
          </div>

          <div className="flex flex-col-reverse items-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-2xl"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square border-4 border-white/50">
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt={title}
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />

                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/80"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/80"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/80"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/80"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full mb-8"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 border border-white/50 relative">
                <div className="absolute -top-6 -left-6 transform rotate-180 opacity-70">
                  <FlowerCorner className="w-16 h-16 text-amber-400" />
                </div>

                <p className="text-gray-700 mb-6 text-center">{description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center p-4 bg-amber-50 rounded-xl">
                    <div
                      className={`p-2 rounded-full bg-${accentColor}/20 mb-2`}
                    >
                      <Calendar size={20} className={`text-${accentColor}`} />
                    </div>
                    <h4 className="font-medium text-gray-800">Date</h4>
                    <p className="text-gray-600 text-center">{date}</p>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-amber-50 rounded-xl">
                    <div
                      className={`p-2 rounded-full bg-${accentColor}/20 mb-2`}
                    >
                      <Clock size={20} className={`text-${accentColor}`} />
                    </div>
                    <h4 className="font-medium text-gray-800">Time</h4>
                    <p className="text-gray-600 text-center">{time}</p>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-amber-50 rounded-xl">
                    <div
                      className={`p-2 rounded-full bg-${accentColor}/20 mb-2`}
                    >
                      <MapPin size={20} className={`text-${accentColor}`} />
                    </div>
                    <h4 className="font-medium text-gray-800">Venue</h4>
                    <p className="text-gray-600 text-center">{location}</p>
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

                <div className="absolute -bottom-6 -right-6 opacity-70">
                  <FlowerCorner className="w-16 h-16 text-amber-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default EventSection2;
