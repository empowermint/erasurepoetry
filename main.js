const generateErasure = () => {

    const poemInput = document.getElementById('poemInput').value;
    const poemOutput = document.getElementById('poemOutput');
    const poemLines = poemInput.split(/\r?\n/);

    const wordCount = poemInput.split(/\r?\n?\s/).length;
    const percentageToErase = document.getElementById('percentageInput').value;
    const wordsToMark = Math.floor( (100-percentageToErase)/100 * wordCount ); // Marked words are revealed in the poem

    let poemWords = [];
    poemLines.forEach(line => {
        const words = line.split(' ');
        poemWords.push(words);
    });

    for (let i = 0; i < wordsToMark; i++) {
        const chooseLine = Math.floor(Math.random() * poemWords.length);
        const chooseWord = Math.floor(Math.random() * poemWords[chooseLine].length);
        const selectedWord = poemWords[chooseLine][chooseWord];
        poemWords[chooseLine][chooseWord] = '<mark>' + selectedWord + '</mark>';
    }

    poemLinesOutput = poemWords.map(line => {
        let combinedLine = line.reduce((acc, curr) => {
            return acc + ' ' + curr;
        });
        combinedLine = combinedLine.replace(/\<\/mark\>\s\<mark\>/g, ' ');
        return combinedLine;
    });

    // DISPLAY POEM

    let poemDisplay = '';
    poemLinesOutput.forEach(line => {
        poemDisplay += '<span class="line">' + line + '</span><br>'
    });
    poemOutput.innerHTML = poemDisplay;
}

