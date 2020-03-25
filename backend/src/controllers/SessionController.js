const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const {ong_id} = request.body;

        const ong = await connection('ongs')
        .where('id', ong_id)
        .select('name')
        .first();
        
        if(!ong){
            return response.status(400).json({ error: 'No ONG found with this ID'});
        }
        return response.json({ ong });
    }
}