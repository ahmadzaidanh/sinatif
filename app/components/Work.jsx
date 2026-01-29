export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold">Selected Works</h3>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="h-48 bg-gray-200 rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  )
}
