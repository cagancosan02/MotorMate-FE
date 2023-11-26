import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { MetaData } from "../../app/models/Pagination";
import { RootState } from "../../app/store/ConfigureStore";
import agent from "../../app/api/agent";
import { Review, ReviewParams } from "../../app/models/Review";

interface ProductReviewState {
  reviewProduct: Review | null;
  reviewProductLoaded: boolean;
  reviewProductParams: ReviewParams;
  metaData: MetaData | null;
}

const reviewProductsAdapter = createEntityAdapter<Review>({
  selectId: (review) => review.userId, //will edit to vehicleId
});

function getAxiosParams(reviewProductParams: ReviewParams) {
  const params = new URLSearchParams();
  params.append("pageNumber", reviewProductParams.pageNumber.toString());
  params.append("pageSize", reviewProductParams.pageSize.toString());

  return params;
}

export const getReviewsProductAsync = createAsyncThunk<
  Review[],
  void,
  { state: RootState }
>("reviewProduct/getReviewsProductAsync", async (_, ThunkAPI) => {
  const params = getAxiosParams(
    ThunkAPI.getState().reviewProduct.reviewProductParams
  );
  try {
    const response = await agent.Vehicle.list(params);
    ThunkAPI.dispatch(setMetaData(response.metaData));
    return response.items;
  } catch (error: any) {
    return ThunkAPI.rejectWithValue({ error: error.data });
  }
});

function initParams() {
  return {
    pageNumber: 1,
    pageSize: 5,
  };
}

export const ReviewProductSlice = createSlice({
  name: "reviewProduct",
  initialState: reviewProductsAdapter.getInitialState<ProductReviewState>({
    reviewProduct: null,
    reviewProductLoaded: false,
    reviewProductParams: initParams(),
    metaData: null,
  }),
  reducers: {
    setReviewProductParams: (state, action) => {
      state.reviewProductParams = {
        ...state.reviewProductParams,
        ...action.payload,
      };
    },
    resetReviewsProductParams: (state) => {
      state.reviewProductParams = initParams();
    },
    setMetaData: (state, action) => {
      state.metaData = action.payload;
    },

    setPageNumber: (state, action) => {
      state.reviewProductLoaded = false;
      state.reviewProductParams = {
        ...state.reviewProductParams,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsProductAsync.fulfilled, (state, action) => {
        reviewProductsAdapter.setAll(state, action.payload);
        state.reviewProductLoaded = false;
      })
      .addCase(getReviewsProductAsync.pending, (state, action) => {
        state.reviewProductLoaded = true;
      })
      .addCase(getReviewsProductAsync.rejected, (state, action) => {
        console.log("Get products rejected: ", action);
        state.reviewProductLoaded = false;
      });
  },
});

export const reviewProductsSelectors = reviewProductsAdapter.getSelectors(
  (state: RootState) => state.reviewProduct
);

export const {
  setReviewProductParams,
  resetReviewsProductParams,
  setMetaData,
  setPageNumber,
} = ReviewProductSlice.actions;