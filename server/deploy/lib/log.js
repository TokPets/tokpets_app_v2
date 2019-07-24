export function consoleLogTitle(title) {

    const titleLength = title.length;
    const titleBarBase = '-';
    const titleBar = titleBarBase.repeat(titleLength + 2);

    console.log('');
    console.log(cliColor.red('-- ' + titleBar + ' --'));
    console.log(cliColor.red('-- ' + ' ' + title + ' ' + ' --'));
    console.log(cliColor.red('-- ' + titleBar + ' --'));
    console.log('');

}