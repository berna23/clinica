import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const CartSidebar: React.FC = () => {
  const { items, isOpen, toggleCart, removeFromCart, total } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-primary-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-primary-900 flex items-center gap-2">
                <ShoppingBag size={20} />
                O seu carrinho
              </h2>
              <button 
                onClick={toggleCart}
                className="p-2 hover:bg-primary-100 rounded-full transition-colors text-primary-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-primary-400 space-y-4">
                  <ShoppingBag size={48} className="opacity-20" />
                  <p className="font-medium">O seu carrinho está vazio.</p>
                  <button 
                    onClick={toggleCart}
                    className="text-primary-900 font-bold text-sm hover:underline"
                  >
                    Continuar a comprar
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-24 bg-primary-50 rounded-lg overflow-hidden shrink-0 border border-primary-100">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-primary-900 line-clamp-2">{item.title}</h4>
                        <p className="text-primary-500 text-sm mt-1">Qtd: {item.quantity}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary-900">{item.price.toFixed(2)}€</span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-600 transition-colors p-1"
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-primary-100 bg-primary-50/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-primary-500">Subtotal</span>
                  <span className="text-2xl font-bold text-primary-900">{total.toFixed(2)}€</span>
                </div>
                <button 
                  onClick={() => { toggleCart(); navigate('/checkout'); }}
                  className="w-full bg-primary-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg shadow-primary-900/10"
                >
                  Finalizar Compra
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;