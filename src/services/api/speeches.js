import api from "./index";

const upload = (params) => {
  let formData = new FormData();

  formData.append("file", params);

  return api.base
    .post("/speeches", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};

const download = (params) => {
  return api.base
    .get(`/speeches/${params}`, { responseType: 'blob' })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};

export default {
  upload,
  download,
};
