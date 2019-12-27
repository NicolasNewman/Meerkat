import * as fs from 'fs';
import * as readline from 'readline';
import {verifySyntax} from './syntaxVerifier'


export default class Parser {
    private readonly interface: readline.Interface;

    constructor(src: string) {
        this.interface = readline.createInterface({
            input: fs.createReadStream(src),
            output: process.stdout
        });
    }

    parse = () => {
        const lines: Array<string> = [];
        this.interface.on('line', (line) => {
            lines.push(line);
        });
        verifySyntax(lines);
        this.end();
    }

    // private parseLine = (line: string) => {
    //     line.split('')
    // }

    private end = () => {
        this.interface.close();
    }
}