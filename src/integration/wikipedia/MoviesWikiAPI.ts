import { Movie } from "../../entity/Movie";
import { Service } from "typedi";

const axios = require('axios').default;

@Service()
export class MoviesWikiAPI {

  baseURL = 'http://en.wikipedia.org/w/api.php';


  async getMovie(movie: Movie) {
    let wikiInfo = await this.getWikiPageProperName(movie.title)
    let link = await this.getWikiPageLink(wikiInfo)
    console.log(wikiInfo)
    console.log(link)
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
      // console.log("received response")
      // console.log(response)
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
}

const processWikiSearchResponse = (resp: any): WikiInfo => {
  console.log("processing wiki search resp")
  console.log(resp.data.query.search[0])
  console.log(resp.data.query.search[0].title)
  const wikiInfo: WikiInfo = {properTitle: resp.data.query.search[0].title, pageId: resp.data.query.search[0].pageid}
  console.log(wikiInfo)

  return wikiInfo
}

const processWikiInfoProp = (resp: any, info: WikiInfo): string => {
  console.log("processing wiki info prop")
  console.log(resp.data.query.pages)
  console.log(info)
  console.log(resp.data.query.pages[info.pageId.toString()])

  return resp.data.query.pages[info.pageId.toString()].fullurl
}

class WikiInfo {
  properTitle: string;
  pageId: number;
}