app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Log';
    $scope.stats = 
        [
            {
                name: 'Health',
                main_id: 'health',
                div_id: 'health_s',
                span_id: 'health_add',
                value: 460
            },
            {
                name: 'Strength',
                main_id: 'strength',
                div_id: 'strength_s',
                span_id: 'strength_add',
                value: 1
            },
            {
                name: 'Intellect',
                main_id: 'intellect',
                div_id: 'intellect_s',
                span_id: 'intellect_add',
                value: 1
            },
            {
                name: 'Dexterity',
                main_id: 'dexterity',
                div_id: 'dexterity_s',
                span_id: 'dexterity_add',
                value: 1
            },
            {
                name: 'Mastery',
                main_id: 'mastery',
                div_id: 'mastery_s',
                span_id: 'mastery_add',
                value: 1
            }
        ];
    $scope.plus_stat = function(event, stat){
        if(can_level_stats){
            var click_id = (stat.target.id);
                if(click_id == 'health_add') {
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