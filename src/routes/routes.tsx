import { lazy, Suspense } from "react";

type Route = {
  path: string;
  element: React.ReactNode;
};

function lazyLoad(
  promise: Promise<{
    default: React.ComponentType<any>;
  }>
) {
  const LazyComponent = lazy(() => promise);

  return (
    <Suspense fallback={<>...</>}>
      <LazyComponent />
    </Suspense>
  );
}

export default [
  {
    path: "/",
    element: lazyLoad(import("../pages/Home")),
  },
] as Route[];
