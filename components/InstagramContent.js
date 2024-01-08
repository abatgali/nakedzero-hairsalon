import styles from "./styles/Insta.module.css";

export default function InstagramContent() {
  return (
    <div className="min-h-screen lg:w-4/5 xl:w-3/5 mx-auto my-6 sm:my-16">
      <h1 className="text-center text-gray-600 text-4xl mb-12">
        @nakedzerohairsalon
      </h1>
      <div className="grid grid-cols-3 sm:gap-2 gap-1">
        <div className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.one}`}></div>
        <div className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.two}`}></div>
        <div className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.three}`}></div>
        <div className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.four}`}></div>
        <div className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.five}`}></div>
        <div className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.six}`}></div>
        <div className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.seven}`}></div>
        <div className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.eight}`}></div>
        <div className={`bg-gray-300 h-48 sm:h-64 md:h-96 ${styles.nine}`}></div>
      </div>
    </div>
  );
}
