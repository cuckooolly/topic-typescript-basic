import {ApiResponse, DraftPost, IBlogService, Post} from "./types";

export class BlogService implements IBlogService {
  private posts: Post[] = [];
  private nextPostId: number = 1;

  // TODO-3: 아래 메서드들의 타입이 실제 API호출처럼 비동기적으로 동작한다고 가정합니다.
  // 각 메서드들의 리턴타입을 Promise<ApiResponse<T>> 형태로 수정하세요
  // 메서드들을 async 함수로 수정하세요.

  async getAllPosts(): Promise<ApiResponse<Post[]>> {
    return {success: true, data: this.posts, error: undefined};
  }

  async getPostById(id: number): Promise<ApiResponse<Post | undefined>>  {
    return {success: true, data: this.posts.find((post) => post.id === id), error: undefined};
  }

  async addPost(postData: Omit<DraftPost, "status">): Promise<ApiResponse<Post>> {
    const post: Post = {
      ...postData,
      status: "draft",
      id: this.nextPostId++,
    };
    this.posts.push(post);
    return {success: true, data: post, error: undefined};
  }

  async updatePost(
    id: number,
    updateData: Partial<Omit<Post, "id" | "status">>,
  ): Promise<ApiResponse<Post | undefined>>{
    const post = await this.getPostById(id);
    if (!post.data) return {success: false, data: undefined, error: "Post not found"};
    const updatedPost = { ...post.data, ...updateData };
    this.posts = this.posts.map((p) => (p.id === id ? updatedPost : p));
    return {success: true, data: updatedPost, error: undefined};
  }

  async deletePost(id: number): Promise<ApiResponse<boolean>>{
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) return {success: false, data: false, error: "Post not found"};
    this.posts.splice(index, 1);
    return {success: true, data: true, error: undefined};
  }
}
