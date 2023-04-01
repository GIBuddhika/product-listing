import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan");
export const apiCallSucess = createAction("api/callSuccess");
export const apiCallFailed = createAction("api/callFailed");

const Api =
    ({ dispatch }) =>
        (next) =>
            async (action) => {
                if (action.type !== apiCallBegan.type) return next(action);

                const { url, method, data, params, onStart, onSuccess, onError } =
                    action.payload;

                if (onStart) dispatch({ type: onStart });

                next(action);

                try {
                    const response = await axios.request({
                        baseURL: "http://localhost:8001/api/",
                        url,
                        method,
                        data,
                        params
                    });
                    // General
                    dispatch(apiCallSucess(response.data));
                    // Specific
                    if (onSuccess)
                        dispatch({ type: onSuccess, payload: response.data });
                } catch (error) {
                    // General
                    dispatch(apiCallFailed(error.message));
                    // Specific
                    if (onError) dispatch({ type: onError, payload: error.message });
                }
            };

export default Api;