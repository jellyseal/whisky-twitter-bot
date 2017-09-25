import {client} from './twitterService';

const params = {
    screen_name: 'abimelex',    // replace with the user you want to track
    exclude_replies: true,
    include_rts: false,
    trim_user: true
};

client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        for(const tweet of tweets) {
            // TODO: do something usefull, write to DB, answer, analyze...
            console.log(tweet.text, tweet.favorite_count);
        }
    }
});
