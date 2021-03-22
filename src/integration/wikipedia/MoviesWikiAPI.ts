import { Movie } from "../../entity/Movie";
import { Service } from "typedi";
import { parseParagraph } from "./HtmlParserUtil";
import { WikiData } from "../../types/WikiData";

const axios = require('axios').default;

@Service()
export class MoviesWikiAPI {

  baseURL = 'http://en.wikipedia.org/w/api.php';


  async getMovie(movie: Movie): Promise<WikiData> {
    let wikiInfo = await this.getWikiPageProperName(movie.title)
    let link = await this.getWikiPageLink(wikiInfo)
    let pagecontent = await this.getWikiPageContent(wikiInfo)
    console.log(wikiInfo)
    console.log(link)
    console.log(pagecontent)

    return new WikiData(wikiInfo.properTitle, pagecontent, link )
  }

  async getWikiPageLink(info: WikiInfo): Promise<string> {
    try {
      const response = await axios.get(`${this.baseURL}`, {
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

  async getWikiPageProperName(title: string): Promise<WikiInfo> {
    try {
      const response = await axios.get(`${this.baseURL}`, {
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

  async getWikiPageContent(info: WikiInfo): Promise<string> {
    try {
      const response = await axios.get(`${this.baseURL}`, {
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

const processWikiExtractResponse = (resp: any, info: WikiInfo): string => {
  console.log("processing wiki extracts resp")
  console.log(resp.data.query)

  const fullContent = resp.data.query.pages[info.pageId].extract || ""
  return parseParagraph(fullContent, 1)
}

const processWikiSearchResponse = (resp: any): WikiInfo => {
  console.log("processing wiki search resp")
  console.log(resp.data.query.search[0])
  const wikiInfo: WikiInfo = {properTitle: resp.data.query.search[0].title, pageId: resp.data.query.search[0].pageid}
  console.log(wikiInfo)

  return wikiInfo
}

const processWikiInfoProp = (resp: any, info: WikiInfo): string => {
  console.log("processing wiki info prop")
  console.log(resp.data.query.pages)

  return resp.data.query.pages[info.pageId.toString()].fullurl
}

class WikiInfo {
  properTitle: string;
  pageId: number;
}