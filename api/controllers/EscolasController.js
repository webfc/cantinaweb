/**
 * EscolasController
 *
 * @description :: Server-side logic for managing escolas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// findEmployeebyEmpnum:function(req,res)
	
	dadosEscola:function(req,res)
  {
    var id = req.param('id');
    Escolas.findOne({escolaID:id})
        .exec(function(err,escola){

          if(err)
            res.json({error:err});
          if(escola === undefined)
            res.notFound();
          else
            res.json({notFound:false,dadosEscola:escola});
        });
  },
  cantinasEscola: function(req,res)
{
    Cantinas.find({idescola: req.param('id')})
    .exec(function (err, cantinas) {
          if(err)
            res.json({error:err});
          if(cantinas === undefined)
            res.notFound();
          else
            res.json({notFound:false,cantinasEscola:cantinas});
     });
   }	

  
  
  
};

