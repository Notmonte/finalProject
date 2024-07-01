// dao.js is where all the cool daos meet

const daoCommon = require('./common/daoCommon')

// Linking to daoCommon.js so they can inherit the queries inside of it 

const osDao = {...daoCommon, ...require('./api/osDao')}

const processorDao = {...daoCommon, ...require('./api/processorDao')}

const userDao = {...daoCommon, ...require('./api/userDao')}

const videoCardDao = {...daoCommon, ...require('./api/videoCardDao')}

const pcDao = {...daoCommon, ...require('./api/pcDao')}


// Exported => So they can be imported and used anywhere

module.exports = {
    osDao,
    processorDao,
    userDao,
    videoCardDao,
    pcDao
}