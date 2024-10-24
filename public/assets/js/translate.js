function getTextNodes (root) {
    let tw = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: function(node) {
            return /^(STYLE|SCRIPT)$/.test(node.parentElement.tagName) ||
            /^\s*$/.test(node.data) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
    })

    let result = []
    while (tw.nextNode()) result.push(tw.currentNode)
    return result
}

function decodeHTMLEntities(text) {
    let entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"']
    ];

    for (let i = 0, max = entities.length; i < max; ++i)
        text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);

    return text;
}