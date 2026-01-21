import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';
import { ArrowLeft, CheckCircle, Truck, ShieldCheck, ShoppingBag, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // If cart is empty and not successful, redirect back
  if (items.length === 0 && !success) {
    return (
      <div className="min-h-screen bg-primary-50 flex flex-col items-center justify-center p-6">
        <div className="text-center space-y-4">
          <ShoppingBag size={64} className="text-primary-300 mx-auto" />
          <h2 className="text-2xl font-bold text-primary-900">O carrinho está vazio</h2>
          <button onClick={() => navigate('/loja')} className="text-primary-900 font-bold hover:underline">
            Voltar à Loja
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
    clearCart();
  };

  if (success) {
    return (
      <div className="min-h-screen bg-primary-50 flex items-center justify-center p-6 pt-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[3rem] p-12 text-center max-w-lg w-full shadow-soft"
        >
          <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Pedido Registado!</h2>
          <p className="text-primary-500 mb-8 leading-relaxed">
            Obrigado pela sua encomenda. <br/>
            Por favor envie o comprovativo de transferência bancária para <b>direcao@cciapm.pt</b> para receber as suas credenciais/produtos.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-primary-900 text-white py-4 rounded-xl font-bold"
          >
            Voltar à Homepage
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-50 pt-32 pb-24">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => navigate('/loja')}
          className="flex items-center gap-2 text-primary-500 hover:text-primary-900 font-bold text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar à Loja
        </button>

        <h1 className="text-4xl font-bold text-primary-900 mb-12">Finalizar Encomenda</h1>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Checkout Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Client Info */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-primary-100">
                <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                  <Truck className="text-primary-400" />
                  Os seus dados
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-primary-400 uppercase tracking-wider mb-2">Nome Completo</label>
                    <input required type="text" className="w-full bg-primary-50 border-transparent focus:bg-white focus:border-primary-400 rounded-xl px-4 py-3 outline-none transition-all" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-primary-400 uppercase tracking-wider mb-2">Email</label>
                    <input required type="email" className="w-full bg-primary-50 border-transparent focus:bg-white focus:border-primary-400 rounded-xl px-4 py-3 outline-none transition-all" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-primary-400 uppercase tracking-wider mb-2">Telefone</label>
                    <input required type="tel" className="w-full bg-primary-50 border-transparent focus:bg-white focus:border-primary-400 rounded-xl px-4 py-3 outline-none transition-all" />
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-primary-100">
                <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                  <Landmark className="text-primary-400" />
                  Pagamento por Transferência
                </h3>
                
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 space-y-4">
                  <p className="text-sm">Para concluir, efetue a transferência para o IBAN abaixo e envie o comprovativo para <b>direcao@cciapm.pt</b>.</p>
                  <div className="bg-white p-4 rounded-xl font-mono text-center text-lg border border-blue-100 shadow-sm select-all">
                     PT50 1234 5678 9012 3456 7890 1
                  </div>
                  <p className="text-xs text-center text-blue-600">CCIAPM - Clínica e Centro de Investigação</p>
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-primary-900 text-white py-5 rounded-2xl font-bold hover:bg-black transition-all shadow-xl shadow-primary-900/20 flex items-center justify-center gap-3 text-lg"
              >
                Confirmar Encomenda
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-primary-100 sticky top-28">
              <h3 className="text-lg font-bold text-primary-900 mb-6">Resumo</h3>
              
              <div className="space-y-6 mb-8">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-primary-50 rounded-lg overflow-hidden shrink-0">
                      {item.image && <img src={item.image} alt={item.title} className="w-full h-full object-cover" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-primary-900 text-sm line-clamp-2">{item.title}</h4>
                      <p className="text-primary-500 text-xs mt-1">Qtd: {item.quantity}</p>
                      <p className="text-primary-900 font-bold mt-1">{item.price.toFixed(2)}€</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-primary-100 text-sm">
                <div className="flex justify-between text-primary-900 font-bold text-lg pt-3">
                  <span>Total a Pagar</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
              </div>

              <div className="mt-8 flex gap-3 text-xs text-primary-400 bg-primary-50 p-4 rounded-xl">
                <ShieldCheck className="shrink-0 text-primary-400" />
                <p>Após confirmação do pagamento, receberá as suas credenciais/produtos por email.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;