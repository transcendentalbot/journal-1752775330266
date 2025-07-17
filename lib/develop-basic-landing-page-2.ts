// components/HeroSection.tsx
const HeroSection = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to Journal
          </h1>
          <p className="mt-3 max-w-md mx-auto text-gray-300 sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl">
            Your personal online journal for capturing thoughts, ideas, and
            memories.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;