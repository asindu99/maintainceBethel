import bethel from "./img/bethel-new-logo.png"
import React from 'react';


function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background image in the middle */}
      <div className="fixed -left-[200px] inset-0 flex items-center justify-start">
        {/* Replace the image source with your own */}
        <img
          src={bethel}
          alt="Background"
          className="w-3/5 h-auto opacity-10 object-cover"
        />
      </div>

      <div
    style={{
      clipPath: 'polygon(0% 0, 0% 0%, 0% 100%)',
      background: 'linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(50, 205, 50, 0.2))',
      position: 'absolute',
      width: '100%',
      height: '100%',
    }}
  ></div>


      {/* Content on the left */}
      <div className="relative ml-12 max-w-4xl z-10">
        {/* Top left corner text */}
        <div className="fixed font-bold  top-0 left-0 p-6 text-lime-400 text-[2rem]">
          mainnet.bethel.network
        </div>

        {/* Main content */}
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-6 text-white">Scheduled Maintenance</h1>
          <h2 className="text-2xl mb-4 text-gray-300">
            We're gearing up for an upgrade to provide you with a better experience.
          </h2>
          <h3 className="text-xl text-gray-400 mb-6">
            Some services will be unavailable on{" "}
            <span className="font-semibold text-lime-400">
              07th September at 00:00 EST / 14:00 AEST / 09:30 IST until 06:00 EST / 20:00 AEST / 15:30 IST.
            </span>
          </h3>
          <h4 className="text-xl text-gray-400">
            We appreciate your patience during this time.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
