/**
 * Author: Shantnu Aggarwal<shantnuaggarwal@gmail.com>
 * Date: 10/1/13
 * Time: 1:13 PM
 */
define(function () {
    'use strict';
    function CustomStorage() {
        var customStorage = ({
            storageAvailable: ('sessionStorage' in window && window['sessionStorage'] !== null) ? 'true' : 'false',
            setVal: function (key, val) {
                if (this.storageAvailable) {
                    sessionStorage.setItem(key, val);
                } else {
                    //session storage not available so binding it to window's object
                    window.key = val;
                }
            },
            getVal: function (key) {
                if (this.storageAvailable) {
                    return sessionStorage.getItem(key)
                } else {
                    //session storage not available so returning from window's object
                    return window.key;
                }
            },
            clearVal: function (key) {
                if (this.storageAvailable) {
                    return sessionStorage.setItem(key,null);
                } else {
                    //session storage not available so returning from window's object
                    return unset(window.key);
                }
            },
            setValLocal: function (key, val) {
                if (this.storageAvailable) {
                    localStorage.setItem(key, val);
                } else {
                    //session storage not available so binding it to window's object
                    window.key = val;
                }
            },
            getValLocal: function (key) {
                if (this.storageAvailable) {
                    return localStorage.getItem(key)
                } else {
                    //session storage not available so returning from window's object
                    return window.key;
                }
            },
            clearValLocal: function (key) {
                if (this.storageAvailable) {
                    return localStorage.setItem(key,null);
                } else {
                    //session storage not available so returning from window's object
                    return unset(window.key);
                }
            }        });
        return customStorage;
    };
    return CustomStorage;
});
