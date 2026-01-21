import React from 'react';
import { MapPin, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contactos" className="py-24 bg-white relative border-t border-primary-100 scroll-mt-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <div>
            <span className="text-accent-dark font-bold tracking-[0.2em] uppercase text-xs">Fale Connosco</span>
            <h2 className="font-serif text-4xl text-primary-900 mt-6 mb-8">Estamos aqui para ajudar</h2>
            
            <div className="space-y-8">
               <div className="flex gap-6 items-start">
                  <Mail className="text-accent" size={20} />
                  <div>
                    <h4 className="font-bold text-primary-900 text-sm uppercase tracking-wide mb-2">Emails</h4>
                    <div className="space-y-1 text-sm text-primary-500 font-light">
                      <p>Geral: direcao@cciapm.pt</p>
                      <p>Consultas: consultas@cciapm.pt</p>
                      <p>Formação: formacao@cciapm.pt</p>
                    </div>
                  </div>
               </div>

               <div className="flex gap-6 items-start">
                  <MapPin className="text-accent" size={20} />
                  <div>
                    <h4 className="font-bold text-primary-900 text-sm uppercase tracking-wide mb-2">Morada</h4>
                    <p className="text-sm text-primary-500 font-light">Av. da Liberdade, 100<br/>1250-144 Lisboa</p>
                  </div>
               </div>

               <div className="flex gap-6 items-start">
                  <Clock className="text-accent" size={20} />
                  <div>
                    <h4 className="font-bold text-primary-900 text-sm uppercase tracking-wide mb-2">Horário</h4>
                    <p className="text-sm text-primary-500 font-light">Seg - Sáb: 10:00 - 21:00</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-primary-50 p-10 md:p-12">
            <h3 className="font-serif text-2xl text-primary-900 mb-8">Envie uma Mensagem</h3>
            <form className="space-y-6">
              <div>
                 <label className="block text-xs font-bold uppercase tracking-wider text-primary-400 mb-2">Nome</label>
                 <input type="text" className="w-full bg-white border border-primary-200 p-4 text-sm focus:border-primary-900 focus:ring-0 outline-none transition-colors rounded-none" />
              </div>
              <div>
                 <label className="block text-xs font-bold uppercase tracking-wider text-primary-400 mb-2">Email</label>
                 <input type="email" className="w-full bg-white border border-primary-200 p-4 text-sm focus:border-primary-900 focus:ring-0 outline-none transition-colors rounded-none" />
              </div>
              <div>
                 <label className="block text-xs font-bold uppercase tracking-wider text-primary-400 mb-2">Mensagem</label>
                 <textarea rows={4} className="w-full bg-white border border-primary-200 p-4 text-sm focus:border-primary-900 focus:ring-0 outline-none transition-colors rounded-none"></textarea>
              </div>
              <button className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                Enviar Mensagem <Send size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;