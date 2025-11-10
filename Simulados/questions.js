// questions.js
const questionBank = {
  cirurgia: [
    {
      enunciado: "Homem de 25 anos, vítima de acidente motociclístico há 1 hora. PA 80x40 mmHg, FC 130 bpm, enchimento capilar lento e extremidades frias. Abdome distendido e doloroso difusamente. Qual a conduta imediata?",
      alternativas: [
        "Reposição volêmica vigorosa com cristaloide e TC de abdome contrastada.",
        "Laparotomia exploradora imediata.",
        "FAST negativo e observação clínica.",
        "Infusão de sangue total e antibioticoterapia empírica."
      ],
      correta: 1,
      explicacao: "Paciente em choque hipovolêmico com peritonite após trauma contuso. O diagnóstico provável é lesão visceral com sangramento ativo — indicação de laparotomia exploradora imediata, sem exames complementares."
    },
    {
      enunciado: "Mulher de 48 anos, com colelitíase sintomática, apresenta dor intensa no hipocôndrio direito e febre há 24h. Exame físico: sinal de Murphy positivo. Qual o diagnóstico e conduta?",
      alternativas: [
        "Colecistite aguda; internação, antibiótico e colecistectomia precoce.",
        "Colangite aguda; antibiótico e drenagem biliar endoscópica.",
        "Cólica biliar; analgesia e alta.",
        "Pancreatite aguda; jejum e hidratação vigorosa."
      ],
      correta: 0,
      explicacao: "Sinal de Murphy positivo, febre e dor em HCD indicam colecistite aguda. O tratamento é clínico inicial (antibiótico + suporte) seguido de colecistectomia precoce, idealmente nas primeiras 72h."
    },
    {
      enunciado: "Homem de 60 anos, tabagista, apresenta dor intensa em membro inferior direito iniciada há 4h, ausência de pulsos distais e palidez. Qual o diagnóstico e conduta mais adequada?",
      alternativas: [
        "Trombose venosa profunda; anticoagulação plena.",
        "Embolia arterial aguda; heparinização imediata e embolectomia.",
        "Isquemia crônica; revascularização eletiva.",
        "Celulite infecciosa; antibioticoterapia."
      ],
      correta: 1,
      explicacao: "Isquemia arterial aguda com dor súbita, ausência de pulso e palidez é típica de embolia arterial. A conduta inicial é heparinização sistêmica imediata e embolectomia urgente."
    },
    {
      enunciado: "Homem de 70 anos, tabagista, com massa pulsátil em abdome e dor lombar súbita irradiando para dorso. PA 80x50 mmHg. Qual o diagnóstico provável?",
      alternativas: [
        "Pancreatite aguda.",
        "Aneurisma de aorta abdominal roto.",
        "Dissecção de aorta torácica.",
        "Cólica renal obstrutiva."
      ],
      correta: 1,
      explicacao: "Quadro típico de aneurisma de aorta abdominal roto — dor lombar intensa, massa pulsátil e hipotensão. É emergência cirúrgica com mortalidade elevada."
    },
    {
      enunciado: "Homem de 45 anos com dor em hipocôndrio direito, febre alta e icterícia há 2 dias. Qual o diagnóstico e conduta?",
      alternativas: [
        "Colecistite aguda; colecistectomia imediata.",
        "Colangite aguda; antibiótico EV e drenagem biliar urgente.",
        "Hepatite viral aguda; repouso e hidratação.",
        "Pancreatite aguda; jejum e analgesia."
      ],
      correta: 1,
      explicacao: "A tríade de Charcot (febre, dor em HCD, icterícia) caracteriza colangite aguda. O tratamento é antibiótico EV e drenagem biliar urgente (preferencialmente endoscópica)."
    },
    {
      enunciado: "Homem de 28 anos com dor abdominal súbita em flanco direito e vômitos. TC mostra apêndice de 12 mm com líquido pericecal. Qual a conduta adequada?",
      alternativas: [
        "Observação clínica e antibiótico oral.",
        "Apendicectomia laparoscópica de urgência.",
        "Apenas analgesia e retorno em 24h.",
        "Laparotomia exploradora ampla."
      ],
      correta: 1,
      explicacao: "Apêndice >6 mm e líquido pericecal indicam apendicite aguda com inflamação avançada. A conduta é apendicectomia laparoscópica de urgência."
    },
    {
      enunciado: "Homem de 52 anos com história de etilismo e hepatopatia crônica apresenta hematêmese volumosa. PA 90x60 mmHg, FC 120 bpm. Qual o manejo inicial?",
      alternativas: [
        "Endoscopia imediata.",
        "Reposição volêmica, octreotide e antibiótico profilático.",
        "Vitamina K e plasma fresco.",
        "Alta hospitalar após estabilização."
      ],
      correta: 1,
      explicacao: "O quadro sugere ruptura de varizes esofágicas. Conduta inicial: estabilização hemodinâmica, octreotide e antibiótico profilático (ceftriaxona). Endoscopia é feita após estabilização."
    },
    {
      enunciado: "Mulher de 30 anos, pós-cesariana há 5 dias, apresenta dor e empastamento em panturrilha esquerda. Diagnóstico provável?",
      alternativas: [
        "Trombose venosa profunda.",
        "Linfedema pós-operatório.",
        "Hematoma muscular.",
        "Celulite infecciosa."
      ],
      correta: 0,
      explicacao: "Dor, edema e empastamento de panturrilha no pós-operatório sugerem TVP. Diagnóstico confirmado por doppler venoso. Anticoagulação plena é indicada."
    },
    {
      enunciado: "Homem de 60 anos com dor epigástrica intensa irradiando para dorso, lipase 800 U/L. Após 48h, apresenta distensão abdominal e queda de hematócrito. Qual a principal complicação?",
      alternativas: [
        "Necrose pancreática hemorrágica.",
        "Íleo paralítico.",
        "Pseudoaneurisma esplênico.",
        "Abcesso hepático."
      ],
      correta: 0,
      explicacao: "A queda do hematócrito e distensão abdominal indicam necrose pancreática hemorrágica, uma das complicações graves da pancreatite aguda."
    },
    {
      enunciado: "Homem de 40 anos, após trauma torácico fechado, apresenta dispneia progressiva e enfisema subcutâneo. RX mostra desvio contralateral do mediastino. Qual o diagnóstico?",
      alternativas: [
        "Hemotórax maciço.",
        "Pneumotórax hipertensivo.",
        "Contusão pulmonar.",
        "Tamponamento cardíaco."
      ],
      correta: 1,
      explicacao: "Desvio de mediastino e dispneia súbita indicam pneumotórax hipertensivo — emergência tratada com toracocentese imediata no 2º EIC."
    },
    {
      enunciado: "Mulher de 55 anos com diagnóstico de câncer de cólon direito. Qual o exame pré-operatório obrigatório para estadiamento?",
      alternativas: [
        "Ultrassonografia abdominal.",
        "TC de tórax, abdome e pelve.",
        "PET-CT.",
        "Cintilografia óssea."
      ],
      correta: 1,
      explicacao: "O estadiamento do câncer colorretal requer TC de tórax, abdome e pelve para avaliar metástases hepáticas e pulmonares."
    },
    {
      enunciado: "Homem de 70 anos com constipação, dor abdominal e distensão. RX mostra nível hidroaéreo em alça única dilatada com imagem em grão de café. Diagnóstico?",
      alternativas: [
        "Volvo de sigmoide.",
        "Íleo paralítico.",
        "Obstrução por fecaloma.",
        "Carcinoma de cólon esquerdo."
      ],
      correta: 0,
      explicacao: "A imagem clássica em grão de café e alça única dilatada indicam volvo de sigmoide. Conduta inicial: descompressão endoscópica."
    },
    {
      enunciado: "Paciente de 68 anos, tabagista, refere disfagia progressiva para sólidos e perda de peso. Diagnóstico mais provável?",
      alternativas: [
        "Acalásia idiopática.",
        "Carcinoma de esôfago.",
        "Estenose péptica.",
        "Espasmo difuso do esôfago."
      ],
      correta: 1,
      explicacao: "Disfagia progressiva e perda ponderal são típicas de carcinoma de esôfago. O diagnóstico é confirmado por endoscopia com biópsia."
    },
    {
      enunciado: "Homem de 37 anos com dor abdominal difusa e febre após apendicectomia há 7 dias. TC mostra coleção pericecal. Conduta?",
      alternativas: [
        "Antibiótico oral e observação.",
        "Drenagem percutânea guiada por imagem.",
        "Reoperação de urgência.",
        "Curetagem de ferida operatória."
      ],
      correta: 1,
      explicacao: "Abscesso intra-abdominal pós-operatório deve ser drenado preferencialmente por via percutânea guiada por imagem, associado a antibiótico."
    },
    {
      enunciado: "Homem de 45 anos, vítima de facada em abdome, está hemodinamicamente estável, sem peritonite. Qual a conduta inicial?",
      alternativas: [
        "Laparotomia exploradora imediata.",
        "TC de abdome com contraste e observação.",
        "Laparoscopia diagnóstica obrigatória.",
        "Alta hospitalar."
      ],
      correta: 1,
      explicacao: "Ferimento penetrante em abdome com estabilidade hemodinâmica permite abordagem seletiva com TC contrastada e observação hospitalar."
    },
    {
      enunciado: "Homem de 52 anos com massa indolor na região inguinal que aumenta aos esforços e reduz em repouso. Diagnóstico?",
      alternativas: [
        "Hérnia femoral.",
        "Hérnia inguinal indireta.",
        "Hérnia direta.",
        "Lipoma subcutâneo."
      ],
      correta: 1,
      explicacao: "Hérnia inguinal indireta é mais comum em homens, aumenta aos esforços e reduz em repouso. Ocorre pelo anel inguinal profundo."
    },
    {
      enunciado: "Homem de 58 anos, fumante, apresenta dor em panturrilha ao caminhar 100 metros, aliviando com repouso. Diagnóstico e conduta inicial?",
      alternativas: [
        "Isquemia crítica; amputação.",
        "Doença arterial periférica; cessar tabagismo e exercício supervisionado.",
        "Tromboflebite superficial; anticoagulação.",
        "Síndrome compartimental; fasciotomia."
      ],
      correta: 1,
      explicacao: "Claudicação intermitente é manifestação clássica da doença arterial periférica. O tratamento inicial é conservador: cessar tabagismo e exercícios regulares."
    },
    {
      enunciado: "Homem de 36 anos com dor abdominal, vômitos e ausência de evacuação há 2 dias. RX mostra níveis hidroaéreos múltiplos. Qual o diagnóstico mais provável?",
      alternativas: [
        "Obstrução intestinal mecânica.",
        "Íleo paralítico.",
        "Perfuração intestinal.",
        "Pancreatite aguda."
      ],
      correta: 0,
      explicacao: "Níveis hidroaéreos múltiplos e distensão abdominal indicam obstrução mecânica, geralmente por bridas pós-operatórias em adultos."
    },
    {
      enunciado: "Homem de 67 anos, após gastrectomia há 1 ano, apresenta tontura e sudorese 30 min após refeições. Diagnóstico provável?",
      alternativas: [
        "Síndrome de dumping precoce.",
        "Síndrome de Alport.",
        "Síndrome de Mallory-Weiss.",
        "Gastrite alcalina de refluxo."
      ],
      correta: 0,
      explicacao: "Hipoglicemia e sintomas vasomotores precoces pós-refeição são típicos de dumping precoce, devido ao esvaziamento gástrico rápido."
    },
    {
      enunciado: "Homem de 30 anos, ferido por arma de fogo no abdome, PA 60x40 mmHg. Qual a prioridade imediata no atendimento?",
      alternativas: [
        "TC de abdome com contraste.",
        "Laparotomia imediata após controle de via aérea e reposição volêmica.",
        "Curativo compressivo e alta.",
        "Ultrassonografia FAST antes de qualquer medida."
      ],
      correta: 1,
      explicacao: "Paciente instável com trauma penetrante de abdome tem indicação imediata de laparotomia após estabilização básica (vias aéreas, acesso venoso e reposição)."
    }

  ],

  ginecologiaObstetricia: [
    {
      enunciado: "Gestante de 28 anos, 36 semanas, chega à maternidade com sangramento vaginal vermelho vivo, indolor e feto em apresentação cefálica, BCF presente. Qual o diagnóstico mais provável e a conduta inicial?",
      alternativas: [
        "Descolamento prematuro de placenta; cesariana imediata.",
        "Placenta prévia; ultrassonografia com doppler e repouso.",
        "Rotura uterina; laparotomia exploradora.",
        "Vasa prévia; parto vaginal assistido."
      ],
      correta: 1,
      explicacao: "Sangramento indolor e vermelho vivo no terceiro trimestre é típico de placenta prévia. A conduta inicial é ultrassonografia para confirmar o diagnóstico e repouso absoluto."
    },
    {
      enunciado: "Mulher de 42 anos apresenta menorragia há 8 meses e útero aumentado, firme e irregular ao toque. Ultrassonografia revela múltiplos nódulos miometriais. Qual o diagnóstico e tratamento de escolha?",
      alternativas: [
        "Adenomiose; anticoncepcional oral combinado.",
        "Miomatose uterina; histerectomia ou miomectomia conforme desejo reprodutivo.",
        "Endometriose; análogo de GnRH.",
        "Carcinoma endometrial; histerectomia radical."
      ],
      correta: 1,
      explicacao: "A presença de menorragia e útero irregular aumentado é típica de miomatose. O tratamento depende do desejo reprodutivo e da intensidade dos sintomas."
    },
    {
      enunciado: "Gestante de 32 anos, 30 semanas, apresenta PA 160x100 mmHg, cefaleia e epigastralgia. Exame de urina: proteinúria 3+. Qual o diagnóstico e a conduta?",
      alternativas: [
        "Hipertensão gestacional; controle ambulatorial.",
        "Pré-eclâmpsia grave; sulfato de magnésio e interrupção da gestação.",
        "Pré-eclâmpsia leve; repouso e observação.",
        "Síndrome HELLP; cesariana imediata."
      ],
      correta: 1,
      explicacao: "PA ≥160x110 ou sintomas de gravidade definem pré-eclâmpsia grave. O tratamento é sulfato de magnésio, controle pressórico e interrupção após estabilização materna."
    },
    {
      enunciado: "Mulher de 29 anos, G2P1, apresenta corrimento branco grumoso, prurido vulvar intenso e pH vaginal de 4,0. Qual o diagnóstico e o tratamento mais indicado?",
      alternativas: [
        "Tricomoníase; metronidazol oral.",
        "Vaginose bacteriana; clindamicina vaginal.",
        "Candidíase; fluconazol oral dose única.",
        "Cervicite gonocócica; ceftriaxona IM."
      ],
      correta: 2,
      explicacao: "Corrimento branco em grumos, pH ácido e prurido indicam candidíase. O tratamento é antifúngico oral (fluconazol) ou tópico."
    },
    {
      enunciado: "Mulher de 23 anos, G1P0, 8 semanas de gestação, apresenta sangramento vaginal discreto, cólicas leves e colo uterino fechado. Ultrassonografia mostra embrião vivo. Diagnóstico?",
      alternativas: [
        "Ameaça de aborto.",
        "Aborto inevitável.",
        "Aborto completo.",
        "Gestação anembrionada."
      ],
      correta: 0,
      explicacao: "Sangramento discreto, colo fechado e embrião viável caracterizam ameaça de aborto. Conduta: repouso e acompanhamento."
    },
    {
      enunciado: "Gestante de 34 anos, 28 semanas, refere prurido palmo-plantar e aumento de ácidos biliares. Qual o diagnóstico e o risco fetal associado?",
      alternativas: [
        "Colestase intra-hepática da gestação; risco de óbito fetal súbito.",
        "Pré-eclâmpsia; risco de eclampsia.",
        "Síndrome HELLP; risco de coagulação intravascular disseminada.",
        "Hepatite viral; risco de parto prematuro."
      ],
      correta: 0,
      explicacao: "A colestase gestacional cursa com prurido palmo-plantar e elevação de ácidos biliares, associada a risco de morte fetal intrauterina."
    },
    {
      enunciado: "Mulher de 26 anos com corrimento amarelado espumoso e colo em framboesa. Qual o diagnóstico e tratamento indicado?",
      alternativas: [
        "Vaginose bacteriana; metronidazol oral.",
        "Tricomoníase; metronidazol oral e tratar parceiro.",
        "Candidíase; nistatina vaginal.",
        "Gonorreia; azitromicina oral."
      ],
      correta: 1,
      explicacao: "Corrimento espumoso amarelado e colo em framboesa são típicos de tricomoníase. O tratamento é metronidazol oral e do parceiro."
    },
    {
      enunciado: "Gestante de 19 anos, 39 semanas, em trabalho de parto, apresenta líquido amniótico meconial espesso e BCF 90 bpm. Qual a conduta imediata?",
      alternativas: [
        "Aguardar dilatação completa.",
        "Oxigenoterapia e hidratação.",
        "Cesárea de emergência.",
        "Parto vaginal assistido."
      ],
      correta: 2,
      explicacao: "Mecônio espesso e bradicardia fetal indicam sofrimento fetal agudo, sendo indicada cesariana imediata."
    },
    {
      enunciado: "Mulher de 37 anos, 3 meses após parto, apresenta sangramento irregular e dor pélvica. β-hCG positivo. Ultrassonografia mostra massa uterina heterogênea. Diagnóstico provável?",
      alternativas: [
        "Restos placentários.",
        "Coriocarcinoma gestacional.",
        "Mola invasora.",
        "Adenomiose."
      ],
      correta: 1,
      explicacao: "Sangramento irregular com β-hCG elevado e massa uterina após gestação é sugestivo de coriocarcinoma, uma neoplasia trofoblástica maligna."
    },
    {
      enunciado: "Mulher de 45 anos apresenta fogachos, insônia e FSH elevado. Qual o diagnóstico e tratamento de escolha?",
      alternativas: [
        "Síndrome pré-menstrual; ISRS.",
        "Menopausa; reposição hormonal se sem contraindicação.",
        "Hipotireoidismo; levotiroxina.",
        "Depressão; terapia cognitivo-comportamental."
      ],
      correta: 1,
      explicacao: "FSH elevado e sintomas vasomotores indicam menopausa. A reposição hormonal é indicada se não houver contraindicações."
    },
    {
      enunciado: "Gestante de 22 semanas apresenta dilatação cervical sem contrações e perda de líquido. História de parto prematuro. Diagnóstico e conduta?",
      alternativas: [
        "Ameaça de parto prematuro; corticoterapia.",
        "Incompetência istmocervical; cerclagem de emergência.",
        "Ruptura prematura de membranas; antibioticoterapia.",
        "Aborto inevitável; curetagem."
      ],
      correta: 1,
      explicacao: "Dilatação cervical indolor com bolsa íntegra define incompetência istmocervical. Conduta: cerclagem de emergência até 24 semanas."
    },
    {
      enunciado: "Mulher de 35 anos com queixa de dor pélvica cíclica e dispareunia. USG mostra cisto ovariano de 5 cm com conteúdo espesso. Diagnóstico provável?",
      alternativas: [
        "Cisto funcional.",
        "Endometrioma.",
        "Cisto dermoide.",
        "Cisto seroso."
      ],
      correta: 1,
      explicacao: "Dor pélvica cíclica e cisto ovariano de conteúdo espesso indicam endometrioma, forma ovariana da endometriose."
    },
    {
      enunciado: "Gestante de 39 semanas, G3P2, com antecedentes de duas cesarianas prévias, entra em trabalho de parto. Qual a conduta?",
      alternativas: [
        "Permitir parto vaginal com vigilância.",
        "Indicar cesariana eletiva antes do início do trabalho de parto.",
        "Induzir parto com ocitocina.",
        "Aguardar evolução espontânea."
      ],
      correta: 1,
      explicacao: "Após duas cesarianas anteriores, o risco de rotura uterina é alto. Indica-se nova cesariana eletiva antes do início do trabalho de parto."
    },
    {
      enunciado: "Puérpera de 10 dias apresenta febre, lóquios fétidos e dor à palpação uterina. Qual o diagnóstico e tratamento?",
      alternativas: [
        "Mastite; amamentar e antibiótico oral.",
        "Infecção urinária; nitrofurantoína.",
        "Endometrite puerperal; clindamicina e gentamicina EV.",
        "Abscesso mamário; drenagem."
      ],
      correta: 2,
      explicacao: "Febre e lóquios fétidos no puerpério são típicos de endometrite. Tratamento: antibiótico EV com cobertura anaeróbica."
    },
    {
      enunciado: "Gestante de 18 anos com prurido vulvar e vesículas dolorosas agrupadas. Diagnóstico e orientação principal?",
      alternativas: [
        "Candidíase; fluconazol oral.",
        "Herpes genital; aciclovir e parto cesáreo se lesão ativa.",
        "Tricomoníase; metronidazol oral.",
        "Sífilis; penicilina benzatina."
      ],
      correta: 1,
      explicacao: "Lesões vesiculares dolorosas e agrupadas são típicas de herpes genital. Conduta: aciclovir e cesariana se lesão ativa no parto."
    },
    {
      enunciado: "Gestante de 27 semanas apresenta PA 140x90 mmHg sem proteinúria. Diagnóstico?",
      alternativas: [
        "Pré-eclâmpsia leve.",
        "Hipertensão gestacional.",
        "Pré-eclâmpsia grave.",
        "Síndrome HELLP."
      ],
      correta: 1,
      explicacao: "Hipertensão gestacional é caracterizada por aumento da PA após 20 semanas sem proteinúria ou sinais de gravidade."
    },
    {
      enunciado: "Mulher de 39 anos com nódulo mamário de 2 cm, móvel e indolor. Mamografia BI-RADS 4. Conduta?",
      alternativas: [
        "Apenas seguimento anual.",
        "Punção aspirativa por agulha fina.",
        "Core biopsy (biópsia com agulha grossa).",
        "Mastectomia radical imediata."
      ],
      correta: 2,
      explicacao: "BI-RADS 4 indica suspeita intermediária de malignidade. A conduta é core biopsy para diagnóstico histológico."
    },
    {
      enunciado: "Gestante de 10 semanas com sangramento intenso, útero aumentado e β-hCG >100.000. USG: imagem em 'flocos de neve'. Diagnóstico?",
      alternativas: [
        "Gestação gemelar.",
        "Mola hidatiforme.",
        "Aborto incompleto.",
        "Coriocarcinoma."
      ],
      correta: 1,
      explicacao: "Imagem em flocos de neve e β-hCG elevado são diagnósticos de mola hidatiforme. Conduta: esvaziamento uterino e seguimento com β-hCG."
    },
    {
      enunciado: "Mulher de 33 anos com disúria, urgência miccional e polaciúria sem febre. Diagnóstico e tratamento?",
      alternativas: [
        "Cistite aguda; nitrofurantoína por 5 dias.",
        "Pielonefrite; ceftriaxona EV.",
        "Uretrite gonocócica; azitromicina.",
        "DIP; ceftriaxona e doxiciclina."
      ],
      correta: 0,
      explicacao: "Disúria sem febre indica cistite. O tratamento é antibiótico oral, geralmente nitrofurantoína por 5 dias."
    },
    {
      enunciado: "Mulher de 31 anos com infertilidade há 2 anos. Histerossalpingografia mostra obstrução bilateral de trompas. Diagnóstico mais provável?",
      alternativas: [
        "Endometriose profunda.",
        "Doença inflamatória pélvica prévia.",
        "Síndrome de Asherman.",
        "Miomatose uterina múltipla."
      ],
      correta: 1,
      explicacao: "A obstrução tubária bilateral é mais comumente causada por sequelas de DIP."
    }

  ],

  clinicaMedica: [
    {
      enunciado: "Homem de 64 anos, tabagista, procura PS por dispneia progressiva e tosse crônica produtiva. Exame: uso de musculatura acessória, hiperinsuflação torácica e ausculta com sibilos difusos. Gasometria: pH 7,34, pCO₂ 56, pO₂ 58. Diagnóstico e conduta inicial?",
      alternativas: [
        "Asma; corticoterapia inalatória.",
        "DPOC exacerbado; oxigenioterapia controlada e broncodilatadores.",
        "Edema agudo de pulmão; furosemida e nitrato.",
        "Embolia pulmonar; anticoagulação imediata."
      ],
      correta: 1,
      explicacao: "O quadro de dispneia crônica, tosse produtiva e retenção de CO₂ é típico de DPOC. Na exacerbação, inicia-se oxigenioterapia com controle da saturação (88–92%) e broncodilatadores inalatórios."
    },
    {
      enunciado: "Mulher de 58 anos com diabetes tipo 2 e hipertensão apresenta dor torácica em aperto há 40 minutos, irradiando para o braço esquerdo. ECG: supradesnivelamento de ST em DII, DIII e aVF. Conduta imediata?",
      alternativas: [
        "Administrar nitrato e observar evolução.",
        "Encaminhar para angioplastia primária.",
        "Solicitar enzimas cardíacas antes de qualquer conduta.",
        "Administrar heparina de baixo peso molecular e alta para casa."
      ],
      correta: 1,
      explicacao: "O supradesnivelamento de ST inferior indica IAM com supra, cuja conduta imediata é reperfusão (angioplastia primária ou trombólise se não disponível)."
    },
    {
      enunciado: "Homem de 32 anos apresenta febre, tosse produtiva purulenta e dor torácica pleurítica. Rx: consolidação em lobo inferior direito. Diagnóstico e conduta inicial?",
      alternativas: [
        "Tuberculose pulmonar; esquema RIPE.",
        "Pneumonia comunitária; antibiótico empírico (amoxicilina + clavulanato).",
        "Embolia pulmonar; anticoagulação.",
        "Derrame pleural; toracocentese."
      ],
      correta: 1,
      explicacao: "O quadro clássico de pneumonia adquirida na comunidade deve ser tratado empiricamente, com cobertura para pneumococo e H. influenzae."
    },
    {
      enunciado: "Mulher de 46 anos apresenta fraqueza muscular proximal e hiperpigmentação cutânea difusa. PA 90x60 mmHg, Na⁺ 128, K⁺ 5,6. Diagnóstico provável?",
      alternativas: [
        "Hipotireoidismo primário.",
        "Insuficiência adrenal primária (Doença de Addison).",
        "Síndrome de Cushing.",
        "Hiperaldosteronismo primário."
      ],
      correta: 1,
      explicacao: "Hipotensão, hiponatremia, hipercalemia e hiperpigmentação indicam insuficiência adrenal primária (Addison), com deficiência de cortisol e aldosterona."
    },
    {
      enunciado: "Homem de 71 anos, com insuficiência cardíaca, apresenta dispneia súbita, ortopneia e estertores em bases pulmonares. Diagnóstico e tratamento inicial?",
      alternativas: [
        "Asma; broncodilatador.",
        "Edema agudo de pulmão; furosemida, nitrato e oxigênio.",
        "Pneumonia; antibiótico.",
        "Embolia pulmonar; heparina."
      ],
      correta: 1,
      explicacao: "Dispneia súbita em paciente com IC sugere edema agudo de pulmão, tratado com diurético, nitrato e suporte ventilatório."
    },
    {
      enunciado: "Mulher de 34 anos, portadora de lúpus, refere febre e dor em hemitórax direito. Rx: derrame pleural. Exame do líquido: exsudato com predomínio de neutrófilos e cultura positiva para S. aureus. Diagnóstico e conduta?",
      alternativas: [
        "Pleurite lúpica; corticoide sistêmico.",
        "Empiema pleural; drenagem e antibiótico.",
        "Tuberculose pleural; esquema RIPE.",
        "Neoplasia metastática; pleurodese."
      ],
      correta: 1,
      explicacao: "Presença de pus e cultura positiva define empiema pleural, cuja conduta é drenagem imediata e antibiótico EV."
    },
    {
      enunciado: "Homem de 40 anos, etilista, apresenta icterícia, ascite e ginecomastia. Laboratório: bilirrubina total 8 mg/dL, TGO/TGP >2. Diagnóstico mais provável?",
      alternativas: [
        "Hepatite viral aguda.",
        "Hepatite alcoólica.",
        "Cirrose biliar primária.",
        "Colangite esclerosante."
      ],
      correta: 1,
      explicacao: "O padrão TGO/TGP >2, icterícia e estigmas hepáticos sugerem hepatite alcoólica em paciente etilista."
    },
    {
      enunciado: "Mulher de 63 anos apresenta dor em queimação retroesternal após refeições, aliviada por antiácidos. Endoscopia: erosões no esôfago distal. Diagnóstico e tratamento inicial?",
      alternativas: [
        "Úlcera gástrica; erradicação de H. pylori.",
        "Doença do refluxo gastroesofágico; IBP e medidas posturais.",
        "Dispepsia funcional; procinético.",
        "Esofagite infecciosa; antifúngico."
      ],
      correta: 1,
      explicacao: "Queimação retroesternal e erosões esofágicas são típicas de DRGE. O tratamento inclui IBP e medidas de elevação de cabeceira."
    },
    {
      enunciado: "Homem de 55 anos com poliúria, polidipsia e perda de peso. Glicemia 270 mg/dL, HbA1c 9,2%. Conduta inicial?",
      alternativas: [
        "Iniciar dieta e exercício apenas.",
        "Metformina e reavaliação em 3 meses.",
        "Insulinoterapia imediata.",
        "Sulfonilureia isolada."
      ],
      correta: 2,
      explicacao: "A glicemia >250 mg/dL e HbA1c >9% indicam necessidade de insulina para controle rápido da hiperglicemia sintomática."
    },
    {
      enunciado: "Homem de 29 anos com palpitações súbitas e ECG mostrando taquicardia supraventricular paroxística (narrow QRS, 180 bpm). Conduta inicial?",
      alternativas: [
        "Amiodarona EV.",
        "Adenosina EV em bolus rápido.",
        "Cardioversão elétrica imediata.",
        "Beta-bloqueador oral."
      ],
      correta: 1,
      explicacao: "Na TSV estável, a primeira escolha é adenosina em bolus rápido para interromper o circuito de reentrada nodal."
    },
    {
      enunciado: "Mulher de 30 anos, com fadiga e anemia microcítica. Ferritina 8 ng/mL. Diagnóstico e causa mais provável?",
      alternativas: [
        "Anemia sideroblástica; intoxicação por chumbo.",
        "Anemia ferropriva; menorragia crônica.",
        "Anemia megaloblástica; deficiência de folato.",
        "Anemia de doença crônica; inflamação sistêmica."
      ],
      correta: 1,
      explicacao: "Ferritina baixa e microcitose caracterizam anemia ferropriva, cuja causa mais comum em mulheres é perda menstrual."
    },
    {
      enunciado: "Homem de 62 anos, portador de DRC, apresenta prurido, fraqueza e anemia normocítica. Qual o principal mecanismo da anemia?",
      alternativas: [
        "Perda sanguínea oculta.",
        "Deficiência de ferro.",
        "Deficiência de eritropoietina.",
        "Hemólise."
      ],
      correta: 2,
      explicacao: "A anemia da DRC é causada por produção deficiente de eritropoietina pelos rins comprometidos."
    },
    {
      enunciado: "Homem de 38 anos, com febre, calafrios e sopro novo em foco mitral. Hemoculturas positivas para S. aureus. Diagnóstico e conduta inicial?",
      alternativas: [
        "Endocardite infecciosa; antibiótico EV guiado por cultura.",
        "Miocardite viral; suporte clínico.",
        "Cardiomiopatia dilatada; IECA.",
        "Febre reumática; penicilina benzatina."
      ],
      correta: 0,
      explicacao: "Sopro novo e hemocultura positiva confirmam endocardite infecciosa, tratada com antibióticos EV prolongados conforme sensibilidade."
    },
    {
      enunciado: "Mulher de 27 anos, refere dor torácica pleurítica e dispneia súbita. História de uso de anticoncepcional. ECG: taquicardia sinusal. Suspeita diagnóstica?",
      alternativas: [
        "Pneumotórax espontâneo.",
        "Embolia pulmonar.",
        "Asma aguda.",
        "IAM sem supra."
      ],
      correta: 1,
      explicacao: "Dispneia súbita e dor pleurítica em paciente jovem em uso de anticoncepcional indicam TEP. Deve-se solicitar angiotomografia."
    },
    {
      enunciado: "Homem de 70 anos, tabagista, apresenta tosse seca e perda de peso. Rx: massa pulmonar em lobo superior direito. Próximo passo?",
      alternativas: [
        "Tratar empiricamente como pneumonia.",
        "Solicitar TC de tórax e broncoscopia com biópsia.",
        "Iniciar quimioterapia empírica.",
        "Solicitar escarro BK."
      ],
      correta: 1,
      explicacao: "Em suspeita de neoplasia pulmonar, o diagnóstico deve ser confirmado por imagem (TC) e biópsia broncoscópica."
    },
    {
      enunciado: "Mulher de 48 anos, apresenta exoftalmia, tremor e taquicardia. TSH suprimido, T4 livre elevado. Diagnóstico e conduta inicial?",
      alternativas: [
        "Hipotireoidismo subclínico; reposição com levotiroxina.",
        "Doença de Graves; betabloqueador e antitireoidiano.",
        "Tireoidite subaguda; anti-inflamatório.",
        "Bócio multinodular; iodo radioativo."
      ],
      correta: 1,
      explicacao: "O hipertireoidismo com exoftalmia indica doença de Graves, tratada inicialmente com betabloqueador e metimazol."
    },
    {
      enunciado: "Homem de 61 anos, etilista, refere tremores matinais que melhoram com ingestão de álcool. Diagnóstico e conduta?",
      alternativas: [
        "Síndrome serotoninérgica; benzodiazepínico.",
        "Abstinência alcoólica; diazepam.",
        "Transtorno de ansiedade; ISRS.",
        "Delirium tremens; haloperidol isolado."
      ],
      correta: 1,
      explicacao: "Tremor que melhora com álcool é típico de abstinência. Tratamento: benzodiazepínico para evitar complicações graves."
    },
    {
      enunciado: "Homem de 52 anos, diabético, apresenta dor intensa em perna direita, febre e bolhas hemorrágicas. Diagnóstico e tratamento?",
      alternativas: [
        "Erisipela; penicilina.",
        "Fasciíte necrosante; cirurgia e antibiótico amplo.",
        "Celulite simples; cefalexina oral.",
        "Trombose venosa profunda; anticoagulação."
      ],
      correta: 1,
      explicacao: "A presença de dor desproporcional e bolhas hemorrágicas define fasciíte necrosante, que exige desbridamento cirúrgico urgente e antibiótico de amplo espectro."
    },
    {
      enunciado: "Homem de 35 anos, HIV positivo, apresenta cefaleia e lesão hipodensa com realce em anel na TC cerebral. Diagnóstico mais provável?",
      alternativas: [
        "Neurotoxoplasmose.",
        "Linfoma primário de SNC.",
        "Tuberculoma.",
        "Abscesso bacteriano."
      ],
      correta: 0,
      explicacao: "A neurotoxoplasmose é a causa mais comum de lesão com realce em anel em pacientes com AIDS e CD4 <100."
    },
    {
      enunciado: "Homem de 59 anos, em uso de varfarina, chega ao PS com sangramento gengival. INR = 6,5. Conduta imediata?",
      alternativas: [
        "Suspender varfarina e administrar vitamina K.",
        "Aumentar dose de varfarina.",
        "Administrar aspirina.",
        "Não fazer nada, pois o INR é aceitável."
      ],
      correta: 0,
      explicacao: "INR >5 com sangramento requer suspensão da varfarina e reversão parcial com vitamina K."
    }

  ],

  pediatria: [
    {
      enunciado: "Lactente de 6 meses é trazido ao PS por febre há 3 dias e manchas avermelhadas que surgiram hoje, poupando palmas e plantas. Ao exame: exantema maculopapular, sem prurido, bom estado geral. Qual o diagnóstico mais provável?",
      alternativas: [
        "Sarampo.",
        "Rubéola.",
        "Exantema súbito (roseola).",
        "Escarlatina."
      ],
      correta: 2,
      explicacao: "Febre alta que desaparece antes do surgimento do exantema é típica do exantema súbito, causado pelo HHV-6."
    },
    {
      enunciado: "Criança de 8 anos, previamente hígida, apresenta dor em joelho direito após quadro de faringoamigdalite há 2 semanas. Ao exame: artrite em joelho e sopro sistólico em foco mitral. Diagnóstico provável?",
      alternativas: [
        "Febre reumática.",
        "Lúpus eritematoso sistêmico.",
        "Artrite séptica.",
        "Doença de Kawasaki."
      ],
      correta: 0,
      explicacao: "A associação entre artrite migratória e cardite após faringite estreptocócica é diagnóstica de febre reumática."
    },
    {
      enunciado: "Recém-nascido de 2 dias apresenta vômitos biliosos e distensão abdominal. Radiografia de abdome mostra 'duplo bolha'. Diagnóstico mais provável?",
      alternativas: [
        "Atresia de jejuno.",
        "Atresia duodenal.",
        "Íleo meconial.",
        "Mal rotação intestinal."
      ],
      correta: 1,
      explicacao: "O sinal de duplo bolha é clássico da atresia duodenal, frequentemente associada à síndrome de Down."
    },
    {
      enunciado: "Criança de 4 anos é trazida por tosse rouca, febre baixa e estridor inspiratório. Rx de pescoço mostra estreitamento subglótico (‘sinal da torre’). Diagnóstico e conduta inicial?",
      alternativas: [
        "Epiglotite; intubação imediata.",
        "Crup viral; corticoide e adrenalina inalatória.",
        "Aspiração de corpo estranho; broncoscopia.",
        "Laringomalácia; observação."
      ],
      correta: 1,
      explicacao: "Crup viral apresenta tosse metálica, estridor e estreitamento subglótico. O tratamento é corticoide e adrenalina nebulizada."
    },
    {
      enunciado: "Adolescente de 14 anos, DM tipo 1, chega sonolento e desidratado. Glicemia: 480 mg/dL, pH 7,1, HCO₃⁻ 10. Qual o diagnóstico e tratamento inicial?",
      alternativas: [
        "Hipoglicemia; glicose EV.",
        "Cetoacidose diabética; reposição de fluidos e insulina regular.",
        "Síndrome hiperosmolar; insulina NPH.",
        "Sepse; antibiótico e vasopressor."
      ],
      correta: 1,
      explicacao: "Acidose metabólica com hiperglicemia e cetonemia define cetoacidose diabética. O tratamento começa com reposição hídrica e insulina regular EV."
    },
    {
      enunciado: "Lactente de 3 meses apresenta crises de tosse em acessos seguidos de êmese, sem febre. Vacinação incompleta. Diagnóstico provável?",
      alternativas: [
        "Coqueluche.",
        "Bronquiolite.",
        "Pneumonia bacteriana.",
        "Laringite."
      ],
      correta: 0,
      explicacao: "Tosse em acessos seguidos de vômito, sem febre, é típico da coqueluche, especialmente em não vacinados."
    },
    {
      enunciado: "Criança de 2 anos, em creche, apresenta diarreia aquosa há 3 dias, sem sangue, com sinais leves de desidratação. Conduta inicial?",
      alternativas: [
        "Hidratação oral e manutenção alimentar.",
        "Antibiótico oral e suspensão da dieta.",
        "Internação imediata e soro EV.",
        "Uso de antidiarreico e antiemético."
      ],
      correta: 0,
      explicacao: "Na diarreia aguda leve, o tratamento é reposição oral e manutenção da dieta habitual."
    },
    {
      enunciado: "Recém-nascido de 8 horas apresenta cianose que melhora ao chorar e piora ao mamar. Diagnóstico mais provável?",
      alternativas: [
        "Atresia de coanas.",
        "Cardiopatia congênita cianótica.",
        "Síndrome do desconforto respiratório.",
        "Aspiração meconial."
      ],
      correta: 0,
      explicacao: "A melhora da cianose ao chorar é característica da atresia de coanas, pois o choro permite ventilação pela boca."
    },
    {
      enunciado: "Criança de 5 anos apresenta febre, conjuntivite não purulenta, adenopatia cervical e língua em framboesa. Diagnóstico provável?",
      alternativas: [
        "Escarlatina.",
        "Doença de Kawasaki.",
        "Mononucleose infecciosa.",
        "Sarampo."
      ],
      correta: 1,
      explicacao: "A febre persistente, mucosite e adenopatia são típicas da doença de Kawasaki, que requer tratamento com imunoglobulina EV e AAS."
    },
    {
      enunciado: "Lactente de 11 meses com febre, sibilância e tiragem subcostal. Diagnóstico provável e agente etiológico mais comum?",
      alternativas: [
        "Pneumonia; Streptococcus pneumoniae.",
        "Bronquiolite; vírus sincicial respiratório.",
        "Asma; rinovírus.",
        "Traqueíte; Staphylococcus aureus."
      ],
      correta: 1,
      explicacao: "O quadro clínico típico de bronquiolite viral é causado pelo vírus sincicial respiratório em menores de 2 anos."
    },
    {
      enunciado: "Criança de 9 anos apresenta hematúria macroscópica e edema periorbitário 10 dias após faringite. Diagnóstico provável?",
      alternativas: [
        "Síndrome nefrótica.",
        "Glomerulonefrite pós-estreptocócica.",
        "Nefropatia por IgA.",
        "Lúpus eritematoso sistêmico."
      ],
      correta: 1,
      explicacao: "A hematúria e edema após infecção estreptocócica são típicos da glomerulonefrite pós-estreptocócica."
    },
    {
      enunciado: "Criança de 3 anos apresenta febre alta e disfagia intensa. Ao exame: posição sentada em tripé, estridor e sialorreia. Diagnóstico e conduta?",
      alternativas: [
        "Crup viral; adrenalina inalatória.",
        "Epiglotite; intubação orotraqueal imediata.",
        "Laringite; corticoterapia oral.",
        "Corpo estranho; broncoscopia."
      ],
      correta: 1,
      explicacao: "O quadro de epiglotite é uma emergência respiratória. Deve-se garantir via aérea antes de qualquer outro exame."
    },
    {
      enunciado: "Lactente de 8 meses apresenta palidez, taquicardia e Hb 8 g/dL. Alimentação exclusiva com leite de vaca desde o desmame. Diagnóstico mais provável?",
      alternativas: [
        "Anemia megaloblástica.",
        "Anemia ferropriva.",
        "Anemia hemolítica.",
        "Anemia aplástica."
      ],
      correta: 1,
      explicacao: "O leite de vaca causa baixa ingestão de ferro e micro-hemorragias intestinais, levando à anemia ferropriva no lactente."
    },
    {
      enunciado: "Recém-nascido de 24 horas apresenta icterícia intensa. Mãe O-, RN A+, Coombs direto positivo. Diagnóstico e conduta?",
      alternativas: [
        "Icterícia fisiológica; observação.",
        "Doença hemolítica por incompatibilidade ABO; fototerapia.",
        "Icterícia por leite materno; suspensão da amamentação.",
        "Atresia biliar; cirurgia imediata."
      ],
      correta: 1,
      explicacao: "Icterícia nas primeiras 24h com Coombs positivo indica hemólise imune por incompatibilidade ABO."
    },
    {
      enunciado: "Criança de 12 anos apresenta poliúria, polidipsia e emagrecimento. Glicemia: 280 mg/dL. Diagnóstico e primeiro passo terapêutico?",
      alternativas: [
        "Diabetes tipo 2; metformina.",
        "Diabetes tipo 1; insulinoterapia.",
        "Síndrome metabólica; dieta.",
        "Hipoglicemia; glicose oral."
      ],
      correta: 1,
      explicacao: "Diabetes tipo 1 é mais comum em crianças e requer insulinoterapia imediata."
    },
    {
      enunciado: "Recém-nascido a termo, 3 dias de vida, apresenta vômitos e letargia. Exame: desidratação, hiponatremia e hipercalemia. Diagnóstico provável?",
      alternativas: [
        "Sepse neonatal.",
        "Hiperplasia adrenal congênita.",
        "Estenose hipertrófica de piloro.",
        "Atresia duodenal."
      ],
      correta: 1,
      explicacao: "O quadro de perda salina com hiponatremia e hipercalemia em RN indica Hiperplasia Adrenal Congênita."
    },
    {
      enunciado: "Criança de 7 anos apresenta tosse produtiva crônica, infecções pulmonares de repetição e esteatorreia. Diagnóstico provável?",
      alternativas: [
        "Asma.",
        "Fibrose cística.",
        "Imunodeficiência comum variável.",
        "Bronquiectasias pós-infecciosas."
      ],
      correta: 1,
      explicacao: "Infecções pulmonares de repetição e má absorção são típicas de fibrose cística, confirmada pelo teste do suor."
    },
    {
      enunciado: "Lactente de 10 meses com convulsão após febre de 38,5°C, sem sinais meníngeos. Diagnóstico e conduta inicial?",
      alternativas: [
        "Epilepsia; iniciar anticonvulsivante crônico.",
        "Meningite viral; punção lombar.",
        "Convulsão febril simples; observação e antitérmico.",
        "Convulsão febril complexa; anticonvulsivante EV."
      ],
      correta: 2,
      explicacao: "Convulsão febril simples é autolimitada e não requer anticonvulsivantes, apenas controle da febre e observação."
    },
    {
      enunciado: "Criança de 5 anos apresenta erupção vesicular em várias fases evolutivas, incluindo crostas, principalmente em tronco e face. Diagnóstico provável?",
      alternativas: [
        "Sarampo.",
        "Varicela.",
        "Rubéola.",
        "Escarlatina."
      ],
      correta: 1,
      explicacao: "A varicela cursa com lesões em vários estágios evolutivos ('em diferentes fases'), característica clássica da doença."
    },
    {
      enunciado: "Recém-nascido de 30 semanas apresenta dificuldade respiratória logo após o nascimento. Rx: infiltrado reticulogranular e broncograma aéreo. Diagnóstico provável?",
      alternativas: [
        "Aspiração meconial.",
        "Taquipneia transitória do RN.",
        "Síndrome do desconforto respiratório.",
        "Pneumonia neonatal."
      ],
      correta: 2,
      explicacao: "A SDR do prematuro ocorre por deficiência de surfactante e apresenta infiltrado reticulogranular e broncograma aéreo."
    }

  ],

  medicinaPreventiva: [
    {
      enunciado: "Durante uma campanha de vacinação, o enfermeiro observa que algumas doses foram mantidas fora da faixa de temperatura ideal por 2 horas. Qual deve ser a conduta correta segundo o PNI?",
      alternativas: [
        "Utilizar normalmente as vacinas.",
        "Descartar todas as vacinas expostas.",
        "Isolar as vacinas e comunicar à coordenação para avaliação de viabilidade.",
        "Refrigerar novamente e utilizar no mesmo dia."
      ],
      correta: 2,
      explicacao: "O procedimento correto é o isolamento e a notificação à vigilância para avaliação técnica da estabilidade térmica das vacinas."
    },
    {
      enunciado: "Em um estudo epidemiológico, observou-se que a exposição ao tabagismo precede o desenvolvimento de DPOC. Qual tipo de estudo melhor identifica essa relação temporal?",
      alternativas: [
        "Estudo transversal.",
        "Estudo de coorte.",
        "Estudo caso-controle.",
        "Ensaio clínico cruzado."
      ],
      correta: 1,
      explicacao: "O estudo de coorte é o único observacional capaz de estabelecer relação temporal entre exposição e desfecho."
    },
    {
      enunciado: "Durante uma investigação de surto de diarreia em um restaurante, o alimento suspeito é a maionese caseira. O agente etiológico mais provável é:",
      alternativas: [
        "Salmonella spp.",
        "Staphylococcus aureus.",
        "Clostridium perfringens.",
        "Vírus Norwalk."
      ],
      correta: 1,
      explicacao: "O Staphylococcus aureus produz toxinas termoestáveis em alimentos manipulados inadequadamente, como maionese caseira."
    },
    {
      enunciado: "O coeficiente de incidência mede:",
      alternativas: [
        "A proporção de indivíduos que apresentam uma doença em um determinado momento.",
        "O número de casos novos em uma população durante um período específico.",
        "A probabilidade de cura de uma doença.",
        "O risco relativo entre grupos expostos e não expostos."
      ],
      correta: 1,
      explicacao: "A incidência expressa o número de novos casos de uma doença em uma população suscetível, em um intervalo de tempo definido."
    },
    {
      enunciado: "Paciente com tuberculose pulmonar bacilífera abandona o tratamento após 2 meses. Qual o procedimento correto segundo o SINAN?",
      alternativas: [
        "Notificar como cura.",
        "Encerrar como transferência.",
        "Encerrar como abandono.",
        "Notificar novamente como caso novo."
      ],
      correta: 2,
      explicacao: "Abandono é definido pela interrupção do tratamento por mais de 30 dias consecutivos após iniciado o esquema terapêutico."
    },
    {
      enunciado: "Qual das seguintes vacinas é contraindicada em gestantes?",
      alternativas: [
        "Hepatite B.",
        "Influenza inativada.",
        "Tríplice viral (sarampo, caxumba e rubéola).",
        "DTPa."
      ],
      correta: 2,
      explicacao: "Vacinas com vírus vivos atenuados, como a tríplice viral, são contraindicadas durante a gestação."
    },
    {
      enunciado: "Em relação à vigilância epidemiológica, o que caracteriza uma notificação compulsória imediata?",
      alternativas: [
        "Deve ser realizada em até 7 dias úteis.",
        "Deve ser feita apenas se houver surto.",
        "Deve ser comunicada em até 24 horas.",
        "É feita apenas para doenças de alta letalidade."
      ],
      correta: 2,
      explicacao: "Doenças de notificação imediata (como sarampo, raiva, febre amarela) exigem comunicação à vigilância em até 24 horas."
    },
    {
      enunciado: "Em um ensaio clínico randomizado sobre novo antihipertensivo, 20% dos pacientes do grupo placebo melhoraram. Esse efeito é denominado:",
      alternativas: [
        "Efeito Hawthorne.",
        "Efeito placebo.",
        "Viés de seleção.",
        "Viés de informação."
      ],
      correta: 1,
      explicacao: "O efeito placebo corresponde à melhora clínica devido à expectativa positiva do paciente, sem ação farmacológica real."
    },
    {
      enunciado: "O princípio da equidade no SUS implica:",
      alternativas: [
        "Tratar todos de forma idêntica.",
        "Oferecer mais recursos a quem mais necessita.",
        "Priorizar apenas doenças graves.",
        "Distribuir recursos igualmente entre regiões."
      ],
      correta: 1,
      explicacao: "Equidade é oferecer mais a quem mais precisa, reduzindo desigualdades no acesso à saúde."
    },
    {
      enunciado: "A taxa de mortalidade infantil é composta por quais componentes?",
      alternativas: [
        "Mortalidade neonatal e pós-neonatal.",
        "Mortalidade precoce e tardia.",
        "Mortalidade perinatal e infantil tardia.",
        "Mortalidade neonatal e materna."
      ],
      correta: 0,
      explicacao: "A mortalidade infantil é a soma da neonatal (<28 dias) e da pós-neonatal (28 dias a 1 ano)."
    },
    {
      enunciado: "O Programa Saúde da Família é estruturado segundo qual nível de atenção?",
      alternativas: [
        "Atenção primária.",
        "Atenção secundária.",
        "Atenção terciária.",
        "Atenção de urgência e emergência."
      ],
      correta: 0,
      explicacao: "A Estratégia Saúde da Família (ESF) é a principal forma de organização da atenção primária no SUS."
    },
    {
      enunciado: "Durante uma campanha de rastreamento de câncer de colo do útero, qual a faixa etária prioritária segundo o Ministério da Saúde?",
      alternativas: [
        "15 a 35 anos.",
        "25 a 64 anos.",
        "30 a 50 anos.",
        "40 a 65 anos."
      ],
      correta: 1,
      explicacao: "O rastreamento com citologia oncótica (Papanicolau) é indicado para mulheres de 25 a 64 anos com atividade sexual."
    },
    {
      enunciado: "Um município apresenta 10.000 habitantes e 100 novos casos de dengue em 2024. A taxa de incidência é:",
      alternativas: [
        "0,1 por 1.000 habitantes.",
        "1 por 100 habitantes.",
        "10 por 1.000 habitantes.",
        "1 por 10 habitantes."
      ],
      correta: 2,
      explicacao: "Incidência = (100 / 10.000) × 1.000 = 10 casos por 1.000 habitantes."
    },
    {
      enunciado: "Em relação aos princípios bioéticos, a decisão de respeitar a recusa de um paciente informado em receber transfusão baseia-se no princípio de:",
      alternativas: [
        "Beneficência.",
        "Não maleficência.",
        "Autonomia.",
        "Justiça."
      ],
      correta: 2,
      explicacao: "A autonomia garante ao paciente o direito de decidir sobre seu próprio tratamento após esclarecimento adequado."
    },
    {
      enunciado: "O coeficiente de letalidade mede:",
      alternativas: [
        "A probabilidade de um indivíduo morrer pela doença após adquiri-la.",
        "A frequência de casos novos.",
        "A proporção de doentes em um momento específico.",
        "A prevalência de fatores de risco."
      ],
      correta: 0,
      explicacao: "A letalidade indica a gravidade da doença, representando a proporção de óbitos entre os doentes."
    },
    {
      enunciado: "No modelo de atenção do SUS, a regulação do acesso entre os níveis de complexidade é uma função de:",
      alternativas: [
        "Atenção primária.",
        "Atenção especializada.",
        "Gestão municipal de saúde.",
        "Atenção hospitalar."
      ],
      correta: 2,
      explicacao: "A regulação é responsabilidade da gestão municipal, articulando o acesso entre os diferentes níveis de atenção."
    },
    {
      enunciado: "Qual medida epidemiológica é usada para avaliar a força de associação entre fator de risco e doença em estudos caso-controle?",
      alternativas: [
        "Risco relativo.",
        "Razão de prevalência.",
        "Odds ratio.",
        "Coeficiente de incidência."
      ],
      correta: 2,
      explicacao: "Em estudos caso-controle, a medida de associação é o odds ratio, que estima o risco relativo."
    },
    {
      enunciado: "Durante uma pandemia, a estratégia de isolamento domiciliar de casos confirmados é um exemplo de:",
      alternativas: [
        "Prevenção primária.",
        "Prevenção secundária.",
        "Prevenção terciária.",
        "Controle social."
      ],
      correta: 1,
      explicacao: "O isolamento atua na detecção e contenção precoce da doença, caracterizando prevenção secundária."
    },
    {
      enunciado: "Em relação à ética médica, o sigilo profissional pode ser quebrado em qual situação?",
      alternativas: [
        "A pedido de familiares.",
        "Quando houver risco a terceiros ou determinação judicial.",
        "Em casos de curiosidade científica.",
        "Quando o paciente é menor de idade."
      ],
      correta: 1,
      explicacao: "O sigilo pode ser quebrado apenas em casos de risco a terceiros ou por ordem judicial."
    },
    {
      enunciado: "Em uma UBS, um paciente alcoolista solicita ajuda. A equipe planeja intervenção multiprofissional, com acompanhamento médico, psicológico e social. Essa conduta representa:",
      alternativas: [
        "Atenção terciária.",
        "Intervenção fragmentada.",
        "Atenção integral.",
        "Vigilância epidemiológica."
      ],
      correta: 2,
      explicacao: "A integralidade é o princípio do SUS que assegura ações de promoção, prevenção e reabilitação de forma articulada."
    }

  ],

  medicinaLegal: [
{
  enunciado: "Um médico é chamado para avaliar uma vítima de acidente automobilístico que está inconsciente e sem familiares presentes. A conduta correta é:",
  alternativas: [
    "Aguardar o consentimento de familiares antes de intervir.",
    "Realizar apenas avaliação inicial sem procedimentos invasivos.",
    "Realizar os procedimentos necessários à preservação da vida sem consentimento.",
    "Não realizar nenhum procedimento até autorização judicial."
  ],
  correta: 2,
  explicacao: "Em situações de urgência e risco de vida, o atendimento deve ser realizado imediatamente, mesmo sem consentimento — princípio da beneficência e dever legal de prestar socorro."
},
{
  enunciado: "Segundo o Código de Ética Médica, é vedado ao médico:",
  alternativas: [
    "Negar atendimento a paciente de outro colega.",
    "Divulgar casos clínicos sem autorização do paciente.",
    "Tratar familiares próximos em qualquer circunstância.",
    "Participar de pesquisa clínica."
  ],
  correta: 1,
  explicacao: "É proibida a divulgação de casos clínicos identificáveis sem autorização expressa do paciente, mesmo para fins acadêmicos."
},
{
  enunciado: "O exame de corpo de delito é obrigatório quando:",
  alternativas: [
    "Há confissão do acusado.",
    "O crime deixa vestígios materiais.",
    "O laudo pericial anterior é inconclusivo.",
    "A vítima consente na dispensa do exame."
  ],
  correta: 1,
  explicacao: "Nos crimes que deixam vestígios (lesão corporal, estupro etc.), o exame de corpo de delito é indispensável, mesmo com confissão."
},
{
  enunciado: "O conceito de 'imputabilidade penal' está relacionado à:",
  alternativas: [
    "Capacidade de compreender o caráter ilícito do ato e de autodeterminar-se.",
    "Possuir registro profissional ativo no CRM.",
    "Capacidade de testemunhar em juízo.",
    "Maioridade civil."
  ],
  correta: 0,
  explicacao: "Imputabilidade penal depende da capacidade de entendimento e autodeterminação no momento da ação, podendo ser excluída por doença mental, imaturidade ou embriaguez acidental."
},
{
  enunciado: "O termo de consentimento livre e esclarecido (TCLE) deve conter:",
  alternativas: [
    "Apenas a assinatura do médico.",
    "Detalhamento técnico do procedimento.",
    "Informações compreensíveis sobre riscos, benefícios e alternativas.",
    "Dados sigilosos de outros pacientes."
  ],
  correta: 2,
  explicacao: "O TCLE deve ser claro, compreensível e conter riscos, benefícios e alternativas, garantindo a autonomia do paciente."
},
{
  enunciado: "Um perito médico nomeado pelo juiz deve atuar segundo qual princípio fundamental?",
  alternativas: [
    "Lealdade ao réu.",
    "Sigilo profissional absoluto.",
    "Imparcialidade e objetividade.",
    "Defesa da parte contratante."
  ],
  correta: 2,
  explicacao: "O perito judicial deve manter postura imparcial, baseada em critérios técnicos e científicos, sem vínculo com as partes."
},
{
  enunciado: "Em caso de morte suspeita em ambiente hospitalar, o médico deve:",
  alternativas: [
    "Emitir atestado de óbito imediatamente.",
    "Comunicar o óbito à família e liberar o corpo.",
    "Notificar a autoridade policial e não preencher o atestado.",
    "Emitir declaração de óbito com a causa presumida."
  ],
  correta: 2,
  explicacao: "Em mortes suspeitas ou violentas, o corpo deve ser encaminhado ao IML, e o atestado não deve ser preenchido pelo médico assistente."
},
{
  enunciado: "Paciente menor de 16 anos solicita confidencialidade sobre uso de anticoncepcionais. O médico deve:",
  alternativas: [
    "Quebrar o sigilo e comunicar os pais.",
    "Negar atendimento por falta de consentimento dos responsáveis.",
    "Garantir sigilo e orientar sobre riscos e métodos seguros.",
    "Encaminhar ao Conselho Tutelar."
  ],
  correta: 2,
  explicacao: "O sigilo deve ser mantido quando o menor demonstra capacidade de discernimento, respeitando sua autonomia progressiva."
},
{
  enunciado: "Em necropsias de interesse judicial, o perito deve descrever:",
  alternativas: [
    "Apenas a causa imediata da morte.",
    "As lesões externas e internas com cronologia e compatibilidade.",
    "Somente a lesão principal.",
    "A causa legal do óbito conforme relato familiar."
  ],
  correta: 1,
  explicacao: "O laudo pericial deve conter descrição minuciosa das lesões e análise técnico-causal, relacionando achados e dinâmica do evento."
},
{
  enunciado: "Em um erro médico, qual condição é necessária para caracterizar responsabilidade civil?",
  alternativas: [
    "Existência de dano, culpa e nexo causal.",
    "Intenção de causar dano.",
    "Presença de testemunhas.",
    "Inexistência de prontuário."
  ],
  correta: 0,
  explicacao: "Para haver responsabilidade civil médica é necessário comprovar dano, culpa (negligência, imprudência ou imperícia) e nexo causal."
},
{
  enunciado: "Durante atendimento de violência sexual, o médico deve:",
  alternativas: [
    "Notificar a autoridade policial apenas com autorização da vítima.",
    "Notificar obrigatoriamente à autoridade competente, mesmo sem consentimento.",
    "Aguardar decisão judicial.",
    "Registrar no prontuário sem comunicar ninguém."
  ],
  correta: 1,
  explicacao: "Casos de violência sexual são de notificação compulsória, independentemente do consentimento da vítima."
},
{
  enunciado: "Segundo o Código Penal, a eutanásia é classificada como:",
  alternativas: [
    "Morte natural assistida.",
    "Homicídio privilegiado por relevante valor moral.",
    "Homicídio culposo.",
    "Ato médico permitido mediante consentimento."
  ],
  correta: 1,
  explicacao: "A eutanásia é enquadrada como homicídio privilegiado, pois o motivo é considerado de valor moral relevante, mas não isenta de punição."
},
{
  enunciado: "O aborto é permitido legalmente no Brasil em quais situações?",
  alternativas: [
    "Quando há risco à saúde mental da mãe.",
    "Em casos de anencefalia e gestação resultante de estupro.",
    "Por vontade materna até 12 semanas.",
    "Em caso de malformações congênitas leves."
  ],
  correta: 1,
  explicacao: "O aborto é permitido quando há risco de vida à gestante, gestação resultante de estupro ou anencefalia fetal (decisão do STF)."
},
{
  enunciado: "O atestado de óbito pode ser preenchido pelo médico assistente quando:",
  alternativas: [
    "A morte for natural e o médico conheça a evolução da doença.",
    "Houver suspeita de causa violenta.",
    "O paciente tiver morrido fora de unidade de saúde sem acompanhamento.",
    "O paciente for menor de idade."
  ],
  correta: 0,
  explicacao: "O médico assistente pode preencher o atestado em casos de morte natural, com causa conhecida e acompanhada clinicamente."
},
{
  enunciado: "Em relação à perícia médica, o assistente técnico indicado por uma das partes deve:",
  alternativas: [
    "Atuar com parcialidade em defesa da parte contratante.",
    "Seguir as mesmas regras éticas do perito judicial.",
    "Omitir informações contrárias à parte que o contratou.",
    "Ter registro ativo apenas no CRM local."
  ],
  correta: 1,
  explicacao: "O assistente técnico deve seguir os mesmos princípios éticos de veracidade e fundamentação técnica que o perito oficial."
},
{
  enunciado: "O médico que omite socorro a uma pessoa em perigo incorre em:",
  alternativas: [
    "Infração ética apenas.",
    "Crime de omissão de socorro, previsto no Código Penal.",
    "Apenas responsabilidade civil.",
    "Infração administrativa do CRM."
  ],
  correta: 1,
  explicacao: "O artigo 135 do Código Penal define a omissão de socorro como crime, punível quando o médico se abstém de agir podendo fazê-lo sem risco próprio."
},
{
  enunciado: "Qual princípio ético fundamenta a obrigação de o médico não causar dano ao paciente?",
  alternativas: [
    "Autonomia.",
    "Beneficência.",
    "Não maleficência.",
    "Justiça."
  ],
  correta: 2,
  explicacao: "O princípio da não maleficência determina que o médico deve evitar causar dano físico, psicológico ou social ao paciente."
},
{
  enunciado: "Em caso de erro médico em hospital público, quem responde civilmente?",
  alternativas: [
    "Apenas o médico.",
    "O Estado, podendo acionar o profissional regressivamente.",
    "O diretor do hospital.",
    "O Conselho Regional de Medicina."
  ],
  correta: 1,
  explicacao: "No serviço público, a responsabilidade civil é objetiva do Estado, que pode posteriormente mover ação regressiva contra o médico responsável."
},
{
  enunciado: "Durante necropsia, o achado de equimose com infiltração hemorrágica indica:",
  alternativas: [
    "Lesão post mortem.",
    "Lesão vital, ocorrida em vida.",
    "Artefato de manipulação.",
    "Tardio fenômeno de putrefação."
  ],
  correta: 1,
  explicacao: "A presença de infiltração hemorrágica indica reação vital, logo, a lesão ocorreu antes da morte."
},
{
  enunciado: "O prontuário médico pertence:",
  alternativas: [
    "Ao paciente, exclusivamente.",
    "Ao hospital, mas o paciente tem direito às informações.",
    "Ao médico assistente.",
    "Ao Conselho Regional de Medicina."
  ],
  correta: 1,
  explicacao: "O prontuário é propriedade do serviço de saúde, mas o paciente tem direito de acesso às informações contidas nele."
}

  ],

  infectologia: [
{
  enunciado: "Homem de 32 anos apresenta febre alta, mialgia intensa, cefaleia retro-orbitária e exantema. No 5º dia de sintomas, hematócrito de 48%, plaquetas 85.000/mm³. Qual o diagnóstico mais provável?",
  alternativas: [
    "Dengue clássica.",
    "Dengue com sinais de alarme.",
    "Febre amarela.",
    "Zika vírus."
  ],
  correta: 1,
  explicacao: "Hematócrito elevado e plaquetopenia indicam extravasamento plasmático, caracterizando dengue com sinais de alarme."
},
{
  enunciado: "Paciente com tosse produtiva há 3 semanas, hemoptise e sudorese noturna. Baciloscopia do escarro positiva. Segundo o MS, qual o esquema terapêutico inicial?",
  alternativas: [
    "Rifampicina, isoniazida e etambutol por 2 meses.",
    "Rifampicina, isoniazida, pirazinamida e etambutol por 2 meses, seguidos de 4 meses de rifampicina e isoniazida.",
    "Isoniazida e rifampicina por 9 meses.",
    "Rifampicina, isoniazida e estreptomicina por 6 meses."
  ],
  correta: 1,
  explicacao: "O tratamento padrão da tuberculose sensível é RIPE por 2 meses, seguido de RI por 4 meses (esquema básico 2RHZE/4RH)."
},
{
  enunciado: "Paciente de 45 anos, HIV positivo, CD4 = 150 células/mm³, apresenta lesão cutânea violácea em membros inferiores. A biópsia confirma sarcoma de Kaposi. O tratamento inicial inclui:",
  alternativas: [
    "Quimioterapia isolada.",
    "Início imediato da terapia antirretroviral.",
    "Suspensão do TARV e uso de interferon.",
    "Uso de corticosteroides sistêmicos."
  ],
  correta: 1,
  explicacao: "O tratamento do sarcoma de Kaposi associado ao HIV inclui início ou otimização do TARV, que pode induzir regressão das lesões."
},
{
  enunciado: "Gestante com VDRL reagente 1:32 e FTA-ABS positivo. Não há registro de tratamento anterior. A conduta é:",
  alternativas: [
    "Penicilina benzatina 2,4 milhões UI dose única.",
    "Penicilina benzatina 7,2 milhões UI, dividida em 3 doses semanais.",
    "Doxiciclina por 14 dias.",
    "Aguardar o parto para tratar."
  ],
  correta: 1,
  explicacao: "Sífilis latente tardia ou de tempo ignorado deve ser tratada com 7,2 milhões UI de penicilina benzatina em 3 doses semanais de 2,4 milhões UI."
},
{
  enunciado: "Homem de 28 anos com febre, tosse seca e dispneia progressiva há 2 semanas. HIV positivo com CD4 = 90. Rx mostra infiltrado intersticial difuso bilateral. O agente mais provável é:",
  alternativas: [
    "Histoplasma capsulatum.",
    "Pneumocystis jirovecii.",
    "Mycoplasma pneumoniae.",
    "Cytomegalovirus."
  ],
  correta: 1,
  explicacao: "A pneumonia por Pneumocystis jirovecii é típica em pacientes com CD4 <200, com padrão intersticial e hipoxemia importante."
},
{
  enunciado: "Paciente de 60 anos com DPOC apresenta piora súbita de dispneia, tosse produtiva purulenta e febre. O agente mais provável é:",
  alternativas: [
    "Pseudomonas aeruginosa.",
    "Streptococcus pneumoniae.",
    "Mycoplasma pneumoniae.",
    "Legionella pneumophila."
  ],
  correta: 1,
  explicacao: "Em exacerbações infecciosas de DPOC, o principal agente é S. pneumoniae, seguido por H. influenzae e M. catarrhalis."
},
{
  enunciado: "Homem de 23 anos retorna de acampamento com febre, icterícia e mialgia em panturrilhas. A suspeita é de leptospirose. O exame laboratorial mais característico é:",
  alternativas: [
    "Leucocitose com eosinofilia.",
    "Leucopenia e plaquetopenia.",
    "Aumento de bilirrubinas diretas e creatinina.",
    "Hipocalemia com alcalose metabólica."
  ],
  correta: 2,
  explicacao: "A forma ictérica de leptospirose cursa com insuficiência hepatorrenal e bilirrubina direta elevada."
},
{
  enunciado: "Paciente com febre prolongada, hepatoesplenomegalia e pancitopenia. Sorologia positiva para Leishmania chagasi. O tratamento de escolha é:",
  alternativas: [
    "Anfotericina B lipossomal.",
    "Pentavalente antimonial.",
    "Itraconazol.",
    "Metronidazol."
  ],
  correta: 0,
  explicacao: "A anfotericina B lipossomal é o tratamento de escolha para leishmaniose visceral, especialmente em imunossuprimidos."
},
{
  enunciado: "Sobre o tratamento da meningite meningocócica, assinale a alternativa correta:",
  alternativas: [
    "O isolamento respiratório deve ser mantido até 24h após início da antibioticoterapia.",
    "Profilaxia dos contatos é feita com penicilina benzatina.",
    "A antibioticoterapia empírica deve incluir vancomicina e cefepima.",
    "A vacinação pós-exposição não tem papel."
  ],
  correta: 0,
  explicacao: "O isolamento respiratório é mantido por 24h após o início do antibiótico. A profilaxia é com rifampicina, ciprofloxacino ou ceftriaxona."
},
{
  enunciado: "Homem de 35 anos, HIV negativo, apresenta febre e diarreia sanguinolenta após viagem ao Nordeste. Exame mostra amebas hematófagas. O diagnóstico é:",
  alternativas: [
    "Giardíase.",
    "Amebíase intestinal.",
    "Febre tifoide.",
    "Shigelose."
  ],
  correta: 1,
  explicacao: "A presença de amebas hematófagas no exame de fezes é diagnóstica de infecção por *Entamoeba histolytica*."
},
{
  enunciado: "Criança de 6 anos apresenta febre alta, rigidez de nuca e petéquias. O tratamento empírico inicial deve incluir:",
  alternativas: [
    "Penicilina cristalina.",
    "Ceftriaxona ou cefotaxima.",
    "Amoxicilina oral.",
    "Vancomicina isolada."
  ],
  correta: 1,
  explicacao: "A ceftriaxona é o antibiótico empírico de escolha para meningite bacteriana em crianças, cobrindo *N. meningitidis* e *S. pneumoniae*."
},
{
  enunciado: "Homem de 30 anos apresenta febre, adenomegalia generalizada e úlcera genital indolor há 10 dias. O diagnóstico mais provável é:",
  alternativas: [
    "Cancróide.",
    "Sífilis primária.",
    "Linfogranuloma venéreo.",
    "Herpes genital."
  ],
  correta: 1,
  explicacao: "A úlcera indolor e o adenopatia bilateral indolor caracterizam a sífilis primária."
},
{
  enunciado: "Paciente de 70 anos internado por ITU complicada apresenta febre persistente e hemoculturas positivas para Enterococcus faecalis. O esquema empírico inicial deve incluir:",
  alternativas: [
    "Ceftriaxona.",
    "Ampicilina associada a gentamicina.",
    "Piperacilina-tazobactam isolada.",
    "Vancomicina oral."
  ],
  correta: 1,
  explicacao: "O tratamento de infecções graves por enterococos sensíveis é com ampicilina associada a gentamicina (sinergismo)."
},
{
  enunciado: "Paciente imunossuprimido por quimioterapia desenvolve febre e neutropenia grave. A conduta imediata é:",
  alternativas: [
    "Aguardar 48h de hemocultura.",
    "Iniciar antibiótico empírico de amplo espectro.",
    "Suspender quimioterapia e observar.",
    "Iniciar antiviral."
  ],
  correta: 1,
  explicacao: "A febre neutropênica é emergência infecciosa e requer início imediato de antibiótico de amplo espectro."
},
{
  enunciado: "Paciente com infecção urinária recorrente deve receber profilaxia antibiótica quando:",
  alternativas: [
    "Apresenta mais de 2 episódios por ano.",
    "Apresenta 3 ou mais episódios sintomáticos em 12 meses.",
    "Apresenta bacteriúria assintomática.",
    "Tem alterações anatômicas renais."
  ],
  correta: 1,
  explicacao: "Profilaxia é indicada em pacientes com ≥3 episódios sintomáticos de ITU no último ano."
},
{
  enunciado: "Paciente com mordida de cão há 2 dias, ferida limpa, sem sinais de infecção. Conduta em relação à raiva:",
  alternativas: [
    "Apenas observar o animal por 10 dias.",
    "Iniciar vacina e soro antirrábico.",
    "Administrar antibiótico profilático e aguardar.",
    "Encaminhar ao IML."
  ],
  correta: 0,
  explicacao: "Em casos leves com animal conhecido e observável, deve-se observar o animal por 10 dias antes de iniciar profilaxia."
},
{
  enunciado: "Sobre a profilaxia pós-exposição ao HIV, é correto afirmar:",
  alternativas: [
    "Deve ser iniciada até 72h após a exposição.",
    "Inclui apenas um antirretroviral.",
    "É dispensável se a fonte for desconhecida.",
    "Não é recomendada para acidentes ocupacionais."
  ],
  correta: 0,
  explicacao: "A PEP deve ser iniciada idealmente nas primeiras 2h, no máximo até 72h, e mantida por 28 dias com esquema de 3 drogas."
},
{
  enunciado: "Mulher de 25 anos com diagnóstico de hepatite B aguda apresenta HBsAg e IgM anti-HBc positivos. A conduta é:",
  alternativas: [
    "Tratar com interferon.",
    "Acompanhar clinicamente, pois tende à cura espontânea.",
    "Iniciar tenofovir imediatamente.",
    "Administrar imunoglobulina."
  ],
  correta: 1,
  explicacao: "A maioria dos casos de hepatite B aguda é autolimitada, com cura espontânea; o tratamento é de suporte."
},
{
  enunciado: "Criança de 3 anos apresenta febre, tosse, conjuntivite e exantema que começou na face e se espalhou. O achado patognomônico dessa doença é:",
  alternativas: [
    "Manchas de Forchheimer.",
    "Manchas de Koplik.",
    "Eritema malar.",
    "Lesões vesiculares."
  ],
  correta: 1,
  explicacao: "As manchas de Koplik são patognomônicas do sarampo e aparecem antes do exantema."
},
{
  enunciado: "Homem de 50 anos apresenta febre alta e diarreia aquosa após internação hospitalar prolongada e uso de antibióticos. O agente etiológico mais provável é:",
  alternativas: [
    "Clostridioides difficile.",
    "Salmonella enteritidis.",
    "E. coli enterotoxigênica.",
    "Giardia lamblia."
  ],
  correta: 0,
  explicacao: "O uso de antibióticos de amplo espectro favorece o crescimento de C. difficile, agente da colite pseudomembranosa."
}

  ],

  neurologia: [
{
  enunciado: "Homem de 68 anos apresenta fraqueza súbita em hemicorpo direito e desvio de rima labial à esquerda. A TC de crânio sem contraste nas primeiras 2 horas não mostra alterações. Conduta inicial:",
  alternativas: [
    "Iniciar anticoagulação plena imediatamente.",
    "Solicitar angiotomografia e considerar trombólise se dentro da janela terapêutica.",
    "Aguardar 24 horas e repetir TC.",
    "Iniciar antibiótico empírico para AVC infeccioso."
  ],
  correta: 1,
  explicacao: "A TC inicial pode ser normal no AVC isquêmico agudo; dentro de até 4,5 horas, está indicada trombólise com alteplase após exclusão de hemorragia."
},
{
  enunciado: "Mulher de 28 anos apresenta fraqueza ascendente progressiva após infecção respiratória. Reflexos abolidos e força 3/5 em MMII. O diagnóstico mais provável é:",
  alternativas: [
    "Miastenia gravis.",
    "Síndrome de Guillain-Barré.",
    "Esclerose múltipla.",
    "Mielite transversa."
  ],
  correta: 1,
  explicacao: "A síndrome de Guillain-Barré é caracterizada por paralisia flácida ascendente com arreflexia e história infecciosa prévia."
},
{
  enunciado: "Paciente de 42 anos apresenta crises de perda de consciência seguidas de movimentos tônico-clônicos generalizados por 1 minuto. Pós-ictal com sonolência. Exame físico normal. O exame de escolha para investigação inicial é:",
  alternativas: [
    "TC de crânio com contraste.",
    "EEG interictal.",
    "Punção lombar.",
    "Ressonância de coluna."
  ],
  correta: 1,
  explicacao: "O EEG é fundamental para confirmação diagnóstica e classificação das crises epilépticas."
},
{
  enunciado: "Paciente de 70 anos apresenta tremor de repouso, rigidez e bradicinesia progressiva. Diagnóstico mais provável:",
  alternativas: [
    "Doença de Parkinson.",
    "Parkinsonismo secundário.",
    "Coreia de Huntington.",
    "Distonia essencial."
  ],
  correta: 0,
  explicacao: "A tríade clássica da doença de Parkinson inclui tremor de repouso, rigidez plástica e bradicinesia."
},
{
  enunciado: "Mulher de 23 anos com visão borrada em olho direito, dor ocular e reflexo fotomotor defeituoso. Fundoscopia normal. O diagnóstico provável é:",
  alternativas: [
    "Neurite óptica.",
    "Glaucoma agudo.",
    "Descolamento de retina.",
    "Uveíte anterior."
  ],
  correta: 0,
  explicacao: "A neurite óptica causa perda visual dolorosa, associada a dor retro-orbitária e fundo de olho normal (neurite retrobulbar)."
},
{
  enunciado: "Homem de 59 anos com HAS apresenta cefaleia súbita, vômitos e rebaixamento do nível de consciência. TC mostra sangue em cisternas basais. Diagnóstico:",
  alternativas: [
    "Hemorragia intraparenquimatosa hipertensiva.",
    "Hemorragia subaracnoidea.",
    "Trombose venosa cerebral.",
    "AVC isquêmico extenso."
  ],
  correta: 1,
  explicacao: "Hemorragia subaracnoidea apresenta cefaleia súbita em 'explosão' e sangue nas cisternas na TC."
},
{
  enunciado: "Homem de 34 anos apresenta paresia facial periférica direita súbita, sem outros déficits. O diagnóstico provável é:",
  alternativas: [
    "AVC isquêmico de tronco.",
    "Paralisia de Bell.",
    "Neurite óptica.",
    "Síndrome de Ramsay Hunt."
  ],
  correta: 1,
  explicacao: "A paralisia de Bell é uma neuropatia periférica idiopática do nervo facial, causando paresia completa ipsilateral súbita."
},
{
  enunciado: "Mulher de 40 anos com esclerose múltipla refere diplopia e fraqueza ocular. O achado clássico na ressonância é:",
  alternativas: [
    "Lesões periventriculares disseminadas no tempo e espaço.",
    "Calcificações bilaterais dos núcleos da base.",
    "Realce meníngeo difuso.",
    "Atrofia cortical generalizada."
  ],
  correta: 0,
  explicacao: "O diagnóstico de esclerose múltipla baseia-se em lesões desmielinizantes disseminadas no tempo e no espaço."
},
{
  enunciado: "Homem de 25 anos sofre TCE grave e apresenta rigidez de descerebração. Isso indica lesão localizada em:",
  alternativas: [
    "Córtex frontal.",
    "Mesencéfalo.",
    "Medula cervical.",
    "Cerebelo."
  ],
  correta: 1,
  explicacao: "A rigidez de descerebração indica lesão abaixo do núcleo rubro, no mesencéfalo ou ponte superior."
},
{
  enunciado: "Mulher de 60 anos apresenta cefaleia crônica unilateral, lacrimejamento e rinorreia. Crises de dor intensa duram 30 minutos. Diagnóstico:",
  alternativas: [
    "Enxaqueca com aura.",
    "Cefaleia tensional.",
    "Cefaleia em salvas.",
    "Neuralgia do trigêmeo."
  ],
  correta: 2,
  explicacao: "Cefaleia em salvas causa dor orbital intensa e autonômica ipsilateral, em crises curtas e repetidas."
},
{
  enunciado: "Homem de 75 anos apresenta marcha lenta, incontinência urinária e déficit cognitivo. A TC mostra ventrículos dilatados com sulcos corticais preservados. Diagnóstico:",
  alternativas: [
    "Hidrocefalia de pressão normal.",
    "Doença de Alzheimer.",
    "Demência vascular.",
    "Atrofia cortical difusa."
  ],
  correta: 0,
  explicacao: "A tríade de Hakim-Adams (marcha, demência e incontinência) caracteriza a hidrocefalia de pressão normal."
},
{
  enunciado: "Paciente apresenta crises súbitas de dor em choque na hemiface direita, desencadeadas por mastigação. Exame neurológico normal. Diagnóstico provável:",
  alternativas: [
    "Neuralgia do trigêmeo.",
    "Enxaqueca hemicraniana.",
    "Síndrome de Ramsay Hunt.",
    "Cefaleia cluster."
  ],
  correta: 0,
  explicacao: "A neuralgia do trigêmeo é caracterizada por dor paroxística, tipo choque elétrico, em território trigeminal, com exame normal entre crises."
},
{
  enunciado: "Homem de 47 anos, etilista crônico, apresenta confusão mental, ataxia e nistagmo. Diagnóstico mais provável:",
  alternativas: [
    "Síndrome de Korsakoff.",
    "Encefalopatia de Wernicke.",
    "AVC cerebelar.",
    "Síndrome vestibular periférica."
  ],
  correta: 1,
  explicacao: "A tríade clássica (confusão, ataxia e nistagmo) caracteriza encefalopatia de Wernicke, causada por deficiência de tiamina (B1)."
},
{
  enunciado: "Mulher de 36 anos com dor occipital, fotofobia e rigidez de nuca. Punção lombar mostra líquor claro, pleocitose linfocitária e proteínas discretamente elevadas. Diagnóstico provável:",
  alternativas: [
    "Meningite bacteriana.",
    "Meningite viral.",
    "Hemorragia subaracnoidea.",
    "Mielite transversa."
  ],
  correta: 1,
  explicacao: "Líquor claro, linfocitose e proteína levemente aumentada são típicos de meningite viral."
},
{
  enunciado: "Homem de 50 anos com dor cervical irradiada para braço, parestesia e fraqueza em C6. Diagnóstico provável:",
  alternativas: [
    "Radiculopatia cervical por hérnia de disco.",
    "Síndrome do túnel do carpo.",
    "Mielopatia cervical compressiva.",
    "Neuropatia periférica difusa."
  ],
  correta: 0,
  explicacao: "Dor irradiada, parestesia e déficit motor em território dermatomérico sugerem compressão radicular (C6)."
},
{
  enunciado: "Mulher de 55 anos refere cefaleia nova, com elevação da VSH e dor à palpação temporal. Diagnóstico provável:",
  alternativas: [
    "Neuralgia occipital.",
    "Arterite de células gigantes (arterite temporal).",
    "Cefaleia tensional.",
    "Sinusite frontal."
  ],
  correta: 1,
  explicacao: "A arterite temporal cursa com cefaleia, claudicação mandibular e VSH elevada; risco de cegueira se não tratada com corticoide."
},
{
  enunciado: "Homem de 29 anos apresenta crises convulsivas focais e lesões calcificadas na TC cerebral. Mora em área rural. Diagnóstico provável:",
  alternativas: [
    "Toxoplasmose cerebral.",
    "Neurocisticercose.",
    "Tuberculoma.",
    "Glioblastoma."
  ],
  correta: 1,
  explicacao: "Lesões calcificadas em áreas endêmicas indicam neurocisticercose em fase inativa."
},
{
  enunciado: "Paciente de 68 anos com tremor postural e instabilidade de marcha. Responde mal à levodopa. Diagnóstico mais provável:",
  alternativas: [
    "Parkinsonismo vascular.",
    "Doença de Parkinson idiopática.",
    "Coreia de Huntington.",
    "Ataxia cerebelar."
  ],
  correta: 0,
  explicacao: "O parkinsonismo vascular cursa com marcha em base alargada, pouca resposta à levodopa e lesões isquêmicas múltiplas em substância branca."
},
{
  enunciado: "Mulher de 25 anos apresenta perda de força e sensibilidade em hemicorpo esquerdo, com recuperação parcial e novo episódio em membro inferior direito meses depois. Diagnóstico mais provável:",
  alternativas: [
    "Esclerose múltipla.",
    "Lúpus eritematoso sistêmico.",
    "AVC recorrente.",
    "Mielite infecciosa."
  ],
  correta: 0,
  explicacao: "Episódios neurológicos separados no tempo e em locais distintos são característicos de esclerose múltipla."
},
{
  enunciado: "Homem de 45 anos apresenta rigidez de nuca, febre alta e confusão. O primeiro exame a ser solicitado é:",
  alternativas: [
    "Punção lombar imediata.",
    "TC de crânio antes da punção lombar.",
    "EEG.",
    "Angiorressonância cerebral."
  ],
  correta: 1,
  explicacao: "Em pacientes com sinais de hipertensão intracraniana (rebaixamento de consciência), a TC deve preceder a punção lombar."
}

  ],

  ortopedia: [
{
  enunciado: "Homem de 25 anos, vítima de queda de moto, refere dor intensa e deformidade em perna direita. Ao exame: encurtamento, desvio em varo e crepitação em diáfise de tíbia. Pulsos distais presentes, sensibilidade preservada. Radiografia confirma fratura diafisária fechada de tíbia com desvio. Conduta mais adequada:",
  alternativas: [
    "Imobilização gessada inguinopodálica por 8 a 12 semanas.",
    "Osteossíntese com haste intramedular bloqueada.",
    "Fixação externa definitiva.",
    "Tratamento funcional com apoio precoce sem imobilização."
  ],
  correta: 1,
  explicacao: "Em adulto com fratura diafisária desviada de tíbia, o tratamento de escolha é haste intramedular bloqueada, que permite estabilidade e mobilização precoce."
},
{
  enunciado: "Mulher de 72 anos, osteoporótica, cai da própria altura e apresenta dor intensa em quadril direito, incapacidade de deambular e membro em rotação externa e encurtado. RX: fratura transtrocanteriana estável do fêmur. Conduta:",
  alternativas: [
    "Tratamento conservador com tração esquelética.",
    "Osteossíntese com parafuso deslizante (DHS) ou fixador intramedular.",
    "Artroplastia total do quadril obrigatória.",
    "Apenas analgesia e fisioterapia."
  ],
  correta: 1,
  explicacao: "Fratura transtrocanteriana em idosa é tratada cirurgicamente com dispositivos de deslizamento (DHS ou haste cefalomedular), visando mobilização precoce e menor risco de complicações."
},
{
  enunciado: "Homem de 30 anos sofre queda com mão espalmada e apresenta dor à palpação em 'tabaqueira anatômica'. Radiografia inicial é normal. Conduta mais adequada:",
  alternativas: [
    "Alta, pois fratura está descartada.",
    "Imobilização em tala ou gesso para punho/polegar e repetir RX em 10–14 dias.",
    "Solicitar apenas ressonância magnética imediata.",
    "Bloqueio anestésico local e retorno quando a dor melhorar."
  ],
  correta: 1,
  explicacao: "Dor em tabaqueira anatômica sugere fratura oculta de escafoide. Deve-se imobilizar e reavaliar com nova radiografia ou exame de imagem complementar."
},
{
  enunciado: "Criança de 5 anos cai do escorregador e apresenta deformidade em 'galho verde' no antebraço, com fratura incompleta de rádio. Conduta habitual:",
  alternativas: [
    "Redução cirúrgica e fixação com placa.",
    "Tratamento conservador com imobilização gessada após alinhamento.",
    "Observação sem imobilização.",
    "Fixação externa temporária."
  ],
  correta: 1,
  explicacao: "Fraturas em galho verde em crianças são estáveis e, em geral, tratadas com redução fechada (se necessário) e imobilização gessada."
},
{
  enunciado: "Homem de 45 anos, trabalhador da construção civil, relata dor no ombro direito há meses, piora noturna e ao elevar o braço acima da cabeça. Jobe (teste do 'arco doloroso') é positivo, com dor entre 60º e 120º de abdução. Diagnóstico provável:",
  alternativas: [
    "Luxação glenoumeral recorrente.",
    "Síndrome do impacto subacromial (lesão do manguito rotador).",
    "Capsulite adesiva.",
    "Artrose acromioclavicular isolada."
  ],
  correta: 1,
  explicacao: "Dor no arco de movimento e testes positivos para impacto indicam síndrome do impacto, frequentemente associada a lesão do manguito rotador."
},
{
  enunciado: "Adolescente de 15 anos, jogador de basquete, torce o joelho ao aterrissar de salto. Relata 'estalo', dor imediata e incapacidade de continuar. Exame: derrame articular importante, teste de Lachman positivo. Lesão mais provável:",
  alternativas: [
    "Lesão de menisco medial.",
    "Ruptura do ligamento cruzado anterior (LCA).",
    "Ruptura do ligamento colateral medial.",
    "Luxação patelar recidivante."
  ],
  correta: 1,
  explicacao: "Estalo, derrame rápido e Lachman positivo são típicos de lesão do LCA."
},
{
  enunciado: "Homem de 33 anos sofreu ferimento cortante profundo na face volar do punho, apresentando incapacidade de flexão dos dedos e anestesia em território do nervo mediano. Prioridade na abordagem cirúrgica:",
  alternativas: [
    "Fixação óssea com placa.",
    "Reparação microcirúrgica de tendões e nervo mediano.",
    "Imobilização e antibiótico apenas.",
    "Liberação do túnel do carpo."
  ],
  correta: 1,
  explicacao: "Lesões seccionantes de tendões e nervos exigem reparo cirúrgico precoce para restaurar função e sensibilidade."
},
{
  enunciado: "Homem de 50 anos, diabético, apresenta dor intensa em pé direito, calor, vermelhidão e edema local após pequeno trauma. RX inicial é normal. Diagnóstico diferencial importante:",
  alternativas: [
    "Gota aguda.",
    "Pé diabético neuropático (artropatia de Charcot).",
    "Celulite simples.",
    "Fasciíte necrosante."
  ],
  correta: 1,
  explicacao: "Em diabéticos com neuropatia, artropatia de Charcot deve ser lembrada: dor desproporcional, edema e risco de colapso ósseo, muitas vezes com RX inicial normal."
},
{
  enunciado: "Menino de 4 anos, obeso, apresenta claudicação e dor em quadril direito de início insidioso. Rotação interna do quadril está reduzida e dolorosa. RX mostra deslizamento da epífise femoral. Diagnóstico:",
  alternativas: [
    "Doença de Legg-Calvé-Perthes.",
    "Epifisiólise femoral proximal (escorregamento da epífise).",
    "Sinovite transitória do quadril.",
    "Fratura de colo femoral."
  ],
  correta: 1,
  explicacao: "Epifisiólise ocorre em crianças/adolescentes obesos, com deslizamento da epífise femoral proximal e limitação da rotação interna."
},
{
  enunciado: "Homem de 40 anos apresenta dor lombar há 3 semanas após levantar peso. Irradiação para face posterior da coxa até o pé, com piora ao tossir. Teste de Lasègue positivo. Diagnóstico provável:",
  alternativas: [
    "Lombalgia mecânica simples.",
    "Hérnia de disco lombar com radiculopatia.",
    "Estenose lombar degenerativa.",
    "Espondilolistese ístmica."
  ],
  correta: 1,
  explicacao: "Dor lombar irradiada para membro inferior seguindo trajeto de raiz nervosa, com Lasègue positivo, é típica de hérnia de disco com compressão radicular."
},
{
  enunciado: "Homem de 60 anos cai da escada, bate o ombro e apresenta braço em abdução forçada e rotação externa, incapaz de movimentar. Sinal de 'sulco' no ombro. RX mostra perda da congruência gleno-umeral. Diagnóstico:",
  alternativas: [
    "Fratura de colo de úmero.",
    "Luxação anterior de ombro.",
    "Luxação posterior de ombro.",
    "Fratura da clavícula distal."
  ],
  correta: 1,
  explicacao: "Luxação anterior é a mais comum; o membro fica em abdução e rotação externa, com deformidade visível do contorno do ombro."
},
{
  enunciado: "Paciente politraumatizado com fratura exposta de tíbia apresenta ferida extensa, contaminação de solo e grande destruição de partes moles. Classificação provável segundo Gustilo-Anderson:",
  alternativas: [
    "Grau I.",
    "Grau II.",
    "Grau IIIA.",
    "Grau IIIB ou IIIC."
  ],
  correta: 3,
  explicacao: "Fraturas expostas com extensa destruição de partes moles, contaminação importante e necessidade de retalhos ou reparos vasculares são consideradas Grau III (B ou C)."
},
{
  enunciado: "Criança de 8 anos apresenta dor intensa, febre e recusa em apoiar o membro após trauma leve no quadril. Suspeita-se de artrite séptica. Exame complementar mais útil:",
  alternativas: [
    "Radiografia simples do quadril.",
    "Ultrassonografia de quadril.",
    "Cintilografia óssea.",
    "Ressonância magnética de pelve."
  ],
  correta: 1,
  explicacao: "A USG pode demonstrar derrame articular e guiar punção diagnóstica/terapêutica em artrite séptica de quadril."
},
{
  enunciado: "Homem de 35 anos sofre fratura diafisária de fêmur em colisão automobilística e, 24h depois, desenvolve dispneia, confusão mental e petéquias em tronco. Diagnóstico:",
  alternativas: [
    "Tromboembolismo pulmonar.",
    "Embolia gordurosa.",
    "Pneumonia aspirativa.",
    "Edema agudo de pulmão."
  ],
  correta: 1,
  explicacao: "Tríade clássica de embolia gordurosa: insuficiência respiratória, alteração neurológica e petéquias em tronco após fratura de osso longo."
},
{
  enunciado: "Idoso de 78 anos apresenta dor lombar progressiva, perda de estatura e cifose acentuada. Radiografia mostra vértebras em 'cunha' com redução de altura anterior. Diagnóstico mais provável:",
  alternativas: [
    "Espondilite anquilosante.",
    "Fraturas por compressão osteoporótica.",
    "Mieloma múltiplo.",
    "Metástases vertebrais."
  ],
  correta: 1,
  explicacao: "Em idosos com osteoporose, são comuns fraturas por compressão vertebral, levando à perda de estatura e cifose."
},
{
  enunciado: "Homem de 50 anos apresenta dor crônica no ombro, dificuldade para abduzir o braço acima de 90º e fraqueza em rotação externa. Teste de Jobe e de Patte positivos. Estrutura mais provavelmente lesada:",
  alternativas: [
    "Cabeça longa do bíceps.",
    "Tendão do supraespinal.",
    "Tendão do subescapular.",
    "Tendão do latíssimo do dorso."
  ],
  correta: 1,
  explicacao: "Lesão do supraespinal é a mais comum no manguito rotador, causando dor ao arco de movimento e fraqueza na abdução."
},
{
  enunciado: "Criança de 2 anos apresenta dor e impotência funcional em punho após ser 'puxada' pelo braço. O membro permanece em posição de ligeira flexão e pronação. Radiografia é normal. Diagnóstico provável:",
  alternativas: [
    "Fratura supracondiliana de úmero.",
    "Luxação de cotovelo.",
    "Subluxação da cabeça do rádio (pronation dolorosa).",
    "Fratura de Colles."
  ],
  correta: 2,
  explicacao: "A 'pronation dolorosa' ocorre por tração do membro superior, causando subluxação da cabeça do rádio; RX é normal, e a redução é geralmente fechada e simples."
},
{
  enunciado: "Homem de 26 anos, jogador de futebol, apresenta dor súbita no joelho após torção, seguida de bloqueio articular e sensação de 'algo preso'. Teste de McMurray é positivo. Diagnóstico provável:",
  alternativas: [
    "Ruptura do LCA.",
    "Ruptura do LCP.",
    "Lesão de menisco.",
    "Condromalácia patelar."
  ],
  correta: 2,
  explicacao: "Bloqueio articular mecânico e dor à manobra de McMurray indicam lesão meniscal, frequentemente em 'alça de balde'."
},
{
  enunciado: "Jovem de 19 anos apresenta dor intensa na perna após imobilização gessada por fratura. Relata dor desproporcional ao estímulo, parestesia e dor à mobilização passiva dos dedos. Diagnóstico:",
  alternativas: [
    "TVP.",
    "Infecção de partes moles.",
    "Síndrome compartimental aguda.",
    "Neuropatia periférica."
  ],
  correta: 2,
  explicacao: "Dor intensa desproporcional, parestesia e dor à mobilização passiva são sinais clássicos de síndrome compartimental, que requer fasciotomia de urgência."
},
{
  enunciado: "Homem de 40 anos apresenta dor no calcanhar, pior pela manhã ao dar os primeiros passos e após longos períodos em pé. À palpação, dor em região de inserção da fáscia plantar. Diagnóstico provável:",
  alternativas: [
    "Tendinopatia aquileia.",
    "Fascite plantar.",
    "Fratura de calcâneo.",
    "Neuroma de Morton."
  ],
  correta: 1,
  explicacao: "Dor plantar em calcanhar, pior pela manhã, é típica de fascite plantar, geralmente associada a sobrecarga mecânica."
}

  ],

  psiquiatria: [
{
  enunciado: "Mulher de 28 anos procura o pronto-socorro com quadro de agitação, insônia há 3 dias, fala acelerada, ideias grandiosas e gasto excessivo de dinheiro. Não há uso de drogas. Diagnóstico mais provável:",
  alternativas: [
    "Transtorno de pânico.",
    "Episódio maníaco.",
    "Esquizofrenia paranoide.",
    "Transtorno esquizoafetivo."
  ],
  correta: 1,
  explicacao: "Euforia, insônia, fuga de ideias e comportamento expansivo indicam episódio maníaco, típico do transtorno bipolar."
},
{
  enunciado: "Homem de 45 anos relata humor deprimido há 6 meses, anedonia, perda de peso e ideação suicida. Refere episódios anteriores semelhantes com intervalos assintomáticos. Diagnóstico provável:",
  alternativas: [
    "Transtorno depressivo maior recorrente.",
    "Distimia.",
    "Transtorno bipolar tipo II.",
    "Transtorno de ajustamento."
  ],
  correta: 0,
  explicacao: "Episódios depressivos recorrentes e bem delimitados sugerem transtorno depressivo maior recorrente."
},
{
  enunciado: "Mulher de 19 anos apresenta perda ponderal acentuada, amenorreia e intensa preocupação com o peso corporal, embora esteja abaixo do normal. Diagnóstico mais provável:",
  alternativas: [
    "Bulimia nervosa.",
    "Anorexia nervosa tipo restritiva.",
    "Transtorno de ansiedade generalizada.",
    "Transtorno obsessivo-compulsivo."
  ],
  correta: 1,
  explicacao: "Anorexia nervosa cursa com restrição alimentar, medo intenso de engordar e distorção da imagem corporal."
},
{
  enunciado: "Homem de 30 anos apresenta pensamentos intrusivos sobre contaminação e lava as mãos dezenas de vezes ao dia, reconhecendo o excesso mas sem conseguir evitar. Diagnóstico provável:",
  alternativas: [
    "Transtorno obsessivo-compulsivo.",
    "Transtorno de personalidade esquizoide.",
    "Transtorno delirante.",
    "Transtorno ansioso-fóbico."
  ],
  correta: 0,
  explicacao: "Presença de obsessões e compulsões reconhecidas como irracionais caracteriza o TOC."
},
{
  enunciado: "Paciente de 60 anos é levado à emergência com confusão mental aguda, alucinações visuais e desorientação após infecção urinária. Diagnóstico mais provável:",
  alternativas: [
    "Demência de Alzheimer.",
    "Delirium.",
    "Episódio psicótico agudo.",
    "Síndrome amnésica."
  ],
  correta: 1,
  explicacao: "Delirium é um estado confusional agudo com flutuação do nível de consciência, comumente precipitado por infecção ou drogas em idosos."
},
{
  enunciado: "Mulher de 34 anos apresenta ansiedade excessiva, preocupação constante e sintomas físicos (tensão muscular, palpitações) há mais de 6 meses. Diagnóstico provável:",
  alternativas: [
    "Transtorno de pânico.",
    "Transtorno de ansiedade generalizada.",
    "Transtorno de estresse pós-traumático.",
    "Transtorno de personalidade evitativa."
  ],
  correta: 1,
  explicacao: "Ansiedade difusa e persistente, não limitada a situações específicas, define o transtorno de ansiedade generalizada."
},
{
  enunciado: "Homem de 26 anos, após presenciar acidente fatal, apresenta pesadelos, flashbacks e evitação de locais relacionados há mais de 1 mês. Diagnóstico:",
  alternativas: [
    "Transtorno de estresse agudo.",
    "Transtorno de estresse pós-traumático.",
    "Transtorno de adaptação.",
    "Transtorno de pânico."
  ],
  correta: 1,
  explicacao: "Manifestações traumáticas persistentes (>1 mês) configuram TEPT."
},
{
  enunciado: "Mulher de 40 anos acredita firmemente estar sendo envenenada por vizinhos, sem evidências objetivas. Humor e cognição preservados. Diagnóstico provável:",
  alternativas: [
    "Transtorno delirante persecutório.",
    "Esquizofrenia.",
    "Transtorno de personalidade paranoide.",
    "Transtorno afetivo bipolar."
  ],
  correta: 0,
  explicacao: "Delírios isolados e fixos, sem desorganização ou prejuízo funcional grave, caracterizam transtorno delirante."
},
{
  enunciado: "Homem de 23 anos ouve vozes comentando suas ações e acredita ser controlado por forças externas. Isolamento social e prejuízo funcional importante. Diagnóstico:",
  alternativas: [
    "Transtorno esquizoafetivo.",
    "Esquizofrenia.",
    "Transtorno delirante.",
    "Transtorno psicótico breve."
  ],
  correta: 1,
  explicacao: "Alucinações auditivas e delírios de controle com prejuízo funcional persistente definem esquizofrenia."
},
{
  enunciado: "Mulher de 55 anos com histórico de depressão faz uso de amitriptilina. Após ingestão excessiva do medicamento, apresenta arritmia, hipotensão e midríase. Conduta inicial:",
  alternativas: [
    "Administração de flumazenil.",
    "Administração de naloxona.",
    "Administração de bicarbonato de sódio.",
    "Lavagem gástrica imediata."
  ],
  correta: 2,
  explicacao: "A intoxicação por tricíclicos causa arritmias e QRS alargado; o antídoto é o bicarbonato de sódio IV."
},
{
  enunciado: "Homem de 21 anos apresenta episódios súbitos de medo intenso, palpitações, sensação de morte iminente e sudorese, com resolução espontânea. Diagnóstico:",
  alternativas: [
    "Transtorno de pânico.",
    "Fobia social.",
    "Transtorno de ansiedade generalizada.",
    "Hipocondria."
  ],
  correta: 0,
  explicacao: "Ataques abruptos de medo intenso e sintomas autonômicos definem o transtorno de pânico."
},
{
  enunciado: "Paciente de 35 anos apresenta períodos de humor elevado e irritável alternando com episódios de depressão, mantendo intervalos assintomáticos. Diagnóstico provável:",
  alternativas: [
    "Transtorno bipolar tipo I.",
    "Transtorno bipolar tipo II.",
    "Ciclotimia.",
    "Transtorno esquizoafetivo."
  ],
  correta: 0,
  explicacao: "A presença de episódios maníacos e depressivos caracteriza o transtorno bipolar tipo I."
},
{
  enunciado: "Mulher de 42 anos, com queixas de múltiplos sintomas físicos sem causa orgânica aparente, exige exames repetidos e muda frequentemente de médico. Diagnóstico provável:",
  alternativas: [
    "Transtorno de somatização.",
    "Transtorno factício.",
    "Simulação.",
    "Hipocondria."
  ],
  correta: 0,
  explicacao: "Sintomas físicos múltiplos e crônicos sem explicação médica configuram transtorno somatoforme (somatização)."
},
{
  enunciado: "Homem de 70 anos apresenta declínio progressivo da memória, dificuldade para nomear objetos e desorientação temporal. Diagnóstico provável:",
  alternativas: [
    "Delirium.",
    "Demência tipo Alzheimer.",
    "Depressão maior.",
    "Transtorno cognitivo leve."
  ],
  correta: 1,
  explicacao: "Quadro insidioso e progressivo de prejuízo cognitivo é típico da demência de Alzheimer."
},
{
  enunciado: "Mulher de 32 anos apresenta tristeza após o parto, com crises de choro, irritabilidade e labilidade emocional, mas mantém cuidados com o bebê. Diagnóstico:",
  alternativas: [
    "Depressão pós-parto.",
    "Psicose puerperal.",
    "Tristeza puerperal (baby blues).",
    "Transtorno de ansiedade pós-parto."
  ],
  correta: 2,
  explicacao: "O baby blues ocorre nos primeiros dias pós-parto, com sintomas leves e transitórios, resolvendo-se espontaneamente."
},
{
  enunciado: "Paciente de 25 anos com comportamento teatral, busca constante de atenção e dramatização de emoções. Diagnóstico provável:",
  alternativas: [
    "Transtorno histriônico de personalidade.",
    "Transtorno narcisista.",
    "Transtorno borderline.",
    "Transtorno dependente."
  ],
  correta: 0,
  explicacao: "Comportamento sedutor e necessidade excessiva de aprovação são típicos da personalidade histriônica."
},
{
  enunciado: "Homem de 40 anos apresenta desconfiança injustificada e interpretação distorcida das ações alheias como ameaças. Diagnóstico:",
  alternativas: [
    "Transtorno paranoide de personalidade.",
    "Transtorno delirante.",
    "Esquizofrenia paranoide.",
    "Transtorno esquizoide."
  ],
  correta: 0,
  explicacao: "A desconfiança persistente, sem delírios estruturados, caracteriza a personalidade paranoide."
},
{
  enunciado: "Mulher de 27 anos relata impulsividade, instabilidade afetiva, relacionamentos intensos e autoagressões recorrentes. Diagnóstico provável:",
  alternativas: [
    "Transtorno de personalidade borderline.",
    "Transtorno antissocial.",
    "Transtorno histriônico.",
    "Transtorno narcisista."
  ],
  correta: 0,
  explicacao: "Instabilidade emocional, impulsividade e autoagressões caracterizam o transtorno de personalidade borderline."
},
{
  enunciado: "Homem de 19 anos, usuário crônico de maconha, apresenta apatia, lentidão psicomotora e déficit de memória recente. Diagnóstico provável:",
  alternativas: [
    "Síndrome amotivacional.",
    "Esquizofrenia hebefrênica.",
    "Transtorno psicótico induzido por cocaína.",
    "Depressão maior."
  ],
  correta: 0,
  explicacao: "O uso prolongado de cannabis pode causar síndrome amotivacional, com perda de iniciativa e prejuízo cognitivo."
},
{
  enunciado: "Homem de 37 anos, em abstinência alcoólica, apresenta tremores, sudorese, confusão e alucinações visuais de insetos. Diagnóstico provável:",
  alternativas: [
    "Episódio psicótico agudo.",
    "Delirium tremens.",
    "Síndrome de Korsakoff.",
    "Transtorno esquizoafetivo."
  ],
  correta: 1,
  explicacao: "Delirium tremens é uma forma grave de abstinência alcoólica, com agitação, confusão e alucinações visuais típicas."
}

  ]
};

// deixa disponível no escopo global do browser
window.questionBank = questionBank;
