import styles from "./styles/Insta.module.css";

export default function InstagramContent() {
  return (
    <div className="min-h-screen lg:w-4/5 xl:w-3/5 mx-auto mt-6 sm:mt-16 mb-2">
      <div className="flex flex-row items-center gap-4 mx-auto w-fit mb-8">
        <a href="https://www.facebook.com/Nakedzero.com.uk/" target="_blank">
          <div className="w-28 h-28 bg-transparent rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 100 100"
              viewBox="0 0 100 100"
              id="facebook"
            >
              <g>
                <path
                  fill="#1877f2"
                  d="M50,2.5c-58.892,1.725-64.898,84.363-7.46,95l0,0h0H50h7.46l0,0C114.911,86.853,108.879,4.219,50,2.5z"
                ></path>
                <path
                  fill="#f1f1f1"
                  d="M57.46,64.104h11.125l2.117-13.814H57.46v-8.965c0-3.779,1.85-7.463,7.781-7.463h6.021
			c0,0,0-11.761,0-11.761c-12.894-2.323-28.385-1.616-28.722,17.66V50.29H30.417v13.814H42.54c0,0,0,33.395,0,33.396H50h7.46l0,0h0
			V64.104z"
                ></path>
              </g>
            </svg>
          </div>
        </a>
        <span className="text-gray-600 text-4xl text-center font-bold mb-4 ">
          NakedzerO<span className="font-light"> Hair Salon</span>
        </span>
      </div>
      <a href="https://www.instagram.com/nakedzerohairsalon/" target="_blank">
        <div className="flex justify-center items-center gap-5 text-center text-gray-600 text-4xl mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="102"
            height="102"
            id="instagram"
          >
            <defs>
              <radialGradient
                id="a"
                cx="6.601"
                cy="99.766"
                r="129.502"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".09" stop-color="#fa8f21"></stop>
                <stop offset=".78" stop-color="#d82d7e"></stop>
              </radialGradient>
              <radialGradient
                id="b"
                cx="70.652"
                cy="96.49"
                r="113.963"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#8c3aaa"></stop>
              </radialGradient>
            </defs>
            <path
              fill="url(#a)"
              d="M25.865 101.639A34.341 34.341 0 0 1 14.312 99.5a19.329 19.329 0 0 1-7.154-4.653A19.181 19.181 0 0 1 2.5 87.694 34.341 34.341 0 0 1 .364 76.142C.061 69.584 0 67.617 0 51s.067-18.577.361-25.14A34.534 34.534 0 0 1 2.5 14.312a19.4 19.4 0 0 1 4.654-7.158A19.206 19.206 0 0 1 14.309 2.5 34.341 34.341 0 0 1 25.862.361C32.422.061 34.392 0 51 0s18.577.067 25.14.361A34.534 34.534 0 0 1 87.691 2.5a19.254 19.254 0 0 1 7.154 4.653 19.267 19.267 0 0 1 4.655 7.156 34.341 34.341 0 0 1 2.14 11.553c.3 6.563.361 8.528.361 25.14s-.061 18.577-.361 25.14a34.5 34.5 0 0 1-2.14 11.552A20.6 20.6 0 0 1 87.691 99.5a34.342 34.342 0 0 1-11.553 2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
              data-name="Path 16"
            ></path>
            <path
              fill="url(#b)"
              d="M25.865 101.639A34.341 34.341 0 0 1 14.312 99.5a19.329 19.329 0 0 1-7.154-4.653A19.181 19.181 0 0 1 2.5 87.694 34.341 34.341 0 0 1 .364 76.142C.061 69.584 0 67.617 0 51s.067-18.577.361-25.14A34.534 34.534 0 0 1 2.5 14.312a19.4 19.4 0 0 1 4.654-7.158A19.206 19.206 0 0 1 14.309 2.5 34.341 34.341 0 0 1 25.862.361C32.422.061 34.392 0 51 0s18.577.067 25.14.361A34.534 34.534 0 0 1 87.691 2.5a19.254 19.254 0 0 1 7.154 4.653 19.267 19.267 0 0 1 4.655 7.156 34.341 34.341 0 0 1 2.14 11.553c.3 6.563.361 8.528.361 25.14s-.061 18.577-.361 25.14a34.5 34.5 0 0 1-2.14 11.552A20.6 20.6 0 0 1 87.691 99.5a34.342 34.342 0 0 1-11.553 2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
              data-name="Path 17"
            ></path>
            <path
              fill="#fff"
              d="M38.477 51.217a12.631 12.631 0 1 1 12.629 12.632 12.631 12.631 0 0 1-12.629-12.632m-6.829 0a19.458 19.458 0 1 0 19.458-19.458 19.457 19.457 0 0 0-19.458 19.458m35.139-20.229a4.547 4.547 0 1 0 4.549-4.545 4.549 4.549 0 0 0-4.547 4.545m-30.99 51.074a20.943 20.943 0 0 1-7.037-1.3 12.547 12.547 0 0 1-7.193-7.19 20.923 20.923 0 0 1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082 21.082 0 0 1 1.3-7.037 12.54 12.54 0 0 1 7.193-7.193 20.924 20.924 0 0 1 7.037-1.3c3.994-.184 5.194-.22 15.309-.22s11.316.039 15.314.221a21.082 21.082 0 0 1 7.037 1.3 12.541 12.541 0 0 1 7.193 7.193 20.926 20.926 0 0 1 1.3 7.037c.184 4 .22 5.194.22 15.314s-.037 11.316-.22 15.314a21.023 21.023 0 0 1-1.3 7.037 12.547 12.547 0 0 1-7.193 7.19 20.925 20.925 0 0 1-7.037 1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786 27.786 0 0 0-9.2 1.76 19.373 19.373 0 0 0-11.083 11.083 27.794 27.794 0 0 0-1.76 9.2c-.187 4.04-.229 5.332-.229 15.623s.043 11.582.229 15.623a27.793 27.793 0 0 0 1.76 9.2 19.374 19.374 0 0 0 11.083 11.083 27.813 27.813 0 0 0 9.2 1.76c4.042.184 5.332.229 15.623.229s11.582-.043 15.623-.229a27.8 27.8 0 0 0 9.2-1.76 19.374 19.374 0 0 0 11.083-11.083 27.716 27.716 0 0 0 1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786 27.786 0 0 0-1.76-9.2 19.379 19.379 0 0 0-11.08-11.083 27.748 27.748 0 0 0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
              data-name="Path 18"
            ></path>
          </svg>
          <span>@nakedzerohairsalon</span>
        </div>
      </a>
      <div className="grid grid-cols-3 sm:gap-2 gap-1">
      <div
          className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.fourteen}`}
        ></div>
        <div
          className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.fifteen}`}
        ></div>
        <div
          className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.thirteen}`}
        ></div>
        <div
          className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.ten}`}
        ></div>
        <div
          className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.eleven}`}
        ></div>
        <div
          className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.twelve}`}
        ></div>
        <div className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.one}`}></div>
        <div className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.two}`}></div>
        <div
          className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.three}`}
        ></div>
        <div
          className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.four}`}
        ></div>
        <div
          className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.five}`}
        ></div>
        <div className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.six}`}></div>
        <div
          className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.seven}`}
        ></div>
        <div
          className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.eight}`}
        ></div>
        <div
          className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.nine}`}
        ></div>
        
      </div>
    </div>
  );
}
