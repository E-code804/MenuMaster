import { ReviewContext } from "../context/ReviewContext";
import { useContext } from "react";

// hook function
export const useReviewsContext = () => {
  // ReviewsContext is the same value from the provider
  const context = useContext(ReviewContext);

  // Check that were in the proper context
  if (!context) {
    throw Error("Use in the proper context provider.");
  }

  return context;
};
