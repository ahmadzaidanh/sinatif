const services = [
  "Digital Strategy",
  "Content Production",
  "Technology & Web"
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center">Our Services</h3>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {services.map(item => (
            <div key={item} className="bg-white p-8 rounded-2xl shadow">
              <h4 className="font-semibold text-lg">{item}</h4>
              <p className="mt-4 text-gray-600">
                High-impact solutions tailored to your business.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
