import Image from "next/image"

export default function ScaleSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-6">Skala kami</h2>

        {/* CTA */}
        <button className="mb-20 inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3 text-white font-semibold hover:bg-green-700 transition">
          Gabung
        </button>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Card 1 */}
          <div className="relative rounded-[32px] bg-green-400 p-10 text-left shadow-xl">
            {/* Illustration */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2">
              <div className="h-32 w-48 rounded-2xl bg-gradient-to-br from-green-300 to-green-500 shadow-lg" />
            </div>

            <h3 className="mt-20 text-3xl font-bold text-black">
              Wilayah Operasional
            </h3>
            <p className="mt-4 text-black/80 text-lg">
              Beroperasi di Indonesia dan Singapura
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-[32px] bg-pink-300 p-10 text-left shadow-xl">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2">
              <div className="h-32 w-48 rounded-2xl bg-gradient-to-br from-purple-300 to-pink-400 shadow-lg" />
            </div>

            <h3 className="mt-20 text-4xl font-extrabold text-black">
              3,1 juta+
            </h3>
            <p className="mt-4 text-black/80 text-lg">
              mitra driver yang sudah bergabung dengan kami
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-[32px] bg-orange-300 p-10 text-left shadow-xl">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2">
              <div className="h-32 w-48 rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-400 shadow-lg" />
            </div>

            <h3 className="mt-20 text-4xl font-extrabold text-black">
              20,1 juta+
            </h3>
            <p className="mt-4 text-black/80 text-lg">
              jumlah mitra usaha dan pedagang di ekosistem GoTo
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
