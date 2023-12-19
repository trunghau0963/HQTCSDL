import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
import { Dentist } from "../../model/model";
import { AddAppointmentByDentist } from "./functionHome";
const HomeComponent = ({ listDentist }: { listDentist: Dentist[] }) => {
  return (
    <BaseHtml>
      <div>
        <section id="hero" class="d-flex align-items-center">
          <div class="container">
            <h1>Welcome to HTV CLINIC</h1>
            <h2>
              We are here to justify your medical needs and secure well being
            </h2>
            <a href="/login" class="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </section>
        <main id="main">
          <section id="why-us" class="why-us">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 d-flex align-items-stretch">
                  <div class="content">
                    <h3>Why Choose HTV Clinic?</h3>
                    <p>
                      HTV Clinic is an integrated medical resilience and
                      insurance system that enables anyone to get the best
                      medical assitance within a reasonable budget. We
                      understand the importance of medical care and hence stand
                      by you to provide you with all forms of medical justice.
                    </p>
                    <div class="text-center">
                      <a href="#" class="more-btn">
                        Learn More <i class="bx bx-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 d-flex align-items-stretch">
                  <div class="icon-boxes d-flex flex-column justify-content-center">
                    <div class="row">
                      <div class="col-xl-4 d-flex align-items-stretch">
                        <div class="icon-box mt-4 mt-xl-0">
                          <i class="bx bx-plus-medical"></i>
                          <h4>Best Services</h4>
                          <p>
                            If you are at Healthifer, you must be the one values
                            quality. And you are at the right place for it.
                          </p>
                        </div>
                      </div>
                      <div class="col-xl-4 d-flex align-items-stretch">
                        <div class="icon-box mt-4 mt-xl-0">
                          <i class="bx bx-heart"></i>
                          <h4>Trustworthy</h4>
                          <p>
                            Trust is the pillars on which we stand. Healthifer
                            ensures you get all the justice for what you pay.
                          </p>
                        </div>
                      </div>
                      <div class="col-xl-4 d-flex align-items-stretch">
                        <div class="icon-box mt-4 mt-xl-0">
                          <i class="bx bx-dollar"></i>
                          <h4>Budget Friendly</h4>
                          <p>
                            No more compromises with your health for your
                            limited budget. We have plans for everyone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" class="services">
            <div class="container">
              <div class="section-title">
                <h2>Services</h2>
              </div>

              <div class="row">
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi fa-heartbeat"></i>
                    </div>
                    <h4>
                      <a
                        href="https://healthifer-multimed.netlify.app/"
                        target="_blank"
                      >
                        Arogya Pro
                      </a>
                    </h4>
                    <p>
                      Multi-disease prediction, analysis and pathological
                      laboratory services{" "}
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-chart-area"></i>
                    </div>
                    <h4>
                      <a
                        href="https://healthyments.streamlit.app/"
                        target="_blank"
                      >
                        Medisentiments
                      </a>
                    </h4>
                    <p>
                      Dedicated medical sentiment analysis from Twitter posts.
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-hospital-user"></i>
                    </div>
                    <h4>
                      <a href="https://www.who.int/" target="_blank">
                        Medical Awareness
                      </a>
                    </h4>
                    <p>
                      A WHO (World Health Organization) powered awareness and
                      information website.
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-hospital"></i>
                    </div>
                    <h4>
                      <a
                        href="http://localhost/HMS/services.html"
                        target="_blank"
                      >
                        Hospital Management
                      </a>
                    </h4>
                    <p>
                      Dedicated, efficient and lightweight hospital services
                      portal for clients.
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-syringe"></i>
                    </div>
                    <h4>
                      <a href="http://127.0.0.1:8000/" target="_blank">
                        Blood Bank
                      </a>
                    </h4>
                    <p>
                      In house provisions for blood donation and blood reception
                      from blodd bank.
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-dna"></i>
                    </div>
                    <h4>
                      <a
                        href="https://insure-health.netlify.app/"
                        target="_blank"
                      >
                        Insurance Manager
                      </a>
                    </h4>
                    <p>
                      Predict insurance premiums and manage insurance portfolios
                      with secure Blockchain.
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-egg"></i>
                    </div>
                    <h4>
                      <a
                        href="http://localhost/odlms/login.php"
                        target="_blank"
                      >
                        Pathological Labs
                      </a>
                    </h4>
                    <p>
                      AI based healthy diet recommendation system for patients
                      who need special diet care.
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-peace"></i>
                    </div>
                    <h4>
                      <a href="https://yogasmart.netlify.app/" target="_blank">
                        Yogafit
                      </a>
                    </h4>
                    <p>
                      Healthiness application that teaches and trains people to
                      practice Yoga in a proper way.
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-pills"></i>
                    </div>
                    <h4>
                      <a
                        href="https://www.google.com/maps/search/nearest+pharmacy+to+me/@12.8117892,80.0335595,14z/data=!3m1!4b1"
                        target="_blank"
                      >
                        Pharmacy Friend
                      </a>
                    </h4>
                    <p>
                      Complete Pharmacy management system for better delivery of
                      drugs and maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" class="services">
            <div class="container">
              <div class="section-title">
                <h2>Doctors</h2>
              </div>

              <div class="row">
                {listDentist.map((dentist: Dentist, idx: number) => (
                  <div class="col-lg-4 col-md-6 d-flex align-items-stretch my-2">
                    <div class="icon-box">
                      <div class="icon">
                        <i class="bi bi-person-circle"></i>
                      </div>
                      <h4>
                        <a
                          href="https://healthifer-multimed.netlify.app/"
                          target="_blank"
                        >
                          {dentist.HOTEN}
                        </a>
                      </h4>
                      <div class="p-6">
                        <p class="fw-bold">
                          Contact Information
                        </p>
                        <p class="text-gray-500 dark:text-gray-400">{dentist.MANS}</p>
                        <p class="text-gray-500 dark:text-gray-400">{dentist.DIENTHOAI}</p>
                      </div>
                      <AddAppointmentByDentist
                        idDentist={dentist.MANS}
                        nameOfDentist={dentist.HOTEN}
                        idx={idx}
                      />
                      <div class="p-6"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="container"></div>
          </section>

          <section id="gallery" class="gallery">
            <div class="container">
              <div class="section-title">
                <h2>Gallery</h2>
              </div>
            </div>

            <div class="container-fluid">
              <div class="row g-0">
                <div class="col-lg-3 col-md-4">
                  <div class="gallery-item">
                    <a
                      href="/img/gallery/gallery-1.jpg"
                      class="galelry-lightbox"
                    >
                      <img
                        src="/img/gallery/gallery-1.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-4">
                  <div class="gallery-item">
                    <a
                      href="/img/gallery/gallery-2.jpg"
                      class="galelry-lightbox"
                    >
                      <img
                        src="/img/gallery/gallery-2.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-4">
                  <div class="gallery-item">
                    <a
                      href="/img/gallery/gallery-3.jpg"
                      class="galelry-lightbox"
                    >
                      <img
                        src="/img/gallery/gallery-3.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-4">
                  <div class="gallery-item">
                    <a
                      href="/img/gallery/gallery-4.jpg"
                      class="galelry-lightbox"
                    >
                      <img
                        src="/img/gallery/gallery-4.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-4">
                  <div class="gallery-item">
                    <a
                      href="/img/gallery/gallery-5.jpg"
                      class="galelry-lightbox"
                    >
                      <img
                        src="/img/gallery/gallery-5.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-4">
                  <div class="gallery-item">
                    <a
                      href="/img/gallery/gallery-6.jpg"
                      class="galelry-lightbox"
                    >
                      <img
                        src="/img/gallery/gallery-6.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-4">
                  <div class="gallery-item">
                    <a
                      href="/img/gallery/gallery-7.jpg"
                      class="galelry-lightbox"
                    >
                      <img
                        src="/img/gallery/gallery-7.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-4">
                  <div class="gallery-item">
                    <a
                      href="/img/gallery/gallery-8.jpg"
                      class="galelry-lightbox"
                    >
                      <img
                        src="/img/gallery/gallery-8.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" class="contact">
            <div class="container">
              <div class="section-title">
                <h2>Contact</h2>
                <p>Feel free to reach out to us in case of any discrepency.</p>
              </div>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.527127630014!2d106.67220408668625!3d10.7628354308663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1700383116273!5m2!1svi!2s"
                width="600"
                height="450"
                style="border:0; width: 100%; height: 350px;"
                // allowfullscreen=""
                // loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div class="container">
              <div class="row mt-5">
                <div class="col-lg-4">
                  <div class="info">
                    <div class="address">
                      <i class="bi bi-geo-alt"></i>
                      <h4>Location:</h4>
                      <p>
                        227 Nguyen Van Cu, Ward 4, District 5, Ho Chi Minh City{" "}
                      </p>
                    </div>

                    <div class="email">
                      <i class="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <p>ntthau0963@gmail.com</p>
                    </div>

                    <div class="phone">
                      <i class="bi bi-phone"></i>
                      <h4>Call:</h4>
                      <p>+84 779 639 805</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-8 mt-5 mt-lg-0">
                  <form
                    action="forms"
                    method="post"
                    role="form"
                    // class="php-email-form"
                  >
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div class="form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div class="form-group mt-3">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div class="text-center">
                      <button class="btn btn-primary submit-btn my-3">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* <div id="preloader"></div>
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a> */}
    </BaseHtml>
  );
};

export default HomeComponent;
