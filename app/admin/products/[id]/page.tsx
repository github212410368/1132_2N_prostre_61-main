import { Metadata } from 'next';
import UpdateProductForm_xx from './update-product-form_xx';
import { getProductById } from '@/lib/action/product.actions_61';
import notFound from '@/app/not-found';

export const metadata: Metadata = {
  title: 'Update Product',
};

const UpdateProductPage_xx = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;
  const product = await getProductById(id);
  console.log('product', product);
  console.log('typeof product', typeof product);
  if (!product) notFound();

  return (
    <>
      <h2 className='h2-bold'>Update Product</h2>
      <div className='my-8'>
        {product && (
          <div>
            <UpdateProductForm_xx
              product={{
                ...product,
                price: product.price.toString(),
              }}
              productId={product?.id ?? ''}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default UpdateProductPage_xx;
