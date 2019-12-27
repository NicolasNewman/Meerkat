import SyntaxError from './errors/SyntaxError';
import {SyntaxErrorType} from './errors/SyntaxError';

const checkNoSpaces = (line: string, lineNumber: number) => {
    if (line.includes(' ')) {
        throw new SyntaxError(SyntaxErrorType.NoSpacesError, lineNumber);
    }
}


export function verifySyntax(lines: Array<string>) {
    let lineNumber = 0;
    lines.forEach(line => {
        lineNumber++;
        checkNoSpaces(line, lineNumber);
    });
}