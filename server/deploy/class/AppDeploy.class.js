'use strict';
const util = require("util");
const gitBranch = require("git-branch");
const exeCommand = util.promisify(require("child_process").exec);
const logs = require('./../lib/log');

class AppDeploy {

    constructor() {
        this.welcomeMessage = '';
        this.branchs = [];
    }

    setBranchs(Branchs) {
        this.branchs = Branchs;
    }

    setBuild(BuildCommand) {

    }

    async run(initMessage) {

        logs.consoleLogTitle(initMessage);

        const isCLS = await exeCommand('cls');
        const isLBuild = await exeCommand('npm run build');
        const currentBranch = await gitBranch();
        console.log('')
        console.log('currentBranch ')
        console.log(currentBranch)
        console.log('')
        //BUILD
        //GET CURRENT BRANCH
        //SET FIREBASE PROJECT
        //FIREBASE DEPLOY


    }
}

module.exports = AppDeploy;