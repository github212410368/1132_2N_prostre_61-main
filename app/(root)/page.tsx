import { Button } from "@/components/ui/button";
import React, { Fragment } from "react";
//import sampleData from "@/db/simple-data";
import ProductList_61 from "@/components/ui/shared/product_61/product-list_61";
import { getLatestProducts_61 } from "@/lib/action/product.actions_61";
// async function delay(ms: number): Promise<void> {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
const HomePage_61 = async () => {
  //await delay(1000);
  //console.log("sampleData:", sampleData);
  const latestProducts = await getLatestProducts_61()
  return (
    <Fragment>
      <ProductList_61 data={latestProducts} limit={4}/>
    </Fragment>
  );
};

export default HomePage_61;
