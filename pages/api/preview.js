import { getImageBase64 } from "../../lib/helper";
export default async function handler(req, res) {
  try {
    let { url } = req.query;
    let image = await getImageBase64(url);
    res.status(200).json({
      image,
    });
  } catch (error) {
    res.status(500).json({
      error: JSON.stringify(error),
    });
  }
}
