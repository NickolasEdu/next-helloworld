function test(req, res) {
    if(req.method !== 'POST') req.status(404)

    res.status(200)
}

export default test