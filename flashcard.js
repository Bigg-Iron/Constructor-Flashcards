// BasicCard constructor takes two arguments, front and back.
exports.BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
}

// ClozeCard constructor takes two arguments, text and cloze.
exports.ClozeCard = function(text, cloze) {
    // Answers to lowercase 
   var textToLower = text.toLowerCase();
    var clozeToLower = cloze.toLowerCase();

    // Confirm that the cloze statement appears within the complete text
    if (!textToLower.includes(clozeToLower)) {
        console.log('ERROR: cloze-deletion does not appear within full text -- <' + cloze + '>');
        return;
    }

    this.full = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, '...');
}
