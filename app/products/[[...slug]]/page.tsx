interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductsDetails = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return <div>ProductsDetails {sortOrder}</div>;
};
export default ProductsDetails;
