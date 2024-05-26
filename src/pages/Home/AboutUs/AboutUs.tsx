// About.tsx
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
    Body,
    ContainerBanner, 
    LeftSidebar, 
    Main, 
    RightSidebar, 
    Heading, 
    Slogan, 
    Article, 
    FeaturedImage, 
    Paragraph,
    Welcome, 
    Team, 
    TeamImage, 
    TeamContent, 
    TeamName, 
    TeamRole,
    TeamDescription,
    Container
} from './AboutUs.styled';

const About = () => {
    return (
        <Body>
            <ContainerBanner>
            <LeftSidebar>
                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Fpicleft.jpg?alt=media&token=f0c4bdf4-f0da-494b-b529-22b71c454c7a" alt="picture of a person" />
            </LeftSidebar>
            <Main>
                <Heading>
                    Aphromas Diamond <Slogan>Slogan</Slogan>
                </Heading>
                <Article>
                    <FeaturedImage src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Fpicmain.jpg?alt=media&token=ed79c309-f895-4b07-b4c4-398a10cba093" alt="Article's featured image" />
                    <Paragraph>
                        Aphromas Diamond, a premier diamond store, was founded in 1975 in New York City by three visionaries: Richard Morgan, Isabella Rossi, and Ahmed Khan. Richard, a renowned gemologist from London, Isabella, an artistic jewelry designer from Italy, and Ahmed, a strategic businessman from Dubai, combined their expertise to create a brand synonymous with quality and elegance.
                    </Paragraph>
                    <Paragraph>
                        In 1975, the trio launched Aphromas Diamond in New York's Diamond District, naming it after Aphrodite, the Greek goddess of love and beauty. Their mission was to offer unmatched quality and craftsmanship with a personal touch. Their commitment to excellence quickly earned them a reputation for exquisite diamond collections and bespoke jewelry.
                    </Paragraph>
                    <Paragraph>
                        Throughout the 1980s and 1990s, Aphromas Diamond expanded to Los Angeles, Paris, and Dubai. They emphasized ethical sourcing, ensuring all diamonds were conflict-free. Their dedication to quality and innovation solidified their global presence.
                    </Paragraph>
                    <Paragraph>
                        Today, Aphromas Diamond is a globally recognized brand, led by the second generation. They have embraced technology with an e-commerce platform, maintaining the founders' vision of exceptional quality and personalized service. The store offers a diverse range of jewelry, from classic to contemporary designs.
                    </Paragraph>
                    <Paragraph>
                        The founders' passion and commitment to excellence transformed Aphromas Diamond into a global leader. As the company looks to the future, it remains dedicated to innovation and ethical practices, ensuring its legacy of beauty and brilliance continues for generations.
                    </Paragraph>
                </Article>
            </Main>
            <RightSidebar>
                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Fpicright.jpg?alt=media&token=29a26331-6223-49cd-b93b-9f03df599016" alt="tall cover photo" />
            </RightSidebar>
        </ContainerBanner>
        <Welcome>
        <div className="row">
            <div className="col-lg-12">
                <div className="section_title_all text-center">
                    <h3 className="title">WELCOME TO APHROMAS DIAMOND</h3>
                    <p className="section_subtitle ">Where timeless elegance meets exceptional craftsmanship. <br />Discover the brilliance of our exquisite diamond collections and bespoke jewelry designs.</p>
                    <div className="">
                        <i className=""></i>
                    </div>
                </div>
            </div>
        </div>
        </Welcome>
        <section className="section">
           <Container>
            <h2 className="team-title">Our Team</h2>

            <h5 className="team-sub">
                Our people are our greatest asset and biggest differentiator.They also believe in having a lot of fun along the way.
            </h5>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <Team>
                            <TeamImage>
                                <img src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" />
                            </TeamImage>
                            <TeamContent>
                                <TeamName>
                                    <h5>Joyce Wagner</h5>
                                </TeamName>
                                <TeamRole>Co-founder</TeamRole>
                                <TeamDescription></TeamDescription>
                            </TeamContent>
                        </Team>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <Team>
                            <TeamImage>
                                <img src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" />
                            </TeamImage>
                            <TeamContent>
                                <TeamName>
                                    <h5>Joyce Wagner</h5>
                                </TeamName>
                                <TeamRole>Co-founder</TeamRole>
                                <TeamDescription></TeamDescription>
                            </TeamContent>
                        </Team>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <Team>
                            <TeamImage>
                                <img src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" />
                            </TeamImage>
                            <TeamContent>
                                <TeamName>
                                    <h5>Joyce Wagner</h5>
                                </TeamName>
                                <TeamRole>Co-founder</TeamRole>
                                <TeamDescription></TeamDescription>
                            </TeamContent>
                        </Team>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-2 col-sm-4 col-xs-6">
                        <Team>
                            <TeamImage>
                                <img src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" />
                            </TeamImage>
                            <TeamContent>
                                <TeamName>
                                    <h5>Joyce Wagner</h5>
                                </TeamName>
                                <TeamRole>Co-founder</TeamRole>
                                <TeamDescription></TeamDescription>
                            </TeamContent>
                        </Team>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6">
                        <Team>
                            <TeamImage>
                                <img src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" />
                            </TeamImage>
                            <TeamContent>
                                <TeamName>
                                    <h5>Joyce Wagner</h5>
                                </TeamName>
                                <TeamRole>Co-founder</TeamRole>
                                <TeamDescription></TeamDescription>
                            </TeamContent>
                        </Team>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6">
                        <Team>
                            <TeamImage>
                                <img src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" />
                            </TeamImage>
                            <TeamContent>
                                <TeamName>
                                    <h5>Joyce Wagner</h5>
                                </TeamName>
                                <TeamRole>Co-founder</TeamRole>
                                <TeamDescription></TeamDescription>
                            </TeamContent>
                        </Team>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6">
                        <Team>
                            <TeamImage>
                                <img src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" />
                            </TeamImage>
                            <TeamContent>
                                <TeamName>
                                    <h5>Joyce Wagner</h5>
                                </TeamName>
                                <TeamRole>Co-founder</TeamRole>
                                <TeamDescription></TeamDescription>
                            </TeamContent>
                        </Team>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6">
                        <Team>
                            <TeamImage>
                                <img src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" />
                            </TeamImage>
                            <TeamContent>
                                <TeamName>
                                    <h5>Joyce Wagner</h5>
                                </TeamName>
                                <TeamRole>Co-founder</TeamRole>
                                <TeamDescription></TeamDescription>
                            </TeamContent>
                        </Team>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6">
                        <Team>
                            <TeamImage>
                                <img src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" />
                            </TeamImage>
                            <TeamContent>
                                <TeamName>
                                    <h5>Joyce Wagner</h5>
                                </TeamName>
                                <TeamRole>Co-founder</TeamRole>
                                <TeamDescription></TeamDescription>
                            </TeamContent>
                        </Team>
                    </div>
                </div>
                </Container>
        </section>
       
        </Body>
        
    );
}

export default About;
