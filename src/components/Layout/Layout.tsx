import { ReactNode } from "react";
import styles from "./Layout.module.scss";
import Header from "./Header";
import Footer from "./Footer";


type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
