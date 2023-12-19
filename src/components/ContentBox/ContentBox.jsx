import { useState } from "react";
import { CONSTANTS } from "../../utils/constants";
import styles from "./styles.module.scss";
import { testimonials } from "../../data";
import { Link } from "react-router-dom";

export const ContentBox = () => {
  const [activeNavLink, setActiveNavLink] = useState(CONSTANTS.navLink.about);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const dots = new Array(testimonials.length).fill(null);

  const renderContent = () => {
    switch (activeNavLink) {
      case CONSTANTS.navLink.about:
        return getAboutContent();

      case CONSTANTS.navLink.testimonials:
        return getTestimonialsContent();

      default:
        break;
    }
  };

  const getAboutContent = () => {
    return (
      <>
        <div className={`${styles.aboutContent} ${styles.desktop____}`}>
          <h3>Welcome!</h3>

          <p>
            My name is Alissa Pendorf, and I&rsquo;m the proud owner of{" "}
            <b>Paperbird Creative, LLC</b>. As both a passionate graphic
            designer and environmental educator, my mission is to
            <b>promote conservation through education and creativity</b>, which
            often converge in exciting ways.
          </p>
          <p>
            Paperbird Creative offers a
            <b>range of creative graphic design services</b>, including
            consultation, branding, photography, content management,
            copywriting, and digital prepress.
          </p>
          <p>
            As an <b>eco-conscious</b> designer, I work to promote the
            conservation of the natural world through responsible design
            practices. And no matter how large or small the task, I strive to
            deliver <b>intelligent</b>, <b>functional</b>, and{" "}
            <b>aesthetically-beautiful</b> work that will last a lifetime.&nbsp;
          </p>
          <p>
            Think we would work well together?{" "}
            <b>I&rsquo;d love to hear from you!</b>
          </p>
        </div>
        <div className={`${styles.aboutContent} ${styles.mobile____}`}>
          <h3>Welcome!</h3>

          <p>
            My name is Alissa Pendorf, and I&rsquo;m the proud owner of{" "}
            <b>Paperbird Creative, LLC</b>.
          </p>
          <p>
            As both a passionate graphic designer and environmental educator, my
            mission is to
            <b>promote conservation through education and creativity</b>, which
            often converge in exciting ways.
          </p>
          <p>
            Paperbird Creative offers a
            <b>range of creative graphic design services</b>, including
            consultation, branding, photography, content management,
            copywriting, and digital prepress.
          </p>
          <p>
            As an <b>eco-conscious</b> designer, I work to promote the
            conservation of the natural world through responsible design
            practices. And no matter how large or small the task, I strive to
            deliver <b>intelligent</b>, <b>functional</b>, and{" "}
            <b>aesthetically-beautiful</b> work that will last a lifetime.&nbsp;
          </p>
          <p>Think we would work well together?</p>
          <p>
            <b>I&rsquo;d love to hear from you!</b>
          </p>
        </div>
      </>
    );
  };

  const getTestimonialsContent = () => {
    return (
      <p className={styles.testimonialText}>
        {testimonials[activeTestimonialIndex].text}
      </p>
    );
  };

  // function to handle next arrow click and set the value to 0 index if its pressed for the last index
  const handleNextArrowClick = () => {
    if (activeTestimonialIndex === testimonials.length - 1) {
      setActiveTestimonialIndex(0);
    } else {
      setActiveTestimonialIndex(activeTestimonialIndex + 1);
    }
  };

  // function to handle previous arrow click and set the value to last index if its pressed for the 0 index
  const handlePreviousArrowClick = () => {
    if (activeTestimonialIndex === 0) {
      setActiveTestimonialIndex(testimonials.length - 1);
    } else {
      setActiveTestimonialIndex(activeTestimonialIndex - 1);
    }
  };

  return (
    <div className={styles.contentBoxWrapper}>
      <div className={styles.contentBox}>
        <div className={styles.textBox}>{renderContent()}</div>

        <div className={styles.nav}>
          <p onClick={() => setActiveNavLink(CONSTANTS.navLink.about)}>
            <span
              dangerouslySetInnerHTML={{ __html: CONSTANTS.bulletSymbol }}
            />
            About
          </p>
          <p onClick={() => setActiveNavLink(CONSTANTS.navLink.testimonials)}>
            <span
              dangerouslySetInnerHTML={{ __html: CONSTANTS.bulletSymbol }}
            />
            Testimonials
          </p>
        </div>
      </div>
      {/* FOR MOBILE VIEW */}
      <div className={styles.resumeAndContact}>
        <a
          href={"/images/PDFs/ResumeDesign_Alissa-Pendorf.pdf"}
          target="_blank"
          rel="noreferrer"
          className={styles.resume}
        >
          Resumé
        </a>
        <Link to={"/contact"} className={styles.contact}>
          Contact
        </Link>
      </div>
      <div className={styles.dotsWrapper}>
        {activeNavLink !== "about" &&
          dots.map((_, index) => (
            <div
              key={index}
              className={
                index === activeTestimonialIndex
                  ? styles.active
                  : styles.inactive
              }
              onClick={() => setActiveTestimonialIndex(index)}
            />
          ))}
      </div>
      {activeNavLink !== "about" && (
        <>
          <span
            className={styles["slick-next"]}
            onClick={handleNextArrowClick}
          ></span>
          <span
            className={styles["slick-prev"]}
            onClick={handlePreviousArrowClick}
          ></span>
        </>
      )}
    </div>
  );
};
