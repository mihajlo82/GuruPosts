import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Suspense, lazy } from "react";
import { HomeLayout } from "./HomeStyled";

const LazyHomeContent = lazy(() => import("./HomeMain"));

const HomeScreen = () => {
  return (
    <HomeLayout>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHomeContent />
      </Suspense>
      <Footer />
    </HomeLayout>
  );
};

export default HomeScreen;
