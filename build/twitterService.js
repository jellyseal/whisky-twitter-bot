'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.client = undefined;

var _twitter = require('twitter');

var _twitter2 = _interopRequireDefault(_twitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!process.env.BOT_CONSUMER_KEY || !process.env.BOT_CONSUMER_SECRET || !process.env.BOT_ACCESS_TOKEN || !process.env.BOT_ACCESS_TOKEN_SECRET) {
    console.log('environment variables not set. Please set:');
    console.log('BOT_CONSUMER_KEY');
    console.log('BOT_CONSUMER_SECRET');
    console.log('BOT_ACCESS_TOKEN');
    console.log('BOT_ACCESS_TOKEN_SECRET');

    process.exit(1);
}

var client = new _twitter2.default({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token_key: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

exports.client = client;
//# sourceMappingURL=twitterService.js.map