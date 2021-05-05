const fetch = require('node-fetch');

const usersController = {
    index: (req,res) => {
        fetch('https://dummyapi.io/data/api/user', { headers: { 'app-id': '6092e452b498c789d19c25a0'}})
            .then(response => response.json())
            .then(users => {
                console.log(users);
                return res.render('index', { users: users })
            })
            .catch(err => {
                console.error(err);
            });
    },
    detail: (req,res) => {
        fetch('https://dummyapi.io/data/api/user', { headers: { 'app-id': '6092e452b498c789d19c25a0' } })
            .then(response => response.json())
            .then(users => {
                let pedido = req.params.id;
                
                users.data.forEach(e => {
                    if (e.id == pedido) {
                        return res.render('user_id', { e: e })
                    }
                })
            })
            .catch(err => {
                console.error(err);
            });
    }
}

module.exports = usersController;