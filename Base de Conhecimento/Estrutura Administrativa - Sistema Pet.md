Documento de Referência Técnica: Estrutura Administrativa - Sistema Pet
Objetivo do Documento: Fornecer uma base de conhecimento sobre a configuração e operação de um backend real para gestão de canis, destacando módulos operacionais, campos de dados e limitações de customização de marketing.

1. Visão Geral da Interface (UI/UX)
O sistema utiliza uma interface de painel lateral (Sidebar) para navegação e um palco central (Main Content) para exibição de formulários e listagens. A arquitetura é baseada em módulos operacionais fechados.

2. Estrutura de Menus e Módulos
A. Módulo de Dashboard (Visão Geral)
Funcionalidade: Exibição de KPIs (Key Performance Indicators) básicos.

Campos/Widgets:

Contador de ninhadas ativas.

Resumo financeiro (contas a receber/vencer).

Lembretes de saúde (vacinas e vermífugos pendentes).

B. Gestão de Animais (Matrizes e Padreadores)
Este é o coração do sistema, onde se gerencia a genética do canil.

Seções Internas: Cadastro de Matrizes, Cadastro de Padreadores, Árvore Genealógica.

Campos de Dados:

Nome do Cão / Nome de Registro (Afixo).

Raça e Variedade (ex: Dachshund Miniatura Pelo Longo).

Data de Nascimento.

Microchip / Tatuagem.

Status (Ativo, Aposentado, Vendido, Óbito).

Upload de Documentos: Pedigrees (PDF/JPG), Laudos de Saúde (Exames de DNA, Displasia, IVDD).

C. Gestão de Ninhadas (Reprodução)
Funcionalidade: Controle do ciclo de nascimento e disponibilidade de filhotes.

Seções/Campos:

Seleção de Pais: Vinculação com matrizes/padreadores cadastrados.

Data de Acasalamento e Data Provável de Parto.

Registro de Nascimento: Quantidade de machos/fêmeas, cores e pelagens.

Gestão de Filhotes Individual: Status de reserva (Disponível, Reservado, Vendido).

Galeria de Fotos: Upload de fotos específicas da ninhada para o site.

D. Módulo Financeiro e Vendas
Funcionalidade: Emissão de contratos e controle de pagamentos.

Campos/Funcionalidades:

Cadastro de Clientes: Nome, CPF, Endereço, Contato.

Contratos de Compra e Venda: Geração automática baseada em templates.

Fluxo de Caixa: Registro de entradas (vendas) e saídas (veterinário, ração, marketing).

E. Configurações do Site (CMS Limitado)
Esta é a seção que interage com o front-end público do canil.

Funcionalidades de Edição:

Banners: Upload de imagens para o slide principal da Home.

Textos Institucionais: Campos de texto fixos para "Quem Somos", "Nossa Filosofia".

Redes Sociais: Campos para inserir links de Instagram, Facebook e WhatsApp.

Configuração de Raças: Checkbox para definir quais raças cadastradas aparecerão no menu do site.

3. Campos Técnicos e Funcionalidades Operacionais
Controle Sanitário: O sistema possui um calendário automatizado onde, ao cadastrar um filhote, ele gera datas para as doses de vacina (V10/V8) e vermífugos.

Exportação de Dados: Funcionalidade para gerar relatórios em PDF de pedigrees internos e fichas de saúde.

Gestão de Fotos: O upload é feito via browser, com redimensionamento automático para os templates do site.

4. Diagnóstico de Limitações (Para o Agente de Automação)
Para o desenvolvimento da nova estratégia, o agente deve considerar que esta seção admin possui as seguintes barreiras de marketing:

Ausência de 'Head/Body Scripts': Não existe um campo no admin para inserir o código do Google Tag Manager (GTM) ou Pixel do Facebook.

Formulários Rígidos: Os formulários de contato no admin não permitem a criação de campos customizados (como perguntas de qualificação) nem a inserção de hidden fields (campos ocultos) para capturar o GCLID do Google Ads.

Redirecionamento Inexistente: O sistema de envio de mensagens do site não possui uma configuração de "Página de Sucesso" personalizada (Redirect URL), mantendo o usuário na mesma página após o envio.

Layout Fixado: O admin controla apenas o conteúdo (textos e fotos), mas não permite alterar a estrutura das páginas ou criar Landing Pages de alta conversão.

5. Resumo para o Agente Antigravity
"O Sistema Pet opera como um ERP Operacional. Ele é excelente para organizar o inventário (animais) e a burocracia (contratos/saúde), mas é tecnicamente 'fechado' para marketing de performance. Portanto, a estratégia de site deve ser Híbrida: as páginas de captura (Landing Pages) devem ser construídas externamente para permitir o rastreamento avançado, enquanto o Sistema Pet permanece como a ferramenta de gestão do dia a dia do canil."