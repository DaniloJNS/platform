FROM node:15.11.0-buster

ENV INSTALL_PATH /opt/app

ENV TZ="America/Sao_Paulo"

RUN ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime

# yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN rm -rf /var/lib/apt/lists/*


RUN apt update -qq
RUN apt install -y --no-install-recommends curl ca-certificates gnupg2 locales wget vim yarn


RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen
RUN locale-gen
ENV LC_ALL="en_US.utf8"

WORKDIR $INSTALL_PATH
COPY . $INSTALL_PATH

RUN yarn install
