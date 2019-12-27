
export enum SyntaxErrorType {
    NoSpacesError
}

export default class SyntaxError extends Error {
    errorType: SyntaxErrorType;
    lineNumber: number;
    
    constructor(errorType: SyntaxErrorType, lineNumber: number, message?: string, ) {
        super(message);
        this.errorType = errorType;
        this.lineNumber = lineNumber;
    }

    printStackTrace = (): string => {
        switch(this.errorType) {
            case SyntaxErrorType.NoSpacesError:
                return `
                ${this.errorType} on line ${this.lineNumber}\n
                Reason: A Meerkat file cannot containing spaces on non commented lines
                ${this.message !== undefined ? "" : `\nInfo: ${this.message}`}
                `;
            default:
                return "";
        }
    }
}