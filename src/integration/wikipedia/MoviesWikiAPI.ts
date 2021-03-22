import { Movie } from "../../entity/Movie";
import { Service } from "typedi";
import { parseParagraph as parseNthParagraphOf } from "./HtmlParserUtil";
import { WikiData } from "../../types/WikiData";

const axios = require('axios').default;

@Service()
export class MoviesWikiAPI {

  baseWikiURL = 'http://en.wikipedia.org/w/api.php';

  async getMovie(movie: Movie): Promise<WikiData> {
    let wikiInfo = await this.getWikiPageProperName(movie.title)
    let link = await this.getWikiPageLink(wikiInfo)
    let pagecontent = await this.getWikiPageContent(wikiInfo)

    return new WikiData(wikiInfo.properTitle, pagecontent, link )
  }

  private async getWikiPageLink(info: WikiInfo): Promise<string> {
    try {
      const response = await axios.get(`${this.baseWikiURL}`, {
        params: {
          "action": "query",
          "prop": "info",
          "inprop": "url",
          "titles": `${info.properTitle}`,
          "format": "json"
        }
      });

      return processWikiInfoProp(response, info)
    } catch (error) {
      console.log(error)

      return ""
    }
  }

  private async getWikiPageProperName(title: string): Promise<WikiInfo> {
    try {
      const response = await axios.get(`${this.baseWikiURL}`, {
        params: {
          "action": "query",
          "list": "search",
          "srsearch": `${title} incategory:English-language_films`,
          "format": "json"
        }
      });

      return processWikiSearchResponse(response)
    } catch (error) {
      console.log(error)

      return {properTitle: "", pageId: -1} as WikiInfo
    }
  }

  private async getWikiPageContent(info: WikiInfo): Promise<string> {
    try {
      const response = await axios.get(`${this.baseWikiURL}`, {
        params: {
          "action": "query",
          "prop": "extracts",
          "titles": `${info.properTitle}`,
          "format": "json"
        }
      });

      return processWikiExtractResponse(response, info)
    } catch (error) {
      console.log(error)

      return ""
    }
  }
}

const processWikiSearchResponse = (resp: any): WikiInfo => {
  // See https://www.mediawiki.org/wiki/API:Search
  const wikiInfo: WikiInfo = {
    properTitle: resp.data.query.search[0].title,
    pageId: resp.data.query.search[0].pageid
  }

  return wikiInfo
}

const processWikiExtractResponse = (resp: any, info: WikiInfo): string => {
  // See https://www.mediawiki.org/wiki/API:Get_the_contents_of_a_page
  const fullContent = resp.data.query.pages[info.pageId].extract || ""

  return parseNthParagraphOf(fullContent, 1)
}

const processWikiInfoProp = (resp: any, info: WikiInfo): string => {
  // See https://www.mediawiki.org/wiki/API:Query
  return resp.data.query.pages[info.pageId.toString()].fullurl
}

class WikiInfo {
  properTitle: string;
  pageId: number;
}