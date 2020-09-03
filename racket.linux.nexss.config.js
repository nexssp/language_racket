let languageConfig = Object.assign({}, require("./racket.win32.nexss.config"));

languageConfig.compilers = {
  racket: {
    install:
      "add-apt-repository ppa:plt/racket && apt update && apt install racket",
    command: "racket",
    args: "-l errortrace -t <file> --",
    help: ``,
  },
};

module.exports = languageConfig;
