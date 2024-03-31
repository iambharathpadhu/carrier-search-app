import { useSearchParams } from "react-router-dom";

export const useGetURLParams = () => {
  const [params] = useSearchParams();
  const activeStepFromUrl = parseInt(params.get("step") || "0", 10);
  return {
    activeStepFromUrl,
  };
};
