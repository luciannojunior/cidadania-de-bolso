(() => {
    'use-strict';
    app.controller("HomeController", ['$state', 'VizService', function ($state, VizService) {
        const STATE_LEIS_BUSCADAS = 'leisPorTag';

        console.log(VizService.getTags());

        // const sample_data = [
        //     { "$id": "1", "value": 100, "tag": "Internet", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
        //     { "$id": "12", "value": 70, "tag": "Mercadinho", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
        //     { "$id": "13", "value": 40, "tag": "Trânsito", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
        //     { "$id": "14", "value": 15, "tag": "Vizinhos", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
        //     { "$id": "15", "value": 5, "tag": "Polícia", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
        //     { "$id": "16", "value": 1, "tag": "Sus", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
        //     { "$id": "17", "value": 99, "tag": "Animais", "url": "https://github.com/luciannojunior/cidadania-de-bolso" }
        // ];
        const sample_data = VizService.getTags(); 

        const buscarPorTag = single_data => {
            $state.go(STATE_LEIS_BUSCADAS, { tag: single_data.type });
        };

        const vizualiation = d3plus.viz()
            .container("#home")  // container DIV to hold the visualization
            .data(sample_data)  // data to use with the visualization
            .type("tree_map")   // visualization type
            .id("type")         // key for which our data is unique on
            .size("quantity")      // sizing of blocks
            .margin(2)
            .mouse({
                "move": false,
                "click": buscarPorTag
            })
            .font({
                "family" : "HelveticaNeue",
                "transform" :  "uppercase"

            })
            .draw();

    }]);
})();