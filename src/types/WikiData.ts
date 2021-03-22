export class WikiData {
    title: string;

    firstParagraph: string;

    link: string;

    constructor(title: string, firstParagraph: string, link: string) {
        this.title = title;
        this.firstParagraph = firstParagraph;
        this.link = link;
    }
}