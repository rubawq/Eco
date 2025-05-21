//card Types
export type CardType = {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
  image?: string;
} & React.HTMLAttributes<HTMLDivElement>;

