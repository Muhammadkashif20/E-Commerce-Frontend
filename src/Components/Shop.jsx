import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Input,
  Select,
  Row,
  Col,
  Card,
  Tag,
  Button,
  Spin,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
      setFiltered(res.data.products);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // 🔍 SEARCH + FILTER + SORT
  useEffect(() => {
    let data = [...products];

    // search
    if (search) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // category
    if (category !== "all") {
      data = data.filter((item) => item.category === category);
    }

    // sort
    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      data.sort((a, b) => b.rating - a.rating);
    }

    setFiltered(data);
  }, [search, category, sort, products]);

  return (
    <div className="min-h-screen bg-white pt-36 px-6">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <Title className="!text-3xl !font-bold !text-gray-900">
          Shop Premium Products
        </Title>

        <Paragraph className="!text-gray-500">
          Search, filter and discover the best products in one place
        </Paragraph>
      </div>

      {/* FILTER BAR */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between mb-10">

        {/* SEARCH */}
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search products..."
          className="h-11 rounded-xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* FILTERS */}
        <div className="flex gap-3">

          <Select
            className="w-40"
            value={category}
            onChange={(value) => setCategory(value)}
            options={[
              { value: "all", label: "All" },
              { value: "smartphones", label: "Smartphones" },
              { value: "laptops", label: "Laptops" },
              { value: "fragrances", label: "Fragrances" },
              { value: "skincare", label: "Skincare" },
            ]}
          />

          <Select
            className="w-44"
            value={sort}
            onChange={(value) => setSort(value)}
            placeholder="Sort By"
            options={[
              { value: "low", label: "Price Low → High" },
              { value: "high", label: "Price High → Low" },
              { value: "rating", label: "Top Rated" },
            ]}
          />

        </div>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto">

        {loading ? (
          <div className="flex justify-center items-center h-80">
            <Spin size="large" />
          </div>
        ) : (
          <Row gutter={[20, 20]}>
            {filtered.map((product) => (
              <Col xs={24} sm={12} md={8} lg={6} key={product.id}>

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

export default Shop;