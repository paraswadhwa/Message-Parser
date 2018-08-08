export const parseMessage = (templateStr, data) => {

    let arrOfKeys = templateStr.match(/{{[a-zA-Z0-9]+}}/g);
    if (arrOfKeys) {
        for (let i = 0; i < arrOfKeys.length; i++) {
            let key = arrOfKeys[i].slice(2, arrOfKeys[i].length - 2);
            templateStr = templateStr.replace('{{' + key + '}}', data[key]);
        }
    }
    return templateStr;
}