let languageConfig = Object.assign({}, require("./racket.win32.nexss.config"));
let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}
languageConfig.compilers = {
  racket: {
    install: `${sudo}add-apt-repository ppa:plt/racket && ${sudo}apt update && ${sudo}apt install racket`,
    command: "racket",
    args: "-l errortrace -t <file> --",
    help: ``,
  },
};

const { dist, version } = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);
const distName = dist();
// TODO: Later to cleanup this config file !!
switch (distName) {
  case "Oracle":
  case "Oracle Linux Server":
    if (version) {
      //if here for older versions of nexssp
      const distVersion = version(); // *1 converts to number
      if (distVersion >= 8) {
        // TODO: recognize the slim version
        languageConfig.compilers.racket.install = `${sudo}dnf update -y && ${sudo}dnf install -y oracle-epel-release* && ${sudo}dnf install -y racket`;
      } else {
        languageConfig.compilers.racket.install = `${sudo}yum update -y && ${sudo}yum install -y oracle-epel-release* && ${sudo}yum install -y racket`;
      }
    }
    break;
  case "Alpine Linux":
    languageConfig.compilers.racket.install = `${sudo}apk add racket`;
    break;
  case "Arch Linux":
    languageConfig.compilers.racket.install = `${sudo}pacman -Sy --noconfirm racket`;
    break;
  case "Fedora":
    languageConfig.compilers.racket.install = `${sudo}dnf install -y racket`;
    break;
  case "CentOS Linux":
    languageConfig.compilers.racket.install = `${sudo}yum install -y epel-release* && yum install -y racket`;
    break;
  case "RHEL Linux":
    languageConfig.compilers.racket.install = `${sudo}yum install -y racket`;
    break;
}

languageConfig.dist = distName;

module.exports = languageConfig;
