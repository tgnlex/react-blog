
const reqLog = (req, res, next) => {
  console.info(`Request Body: ${req.body}`);
}

const middleware = [
  reqLog,
];

export default middleware;