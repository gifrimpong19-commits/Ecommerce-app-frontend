export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-green-50 to-orange-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 rounded-full bg-green-600 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
            GF
          </div>

          <h1 className="mt-8 text-5xl font-bold text-gray-900">
            Gifty Frimpong
          </h1>

          <p className="mt-4 text-xl text-green-700 font-semibold">
            Production Lead | Agroprocessing Professional
          </p>

          <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
            I work as the Production Lead at Prifrimps Foods, an agroprocessing
            company based in Cape Coast, Ghana. I oversee the production
            activities of the organization, ensuring operational efficiency,
            product quality, and the smooth coordination of processes that
            transform agricultural produce into convenient, high-quality food
            products.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700 transition">
              Contact Me
            </button>

            <button className="rounded-lg border border-green-600 px-6 py-3 text-green-600 font-medium hover:bg-green-50 transition">
              View Experience
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            About Me
          </h2>

          <div className="mt-10 max-w-4xl mx-auto text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              With a background in management, operations, and entrepreneurship,
              I am passionate about leveraging agroprocessing and innovation to
              reduce post-harvest losses, create value for farmers, and improve
              food accessibility. My work focuses on optimizing production
              processes, maintaining quality standards, and driving sustainable
              growth within the food processing industry.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Areas of Expertise
          </h2>

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h3 className="text-xl font-semibold text-green-600">
                Production Management
              </h3>
              <p className="mt-4 text-gray-600">
                Coordinating daily production activities to ensure efficiency,
                consistency, and timely delivery of products.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h3 className="text-xl font-semibold text-green-600">
                Quality Control
              </h3>
              <p className="mt-4 text-gray-600">
                Implementing quality assurance measures to maintain food safety,
                product standards, and customer satisfaction.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h3 className="text-xl font-semibold text-green-600">
                Operations Optimization
              </h3>
              <p className="mt-4 text-gray-600">
                Improving workflows, reducing waste, and enhancing productivity
                throughout the production process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Production Lead at Prifrimps Foods
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            At Prifrimps Foods, I oversee the processing of agricultural
            products into convenient food solutions. I work closely with team
            members to ensure quality production, efficient resource
            utilization, and continuous improvement of operational processes.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-4xl font-bold">5+</h3>
              <p>Years of Operational Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">100%</h3>
              <p>Commitment to Quality</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p>Continuous Improvement Mindset</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Let's Connect
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Interested in agroprocessing, food innovation, operations
            management, or entrepreneurship? Feel free to connect and let's
            explore opportunities to create impact together.
          </p>

          <div className="mt-8">
            <a
              href="mailto:gifty@example.com"
              className="inline-block rounded-lg bg-green-600 px-8 py-3 text-white font-medium hover:bg-green-700 transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}