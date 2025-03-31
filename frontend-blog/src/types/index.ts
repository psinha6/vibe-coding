export interface Author {
  id: string
  name: string
  avatar: string
  bio: string
  twitter?: string
  github?: string
  website?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
}

export interface Tag {
  id: string
  name: string
  slug: string
}

export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: Author
  category: Category
  tags: Tag[]
  readingTime: string
}

export interface Comment {
  id: string
  content: string
  author: {
    name: string
    avatar?: string
  }
  date: string
  postId: string
  parentId?: string
  replies?: Comment[]
} 