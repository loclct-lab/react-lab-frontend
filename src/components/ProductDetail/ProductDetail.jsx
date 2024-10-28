import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct/CardProduct";
import TabProduct from "./TabProduct/TabProduct";
import Descriptions from "./Descriptions/Descriptions";
import Review from "./Review/Review";
import Comment from "./Comment/Comment";
import RealatedProduct from "./RealatedProduct/RealatedProduct";
import axios from "axios";
import { API_PUBLIC_URL } from "../../utils/config";
import { Container, Skeleton } from "@mui/material";
import MainLayout from "../MainLayout";
import queryString from "query-string";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    // let id = queryString.parse(window.location.search);
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState({})
        function fetchProductDetailById (productId) {
            try {
                const response = axios.get(`API_URL/product?id=${productId}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if(response.status === 200 && response.data.length > 0) {
                    setProductDetail(response.data)
                }
            } catch (error) {
                console.log(error);
                // Xử lý lỗi 
            }
        }
    let idProduct = id;
    const [data, setProductData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const getProductDetail = async (id) => {
            try {
                const res = await axios.get(
                    `${API_PUBLIC_URL}products/${id}`,
                );
                setProductData(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getProductDetail(idProduct);
    }, [idProduct]);
    // const data = productData;

    return (
        <MainLayout>
            
            {data ? (
                <div>
                    <CardProduct data={data} />
                    <TabProduct />
                    <Descriptions data={data} />
                    <Review data={data} />
                    <Comment />
                    <RealatedProduct data={data} />
                </div>
            ) : (
                    <Container maxWidth="lg" className="center">
                        <p className="review-name dark-title h22">{`Chi tiết sản phẩm: ${id}`}</p>
                        <Skeleton
                            className="mg20"
                            variant="rounded"
                            animation="pulse"
                            width={1130}
                        />
                    <Skeleton
                        className="mg20"
                        variant="rounded"
                        animation="pulse"
                        width={1130}
                    />
                    <Skeleton
                        className="mg20"
                        variant="rounded"
                        animation="pulse"
                        width={1130}
                    />
                    <Skeleton
                        className="mg20"
                        variant="rounded"
                        animation="pulse"
                        width={1130}
                    />
                    <Skeleton
                        className="mg20"
                        variant="rounded"
                        animation="pulse"
                        width={1130}
                    />
                    <Skeleton
                        className="mg20"
                        variant="rounded"
                        animation="pulse"
                        width={1130}
                    />
                    <Skeleton
                        className="mg20"
                        variant="rounded"
                        animation="pulse"
                        width={1130}
                    />
                    <Skeleton
                        className="mg20"
                        variant="rounded"
                        animation="pulse"
                        width={1130}
                    />
                    <Skeleton
                        className="mg20"
                        variant="rounded"
                        animation="pulse"
                        width={1130}
                    />
                    <Skeleton
                        className="mg20"
                        variant="rounded"
                        animation="pulse"
                        width={1130}
                    />
                    <Skeleton
                        className="mg20"
                        variant="rounded"
                        animation="pulse"
                        width={1130}
                    />
                    <Skeleton
                        className="mg20"
                        variant="rounded"
                        animation="pulse"
                        width={1130}
                    />
                    <Skeleton
                        className="mg20"
                        variant="rounded"
                        animation="pulse"
                        width={1130}
                    />
                </Container>
            )}
        </MainLayout>
    );
};

export default ProductDetail;
