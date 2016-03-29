angular.module("moviedb").directive('badwords', function() {
    // Runs during compile
    return {
        require: 'ngModel',
        link: function($scope, elem, attrs, cntrl) {
            var badwords = ["fuck", "shit"];
            cntrl.$validators.badwords = function(modelValue, viewValue) {
                var rawWords = modelValue || "";
                var words = rawWords.split(" ");
                for (var i in badwords) {
                    var badword = badwords[i];
                    if (words.indexOf(badword) >= 0) {
                        cntrl.badword = badword;
                        return false;
                    }
                }
                cntrl.badword = "";
                return true;
            }

        }
    };
});
