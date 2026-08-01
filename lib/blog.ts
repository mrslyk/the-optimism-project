export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  author: string;
  published: string;
  readMinutes: number;
  category: "Founder's note" | "Research" | "Practice" | "Field note";
  body: { heading?: string; paragraphs: string[] }[];
};

// Add the first signed essay here when its final text is supplied.
// The blog intentionally launches without a fabricated article or author.
export const blogPosts: BlogPost[] = [];

export function getBlogPost(slug: string) { return blogPosts.find(post => post.slug === slug); }
