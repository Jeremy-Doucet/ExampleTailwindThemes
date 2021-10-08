import { ThemeLayout } from "../layouts/ThemeLayout";
import "../styles/global.styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeLayout>
      <Component {...pageProps} />
    </ThemeLayout>
  );
}

export default MyApp;
