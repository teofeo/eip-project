FROM node:current-alpine3.22

USER root

# Dépendances essentielles pour zsh + fonts + curl
RUN apk update && apk add --no-cache \
    git \
    curl \
    zsh \
    fontconfig \
    ttf-dejavu \
    bash \
    sudo \
    ncurses \
    wget \
    unzip \
    shadow \
    && fc-cache -f -v

# Donne les droits sudo à l'utilisateur node
RUN adduser node wheel \
    && echo "node ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers \
    && sed -i 's/^%wheel ALL=(ALL) ALL/%wheel ALL=(ALL) NOPASSWD: ALL/' /etc/sudoers

RUN npm install -g pnpm
    
# Ajout de Oh My Zsh + Powerlevel10k
USER node

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended \
    && git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/custom/themes/powerlevel10k \
    && sed -i 's|ZSH_THEME=.*|ZSH_THEME="powerlevel10k/powerlevel10k"|' ~/.zshrc \
    && echo 'POWERLEVEL9K_DISABLE_CONFIGURATION_WIZARD=true' >> ~/.zshrc \
    && echo '[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh' >> ~/.zshrc
