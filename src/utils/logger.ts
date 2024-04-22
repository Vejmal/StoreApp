import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
  transport: {
    target: "pino-pretty",
    options: {
      levelFirst: true,
      translateTime: true,
      colorize: true,
    },
  },
  base: {
    pid: false
  },
  timestamp: () => `, "time":"${dayjs().format()}"`
});

export default log;

// Good to know: https://stackoverflow.com/questions/71649204/pinowarning-prettyprint-is-deprecated-look-at-https-github-com-pinojs-pino-p