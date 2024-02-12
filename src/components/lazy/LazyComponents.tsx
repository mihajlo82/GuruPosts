import { Suspense, lazy } from "react";
const HomeScreen = lazy(() => import("@/pages/home/HomeScreen.tsx"));
const PhotosScreen = lazy(() => import("@/pages/photos/PhotosScreen.tsx"));
const SinglePostScreen = lazy(
  () => import("@/pages/singlePost/SinglePostScreen")
);
const ErrorScreen = lazy(() => import("@/pages/error/ErrorScreen"));

const LazyHomeScreen = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeScreen />,
    </Suspense>
  );
};

const LazyPhotosScreen = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PhotosScreen />,
    </Suspense>
  );
};

const LazySinglePostScreen = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SinglePostScreen />,
    </Suspense>
  );
};
const LazyErrorScreen = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorScreen />,
    </Suspense>
  );
};

export {
  LazyHomeScreen,
  LazyPhotosScreen,
  LazySinglePostScreen,
  LazyErrorScreen,
};
