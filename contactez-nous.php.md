---
layout: default
title: Contact
---
<main id="contact">
  <section class="container mt-4 mt-sm-5 pt-5 pb-4 pb-sm-5">
    <!-- <div class="mt-5 mb-4"> -->
      <!-- <h1 class="font-weight-normal"> -->
        <!-- <strong style="color: #64686c;">Contactez-nous</strong> -->
      <!-- </h1> -->
    <!-- </div> -->
    <div class="row mt-5">
      <div class="col-lg-5 mb-lg-0 mb-4" data-aos="fade-up">
        <div class="card">
          <div class="card-body">
            <p class="dark-grey-text">
              Laissez votre numéro, nous vous rappelons dans les plus brefs délais.
            </p>
            <form action="https://formspree.io/contact@bookmania.ma" method="POST" class="validation">
              <input type="hidden" name="_cc" value="Mamoun.elhonsali@bookmania.ma,Fatimazahra.birzyne@bookmania.ma">
              <input type="hidden" name="_language" value="fr" />
              <input type="hidden" name="_next" value="{{site.baseurl}}/merci.php"/>
              <div class="md-form">
                <i class="fas fa-user prefix grey-text"></i>
                <input type="text" id="form-name" name="Nom" class="form-control">
                <label for="form-name">Nom complet</label>
              </div>
              <div class="md-form">
                <i class="fas fa-envelope prefix grey-text"></i>
                <input type="email" id="form-email" name="Email" class="form-control">
                <label for="form-email">Email</label>
              </div>
              <div class="md-form">
                <i class="fas fa-phone prefix grey-text"></i>
                <input type="tel" id="form-Subject" name="Téléphone" class="form-control">
                <label for="form-Subject">N° de téléphone</label>
              </div>
              <div class="md-form">
                <i class="fas fa-pencil-alt prefix grey-text"></i>
                <textarea type="text" id="form-text" name="Message" class="form-control md-textarea"></textarea>
                <label for="form-text">Message (facultatif)</label>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-light-blue">
                  ENVOYER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-7" data-aos="fade-up">
        <div id="map-container-section" class="z-depth-1-half map-container-section mb-4" style="height: 400px">
          <iframe src="https://maps.google.com/maps?q=51, avenue Hassan Souktani, Quartier Gautier, 20060, Casablanca Maroc&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
            style="border:0" allowfullscreen></iframe>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <i class="fas fa-map-marker-alt text-muted"></i>
            <p>
              <a target="_blank" href="https://goo.gl/maps/qExbRXBoUtz">
                51, avenue Hassan Souktani, Quartier Gautier, 20060, Casablanca Maroc
              </a>
            </p>
          </div>
          <div class="col-md-4">
            <i class="fas fa-envelope text-muted"></i>
            <p>
              <a href="mailto:contact@bookmania.ma">
                contact@bookmania.ma
              </a>
            </p>
          </div>
          <div class="col-md-4">
            <i class="fas fa-phone text-muted"></i>
            <p>
              <a href="tel:+2120522225062">
                (+212) 05 22 22 50 62
              </a>
            </p>
            <p>
              Whatsapp:<br>
              <a target="_blank" href="https://wa.me/+2120606060101">
                (+212) 06 06 06 01 01
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
