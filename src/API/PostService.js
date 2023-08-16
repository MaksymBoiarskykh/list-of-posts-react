import axios from "axios";
const link = "https://jsonplaceholder.typicode.com/posts";

export class PostService {
  static async getAllPosts(page = 1, limit = 10) {
    const response = await axios.get(link, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }

  static async getPostInfo(id) {
    const response = await axios.get(`${link}/${id}`);
    return response;
  }

  static async getPostInfo(id) {
    const response = await axios.get(`${link}/${id}/comments`);
    return response;
  }
}
