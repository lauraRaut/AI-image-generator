import axios from "axios";


const url = "http://localhost:5000/openai"

const aiImage = async (prompt, size) => {
    console.log(prompt)
    const response = await axios.post(url + "/generateImage", {
        prompt,
        size})

        return response.data.data;
}

const openaiapiservice = {aiImage}
export default openaiapiservice;