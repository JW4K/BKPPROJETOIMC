class HelloController {
  async index(req, res){
    return res.json({ hello: `foi porrdfdfadadaa!!!`});
  }
}

export default new HelloController();