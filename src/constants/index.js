export const GROUP_QUESTIONS = [
  {
    title: "Finalidade",
    questions: [
      "É utilizada uma base jurídica justificando cada atividade de tratamento de dados?",
      "A empresa informa o que vai fazer, de fato, com os dados coletados?",
      "É utilizada alguma salvaguarda para justificar a transferência internacional de dados pessoais?",
    ],
  },
  {
    title: "Adequação",
    questions: [
      "O tratamento de dados está adequado aos direitos dos titulares?",
      "A finalidade informada ao titular na hora de coletar o dado, tem sentido no contexto do negócio?",
    ],
  },
  {
    title: "Necessidade",
    questions: [
      "Os dados pessoais coletados são os mínimo necessário para a entrega do produto/serviço ao titular de dados?",
      "Excluindo-se a situação de responsabilidade fiscal, todas as informações pessoais são apagadas após o término do tratamento dos dados?",
    ],
  },
  {
    title: "Não discriminação",
    questions: [
      "Você garante que o tratamento nunca é realizado para fins ilegais, abusivos ou discriminatórios?",
    ],
  },
  {
    title: "Qualidade dos dados",
    questions: [
      "O titular dos dados consegue atualizar, completar ou apagar dados incoerentes sobre ele, que tenham sido coletados pela sua empresa?",
      "A consulta sobre a forma e a duração do tratamento dos dados é facilitada e gratuita ao titular dos dados?",
      "Existem meios de controle para verificar periodicamente a precisão e a qualidade dos dados?",
      "O titular consegue rever e revogar os termos de uso ou políticas de privacidade que tenha aceitado?",
      "O titular pode solicitar anonimização dos seus dados?",
    ],
  },
  {
    title: "Transparência",
    questions: [
      "Possui política de privacidade para usuários/clientes? É apresentado aviso de privacidade ou termos de uso em seu sistema?",
      "Os usuários são informados de quem está a coletando/usando seus dados e para que seus dados estão sendo coletados?",
      "As informações sobre o tratamento dos dados dos titulares são disponibilizadas a eles de forma clara, precisa, adequada e verdadeira?",
    ],
  },
  {
    title: "Livre acesso",
    questions: [
      "Ao compartilhar dados pessoais com terceiros, o titular dos dados é informado?",
      "A empresa possui procedimentos e/ou tecnologias para atender as solicitações dos titulares?",
      "Os usuários são informados como relatar problemas/preocupações?",
    ],
  },
  {
    title: "Prevenção",
    questions: [
      "Em caso de exclusão de dados, os dados são destruídos de forma segura e efetiva?",
      "A empresa já adotou medidas prévias para evitar a ocorrência de danos em virtude do tratamento de dados pessoais?",
      "Em caso de dados de menores, são aplicadas ações necessárias para a proteção deste tipo de dado pessoal?",
      "Em caso de dados pessoais sensíveis, são aplicadas ações necessárias para a proteção deste tipo de dado pessoal?",
    ],
  },
  {
    title: "Segurança",
    questions: [
      "Possui política interna de segurança da informação? Foram incorporados requisitos da LGPD nas políticas internas?",
      "Seus colaboradores tem conhecimento sobre LGPD e os direitos dos titulares?",
      "Termos de confidencialidade foram assinados pelos funcionários da empresa (ou terceirizados) para que estes se comprometam a não divulgar informações confidenciais que envolvam dados pessoais?",
      "O gerenciamento de acesso e identidade é feito de acordo com a função e atividade do colaborador?",
      "Existe proteção física no armazenamento de dados contidos em documentos físicos?",
      "Faz o gerenciamento de incidentes de segurança e privacidade?",
      "Utiliza criptografia na comunicação e armazenamento de dados?",
      "Existe proteção contra malware?",
      "Faz análise de vulnerabilidade?",
      "Os dispositivos móveis de uso privado são separados dos dispositivos de uso institucional?",
    ],
  },
  {
    title: "Responsabilização",
    questions: [
      "Foi nomeado um encarregado de proteção de dados pessoais?",
      "Você garante a notificação de violação de dados pessoais para autoridades de proteção de dados e titulares de dados?",
    ],
  },
];

export const GROUP_TITLES = GROUP_QUESTIONS.map((g) => g.title);