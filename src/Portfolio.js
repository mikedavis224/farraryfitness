const Portfolio = () => (
    <div className="bg-white text-gray-800 py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Our Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
        <div className="shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600 mt-2">
              Description of the first project goes here.
            </p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-600 mt-2">
              Description of the second project goes here.
            </p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="text-gray-600 mt-2">
              Description of the third project goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default Portfolio;
  