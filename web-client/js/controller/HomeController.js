(() => {
    'use-strict';
    
    app.controller("HomeController", ['$scope', function ($scope) {

        const sample_data = [
            { "value": 100, "tag": "Internet", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
            { "value": 70, "tag": "Mercadinho", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
            { "value": 40, "tag": "Trânsito", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
            { "value": 15, "tag": "Vizinhos", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
            { "value": 5, "tag": "Polícia", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
            { "value": 1, "tag": "Sus", "url": "https://github.com/luciannojunior/cidadania-de-bolso" },
            { "value": 99, "tag": "Animais", "url": "https://github.com/luciannojunior/cidadania-de-bolso" }
        ];

        const vizualiation = d3plus.viz()
            .container("#home")  // container DIV to hold the visualization
            .mouse({
                "click": function (single_data) {
                    window.location.href = single_data.url;
                }
            })
            .data(sample_data)  // data to use with the visualization
            .type("tree_map")   // visualization type
            .id("tag")         // key for which our data is unique on
            .size("value")      // sizing of blocks
            .draw();            // finally, draw the visualization!
    }]);
})();