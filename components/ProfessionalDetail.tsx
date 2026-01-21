import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import { PROFESSIONALS } from '../constants';

const ProfessionalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const professional = PROFESSIONALS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!professional) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold text-primary-800 mb-4">
          Profissional não encontrado
        </h2>
        <button
          onClick={() => navigate('/')}
          className="text-primary-900 hover:underline flex items-center gap-2 text-lg"
        >
          <ArrowLeft size={22} />
          Voltar à Homepage
        </button>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="relative z-30 pt-20 pb-10 -mb-32">
        <div className="mx-auto max-w-7xl px-6 overflow-visible">
          <button
            onClick={() => navigate('/profissionais')}
            className="mb-12 flex items-center gap-2 text-[#B8892E] font-medium hover:underline text-lg"
          >
            <ArrowLeft size={22} />
            Voltar
          </button>

          {/* Ajuste da imagem e perfil */}
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-[6rem]">

            {/* IMAGEM RECTANGULAR */}
            <div className="w-full max-w-sm md:w-1/3 overflow-hidden">
              <img
                src="/images/logo_dourado.png"
                alt="Imagem institucional"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* IMAGEM REDONDA (DESAPARECE EM MOBILE) */}
            <div className="hidden md:block w-80 h-80 rounded-full overflow-hidden flex-shrink-0 -mb-20 mr-20">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>


      {/* CONTEÚDO */}
      <section className="relative overflow-hidden bg-white py-24 scroll-mt-28">
        <div className="absolute inset-0">
          <div className="absolute bottom-[-20%] left-0 h-[100%] w-full skew-y-[10deg] bg-[#C8F7E6]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

            {/* COLUNA ESQUERDA */}
            <div className="flex flex-col items-center">
              {/* Foto */}
              <div className="rounded-[32px] border-[6px] border-[#B8892E] overflow-hidden w-[300px] md:w-[340px]">
                <img
                  src={professional.image}
                  alt={professional.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Curiosidades */}
              {professional.curiosidades?.length > 0 && (
                <div className="mt-14 text-center">
                  <div className="flex justify-center items-center gap-2 text-[#804f04] font-semibold tracking-wide text-lg">
                    <Lightbulb size={20} strokeWidth={1.8} />
                    <span>CURIOSIDADES</span>
                  </div>

                  <ul className="mt-6 space-y-5 text-base leading-relaxed text-left max-w-sm mx-auto">
                    {professional.curiosidades.map((curio, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#804f04]">✱</span>
                        <span className="text-black">{curio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* COLUNA DIREITA */}
            <div className="flex flex-col justify-center pt-0 md:pt-60">
              <div className="text-center md:text-center">
                <h3 className="text-[#804f04] font-bold tracking-widest uppercase text-2xl">
                  {professional.name}
                </h3>

                <p className="text-[#804f04] text-sm mt-1 tracking-wide">
                  CP: {professional.cp}
                </p>

                <p className="mt-4 font-semibold text-gray-900 text-lg">
                  {professional.role}
                </p>
              </div>

              {/* BIO COMPLETA */}
              <div className="mt-8 space-y-6 text-gray-800 text-base leading-relaxed text-center md:text-left">
                {professional.fullBio
                  .split('\n')
                  .filter(Boolean)
                  .map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
              </div>

              {/* QUOTE */}
              {professional.quote && (
                <blockquote className="mt-12 text-[#804f04] italic font-medium max-w-xl text-lg text-center md:text-left">
                  “{professional.quote}”
                </blockquote>
              )}

              {/* CTA */}
              <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => navigate('/agendar')}
                  className="bg-[#B8892E] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#9f7425] transition-colors shadow-lg shadow-[#B8892E]/30 text-lg"
                >
                  Agendar Consulta
                </button>

                {professional.contactEmail && (
                  <a
                    href={`mailto:${professional.contactEmail}`}
                    className="border border-[#B8892E] text-[#B8892E] font-bold py-4 px-8 rounded-xl hover:bg-[#B8892E]/10 transition-colors text-center text-lg"
                  >
                    Enviar Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfessionalDetail;
