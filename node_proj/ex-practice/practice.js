const db = require('../ex-module/db');
console.log(db);
async function run(){
    const conn = await db.getConn();
    try {
        const sql = `SELECT mem_id, mem_name, mem_mail
                     FROM member
                     WHERE mem_name LIKE :1`
        const result = await db.selectDataArr(conn, sql, ['이혜나']);
        console.log(result.rows);
    } catch (err) {
        console.log('에러남 : ' , err);
    } finally{
        await db.closeConn(conn);
    }
}
run();