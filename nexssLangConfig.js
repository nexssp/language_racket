module.exports = {
  description: "Racket",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "racket -l errortrace -t",
  extension: ".rkt",
  executeCommandLine: "",
  InteractiveShell: "",
  errors: {
    "'racket' is": {
      win32: "scoop install racket",
      darwin: "brew install racket",
      linux: "apt-get install racket -y"
    }
  },
  url: ""
};
