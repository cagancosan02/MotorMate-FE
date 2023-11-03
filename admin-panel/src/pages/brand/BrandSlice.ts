import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Brand, BrandParams } from "../../app/models/Brand";
import { FieldValues } from "react-hook-form";
import agent from "../../app/api/agent";
import { RootState } from "../../app/store/ConfigureStore";
import { toast } from "react-toastify";
import { MetaData } from "../../app/models/Pagination";

interface BrandState {
  brand: Brand | null;
  brandLoaded: boolean;
  brandParams: BrandParams;
  metaData: MetaData | null;
}

const brandsAdapter = createEntityAdapter<Brand>();

function getAxiosParams(brandParams: BrandParams) {
  const params = new URLSearchParams();
  params.append("pageNumber", brandParams.pageNumber.toString());
  params.append("pageSize", brandParams.pageSize.toString());
  return params;
}

export const getBrandsAsync = createAsyncThunk<
  Brand[],
  void,
  { state: RootState }
>("brand/getBrandsAsync", async (_, ThunkAPI) => {
  const params = getAxiosParams(ThunkAPI.getState().brand.brandParams);
  try {
    const response = await agent.Brand.list(params);
    ThunkAPI.dispatch(setMetaData(response.metaData));
    return response.items;
  } catch (error: any) {
    return ThunkAPI.rejectWithValue({ error: error.data });
  }
});

export const addBrandAsync = createAsyncThunk<Brand, FieldValues>(
  "brand/addBrandAsync",
  async (data, ThunkAPI) => {
    try {
      const response = await agent.Brand.create(data);
      return response;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const updateBrandAsync = createAsyncThunk<Brand, FieldValues>(
  "brand/updateBrandAsync",
  async (data, ThunkAPI) => {
    try {
      const response = await agent.Brand.update(data.id, data);
      return response;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const deleteBrandAsync = createAsyncThunk(
  "brand/deleteBrandAsync",
  async (id: string) => {
    try {
      await agent.Brand.delete(id);
      toast.success("Delete brand successfully!");
      return id;
    } catch (error: any) {
      toast.error(error.data.message);
      throw error;
    }
  }
);

function initParams() {
  return {
    pageNumber: 1,
    pageSize: 5,
  };
}

export const BrandSlice = createSlice({
  name: "brand",
  initialState: brandsAdapter.getInitialState<BrandState>({
    brand: null,
    brandLoaded: false,
    brandParams: initParams(),
    metaData: null,
  }),
  reducers: {
    setBrandParams: (state, action) => {
      state.brandParams = { ...state.brandParams, ...action.payload };
    },

    resetBrandParams: (state) => {
      state.brandParams = initParams();
    },
    // setBrand: (state, action) => {
    //   brandsAdapter.upsertOne(state, action.payload);
    // },
    setMetaData: (state, action) => {
      state.metaData = action.payload;
    },

    setPageNumber: (state, action) => {
      state.brandLoaded = false;
      state.brandParams = { ...state.brandParams, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBrandsAsync.fulfilled, (state, action) => {
        brandsAdapter.setAll(state, action.payload);
        state.brandLoaded = false;
      })
      .addCase(getBrandsAsync.pending, (state, action) => {
        state.brandLoaded = true;
      })
      .addCase(getBrandsAsync.rejected, (state, action) => {
        console.log("Get brand rejected: ", action);
        state.brandLoaded = false;
      });

    builder.addCase(addBrandAsync.fulfilled, (state, action) => {
      toast.success("Add brand successfully!");
      brandsAdapter.addOne(state, action.payload);
    });

    builder.addCase(updateBrandAsync.fulfilled, (state, action) => {
      toast.success("Update brand successfully!");
      brandsAdapter.upsertOne(state, action.payload);
    });

    builder.addCase(deleteBrandAsync.fulfilled, (state, action) => {
      brandsAdapter.removeOne(state, action.payload);
    });
  },
});

export const brandSelectors = brandsAdapter.getSelectors(
  (state: RootState) => state.brand
);

export const { setBrandParams, resetBrandParams, setMetaData, setPageNumber } =
  BrandSlice.actions;
