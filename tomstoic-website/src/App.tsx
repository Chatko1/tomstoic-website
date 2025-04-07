import React, { useState } from 'react';
import { ChevronRight, Menu, X, PlayCircle } from 'lucide-react';
import {
  VideoModal,
  VideoModalContent,
  VideoModalDescription,
  VideoModalTitle,
  VideoModalTrigger,
  VideoModalVideo,
  VideoPlayButton,
  VideoPlayer,
  VideoPreview,
} from "./components/ui/video-modal";
import { MagneticButton } from "./components/ui/magnetic-button";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="assets/af7e6724-c477-486a-a08d-2009c2dd2b28_removalai_preview.png" 
                alt="Copy Academy Logo" 
                className="h-10 w-10"
              />
              <span className="ml-2 text-xl font-bold">Copy Academy</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Success Stories</a>
              <button className="glow-button bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
                Book a Call
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white">Features</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-white">Success Stories</a>
              <button className="w-full mt-4 glow-button bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
                Book a Call
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-grid pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                GET PERSONAL 1:1 COACHING FROM <span className="text-gradient">TOM STOIC</span> & BEGIN MAKING UP TO 5 FIGURES A MONTH WITH COPYWRITING IN ONLY A FEW WEEKS...
              </h1>
              <MagneticButton>
                <button className="glow-button bg-red-600 text-white text-lg px-8 py-4 rounded-full hover:bg-red-700 transition-colors flex items-center">
                  Click Here To Book A Call <ChevronRight className="ml-2" />
                </button>
              </MagneticButton>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="assets/4kU5Ppf2_400x400.avif" 
                alt="Tom Stoic" 
                className="w-full max-w-lg rounded-lg floating"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Now Usually...</h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>This part of the website is meant to include a small 5-10 minute video explaining:</p>
            <p>Who I am...</p>
            <p>How I can help you...</p>
            <p>And why you should trust me..</p>
            <p>(You know the ones...right?)</p>
            <p>Well tbh...</p>
            <p>I haven't recorded a video, and I can't be asked...</p>
            <p>And truthfully...</p>
            <p>You probably dont give a shit either.</p>
            <p>You're here to start making serious money as a copywriter and that's all that matters.</p>
            <p>So, all you should know is that...</p>
            <p>I Was expelled from school twice...</p>
            <p>I Have clinical dyslexia...</p>
            <p>Then went from $0 to $25,000 a month as a copywriter in 12 months with ZERO prior experience...</p>
            <p>And Since...</p>
            <p>Have helped DOZENS of people like yourself start making thousands as well and begin copywriting full time...</p>
            <p>So instead...</p>
            <p>Im going to shove so many f*cking testimonials in your face it it begins to feel boarderline overwhellming.</p>
            <p>Why?</p>
            <p>Because I have done this for myself...</p>
            <p>I've done this for others...</p>
            <p>And I WILL do it for YOU too.</p>
            <p>Book a call and I look forward to speaking with you very soon.</p>
          </div>
        </div>
      </div>

      {/* Video Testimonials Section */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Testimonial 1 */}
            <VideoModal>
              <VideoModalTrigger>
                <div className="cursor-pointer relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800"
                    alt="Testimonial preview"
                    className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
                </div>
              </VideoModalTrigger>
              <VideoModalContent>
                <VideoModalTitle>Alex hit $30,000 a month within 100 days of starting</VideoModalTitle>
                <VideoModalVideo>
                  <VideoPlayer>
                    <VideoPreview>
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800"
                        alt="Video preview"
                        className="w-full h-full object-cover"
                      />
                    </VideoPreview>
                    <VideoPlayButton>
                      <button className="absolute inset-0 m-auto flex size-32 items-center justify-center rounded-full border border-white border-white/10 bg-white/50 transition duration-300 hover:bg-white/75">
                        <PlayCircle className="size-20 stroke-1 text-white" />
                      </button>
                    </VideoPlayButton>
                    <iframe
                      className="size-full"
                      src="https://www.youtube.com/embed/qXUwubY05NI?si=Jr4JvSuJfylmkYHQ"
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen
                    />
                  </VideoPlayer>
                </VideoModalVideo>
              </VideoModalContent>
            </VideoModal>

            {/* Video Testimonial 2 */}
            <VideoModal>
              <VideoModalTrigger>
                <div className="cursor-pointer relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800"
                    alt="Testimonial preview"
                    className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
                </div>
              </VideoModalTrigger>
              <VideoModalContent>
                <VideoModalTitle>Kyle hit $10,000 a month within 3 months</VideoModalTitle>
                <VideoModalVideo>
                  <VideoPlayer>
                    <VideoPreview>
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800"
                        alt="Video preview"
                        className="w-full h-full object-cover"
                      />
                    </VideoPreview>
                    <VideoPlayButton>
                      <button className="absolute inset-0 m-auto flex size-32 items-center justify-center rounded-full border border-white border-white/10 bg-white/50 transition duration-300 hover:bg-white/75">
                        <PlayCircle className="size-20 stroke-1 text-white" />
                      </button>
                    </VideoPlayButton>
                    <iframe
                      className="size-full"
                      src="https://www.youtube.com/embed/HoR7ITDmiZE?si=QH7c5lnEYqSyxLU0"
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen
                    />
                  </VideoPlayer>
                </VideoModalVideo>
              </VideoModalContent>
            </VideoModal>

            {/* Video Testimonial 3 */}
            <VideoModal>
              <VideoModalTrigger>
                <div className="cursor-pointer relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800"
                    alt="Testimonial preview"
                    className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
                </div>
              </VideoModalTrigger>
              <VideoModalContent>
                <VideoModalTitle>Jayden hit $11,000 a month within 65 days</VideoModalTitle>
                <VideoModalVideo>
                  <VideoPlayer>
                    <VideoPreview>
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800"
                        alt="Video preview"
                        className="w-full h-full object-cover"
                      />
                    </VideoPreview>
                    <VideoPlayButton>
                      <button className="absolute inset-0 m-auto flex size-32 items-center justify-center rounded-full border border-white border-white/10 bg-white/50 transition duration-300 hover:bg-white/75">
                        <PlayCircle className="size-20 stroke-1 text-white" />
                      </button>
                    </VideoPlayButton>
                    <iframe
                      className="size-full"
                      src="https://www.youtube.com/embed/yRtjllZRvME?si=h_O3HVURnHOXmoz0"
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen
                    />
                  </VideoPlayer>
                </VideoModalVideo>
              </VideoModalContent>
            </VideoModal>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="assets/af7e6724-c477-486a-a08d-2009c2dd2b28_removalai_preview.png" 
                alt="Copy Academy Logo" 
                className="h-10 w-10"
              />
              <span className="ml-2 text-lg font-bold">Copy Academy</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Copy Academy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;