import { Keyword } from "../components/Keyword";
import { EXPLANATIONS } from "../contexts/explanations";

export const GROUP_QUESTIONS = [
  {
    title: "Finalidade",
    questions: [
      () => {
        return (
          <>
            É utilizada uma{" "}
            <Keyword explanation={EXPLANATIONS.LEGAL_BASIS}>
              base jurídica
            </Keyword>{" "}
            justificando cada atividade de{" "}
            <Keyword explanation={EXPLANATIONS.DATA_TREATMENT}>
              tratamento de dados
            </Keyword>{" "}
            ?
          </>
        );
      },
      () => (
        <>
          A empresa informa{" "}
          <Keyword explanation={EXPLANATIONS.WHAT_TO_DO_INDEED}>
            o que vai fazer, de fato
          </Keyword>
          , com os dados coletados?
        </>
      ),
      () => (
        <>
          É utilizada alguma salvaguarda para justificar a{" "}
          <Keyword
            explanation={EXPLANATIONS.INTERNATIONAL_TRANSFER_OF_PERSONAL_DATA}
          >
            transferência internacional de dados pessoais
          </Keyword>
          ?
        </>
      ),
    ],
  },
  {
    title: "Adequação",
    questions: [
      () => (
        <>
          A finalidade informada ao titular na hora de coletar o dado, tem{" "}
          <Keyword explanation={EXPLANATIONS.BUSINESS_CONTEXT}>
            sentido no contexto do negócio
          </Keyword>
          ?
        </>
      ),
    ],
  },
  {
    title: "Necessidade",
    questions: [
      () => (
        <>
          Os dados pessoais coletados são os{" "}
          <Keyword explanation={EXPLANATIONS.MINIMUM_NECESSARY}>
            mínimo necessário
          </Keyword>{" "}
          para a entrega do produto/serviço ao titular de dados?
        </>
      ),
      () => (
        <>
          Excluindo-se a situação de{" "}
          <Keyword explanation={EXPLANATIONS.FISCAL_RESPONSIBILITY}>
            responsabilidade fiscal
          </Keyword>
          , todas as informações pessoais são apagadas após o término do
          tratamento dos dados?
        </>
      ),
    ],
  },
  {
    title: "Não discriminação",
    questions: [
      () => (
        <>
          Você garante que o tratamento nunca é realizado para fins ilegais,
          abusivos ou{" "}
          <Keyword explanation={EXPLANATIONS.DISCRIMINATE}>
            discriminatórios
          </Keyword>
          ?
        </>
      ),
    ],
  },
  {
    title: "Qualidade dos dados",
    questions: [
      () => (
        <>
          O titular dos dados consegue atualizar, completar ou apagar dados
          incoerentes sobre ele, que tenham sido coletados pela sua empresa?
        </>
      ),
      () => (
        <>
          A consulta sobre a forma e a duração do tratamento dos dados é
          facilitada e gratuita ao titular dos dados?
        </>
      ),
      () => (
        <>
          Existem meios de controle para verificar periodicamente a precisão e a
          qualidade dos dados?
        </>
      ),
      () => (
        <>
          O titular consegue rever e revogar os termos de uso ou políticas de
          privacidade que tenha aceitado?
        </>
      ),
      () => <>O titular pode solicitar anonimização dos seus dados?</>,
    ],
  },
  {
    title: "Transparência",
    questions: [
      () => (
        <>
          Possui política de privacidade para usuários/clientes? É apresentado
          aviso de privacidade ou termos de uso em seu sistema?
        </>
      ),
      () => (
        <>
          Os usuários são informados de quem está a coletando/usando seus dados
          e para que seus dados estão sendo coletados?
        </>
      ),
      () => (
        <>
          As informações sobre o tratamento dos dados dos titulares são
          disponibilizadas a eles de forma clara, precisa, adequada e
          verdadeira?
        </>
      ),
    ],
  },
  {
    title: "Livre acesso",
    questions: [
      () => (
        <>
          Ao compartilhar dados pessoais com terceiros, o titular dos dados é
          informado?
        </>
      ),
      () => (
        <>
          A empresa possui procedimentos e/ou tecnologias para atender as
          solicitações dos titulares?
        </>
      ),
      () => (
        <>Os usuários são informados como relatar problemas/preocupações?</>
      ),
    ],
  },
  {
    title: "Prevenção",
    questions: [
      () => (
        <>
          Em caso de exclusão de dados, os dados são destruídos de forma segura
          e efetiva?
        </>
      ),
      () => (
        <>
          A empresa já adotou medidas prévias para evitar a ocorrência de danos
          em virtude do tratamento de dados pessoais?
        </>
      ),
      () => (
        <>
          Em caso de dados de menores e de dados pessoais sensíveis, são
          aplicadas ações necessárias para a proteção deste tipo de dado
          pessoal?
        </>
      ),
    ],
  },
  {
    title: "Segurança",
    questions: [
      () => (
        <>
          Possui política interna de segurança da informação? Foram incorporados
          requisitos da LGPD nas políticas internas?
        </>
      ),
      () => (
        <>
          Seus colaboradores tem conhecimento sobre LGPD e os direitos dos
          titulares?
        </>
      ),
      () => (
        <>
          Termos de confidencialidade foram assinados pelos funcionários da
          empresa (ou terceirizados) para que estes se comprometam a não
          divulgar informações confidenciais que envolvam dados pessoais?
        </>
      ),
      () => (
        <>
          O gerenciamento de acesso e identidade é feito de acordo com a função
          e atividade do colaborador?
        </>
      ),
      () => (
        <>
          Existe proteção física no armazenamento de dados contidos em
          documentos físicos?
        </>
      ),
      () => <>Faz o gerenciamento de incidentes de segurança e privacidade?</>,
      () => <>Utiliza criptografia na comunicação e armazenamento de dados?</>,
      () => <>Existe proteção contra malware?</>,
      () => <>Faz análise de vulnerabilidade?</>,
      () => (
        <>
          Os dispositivos móveis de uso privado são separados dos dispositivos
          de uso institucional?
        </>
      ),
    ],
  },
  {
    title: "Responsabilização",
    questions: [
      () => (
        <>
          Foi nomeado um{" "}
          <Keyword explanation={EXPLANATIONS.IN_CHARGE}>encarregado</Keyword> de
          proteção de dados pessoais?
        </>
      ),
      () => (
        <>
          Você garante a notificação de violação de dados pessoais para
          autoridades de proteção de dados e titulares de dados?
        </>
      ),
    ],
  },
];

export const GROUP_TITLES = GROUP_QUESTIONS.map((g) => g.title);
