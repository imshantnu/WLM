/**
 * Author: Shantnu Aggarwal<shantnuaggarwal@gmail.com>
 * Date: 9/20/13
 * Time: 9:13 PM
 */
define([
    'jquery',
    'backbone'
], function($, Backbone){
    var PostModel = Backbone.Model.extend({
        userId: function(){
            return Backbone.storage.getVal('userId')!= null?Backbone.storage.getVal('userId'):'0';
        },
        share: function(){
            var that = this;
            this.url = 'http://beta.wannalol.com/WLRestService/Share/'+this.id;
            this.fetch({
                error:function(model, response){
                    alert(response.responseText);
                }
            });
        },
        like: function(){
            this.url = 'http://beta.wannalol.com/WLRestService/Like/'+this.id+'/'+this.userId();
            this.fetch({
                error:function(model, response){
                    alert(response.responseText);
                },
                success: function(){
                    alert('Post Liked');
                }
            });
        },
        dislike: function(){
            this.url = 'http://beta.wannalol.com/WLRestService/Hate/'+this.id+'/'+this.userId();
            this.fetch({
                error:function(model, response){
                    alert(response.responseText);
                },
                success: function(){
                    alert('Post Hated');
                }
            });
        }
    });
    return PostModel;
});
