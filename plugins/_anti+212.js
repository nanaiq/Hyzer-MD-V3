let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
   }
   
   if (m.sender.startsWith('92' || '92')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }

module.exports = handler
