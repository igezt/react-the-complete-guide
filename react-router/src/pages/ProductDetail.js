import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {

    const params = useParams();

    return(
        <>
            <h1>Product Details!</h1>
            {params.productId}
            <Link to={"../p1"} relative="path">Back</Link>
        </>
    );
};

export default ProductDetailPage;