import { Professional, Service, Testimonial, Product, InsightCard } from './types';

// General UI Images
export const HERO_BACKGROUND_FALLBACK_IMAGE = 'https://cciapm.pt/wp-content/uploads/2024/10/Banner-Site-CCIAPM-11.png';
export const ABOUT_SECTION_IMAGE = 'https://images.unsplash.com/photo-1549923746-c503d42c3664?auto=format&fit=crop&q=80&w=800&h=800';
export const ABOUT_CONTENT_TEXT_IMAGE = 'https://cciapm.pt/wp-content/uploads/2024/10/Diagrama-CCIAPM-Atualizado-01-1.png';
export const FOUR_FACTORS_DIAGRAM_IMAGE = 'https://cciapm.pt/wp-content/uploads/2024/10/Diagrama-CCIAPM-Atualizado-01-1.png';
export const LOGO_WHITE_OUTLINE = '/logo-white-outline.png';

export const GALLERY_IMAGES: string[] = [
  '/images/img1.jpeg',
  '/images/img2.jpeg',
  '/images/img3.jpeg',
  '/images/img4.jpeg',
  '/images/img5.jpeg',
  '/images/img6.jpeg',
  '/images/img7.jpeg',
  '/images/img1.jpeg',
  '/images/img1.jpeg',
];

// Icons updated to use stroke="#42B8A4" (accent-dark)
export const ICON_PSICOLOGIA = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDJCOEE0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWNvYXQ9InJvdW5kIj48cGF0aCBkPSJNMTEuMDkyIDcuNTEzQTEuMTYgMS4xNiAwIDEgMCAxMiA4LjU0NCAzLjQ3NCAzLjQ3NCAwIDEgMSAxMy4wNzkgMTIuNzEzVjIxIi8+PHBhdGggZD0iTTEzLjA3OSAxMi43MTNBMi41OTUgMi41OTUgMCAxIDAgMTUgMTUuMDA3VjIxIi8+PC9zdmc+';
export const ICON_MINDFULNESS = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDJCOEE0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWNvYXQ9InJvdW5kIj48cGF0aCBkPSJNMTIgMmEyIDIgMCAwIDEgMiAydjdhOSA5IDAgMCAxLTYgNlY2YTkgOSAwIDAgMS02LTdWMiIvPjxwYXRoIGQ9Ik00IDIwLjcyYTYgNiAwIDAgMSAxMC42Ni0zLjQ2Ii8+PC9zdmc+';
export const ICON_CLINICA_SAUDE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDJCOEE0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWNvYXA9InJvdW5kIj48cGF0aCBkPSJNMjEgMTJhOSA5IDAgMSAxLTE4IDAgOSA5IDAgMCAxIDE4IDBaIi8+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIiBkPSJNMTIgNXYxNG0tN3YxNEg1bTdoN3YxNEg1bTctN3YxNEg1bTctN3YxNEg1bTctN3YxNEg1bTciLz48L3N2Zz4=';
export const ICON_SUPERVISAO_INVESTIGACAO = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDJCOEE0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWNvYXA9InJvdW5kIj48cGF0aCBkPSJNMjAgMTBIMTRhMiAyIDAgMCAwLTItMi03IDcgMCAxIDEgNC01LjU2VjJNMTEgNmg2bC01IDVIMTBhMyAzIDAgMSAxLTcgMjlMMyA5Ii8+PC9zdmc+';


export const PROFESSIONALS: Professional[] = [
  {
    id: 'andreia-moura',
    name: 'Doutora Andreia Paiva de Moura',
    cp: '013202',
    role: 'Psicóloga Clínica e de Saúde, doutorada na área das Dependências e Comportamentos Aditivos.',
    specialty: 'Psicologia Clínica e da Saúde',
    category: 'Direção',
    image: 'images/andreia-paiva.png',
    shortBio: 'Apresenta mais de 15 anos de experiência profissional em contextos diversificados, incluindo a intervenção nas dependências, intervenção comunitária, contexto escolar e hospitalar. O seu percurso integra ainda experiência de docência, colaboração em projetos de investigação e publicação de artigos científicos. As suas áreas de diferenciação centram-se nas dependências, perturbações de humor e perturbações de personalidade. É autora da Abordagem CCIAPM de 4 Fatores, que reflete a sua prática clínica integrada e inovadora.',
    fullBio: 'Apresenta mais de 15 anos de experiência profissional em contextos diversificados, incluindo a intervenção nas dependências, intervenção comunitária, contexto escolar e hospitalar. O seu percurso integra ainda experiência de docência, colaboração em projetos de investigação e publicação de artigos científicos. As suas áreas de diferenciação centram-se nas dependências, perturbações de humor e perturbações de personalidade. É autora da Abordagem CCIAPM de 4 Fatores, que reflete a sua prática clínica integrada e inovadora.',

    education: [
      'Doutoramento em Dependências e Comportamentos Aditivos, Universidade de Lisboa',
      'Mestrado em Psicologia Clínica e da Saúde, Universidade do Porto',
      'Licenciatura em Psicologia, Universidade de Coimbra'
    ],
    experience: [
      'Diretora Clínica e Fundadora da CCIAPM (2020-Presente)',
      'Psicóloga Clínica, Hospital de Santa Maria (2015-2020)',
      'Formadora e Supervisora Clínica no INSPSIC',
      'Membro da Assembleia Geral da Norte Vida: Associação para promoção da saúde (2020 – 2023)'
    ],
    contactEmail: 'andreia.moura@cciapm.pt',
    curiosidades: [
      'Para mim, o mar é a manifestação da imensidão do Universo, pelo que é um dos meus pontos de abrigo.',
      'Não vivo sem animais de estimação. Adoro todos, mas particularmente, os felinos!'
    ],
    quote: 'A mudança começa quando decidimos olhar para dentro com coragem e compaixão.'
  },
  {
    id: 'rafael-rodrigues',
    name: 'Dr. Rafael Brandão Rodrigues',
    cp: 'OM77879',
    role: 'Diretor Clínico',
    specialty: 'Medicina Geral e Familiar',
    category: 'Direção',
    image: 'images/rafael-brandao-rodrigues.png',
    shortBio: 'Mestre em Medicina com Menção em Cirurgia Clínica. Foco em prevenção e acompanhamento global.',
    fullBio: 'Experiência em contexto hospitalar e de cuidados de saúde primários, dedicado à promoção da saúde e bem-estar das pessoas e famílias. É formado em Medicina pela Universidade Autónoma de Barcelona, com percurso clínico em Espanha e Portugal. Fala fluentemente português, inglês, espanhol, catalão e galego, o que lhe permite acompanhar pacientes de diferentes contextos culturais e linguísticos. Na CCIAPM, exerce a função de Diretor Clínico e integra a equipa de várias especialidades médicas, com especial interesse em prevenção, acompanhamento global e cuidado continuado centrado na pessoa.',
    education: [
      'Licenciatura em Medicina - Universidade Autónoma de Barcelona',
      'Mestrado em Medicina com Menção em Cirurgia Clínica'
    ],
    experience: [
      'Diretor Clínico na CCIAPM (2022-Presente)',
      'Médico de Família, Centro de Saúde de Lisboa (2018-2022)',
      'Residência em Medicina Geral e Familiar, Hospital Curry Cabral (2015-2018)'
    ],
    contactEmail: 'rafael.brandao@cciapm.pt',
    curiosidades: [
      'É apaixonado pelo exercício físico, leitura e meditação',
      'Adora as pequenas pausas introspectivas no rebuliço do dia-a-dia'
    ],
    quote: 'Acredito que o verdadeiro cuidado começa antes da doença: nas pequenas escolhas, nos bons hábitos e no equilíbrio que cultivamos. Prevenir é viver melhor e estou aqui para ajudar nesse caminho.',

  },
  {
    id: 'ana-leite',
    name: 'Doutora Ana Leite',
    cp: '14008',
    role: 'Psicóloga',
    specialty: 'Psicologia Social, das Organizações & Behavioral Science',
    category: 'Psicologia',
    image: 'images/ana-leite.png',
    shortBio: 'Doutorada em Psicologia, especialista em Yoga Terapêutico e Investigação.',
    fullBio: 'Apresenta experiência em consultoria e no meio académico, tendo sido docente universitária durante 10 anos nas áreas da Psicologia Social, das Organizações e Behavioural Science, em Inglaterra, onde mantém atualmente a posição de académica honorária na Universidade de Kent. Na prática clínica, acompanha sobretudo pessoas com doenças crónicas, bem como casos de burnout, ansiedade, stress e bem-estar no trabalho. Demonstra também interesse nos desafios associados à experiência migratória. Realiza consultas em português e inglês, recorrendo a uma abordagem integrativa e individualizada. É responsável pela investigação, apoio à escrita científica e tradução da ciência da CCIAPM. A sua prática estende-se além da Psicologia, exercendo igualmente como professora de yoga terapêutico, com uma abordagem inclusiva e adaptada a diferentes corpos e necessidades.',
    education: [
      'Doutoramento em Psicologia Social, Universidade de Kent, UK',
      'Mestrado em Psicologia das Organizações, Universidade de Lisboa',
      'Certificação em Yoga Terapêutico'
    ],
    experience: [
      'Psicóloga e Investigadora na CCIAPM (2021-Presente)',
      'Académica Honorária, Universidade de Kent, UK (2019-2021)',
      'Consultora de Behavioral Science, Empresa X (2017-2019)'
    ],
    contactEmail: 'ana.leite@cciapm.pt',
    curiosidades: [
      'É semi-britânica e adora banhos de mar, especialmente nas águas gélidas do Norte',
      'Vive com uma doença crónica invisível, experiência que a motiva a apoiar outras pessoas e a contribuir para um mundo mais inclusivo'
    ],
    quote: 'Experiências individuais complexas merecem respostas integradas, que cuidem do indivíduo no seu contexto social, reconhecendo fatores de desigualdade e injustiça social sistémica e promovendo a harmonia entre mente e corpo.',
  },
  {
    id: 'mariana-castro',
    name: 'Dra. Mariana Miguel Castro',
    cp: '30978',
    role: 'Psicóloga',
    specialty: 'Psicologia da Justiça, Trauma & Comportamento Desviante',
    category: 'Psicologia',
    image: 'images/mariana-miguel-castro.png',
    shortBio: 'Especialista em Justiça e Trauma, com foco em intervenção psicossocial e emergência.',
    fullBio: 'Apresenta experiência em intervenção psicossocial e de emergência, investigação científica e formação. O seu percurso é ainda marcado pela colaboração em contextos comunitários e de justiça, sempre a partir de uma perspetiva de justiça social, inclusão e direitos humanos – valores que orientam a sua prática profissional. Na CCIAPM, dedica-se sobretudo à intervenção psicológica em trauma e comportamentos de risco, assim como à formação, através da dinamização de workshops formativos, que considera fundamentais para a promoção de bem-estar, literacia em saúde mental e empoderamento.',
    education: [
      'Mestrado em Psicologia da Justiça e do Comportamento Desviante, Universidade Católica Portuguesa',
      'Licenciatura em Psicologia, Universidade de Coimbra'
    ],
    experience: [
      'Psicóloga Forense, Tribunal de Família e Menores (2020-Presente)',
      'Técnica de Intervenção Psicossocial, Organização Não Governamental (2018-2020)'
    ],
    contactEmail: 'mariana.castro@cciapm.pt',
    curiosidades: [
      'É apaixonada por livros de mistério e thrillers, especialmente quando conseguem surpreender no final',
      'Não consegue beber café sem açúcar, por mais que tente'
    ],

    quote: 'Acredito que a Psicologia deve ser uma ponte entre a ciência e as pessoas, com um olhar sempre atento às diferentes realidades de cada um.',

  },
  {
    id: 'ines-leite',
    name: 'Dra. Inês Pereira Leite',
    cp: '31118',
    role: 'Psicóloga, mestre em Psicologia Clínica e da Saúde.',
    specialty: 'Terapia Cognitivo-Comportamental (TCC)',
    category: 'Psicologia',
    image: '/images/ines-pereira-leite.png',
    shortBio: 'Especializada em TCC, focada em perturbações de humor e ansiedade.',
    fullBio: 'Apresenta especialização em terapias cognitivo-comportamentais (TCC), com experiência em avaliação e intervenção psicológica em adultos. Apesar de exercer principalmente em contexto clínico, durante o seu estágio internacional teve a oportunidade de integrar projetos de investigação e formação em contexto académico. Na CCIAPM, foca-se na avaliação e intervenção psicológica em diversas perturbações psicológicas, sobretudo perturbações de humor e de ansiedade, recorrendo à abordagem cognitivo-comportamental. Paralelamente, desenvolve e dinamiza workshops sobre saúde mental.',
    education: [
      'Pós-graduação em Terapia Cognitivo-Comportamental, Instituto de Psicologia Aplicada',
      'Licenciatura em Psicologia Clínica, Universidade de Lisboa'
    ],
    experience: [
      'Psicóloga Clínica, CCIAPM (2023-Presente)',
      'Psicóloga Clínica, Centro Hospitalar Universitário Cova da Beira (2020-2023)'
    ],
    contactEmail: 'ines.leite@cciapm.pt',
    curiosidades: [
      'Adoro praticar exercício físico, principalmente correr. Já fiz 3 meias maratonas e adorava fazer uma maratona!',
      'Odeio andar de elevador! Vou sempre pelas escadas, mesmo que tenha de subir até ao 12o andar.'
    ],
    quote: 'Ser psicólogo não é apenas saber escutar ativamente, é sobre ser empático e aceitar o outro incondicionalmente.'
  },
  {
    id: 'claudia-bernardo',
    name: 'Dra. Cláudia Bernardo',
    cp: 'OM42307',
    role: 'Médica de Família',
    specialty: 'Doenças Crónicas e Doenças Agudas',
    category: 'Medicina',
    image: 'images/claudia-bernardo.png',
    shortBio: 'Assistente graduada em Medicina Geral e Familiar, focada na prevenção.',
    fullBio: 'Apresenta experiência na vigilância e acompanhamento de saúde ao longo de todo o ciclo de vida, em consulta presencial, por videochamada ou ao domicílio. Atua no tratamento das doenças agudas mais comuns em cada época do ano e na gestão e orientação de doenças crónicas, como a hipertensão arterial e a diabetes. Na CCIAPM, a sua prática centra-se na prevenção, procurando, em colaboração com cada utente, reduzir o risco de doenças cardiovasculares e oncológicas, num enquadramento de intervenção holística e de proximidade.',
    education: [
      'Licenciatura em Medicina, Faculdade de Medicina da Universidade de Lisboa',
      'Especialização em Medicina Geral e Familiar'
    ],
    experience: [
      'Médica de Família, CCIAPM (2023-Presente)',
      'Assistente Hospitalar de Medicina Geral e Familiar, USF (2010-2023)'
    ],
    contactEmail: 'claudia.bernardo@cciapm.pt',
    curiosidades: [
      'Adora caminhar, fazer trilhos e praticar atividades radicais',
      'Gosta muito de cozinhar com a sua filha',
      'Adora estar com amigas de coração'
    ],
    quote: 'A minha missão é ajudar, tentar tratar e minimizar o sofrimento.',
  },
  {
    id: 'maria-matos',
    name: 'Dra. Maria Matos',
    cp: '3690N',
    role: 'Nutricionista',
    specialty: 'Excesso de Peso, Obesidade & Nutrição Desportiva',
    category: 'Nutrição',
    image: 'images/maria-matos.png',
    shortBio: 'Especialista em emagrecimento, reeducação alimentar e nutrição desportiva.',
    fullBio: 'Nutricionista há 7 anos, com experiência na área do emagrecimento e da reeducação alimentar, ajudando os pacientes a adotar uma relação mais equilibrada e sustentável com a alimentação. Especial paixão por promover mudanças de estilo de vida, valorizando sempre a individualidade e o bem-estar global de cada um. Atualmente, exerce funções num hospital e num centro de saúde na área da medicina do trabalho, conciliando a prática clínica com a docência, onde partilha o gosto pela nutrição e pela educação para a saúde. Na CCIAPM, dedica-se a conhecer cada paciente e a individualizar cada plano alimentar, adaptando as orientações às suas necessidades, objetivos e rotinas.',
    education: [
      'Licenciatura em Ciências da Nutrição, Universidade do Porto',
      'Pós-graduação em Nutrição Clínica e Desportiva'
    ],
    experience: [
      'Nutricionista Clínica, CCIAPM (2022-Presente)',
      'Nutricionista Desportiva, Ginásio X (2019-2022)'
    ],
    contactEmail: 'maria.matos@cciapm.pt',
    curiosidades: [
      'É apaixonada por obras de arte, especialmente pinturas de Monet',
      'Associa perfumes a momentos da sua vida, cada um marcando uma fase especial'
    ],

    quote: 'Aqueles que passam por nós não vão sós, não nos deixam sós. Deixam um pouco de si, levam um pouco de nós.',

  },
  {
    id: 'maria-pauperio',
    name: 'Dra. Maria Castro Paupério',
    cp: '58143-P',
    role: 'Advogada (Formadora)',
    specialty: 'Direito da Família, Trabalho e Criminal',
    category: 'Direito',
    image: 'images/maria-castro-pauperio.png',
    shortBio: 'Advogada com experiência em Direito do Trabalho, Segurança Social e Família.',
    fullBio: 'Tem desenvolvido o seu percurso profissional nos últimos oito anos, com especial foco nas áreas do Direito do Trabalho e da Segurança Social, bem como no Direito da Família e Menores. Com uma sólida especialização e um esforço permanente de atualização jurídica, advoga em matérias relacionadas com a promoção de condições de trabalho e o cumprimento das imposições legais em matéria de legislação laboral. O domínio de línguas estrangeiras, nomeadamente inglês e espanhol, permite-lhe assegurar uma capacidade de resposta transversal às diversas necessidades de empresas e trabalhadores. Nos últimos anos, tem assessorado processos de violência doméstica em diferentes contextos, incluindo o laboral e o familiar. No âmbito do Direito da Família, acompanha processos de divórcio e partilha de património comum do casal, regulação do exercício das responsabilidades parentais, acompanhamento de maiores e mediação familiar.',
    education: [
      'Licenciatura em Direito, Faculdade de Direito da Universidade de Lisboa',
      'Mestrado em Direito Criminal, Universidade Católica Portuguesa'
    ],
    experience: [
      'Advogada e Formadora, CCIAPM (2023-Presente)',
      'Advogada, Escritório de Advogados Y (2015-2023)'
    ],
    contactEmail: 'maria.pauperio@cciapm.pt',
    curiosidades: [
      'É apaixonada por decoração de interiores, encontrando nesta área uma outra forma de expressão para além do Direito',
      'Acredita que a casa reflete a personalidade e a identidade de cada pessoa'
    ],

    quote: 'Não sendo possível fazer com que aquilo que é justo seja forte, faz-se com que o que é forte seja justo.'
  }
];


export const SERVICES: Service[] = [
  {
    id: 'psicoafetivo',
    title: 'Psicologia e Psicoterapias',
    factor: 'Avaliação/Intervenção a nível Psicoafetivo',
    iconImage: ICON_PSICOLOGIA,
    items: [
      '01. Automatismos;',
      '02. Cognição e esquemas mentais;',
      '03. Emoção e Comportamento.'
    ]
  },
  {
    id: 'sensorial',
    title: 'Mindfulness',
    factor: 'Avaliação/Intervenção a nível Sensorial',
    iconImage: ICON_MINDFULNESS,
    items: [
      '01. Piloto automático;',
      '02. Prevenção;',
      '03. Mindfulness.'
    ]
  },
  {
    id: 'fisico',
    title: 'Clínica e Saúde',
    factor: 'Avaliação/Intervenção a nível da Saúde física',
    iconImage: ICON_CLINICA_SAUDE,
    items: [
      '01. Atividade física;',
      '02. Autocuidado;',
      '03. Relação com o corpo.'
    ]
  },
  {
    id: 'intelectual',
    title: 'Supervisão e Investigação',
    factor: 'Avaliação/Intervenção a nível Intelectual',
    iconImage: ICON_SUPERVISAO_INVESTIGACAO,
    items: [
      '01. Leitura;',
      '02. Aprendizagem;',
      '03. Autoconhecimento.'
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'R.V.',
    role: 'Paciente',
    text: `Trabalhar com a Dra Andreia tem sido verdadeiramente transformador. Ajudou-me a fazer o luto da minha mãe e continua a ajudar-me a compreender-me melhor para conseguir ultrapassar as adversidades que surgem. Dá-me confiança e força para gerir os meus problemas de forma mais saudável.`,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'I.C.',
    role: 'Paciente',
    text: `Conheci a Dra Andreia Paiva Moura na sequência de um burn out e de uma fase de grandes mudanças. Ter a sua ajuda foi fundamental: deu-me ferramentas incríveis para compreender situações da minha vida e sinto que tive muita sorte em encontrar uma profissional tão dedicada e empenhada. Só posso recomendar!`,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't3',
    name: 'S.C.',
    role: 'Paciente',
    text: `A evolução terapêutica desde que sou seguida nas consultas melhorou muito, fazendo com que encare as situações menos positivas da vida com outra perspetiva e utilizando diferentes estratégias para lidar com as adversidades.`,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't4',
    name: 'B.A.',
    role: 'Paciente',
    text: `Quando marquei a minha primeira consulta sentia receio, mas a Dra Andreia criou um ambiente especial, leve e sem julgamentos. A evolução terapêutica é notória e muito positiva. Ajudou-me profundamente no meu processo de lidar com ansiedade. A Dra não é só psicóloga, é luz!`,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't5',
    name: 'R.V.',
    role: 'Paciente',
    text: `Comecei com a Dra Andreia numa altura em que tudo me pesava. Não sabia se falar com alguém ia ajudar, mas desde a primeira conversa senti alívio. A sua forma calma, sem julgamentos, ajudou-me a perceber-me melhor e a largar pesos antigos. Saímos diferentes. Para melhor.`,
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee4880058?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't6',
    name: 'E.C.',
    role: 'Paciente',
    text: `Conheci a Dra Andreia numa fase crítica da minha vida e com diagnóstico tardio de PHDA. A empatia, profissionalismo e acompanhamento foram essenciais para compreender e ultrapassar este novo desafio. A psicoterapia não resolve tudo, mas com a Dra encontrei orientação, energia e apoio fundamentais.`,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'kit-intervencao',
    title: 'Kit Intervenção Completa',
    price: 600.00,
    description: 'Abordagem CCIAPM de 4 Fatores. Inclui 6 consultas/sessões à sua escolha + acesso a 1 formação/workshop por tempo limitado. (Inclui 1 consulta gratuita e desconto >80% na formação).',
    image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      '6 Consultas/Sessões',
      '1 Formação/Workshop',
      'Faseamento: 4x 150€',
      'Poupança Significativa'
    ],
    installments: 4
  },
  {
    id: 'kit-saude-mental',
    title: 'Kit Saúde Mental',
    price: 400.00,
    description: 'Abordagem CCIAPM. 3 sessões de Psicologia/Psicoterapia + 3 sessões de Atenção Plena, Yoga Terapêutico & Respiração Consciente.',
    image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      '3 Sessões Psicologia',
      '3 Sessões Sensoriais',
      'Faseamento: 3x 133.33€',
      '1 Sessão Gratuita'
    ],
    installments: 3
  },
  {
    id: 'manual-ebook',
    title: 'E-book: Manual de Apoio',
    price: 34.99,
    description: 'Manual "Abordagem CCIAPM de 4 Fatores". O guia definitivo para intervenção clínica em saúde mental.',
    image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Brevemente Disponível',
      'Formato Digital'
    ],
    comingSoon: true
  },
  {
    id: 'workshops-online',
    title: 'Workshops & Cursos Online',
    price: 99.00,
    description: 'Formações no âmbito da Abordagem CCIAPM de 4 Fatores.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Brevemente Disponível',
      'Certificado Incluído'
    ],
    comingSoon: true
  },
  {
    id: 'linha-reforcos',
    title: 'Linha de Reforços Positivos',
    price: 29.90,
    description: 'Exclusivos da CCIAPM. Funcionam como reforços da superação de cada etapa da intervenção.',
    image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Brevemente Disponível',
      'Acesso Exclusivo a Pacientes'
    ],
    comingSoon: true
  }
];

export const INSIGHT_CARDS: InsightCard[] = [
  {
    id: 'missao-cciamp',
    image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Missão',
    shortDescription: 'Na CCIAPM, acreditamos que o bem-estar nasce do equilíbrio entre todas as dimensões da vida. Desenvolvemos a Abordagem CCIAPM de 4 Fatores para uma intervenção integrada.',
    fullDescription: `Na CCIAPM, acreditamos que o bem-estar nasce do equilíbrio entre todas as dimensões da vida. Por isso, desenvolvemos a Abordagem CCIAPM de 4 Fatores, um modelo multidisciplinar que atua em 4 Níveis essenciais (Psicoafetivo, Sensorial, Físico e Intelectual).
Esta abordagem global permite-nos avaliar e intervir de forma integrada, respondendo às necessidades únicas de cada pessoa e apoiando-a na reconstrução da sua melhor versão, física, emocional e mental.`
  },
  {
    id: 'valores-cciamp',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Valores',
    shortDescription: 'Promovemos e acreditamos que a ética, a inovação, a colaboração, a excelência, a transparência, a honestidade, a integridade e a solidariedade são os pilares da nossa equipa e da humanidade.',
    fullDescription: `Promovemos e acreditamos que a ética, a inovação, a colaboração multidisciplinar e multifatorial, a excelência, a transparência, a honestidade, a integridade e a solidariedade são os valores pelos quais a humanidade se deve reger e são, por isso, indubitavelmente, os valores pelos quais toda a equipa CCIAPM se rege.`
  },
  {
    id: 'visao-cciamp',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Visão',
    shortDescription: 'Contribuir para o bem-estar integral das pessoas e organizações, promovendo mudanças duradouras que potenciem o seu desenvolvimento e qualidade de vida.',
    fullDescription: `1. Contribuir para o bem-estar integral das pessoas e organizações, promovendo mudanças duradouras que potenciem o seu desenvolvimento e qualidade de vida.

2. Ser uma referência no cuidado integrado e multidisciplinar, ajudando pessoas e organizações a alcançar a sua melhor versão e a criar um impacto positivo na comunidade onde se inserem.

3. Tornar acessível uma abordagem de cuidado multidimensional, que integra corpo, mente e vida, permitindo que cada pessoa e organização evolua com equilíbrio e propósito.

4. Partilhar e promover que as nossas iniciativas/doações tenham um efeito multiplicador na comunidade/sociedade.`
  },
];

// src/constants.ts

export interface CardFactor {
  id: number;
  title: string;
  description: string[];
  image: string;
}

export interface AccordionFactor {
  id: number;
  title: string;
  content: string[];
}

export const CARD_FACTORS: CardFactor[] = [
  {
    id: 1,
    title: 'Psicologia e Psicoterapias – Nível Psicoafetivo',
    description: [
      '• Automatismos',
      '• Cognição e esquemas mentais',
      '• Emoção e Comportamento',
    ],
    image: '/images/icon1.png',
  },
  {
    id: 2,
    title: 'Mindfulness – Nível Sensorial',
    description: [
      '• Piloto automático',
      '• Prevenção',
      '• Mindfulness',
    ],
    image: '/images/icon2.png',
  },
  {
    id: 3,
    title: 'Clínica e Saúde – Nível Físico',
    description: [
      '• Atividade física',
      '• Autocuidado',
      '• Relação com o corpo',
    ],
    image: '/images/icon3.png',
  },
  {
    id: 4,
    title: 'Supervisão e Investigação – Nível Intelectual',
    description: [
      '• Leitura',
      '• Aprendizagem',
      '• Autoconhecimento',
    ],
    image: '/images/icon4.png',
  },
];

export const ACCORDION_FACTORS: AccordionFactor[] = [
  {
    id: 1,
    title: 'Fator 1 – Nível Psicoafetivo',
    content: [
      'Psicologia Clínica e da Saúde',
      'Psicologia da Educação e Psicologia Escolar',
      'Psicologia da Justiça e do Comportamento Desviante',
      'Psicologia Social e das Organizações e Behavioral Science',
      'Psicologia/Psicoterapia: Terapia Cognitivo-Comportamental (TCC/CBT)',
      'Terapias de Grupo',
    ],
  },
  {
    id: 2,
    title: 'Fator 2 – Nível Sensorial',
    content: [
      'Atenção Plena, Yoga Terapêutico e Respiração consciente (individual)',
      'Atenção Plena, Yoga Terapêutico e Respiração consciente (grupo)',
    ],
  },
  {
    id: 3,
    title: 'Fator 3 – Nível Físico',
    content: [
      'Psiquiatria',
      'Medicina Geral e Familiar',
      'Nutrição',
      'Avaliação da Composição Corporal',
      'Planos de Treino',
    ],
  },
  {
    id: 4,
    title: 'Fator 4 – Nível Intelectual',
    content: [
      'Supervisão Clínica',
      'Formações/Workshops/Cursos:',
      '• Empresarial & Executivos',
      '• Profissionais de Saúde',
      '• Público em Geral',
      'Direito de Família, Direito do Trabalho e Direito Criminal',
      'Aconselhamento de Ação Social e Serviços Sociais',
      'Aconselhamento Financeiro e Orientação em Literacia Financeira',
      'Projetos de consultoria e investigação nas áreas de especialidade da equipa',
      'Serviços de apoio à investigação e projetos académicos:',
      '• consultoria na área académica',
      '• apoio à comunicação científica e tradução da ciência a comunidades não científicas',
      '• apoio à escrita científica',
      '• orientação de trabalhos académicos (licenciatura, mestrado, doutoramento)',
    ],
  },
];