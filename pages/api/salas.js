import data from '../../data.json';

function salas(request, response) {
  response
  .status(200)
  .json(data.salas);
}

export default salas;