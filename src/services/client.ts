import axios from "axios";
const BASE_URL = "http://localhost:5000/api/v1";

export const REQUSET_TYPES = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

const handleRequest = async (
  method: string,
  path: string,
  data?: any,
  options?: any
) => {
  try {
    const response = await axios({
      method,
      baseURL: `${BASE_URL}${path}`,
      data: data,
    });

    if (response.data) return response.data;
  } catch (e: any) {
    throw e.response?.data;
  }
};

export default handleRequest;
