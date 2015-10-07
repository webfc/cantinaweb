/**
* Cantinas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idcantina:{
  		type:'string',
  		primaryKey:true
  		
  	},
  	nome:'string',
  	cnpj:'string',
  	responsavel:'string',
  	horariofuncionamento:'string',
  	pdv:'string',
  	codigocantina:'string',
  	email:'string',
  	idescola:{ 
  		model:'escolas'
  		
  		}

  }
};

