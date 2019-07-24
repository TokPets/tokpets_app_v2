'use strict';
const util = require("util");
const cliColor = require("cli-color");
const gitBranch = require("git-branch");
const exeCommand = util.promisify(require("child_process").exec);
const logs = require('./../lib/log');

export default class AppDeploy {

    constructor(WelcomeMessage) {
        this.welcomeMessage = WelcomeMessage;
        this.branchs = [];
    }



    setBranchs(Branchs) {
        this.branchs = Branchs;
    }


    setBuild(BuildCommand) {

    }


    run() {
        const initMessage = this.welcomeMessage;
        logs.consoleLogTitle(initMessage);
    }
}