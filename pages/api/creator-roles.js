import axios from "axios";

export default async (req, res) => {
    const url = process.env.API_URL + 'creator-roles?key=' + process.env.API_KEY;

    await axios
        .get(url)
        .then(({ data }) => {
            res.status(200).json({ data })
        })
        .catch(({ err }) => {
            res.status(400).json({ err })
        })
}

