import { useEffect, useRef } from 'react';
import { useStarships } from '../hooks/useStarships';

interface Starship {
  name: string;
  model: string;
}

const Starships = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useStarships();
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-5 mt-10">
      {data?.pages.map((page) =>
        page.results.map((starship: Starship) => (
          <div
            className="hover-effect bg-stone-950 hover:bg-stone-900 mx-24 p-4 rounded-md hover:rounded-2xl hover:shadow-sm active:shadow-none hover:shadow-stone-600"
            key={starship.name}
          >
            <h2>{starship.name.toUpperCase()}</h2>
            <h3>{starship.model}</h3>
          </div>
        ))
      )}
      <div ref={loadMoreRef} />
      {isFetchingNextPage && <div>Loading more...</div>}
    </div>
  );
};

export default Starships;