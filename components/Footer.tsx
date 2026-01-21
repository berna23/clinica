import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-primary-900 border-t border-primary-200 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-12 gap-12 mb-20">

          <div className="md:col-span-4 pr-12">
            <span className="font-serif text-3xl tracking-widest text-primary-900 block mb-2">CCIAPM</span>
            <div className="flex gap-2 text-[10px] uppercase tracking-[0.3em] mb-8">
              <span className="text-accent-dark">Clínica</span>
              <span className="text-primary-300">|</span>
              <span className="text-primary-500">Investigação</span>
            </div>
            <p className="text-primary-500 text-sm leading-relaxed font-light max-w-xs">
              Excelência em saúde mental e desenvolvimento humano. Uma abordagem de 4 Fatores para uma vida plena.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-primary-900">Menu</h4>
            <ul className="space-y-4 text-sm text-primary-500 font-light">
              <li><Link to="/" className="hover:text-primary-900 transition-colors">Home</Link></li>
              <li><Link to="/loja" className="hover:text-primary-900 transition-colors">Loja</Link></li>
              <li><Link to="/agendar" className="hover:text-primary-900 transition-colors">Agendar</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-primary-900">Legal</h4>
            <ul className="space-y-4 text-sm text-primary-500 font-light">
              <li><a href="#" className="hover:text-primary-900 transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="hover:text-primary-900 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary-900 transition-colors">Livro de Reclamações</a></li>
              <li><a href="#" className="hover:text-primary-900 transition-colors">Consentimento Informado</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-primary-900">Contactos</h4>
            <div className="space-y-4 text-sm text-primary-500 font-light mb-8">
              <p>Av. da Liberdade, 100<br />1250-144 Lisboa</p>
              <p>direcao@cciapm.pt</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/CCIAPM/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#D4AF77] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Facebook size={20} className="text-white" fill="white" strokeWidth={0} />
              </a>
              <a
                href="https://www.instagram.com/cciapm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#D4AF77] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram size={20} className="text-white" strokeWidth={2} />
              </a>
              <a
                href="https://www.linkedin.com/in/cciapm-cl%C3%ADnica-consultoria-e-investiga%C3%A7%C3%A3o-apm-a91a9335b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#D4AF77] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Linkedin size={20} className="text-white" fill="white" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-100 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-primary-400 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} CCIAPM. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            Desenvolvido com excelência
            <span className="w-2 h-2 rounded-full bg-accent"></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;