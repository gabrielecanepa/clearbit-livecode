## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install) installed.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:gabrielecanepa/clearbit-livecode.git
cd clearbit-livecode
rm -rf .git
yarn install
stt # open this folder in Sublime Text
```

[Sign up on Clearbit](https://dashboard.clearbit.com/signup), copy the API key from [your dashboard](https://dashboard.clearbit.com/api) (the one starting with `sk_`), and paste it in the `clearbit.js` file.

Make sure to have `./node_modules/.bin` in your `$PATH`! This way you can run:

```bash
webpack-dev-server
```

Open the browser and go to http://localhost:8080 😎
