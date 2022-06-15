import React from 'react'
import SociolIcons from '../Shared/SociolIcons';
import cerrectIcon from '../../assets/Icon.png'
import CardJen from '../Shared/CardJen'
import { Container } from 'react-bootstrap';
const PostContent = () => {
  let contentData = [
    {
      id: 1,
      img: cerrectIcon,
      title: "يوجد ندواتين كل اسبوع ",
      text: "نداوت",
    },
    {
      id: 2,
      img: cerrectIcon,
      title: "جميع النداوت مجانية من صفا",
      text: "نداوت",
    },
    {
      id: 3,
      img: cerrectIcon,
      title: "خطوات و نصائح في مجال الاقتصاد",
      text: "نداوت",
    },
  ];
  return (
    <div>
      <div className="d-md-flex justify-content-between text-center greenBg p-4 rounded-top">
        <p className="h3 white">نشر المحتوي </p>
        <SociolIcons color="white p-1" />
      </div>
      
        {contentData.map((item) => {
          return (
            <div className="blueBg py-2" key={item.id}>
              <span className=" white ms-5 ps-5 opacity">{item.text}</span>

              <Container className="white">
                <CardJen
                  imgSrc={item.img}
                  title={item.title}
                  bgColor="blueBg"
                />
              </Container>
            </div>
          );
        })}
      </div>
    
  );
}

export default PostContent