import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data: catFact, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Shit there is an error!</h1>;
  }

  return (
    <div>
      <h1> A Random Fact</h1>
        <p>{catFact?.fact}</p>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};
