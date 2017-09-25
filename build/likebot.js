'use strict';

var _twitterService = require('./twitterService');

// Add the words and or hashstag you are searching for here:
var searchTerms = ['#whisky', '#scotch', '#whiskey', '#bourbon', '#singlemalt', '#caskstrength', '#whiskygram', '#whiskylover', '#instawhisky', '#jackdaniels', '#bourbongents'];

// Any tweets containing any of the words will be not liked
var blacklist = ['sex', 'cyalis', 'viagra'];

var blacklistRegex = new RegExp('' + blacklist.join('|'), 'i');

var filter = {
    track: searchTerms.join(',')
};

// Start the stream
var stream = _twitterService.client.stream('statuses/filter', filter);
console.log('Bot is online and listening...');

stream.on('data', function (event) {
    console.log(event.id_str);
    if (!event.possibly_sensitive && !event.retweeted_status) {
        if (!blacklistRegex.test(event.text)) {
            /* Like
            client.post('favorites/create', { id: event.id_str })
            .then(result => {
                console.log('liked: ', new Date(), event.text);
            })
            .catch((error) => {
                console.log('Problem liking event with id: ', error, event);
            })
            */
            // Follow
            _twitterService.client.post('friendships/create', { screen_name: event.user.screen_name }).then(function (result) {
                console.log('followed: ', new Date(), event.text);
            }).catch(function (error) {
                console.log('Problem following event with id: ', error, event);
            });
            // RT
            _twitterService.client.post('statuses/retweet', { id: event.id_str }).then(function (result) {
                console.log('Retweeted: ', new Date(), event.text);
            }).catch(function (error) {
                console.log('Problem retweet event with id: ', error, event);
            });
        } else {
            console.log('blocked: ', event.text);
        }
    }
});

stream.on('error', function (error) {
    throw error;
});
//# sourceMappingURL=likebot.js.map