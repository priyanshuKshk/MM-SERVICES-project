import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-red-800 min-h-screen py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Our Journey Section */}
        <section>
          <h1 className="text-4xl font-bold mb-4 border-b-4 border-red-600 inline-block pb-2">Our Journey</h1>
          <p className="text-lg mb-4">
            Mittal Marble had a humble beginning in 2003. The venture was started by two young brothers in the small town of Hoshiarpur, Punjab.
          </p>
          <p className="text-lg mb-4">
            The vision of both brothers helped elevate the business to new heights. A dedicated and goal-oriented team also played a vital role in building a huge customer base.
          </p>
          <p className="text-lg mb-4">
            Today, Mittal Marble is not just a renowned name in Punjab but also in parts of Rajasthan, Gujarat, and Himachal Pradesh, and is steadily expanding across India.
          </p>
          <div className="text-lg">
            The venture has now diversified into:
            <ul className="list-disc ml-8 mt-2">
              <li>Tile Industry</li>
              <li>Marble Business</li>
              <li>Plumbing Solutions</li>
              <li>Sanitary Industry</li>
            </ul>
          </div>
        </section>

        {/* About Us Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4 border-b-4 border-red-600 inline-block pb-2">About Us</h2>
          <p className="text-lg mb-4">
            Mittal Marble is a renowned name in the ceramic industry. With a strong focus on customer satisfaction,
            we have expanded our footprint not just in Punjab but also across Rajasthan, Gujarat, and Himachal Pradesh.
          </p>
          <p className="text-lg mb-4">
            We have proudly served over <span className="font-semibold text-red-600">10,000 customers</span>,
            including both retail and wholesale clients.
          </p>
          <p className="text-lg">
            Our client base includes several prestigious institutions and corporate houses who trust us for quality and service.
          </p>
          <div className="mt-6">
            <a
              href="https://www.instagram.com/mittal_marble?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
            >
              Follow us on Instagram
            </a>
          </div>
        </section>

      {/* Team Leaders Section */}
<section>
  <h2 className="text-3xl font-bold mb-6 border-b-4 border-red-600 inline-block pb-2">Team Leaders</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {/* Davinder Mohan Card */}
    <div className="bg-red-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
      <img
        src="./images/MrDavinder.jpeg" // Replace with actual image
        alt="Mr. Davinder Mohan"
        className="w-full h-48 object-cover rounded-lg mb-4"
          style={{ height: '350px' }}
      />
      <h3 className="text-2xl font-semibold text-red-700 mb-2">Mr. Davinder Mohan</h3>
      <p className="text-lg">
        A visionary with over <strong>22 years of experience</strong> in the industry.
        He is a proud member of the Marble Association of Hoshiarpur and has been honored by prestigious organizations for his contributions.
      </p>
    </div>

    {/* Neeraj Gupta Card */}
    <div className="bg-red-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
      <img
        src="./images/MrNeeraj.jpeg" // Replace with actual image
        alt="Mr. Neeraj Gupta"
        className="w-full h-48 object-cover rounded-lg mb-4"
        style={{ height: '350px' }}
      />
      <h3 className="text-2xl font-semibold text-red-700 mb-2">Mr. Neeraj Gupta</h3>
      <p className="text-lg">
        With <strong>21 years of experience</strong>, Mr. Gupta has played a key role in leading the venture to new heights alongside a dedicated team.
      </p>
    </div>
  </div>
</section>

      </div>
    </div>
  );
};

export default About;
