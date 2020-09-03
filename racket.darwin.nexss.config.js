let languageConfig = Object.assign({}, require("./racket.win32.nexss.config"));

languageConfig.compilers = {
  racket: {
    install: "brew update && brew install minimal-racket",
    command: "racket",
    args: "-l errortrace -t <file> --",
    help: ``,
  },
};
