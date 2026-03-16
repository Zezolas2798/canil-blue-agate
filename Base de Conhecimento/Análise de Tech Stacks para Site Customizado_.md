

# **Análise Comparativa de Stacks de Tecnologia para um Site Customizado em 2025**

Relatório Técnico para: Blue Agate Kennels  
Data: 29 de Junho de 2025  
Autor: Analista Sênior de MarTech e Desenvolvedor WordPress

## **Introdução e Escopo do Projeto**

Este relatório apresenta uma análise técnica aprofundada das melhores pilhas de tecnologia (tech stacks) para a construção do novo website do canil de elite "Blue Agate". O objetivo é fornecer uma recomendação clara e fundamentada que atenda às necessidades específicas de uma empreendedora solo, não-desenvolvedora, mas tecnicamente curiosa, que busca total autonomia e capacidade de marketing.

O cenário atual envolve a substituição de uma plataforma de nicho ("Sistema Pet") que impõe limitações críticas, impedindo a implementação de estratégias de marketing digital avançadas. Os requisitos chave para a nova solução são:

1. **Controle Total de Marketing:** Capacidade de integrar o Google Tag Manager (GTM) e outros pixels de rastreamento sem restrições.  
2. **Formulários Avançados:** Criação de formulários de qualificação de leads com campos ocultos (para rastrear a origem do tráfego, como campanhas de Google Ads) e redirecionamento condicional após o envio.  
3. **CMS Customizado:** Uma estrutura de "banco de dados" para gerenciar e exibir perfis detalhados de cães e ninhadas, com campos específicos como pedigree, exames de saúde, linhagem, e galerias de fotos.

A análise a seguir avalia criticamente a pilha tecnológica recomendada (WordPress \+ Elementor Pro), investiga alternativas viáveis dentro e fora do ecossistema WordPress, consolida os dados em uma matriz comparativa e conclui com uma recomendação estratégica e um plano de ação prático.

## **1\. Análise da Pilha Recomendada: WordPress \+ Elementor Pro**

A abordagem inicialmente sugerida consiste em uma combinação de ferramentas modulares, centradas no ecossistema WordPress. Esta seção disseca cada componente e avalia a sua adequação aos requisitos do projeto.

### **1.1. A Fundação: Entendendo os Componentes Principais**

A força desta pilha reside na forma como os seus componentes individuais se integram para formar uma solução coesa e poderosa.

* **WordPress.org:** No centro de tudo está o WordPress.org, o sistema de gerenciamento de conteúdo (CMS) de código aberto mais popular do mundo. A distinção crucial aqui é "WordPress.org" (auto-hospedado) em oposição ao "WordPress.com" (uma plataforma mais limitada). Ao escolher a versão auto-hospedada, obtém-se 100% de propriedade e controle sobre todos os dados e arquivos do site. Esta soberania é o antídoto direto para as restrições da sua plataforma atual, garantindo que nunca mais ficará presa a um fornecedor de software que limita as suas ambições de marketing ou de conteúdo.  
* **Hospedagem (Ex: Hostinger):** Um site auto-hospedado precisa de um "terreno" na internet para existir. É aqui que entra o provedor de hospedagem. A Hostinger é uma opção frequentemente recomendada no Brasil por oferecer um excelente equilíbrio entre custo, performance e suporte para sites WordPress.1 Planos como o "WordPress Business" são ideais para começar, pois incluem recursos como servidores localizados no Brasil (o que melhora a velocidade de carregamento para o seu público-alvo), um domínio gratuito no primeiro ano e certificados SSL para segurança.2 O custo inicial é promocional, sendo importante considerar os valores de renovação para o planejamento a longo prazo.3  
* **Tema (Ex: Hello Theme):** O tema no WordPress define a aparência geral e a estrutura base do site. O Hello Theme, desenvolvido pela própria equipe do Elementor, é a escolha ideal para esta pilha.4 Ele funciona como uma "tela em branco" minimalista e ultraleve. O seu único propósito é fornecer a base mais otimizada possível para que o page builder (Elementor) assuma o controle total do design. Usar um tema como este evita o "inchaço" (bloat) de código desnecessário que muitos temas multifuncionais carregam, o que é fundamental para a velocidade do site.  
* **Page Builder (Elementor Pro):** Esta é a ferramenta central para a construção visual do site. O Elementor Pro transforma o processo de design numa experiência de arrastar e soltar, tornando-o extremamente acessível para quem não programa.5 A versão Pro é um requisito indispensável para este projeto por três razões principais:  
  1. **Theme Builder:** Permite criar modelos para cabeçalhos, rodapés e, crucialmente, para as páginas de perfil dos seus cães e ninhadas.  
  2. **Form Builder:** Oferece um construtor de formulários visual com funcionalidades avançadas.  
  3. Custom Code: Permite a inserção de scripts, como o do Google Tag Manager, diretamente em partes específicas do site.  
     O custo para um único site (plano "Advanced Solo") é de $79 USD por ano, um investimento que se justifica plenamente pelas funcionalidades desbloqueadas.7

### **1.2. Criando o "Digital Pedigree": Custom Post Types**

O requisito de criar perfis estruturados para cães e ninhadas é onde a verdadeira flexibilidade do WordPress se revela. Isto não é alcançado com uma única ferramenta, mas com uma combinação de plugins que funcionam em perfeita harmonia.

* **O Desafio Técnico:** A necessidade é criar um "banco de dados" de conteúdo. Cada cão é uma entrada com campos fixos: nome, data de nascimento, link do pedigree, resultados de exames, galeria de fotos, etc. O mesmo se aplica às ninhadas. Simplesmente criar uma página para cada cão seria ineficiente e difícil de gerir e filtrar.  
* **A Solução (CPT UI \+ ACF):** A solução elegante no WordPress envolve dois plugins gratuitos e extremamente populares:  
  * **Custom Post Type UI (CPT UI):** Este plugin permite criar novos "tipos de post" no WordPress. Com uma interface simples, pode-se criar um tipo de post chamado "Cães" e outro chamado "Ninhadas".9 Estes aparecerão no menu do WordPress ao lado de "Posts" e "Páginas", criando contentores lógicos e organizados para a sua informação.11 A sua interface é funcional, embora básica, e cumpre perfeitamente o seu papel.10  
  * **Advanced Custom Fields (ACF):** Uma vez que os "contentores" (Cães, Ninhadas) estão criados, o ACF permite criar os "campos" dentro deles.13 Para o tipo de post "Cães", por exemplo, pode-se adicionar campos como "Data de Nascimento" (um seletor de data), "Link do Pedigree" (um campo de URL), "Exames de Saúde" (um campo de upload de ficheiro), e assim por diante.9 A versão gratuita do ACF é incrivelmente poderosa e suficiente para começar, sendo amplamente elogiada pela sua documentação e suporte na comunidade.10  
* **A Magia da Integração com Elementor Pro:** Com a estrutura de dados criada pelo CPT UI e ACF, o Theme Builder do Elementor Pro entra em ação. Pode-se desenhar um único modelo visual chamado "Perfil de Cão". Dentro deste modelo, arrasta-se um widget de título e, em vez de digitar um texto estático, seleciona-se a opção "Dynamic Content" e aponta-se para o campo "Nome do Cão" do ACF. Repete-se o processo para a foto, data de nascimento, etc..9 Uma vez guardado, este modelo será aplicado automaticamente a todos os cães que adicionar no futuro. Isto é a essência de um site escalável e de fácil manutenção: os dados são separados do design.

A modularidade desta abordagem é uma vantagem estratégica imensa. A sua informação mais valiosa — os dados dos seus cães e ninhadas — é gerida pelo WordPress e pelo ACF, de forma independente do construtor de páginas. Se, no futuro, decidir trocar o Elementor por outro construtor (como o Bricks, que analisaremos mais adiante), não precisará de recriar toda a sua base de dados. Apenas terá de redesenhar os modelos de exibição. Esta separação de preocupações (dados vs. apresentação) de-risca o seu investimento a longo prazo e evita o aprisionamento tecnológico (vendor lock-in) comum em plataformas "all-in-one".

### **1.3. Ativando o Funil de Marketing: GTM e Formulários Avançados**

Aqui, a pilha WordPress \+ Elementor Pro demonstra a sua capacidade de satisfazer requisitos de marketing sofisticados que a sua plataforma atual não consegue.

* **Integração com Google Tag Manager (GTM):** Este é um requisito crítico e é facilmente resolvido. A funcionalidade "Custom Code" do Elementor Pro permite colar os dois snippets de código do GTM (um para o \<head\> e outro para o \<body\>) e configurar a sua exibição em "Todo o Site" com apenas alguns cliques.16 Isto é feito sem a necessidade de instalar plugins adicionais, mantendo o sistema limpo e dando-lhe o controlo total para implementar qualquer tag de marketing (Google Analytics 4, Pixel do Meta, Google Ads, etc.) que necessite.18 O rastreamento de submissões de formulários do Elementor através do GTM também é um processo bem documentado, permitindo-lhe medir conversões com precisão.19  
* **Capacidades Avançadas de Formulário:**  
  * **Campos Ocultos (Hidden Fields):** O construtor de formulários do Elementor Pro suporta nativamente campos ocultos.22 Esta funcionalidade é vital para o seu funil. Pode-se criar campos ocultos para capturar automaticamente os parâmetros UTM das suas campanhas do Google Ads. Quando um lead preenche o formulário, essa informação é enviada juntamente com os seus dados, permitindo-lhe saber exatamente qual campanha, grupo de anúncios ou palavra-chave gerou aquele contacto de alto valor.  
  * **Redirecionamento Condicional:** Este é o requisito mais complexo. Nativamente, o Elementor Pro permite redirecionar o utilizador para uma única URL de agradecimento após a submissão do formulário.24 No entanto, ele  
    **não suporta** lógica condicional de forma nativa (por exemplo, "se o utilizador selecionar 'Interesse em Filhotes', redirecionar para a página A; se selecionar 'Interesse em Cobertura', redirecionar para a página B").

À primeira vista, esta limitação parece ser uma falha significativa. No entanto, ela revela uma das maiores forças do WordPress: o seu ecossistema. Onde uma ferramenta principal apresenta uma lacuna, a comunidade de desenvolvedores cria soluções. Plugins de terceiros, como o "Conditional Fields for Elementor Form" 25 ou o "Dynamic Content for Elementor" 26, foram criados especificamente para preencher esta necessidade. Com um pequeno custo adicional, estes plugins adicionam uma interface visual dentro do Elementor para configurar regras de redirecionamento complexas sem escrever uma única linha de código.

Isto ilustra um padrão fundamental: no mundo WordPress, um obstáculo técnico raramente é um beco sem saída. É, mais frequentemente, um problema que pode ser resolvido através da aquisição e configuração de um plugin bem documentado e suportado. Para uma empreendedora solo, isto é transformador. Transforma um potencial bloqueio que exigiria a contratação de um programador numa simples decisão de compra, aumentando a sua autonomia e a resiliência da plataforma.

### **1.4. O Veredicto "Blue Agate": Prós e Contras da Pilha Elementor**

* **Principais Vantagens:**  
  * **Flexibilidade e Propriedade Total:** Controlo absoluto sobre todos os aspetos do site, desde os dados até ao design e funcionalidades.  
  * **Ecossistema Imenso:** Uma vasta biblioteca de plugins e uma comunidade global que oferece soluções para praticamente qualquer desafio imaginável.  
  * **Acessibilidade para Não-Desenvolvedores:** A interface visual do Elementor Pro reduz drasticamente a barreira de entrada para a criação de sites profissionais.  
  * **Custo-Benefício:** O custo total (hospedagem \+ software) é altamente competitivo e previsível, sem taxas de transação ou custos baseados no uso.  
* **Principais Desvantagens:**  
  * **Curva de Aprendizagem:** Embora visual, a combinação de múltiplos componentes (WordPress, hospedagem, plugins) tem uma curva de aprendizado inicial. Requer gestão (atualizações de plugins e do core do WordPress).  
  * **Performance:** O Elementor tem uma reputação de gerar código mais "inchado" (bloat) em comparação com alternativas mais modernas, o que pode impactar a velocidade do site se não for otimizado corretamente com boas práticas e plugins de cache.27  
  * **Manutenção:** A responsabilidade pela segurança e pelas atualizações recai sobre o proprietário do site. Embora existam soluções para automatizar e simplificar isto, não é um sistema "configure e esqueça".

## **2\. Análise Comparativa de Alternativas Viáveis**

Para validar a recomendação, é essencial compará-la com as alternativas mais fortes do mercado, tanto dentro como fora do ecossistema WordPress.

### **2.1. O Caminho de Alta Performance (WordPress \+ Bricks Builder)**

Dentro do próprio WordPress, surgiu uma nova geração de construtores focados em performance. O Bricks Builder é o principal concorrente do Elementor neste segmento.

* **O que é o Bricks?** A diferença fundamental é arquitetónica. O Elementor é um *plugin* que funciona com um tema, enquanto o Bricks é um *tema* que já inclui o construtor.5 Esta abordagem integrada resulta em menos sobrecarga e um código final mais limpo e eficiente.  
* **Performance e Velocidade:** Esta é a principal vantagem do Bricks. Análises técnicas e o consenso da comunidade de desenvolvedores indicam que os sites construídos com Bricks são significativamente mais rápidos e leves do que os construídos com Elementor.5 O código HTML gerado é mais semântico e enxuto, o que se traduz em melhores pontuações no Core Web Vitals do Google e, potencialmente, em melhor SEO. O próprio editor do Bricks é notavelmente mais rápido e responsivo durante o uso.5  
* **A Curva de Aprendizagem:** Este é o ponto crítico e a maior desvantagem para o seu perfil. O Bricks foi projetado com desenvolvedores e utilizadores avançados em mente.5 A sua interface, embora poderosa, não abstrai os conceitos fundamentais da web. Para criar layouts, é necessário ter um entendimento prático de como funcionam o CSS Flexbox e o CSS Grid.32 Enquanto o Elementor oferece um widget de "Colunas" intuitivo, no Bricks, o utilizador precisa de construir essa estrutura usando contentores e aplicando propriedades de Flexbox ou Grid.36 Para um não-programador, esta curva de aprendizagem é descrita como "íngreme" (steep) e pode ser frustrante.31  
* **Funcionalidades e Custo:** O Bricks possui um construtor de *query loops* nativo extremamente poderoso, ideal para exibir as suas listas de cães e ninhadas de forma customizada.27 O seu modelo de preços é muito atrativo. Embora tenham introduzido planos anuais (a partir de $79 USD/ano para 1 site), eles ainda oferecem um plano "Ultimate Lifetime" por um pagamento único de $599 USD.6 A longo prazo, esta é uma proposta de valor imbatível em comparação com as subscrições anuais do Elementor. É importante notar que a empresa já anunciou que os preços irão aumentar em 2025\.41

Esta comparação revela um dilema entre "produtividade imediata" e "proficiência técnica". Como uma empreendedora solo e tecnicamente curiosa, o Bricks pode parecer tentador pela sua performance superior. Contudo, o tempo necessário para dominar os seus conceitos fundamentais de CSS não é trivial.42 É um tempo que não estaria a ser investido no marketing do seu negócio, no atendimento a clientes ou na gestão do canil. Para um negócio a iniciar, a ferramenta "melhor" não é necessariamente a mais poderosa em termos brutos, mas sim aquela que oferece o caminho mais rápido para um resultado de negócio valioso. O Elementor oferece maior produtividade inicial para um não-desenvolvedor, enquanto o Bricks exige um investimento prévio em competências técnicas antes que essa produtividade possa ser alcançada. Isto torna o Bricks uma opção de maior risco, mas com maior recompensa de performance, para o seu perfil.

### **2.2. Os Concorrentes "All-in-One": Webflow e Framer**

Estas plataformas representam uma filosofia diferente: um ecossistema fechado e totalmente gerido que combina design, CMS e hospedagem num único serviço.

#### **2.2.1. Webflow: A Plataforma No-Code dos Profissionais**

* **Conceito Central:** O Webflow é uma plataforma totalmente hospedada, conhecida por dar aos designers um controlo visual granular que se aproxima do que é possível com código, resultando em websites limpos e performáticos.44  
* **Poder do CMS ("Collections"):** O CMS nativo do Webflow, chamado "Collections", é o seu ponto mais forte e é diretamente comparável à solução WordPress \+ CPT/ACF. Seria muito fácil criar uma "Collection" para "Cães" e adicionar todos os campos customizados necessários (nome, pedigree, fotos, etc.) através de uma interface visual intuitiva.46  
* **Marketing e Formulários:** A integração com GTM é simples e direta nos planos pagos.50 Os formulários nativos suportam campos ocultos. No entanto, tal como o Elementor, eles não possuem uma funcionalidade nativa de redirecionamento condicional. A solução aceite pela comunidade e documentada envolve a implementação de código JavaScript customizado para intercetar a submissão do formulário e executar a lógica de redirecionamento.53 Para um não-desenvolvedor, isto representa uma barreira técnica significativamente maior do que instalar e configurar um plugin de WordPress.  
* **Limitações e Custo:** O Webflow impõe limites rígidos baseados no plano. O plano "CMS" ($23 USD/mês, cobrado anualmente) está limitado a 2.000 itens de CMS (ou seja, 2.000 perfis de cães/ninhadas no total) e 20 collections.56 O plano "Business" ($39 USD/mês) aumenta este limite para 10.000 itens.59 À medida que o seu canil cresce, será forçada a fazer upgrades dispendiosos. O custo anual é substancialmente mais elevado do que uma solução WordPress auto-hospedada, e está sujeito à flutuação do dólar.

#### **2.2.2. Framer: A Escolha dos Designers**

* **Conceito Central:** O Framer é o concorrente mais recente, destacando-se pela sua interface de design extremamente fluida, que se assemelha a ferramentas como o Figma, e pelas suas capacidades de animação de ponta.61  
* **Poder do CMS:** O Framer também possui um CMS integrado que é capaz e muito amigável, permitindo criar as suas coleções para cães e ninhadas de forma eficaz.63  
* **Marketing e Formulários:** A integração com GTM é suportada.67 No entanto, as suas capacidades de formulário nativas são as mais limitadas do grupo. Funcionalidades críticas para o seu projeto, como campos ocultos e lógica condicional (incluindo redirecionamentos), não são nativas e requerem a compra de um add-on de terceiros, o FramerForms.70 Isto enfraquece a proposta de valor "all-in-one" da plataforma.  
* **Limitações e Custo:** O Framer também opera num modelo de subscrição em dólares (Plano "Basic" a $15 USD/mês, "Pro" a $25 USD/mês, cobrado anualmente).61 Ele também impõe limites de itens de CMS (1.000 no Basic, 10.000 no Pro).61 A comunidade tem apontado que o seu modelo de preços, que cobra extra por funcionalidades como editores adicionais, pode tornar-se caro rapidamente.74

A análise destas plataformas revela o que se pode chamar de "a ilusão do tudo-em-um". Embora sejam comercializadas como soluções integradas e sem complicações, o seu requisito específico e crítico — o redirecionamento condicional de formulários — demonstra que esta promessa tem limites. O Webflow exige competências de programação, e o Framer exige a compra de uma ferramenta de terceiros. Isto mostra que, mesmo em ecossistemas fechados, as necessidades complexas muitas vezes exigem que se "aparafuse" uma solução. A diferença crucial reside no mercado de extensões. O WordPress tem um mercado vasto e competitivo com milhares de plugins, o que impulsiona a inovação e mantém os preços baixos. No ecossistema mais pequeno do Framer, pode haver apenas uma ou duas soluções para um problema, dando-lhes um poder de precificação considerável. Além disso, o risco de aprisionamento é real: migrar um site complexo para fora do Webflow ou do Framer significa uma reconstrução completa a partir do zero.

## **3\. A Matriz de Decisão: Uma Comparação Direta**

Para consolidar a análise, a tabela seguinte compara as quatro pilhas tecnológicas nos critérios mais importantes para o projeto "Blue Agate". Os custos anuais são estimativas para 2025, baseadas nos planos necessários para cumprir os requisitos do projeto e convertidos para BRL (considerando uma taxa de câmbio de 1 USD \= 5.2 BRL).

| Plataforma/Stack | Facilidade de Uso (para não-dev) | Custo Anual Estimado (BRL) | Capacidade de Marketing (GTM, etc.) | Poder do CMS Customizado | Principal Vantagem | Principal Desvantagem |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **WordPress \+ Elementor Pro** | **Alta.** Interface de arrastar e soltar muito intuitiva. A complexidade está na gestão de múltiplos componentes. | **\~ R$ 750\.** (Hostinger Business \~R$240 \+ Elementor Pro \~99/R515). Baixo custo de entrada e renovação. | **Excelente.** Integração total e nativa com GTM via Custom Code do Elementor Pro. Formulários com campos ocultos nativos. Redirect condicional via plugin acessível. | **Ilimitado.** A combinação CPT UI \+ ACF oferece controlo total sobre a estrutura de dados, sem limites de itens. | Soberania total, flexibilidade máxima e um ecossistema gigante que resolve qualquer problema. | Performance pode exigir otimização. A manutenção (atualizações) é da responsabilidade do utilizador. |
| **WordPress \+ Bricks Builder** | **Baixa.** Curva de aprendizado íngreme. Requer um entendimento básico de conceitos de CSS como Flexbox e Grid para ser eficaz. | **\~ R$ 650\.** (Hostinger Business \~R$240 \+ Bricks Starter \~79/R410). Opção de LTD por \~599/R3115. | **Excelente.** Integração total com GTM. O construtor de formulários é poderoso. Requer a mesma abordagem de plugins para lógicas complexas. | **Ilimitado.** Usa a mesma base CPT UI \+ ACF. O construtor de query loops nativo é superior ao do Elementor. | Performance de topo e código limpo. Excelente valor a longo prazo com a licença vitalícia (LTD). | Curva de aprendizado muito difícil para não-desenvolvedores. Menos intuitivo para tarefas de design do dia-a-dia. |
| **Webflow** | **Média.** A interface é visual, mas mais complexa que a do Elementor. Requer a compreensão do "box model" da web. | **\~ R$ 1.435.** (Plano CMS a $23/mês). Custo significativamente mais alto e recorrente em USD. | **Boa.** Integração com GTM nativa. Formulários com campos ocultos. Redirect condicional exige código JavaScript customizado, uma grande barreira. | **Excelente, mas limitado.** O CMS "Collections" é poderoso e nativo, mas limitado a 2.000 itens no plano CMS. | Plataforma unificada com excelente performance e controlo de design. Sem preocupações com manutenção de plugins/hospedagem. | Custo elevado, aprisionamento tecnológico (lock-in) e necessidade de código para funcionalidades de formulário avançadas. |
| **Framer** | **Alta.** Interface muito fluida e semelhante a ferramentas de design (Figma), tornando-a muito apelativa para designers. | **\~ R$ 1.250.** (Plano Basic a $15/mês \+ FramerForms \~59/R310 uma vez). Custo elevado em USD. | **Média.** Integração com GTM nativa. Funcionalidades críticas de formulário (campos ocultos, redirect condicional) dependem de um add-on pago de terceiros. | **Bom, mas limitado.** O CMS nativo é fácil de usar, mas limitado a 1.000 itens no plano Basic. Menos tipos de campos que o Webflow ou ACF. | A melhor experiência de design e animação do mercado. Extremamente rápido para ir do design ao site publicado. | Ecossistema de terceiros menos maduro, dependência de add-ons para funcionalidades chave e aprisionamento tecnológico. |

## **4\. Recomendação Final e Roteiro Estratégico**

A análise detalhada e a comparação direta das opções levam a uma conclusão clara sobre o caminho mais estratégico para o canil "Blue Agate".

### **4.1. Síntese da Análise: A Tensão Central**

A decisão fundamental resume-se a um conflito entre duas filosofias: de um lado, o **ecossistema WordPress, que é comprovado, modular, soberano e economicamente vantajoso a longo prazo**; do outro, as **plataformas SaaS (Webflow, Framer), que são elegantes, integradas, mas, em última análise, mais restritivas, mais caras e que geram dependência**.

Para o seu perfil de "DIY-friendly", existe um paradoxo. As plataformas que parecem mais fáceis à primeira vista podem não ser as mais fáceis para completar o *seu conjunto específico de tarefas avançadas*. O fator decisivo é a forma como cada plataforma lida com a complexidade quando se atinge o limite das suas capacidades nativas. O WordPress, com o seu vasto ecossistema de plugins, oferece uma solução acessível e sem código para o seu desafio mais complexo (o redirecionamento condicional), enquanto as alternativas exigem programação ou a dependência de um ecossistema de add-ons muito menor e potencialmente mais caro.

### **4.2. O Veredicto Final: O Caminho Recomendado**

Com base em todos os fatores analisados, a recomendação é inequívoca.

* **Recomendação Principal: WordPress \+ Elementor Pro**  
  * **Justificativa:** Esta pilha é a que oferece o equilíbrio ideal para a sua situação específica. Ela cumpre 100% dos seus requisitos técnicos e de marketing. A única lacuna de funcionalidade nativa (redirecionamento condicional) é resolvida de forma fácil e económica com um plugin bem suportado, uma tarefa perfeitamente ao alcance de um utilizador tecnicamente curioso. Esta via oferece a melhor combinação de controlo, flexibilidade, suporte da comunidade e custo-benefício a longo prazo. Mais importante ainda, mitiga completamente o risco de aprisionamento tecnológico e de custos de escala imprevisíveis, alinhando-se com o objetivo de construir um ativo de negócio digital soberano e duradouro.  
* **Alternativa / Caminho de Upgrade Futuro: WordPress \+ Bricks Builder**  
  * **Justificativa:** O Bricks Builder não deve ser visto como uma alternativa imediata, mas sim como um caminho de upgrade futuro. Uma vez que o seu negócio esteja estabelecido e se sinta mais confortável com o ambiente WordPress, a migração do front-end do Elementor para o Bricks (mantendo intacta a sua base de dados ACF) é uma estratégia viável e inteligente para aumentar drasticamente a performance do site. A existência da licença vitalícia torna-o um investimento financeiramente sólido a longo prazo. Esta abordagem reconhece a sua curiosidade técnica, ao mesmo tempo que prioriza as necessidades imediatas do seu negócio.  
* **Por que não o Webflow ou o Framer?**  
  * **Justificativa:** Apesar das suas excelentes interfaces de design, a sua dependência de código customizado (Webflow) ou de ecossistemas de terceiros menos maduros (Framer) para os seus requisitos críticos de formulário torna-os uma escolha mais arriscada e menos autónoma. Fundamentalmente, os seus modelos de preços baseados no uso e a sua natureza de código fechado estão estrategicamente desalinhados com o seu objetivo de construir um ativo de negócio escalável e independente. Eles arriscam-se a recriar a mesma dependência de plataforma da qual está a tentar escapar, mas com um custo muito mais elevado.

### **4.3. O Seu Roteiro de Ação**

Para transformar esta decisão em realidade, seguem-se os próximos passos práticos:

1. **Adquirir a Hospedagem:** Contrate o plano "WordPress Business" da Hostinger por um período de 12 ou 24 meses para maximizar a poupança inicial.  
2. **Registar o Domínio:** Aproveite o domínio gratuito oferecido pela Hostinger durante o processo de checkout.  
3. **Instalar o WordPress:** Utilize o instalador automático de 1 clique fornecido no painel da Hostinger.  
4. **Adquirir o Software:** Compre uma licença do Elementor Pro. O plano "Advanced" (para 3 sites) é uma boa opção, pois permite ter um site de produção e um site de testes (staging).  
5. **Instalar os Plugins Essenciais:** A partir do painel do WordPress, instale e ative os seguintes componentes:  
   * Tema: Hello Theme  
   * Plugins: Elementor (versão gratuita), Elementor Pro (versão paga), CPT UI (gratuito), Advanced Custom Fields (gratuito), e o plugin escolhido para a lógica condicional de formulários (ex: "Conditional Fields for Elementor Form" ou "Dynamic Content for Elementor").  
6. **Começar a Construção:** O primeiro passo lógico é estruturar os seus dados. Use o CPT UI para criar os tipos de post "Cães" e "Ninhadas". De seguida, use o ACF para criar todos os campos personalizados para cada um. Só depois comece a desenhar as páginas e os modelos com o Elementor, ligando o design aos dados dinâmicos que criou.

#### **Referências citadas**

1. Como Comprar Hospedagem Hostinger Em 2025? \- YouTube, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=JmNf5JN728I](https://www.youtube.com/watch?v=JmNf5JN728I)  
2. Hospedagem gerenciada para WordPress \+ domínio grátis | Só R$ 10,99/mês \- Hostinger, acessado em junho 29, 2025, [https://www.hostinger.com/br/hospedagem-wordpress](https://www.hostinger.com/br/hospedagem-wordpress)  
3. Quanto Custa Renovar Com a Hostinger em 2025 (Valores Atualizados) \- YouTube, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=BK7ZjoD8\_Bs](https://www.youtube.com/watch?v=BK7ZjoD8_Bs)  
4. Bricks Builder vs. Elementor: Top WordPress Page Builders Comparison \- Crocoblock, acessado em junho 29, 2025, [https://crocoblock.com/blog/bricks-builder-vs-elementor/](https://crocoblock.com/blog/bricks-builder-vs-elementor/)  
5. Elementor vs. Bricks Builder \- the ultimate comparison | Michael Baierl \- WordPress Programmierer, acessado em junho 29, 2025, [https://mbaierl.com/en/bricks-vs-elementor/](https://mbaierl.com/en/bricks-vs-elementor/)  
6. Bricks vs. Elementor Pro – Which One is the Better Page Builder? \- WPLift.com, acessado em junho 29, 2025, [https://wplift.com/bricks-vs-elementor-pro/](https://wplift.com/bricks-vs-elementor-pro/)  
7. Preços de Elementor 2025 \- G2, acessado em junho 29, 2025, [https://www.g2.com/pt/products/elementor/pricing](https://www.g2.com/pt/products/elementor/pricing)  
8. Elementor Plugin Pricing: Find The Right Plan For You, acessado em junho 29, 2025, [https://elementor.com/pricing-plugin/](https://elementor.com/pricing-plugin/)  
9. \[PT-BR\] Criar Páginas Personalizadas com: ACF \+ CPT UI \+ ELEMENTOR usando WORDPRESS \- YouTube, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=REP-6h6JuCw](https://www.youtube.com/watch?v=REP-6h6JuCw)  
10. Custom Post Types and Theme Builders \- Part 1 CPT UI and ACF \- WebTNG, acessado em junho 29, 2025, [https://www.webtng.com/custom-post-types-and-theme-builders-part-1-cpt-ui-and-acf/](https://www.webtng.com/custom-post-types-and-theme-builders-part-1-cpt-ui-and-acf/)  
11. Create a Custom Post Type and Custom Fields using CPT UI and ACF \- YouTube, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=2RW7wlIWnKQ](https://www.youtube.com/watch?v=2RW7wlIWnKQ)  
12. Why not incorporate CPT/IU into ACF? \- ACF Support \- Advanced Custom Fields, acessado em junho 29, 2025, [https://support.advancedcustomfields.com/forums/topic/why-not-incorporate-cpt-iu-into-acf/](https://support.advancedcustomfields.com/forums/topic/why-not-incorporate-cpt-iu-into-acf/)  
13. Creating a Custom Post Type with ACF, acessado em junho 29, 2025, [https://www.advancedcustomfields.com/resources/creating-a-custom-post-type-with-acf/](https://www.advancedcustomfields.com/resources/creating-a-custom-post-type-with-acf/)  
14. Mastering Custom Post Types with ACF: The Ultimate Guide \- WPLake, acessado em junho 29, 2025, [https://wplake.org/blog/custom-post-types/](https://wplake.org/blog/custom-post-types/)  
15. How To Create Custom Post Types in WordPress Using CPT UI & ACF Plugins \- YouTube, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=5T0bHiG168k](https://www.youtube.com/watch?v=5T0bHiG168k)  
16. Add Google Tag Manager to Elementor in 2024 \[Easy Method\] \- YouTube, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=fJi\_Mxs1E5I](https://www.youtube.com/watch?v=fJi_Mxs1E5I)  
17. How to Add Google Analytics and Google Tag Manager to Elementor, acessado em junho 29, 2025, [https://elementor.com/help/add-google-analytics-and-gtm/](https://elementor.com/help/add-google-analytics-and-gtm/)  
18. How To Set Up Google Tag Manager With Elementor For Enhanced Site Tracking, acessado em junho 29, 2025, [https://www.wpelemento.com/blogs/all/google-tag-manager-with-elementor](https://www.wpelemento.com/blogs/all/google-tag-manager-with-elementor)  
19. Track Elementor Form with Google Tag Manager and Google Analytics 4, acessado em junho 29, 2025, [https://www.analyticsmania.com/post/track-elementor-form-with-google-tag-manager-and-google-analytics/](https://www.analyticsmania.com/post/track-elementor-form-with-google-tag-manager-and-google-analytics/)  
20. Complete Guide to Elementor Form Tracking With Google Tag Manager \- Leo Measure, acessado em junho 29, 2025, [https://leomeasure.com/complete-guide-to-elementor-form-tracking-with-google-tag-manager/](https://leomeasure.com/complete-guide-to-elementor-form-tracking-with-google-tag-manager/)  
21. Elementor Form Submissions \- Tracking Using GTM\! \- YouTube, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=lgif3NMLHdU](https://www.youtube.com/watch?v=lgif3NMLHdU)  
22. Add Hidden Fields to Elementor Forms \- Attributer, acessado em junho 29, 2025, [https://help.attributer.io/articles/add-hidden-fields-to-elementor-forms/](https://help.attributer.io/articles/add-hidden-fields-to-elementor-forms/)  
23. WordPress Form Builder: Contact Form Plugin by Elementor Pro, acessado em junho 29, 2025, [https://elementor.com/features/form-builder/](https://elementor.com/features/form-builder/)  
24. Redirect visitors after they submit a form \- Elementor, acessado em junho 29, 2025, [https://elementor.com/help/redirect-visitors-after-they-submit-a-form/](https://elementor.com/help/redirect-visitors-after-they-submit-a-form/)  
25. Conditional Fields for Elementor Form – Display Conditions \- WordPress.org, acessado em junho 29, 2025, [https://wordpress.org/plugins/conditional-fields-for-elementor-form/](https://wordpress.org/plugins/conditional-fields-for-elementor-form/)  
26. Dynamic Redirect for Elementor Pro Form, acessado em junho 29, 2025, [https://www.dynamic.ooo/dynamic-content-for-elementor/features/dynamic-redirect-for-elementor-pro-form/](https://www.dynamic.ooo/dynamic-content-for-elementor/features/dynamic-redirect-for-elementor-pro-form/)  
27. Bricks Builder vs Elementor: Which is Best for Your Website? \- Cloudways, acessado em junho 29, 2025, [https://www.cloudways.com/blog/bricks-builder-vs-elementor/](https://www.cloudways.com/blog/bricks-builder-vs-elementor/)  
28. Framer vs Elementor? : r/webdesign \- Reddit, acessado em junho 29, 2025, [https://www.reddit.com/r/webdesign/comments/1jmio6p/framer\_vs\_elementor/](https://www.reddit.com/r/webdesign/comments/1jmio6p/framer_vs_elementor/)  
29. Bricks vs Elementor: Which WordPress Page Builder Should You Choose? | OOPSpam Blog, acessado em junho 29, 2025, [https://www.oopspam.com/blog/bricks-vs-elementor-which-wordpress-page-builder-should-you-choose](https://www.oopspam.com/blog/bricks-vs-elementor-which-wordpress-page-builder-should-you-choose)  
30. Bricks Builder Review WordPress 2025 (The BIG Problem…) \- WagePirate, acessado em junho 29, 2025, [https://wagepirate.com/review/bricks-builder/](https://wagepirate.com/review/bricks-builder/)  
31. Is Elementor Pro still bloated trash? : r/Wordpress \- Reddit, acessado em junho 29, 2025, [https://www.reddit.com/r/Wordpress/comments/1ijrdpb/is\_elementor\_pro\_still\_bloated\_trash/](https://www.reddit.com/r/Wordpress/comments/1ijrdpb/is_elementor_pro_still_bloated_trash/)  
32. Getting Started with Bricks Builder: An In-Depth Guide. \- DigiSavvy, acessado em junho 29, 2025, [https://digisavvy.com/2024/01/15/getting-started-with-bricks-builder-an-in-depth-guide/](https://digisavvy.com/2024/01/15/getting-started-with-bricks-builder-an-in-depth-guide/)  
33. I don't get it. What problem does Bricks solve? : r/Wordpress \- Reddit, acessado em junho 29, 2025, [https://www.reddit.com/r/Wordpress/comments/16euz1y/i\_dont\_get\_it\_what\_problem\_does\_bricks\_solve/](https://www.reddit.com/r/Wordpress/comments/16euz1y/i_dont_get_it_what_problem_does_bricks_solve/)  
34. A Simple Beginners Guide To Flexbox And CSS Grid \[Article\] \- Van Marciano Pro, acessado em junho 29, 2025, [https://vanmarciano.pro/beginners-guide-to-flexbox-and-css-grid/](https://vanmarciano.pro/beginners-guide-to-flexbox-and-css-grid/)  
35. CSS Grid Layout \- Bricks Academy, acessado em junho 29, 2025, [https://academy.bricksbuilder.io/article/css-grid-layout/](https://academy.bricksbuilder.io/article/css-grid-layout/)  
36. How to insert a column element? \- How To \- Bricks Community Forum, acessado em junho 29, 2025, [https://forum.bricksbuilder.io/t/how-to-insert-a-column-element/16553](https://forum.bricksbuilder.io/t/how-to-insert-a-column-element/16553)  
37. 10 Best Workflow Automation Software Tools for 2025 \- Monday.com, acessado em junho 29, 2025, [https://monday.com/blog/project-management/workflow-automation-software/](https://monday.com/blog/project-management/workflow-automation-software/)  
38. 99% of Beginners DON'T KNOW the Basics of Bricks Builder \- YouTube, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=8xZJMph9yBA](https://www.youtube.com/watch?v=8xZJMph9yBA)  
39. Simple, transparent pricing \- Bricks Builder, acessado em junho 29, 2025, [https://bricksbuilder.io/pricing/](https://bricksbuilder.io/pricing/)  
40. Bricks Builder announces new plans and pricing \- WP BizDev, acessado em junho 29, 2025, [https://wpbiz.dev/news/bricks-builder-announces-new-plans-and-pricing/](https://wpbiz.dev/news/bricks-builder-announces-new-plans-and-pricing/)  
41. The Road to Bricks 2.0, acessado em junho 29, 2025, [https://bricksbuilder.io/the-road-to-bricks-2-0/](https://bricksbuilder.io/the-road-to-bricks-2-0/)  
42. CSS Grid | Bricks Tutorials, acessado em junho 29, 2025, [https://brickslabs.com/tag/css-grid/](https://brickslabs.com/tag/css-grid/)  
43. Easy Bento Grids With Advanced Themer \- Learn Bricks Builder, acessado em junho 29, 2025, [https://learnbricksbuilder.com/easy-bento-grids-with-advanced-themer/](https://learnbricksbuilder.com/easy-bento-grids-with-advanced-themer/)  
44. Webflow vs. Bricks Builder (WordPress): Deep Dive Review & Feature Showdown, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=egSiRoFlUDo](https://www.youtube.com/watch?v=egSiRoFlUDo)  
45. Currently learning Bricks for WordPress. It feels so clunky compared to Webflow. \- Reddit, acessado em junho 29, 2025, [https://www.reddit.com/r/webflow/comments/190nv2s/currently\_learning\_bricks\_for\_wordpress\_it\_feels/](https://www.reddit.com/r/webflow/comments/190nv2s/currently_learning_bricks_for_wordpress_it_feels/)  
46. Collections overview – Webflow Help Center, acessado em junho 29, 2025, [https://help.webflow.com/hc/en-us/articles/33961244391059-Collections-overview](https://help.webflow.com/hc/en-us/articles/33961244391059-Collections-overview)  
47. Build, manage and publish CMS Collection content — Webflow tutorial \- YouTube, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=m9B9twDQPC4](https://www.youtube.com/watch?v=m9B9twDQPC4)  
48. Intro to the Webflow CMS, acessado em junho 29, 2025, [https://help.webflow.com/hc/en-us/articles/33961307099027-Intro-to-the-Webflow-CMS](https://help.webflow.com/hc/en-us/articles/33961307099027-Intro-to-the-Webflow-CMS)  
49. Design & manage CMS content in Webflow \- Webflow University Courses, acessado em junho 29, 2025, [https://university.webflow.com/courses/cms-and-dynamic-content](https://university.webflow.com/courses/cms-and-dynamic-content)  
50. Install Google Tag Manager and Google Analytics 4 on WebFlow, acessado em junho 29, 2025, [https://www.analyticsmania.com/post/install-google-tag-manager-and-google-analytics-4-on-webflow/](https://www.analyticsmania.com/post/install-google-tag-manager-and-google-analytics-4-on-webflow/)  
51. Webflow: GTM Implementation Guide \- Usercentrics Support \- EN, acessado em junho 29, 2025, [https://support.usercentrics.com/hc/en-us/articles/10779768961692-Webflow-GTM-Implementation-Guide](https://support.usercentrics.com/hc/en-us/articles/10779768961692-Webflow-GTM-Implementation-Guide)  
52. Webflow: Set up your Google tag \- Tag Manager Help, acessado em junho 29, 2025, [https://support.google.com/tagmanager/answer/13739349?hl=en](https://support.google.com/tagmanager/answer/13739349?hl=en)  
53. How to redirect to different URLs based on select input choices in Webflow forms, acessado em junho 29, 2025, [https://brixtemplates.com/blog/how-to-redirect-to-different-urls-based-on-select-input-choices-in-webflow-forms](https://brixtemplates.com/blog/how-to-redirect-to-different-urls-based-on-select-input-choices-in-webflow-forms)  
54. Solved: Dynamically override Webflow's default form redirect URL \- Custom code \- Forum, acessado em junho 29, 2025, [https://discourse.webflow.com/t/solved-dynamically-override-webflow-s-default-form-redirect-url/323447](https://discourse.webflow.com/t/solved-dynamically-override-webflow-s-default-form-redirect-url/323447)  
55. How can we redirect users based on their input in the signup form using Webflow?, acessado em junho 29, 2025, [https://www.flowradar.com/answer/how-can-we-redirect-users-based-on-their-input-in-the-signup-form-using-webflow](https://www.flowradar.com/answer/how-can-we-redirect-users-based-on-their-input-in-the-signup-form-using-webflow)  
56. Webflow Pricing Explained 2025 \- Flowzai, acessado em junho 29, 2025, [https://www.flowzai.com/blog-post/webflow-pricing-explained](https://www.flowzai.com/blog-post/webflow-pricing-explained)  
57. Webflow Pricing and Development Cost 2025 \- APPWRK, acessado em junho 29, 2025, [https://appwrk.com/webflow-website-cost](https://appwrk.com/webflow-website-cost)  
58. Akussa Website Page Template for Webflow, acessado em junho 29, 2025, [https://webflow.com/templates/html/akussa-website-template](https://webflow.com/templates/html/akussa-website-template)  
59. Plans & pricing | Webflow, acessado em junho 29, 2025, [https://webflow.com/pricing](https://webflow.com/pricing)  
60. Does CMS have a limit \- Forum | Webflow, acessado em junho 29, 2025, [https://discourse.webflow.com/t/does-cms-have-a-limit/88110](https://discourse.webflow.com/t/does-cms-have-a-limit/88110)  
61. Framer 2025 Pricing Explained \- One Page Love, acessado em junho 29, 2025, [https://onepagelove.com/framer-pricing](https://onepagelove.com/framer-pricing)  
62. I Tried Webflow and Framer: One Made Me 10x Faster (Transformation) \- YouTube, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=PmOxczcbNY4](https://www.youtube.com/watch?v=PmOxczcbNY4)  
63. CMS Overview: Master UX & Web Design with free Framer Academy lessons, acessado em junho 29, 2025, [https://www.framer.com/academy/lessons/cms](https://www.framer.com/academy/lessons/cms)  
64. CMS: Framer Academy | Master UX & Web Design, acessado em junho 29, 2025, [https://www.framer.com/academy/topics/cms](https://www.framer.com/academy/topics/cms)  
65. Understanding CMS Collections, Items & Fields in Framer (CMS Lesson 2\) \- YouTube, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=1PJkjBd8IsY](https://www.youtube.com/watch?v=1PJkjBd8IsY)  
66. Framer CMS: Explained, acessado em junho 29, 2025, [https://framer.university/lessons/framer-cms-explained](https://framer.university/lessons/framer-cms-explained)  
67. How to add Google Tag Manager to your site — Framer Help, acessado em junho 29, 2025, [https://www.framer.com/help/articles/how-to-add-google-tag-manager-to-your-site/](https://www.framer.com/help/articles/how-to-add-google-tag-manager-to-your-site/)  
68. Setting up Google Analytics — Framer Help, acessado em junho 29, 2025, [https://www.framer.com/help/articles/how-to-set-up-google-analytics/](https://www.framer.com/help/articles/how-to-set-up-google-analytics/)  
69. Help Center — Integrations \- Framer, acessado em junho 29, 2025, [https://www.framer.com/help/integrations/](https://www.framer.com/help/integrations/)  
70. Add Hidden Fields \- FramerForms Academy, acessado em junho 29, 2025, [https://framerforms.com/academy/smarter-inputs-collect-better-data](https://framerforms.com/academy/smarter-inputs-collect-better-data)  
71. Logic for Framer Forms, acessado em junho 29, 2025, [https://framerforms.com/archive/conditional-logic](https://framerforms.com/archive/conditional-logic)  
72. FramerForms Question \- Framer Community, acessado em junho 29, 2025, [https://www.framer.community/c/support/framerforms-question](https://www.framer.community/c/support/framerforms-question)  
73. Build Smart Forms in Framer – Conditional Logic Tutorial with FramerForms \- YouTube, acessado em junho 29, 2025, [https://www.youtube.com/watch?v=-TDVlcXl6Dw](https://www.youtube.com/watch?v=-TDVlcXl6Dw)  
74. Is Framer's Pricing Worth It in 2025? | Pixco Articles, acessado em junho 29, 2025, [https://pixcodrops.com/articles/is-framer-s-pricing-worth-it-in-2025/](https://pixcodrops.com/articles/is-framer-s-pricing-worth-it-in-2025/)