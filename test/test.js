var mocha = require('mocha');//Framework Mocha
var chai = require('chai');//Biblioteca para Mocha, llamada Chai
var expect = chai.expect//Estilo de programción expect, dentro de Chai
chai.use(require('chai-json-schema'));


var fs = require('fs');

var datos;
var schema;

describe('Lectura de ficheros', function () {
	it('El JSON de datos existe y se puede leer', function (done) {
    fs.readFile('convocatorias.json', 'utf8', function (err, data) {
      if (err) done(err);
      else {
        datos = JSON.parse(data);
            console.log(datos);
        done();
      }
    });
  });

  it('El Schema existe y se puede leer',function(done){
    fs.readFile('schema.json', 'utf8', function (err, data) {
      if (err)
        done(err);
      else {
        schema = JSON.parse(data);
        done();
      }
    });
  });
});


describe('JSON de datos concuerda con el Schema', function () {
	it('Concuerda', function (done) {
    expect(datos).to.be.jsonSchema(schema);
    done();
  });
});
