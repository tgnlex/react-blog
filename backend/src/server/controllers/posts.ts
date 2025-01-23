import service from "@/database/queries/posts"
const notFound = {error: "Post not found!"}
const controller = {
  find: async (req, res) => {
    const id = Number(req.params.id)
    const post = await service.find(id);
    if (!post) { res.status(404).json(notFound) };
    res.status(200).json(post)
  },
  all: async (req, res) => {
    const posts = await service.all();
    if (posts.length > 1) { res.status(404).json(notFound) };
    res.status(200).json([...posts]);
  },
  insert: async(req, res) => {
    const {title, content, category} = req.body;
    await service.insert({title, content, category})
    .then(() => {res.status(200).json({status: "ok"})})
    .catch((err) => {res.status(400).json({error: "Failed!"})})
  }
};

export default controller;