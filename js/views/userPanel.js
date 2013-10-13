/**
 * Author: Shantnu Aggarwal<shantnuaggarwal@gmail.com>
 * Date: 10/10/13
 * Time: 9:28 PM
 */
define(["jquery","underscore","backbone","jquerymobile","text!templates/userPanel.html"],function($,_,Backbone,jqM,UserPanelTemplate){
    var UserPanelView;
    UserPanelView = Backbone.View.extend({
        el:'#user-panel',
        render: function(){
            $(this.el).html('');
            $(this.el).append(_.template(UserPanelTemplate, {userId:sessionStorage.userId}));
        }
    });
    return UserPanelView;
});