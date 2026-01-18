function Footer() {
  return (
    <footer className="mt-10 md:mt-20 pb-10 px-4">
      {/* 1. text-center: Ensures text looks good if it wraps on very small screens.
         2. gap-2: Adds consistent spacing between the heading and copyright.
      */}
      <div className="flex flex-col justify-center items-center text-center gap-2">
        
        {/* Heading:
            - text-xl: Smaller, readable size for mobile.
            - md:text-[1.6rem]: Restores your custom size for desktop.
            - font-medium: Adds a little weight for hierarchy.
        */}
        <h2 className="text-xl md:text-[1.6rem] font-medium">
          Built with React.js and Tailwind CSS.
        </h2>

        {/* Copyright:
            - text-sm: Standard convention for copyright text on mobile.
            - md:text-base: Normal size on desktop.
            - text-gray-600: Makes it slightly lighter than the heading for visual hierarchy.
        */}
        <p className="text-sm md:text-base text-gray-600">
          Copyright © 2025. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;