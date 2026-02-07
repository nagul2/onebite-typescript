/**
 * Pick<T, K>
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "",
  content: "",
};

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

/**
 * Omit<T, K>
 */

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Record<K, V>
 */
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};

type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string; size: number }
>;

type Record<K extends keyof any, V> = {
  [key in K]: V;
};
