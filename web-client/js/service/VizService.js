(() => {
    app.service('VizService', ['$http', 'PostService', function ($http, PostService) {

        const self = this;

        function _countUniqueElements(arr) {
            var tags = [], count = [], prev;

            arr.sort();
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] !== prev) {
                    tags.push(arr[i]);
                    count.push(1);
                } else {
                    count[count.length - 1]++;
                }
                prev = arr[i];
            }

            return [tags, count];

        }

        function _arrayOfTags() {

            let posts = PostService.getAllPosts();
            let tags = posts.reduce((acc, val) => {
                return acc.concat(val.tags);
            }, []);

            return tags.map(tag => tag = tag.trim()).filter((val) => {
                return val !== "";
            });

        }

        function _generateJsonElements(arr) {

            var out = []
            arr[0].forEach(function (value, index) {
                out.push({ "$id": index, "type": value, "quantity": arr[1][index] });
            });

            return out;
        }


        function getTags() {


            let tags = _generateJsonElements(_countUniqueElements(_arrayOfTags()));

            tags.sort((a, b) => {
                if (a.quantity < b.quantity) {
                    return 1;
                } else if (a.quantity > b.quantity) {
                    return -1;
                } else {
                    return 0;
                }
            })
            return tags.slice(0, 8);

        }

        return {
            getTags: getTags
        }

    }]);

})();