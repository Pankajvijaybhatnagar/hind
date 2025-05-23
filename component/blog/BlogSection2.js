import { blogData } from "@/data/Data";
import Link from "next/link";
import React from "react";

const BlogSection2 = () => {
  const firstBlog = blogData.find((item) => item.id === 0);
  return (
    <section className="tf__blog_2 mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>LATEST NEWS & UPDATES</h5>
              <h2>Insights and Updates from Hindustan Council of Secondary Education</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-5 col-lg-5 wow fadeInLeft">
            <div className="tf__single_blog">
              <Link
                className="tf__single_blog_img"
                href={`blog/${firstBlog.slug}`}
              >
                <img
                  src={firstBlog.imgSrc}
                  alt="blog"
                  className="img-fluid w-100"
                />
              </Link>
              <div className="tf__single_blog_text">
                <Link className="category light_blue" href="/blog">
                  {firstBlog.category}
                </Link>
                <Link className="title" href={`blog/${firstBlog.slug}`}>
                  {firstBlog.title}
                </Link>
                <p>{firstBlog.desc}</p>
                <Link className="read_btn" href={`blog/${firstBlog.slug}`}>
                  Read More <i className="fas fa-chevron-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 wow fadeInRight">
            <div className="row">
              {blogData.slice(1, 3).map((item) => (
                <div className="col-12 col-md-6 col-lg-12" key={item.id}>
                  <div className="tf__single_blog_2">
                    <Link
                      className="tf__single_blog_2_img"
                      href={`blog/${item.slug}`}
                    >
                      <img
                        src={item.imgSrc}
                        alt="blog"
                        className="img-fluid w-100"
                      />
                    </Link>
                    <div className="tf__single_blog_text_2">
                      <Link className="category" href="/blog">
                        {item.category}
                      </Link>
                      <Link className="title" href={`blog/${item.slug}`}>
                        {item.title}
                      </Link>
                      <p>{item.desc}</p>
                      <Link className="read_btn" href={`blog/${item.slug}`}>
                        Read More{" "}
                        <i className="fas fa-chevron-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection2;
