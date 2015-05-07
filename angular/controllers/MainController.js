app.controller('MainController', ['$scope', function($scope) { // Create "controller" for stats
    $scope.title = 'Log'; // Title to use with the log
    $scope.stats = // Array with an object for each stat
        [
            {
                name: 'Health', 
                main_id: 'health',
                div_id: 'health_s',
                span_id: 'health_add',
            },
            {
                name: 'Strength',
                main_id: 'strength',
                div_id: 'strength_s',
                span_id: 'strength_add',
            },
            {
                name: 'Intellect',
                main_id: 'intellect',
                div_id: 'intellect_s',
                span_id: 'intellect_add',
            },
            {
                name: 'Dexterity',
                main_id: 'dexterity',
                div_id: 'dexterity_s',
                span_id: 'dexterity_add',
            },
            {
                name: 'Mastery',
                main_id: 'mastery',
                div_id: 'mastery_s',
                span_id: 'mastery_add',
            }
        ];
    $scope.plus_stat = function(event, stat){ // Function to increase the stats (catching the )
        if(can_level_stats){ // If can_level_stats is true, execute the following
            var click_id = (stat.target.id); // Get the id of click stat, and place in click_id var
                if(click_id == 'health_add') { // Check to see which id was clicked, and execute the corresponding code
                    health += 10;
                    stat_points -= 1;
                    check_stat_points();
                }else if (click_id == 'strength_add') {
                    strength += 1;
                    stat_points -= 1;
                    check_stat_points();
                }else if (click_id == 'intellect_add') {
                    intellect += 1;
                    stat_points -= 1;
                    check_stat_points();
                }else if (click_id == 'dexterity_add') {
                    dexterity += 1;
                    stat_points -= 1;
                    check_stat_points();
                }else if (click_id == 'mastery_add') {
                    mastery += 1;
                    stat_points -= 1;
                    check_stat_points();
                }
        };
    };
}]);