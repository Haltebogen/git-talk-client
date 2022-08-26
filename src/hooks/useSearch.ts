import useSWR from 'swr';
import fetcher from 'utils/api/main';

const useSearch: any = (keyword: string | undefined, isChat: boolean) => {
  // TODO: chstSearch api 생성 되면 itemType에 맞게 추가
  const api = isChat ? `` : `/api/v1/member/follow/search?keyword=${keyword}`;
  const { data, error, mutate } = useSWR(keyword ? api : null, fetcher);

  return { searchResult: data, isLoading: !error && !data, isError: error, mutate };
};

export default useSearch;
