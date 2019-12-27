import * as fs from 'fs';
import * as readline from 'readline';
import Parser from './Parser';

export default class Meerkat {
    private readonly parser: Parser;
    constructor(src: string) {
        this.parser = new Parser(src);
    }

    execute = () => {
        this.parser.parse();
    }
}