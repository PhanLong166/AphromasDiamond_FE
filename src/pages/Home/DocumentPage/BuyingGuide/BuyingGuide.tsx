import { Layout, Anchor } from "antd";
import { Container } from "./../DocumentPage.styled";
import config from "@/config";
import { useNavigate } from "react-router-dom";
import MenuDoc from "@/components/MenuDoc/MenuDoc";

const { Content, Sider } = Layout;
const { Link } = Anchor;

function BuyingGuide() {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <Layout style={{ background: "#fff" }}>
        <Sider className="sider" width={260}>
          <MenuDoc />
        </Sider>
        <Layout className="layout" style={{ width: "50%" }}>
          <h1 className="header">Your Diamond-Buying Guide and Cheat Sheet</h1>
          <p className="header subtitle">
            11 Tips for getting a product with the most sparkle.
          </p>
          <Content>
            <hr className="hr" />
            <div id="section1">
              <p className="para">
                Let’s face it. Buying a diamond for a jewelry is a big deal.
                It’s not only a major purchase, it’s also a major decision
                because you’re trying to get it right—the style, the carat
                weight, the sparkle! Most customers take about three months to
                find the perfect ring. While we can’t necessarily make the
                process faster, we can make it easier. Here’s a breakout of the
                tips our diamond experts share with their friends—and now, with
                you.
              </p>
            </div>
            <div id="section2">
              <h3>TIP 1: Set a budget that works for you.</h3>
              <p className="para">
                Forget that old-school tip about spending three months of your
                salary. We have beautiful engagement ring options for every
                budget and style.
              </p>
              <ul style={{ listStyle: "initial" }} className="detail para">
                <li>Our diamond experts don’t work on commission.</li>
                <li>
                  The Blue Nile philosophy is to help you to make the most of
                  your budget.
                </li>
                <li>
                  We lovingly handcraft every ring that we make—regardless of
                  the price tag.
                </li>
              </ul>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.gift)}
                >
                  VIEW RECOMMENDED JEWELRY
                </span>
              </p>
            </div>
            <div id="section3">
              <h3>TIP 2: Master the 4Cs - cut, clarity, color and carat.</h3>
              <p className="para">
                Understanding the 4Cs is key to getting the most sparkle for
                your budget. And if you feel overwhelmed, you can always chat,
                call or email our diamond and jewelry experts. They’re pros at
                separating fact from fiction and walking you through every
                consideration.
              </p>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.cs)}
                >
                  THE 4CS OF DIAMOND
                </span>
              </p>
            </div>
            <div id="section4">
              <h3>TIP 3: Think with your eyes.</h3>
              <p className="para">
                Decide where to spend your money, and where to save, by
                prioritizing what you see first.
              </p>
              <ul style={{ listStyle: "initial" }} className="detail para">
                <li>
                  A well-cut diamond reflects maximum light—sparkle you can see
                  across a room. • To appreciate color you need to get closer,
                  roughly three to six feet away.{" "}
                </li>
                <li>
                  The highest clarity grades are only noticeable from a distance
                  of six to eight inches.
                </li>
              </ul>
            </div>
            <div id="section5">
              <h3>TIP 4: Prioritize Diamond Cut.</h3>
              <p className="para">
                Cut is the most important of the 4Cs: The better the cut, the
                more your diamond will sparkle.
              </p>
              <ul style={{ listStyle: "initial" }} className="detail para">
                <li>
                  We offer four cut grades: Good, Very Good, Ideal and Astor
                  Ideal.{" "}
                </li>
                <li>
                  67% of our customers choose an ideal cut for maximum sparkle.
                </li>
                <li>
                  A poor cut (too shallow or too deep) can make a flawless
                  diamond appear dull.
                </li>
              </ul>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.gift)}
                >
                  LEARN ABOUT CUT IN 4CS DOCUMENT
                </span>
              </p>
            </div>
            <div id="section6">
              <h3>TIP 5: Put Diamond Clarity In Perspective</h3>
              <p className="para">
                Most diamonds have tiny flaws that can only be seen with 10x
                magnification. For instance, SI grades aren't flawless, but
                still look great to the naked eye.
              </p>
              <ul style={{ listStyle: "initial" }} className="detail para">
                <li>
                  Diamonds can have internal flaws and/or external flaws. The
                  clarity grading scale runs from SI2-SI1 (slightly included) to
                  FL (flawless).
                </li>
                <li>
                  A good place to start your search and maximize your budget is
                  with SI2 and SI1 grades.
                </li>
                <li>
                  Weight affects clarity — if your diamond is under two carats,
                  go with VS2.
                </li>
              </ul>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.gift)}
                >
                  LEARN ABOUT CLARITY IN 4CS DOCUMENT
                </span>
              </p>
            </div>
            <div id="section7">
              <h3>
                TIP 6: Consider near-colorless diamonds instead of absolutely
                colorless.
              </h3>
              <p className="para">
                It’s the absence of color that’s actually the most rare and
                therefore the most expensive.
              </p>
              <ul style={{ listStyle: "initial" }} className="detail para">
                <li>
                  Diamonds at Blue Nile are graded from K (faint color) to D
                  (colorless).
                </li>
                <li>
                  For a great value and quality, start your search with a G or H
                  grade (near colorless).
                </li>
                <li>
                  Different precious metals will affect the way your diamond’s
                  color is perceived. Choose settings with this in mind.
                </li>
              </ul>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.gift)}
                >
                  LEARN ABOUT COLOR IN 4CS DOCUMENT
                </span>
              </p>
            </div>
            <div id="section8">
              <h3>TIP 7: Weigh the pros and cons of larger carat weights.</h3>
              <p className="para">
                While you may be envisioning a specific carat weight, bigger is
                not always the way to go. Is it important that the stone you buy
                is a precise carat weight—or would you be happy with a diamond
                that “reads” like that weight?
              </p>
              <ul style={{ listStyle: "initial" }} className="detail para">
                <li>Carat is about weight, not size.</li>
                <li>Prices increase exponentially as carat weight goes up.</li>
                <li>
                  A good place to start your search is with VS2 (very slightly
                  included).
                </li>
                <li>
                  Carat weight is relative to finger size, setting size and
                  diamond shape. Sometimes, smaller carat weights are the right
                  choice.
                </li>
              </ul>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.gift)}
                >
                  LEARN ABOUT CARAT IN 4CS DOCUMENT
                </span>
              </p>
            </div>
            <div id="section9">
              <h3>TIP 8: Check out fancy-shaped diamonds.</h3>
              <p className="para">
                Round brilliant diamonds are our most popular, but don’t rule
                out other shapes. All non-round diamonds are called “fancies.”
                Fancies can look larger and cost less than a round of similar
                carat weight.
              </p>
              <ul style={{ listStyle: "initial" }} className="detail para">
                <li>
                  There are 9 fancy shapes: princess, emerald, asscher, cushion,
                  marquise, radiant, oval, pear and heart.{" "}
                </li>
                <li>
                  {" "}
                  Why are rounds more expensive? It’s complicated, but in
                  essence it comes down to the established cutting standards.
                  Round diamonds are the only shape with GIA-designated cut
                  parameters. There are exacting standards for fancies, too, but
                  these were determined by our own master craftspeople rather
                  than the GIA.{" "}
                </li>
              </ul>
            </div>
            <div id="section10">
              <h3>TIP 9: Buy shy to save big.</h3>
              <p className="para">
                Diamond prices jump significantly at the carat and half-carat
                marks. Purchasing just shy of those weights is a great way to
                stretch your dollars.
              </p>
              <ul style={{ listStyle: "initial" }} className="detail para">
                <li>
                  The visual difference between a .9 and 1.0 carat is slight.
                </li>
                <li>
                  AD offers a wide selection of diamonds at non-traditional
                  breakpoints— far more than you’d be able to find at a small,
                  independent jeweler.
                </li>
              </ul>
            </div>
            <div id="section11">
              <h3>TIP 10: Verify Diamond Certificate.</h3>
              <p className="para">
                This is a major purchase, so of course you want to know that
                what you’re buying is authentic, natural and conflict-free.
                We’ve always sold high-quality, conflict-free diamonds and we
                wouldn’t have it any other way.
              </p>
              <ul style={{ listStyle: "initial" }} className="detail para">
                <li>
                  The finest quality natural diamonds are always independently
                  certified.{" "}
                </li>
                <li>
                  Make sure your diamond comes with a grading report from the
                  GIA (Gemological Institute of America). LEARN
                </li>
              </ul>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.gift)}
                >
                  MORE ABOUT CERTIFICATION
                </span>
              </p>
            </div>
            <div id="section12">
              <h3>
                TIP 11: Trust your instincts. Don’t buy anything under pressure.
                Ever.
              </h3>
              <p className="para">
                You should feel downright excited about your choice of diamond.
                No regrets. When you propose with a ring that you know she’s
                going to love your confidence will shine.
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
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FDiamond%20rings.jpeg?alt=media&token=4b24541f-e128-46b5-9f00-4445a1192f25"
            ></img>
          </Content>
        </Layout>
        <Anchor className="anchor">
          <h6 className="in-this-article">IN THIS ARTICLE</h6>
          <Link href="#" title="Buying Guide - 11 Tips for getting" />
        </Anchor>
      </Layout>
    </Container>
  );
}

export default BuyingGuide;
