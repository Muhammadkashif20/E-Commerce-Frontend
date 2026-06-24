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
  Rate,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const { Title, Paragraph } = Typography;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
    setFiltered(res.data.products);
    setLoading(false);
  };

  useEffect(() => {
    let data = [...products];

    if (search) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      data = data.filter((p) => p.category === category);
    }

    setFiltered(data);
  }, [search, category, products]);

  return (
    <div className="bg-white">

      {/* ================= HERO (SHOPIFY STYLE) ================= */}
      <div className="relative h-[70vh] flex items-center justify-center bg-black text-white">

        <div className="text-center max-w-3xl px-5">
          <p className="tracking-[0.3em] text-gray-400 text-xs uppercase">
            New Season Drop
          </p>

          <h1 className="text-5xl font-black mt-3">
            Minimal Shopping <br /> Maximum Impact
          </h1>

          <p className="text-gray-400 mt-5">
            Discover premium electronics, fashion & lifestyle products curated for modern living.
          </p>

          <div className="mt-8 flex justify-center">
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search products..."
              className="h-12 w-96 rounded-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

      </div>

      {/* ================= CATEGORY STRIP ================= */}
      <div className="max-w-7xl mx-auto px-5 py-8 flex gap-3 overflow-x-auto">

        {["all", "smartphones", "laptops", "fragrances", "skincare"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm whitespace-nowrap transition
                ${
                  category === cat
                    ? "bg-black text-white"
                    : "border-gray-300 text-gray-600 hover:border-black"
                }`}
            >
              {cat.toUpperCase()}
            </button>
          )
        )}

      </div>

      {/* ================= PRODUCTS SECTION ================= */}
      <div className="max-w-7xl mx-auto px-5 pb-20">

        {loading ? (
          <div className="flex justify-center py-20">
            <Spin size="large" />
          </div>
        ) : (
          <>
            {/* SECTION TITLE */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <p className="text-gray-500 text-sm">
                Hand-picked items for your lifestyle
              </p>
            </div>

            {/* GRID */}
            <Row gutter={[30, 40]}>
              {filtered.map((product) => (
                <Col xs={24} sm={12} md={8} lg={6} key={product.id}>

                  <div
                    onClick={() => navigate(`/detail/${product.id}`)}
                    className="cursor-pointer group"
                  >

                    {/* IMAGE BLOCK */}
                    <div className="bg-gray-100 rounded-2xl p-6 overflow-hidden">

                      <img
                        src={product.images[0]}
                        className="h-52 w-full object-contain group-hover:scale-105 transition duration-500"
                      />

                      <Tag className="absolute mt-2 bg-black text-white border-none rounded-full px-3">
                        {Math.round(product.discountPercentage)}% OFF
                      </Tag>

                    </div>

                    {/* TEXT BLOCK */}
                    <div className="mt-4">

                      <p className="text-xs text-gray-400 uppercase">
                        {product.category}
                      </p>

                      <h3 className="text-lg font-semibold mt-1">
                        {product.title}
                      </h3>

                      <Rate disabled defaultValue={product.rating} className="text-sm mt-1" />

                      <div className="flex justify-between items-center mt-3">

                        <div>
                          <p className="text-xs text-gray-400 line-through">
                            ${(product.price * 1.2).toFixed(0)}
                          </p>
                          <p className="text-xl font-bold">
                            ${product.price}
                          </p>
                        </div>

                        <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
                          View
                        </button>

                      </div>

                    </div>

                  </div>

                </Col>
              ))}
            </Row>
          </>
        )}

      </div>

      <Footer />
    </div>
  );
};

export default Shop;