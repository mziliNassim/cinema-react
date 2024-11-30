import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div class="text-gray-200 font-sans">
        <div class="max-w-4xl mx-auto p-6 text-white rounded-lg shadow-lg mt-10">
          <h1 class="text-3xl font-bold text-gray-100 mb-4">
            Politique de Confidentialité
          </h1>
          <p class="text-sm text-gray-400 mb-6">
            {/* Dernière mise à jour : <span class="font-semibold">11/2024</span> */}
          </p>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              1. Collecte des informations
            </h2>
            <p class="text-gray-300 leading-relaxed">
              Nous collectons certaines données nécessaires pour vous offrir une
              expérience optimale :
            </p>
            <ul class="list-disc ml-6 mt-3 text-gray-300">
              <li>
                <span class="font-medium">Données non personnelles :</span>{" "}
                informations sur votre appareil, type de navigateur, langue, et
                préférences d'utilisation.
              </li>
              <li>
                <span class="font-medium">Données personnelles :</span> si vous
                créez un compte, nous collectons votre adresse e-mail, votre nom
                d'utilisateur et toute autre information que vous fournissez
                volontairement.
              </li>
            </ul>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              2. Utilisation des informations
            </h2>
            <ul class="list-disc ml-6 mt-3 text-gray-300">
              <li>Fournir une navigation fluide et personnalisée.</li>
              <li>Améliorer nos services et fonctionnalités.</li>
              <li>Vous informer des nouveautés ou mises à jour.</li>
            </ul>
            <p class="text-gray-300 mt-3">
              Nous ne vendons ni ne louons vos données à des tiers.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              3. Partage des données
            </h2>
            <p class="text-gray-300 leading-relaxed">
              Vos données peuvent être partagées avec :
            </p>
            <ul class="list-disc ml-6 mt-3 text-gray-300">
              <li>
                Nos partenaires techniques pour assurer la maintenance et
                l'amélioration de l'application.
              </li>
              <li>Des autorités légales si la loi l'exige.</li>
            </ul>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              4. Cookies et technologies similaires
            </h2>
            <p class="text-gray-300 leading-relaxed">
              Nous utilisons des cookies pour :
            </p>
            <ul class="list-disc ml-6 mt-3 text-gray-300">
              <li>Analyser l'utilisation de l'application.</li>
              <li>Se souvenir de vos préférences.</li>
            </ul>
            <p class="text-gray-300 mt-3">
              Vous pouvez gérer vos préférences ou désactiver les cookies via
              les paramètres de votre navigateur.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              5. Sécurité des données
            </h2>
            <p class="text-gray-300 leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité techniques et
              organisationnelles pour protéger vos informations contre tout
              accès non autorisé, perte ou modification.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              6. Vos droits
            </h2>
            <ul class="list-disc ml-6 mt-3 text-gray-300">
              <li>Accès à vos informations.</li>
              <li>Modification ou suppression de vos données.</li>
              <li>
                Opposition à leur utilisation pour des finalités spécifiques.
              </li>
            </ul>
            <p class="text-gray-300 mt-3">
              Pour exercer ces droits, veuillez nous contacter à{" "}
              <a
                href="mailto:mzilinassim@gmail.com"
                class="text-blue-500 underline"
              >
                mzilinassim@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-200 mb-2">
              7. Modifications de cette politique
            </h2>
            <p class="text-gray-300 leading-relaxed">
              Nous pouvons mettre à jour cette Politique de confidentialité pour
              refléter des changements dans nos pratiques ou pour des raisons
              légales. Toute modification sera publiée ici et datée.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
