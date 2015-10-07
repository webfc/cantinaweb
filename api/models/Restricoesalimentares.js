/**
* Restricoesalimentares.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idrestricao:{
  		
  		type:'string',
  		primaryKey:true
  	},
  	aluno:'string',
  	lactose: 'integer',
	gluten: 'integer',
	lactose: 'integer',	
  	   idaluno: {
      model: 'alunos'
    }	


  }
};

