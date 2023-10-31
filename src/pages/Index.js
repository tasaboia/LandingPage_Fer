import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Logo from "../assets/logo/logo.svg";
import Perfil from "../assets/images/perfil.png";
import Atendimento from "../assets/images/atendimento.jpg";
const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="relative pb-20 overflow-hidden">
          <img
            className="absolute top-0 right-0 mt-10 mr-10"
            src="saturn-assets/images/headers/light-orange-blue-1.png"
            alt=""
          />
          <img
            className="absolute top-0 right-0 mt-64 sm:mt-80 lg:mt-64 w-2/5 animate-moveHand"
            src={Perfil}
            alt=""
          />
          <nav className="relative py-6 mb-12 md:mb-20 bg-transparent">
            <div className="container px-4 mx-auto">
              <div className="flex items-center">
                <a className="inline-block text-lg font-bold" href="/">
                  <img className="h-16" src={Logo} alt="" width="auto" />
                </a>
              </div>
            </div>
          </nav>
          <div className="relative container px-4 mx-auto">
            <div className="max-w-xl xl:max-w-4xl">
              <h1 className="font-heading text-5xl xs:text-6xl md:text-8xl xl:text-10xl font-bold text-gray-900 mb-8 sm:mb-14">
                <span>Seja gentil com sua</span>
                <span className="font-serif italic">mente</span>
              </h1>
              <div className="md:flex mb-14 max-w-xs sm:max-w-sm md:max-w-none">
                <div className="mb-6 md:mb-0 md:mr-8 pt-3">
                  <svg
                    width={84}
                    height={10}
                    viewBox="0 0 84 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z"
                      fill="#1E254C"
                    />
                  </svg>
                </div>
                <div className="max-w-md">
                  <p className="md:text-xl text-gray-900 font-semibold">
                    Texto aqui
                  </p>
                </div>
              </div>
              <a
                className="relative group inline-block w-full sm:w-auto py-4 px-6 mb-24 text-white font-semibold rounded-md bg-orange-900 overflow-hidden"
                href="#"
              >
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                <div className="relative flex items-center justify-center">
                  <span className="mr-4">Conversar</span>
                  <span>
                    <svg
                      width={8}
                      height={12}
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z"
                        fill="#FFF2EE"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
            <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-16">
                <a
                  className="mr-auto text-2xl font-medium leading-none"
                  href="#"
                >
                  <img
                    className="h-10"
                    src="saturn-assets/logos/logo-saturn-dark.svg"
                    alt=""
                    width="auto"
                  />
                </a>
                <button className="navbar-close">
                  <svg
                    className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <ul className="mb-2">
                  <li>
                    <a
                      className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                      href="#"
                    >
                      Featured
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                      href="#"
                    >
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                      href="#"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                      href="#"
                    >
                      Articles
                    </a>
                  </li>
                </ul>
                <div className="py-8 px-6 mb-6 border-t border-b border-gray-200">
                  <a
                    className="flex items-center text-sm font-semibold text-orange-900 hover:text-orange-600"
                    href="#"
                  >
                    <svg
                      width={18}
                      height={16}
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3337 6.05833C17.2811 5.9059 17.1854 5.77202 17.0582 5.67292C16.931 5.57381 16.7777 5.51374 16.617 5.5L11.8754 4.80833L9.75038 0.499999C9.68215 0.359106 9.5756 0.240284 9.44296 0.157143C9.31031 0.074003 9.15693 0.0299072 9.00039 0.0299072C8.84384 0.0299072 8.69046 0.074003 8.55781 0.157143C8.42517 0.240284 8.31862 0.359106 8.25039 0.499999L6.12539 4.8L1.38372 5.5C1.22949 5.52192 1.08449 5.58663 0.96518 5.6868C0.845868 5.78696 0.757021 5.91856 0.708721 6.06666C0.664509 6.21139 0.660541 6.36543 0.697245 6.51224C0.733948 6.65905 0.809936 6.7931 0.917055 6.9L4.35872 10.2333L3.52539 14.9667C3.49564 15.1229 3.51121 15.2844 3.57028 15.432C3.62935 15.5797 3.72943 15.7074 3.85872 15.8C3.98474 15.8901 4.13337 15.9433 4.28793 15.9536C4.44249 15.9639 4.59686 15.9309 4.73372 15.8583L9.00039 13.6333L13.2504 15.8667C13.3673 15.9326 13.4994 15.9671 13.6337 15.9667C13.8102 15.9673 13.9824 15.9118 14.1254 15.8083C14.2547 15.7157 14.3548 15.588 14.4138 15.4404C14.4729 15.2927 14.4885 15.1312 14.4587 14.975L13.6254 10.2417L17.067 6.90833C17.1874 6.8064 17.2763 6.67242 17.3235 6.52195C17.3707 6.37149 17.3742 6.21073 17.3337 6.05833ZM12.2087 9.39166C12.111 9.48619 12.0379 9.6032 11.9957 9.73247C11.9536 9.86175 11.9438 9.99937 11.9671 10.1333L12.5671 13.625L9.43372 11.9583C9.31315 11.8941 9.17865 11.8605 9.04205 11.8605C8.90546 11.8605 8.77095 11.8941 8.65039 11.9583L5.51705 13.625L6.11705 10.1333C6.14033 9.99937 6.13048 9.86175 6.08836 9.73247C6.04623 9.6032 5.97312 9.48619 5.87539 9.39166L3.37539 6.89166L6.88372 6.38333C7.01872 6.36455 7.14705 6.31295 7.25747 6.23304C7.36789 6.15313 7.45702 6.04736 7.51705 5.925L9.00039 2.75L10.5671 5.93333C10.6271 6.0557 10.7162 6.16147 10.8266 6.24137C10.9371 6.32128 11.0654 6.37289 11.2004 6.39166L14.7087 6.9L12.2087 9.39166Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="ml-3">Upgrade to Premium</span>
                  </a>
                </div>
                <div className="flex px-6 mb-16 items-center">
                  <a
                    className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900"
                    href="#"
                  >
                    Sign In
                  </a>
                  <a
                    className="inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-300 hover:border-orange-600 hover:bg-orange-900 rounded-md transition duration-200"
                    href="#"
                  >
                    Create an account
                  </a>
                </div>
                <div>
                  <div className="flex w-20 h-20 mb-6 items-center justify-center bg-orange-50 rounded-full">
                    <svg
                      width={29}
                      height={28}
                      viewBox="0 0 29 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.3333 16.6667C24.9797 16.6667 24.6406 16.8072 24.3905 17.0572C24.1405 17.3073 24 17.6464 24 18V23.3334C24 23.687 23.8595 24.0261 23.6095 24.2762C23.3594 24.5262 23.0203 24.6667 22.6667 24.6667H4C3.64638 24.6667 3.30724 24.5262 3.05719 24.2762C2.80714 24.0261 2.66667 23.687 2.66667 23.3334V10.5467L10.5067 18.4C11.2567 19.1491 12.2733 19.5698 13.3333 19.5698C14.3933 19.5698 15.41 19.1491 16.16 18.4L18.3467 16.2134C18.5977 15.9623 18.7388 15.6218 18.7388 15.2667C18.7388 14.9116 18.5977 14.5711 18.3467 14.32C18.0956 14.069 17.7551 13.9279 17.4 13.9279C17.0449 13.9279 16.7044 14.069 16.4533 14.32L14.2667 16.5067C14.0174 16.751 13.6823 16.8878 13.3333 16.8878C12.9843 16.8878 12.6492 16.751 12.4 16.5067L4.54667 8.66669H13.3333C13.687 8.66669 14.0261 8.52622 14.2761 8.27617C14.5262 8.02612 14.6667 7.68698 14.6667 7.33336C14.6667 6.97974 14.5262 6.6406 14.2761 6.39055C14.0261 6.1405 13.687 6.00002 13.3333 6.00002H4C2.93913 6.00002 1.92172 6.42145 1.17157 7.1716C0.421427 7.92174 0 8.93916 0 10V23.3334C0 24.3942 0.421427 25.4116 1.17157 26.1618C1.92172 26.9119 2.93913 27.3334 4 27.3334H22.6667C23.7275 27.3334 24.7449 26.9119 25.4951 26.1618C26.2452 25.4116 26.6667 24.3942 26.6667 23.3334V18C26.6667 17.6464 26.5262 17.3073 26.2761 17.0572C26.0261 16.8072 25.687 16.6667 25.3333 16.6667ZM27.6133 5.05336L23.6133 1.05336C23.4865 0.93197 23.337 0.836817 23.1733 0.773358C22.8487 0.64 22.4846 0.64 22.16 0.773358C21.9963 0.836817 21.8468 0.93197 21.72 1.05336L17.72 5.05336C17.4689 5.30443 17.3279 5.64496 17.3279 6.00002C17.3279 6.35509 17.4689 6.69562 17.72 6.94669C17.9711 7.19776 18.3116 7.33881 18.6667 7.33881C19.0217 7.33881 19.3623 7.19776 19.6133 6.94669L21.3333 5.21336V12.6667C21.3333 13.0203 21.4738 13.3595 21.7239 13.6095C21.9739 13.8595 22.313 14 22.6667 14C23.0203 14 23.3594 13.8595 23.6095 13.6095C23.8595 13.3595 24 13.0203 24 12.6667V5.21336L25.72 6.94669C25.844 7.07166 25.9914 7.17086 26.1539 7.23855C26.3164 7.30624 26.4907 7.34109 26.6667 7.34109C26.8427 7.34109 27.017 7.30624 27.1794 7.23855C27.3419 7.17086 27.4894 7.07166 27.6133 6.94669C27.7383 6.82274 27.8375 6.67527 27.9052 6.51279C27.9729 6.35032 28.0077 6.17604 28.0077 6.00002C28.0077 5.82401 27.9729 5.64973 27.9052 5.48726C27.8375 5.32478 27.7383 5.17731 27.6133 5.05336Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <span className="block mb-3 text-sm text-gray-500">
                    Drop us a line
                  </span>
                  <a className="font-semibold text-black" href="#">
                    hello@shuffle.dev
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <img
            className="absolute top-0 left-0"
            src="saturn-assets/images/testimonials/blue-light.png"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0"
            src="saturn-assets/images/testimonials/orange-light.png"
            alt=""
          />
          <div className="relative container px-4 mx-auto">
            <div className="max-w-lg lg:max-w-7xl mx-auto">
              <div className="flex flex-wrap -mx-4 mb-18 items-center">
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="max-w-md xl:max-w-xl">
                    <h1 className="font-heading text-4xl xs:text-6xl font-bold text-gray-900">
                      <span>Fernanda</span>
                      <span className="font-serif italic">Scauri</span>
                      {/* <span>clients says about us</span> */}
                    </h1>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-md lg:ml-auto">
                    <p className="text-gray-500">
                      TEXTO AQUI, <br />
                      um pouco sobre voce
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4 items-center">
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="lg:max-w-md xl:max-w-lg">
                    <img className="block w-full" src={Perfil} alt="" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <span>texto sobre voce</span>

                  <div className="max-w-lg">
                    <img
                      className="block mb-8"
                      src="saturn-assets/images/testimonials/quote.svg"
                      alt=""
                    />
                    <p className="text-2xl font-semibold text-gray-900 mb-5">
                      “UMA FRASE QUE VOCE GOSTE E TE DEFINE”
                    </p>
                    <span className="block text-gray-900 font-semibold mb-1">
                      — AUTOR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-20 pb-24 md:pb-20 lg:pt-32 overflow-hidden">
          <img
            className="absolute bottom-0 left-0"
            src="saturn-assets/images/features/start-left-bottom.png"
            alt=""
          />
          <img
            className="absolute bottom-1/2 right-0 transform translate-y-1/2"
            src="saturn-assets/images/features/blue-light-right.png"
            alt=""
          />
          <div className="relative container px-4 mx-auto">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center -mx-4 mb-24">
                <div className="w-full lg:w-2/3 px-4 mb-16 lg:mb-0">
                  <div className="max-w-lg lg:max-w-2xl mx-auto lg:mx-0">
                    <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-8">
                      <span>Atendimento</span>
                      <span className="font-serif italic">
                        <br />
                        online
                      </span>
                    </h1>
                    <p className="max-w-xl text-2xl md:text-3xl font-semibold text-gray-400">
                      como funciona o atendimento online
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4">
                  <img
                    className="w-full max-w-lg mx-auto lg:mr-0"
                    src={Atendimento}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0 lg:border-r border-gray-100">
                  <div className="max-w-xs mx-auto pb-10 lg:pb-5 text-center border-b border-gray-100 lg:border-b-0">
                    <div className="flex mx-auto mb-5 items-center justify-center w-15 h-15 rounded-full bg-green-200">
                      <img
                        src="saturn-assets/images/features/icon-mouse.svg"
                        alt=""
                      />
                    </div>
                    <h4 className="text-2xl text-gray-900 font-semibold">
                      ponto positivo 1
                    </h4>
                    <p className="text-gray-500">pequena descricao</p>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0 lg:border-r border-gray-100">
                  <div className="max-w-xs mx-auto pb-10 lg:pb-5 text-center border-b border-gray-100 lg:border-b-0">
                    <div className="flex mx-auto mb-5 items-center justify-center w-15 h-15 rounded-full bg-orange-300">
                      <img
                        src="saturn-assets/images/features/icon-point.svg"
                        alt=""
                      />
                    </div>
                    <h4 className="text-2xl text-gray-900 font-semibold">
                      ponto positivo 2
                    </h4>
                    <p className="text-gray-500">leve descricao</p>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4 lg:pb-5">
                  <div className="max-w-xs mx-auto text-center">
                    <div className="flex mx-auto mb-5 items-center justify-center w-15 h-15 rounded-full bg-purple-300">
                      <img
                        src="saturn-assets/images/features/icon-plane.svg"
                        alt=""
                      />
                    </div>
                    <h4 className="text-2xl text-gray-900 font-semibold">
                      ponto positivo 3
                    </h4>
                    <p className="text-gray-500">leve descricao</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20 overflow-hidden bg-gray-50">
          <img
            className="absolute top-0 left-0 mt-44"
            src="saturn-assets/images/faq/light-blue-left.png"
            alt=""
          />
          <img
            className="absolute top-0 right-0 mt-10"
            src="saturn-assets/images/faq/star-right.svg"
            alt=""
          />
          <div className="relative container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-24">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                  como posso te ajudar
                </span>
                <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900">
                  <span>Duvidas frequentes de</span>
                  <span className="font-serif italic">pacientes</span>
                </h1>
              </div>
              <div className="pt-18 sm:pt-24 px-8 sm:px-20 pb-18 bg-white rounded-4xl shadow-lg">
                <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
                  <div className="max-w-xl pr-5">
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">
                      duvida 1
                    </h3>
                    <p className="text-lg text-gray-500">resposta</p>
                  </div>
                  <div className="pt-1">
                    <span>
                      <svg
                        width={17}
                        height={3}
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                          fill="#FF460C"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
                <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
                  <div className="max-w-xl pr-5">
                    <h3 className="text-xl font-semibold text-black group-hover:text-orange-900">
                      duvida 2
                    </h3>
                    <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                      resposta
                    </p>
                  </div>
                  <div className="pt-1">
                    <span className="hidden group-hover:block">
                      <svg
                        width={17}
                        height={3}
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                          fill="#FF460C"
                        />
                      </svg>
                    </span>
                    <span className="block group-hover:hidden">
                      <svg
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
                <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
                  <div className="max-w-xl pr-5">
                    <h3 className="text-xl font-semibold text-black group-hover:text-orange-900">
                      duvida 3
                    </h3>
                    <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                      resposta
                    </p>
                  </div>
                  <div className="pt-1">
                    <span className="hidden group-hover:block">
                      <svg
                        width={17}
                        height={3}
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                          fill="#FF460C"
                        />
                      </svg>
                    </span>
                    <span className="block group-hover:hidden">
                      <svg
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
                <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
                  <div className="max-w-xl pr-5">
                    <h3 className="text-xl font-semibold text-black group-hover:text-orange-900">
                      duvida 4
                    </h3>
                    <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                      resposta
                    </p>
                  </div>
                  <div className="pt-1">
                    <span className="hidden group-hover:block">
                      <svg
                        width={17}
                        height={3}
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                          fill="#FF460C"
                        />
                      </svg>
                    </span>
                    <span className="block group-hover:hidden">
                      <svg
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
                <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
                  <div className="max-w-xl pr-5">
                    <h3 className="text-xl font-semibold text-black group-hover:text-orange-900">
                      duvida 5
                    </h3>
                    <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                      resposta
                    </p>
                  </div>
                  <div className="pt-1">
                    <span className="hidden group-hover:block">
                      <svg
                        width={17}
                        height={3}
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                          fill="#FF460C"
                        />
                      </svg>
                    </span>
                    <span className="block group-hover:hidden">
                      <svg
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
                <button className="flex group w-full items-start justify-between text-left">
                  <div className="max-w-xl pr-5">
                    <h3 className="text-xl font-semibold text-black group-hover:text-orange-900">
                      duvida 4
                    </h3>
                    <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                      resposta
                    </p>
                  </div>
                  <div className="pt-1">
                    <span className="hidden group-hover:block">
                      <svg
                        width={17}
                        height={3}
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                          fill="#FF460C"
                        />
                      </svg>
                    </span>
                    <span className="block group-hover:hidden">
                      <svg
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="relative py-20 md:py-32 overflow-hidden">
          <img
            class="absolute top-0 left-0 md:mt-24"
            src="saturn-assets/images/contact/dots-side-1.svg"
            alt=""
          />
          <img
            class="absolute bottom-0 right-0 mb-8 lg:mb-24"
            src="saturn-assets/images/contact/dots-side-2.svg"
            alt=""
          />
          <div class="relative container px-4 mx-auto">
            <div class="max-w-2xl mx-auto mb-18 text-center">
              <span class="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                Contato
              </span>
              <h1 class="font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4">
                <span>Conversar via</span>
                <span class="font-serif italic">WhatsApp</span>
                <span>?</span>
              </h1>
              <p class="text-xl text-gray-500 font-semibold">
                Apenas a uma mensagem de distância.
              </p>
            </div>
            <div class="flex flex-wrap justify-center -mx-4">
              <div class="w-full md:w-1/2 lg:w-auto px-4 xl:px-10">
                <div class="max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl">
                  <div class="max-w-2xs mx-auto text-center">
                    <img
                      class="block mx-auto mb-3"
                      src="saturn-assets/images/contact/icon-orange-headphones.svg"
                      alt=""
                    />
                    <h5 class="text-2xl font-bold text-gray-900 mb-3">
                      Entrar em contato
                    </h5>
                    <p class="text-gray-500 mb-3">entre em contato</p>

                    <a
                      class="relative group inline-block py-4 px-6 text-white font-semibold bg-orange-900 rounded-full overflow-hidden"
                      href="#"
                    >
                      <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <div class="relative flex items-center justify-center">
                        <span class="mr-4">WhatsApp</span>
                        <span>
                          <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.94 11C17.72 11 17.49 10.93 17.27 10.88C16.8245 10.7818 16.3867 10.6515 15.96 10.49C15.4961 10.3212 14.9861 10.33 14.5283 10.5146C14.0705 10.6992 13.6971 11.0466 13.48 11.49L13.26 11.94C12.286 11.3982 11.391 10.7252 10.6 9.93999C9.81476 9.14901 9.14182 8.25399 8.59999 7.27999L9.01999 6.99999C9.46336 6.78291 9.81078 6.40952 9.99539 5.95168C10.18 5.49384 10.1888 4.9839 10.02 4.51999C9.86122 4.09241 9.73093 3.65479 9.62999 3.20999C9.57999 2.98999 9.53999 2.75999 9.50999 2.52999C9.38856 1.82561 9.01962 1.18773 8.46962 0.731229C7.91961 0.274727 7.22469 0.029599 6.50999 0.0399902H3.50999C3.07903 0.0359436 2.65224 0.124804 2.2587 0.300521C1.86516 0.476238 1.5141 0.734686 1.22942 1.05827C0.944745 1.38186 0.733129 1.76298 0.608982 2.1757C0.484835 2.58842 0.451073 3.02305 0.509994 3.44999C1.04273 7.63937 2.95602 11.5319 5.94765 14.5126C8.93927 17.4934 12.8387 19.3925 17.03 19.91H17.41C18.1474 19.9111 18.8594 19.6405 19.41 19.15C19.7264 18.867 19.9791 18.5202 20.1515 18.1323C20.3238 17.7444 20.412 17.3244 20.41 16.9V13.9C20.3977 13.2054 20.1448 12.5365 19.6943 12.0077C19.2439 11.4788 18.6238 11.1226 17.94 11V11ZM18.44 17C18.4398 17.142 18.4094 17.2823 18.3508 17.4116C18.2922 17.5409 18.2067 17.6563 18.1 17.75C17.9904 17.8498 17.86 17.9241 17.7181 17.9673C17.5763 18.0106 17.4267 18.0217 17.28 18C13.5349 17.5198 10.0562 15.8065 7.39271 13.1303C4.72919 10.4541 3.0324 6.96733 2.56999 3.21999C2.55408 3.07351 2.56803 2.92532 2.611 2.78438C2.65397 2.64344 2.72506 2.51268 2.81999 2.39999C2.9137 2.29332 3.02906 2.20783 3.15837 2.14921C3.28769 2.09058 3.42801 2.06017 3.56999 2.05999H6.56999C6.80254 2.05482 7.02962 2.13087 7.21214 2.27506C7.39466 2.41925 7.5212 2.62256 7.56999 2.84999C7.60999 3.12332 7.65999 3.39332 7.71999 3.65999C7.83551 4.18713 7.98925 4.70517 8.17999 5.20999L6.77999 5.85999C6.66029 5.91491 6.55262 5.99294 6.46315 6.08959C6.37369 6.18624 6.30419 6.2996 6.25867 6.42318C6.21314 6.54677 6.19247 6.67812 6.19784 6.80971C6.20322 6.9413 6.23453 7.07054 6.28999 7.18999C7.72919 10.2727 10.2072 12.7508 13.29 14.19C13.5335 14.29 13.8065 14.29 14.05 14.19C14.1747 14.1454 14.2893 14.0764 14.3872 13.9872C14.485 13.8979 14.5642 13.7901 14.62 13.67L15.24 12.27C15.757 12.4549 16.2846 12.6085 16.82 12.73C17.0867 12.79 17.3567 12.84 17.63 12.88C17.8574 12.9288 18.0607 13.0553 18.2049 13.2378C18.3491 13.4204 18.4252 13.6474 18.42 13.88L18.44 17ZM17.5 7.99999C17.7652 7.99999 18.0196 7.89463 18.2071 7.7071C18.3946 7.51956 18.5 7.26521 18.5 6.99999V2.99999C18.5 2.73477 18.3946 2.48042 18.2071 2.29288C18.0196 2.10535 17.7652 1.99999 17.5 1.99999C17.2348 1.99999 16.9804 2.10535 16.7929 2.29288C16.6054 2.48042 16.5 2.73477 16.5 2.99999V6.99999C16.5 7.26521 16.6054 7.51956 16.7929 7.7071C16.9804 7.89463 17.2348 7.99999 17.5 7.99999ZM13.5 7.99999C13.7652 7.99999 14.0196 7.89463 14.2071 7.7071C14.3946 7.51956 14.5 7.26521 14.5 6.99999V2.99999C14.5 2.73477 14.3946 2.48042 14.2071 2.29288C14.0196 2.10535 13.7652 1.99999 13.5 1.99999C13.2348 1.99999 12.9804 2.10535 12.7929 2.29288C12.6054 2.48042 12.5 2.73477 12.5 2.99999V6.99999C12.5 7.26521 12.6054 7.51956 12.7929 7.7071C12.9804 7.89463 13.2348 7.99999 13.5 7.99999Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20 overflow-hidden">
          <img
            className="absolute top-0 left-0"
            src="saturn-assets/images/footers/blue-light-left.png"
            alt=""
          />
          <img
            className="absolute bottom-0 left-1/2"
            src="saturn-assets/images/footers/orange-light-bottom.png"
            alt=""
          />
          <div className="relative container px-4 mx-auto">
            <div className="max-w-7xl mx-auto">
              <div className="pb-8 mb-15 border-b border-gray-100 text-center">
                <a className="inline-block" href="#">
                  <img className="h-15" src={Logo} alt="" />
                </a>
              </div>

              <div className="mt-15 text-center">
                <span className="text-gray-500">
                  © 2023 Orange Joy. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
