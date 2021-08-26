import data from '../../../data.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default (request, response) => {
  const { query: { cid } } = request;

  const classRoom = cid.slice(0, 1);

  const apostilas = data.salas[classRoom].apostilas;

  response
  .status(200)
  .json(apostilas);
}