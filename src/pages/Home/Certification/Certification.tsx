import { Layout, Anchor } from "antd";
import { Container } from "./Certification.styled";
import config from "@/config";
import { useNavigate } from "react-router-dom";
import MenuDoc from "@/components/MenuDoc/MenuDoc";

const { Content, Sider } = Layout;
const { Link } = Anchor;

function Certification() {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <Layout style={{ background: "#fff" }}>
        <Sider className="sider" width={260}>
          <MenuDoc />
        </Sider>
        <Layout className="layout" style={{ width: "50%" }}>
          <h1 className="header">Diamond Certification: The Complete Guide</h1>
          <p className="header subtitle">
            Here's what to look for and why it's so important.
          </p>
          <Content>
            <hr className="hr" />
            <div id="section1">
              <p className="para">
                <span>Buying a diamond</span> is kind of like buying a car
                (except a little more romantic): It's not enough to simply
                glance at it and call it a day. Instead, you want to try it on
                for size and be sure all of the corresponding paperwork is
                available to back up your purchase. For many couples searching
                for the perfect gemstone, one phrase will come up a lot: diamond
                certification.
              </p>
              <div className="content tip para">
                <h4>What Is Diamond Certification?</h4>
                <p>
                  Diamond certification is a system created by the Gemological
                  Institute of America (GIA) to evaluate the quality of a
                  diamond based on the 4Cs—carat, color, clarity, and cut.
                  Diamond certification is also referred to as diamond grading
                  and it is highly recommended that couples only buy certified
                  diamonds.
                </p>
              </div>
              <p className="para">
                Not only does diamond certification determine the quality of a
                gem, but it also "communicates the diamond’s qualities in a way
                that helps consumers understand what they are buying," explains
                GIA-accredited jeweler Nellie Barnett.
              </p>
              <div className="content tip para">
                MEET THE EXPERT
                <p>
                  Nellie Barnett is a GIA-accredited jewelry professional and
                  diamond graduate. She's also the manager of media and public
                  relations at the Gemological Institute of America.
                </p>
              </div>
            </div>
            <div id="section2">
              <h3>1. Advantages of Buying a Certified Diamond</h3>
              <p className="para">
                One of the top advantages of buying a certified diamond is
                precedent. "We’ve been doing this for decades, and have graded
                tens of millions of diamonds," Barnett explains. "The GIA
                Diamond Grading Report is the premier credential of a diamond’s
                authenticity and quality, especially when buying engagement
                rings."
              </p>
              <p className="para">
                This system was invented in the 1940s and '50s to create a
                consistent methodology for describing diamonds and their
                quality. "This common language and the widely accepted GIA
                standards, methods, and best practices to grade diamonds add a
                very important consumer-protection element to the way diamonds
                are bought and sold," she continues. "GIA reports give people
                confidence in their purchases because they have an independent
                and impartial evaluation of the diamond’s quality."
              </p>
            </div>
            <div id="section3">
              <h3>2. Cost of Certification</h3>
              <p className="para">
                The price of a GIA grading report varies depending on the type
                of stone, its carat weight, and the service requested. "For D-Z
                diamonds, the basic grading service is about $30 for a
                quarter-carat diamond to about $85 for a one-carat stone, with
                the fee increasing based on weight and the service," Barnett
                says. GIA lists its full fee schedule online.
              </p>
            </div>
            <div id="section4">
              {" "}
              <h3>3. Understanding Diamond Grading Reports </h3>
              <p className="para">
                Diamond grading, also known as diamond certification, helps
                demystify a diamond’s most important qualities to help buyers
                make informed decisions. The two main reports issued by the GIA
                are the Diamond Grading Report and the Diamond Dossier®. And,
                while similar, there are important distinctions.
              </p>
              <ul style={{ listStyle: "initial" }} className="detail">
                <li>
                  <span className="strong">Diamond Grading Report</span>: Many
                  consider this to be the blueprint of a diamond. Starting with
                  the 4Cs of diamonds – cut, clarity, color, and carat – the
                  report includes precise measurements and shape, as well as a
                  plot or map of the individual diamond inclusions, also known
                  as characteristics. The diamond grading report will also note
                  if the diamond has a girdle inscription, and will describe
                  important characteristics beyond the clarity grade.{" "}
                </li>
                <li>
                  <span className="strong">Diamond Dossier®</span>: This dossier
                  offers the same grading information as the Diamond Grading
                  Report, minus the plotted diagram. To prove authenticity, the
                  dossier also includes the laser inscription number on the
                  diamond’s girdle.
                </li>
              </ul>
            </div>
            <div id="section5">
              <h3>4. How to Read a Diamond Certificate</h3>
              <p>
                There are a few things to keep an eye out for on a diamond's GIA
                certificate:
              </p>
              <ul style={{ listStyle: "initial" }} className="detail">
                <li>The date the diamond was graded</li>
                <li>The GIA report number</li>
                <li>Shape and cutting style (i.e. round brilliant)</li>
                <li>Measurements</li>
              </ul>
              <p className="para">
                After those details, the certificate will list the grading
                results for the carat weight, color grade, clarity grade, and
                cut grade. Additional grading information includes polish,
                symmetry, and fluorescence. The certificate also offers a
                profile view of the diamond with exact proportions as well as
                clarity characteristics. Visit GIA's website to view an example
                of a diamond grading report.
              </p>
            </div>
            <div className="content tip para">
              <h4>The Best Diamond Certification</h4>
              <p>
                In general, diamonds that have been graded by GIA or AGS are
                considered the top-tier options, especially because they are
                nonprofit diamond grading laboratories. We advise purchasing
                diamonds certified by the GIA or AGS.
              </p>
            </div>

            <div id="section6">
              <h3>5. Review A Sample GIA Report</h3>
              <p className="para">
                Ready to explore the grading behind GIA certified diamonds? You
                can view our sample GIA Diamond Grading Report to familiarize
                yourself with the look and orientation of GIA diamond reports.
                You’ll find a GIA grading report on the product page of every
                loose diamond on our website, but you can also download a sample
                below. Note the GIA diamond chart including the 4Cs, a plotted
                diagram and mapping of the stone’s proportions.
              </p>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20025658.png?alt=media&token=b2e5f324-cb30-4abf-aaf7-7bae31986aa5"
              ></img>
            </div>
            <div id="section7">
              <h3>6. How To Use A GIA Diamond Certificate</h3>
              <p className="para">
                To verify a diamond's quality before purchase, be sure to review
                its GIA Diamond Grading Report or Diamond Dossier and the GemEx
                certificate if you are buying diamond. It’s also good to know
                that your purchase of a custom-built ring, pendant or pair of
                earrings from us comes with an appraisal that includes the
                retail replacement value of the item for insurance purposes.
              </p>
            </div>
            <div>
              <p>
                Explore AD's all diamond{""}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  here
                </span>
                :
              </p>
            </div>
            <img
              style={{ width: "100%" }}
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FDIAMOND%20CERTIFICATE.jpeg?alt=media&token=3d84c1aa-e841-4c27-96c1-c050e31908ff"
            ></img>
          </Content>
        </Layout>
        <Anchor className="anchor">
          <h6 className="in-this-article">IN THIS ARTICLE</h6>
          <Link
            href="#section2"
            title="01 Advantages of Buying a Certified Diamond"
          />
          <Link href="#section3" title="02 Cost of Certification" />
          <Link
            href="#section4"
            title="03 Understanding Diamond Grading Reports"
          />
          <Link href="#section5" title="04 How to Read a Diamond Certificate" />
          <Link href="#section6" title="05 Review A Sample GIA Report" />
          <Link
            href="#section7"
            title="06 How To Use A GIA Diamond Certificate"
          />
        </Anchor>
      </Layout>
    </Container>
  );
}

export default Certification;
