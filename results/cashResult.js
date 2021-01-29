export function cashResult(cash) {
    if (cash < 0) {
        return `looks like you overdrew your bank account. Go back to Micky's and get to work!`;
    } else if (cash > 300) {
        return `condragulations! You will slay another day!!`;
    } else return 'You survived another day!';
}
