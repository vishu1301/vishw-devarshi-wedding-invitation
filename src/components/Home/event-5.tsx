import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import {
  FlowerBloom,
  FlowerCorner,
  FlowerOrnament,
} from "../decorative-element/decorative-element";
import { Calendar, Camera, Clock, Gift, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function EventSection5({
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
        <div className="absolute top-1/3 right-10 opacity-20 hidden lg:block">
          <FlowerBloom className="w-32 h-32 text-purple-400" />
        </div>
        <div className="absolute bottom-1/3 left-10 opacity-20 hidden lg:block">
          <FlowerBloom className="w-32 h-32 text-purple-400" />
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
              <FlowerOrnament className="w-32 h-16 mx-auto text-purple-500 mb-4" />
            </motion.div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 text-${accentColor}`}
            >
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 border border-white/50 relative h-full flex flex-col">
                <div className="absolute -top-6 -left-6 transform rotate-180 opacity-70">
                  <FlowerCorner className="w-16 h-16 text-purple-400" />
                </div>

                <div className="flex justify-center mb-6">
                  <Gift size={40} className={`text-${accentColor}`} />
                </div>

                <p className="text-gray-700 mb-6 text-center">{description}</p>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className={`p-2 rounded-full bg-${accentColor}/20`}>
                      <Calendar size={20} className={`text-${accentColor}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Date</h4>
                      <p className="text-gray-600">{date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className={`p-2 rounded-full bg-${accentColor}/20`}>
                      <Clock size={20} className={`text-${accentColor}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Time</h4>
                      <p className="text-gray-600">{time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className={`p-2 rounded-full bg-${accentColor}/20`}>
                      <Camera size={20} className={`text-${accentColor}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Venue</h4>
                      <p className="text-gray-600">{location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-auto">
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
                  <FlowerCorner className="w-16 h-16 text-purple-400" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-full"
            >
              <div className="relative h-full rounded-2xl shadow-xl overflow-hidden border-4 border-white/50">
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt={title}
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Grand Reception
                  </h3>
                  <p className="text-white/90 mb-4">
                    Join us for an evening of celebration and joy
                  </p>
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock size={16} />
                    <span>{time}</span>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/80"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/80"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/80"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/80"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
