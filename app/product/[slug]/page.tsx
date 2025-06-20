import { notFound } from "next/navigation";
import ProductPrice_61 from "@/components/ui/shared/product_61/product-price_61";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/action/product.actions_61";
// import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import ProductImages_61 from "@/components/ui/shared/product_61/product-images_61";
import Rating_61 from "@/components/ui/shared/product_61/rating_61";

import AddToCart_61 from "@/components/ui/shared/product_61/add-to-cart_61";
import { Button } from "@/components/ui/button";
import Headers_61 from "@/components/ui/shared/header_61";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;

  const { slug } = params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <Headers_61 />
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Images Column */}
          <div className="col-span-2">
            <ProductImages_61 images={product.images!} />
          </div>

          {/* Details Column */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <Rating_61 value={Number(product.rating)} />
              <p>{product.numReviews} reviews</p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ProductPrice_61
                  value={Number(product.price)}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>
            <div className="mt-10">
              <p>Description:</p>
              <p>{product.description}</p>
            </div>
          </div>
          {/* Action Column */}
          <div>
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>
                    <ProductPrice_61 value={Number(product.price)} />
                  </div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {product.stock > 0 ? (
                    <Badge variant="outline">In stock</Badge>
                  ) : (
                    <Badge variant="destructive">Unavailable</Badge>
                  )}
                </div>
                {product.stock > 0 && (
                  <div className=" flex-center">
                    <AddToCart_61
                      item={{
                        productId: product.id,
                        name: product.name,
                        slug: product.slug,
                        qty: 1,
                        image: product.images![0],
                        price: product.price.toString(),
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
