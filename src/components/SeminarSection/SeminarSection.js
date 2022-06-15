import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import headerBg from '../../assets/Group 170.png' 
import PostContent from './PostContent';
const SeminarSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top"
      }}
    >
      <Container className="py-5 my-3 ">
        <Row>
          <Col xs={12} md={6}>
            <div className="">
              <h2>ملخص الندوة</h2>
            </div>

            <div>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
                استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصيهناك حقيقة مثبتة
                منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن
                التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
                التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
                توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد
                محتوى نصي، هنا يوجد محتوى نصي
              </p>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
                استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي
              </p>
            </div>
          </Col>
          <Col xs={8} md={4} className="ms-5">
            <PostContent/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SeminarSection