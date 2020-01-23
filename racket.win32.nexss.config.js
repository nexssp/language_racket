let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Racket";
languageConfig.description =
  "Racket is a general-purpose programming language as well as the world’s first ecosystem for language-oriented programming. Make your dream language, or use one of the dozens already available.";
languageConfig.url = "https://racket-lang.org/";
languageConfig.extensions = [".rkt"];
languageConfig.builders = {};
languageConfig.compilers = {
  racket: {
    install: "scoop install racket",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "racket",
    args: "-l errortrace -t <file> --",
    help: ``
  }
};
languageConfig.errors = require("./nexss.racket.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "PowerShell.exe -File installRaco.ps1",
    messageAfterInstallation: "",
    new: "raco pkg new",
    installed: "raco pkg show",
    search: "composer search",
    install: "raco pkg install",
    uninstall: "raco pkg remove",
    help: "raco docs",
    version: "composer version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "composer <default> <args>"
  }
};

module.exports = languageConfig;
