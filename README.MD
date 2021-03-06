# Visual Studio Code Haxe Template Installer

Template: [![GitHub version](https://badge.fury.io/gh/bricksoft%2Fvsc-haxe-template.svg)](https://badge.fury.io/gh/bricksoft%2Fvsc-haxe-template)

This Package: [![npm version](https://badge.fury.io/js/haxe-vsc-template.svg)](https://badge.fury.io/js/haxe-vsc-template)

---

An npm Package for Node.js to install a preconfigured Visual Studio Code Project for HAXE.

The Template can be found [here](https://github.com/bricksoft/vsc-haxe-template/). 

## Installation

> npm install -g haxe-vsc-template npm-haxe-vsc-template-files


## Commandline Usage

After global installation you can jump into your directory and type

> init_Haxe

You can also specify the target directory by typing 

> init_Haxe DIRECTORY


## Scripting Usage

You can install this package locally to your project to use it in a script.

> npm install haxe-vsc-template --save


```nodejs
// require Template to use it programmatically
var Template = require("haxe-vsc-template");

// install template in directory
Template.install(directory);
```