

type Preview = {
  id: string | number;
  title: string;
  category?: string
};

type Post = Preview & {
  content: string;
};

export type {
  Post, 
  Preview,
}