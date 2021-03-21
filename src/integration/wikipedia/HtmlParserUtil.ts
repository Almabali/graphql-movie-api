import { parse } from 'node-html-better-parser';


export const parseParagraph = (content: string, nth: number): string => {
    const root = parse(content);

    const selectedParagraph = root.querySelectorAll('p')[nth]

    return selectedParagraph.toString()
  }
  