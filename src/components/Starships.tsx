import { useStarships } from '../hooks/useStarships.ts';



const Startships = () => {
			const { data, error, isLoading } = useStarships();
	
		if (isLoading) return <div>Loading...</div>;
		if (error) return <div>Error: {error.message}</div>;
		return (

				<div className="space-y-5 mt-10">
						{data?.results.map((starship) => (
        <div className="bg-stone-900 mx-24 p-4 rounded-sm" key={starship.name}>
          <h2> {starship.name.toUpperCase()}</h2>
          <h3> {starship.model}</h3>
        </div>
      ))}
				</div>
		)
}

export default Startships;