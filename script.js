// script.js

const questions = [
  {
    question: "Qual serviço AWS é usado para armazenamento de objetos escalável e durável?",
    options: ["Amazon EBS", "Amazon S3", "Amazon RDS", "Amazon Glacier"],
    correct: 1,
    explanation: "O Amazon S3 (Simple Storage Service) é um serviço de armazenamento de objetos altamente escalável, durável e de baixo custo, ideal para armazenar dados não estruturados."
  },
  {
    question: "Qual serviço AWS oferece monitoramento e métricas para recursos e aplicações?",
    options: ["AWS CloudTrail", "AWS Config", "Amazon CloudWatch", "AWS Inspector"],
    correct: 2,
    explanation: "O Amazon CloudWatch é um serviço de monitoramento que fornece dados e insights acionáveis para monitorar aplicações, responder a alterações de desempenho e otimizar recursos."
  },
  {
    question: "Qual dos seguintes é um benefício de preço da Nuvem AWS?",
    options: ["Preços fixos e previsíveis", "Sem custos operacionais (OpEx)", "Pagar apenas pelo que você usa", "Nenhum custo, exceto para o suporte"],
    correct: 2,
    explanation: "O modelo de pagamento da AWS de 'pagamento conforme o uso' permite que você pague apenas pelos recursos que consome, substituindo grandes despesas de capital por despesas operacionais variáveis."
  },
  {
    question: "Qual serviço AWS pode ser usado para hospedar um site estático?",
    options: ["Amazon EC2", "Amazon RDS", "Amazon S3", "AWS Lambda"],
    correct: 2,
    explanation: "O Amazon S3 é a escolha ideal para hospedar sites estáticos devido à sua alta disponibilidade, durabilidade e baixo custo."
  },
  {
    question: "O que a 'Elasticidade' na Nuvem AWS se refere?",
    options: ["A capacidade de se mover rapidamente", "A capacidade de se recuperar de falhas", "A capacidade de expandir e contrair recursos com base na demanda", "A capacidade de gerenciar identidades"],
    correct: 2,
    explanation: "A elasticidade é a capacidade de um sistema de provisionar e desprovisionar recursos automaticamente, para cima ou para baixo, conforme a necessidade da carga de trabalho."
  },
  {
    question: "Qual serviço AWS é um firewall de aplicação da web que ajuda a proteger aplicações contra explorações comuns da web?",
    options: ["AWS Shield", "Amazon GuardDuty", "AWS WAF", "Amazon Inspector"],
    correct: 2,
    explanation: "O AWS WAF (Web Application Firewall) protege as aplicações da web e APIs contra vulnerabilidades comuns da web que podem afetar a disponibilidade, comprometer a segurança ou consumir recursos excessivos."
  },
  {
    question: "Qual serviço AWS é um serviço de computação sem servidor?",
    options: ["Amazon EC2", "Amazon SQS", "AWS Lambda", "Amazon EFS"],
    correct: 2,
    explanation: "O AWS Lambda permite que você execute código em resposta a eventos sem provisionar ou gerenciar servidores."
  },
  {
    question: "Qual é a principal responsabilidade do cliente sob o 'Modelo de Responsabilidade Compartilhada' da AWS?",
    options: ["A segurança da Nuvem", "A segurança da infraestrutura física", "A segurança da infraestrutura de hardware", "A segurança 'na Nuvem' (dados e aplicações)"],
    correct: 3,
    explanation: "A responsabilidade do cliente é a 'segurança na Nuvem', que inclui a gestão dos dados, aplicações, sistemas operacionais e configurações de rede."
  },
  {
    question: "Qual serviço AWS é um banco de dados relacional gerenciado que torna a configuração e a operação mais simples?",
    options: ["Amazon S3", "Amazon DynamoDB", "Amazon RDS", "Amazon Redshift"],
    correct: 2,
    explanation: "O Amazon RDS (Relational Database Service) é o serviço de banco de dados relacional gerenciado da AWS que simplifica a administração do banco de dados, como backups e atualizações."
  },
  {
    question: "O que é um 'Grupo de Segurança' na AWS?",
    options: ["Um grupo de usuários com as mesmas permissões", "Uma ferramenta de monitoramento", "Um firewall virtual para controlar o tráfego de rede", "Uma rede virtual privada"],
    correct: 2,
    explanation: "O Grupo de Segurança atua como um firewall virtual para controlar o tráfego de entrada e saída para uma ou mais instâncias do Amazon EC2."
  },
  {
    question: "Qual dos seguintes é um benefício de um grupo de usuários no AWS IAM?",
    options: ["Permitir que os usuários tenham acesso total a todos os serviços", "Permitir o gerenciamento de permissões para cada usuário individualmente", "Simplificar o gerenciamento de permissões ao aplicar uma política a múltiplos usuários", "Fornecer acesso temporário a recursos"],
    correct: 2,
    explanation: "Os grupos do IAM permitem que você aplique permissões de forma centralizada a vários usuários, simplificando a gestão de acesso."
  },
  {
    question: "Qual é o principal benefício do AWS Trusted Advisor?",
    options: ["Acelerar a entrega de conteúdo web", "Fornecer orientações para otimizar os recursos da AWS", "Automatizar a implantação de aplicações", "Gerenciar redes virtuais"],
    correct: 1,
    explanation: "O AWS Trusted Advisor inspeciona seu ambiente AWS e faz recomendações baseadas nas melhores práticas da AWS em cinco categorias: otimização de custos, segurança, tolerância a falhas, desempenho e limites de serviço."
  },
  {
    question: "Qual serviço AWS pode ser usado para proteger sua infraestrutura contra ataques de negação de serviço distribuída (DDoS)?",
    options: ["AWS WAF", "Amazon GuardDuty", "AWS Shield", "Amazon Inspector"],
    correct: 2,
    explanation: "O AWS Shield é um serviço de proteção contra ataques DDoS que protege as aplicações que rodam na AWS."
  },
  {
    question: "Qual é a principal função do AWS CloudTrail?",
    options: ["Monitorar métricas de recursos e logs", "Registrar ações de API e eventos de usuário", "Fornecer uma rede de entrega de conteúdo", "Gerenciar identidades de usuário"],
    correct: 1,
    explanation: "O AWS CloudTrail monitora e registra ações de API, eventos e uso de serviços da AWS, o que é fundamental para auditoria de segurança e conformidade."
  },
  {
    question: "Qual dos seguintes serviços é uma ferramenta de 'Infraestrutura como Código'?",
    options: ["Amazon EC2", "AWS CloudFormation", "Amazon S3", "Amazon CloudWatch"],
    correct: 1,
    explanation: "O AWS CloudFormation permite que você defina e provisione a infraestrutura da AWS usando modelos, o que é a essência da 'Infraestrutura como Código'."
  },
  {
    question: "O que é um 'Amazon Machine Image' (AMI)?",
    options: ["Um volume de armazenamento", "Um modelo para iniciar uma instância do EC2", "Um servidor dedicado físico", "Um grupo de auto scaling"],
    correct: 1,
    explanation: "Uma AMI (Amazon Machine Image) é um modelo que contém a configuração de software para iniciar uma instância do Amazon EC2."
  },
  {
    question: "Qual serviço AWS é um banco de dados NoSQL totalmente gerenciado, escalável e rápido?",
    options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora"],
    correct: 2,
    explanation: "O Amazon DynamoDB é um serviço de banco de dados NoSQL rápido, totalmente gerenciado e sem servidor."
  },
  {
    question: "Qual é a principal função de uma 'Região' da AWS?",
    options: ["Para armazenar dados por longos períodos", "Para fornecer um único datacenter para alta disponibilidade", "Para agrupar várias Zonas de Disponibilidade", "Para servir como uma rede virtual isolada"],
    correct: 2,
    explanation: "Uma Região da AWS é um local físico no mundo onde a AWS agrupa vários datacenters, geralmente consistindo de múltiplas Zonas de Disponibilidade isoladas."
  },
  {
    question: "O que a 'Zona de Disponibilidade' na AWS se refere?",
    options: ["Um datacenter único", "Uma área geográfica global", "Um local físico com um ou mais datacenters isolados e redundantes", "Um serviço de rede privada"],
    correct: 2,
    explanation: "Uma Zona de Disponibilidade é um ou mais datacenters discretos com energia, rede e conectividade redundantes em uma Região da AWS."
  },
  {
    question: "Qual serviço AWS é um ambiente de desenvolvimento e implantação totalmente gerenciado para aplicações web e móveis?",
    options: ["Amazon EC2", "AWS CodeDeploy", "Amazon Elastic Beanstalk", "AWS Lambda"],
    correct: 2,
    explanation: "O Amazon Elastic Beanstalk gerencia a infraestrutura de implantação, permitindo que os desenvolvedores se concentrem no código da aplicação."
  },
  {
    question: "O que é um 'Grupo de Auto Scaling'?",
    options: ["Um grupo de usuários com as mesmas permissões", "Um grupo de servidores dedicados na AWS", "Uma ferramenta de monitoramento", "Um grupo de instâncias do EC2 com um limite mínimo e máximo de instâncias para escalabilidade"],
    correct: 3,
    explanation: "O Grupo de Auto Scaling garante que o número de instâncias do EC2 na sua aplicação aumente ou diminua automaticamente com base na demanda."
  },
  {
    question: "Qual é a principal vantagem de usar o AWS Consolidated Billing?",
    options: ["Pagar por cada conta individualmente", "Cobrar uma taxa extra para cada conta secundária", "Simplificar o faturamento ao combinar o uso de todas as contas em uma fatura", "Fornecer acesso a um plano de preço fixo"],
    correct: 2,
    explanation: "O faturamento consolidado, um recurso do AWS Organizations, combina o faturamento de várias contas em uma única fatura, o que simplifica a gestão."
  },
  {
    question: "Qual serviço AWS é um serviço de DNS (Domain Name System) altamente disponível e escalável?",
    options: ["Amazon Route 53", "AWS Direct Connect", "Amazon VPC", "AWS VPN"],
    correct: 0,
    explanation: "O Amazon Route 53 é um serviço de DNS que roteia o tráfego de usuários para a infraestrutura da AWS."
  },
  {
    question: "Qual serviço AWS pode ser usado para hospedar um site estático?",
    options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "AWS Lambda"],
    correct: 1,
    explanation: "O Amazon S3 é a escolha ideal para hospedar sites estáticos devido à sua alta disponibilidade e baixo custo."
  },
  {
    question: "O que é o 'Total Cost of Ownership' (TCO) na Nuvem AWS?",
    options: ["O custo de um único serviço da AWS", "Uma análise para comparar o custo de uma infraestrutura local com o custo de uma infraestrutura na nuvem", "O custo de um único servidor na AWS", "O custo de migração para a nuvem"],
    correct: 1,
    explanation: "O TCO é uma análise financeira usada para comparar o custo total de propriedade entre a execução de uma aplicação em um datacenter local versus a execução na Nuvem AWS."
  },
  {
    question: "Qual dos seguintes é um pilar do 'AWS Well-Architected Framework'?",
    options: ["Velocidade", "Confiabilidade", "Flexibilidade", "Simplicidade"],
    correct: 1,
    explanation: "A confiabilidade é um dos cinco pilares do AWS Well-Architected Framework, que se concentra em como construir sistemas resilientes e que se recuperam de falhas."
  },
  {
    question: "Qual serviço AWS oferece um banco de dados relacional gerenciado que torna a configuração e a operação mais simples?",
    options: ["Amazon S3", "Amazon DynamoDB", "Amazon RDS", "Amazon Redshift"],
    correct: 2,
    explanation: "O Amazon RDS (Relational Database Service) é o serviço de banco de dados relacional gerenciado da AWS que simplifica a administração do banco de dados, como backups e atualizações."
  },
  {
    question: "Qual serviço AWS é um serviço de computação sem servidor?",
    options: ["Amazon EC2", "Amazon SQS", "AWS Lambda", "Amazon EFS"],
    correct: 2,
    explanation: "O AWS Lambda permite que você execute código em resposta a eventos sem provisionar ou gerenciar servidores."
  },
  {
    question: "Qual é a principal responsabilidade do cliente sob o 'Modelo de Responsabilidade Compartilhada' da AWS?",
    options: ["A segurança da Nuvem", "A segurança da infraestrutura física", "A segurança 'na Nuvem' (dados e aplicações)", "A segurança de todas as camadas do sistema"],
    correct: 2,
    explanation: "A responsabilidade do cliente é a 'segurança na Nuvem', que inclui a gestão dos dados, aplicações, sistemas operacionais e configurações de rede."
  },
  {
    question: "Qual serviço AWS é um firewall de aplicação da web que ajuda a proteger aplicações contra explorações comuns da web?",
    options: ["AWS Shield", "Amazon GuardDuty", "AWS WAF", "Amazon Inspector"],
    correct: 2,
    explanation: "O AWS WAF (Web Application Firewall) protege as aplicações da web e APIs contra vulnerabilidades comuns da web."
  },
  {
    question: "Qual dos seguintes é um benefício de preço da Nuvem AWS?",
    options: ["Preços fixos e previsíveis", "Sem custos operacionais (OpEx)", "Pagar apenas pelo que você usa", "Nenhum custo, exceto para o suporte"],
    correct: 2,
    explanation: "O modelo de pagamento da AWS de 'pagamento conforme o uso' permite que você pague apenas pelos recursos que consome."
  },
  {
    question: "Qual serviço AWS pode ser usado para hospedar um site estático?",
    options: ["Amazon EC2", "Amazon RDS", "Amazon S3", "AWS Lambda"],
    correct: 2,
    explanation: "O Amazon S3 é a escolha ideal para hospedar sites estáticos devido à sua alta disponibilidade, durabilidade e baixo custo."
  },
  {
    question: "Qual serviço AWS oferece armazenamento de objetos escalável e durável?",
    options: ["Amazon EBS", "Amazon S3", "Amazon RDS", "Amazon Glacier"],
    correct: 1,
    explanation: "O Amazon S3 (Simple Storage Service) é um serviço de armazenamento de objetos altamente escalável e durável."
  },
  {
    question: "O que a 'Elasticidade' na Nuvem AWS se refere?",
    options: ["A capacidade de se mover rapidamente", "A capacidade de se recuperar de falhas", "A capacidade de expandir e contrair recursos com base na demanda", "A capacidade de gerenciar identidades"],
    correct: 2,
    explanation: "A elasticidade é a capacidade de um sistema de provisionar e desprovisionar recursos automaticamente, conforme a necessidade da carga de trabalho."
  },
  {
    question: "Qual serviço AWS oferece monitoramento e métricas para recursos e aplicações?",
    options: ["AWS CloudTrail", "AWS Config", "Amazon CloudWatch", "AWS Inspector"],
    correct: 2,
    explanation: "O Amazon CloudWatch é um serviço de monitoramento que fornece dados e insights acionáveis para monitorar aplicações e otimizar recursos."
  },
  {
    question: "Qual dos seguintes é um benefício de um grupo de usuários no AWS IAM?",
    options: ["Permitir que os usuários tenham acesso total a todos os serviços", "Permitir o gerenciamento de permissões para cada usuário individualmente", "Simplificar o gerenciamento de permissões ao aplicar uma política a múltiplos usuários", "Fornecer acesso temporário a recursos"],
    correct: 2,
    explanation: "Os grupos do IAM permitem que você aplique permissões de forma centralizada a vários usuários, simplificando a gestão de acesso."
  },
  {
    question: "Qual serviço AWS pode ser usado para proteger sua infraestrutura contra ataques de negação de serviço distribuída (DDoS)?",
    options: ["AWS WAF", "Amazon GuardDuty", "AWS Shield", "Amazon Inspector"],
    correct: 2,
    explanation: "O AWS Shield é um serviço de proteção contra ataques DDoS que protege as aplicações que rodam na AWS."
  },
  {
    question: "Qual é a principal função do AWS CloudTrail?",
    options: ["Monitorar métricas de recursos e logs", "Registrar ações de API e eventos de usuário", "Fornecer uma rede de entrega de conteúdo", "Gerenciar identidades de usuário"],
    correct: 1,
    explanation: "O AWS CloudTrail monitora e registra ações de API, eventos e uso de serviços da AWS, o que é fundamental para auditoria de segurança e conformidade."
  },
  {
    question: "Qual dos seguintes serviços é uma ferramenta de 'Infraestrutura como Código'?",
    options: ["Amazon EC2", "AWS CloudFormation", "Amazon S3", "Amazon CloudWatch"],
    correct: 1,
    explanation: "O AWS CloudFormation permite que você defina e provisione a infraestrutura da AWS usando modelos, o que é a essência da 'Infraestrutura como Código'."
  },
  {
    question: "O que é um 'Amazon Machine Image' (AMI)?",
    options: ["Um volume de armazenamento", "Um modelo para iniciar uma instância do EC2", "Um servidor dedicado físico", "Um grupo de auto scaling"],
    correct: 1,
    explanation: "Uma AMI (Amazon Machine Image) é um modelo que contém a configuração de software para iniciar uma instância do Amazon EC2."
  },
  {
    question: "Qual serviço AWS é um banco de dados NoSQL totalmente gerenciado, escalável e rápido?",
    options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora"],
    correct: 2,
    explanation: "O Amazon DynamoDB é um serviço de banco de dados NoSQL rápido, totalmente gerenciado e sem servidor."
  },
  {
    question: "Qual é a principal função de uma 'Região' da AWS?",
    options: ["Para armazenar dados por longos períodos", "Para fornecer um único datacenter para alta disponibilidade", "Para agrupar várias Zonas de Disponibilidade", "Para servir como uma rede virtual isolada"],
    correct: 2,
    explanation: "Uma Região da AWS é um local físico no mundo onde a AWS agrupa vários datacenters, geralmente consistindo de múltiplas Zonas de Disponibilidade isoladas."
  },
  {
    question: "O que a 'Zona de Disponibilidade' na AWS se refere?",
    options: ["Um datacenter único", "Uma área geográfica global", "Um local físico com um ou mais datacenters isolados e redundantes", "Um serviço de rede privada"],
    correct: 2,
    explanation: "Uma Zona de Disponibilidade é um ou mais datacenters discretos com energia, rede e conectividade redundantes em uma Região da AWS."
  },
  {
    question: "Qual serviço AWS é um ambiente de desenvolvimento e implantação totalmente gerenciado para aplicações web e móveis?",
    options: ["Amazon EC2", "AWS CodeDeploy", "Amazon Elastic Beanstalk", "AWS Lambda"],
    correct: 2,
    explanation: "O Amazon Elastic Beanstalk gerencia a infraestrutura de implantação, permitindo que os desenvolvedores se concentrem no código da aplicação."
  },
  {
    question: "O que é um 'Grupo de Auto Scaling'?",
    options: ["Um grupo de usuários com as mesmas permissões", "Um grupo de servidores dedicados na AWS", "Uma ferramenta de monitoramento", "Um grupo de instâncias do EC2 com um limite mínimo e máximo de instâncias para escalabilidade"],
    correct: 3,
    explanation: "O Grupo de Auto Scaling garante que o número de instâncias do EC2 na sua aplicação aumente ou diminua automaticamente com base na demanda."
  },
  {
    question: "Qual é a principal vantagem de usar o AWS Consolidated Billing?",
    options: ["Pagar por cada conta individualmente", "Cobrar uma taxa extra para cada conta secundária", "Simplificar o faturamento ao combinar o uso de todas as contas em uma fatura", "Fornecer acesso a um plano de preço fixo"],
    correct: 2,
    explanation: "O faturamento consolidado, um recurso do AWS Organizations, combina o faturamento de várias contas em uma única fatura, o que simplifica a gestão."
  },
  {
    question: "Qual serviço AWS é um serviço de DNS (Domain Name System) altamente disponível e escalável?",
    options: ["Amazon Route 53", "AWS Direct Connect", "Amazon VPC", "AWS VPN"],
    correct: 0,
    explanation: "O Amazon Route 53 é um serviço de DNS que roteia o tráfego de usuários para a infraestrutura da AWS."
  },
  {
    question: "Qual serviço AWS pode ser usado para hospedar um site estático?",
    options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "AWS Lambda"],
    correct: 1,
    explanation: "O Amazon S3 é a escolha ideal para hospedar sites estáticos devido à sua alta disponibilidade e baixo custo."
  },
  {
    question: "O que é o 'Total Cost of Ownership' (TCO) na Nuvem AWS?",
    options: ["O custo de um único serviço da AWS", "Uma análise para comparar o custo de uma infraestrutura local com o custo de uma infraestrutura na nuvem", "O custo de um único servidor na AWS", "O custo de migração para a nuvem"],
    correct: 1,
    explanation: "O TCO é uma análise financeira usada para comparar o custo total de propriedade entre a execução de uma aplicação em um datacenter local versus a execução na Nuvem AWS."
  },
  {
    question: "Qual dos seguintes é um pilar do 'AWS Well-Architected Framework'?",
    options: ["Velocidade", "Confiabilidade", "Flexibilidade", "Simplicidade"],
    correct: 1,
    explanation: "A confiabilidade é um dos cinco pilares do AWS Well-Architected Framework, que se concentra em como construir sistemas resilientes e que se recuperam de falhas."
  },
  {
    question: "Qual serviço AWS oferece um banco de dados relacional gerenciado que torna a configuração e a operação mais simples?",
    options: ["Amazon S3", "Amazon DynamoDB", "Amazon RDS", "Amazon Redshift"],
    correct: 2,
    explanation: "O Amazon RDS (Relational Database Service) é o serviço de banco de dados relacional gerenciado da AWS que simplifica a administração do banco de dados, como backups e atualizações."
  },
  {
    question: "Qual serviço AWS é um serviço de computação sem servidor?",
    options: ["Amazon EC2", "Amazon SQS", "AWS Lambda", "Amazon EFS"],
    correct: 2,
    explanation: "O AWS Lambda permite que você execute código em resposta a eventos sem provisionar ou gerenciar servidores."
  },
  {
    question: "Qual é a principal responsabilidade do cliente sob o 'Modelo de Responsabilidade Compartilhada' da AWS?",
    options: ["A segurança da Nuvem", "A segurança da infraestrutura física", "A segurança 'na Nuvem' (dados e aplicações)", "A segurança de todas as camadas do sistema"],
    correct: 2,
    explanation: "A responsabilidade do cliente é a 'segurança na Nuvem', que inclui a gestão dos dados, aplicações, sistemas operacionais e configurações de rede."
  },
  {
    question: "Qual serviço AWS é um firewall de aplicação da web que ajuda a proteger aplicações contra explorações comuns da web?",
    options: ["AWS Shield", "Amazon GuardDuty", "AWS WAF", "Amazon Inspector"],
    correct: 2,
    explanation: "O AWS WAF (Web Application Firewall) protege as aplicações da web e APIs contra vulnerabilidades comuns da web."
  },
  {
    question: "Qual dos seguintes é um benefício de preço da Nuvem AWS?",
    options: ["Preços fixos e previsíveis", "Sem custos operacionais (OpEx)", "Pagar apenas pelo que você usa", "Nenhum custo, exceto para o suporte"],
    correct: 2,
    explanation: "O modelo de pagamento da AWS de 'pagamento conforme o uso' permite que você pague apenas pelos recursos que consome."
  },
  {
    question: "Qual serviço AWS pode ser usado para hospedar um site estático?",
    options: ["Amazon EC2", "Amazon RDS", "Amazon S3", "AWS Lambda"],
    correct: 2,
    explanation: "O Amazon S3 é a escolha ideal para hospedar sites estáticos devido à sua alta disponibilidade e baixo custo."
  },
  {
    question: "Qual serviço AWS oferece armazenamento de objetos escalável e durável?",
    options: ["Amazon EBS", "Amazon S3", "Amazon RDS", "Amazon Glacier"],
    correct: 1,
    explanation: "O Amazon S3 (Simple Storage Service) é um serviço de armazenamento de objetos altamente escalável e durável."
  },
  {
    question: "O que a 'Elasticidade' na Nuvem AWS se refere?",
    options: ["A capacidade de se mover rapidamente", "A capacidade de se recuperar de falhas", "A capacidade de expandir e contrair recursos com base na demanda", "A capacidade de gerenciar identidades"],
    correct: 2,
    explanation: "A elasticidade é a capacidade de um sistema de provisionar e desprovisionar recursos automaticamente, conforme a necessidade da carga de trabalho."
  },
  {
    question: "Qual serviço AWS oferece monitoramento e métricas para recursos e aplicações?",
    options: ["AWS CloudTrail", "AWS Config", "Amazon CloudWatch", "AWS Inspector"],
    correct: 2,
    explanation: "O Amazon CloudWatch é um serviço de monitoramento que fornece dados e insights acionáveis para monitorar aplicações e otimizar recursos."
  },
  {
    question: "Qual dos seguintes é um benefício de um grupo de usuários no AWS IAM?",
    options: ["Permitir que os usuários tenham acesso total a todos os serviços", "Permitir o gerenciamento de permissões para cada usuário individualmente", "Simplificar o gerenciamento de permissões ao aplicar uma política a múltiplos usuários", "Fornecer acesso temporário a recursos"],
    correct: 2,
    explanation: "Os grupos do IAM permitem que você aplique permissões de forma centralizada a vários usuários, simplificando a gestão de acesso."
  },
  {
    question: "Qual serviço AWS pode ser usado para proteger sua infraestrutura contra ataques de negação de serviço distribuída (DDoS)?",
    options: ["AWS WAF", "Amazon GuardDuty", "AWS Shield", "Amazon Inspector"],
    correct: 2,
    explanation: "O AWS Shield é um serviço de proteção contra ataques DDoS que protege as aplicações que rodam na AWS."
  },
  {
    question: "Qual é a principal função do AWS CloudTrail?",
    options: ["Monitorar métricas de recursos e logs", "Registrar ações de API e eventos de usuário", "Fornecer uma rede de entrega de conteúdo", "Gerenciar identidades de usuário"],
    correct: 1,
    explanation: "O AWS CloudTrail monitora e registra ações de API, eventos e uso de serviços da AWS, o que é fundamental para auditoria de segurança e conformidade."
  },
  {
    question: "Qual dos seguintes serviços é uma ferramenta de 'Infraestrutura como Código'?",
    options: ["Amazon EC2", "AWS CloudFormation", "Amazon S3", "Amazon CloudWatch"],
    correct: 1,
    explanation: "O AWS CloudFormation permite que você defina e provisione a infraestrutura da AWS usando modelos, o que é a essência da 'Infraestrutura como Código'."
  },
  {
    question: "O que é um 'Amazon Machine Image' (AMI)?",
    options: ["Um volume de armazenamento", "Um modelo para iniciar uma instância do EC2", "Um servidor dedicado físico", "Um grupo de auto scaling"],
    correct: 1,
    explanation: "Uma AMI (Amazon Machine Image) é um modelo que contém a configuração de software para iniciar uma instância do Amazon EC2."
  },
  {
    question: "Qual serviço AWS é um banco de dados NoSQL totalmente gerenciado, escalável e rápido?",
    options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora"],
    correct: 2,
    explanation: "O Amazon DynamoDB é um serviço de banco de dados NoSQL rápido, totalmente gerenciado e sem servidor."
  },
  {
    question: "Qual é a principal função de uma 'Região' da AWS?",
    options: ["Para armazenar dados por longos períodos", "Para fornecer um único datacenter para alta disponibilidade", "Para agrupar várias Zonas de Disponibilidade", "Para servir como uma rede virtual isolada"],
    correct: 2,
    explanation: "Uma Região da AWS é um local físico no mundo onde a AWS agrupa vários datacenters, geralmente consistindo de múltiplas Zonas de Disponibilidade isoladas."
  },
  {
    question: "O que a 'Zona de Disponibilidade' na AWS se refere?",
    options: ["Um datacenter único", "Uma área geográfica global", "Um local físico com um ou mais datacenters isolados e redundantes", "Um serviço de rede privada"],
    correct: 2,
    explanation: "Uma Zona de Disponibilidade é um ou mais datacenters discretos com energia, rede e conectividade redundantes em uma Região da AWS."
  },
  {
    question: "Qual serviço AWS é um ambiente de desenvolvimento e implantação totalmente gerenciado para aplicações web e móveis?",
    options: ["Amazon EC2", "AWS CodeDeploy", "Amazon Elastic Beanstalk", "AWS Lambda"],
    correct: 2,
    explanation: "O Amazon Elastic Beanstalk gerencia a infraestrutura de implantação, permitindo que os desenvolvedores se concentrem no código da aplicação."
  },
  {
    question: "O que é um 'Grupo de Auto Scaling'?",
    options: ["Um grupo de usuários com as mesmas permissões", "Um grupo de servidores dedicados na AWS", "Uma ferramenta de monitoramento", "Um grupo de instâncias do EC2 com um limite mínimo e máximo de instâncias para escalabilidade"],
    correct: 3,
    explanation: "O Grupo de Auto Scaling garante que o número de instâncias do EC2 na sua aplicação aumente ou diminua automaticamente com base na demanda."
  },
  {
    question: "Qual é a principal vantagem de usar o AWS Consolidated Billing?",
    options: ["Pagar por cada conta individualmente", "Cobrar uma taxa extra para cada conta secundária", "Simplificar o faturamento ao combinar o uso de todas as contas em uma fatura", "Fornecer acesso a um plano de preço fixo"],
    correct: 2,
    explanation: "O faturamento consolidado, um recurso do AWS Organizations, combina o faturamento de várias contas em uma única fatura, o que simplifica a gestão."
  },
  {
    question: "Qual serviço AWS é um serviço de DNS (Domain Name System) altamente disponível e escalável?",
    options: ["Amazon Route 53", "AWS Direct Connect", "Amazon VPC", "AWS VPN"],
    correct: 0,
    explanation: "O Amazon Route 53 é um serviço de DNS que roteia o tráfego de usuários para a infraestrutura da AWS."
  },
  {
    question: "Qual serviço AWS pode ser usado para hospedar um site estático?",
    options: ["Amazon EC2", "Amazon RDS", "Amazon S3", "AWS Lambda"],
    correct: 1,
    explanation: "O Amazon S3 é a escolha ideal para hospedar sites estáticos devido à sua alta disponibilidade e baixo custo."
  },
  {
    question: "O que é o 'Total Cost of Ownership' (TCO) na Nuvem AWS?",
    options: ["O custo de um único serviço da AWS", "Uma análise para comparar o custo de uma infraestrutura local com o custo de uma infraestrutura na nuvem", "O custo de um único servidor na AWS", "O custo de migração para a nuvem"],
    correct: 1,
    explanation: "O TCO é uma análise financeira usada para comparar o custo total de propriedade entre a execução de uma aplicação em um datacenter local versus a execução na Nuvem AWS."
  },
  {
    question: "Qual dos seguintes é um pilar do 'AWS Well-Architected Framework'?",
    options: ["Velocidade", "Confiabilidade", "Flexibilidade", "Simplicidade"],
    correct: 1,
    explanation: "A confiabilidade é um dos cinco pilares do AWS Well-Architected Framework, que se concentra em como construir sistemas resilientes e que se recuperam de falhas."
  },
  {
    question: "Qual serviço AWS oferece um banco de dados relacional gerenciado que torna a configuração e a operação mais simples?",
    options: ["Amazon S3", "Amazon DynamoDB", "Amazon RDS", "Amazon Redshift"],
    correct: 2,
    explanation: "O Amazon RDS (Relational Database Service) é o serviço de banco de dados relacional gerenciado da AWS que simplifica a administração do banco de dados, como backups e atualizações."
  },
  {
    question: "Qual serviço AWS é um serviço de computação sem servidor?",
    options: ["Amazon EC2", "Amazon SQS", "AWS Lambda", "Amazon EFS"],
    correct: 2,
    explanation: "O AWS Lambda permite que você execute código em resposta a eventos sem provisionar ou gerenciar servidores."
  },
  {
    question: "Qual é a principal responsabilidade do cliente sob o 'Modelo de Responsabilidade Compartilhada' da AWS?",
    options: ["A segurança da Nuvem", "A segurança da infraestrutura física", "A segurança 'na Nuvem' (dados e aplicações)", "A segurança de todas as camadas do sistema"],
    correct: 2,
    explanation: "A responsabilidade do cliente é a 'segurança na Nuvem', que inclui a gestão dos dados, aplicações, sistemas operacionais e configurações de rede."
  },
  {
    question: "Qual serviço AWS é um firewall de aplicação da web que ajuda a proteger aplicações contra explorações comuns da web?",
    options: ["AWS Shield", "Amazon GuardDuty", "AWS WAF", "Amazon Inspector"],
    correct: 2,
    explanation: "O AWS WAF (Web Application Firewall) protege as aplicações da web e APIs contra vulnerabilidades comuns da web."
  },
  {
    question: "Qual dos seguintes é um benefício de preço da Nuvem AWS?",
    options: ["Preços fixos e previsíveis", "Sem custos operacionais (OpEx)", "Pagar apenas pelo que você usa", "Nenhum custo, exceto para o suporte"],
    correct: 2,
    explanation: "O modelo de pagamento da AWS de 'pagamento conforme o uso' permite que você pague apenas pelos recursos que consome."
  },
  {
    question: "Qual serviço AWS pode ser usado para hospedar um site estático?",
    options: ["Amazon EC2", "Amazon RDS", "Amazon S3", "AWS Lambda"],
    correct: 2,
    explanation: "O Amazon S3 é a escolha ideal para hospedar sites estáticos devido à sua alta disponibilidade e baixo custo."
  },
  {
    question: "Qual serviço AWS oferece armazenamento de objetos escalável e durável?",
    options: ["Amazon EBS", "Amazon S3", "Amazon RDS", "Amazon Glacier"],
    correct: 1,
    explanation: "O Amazon S3 (Simple Storage Service) é um serviço de armazenamento de objetos altamente escalável e durável."
  },
  {
    question: "O que a 'Elasticidade' na Nuvem AWS se refere?",
    options: ["A capacidade de se mover rapidamente", "A capacidade de se recuperar de falhas", "A capacidade de expandir e contrair recursos com base na demanda", "A capacidade de gerenciar identidades"],
    correct: 2,
    explanation: "A elasticidade é a capacidade de um sistema de provisionar e desprovisionar recursos automaticamente, conforme a necessidade da carga de trabalho."
  },
  {
    question: "Qual serviço AWS oferece monitoramento e métricas para recursos e aplicações?",
    options: ["AWS CloudTrail", "AWS Config", "Amazon CloudWatch", "AWS Inspector"],
    correct: 2,
    explanation: "O Amazon CloudWatch é um serviço de monitoramento que fornece dados e insights acionáveis para monitorar aplicações e otimizar recursos."
  },
  {
    question: "Qual dos seguintes é um benefício de um grupo de usuários no AWS IAM?",
    options: ["Permitir que os usuários tenham acesso total a todos os serviços", "Permitir o gerenciamento de permissões para cada usuário individualmente", "Simplificar o gerenciamento de permissões ao aplicar uma política a múltiplos usuários", "Fornecer acesso temporário a recursos"],
    correct: 2,
    explanation: "Os grupos do IAM permitem que você aplique permissões de forma centralizada a vários usuários, simplificando a gestão de acesso."
  },
  {
    question: "Qual serviço AWS pode ser usado para proteger sua infraestrutura contra ataques de negação de serviço distribuída (DDoS)?",
    options: ["AWS WAF", "Amazon GuardDuty", "AWS Shield", "Amazon Inspector"],
    correct: 2,
    explanation: "O AWS Shield é um serviço de proteção contra ataques DDoS que protege as aplicações que rodam na AWS."
  },
  {
    question: "Qual é a principal função do AWS CloudTrail?",
    options: ["Monitorar métricas de recursos e logs", "Registrar ações de API e eventos de usuário", "Fornecer uma rede de entrega de conteúdo", "Gerenciar identidades de usuário"],
    correct: 1,
    explanation: "O AWS CloudTrail monitora e registra ações de API, eventos e uso de serviços da AWS, o que é fundamental para auditoria de segurança e conformidade."
  },
  {
    question: "Qual dos seguintes serviços é uma ferramenta de 'Infraestrutura como Código'?",
    options: ["Amazon EC2", "AWS CloudFormation", "Amazon S3", "Amazon CloudWatch"],
    correct: 1,
    explanation: "O AWS CloudFormation permite que você defina e provisione a infraestrutura da AWS usando modelos, o que é a essência da 'Infraestrutura como Código'."
  },
  {
    question: "O que é um 'Amazon Machine Image' (AMI)?",
    options: ["Um volume de armazenamento", "Um modelo para iniciar uma instância do EC2", "Um servidor dedicado físico", "Um grupo de auto scaling"],
    correct: 1,
    explanation: "Uma AMI (Amazon Machine Image) é um modelo que contém a configuração de software para iniciar uma instância do Amazon EC2."
  },
  {
    question: "Qual serviço AWS é um banco de dados NoSQL totalmente gerenciado, escalável e rápido?",
    options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora"],
    correct: 2,
    explanation: "O Amazon DynamoDB é um serviço de banco de dados NoSQL rápido, totalmente gerenciado e sem servidor."
  },
  {
    question: "Qual é a principal função de uma 'Região' da AWS?",
    options: ["Para armazenar dados por longos períodos", "Para fornecer um único datacenter para alta disponibilidade", "Para agrupar várias Zonas de Disponibilidade", "Para servir como uma rede virtual isolada"],
    correct: 2,
    explanation: "Uma Região da AWS é um local físico no mundo onde a AWS agrupa vários datacenters, geralmente consistindo de múltiplas Zonas de Disponibilidade isoladas."
  },
  {
    question: "O que a 'Zona de Disponibilidade' na AWS se refere?",
    options: ["Um datacenter único", "Uma área geográfica global", "Um local físico com um ou mais datacenters isolados e redundantes", "Um serviço de rede privada"],
    correct: 2,
    explanation: "Uma Zona de Disponibilidade é um ou mais datacenters discretos com energia, rede e conectividade redundantes em uma Região da AWS."
  },
  {
    question: "Qual serviço AWS é um ambiente de desenvolvimento e implantação totalmente gerenciado para aplicações web e móveis?",
    options: ["Amazon EC2", "AWS CodeDeploy", "Amazon Elastic Beanstalk", "AWS Lambda"],
    correct: 2,
    explanation: "O Amazon Elastic Beanstalk gerencia a infraestrutura de implantação, permitindo que os desenvolvedores se concentrem no código da aplicação."
  },
  {
    question: "O que é um 'Grupo de Auto Scaling'?",
    options: ["Um grupo de usuários com as mesmas permissões", "Um grupo de servidores dedicados na AWS", "Uma ferramenta de monitoramento", "Um grupo de instâncias do EC2 com um limite mínimo e máximo de instâncias para escalabilidade"],
    correct: 3,
    explanation: "O Grupo de Auto Scaling garante que o número de instâncias do EC2 na sua aplicação aumente ou diminua automaticamente com base na demanda."
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
