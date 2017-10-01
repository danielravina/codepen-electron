# CodePen (built with Electron)
Listened to [CodePen Radio episode 140 - Saying No](https://blog.codepen.io/2017/08/29/140-saying-no/).  [@chriscoyier](https://github.com/chriscoyier) mentioned that there was a feature request to have an electron app for [codepen.io](https://codepen.io) and they had to say "no" to that..

So I built this one for fun! It's really useful when quickly testing a piece of code, browsing pens or working on a full blown pen/post.

[Download macOS client](https://github.com/danielravina/codepen-electron/blob/master/build/codepen-electron-darwin-x64/codepen-electron-0.0.2.dmg?raw=true)

![screenshot](https://github.com/danielravina/codepen-electron/raw/master/screenshot.jpg)
_Example pen is [campfire](https://codepen.io/short/pen/gGWbQB)_


### Build Locally
requires [Node.js](https://nodejs.org/en/download/) > 6

Clone the repo:
```
git clone https://github.com/danielravina/codepen-electron.git
```

Install dependencies:
```
cd codepen-electron
npm install
```

Run it or build it:
```
npm start
# OR
npm run build
```
