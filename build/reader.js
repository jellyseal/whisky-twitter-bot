'use strict';

var _twitterService = require('./twitterService');

var params = {
    screen_name: 'abimelex', // replace with the user you want to track
    exclude_replies: true,
    include_rts: false,
    trim_user: true
};

_twitterService.client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = tweets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var tweet = _step.value;

                // TODO: do something usefull, write to DB, answer, analyze...
                console.log(tweet.text, tweet.favorite_count);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
});
//# sourceMappingURL=reader.js.map