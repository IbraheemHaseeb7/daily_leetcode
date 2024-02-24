function lengthOfLastWord(s: string): number {
    const lastWord: string[] = s.trim().split(" ");

    return lastWord[lastWord.length - 1].length;
}

export { lengthOfLastWord };
