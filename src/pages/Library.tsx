
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import MusicPlayer from '@/components/MusicPlayer';
import NowPlaying from '@/components/NowPlaying';
import MainView from '@/components/MainView';
import FeaturedSection from '@/components/FeaturedSection';

// Sample library data
const yourPlaylists = [
  {
    id: 'p1',
    title: 'Liked Songs',
    artist: 'Your Collection',
    coverUrl: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'p2',
    title: 'Discover Weekly',
    artist: 'Spotify',
    coverUrl: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'p3',
    title: 'Release Radar',
    artist: 'Spotify',
    coverUrl: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'p4',
    title: 'Chill Vibes',
    artist: 'Your Playlist',
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
];

const savedAlbums = [
  {
    id: 'a1',
    title: 'When We All Fall Asleep',
    artist: 'Billie Eilish',
    coverUrl: 'https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'a2',
    title: 'After Hours',
    artist: 'The Weeknd',
    coverUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'a3',
    title: 'DAMN.',
    artist: 'Kendrick Lamar',
    coverUrl: 'https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
];

const Library = () => {
  const [currentAlbum, setCurrentAlbum] = useState({
    title: "As It Was",
    artist: "Harry Styles",
    coverUrl: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  });

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background text-foreground">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <MainView className="px-8">
          <div className="max-w-7xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Your Library</h1>
            </header>
            
            <FeaturedSection
              title="Your Playlists"
              subtitle="Playlists you've created or saved"
              items={yourPlaylists}
            />
            
            <FeaturedSection
              title="Saved Albums"
              subtitle="Albums you've saved to your library"
              items={savedAlbums}
            />
          </div>
        </MainView>
      </div>
      
      {/* Background Effect */}
      <NowPlaying isVisible={true} album={currentAlbum} />
      
      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Library;