export const WHATSAPP_MAIN = "https://wa.me/5549998288682";
export const WHATSAPP_SECONDARY = "https://wa.me/5549991071260";
export const INSTAGRAM = "https://www.instagram.com/lavacaobrilhoscar/";

export const waLink = (msg: string) =>
  `${WHATSAPP_MAIN}?text=${encodeURIComponent(msg)}`;

export const services = [
  {
    n: "01",
    title: "Lavação Técnica Detalhada",
    text: "Cuidado milimétrico em cada friso e detalhe da lataria, chassi e caixas de roda, sem marcas ou riscos.",
    img: "/images/lavacao.jpg",
  },
  {
    n: "02",
    title: "Polimento e Correção de Verniz",
    text: "Remoção de micro-riscos e devolução do brilho profundo original, com acabamento espelhado.",
    img: "/images/polimento.jpg",
  },
  {
    n: "03",
    title: "Higienização Interna & Couro",
    text: "Conforto, frescor e proteção de bancos, carpetes, teto e acabamentos, com limpeza e desinfecção profundas.",
    img: "/images/interna.jpg",
  },
  {
    n: "04",
    title: "Proteção e Estética Geral",
    text: "Revitalização de faróis e plásticos, vitrificação e selagem de proteção da pintura.",
    img: "/images/protecao.jpg",
  },
];

export const differentials = [
  {
    title: "Capricho em cada detalhe",
    text: "Tratamos cada veículo como se fosse o nosso. O olhar minucioso faz a diferença no acabamento final.",
  },
  {
    title: "Agilidade com qualidade",
    text: "Entrega rápida, sem abrir mão do padrão. Seu tempo importa tanto quanto o seu carro.",
  },
  {
    title: "Equipe dedicada",
    text: "Rucks, Leandro e toda a equipe entregam um trabalho em que os clientes confiam, há anos.",
  },
  {
    title: "Atendimento acolhedor",
    text: "Conversa direta pelo WhatsApp, preço justo e a atenção de quem conhece o seu veículo.",
  },
];

export const reviews = [
  {
    name: "Bernardo Augusto Gunther",
    tag: "Local Guide",
    text: "O Rucks, Leandro e toda equipe da Brilhos Car fazem um trabalho excelente e o meu carro sai a brilhar! Super recomendo!",
  },
  {
    name: "Juliano Luchini",
    tag: "Local Guide",
    text: "Serviço de qualidade e confiança, cliente já há algum tempo.",
  },
  {
    name: "Priscila de Paula",
    tag: "Cliente",
    text: "Serviço de qualidade, caprichoso, cuidado com o nosso veículo. Preço bom e ótimo atendimento.",
  },
  {
    name: "Guilherme S.A.",
    tag: "Local Guide",
    text: "Recomendo, pessoal rápido no serviço, preço justo, ótima localização.",
  },
  {
    name: "Lucas Segala",
    tag: "Cliente",
    text: "Top, malta caprichosa, gente boa, e as colaboradoras super simpáticas.",
  },
  {
    name: "Ester Antonia",
    tag: "Cliente",
    text: "Trabalho ótimo. Atenciosos e muito caprichosos. Recomendo.",
  },
];

export const units = [
  {
    name: "Unidade Imperial",
    badge: "Principal",
    street: "Rua da Paz, 61",
    area: "Bairro Imperial, Concórdia - SC",
    q: "Rua da Paz, 61, Imperial, Concórdia - SC",
  },
  {
    name: "Unidade Centro",
    badge: "Centro",
    street: "Rua 29 de Julho, 335",
    area: "Centro, Concórdia - SC",
    q: "Rua 29 de Julho, 335, Centro, Concórdia - SC",
  },
];
