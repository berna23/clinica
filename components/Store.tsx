import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { useCart } from './CartContext';

const Store: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-40 scroll-mt-28" style={{ backgroundColor: 'rgb(166 255 230)' }}>
      <div className="container mx-auto px-6 md:px-16 max-w-screen-2xl">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
          <span className="text-[#42B8A4] font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Loja Online
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#d8bd72] mb-6">
            Kits e Recursos Clínicos
          </h1>
        </div>

        {/* Grid de produtos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-3xl border border-primary-100 shadow-soft flex flex-col overflow-hidden relative group"
            >
              {/* Imagem */}
              <div className="w-full h-60 md:h-72 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out ${product.comingSoon ? 'grayscale opacity-70' : ''}`}
                />
              </div>

              {/* Conteúdo */}
              <div className="p-8 flex flex-col flex-1">
                <h2 className="font-serif text-2xl font-bold mb-2" style={{ color: 'rgb(216 189 114)' }}>
                  {product.title}
                </h2>

                {!product.comingSoon && (
                  <p className="text-[#B8892E] font-semibold text-lg mb-4">{product.price.toFixed(2)}€</p>
                )}

                {/* Descrição detalhada */}
                <p className="text-primary-600 font-light text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Features / bullets */}
                {product.features && (
                  <ul className="mb-6 list-disc list-inside text-primary-700 text-sm space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}

                {/* Botão */}
                {!product.comingSoon ? (
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-auto bg-[#B8892E] text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg hover:bg-[#9f7425] transition-all duration-300"
                  >
                    Adicionar ao Carrinho
                  </button>
                ) : (
                  <button
                    disabled
                    className="mt-auto py-3 border border-gray-300 text-gray-400 text-sm rounded-xl cursor-not-allowed"
                  >
                    Indisponível
                  </button>
                )}
              </div>

              {/* Decorativo */}
              <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: '#c9a53b' }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;
