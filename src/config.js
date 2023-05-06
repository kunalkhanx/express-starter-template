const config = {

    // Port
    port: process.env.PORT || 3000,

    // Token Key
    token_key: process.env.TOKEN_KEY || 'demotoken',
    token_expire: 60*60*24*30,

    // Database Path
    db_path: process.env.DB_PATH || 'mongodb://127.0.0.1:27017/nodejs_starter',

    // File Directories
    upload_dir: 'src/uploads',
    temp_dir: 'src/uploads/temp',
}

// Export
module.exports = config

