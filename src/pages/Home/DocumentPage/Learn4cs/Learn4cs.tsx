import { Layout, Anchor } from "antd";
import { Container } from "./../DocumentPage.styled";
import config from "@/config";
import { useNavigate } from "react-router-dom";
import MenuDoc from "@/components/MenuDoc/MenuDoc";

const { Content, Sider } = Layout;
const { Link } = Anchor;

function Learn4cs() {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <Layout style={{ background: "#fff" }}>
        <Sider className="sider" width={260}>
          <MenuDoc />
        </Sider>
        <Layout className="layout" style={{ width: "50%" }}>
          <h1 className="header">
            Our Ultimate Diamond Guide <br/> Will Help You Understand the 4Cs
          </h1>
          <p className="header subtitle">
            Here's everything you need to know about the color, cut, clarity,
            and carat of a stone.
          </p>
          <Content>
            <hr className="hr" />
            <div id="section1">
              <p className="para">
                After perusing your partner's Pinterest boards and asking
                friends and family for input, you've finally pegged the perfect
                engagement ring design for your future spouse. Or, perhaps you
                two tag-teamed and found an ideal jewel together. Whichever
                route you took to get there, once it's time to buy the diamond
                of your dreams, your next step is to conquer the famed
                engagement ring 4Cs and determine how you can manipulate each
                component to get the most bling for your buck.
              </p>
              <p className="para">
                But what, exactly, are "the 4Cs"? This diamond terminology
                refers to the color, clarity, carat weight, and cut of a
                diamond, all of which make up a grading system that determines
                the quality and price of a stone. According to gemologist and
                jeweler Andrew Mills, it's vital to also understand that the 4Cs
                are a guideline, not a scale that determines whether a diamond
                is "good" or "bad." "The first thing to keep in mind when
                reading about the 4Cs is that there is no right answer, and a
                lot of the information out there can be pretty misleading on
                what is required in purchasing a diamond," he explains. "What
                really matters is what you think of the diamond and its natural
                appearance."
              </p>
              <div className="content tip para">
                MEET THE EXPERT
                <ul style={{ listStyle: "initial" }} className="detail">
                  <li>
                    Andrew Mills is a Gemological Institute of America (GIA)
                    graduate gemologist and founder of Andrew & Earth Designs.
                  </li>
                  <li>
                    Sarah Ortega is the founder of Sarah O. Jewelry, a
                    Denver-based jewelry shop selling bridal and fine jewelry.
                  </li>
                </ul>
              </div>
              <p className="para">
                To make your diamond hunting process loads easier, we broke down
                the specifics of the engagement ring 4Cs in no particular order,
                along with helpful tips on how to make the most of each
                component financially.
              </p>
              <div>
                <p>
                  RELATED: {""}
                  <span
                    className="here"
                    onClick={() => navigate(config.routes.public.allProduct)}
                  >
                    Top 10 ...
                  </span>
                </p>
              </div>
            </div>
            <div id="section2">
              <h3>1. The Importance of the 4Cs</h3>
              <p className="para">
                Given the fact that the 4Cs should be used as a guideline rather
                than a way to rate a stone, you may be wondering if following
                this diamond grading system is truly important. According to
                jeweler Sarah Ortega, the 4Cs do matter and are helpful to know
                when shopping for an engagement ring.
              </p>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fdiamond_desktop(2_2).dc991.jpg?alt=media&token=8e12ab53-75d8-4ee8-9033-d753b41b2ad7"
              ></img>

              <p className="para">
                "The 4Cs are a great place to start when looking for your
                engagement ring. Choosing one or two of these elements as your
                priority will help you find your perfect stone and understand
                your budget," she shares. "For example, if you’re looking to
                prioritize color and clarity because you love the look of a
                'flawless' diamond, then you may opt for a smaller carat size.
                On the other hand, if you want a large carat size, color and
                clarity may not be as high on your list. For some, all 4Cs are
                important for consideration, and that’s certainly doable as
                well."
              </p>
              <p className="para">
                That being said, the idea that a diamond has to be "perfect"
                across all 4Cs is a misconception—there is no "correct" set of
                diamond specs. Assessing the 4Cs for your engagement ring is
                essentially a matter of personal preferences, and truly depends
                on what you want for your particular sparkler. Because even if a
                diamond hits the top of every scale and, naturally, costs the
                most, that doesn't necessarily make it any more beautiful than a
                more affordable stone. "Although the 4Cs are a great reference
                point when diamond shopping, nothing compares to seeing the
                diamond for yourself and finding out what you like," adds
                Ortega.
              </p>
              <div className="content tip">
                <p>
                  "If you’re looking to prioritize color and clarity because you
                  love the look of a 'flawless' diamond, then you may opt for a
                  smaller carat size. If you want a large carat size, color and
                  clarity may not be as high on your list."
                </p>
              </div>
            </div>
            <div id="section3">
              <h3>2. A Breakdown of the 4Cs</h3>
              <p className="para">
                Ready to dive into the specifics of each 4C? Below, we're
                sharing everything you need to know about the cut, color,
                clarity, and carat of a diamond.
              </p>
              <div id="cut">
                <h4>Cut</h4>
                <p className="para">
                  Cut is the only diamond component not influenced by nature,
                  and Mills considers this the most important of the 4Cs. This
                  factor refers to the quality of the diamond's cut, not the
                  shape or size (although these can be interchangeable), and how
                  well the stone is faceted, proportioned, and polished. This C
                  also determines how the diamond interacts with light, as
                  brilliance—or the diamond's ability to return light to the
                  eye—is measured solely by the stone's cut (color and clarity
                  have no impact here). For any diamond shape, visually, cut is
                  the first C to consider, followed by color, and, least
                  importantly, clarity (as long as the diamond has no visible
                  imperfections).
                </p>
                <div className="img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20020728.png?alt=media&token=e9e280b2-4b14-43a2-8519-4874e6b433a3"></img>
                </div>
                <p className="para">
                  Per the GIA system, diamond cuts are graded as Excellent, Very
                  Good, Good, Fair, and Poor. Cut grade doesn't influence the
                  cost as much as the other Cs, so Mills suggests always
                  sticking within the Excellent to Very Good range for a
                  well-cut stone that works best with light. "Any range of color
                  and eye-clean clarity will be beautiful and super bright if
                  the diamond is well cut," he says.
                </p>
                <div className="content tip para">
                  AD TIP
                  <p>
                    The dimension and proportion of a stone (especially for
                    elongated shapes, such as marquise, oval, radiant, emerald,
                    and pear) can majorly influence the look of the diamond. A
                    good rule of thumb is to maintain a well-balanced
                    length-to-width ratio scale, which can make the stone in
                    your engagement ring appear larger. Elongated shapes
                    specifically come in a variety of size ratios, determined by
                    both cut and carat weight—but, again, make sure to stay
                    within the Excellent to Very Good cut range for the best
                    diamonds.
                  </p>
                </div>
              </div>
              <div id="color">
                <h4>Color</h4>
                <p>
                  Diamond colors are rated within a D to Z scale, with D meaning
                  completely colorless (and the most expensive) and Z having a
                  light yellow hue. According to Mills, standard diamond quality
                  falls within the D to J color grade, and the shape of the
                  diamond also influences its spot on the color scale. A round
                  brilliant diamond, for example, hides color incredibly well,
                  meaning you can go further down the scale without seeing any
                  yellowing. However, longer diamond shapes, like oval and
                  radiant, reveal color much more easily.
                </p>
                <div className="img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20020643.png?alt=media&token=26ff8f88-ade6-4962-b069-1a1b6ac4a55c"></img>
                </div>
                <div className="content tip para">
                  AD TIP
                  <p>
                    With round, emerald, and Asscher cuts, you can typically go
                    as low as a J grade without seeing any incredibly noticeable
                    color. On the other hand, cuts such as oval, cushion,
                    radiant, pear, princess, marquise, and heart require quality
                    a bit higher on the scale (G and up) so as not to see any
                    color.
                  </p>
                </div>
              </div>
              <div id="clarity">
                <h4>Clarity</h4>
                <p>
                  The clarity of a diamond speaks to the number of natural
                  imperfections, called inclusions, present in a stone and
                  whether you can see them with the unaided eye. The GIA grading
                  scale rates diamonds from Flawless (FL) to Included (I).
                  However, a stone doesn't have to be at the very top of the
                  scale—Flawless or Very Very Slightly Included (VVS)—to look
                  perfect and inclusion-free. It's all about how eye-clean the
                  diamond appears, and Mills says this is what usually surprises
                  people most when viewing diamonds in person. In fact, if an
                  SI1 (Slightly Included) clarity diamond appears perfectly
                  eye-clean, there is no visible difference between a VVS1 (Very
                  Very Slightly Included) clarity stone of the exact same carat,
                  color, and cut—minus about tens of thousands of dollars.
                </p>
                <div className="img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20021117.png?alt=media&token=0e2a6616-6930-4179-9bad-14ab18ba92f9"></img>
                </div>

                <div className="content tip para">
                  AD TIP
                  <p>
                    To get the most out of your diamond for less, finding a
                    balance between color and clarity is key. While that balance
                    varies by diamond shape, you can save money without
                    sacrificing quality by staying on the high end of the color
                    scale, but the lower end of the clarity scale, as long as
                    there are no visible inclusions.
                  </p>
                </div>
              </div>
              <div id="carat">
                <h4>Carat</h4>
                <p>
                  Last but not least, carat refers to a measurement of the
                  actual weight of the diamond. According to GIA, one carat
                  converts to 0.2 grams, which is essentially the same weight as
                  a paper clip. Naturally, the larger the carat, the more
                  expensive the diamond. Because no two diamonds are completely
                  identical, carat should be viewed as a guideline, since it
                  only determines the weight of the stone as opposed to the
                  actual size. "You can have five diamonds, let's say oval, all
                  exactly 2.00 carats, all the same color, clarity, and cut, but
                  they will all be slightly different sizes and shapes," Mills
                  explains.
                </p>
                <div className="img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FScreenshot%202024-06-30%20020859.png?alt=media&token=fab38f71-70fe-4ac7-a84c-d02f6353982e"></img>
                </div>
                <div className="content tip para">
                  AD TIP
                  <p>
                    Shopping for a lab-grown diamond? Don't fret: The 4Cs apply
                    to lab-created stones exactly as they do to natural
                    diamonds, explains Ortega. "Since lab-grown diamonds have
                    the same physical, chemical, and optical properties as
                    natural diamonds, they are graded the same way," she shares.
                    "Lab-grown diamonds are produced, not found, so there’s a
                    greater percentage of high-clarity and color-graded diamonds
                    available compared to natural ones."
                  </p>
                </div>
              </div>
              <div id="shape">
                <h4>Shape</h4>
                <p className="para">
                  The term "diamond shape" refers to the physical and visual
                  shape of the diamond. Each shape has unique attributes
                  influencing the diamond's overall appearance and brilliance.
                  When purchasing a diamond, customers typically consider its
                  shape as one of the primary factors. Diamond cut and shape are
                  often confused and used interchangeably, but they are two
                  distinct concepts. Diamond cut refers to a diamond's
                  proportions, symmetry, facets, and reflective qualities. On
                  the other hand, diamond shape refers to a diamond's overall
                  outline or external appearance when viewed from above.
                </p>
                <p className="para">
                  There are various diamond shapes, each possessing its distinct
                  characteristics. However, the round brilliant-cut diamond is
                  the most popular and traditional shape. Additionally, there
                  are fancy-shaped diamonds, including the princess cut, emerald
                  cut, cushion cut, Asscher cut, pear cut, heart cut, oval cut,
                  marquise cut, and radiant cut diamonds. These fancy-shaped
                  diamonds are highly sought-after for engagement rings and fine
                  jewelry due to their unique and breathtaking shapes.
                </p>
                <div>
                  <p>
                    Learn more about{""}
                    <span
                      className="here"
                      onClick={() => navigate(config.routes.public.allProduct)}
                    >
                      Diamond Shape
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div id="section4"></div>
            <div id="section5"></div>
            <div id="section6"></div>
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
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fsnapedit_1719690260501.jpg?alt=media&token=989f1529-ffe6-4208-adb0-b0fd5263e096"
            ></img>
          </Content>
        </Layout>
        <Anchor className="anchor">
          <h6 className="in-this-article">IN THIS ARTICLE</h6>
          <Link href="#section2" title="01 The Importance of the 4Cs" />
          <Link href="#section3" title="02 A Breakdown of the 4Cs" />
          <Link href="#cut" title="Cut" />
          <Link href="#color" title="Color" />
          <Link href="#clarity" title="Clarity" />
          <Link href="#carat" title="Carat" />
          <Link href="#shape" title="Shape" />
        </Anchor>
      </Layout>
    </Container>
  );
}

export default Learn4cs;
