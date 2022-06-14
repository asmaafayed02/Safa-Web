import React from 'react'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { BsHeart } from "react-icons/bs";
const PageHero = ({title , url}) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <Breadcrumb>
          <Breadcrumb.Item href="/">الرئيسية &gt;</Breadcrumb.Item>
          <Breadcrumb.Item
            href={url}
            active
            style={{ color: "white" }}
          >
            {title}
          </Breadcrumb.Item>
        </Breadcrumb>
        {/* <div className=""> */}
          <span className="bg-white dark rounded-circle p-2 w-10 h-10 text-center ">
            <BsHeart style={{ fontSize: "1.3em" }} />
          </span>
          <a href='/' className="text-decoration-none fw-bold white p-2" variant="white">اضف الي المفضلة</a>
        {/* </div> */}
      </div>
      <hr/>
    </>
  );
}

export default PageHero