/**
 * Author: Shantnu Aggarwal<shantnuaggarwal@gmail.com>
 * Date: 9/7/13
 * Time: 4:00 PM
 */
define([
    'jquery',
    'backbone'
], function($, Backbone){
    var PostsCollection = Backbone.Collection.extend({
        lastPostId : '0',
        userId : function(){
            return Backbone.storage.getVal('userId')!= null?Backbone.storage.getVal('userId'):'0';
        },
        numberOfPosts : '5',
        url: function() {
            return window.baseUrl+'/WLRestService/'+this.method+'/'+this.lastPostId+'/'+this.userId()+'/'+this.numberOfPosts;
        }
    });
    return PostsCollection;
});