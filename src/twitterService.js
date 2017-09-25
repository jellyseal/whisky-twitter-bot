import Twitter from 'twitter';

if (!process.env.BOT_CONSUMER_KEY ||
    !process.env.BOT_CONSUMER_SECRET ||
    !process.env.BOT_ACCESS_TOKEN ||
    !process.env.BOT_ACCESS_TOKEN_SECRET
) {
    console.log('environment variables not set. Please set:');
    console.log('BOT_CONSUMER_KEY');
    console.log('BOT_CONSUMER_SECRET');
    console.log('BOT_ACCESS_TOKEN');
    console.log('BOT_ACCESS_TOKEN_SECRET');

    process.exit(1);
}

const client = new Twitter({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token_key: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

export {client};
