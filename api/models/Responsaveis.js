/**
* Responsaveis.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	
  	 id: { type:'string'},
  	idresponsavel:{
  		
  		type:'string',
  		primaryKey:true,
  		required:true,
  		unique:true
  	},
nome:{
        type:"string", 
        required:true,
        minLength: 2
      },
     email:{
        type:"email",
        required:true,
        unique: true
     },
cep:{
        type:"string",
        required:true
      },
      endereco:{
        type:"string",
        required:true
      },
      bairro:{
        type:"string",
        required:true
      },     
      cidade:{
      	type:'string',
      	required:true
      	
      },
     estado:{
      	type:'string',
      	required:true,
      	maxLength:2
      	
      },
     cpf:{
        type:"string", 
        required:true,
        minLength: 2
      },
	rg:{
        type:"string", 
        required:true,
        minLength: 2
      },
      datanascimento:{
        type:"date", 
        required:true
      }

,
    	alunos: { 
 	  collection: 'alunos',
      via: 'idresponsavel'
  		}
 
  	}
};

