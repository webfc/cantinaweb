/**
* Escolas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

   attributes: {
   /* name: 'string',
    responsavel: 'string',
	cep: 'string',
	endereco: 'string',
	cidade: 'string',
	estado: 'string',
	telefone: 'string',	
    cantinas: {
      collection: 'cantinas',
      via: 'idescola'
    },
   alunos: {
      collection: 'alunos',
      via: 'idescola'
    }
    */
   
   id: { type:'string'},
   
escolaID:{ 
	type:'string',
	primaryKey:true,
	unique: true
	},   
 escola:{
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
      segmento: {
      	type:'string'
      	
      },
      areatuacao:{
      	type:'string',
      	
      },
      responsavel:{
      	
      	type:'string',
      	required:true
      }
      
  }
  
};
