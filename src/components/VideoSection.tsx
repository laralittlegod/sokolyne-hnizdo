import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videos = [
  {
    thumbnail: "/images/video-thumbnails/territory.jpg",
    title: "Огляд території вілли",
    duration: "3:45",
    videoUrl: "https://youtube.com/shorts/6cSzkZAiFVQ?si=rqRF1uqbXz8ALC-n",
  },
  {
    thumbnail: "/images/video-thumbnails/interior.jpg",
    title: "Інтер'єр маєтку",
    duration: "5:12",
    videoUrl: "https://youtube.com/shorts/7t1Lldq2vUY",
  },
  {
    thumbnail: "/images/video-thumbnails/nature.jpg",
    title: "Заповідник Межигір'я",
    duration: "2:30",
    videoUrl: "https://youtube.com/shorts/ckaUKhu5bjc?si=CKYJCwTnZ7kZoapH",
  },
];

  return (
    <section className="py-24 px-4 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6">Відео екскурсія</h2>
          <p className="text-xl text-muted-foreground">
            Відчуйте атмосферу маєтку через наші професійні відео
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setPlayingVideo(index)}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-4">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-black ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-xl">{video.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-muted-foreground"
        >
          <p>
            Повна відео презентація доступна після запиту на перегляд
          </p>
        </motion.div>
      </div>
    </section>
  );
}
