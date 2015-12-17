    (function($) {

        var NavigationItem = Backbone.Model.extend({
            defaults: {
                name: '',
                href: '',
                src: '',
                last: false,
                id: ''
            },

            initialize: function() {

            }
        });

        var FeatureItem = Backbone.Model.extend({
            defaults: {
                title: '',
                href: '',
                src: '',
                text: '',
                cta: '',
                class: '',
                id: ''
            },

            initialize: function() {

            }
        });

        //define collections
        var NavigationCollection = Backbone.Collection.extend({
            model: NavigationItem
        });

        var FooterNavigationCollection = Backbone.Collection.extend({
            model: NavigationItem
        });

        var SocialNavigationCollection = Backbone.Collection.extend({
            model: NavigationItem
        });

        var ShareNavigationCollection = Backbone.Collection.extend({
            model: NavigationItem
        });
        var FeatureCollection = Backbone.Collection.extend({
            model: FeatureItem
        });
        var navJSON = JSON.parse('[{"name":"Business", "href":"/business", "id":"biz"},{"name":"MSP & Parters", "href": "/msp-partners"},{"name":"Personal", "href": "/personal"},{"name":"Blog", "href": "/blog", "last":true}]');

        var footerNavJSON = JSON.parse('[{"name": "Privacy Policy", "href": "/privacy-policy", "id":"privacy"},{"name": "Terms of Service", "href": "/terms-of-service", "id":"tos"},{"name": "Sitemap", "href": "/sitemap", "id":"sitemap"},{"name": "Contact Us", "href": "/contact", "id":"contact", "last":true}]');

        var socialNavJSON = JSON.parse('[{"name": "twitter", "href": "http://twitter.com", "src": "images/twitter.png", "id":"twitter"},{"name": "google+", "href": "http://plus.google.com", "src": "images/google-plus.png", "id":"gplus"},{"name": "Facebook", "href": "http://facebook.com", "src": "images/facebook.png", "id":"facebook"},{"name": "linkedin", "href": "http://linkedin.com", "src": "images/linkedin.png", "id":"linkedin", "last":true}]');

        var shareNavJSON = JSON.parse('[{"name": "linkedin", "href": "http://linkedin.com", "id":"share-linkedin"},{"name": "twitter", "href": "http://twitter.com", "id":"share-twitter"},{"name": "google+", "href": "http://plus.google.com", "id":"share-gplus"},{"name": "Facebook", "href": "http://facebook.com", "id":"share-facebook"},{"name": "Email", "href": "mailto:", "id":"share-email", "last":true}]');
        
        var featureJSON = JSON.parse('[{"title": "WHAT\'S NEW AT OPENDNS:<br>LIVE WEBCAST 11/12", "href": "<img src=\'images/webcast-icon.png\' alt=\'What\'s new at OpenDNS Webast 11/12\' width=\'125\' height=\'116\' class=\'centerimg\'>", "text":"LIVE WEBCAST", "cta": "Regiser Now &rarr;", "class":"webcast tall"},{"title": "INTRODUCTION TO INVESTIGATE", "href": "<img src=\'images/play-video-icon.png\' alt=\'play video\' width=\'40\' height=\'59\' class=\'centerimg\'>", "text":"PRODUCT VIDEO", "cta": "Watch Now &rarr;", "class":"prodvideo"},{"title": "WHAT CUSTOMERS ARE SAYING", "href": "<img src=\'images/play-video-icon.png\' alt=\'play video\' width=\'40\' height=\'59\' class=\'centerimg\'>", "text":"CUSTOMER VIDEO", "cta": "Watch Now &rarr;", "class":"custvideo"}]');

        //instantiate collection
        var navCollection = new NavigationCollection(navJSON, {
            view: this
        });
        var footerNavCollection = new FooterNavigationCollection(footerNavJSON, {
            view: this
        });
        var socialNavCollection = new SocialNavigationCollection(socialNavJSON, {
            view: this
        });
        var shareNavCollection = new ShareNavigationCollection(shareNavJSON, {
            view: this
        });

        var featureCollection = new FeatureCollection(featureJSON, {
            view: this
        });



        var NavView = Backbone.View.extend({


            initialize: function() {
                _.bindAll(this, 'render');
                this.render();
            },

            render: function() {
                this.collection.each(function(item) {
                    this.id.append("<li><a href=" + item.get("href") + ">" + item.get("name") + "</a></li>");
                }, this);
                return this;
            }
        });
        var IconView = Backbone.View.extend({


            initialize: function() {
                _.bindAll(this, 'render');
                this.render();
            },

            render: function() {
                this.collection.each(function(item) {
                    this.id.append("<li><img src=" + item.get("src") + " width='28' height='28'></li>");
                }, this);
                return this;
            }
        });

        var FeatureView = Backbone.View.extend({


            initialize: function() {
                _.bindAll(this, 'render');
                this.render();
            },

            render: function() {
                this.collection.each(function(item) {
                    this.id.append("<div class='learn-blurb " +
                        item.get("class") + "'><div class='learn-blurb-content'><p class='learn-blurb-title'>" +
                        item.get("title") + "</p>" +
                        item.get("href") + "<div class='learn-blurb-footer'><p class='footertext'>" +
                        item.get("text") + "</p><p class='footercta'>" +
                        item.get("cta") + "</p></div></div></div>");
                }, this);
                return this;
            }
        });

        //instantiate views
        var navView = new NavView({
            collection: navCollection,
            id: $("#nav-main")
        });

        var footerNavView = new NavView({
            collection: footerNavCollection,
            id: $("#nav-footer")
        });


        var socialNavView = new IconView({
            collection: socialNavCollection,
            id: $("#nav-social")
        });

        var shareNavView = new NavView({
            collection: shareNavCollection,
            id: $("#nav-share")
        });
        var featureView = new FeatureView({
            collection: featureCollection,
            id: $(".opendns-learnmore")
        });



    })(jQuery);