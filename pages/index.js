import Link from "next/link";

import styles from "../styles/pages/index.module.scss";

export default function Home() {
  return (
    <div>
      <Link href="/Tasks">
        <div className={styles.link}>
          <div>Hello dear Pacie 👋</div>
          <div>Welcome to your first Lithuanian language lesson</div>
          <div>I really hope you will enjoy it 😊</div>
          <div>Beware, this is a very diffucult exercise 😅</div>
          <div>Press anywere to continue</div>
          <div>Good luck 😉</div>
        </div>
      </Link>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://d2pur3iezf4d1j.cloudfront.net/images/72529140fa35af37c56e0a20f1fbe2a8`,
//   );
//   const sugar = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
