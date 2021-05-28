// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function api(req, res) {
  res.status(200).send(res.json({ name: 'John Doe' }));
}
