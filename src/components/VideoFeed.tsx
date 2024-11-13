import React from 'react';
import { VideoCard } from './VideoCard';

const sampleVideos = [
  {
    id: 1,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-woman-modeling-a-black-top-in-a-studio-810-large.mp4',
    product: {
      name: 'Classic Black Top',
      description: 'Elegant black top for any occasion',
      buyLink: '/product/classic-black-top',
      company: 'LUXE Fashion',
      creator: 'sophia.style'
    },
    likes: 1234,
    comments: 89,
    shares: 45
  },
  {
    id: 2,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-man-wearing-a-white-sweater-in-a-clothing-store-814-large.mp4',
    product: {
      name: 'White Knit Sweater',
      description: 'Comfortable winter sweater',
      buyLink: '/product/white-knit-sweater',
      company: 'Winter Collection',
      creator: 'mark.fashion'
    },
    likes: 2341,
    comments: 156,
    shares: 78
  },
  {
    id: 3,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-woman-trying-different-clothes-in-a-clothing-store-815-large.mp4',
    product: {
      name: 'Summer Collection',
      description: 'Complete summer outfit set',
      buyLink: '/product/summer-collection',
      company: 'Summer Vibes',
      creator: 'emma.styles'
    },
    likes: 3456,
    comments: 234,
    shares: 123
  }
];

export function VideoFeed() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll ml-20">
      {sampleVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}