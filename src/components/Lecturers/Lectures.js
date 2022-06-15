import React from 'react'
import CardJen from '../Shared/CardJen';
import ragaImg from '../../assets/Bitmap (1).png'
import lecImg from '../../assets/Bitmap.png'
import { Container } from 'react-bootstrap';
const Lectures = () => {
    let lecturesData = [
        {
            id: 1,
            img: ragaImg,
            title: 'الدكتور رجا المرزوقى',
            text: 'نائب رئيس مجلس ادارة جمعية صفا  - استاذ الاقتصاد المشارك معهد الامير سعود الفيصل للدراسات الدبلوماسية'
        },
           {
            id: 2,
            img: lecImg,
            title: 'الدكتور رجا المرزوقى',
            text: 'نائب رئيس مجلس ادارة جمعية صفا  - استاذ الاقتصاد المشارك معهد الامير سعود الفيصل للدراسات الدبلوماسية'
        },

    ];
  return (
    <Container style={{height:"60vh"}}>
      <div className="position-relative " style={{ maxWidth: "15%" }}>
        <div className="bg-white  rounded p-3 card-position">
          <p className="fw-bolder dark">تقديم المحاضرين</p>
          {lecturesData.map((card) => {
            return (
              <CardJen
                imgSrc={card.img}
                title={card.title}
                text={card.text}
                key={card.id}
                style={{ minWidth: "30rem" }}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Lectures