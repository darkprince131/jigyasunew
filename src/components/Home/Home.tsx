import { memo } from 'react';
import type { FC } from 'react';
import React, { useEffect, useState, useCallback } from 'react';

import resets from '../_resets.module.css';
import { FrameIcon } from './FrameIcon';
import { FrameIcon2 } from './FrameIcon2';
import { FrameIcon3 } from './FrameIcon3';
import { FrameIcon4 } from './FrameIcon4';
import { FrameIcon5 } from './FrameIcon5';
import classes from './Home.module.css';
import { SvgIcon } from './SvgIcon';
import { SvgIcon2 } from './SvgIcon2';

interface Props {
  className?: string;
}
/* @figmaId 210:265 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  const [logos, setLogos] = useState<string[]>(Array.from({ length: 12 }, (_, i) => `logo${i + 1}Png`)); // Initialize logos
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreLogos = useCallback(() => {
    if (!isLoading) {
      setIsLoading(true);

      // Simulate a network request delay
      setTimeout(() => {
        setLogos((prevLogos) => [
          ...prevLogos,
          ...Array.from({ length: 6 }, (_, i) => `newLogo${i + prevLogos.length + 1}Png`),
        ]);
        setIsLoading(false);
      }, 1500);
    }
  }, [isLoading]);
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.hero}>
        <div className={classes.nav}>
          <div className={classes.logoPng}></div>
          <div className={classes.links}>
            <div className={classes.link}>
              <div className={classes.linkHome}>Home</div>
            </div>
            <div className={classes.link2}>
              <div className={classes.linkAbout}>About</div>
            </div>
            <div className={classes.link3}>
              <div className={classes.linkProducts}>Products</div>
            </div>
            <div className={classes.link4}>
              <div className={classes.linkEvents}>Events</div>
            </div>
            <div className={classes.link5}>
              <div className={classes.linkContact}>Contact</div>
            </div>
          </div>
          <button className={classes.button}>
            <div className={classes.bookDemo}>Book Demo</div>
          </button>
        </div>
        <div className={classes.hero2}>
          <div className={classes.ellipse22_1Png}></div>
          <div className={classes.full20yellow20dotPng}></div>
          <div className={classes.ellipse2028Png}></div>
          <div className={classes.ellipse2027Png}></div>
          <div className={classes.rectangle2083Png}></div>
          <div className={classes.ellipse2023Png}></div>
          <div className={classes.full20blue20dotPng}></div>
          <div className={classes.content}>
            <div className={classes.left}>
              <div className={classes.label}>
                <div className={classes.lEARNINGBYDOING}>LEARNING BY DOING</div>
              </div>
              <div className={classes.text}>
                <div className={classes.aNewWayOfLearning}>
                  <div className={classes.textBlock}>A New Way</div>
                  <div className={classes.textBlock2}>of Learning</div>
                </div>
                <div className={classes.handsOnMethodsToDriveStudentSu}>
                  <div className={classes.textBlock3}>Hands-on methods to drive student success and</div>
                  <div className={classes.textBlock4}>engagement, empowering learners through the</div>
                  <div className={classes.textBlock5}>power of active learning for academic excellence.</div>
                </div>
              </div>
              <button className={classes.button2}>
                <div className={classes.bookDemo2}>Book Demo</div>
              </button>
            </div>
            <div className={classes.right}>
              <div className={classes.right1}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.body}>
        <div className={classes.frame28}>
          <div className={classes.tRUSTEDBY20SCHOOLS}>TRUSTED BY LEADING SCHOOLS</div>
          <div className={classes.container}>
            <div className={classes.logo1Png}></div>
            <div className={classes.logo1Png}></div>
            <div className={classes.logo2Png}></div>
            <div className={classes.logo3Png}></div>
            <div className={classes.logo4Png}></div>
            <div className={classes.logo5Png}></div>
            <div className={classes.logo6Png}></div>
            <div className={classes.logo7Png}></div>
            <div className={classes.logo8Png}></div>
            <div className={classes.logo9Png}></div>
            <div className={classes.logo10Png}></div>
            <div className={classes.logo11Png}></div>
            <div className={classes.logo12Png}></div>

            {/* Duplicated logos to simulate infinite scroll */}
            <div className={classes.logo1Png}></div>
            <div className={classes.logo2Png}></div>
            <div className={classes.logo3Png}></div>
            <div className={classes.logo4Png}></div>
            <div className={classes.logo5Png}></div>
            <div className={classes.logo6Png}></div>
            <div className={classes.logo7Png}></div>
            <div className={classes.logo8Png}></div>
            <div className={classes.logo9Png}></div>
            <div className={classes.logo10Png}></div>
            <div className={classes.logo11Png}></div>
            <div className={classes.logo12Png}></div>
          </div>
        </div>
        <div className={classes.container3}>
          <div className={classes.left2}>
            <div className={classes.image}></div>
          </div>
          <div className={classes.right2}>
            <div className={classes.frame7}>
              <div className={classes.wHOAREWE}>WHO ARE WE?</div>
              <div className={classes.title}>
                <div className={classes.aboutOur}>About our</div>
                <div className={classes.span}>
                  <div className={classes.scienceStudio}>Science Studio</div>
                  <div className={classes.span2}>
                    <div className={classes.ellipse22_1Png2}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.p}>
              <div className={classes.jigyasuIsASpaceForExploringSci}>
                <div className={classes.textBlock6}>Jigyasu is a space for exploring science and technology,</div>
                <div className={classes.textBlock7}>
                  designed to spark curiosity and imagination. Our learning method is based on hands-on experience and
                  dynamic visualization, embracing the philosophy of &quot;Learning by Doing.&quot;
                </div>
              </div>
              <div className={classes.weBringRawScienceOutOfTextbook}>
                We bring raw science out of textbooks and into the physical experiences of students, nurturing the next
                generation of &quot;Graham Bells.&quot;
              </div>
            </div>
            <button className={classes.button3}>
              <div className={classes.knowMore}>Know More</div>
            </button>
          </div>
        </div>
        <div className={classes.container4}>
          <div className={classes.text2}>
            <div className={classes.title2}>
              <div className={classes.oURPHILOSOPHY}>OUR PHILOSOPHY</div>
              <div className={classes.titleText}>
                <div className={classes.weBelieveInMakingScience}>We Believe in Making Science</div>
                <div className={classes.frame2}>
                  <div className={classes.funAndEngaging}>Fun and Engaging</div>
                  <div className={classes.span3}>
                    <div className={classes.ellipse22_1Png3}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.weBelieveInAHandsOnApproachToS}>
              <div className={classes.textBlock8}>
                We believe in a hands-on approach to science learning, where students are actively
              </div>
              <div className={classes.textBlock9}>engaged in the learning process.</div>
            </div>
          </div>
          <div className={classes.imageContainer}>
            <div className={classes.wrapper}>
              <div className={classes.image2}></div>
              <div className={classes.text3}>
                <div className={classes.explore}>Explore</div>
                <div className={classes.finallyTheyImplementTheirKnowl}>
                  Finally, they implement their knowledge by applying it to real-world problems and projects.
                </div>
              </div>
            </div>
            <div className={classes.wrapper2}>
              <div className={classes.image3}></div>
              <div className={classes.text4}>
                <div className={classes.engage}>Engage</div>
                <div className={classes.studentsAreEngagedInHandsOnSci}>
                  Students are engaged in hands-on science activities that spark their curiosity and interest.
                </div>
              </div>
            </div>
            <div className={classes.wrapper3}>
              <div className={classes.image4}></div>
              <div className={classes.text5}>
                <div className={classes.observe}>Observe</div>
                <div className={classes.theyObserveTheScientificPrinci}>
                  They observe the scientific principles in action and learn through direct experience.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.background}>
          <div className={classes.rECOGNIZEDBY}>RECOGNIZED BY</div>
          <div className={classes.container5}>
            <div className={classes.our20philosophy20image4Png}></div>
            <div className={classes.our20philosophy20image5Png}></div>
            <div className={classes.our20philosophy20image6Png}></div>
            <div className={classes.our20philosophy20image4Png2}></div>
            <div className={classes.our20philosophy20image5Png2}></div>
            <div className={classes.our20philosophy20image6Png2}></div>
          </div>
        </div>
        <div className={classes.container6}>
          <div className={classes.text6}>
            <div className={classes.title3}>
              <div className={classes.challengesWeAddress}>Challenges We Address</div>
              <div className={classes.titleText2}>
                <div className={classes.whyTraditional}>Why Traditional</div>
                <div className={classes.frame22}>
                  <div className={classes.learningIsnTEnough}>Learning Isn&#39;t Enough</div>
                  <div className={classes.span4}>
                    <div className={classes.ellipse22_1Png4}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame14}>
            <div className={classes.frame13}>
              <div className={classes.frame8}>
                <div className={classes.heading3LackOfCollaborative}>Lack of collaborative</div>
                <div className={classes.heading3LackOfCollaborative2}>
                  Without teamwork, students miss diverse insights and skill development.
                </div>
              </div>
              <div className={classes.class_1Png}>
                <div className={classes.background2}>
                  <div className={classes.cLASSROOM}>CLASS ROOM</div>
                </div>
              </div>
            </div>
            <div className={classes.frame12}>
              <div className={classes.frame9}>
                <div className={classes.heading3AbsenceOfAPhysicalLear}>Absence of a physical learning</div>
                <div className={classes.heading3AbsenceOfAPhysicalLear2}>
                  <div className={classes.textBlock10}>Lack of hands-on resources reduces practical learning</div>
                  <div className={classes.textBlock11}>experiences.</div>
                </div>
              </div>
              <div className={classes.class_2Png}>
                <div className={classes.background3}>
                  <div className={classes.eXAM}>EXAM</div>
                </div>
              </div>
            </div>
            <div className={classes.frame11}>
              <div className={classes.frame10}>
                <div className={classes.heading3StaticLearning}>Static learning</div>
                <div className={classes.heading3StaticLearning2}>
                  Traditional methods are repetitive and passive, limiting engagement.
                </div>
              </div>
              <div className={classes.class_3Png}>
                <div className={classes.background4}>
                  <div className={classes.cLASSROOM2}>CLASS ROOM</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.rectangle2088Png}></div>
          <div className={classes.full20yellow20dotPng2}></div>
        </div>
        <div className={classes.frame18}>
          <div className={classes.frame15}>
            <div className={classes.needOfTheHour}>Need of the hour</div>
            <div className={classes.span5}>
              <div className={classes.ellipse22_1Png5}></div>
            </div>
          </div>
          <div className={classes.frame17}>
            <div className={classes.p2}>
              <div className={classes.frame92}>
                <div className={classes.heading3LackOfCollaborative3}>Skill Development &amp; Application</div>
                <div className={classes.heading3LackOfCollaborative4}>
                  Focus on developing and applying practical skills.
                </div>
              </div>
              <div className={classes.frame82}>
                <div className={classes.heading3LackOfCollaborative5}>Career-Aligned Learning</div>
                <div className={classes.heading3LackOfCollaborative6}>
                  Ensures learning is relevant to future career goals.
                </div>
              </div>
              <div className={classes.frame102}>
                <div className={classes.heading3LackOfCollaborative7}>Joyful &amp; Stress-Free Learning </div>
                <div className={classes.heading3LackOfCollaborative8}>
                  <div className={classes.textBlock12}>Emphasis on making education enjoyable and</div>
                  <div className={classes.textBlock13}>relaxed.</div>
                </div>
              </div>
            </div>
            <div className={classes.imageContainer2}>
              <div className={classes.image5}></div>
              <div className={classes.image6}></div>
              <div className={classes.image7}></div>
            </div>
          </div>
        </div>
        <div className={classes.background5}>
          <div className={classes.frame23}>
            <div className={classes.frame19}>
              <div className={classes.heading120K}>20K+</div>
              <div className={classes.sTUDENTS}>STUDENTS</div>
            </div>
            <div className={classes.frame20}>
              <div className={classes.heading1600}>600+</div>
              <div className={classes.eXPERIMENTKITS}>EXPERIMENT KITS</div>
            </div>
            <div className={classes.frame21}>
              <div className={classes.heading120}>20+</div>
              <div className={classes.sCHOOLS}>SCHOOLS</div>
            </div>
            <div className={classes.frame222}>
              <div className={classes.heading116}>16+</div>
              <div className={classes.yREXPERIENCE}>YR EXPERIENCE</div>
            </div>
          </div>
        </div>
        <div className={classes.container7}>
          <div className={classes.left3}>
            <div className={classes.title4}>
              <div className={classes.wHYCHOOSEUS}>WHY CHOOSE US</div>
              <div className={classes.title5}>
                <div className={classes.unlockTheWondersOfScience}>Unlock the Wonders of Science</div>
                <div className={classes.span6}>
                  <div className={classes.withEngagingHandsOnLearning}>with Engaging Hands-On Learning</div>
                  <div className={classes.span7}>
                    <div className={classes.ellipse22_1Png6}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.frame27}>
              <div className={classes.frame25}>
                <div className={classes.point}>
                  <div className={classes.span8}>
                    <div className={classes.sVG}>
                      <div className={classes.frame}>
                        <FrameIcon className={classes.icon} />
                      </div>
                    </div>
                  </div>
                  <div className={classes.text7}>
                    <div className={classes.activeVisualizationTinkering}>Active Visualization &amp; Tinkering</div>
                    <div className={classes.physicalLearningPlatformToExpl}>
                      <div className={classes.textBlock14}>Physical learning platform to explore</div>
                      <div className={classes.textBlock15}>science with active visualization and</div>
                      <div className={classes.textBlock16}>tinkering to solve real-world problems.</div>
                    </div>
                  </div>
                </div>
                <div className={classes.point2}>
                  <div className={classes.span9}>
                    <div className={classes.sVG2}>
                      <div className={classes.frame3}>
                        <FrameIcon2 className={classes.icon2} />
                      </div>
                    </div>
                  </div>
                  <div className={classes.text8}>
                    <div className={classes.handsOnLearningCurriculum}>Hands-On Learning Curriculum</div>
                    <div className={classes.handsOnLearningCurriculumWithL}>
                      Hands-on learning curriculum with lesson plans, activity sheets, and STEM/DIY activities.
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.frame26}>
                <div className={classes.point3}>
                  <div className={classes.span10}>
                    <div className={classes.sVG3}>
                      <div className={classes.frame4}>
                        <FrameIcon3 className={classes.icon3} />
                      </div>
                    </div>
                  </div>
                  <div className={classes.text9}>
                    <div className={classes.curriculumSyncedExperiment}>Curriculum Synced Experiment</div>
                    <div className={classes.approx600PhysicalExperimentsSy}>
                      Approx. 600 physical experiments synced with the curriculum for Grades 6-12.
                    </div>
                  </div>
                </div>
                <div className={classes.point4}>
                  <div className={classes.span11}>
                    <div className={classes.sVG4}>
                      <div className={classes.frame5}>
                        <FrameIcon4 className={classes.icon4} />
                      </div>
                    </div>
                  </div>
                  <div className={classes.text10}>
                    <div className={classes.programManagementApp}>Program Management App</div>
                    <div className={classes.jigyasuProgramManagementAvaila}>
                      Jigyasu program management available via our mobile app/web app.
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.frame272}>
                <div className={classes.point5}>
                  <div className={classes.span12}>
                    <div className={classes.sVG5}>
                      <div className={classes.frame6}>
                        <FrameIcon5 className={classes.icon5} />
                      </div>
                    </div>
                  </div>
                  <div className={classes.text11}>
                    <div className={classes.teacherDemonstratorSupport}>Teacher/Demonstrator Support</div>
                    <div className={classes.teacherAndDemonstratorSupportP}>
                      <div className={classes.textBlock17}>Teacher and Demonstrator support</div>
                      <div className={classes.textBlock18}>provided by IITians to guide students</div>
                      <div className={classes.textBlock19}>through their learning journey.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right3}>
            <div className={classes.container8}>
              <div className={classes.rectangle91Png}></div>
              <div className={classes.ellipse46Png}></div>
              <div className={classes.why20choose20us20imagePng}></div>
              <div className={classes._2label_1Png}></div>
            </div>
          </div>
        </div>
        <div className={classes.container9}>
          <div className={classes.title6}>
            <div className={classes.heading4ChallengesWeAddress}>EXPLORE OUR MODELS</div>
            <div className={classes.frame62}>
              <div className={classes.frame52}>
                <div className={classes.enhanceScienceLessonsWith}>Enhance Science Lessons with</div>
              </div>
              <div className={classes.frame42}>
                <div className={classes.engagingModels}>Engaging Models</div>
                <div className={classes.span13}>
                  <div className={classes.ellipse22_1Png7}></div>
                </div>
              </div>
            </div>
            <div className={classes.ourScienceModelsAreAGreatWayTo}>
              Our science models are a great way to engage students in hands-on learning. Each model comes with a
              detailed teacher guide and student activity guides to help you make the most of your science lessons.
            </div>
          </div>
          <div className={classes.container10}>
            <div className={classes.scrollContainer}>
              <div className={classes.explore20our20models20image1Pn}></div>
              <div className={classes.explore20our20models20image2Pn}></div>
              <div className={classes.explore20our20models20image3Pn}></div>
              <div className={classes.explore20our20models20image4Pn}></div>
              <div className={classes.explore20our20models20image5Pn}></div>
              <div className={classes.explore20our20models20image1Pn2}></div>
              <div className={classes.explore20our20models20image2Pn2}></div>
              <div className={classes.explore20our20models20image3Pn2}></div>
              <div className={classes.explore20our20models20image4Pn2}></div>
              <div className={classes.explore20our20models20image5Pn2}></div>

              <div className={classes.explore20our20models20image1Pn}></div>
              <div className={classes.explore20our20models20image2Pn}></div>
              <div className={classes.explore20our20models20image3Pn}></div>
              <div className={classes.explore20our20models20image4Pn}></div>
              <div className={classes.explore20our20models20image5Pn}></div>
              <div className={classes.explore20our20models20image1Pn2}></div>
              <div className={classes.explore20our20models20image2Pn2}></div>
              <div className={classes.explore20our20models20image3Pn2}></div>
              <div className={classes.explore20our20models20image4Pn2}></div>
              <div className={classes.explore20our20models20image5Pn2}></div>
            </div>
          </div>

          <div className={classes.rectangle2088Png2}></div>
          <div className={classes.full20yellow20dotPng3}></div>
        </div>
        <div className={classes.container11}>
          <div className={classes.left4}>
            <div className={classes.rectangle2065Png}></div>
          </div>
          <div className={classes.right4}>
            <div className={classes.frame72}>
              <div className={classes.wHOAREWE2}>WHO ARE WE?</div>
              <div className={classes.title7}>
                <div className={classes.readyToEngageYourStudentsInHan}>
                  Ready to engage your students in hands-on science{' '}
                </div>
                <div className={classes.span14}>
                  <div className={classes.learning}>learning?</div>
                  <div className={classes.span15}>
                    <div className={classes.ellipse38_1Png}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.p3}>
              <div className={classes.jigyasuIsASpaceForExploringSci2}>
                <div className={classes.textBlock20}>Jigyasu is a space for exploring science and technology,</div>
                <div className={classes.textBlock21}>
                  designed to spark curiosity and imagination. Our learning method is based on hands-on experience and
                  dynamic visualization, embracing the philosophy of &quot;Learning by Doing.&quot;
                </div>
              </div>
              <div className={classes.weBringRawScienceOutOfTextbook2}>
                We bring raw science out of textbooks and into the physical experiences of students, nurturing the next
                generation of &quot;Graham Bells.&quot;
              </div>
            </div>
            <button className={classes.button4}>
              <div className={classes.bookDemo3}>Book Demo</div>
            </button>
          </div>
        </div>
        <div className={classes.backgroundOverlay}>
          <div className={classes.title8}>
            <div className={classes.heading4ChallengesWeAddress2}>UNLOCK BENEFITS</div>
            <div className={classes.frame63}>
              <div className={classes.frame53}>
                <div className={classes.ourStudentSJourney}>Our Student&#39;s Journey </div>
              </div>
              <div className={classes.frame43}>
                <div className={classes.overASpanOfTime}>Over a Span of time</div>
                <div className={classes.span16}>
                  <div className={classes.ellipse22_1Png8}></div>
                </div>
              </div>
            </div>
            <div className={classes.container12}>
              <div className={classes.list}>
                <div className={classes.frame31}>
                  <div className={classes.ellipse22_1Png9}></div>
                  <div className={classes.itemIncreaseInVisualizationCap}>Increase in visualization capacity</div>
                </div>
                <div className={classes.frame32}>
                  <div className={classes.ellipse22_1Png10}></div>
                  <div className={classes.itemStudentsDevelopExperimenta}>Students develop experimental skills</div>
                </div>
                <div className={classes.frame33}>
                  <div className={classes.ellipse22_1Png11}></div>
                  <div className={classes.itemDeeperUnderstandingLongerR}>Deeper understanding, longer retention</div>
                </div>
              </div>
              <div className={classes.list2}>
                <div className={classes.frame35}>
                  <div className={classes.ellipse22_1Png12}></div>
                  <div className={classes.itemApplicationOfScienceConcep}>
                    Application of science concepts to real world scenarios
                  </div>
                </div>
                <div className={classes.frame36}>
                  <div className={classes.ellipse22_1Png13}></div>
                  <div className={classes.itemSkillAdditionRelevantToInd}>Skill addition relevant to industry</div>
                </div>
                <div className={classes.frame34}>
                  <div className={classes.ellipse22_1Png14}></div>
                  <div className={classes.itemProductDevelopmentExperien}>Product development experience</div>
                </div>
              </div>
            </div>
            <button className={classes.button5}>
              <div className={classes.contactUs}>Contact us</div>
            </button>
          </div>
        </div>
        <div className={classes.container13}>
          <div className={classes.title9}>
            <div className={classes.heading4ChallengesWeAddress3}>OUR GALLERY</div>
            <div className={classes.frame64}>
              <div className={classes.frame54}>
                <div className={classes.studentsDiscovering}>Students Discovering</div>
              </div>
              <div className={classes.frame44}>
                <div className={classes.scienceFirsthand}>Science Firsthand</div>
                <div className={classes.span17}>
                  <div className={classes.ellipse38_1Png2}></div>
                </div>
              </div>
            </div>
            <div className={classes.ourScienceModelsAreAGreatWayTo2}>
              Our science models are a great way to engage students in hands-on learning. Each model comes with a
              detailed teacher guide and student activity guides to help you make the most of your science lessons.
            </div>
          </div>
          <div className={classes.frame38}>
            <div className={classes.our20gallery20image1Png}></div>
            <div className={classes.our20gallery20image1Png2}></div>
            <div className={classes.frame37}>
              <div className={classes.our20gallery20image2Png}></div>
              <div className={classes.our20gallery20image3Png}></div>
            </div>
            <div className={classes.our20gallery20image1Png3}></div>
            <div className={classes.our20gallery20image4Png}></div>
          </div>
          <div className={classes.rectangle2088Png3}></div>
          <div className={classes.full20yellow20dotPng4}></div>
        </div>
        <div className={classes.frame45}>
          <div className={classes.title10}>
            <div className={classes.heading4ChallengesWeAddress4}>OUR TESTIMONIAL</div>
            <div className={classes.frame65}>
              <div className={classes.frame55}>
                <div className={classes.whatTheySayAboutOur}>What they say about our</div>
              </div>
              <div className={classes.frame46}>
                <div className={classes.platform}>platform</div>
                <div className={classes.span18}>
                  <div className={classes.ellipse38_1Png3}></div>
                </div>
              </div>
            </div>
            <div className={classes.ourScienceModelsAreAGreatWayTo3}>
              Our science models are a great way to engage students in hands-on learning. Each model comes with a
              detailed teacher guide and student activity guides to help you make the most of your science lessons.
            </div>
          </div>
          <div className={classes.frame442}>
            <div className={classes.frame41}>
              <div className={classes.frame40}>
                <div className={classes.our20testimonial20image1Png}></div>
                <div className={classes.frame39}>
                  <div className={classes.riddhiSingh}>Riddhi Singh</div>
                  <div className={classes.physicsTeacher}>Physics Teacher</div>
                </div>
              </div>
              <div className={classes.frame422}>
                <div className={classes.ThereAreALotOfModelsToExploreW}>
                  “There are a lot of models to explore which helps in understanding concept”
                </div>
                <div className={classes.loremIpsumDolorSitAmetConsecte}>
                  <div className={classes.textBlock22}>Lorem ipsum dolor sit amet consectetur. Netus</div>
                  <div className={classes.textBlock23}>amet morbi cursus egestas at ut elit. Id nec metus</div>
                  <div className={classes.textBlock24}>pharetra sit at nam.Lorem ipsum dolor sit amet</div>
                  <div className={classes.textBlock25}>consectetur. Netus amet morbi cursus egestas at ut</div>
                  <div className={classes.textBlock26}>elit. Id nec metus pharetra sit at nam.</div>
                </div>
              </div>
            </div>
            <div className={classes.frame423}>
              <div className={classes.frame402}>
                <div className={classes.our20testimonial20image2Png}></div>
                <div className={classes.frame392}>
                  <div className={classes.riddhiSingh2}>Riddhi Singh</div>
                  <div className={classes.physicsTeacher2}>Physics Teacher</div>
                </div>
              </div>
              <div className={classes.frame424}>
                <div className={classes.ThereAreALotOfModelsToExploreW2}>
                  “There are a lot of models to explore which helps in understanding concept”
                </div>
                <div className={classes.loremIpsumDolorSitAmetConsecte2}>
                  <div className={classes.textBlock27}>Lorem ipsum dolor sit amet consectetur. Netus</div>
                  <div className={classes.textBlock28}>amet morbi cursus egestas at ut elit. Id nec metus</div>
                  <div className={classes.textBlock29}>pharetra sit at nam.Lorem ipsum dolor sit amet</div>
                  <div className={classes.textBlock30}>consectetur. Netus amet morbi cursus egestas at ut</div>
                  <div className={classes.textBlock31}>elit. Id nec metus pharetra sit at nam.</div>
                </div>
              </div>
            </div>
            <div className={classes.frame432}>
              <div className={classes.frame403}>
                <div className={classes.our20testimonial20image3Png}></div>
                <div className={classes.frame393}>
                  <div className={classes.riddhiSingh3}>Riddhi Singh</div>
                  <div className={classes.physicsTeacher3}>Physics Teacher</div>
                </div>
              </div>
              <div className={classes.frame425}>
                <div className={classes.ThereAreALotOfModelsToExploreW3}>
                  “There are a lot of models to explore which helps in understanding concept”
                </div>
                <div className={classes.loremIpsumDolorSitAmetConsecte3}>
                  <div className={classes.textBlock32}>Lorem ipsum dolor sit amet consectetur. Netus</div>
                  <div className={classes.textBlock33}>amet morbi cursus egestas at ut elit. Id nec metus</div>
                  <div className={classes.textBlock34}>pharetra sit at nam.Lorem ipsum dolor sit amet</div>
                  <div className={classes.textBlock35}>consectetur. Netus amet morbi cursus egestas at ut</div>
                  <div className={classes.textBlock36}>elit. Id nec metus pharetra sit at nam.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.frame532}>
          <div className={classes.frame51}>
            <div className={classes.j_LogoPng}></div>
            <div className={classes.jigyasuIsAnEducationalStartupW}>
              <div className={classes.textBlock37}>Jigyasu is an educational startup with</div>
              <div className={classes.textBlock38}>&quot;Learning By Doing&quot; as its guiding principle.</div>
              <div className={classes.textBlock39}>Founded by Mr. Satwik Das, an IIT Kharagpur</div>
              <div className={classes.textBlock40}>Alumnus. Jigyasu aims to bring abstract</div>
              <div className={classes.textBlock41}>concepts from textbooks to real life. </div>
            </div>
            <div className={classes.copyright2024JigyasuEducation}>Copyright 2024@ Jigyasu Education</div>
          </div>
          <div className={classes.frame522}>
            <div className={classes.frame462}>
              <div className={classes.links2}>Links</div>
              <div className={classes.home}>Home</div>
              <div className={classes.about}>About</div>
              <div className={classes.products}>Products</div>
              <div className={classes.events}>Events</div>
              <div className={classes.contact}>Contact</div>
            </div>
            <div className={classes.frame47}>
              <div className={classes.disclaimer}>Disclaimer</div>
              <div className={classes.privacyPolicy}>Privacy Policy</div>
              <div className={classes.termsConditions}>Terms &amp; Conditions</div>
            </div>
            <div className={classes.frame48}>
              <div className={classes.contactDetails}>Contact Details</div>
              <div className={classes.frame49}>
                <div className={classes.sVG6}>
                  <SvgIcon className={classes.icon6} />
                </div>
                <div className={classes._9199987823}>+91 99987823</div>
              </div>
              <div className={classes.frame50}>
                <div className={classes.sVG7}>
                  <SvgIcon2 className={classes.icon7} />
                </div>
                <div className={classes.hIGDuplex44SaileshreeViharOppT}>
                  <div className={classes.textBlock42}>HIG Duplex #44, Saileshree Vihar, Opp to</div>
                  <div className={classes.textBlock43}>DAV CSPUR, BBSR- 751024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
