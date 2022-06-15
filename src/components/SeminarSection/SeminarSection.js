import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import headerBg from '../../assets/whitelogo.png' 
import PostContent from './PostContent';
const SeminarSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
      }}
    >
      <Container className="py-5 my-3 ">
        <Row>
          <Col xs={12} lg={6}>
            <div>
              <h2>ملخص الندوة</h2>
            </div>

            <Container>
              <Row>
                <Col xs={8} md={12}>
                  <p>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                    توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة
                    لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف
                    عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصيهناك
                    حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                    سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                    الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                    إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً
                    عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي
                  </p>
                </Col>
              </Row>
              <Col xs={8} md={12}>
                <p>
                  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                  سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                  الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                  إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
                  استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي
                </p>
              </Col>
            </Container>
          </Col>
          <Col xs={8} md={8} lg={4} className="ms-5">
            <PostContent />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SeminarSection