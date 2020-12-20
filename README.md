# i_wanna_b_the_guy's Warframe Tier List

![Build Angular App](https://github.com/weblue/wanna_b_tierlist/workflows/Build%20Angular%20App/badge.svg)
[![GitHub issues](https://img.shields.io/github/issues/weblue/wanna_b_tierlist)](https://github.com/weblue/wanna_b_tierlist/issues)
[![Website Up/Down](https://img.shields.io/website/https/www.cephalonwannab.com?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online)](https://www.cephalonwannab.com)
![License](https://img.shields.io/github/license/weblue/wanna_b_tierlist)

*This is the branch for the Angular rewrite of the app.*

This is the GitHub repository that holds the code for i_wanna_b_the_guy's Warframe Tier List, currently hosted at [cephalonwannab.com](https://www.cephalonwannab.com/). It was built with [Angular](https://angular.io), [Angular Material](https://material.angular.io/), [Bulma](https://bulma.io), and [Font Awesome](https://fontawesome.com). 

This website is built by the Warframe community; as such, if you have any issues, suggestions, or want to help, you are more than welcome to! You can start by either [submitting an issue](https://github.com/weblue/wanna_b_tierlist/issues) or forking this repository and [making a pull request](https://github.com/weblue/wanna_b_tierlist/pulls). In addition, we have a [vibrant Discord server](https://discord.gg/Cq3jW27), where you can discuss this tierlist and suggest improvements (amongst other things).

## Development Setup

The typical node workflow (you'll need a copy of node on your computer:

```sh
$ git clone https://github.com/weblue/wanna_b_tierlist.git
$ cd wanna_b_tierlist
$ npm install
$ npm start
```

## Data

Currently, this website loads all of its data from `src/assets/js/thelist.json`, using it as its single source of truth. As this data is free and open-source, you are welcome to use this data however you see fit.

This data is generously curated and formatted by [sakai4eva](https://reddit.com/u/sakai4eva). If you'd like to discuss or dispute the submitted data, feel free to [submit an issue](https://github.com/weblue/wanna_b_tierlist/issues) or [join us on discord](https://discord.gg/Cq3jW27).

## Rework & Upcoming Features

The development team is actively working on rewriting the web application to use Angular 2+. With this comes several new features, including:

* better searching and filtering
* more detailed item cards, with click-to-expand
* more descriptive ranking
* clearer ways to display and rank frames
* special indications column (e.g. niche, unusual riven disposition)

If you have any other suggestions, feel free to let us know!
