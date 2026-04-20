import React from 'react';
import VenueList from './VenueList';

function Home() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="hero bg-base-100 py-20 px-4">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Your Perfect <span className="text-primary italic">Venue</span> Awaits
            </h1>
            <p className="py-6 text-xl text-base-content/80">
              Celebrate your special moments in locations that inspire. From grand ballrooms to beachside retreats, find the stage for your next memory.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="btn btn-primary btn-lg rounded-full px-10">Explore Now</button>
              <button className="btn btn-outline btn-lg rounded-full px-10">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Venue Listing */}
      <VenueList />

      {/* Footer Placeholder (Optional but adds to aesthetic) */}
      <footer className="footer footer-center p-10 bg-base-100 text-base-content border-t border-base-200">
        <aside>
          <div className="text-2xl font-black mb-2 italic">WEDVEN</div>
          <p>The premier platform for finding your perfect event space.</p>
          <p>Copyright © 2026 - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default Home;
