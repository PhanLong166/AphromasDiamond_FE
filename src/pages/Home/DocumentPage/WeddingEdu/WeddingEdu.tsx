import { Layout, Anchor } from "antd";
import { Container } from "./../DocumentPage.styled";
import config from "@/config";
import { useNavigate } from "react-router-dom";
import MenuDoc from "@/components/MenuDoc/MenuDoc";

const { Content, Sider } = Layout;
const { Link } = Anchor;

function WeddingEdu() {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <Layout style={{ background: "#fff" }}>
        <Sider className="sider" width={260}>
          <MenuDoc />
        </Sider>
        <Layout className="layout" style={{ width: "50%" }}>
          <h1 className="header">Wedding Ring Guide</h1>
          <p className="header subtitle">
            We fill you in on all the secrets. Plus, tips on how to find the
            perfect ring for you and your partner.
          </p>
          <Content>
            <hr className="hr" />
            <div id="section1">
              <p className="para">
                Finding the perfect wedding ring for you and your partner is
                much easier said than done. Even if you have a specific style in
                mind, or you've been adding photos to your Pinterest board for
                years, you're probably still going to get overwhelmed by the
                sheer amount of choices available today. So, naturally, it's
                normal to have a tough time making a final decision.
              </p>
              <p className="para">
                Since your wedding rings are pieces you'll more than likely wear
                every single day, you obviously want them to be something that
                you genuinely love. Not only that, but since they also symbolize
                one of the most important days of your life, it's nice if you
                select options that truly mean something to you as well.
                Therefore, while choosing your wedding rings might be a
                time-consuming process, putting the extra effort in to ensure
                you're completely happy with your purchase is worth it.
              </p>
            </div>
            <div id="section2">
              <h3>What Does A Wedding Ring Symbolize?</h3>
              <p className="para">
                A wedding ring is a symbol that's both private and public. It's
                a sign of love and fidelity between you and your partner, and it
                also signifies to the rest of the world that you're in a
                committed relationship. Your beautiful wedding band is a
                celebration of the vows that you exchange on your wedding day,
                and your desire to be with your partner for eternity. While your
                engagement ring symbolizes the promise of marriage, it's the
                wedding ring that makes the marriage official.
              </p>
              <p className="para">
                Many of our customers wonder if a wedding ring should have
                diamonds. While we do offer many wedding ring styles that have
                diamonds set into the band, many of our most popular wedding
                rings for women and wedding rings for men are unadorned metal
                bands.
              </p>
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fweddingring.png?alt=media&token=6649907d-82e4-4a6d-9202-0bc518f11c53"
              ></img>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.gift)}
                >
                  VIEW AD's ALL WEDDING RING
                </span>
              </p>
            </div>
            <div id="section3">
              <h3>
                The Difference Between An Engagement Ring And A Wedding Ring
              </h3>
              <p className="para">
                A wedding ring, also known as a wedding band, is exchanged by
                the couple during their wedding ceremony, symbolizing their
                eternal commitment and love. These terms are often used
                interchangeably and hold the same meaning. Wedding rings come in
                a variety of designs, from simple and classic bands to more
                elaborate styles adorned with diamonds and other gemstones. They
                are typically worn on the fourth finger of the left hand, a
                tradition stemming from the ancient belief that this finger
                contains the "vena amoris," or the vein of love, directly
                connected to the heart. Regardless of style or tradition, the
                wedding ring remains a timeless symbol of a couple's promise to
                share their lives together.
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
                  ENGAGEMENT RING GUIDE
                </span>
              </p>
            </div>
            <div id="section4">
              <h3>How to Choose the Perfect Wedding Rings</h3>
              <h4>1. Find a piece that complements your engagement ring.</h4>
              <p className="para">
                Your engagement ring and wedding band are almost always going to
                be worn at the same time, so you want to pick pieces that look
                and feel great together. "The band, more often than not, is
                meant to be a complement to the engagement ring, not the other
                way around," says Priyanka Murthy, jeweler and founder of Array.
                "So, the band should be designed with the engagement ring in
                mind. For example, if a client has a solitaire diamond
                engagement ring, a band with small diamonds or a plain band
                could complement well."
              </p>
              <h4>2. Opt for something that is comfortable and convenient.</h4>
              <p className="para">
                Again, this is something you're going to wear nearly every
                single day. It has to be comfortable because if it's not, you're
                probably going to regret choosing your specific ring in the long
                run. "One piece of advice I always give is to make sure the
                height of the ring is something you can live with—you don’t want
                it to hit things or get things caught in it," Murthy points out.
              </p>
              <h4>3. Stay within your financial means.</h4>
              <p className="para">
                Yes, wedding rings are a big splurge, and some might even call
                them one of the most expensive items you'll ever purchase. That
                said, you want the price to be something you can deal with and
                pay off in a reasonable amount of time. There's no reason to put
                yourself into debt if you don't have to.
              </p>
              <h4>4. Shop for styles that are expertly crafted.</h4>
              <p className="para">
                The look of the ring is important, but so is how it was created.
                "Beyond durability, think about the legacy of your ring," Neal
                says. "Do you want to incorporate heirloom metals from your
                family, or craft a new heirloom that you can pass down to your
                children? Do you want the materials you use to be sourced
                sustainably and ethically? Where your ring comes from plays into
                both its inherent meaning and value." When looking at rings,
                research the jewelry brands, and don't be afraid to ask the
                jeweler any questions you may have.
              </p>
              <div>
                <h4>5. A Guide to Wedding Bands.</h4>
                <p className="para">
                  As mentioned, wedding bands have evolved since their ancient
                  beginnings, and there are so many options to choose from when
                  it comes to finding a piece that's right for you. So, before
                  you embark on shopping for a style, it's important to
                  understand the basic characteristics of wedding bands, which
                  Sherman highlights below.
                </p>
                <div className="content tip para">
                  <h4>Metals</h4>
                  <p>
                    Worried that your partner won't love the engagement ring you
                    pick? It happens—so get over the awkwardness and work
                    through it together. “Our best piece of advice is to be
                    honest. If you don't love the ring, be transparent with your
                    partner,” says Shah. “This is a lifelong, sentimental
                    purchase and it’s important that it resonates with you.
                    Approach the situation kindly and with honesty. Your ring is
                    something you should be excited to wear.”
                  </p>
                </div>
                <div className="content tip para">
                  <h4>Engraving and Etching</h4>
                  <p>
                    From vintage art deco designs to stars and florals, there
                    are endless ways to make the metal on your band a work of
                    art. Just keep in mind that intricate etching is more likely
                    to trap dirt (and is harder to clean), and any additional
                    designs (or engraving on the inside) will add to the final
                    price. Expect to pay anywhere from $25 for 15 machine-carved
                    characters to $75 for 8 hand-engraved characters.
                  </p>
                </div>
                <div className="content tip para">
                  <h4>Width</h4>
                  <p>
                    Ranging from 1mm to 8+mm, the width of your band is arguably
                    one of the biggest choices you'll have to make. "Men
                    typically prefer a wedding band between 4mm to 7mm, and the
                    choice for women varies with younger generations preferring
                    skinnier, daintier bands," notes Sherman.
                  </p>
                  <p>
                    In general, though, most brides will opt to match the width
                    of their wedding bands to that of their engagement rings,
                    with the most common widths ranging from 2mm to 4 mm. That
                    said, mixing widths can create a unique look, so don’t be
                    afraid to shop for something bigger or smaller depending on
                    the overall vibe you want to achieve.
                  </p>
                </div>
                <div className="content tip para">
                  <h4>Finish</h4>
                  <p>
                    When it comes down to the final details of your band, a
                    finish can really set the accessory apart and help your ring
                    stand out. Whether you long for a more textured look found
                    in stone, brush, matte, hammered, or sandblast, or you
                    prefer a satin or high polish, a finish is a final touch
                    that will truly make your band your own.
                  </p>
                </div>
              </div>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.gift)}
                >
                  VIEW AD's ALL WEDDING RING
                </span>
              </p>
            </div>
            <div id="section5">
              <h3>Shopping Tips for Choosing the Perfect Wedding Rings</h3>
              <h4>1. Set a budget.</h4>
              <p className="para">
                Sit down with your partner and really think about how much money
                you want to sink into your wedding rings. "Wedding rings can
                vary in price depending on the metal, style, and quality of the
                stones, so having a budget in mind will help you narrow down
                your options," Murthy says.
              </p>
              <h4>2. Make time to try on different options.</h4>
              <p className="para">
                When choosing a wedding ring, being patient and exploring a
                variety of styles is essential. Every couple has unique tastes
                and preferences, so trying on different designs will help you
                find the perfect ring that reflects your personalities and love.
                Don't hesitate to take your time to explore everything from
                classic to modern, simple to intricate styles, ensuring that you
                select a ring that is not only beautiful but also holds special
                meaning for both of you.
              </p>
              <h4>3. Think About What Works with Your Lifestyle.</h4>
              <p className="para">
                When choosing your wedding rings, consider your daily activities
                and lifestyle. If you have an active lifestyle or work with your
                hands, you might prefer a durable metal like platinum or
                titanium and a low-profile setting that won't easily snag or get
                damaged. For those who prefer something more delicate, ensure
                the design is comfortable and practical for everyday wear.
              </p>
              <h4>4. Work with a Reputable Jeweler</h4>
              <p className="para">
                Partnering with a trusted and reputable jeweler can make a big
                difference. Look for a jeweler who is experienced,
                knowledgeable, and willing to listen to your preferences. They
                can provide expert advice, help you understand the quality of
                the materials, and guide you through the selection process,
                ensuring you find rings that you both love.
              </p>
              <h4>5. Consider Jewelry Insurance.</h4>
              <p className="para">
                Protecting your investment is crucial, so consider purchasing
                jewelry insurance. This will cover you in case of loss, theft,
                or damage, giving you peace of mind. Many jewelers offer
                insurance options, or you can consult with an insurance agent to
                find a policy that suits your needs. Having insurance ensures
                that your precious rings are safeguarded for the future.
              </p>
              <p>
                RELATED:{" "}
                <span
                  className="here"
                  onClick={() => navigate(config.routes.public.metalEdu)}
                >
                  BUYING GUIDE
                </span>
              </p>
            </div>
            <div id="section6">
              <h3>Wedding Ring Styles</h3>
              <div>
                <h4>1. Diamond Wedding Bands</h4>
                <p className="para">
                  Think of a metal band with a diamond set as the center stone.
                  The cut and size of the diamond and the setting can vary
                  depending on the style you want. In general, diamond rings are
                  known for "their timeless elegance and simplicity," Murthy
                  says.
                </p>
                <ul style={{ listStyle: "initial" }} className="detail para">
                  <span className="strong">Pros</span>:
                  <li>
                    Versatile enough to look good with everything and will never
                    go out of style.
                  </li>
                  <li>
                    Diamonds are the strongest stone you can get and are very
                    durable.
                  </li>
                  <span className="strong">Cons</span>:
                  <li>
                    Can be very expensive depending on the clarity and carat.
                  </li>
                  <li>Diamonds require regular cleaning maintenance.</li>
                </ul>
                <img
                  style={{ width: "100%" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fdiamondweddingrig.jpg?alt=media&token=46cbdb20-34ad-4094-ac08-fdc3991a1083"
                ></img>
              </div>

              <div>
                <h4>2. Eternity Wedding Bands</h4>
                <p className="para">
                  An eternity wedding ring features diamonds (or other precious
                  stones) that are set around the entire band. The stones are
                  usually all the same size, and as Murthy notes, the encrusted
                  stones symbolize eternal love. "The eternity band is very
                  popular as a wedding band because the symbolism of love is
                  meaningful and universal," she says.
                </p>
                <ul style={{ listStyle: "initial" }} className="detail para">
                  <span className="strong">Pros</span>:
                  <li>Easy to stack with other rings</li>
                  <li>
                    It gives the illusion that the stones are floating in the
                    air
                  </li>
                  <span className="strong">Cons</span>:
                  <li>Cannot be resized because the back is not solid metal</li>
                  <li>Usually more expensive than a plain band</li>
                </ul>
                <img
                  style={{ width: "100%" }}
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FEternityWedding.png?alt=media&token=586f2d03-3eee-43bb-8e2e-fe3072e195d5"
                ></img>
              </div>
              <div>
                <h4>3. Plain Wedding Rings</h4>
                <p>
                  Plain wedding rings refer to simple rings that are made of a
                  single metal, such as gold or platinum. They can come in
                  different widths and thicknesses, and usually have a smooth,
                  flat surface with no gemstones, engravings, or texture,
                  explains Murthy. Don't be fooled into thinking plain is
                  boring, though: these minimalist designs can be extremely
                  elegant and are great for someone who wants to keep things
                  simple and versatile. "Plain bands are classic, timeless, and
                  versatile," Murthy says. "They never go out of style and can
                  be paired with any engagement ring style."
                </p>
                <ul style={{ listStyle: "initial" }} className="detail para">
                  <span className="strong">Pros</span>:<li>Versatile.</li>
                  <li>Easy to care for and clean.</li>
                  <li>Typically less expensive than more elaborate options.</li>
                  <span className="strong">Cons</span>:
                  <li>
                    Scratches and other wear and tear can be easily noticeable.
                  </li>
                  <li>
                    They can look chunky next to delicate engagement rings.
                  </li>
                  <li>
                    They aren't very customizable and may not be unique enough
                    for some couples.
                  </li>
                </ul>
                <div
                  className="content tip para"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    style={{ width: "28%", marginRight: "20px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FYellow_Gold_Wedding.webp?alt=media&token=c364063a-de4c-4b67-a0db-7b0dae388834"
                    alt="Yellow Gold Wedding Bands"
                  />
                  <div>
                    <h4>Yellow Gold Wedding Bands</h4>
                    <p>
                      Yellow gold has a beautiful rich glow that makes it a
                      time-honored classic choice for wedding rings. Plus, it's
                      hypoallergenic and rust-, tarnish-, and
                      corrosion-resistant. The two karatages differ slightly in
                      color, durability and hardness. 14k yellow gold is
                      slightly richer in color than 18k gold. It's also harder
                      and a bit more resistant to scratching.
                    </p>
                  </div>
                </div>
                <div
                  className="content tip para"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    style={{ width: "28%", marginRight: "20px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FWhite_gold_wedding_band.jpeg?alt=media&token=748b1493-7b6a-49d4-9d99-0c2ba0df5a4a"
                    alt="White Gold Wedding Bands"
                  />
                  <div>
                    <h4>White Gold Wedding Bands </h4>
                    <p>
                      Our customers love white gold for its platinum-like
                      appearance at a lower cost. White gold achieves its
                      signature silver-y brilliance and enhanced durability by
                      mixing pure gold with nickel and silver, and then plating
                      with rhodium. While this plating is long-wearing, some
                      occasional replating may be required to restore the
                      original color of your white gold wedding band.
                    </p>
                  </div>
                </div>
                <div
                  className="content tip para"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    style={{ width: "28%", marginRight: "20px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FRose_gold_wedding_band.jpeg?alt=media&token=5089ba99-3852-408b-97d5-dabdcb32e217"
                    alt="Rose Gold Wedding Bands"
                  />
                  <div>
                    <h4>Rose Gold Wedding Bands </h4>
                    <p>
                      Rose gold wedding bands are a beautiful and unique choice,
                      and their modern-vintage appeal is a growing trend. The
                      romantic pink hue of rose gold is created by using a
                      copper alloy. The preference of one karatage over another
                      comes down to whether people want a lighter (18k) or
                      slightly deeper (14k) rose color. While rose gold is more
                      durable than yellow gold, it does have the potential to
                      discolor skin or cause an allergic reaction, which is an
                      important consideration.
                    </p>
                  </div>
                </div>
                <div
                  className="content tip para"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    style={{ width: "28%", marginRight: "20px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FPlatinum_Wedding_Bands.jpeg?alt=media&token=c6b82abc-1e31-42fd-a85c-dc28024633d7"
                    alt="Platinum Wedding Bands"
                  />
                  <div>
                    <h4>Platinum Wedding Bands </h4>
                    <p>
                      Referred to as a noble metal due to its superior ability
                      to withstand corrosion and oxidation, platinum is a
                      naturally white metal that develops a lovely patina over
                      time that can be buffed back to a shine if desired. For
                      many, platinum wedding rings perfectly symbolize enduring
                      love.
                    </p>
                  </div>
                </div>
              </div>
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
            <div id="section7">
              <h3>Men's Wedding Rings</h3>
              <p className="para">
                Wedding rings are a symbol of lifelong commitment, so it's no
                surprise that so much time and thought goes into their
                selection. For years, women have enjoyed hundreds of stylistic
                options, including different shapes of diamonds and gemstones to
                pair with an engagement ring. Traditionally, men have had far
                fewer choices. Today, a growing number of guys are looking for
                wedding bands that complement their fashion sense and lifestyle.
                Classic men's wedding bands in platinum, white gold and yellow
                gold are among Blue Nile's top sellers. We're also excited to
                offer great-looking designs in highly durable metals like
                cobalt, tantalum, titanium and tungsten, as well as wedding
                bands with channel-set diamonds and diamond pavé, plus
                engravable styles.
              </p>
              <div>
                <h4>1. Popular Metals For Men's Wedding Bands</h4>
                <p className="para">
                  Metal preference is a big factor when it comes to choosing a
                  men's wedding band. Because each metal has its own unique
                  properties that affect comfort, durability and care, it can be
                  difficult to decide which is right for you. To help guide your
                  decision, we're diving into the specifics for the common
                  metals used in men’s wedding rings, including gold, platinum,
                  titanium, tungsten and more.
                </p>
                <div
                  className="content tip para"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    style={{ width: "28%", marginRight: "20px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FMan's_hand_with_gold_wedding_band.png?alt=media&token=a9c29228-342c-4531-bea2-e6abec971d0d"
                    alt="White Gold Wedding Bands"
                  />
                  <div>
                    <h4>Gold Wedding Bands </h4>
                    <p>
                      Gold wedding rings for men come in a wide variety of
                      styles from minimalist to embellished, including men's
                      yellow gold wedding rings, men's white gold wedding rings,
                      and men's rose gold wedding rings. Between gold's rust-,
                      tarnish-, and corrosion-resistant properties, a
                      malleability that makes it ideal for engraving and
                      resizing, and hypoallergenic nature, it's easy to see why
                      gold wedding rings will continue to be a favorite for
                      years to come. To maintain your gold wedding ring avoid
                      exposure to chlorine or other chemicals and cleaning
                      products. Gold's malleability makes it susceptible to
                      abrasions and changes in shape. Keep your ring looking
                      good by cleaning it with warm water, detergent-free soap
                      and a soft-bristled brush.
                    </p>
                  </div>
                </div>
                <div
                  className="content tip para"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    style={{ width: "28%", marginRight: "20px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2FPlatinum_Wedding_band.png?alt=media&token=f45cf464-b989-44da-8085-9a92534ee41e"
                    alt="Platinum Wedding Bands"
                  />
                  <div>
                    <h4>Platinum Wedding Bands </h4>
                    <p>
                      Platinum wedding rings for men are prized for their
                      timeless beauty and inherent value. With the durability to
                      rival diamonds' indestructible nature and 30-times rarer
                      than gold, platinum wedding bands easily secure
                      top-of-the-line status. Unlike its more malleable cousin
                      white gold, platinum is around 95% pure so it can maintain
                      its inherent density without becoming too rigid to be
                      engraved with sweet sentiments or resized for a glove-like
                      fit. Though platinum can wear to display an alluring
                      patina over a lifetime, a quick polish returns its
                      stunning shine to its original brilliance. Even a metal as
                      tough as platinum deserves some TLC. A simple soak in a
                      solution of warm soapy water and a gentle scrub with a
                      soft-bristle brush will do the trick.
                    </p>
                  </div>
                </div>
                <div>
                  <h4>2. How Much Are Men's Wedding Rings?</h4>
                  <p className="para">
                    The average price of a men's wedding band in the U.S. is
                    $600. At AD, there are many factors that influence the cost
                    of a men's wedding ring. Your choice of precious metal is
                    just one element that affects price, and some metals are
                    pricier than others. Of course, it's no surprise that band
                    prices increase with the addition of diamonds. For example,
                    a simple band crafted in cobalt starts around $160. One of
                    our most popular men's wedding rings in 14k yellow gold is
                    $425, while a while a platinum men's wedding band with
                    channel-set diamonds is around $2,200. The good news? We
                    have perfect styles to suit diverse tastes and budgets, and
                    we have the perfect wedding ring for you.
                  </p>
                </div>
              </div>
            </div>
            <div id="section8">
              <h3>How to Care for Your Wedding Rings</h3>
              <p className="para">
                The way you clean your wedding ring depends on the type of stone
                and setting, but some basic care tips apply universally. Remove
                your ring during activities like gardening, rock climbing, or
                jobs requiring gloves to prevent damage or loss. Avoid exposing
                your ring to harsh chemicals such as cleaning products,
                chlorine, and hairspray.
              </p>
              <p className="para">
                To clean your ring, soak it in warm water with regular dish soap
                for five minutes and use a soft-bristled toothbrush to clean
                behind the settings and stone. Have your rings inspected by a
                professional jeweler at least once a year to check for damage
                and loose stones and to get a professional cleaning. Finally,
                consider getting insurance for your wedding ring to cover
                potential loss or damage.
              </p>
              <div className="content tip para">
                <p>
                  Always remove your wedding ring during activities that could
                  cause damage or loss, such as gardening or rock climbing, and
                  avoid exposing it to harsh chemicals to maintain its quality
                  and longevity.
                </p>
              </div>
            </div>
            <div id="section9">
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
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Document%2Fweddingringbanner.png?alt=media&token=d6cfe827-876b-4c2c-94a8-c6644b2d40a7"
            ></img>
            <p>
              RELATED:{" "}
              <span
                className="here"
                onClick={() => navigate(config.routes.public.metalEdu)}
              >
                ALL WEDDING RING
              </span>
            </p>
          </Content>
        </Layout>
        <Anchor className="anchor">
          <h6 className="in-this-article">IN THIS ARTICLE</h6>
          <Link href="#section2" title="01 Wedding Ring Symbolize" />
          <Link href="#section3" title="02 Engagement & Wedding Ring" />
          <Link href="#section4" title="03 Perfect Wedding Ring" />
          <Link href="#section5" title="04 Shopping Tips" />
          <Link href="#section6" title="05 Wedding Ring Styles" />
        </Anchor>
      </Layout>
    </Container>
  );
}

export default WeddingEdu;
