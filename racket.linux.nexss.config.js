let languageConfig = Object.assign({}, require("./racket.win32.nexss.config"));
let sudo = process.sudo;

languageConfig.compilers = {
  racket: {
    install: `${sudo}apt install -y software-properties-common && add-apt-repository -y ppa:plt/racket && ${sudo}apt update && ${sudo}apt install -y racket`,
    command: "racket",
    args: "-l errortrace -t <file> --",
    help: ``,
  },
};

const distName = process.distro;
// TODO: Later to cleanup this config file !!
switch (distName) {
  case process.distros.AMAZON:
  case process.distros.AMAZON_AMI:
    languageConfig.compilers.racket.install = `wget https://mirror.racket-lang.org/installers/7.5/racket-7.5-x86_64-linux.sh
${sudo}chmod +x racket-7.5-x86_64-linux.sh
${sudo}./racket-7.5-x86_64-linux.sh`;
    break;
  case process.distros.ORACLE:
    const distVersion = process.distroVersion; // *1 converts to number
    if (version) {
      //if here for older versions of nexssp
      if (distVersion >= 8) {
        // TODO: recognize the slim version
        languageConfig.compilers.racket.install = `${sudo}dnf update -y && ${sudo}dnf install -y oracle-epel-release* && ${sudo}dnf install -y racket`;
      } else {
        languageConfig.compilers.racket.install = `${sudo}yum update -y && ${sudo}yum install -y oracle-epel-release* && ${sudo}yum install -y racket`;
      }
    }
    break;
  case process.distros.ALPINE:
    languageConfig.compilers.racket.install = `${sudo}apk add racket --repository=http://dl-cdn.alpinelinux.org/alpine/edge/testing`;
    languageConfig.compilers.racket.args = "-t <file> --";
    break;
  case process.distros.ARCH:
    languageConfig.compilers.racket.install = `${sudo}pacman -Sy --noconfirm racket`;
    break;
  case process.distros.FEDORA:
    languageConfig.compilers.racket.install = `${sudo}dnf install -y racket`;
    break;
  case process.distros.CENTOS:
    languageConfig.compilers.racket.install = `${sudo}yum install -y epel-release* && yum install -y racket`;
    break;
  case process.distros.RHEL:
    languageConfig.compilers.racket.install = `${sudo}yum install -y racket`;
    break;
  default:
    languageConfig.compilers.racket.install = process.replacePMByDistro(
      `${sudo}apt-get update -y
${sudo}apt-get install -y racket`
    );
}

languageConfig.dist = distName;

module.exports = languageConfig;
