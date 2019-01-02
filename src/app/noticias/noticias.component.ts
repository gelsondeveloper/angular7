import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  noticias: any = [
    {
      titulo: 'Archer Mangueira: Angola poderá ver o PIB crescer em 2019',
      subtitulo: `O Ministro das Finanças, Archer Mangueira,
                  manifestou-se hoje confiante quanto à retoma do
                  crescimento económico em 2019, após os anos adversos
                  do PIB de Angola. Archer Mangueira garantiu que o Programa
                  de Financiamento Ampliado (EFF), assinado entre Angola e o
                  Fundo Monetário Internacional, visa implementar o Programa de Estabilização Macroeconómica (PEM)`,
      autor: 'Minfin',
      data: '27/12/2018',
      imagem: 'http://www.ucm.minfin.gov.ao/cs/groups/public/documents/document/zmlu/mdu2/~edisp/minfin056706.jpg',
      texto: `
        <p>
          Como poderão verificar, após três anos de recessão económica, Angola poderá ver o seu PIB a crescer em 2019, ainda que seja a um nível inferior às nossas aspirações. De qualquer forma, a prioridade está agora virada não tanto para a velocidade do crescimento, mas para a sua sustentabilidade”, afirmou o Ministro em entrevista exclusiva ao diário Jornal de Angola, publicada nesta quinta-feira, 27 de Dezembro.
        </p>
        <p>
          Archer Mangueira disse que o programa de Financiamento Ampliado é fundamental para o processo de estabilização Macroeconómica do país, no sentido de apoiar e reforçar a efectivação de reformas económicas e financeiras promotoras do Investimento privado já iniciadas pelo PEM. Os elementos de austeridade, defendeu, estarão limitados ao estritamente necessário para o reequilíbrio das contas fiscais, monetárias e externas, garantindo a sua sustentabilidade.
        </p>
      `,
      activo: true
    },
    {
      titulo: 'Minfin publica Instruções de Elaboração do OGE para 2019 e capacita gestores',
      subtitulo: `A Direcção Nacional do Orçamento de Estado tornou públicas, recentemente, as Instruções para a Elaboração do OGE, cujo conteúdo integra o conjunto de regras, procedimentos e metodologias orientadoras do processo de estudo e preparação da proposta orçamental para o exercício económico de 2019`,
      autor: 'Minfin',
      data: '25/05/2018',
      imagem: 'http://www.ucm.minfin.gov.ao/cs/groups/public/documents/document/nda1/ntqu/~edisp/edificiodomi250518040554.jpg.jpg',
      texto: `
        <p>
          Nesta senda, o MINFIN realiza nesta sexta-feira, 25 de Maio e na próxima segunda-feira, 28 de Maio, nas instalações do Instituto de Formação em Finanças Públicas, INFORFIP, em Cacuaco, uma formação dirigida aos Secretários Gerais e Directores do GEPE dos Órgãos da Administração Local e Delegações Provinciais de Finanças aos Secretários Gerais e Directores do GEPE dos Órgãos da Administração Central do Estado nas datas respectivas.
        </p>
        <p>
         Assim, após a publicação das instruções, o documento segue para as fases de Elaboração do Orçamento Preliminar com apreciação MEP, Atribuição do Limite de Despesa, Discussão do Limite de Despesa, Aprovação pela Comissão Económica, Elaboração da Proposta Orçamental, Apreciação da Proposta Pelo MEP e Conselhos de Auscultação, sendo por fim, submetida à Assembleia Nacional até ao dia 31 de Outubro de cada ano, à luz dos pressupostos plasmados na Lei 15/10, de 14 de Julho, Lei do Orçamento Geral do Estado.
        </p>
      `,
      activo: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
