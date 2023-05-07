let languageConfig = Object.assign({}, require("./racket.win32.nexss.config"));

languageConfig.compilers = {
  racket: {
    install: "pkg install -y racket",
    command: "racket",
    args: "-l errortrace -t <file> --",
    help: ``,
  },
};

module.exports = languageConfig;
