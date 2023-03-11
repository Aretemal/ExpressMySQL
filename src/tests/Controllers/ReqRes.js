export const req = {
  body: {
    id: 1,
    status: 'Old status',
  },
  user: {
    id: 1,
  },
  params: {
    id: 1,
  },
};
export const res = {
  dataJS: null,
  json: (data) => {
    res.dataJS = data;
  },
};
