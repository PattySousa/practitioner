// script.js

const questions = [
  {
    question: "Qual serviço AWS é usado para armazenamento de objetos escalável e durável?",
    options: ["Amazon EBS", "Amazon S3", "Amazon RDS", "Amazon Glacier"],
    correct: 1,
    explanation: "Amazon S3 fornece armazenamento de objetos confiável e escalável na AWS."
  },
  {
    question: "Qual serviço AWS oferece monitoramento e métricas para recursos e aplicações?",
    options: ["AWS CloudTrail", "AWS Config", "AWS CloudWatch", "AWS Inspector"],
    correct: 2,
    explanation: "O AWS CloudWatch permite monitorar recursos e aplicações em tempo real."
  },
  {
    question: "O que significa o modelo de responsabilidade compartilhada da AWS?",
    options: ["AWS gerencia tudo", "Cliente gerencia tudo", "Segurança compartilhada entre AWS e cliente", "Cliente não tem responsabilidades"],
    correct: 2,
    explanation: "AWS gerencia segurança física, cliente gerencia segurança lógica do que usa."
  },
  {
    question: "Qual serviço AWS permite executar código em resposta a eventos sem gerenciar servidores?",
    options: ["Amazon EC2", "Amazon ECS", "AWS Lambda", "AWS Fargate"],
    correct: 2,
    explanation: "AWS Lambda é um serviço de computação serverless."
  },
  {
    question: "Quais regiões da AWS são onde os recursos são implantados?",
    options: ["Zonas de Disponibilidade", "Contas AWS", "Regiões", "Subnets"],
    correct: 2,
    explanation: "As regiões são áreas geográficas compostas por múltiplas zonas de disponibilidade."
  },
  {
    question: "O que são as Zonas de Disponibilidade na AWS?",
    options: ["Centros de dados isolados em uma região", "Máquinas virtuais", "Contas AWS", "Serviços gerenciados"],
    correct: 0,
    explanation: "Zonas de Disponibilidade são locais físicos independentes dentro de uma região AWS."
  },
  {
    question: "Qual serviço facilita a migração de bases de dados para AWS?",
    options: ["AWS Migration Hub", "AWS DMS", "AWS Inspector", "AWS Backup"],
    correct: 1,
    explanation: "AWS DMS (Database Migration Service) ajuda a migrar bancos de dados para a nuvem."
  },
  {
    question: "Qual serviço de banco de dados da AWS é relacional e gerenciado?",
    options: ["Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon ElastiCache"],
    correct: 1,
    explanation: "Amazon RDS é um banco de dados relacional gerenciado pela AWS."
  },
  {
    question: "Qual tipo de armazenamento Amazon S3 oferece para arquivos de baixo custo e acesso menos frequente?",
    options: ["S3 Standard", "S3 Standard-IA", "S3 One Zone-IA", "S3 Glacier"],
    correct: 3,
    explanation: "S3 Glacier oferece armazenamento de longo prazo e baixo custo para arquivamento."
  },
  {
    question: "Qual serviço AWS fornece gerenciamento de identidade e acesso (IAM)?",
    options: ["AWS IAM", "AWS KMS", "AWS Shield", "AWS Inspector"],
    correct: 0,
    explanation: "IAM gerencia usuários, permissões e credenciais na AWS."
  },
  {
    question: "O que é um VPC na AWS?",
    options: ["Servidor virtual", "Rede virtual isolada", "Banco de dados", "Servidor físico"],
    correct: 1,
    explanation: "VPC (Virtual Private Cloud) é uma rede virtual isolada."
  },
  {
    question: "Qual serviço permite consultas rápidas em bancos de dados em nuvem baseados em SQL?",
    options: ["Amazon Athena", "Amazon DynamoDB", "AWS Glue", "Amazon Redshift"],
    correct: 3,
    explanation: "Amazon Redshift é um data warehouse rápido e escalável."
  },
  {
    question: "Como a AWS oferece escalabilidade automática?",
    options: ["Balanceamento manual", "Auto Scaling", "Previsão manual", "Servidor único"],
    correct: 1,
    explanation: "Auto Scaling ajusta automaticamente o número de instâncias conforme demanda."
  },
  {
    question: "Qual serviço permite o processamento de eventos em tempo real?",
    options: ["AWS Step Functions", "AWS Glue", "Amazon Kinesis", "AWS CloudFormation"],
    correct: 2,
    explanation: "Amazon Kinesis processa grandes volumes de dados em tempo real."
  },
  {
    question: "Qual a característica do modelo pay-as-you-go da AWS?",
    options: ["Pagamento antecipado", "Pagamento por uso", "Pagamento fixo mensal", "Pagamento anual"],
    correct: 1,
    explanation: "Na AWS você paga apenas pelo que usar."
  },
  {
    question: "Qual serviço ajuda a distribuir conteúdo globalmente?",
    options: ["Amazon CloudFront", "AWS Route 53", "AWS Shield", "AWS Direct Connect"],
    correct: 0,
    explanation: "Amazon CloudFront é CDN da AWS para entrega rápida de conteúdo."
  },
  {
    question: "O que é o AWS Shared Responsibility Model?",
    options: ["Cliente é 100% responsável", "AWS é 100% responsável", "Modelo de responsabilidades entre AWS e cliente", "Varia conforme região"],
    correct: 2,
    explanation: "Define as responsabilidades de segurança entre cliente e AWS."
  },
  {
    question: "Qual serviço protege contra ataques DDoS?",
    options: ["AWS WAF", "AWS Shield", "AWS GuardDuty", "AWS Inspector"],
    correct: 1,
    explanation: "AWS Shield protege contra ataques de negação de serviço."
  },
  {
    question: "Para que serve o AWS CloudTrail?",
    options: ["Monitoramento de performance", "Auditoria de chamadas de API", "Configuração de firewall", "Gerenciamento de custos"],
    correct: 1,
    explanation: "CloudTrail registra atividades e chamadas de API para auditoria."
  },
  {
    question: "Como o AWS Trusted Advisor ajuda as empresas?",
    options: ["Sugere recomendações para reduzir custos e melhorar segurança", "Configura redes", "Gera faturamento", "Gerencia recursos"],
    correct: 0,
    explanation: "Fornece recomendações baseadas em melhores práticas da AWS."
  },
  {
    question: "Qual a finalidade do AWS Organizations?",
    options: ["Gerenciar contas AWS em uma organização", "Hospedar sites", "Gerenciar chaves", "Criar instâncias EC2"],
    correct: 0,
    explanation: "AWS Organizations facilita gerenciamento centralizado de múltiplas contas."
  },
  {
    question: "Qual serviço AWS oferece banco de dados para armazenar dados em cache?",
    options: ["Amazon ElastiCache", "Amazon DynamoDB", "Amazon Redshift", "Amazon RDS"],
    correct: 0,
    explanation: "ElastiCache é usado para cache de dados na memória."
  },
  {
    question: "Qual é a função do AWS CloudFormation?",
    options: ["Automatizar implantação de recursos via código", "Gerenciar debugging", "Monitorar eventos", "Gerenciar identidade"],
    correct: 0,
    explanation: "CloudFormation permite modelar e provisionar infraestrutura usando código."
  },
  {
    question: "Qual serviço facilita integração de aplicações ao enviar e receber mensagens?",
    options: ["Amazon SNS", "AWS Lambda", "AWS Glue", "Amazon S3"],
    correct: 0,
    explanation: "Amazon SNS é um serviço de notificação para comunicação entre aplicações."
  },
  {
    question: "O que é o AWS Well-Architected Framework?",
    options: ["Guia de melhores práticas para arquitetar na nuvem", "Software de monitoramento", "Serviço de banco de dados", "Middleware"],
    correct: 0,
    explanation: "É um conjunto de boas práticas para construir sistemas na AWS."
  },
  {
    question: "Qual serviço AWS permite criar pipelines de CI/CD?",
    options: ["AWS CodePipeline", "AWS Config", "AWS CloudTrail", "AWS CodeCommit"],
    correct: 0,
    explanation: "CodePipeline automatiza processo de entrega contínua."
  },
  {
    question: "O que é o Amazon VPC Endpoint?",
    options: ["Uma interface privada para acesso a serviços AWS", "Uma conta AWS", "Servidor virtual", "Bucket S3"],
    correct: 0,
    explanation: "VPC Endpoint permite conexão privada entre sua VPC e serviços AWS."
  },
  {
    question: "Qual serviço AWS fornece um banco de dados relacional compatível com MySQL e PostgreSQL?",
    options: ["Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon Aurora"],
    correct: 3,
    explanation: "Amazon Aurora é um banco de dados relacional compatível e de alto desempenho."
  },
  {
    question: "Qual serviço oferece análises com rápidas consultas SQL em dados armazenados no S3?",
    options: ["Amazon Athena", "Amazon DynamoDB", "AWS Glue", "Amazon Redshift"],
    correct: 0,
    explanation: "Amazon Athena permite consultas SQL diretamente em arquivos S3."
  },
  {
    question: "Qual serviço AWS protege recursos contra acesso indesejado por meio de identidade e permissões?",
    options: ["AWS IAM", "AWS KMS", "AWS Shield", "AWS WAF"],
    correct: 0,
    explanation: "IAM gerencia identidade e permissões para recursos da AWS."
  },
  {
    question: "O que é o AWS Elastic Beanstalk?",
    options: [
      "Um serviço de gerenciamento de contêineres",
      "Uma plataforma de implantação e gerenciamento de aplicações",
      "Um serviço de armazenamento de objetos",
      "Um banco de dados gerenciado"
    ],
    correct: 1,
    explanation: "Elastic Beanstalk facilita implantar e gerenciar aplicações na AWS automaticamente."
  },
  {
    question: "Qual serviço AWS permite gerenciamento centralizado de contas e faturamento?",
    options: [
      "AWS Organizations",
      "AWS IAM",
      "AWS Cost Explorer",
      "AWS CloudTrail"
    ],
    correct: 0,
    explanation: "AWS Organizations auxilia a gerenciar múltiplas contas e faturamento consolidado."
  },
  {
    question: "Qual serviço oferece proteção contra inundações de tráfego em aplicações web?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "AWS Firewall Manager",
      "AWS Control Tower"
    ],
    correct: 1,
    explanation: "AWS WAF protege aplicações web filtrando tráfego malicioso."
  },
  {
    question: "O que representa o preço de uso sob demanda na AWS?",
    options: [
      "Valor fixo mensal",
      "Pagamento por hora, quando a instância está ativa",
      "Pagamento antecipado",
      "Aluguel mensal"
    ],
    correct: 1,
    explanation: "Pagamentos sob demanda são feitos por hora ou segundo de uso efetivo."
  },
  {
    question: "O que é Amazon CloudFront?",
    options: [
      "Serviço para criar máquinas virtuais",
      "Rede de entrega de conteúdo (CDN)",
      "Armazenamento em nuvem",
      "Serviço de banco de dados"
    ],
    correct: 1,
    explanation: "CloudFront entrega conteúdos com baixa latência usando rede global."
  },
  {
    question: "Qual serviço oferece orquestração de workflows serverless na AWS?",
    options: [
      "AWS Step Functions",
      "Amazon SQS",
      "Amazon SNS",
      "AWS Lambda"
    ],
    correct: 0,
    explanation: "AWS Step Functions orquestram fluxos de trabalho serverless complexos."
  },
  {
    question: "Qual serviço AWS oferece análises e insights de logs?",
    options: [
      "Amazon CloudWatch Logs",
      "AWS Config",
      "AWS GuardDuty",
      "AWS Inspector"
    ],
    correct: 0,
    explanation: "CloudWatch Logs coleta e analisa logs para monitoramento profundo."
  },
  {
    question: "Qual é a finalidade do AWS Cost Explorer?",
    options: [
      "Monitorar performance da aplicação",
      "Gerenciar custos e analisar gastos na AWS",
      "Controlar acesso a recursos",
      "Gerenciar backups"
    ],
    correct: 1,
    explanation: "O Cost Explorer ajuda a visualizar e otimizar custos na AWS."
  },
  {
    question: "O que é Multi-AZ no Amazon RDS?",
    options: [
      "Replicação síncrona para alta disponibilidade",
      "Backup manual",
      "Migração de dados automatizada",
      "Mecanismo de cache"
    ],
    correct: 0,
    explanation: "Multi-AZ oferece replicação automática entre AZs para resiliência."
  },
  {
    question: "Qual serviço ajuda na migração de dados para AWS?",
    options: [
      "AWS Database Migration Service",
      "AWS Lambda",
      "Amazon SNS",
      "AWS CloudFormation"
    ],
    correct: 0,
    explanation: "AWS DMS simplifica migração de bancos de dados para a nuvem."
  },
  {
    question: "Qual protocolo de segurança é utilizado para autenticação no AWS IAM?",
    options: [
      "OAuth",
      "OpenID Connect",
      "SAML",
      "Todos acima"
    ],
    correct: 3,
    explanation: "IAM suporta múltiplos protocolos para autenticação segura."
  },
  {
    question: "O que o AWS Trusted Advisor recomenda?",
    options: [
      "Melhorias em segurança, performance e custo",
      "Configuração de firewall",
      "Criação de backups",
      "Gerenciamento de contas"
    ],
    correct: 0,
    explanation: "Trusted Advisor fornece recomendações para melhorar AWS conforme boas práticas."
  },
  {
    question: "Qual serviço permite o compartilhamento seguro de recursos entre contas AWS?",
    options: [
      "AWS IAM",
      "AWS Resource Access Manager",
      "AWS Organizations",
      "AWS Config"
    ],
    correct: 1,
    explanation: "AWS RAM compartilha recursos com segurança entre contas diferentes."
  },
  {
    question: "O que é o AWS Well-Architected Tool?",
    options: [
      "Ferramenta para planejar custo",
      "Ferramenta para avaliar arquiteturas segundo boas práticas",
      "Serviço para auditoria de segurança",
      "Plataforma de CI/CD"
    ],
    correct: 1,
    explanation: "Ajuda a revisar a arquitetura de soluções conforme os cinco pilares AWS."
  },
  {
    question: "Qual serviço AWS fornece um armazenamento em bloco para EC2?",
    options: [
      "Amazon Glacier",
      "Amazon S3",
      "Amazon EBS",
      "Amazon FSx"
    ],
    correct: 2,
    explanation: "Amazon EBS fornece armazenamento em blocos usado por instâncias EC2."
  },
  {
    question: "Qual serviço oferece criptografia de dados gerenciada na nuvem AWS?",
    options: [
      "AWS Key Management Service (KMS)",
      "AWS IAM",
      "Amazon S3",
      "AWS CloudFormation"
    ],
    correct: 0,
    explanation: "AWS KMS gerencia e protege chaves criptográficas para seus dados."
  },
  {
    question: "Qual serviço monitora mudanças na configuração dos recursos AWS?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "AWS Shield",
      "AWS WAF"
    ],
    correct: 1,
    explanation: "AWS Config monitora e grava mudanças em recursos para auditoria."
  },
  {
    question: "Como é cobrada a largura de banda de saída na AWS?",
    options: [
      "Por GB utilizado",
      "Por hora de uso",
      "Valor fixo mensal",
      "Gratuita sempre"
    ],
    correct: 0,
    explanation: "Cobrança é feita por GB transferido para fora da AWS."
  },
  {
    question: "Qual serviço oferece APIs gerenciadas e seguras na AWS?",
    options: [
      "Amazon API Gateway",
      "AWS Lambda",
      "AWS App Mesh",
      "AWS Step Functions"
    ],
    correct: 0,
    explanation: "API Gateway cria e gerencia APIs RESTful e WebSocket."
  },
  {
    question: "Qual é o objetivo do AWS IAM?",
    options: [
      "Gerenciar identidades e permissões de acesso",
      "Gerenciar custos na nuvem",
      "Monitorar desempenho",
      "Gerenciar jogos online"
    ],
    correct: 0,
    explanation: "IAM controla quem pode acessar os recursos da AWS e com quais permissões."
  },
  {
    question: "Qual serviço AWS permite orquestração de contêineres Kubernetes?",
    options: [
      "Amazon ECS",
      "Amazon EKS",
      "AWS Fargate",
      "AWS Lambda"
    ],
    correct: 1,
    explanation: "Amazon EKS é o serviço gerenciado Kubernetes da AWS."
  },
  {
    question: "Para que serve o AWS Snowball?",
    options: [
      "Transferir dados grande volume para AWS",
      "Backup local",
      "Monitorar rede",
      "Gerenciar usuários"
    ],
    correct: 0,
    explanation: "Snowball é dispositivo físico para transferência segura e rápida de dados."
  },
  {
    question: "Qual serviço permite proteção de APIs baseadas em ataques comuns?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "AWS IAM",
      "Amazon CloudFront"
    ],
    correct: 1,
    explanation: "AWS WAF protege APIs e aplicações web contra ataques comuns."
  },
  {
    question: "Qual o nome do serviço para criação de machine learning na AWS?",
    options: [
      "Amazon SageMaker",
      "Amazon Rekognition",
      "AWS Glue",
      "AWS Lambda"
    ],
    correct: 0,
    explanation: "SageMaker é plataforma para criação, treinamento e implantação de modelos ML."
  },
  {
    question: "Qual ferramenta ajuda no gerenciamento de custos da AWS?",
    options: [
      "AWS Cost Explorer",
      "AWS CloudTrail",
      "AWS IAM",
      "AWS Config"
    ],
    correct: 0,
    explanation: "Cost Explorer ajuda a visualizar e gerenciar os gastos da nuvem."
  },
  {
    question: "O que é AWS CloudFormation?",
    options: [
      "Ferramenta para modelar e automatizar infraestrutura como código",
      "Aplicação para monitoramento",
      "Serviço de banco de dados",
      "Ferramenta para backups"
    ],
    correct: 0,
    explanation: "CloudFormation usa arquivos declarativos para provisionar infraestrutura."
  },
  {
    question: "Qual serviço é usado para orquestrar múltiplas funções Lambda em workflows?",
    options: [
      "AWS Step Functions",
      "Amazon SQS",
      "AWS Lambda",
      "Amazon SNS"
    ],
    correct: 0,
    explanation: "Step Functions cria serviços de orquestração de funções serverless."
  },
  {
    question: "Qual serviço envia notificações push para múltiplos dispositivos?",
    options: [
      "Amazon SNS",
      "AWS Lambda",
      "Amazon SQS",
      "Amazon WorkSpaces"
    ],
    correct: 0,
    explanation: "SNS permite enviar notificações em massa para dispositivos e serviços."
  },
  {
    question: "Qual o serviço de banco de dados da AWS otimizado para cargas analíticas?",
    options: [
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon ElastiCache"
    ],
    correct: 0,
    explanation: "Redshift é um data warehouse rápido para análise de grandes volumes de dados."
  },
  {
    question: "Qual serviço AWS oferece proteção contra ataques DDoS?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "AWS Firewall Manager",
      "AWS Inspector"
    ],
    correct: 0,
    explanation: "AWS Shield protege recursos de rede contra ataques Distribuídos de Negação de Serviço."
  },
  {
  question: "O que é o Amazon Lightsail?",
  options: [
    "Serviço de VPS simples e gerenciado para hospedar aplicações",
    "Serviço de banco de dados",
    "Plataforma para análise de dados",
    "Ferramenta de orquestração de contêineres"
  ],
  correct: 0,
  explanation: "Lightsail é um serviço fácil de usar para VPS usado em aplicações simples e rápidas."
},
{
  question: "Qual serviço AWS ajuda a gerenciar certificados SSL/TLS?",
  options: [
    "AWS Certificate Manager",
    "AWS IAM",
    "AWS CloudTrail",
    "Amazon Route 53"
  ],
  correct: 0,
  explanation: "Certificate Manager facilita criar e gerenciar certificados para criptografia."
},
{
  question: "O que é o AWS Cost and Usage Report?",
  options: [
    "Relatório detalhado do uso e custo dos serviços AWS",
    "Ferramenta para monitoramento de segurança",
    "Serviço de backup",
    "Ferramenta de desenvolvimento"
  ],
  correct: 0,
  explanation: "Cost and Usage Report fornece dados detalhados sobre consumo e custos na AWS."
},
{
  question: "Para que serve o AWS CloudTrail Insights?",
  options: [
    "Identificar padrões anormais em atividades da AWS",
    "Gerenciamento de custos",
    "Monitoramento de firewall",
    "Configuração de VPC"
  ],
  correct: 0,
  explanation: "CloudTrail Insights detecta automaticamente atividades incomuns para investigação."
},
{
  question: "Qual serviço AWS é usado para armazenamento de dados em arquivos? (File Storage)",
  options: [
    "Amazon EFS",
    "Amazon S3",
    "Amazon RDS",
    "AWS Lambda"
  ],
  correct: 0,
  explanation: "Amazon EFS oferece armazenamento em arquivo escalável para uso em múltiplas instâncias."
}
];


let shuffledQuestions = [];
let currentQuestion = 0;
let score = 0;
let userName = "";
let seconds = 5400; 
let timer;
let timerPaused = false;

function shuffleArray(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  userName = document.getElementById("userName").value.trim();
  if(!userName) {
    alert("Por favor, digite seu nome para começar!");
    return;
  }
  document.getElementById("nameInstruction").style.display = "none";
  shuffledQuestions = shuffleArray([...questions]);
  currentQuestion = 0;
  score = 0;
  seconds = 5400; 
  document.querySelector(".welcome-screen").style.display = "none";
  document.querySelector(".quiz-container").style.display = "block";
  startTimer();
  showQuestion();
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    if(!timerPaused && seconds > 0) {
      seconds--;
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      document.getElementById("time").textContent =
          `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }
    if(seconds <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
  const questionData = shuffledQuestions[currentQuestion];
  const instruction = questionData.multiSelect ? 
    '<p class="question-instruction">(Selecione DUAS opções corretas)</p>' : '';
  document.querySelector(".question").innerHTML =
    `<h2>Questão ${currentQuestion + 1} de ${shuffledQuestions.length}</h2>
     <p>${questionData.question}</p>
     ${instruction}`;
  let optionsWithStatus = questionData.options.map((option, index) => ({
    text: option,
    isCorrect: questionData.multiSelect ? 
      questionData.correct.includes(index) :
      index === questionData.correct
  }));
  optionsWithStatus = shuffleArray(optionsWithStatus);
  if(!questionData.multiSelect) {
    questionData.correct = optionsWithStatus.findIndex(opt => opt.isCorrect);
  } else {
    questionData.correct = optionsWithStatus.map((opt, idx) =>
      opt.isCorrect ? idx : -1
    ).filter(idx => idx !== -1);
  }
  const optionsHtml = optionsWithStatus.map((option, index) =>
    `<div class="option" onclick="selectOption(${index})">${option.text}</div>`
  ).join('');
  document.querySelector(".options").innerHTML = optionsHtml;
  document.querySelector(".feedback").style.display = "none";
  document.querySelector(".next-button").classList.add("hidden");
}

function selectOption(optionIndex) {
  const options = document.querySelectorAll(".option");
  const questionData = shuffledQuestions[currentQuestion];
  if(questionData.multiSelect) {
    const selectedOption = options[optionIndex];
    if(selectedOption.classList.contains("selected")) {
      selectedOption.classList.remove("selected");
    } else {
      const selectedCount = document.querySelectorAll(".option.selected").length;
      if(selectedCount < 2) {
        selectedOption.classList.add("selected");
      }
    }
    if(document.querySelectorAll(".option.selected").length === 2) {
      const selectedIndices = Array.from(options).map((opt, idx) =>
        opt.classList.contains("selected") ? idx : -1
      ).filter(idx => idx !== -1);
      const correct = questionData.correct.every(i => selectedIndices.includes(i)) &&
        selectedIndices.every(i => questionData.correct.includes(i));
      options.forEach((option, idx) => {
        option.onclick = null;
        if(questionData.correct.includes(idx)) {
          option.classList.add("correct");
        }
        if(selectedIndices.includes(idx) && !questionData.correct.includes(idx)) {
          option.classList.add("incorrect");
        }
      });
      if(correct) score += 10;
      const feedback = document.querySelector(".feedback");
      feedback.innerHTML = questionData.explanation;
      feedback.style.display = "block";
      document.querySelector(".next-button").classList.remove("hidden");
    }
  } else {
    options.forEach(option => {
      option.classList.remove("selected", "correct", "incorrect");
      option.onclick = null;
    });
    const selectedOption = options[optionIndex];
    selectedOption.classList.add("selected");
    if(optionIndex === questionData.correct) {
      selectedOption.classList.add("correct");
      score += 10;
    } else {
      selectedOption.classList.add("incorrect");
      options[questionData.correct].classList.add("correct");
    }
    const feedback = document.querySelector(".feedback");
    feedback.innerHTML = questionData.explanation;
    feedback.style.display = "block";
    document.querySelector(".next-button").classList.remove("hidden");
  }
}

function nextQuestion() {
  currentQuestion++;
  if(currentQuestion < shuffledQuestions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timer);
  const totalPoints = shuffledQuestions.length * 10;
  const percent = ((score / totalPoints) * 100).toFixed(2);

  const container = document.querySelector(".quiz-container");
  container.innerHTML = `
    <h2>Parabéns, ${userName}!</h2>
    <p>Você completou o quiz!</p>
    <p>Pontuação: ${score} de ${totalPoints} (${percent}%)</p>
    <p>Tempo total: ${document.getElementById("time").textContent}</p>
    <button onclick="location.reload()" class="btn">Recomeçar</button>
  `;
}

document.getElementById("pauseTimer").addEventListener("click", () => {
  timerPaused = !timerPaused;
  document.getElementById("pauseTimer").innerText = timerPaused ? "Continuar" : "Pausar";
});

document.getElementById("startBtn").addEventListener("click", startQuiz);
document.querySelector('.next-button').addEventListener('click', nextQuestion);
