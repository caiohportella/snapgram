import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchedResultsProps = {
  isSearchFetching: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchedPosts: Models.Document[] | any;
};

const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchedResultsProps) => {
  if (isSearchFetching) return <Loader />;

  if (searchedPosts && searchedPosts.documents.length > 0)
    return <GridPostList posts={searchedPosts.documents} />;


  return <p className="text-light-4 mt-10 text-center w-full">No results found</p>
};

export default SearchResults;
