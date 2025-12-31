export type actionFunction = (
  prevState: any,
  formdata: FormData
) => Promise<{ msg: string }>;

export type ProductCardProps = {
  id: string;
  title: string;
  description: string | null;
  image: string;
  category: string;
  price: number;
  productType?: "A" | "B"
};
export type SwiperProps = {
  id: string;
  image: string;
};
