

# **Manual de Operações do Site: Canil de Elite**

Preparado para: Empreendedora Solo  
Versão 1.0  
Bem-vinda ao seu manual de operações. Este documento foi criado para ser o seu guia de confiança, desde a construção até a manutenção contínua do seu site WordPress. Como Gerente de Projetos Digitais e Especialista em Segurança WordPress, meu objetivo é fornecer um caminho claro e prático, transformando o que pode parecer um desafio complexo em uma série de passos gerenciáveis.

Você está construindo um ativo digital valioso para o seu negócio. Trate-o com o mesmo cuidado e profissionalismo que você dedica ao seu canil. Seguindo este manual, você estará equipada para evitar as armadilhas comuns, lançar um site profissional e mantê-lo seguro e eficiente a longo prazo. Vamos começar.

## **I. Conhecimento Fundamental: A Sua Central de Comando WordPress**

Para gerenciar seu site com confiança, é essencial entender seus componentes básicos. Pense neles como as fundações de uma casa: compreender como funcionam torna qualquer tarefa de construção ou manutenção muito mais intuitiva.

### **1.1. Hospedagem e Domínio: O "Terreno" e o "Endereço" do Seu Site**

Todo site precisa de dois elementos fundamentais para existir na internet: uma hospedagem e um nome de domínio.

* **Hospedagem (Web Hosting):** Pense na hospedagem como o terreno que você aluga na internet. É um espaço em um computador potente (chamado servidor) que armazena todos os arquivos do seu site — textos, fotos, vídeos e códigos. Esse servidor fica ligado 24/7, garantindo que qualquer pessoa, em qualquer lugar do mundo, possa visitar seu site a qualquer momento.1 A qualidade da sua hospedagem impacta diretamente a velocidade, a segurança e a confiabilidade do seu site. Uma hospedagem de baixa qualidade pode resultar em um site lento ou que fica fora do ar com frequência, frustrando clientes em potencial e prejudicando sua reputação e seu ranking em mecanismos de busca como o Google.3  
* **Nome de Domínio:** Se a hospedagem é o terreno, o domínio é o endereço exclusivo desse terreno (por exemplo, www.seucanilelite.com.br). É o que as pessoas digitam no navegador para encontrar você.4 Sem um domínio, as pessoas teriam que memorizar uma sequência complexa de números (um endereço IP) para acessar seu site.5

Esses dois serviços são distintos, mas interligados. Você registra um nome de domínio e o "aponta" para a sua hospedagem. Ao escolher um provedor de hospedagem, especialmente para iniciantes, procure por aqueles que oferecem "instalação do WordPress com um clique", suporte 24/7 e um certificado SSL gratuito, pois isso simplifica enormemente o processo inicial.6

### **1.2. WordPress.org vs. WordPress.com: Por Que Você Fez a Escolha Certa**

É comum que iniciantes se confundam com a diferença entre WordPress.org e WordPress.com. A sua escolha pelo WordPress.org é a mais estratégica para um negócio sério.

* **WordPress.com:** É um serviço de hospedagem de sites. Pense nele como alugar um apartamento mobiliado. É fácil de começar, a empresa cuida da manutenção, mas existem muitas regras. Nos planos gratuitos ou mais baratos, você não pode instalar todos os "eletrodomésticos" (plugins) que deseja, pode ter anúncios da plataforma no seu site e as opções de personalização são limitadas.7  
* **WordPress.org:** É um software de código aberto que você instala na sua própria hospedagem. Pense nisso como ser dono da sua própria casa. Você tem total liberdade e controle. Pode pintar as paredes (personalizar o design), instalar qualquer eletrodoméstico (plugins de segurança, performance, e-commerce) e não há restrições sobre como você pode monetizar seu site.8

Para um canil de elite, projetar uma imagem de profissionalismo e confiança é crucial. A flexibilidade do WordPress.org permite que você construa um site que reflita exatamente a qualidade da sua marca, sem as limitações ou a publicidade de terceiros impostas pelos planos básicos do WordPress.com.7

### **1.3. Temas, Temas-Filho e Plugins: A "Arquitetura", as "Reformas" e os "Eletrodomésticos"**

Dentro do seu WordPress, você irá interagir constantemente com três conceitos: temas, temas-filho e plugins.

* **Tema (Theme):** O tema é a "planta arquitetônica" do seu site. Ele define a aparência geral, o layout, as cores e as fontes.10 Um bom tema é como uma boa planta baixa: bem estruturado, flexível e construído sobre uma base sólida.  
* **Plugin:** Plugins são como os "eletrodomésticos" que você instala em sua casa para adicionar funcionalidades específicas. Precisa de um formulário de contato? Instale um plugin de formulário. Quer melhorar a segurança? Instale um plugin de segurança. Quer vender produtos? Instale um plugin de e-commerce.12 Eles são a maneira de estender o que o WordPress pode fazer sem precisar escrever código.  
* **Tema-Filho (Child Theme):** Esta é uma prática recomendada para quem pretende fazer personalizações no código do tema. Um tema-filho é como colocar uma folha de papel vegetal transparente sobre a planta arquitetônica original para fazer suas anotações e desenhos.14 Quando o arquiteto lança uma atualização da planta original (o tema-pai é atualizado), seus desenhos na folha transparente permanecem intactos e são aplicados sobre a nova versão.15 Sem um tema-filho, qualquer atualização do tema-pai apagaria suas personalizações de código.

No entanto, como você está usando o Elementor, um construtor de páginas visual, para criar o design do seu cabeçalho, rodapé e todas as páginas, a necessidade imediata de um tema-filho diminui. O Elementor já funciona como uma camada de design separada do tema. Portanto, a regra prática para você é:

* **Você NÃO precisa de um tema-filho imediatamente se:** Suas personalizações de design forem feitas exclusivamente com o Elementor e você adicionar pequenos ajustes de CSS através do "Personalizador" do WordPress ou de um plugin específico para isso.  
* **Você PRECISA de um tema-filho se:** Você planeja adicionar código PHP personalizado ao arquivo functions.php do seu tema ou modificar diretamente os arquivos de modelo do tema (arquivos .php).

Comece sem um tema-filho para simplificar. Se no futuro você precisar de personalizações de código avançadas, poderá criar um facilmente usando um plugin como o **Child Theme Configurator**.17

### **1.4. SSL e HTTPS: O "Cadeado Digital" que Gera Confiança**

SSL (Secure Sockets Layer) é a tecnologia padrão para manter uma conexão de internet segura, criptografando os dados trocados entre o navegador do visitante e o seu site.19 É o que adiciona o "s" ao

http://, transformando-o em https://, e exibe um ícone de cadeado na barra de endereço do navegador.

Para um site de negócios, especialmente um que lida com informações de clientes (mesmo que seja apenas um formulário de contato), o HTTPS não é negociável. Ele protege os dados enviados, gera confiança no visitante e é um fator de ranqueamento confirmado pelo Google.19 A maioria dos provedores de hospedagem de qualidade oferece certificados SSL gratuitos que podem ser ativados com um clique. Certifique-se de que o seu esteja ativo.

## **II. O Plano do Projeto: Um Roteiro de 5 Fases para o Site do Seu Canil**

Construir um site pode parecer uma tarefa monumental. Para evitar que o projeto se arraste indefinidamente, vamos dividi-lo em cinco fases lógicas e gerenciáveis. Este plano é baseado em metodologias de gerenciamento de projetos 22, mas adaptado para a realidade de uma empreendedora solo. Seguir as fases na ordem proposta é a maneira mais eficiente de usar seu tempo limitado, garantindo que as fundações (estratégia e conteúdo) estejam sólidas antes de iniciar a construção visual.23 As estimativas de tempo são baseadas em benchmarks para um iniciante construindo um site de negócios/portfólio.23

**Tabela 1: Plano de Projeto Simplificado em 5 Fases**

| Fase | Descrição e Tarefas Principais | Estimativa de Tempo | Resultado Final |  |  |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Fase 1: Descoberta e Estratégia** | Definir o "porquê" e o "o quê". \- Objetivos: Qual é o principal objetivo do site? (Ex: Gerar contatos de interessados, exibir os cães campeões, anunciar ninhadas futuras). \- Público-Alvo: Para quem você está falando? (Ex: Juízes de exposição, outros criadores, famílias que buscam um filhote de alta qualidade). \- Mapa do Site: Quais páginas são essenciais? (Ex: Início, Sobre Nós, Nossos Cães, Ninhadas, Contato).26 |  \- Pesquisa: Analisar 3-5 sites de concorrentes ou de inspiração para identificar pontos fortes e fracos.27 | 4 \- 8 horas | Um **Plano de Conteúdo de uma página** (veja Apêndice A.1) que servirá como seu guia para todo o projeto. |  |
| **Fase 2: Conteúdo e Coleta de Ativos** | Reunir toda a matéria-prima. \- Textos: Escrever todo o conteúdo para cada página definida na Fase 1\. \- Mídia: Reunir as melhores fotos e vídeos em alta resolução dos seus cães, do canil e de ninhadas anteriores. A qualidade das imagens é crucial para um canil de elite. \- Identidade Visual: Definir o logo, as cores da marca e as fontes que serão usadas.23 | 8 \- 16 horas | Uma **pasta no seu computador** com todos os arquivos de texto e imagem finalizados, organizados por página, prontos para serem carregados no site. |  |  |
| **Fase 3: Configuração Técnica e Construção** | Colocar a mão na massa e construir. \- Setup: Contratar hospedagem e registrar o domínio. \- Instalação: Instalar o WordPress com um clique.29 |  \- Ferramentas: Instalar o tema (ex: Hello Elementor) e o plugin Elementor.30 |  \- Segurança Inicial: Executar as 5 ações de segurança imediatas (detalhadas na Parte IV). \- Construção: Usar o Elementor para criar cada página, inserindo os textos e imagens da Fase 2.31 | 20 \- 40 horas | Um **site funcional e totalmente construído**, ainda que não esteja público ou totalmente polido. |
| **Fase 4: Testes e Refinamento** | Garantir a qualidade e polir as arestas. \- Checklist: Seguir rigorosamente o "Checklist Pré-Lançamento" (detalhado na Parte III). \- Testes Manuais: Navegar por todo o site em diferentes dispositivos (computador, tablet, celular) e navegadores (Chrome, Safari, Firefox) para encontrar erros.32 |  \- Feedback Externo: Pedir a um amigo ou colega para usar o site e dar um feedback honesto sobre a clareza e facilidade de uso. | 5 \- 10 horas | Um **site polido, testado e 100% pronto** para ser apresentado ao público. |  |
| **Fase 5: Lançamento e Pós-Lançamento** | Abrir as portas e iniciar a rotina. \- Go-Live: Tornar o site público (remover senhas ou páginas de "em breve"). \- Indexação: Enviar o mapa do site para o Google Search Console para que ele seja encontrado nas buscas.34 |  \- Divulgação: Anunciar o novo site em suas redes sociais e e-mail. \- Manutenção: Iniciar o cronograma de manutenção regular (detalhado na Parte IV). | 2 \- 4 horas | Um **site ativo, público e operando** sob um protocolo de manutenção contínua. |  |

## **III. A Verificação Pré-Voo: Seu Checklist de Lançamento**

Antes de anunciar seu novo site ao mundo, é imperativo realizar uma verificação final completa. Este checklist é sua rede de segurança, projetado para capturar erros que podem passar despercebidos na correria do final do projeto. Deixar de fazer essa verificação é como um piloto de avião decolar sem checar os instrumentos — um risco desnecessário que pode comprometer a missão. A lista a seguir é uma compilação de melhores práticas da indústria de desenvolvimento web.32

Marque cada item apenas quando estiver 100% concluído.

#### **Conteúdo e Design**

* \[ \] **Revisão Ortográfica e Gramatical:** Todo o texto em todas as páginas e posts foi lido e corrigido.34  
* \[ \] **Remoção de Conteúdo Provisório:** Todo o texto de preenchimento ("Lorem ipsum") e imagens de exemplo foram substituídos pelo conteúdo final.33  
* \[ \] **Otimização de Imagens:** Todas as imagens foram comprimidas para um tamanho razoável (idealmente abaixo de 500 KB) para garantir um carregamento rápido. Ferramentas online como TinyPNG podem ajudar.33  
* \[ \] **Texto Alternativo (Alt Text) nas Imagens:** Todas as imagens importantes possuem um texto alternativo descritivo. Isso é crucial para acessibilidade e para o SEO.36  
* \[ \] **Favicon Instalado:** O ícone do seu site (favicon) aparece corretamente na aba do navegador.34  
* \[ \] **Consistência Visual:** As fontes, cores, espaçamentos e estilos de botões são consistentes em todo o site.32  
* \[ \] **Páginas Legais:** As páginas de "Política de Privacidade" e "Termos de Uso" existem e estão acessíveis, geralmente no rodapé do site.32

#### **Funcionalidade e Experiência do Usuário**

* \[ \] **Teste de Links:** Todos os links (internos, externos e de menu) foram clicados e funcionam, levando aos destinos corretos.33  
* \[ \] **Teste de Formulários:** O formulário de contato/interesse foi preenchido e testado. A mensagem foi recebida no seu e-mail e uma mensagem de confirmação foi exibida para o usuário.33  
* \[ \] **Responsividade Mobile-First:** O site foi testado em um celular e um tablet reais. A navegação é fácil, os textos são legíveis e os botões são fáceis de tocar. Lembre-se que o Google prioriza a versão móvel para ranqueamento.36  
* \[ \] **Compatibilidade entre Navegadores:** O site foi visualizado nas versões mais recentes do Google Chrome, Mozilla Firefox e Safari para garantir que a aparência seja consistente.33  
* \[ \] **Página 404 Personalizada:** Existe uma página de erro 404 amigável para guiar os usuários caso eles acessem um link quebrado.36

#### **SEO e Performance**

* \[ \] **Títulos e Descrições SEO:** Cada página possui um título (title tag) e uma meta descrição únicos e otimizados para os mecanismos de busca.32 Plugins de SEO como Yoast SEO ou Rank Math podem ajudar.  
* \[ \] **Estrutura de Permalinks:** A estrutura de links permanentes está definida como "Nome do post" em Configurações \> Links Permanentes para URLs limpas e amigáveis.35  
* \[ \] **Google Analytics Conectado:** Uma ferramenta de análise de tráfego (como o Google Analytics 4\) está instalada e funcionando para monitorar os visitantes.34  
* \[ \] **Mapa do Site (Sitemap) XML Enviado:** Um sitemap XML foi gerado e submetido ao Google Search Console. Isso ajuda o Google a descobrir e indexar todas as páginas do seu site de forma mais eficiente.32

#### **Segurança e Configurações Finais**

* \[ \] **Certificado SSL/HTTPS Ativo:** O cadeado de segurança está visível em todas as páginas do site.32  
* \[ \] **Solução de Backup Ativa:** O sistema de backup automático está configurado e um primeiro backup completo foi realizado com sucesso.32  
* \[ \] **Visibilidade para Mecanismos de Busca:** A opção "Evitar que mecanismos de busca indexem este site" em Configurações \> Leitura está **DESMARCADA**. Este é um erro crítico e comum; se esta caixa estiver marcada, seu site não aparecerá no Google.35

## **IV. Fortalecendo Seu Canil Digital: Protocolo de Segurança e Manutenção**

Um site não é um produto final, mas sim um ativo vivo que exige cuidados contínuos. Assim como seus cães precisam de cuidados veterinários preventivos, seu site precisa de uma rotina de manutenção para se manter saudável, rápido и seguro. Negligenciar a manutenção é a principal causa de sites hackeados, lentos e quebrados. Esta seção é o seu plano de saúde preventivo.

### **4.1. As 5 Primeiras Fortificações: Ações de Segurança Imediatas Pós-Instalação**

No momento em que o WordPress é instalado, ele possui algumas configurações padrão que são conhecidas por invasores. Alterá-las imediatamente é como trocar as fechaduras de uma casa nova. Estas são as cinco ações de segurança mais críticas que você deve tomar, baseadas nas recomendações do WordPress.org e de especialistas em segurança.41

1. **Alterar o Nome de Usuário "admin":** Nunca use "admin" como nome de usuário. É o primeiro alvo de ataques automatizados de força bruta. Durante a instalação do WordPress ou logo após, crie um novo usuário com perfil de "Administrador" e um nome único (ex: nome\_gestor). Em seguida, faça login com a nova conta e exclua o usuário "admin" original. O WordPress perguntará o que fazer com o conteúdo criado por ele; atribua-o ao seu novo usuário.42  
2. **Usar uma Senha Forte e Única:** Sua senha de administrador é a chave do seu reino digital. Ela deve ser longa (mínimo 16 caracteres), complexa e única (não reutilizada de outros serviços). Use uma combinação de letras maiúsculas, minúsculas, números e símbolos. Utilize um gerenciador de senhas para criar e armazenar senhas fortes com segurança.41  
3. **Atualizar a Estrutura de Links Permanentes (Permalinks):** Vá em Configurações \> Links Permanentes e selecione a opção **"Nome do post"**. Clique em "Salvar alterações". Além de ser a melhor estrutura para SEO, isso afasta seu site da estrutura padrão baseada em IDs, que pode, em raras ocasiões, ser um vetor de ataque.35  
4. **Desabilitar a Edição de Arquivos:** Adicione a seguinte linha de código ao seu arquivo wp-config.php: define( 'DISALLOW\_FILE\_EDIT', true );. Este arquivo fica na pasta raiz da sua instalação do WordPress e pode ser editado através do gerenciador de arquivos da sua hospedagem. Esta ação impede que qualquer pessoa (incluindo um invasor que tenha conseguido acesso ao seu painel) edite os arquivos de temas e plugins diretamente pelo painel do WordPress, bloqueando uma via de ataque muito comum.41  
5. **Excluir Temas e Plugins Inativos:** Por padrão, o WordPress vem com temas (ex: Twenty Twenty-Four) e o plugin "Hello Dolly". Vá para Aparência \> Temas, ative o seu tema escolhido (como o Hello Elementor) e exclua todos os outros. Em seguida, vá para Plugins \> Plugins instalados e exclua o "Hello Dolly". Cada tema ou plugin inativo é uma porta dos fundos em potencial, um pedaço de código que não é atualizado e pode conter vulnerabilidades.42

### **4.2. Seu Kit de Ferramentas Digital: O Stack de Plugins Essenciais**

Um erro comum de iniciantes é instalar dezenas de plugins para cada pequena funcionalidade desejada.48 No entanto, cada plugin adiciona complexidade, um potencial ponto de falha de segurança e pode deixar seu site mais lento.49 A filosofia correta não é sobre a quantidade, mas sobre a

**qualidade** dos plugins.51

Para um site de negócios, existem três áreas funcionais que devem ser cobertas por plugins de alta qualidade: Segurança, Backups e Performance. A seguir, recomendamos um "stack" (conjunto) de plugins gratuitos e altamente conceituados que formam uma base sólida e confiável.

**Tabela 2: Stack de Plugins Essenciais (Gratuitos)**

| Categoria | Plugin Recomendado | Por Que Esta Escolha? | Custo |  |
| :---- | :---- | :---- | :---- | :---- |
| **Segurança** | **Wordfence Security** | É o plugin de segurança mais popular do WordPress, com mais de 5 milhões de instalações ativas.53 A versão gratuita oferece um | **Firewall de Aplicação Web (WAF)** que bloqueia tráfego malicioso antes que ele atinja seu site, um **scanner de malware** que verifica a integridade dos arquivos do WordPress e proteção contra ataques de força bruta, como limitar tentativas de login. É o padrão da indústria para segurança básica.54 | Gratuito |
| **Backup** | **UpdraftPlus** | A regra de ouro dos backups é a redundância e o armazenamento externo (off-site).56 UpdraftPlus se destaca porque sua versão gratuita permite | **agendar backups automáticos** (diários, semanais, etc.) e enviá-los para serviços de nuvem como **Google Drive, Dropbox ou Amazon S3**.58 Se seu servidor for comprometido, um backup local pode ser inútil. Um backup externo é sua apólice de seguro definitiva. É um dos plugins de backup mais confiáveis e bem avaliados.59 | Gratuito |
| **Performance** | **WP Super Cache** | A velocidade do site é crucial para a experiência do usuário e para o SEO. Caching é o processo de criar cópias estáticas de suas páginas para que elas sejam entregues muito mais rapidamente aos visitantes.60 WP Super Cache é desenvolvido pela Automattic (a empresa por trás do WordPress.com), o que garante alta compatibilidade e confiabilidade. Seu modo "Simples" é extremamente fácil de configurar para iniciantes, aplicando otimizações eficazes com apenas um clique.62 | Gratuito |  |

### **4.3. O Check-up de Rotina: Seu Cronograma de Manutenção**

Manter um site é um processo contínuo. Este cronograma detalha as tarefas que você precisa realizar e a frequência, transformando a manutenção em um hábito gerenciável. Adotar esta rotina é a ação mais importante que você pode tomar para garantir a saúde e a segurança do seu site a longo prazo.63

**Tabela 3: Cronograma de Manutenção do Site**

| Frequência | Tarefa | Por Que é Importante? |
| :---- | :---- | :---- |
| **Semanal** | **1\. Fazer Backup Completo do Site** | Antes de qualquer atualização, faça um backup manual completo com o UpdraftPlus. Isso garante que você tenha um ponto de restauração seguro e imediato caso algo dê errado durante as atualizações.63 |
|  | **2\. Atualizar Plugins, Tema e Core do WordPress** | Esta é a tarefa de manutenção **mais crítica**. A grande maioria dos sites WordPress hackeados são vítimas de vulnerabilidades em softwares desatualizados.65 As atualizações contêm correções de segurança essenciais. Atualize nesta ordem: plugins, depois o tema, e por último o WordPress (se houver atualização do core).63 |
|  | **3\. Verificação Visual Pós-Atualização** | Após as atualizações, passe 5 minutos navegando nas principais páginas do seu site (Início, Contato, etc.) para confirmar que tudo está funcionando como esperado. Conflitos de atualização, embora raros com plugins de qualidade, podem acontecer.67 |
| **Mensal** | **1\. Executar um Scan de Malware Completo** | Use o Wordfence para fazer uma varredura completa do site. Isso ajuda a detectar proativamente qualquer arquivo malicioso ou alteração suspeita que possa ter passado despercebida.63 |
|  | **2\. Otimizar o Banco de Dados** | Com o tempo, o banco de dados acumula "lixo" digital (revisões de posts, comentários de spam, dados temporários). Isso pode deixar o site mais lento. Use um plugin como o **WP-Optimize** para limpar o banco de dados com segurança, melhorando a performance.69 |
|  | **3\. Verificar Links Quebrados** | Links que não funcionam criam uma má experiência para o usuário e podem prejudicar seu SEO. Use uma ferramenta online gratuita ou o plugin "Broken Link Checker" para encontrar e corrigir esses links.63 |
|  | **4\. Limpar Comentários de Spam** | Vá até a seção "Comentários" e esvazie a pasta de spam. Isso também ajuda a manter o banco de dados limpo e organizado.63 |
| **Trimestral** | **1\. Alterar a Senha de Administrador** | Mudar sua senha a cada 90 dias é uma excelente prática de segurança. Isso limita a janela de oportunidade para um invasor, caso suas credenciais tenham sido comprometidas sem o seu conhecimento.43 |
|  | **2\. Revisar Contas de Usuário** | Vá em Usuários \> Todos os usuários e verifique todas as contas com acesso ao seu site. Exclua quaisquer contas que não sejam mais necessárias ou que pertençam a ex-colaboradores. Aplique o "princípio do menor privilégio": conceda apenas as permissões estritamente necessárias para cada função.44 |
|  | **3\. Testar o Processo de Restauração de Backup** | Um backup só é útil se você sabe que ele funciona. A melhor maneira de testar é restaurar um backup em um "ambiente de teste" (staging site), um recurso que muitas hospedagens oferecem. Se não tiver, simplesmente baixe um arquivo de backup completo para o seu computador para garantir que o processo de geração está funcionando.42 |
|  | **4\. Revisão de Conteúdo e SEO** | Analise suas páginas mais populares no Google Analytics. Verifique se o conteúdo ainda está atualizado e relevante. É uma boa oportunidade para refrescar informações e otimizar títulos ou descrições para melhorar o ranqueamento. |

## **V. Solução de Problemas e Próximos Passos: Seu Sistema de Apoio**

Mesmo com o melhor planejamento, problemas podem ocorrer. Esta seção final serve como um guia de primeiros socorros para as situações mais comuns e aponta os melhores lugares para encontrar ajuda confiável, capacitando você a resolver problemas e continuar aprendendo.

### **5.1. "Socorro\! Uma Atualização Quebrou Meu Site\!" \- Um Guia Rápido de Solução**

O medo de que uma atualização quebre o site é o que leva muitas pessoas a negligenciarem a manutenção, o que é um erro perigoso. Saber como agir transforma o pânico em um procedimento calmo e controlado.

1. **Primeiro, Não Entre em Pânico:** Seu site não foi perdido. Na maioria das vezes, a solução é simples. O problema geralmente é um conflito de código entre um plugin e o WordPress, ou entre dois plugins.67  
2. **Habilite o Modo de Depuração (Se Necessário):** Se você vir uma "tela branca da morte", pode habilitar o modo de depuração do WordPress para ver a mensagem de erro exata. Usando o gerenciador de arquivos da sua hospedagem, edite o arquivo wp-config.php e altere a linha define( 'WP\_DEBUG', false ); para true. A mensagem de erro geralmente indicará o plugin ou tema que está causando o problema. Lembre-se de reverter para false quando terminar.71  
3. **Identifique o Culpado:**  
   * **Se você tem acesso ao painel:** Vá para Plugins \> Plugins instalados. Selecione todos os plugins e, no menu de "Ações em massa", escolha "Desativar". Se o site voltar ao normal, o problema é um dos plugins. Reative-os, um por um, atualizando a página do seu site a cada ativação, até que o erro reapareça. O último plugin que você ativou é o culpado.67  
   * **Se você NÃO tem acesso ao painel:** Use o gerenciador de arquivos da sua hospedagem (ou um cliente FTP). Navegue até a pasta wp-content. Renomeie a pasta plugins para plugins\_old. Isso desativará todos os plugins de uma vez. Verifique se o site voltou a funcionar. Se sim, renomeie a pasta de volta para plugins. Agora, entre na pasta plugins e renomeie a pasta de cada plugin, um por um, para identificar o causador do problema.71  
4. **Resolva o Problema:** Uma vez identificado o plugin problemático, você tem algumas opções:  
   * **Reverter (Roll Back):** Instale o plugin **WP Rollback**. Ele permite que você reverta o plugin problemático para uma versão anterior que era estável.73  
   * **Buscar Suporte:** Vá até a página do plugin no repositório do WordPress.org e clique na aba "Suporte". Descreva o problema. O desenvolvedor pode já estar ciente e trabalhando em uma correção.73  
   * **Substituir:** Se o plugin não for essencial ou se o desenvolvedor não oferecer suporte, procure uma alternativa de qualidade.

### **5.2. Onde Encontrar Ajuda Confiável: Seus Recursos de Aprendizagem**

A internet está cheia de informações sobre WordPress, mas nem todas são precisas ou atualizadas. É fundamental saber onde procurar ajuda para não seguir conselhos ruins. Estes são os recursos mais confiáveis:

* **Para Dúvidas Gerais sobre WordPress:**  
  * **Fóruns de Suporte do WordPress.org:** A comunidade oficial é o melhor lugar para fazer perguntas técnicas. Voluntários e desenvolvedores experientes estão lá para ajudar.74  
  * **WPBeginner:** É considerado o maior recurso gratuito para iniciantes em WordPress. Seus tutoriais são detalhados, passo a passo e sempre atualizados com as melhores práticas.29  
* **Para Dúvidas Específicas sobre Elementor:**  
  * **Elementor Academy:** Oferece cursos em vídeo e tutoriais que cobrem desde o básico até técnicas avançadas de design com a ferramenta.31  
  * **Comunidades Oficiais do Elementor:** O grupo no Facebook e o servidor no Discord são ótimos para obter ajuda de outros usuários e compartilhar experiências.80  
* **Para Notícias e Alertas de Segurança:**  
  * **Blog da Wordfence:** Publica relatórios semanais de vulnerabilidades e análises aprofundadas sobre ameaças de segurança.81  
  * **Blog da Sucuri:** Outra autoridade em segurança que oferece artigos técnicos sobre malware e tendências de ataques.84 Acompanhar esses blogs ajuda a entender a importância de manter seu site sempre atualizado.

---

## **Apêndice**

### **A.1. Planilha de Planejamento de Conteúdo do Site**

Para auxiliar na Fase 2 do seu projeto, utilize uma planilha simples para organizar o conteúdo de cada página. Crie uma tabela com as seguintes colunas: **Nome da Página** (ex: Página Inicial), **Objetivo da Página** (ex: Apresentar o canil e direcionar para as principais seções), **Público-Alvo** (ex: Visitantes de primeira viagem), **Mensagem Principal** (ex: "Criamos campeões com amor e excelência"), **Chamada para Ação (CTA)** (ex: "Conheça nossos cães"), e **Mídia Necessária** (ex: Foto principal do cão campeão, 3 fotos de filhotes).27 Preencher esta planilha antes de começar a construir garante que você tenha uma visão clara para cada parte do seu site.

### **A.2. Registro de Manutenção do Site**

Para manter um histórico das atividades de manutenção, use uma planilha ou um caderno com as seguintes colunas: **Data**, **Tarefa Realizada** (ex: "Atualizados 5 plugins; Scan Wordfence"), **Concluído Por** (seu nome), e **Observações** (ex: "Tudo OK; Plugin X apresentou conflito, revertido para a versão anterior").87 Este registro é extremamente útil para diagnosticar problemas futuros, pois fornece um histórico claro das alterações feitas no site.

### **A.3. Glossário de Termos Essenciais**

* **Cache/Caching:** Processo de armazenar cópias de arquivos do seu site para que ele carregue mais rápido para os visitantes.60  
* **CDN (Content Delivery Network):** Uma rede de servidores espalhados pelo mundo que armazena cópias do seu site para entregá-lo mais rapidamente a visitantes de diferentes localizações geográficas.61  
* **Banco de Dados (Database):** Onde todo o conteúdo e configurações do seu site (posts, páginas, comentários, usuários) são armazenados de forma organizada.69  
* **Firewall (WAF \- Web Application Firewall):** Uma barreira de segurança que filtra o tráfego do seu site, bloqueando tentativas de ataque antes que elas o alcancem.89  
* **Permalink:** A URL permanente e única de uma página ou post no seu site (ex: seusite.com/contato).39  
* **SEO (Search Engine Optimization):** O conjunto de práticas para otimizar seu site para que ele tenha uma classificação melhor nos resultados de busca do Google.92  
* **Site de Teste (Staging Site):** Uma cópia privada do seu site usada para testar grandes alterações (como atualizações ou novos designs) com segurança, sem afetar o site que está no ar.94

#### **Referências citadas**

1. What is web hosting? Complete guide for beginners \- GoDaddy Blog, acessado em junho 29, 2025, [https://www.godaddy.com/resources/skills/what-is-web-hosting](https://www.godaddy.com/resources/skills/what-is-web-hosting)  
2. What is Web Hosting? A Beginner's Guide to How Websites Work \- Bluehost, acessado em junho 29, 2025, [https://www.bluehost.com/blog/what-is-web-hosting/](https://www.bluehost.com/blog/what-is-web-hosting/)  
3. Why is it important to choose reliable WordPress hosting for your website? \- Quora, acessado em junho 29, 2025, [https://www.quora.com/Why-is-it-important-to-choose-reliable-WordPress-hosting-for-your-website](https://www.quora.com/Why-is-it-important-to-choose-reliable-WordPress-hosting-for-your-website)  
4. Domain name basics \- Google Workspace Admin Help, acessado em junho 29, 2025, [https://support.google.com/a/answer/2573637?hl=en](https://support.google.com/a/answer/2573637?hl=en)  
5. What is a domain name? | Domain names vs. URLs \- Cloudflare, acessado em junho 29, 2025, [https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/)  
6. Best WordPress Hosting for Beginners in 2025 \- Bluehost, acessado em junho 29, 2025, [https://www.bluehost.com/blog/best-wordpress-hosting-for-beginners/](https://www.bluehost.com/blog/best-wordpress-hosting-for-beginners/)  
7. WordPress.com vs WordPress.org | WordPress 101 Tutorials \- SolidWP, acessado em junho 29, 2025, [https://solidwp.com/tutorials/wordpress-com-vs-wordpress-org/](https://solidwp.com/tutorials/wordpress-com-vs-wordpress-org/)  
8. WordPress.com vs WordPress.org – Which is Better? (Pros and Cons) \- WPBeginner, acessado em junho 29, 2025, [https://www.wpbeginner.com/beginners-guide/self-hosted-wordpress-org-vs-free-wordpress-com-infograph/](https://www.wpbeginner.com/beginners-guide/self-hosted-wordpress-org-vs-free-wordpress-com-infograph/)  
9. WordPress.com vs WordPress.org (2025): Key Differences Explained \- LitExtension, acessado em junho 29, 2025, [https://litextension.com/blog/wordpress-com-vs-wordpress-org/](https://litextension.com/blog/wordpress-com-vs-wordpress-org/)  
10. What is a WordPress Theme \- WPBeginner, acessado em junho 29, 2025, [https://www.wpbeginner.com/glossary/theme/](https://www.wpbeginner.com/glossary/theme/)  
11. Could someone explain me themes please? : r/Wordpress \- Reddit, acessado em junho 29, 2025, [https://www.reddit.com/r/Wordpress/comments/1ddmvt3/could\_someone\_explain\_me\_themes\_please/](https://www.reddit.com/r/Wordpress/comments/1ddmvt3/could_someone_explain_me_themes_please/)  
12. What is a WordPress Plugin? A Beginner's Guide for 2025 \- Elegant Themes, acessado em junho 29, 2025, [https://www.elegantthemes.com/blog/wordpress/what-is-a-wordpress-plugin](https://www.elegantthemes.com/blog/wordpress/what-is-a-wordpress-plugin)  
13. What is a plugin? \- Learn WordPress, acessado em junho 29, 2025, [https://learn.wordpress.org/lesson/what-is-a-plugin/](https://learn.wordpress.org/lesson/what-is-a-plugin/)  
14. ELI5: What is a child theme? : r/Wordpress \- Reddit, acessado em junho 29, 2025, [https://www.reddit.com/r/Wordpress/comments/3tbkbp/eli5\_what\_is\_a\_child\_theme/](https://www.reddit.com/r/Wordpress/comments/3tbkbp/eli5_what_is_a_child_theme/)  
15. www.wpzoom.com, acessado em junho 29, 2025, [https://www.wpzoom.com/blog/what-is-child-theme/\#:\~:text=A%20child%20theme%20in%20WordPress%20is%20a%20theme%20that%20inherits,don't%20overwrite%20custom%20changes.](https://www.wpzoom.com/blog/what-is-child-theme/#:~:text=A%20child%20theme%20in%20WordPress%20is%20a%20theme%20that%20inherits,don't%20overwrite%20custom%20changes.)  
16. WordPress Child Theme: Everything You Need to Know \- OceanWP, acessado em junho 29, 2025, [https://oceanwp.org/blog/wordpress-child-theme/](https://oceanwp.org/blog/wordpress-child-theme/)  
17. The Fastest, Easiest Way to Create a WordPress Child Theme Without Using Any Code, acessado em junho 29, 2025, [https://m.youtube.com/watch?v=iRGn5Ypm1qw\&pp=ygUaI2NyZWF0ZWNoaWxkdGhlbWV3b3JkcHJlc3M%3D](https://m.youtube.com/watch?v=iRGn5Ypm1qw&pp=ygUaI2NyZWF0ZWNoaWxkdGhlbWV3b3JkcHJlc3M%3D)  
18. How to Create a WordPress Child Theme (Beginner's Guide), acessado em junho 29, 2025, [https://www.wpbeginner.com/wp-themes/how-to-create-a-wordpress-child-theme-video/](https://www.wpbeginner.com/wp-themes/how-to-create-a-wordpress-child-theme-video/)  
19. What is SSL, TLS and HTTPS? \- DigiCert, acessado em junho 29, 2025, [https://www.digicert.com/what-is-ssl-tls-and-https](https://www.digicert.com/what-is-ssl-tls-and-https)  
20. What is SSL (Secure Sockets Layer)? \- Cloudflare, acessado em junho 29, 2025, [https://www.cloudflare.com/learning/ssl/what-is-ssl/](https://www.cloudflare.com/learning/ssl/what-is-ssl/)  
21. WordPress Security Ultimate Guide – Step-by-Step \- Elementor, acessado em junho 29, 2025, [https://elementor.com/blog/wordpress-security-guide/](https://elementor.com/blog/wordpress-security-guide/)  
22. 5 Phases of Project Management Explained \- weDevs, acessado em junho 29, 2025, [https://wedevs.com/blog/472747/phases-of-project-management/](https://wedevs.com/blog/472747/phases-of-project-management/)  
23. How long does it take to create a wordpress website? \- Dev-Wp, acessado em junho 29, 2025, [https://dev-wp.co.uk/how-long-does-it-take-to-create-a-wordpress-website/](https://dev-wp.co.uk/how-long-does-it-take-to-create-a-wordpress-website/)  
24. What is a realistic timeline for completing a WordPress website? \- 3R SEO Dublin, acessado em junho 29, 2025, [https://www.3r.ie/realistic-timeline-for-completing-a-wordpress-website/](https://www.3r.ie/realistic-timeline-for-completing-a-wordpress-website/)  
25. How Long Does It Take to Build a Website: Average Build Time and Development Timeline, acessado em junho 29, 2025, [https://www.hostinger.com/tutorials/how-long-it-takes-to-create-website](https://www.hostinger.com/tutorials/how-long-it-takes-to-create-website)  
26. Write your business plan | U.S. Small Business Administration, acessado em junho 29, 2025, [https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan](https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan)  
27. How To Plan Your Website Content \+ FREE Worksheets \- January Made, acessado em junho 29, 2025, [https://www.januarymade.co.nz/journal/planning-your-website-content-freebies](https://www.januarymade.co.nz/journal/planning-your-website-content-freebies)  
28. Master Your DIY Journey: 9-Step Website Content Plan \- Leadpages, acessado em junho 29, 2025, [https://www.leadpages.com/blog/website-content-plan](https://www.leadpages.com/blog/website-content-plan)  
29. How to Make a WordPress Website in 2025 (Ultimate Guide) \- WPBeginner, acessado em junho 29, 2025, [https://www.wpbeginner.com/guides/](https://www.wpbeginner.com/guides/)  
30. How to Speed Up a Slow Elementor Website, acessado em junho 29, 2025, [https://elementor.com/help/speed-up-a-slow-site/](https://elementor.com/help/speed-up-a-slow-site/)  
31. Getting Started with Elementor | Elementor Academy, acessado em junho 29, 2025, [https://elementor.com/academy/getting-started-with-elementor/](https://elementor.com/academy/getting-started-with-elementor/)  
32. Top 17 Website Launch Checklist: The Essentials | BrowserStack, acessado em junho 29, 2025, [https://www.browserstack.com/guide/website-launch-checklist](https://www.browserstack.com/guide/website-launch-checklist)  
33. Website Launch Checklist: Things To Double-Check Before Going ..., acessado em junho 29, 2025, [https://www.elegantthemes.com/blog/business/website-launch-checklist](https://www.elegantthemes.com/blog/business/website-launch-checklist)  
34. Your complete website launch checklist \- GoDaddy Blog, acessado em junho 29, 2025, [https://www.godaddy.com/resources/skills/website-launch-checklist](https://www.godaddy.com/resources/skills/website-launch-checklist)  
35. WordPress Website Pre-Launch Checklist \- WPExplorer, acessado em junho 29, 2025, [https://www.wpexplorer.com/wordpress-launch-checklist/](https://www.wpexplorer.com/wordpress-launch-checklist/)  
36. The Essential WordPress Website Launch Checklist (28+ Tasks) \- WP Umbrella, acessado em junho 29, 2025, [https://wp-umbrella.com/blog/the-ultimate-wordpress-website-pre-launch-checklist-for-2022/](https://wp-umbrella.com/blog/the-ultimate-wordpress-website-pre-launch-checklist-for-2022/)  
37. Pre-Launch Checklist: The Essentials \- WooCommerce, acessado em junho 29, 2025, [https://woocommerce.com/fr/posts/pre-launch-checklist-the-essentials/](https://woocommerce.com/fr/posts/pre-launch-checklist-the-essentials/)  
38. Why Mobile-First Design is Essential for WordPress Themes, acessado em junho 29, 2025, [https://gloriathemes.com/why-mobile-first-design-is-essential-for-wordpress-themes/](https://gloriathemes.com/why-mobile-first-design-is-essential-for-wordpress-themes/)  
39. What are Permalinks in WordPress? \- GreenGeeks, acessado em junho 29, 2025, [https://www.greengeeks.com/glossary/permalinks/](https://www.greengeeks.com/glossary/permalinks/)  
40. www.woorank.com, acessado em junho 29, 2025, [https://www.woorank.com/en/edu/seo-guides/xml-sitemaps\#:\~:text=An%20XML%20(Extensible%20Markup%20Language,URL%20created%20in%20other%20languages.](https://www.woorank.com/en/edu/seo-guides/xml-sitemaps#:~:text=An%20XML%20\(Extensible%20Markup%20Language,URL%20created%20in%20other%20languages.)  
41. Hardening WordPress – Advanced Administration Handbook ..., acessado em junho 29, 2025, [https://codex.wordpress.org/Hardening\_WordPress](https://codex.wordpress.org/Hardening_WordPress)  
42. Top 16 WordPress Security Best Practices and Tips for 2025, acessado em junho 29, 2025, [https://wp-rocket.me/blog/wordpress-security-best-practices/](https://wp-rocket.me/blog/wordpress-security-best-practices/)  
43. Tips to Keep WordPress Secure, acessado em junho 29, 2025, [https://digwp.com/2017/08/tips-to-keep-wordpress-secure/](https://digwp.com/2017/08/tips-to-keep-wordpress-secure/)  
44. Securing WordPress guideline | Office of the CIO \- The University of British Columbia, acessado em junho 29, 2025, [https://cio.ubc.ca/information-security/policy-standards-and-resources/securing-wordpress](https://cio.ubc.ca/information-security/policy-standards-and-resources/securing-wordpress)  
45. ko:Hardening WordPress \- WordPress Codex, acessado em junho 29, 2025, [https://codex.wordpress.org/ko:Hardening\_WordPress](https://codex.wordpress.org/ko:Hardening_WordPress)  
46. 23 Most Common WordPress Mistakes (and How to Fix Them) \- OceanWP, acessado em junho 29, 2025, [https://oceanwp.org/blog/most-common-wordpress-mistakes-how-to-fix/](https://oceanwp.org/blog/most-common-wordpress-mistakes-how-to-fix/)  
47. The Dangers of Outdated WordPress Plugins & How to Find Them \- Pixel Jar, acessado em junho 29, 2025, [https://www.pixeljar.com/web-consulting/the-dangers-of-outdated-wordpress-plugins-how-to-find-them/](https://www.pixeljar.com/web-consulting/the-dangers-of-outdated-wordpress-plugins-how-to-find-them/)  
48. 13 Common WordPress Mistakes (+ How I Fixed Them) \- WPForms, acessado em junho 29, 2025, [https://wpforms.com/common-wordpress-mistakes-how-to-avoid-them/](https://wpforms.com/common-wordpress-mistakes-how-to-avoid-them/)  
49. Are You Using Too Many WordPress Plugins? \- Bluehost, acessado em junho 29, 2025, [https://www.bluehost.com/blog/are-you-using-too-many-wordpress-plugins/](https://www.bluehost.com/blog/are-you-using-too-many-wordpress-plugins/)  
50. How Many WordPress Plugins Are Too Many? \- Jetpack, acessado em junho 29, 2025, [https://jetpack.com/resources/how-many-wordpress-plugins-are-too-many/](https://jetpack.com/resources/how-many-wordpress-plugins-are-too-many/)  
51. The Risks of Overusing Wordpress Plugins: Can They Slow Your Site? \- ACS Creative, acessado em junho 29, 2025, [https://www.acscreative.com/insights/are-too-many-wordpress-plugins-dangerous-can-they-slow-my-website-down/](https://www.acscreative.com/insights/are-too-many-wordpress-plugins-dangerous-can-they-slow-my-website-down/)  
52. Is it okay to use too many plugins on WordPress? Will it break something? \- Reddit, acessado em junho 29, 2025, [https://www.reddit.com/r/Wordpress/comments/1jzfdxv/is\_it\_okay\_to\_use\_too\_many\_plugins\_on\_wordpress/](https://www.reddit.com/r/Wordpress/comments/1jzfdxv/is_it_okay_to_use_too_many_plugins_on_wordpress/)  
53. Wordfence: WordPress Security Plugin, acessado em junho 29, 2025, [https://www.wordfence.com/](https://www.wordfence.com/)  
54. 7 Best WordPress Security Plugins in 2025 \- cmsMinds, acessado em junho 29, 2025, [https://cmsminds.com/blog/wordpress-security-plugins/](https://cmsminds.com/blog/wordpress-security-plugins/)  
55. 6 Best WordPress Security Plugins to Protect Your Site (2025), acessado em junho 29, 2025, [https://www.wpbeginner.com/plugins/best-wordpress-security-plugins-compared/](https://www.wpbeginner.com/plugins/best-wordpress-security-plugins-compared/)  
56. What Are Offsite Backups? | Rubrik, acessado em junho 29, 2025, [https://www.rubrik.com/insights/offsite-backups](https://www.rubrik.com/insights/offsite-backups)  
57. Offsite Backups: 12 Reasons Off-Site Storage is Essential for Disaster Recovery \- Jetpack, acessado em junho 29, 2025, [https://jetpack.com/resources/off-site-backups/](https://jetpack.com/resources/off-site-backups/)  
58. Best Free WordPress Backup Plugins for 2025 \- JetBackup, acessado em junho 29, 2025, [https://blog.jetbackup.com/best-free-wordpress-backup-plugins-for-2025/](https://blog.jetbackup.com/best-free-wordpress-backup-plugins-for-2025/)  
59. 7 Best WordPress Backup Plugins Compared (Pros and Cons), acessado em junho 29, 2025, [https://www.wpbeginner.com/plugins/7-best-wordpress-backup-plugins-compared-pros-and-cons/](https://www.wpbeginner.com/plugins/7-best-wordpress-backup-plugins-compared-pros-and-cons/)  
60. nitropack.io, acessado em junho 29, 2025, [https://nitropack.io/blog/post/web-caching-beginners-guide\#:\~:text=TL%3BDR%3A%20Web%20caching%20involves,retrieval%20and%20reduce%20load%20times.](https://nitropack.io/blog/post/web-caching-beginners-guide#:~:text=TL%3BDR%3A%20Web%20caching%20involves,retrieval%20and%20reduce%20load%20times.)  
61. What is caching? | How is a website cached? \- Cloudflare, acessado em junho 29, 2025, [https://www.cloudflare.com/learning/cdn/what-is-caching/](https://www.cloudflare.com/learning/cdn/what-is-caching/)  
62. 5 Best WordPress Caching Plugins to Speed Up Your Website (2025), acessado em junho 29, 2025, [https://www.wpbeginner.com/plugins/best-wordpress-caching-plugins/](https://www.wpbeginner.com/plugins/best-wordpress-caching-plugins/)  
63. WordPress Maintenance Checklist: Monthly Tasks Guide ..., acessado em junho 29, 2025, [https://www.wpsupportspecialists.com/wordpress-maintenance-checklist-monthly-tasks-guide/](https://www.wpsupportspecialists.com/wordpress-maintenance-checklist-monthly-tasks-guide/)  
64. WordPress maintenance checklist: What to do (and when) to keep your site running smoothly \- Kinsta, acessado em junho 29, 2025, [https://kinsta.com/blog/wordpress-maintenance-checklist/](https://kinsta.com/blog/wordpress-maintenance-checklist/)  
65. 18 WordPress Security Statistics for 2024 \- White Canvas, acessado em junho 29, 2025, [https://wcanvas.com/blog/18-wordpress-security-statistics-for-2023/](https://wcanvas.com/blog/18-wordpress-security-statistics-for-2023/)  
66. How Outdated CMS Plugins Leave Your Website Vulnerable | SiteLock, acessado em junho 29, 2025, [https://www.sitelock.com/blog/outdated-cms-plugins-a-hidden-danger-for-websites/](https://www.sitelock.com/blog/outdated-cms-plugins-a-hidden-danger-for-websites/)  
67. WordPress Site Broken After an Update? Here's How to Fix It \- Jetpack, acessado em junho 29, 2025, [https://jetpack.com/resources/what-to-do-when-an-update-breaks-your-wordpress-website/](https://jetpack.com/resources/what-to-do-when-an-update-breaks-your-wordpress-website/)  
68. WordPress Security Checklist: 43 Ways to Protect Your Site \- Wordfence, acessado em junho 29, 2025, [https://www.wordfence.com/wordpress-security-checklist/](https://www.wordfence.com/wordpress-security-checklist/)  
69. www.cloudways.com, acessado em junho 29, 2025, [https://www.cloudways.com/blog/wordpress-database-optimization/\#:\~:text=WordPress%20database%20optimization%20is%20a,overall%20size%20of%20your%20database.](https://www.cloudways.com/blog/wordpress-database-optimization/#:~:text=WordPress%20database%20optimization%20is%20a,overall%20size%20of%20your%20database.)  
70. What is Database Optimization in WordPress? \- GreenGeeks, acessado em junho 29, 2025, [https://www.greengeeks.com/glossary/database-optimization/](https://www.greengeeks.com/glossary/database-optimization/)  
71. WordPress Site Down After Plugin Update? Here Are 8 Ways To Easily Fix It \- MalCare, acessado em junho 29, 2025, [https://www.malcare.com/blog/wordpress-site-down-after-plugin-update/](https://www.malcare.com/blog/wordpress-site-down-after-plugin-update/)  
72. What to Do When a WordPress Plugin Breaks Your Site \- Pressable, acessado em junho 29, 2025, [https://pressable.com/blog/what-to-do-when-a-wordpress-plugin-breaks-your-site/](https://pressable.com/blog/what-to-do-when-a-wordpress-plugin-breaks-your-site/)  
73. What to do when a WordPress update breaks your site \- NerdPress®, acessado em junho 29, 2025, [https://www.nerdpress.net/if-an-update-breaks-your-site/](https://www.nerdpress.net/if-an-update-breaks-your-site/)  
74. Forums | WordPress.org, acessado em junho 29, 2025, [https://wordpress.org/support/forums/](https://wordpress.org/support/forums/)  
75. Welcome to the WordPress.org support forums, acessado em junho 29, 2025, [https://wordpress.org/support/welcome/](https://wordpress.org/support/welcome/)  
76. WordPress for Beginners Blog, acessado em junho 29, 2025, [https://www.wpbeginner.com/blog/](https://www.wpbeginner.com/blog/)  
77. 700+ Best Free WordPress Tutorials (Step by Step) \- WPBeginner, acessado em junho 29, 2025, [https://www.wpbeginner.com/category/wp-tutorials/](https://www.wpbeginner.com/category/wp-tutorials/)  
78. Courses \- Elementor Academy, acessado em junho 29, 2025, [https://elementor.com/academy/courses/](https://elementor.com/academy/courses/)  
79. Elementor Academy: Empower Your Web Creation Skills, acessado em junho 29, 2025, [https://elementor.com/academy/](https://elementor.com/academy/)  
80. Be Part of the Elementor Community, acessado em junho 29, 2025, [https://elementor.com/community/](https://elementor.com/community/)  
81. Wordfence Intelligence Weekly WordPress Vulnerability Report (June 16, 2025 to June 22, 2025), acessado em junho 29, 2025, [https://www.wordfence.com/blog/2025/06/wordfence-intelligence-weekly-wordpress-vulnerability-report-june-16-2025-to-june-22-2025/](https://www.wordfence.com/blog/2025/06/wordfence-intelligence-weekly-wordpress-vulnerability-report-june-16-2025-to-june-22-2025/)  
82. News \- Wordfence, acessado em junho 29, 2025, [https://www.wordfence.com/news/](https://www.wordfence.com/news/)  
83. Vulnerabilities Archives \- Wordfence, acessado em junho 29, 2025, [https://www.wordfence.com/blog/category/vulnerabilities/](https://www.wordfence.com/blog/category/vulnerabilities/)  
84. Sucuri Blog: Website Security News, acessado em junho 29, 2025, [https://blog.sucuri.net/](https://blog.sucuri.net/)  
85. General Website Security \- Sucuri Blog, acessado em junho 29, 2025, [https://blog.sucuri.net/category/website-security](https://blog.sucuri.net/category/website-security)  
86. Website Planning Worksheet \- GoDaddy, acessado em junho 29, 2025, [https://www.godaddy.com/garage/wp-content/uploads/2015/10/Website-Planning-Worksheet.pdf](https://www.godaddy.com/garage/wp-content/uploads/2015/10/Website-Planning-Worksheet.pdf)  
87. Website Maintenance Checklist \- Get Your Free Template \- Stephanie Lummis UX, acessado em junho 29, 2025, [https://stephaniefox.ca/ux-blog/website-maintenance-checklist/](https://stephaniefox.ca/ux-blog/website-maintenance-checklist/)  
88. Equipment Maintenance Log Template & Sample PDF Download \- Sitemate, acessado em junho 29, 2025, [https://sitemate.com/templates/plant-equipment-assets/forms/equipment-maintenance-log-template/](https://sitemate.com/templates/plant-equipment-assets/forms/equipment-maintenance-log-template/)  
89. www.f5.com, acessado em junho 29, 2025, [https://www.f5.com/glossary/web-application-firewall-waf\#:\~:text=A%20web%20application%20firewall%20(WAF)%20protects%20the%20application%20layer%20and,and%20what%20services%20they%20offer.](https://www.f5.com/glossary/web-application-firewall-waf#:~:text=A%20web%20application%20firewall%20\(WAF\)%20protects%20the%20application%20layer%20and,and%20what%20services%20they%20offer.)  
90. What is a web application firewall? WAF explained \- Fastly, acessado em junho 29, 2025, [https://www.fastly.com/learning/security/what-is-a-web-application-firewall-waf-explained](https://www.fastly.com/learning/security/what-is-a-web-application-firewall-waf-explained)  
91. www.dreamhost.com, acessado em junho 29, 2025, [https://www.dreamhost.com/blog/guide-to-wp-permalinks/\#:\~:text=In%20a%20nutshell%2C%20WordPress%20permalinks,dreamhost.com%2F%3F](https://www.dreamhost.com/blog/guide-to-wp-permalinks/#:~:text=In%20a%20nutshell%2C%20WordPress%20permalinks,dreamhost.com%2F%3F)  
92. developers.google.com, acessado em junho 29, 2025, [https://developers.google.com/search/docs/fundamentals/seo-starter-guide\#:\~:text=SEO%E2%80%94short%20for%20search%20engine,site%20through%20a%20search%20engine.](https://developers.google.com/search/docs/fundamentals/seo-starter-guide#:~:text=SEO%E2%80%94short%20for%20search%20engine,site%20through%20a%20search%20engine.)  
93. SEO tips for small businesses | BDC.ca, acessado em junho 29, 2025, [https://www.bdc.ca/en/articles-tools/marketing-sales-export/marketing/seo-small-businesses-10-ways-rank-higher](https://www.bdc.ca/en/articles-tools/marketing-sales-export/marketing/seo-small-businesses-10-ways-rank-higher)  
94. 11 Benefits of Managed WordPress Hosting \- WP Engine, acessado em junho 29, 2025, [https://wpengine.com/resources/managed-wordpress-hosting-benefits/](https://wpengine.com/resources/managed-wordpress-hosting-benefits/)