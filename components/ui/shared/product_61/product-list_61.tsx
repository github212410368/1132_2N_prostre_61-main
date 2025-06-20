import ProductCard_61 from "./product-card_61";
type ProductList = {
  data: any;
  title?: string;
  limit?: number;
};

function ProductList_61({ data, title, limit }: ProductList) {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: any) => (
            <ProductCard_61 key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>no product found</p>
        </div>
      )}
    </div>
  );
}

export default ProductList_61;
