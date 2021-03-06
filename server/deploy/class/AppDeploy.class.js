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

        try {
            const isCLS = await exeCommand(`cls`);
            logs.succesfull('isCLS  Ok');

            const isBuild = await exeCommand(`npm run build`);
            logs.succesfull('isBuild  Ok');

            const isGitAdd = await exeCommand(`git add *`);
            logs.succesfull('isGit Add  Ok');

            const isGitCommit = await exeCommand(`git commit -m "${currentCommitMessage}"`);
            logs.succesfull('isGit Commit -m ' + currentCommitMessage + '  Ok');

            const isGitPull = await exeCommand(`git pull`);
            logs.succesfull('isGit Pull Ok');

            const isGitPush = await exeCommand(`git push`);
            logs.succesfull('isGit Push Ok');

            const isChanged = await exeCommand(`firebase use ${currentProject}`);
            logs.succesfull('isChanged OK');

            const isDeployed = await exeCommand(`firebase deploy`);
            logs.succesfull('isDeployed Ok');

        } catch (error) {
            logs.error(error);
        }

    }
}

module.exports = AppDeploy;