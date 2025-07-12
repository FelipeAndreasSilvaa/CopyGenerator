const axios = require("axios");

exports.callPythonAPI = async (prompt) => {
  try {
    const response = await axios.post("http://localhost:8000/api/code/", { prompt });
    return response.data; // { success: true, code: "codigo gerado" }
  } catch (error) {
    console.error("Erro na chamada Python API:", error.response?.data || error.message);
    throw new Error("Erro ao comunicar com a API Python");
  }
};
