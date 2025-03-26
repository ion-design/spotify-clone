import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import MusicPlayer from '@/components/MusicPlayer';
import NowPlaying from '@/components/NowPlaying';
import FeaturedSection from '@/components/FeaturedSection';
import MainView from '@/components/MainView';

interface IndexProps {
  view?: string;
}

const featuredAlbums = [
  {
    id: '1',
    title: 'Dawn FM',
    artist: 'The Weeknd',
    coverUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '2',
    title: 'Chromatica',
    artist: 'Lady Gaga',
    coverUrl: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '3',
    title: 'Future Nostalgia',
    artist: 'Dua Lipa',
    coverUrl: 'https://images.pexels.com/photos/1656565/pexels-photo-1656565.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '4',
    title: 'Planet Her',
    artist: 'Doja Cat',
    coverUrl: 'https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '5',
    title: 'Montero',
    artist: 'Lil Nas X',
    coverUrl: 'https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '6',
    title: '30',
    artist: 'Adele',
    coverUrl: 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
];

const recentlyPlayed = [
  {
    id: '7',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    coverUrl: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '8',
    title: 'Levitating',
    artist: 'Dua Lipa',
    coverUrl: 'https://images.pexels.com/photos/2191013/pexels-photo-2191013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '9',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    coverUrl: 'https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '10',
    title: 'Stay',
    artist: 'The Kid LAROI, Justin Bieber',
    coverUrl: 'https://images.pexels.com/photos/2746823/pexels-photo-2746823.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
];

const yourTopMixes = [
  {
    id: '11',
    title: 'Pop Mix',
    artist: 'Taylor Swift, Ed Sheeran, Ariana Grande',
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '12',
    title: 'Hip Hop Mix',
    artist: 'Drake, Kendrick Lamar, J. Cole',
    coverUrl: 'https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '13',
    title: 'Chill Mix',
    artist: 'Billie Eilish, Lana Del Rey, Frank Ocean',
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '14',
    title: 'Workout Mix',
    artist: 'Dua Lipa, The Weeknd, Post Malone',
    coverUrl: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '15',
    title: 'Rock Mix',
    artist: 'Arctic Monkeys, Tame Impala, The Strokes',
    coverUrl: 'https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
];

const Index: React.FC<IndexProps> = ({ view }) => {
  const location = useLocation();
  const currentView = view || (location.pathname === '/search' ? 'search' : 'home');
  
  const [currentAlbum, setCurrentAlbum] = useState({
    title: "As It Was",
    artist: "Harry Styles",
    coverUrl: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  });

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background text-foreground">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <MainView className="px-8">
          <div className="max-w-7xl mx-auto">
            {currentView === 'home' && (
              <>
                <header className="mb-8">
                  <h1 className="text-3xl font-bold tracking-tight">Good afternoon</h1>
                </header>
                
                <FeaturedSection
                  title="Featured Albums"
                  subtitle="Top picks for you"
                  items={featuredAlbums}
                />
                
                <FeaturedSection
                  title="Recently Played"
                  items={recentlyPlayed}
                />
                
                <FeaturedSection
                  title="Your Top Mixes"
                  subtitle="Based on your listening history"
                  items={yourTopMixes}
                />
              </>
            )}
            
            {currentView === 'search' && (
              <div className="mt-8">
                <h1 className="text-3xl font-bold tracking-tight mb-6">Search</h1>
                <div className="p-8 text-center">
                  <p className="text-muted-foreground text-lg">Search functionality will be implemented soon.</p>
                </div>
              </div>
            )}
          </div>
        </MainView>
      </div>
      
      <NowPlaying isVisible={true} album={currentAlbum} />
      
      <MusicPlayer />
    </div>
  );
};

export default Index;