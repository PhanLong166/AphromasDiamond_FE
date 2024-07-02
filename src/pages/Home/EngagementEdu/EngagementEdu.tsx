import { Layout, Anchor } from "antd";
import { Container } from "./EngagementEdu.styled";
import config from "@/config";
import { useNavigate } from "react-router-dom";
import MenuDoc from "@/components/MenuDoc/MenuDoc";

const { Content, Sider } = Layout;
const { Link } = Anchor;

function EngagementEdu() {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <Layout style={{ background: "#fff" }}>
        <Sider className="sider" width={260}>
          <MenuDoc />
        </Sider>
        <Layout className="layout" style={{ width: "50%" }}>
          <h1 className="header">Engagement Ring Guide</h1>
          <p className="header subtitle">
            Whether they’re artsy, modern, or classic, we'll help you find the
            engagement ring they'll appreciate most.
          </p>
          <Content>
            <hr className="hr" />
            <div id="section1">
              <p className="para">
                As the largest online retailer of certified diamonds and fine
                jewelry, we can say with confidence that you’ve come to the
                right place. Our selection, quality and expertise are
                unsurpassed. We’re here to help you design an engagement ring
                that reflects your intentions, your budget, and basically
                everything and anything that matters most to you.
              </p>
            </div>
            <div id="section2">
              <h3>What Does An Engagement Ring Symbolize?</h3>
              <p className="para">
                An engagement ring has long symbolized a proposal of marriage,
                and our Instagram feed is full of these magic moments. You know
                the ones, right? Where excited, and slightly nervous, proposers
                are down on one knee. The meaning of an engagement ring speaks
                volumes: It’s a clear and tangible symbol that you are beloved,
                and that the person presenting the ring wants to make your
                relationship official.
              </p>
              <p className="para">
                While any ring can be considered an engagement ring, by far the
                most popular engagement ring contains a diamond. Of course, the
                sky’s the limit when it comes to finding your perfect ring.
                There are no rules—and that includes, what finger the engagement
                ring is worn on. Traditionally in Western cultures, an
                engagement ring is worn on the third finger of the left hand,
                and, like a wedding ring, it’s a clear and very visible way to
                indicate that you’re in a relationship. However, some cultures
                wear engagement rings on the right hand, because the left hand
                is considered unlucky. What feels right to you? However you
                celebrate, we’re here to help make it happen.
              </p>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FSOLITAIRE_ENGAGEMENT_RINGS.webp?alt=media&token=b66473f1-b755-486d-be7c-ba510ed5efe5"
              ></img>
              <div className="content tip para">
                <p>
                  An engagement ring is not just a piece of jewelry; it
                  symbolizes commitment and the promise of a future together. It
                  represents love, devotion, and the intention to marry. When
                  choosing an engagement ring, consider its significance and
                  what it signifies for both individuals.
                </p>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.gift)}
                >
                  VIEW AD's ALL ENGAGEMENT RING
                </span>
              </p>
            </div>
            <div id="section3">
              <h3>
                The Difference Between An Engagement Ring And A Wedding Ring
              </h3>
              <p className="para">
                Traditionally, an engagement ring is what’s presented during a
                marriage proposal and a wedding ring is what partners give to
                each other during the wedding ceremony. It’s also common for an
                engagement ring to be more ornate than a wedding ring. One of
                our best selling combinations is a round diamond solitaire
                engagement ring paired with a diamond pavé wedding band. On the
                flipside, we have many customers who love to turn tradition on
                its head: some customers forgo the engagement ring altogether
                and choose matching bands. Other couples double up on sparkle,
                with stacking rings that bookend the engagement ring.
              </p>
              <p className="para">
                If you are planning to exchange wedding rings, you might wonder
                where to wear your engagement ring on your wedding day? Many
                people temporarily shift their engagement ring to their right
                hand on the day of the ceremony for safekeeping.
              </p>
              <p className="para">
                In different cultures, the customs regarding the wearing of
                engagement and wedding rings may vary. For example, in some
                countries, people may wear both rings on the same finger, while
                in others, the engagement ring might be worn on the right hand
                until the wedding ring is added.
              </p>
              <div className="content tip para">
                <p>
                  When wearing both an engagement ring and a wedding ring
                  together, consider choosing a wedding ring design that
                  complements your engagement ring to create a harmonious and
                  elegant set. Selecting a wedding ring that perfectly
                  complements your engagement ring can enhance the sparkle and
                  sophistication of your hands.
                </p>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.gift)}
                >
                  WEDDING RING GUIDE
                </span>
              </p>
            </div>
            <div id="section4">
              <h3>How Much Should You Spend On An Engagement Ring?</h3>
              <p className="para">
                The old adage about spending three months’ salary on your
                engagement ring is nothing more than that—and old adage that
                doesn’t necessarily line up with your priorities, needs or
                personal budget. (And that, after all, is what’s important.) And
                while it may be helpful to know that the average engagement ring
                cost in the United States is $5,900 according to a survey
                conducted by The Knot, what really matters is that Blue Nile
                offers incredible values and engagement ring prices that suit
                your comfort zone. Our experts are passionate about helping you
                make the most of every dollar whether your ring is $1,000 or
                $10,000.
              </p>
              <p className="para">
                We know from working directly with millions of customers and
                conducting surveys of our own, that there’s a tremendous amount
                of anxiety around saving up for and financing an engagement
                ring—especially among Gen Z and Millennials. So with that in
                mind, we’ve partnered with a savvy financial expert and put
                together tips that can help you smartly budget and save.
              </p>
              <div className="content tip para">
                <p>
                  When budgeting for an engagement ring, prioritize quality over
                  size or price tag. Look for rings that are well-crafted with
                  high-quality materials, as they will endure and retain their
                  value over time.
                </p>
              </div>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FHow_Much_Shoud_You_Spend_On_An_Engagement_Ring_1024x1024.webp?alt=media&token=0e5d33b1-858a-4c56-bdf9-8110ab9db608"
              ></img>
            </div>
            <div id="section5">
              <h3>Popular Metals Used In Engagement Rings</h3>
              <p className="para">
                A popular engagement ring metal among AD customers is definitely
                platinum (or white gold for people who want a platinum-look at a
                lower cost). Over the last few years, however, rose gold
                engagement rings are a fast-rising trend. Rose gold was often
                used in settings in the late nineteenth century, and is
                appreciated today for its naturally romantic appeal that
                particularly suits rings with vintage-inspired styles. Most
                recently, yellow gold engagement rings are capturing the
                attention of people who appreciate the way this metal’s
                beautiful warm glow complements engagement ring settings with
                colored gemstones.
              </p>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.metalEdu)}
                >
                  METAL EDUCATION
                </span>
              </p>
            </div>
            <div id="section6">
              <h3>Popular Engagement Ring Settings And Styles</h3>
              <p className="para">
                Technically the terms settings and styles mean different things.
                A craftsperson working on a custom engagement ring in the Blue
                Nile workshop will likely use the term setting when referring to
                the technique that’s used to set a diamond in place. Prong-style
                settings and bezel settings are just a few examples of setting
                styles in the head of a ring. There are also settings, including
                channel-set styles, that describe the way stones are set into
                the body of the ring.
              </p>
              <p className="para">
                It’s likely that the first thing that you’re going to run across
                when you start researching diamond engagement rings is a mention
                of the 4Cs (cut, color, clarity and carat.) Trying to master the
                nuances of these principles might even make you feel
                overwhelmed. But don’t worry. We have experts with years of
                experience who can help you find the perfect diamond based on
                your budget and style. That said, if you love to deep dive into
                the nitty gritty, we also have great resources that will help
                you navigate the nonsense and quickly master the basics.
              </p>
              <p className="para">
                Below are the most beautiful engagement ring styles for your
                partner's personality that you can refer to:
              </p>
              <div>
                <h4>1. If They're Artsy</h4>
                <p className="para">
                  They love gallery hopping, listening to live music, decorating
                  your home, and watching foreign movies. You know by now that
                  your artsy partner doesn't follow the crowd—they do their own
                  thing and inspire others to follow along. If this sounds like
                  your significant other, Marcilla Bailey, the founder of her
                  eponymous fine jewelry line, recommends sourcing a trillion
                  cut style to suit their personality. These cuts were made to
                  stand out due to their unique shape. “I think it's unusual and
                  geometric and can be set in many ways,” she says, adding that
                  she also likes a princess cut for similar reasons. “It has a
                  very angular look and is a stone shape that's not super
                  popular. I even like the idea of combining shapes. For
                  example, if you had a princess-cut center diamond and a
                  trillion cut on the sides, that could be really cool—[it would
                  feel] linear and geometric.”
                </p>
                <p className="para">
                  Anubh Shah, the co-founder of With Clarity, an online
                  engagement ring and diamond company based in New York, has
                  another pick for artsy types: A halo diamond held up by a
                  flower-shaped milgrain basket, which feels both timeless and a
                  little quirky.
                </p>
                <img
                  style={{ width: "100%" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FArtsy.jpg?alt=media&token=063f4d1b-3bb0-48a2-b243-ca2514d4eb50"
                ></img>
                <p className="para">
                  RELATED:{" "}
                  <span
                    className="here"
                    onClick={() => navigate(config.routes.public.productList)}
                  >
                    ALL PRINCESS RING
                  </span>
                </p>
              </div>
              <div>
                <h4>2. If They're Adventurous</h4>
                <p className="para">
                  They love gallery hopping, listening to live music, decorating
                  your home, and watching foreign movies. You know by now that
                  your artsy partner doesn't follow the crowd—they do their own
                  thing and inspire others to follow along. If this sounds like
                  your significant other, Marcilla Bailey, the founder of her
                  eponymous fine jewelry line, recommends sourcing a trillion
                  cut style to suit their personality. These cuts were made to
                  stand out due to their unique shape. “I think it's unusual and
                  geometric and can be set in many ways,” she says, adding that
                  she also likes a princess cut for similar reasons. “It has a
                  very angular look and is a stone shape that's not super
                  popular. I even like the idea of combining shapes. For
                  example, if you had a princess-cut center diamond and a
                  trillion cut on the sides, that could be really cool—[it would
                  feel] linear and geometric.”
                </p>
                <p className="para">
                  Anubh Shah, the co-founder of With Clarity, an online
                  engagement ring and diamond company based in New York, has
                  another pick for artsy types: A halo diamond held up by a
                  flower-shaped milgrain basket, which feels both timeless and a
                  little quirky.
                </p>
                <img
                  style={{ width: "50%" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FAdventurous.jpg?alt=media&token=7e1b261e-e7db-4596-b9fc-5f77f2925eca"
                ></img>
              </div>
              <div>
                <h4>3. If They're a Hopeless Romantic</h4>
                <p className="para">
                  For a hopeless romantic who loves sentimental and
                  vintage-inspired pieces, an old European cut or oval style
                  diamond is ideal. These cuts, often from the Victorian, Art
                  Deco, or Mid-Century eras, carry a romantic history and
                  old-world charm, as they were crafted before modern technology
                  and sparkle beautifully under candlelight. Many romantics
                  cherish the idea of an antique ring with a past, feeling
                  honored to be the next steward of such a treasure. Updating a
                  family heirloom with a new setting is another perfect way to
                  blend past and present, adding a personal touch to this
                  significant purchase.
                </p>
                <img
                  style={{ width: "50%" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FHopelessRomantic.jpg?alt=media&token=c999b29d-c8c1-4f51-ac72-4b9a3b9a707e"
                ></img>
                <p className="para">
                  RELATED:{" "}
                  <span
                    className="here"
                    onClick={() => navigate(config.routes.public.productList)}
                  >
                    ALL OVAL RING
                  </span>
                </p>
              </div>
              <div>
                <h4>4. If They’re Classic and Elegant</h4>
                <p className="para">
                  You’d describe them as timeless, tasteful, and sophisticated;
                  they're an Audrey Hepburn type. That means one thing: Look to
                  Tiffany & Co (literally or for inspiration). The company has
                  become synonymous with a classic engagement ring, and there's
                  a good chance the timeless person in your life will appreciate
                  their wares.
                </p>
                <p className="para">
                  Are you looking for guidance in terms of a specific stone cut?
                  You can't go wrong with the perennially popular solitaire.
                  “Type engagement ring when you text and the emoji you get is a
                  four-prong round solitaire. It's the style that most people
                  picture in their heads when they think of a diamond ring,”
                  says Schatner. “In fact, many people are surprised to hear
                  that not everyone chooses a single round diamond as their
                  symbol of love.”
                </p>
                <img
                  style={{ width: "50%" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FClassic.jpg?alt=media&token=18b08ebe-d2ef-42c8-84c0-45ea987a289a"
                ></img>
                <p className="para">
                  RELATED:{" "}
                  <span
                    className="here"
                    onClick={() => navigate(config.routes.public.productList)}
                  >
                    ALL ROUND RING
                  </span>{" "}
                  &
                  <span
                    className="here"
                    onClick={() => navigate(config.routes.public.productList)}
                  >
                    TIFFANY & CO BRAND
                  </span>
                </p>
              </div>
              <div className="content tip para">
                <p>
                  Worried that your partner won't love the engagement ring you
                  pick? It happens—so get over the awkwardness and work through
                  it together. “Our best piece of advice is to be honest. If you
                  don't love the ring, be transparent with your partner,” says
                  Shah. “This is a lifelong, sentimental purchase and it’s
                  important that it resonates with you. Approach the situation
                  kindly and with honesty. Your ring is something you should be
                  excited to wear.”
                </p>
              </div>
              <div>
                <h4>5. If They're Modern</h4>
                <p className="para">
                  Stay away from over-the-top opulence and think sleek and chic
                  for the modernist in your life. If they love clean lines in
                  their wardrobe and their furniture or unique, structural
                  design elements, we recommends a Marquise or Asscher cut; the
                  Marquise in particular has experienced a resurgence after its
                  ‘80s heyday, but looks particularly striking in a modern
                  east-west orientation.
                </p>
                <p>
                  RELATED:{" "}
                  <span
                    className="here"
                    onClick={() => navigate(config.routes.public.diamond)}
                  >
                    ALL MARQUISE RING
                  </span>{" "}
                  &
                  <span
                    className="here"
                    onClick={() => navigate(config.routes.public.productList)}
                  >
                    ALL ASSCHER RING
                  </span>
                </p>
              </div>
            </div>
            <div id="section7">
              <h3>Finding Your Ring Size </h3>
              <p className="para">
                We have some great tips and tools for how to measure your ring
                size. The first method explains how to figure out your ring size
                with our printable guide and a ring that you already own as a
                point of reference. The second option is the most accurate, but
                requires a little bit of patience as you'll need to order our
                free ring sizer. (Both options are available via the link
                below.)
              </p>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.metalEdu)}
                >
                  FIND YOUR RING SIZE
                </span>
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
          <Link href="#section2" title="01 Engagement Ring Symbolize" />
          <Link href="#section3" title="02 Engagement & Wedding Ring" />
          <Link href="#section4" title="03 Spend On Engagement Ring" />
          <Link href="#section5" title="04 Popular Metals" />
          <Link href="#section6" title="05 Settings And Styles" />
        </Anchor>
      </Layout>
    </Container>
  );
}

export default EngagementEdu;
