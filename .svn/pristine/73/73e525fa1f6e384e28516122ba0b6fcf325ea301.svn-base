/**
 * Author: Shantnu Aggarwal<shantnuaggarwal@gmail.com>
 * Date: 9/7/13
 * Time: 4:20 PM
 */

// Includes file dependencies
define([ "jquery","backbone","storage" ], function( $, Backbone,CustomStorage ) {
    // Extends Backbone.Router
   var PostsRouter = Backbone.Router.extend( {
        // The Router constructor
        initialize: function() {
            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();
            //binding storage object to backbone object to avoid multiple instances
            Backbone.storage = new CustomStorage();
        },
        // Backbone.js Routes
        routes: {
            "posts/:id": "getPost",
            "trending": "getTrendingPosts",
            "search/:q":"searchPosts",
            "login":"loginUser",
            "logout":"logout",
            "create":"createMeme",
            "*actions": "home" // Backbone will try match the route above first
        },
        // Home method
        home: function() {
            require(['views/homePosts'],function(HomePostsView){
                var homePostsView = new HomePostsView();
                Backbone.storage.setVal('postType','getposts');
                homePostsView.render();
            });
        },
        loginUser:function(){
            require(["collections/user"],function(User){
                var user = new User();
                user.startLogin();
            });
        },
        logout:function(){
           require(["collections/user"],function(User){
               var user = new User();
               user.startLogout();
           });
        },
        searchPosts: function(q){
            require(['views/homePosts'],function(HomePostsView){
                var homePostsView = new HomePostsView();
                Backbone.storage.setVal('postType','search/'+q);
                homePostsView.render();
            });
        },
        getTrendingPosts: function(){
            require(['views/homePosts'],function(HomePostsView){
                var homePostsView = new HomePostsView();
                Backbone.storage.setVal('postType','trending');
                homePostsView.render();
            });
        },
        createMeme: function(){
            require(['views/createMeme'],function(CreateMemeView){
                var createMemeView = new CreateMemeView();
                createMemeView.render();
            });
        },
        // Get Post method that passes in the post id that is appended to the url hash
        getPost: function(id) {
            alert('Post - '+id);
        }
    } );
    // Returns the Router class
    return PostsRouter;
} );