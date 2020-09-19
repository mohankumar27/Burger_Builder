import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: null,
      authRedirectPath: "/",
    });
  });

  it("should store token upon Login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "sometoken",
          userId: "someuser",
        }
      )
    ).toEqual({
      token: "sometoken",
      userId: "someuser",
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
});
