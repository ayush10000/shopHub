import React, { useRef, useEffect, useState } from 'react';
import { Heart, Share2, MessageCircle, Shirt, Play, Pause } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  buyLink: string;
  company: string;
  creator: string;
}

interface VideoProps {
  id: number;
  url: string;
  product: Product;
  likes: number;
  comments: number;
  shares: number;
}

export function VideoCard({ video }: { video: VideoProps }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isVisible]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="relative h-screen w-full snap-start bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={video.url}
        loop
        playsInline
      />
      
      <button 
        onClick={togglePlay}
        className="absolute inset-0 w-full h-full flex items-center justify-center"
      >
        {!isPlaying && (
          <div className="bg-black/20 p-4 rounded-full">
            <Play className="h-12 w-12 text-white" />
          </div>
        )}
      </button>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
        <div className="flex items-end justify-between">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">{video.product.name}</h3>
            <p className="mt-2 max-w-[80%] text-sm mb-4">{video.product.description}</p>
            <a
              href={video.product.buyLink}
              className="inline-block bg-gold-600 text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-navy-900 transition-all duration-300"
            >
              Buy Now
            </a>
            <div className="mt-4 text-sm text-white/80">
              <p>By {video.product.company}</p>
              <p className="mt-1">Creator: @{video.product.creator}</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 mb-12">
            <button className="flex flex-col items-center text-white">
              <div className="rounded-full bg-white/10 p-3 hover:bg-gold-600 transition-colors">
                <Heart className="h-6 w-6" />
              </div>
              <span className="text-sm">{video.likes}</span>
            </button>
            
            <button className="flex flex-col items-center text-white">
              <div className="rounded-full bg-white/10 p-3 hover:bg-gold-600 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </div>
              <span className="text-sm">{video.comments}</span>
            </button>
            
            <button className="flex flex-col items-center text-white">
              <div className="rounded-full bg-white/10 p-3 hover:bg-gold-600 transition-colors">
                <Shirt className="h-6 w-6" />
              </div>
              <span className="text-sm">Try On</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}