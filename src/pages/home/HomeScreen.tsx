import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Suspense, lazy } from "react";

const LazyHomeContent = lazy(() => import("./HomeMain"));

const HomeScreen = () => {
  return (
    <section>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHomeContent />
      </Suspense>
      <Footer />
    </section>
  );
};

export default HomeScreen;
