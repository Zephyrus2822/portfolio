
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZoneName: 'short',
      };
      const formatter = new Intl.DateTimeFormat('en-IN', options);
      setTime(formatter.format(now));
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full px-6 md:px-16 py-4 flex items-center justify-between bg-black bg-opacity-70 backdrop-blur-md shadow-md sticky top-0 z-50">
      {/* Left: Time */}
      <div className="text-gray-300 text-sm font-medium tracking-wide">
        {time}
      </div>

      {/* Right: Navigation */}
      <ul className="flex space-x-4 md:space-x-6">
        <li>
          <a
            href="#home"
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-all duration-200"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all duration-200"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="https://collection.cloudinary.com/dgwma2xax/a704db459dc603b5a0c7f3212b305aac"
            target="_blank"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all duration-200"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
