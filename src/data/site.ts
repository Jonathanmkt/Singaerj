/**
 * Conteúdo do site — migrado 1:1 do WordPress (singaerj.org.br).
 */

export const WHATSAPP_NUMBER = "552131991949";

/** Monta um link wa.me com mensagem pré-preenchida. */
export const wa = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Mensagem genérica (botão flutuante, "Agendar", contato)
export const WHATSAPP_URL = wa("Olá! Vim pelo site do Singaerj e gostaria de atendimento.");
export const WHATSAPP_WAME_URL = WHATSAPP_URL;

// Mensagens por perfil no bloco "Fale Conosco"
export const WHATSAPP_CIDADAO = wa(
  "Olá! Vim pelo site do Singaerj. Sou cidadão, usuário do Sistema Rio Rotativo, e gostaria de atendimento."
);
export const WHATSAPP_ASSOCIADO = wa(
  "Olá! Vim pelo site do Singaerj. Sou guardador associado e gostaria de atendimento."
);

export const SOCIAL = {
  facebook: "https://www.facebook.com/SINGAERJ1949",
  instagram: "https://www.instagram.com/singaerj/",
  youtube: "https://www.youtube.com/@singaerj1949",
};

export const YOUTUBE_VIDEO_ID = "iMdQsqYt7Dk";

export const NAV_LINKS = [
  { label: "Início", to: "/" },
  { label: "Benefícios", to: "/beneficios" },
  { label: "História", to: "/historia" },
  { label: "Legislação", to: "/legislacao" },
  { label: "Notícias", to: "/noticias" },
  { label: "Contato", to: "/contato" },
];

export const STATS = [
  { value: 70, suffix: "+", label: "Anos de História" },
  { value: 2000, suffix: "+", label: "Associados" },
  { value: 30, suffix: "k+", label: "Usuários por dia" },
];

export interface Beneficio {
  titulo: string;
  descricao: string;
  imagem: string;
  /** Link wa.me com mensagem específica do benefício (botão "Agendar"). */
  agendarUrl: string;
}

export const BENEFICIOS: Beneficio[] = [
  {
    titulo: "Dentista na Sede",
    descricao: "Um consultório completo com diversos serviços gratuitos.",
    imagem: "/images/beneficios/img1.png",
    agendarUrl: wa(
      "Olá! Vim pelo site do Singaerj e gostaria de saber mais sobre o agendamento para atendimento odontológico (dentista) na sede."
    ),
  },
  {
    titulo: "Consultas e Exames",
    descricao:
      "São mais de 20 clínicas em diversos bairros com consultas e exames grátis.",
    imagem: "/images/beneficios/img2.png",
    agendarUrl: wa(
      "Olá! Vim pelo site do Singaerj e gostaria de saber mais sobre o agendamento de consultas e exames nas clínicas conveniadas."
    ),
  },
  {
    titulo: "Sala Multiuso",
    descricao:
      "Uma sala onde diversas especialidades são oferecidas, como oftalmologista, podólogo e muitos outros.",
    imagem: "/images/beneficios/img3.png",
    agendarUrl: wa(
      "Olá! Vim pelo site do Singaerj e gostaria de saber mais sobre o agendamento na sala multiuso (oftalmologista, podólogo e outras especialidades)."
    ),
  },
  {
    titulo: "Assessoria Jurídica",
    descricao:
      "Nossos advogados estão prontos para ajudar nossos associados nas mais diversas áreas do direito.",
    imagem: "/images/beneficios/img4.png",
    agendarUrl: wa(
      "Olá! Vim pelo site do Singaerj e gostaria de saber mais sobre o atendimento da assessoria jurídica para associados."
    ),
  },
  {
    titulo: "Sesi",
    descricao:
      "Associados do Singaerj podem ter sua carteirinha do Sesi e usufruir de inúmeros serviços e benefícios.",
    imagem: "/images/beneficios/sesi.jpg",
    agendarUrl: wa(
      "Olá! Vim pelo site do Singaerj e gostaria de saber mais sobre a carteirinha e os benefícios do Sesi."
    ),
  },
  {
    titulo: "Clube São Cristóvão",
    descricao:
      "Nossos associados têm direito a usar as dependências do São Cristóvão Futebol e Regatas, com direito a quadras esportivas, churrasqueira e salão de festas.",
    imagem: "/images/beneficios/img5.png",
    agendarUrl: wa(
      "Olá! Vim pelo site do Singaerj e gostaria de saber mais sobre o acesso ao Clube São Cristóvão (quadras, churrasqueira e salão de festas)."
    ),
  },
  {
    titulo: "Barbearia na Sede",
    descricao:
      "Nossa barbearia funciona na nossa sede, às terças e quintas, com cortes de cabelo e barba gratuitos.",
    imagem: "/images/beneficios/img6.png",
    agendarUrl: wa(
      "Olá! Vim pelo site do Singaerj e gostaria de saber mais sobre o agendamento na barbearia da sede (corte de cabelo e barba)."
    ),
  },
  {
    titulo: "Nova Sede com 1.500 m²",
    descricao:
      "Um novo espaço com capacidade de atender nossos associados e usuários de maneira eficiente e confortável.",
    imagem: "/images/beneficios/img7.png",
    agendarUrl: wa(
      "Olá! Vim pelo site do Singaerj e gostaria de saber mais sobre a nova sede e o atendimento aos associados."
    ),
  },
  {
    titulo: "Sindicato Itinerante",
    descricao:
      "Adquirimos uma van para estar mais próximo dos nossos guardadores, atendendo e fiscalizando.",
    imagem: "/images/beneficios/img8.png",
    agendarUrl: wa(
      "Olá! Vim pelo site do Singaerj e gostaria de saber mais sobre o projeto Sindicato Itinerante."
    ),
  },
];

export interface FatoHistorico {
  titulo: string;
  resumo: string;
  detalhes: string[];
  imagem: string;
}

export const HISTORIA: FatoHistorico[] = [
  {
    titulo: "Criação da Profissão",
    resumo:
      "Em 1931, a então Inspetoria de Veículos instituiu os guardadores de automóveis e criou a gorjeta obrigatória, que obrigava os motoristas a gratificar os guardadores com qualquer valor em troca da segurança dos automóveis.",
    detalhes: [
      "Os estacionamentos foram divididos em postos e cada guardador foi registrado por um número de identificação e ficou responsável por um destes postos, os quais, após a retirada do automóvel, emitiam um canhoto em nome da “inspectoria” de veículos do Rio de Janeiro.",
      "Esse registro histórico nos mostra o surgimento da profissão na cidade do Rio de Janeiro como uma iniciativa da gestão pública, a fim de lidar com o surgimento da frota de veículos no município, advento urbano mais significante daquela década.",
    ],
    imagem: "/images/historia/inspetoria.png",
  },
  {
    titulo: "Nasce o Singaerj",
    resumo:
      "O crescimento da frota municipal acontecia de forma exponencial e o número de guardadores seguia proporcionalmente esse avanço.",
    detalhes: [
      "Segundo algumas fontes não oficiais, muitos pracinhas, ao retornarem da Segunda Guerra, encontraram na atividade de guardador uma forma de voltar a ter sua renda assegurada, enquanto os programas de reintegração eram desenvolvidos. Esse crescimento de demanda e contingente fez nascer o Singaerj, em 1949, pautado nos valores de respeito e confiança, que é a base da atividade dos verdadeiros guardadores até hoje.",
      "Desde então o Singaerj tem sido reconhecido como a instituição gestora do sistema de estacionamento municipal no espaço público e representante legítimo dos guardadores do Rio de Janeiro.",
    ],
    imagem: "/images/historia/nasce-singaerj.jpg",
  },
  {
    titulo: "Reconhecimento Federal",
    resumo:
      "Em 1975 o processo do surgimento das grandes cidades avançava e a atividade de guardador precisava ser disciplinada. Foi então que o Presidente Geisel sancionou a Lei 6.242 de 1975, reconhecendo a profissão e criando requisitos para atuação como guardador.",
    detalhes: [
      "Para ingressar na profissão passa a ser exigido ao cidadão estar em dia com seus deveres cívicos e comprovar seus bons antecedentes.",
      "Em 1979 foi publicado o decreto que veio instruir como deveria ser a divisão do trabalho e suas responsabilidades, assim como o percentual devido a cada entidade envolvida no processo.",
    ],
    imagem: "/images/historia/reconhecimento-federal.jpg",
  },
  {
    titulo: "Reconhecimento Municipal",
    resumo:
      "A regulamentação federal apontava para um funcionamento dos sistemas de estacionamento no qual as entidades de classe firmariam convênio ou contrato com o poder público municipal de cada cidade.",
    detalhes: [
      "Foi então que, em 1979, ainda na primeira legislatura da Câmara do Rio como capital do recém-criado estado do Rio de Janeiro, foi aprovada e sancionada a Lei Municipal 88 daquele mesmo ano, que autorizava a prefeitura a firmar convênio com o Singaerj para gestão do hoje chamado “Sistema Rio Rotativo”.",
      "A publicação da Lei Municipal 88 de 1979 deu a chancela ao Singaerj, que àquela altura, com 30 anos de existência, já figurava de maneira consolidada como legítimo representante da categoria e responsável pela gestão do trabalho e desenvolvimento dos guardadores.",
    ],
    imagem: "/images/historia/reconhecimento-municipal.jpg",
  },
  {
    titulo: "Último Reajuste",
    resumo:
      "A tarifa de estacionamento em espaço público na Cidade do Rio de Janeiro teve um leve reajuste em 2004, passando de R$ 1,75 para R$ 2,00.",
    detalhes: [
      "Desde então não houve outro reajuste e o guardador vem acompanhando seu poder de compra se deteriorar, ano após ano, com o acumulado da inflação nesse período.",
      "Trabalhar, ano após ano, numa atividade um tanto quanto estigmatizada por parte da população e ainda perceber o valor de seu trabalho derreter por quase duas décadas provoca graves prejuízos financeiros e também de autoestima a uma classe de trabalhadores já tão desfavorecida em nossa sociedade.",
      "O Singaerj, como legítimo representante da categoria dos guardadores de automóveis, atua, através de sua Diretoria, no sentido de influenciar o poder público para que essa injustiça seja revista e o guardador possa trabalhar de forma oficial e levar o sustento de suas famílias com dignidade.",
    ],
    imagem: "/images/historia/reajuste.jpg",
  },
  {
    titulo: "Manifestação na Cinelândia",
    resumo:
      "Em 2009 já completávamos 5 anos sem reajuste em nossas tarifas e, ainda assim, os guardadores do Rio de Janeiro apresentavam organização, união e força de trabalho respeitada em toda a cidade.",
    detalhes: [
      "Na ocasião foi apresentado um projeto de lei que propunha o fim da cobrança da tarifa de estacionamento na orla da Zona Sul da cidade, local de maior demanda e também mais nobre do município. O projeto, que seguia em direção à aprovação, teve uma reviravolta em sua votação graças à demonstração de força da categoria liderada pelo Singaerj.",
      "A imagem usada nesse quadro é emblemática, pois remete a um tempo em que o Sindicato conseguia mobilizar e organizar a categoria, que, como visto, estava muito bem disciplinada e unida, mesmo com já 5 anos sem reajuste na ocasião.",
    ],
    imagem: "/images/historia/manifestacao.jpg",
  },
  {
    titulo: "Programa de Reestruturação",
    resumo:
      "O longo período sem reajustes criou, em toda a categoria, uma grande insatisfação.",
    detalhes: [
      "Como em todo sistema democrático, grandes crises podem gerar oportunidades para movimentos políticos oportunistas capazes de atrasar e prejudicar as instituições. Não foi diferente em nosso Sindicato, que passou por um longo período de retrocesso e disputas internas, até ter seu fechamento como ápice da crise.",
      "O Ministério Público do Trabalho interveio e mediou eleições legítimas, reconhecidas pelo poder judiciário, que oportunizaram a posse da atual diretoria já no final do ano de 2021.",
      "Hoje o Singaerj passa por um processo de reestruturação com o objetivo de resgatar a autoestima do guardador e a eficiência do Sistema Rio Rotativo.",
    ],
    imagem: "/images/historia/reestruturacao.jpg",
  },
];

export interface Lei {
  categoria: string;
  numero: string;
  descricao: string;
  linkLabel: string;
  url: string;
  imagem: string;
  observacao?: string;
}

export const LEGISLACAO: Lei[] = [
  {
    categoria: "Lei Federal",
    numero: "6.242 de 1975",
    descricao:
      "Reconhece e oficializa a profissão de Guardador de Automóveis em todo o território nacional, dando legalidade e caráter oficial à atividade.",
    linkLabel: "Acessar lei",
    url: "http://www.planalto.gov.br/ccivil_03/Leis/1970-1979/l6242.htm",
    imagem: "/images/legislacao/congresso.jpg",
  },
  {
    categoria: "Decreto Presidencial",
    numero: "79.797 de 1977",
    descricao:
      "Regulamenta o papel das instituições na administração dos estacionamentos públicos e estabelece regras para ingressar na profissão.",
    linkLabel: "Acessar decreto",
    url: "https://www.planalto.gov.br/ccivil_03/decreto/1970-1979/d79797.htm",
    imagem: "/images/legislacao/decreto.jpg",
  },
  {
    categoria: "Lei Municipal",
    numero: "88 de 1979",
    descricao:
      "Reconhece o Singaerj como a instituição oficial para firmar convênios e contratos com o município do Rio de Janeiro.",
    linkLabel: "Acessar lei*",
    url: "http://www.camara.rio/atividade-parlamentar/legislacao/municipal/leis-ordinarias",
    imagem: "/images/legislacao/camara-rio.jpg",
    observacao: "*Necessário buscar por ano e número.",
  },
];

export interface Noticia {
  slug: string;
  categoria: string;
  titulo: string;
  subtitulo: string;
  imagem: string;
  paragrafos: string[];
}

export const NOTICIAS: Noticia[] = [
  {
    slug: "singaerj-itinerante-chega-a-urca",
    categoria: "Singaerj Itinerante",
    titulo: "Singaerj Itinerante chega à Urca",
    subtitulo: "Equipes do Sindicato trabalharam das 7h às 23h",
    imagem: "/images/noticias/urca.jpg",
    paragrafos: [
      "O Singaerj, através do projeto Sindicato Itinerante, esteve presente nos dias 26 e 27 de agosto, sábado e domingo, fiscalizando e ordenando o funcionamento do estacionamento rotativo no bairro da Urca. A iniciativa teve a participação da Diretoria, Gerência e Encarregados e teve como objetivo coibir práticas ilegais e abusivas denunciadas por cidadãos e autoridades.",
      "Ciente de que o fortalecimento da categoria só é possível através da organização, o Presidente, Moisés Trajane, informou que o projeto continuará funcionando e alcançando outras localidades em breve: “Temos feito um trabalho de levar o Sindicato Itinerante a alguns bairros. Já estivemos na Barra, em Copacabana, Tijuca e agora estamos aqui na Urca. A ideia é continuar fortalecendo a organização e a imagem da categoria. Somente cumprindo nossos deveres teremos condições de conquistar nossos direitos”, concluiu.",
      "O trabalho aconteceu com o apoio de uma van e de uma tenda montada próximo ao Pão de Açúcar. Essas fiscalizações estão dentro de uma série de iniciativas que têm como objetivo reestruturar o Sindicato, recuperar a imagem da categoria e garantir aos verdadeiros guardadores condições de trabalho dignas e justas.",
    ],
  },
];

export const AREA_RESTRITA_URL = "https://singa-app.bubbleapps.io/login_encarregado";
