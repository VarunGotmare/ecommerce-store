import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

const HomePage = async () => {
  const billboard = await getBillboard("6f4ad4b8-5ebe-43e6-a241-065359a1082a");
  const products = await getProducts({isFeatured: true});
  return ( 
    <Container>
      <div className="space-y-10 pb-10 ">
        <Billboard data={billboard} />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="New Products" items={products} />
      </div>
      </div>
    </Container>
   );
}
 
export default HomePage;