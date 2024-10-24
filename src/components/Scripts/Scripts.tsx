import Script from "next/script";

const Scripts = () => {
    return (
        <>
            {/* JS */}
            <Script src="assets/js/jquery.min.js" strategy="beforeInteractive" />
            <Script src="assets/js/bootstrap.bundle.min.js" />
            <Script src="assets/js/plugins.js" />
            <Script src="assets/js/jquery.ajaxchimp.min.js" strategy="beforeInteractive" />
            <Script src="assets/js/contact-form.js" />
            <Script src="assets/js/all.js" />
            <Script src="assets/js/translate.js" />
            <Script src="assets/js/text-reflow.js" />
            {/* <Script src="assets/js/content.js" /> */}
        
            <Script src="assets/plugins/video-js/video.min.js" />
            <Script src="assets/plugins/video-js/youtube.js" />
            <Script src="assets/plugins/swiper/swiper.min.js" strategy="beforeInteractive" />
            <Script src="assets/plugins/counter-up/counter-up.min.js" />
        
        
            <Script id="Scripts-script">
            {`
                $(document).ready(function () {
        
                    let currentLocale = 'en';
        
        
                    $('#timezone').val(Intl.DateTimeFormat().resolvedOptions().timeZone);
        
                    //Paragraph Text Adjustments
                    $('.p-text').each(function () {
                        let innerElemThis = $(this);
                        let innerElemText = $(this).text();
                        let innerElem = null;
                        let boldNodes = [];
                        if ($(this)[0].childNodes.length > 1) {
                            $(this)[0].childNodes.forEach(function (innerElemNode) {
                                if (innerElemNode.nodeName == 'B') {
                                    boldNodes.push(innerElemNode);
                                }
                            });
                            $(this).html(innerElemText);
                            innerElem = $(this)[0].childNodes[0];
                        } else {
                            innerElem = $(this)[0].childNodes[0];
                        }
                        //console.log(boldNodes);
                        //console.log(innerElem);
                        let innerElemLines = extractLinesFromTextNode(innerElem);
                        //logLines(innerElemLines);
                        let boldNodesInLine = 0;
                        innerElemLines.forEach(function (innerElemLine, innerElemLineNumber) {
                            let innerElemWords = innerElemLine.split(' ');
                            innerElemWords.reverse();
                            console.log(innerElemWords);
                            if (innerElemLineNumber < (innerElemLines.length - 1)) {
                                let wordReflowIndex = 0;
                                let wordReflowLetterIndex = -1;
                                boldNodes.forEach(function (boldNode, boldNodeNumber) {
                                    if (innerElemLine.includes(boldNode.textContent)) {
                                        boldNodesInLine++;
                                    }
                                });
                                innerElemWords.forEach(function (innerElemWord, innerElemWordNumber) {
                                    if (innerElemWordNumber >= boldNodesInLine) {
                                        if (innerElemWordNumber < 1) {
                                            if (innerElemWordNumber == 0 || wordReflowIndex > 0) {
                                                if (softWords.includes(innerElemWord)) {
                                                    wordReflowIndex++;
                                                    wordReflowLetterIndex += (innerElemWord.length + 1);
                                                }
                                            }
                                        }
                                    } else {
                                        wordReflowIndex++;
                                        wordReflowLetterIndex += (innerElemWord.length + 1);
                                    }
                                });
                                if (wordReflowIndex > 0) {
                                    let wordReflowLength = innerElemLine.length - wordReflowLetterIndex;
                                    let wordReflowText = '';
                                    innerElemLines.forEach(function (innerElemLineInst, innerElemLineInstNumber) {
                                        let innerElemWordsCurrent = innerElemLineInst.split(' ');
                                        let innerElemWordsNext = [];
                                        if (innerElemLines[innerElemLineInstNumber + 1]) {
                                            innerElemWordsNext = innerElemLines[innerElemLineInstNumber + 1].split(' ');
                                        }
                                        if (innerElemLineInstNumber == innerElemLineNumber) {
                                            wordReflowText += innerElemLine.substring(0, (wordReflowLength - 1));
                                            if (innerElemWordsCurrent.length >= 5 && innerElemWordsNext.length >= 5) {
                                                wordReflowText += '<br>';
                                            } else {
                                                wordReflowText += ' ';
                                            }
                                            wordReflowText += innerElemLine.substring(wordReflowLength) + ' ';
                                        } else {
                                            wordReflowText += innerElemLineInst;
                                            if (innerElemWordsCurrent.length >= 5 && innerElemWordsNext.length >= 5) {
                                                wordReflowText += '<br>';
                                            } else {
                                                wordReflowText += ' ';
                                            }
                                        }
                                    });
                                    //console.log(wordReflowText);
                                    innerElemThis.html(wordReflowText);
                                    //Update Lines Array
                                    innerElemLines.forEach(function (innerElemLineInst, innerElemLineInstNumber) {
                                        if (innerElemLineInstNumber == innerElemLineNumber) {
                                            innerElemLines[innerElemLineInstNumber] = innerElemLineInst.substring(0, (wordReflowLength - 1));
                                            if (innerElemLineInstNumber < (innerElemLines.length - 1)) {
                                                innerElemLines[innerElemLineInstNumber + 1] = innerElemLineInst.substring(wordReflowLength) + ' ' + innerElemLines[innerElemLineInstNumber + 1];
                                            }
                                        }
                                    });
                                    //console.log(innerElemLines);
                                    boldNodes.forEach(function (boldNode, boldNodeNumber) {
                                        wordReflowText = wordReflowText.replace(boldNode.textContent, boldNode.outerHTML);
                                        innerElemThis.html(wordReflowText);
                                    });
                                }
                            }
                        });
        
                    });
        
                });
            `}
            </Script>
        </>
    );
}

export default Scripts;