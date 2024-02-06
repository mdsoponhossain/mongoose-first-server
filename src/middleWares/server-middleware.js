

function middleWareFunc (app,express,cors) {
    app.use(express.json());
    app.use(cors());
};

module.exports = middleWareFunc