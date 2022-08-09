const router = require( 'express' ).Router();
const { User, Listing} = require( '../../models' );

router.get('/', (req, res) => {
    User.findAll({
        attributes: {exclude: ['password']},
        attributes: [
            'id',
            'username',
            'email',
            'name',
            'wish_list'
        ],
        include: [
            {
                model: Listing,
                    attributes: ['id', 'title', 'description', 'user_id', 'category_id', 'listing_date', 'updated_at']
            }
        ]
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: {exclude: ['password']},
        attributes: [
            'id',
            'username',
            'email',
            'name',
            'wish_list'
        ],
        include: [
            {
                model: Listing,
                    attributes: ['id', 'title', 'description', 'user_id', 'category_id', 'listing_date', 'updated_at']
            }
        ] 
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'There is no User matching that ID'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        wish_list: req.body.wish_list
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'Wrong password' });
            return;
        }
        
        const passwordConfirm = dbUserData.checkPassword(res.body.password);
        if(!passwordConfirm) {
            res.status(400).json({ message: 'Wrong password' });
            return;
        }

        res.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'Login Successful!' });
        });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(404).end();
    }
});

router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'There is no User matching that ID' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'There is no User matching that ID' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
