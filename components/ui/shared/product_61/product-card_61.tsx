import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Rating_61 from "./rating_61";
import ProductPrice_61 from "./product-price_61";
type ProductCard = {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string;
};

type ProductCardProp = {
  product: ProductCard;
};

function ProductCard_61({ product }: ProductCardProp) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Link href={`/product/${product.slug}`}>
          <Image
            alt={product.name}
            src={product.images[0]}
            width={300}
            height={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <Rating_61 value={product.rating} />
          {product.stock > 0 ? <ProductPrice_61 className="" value={product.stock}/> : <p className="text-destructive">Out of Stock</p>}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard_61;
