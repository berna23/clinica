import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicosOpen, setServicosOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<number | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { toggleCart, itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);

  const handleMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setServicosOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setServicosOpen(false), 200);
    setCloseTimeout(timeout);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Serviços',
      submenu: [
        { label: 'Manual CCIAPM', path: '/manual' },
        { label: 'Loja', path: '/loja' }
      ]
    },
    { label: 'Profissionais de Saúde', path: '/profissionais' },
    { label: 'Loja', path: '/loja' },
    { label: 'Contactos', path: '/contactos' }
  ];

  const handleNavClick = (item: any) => {
    setIsOpen(false);
    if (item.path) {
      navigate(item.path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[100] h-[96px] transition-all duration-500
          ${scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-primary-200 shadow-sm'
            : 'bg-white border-b border-transparent'}
        `}
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 h-full flex items-center justify-between">

          {/* LOGO (apenas imagem) */}
          <img
            src="images/logo3.png"
            alt="CCIAPM"
            onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}
            className="
              cursor-pointer
      h-14
      w-auto
      sm:h-16
      lg:h-18
      xl:h-20
      object-contain
            "
          />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && handleMouseEnter()}
                onMouseLeave={() => item.submenu && handleMouseLeave()}
              >
                <button
                  onClick={() => !item.submenu && handleNavClick(item)}
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary-900 hover:text-accent-dark transition relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-dark transition-all group-hover:w-full" />
                </button>

                {item.submenu && servicosOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-48 bg-white/95 backdrop-blur-xl border border-primary-200 shadow-lg">
                      {item.submenu.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => {
                            setServicosOpen(false);
                            navigate(sub.path);
                          }}
                          className="w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-900 hover:bg-accent/10 hover:text-accent-dark"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-10">
            <button
              onClick={toggleCart}
              className="relative text-primary-900 hover:text-accent-dark"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-accent text-primary-950 text-[8px] font-bold flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => navigate('/agendar')}
              className="hidden md:block text-[10px] uppercase tracking-[0.25em] font-bold border-b border-accent-dark hover:text-accent-dark"
            >
              Agendar
            </button>

            <button
              className="lg:hidden text-primary-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      >
        <nav
          className={`absolute top-[96px] left-0 right-0 bg-white border-b border-primary-200 shadow-lg transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-8 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => !item.submenu && handleNavClick(item)}
                  className="w-full text-left text-sm font-bold uppercase tracking-[0.2em] text-primary-900 py-3 border-b border-primary-100"
                >
                  {item.label}
                </button>

                {item.submenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleNavClick(sub)}
                        className="w-full text-left text-xs uppercase tracking-[0.15em] text-primary-700 py-2 hover:text-accent-dark"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/agendar');
              }}
              className="w-full text-left text-sm font-bold uppercase tracking-[0.2em] text-accent-dark py-3 border-t border-primary-100 mt-4"
            >
              Agendar
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;