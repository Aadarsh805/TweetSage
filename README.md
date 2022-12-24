# TweetSage

An open-source tool that analyzes your Twitter activity and answers to your questions based on your recent tweets
Wanna know more how it's built, check out my blog on how it built it: [BLOG LINK](https://aadarshthakur.hashnode.dev/how-i-built-tweetsage-by-using-chatgpt-and-twitter-api-together)

https://user-images.githubusercontent.com/95094057/208742885-50db694c-1b8d-4aa4-bbc7-22ac8e932044.mp4


## How it works

- It works by fetching the user's recent tweets from the Twitter API
- Then we give those tweets to chatGPT thorugh openAI's API and it generate answer based on user's recent tweets 

<!-- 
## Tech Stack
<div align="left" gap="2">          
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width=40 height=40/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />          
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"  width=40 height=40/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" width=40 height=50/>
</div> 
-->


## Installation

> This project is built on nextJS 13 experimental version

1. Fork the repo into your account

![Fork Image](https://i.imgur.com/mNw6zxu.png)

2. Clone the project into your local machine

```sh
git clone https://github.com/<Your-name>/TweetSage.git
```

3. Navigate the folder

```sh
cd TweetSage
```

3. Install the dependencies

```sh
npm install
```
4. Make .env file in root directory with these variables

```sh
BearerToken= 'YOUR TWITTER API KEY GOES HERE'
OPEN_API_KEY= 'YOUR OPENAI API KEY GOES HERE'
```
- Get your twitter api key here: [TWITTER API](https://developer.twitter.com/en/products/twitter-api)
- Get your openAi api key here: [OPENAI API](https://openai.com/api/)

5. Run the project on local machine

```sh
npm run dev
```
6. Every time you start making changes to your forked repo make sure it's in sync with the original repo

## Contributing Guidelines

Thank you for considering to contribute to this project.

### What do I need to know to contribute?

This project is in a very early stage so anybody who's familiar with **ReactJS**/**NextJS**/**Typescript**/**TailwindCSS** can contribute. If you don't feel ready to make a contribution yet, no problem at all. You can also contribute to this `ReadMe` section or the **Documentation** part of our project.

If you are interested to contribute and want to learn more about the technologies that are used in this project, checkout the links below.

- [ReactJS Official Docs](https://reactjs.org/docs/getting-started.html)
- [NextJS Documentation](https://beta.nextjs.org/docs)
- [Typescript Documentaion](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs/installation)
- [Material UI Documentaion](https://mui.com/material-ui/getting-started/overview/)

### How to make a Contribution?

Never made an open source contribution before? And wondering how to contribute to this project?
No worries! Here's a quick guide,

1. Choose any feature/bug you wish to contribute to.
2. Fork the repository into your own account.
3. Clone the repo you have forked in your local machine using `git clone https://github.com/<Your-name>/TweetSage.git`
4. Create a new branch for your fix by using the command `git checkout -b YourName-branch-name `
5. Make the changes you wish to do and stage them using the command `git add files-you-have-changed ` or use `git add .`
6. Use the command `git commit -m "Short description of the changes"` to describe the changes you have done with a message.
7. Push the changes to your remote repository using `git push origin your-branch-name`
8. Submit a PR(pull request) to the upstream repository `Aadarsh805/TweeetSage` with a title and a small description.
9. Wait for the pull request to be reviewed by us.
10. Make appropriate changes if the maintainer recommends you to and submit it.
11. Await for your contribution to be merged into the repository.

Checkout the [Contributing.md](CONTRIBUTING.md) file before contributing.


### Where can I go for help?

If you need help, you can ask questions on our twitter :

- [**Aadarsh Thakur**](https://twitter.com/Aadarsh805)
- [**Somidh Roy**](https://twitter.com/RoySomidh)

## Credits

- UI credits : [form carry](https://formcarry.com)


## License

[MIT](LICENSE.md)


## Thanks to all the Contributors ❤️

<a href = "https://github.com/Aadarsh805/TweetSage/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Aadarsh805/TweetSage"/>
</a>


## Your Support means a lot

Give a ⭐ to the project if you liked it. :)
