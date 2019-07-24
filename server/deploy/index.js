/** 
 *  ----------------------------------------------------- --
 *  --                                                    --
 *  --  | TokPets Firebase & Git Deploy Methods        |  --
 *  --  |                                              |  --
 *  --  | Created By : Jorge Luis Mayorga Taborda      |  --
 *  --  | Created At : Bogotá, Colombia.               |  --
 *  --  |                                              |  --
 *  --                                                    --
 *  ----------------------------------------------------- --
 */




// --------------------------------------------------------- //
// -- Require & Dependecies -------------------------------- //
// --------------------------------------------------------- //
const util = require("util");
const cliColor = require("cli-color");
const gitBranch = require("git-branch");
const exeCommand = util.promisify(require("child_process").exec);
// --------------------------------------------------------- //




// --------------------------------------------------------- //
// -- Config & Settings ------------------------------------ //
// --------------------------------------------------------- //
import AppBranchs from './config/branch-strategies.json';
import AppDeploy from './class/AppDeploy.class';
// --------------------------------------------------------- //




// --------------------------------------------------------- //
// -- Main & Deploy ---------------------------------------- //
// --------------------------------------------------------- //
const appDeploy = new AppDeploy();
appDeploy.setBranchs(AppBranchs);
appDeploy.run("TokPets PWA Deploying App");
// --------------------------------------------------------- //






