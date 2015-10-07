/**
* Alimentosespeciais.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idalimento:{type:'integer',
  	primaryKey:true,
  	autoIncrement:true
  },
  	alimento:'string',
  	idaluno: {
      model: 'alunos'
    } 

  }
};

