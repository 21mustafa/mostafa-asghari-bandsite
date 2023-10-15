export class BandSiteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://project-1-api.herokuapp.com";
  }
  async postComment(comment) {
    console.log(comment);
    const response = await axios.post(
      `${this.baseURL}/comments?api_key=${this.apiKey}`,
      comment
    );
  }

  async getComments() {
    const response = await axios.get(
      `${this.baseURL}/comments?api_key=${this.apiKey}`
    );
    return response.data.sort((firstComment, secondComment) => {
      return secondComment.timestamp - firstComment.timestamp;
    });
  }

  async deleteComment(id) {
    const response = await axios.delete(
      `${this.baseURL}/comments/${id}?api_key=${this.apiKey}`
    );
  }

  async likeComment(id) {
    const response = await axios.put(
      `${this.baseURL}/comments/${id}/like?api_key=${this.apiKey}`
    );
  }

  async getShows() {
    const response = await axios.get(
      `${this.baseURL}/showdates?api_key=${this.apiKey}`
    );
    return response.data;
  }
}
