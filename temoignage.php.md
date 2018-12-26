---
layout: default
title: Témoignages Bookmania
---
<main id="temoignage">

  <section class="mt-4 mt-sm-5 pt-5">
    <div class="container">

      <div class="mt-4 mb-4">
        <h1 class="font-weight-normal">
          <strong>Elèves</strong>
        </h1>
      </div>

      <!-- <div id="carousel-eleves" class="carousel slide d-none d-xl-block" data-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item mb-2 active">
            <div class="row d-flex text-center">
              {% assign eleves = site.data.eleves | slice: 0, 3 %}
              {% for eleve in eleves %}
              <div class="col-12 col-lg-4">
                <figure class="snip1533">
                  <figcaption>
                    <blockquote>
                      <h6 class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </h6>
                      <p>
                        {{ eleve.text }}
                      </p>
                    </blockquote>
                    <h3>{{ eleve.name }}</h3>
                  </figcaption>
                </figure>
              </div>
              {% endfor %}
            </div>
          </div>

          {% assign amount_eleves = 3 %}
          {% for i in (1..7) %}
          <div class="carousel-item mb-2">
            <div class="row d-flex text-center">
              {% assign eleves = site.data.eleves | slice: amount_eleves, 3 %}
              {% for eleve in eleves %}
              <div class="col-12 col-lg-4">
                <figure class="snip1533">
                  <figcaption>
                    <blockquote>
                      <h6 class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </h6>
                      <p>
                        {{ eleve.text }}
                      </p>
                    </blockquote>
                    <h3>{{ eleve.name }}</h3>
                  </figcaption>
                </figure>
              </div>
              {% endfor %}
              {% assign amount_eleves = amount_eleves | plus: 3 %}
            </div>
          </div>
          {% endfor %}

        </div>
        <a class="carousel-control-prev" href="#carousel-eleves" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-eleves" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> -->

      <!-- <div class="row d-xl-none"> -->
      <div class="row">
        <div class="col-12 owl">
          <div id="customers-testimonials" class="owl-carousel">
            {% for eleve in site.data.eleves %}
            <div class="item">
              <div class="shadow-effect">
                <h6 class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </h6>
                <p>{{ eleve.text }}</p>
              </div>
              <div class="testimonial-name">{{ eleve.name }}</div>
            </div>
            {% endfor %}
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="blue-grey lighten-5 mt-5 pb-5">
    <div class="container">

      <div class="pt-4 pt-sm-5 mb-4">
        <h1 class="font-weight-normal">
          <strong>Parents d'élèves</strong>
        </h1>
      </div>

      <!-- <div id="carousel-parents" class="container carousel slide d-none d-xl-block" data-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item mb-2 active">
            <div class="row d-flex text-center">
              {% assign parents = site.data.parents | slice: 0, 3 %}
              {% for parent in parents %}
              <div class="col-12 col-lg-4">
                <figure class="snip1533">
                  <figcaption>
                    <blockquote>
                      <h6 class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </h6>
                      <p>
                        {{ parent.text }}
                      </p>
                    </blockquote>
                    <h3>{{ parent.name }}</h3>
                  </figcaption>
                </figure>
              </div>
              {% endfor %}
            </div>
          </div>

          {% assign amount_parents = 3 %}
          {% for i in (1..2) %}
          <div class="carousel-item mb-2">
            <div class="row d-flex text-center">
              {% assign eleves = site.data.parents | slice: amount_parents, 3 %}
              {% for eleve in eleves %}
              <div class="col-12 col-lg-4">
                <figure class="snip1533">
                  <figcaption>
                    <blockquote>
                      <h6 class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </h6>
                      <p>
                        {{ eleve.text }}
                      </p>
                    </blockquote>
                    <h3>{{ eleve.name }}</h3>
                  </figcaption>
                </figure>
              </div>
              {% endfor %}
              {% assign amount_parents = amount_parents | plus: 3 %}
            </div>
          </div>
          {% endfor %}

        </div>
        <a class="carousel-control-prev" href="#carousel-parents" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-parents" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> -->

      <!-- <div class="row d-xl-none"> -->
      <div class="row">
        <div class="col-12 owl">
          <div id="customers-testimonials" class="owl-carousel">
            {% for parent in site.data.parents %}
            <div class="item">
              <div class="shadow-effect">
                <h6 class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </h6>
                <p>{{ parent.text }}</p>
              </div>
              <div class="testimonial-name">{{ parent.name }}</div>
            </div>
            {% endfor %}
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="mb-5">
    <div class="container">

      <div class="pt-4 pt-sm-5 mb-4">
        <h1 class="font-weight-normal">
          <strong>Ami(e)s</strong>
        </h1>
      </div>

      <!-- <div id="carousel-amis" class="carousel slide d-none d-xl-block" data-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item mb-2 active">
            <div class="row d-flex text-center">
              {% assign parents = site.data.eleves | slice: 0, 3 %}
              {% for parent in parents %}
              <div class="col-12 col-lg-4">
                <figure class="snip1533">
                  <figcaption>
                    <blockquote>
                      <h6 class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </h6>
                      <p>
                        {{ parent.text }}
                      </p>
                    </blockquote>
                    <h3>{{ parent.name }}</h3>
                  </figcaption>
                </figure>
              </div>
              {% endfor %}
            </div>
          </div>

          {% assign amount_amis = 3 %}
          {% for i in (1..3) %}
          <div class="carousel-item mb-2">
            <div class="row d-flex text-center">
              {% assign amis = site.data.amis | slice: amount_amis, 3 %}
              {% for ami in amis %}
              <div class="col-12 col-lg-4">
                <figure class="snip1533">
                  <figcaption>
                    <blockquote>
                      <h6 class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </h6>
                      <p>
                        {{ ami.text }}
                      </p>
                    </blockquote>
                    <h3>{{ ami.name }}</h3>
                  </figcaption>
                </figure>
              </div>
              {% endfor %}
              {% assign amount_amis = amount_amis | plus: 3 %}
            </div>
          </div>
          {% endfor %}

        </div>
        <a class="carousel-control-prev" href="#carousel-amis" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-amis" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> -->

      <!-- <div class="row d-xl-none"> -->
      <div class="row">
        <div class="col-12 owl">
          <div id="customers-testimonials" class="owl-carousel">
            {% for ami in site.data.amis %}
            <div class="item">
              <div class="shadow-effect">
                <h6 class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </h6>
                <p>{{ ami.text }}</p>
              </div>
              <div class="testimonial-name">{{ ami.name }}</div>
            </div>
            {% endfor %}
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="blue-grey lighten-5 py-5">
    <div class="container">
      <h4 class="mb-4">
        <strong class="font-weight-bold">
          Une solution sur mesure, adaptée aux besoins de chacun
        </strong>
      </h4>
      <p>
        Numéro 1 du soutien scolaire, Bookmania propose des cours particuliers et des stages collectifs dans toutes les matières afin d'aider les élèves à optimiser leurs résultats à l'école. Du primaire aux études supérieures en passant par le collège et le lycée, les enseignants Bookmania, tous spécialistes dans leur domaine, proposent des cours de soutien scolaire intensifs et sur mesure, vous donnant l'assurance de voir votre enfant faire des progrès rapidement.
      </p>
    </div>
  </section>

</main>
