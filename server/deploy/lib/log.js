const cliColor = require("cli-color");

module.exports = {
    consoleLogTitle: function (title) {

        const titleLength = title.length;
        const titleBarBase = '-';
        const titleBar = titleBarBase.repeat(titleLength + 2);

        console.log('');
        console.log(cliColor.green('-- ' + titleBar + ' --'));
        console.log(cliColor.green('-- ' + ' ' + title + ' ' + ' --'));
        console.log(cliColor.green('-- ' + titleBar + ' --'));
        console.log('');

    }
}

