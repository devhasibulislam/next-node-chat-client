// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import users from "./users.json";

export default function handler(req, res) {
  const url = req.url;
  console.log(url);

  res.status(200).json({
    success: true,
    message: "successfully fetching demo users API",
    data: users
  })
}
