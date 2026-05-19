import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full bg-primary py-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <div className="flex flex-row items-center mx-auto">

        <img src={logo} alt={logo} className="w-14 h-14 object-contain " />
          <h2 className="text-white text-2xl font-bold">
            Patricio Resio
          </h2>
          </div>

          <p className="text-gray-400 mt-2 max-w-md">
            Frontend Developer focused on creating modern,
            interactive and responsive web experiences.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center md:items-end gap-4">
          
          <div className="flex gap-5 text-2xl">
          <div className="flex gap-5">

{/* GitHub */}
<a
  href="https://github.com/PatricioResio"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-fuchsia transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-7 h-7"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
</a>

{/* LinkedIn */}
<a
  href="https://linkedin.com/in/patricio-resio/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-lightBlue transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-7 h-7"
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.16h.05c.53-1 1.82-2.16 3.75-2.16 4 0 4.75 2.63 4.75 6.05V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z" />
  </svg>
</a>

{/* Email */}
<a
  href="mailto:tuemail@gmail.com"
  className="text-white hover:text-green transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-7 h-7"
  >
    <path d="M12 13.5L0 6.75V18a2 2 0 002 2h20a2 2 0 002-2V6.75L12 13.5zm12-9a2 2 0 00-2-2H2a2 2 0 00-2 2l12 6.75L24 4.5z" />
  </svg>
</a>

</div>
          </div>
            +54 11 6744-8855
          <p className="text-gray-500 text-sm">
            © 2026 Patricio. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;