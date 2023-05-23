import styles from "../style"

const CTA = () => (
  <section
    id="contacts"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Contact me through:</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Gmail: trieuduong.gg@gmail.com <br />
        Phone: +358 46 88 14543
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}></div>
  </section>
)

export default CTA
