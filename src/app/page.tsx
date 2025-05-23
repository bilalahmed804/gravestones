import React, { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Mock featured products with memorial-specific content
  const featuredProducts = [
    {
      id: 1,
      name: "Lápide Clássica em Granito",
      category: "gravestones",
      description: "Lápide tradicional em granito negro com acabamento polido e gravação personalizada.",
      images: "/images/image2.jpg",
      features: [
        "Granito premium resistente às intempéries",
        "Gravação a laser de alta precisão",
        "Instalação profissional incluída",
        "Garantia de 25 anos"
      ]
    },
    {
      id: 2,
      name: "Vaso Funerário em Mármore",
      category: "vases",
      description: "Elegante vaso em mármore branco carrara para flores e ornamentação tumular.",
      images:"/images/image3.jpg" ,
      features: [
        "Mármore Carrara autêntico",
        "Design clássico intemporal",
        "Base antiderrapante",
        "Fácil manutenção"
      ]
    },
    {
      id: 3,
      name: "Escultura Anjo da Guarda",
      category: "sculptures",
      description: "Majestosa escultura de anjo em mármore, simbolizando proteção e paz eterna.",
      images: "/images/image4.jpg",
      features: [
        "Esculpida por artesãos especializados",
        "Mármore de alta qualidade",
        "Detalhes refinados",
        "Peça única personalizada"
      ]
    }
  ];

  // Custom SVG icons
  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const FeatureIcon = ({ icon }: { icon: 'award' | 'shield' | 'heart' }) => {
    const icons: { [key in 'award' | 'shield' | 'heart']: JSX.Element } = {
      award: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      shield: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      heart: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    };

    return (
      <div className="w-12 h-12 bg-amber-600 bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300 group-hover:bg-amber-600 group-hover:shadow-lg">
        {icons[icon]}
      </div>
    );
  };

  const ContactIcon = ({ icon }: { icon: 'phone' | 'mail' | 'pin' }) => {
    const icons = {
      phone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      mail: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      pin: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    };

    return (
      <div className="w-10 h-10 bg-amber-600 bg-opacity-20 rounded-full flex items-center justify-center mr-3 group-hover:bg-amber-600 transition-all duration-300">
        {icons[icon]}
      </div>
    );
  };

  const TestimonialCard = ({ quote, author, location, rating }: { quote: string; author: string; location: string; rating: number }) => {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <blockquote className="text-gray-600 italic mb-6">
          "{quote}"
        </blockquote>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
          <div>
            <p className="font-medium text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-900 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image5.jpg"
            alt="Cemitério sereno com monumentos funerários"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative py-16 sm:py-24 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Preservando Memórias com Arte e Dignidade
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl leading-relaxed">
              Há três décadas criamos lápides, esculturas e monumentos funerários únicos. 
              Cada peça conta uma história, cada detalhe honra uma vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/produtos" className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                Explorar Produtos
                <ArrowRightIcon />
              </Link>
              <Link href="/contacto" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-medium rounded-lg transition-all duration-300 w-full sm:w-auto">
                Orçamento Gratuito
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Nossa Especialidade
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Lápides personalizadas, vasos ornamentais e esculturas memoriais. 
              Cada criação reflete o amor e respeito que merecem aqueles que partiram.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                    <Image
                      src={product.images}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm sm:text-base lg:text-lg font-medium px-4 sm:px-6 py-2 sm:py-3 border-2 border-white rounded-full backdrop-blur-sm bg-white/10">
                        Ver Detalhes
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 sm:space-y-3 mb-6">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start text-gray-700">
                          <CheckIcon />
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/produtos/${product.category}/${product.id}`}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors group text-sm sm:text-base"
                    >
                      Saber Mais 
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <Link 
              href="/produtos"
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Todo o Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-gray-900">
                  Por Que Somos Referência
                </h2>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start group">
                  <FeatureIcon icon="award" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Maestria Artesanal</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Mestres canteiros com 30 anos de experiência esculpem cada lápide e monumento 
                      com técnicas tradicionais e ferramentas de precisão modernas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <FeatureIcon icon="shield" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Materiais Nobres</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Granitos premium de Alpendorada, mármores de Carrara e pedras portuguesas 
                      selecionadas garantem durabilidade superior a 50 anos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <FeatureIcon icon="heart" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Acompanhamento Integral</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Desde a concepção até a instalação, oferecemos suporte completo e sensível, 
                      respeitando cada momento e necessidade da família.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/image6.jpg"
                  alt="Artesão trabalhando em lápide de mármore" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Showcase */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Nossas Especialidades
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Três categorias principais que definem nossa excelência em arte funerária
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Gravestones */}
            <div className="group cursor-pointer">
              <Link href="/produtos/gravestones">
                <div className="relative h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src="/images/image7.jpg"
                    alt="Lápides e monumentos funerários"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Lápides</h3>
                    <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4">
                      Monumentos tradicionais e contemporâneos em granito e mármore
                    </p>
                    <div className="flex items-center text-amber-400 font-medium">
                      Ver Coleção <ArrowRightIcon />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Vases */}
            <div className="group cursor-pointer">
              <Link href="/produtos/vases">
                <div className="relative h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src="/images/image8.jpg"
                    alt="Vasos funerários em mármore"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Vasos</h3>
                    <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4">
                      Vasos ornamentais para flores e decoração tumular
                    </p>
                    <div className="flex items-center text-amber-400 font-medium">
                      Ver Coleção <ArrowRightIcon />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Sculptures */}
            <div className="group cursor-pointer sm:col-span-2 lg:col-span-1">
              <Link href="/produtos/sculptures">
                <div className="relative h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src="/images/image9.jpg"
                    alt="Esculturas e anjos funerários"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Esculturas</h3>
                    <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4">
                      Anjos, santos e figuras simbólicas esculpidas à mão
                    </p>
                    <div className="flex items-center text-amber-400 font-medium">
                      Ver Coleção <ArrowRightIcon />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Famílias que Confiaram em Nós
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Momentos delicados exigem cuidado especial. Veja o que dizem sobre nosso trabalho.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <TestimonialCard 
              quote="A lápide ficou exatamente como imaginávamos. O carinho e profissionalismo da equipe nos deram tranquilidade num momento tão difícil."
              author="Maria Santos"
              location="Braga"
              rating={5}
            />
            <TestimonialCard 
              quote="O anjo esculpido é uma obra de arte. Cada detalhe reflete o amor que tínhamos pela nossa mãe. Qualidade excepcional."
              author="João Ferreira"
              location="Porto"
              rating={5}
            />
            <TestimonialCard 
              quote="Desde a primeira visita até a instalação, tudo foi perfeito. O vaso em mármore é lindo e muito bem acabado."
              author="Ana Rodrigues"
              location="Lisboa"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                Honre a Memória com Dignidade
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Cada vida merece ser lembrada de forma especial. Criamos monumentos únicos 
                que preservam memórias com respeito e arte. Visite nosso atelier ou 
                solicite um orçamento sem compromisso.
              </p>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <a 
                  href="tel:+351220123456" 
                  className="flex items-center text-base sm:text-lg hover:text-amber-400 transition-colors duration-300 group"
                >
                  <ContactIcon icon="phone" />
                  <span>+351 220 123 456</span>
                </a>
                
                <a 
                  href="mailto:info@casadascampas.pt" 
                  className="flex items-center text-base sm:text-lg hover:text-amber-400 transition-colors duration-300 group"
                >
                  <ContactIcon icon="mail" />
                  <span>info@casadascampas.pt</span>
                </a>
                
                <div className="flex items-start group">
                  <ContactIcon icon="pin" />
                  <address className="text-base sm:text-lg not-italic leading-relaxed">
                    Rua dos Canteiros, 45<br />
                    4000-000 Porto<br />
                    Portugal
                  </address>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  Visite Nosso Atelier
                  <ArrowRightIcon />
                </Link>
                <Link 
                  href="/orcamento"
                  className="inline-flex items-center justify-center border-2 border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-6 sm:px-8 py-3 font-medium rounded-lg transition-all duration-300 w-full sm:w-auto"
                >
                  Orçamento Online
                </Link>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="h-[350px] sm:h-[450px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/image10.jpg"
                  alt="Atelier Casa das Campas" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}