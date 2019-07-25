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

        const currentBranch = await gitBranch();
        const currentProject = (this.branchs.filter((branch) => branch.branch === currentBranch)[0] || []);
        const currentCommitMessage = 'Git Update on ' + currentBranch;

        const isCLS = await exeCommand(`cls`);
        const isBuilded = await exeCommand(`npm run build`);
        const isGitAdd = await exeCommand(`git add *`);
        const isGitCommit = await exeCommand(`git commit -m "${currentCommitMessage}"`);
        const isChanged = await exeCommand(`firebase use ${currentProject}`);
        const isDeployed = await exeCommand(`firebase deploy`);

        console.log('')
        console.log('currentBranch')
        console.log(currentBranch)
        console.log('')
        //BUILD
        //GET CURRENT BRANCH
        //SET FIREBASE PROJECT
        //FIREBASE DEPLOY


    }
}

module.exports = AppDeploy;