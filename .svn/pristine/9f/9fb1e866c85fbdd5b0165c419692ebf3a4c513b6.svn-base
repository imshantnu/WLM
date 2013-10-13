/**
 * Author: Shantnu Aggarwal<shantnuaggarwal@gmail.com>
 * Date: 10/4/13
 * Time: 10:28 AM
 */
define([
    'jquery',
    'backbone','views/homePosts','views/userPanel', 'http://l2.io/ip.js?var=userIp'
], function($, Backbone,HomePostsView, UserPanelView, UserIp){
    var User = Backbone.Model.extend({
        alreadyLoggedIn: function(){
            if(Backbone.storage.getVal('userId') != null){
                return true;
            }else return false
        },
        startLogin:function(){
            var that = this;
            var homePostsView = new HomePostsView();
            var userPanelView = new UserPanelView();
            if(!that.alreadyLoggedIn()){
                require(['fb']);
                define(['facebook'], function(){
                    FB.init({
                        appId      : '234887176585198',
                        channelUrl : '//WWW.WANNALOL.COM/channel.html'
                    });
                    FB.getLoginStatus(function(response) {
                        if(response.status === 'connected'){
                            FB.setUserPrefs(response.authResponse.userID);
                        }else{
                            FB.login(function(response) {
                                if (response.authResponse) {
                                    FB.setUserPrefs(response.authResponse.userID);
                                } else {
                                    alert('You cancelled! How on earth we are supposed to log you in if you keep cancelling');
                                    homePostsView.render();
                                }
                            });
                        }
                    });
                    FB.setUserPrefs = function(uid){
                        Backbone.storage.setVal('userId',uid);
                        var offset;
                        offset = 0;
                        FB.userLikes = [];
                        FB.fetchUserLikes(offset,uid);
                        homePostsView.render();
                        var userDetails = {
                            Id: Backbone.storage.getVal('userId'),
                            IpAddr: that.getUserIp()
                        };
                        that.url = window.baseUrl+'/WLRestService/authenticate';
                        // Because we have not set a `id` the server will call
                        // The server should save the data and return a response containing the new `id`
                        /*that.save(userDetails, {
                            success: function (rr) {
                                console.log(rr.toJSON());
                            }
                        })*/
                        userPanelView.render();
                        $('li[data-target="login"]').find('a').attr({'href':'#logout'}).text('Logout');

                    };
                    FB.fetchUserLikes = function(x,uid){
                        var likesLen;
                        FB.api('/'+uid+'/movies', { offset:x,limit: 50 }, function(response) {
                            likesLen =  response.data.length;
                            for(var n=response.data.length;n--;) {
                                FB.userLikes.push(response.data[n].name);
                            }
                            if(likesLen=='50'){
                                FB.fetchUserLikes((x+50),uid);
                            }else if(likesLen<'50' || likesLen=='0'){
                                Backbone.storage.setVal('userLikes',JSON.stringify(FB.userLikes));
                            }
                        });
                    }
                });
            }else{
                homePostsView.render();
                $('li[data-target="login"]').find('a').attr({'href':'#logout'}).text('Logout');
            }
        },
        getUserIp: function(){
            Backbone.storage.setVal('userIp',userIp);
            userIp = null;
            return Backbone.storage.getVal('userIp');
        },
        startLogout: function(){
            FB.logout(function(response) {
                // Person is now logged out
                Backbone.storage.clearVal('userId');
                Backbone.storage.clearVal('userLikes');
                var homePostsView = new HomePostsView();
                var userPanelView = new UserPanelView();
                homePostsView.render();
                userPanelView.render();
                $('li[data-target="login"]').find('a').attr({'href':'#login'}).text('Login');
            });
        }
    });
    return User;
});
