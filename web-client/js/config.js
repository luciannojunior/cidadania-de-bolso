const app = angular.module('cidadaniaApp', ['ngMaterial', 'ui.router', 'firebase']);

var config = {
    apiKey: "AIzaSyBPJ_KHIW3ltYAT5wy966JXB8U6VpsFCKM",
    authDomain: "cidadania-de-bolso.firebaseapp.com",
    databaseURL: "https://cidadania-de-bolso.firebaseio.com",
    projectId: "cidadania-de-bolso",
    storageBucket: "cidadania-de-bolso.appspot.com",
    messagingSenderId: "1079420002785"
  };
  firebase.initializeApp(config);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function ($stateProvider, $locationProvider, $urlRouterProvider) {
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',

                templateUrl: 'view/tags.html',
                controller: 'HomeController'
            })
            .state('lei', {
                url: '/lei/:leiId',
                templateUrl: 'view/detalhesLei.html',
                controller: 'leiController as leiCtrl',
                resolve: {
                    leiId: ($stateParams) => {
                        return $stateParams.leiId;
                    }
                }
            })
            .state('leisPorTag', {
                url: '/leisPorTag/:tag',
                templateUrl: 'view/leisBuscadas.html',
                controller: 'LeisPorTagController as vm',
                resolve: {
                    tag: ($stateParams) => {
                        return $stateParams.tag;
                    }
                }
            })
            .state('leisPorBusca', {
                url: '/leisPorBusca/:busca',
                templateUrl: 'view/leisBuscadas.html',
                controller: 'LeisPorBuscaController as vm',
                resolve: {
                    busca: ($stateParams) => {
                        return $stateParams.busca;
                    }
                }
            });
    }]);

app.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
            console.log(event, error);
        });
    
    $rootScope.colors = {
        cardLei: { background: 'grey-300' },
        curtir: { background: 'light-green-A700' },
        descurtir: { background: 'red-A700' },
        botao: { background: 'grey-300' },
        background: { background: 'grey-500' } 
    };
}]);

/// MOCK
const leis = {};

function criarLei(leiId) {
    if (leis[leiId]) {
        return leis[leiId];
    }
    const lei = {
        nome: "Nome genérico ",
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo sed lectus varius dictum eget nec elit. Quisque        faucibus viverra dui non molestie. Donec pretium mi lacus, quis varius est tincidunt at. Mauris tincidunt nulla non velit varius posuere.Integer eu auctor turpis. Etiam quis porttitor ex, non volutpat metus. In hac habitasse platea dictumst. Donec malesuada blandit pretium. Cras volutpat ut erat sed ultricies.Sed blandit justo vel arcu lacinia, quis ultricies leo tincidunt.',
        upVotes: 0,
        downVotes: 0,
        tags: [],
        $id: leiId || Math.round(Math.random() * 1000)
    };
    lei.nome += lei.$id;
    leis[lei.$id] = lei;
    return lei;
}

let a = [];

function criarLeis() {
    if (a.length > 0) {
        return a;
    }
    a = [criarLei(),criarLei(),criarLei(),criarLei(),criarLei(),criarLei(),criarLei(),criarLei()];
    return a;
}

var bruto = {
    "-KmHzoWtk3GKju_PTmGV" : {
      "downVotes" : 0,
      "tags" : [ "consumidor", " restaurante", " comanda" ],
      "texto" : "Não. A responsabilidade sempre será do estabelecimento de acompanhar a comanda.\n\nEla deve servir apenas para o cliente saber qual o valor de sua compra",
      "titulo" : "Posso ser cobrado por perder a comanda em restaurante?",
      "upVotes" : 0
    },
    "-KmI-A8n0IrIdS4cmDc2" : {
      "downVotes" : 0,
      "tags" : [ "supermecado", " preco", " vencido" ],
      "texto" : "Não. adokasdoasd",
      "titulo" : "O supermercado pode vender produtos pertos de vencer com preço diferente?",
      "upVotes" : 0
    },
    "-KmI2T187GNNQbcY0IkV" : {
      "downVotes" : 0,
      "tags" : [ "Redes Sociais", " Prisão Arbitrária", " Polícia Militar" ],
      "texto" : "A Constituição Federal Brasileira  assegura a liberdade de expressão como um direito fundamental do cidadão. Logo,  manifestações de insatisfação  com conteúdo crítico dirigido à órgãos ou servidores, desde que não ofensivo (calúnia, injúria ou difamação) são permitidas.",
      "titulo" : "Postar críticas à Polícia Militar nas redes sociais não pode ser pretexto para prisão.",
      "upVotes" : 0
    },
    "-KmI3Dn83MwPpNdmYnwt" : {
      "downVotes" : 0,
      "tags" : [ "consumidor", "venda casada" ],
      "texto" : "Você quer passar só alguns trocados no crédito ou no débito e o estabelecimento negou? Quer parcelar e a loja não deixou? Exija seu direito. Está no Código de Defesa do Consumidor e, em São Paulo, até na lei: é abusivo exigir um valor mínimo para compras no cartão de débito ou de crédito.\n\nTodas as compras devem ser tratadas com igualdade pelo vendedor – não importa o valor, o produto ou quem está comprando. Além disso, ao condicionar a compra a um valor mínimo, o estabelecimento induz o consumidor a comprar mais, o que pode ser considerado venda casada.\n\nFonte: http://exame.abril.com.br/seu-dinheiro/a-loja-pode-exigir-um-valor-minimo-para-compras-no-cartao/     acessado em: 10/06/2017",
      "titulo" : "A loja pode exigir um valor mínimo para compras no cartão?",
      "upVotes" : 0
    },
    "-KmI45B7FDzcvqYUAC7B" : {
      "downVotes" : 0,
      "tags" : [ "consumidor", "cobranças" ],
      "texto" : "O consumidor tem direito à devolução em dobro do valor cobrado indevidamente apenas se comprovar a má-fé do autor da cobrança. Essa é a interpretação do Superior Tribunal de Justiça (STJ) para julgar casos que envolvam a aplicação do artigo 42 do Código de Defesa do Consumidor (CDC), que prevê essa cobrança, acrescida de juros e correção monetária.\n\nFonte: https://oglobo.globo.com/economia/defesa-do-consumidor/stj-consumidor-so-tem-direito-ao-dobro-do-valor-cobrado-indevidamente-se-comprovar-ma-fe-18572168#ixzz4jccruhgZ \nstest       acesso em:  10/06/2017",
      "titulo" : "Consumidor tem direito a pagamento em dobro do valor cobrado indevidamente?",
      "upVotes" : 0
    },
    "-KmI5TddznstQKf9jiJy" : {
      "downVotes" : 0,
      "tags" : [ "Integridade do Acusado", " Arbitrariedade Policial", " Uso de Algemas" ],
      "texto" : "O cidadão só poderá ser algemado em caso de resistência/fuga indevida ou quando  colocar sua integridade física ou de terceiro  em perigo pois, ninguém poderá ser submetido a tratamento cruel ou degradante. O uso da algemas deve ser justificado por escrito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade da prisão ou do ato processual a que se refere, sem prejuízo da responsabilidade civil do Estado.  \nFundamento: Artigo.  5, III da CF/88 c/c Súmula Vinculante 11 do STF",
      "titulo" : "Uso de algemas não pode ser pretexto para defesa da integridade do acusado.",
      "upVotes" : 0
    },
    "-KmI5lZKQ1S_rZYULENB" : {
      "downVotes" : 0,
      "tags" : [ "consumidor", "multa" ],
      "texto" : "A prática é considerada ilegal e abusiva pelo Código de Defesa do Consumidor. Isto porque o estabelecimento comercial não pode transferir ao consumidor a responsabilidade pelo controle de suas vendas. \n\nFonte: http://www.procon.pr.gov.br/modules/conteudo/conteudo.php?conteudo=565     acesso em: 10/06/2017",
      "titulo" : "O cliente não pode ser forçado a pagar multa por perda de comanda de consumo",
      "upVotes" : 0
    },
    "-KmI7FhnTdW4sddIBRMg" : {
      "downVotes" : 0,
      "tags" : [ "consumidor", "compras", "online" ],
      "texto" : "O comprador têm 7(sete) dias para se arrepender do produto ou do serviço que chega até suas dependências.\n\nPrevisto no artigo 49 do Código de Defesa do Consumidor, quem adquirir, fora dos estabelecimentos comerciais convencionais, produtos ou serviços, pode mudar de ideia, sem ter que justificar o porquê.\n\nFonte: https://juridicocerto.com/p/angelica-bonifacio/artigos/o-consumidor-tem-7-dias-de-arrependimento-2090    acesso em: 10/06/2017",
      "titulo" : "Consumidor tem até 7 dias para se arrepender de uma compra feita online ou pelo celular",
      "upVotes" : 0
    },
    "-KmICac3pd-b9-efLEhp" : {
      "downVotes" : 0,
      "tags" : [ "consumidor", "estacionamento" ],
      "texto" : "Súmula 130:  A empresa responde, perante o cliente, pela reparação de dano ou furto de veículo ocorridos em seu estacionamento.\n\nFonte: http://www.coad.com.br/busca/detalhe_16/753/Sumulas_e_enunciados   acesso em: 10/06/2017",
      "titulo" : "Estacionamentos são responsáveis pelo itens deixados no interior dos carros",
      "upVotes" : 0
    },
    "-KmIEYRyT2K7x3JUkXG-" : {
      "downVotes" : 0,
      "tags" : [ "consumidor", "compras", "pagamento", "cartão" ],
      "texto" : "Compras realizadas com cartão de crédito em uma única cobrança a ser paga no vencimento do cartão, são consideradas à vista e, dá ao consumidor o direito a usufruir de qualquer benefício concedido para o pagamento com dinheiro ou cartão de débito. Outro fator a ser considerado é que qualquer taxa cobrada pela administradora de cartão deve ser paga pelo lojista.\n\nFonte: http://www.sosconsumidor.com.br/noticia_ler-36746,direitos-desconhecidos-mas-que-sao-garantidos-ao-consumidor.html    acesso em: 10/06/2017",
      "titulo" : "Pagamento com cartão de crédito à vista",
      "upVotes" : 0
    },
    "-KmIF7L9dpwMi1QVnrBa" : {
      "downVotes" : 0,
      "tags" : [ "Nome Social", " Transexual", " Travesti", " GLBTS", " Nome Civil", " Documento de Identificação" ],
      "texto" : "Sim. Infelizmente, essa alteração não poderá ser feita em cartório devido a ausência de uma lei que defina os procedimentos da alteração dos documentos para pessoas  LGBT (lésbicas, gays, bissexuais, transexuais e transgêneros). Deste modo, a alteração deve ser requerida por via judicial.",
      "titulo" : "Posso alterar meu NOME CIVIL  por NOME SOCIAL nos documentos públicosolicitados de identificação?",
      "upVotes" : 0
    },
    "-KmIIcZWX7YX2_j4fu4H" : {
      "downVotes" : 0,
      "tags" : [ "Servidor Público", " Nome Social", " Decreto Federal" ],
      "texto" : "Os servidores publicos federais podem usar nome social, pois, os órgãos e entidades da administração pública federal direta, autárquica e fundacional devem adotar o nome social da pessoa transexual ou travesti em seus atos e procedimentos (Crachás, DOU, Folha de pagamento e etc.) conforme o Decreto Federal 8727/2016. A pessoa poderá a qualquer momento requerer a inclusão de seu nome social em documentos oficiais e registros dos sistemas de informações da administração pública federal. No entanto, esse direito não  é garantido a servidores estaduais e municipais. Assim, tais servidores devem consultar a legislação local.",
      "titulo" : "Servidores públicos podem usar NOME SOCIAL?",
      "upVotes" : 0
    },
    "-KmILYN7SOEqsn7ZG5FI" : {
      "downVotes" : 0,
      "tags" : [ "" ],
      "texto" : "Sim. A identidade psicossocial prevalece sobre a biológica, não importando, para efeitos do registro civil, se a cirurgia de redesignação sexual (CRS), também conhecida como cirurgia de mudança de gênero/sexo, tenha sido feita ou não. O entendimento jurisprudencial dominante é o de que a individualização jurídica deve acompanhar a individualização fática,pois o apego à lei não pode prevalecer à Justiça.",
      "titulo" : "Posso requer alteração de NOME SOCIAL sem ter feito cirurgia de mudança de sexo?",
      "upVotes" : 0
    },
    "-KmIOPPNocGq3VcaMof8" : {
      "downVotes" : 0,
      "tags" : [ "SUS", " Cirurgia de redesignação Sexual", "" ],
      "texto" : "Desde 2008, o SUS oferece, gratuitamente, cirurgias e procedimentos ambulatoriais para pacientes que precisam fazer a redesignação sexual. Entre 2008 e 2016, ao todo, foram feitos 349 procedimentos hospitalares e 13.863 procedimentos ambulatoriais relacionados ao processo transexualizador segundo dados do Ministério da Saúde.",
      "titulo" : "Posso fazer a cirurgia de redesignação sexual pelo SUS?",
      "upVotes" : 0
    },
    "-KmIQ_4F8KD7YRC569Td" : {
      "downVotes" : 0,
      "tags" : [ "SUS", " Falta de Vaga", " Ausência de Atendimento", " Direito à  Saúde" ],
      "texto" : "Os cidadãos podem ingressar na Justiça individualmente, contratando um advogado particular, ou  recorrendo à assistência jurídica gratuita (Defensoria Pública). O Ministério Público também pode representar o cidadão judicialmente, o que pode ser feito ainda por meio de uma associação ou entidade com legitimidade para propor ações judiciais e que tenha entre as suas finalidades, descritas no seu estatuto, a defesa da saúde ou da cidadania.",
      "titulo" : "Não consigo vaga em hospital público. Como posso fazer valer o meu direito ao SUS?",
      "upVotes" : 0
    },
    "-KmIkEG9jrtZTrErjblT" : {
      "downVotes" : 0,
      "tags" : [ "consumidor", "troca", " produto", "defeito" ],
      "texto" : "Alguns estabelecimentos fixam que não aceitam trocas de produtos que estão em promoção ou liquidação, porém o consumidor tem o direito de trocar produtos quando estes apresentam qualquer defeito ou vício. O consumidor só precisa ficar atento às datas, pois ele tem 30 dias para registrar uma reclamação quando se trata de produtos duráveis e 90 para os não duráveis.\n\nFonte: http://www.cdlvitoria.com.br/17-direitos-que-comerciantes-e-consumidores-tem-e-nao-sabem/    acesso em: 10/06/2017",
      "titulo" : "Direito a troca de produtos com defeito mesmo em promoções",
      "upVotes" : 0
    },
    "-KmIklC2LSNsttFVStTW" : {
      "downVotes" : 0,
      "tags" : [ "consumidor", "produtos", "lacrados" ],
      "texto" : "O consumidor que compra produtos lacrados tem direito a ter uma amostra do produto, pois ele deve saber o que está comprando.\n\nFonte: http://www.cdlvitoria.com.br/17-direitos-que-comerciantes-e-consumidores-tem-e-nao-sabem/   acesso em: 10/06/2017",
      "titulo" : "Amostra de produtos lacrados",
      "upVotes" : 0
    },
    "-KmIl5zV7aWvhx7-WqXb" : {
      "downVotes" : 0,
      "tags" : [ "consumidores", "vicio", "oculto", "produto" ],
      "texto" : "Quando se trata dos vícios ocultos, ou os de difícil identificação, o consumidor tem direito ao reparo até o fim da vida útil do produto, e não até o fim do prazo de garantia.\n\nFonte: http://www.cdlvitoria.com.br/17-direitos-que-comerciantes-e-consumidores-tem-e-nao-sabem/     acesso em: 10/06/2017",
      "titulo" : "Reparação de falha em vício oculto até o fim da vida útil do produto",
      "upVotes" : 0
    },
    "-KmIm0UavDJB6uML8XgZ" : {
      "downVotes" : 0,
      "tags" : [ "comerciantes", "recusa", "troca", "mau", "uso" ],
      "texto" : "O comerciante tem o direito de recusar a troca ou o cancelamento da venda quando o produto ou serviço apresenta algum defeito decorrente de mau uso.\n\nFonte: http://www.cdlvitoria.com.br/17-direitos-que-comerciantes-e-consumidores-tem-e-nao-sabem/    acesso em: 10/06/2017",
      "titulo" : "Comerciantes podem recusar troca em caso de mau uso",
      "upVotes" : 0
    },
    "-KmImrljgm9TmDWKXuVM" : {
      "downVotes" : 0,
      "tags" : [ "consumidor", "desistir", "contrato" ],
      "texto" : "No prazo de 7 dias a contar de sua assinatura ou do ato de recebimento do produto ou serviço , sempre que a contratação de fornecimento de produtos e serviços ocorrer fora do estabelecimento comercial, especialmente por telefone ou a domicílio.\n\nFonte: https://lfg.jusbrasil.com.br/noticias/2124113/em-que-situacoes-o-codigo-de-defesa-do-consumidor-permite-o-reembolso-da-quantia-paga-renata-cristina-moreira-da-silva    acesso em: 10/06/2017",
      "titulo" : "Consumidor pode desistir de contrato",
      "upVotes" : 0
    },
    "-KmJ--f_yxzUcAoAI0o3" : {
      "downVotes" : 0,
      "tags" : [ "transito", "assalto", "ônibus", "indenização" ],
      "texto" : "Vítimas de assaltos dentro de ônibus têm direito a receber indenização pelos prejuízos desde que apresente as provas. Os passageiros são amparados pelo Código de Defesa do Consumidor (CDC). De acordo com o CDC, as empresas que fornecem serviços públicos são responsáveis pela segurança dos usuários.\n\nFonte: http://g1.globo.com/pa/para/noticia/2014/08/vitimas-de-assaltos-ocorridos-dentro-de-onibus-tem-direito-indenizacao.html   acesso em: 10/06/2017",
      "titulo" : "Vítimas de assaltos ocorridos dentro de ônibus têm direito a indenização",
      "upVotes" : 0
    },
    "-KmJ4LbTQhbj3x_Rjj6b" : {
      "downVotes" : 0,
      "tags" : [ "Preferência do Pedestre", " Trânsito" ],
      "texto" : "Sim. Diante do frequente desrespeito aos pedestres é necessário saber que, embora seja dever do pedestre atravessar na faixa, caso este tenha iniciado a travessia, mesmo que não haja sinalização a ele destinada, o motorista deve aguardar que a travessia seja concluída de acordo com o artigo. 214, IV do CTB sob pena de multa.",
      "titulo" : "O motorista é obrigado a dar preferência a pedestre que atravessa a via fora de faixa?",
      "upVotes" : 0
    },
    "-KmJ9VUKKiCkZxrIqbE9" : {
      "downVotes" : 0,
      "tags" : [ "divulgação", "foto", "pornografia" ],
      "texto" : "O Marco Civil tem um artigo específico que determina ao site de conteúdo sexual que tire o material denunciado em até 24 horas a partir da notificação extrajudicial enviada. O site se torna responsável a partir do momento em que ele recebe a notificação e não cumpre.\n\nFonte: http://www.psafe.com/blog/advogada-explica-como-agir-caso-suas-fotos-e-videos-caiam-na-rede/   acessado em: 10/06/2017",
      "titulo" : "Se um site de pornografia receber o conteúdo e divulgá-lo, o provedor pode ser autuado também?",
      "upVotes" : 0
    },
    "-KmJB4bNrmYJ568OarMj" : {
      "downVotes" : 0,
      "tags" : [ "internet", "exibição", "nãoautorizada" ],
      "texto" : "Sim. Qualquer situação em que você for filmado, fotografado ou ter sua voz gravada se refere a conteúdos próprios ao indivíduo, portanto, esse conteúdo só pode ser divulgado se você assinar uma autorização de uso da sua imagem e voz, que também só podem ser usados para o fim específico declarado no documento que você assinou.\n\nFonte: http://www.psafe.com/blog/advogada-explica-como-agir-caso-suas-fotos-e-videos-caiam-na-rede/   acesso em: 10/06/2017",
      "titulo" : "Qualquer exibição não autorizada é caracterizada como ilegal?",
      "upVotes" : 0
    },
    "-KmJDNweNZhsrhcb2Sn0" : {
      "downVotes" : 0,
      "tags" : [ "polícia", "mandado", "busca", "ninguém", "casa" ],
      "texto" : "Os policiais precisam chamar dois vizinhos para acompanhar o procedimento. Depois, as testemunhas precisam assinar o relatório em que consta como foi feita a revista e quais são os objetos apreendidos. Essa busca só pode ser realizada durante o dia.\n\nFonte: http://brasil.estadao.com.br/noticias/geral,abordagem-policial-o-que-pode-e-o-que-nao-pode-ser-feito,10000012942  acesso em: 10/06/2017",
      "titulo" : "Caso não haja ninguém em casa, a polícia, se possuir mandado, pode fazer a busca?",
      "upVotes" : 0
    },
    "-KmJDyUcpWfd2u20B4nz" : {
      "downVotes" : 0,
      "tags" : [ "policia", "revistas", "pessoais" ],
      "texto" : "O policial não pode gritar ou xingar a pessoa que está sendo revistada. Também deve tratar respeitosamente familiares que se aproximam para pedir informação sobre o ocorrido. Caso contrário, o agente pode incorrer em injúria ou abuso de autoridade.\n\nFonte: http://brasil.estadao.com.br/noticias/geral,abordagem-policial-o-que-pode-e-o-que-nao-pode-ser-feito,10000012942   acesso em:10/06/2017",
      "titulo" : "Como os policiais devem proceder em revistas pessoais?",
      "upVotes" : 0
    },
    "-KmJEJkm5WHd6wf3QBDr" : {
      "downVotes" : 0,
      "tags" : [ "policial", "revista", "força" ],
      "texto" : "Se o policial ameaçar ou bater em alguém para obter uma confissão, ele está cometendo crime de tortura. Um agente também não pode mandar a pessoa sair correndo sem olhar para trás no fim da revista, nem mandar a pessoa tirar a roupa em local público.\n\nFonte: http://brasil.estadao.com.br/noticias/geral,abordagem-policial-o-que-pode-e-o-que-nao-pode-ser-feito,10000012942   acesso em:10/06/2017",
      "titulo" : "Um policial pode usar da força para fazer a revista?",
      "upVotes" : 0
    },
    "-KmJE_70ffxE4PuoknDq" : {
      "downVotes" : 0,
      "tags" : [ "pessoa", "detida", "documento" ],
      "texto" : "O recomendado é que todos andem na rua com documentos de identificação, mas ninguém pode ser preso por estar sem. Nesse caso, a pessoa deve informar nome do pai, da mãe e data de nascimento. As informações são necessárias para que o policial verifique se o suspeito é foragido da Justiça.\n\nFonte: http://brasil.estadao.com.br/noticias/geral,abordagem-policial-o-que-pode-e-o-que-nao-pode-ser-feito,10000012942   acesso em: 10/06/2017",
      "titulo" : "Uma pessoa pode ser detida por não portar documento?",
      "upVotes" : 0
    },
    "-KmJEw6kH46jmG7IE0U0" : {
      "downVotes" : 0,
      "tags" : [ "policial", "algemado" ],
      "texto" : "As algemas só devem ser usadas para presos em flagrante ou foragidos da Justiça. Algemar por outro motivo é abuso de autoridade.\n\nFonte: http://brasil.estadao.com.br/noticias/geral,abordagem-policial-o-que-pode-e-o-que-nao-pode-ser-feito,10000012942   acesso em: 10/06/2017",
      "titulo" : "Qualquer um pode ser algemado por um policial?",
      "upVotes" : 0
    },
    "-KmJFCNGpl8vtyY4UI9r" : {
      "downVotes" : 0,
      "tags" : [ "delegacia" ],
      "texto" : "Ela deve ser apresentada ao delegado de polícia, que é responsável por tudo o que acontecer a ela nas dependências do Distrito Policial. Caso seja agredida, o delegado pode responder por crime de tortura. Os policiais também não podem exigir dinheiro por se tratar de crime de concussão.\n\nFonte: http://brasil.estadao.com.br/noticias/geral,abordagem-policial-o-que-pode-e-o-que-nao-pode-ser-feito,10000012942  acesso em: 10/06/2017",
      "titulo" : "Qual o procedimento, caso a pessoa seja encaminhada a uma delegacia?",
      "upVotes" : 0
    }
};

var DADOS = [];
for (var key in bruto){
    bruto[key]['$id'] = key;
    DADOS.push(bruto[key]);
}