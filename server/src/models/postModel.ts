export default interface Post {
  id: number,
  createdAt: Date,
  title: string,
  content: string | null,
  published: boolean,
  viewCount: number,
  authorId: number | null
}
