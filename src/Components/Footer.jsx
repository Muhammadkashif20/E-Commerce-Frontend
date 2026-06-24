import React from "react";
import { Layout, Row, Col, Typography, Input, Button } from "antd";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const { Title, Paragraph } = Typography;

const Footer = () => {
  return (
<Layout.Footer className="bg-white border-t border-gray-100 pt-14 pb-6">
  <div className="max-w-7xl mx-auto px-6">

    <Row gutter={[40, 40]}>

      {/* Brand */}
      <Col xs={24} md={8}>
        <h2 className="text-2xl font-bold text-gray-900">
          MK <span className="text-blue-600">Store</span>
        </h2>

        <p className="text-gray-500 mt-3 leading-6">
          Premium shopping experience with quality products and fast delivery.
        </p>

        {/* Social */}
        <div className="flex gap-3 mt-5">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
            <div
              key={i}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-400 transition"
            >
              <Icon size={16} />
            </div>
          ))}
        </div>
      </Col>

      {/* Links */}
      <Col xs={24} md={5}>
        <h3 className="font-semibold text-gray-900">Quick Links</h3>

        <div className="flex flex-col gap-2 mt-4 text-gray-500">
          <a className="hover:text-black">Home</a>
          <a className="hover:text-black">Products</a>
          <a className="hover:text-black">Deals</a>
          <a className="hover:text-black">Contact</a>
        </div>
      </Col>
            <Col xs={24} md={6}>
        <h3 className="font-semibold text-gray-900">Newsletter</h3>

        <p className="text-gray-500 mt-3 text-sm">
          Get updates on latest products & offers.
        </p>

        <div className="flex flex-col gap-3 mt-4">
          <Input
            placeholder="Enter email"
            className="rounded-xl py-2 border-gray-200"
          />

          <Button
            type="primary"
            className="!bg-black !border-none !rounded-xl p-5"
          >
            Subscribe
          </Button>
        </div>
      </Col>
            <Col xs={24} md={5}>
        <h3 className="font-semibold text-gray-900">Contact</h3>

        <div className="text-gray-500 mt-4 space-y-2">
          <p>support@mktstore.com</p>
          <p>+92 300 1234567</p>
          <p>Karachi, Pakistan</p>
        </div>
      </Col>
      <div className="border-t border-gray-100 mt-10 pt-5 text-center text-gray-400 text-sm">
  © {new Date().getFullYear()} MK Store. All rights reserved.
</div>
</Row>
</div>
</Layout.Footer>
  );
};

export default Footer;