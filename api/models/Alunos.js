/**
* Alunos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	
  	idaluno:{
  		
  		type:'string',
  		primaryKey:true,
  		unique:true
  	},
  	
nome:{
        type:"string", 
        required:true,
        minLength: 2
      },
     serie:{
        type:"string",
        required:true,
        unique: true
     },
matricula:{
        type:"string",
        required:true
      },
      turno:{
        type:"string",
        required:true
      },
      restricoes:{
        type:"string",
        required:true
      },     
      imagem:{
      	type:'string',
      	required:true
      	
      },
      datanascimento:{
        type:"date", 
        required:true
      },  	
	idresponsavel: {
		
		model:'responsaveis'
		
	},
	idescola: {
		
		model:'escolas'
		
	},
	restricoes:{
		
 	  collection: 'restricoesalimentares',
      via: 'idaluno'
		
		
	},
	alimentosespeciais:{
		
		collection:'alimentosespeciais',
		via:'idaluno'
		
		
	}
  }
};

