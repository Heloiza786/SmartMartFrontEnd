
export default function HomePage() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100 min-h-screen gap-6">
      
      {/* Lado esquerdo: texto */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bem-vindo ao SmartMart
        </h1>
        <p className="text-gray-600 text-lg">
          Seu sistema de gerenciamento de estoque!
        </p>
      
      </div>

      {/* Lado direito: imagem */}
      <div className="flex justify-center md:justify-end">
        <img
          src="/img/composition.png"
          alt="Composição"
          className="w-120 h-auto object-cover "
        />
      </div>
    </div>
  )
}
