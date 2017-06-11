(() => {
    'use-strict';
    app.controller("HomeController", ['$scope', '$state','VizService', function ($scope, $state, VizService) {
        const STATE_LEIS_BUSCADAS = 'leisBuscadas';

        console.log(VizService.getTags());

        const sample_data = [
            { "$id": "1", "value": 100, "tag": "Internet", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
            { "$id": "12", "value": 70, "tag": "Mercadinho", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
            { "$id": "13", "value": 40, "tag": "Trânsito", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
            { "$id": "14", "value": 15, "tag": "Vizinhos", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
            { "$id": "15", "value": 5, "tag": "Polícia", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
            { "$id": "16", "value": 1, "tag": "Sus", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
            { "$id": "17", "value": 99, "tag": "Animais", "url": "https://github.com/luciannojunior/cidadania-de-bolso" }
        ];

        const buscarPorTag = single_data => {
            $state.go(STATE_LEIS_BUSCADAS, { tag: single_data.tag });
        };

        const vizualiation = d3plus.viz()
            .container("#home")  // container DIV to hold the visualization
            .mouse({
                "click": buscarPorTag
            })
            .data(sample_data)  // data to use with the visualization
            .type("tree_map")   // visualization type
            .id("tag")         // key for which our data is unique on
            .size("value")      // sizing of blocks
            .draw();
            
    }]);
})();