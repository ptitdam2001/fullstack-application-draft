import { useQuery } from "urql";

const queryCurrentClient = `query GetUserInfo {
  result {
    user {
      username
      firstName
    }
  }
}`;

export const useCurrentUser = () => {
	const [result, refetch] = useQuery({
		query: queryCurrentClient,
	});
	const { data, fetching, error } = result;

	return {
		user: data?.user,
		fetching,
		error,
		refetch,
	};
};
