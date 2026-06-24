import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Typography, Row, Col, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { Tag, Rate } from "antd";
import { cartContext } from "../context/cartContext";
const { Title, Paragraph } = Typography;
const Products = ({ filteredData, setFilteredData }) => {
  const { cartItem, addToCart, isItemAdded } = useContext(cartContext);
  const authData = JSON.parse(localStorage.getItem("formData"));
  const authDataGoogle = JSON.parse(localStorage.getItem("googleFormData"));
  console.log("cartItem=>", cartItem);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://dummyjson.com/products");
        console.log("Products fetched successfully", res.data.products);
        setProducts(res.data.products);
        let data = localStorage.setItem(
          "products",
          JSON.stringify(res.data.products)
        );
        console.log("data=>", data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products", err);
        setLoading(false);
      }
    };

    localStorage.removeItem("filteredData");
    setFilteredData(null);

    fetchProducts();
  }, []);
  const filterData = JSON.parse(localStorage.getItem("filteredData"));
  console.log("filterData=>", filterData);
  const displayData = filterData
    ? filterData
    : filteredData
      ? filteredData
      : products;
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-5">
     <div className="text-center mb-14">

  {/* Accent line */}
  <p className="text-xs uppercase tracking-[6px] text-gray-400 font-medium">
    Featured Collection
  </p>

  {/* Main Heading */}
  <Title
    level={2}
    className="!mb-3 !font-bold !text-gray-900 !tracking-tight"
  >
    Explore Our <span className="text-black">Products</span>
  </Title>

  {/* Subtitle */}
  <Paragraph className="!text-gray-500 !text-base max-w-xl mx-auto">
    Discover premium products carefully selected for every lifestyle, designed
    for quality, comfort, and modern living.
  </Paragraph>

  {/* small underline accent */}
  <div className="w-16 h-[2px] bg-black mx-auto mt-5 opacity-10"></div>

</div>
        <Button
          type="primary"
          size="large"
          className="!rounded-xl !bg-black hover:!bg-black !border-none !shadow-lg mb-10"
          onClick={() => {
            localStorage.removeItem("filteredData");
            setFilteredData(null);
          }}
        >
          Show All Products
        </Button>

        {filterData && (
          <div className="text-center mb-6">
            <Button
              onClick={() => {
                localStorage.removeItem("filteredData");
                setFilteredData(null);
              }}
            >
              Show All Products
            </Button>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-80">
            <Spin size="large" />
          </div>
        ) : (
          <Row gutter={[24, 24]} justify="center">
            {displayData?.map((product) => (
              <Col
                key={product.id}
                xs={24}
                sm={12}
                md={8}
                lg={6}
                className="flex justify-center"
              >
   <Card
  hoverable
  bordered={false}
  bodyStyle={{ padding: 20 }}
  onClick={() => navigate(`/detail/${product.id}`)}
  className="group w-full max-w-[340px] cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
  cover={
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100">

      {/* Discount */}
   <Tag
  color="error"
  className="!absolute top-4 left-4 z-20 !rounded-full !px-3 !py-1 !bg-white !text-red-500 !border border-red-400 font-medium shadow-sm"
>
  {Math.round(product.discountPercentage)}% OFF
</Tag>

      {/* Wishlist */}
      <button
        onClick={(e) => e.stopPropagation()}
        className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-black hover:text-white"
      >
        ♡
      </button>

      <img
        src={product.images[0]}
        alt={product.title}
        className="h-56 w-full object-contain p-5 transition duration-500 group-hover:scale-105"
      />
    </div>
  }
>
  <div className="space-y-3">

    {/* Category */}
    <Tag
      color="default"
      className="!rounded-full capitalize"
    >
      {product.category}
    </Tag>

    {/* Title */}
    <Title
      level={5}
      ellipsis={{ rows: 1 }}
      className="!mb-0 !font-semibold"
    >
      {product.title}
    </Title>

    {/* Description */}
    <Paragraph
      ellipsis={{ rows: 2 }}
      className="!mb-0 !text-sm !text-gray-500"
    >
      {product.description}
    </Paragraph>

    {/* Rating */}
    <div className="flex items-center justify-between">

      <Rate
        disabled
        allowHalf
        defaultValue={product.rating}
        style={{ fontSize: 14 }}
      />

      <span className="text-xs text-gray-500">
        ({product.rating})
      </span>

    </div>

    {/* Price + Button */}
    <div className="flex items-end justify-between pt-2">

      <div>

        <p className="text-xs text-gray-400 line-through">
          ${(product.price * 1.2).toFixed(0)}
        </p>

        <h3 className="text-2xl font-bold text-black">
          ${product.price}
        </h3>

      </div>

      <Button
        type="primary"
        className={`!h-10 !rounded-xl !border-none ${
          authData || authDataGoogle
            ? isItemAdded(product.id)
              ? "!bg-emerald-600 hover:!bg-emerald-700"
              : "!bg-black hover:!bg-zinc-800"
            : "!bg-black hover:!bg-zinc-800"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
      >
        {authData || authDataGoogle
          ? isItemAdded(product.id)
            ? "Added ✓"
            : "Add Cart"
          : "Add Cart"}
      </Button>

    </div>

  </div>
</Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default Products;
