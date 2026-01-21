import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFESSIONALS } from '../constants';
import { 
  ArrowLeft, 
  Loader2, 
  ShieldCheck, 
  ChevronRight,
  ChevronLeft,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BookingState {
  category: string | null;
  professionalId: string | null;
  date: Date | null;
  time: string | null;
  userData: {
    name: string;
    email: string;
    phone: string;
    notes: string;
  };
}

const Booking: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // Calendar View State
  const [viewDate, setViewDate] = useState(new Date()); 

  const [bookingState, setBookingState] = useState<BookingState>({
    category: null,
    professionalId: null,
    date: null,
    time: null,
    userData: { name: '', email: '', phone: '', notes: '' }
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  // --- LOGIC ---
  const categories = Array.from(new Set(PROFESSIONALS.map(p => p.category)));
  const filteredProfessionals = bookingState.category 
    ? PROFESSIONALS.filter(p => p.category === bookingState.category)
    : [];
  
  const timeSlots = [
    '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', 
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', 
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'
  ];

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  // Fix: Rename parameter 'number' to 'month'
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay(); 

  const generateCalendarGrid = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const startingBlankDays = firstDay === 0 ? 6 : firstDay - 1;

    const days = [];
    for (let i = 0; i < startingBlankDays; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
    return days;
  };

  const isSameDay = (d1: Date | null, d2: Date | null) => {
    if (!d1 || !d2) return false;
    return d1.getDate() === d2.getDate() && 
           d1.getMonth() === d2.getMonth() && 
           d1.getFullYear() === d2.getFullYear();
  };

  const isPast = (d: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  };

  const submitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setStep(5);
  };

  const fade = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 scroll-mt-28">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12 border-b border-primary-100 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
           <div>
              <button 
                onClick={() => step > 1 ? setStep(step - 1) : navigate('/')} 
                className="text-xs font-bold uppercase tracking-widest text-primary-400 hover:text-primary-900 mb-4 flex items-center gap-2 transition-colors"
              >
                <ArrowLeft size={14} /> {step === 1 ? 'Home' : 'Voltar'}
              </button>
              <h1 className="font-serif text-3xl md:text-4xl text-primary-900">
                {step === 5 ? 'Confirmação' : 'Agendamento Online'}
              </h1>
           </div>
           
           {step < 5 && (
             <div className="text-xs font-bold uppercase tracking-widest text-primary-400">
               Passo 0{step} <span className="text-primary-200 mx-2">/</span> 04
             </div>
           )}
        </div>

        <AnimatePresence mode="wait">
          
          {/* STEP 1: CATEGORY */}
          {step === 1 && (
            <motion.div key="step1" variants={fade} initial="initial" animate="animate" exit="exit" className="grid md:grid-cols-2 gap-4">
               {categories.map((cat) => (
                 <button 
                   key={cat} 
                   onClick={() => { setBookingState(prev => ({...prev, category: cat})); setStep(2); }}
                   className="group p-8 border border-primary-200 hover:border-primary-900 hover:bg-primary-50 transition-all text-left"
                 >
                    <h3 className="font-serif text-xl text-primary-900 mb-1 group-hover:text-accent-dark transition-colors">{cat}</h3>
                    <p className="text-xs text-primary-400 uppercase tracking-wider">Selecionar</p>
                 </button>
               ))}
            </motion.div>
          )}

          {/* STEP 2: PROFESSIONAL */}
          {step === 2 && (
             <motion.div key="step2" variants={fade} initial="initial" animate="animate" exit="exit" className="space-y-4">
                {filteredProfessionals.map((prof) => (
                   <div 
                    key={prof.id} 
                    onClick={() => { setBookingState(prev => ({...prev, professionalId: prof.id})); setStep(3); }}
                    className="group flex flex-col sm:flex-row items-center gap-8 p-8 border border-primary-200 hover:border-primary-900 hover:bg-primary-50 transition-all cursor-pointer"
                   >
                      <div className="w-20 h-20 grayscale group-hover:grayscale-0 transition-all">
                         <img src={prof.image} alt={prof.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                         <h3 className="font-serif text-xl text-primary-900 mb-1">{prof.name}</h3>
                         <p className="text-xs font-bold uppercase tracking-widest text-accent-dark mb-2">{prof.role}</p>
                         <p className="text-sm text-primary-500 font-light line-clamp-2 max-w-md">{prof.shortBio}</p>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center border border-primary-200 group-hover:border-primary-900 transition-colors">
                         <ChevronRight size={14} />
                      </div>
                   </div>
                ))}
             </motion.div>
          )}

          {/* STEP 3: DATE/TIME */}
          {step === 3 && (
            <motion.div key="step3" variants={fade} initial="initial" animate="animate" exit="exit" className="grid lg:grid-cols-12 gap-12">
               
               {/* Calendar */}
               <div className="lg:col-span-7 border border-primary-200 p-8">
                  <div className="flex justify-between items-center mb-8">
                     <span className="font-serif text-lg">{viewDate.toLocaleDateString('pt-PT', { month: 'long', year: 'numeric' })}</span>
                     <div className="flex gap-2">
                        <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))} className="p-2 border border-primary-200 hover:bg-primary-100"><ChevronLeft size={16}/></button>
                        <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))} className="p-2 border border-primary-200 hover:bg-primary-100"><ChevronRight size={16}/></button>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {['D','S','T','Q','Q','S','S'].map(d => <span key={d} className="text-[10px] font-bold text-primary-400 uppercase">{d}</span>)}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                     {generateCalendarGrid().map((date, i) => (
                        <button 
                          key={i}
                          disabled={!date || isPast(date) || date.getDay() === 0}
                          onClick={() => date && setBookingState(prev => ({...prev, date, time: null}))}
                          className={`h-10 text-sm font-medium transition-colors ${
                             !date ? 'invisible' :
                             isSameDay(bookingState.date, date) ? 'bg-accent text-primary-950' : // Using accent for selected date
                             isPast(date) || date.getDay() === 0 ? 'text-primary-300 cursor-not-allowed' :
                             'hover:bg-primary-100 text-primary-700'
                          }`}
                        >
                           {date?.getDate()}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Time Slots */}
               <div className="lg:col-span-5 flex flex-col">
                  <div className="border border-primary-200 p-8 h-full">
                     <h4 className="font-serif text-lg mb-6">Horário</h4>
                     {bookingState.date ? (
                        <div className="grid grid-cols-3 gap-2">
                           {timeSlots.map(time => (
                              <button 
                                key={time}
                                onClick={() => setBookingState(prev => ({...prev, time}))}
                                className={`py-2 text-xs font-bold border transition-colors ${
                                  bookingState.time === time 
                                    ? 'bg-accent border-accent text-primary-950' // Selected time with accent
                                    : 'border-primary-200 hover:border-accent-dark text-primary-600' // Hover with accent-dark
                                }`}
                              >
                                {time}
                              </button>
                           ))}
                        </div>
                     ) : (
                        <p className="text-sm text-primary-400 font-light">Selecione uma data primeiro.</p>
                     )}
                  </div>
                  
                  <button 
                     disabled={!bookingState.date || !bookingState.time}
                     onClick={() => setStep(4)}
                     className="mt-4 w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                     Continuar
                  </button>
               </div>
            </motion.div>
          )}

          {/* STEP 4: FORM */}
          {step === 4 && (
             <motion.div key="step4" variants={fade} initial="initial" animate="animate" exit="exit">
                <div className="border border-primary-200 p-8 md:p-12">
                   <h3 className="font-serif text-2xl text-primary-900 mb-8">Dados Pessoais</h3>
                   <form onSubmit={submitBooking} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-primary-500">Nome</label>
                            {/* Fix: Correctly update nested userData object */}
                            <input required className="w-full p-3 text-sm focus:ring-0" value={bookingState.userData.name} onChange={e => setBookingState(prev => ({...prev, userData: {...prev.userData, name: e.target.value}}))} />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-primary-500">Telefone</label>
                            {/* Fix: Correctly update nested userData object */}
                            <input required className="w-full p-3 text-sm focus:ring-0" value={bookingState.userData.phone} onChange={e => setBookingState(prev => ({...prev, userData: {...prev.userData, phone: e.target.value}}))} />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-primary-500">Email</label>
                         {/* Fix: Correctly update nested userData object */}
                         <input required type="email" className="w-full p-3 text-sm focus:ring-0" value={bookingState.userData.email} onChange={e => setBookingState(prev => ({...prev, userData: {...prev.userData, email: e.target.value}}))} />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-primary-500">Notas (Opcional)</label>
                         {/* Fix: Correctly update nested userData object */}
                         <textarea rows={3} className="w-full p-3 text-sm focus:ring-0" value={bookingState.userData.notes} onChange={e => setBookingState(prev => ({...prev, userData: {...prev.userData, notes: e.target.value}}))} />
                      </div>

                      <div className="bg-primary-50 p-6 border border-primary-100 flex gap-4 items-start">
                         <ShieldCheck className="shrink-0 text-primary-400" size={20} />
                         <div className="space-y-2 text-xs text-primary-500 font-light">
                            <p>Ao confirmar, receberá as instruções de pagamento no seu email.</p>
                            <p>A reserva só é efetiva após envio do comprovativo.</p>
                         </div>
                      </div>

                      <button type="submit" disabled={loading} className="w-full btn-primary py-4 flex justify-center">
                         {loading ? <Loader2 className="animate-spin" /> : 'Confirmar Pré-Agendamento'}
                      </button>
                   </form>
                </div>
             </motion.div>
          )}

          {/* STEP 5: SUCCESS */}
          {step === 5 && (
             <motion.div key="step5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border border-green-100 bg-green-50/30 p-12 text-center">
                <CheckCircle size={48} className="text-green-800 mx-auto mb-6" strokeWidth={1} />
                <h2 className="font-serif text-3xl text-primary-900 mb-4">Pedido Registado</h2>
                <p className="text-primary-600 font-light leading-relaxed max-w-lg mx-auto mb-8">
                   Enviámos um email para <b>{bookingState.userData.email}</b> com os dados para pagamento. 
                   <br/>Por favor, envie o comprovativo para <b>consultas@cciapm.pt</b> para finalizar a sua reserva.
                </p>
                <button onClick={() => navigate('/')} className="btn-outline px-8 py-4 bg-white">
                   Voltar à Homepage
                </button>
             </motion.div>
          )}
          
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Booking;