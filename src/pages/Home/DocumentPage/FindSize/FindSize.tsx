import { Layout, Anchor } from "antd";
import { Container } from "./../DocumentPage.styled";
import config from "@/config";
import { useNavigate } from "react-router-dom";
import MenuDoc from "@/components/MenuDoc/MenuDoc";

const { Content, Sider } = Layout;
const { Link } = Anchor;

function FindSize() {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <Layout style={{ background: "#fff" }}>
        <Sider className="sider" width={260}>
          <MenuDoc />
        </Sider>
        <Layout className="layout" style={{ width: "50%" }}>
          <h1 className="header">Ring Size Measurement Guide</h1>
          <p className="header subtitle">
            Here's everything you need to know about ring size and how to
            measure the size most accurately
          </p>
          <Content>
            <hr className="hr" />
            <div id="section1">
              <p>
                Accurate ring size measurement is essential to ensure that the
                ring fits comfortably. A ring that is too tight can cause
                discomfort and be difficult to remove, while a ring that is too
                loose can easily fall off. Proper ring size measurement helps
                you avoid these issues and enjoy your jewelry to the fullest.
              </p>
            </div>
            <div id="section2">
              <h3>1. Preparation Before Measuring Ring Size</h3>
              <p className="content">
                Before you start measuring your ring size, you need to prepare
                the following tools:
              </p>
              <ul style={{ listStyle: "initial" }} className="detail">
                <li>String or paper: to wrap around your finger.</li>
                <li>
                  Measuring tape: to measure the length of the string or paper.
                </li>
                <li>Ring size gauge: if available.</li>
                <li>
                  Ring size chart: to look up the size from the measurement.
                </li>
                <li>Pen and paper: to record the measurement.</li>
              </ul>
              <p className="content">
                <span className="span">Note</span>: Measure your ring size at
                the end of the day when your fingers are at their largest, and
                avoid measuring when your hands are too cold or too hot.
              </p>
            </div>
            <div id="section3">
              <h3>2. Methods to Measure Ring Size</h3>
              <h4 className="content">
                <span className="span">Method 1</span>: Using String or Paper
                Method
              </h4>
              <ul style={{ listStyle: "initial" }} className="detail">
                <li>
                  <span>Step 1</span>: Cut a piece of paper about 10 cm long and
                  1 cm wide.
                </li>
                <li>
                  <span>Step 2</span>: Wrap the paper around the base of the
                  finger you want to measure.
                </li>
                <li>
                  <span>Step 3</span>: Mark where the paper overlaps.
                </li>
                <li>
                  <span>Step 4</span>: Measure the circumference of the finger
                  using the length of the paper from the starting point to the
                  mark. Divide this circumference by 3.14 to get the diameter of
                  the ring. Compare the diameter with a ring size chart to
                  choose the appropriate size.
                </li>
              </ul>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fdo-nha-n-ba-ng-gia-y.webp?alt=media&token=8ea3277a-6149-47e9-99bf-34f7292d25d9"
              ></img>
              <h4 className="content">
                <span className="span">Method 2</span>: Using Ring Size Gauge
              </h4>
              <ul style={{ listStyle: "initial" }} className="detail">
                <li>
                  <span>Step 1</span>: Cut a piece of string about 10 cm long.
                </li>
                <li>
                  <span>Step 2</span>: Wrap the string around the base of the
                  finger you want to measure.
                </li>
                <li>
                  <span>Step 3</span>: Mark where the string overlaps.
                </li>
                <li>
                  <span>Step 4</span>: Measure the circumference of the finger
                  using the length of the string from the starting point to the
                  mark. Divide this circumference by 3.14 to get the diameter of
                  the ring. Compare the diameter with a ring size chart to
                  choose the appropriate size.
                </li>
              </ul>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fartboard-1.webp?alt=media&token=90f0b769-52c8-4f07-a97f-cc73acbd86de"
              ></img>
              <div className="content">
                <h4>
                  <span className="span">Method 3</span>: Using an Old Ring
                </h4>
                <p>Let me know if there's anything else you'd like to kno</p>
                <p>
                  <span className="span">Note</span>:
                </p>
              </div>
              <ul style={{ listStyle: "initial" }} className="detail">
                <li>
                  Ensure to measure the diameter at the inner edge of the ring,
                  not the outer edge, to avoid including the thickness of the
                  ring band and getting an inaccurate measurement.
                </li>
                <li>
                  It's recommended to measure at least three times to ensure
                  accuracy.
                </li>
              </ul>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Ftest-nhan-san-5c4dfcf3-88ca-42cf-87e3-770a2bcca9d1.webp?alt=media&token=d63acf79-96e0-4802-bd6f-0eb1e8bfc9f0"
              ></img>
            </div>
            <div id="section4">
              <div className="content tip">
                Avoid pulling the string or paper too tight when measuring.
                Measure multiple times to ensure accuracy. If your knuckle is
                larger than the base of your finger, measure both and choose an
                intermediate or slightly larger size. Each finger can have
                different sizes, so measure each finger individually if
                necessary.
              </div>
            </div>
            <div id="section5">
              <h3>4. Ring Size Conversion Chart</h3>
              <p className="content">
                Conversion chart from string or paper length to ring size.
              </p>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2F2.png?alt=media&token=e8a40aa5-91ff-48c0-b90e-b06105a67011"
              ></img>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2F1.png?alt=media&token=16fe5727-3a70-469a-bdf4-ca59878a1604"
              ></img>
            </div>
            <div id="section6">
              <h3>5. Contact for Support</h3>
              <p className="content">
                For more information and support regarding ring sizing and our
                diamond products, please feel free to contact us through the
                following channels:
              </p>
              <ul style={{ listStyle: "initial" }} className="detail">
                <li>
                  <span className="contact">Phone</span>: 0123456789
                </li>
                <li>
                  <span className="contact">Email</span>: example@gmail.com
                </li>
                <li>
                  Or reach out to us directly through the live chat feature on
                  our website
                </li>
              </ul>
              <p className="content">
                Our team is dedicated to assisting and advising you on our range
                of products and services. Reach out to us today for a
                comprehensive and professional shopping experience!
              </p>
            </div>
            <div>
              <p>
                Explore AD's ring designs{""}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.allProduct)}
                >
                  here
                </span>
                :
              </p>
            </div>
            <img
              style={{ width: "100%" }}
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FSix%20Blue%20Nile%20diamond%20engagement%20rings%20in%20gold%20and%20platinum.jpeg?alt=media&token=5b4fa712-be8a-4d7c-9da5-fca215c6a948"
            ></img>
          </Content>
        </Layout>
        <Anchor className="anchor">
          <h6 className="in-this-article">IN THIS ARTICLE</h6>
          <Link
            href="#section2"
            title="01 Preparation Before Measuring Ring Size"
          />
          <Link href="#section3" title="02 Methods to Measure Ring Size" />
          <Link href="#section4" title="03 Tips for Measuring Ring Size" />
          <Link href="#section5" title="04 Ring Size Conversion Chart" />
          <Link href="#section6" title="05 Contact for Support" />
        </Anchor>
      </Layout>
    </Container>
  );
}

export default FindSize;
