(() => {
    app.service('VizService', ['$http', function ($http) {

        const self = this; 

        //fazer o get do firebase aqui
        let doubts = [

            { "question": "O motorista é obrigado a dar preferência a pedestre que atravessa a via fora de faixa?", 
                "tag": "Trânsito, regulamento", 
                "url": "/lei/qualquercoisa",
                    "text": "Sim. Diante do frequente desrespeito aos..." },
            { "question": "Comerciantes podem recusar troca em caso de mau uso", 
                "tag": "comerciantes,recusa,troca,mau,uso, consumidor", 
                "url": "/lei/qualquercoisa",
                    "text": "O comerciante tem o direito de recusar a..." },
            { "question": "A loja pode exigir um valor mínimo para compras no cartão?", 
                "tag": "consumidor,venda casada, comerciante, comerciante", 
                "url": "/lei/qualquercoisa",
                    "text": "Sim. Diante do frequente desrespeito aos..." }, 
        ];

        function createTag(doubts){

                let tag = doubts.reduce((acc,val) => {
                   return  acc.concat(val.tag.split(','))
                },[])

                

                return tag.map(item => item = item.trim());

        }

        function countUniqueElements(arr){
            var a = [], b = [], prev;

            arr.sort();
            for ( var i = 0; i < arr.length; i++ ) {
                if ( arr[i] !== prev ) {
                    a.push(arr[i]);
                    b.push(1);
                } else {
                    b[b.length-1]++;
                }
                prev = arr[i];
            }

            return [a, b];

        }

        function generateJsonElements(arr){

            var out =[]
            arr[0].forEach(function(value, index){
                out.push({"$id": index, "type": value, "quantity": arr[1][index]});
            });

            return out;
        }

        function getTags(){


            let tags = generateJsonElements(countUniqueElements(createTag(doubts)));
           
            tags.sort((a,b) => {
                if(a.quantity < b.quantity){
                    return 1;
                }else if (a.quantity > b.quantity) {
                    return -1;
                } else {
                    return 0;
                }
            })
            return tags.slice(0,8);

        }

        return {
            getTags : getTags
        }
        
    }]);
    
})();