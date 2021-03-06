/**
 * Author: Shantnu Aggarwal<shantnuaggarwal@gmail.com>
 * Date: 9/14/13
 * Time: 8:14 PM
 */
define(["jquery","underscore","backbone","jquerymobile","text!templates/navigation.html"],function($,_,Backbone,jqM,NavTemplate){
    var NavView;
    NavView = Backbone.View.extend({
        el:'#navigation-panel',
        render: function(){
            $(this.el).append(_.template(NavTemplate, {}));
            $("#search").bind( "change", function(event, ui) {
                location.href = '#search/'+this.value;
            });
            $(this.el).trigger( "create" );
        },
        markSelected: function(text){
            var attr = 'data-target="'+text+'"';
            $(this.el).find('li['+attr+']').addClass('selected');
        },
        expandNav: function(e){
            $(e.target.parentNode).children().show();
        }
    });
    return NavView;
});
