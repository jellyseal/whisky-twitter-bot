# Twivorite

A simple like bot written in NodeJS

## Requirements
- NodeJS at least version 6
- Package manager like `yarn` or `npm`
- Packages from package.json

## Preparation
Install all required packages: `yarn install` or `npm install`.

You will need the API keys from your twitter account.
See here if you don't already have the Access tokens: https://dev.twitter.com/webhooks/access-tokens

Set the tokens as environment variables:
```
export BOT_CONSUMER_KEY="INSERT_YOUR_TWITTER_CONSUMER_KEY"
export BOT_CONSUMER_SECRET="INSERT_YOUR_TWITTER_CONSUMER_SECRET"
export BOT_ACCESS_TOKEN="INSERT_YOUR_TWITTER_ACCESS_TOKEN"
export BOT_ACCESS_TOKEN_SECRET="INSERT_YOUR_TWITTER_ACCESS_TOKEN_SECRET"
```

Insert the words and hashtags the bot should search for in `/src/likebot.js`.
The list will be 'OR' concateted. If you wan't to build more sophisticated queries take a look at the search API documentation: https://dev.twitter.com/rest/public/search

```
// Add the words and or hashstag you are searching for here:
const searchTerms = [
    '#nodejs',
    '#react'
];
```

Exclude certain hashtags or words by just adding them to the blacklist.
```
// Any tweets containing any of the words will be not liked
const blacklist = [
    'sex',
    'cyalis',
    'viagra'
];
```

## Start
```
yarn like
```
or
```
npm like
```

## How to contribute?
Please just open a pull request.
