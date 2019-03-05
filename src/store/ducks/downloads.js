export const Types = {
  START_DOWNLOAD: {
    REQUEST: 'DOWNLOAD_REQUEST',
    FAILURE: 'DOWNLOAD_FAILURE',
    SUCCESS: 'DOWNLOAD_SUCCESS',
  },
};

const initialState = {
  data: null,
  loading: false,
  percentage: 0,
  error: null,
};

export default function downloads(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const Creators = {
  startDownload: {
    request: url => ({
      type: Types.START_DOWNLOAD.REQUEST,
      payload: url,
    }),

    failure: msg => ({
      type: Types.START_DOWNLOAD.FAILURE,
      payload: msg,
    }),

    success: msg => ({
      type: Types.START_DOWNLOAD.SUCCESS,
      payload: msg,
    }),
  },
};
