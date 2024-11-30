import React from "react";

const TermsConditions = () => {
  return (
    <>
      <div class="text-gray-200 font-sans">
        <div class="max-w-4xl mx-auto p-6 rounded-lg shadow-lg mt-10">
          <h1 class="text-3xl font-bold text-gray-100 mb-4">
            Conditions Générales d'Utilisation
          </h1>
          <p class="text-sm text-gray-400 mb-6">
            {/* Dernière mise à jour : <span class="font-semibold">11/2024</span> */}
          </p>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              1. Introduction
            </h2>
            <p class="text-gray-300 leading-relaxed">
              En utilisant notre application web dédiée à la découverte de films
              et de séries TV, vous acceptez les présentes Conditions Générales
              d'Utilisation (CGU). Veuillez les lire attentivement avant
              d'utiliser nos services.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              2. Accès au service
            </h2>
            <p class="text-gray-300 leading-relaxed">
              Notre application est disponible pour tous les utilisateurs
              disposant d'une connexion Internet. Nous nous réservons le droit
              de limiter ou de suspendre l'accès au service pour des raisons de
              maintenance, mise à jour, ou en cas de non-respect des présentes
              CGU.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              3. Propriété intellectuelle
            </h2>
            <p class="text-gray-300 leading-relaxed">
              Tout le contenu de l'application, y compris les textes,
              graphiques, logos, et images, est protégé par les lois sur la
              propriété intellectuelle. Toute reproduction, modification ou
              distribution sans autorisation est strictement interdite.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              4. Utilisation acceptable
            </h2>
            <p class="text-gray-300 leading-relaxed">
              Vous vous engagez à utiliser notre application uniquement à des
              fins personnelles et non commerciales. Toute utilisation abusive,
              comme l'accès non autorisé, la modification des fonctionnalités,
              ou le téléchargement illégal de contenu, est strictement
              interdite.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              5. Limitation de responsabilité
            </h2>
            <p class="text-gray-300 leading-relaxed">
              Bien que nous nous efforcions de fournir un service fiable, nous
              ne pouvons garantir l'exactitude ou la disponibilité continue des
              données fournies. Nous ne serons pas tenus responsables des
              dommages directs ou indirects résultant de l'utilisation de
              l'application.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              6. Modification des CGU
            </h2>
            <p class="text-gray-300 leading-relaxed">
              Nous nous réservons le droit de modifier ces CGU à tout moment.
              Les modifications seront publiées ici et prendront effet
              immédiatement. Nous vous invitons à consulter régulièrement cette
              page.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              7. Contact
            </h2>
            <p class="text-gray-300 leading-relaxed">
              Pour toute question ou préoccupation concernant ces CGU, veuillez
              nous contacter à{" "}
              <a
                href="mailto:mzilinassim@gmail.com"
                class="text-blue-500 underline"
              >
                mzilinassim@gmail.com
              </a>
              .
            </p>
          </section>

          <p class="text-sm text-gray-500 mt-8">
            En continuant à utiliser notre application, vous reconnaissez avoir
            lu, compris et accepté ces Conditions Générales d'Utilisation.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
