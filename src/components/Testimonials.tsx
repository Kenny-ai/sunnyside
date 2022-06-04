import Emily from "../assets/image-emily.jpg";
import Jennie from "../assets/image-jennie.jpg";
import Thomas from "../assets/image-thomas.jpg";

const styles = {
  testimonial:
    "testimonial flex flex-col justify-center items-center py-8 px-8",
  testimonialText: "testimonial-text leading-relaxed mb-8 lg:text-lg",
  author: "author font-black lg:text-lg",
  role: "role text-sm",
  testimonialImage: "testimonial-image w-20 h-20 mb-8",
  image: "rounded-full"
};

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-container text-center py-16 flex flex-col justify-center items-center lg:px-24 xl:px-32">
        <div className="testimonials-header mb-4">
          <p className="uppercase font-black">Client testimonials</p>
        </div>

        <div className="testimonial-container flex flex-col justify-center items-center md:w-2/3 lg:items-start lg:w-full lg:flex-row">
          <div className={styles.testimonial}>
            <div className={styles.testimonialImage}>
              <img className={styles.image} src={Emily} alt="" />
            </div>

            <p className={styles.testimonialText}>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>

            <p className={styles.author}>Emily R.</p>
            <p className={styles.role}>Marketing Director</p>
          </div>

          <div className={styles.testimonial}>
            <div className={styles.testimonialImage}>
              <img className={styles.image} src={Thomas} alt="" />
            </div>

            <p className={styles.testimonialText}>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>

            <p className={styles.author}>Thomas S.</p>
            <p className={styles.role}>Chief Operating Officer</p>
          </div>

          <div className={styles.testimonial}>
            <div className={styles.testimonialImage}>
              <img className={styles.image} src={Jennie} alt="" />
            </div>

            <p className={styles.testimonialText}>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>

            <p className={styles.author}>Jennie F.</p>
            <p className={styles.role}>Business Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
