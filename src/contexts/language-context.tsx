"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "pt-BR" | "pt-PT" | "en" | "es" | "fr" | "de" | "it";

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  // Navbar
  "nav.home": {
    "pt-BR": "INÍCIO",
    "pt-PT": "INÍCIO",
    "en": "HOME",
    "es": "INICIO",
    "fr": "ACCUEIL",
    "de": "STARTSEITE",
    "it": "HOME"
  },
  "nav.about": {
    "pt-BR": "SOBRE",
    "pt-PT": "SOBRE",
    "en": "ABOUT",
    "es": "ACERCA",
    "fr": "À PROPOS",
    "de": "ÜBER UNS",
    "it": "CHI SIAMO"
  },
  "nav.catalog": {
    "pt-BR": "CATÁLOGO",
    "pt-PT": "CATÁLOGO",
    "en": "CATALOG",
    "es": "CATÁLOGO",
    "fr": "CATALOGUE",
    "de": "KATALOG",
    "it": "CATALOGO"
  },
  "nav.vip": {
    "pt-BR": "ÁREA VIP",
    "pt-PT": "ÁREA VIP",
    "en": "VIP AREA",
    "es": "ÁREA VIP",
    "fr": "ESPACE VIP",
    "de": "VIP-BEREICH",
    "it": "AREA VIP"
  },
  "nav.subtitle": {
    "pt-BR": "JOALHARIA PREMIUM",
    "pt-PT": "JOALHARIA PREMIUM",
    "en": "PREMIUM JEWELRY",
    "es": "JOYERÍA PREMIUM",
    "fr": "BIJOUTERIE PREMIUM",
    "de": "PREMIUM SCHMUCK",
    "it": "GIOIELLERIA PREMIUM"
  },

  // About Page
  "about.badge": {
    "pt-BR": "NOSSA HISTÓRIA",
    "pt-PT": "NOSSA HISTÓRIA",
    "en": "OUR STORY",
    "es": "NUESTRA HISTORIA",
    "fr": "NOTRE HISTOIRE",
    "de": "UNSERE GESCHICHTE",
    "it": "LA NOSTRA STORIA"
  },
  "about.title": {
    "pt-BR": "Excelência em Joalharia desde 2003",
    "pt-PT": "Excelência em Joalharia desde 2003",
    "en": "Excellence in Jewelry since 2003",
    "es": "Excelencia en Joyería desde 2003",
    "fr": "Excellence en Bijouterie depuis 2003",
    "de": "Exzellenz im Schmuck seit 2003",
    "it": "Eccellenza nella Gioielleria dal 2003"
  },
  "about.subtitle": {
    "pt-BR": "Há mais de duas décadas, a Aurelion tem sido sinônimo de luxo, exclusividade e maestria artesanal no universo da alta joalharia.",
    "pt-PT": "Há mais de duas décadas, a Aurelion tem sido sinónimo de luxo, exclusividade e maestria artesanal no universo da alta joalharia.",
    "en": "For over two decades, Aurelion has been synonymous with luxury, exclusivity and artisanal mastery in the world of fine jewelry.",
    "es": "Durante más de dos décadas, Aurelion ha sido sinónimo de lujo, exclusividad y maestría artesanal en el universo de la alta joyería.",
    "fr": "Depuis plus de deux décennies, Aurelion est synonyme de luxe, d'exclusivité et de maîtrise artisanale dans l'univers de la haute joaillerie.",
    "de": "Seit über zwei Jahrzehnten steht Aurelion für Luxus, Exklusivität und handwerkliche Meisterschaft in der Welt des feinen Schmucks.",
    "it": "Da oltre due decenni, Aurelion è sinonimo di lusso, esclusività e maestria artigianale nel mondo dell'alta gioielleria."
  },
  "about.history.title": {
    "pt-BR": "Mais de 20 Anos de Tradição",
    "pt-PT": "Mais de 20 Anos de Tradição",
    "en": "Over 20 Years of Tradition",
    "es": "Más de 20 Años de Tradición",
    "fr": "Plus de 20 Ans de Tradition",
    "de": "Über 20 Jahre Tradition",
    "it": "Oltre 20 Anni di Tradizione"
  },
  "about.history.p1": {
    "pt-BR": "Fundada em 2003, a Aurelion nasceu do sonho de criar peças de joalharia que transcendem o tempo. Nossos mestres artesãos, com décadas de experiência, combinam técnicas ancestrais com design contemporâneo para criar verdadeiras obras de arte em ouro 18k.",
    "pt-PT": "Fundada em 2003, a Aurelion nasceu do sonho de criar peças de joalharia que transcendem o tempo. Os nossos mestres artesãos, com décadas de experiência, combinam técnicas ancestrais com design contemporâneo para criar verdadeiras obras de arte em ouro 18k.",
    "en": "Founded in 2003, Aurelion was born from the dream of creating jewelry pieces that transcend time. Our master craftsmen, with decades of experience, combine ancestral techniques with contemporary design to create true works of art in 18k gold.",
    "es": "Fundada en 2003, Aurelion nació del sueño de crear piezas de joyería que trascienden el tiempo. Nuestros maestros artesanos, con décadas de experiencia, combinan técnicas ancestrales con diseño contemporáneo para crear verdaderas obras de arte en oro de 18k.",
    "fr": "Fondée en 2003, Aurelion est née du rêve de créer des pièces de bijouterie qui transcendent le temps. Nos maîtres artisans, avec des décennies d'expérience, combinent des techniques ancestrales avec un design contemporain pour créer de véritables œuvres d'art en or 18 carats.",
    "de": "Aurelion wurde 2003 aus dem Traum geboren, Schmuckstücke zu schaffen, die die Zeit überdauern. Unsere Meisterhandwerker mit jahrzehntelanger Erfahrung kombinieren uralte Techniken mit zeitgenössischem Design, um wahre Kunstwerke aus 18-Karat-Gold zu schaffen.",
    "it": "Fondata nel 2003, Aurelion è nata dal sogno di creare gioielli che trascendono il tempo. I nostri maestri artigiani, con decenni di esperienza, combinano tecniche ancestrali con design contemporaneo per creare vere opere d'arte in oro 18k."
  },
  "about.history.p2": {
    "pt-BR": "Ao longo dessas duas décadas, construímos uma reputação sólida baseada na excelência, confiança e discrição. Cada peça que sai de nosso atelier é única, carregando consigo a história e o compromisso com a perfeição que nos define.",
    "pt-PT": "Ao longo destas duas décadas, construímos uma reputação sólida baseada na excelência, confiança e discrição. Cada peça que sai do nosso atelier é única, carregando consigo a história e o compromisso com a perfeição que nos define.",
    "en": "Throughout these two decades, we have built a solid reputation based on excellence, trust and discretion. Each piece that leaves our atelier is unique, carrying with it the history and commitment to perfection that defines us.",
    "es": "A lo largo de estas dos décadas, hemos construido una reputación sólida basada en la excelencia, la confianza y la discreción. Cada pieza que sale de nuestro taller es única, llevando consigo la historia y el compromiso con la perfección que nos define.",
    "fr": "Au cours de ces deux décennies, nous avons construit une solide réputation basée sur l'excellence, la confiance et la discrétion. Chaque pièce qui sort de notre atelier est unique, portant avec elle l'histoire et l'engagement envers la perfection qui nous définit.",
    "de": "Im Laufe dieser zwei Jahrzehnte haben wir einen soliden Ruf aufgebaut, der auf Exzellenz, Vertrauen und Diskretion basiert. Jedes Stück, das unser Atelier verlässt, ist einzigartig und trägt die Geschichte und das Engagement für Perfektion in sich, die uns definieren.",
    "it": "Nel corso di questi due decenni, abbiamo costruito una solida reputazione basata sull'eccellenza, la fiducia e la discrezione. Ogni pezzo che esce dal nostro atelier è unico, portando con sé la storia e l'impegno per la perfezione che ci definisce."
  },
  "about.history.p3": {
    "pt-BR": "Nossa trajetória é marcada por conquistas significativas: parcerias com as maiores casas de moda europeias, presença em eventos exclusivos internacionais e, principalmente, a confiança depositada por nossos clientes mais exigentes.",
    "pt-PT": "A nossa trajetória é marcada por conquistas significativas: parcerias com as maiores casas de moda europeias, presença em eventos exclusivos internacionais e, principalmente, a confiança depositada pelos nossos clientes mais exigentes.",
    "en": "Our journey is marked by significant achievements: partnerships with the largest European fashion houses, presence at exclusive international events and, most importantly, the trust placed by our most demanding clients.",
    "es": "Nuestro trayecto está marcado por logros significativos: asociaciones con las mayores casas de moda europeas, presencia en eventos exclusivos internacionales y, principalmente, la confianza depositada por nuestros clientes más exigentes.",
    "fr": "Notre parcours est marqué par des réalisations significatives : partenariats avec les plus grandes maisons de mode européennes, présence lors d'événements exclusifs internationaux et, surtout, la confiance accordée par nos clients les plus exigeants.",
    "de": "Unsere Reise ist geprägt von bedeutenden Erfolgen: Partnerschaften mit den größten europäischen Modehäusern, Präsenz bei exklusiven internationalen Veranstaltungen und vor allem das Vertrauen unserer anspruchsvollsten Kunden.",
    "it": "Il nostro percorso è segnato da traguardi significativi: partnership con le più grandi case di moda europee, presenza in eventi esclusivi internazionali e, soprattutto, la fiducia riposta dai nostri clienti più esigenti."
  },
  "about.stats.years": {
    "pt-BR": "ANOS DE EXCELÊNCIA",
    "pt-PT": "ANOS DE EXCELÊNCIA",
    "en": "YEARS OF EXCELLENCE",
    "es": "AÑOS DE EXCELENCIA",
    "fr": "ANNÉES D'EXCELLENCE",
    "de": "JAHRE EXZELLENZ",
    "it": "ANNI DI ECCELLENZA"
  },
  "about.stats.clients": {
    "pt-BR": "CLIENTES VIP",
    "pt-PT": "CLIENTES VIP",
    "en": "VIP CLIENTS",
    "es": "CLIENTES VIP",
    "fr": "CLIENTS VIP",
    "de": "VIP-KUNDEN",
    "it": "CLIENTI VIP"
  },
  "about.stats.satisfaction": {
    "pt-BR": "SATISFAÇÃO",
    "pt-PT": "SATISFAÇÃO",
    "en": "SATISFACTION",
    "es": "SATISFACCIÓN",
    "fr": "SATISFACTION",
    "de": "ZUFRIEDENHEIT",
    "it": "SODDISFAZIONE"
  },
  "about.elite.title": {
    "pt-BR": "Clientela de Elite",
    "pt-PT": "Clientela de Elite",
    "en": "Elite Clientele",
    "es": "Clientela de Élite",
    "fr": "Clientèle d'Élite",
    "de": "Elite-Kundschaft",
    "it": "Clientela d'Elite"
  },
  "about.elite.p1": {
    "pt-BR": "A Aurelion tem a honra de servir uma clientela distinta que inclui celebridades internacionais, membros da alta sociedade, empresários de renome e colecionadores exigentes. Nossa discrição é absoluta, mas nosso orgulho em criar peças para personalidades que valorizam a verdadeira excelência é imenso.",
    "pt-PT": "A Aurelion tem a honra de servir uma clientela distinta que inclui celebridades internacionais, membros da alta sociedade, empresários de renome e colecionadores exigentes. A nossa discrição é absoluta, mas o nosso orgulho em criar peças para personalidades que valorizam a verdadeira excelência é imenso.",
    "en": "Aurelion has the honor of serving a distinguished clientele that includes international celebrities, members of high society, renowned entrepreneurs and demanding collectors. Our discretion is absolute, but our pride in creating pieces for personalities who value true excellence is immense.",
    "es": "Aurelion tiene el honor de servir a una clientela distinguida que incluye celebridades internacionales, miembros de la alta sociedad, empresarios de renombre y coleccionistas exigentes. Nuestra discreción es absoluta, pero nuestro orgullo en crear piezas para personalidades que valoran la verdadera excelencia es inmenso.",
    "fr": "Aurelion a l'honneur de servir une clientèle distinguée qui comprend des célébrités internationales, des membres de la haute société, des entrepreneurs renommés et des collectionneurs exigeants. Notre discrétion est absolue, mais notre fierté de créer des pièces pour des personnalités qui valorisent la véritable excellence est immense.",
    "de": "Aurelion hat die Ehre, eine angesehene Kundschaft zu bedienen, zu der internationale Prominente, Mitglieder der High Society, renommierte Unternehmer und anspruchsvolle Sammler gehören. Unsere Diskretion ist absolut, aber unser Stolz, Stücke für Persönlichkeiten zu schaffen, die wahre Exzellenz schätzen, ist immens.",
    "it": "Aurelion ha l'onore di servire una clientela distinta che include celebrità internazionali, membri dell'alta società, imprenditori di fama e collezionisti esigenti. La nostra discrezione è assoluta, ma il nostro orgoglio nel creare pezzi per personalità che apprezzano la vera eccellenza è immenso."
  },
  "about.elite.p2": {
    "pt-BR": "Cada peça criada para nossos clientes VIP é uma colaboração íntima entre nossos mestres joalheiros e a visão única de cada cliente. Do conceito inicial à entrega final, garantimos uma experiência incomparável de luxo e exclusividade.",
    "pt-PT": "Cada peça criada para os nossos clientes VIP é uma colaboração íntima entre os nossos mestres joalheiros e a visão única de cada cliente. Do conceito inicial à entrega final, garantimos uma experiência incomparável de luxo e exclusividade.",
    "en": "Each piece created for our VIP clients is an intimate collaboration between our master jewelers and each client's unique vision. From initial concept to final delivery, we guarantee an incomparable experience of luxury and exclusivity.",
    "es": "Cada pieza creada para nuestros clientes VIP es una colaboración íntima entre nuestros maestros joyeros y la visión única de cada cliente. Desde el concepto inicial hasta la entrega final, garantizamos una experiencia incomparable de lujo y exclusividad.",
    "fr": "Chaque pièce créée pour nos clients VIP est une collaboration intime entre nos maîtres bijoutiers et la vision unique de chaque client. Du concept initial à la livraison finale, nous garantissons une expérience incomparable de luxe et d'exclusivité.",
    "de": "Jedes für unsere VIP-Kunden geschaffene Stück ist eine intime Zusammenarbeit zwischen unseren Meisterjuwelieren und der einzigartigen Vision jedes Kunden. Vom ersten Konzept bis zur endgültigen Lieferung garantieren wir ein unvergleichliches Erlebnis von Luxus und Exklusivität.",
    "it": "Ogni pezzo creato per i nostri clienti VIP è una collaborazione intima tra i nostri maestri gioiellieri e la visione unica di ogni cliente. Dal concetto iniziale alla consegna finale, garantiamo un'esperienza incomparabile di lusso ed esclusività."
  },
  "about.letter.greeting": {
    "pt-BR": "À distinta Maison Aurelion,",
    "pt-PT": "À distinta Maison Aurelion,",
    "en": "To the distinguished Maison Aurelion,",
    "es": "A la distinguida Maison Aurelion,",
    "fr": "À la distinguée Maison Aurelion,",
    "de": "An das angesehene Maison Aurelion,",
    "it": "Alla distinta Maison Aurelion,"
  },
  "about.letter.p1": {
    "pt-BR": "É com imensa satisfação que expresso minha profunda gratidão pela magnífica peça que tive a honra de encomendar. A maestria demonstrada na execução, a atenção aos mais ínfimos detalhes e a qualidade incomparável do ouro 18k superaram todas as minhas expectativas.",
    "pt-PT": "É com imensa satisfação que expresso a minha profunda gratidão pela magnífica peça que tive a honra de encomendar. A maestria demonstrada na execução, a atenção aos mais ínfimos detalhes e a qualidade incomparável do ouro 18k superaram todas as minhas expectativas.",
    "en": "It is with immense satisfaction that I express my deep gratitude for the magnificent piece I had the honor of commissioning. The mastery demonstrated in execution, attention to the smallest details and incomparable quality of 18k gold exceeded all my expectations.",
    "es": "Es con inmensa satisfacción que expreso mi profunda gratitud por la magnífica pieza que tuve el honor de encargar. La maestría demostrada en la ejecución, la atención a los más mínimos detalles y la calidad incomparable del oro de 18k superaron todas mis expectativas.",
    "fr": "C'est avec une immense satisfaction que j'exprime ma profonde gratitude pour la magnifique pièce que j'ai eu l'honneur de commander. La maîtrise démontrée dans l'exécution, l'attention aux moindres détails et la qualité incomparable de l'or 18 carats ont dépassé toutes mes attentes.",
    "de": "Mit großer Zufriedenheit drücke ich meine tiefe Dankbarkeit für das prächtige Stück aus, das ich in Auftrag geben durfte. Die bei der Ausführung gezeigte Meisterschaft, die Aufmerksamkeit für kleinste Details und die unvergleichliche Qualität des 18-Karat-Goldes übertrafen alle meine Erwartungen.",
    "it": "È con immensa soddisfazione che esprimo la mia profonda gratitudine per il magnifico pezzo che ho avuto l'onore di commissionare. La maestria dimostrata nell'esecuzione, l'attenzione ai più piccoli dettagli e la qualità incomparabile dell'oro 18k hanno superato tutte le mie aspettative."
  },
  "about.letter.p2": {
    "pt-BR": "A experiência de trabalhar com vossa equipe foi verdadeiramente excepcional. A discrição, o profissionalismo e a dedicação demonstrados em cada etapa do processo refletem a excelência que distingue a Aurelion no universo da alta joalharia.",
    "pt-PT": "A experiência de trabalhar com a vossa equipa foi verdadeiramente excepcional. A discrição, o profissionalismo e a dedicação demonstrados em cada etapa do processo refletem a excelência que distingue a Aurelion no universo da alta joalharia.",
    "en": "The experience of working with your team was truly exceptional. The discretion, professionalism and dedication demonstrated at each stage of the process reflect the excellence that distinguishes Aurelion in the world of fine jewelry.",
    "es": "La experiencia de trabajar con su equipo fue verdaderamente excepcional. La discreción, el profesionalismo y la dedicación demostrados en cada etapa del proceso reflejan la excelencia que distingue a Aurelion en el universo de la alta joyería.",
    "fr": "L'expérience de travailler avec votre équipe a été vraiment exceptionnelle. La discrétion, le professionnalisme et le dévouement démontrés à chaque étape du processus reflètent l'excellence qui distingue Aurelion dans l'univers de la haute joaillerie.",
    "de": "Die Erfahrung der Zusammenarbeit mit Ihrem Team war wirklich außergewöhnlich. Die Diskretion, Professionalität und Hingabe, die in jeder Phase des Prozesses gezeigt wurden, spiegeln die Exzellenz wider, die Aurelion in der Welt des feinen Schmucks auszeichnet.",
    "it": "L'esperienza di lavorare con il vostro team è stata davvero eccezionale. La discrezione, la professionalità e la dedizione dimostrate in ogni fase del processo riflettono l'eccellenza che distingue Aurelion nel mondo dell'alta gioielleria."
  },
  "about.letter.p3": {
    "pt-BR": "Esta peça não é apenas uma joia, mas uma obra de arte que será transmitida através de gerações, carregando consigo a história de excelência e sofisticação que apenas a Aurelion pode proporcionar.",
    "pt-PT": "Esta peça não é apenas uma joia, mas uma obra de arte que será transmitida através de gerações, carregando consigo a história de excelência e sofisticação que apenas a Aurelion pode proporcionar.",
    "en": "This piece is not just a jewel, but a work of art that will be passed down through generations, carrying with it the story of excellence and sophistication that only Aurelion can provide.",
    "es": "Esta pieza no es solo una joya, sino una obra de arte que se transmitirá a través de generaciones, llevando consigo la historia de excelencia y sofisticación que solo Aurelion puede proporcionar.",
    "fr": "Cette pièce n'est pas seulement un bijou, mais une œuvre d'art qui sera transmise à travers les générations, portant avec elle l'histoire d'excellence et de sophistication que seule Aurelion peut offrir.",
    "de": "Dieses Stück ist nicht nur ein Schmuckstück, sondern ein Kunstwerk, das über Generationen weitergegeben wird und die Geschichte von Exzellenz und Raffinesse trägt, die nur Aurelion bieten kann.",
    "it": "Questo pezzo non è solo un gioiello, ma un'opera d'arte che verrà tramandata attraverso le generazioni, portando con sé la storia di eccellenza e raffinatezza che solo Aurelion può offrire."
  },
  "about.letter.closing": {
    "pt-BR": "Com os mais elevados cumprimentos e admiração,",
    "pt-PT": "Com os mais elevados cumprimentos e admiração,",
    "en": "With the highest regards and admiration,",
    "es": "Con los más altos saludos y admiración,",
    "fr": "Avec les plus hautes salutations et admiration,",
    "de": "Mit den höchsten Grüßen und Bewunderung,",
    "it": "Con i più alti saluti e ammirazione,"
  },
  "about.letter.signature": {
    "pt-BR": "Cliente Distinguido",
    "pt-PT": "Cliente Distinto",
    "en": "Distinguished Client",
    "es": "Cliente Distinguido",
    "fr": "Client Distingué",
    "de": "Angesehener Kunde",
    "it": "Cliente Distinto"
  },
  "about.values.craftsmanship.title": {
    "pt-BR": "Artesanato de Excelência",
    "pt-PT": "Artesanato de Excelência",
    "en": "Excellence in Craftsmanship",
    "es": "Artesanía de Excelencia",
    "fr": "Artisanat d'Excellence",
    "de": "Exzellente Handwerkskunst",
    "it": "Artigianato d'Eccellenza"
  },
  "about.values.craftsmanship.description": {
    "pt-BR": "Cada peça é meticulosamente trabalhada por mestres joalheiros com décadas de experiência, garantindo perfeição em cada detalhe.",
    "pt-PT": "Cada peça é meticulosamente trabalhada por mestres joalheiros com décadas de experiência, garantindo perfeição em cada detalhe.",
    "en": "Each piece is meticulously crafted by master jewelers with decades of experience, ensuring perfection in every detail.",
    "es": "Cada pieza es meticulosamente trabajada por maestros joyeros con décadas de experiencia, garantizando perfección en cada detalle.",
    "fr": "Chaque pièce est méticuleusement travaillée par des maîtres bijoutiers avec des décennies d'expérience, garantissant la perfection dans chaque détail.",
    "de": "Jedes Stück wird von Meisterjuwelieren mit jahrzehntelanger Erfahrung sorgfältig gefertigt und garantiert Perfektion in jedem Detail.",
    "it": "Ogni pezzo è meticolosamente lavorato da maestri gioiellieri con decenni di esperienza, garantendo perfezione in ogni dettaglio."
  },
  "about.values.exclusivity.title": {
    "pt-BR": "Exclusividade Garantida",
    "pt-PT": "Exclusividade Garantida",
    "en": "Guaranteed Exclusivity",
    "es": "Exclusividad Garantizada",
    "fr": "Exclusivité Garantie",
    "de": "Garantierte Exklusivität",
    "it": "Esclusività Garantita"
  },
  "about.values.exclusivity.description": {
    "pt-BR": "Produzimos apenas peças limitadas e personalizadas, garantindo que cada cliente possua algo verdadeiramente único e inigualável.",
    "pt-PT": "Produzimos apenas peças limitadas e personalizadas, garantindo que cada cliente possua algo verdadeiramente único e inigualável.",
    "en": "We produce only limited and customized pieces, ensuring that each client owns something truly unique and unmatched.",
    "es": "Producimos solo piezas limitadas y personalizadas, garantizando que cada cliente posea algo verdaderamente único e inigualable.",
    "fr": "Nous produisons uniquement des pièces limitées et personnalisées, garantissant que chaque client possède quelque chose de vraiment unique et inégalé.",
    "de": "Wir produzieren nur limitierte und maßgeschneiderte Stücke und stellen sicher, dass jeder Kunde etwas wirklich Einzigartiges und Unvergleichliches besitzt.",
    "it": "Produciamo solo pezzi limitati e personalizzati, garantendo che ogni cliente possieda qualcosa di veramente unico e ineguagliabile."
  },

  // Home Page
  "home.hero.title": {
    "pt-BR": "Joalharia de Excelência",
    "pt-PT": "Joalharia de Excelência",
    "en": "Excellence in Jewelry",
    "es": "Joyería de Excelencia",
    "fr": "Bijouterie d'Excellence",
    "de": "Exzellenter Schmuck",
    "it": "Gioielleria d'Eccellenza"
  },
  "home.hero.description": {
    "pt-BR": "Peças únicas em ouro 18k, criadas com maestria artesanal. Cada joia conta uma história de elegância atemporal.",
    "pt-PT": "Peças únicas em ouro 18k, criadas com maestria artesanal. Cada joia conta uma história de elegância atemporal.",
    "en": "Unique 18k gold pieces, crafted with artisanal mastery. Each jewel tells a story of timeless elegance.",
    "es": "Piezas únicas en oro de 18k, creadas con maestría artesanal. Cada joya cuenta una historia de elegancia atemporal.",
    "fr": "Pièces uniques en or 18 carats, créées avec une maîtrise artisanale. Chaque bijou raconte une histoire d'élégance intemporelle.",
    "de": "Einzigartige 18-Karat-Goldstücke, handwerklich meisterhaft gefertigt. Jedes Schmuckstück erzählt eine Geschichte zeitloser Eleganz.",
    "it": "Pezzi unici in oro 18k, creati con maestria artigianale. Ogni gioiello racconta una storia di eleganza senza tempo."
  },
  "home.cta.catalog": {
    "pt-BR": "EXPLORAR CATÁLOGO",
    "pt-PT": "EXPLORAR CATÁLOGO",
    "en": "EXPLORE CATALOG",
    "es": "EXPLORAR CATÁLOGO",
    "fr": "EXPLORER LE CATALOGUE",
    "de": "KATALOG ERKUNDEN",
    "it": "ESPLORA CATALOGO"
  },
  "home.cta.vip": {
    "pt-BR": "ACESSO VIP",
    "pt-PT": "ACESSO VIP",
    "en": "VIP ACCESS",
    "es": "ACCESO VIP",
    "fr": "ACCÈS VIP",
    "de": "VIP-ZUGANG",
    "it": "ACCESSO VIP"
  },
  "home.feature1.title": {
    "pt-BR": "OURO 18K",
    "pt-PT": "OURO 18K",
    "en": "18K GOLD",
    "es": "ORO 18K",
    "fr": "OR 18 CARATS",
    "de": "18K GOLD",
    "it": "ORO 18K"
  },
  "home.feature1.description": {
    "pt-BR": "Apenas os metais mais nobres para peças que atravessam gerações",
    "pt-PT": "Apenas os metais mais nobres para peças que atravessam gerações",
    "en": "Only the noblest metals for pieces that span generations",
    "es": "Solo los metales más nobles para piezas que atraviesan generaciones",
    "fr": "Seuls les métaux les plus nobles pour des pièces qui traversent les générations",
    "de": "Nur die edelsten Metalle für Stücke, die Generationen überdauern",
    "it": "Solo i metalli più nobili per pezzi che attraversano le generazioni"
  },
  "home.feature2.title": {
    "pt-BR": "ARTESANAL",
    "pt-PT": "ARTESANAL",
    "en": "HANDCRAFTED",
    "es": "ARTESANAL",
    "fr": "ARTISANAL",
    "de": "HANDGEFERTIGT",
    "it": "ARTIGIANALE"
  },
  "home.feature2.description": {
    "pt-BR": "Cada detalhe esculpido à mão por mestres joalheiros",
    "pt-PT": "Cada detalhe esculpido à mão por mestres joalheiros",
    "en": "Every detail hand-carved by master jewelers",
    "es": "Cada detalle esculpido a mano por maestros joyeros",
    "fr": "Chaque détail sculpté à la main par des maîtres bijoutiers",
    "de": "Jedes Detail von Meisterjuwelieren handgeschnitzt",
    "it": "Ogni dettaglio scolpito a mano da maestri gioiellieri"
  },
  "home.feature3.title": {
    "pt-BR": "EXCLUSIVO",
    "pt-PT": "EXCLUSIVO",
    "en": "EXCLUSIVE",
    "es": "EXCLUSIVO",
    "fr": "EXCLUSIF",
    "de": "EXKLUSIV",
    "it": "ESCLUSIVO"
  },
  "home.feature3.description": {
    "pt-BR": "Peças limitadas e personalizáveis para clientes VIP",
    "pt-PT": "Peças limitadas e personalizáveis para clientes VIP",
    "en": "Limited and customizable pieces for VIP clients",
    "es": "Piezas limitadas y personalizables para clientes VIP",
    "fr": "Pièces limitées et personnalisables pour clients VIP",
    "de": "Limitierte und anpassbare Stücke für VIP-Kunden",
    "it": "Pezzi limitati e personalizzabili per clienti VIP"
  },
  "home.cta2.title": {
    "pt-BR": "Torne-se Membro VIP",
    "pt-PT": "Torne-se Membro VIP",
    "en": "Become a VIP Member",
    "es": "Conviértete en Miembro VIP",
    "fr": "Devenez Membre VIP",
    "de": "Werden Sie VIP-Mitglied",
    "it": "Diventa Membro VIP"
  },
  "home.cta2.description": {
    "pt-BR": "Acesso antecipado a coleções exclusivas, personalização ilimitada e atendimento prioritário",
    "pt-PT": "Acesso antecipado a coleções exclusivas, personalização ilimitada e atendimento prioritário",
    "en": "Early access to exclusive collections, unlimited customization and priority service",
    "es": "Acceso anticipado a colecciones exclusivas, personalización ilimitada y atención prioritaria",
    "fr": "Accès anticipé aux collections exclusives, personnalisation illimitée et service prioritaire",
    "de": "Frühzeitiger Zugang zu exklusiven Kollektionen, unbegrenzte Anpassung und vorrangiger Service",
    "it": "Accesso anticipato a collezioni esclusive, personalizzazione illimitata e servizio prioritario"
  },
  "home.cta2.button": {
    "pt-BR": "DESCOBRIR BENEFÍCIOS",
    "pt-PT": "DESCOBRIR BENEFÍCIOS",
    "en": "DISCOVER BENEFITS",
    "es": "DESCUBRIR BENEFICIOS",
    "fr": "DÉCOUVRIR LES AVANTAGES",
    "de": "VORTEILE ENTDECKEN",
    "it": "SCOPRI I VANTAGGI"
  },

  // Catalog Page
  "catalog.title": {
    "pt-BR": "Catálogo Premium",
    "pt-PT": "Catálogo Premium",
    "en": "Premium Catalog",
    "es": "Catálogo Premium",
    "fr": "Catalogue Premium",
    "de": "Premium-Katalog",
    "it": "Catalogo Premium"
  },
  "catalog.subtitle": {
    "pt-BR": "Explore nossa coleção exclusiva de fivelas em ouro 18k",
    "pt-PT": "Explore nossa coleção exclusiva de fivelas em ouro 18k",
    "en": "Explore our exclusive collection of 18k gold buckles",
    "es": "Explore nuestra colección exclusiva de hebillas de oro de 18k",
    "fr": "Explorez notre collection exclusive de boucles en or 18 carats",
    "de": "Entdecken Sie unsere exklusive Kollektion von 18-Karat-Goldschnallen",
    "it": "Esplora la nostra collezione esclusiva di fibbie in oro 18k"
  },
  "catalog.product1.name": {
    "pt-BR": "Fivela Imperial",
    "pt-PT": "Fivela Imperial",
    "en": "Imperial Buckle",
    "es": "Hebilla Imperial",
    "fr": "Boucle Impériale",
    "de": "Kaiserliche Schnalle",
    "it": "Fibbia Imperiale"
  },
  "catalog.product1.description": {
    "pt-BR": "Ouro 18k com acabamento polido",
    "pt-PT": "Ouro 18k com acabamento polido",
    "en": "18k gold with polished finish",
    "es": "Oro 18k con acabado pulido",
    "fr": "Or 18 carats avec finition polie",
    "de": "18-Karat-Gold mit polierter Oberfläche",
    "it": "Oro 18k con finitura lucida"
  },
  "catalog.product2.name": {
    "pt-BR": "Fivela Majestosa",
    "pt-PT": "Fivela Majestosa",
    "en": "Majestic Buckle",
    "es": "Hebilla Majestuosa",
    "fr": "Boucle Majestueuse",
    "de": "Majestätische Schnalle",
    "it": "Fibbia Maestosa"
  },
  "catalog.product2.description": {
    "pt-BR": "Ouro 18k com detalhes em relevo",
    "pt-PT": "Ouro 18k com detalhes em relevo",
    "en": "18k gold with embossed details",
    "es": "Oro 18k con detalles en relieve",
    "fr": "Or 18 carats avec détails en relief",
    "de": "18-Karat-Gold mit geprägten Details",
    "it": "Oro 18k con dettagli in rilievo"
  },
  "catalog.product3.name": {
    "pt-BR": "Fivela Régia",
    "pt-PT": "Fivela Régia",
    "en": "Regal Buckle",
    "es": "Hebilla Regia",
    "fr": "Boucle Royale",
    "de": "Königliche Schnalle",
    "it": "Fibbia Regale"
  },
  "catalog.product3.description": {
    "pt-BR": "Ouro 18k com design minimalista",
    "pt-PT": "Ouro 18k com design minimalista",
    "en": "18k gold with minimalist design",
    "es": "Oro 18k con diseño minimalista",
    "fr": "Or 18 carats avec design minimaliste",
    "de": "18-Karat-Gold mit minimalistischem Design",
    "it": "Oro 18k con design minimalista"
  },
  "catalog.product4.name": {
    "pt-BR": "Fivela Soberana",
    "pt-PT": "Fivela Soberana",
    "en": "Sovereign Buckle",
    "es": "Hebilla Soberana",
    "fr": "Boucle Souveraine",
    "de": "Souveräne Schnalle",
    "it": "Fibbia Sovrana"
  },
  "catalog.product4.description": {
    "pt-BR": "Ouro 18k com incrustações",
    "pt-PT": "Ouro 18k com incrustações",
    "en": "18k gold with inlays",
    "es": "Oro 18k con incrustaciones",
    "fr": "Or 18 carats avec incrustations",
    "de": "18-Karat-Gold mit Einlagen",
    "it": "Oro 18k con intarsi"
  },
  "catalog.product5.name": {
    "pt-BR": "Fivela Nobre",
    "pt-PT": "Fivela Nobre",
    "en": "Noble Buckle",
    "es": "Hebilla Noble",
    "fr": "Boucle Noble",
    "de": "Edle Schnalle",
    "it": "Fibbia Nobile"
  },
  "catalog.product5.description": {
    "pt-BR": "Ouro 18k com textura artesanal",
    "pt-PT": "Ouro 18k com textura artesanal",
    "en": "18k gold with artisanal texture",
    "es": "Oro 18k con textura artesanal",
    "fr": "Or 18 carats avec texture artisanale",
    "de": "18-Karat-Gold mit handwerklicher Textur",
    "it": "Oro 18k con texture artigianale"
  },
  "catalog.product6.name": {
    "pt-BR": "Fivela Suprema",
    "pt-PT": "Fivela Suprema",
    "en": "Supreme Buckle",
    "es": "Hebilla Suprema",
    "fr": "Boucle Suprême",
    "de": "Supreme Schnalle",
    "it": "Fibbia Suprema"
  },
  "catalog.product6.description": {
    "pt-BR": "Ouro 18k edição limitada",
    "pt-PT": "Ouro 18k edição limitada",
    "en": "18k gold limited edition",
    "es": "Oro 18k edición limitada",
    "fr": "Or 18 carats édition limitée",
    "de": "18-Karat-Gold limitierte Auflage",
    "it": "Oro 18k edizione limitata"
  },
  "catalog.price": {
    "pt-BR": "PREÇO",
    "pt-PT": "PREÇO",
    "en": "PRICE",
    "es": "PRECIO",
    "fr": "PRIX",
    "de": "PREIS",
    "it": "PREZZO"
  },
  "catalog.cta.text": {
    "pt-BR": "Peças exclusivas disponíveis apenas para membros VIP",
    "pt-PT": "Peças exclusivas disponíveis apenas para membros VIP",
    "en": "Exclusive pieces available only for VIP members",
    "es": "Piezas exclusivas disponibles solo para miembros VIP",
    "fr": "Pièces exclusives disponibles uniquement pour les membres VIP",
    "de": "Exklusive Stücke nur für VIP-Mitglieder verfügbar",
    "it": "Pezzi esclusivi disponibili solo per membri VIP"
  },
  "catalog.cta.button": {
    "pt-BR": "TORNAR-SE VIP",
    "pt-PT": "TORNAR-SE VIP",
    "en": "BECOME VIP",
    "es": "HACERSE VIP",
    "fr": "DEVENIR VIP",
    "de": "VIP WERDEN",
    "it": "DIVENTA VIP"
  },

  // VIP Page
  "vip.hero.title": {
    "pt-BR": "Programa VIP Aurelion",
    "pt-PT": "Programa VIP Aurelion",
    "en": "Aurelion VIP Program",
    "es": "Programa VIP Aurelion",
    "fr": "Programme VIP Aurelion",
    "de": "Aurelion VIP-Programm",
    "it": "Programma VIP Aurelion"
  },
  "vip.hero.description": {
    "pt-BR": "Eleve sua experiência a um novo patamar de exclusividade. Desfrute de privilégios únicos e acesso a peças extraordinárias.",
    "pt-PT": "Eleve sua experiência a um novo patamar de exclusividade. Desfrute de privilégios únicos e acesso a peças extraordinárias.",
    "en": "Elevate your experience to a new level of exclusivity. Enjoy unique privileges and access to extraordinary pieces.",
    "es": "Eleve su experiencia a un nuevo nivel de exclusividad. Disfrute de privilegios únicos y acceso a piezas extraordinarias.",
    "fr": "Élevez votre expérience à un nouveau niveau d'exclusivité. Profitez de privilèges uniques et d'un accès à des pièces extraordinaires.",
    "de": "Heben Sie Ihr Erlebnis auf ein neues Niveau der Exklusivität. Genießen Sie einzigartige Privilegien und Zugang zu außergewöhnlichen Stücken.",
    "it": "Eleva la tua esperienza a un nuovo livello di esclusività. Goditi privilegi unici e accesso a pezzi straordinari."
  },
  "vip.benefits.title": {
    "pt-BR": "Benefícios Exclusivos",
    "pt-PT": "Benefícios Exclusivos",
    "en": "Exclusive Benefits",
    "es": "Beneficios Exclusivos",
    "fr": "Avantages Exclusifs",
    "de": "Exklusive Vorteile",
    "it": "Vantaggi Esclusivi"
  },
  "vip.benefits.subtitle": {
    "pt-BR": "Privilégios pensados para os mais exigentes",
    "pt-PT": "Privilégios pensados para os mais exigentes",
    "en": "Privileges designed for the most demanding",
    "es": "Privilegios pensados para los más exigentes",
    "fr": "Privilèges conçus pour les plus exigeants",
    "de": "Privilegien für die Anspruchsvollsten",
    "it": "Privilegi pensati per i più esigenti"
  },
  "vip.benefit1.title": {
    "pt-BR": "Acesso Antecipado",
    "pt-PT": "Acesso Antecipado",
    "en": "Early Access",
    "es": "Acceso Anticipado",
    "fr": "Accès Anticipé",
    "de": "Frühzeitiger Zugang",
    "it": "Accesso Anticipato"
  },
  "vip.benefit1.description": {
    "pt-BR": "Seja o primeiro a conhecer nossas novas coleções exclusivas",
    "pt-PT": "Seja o primeiro a conhecer nossas novas coleções exclusivas",
    "en": "Be the first to discover our new exclusive collections",
    "es": "Sea el primero en conocer nuestras nuevas colecciones exclusivas",
    "fr": "Soyez le premier à découvrir nos nouvelles collections exclusives",
    "de": "Seien Sie der Erste, der unsere neuen exklusiven Kollektionen entdeckt",
    "it": "Sii il primo a scoprire le nostre nuove collezioni esclusive"
  },
  "vip.benefit2.title": {
    "pt-BR": "Personalização Total",
    "pt-PT": "Personalização Total",
    "en": "Full Customization",
    "es": "Personalización Total",
    "fr": "Personnalisation Totale",
    "de": "Vollständige Anpassung",
    "it": "Personalizzazione Totale"
  },
  "vip.benefit2.description": {
    "pt-BR": "Crie peças únicas com nossos mestres joalheiros",
    "pt-PT": "Crie peças únicas com nossos mestres joalheiros",
    "en": "Create unique pieces with our master jewelers",
    "es": "Cree piezas únicas con nuestros maestros joyeros",
    "fr": "Créez des pièces uniques avec nos maîtres bijoutiers",
    "de": "Erstellen Sie einzigartige Stücke mit unseren Meisterjuwelieren",
    "it": "Crea pezzi unici con i nostri maestri gioiellieri"
  },
  "vip.benefit3.title": {
    "pt-BR": "Atendimento Prioritário",
    "pt-PT": "Atendimento Prioritário",
    "en": "Priority Service",
    "es": "Atención Prioritaria",
    "fr": "Service Prioritaire",
    "de": "Vorrangiger Service",
    "it": "Servizio Prioritario"
  },
  "vip.benefit3.description": {
    "pt-BR": "Suporte dedicado 24/7 para todas as suas necessidades",
    "pt-PT": "Suporte dedicado 24/7 para todas as suas necessidades",
    "en": "Dedicated 24/7 support for all your needs",
    "es": "Soporte dedicado 24/7 para todas sus necesidades",
    "fr": "Support dédié 24/7 pour tous vos besoins",
    "de": "Dedizierter 24/7-Support für alle Ihre Bedürfnisse",
    "it": "Supporto dedicato 24/7 per tutte le tue esigenze"
  },
  "vip.benefit4.title": {
    "pt-BR": "Eventos Exclusivos",
    "pt-PT": "Eventos Exclusivos",
    "en": "Exclusive Events",
    "es": "Eventos Exclusivos",
    "fr": "Événements Exclusifs",
    "de": "Exklusive Veranstaltungen",
    "it": "Eventi Esclusivi"
  },
  "vip.benefit4.description": {
    "pt-BR": "Convites para lançamentos e eventos VIP da marca",
    "pt-PT": "Convites para lançamentos e eventos VIP da marca",
    "en": "Invitations to brand launches and VIP events",
    "es": "Invitaciones a lanzamientos y eventos VIP de la marca",
    "fr": "Invitations aux lancements et événements VIP de la marque",
    "de": "Einladungen zu Markeneinführungen und VIP-Veranstaltungen",
    "it": "Inviti a lanci ed eventi VIP del brand"
  },
  "vip.benefit5.title": {
    "pt-BR": "Descontos Especiais",
    "pt-PT": "Descontos Especiais",
    "en": "Special Discounts",
    "es": "Descuentos Especiales",
    "fr": "Remises Spéciales",
    "de": "Sonderrabatte",
    "it": "Sconti Speciali"
  },
  "vip.benefit5.description": {
    "pt-BR": "Até 20% de desconto em toda a coleção premium",
    "pt-PT": "Até 20% de desconto em toda a coleção premium",
    "en": "Up to 20% discount on the entire premium collection",
    "es": "Hasta 20% de descuento en toda la colección premium",
    "fr": "Jusqu'à 20% de réduction sur toute la collection premium",
    "de": "Bis zu 20% Rabatt auf die gesamte Premium-Kollektion",
    "it": "Fino al 20% di sconto sull'intera collezione premium"
  },
  "vip.benefit6.title": {
    "pt-BR": "Edições Limitadas",
    "pt-PT": "Edições Limitadas",
    "en": "Limited Editions",
    "es": "Ediciones Limitadas",
    "fr": "Éditions Limitées",
    "de": "Limitierte Auflagen",
    "it": "Edizioni Limitate"
  },
  "vip.benefit6.description": {
    "pt-BR": "Acesso a peças únicas produzidas em tiragem limitada",
    "pt-PT": "Acesso a peças únicas produzidas em tiragem limitada",
    "en": "Access to unique pieces produced in limited runs",
    "es": "Acceso a piezas únicas producidas en tirada limitada",
    "fr": "Accès à des pièces uniques produites en tirage limité",
    "de": "Zugang zu einzigartigen Stücken in limitierter Auflage",
    "it": "Accesso a pezzi unici prodotti in tiratura limitata"
  },
  "vip.cta.title": {
    "pt-BR": "Torne-se Membro VIP",
    "pt-PT": "Torne-se Membro VIP",
    "en": "Become a VIP Member",
    "es": "Conviértase en Miembro VIP",
    "fr": "Devenez Membre VIP",
    "de": "Werden Sie VIP-Mitglied",
    "it": "Diventa Membro VIP"
  },
  "vip.cta.description": {
    "pt-BR": "Entre em contato conosco para conhecer os planos de associação e começar sua jornada de exclusividade",
    "pt-PT": "Entre em contato conosco para conhecer os planos de associação e começar sua jornada de exclusividade",
    "en": "Contact us to learn about membership plans and start your journey of exclusivity",
    "es": "Póngase en contacto con nosotros para conocer los planes de membresía y comenzar su viaje de exclusividad",
    "fr": "Contactez-nous pour découvrir les plans d'adhésion et commencer votre voyage d'exclusivité",
    "de": "Kontaktieren Sie uns, um mehr über Mitgliedschaftspläne zu erfahren und Ihre Reise der Exklusivität zu beginnen",
    "it": "Contattaci per conoscere i piani di adesione e iniziare il tuo viaggio di esclusività"
  },
  "vip.cta.button1": {
    "pt-BR": "SOLICITAR ACESSO",
    "pt-PT": "SOLICITAR ACESSO",
    "en": "REQUEST ACCESS",
    "es": "SOLICITAR ACCESO",
    "fr": "DEMANDER L'ACCÈS",
    "de": "ZUGANG ANFORDERN",
    "it": "RICHIEDI ACCESSO"
  },
  "vip.cta.button2": {
    "pt-BR": "SABER MAIS",
    "pt-PT": "SABER MAIS",
    "en": "LEARN MORE",
    "es": "SABER MÁS",
    "fr": "EN SAVOIR PLUS",
    "de": "MEHR ERFAHREN",
    "it": "SCOPRI DI PIÙ"
  },
  "vip.cta.footer": {
    "pt-BR": "Vagas limitadas • Aprovação mediante análise",
    "pt-PT": "Vagas limitadas • Aprovação mediante análise",
    "en": "Limited spots • Approval upon review",
    "es": "Plazas limitadas • Aprobación mediante análisis",
    "fr": "Places limitées • Approbation après examen",
    "de": "Begrenzte Plätze • Genehmigung nach Prüfung",
    "it": "Posti limitati • Approvazione previo esame"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt-PT");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
